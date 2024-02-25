// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import t from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@v0.2.1-esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-assert-is-probability@v0.2.1-esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-assert-is-nan@v0.2.1-esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-exp@v0.1.0-esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-ln@v0.2.1-esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-constant-function@v0.2.1-esm/index.mjs";function m(t,r){var m,d;return e(t)||!s(r)||t>=-i(d=1-r)?NaN:r*(m=n(t))/(1-d*m)}function d(t){return s(t)?function(s){var r,m;if(e(s))return NaN;if(s>=-i(m=1-t))return NaN;return r=n(s),t*r/(1-m*r)}:r(NaN)}t(m,"factory",d);export{m as default,d as factory};
//# sourceMappingURL=index.mjs.map
