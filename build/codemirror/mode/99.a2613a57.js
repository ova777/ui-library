webpackJsonp([45],{1026:function(e,t,n){!function(e){e(n(915))}(function(e){"use strict";e.defineMode("tiddlywiki",function(){function chain(e,t,n){return t.tokenize=n,n(e,t)}function tokenBase(t,l){var h=t.sol(),s=t.peek();if(l.block=!1,h&&/[<\/\*{}\-]/.test(s)){if(t.match(m))return l.block=!0,chain(t,l,twTokenCode);if(t.match(a))return"quote";if(t.match(i)||t.match(o))return"comment";if(t.match(u)||t.match(c)||t.match(k)||t.match(f))return"comment";if(t.match(r))return"hr"}if(t.next(),h&&/[\/\*!#;:>|]/.test(s)){if("!"==s)return t.skipToEnd(),"header";if("*"==s)return t.eatWhile("*"),"comment";if("#"==s)return t.eatWhile("#"),"comment";if(";"==s)return t.eatWhile(";"),"comment";if(":"==s)return t.eatWhile(":"),"comment";if(">"==s)return t.eatWhile(">"),"quote";if("|"==s)return"header"}if("{"==s&&t.match(/\{\{/))return chain(t,l,twTokenCode);if(/[hf]/i.test(s)&&/[ti]/i.test(t.peek())&&t.match(/\b(ttps?|tp|ile):\/\/[\-A-Z0-9+&@#\/%?=~_|$!:,.;]*[A-Z0-9+&@#\/%=~_|$]/i))return"link";if('"'==s)return"string";if("~"==s)return"brace";if(/[\[\]]/.test(s)&&t.match(s))return"brace";if("@"==s)return t.eatWhile(n),"link";if(/\d/.test(s))return t.eatWhile(/\d/),"number";if("/"==s){if(t.eat("%"))return chain(t,l,twTokenComment);if(t.eat("/"))return chain(t,l,twTokenEm)}if("_"==s&&t.eat("_"))return chain(t,l,twTokenUnderline);if("-"==s&&t.eat("-")){if(" "!=t.peek())return chain(t,l,twTokenStrike);if(" "==t.peek())return"brace"}return"'"==s&&t.eat("'")?chain(t,l,twTokenStrong):"<"==s&&t.eat("<")?chain(t,l,twTokenMacro):(t.eatWhile(/[\w\$_]/),e.propertyIsEnumerable(t.current())?"keyword":null)}function twTokenComment(e,t){for(var n,r=!1;n=e.next();){if("/"==n&&r){t.tokenize=tokenBase;break}r="%"==n}return"comment"}function twTokenStrong(e,t){for(var n,r=!1;n=e.next();){if("'"==n&&r){t.tokenize=tokenBase;break}r="'"==n}return"strong"}function twTokenCode(e,t){var n=t.block;return n&&e.current()?"comment":!n&&e.match(h)?(t.tokenize=tokenBase,"comment"):n&&e.sol()&&e.match(l)?(t.tokenize=tokenBase,"comment"):(e.next(),"comment")}function twTokenEm(e,t){for(var n,r=!1;n=e.next();){if("/"==n&&r){t.tokenize=tokenBase;break}r="/"==n}return"em"}function twTokenUnderline(e,t){for(var n,r=!1;n=e.next();){if("_"==n&&r){t.tokenize=tokenBase;break}r="_"==n}return"underlined"}function twTokenStrike(e,t){for(var n,r=!1;n=e.next();){if("-"==n&&r){t.tokenize=tokenBase;break}r="-"==n}return"strikethrough"}function twTokenMacro(e,n){if("<<"==e.current())return"macro";var r=e.next();return r?">"==r&&">"==e.peek()?(e.next(),n.tokenize=tokenBase,"macro"):(e.eatWhile(/[\w\$_]/),t.propertyIsEnumerable(e.current())?"keyword":null):(n.tokenize=tokenBase,null)}var e={},t={allTags:!0,closeAll:!0,list:!0,newJournal:!0,newTiddler:!0,permaview:!0,saveChanges:!0,search:!0,slider:!0,tabs:!0,tag:!0,tagging:!0,tags:!0,tiddler:!0,timeline:!0,today:!0,version:!0,option:!0,with:!0,filter:!0},n=/[\w_\-]/i,r=/^\-\-\-\-+$/,i=/^\/\*\*\*$/,o=/^\*\*\*\/$/,a=/^<<<$/,u=/^\/\/\{\{\{$/,c=/^\/\/\}\}\}$/,k=/^<!--\{\{\{-->$/,f=/^<!--\}\}\}-->$/,m=/^\{\{\{$/,l=/^\}\}\}$/,h=/.*?\}\}\}/;return{startState:function(){return{tokenize:tokenBase}},token:function(e,t){return e.eatSpace()?null:t.tokenize(e,t)}}}),e.defineMIME("text/x-tiddlywiki","tiddlywiki")})}});