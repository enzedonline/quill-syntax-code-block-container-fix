(()=>{"use strict";var e={156:function(e,t,r){var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const o=n(r(663)),a=o.default.import("formats/code-block-container");class u extends a{html(e,t){const r=super.html(e,t),n=document.createElement("div");n.innerHTML=r;const o=n.querySelector("pre");if(o){const e=o.getAttribute("data-language")||"",t=document.createElement("code");return e&&(t.className=`language-${e}`),t.innerHTML=o.innerHTML,o.innerHTML="",o.removeAttribute("data-language"),o.appendChild(t),o.outerHTML}return r}}o.default.register("formats/code-block-container",u,!0),t.default=u},663:e=>{e.exports=window.Quill}},t={},r=function r(n){var o=t[n];if(void 0!==o)return o.exports;var a=t[n]={exports:{}};return e[n].call(a.exports,a,a.exports,r),a.exports}(156);window.QuillSyntaxCodeBlockContainer=r})();