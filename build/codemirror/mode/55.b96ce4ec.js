webpackJsonp([80],{988:function(e,t,r){!function(e){e(r(915))}(function(e){"use strict";e.defineMode("mllike",function(e,t){function tokenBase(e,n){var o=e.next();if('"'===o)return n.tokenize=tokenString,n.tokenize(e,n);if("("===o&&e.eat("*"))return n.commentLevel++,n.tokenize=tokenComment,n.tokenize(e,n);if("~"===o)return e.eatWhile(/\w/),"variable-2";if("`"===o)return e.eatWhile(/\w/),"quote";if("/"===o&&t.slashComments&&e.eat("/"))return e.skipToEnd(),"comment";if(/\d/.test(o))return e.eatWhile(/[\d]/),e.eat(".")&&e.eatWhile(/[\d]/),"number";if(/[+\-*&%=<>!?|]/.test(o))return"operator";if(/[\w\xa1-\uffff]/.test(o)){e.eatWhile(/[\w\xa1-\uffff]/);var i=e.current();return r.hasOwnProperty(i)?r[i]:"variable"}return null}function tokenString(e,t){for(var r,n=!1,o=!1;null!=(r=e.next());){if('"'===r&&!o){n=!0;break}o=!o&&"\\"===r}return n&&!o&&(t.tokenize=tokenBase),"string"}function tokenComment(e,t){for(var r,n;t.commentLevel>0&&null!=(n=e.next());)"("===r&&"*"===n&&t.commentLevel++,"*"===r&&")"===n&&t.commentLevel--,r=n;return t.commentLevel<=0&&(t.tokenize=tokenBase),"comment"}var r={let:"keyword",rec:"keyword",in:"keyword",of:"keyword",and:"keyword",if:"keyword",then:"keyword",else:"keyword",for:"keyword",to:"keyword",while:"keyword",do:"keyword",done:"keyword",fun:"keyword",function:"keyword",val:"keyword",type:"keyword",mutable:"keyword",match:"keyword",with:"keyword",try:"keyword",open:"builtin",ignore:"builtin",begin:"keyword",end:"keyword"},n=t.extraWords||{};for(var o in n)n.hasOwnProperty(o)&&(r[o]=t.extraWords[o]);return{startState:function(){return{tokenize:tokenBase,commentLevel:0}},token:function(e,t){return e.eatSpace()?null:t.tokenize(e,t)},blockCommentStart:"(*",blockCommentEnd:"*)",lineComment:t.slashComments?"//":null}}),e.defineMIME("text/x-ocaml",{name:"mllike",extraWords:{succ:"keyword",trace:"builtin",exit:"builtin",print_string:"builtin",print_endline:"builtin",true:"atom",false:"atom",raise:"keyword"}}),e.defineMIME("text/x-fsharp",{name:"mllike",extraWords:{abstract:"keyword",as:"keyword",assert:"keyword",base:"keyword",class:"keyword",default:"keyword",delegate:"keyword",downcast:"keyword",downto:"keyword",elif:"keyword",exception:"keyword",extern:"keyword",finally:"keyword",global:"keyword",inherit:"keyword",inline:"keyword",interface:"keyword",internal:"keyword",lazy:"keyword","let!":"keyword",member:"keyword",module:"keyword",namespace:"keyword",new:"keyword",null:"keyword",override:"keyword",private:"keyword",public:"keyword",return:"keyword","return!":"keyword",select:"keyword",static:"keyword",struct:"keyword",upcast:"keyword",use:"keyword","use!":"keyword",val:"keyword",when:"keyword",yield:"keyword","yield!":"keyword",List:"builtin",Seq:"builtin",Map:"builtin",Set:"builtin",int:"builtin",string:"builtin",raise:"builtin",failwith:"builtin",not:"builtin",true:"builtin",false:"builtin"},slashComments:!0})})}});