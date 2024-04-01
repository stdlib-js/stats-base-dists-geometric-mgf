// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var r="function"==typeof Object.defineProperty?Object.defineProperty:null;var e=Object.defineProperty;function t(r){return"number"==typeof r}function n(r){var e,t="";for(e=0;e<r;e++)t+="0";return t}function i(r,e,t){var i=!1,a=e-r.length;return a<0||(function(r){return"-"===r[0]}(r)&&(i=!0,r=r.substr(1)),r=t?r+n(a):n(a)+r,i&&(r="-"+r)),r}var a=String.prototype.toLowerCase,o=String.prototype.toUpperCase;function c(r){var e,n,c;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(n=r.arg,c=parseInt(n,10),!isFinite(c)){if(!t(n))throw new Error("invalid integer. Value: "+n);c=0}return c<0&&("u"===r.specifier||10!==e)&&(c=4294967295+c+1),c<0?(n=(-c).toString(e),r.precision&&(n=i(n,r.precision,r.padRight)),n="-"+n):(n=c.toString(e),c||r.precision?r.precision&&(n=i(n,r.precision,r.padRight)):n="",r.sign&&(n=r.sign+n)),16===e&&(r.alternate&&(n="0x"+n),n=r.specifier===o.call(r.specifier)?o.call(n):a.call(n)),8===e&&r.alternate&&"0"!==n.charAt(0)&&(n="0"+n),n}var u=Math.abs,f=String.prototype.toLowerCase,s=String.prototype.toUpperCase,l=String.prototype.replace,p=/e\+(\d)$/,y=/e-(\d)$/,g=/^(\d+)$/,v=/^(\d+)e/,d=/\.0$/,h=/\.0*e/,w=/(\..*[^0])0*e/;function b(r){var e,n,i=parseFloat(r.arg);if(!isFinite(i)){if(!t(r.arg))throw new Error("invalid floating-point number. Value: "+n);i=r.arg}switch(r.specifier){case"e":case"E":n=i.toExponential(r.precision);break;case"f":case"F":n=i.toFixed(r.precision);break;case"g":case"G":u(i)<1e-4?((e=r.precision)>0&&(e-=1),n=i.toExponential(e)):n=i.toPrecision(r.precision),r.alternate||(n=l.call(n,w,"$1e"),n=l.call(n,h,"e"),n=l.call(n,d,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return n=l.call(n,p,"e+0$1"),n=l.call(n,y,"e-0$1"),r.alternate&&(n=l.call(n,g,"$1."),n=l.call(n,v,"$1.e")),i>=0&&r.sign&&(n=r.sign+n),n=r.specifier===s.call(r.specifier)?s.call(n):f.call(n)}function m(r){var e,t="";for(e=0;e<r;e++)t+=" ";return t}var A=String.fromCharCode,_=isNaN,E=Array.isArray;function U(r){var e={};return e.specifier=r.specifier,e.precision=void 0===r.precision?1:r.precision,e.width=r.width,e.flags=r.flags||"",e.mapping=r.mapping,e}function I(r){var e,t,n,a,o,u,f,s,l,p,y,g,v;if(!E(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(u="",f=1,s=0;s<r.length;s++)if(n=r[s],"string"==typeof n)u+=n;else{if(e=void 0!==n.precision,!(n=U(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+s+"`. Value: `"+n+"`.");for(n.mapping&&(f=n.mapping),t=n.flags,l=0;l<t.length;l++)switch(a=t.charAt(l)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=t.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+a)}if("*"===n.width){if(n.width=parseInt(arguments[f],10),f+=1,_(n.width))throw new TypeError("the argument for * width at position "+f+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(e&&"*"===n.precision){if(n.precision=parseInt(arguments[f],10),f+=1,_(n.precision))throw new TypeError("the argument for * precision at position "+f+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,e=!1)}switch(n.arg=arguments[f],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(n.padZeros=!1),n.arg=c(n);break;case"s":n.maxWidth=e?n.precision:-1;break;case"c":if(!_(n.arg)){if((o=parseInt(n.arg,10))<0||o>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=_(o)?String(n.arg):A(o)}break;case"e":case"E":case"f":case"F":case"g":case"G":e||(n.precision=6),n.arg=b(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=i(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=(p=n.arg,y=n.width,g=n.padRight,v=void 0,(v=y-p.length)<0?p:p=g?p+m(v):m(v)+p)),u+=n.arg||"",f+=1}return u}var N=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function S(r){var e={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(e.precision="1"),e}function x(r){var e,t,n,i;for(t=[],i=0,n=N.exec(r);n;)(e=r.slice(i,N.lastIndex-n[0].length)).length&&t.push(e),t.push(S(n)),i=N.lastIndex,n=N.exec(r);return(e=r.slice(i)).length&&t.push(e),t}function k(r){var e,t;if("string"!=typeof r)throw new TypeError(k("invalid argument. First argument must be a string. Value: `%s`.",r));for(e=[x(r)],t=1;t<arguments.length;t++)e.push(arguments[t]);return I.apply(null,e)}var F=Object.prototype,j=F.toString,T=F.__defineGetter__,O=F.__defineSetter__,V=F.__lookupGetter__,$=F.__lookupSetter__;var G=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?e:function(r,e,t){var n,i,a,o;if("object"!=typeof r||null===r||"[object Array]"===j.call(r))throw new TypeError(k("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof t||null===t||"[object Array]"===j.call(t))throw new TypeError(k("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((i="value"in t)&&(V.call(r,e)||$.call(r,e)?(n=r.__proto__,r.__proto__=F,delete r[e],r[e]=t.value,r.__proto__=n):r[e]=t.value),a="get"in t,o="set"in t,i&&(a||o))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return a&&T&&T.call(r,e,t.get),o&&O&&O.call(r,e,t.set),r};function H(r,e,t){G(r,e,{configurable:!1,enumerable:!1,writable:!1,value:t})}function W(r){return r>=0&&r<=1}function C(r){return r!=r}var L=Math.floor,P=Math.ceil;function R(r){return r<0?P(r):L(r)}var Z=Number.NEGATIVE_INFINITY,M=Number.POSITIVE_INFINITY,X=1023,Y=1023,z=-1023,q=-1074;function B(r){return r===M||r===Z}var D=2147483648,J=2147483647;var K="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");var Q=Object.prototype.toString;var rr=Object.prototype.hasOwnProperty;var er="function"==typeof Symbol?Symbol:void 0,tr="function"==typeof er?er.toStringTag:"";var nr=K&&"symbol"==typeof Symbol.toStringTag?function(r){var e,t,n,i,a;if(null==r)return Q.call(r);t=r[tr],a=tr,e=null!=(i=r)&&rr.call(i,a);try{r[tr]=void 0}catch(e){return Q.call(r)}return n=Q.call(r),e?r[tr]=t:delete r[tr],n}:function(r){return Q.call(r)},ir="function"==typeof Uint32Array;var ar="function"==typeof Uint32Array?Uint32Array:null;var or,cr="function"==typeof Uint32Array?Uint32Array:void 0;or=function(){var r,e,t;if("function"!=typeof ar)return!1;try{e=new ar(e=[1,3.14,-3.14,4294967296,4294967297]),t=e,r=(ir&&t instanceof Uint32Array||"[object Uint32Array]"===nr(t))&&1===e[0]&&3===e[1]&&4294967293===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?cr:function(){throw new Error("not implemented")};var ur=or,fr="function"==typeof Float64Array;var sr="function"==typeof Float64Array?Float64Array:null;var lr,pr="function"==typeof Float64Array?Float64Array:void 0;lr=function(){var r,e,t;if("function"!=typeof sr)return!1;try{e=new sr([1,3.14,-3.14,NaN]),t=e,r=(fr&&t instanceof Float64Array||"[object Float64Array]"===nr(t))&&1===e[0]&&3.14===e[1]&&-3.14===e[2]&&e[3]!=e[3]}catch(e){r=!1}return r}()?pr:function(){throw new Error("not implemented")};var yr=lr,gr="function"==typeof Uint8Array;var vr="function"==typeof Uint8Array?Uint8Array:null;var dr,hr="function"==typeof Uint8Array?Uint8Array:void 0;dr=function(){var r,e,t;if("function"!=typeof vr)return!1;try{e=new vr(e=[1,3.14,-3.14,256,257]),t=e,r=(gr&&t instanceof Uint8Array||"[object Uint8Array]"===nr(t))&&1===e[0]&&3===e[1]&&253===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?hr:function(){throw new Error("not implemented")};var wr=dr,br="function"==typeof Uint16Array;var mr="function"==typeof Uint16Array?Uint16Array:null;var Ar,_r="function"==typeof Uint16Array?Uint16Array:void 0;Ar=function(){var r,e,t;if("function"!=typeof mr)return!1;try{e=new mr(e=[1,3.14,-3.14,65536,65537]),t=e,r=(br&&t instanceof Uint16Array||"[object Uint16Array]"===nr(t))&&1===e[0]&&3===e[1]&&65533===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?_r:function(){throw new Error("not implemented")};var Er,Ur={uint16:Ar,uint8:wr};(Er=new Ur.uint16(1))[0]=4660;var Ir,Nr,Sr=52===new Ur.uint8(Er.buffer)[0];!0===Sr?(Ir=1,Nr=0):(Ir=0,Nr=1);var xr={HIGH:Ir,LOW:Nr},kr=new yr(1),Fr=new ur(kr.buffer),jr=xr.HIGH,Tr=xr.LOW;function Or(r,e,t,n){return kr[0]=r,e[n]=Fr[jr],e[n+t]=Fr[Tr],e}function Vr(r){return Or(r,[0,0],1,0)}H(Vr,"assign",Or);var $r,Gr,Hr=!0===Sr?1:0,Wr=new yr(1),Cr=new ur(Wr.buffer);function Lr(r){return Wr[0]=r,Cr[Hr]}!0===Sr?($r=1,Gr=0):($r=0,Gr=1);var Pr={HIGH:$r,LOW:Gr},Rr=new yr(1),Zr=new ur(Rr.buffer),Mr=Pr.HIGH,Xr=Pr.LOW;function Yr(r,e){return Zr[Mr]=r,Zr[Xr]=e,Rr[0]}var zr=[0,0];var qr=22250738585072014e-324;var Br=4503599627370496;function Dr(r,e,t,n){return C(r)||B(r)?(e[n]=r,e[n+t]=0,e):0!==r&&function(r){return Math.abs(r)}(r)<qr?(e[n]=r*Br,e[n+t]=-52,e):(e[n]=r,e[n+t]=0,e)}H((function(r){return Dr(r,[0,0],1,0)}),"assign",Dr);var Jr=2146435072;var Kr=2220446049250313e-31,Qr=2148532223,re=[0,0],ee=[0,0];function te(r,e){var t,n,i,a,o,c;return 0===e||0===r||C(r)||B(r)?r:(Dr(r,re,1,0),r=re[0],e+=re[1],e+=function(r){var e=Lr(r);return(e=(e&Jr)>>>20)-X|0}(r),e<q?(i=0,a=r,Vr.assign(i,zr,1,0),o=zr[0],o&=J,c=Lr(a),Yr(o|=c&=D,zr[1])):e>Y?r<0?Z:M:(e<=z?(e+=52,n=Kr):n=1,Vr.assign(r,ee,1,0),t=ee[0],t&=Qr,n*Yr(t|=e+X<<20,ee[1])))}var ne=.6931471803691238,ie=1.9082149292705877e-10,ae=1.4426950408889634,oe=709.782712893384,ce=-745.1332191019411,ue=1/(1<<28),fe=-ue;function se(r){var e;return C(r)||r===M?r:r===Z?0:r>oe?M:r<ce?0:r>fe&&r<ue?1+r:function(r,e,t){var n,i,a,o;return te(1-(e-(n=r-e)*(a=n-(i=n*n)*(0===(o=i)?.16666666666666602:.16666666666666602+o*(o*(6613756321437934e-20+o*(4.1381367970572385e-8*o-16533902205465252e-22))-.0027777777777015593)))/(2-a)-r),t)}(r-(e=R(r<0?ae*r-.5:ae*r+.5))*ne,e*ie,e)}var le=!0===Sr?1:0,pe=new yr(1),ye=new ur(pe.buffer);var ge=.6931471803691238,ve=1.9082149292705877e-10,de=0x40000000000000,he=.3333333333333333,we=1048575,be=2146435072,me=1048576,Ae=1072693248;function _e(r){var e,t,n,i,a,o,c,u,f,s,l,p;return 0===r?Z:C(r)||r<0?NaN:(a=0,(t=Lr(r))<me&&(a-=54,t=Lr(r*=de)),t>=be?r+r:(a+=(t>>20)-X|0,a+=(u=(t&=we)+614244&1048576|0)>>20|0,c=(r=function(r,e){return pe[0]=r,ye[le]=e>>>0,pe[0]}(r,t|u^Ae))-1,(we&2+t)<3?0===c?0===a?0:a*ge+a*ve:(o=c*c*(.5-he*c),0===a?c-o:a*ge-(o-a*ve-c)):(u=t-398458|0,f=440401-t|0,i=(l=(p=(s=c/(2+c))*s)*p)*function(r){return 0===r?.3999999999940942:.3999999999940942+r*(.22222198432149784+.15313837699209373*r)}(l),n=p*function(r){return 0===r?.6666666666666735:.6666666666666735+r*(.2857142874366239+r*(.1818357216161805+.14798198605116586*r))}(l),o=n+i,(u|=f)>0?(e=.5*c*c,0===a?c-(e-s*(e+o)):a*ge-(e-(s*(e+o)+a*ve)-c)):0===a?c-s*(c-o):a*ge-(s*(c-o)-a*ve-c))))}function Ee(r,e){var t,n;return C(r)||!W(e)||r>=-_e(n=1-e)?NaN:e*(t=se(r))/(1-n*t)}function Ue(r){return W(r)?function(e){var t,n;if(C(e))return NaN;if(e>=-_e(n=1-r))return NaN;return t=se(e),r*t/(1-n*t)}:(e=NaN,function(){return e});var e}H(Ee,"factory",Ue);export{Ee as default,Ue as factory};
//# sourceMappingURL=mod.js.map
