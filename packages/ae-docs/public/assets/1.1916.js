(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{"./packages/ae-docs/pages/Exception.mdx":function(e,a,n){"use strict";n.r(a),n.d(a,"default",function(){return d});var s=n("./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),t=n("./node_modules/@babel/runtime/helpers/esm/classCallCheck.js"),o=n("./node_modules/@babel/runtime/helpers/esm/createClass.js"),m=n("./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js"),p=n("./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js"),r=n("./node_modules/@babel/runtime/helpers/esm/inherits.js"),c=n("./node_modules/react/index.js"),l=n.n(c),i=n("./node_modules/@mdx-js/tag/dist/index.js"),d=function(e){function a(e){var n;return Object(t.a)(this,a),(n=Object(m.a)(this,Object(p.a)(a).call(this,e))).layout=null,n}return Object(r.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){var e=this.props,a=e.components;Object(s.a)(e,["components"]);return l.a.createElement(i.MDXTag,{name:"wrapper",components:a},l.a.createElement(i.MDXTag,{name:"h1",components:a,props:{id:"exception-effect"}},"Exception Effect"),l.a.createElement(i.MDXTag,{name:"p",components:a},"Exception effect allows you to create a throw operation to break out of the flow of your program."),l.a.createElement(i.MDXTag,{name:"hr",components:a}),l.a.createElement(i.MDXTag,{name:"h2",components:a,props:{id:"import-it-in-your-project"}},"Import it in your project"),l.a.createElement(i.MDXTag,{name:"pre",components:a},l.a.createElement(i.MDXTag,{name:"code",components:a,parentName:"pre",props:{className:"hljs language-js"}},l.a.createElement(i.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"hljs-keyword"}},"import")," { Exception } ",l.a.createElement(i.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"hljs-keyword"}},"from")," ",l.a.createElement(i.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"hljs-string"}},"'@algebraic-effects/effects'"),";")),l.a.createElement(i.MDXTag,{name:"h2",components:a,props:{id:"api"}},"API"),l.a.createElement(i.MDXTag,{name:"h3",components:a,props:{id:"with-handler"}},"With handler"),l.a.createElement(i.MDXTag,{name:"ul",components:a},l.a.createElement(i.MDXTag,{name:"li",components:a,parentName:"ul"},l.a.createElement(i.MDXTag,{name:"inlineCode",components:a,parentName:"li"},"Exception.try"),"\nIt accepts a program (generator with effects) and returns a task")),l.a.createElement(i.MDXTag,{name:"pre",components:a},l.a.createElement(i.MDXTag,{name:"code",components:a,parentName:"pre",props:{className:"hljs language-haskell"}},l.a.createElement(i.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"hljs-title"}},"try")," :: (",l.a.createElement(i.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"hljs-type"}},"Program"),"<",l.a.createElement(i.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"hljs-type"}},"Exception"),"> ...a b, ...a) -> ",l.a.createElement(i.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"hljs-type"}},"Task")," e b")),l.a.createElement(i.MDXTag,{name:"h3",components:a,props:{id:"operations"}},"Operations"),l.a.createElement(i.MDXTag,{name:"pre",components:a},l.a.createElement(i.MDXTag,{name:"code",components:a,parentName:"pre",props:{className:"hljs language-js"}},"Exception = {\n  ",l.a.createElement(i.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"hljs-attr"}},"throw"),": func([",l.a.createElement(i.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"hljs-string"}},"'error'"),"]),\n}")),l.a.createElement(i.MDXTag,{name:"h2",components:a,props:{id:"usage-examples"}},"Usage examples"),l.a.createElement(i.MDXTag,{name:"h3",components:a,props:{id:"using-exception-effect"}},"Using Exception effect"),l.a.createElement(i.MDXTag,{name:"p",components:a},"You can use the Exception effect to handle error flows in your application. This gives you more control of the flow of the program than the traditional throw with ",l.a.createElement(i.MDXTag,{name:"inlineCode",components:a,parentName:"p"},"try/catch"),"."),l.a.createElement(i.MDXTag,{name:"pre",components:a},l.a.createElement(i.MDXTag,{name:"code",components:a,parentName:"pre",props:{className:"hljs language-js"}},l.a.createElement(i.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"hljs-keyword"}},"import")," { Exception } ",l.a.createElement(i.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"hljs-keyword"}},"from")," ",l.a.createElement(i.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"hljs-string"}},"'@algebraic-effects/core'"),";\n\n",l.a.createElement(i.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"hljs-keyword"}},"const")," divide = ",l.a.createElement(i.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"hljs-function"}},l.a.createElement(i.MDXTag,{name:"span",components:a,parentName:"span",props:{className:"hljs-keyword"}},"function")," *(",l.a.createElement(i.MDXTag,{name:"span",components:a,parentName:"span",props:{className:"hljs-params"}},"a, b"),") "),"{\n  ",l.a.createElement(i.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"hljs-keyword"}},"if")," (b === ",l.a.createElement(i.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"hljs-number"}},"0"),") ",l.a.createElement(i.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"hljs-keyword"}},"yield")," Exception.throw(",l.a.createElement(i.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"hljs-keyword"}},"new")," ",l.a.createElement(i.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"hljs-built_in"}},"Error"),"(",l.a.createElement(i.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"hljs-string"}},"'Invalid operation'"),"));\n  ",l.a.createElement(i.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"hljs-keyword"}},"yield")," a / b;\n};\n\nException.try(divide, ",l.a.createElement(i.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"hljs-number"}},"5"),", ",l.a.createElement(i.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"hljs-number"}},"2"),")\n  .fork(",l.a.createElement(i.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"hljs-function"}},l.a.createElement(i.MDXTag,{name:"span",components:a,parentName:"span",props:{className:"hljs-params"}},"()")," =>")," {}, result => ",l.a.createElement(i.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"hljs-built_in"}},"console"),".log(",l.a.createElement(i.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"hljs-string"}},"'5 / 2 ==='"),", result));\n\nException.try(divide, ",l.a.createElement(i.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"hljs-number"}},"5"),", ",l.a.createElement(i.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"hljs-number"}},"0"),")\n  .fork(",l.a.createElement(i.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"hljs-function"}},l.a.createElement(i.MDXTag,{name:"span",components:a,parentName:"span",props:{className:"hljs-params"}},"e")," =>")," ",l.a.createElement(i.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"hljs-built_in"}},"console"),".error(e), () => {});")),l.a.createElement(i.MDXTag,{name:"h3",components:a,props:{id:"custom-handler-for-exception-effect-toeither"}},"Custom handler for Exception effect (toEither)"),l.a.createElement(i.MDXTag,{name:"pre",components:a},l.a.createElement(i.MDXTag,{name:"code",components:a,parentName:"pre",props:{className:"hljs language-js"}},l.a.createElement(i.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"hljs-keyword"}},"import")," { Exception } ",l.a.createElement(i.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"hljs-keyword"}},"from")," ",l.a.createElement(i.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"hljs-string"}},"'@algebraic-effects/core'"),";\n",l.a.createElement(i.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"hljs-keyword"}},"import")," Either ",l.a.createElement(i.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"hljs-keyword"}},"from")," ",l.a.createElement(i.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"hljs-string"}},"'crocks/Either'"),"; ",l.a.createElement(i.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"hljs-comment"}},"// Using Either from crocks"),"\n\n",l.a.createElement(i.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"hljs-comment"}},"// divide :: Program<Exception> (Number, Number) Number"),"\n",l.a.createElement(i.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"hljs-keyword"}},"const")," divide = ",l.a.createElement(i.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"hljs-function"}},l.a.createElement(i.MDXTag,{name:"span",components:a,parentName:"span",props:{className:"hljs-keyword"}},"function")," *(",l.a.createElement(i.MDXTag,{name:"span",components:a,parentName:"span",props:{className:"hljs-params"}},"a, b"),") "),"{\n  ",l.a.createElement(i.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"hljs-keyword"}},"if")," (b === ",l.a.createElement(i.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"hljs-number"}},"0"),") ",l.a.createElement(i.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"hljs-keyword"}},"yield")," Exception.throw(",l.a.createElement(i.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"hljs-keyword"}},"new")," ",l.a.createElement(i.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"hljs-built_in"}},"Error"),"(",l.a.createElement(i.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"hljs-string"}},"'Invalid operation'"),"));\n  ",l.a.createElement(i.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"hljs-keyword"}},"yield")," a / b;\n};\n\n",l.a.createElement(i.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"hljs-comment"}},"// toEither :: (Program<Exception> (...a)  b, ...a) -> Task.Resolved (Either Error b)"),"\n",l.a.createElement(i.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"hljs-keyword"}},"const")," toEither = Exception.handler({\n  ",l.a.createElement(i.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"hljs-attr"}},"throw"),": ",l.a.createElement(i.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"hljs-function"}},"(",l.a.createElement(i.MDXTag,{name:"span",components:a,parentName:"span",props:{className:"hljs-params"}},"{ end }"),") =>")," error => end(Either.Left(error.message)),\n  ",l.a.createElement(i.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"hljs-attr"}},"_"),": ",l.a.createElement(i.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"hljs-function"}},"(",l.a.createElement(i.MDXTag,{name:"span",components:a,parentName:"span",props:{className:"hljs-params"}},"{ end }"),") =>")," value => end(Either.Right(value)),\n});\n\n",l.a.createElement(i.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"hljs-keyword"}},"await")," toEither(divide, ",l.a.createElement(i.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"hljs-number"}},"5"),", ",l.a.createElement(i.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"hljs-number"}},"2"),").toPromise(); ",l.a.createElement(i.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"hljs-comment"}},"// Either.Right 2.5"),"\n",l.a.createElement(i.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"hljs-keyword"}},"await")," toEither(divide, ",l.a.createElement(i.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"hljs-number"}},"5"),", ",l.a.createElement(i.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"hljs-number"}},"0"),").toPromise(); ",l.a.createElement(i.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"hljs-comment"}},"// Either.Left 'Invalid operation'"))))}}]),a}(l.a.Component)}}]);