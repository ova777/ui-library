webpackJsonp([77],{991:function(e,t,n){!function(e){e(n(915))}(function(e){"use strict";e.defineMode("mumps",function(){function wordRegexp(e){return new RegExp("^(("+e.join(")|(")+"))\\b","i")}function tokenBase(c,i){c.sol()&&(i.label=!0,i.commandMode=0);var m=c.peek();return" "==m||"\t"==m?(i.label=!1,0==i.commandMode?i.commandMode=1:(i.commandMode<0||2==i.commandMode)&&(i.commandMode=0)):"."!=m&&i.commandMode>0&&(i.commandMode=":"==m?-1:2),"("!==m&&"\t"!==m||(i.label=!1),";"===m?(c.skipToEnd(),"comment"):c.match(/^[-+]?\d+(\.\d+)?([eE][-+]?\d+)?/)?"number":'"'==m?c.skipTo('"')?(c.next(),"string"):(c.skipToEnd(),"error"):c.match(t)||c.match(e)?"operator":c.match(n)?null:o.test(m)?(c.next(),"bracket"):i.commandMode>0&&c.match(r)?"variable-2":c.match(a)?"builtin":c.match($)?"variable":"$"===m||"^"===m?(c.next(),"builtin"):"@"===m?(c.next(),"string-2"):/[\w%]/.test(m)?(c.eatWhile(/[\w%]/),"variable"):(c.next(),"error")}var e=new RegExp("^[\\+\\-\\*/&#!_?\\\\<>=\\'\\[\\]]"),t=new RegExp("^(('=)|(<=)|(>=)|('>)|('<)|([[)|(]])|(^$))"),n=new RegExp("^[\\.,:]"),o=new RegExp("[()]"),$=new RegExp("^[%A-Za-z][A-Za-z0-9]*"),a=wordRegexp(["\\$ascii","\\$char","\\$data","\\$ecode","\\$estack","\\$etrap","\\$extract","\\$find","\\$fnumber","\\$get","\\$horolog","\\$io","\\$increment","\\$job","\\$justify","\\$length","\\$name","\\$next","\\$order","\\$piece","\\$qlength","\\$qsubscript","\\$query","\\$quit","\\$random","\\$reverse","\\$select","\\$stack","\\$test","\\$text","\\$translate","\\$view","\\$x","\\$y","\\$a","\\$c","\\$d","\\$e","\\$ec","\\$es","\\$et","\\$f","\\$fn","\\$g","\\$h","\\$i","\\$j","\\$l","\\$n","\\$na","\\$o","\\$p","\\$q","\\$ql","\\$qs","\\$r","\\$re","\\$s","\\$st","\\$t","\\$tr","\\$v","\\$z"]),r=wordRegexp(["break","close","do","else","for","goto","halt","hang","if","job","kill","lock","merge","new","open","quit","read","set","tcommit","trollback","tstart","use","view","write","xecute","b","c","d","e","f","g","h","i","j","k","l","m","n","o","q","r","s","tc","tro","ts","u","v","w","x"]);return{startState:function(){return{label:!1,commandMode:0}},token:function(e,t){var n=tokenBase(e,t);return t.label?"tag":n}}}),e.defineMIME("text/x-mumps","mumps")})}});