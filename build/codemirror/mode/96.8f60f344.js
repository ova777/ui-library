webpackJsonp([48],{1023:function(e,t,n){!function(e){e(n(915))}(function(e){"use strict";function wordSet(e){for(var t={},n=0;n<e.length;n++)t[e[n]]=!0;return t}function tokenBase(e,h,k){if(e.sol()&&(h.indented=e.indentation()),e.eatSpace())return null;var v=e.peek();if("/"==v){if(e.match("//"))return e.skipToEnd(),"comment";if(e.match("/*"))return h.tokenize.push(tokenComment),tokenComment(e,h)}if(e.match(p))return"builtin";if(e.match(m))return"attribute";if(e.match(u))return"number";if(e.match(c))return"number";if(e.match(f))return"number";if(e.match(s))return"number";if(e.match(l))return"property";if(o.indexOf(v)>-1)return e.next(),"operator";if(a.indexOf(v)>-1)return e.next(),e.match(".."),"punctuation";if('"'==v||"'"==v){e.next();var _=tokenString(v);return h.tokenize.push(_),_(e,h)}if(e.match(d)){var x=e.current();return i.hasOwnProperty(x)?"variable-2":r.hasOwnProperty(x)?"atom":t.hasOwnProperty(x)?(n.hasOwnProperty(x)&&(h.prev="define"),"keyword"):"define"==k?"def":"variable"}return e.next(),null}function tokenUntilClosingParen(){var e=0;return function(t,n,r){var i=tokenBase(t,n,r);if("punctuation"==i)if("("==t.current())++e;else if(")"==t.current()){if(0==e)return t.backUp(1),n.tokenize.pop(),n.tokenize[n.tokenize.length-1](t,n);--e}return i}}function tokenString(e){return function(t,n){for(var r,i=!1;r=t.next();)if(i){if("("==r)return n.tokenize.push(tokenUntilClosingParen()),"string";i=!1}else{if(r==e)break;i="\\"==r}return n.tokenize.pop(),"string"}}function tokenComment(e,t){return e.match(/^(?:[^*]|\*(?!\/))*/),e.match("*/")&&t.tokenize.pop(),"comment"}function Context(e,t,n){this.prev=e,this.align=t,this.indented=n}function pushContext(e,t){var n=t.match(/^\s*($|\/[\/\*])/,!1)?null:t.column()+1;e.context=new Context(e.context,n,e.indented)}function popContext(e){e.context&&(e.indented=e.context.indented,e.context=e.context.prev)}var t=wordSet(["_","var","let","class","enum","extension","import","protocol","struct","func","typealias","associatedtype","open","public","internal","fileprivate","private","deinit","init","new","override","self","subscript","super","convenience","dynamic","final","indirect","lazy","required","static","unowned","unowned(safe)","unowned(unsafe)","weak","as","is","break","case","continue","default","else","fallthrough","for","guard","if","in","repeat","switch","where","while","defer","return","inout","mutating","nonmutating","catch","do","rethrows","throw","throws","try","didSet","get","set","willSet","assignment","associativity","infix","left","none","operator","postfix","precedence","precedencegroup","prefix","right","Any","AnyObject","Type","dynamicType","Self","Protocol","__COLUMN__","__FILE__","__FUNCTION__","__LINE__"]),n=wordSet(["var","let","class","enum","extension","import","protocol","struct","func","typealias","associatedtype","for"]),r=wordSet(["true","false","nil","self","super","_"]),i=wordSet(["Array","Bool","Character","Dictionary","Double","Float","Int","Int8","Int16","Int32","Int64","Never","Optional","Set","String","UInt8","UInt16","UInt32","UInt64","Void"]),o="+-/*%=|&<>~^?!",a=":;,.(){}[]",u=/^\-?0b[01][01_]*/,c=/^\-?0o[0-7][0-7_]*/,f=/^\-?0x[\dA-Fa-f][\dA-Fa-f_]*(?:(?:\.[\dA-Fa-f][\dA-Fa-f_]*)?[Pp]\-?\d[\d_]*)?/,s=/^\-?\d[\d_]*(?:\.\d[\d_]*)?(?:[Ee]\-?\d[\d_]*)?/,d=/^\$\d+|(`?)[_A-Za-z][_A-Za-z$0-9]*\1/,l=/^\.(?:\$\d+|(`?)[_A-Za-z][_A-Za-z$0-9]*\1)/,p=/^\#[A-Za-z]+/,m=/^@(?:\$\d+|(`?)[_A-Za-z][_A-Za-z$0-9]*\1)/;e.defineMode("swift",function(e){return{startState:function(){return{prev:null,context:null,indented:0,tokenize:[]}},token:function(e,t){var n=t.prev;t.prev=null;var r=(t.tokenize[t.tokenize.length-1]||tokenBase)(e,t,n);if(r&&"comment"!=r?t.prev||(t.prev=r):t.prev=n,"punctuation"==r){var i=/[\(\[\{]|([\]\)\}])/.exec(e.current());i&&(i[1]?popContext:pushContext)(t,e)}return r},indent:function(t,n){var r=t.context;if(!r)return 0;var i=/^[\]\}\)]/.test(n);return null!=r.align?r.align-(i?1:0):r.indented+(i?0:e.indentUnit)},electricInput:/^\s*[\)\}\]]$/,lineComment:"//",blockCommentStart:"/*",blockCommentEnd:"*/",fold:"brace",closeBrackets:"()[]{}''\"\"``"}}),e.defineMIME("text/x-swift","swift")})}});