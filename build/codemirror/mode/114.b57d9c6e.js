webpackJsonp([33],{1041:function(e,t,r){!function(e){e(r(915))}(function(e){"use strict";function wordRegexp(e){return new RegExp("^(("+e.join(")|(")+"))\\b")}function readToken(e,t){if(e.eatSpace())return null;if(t.inComment)return e.match(A)?(t.inComment=!1,"comment"):(e.skipToEnd(),"comment");if(e.match("//"))return e.skipToEnd(),"comment";if(e.match(g))return"comment";if(e.match(h))return t.inComment=!0,"comment";if(e.match(/^-?[0-9\.]/,!1)&&(e.match(f)||e.match(d)))return"number";if(e.match(y))return"string";if(t.startDef&&e.match(p))return"def";if(t.endDef&&e.match(b))return t.endDef=!1,"def";if(e.match(o))return"keyword";if(e.match(a)){var n=t.lastToken,i=(e.match(/^\s*(.+?)\b/,!1)||[])[1];return":"===n||"implements"===n||"implements"===i||"="===i?"builtin":"variable-3"}return e.match(r)?"builtin":e.match(l)?"atom":e.match(p)?"variable":e.match(s)?"operator":(e.next(),null)}var t=["Clamp","Constructor","EnforceRange","Exposed","ImplicitThis","Global","PrimaryGlobal","LegacyArrayClass","LegacyUnenumerableNamedProperties","LenientThis","NamedConstructor","NewObject","NoInterfaceObject","OverrideBuiltins","PutForwards","Replaceable","SameObject","TreatNonObjectAsNull","TreatNullAs","EmptyString","Unforgeable","Unscopeable"],r=wordRegexp(t),n=["unsigned","short","long","unrestricted","float","double","boolean","byte","octet","Promise","ArrayBuffer","DataView","Int8Array","Int16Array","Int32Array","Uint8Array","Uint16Array","Uint32Array","Uint8ClampedArray","Float32Array","Float64Array","ByteString","DOMString","USVString","sequence","object","RegExp","Error","DOMException","FrozenArray","any","void"],a=wordRegexp(n),i=["attribute","callback","const","deleter","dictionary","enum","getter","implements","inherit","interface","iterable","legacycaller","maplike","partial","required","serializer","setlike","setter","static","stringifier","typedef","optional","readonly","or"],o=wordRegexp(i),c=["true","false","Infinity","NaN","null"],l=wordRegexp(c);e.registerHelper("hintWords","webidl",t.concat(n).concat(i).concat(c));var m=wordRegexp(["callback","dictionary","enum","interface"]),u=wordRegexp(["typedef"]),s=/^[:<=>?]/,f=/^-?([1-9][0-9]*|0[Xx][0-9A-Fa-f]+|0[0-7]*)/,d=/^-?(([0-9]+\.[0-9]*|[0-9]*\.[0-9]+)([Ee][+-]?[0-9]+)?|[0-9]+[Ee][+-]?[0-9]+)/,p=/^_?[A-Za-z][0-9A-Z_a-z-]*/,b=/^_?[A-Za-z][0-9A-Z_a-z-]*(?=\s*;)/,y=/^"[^"]*"/,g=/^\/\*.*?\*\//,h=/^\/\*.*/,A=/^.*?\*\//;e.defineMode("webidl",function(){return{startState:function(){return{inComment:!1,lastToken:"",startDef:!1,endDef:!1}},token:function(e,t){var r=readToken(e,t);if(r){var n=e.current();t.lastToken=n,"keyword"===r?(t.startDef=m.test(n),t.endDef=t.endDef||u.test(n)):t.startDef=!1}return r}}}),e.defineMIME("text/x-webidl","webidl")})}});