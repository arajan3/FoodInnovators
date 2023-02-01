/*! jQuery v3.4.1 | (c) JS Foundation and other contributors | jquery.org/license */
;
!function(b,a){"object"==typeof module&&"object"==typeof module.exports?module.exports=b.document?a(b,!0):function(c){if(!c.document){throw new Error("jQuery requires a window with a document")
}return a(c)
}:a(b)
}("undefined"!=typeof window?window:this,function(cs,bN){var bu=[],co=cs.document,bw=Object.getPrototypeOf,bv=bu.slice,bK=bu.concat,br=bu.push,bI=bu.indexOf,bB={},bA=bB.toString,bq=bB.hasOwnProperty,bR=bq.toString,bE=bR.call(Object),bm={},bD=function(a){return"function"==typeof a&&"number"!=typeof a.nodeType
},bo=function(a){return null!=a&&a===a.window
},bP={type:!0,src:!0,nonce:!0,noModule:!0};
function bQ(d,b,g){var c,a,f=(g=g||co).createElement("script");
if(f.text=d,b){for(c in bP){(a=b[c]||b.getAttribute&&b.getAttribute(c))&&f.setAttribute(c,a)
}}g.head.appendChild(f).parentNode.removeChild(f)
}function bp(a){return null==a?a+"":"object"==typeof a||"function"==typeof a?bB[bA.call(a)]||"object":typeof a
}var bL="3.4.1",bF=function(b,a){return new bF.fn.init(b,a)
},bz=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
function bO(b){var a=!!b&&"length" in b&&b.length,c=bp(b);
return !bD(b)&&!bo(b)&&("array"===c||0===a||"number"==typeof a&&0<a&&a-1 in b)
}bF.fn=bF.prototype={jquery:bL,constructor:bF,length:0,toArray:function(){return bv.call(this)
},get:function(a){return null==a?bv.call(this):a<0?this[a+this.length]:this[a]
},pushStack:function(b){var a=bF.merge(this.constructor(),b);
return a.prevObject=this,a
},each:function(a){return bF.each(this,a)
},map:function(a){return this.pushStack(bF.map(this,function(c,b){return a.call(c,b,c)
}))
},slice:function(){return this.pushStack(bv.apply(this,arguments))
},first:function(){return this.eq(0)
},last:function(){return this.eq(-1)
},eq:function(b){var a=this.length,c=+b+(b<0?a:0);
return this.pushStack(0<=c&&c<a?[this[c]]:[])
},end:function(){return this.prevObject||this.constructor()
},push:br,sort:bu.sort,splice:bu.splice},bF.extend=bF.fn.extend=function(){var h,m,d,b,g,c,j=arguments[0]||{},p=1,k=arguments.length,f=!1;
for("boolean"==typeof j&&(f=j,j=arguments[p]||{},p++),"object"==typeof j||bD(j)||(j={}),p===k&&(j=this,p--);
p<k;
p++){if(null!=(h=arguments[p])){for(m in h){b=h[m],"__proto__"!==m&&j!==b&&(f&&b&&(bF.isPlainObject(b)||(g=Array.isArray(b)))?(d=j[m],c=g&&!Array.isArray(d)?[]:g||bF.isPlainObject(d)?d:{},g=!1,j[m]=bF.extend(f,c,b)):void 0!==b&&(j[m]=b))
}}}return j
},bF.extend({expando:"jQuery"+(bL+Math.random()).replace(/\D/g,""),isReady:!0,error:function(a){throw new Error(a)
},noop:function(){},isPlainObject:function(b){var a,c;
return !(!b||"[object Object]"!==bA.call(b))&&(!(a=bw(b))||"function"==typeof(c=bq.call(a,"constructor")&&a.constructor)&&bR.call(c)===bE)
},isEmptyObject:function(b){var a;
for(a in b){return !1
}return !0
},globalEval:function(b,a){bQ(b,{nonce:a&&a.nonce})
},each:function(c,a){var d,b=0;
if(bO(c)){for(d=c.length;
b<d;
b++){if(!1===a.call(c[b],b,c[b])){break
}}}else{for(b in c){if(!1===a.call(c[b],b,c[b])){break
}}}return c
},trim:function(a){return null==a?"":(a+"").replace(bz,"")
},makeArray:function(b,a){var c=a||[];
return null!=b&&(bO(Object(b))?bF.merge(c,"string"==typeof b?[b]:b):br.call(c,b)),c
},inArray:function(b,a,c){return null==a?-1:bI.call(a,b,c)
},merge:function(d,b){for(var f=+b.length,c=0,a=d.length;
c<f;
c++){d[a++]=b[c]
}return d.length=a,d
},grep:function(g,d,j){for(var f=[],c=0,h=g.length,b=!j;
c<h;
c++){!d(g[c],c)!==b&&f.push(g[c])
}return f
},map:function(g,d,j){var f,c,h=0,b=[];
if(bO(g)){for(f=g.length;
h<f;
h++){null!=(c=d(g[h],h,j))&&b.push(c)
}}else{for(h in g){null!=(c=d(g[h],h,j))&&b.push(c)
}}return bK.apply([],b)
},guid:1,support:bm}),"function"==typeof Symbol&&(bF.fn[Symbol.iterator]=bu[Symbol.iterator]),bF.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(b,a){bB["[object "+a+"]"]=a.toLowerCase()
});
var bJ=function(c7){var dj,dk,dn,c6,dd,df,di,dh,cX,cZ,da,dx,dT,dp,dQ,cY,c1,dl,cV,db="sizzle"+1*new Date,c8=c7.document,dz=0,c2=0,c5=dm(),cW=dm(),dF=dm(),dV=dm(),dR=function(b,a){return b===a&&(da=!0),0
},dc={}.hasOwnProperty,c0=[],c4=c0.pop,dI=c0.push,dN=c0.push,dD=c0.slice,dC=function(c,a){for(var d=0,b=c.length;
d<b;
d++){if(c[d]===a){return d
}}return -1
},dA="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",dH="[\\x20\\t\\r\\n\\f]",dL="(?:\\\\.|[\\w-]|[^\0-\\xa0])+",du="\\["+dH+"*("+dL+")(?:"+dH+"*([*^$|!~]?=)"+dH+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+dL+"))|)"+dH+"*\\]",d0=":("+dL+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+du+")*)|.*)\\)|)",dP=new RegExp(dH+"+","g"),dU=new RegExp("^"+dH+"+|((?:^|[^\\\\])(?:\\\\.)*)"+dH+"+$","g"),dq=new RegExp("^"+dH+"*,"+dH+"*"),cU=new RegExp("^"+dH+"*([>+~]|"+dH+")"+dH+"*"),dw=new RegExp(dH+"|>"),dt=new RegExp(d0),dv=new RegExp("^"+dL+"$"),dO={ID:new RegExp("^#("+dL+")"),CLASS:new RegExp("^\\.("+dL+")"),TAG:new RegExp("^("+dL+"|[*])"),ATTR:new RegExp("^"+du),PSEUDO:new RegExp("^"+d0),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+dH+"*(even|odd|(([+-]|)(\\d*)n|)"+dH+"*(?:([+-]|)"+dH+"*(\\d+)|))"+dH+"*\\)|)","i"),bool:new RegExp("^(?:"+dA+")$","i"),needsContext:new RegExp("^"+dH+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+dH+"*((?:-\\d)?\\d*)"+dH+"*\\)|)(?=[^-]|$)","i")},ds=/HTML$/i,dB=/^(?:input|select|textarea|button)$/i,dK=/^h\d$/i,dJ=/^[^{]+\{\s*\[native \w/,dr=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,at=/[+~]/,dS=new RegExp("\\\\([\\da-f]{1,6}"+dH+"?|("+dH+")|.)","ig"),dM=function(c,a,d){var b="0x"+a-65536;
return b!=b||d?a:b<0?String.fromCharCode(b+65536):String.fromCharCode(b>>10|55296,1023&b|56320)
},d5=/([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,c9=function(b,a){return a?"\0"===b?"\ufffd":b.slice(0,-1)+"\\"+b.charCodeAt(b.length-1).toString(16)+" ":"\\"+b
},dg=function(){dx()
},dW=dy(function(a){return !0===a.disabled&&"fieldset"===a.nodeName.toLowerCase()
},{dir:"parentNode",next:"legend"});
try{dN.apply(c0=dD.call(c8.childNodes),c8.childNodes),c0[c8.childNodes.length].nodeType
}catch(dj){dN={apply:c0.length?function(b,a){dI.apply(b,dD.call(a))
}:function(c,a){var d=c.length,b=0;
while(c[d++]=a[b++]){}c.length=d-1
}}
}function dZ(y,q,h,b){var k,g,w,z,x,j,v,m=q&&q.ownerDocument,d=q?q.nodeType:9;
if(h=h||[],"string"!=typeof y||!y||1!==d&&9!==d&&11!==d){return h
}if(!b&&((q?q.ownerDocument||q:c8)!==dT&&dx(q),q=q||dT,dQ)){if(11!==d&&(x=dr.exec(y))){if(k=x[1]){if(9===d){if(!(w=q.getElementById(k))){return h
}if(w.id===k){return h.push(w),h
}}else{if(m&&(w=m.getElementById(k))&&cV(q,w)&&w.id===k){return h.push(w),h
}}}else{if(x[2]){return dN.apply(h,q.getElementsByTagName(y)),h
}if((k=x[3])&&dk.getElementsByClassName&&q.getElementsByClassName){return dN.apply(h,q.getElementsByClassName(k)),h
}}}if(dk.qsa&&!dV[y+" "]&&(!cY||!cY.test(y))&&(1!==d||"object"!==q.nodeName.toLowerCase())){if(v=y,m=q,1===d&&dw.test(y)){(z=q.getAttribute("id"))?z=z.replace(d5,c9):q.setAttribute("id",z=db),g=(j=df(y)).length;
while(g--){j[g]="#"+z+" "+d6(j[g])
}v=j.join(","),m=at.test(y)&&d1(q.parentNode)||q
}try{return dN.apply(h,m.querySelectorAll(v)),h
}catch(q){dV(y,!0)
}finally{z===db&&q.removeAttribute("id")
}}}return dh(y.replace(dU,"$1"),q,h,b)
}function dm(){var a=[];
return function b(c,d){return a.push(c+" ")>dn.cacheLength&&delete b[a.shift()],b[c+" "]=d
}
}function d4(a){return a[db]=!0,a
}function c3(b){var a=dT.createElement("fieldset");
try{return !!b(a)
}catch(b){return !1
}finally{a.parentNode&&a.parentNode.removeChild(a),a=null
}}function d3(c,a){var d=c.split("|"),b=d.length;
while(b--){dn.attrHandle[d[b]]=a
}}function cS(c,a){var d=a&&c,b=d&&1===c.nodeType&&1===a.nodeType&&c.sourceIndex-a.sourceIndex;
if(b){return b
}if(d){while(d=d.nextSibling){if(d===a){return -1
}}}return c?1:-1
}function ct(a){return function(b){return"input"===b.nodeName.toLowerCase()&&b.type===a
}
}function dE(a){return function(c){var b=c.nodeName.toLowerCase();
return("input"===b||"button"===b)&&c.type===a
}
}function dX(a){return function(b){return"form" in b?b.parentNode&&!1===b.disabled?"label" in b?"label" in b.parentNode?b.parentNode.disabled===a:b.disabled===a:b.isDisabled===a||b.isDisabled!==!a&&dW(b)===a:b.disabled===a:"label" in b&&b.disabled===a
}
}function cT(b){return d4(function(a){return a=+a,d4(function(g,d){var h,f=b([],g.length,a),c=f.length;
while(c--){g[h=f[c]]&&(g[h]=!(d[h]=g[h]))
}})
})
}function d1(a){return a&&"undefined"!=typeof a.getElementsByTagName&&a
}for(dj in dk=dZ.support={},dd=dZ.isXML=function(b){var a=b.namespaceURI,c=(b.ownerDocument||b).documentElement;
return !ds.test(a||c&&c.nodeName||"HTML")
},dx=dZ.setDocument=function(c){var a,d,b=c?c.ownerDocument||c:c8;
return b!==dT&&9===b.nodeType&&b.documentElement&&(dp=(dT=b).documentElement,dQ=!dd(dT),c8!==dT&&(d=dT.defaultView)&&d.top!==d&&(d.addEventListener?d.addEventListener("unload",dg,!1):d.attachEvent&&d.attachEvent("onunload",dg)),dk.attributes=c3(function(f){return f.className="i",!f.getAttribute("className")
}),dk.getElementsByTagName=c3(function(f){return f.appendChild(dT.createComment("")),!f.getElementsByTagName("*").length
}),dk.getElementsByClassName=dJ.test(dT.getElementsByClassName),dk.getById=c3(function(f){return dp.appendChild(f).id=db,!dT.getElementsByName||!dT.getElementsByName(db).length
}),dk.getById?(dn.filter.ID=function(g){var f=g.replace(dS,dM);
return function(h){return h.getAttribute("id")===f
}
},dn.find.ID=function(g,f){if("undefined"!=typeof f.getElementById&&dQ){var h=f.getElementById(g);
return h?[h]:[]
}}):(dn.filter.ID=function(f){var g=f.replace(dS,dM);
return function(i){var h="undefined"!=typeof i.getAttributeNode&&i.getAttributeNode("id");
return h&&h.value===g
}
},dn.find.ID=function(j,g){if("undefined"!=typeof g.getElementById&&dQ){var l,h,f,k=g.getElementById(j);
if(k){if((l=k.getAttributeNode("id"))&&l.value===j){return[k]
}f=g.getElementsByName(j),h=0;
while(k=f[h++]){if((l=k.getAttributeNode("id"))&&l.value===j){return[k]
}}}return[]
}}),dn.find.TAG=dk.getElementsByTagName?function(g,f){return"undefined"!=typeof f.getElementsByTagName?f.getElementsByTagName(g):dk.qsa?f.querySelectorAll(g):void 0
}:function(j,g){var l,h=[],f=0,k=g.getElementsByTagName(j);
if("*"===j){while(l=k[f++]){1===l.nodeType&&h.push(l)
}return h
}return k
},dn.find.CLASS=dk.getElementsByClassName&&function(g,f){if("undefined"!=typeof f.getElementsByClassName&&dQ){return f.getElementsByClassName(g)
}},c1=[],cY=[],(dk.qsa=dJ.test(dT.querySelectorAll))&&(c3(function(f){dp.appendChild(f).innerHTML="<a id='"+db+"'></a><select id='"+db+"-\r\\' msallowcapture=''><option selected=''></option></select>",f.querySelectorAll("[msallowcapture^='']").length&&cY.push("[*^$]="+dH+"*(?:''|\"\")"),f.querySelectorAll("[selected]").length||cY.push("\\["+dH+"*(?:value|"+dA+")"),f.querySelectorAll("[id~="+db+"-]").length||cY.push("~="),f.querySelectorAll(":checked").length||cY.push(":checked"),f.querySelectorAll("a#"+db+"+*").length||cY.push(".#.+[+~]")
}),c3(function(g){g.innerHTML="<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
var f=dT.createElement("input");
f.setAttribute("type","hidden"),g.appendChild(f).setAttribute("name","D"),g.querySelectorAll("[name=d]").length&&cY.push("name"+dH+"*[*^$|!~]?="),2!==g.querySelectorAll(":enabled").length&&cY.push(":enabled",":disabled"),dp.appendChild(g).disabled=!0,2!==g.querySelectorAll(":disabled").length&&cY.push(":enabled",":disabled"),g.querySelectorAll("*,:x"),cY.push(",.*:")
})),(dk.matchesSelector=dJ.test(dl=dp.matches||dp.webkitMatchesSelector||dp.mozMatchesSelector||dp.oMatchesSelector||dp.msMatchesSelector))&&c3(function(f){dk.disconnectedMatch=dl.call(f,"*"),dl.call(f,"[s!='']:x"),c1.push("!=",d0)
}),cY=cY.length&&new RegExp(cY.join("|")),c1=c1.length&&new RegExp(c1.join("|")),a=dJ.test(dp.compareDocumentPosition),cV=a||dJ.test(dp.contains)?function(h,f){var i=9===h.nodeType?h.documentElement:h,g=f&&f.parentNode;
return h===g||!(!g||1!==g.nodeType||!(i.contains?i.contains(g):h.compareDocumentPosition&&16&h.compareDocumentPosition(g)))
}:function(g,f){if(f){while(f=f.parentNode){if(f===g){return !0
}}}return !1
},dR=a?function(g,f){if(g===f){return da=!0,0
}var h=!g.compareDocumentPosition-!f.compareDocumentPosition;
return h||(1&(h=(g.ownerDocument||g)===(f.ownerDocument||f)?g.compareDocumentPosition(f):1)||!dk.sortDetached&&f.compareDocumentPosition(g)===h?g===dT||g.ownerDocument===c8&&cV(c8,g)?-1:f===dT||f.ownerDocument===c8&&cV(c8,f)?1:cZ?dC(cZ,g)-dC(cZ,f):0:4&h?-1:1)
}:function(l,h){if(l===h){return da=!0,0
}var p,k=0,g=l.parentNode,m=h.parentNode,f=[l],j=[h];
if(!g||!m){return l===dT?-1:h===dT?1:g?-1:m?1:cZ?dC(cZ,l)-dC(cZ,h):0
}if(g===m){return cS(l,h)
}p=l;
while(p=p.parentNode){f.unshift(p)
}p=h;
while(p=p.parentNode){j.unshift(p)
}while(f[k]===j[k]){k++
}return k?cS(f[k],j[k]):f[k]===c8?-1:j[k]===c8?1:0
}),dT
},dZ.matches=function(b,a){return dZ(b,null,null,a)
},dZ.matchesSelector=function(b,a){if((b.ownerDocument||b)!==dT&&dx(b),dk.matchesSelector&&dQ&&!dV[a+" "]&&(!c1||!c1.test(a))&&(!cY||!cY.test(a))){try{var c=dl.call(b,a);
if(c||dk.disconnectedMatch||b.document&&11!==b.document.nodeType){return c
}}catch(b){dV(a,!0)
}}return 0<dZ(a,dT,null,[b]).length
},dZ.contains=function(b,a){return(b.ownerDocument||b)!==dT&&dx(b),cV(b,a)
},dZ.attr=function(c,a){(c.ownerDocument||c)!==dT&&dx(c);
var d=dn.attrHandle[a.toLowerCase()],b=d&&dc.call(dn.attrHandle,a.toLowerCase())?d(c,a,!dQ):void 0;
return void 0!==b?b:dk.attributes||!dQ?c.getAttribute(a):(b=c.getAttributeNode(a))&&b.specified?b.value:null
},dZ.escape=function(a){return(a+"").replace(d5,c9)
},dZ.error=function(a){throw new Error("Syntax error, unrecognized expression: "+a)
},dZ.uniqueSort=function(d){var b,f=[],c=0,a=0;
if(da=!dk.detectDuplicates,cZ=!dk.sortStable&&d.slice(0),d.sort(dR),da){while(b=d[a++]){b===d[a]&&(c=f.push(a))
}while(c--){d.splice(f[c],1)
}}return cZ=null,d
},c6=dZ.getText=function(d){var b,f="",c=0,a=d.nodeType;
if(a){if(1===a||9===a||11===a){if("string"==typeof d.textContent){return d.textContent
}for(d=d.firstChild;
d;
d=d.nextSibling){f+=c6(d)
}}else{if(3===a||4===a){return d.nodeValue
}}}else{while(b=d[c++]){f+=c6(b)
}}return f
},(dn=dZ.selectors={cacheLength:50,createPseudo:d4,match:dO,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(a){return a[1]=a[1].replace(dS,dM),a[3]=(a[3]||a[4]||a[5]||"").replace(dS,dM),"~="===a[2]&&(a[3]=" "+a[3]+" "),a.slice(0,4)
},CHILD:function(a){return a[1]=a[1].toLowerCase(),"nth"===a[1].slice(0,3)?(a[3]||dZ.error(a[0]),a[4]=+(a[4]?a[5]+(a[6]||1):2*("even"===a[3]||"odd"===a[3])),a[5]=+(a[7]+a[8]||"odd"===a[3])):a[3]&&dZ.error(a[0]),a
},PSEUDO:function(b){var a,c=!b[6]&&b[2];
return dO.CHILD.test(b[0])?null:(b[3]?b[2]=b[4]||b[5]||"":c&&dt.test(c)&&(a=df(c,!0))&&(a=c.indexOf(")",c.length-a)-c.length)&&(b[0]=b[0].slice(0,a),b[2]=c.slice(0,a)),b.slice(0,3))
}},filter:{TAG:function(b){var a=b.replace(dS,dM).toLowerCase();
return"*"===b?function(){return !0
}:function(c){return c.nodeName&&c.nodeName.toLowerCase()===a
}
},CLASS:function(b){var a=c5[b+" "];
return a||(a=new RegExp("(^|"+dH+")"+b+"("+dH+"|$)"))&&c5(b,function(c){return a.test("string"==typeof c.className&&c.className||"undefined"!=typeof c.getAttribute&&c.getAttribute("class")||"")
})
},ATTR:function(c,b,a){return function(f){var d=dZ.attr(f,c);
return null==d?"!="===b:!b||(d+="","="===b?d===a:"!="===b?d!==a:"^="===b?a&&0===d.indexOf(a):"*="===b?a&&-1<d.indexOf(a):"$="===b?a&&d.slice(-a.length)===a:"~="===b?-1<(" "+d.replace(dP," ")+" ").indexOf(a):"|="===b&&(d===a||d.slice(0,a.length+1)===a+"-"))
}
},CHILD:function(f,j,d,i,c){var k="nth"!==f.slice(0,3),b="last"!==f.slice(-4),a="of-type"===j;
return 1===i&&0===c?function(g){return !!g.parentNode
}:function(y,D,q){var g,w,m,B,E,C,v=k!==b?"nextSibling":"previousSibling",A=y.parentNode,x=a&&y.nodeName.toLowerCase(),h=!q&&!a,z=!1;
if(A){if(k){while(v){B=y;
while(B=B[v]){if(a?B.nodeName.toLowerCase()===x:1===B.nodeType){return !1
}}C=v="only"===f&&!C&&"nextSibling"
}return !0
}if(C=[b?A.firstChild:A.lastChild],b&&h){z=(E=(g=(w=(m=(B=A)[db]||(B[db]={}))[B.uniqueID]||(m[B.uniqueID]={}))[f]||[])[0]===dz&&g[1])&&g[2],B=E&&A.childNodes[E];
while(B=++E&&B&&B[v]||(z=E=0)||C.pop()){if(1===B.nodeType&&++z&&B===y){w[f]=[dz,E,z];
break
}}}else{if(h&&(z=E=(g=(w=(m=(B=y)[db]||(B[db]={}))[B.uniqueID]||(m[B.uniqueID]={}))[f]||[])[0]===dz&&g[1]),!1===z){while(B=++E&&B&&B[v]||(z=E=0)||C.pop()){if((a?B.nodeName.toLowerCase()===x:1===B.nodeType)&&++z&&(h&&((w=(m=B[db]||(B[db]={}))[B.uniqueID]||(m[B.uniqueID]={}))[f]=[dz,z]),B===y)){break
}}}}return(z-=c)===i||z%i==0&&0<=z/i
}}
},PSEUDO:function(d,f){var c,b=dn.pseudos[d]||dn.setFilters[d.toLowerCase()]||dZ.error("unsupported pseudo: "+d);
return b[db]?b(f):1<b.length?(c=[d,d,"",f],dn.setFilters.hasOwnProperty(d.toLowerCase())?d4(function(j,g){var k,h=b(j,f),a=h.length;
while(a--){j[k=dC(j,h[a])]=!(g[k]=h[a])
}}):function(a){return b(a,0,c)
}):b
}},pseudos:{not:d4(function(d){var c=[],a=[],b=di(d.replace(dU,"$1"));
return b[db]?d4(function(k,h,m,j){var g,l=b(k,null,j,[]),f=k.length;
while(f--){(g=l[f])&&(k[f]=!(h[f]=g))
}}):function(g,f,h){return c[0]=g,b(c,null,h,a),c[0]=null,!a.pop()
}
}),has:d4(function(a){return function(b){return 0<dZ(a,b).length
}
}),contains:d4(function(a){return a=a.replace(dS,dM),function(b){return -1<(b.textContent||c6(b)).indexOf(a)
}
}),lang:d4(function(a){return dv.test(a||"")||dZ.error("unsupported lang: "+a),a=a.replace(dS,dM).toLowerCase(),function(c){var b;
do{if(b=dQ?c.lang:c.getAttribute("xml:lang")||c.getAttribute("lang")){return(b=b.toLowerCase())===a||0===b.indexOf(a+"-")
}}while((c=c.parentNode)&&1===c.nodeType);
return !1
}
}),target:function(b){var a=c7.location&&c7.location.hash;
return a&&a.slice(1)===b.id
},root:function(a){return a===dp
},focus:function(a){return a===dT.activeElement&&(!dT.hasFocus||dT.hasFocus())&&!!(a.type||a.href||~a.tabIndex)
},enabled:dX(!1),disabled:dX(!0),checked:function(b){var a=b.nodeName.toLowerCase();
return"input"===a&&!!b.checked||"option"===a&&!!b.selected
},selected:function(a){return a.parentNode&&a.parentNode.selectedIndex,!0===a.selected
},empty:function(a){for(a=a.firstChild;
a;
a=a.nextSibling){if(a.nodeType<6){return !1
}}return !0
},parent:function(a){return !dn.pseudos.empty(a)
},header:function(a){return dK.test(a.nodeName)
},input:function(a){return dB.test(a.nodeName)
},button:function(b){var a=b.nodeName.toLowerCase();
return"input"===a&&"button"===b.type||"button"===a
},text:function(b){var a;
return"input"===b.nodeName.toLowerCase()&&"text"===b.type&&(null==(a=b.getAttribute("type"))||"text"===a.toLowerCase())
},first:cT(function(){return[0]
}),last:cT(function(b,a){return[a-1]
}),eq:cT(function(b,a,c){return[c<0?c+a:c]
}),even:cT(function(b,a){for(var c=0;
c<a;
c+=2){b.push(c)
}return b
}),odd:cT(function(b,a){for(var c=1;
c<a;
c+=2){b.push(c)
}return b
}),lt:cT(function(c,a,d){for(var b=d<0?d+a:a<d?a:d;
0<=--b;
){c.push(b)
}return c
}),gt:cT(function(c,a,d){for(var b=d<0?d+a:d;
++b<a;
){c.push(b)
}return c
})}}).pseudos.nth=dn.pseudos.eq,{radio:!0,checkbox:!0,file:!0,password:!0,image:!0}){dn.pseudos[dj]=ct(dj)
}for(dj in {submit:!0,reset:!0}){dn.pseudos[dj]=dE(dj)
}function dY(){}function d6(c){for(var a=0,d=c.length,b="";
a<d;
a++){b+=c[a].value
}return b
}function dy(g,j,d){var b=j.dir,a=j.next,k=a||b,h=d&&"parentNode"===k,i=c2++;
return j.first?function(f,c,l){while(f=f[b]){if(1===f.nodeType||h){return g(f,c,l)
}}return !1
}:function(p,l,s){var m,f,q,c=[dz,i];
if(s){while(p=p[b]){if((1===p.nodeType||h)&&g(p,l,s)){return !0
}}}else{while(p=p[b]){if(1===p.nodeType||h){if(f=(q=p[db]||(p[db]={}))[p.uniqueID]||(q[p.uniqueID]={}),a&&a===p.nodeName.toLowerCase()){p=p[b]||p
}else{if((m=f[k])&&m[0]===dz&&m[1]===i){return c[2]=m[2]
}if((f[k]=c)[2]=g(p,l,s)){return !0
}}}}}return !1
}
}function bt(a){return 1<a.length?function(d,b,f){var c=a.length;
while(c--){if(!a[c](d,b,f)){return !1
}}return !0
}:a[0]
}function d2(h,m,d,b,g){for(var c,j=[],p=0,k=h.length,f=null!=m;
p<k;
p++){(c=h[p])&&(d&&!d(c,b,g)||(j.push(c),f&&m.push(p)))
}return j
}function dG(i,b,c,a,j,f){return a&&!a[db]&&(a=dG(a)),j&&!j[db]&&(j=dG(j,f)),d4(function(w,A,k,d){var q,h,y,B=[],z=[],m=A.length,x=w||function(s,o,u){for(var p=0,l=o.length;
p<l;
p++){dZ(s,o[p],u)
}return u
}(b||"*",k.nodeType?[k]:k,[]),v=!i||!w&&b?x:d2(x,B,i,k,d),g=c?j||(w?i:m||a)?[]:A:v;
if(c&&c(v,g,k,d),a){q=d2(g,z),a(q,[],k,d),h=q.length;
while(h--){(y=q[h])&&(g[z[h]]=!(v[z[h]]=y))
}}if(w){if(j||i){if(j){q=[],h=g.length;
while(h--){(y=g[h])&&q.push(v[h]=y)
}j(null,g=[],q,d)
}h=g.length;
while(h--){(y=g[h])&&-1<(q=j?dC(w,y):B[h])&&(w[q]=!(A[q]=y))
}}}else{g=d2(g===A?g.splice(m,g.length):g),j?j(null,A,g,d):dN.apply(A,g)
}})
}function cR(j){for(var h,q,f,b=j.length,d=dn.relative[j[0].type],m=d||dn.relative[" "],v=d?1:0,p=dy(function(a){return a===h
},m,!0),g=dy(function(a){return -1<dC(h,a)
},m,!0),k=[function(i,a,l){var c=!d&&(l||a!==cX)||((h=a).nodeType?p(i,a,l):g(i,a,l));
return h=null,c
}];
v<b;
v++){if(q=dn.relative[j[v].type]){k=[dy(bt(k),q)]
}else{if((q=dn.filter[j[v].type].apply(null,j[v].matches))[db]){for(f=++v;
f<b;
f++){if(dn.relative[j[f].type]){break
}}return dG(1<v&&bt(k),1<v&&d6(j.slice(0,v-1).concat({value:" "===j[v-2].type?"*":""})).replace(dU,"$1"),q,v<f&&cR(j.slice(v,f)),f<b&&cR(j=j.slice(f)),f<b&&d6(j))
}k.push(q)
}}return bt(k)
}return dY.prototype=dn.filters=dn.pseudos,dn.setFilters=new dY,df=dZ.tokenize=function(h,m){var d,b,g,c,j,p,k,f=cW[h+" "];
if(f){return m?0:f.slice(0)
}j=h,p=[],k=dn.preFilter;
while(j){for(c in d&&!(b=dq.exec(j))||(b&&(j=j.slice(b[0].length)||j),p.push(g=[])),d=!1,(b=cU.exec(j))&&(d=b.shift(),g.push({value:d,type:b[0].replace(dU," ")}),j=j.slice(d.length)),dn.filter){!(b=dO[c].exec(j))||k[c]&&!(b=k[c](b))||(d=b.shift(),g.push({value:d,type:c,matches:b}),j=j.slice(d.length))
}if(!d){break
}}return m?j.length:j?dZ.error(h):cW(h,p).slice(0)
},di=dZ.compile=function(h,q){var d,p,j,f,l,b,g=[],c=[],k=dF[h+" "];
if(!k){q||(q=df(h)),d=q.length;
while(d--){(k=cR(q[d]))[db]?g.push(k):c.push(k)
}(k=dF(h,(p=c,f=0<(j=g).length,l=0<p.length,b=function(D,I,x,m,z){var w,G,J,H=0,y="0",F=D&&[],C=[],v=cX,E=D||l&&dn.find.TAG("*",z),A=dz+=null==v?1:Math.random()||0.1,B=E.length;
for(z&&(cX=I===dT||I||z);
y!==B&&null!=(w=E[y]);
y++){if(l&&w){G=0,I||w.ownerDocument===dT||(dx(w),x=!dQ);
while(J=p[G++]){if(J(w,I||dT,x)){m.push(w);
break
}}z&&(dz=A)
}f&&((w=!J&&w)&&H--,D&&F.push(w))
}if(H+=y,f&&y!==H){G=0;
while(J=j[G++]){J(F,C,I,x)
}if(D){if(0<H){while(y--){F[y]||C[y]||(C[y]=c4.call(m))
}}C=d2(C)
}dN.apply(m,C),z&&!D&&0<C.length&&1<H+j.length&&dZ.uniqueSort(m)
}return z&&(dz=A,cX=v),F
},f?d4(b):b))).selector=h
}return k
},dh=dZ.select=function(j,q,f,b){var h,d,m,v,p,g="function"==typeof j&&j,k=!b&&df(j=g.selector||j);
if(f=f||[],1===k.length){if(2<(d=k[0]=k[0].slice(0)).length&&"ID"===(m=d[0]).type&&9===q.nodeType&&dQ&&dn.relative[d[1].type]){if(!(q=(dn.find.ID(m.matches[0].replace(dS,dM),q)||[])[0])){return f
}g&&(q=q.parentNode),j=j.slice(d.shift().value.length)
}h=dO.needsContext.test(j)?0:d.length;
while(h--){if(m=d[h],dn.relative[v=m.type]){break
}if((p=dn.find[v])&&(b=p(m.matches[0].replace(dS,dM),at.test(d[0].type)&&d1(q.parentNode)||q))){if(d.splice(h,1),!(j=b.length&&d6(d))){return dN.apply(f,b),f
}break
}}}return(g||di(j,k))(b,q,!dQ,f,!q||at.test(j)&&d1(q.parentNode)||q),f
},dk.sortStable=db.split("").sort(dR).join("")===db,dk.detectDuplicates=!!da,dx(),dk.sortDetached=c3(function(a){return 1&a.compareDocumentPosition(dT.createElement("fieldset"))
}),c3(function(a){return a.innerHTML="<a href='#'></a>","#"===a.firstChild.getAttribute("href")
})||d3("type|href|height|width",function(b,a,c){if(!c){return b.getAttribute(a,"type"===a.toLowerCase()?1:2)
}}),dk.attributes&&c3(function(a){return a.innerHTML="<input/>",a.firstChild.setAttribute("value",""),""===a.firstChild.getAttribute("value")
})||d3("value",function(b,a,c){if(!c&&"input"===b.nodeName.toLowerCase()){return b.defaultValue
}}),c3(function(a){return null==a.getAttribute("disabled")
})||d3(dA,function(c,a,d){var b;
if(!d){return !0===c[a]?a.toLowerCase():(b=c.getAttributeNode(a))&&b.specified?b.value:null
}}),dZ
}(cs);
bF.find=bJ,bF.expr=bJ.selectors,bF.expr[":"]=bF.expr.pseudos,bF.uniqueSort=bF.unique=bJ.uniqueSort,bF.text=bJ.getText,bF.isXMLDoc=bJ.isXML,bF.contains=bJ.contains,bF.escapeSelector=bJ.escape;
var b3=function(d,b,f){var c=[],a=void 0!==f;
while((d=d[b])&&9!==d.nodeType){if(1===d.nodeType){if(a&&bF(d).is(f)){break
}c.push(d)
}}return c
},b5=function(b,a){for(var c=[];
b;
b=b.nextSibling){1===b.nodeType&&b!==a&&c.push(b)
}return c
},cc=bF.expr.match.needsContext;
function cw(b,a){return b.nodeName&&b.nodeName.toLowerCase()===a.toLowerCase()
}var cq=/^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
function bG(b,c,a){return bD(c)?bF.grep(b,function(f,d){return !!c.call(f,d,f)!==a
}):c.nodeType?bF.grep(b,function(d){return d===c!==a
}):"string"!=typeof c?bF.grep(b,function(d){return -1<bI.call(c,d)!==a
}):bF.filter(c,b,a)
}bF.filter=function(c,a,d){var b=a[0];
return d&&(c=":not("+c+")"),1===a.length&&1===b.nodeType?bF.find.matchesSelector(b,c)?[b]:[]:bF.find.matches(c,bF.grep(a,function(f){return 1===f.nodeType
}))
},bF.fn.extend({find:function(d){var b,f,c=this.length,a=this;
if("string"!=typeof d){return this.pushStack(bF(d).filter(function(){for(b=0;
b<c;
b++){if(bF.contains(a[b],this)){return !0
}}}))
}for(f=this.pushStack([]),b=0;
b<c;
b++){bF.find(d,a[b],f)
}return 1<c?bF.uniqueSort(f):f
},filter:function(a){return this.pushStack(bG(this,a||[],!1))
},not:function(a){return this.pushStack(bG(this,a||[],!0))
},is:function(a){return !!bG(this,"string"==typeof a&&cc.test(a)?bF(a):a||[],!1).length
}});
var bx,cf=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
(bF.fn.init=function(d,b,f){var c,a;
if(!d){return this
}if(f=f||bx,"string"==typeof d){if(!(c="<"===d[0]&&">"===d[d.length-1]&&3<=d.length?[null,d,null]:cf.exec(d))||!c[1]&&b){return !b||b.jquery?(b||f).find(d):this.constructor(b).find(d)
}if(c[1]){if(b=b instanceof bF?b[0]:b,bF.merge(this,bF.parseHTML(c[1],b&&b.nodeType?b.ownerDocument||b:co,!0)),cq.test(c[1])&&bF.isPlainObject(b)){for(c in b){bD(this[c])?this[c](b[c]):this.attr(c,b[c])
}}return this
}return(a=co.getElementById(c[2]))&&(this[0]=a,this.length=1),this
}return d.nodeType?(this[0]=d,this.length=1,this):bD(d)?void 0!==f.ready?f.ready(d):d(bF):bF.makeArray(d,this)
}).prototype=bF.fn,bx=bF(co);
var ck=/^(?:parents|prev(?:Until|All))/,ca={children:!0,contents:!0,next:!0,prev:!0};
function b9(b,a){while((b=b[a])&&1!==b.nodeType){}return b
}bF.fn.extend({has:function(b){var a=bF(b,this),c=a.length;
return this.filter(function(){for(var d=0;
d<c;
d++){if(bF.contains(this,a[d])){return !0
}}})
},closest:function(g,d){var j,f=0,c=this.length,h=[],b="string"!=typeof g&&bF(g);
if(!cc.test(g)){for(;
f<c;
f++){for(j=this[f];
j&&j!==d;
j=j.parentNode){if(j.nodeType<11&&(b?-1<b.index(j):1===j.nodeType&&bF.find.matchesSelector(j,g))){h.push(j);
break
}}}}return this.pushStack(1<h.length?bF.uniqueSort(h):h)
},index:function(a){return a?"string"==typeof a?bI.call(bF(a),this[0]):bI.call(this,a.jquery?a[0]:a):this[0]&&this[0].parentNode?this.first().prevAll().length:-1
},add:function(b,a){return this.pushStack(bF.uniqueSort(bF.merge(this.get(),bF(b,a))))
},addBack:function(a){return this.add(null==a?this.prevObject:this.prevObject.filter(a))
}}),bF.each({parent:function(b){var a=b.parentNode;
return a&&11!==a.nodeType?a:null
},parents:function(a){return b3(a,"parentNode")
},parentsUntil:function(b,a,c){return b3(b,"parentNode",c)
},next:function(a){return b9(a,"nextSibling")
},prev:function(a){return b9(a,"previousSibling")
},nextAll:function(a){return b3(a,"nextSibling")
},prevAll:function(a){return b3(a,"previousSibling")
},nextUntil:function(b,a,c){return b3(b,"nextSibling",c)
},prevUntil:function(b,a,c){return b3(b,"previousSibling",c)
},siblings:function(a){return b5((a.parentNode||{}).firstChild,a)
},children:function(a){return b5(a.firstChild)
},contents:function(a){return"undefined"!=typeof a.contentDocument?a.contentDocument:(cw(a,"template")&&(a=a.content||a),bF.merge([],a.childNodes))
}},function(b,a){bF.fn[b]=function(d,c){var f=bF.map(this,a,d);
return"Until"!==b.slice(-5)&&(c=d),c&&"string"==typeof c&&(f=bF.filter(c,f)),1<this.length&&(ca[b]||bF.uniqueSort(f),ck.test(b)&&f.reverse()),this.pushStack(f)
}
});
var b6=/[^\x20\t\r\n\f]+/g;
function cd(a){return a
}function cj(a){throw a
}function bZ(d,b,f,c){var a;
try{d&&bD(a=d.promise)?a.call(d).done(b).fail(f):d&&bD(a=d.then)?a.call(d,b,f):b.apply(void 0,[d].slice(c))
}catch(d){f.apply(void 0,[d])
}}bF.Callbacks=function(b){var m,g;
b="string"==typeof b?(m=b,g={},bF.each(m.match(b6)||[],function(c,a){g[a]=!0
}),g):bF.extend({},b);
var j,w,d,q,x=[],v=[],h=-1,p=function(){for(q=q||b.once,d=j=!0;
v.length;
h=-1){w=v.shift();
while(++h<x.length){!1===x[h].apply(w[0],w[1])&&b.stopOnFalse&&(h=x.length,w=!1)
}}b.memory||(w=!1),j=!1,q&&(x=w?[]:"")
},k={add:function(){return x&&(w&&!j&&(h=x.length-1,v.push(w)),function a(c){bF.each(c,function(i,f){bD(f)?b.unique&&k.has(f)||x.push(f):f&&f.length&&"string"!==bp(f)&&a(f)
})
}(arguments),w&&!j&&p()),this
},remove:function(){return bF.each(arguments,function(c,a){var f;
while(-1<(f=bF.inArray(a,x,f))){x.splice(f,1),f<=h&&h--
}}),this
},has:function(a){return a?-1<bF.inArray(a,x):0<x.length
},empty:function(){return x&&(x=[]),this
},disable:function(){return q=v=[],x=w="",this
},disabled:function(){return !x
},lock:function(){return q=v=[],w||j||(x=w=""),this
},locked:function(){return !!q
},fireWith:function(c,a){return q||(a=[c,(a=a||[]).slice?a.slice():a],v.push(a),j||p()),this
},fire:function(){return k.fireWith(this,arguments),this
},fired:function(){return !!d
}};
return k
},bF.extend({Deferred:function(f){var g=[["notify","progress",bF.Callbacks("memory"),bF.Callbacks("memory"),2],["resolve","done",bF.Callbacks("once memory"),bF.Callbacks("once memory"),0,"resolved"],["reject","fail",bF.Callbacks("once memory"),bF.Callbacks("once memory"),1,"rejected"]],c="pending",b={state:function(){return c
},always:function(){return d.done(arguments).fail(arguments),this
},"catch":function(a){return b.then(null,a)
},pipe:function(){var a=arguments;
return bF.Deferred(function(e){bF.each(g,function(i,h){var j=bD(a[h[4]])&&a[h[4]];
d[h[1]](function(){var k=j&&j.apply(this,arguments);
k&&bD(k.promise)?k.promise().progress(e.notify).done(e.resolve).fail(e.reject):e[h[0]+"With"](this,j?[k]:arguments)
})
}),a=null
}).promise()
},then:function(h,j,i){var e=0;
function a(l,n,k,m){return function(){var s=this,p=arguments,q=function(){var u,r;
if(!(l<e)){if((u=k.apply(s,p))===n.promise()){throw new TypeError("Thenable self-resolution")
}r=u&&("object"==typeof u||"function"==typeof u)&&u.then,bD(r)?m?r.call(u,a(e,n,cd,m),a(e,n,cj,m)):(e++,r.call(u,a(e,n,cd,m),a(e,n,cj,m),a(e,n,cd,n.notifyWith))):(k!==cd&&(s=void 0,p=[u]),(m||n.resolveWith)(s,p))
}},o=m?q:function(){try{r()
}catch(r){bF.Deferred.exceptionHook&&bF.Deferred.exceptionHook(r,o.stackTrace),e<=l+1&&(k!==cj&&(s=void 0,p=[r]),n.rejectWith(s,p))
}};
l?o():(bF.Deferred.getStackHook&&(o.stackTrace=bF.Deferred.getStackHook()),cs.setTimeout(o))
}
}return bF.Deferred(function(k){g[0][3].add(a(0,k,bD(i)?i:cd,k.notifyWith)),g[1][3].add(a(0,k,bD(h)?h:cd)),g[2][3].add(a(0,k,bD(j)?j:cj))
}).promise()
},promise:function(a){return null!=a?bF.extend(a,b):b
}},d={};
return bF.each(g,function(i,a){var j=a[2],h=a[5];
b[a[1]]=j.add,h&&j.add(function(){c=h
},g[3-i][2].disable,g[3-i][3].disable,g[0][2].lock,g[0][3].lock),j.add(a[3].fire),d[a[0]]=function(){return d[a[0]+"With"](this===d?void 0:this,arguments),this
},d[a[0]+"With"]=j.fireWith
}),b.promise(d),f&&f.call(d,d),d
},when:function(g){var j=arguments.length,d=j,f=Array(d),c=bv.call(arguments),h=bF.Deferred(),b=function(a){return function(i){f[a]=this,c[a]=1<arguments.length?bv.call(arguments):i,--j||h.resolveWith(f,c)
}
};
if(j<=1&&(bZ(g,h.done(b(d)).resolve,h.reject,!j),"pending"===h.state()||bD(c[d]&&c[d].then))){return h.then()
}while(d--){bZ(c[d],b(d),h.reject)
}return h.promise()
}});
var cG=/^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
bF.Deferred.exceptionHook=function(b,a){cs.console&&cs.console.warn&&b&&cG.test(b.name)&&cs.console.warn("jQuery.Deferred exception: "+b.message,b.stack,a)
},bF.readyException=function(a){cs.setTimeout(function(){throw a
})
};
var cn=bF.Deferred();
function cu(){co.removeEventListener("DOMContentLoaded",cu),cs.removeEventListener("load",cu),bF.ready()
}bF.fn.ready=function(a){return cn.then(a)["catch"](function(b){bF.readyException(b)
}),this
},bF.extend({isReady:!1,readyWait:1,ready:function(a){(!0===a?--bF.readyWait:bF.isReady)||(bF.isReady=!0)!==a&&0<--bF.readyWait||cn.resolveWith(co,[bF])
}}),bF.ready.then=cn.then,"complete"===co.readyState||"loading"!==co.readyState&&!co.documentElement.doScroll?cs.setTimeout(bF.ready):(co.addEventListener("DOMContentLoaded",cu),cs.addEventListener("load",cu));
var bT=function(h,m,d,b,g,c,j){var p=0,k=h.length,f=null==d;
if("object"===bp(d)){for(p in g=!0,d){bT(h,m,p,d[p],!0,c,j)
}}else{if(void 0!==b&&(g=!0,bD(b)||(j=!0),f&&(j?(m.call(h,b),m=null):(f=m,m=function(i,a,l){return f.call(bF(i),l)
})),m)){for(;
p<k;
p++){m(h[p],d,j?b:b.call(h[p],p,m(h[p],d)))
}}}return g?h:f?m.call(h):k?m(h[0],d):c
},bl=/^-ms-/,b2=/-([a-z])/g;
function bY(b,a){return a.toUpperCase()
}function b0(a){return a.replace(bl,"ms-").replace(b2,bY)
}var cl=function(a){return 1===a.nodeType||9===a.nodeType||!+a.nodeType
};
function bX(){this.expando=bF.expando+bX.uid++
}bX.uid=1,bX.prototype={cache:function(b){var a=b[this.expando];
return a||(a={},cl(b)&&(b.nodeType?b[this.expando]=a:Object.defineProperty(b,this.expando,{value:a,configurable:!0}))),a
},set:function(d,b,f){var c,a=this.cache(d);
if("string"==typeof b){a[b0(b)]=f
}else{for(c in b){a[b0(c)]=b[c]
}}return a
},get:function(b,a){return void 0===a?this.cache(b):b[this.expando]&&b[this.expando][b0(a)]
},access:function(b,a,c){return void 0===a||a&&"string"==typeof a&&void 0===c?this.get(b,a):(this.set(b,a,c),void 0!==c?c:a)
},remove:function(c,a){var d,b=c[this.expando];
if(void 0!==b){if(void 0!==a){d=(a=Array.isArray(a)?a.map(b0):(a=b0(a)) in b?[a]:a.match(b6)||[]).length;
while(d--){delete b[a[d]]
}}(void 0===a||bF.isEmptyObject(b))&&(c.nodeType?c[this.expando]=void 0:delete c[this.expando])
}},hasData:function(b){var a=b[this.expando];
return void 0!==a&&!bF.isEmptyObject(a)
}};
var b8=new bX,ci=new bX,cg=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,bV=/[A-Z]/g;
function a9(d,b,f){var c,a;
if(void 0===f&&1===d.nodeType){if(c="data-"+b.replace(bV,"-$&").toLowerCase(),"string"==typeof(f=d.getAttribute(c))){try{f="true"===(a=f)||"false"!==a&&("null"===a?null:a===+a+""?+a:cg.test(a)?JSON.parse(a):a)
}catch(d){}ci.set(d,b,f)
}else{f=void 0
}}return f
}bF.extend({hasData:function(a){return ci.hasData(a)||b8.hasData(a)
},data:function(b,a,c){return ci.access(b,a,c)
},removeData:function(b,a){ci.remove(b,a)
},_data:function(b,a,c){return b8.access(b,a,c)
},_removeData:function(b,a){b8.remove(b,a)
}}),bF.fn.extend({data:function(j,g){var d,f,c,h=this[0],b=h&&h.attributes;
if(void 0===j){if(this.length&&(c=ci.get(h),1===h.nodeType&&!b8.get(h,"hasDataAttrs"))){d=b.length;
while(d--){b[d]&&0===(f=b[d].name).indexOf("data-")&&(f=b0(f.slice(5)),a9(h,f,c[f]))
}b8.set(h,"hasDataAttrs",!0)
}return c
}return"object"==typeof j?this.each(function(){ci.set(this,j)
}):bT(this,function(i){var a;
if(h&&void 0===i){return void 0!==(a=ci.get(h,j))?a:void 0!==(a=a9(h,j))?a:void 0
}this.each(function(){ci.set(this,j,i)
})
},null,g,1<arguments.length,null,!0)
},removeData:function(a){return this.each(function(){ci.remove(this,a)
})
}}),bF.extend({queue:function(c,a,d){var b;
if(c){return a=(a||"fx")+"queue",b=b8.get(c,a),d&&(!b||Array.isArray(d)?b=b8.access(c,a,bF.makeArray(d)):b.push(d)),b||[]
}},dequeue:function(d,b){b=b||"fx";
var g=bF.queue(d,b),c=g.length,a=g.shift(),f=bF._queueHooks(d,b);
"inprogress"===a&&(a=g.shift(),c--),a&&("fx"===b&&g.unshift("inprogress"),delete f.stop,a.call(d,function(){bF.dequeue(d,b)
},f)),!c&&f&&f.empty.fire()
},_queueHooks:function(b,a){var c=a+"queueHooks";
return b8.get(b,c)||b8.access(b,c,{empty:bF.Callbacks("once memory").add(function(){b8.remove(b,[a+"queue",c])
})})
}}),bF.fn.extend({queue:function(a,c){var b=2;
return"string"!=typeof a&&(c=a,a="fx",b--),arguments.length<b?bF.queue(this[0],a):void 0===c?this:this.each(function(){var d=bF.queue(this,a,c);
bF._queueHooks(this,a),"fx"===a&&"inprogress"!==d[0]&&bF.dequeue(this,a)
})
},dequeue:function(a){return this.each(function(){bF.dequeue(this,a)
})
},clearQueue:function(a){return this.queue(a||"fx",[])
},promise:function(h,d){var k,g=1,c=bF.Deferred(),j=this,b=this.length,f=function(){--g||c.resolveWith(j,[j])
};
"string"!=typeof h&&(d=h,h=void 0),h=h||"fx";
while(b--){(k=b8.get(j[b],h+"queueHooks"))&&k.empty&&(g++,k.empty.add(f))
}return f(),c.promise(d)
}});
var aM=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,cx=new RegExp("^(?:([+-])=|)("+aM+")([a-z%]*)$","i"),a4=["Top","Right","Bottom","Left"],aC=co.documentElement,bU=function(a){return bF.contains(a.ownerDocument,a)
},cD={composed:!0};
aC.getRootNode&&(bU=function(a){return bF.contains(a.ownerDocument,a)||a.getRootNode(cD)===a.ownerDocument
});
var aU=function(b,a){return"none"===(b=a||b).style.display||""===b.style.display&&bU(b)&&"none"===bF.css(b,"display")
},aE=function(g,d,j,f){var c,h,b={};
for(h in d){b[h]=g.style[h],g.style[h]=d[h]
}for(h in c=j.apply(g,f||[]),d){g.style[h]=b[h]
}return c
};
function cQ(j,q,f,b){var h,d,m=20,v=b?function(){return b.cur()
}:function(){return bF.css(j,q,"")
},p=v(),g=f&&f[3]||(bF.cssNumber[q]?"":"px"),k=j.nodeType&&(bF.cssNumber[q]||"px"!==g&&+p)&&cx.exec(bF.css(j,q));
if(k&&k[3]!==g){p/=2,g=g||k[3],k=+p||1;
while(m--){bF.style(j,q,k+g),(1-d)*(1-(d=v()/p||0.5))<=0&&(m=0),k/=d
}k*=2,bF.style(j,q,k+g),f=f||[]
}return f&&(k=+k||+p||0,h=f[1]?k+(f[1]+1)*f[2]:+f[2],b&&(b.unit=g,b.start=k,b.end=h)),h
}var bH={};
function a1(m,w){for(var g,b,j,d,q,x,v,h=[],p=0,k=m.length;
p<k;
p++){(b=m[p]).style&&(g=b.style.display,w?("none"===g&&(h[p]=b8.get(b,"display")||null,h[p]||(b.style.display="")),""===b.style.display&&aU(b)&&(h[p]=(v=q=d=void 0,q=(j=b).ownerDocument,x=j.nodeName,(v=bH[x])||(d=q.body.appendChild(q.createElement(x)),v=bF.css(d,"display"),d.parentNode.removeChild(d),"none"===v&&(v="block"),bH[x]=v)))):"none"!==g&&(h[p]="none",b8.set(b,"display",g)))
}for(p=0;
p<k;
p++){null!=h[p]&&(m[p].style.display=h[p])
}return m
}bF.fn.extend({show:function(){return a1(this,!0)
},hide:function(){return a1(this)
},toggle:function(a){return"boolean"==typeof a?a?this.show():this.hide():this.each(function(){aU(this)?bF(this).show():bF(this).hide()
})
}});
var bk=/^(?:checkbox|radio)$/i,bh=/<([a-z][^\/\0>\x20\t\r\n\f]*)/i,aK=/^$|^module$|\/(?:java|ecma)script/i,aS={option:[1,"<select multiple='multiple'>","</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};
function aw(b,a){var c;
return c="undefined"!=typeof b.getElementsByTagName?b.getElementsByTagName(a||"*"):"undefined"!=typeof b.querySelectorAll?b.querySelectorAll(a||"*"):[],void 0===a||a&&cw(b,a)?bF.merge([b],c):c
}function cK(c,a){for(var d=0,b=c.length;
d<b;
d++){b8.set(c[d],"globalEval",!a||b8.get(a[d],"globalEval"))
}}aS.optgroup=aS.option,aS.tbody=aS.tfoot=aS.colgroup=aS.caption=aS.thead,aS.th=aS.td;
var cI,ac,ch=/<|&#?\w+;/;
function am(x,C,k,b,q){for(var j,A,D,B,m,z,w=C.createDocumentFragment(),g=[],y=0,v=x.length;
y<v;
y++){if((j=x[y])||0===j){if("object"===bp(j)){bF.merge(g,j.nodeType?[j]:j)
}else{if(ch.test(j)){A=A||w.appendChild(C.createElement("div")),D=(bh.exec(j)||["",""])[1].toLowerCase(),B=aS[D]||aS._default,A.innerHTML=B[1]+bF.htmlPrefilter(j)+B[2],z=B[0];
while(z--){A=A.lastChild
}bF.merge(g,A.childNodes),(A=w.firstChild).textContent=""
}else{g.push(C.createTextNode(j))
}}}}w.textContent="",y=0;
while(j=g[y++]){if(b&&-1<bF.inArray(j,b)){q&&q.push(j)
}else{if(m=bU(j),A=aw(w.appendChild(j),"script"),m&&cK(A),k){z=0;
while(j=A[z++]){aK.test(j.type||"")&&k.push(j)
}}}}return w
}cI=co.createDocumentFragment().appendChild(co.createElement("div")),(ac=co.createElement("input")).setAttribute("type","radio"),ac.setAttribute("checked","checked"),ac.setAttribute("name","t"),cI.appendChild(ac),bm.checkClone=cI.cloneNode(!0).cloneNode(!0).lastChild.checked,cI.innerHTML="<textarea>x</textarea>",bm.noCloneChecked=!!cI.cloneNode(!0).lastChild.defaultValue;
var cJ=/^key/,aJ=/^(?:mouse|pointer|contextmenu|drag|drop)|click/,ar=/^([^.]*)(?:\.(.+)|)/;
function ak(){return !0
}function ab(){return !1
}function aT(b,a){return b===function(){try{return co.activeElement
}catch(c){}}()==("focus"===a)
}function a0(h,d,k,g,c,j){var b,f;
if("object"==typeof d){for(f in "string"!=typeof k&&(g=g||k,k=void 0),d){a0(h,f,k,g,d[f],j)
}return h
}if(null==g&&null==c?(c=k,g=k=void 0):null==c&&("string"==typeof k?(c=g,g=void 0):(c=g,g=k,k=void 0)),!1===c){c=ab
}else{if(!c){return h
}}return 1===j&&(b=c,(c=function(a){return bF().off(a),b.apply(this,arguments)
}).guid=b.guid||(b.guid=bF.guid++)),h.each(function(){bF.event.add(this,d,c,g,k)
})
}function aB(b,a,c){c?(b8.set(b,a,!1),bF.event.add(b,a,{namespace:!1,handler:function(g){var d,h,f=b8.get(this,a);
if(1&g.isTrigger&&this[a]){if(f.length){(bF.event.special[a]||{}).delegateType&&g.stopPropagation()
}else{if(f=bv.call(arguments),b8.set(this,a,f),d=c(this,a),this[a](),f!==(h=b8.get(this,a))||d?b8.set(this,a,!1):h={},f!==h){return g.stopImmediatePropagation(),g.preventDefault(),h.value
}}}else{f.length&&(b8.set(this,a,{value:bF.event.trigger(bF.extend(f[0],bF.Event.prototype),f.slice(1),this)}),g.stopImmediatePropagation())
}}})):void 0===b8.get(b,a)&&bF.event.add(b,a,ak)
}bF.event={global:{},add:function(G,A,m,b,w){var k,D,H,F,q,C,z,j,B,x,y,E=b8.get(G);
if(E){m.handler&&(m=(k=m).handler,w=k.selector),w&&bF.find.matchesSelector(aC,w),m.guid||(m.guid=bF.guid++),(F=E.events)||(F=E.events={}),(D=E.handle)||(D=E.handle=function(a){return"undefined"!=typeof bF&&bF.event.triggered!==a.type?bF.event.dispatch.apply(G,arguments):void 0
}),q=(A=(A||"").match(b6)||[""]).length;
while(q--){B=y=(H=ar.exec(A[q])||[])[1],x=(H[2]||"").split(".").sort(),B&&(z=bF.event.special[B]||{},B=(w?z.delegateType:z.bindType)||B,z=bF.event.special[B]||{},C=bF.extend({type:B,origType:y,data:b,handler:m,guid:m.guid,selector:w,needsContext:w&&bF.expr.match.needsContext.test(w),namespace:x.join(".")},k),(j=F[B])||((j=F[B]=[]).delegateCount=0,z.setup&&!1!==z.setup.call(G,b,x,D)||G.addEventListener&&G.addEventListener(B,D)),z.add&&(z.add.call(G,C),C.handler.guid||(C.handler.guid=m.guid)),w?j.splice(j.delegateCount++,0,C):j.push(C),bF.event.global[B]=!0)
}}},remove:function(A,G,m,b,w){var k,D,H,F,q,C,z,j,B,x,y,E=b8.hasData(A)&&b8.get(A);
if(E&&(F=E.events)){q=(G=(G||"").match(b6)||[""]).length;
while(q--){if(B=y=(H=ar.exec(G[q])||[])[1],x=(H[2]||"").split(".").sort(),B){z=bF.event.special[B]||{},j=F[B=(b?z.delegateType:z.bindType)||B]||[],H=H[2]&&new RegExp("(^|\\.)"+x.join("\\.(?:.*\\.|)")+"(\\.|$)"),D=k=j.length;
while(k--){C=j[k],!w&&y!==C.origType||m&&m.guid!==C.guid||H&&!H.test(C.namespace)||b&&b!==C.selector&&("**"!==b||!C.selector)||(j.splice(k,1),C.selector&&j.delegateCount--,z.remove&&z.remove.call(A,C))
}D&&!j.length&&(z.teardown&&!1!==z.teardown.call(A,x,E.handle)||bF.removeEvent(A,B,E.handle),delete F[B])
}else{for(B in F){bF.event.remove(A,B+G[q],m,b,!0)
}}}bF.isEmptyObject(F)&&b8.remove(A,"handle events")
}},dispatch:function(j){var q,f,b,h,d,m,v=bF.event.fix(j),p=new Array(arguments.length),g=(b8.get(this,"events")||{})[v.type]||[],k=bF.event.special[v.type]||{};
for(p[0]=v,q=1;
q<arguments.length;
q++){p[q]=arguments[q]
}if(v.delegateTarget=this,!k.preDispatch||!1!==k.preDispatch.call(this,v)){m=bF.event.handlers.call(this,v,g),q=0;
while((h=m[q++])&&!v.isPropagationStopped()){v.currentTarget=h.elem,f=0;
while((d=h.handlers[f++])&&!v.isImmediatePropagationStopped()){v.rnamespace&&!1!==d.namespace&&!v.rnamespace.test(d.namespace)||(v.handleObj=d,v.data=d.data,void 0!==(b=((bF.event.special[d.origType]||{}).handle||d.handler).apply(h.elem,p))&&!1===(v.result=b)&&(v.preventDefault(),v.stopPropagation()))
}}return k.postDispatch&&k.postDispatch.call(this,v),v.result
}},handlers:function(h,m){var d,b,g,c,j,p=[],k=m.delegateCount,f=h.target;
if(k&&f.nodeType&&!("click"===h.type&&1<=h.button)){for(;
f!==this;
f=f.parentNode||this){if(1===f.nodeType&&("click"!==h.type||!0!==f.disabled)){for(c=[],j={},d=0;
d<k;
d++){void 0===j[g=(b=m[d]).selector+" "]&&(j[g]=b.needsContext?-1<bF(g,this).index(f):bF.find(g,this,null,[f]).length),j[g]&&c.push(b)
}c.length&&p.push({elem:f,handlers:c})
}}}return f=this,k<m.length&&p.push({elem:f,handlers:m.slice(k)}),p
},addProp:function(a,b){Object.defineProperty(bF.Event.prototype,a,{enumerable:!0,configurable:!0,get:bD(b)?function(){if(this.originalEvent){return b(this.originalEvent)
}}:function(){if(this.originalEvent){return this.originalEvent[a]
}},set:function(c){Object.defineProperty(this,a,{enumerable:!0,configurable:!0,writable:!0,value:c})
}})
},fix:function(a){return a[bF.expando]?a:new bF.Event(a)
},special:{load:{noBubble:!0},click:{setup:function(b){var a=this||b;
return bk.test(a.type)&&a.click&&cw(a,"input")&&aB(a,"click",ak),!1
},trigger:function(b){var a=this||b;
return bk.test(a.type)&&a.click&&cw(a,"input")&&aB(a,"click"),!0
},_default:function(b){var a=b.target;
return bk.test(a.type)&&a.click&&cw(a,"input")&&b8.get(a,"click")||cw(a,"a")
}},beforeunload:{postDispatch:function(a){void 0!==a.result&&a.originalEvent&&(a.originalEvent.returnValue=a.result)
}}}},bF.removeEvent=function(b,a,c){b.removeEventListener&&b.removeEventListener(a,c)
},bF.Event=function(b,a){if(!(this instanceof bF.Event)){return new bF.Event(b,a)
}b&&b.type?(this.originalEvent=b,this.type=b.type,this.isDefaultPrevented=b.defaultPrevented||void 0===b.defaultPrevented&&!1===b.returnValue?ak:ab,this.target=b.target&&3===b.target.nodeType?b.target.parentNode:b.target,this.currentTarget=b.currentTarget,this.relatedTarget=b.relatedTarget):this.type=b,a&&bF.extend(this,a),this.timeStamp=b&&b.timeStamp||Date.now(),this[bF.expando]=!0
},bF.Event.prototype={constructor:bF.Event,isDefaultPrevented:ab,isPropagationStopped:ab,isImmediatePropagationStopped:ab,isSimulated:!1,preventDefault:function(){var a=this.originalEvent;
this.isDefaultPrevented=ak,a&&!this.isSimulated&&a.preventDefault()
},stopPropagation:function(){var a=this.originalEvent;
this.isPropagationStopped=ak,a&&!this.isSimulated&&a.stopPropagation()
},stopImmediatePropagation:function(){var a=this.originalEvent;
this.isImmediatePropagationStopped=ak,a&&!this.isSimulated&&a.stopImmediatePropagation(),this.stopPropagation()
}},bF.each({altKey:!0,bubbles:!0,cancelable:!0,changedTouches:!0,ctrlKey:!0,detail:!0,eventPhase:!0,metaKey:!0,pageX:!0,pageY:!0,shiftKey:!0,view:!0,"char":!0,code:!0,charCode:!0,key:!0,keyCode:!0,button:!0,buttons:!0,clientX:!0,clientY:!0,offsetX:!0,offsetY:!0,pointerId:!0,pointerType:!0,screenX:!0,screenY:!0,targetTouches:!0,toElement:!0,touches:!0,which:function(b){var a=b.button;
return null==b.which&&cJ.test(b.type)?null!=b.charCode?b.charCode:b.keyCode:!b.which&&void 0!==a&&aJ.test(b.type)?1&a?1:2&a?3:4&a?2:0:b.which
}},bF.event.addProp),bF.each({focus:"focusin",blur:"focusout"},function(b,a){bF.event.special[b]={setup:function(){return aB(this,b,aT),!1
},trigger:function(){return aB(this,b),!0
},delegateType:a}
}),bF.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(b,a){bF.event.special[b]={delegateType:a,bindType:a,handle:function(f){var c,g=f.relatedTarget,d=f.handleObj;
return g&&(g===this||bF.contains(this,g))||(f.type=d.origType,c=d.handler.apply(this,arguments),f.type=a),c
}}
}),bF.fn.extend({on:function(c,a,d,b){return a0(this,c,a,d,b)
},one:function(c,a,d,b){return a0(this,c,a,d,b,1)
},off:function(d,b,f){var c,a;
if(d&&d.preventDefault&&d.handleObj){return c=d.handleObj,bF(d.delegateTarget).off(c.namespace?c.origType+"."+c.namespace:c.origType,c.selector,c.handler),this
}if("object"==typeof d){for(a in d){this.off(a,b,d[a])
}return this
}return !1!==b&&"function"!=typeof b||(f=b,b=void 0),!1===f&&(f=ab),this.each(function(){bF.event.remove(this,d,f,b)
})
}});
var au=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,bc=/<script|<style|<link/i,bb=/checked\s*(?:[^=]|=\s*.checked.)/i,cH=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
function aL(b,a){return cw(b,"table")&&cw(11!==a.nodeType?a:a.firstChild,"tr")&&bF(b).children("tbody")[0]||b
}function aD(a){return a.type=(null!==a.getAttribute("type"))+"/"+a.type,a
}function al(a){return"true/"===(a.type||"").slice(0,5)?a.type=a.type.slice(5):a.removeAttribute("type"),a
}function a3(h,m){var d,b,g,c,j,p,k,f;
if(1===m.nodeType){if(b8.hasData(h)&&(c=b8.access(h),j=b8.set(m,c),f=c.events)){for(g in delete j.handle,j.events={},f){for(d=0,b=f[g].length;
d<b;
d++){bF.event.add(m,g,f[g][d])
}}}ci.hasData(h)&&(p=ci.access(h),k=bF.extend({},p),ci.set(m,k))
}}function cv(k,b,q,j){b=bK.apply([],b);
var x,C,A,D,B,m,z=0,w=k.length,g=w-1,y=b[0],v=bD(y);
if(v||1<w&&"string"==typeof y&&!bm.checkClone&&bb.test(y)){return k.each(function(c){var a=k.eq(c);
v&&(b[0]=y.call(this,c,a.html())),cv(a,b,q,j)
})
}if(w&&(C=(x=am(b,k[0].ownerDocument,!1,k,j)).firstChild,1===x.childNodes.length&&(x=C),C||j)){for(D=(A=bF.map(aw(x,"script"),aD)).length;
z<w;
z++){B=x,z!==g&&(B=bF.clone(B,!0,!0),D&&bF.merge(A,aw(B,"script"))),q.call(k[z],B,z)
}if(D){for(m=A[A.length-1].ownerDocument,bF.map(A,al),z=0;
z<D;
z++){B=A[z],aK.test(B.type||"")&&!b8.access(B,"globalEval")&&bF.contains(m,B)&&(B.src&&"module"!==(B.type||"").toLowerCase()?bF._evalUrl&&!B.noModule&&bF._evalUrl(B.src,{nonce:B.nonce||B.getAttribute("nonce")}):bQ(B.textContent.replace(cH,""),B,m))
}}}return k
}function bs(d,b,g){for(var c,a=b?bF.filter(b,d):d,f=0;
null!=(c=a[f]);
f++){g||1!==c.nodeType||bF.cleanData(aw(c)),c.parentNode&&(g&&bU(c)&&cK(aw(c,"script")),c.parentNode.removeChild(c))
}return d
}bF.extend({htmlPrefilter:function(a){return a.replace(au,"<$1></$2>")
},clone:function(m,w,g){var b,j,d,q,x,v,h,p=m.cloneNode(!0),k=bU(m);
if(!(bm.noCloneChecked||1!==m.nodeType&&11!==m.nodeType||bF.isXMLDoc(m))){for(q=aw(p),b=0,j=(d=aw(m)).length;
b<j;
b++){x=d[b],v=q[b],void 0,"input"===(h=v.nodeName.toLowerCase())&&bk.test(x.type)?v.checked=x.checked:"input"!==h&&"textarea"!==h||(v.defaultValue=x.defaultValue)
}}if(w){if(g){for(d=d||aw(m),q=q||aw(p),b=0,j=d.length;
b<j;
b++){a3(d[b],q[b])
}}else{a3(m,p)
}}return 0<(q=aw(p,"script")).length&&cK(q,!k&&aw(m,"script")),p
},cleanData:function(d){for(var b,g,c,a=bF.event.special,f=0;
void 0!==(g=d[f]);
f++){if(cl(g)){if(b=g[b8.expando]){if(b.events){for(c in b.events){a[c]?bF.event.remove(g,c):bF.removeEvent(g,c,b.handle)
}}g[b8.expando]=void 0
}g[ci.expando]&&(g[ci.expando]=void 0)
}}}}),bF.fn.extend({detach:function(a){return bs(this,a,!0)
},remove:function(a){return bs(this,a)
},text:function(a){return bT(this,function(b){return void 0===b?bF.text(this):this.empty().each(function(){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||(this.textContent=b)
})
},null,a,arguments.length)
},append:function(){return cv(this,arguments,function(a){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||aL(this,a).appendChild(a)
})
},prepend:function(){return cv(this,arguments,function(b){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var a=aL(this,b);
a.insertBefore(b,a.firstChild)
}})
},before:function(){return cv(this,arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this)
})
},after:function(){return cv(this,arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this.nextSibling)
})
},empty:function(){for(var b,a=0;
null!=(b=this[a]);
a++){1===b.nodeType&&(bF.cleanData(aw(b,!1)),b.textContent="")
}return this
},clone:function(b,a){return b=null!=b&&b,a=null==a?b:a,this.map(function(){return bF.clone(this,b,a)
})
},html:function(a){return bT(this,function(d){var b=this[0]||{},f=0,c=this.length;
if(void 0===d&&1===b.nodeType){return b.innerHTML
}if("string"==typeof d&&!bc.test(d)&&!aS[(bh.exec(d)||["",""])[1].toLowerCase()]){d=bF.htmlPrefilter(d);
try{for(;
f<c;
f++){1===(b=this[f]||{}).nodeType&&(bF.cleanData(aw(b,!1)),b.innerHTML=d)
}b=0
}catch(d){}}b&&this.empty().append(d)
},null,a,arguments.length)
},replaceWith:function(){var a=[];
return cv(this,arguments,function(c){var b=this.parentNode;
bF.inArray(this,a)<0&&(bF.cleanData(aw(this)),b&&b.replaceChild(c,this))
},a)
}}),bF.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(c,b){bF.fn[c]=function(g){for(var d,j=[],f=bF(g),a=f.length-1,h=0;
h<=a;
h++){d=h===a?this:this.clone(!0),bF(f[h])[b](d),br.apply(j,d.get())
}return this.pushStack(j)
}
});
var cr=new RegExp("^("+aM+")(?!px)[a-z%]+$","i"),aj=function(b){var a=b.ownerDocument.defaultView;
return a&&a.opener||(a=cs),a.getComputedStyle(b)
},aR=new RegExp(a4.join("|"),"i");
function ag(h,d,k){var g,c,j,b,f=h.style;
return(k=k||aj(h))&&(""!==(b=k.getPropertyValue(d)||k[d])||bU(h)||(b=bF.style(h,d)),!bm.pixelBoxStyles()&&cr.test(b)&&aR.test(d)&&(g=f.width,c=f.minWidth,j=f.maxWidth,f.minWidth=f.maxWidth=f.width=b,b=k.width,f.width=g,f.minWidth=c,f.maxWidth=j)),void 0!==b?b+"":b
}function cA(b,a){return{get:function(){if(!b()){return(this.get=a).apply(this,arguments)
}delete this.get
}}
}!function(){function g(){if(j){l.style.cssText="position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0",j.style.cssText="position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%",aC.appendChild(l).appendChild(j);
var a=cs.getComputedStyle(j);
d="1%"!==a.top,h=12===k(a.marginLeft),j.style.right="60%",c=36===k(a.right),b=36===k(a.width),j.style.position="absolute",f=12===k(j.offsetWidth/3),aC.removeChild(l),j=null
}}function k(a){return Math.round(parseFloat(a))
}var d,b,f,c,h,l=co.createElement("div"),j=co.createElement("div");
j.style&&(j.style.backgroundClip="content-box",j.cloneNode(!0).style.backgroundClip="",bm.clearCloneStyle="content-box"===j.style.backgroundClip,bF.extend(bm,{boxSizingReliable:function(){return g(),b
},pixelBoxStyles:function(){return g(),c
},pixelPosition:function(){return g(),d
},reliableMarginLeft:function(){return g(),h
},scrollboxSize:function(){return g(),f
}}))
}();
var cz=["Webkit","Moz","ms"],bf=co.createElement("div").style,b1={};
function cP(b){var a=bF.cssProps[b]||b1[b];
return a||(b in bf?b:b1[b]=function(d){var c=d[0].toUpperCase()+d.slice(1),f=cz.length;
while(f--){if((d=cz[f]+c) in bf){return d
}}}(b)||b)
}var a6=/^(none|table(?!-c[ea]).+)/,av=/^--/,bS={position:"absolute",visibility:"hidden",display:"block"},bj={letterSpacing:"0",fontWeight:"400"};
function aX(c,a,d){var b=cx.exec(a);
return b?Math.max(0,b[2]-(d||0))+(b[3]||"px"):a
}function a5(g,k,d,b,f,c){var h="width"===k?1:0,l=0,j=0;
if(d===(b?"border":"content")){return 0
}for(;
h<4;
h+=2){"margin"===d&&(j+=bF.css(g,d+a4[h],!0,f)),b?("content"===d&&(j-=bF.css(g,"padding"+a4[h],!0,f)),"margin"!==d&&(j-=bF.css(g,"border"+a4[h]+"Width",!0,f))):(j+=bF.css(g,"padding"+a4[h],!0,f),"padding"!==d?j+=bF.css(g,"border"+a4[h]+"Width",!0,f):l+=bF.css(g,"border"+a4[h]+"Width",!0,f))
}return !b&&0<=c&&(j+=Math.max(0,Math.ceil(g["offset"+k[0].toUpperCase()+k.slice(1)]-c-j-l-0.5))||0),j
}function aI(h,d,k){var g=aj(h),c=(!bm.boxSizingReliable()||k)&&"border-box"===bF.css(h,"boxSizing",!1,g),j=c,b=ag(h,d,g),f="offset"+d[0].toUpperCase()+d.slice(1);
if(cr.test(b)){if(!k){return b
}b="auto"
}return(!bm.boxSizingReliable()&&c||"auto"===b||!parseFloat(b)&&"inline"===bF.css(h,"display",!1,g))&&h.getClientRects().length&&(c="border-box"===bF.css(h,"boxSizing",!1,g),(j=f in h)&&(b=h[f])),(b=parseFloat(b)||0)+a5(h,d,k||(c?"border":"content"),j,g,b)+"px"
}function cb(d,b,f,c,a){return new cb.prototype.init(d,b,f,c,a)
}bF.extend({cssHooks:{opacity:{get:function(b,a){if(a){var c=ag(b,"opacity");
return""===c?"1":c
}}}},cssNumber:{animationIterationCount:!0,columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,gridArea:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnStart:!0,gridRow:!0,gridRowEnd:!0,gridRowStart:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{},style:function(h,m,d,b){if(h&&3!==h.nodeType&&8!==h.nodeType&&h.style){var g,c,j,p=b0(m),k=av.test(m),f=h.style;
if(k||(m=cP(p)),j=bF.cssHooks[m]||bF.cssHooks[p],void 0===d){return j&&"get" in j&&void 0!==(g=j.get(h,!1,b))?g:f[m]
}"string"===(c=typeof d)&&(g=cx.exec(d))&&g[1]&&(d=cQ(h,m,g),c="number"),null!=d&&d==d&&("number"!==c||k||(d+=g&&g[3]||(bF.cssNumber[p]?"":"px")),bm.clearCloneStyle||""!==d||0!==m.indexOf("background")||(f[m]="inherit"),j&&"set" in j&&void 0===(d=j.set(h,d,b))||(k?f.setProperty(m,d):f[m]=d))
}},css:function(h,d,k,g){var c,j,b,f=b0(d);
return av.test(d)||(d=cP(f)),(b=bF.cssHooks[d]||bF.cssHooks[f])&&"get" in b&&(c=b.get(h,!0,k)),void 0===c&&(c=ag(h,d,g)),"normal"===c&&d in bj&&(c=bj[d]),""===k||k?(j=parseFloat(c),!0===k||isFinite(j)?j||0:c):c
}}),bF.each(["height","width"],function(b,a){bF.cssHooks[a]={get:function(d,c,f){if(c){return !a6.test(bF.css(d,"display"))||d.getClientRects().length&&d.getBoundingClientRect().width?aI(d,a,f):aE(d,bS,function(){return aI(d,a,f)
})
}},set:function(j,f,l){var h,d=aj(j),k=!bm.scrollboxSize()&&"absolute"===d.position,c=(k||l)&&"border-box"===bF.css(j,"boxSizing",!1,d),g=l?a5(j,a,l,c,d):0;
return c&&k&&(g-=Math.ceil(j["offset"+a[0].toUpperCase()+a.slice(1)]-parseFloat(d[a])-a5(j,a,"border",!1,d)-0.5)),g&&(h=cx.exec(f))&&"px"!==(h[3]||"px")&&(j.style[a]=f,f=bF.css(j,a)),aX(0,f,g)
}}
}),bF.cssHooks.marginLeft=cA(bm.reliableMarginLeft,function(b,a){if(a){return(parseFloat(ag(b,"marginLeft"))||b.getBoundingClientRect().left-aE(b,{marginLeft:0},function(){return b.getBoundingClientRect().left
}))+"px"
}}),bF.each({margin:"",padding:"",border:"Width"},function(a,b){bF.cssHooks[a+b]={expand:function(f){for(var c=0,g={},d="string"==typeof f?f.split(" "):[f];
c<4;
c++){g[a+a4[c]+b]=d[c]||d[c-2]||d[0]
}return g
}},"margin"!==a&&(bF.cssHooks[a+b].set=aX)
}),bF.fn.extend({css:function(b,a){return bT(this,function(h,f,k){var g,d,j={},c=0;
if(Array.isArray(f)){for(g=aj(h),d=f.length;
c<d;
c++){j[f[c]]=bF.css(h,f[c],!1,g)
}return j
}return void 0!==k?bF.style(h,f,k):bF.css(h,f)
},b,a,1<arguments.length)
}}),((bF.Tween=cb).prototype={constructor:cb,init:function(d,b,g,c,a,f){this.elem=d,this.prop=g,this.easing=a||bF.easing._default,this.options=b,this.start=this.now=this.cur(),this.end=c,this.unit=f||(bF.cssNumber[g]?"":"px")
},cur:function(){var a=cb.propHooks[this.prop];
return a&&a.get?a.get(this):cb.propHooks._default.get(this)
},run:function(b){var a,c=cb.propHooks[this.prop];
return this.options.duration?this.pos=a=bF.easing[this.easing](b,this.options.duration*b,0,1,this.options.duration):this.pos=a=b,this.now=(this.end-this.start)*a+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),c&&c.set?c.set(this):cb.propHooks._default.set(this),this
}}).init.prototype=cb.prototype,(cb.propHooks={_default:{get:function(b){var a;
return 1!==b.elem.nodeType||null!=b.elem[b.prop]&&null==b.elem.style[b.prop]?b.elem[b.prop]:(a=bF.css(b.elem,b.prop,""))&&"auto"!==a?a:0
},set:function(a){bF.fx.step[a.prop]?bF.fx.step[a.prop](a):1!==a.elem.nodeType||!bF.cssHooks[a.prop]&&null==a.elem.style[cP(a.prop)]?a.elem[a.prop]=a.now:bF.style(a.elem,a.prop,a.now+a.unit)
}}}).scrollTop=cb.propHooks.scrollLeft={set:function(a){a.elem.nodeType&&a.elem.parentNode&&(a.elem[a.prop]=a.now)
}},bF.easing={linear:function(a){return a
},swing:function(a){return 0.5-Math.cos(a*Math.PI)/2
},_default:"swing"},bF.fx=cb.prototype.init,bF.fx.step={};
var aZ,ay,bC,cy,aQ=/^(?:toggle|show|hide)$/,aA=/queueHooks$/;
function cM(){ay&&(!1===co.hidden&&cs.requestAnimationFrame?cs.requestAnimationFrame(cM):cs.setTimeout(cM,bF.fx.interval),bF.fx.tick())
}function bn(){return cs.setTimeout(function(){aZ=void 0
}),aZ=Date.now()
}function aW(d,b){var f,c=0,a={height:d};
for(b=b?1:0;
c<4;
c+=2-b){a["margin"+(f=a4[c])]=a["padding"+f]=d
}return b&&(a.opacity=a.width=d),a
}function bg(g,d,j){for(var f,c=(bd.tweeners[d]||[]).concat(bd.tweeners["*"]),h=0,b=c.length;
h<b;
h++){if(f=c[h].call(j,d,g)){return f
}}}function bd(d,j,q){var f,m,b=0,h=bd.prefilters.length,v=bF.Deferred().always(function(){delete p.elem
}),p=function(){if(m){return !1
}for(var o=aZ||bn(),c=Math.max(0,g.startTime+g.duration-o),s=1-(c/g.duration||0),l=0,a=g.tweens.length;
l<a;
l++){g.tweens[l].run(s)
}return v.notifyWith(d,[g,s,c]),s<1&&a?c:(a||v.notifyWith(d,[g,1,0]),v.resolveWith(d,[g]),!1)
},g=v.promise({elem:d,props:bF.extend({},j),opts:bF.extend(!0,{specialEasing:{},easing:bF.easing._default},q),originalProperties:j,originalOptions:q,startTime:aZ||bn(),duration:q.duration,tweens:[],createTween:function(c,a){var i=bF.Tween(d,g.opts,c,a,g.opts.specialEasing[c]||g.opts.easing);
return g.tweens.push(i),i
},stop:function(c){var a=0,i=c?g.tweens.length:0;
if(m){return this
}for(m=!0;
a<i;
a++){g.tweens[a].run(1)
}return c?(v.notifyWith(d,[g,1,0]),v.resolveWith(d,[g,c])):v.rejectWith(d,[g,c]),this
}}),k=g.props;
for(!function(w,s){var y,u,l,x,c;
for(y in w){if(l=s[u=b0(y)],x=w[y],Array.isArray(x)&&(l=x[1],x=w[y]=x[0]),y!==u&&(w[u]=x,delete w[y]),(c=bF.cssHooks[u])&&"expand" in c){for(y in x=c.expand(x),delete w[u],x){y in w||(w[y]=x[y],s[y]=l)
}}else{s[u]=l
}}}(k,g.opts.specialEasing);
b<h;
b++){if(f=bd.prefilters[b].call(g,d,k,g.opts)){return bD(f.stop)&&(bF._queueHooks(g.elem,g.opts.queue).stop=f.stop.bind(f)),f
}}return bF.map(k,bg,g),bD(g.opts.start)&&g.opts.start.call(d,g),g.progress(g.opts.progress).done(g.opts.done,g.opts.complete).fail(g.opts.fail).always(g.opts.always),bF.fx.timer(bF.extend(p,{elem:d,anim:g,queue:g.opts.queue})),g
}bF.Animation=bF.extend(bd,{tweeners:{"*":[function(b,a){var c=this.createTween(b,a);
return cQ(c.elem,b,cx.exec(a),c),c
}]},tweener:function(d,b){bD(d)?(b=d,d=["*"]):d=d.match(b6);
for(var f,c=0,a=d.length;
c<a;
c++){f=d[c],bd.tweeners[f]=bd.tweeners[f]||[],bd.tweeners[f].unshift(b)
}},prefilters:[function(A,G,m){var b,w,k,D,H,F,q,C,z="width" in G||"height" in G,j=this,B={},x=A.style,y=A.nodeType&&aU(A),E=b8.get(A,"fxshow");
for(b in m.queue||(null==(D=bF._queueHooks(A,"fx")).unqueued&&(D.unqueued=0,H=D.empty.fire,D.empty.fire=function(){D.unqueued||H()
}),D.unqueued++,j.always(function(){j.always(function(){D.unqueued--,bF.queue(A,"fx").length||D.empty.fire()
})
})),G){if(w=G[b],aQ.test(w)){if(delete G[b],k=k||"toggle"===w,w===(y?"hide":"show")){if("show"!==w||!E||void 0===E[b]){continue
}y=!0
}B[b]=E&&E[b]||bF.style(A,b)
}}if((F=!bF.isEmptyObject(G))||!bF.isEmptyObject(B)){for(b in z&&1===A.nodeType&&(m.overflow=[x.overflow,x.overflowX,x.overflowY],null==(q=E&&E.display)&&(q=b8.get(A,"display")),"none"===(C=bF.css(A,"display"))&&(q?C=q:(a1([A],!0),q=A.style.display||q,C=bF.css(A,"display"),a1([A]))),("inline"===C||"inline-block"===C&&null!=q)&&"none"===bF.css(A,"float")&&(F||(j.done(function(){x.display=q
}),null==q&&(C=x.display,q="none"===C?"":C)),x.display="inline-block")),m.overflow&&(x.overflow="hidden",j.always(function(){x.overflow=m.overflow[0],x.overflowX=m.overflow[1],x.overflowY=m.overflow[2]
})),F=!1,B){F||(E?"hidden" in E&&(y=E.hidden):E=b8.access(A,"fxshow",{display:q}),k&&(E.hidden=!y),y&&a1([A],!0),j.done(function(){for(b in y||a1([A]),b8.remove(A,"fxshow"),B){bF.style(A,b,B[b])
}})),F=bg(y?E[b]:0,b,j),b in E||(E[b]=F.start,y&&(F.end=F.start,F.start=0))
}}}],prefilter:function(b,a){a?bd.prefilters.unshift(b):bd.prefilters.push(b)
}}),bF.speed=function(c,a,d){var b=c&&"object"==typeof c?bF.extend({},c):{complete:d||!d&&a||bD(c)&&c,duration:c,easing:d&&a||a&&!bD(a)&&a};
return bF.fx.off?b.duration=0:"number"!=typeof b.duration&&(b.duration in bF.fx.speeds?b.duration=bF.fx.speeds[b.duration]:b.duration=bF.fx.speeds._default),null!=b.queue&&!0!==b.queue||(b.queue="fx"),b.old=b.complete,b.complete=function(){bD(b.old)&&b.old.call(this),b.queue&&bF.dequeue(this,b.queue)
},b
},bF.fn.extend({fadeTo:function(c,a,d,b){return this.filter(aU).css("opacity",0).show().end().animate({opacity:a},c,d,b)
},animate:function(d,g,j,f){var c=bF.isEmptyObject(d),h=bF.speed(g,j,f),b=function(){var a=bd(this,bF.extend({},d),h);
(c||b8.get(this,"finish"))&&a.stop(!0)
};
return b.finish=b,c||!1===h.queue?this.each(b):this.queue(h.queue,b)
},stop:function(c,d,f){var b=function(g){var a=g.stop;
delete g.stop,a(f)
};
return"string"!=typeof c&&(f=d,d=c,c=void 0),d&&!1!==c&&this.queue(c||"fx",[]),this.each(function(){var h=!0,a=null!=c&&c+"queueHooks",i=bF.timers,g=b8.get(this);
if(a){g[a]&&g[a].stop&&b(g[a])
}else{for(a in g){g[a]&&g[a].stop&&aA.test(a)&&b(g[a])
}}for(a=i.length;
a--;
){i[a].elem!==this||null!=c&&i[a].queue!==c||(i[a].anim.stop(f),h=!1,i.splice(a,1))
}!h&&f||bF.dequeue(this,c)
})
},finish:function(b){return !1!==b&&(b=b||"fx"),this.each(function(){var f,c=b8.get(this),h=c[b+"queue"],d=c[b+"queueHooks"],a=bF.timers,g=h?h.length:0;
for(c.finish=!0,bF.queue(this,b,[]),d&&d.stop&&d.stop.call(this,!0),f=a.length;
f--;
){a[f].elem===this&&a[f].queue===b&&(a[f].anim.stop(!0),a.splice(f,1))
}for(f=0;
f<g;
f++){h[f]&&h[f].finish&&h[f].finish.call(this)
}delete c.finish
})
}}),bF.each(["toggle","show","hide"],function(c,b){var a=bF.fn[b];
bF.fn[b]=function(f,d,g){return null==f||"boolean"==typeof f?a.apply(this,arguments):this.animate(aW(b,!0),f,d,g)
}
}),bF.each({slideDown:aW("show"),slideUp:aW("hide"),slideToggle:aW("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(b,a){bF.fn[b]=function(d,c,f){return this.animate(a,d,c,f)
}
}),bF.timers=[],bF.fx.tick=function(){var b,a=0,c=bF.timers;
for(aZ=Date.now();
a<c.length;
a++){(b=c[a])()||c[a]!==b||c.splice(a--,1)
}c.length||bF.fx.stop(),aZ=void 0
},bF.fx.timer=function(a){bF.timers.push(a),bF.fx.start()
},bF.fx.interval=13,bF.fx.start=function(){ay||(ay=!0,cM())
},bF.fx.stop=function(){ay=null
},bF.fx.speeds={slow:600,fast:200,_default:400},bF.fn.delay=function(a,b){return a=bF.fx&&bF.fx.speeds[a]||a,b=b||"fx",this.queue(b,function(d,c){var f=cs.setTimeout(d,a);
c.stop=function(){cs.clearTimeout(f)
}
})
},bC=co.createElement("input"),cy=co.createElement("select").appendChild(co.createElement("option")),bC.type="checkbox",bm.checkOn=""!==bC.value,bm.optSelected=cy.selected,(bC=co.createElement("input")).value="t",bC.type="radio",bm.radioValue="t"===bC.value;
var aG,aO=bF.expr.attrHandle;
bF.fn.extend({attr:function(b,a){return bT(this,bF.attr,b,a,1<arguments.length)
},removeAttr:function(a){return this.each(function(){bF.removeAttr(this,a)
})
}}),bF.extend({attr:function(d,b,g){var c,a,f=d.nodeType;
if(3!==f&&8!==f&&2!==f){return"undefined"==typeof d.getAttribute?bF.prop(d,b,g):(1===f&&bF.isXMLDoc(d)||(a=bF.attrHooks[b.toLowerCase()]||(bF.expr.match.bool.test(b)?aG:void 0)),void 0!==g?null===g?void bF.removeAttr(d,b):a&&"set" in a&&void 0!==(c=a.set(d,g,b))?c:(d.setAttribute(b,g+""),g):a&&"get" in a&&null!==(c=a.get(d,b))?c:null==(c=bF.find.attr(d,b))?void 0:c)
}},attrHooks:{type:{set:function(b,a){if(!bm.radioValue&&"radio"===a&&cw(b,"input")){var c=b.value;
return b.setAttribute("type",a),c&&(b.value=c),a
}}}},removeAttr:function(d,b){var f,c=0,a=b&&b.match(b6);
if(a&&1===d.nodeType){while(f=a[c++]){d.removeAttribute(f)
}}}}),aG={set:function(b,a,c){return !1===a?bF.removeAttr(b,c):b.setAttribute(c,c),c
}},bF.each(bF.expr.match.bool.source.match(/\w+/g),function(d,c){var b=aO[c]||bF.find.attr;
aO[c]=function(h,f,k){var g,a,j=f.toLowerCase();
return k||(a=aO[j],aO[j]=g,g=null!=b(h,f,k)?j:null,aO[j]=a),g
}
});
var aq=/^(?:input|select|textarea|button)$/i,cF=/^(?:a|area)$/i;
function cC(a){return(a.match(b6)||[]).join(" ")
}function cO(a){return a.getAttribute&&a.getAttribute("class")||""
}function bW(a){return Array.isArray(a)?a:"string"==typeof a&&a.match(b6)||[]
}bF.fn.extend({prop:function(b,a){return bT(this,bF.prop,b,a,1<arguments.length)
},removeProp:function(a){return this.each(function(){delete this[bF.propFix[a]||a]
})
}}),bF.extend({prop:function(d,b,g){var c,a,f=d.nodeType;
if(3!==f&&8!==f&&2!==f){return 1===f&&bF.isXMLDoc(d)||(b=bF.propFix[b]||b,a=bF.propHooks[b]),void 0!==g?a&&"set" in a&&void 0!==(c=a.set(d,g,b))?c:d[b]=g:a&&"get" in a&&null!==(c=a.get(d,b))?c:d[b]
}},propHooks:{tabIndex:{get:function(b){var a=bF.find.attr(b,"tabindex");
return a?parseInt(a,10):aq.test(b.nodeName)||cF.test(b.nodeName)&&b.href?0:-1
}}},propFix:{"for":"htmlFor","class":"className"}}),bm.optSelected||(bF.propHooks.selected={get:function(b){var a=b.parentNode;
return a&&a.parentNode&&a.parentNode.selectedIndex,null
},set:function(b){var a=b.parentNode;
a&&(a.selectedIndex,a.parentNode&&a.parentNode.selectedIndex)
}}),bF.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){bF.propFix[this.toLowerCase()]=this
}),bF.fn.extend({addClass:function(k){var g,d,b,f,c,h,l,j=0;
if(bD(k)){return this.each(function(a){bF(this).addClass(k.call(this,a,cO(this)))
})
}if((g=bW(k)).length){while(d=this[j++]){if(f=cO(d),b=1===d.nodeType&&" "+cC(f)+" "){h=0;
while(c=g[h++]){b.indexOf(" "+c+" ")<0&&(b+=c+" ")
}f!==(l=cC(b))&&d.setAttribute("class",l)
}}}return this
},removeClass:function(k){var g,d,b,f,c,h,l,j=0;
if(bD(k)){return this.each(function(a){bF(this).removeClass(k.call(this,a,cO(this)))
})
}if(!arguments.length){return this.attr("class","")
}if((g=bW(k)).length){while(d=this[j++]){if(f=cO(d),b=1===d.nodeType&&" "+cC(f)+" "){h=0;
while(c=g[h++]){while(-1<b.indexOf(" "+c+" ")){b=b.replace(" "+c+" "," ")
}}f!==(l=cC(b))&&d.setAttribute("class",l)
}}}return this
},toggleClass:function(d,c){var e=typeof d,b="string"===e||Array.isArray(d);
return"boolean"==typeof c&&b?c?this.addClass(d):this.removeClass(d):bD(d)?this.each(function(a){bF(this).toggleClass(d.call(this,a,cO(this),c),c)
}):this.each(function(){var g,a,h,f;
if(b){a=0,h=bF(this),f=bW(d);
while(g=f[a++]){h.hasClass(g)?h.removeClass(g):h.addClass(g)
}}else{void 0!==d&&"boolean"!==e||((g=cO(this))&&b8.set(this,"__className__",g),this.setAttribute&&this.setAttribute("class",g||!1===d?"":b8.get(this,"__className__")||""))
}})
},hasClass:function(c){var a,d,b=0;
a=" "+c+" ";
while(d=this[b++]){if(1===d.nodeType&&-1<(" "+cC(cO(d))+" ").indexOf(a)){return !0
}}return !1
}});
var ai=/\r/g;
bF.fn.extend({val:function(f){var c,d,b,a=this[0];
return arguments.length?(b=bD(f),this.each(function(h){var g;
1===this.nodeType&&(null==(g=b?f.call(this,h,bF(this).val()):f)?g="":"number"==typeof g?g+="":Array.isArray(g)&&(g=bF.map(g,function(i){return null==i?"":i+""
})),(c=bF.valHooks[this.type]||bF.valHooks[this.nodeName.toLowerCase()])&&"set" in c&&void 0!==c.set(this,g,"value")||(this.value=g))
})):a?(c=bF.valHooks[a.type]||bF.valHooks[a.nodeName.toLowerCase()])&&"get" in c&&void 0!==(d=c.get(a,"value"))?d:"string"==typeof(d=a.value)?d.replace(ai,""):null==d?"":d:void 0
}}),bF.extend({valHooks:{option:{get:function(b){var a=bF.find.attr(b,"value");
return null!=a?a:cC(bF.text(b))
}},select:{get:function(g){var k,d,b,f=g.options,c=g.selectedIndex,h="select-one"===g.type,l=h?null:[],j=h?c+1:f.length;
for(b=c<0?j:h?c:0;
b<j;
b++){if(((d=f[b]).selected||b===c)&&!d.disabled&&(!d.parentNode.disabled||!cw(d.parentNode,"optgroup"))){if(k=bF(d).val(),h){return k
}l.push(k)
}}return l
},set:function(g,d){var j,f,c=g.options,h=bF.makeArray(d),b=c.length;
while(b--){((f=c[b]).selected=-1<bF.inArray(bF.valHooks.option.get(f),h))&&(j=!0)
}return j||(g.selectedIndex=-1),h
}}}}),bF.each(["radio","checkbox"],function(){bF.valHooks[this]={set:function(b,a){if(Array.isArray(a)){return b.checked=-1<bF.inArray(bF(b).val(),a)
}}},bm.checkOn||(bF.valHooks[this].get=function(a){return null===a.getAttribute("value")?"on":a.value
})
}),bm.focusin="onfocusin" in cs;
var cE=/^(?:focusinfocus|focusoutblur)$/,aF=function(a){a.stopPropagation()
};
bF.extend(bF.event,{trigger:function(x,C,k,b){var q,j,A,D,B,m,z,w,g=[k||co],y=bq.call(x,"type")?x.type:x,v=bq.call(x,"namespace")?x.namespace.split("."):[];
if(j=w=A=k=k||co,3!==k.nodeType&&8!==k.nodeType&&!cE.test(y+bF.event.triggered)&&(-1<y.indexOf(".")&&(y=(v=y.split(".")).shift(),v.sort()),B=y.indexOf(":")<0&&"on"+y,(x=x[bF.expando]?x:new bF.Event(y,"object"==typeof x&&x)).isTrigger=b?2:3,x.namespace=v.join("."),x.rnamespace=x.namespace?new RegExp("(^|\\.)"+v.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,x.result=void 0,x.target||(x.target=k),C=null==C?[x]:bF.makeArray(C,[x]),z=bF.event.special[y]||{},b||!z.trigger||!1!==z.trigger.apply(k,C))){if(!b&&!z.noBubble&&!bo(k)){for(D=z.delegateType||y,cE.test(D+y)||(j=j.parentNode);
j;
j=j.parentNode){g.push(j),A=j
}A===(k.ownerDocument||co)&&g.push(A.defaultView||A.parentWindow||cs)
}q=0;
while((j=g[q++])&&!x.isPropagationStopped()){w=j,x.type=1<q?D:z.bindType||y,(m=(b8.get(j,"events")||{})[x.type]&&b8.get(j,"handle"))&&m.apply(j,C),(m=B&&j[B])&&m.apply&&cl(j)&&(x.result=m.apply(j,C),!1===x.result&&x.preventDefault())
}return x.type=y,b||x.isDefaultPrevented()||z._default&&!1!==z._default.apply(g.pop(),C)||!cl(k)||B&&bD(k[y])&&!bo(k)&&((A=k[B])&&(k[B]=null),bF.event.triggered=y,x.isPropagationStopped()&&w.addEventListener(y,aF),k[y](),x.isPropagationStopped()&&w.removeEventListener(y,aF),bF.event.triggered=void 0,A&&(k[B]=A)),x.result
}},simulate:function(c,a,d){var b=bF.extend(new bF.Event,d,{type:c,isSimulated:!0});
bF.event.trigger(b,null,a)
}}),bF.fn.extend({trigger:function(b,a){return this.each(function(){bF.event.trigger(b,a,this)
})
},triggerHandler:function(b,a){var c=this[0];
if(c){return bF.event.trigger(b,a,c,!0)
}}}),bm.focusin||bF.each({focus:"focusin",blur:"focusout"},function(c,b){var a=function(d){bF.event.simulate(b,d.target,bF.event.fix(d))
};
bF.event.special[b]={setup:function(){var f=this.ownerDocument||this,d=b8.access(f,b);
d||f.addEventListener(c,a,!0),b8.access(f,b,(d||0)+1)
},teardown:function(){var f=this.ownerDocument||this,d=b8.access(f,b)-1;
d?b8.access(f,b,d):(f.removeEventListener(c,a,!0),b8.remove(f,b))
}}
});
var an=cs.location,af=Date.now(),cN=/\?/;
bF.parseXML=function(b){var a;
if(!b||"string"!=typeof b){return null
}try{a=(new cs.DOMParser).parseFromString(b,"text/xml")
}catch(b){a=void 0
}return a&&!a.getElementsByTagName("parsererror").length||bF.error("Invalid XML: "+b),a
};
var aP=/\[\]$/,aV=/\r?\n/g,ax=/^(?:submit|button|image|reset|file)$/i,ao=/^(?:input|select|textarea|keygen)/i;
function a8(f,d,c,b){var a;
if(Array.isArray(d)){bF.each(d,function(h,g){c||aP.test(f)?b(f,g):a8(f+"["+("object"==typeof g&&null!=g?h:"")+"]",g,c,b)
})
}else{if(c||"object"!==bp(d)){b(f,d)
}else{for(a in d){a8(f+"["+a+"]",d[a],c,b)
}}}}bF.param=function(d,b){var f,c=[],a=function(h,g){var i=bD(g)?g():g;
c[c.length]=encodeURIComponent(h)+"="+encodeURIComponent(null==i?"":i)
};
if(null==d){return""
}if(Array.isArray(d)||d.jquery&&!bF.isPlainObject(d)){bF.each(d,function(){a(this.name,this.value)
})
}else{for(f in d){a8(f,d[f],b,a)
}}return c.join("&")
},bF.fn.extend({serialize:function(){return bF.param(this.serializeArray())
},serializeArray:function(){return this.map(function(){var a=bF.prop(this,"elements");
return a?bF.makeArray(a):this
}).filter(function(){var a=this.type;
return this.name&&!bF(this).is(":disabled")&&ao.test(this.nodeName)&&!ax.test(a)&&(this.checked||!bk.test(a))
}).map(function(b,a){var c=bF(this).val();
return null==c?null:Array.isArray(c)?bF.map(c,function(d){return{name:a.name,value:d.replace(aV,"\r\n")}
}):{name:a.name,value:c.replace(aV,"\r\n")}
}).get()
}});
var a7=/%20/g,cB=/#.*$/,aH=/([?&])_=[^&]*/,az=/^(.*?):[ \t]*([^\r\n]*)$/gm,ah=/^(?:GET|HEAD)$/,aY=/^\/\//,b7={},bi={},b4="*/".concat("*"),ad=co.createElement("a");
function aN(a){return function(f,c){"string"!=typeof f&&(c=f,f="*");
var g,d=0,b=f.toLowerCase().match(b6)||[];
if(bD(c)){while(g=b[d++]){"+"===g[0]?(g=g.slice(1)||"*",(a[g]=a[g]||[]).unshift(c)):(a[g]=a[g]||[]).push(c)
}}}
}function aa(f,e,h,c){var g={},d=f===bi;
function b(i){var a;
return g[i]=!0,bF.each(f[i]||[],function(k,j){var l=j(e,h,c);
return"string"!=typeof l||d||g[l]?d?!(a=l):void 0:(e.dataTypes.unshift(l),b(l),!1)
}),a
}return b(e.dataTypes[0])||!g["*"]&&b("*")
}function cp(d,b){var f,c,a=bF.ajaxSettings.flatOptions||{};
for(f in b){void 0!==b[f]&&((a[f]?d:c||(c={}))[f]=b[f])
}return c&&bF.extend(!0,d,c),d
}ad.href=an.href,bF.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:an.href,type:"GET",isLocal:/^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(an.protocol),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":b4,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":JSON.parse,"text xml":bF.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(b,a){return a?cp(cp(b,bF.ajaxSettings),a):cp(bF.ajaxSettings,b)
},ajaxPrefilter:aN(b7),ajaxTransport:aN(bi),ajax:function(O,C){"object"==typeof O&&(C=O,O=void 0),C=C||{};
var Q,N,F,H,P,E,L,M,K,G,A=bF.ajaxSetup({},C),k=A.context||A,I=A.context&&(k.nodeType||k.jquery)?bF(k):bF.event,q=bF.Deferred(),R=bF.Callbacks("once memory"),z=A.statusCode||{},S={},D={},B="canceled",j={readyState:0,getResponseHeader:function(b){var a;
if(L){if(!H){H={};
while(a=az.exec(F)){H[a[1].toLowerCase()+" "]=(H[a[1].toLowerCase()+" "]||[]).concat(a[2])
}}a=H[b.toLowerCase()+" "]
}return null==a?null:a.join(", ")
},getAllResponseHeaders:function(){return L?F:null
},setRequestHeader:function(b,a){return null==L&&(b=D[b.toLowerCase()]=D[b.toLowerCase()]||b,S[b]=a),this
},overrideMimeType:function(a){return null==L&&(A.mimeType=a),this
},statusCode:function(b){var a;
if(b){if(L){j.always(b[j.status])
}else{for(a in b){z[a]=[z[a],b[a]]
}}}return this
},abort:function(b){var a=b||B;
return Q&&Q.abort(a),J(0,a),this
}};
if(q.promise(j),A.url=((O||A.url||an.href)+"").replace(aY,an.protocol+"//"),A.type=C.method||C.type||A.method||A.type,A.dataTypes=(A.dataType||"*").toLowerCase().match(b6)||[""],null==A.crossDomain){E=co.createElement("a");
try{E.href=A.url,E.href=E.href,A.crossDomain=ad.protocol+"//"+ad.host!=E.protocol+"//"+E.host
}catch(O){A.crossDomain=!0
}}if(A.data&&A.processData&&"string"!=typeof A.data&&(A.data=bF.param(A.data,A.traditional)),aa(b7,A,C,j),L){return j
}for(K in (M=bF.event&&A.global)&&0==bF.active++&&bF.event.trigger("ajaxStart"),A.type=A.type.toUpperCase(),A.hasContent=!ah.test(A.type),N=A.url.replace(cB,""),A.hasContent?A.data&&A.processData&&0===(A.contentType||"").indexOf("application/x-www-form-urlencoded")&&(A.data=A.data.replace(a7,"+")):(G=A.url.slice(N.length),A.data&&(A.processData||"string"==typeof A.data)&&(N+=(cN.test(N)?"&":"?")+A.data,delete A.data),!1===A.cache&&(N=N.replace(aH,"$1"),G=(cN.test(N)?"&":"?")+"_="+af+++G),A.url=N+G),A.ifModified&&(bF.lastModified[N]&&j.setRequestHeader("If-Modified-Since",bF.lastModified[N]),bF.etag[N]&&j.setRequestHeader("If-None-Match",bF.etag[N])),(A.data&&A.hasContent&&!1!==A.contentType||C.contentType)&&j.setRequestHeader("Content-Type",A.contentType),j.setRequestHeader("Accept",A.dataTypes[0]&&A.accepts[A.dataTypes[0]]?A.accepts[A.dataTypes[0]]+("*"!==A.dataTypes[0]?", "+b4+"; q=0.01":""):A.accepts["*"]),A.headers){j.setRequestHeader(K,A.headers[K])
}if(A.beforeSend&&(!1===A.beforeSend.call(k,j,A)||L)){return j.abort()
}if(B="abort",R.add(A.complete),j.done(A.success),j.fail(A.error),Q=aa(bi,A,C,j)){if(j.readyState=1,M&&I.trigger("ajaxSend",[j,A]),L){return j
}A.async&&0<A.timeout&&(P=cs.setTimeout(function(){j.abort("timeout")
},A.timeout));
try{L=!1,Q.send(S,J)
}catch(O){if(L){throw O
}J(-1,O)
}}else{J(-1,"No Transport")
}function J(h,v,d,b){var g,c,m,w,p,f=v;
L||(L=!0,P&&cs.clearTimeout(P),Q=void 0,F=b||"",j.readyState=0<h?4:0,g=200<=h&&h<300||304===h,d&&(w=function(U,X,y){var l,T,x,V,Y=U.contents,W=U.dataTypes;
while("*"===W[0]){W.shift(),void 0===l&&(l=U.mimeType||X.getResponseHeader("Content-Type"))
}if(l){for(T in Y){if(Y[T]&&Y[T].test(l)){W.unshift(T);
break
}}}if(W[0] in y){x=W[0]
}else{for(T in y){if(!W[0]||U.converters[T+" "+W[0]]){x=T;
break
}V||(V=T)
}x=x||V
}if(x){return x!==W[0]&&W.unshift(x),y[x]
}}(A,j,d)),w=function(W,ae,T,x){var V,y,Y,at,Z,U={},X=W.dataTypes.slice();
if(X[1]){for(Y in W.converters){U[Y.toLowerCase()]=W.converters[Y]
}}y=X.shift();
while(y){if(W.responseFields[y]&&(T[W.responseFields[y]]=ae),!Z&&x&&W.dataFilter&&(ae=W.dataFilter(ae,W.dataType)),Z=y,y=X.shift()){if("*"===y){y=Z
}else{if("*"!==Z&&Z!==y){if(!(Y=U[Z+" "+y]||U["* "+y])){for(V in U){if((at=V.split(" "))[1]===y&&(Y=U[Z+" "+at[0]]||U["* "+at[0]])){!0===Y?Y=U[V]:!0!==U[V]&&(y=at[0],X.unshift(at[1]));
break
}}}if(!0!==Y){if(Y&&W["throws"]){ae=Y(ae)
}else{try{ae=Y(ae)
}catch(W){return{state:"parsererror",error:Y?W:"No conversion from "+Z+" to "+y}
}}}}}}}return{state:"success",data:ae}
}(A,w,j,g),g?(A.ifModified&&((p=j.getResponseHeader("Last-Modified"))&&(bF.lastModified[N]=p),(p=j.getResponseHeader("etag"))&&(bF.etag[N]=p)),204===h||"HEAD"===A.type?f="nocontent":304===h?f="notmodified":(f=w.state,c=w.data,g=!(m=w.error))):(m=f,!h&&f||(f="error",h<0&&(h=0))),j.status=h,j.statusText=(v||f)+"",g?q.resolveWith(k,[c,f,j]):q.rejectWith(k,[j,f,m]),j.statusCode(z),z=void 0,M&&I.trigger(g?"ajaxSuccess":"ajaxError",[j,A,g?c:m]),R.fireWith(k,[j,f]),M&&(I.trigger("ajaxComplete",[j,A]),--bF.active||bF.event.trigger("ajaxStop")))
}return j
},getJSON:function(b,a,c){return bF.get(b,a,c,"json")
},getScript:function(b,a){return bF.get(b,void 0,a,"script")
}}),bF.each(["get","post"],function(b,a){bF[a]=function(f,c,g,d){return bD(c)&&(d=d||g,g=c,c=void 0),bF.ajax(bF.extend({url:f,type:a,dataType:d,data:c,success:g},bF.isPlainObject(f)&&f))
}
}),bF._evalUrl=function(b,a){return bF.ajax({url:b,type:"GET",dataType:"script",cache:!0,async:!1,global:!1,converters:{"text script":function(){}},dataFilter:function(c){bF.globalEval(c,a)
}})
},bF.fn.extend({wrapAll:function(b){var a;
return this[0]&&(bD(b)&&(b=b.call(this[0])),a=bF(b,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&a.insertBefore(this[0]),a.map(function(){var c=this;
while(c.firstElementChild){c=c.firstElementChild
}return c
}).append(this)),this
},wrapInner:function(a){return bD(a)?this.each(function(b){bF(this).wrapInner(a.call(this,b))
}):this.each(function(){var c=bF(this),b=c.contents();
b.length?b.wrapAll(a):c.append(a)
})
},wrap:function(a){var b=bD(a);
return this.each(function(c){bF(this).wrapAll(b?a.call(this,c):a)
})
},unwrap:function(a){return this.parent(a).not("body").each(function(){bF(this).replaceWith(this.childNodes)
}),this
}}),bF.expr.pseudos.hidden=function(a){return !bF.expr.pseudos.visible(a)
},bF.expr.pseudos.visible=function(a){return !!(a.offsetWidth||a.offsetHeight||a.getClientRects().length)
},bF.ajaxSettings.xhr=function(){try{return new cs.XMLHttpRequest
}catch(a){}};
var cm={0:200,1223:204},ba=bF.ajaxSettings.xhr();
bm.cors=!!ba&&"withCredentials" in ba,bm.ajax=ba=!!ba,bF.ajaxTransport(function(c){var d,b;
if(bm.cors||ba&&!c.crossDomain){return{send:function(g,a){var h,f=c.xhr();
if(f.open(c.type,c.url,c.async,c.username,c.password),c.xhrFields){for(h in c.xhrFields){f[h]=c.xhrFields[h]
}}for(h in c.mimeType&&f.overrideMimeType&&f.overrideMimeType(c.mimeType),c.crossDomain||g["X-Requested-With"]||(g["X-Requested-With"]="XMLHttpRequest"),g){f.setRequestHeader(h,g[h])
}d=function(i){return function(){d&&(d=b=f.onload=f.onerror=f.onabort=f.ontimeout=f.onreadystatechange=null,"abort"===i?f.abort():"error"===i?"number"!=typeof f.status?a(0,"error"):a(f.status,f.statusText):a(cm[f.status]||f.status,f.statusText,"text"!==(f.responseType||"text")||"string"!=typeof f.responseText?{binary:f.response}:{text:f.responseText},f.getAllResponseHeaders()))
}
},f.onload=d(),b=f.onerror=f.ontimeout=d("error"),void 0!==f.onabort?f.onabort=b:f.onreadystatechange=function(){4===f.readyState&&cs.setTimeout(function(){d&&b()
})
},d=d("abort");
try{f.send(c.hasContent&&c.data||null)
}catch(g){if(d){throw g
}}},abort:function(){d&&d()
}}
}}),bF.ajaxPrefilter(function(a){a.crossDomain&&(a.contents.script=!1)
}),bF.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(a){return bF.globalEval(a),a
}}}),bF.ajaxPrefilter("script",function(a){void 0===a.cache&&(a.cache=!1),a.crossDomain&&(a.type="GET")
}),bF.ajaxTransport("script",function(c){var b,a;
if(c.crossDomain||c.scriptAttrs){return{send:function(f,d){b=bF("<script>").attr(c.scriptAttrs||{}).prop({charset:c.scriptCharset,src:c.url}).on("load error",a=function(g){b.remove(),a=null,g&&d("error"===g.type?404:200,g.type)
}),co.head.appendChild(b[0])
},abort:function(){a&&a()
}}
}});
var bM,cL=[],a2=/(=)\?(?=&|$)|\?\?/;
bF.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var a=cL.pop()||bF.expando+"_"+af++;
return this[a]=!0,a
}}),bF.ajaxPrefilter("json jsonp",function(g,d,j){var f,c,h,b=!1!==g.jsonp&&(a2.test(g.url)?"url":"string"==typeof g.data&&0===(g.contentType||"").indexOf("application/x-www-form-urlencoded")&&a2.test(g.data)&&"data");
if(b||"jsonp"===g.dataTypes[0]){return f=g.jsonpCallback=bD(g.jsonpCallback)?g.jsonpCallback():g.jsonpCallback,b?g[b]=g[b].replace(a2,"$1"+f):!1!==g.jsonp&&(g.url+=(cN.test(g.url)?"&":"?")+g.jsonp+"="+f),g.converters["script json"]=function(){return h||bF.error(f+" was not called"),h[0]
},g.dataTypes[0]="json",c=cs[f],cs[f]=function(){h=arguments
},j.always(function(){void 0===c?bF(cs).removeProp(f):cs[f]=c,g[f]&&(g.jsonpCallback=d.jsonpCallback,cL.push(f)),h&&bD(c)&&c(h[0]),h=c=void 0
}),"script"
}}),bm.createHTMLDocument=((bM=co.implementation.createHTMLDocument("").body).innerHTML="<form></form><form></form>",2===bM.childNodes.length),bF.parseHTML=function(d,b,g){return"string"!=typeof d?[]:("boolean"==typeof b&&(g=b,b=!1),b||(bm.createHTMLDocument?((c=(b=co.implementation.createHTMLDocument("")).createElement("base")).href=co.location.href,b.head.appendChild(c)):b=co),f=!g&&[],(a=cq.exec(d))?[b.createElement(a[1])]:(a=am([d],b,f),f&&f.length&&bF(f).remove(),bF.merge([],a.childNodes)));
var c,a,f
},bF.fn.load=function(h,d,k){var g,c,j,b=this,f=h.indexOf(" ");
return -1<f&&(g=cC(h.slice(f)),h=h.slice(0,f)),bD(d)?(k=d,d=void 0):d&&"object"==typeof d&&(c="POST"),0<b.length&&bF.ajax({url:h,type:c||"GET",dataType:"html",data:d}).done(function(a){j=arguments,b.html(g?bF("<div>").append(bF.parseHTML(a)).find(g):a)
}).always(k&&function(i,a){b.each(function(){k.apply(this,j||[i.responseText,a,i])
})
}),this
},bF.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(b,a){bF.fn[a]=function(c){return this.on(a,c)
}
}),bF.expr.pseudos.animated=function(a){return bF.grep(bF.timers,function(b){return a===b.elem
}).length
},bF.offset={setOffset:function(m,w,g){var b,j,d,q,x,v,h=bF.css(m,"position"),p=bF(m),k={};
"static"===h&&(m.style.position="relative"),x=p.offset(),d=bF.css(m,"top"),v=bF.css(m,"left"),("absolute"===h||"fixed"===h)&&-1<(d+v).indexOf("auto")?(q=(b=p.position()).top,j=b.left):(q=parseFloat(d)||0,j=parseFloat(v)||0),bD(w)&&(w=w.call(m,g,bF.extend({},x))),null!=w.top&&(k.top=w.top-x.top+q),null!=w.left&&(k.left=w.left-x.left+j),"using" in w?w.using.call(m,k):p.css(k)
}},bF.fn.extend({offset:function(a){if(arguments.length){return void 0===a?this:this.each(function(f){bF.offset.setOffset(this,a,f)
})
}var c,d,b=this[0];
return b?b.getClientRects().length?(c=b.getBoundingClientRect(),d=b.ownerDocument.defaultView,{top:c.top+d.pageYOffset,left:c.left+d.pageXOffset}):{top:0,left:0}:void 0
},position:function(){if(this[0]){var d,b,f,c=this[0],a={top:0,left:0};
if("fixed"===bF.css(c,"position")){b=c.getBoundingClientRect()
}else{b=this.offset(),f=c.ownerDocument,d=c.offsetParent||f.documentElement;
while(d&&(d===f.body||d===f.documentElement)&&"static"===bF.css(d,"position")){d=d.parentNode
}d&&d!==c&&1===d.nodeType&&((a=bF(d).offset()).top+=bF.css(d,"borderTopWidth",!0),a.left+=bF.css(d,"borderLeftWidth",!0))
}return{top:b.top-a.top-bF.css(c,"marginTop",!0),left:b.left-a.left-bF.css(c,"marginLeft",!0)}
}},offsetParent:function(){return this.map(function(){var a=this.offsetParent;
while(a&&"static"===bF.css(a,"position")){a=a.offsetParent
}return a||aC
})
}}),bF.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(b,a){var c="pageYOffset"===a;
bF.fn[b]=function(d){return bT(this,function(h,f,i){var g;
if(bo(h)?g=h:9===h.nodeType&&(g=h.defaultView),void 0===i){return g?g[a]:h[f]
}g?g.scrollTo(c?g.pageXOffset:i,c?i:g.pageYOffset):h[f]=i
},b,d,arguments.length)
}
}),bF.each(["top","left"],function(a,b){bF.cssHooks[b]=cA(bm.pixelPosition,function(d,c){if(c){return c=ag(d,b),cr.test(c)?bF(d).position()[b]+"px":c
}})
}),bF.each({Height:"height",Width:"width"},function(b,c){bF.each({padding:"inner"+b,content:c,"":"outer"+b},function(a,d){bF.fn[d]=function(h,g){var j=arguments.length&&(a||"boolean"!=typeof h),f=a||(!0===h||!0===g?"margin":"border");
return bT(this,function(l,i,m){var k;
return bo(l)?0===d.indexOf("outer")?l["inner"+b]:l.document.documentElement["client"+b]:9===l.nodeType?(k=l.documentElement,Math.max(l.body["scroll"+b],k["scroll"+b],l.body["offset"+b],k["offset"+b],k["client"+b])):void 0===m?bF.css(l,i,f):bF.style(l,i,m,f)
},c,j?h:void 0,j)
}
})
}),bF.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),function(a,b){bF.fn[b]=function(d,c){return 0<arguments.length?this.on(b,null,d,c):this.trigger(b)
}
}),bF.fn.extend({hover:function(b,a){return this.mouseenter(b).mouseleave(a||b)
}}),bF.fn.extend({bind:function(b,a,c){return this.on(b,null,a,c)
},unbind:function(b,a){return this.off(b,null,a)
},delegate:function(c,a,d,b){return this.on(a,c,d,b)
},undelegate:function(b,a,c){return 1===arguments.length?this.off(b,"**"):this.off(a,b||"**",c)
}}),bF.proxy=function(d,b){var f,c,a;
if("string"==typeof b&&(f=d[b],b=d,d=f),bD(d)){return c=bv.call(arguments,2),(a=function(){return d.apply(b||this,c.concat(bv.call(arguments)))
}).guid=d.guid=d.guid||bF.guid++,a
}},bF.holdReady=function(a){a?bF.readyWait++:bF.ready(!0)
},bF.isArray=Array.isArray,bF.parseJSON=JSON.parse,bF.nodeName=cw,bF.isFunction=bD,bF.isWindow=bo,bF.camelCase=b0,bF.type=bp,bF.now=Date.now,bF.isNumeric=function(b){var a=bF.type(b);
return("number"===a||"string"===a)&&!isNaN(b-parseFloat(b))
},"function"==typeof define&&define.amd&&define("jquery",[],function(){return bF
});
var ap=cs.jQuery,by=cs.$;
return bF.noConflict=function(a){return cs.$===bF&&(cs.$=by),a&&cs.jQuery===bF&&(cs.jQuery=ap),bF
},bN||(cs.jQuery=cs.$=bF),bF
});
/*!
 * Bootstrap v3.3.7 (http://getbootstrap.com)
 * Copyright 2011-2016 Twitter, Inc.
 * Licensed under the MIT license
 */
