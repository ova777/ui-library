webpackJsonp([99],{967:function(e,t,n){!function(e){e(n(915))}(function(e){"use strict";e.defineMode("fcl",function(e){function tokenBase(e,t){var a=e.next();if(/[\d\.]/.test(a))return"."==a?e.match(/^[0-9]+([eE][\-+]?[0-9]+)?/):"0"==a?e.match(/^[xX][0-9a-fA-F]+/)||e.match(/^0[0-7]+/):e.match(/^[0-9]*\.?[0-9]*([eE][\-+]?[0-9]+)?/),"number";if("/"==a||"("==a){if(e.eat("*"))return t.tokenize=tokenComment,tokenComment(e,t);if(e.eat("/"))return e.skipToEnd(),"comment"}if(u.test(a))return e.eatWhile(u),"operator";e.eatWhile(/[\w\$_\xa1-\uffff]/);var c=e.current().toLowerCase();return n.propertyIsEnumerable(c)||o.propertyIsEnumerable(c)||r.propertyIsEnumerable(c)?"keyword":i.propertyIsEnumerable(c)?"atom":"variable"}function tokenComment(e,t){for(var n,o=!1;n=e.next();){if(("/"==n||")"==n)&&o){t.tokenize=tokenBase;break}o="*"==n}return"comment"}function Context(e,t,n,o,r){this.indented=e,this.column=t,this.type=n,this.align=o,this.prev=r}function pushContext(e,t,n){return e.context=new Context(e.indented,t,n,null,e.context)}function popContext(e){if(e.context.prev)return"end_block"==e.context.type&&(e.indented=e.context.indented),e.context=e.context.prev}var t=e.indentUnit,n={term:!0,method:!0,accu:!0,rule:!0,then:!0,is:!0,and:!0,or:!0,if:!0,default:!0},o={var_input:!0,var_output:!0,fuzzify:!0,defuzzify:!0,function_block:!0,ruleblock:!0},r={end_ruleblock:!0,end_defuzzify:!0,end_function_block:!0,end_fuzzify:!0,end_var:!0},i={true:!0,false:!0,nan:!0,real:!0,min:!0,max:!0,cog:!0,cogs:!0},u=/[+\-*&^%:=<>!|\/]/;return{startState:function(e){return{tokenize:null,context:new Context((e||0)-t,0,"top",!1),indented:0,startOfLine:!0}},token:function(e,t){var n=t.context;if(e.sol()&&(null==n.align&&(n.align=!1),t.indented=e.indentation(),t.startOfLine=!0),e.eatSpace())return null;var i=(t.tokenize||tokenBase)(e,t);if("comment"==i)return i;null==n.align&&(n.align=!0);var u=e.current().toLowerCase();return o.propertyIsEnumerable(u)?pushContext(t,e.column(),"end_block"):r.propertyIsEnumerable(u)&&popContext(t),t.startOfLine=!1,i},indent:function(e,n){if(e.tokenize!=tokenBase&&null!=e.tokenize)return 0;var o=e.context,i=r.propertyIsEnumerable(n);return o.align?o.column+(i?0:1):o.indented+(i?0:t)},electricChars:"ryk",fold:"brace",blockCommentStart:"(*",blockCommentEnd:"*)",lineComment:"//"}}),e.defineMIME("text/x-fcl","fcl")})}});