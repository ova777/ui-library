webpackJsonp([74],{1010:function(e,n,t){!function(e){e(t(930))}(function(e){"use strict";e.defineMode("octave",function(){function wordRegexp(e){return new RegExp("^(("+e.join(")|(")+"))\\b")}function tokenTranspose(e,n){return e.sol()||"'"!==e.peek()?(n.tokenize=tokenBase,tokenBase(e,n)):(e.next(),n.tokenize=tokenBase,"operator")}function tokenComment(e,n){return e.match(/^.*%}/)?(n.tokenize=tokenBase,"comment"):(e.skipToEnd(),"comment")}function tokenBase(m,u){if(m.eatSpace())return null;if(m.match("%{"))return u.tokenize=tokenComment,m.skipToEnd(),"comment";if(m.match(/^[%#]/))return m.skipToEnd(),"comment";if(m.match(/^[0-9\.+-]/,!1)){if(m.match(/^[+-]?0x[0-9a-fA-F]+[ij]?/))return m.tokenize=tokenBase,"number";if(m.match(/^[+-]?\d*\.\d+([EeDd][+-]?\d+)?[ij]?/))return"number";if(m.match(/^[+-]?\d+([EeDd][+-]?\d+)?[ij]?/))return"number"}if(m.match(wordRegexp(["nan","NaN","inf","Inf"])))return"number";var f=m.match(/^"(?:[^"]|"")*("|$)/)||m.match(/^'(?:[^']|'')*('|$)/);return f?f[1]?"string":"string error":m.match(c)?"keyword":m.match(s)?"builtin":m.match(a)?"variable":m.match(e)||m.match(t)?"operator":m.match(n)||m.match(r)||m.match(o)?null:m.match(i)?(u.tokenize=tokenTranspose,null):(m.next(),"error")}var e=new RegExp("^[\\+\\-\\*/&|\\^~<>!@'\\\\]"),n=new RegExp("^[\\(\\[\\{\\},:=;]"),t=new RegExp("^((==)|(~=)|(<=)|(>=)|(<<)|(>>)|(\\.[\\+\\-\\*/\\^\\\\]))"),r=new RegExp("^((!=)|(\\+=)|(\\-=)|(\\*=)|(/=)|(&=)|(\\|=)|(\\^=))"),o=new RegExp("^((>>=)|(<<=))"),i=new RegExp("^[\\]\\)]"),a=new RegExp("^[_A-Za-z¡-￿][_A-Za-z0-9¡-￿]*"),s=wordRegexp(["error","eval","function","abs","acos","atan","asin","cos","cosh","exp","log","prod","sum","log10","max","min","sign","sin","sinh","sqrt","tan","reshape","break","zeros","default","margin","round","ones","rand","syn","ceil","floor","size","clear","zeros","eye","mean","std","cov","det","eig","inv","norm","rank","trace","expm","logm","sqrtm","linspace","plot","title","xlabel","ylabel","legend","text","grid","meshgrid","mesh","num2str","fft","ifft","arrayfun","cellfun","input","fliplr","flipud","ismember"]),c=wordRegexp(["return","case","switch","else","elseif","end","endif","endfunction","if","otherwise","do","for","while","try","catch","classdef","properties","events","methods","global","persistent","endfor","endwhile","printf","sprintf","disp","until","continue","pkg"]);return{startState:function(){return{tokenize:tokenBase}},token:function(e,n){var t=n.tokenize(e,n);return"number"!==t&&"variable"!==t||(n.tokenize=tokenTranspose),t},lineComment:"%",fold:"indent"}}),e.defineMIME("text/x-octave","octave")})}});