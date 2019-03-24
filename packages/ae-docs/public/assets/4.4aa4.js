(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{"./packages/ae-docs/pages/Random.mdx":function(e,a,n){"use strict";n.r(a),n.d(a,"default",function(){return N});var s=n("./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),m=n("./node_modules/@babel/runtime/helpers/esm/classCallCheck.js"),t=n("./node_modules/@babel/runtime/helpers/esm/createClass.js"),o=n("./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js"),p=n("./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js"),r=n("./node_modules/@babel/runtime/helpers/esm/inherits.js"),c=n("./node_modules/react/index.js"),l=n.n(c),d=n("./node_modules/@mdx-js/tag/dist/index.js"),N=function(e){function a(e){var n;return Object(m.a)(this,a),(n=Object(o.a)(this,Object(p.a)(a).call(this,e))).layout=null,n}return Object(r.a)(a,e),Object(t.a)(a,[{key:"render",value:function(){var e=this.props,a=e.components;Object(s.a)(e,["components"]);return l.a.createElement(d.MDXTag,{name:"wrapper",components:a},l.a.createElement(d.MDXTag,{name:"h1",components:a,props:{id:"random-effect"}},"Random Effect"),l.a.createElement(d.MDXTag,{name:"p",components:a},"Random effect allows you get random numbers, items from lists and ints."),l.a.createElement(d.MDXTag,{name:"blockquote",components:a},l.a.createElement(d.MDXTag,{name:"p",components:a,parentName:"blockquote"},"NOTE: Do not use for any kind of cryptographic operation. It uses a simple seed based algorithm for random number generation. You can use this interface and add your own custom handler using the ",l.a.createElement(d.MDXTag,{name:"inlineCode",components:a,parentName:"p"},".handler")," method.")),l.a.createElement(d.MDXTag,{name:"hr",components:a}),l.a.createElement(d.MDXTag,{name:"h2",components:a,props:{id:"import-it-in-your-project"}},"Import it in your project"),l.a.createElement(d.MDXTag,{name:"pre",components:a},l.a.createElement(d.MDXTag,{name:"code",components:a,parentName:"pre",props:{className:"hljs language-js"}},l.a.createElement(d.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"hljs-keyword"}},"import")," { Random } ",l.a.createElement(d.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"hljs-keyword"}},"from")," ",l.a.createElement(d.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"hljs-string"}},"'@algebraic-effects/effects'"),";")),l.a.createElement(d.MDXTag,{name:"h2",components:a,props:{id:"api"}},"API"),l.a.createElement(d.MDXTag,{name:"h3",components:a,props:{id:"with-handler"}},"With handler"),l.a.createElement(d.MDXTag,{name:"ul",components:a},l.a.createElement(d.MDXTag,{name:"li",components:a,parentName:"ul"},l.a.createElement(d.MDXTag,{name:"inlineCode",components:a,parentName:"li"},"Random.random"),"\nThis handler is a pre-seeded random number generator (Seed is generated randomly too).")),l.a.createElement(d.MDXTag,{name:"pre",components:a},l.a.createElement(d.MDXTag,{name:"code",components:a,parentName:"pre",props:{className:"hljs language-haskell"}},l.a.createElement(d.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"hljs-type"}},"Random"),".random :: (",l.a.createElement(d.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"hljs-type"}},"Program"),"<",l.a.createElement(d.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"hljs-type"}},"Random"),"> ...b c, ...b) -> ",l.a.createElement(d.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"hljs-type"}},"Task")," e c")),l.a.createElement(d.MDXTag,{name:"ul",components:a},l.a.createElement(d.MDXTag,{name:"li",components:a,parentName:"ul"},l.a.createElement(d.MDXTag,{name:"inlineCode",components:a,parentName:"li"},"Random.seed"),"\nPass it the initial seed value and it will produce a reproducable random number.")),l.a.createElement(d.MDXTag,{name:"pre",components:a},l.a.createElement(d.MDXTag,{name:"code",components:a,parentName:"pre",props:{className:"hljs language-haskell"}},l.a.createElement(d.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"hljs-type"}},"Random"),".seed :: ",l.a.createElement(d.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"hljs-type"}},"Number")," -> (",l.a.createElement(d.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"hljs-type"}},"Program"),"<",l.a.createElement(d.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"hljs-type"}},"Random"),"> ...b c, ...b) -> ",l.a.createElement(d.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"hljs-type"}},"Task")," e c")),l.a.createElement(d.MDXTag,{name:"h3",components:a,props:{id:"operations"}},"Operations"),l.a.createElement(d.MDXTag,{name:"pre",components:a},l.a.createElement(d.MDXTag,{name:"code",components:a,parentName:"pre",props:{className:"hljs language-js"}},"Random = {\n  ",l.a.createElement(d.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"hljs-attr"}},"number"),": func([",l.a.createElement(d.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"hljs-string"}},"'?times'"),"], ",l.a.createElement(d.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"hljs-string"}},"'number'"),", { ",l.a.createElement(d.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"hljs-attr"}},"isMulti"),": ",l.a.createElement(d.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"hljs-literal"}},"true")," }),\n  ",l.a.createElement(d.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"hljs-attr"}},"getInt"),": func([",l.a.createElement(d.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"hljs-string"}},"'number'"),", ",l.a.createElement(d.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"hljs-string"}},"'number'"),", ",l.a.createElement(d.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"hljs-string"}},"'?times'"),"], ",l.a.createElement(d.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"hljs-string"}},"'number'"),", { ",l.a.createElement(d.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"hljs-attr"}},"isMulti"),": ",l.a.createElement(d.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"hljs-literal"}},"true")," }),\n  ",l.a.createElement(d.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"hljs-attr"}},"fromArray"),": func([",l.a.createElement(d.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"hljs-string"}},"'array a'"),", ",l.a.createElement(d.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"hljs-string"}},"'?times'"),"], ",l.a.createElement(d.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"hljs-string"}},"'a'"),", { ",l.a.createElement(d.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"hljs-attr"}},"isMulti"),": ",l.a.createElement(d.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"hljs-literal"}},"true")," }),\n  ",l.a.createElement(d.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"hljs-attr"}},"flipCoin"),": func([",l.a.createElement(d.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"hljs-string"}},"'?times'"),"], ",l.a.createElement(d.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"hljs-string"}},"'bool'"),", { ",l.a.createElement(d.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"hljs-attr"}},"isMulti"),": ",l.a.createElement(d.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"hljs-literal"}},"true")," }),\n}")),l.a.createElement(d.MDXTag,{name:"h2",components:a,props:{id:"usage-examples"}},"Usage examples"),l.a.createElement(d.MDXTag,{name:"h3",components:a,props:{id:"using-random-effect"}},"Using Random effect"),l.a.createElement(d.MDXTag,{name:"pre",components:a},l.a.createElement(d.MDXTag,{name:"code",components:a,parentName:"pre",props:{className:"hljs language-js"}},l.a.createElement(d.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"hljs-keyword"}},"import")," { Random } ",l.a.createElement(d.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"hljs-keyword"}},"from")," ",l.a.createElement(d.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"hljs-string"}},"'@algebraic-effects/effects'"),";\n\n",l.a.createElement(d.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"hljs-function"}},l.a.createElement(d.MDXTag,{name:"span",components:a,parentName:"span",props:{className:"hljs-keyword"}},"function")," *",l.a.createElement(d.MDXTag,{name:"span",components:a,parentName:"span",props:{className:"hljs-title"}},"myNumGenerator"),"(",l.a.createElement(d.MDXTag,{name:"span",components:a,parentName:"span",props:{className:"hljs-params"}}),") "),"{\n  ",l.a.createElement(d.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"hljs-keyword"}},"const")," randomNumber = ",l.a.createElement(d.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"hljs-keyword"}},"yield")," Random.number(); ",l.a.createElement(d.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"hljs-comment"}},"// Yields a random nunmber between 0 and 1"),"\n  ",l.a.createElement(d.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"hljs-keyword"}},"const")," rInt = ",l.a.createElement(d.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"hljs-keyword"}},"yield")," Random.getInt(",l.a.createElement(d.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"hljs-number"}},"5"),", ",l.a.createElement(d.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"hljs-number"}},"20"),"); ",l.a.createElement(d.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"hljs-comment"}},"// Yields a random int beteen 5 and 20 inclusive"),"\n  ",l.a.createElement(d.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"hljs-keyword"}},"const")," iceCream = ",l.a.createElement(d.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"hljs-keyword"}},"yield")," Random.fromArray([ ",l.a.createElement(d.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"hljs-string"}},"'chocolate'"),", ",l.a.createElement(d.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"hljs-string"}},"'strawberry'")," ]); ",l.a.createElement(d.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"hljs-comment"}},"// Yields a random item from the array"),"\n}\n\nRandom.random(myNumGenerator).fork(",l.a.createElement(d.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"hljs-function"}},l.a.createElement(d.MDXTag,{name:"span",components:a,parentName:"span",props:{className:"hljs-params"}},"()")," =>")," {}, onSuccess);\n",l.a.createElement(d.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"hljs-comment"}},"// OR"),"\nRandom.seed(",l.a.createElement(d.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"hljs-number"}},"10"),").run(myNumGenerator).fork(",l.a.createElement(d.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"hljs-function"}},l.a.createElement(d.MDXTag,{name:"span",components:a,parentName:"span",props:{className:"hljs-params"}},"()")," =>")," {}, onSuccess); ",l.a.createElement(d.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"hljs-comment"}},"// Seed value 10"))),l.a.createElement(d.MDXTag,{name:"h3",components:a,props:{id:"with-multiple-continuations"}},"With multiple continuations"),l.a.createElement(d.MDXTag,{name:"p",components:a},"In all the operations, the last arguement is an options ",l.a.createElement(d.MDXTag,{name:"inlineCode",components:a,parentName:"p"},"times")," parameter. You can use this to specify the number of times you want the operation to run in multiple continuations mode."),l.a.createElement(d.MDXTag,{name:"pre",components:a},l.a.createElement(d.MDXTag,{name:"code",components:a,parentName:"pre",props:{className:"hljs language-js"}},l.a.createElement(d.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"hljs-keyword"}},"import")," { Random } ",l.a.createElement(d.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"hljs-keyword"}},"from")," ",l.a.createElement(d.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"hljs-string"}},"'@algebraic-effects/effects'"),";\n\n",l.a.createElement(d.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"hljs-function"}},l.a.createElement(d.MDXTag,{name:"span",components:a,parentName:"span",props:{className:"hljs-keyword"}},"function")," *",l.a.createElement(d.MDXTag,{name:"span",components:a,parentName:"span",props:{className:"hljs-title"}},"randomizer"),"(",l.a.createElement(d.MDXTag,{name:"span",components:a,parentName:"span",props:{className:"hljs-params"}}),") "),"{\n  ",l.a.createElement(d.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"hljs-keyword"}},"const")," randInt = ",l.a.createElement(d.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"hljs-keyword"}},"yield")," Random.getInt(",l.a.createElement(d.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"hljs-number"}},"0"),", ",l.a.createElement(d.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"hljs-number"}},"100"),", ",l.a.createElement(d.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"hljs-number"}},"2"),"); ",l.a.createElement(d.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"hljs-comment"}},"// Generates a random int bw 0 and 100, twice"),"\n  ",l.a.createElement(d.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"hljs-keyword"}},"const")," coinFlip = ",l.a.createElement(d.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"hljs-keyword"}},"yield")," Random.flipCoin(",l.a.createElement(d.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"hljs-number"}},"4"),"); ",l.a.createElement(d.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"hljs-comment"}},"// Flips a coin 4 times"),"\n  ",l.a.createElement(d.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"hljs-comment"}},"// Will run anothing below, 8 times and generate 8 results"),"\n  ",l.a.createElement(d.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"hljs-keyword"}},"return")," [randInt, coinFlip];\n}\n\nRandom.random.runMulti(randomizer).fork(",l.a.createElement(d.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"hljs-function"}},l.a.createElement(d.MDXTag,{name:"span",components:a,parentName:"span",props:{className:"hljs-params"}},"()")," =>")," {}, onSuccess);\n",l.a.createElement(d.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"hljs-comment"}},"// OR"),"\nRandom.seed(",l.a.createElement(d.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"hljs-number"}},"10"),").runMulti(randomizer).fork(",l.a.createElement(d.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"hljs-function"}},l.a.createElement(d.MDXTag,{name:"span",components:a,parentName:"span",props:{className:"hljs-params"}},"()")," =>")," {}, onSuccess); ",l.a.createElement(d.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"hljs-comment"}},"// Seed value 10"),"\n\n",l.a.createElement(d.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"hljs-comment"}},"// Will result in something of the form"),"\n",l.a.createElement(d.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"hljs-comment"}},"// ["),"\n",l.a.createElement(d.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"hljs-comment"}},"//   [4, true],"),"\n",l.a.createElement(d.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"hljs-comment"}},"//   [4, false],"),"\n",l.a.createElement(d.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"hljs-comment"}},"//   [4, false],"),"\n",l.a.createElement(d.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"hljs-comment"}},"//   [4, true],"),"\n",l.a.createElement(d.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"hljs-comment"}},"//   [72, false],"),"\n",l.a.createElement(d.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"hljs-comment"}},"//   [72, true],"),"\n",l.a.createElement(d.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"hljs-comment"}},"//   [72, true],"),"\n",l.a.createElement(d.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"hljs-comment"}},"//   [72, true],"),"\n",l.a.createElement(d.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"hljs-comment"}},"// ]"))))}}]),a}(l.a.Component)}}]);