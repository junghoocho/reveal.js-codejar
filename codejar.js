!function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";function o(e,t,n={}){const o=Object.assign({tab:"\t"},n);let r,i,s=[],l=[],a=-1,d=!1,c=navigator.userAgent.toLowerCase().indexOf("firefox")>-1;e.setAttribute("contentEditable",c?"true":"plaintext-only"),e.setAttribute("spellcheck","false"),e.style.outline="none",e.style.overflowWrap="break-word",e.style.overflowY="auto",e.style.resize="vertical",e.style.whiteSpace="pre-wrap",t(e);const f=k(()=>{const n=h();t(e),b(n)},30);let u=!1;const p=e=>!O(e)&&!S(e)&&"Meta"!==e.key&&"Control"!==e.key&&"Alt"!==e.key&&!e.key.startsWith("Arrow"),g=k(e=>{p(e)&&(w(),u=!1)},300),y=(t,n)=>{s.push([t,n]),e.addEventListener(t,n)};function h(){const t=window.getSelection(),n={start:0,end:0,dir:void 0};return C(e,e=>{if(e===t.anchorNode&&e===t.focusNode)return n.start+=t.anchorOffset,n.end+=t.focusOffset,n.dir=t.anchorOffset<=t.focusOffset?"->":"<-","stop";if(e===t.anchorNode){if(n.start+=t.anchorOffset,n.dir)return"stop";n.dir="->"}else if(e===t.focusNode){if(n.end+=t.focusOffset,n.dir)return"stop";n.dir="<-"}e.nodeType===Node.TEXT_NODE&&("->"!=n.dir&&(n.start+=e.nodeValue.length),"<-"!=n.dir&&(n.end+=e.nodeValue.length))}),n}function b(t){const n=window.getSelection();let o,r,i=0,s=0;if(t.dir||(t.dir="->"),t.start<0&&(t.start=0),t.end<0&&(t.end=0),"<-"==t.dir){const{start:e,end:n}=t;t.start=n,t.end=e}let l=0;C(e,e=>{if(e.nodeType!==Node.TEXT_NODE)return;const n=(e.nodeValue||"").length;if(l+n>=t.start&&(o||(o=e,i=t.start-l),l+n>=t.end))return r=e,s=t.end-l,"stop";l+=n}),o||(o=e),r||(r=e),"<-"==t.dir&&([o,i,r,s]=[r,s,o,i]),n.setBaseAndExtent(o,i,r,s)}function m(){const t=window.getSelection().getRangeAt(0),n=document.createRange();return n.selectNodeContents(e),n.setEnd(t.startContainer,t.startOffset),n.toString()}function x(){const t=window.getSelection().getRangeAt(0),n=document.createRange();return n.selectNodeContents(e),n.setStart(t.endContainer,t.endOffset),n.toString()}function w(){if(!d)return;const t=e.innerHTML,n=h(),o=l[a];if(o&&o.html===t&&o.pos.start===n.start&&o.pos.end===n.end)return;a++,l[a]={html:t,pos:n},l.splice(a+1);a>300&&(a=300,l.splice(0,1))}function C(e,t){const n=[];e.firstChild&&n.push(e.firstChild);let o=n.pop();for(;o&&"stop"!==t(o);)o.nextSibling&&n.push(o.nextSibling),o.firstChild&&n.push(o.firstChild),o=n.pop()}function v(e){return e.metaKey||e.ctrlKey}function O(e){return v(e)&&!e.shiftKey&&"KeyZ"===e.code}function S(e){return v(e)&&e.shiftKey&&"KeyZ"===e.code}function T(e){e=e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#039;"),document.execCommand("insertHTML",!1,e)}function k(e,t){let n=0;return(...o)=>{clearTimeout(n),n=window.setTimeout(()=>e(...o),t)}}function j(e){let t=e.length-1;for(;t>=0&&"\n"!==e[t];)t--;t++;let n=t;for(;n<e.length&&/[ \t]/.test(e[n]);)n++;return[e.substring(t,n)||"",t,n]}function L(){return e.textContent||""}function E(e){e.preventDefault()}return y("keydown",t=>{t.defaultPrevented||(i=L(),function(e){if("Enter"===e.key){const t=m(),n=x();let[r]=j(t),i=r;if("{"===t[t.length-1]&&(i+=o.tab),(c||i.length>0)&&(E(e),T("\n"+i)),i!==r&&"}"===n[0]){const e=h();T("\n"+r),b(e)}}}(t),function(e){if("Tab"===e.key)if(E(e),e.shiftKey){const e=m();let[t,n]=j(e);if(t.length>0){const e=h(),r=Math.min(o.tab.length,t.length);b({start:n,end:n+r}),document.execCommand("delete"),e.start-=r,e.end-=r,b(e)}}else T(o.tab)}(t),function(e){if("ArrowLeft"===e.key&&e.metaKey){E(e);const t=m();let[n,o,r]=j(t);if(t.endsWith(n))if(e.shiftKey){const e=h();b({start:o,end:e.end})}else b({start:o,end:o});else if(e.shiftKey){const e=h();b({start:r,end:e.end})}else b({start:r,end:r})}}(t),function(e){const t="([{'\"",n=")]}'\"",o=x();if(n.includes(e.key)&&o.substr(0,1)===e.key){const t=h();E(e),t.start=++t.end,b(t)}else if(t.includes(e.key)){const o=h();E(e);T(e.key+n[t.indexOf(e.key)]),o.start=++o.end,b(o)}}(t),function(t){if(O(t)){E(t),a--;const n=l[a];n&&(e.innerHTML=n.html,b(n.pos)),a<0&&(a=0)}if(S(t)){E(t),a++;const n=l[a];n&&(e.innerHTML=n.html,b(n.pos)),a>=l.length&&a--}}(t),p(t)&&!u&&(w(),u=!0))}),y("keyup",e=>{e.defaultPrevented||e.isComposing||(i!==L()&&f(),g(e),r&&r(L()))}),y("focus",e=>{d=!0}),y("blur",e=>{d=!1}),y("paste",n=>{w(),function(n){E(n);const o=(n.originalEvent||n).clipboardData.getData("text/plain"),r=h();T(o),t(e),b({start:r.end+o.length,end:r.end+o.length})}(n),w(),r&&r(L())}),{updateOptions(e){e=Object.assign(Object.assign({},e),e)},updateCode(n){e.textContent=n,t(e)},onUpdate(e){r=e},toString:L,destroy(){for(let[t,n]of s)e.removeEventListener(t,n)}}}function r(e,t={}){const n=Object.assign({class:"codejar-linenumbers",wrapClass:"codejar-wrap",width:"35px",backgroundColor:"rgba(255, 255, 255, 0.05)",color:""},t);let o;return function(t){e(t),o||(o=function(e,t){const n=getComputedStyle(e),o=document.createElement("div");o.className=t.wrapClass,o.style.position="relative";const r=document.createElement("div");return r.className=t.class,o.appendChild(r),r.style.position="absolute",r.style.top="0px",r.style.left="0px",r.style.bottom="0px",r.style.width=t.width,r.style.overflow="hidden",r.style.backgroundColor=t.backgroundColor,r.style.color=t.color||n.color,r.style.setProperty("mix-blend-mode","difference"),r.style.fontFamily=n.fontFamily,r.style.fontSize=n.fontSize,r.style.lineHeight=n.lineHeight,r.style.paddingTop=n.paddingTop,r.style.paddingLeft=n.paddingLeft,r.style.borderTopLeftRadius=n.borderTopLeftRadius,r.style.borderBottomLeftRadius=n.borderBottomLeftRadius,e.style.paddingLeft=`calc(${t.width} + ${r.style.paddingLeft})`,e.style.whiteSpace="pre",e.parentNode.insertBefore(o,e),o.appendChild(e),r}(t,n));const r=(t.textContent||"").replace(/\n+$/,"\n").split("\n").length+1;let i="";for(let e=1;e<r;e++)i+=e+"\n";o.innerText=i}}n.r(t);let i={},s=null,l=null;function a(e){e.textContent=e.textContent,l&&l.highlightBlock(e)}function d(){if(s.isReady()){s.getPlugin("highlight")&&(l=s.getPlugin("highlight").hljs);for(let e of s.getRevealElement().querySelectorAll(".codejar")){let t=a;e.hasAttribute("data-line-numbers")&&"false"!==e.getAttribute("data-line-numbers").toLowerCase()&&(t=r(a)),e.addEventListener("keypress",e=>{e.stopPropagation()}),o(e,t,i)}}else s.on("ready",d)}window.RevealCodeJar=window.RevealCodeJar||{id:"codejar",init:function(e){s=e,s.getConfig().codejar&&Object.assign(i,s.getConfig().codejar);let t=document.getElementsByTagName("head")[0],n=document.createElement("style");n.type="text/css",n.innerHTML='.codejar { border-radius: 6px; box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12), 0 3px 1px -2px rgba(0, 0, 0, 0.2); font-family: "Source Code Pro", monospace; font-size: 1em; line-height: 1.2em; padding: 10px; tab-size: 4; }',t.appendChild(n),d()}}}]);