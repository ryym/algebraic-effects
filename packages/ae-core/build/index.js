"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "Operation", {
  enumerable: true,
  get: function get() {
    return _utils2.Operation;
  }
});
Object.defineProperty(exports, "func", {
  enumerable: true,
  get: function get() {
    return _utils2.func;
  }
});
Object.defineProperty(exports, "createGenericEffect", {
  enumerable: true,
  get: function get() {
    return _generic.createGenericEffect;
  }
});
exports.run = exports.composeHandlers = exports.createEffect = void 0;

var _task = _interopRequireDefault(require("@algebraic-effects/task"));

var _utils = require("@algebraic-effects/utils");

var _utils2 = require("./utils");

var _generic = _interopRequireWildcard(require("./generic"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var runProgram = function runProgram(program) {
  for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    args[_key - 1] = arguments[_key];
  }

  var p = program.constructor.name === 'GeneratorFunction' ? program.apply(void 0, args) : program;
  if (!(0, _utils.isGenerator)(p)) throw new Error('Not a valid program. You need to pass either a generator function or a generator instance');
  return p;
};

var operationName = function operationName(effect, op) {
  return effect ? "".concat(effect, "[").concat(op, "]") : op;
};

var createRunner = function createRunner() {
  var _handlers = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
      _ref$effect = _ref.effect,
      effect = _ref$effect === void 0 ? 'GenericEffect' : _ref$effect,
      _ref$isComposed = _ref.isComposed,
      isComposed = _ref$isComposed === void 0 ? false : _ref$isComposed;

  var valueHandler = _handlers._ || _utils2.VALUE_HANDLER;
  var handlers = isComposed ? _handlers : Object.keys(_handlers).reduce(function (acc, key) {
    return _objectSpread({}, acc, _defineProperty({}, operationName(effect, key), _handlers[key]));
  }, {});

  var effectRunner = function effectRunner(p) {
    for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
      args[_key2 - 1] = arguments[_key2];
    }

    var task = (0, _task.default)(function (reject, resolve) {
      var program = runProgram.apply(void 0, [p].concat(args));

      var throwError = function throwError(x) {
        program.return(x);
        !task.isCancelled && reject(x);
      };

      var end = function end(x) {
        program.return(x);
        !task.isCancelled && resolve(x);
      };

      var nextValue = function nextValue(program, returnVal) {
        try {
          return program.next(returnVal);
        } catch (e) {
          throwError(e);
          return {
            done: true
          };
        }
      };

      var resume = function resume(x) {
        if (task.isCancelled) return program.return(null);

        var call = function call(p) {
          for (var _len3 = arguments.length, a = new Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
            a[_key3 - 1] = arguments[_key3];
          }

          return effectRunner.apply(void 0, [p].concat(a));
        };

        var promise = function promise(_promise) {
          return _promise.then(resume).catch(throwError);
        };

        var flowOperators = {
          resume: resume,
          end: end,
          throwError: throwError,
          call: call,
          promise: promise
        };

        var _nextValue = nextValue(program, x),
            value = _nextValue.value,
            done = _nextValue.done;

        if (done) return valueHandler(flowOperators)(value);

        if ((0, _utils2.isOperation)(value)) {
          var runOp = handlers[value.name] || _generic.default[value.name];

          if (!runOp) {
            throwError(new Error("Invalid operation executed. The handler for operation \"".concat(value.name, "\", was not provided")));
            return;
          }

          runOp(flowOperators).apply(void 0, _toConsumableArray(value.payload));
        } else {
          valueHandler(flowOperators)(value);
        }
      };

      setTimeout(resume, 0);
      return function () {
        return task.isCancelled = true;
      };
    });
    task.isCancelled = false;
    return task;
  };

  effectRunner.$$type = _utils2.HANDLER;
  effectRunner.effectName = effect;
  effectRunner.handlers = handlers;

  effectRunner.concat = function (run1) {
    return createRunner(_objectSpread({}, handlers, run1.handlers), {
      effect: "".concat(effectRunner.effectName, ".").concat(run1.effectName),
      isComposed: true
    });
  };

  effectRunner.with = function (runner) {
    return effectRunner.concat(runner.$$type === _utils2.HANDLER ? runner : createRunner(runner, {
      effect: ''
    }));
  };

  effectRunner.run = effectRunner;
  return effectRunner;
};

var createEffect = function createEffect(name, operations) {
  return _objectSpread({
    name: name,
    operations: operations,
    handler: function handler(handlers) {
      return createRunner(handlers, {
        effect: name
      });
    },
    extendAs: function extendAs(newName, newOps) {
      return createEffect(newName, _objectSpread({}, operations, newOps));
    }
  }, Object.keys(operations).reduce(function (acc, opName) {
    return _objectSpread({}, acc, _defineProperty({}, opName, (0, _utils2.Operation)(operationName(name, opName), operations[opName])));
  }, {}));
};

exports.createEffect = createEffect;

var composeHandlers = function composeHandlers() {
  for (var _len4 = arguments.length, runners = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
    runners[_key4] = arguments[_key4];
  }

  return runners.reduce(function (a, b) {
    return a.concat(b);
  });
};

exports.composeHandlers = composeHandlers;
var run = createRunner();
exports.run = run;