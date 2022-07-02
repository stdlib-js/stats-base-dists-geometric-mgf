// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var r="function"==typeof Object.defineProperty?Object.defineProperty:null;var n=function(){try{return r({},"x",{}),!0}catch(r){return!1}},t=Object.defineProperty,e=Object.prototype,o=e.toString,a=e.__defineGetter__,u=e.__defineSetter__,i=e.__lookupGetter__,f=e.__lookupSetter__;var c=t,l=function(r,n,t){var c,l,y,v;if("object"!=typeof r||null===r||"[object Array]"===o.call(r))throw new TypeError("invalid argument. First argument must be an object. Value: `"+r+"`.");if("object"!=typeof t||null===t||"[object Array]"===o.call(t))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+t+"`.");if((l="value"in t)&&(i.call(r,n)||f.call(r,n)?(c=r.__proto__,r.__proto__=e,delete r[n],r[n]=t.value,r.__proto__=c):r[n]=t.value),y="get"in t,v="set"in t,l&&(y||v))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return y&&a&&a.call(r,n,t.get),v&&u&&u.call(r,n,t.set),r},y=n()?c:l;var v=function(r,n,t){y(r,n,{configurable:!1,enumerable:!1,writable:!1,value:t})};var p=function(r){return r>=0&&r<=1};var b=function(r){return r!=r},w=Math.floor,A=Math.ceil,_=w,m=A;var d=function(r){return r<0?m(r):_(r)},U=Number.NEGATIVE_INFINITY,h=Number.POSITIVE_INFINITY,s=h,N=U;var j=function(r){return r===s||r===N};var g=function(){return"function"==typeof Symbol&&"symbol"==typeof Symbol("foo")}();var I=function(){return g&&"symbol"==typeof Symbol.toStringTag},O=Object.prototype.toString,S=O;var E=function(r){return S.call(r)},F=Object.prototype.hasOwnProperty;var H=function(r,n){return null!=r&&F.call(r,n)},T="function"==typeof Symbol?Symbol.toStringTag:"",G=H,P=T,L=O;var V=E,W=function(r){var n,t,e;if(null==r)return L.call(r);t=r[P],n=G(r,P);try{r[P]=void 0}catch(n){return L.call(r)}return e=L.call(r),n?r[P]=t:delete r[P],e},x=I()?W:V,M=x,k="function"==typeof Uint32Array;var Y="function"==typeof Uint32Array?Uint32Array:null,C=function(r){return k&&r instanceof Uint32Array||"[object Uint32Array]"===M(r)},q=Y;var z=function(){var r,n;if("function"!=typeof q)return!1;try{n=new q(n=[1,3.14,-3.14,4294967296,4294967297]),r=C(n)&&1===n[0]&&3===n[1]&&4294967293===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r};var B="function"==typeof Uint32Array?Uint32Array:void 0,D=function(){throw new Error("not implemented")},J=z()?B:D,K=x,Q="function"==typeof Float64Array;var R="function"==typeof Float64Array?Float64Array:null,X=function(r){return Q&&r instanceof Float64Array||"[object Float64Array]"===K(r)},Z=R;var $=function(){var r,n;if("function"!=typeof Z)return!1;try{n=new Z([1,3.14,-3.14,NaN]),r=X(n)&&1===n[0]&&3.14===n[1]&&-3.14===n[2]&&n[3]!=n[3]}catch(n){r=!1}return r};var rr="function"==typeof Float64Array?Float64Array:void 0,nr=function(){throw new Error("not implemented")},tr=$()?rr:nr,er=x,or="function"==typeof Uint8Array;var ar="function"==typeof Uint8Array?Uint8Array:null,ur=function(r){return or&&r instanceof Uint8Array||"[object Uint8Array]"===er(r)},ir=ar;var fr=function(){var r,n;if("function"!=typeof ir)return!1;try{n=new ir(n=[1,3.14,-3.14,256,257]),r=ur(n)&&1===n[0]&&3===n[1]&&253===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r};var cr="function"==typeof Uint8Array?Uint8Array:void 0,lr=function(){throw new Error("not implemented")},yr=fr()?cr:lr,vr=x,pr="function"==typeof Uint16Array;var br="function"==typeof Uint16Array?Uint16Array:null,wr=function(r){return pr&&r instanceof Uint16Array||"[object Uint16Array]"===vr(r)},Ar=br;var _r=function(){var r,n;if("function"!=typeof Ar)return!1;try{n=new Ar(n=[1,3.14,-3.14,65536,65537]),r=wr(n)&&1===n[0]&&3===n[1]&&65533===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r};var mr,dr="function"==typeof Uint16Array?Uint16Array:void 0,Ur=function(){throw new Error("not implemented")},hr={uint16:_r()?dr:Ur,uint8:yr};(mr=new hr.uint16(1))[0]=4660;var sr,Nr,jr=52===new hr.uint8(mr.buffer)[0];!0===jr?(sr=1,Nr=0):(sr=0,Nr=1);var gr=J,Ir={HIGH:sr,LOW:Nr},Or=new tr(1),Sr=new gr(Or.buffer),Er=Ir.HIGH,Fr=Ir.LOW;var Hr=function(r,n){return Or[0]=n,r[0]=Sr[Er],r[1]=Sr[Fr],r};var Tr=function(r,n){return 1===arguments.length?Hr([0,0],r):Hr(r,n)},Gr=J,Pr=!0===jr?1:0,Lr=new tr(1),Vr=new Gr(Lr.buffer);var Wr,xr,Mr=function(r){return Lr[0]=r,Vr[Pr]};!0===jr?(Wr=1,xr=0):(Wr=0,xr=1);var kr=J,Yr={HIGH:Wr,LOW:xr},Cr=new tr(1),qr=new kr(Cr.buffer),zr=Yr.HIGH,Br=Yr.LOW;var Dr=function(r,n){return qr[zr]=r,qr[Br]=n,Cr[0]},Jr=Tr,Kr=Mr,Qr=Dr,Rr=[0,0];var Xr=j,Zr=b,$r=function(r){return Math.abs(r)};var rn=function(r,n){return Zr(n)||Xr(n)?(r[0]=n,r[1]=0,r):0!==n&&$r(n)<22250738585072014e-324?(r[0]=4503599627370496*n,r[1]=-52,r):(r[0]=n,r[1]=0,r)};var nn=Mr;var tn=function(r){var n=nn(r);return(n=(2146435072&n)>>>20)-1023|0},en=h,on=U,an=b,un=j,fn=function(r,n){var t,e;return Jr(Rr,r),t=Rr[0],t&=2147483647,e=Kr(n),Qr(t|=e&=2147483648,Rr[1])},cn=function(r,n){return 1===arguments.length?rn([0,0],r):rn(r,n)},ln=tn,yn=Tr,vn=Dr,pn=[0,0],bn=[0,0];var wn=function(r,n){var t,e;return 0===n||0===r||an(r)||un(r)?r:(cn(pn,r),n+=pn[1],(n+=ln(r=pn[0]))<-1074?fn(0,r):n>1023?r<0?on:en:(n<=-1023?(n+=52,e=2220446049250313e-31):e=1,yn(bn,r),t=bn[0],t&=2148532223,e*vn(t|=n+1023<<20,bn[1])))};var An=wn,_n=function(r){return 0===r?.16666666666666602:.16666666666666602+r*(r*(6613756321437934e-20+r*(4.1381367970572385e-8*r-16533902205465252e-22))-.0027777777777015593)};var mn=b,dn=d,Un=U,hn=h,sn=function(r,n,t){var e,o,a;return a=(e=r-n)-(o=e*e)*_n(o),An(1-(n-e*a/(2-a)-r),t)};var Nn=function(r){var n;return mn(r)||r===hn?r:r===Un?0:r>709.782712893384?hn:r<-745.1332191019411?0:r>-3.725290298461914e-9&&r<3.725290298461914e-9?1+r:(n=dn(r<0?1.4426950408889634*r-.5:1.4426950408889634*r+.5),sn(r-.6931471803691238*n,1.9082149292705877e-10*n,n))},jn=J,gn=!0===jr?1:0,In=new tr(1),On=new jn(In.buffer);var Sn=function(r,n){return In[0]=r,On[gn]=n>>>0,In[0]};var En=Mr,Fn=Sn,Hn=b,Tn=U,Gn=function(r){return 0===r?.3999999999940942:.3999999999940942+r*(.22222198432149784+.15313837699209373*r)},Pn=function(r){return 0===r?.6666666666666735:.6666666666666735+r*(.2857142874366239+r*(.1818357216161805+.14798198605116586*r))},Ln=.6931471803691238,Vn=1.9082149292705877e-10;var Wn=function(r){var n,t,e,o,a,u,i,f,c,l,y;return 0===r?Tn:Hn(r)||r<0?NaN:(o=0,(t=En(r))<1048576&&(o-=54,t=En(r*=0x40000000000000)),t>=2146435072?r+r:(o+=(t>>20)-1023|0,o+=(i=(t&=1048575)+614244&1048576|0)>>20|0,u=(r=Fn(r,t|1072693248^i))-1,(1048575&2+t)<3?0===u?0===o?0:o*Ln+o*Vn:(a=u*u*(.5-.3333333333333333*u),0===o?u-a:o*Ln-(a-o*Vn-u)):(i=t-398458|0,f=440401-t|0,e=(l=(y=(c=u/(2+u))*c)*y)*Gn(l),a=y*Pn(l)+e,(i|=f)>0?(n=.5*u*u,0===o?u-(n-c*(n+a)):o*Ln-(n-(c*(n+a)+o*Vn)-u)):0===o?u-c*(u-a):o*Ln-(c*(u-a)-o*Vn-u))))};function xn(r,n){var t,e;return b(r)||!p(n)||r>=-Wn(e=1-n)?NaN:n*(t=Nn(r))/(1-e*t)}var Mn=function(r){return function(){return r}};function kn(r){return p(r)?function(n){var t,e;if(b(n))return NaN;if(n>=-Wn(e=1-r))return NaN;return t=Nn(n),r*t/(1-e*t)}:Mn(NaN)}v(xn,"factory",kn);export{xn as default,kn as factory};
//# sourceMappingURL=mod.js.map
