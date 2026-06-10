"use strict";var u=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var v=u(function(R,n){
var o=require('@stdlib/math-base-assert-is-probability/dist'),c=require('@stdlib/math-base-assert-is-nan/dist'),N=require('@stdlib/math-base-special-exp/dist'),y=require('@stdlib/math-base-special-ln/dist');function l(e,r){var i,a;return c(e)||!o(r)?NaN:(a=1-r,e>=-y(a)?NaN:(i=N(e),r*i/(1-a*i)))}n.exports=l
});var q=u(function(h,s){
var x=require('@stdlib/utils-constant-function/dist'),b=require('@stdlib/math-base-assert-is-probability/dist'),m=require('@stdlib/math-base-assert-is-nan/dist'),g=require('@stdlib/math-base-special-exp/dist'),P=require('@stdlib/math-base-special-ln/dist');function d(e){if(!b(e))return x(NaN);return r;function r(i){var a,t;return m(i)?NaN:(t=1-e,i>=-P(t)?NaN:(a=g(i),e*a/(1-t*a)))}}s.exports=d
});var p=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),f=v(),F=q();p(f,"factory",F);module.exports=f;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
