!function(){function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},i={};Object.defineProperty(i,"__esModule",{value:!0}),i.default=function(e){return e&&e.constructor===Symbol?"symbol":typeof e};var r="Expected a function",o=/^\s+|\s+$/g,a=/^[-+]0x[0-9a-f]+$/i,u=/^0b[01]+$/i,f=/^0o[0-7]+$/i,l=parseInt,c="object"==typeof n&&n&&n.Object===Object&&n,s="object"==typeof self&&self&&self.Object===Object&&self,d=c||s||Function("return this")(),m=Object.prototype.toString,v=Math.max,g=Math.min,p=function(){return d.Date.now()};function y(e,t,n){var i,o,a,u,f,l,c=0,s=!1,d=!1,m=!0;if("function"!=typeof e)throw new TypeError(r);function y(t){var n=i,r=o;return i=o=void 0,c=t,u=e.apply(r,n)}function w(e){return c=e,f=setTimeout(O,t),s?y(e):u}function S(e){var n=e-l;return void 0===l||n>=t||n<0||d&&e-c>=a}function O(){var e=p();if(S(e))return h(e);f=setTimeout(O,function(e){var n=t-(e-l);return d?g(n,a-(e-c)):n}(e))}function h(e){return f=void 0,m&&i?y(e):(i=o=void 0,u)}function T(){var e=p(),n=S(e);if(i=arguments,o=this,l=e,n){if(void 0===f)return w(l);if(d)return f=setTimeout(O,t),y(l)}return void 0===f&&(f=setTimeout(O,t)),u}return t=j(t)||0,b(n)&&(s=!!n.leading,a=(d="maxWait"in n)?v(j(n.maxWait)||0,t):a,m="trailing"in n?!!n.trailing:m),T.cancel=function(){void 0!==f&&clearTimeout(f),c=0,i=l=o=f=void 0},T.flush=function(){return void 0===f?u:h(p())},T}function b(t){var n=void 0===t?"undefined":e(i)(t);return!!t&&("object"==n||"function"==n)}function j(t){if("number"==typeof t)return t;if(function(t){return"symbol"==(void 0===t?"undefined":e(i)(t))||function(e){return!!e&&"object"==typeof e}(t)&&"[object Symbol]"==m.call(t)}(t))return NaN;if(b(t)){var n="function"==typeof t.valueOf?t.valueOf():t;t=b(n)?n+"":n}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(o,"");var r=u.test(t);return r||f.test(t)?l(t.slice(2),r?2:8):a.test(t)?NaN:+t}t=function(e,t,n){var i=!0,o=!0;if("function"!=typeof e)throw new TypeError(r);return b(n)&&(i="leading"in n?!!n.leading:i,o="trailing"in n?!!n.trailing:o),y(e,t,{leading:i,maxWait:t,trailing:o})};var w=document.querySelector(".feedback-form"),S=w.querySelector("textarea[name='message']"),O=w.querySelector("input[name='email']"),h="feedback-form-state",T={email:"",message:""};w.addEventListener("input",e(t)((function(e){var t=e.target,n=t.value,i=t.name;T[i]=n,localStorage.setItem(h,JSON.stringify(T))}),500)),w.addEventListener("submit",(function(e){e.preventDefault(),""!==T.email.trim()&&""!==T.message.trim()&&(console.log(T),w.reset(),localStorage.removeItem(h),T.email="",T.message="")})),window.addEventListener("load",(function(){var e=JSON.parse(localStorage.getItem(h));e&&(O.value=e.email,S.value=e.message,T.email=e.email,T.message=e.message)}))}();
//# sourceMappingURL=03-feedback.c08f9d43.js.map