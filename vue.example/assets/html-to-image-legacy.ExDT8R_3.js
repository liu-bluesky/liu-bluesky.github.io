System.register([],(function(t,e){"use strict";return{execute:function(){t("t",(async function(t,e={}){return(await async function(t,e={}){const{width:r,height:s}=o(t,e),a=await async function(t,e={}){const{width:r,height:i}=o(t,e),c=await x(t,e,!0);await async function(t,e){const r=null!=e.fontEmbedCSS?e.fontEmbedCSS:e.skipFonts?null:await async function(t,e){const r=await async function(t,e){if(null==t.ownerDocument)throw new Error("Provided element is not within a Document");const r=n(t.ownerDocument.styleSheets),o=await async function(t,e){const r=[],o=[];return t.forEach((r=>{if("cssRules"in r)try{n(r.cssRules||[]).forEach(((t,n)=>{if(t.type===CSSRule.IMPORT_RULE){let i=n+1;const c=I(t.href).then((t=>k(t,e))).then((t=>M(t).forEach((t=>{try{r.insertRule(t,t.startsWith("@import")?i+=1:r.cssRules.length)}catch(e){console.error("Error inserting rule from remote css",{rule:t,error:e})}})))).catch((t=>{console.error("Error loading remote css",t.toString())}));o.push(c)}}))}catch(i){const n=t.find((t=>null==t.href))||document.styleSheets[0];null!=r.href&&o.push(I(r.href).then((t=>k(t,e))).then((t=>M(t).forEach((t=>{n.insertRule(t,r.cssRules.length)})))).catch((t=>{console.error("Error loading remote stylesheet",t)}))),console.error("Error inlining remote css file",i)}})),Promise.all(o).then((()=>(t.forEach((t=>{if("cssRules"in t)try{n(t.cssRules||[]).forEach((t=>{r.push(t)}))}catch(e){console.error(`Error while reading CSS rules from ${t.href}`,e)}})),r)))}(r,e);return function(t){return t.filter((t=>t.type===CSSRule.FONT_FACE_RULE)).filter((t=>R(t.style.getPropertyValue("src"))))}(o)}(t,e),o=await Promise.all(r.map((t=>{const n=t.parentStyleSheet?t.parentStyleSheet.href:null;return T(t.cssText,n,e)})));return o.join("\n")}(t,e);if(r){const e=document.createElement("style"),n=document.createTextNode(r);e.appendChild(n),t.firstChild?t.insertBefore(e,t.firstChild):t.appendChild(e)}}(c,e),await L(c,e),function(t,e){const{style:n}=t;e.backgroundColor&&(n.backgroundColor=e.backgroundColor),e.width&&(n.width=`${e.width}px`),e.height&&(n.height=`${e.height}px`);const r=e.style;null!=r&&Object.keys(r).forEach((t=>{n[t]=r[t]}))}(c,e);const s=await async function(t,e,n){const r="http://www.w3.org/2000/svg",o=document.createElementNS(r,"svg"),i=document.createElementNS(r,"foreignObject");return o.setAttribute("width",`${e}`),o.setAttribute("height",`${n}`),o.setAttribute("viewBox",`0 0 ${e} ${n}`),i.setAttribute("width","100%"),i.setAttribute("height","100%"),i.setAttribute("x","0"),i.setAttribute("y","0"),i.setAttribute("externalResourcesRequired","true"),o.appendChild(i),i.appendChild(t),async function(t){return Promise.resolve().then((()=>(new XMLSerializer).serializeToString(t))).then(encodeURIComponent).then((t=>`data:image/svg+xml;charset=utf-8,${t}`))}(o)}(c,r,i);return s}(t,e),l=await c(a),u=document.createElement("canvas"),h=u.getContext("2d"),d=e.pixelRatio||function(){let t,e;try{e=process}catch(r){}const n=e&&e.env?e.env.devicePixelRatio:null;return n&&(t=parseInt(n,10),Number.isNaN(t)&&(t=1)),t||window.devicePixelRatio||1}(),f=e.canvasWidth||r,g=e.canvasHeight||s;return u.width=f*d,u.height=g*d,e.skipAutoScale||function(t){(t.width>i||t.height>i)&&(t.width>i&&t.height>i?t.width>t.height?(t.height*=i/t.width,t.width=i):(t.width*=i/t.height,t.height=i):t.width>i?(t.height*=i/t.width,t.width=i):(t.width*=i/t.height,t.height=i))}(u),u.style.width=`${f}`,u.style.height=`${g}`,e.backgroundColor&&(h.fillStyle=e.backgroundColor,h.fillRect(0,0,u.width,u.height)),h.drawImage(l,0,0,u.width,u.height),u}(t,e)).toDataURL()}));const e=(()=>{let t=0;return()=>(t+=1,`u${`0000${(Math.random()*36**4|0).toString(36)}`.slice(-4)}${t}`)})();function n(t){const e=[];for(let n=0,r=t.length;n<r;n++)e.push(t[n]);return e}function r(t,e){const n=(t.ownerDocument.defaultView||window).getComputedStyle(t).getPropertyValue(e);return n?parseFloat(n.replace("px","")):0}function o(t,e={}){return{width:e.width||function(t){const e=r(t,"border-left-width"),n=r(t,"border-right-width");return t.clientWidth+e+n}(t),height:e.height||function(t){const e=r(t,"border-top-width"),n=r(t,"border-bottom-width");return t.clientHeight+e+n}(t)}}const i=16384;function c(t){return new Promise(((e,n)=>{const r=new Image;r.decode=()=>e(r),r.onload=()=>e(r),r.onerror=n,r.crossOrigin="anonymous",r.decoding="async",r.src=t}))}const s=(t,e)=>{if(t instanceof e)return!0;const n=Object.getPrototypeOf(t);return null!==n&&(n.constructor.name===e.name||s(n,e))};function a(t,e,r){const o=`.${t}:${e}`,i=r.cssText?function(t){const e=t.getPropertyValue("content");return`${t.cssText} content: '${e.replace(/'|"/g,"")}';`}(r):function(t){return n(t).map((e=>`${e}: ${t.getPropertyValue(e)}${t.getPropertyPriority(e)?" !important":""};`)).join(" ")}(r);return document.createTextNode(`${o}{${i}}`)}function l(t,n,r){const o=window.getComputedStyle(t,r),i=o.getPropertyValue("content");if(""===i||"none"===i)return;const c=e();try{n.className=`${n.className} ${c}`}catch(l){return}const s=document.createElement("style");s.appendChild(a(c,r,o)),n.appendChild(s)}const u="application/font-woff",h="image/jpeg",d={woff:u,woff2:u,ttf:"application/font-truetype",eot:"application/vnd.ms-fontobject",png:"image/png",jpg:h,jpeg:h,gif:"image/gif",tiff:"image/tiff",svg:"image/svg+xml",webp:"image/webp"};function f(t){const e=function(t){const e=/\.([^./]*?)$/g.exec(t);return e?e[1]:""}(t).toLowerCase();return d[e]||""}function g(t){return-1!==t.search(/^(data:)/)}function m(t,e){return`data:${e};base64,${t}`}async function p(t,e,n){const r=await fetch(t,e);if(404===r.status)throw new Error(`Resource "${r.url}" not found`);const o=await r.blob();return new Promise(((t,e)=>{const i=new FileReader;i.onerror=e,i.onloadend=()=>{try{t(n({res:r,result:i.result}))}catch(o){e(o)}},i.readAsDataURL(o)}))}const w={};async function y(t,e,n){const r=function(t,e,n){let r=t.replace(/\?.*/,"");return n&&(r=t),/ttf|otf|eot|woff2?/i.test(r)&&(r=r.replace(/.*\//,"")),e?`[${e}]${r}`:r}(t,e,n.includeQueryParams);if(null!=w[r])return w[r];let o;n.cacheBust&&(t+=(/\?/.test(t)?"&":"?")+(new Date).getTime());try{const r=await p(t,n.fetchRequestInit,(({res:t,result:n})=>(e||(e=t.headers.get("Content-Type")||""),function(t){return t.split(/,/)[1]}(n))));o=m(r,e)}catch(i){o=n.imagePlaceholder||"";let e=`Failed to fetch resource: ${t}`;i&&(e="string"==typeof i?i:i.message),e&&console.warn(e)}return w[r]=o,o}async function b(t,e){return s(t,HTMLCanvasElement)?async function(t){const e=t.toDataURL();return"data:,"===e?t.cloneNode(!1):c(e)}(t):s(t,HTMLVideoElement)?async function(t,e){if(t.currentSrc){const e=document.createElement("canvas"),n=e.getContext("2d");return e.width=t.clientWidth,e.height=t.clientHeight,null==n||n.drawImage(t,0,0,e.width,e.height),c(e.toDataURL())}const n=t.poster,r=f(n);return c(await y(n,r,e))}(t,e):s(t,HTMLIFrameElement)?async function(t){var e;try{if(null===(e=null==t?void 0:t.contentDocument)||void 0===e?void 0:e.body)return await x(t.contentDocument.body,{},!0)}catch(n){}return t.cloneNode(!1)}(t):t.cloneNode(!1)}const S=t=>null!=t.tagName&&"SLOT"===t.tagName.toUpperCase();function E(t,e){return s(e,Element)&&(function(t,e){const r=e.style;if(!r)return;const o=window.getComputedStyle(t);o.cssText?(r.cssText=o.cssText,r.transformOrigin=o.transformOrigin):n(o).forEach((n=>{let i=o.getPropertyValue(n);if("font-size"===n&&i.endsWith("px")){const t=Math.floor(parseFloat(i.substring(0,i.length-2)))-.1;i=`${t}px`}s(t,HTMLIFrameElement)&&"display"===n&&"inline"===i&&(i="block"),"d"===n&&e.getAttribute("d")&&(i=`path(${e.getAttribute("d")})`),r.setProperty(n,i,o.getPropertyPriority(n))}))}(t,e),function(t,e){l(t,e,":before"),l(t,e,":after")}(t,e),function(t,e){s(t,HTMLTextAreaElement)&&(e.innerHTML=t.value),s(t,HTMLInputElement)&&e.setAttribute("value",t.value)}(t,e),function(t,e){if(s(t,HTMLSelectElement)){const n=e,r=Array.from(n.children).find((e=>t.value===e.getAttribute("value")));r&&r.setAttribute("selected","")}}(t,e)),e}async function x(t,e,r){return r||!e.filter||e.filter(t)?Promise.resolve(t).then((t=>b(t,e))).then((r=>async function(t,e,r){var o,i;let c=[];return c=S(t)&&t.assignedNodes?n(t.assignedNodes()):s(t,HTMLIFrameElement)&&(null===(o=t.contentDocument)||void 0===o?void 0:o.body)?n(t.contentDocument.body.childNodes):n((null!==(i=t.shadowRoot)&&void 0!==i?i:t).childNodes),0===c.length||s(t,HTMLVideoElement)||await c.reduce(((t,n)=>t.then((()=>x(n,r))).then((t=>{t&&e.appendChild(t)}))),Promise.resolve()),e}(t,r,e))).then((e=>E(t,e))).then((t=>async function(t,e){const n=t.querySelectorAll?t.querySelectorAll("use"):[];if(0===n.length)return t;const r={};for(let i=0;i<n.length;i++){const o=n[i].getAttribute("xlink:href");if(o){const n=t.querySelector(o),i=document.querySelector(o);n||!i||r[o]||(r[o]=await x(i,e,!0))}}const o=Object.values(r);if(o.length){const e="http://www.w3.org/1999/xhtml",n=document.createElementNS(e,"svg");n.setAttribute("xmlns",e),n.style.position="absolute",n.style.width="0",n.style.height="0",n.style.overflow="hidden",n.style.display="none";const r=document.createElementNS(e,"defs");n.appendChild(r);for(let t=0;t<o.length;t++)r.appendChild(o[t]);t.appendChild(n)}return t}(t,e))):null}const $=/url\((['"]?)([^'"]+?)\1\)/g,v=/url\([^)]+\)\s*format\((["']?)([^"']+)\1\)/g,C=/src:\s*(?:url\([^)]+\)\s*format\([^)]+\)[,;]\s*)+/g;async function P(t,e,n,r,o){try{const i=n?function(t,e){if(t.match(/^[a-z]+:\/\//i))return t;if(t.match(/^\/\//))return window.location.protocol+t;if(t.match(/^[a-z]+:/i))return t;const n=document.implementation.createHTMLDocument(),r=n.createElement("base"),o=n.createElement("a");return n.head.appendChild(r),n.body.appendChild(o),e&&(r.href=e),o.href=t,o.href}(e,n):e,c=f(e);let s;return s=o?m(await o(i),c):await y(i,c,r),t.replace(function(t){const e=t.replace(/([.*+?^${}()|\[\]\/\\])/g,"\\$1");return new RegExp(`(url\\(['"]?)(${e})(['"]?\\))`,"g")}(e),`$1${s}$3`)}catch(i){}return t}function R(t){return-1!==t.search($)}async function T(t,e,n){if(!R(t))return t;const r=function(t,{preferredFontFormat:e}){return e?t.replace(C,(t=>{for(;;){const[n,,r]=v.exec(t)||[];if(!r)return"";if(r===e)return`src: ${n};`}})):t}(t,n),o=function(t){const e=[];return t.replace($,((t,n,r)=>(e.push(r),t))),e.filter((t=>!g(t)))}(r);return o.reduce(((t,r)=>t.then((t=>P(t,r,e,n)))),Promise.resolve(r))}async function A(t,e,n){var r;const o=null===(r=e.style)||void 0===r?void 0:r.getPropertyValue(t);if(o){const r=await T(o,null,n);return e.style.setProperty(t,r,e.style.getPropertyPriority(t)),!0}return!1}async function L(t,e){s(t,Element)&&(await async function(t,e){await A("background",t,e)||await A("background-image",t,e),await A("mask",t,e)||await A("mask-image",t,e)}(t,e),await async function(t,e){const n=s(t,HTMLImageElement);if((!n||g(t.src))&&(!s(t,SVGImageElement)||g(t.href.baseVal)))return;const r=n?t.src:t.href.baseVal,o=await y(r,f(r),e);await new Promise(((e,r)=>{t.onload=e,t.onerror=r;const i=t;i.decode&&(i.decode=e),"lazy"===i.loading&&(i.loading="eager"),n?(t.srcset="",t.src=o):t.href.baseVal=o}))}(t,e),await async function(t,e){const r=n(t.childNodes).map((t=>L(t,e)));await Promise.all(r).then((()=>t))}(t,e))}const N={};async function I(t){let e=N[t];if(null!=e)return e;const n=await fetch(t);return e={url:t,cssText:await n.text()},N[t]=e,e}async function k(t,e){let n=t.cssText;const r=/url\(["']?([^"')]+)["']?\)/g,o=(n.match(/url\([^)]+\)/g)||[]).map((async o=>{let i=o.replace(r,"$1");return i.startsWith("https://")||(i=new URL(i,t.url).href),p(i,e.fetchRequestInit,(({result:t})=>(n=n.replace(o,`url(${t})`),[o,t])))}));return Promise.all(o).then((()=>n))}function M(t){if(null==t)return[];const e=[];let n=t.replace(/(\/\*[\s\S]*?\*\/)/gi,"");const r=new RegExp("((@.*?keyframes [\\s\\S]*?){([\\s\\S]*?}\\s*?)})","gi");for(;;){const t=r.exec(n);if(null===t)break;e.push(t[0])}n=n.replace(r,"");const o=/@import[\s\S]*?url\([^)]*\)[\s\S]*?;/gi,i=new RegExp("((\\s*?(?:\\/\\*[\\s\\S]*?\\*\\/)?\\s*?@media[\\s\\S]*?){([\\s\\S]*?)}\\s*?})|(([\\s\\S]*?){([\\s\\S]*?)})","gi");for(;;){let t=o.exec(n);if(null===t){if(t=i.exec(n),null===t)break;o.lastIndex=i.lastIndex}else i.lastIndex=o.lastIndex;e.push(t[0])}return e}}}}));