;
if("undefined"==typeof jQuery){throw new Error("Bootstrap's JavaScript requires jQuery")
}+function(d){var c=d.fn.jquery.split(" ")[0].split(".");
if(c[0]<2&&c[1]<9||1==c[0]&&9==c[1]&&c[2]<1||c[0]>3){throw new Error("Bootstrap's JavaScript requires jQuery version 1.9.1 or higher, but lower than version 4")
}}(jQuery),+function(d){function c(){var f=document.createElement("bootstrap"),e={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd otransitionend",transition:"transitionend"};
for(var g in e){if(void 0!==f.style[g]){return{end:e[g]}
}}return !1
}d.fn.emulateTransitionEnd=function(a){var h=!1,g=this;
d(this).one("bsTransitionEnd",function(){h=!0
});
var f=function(){h||d(g).trigger(d.support.transition.end)
};
return setTimeout(f,a),this
},d(function(){d.support.transition=c(),d.support.transition&&(d.event.special.bsTransitionEnd={bindType:d.support.transition.end,delegateType:d.support.transition.end,handle:function(a){if(d(a.target).is(this)){return a.handleObj.handler.apply(this,arguments)
}}})
})
}(jQuery),+function(g){function f(a){return this.each(function(){var d=g(this),b=d.data("bs.alert");
b||d.data("bs.alert",b=new i(this)),"string"==typeof a&&b[a].call(d)
})
}var j='[data-dismiss="alert"]',i=function(a){g(a).on("click",j,this.close)
};
i.VERSION="3.3.7",i.TRANSITION_DURATION=150,i.prototype.close=function(a){function m(){d.detach().trigger("closed.bs.alert").remove()
}var l=g(this),k=l.attr("data-target");
k||(k=l.attr("href"),k=k&&k.replace(/.*(?=#[^\s]*$)/,""));
var d=g("#"===k?[]:k);
a&&a.preventDefault(),d.length||(d=l.closest(".alert")),d.trigger(a=g.Event("close.bs.alert")),a.isDefaultPrevented()||(d.removeClass("in"),g.support.transition&&d.hasClass("fade")?d.one("bsTransitionEnd",m).emulateTransitionEnd(i.TRANSITION_DURATION):m())
};
var h=g.fn.alert;
g.fn.alert=f,g.fn.alert.Constructor=i,g.fn.alert.noConflict=function(){return g.fn.alert=h,this
},g(document).on("click.bs.alert.data-api",j,i.prototype.close)
}(jQuery),+function(f){function e(a){return this.each(function(){var i=f(this),c=i.data("bs.button"),b="object"==typeof a&&a;
c||i.data("bs.button",c=new h(this,b)),"toggle"==a?c.toggle():a&&c.setState(a)
})
}var h=function(a,c){this.$element=f(a),this.options=f.extend({},h.DEFAULTS,c),this.isLoading=!1
};
h.VERSION="3.3.7",h.DEFAULTS={loadingText:"loading..."},h.prototype.setState=function(a){var l="disabled",k=this.$element,j=k.is("input")?"val":"html",i=k.data();
a+="Text",null==i.resetText&&k.data("resetText",k[j]()),setTimeout(f.proxy(function(){k[j](null==i[a]?this.options[a]:i[a]),"loadingText"==a?(this.isLoading=!0,k.addClass(l).attr(l,l).prop(l,!0)):this.isLoading&&(this.isLoading=!1,k.removeClass(l).removeAttr(l).prop(l,!1))
},this),0)
},h.prototype.toggle=function(){var i=!0,d=this.$element.closest('[data-toggle="buttons"]');
if(d.length){var j=this.$element.find("input");
"radio"==j.prop("type")?(j.prop("checked")&&(i=!1),d.find(".active").removeClass("active"),this.$element.addClass("active")):"checkbox"==j.prop("type")&&(j.prop("checked")!==this.$element.hasClass("active")&&(i=!1),this.$element.toggleClass("active")),j.prop("checked",this.$element.hasClass("active")),i&&j.trigger("change")
}else{this.$element.attr("aria-pressed",!this.$element.hasClass("active")),this.$element.toggleClass("active")
}};
var g=f.fn.button;
f.fn.button=e,f.fn.button.Constructor=h,f.fn.button.noConflict=function(){return f.fn.button=g,this
},f(document).on("click.bs.button.data-api",'[data-toggle^="button"]',function(b){var a=f(b.target).closest(".btn");
e.call(a,"toggle"),f(b.target).is('input[type="radio"], input[type="checkbox"]')||(b.preventDefault(),a.is("input,button")?a.trigger("focus"):a.find("input:visible,button:visible").first().trigger("focus"))
}).on("focus.bs.button.data-api blur.bs.button.data-api",'[data-toggle^="button"]',function(a){f(a.target).closest(".btn").toggleClass("focus",/^focus(in)?$/.test(a.type))
})
}(jQuery),+function(g){function f(a){return this.each(function(){var l=g(this),k=l.data("bs.carousel"),c=g.extend({},j.DEFAULTS,l.data(),"object"==typeof a&&a),b="string"==typeof a?a:c.slide;
k||l.data("bs.carousel",k=new j(this,c)),"number"==typeof a?k.to(a):b?k[b]():c.interval&&k.pause().cycle()
})
}var j=function(a,d){this.$element=g(a),this.$indicators=this.$element.find(".carousel-indicators"),this.options=d,this.paused=null,this.sliding=null,this.interval=null,this.$active=null,this.$items=null,this.options.keyboard&&this.$element.on("keydown.bs.carousel",g.proxy(this.keydown,this)),"hover"==this.options.pause&&!("ontouchstart" in document.documentElement)&&this.$element.on("mouseenter.bs.carousel",g.proxy(this.pause,this)).on("mouseleave.bs.carousel",g.proxy(this.cycle,this))
};
j.VERSION="3.3.7",j.TRANSITION_DURATION=600,j.DEFAULTS={interval:5000,pause:"hover",wrap:!0,keyboard:!0},j.prototype.keydown=function(b){if(!/input|textarea/i.test(b.target.tagName)){switch(b.which){case 37:this.prev();
break;
case 39:this.next();
break;
default:return
}b.preventDefault()
}},j.prototype.cycle=function(a){return a||(this.paused=!1),this.interval&&clearInterval(this.interval),this.options.interval&&!this.paused&&(this.interval=setInterval(g.proxy(this.next,this),this.options.interval)),this
},j.prototype.getItemIndex=function(b){return this.$items=b.parent().children(".item"),this.$items.index(b||this.$active)
},j.prototype.getItemForDirection=function(l,k){var p=this.getItemIndex(k),o="prev"==l&&0===p||"next"==l&&p==this.$items.length-1;
if(o&&!this.options.wrap){return k
}var n="prev"==l?-1:1,m=(p+n)%this.$items.length;
return this.$items.eq(m)
},j.prototype.to=function(e){var d=this,k=this.getItemIndex(this.$active=this.$element.find(".item.active"));
if(!(e>this.$items.length-1||e<0)){return this.sliding?this.$element.one("slid.bs.carousel",function(){d.to(e)
}):k==e?this.pause().cycle():this.slide(e>k?"next":"prev",this.$items.eq(e))
}},j.prototype.pause=function(a){return a||(this.paused=!0),this.$element.find(".next, .prev").length&&g.support.transition&&(this.$element.trigger(g.support.transition.end),this.cycle(!0)),this.interval=clearInterval(this.interval),this
},j.prototype.next=function(){if(!this.sliding){return this.slide("next")
}},j.prototype.prev=function(){if(!this.sliding){return this.slide("prev")
}},j.prototype.slide=function(v,u){var t=this.$element.find(".item.active"),s=u||this.getItemForDirection(v,t),r=this.interval,q="next"==v?"left":"right",p=this;
if(s.hasClass("active")){return this.sliding=!1
}var o=s[0],n=g.Event("slide.bs.carousel",{relatedTarget:o,direction:q});
if(this.$element.trigger(n),!n.isDefaultPrevented()){if(this.sliding=!0,r&&this.pause(),this.$indicators.length){this.$indicators.find(".active").removeClass("active");
var c=g(this.$indicators.children()[this.getItemIndex(s)]);
c&&c.addClass("active")
}var a=g.Event("slid.bs.carousel",{relatedTarget:o,direction:q});
return g.support.transition&&this.$element.hasClass("slide")?(s.addClass(v),s[0].offsetWidth,t.addClass(q),s.addClass(q),t.one("bsTransitionEnd",function(){s.removeClass([v,q].join(" ")).addClass("active"),t.removeClass(["active",q].join(" ")),p.sliding=!1,setTimeout(function(){p.$element.trigger(a)
},0)
}).emulateTransitionEnd(j.TRANSITION_DURATION)):(t.removeClass("active"),s.addClass("active"),this.sliding=!1,this.$element.trigger(a)),r&&this.cycle(),this
}};
var i=g.fn.carousel;
g.fn.carousel=f,g.fn.carousel.Constructor=j,g.fn.carousel.noConflict=function(){return g.fn.carousel=i,this
};
var h=function(n){var m,l=g(this),k=g(l.attr("data-target")||(m=l.attr("href"))&&m.replace(/.*(?=#[^\s]+$)/,""));
if(k.hasClass("carousel")){var b=g.extend({},k.data(),l.data()),a=l.attr("data-slide-to");
a&&(b.interval=!1),f.call(k,b),a&&k.data("bs.carousel").to(a),n.preventDefault()
}};
g(document).on("click.bs.carousel.data-api","[data-slide]",h).on("click.bs.carousel.data-api","[data-slide-to]",h),g(window).on("load",function(){g('[data-ride="carousel"]').each(function(){var a=g(this);
f.call(a,a.data())
})
})
}(jQuery),+function(g){function f(a){var k,e=a.attr("data-target")||(k=a.attr("href"))&&k.replace(/.*(?=#[^\s]+$)/,"");
return g(e)
}function j(a){return this.each(function(){var k=g(this),d=k.data("bs.collapse"),b=g.extend({},i.DEFAULTS,k.data(),"object"==typeof a&&a);
!d&&b.toggle&&/show|hide/.test(a)&&(b.toggle=!1),d||k.data("bs.collapse",d=new i(this,b)),"string"==typeof a&&d[a]()
})
}var i=function(a,d){this.$element=g(a),this.options=g.extend({},i.DEFAULTS,d),this.$trigger=g('[data-toggle="collapse"][href="#'+a.id+'"],[data-toggle="collapse"][data-target="#'+a.id+'"]'),this.transitioning=null,this.options.parent?this.$parent=this.getParent():this.addAriaAndCollapsedClass(this.$element,this.$trigger),this.options.toggle&&this.toggle()
};
i.VERSION="3.3.7",i.TRANSITION_DURATION=350,i.DEFAULTS={toggle:!0},i.prototype.dimension=function(){var b=this.$element.hasClass("width");
return b?"width":"height"
},i.prototype.show=function(){if(!this.transitioning&&!this.$element.hasClass("in")){var a,m=this.$parent&&this.$parent.children(".panel").children(".in, .collapsing");
if(!(m&&m.length&&(a=m.data("bs.collapse"),a&&a.transitioning))){var l=g.Event("show.bs.collapse");
if(this.$element.trigger(l),!l.isDefaultPrevented()){m&&m.length&&(j.call(m,"hide"),a||m.data("bs.collapse",null));
var k=this.dimension();
this.$element.removeClass("collapse").addClass("collapsing")[k](0).attr("aria-expanded",!0),this.$trigger.removeClass("collapsed").attr("aria-expanded",!0),this.transitioning=1;
var d=function(){this.$element.removeClass("collapsing").addClass("collapse in")[k](""),this.transitioning=0,this.$element.trigger("shown.bs.collapse")
};
if(!g.support.transition){return d.call(this)
}var c=g.camelCase(["scroll",k].join("-"));
this.$element.one("bsTransitionEnd",g.proxy(d,this)).emulateTransitionEnd(i.TRANSITION_DURATION)[k](this.$element[0][c])
}}}},i.prototype.hide=function(){if(!this.transitioning&&this.$element.hasClass("in")){var a=g.Event("hide.bs.collapse");
if(this.$element.trigger(a),!a.isDefaultPrevented()){var k=this.dimension();
this.$element[k](this.$element[k]())[0].offsetHeight,this.$element.addClass("collapsing").removeClass("collapse in").attr("aria-expanded",!1),this.$trigger.addClass("collapsed").attr("aria-expanded",!1),this.transitioning=1;
var d=function(){this.transitioning=0,this.$element.removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse")
};
return g.support.transition?void this.$element[k](0).one("bsTransitionEnd",g.proxy(d,this)).emulateTransitionEnd(i.TRANSITION_DURATION):d.call(this)
}}},i.prototype.toggle=function(){this[this.$element.hasClass("in")?"hide":"show"]()
},i.prototype.getParent=function(){return g(this.options.parent).find('[data-toggle="collapse"][data-parent="'+this.options.parent+'"]').each(g.proxy(function(k,b){var a=g(b);
this.addAriaAndCollapsedClass(f(a),a)
},this)).end()
},i.prototype.addAriaAndCollapsedClass=function(e,d){var k=e.hasClass("in");
e.attr("aria-expanded",k),d.toggleClass("collapsed",!k).attr("aria-expanded",k)
};
var h=g.fn.collapse;
g.fn.collapse=j,g.fn.collapse.Constructor=i,g.fn.collapse.noConflict=function(){return g.fn.collapse=h,this
},g(document).on("click.bs.collapse.data-api",'[data-toggle="collapse"]',function(l){var k=g(this);
k.attr("data-target")||l.preventDefault();
var c=f(k),b=c.data("bs.collapse"),a=b?"toggle":k.data();
j.call(c,a)
})
}(jQuery),+function(j){function i(a){var f=a.attr("data-target");
f||(f=a.attr("href"),f=f&&/#[A-Za-z]/.test(f)&&f.replace(/.*(?=#[^\s]*$)/,""));
var e=f&&j(f);
return e&&e.length?e:a.parent()
}function p(a){a&&3===a.which||(j(n).remove(),j(m).each(function(){var g=j(this),c=i(g),b={relatedTarget:this};
c.hasClass("open")&&(a&&"click"==a.type&&/input|textarea/i.test(a.target.tagName)&&j.contains(c[0],a.target)||(c.trigger(a=j.Event("hide.bs.dropdown",b)),a.isDefaultPrevented()||(g.attr("aria-expanded","false"),c.removeClass("open").trigger(j.Event("hidden.bs.dropdown",b)))))
}))
}function o(a){return this.each(function(){var e=j(this),b=e.data("bs.dropdown");
b||e.data("bs.dropdown",b=new l(this)),"string"==typeof a&&b[a].call(e)
})
}var n=".dropdown-backdrop",m='[data-toggle="dropdown"]',l=function(a){j(a).on("click.bs.dropdown",this.toggle)
};
l.VERSION="3.3.7",l.prototype.toggle=function(r){var q=j(this);
if(!q.is(".disabled, :disabled")){var c=i(q),b=c.hasClass("open");
if(p(),!b){"ontouchstart" in document.documentElement&&!c.closest(".navbar-nav").length&&j(document.createElement("div")).addClass("dropdown-backdrop").insertAfter(j(this)).on("click",p);
var a={relatedTarget:this};
if(c.trigger(r=j.Event("show.bs.dropdown",a)),r.isDefaultPrevented()){return
}q.trigger("focus").attr("aria-expanded","true"),c.toggleClass("open").trigger(j.Event("shown.bs.dropdown",a))
}return !1
}},l.prototype.keydown=function(t){if(/(38|40|27|32)/.test(t.which)&&!/input|textarea/i.test(t.target.tagName)){var s=j(this);
if(t.preventDefault(),t.stopPropagation(),!s.is(".disabled, :disabled")){var r=i(s),q=r.hasClass("open");
if(!q&&27!=t.which||q&&27==t.which){return 27==t.which&&r.find(m).trigger("focus"),s.trigger("click")
}var f=" li:not(.disabled):visible a",b=r.find(".dropdown-menu"+f);
if(b.length){var a=b.index(t.target);
38==t.which&&a>0&&a--,40==t.which&&a<b.length-1&&a++,~a||(a=0),b.eq(a).trigger("focus")
}}}};
var k=j.fn.dropdown;
j.fn.dropdown=o,j.fn.dropdown.Constructor=l,j.fn.dropdown.noConflict=function(){return j.fn.dropdown=k,this
},j(document).on("click.bs.dropdown.data-api",p).on("click.bs.dropdown.data-api",".dropdown form",function(b){b.stopPropagation()
}).on("click.bs.dropdown.data-api",m,l.prototype.toggle).on("keydown.bs.dropdown.data-api",m,l.prototype.keydown).on("keydown.bs.dropdown.data-api",".dropdown-menu",l.prototype.keydown)
}(jQuery),+function(f){function e(a,c){return this.each(function(){var i=f(this),d=i.data("bs.modal"),b=f.extend({},h.DEFAULTS,i.data(),"object"==typeof a&&a);
d||i.data("bs.modal",d=new h(this,b)),"string"==typeof a?d[a](c):b.show&&d.show(c)
})
}var h=function(a,d){this.options=d,this.$body=f(document.body),this.$element=f(a),this.$dialog=this.$element.find(".modal-dialog"),this.$backdrop=null,this.isShown=null,this.originalBodyPad=null,this.scrollbarWidth=0,this.ignoreBackdropClick=!1,this.options.remote&&this.$element.find(".modal-content").load(this.options.remote,f.proxy(function(){this.$element.trigger("loaded.bs.modal")
},this))
};
h.VERSION="3.3.7",h.TRANSITION_DURATION=300,h.BACKDROP_TRANSITION_DURATION=150,h.DEFAULTS={backdrop:!0,keyboard:!0,show:!0},h.prototype.toggle=function(b){return this.isShown?this.hide():this.show(b)
},h.prototype.show=function(a){var i=this,c=f.Event("show.bs.modal",{relatedTarget:a});
this.$element.trigger(c),this.isShown||c.isDefaultPrevented()||(this.isShown=!0,this.checkScrollbar(),this.setScrollbar(),this.$body.addClass("modal-open"),this.escape(),this.resize(),this.$element.on("click.dismiss.bs.modal",'[data-dismiss="modal"]',f.proxy(this.hide,this)),this.$dialog.on("mousedown.dismiss.bs.modal",function(){i.$element.one("mouseup.dismiss.bs.modal",function(d){f(d.target).is(i.$element)&&(i.ignoreBackdropClick=!0)
})
}),this.backdrop(function(){var d=f.support.transition&&i.$element.hasClass("fade");
i.$element.parent().length||i.$element.appendTo(i.$body),i.$element.show().scrollTop(0),i.adjustDialog(),d&&i.$element[0].offsetWidth,i.$element.addClass("in"),i.enforceFocus();
var b=f.Event("shown.bs.modal",{relatedTarget:a});
d?i.$dialog.one("bsTransitionEnd",function(){i.$element.trigger("focus").trigger(b)
}).emulateTransitionEnd(h.TRANSITION_DURATION):i.$element.trigger("focus").trigger(b)
}))
},h.prototype.hide=function(a){a&&a.preventDefault(),a=f.Event("hide.bs.modal"),this.$element.trigger(a),this.isShown&&!a.isDefaultPrevented()&&(this.isShown=!1,this.escape(),this.resize(),f(document).off("focusin.bs.modal"),this.$element.removeClass("in").off("click.dismiss.bs.modal").off("mouseup.dismiss.bs.modal"),this.$dialog.off("mousedown.dismiss.bs.modal"),f.support.transition&&this.$element.hasClass("fade")?this.$element.one("bsTransitionEnd",f.proxy(this.hideModal,this)).emulateTransitionEnd(h.TRANSITION_DURATION):this.hideModal())
},h.prototype.enforceFocus=function(){f(document).off("focusin.bs.modal").on("focusin.bs.modal",f.proxy(function(b){document===b.target||this.$element[0]===b.target||this.$element.has(b.target).length||this.$element.trigger("focus")
},this))
},h.prototype.escape=function(){this.isShown&&this.options.keyboard?this.$element.on("keydown.dismiss.bs.modal",f.proxy(function(b){27==b.which&&this.hide()
},this)):this.isShown||this.$element.off("keydown.dismiss.bs.modal")
},h.prototype.resize=function(){this.isShown?f(window).on("resize.bs.modal",f.proxy(this.handleUpdate,this)):f(window).off("resize.bs.modal")
},h.prototype.hideModal=function(){var b=this;
this.$element.hide(),this.backdrop(function(){b.$body.removeClass("modal-open"),b.resetAdjustments(),b.resetScrollbar(),b.$element.trigger("hidden.bs.modal")
})
},h.prototype.removeBackdrop=function(){this.$backdrop&&this.$backdrop.remove(),this.$backdrop=null
},h.prototype.backdrop=function(a){var k=this,j=this.$element.hasClass("fade")?"fade":"";
if(this.isShown&&this.options.backdrop){var i=f.support.transition&&j;
if(this.$backdrop=f(document.createElement("div")).addClass("modal-backdrop "+j).appendTo(this.$body),this.$element.on("click.dismiss.bs.modal",f.proxy(function(b){return this.ignoreBackdropClick?void (this.ignoreBackdropClick=!1):void (b.target===b.currentTarget&&("static"==this.options.backdrop?this.$element[0].focus():this.hide()))
},this)),i&&this.$backdrop[0].offsetWidth,this.$backdrop.addClass("in"),!a){return
}i?this.$backdrop.one("bsTransitionEnd",a).emulateTransitionEnd(h.BACKDROP_TRANSITION_DURATION):a()
}else{if(!this.isShown&&this.$backdrop){this.$backdrop.removeClass("in");
var c=function(){k.removeBackdrop(),a&&a()
};
f.support.transition&&this.$element.hasClass("fade")?this.$backdrop.one("bsTransitionEnd",c).emulateTransitionEnd(h.BACKDROP_TRANSITION_DURATION):c()
}else{a&&a()
}}},h.prototype.handleUpdate=function(){this.adjustDialog()
},h.prototype.adjustDialog=function(){var b=this.$element[0].scrollHeight>document.documentElement.clientHeight;
this.$element.css({paddingLeft:!this.bodyIsOverflowing&&b?this.scrollbarWidth:"",paddingRight:this.bodyIsOverflowing&&!b?this.scrollbarWidth:""})
},h.prototype.resetAdjustments=function(){this.$element.css({paddingLeft:"",paddingRight:""})
},h.prototype.checkScrollbar=function(){var d=window.innerWidth;
if(!d){var c=document.documentElement.getBoundingClientRect();
d=c.right-Math.abs(c.left)
}this.bodyIsOverflowing=document.body.clientWidth<d,this.scrollbarWidth=this.measureScrollbar()
},h.prototype.setScrollbar=function(){var b=parseInt(this.$body.css("padding-right")||0,10);
this.originalBodyPad=document.body.style.paddingRight||"",this.bodyIsOverflowing&&this.$body.css("padding-right",b+this.scrollbarWidth)
},h.prototype.resetScrollbar=function(){this.$body.css("padding-right",this.originalBodyPad)
},h.prototype.measureScrollbar=function(){var d=document.createElement("div");
d.className="modal-scrollbar-measure",this.$body.append(d);
var c=d.offsetWidth-d.clientWidth;
return this.$body[0].removeChild(d),c
};
var g=f.fn.modal;
f.fn.modal=e,f.fn.modal.Constructor=h,f.fn.modal.noConflict=function(){return f.fn.modal=g,this
},f(document).on("click.bs.modal.data-api",'[data-toggle="modal"]',function(k){var j=f(this),i=j.attr("href"),b=f(j.attr("data-target")||i&&i.replace(/.*(?=#[^\s]+$)/,"")),a=b.data("bs.modal")?"toggle":f.extend({remote:!/#/.test(i)&&i},b.data(),j.data());
j.is("a")&&k.preventDefault(),b.one("show.bs.modal",function(c){c.isDefaultPrevented()||b.one("hidden.bs.modal",function(){j.is(":visible")&&j.trigger("focus")
})
}),e.call(b,a,this)
})
}(jQuery),+function(f){function e(a){return this.each(function(){var i=f(this),c=i.data("bs.tooltip"),b="object"==typeof a&&a;
!c&&/destroy|hide/.test(a)||(c||i.data("bs.tooltip",c=new h(this,b)),"string"==typeof a&&c[a]())
})
}var h=function(d,c){this.type=null,this.options=null,this.enabled=null,this.timeout=null,this.hoverState=null,this.$element=null,this.inState=null,this.init("tooltip",d,c)
};
h.VERSION="3.3.7",h.TRANSITION_DURATION=150,h.DEFAULTS={animation:!0,placement:"top",selector:!1,template:'<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',trigger:"hover focus",title:"",delay:0,html:!1,container:!1,viewport:{selector:"body",padding:0}},h.prototype.init=function(a,p,o){if(this.enabled=!0,this.type=a,this.$element=f(p),this.options=this.getOptions(o),this.$viewport=this.options.viewport&&f(f.isFunction(this.options.viewport)?this.options.viewport.call(this,this.$element):this.options.viewport.selector||this.options.viewport),this.inState={click:!1,hover:!1,focus:!1},this.$element[0] instanceof document.constructor&&!this.options.selector){throw new Error("`selector` option must be specified when initializing "+this.type+" on the window.document object!")
}for(var n=this.options.trigger.split(" "),m=n.length;
m--;
){var l=n[m];
if("click"==l){this.$element.on("click."+this.type,this.options.selector,f.proxy(this.toggle,this))
}else{if("manual"!=l){var k="hover"==l?"mouseenter":"focusin",j="hover"==l?"mouseleave":"focusout";
this.$element.on(k+"."+this.type,this.options.selector,f.proxy(this.enter,this)),this.$element.on(j+"."+this.type,this.options.selector,f.proxy(this.leave,this))
}}}this.options.selector?this._options=f.extend({},this.options,{trigger:"manual",selector:""}):this.fixTitle()
},h.prototype.getDefaults=function(){return h.DEFAULTS
},h.prototype.getOptions=function(a){return a=f.extend({},this.getDefaults(),this.$element.data(),a),a.delay&&"number"==typeof a.delay&&(a.delay={show:a.delay,hide:a.delay}),a
},h.prototype.getDelegateOptions=function(){var a={},d=this.getDefaults();
return this._options&&f.each(this._options,function(b,c){d[b]!=c&&(a[b]=c)
}),a
},h.prototype.enter=function(a){var d=a instanceof this.constructor?a:f(a.currentTarget).data("bs."+this.type);
return d||(d=new this.constructor(a.currentTarget,this.getDelegateOptions()),f(a.currentTarget).data("bs."+this.type,d)),a instanceof f.Event&&(d.inState["focusin"==a.type?"focus":"hover"]=!0),d.tip().hasClass("in")||"in"==d.hoverState?void (d.hoverState="in"):(clearTimeout(d.timeout),d.hoverState="in",d.options.delay&&d.options.delay.show?void (d.timeout=setTimeout(function(){"in"==d.hoverState&&d.show()
},d.options.delay.show)):d.show())
},h.prototype.isInStateTrue=function(){for(var b in this.inState){if(this.inState[b]){return !0
}}return !1
},h.prototype.leave=function(a){var d=a instanceof this.constructor?a:f(a.currentTarget).data("bs."+this.type);
if(d||(d=new this.constructor(a.currentTarget,this.getDelegateOptions()),f(a.currentTarget).data("bs."+this.type,d)),a instanceof f.Event&&(d.inState["focusout"==a.type?"focus":"hover"]=!1),!d.isInStateTrue()){return clearTimeout(d.timeout),d.hoverState="out",d.options.delay&&d.options.delay.hide?void (d.timeout=setTimeout(function(){"out"==d.hoverState&&d.hide()
},d.options.delay.hide)):d.hide()
}},h.prototype.show=function(){var D=f.Event("show.bs."+this.type);
if(this.hasContent()&&this.enabled){this.$element.trigger(D);
var C=f.contains(this.$element[0].ownerDocument.documentElement,this.$element[0]);
if(D.isDefaultPrevented()||!C){return
}var B=this,A=this.tip(),z=this.getUID(this.type);
this.setContent(),A.attr("id",z),this.$element.attr("aria-describedby",z),this.options.animation&&A.addClass("fade");
var y="function"==typeof this.options.placement?this.options.placement.call(this,A[0],this.$element[0]):this.options.placement,x=/\s?auto?\s?/i,w=x.test(y);
w&&(y=y.replace(x,"")||"top"),A.detach().css({top:0,left:0,display:"block"}).addClass(y).data("bs."+this.type,this),this.options.container?A.appendTo(this.options.container):A.insertAfter(this.$element),this.$element.trigger("inserted.bs."+this.type);
var v=this.getPosition(),u=A[0].offsetWidth,t=A[0].offsetHeight;
if(w){var s=y,r=this.getPosition(this.$viewport);
y="bottom"==y&&v.bottom+t>r.bottom?"top":"top"==y&&v.top-t<r.top?"bottom":"right"==y&&v.right+u>r.width?"left":"left"==y&&v.left-u<r.left?"right":y,A.removeClass(s).addClass(y)
}var c=this.getCalculatedOffset(y,v,u,t);
this.applyPlacement(c,y);
var a=function(){var b=B.hoverState;
B.$element.trigger("shown.bs."+B.type),B.hoverState=null,"out"==b&&B.leave(B)
};
f.support.transition&&this.$tip.hasClass("fade")?A.one("bsTransitionEnd",a).emulateTransitionEnd(h.TRANSITION_DURATION):a()
}},h.prototype.applyPlacement=function(z,y){var x=this.tip(),w=x[0].offsetWidth,v=x[0].offsetHeight,u=parseInt(x.css("margin-top"),10),t=parseInt(x.css("margin-left"),10);
isNaN(u)&&(u=0),isNaN(t)&&(t=0),z.top+=u,z.left+=t,f.offset.setOffset(x[0],f.extend({using:function(b){x.css({top:Math.round(b.top),left:Math.round(b.left)})
}},z),0),x.addClass("in");
var s=x[0].offsetWidth,r=x[0].offsetHeight;
"top"==y&&r!=v&&(z.top=z.top+v-r);
var q=this.getViewportAdjustedDelta(y,z,s,r);
q.left?z.left+=q.left:z.top+=q.top;
var p=/top|bottom/.test(y),o=p?2*q.left-w+s:2*q.top-v+r,a=p?"offsetWidth":"offsetHeight";
x.offset(z),this.replaceArrow(o,x[0][a],p)
},h.prototype.replaceArrow=function(i,d,j){this.arrow().css(j?"left":"top",50*(1-i/d)+"%").css(j?"top":"left","")
},h.prototype.setContent=function(){var d=this.tip(),c=this.getTitle();
d.find(".tooltip-inner")[this.options.html?"html":"text"](c),d.removeClass("fade in top bottom left right")
},h.prototype.hide=function(a){function k(){"in"!=j.hoverState&&i.detach(),j.$element&&j.$element.removeAttr("aria-describedby").trigger("hidden.bs."+j.type),a&&a()
}var j=this,i=f(this.$tip),c=f.Event("hide.bs."+this.type);
if(this.$element.trigger(c),!c.isDefaultPrevented()){return i.removeClass("in"),f.support.transition&&i.hasClass("fade")?i.one("bsTransitionEnd",k).emulateTransitionEnd(h.TRANSITION_DURATION):k(),this.hoverState=null,this
}},h.prototype.fixTitle=function(){var b=this.$element;
(b.attr("title")||"string"!=typeof b.attr("data-original-title"))&&b.attr("data-original-title",b.attr("title")||"").attr("title","")
},h.prototype.hasContent=function(){return this.getTitle()
},h.prototype.getPosition=function(a){a=a||this.$element;
var p=a[0],o="BODY"==p.tagName,n=p.getBoundingClientRect();
null==n.width&&(n=f.extend({},n,{width:n.right-n.left,height:n.bottom-n.top}));
var m=window.SVGElement&&p instanceof window.SVGElement,l=o?{top:0,left:0}:m?null:a.offset(),k={scroll:o?document.documentElement.scrollTop||document.body.scrollTop:a.scrollTop()},j=o?{width:f(window).width(),height:f(window).height()}:null;
return f.extend({},n,k,j,l)
},h.prototype.getCalculatedOffset=function(j,i,l,k){return"bottom"==j?{top:i.top+i.height,left:i.left+i.width/2-l/2}:"top"==j?{top:i.top-k,left:i.left+i.width/2-l/2}:"left"==j?{top:i.top+i.height/2-k/2,left:i.left-l}:{top:i.top+i.height/2-k/2,left:i.left+i.width}
},h.prototype.getViewportAdjustedDelta=function(v,u,t,s){var r={top:0,left:0};
if(!this.$viewport){return r
}var q=this.options.viewport&&this.options.viewport.padding||0,p=this.getPosition(this.$viewport);
if(/right|left/.test(v)){var o=u.top-q-p.scroll,n=u.top+q-p.scroll+s;
o<p.top?r.top=p.top-o:n>p.top+p.height&&(r.top=p.top+p.height-n)
}else{var m=u.left-q,l=u.left+q+t;
m<p.left?r.left=p.left-m:l>p.right&&(r.left=p.left+p.width-l)
}return r
},h.prototype.getTitle=function(){var i,d=this.$element,j=this.options;
return i=d.attr("data-original-title")||("function"==typeof j.title?j.title.call(d[0]):j.title)
},h.prototype.getUID=function(b){do{b+=~~(1000000*Math.random())
}while(document.getElementById(b));
return b
},h.prototype.tip=function(){if(!this.$tip&&(this.$tip=f(this.options.template),1!=this.$tip.length)){throw new Error(this.type+" `template` option must consist of exactly 1 top-level element!")
}return this.$tip
},h.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".tooltip-arrow")
},h.prototype.enable=function(){this.enabled=!0
},h.prototype.disable=function(){this.enabled=!1
},h.prototype.toggleEnabled=function(){this.enabled=!this.enabled
},h.prototype.toggle=function(a){var d=this;
a&&(d=f(a.currentTarget).data("bs."+this.type),d||(d=new this.constructor(a.currentTarget,this.getDelegateOptions()),f(a.currentTarget).data("bs."+this.type,d))),a?(d.inState.click=!d.inState.click,d.isInStateTrue()?d.enter(d):d.leave(d)):d.tip().hasClass("in")?d.leave(d):d.enter(d)
},h.prototype.destroy=function(){var b=this;
clearTimeout(this.timeout),this.hide(function(){b.$element.off("."+b.type).removeData("bs."+b.type),b.$tip&&b.$tip.detach(),b.$tip=null,b.$arrow=null,b.$viewport=null,b.$element=null
})
};
var g=f.fn.tooltip;
f.fn.tooltip=e,f.fn.tooltip.Constructor=h,f.fn.tooltip.noConflict=function(){return f.fn.tooltip=g,this
}
}(jQuery),+function(f){function e(a){return this.each(function(){var i=f(this),c=i.data("bs.popover"),b="object"==typeof a&&a;
!c&&/destroy|hide/.test(a)||(c||i.data("bs.popover",c=new h(this,b)),"string"==typeof a&&c[a]())
})
}var h=function(d,c){this.init("popover",d,c)
};
if(!f.fn.tooltip){throw new Error("Popover requires tooltip.js")
}h.VERSION="3.3.7",h.DEFAULTS=f.extend({},f.fn.tooltip.Constructor.DEFAULTS,{placement:"right",trigger:"click",content:"",template:'<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'}),h.prototype=f.extend({},f.fn.tooltip.Constructor.prototype),h.prototype.constructor=h,h.prototype.getDefaults=function(){return h.DEFAULTS
},h.prototype.setContent=function(){var i=this.tip(),d=this.getTitle(),j=this.getContent();
i.find(".popover-title")[this.options.html?"html":"text"](d),i.find(".popover-content").children().detach().end()[this.options.html?"string"==typeof j?"html":"append":"text"](j),i.removeClass("fade top bottom left right in"),i.find(".popover-title").html()||i.find(".popover-title").hide()
},h.prototype.hasContent=function(){return this.getTitle()||this.getContent()
},h.prototype.getContent=function(){var d=this.$element,c=this.options;
return d.attr("data-content")||("function"==typeof c.content?c.content.call(d[0]):c.content)
},h.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".arrow")
};
var g=f.fn.popover;
f.fn.popover=e,f.fn.popover.Constructor=h,f.fn.popover.noConflict=function(){return f.fn.popover=g,this
}
}(jQuery),+function(f){function e(b,a){this.$body=f(document.body),this.$scrollElement=f(f(b).is(document.body)?window:b),this.options=f.extend({},e.DEFAULTS,a),this.selector=(this.options.target||"")+" .nav li > a",this.offsets=[],this.targets=[],this.activeTarget=null,this.scrollHeight=0,this.$scrollElement.on("scroll.bs.scrollspy",f.proxy(this.process,this)),this.refresh(),this.process()
}function h(a){return this.each(function(){var i=f(this),c=i.data("bs.scrollspy"),b="object"==typeof a&&a;
c||i.data("bs.scrollspy",c=new e(this,b)),"string"==typeof a&&c[a]()
})
}e.VERSION="3.3.7",e.DEFAULTS={offset:10},e.prototype.getScrollHeight=function(){return this.$scrollElement[0].scrollHeight||Math.max(this.$body[0].scrollHeight,document.documentElement.scrollHeight)
},e.prototype.refresh=function(){var a=this,j="offset",i=0;
this.offsets=[],this.targets=[],this.scrollHeight=this.getScrollHeight(),f.isWindow(this.$scrollElement[0])||(j="position",i=this.$scrollElement.scrollTop()),this.$body.find(this.selector).map(function(){var c=f(this),k=c.data("target")||c.attr("href"),d=/^#./.test(k)&&f(k);
return d&&d.length&&d.is(":visible")&&[[d[j]().top+i,k]]||null
}).sort(function(d,c){return d[0]-c[0]
}).each(function(){a.offsets.push(this[0]),a.targets.push(this[1])
})
},e.prototype.process=function(){var j,i=this.$scrollElement.scrollTop()+this.options.offset,o=this.getScrollHeight(),n=this.options.offset+o-this.$scrollElement.height(),m=this.offsets,l=this.targets,k=this.activeTarget;
if(this.scrollHeight!=o&&this.refresh(),i>=n){return k!=(j=l[l.length-1])&&this.activate(j)
}if(k&&i<m[0]){return this.activeTarget=null,this.clear()
}for(j=m.length;
j--;
){k!=l[j]&&i>=m[j]&&(void 0===m[j+1]||i<m[j+1])&&this.activate(l[j])
}},e.prototype.activate=function(a){this.activeTarget=a,this.clear();
var j=this.selector+'[data-target="'+a+'"],'+this.selector+'[href="'+a+'"]',i=f(j).parents("li").addClass("active");
i.parent(".dropdown-menu").length&&(i=i.closest("li.dropdown").addClass("active")),i.trigger("activate.bs.scrollspy")
},e.prototype.clear=function(){f(this.selector).parentsUntil(this.options.target,".active").removeClass("active")
};
var g=f.fn.scrollspy;
f.fn.scrollspy=h,f.fn.scrollspy.Constructor=e,f.fn.scrollspy.noConflict=function(){return f.fn.scrollspy=g,this
},f(window).on("load.bs.scrollspy.data-api",function(){f('[data-spy="scroll"]').each(function(){var a=f(this);
h.call(a,a.data())
})
})
}(jQuery),+function(g){function f(a){return this.each(function(){var c=g(this),b=c.data("bs.tab");
b||c.data("bs.tab",b=new j(this)),"string"==typeof a&&b[a]()
})
}var j=function(a){this.element=g(a)
};
j.VERSION="3.3.7",j.TRANSITION_DURATION=150,j.prototype.show=function(){var a=this.element,p=a.closest("ul:not(.dropdown-menu)"),o=a.data("target");
if(o||(o=a.attr("href"),o=o&&o.replace(/.*(?=#[^\s]*$)/,"")),!a.parent("li").hasClass("active")){var n=p.find(".active:last a"),m=g.Event("hide.bs.tab",{relatedTarget:a[0]}),l=g.Event("show.bs.tab",{relatedTarget:n[0]});
if(n.trigger(m),a.trigger(l),!l.isDefaultPrevented()&&!m.isDefaultPrevented()){var k=g(o);
this.activate(a.closest("li"),p),this.activate(k,k.parent(),function(){n.trigger({type:"hidden.bs.tab",relatedTarget:a[0]}),a.trigger({type:"shown.bs.tab",relatedTarget:n[0]})
})
}}},j.prototype.activate=function(a,n,m){function l(){k.removeClass("active").find("> .dropdown-menu > .active").removeClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded",!1),a.addClass("active").find('[data-toggle="tab"]').attr("aria-expanded",!0),c?(a[0].offsetWidth,a.addClass("in")):a.removeClass("fade"),a.parent(".dropdown-menu").length&&a.closest("li.dropdown").addClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded",!0),m&&m()
}var k=n.find("> .active"),c=m&&g.support.transition&&(k.length&&k.hasClass("fade")||!!n.find("> .fade").length);
k.length&&c?k.one("bsTransitionEnd",l).emulateTransitionEnd(j.TRANSITION_DURATION):l(),k.removeClass("in")
};
var i=g.fn.tab;
g.fn.tab=f,g.fn.tab.Constructor=j,g.fn.tab.noConflict=function(){return g.fn.tab=i,this
};
var h=function(a){a.preventDefault(),f.call(g(this),"show")
};
g(document).on("click.bs.tab.data-api",'[data-toggle="tab"]',h).on("click.bs.tab.data-api",'[data-toggle="pill"]',h)
}(jQuery),+function(f){function e(a){return this.each(function(){var i=f(this),c=i.data("bs.affix"),b="object"==typeof a&&a;
c||i.data("bs.affix",c=new h(this,b)),"string"==typeof a&&c[a]()
})
}var h=function(a,c){this.options=f.extend({},h.DEFAULTS,c),this.$target=f(this.options.target).on("scroll.bs.affix.data-api",f.proxy(this.checkPosition,this)).on("click.bs.affix.data-api",f.proxy(this.checkPositionWithEventLoop,this)),this.$element=f(a),this.affixed=null,this.unpin=null,this.pinnedOffset=null,this.checkPosition()
};
h.VERSION="3.3.7",h.RESET="affix affix-top affix-bottom",h.DEFAULTS={offset:0,target:window},h.prototype.getState=function(t,s,r,q){var p=this.$target.scrollTop(),o=this.$element.offset(),n=this.$target.height();
if(null!=r&&"top"==this.affixed){return p<r&&"top"
}if("bottom"==this.affixed){return null!=r?!(p+this.unpin<=o.top)&&"bottom":!(p+n<=t-q)&&"bottom"
}var m=null==this.affixed,l=m?p:o.top,k=m?n:s;
return null!=r&&p<=r?"top":null!=q&&l+k>=t-q&&"bottom"
},h.prototype.getPinnedOffset=function(){if(this.pinnedOffset){return this.pinnedOffset
}this.$element.removeClass(h.RESET).addClass("affix");
var d=this.$target.scrollTop(),c=this.$element.offset();
return this.pinnedOffset=c.top-d
},h.prototype.checkPositionWithEventLoop=function(){setTimeout(f.proxy(this.checkPosition,this),1)
},h.prototype.checkPosition=function(){if(this.$element.is(":visible")){var a=this.$element.height(),p=this.options.offset,o=p.top,n=p.bottom,m=Math.max(f(document).height(),f(document.body).height());
"object"!=typeof p&&(n=o=p),"function"==typeof o&&(o=p.top(this.$element)),"function"==typeof n&&(n=p.bottom(this.$element));
var l=this.getState(m,a,o,n);
if(this.affixed!=l){null!=this.unpin&&this.$element.css("top","");
var k="affix"+(l?"-"+l:""),c=f.Event(k+".bs.affix");
if(this.$element.trigger(c),c.isDefaultPrevented()){return
}this.affixed=l,this.unpin="bottom"==l?this.getPinnedOffset():null,this.$element.removeClass(h.RESET).addClass(k).trigger(k.replace("affix","affixed")+".bs.affix")
}"bottom"==l&&this.$element.offset({top:m-a-n})
}};
var g=f.fn.affix;
f.fn.affix=e,f.fn.affix.Constructor=h,f.fn.affix.noConflict=function(){return f.fn.affix=g,this
},f(window).on("load",function(){f('[data-spy="affix"]').each(function(){var b=f(this),a=b.data();
a.offset=a.offset||{},null!=a.offsetBottom&&(a.offset.bottom=a.offsetBottom),null!=a.offsetTop&&(a.offset.top=a.offsetTop),e.call(b,a)
})
})
}(jQuery);
/*!
 * Datepicker for Bootstrap v1.6.1 (https://github.com/eternicode/bootstrap-datepicker)
 *
 * Copyright 2012 Stefan Petre
 * Improvements by Andrew Rowls
 * Licensed under the Apache License v2.0 (http://www.apache.org/licenses/LICENSE-2.0)
 */
;
!function(b){"function"==typeof define&&define.amd?define(["jquery"],b):b("object"==typeof exports?require("jquery"):jQuery)
}(function(J,I){function H(){return new Date(Date.UTC.apply(Date,arguments))
}function G(){var b=new Date;
return H(b.getFullYear(),b.getMonth(),b.getDate())
}function F(d,c){return d.getUTCFullYear()===c.getUTCFullYear()&&d.getUTCMonth()===c.getUTCMonth()&&d.getUTCDate()===c.getUTCDate()
}function E(b){return function(){return this[b].apply(this,arguments)
}
}function D(b){return b&&!isNaN(b.getTime())
}function C(a,p){function o(d,c){return c.toLowerCase()
}var n,m=J(a).data(),l={},k=new RegExp("^"+p.toLowerCase()+"([A-Z])");
p=new RegExp("^"+p.toLowerCase());
for(var j in m){p.test(j)&&(n=j.replace(k,o),l[n]=m[j])
}return l
}function B(a){var f={};
if(t[a]||(a=a.split("-")[0],t[a])){var e=t[a];
return J.each(u,function(d,c){c in e&&(f[c]=e[c])
}),f
}}var A=function(){var a={get:function(b){return this.slice(b)[0]
},contains:function(f){for(var e=f&&f.valueOf(),h=0,g=this.length;
g>h;
h++){if(this[h].valueOf()===e){return h
}}return -1
},remove:function(b){this.splice(b,1)
},replace:function(c){c&&(J.isArray(c)||(c=[c]),this.clear(),this.push.apply(this,c))
},clear:function(){this.length=0
},copy:function(){var b=new A;
return b.replace(this),b
}};
return function(){var b=[];
return b.push.apply(b,arguments),J.extend(b,a),b
}
}(),z=function(a,d){J(a).data("datepicker",this),this._process_options(d),this.dates=new A,this.viewDate=this.o.defaultViewDate,this.focusDate=null,this.element=J(a),this.isInput=this.element.is("input"),this.inputField=this.isInput?this.element:this.element.find("input"),this.component=this.element.hasClass("date")?this.element.find(".add-on, .input-group-addon, .btn"):!1,this.hasInput=this.component&&this.inputField.length,this.component&&0===this.component.length&&(this.component=!1),this.isInline=!this.component&&this.element.is("div"),this.picker=J(s.template),this._check_template(this.o.templates.leftArrow)&&this.picker.find(".prev").html(this.o.templates.leftArrow),this._check_template(this.o.templates.rightArrow)&&this.picker.find(".next").html(this.o.templates.rightArrow),this._buildEvents(),this._attachEvents(),this.isInline?this.picker.addClass("datepicker-inline").appendTo(this.element):this.picker.addClass("datepicker-dropdown dropdown-menu"),this.o.rtl&&this.picker.addClass("datepicker-rtl"),this.viewMode=this.o.startView,this.o.calendarWeeks&&this.picker.find("thead .datepicker-title, tfoot .today, tfoot .clear").attr("colspan",function(e,c){return parseInt(c)+1
}),this._allow_update=!1,this.setStartDate(this._o.startDate),this.setEndDate(this._o.endDate),this.setDaysOfWeekDisabled(this.o.daysOfWeekDisabled),this.setDaysOfWeekHighlighted(this.o.daysOfWeekHighlighted),this.setDatesDisabled(this.o.datesDisabled),this.fillDow(),this.fillMonths(),this._allow_update=!0,this.update(),this.showMode(),this.isInline&&this.show()
};
z.prototype={constructor:z,_resolveViewName:function(b,d){return 0===b||"days"===b||"month"===b?0:1===b||"months"===b||"year"===b?1:2===b||"years"===b||"decade"===b?2:3===b||"decades"===b||"century"===b?3:4===b||"centuries"===b||"millennium"===b?4:d===I?!1:d
},_check_template:function(f){try{if(f===I||""===f){return !1
}if((f.match(/[<>]/g)||[]).length<=0){return !0
}var b=J(f);
return b.length>0
}catch(a){return !1
}},_process_options:function(r){this._o=J.extend({},this._o,r);
var q=this.o=J.extend({},this._o),p=q.language;
t[p]||(p=p.split("-")[0],t[p]||(p=v.language)),q.language=p,q.startView=this._resolveViewName(q.startView,0),q.minViewMode=this._resolveViewName(q.minViewMode,0),q.maxViewMode=this._resolveViewName(q.maxViewMode,4),q.startView=Math.min(q.startView,q.maxViewMode),q.startView=Math.max(q.startView,q.minViewMode),q.multidate!==!0&&(q.multidate=Number(q.multidate)||!1,q.multidate!==!1&&(q.multidate=Math.max(0,q.multidate))),q.multidateSeparator=String(q.multidateSeparator),q.weekStart%=7,q.weekEnd=(q.weekStart+6)%7;
var o=s.parseFormat(q.format);
q.startDate!==-(1/0)&&(q.startDate?q.startDate instanceof Date?q.startDate=this._local_to_utc(this._zero_time(q.startDate)):q.startDate=s.parseDate(q.startDate,o,q.language,q.assumeNearbyYear):q.startDate=-(1/0)),q.endDate!==1/0&&(q.endDate?q.endDate instanceof Date?q.endDate=this._local_to_utc(this._zero_time(q.endDate)):q.endDate=s.parseDate(q.endDate,o,q.language,q.assumeNearbyYear):q.endDate=1/0),q.daysOfWeekDisabled=q.daysOfWeekDisabled||[],J.isArray(q.daysOfWeekDisabled)||(q.daysOfWeekDisabled=q.daysOfWeekDisabled.split(/[,\s]*/)),q.daysOfWeekDisabled=J.map(q.daysOfWeekDisabled,function(b){return parseInt(b,10)
}),q.daysOfWeekHighlighted=q.daysOfWeekHighlighted||[],J.isArray(q.daysOfWeekHighlighted)||(q.daysOfWeekHighlighted=q.daysOfWeekHighlighted.split(/[,\s]*/)),q.daysOfWeekHighlighted=J.map(q.daysOfWeekHighlighted,function(b){return parseInt(b,10)
}),q.datesDisabled=q.datesDisabled||[],J.isArray(q.datesDisabled)||(q.datesDisabled=[q.datesDisabled]),q.datesDisabled=J.map(q.datesDisabled,function(b){return s.parseDate(b,o,q.language,q.assumeNearbyYear)
});
var n=String(q.orientation).toLowerCase().split(/\s+/g),m=q.orientation.toLowerCase();
if(n=J.grep(n,function(b){return/^auto|left|right|top|bottom$/.test(b)
}),q.orientation={x:"auto",y:"auto"},m&&"auto"!==m){if(1===n.length){switch(n[0]){case"top":case"bottom":q.orientation.y=n[0];
break;
case"left":case"right":q.orientation.x=n[0]
}}else{m=J.grep(n,function(b){return/^left|right$/.test(b)
}),q.orientation.x=m[0]||"auto",m=J.grep(n,function(b){return/^top|bottom$/.test(b)
}),q.orientation.y=m[0]||"auto"
}}else{}if(q.defaultViewDate){var d=q.defaultViewDate.year||(new Date).getFullYear(),c=q.defaultViewDate.month||0,a=q.defaultViewDate.day||1;
q.defaultViewDate=H(d,c,a)
}else{q.defaultViewDate=G()
}},_events:[],_secondaryEvents:[],_applyEvents:function(b){for(var j,i,h,g=0;
g<b.length;
g++){j=b[g][0],2===b[g].length?(i=I,h=b[g][1]):3===b[g].length&&(i=b[g][1],h=b[g][2]),j.on(h,i)
}},_unapplyEvents:function(b){for(var j,i,h,g=0;
g<b.length;
g++){j=b[g][0],2===b[g].length?(h=I,i=b[g][1]):3===b[g].length&&(h=b[g][1],i=b[g][2]),j.off(i,h)
}},_buildEvents:function(){var a={keyup:J.proxy(function(c){-1===J.inArray(c.keyCode,[27,37,39,38,40,32,13,9])&&this.update()
},this),keydown:J.proxy(this.keydown,this),paste:J.proxy(this.paste,this)};
this.o.showOnFocus===!0&&(a.focus=J.proxy(this.show,this)),this.isInput?this._events=[[this.element,a]]:this.component&&this.hasInput?this._events=[[this.inputField,a],[this.component,{click:J.proxy(this.show,this)}]]:this._events=[[this.element,{click:J.proxy(this.show,this),keydown:J.proxy(this.keydown,this)}]],this._events.push([this.element,"*",{blur:J.proxy(function(b){this._focused_from=b.target
},this)}],[this.element,{blur:J.proxy(function(b){this._focused_from=b.target
},this)}]),this.o.immediateUpdates&&this._events.push([this.element,{"changeYear changeMonth":J.proxy(function(b){this.update(b.date)
},this)}]),this._secondaryEvents=[[this.picker,{click:J.proxy(this.click,this)}],[J(window),{resize:J.proxy(this.place,this)}],[J(document),{mousedown:J.proxy(function(b){this.element.is(b.target)||this.element.find(b.target).length||this.picker.is(b.target)||this.picker.find(b.target).length||this.isInline||this.hide()
},this)}]]
},_attachEvents:function(){this._detachEvents(),this._applyEvents(this._events)
},_detachEvents:function(){this._unapplyEvents(this._events)
},_attachSecondaryEvents:function(){this._detachSecondaryEvents(),this._applyEvents(this._secondaryEvents)
},_detachSecondaryEvents:function(){this._unapplyEvents(this._secondaryEvents)
},_trigger:function(a,h){var g=h||this.dates.get(-1),f=this._utc_to_local(g);
this.element.trigger({type:a,date:f,dates:J.map(this.dates,this._utc_to_local),format:J.proxy(function(e,d){0===arguments.length?(e=this.dates.length-1,d=this.o.format):"string"==typeof e&&(d=e,e=this.dates.length-1),d=d||this.o.format;
var i=this.dates.get(e);
return s.formatDate(i,d,this.o.language)
},this)})
},show:function(){return this.inputField.prop("disabled")||this.inputField.prop("readonly")&&this.o.enableOnReadonly===!1?void 0:(this.isInline||this.picker.appendTo(this.o.container),this.place(),this.picker.show(),this._attachSecondaryEvents(),this._trigger("show"),(window.navigator.msMaxTouchPoints||"ontouchstart" in document)&&this.o.disableTouchKeyboard&&J(this.element).blur(),this)
},hide:function(){return this.isInline||!this.picker.is(":visible")?this:(this.focusDate=null,this.picker.hide().detach(),this._detachSecondaryEvents(),this.viewMode=this.o.startView,this.showMode(),this.o.forceParse&&this.inputField.val()&&this.setValue(),this._trigger("hide"),this)
},destroy:function(){return this.hide(),this._detachEvents(),this._detachSecondaryEvents(),this.picker.remove(),delete this.element.data().datepicker,this.isInput||delete this.element.data().date,this
},paste:function(a){var d;
if(a.originalEvent.clipboardData&&a.originalEvent.clipboardData.types&&-1!==J.inArray("text/plain",a.originalEvent.clipboardData.types)){d=a.originalEvent.clipboardData.getData("text/plain")
}else{if(!window.clipboardData){return
}d=window.clipboardData.getData("Text")
}this.setDate(d),this.update(),a.preventDefault()
},_utc_to_local:function(b){return b&&new Date(b.getTime()+60000*b.getTimezoneOffset())
},_local_to_utc:function(b){return b&&new Date(b.getTime()-60000*b.getTimezoneOffset())
},_zero_time:function(b){return b&&new Date(b.getFullYear(),b.getMonth(),b.getDate())
},_zero_utc_time:function(b){return b&&new Date(Date.UTC(b.getUTCFullYear(),b.getUTCMonth(),b.getUTCDate()))
},getDates:function(){return J.map(this.dates,this._utc_to_local)
},getUTCDates:function(){return J.map(this.dates,function(b){return new Date(b)
})
},getDate:function(){return this._utc_to_local(this.getUTCDate())
},getUTCDate:function(){var b=this.dates.get(-1);
return"undefined"!=typeof b?new Date(b):null
},clearDates:function(){this.inputField&&this.inputField.val(""),this.update(),this._trigger("changeDate"),this.o.autoclose&&this.hide()
},setDates:function(){var a=J.isArray(arguments[0])?arguments[0]:arguments;
return this.update.apply(this,a),this._trigger("changeDate"),this.setValue(),this
},setUTCDates:function(){var a=J.isArray(arguments[0])?arguments[0]:arguments;
return this.update.apply(this,J.map(a,this._utc_to_local)),this._trigger("changeDate"),this.setValue(),this
},setDate:E("setDates"),setUTCDate:E("setUTCDates"),remove:E("destroy"),setValue:function(){var b=this.getFormattedDate();
return this.inputField.val(b),this
},getFormattedDate:function(b){b===I&&(b=this.o.format);
var a=this.o.language;
return J.map(this.dates,function(c){return s.formatDate(c,b,a)
}).join(this.o.multidateSeparator)
},getStartDate:function(){return this.o.startDate
},setStartDate:function(b){return this._process_options({startDate:b}),this.update(),this.updateNavArrows(),this
},getEndDate:function(){return this.o.endDate
},setEndDate:function(b){return this._process_options({endDate:b}),this.update(),this.updateNavArrows(),this
},setDaysOfWeekDisabled:function(b){return this._process_options({daysOfWeekDisabled:b}),this.update(),this.updateNavArrows(),this
},setDaysOfWeekHighlighted:function(b){return this._process_options({daysOfWeekHighlighted:b}),this.update(),this
},setDatesDisabled:function(b){this._process_options({datesDisabled:b}),this.update(),this.updateNavArrows()
},place:function(){if(this.isInline){return this
}var Z=this.picker.outerWidth(),Y=this.picker.outerHeight(),X=10,W=J(this.o.container),V=W.width(),U="body"===this.o.container?J(document).scrollTop():W.scrollTop(),T=W.offset(),S=[];
this.element.parents().each(function(){var c=J(this).css("z-index");
"auto"!==c&&0!==c&&S.push(parseInt(c))
});
var R=Math.max.apply(Math,S)+this.o.zIndexOffset,Q=this.component?this.component.parent().offset():this.element.offset(),P=this.component?this.component.outerHeight(!0):this.element.outerHeight(!1),O=this.component?this.component.outerWidth(!0):this.element.outerWidth(!1),N=Q.left-T.left,M=Q.top-T.top;
"body"!==this.o.container&&(M+=U),this.picker.removeClass("datepicker-orient-top datepicker-orient-bottom datepicker-orient-right datepicker-orient-left"),"auto"!==this.o.orientation.x?(this.picker.addClass("datepicker-orient-"+this.o.orientation.x),"right"===this.o.orientation.x&&(N-=Z-O)):Q.left<0?(this.picker.addClass("datepicker-orient-left"),N-=Q.left-X):N+Z>V?(this.picker.addClass("datepicker-orient-right"),N+=O-Z):this.picker.addClass("datepicker-orient-left");
var L,K=this.o.orientation.y;
if("auto"===K&&(L=-U+M-Y,K=0>L?"bottom":"top"),this.picker.addClass("datepicker-orient-"+K),"top"===K?M-=Y+parseInt(this.picker.css("padding-top")):M+=P,this.o.rtl){var a=V-(N+O);
this.picker.css({top:M,right:a,zIndex:R})
}else{this.picker.css({top:M,left:N,zIndex:R})
}return this
},_allow_update:!0,update:function(){if(!this._allow_update){return this
}var a=this.dates.copy(),f=[],e=!1;
return arguments.length?(J.each(arguments,J.proxy(function(d,c){c instanceof Date&&(c=this._local_to_utc(c)),f.push(c)
},this)),e=!0):(f=this.isInput?this.element.val():this.element.data("date")||this.inputField.val(),f=f&&this.o.multidate?f.split(this.o.multidateSeparator):[f],delete this.element.data().date),f=J.map(f,J.proxy(function(b){return s.parseDate(b,this.o.format,this.o.language,this.o.assumeNearbyYear)
},this)),f=J.grep(f,J.proxy(function(b){return !this.dateWithinRange(b)||!b
},this),!0),this.dates.replace(f),this.dates.length?this.viewDate=new Date(this.dates.get(-1)):this.viewDate<this.o.startDate?this.viewDate=new Date(this.o.startDate):this.viewDate>this.o.endDate?this.viewDate=new Date(this.o.endDate):this.viewDate=this.o.defaultViewDate,e?this.setValue():f.length&&String(a)!==String(this.dates)&&this._trigger("changeDate"),!this.dates.length&&a.length&&this._trigger("clearDate"),this.fill(),this.element.change(),this
},fillDow:function(){var a=this.o.weekStart,d="<tr>";
for(this.o.calendarWeeks&&(this.picker.find(".datepicker-days .datepicker-switch").attr("colspan",function(e,c){return parseInt(c)+1
}),d+='<th class="cw">&#160;</th>');
a<this.o.weekStart+7;
){d+='<th class="dow',J.inArray(a,this.o.daysOfWeekDisabled)>-1&&(d+=" disabled"),d+='">'+t[this.o.language].daysMin[a++%7]+"</th>"
}d+="</tr>",this.picker.find(".datepicker-days thead").append(d)
},fillMonths:function(){for(var f=this._utc_to_local(this.viewDate),e="",h=0;
12>h;
){var g=f&&f.getMonth()===h?" focused":"";
e+='<span class="month'+g+'">'+t[this.o.language].monthsShort[h++]+"</span>"
}this.picker.find(".datepicker-months td").html(e)
},setRange:function(a){a&&a.length?this.range=J.map(a,function(b){return b.valueOf()
}):delete this.range,this.fill()
},getClassNames:function(a){var j=[],i=this.viewDate.getUTCFullYear(),h=this.viewDate.getUTCMonth(),g=new Date;
return a.getUTCFullYear()<i||a.getUTCFullYear()===i&&a.getUTCMonth()<h?j.push("old"):(a.getUTCFullYear()>i||a.getUTCFullYear()===i&&a.getUTCMonth()>h)&&j.push("new"),this.focusDate&&a.valueOf()===this.focusDate.valueOf()&&j.push("focused"),this.o.todayHighlight&&a.getUTCFullYear()===g.getFullYear()&&a.getUTCMonth()===g.getMonth()&&a.getUTCDate()===g.getDate()&&j.push("today"),-1!==this.dates.contains(a)&&j.push("active"),this.dateWithinRange(a)||j.push("disabled"),this.dateIsDisabled(a)&&j.push("disabled","disabled-date"),-1!==J.inArray(a.getUTCDay(),this.o.daysOfWeekHighlighted)&&j.push("highlighted"),this.range&&(a>this.range[0]&&a<this.range[this.range.length-1]&&j.push("range"),-1!==J.inArray(a.valueOf(),this.range)&&j.push("selected"),a.valueOf()===this.range[0]&&j.push("range-start"),a.valueOf()===this.range[this.range.length-1]&&j.push("range-end")),j
},_fill_yearsView:function(aa,Z,Y,X,W,V,U,T){var S,R,Q,P,O,N,M,L,K,b,a;
for(S="",R=this.picker.find(aa),Q=parseInt(W/Y,10)*Y,O=parseInt(V/X,10)*X,N=parseInt(U/X,10)*X,P=J.map(this.dates,function(c){return parseInt(c.getUTCFullYear()/X,10)*X
}),R.find(".datepicker-switch").text(Q+"-"+(Q+9*X)),M=Q-X,L=-1;
11>L;
L+=1){K=[Z],b=null,-1===L?K.push("old"):10===L&&K.push("new"),-1!==J.inArray(M,P)&&K.push("active"),(O>M||M>N)&&K.push("disabled"),M===this.viewDate.getFullYear()&&K.push("focused"),T!==J.noop&&(a=T(new Date(M,0,1)),a===I?a={}:"boolean"==typeof a?a={enabled:a}:"string"==typeof a&&(a={classes:a}),a.enabled===!1&&K.push("disabled"),a.classes&&(K=K.concat(a.classes.split(/\s+/))),a.tooltip&&(b=a.tooltip)),S+='<span class="'+K.join(" ")+'"'+(b?' title="'+b+'"':"")+">"+M+"</span>",M+=X
}R.find("td").html(S)
},fill:function(){var ac,ab,aa=new Date(this.viewDate),Z=aa.getUTCFullYear(),Y=aa.getUTCMonth(),X=this.o.startDate!==-(1/0)?this.o.startDate.getUTCFullYear():-(1/0),W=this.o.startDate!==-(1/0)?this.o.startDate.getUTCMonth():-(1/0),V=this.o.endDate!==1/0?this.o.endDate.getUTCFullYear():1/0,U=this.o.endDate!==1/0?this.o.endDate.getUTCMonth():1/0,T=t[this.o.language].today||t.en.today||"",S=t[this.o.language].clear||t.en.clear||"",R=t[this.o.language].titleFormat||t.en.titleFormat;
if(!isNaN(Z)&&!isNaN(Y)){this.picker.find(".datepicker-days .datepicker-switch").text(s.formatDate(aa,R,this.o.language)),this.picker.find("tfoot .today").text(T).toggle(this.o.todayBtn!==!1),this.picker.find("tfoot .clear").text(S).toggle(this.o.clearBtn!==!1),this.picker.find("thead .datepicker-title").text(this.o.title).toggle(""!==this.o.title),this.updateNavArrows(),this.fillMonths();
var Q=H(Z,Y-1,28),M=s.getDaysInMonth(Q.getUTCFullYear(),Q.getUTCMonth());
Q.setUTCDate(M),Q.setUTCDate(M-(Q.getUTCDay()-this.o.weekStart+7)%7);
var L=new Date(Q);
Q.getUTCFullYear()<100&&L.setUTCFullYear(Q.getUTCFullYear()),L.setUTCDate(L.getUTCDate()+42),L=L.valueOf();
for(var K,r=[];
Q.valueOf()<L;
){if(Q.getUTCDay()===this.o.weekStart&&(r.push("<tr>"),this.o.calendarWeeks)){var q=new Date(+Q+(this.o.weekStart-Q.getUTCDay()-7)%7*86400000),c=new Date(Number(q)+(11-q.getUTCDay())%7*86400000),b=new Date(Number(b=H(c.getUTCFullYear(),0,1))+(11-b.getUTCDay())%7*86400000),a=(c-b)/86400000/7+1;
r.push('<td class="cw">'+a+"</td>")
}K=this.getClassNames(Q),K.push("day"),this.o.beforeShowDay!==J.noop&&(ab=this.o.beforeShowDay(this._utc_to_local(Q)),ab===I?ab={}:"boolean"==typeof ab?ab={enabled:ab}:"string"==typeof ab&&(ab={classes:ab}),ab.enabled===!1&&K.push("disabled"),ab.classes&&(K=K.concat(ab.classes.split(/\s+/))),ab.tooltip&&(ac=ab.tooltip)),K=J.unique(K),r.push('<td class="'+K.join(" ")+'"'+(ac?' title="'+ac+'"':"")+">"+Q.getUTCDate()+"</td>"),ac=null,Q.getUTCDay()===this.o.weekEnd&&r.push("</tr>"),Q.setUTCDate(Q.getUTCDate()+1)
}this.picker.find(".datepicker-days tbody").empty().append(r.join(""));
var P=t[this.o.language].monthsTitle||t.en.monthsTitle||"Months",O=this.picker.find(".datepicker-months").find(".datepicker-switch").text(this.o.maxViewMode<2?P:Z).end().find("span").removeClass("active");
if(J.each(this.dates,function(e,d){d.getUTCFullYear()===Z&&O.eq(d.getUTCMonth()).addClass("active")
}),(X>Z||Z>V)&&O.addClass("disabled"),Z===X&&O.slice(0,W).addClass("disabled"),Z===V&&O.slice(U+1).addClass("disabled"),this.o.beforeShowMonth!==J.noop){var N=this;
J.each(O,function(j,i){var h=new Date(Z,j,1),g=N.o.beforeShowMonth(h);
g===I?g={}:"boolean"==typeof g?g={enabled:g}:"string"==typeof g&&(g={classes:g}),g.enabled!==!1||J(i).hasClass("disabled")||J(i).addClass("disabled"),g.classes&&J(i).addClass(g.classes),g.tooltip&&J(i).prop("title",g.tooltip)
})
}this._fill_yearsView(".datepicker-years","year",10,1,Z,X,V,this.o.beforeShowYear),this._fill_yearsView(".datepicker-decades","decade",100,10,Z,X,V,this.o.beforeShowDecade),this._fill_yearsView(".datepicker-centuries","century",1000,100,Z,X,V,this.o.beforeShowCentury)
}},updateNavArrows:function(){if(this._allow_update){var e=new Date(this.viewDate),d=e.getUTCFullYear(),f=e.getUTCMonth();
switch(this.viewMode){case 0:this.o.startDate!==-(1/0)&&d<=this.o.startDate.getUTCFullYear()&&f<=this.o.startDate.getUTCMonth()?this.picker.find(".prev").css({visibility:"hidden"}):this.picker.find(".prev").css({visibility:"visible"}),this.o.endDate!==1/0&&d>=this.o.endDate.getUTCFullYear()&&f>=this.o.endDate.getUTCMonth()?this.picker.find(".next").css({visibility:"hidden"}):this.picker.find(".next").css({visibility:"visible"});
break;
case 1:case 2:case 3:case 4:this.o.startDate!==-(1/0)&&d<=this.o.startDate.getUTCFullYear()||this.o.maxViewMode<2?this.picker.find(".prev").css({visibility:"hidden"}):this.picker.find(".prev").css({visibility:"visible"}),this.o.endDate!==1/0&&d>=this.o.endDate.getUTCFullYear()||this.o.maxViewMode<2?this.picker.find(".next").css({visibility:"hidden"}):this.picker.find(".next").css({visibility:"visible"})
}}},click:function(r){r.preventDefault(),r.stopPropagation();
var q,p,o,n,m,d,c;
q=J(r.target),q.hasClass("datepicker-switch")&&this.showMode(1);
var a=q.closest(".prev, .next");
a.length>0&&(p=s.modes[this.viewMode].navStep*(a.hasClass("prev")?-1:1),0===this.viewMode?(this.viewDate=this.moveMonth(this.viewDate,p),this._trigger("changeMonth",this.viewDate)):(this.viewDate=this.moveYear(this.viewDate,p),1===this.viewMode&&this._trigger("changeYear",this.viewDate)),this.fill()),q.hasClass("today")&&!q.hasClass("day")&&(this.showMode(-2),this._setDate(G(),"linked"===this.o.todayBtn?null:"view")),q.hasClass("clear")&&this.clearDates(),q.hasClass("disabled")||(q.hasClass("day")&&(o=parseInt(q.text(),10)||1,n=this.viewDate.getUTCFullYear(),m=this.viewDate.getUTCMonth(),q.hasClass("old")&&(0===m?(m=11,n-=1,d=!0,c=!0):(m-=1,d=!0)),q.hasClass("new")&&(11===m?(m=0,n+=1,d=!0,c=!0):(m+=1,d=!0)),this._setDate(H(n,m,o)),c&&this._trigger("changeYear",this.viewDate),d&&this._trigger("changeMonth",this.viewDate)),q.hasClass("month")&&(this.viewDate.setUTCDate(1),o=1,m=q.parent().find("span").index(q),n=this.viewDate.getUTCFullYear(),this.viewDate.setUTCMonth(m),this._trigger("changeMonth",this.viewDate),1===this.o.minViewMode?(this._setDate(H(n,m,o)),this.showMode()):this.showMode(-1),this.fill()),(q.hasClass("year")||q.hasClass("decade")||q.hasClass("century"))&&(this.viewDate.setUTCDate(1),o=1,m=0,n=parseInt(q.text(),10)||0,this.viewDate.setUTCFullYear(n),q.hasClass("year")&&(this._trigger("changeYear",this.viewDate),2===this.o.minViewMode&&this._setDate(H(n,m,o))),q.hasClass("decade")&&(this._trigger("changeDecade",this.viewDate),3===this.o.minViewMode&&this._setDate(H(n,m,o))),q.hasClass("century")&&(this._trigger("changeCentury",this.viewDate),4===this.o.minViewMode&&this._setDate(H(n,m,o))),this.showMode(-1),this.fill())),this.picker.is(":visible")&&this._focused_from&&J(this._focused_from).focus(),delete this._focused_from
},_toggle_multidate:function(d){var c=this.dates.contains(d);
if(d||this.dates.clear(),-1!==c?(this.o.multidate===!0||this.o.multidate>1||this.o.toggleActive)&&this.dates.remove(c):this.o.multidate===!1?(this.dates.clear(),this.dates.push(d)):this.dates.push(d),"number"==typeof this.o.multidate){for(;
this.dates.length>this.o.multidate;
){this.dates.remove(0)
}}},_setDate:function(d,c){c&&"date"!==c||this._toggle_multidate(d&&new Date(d)),c&&"view"!==c||(this.viewDate=d&&new Date(d)),this.fill(),this.setValue(),c&&"view"===c||this._trigger("changeDate"),this.inputField&&this.inputField.change(),!this.o.autoclose||c&&"date"!==c||this.hide()
},moveDay:function(e,d){var f=new Date(e);
return f.setUTCDate(e.getUTCDate()+d),f
},moveWeek:function(d,c){return this.moveDay(d,7*c)
},moveMonth:function(r,q){if(!D(r)){return this.o.defaultViewDate
}if(!q){return r
}var p,o,n=new Date(r.valueOf()),m=n.getUTCDate(),l=n.getUTCMonth(),k=Math.abs(q);
if(q=q>0?1:-1,1===k){o=-1===q?function(){return n.getUTCMonth()===l
}:function(){return n.getUTCMonth()!==p
},p=l+q,n.setUTCMonth(p),(0>p||p>11)&&(p=(p+12)%12)
}else{for(var g=0;
k>g;
g++){n=this.moveMonth(n,q)
}p=n.getUTCMonth(),n.setUTCDate(m),o=function(){return p!==n.getUTCMonth()
}
}for(;
o();
){n.setUTCDate(--m),n.setUTCMonth(p)
}return n
},moveYear:function(d,c){return this.moveMonth(d,12*c)
},moveAvailableDate:function(e,d,f){do{if(e=this[f](e,d),!this.dateWithinRange(e)){return !1
}f="moveDay"
}while(this.dateIsDisabled(e));
return e
},weekOfDateIsDisabled:function(a){return -1!==J.inArray(a.getUTCDay(),this.o.daysOfWeekDisabled)
},dateIsDisabled:function(a){return this.weekOfDateIsDisabled(a)||J.grep(this.o.datesDisabled,function(b){return F(a,b)
}).length>0
},dateWithinRange:function(b){return b>=this.o.startDate&&b<=this.o.endDate
},keydown:function(g){if(!this.picker.is(":visible")){return void ((40===g.keyCode||27===g.keyCode)&&(this.show(),g.stopPropagation()))
}var f,j,i=!1,h=this.focusDate||this.viewDate;
switch(g.keyCode){case 27:this.focusDate?(this.focusDate=null,this.viewDate=this.dates.get(-1)||this.viewDate,this.fill()):this.hide(),g.preventDefault(),g.stopPropagation();
break;
case 37:case 38:case 39:case 40:if(!this.o.keyboardNavigation||7===this.o.daysOfWeekDisabled.length){break
}f=37===g.keyCode||38===g.keyCode?-1:1,0===this.viewMode?g.ctrlKey?(j=this.moveAvailableDate(h,f,"moveYear"),j&&this._trigger("changeYear",this.viewDate)):g.shiftKey?(j=this.moveAvailableDate(h,f,"moveMonth"),j&&this._trigger("changeMonth",this.viewDate)):37===g.keyCode||39===g.keyCode?j=this.moveAvailableDate(h,f,"moveDay"):this.weekOfDateIsDisabled(h)||(j=this.moveAvailableDate(h,f,"moveWeek")):1===this.viewMode?((38===g.keyCode||40===g.keyCode)&&(f=4*f),j=this.moveAvailableDate(h,f,"moveMonth")):2===this.viewMode&&((38===g.keyCode||40===g.keyCode)&&(f=4*f),j=this.moveAvailableDate(h,f,"moveYear")),j&&(this.focusDate=this.viewDate=j,this.setValue(),this.fill(),g.preventDefault());
break;
case 13:if(!this.o.forceParse){break
}h=this.focusDate||this.dates.get(-1)||this.viewDate,this.o.keyboardNavigation&&(this._toggle_multidate(h),i=!0),this.focusDate=null,this.viewDate=this.dates.get(-1)||this.viewDate,this.setValue(),this.fill(),this.picker.is(":visible")&&(g.preventDefault(),g.stopPropagation(),this.o.autoclose&&this.hide());
break;
case 9:this.focusDate=null,this.viewDate=this.dates.get(-1)||this.viewDate,this.fill(),this.hide()
}i&&(this.dates.length?this._trigger("changeDate"):this._trigger("clearDate"),this.inputField&&this.inputField.change())
},showMode:function(b){b&&(this.viewMode=Math.max(this.o.minViewMode,Math.min(this.o.maxViewMode,this.viewMode+b))),this.picker.children("div").hide().filter(".datepicker-"+s.modes[this.viewMode].clsName).show(),this.updateNavArrows()
}};
var y=function(a,d){J(a).data("datepicker",this),this.element=J(a),this.inputs=J.map(d.inputs,function(b){return b.jquery?b[0]:b
}),delete d.inputs,w.call(J(this.inputs),d).on("changeDate",J.proxy(this.dateUpdated,this)),this.pickers=J.map(this.inputs,function(c){return J(c).data("datepicker")
}),this.updateDates()
};
y.prototype={updateDates:function(){this.dates=J.map(this.pickers,function(b){return b.getUTCDate()
}),this.updateRanges()
},updateRanges:function(){var a=J.map(this.dates,function(b){return b.valueOf()
});
J.each(this.pickers,function(b,d){d.setRange(a)
})
},dateUpdated:function(a){if(!this.updating){this.updating=!0;
var n=J(a.target).data("datepicker");
if("undefined"!=typeof n){var m=n.getUTCDate(),l=J.inArray(a.target,this.inputs),k=l-1,j=l+1,i=this.inputs.length;
if(-1!==l){if(J.each(this.pickers,function(d,c){c.getUTCDate()||c.setUTCDate(m)
}),m<this.dates[k]){for(;
k>=0&&m<this.dates[k];
){this.pickers[k--].setUTCDate(m)
}}else{if(m>this.dates[j]){for(;
i>j&&m>this.dates[j];
){this.pickers[j++].setUTCDate(m)
}}}this.updateDates(),delete this.updating
}}}},remove:function(){J.map(this.pickers,function(b){b.remove()
}),delete this.element.data().datepicker
}};
var x=J.fn.datepicker,w=function(f){var b=Array.apply(null,arguments);
b.shift();
var a;
if(this.each(function(){var d=J(this),i=d.data("datepicker"),h="object"==typeof f&&f;
if(!i){var e=C(this,"date"),c=J.extend({},v,e,h),l=B(c.language),k=J.extend({},v,l,e,h);
d.hasClass("input-daterange")||k.inputs?(J.extend(k,{inputs:k.inputs||d.find("input").toArray()}),i=new y(this,k)):i=new z(this,k),d.data("datepicker",i)
}"string"==typeof f&&"function"==typeof i[f]&&(a=i[f].apply(i,b))
}),a===I||a instanceof z||a instanceof y){return this
}if(this.length>1){throw new Error("Using only allowed for the collection of a single element ("+f+" function)")
}return a
};
J.fn.datepicker=w;
var v=J.fn.datepicker.defaults={assumeNearbyYear:!1,autoclose:!1,beforeShowDay:J.noop,beforeShowMonth:J.noop,beforeShowYear:J.noop,beforeShowDecade:J.noop,beforeShowCentury:J.noop,calendarWeeks:!1,clearBtn:!1,toggleActive:!1,daysOfWeekDisabled:[],daysOfWeekHighlighted:[],datesDisabled:[],endDate:1/0,forceParse:!0,format:"mm/dd/yyyy",keyboardNavigation:!0,language:"en",minViewMode:0,maxViewMode:4,multidate:!1,multidateSeparator:",",orientation:"auto",rtl:!1,startDate:-(1/0),startView:0,todayBtn:!1,todayHighlight:!1,weekStart:0,disableTouchKeyboard:!1,enableOnReadonly:!0,showOnFocus:!0,zIndexOffset:10,container:"body",immediateUpdates:!1,title:"",templates:{leftArrow:"&laquo;",rightArrow:"&raquo;"}},u=J.fn.datepicker.locale_opts=["format","rtl","weekStart"];
J.fn.datepicker.Constructor=z;
var t=J.fn.datepicker.dates={en:{days:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],daysShort:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],daysMin:["Su","Mo","Tu","We","Th","Fr","Sa"],months:["January","February","March","April","May","June","July","August","September","October","November","December"],monthsShort:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],today:"Today",clear:"Clear",titleFormat:"MM yyyy"}},s={modes:[{clsName:"days",navFnc:"Month",navStep:1},{clsName:"months",navFnc:"FullYear",navStep:1},{clsName:"years",navFnc:"FullYear",navStep:10},{clsName:"decades",navFnc:"FullDecade",navStep:100},{clsName:"centuries",navFnc:"FullCentury",navStep:1000}],isLeapYear:function(b){return b%4===0&&b%100!==0||b%400===0
},getDaysInMonth:function(d,c){return[31,s.isLeapYear(d)?29:28,31,30,31,30,31,31,30,31,30,31][c]
},validParts:/dd?|DD?|mm?|MM?|yy(?:yy)?/g,nonpunctuation:/[^ -\/:-@\u5e74\u6708\u65e5\[-`{-~\t\n\r]+/g,parseFormat:function(e){if("function"==typeof e.toValue&&"function"==typeof e.toDisplay){return e
}var d=e.replace(this.validParts,"\x00").split("\x00"),f=e.match(this.validParts);
if(!d||!d.length||!f||0===f.length){throw new Error("Invalid date format.")
}return{separators:d,parts:f}
},parseDate:function(Z,Y,X,W){function V(f,e){return e===!0&&(e=10),100>f&&(f+=2000,f>(new Date).getFullYear()+e&&(f-=100)),f
}function U(){var f=this.slice(0,L[R].length),e=L[R].slice(0,f.length);
return f.toLowerCase()===e.toLowerCase()
}if(!Z){return I
}if(Z instanceof Date){return Z
}if("string"==typeof Y&&(Y=s.parseFormat(Y)),Y.toValue){return Y.toValue(Z,Y,X)
}var T,S,R,Q,P=/([\-+]\d+)([dmwy])/,L=Z.match(/([\-+]\d+)([dmwy])/g),r={d:"moveDay",m:"moveMonth",w:"moveWeek",y:"moveYear"},q={yesterday:"-1d",today:"+0d",tomorrow:"+1d"};
if(/^[\-+]\d+[dmwy]([\s,]+[\-+]\d+[dmwy])*$/.test(Z)){for(Z=new Date,R=0;
R<L.length;
R++){T=P.exec(L[R]),S=parseInt(T[1]),Q=r[T[2]],Z=z.prototype[Q](Z,S)
}return H(Z.getUTCFullYear(),Z.getUTCMonth(),Z.getUTCDate())
}if("undefined"!=typeof q[Z]&&(Z=q[Z],L=Z.match(/([\-+]\d+)([dmwy])/g),/^[\-+]\d+[dmwy]([\s,]+[\-+]\d+[dmwy])*$/.test(Z))){for(Z=new Date,R=0;
R<L.length;
R++){T=P.exec(L[R]),S=parseInt(T[1]),Q=r[T[2]],Z=z.prototype[Q](Z,S)
}return H(Z.getUTCFullYear(),Z.getUTCMonth(),Z.getUTCDate())
}L=Z&&Z.match(this.nonpunctuation)||[],Z=new Date;
var k,d,c={},b=["yyyy","yy","M","MM","m","mm","d","dd"],a={yyyy:function(f,e){return f.setUTCFullYear(W?V(e,W):e)
},yy:function(f,e){return f.setUTCFullYear(W?V(e,W):e)
},m:function(f,e){if(isNaN(f)){return f
}for(e-=1;
0>e;
){e+=12
}for(e%=12,f.setUTCMonth(e);
f.getUTCMonth()!==e;
){f.setUTCDate(f.getUTCDate()-1)
}return f
},d:function(f,e){return f.setUTCDate(e)
}};
a.M=a.MM=a.mm=a.m,a.dd=a.d,Z=G();
var O=Y.parts.slice();
if(L.length!==O.length&&(O=J(O).filter(function(e,f){return -1!==J.inArray(f,b)
}).toArray()),L.length===O.length){var N;
for(R=0,N=O.length;
N>R;
R++){if(k=parseInt(L[R],10),T=O[R],isNaN(k)){switch(T){case"MM":d=J(t[X].months).filter(U),k=J.inArray(d[0],t[X].months)+1;
break;
case"M":d=J(t[X].monthsShort).filter(U),k=J.inArray(d[0],t[X].monthsShort)+1
}}c[T]=k
}var M,K;
for(R=0;
R<b.length;
R++){K=b[R],K in c&&!isNaN(c[K])&&(M=new Date(Z),a[K](M,c[K]),isNaN(M)||(Z=M))
}}return Z
},formatDate:function(a,n,m){if(!a){return""
}if("string"==typeof n&&(n=s.parseFormat(n)),n.toDisplay){return n.toDisplay(a,n,m)
}var l={d:a.getUTCDate(),D:t[m].daysShort[a.getUTCDay()],DD:t[m].days[a.getUTCDay()],m:a.getUTCMonth()+1,M:t[m].monthsShort[a.getUTCMonth()],MM:t[m].months[a.getUTCMonth()],yy:a.getUTCFullYear().toString().substring(2),yyyy:a.getUTCFullYear()};
l.dd=(l.d<10?"0":"")+l.d,l.mm=(l.m<10?"0":"")+l.m,a=[];
for(var k=J.extend([],n.separators),j=0,i=n.parts.length;
i>=j;
j++){k.length&&a.push(k.shift()),a.push(l[n.parts[j]])
}return a.join("")
},headTemplate:'<thead><tr><th colspan="7" class="datepicker-title"></th></tr><tr><th class="prev">&laquo;</th><th colspan="5" class="datepicker-switch"></th><th class="next">&raquo;</th></tr></thead>',contTemplate:'<tbody><tr><td colspan="7"></td></tr></tbody>',footTemplate:'<tfoot><tr><th colspan="7" class="today"></th></tr><tr><th colspan="7" class="clear"></th></tr></tfoot>'};
s.template='<div class="datepicker"><div class="datepicker-days"><table class="table-condensed">'+s.headTemplate+"<tbody></tbody>"+s.footTemplate+'</table></div><div class="datepicker-months"><table class="table-condensed">'+s.headTemplate+s.contTemplate+s.footTemplate+'</table></div><div class="datepicker-years"><table class="table-condensed">'+s.headTemplate+s.contTemplate+s.footTemplate+'</table></div><div class="datepicker-decades"><table class="table-condensed">'+s.headTemplate+s.contTemplate+s.footTemplate+'</table></div><div class="datepicker-centuries"><table class="table-condensed">'+s.headTemplate+s.contTemplate+s.footTemplate+"</table></div></div>",J.fn.datepicker.DPGlobal=s,J.fn.datepicker.noConflict=function(){return J.fn.datepicker=x,this
},J.fn.datepicker.version="1.6.1",J(document).on("focus.datepicker.data-api click.datepicker.data-api",'[data-provide="datepicker"]',function(a){var d=J(this);
d.data("datepicker")||(a.preventDefault(),w.call(d,"show"))
}),J(function(){w.call(J('[data-provide="datepicker-inline"]'))
})
});
!function(a){"function"==typeof define&&define.amd?define(["jquery"],a):"undefined"!=typeof module&&module.exports?module.exports=a(require("jquery")):a(jQuery)
}(function(d){var h=-1,j=-1,c=function(a){return parseFloat(a)||0
},b=function(m){var p=1,i=d(m),q=null,l=[];
return i.each(function(){var r=d(this),n=r.offset().top-c(r.css("margin-top")),o=l.length>0?l[l.length-1]:null;
null===o?l.push(r):Math.floor(Math.abs(q-n))<=p?l[l.length-1]=o.add(r):l.push(r),q=n
}),l
},k=function(a){var i={byRow:!0,property:"height",target:null,remove:!1};
return"object"==typeof a?d.extend(i,a):("boolean"==typeof a?i.byRow=a:"remove"===a&&(i.remove=!0),i)
},g=d.fn.matchHeight=function(l){var m=k(l);
if(m.remove){var a=this;
return this.css(m.property,""),d.each(g._groups,function(i,n){n.elements=n.elements.not(a)
}),this
}return this.length<=1&&!m.target?this:(g._groups.push({elements:this,options:m}),g._apply(this,m),this)
};
g.version="0.7.0",g._groups=[],g._throttle=80,g._maintainScroll=!1,g._beforeUpdate=null,g._afterUpdate=null,g._rows=b,g._parse=c,g._parseOptions=k,g._apply=function(q,t){var m=k(t),i=d(q),a=[i],u=d(window).scrollTop(),n=d("html").outerHeight(!0),r=i.parents().filter(":hidden");
return r.each(function(){var l=d(this);
l.data("style-cache",l.attr("style"))
}),r.css("display","block"),m.byRow&&!m.target&&(i.each(function(){var l=d(this),p=l.css("display");
"inline-block"!==p&&"flex"!==p&&"inline-flex"!==p&&(p="block"),l.data("style-cache",l.attr("style")),l.css({display:p,"padding-top":"0","padding-bottom":"0","margin-top":"0","margin-bottom":"0","border-top-width":"0","border-bottom-width":"0",height:"100px",overflow:"hidden"})
}),a=b(i),i.each(function(){var l=d(this);
l.attr("style",l.data("style-cache")||"")
})),d.each(a,function(p,s){var l=d(s),v=0;
if(m.target){v=m.target.outerHeight(!1)
}else{if(m.byRow&&l.length<=1){return void l.css(m.property,"")
}l.each(function(){var y=d(this),z=y.attr("style"),x=y.css("display");
"inline-block"!==x&&"flex"!==x&&"inline-flex"!==x&&(x="block");
var w={display:x};
w[m.property]="",y.css(w),y.outerHeight(!1)>v&&(v=y.outerHeight(!1)),z?y.attr("style",z):y.css("display","")
})
}l.each(function(){var w=d(this),x=0;
m.target&&w.is(m.target)||("border-box"!==w.css("box-sizing")&&(x+=c(w.css("border-top-width"))+c(w.css("border-bottom-width")),x+=c(w.css("padding-top"))+c(w.css("padding-bottom"))),w.css(m.property,v-x+"px"))
})
}),r.each(function(){var l=d(this);
l.attr("style",l.data("style-cache")||null)
}),g._maintainScroll&&d(window).scrollTop(u/n*d("html").outerHeight(!0)),this
},g._applyDataApi=function(){var a={};
d("[data-match-height], [data-mh]").each(function(){var l=d(this),e=l.attr("data-mh")||l.attr("data-match-height");
e in a?a[e]=a[e].add(l):a[e]=l
}),d.each(a,function(){this.matchHeight(!0)
})
};
var f=function(a){g._beforeUpdate&&g._beforeUpdate(a,g._groups),d.each(g._groups,function(){g._apply(this.elements,this.options)
}),g._afterUpdate&&g._afterUpdate(a,g._groups)
};
g._update=function(l,e){if(e&&"resize"===e.type){var m=d(window).width();
if(m===h){return
}h=m
}l?-1===j&&(j=setTimeout(function(){f(e),j=-1
},g._throttle)):f(e)
},d(g._applyDataApi),d(window).bind("load",function(a){g._update(!1,a)
}),d(window).bind("resize orientationchange",function(a){g._update(!0,a)
})
});
!function(b){function c(f,g){for(var d=0;
d<f.length;
++d){g(f[d],d)
}}function a(f,d){this.$select=b(f),this.$select.attr("data-placeholder")&&(d.nonSelectedText=this.$select.data("placeholder")),this.options=this.mergeOptions(b.extend({},d,this.$select.data())),this.originalOptions=this.$select.clone()[0].options,this.query="",this.searchTimeout=null,this.lastToggledInput=null,this.options.multiple="multiple"===this.$select.attr("multiple"),this.options.onChange=b.proxy(this.options.onChange,this),this.options.onSelectAll=b.proxy(this.options.onSelectAll,this),this.options.onDeselectAll=b.proxy(this.options.onDeselectAll,this),this.options.onDropdownShow=b.proxy(this.options.onDropdownShow,this),this.options.onDropdownHide=b.proxy(this.options.onDropdownHide,this),this.options.onDropdownShown=b.proxy(this.options.onDropdownShown,this),this.options.onDropdownHidden=b.proxy(this.options.onDropdownHidden,this),this.options.onInitialized=b.proxy(this.options.onInitialized,this),this.options.onFiltering=b.proxy(this.options.onFiltering,this),this.buildContainer(),this.buildButton(),this.buildDropdown(),this.buildSelectAll(),this.buildDropdownOptions(),this.buildFilter(),this.updateButtonText(),this.updateSelectAll(!0),this.options.enableClickableOptGroups&&this.options.multiple&&this.updateOptGroups(),this.options.disableIfEmpty&&b("option",this.$select).length<=0&&this.disable(),this.$select.wrap('<span class="hide-native-select">').after(this.$container),this.options.onInitialized(this.$select,this.$container)
}"undefined"!=typeof ko&&ko.bindingHandlers&&!ko.bindingHandlers.multiselect&&(ko.bindingHandlers.multiselect={after:["options","value","selectedOptions","enable","disable"],init:function(v,q,A,m,j){var k=b(v),y=ko.toJS(q());
if(k.multiselect(y),A.has("options")){var g=A.get("options");
ko.isObservable(g)&&ko.computed({read:function(){g(),setTimeout(function(){var d=k.data("multiselect");
d&&d.updateOriginalOptions(),k.multiselect("rebuild")
},1)
},disposeWhenNodeIsRemoved:v})
}if(A.has("value")){var t=A.get("value");
ko.isObservable(t)&&ko.computed({read:function(){t(),setTimeout(function(){k.multiselect("refresh")
},1)
},disposeWhenNodeIsRemoved:v}).extend({rateLimit:100,notifyWhenChangesStop:!0})
}if(A.has("selectedOptions")){var f=A.get("selectedOptions");
ko.isObservable(f)&&ko.computed({read:function(){f(),setTimeout(function(){k.multiselect("refresh")
},1)
},disposeWhenNodeIsRemoved:v}).extend({rateLimit:100,notifyWhenChangesStop:!0})
}var x=function(d){setTimeout(function(){d?k.multiselect("enable"):k.multiselect("disable")
})
};
if(A.has("enable")){var w=A.get("enable");
ko.isObservable(w)?ko.computed({read:function(){x(w())
},disposeWhenNodeIsRemoved:v}).extend({rateLimit:100,notifyWhenChangesStop:!0}):x(w)
}if(A.has("disable")){var z=A.get("disable");
ko.isObservable(z)?ko.computed({read:function(){x(!z())
},disposeWhenNodeIsRemoved:v}).extend({rateLimit:100,notifyWhenChangesStop:!0}):x(!z)
}ko.utils.domNodeDisposal.addDisposeCallback(v,function(){k.multiselect("destroy")
})
},update:function(j,g,h,f,k){var m=b(j),d=ko.toJS(g());
m.multiselect("setOptions",d),m.multiselect("rebuild")
}}),a.prototype={defaults:{buttonText:function(h,f){if(this.disabledText.length>0&&(f.prop("disabled")||0==h.length&&this.disableIfEmpty)){return this.disabledText
}if(0===h.length){return this.nonSelectedText
}if(this.allSelectedText&&h.length===b("option",b(f)).length&&1!==b("option",b(f)).length&&this.multiple){return this.selectAllNumber?this.allSelectedText+" ("+h.length+")":this.allSelectedText
}if(h.length>this.numberDisplayed){return h.length+" "+this.nSelectedText
}var g="",d=this.delimiterText;
return h.each(function(){var i=void 0!==b(this).attr("label")?b(this).attr("label"):b(this).text();
g+=i+d
}),g.substr(0,g.length-this.delimiterText.length)
},buttonTitle:function(h,f){if(0===h.length){return this.nonSelectedText
}var g="",d=this.delimiterText;
return h.each(function(){var i=void 0!==b(this).attr("label")?b(this).attr("label"):b(this).text();
g+=i+d
}),g.substr(0,g.length-this.delimiterText.length)
},checkboxName:function(d){return !1
},optionLabel:function(d){return b(d).attr("label")||b(d).text()
},optionClass:function(d){return b(d).attr("class")||""
},onChange:function(d,f){},onDropdownShow:function(d){},onDropdownHide:function(d){},onDropdownShown:function(d){},onDropdownHidden:function(d){},onSelectAll:function(){},onDeselectAll:function(){},onInitialized:function(d,f){},onFiltering:function(d){},enableHTML:!1,buttonClass:"btn btn-default",inheritClass:!1,buttonWidth:"auto",buttonContainer:'<div class="btn-group" />',dropRight:!1,dropUp:!1,selectedClass:"active",maxHeight:!1,includeSelectAllOption:!1,includeSelectAllIfMoreThan:0,selectAllText:" Select all",selectAllValue:"multiselect-all",selectAllName:!1,selectAllNumber:!0,selectAllJustVisible:!0,enableFiltering:!1,enableCaseInsensitiveFiltering:!1,enableFullValueFiltering:!1,enableClickableOptGroups:!1,enableCollapsibleOptGroups:!1,filterPlaceholder:"Search",filterBehavior:"text",includeFilterClearBtn:!0,preventInputChangeEvent:!1,nonSelectedText:"None selected",nSelectedText:"selected",allSelectedText:"All selected",numberDisplayed:3,disableIfEmpty:!1,disabledText:"",delimiterText:", ",templates:{button:'<button type="button" class="multiselect dropdown-toggle" data-toggle="dropdown"><span class="multiselect-selected-text"></span> <b class="caret"></b></button>',ul:'<ul class="multiselect-container dropdown-menu"></ul>',filter:'<li class="multiselect-item multiselect-filter"><div class="input-group"><span class="input-group-addon"><i class="glyphicon glyphicon-search"></i></span><input class="form-control multiselect-search" type="text"></div></li>',filterClearBtn:'<span class="input-group-btn"><button class="btn btn-default multiselect-clear-filter" type="button"><i class="glyphicon glyphicon-remove-circle"></i></button></span>',li:'<li><a tabindex="0"><label></label></a></li>',divider:'<li class="multiselect-item divider"></li>',liGroup:'<li class="multiselect-item multiselect-group"><label></label></li>'}},constructor:a,buildContainer:function(){this.$container=b(this.options.buttonContainer),this.$container.on("show.bs.dropdown",this.options.onDropdownShow),this.$container.on("hide.bs.dropdown",this.options.onDropdownHide),this.$container.on("shown.bs.dropdown",this.options.onDropdownShown),this.$container.on("hidden.bs.dropdown",this.options.onDropdownHidden)
},buildButton:function(){this.$button=b(this.options.templates.button).addClass(this.options.buttonClass),this.$select.attr("class")&&this.options.inheritClass&&this.$button.addClass(this.$select.attr("class")),this.$select.prop("disabled")?this.disable():this.enable(),this.options.buttonWidth&&"auto"!==this.options.buttonWidth&&(this.$button.css({width:"100%",overflow:"hidden","text-overflow":"ellipsis"}),this.$container.css({width:this.options.buttonWidth}));
var d=this.$select.attr("tabindex");
d&&this.$button.attr("tabindex",d),this.$container.prepend(this.$button)
},buildDropdown:function(){if(this.$ul=b(this.options.templates.ul),this.options.dropRight&&this.$ul.addClass("pull-right"),this.options.maxHeight&&this.$ul.css({"max-height":this.options.maxHeight+"px","overflow-y":"auto","overflow-x":"hidden"}),this.options.dropUp){var f=Math.min(this.options.maxHeight,26*b('option[data-role!="divider"]',this.$select).length+19*b('option[data-role="divider"]',this.$select).length+(this.options.includeSelectAllOption?26:0)+(this.options.enableFiltering||this.options.enableCaseInsensitiveFiltering?44:0)),d=f+34;
this.$ul.css({"max-height":f+"px","overflow-y":"auto","overflow-x":"hidden","margin-top":"-"+d+"px"})
}this.$container.append(this.$ul)
},buildDropdownOptions:function(){this.$select.children().each(b.proxy(function(h,f){var g=b(f),d=g.prop("tagName").toLowerCase();
g.prop("value")!==this.options.selectAllValue&&("optgroup"===d?this.createOptgroup(f):"option"===d&&("divider"===g.data("role")?this.createDivider():this.createOptionValue(f)))
},this)),b("li:not(.multiselect-group) input",this.$ul).on("change",b.proxy(function(k){var g=b(k.target),h=g.prop("checked")||!1,f=g.val()===this.options.selectAllValue;
this.options.selectedClass&&(h?g.closest("li").addClass(this.options.selectedClass):g.closest("li").removeClass(this.options.selectedClass));
var m=g.val(),q=this.getOptionByValue(m),d=b("option",this.$select).not(q),j=b("input",this.$container).not(g);
return f?h?this.selectAll(this.options.selectAllJustVisible):this.deselectAll(this.options.selectAllJustVisible):(h?(q.prop("selected",!0),this.options.multiple?q.prop("selected",!0):(this.options.selectedClass&&b(j).closest("li").removeClass(this.options.selectedClass),b(j).prop("checked",!1),d.prop("selected",!1),this.$button.click()),"active"===this.options.selectedClass&&d.closest("a").css("outline","")):q.prop("selected",!1),this.options.onChange(q,h),this.updateSelectAll(),this.options.enableClickableOptGroups&&this.options.multiple&&this.updateOptGroups()),this.$select.change(),this.updateButtonText(),this.options.preventInputChangeEvent?!1:void 0
},this)),b("li a",this.$ul).on("mousedown",function(d){return d.shiftKey?!1:void 0
}),b("li a",this.$ul).on("touchstart click",b.proxy(function(t){t.stopPropagation();
var m=b(t.target);
if(t.shiftKey&&this.options.multiple){m.is("label")&&(t.preventDefault(),m=m.find("input"),m.prop("checked",!m.prop("checked")));
var w=m.prop("checked")||!1;
if(null!==this.lastToggledInput&&this.lastToggledInput!==m){var k=m.closest("li").index(),g=this.lastToggledInput.closest("li").index();
if(k>g){var j=g;
g=k,k=j
}++g;
var v=this.$ul.find("li").slice(k,g).find("input");
v.prop("checked",w),this.options.selectedClass&&v.closest("li").toggleClass(this.options.selectedClass,w);
for(var f=0,q=v.length;
q>f;
f++){var d=b(v[f]),u=this.getOptionByValue(d.val());
u.prop("selected",w)
}}m.trigger("change")
}m.is("input")&&!m.closest("li").is(".multiselect-item")&&(this.lastToggledInput=m),m.blur()
},this)),this.$container.off("keydown.multiselect").on("keydown.multiselect",b.proxy(function(h){if(!b('input[type="text"]',this.$container).is(":focus")){if(9===h.keyCode&&this.$container.hasClass("open")){this.$button.click()
}else{var f=b(this.$container).find("li:not(.divider):not(.disabled) a").filter(":visible");
if(!f.length){return
}var g=f.index(f.filter(":focus"));
38===h.keyCode&&g>0?g--:40===h.keyCode&&g<f.length-1?g++:~g||(g=0);
var d=f.eq(g);
if(d.focus(),32===h.keyCode||13===h.keyCode){var j=d.find("input");
j.prop("checked",!j.prop("checked")),j.change()
}h.stopPropagation(),h.preventDefault()
}}},this)),this.options.enableClickableOptGroups&&this.options.multiple&&b("li.multiselect-group input",this.$ul).on("change",b.proxy(function(j){j.stopPropagation();
var g=b(j.target),h=g.prop("checked")||!1,f=b(j.target).closest("li"),k=f.nextUntil("li.multiselect-group").not(".multiselect-filter-hidden").not(".disabled"),m=k.find("input"),d=[];
b.each(m,b.proxy(function(q,p){var n=b(p).val(),r=this.getOptionByValue(n);
h?(b(p).prop("checked",!0),b(p).closest("li").addClass(this.options.selectedClass),r.prop("selected",!0)):(b(p).prop("checked",!1),b(p).closest("li").removeClass(this.options.selectedClass),r.prop("selected",!1)),d.push(this.getOptionByValue(n))
},this)),this.options.onChange(d,h),this.updateButtonText(),this.updateSelectAll()
},this)),this.options.enableCollapsibleOptGroups&&this.options.multiple&&(b("li.multiselect-group .caret-container",this.$ul).on("click",b.proxy(function(h){var f=b(h.target).closest("li"),g=f.nextUntil("li.multiselect-group").not(".multiselect-filter-hidden"),d=!0;
g.each(function(){d=d&&b(this).is(":visible")
}),d?g.hide().addClass("multiselect-collapsible-hidden"):g.show().removeClass("multiselect-collapsible-hidden")
},this)),b("li.multiselect-all",this.$ul).css("background","#f3f3f3").css("border-bottom","1px solid #eaeaea"),b("li.multiselect-all > a > label.checkbox",this.$ul).css("padding","3px 20px 3px 35px"),b("li.multiselect-group > a > input",this.$ul).css("margin","4px 0px 5px -20px"))
},createOptionValue:function(t){var m=b(t);
m.is(":selected")&&m.prop("selected",!0);
var w=this.options.optionLabel(t),k=this.options.optionClass(t),g=m.val(),j=this.options.multiple?"checkbox":"radio",v=b(this.options.templates.li),f=b("label",v);
f.addClass(j),v.addClass(k),this.options.enableHTML?f.html(" "+w):f.text(" "+w);
var q=b("<input/>").attr("type",j),d=this.options.checkboxName(m);
d&&q.attr("name",d),f.prepend(q);
var u=m.prop("selected")||!1;
q.val(g),g===this.options.selectAllValue&&(v.addClass("multiselect-item multiselect-all"),q.parent().parent().addClass("multiselect-all")),f.attr("title",m.attr("title")),this.$ul.append(v),m.is(":disabled")&&q.attr("disabled","disabled").prop("disabled",!0).closest("a").attr("tabindex","-1").closest("li").addClass("disabled"),q.prop("checked",u),u&&this.options.selectedClass&&q.closest("li").addClass(this.options.selectedClass)
},createDivider:function(f){var d=b(this.options.templates.divider);
this.$ul.append(d)
},createOptgroup:function(h){var f=b(h).attr("label"),g=b(h).attr("value"),d=b('<li class="multiselect-item multiselect-group"><a href="javascript:void(0);"><label><b></b></label></a></li>'),j=this.options.optionClass(h);
d.addClass(j),this.options.enableHTML?b("label b",d).html(" "+f):b("label b",d).text(" "+f),this.options.enableCollapsibleOptGroups&&this.options.multiple&&b("a",d).append('<span class="caret-container"><b class="caret"></b></span>'),this.options.enableClickableOptGroups&&this.options.multiple&&b("a label",d).prepend('<input type="checkbox" value="'+g+'"/>'),b(h).is(":disabled")&&d.addClass("disabled"),this.$ul.append(d),b("option",h).each(b.proxy(function(i,k){this.createOptionValue(k)
},this))
},buildSelectAll:function(){"number"==typeof this.options.selectAllValue&&(this.options.selectAllValue=this.options.selectAllValue.toString());
var g=this.hasSelectAll();
if(!g&&this.options.includeSelectAllOption&&this.options.multiple&&b("option",this.$select).length>this.options.includeSelectAllIfMoreThan){this.options.includeSelectAllDivider&&this.$ul.prepend(b(this.options.templates.divider));
var d=b(this.options.templates.li);
b("label",d).addClass("checkbox"),this.options.enableHTML?b("label",d).html(" "+this.options.selectAllText):b("label",d).text(" "+this.options.selectAllText),this.options.selectAllName?b("label",d).prepend('<input type="checkbox" name="'+this.options.selectAllName+'" />'):b("label",d).prepend('<input type="checkbox" />');
var f=b("input",d);
f.val(this.options.selectAllValue),d.addClass("multiselect-item multiselect-all"),f.parent().parent().addClass("multiselect-all"),this.$ul.prepend(d),f.prop("checked",!1)
}},buildFilter:function(){if(this.options.enableFiltering||this.options.enableCaseInsensitiveFiltering){var f=Math.max(this.options.enableFiltering,this.options.enableCaseInsensitiveFiltering);
if(this.$select.find("option").length>=f){if(this.$filter=b(this.options.templates.filter),b("input",this.$filter).attr("placeholder",this.options.filterPlaceholder),this.options.includeFilterClearBtn){var d=b(this.options.templates.filterClearBtn);
d.on("click",b.proxy(function(g){clearTimeout(this.searchTimeout),this.$filter.find(".multiselect-search").val(""),b("li",this.$ul).show().removeClass("multiselect-filter-hidden"),this.updateSelectAll(),this.options.enableClickableOptGroups&&this.options.multiple&&this.updateOptGroups()
},this)),this.$filter.find(".input-group").append(d)
}this.$ul.prepend(this.$filter),this.$filter.val(this.query).on("click",function(e){e.stopPropagation()
}).on("input keydown",b.proxy(function(g){13===g.which&&g.preventDefault(),clearTimeout(this.searchTimeout),this.searchTimeout=this.asyncFunction(b.proxy(function(){if(this.query!==g.target.value){this.query=g.target.value;
var e,h;
b.each(b("li",this.$ul),b.proxy(function(q,j){var r=b("input",j).length>0?b("input",j).val():"",s=b("label",j).text(),i="";
if("text"===this.options.filterBehavior?i=s:"value"===this.options.filterBehavior?i=r:"both"===this.options.filterBehavior&&(i=s+"\n"+r),r!==this.options.selectAllValue&&s){var m=!1;
if(this.options.enableCaseInsensitiveFiltering&&(i=i.toLowerCase(),this.query=this.query.toLowerCase()),this.options.enableFullValueFiltering&&"both"!==this.options.filterBehavior){var k=i.trim().substring(0,this.query.length);
this.query.indexOf(k)>-1&&(m=!0)
}else{i.indexOf(this.query)>-1&&(m=!0)
}b(j).toggle(m).toggleClass("multiselect-filter-hidden",!m),b(j).hasClass("multiselect-group")?(e=j,h=m):(m&&b(e).show().removeClass("multiselect-filter-hidden"),!m&&h&&b(j).show().removeClass("multiselect-filter-hidden"))
}},this))
}this.updateSelectAll(),this.options.enableClickableOptGroups&&this.options.multiple&&this.updateOptGroups(),this.options.onFiltering(g.target)
},this),300,this)
},this))
}}},destroy:function(){this.$container.remove(),this.$select.show(),this.$select.data("multiselect",null)
},refresh:function(){var d=b.map(b("li input",this.$ul),b);
b("option",this.$select).each(b.proxy(function(g,h){for(var f,j=b(h),k=j.val(),e=d.length;
0<e--;
){if(k===(f=d[e]).val()){j.is(":selected")?(f.prop("checked",!0),this.options.selectedClass&&f.closest("li").addClass(this.options.selectedClass)):(f.prop("checked",!1),this.options.selectedClass&&f.closest("li").removeClass(this.options.selectedClass)),j.is(":disabled")?f.attr("disabled","disabled").prop("disabled",!0).closest("li").addClass("disabled"):f.prop("disabled",!1).closest("li").removeClass("disabled");
break
}}},this)),this.updateButtonText(),this.updateSelectAll(),this.options.enableClickableOptGroups&&this.options.multiple&&this.updateOptGroups()
},select:function(h,f){b.isArray(h)||(h=[h]);
for(var g=0;
g<h.length;
g++){var d=h[g];
if(null!==d&&void 0!==d){var j=this.getOptionByValue(d),k=this.getInputByValue(d);
void 0!==j&&void 0!==k&&(this.options.multiple||this.deselectAll(!1),this.options.selectedClass&&k.closest("li").addClass(this.options.selectedClass),k.prop("checked",!0),j.prop("selected",!0),f&&this.options.onChange(j,!0))
}}this.updateButtonText(),this.updateSelectAll(),this.options.enableClickableOptGroups&&this.options.multiple&&this.updateOptGroups()
},clearSelection:function(){this.deselectAll(!1),this.updateButtonText(),this.updateSelectAll(),this.options.enableClickableOptGroups&&this.options.multiple&&this.updateOptGroups()
},deselect:function(h,f){b.isArray(h)||(h=[h]);
for(var g=0;
g<h.length;
g++){var d=h[g];
if(null!==d&&void 0!==d){var j=this.getOptionByValue(d),k=this.getInputByValue(d);
void 0!==j&&void 0!==k&&(this.options.selectedClass&&k.closest("li").removeClass(this.options.selectedClass),k.prop("checked",!1),j.prop("selected",!1),f&&this.options.onChange(j,!1))
}}this.updateButtonText(),this.updateSelectAll(),this.options.enableClickableOptGroups&&this.options.multiple&&this.updateOptGroups()
},selectAll:function(h,f){var h="undefined"==typeof h?!0:h,g=b("li:not(.divider):not(.disabled):not(.multiselect-group)",this.$ul),d=b("li:not(.divider):not(.disabled):not(.multiselect-group):not(.multiselect-filter-hidden):not(.multiselect-collapisble-hidden)",this.$ul).filter(":visible");
h?(b("input:enabled",d).prop("checked",!0),d.addClass(this.options.selectedClass),b("input:enabled",d).each(b.proxy(function(n,k){var m=b(k).val(),j=this.getOptionByValue(m);
b(j).prop("selected",!0)
},this))):(b("input:enabled",g).prop("checked",!0),g.addClass(this.options.selectedClass),b("input:enabled",g).each(b.proxy(function(n,k){var m=b(k).val(),j=this.getOptionByValue(m);
b(j).prop("selected",!0)
},this))),b('li input[value="'+this.options.selectAllValue+'"]').prop("checked",!0),this.options.enableClickableOptGroups&&this.options.multiple&&this.updateOptGroups(),f&&this.options.onSelectAll()
},deselectAll:function(h,f){var h="undefined"==typeof h?!0:h,g=b("li:not(.divider):not(.disabled):not(.multiselect-group)",this.$ul),d=b("li:not(.divider):not(.disabled):not(.multiselect-group):not(.multiselect-filter-hidden):not(.multiselect-collapisble-hidden)",this.$ul).filter(":visible");
h?(b('input[type="checkbox"]:enabled',d).prop("checked",!1),d.removeClass(this.options.selectedClass),b('input[type="checkbox"]:enabled',d).each(b.proxy(function(n,k){var m=b(k).val(),j=this.getOptionByValue(m);
b(j).prop("selected",!1)
},this))):(b('input[type="checkbox"]:enabled',g).prop("checked",!1),g.removeClass(this.options.selectedClass),b('input[type="checkbox"]:enabled',g).each(b.proxy(function(n,k){var m=b(k).val(),j=this.getOptionByValue(m);
b(j).prop("selected",!1)
},this))),b('li input[value="'+this.options.selectAllValue+'"]').prop("checked",!1),this.options.enableClickableOptGroups&&this.options.multiple&&this.updateOptGroups(),f&&this.options.onDeselectAll()
},rebuild:function(){this.$ul.html(""),this.options.multiple="multiple"===this.$select.attr("multiple"),this.buildSelectAll(),this.buildDropdownOptions(),this.buildFilter(),this.updateButtonText(),this.updateSelectAll(!0),this.options.enableClickableOptGroups&&this.options.multiple&&this.updateOptGroups(),this.options.disableIfEmpty&&b("option",this.$select).length<=0?this.disable():this.enable(),this.options.dropRight&&this.$ul.addClass("pull-right")
},dataprovider:function(e){var f=0,d=this.$select.empty();
b.each(e,function(h,k){var l;
if(b.isArray(k.children)){f++,l=b("<optgroup/>").attr({label:k.label||"Group "+f,disabled:!!k.disabled}),c(k.children,function(o){var m={value:o.value,label:o.label||o.value,title:o.title,selected:!!o.selected,disabled:!!o.disabled};
for(var n in o.attributes){m["data-"+n]=o.attributes[n]
}l.append(b("<option/>").attr(m))
})
}else{var g={value:k.value,label:k.label||k.value,title:k.title,"class":k["class"],selected:!!k.selected,disabled:!!k.disabled};
for(var j in k.attributes){g["data-"+j]=k.attributes[j]
}l=b("<option/>").attr(g),l.text(k.label||k.value)
}d.append(l)
}),this.rebuild()
},enable:function(){this.$select.prop("disabled",!1),this.$button.prop("disabled",!1).removeClass("disabled")
},disable:function(){this.$select.prop("disabled",!0),this.$button.prop("disabled",!0).addClass("disabled")
},setOptions:function(d){this.options=this.mergeOptions(d)
},mergeOptions:function(d){return b.extend(!0,{},this.defaults,this.options,d)
},hasSelectAll:function(){return b("li.multiselect-all",this.$ul).length>0
},updateOptGroups:function(){var d=b("li.multiselect-group",this.$ul);
d.each(function(){var g=b(this).nextUntil("li.multiselect-group").not(".multiselect-filter-hidden").not(".disabled"),f=!0;
g.each(function(){var h=b("input",this);
h.prop("checked")||(f=!1)
}),b("input",this).prop("checked",f)
})
},updateSelectAll:function(h){if(this.hasSelectAll()){var f=b("li:not(.multiselect-item):not(.multiselect-filter-hidden):not(.multiselect-group):not(.disabled) input:enabled",this.$ul),g=f.length,d=f.filter(":checked").length,j=b("li.multiselect-all",this.$ul),k=j.find("input");
d>0&&d===g?(k.prop("checked",!0),j.addClass(this.options.selectedClass),this.options.onSelectAll()):(k.prop("checked",!1),j.removeClass(this.options.selectedClass),0===d&&(h||this.options.onDeselectAll()))
}},updateButtonText:function(){var d=this.getSelected();
this.options.enableHTML?b(".multiselect .multiselect-selected-text",this.$container).html(this.options.buttonText(d,this.$select)):b(".multiselect .multiselect-selected-text",this.$container).text(this.options.buttonText(d,this.$select)),b(".multiselect",this.$container).attr("title",this.options.buttonTitle(d,this.$select))
},getSelected:function(){return b("option",this.$select).filter(":selected")
},getOptionByValue:function(h){for(var f=b("option",this.$select),g=h.toString(),d=0;
d<f.length;
d+=1){var j=f[d];
if(j.value===g){return b(j)
}}},getInputByValue:function(h){for(var f=b("li input",this.$ul),g=h.toString(),d=0;
d<f.length;
d+=1){var j=f[d];
if(j.value===g){return b(j)
}}},updateOriginalOptions:function(){this.originalOptions=this.$select.clone()[0].options
},asyncFunction:function(f,h,d){var g=Array.prototype.slice.call(arguments,3);
return setTimeout(function(){f.apply(d||window,g)
},h)
},setAllSelectedText:function(d){this.options.allSelectedText=d,this.updateButtonText()
}},b.fn.multiselect=function(g,f,d){return this.each(function(){var e=b(this).data("multiselect"),h="object"==typeof g&&g;
e||(e=new a(this,h),b(this).data("multiselect",e)),"string"==typeof g&&(e[g](f,d),"destroy"===g&&b(this).data("multiselect",!1))
})
},b.fn.multiselect.Constructor=a,b(function(){b("select[data-role=multiselect]").multiselect()
})
}(window.jQuery);
window.Modernizr=function(at,ae,aj){function ag(a){aw.cssText=a
}function ai(b,a){return ag(B.join(b+";")+(a||""))
}function ax(b,a){return typeof b===a
}function ao(b,a){return !!~(""+b).indexOf(a)
}function av(c,a){for(var b in c){var d=c[b];
if(!ao(d,"-")&&aw[d]!==aj){return"pfx"==a?d:!0
}}return !1
}function af(d,b,c){for(var f in d){var a=b[d[f]];
if(a!==aj){return c===!1?d[f]:ax(a,"function")?a.bind(c||b):a
}}return !1
}function ad(c,a,f){var b=c.charAt(0).toUpperCase()+c.slice(1),d=(c+" "+am.join(b+" ")+b).split(" ");
return ax(a,"string")||ax(a,"undefined")?av(d,a):(d=(c+" "+q.join(b+" ")+b).split(" "),af(d,a,f))
}function al(){ah.input=function(c){for(var a=0,b=c.length;
b>a;
a++){an[c[a]]=!!(c[a] in R)
}return an.list&&(an.list=!(!ae.createElement("datalist")||!at.HTMLDataListElement)),an
}("autocomplete autofocus list placeholder max min multiple pattern required step".split(" ")),ah.inputtypes=function(g){for(var f,h,b,d=0,j=g.length;
j>d;
d++){R.setAttribute("type",h=g[d]),f="text"!==R.type,f&&(R.value=aa,R.style.cssText="position:absolute;visibility:hidden;",/^range$/.test(h)&&R.style.WebkitAppearance!==aj?(aq.appendChild(R),b=ae.defaultView,f=b.getComputedStyle&&"textfield"!==b.getComputedStyle(R,null).WebkitAppearance&&0!==R.offsetHeight,aq.removeChild(R)):/^(search|tel)$/.test(h)||(f=/^(url|email)$/.test(h)?R.checkValidity&&R.checkValidity()===!1:R.value!=aa)),G[g[d]]=!!f
}return G
}("search tel url email datetime date month week time datetime-local number range color".split(" "))
}var au,ar,ak="2.8.2",ah={},ap=!0,aq=ae.documentElement,ac="modernizr",Z=ae.createElement(ac),aw=Z.style,R=ae.createElement("input"),aa=":)",ab={}.toString,B=" -webkit- -moz- -o- -ms- ".split(" "),V="Webkit Moz O ms",am=V.split(" "),q=V.toLowerCase().split(" "),I={svg:"http://www.w3.org/2000/svg"},J={},G={},an={},X=[],U=X.slice,Q=function(k,g,b,f){var t,j,p,w,v=ae.createElement("div"),h=ae.body,m=h||ae.createElement("body");
if(parseInt(b,10)){for(;
b--;
){p=ae.createElement("div"),p.id=f?f[b]:ac+(b+1),v.appendChild(p)
}}return t=["&#173;",'<style id="s',ac,'">',k,"</style>"].join(""),v.id=ac,(h?v:m).innerHTML+=t,m.appendChild(v),h||(m.style.background="",m.style.overflow="hidden",w=aq.style.overflow,aq.style.overflow="hidden",aq.appendChild(m)),j=g(v,k),h?v.parentNode.removeChild(v):(m.parentNode.removeChild(m),aq.style.overflow=w),!!j
},Y=function(a){var c=at.matchMedia||at.msMatchMedia;
if(c){return c(a)&&c(a).matches||!1
}var b;
return Q("@media "+a+" { #"+ac+" { position: absolute; } }",function(d){b="absolute"==(at.getComputedStyle?getComputedStyle(d,null):d.currentStyle).position
}),b
},W=function(){function b(d,f){f=f||ae.createElement(a[d]||"div"),d="on"+d;
var c=d in f;
return c||(f.setAttribute||(f=ae.createElement("div")),f.setAttribute&&f.removeAttribute&&(f.setAttribute(d,""),c=ax(f[d],"function"),ax(f[d],"undefined")||(f[d]=aj),f.removeAttribute(d))),f=null,c
}var a={select:"input",change:"input",submit:"form",reset:"form",error:"img",load:"img",abort:"img"};
return b
}(),K={}.hasOwnProperty;
ar=ax(K,"undefined")||ax(K.call,"undefined")?function(b,a){return a in b&&ax(b.constructor.prototype[a],"undefined")
}:function(b,a){return K.call(b,a)
},Function.prototype.bind||(Function.prototype.bind=function(c){var a=this;
if("function"!=typeof a){throw new TypeError
}var d=U.call(arguments,1),b=function(){if(this instanceof b){var g=function(){};
g.prototype=a.prototype;
var e=new g,f=a.apply(e,d.concat(U.call(arguments)));
return Object(f)===f?f:e
}return a.apply(c,d.concat(U.call(arguments)))
};
return b
}),J.flexbox=function(){return ad("flexWrap")
},J.flexboxlegacy=function(){return ad("boxDirection")
},J.canvas=function(){var a=ae.createElement("canvas");
return !(!a.getContext||!a.getContext("2d"))
},J.canvastext=function(){return !(!ah.canvas||!ax(ae.createElement("canvas").getContext("2d").fillText,"function"))
},J.webgl=function(){return !!at.WebGLRenderingContext
},J.touch=function(){var a;
return"ontouchstart" in at||at.DocumentTouch&&ae instanceof DocumentTouch?a=!0:Q(["@media (",B.join("touch-enabled),("),ac,")","{#modernizr{top:9px;position:absolute}}"].join(""),function(b){a=9===b.offsetTop
}),a
},J.geolocation=function(){return"geolocation" in navigator
},J.postmessage=function(){return !!at.postMessage
},J.websqldatabase=function(){return !!at.openDatabase
},J.indexedDB=function(){return !!ad("indexedDB",at)
},J.hashchange=function(){return W("hashchange",at)&&(ae.documentMode===aj||ae.documentMode>7)
},J.history=function(){return !(!at.history||!history.pushState)
},J.draganddrop=function(){var a=ae.createElement("div");
return"draggable" in a||"ondragstart" in a&&"ondrop" in a
},J.websockets=function(){return"WebSocket" in at||"MozWebSocket" in at
},J.rgba=function(){return ag("background-color:rgba(150,255,150,.5)"),ao(aw.backgroundColor,"rgba")
},J.hsla=function(){return ag("background-color:hsla(120,40%,100%,.5)"),ao(aw.backgroundColor,"rgba")||ao(aw.backgroundColor,"hsla")
},J.multiplebgs=function(){return ag("background:url(https://),url(https://),red url(https://)"),/(url\s*\(.*?){3}/.test(aw.background)
},J.backgroundsize=function(){return ad("backgroundSize")
},J.borderimage=function(){return ad("borderImage")
},J.borderradius=function(){return ad("borderRadius")
},J.boxshadow=function(){return ad("boxShadow")
},J.textshadow=function(){return""===ae.createElement("div").style.textShadow
},J.opacity=function(){return ai("opacity:.55"),/^0.55$/.test(aw.opacity)
},J.cssanimations=function(){return ad("animationName")
},J.csscolumns=function(){return ad("columnCount")
},J.cssgradients=function(){var b="background-image:",a="gradient(linear,left top,right bottom,from(#9f9),to(white));",c="linear-gradient(left top,#9f9, white);";
return ag((b+"-webkit- ".split(" ").join(a+b)+B.join(c+b)).slice(0,-b.length)),ao(aw.backgroundImage,"gradient")
},J.cssreflections=function(){return ad("boxReflect")
},J.csstransforms=function(){return !!ad("transform")
},J.csstransforms3d=function(){var a=!!ad("perspective");
return a&&"webkitPerspective" in aq.style&&Q("@media (transform-3d),(-webkit-transform-3d){#modernizr{left:9px;position:absolute;height:3px;}}",function(b){a=9===b.offsetLeft&&3===b.offsetHeight
}),a
},J.csstransitions=function(){return ad("transition")
},J.fontface=function(){var a;
return Q('@font-face {font-family:"font";src:url("https://")}',function(f,d){var e=ae.getElementById("smodernizr"),b=e.sheet||e.styleSheet,c=b?b.cssRules&&b.cssRules[0]?b.cssRules[0].cssText:b.cssText||"":"";
a=/src/i.test(c)&&0===c.indexOf(d.split(" ")[0])
}),a
},J.generatedcontent=function(){var a;
return Q(["#",ac,"{font:0/0 a}#",ac,':after{content:"',aa,'";visibility:hidden;font:3px/1 a}'].join(""),function(b){a=b.offsetHeight>=3
}),a
},J.video=function(){var b=ae.createElement("video"),c=!1;
try{(c=!!b.canPlayType)&&(c=new Boolean(c),c.ogg=b.canPlayType('video/ogg; codecs="theora"').replace(/^no$/,""),c.h264=b.canPlayType('video/mp4; codecs="avc1.42E01E"').replace(/^no$/,""),c.webm=b.canPlayType('video/webm; codecs="vp8, vorbis"').replace(/^no$/,""))
}catch(a){}return c
},J.audio=function(){var b=ae.createElement("audio"),c=!1;
try{(c=!!b.canPlayType)&&(c=new Boolean(c),c.ogg=b.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/,""),c.mp3=b.canPlayType("audio/mpeg;").replace(/^no$/,""),c.wav=b.canPlayType('audio/wav; codecs="1"').replace(/^no$/,""),c.m4a=(b.canPlayType("audio/x-m4a;")||b.canPlayType("audio/aac;")).replace(/^no$/,""))
}catch(a){}return c
},J.localstorage=function(){try{return localStorage.setItem(ac,ac),localStorage.removeItem(ac),!0
}catch(a){return !1
}},J.sessionstorage=function(){try{return sessionStorage.setItem(ac,ac),sessionStorage.removeItem(ac),!0
}catch(a){return !1
}},J.webworkers=function(){return !!at.Worker
},J.applicationcache=function(){return !!at.applicationCache
},J.svg=function(){return !!ae.createElementNS&&!!ae.createElementNS(I.svg,"svg").createSVGRect
},J.inlinesvg=function(){var a=ae.createElement("div");
return a.innerHTML="<svg/>",(a.firstChild&&a.firstChild.namespaceURI)==I.svg
},J.smil=function(){return !!ae.createElementNS&&/SVGAnimate/.test(ab.call(ae.createElementNS(I.svg,"animate")))
},J.svgclippaths=function(){return !!ae.createElementNS&&/SVGClipPath/.test(ab.call(ae.createElementNS(I.svg,"clipPath")))
};
for(var O in J){ar(J,O)&&(au=O.toLowerCase(),ah[au]=J[O](),X.push((ah[au]?"":"no-")+au))
}return ah.input||al(),ah.addTest=function(c,a){if("object"==typeof c){for(var b in c){ar(c,b)&&ah.addTest(b,c[b])
}}else{if(c=c.toLowerCase(),ah[c]!==aj){return ah
}a="function"==typeof a?a():a,"undefined"!=typeof ap&&ap&&(aq.className+=" "+(a?"":"no-")+c),ah[c]=a
}return ah
},ag(""),Z=R=null,function(P,w){function D(d,a){var f=d.createElement("p"),c=d.getElementsByTagName("head")[0]||d.documentElement;
return f.innerHTML="x<style>"+a+"</style>",c.insertBefore(f.lastChild,c.firstChild)
}function z(){var a=b.elements;
return"string"==typeof a?a.split(" "):a
}function C(c){var a=j[c[L]];
return a||(a={},M++,c[L]=M,j[M]=a),a
}function ay(f,g,d){if(g||(g=w),F){return g.createElement(f)
}d||(d=C(g));
var c;
return c=d.cache[f]?d.cache[f].cloneNode():A.test(f)?(d.cache[f]=d.createElem(f)).cloneNode():d.createElem(f),!c.canHaveChildren||E.test(f)||c.tagUrn?c:d.frag.appendChild(c)
}function H(h,m){if(h||(h=w),F){return h.createDocumentFragment()
}m=m||C(h);
for(var d=m.frag.cloneNode(),f=0,l=z(),g=l.length;
g>f;
f++){d.createElement(l[f])
}return d
}function T(c,a){a.cache||(a.cache={},a.createElem=c.createElement,a.createFrag=c.createDocumentFragment,a.frag=a.createFrag()),c.createElement=function(d){return b.shivMethods?ay(d,c,a):a.createElem(d)
},c.createDocumentFragment=Function("h,f","return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&("+z().join().replace(/[\w\-]+/g,function(d){return a.createElem(d),a.frag.createElement(d),'c("'+d+'")'
})+");return n}")(b,a.frag)
}function x(c){c||(c=w);
var a=C(c);
return !b.shivCSS||k||a.hasCSS||(a.hasCSS=!!D(c,"article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}")),F||T(c,a),c
}var k,F,S="3.7.0",N=P.html5||{},E=/^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,A=/^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,L="_html5shiv",M=0,j={};
!function(){try{var a=w.createElement("a");
a.innerHTML="<xyz></xyz>",k="hidden" in a,F=1==a.childNodes.length||function(){w.createElement("a");
var d=w.createDocumentFragment();
return"undefined"==typeof d.cloneNode||"undefined"==typeof d.createDocumentFragment||"undefined"==typeof d.createElement
}()
}catch(c){k=!0,F=!0
}}();
var b={elements:N.elements||"abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output progress section summary template time video",version:S,shivCSS:N.shivCSS!==!1,supportsUnknownElements:F,shivMethods:N.shivMethods!==!1,type:"default",shivDocument:x,createElement:ay,createDocumentFragment:H};
P.html5=b,x(w)
}(this,ae),ah._version=ak,ah._prefixes=B,ah._domPrefixes=q,ah._cssomPrefixes=am,ah.mq=Y,ah.hasEvent=W,ah.testProp=function(a){return av([a])
},ah.testAllProps=ad,ah.testStyles=Q,ah.prefixed=function(b,a,c){return a?ad(b,a,c):ad(b,"pfx")
},aq.className=aq.className.replace(/(^|\s)no-js(\s|$)/,"$1$2")+(ap?" js "+X.join(" "):""),ah
}(this,this.document);