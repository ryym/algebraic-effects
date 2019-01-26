import { compose, identity } from '@algebraic-effects/utils';

// Task (constructor) :: ((RejectFn, ResolveFn) -> ()) -> Task e a
const Task = (taskFn) => {

  // fork :: (e -> (), b -> ()) -> CancelFunction
  const fork = (onFailure, onSuccess) => {
    let isCancelled = false;
    let isDone = false;

    const guard = cb => a => {
      isCancelled || isDone ? null : cb(a);
      isDone = true;
    };

    const globalCleanup = () => (isCancelled = true);
    const cleanup = taskFn(guard(onFailure), guard(onSuccess)) || identity;

    return compose(globalCleanup, cleanup);
  };

  // fold :: (e -> b, a -> b) -> Task () b
  const fold = (mapErr, mapVal) => Task((_, res) => fork(compose(res, mapErr), compose(res, mapVal)));

  // bimap :: (e -> e', a -> a') -> Task e' a'
  const bimap = (mapErr, mapVal) => Task((rej, res) => fork(compose(rej, mapErr), compose(res, mapVal)));

  // chain :: (a -> Task a') -> Task e a'
  const chain = fn => Task((reject, resolve) => fork(reject, b => fn(b).fork(reject, resolve)));

  return {
    fork,
    bimap,
    fold,
    chain,
    resolveWith: Task.Resolved, // TODO: Fix this to reolve/reject after the previous operations
    rejectWith: Task.Rejected,
    empty: Task.Empty,

    // map :: (a -> a') -> Task e a'
    map: fn => bimap(identity, fn),

    // mapRejected :: (e -> e') -> Task e' a
    mapRejected: fn => bimap(fn, identity),

    // toPromise :: () -> Promise e a
    toPromise: () => new Promise((res, rej) => fork(rej, res)),

    // toString :: () -> String
    toString: () => 'Task e a',
  };
};

// Task.Empty :: () -> Task
Task.Empty = () => Task(() => {});

// Task.Resolved :: a -> Task () a
Task.Resolved = data => Task((_, resolve) => resolve(data));

// Task.Rejected :: e -> Task e ()
Task.Rejected = data => Task(reject => reject(data));

// Task.of :: e -> Task e ()
Task.of = Task.Resolved;

// Task.fromPromise :: ((...*) -> Promise e a, ...*) -> Task e a
Task.fromPromise = function(factory) {
  return Task((rej, res) =>
    factory.apply(null, Array.prototype.slice.call(arguments, 1))
      .then(res)
      .catch(rej));
};

export default Task;
