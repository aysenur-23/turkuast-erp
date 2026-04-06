var Hv=Object.defineProperty,Kv=Object.defineProperties;var Qv=Object.getOwnPropertyDescriptors;var wf=Object.getOwnPropertySymbols,Yv=Object.getPrototypeOf,Jv=Object.prototype.hasOwnProperty,Xv=Object.prototype.propertyIsEnumerable,Zv=Reflect.get;var Ef=(n,e,t)=>e in n?Hv(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t,B=(n,e)=>{for(var t in e||(e={}))Jv.call(e,t)&&Ef(n,t,e[t]);if(wf)for(var t of wf(e))Xv.call(e,t)&&Ef(n,t,e[t]);return n},ce=(n,e)=>Kv(n,Qv(e));var Er=(n,e,t)=>Zv(Yv(n),t,e);var p=(n,e,t)=>new Promise((r,i)=>{var s=c=>{try{a(t.next(c))}catch(u){i(u)}},o=c=>{try{a(t.throw(c))}catch(u){i(u)}},a=c=>c.done?r(c.value):Promise.resolve(c.value).then(s,o);a((t=t.apply(n,e)).next())});const eT="modulepreload",tT=function(n){return"/"+n},vf={},z=function(e,t,r){let i=Promise.resolve();if(t&&t.length>0){document.getElementsByTagName("link");const o=document.querySelector("meta[property=csp-nonce]"),a=(o==null?void 0:o.nonce)||(o==null?void 0:o.getAttribute("nonce"));i=Promise.allSettled(t.map(c=>{if(c=tT(c),c in vf)return;vf[c]=!0;const u=c.endsWith(".css"),d=u?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${c}"]${d}`))return;const h=document.createElement("link");if(h.rel=u?"stylesheet":eT,u||(h.as="script"),h.crossOrigin="",h.href=c,a&&h.setAttribute("nonce",a),document.head.appendChild(h),u)return new Promise((m,_)=>{h.addEventListener("load",m),h.addEventListener("error",()=>_(new Error(`Unable to preload CSS for ${c}`)))})}))}function s(o){const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=o,window.dispatchEvent(a),!a.defaultPrevented)throw o}return i.then(o=>{for(const a of o||[])a.status==="rejected"&&s(a.reason);return e().catch(s)})};var Tf={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tg={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const H=function(n,e){if(!n)throw ki(e)},ki=function(n){return new Error("Firebase Database ("+tg.SDK_VERSION+") INTERNAL ASSERT FAILED: "+n)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ng=function(n){const e=[];let t=0;for(let r=0;r<n.length;r++){let i=n.charCodeAt(r);i<128?e[t++]=i:i<2048?(e[t++]=i>>6|192,e[t++]=i&63|128):(i&64512)===55296&&r+1<n.length&&(n.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(n.charCodeAt(++r)&1023),e[t++]=i>>18|240,e[t++]=i>>12&63|128,e[t++]=i>>6&63|128,e[t++]=i&63|128):(e[t++]=i>>12|224,e[t++]=i>>6&63|128,e[t++]=i&63|128)}return e},nT=function(n){const e=[];let t=0,r=0;for(;t<n.length;){const i=n[t++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=n[t++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=n[t++],o=n[t++],a=n[t++],c=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(c>>10)),e[r++]=String.fromCharCode(56320+(c&1023))}else{const s=n[t++],o=n[t++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},Pu={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<n.length;i+=3){const s=n[i],o=i+1<n.length,a=o?n[i+1]:0,c=i+2<n.length,u=c?n[i+2]:0,d=s>>2,h=(s&3)<<4|a>>4;let m=(a&15)<<2|u>>6,_=u&63;c||(_=64,o||(m=64)),r.push(t[d],t[h],t[m],t[_])}return r.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(ng(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):nT(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<n.length;){const s=t[n.charAt(i++)],a=i<n.length?t[n.charAt(i)]:0;++i;const u=i<n.length?t[n.charAt(i)]:64;++i;const h=i<n.length?t[n.charAt(i)]:64;if(++i,s==null||a==null||u==null||h==null)throw new rT;const m=s<<2|a>>4;if(r.push(m),u!==64){const _=a<<4&240|u>>2;if(r.push(_),h!==64){const w=u<<6&192|h;r.push(w)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class rT extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const rg=function(n){const e=ng(n);return Pu.encodeByteArray(e,!0)},fa=function(n){return rg(n).replace(/\./g,"")},ma=function(n){try{return Pu.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function iT(n){return ig(void 0,n)}function ig(n,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const t=e;return new Date(t.getTime());case Object:n===void 0&&(n={});break;case Array:n=[];break;default:return e}for(const t in e)!e.hasOwnProperty(t)||!sT(t)||(n[t]=ig(n[t],e[t]));return n}function sT(n){return n!=="__proto__"}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oT(){if(typeof self!="undefined")return self;if(typeof window!="undefined")return window;if(typeof global!="undefined")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aT=()=>oT().__FIREBASE_DEFAULTS__,cT=()=>{if(typeof process=="undefined"||typeof Tf=="undefined")return;const n=Tf.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},lT=()=>{if(typeof document=="undefined")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch(t){return}const e=n&&ma(n[1]);return e&&JSON.parse(e)},ec=()=>{try{return aT()||cT()||lT()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},sg=n=>{var e,t;return(t=(e=ec())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[n]},Du=n=>{const e=sg(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),r]:[e.substring(0,t),r]},og=()=>{var n;return(n=ec())===null||n===void 0?void 0:n.config},ag=n=>{var e;return(e=ec())===null||e===void 0?void 0:e[`_${n}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nu{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,r)=>{t?this.reject(t):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,r))}}}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fn(n){try{return(n.startsWith("http://")||n.startsWith("https://")?new URL(n).hostname:n).endsWith(".cloudworkstations.dev")}catch(e){return!1}}function tc(n){return p(this,null,function*(){return(yield fetch(n,{credentials:"include"})).ok})}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ou(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},r=e||"demo-project",i=n.iat||0,s=n.sub||n.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},n);return[fa(JSON.stringify(t)),fa(JSON.stringify(o)),""].join(".")}const fs={};function uT(){const n={prod:[],emulator:[]};for(const e of Object.keys(fs))fs[e]?n.emulator.push(e):n.prod.push(e);return n}function dT(n){let e=document.getElementById(n),t=!1;return e||(e=document.createElement("div"),e.setAttribute("id",n),t=!0),{created:t,element:e}}let If=!1;function nc(n,e){if(typeof window=="undefined"||typeof document=="undefined"||!fn(window.location.host)||fs[n]===e||fs[n]||If)return;fs[n]=e;function t(m){return`__firebase__banner__${m}`}const r="__firebase__banner",s=uT().prod.length>0;function o(){const m=document.getElementById(r);m&&m.remove()}function a(m){m.style.display="flex",m.style.background="#7faaf0",m.style.position="fixed",m.style.bottom="5px",m.style.left="5px",m.style.padding=".5em",m.style.borderRadius="5px",m.style.alignItems="center"}function c(m,_){m.setAttribute("width","24"),m.setAttribute("id",_),m.setAttribute("height","24"),m.setAttribute("viewBox","0 0 24 24"),m.setAttribute("fill","none"),m.style.marginLeft="-6px"}function u(){const m=document.createElement("span");return m.style.cursor="pointer",m.style.marginLeft="16px",m.style.fontSize="24px",m.innerHTML=" &times;",m.onclick=()=>{If=!0,o()},m}function d(m,_){m.setAttribute("id",_),m.innerText="Learn more",m.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",m.setAttribute("target","__blank"),m.style.paddingLeft="5px",m.style.textDecoration="underline"}function h(){const m=dT(r),_=t("text"),w=document.getElementById(_)||document.createElement("span"),E=t("learnmore"),v=document.getElementById(E)||document.createElement("a"),C=t("preprendIcon"),O=document.getElementById(C)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(m.created){const U=m.element;a(U),d(v,E);const M=u();c(O,C),U.append(O,w,v,M),document.body.appendChild(U)}s?(w.innerText="Preview backend disconnected.",O.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(O.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,w.innerText="Preview backend running in this workspace."),w.setAttribute("id",_)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",h):h()}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gt(){return typeof navigator!="undefined"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Lu(){return typeof window!="undefined"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(gt())}function hT(){var n;const e=(n=ec())===null||n===void 0?void 0:n.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch(t){return!1}}function fT(){return typeof navigator!="undefined"&&navigator.userAgent==="Cloudflare-Workers"}function cg(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function lg(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function mT(){const n=gt();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function pT(){return tg.NODE_ADMIN===!0}function gT(){return!hT()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function ug(){try{return typeof indexedDB=="object"}catch(n){return!1}}function dg(){return new Promise((n,e)=>{try{let t=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),t||self.indexedDB.deleteDatabase(r),n(!0)},i.onupgradeneeded=()=>{t=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(t){e(t)}})}function _T(){return!(typeof navigator=="undefined"||!navigator.cookieEnabled)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yT="FirebaseError";class qt extends Error{constructor(e,t,r){super(t),this.code=e,this.customData=r,this.name=yT,Object.setPrototypeOf(this,qt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,$r.prototype.create)}}class $r{constructor(e,t,r){this.service=e,this.serviceName=t,this.errors=r}create(e,...t){const r=t[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?wT(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new qt(i,a,r)}}function wT(n,e){return n.replace(ET,(t,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const ET=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ds(n){return JSON.parse(n)}function st(n){return JSON.stringify(n)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hg=function(n){let e={},t={},r={},i="";try{const s=n.split(".");e=Ds(ma(s[0])||""),t=Ds(ma(s[1])||""),i=s[2],r=t.d||{},delete t.d}catch(s){}return{header:e,claims:t,data:r,signature:i}},vT=function(n){const e=hg(n),t=e.claims;return!!t&&typeof t=="object"&&t.hasOwnProperty("iat")},TT=function(n){const e=hg(n).claims;return typeof e=="object"&&e.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Un(n,e){return Object.prototype.hasOwnProperty.call(n,e)}function mi(n,e){if(Object.prototype.hasOwnProperty.call(n,e))return n[e]}function Ll(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function pa(n,e,t){const r={};for(const i in n)Object.prototype.hasOwnProperty.call(n,i)&&(r[i]=e.call(t,n[i],i,n));return r}function Pn(n,e){if(n===e)return!0;const t=Object.keys(n),r=Object.keys(e);for(const i of t){if(!r.includes(i))return!1;const s=n[i],o=e[i];if(Af(s)&&Af(o)){if(!Pn(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!t.includes(i))return!1;return!0}function Af(n){return n!==null&&typeof n=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ci(n){const e=[];for(const[t,r]of Object.entries(n))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function as(n){const e={};return n.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function cs(n){const e=n.indexOf("?");if(!e)return"";const t=n.indexOf("#",e);return n.substring(e,t>0?t:void 0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class IT{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,t){t||(t=0);const r=this.W_;if(typeof e=="string")for(let h=0;h<16;h++)r[h]=e.charCodeAt(t)<<24|e.charCodeAt(t+1)<<16|e.charCodeAt(t+2)<<8|e.charCodeAt(t+3),t+=4;else for(let h=0;h<16;h++)r[h]=e[t]<<24|e[t+1]<<16|e[t+2]<<8|e[t+3],t+=4;for(let h=16;h<80;h++){const m=r[h-3]^r[h-8]^r[h-14]^r[h-16];r[h]=(m<<1|m>>>31)&4294967295}let i=this.chain_[0],s=this.chain_[1],o=this.chain_[2],a=this.chain_[3],c=this.chain_[4],u,d;for(let h=0;h<80;h++){h<40?h<20?(u=a^s&(o^a),d=1518500249):(u=s^o^a,d=1859775393):h<60?(u=s&o|a&(s|o),d=2400959708):(u=s^o^a,d=3395469782);const m=(i<<5|i>>>27)+u+c+d+r[h]&4294967295;c=a,a=o,o=(s<<30|s>>>2)&4294967295,s=i,i=m}this.chain_[0]=this.chain_[0]+i&4294967295,this.chain_[1]=this.chain_[1]+s&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+a&4294967295,this.chain_[4]=this.chain_[4]+c&4294967295}update(e,t){if(e==null)return;t===void 0&&(t=e.length);const r=t-this.blockSize;let i=0;const s=this.buf_;let o=this.inbuf_;for(;i<t;){if(o===0)for(;i<=r;)this.compress_(e,i),i+=this.blockSize;if(typeof e=="string"){for(;i<t;)if(s[o]=e.charCodeAt(i),++o,++i,o===this.blockSize){this.compress_(s),o=0;break}}else for(;i<t;)if(s[o]=e[i],++o,++i,o===this.blockSize){this.compress_(s),o=0;break}}this.inbuf_=o,this.total_+=t}digest(){const e=[];let t=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let i=this.blockSize-1;i>=56;i--)this.buf_[i]=t&255,t/=256;this.compress_(this.buf_);let r=0;for(let i=0;i<5;i++)for(let s=24;s>=0;s-=8)e[r]=this.chain_[i]>>s&255,++r;return e}}function AT(n,e){const t=new RT(n,e);return t.subscribe.bind(t)}class RT{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,r){let i;if(e===void 0&&t===void 0&&r===void 0)throw new Error("Missing Observer.");bT(e,["next","error","complete"])?i=e:i={next:e,error:t,complete:r},i.next===void 0&&(i.next=ul),i.error===void 0&&(i.error=ul),i.complete===void 0&&(i.complete=ul);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch(o){}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(r){typeof console!="undefined"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function bT(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function ul(){}function ST(n,e){return`${n} failed: ${e} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kT=function(n){const e=[];let t=0;for(let r=0;r<n.length;r++){let i=n.charCodeAt(r);if(i>=55296&&i<=56319){const s=i-55296;r++,H(r<n.length,"Surrogate pair missing trail surrogate.");const o=n.charCodeAt(r)-56320;i=65536+(s<<10)+o}i<128?e[t++]=i:i<2048?(e[t++]=i>>6|192,e[t++]=i&63|128):i<65536?(e[t++]=i>>12|224,e[t++]=i>>6&63|128,e[t++]=i&63|128):(e[t++]=i>>18|240,e[t++]=i>>12&63|128,e[t++]=i>>6&63|128,e[t++]=i&63|128)}return e},rc=function(n){let e=0;for(let t=0;t<n.length;t++){const r=n.charCodeAt(t);r<128?e++:r<2048?e+=2:r>=55296&&r<=56319?(e+=4,t++):e+=3}return e};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const CT=1e3,PT=2,DT=4*60*60*1e3,NT=.5;function Rf(n,e=CT,t=PT){const r=e*Math.pow(t,n),i=Math.round(NT*r*(Math.random()-.5)*2);return Math.min(DT,r+i)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fe(n){return n&&n._delegate?n._delegate:n}class Vt{constructor(e,t,r){this.name=e,this.instanceFactory=t,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vr="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OT{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const r=new Nu;if(this.instancesDeferred.set(t,r),this.isInitialized(t)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:t});i&&r.resolve(i)}catch(i){}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(VT(e))try{this.getOrInitializeService({instanceIdentifier:vr})}catch(t){}for(const[t,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(t);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch(s){}}}}clearInstance(e=vr){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}delete(){return p(this,null,function*(){const e=Array.from(this.instances.values());yield Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])})}isComponentSet(){return this.component!=null}isInitialized(e=vr){return this.instances.has(e)}getOptions(e=vr){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:t});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(e,t){var r;const i=this.normalizeInstanceIdentifier(t),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,t){const r=this.onInitCallbacks.get(t);if(r)for(const i of r)try{i(e,t)}catch(s){}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:LT(e),options:t}),this.instances.set(e,r),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch(i){}return r||null}normalizeInstanceIdentifier(e=vr){return this.component?this.component.multipleInstances?e:vr:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function LT(n){return n===vr?void 0:n}function VT(n){return n.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class MT{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new OT(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var de;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(de||(de={}));const xT={debug:de.DEBUG,verbose:de.VERBOSE,info:de.INFO,warn:de.WARN,error:de.ERROR,silent:de.SILENT},UT=de.INFO,FT={[de.DEBUG]:"log",[de.VERBOSE]:"log",[de.INFO]:"info",[de.WARN]:"warn",[de.ERROR]:"error"},BT=(n,e,...t)=>{if(e<n.logLevel)return;const r=new Date().toISOString(),i=FT[e];if(i)console[i](`[${r}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Xs{constructor(e){this.name=e,this._logLevel=UT,this._logHandler=BT,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in de))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?xT[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,de.DEBUG,...e),this._logHandler(this,de.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,de.VERBOSE,...e),this._logHandler(this,de.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,de.INFO,...e),this._logHandler(this,de.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,de.WARN,...e),this._logHandler(this,de.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,de.ERROR,...e),this._logHandler(this,de.ERROR,...e)}}const $T=(n,e)=>e.some(t=>n instanceof t);let bf,Sf;function qT(){return bf||(bf=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function jT(){return Sf||(Sf=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const fg=new WeakMap,Vl=new WeakMap,mg=new WeakMap,dl=new WeakMap,Vu=new WeakMap;function zT(n){const e=new Promise((t,r)=>{const i=()=>{n.removeEventListener("success",s),n.removeEventListener("error",o)},s=()=>{t(Jn(n.result)),i()},o=()=>{r(n.error),i()};n.addEventListener("success",s),n.addEventListener("error",o)});return e.then(t=>{t instanceof IDBCursor&&fg.set(t,n)}).catch(()=>{}),Vu.set(e,n),e}function GT(n){if(Vl.has(n))return;const e=new Promise((t,r)=>{const i=()=>{n.removeEventListener("complete",s),n.removeEventListener("error",o),n.removeEventListener("abort",o)},s=()=>{t(),i()},o=()=>{r(n.error||new DOMException("AbortError","AbortError")),i()};n.addEventListener("complete",s),n.addEventListener("error",o),n.addEventListener("abort",o)});Vl.set(n,e)}let Ml={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return Vl.get(n);if(e==="objectStoreNames")return n.objectStoreNames||mg.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return Jn(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function WT(n){Ml=n(Ml)}function HT(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const r=n.call(hl(this),e,...t);return mg.set(r,e.sort?e.sort():[e]),Jn(r)}:jT().includes(n)?function(...e){return n.apply(hl(this),e),Jn(fg.get(this))}:function(...e){return Jn(n.apply(hl(this),e))}}function KT(n){return typeof n=="function"?HT(n):(n instanceof IDBTransaction&&GT(n),$T(n,qT())?new Proxy(n,Ml):n)}function Jn(n){if(n instanceof IDBRequest)return zT(n);if(dl.has(n))return dl.get(n);const e=KT(n);return e!==n&&(dl.set(n,e),Vu.set(e,n)),e}const hl=n=>Vu.get(n);function pg(n,e,{blocked:t,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(n,e),a=Jn(o);return r&&o.addEventListener("upgradeneeded",c=>{r(Jn(o.result),c.oldVersion,c.newVersion,Jn(o.transaction),c)}),t&&o.addEventListener("blocked",c=>t(c.oldVersion,c.newVersion,c)),a.then(c=>{s&&c.addEventListener("close",()=>s()),i&&c.addEventListener("versionchange",u=>i(u.oldVersion,u.newVersion,u))}).catch(()=>{}),a}const QT=["get","getKey","getAll","getAllKeys","count"],YT=["put","add","delete","clear"],fl=new Map;function kf(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(fl.get(e))return fl.get(e);const t=e.replace(/FromIndex$/,""),r=e!==t,i=YT.includes(t);if(!(t in(r?IDBIndex:IDBObjectStore).prototype)||!(i||QT.includes(t)))return;const s=function(o,...a){return p(this,null,function*(){const c=this.transaction(o,i?"readwrite":"readonly");let u=c.store;return r&&(u=u.index(a.shift())),(yield Promise.all([u[t](...a),i&&c.done]))[0]})};return fl.set(e,s),s}WT(n=>ce(B({},n),{get:(e,t,r)=>kf(e,t)||n.get(e,t,r),has:(e,t)=>!!kf(e,t)||n.has(e,t)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JT{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(XT(t)){const r=t.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(t=>t).join(" ")}}function XT(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const xl="@firebase/app",Cf="0.13.2";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dn=new Xs("@firebase/app"),ZT="@firebase/app-compat",eI="@firebase/analytics-compat",tI="@firebase/analytics",nI="@firebase/app-check-compat",rI="@firebase/app-check",iI="@firebase/auth",sI="@firebase/auth-compat",oI="@firebase/database",aI="@firebase/data-connect",cI="@firebase/database-compat",lI="@firebase/functions",uI="@firebase/functions-compat",dI="@firebase/installations",hI="@firebase/installations-compat",fI="@firebase/messaging",mI="@firebase/messaging-compat",pI="@firebase/performance",gI="@firebase/performance-compat",_I="@firebase/remote-config",yI="@firebase/remote-config-compat",wI="@firebase/storage",EI="@firebase/storage-compat",vI="@firebase/firestore",TI="@firebase/ai",II="@firebase/firestore-compat",AI="firebase",RI="11.10.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ul="[DEFAULT]",bI={[xl]:"fire-core",[ZT]:"fire-core-compat",[tI]:"fire-analytics",[eI]:"fire-analytics-compat",[rI]:"fire-app-check",[nI]:"fire-app-check-compat",[iI]:"fire-auth",[sI]:"fire-auth-compat",[oI]:"fire-rtdb",[aI]:"fire-data-connect",[cI]:"fire-rtdb-compat",[lI]:"fire-fn",[uI]:"fire-fn-compat",[dI]:"fire-iid",[hI]:"fire-iid-compat",[fI]:"fire-fcm",[mI]:"fire-fcm-compat",[pI]:"fire-perf",[gI]:"fire-perf-compat",[_I]:"fire-rc",[yI]:"fire-rc-compat",[wI]:"fire-gcs",[EI]:"fire-gcs-compat",[vI]:"fire-fst",[II]:"fire-fst-compat",[TI]:"fire-vertex","fire-js":"fire-js",[AI]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ns=new Map,SI=new Map,Fl=new Map;function Pf(n,e){try{n.container.addComponent(e)}catch(t){Dn.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function Ft(n){const e=n.name;if(Fl.has(e))return Dn.debug(`There were multiple attempts to register component ${e}.`),!1;Fl.set(e,n);for(const t of Ns.values())Pf(t,n);for(const t of SI.values())Pf(t,n);return!0}function Fn(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function Et(n){return n==null?!1:n.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kI={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Xn=new $r("app","Firebase",kI);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CI{constructor(e,t,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Vt("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Xn.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fr=RI;function gg(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Ul,automaticDataCollectionEnabled:!0},e),i=r.name;if(typeof i!="string"||!i)throw Xn.create("bad-app-name",{appName:String(i)});if(t||(t=og()),!t)throw Xn.create("no-options");const s=Ns.get(i);if(s){if(Pn(t,s.options)&&Pn(r,s.config))return s;throw Xn.create("duplicate-app",{appName:i})}const o=new MT(i);for(const c of Fl.values())o.addComponent(c);const a=new CI(t,r,o);return Ns.set(i,a),a}function Zs(n=Ul){const e=Ns.get(n);if(!e&&n===Ul&&og())return gg();if(!e)throw Xn.create("no-app",{appName:n});return e}function Df(){return Array.from(Ns.values())}function pt(n,e,t){var r;let i=(r=bI[n])!==null&&r!==void 0?r:n;t&&(i+=`-${t}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const a=[`Unable to register library "${i}" with version "${e}":`];s&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Dn.warn(a.join(" "));return}Ft(new Vt(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const PI="firebase-heartbeat-database",DI=1,Os="firebase-heartbeat-store";let ml=null;function _g(){return ml||(ml=pg(PI,DI,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(Os)}catch(t){console.warn(t)}}}}).catch(n=>{throw Xn.create("idb-open",{originalErrorMessage:n.message})})),ml}function NI(n){return p(this,null,function*(){try{const t=(yield _g()).transaction(Os),r=yield t.objectStore(Os).get(yg(n));return yield t.done,r}catch(e){if(e instanceof qt)Dn.warn(e.message);else{const t=Xn.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Dn.warn(t.message)}}})}function Nf(n,e){return p(this,null,function*(){try{const r=(yield _g()).transaction(Os,"readwrite");yield r.objectStore(Os).put(e,yg(n)),yield r.done}catch(t){if(t instanceof qt)Dn.warn(t.message);else{const r=Xn.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});Dn.warn(r.message)}}})}function yg(n){return`${n.name}!${n.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const OI=1024,LI=30;class VI{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new xI(t),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}triggerHeartbeat(){return p(this,null,function*(){var e,t;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=Of();if(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=yield this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s))return;if(this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats.length>LI){const o=UI(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(o,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){Dn.warn(r)}})}getHeartbeatsHeader(){return p(this,null,function*(){var e;try{if(this._heartbeatsCache===null&&(yield this._heartbeatsCachePromise),((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=Of(),{heartbeatsToSend:r,unsentEntries:i}=MI(this._heartbeatsCache.heartbeats),s=fa(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=t,i.length>0?(this._heartbeatsCache.heartbeats=i,yield this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(t){return Dn.warn(t),""}})}}function Of(){return new Date().toISOString().substring(0,10)}function MI(n,e=OI){const t=[];let r=n.slice();for(const i of n){const s=t.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),Lf(t)>e){s.dates.pop();break}}else if(t.push({agent:i.agent,dates:[i.date]}),Lf(t)>e){t.pop();break}r=r.slice(1)}return{heartbeatsToSend:t,unsentEntries:r}}class xI{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}runIndexedDBEnvironmentCheck(){return p(this,null,function*(){return ug()?dg().then(()=>!0).catch(()=>!1):!1})}read(){return p(this,null,function*(){if(yield this._canUseIndexedDBPromise){const t=yield NI(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}})}overwrite(e){return p(this,null,function*(){var t;if(yield this._canUseIndexedDBPromise){const i=yield this.read();return Nf(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return})}add(e){return p(this,null,function*(){var t;if(yield this._canUseIndexedDBPromise){const i=yield this.read();return Nf(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return})}}function Lf(n){return fa(JSON.stringify({version:2,heartbeats:n})).length}function UI(n){if(n.length===0)return-1;let e=0,t=n[0].date;for(let r=1;r<n.length;r++)n[r].date<t&&(t=n[r].date,e=r);return e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function FI(n){Ft(new Vt("platform-logger",e=>new JT(e),"PRIVATE")),Ft(new Vt("heartbeat",e=>new VI(e),"PRIVATE")),pt(xl,Cf,n),pt(xl,Cf,"esm2017"),pt("fire-js","")}FI("");var Vf=function(){return Vf=Object.assign||function(e){for(var t,r=1,i=arguments.length;r<i;r++){t=arguments[r];for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&(e[s]=t[s])}return e},Vf.apply(this,arguments)};function Mu(n,e){var t={};for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&e.indexOf(r)<0&&(t[r]=n[r]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(n);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(n,r[i])&&(t[r[i]]=n[r[i]]);return t}function mL(n,e,t){if(t||arguments.length===2)for(var r=0,i=e.length,s;r<i;r++)(s||!(r in e))&&(s||(s=Array.prototype.slice.call(e,0,r)),s[r]=e[r]);return n.concat(s||Array.prototype.slice.call(e))}function wg(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Eg=wg,vg=new $r("auth","Firebase",wg());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ga=new Xs("@firebase/auth");function BI(n,...e){ga.logLevel<=de.WARN&&ga.warn(`Auth (${fr}): ${n}`,...e)}function na(n,...e){ga.logLevel<=de.ERROR&&ga.error(`Auth (${fr}): ${n}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mt(n,...e){throw Uu(n,...e)}function Kt(n,...e){return Uu(n,...e)}function xu(n,e,t){const r=Object.assign(Object.assign({},Eg()),{[e]:t});return new $r("auth","Firebase",r).create(e,{appName:n.name})}function Rn(n){return xu(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function $I(n,e,t){const r=t;if(!(e instanceof r))throw r.name!==e.constructor.name&&Mt(n,"argument-error"),xu(n,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Uu(n,...e){if(typeof n!="string"){const t=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=n.name),n._errorFactory.create(t,...r)}return vg.create(n,...e)}function te(n,e,...t){if(!n)throw Uu(e,...t)}function Tn(n){const e="INTERNAL ASSERTION FAILED: "+n;throw na(e),new Error(e)}function Nn(n,e){n||Tn(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bl(){var n;return typeof self!="undefined"&&((n=self.location)===null||n===void 0?void 0:n.href)||""}function qI(){return Mf()==="http:"||Mf()==="https:"}function Mf(){var n;return typeof self!="undefined"&&((n=self.location)===null||n===void 0?void 0:n.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jI(){return typeof navigator!="undefined"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(qI()||cg()||"connection"in navigator)?navigator.onLine:!0}function zI(){if(typeof navigator=="undefined")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eo{constructor(e,t){this.shortDelay=e,this.longDelay=t,Nn(t>e,"Short delay should be less than long delay!"),this.isMobile=Lu()||lg()}get(){return jI()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fu(n,e){Nn(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tg{static initialize(e,t,r){this.fetchImpl=e,t&&(this.headersImpl=t),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self!="undefined"&&"fetch"in self)return self.fetch;if(typeof globalThis!="undefined"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch!="undefined")return fetch;Tn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self!="undefined"&&"Headers"in self)return self.Headers;if(typeof globalThis!="undefined"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers!="undefined")return Headers;Tn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self!="undefined"&&"Response"in self)return self.Response;if(typeof globalThis!="undefined"&&globalThis.Response)return globalThis.Response;if(typeof Response!="undefined")return Response;Tn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const GI={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const WI=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],HI=new eo(3e4,6e4);function Zt(n,e){return n.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:n.tenantId}):e}function jt(s,o,a,c){return p(this,arguments,function*(n,e,t,r,i={}){return Ig(n,i,()=>p(this,null,function*(){let u={},d={};r&&(e==="GET"?d=r:u={body:JSON.stringify(r)});const h=Ci(Object.assign({key:n.config.apiKey},d)).slice(1),m=yield n._getAdditionalHeaders();m["Content-Type"]="application/json",n.languageCode&&(m["X-Firebase-Locale"]=n.languageCode);const _=Object.assign({method:e,headers:m},u);return fT()||(_.referrerPolicy="no-referrer"),n.emulatorConfig&&fn(n.emulatorConfig.host)&&(_.credentials="include"),Tg.fetch()(yield Ag(n,n.config.apiHost,t,h),_)}))})}function Ig(n,e,t){return p(this,null,function*(){n._canInitEmulator=!1;const r=Object.assign(Object.assign({},GI),e);try{const i=new QI(n),s=yield Promise.race([t(),i.promise]);i.clearNetworkTimeout();const o=yield s.json();if("needConfirmation"in o)throw Go(n,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[c,u]=a.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw Go(n,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw Go(n,"email-already-in-use",o);if(c==="USER_DISABLED")throw Go(n,"user-disabled",o);const d=r[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw xu(n,d,u);Mt(n,d)}}catch(i){if(i instanceof qt)throw i;Mt(n,"network-request-failed",{message:String(i)})}})}function to(s,o,a,c){return p(this,arguments,function*(n,e,t,r,i={}){const u=yield jt(n,e,t,r,i);return"mfaPendingCredential"in u&&Mt(n,"multi-factor-auth-required",{_serverResponse:u}),u})}function Ag(n,e,t,r){return p(this,null,function*(){const i=`${e}${t}?${r}`,s=n,o=s.config.emulator?Fu(n.config,i):`${n.config.apiScheme}://${i}`;return WI.includes(t)&&(yield s._persistenceManagerAvailable,s._getPersistenceType()==="COOKIE")?s._getPersistence()._getFinalTarget(o).toString():o})}function KI(n){switch(n){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class QI{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,r)=>{this.timer=setTimeout(()=>r(Kt(this.auth,"network-request-failed")),HI.get())})}}function Go(n,e,t){const r={appName:n.name};t.email&&(r.email=t.email),t.phoneNumber&&(r.phoneNumber=t.phoneNumber);const i=Kt(n,e,r);return i.customData._tokenResponse=t,i}function xf(n){return n!==void 0&&n.enterprise!==void 0}class YI{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return KI(t.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}function JI(n,e){return p(this,null,function*(){return jt(n,"GET","/v2/recaptchaConfig",Zt(n,e))})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function XI(n,e){return p(this,null,function*(){return jt(n,"POST","/v1/accounts:delete",e)})}function _a(n,e){return p(this,null,function*(){return jt(n,"POST","/v1/accounts:lookup",e)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ms(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch(e){}}function Rg(n,e=!1){return p(this,null,function*(){const t=fe(n),r=yield t.getIdToken(e),i=Bu(r);te(i&&i.exp&&i.auth_time&&i.iat,t.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:ms(pl(i.auth_time)),issuedAtTime:ms(pl(i.iat)),expirationTime:ms(pl(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}})}function pl(n){return Number(n)*1e3}function Bu(n){const[e,t,r]=n.split(".");if(e===void 0||t===void 0||r===void 0)return na("JWT malformed, contained fewer than 3 sections"),null;try{const i=ma(t);return i?JSON.parse(i):(na("Failed to decode base64 JWT payload"),null)}catch(i){return na("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function Uf(n){const e=Bu(n);return te(e,"internal-error"),te(typeof e.exp!="undefined","internal-error"),te(typeof e.iat!="undefined","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pi(n,e,t=!1){return p(this,null,function*(){if(t)return e;try{return yield e}catch(r){throw r instanceof qt&&ZI(r)&&n.auth.currentUser===n&&(yield n.auth.signOut()),r}})}function ZI({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eA{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(()=>p(this,null,function*(){yield this.iteration()}),t)}iteration(){return p(this,null,function*(){try{yield this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $l{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=ms(this.lastLoginAt),this.creationTime=ms(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ya(n){return p(this,null,function*(){var e;const t=n.auth,r=yield n.getIdToken(),i=yield pi(n,_a(t,{idToken:r}));te(i==null?void 0:i.users.length,t,"internal-error");const s=i.users[0];n._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?Sg(s.providerUserInfo):[],a=tA(n.providerData,o),c=n.isAnonymous,u=!(n.email&&s.passwordHash)&&!(a!=null&&a.length),d=c?u:!1,h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new $l(s.createdAt,s.lastLoginAt),isAnonymous:d};Object.assign(n,h)})}function bg(n){return p(this,null,function*(){const e=fe(n);yield ya(e),yield e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)})}function tA(n,e){return[...n.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function Sg(n){return n.map(e=>{var{providerId:t}=e,r=Mu(e,["providerId"]);return{providerId:t,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nA(n,e){return p(this,null,function*(){const t=yield Ig(n,{},()=>p(this,null,function*(){const r=Ci({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=n.config,o=yield Ag(n,i,"/v1/token",`key=${s}`),a=yield n._getAdditionalHeaders();a["Content-Type"]="application/x-www-form-urlencoded";const c={method:"POST",headers:a,body:r};return n.emulatorConfig&&fn(n.emulatorConfig.host)&&(c.credentials="include"),Tg.fetch()(o,c)}));return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}})}function rA(n,e){return p(this,null,function*(){return jt(n,"POST","/v2/accounts:revokeToken",Zt(n,e))})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ai{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){te(e.idToken,"internal-error"),te(typeof e.idToken!="undefined","internal-error"),te(typeof e.refreshToken!="undefined","internal-error");const t="expiresIn"in e&&typeof e.expiresIn!="undefined"?Number(e.expiresIn):Uf(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){te(e.length!==0,"internal-error");const t=Uf(e);this.updateTokensAndExpiration(e,null,t)}getToken(e,t=!1){return p(this,null,function*(){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(te(this.refreshToken,e,"user-token-expired"),this.refreshToken?(yield this.refresh(e,this.refreshToken),this.accessToken):null)})}clearRefreshToken(){this.refreshToken=null}refresh(e,t){return p(this,null,function*(){const{accessToken:r,refreshToken:i,expiresIn:s}=yield nA(e,t);this.updateTokensAndExpiration(r,i,Number(s))})}updateTokensAndExpiration(e,t,r){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,t){const{refreshToken:r,accessToken:i,expirationTime:s}=t,o=new ai;return r&&(te(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(te(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(te(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new ai,this.toJSON())}_performRefresh(){return Tn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gn(n,e){te(typeof n=="string"||typeof n=="undefined","internal-error",{appName:e})}class Wt{constructor(e){var{uid:t,auth:r,stsTokenManager:i}=e,s=Mu(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new eA(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new $l(s.createdAt||void 0,s.lastLoginAt||void 0)}getIdToken(e){return p(this,null,function*(){const t=yield pi(this,this.stsTokenManager.getToken(this.auth,e));return te(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,yield this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t})}getIdTokenResult(e){return Rg(this,e)}reload(){return bg(this)}_assign(e){this!==e&&(te(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new Wt(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){te(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}_updateTokensIfNecessary(e,t=!1){return p(this,null,function*(){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),t&&(yield ya(this)),yield this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)})}delete(){return p(this,null,function*(){if(Et(this.auth.app))return Promise.reject(Rn(this.auth));const e=yield this.getIdToken();return yield pi(this,XI(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()})}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var r,i,s,o,a,c,u,d;const h=(r=t.displayName)!==null&&r!==void 0?r:void 0,m=(i=t.email)!==null&&i!==void 0?i:void 0,_=(s=t.phoneNumber)!==null&&s!==void 0?s:void 0,w=(o=t.photoURL)!==null&&o!==void 0?o:void 0,E=(a=t.tenantId)!==null&&a!==void 0?a:void 0,v=(c=t._redirectEventId)!==null&&c!==void 0?c:void 0,C=(u=t.createdAt)!==null&&u!==void 0?u:void 0,O=(d=t.lastLoginAt)!==null&&d!==void 0?d:void 0,{uid:U,emailVerified:M,isAnonymous:Z,providerData:K,stsTokenManager:R}=t;te(U&&R,e,"internal-error");const T=ai.fromJSON(this.name,R);te(typeof U=="string",e,"internal-error"),Gn(h,e.name),Gn(m,e.name),te(typeof M=="boolean",e,"internal-error"),te(typeof Z=="boolean",e,"internal-error"),Gn(_,e.name),Gn(w,e.name),Gn(E,e.name),Gn(v,e.name),Gn(C,e.name),Gn(O,e.name);const I=new Wt({uid:U,auth:e,email:m,emailVerified:M,displayName:h,isAnonymous:Z,photoURL:w,phoneNumber:_,tenantId:E,stsTokenManager:T,createdAt:C,lastLoginAt:O});return K&&Array.isArray(K)&&(I.providerData=K.map(b=>Object.assign({},b))),v&&(I._redirectEventId=v),I}static _fromIdTokenResponse(e,t,r=!1){return p(this,null,function*(){const i=new ai;i.updateFromServerResponse(t);const s=new Wt({uid:t.localId,auth:e,stsTokenManager:i,isAnonymous:r});return yield ya(s),s})}static _fromGetAccountInfoResponse(e,t,r){return p(this,null,function*(){const i=t.users[0];te(i.localId!==void 0,"internal-error");const s=i.providerUserInfo!==void 0?Sg(i.providerUserInfo):[],o=!(i.email&&i.passwordHash)&&!(s!=null&&s.length),a=new ai;a.updateFromIdToken(r);const c=new Wt({uid:i.localId,auth:e,stsTokenManager:a,isAnonymous:o}),u={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:s,metadata:new $l(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(s!=null&&s.length)};return Object.assign(c,u),c})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ff=new Map;function In(n){Nn(n instanceof Function,"Expected a class definition");let e=Ff.get(n);return e?(Nn(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,Ff.set(n,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kg{constructor(){this.type="NONE",this.storage={}}_isAvailable(){return p(this,null,function*(){return!0})}_set(e,t){return p(this,null,function*(){this.storage[e]=t})}_get(e){return p(this,null,function*(){const t=this.storage[e];return t===void 0?null:t})}_remove(e){return p(this,null,function*(){delete this.storage[e]})}_addListener(e,t){}_removeListener(e,t){}}kg.type="NONE";const ql=kg;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ra(n,e,t){return`firebase:${n}:${e}:${t}`}class ci{constructor(e,t,r){this.persistence=e,this.auth=t,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=ra(this.userKey,i.apiKey,s),this.fullPersistenceKey=ra("persistence",i.apiKey,s),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}getCurrentUser(){return p(this,null,function*(){const e=yield this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const t=yield _a(this.auth,{idToken:e}).catch(()=>{});return t?Wt._fromGetAccountInfoResponse(this.auth,t,e):null}return Wt._fromJSON(this.auth,e)})}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}setPersistence(e){return p(this,null,function*(){if(this.persistence===e)return;const t=yield this.getCurrentUser();if(yield this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)})}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static create(e,t,r="authUser"){return p(this,null,function*(){if(!t.length)return new ci(In(ql),e,r);const i=(yield Promise.all(t.map(u=>p(this,null,function*(){if(yield u._isAvailable())return u})))).filter(u=>u);let s=i[0]||In(ql);const o=ra(r,e.config.apiKey,e.name);let a=null;for(const u of t)try{const d=yield u._get(o);if(d){let h;if(typeof d=="string"){const m=yield _a(e,{idToken:d}).catch(()=>{});if(!m)break;h=yield Wt._fromGetAccountInfoResponse(e,m,d)}else h=Wt._fromJSON(e,d);u!==s&&(a=h),s=u;break}}catch(d){}const c=i.filter(u=>u._shouldAllowMigration);return!s._shouldAllowMigration||!c.length?new ci(s,e,r):(s=c[0],a&&(yield s._set(o,a.toJSON())),yield Promise.all(t.map(u=>p(this,null,function*(){if(u!==s)try{yield u._remove(o)}catch(d){}}))),new ci(s,e,r))})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bf(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Ng(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Cg(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Lg(e))return"Blackberry";if(Vg(e))return"Webos";if(Pg(e))return"Safari";if((e.includes("chrome/")||Dg(e))&&!e.includes("edge/"))return"Chrome";if(Og(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=n.match(t);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function Cg(n=gt()){return/firefox\//i.test(n)}function Pg(n=gt()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Dg(n=gt()){return/crios\//i.test(n)}function Ng(n=gt()){return/iemobile/i.test(n)}function Og(n=gt()){return/android/i.test(n)}function Lg(n=gt()){return/blackberry/i.test(n)}function Vg(n=gt()){return/webos/i.test(n)}function $u(n=gt()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function iA(n=gt()){var e;return $u(n)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function sA(){return mT()&&document.documentMode===10}function Mg(n=gt()){return $u(n)||Og(n)||Vg(n)||Lg(n)||/windows phone/i.test(n)||Ng(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xg(n,e=[]){let t;switch(n){case"Browser":t=Bf(gt());break;case"Worker":t=`${Bf(gt())}-${n}`;break;default:t=n}const r=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${fr}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oA{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const r=s=>new Promise((o,a)=>{try{const c=e(s);o(c)}catch(c){a(c)}});r.onAbort=t,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}runMiddleware(e){return p(this,null,function*(){if(this.auth.currentUser===e)return;const t=[];try{for(const r of this.queue)yield r(e),r.onAbort&&t.push(r.onAbort)}catch(r){t.reverse();for(const i of t)try{i()}catch(s){}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}})}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function aA(t){return p(this,arguments,function*(n,e={}){return jt(n,"GET","/v2/passwordPolicy",Zt(n,e))})}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cA=6;class lA{constructor(e){var t,r,i,s;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(t=o.minPasswordLength)!==null&&t!==void 0?t:cA,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(s=e.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,r,i,s,o,a;const c={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,c),this.validatePasswordCharacterOptions(e,c),c.isValid&&(c.isValid=(t=c.meetsMinPasswordLength)!==null&&t!==void 0?t:!0),c.isValid&&(c.isValid=(r=c.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),c.isValid&&(c.isValid=(i=c.containsLowercaseLetter)!==null&&i!==void 0?i:!0),c.isValid&&(c.isValid=(s=c.containsUppercaseLetter)!==null&&s!==void 0?s:!0),c.isValid&&(c.isValid=(o=c.containsNumericCharacter)!==null&&o!==void 0?o:!0),c.isValid&&(c.isValid=(a=c.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),c}validatePasswordLengthOptions(e,t){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(t.meetsMinPasswordLength=e.length>=r),i&&(t.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(t,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,t,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uA{constructor(e,t,r,i){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new $f(this),this.idTokenSubscription=new $f(this),this.beforeStateQueue=new oA(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=vg,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion,this._persistenceManagerAvailable=new Promise(s=>this._resolvePersistenceManagerAvailable=s)}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=In(t)),this._initializationPromise=this.queue(()=>p(this,null,function*(){var r,i,s;if(!this._deleted&&(this.persistenceManager=yield ci.create(this,e),(r=this._resolvePersistenceManagerAvailable)===null||r===void 0||r.call(this),!this._deleted)){if(!((i=this._popupRedirectResolver)===null||i===void 0)&&i._shouldInitProactively)try{yield this._popupRedirectResolver._initialize(this)}catch(o){}yield this.initializeCurrentUser(t),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}})),this._initializationPromise}_onStorageEvent(){return p(this,null,function*(){if(this._deleted)return;const e=yield this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),yield this.currentUser.getIdToken();return}yield this._updateCurrentUser(e,!0)}})}initializeCurrentUserFromIdToken(e){return p(this,null,function*(){try{const t=yield _a(this,{idToken:e}),r=yield Wt._fromGetAccountInfoResponse(this,t,e);yield this.directlySetCurrentUser(r)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),yield this.directlySetCurrentUser(null)}})}initializeCurrentUser(e){return p(this,null,function*(){var t;if(Et(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(a=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(a,a))}):this.directlySetCurrentUser(null)}const r=yield this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){yield this.getOrInitRedirectPersistenceManager();const o=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,a=i==null?void 0:i._redirectEventId,c=yield this.tryRedirectSignIn(e);(!o||o===a)&&(c!=null&&c.user)&&(i=c.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{yield this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return te(this._popupRedirectResolver,this,"argument-error"),yield this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)})}tryRedirectSignIn(e){return p(this,null,function*(){let t=null;try{t=yield this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch(r){yield this._setRedirectUser(null)}return t})}reloadAndSetCurrentUserOrClear(e){return p(this,null,function*(){try{yield ya(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)})}useDeviceLanguage(){this.languageCode=zI()}_delete(){return p(this,null,function*(){this._deleted=!0})}updateCurrentUser(e){return p(this,null,function*(){if(Et(this.app))return Promise.reject(Rn(this));const t=e?fe(e):null;return t&&te(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))})}_updateCurrentUser(e,t=!1){return p(this,null,function*(){if(!this._deleted)return e&&te(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||(yield this.beforeStateQueue.runMiddleware(e)),this.queue(()=>p(this,null,function*(){yield this.directlySetCurrentUser(e),this.notifyAuthListeners()}))})}signOut(){return p(this,null,function*(){return Et(this.app)?Promise.reject(Rn(this)):(yield this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&(yield this._setRedirectUser(null)),this._updateCurrentUser(null,!0))})}setPersistence(e){return Et(this.app)?Promise.reject(Rn(this)):this.queue(()=>p(this,null,function*(){yield this.assertedPersistence.setPersistence(In(e))}))}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}validatePassword(e){return p(this,null,function*(){this._getPasswordPolicyInternal()||(yield this._updatePasswordPolicy());const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)})}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}_updatePasswordPolicy(){return p(this,null,function*(){const e=yield aA(this),t=new lA(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t})}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new $r("auth","Firebase",e())}onAuthStateChanged(e,t,r){return this.registerStateListener(this.authStateSubscription,e,t,r)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,r){return this.registerStateListener(this.idTokenSubscription,e,t,r)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},t)}})}revokeAccessToken(e){return p(this,null,function*(){if(this.currentUser){const t=yield this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(r.tenantId=this.tenantId),yield rA(this,r)}})}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}_setRedirectUser(e,t){return p(this,null,function*(){const r=yield this.getOrInitRedirectPersistenceManager(t);return e===null?r.removeCurrentUser():r.setCurrentUser(e)})}getOrInitRedirectPersistenceManager(e){return p(this,null,function*(){if(!this.redirectPersistenceManager){const t=e&&In(e)||this._popupRedirectResolver;te(t,this,"argument-error"),this.redirectPersistenceManager=yield ci.create(this,[In(t._redirectPersistence)],"redirectUser"),this.redirectUser=yield this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager})}_redirectUserForId(e){return p(this,null,function*(){var t,r;return this._isInitialized&&(yield this.queue(()=>p(this,null,function*(){}))),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null})}_persistUserIfCurrent(e){return p(this,null,function*(){if(e===this.currentUser)return this.queue(()=>p(this,null,function*(){return this.directlySetCurrentUser(e)}))})}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,r,i){if(this._deleted)return()=>{};const s=typeof t=="function"?t:t.next.bind(t);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(te(a,this,"internal-error"),a.then(()=>{o||s(this.currentUser)}),typeof t=="function"){const c=e.addObserver(t,r,i);return()=>{o=!0,c()}}else{const c=e.addObserver(t);return()=>{o=!0,c()}}}directlySetCurrentUser(e){return p(this,null,function*(){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?yield this.assertedPersistence.setCurrentUser(e):yield this.assertedPersistence.removeCurrentUser()})}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return te(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=xg(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}_getAdditionalHeaders(){return p(this,null,function*(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const r=yield(e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader();r&&(t["X-Firebase-Client"]=r);const i=yield this._getAppCheckToken();return i&&(t["X-Firebase-AppCheck"]=i),t})}_getAppCheckToken(){return p(this,null,function*(){var e;if(Et(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const t=yield(e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken();return t!=null&&t.error&&BI(`Error while retrieving App Check token: ${t.error}`),t==null?void 0:t.token})}}function mn(n){return fe(n)}class $f{constructor(e){this.auth=e,this.observer=null,this.addObserver=AT(t=>this.observer=t)}get next(){return te(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ic={loadJS(){return p(this,null,function*(){throw new Error("Unable to load external scripts")})},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function dA(n){ic=n}function Ug(n){return ic.loadJS(n)}function hA(){return ic.recaptchaEnterpriseScript}function fA(){return ic.gapiScript}function mA(n){return`__${n}${Math.floor(Math.random()*1e6)}`}class pA{constructor(){this.enterprise=new gA}ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}class gA{ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}const _A="recaptcha-enterprise",Fg="NO_RECAPTCHA";class yA{constructor(e){this.type=_A,this.auth=mn(e)}verify(e="verify",t=!1){return p(this,null,function*(){function r(s){return p(this,null,function*(){if(!t){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise((o,a)=>p(this,null,function*(){JI(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(c=>{if(c.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const u=new YI(c);return s.tenantId==null?s._agentRecaptchaConfig=u:s._tenantRecaptchaConfigs[s.tenantId]=u,o(u.siteKey)}}).catch(c=>{a(c)})}))})}function i(s,o,a){const c=window.grecaptcha;xf(c)?c.enterprise.ready(()=>{c.enterprise.execute(s,{action:e}).then(u=>{o(u)}).catch(()=>{o(Fg)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new pA().execute("siteKey",{action:"verify"}):new Promise((s,o)=>{r(this.auth).then(a=>{if(!t&&xf(window.grecaptcha))i(a,s,o);else{if(typeof window=="undefined"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let c=hA();c.length!==0&&(c+=a),Ug(c).then(()=>{i(a,s,o)}).catch(u=>{o(u)})}}).catch(a=>{o(a)})})})}}function qf(n,e,t,r=!1,i=!1){return p(this,null,function*(){const s=new yA(n);let o;if(i)o=Fg;else try{o=yield s.verify(t)}catch(c){o=yield s.verify(t,!0)}const a=Object.assign({},e);if(t==="mfaSmsEnrollment"||t==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in a){const c=a.phoneEnrollmentInfo.phoneNumber,u=a.phoneEnrollmentInfo.recaptchaToken;Object.assign(a,{phoneEnrollmentInfo:{phoneNumber:c,recaptchaToken:u,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in a){const c=a.phoneSignInInfo.recaptchaToken;Object.assign(a,{phoneSignInInfo:{recaptchaToken:c,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return a}return r?Object.assign(a,{captchaResp:o}):Object.assign(a,{captchaResponse:o}),Object.assign(a,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(a,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),a})}function wa(n,e,t,r,i){return p(this,null,function*(){var s;if(!((s=n._getRecaptchaConfig())===null||s===void 0)&&s.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const o=yield qf(n,e,t,t==="getOobCode");return r(n,o)}else return r(n,e).catch(o=>p(this,null,function*(){if(o.code==="auth/missing-recaptcha-token"){console.log(`${t} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const a=yield qf(n,e,t,t==="getOobCode");return r(n,a)}else return Promise.reject(o)}))})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bg(n,e){const t=Fn(n,"auth");if(t.isInitialized()){const i=t.getImmediate(),s=t.getOptions();if(Pn(s,e!=null?e:{}))return i;Mt(i,"already-initialized")}return t.initialize({options:e})}function wA(n,e){const t=(e==null?void 0:e.persistence)||[],r=(Array.isArray(t)?t:[t]).map(In);e!=null&&e.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function $g(n,e,t){const r=mn(n);te(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!1,s=qg(e),{host:o,port:a}=EA(e),c=a===null?"":`:${a}`,u={url:`${s}//${o}${c}/`},d=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})});if(!r._canInitEmulator){te(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),te(Pn(u,r.config.emulator)&&Pn(d,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=u,r.emulatorConfig=d,r.settings.appVerificationDisabledForTesting=!0,fn(o)?(tc(`${s}//${o}${c}`),nc("Auth",!0)):vA()}function qg(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function EA(n){const e=qg(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const r=t[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:jf(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:jf(o)}}}function jf(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function vA(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console!="undefined"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window!="undefined"&&typeof document!="undefined"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sc{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return Tn("not implemented")}_getIdTokenResponse(e){return Tn("not implemented")}_linkToIdToken(e,t){return Tn("not implemented")}_getReauthenticationResolver(e){return Tn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jg(n,e){return p(this,null,function*(){return jt(n,"POST","/v1/accounts:resetPassword",Zt(n,e))})}function TA(n,e){return p(this,null,function*(){return jt(n,"POST","/v1/accounts:signUp",e)})}function IA(n,e){return p(this,null,function*(){return jt(n,"POST","/v1/accounts:update",Zt(n,e))})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function AA(n,e){return p(this,null,function*(){return to(n,"POST","/v1/accounts:signInWithPassword",Zt(n,e))})}function zg(n,e){return p(this,null,function*(){return jt(n,"POST","/v1/accounts:sendOobCode",Zt(n,e))})}function RA(n,e){return p(this,null,function*(){return zg(n,e)})}function bA(n,e){return p(this,null,function*(){return zg(n,e)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function SA(n,e){return p(this,null,function*(){return to(n,"POST","/v1/accounts:signInWithEmailLink",Zt(n,e))})}function kA(n,e){return p(this,null,function*(){return to(n,"POST","/v1/accounts:signInWithEmailLink",Zt(n,e))})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gi extends sc{constructor(e,t,r,i=null){super("password",r),this._email=e,this._password=t,this._tenantId=i}static _fromEmailAndPassword(e,t){return new gi(e,t,"password")}static _fromEmailAndCode(e,t,r=null){return new gi(e,t,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;if(t!=null&&t.email&&(t!=null&&t.password)){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}_getIdTokenResponse(e){return p(this,null,function*(){switch(this.signInMethod){case"password":const t={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return wa(e,t,"signInWithPassword",AA);case"emailLink":return SA(e,{email:this._email,oobCode:this._password});default:Mt(e,"internal-error")}})}_linkToIdToken(e,t){return p(this,null,function*(){switch(this.signInMethod){case"password":const r={idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return wa(e,r,"signUpPassword",TA);case"emailLink":return kA(e,{idToken:t,email:this._email,oobCode:this._password});default:Mt(e,"internal-error")}})}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function li(n,e){return p(this,null,function*(){return to(n,"POST","/v1/accounts:signInWithIdp",Zt(n,e))})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const CA="http://localhost";class rr extends sc{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new rr(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):Mt("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=t,s=Mu(t,["providerId","signInMethod"]);if(!r||!i)return null;const o=new rr(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const t=this.buildRequest();return li(e,t)}_linkToIdToken(e,t){const r=this.buildRequest();return r.idToken=t,li(e,r)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,li(e,t)}buildRequest(){const e={requestUri:CA,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=Ci(t)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function PA(n){switch(n){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function DA(n){const e=as(cs(n)).link,t=e?as(cs(e)).deep_link_id:null,r=as(cs(n)).deep_link_id;return(r?as(cs(r)).link:null)||r||t||e||n}class oc{constructor(e){var t,r,i,s,o,a;const c=as(cs(e)),u=(t=c.apiKey)!==null&&t!==void 0?t:null,d=(r=c.oobCode)!==null&&r!==void 0?r:null,h=PA((i=c.mode)!==null&&i!==void 0?i:null);te(u&&d&&h,"argument-error"),this.apiKey=u,this.operation=h,this.code=d,this.continueUrl=(s=c.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(o=c.lang)!==null&&o!==void 0?o:null,this.tenantId=(a=c.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const t=DA(e);try{return new oc(t)}catch(r){return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qr{constructor(){this.providerId=qr.PROVIDER_ID}static credential(e,t){return gi._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const r=oc.parseLink(t);return te(r,"argument-error"),gi._fromEmailAndCode(e,r.code,r.tenantId)}}qr.PROVIDER_ID="password";qr.EMAIL_PASSWORD_SIGN_IN_METHOD="password";qr.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qu{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class no extends qu{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wn extends no{constructor(){super("facebook.com")}static credential(e){return rr._fromParams({providerId:wn.PROVIDER_ID,signInMethod:wn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return wn.credentialFromTaggedObject(e)}static credentialFromError(e){return wn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return wn.credential(e.oauthAccessToken)}catch(t){return null}}}wn.FACEBOOK_SIGN_IN_METHOD="facebook.com";wn.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class It extends no{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return rr._fromParams({providerId:It.PROVIDER_ID,signInMethod:It.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return It.credentialFromTaggedObject(e)}static credentialFromError(e){return It.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:r}=e;if(!t&&!r)return null;try{return It.credential(t,r)}catch(i){return null}}}It.GOOGLE_SIGN_IN_METHOD="google.com";It.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class En extends no{constructor(){super("github.com")}static credential(e){return rr._fromParams({providerId:En.PROVIDER_ID,signInMethod:En.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return En.credentialFromTaggedObject(e)}static credentialFromError(e){return En.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return En.credential(e.oauthAccessToken)}catch(t){return null}}}En.GITHUB_SIGN_IN_METHOD="github.com";En.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vn extends no{constructor(){super("twitter.com")}static credential(e,t){return rr._fromParams({providerId:vn.PROVIDER_ID,signInMethod:vn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return vn.credentialFromTaggedObject(e)}static credentialFromError(e){return vn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:r}=e;if(!t||!r)return null;try{return vn.credential(t,r)}catch(i){return null}}}vn.TWITTER_SIGN_IN_METHOD="twitter.com";vn.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function NA(n,e){return p(this,null,function*(){return to(n,"POST","/v1/accounts:signUp",Zt(n,e))})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pr{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static _fromIdTokenResponse(e,t,r,i=!1){return p(this,null,function*(){const s=yield Wt._fromIdTokenResponse(e,r,i),o=zf(r);return new Pr({user:s,providerId:o,_tokenResponse:r,operationType:t})})}static _forOperation(e,t,r){return p(this,null,function*(){yield e._updateTokensIfNecessary(r,!0);const i=zf(r);return new Pr({user:e,providerId:i,_tokenResponse:r,operationType:t})})}}function zf(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ea extends qt{constructor(e,t,r,i){var s;super(t.code,t.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,Ea.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:t.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,t,r,i){return new Ea(e,t,r,i)}}function Gg(n,e,t,r){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?Ea._fromErrorAndOperation(n,s,e,r):s})}function OA(n,e,t=!1){return p(this,null,function*(){const r=yield pi(n,e._linkToIdToken(n.auth,yield n.getIdToken()),t);return Pr._forOperation(n,"link",r)})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function LA(n,e,t=!1){return p(this,null,function*(){const{auth:r}=n;if(Et(r.app))return Promise.reject(Rn(r));const i="reauthenticate";try{const s=yield pi(n,Gg(r,i,e,n),t);te(s.idToken,r,"internal-error");const o=Bu(s.idToken);te(o,r,"internal-error");const{sub:a}=o;return te(n.uid===a,r,"user-mismatch"),Pr._forOperation(n,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&Mt(r,"user-mismatch"),s}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wg(n,e,t=!1){return p(this,null,function*(){if(Et(n.app))return Promise.reject(Rn(n));const r="signIn",i=yield Gg(n,r,e),s=yield Pr._fromIdTokenResponse(n,r,i);return t||(yield n._updateCurrentUser(s.user)),s})}function Hg(n,e){return p(this,null,function*(){return Wg(mn(n),e)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ju{constructor(e,t){this.factorId=e,this.uid=t.mfaEnrollmentId,this.enrollmentTime=new Date(t.enrolledAt).toUTCString(),this.displayName=t.displayName}static _fromServerResponse(e,t){return"phoneInfo"in t?zu._fromServerResponse(e,t):"totpInfo"in t?Gu._fromServerResponse(e,t):Mt(e,"internal-error")}}class zu extends ju{constructor(e){super("phone",e),this.phoneNumber=e.phoneInfo}static _fromServerResponse(e,t){return new zu(t)}}class Gu extends ju{constructor(e){super("totp",e)}static _fromServerResponse(e,t){return new Gu(t)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wu(n){return p(this,null,function*(){const e=mn(n);e._getPasswordPolicyInternal()&&(yield e._updatePasswordPolicy())})}function Kg(n,e,t){return p(this,null,function*(){const r=mn(n);yield wa(r,{requestType:"PASSWORD_RESET",email:e,clientType:"CLIENT_TYPE_WEB"},"getOobCode",bA)})}function VA(n,e,t){return p(this,null,function*(){yield jg(fe(n),{oobCode:e,newPassword:t}).catch(r=>p(this,null,function*(){throw r.code==="auth/password-does-not-meet-requirements"&&Wu(n),r}))})}function MA(n,e){return p(this,null,function*(){yield IA(fe(n),{oobCode:e})})}function xA(n,e){return p(this,null,function*(){const t=fe(n),r=yield jg(t,{oobCode:e}),i=r.requestType;switch(te(i,t,"internal-error"),i){case"EMAIL_SIGNIN":break;case"VERIFY_AND_CHANGE_EMAIL":te(r.newEmail,t,"internal-error");break;case"REVERT_SECOND_FACTOR_ADDITION":te(r.mfaInfo,t,"internal-error");default:te(r.email,t,"internal-error")}let s=null;return r.mfaInfo&&(s=ju._fromServerResponse(mn(t),r.mfaInfo)),{data:{email:(r.requestType==="VERIFY_AND_CHANGE_EMAIL"?r.newEmail:r.email)||null,previousEmail:(r.requestType==="VERIFY_AND_CHANGE_EMAIL"?r.email:r.newEmail)||null,multiFactorInfo:s},operation:i}})}function Qg(n,e,t){return p(this,null,function*(){if(Et(n.app))return Promise.reject(Rn(n));const r=mn(n),o=yield wa(r,{returnSecureToken:!0,email:e,password:t,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",NA).catch(c=>{throw c.code==="auth/password-does-not-meet-requirements"&&Wu(n),c}),a=yield Pr._fromIdTokenResponse(r,"signIn",o);return yield r._updateCurrentUser(a.user),a})}function ps(n,e,t){return Et(n.app)?Promise.reject(Rn(n)):Hg(fe(n),qr.credential(e,t)).catch(r=>p(this,null,function*(){throw r.code==="auth/password-does-not-meet-requirements"&&Wu(n),r}))}function Ls(n,e){return p(this,null,function*(){const t=fe(n),i={requestType:"VERIFY_EMAIL",idToken:yield n.getIdToken()},{email:s}=yield RA(t.auth,i);s!==n.email&&(yield n.reload())})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function UA(n,e){return p(this,null,function*(){return jt(n,"POST","/v1/accounts:update",e)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function va(r,i){return p(this,arguments,function*(n,{displayName:e,photoURL:t}){if(e===void 0&&t===void 0)return;const s=fe(n),a={idToken:yield s.getIdToken(),displayName:e,photoUrl:t,returnSecureToken:!0},c=yield pi(s,UA(s.auth,a));s.displayName=c.displayName||null,s.photoURL=c.photoUrl||null;const u=s.providerData.find(({providerId:d})=>d==="password");u&&(u.displayName=s.displayName,u.photoURL=s.photoURL),yield s._updateTokensIfNecessary(c)})}function Yg(n,e,t,r){return fe(n).onIdTokenChanged(e,t,r)}function Jg(n,e,t){return fe(n).beforeAuthStateChanged(e,t)}function Xg(n,e,t,r){return fe(n).onAuthStateChanged(e,t,r)}function Ve(n){return fe(n).signOut()}const Ta="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zg{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(Ta,"1"),this.storage.removeItem(Ta),Promise.resolve(!0)):Promise.resolve(!1)}catch(e){return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const FA=1e3,BA=10;class ui extends Zg{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Mg(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const r=this.storage.getItem(t),i=this.localCache[t];r!==i&&e(t,i,r)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((o,a,c)=>{this.notifyListeners(o,c)});return}const r=e.key;t?this.detachListener():this.stopPolling();const i=()=>{const o=this.storage.getItem(r);!t&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);sA()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,BA):i()}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:r}),!0)})},FA)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}_set(e,t){return p(this,null,function*(){yield Er(ui.prototype,this,"_set").call(this,e,t),this.localCache[e]=JSON.stringify(t)})}_get(e){return p(this,null,function*(){const t=yield Er(ui.prototype,this,"_get").call(this,e);return this.localCache[e]=JSON.stringify(t),t})}_remove(e){return p(this,null,function*(){yield Er(ui.prototype,this,"_remove").call(this,e),delete this.localCache[e]})}}ui.type="LOCAL";const e_=ui;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class t_ extends Zg{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}t_.type="SESSION";const Hu=t_;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $A(n){return Promise.all(n.map(e=>p(this,null,function*(){try{return{fulfilled:!0,value:yield e}}catch(t){return{fulfilled:!1,reason:t}}})))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ac{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(i=>i.isListeningto(e));if(t)return t;const r=new ac(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}handleEvent(e){return p(this,null,function*(){const t=e,{eventId:r,eventType:i,data:s}=t.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;t.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(o).map(u=>p(this,null,function*(){return u(t.origin,s)})),c=yield $A(a);t.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:c})})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}ac.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ku(n="",e=10){let t="";for(let r=0;r<e;r++)t+=Math.floor(Math.random()*10);return n+t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qA{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}_send(e,t,r=50){return p(this,null,function*(){const i=typeof MessageChannel!="undefined"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((a,c)=>{const u=Ku("",20);i.port1.start();const d=setTimeout(()=>{c(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(h){const m=h;if(m.data.eventId===u)switch(m.data.status){case"ack":clearTimeout(d),s=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(m.data.response);break;default:clearTimeout(d),clearTimeout(s),c(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:t},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function an(){return window}function jA(n){an().location.href=n}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function n_(){return typeof an().WorkerGlobalScope!="undefined"&&typeof an().importScripts=="function"}function zA(){return p(this,null,function*(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(yield navigator.serviceWorker.ready).active}catch(n){return null}})}function GA(){var n;return((n=navigator==null?void 0:navigator.serviceWorker)===null||n===void 0?void 0:n.controller)||null}function WA(){return n_()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const r_="firebaseLocalStorageDb",HA=1,Ia="firebaseLocalStorage",i_="fbase_key";class ro{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function cc(n,e){return n.transaction([Ia],e?"readwrite":"readonly").objectStore(Ia)}function KA(){const n=indexedDB.deleteDatabase(r_);return new ro(n).toPromise()}function jl(){const n=indexedDB.open(r_,HA);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const r=n.result;try{r.createObjectStore(Ia,{keyPath:i_})}catch(i){t(i)}}),n.addEventListener("success",()=>p(this,null,function*(){const r=n.result;r.objectStoreNames.contains(Ia)?e(r):(r.close(),yield KA(),e(yield jl()))}))})}function Gf(n,e,t){return p(this,null,function*(){const r=cc(n,!0).put({[i_]:e,value:t});return new ro(r).toPromise()})}function QA(n,e){return p(this,null,function*(){const t=cc(n,!1).get(e),r=yield new ro(t).toPromise();return r===void 0?null:r.value})}function Wf(n,e){const t=cc(n,!0).delete(e);return new ro(t).toPromise()}const YA=800,JA=3;class s_{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}_openDb(){return p(this,null,function*(){return this.db?this.db:(this.db=yield jl(),this.db)})}_withRetries(e){return p(this,null,function*(){let t=0;for(;;)try{const r=yield this._openDb();return yield e(r)}catch(r){if(t++>JA)throw r;this.db&&(this.db.close(),this.db=void 0)}})}initializeServiceWorkerMessaging(){return p(this,null,function*(){return n_()?this.initializeReceiver():this.initializeSender()})}initializeReceiver(){return p(this,null,function*(){this.receiver=ac._getInstance(WA()),this.receiver._subscribe("keyChanged",(e,t)=>p(this,null,function*(){return{keyProcessed:(yield this._poll()).includes(t.key)}})),this.receiver._subscribe("ping",(e,t)=>p(this,null,function*(){return["keyChanged"]}))})}initializeSender(){return p(this,null,function*(){var e,t;if(this.activeServiceWorker=yield zA(),!this.activeServiceWorker)return;this.sender=new qA(this.activeServiceWorker);const r=yield this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((t=r[0])===null||t===void 0)&&t.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)})}notifyServiceWorker(e){return p(this,null,function*(){if(!(!this.sender||!this.activeServiceWorker||GA()!==this.activeServiceWorker))try{yield this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch(t){}})}_isAvailable(){return p(this,null,function*(){try{if(!indexedDB)return!1;const e=yield jl();return yield Gf(e,Ta,"1"),yield Wf(e,Ta),!0}catch(e){}return!1})}_withPendingWrite(e){return p(this,null,function*(){this.pendingWrites++;try{yield e()}finally{this.pendingWrites--}})}_set(e,t){return p(this,null,function*(){return this._withPendingWrite(()=>p(this,null,function*(){return yield this._withRetries(r=>Gf(r,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)}))})}_get(e){return p(this,null,function*(){const t=yield this._withRetries(r=>QA(r,e));return this.localCache[e]=t,t})}_remove(e){return p(this,null,function*(){return this._withPendingWrite(()=>p(this,null,function*(){return yield this._withRetries(t=>Wf(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)}))})}_poll(){return p(this,null,function*(){const e=yield this._withRetries(i=>{const s=cc(i,!1).getAll();return new ro(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),t.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),t.push(i));return t})}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>p(this,null,function*(){return this._poll()}),YA)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}s_.type="LOCAL";const o_=s_;new eo(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function a_(n,e){return e?In(e):(te(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qu extends sc{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return li(e,this._buildIdpRequest())}_linkToIdToken(e,t){return li(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return li(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function XA(n){return Wg(n.auth,new Qu(n),n.bypassAuthState)}function ZA(n){const{auth:e,user:t}=n;return te(t,e,"internal-error"),LA(t,new Qu(n),n.bypassAuthState)}function eR(n){return p(this,null,function*(){const{auth:e,user:t}=n;return te(t,e,"internal-error"),OA(t,new Qu(n),n.bypassAuthState)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class c_{constructor(e,t,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise((e,t)=>p(this,null,function*(){this.pendingPromise={resolve:e,reject:t};try{this.eventManager=yield this.resolver._initialize(this.auth),yield this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}}))}onAuthEvent(e){return p(this,null,function*(){const{urlResponse:t,sessionId:r,postBody:i,tenantId:s,error:o,type:a}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:t,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(yield this.getIdpTask(a)(c))}catch(u){this.reject(u)}})}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return XA;case"linkViaPopup":case"linkViaRedirect":return eR;case"reauthViaPopup":case"reauthViaRedirect":return ZA;default:Mt(this.auth,"internal-error")}}resolve(e){Nn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Nn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tR=new eo(2e3,1e4);function Aa(n,e,t){return p(this,null,function*(){if(Et(n.app))return Promise.reject(Kt(n,"operation-not-supported-in-this-environment"));const r=mn(n);$I(n,e,qu);const i=a_(r,t);return new Ir(r,"signInViaPopup",e,i).executeNotNull()})}class Ir extends c_{constructor(e,t,r,i,s){super(e,t,i,s),this.provider=r,this.authWindow=null,this.pollId=null,Ir.currentPopupAction&&Ir.currentPopupAction.cancel(),Ir.currentPopupAction=this}executeNotNull(){return p(this,null,function*(){const e=yield this.execute();return te(e,this.auth,"internal-error"),e})}onExecution(){return p(this,null,function*(){Nn(this.filter.length===1,"Popup operations only handle one event");const e=Ku();this.authWindow=yield this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(Kt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()})}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Kt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Ir.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,r;if(!((r=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Kt(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,tR.get())};e()}}Ir.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nR="pendingRedirect",ia=new Map;class gs extends c_{constructor(e,t,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,r),this.eventId=null}execute(){return p(this,null,function*(){let e=ia.get(this.auth._key());if(!e){try{const r=(yield rR(this.resolver,this.auth))?yield Er(gs.prototype,this,"execute").call(this):null;e=()=>Promise.resolve(r)}catch(t){e=()=>Promise.reject(t)}ia.set(this.auth._key(),e)}return this.bypassAuthState||ia.set(this.auth._key(),()=>Promise.resolve(null)),e()})}onAuthEvent(e){return p(this,null,function*(){if(e.type==="signInViaRedirect")return Er(gs.prototype,this,"onAuthEvent").call(this,e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=yield this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,Er(gs.prototype,this,"onAuthEvent").call(this,e);this.resolve(null)}})}onExecution(){return p(this,null,function*(){})}cleanUp(){}}function rR(n,e){return p(this,null,function*(){const t=oR(e),r=sR(n);if(!(yield r._isAvailable()))return!1;const i=(yield r._get(t))==="true";return yield r._remove(t),i})}function iR(n,e){ia.set(n._key(),e)}function sR(n){return In(n._redirectPersistence)}function oR(n){return ra(nR,n.config.apiKey,n.name)}function aR(n,e,t=!1){return p(this,null,function*(){if(Et(n.app))return Promise.reject(Rn(n));const r=mn(n),i=a_(r,e),o=yield new gs(r,i,t).execute();return o&&!t&&(delete o.user._redirectEventId,yield r._persistUserIfCurrent(o.user),yield r._setRedirectUser(null,e)),o})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cR=10*60*1e3;class lR{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(t=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!uR(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var r;if(e.error&&!l_(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";t.onError(Kt(this.auth,i))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const r=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=cR&&this.cachedEventUids.clear(),this.cachedEventUids.has(Hf(e))}saveEventToCache(e){this.cachedEventUids.add(Hf(e)),this.lastProcessedEventTime=Date.now()}}function Hf(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function l_({type:n,error:e}){return n==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function uR(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return l_(n);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dR(t){return p(this,arguments,function*(n,e={}){return jt(n,"GET","/v1/projects",e)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hR=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,fR=/^https?/;function mR(n){return p(this,null,function*(){if(n.config.emulator)return;const{authorizedDomains:e}=yield dR(n);for(const t of e)try{if(pR(t))return}catch(r){}Mt(n,"unauthorized-domain")})}function pR(n){const e=Bl(),{protocol:t,hostname:r}=new URL(e);if(n.startsWith("chrome-extension://")){const o=new URL(n);return o.hostname===""&&r===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&o.hostname===r}if(!fR.test(t))return!1;if(hR.test(n))return r===n;const i=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gR=new eo(3e4,6e4);function Kf(){const n=an().___jsl;if(n!=null&&n.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function _R(n){return new Promise((e,t)=>{var r,i,s;function o(){Kf(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Kf(),t(Kt(n,"network-request-failed"))},timeout:gR.get()})}if(!((i=(r=an().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=an().gapi)===null||s===void 0)&&s.load)o();else{const a=mA("iframefcb");return an()[a]=()=>{gapi.load?o():t(Kt(n,"network-request-failed"))},Ug(`${fA()}?onload=${a}`).catch(c=>t(c))}}).catch(e=>{throw sa=null,e})}let sa=null;function yR(n){return sa=sa||_R(n),sa}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wR=new eo(5e3,15e3),ER="__/auth/iframe",vR="emulator/auth/iframe",TR={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},IR=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function AR(n){const e=n.config;te(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?Fu(e,vR):`https://${n.config.authDomain}/${ER}`,r={apiKey:e.apiKey,appName:n.name,v:fr},i=IR.get(n.config.apiHost);i&&(r.eid=i);const s=n._getFrameworks();return s.length&&(r.fw=s.join(",")),`${t}?${Ci(r).slice(1)}`}function RR(n){return p(this,null,function*(){const e=yield yR(n),t=an().gapi;return te(t,n,"internal-error"),e.open({where:document.body,url:AR(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:TR,dontclear:!0},r=>new Promise((i,s)=>p(this,null,function*(){yield r.restyle({setHideOnLeave:!1});const o=Kt(n,"network-request-failed"),a=an().setTimeout(()=>{s(o)},wR.get());function c(){an().clearTimeout(a),i(r)}r.ping(c).then(c,()=>{s(o)})})))})}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bR={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},SR=500,kR=600,CR="_blank",PR="http://localhost";class Qf{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch(e){}}}function DR(n,e,t,r=SR,i=kR){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const c=Object.assign(Object.assign({},bR),{width:r.toString(),height:i.toString(),top:s,left:o}),u=gt().toLowerCase();t&&(a=Dg(u)?CR:t),Cg(u)&&(e=e||PR,c.scrollbars="yes");const d=Object.entries(c).reduce((m,[_,w])=>`${m}${_}=${w},`,"");if(iA(u)&&a!=="_self")return NR(e||"",a),new Qf(null);const h=window.open(e||"",a,d);te(h,n,"popup-blocked");try{h.focus()}catch(m){}return new Qf(h)}function NR(n,e){const t=document.createElement("a");t.href=n,t.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const OR="__/auth/handler",LR="emulator/auth/handler",VR=encodeURIComponent("fac");function Yf(n,e,t,r,i,s){return p(this,null,function*(){te(n.config.authDomain,n,"auth-domain-config-required"),te(n.config.apiKey,n,"invalid-api-key");const o={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:r,v:fr,eventId:i};if(e instanceof qu){e.setDefaultLanguage(n.languageCode),o.providerId=e.providerId||"",Ll(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[d,h]of Object.entries({}))o[d]=h}if(e instanceof no){const d=e.getScopes().filter(h=>h!=="");d.length>0&&(o.scopes=d.join(","))}n.tenantId&&(o.tid=n.tenantId);const a=o;for(const d of Object.keys(a))a[d]===void 0&&delete a[d];const c=yield n._getAppCheckToken(),u=c?`#${VR}=${encodeURIComponent(c)}`:"";return`${MR(n)}?${Ci(a).slice(1)}${u}`})}function MR({config:n}){return n.emulator?Fu(n,LR):`https://${n.authDomain}/${OR}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gl="webStorageSupport";class xR{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Hu,this._completeRedirectFn=aR,this._overrideRedirectResult=iR}_openPopup(e,t,r,i){return p(this,null,function*(){var s;Nn((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=yield Yf(e,t,r,Bl(),i);return DR(e,o,Ku())})}_openRedirect(e,t,r,i){return p(this,null,function*(){yield this._originValidation(e);const s=yield Yf(e,t,r,Bl(),i);return jA(s),new Promise(()=>{})})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:i,promise:s}=this.eventManagers[t];return i?Promise.resolve(i):(Nn(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[t]={promise:r},r.catch(()=>{delete this.eventManagers[t]}),r}initAndGetManager(e){return p(this,null,function*(){const t=yield RR(e),r=new lR(e);return t.register("authEvent",i=>(te(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=t,r})}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(gl,{type:gl},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[gl];o!==void 0&&t(!!o),Mt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=mR(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return Mg()||Pg()||$u()}}const u_=xR;var Jf="@firebase/auth",Xf="1.10.8";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UR{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}getToken(e){return p(this,null,function*(){return this.assertAuthConfigured(),yield this.auth._initializationPromise,this.auth.currentUser?{accessToken:yield this.auth.currentUser.getIdToken(e)}:null})}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){te(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function FR(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function BR(n){Ft(new Vt("auth",(e,{options:t})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;te(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const c={apiKey:o,authDomain:a,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:xg(n)},u=new uA(r,i,s,c);return wA(u,t),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,r)=>{e.getProvider("auth-internal").initialize()})),Ft(new Vt("auth-internal",e=>{const t=mn(e.getProvider("auth").getImmediate());return(r=>new UR(r))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),pt(Jf,Xf,FR(n)),pt(Jf,Xf,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $R=5*60,qR=ag("authIdTokenMaxAge")||$R;let Zf=null;const jR=n=>e=>p(void 0,null,function*(){const t=e&&(yield e.getIdTokenResult()),r=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(r&&r>qR)return;const i=t==null?void 0:t.token;Zf!==i&&(Zf=i,yield fetch(n,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))});function oa(n=Zs()){const e=Fn(n,"auth");if(e.isInitialized())return e.getImmediate();const t=Bg(n,{popupRedirectResolver:u_,persistence:[o_,e_,Hu]}),r=ag("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const s=new URL(r,location.origin);if(location.origin===s.origin){const o=jR(s.toString());Jg(t,o,()=>o(t.currentUser)),Yg(t,a=>o(a))}}const i=sg("auth");return i&&$g(t,`http://${i}`),t}function zR(){var n,e;return(e=(n=document.getElementsByTagName("head"))===null||n===void 0?void 0:n[0])!==null&&e!==void 0?e:document}dA({loadJS(n){return new Promise((e,t)=>{const r=document.createElement("script");r.setAttribute("src",n),r.onload=e,r.onerror=i=>{const s=Kt("internal-error");s.customData=i,t(s)},r.type="text/javascript",r.charset="UTF-8",zR().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});BR("Browser");const Vs=Object.freeze(Object.defineProperty({__proto__:null,ActionCodeURL:oc,AuthCredential:sc,EmailAuthCredential:gi,EmailAuthProvider:qr,FacebookAuthProvider:wn,GithubAuthProvider:En,GoogleAuthProvider:It,OAuthCredential:rr,TwitterAuthProvider:vn,applyActionCode:MA,beforeAuthStateChanged:Jg,browserLocalPersistence:e_,browserPopupRedirectResolver:u_,browserSessionPersistence:Hu,checkActionCode:xA,confirmPasswordReset:VA,connectAuthEmulator:$g,createUserWithEmailAndPassword:Qg,getAuth:oa,getIdTokenResult:Rg,inMemoryPersistence:ql,indexedDBLocalPersistence:o_,initializeAuth:Bg,onAuthStateChanged:Xg,onIdTokenChanged:Yg,prodErrorMap:Eg,reload:bg,sendEmailVerification:Ls,sendPasswordResetEmail:Kg,signInWithCredential:Hg,signInWithEmailAndPassword:ps,signInWithPopup:Aa,signOut:Ve,updateProfile:va},Symbol.toStringTag,{value:"Module"}));var em=typeof globalThis!="undefined"?globalThis:typeof window!="undefined"?window:typeof global!="undefined"?global:typeof self!="undefined"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Zn,d_;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(R,T){function I(){}I.prototype=T.prototype,R.D=T.prototype,R.prototype=new I,R.prototype.constructor=R,R.C=function(b,k,D){for(var A=Array(arguments.length-2),pn=2;pn<arguments.length;pn++)A[pn-2]=arguments[pn];return T.prototype[k].apply(b,A)}}function t(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,t),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(R,T,I){I||(I=0);var b=Array(16);if(typeof T=="string")for(var k=0;16>k;++k)b[k]=T.charCodeAt(I++)|T.charCodeAt(I++)<<8|T.charCodeAt(I++)<<16|T.charCodeAt(I++)<<24;else for(k=0;16>k;++k)b[k]=T[I++]|T[I++]<<8|T[I++]<<16|T[I++]<<24;T=R.g[0],I=R.g[1],k=R.g[2];var D=R.g[3],A=T+(D^I&(k^D))+b[0]+3614090360&4294967295;T=I+(A<<7&4294967295|A>>>25),A=D+(k^T&(I^k))+b[1]+3905402710&4294967295,D=T+(A<<12&4294967295|A>>>20),A=k+(I^D&(T^I))+b[2]+606105819&4294967295,k=D+(A<<17&4294967295|A>>>15),A=I+(T^k&(D^T))+b[3]+3250441966&4294967295,I=k+(A<<22&4294967295|A>>>10),A=T+(D^I&(k^D))+b[4]+4118548399&4294967295,T=I+(A<<7&4294967295|A>>>25),A=D+(k^T&(I^k))+b[5]+1200080426&4294967295,D=T+(A<<12&4294967295|A>>>20),A=k+(I^D&(T^I))+b[6]+2821735955&4294967295,k=D+(A<<17&4294967295|A>>>15),A=I+(T^k&(D^T))+b[7]+4249261313&4294967295,I=k+(A<<22&4294967295|A>>>10),A=T+(D^I&(k^D))+b[8]+1770035416&4294967295,T=I+(A<<7&4294967295|A>>>25),A=D+(k^T&(I^k))+b[9]+2336552879&4294967295,D=T+(A<<12&4294967295|A>>>20),A=k+(I^D&(T^I))+b[10]+4294925233&4294967295,k=D+(A<<17&4294967295|A>>>15),A=I+(T^k&(D^T))+b[11]+2304563134&4294967295,I=k+(A<<22&4294967295|A>>>10),A=T+(D^I&(k^D))+b[12]+1804603682&4294967295,T=I+(A<<7&4294967295|A>>>25),A=D+(k^T&(I^k))+b[13]+4254626195&4294967295,D=T+(A<<12&4294967295|A>>>20),A=k+(I^D&(T^I))+b[14]+2792965006&4294967295,k=D+(A<<17&4294967295|A>>>15),A=I+(T^k&(D^T))+b[15]+1236535329&4294967295,I=k+(A<<22&4294967295|A>>>10),A=T+(k^D&(I^k))+b[1]+4129170786&4294967295,T=I+(A<<5&4294967295|A>>>27),A=D+(I^k&(T^I))+b[6]+3225465664&4294967295,D=T+(A<<9&4294967295|A>>>23),A=k+(T^I&(D^T))+b[11]+643717713&4294967295,k=D+(A<<14&4294967295|A>>>18),A=I+(D^T&(k^D))+b[0]+3921069994&4294967295,I=k+(A<<20&4294967295|A>>>12),A=T+(k^D&(I^k))+b[5]+3593408605&4294967295,T=I+(A<<5&4294967295|A>>>27),A=D+(I^k&(T^I))+b[10]+38016083&4294967295,D=T+(A<<9&4294967295|A>>>23),A=k+(T^I&(D^T))+b[15]+3634488961&4294967295,k=D+(A<<14&4294967295|A>>>18),A=I+(D^T&(k^D))+b[4]+3889429448&4294967295,I=k+(A<<20&4294967295|A>>>12),A=T+(k^D&(I^k))+b[9]+568446438&4294967295,T=I+(A<<5&4294967295|A>>>27),A=D+(I^k&(T^I))+b[14]+3275163606&4294967295,D=T+(A<<9&4294967295|A>>>23),A=k+(T^I&(D^T))+b[3]+4107603335&4294967295,k=D+(A<<14&4294967295|A>>>18),A=I+(D^T&(k^D))+b[8]+1163531501&4294967295,I=k+(A<<20&4294967295|A>>>12),A=T+(k^D&(I^k))+b[13]+2850285829&4294967295,T=I+(A<<5&4294967295|A>>>27),A=D+(I^k&(T^I))+b[2]+4243563512&4294967295,D=T+(A<<9&4294967295|A>>>23),A=k+(T^I&(D^T))+b[7]+1735328473&4294967295,k=D+(A<<14&4294967295|A>>>18),A=I+(D^T&(k^D))+b[12]+2368359562&4294967295,I=k+(A<<20&4294967295|A>>>12),A=T+(I^k^D)+b[5]+4294588738&4294967295,T=I+(A<<4&4294967295|A>>>28),A=D+(T^I^k)+b[8]+2272392833&4294967295,D=T+(A<<11&4294967295|A>>>21),A=k+(D^T^I)+b[11]+1839030562&4294967295,k=D+(A<<16&4294967295|A>>>16),A=I+(k^D^T)+b[14]+4259657740&4294967295,I=k+(A<<23&4294967295|A>>>9),A=T+(I^k^D)+b[1]+2763975236&4294967295,T=I+(A<<4&4294967295|A>>>28),A=D+(T^I^k)+b[4]+1272893353&4294967295,D=T+(A<<11&4294967295|A>>>21),A=k+(D^T^I)+b[7]+4139469664&4294967295,k=D+(A<<16&4294967295|A>>>16),A=I+(k^D^T)+b[10]+3200236656&4294967295,I=k+(A<<23&4294967295|A>>>9),A=T+(I^k^D)+b[13]+681279174&4294967295,T=I+(A<<4&4294967295|A>>>28),A=D+(T^I^k)+b[0]+3936430074&4294967295,D=T+(A<<11&4294967295|A>>>21),A=k+(D^T^I)+b[3]+3572445317&4294967295,k=D+(A<<16&4294967295|A>>>16),A=I+(k^D^T)+b[6]+76029189&4294967295,I=k+(A<<23&4294967295|A>>>9),A=T+(I^k^D)+b[9]+3654602809&4294967295,T=I+(A<<4&4294967295|A>>>28),A=D+(T^I^k)+b[12]+3873151461&4294967295,D=T+(A<<11&4294967295|A>>>21),A=k+(D^T^I)+b[15]+530742520&4294967295,k=D+(A<<16&4294967295|A>>>16),A=I+(k^D^T)+b[2]+3299628645&4294967295,I=k+(A<<23&4294967295|A>>>9),A=T+(k^(I|~D))+b[0]+4096336452&4294967295,T=I+(A<<6&4294967295|A>>>26),A=D+(I^(T|~k))+b[7]+1126891415&4294967295,D=T+(A<<10&4294967295|A>>>22),A=k+(T^(D|~I))+b[14]+2878612391&4294967295,k=D+(A<<15&4294967295|A>>>17),A=I+(D^(k|~T))+b[5]+4237533241&4294967295,I=k+(A<<21&4294967295|A>>>11),A=T+(k^(I|~D))+b[12]+1700485571&4294967295,T=I+(A<<6&4294967295|A>>>26),A=D+(I^(T|~k))+b[3]+2399980690&4294967295,D=T+(A<<10&4294967295|A>>>22),A=k+(T^(D|~I))+b[10]+4293915773&4294967295,k=D+(A<<15&4294967295|A>>>17),A=I+(D^(k|~T))+b[1]+2240044497&4294967295,I=k+(A<<21&4294967295|A>>>11),A=T+(k^(I|~D))+b[8]+1873313359&4294967295,T=I+(A<<6&4294967295|A>>>26),A=D+(I^(T|~k))+b[15]+4264355552&4294967295,D=T+(A<<10&4294967295|A>>>22),A=k+(T^(D|~I))+b[6]+2734768916&4294967295,k=D+(A<<15&4294967295|A>>>17),A=I+(D^(k|~T))+b[13]+1309151649&4294967295,I=k+(A<<21&4294967295|A>>>11),A=T+(k^(I|~D))+b[4]+4149444226&4294967295,T=I+(A<<6&4294967295|A>>>26),A=D+(I^(T|~k))+b[11]+3174756917&4294967295,D=T+(A<<10&4294967295|A>>>22),A=k+(T^(D|~I))+b[2]+718787259&4294967295,k=D+(A<<15&4294967295|A>>>17),A=I+(D^(k|~T))+b[9]+3951481745&4294967295,R.g[0]=R.g[0]+T&4294967295,R.g[1]=R.g[1]+(k+(A<<21&4294967295|A>>>11))&4294967295,R.g[2]=R.g[2]+k&4294967295,R.g[3]=R.g[3]+D&4294967295}r.prototype.u=function(R,T){T===void 0&&(T=R.length);for(var I=T-this.blockSize,b=this.B,k=this.h,D=0;D<T;){if(k==0)for(;D<=I;)i(this,R,D),D+=this.blockSize;if(typeof R=="string"){for(;D<T;)if(b[k++]=R.charCodeAt(D++),k==this.blockSize){i(this,b),k=0;break}}else for(;D<T;)if(b[k++]=R[D++],k==this.blockSize){i(this,b),k=0;break}}this.h=k,this.o+=T},r.prototype.v=function(){var R=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);R[0]=128;for(var T=1;T<R.length-8;++T)R[T]=0;var I=8*this.o;for(T=R.length-8;T<R.length;++T)R[T]=I&255,I/=256;for(this.u(R),R=Array(16),T=I=0;4>T;++T)for(var b=0;32>b;b+=8)R[I++]=this.g[T]>>>b&255;return R};function s(R,T){var I=a;return Object.prototype.hasOwnProperty.call(I,R)?I[R]:I[R]=T(R)}function o(R,T){this.h=T;for(var I=[],b=!0,k=R.length-1;0<=k;k--){var D=R[k]|0;b&&D==T||(I[k]=D,b=!1)}this.g=I}var a={};function c(R){return-128<=R&&128>R?s(R,function(T){return new o([T|0],0>T?-1:0)}):new o([R|0],0>R?-1:0)}function u(R){if(isNaN(R)||!isFinite(R))return h;if(0>R)return v(u(-R));for(var T=[],I=1,b=0;R>=I;b++)T[b]=R/I|0,I*=4294967296;return new o(T,0)}function d(R,T){if(R.length==0)throw Error("number format error: empty string");if(T=T||10,2>T||36<T)throw Error("radix out of range: "+T);if(R.charAt(0)=="-")return v(d(R.substring(1),T));if(0<=R.indexOf("-"))throw Error('number format error: interior "-" character');for(var I=u(Math.pow(T,8)),b=h,k=0;k<R.length;k+=8){var D=Math.min(8,R.length-k),A=parseInt(R.substring(k,k+D),T);8>D?(D=u(Math.pow(T,D)),b=b.j(D).add(u(A))):(b=b.j(I),b=b.add(u(A)))}return b}var h=c(0),m=c(1),_=c(16777216);n=o.prototype,n.m=function(){if(E(this))return-v(this).m();for(var R=0,T=1,I=0;I<this.g.length;I++){var b=this.i(I);R+=(0<=b?b:4294967296+b)*T,T*=4294967296}return R},n.toString=function(R){if(R=R||10,2>R||36<R)throw Error("radix out of range: "+R);if(w(this))return"0";if(E(this))return"-"+v(this).toString(R);for(var T=u(Math.pow(R,6)),I=this,b="";;){var k=M(I,T).g;I=C(I,k.j(T));var D=((0<I.g.length?I.g[0]:I.h)>>>0).toString(R);if(I=k,w(I))return D+b;for(;6>D.length;)D="0"+D;b=D+b}},n.i=function(R){return 0>R?0:R<this.g.length?this.g[R]:this.h};function w(R){if(R.h!=0)return!1;for(var T=0;T<R.g.length;T++)if(R.g[T]!=0)return!1;return!0}function E(R){return R.h==-1}n.l=function(R){return R=C(this,R),E(R)?-1:w(R)?0:1};function v(R){for(var T=R.g.length,I=[],b=0;b<T;b++)I[b]=~R.g[b];return new o(I,~R.h).add(m)}n.abs=function(){return E(this)?v(this):this},n.add=function(R){for(var T=Math.max(this.g.length,R.g.length),I=[],b=0,k=0;k<=T;k++){var D=b+(this.i(k)&65535)+(R.i(k)&65535),A=(D>>>16)+(this.i(k)>>>16)+(R.i(k)>>>16);b=A>>>16,D&=65535,A&=65535,I[k]=A<<16|D}return new o(I,I[I.length-1]&-2147483648?-1:0)};function C(R,T){return R.add(v(T))}n.j=function(R){if(w(this)||w(R))return h;if(E(this))return E(R)?v(this).j(v(R)):v(v(this).j(R));if(E(R))return v(this.j(v(R)));if(0>this.l(_)&&0>R.l(_))return u(this.m()*R.m());for(var T=this.g.length+R.g.length,I=[],b=0;b<2*T;b++)I[b]=0;for(b=0;b<this.g.length;b++)for(var k=0;k<R.g.length;k++){var D=this.i(b)>>>16,A=this.i(b)&65535,pn=R.i(k)>>>16,Fi=R.i(k)&65535;I[2*b+2*k]+=A*Fi,O(I,2*b+2*k),I[2*b+2*k+1]+=D*Fi,O(I,2*b+2*k+1),I[2*b+2*k+1]+=A*pn,O(I,2*b+2*k+1),I[2*b+2*k+2]+=D*pn,O(I,2*b+2*k+2)}for(b=0;b<T;b++)I[b]=I[2*b+1]<<16|I[2*b];for(b=T;b<2*T;b++)I[b]=0;return new o(I,0)};function O(R,T){for(;(R[T]&65535)!=R[T];)R[T+1]+=R[T]>>>16,R[T]&=65535,T++}function U(R,T){this.g=R,this.h=T}function M(R,T){if(w(T))throw Error("division by zero");if(w(R))return new U(h,h);if(E(R))return T=M(v(R),T),new U(v(T.g),v(T.h));if(E(T))return T=M(R,v(T)),new U(v(T.g),T.h);if(30<R.g.length){if(E(R)||E(T))throw Error("slowDivide_ only works with positive integers.");for(var I=m,b=T;0>=b.l(R);)I=Z(I),b=Z(b);var k=K(I,1),D=K(b,1);for(b=K(b,2),I=K(I,2);!w(b);){var A=D.add(b);0>=A.l(R)&&(k=k.add(I),D=A),b=K(b,1),I=K(I,1)}return T=C(R,k.j(T)),new U(k,T)}for(k=h;0<=R.l(T);){for(I=Math.max(1,Math.floor(R.m()/T.m())),b=Math.ceil(Math.log(I)/Math.LN2),b=48>=b?1:Math.pow(2,b-48),D=u(I),A=D.j(T);E(A)||0<A.l(R);)I-=b,D=u(I),A=D.j(T);w(D)&&(D=m),k=k.add(D),R=C(R,A)}return new U(k,R)}n.A=function(R){return M(this,R).h},n.and=function(R){for(var T=Math.max(this.g.length,R.g.length),I=[],b=0;b<T;b++)I[b]=this.i(b)&R.i(b);return new o(I,this.h&R.h)},n.or=function(R){for(var T=Math.max(this.g.length,R.g.length),I=[],b=0;b<T;b++)I[b]=this.i(b)|R.i(b);return new o(I,this.h|R.h)},n.xor=function(R){for(var T=Math.max(this.g.length,R.g.length),I=[],b=0;b<T;b++)I[b]=this.i(b)^R.i(b);return new o(I,this.h^R.h)};function Z(R){for(var T=R.g.length+1,I=[],b=0;b<T;b++)I[b]=R.i(b)<<1|R.i(b-1)>>>31;return new o(I,R.h)}function K(R,T){var I=T>>5;T%=32;for(var b=R.g.length-I,k=[],D=0;D<b;D++)k[D]=0<T?R.i(D+I)>>>T|R.i(D+I+1)<<32-T:R.i(D+I);return new o(k,R.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,d_=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.A,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=u,o.fromString=d,Zn=o}).apply(typeof em!="undefined"?em:typeof self!="undefined"?self:typeof window!="undefined"?window:{});var Wo=typeof globalThis!="undefined"?globalThis:typeof window!="undefined"?window:typeof global!="undefined"?global:typeof self!="undefined"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var h_,ls,f_,aa,zl,m_,p_,g_;(function(){var n,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(l,f,g){return l==Array.prototype||l==Object.prototype||(l[f]=g.value),l};function t(l){l=[typeof globalThis=="object"&&globalThis,l,typeof window=="object"&&window,typeof self=="object"&&self,typeof Wo=="object"&&Wo];for(var f=0;f<l.length;++f){var g=l[f];if(g&&g.Math==Math)return g}throw Error("Cannot find global object")}var r=t(this);function i(l,f){if(f)e:{var g=r;l=l.split(".");for(var y=0;y<l.length-1;y++){var N=l[y];if(!(N in g))break e;g=g[N]}l=l[l.length-1],y=g[l],f=f(y),f!=y&&f!=null&&e(g,l,{configurable:!0,writable:!0,value:f})}}function s(l,f){l instanceof String&&(l+="");var g=0,y=!1,N={next:function(){if(!y&&g<l.length){var L=g++;return{value:f(L,l[L]),done:!1}}return y=!0,{done:!0,value:void 0}}};return N[Symbol.iterator]=function(){return N},N}i("Array.prototype.values",function(l){return l||function(){return s(this,function(f,g){return g})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},a=this||self;function c(l){var f=typeof l;return f=f!="object"?f:l?Array.isArray(l)?"array":f:"null",f=="array"||f=="object"&&typeof l.length=="number"}function u(l){var f=typeof l;return f=="object"&&l!=null||f=="function"}function d(l,f,g){return l.call.apply(l.bind,arguments)}function h(l,f,g){if(!l)throw Error();if(2<arguments.length){var y=Array.prototype.slice.call(arguments,2);return function(){var N=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(N,y),l.apply(f,N)}}return function(){return l.apply(f,arguments)}}function m(l,f,g){return m=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?d:h,m.apply(null,arguments)}function _(l,f){var g=Array.prototype.slice.call(arguments,1);return function(){var y=g.slice();return y.push.apply(y,arguments),l.apply(this,y)}}function w(l,f){function g(){}g.prototype=f.prototype,l.aa=f.prototype,l.prototype=new g,l.prototype.constructor=l,l.Qb=function(y,N,L){for(var W=Array(arguments.length-2),Se=2;Se<arguments.length;Se++)W[Se-2]=arguments[Se];return f.prototype[N].apply(y,W)}}function E(l){const f=l.length;if(0<f){const g=Array(f);for(let y=0;y<f;y++)g[y]=l[y];return g}return[]}function v(l,f){for(let g=1;g<arguments.length;g++){const y=arguments[g];if(c(y)){const N=l.length||0,L=y.length||0;l.length=N+L;for(let W=0;W<L;W++)l[N+W]=y[W]}else l.push(y)}}class C{constructor(f,g){this.i=f,this.j=g,this.h=0,this.g=null}get(){let f;return 0<this.h?(this.h--,f=this.g,this.g=f.next,f.next=null):f=this.i(),f}}function O(l){return/^[\s\xa0]*$/.test(l)}function U(){var l=a.navigator;return l&&(l=l.userAgent)?l:""}function M(l){return M[" "](l),l}M[" "]=function(){};var Z=U().indexOf("Gecko")!=-1&&!(U().toLowerCase().indexOf("webkit")!=-1&&U().indexOf("Edge")==-1)&&!(U().indexOf("Trident")!=-1||U().indexOf("MSIE")!=-1)&&U().indexOf("Edge")==-1;function K(l,f,g){for(const y in l)f.call(g,l[y],y,l)}function R(l,f){for(const g in l)f.call(void 0,l[g],g,l)}function T(l){const f={};for(const g in l)f[g]=l[g];return f}const I="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function b(l,f){let g,y;for(let N=1;N<arguments.length;N++){y=arguments[N];for(g in y)l[g]=y[g];for(let L=0;L<I.length;L++)g=I[L],Object.prototype.hasOwnProperty.call(y,g)&&(l[g]=y[g])}}function k(l){var f=1;l=l.split(":");const g=[];for(;0<f&&l.length;)g.push(l.shift()),f--;return l.length&&g.push(l.join(":")),g}function D(l){a.setTimeout(()=>{throw l},0)}function A(){var l=Bc;let f=null;return l.g&&(f=l.g,l.g=l.g.next,l.g||(l.h=null),f.next=null),f}class pn{constructor(){this.h=this.g=null}add(f,g){const y=Fi.get();y.set(f,g),this.h?this.h.next=y:this.g=y,this.h=y}}var Fi=new C(()=>new hv,l=>l.reset());class hv{constructor(){this.next=this.g=this.h=null}set(f,g){this.h=f,this.g=g,this.next=null}reset(){this.next=this.g=this.h=null}}let Bi,$i=!1,Bc=new pn,yh=()=>{const l=a.Promise.resolve(void 0);Bi=()=>{l.then(fv)}};var fv=()=>{for(var l;l=A();){try{l.h.call(l.g)}catch(g){D(g)}var f=Fi;f.j(l),100>f.h&&(f.h++,l.next=f.g,f.g=l)}$i=!1};function $n(){this.s=this.s,this.C=this.C}$n.prototype.s=!1,$n.prototype.ma=function(){this.s||(this.s=!0,this.N())},$n.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function ot(l,f){this.type=l,this.g=this.target=f,this.defaultPrevented=!1}ot.prototype.h=function(){this.defaultPrevented=!0};var mv=function(){if(!a.addEventListener||!Object.defineProperty)return!1;var l=!1,f=Object.defineProperty({},"passive",{get:function(){l=!0}});try{const g=()=>{};a.addEventListener("test",g,f),a.removeEventListener("test",g,f)}catch(g){}return l}();function qi(l,f){if(ot.call(this,l?l.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,l){var g=this.type=l.type,y=l.changedTouches&&l.changedTouches.length?l.changedTouches[0]:null;if(this.target=l.target||l.srcElement,this.g=f,f=l.relatedTarget){if(Z){e:{try{M(f.nodeName);var N=!0;break e}catch(L){}N=!1}N||(f=null)}}else g=="mouseover"?f=l.fromElement:g=="mouseout"&&(f=l.toElement);this.relatedTarget=f,y?(this.clientX=y.clientX!==void 0?y.clientX:y.pageX,this.clientY=y.clientY!==void 0?y.clientY:y.pageY,this.screenX=y.screenX||0,this.screenY=y.screenY||0):(this.clientX=l.clientX!==void 0?l.clientX:l.pageX,this.clientY=l.clientY!==void 0?l.clientY:l.pageY,this.screenX=l.screenX||0,this.screenY=l.screenY||0),this.button=l.button,this.key=l.key||"",this.ctrlKey=l.ctrlKey,this.altKey=l.altKey,this.shiftKey=l.shiftKey,this.metaKey=l.metaKey,this.pointerId=l.pointerId||0,this.pointerType=typeof l.pointerType=="string"?l.pointerType:pv[l.pointerType]||"",this.state=l.state,this.i=l,l.defaultPrevented&&qi.aa.h.call(this)}}w(qi,ot);var pv={2:"touch",3:"pen",4:"mouse"};qi.prototype.h=function(){qi.aa.h.call(this);var l=this.i;l.preventDefault?l.preventDefault():l.returnValue=!1};var bo="closure_listenable_"+(1e6*Math.random()|0),gv=0;function _v(l,f,g,y,N){this.listener=l,this.proxy=null,this.src=f,this.type=g,this.capture=!!y,this.ha=N,this.key=++gv,this.da=this.fa=!1}function So(l){l.da=!0,l.listener=null,l.proxy=null,l.src=null,l.ha=null}function ko(l){this.src=l,this.g={},this.h=0}ko.prototype.add=function(l,f,g,y,N){var L=l.toString();l=this.g[L],l||(l=this.g[L]=[],this.h++);var W=qc(l,f,y,N);return-1<W?(f=l[W],g||(f.fa=!1)):(f=new _v(f,this.src,L,!!y,N),f.fa=g,l.push(f)),f};function $c(l,f){var g=f.type;if(g in l.g){var y=l.g[g],N=Array.prototype.indexOf.call(y,f,void 0),L;(L=0<=N)&&Array.prototype.splice.call(y,N,1),L&&(So(f),l.g[g].length==0&&(delete l.g[g],l.h--))}}function qc(l,f,g,y){for(var N=0;N<l.length;++N){var L=l[N];if(!L.da&&L.listener==f&&L.capture==!!g&&L.ha==y)return N}return-1}var jc="closure_lm_"+(1e6*Math.random()|0),zc={};function wh(l,f,g,y,N){if(Array.isArray(f)){for(var L=0;L<f.length;L++)wh(l,f[L],g,y,N);return null}return g=Th(g),l&&l[bo]?l.K(f,g,u(y)?!!y.capture:!!y,N):yv(l,f,g,!1,y,N)}function yv(l,f,g,y,N,L){if(!f)throw Error("Invalid event type");var W=u(N)?!!N.capture:!!N,Se=Wc(l);if(Se||(l[jc]=Se=new ko(l)),g=Se.add(f,g,y,W,L),g.proxy)return g;if(y=wv(),g.proxy=y,y.src=l,y.listener=g,l.addEventListener)mv||(N=W),N===void 0&&(N=!1),l.addEventListener(f.toString(),y,N);else if(l.attachEvent)l.attachEvent(vh(f.toString()),y);else if(l.addListener&&l.removeListener)l.addListener(y);else throw Error("addEventListener and attachEvent are unavailable.");return g}function wv(){function l(g){return f.call(l.src,l.listener,g)}const f=Ev;return l}function Eh(l,f,g,y,N){if(Array.isArray(f))for(var L=0;L<f.length;L++)Eh(l,f[L],g,y,N);else y=u(y)?!!y.capture:!!y,g=Th(g),l&&l[bo]?(l=l.i,f=String(f).toString(),f in l.g&&(L=l.g[f],g=qc(L,g,y,N),-1<g&&(So(L[g]),Array.prototype.splice.call(L,g,1),L.length==0&&(delete l.g[f],l.h--)))):l&&(l=Wc(l))&&(f=l.g[f.toString()],l=-1,f&&(l=qc(f,g,y,N)),(g=-1<l?f[l]:null)&&Gc(g))}function Gc(l){if(typeof l!="number"&&l&&!l.da){var f=l.src;if(f&&f[bo])$c(f.i,l);else{var g=l.type,y=l.proxy;f.removeEventListener?f.removeEventListener(g,y,l.capture):f.detachEvent?f.detachEvent(vh(g),y):f.addListener&&f.removeListener&&f.removeListener(y),(g=Wc(f))?($c(g,l),g.h==0&&(g.src=null,f[jc]=null)):So(l)}}}function vh(l){return l in zc?zc[l]:zc[l]="on"+l}function Ev(l,f){if(l.da)l=!0;else{f=new qi(f,this);var g=l.listener,y=l.ha||l.src;l.fa&&Gc(l),l=g.call(y,f)}return l}function Wc(l){return l=l[jc],l instanceof ko?l:null}var Hc="__closure_events_fn_"+(1e9*Math.random()>>>0);function Th(l){return typeof l=="function"?l:(l[Hc]||(l[Hc]=function(f){return l.handleEvent(f)}),l[Hc])}function at(){$n.call(this),this.i=new ko(this),this.M=this,this.F=null}w(at,$n),at.prototype[bo]=!0,at.prototype.removeEventListener=function(l,f,g,y){Eh(this,l,f,g,y)};function _t(l,f){var g,y=l.F;if(y)for(g=[];y;y=y.F)g.push(y);if(l=l.M,y=f.type||f,typeof f=="string")f=new ot(f,l);else if(f instanceof ot)f.target=f.target||l;else{var N=f;f=new ot(y,l),b(f,N)}if(N=!0,g)for(var L=g.length-1;0<=L;L--){var W=f.g=g[L];N=Co(W,y,!0,f)&&N}if(W=f.g=l,N=Co(W,y,!0,f)&&N,N=Co(W,y,!1,f)&&N,g)for(L=0;L<g.length;L++)W=f.g=g[L],N=Co(W,y,!1,f)&&N}at.prototype.N=function(){if(at.aa.N.call(this),this.i){var l=this.i,f;for(f in l.g){for(var g=l.g[f],y=0;y<g.length;y++)So(g[y]);delete l.g[f],l.h--}}this.F=null},at.prototype.K=function(l,f,g,y){return this.i.add(String(l),f,!1,g,y)},at.prototype.L=function(l,f,g,y){return this.i.add(String(l),f,!0,g,y)};function Co(l,f,g,y){if(f=l.i.g[String(f)],!f)return!0;f=f.concat();for(var N=!0,L=0;L<f.length;++L){var W=f[L];if(W&&!W.da&&W.capture==g){var Se=W.listener,it=W.ha||W.src;W.fa&&$c(l.i,W),N=Se.call(it,y)!==!1&&N}}return N&&!y.defaultPrevented}function Ih(l,f,g){if(typeof l=="function")g&&(l=m(l,g));else if(l&&typeof l.handleEvent=="function")l=m(l.handleEvent,l);else throw Error("Invalid listener argument");return 2147483647<Number(f)?-1:a.setTimeout(l,f||0)}function Ah(l){l.g=Ih(()=>{l.g=null,l.i&&(l.i=!1,Ah(l))},l.l);const f=l.h;l.h=null,l.m.apply(null,f)}class vv extends $n{constructor(f,g){super(),this.m=f,this.l=g,this.h=null,this.i=!1,this.g=null}j(f){this.h=arguments,this.g?this.i=!0:Ah(this)}N(){super.N(),this.g&&(a.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function ji(l){$n.call(this),this.h=l,this.g={}}w(ji,$n);var Rh=[];function bh(l){K(l.g,function(f,g){this.g.hasOwnProperty(g)&&Gc(f)},l),l.g={}}ji.prototype.N=function(){ji.aa.N.call(this),bh(this)},ji.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Kc=a.JSON.stringify,Tv=a.JSON.parse,Iv=class{stringify(l){return a.JSON.stringify(l,void 0)}parse(l){return a.JSON.parse(l,void 0)}};function Qc(){}Qc.prototype.h=null;function Sh(l){return l.h||(l.h=l.i())}function kh(){}var zi={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Yc(){ot.call(this,"d")}w(Yc,ot);function Jc(){ot.call(this,"c")}w(Jc,ot);var gr={},Ch=null;function Po(){return Ch=Ch||new at}gr.La="serverreachability";function Ph(l){ot.call(this,gr.La,l)}w(Ph,ot);function Gi(l){const f=Po();_t(f,new Ph(f))}gr.STAT_EVENT="statevent";function Dh(l,f){ot.call(this,gr.STAT_EVENT,l),this.stat=f}w(Dh,ot);function yt(l){const f=Po();_t(f,new Dh(f,l))}gr.Ma="timingevent";function Nh(l,f){ot.call(this,gr.Ma,l),this.size=f}w(Nh,ot);function Wi(l,f){if(typeof l!="function")throw Error("Fn must not be null and must be a function");return a.setTimeout(function(){l()},f)}function Hi(){this.g=!0}Hi.prototype.xa=function(){this.g=!1};function Av(l,f,g,y,N,L){l.info(function(){if(l.g)if(L)for(var W="",Se=L.split("&"),it=0;it<Se.length;it++){var ve=Se[it].split("=");if(1<ve.length){var ct=ve[0];ve=ve[1];var lt=ct.split("_");W=2<=lt.length&&lt[1]=="type"?W+(ct+"="+ve+"&"):W+(ct+"=redacted&")}}else W=null;else W=L;return"XMLHTTP REQ ("+y+") [attempt "+N+"]: "+f+`
`+g+`
`+W})}function Rv(l,f,g,y,N,L,W){l.info(function(){return"XMLHTTP RESP ("+y+") [ attempt "+N+"]: "+f+`
`+g+`
`+L+" "+W})}function Yr(l,f,g,y){l.info(function(){return"XMLHTTP TEXT ("+f+"): "+Sv(l,g)+(y?" "+y:"")})}function bv(l,f){l.info(function(){return"TIMEOUT: "+f})}Hi.prototype.info=function(){};function Sv(l,f){if(!l.g)return f;if(!f)return null;try{var g=JSON.parse(f);if(g){for(l=0;l<g.length;l++)if(Array.isArray(g[l])){var y=g[l];if(!(2>y.length)){var N=y[1];if(Array.isArray(N)&&!(1>N.length)){var L=N[0];if(L!="noop"&&L!="stop"&&L!="close")for(var W=1;W<N.length;W++)N[W]=""}}}}return Kc(g)}catch(Se){return f}}var Do={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Oh={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Xc;function No(){}w(No,Qc),No.prototype.g=function(){return new XMLHttpRequest},No.prototype.i=function(){return{}},Xc=new No;function qn(l,f,g,y){this.j=l,this.i=f,this.l=g,this.R=y||1,this.U=new ji(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Lh}function Lh(){this.i=null,this.g="",this.h=!1}var Vh={},Zc={};function el(l,f,g){l.L=1,l.v=Mo(gn(f)),l.m=g,l.P=!0,Mh(l,null)}function Mh(l,f){l.F=Date.now(),Oo(l),l.A=gn(l.v);var g=l.A,y=l.R;Array.isArray(y)||(y=[String(y)]),Yh(g.i,"t",y),l.C=0,g=l.j.J,l.h=new Lh,l.g=pf(l.j,g?f:null,!l.m),0<l.O&&(l.M=new vv(m(l.Y,l,l.g),l.O)),f=l.U,g=l.g,y=l.ca;var N="readystatechange";Array.isArray(N)||(N&&(Rh[0]=N.toString()),N=Rh);for(var L=0;L<N.length;L++){var W=wh(g,N[L],y||f.handleEvent,!1,f.h||f);if(!W)break;f.g[W.key]=W}f=l.H?T(l.H):{},l.m?(l.u||(l.u="POST"),f["Content-Type"]="application/x-www-form-urlencoded",l.g.ea(l.A,l.u,l.m,f)):(l.u="GET",l.g.ea(l.A,l.u,null,f)),Gi(),Av(l.i,l.u,l.A,l.l,l.R,l.m)}qn.prototype.ca=function(l){l=l.target;const f=this.M;f&&_n(l)==3?f.j():this.Y(l)},qn.prototype.Y=function(l){try{if(l==this.g)e:{const lt=_n(this.g);var f=this.g.Ba();const Zr=this.g.Z();if(!(3>lt)&&(lt!=3||this.g&&(this.h.h||this.g.oa()||rf(this.g)))){this.J||lt!=4||f==7||(f==8||0>=Zr,Gi()),tl(this);var g=this.g.Z();this.X=g;t:if(xh(this)){var y=rf(this.g);l="";var N=y.length,L=_n(this.g)==4;if(!this.h.i){if(typeof TextDecoder=="undefined"){_r(this),Ki(this);var W="";break t}this.h.i=new a.TextDecoder}for(f=0;f<N;f++)this.h.h=!0,l+=this.h.i.decode(y[f],{stream:!(L&&f==N-1)});y.length=0,this.h.g+=l,this.C=0,W=this.h.g}else W=this.g.oa();if(this.o=g==200,Rv(this.i,this.u,this.A,this.l,this.R,lt,g),this.o){if(this.T&&!this.K){t:{if(this.g){var Se,it=this.g;if((Se=it.g?it.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!O(Se)){var ve=Se;break t}}ve=null}if(g=ve)Yr(this.i,this.l,g,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,nl(this,g);else{this.o=!1,this.s=3,yt(12),_r(this),Ki(this);break e}}if(this.P){g=!0;let zt;for(;!this.J&&this.C<W.length;)if(zt=kv(this,W),zt==Zc){lt==4&&(this.s=4,yt(14),g=!1),Yr(this.i,this.l,null,"[Incomplete Response]");break}else if(zt==Vh){this.s=4,yt(15),Yr(this.i,this.l,W,"[Invalid Chunk]"),g=!1;break}else Yr(this.i,this.l,zt,null),nl(this,zt);if(xh(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),lt!=4||W.length!=0||this.h.h||(this.s=1,yt(16),g=!1),this.o=this.o&&g,!g)Yr(this.i,this.l,W,"[Invalid Chunked Response]"),_r(this),Ki(this);else if(0<W.length&&!this.W){this.W=!0;var ct=this.j;ct.g==this&&ct.ba&&!ct.M&&(ct.j.info("Great, no buffering proxy detected. Bytes received: "+W.length),cl(ct),ct.M=!0,yt(11))}}else Yr(this.i,this.l,W,null),nl(this,W);lt==4&&_r(this),this.o&&!this.J&&(lt==4?df(this.j,this):(this.o=!1,Oo(this)))}else Gv(this.g),g==400&&0<W.indexOf("Unknown SID")?(this.s=3,yt(12)):(this.s=0,yt(13)),_r(this),Ki(this)}}}catch(lt){}finally{}};function xh(l){return l.g?l.u=="GET"&&l.L!=2&&l.j.Ca:!1}function kv(l,f){var g=l.C,y=f.indexOf(`
`,g);return y==-1?Zc:(g=Number(f.substring(g,y)),isNaN(g)?Vh:(y+=1,y+g>f.length?Zc:(f=f.slice(y,y+g),l.C=y+g,f)))}qn.prototype.cancel=function(){this.J=!0,_r(this)};function Oo(l){l.S=Date.now()+l.I,Uh(l,l.I)}function Uh(l,f){if(l.B!=null)throw Error("WatchDog timer not null");l.B=Wi(m(l.ba,l),f)}function tl(l){l.B&&(a.clearTimeout(l.B),l.B=null)}qn.prototype.ba=function(){this.B=null;const l=Date.now();0<=l-this.S?(bv(this.i,this.A),this.L!=2&&(Gi(),yt(17)),_r(this),this.s=2,Ki(this)):Uh(this,this.S-l)};function Ki(l){l.j.G==0||l.J||df(l.j,l)}function _r(l){tl(l);var f=l.M;f&&typeof f.ma=="function"&&f.ma(),l.M=null,bh(l.U),l.g&&(f=l.g,l.g=null,f.abort(),f.ma())}function nl(l,f){try{var g=l.j;if(g.G!=0&&(g.g==l||rl(g.h,l))){if(!l.K&&rl(g.h,l)&&g.G==3){try{var y=g.Da.g.parse(f)}catch(ve){y=null}if(Array.isArray(y)&&y.length==3){var N=y;if(N[0]==0){e:if(!g.u){if(g.g)if(g.g.F+3e3<l.F)qo(g),Bo(g);else break e;al(g),yt(18)}}else g.za=N[1],0<g.za-g.T&&37500>N[2]&&g.F&&g.v==0&&!g.C&&(g.C=Wi(m(g.Za,g),6e3));if(1>=$h(g.h)&&g.ca){try{g.ca()}catch(ve){}g.ca=void 0}}else wr(g,11)}else if((l.K||g.g==l)&&qo(g),!O(f))for(N=g.Da.g.parse(f),f=0;f<N.length;f++){let ve=N[f];if(g.T=ve[0],ve=ve[1],g.G==2)if(ve[0]=="c"){g.K=ve[1],g.ia=ve[2];const ct=ve[3];ct!=null&&(g.la=ct,g.j.info("VER="+g.la));const lt=ve[4];lt!=null&&(g.Aa=lt,g.j.info("SVER="+g.Aa));const Zr=ve[5];Zr!=null&&typeof Zr=="number"&&0<Zr&&(y=1.5*Zr,g.L=y,g.j.info("backChannelRequestTimeoutMs_="+y)),y=g;const zt=l.g;if(zt){const zo=zt.g?zt.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(zo){var L=y.h;L.g||zo.indexOf("spdy")==-1&&zo.indexOf("quic")==-1&&zo.indexOf("h2")==-1||(L.j=L.l,L.g=new Set,L.h&&(il(L,L.h),L.h=null))}if(y.D){const ll=zt.g?zt.g.getResponseHeader("X-HTTP-Session-Id"):null;ll&&(y.ya=ll,ke(y.I,y.D,ll))}}g.G=3,g.l&&g.l.ua(),g.ba&&(g.R=Date.now()-l.F,g.j.info("Handshake RTT: "+g.R+"ms")),y=g;var W=l;if(y.qa=mf(y,y.J?y.ia:null,y.W),W.K){qh(y.h,W);var Se=W,it=y.L;it&&(Se.I=it),Se.B&&(tl(Se),Oo(Se)),y.g=W}else lf(y);0<g.i.length&&$o(g)}else ve[0]!="stop"&&ve[0]!="close"||wr(g,7);else g.G==3&&(ve[0]=="stop"||ve[0]=="close"?ve[0]=="stop"?wr(g,7):ol(g):ve[0]!="noop"&&g.l&&g.l.ta(ve),g.v=0)}}Gi()}catch(ve){}}var Cv=class{constructor(l,f){this.g=l,this.map=f}};function Fh(l){this.l=l||10,a.PerformanceNavigationTiming?(l=a.performance.getEntriesByType("navigation"),l=0<l.length&&(l[0].nextHopProtocol=="hq"||l[0].nextHopProtocol=="h2")):l=!!(a.chrome&&a.chrome.loadTimes&&a.chrome.loadTimes()&&a.chrome.loadTimes().wasFetchedViaSpdy),this.j=l?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Bh(l){return l.h?!0:l.g?l.g.size>=l.j:!1}function $h(l){return l.h?1:l.g?l.g.size:0}function rl(l,f){return l.h?l.h==f:l.g?l.g.has(f):!1}function il(l,f){l.g?l.g.add(f):l.h=f}function qh(l,f){l.h&&l.h==f?l.h=null:l.g&&l.g.has(f)&&l.g.delete(f)}Fh.prototype.cancel=function(){if(this.i=jh(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const l of this.g.values())l.cancel();this.g.clear()}};function jh(l){if(l.h!=null)return l.i.concat(l.h.D);if(l.g!=null&&l.g.size!==0){let f=l.i;for(const g of l.g.values())f=f.concat(g.D);return f}return E(l.i)}function Pv(l){if(l.V&&typeof l.V=="function")return l.V();if(typeof Map!="undefined"&&l instanceof Map||typeof Set!="undefined"&&l instanceof Set)return Array.from(l.values());if(typeof l=="string")return l.split("");if(c(l)){for(var f=[],g=l.length,y=0;y<g;y++)f.push(l[y]);return f}f=[],g=0;for(y in l)f[g++]=l[y];return f}function Dv(l){if(l.na&&typeof l.na=="function")return l.na();if(!l.V||typeof l.V!="function"){if(typeof Map!="undefined"&&l instanceof Map)return Array.from(l.keys());if(!(typeof Set!="undefined"&&l instanceof Set)){if(c(l)||typeof l=="string"){var f=[];l=l.length;for(var g=0;g<l;g++)f.push(g);return f}f=[],g=0;for(const y in l)f[g++]=y;return f}}}function zh(l,f){if(l.forEach&&typeof l.forEach=="function")l.forEach(f,void 0);else if(c(l)||typeof l=="string")Array.prototype.forEach.call(l,f,void 0);else for(var g=Dv(l),y=Pv(l),N=y.length,L=0;L<N;L++)f.call(void 0,y[L],g&&g[L],l)}var Gh=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Nv(l,f){if(l){l=l.split("&");for(var g=0;g<l.length;g++){var y=l[g].indexOf("="),N=null;if(0<=y){var L=l[g].substring(0,y);N=l[g].substring(y+1)}else L=l[g];f(L,N?decodeURIComponent(N.replace(/\+/g," ")):"")}}}function yr(l){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,l instanceof yr){this.h=l.h,Lo(this,l.j),this.o=l.o,this.g=l.g,Vo(this,l.s),this.l=l.l;var f=l.i,g=new Ji;g.i=f.i,f.g&&(g.g=new Map(f.g),g.h=f.h),Wh(this,g),this.m=l.m}else l&&(f=String(l).match(Gh))?(this.h=!1,Lo(this,f[1]||"",!0),this.o=Qi(f[2]||""),this.g=Qi(f[3]||"",!0),Vo(this,f[4]),this.l=Qi(f[5]||"",!0),Wh(this,f[6]||"",!0),this.m=Qi(f[7]||"")):(this.h=!1,this.i=new Ji(null,this.h))}yr.prototype.toString=function(){var l=[],f=this.j;f&&l.push(Yi(f,Hh,!0),":");var g=this.g;return(g||f=="file")&&(l.push("//"),(f=this.o)&&l.push(Yi(f,Hh,!0),"@"),l.push(encodeURIComponent(String(g)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),g=this.s,g!=null&&l.push(":",String(g))),(g=this.l)&&(this.g&&g.charAt(0)!="/"&&l.push("/"),l.push(Yi(g,g.charAt(0)=="/"?Vv:Lv,!0))),(g=this.i.toString())&&l.push("?",g),(g=this.m)&&l.push("#",Yi(g,xv)),l.join("")};function gn(l){return new yr(l)}function Lo(l,f,g){l.j=g?Qi(f,!0):f,l.j&&(l.j=l.j.replace(/:$/,""))}function Vo(l,f){if(f){if(f=Number(f),isNaN(f)||0>f)throw Error("Bad port number "+f);l.s=f}else l.s=null}function Wh(l,f,g){f instanceof Ji?(l.i=f,Uv(l.i,l.h)):(g||(f=Yi(f,Mv)),l.i=new Ji(f,l.h))}function ke(l,f,g){l.i.set(f,g)}function Mo(l){return ke(l,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),l}function Qi(l,f){return l?f?decodeURI(l.replace(/%25/g,"%2525")):decodeURIComponent(l):""}function Yi(l,f,g){return typeof l=="string"?(l=encodeURI(l).replace(f,Ov),g&&(l=l.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),l):null}function Ov(l){return l=l.charCodeAt(0),"%"+(l>>4&15).toString(16)+(l&15).toString(16)}var Hh=/[#\/\?@]/g,Lv=/[#\?:]/g,Vv=/[#\?]/g,Mv=/[#\?@]/g,xv=/#/g;function Ji(l,f){this.h=this.g=null,this.i=l||null,this.j=!!f}function jn(l){l.g||(l.g=new Map,l.h=0,l.i&&Nv(l.i,function(f,g){l.add(decodeURIComponent(f.replace(/\+/g," ")),g)}))}n=Ji.prototype,n.add=function(l,f){jn(this),this.i=null,l=Jr(this,l);var g=this.g.get(l);return g||this.g.set(l,g=[]),g.push(f),this.h+=1,this};function Kh(l,f){jn(l),f=Jr(l,f),l.g.has(f)&&(l.i=null,l.h-=l.g.get(f).length,l.g.delete(f))}function Qh(l,f){return jn(l),f=Jr(l,f),l.g.has(f)}n.forEach=function(l,f){jn(this),this.g.forEach(function(g,y){g.forEach(function(N){l.call(f,N,y,this)},this)},this)},n.na=function(){jn(this);const l=Array.from(this.g.values()),f=Array.from(this.g.keys()),g=[];for(let y=0;y<f.length;y++){const N=l[y];for(let L=0;L<N.length;L++)g.push(f[y])}return g},n.V=function(l){jn(this);let f=[];if(typeof l=="string")Qh(this,l)&&(f=f.concat(this.g.get(Jr(this,l))));else{l=Array.from(this.g.values());for(let g=0;g<l.length;g++)f=f.concat(l[g])}return f},n.set=function(l,f){return jn(this),this.i=null,l=Jr(this,l),Qh(this,l)&&(this.h-=this.g.get(l).length),this.g.set(l,[f]),this.h+=1,this},n.get=function(l,f){return l?(l=this.V(l),0<l.length?String(l[0]):f):f};function Yh(l,f,g){Kh(l,f),0<g.length&&(l.i=null,l.g.set(Jr(l,f),E(g)),l.h+=g.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const l=[],f=Array.from(this.g.keys());for(var g=0;g<f.length;g++){var y=f[g];const L=encodeURIComponent(String(y)),W=this.V(y);for(y=0;y<W.length;y++){var N=L;W[y]!==""&&(N+="="+encodeURIComponent(String(W[y]))),l.push(N)}}return this.i=l.join("&")};function Jr(l,f){return f=String(f),l.j&&(f=f.toLowerCase()),f}function Uv(l,f){f&&!l.j&&(jn(l),l.i=null,l.g.forEach(function(g,y){var N=y.toLowerCase();y!=N&&(Kh(this,y),Yh(this,N,g))},l)),l.j=f}function Fv(l,f){const g=new Hi;if(a.Image){const y=new Image;y.onload=_(zn,g,"TestLoadImage: loaded",!0,f,y),y.onerror=_(zn,g,"TestLoadImage: error",!1,f,y),y.onabort=_(zn,g,"TestLoadImage: abort",!1,f,y),y.ontimeout=_(zn,g,"TestLoadImage: timeout",!1,f,y),a.setTimeout(function(){y.ontimeout&&y.ontimeout()},1e4),y.src=l}else f(!1)}function Bv(l,f){const g=new Hi,y=new AbortController,N=setTimeout(()=>{y.abort(),zn(g,"TestPingServer: timeout",!1,f)},1e4);fetch(l,{signal:y.signal}).then(L=>{clearTimeout(N),L.ok?zn(g,"TestPingServer: ok",!0,f):zn(g,"TestPingServer: server error",!1,f)}).catch(()=>{clearTimeout(N),zn(g,"TestPingServer: error",!1,f)})}function zn(l,f,g,y,N){try{N&&(N.onload=null,N.onerror=null,N.onabort=null,N.ontimeout=null),y(g)}catch(L){}}function $v(){this.g=new Iv}function qv(l,f,g){const y=g||"";try{zh(l,function(N,L){let W=N;u(N)&&(W=Kc(N)),f.push(y+L+"="+encodeURIComponent(W))})}catch(N){throw f.push(y+"type="+encodeURIComponent("_badmap")),N}}function xo(l){this.l=l.Ub||null,this.j=l.eb||!1}w(xo,Qc),xo.prototype.g=function(){return new Uo(this.l,this.j)},xo.prototype.i=function(l){return function(){return l}}({});function Uo(l,f){at.call(this),this.D=l,this.o=f,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}w(Uo,at),n=Uo.prototype,n.open=function(l,f){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=l,this.A=f,this.readyState=1,Zi(this)},n.send=function(l){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const f={headers:this.u,method:this.B,credentials:this.m,cache:void 0};l&&(f.body=l),(this.D||a).fetch(new Request(this.A,f)).then(this.Sa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Xi(this)),this.readyState=0},n.Sa=function(l){if(this.g&&(this.l=l,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=l.headers,this.readyState=2,Zi(this)),this.g&&(this.readyState=3,Zi(this),this.g)))if(this.responseType==="arraybuffer")l.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof a.ReadableStream!="undefined"&&"body"in l){if(this.j=l.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Jh(this)}else l.text().then(this.Ra.bind(this),this.ga.bind(this))};function Jh(l){l.j.read().then(l.Pa.bind(l)).catch(l.ga.bind(l))}n.Pa=function(l){if(this.g){if(this.o&&l.value)this.response.push(l.value);else if(!this.o){var f=l.value?l.value:new Uint8Array(0);(f=this.v.decode(f,{stream:!l.done}))&&(this.response=this.responseText+=f)}l.done?Xi(this):Zi(this),this.readyState==3&&Jh(this)}},n.Ra=function(l){this.g&&(this.response=this.responseText=l,Xi(this))},n.Qa=function(l){this.g&&(this.response=l,Xi(this))},n.ga=function(){this.g&&Xi(this)};function Xi(l){l.readyState=4,l.l=null,l.j=null,l.v=null,Zi(l)}n.setRequestHeader=function(l,f){this.u.append(l,f)},n.getResponseHeader=function(l){return this.h&&this.h.get(l.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const l=[],f=this.h.entries();for(var g=f.next();!g.done;)g=g.value,l.push(g[0]+": "+g[1]),g=f.next();return l.join(`\r
`)};function Zi(l){l.onreadystatechange&&l.onreadystatechange.call(l)}Object.defineProperty(Uo.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(l){this.m=l?"include":"same-origin"}});function Xh(l){let f="";return K(l,function(g,y){f+=y,f+=":",f+=g,f+=`\r
`}),f}function sl(l,f,g){e:{for(y in g){var y=!1;break e}y=!0}y||(g=Xh(g),typeof l=="string"?g!=null&&encodeURIComponent(String(g)):ke(l,f,g))}function xe(l){at.call(this),this.headers=new Map,this.o=l||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}w(xe,at);var jv=/^https?$/i,zv=["POST","PUT"];n=xe.prototype,n.Ha=function(l){this.J=l},n.ea=function(l,f,g,y){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+l);f=f?f.toUpperCase():"GET",this.D=l,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Xc.g(),this.v=this.o?Sh(this.o):Sh(Xc),this.g.onreadystatechange=m(this.Ea,this);try{this.B=!0,this.g.open(f,String(l),!0),this.B=!1}catch(L){Zh(this,L);return}if(l=g||"",g=new Map(this.headers),y)if(Object.getPrototypeOf(y)===Object.prototype)for(var N in y)g.set(N,y[N]);else if(typeof y.keys=="function"&&typeof y.get=="function")for(const L of y.keys())g.set(L,y.get(L));else throw Error("Unknown input type for opt_headers: "+String(y));y=Array.from(g.keys()).find(L=>L.toLowerCase()=="content-type"),N=a.FormData&&l instanceof a.FormData,!(0<=Array.prototype.indexOf.call(zv,f,void 0))||y||N||g.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[L,W]of g)this.g.setRequestHeader(L,W);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{nf(this),this.u=!0,this.g.send(l),this.u=!1}catch(L){Zh(this,L)}};function Zh(l,f){l.h=!1,l.g&&(l.j=!0,l.g.abort(),l.j=!1),l.l=f,l.m=5,ef(l),Fo(l)}function ef(l){l.A||(l.A=!0,_t(l,"complete"),_t(l,"error"))}n.abort=function(l){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=l||7,_t(this,"complete"),_t(this,"abort"),Fo(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Fo(this,!0)),xe.aa.N.call(this)},n.Ea=function(){this.s||(this.B||this.u||this.j?tf(this):this.bb())},n.bb=function(){tf(this)};function tf(l){if(l.h&&typeof o!="undefined"&&(!l.v[1]||_n(l)!=4||l.Z()!=2)){if(l.u&&_n(l)==4)Ih(l.Ea,0,l);else if(_t(l,"readystatechange"),_n(l)==4){l.h=!1;try{const W=l.Z();e:switch(W){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var f=!0;break e;default:f=!1}var g;if(!(g=f)){var y;if(y=W===0){var N=String(l.D).match(Gh)[1]||null;!N&&a.self&&a.self.location&&(N=a.self.location.protocol.slice(0,-1)),y=!jv.test(N?N.toLowerCase():"")}g=y}if(g)_t(l,"complete"),_t(l,"success");else{l.m=6;try{var L=2<_n(l)?l.g.statusText:""}catch(Se){L=""}l.l=L+" ["+l.Z()+"]",ef(l)}}finally{Fo(l)}}}}function Fo(l,f){if(l.g){nf(l);const g=l.g,y=l.v[0]?()=>{}:null;l.g=null,l.v=null,f||_t(l,"ready");try{g.onreadystatechange=y}catch(N){}}}function nf(l){l.I&&(a.clearTimeout(l.I),l.I=null)}n.isActive=function(){return!!this.g};function _n(l){return l.g?l.g.readyState:0}n.Z=function(){try{return 2<_n(this)?this.g.status:-1}catch(l){return-1}},n.oa=function(){try{return this.g?this.g.responseText:""}catch(l){return""}},n.Oa=function(l){if(this.g){var f=this.g.responseText;return l&&f.indexOf(l)==0&&(f=f.substring(l.length)),Tv(f)}};function rf(l){try{if(!l.g)return null;if("response"in l.g)return l.g.response;switch(l.H){case"":case"text":return l.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in l.g)return l.g.mozResponseArrayBuffer}return null}catch(f){return null}}function Gv(l){const f={};l=(l.g&&2<=_n(l)&&l.g.getAllResponseHeaders()||"").split(`\r
`);for(let y=0;y<l.length;y++){if(O(l[y]))continue;var g=k(l[y]);const N=g[0];if(g=g[1],typeof g!="string")continue;g=g.trim();const L=f[N]||[];f[N]=L,L.push(g)}R(f,function(y){return y.join(", ")})}n.Ba=function(){return this.m},n.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function es(l,f,g){return g&&g.internalChannelParams&&g.internalChannelParams[l]||f}function sf(l){this.Aa=0,this.i=[],this.j=new Hi,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=es("failFast",!1,l),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=es("baseRetryDelayMs",5e3,l),this.cb=es("retryDelaySeedMs",1e4,l),this.Wa=es("forwardChannelMaxRetries",2,l),this.wa=es("forwardChannelRequestTimeoutMs",2e4,l),this.pa=l&&l.xmlHttpFactory||void 0,this.Xa=l&&l.Tb||void 0,this.Ca=l&&l.useFetchStreams||!1,this.L=void 0,this.J=l&&l.supportsCrossDomainXhr||!1,this.K="",this.h=new Fh(l&&l.concurrentRequestLimit),this.Da=new $v,this.P=l&&l.fastHandshake||!1,this.O=l&&l.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=l&&l.Rb||!1,l&&l.xa&&this.j.xa(),l&&l.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&l&&l.detectBufferingProxy||!1,this.ja=void 0,l&&l.longPollingTimeout&&0<l.longPollingTimeout&&(this.ja=l.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}n=sf.prototype,n.la=8,n.G=1,n.connect=function(l,f,g,y){yt(0),this.W=l,this.H=f||{},g&&y!==void 0&&(this.H.OSID=g,this.H.OAID=y),this.F=this.X,this.I=mf(this,null,this.W),$o(this)};function ol(l){if(of(l),l.G==3){var f=l.U++,g=gn(l.I);if(ke(g,"SID",l.K),ke(g,"RID",f),ke(g,"TYPE","terminate"),ts(l,g),f=new qn(l,l.j,f),f.L=2,f.v=Mo(gn(g)),g=!1,a.navigator&&a.navigator.sendBeacon)try{g=a.navigator.sendBeacon(f.v.toString(),"")}catch(y){}!g&&a.Image&&(new Image().src=f.v,g=!0),g||(f.g=pf(f.j,null),f.g.ea(f.v)),f.F=Date.now(),Oo(f)}ff(l)}function Bo(l){l.g&&(cl(l),l.g.cancel(),l.g=null)}function of(l){Bo(l),l.u&&(a.clearTimeout(l.u),l.u=null),qo(l),l.h.cancel(),l.s&&(typeof l.s=="number"&&a.clearTimeout(l.s),l.s=null)}function $o(l){if(!Bh(l.h)&&!l.s){l.s=!0;var f=l.Ga;Bi||yh(),$i||(Bi(),$i=!0),Bc.add(f,l),l.B=0}}function Wv(l,f){return $h(l.h)>=l.h.j-(l.s?1:0)?!1:l.s?(l.i=f.D.concat(l.i),!0):l.G==1||l.G==2||l.B>=(l.Va?0:l.Wa)?!1:(l.s=Wi(m(l.Ga,l,f),hf(l,l.B)),l.B++,!0)}n.Ga=function(l){if(this.s)if(this.s=null,this.G==1){if(!l){this.U=Math.floor(1e5*Math.random()),l=this.U++;const N=new qn(this,this.j,l);let L=this.o;if(this.S&&(L?(L=T(L),b(L,this.S)):L=this.S),this.m!==null||this.O||(N.H=L,L=null),this.P)e:{for(var f=0,g=0;g<this.i.length;g++){t:{var y=this.i[g];if("__data__"in y.map&&(y=y.map.__data__,typeof y=="string")){y=y.length;break t}y=void 0}if(y===void 0)break;if(f+=y,4096<f){f=g;break e}if(f===4096||g===this.i.length-1){f=g+1;break e}}f=1e3}else f=1e3;f=cf(this,N,f),g=gn(this.I),ke(g,"RID",l),ke(g,"CVER",22),this.D&&ke(g,"X-HTTP-Session-Id",this.D),ts(this,g),L&&(this.O?f="headers="+encodeURIComponent(String(Xh(L)))+"&"+f:this.m&&sl(g,this.m,L)),il(this.h,N),this.Ua&&ke(g,"TYPE","init"),this.P?(ke(g,"$req",f),ke(g,"SID","null"),N.T=!0,el(N,g,null)):el(N,g,f),this.G=2}}else this.G==3&&(l?af(this,l):this.i.length==0||Bh(this.h)||af(this))};function af(l,f){var g;f?g=f.l:g=l.U++;const y=gn(l.I);ke(y,"SID",l.K),ke(y,"RID",g),ke(y,"AID",l.T),ts(l,y),l.m&&l.o&&sl(y,l.m,l.o),g=new qn(l,l.j,g,l.B+1),l.m===null&&(g.H=l.o),f&&(l.i=f.D.concat(l.i)),f=cf(l,g,1e3),g.I=Math.round(.5*l.wa)+Math.round(.5*l.wa*Math.random()),il(l.h,g),el(g,y,f)}function ts(l,f){l.H&&K(l.H,function(g,y){ke(f,y,g)}),l.l&&zh({},function(g,y){ke(f,y,g)})}function cf(l,f,g){g=Math.min(l.i.length,g);var y=l.l?m(l.l.Na,l.l,l):null;e:{var N=l.i;let L=-1;for(;;){const W=["count="+g];L==-1?0<g?(L=N[0].g,W.push("ofs="+L)):L=0:W.push("ofs="+L);let Se=!0;for(let it=0;it<g;it++){let ve=N[it].g;const ct=N[it].map;if(ve-=L,0>ve)L=Math.max(0,N[it].g-100),Se=!1;else try{qv(ct,W,"req"+ve+"_")}catch(lt){y&&y(ct)}}if(Se){y=W.join("&");break e}}}return l=l.i.splice(0,g),f.D=l,y}function lf(l){if(!l.g&&!l.u){l.Y=1;var f=l.Fa;Bi||yh(),$i||(Bi(),$i=!0),Bc.add(f,l),l.v=0}}function al(l){return l.g||l.u||3<=l.v?!1:(l.Y++,l.u=Wi(m(l.Fa,l),hf(l,l.v)),l.v++,!0)}n.Fa=function(){if(this.u=null,uf(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var l=2*this.R;this.j.info("BP detection timer enabled: "+l),this.A=Wi(m(this.ab,this),l)}},n.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,yt(10),Bo(this),uf(this))};function cl(l){l.A!=null&&(a.clearTimeout(l.A),l.A=null)}function uf(l){l.g=new qn(l,l.j,"rpc",l.Y),l.m===null&&(l.g.H=l.o),l.g.O=0;var f=gn(l.qa);ke(f,"RID","rpc"),ke(f,"SID",l.K),ke(f,"AID",l.T),ke(f,"CI",l.F?"0":"1"),!l.F&&l.ja&&ke(f,"TO",l.ja),ke(f,"TYPE","xmlhttp"),ts(l,f),l.m&&l.o&&sl(f,l.m,l.o),l.L&&(l.g.I=l.L);var g=l.g;l=l.ia,g.L=1,g.v=Mo(gn(f)),g.m=null,g.P=!0,Mh(g,l)}n.Za=function(){this.C!=null&&(this.C=null,Bo(this),al(this),yt(19))};function qo(l){l.C!=null&&(a.clearTimeout(l.C),l.C=null)}function df(l,f){var g=null;if(l.g==f){qo(l),cl(l),l.g=null;var y=2}else if(rl(l.h,f))g=f.D,qh(l.h,f),y=1;else return;if(l.G!=0){if(f.o)if(y==1){g=f.m?f.m.length:0,f=Date.now()-f.F;var N=l.B;y=Po(),_t(y,new Nh(y,g)),$o(l)}else lf(l);else if(N=f.s,N==3||N==0&&0<f.X||!(y==1&&Wv(l,f)||y==2&&al(l)))switch(g&&0<g.length&&(f=l.h,f.i=f.i.concat(g)),N){case 1:wr(l,5);break;case 4:wr(l,10);break;case 3:wr(l,6);break;default:wr(l,2)}}}function hf(l,f){let g=l.Ta+Math.floor(Math.random()*l.cb);return l.isActive()||(g*=2),g*f}function wr(l,f){if(l.j.info("Error code "+f),f==2){var g=m(l.fb,l),y=l.Xa;const N=!y;y=new yr(y||"//www.google.com/images/cleardot.gif"),a.location&&a.location.protocol=="http"||Lo(y,"https"),Mo(y),N?Fv(y.toString(),g):Bv(y.toString(),g)}else yt(2);l.G=0,l.l&&l.l.sa(f),ff(l),of(l)}n.fb=function(l){l?(this.j.info("Successfully pinged google.com"),yt(2)):(this.j.info("Failed to ping google.com"),yt(1))};function ff(l){if(l.G=0,l.ka=[],l.l){const f=jh(l.h);(f.length!=0||l.i.length!=0)&&(v(l.ka,f),v(l.ka,l.i),l.h.i.length=0,E(l.i),l.i.length=0),l.l.ra()}}function mf(l,f,g){var y=g instanceof yr?gn(g):new yr(g);if(y.g!="")f&&(y.g=f+"."+y.g),Vo(y,y.s);else{var N=a.location;y=N.protocol,f=f?f+"."+N.hostname:N.hostname,N=+N.port;var L=new yr(null);y&&Lo(L,y),f&&(L.g=f),N&&Vo(L,N),g&&(L.l=g),y=L}return g=l.D,f=l.ya,g&&f&&ke(y,g,f),ke(y,"VER",l.la),ts(l,y),y}function pf(l,f,g){if(f&&!l.J)throw Error("Can't create secondary domain capable XhrIo object.");return f=l.Ca&&!l.pa?new xe(new xo({eb:g})):new xe(l.pa),f.Ha(l.J),f}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function gf(){}n=gf.prototype,n.ua=function(){},n.ta=function(){},n.sa=function(){},n.ra=function(){},n.isActive=function(){return!0},n.Na=function(){};function jo(){}jo.prototype.g=function(l,f){return new St(l,f)};function St(l,f){at.call(this),this.g=new sf(f),this.l=l,this.h=f&&f.messageUrlParams||null,l=f&&f.messageHeaders||null,f&&f.clientProtocolHeaderRequired&&(l?l["X-Client-Protocol"]="webchannel":l={"X-Client-Protocol":"webchannel"}),this.g.o=l,l=f&&f.initMessageHeaders||null,f&&f.messageContentType&&(l?l["X-WebChannel-Content-Type"]=f.messageContentType:l={"X-WebChannel-Content-Type":f.messageContentType}),f&&f.va&&(l?l["X-WebChannel-Client-Profile"]=f.va:l={"X-WebChannel-Client-Profile":f.va}),this.g.S=l,(l=f&&f.Sb)&&!O(l)&&(this.g.m=l),this.v=f&&f.supportsCrossDomainXhr||!1,this.u=f&&f.sendRawJson||!1,(f=f&&f.httpSessionIdParam)&&!O(f)&&(this.g.D=f,l=this.h,l!==null&&f in l&&(l=this.h,f in l&&delete l[f])),this.j=new Xr(this)}w(St,at),St.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},St.prototype.close=function(){ol(this.g)},St.prototype.o=function(l){var f=this.g;if(typeof l=="string"){var g={};g.__data__=l,l=g}else this.u&&(g={},g.__data__=Kc(l),l=g);f.i.push(new Cv(f.Ya++,l)),f.G==3&&$o(f)},St.prototype.N=function(){this.g.l=null,delete this.j,ol(this.g),delete this.g,St.aa.N.call(this)};function _f(l){Yc.call(this),l.__headers__&&(this.headers=l.__headers__,this.statusCode=l.__status__,delete l.__headers__,delete l.__status__);var f=l.__sm__;if(f){e:{for(const g in f){l=g;break e}l=void 0}(this.i=l)&&(l=this.i,f=f!==null&&l in f?f[l]:void 0),this.data=f}else this.data=l}w(_f,Yc);function yf(){Jc.call(this),this.status=1}w(yf,Jc);function Xr(l){this.g=l}w(Xr,gf),Xr.prototype.ua=function(){_t(this.g,"a")},Xr.prototype.ta=function(l){_t(this.g,new _f(l))},Xr.prototype.sa=function(l){_t(this.g,new yf)},Xr.prototype.ra=function(){_t(this.g,"b")},jo.prototype.createWebChannel=jo.prototype.g,St.prototype.send=St.prototype.o,St.prototype.open=St.prototype.m,St.prototype.close=St.prototype.close,g_=function(){return new jo},p_=function(){return Po()},m_=gr,zl={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Do.NO_ERROR=0,Do.TIMEOUT=8,Do.HTTP_ERROR=6,aa=Do,Oh.COMPLETE="complete",f_=Oh,kh.EventType=zi,zi.OPEN="a",zi.CLOSE="b",zi.ERROR="c",zi.MESSAGE="d",at.prototype.listen=at.prototype.K,ls=kh,xe.prototype.listenOnce=xe.prototype.L,xe.prototype.getLastError=xe.prototype.Ka,xe.prototype.getLastErrorCode=xe.prototype.Ba,xe.prototype.getStatus=xe.prototype.Z,xe.prototype.getResponseJson=xe.prototype.Oa,xe.prototype.getResponseText=xe.prototype.oa,xe.prototype.send=xe.prototype.ea,xe.prototype.setWithCredentials=xe.prototype.Ha,h_=xe}).apply(typeof Wo!="undefined"?Wo:typeof self!="undefined"?self:typeof window!="undefined"?window:{});const tm="@firebase/firestore",nm="4.8.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dt{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}dt.UNAUTHENTICATED=new dt(null),dt.GOOGLE_CREDENTIALS=new dt("google-credentials-uid"),dt.FIRST_PARTY=new dt("first-party-uid"),dt.MOCK_USER=new dt("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Pi="11.10.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dr=new Xs("@firebase/firestore");function ti(){return Dr.logLevel}function Y(n,...e){if(Dr.logLevel<=de.DEBUG){const t=e.map(Yu);Dr.debug(`Firestore (${Pi}): ${n}`,...t)}}function On(n,...e){if(Dr.logLevel<=de.ERROR){const t=e.map(Yu);Dr.error(`Firestore (${Pi}): ${n}`,...t)}}function Ln(n,...e){if(Dr.logLevel<=de.WARN){const t=e.map(Yu);Dr.warn(`Firestore (${Pi}): ${n}`,...t)}}function Yu(n){if(typeof n=="string")return n;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(t){return JSON.stringify(t)}(n)}catch(e){return n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ne(n,e,t){let r="Unexpected state";typeof e=="string"?r=e:t=e,__(n,r,t)}function __(n,e,t){let r=`FIRESTORE (${Pi}) INTERNAL ASSERTION FAILED: ${e} (ID: ${n.toString(16)})`;if(t!==void 0)try{r+=" CONTEXT: "+JSON.stringify(t)}catch(i){r+=" CONTEXT: "+t}throw On(r),new Error(r)}function Ee(n,e,t,r){let i="Unexpected state";typeof t=="string"?i=t:r=t,n||__(e,i,r)}function ae(n,e){return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const V={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class G extends qt{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cn{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class y_{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class w_{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(dt.UNAUTHENTICATED))}shutdown(){}}class GR{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class WR{constructor(e){this.t=e,this.currentUser=dt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){Ee(this.o===void 0,42304);let r=this.i;const i=c=>this.i!==r?(r=this.i,t(c)):Promise.resolve();let s=new cn;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new cn,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const c=s;e.enqueueRetryable(()=>p(this,null,function*(){yield c.promise,yield i(this.currentUser)}))},a=c=>{Y("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit(c=>a(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?a(c):(Y("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new cn)}},0),o()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(r=>this.i!==e?(Y("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(Ee(typeof r.accessToken=="string",31837,{l:r}),new y_(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return Ee(e===null||typeof e=="string",2055,{h:e}),new dt(e)}}class HR{constructor(e,t,r){this.P=e,this.T=t,this.I=r,this.type="FirstParty",this.user=dt.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class KR{constructor(e,t,r){this.P=e,this.T=t,this.I=r}getToken(){return Promise.resolve(new HR(this.P,this.T,this.I))}start(e,t){e.enqueueRetryable(()=>t(dt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class rm{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class QR{constructor(e,t){this.V=t,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,Et(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,t){Ee(this.o===void 0,3512);const r=s=>{s.error!=null&&Y("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.m;return this.m=s.token,Y("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?t(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{Y("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.V.getImmediate({optional:!0});s?i(s):Y("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.p)return Promise.resolve(new rm(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(t=>t?(Ee(typeof t.token=="string",44558,{tokenResult:t}),this.m=t.token,new rm(t.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function YR(n){const e=typeof self!="undefined"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let r=0;r<n;r++)t[r]=Math.floor(256*Math.random());return t}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function E_(){return new TextEncoder}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lc{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const i=YR(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<t&&(r+=e.charAt(i[s]%62))}return r}}function ue(n,e){return n<e?-1:n>e?1:0}function Gl(n,e){let t=0;for(;t<n.length&&t<e.length;){const r=n.codePointAt(t),i=e.codePointAt(t);if(r!==i){if(r<128&&i<128)return ue(r,i);{const s=E_(),o=JR(s.encode(im(n,t)),s.encode(im(e,t)));return o!==0?o:ue(r,i)}}t+=r>65535?2:1}return ue(n.length,e.length)}function im(n,e){return n.codePointAt(e)>65535?n.substring(e,e+2):n.substring(e,e+1)}function JR(n,e){for(let t=0;t<n.length&&t<e.length;++t)if(n[t]!==e[t])return ue(n[t],e[t]);return ue(n.length,e.length)}function _i(n,e,t){return n.length===e.length&&n.every((r,i)=>t(r,e[i]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sm="__name__";class rn{constructor(e,t,r){t===void 0?t=0:t>e.length&&ne(637,{offset:t,range:e.length}),r===void 0?r=e.length-t:r>e.length-t&&ne(1746,{length:r,range:e.length-t}),this.segments=e,this.offset=t,this.len=r}get length(){return this.len}isEqual(e){return rn.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof rn?e.forEach(r=>{t.push(r)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,r=this.limit();t<r;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const r=Math.min(e.length,t.length);for(let i=0;i<r;i++){const s=rn.compareSegments(e.get(i),t.get(i));if(s!==0)return s}return ue(e.length,t.length)}static compareSegments(e,t){const r=rn.isNumericId(e),i=rn.isNumericId(t);return r&&!i?-1:!r&&i?1:r&&i?rn.extractNumericId(e).compare(rn.extractNumericId(t)):Gl(e,t)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return Zn.fromString(e.substring(4,e.length-2))}}class Re extends rn{construct(e,t,r){return new Re(e,t,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const r of e){if(r.indexOf("//")>=0)throw new G(V.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);t.push(...r.split("/").filter(i=>i.length>0))}return new Re(t)}static emptyPath(){return new Re([])}}const XR=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Ze extends rn{construct(e,t,r){return new Ze(e,t,r)}static isValidIdentifier(e){return XR.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Ze.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===sm}static keyField(){return new Ze([sm])}static fromServerFormat(e){const t=[];let r="",i=0;const s=()=>{if(r.length===0)throw new G(V.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(r),r=""};let o=!1;for(;i<e.length;){const a=e[i];if(a==="\\"){if(i+1===e.length)throw new G(V.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const c=e[i+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new G(V.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=c,i+=2}else a==="`"?(o=!o,i++):a!=="."||o?(r+=a,i++):(s(),i++)}if(s(),o)throw new G(V.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Ze(t)}static emptyPath(){return new Ze([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ee{constructor(e){this.path=e}static fromPath(e){return new ee(Re.fromString(e))}static fromName(e){return new ee(Re.fromString(e).popFirst(5))}static empty(){return new ee(Re.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Re.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return Re.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new ee(new Re(e.slice()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ju(n,e,t){if(!t)throw new G(V.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${e}.`)}function v_(n,e,t,r){if(e===!0&&r===!0)throw new G(V.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function om(n){if(!ee.isDocumentKey(n))throw new G(V.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function am(n){if(ee.isDocumentKey(n))throw new G(V.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function T_(n){return typeof n=="object"&&n!==null&&(Object.getPrototypeOf(n)===Object.prototype||Object.getPrototypeOf(n)===null)}function uc(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":ne(12329,{type:typeof n})}function tt(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new G(V.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=uc(n);throw new G(V.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}function ZR(n,e){if(e<=0)throw new G(V.INVALID_ARGUMENT,`Function ${n}() requires a positive number, but it was: ${e}.`)}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ze(n,e){const t={typeString:n};return e&&(t.value=e),t}function io(n,e){if(!T_(n))throw new G(V.INVALID_ARGUMENT,"JSON must be an object");let t;for(const r in e)if(e[r]){const i=e[r].typeString,s="value"in e[r]?{value:e[r].value}:void 0;if(!(r in n)){t=`JSON missing required field: '${r}'`;break}const o=n[r];if(i&&typeof o!==i){t=`JSON field '${r}' must be a ${i}.`;break}if(s!==void 0&&o!==s.value){t=`Expected '${r}' field to equal '${s.value}'`;break}}if(t)throw new G(V.INVALID_ARGUMENT,t);return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cm=-62135596800,lm=1e6;class F{static now(){return F.fromMillis(Date.now())}static fromDate(e){return F.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),r=Math.floor((e-1e3*t)*lm);return new F(t,r)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new G(V.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new G(V.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<cm)throw new G(V.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new G(V.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/lm}_compareTo(e){return this.seconds===e.seconds?ue(this.nanoseconds,e.nanoseconds):ue(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:F._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(io(e,F._jsonSchema))return new F(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-cm;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}F._jsonSchemaVersion="firestore/timestamp/1.0",F._jsonSchema={type:ze("string",F._jsonSchemaVersion),seconds:ze("number"),nanoseconds:ze("number")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ie{static fromTimestamp(e){return new ie(e)}static min(){return new ie(new F(0,0))}static max(){return new ie(new F(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ms=-1;function eb(n,e){const t=n.toTimestamp().seconds,r=n.toTimestamp().nanoseconds+1,i=ie.fromTimestamp(r===1e9?new F(t+1,0):new F(t,r));return new ir(i,ee.empty(),e)}function tb(n){return new ir(n.readTime,n.key,Ms)}class ir{constructor(e,t,r){this.readTime=e,this.documentKey=t,this.largestBatchId=r}static min(){return new ir(ie.min(),ee.empty(),Ms)}static max(){return new ir(ie.max(),ee.empty(),Ms)}}function nb(n,e){let t=n.readTime.compareTo(e.readTime);return t!==0?t:(t=ee.comparator(n.documentKey,e.documentKey),t!==0?t:ue(n.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rb="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class ib{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Di(n){return p(this,null,function*(){if(n.code!==V.FAILED_PRECONDITION||n.message!==rb)throw n;Y("LocalStore","Unexpectedly lost primary lease")})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ${constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)},t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&ne(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new $((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(t,s).next(r,i)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{const t=e();return t instanceof $?t:$.resolve(t)}catch(t){return $.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):$.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):$.reject(t)}static resolve(e){return new $((t,r)=>{t(e)})}static reject(e){return new $((t,r)=>{r(e)})}static waitFor(e){return new $((t,r)=>{let i=0,s=0,o=!1;e.forEach(a=>{++i,a.next(()=>{++s,o&&s===i&&t()},c=>r(c))}),o=!0,s===i&&t()})}static or(e){let t=$.resolve(!1);for(const r of e)t=t.next(i=>i?$.resolve(i):r());return t}static forEach(e,t){const r=[];return e.forEach((i,s)=>{r.push(t.call(this,i,s))}),this.waitFor(r)}static mapArray(e,t){return new $((r,i)=>{const s=e.length,o=new Array(s);let a=0;for(let c=0;c<s;c++){const u=c;t(e[u]).next(d=>{o[u]=d,++a,a===s&&r(o)},d=>i(d))}})}static doWhile(e,t){return new $((r,i)=>{const s=()=>{e()===!0?t().next(()=>{s()},i):r()};s()})}}function sb(n){const e=n.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function Ni(n){return n.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dc{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=r=>this._e(r),this.ae=r=>t.writeSequenceNumber(r))}_e(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ae&&this.ae(e),e}}dc.ue=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xu=-1;function so(n){return n==null}function Ra(n){return n===0&&1/n==-1/0}function ob(n){return typeof n=="number"&&Number.isInteger(n)&&!Ra(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const I_="";function ab(n){let e="";for(let t=0;t<n.length;t++)e.length>0&&(e=um(e)),e=cb(n.get(t),e);return um(e)}function cb(n,e){let t=e;const r=n.length;for(let i=0;i<r;i++){const s=n.charAt(i);switch(s){case"\0":t+="";break;case I_:t+="";break;default:t+=s}}return t}function um(n){return n+I_+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dm(n){let e=0;for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function mr(n,e){for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}function A_(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let We=class Wl{constructor(e,t){this.comparator=e,this.root=t||er.EMPTY}insert(e,t){return new Wl(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,er.BLACK,null,null))}remove(e){return new Wl(this.comparator,this.root.remove(e,this.comparator).copy(null,null,er.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const r=this.comparator(e,t.key);if(r===0)return t.value;r<0?t=t.left:r>0&&(t=t.right)}return null}indexOf(e){let t=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return t+r.left.size;i<0?r=r.left:(t+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,r)=>(e(t,r),!1))}toString(){const e=[];return this.inorderTraversal((t,r)=>(e.push(`${t}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Ho(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Ho(this.root,e,this.comparator,!1)}getReverseIterator(){return new Ho(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Ho(this.root,e,this.comparator,!0)}},Ho=class{constructor(e,t,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=t?r(e.key,t):1,t&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}},er=class yn{constructor(e,t,r,i,s){this.key=e,this.value=t,this.color=r!=null?r:yn.RED,this.left=i!=null?i:yn.EMPTY,this.right=s!=null?s:yn.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,r,i,s){return new yn(e!=null?e:this.key,t!=null?t:this.value,r!=null?r:this.color,i!=null?i:this.left,s!=null?s:this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,t,r),null):s===0?i.copy(null,t,null,null,null):i.copy(null,null,null,null,i.right.insert(e,t,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return yn.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let r,i=this;if(t(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,t),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),t(e,i.key)===0){if(i.right.isEmpty())return yn.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,t))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,yn.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,yn.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw ne(43730,{key:this.key,value:this.value});if(this.right.isRed())throw ne(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw ne(27949);return e+(this.isRed()?0:1)}};er.EMPTY=null,er.RED=!0,er.BLACK=!1;er.EMPTY=new class{constructor(){this.size=0}get key(){throw ne(57766)}get value(){throw ne(16141)}get color(){throw ne(16727)}get left(){throw ne(29726)}get right(){throw ne(36894)}copy(e,t,r,i,s){return this}insert(e,t,r){return new er(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ke{constructor(e){this.comparator=e,this.data=new We(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,r)=>(e(t),!1))}forEachInRange(e,t){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;t(i.key)}}forEachWhile(e,t){let r;for(r=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new hm(this.data.getIterator())}getIteratorFrom(e){return new hm(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(r=>{t=t.add(r)}),t}isEqual(e){if(!(e instanceof Ke)||this.size!==e.size)return!1;const t=this.data.getIterator(),r=e.data.getIterator();for(;t.hasNext();){const i=t.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(t=>{e.push(t)}),e}toString(){const e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){const t=new Ke(this.comparator);return t.data=e,t}}class hm{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pt{constructor(e){this.fields=e,e.sort(Ze.comparator)}static empty(){return new Pt([])}unionWith(e){let t=new Ke(Ze.comparator);for(const r of this.fields)t=t.add(r);for(const r of e)t=t.add(r);return new Pt(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return _i(this.fields,e.fields,(t,r)=>t.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class R_ extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rt{constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(i){try{return atob(i)}catch(s){throw typeof DOMException!="undefined"&&s instanceof DOMException?new R_("Invalid base64 string: "+s):s}}(e);return new rt(t)}static fromUint8Array(e){const t=function(i){let s="";for(let o=0;o<i.length;++o)s+=String.fromCharCode(i[o]);return s}(e);return new rt(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(t){return btoa(t)}(this.binaryString)}toUint8Array(){return function(t){const r=new Uint8Array(t.length);for(let i=0;i<t.length;i++)r[i]=t.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return ue(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}rt.EMPTY_BYTE_STRING=new rt("");const lb=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function sr(n){if(Ee(!!n,39018),typeof n=="string"){let e=0;const t=lb.exec(n);if(Ee(!!t,46558,{timestamp:n}),t[1]){let i=t[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(n);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Be(n.seconds),nanos:Be(n.nanos)}}function Be(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function or(n){return typeof n=="string"?rt.fromBase64String(n):rt.fromUint8Array(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const b_="server_timestamp",S_="__type__",k_="__previous_value__",C_="__local_write_time__";function Zu(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{})[S_])===null||t===void 0?void 0:t.stringValue)===b_}function hc(n){const e=n.mapValue.fields[k_];return Zu(e)?hc(e):e}function xs(n){const e=sr(n.mapValue.fields[C_].timestampValue);return new F(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ub{constructor(e,t,r,i,s,o,a,c,u,d){this.databaseId=e,this.appId=t,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=c,this.useFetchStreams=u,this.isUsingEmulator=d}}const ba="(default)";class yi{constructor(e,t){this.projectId=e,this.database=t||ba}static empty(){return new yi("","")}get isDefaultDatabase(){return this.database===ba}isEqual(e){return e instanceof yi&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const P_="__type__",D_="__max__",Ko={mapValue:{fields:{__type__:{stringValue:D_}}}},N_="__vector__",Sa="value";function ar(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?Zu(n)?4:hb(n)?9007199254740991:db(n)?10:11:ne(28295,{value:n})}function un(n,e){if(n===e)return!0;const t=ar(n);if(t!==ar(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return xs(n).isEqual(xs(e));case 3:return function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;const o=sr(i.timestampValue),a=sr(s.timestampValue);return o.seconds===a.seconds&&o.nanos===a.nanos}(n,e);case 5:return n.stringValue===e.stringValue;case 6:return function(i,s){return or(i.bytesValue).isEqual(or(s.bytesValue))}(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return function(i,s){return Be(i.geoPointValue.latitude)===Be(s.geoPointValue.latitude)&&Be(i.geoPointValue.longitude)===Be(s.geoPointValue.longitude)}(n,e);case 2:return function(i,s){if("integerValue"in i&&"integerValue"in s)return Be(i.integerValue)===Be(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){const o=Be(i.doubleValue),a=Be(s.doubleValue);return o===a?Ra(o)===Ra(a):isNaN(o)&&isNaN(a)}return!1}(n,e);case 9:return _i(n.arrayValue.values||[],e.arrayValue.values||[],un);case 10:case 11:return function(i,s){const o=i.mapValue.fields||{},a=s.mapValue.fields||{};if(dm(o)!==dm(a))return!1;for(const c in o)if(o.hasOwnProperty(c)&&(a[c]===void 0||!un(o[c],a[c])))return!1;return!0}(n,e);default:return ne(52216,{left:n})}}function Us(n,e){return(n.values||[]).find(t=>un(t,e))!==void 0}function wi(n,e){if(n===e)return 0;const t=ar(n),r=ar(e);if(t!==r)return ue(t,r);switch(t){case 0:case 9007199254740991:return 0;case 1:return ue(n.booleanValue,e.booleanValue);case 2:return function(s,o){const a=Be(s.integerValue||s.doubleValue),c=Be(o.integerValue||o.doubleValue);return a<c?-1:a>c?1:a===c?0:isNaN(a)?isNaN(c)?0:-1:1}(n,e);case 3:return fm(n.timestampValue,e.timestampValue);case 4:return fm(xs(n),xs(e));case 5:return Gl(n.stringValue,e.stringValue);case 6:return function(s,o){const a=or(s),c=or(o);return a.compareTo(c)}(n.bytesValue,e.bytesValue);case 7:return function(s,o){const a=s.split("/"),c=o.split("/");for(let u=0;u<a.length&&u<c.length;u++){const d=ue(a[u],c[u]);if(d!==0)return d}return ue(a.length,c.length)}(n.referenceValue,e.referenceValue);case 8:return function(s,o){const a=ue(Be(s.latitude),Be(o.latitude));return a!==0?a:ue(Be(s.longitude),Be(o.longitude))}(n.geoPointValue,e.geoPointValue);case 9:return mm(n.arrayValue,e.arrayValue);case 10:return function(s,o){var a,c,u,d;const h=s.fields||{},m=o.fields||{},_=(a=h[Sa])===null||a===void 0?void 0:a.arrayValue,w=(c=m[Sa])===null||c===void 0?void 0:c.arrayValue,E=ue(((u=_==null?void 0:_.values)===null||u===void 0?void 0:u.length)||0,((d=w==null?void 0:w.values)===null||d===void 0?void 0:d.length)||0);return E!==0?E:mm(_,w)}(n.mapValue,e.mapValue);case 11:return function(s,o){if(s===Ko.mapValue&&o===Ko.mapValue)return 0;if(s===Ko.mapValue)return 1;if(o===Ko.mapValue)return-1;const a=s.fields||{},c=Object.keys(a),u=o.fields||{},d=Object.keys(u);c.sort(),d.sort();for(let h=0;h<c.length&&h<d.length;++h){const m=Gl(c[h],d[h]);if(m!==0)return m;const _=wi(a[c[h]],u[d[h]]);if(_!==0)return _}return ue(c.length,d.length)}(n.mapValue,e.mapValue);default:throw ne(23264,{le:t})}}function fm(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return ue(n,e);const t=sr(n),r=sr(e),i=ue(t.seconds,r.seconds);return i!==0?i:ue(t.nanos,r.nanos)}function mm(n,e){const t=n.values||[],r=e.values||[];for(let i=0;i<t.length&&i<r.length;++i){const s=wi(t[i],r[i]);if(s)return s}return ue(t.length,r.length)}function Ei(n){return Hl(n)}function Hl(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?function(t){const r=sr(t);return`time(${r.seconds},${r.nanos})`}(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?function(t){return or(t).toBase64()}(n.bytesValue):"referenceValue"in n?function(t){return ee.fromName(t).toString()}(n.referenceValue):"geoPointValue"in n?function(t){return`geo(${t.latitude},${t.longitude})`}(n.geoPointValue):"arrayValue"in n?function(t){let r="[",i=!0;for(const s of t.values||[])i?i=!1:r+=",",r+=Hl(s);return r+"]"}(n.arrayValue):"mapValue"in n?function(t){const r=Object.keys(t.fields||{}).sort();let i="{",s=!0;for(const o of r)s?s=!1:i+=",",i+=`${o}:${Hl(t.fields[o])}`;return i+"}"}(n.mapValue):ne(61005,{value:n})}function ca(n){switch(ar(n)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=hc(n);return e?16+ca(e):16;case 5:return 2*n.stringValue.length;case 6:return or(n.bytesValue).approximateByteSize();case 7:return n.referenceValue.length;case 9:return function(r){return(r.values||[]).reduce((i,s)=>i+ca(s),0)}(n.arrayValue);case 10:case 11:return function(r){let i=0;return mr(r.fields,(s,o)=>{i+=s.length+ca(o)}),i}(n.mapValue);default:throw ne(13486,{value:n})}}function pm(n,e){return{referenceValue:`projects/${n.projectId}/databases/${n.database}/documents/${e.path.canonicalString()}`}}function Kl(n){return!!n&&"integerValue"in n}function ed(n){return!!n&&"arrayValue"in n}function gm(n){return!!n&&"nullValue"in n}function _m(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function la(n){return!!n&&"mapValue"in n}function db(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{})[P_])===null||t===void 0?void 0:t.stringValue)===N_}function _s(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){const e={mapValue:{fields:{}}};return mr(n.mapValue.fields,(t,r)=>e.mapValue.fields[t]=_s(r)),e}if(n.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=_s(n.arrayValue.values[t]);return e}return Object.assign({},n)}function hb(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue===D_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vt{constructor(e){this.value=e}static empty(){return new vt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let r=0;r<e.length-1;++r)if(t=(t.mapValue.fields||{})[e.get(r)],!la(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=_s(t)}setAll(e){let t=Ze.emptyPath(),r={},i=[];e.forEach((o,a)=>{if(!t.isImmediateParentOf(a)){const c=this.getFieldsMap(t);this.applyChanges(c,r,i),r={},i=[],t=a.popLast()}o?r[a.lastSegment()]=_s(o):i.push(a.lastSegment())});const s=this.getFieldsMap(t);this.applyChanges(s,r,i)}delete(e){const t=this.field(e.popLast());la(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return un(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=t.mapValue.fields[e.get(r)];la(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},t.mapValue.fields[e.get(r)]=i),t=i}return t.mapValue.fields}applyChanges(e,t,r){mr(t,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new vt(_s(this.value))}}function O_(n){const e=[];return mr(n.fields,(t,r)=>{const i=new Ze([t]);if(la(r)){const s=O_(r.mapValue).fields;if(s.length===0)e.push(i);else for(const o of s)e.push(i.child(o))}else e.push(i)}),new Pt(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xe{constructor(e,t,r,i,s,o,a){this.key=e,this.documentType=t,this.version=r,this.readTime=i,this.createTime=s,this.data=o,this.documentState=a}static newInvalidDocument(e){return new Xe(e,0,ie.min(),ie.min(),ie.min(),vt.empty(),0)}static newFoundDocument(e,t,r,i){return new Xe(e,1,t,ie.min(),r,i,0)}static newNoDocument(e,t){return new Xe(e,2,t,ie.min(),ie.min(),vt.empty(),0)}static newUnknownDocument(e,t){return new Xe(e,3,t,ie.min(),ie.min(),vt.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(ie.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=vt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=vt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=ie.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Xe&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Xe(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ka{constructor(e,t){this.position=e,this.inclusive=t}}function ym(n,e,t){let r=0;for(let i=0;i<n.position.length;i++){const s=e[i],o=n.position[i];if(s.field.isKeyField()?r=ee.comparator(ee.fromName(o.referenceValue),t.key):r=wi(o,t.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function wm(n,e){if(n===null)return e===null;if(e===null||n.inclusive!==e.inclusive||n.position.length!==e.position.length)return!1;for(let t=0;t<n.position.length;t++)if(!un(n.position[t],e.position[t]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fs{constructor(e,t="asc"){this.field=e,this.dir=t}}function fb(n,e){return n.dir===e.dir&&n.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class L_{}class qe extends L_{constructor(e,t,r){super(),this.field=e,this.op=t,this.value=r}static create(e,t,r){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,r):new pb(e,t,r):t==="array-contains"?new yb(e,r):t==="in"?new wb(e,r):t==="not-in"?new Eb(e,r):t==="array-contains-any"?new vb(e,r):new qe(e,t,r)}static createKeyFieldInFilter(e,t,r){return t==="in"?new gb(e,r):new _b(e,r)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&t.nullValue===void 0&&this.matchesComparison(wi(t,this.value)):t!==null&&ar(this.value)===ar(t)&&this.matchesComparison(wi(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return ne(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Xt extends L_{constructor(e,t){super(),this.filters=e,this.op=t,this.he=null}static create(e,t){return new Xt(e,t)}matches(e){return V_(this)?this.filters.find(t=>!t.matches(e))===void 0:this.filters.find(t=>t.matches(e))!==void 0}getFlattenedFilters(){return this.he!==null||(this.he=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.he}getFilters(){return Object.assign([],this.filters)}}function V_(n){return n.op==="and"}function M_(n){return mb(n)&&V_(n)}function mb(n){for(const e of n.filters)if(e instanceof Xt)return!1;return!0}function Ql(n){if(n instanceof qe)return n.field.canonicalString()+n.op.toString()+Ei(n.value);if(M_(n))return n.filters.map(e=>Ql(e)).join(",");{const e=n.filters.map(t=>Ql(t)).join(",");return`${n.op}(${e})`}}function x_(n,e){return n instanceof qe?function(r,i){return i instanceof qe&&r.op===i.op&&r.field.isEqual(i.field)&&un(r.value,i.value)}(n,e):n instanceof Xt?function(r,i){return i instanceof Xt&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((s,o,a)=>s&&x_(o,i.filters[a]),!0):!1}(n,e):void ne(19439)}function U_(n){return n instanceof qe?function(t){return`${t.field.canonicalString()} ${t.op} ${Ei(t.value)}`}(n):n instanceof Xt?function(t){return t.op.toString()+" {"+t.getFilters().map(U_).join(" ,")+"}"}(n):"Filter"}class pb extends qe{constructor(e,t,r){super(e,t,r),this.key=ee.fromName(r.referenceValue)}matches(e){const t=ee.comparator(e.key,this.key);return this.matchesComparison(t)}}class gb extends qe{constructor(e,t){super(e,"in",t),this.keys=F_("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class _b extends qe{constructor(e,t){super(e,"not-in",t),this.keys=F_("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function F_(n,e){var t;return(((t=e.arrayValue)===null||t===void 0?void 0:t.values)||[]).map(r=>ee.fromName(r.referenceValue))}class yb extends qe{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return ed(t)&&Us(t.arrayValue,this.value)}}class wb extends qe{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&Us(this.value.arrayValue,t)}}class Eb extends qe{constructor(e,t){super(e,"not-in",t)}matches(e){if(Us(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&t.nullValue===void 0&&!Us(this.value.arrayValue,t)}}class vb extends qe{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!ed(t)||!t.arrayValue.values)&&t.arrayValue.values.some(r=>Us(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tb{constructor(e,t=null,r=[],i=[],s=null,o=null,a=null){this.path=e,this.collectionGroup=t,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=a,this.Pe=null}}function Em(n,e=null,t=[],r=[],i=null,s=null,o=null){return new Tb(n,e,t,r,i,s,o)}function td(n){const e=ae(n);if(e.Pe===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map(r=>Ql(r)).join(","),t+="|ob:",t+=e.orderBy.map(r=>function(s){return s.field.canonicalString()+s.dir}(r)).join(","),so(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(r=>Ei(r)).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(r=>Ei(r)).join(",")),e.Pe=t}return e.Pe}function nd(n,e){if(n.limit!==e.limit||n.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<n.orderBy.length;t++)if(!fb(n.orderBy[t],e.orderBy[t]))return!1;if(n.filters.length!==e.filters.length)return!1;for(let t=0;t<n.filters.length;t++)if(!x_(n.filters[t],e.filters[t]))return!1;return n.collectionGroup===e.collectionGroup&&!!n.path.isEqual(e.path)&&!!wm(n.startAt,e.startAt)&&wm(n.endAt,e.endAt)}function Yl(n){return ee.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jr{constructor(e,t=null,r=[],i=[],s=null,o="F",a=null,c=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=a,this.endAt=c,this.Te=null,this.Ie=null,this.de=null}}function Ib(n,e,t,r,i,s,o,a){return new jr(n,e,t,r,i,s,o,a)}function fc(n){return new jr(n)}function vm(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function B_(n){return n.collectionGroup!==null}function ys(n){const e=ae(n);if(e.Te===null){e.Te=[];const t=new Set;for(const s of e.explicitOrderBy)e.Te.push(s),t.add(s.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let a=new Ke(Ze.comparator);return o.filters.forEach(c=>{c.getFlattenedFilters().forEach(u=>{u.isInequality()&&(a=a.add(u.field))})}),a})(e).forEach(s=>{t.has(s.canonicalString())||s.isKeyField()||e.Te.push(new Fs(s,r))}),t.has(Ze.keyField().canonicalString())||e.Te.push(new Fs(Ze.keyField(),r))}return e.Te}function ln(n){const e=ae(n);return e.Ie||(e.Ie=Ab(e,ys(n))),e.Ie}function Ab(n,e){if(n.limitType==="F")return Em(n.path,n.collectionGroup,e,n.filters,n.limit,n.startAt,n.endAt);{e=e.map(i=>{const s=i.dir==="desc"?"asc":"desc";return new Fs(i.field,s)});const t=n.endAt?new ka(n.endAt.position,n.endAt.inclusive):null,r=n.startAt?new ka(n.startAt.position,n.startAt.inclusive):null;return Em(n.path,n.collectionGroup,e,n.filters,n.limit,t,r)}}function Jl(n,e){const t=n.filters.concat([e]);return new jr(n.path,n.collectionGroup,n.explicitOrderBy.slice(),t,n.limit,n.limitType,n.startAt,n.endAt)}function Ca(n,e,t){return new jr(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),e,t,n.startAt,n.endAt)}function mc(n,e){return nd(ln(n),ln(e))&&n.limitType===e.limitType}function $_(n){return`${td(ln(n))}|lt:${n.limitType}`}function ni(n){return`Query(target=${function(t){let r=t.path.canonicalString();return t.collectionGroup!==null&&(r+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(r+=`, filters: [${t.filters.map(i=>U_(i)).join(", ")}]`),so(t.limit)||(r+=", limit: "+t.limit),t.orderBy.length>0&&(r+=`, orderBy: [${t.orderBy.map(i=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(i)).join(", ")}]`),t.startAt&&(r+=", startAt: ",r+=t.startAt.inclusive?"b:":"a:",r+=t.startAt.position.map(i=>Ei(i)).join(",")),t.endAt&&(r+=", endAt: ",r+=t.endAt.inclusive?"a:":"b:",r+=t.endAt.position.map(i=>Ei(i)).join(",")),`Target(${r})`}(ln(n))}; limitType=${n.limitType})`}function pc(n,e){return e.isFoundDocument()&&function(r,i){const s=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(s):ee.isDocumentKey(r.path)?r.path.isEqual(s):r.path.isImmediateParentOf(s)}(n,e)&&function(r,i){for(const s of ys(r))if(!s.field.isKeyField()&&i.data.field(s.field)===null)return!1;return!0}(n,e)&&function(r,i){for(const s of r.filters)if(!s.matches(i))return!1;return!0}(n,e)&&function(r,i){return!(r.startAt&&!function(o,a,c){const u=ym(o,a,c);return o.inclusive?u<=0:u<0}(r.startAt,ys(r),i)||r.endAt&&!function(o,a,c){const u=ym(o,a,c);return o.inclusive?u>=0:u>0}(r.endAt,ys(r),i))}(n,e)}function Rb(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function q_(n){return(e,t)=>{let r=!1;for(const i of ys(n)){const s=bb(i,e,t);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function bb(n,e,t){const r=n.field.isKeyField()?ee.comparator(e.key,t.key):function(s,o,a){const c=o.data.field(s),u=a.data.field(s);return c!==null&&u!==null?wi(c,u):ne(42886)}(n.field,e,t);switch(n.dir){case"asc":return r;case"desc":return-1*r;default:return ne(19790,{direction:n.dir})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zr{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,t){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,t]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,t]);i.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[t]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){mr(this.inner,(t,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return A_(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sb=new We(ee.comparator);function Vn(){return Sb}const j_=new We(ee.comparator);function us(...n){let e=j_;for(const t of n)e=e.insert(t.key,t);return e}function z_(n){let e=j_;return n.forEach((t,r)=>e=e.insert(t,r.overlayedDocument)),e}function Ar(){return ws()}function G_(){return ws()}function ws(){return new zr(n=>n.toString(),(n,e)=>n.isEqual(e))}const kb=new We(ee.comparator),Cb=new Ke(ee.comparator);function he(...n){let e=Cb;for(const t of n)e=e.add(t);return e}const Pb=new Ke(ue);function Db(){return Pb}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rd(n,e){if(n.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Ra(e)?"-0":e}}function W_(n){return{integerValue:""+n}}function Nb(n,e){return ob(e)?W_(e):rd(n,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gc{constructor(){this._=void 0}}function Ob(n,e,t){return n instanceof Bs?function(i,s){const o={fields:{[S_]:{stringValue:b_},[C_]:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return s&&Zu(s)&&(s=hc(s)),s&&(o.fields[k_]=s),{mapValue:o}}(t,e):n instanceof $s?K_(n,e):n instanceof qs?Q_(n,e):function(i,s){const o=H_(i,s),a=Tm(o)+Tm(i.Ee);return Kl(o)&&Kl(i.Ee)?W_(a):rd(i.serializer,a)}(n,e)}function Lb(n,e,t){return n instanceof $s?K_(n,e):n instanceof qs?Q_(n,e):t}function H_(n,e){return n instanceof Pa?function(r){return Kl(r)||function(s){return!!s&&"doubleValue"in s}(r)}(e)?e:{integerValue:0}:null}class Bs extends gc{}class $s extends gc{constructor(e){super(),this.elements=e}}function K_(n,e){const t=Y_(e);for(const r of n.elements)t.some(i=>un(i,r))||t.push(r);return{arrayValue:{values:t}}}class qs extends gc{constructor(e){super(),this.elements=e}}function Q_(n,e){let t=Y_(e);for(const r of n.elements)t=t.filter(i=>!un(i,r));return{arrayValue:{values:t}}}class Pa extends gc{constructor(e,t){super(),this.serializer=e,this.Ee=t}}function Tm(n){return Be(n.integerValue||n.doubleValue)}function Y_(n){return ed(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vb{constructor(e,t){this.field=e,this.transform=t}}function Mb(n,e){return n.field.isEqual(e.field)&&function(r,i){return r instanceof $s&&i instanceof $s||r instanceof qs&&i instanceof qs?_i(r.elements,i.elements,un):r instanceof Pa&&i instanceof Pa?un(r.Ee,i.Ee):r instanceof Bs&&i instanceof Bs}(n.transform,e.transform)}class xb{constructor(e,t){this.version=e,this.transformResults=t}}class je{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new je}static exists(e){return new je(void 0,e)}static updateTime(e){return new je(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function ua(n,e){return n.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(n.updateTime):n.exists===void 0||n.exists===e.isFoundDocument()}class _c{}function J_(n,e){if(!n.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return n.isNoDocument()?new ao(n.key,je.none()):new oo(n.key,n.data,je.none());{const t=n.data,r=vt.empty();let i=new Ke(Ze.comparator);for(let s of e.fields)if(!i.has(s)){let o=t.field(s);o===null&&s.length>1&&(s=s.popLast(),o=t.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new pr(n.key,r,new Pt(i.toArray()),je.none())}}function Ub(n,e,t){n instanceof oo?function(i,s,o){const a=i.value.clone(),c=Am(i.fieldTransforms,s,o.transformResults);a.setAll(c),s.convertToFoundDocument(o.version,a).setHasCommittedMutations()}(n,e,t):n instanceof pr?function(i,s,o){if(!ua(i.precondition,s))return void s.convertToUnknownDocument(o.version);const a=Am(i.fieldTransforms,s,o.transformResults),c=s.data;c.setAll(X_(i)),c.setAll(a),s.convertToFoundDocument(o.version,c).setHasCommittedMutations()}(n,e,t):function(i,s,o){s.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,t)}function Es(n,e,t,r){return n instanceof oo?function(s,o,a,c){if(!ua(s.precondition,o))return a;const u=s.value.clone(),d=Rm(s.fieldTransforms,c,o);return u.setAll(d),o.convertToFoundDocument(o.version,u).setHasLocalMutations(),null}(n,e,t,r):n instanceof pr?function(s,o,a,c){if(!ua(s.precondition,o))return a;const u=Rm(s.fieldTransforms,c,o),d=o.data;return d.setAll(X_(s)),d.setAll(u),o.convertToFoundDocument(o.version,d).setHasLocalMutations(),a===null?null:a.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(h=>h.field))}(n,e,t,r):function(s,o,a){return ua(s.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):a}(n,e,t)}function Fb(n,e){let t=null;for(const r of n.fieldTransforms){const i=e.data.field(r.field),s=H_(r.transform,i||null);s!=null&&(t===null&&(t=vt.empty()),t.set(r.field,s))}return t||null}function Im(n,e){return n.type===e.type&&!!n.key.isEqual(e.key)&&!!n.precondition.isEqual(e.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&_i(r,i,(s,o)=>Mb(s,o))}(n.fieldTransforms,e.fieldTransforms)&&(n.type===0?n.value.isEqual(e.value):n.type!==1||n.data.isEqual(e.data)&&n.fieldMask.isEqual(e.fieldMask))}class oo extends _c{constructor(e,t,r,i=[]){super(),this.key=e,this.value=t,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class pr extends _c{constructor(e,t,r,i,s=[]){super(),this.key=e,this.data=t,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function X_(n){const e=new Map;return n.fieldMask.fields.forEach(t=>{if(!t.isEmpty()){const r=n.data.field(t);e.set(t,r)}}),e}function Am(n,e,t){const r=new Map;Ee(n.length===t.length,32656,{Ae:t.length,Re:n.length});for(let i=0;i<t.length;i++){const s=n[i],o=s.transform,a=e.data.field(s.field);r.set(s.field,Lb(o,a,t[i]))}return r}function Rm(n,e,t){const r=new Map;for(const i of n){const s=i.transform,o=t.data.field(i.field);r.set(i.field,Ob(s,o,e))}return r}class ao extends _c{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class Z_ extends _c{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bb{constructor(e,t,r,i){this.batchId=e,this.localWriteTime=t,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,t){const r=t.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&Ub(s,e,r[i])}}applyToLocalView(e,t){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(t=Es(r,e,t,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(t=Es(r,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const r=G_();return this.mutations.forEach(i=>{const s=e.get(i.key),o=s.overlayedDocument;let a=this.applyToLocalView(o,s.mutatedFields);a=t.has(i.key)?null:a;const c=J_(o,a);c!==null&&r.set(i.key,c),o.isValidDocument()||o.convertToNoDocument(ie.min())}),r}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),he())}isEqual(e){return this.batchId===e.batchId&&_i(this.mutations,e.mutations,(t,r)=>Im(t,r))&&_i(this.baseMutations,e.baseMutations,(t,r)=>Im(t,r))}}class id{constructor(e,t,r,i){this.batch=e,this.commitVersion=t,this.mutationResults=r,this.docVersions=i}static from(e,t,r){Ee(e.mutations.length===r.length,58842,{Ve:e.mutations.length,me:r.length});let i=function(){return kb}();const s=e.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new id(e,t,r,i)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $b{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qb{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var $e,_e;function ey(n){switch(n){case V.OK:return ne(64938);case V.CANCELLED:case V.UNKNOWN:case V.DEADLINE_EXCEEDED:case V.RESOURCE_EXHAUSTED:case V.INTERNAL:case V.UNAVAILABLE:case V.UNAUTHENTICATED:return!1;case V.INVALID_ARGUMENT:case V.NOT_FOUND:case V.ALREADY_EXISTS:case V.PERMISSION_DENIED:case V.FAILED_PRECONDITION:case V.ABORTED:case V.OUT_OF_RANGE:case V.UNIMPLEMENTED:case V.DATA_LOSS:return!0;default:return ne(15467,{code:n})}}function ty(n){if(n===void 0)return On("GRPC error has no .code"),V.UNKNOWN;switch(n){case $e.OK:return V.OK;case $e.CANCELLED:return V.CANCELLED;case $e.UNKNOWN:return V.UNKNOWN;case $e.DEADLINE_EXCEEDED:return V.DEADLINE_EXCEEDED;case $e.RESOURCE_EXHAUSTED:return V.RESOURCE_EXHAUSTED;case $e.INTERNAL:return V.INTERNAL;case $e.UNAVAILABLE:return V.UNAVAILABLE;case $e.UNAUTHENTICATED:return V.UNAUTHENTICATED;case $e.INVALID_ARGUMENT:return V.INVALID_ARGUMENT;case $e.NOT_FOUND:return V.NOT_FOUND;case $e.ALREADY_EXISTS:return V.ALREADY_EXISTS;case $e.PERMISSION_DENIED:return V.PERMISSION_DENIED;case $e.FAILED_PRECONDITION:return V.FAILED_PRECONDITION;case $e.ABORTED:return V.ABORTED;case $e.OUT_OF_RANGE:return V.OUT_OF_RANGE;case $e.UNIMPLEMENTED:return V.UNIMPLEMENTED;case $e.DATA_LOSS:return V.DATA_LOSS;default:return ne(39323,{code:n})}}(_e=$e||($e={}))[_e.OK=0]="OK",_e[_e.CANCELLED=1]="CANCELLED",_e[_e.UNKNOWN=2]="UNKNOWN",_e[_e.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",_e[_e.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",_e[_e.NOT_FOUND=5]="NOT_FOUND",_e[_e.ALREADY_EXISTS=6]="ALREADY_EXISTS",_e[_e.PERMISSION_DENIED=7]="PERMISSION_DENIED",_e[_e.UNAUTHENTICATED=16]="UNAUTHENTICATED",_e[_e.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",_e[_e.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",_e[_e.ABORTED=10]="ABORTED",_e[_e.OUT_OF_RANGE=11]="OUT_OF_RANGE",_e[_e.UNIMPLEMENTED=12]="UNIMPLEMENTED",_e[_e.INTERNAL=13]="INTERNAL",_e[_e.UNAVAILABLE=14]="UNAVAILABLE",_e[_e.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jb=new Zn([4294967295,4294967295],0);function bm(n){const e=E_().encode(n),t=new d_;return t.update(e),new Uint8Array(t.digest())}function Sm(n){const e=new DataView(n.buffer),t=e.getUint32(0,!0),r=e.getUint32(4,!0),i=e.getUint32(8,!0),s=e.getUint32(12,!0);return[new Zn([t,r],0),new Zn([i,s],0)]}class sd{constructor(e,t,r){if(this.bitmap=e,this.padding=t,this.hashCount=r,t<0||t>=8)throw new ds(`Invalid padding: ${t}`);if(r<0)throw new ds(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new ds(`Invalid hash count: ${r}`);if(e.length===0&&t!==0)throw new ds(`Invalid padding when bitmap length is 0: ${t}`);this.fe=8*e.length-t,this.ge=Zn.fromNumber(this.fe)}pe(e,t,r){let i=e.add(t.multiply(Zn.fromNumber(r)));return i.compare(jb)===1&&(i=new Zn([i.getBits(0),i.getBits(1)],0)),i.modulo(this.ge).toNumber()}ye(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.fe===0)return!1;const t=bm(e),[r,i]=Sm(t);for(let s=0;s<this.hashCount;s++){const o=this.pe(r,i,s);if(!this.ye(o))return!1}return!0}static create(e,t,r){const i=e%8==0?0:8-e%8,s=new Uint8Array(Math.ceil(e/8)),o=new sd(s,i,t);return r.forEach(a=>o.insert(a)),o}insert(e){if(this.fe===0)return;const t=bm(e),[r,i]=Sm(t);for(let s=0;s<this.hashCount;s++){const o=this.pe(r,i,s);this.we(o)}}we(e){const t=Math.floor(e/8),r=e%8;this.bitmap[t]|=1<<r}}class ds extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yc{constructor(e,t,r,i,s){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,t,r){const i=new Map;return i.set(e,co.createSynthesizedTargetChangeForCurrentChange(e,t,r)),new yc(ie.min(),i,new We(ue),Vn(),he())}}class co{constructor(e,t,r,i,s){this.resumeToken=e,this.current=t,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,t,r){return new co(r,t,he(),he(),he())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class da{constructor(e,t,r,i){this.Se=e,this.removedTargetIds=t,this.key=r,this.be=i}}class ny{constructor(e,t){this.targetId=e,this.De=t}}class ry{constructor(e,t,r=rt.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=t,this.resumeToken=r,this.cause=i}}class km{constructor(){this.ve=0,this.Ce=Cm(),this.Fe=rt.EMPTY_BYTE_STRING,this.Me=!1,this.xe=!0}get current(){return this.Me}get resumeToken(){return this.Fe}get Oe(){return this.ve!==0}get Ne(){return this.xe}Be(e){e.approximateByteSize()>0&&(this.xe=!0,this.Fe=e)}Le(){let e=he(),t=he(),r=he();return this.Ce.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:t=t.add(i);break;case 1:r=r.add(i);break;default:ne(38017,{changeType:s})}}),new co(this.Fe,this.Me,e,t,r)}ke(){this.xe=!1,this.Ce=Cm()}qe(e,t){this.xe=!0,this.Ce=this.Ce.insert(e,t)}Qe(e){this.xe=!0,this.Ce=this.Ce.remove(e)}$e(){this.ve+=1}Ue(){this.ve-=1,Ee(this.ve>=0,3241,{ve:this.ve})}Ke(){this.xe=!0,this.Me=!0}}class zb{constructor(e){this.We=e,this.Ge=new Map,this.ze=Vn(),this.je=Qo(),this.Je=Qo(),this.He=new We(ue)}Ye(e){for(const t of e.Se)e.be&&e.be.isFoundDocument()?this.Ze(t,e.be):this.Xe(t,e.key,e.be);for(const t of e.removedTargetIds)this.Xe(t,e.key,e.be)}et(e){this.forEachTarget(e,t=>{const r=this.tt(t);switch(e.state){case 0:this.nt(t)&&r.Be(e.resumeToken);break;case 1:r.Ue(),r.Oe||r.ke(),r.Be(e.resumeToken);break;case 2:r.Ue(),r.Oe||this.removeTarget(t);break;case 3:this.nt(t)&&(r.Ke(),r.Be(e.resumeToken));break;case 4:this.nt(t)&&(this.rt(t),r.Be(e.resumeToken));break;default:ne(56790,{state:e.state})}})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.Ge.forEach((r,i)=>{this.nt(i)&&t(i)})}it(e){const t=e.targetId,r=e.De.count,i=this.st(t);if(i){const s=i.target;if(Yl(s))if(r===0){const o=new ee(s.path);this.Xe(t,o,Xe.newNoDocument(o,ie.min()))}else Ee(r===1,20013,{expectedCount:r});else{const o=this.ot(t);if(o!==r){const a=this._t(e),c=a?this.ut(a,e,o):1;if(c!==0){this.rt(t);const u=c===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.He=this.He.insert(t,u)}}}}}_t(e){const t=e.De.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:r="",padding:i=0},hashCount:s=0}=t;let o,a;try{o=or(r).toUint8Array()}catch(c){if(c instanceof R_)return Ln("Decoding the base64 bloom filter in existence filter failed ("+c.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw c}try{a=new sd(o,i,s)}catch(c){return Ln(c instanceof ds?"BloomFilter error: ":"Applying bloom filter failed: ",c),null}return a.fe===0?null:a}ut(e,t,r){return t.De.count===r-this.ht(e,t.targetId)?0:2}ht(e,t){const r=this.We.getRemoteKeysForTarget(t);let i=0;return r.forEach(s=>{const o=this.We.lt(),a=`projects/${o.projectId}/databases/${o.database}/documents/${s.path.canonicalString()}`;e.mightContain(a)||(this.Xe(t,s,null),i++)}),i}Pt(e){const t=new Map;this.Ge.forEach((s,o)=>{const a=this.st(o);if(a){if(s.current&&Yl(a.target)){const c=new ee(a.target.path);this.Tt(c).has(o)||this.It(o,c)||this.Xe(o,c,Xe.newNoDocument(c,e))}s.Ne&&(t.set(o,s.Le()),s.ke())}});let r=he();this.Je.forEach((s,o)=>{let a=!0;o.forEachWhile(c=>{const u=this.st(c);return!u||u.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(r=r.add(s))}),this.ze.forEach((s,o)=>o.setReadTime(e));const i=new yc(e,t,this.He,this.ze,r);return this.ze=Vn(),this.je=Qo(),this.Je=Qo(),this.He=new We(ue),i}Ze(e,t){if(!this.nt(e))return;const r=this.It(e,t.key)?2:0;this.tt(e).qe(t.key,r),this.ze=this.ze.insert(t.key,t),this.je=this.je.insert(t.key,this.Tt(t.key).add(e)),this.Je=this.Je.insert(t.key,this.dt(t.key).add(e))}Xe(e,t,r){if(!this.nt(e))return;const i=this.tt(e);this.It(e,t)?i.qe(t,1):i.Qe(t),this.Je=this.Je.insert(t,this.dt(t).delete(e)),this.Je=this.Je.insert(t,this.dt(t).add(e)),r&&(this.ze=this.ze.insert(t,r))}removeTarget(e){this.Ge.delete(e)}ot(e){const t=this.tt(e).Le();return this.We.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}$e(e){this.tt(e).$e()}tt(e){let t=this.Ge.get(e);return t||(t=new km,this.Ge.set(e,t)),t}dt(e){let t=this.Je.get(e);return t||(t=new Ke(ue),this.Je=this.Je.insert(e,t)),t}Tt(e){let t=this.je.get(e);return t||(t=new Ke(ue),this.je=this.je.insert(e,t)),t}nt(e){const t=this.st(e)!==null;return t||Y("WatchChangeAggregator","Detected inactive target",e),t}st(e){const t=this.Ge.get(e);return t&&t.Oe?null:this.We.Et(e)}rt(e){this.Ge.set(e,new km),this.We.getRemoteKeysForTarget(e).forEach(t=>{this.Xe(e,t,null)})}It(e,t){return this.We.getRemoteKeysForTarget(e).has(t)}}function Qo(){return new We(ee.comparator)}function Cm(){return new We(ee.comparator)}const Gb={asc:"ASCENDING",desc:"DESCENDING"},Wb={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},Hb={and:"AND",or:"OR"};class Kb{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function Xl(n,e){return n.useProto3Json||so(e)?e:{value:e}}function Da(n,e){return n.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function iy(n,e){return n.useProto3Json?e.toBase64():e.toUint8Array()}function Qb(n,e){return Da(n,e.toTimestamp())}function Nt(n){return Ee(!!n,49232),ie.fromTimestamp(function(t){const r=sr(t);return new F(r.seconds,r.nanos)}(n))}function od(n,e){return Zl(n,e).canonicalString()}function Zl(n,e){const t=function(i){return new Re(["projects",i.projectId,"databases",i.database])}(n).child("documents");return e===void 0?t:t.child(e)}function sy(n){const e=Re.fromString(n);return Ee(dy(e),10190,{key:e.toString()}),e}function Na(n,e){return od(n.databaseId,e.path)}function vs(n,e){const t=sy(e);if(t.get(1)!==n.databaseId.projectId)throw new G(V.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+n.databaseId.projectId);if(t.get(3)!==n.databaseId.database)throw new G(V.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+n.databaseId.database);return new ee(ay(t))}function oy(n,e){return od(n.databaseId,e)}function Yb(n){const e=sy(n);return e.length===4?Re.emptyPath():ay(e)}function eu(n){return new Re(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function ay(n){return Ee(n.length>4&&n.get(4)==="documents",29091,{key:n.toString()}),n.popFirst(5)}function Pm(n,e,t){return{name:Na(n,e),fields:t.value.mapValue.fields}}function Jb(n,e){return"found"in e?function(r,i){Ee(!!i.found,43571);const s=vs(r,i.found.name),o=Nt(i.found.updateTime),a=i.found.createTime?Nt(i.found.createTime):ie.min(),c=new vt({mapValue:{fields:i.found.fields}});return Xe.newFoundDocument(s,o,a,c)}(n,e):"missing"in e?function(r,i){Ee(!!i.missing,3894),Ee(!!i.readTime,22933);const s=vs(r,i.missing),o=Nt(i.readTime);return Xe.newNoDocument(s,o)}(n,e):ne(7234,{result:e})}function Xb(n,e){let t;if("targetChange"in e){const r=function(u){return u==="NO_CHANGE"?0:u==="ADD"?1:u==="REMOVE"?2:u==="CURRENT"?3:u==="RESET"?4:ne(39313,{state:u})}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(u,d){return u.useProto3Json?(Ee(d===void 0||typeof d=="string",58123),rt.fromBase64String(d||"")):(Ee(d===void 0||d instanceof Buffer||d instanceof Uint8Array,16193),rt.fromUint8Array(d||new Uint8Array))}(n,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(u){const d=u.code===void 0?V.UNKNOWN:ty(u.code);return new G(d,u.message||"")}(o);t=new ry(r,i,s,a||null)}else if("documentChange"in e){const r=e.documentChange,i=vs(n,r.document.name),s=Nt(r.document.updateTime),o=r.document.createTime?Nt(r.document.createTime):ie.min(),a=new vt({mapValue:{fields:r.document.fields}}),c=Xe.newFoundDocument(i,s,o,a),u=r.targetIds||[],d=r.removedTargetIds||[];t=new da(u,d,c.key,c)}else if("documentDelete"in e){const r=e.documentDelete,i=vs(n,r.document),s=r.readTime?Nt(r.readTime):ie.min(),o=Xe.newNoDocument(i,s),a=r.removedTargetIds||[];t=new da([],a,o.key,o)}else if("documentRemove"in e){const r=e.documentRemove,i=vs(n,r.document),s=r.removedTargetIds||[];t=new da([],s,i,null)}else{if(!("filter"in e))return ne(11601,{At:e});{const r=e.filter,{count:i=0,unchangedNames:s}=r,o=new qb(i,s),a=r.targetId;t=new ny(a,o)}}return t}function cy(n,e){let t;if(e instanceof oo)t={update:Pm(n,e.key,e.value)};else if(e instanceof ao)t={delete:Na(n,e.key)};else if(e instanceof pr)t={update:Pm(n,e.key,e.data),updateMask:aS(e.fieldMask)};else{if(!(e instanceof Z_))return ne(16599,{Rt:e.type});t={verify:Na(n,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map(r=>function(s,o){const a=o.transform;if(a instanceof Bs)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(a instanceof $s)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:a.elements}};if(a instanceof qs)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:a.elements}};if(a instanceof Pa)return{fieldPath:o.field.canonicalString(),increment:a.Ee};throw ne(20930,{transform:o.transform})}(0,r))),e.precondition.isNone||(t.currentDocument=function(i,s){return s.updateTime!==void 0?{updateTime:Qb(i,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:ne(27497)}(n,e.precondition)),t}function Zb(n,e){return n&&n.length>0?(Ee(e!==void 0,14353),n.map(t=>function(i,s){let o=i.updateTime?Nt(i.updateTime):Nt(s);return o.isEqual(ie.min())&&(o=Nt(s)),new xb(o,i.transformResults||[])}(t,e))):[]}function eS(n,e){return{documents:[oy(n,e.path)]}}function tS(n,e){const t={structuredQuery:{}},r=e.path;let i;e.collectionGroup!==null?(i=r,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(i=r.popLast(),t.structuredQuery.from=[{collectionId:r.lastSegment()}]),t.parent=oy(n,i);const s=function(u){if(u.length!==0)return uy(Xt.create(u,"and"))}(e.filters);s&&(t.structuredQuery.where=s);const o=function(u){if(u.length!==0)return u.map(d=>function(m){return{field:ri(m.field),direction:iS(m.dir)}}(d))}(e.orderBy);o&&(t.structuredQuery.orderBy=o);const a=Xl(n,e.limit);return a!==null&&(t.structuredQuery.limit=a),e.startAt&&(t.structuredQuery.startAt=function(u){return{before:u.inclusive,values:u.position}}(e.startAt)),e.endAt&&(t.structuredQuery.endAt=function(u){return{before:!u.inclusive,values:u.position}}(e.endAt)),{Vt:t,parent:i}}function nS(n){let e=Yb(n.parent);const t=n.structuredQuery,r=t.from?t.from.length:0;let i=null;if(r>0){Ee(r===1,65062);const d=t.from[0];d.allDescendants?i=d.collectionId:e=e.child(d.collectionId)}let s=[];t.where&&(s=function(h){const m=ly(h);return m instanceof Xt&&M_(m)?m.getFilters():[m]}(t.where));let o=[];t.orderBy&&(o=function(h){return h.map(m=>function(w){return new Fs(ii(w.field),function(v){switch(v){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(w.direction))}(m))}(t.orderBy));let a=null;t.limit&&(a=function(h){let m;return m=typeof h=="object"?h.value:h,so(m)?null:m}(t.limit));let c=null;t.startAt&&(c=function(h){const m=!!h.before,_=h.values||[];return new ka(_,m)}(t.startAt));let u=null;return t.endAt&&(u=function(h){const m=!h.before,_=h.values||[];return new ka(_,m)}(t.endAt)),Ib(e,i,o,s,a,"F",c,u)}function rS(n,e){const t=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return ne(28987,{purpose:i})}}(e.purpose);return t==null?null:{"goog-listen-tags":t}}function ly(n){return n.unaryFilter!==void 0?function(t){switch(t.unaryFilter.op){case"IS_NAN":const r=ii(t.unaryFilter.field);return qe.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=ii(t.unaryFilter.field);return qe.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=ii(t.unaryFilter.field);return qe.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=ii(t.unaryFilter.field);return qe.create(o,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return ne(61313);default:return ne(60726)}}(n):n.fieldFilter!==void 0?function(t){return qe.create(ii(t.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return ne(58110);default:return ne(50506)}}(t.fieldFilter.op),t.fieldFilter.value)}(n):n.compositeFilter!==void 0?function(t){return Xt.create(t.compositeFilter.filters.map(r=>ly(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return ne(1026)}}(t.compositeFilter.op))}(n):ne(30097,{filter:n})}function iS(n){return Gb[n]}function sS(n){return Wb[n]}function oS(n){return Hb[n]}function ri(n){return{fieldPath:n.canonicalString()}}function ii(n){return Ze.fromServerFormat(n.fieldPath)}function uy(n){return n instanceof qe?function(t){if(t.op==="=="){if(_m(t.value))return{unaryFilter:{field:ri(t.field),op:"IS_NAN"}};if(gm(t.value))return{unaryFilter:{field:ri(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(_m(t.value))return{unaryFilter:{field:ri(t.field),op:"IS_NOT_NAN"}};if(gm(t.value))return{unaryFilter:{field:ri(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:ri(t.field),op:sS(t.op),value:t.value}}}(n):n instanceof Xt?function(t){const r=t.getFilters().map(i=>uy(i));return r.length===1?r[0]:{compositeFilter:{op:oS(t.op),filters:r}}}(n):ne(54877,{filter:n})}function aS(n){const e=[];return n.fields.forEach(t=>e.push(t.canonicalString())),{fieldPaths:e}}function dy(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kn{constructor(e,t,r,i,s=ie.min(),o=ie.min(),a=rt.EMPTY_BYTE_STRING,c=null){this.target=e,this.targetId=t,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=c}withSequenceNumber(e){return new Kn(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new Kn(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Kn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Kn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cS{constructor(e){this.gt=e}}function lS(n){const e=nS({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?Ca(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uS{constructor(){this.Dn=new dS}addToCollectionParentIndex(e,t){return this.Dn.add(t),$.resolve()}getCollectionParents(e,t){return $.resolve(this.Dn.getEntries(t))}addFieldIndex(e,t){return $.resolve()}deleteFieldIndex(e,t){return $.resolve()}deleteAllFieldIndexes(e){return $.resolve()}createTargetIndexes(e,t){return $.resolve()}getDocumentsMatchingTarget(e,t){return $.resolve(null)}getIndexType(e,t){return $.resolve(0)}getFieldIndexes(e,t){return $.resolve([])}getNextCollectionGroupToUpdate(e){return $.resolve(null)}getMinOffset(e,t){return $.resolve(ir.min())}getMinOffsetFromCollectionGroup(e,t){return $.resolve(ir.min())}updateCollectionGroup(e,t,r){return $.resolve()}updateIndexEntries(e,t){return $.resolve()}}class dS{constructor(){this.index={}}add(e){const t=e.lastSegment(),r=e.popLast(),i=this.index[t]||new Ke(Re.comparator),s=!i.has(r);return this.index[t]=i.add(r),s}has(e){const t=e.lastSegment(),r=e.popLast(),i=this.index[t];return i&&i.has(r)}getEntries(e){return(this.index[e]||new Ke(Re.comparator)).toArray()}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dm={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},hy=41943040;class Tt{static withCacheSize(e){return new Tt(e,Tt.DEFAULT_COLLECTION_PERCENTILE,Tt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Tt.DEFAULT_COLLECTION_PERCENTILE=10,Tt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Tt.DEFAULT=new Tt(hy,Tt.DEFAULT_COLLECTION_PERCENTILE,Tt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Tt.DISABLED=new Tt(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vi{constructor(e){this._r=e}next(){return this._r+=2,this._r}static ar(){return new vi(0)}static ur(){return new vi(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nm="LruGarbageCollector",hS=1048576;function Om([n,e],[t,r]){const i=ue(n,t);return i===0?ue(e,r):i}class fS{constructor(e){this.Tr=e,this.buffer=new Ke(Om),this.Ir=0}dr(){return++this.Ir}Er(e){const t=[e,this.dr()];if(this.buffer.size<this.Tr)this.buffer=this.buffer.add(t);else{const r=this.buffer.last();Om(t,r)<0&&(this.buffer=this.buffer.delete(r).add(t))}}get maxValue(){return this.buffer.last()[0]}}class mS{constructor(e,t,r){this.garbageCollector=e,this.asyncQueue=t,this.localStore=r,this.Ar=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Rr(6e4)}stop(){this.Ar&&(this.Ar.cancel(),this.Ar=null)}get started(){return this.Ar!==null}Rr(e){Y(Nm,`Garbage collection scheduled in ${e}ms`),this.Ar=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,()=>p(this,null,function*(){this.Ar=null;try{yield this.localStore.collectGarbage(this.garbageCollector)}catch(t){Ni(t)?Y(Nm,"Ignoring IndexedDB error during garbage collection: ",t):yield Di(t)}yield this.Rr(3e5)}))}}class pS{constructor(e,t){this.Vr=e,this.params=t}calculateTargetCount(e,t){return this.Vr.mr(e).next(r=>Math.floor(t/100*r))}nthSequenceNumber(e,t){if(t===0)return $.resolve(dc.ue);const r=new fS(t);return this.Vr.forEachTarget(e,i=>r.Er(i.sequenceNumber)).next(()=>this.Vr.gr(e,i=>r.Er(i))).next(()=>r.maxValue)}removeTargets(e,t,r){return this.Vr.removeTargets(e,t,r)}removeOrphanedDocuments(e,t){return this.Vr.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(Y("LruGarbageCollector","Garbage collection skipped; disabled"),$.resolve(Dm)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?(Y("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Dm):this.pr(e,t))}getCacheSize(e){return this.Vr.getCacheSize(e)}pr(e,t){let r,i,s,o,a,c,u;const d=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(h=>(h>this.params.maximumSequenceNumbersToCollect?(Y("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${h}`),i=this.params.maximumSequenceNumbersToCollect):i=h,o=Date.now(),this.nthSequenceNumber(e,i))).next(h=>(r=h,a=Date.now(),this.removeTargets(e,r,t))).next(h=>(s=h,c=Date.now(),this.removeOrphanedDocuments(e,r))).next(h=>(u=Date.now(),ti()<=de.DEBUG&&Y("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-d}ms
	Determined least recently used ${i} in `+(a-o)+`ms
	Removed ${s} targets in `+(c-a)+`ms
	Removed ${h} documents in `+(u-c)+`ms
Total Duration: ${u-d}ms`),$.resolve({didRun:!0,sequenceNumbersCollected:i,targetsRemoved:s,documentsRemoved:h})))}}function gS(n,e){return new pS(n,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _S{constructor(){this.changes=new zr(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,Xe.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const r=this.changes.get(t);return r!==void 0?$.resolve(r):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yS{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wS{constructor(e,t,r,i){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,t){let r=null;return this.documentOverlayCache.getOverlay(e,t).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,t))).next(i=>(r!==null&&Es(r.mutation,i,Pt.empty(),F.now()),i))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(r=>this.getLocalViewOfDocuments(e,r,he()).next(()=>r))}getLocalViewOfDocuments(e,t,r=he()){const i=Ar();return this.populateOverlays(e,i,t).next(()=>this.computeViews(e,t,i,r).next(s=>{let o=us();return s.forEach((a,c)=>{o=o.insert(a,c.overlayedDocument)}),o}))}getOverlayedDocuments(e,t){const r=Ar();return this.populateOverlays(e,r,t).next(()=>this.computeViews(e,t,r,he()))}populateOverlays(e,t,r){const i=[];return r.forEach(s=>{t.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((o,a)=>{t.set(o,a)})})}computeViews(e,t,r,i){let s=Vn();const o=ws(),a=function(){return ws()}();return t.forEach((c,u)=>{const d=r.get(u.key);i.has(u.key)&&(d===void 0||d.mutation instanceof pr)?s=s.insert(u.key,u):d!==void 0?(o.set(u.key,d.mutation.getFieldMask()),Es(d.mutation,u,d.mutation.getFieldMask(),F.now())):o.set(u.key,Pt.empty())}),this.recalculateAndSaveOverlays(e,s).next(c=>(c.forEach((u,d)=>o.set(u,d)),t.forEach((u,d)=>{var h;return a.set(u,new yS(d,(h=o.get(u))!==null&&h!==void 0?h:null))}),a))}recalculateAndSaveOverlays(e,t){const r=ws();let i=new We((o,a)=>o-a),s=he();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(o=>{for(const a of o)a.keys().forEach(c=>{const u=t.get(c);if(u===null)return;let d=r.get(c)||Pt.empty();d=a.applyToLocalView(u,d),r.set(c,d);const h=(i.get(a.batchId)||he()).add(c);i=i.insert(a.batchId,h)})}).next(()=>{const o=[],a=i.getReverseIterator();for(;a.hasNext();){const c=a.getNext(),u=c.key,d=c.value,h=G_();d.forEach(m=>{if(!s.has(m)){const _=J_(t.get(m),r.get(m));_!==null&&h.set(m,_),s=s.add(m)}}),o.push(this.documentOverlayCache.saveOverlays(e,u,h))}return $.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,t,r,i){return function(o){return ee.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):B_(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,r,i):this.getDocumentsMatchingCollectionQuery(e,t,r,i)}getNextDocuments(e,t,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,r,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,r.largestBatchId,i-s.size):$.resolve(Ar());let a=Ms,c=s;return o.next(u=>$.forEach(u,(d,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),s.get(d)?$.resolve():this.remoteDocumentCache.getEntry(e,d).next(m=>{c=c.insert(d,m)}))).next(()=>this.populateOverlays(e,u,s)).next(()=>this.computeViews(e,c,u,he())).next(d=>({batchId:a,changes:z_(d)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new ee(t)).next(r=>{let i=us();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,t,r,i){const s=t.collectionGroup;let o=us();return this.indexManager.getCollectionParents(e,s).next(a=>$.forEach(a,c=>{const u=function(h,m){return new jr(m,null,h.explicitOrderBy.slice(),h.filters.slice(),h.limit,h.limitType,h.startAt,h.endAt)}(t,c.child(s));return this.getDocumentsMatchingCollectionQuery(e,u,r,i).next(d=>{d.forEach((h,m)=>{o=o.insert(h,m)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,t,r,i){let s;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,r.largestBatchId).next(o=>(s=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,r,s,i))).next(o=>{s.forEach((c,u)=>{const d=u.getKey();o.get(d)===null&&(o=o.insert(d,Xe.newInvalidDocument(d)))});let a=us();return o.forEach((c,u)=>{const d=s.get(c);d!==void 0&&Es(d.mutation,u,Pt.empty(),F.now()),pc(t,u)&&(a=a.insert(c,u))}),a})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ES{constructor(e){this.serializer=e,this.Br=new Map,this.Lr=new Map}getBundleMetadata(e,t){return $.resolve(this.Br.get(t))}saveBundleMetadata(e,t){return this.Br.set(t.id,function(i){return{id:i.id,version:i.version,createTime:Nt(i.createTime)}}(t)),$.resolve()}getNamedQuery(e,t){return $.resolve(this.Lr.get(t))}saveNamedQuery(e,t){return this.Lr.set(t.name,function(i){return{name:i.name,query:lS(i.bundledQuery),readTime:Nt(i.readTime)}}(t)),$.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vS{constructor(){this.overlays=new We(ee.comparator),this.kr=new Map}getOverlay(e,t){return $.resolve(this.overlays.get(t))}getOverlays(e,t){const r=Ar();return $.forEach(t,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,t,r){return r.forEach((i,s)=>{this.wt(e,t,s)}),$.resolve()}removeOverlaysForBatchId(e,t,r){const i=this.kr.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.kr.delete(r)),$.resolve()}getOverlaysForCollection(e,t,r){const i=Ar(),s=t.length+1,o=new ee(t.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const c=a.getNext().value,u=c.getKey();if(!t.isPrefixOf(u.path))break;u.path.length===s&&c.largestBatchId>r&&i.set(c.getKey(),c)}return $.resolve(i)}getOverlaysForCollectionGroup(e,t,r,i){let s=new We((u,d)=>u-d);const o=this.overlays.getIterator();for(;o.hasNext();){const u=o.getNext().value;if(u.getKey().getCollectionGroup()===t&&u.largestBatchId>r){let d=s.get(u.largestBatchId);d===null&&(d=Ar(),s=s.insert(u.largestBatchId,d)),d.set(u.getKey(),u)}}const a=Ar(),c=s.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((u,d)=>a.set(u,d)),!(a.size()>=i)););return $.resolve(a)}wt(e,t,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.kr.get(i.largestBatchId).delete(r.key);this.kr.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new $b(t,r));let s=this.kr.get(t);s===void 0&&(s=he(),this.kr.set(t,s)),this.kr.set(t,s.add(r.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TS{constructor(){this.sessionToken=rt.EMPTY_BYTE_STRING}getSessionToken(e){return $.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,$.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ad{constructor(){this.qr=new Ke(Ye.Qr),this.$r=new Ke(Ye.Ur)}isEmpty(){return this.qr.isEmpty()}addReference(e,t){const r=new Ye(e,t);this.qr=this.qr.add(r),this.$r=this.$r.add(r)}Kr(e,t){e.forEach(r=>this.addReference(r,t))}removeReference(e,t){this.Wr(new Ye(e,t))}Gr(e,t){e.forEach(r=>this.removeReference(r,t))}zr(e){const t=new ee(new Re([])),r=new Ye(t,e),i=new Ye(t,e+1),s=[];return this.$r.forEachInRange([r,i],o=>{this.Wr(o),s.push(o.key)}),s}jr(){this.qr.forEach(e=>this.Wr(e))}Wr(e){this.qr=this.qr.delete(e),this.$r=this.$r.delete(e)}Jr(e){const t=new ee(new Re([])),r=new Ye(t,e),i=new Ye(t,e+1);let s=he();return this.$r.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(e){const t=new Ye(e,0),r=this.qr.firstAfterOrEqual(t);return r!==null&&e.isEqual(r.key)}}class Ye{constructor(e,t){this.key=e,this.Hr=t}static Qr(e,t){return ee.comparator(e.key,t.key)||ue(e.Hr,t.Hr)}static Ur(e,t){return ue(e.Hr,t.Hr)||ee.comparator(e.key,t.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class IS{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.er=1,this.Yr=new Ke(Ye.Qr)}checkEmpty(e){return $.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,r,i){const s=this.er;this.er++;const o=new Bb(s,t,r,i);this.mutationQueue.push(o);for(const a of i)this.Yr=this.Yr.add(new Ye(a.key,s)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return $.resolve(o)}lookupMutationBatch(e,t){return $.resolve(this.Zr(t))}getNextMutationBatchAfterBatchId(e,t){const r=t+1,i=this.Xr(r),s=i<0?0:i;return $.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return $.resolve(this.mutationQueue.length===0?Xu:this.er-1)}getAllMutationBatches(e){return $.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const r=new Ye(t,0),i=new Ye(t,Number.POSITIVE_INFINITY),s=[];return this.Yr.forEachInRange([r,i],o=>{const a=this.Zr(o.Hr);s.push(a)}),$.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,t){let r=new Ke(ue);return t.forEach(i=>{const s=new Ye(i,0),o=new Ye(i,Number.POSITIVE_INFINITY);this.Yr.forEachInRange([s,o],a=>{r=r.add(a.Hr)})}),$.resolve(this.ei(r))}getAllMutationBatchesAffectingQuery(e,t){const r=t.path,i=r.length+1;let s=r;ee.isDocumentKey(s)||(s=s.child(""));const o=new Ye(new ee(s),0);let a=new Ke(ue);return this.Yr.forEachWhile(c=>{const u=c.key.path;return!!r.isPrefixOf(u)&&(u.length===i&&(a=a.add(c.Hr)),!0)},o),$.resolve(this.ei(a))}ei(e){const t=[];return e.forEach(r=>{const i=this.Zr(r);i!==null&&t.push(i)}),t}removeMutationBatch(e,t){Ee(this.ti(t.batchId,"removed")===0,55003),this.mutationQueue.shift();let r=this.Yr;return $.forEach(t.mutations,i=>{const s=new Ye(i.key,t.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.Yr=r})}rr(e){}containsKey(e,t){const r=new Ye(t,0),i=this.Yr.firstAfterOrEqual(r);return $.resolve(t.isEqual(i&&i.key))}performConsistencyCheck(e){return $.resolve()}ti(e,t){return this.Xr(e)}Xr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Zr(e){const t=this.Xr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AS{constructor(e){this.ni=e,this.docs=function(){return new We(ee.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const r=t.key,i=this.docs.get(r),s=i?i.size:0,o=this.ni(t);return this.docs=this.docs.insert(r,{document:t.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const r=this.docs.get(t);return $.resolve(r?r.document.mutableCopy():Xe.newInvalidDocument(t))}getEntries(e,t){let r=Vn();return t.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():Xe.newInvalidDocument(i))}),$.resolve(r)}getDocumentsMatchingQuery(e,t,r,i){let s=Vn();const o=t.path,a=new ee(o.child("__id-9223372036854775808__")),c=this.docs.getIteratorFrom(a);for(;c.hasNext();){const{key:u,value:{document:d}}=c.getNext();if(!o.isPrefixOf(u.path))break;u.path.length>o.length+1||nb(tb(d),r)<=0||(i.has(d.key)||pc(t,d))&&(s=s.insert(d.key,d.mutableCopy()))}return $.resolve(s)}getAllFromCollectionGroup(e,t,r,i){ne(9500)}ri(e,t){return $.forEach(this.docs,r=>t(r))}newChangeBuffer(e){return new RS(this)}getSize(e){return $.resolve(this.size)}}class RS extends _S{constructor(e){super(),this.Or=e}applyChanges(e){const t=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?t.push(this.Or.addEntry(e,i)):this.Or.removeEntry(r)}),$.waitFor(t)}getFromCache(e,t){return this.Or.getEntry(e,t)}getAllFromCache(e,t){return this.Or.getEntries(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bS{constructor(e){this.persistence=e,this.ii=new zr(t=>td(t),nd),this.lastRemoteSnapshotVersion=ie.min(),this.highestTargetId=0,this.si=0,this.oi=new ad,this.targetCount=0,this._i=vi.ar()}forEachTarget(e,t){return this.ii.forEach((r,i)=>t(i)),$.resolve()}getLastRemoteSnapshotVersion(e){return $.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return $.resolve(this.si)}allocateTargetId(e){return this.highestTargetId=this._i.next(),$.resolve(this.highestTargetId)}setTargetsMetadata(e,t,r){return r&&(this.lastRemoteSnapshotVersion=r),t>this.si&&(this.si=t),$.resolve()}hr(e){this.ii.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this._i=new vi(t),this.highestTargetId=t),e.sequenceNumber>this.si&&(this.si=e.sequenceNumber)}addTargetData(e,t){return this.hr(t),this.targetCount+=1,$.resolve()}updateTargetData(e,t){return this.hr(t),$.resolve()}removeTargetData(e,t){return this.ii.delete(t.target),this.oi.zr(t.targetId),this.targetCount-=1,$.resolve()}removeTargets(e,t,r){let i=0;const s=[];return this.ii.forEach((o,a)=>{a.sequenceNumber<=t&&r.get(a.targetId)===null&&(this.ii.delete(o),s.push(this.removeMatchingKeysForTargetId(e,a.targetId)),i++)}),$.waitFor(s).next(()=>i)}getTargetCount(e){return $.resolve(this.targetCount)}getTargetData(e,t){const r=this.ii.get(t)||null;return $.resolve(r)}addMatchingKeys(e,t,r){return this.oi.Kr(t,r),$.resolve()}removeMatchingKeys(e,t,r){this.oi.Gr(t,r);const i=this.persistence.referenceDelegate,s=[];return i&&t.forEach(o=>{s.push(i.markPotentiallyOrphaned(e,o))}),$.waitFor(s)}removeMatchingKeysForTargetId(e,t){return this.oi.zr(t),$.resolve()}getMatchingKeysForTargetId(e,t){const r=this.oi.Jr(t);return $.resolve(r)}containsKey(e,t){return $.resolve(this.oi.containsKey(t))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fy{constructor(e,t){this.ai={},this.overlays={},this.ui=new dc(0),this.ci=!1,this.ci=!0,this.li=new TS,this.referenceDelegate=e(this),this.hi=new bS(this),this.indexManager=new uS,this.remoteDocumentCache=function(i){return new AS(i)}(r=>this.referenceDelegate.Pi(r)),this.serializer=new cS(t),this.Ti=new ES(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.ci=!1,Promise.resolve()}get started(){return this.ci}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new vS,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let r=this.ai[e.toKey()];return r||(r=new IS(t,this.referenceDelegate),this.ai[e.toKey()]=r),r}getGlobalsCache(){return this.li}getTargetCache(){return this.hi}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ti}runTransaction(e,t,r){Y("MemoryPersistence","Starting transaction:",e);const i=new SS(this.ui.next());return this.referenceDelegate.Ii(),r(i).next(s=>this.referenceDelegate.di(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Ei(e,t){return $.or(Object.values(this.ai).map(r=>()=>r.containsKey(e,t)))}}class SS extends ib{constructor(e){super(),this.currentSequenceNumber=e}}class cd{constructor(e){this.persistence=e,this.Ai=new ad,this.Ri=null}static Vi(e){return new cd(e)}get mi(){if(this.Ri)return this.Ri;throw ne(60996)}addReference(e,t,r){return this.Ai.addReference(r,t),this.mi.delete(r.toString()),$.resolve()}removeReference(e,t,r){return this.Ai.removeReference(r,t),this.mi.add(r.toString()),$.resolve()}markPotentiallyOrphaned(e,t){return this.mi.add(t.toString()),$.resolve()}removeTarget(e,t){this.Ai.zr(t.targetId).forEach(i=>this.mi.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,t.targetId).next(i=>{i.forEach(s=>this.mi.add(s.toString()))}).next(()=>r.removeTargetData(e,t))}Ii(){this.Ri=new Set}di(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return $.forEach(this.mi,r=>{const i=ee.fromPath(r);return this.fi(e,i).next(s=>{s||t.removeEntry(i,ie.min())})}).next(()=>(this.Ri=null,t.apply(e)))}updateLimboDocument(e,t){return this.fi(e,t).next(r=>{r?this.mi.delete(t.toString()):this.mi.add(t.toString())})}Pi(e){return 0}fi(e,t){return $.or([()=>$.resolve(this.Ai.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Ei(e,t)])}}class Oa{constructor(e,t){this.persistence=e,this.gi=new zr(r=>ab(r.path),(r,i)=>r.isEqual(i)),this.garbageCollector=gS(this,t)}static Vi(e,t){return new Oa(e,t)}Ii(){}di(e){return $.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}mr(e){const t=this.yr(e);return this.persistence.getTargetCache().getTargetCount(e).next(r=>t.next(i=>r+i))}yr(e){let t=0;return this.gr(e,r=>{t++}).next(()=>t)}gr(e,t){return $.forEach(this.gi,(r,i)=>this.Sr(e,r,i).next(s=>s?$.resolve():t(i)))}removeTargets(e,t,r){return this.persistence.getTargetCache().removeTargets(e,t,r)}removeOrphanedDocuments(e,t){let r=0;const i=this.persistence.getRemoteDocumentCache(),s=i.newChangeBuffer();return i.ri(e,o=>this.Sr(e,o,t).next(a=>{a||(r++,s.removeEntry(o,ie.min()))})).next(()=>s.apply(e)).next(()=>r)}markPotentiallyOrphaned(e,t){return this.gi.set(t,e.currentSequenceNumber),$.resolve()}removeTarget(e,t){const r=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,t,r){return this.gi.set(r,e.currentSequenceNumber),$.resolve()}removeReference(e,t,r){return this.gi.set(r,e.currentSequenceNumber),$.resolve()}updateLimboDocument(e,t){return this.gi.set(t,e.currentSequenceNumber),$.resolve()}Pi(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=ca(e.data.value)),t}Sr(e,t,r){return $.or([()=>this.persistence.Ei(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const i=this.gi.get(t);return $.resolve(i!==void 0&&i>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ld{constructor(e,t,r,i){this.targetId=e,this.fromCache=t,this.Is=r,this.ds=i}static Es(e,t){let r=he(),i=he();for(const s of t.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new ld(e,t.fromCache,r,i)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kS{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CS{constructor(){this.As=!1,this.Rs=!1,this.Vs=100,this.fs=function(){return gT()?8:sb(gt())>0?6:4}()}initialize(e,t){this.gs=e,this.indexManager=t,this.As=!0}getDocumentsMatchingQuery(e,t,r,i){const s={result:null};return this.ps(e,t).next(o=>{s.result=o}).next(()=>{if(!s.result)return this.ys(e,t,i,r).next(o=>{s.result=o})}).next(()=>{if(s.result)return;const o=new kS;return this.ws(e,t,o).next(a=>{if(s.result=a,this.Rs)return this.Ss(e,t,o,a.size)})}).next(()=>s.result)}Ss(e,t,r,i){return r.documentReadCount<this.Vs?(ti()<=de.DEBUG&&Y("QueryEngine","SDK will not create cache indexes for query:",ni(t),"since it only creates cache indexes for collection contains","more than or equal to",this.Vs,"documents"),$.resolve()):(ti()<=de.DEBUG&&Y("QueryEngine","Query:",ni(t),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.fs*i?(ti()<=de.DEBUG&&Y("QueryEngine","The SDK decides to create cache indexes for query:",ni(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,ln(t))):$.resolve())}ps(e,t){if(vm(t))return $.resolve(null);let r=ln(t);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(t.limit!==null&&i===1&&(t=Ca(t,null,"F"),r=ln(t)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{const o=he(...s);return this.gs.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,r).next(c=>{const u=this.bs(t,a);return this.Ds(t,u,o,c.readTime)?this.ps(e,Ca(t,null,"F")):this.vs(e,u,t,c)}))})))}ys(e,t,r,i){return vm(t)||i.isEqual(ie.min())?$.resolve(null):this.gs.getDocuments(e,r).next(s=>{const o=this.bs(t,s);return this.Ds(t,o,r,i)?$.resolve(null):(ti()<=de.DEBUG&&Y("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),ni(t)),this.vs(e,o,t,eb(i,Ms)).next(a=>a))})}bs(e,t){let r=new Ke(q_(e));return t.forEach((i,s)=>{pc(e,s)&&(r=r.add(s))}),r}Ds(e,t,r,i){if(e.limit===null)return!1;if(r.size!==t.size)return!0;const s=e.limitType==="F"?t.last():t.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}ws(e,t,r){return ti()<=de.DEBUG&&Y("QueryEngine","Using full collection scan to execute query:",ni(t)),this.gs.getDocumentsMatchingQuery(e,t,ir.min(),r)}vs(e,t,r,i){return this.gs.getDocumentsMatchingQuery(e,r,i).next(s=>(t.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ud="LocalStore",PS=3e8;class DS{constructor(e,t,r,i){this.persistence=e,this.Cs=t,this.serializer=i,this.Fs=new We(ue),this.Ms=new zr(s=>td(s),nd),this.xs=new Map,this.Os=e.getRemoteDocumentCache(),this.hi=e.getTargetCache(),this.Ti=e.getBundleCache(),this.Ns(r)}Ns(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new wS(this.Os,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Os.setIndexManager(this.indexManager),this.Cs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.Fs))}}function NS(n,e,t,r){return new DS(n,e,t,r)}function my(n,e){return p(this,null,function*(){const t=ae(n);return yield t.persistence.runTransaction("Handle user change","readonly",r=>{let i;return t.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,t.Ns(e),t.mutationQueue.getAllMutationBatches(r))).next(s=>{const o=[],a=[];let c=he();for(const u of i){o.push(u.batchId);for(const d of u.mutations)c=c.add(d.key)}for(const u of s){a.push(u.batchId);for(const d of u.mutations)c=c.add(d.key)}return t.localDocuments.getDocuments(r,c).next(u=>({Bs:u,removedBatchIds:o,addedBatchIds:a}))})})})}function OS(n,e){const t=ae(n);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),s=t.Os.newChangeBuffer({trackRemovals:!0});return function(a,c,u,d){const h=u.batch,m=h.keys();let _=$.resolve();return m.forEach(w=>{_=_.next(()=>d.getEntry(c,w)).next(E=>{const v=u.docVersions.get(w);Ee(v!==null,48541),E.version.compareTo(v)<0&&(h.applyToRemoteDocument(E,u),E.isValidDocument()&&(E.setReadTime(u.commitVersion),d.addEntry(E)))})}),_.next(()=>a.mutationQueue.removeMutationBatch(c,h))}(t,r,e,s).next(()=>s.apply(r)).next(()=>t.mutationQueue.performConsistencyCheck(r)).next(()=>t.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(a){let c=he();for(let u=0;u<a.mutationResults.length;++u)a.mutationResults[u].transformResults.length>0&&(c=c.add(a.batch.mutations[u].key));return c}(e))).next(()=>t.localDocuments.getDocuments(r,i))})}function py(n){const e=ae(n);return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.hi.getLastRemoteSnapshotVersion(t))}function LS(n,e){const t=ae(n),r=e.snapshotVersion;let i=t.Fs;return t.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=t.Os.newChangeBuffer({trackRemovals:!0});i=t.Fs;const a=[];e.targetChanges.forEach((d,h)=>{const m=i.get(h);if(!m)return;a.push(t.hi.removeMatchingKeys(s,d.removedDocuments,h).next(()=>t.hi.addMatchingKeys(s,d.addedDocuments,h)));let _=m.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.get(h)!==null?_=_.withResumeToken(rt.EMPTY_BYTE_STRING,ie.min()).withLastLimboFreeSnapshotVersion(ie.min()):d.resumeToken.approximateByteSize()>0&&(_=_.withResumeToken(d.resumeToken,r)),i=i.insert(h,_),function(E,v,C){return E.resumeToken.approximateByteSize()===0||v.snapshotVersion.toMicroseconds()-E.snapshotVersion.toMicroseconds()>=PS?!0:C.addedDocuments.size+C.modifiedDocuments.size+C.removedDocuments.size>0}(m,_,d)&&a.push(t.hi.updateTargetData(s,_))});let c=Vn(),u=he();if(e.documentUpdates.forEach(d=>{e.resolvedLimboDocuments.has(d)&&a.push(t.persistence.referenceDelegate.updateLimboDocument(s,d))}),a.push(VS(s,o,e.documentUpdates).next(d=>{c=d.Ls,u=d.ks})),!r.isEqual(ie.min())){const d=t.hi.getLastRemoteSnapshotVersion(s).next(h=>t.hi.setTargetsMetadata(s,s.currentSequenceNumber,r));a.push(d)}return $.waitFor(a).next(()=>o.apply(s)).next(()=>t.localDocuments.getLocalViewOfDocuments(s,c,u)).next(()=>c)}).then(s=>(t.Fs=i,s))}function VS(n,e,t){let r=he(),i=he();return t.forEach(s=>r=r.add(s)),e.getEntries(n,r).next(s=>{let o=Vn();return t.forEach((a,c)=>{const u=s.get(a);c.isFoundDocument()!==u.isFoundDocument()&&(i=i.add(a)),c.isNoDocument()&&c.version.isEqual(ie.min())?(e.removeEntry(a,c.readTime),o=o.insert(a,c)):!u.isValidDocument()||c.version.compareTo(u.version)>0||c.version.compareTo(u.version)===0&&u.hasPendingWrites?(e.addEntry(c),o=o.insert(a,c)):Y(ud,"Ignoring outdated watch update for ",a,". Current version:",u.version," Watch version:",c.version)}),{Ls:o,ks:i}})}function MS(n,e){const t=ae(n);return t.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=Xu),t.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function xS(n,e){const t=ae(n);return t.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return t.hi.getTargetData(r,e).next(s=>s?(i=s,$.resolve(i)):t.hi.allocateTargetId(r).next(o=>(i=new Kn(e,o,"TargetPurposeListen",r.currentSequenceNumber),t.hi.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=t.Fs.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(t.Fs=t.Fs.insert(r.targetId,r),t.Ms.set(e,r.targetId)),r})}function tu(n,e,t){return p(this,null,function*(){const r=ae(n),i=r.Fs.get(e),s=t?"readwrite":"readwrite-primary";try{t||(yield r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i)))}catch(o){if(!Ni(o))throw o;Y(ud,`Failed to update sequence numbers for target ${e}: ${o}`)}r.Fs=r.Fs.remove(e),r.Ms.delete(i.target)})}function Lm(n,e,t){const r=ae(n);let i=ie.min(),s=he();return r.persistence.runTransaction("Execute query","readwrite",o=>function(c,u,d){const h=ae(c),m=h.Ms.get(d);return m!==void 0?$.resolve(h.Fs.get(m)):h.hi.getTargetData(u,d)}(r,o,ln(e)).next(a=>{if(a)return i=a.lastLimboFreeSnapshotVersion,r.hi.getMatchingKeysForTargetId(o,a.targetId).next(c=>{s=c})}).next(()=>r.Cs.getDocumentsMatchingQuery(o,e,t?i:ie.min(),t?s:he())).next(a=>(US(r,Rb(e),a),{documents:a,qs:s})))}function US(n,e,t){let r=n.xs.get(e)||ie.min();t.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),n.xs.set(e,r)}class Vm{constructor(){this.activeTargetIds=Db()}Gs(e){this.activeTargetIds=this.activeTargetIds.add(e)}zs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Ws(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class FS{constructor(){this.Fo=new Vm,this.Mo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,r){}addLocalQueryTarget(e,t=!0){return t&&this.Fo.Gs(e),this.Mo[e]||"not-current"}updateQueryState(e,t,r){this.Mo[e]=t}removeLocalQueryTarget(e){this.Fo.zs(e)}isLocalQueryTarget(e){return this.Fo.activeTargetIds.has(e)}clearQueryState(e){delete this.Mo[e]}getAllActiveQueryTargets(){return this.Fo.activeTargetIds}isActiveQueryTarget(e){return this.Fo.activeTargetIds.has(e)}start(){return this.Fo=new Vm,Promise.resolve()}handleUserChange(e,t,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BS{xo(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mm="ConnectivityMonitor";class xm{constructor(){this.Oo=()=>this.No(),this.Bo=()=>this.Lo(),this.ko=[],this.qo()}xo(e){this.ko.push(e)}shutdown(){window.removeEventListener("online",this.Oo),window.removeEventListener("offline",this.Bo)}qo(){window.addEventListener("online",this.Oo),window.addEventListener("offline",this.Bo)}No(){Y(Mm,"Network connectivity changed: AVAILABLE");for(const e of this.ko)e(0)}Lo(){Y(Mm,"Network connectivity changed: UNAVAILABLE");for(const e of this.ko)e(1)}static C(){return typeof window!="undefined"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Yo=null;function nu(){return Yo===null?Yo=function(){return 268435456+Math.round(2147483648*Math.random())}():Yo++,"0x"+Yo.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _l="RestConnection",$S={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class qS{get Qo(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.$o=t+"://"+e.host,this.Uo=`projects/${r}/databases/${i}`,this.Ko=this.databaseId.database===ba?`project_id=${r}`:`project_id=${r}&database_id=${i}`}Wo(e,t,r,i,s){const o=nu(),a=this.Go(e,t.toUriEncodedString());Y(_l,`Sending RPC '${e}' ${o}:`,a,r);const c={"google-cloud-resource-prefix":this.Uo,"x-goog-request-params":this.Ko};this.zo(c,i,s);const{host:u}=new URL(a),d=fn(u);return this.jo(e,a,c,r,d).then(h=>(Y(_l,`Received RPC '${e}' ${o}: `,h),h),h=>{throw Ln(_l,`RPC '${e}' ${o} failed with error: `,h,"url: ",a,"request:",r),h})}Jo(e,t,r,i,s,o){return this.Wo(e,t,r,i,s)}zo(e,t,r){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Pi}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach((i,s)=>e[s]=i),r&&r.headers.forEach((i,s)=>e[s]=i)}Go(e,t){const r=$S[e];return`${this.$o}/v1/${t}:${r}`}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jS{constructor(e){this.Ho=e.Ho,this.Yo=e.Yo}Zo(e){this.Xo=e}e_(e){this.t_=e}n_(e){this.r_=e}onMessage(e){this.i_=e}close(){this.Yo()}send(e){this.Ho(e)}s_(){this.Xo()}o_(){this.t_()}__(e){this.r_(e)}a_(e){this.i_(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ut="WebChannelConnection";class zS extends qS{constructor(e){super(e),this.u_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}jo(e,t,r,i,s){const o=nu();return new Promise((a,c)=>{const u=new h_;u.setWithCredentials(!0),u.listenOnce(f_.COMPLETE,()=>{try{switch(u.getLastErrorCode()){case aa.NO_ERROR:const h=u.getResponseJson();Y(ut,`XHR for RPC '${e}' ${o} received:`,JSON.stringify(h)),a(h);break;case aa.TIMEOUT:Y(ut,`RPC '${e}' ${o} timed out`),c(new G(V.DEADLINE_EXCEEDED,"Request time out"));break;case aa.HTTP_ERROR:const m=u.getStatus();if(Y(ut,`RPC '${e}' ${o} failed with status:`,m,"response text:",u.getResponseText()),m>0){let _=u.getResponseJson();Array.isArray(_)&&(_=_[0]);const w=_==null?void 0:_.error;if(w&&w.status&&w.message){const E=function(C){const O=C.toLowerCase().replace(/_/g,"-");return Object.values(V).indexOf(O)>=0?O:V.UNKNOWN}(w.status);c(new G(E,w.message))}else c(new G(V.UNKNOWN,"Server responded with status "+u.getStatus()))}else c(new G(V.UNAVAILABLE,"Connection failed."));break;default:ne(9055,{c_:e,streamId:o,l_:u.getLastErrorCode(),h_:u.getLastError()})}}finally{Y(ut,`RPC '${e}' ${o} completed.`)}});const d=JSON.stringify(i);Y(ut,`RPC '${e}' ${o} sending request:`,i),u.send(t,"POST",d,r,15)})}P_(e,t,r){const i=nu(),s=[this.$o,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=g_(),a=p_(),c={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},u=this.longPollingOptions.timeoutSeconds;u!==void 0&&(c.longPollingTimeout=Math.round(1e3*u)),this.useFetchStreams&&(c.useFetchStreams=!0),this.zo(c.initMessageHeaders,t,r),c.encodeInitMessageHeaders=!0;const d=s.join("");Y(ut,`Creating RPC '${e}' stream ${i}: ${d}`,c);const h=o.createWebChannel(d,c);this.T_(h);let m=!1,_=!1;const w=new jS({Ho:v=>{_?Y(ut,`Not sending because RPC '${e}' stream ${i} is closed:`,v):(m||(Y(ut,`Opening RPC '${e}' stream ${i} transport.`),h.open(),m=!0),Y(ut,`RPC '${e}' stream ${i} sending:`,v),h.send(v))},Yo:()=>h.close()}),E=(v,C,O)=>{v.listen(C,U=>{try{O(U)}catch(M){setTimeout(()=>{throw M},0)}})};return E(h,ls.EventType.OPEN,()=>{_||(Y(ut,`RPC '${e}' stream ${i} transport opened.`),w.s_())}),E(h,ls.EventType.CLOSE,()=>{_||(_=!0,Y(ut,`RPC '${e}' stream ${i} transport closed`),w.__(),this.I_(h))}),E(h,ls.EventType.ERROR,v=>{_||(_=!0,Ln(ut,`RPC '${e}' stream ${i} transport errored. Name:`,v.name,"Message:",v.message),w.__(new G(V.UNAVAILABLE,"The operation could not be completed")))}),E(h,ls.EventType.MESSAGE,v=>{var C;if(!_){const O=v.data[0];Ee(!!O,16349);const U=O,M=(U==null?void 0:U.error)||((C=U[0])===null||C===void 0?void 0:C.error);if(M){Y(ut,`RPC '${e}' stream ${i} received error:`,M);const Z=M.status;let K=function(I){const b=$e[I];if(b!==void 0)return ty(b)}(Z),R=M.message;K===void 0&&(K=V.INTERNAL,R="Unknown error status: "+Z+" with message "+M.message),_=!0,w.__(new G(K,R)),h.close()}else Y(ut,`RPC '${e}' stream ${i} received:`,O),w.a_(O)}}),E(a,m_.STAT_EVENT,v=>{v.stat===zl.PROXY?Y(ut,`RPC '${e}' stream ${i} detected buffering proxy`):v.stat===zl.NOPROXY&&Y(ut,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{w.o_()},0),w}terminate(){this.u_.forEach(e=>e.close()),this.u_=[]}T_(e){this.u_.push(e)}I_(e){this.u_=this.u_.filter(t=>t===e)}}function yl(){return typeof document!="undefined"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wc(n){return new Kb(n,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dd{constructor(e,t,r=1e3,i=1.5,s=6e4){this.Fi=e,this.timerId=t,this.d_=r,this.E_=i,this.A_=s,this.R_=0,this.V_=null,this.m_=Date.now(),this.reset()}reset(){this.R_=0}f_(){this.R_=this.A_}g_(e){this.cancel();const t=Math.floor(this.R_+this.p_()),r=Math.max(0,Date.now()-this.m_),i=Math.max(0,t-r);i>0&&Y("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.R_} ms, delay with jitter: ${t} ms, last attempt: ${r} ms ago)`),this.V_=this.Fi.enqueueAfterDelay(this.timerId,i,()=>(this.m_=Date.now(),e())),this.R_*=this.E_,this.R_<this.d_&&(this.R_=this.d_),this.R_>this.A_&&(this.R_=this.A_)}y_(){this.V_!==null&&(this.V_.skipDelay(),this.V_=null)}cancel(){this.V_!==null&&(this.V_.cancel(),this.V_=null)}p_(){return(Math.random()-.5)*this.R_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Um="PersistentStream";class gy{constructor(e,t,r,i,s,o,a,c){this.Fi=e,this.w_=r,this.S_=i,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=c,this.state=0,this.b_=0,this.D_=null,this.v_=null,this.stream=null,this.C_=0,this.F_=new dd(e,t)}M_(){return this.state===1||this.state===5||this.x_()}x_(){return this.state===2||this.state===3}start(){this.C_=0,this.state!==4?this.auth():this.O_()}stop(){return p(this,null,function*(){this.M_()&&(yield this.close(0))})}N_(){this.state=0,this.F_.reset()}B_(){this.x_()&&this.D_===null&&(this.D_=this.Fi.enqueueAfterDelay(this.w_,6e4,()=>this.L_()))}k_(e){this.q_(),this.stream.send(e)}L_(){return p(this,null,function*(){if(this.x_())return this.close(0)})}q_(){this.D_&&(this.D_.cancel(),this.D_=null)}Q_(){this.v_&&(this.v_.cancel(),this.v_=null)}close(e,t){return p(this,null,function*(){this.q_(),this.Q_(),this.F_.cancel(),this.b_++,e!==4?this.F_.reset():t&&t.code===V.RESOURCE_EXHAUSTED?(On(t.toString()),On("Using maximum backoff delay to prevent overloading the backend."),this.F_.f_()):t&&t.code===V.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.U_(),this.stream.close(),this.stream=null),this.state=e,yield this.listener.n_(t)})}U_(){}auth(){this.state=1;const e=this.K_(this.b_),t=this.b_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.b_===t&&this.W_(r,i)},r=>{e(()=>{const i=new G(V.UNKNOWN,"Fetching auth token failed: "+r.message);return this.G_(i)})})}W_(e,t){const r=this.K_(this.b_);this.stream=this.z_(e,t),this.stream.Zo(()=>{r(()=>this.listener.Zo())}),this.stream.e_(()=>{r(()=>(this.state=2,this.v_=this.Fi.enqueueAfterDelay(this.S_,1e4,()=>(this.x_()&&(this.state=3),Promise.resolve())),this.listener.e_()))}),this.stream.n_(i=>{r(()=>this.G_(i))}),this.stream.onMessage(i=>{r(()=>++this.C_==1?this.j_(i):this.onNext(i))})}O_(){this.state=5,this.F_.g_(()=>p(this,null,function*(){this.state=0,this.start()}))}G_(e){return Y(Um,`close with error: ${e}`),this.stream=null,this.close(4,e)}K_(e){return t=>{this.Fi.enqueueAndForget(()=>this.b_===e?t():(Y(Um,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class GS extends gy{constructor(e,t,r,i,s,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,r,i,o),this.serializer=s}z_(e,t){return this.connection.P_("Listen",e,t)}j_(e){return this.onNext(e)}onNext(e){this.F_.reset();const t=Xb(this.serializer,e),r=function(s){if(!("targetChange"in s))return ie.min();const o=s.targetChange;return o.targetIds&&o.targetIds.length?ie.min():o.readTime?Nt(o.readTime):ie.min()}(e);return this.listener.J_(t,r)}H_(e){const t={};t.database=eu(this.serializer),t.addTarget=function(s,o){let a;const c=o.target;if(a=Yl(c)?{documents:eS(s,c)}:{query:tS(s,c).Vt},a.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){a.resumeToken=iy(s,o.resumeToken);const u=Xl(s,o.expectedCount);u!==null&&(a.expectedCount=u)}else if(o.snapshotVersion.compareTo(ie.min())>0){a.readTime=Da(s,o.snapshotVersion.toTimestamp());const u=Xl(s,o.expectedCount);u!==null&&(a.expectedCount=u)}return a}(this.serializer,e);const r=rS(this.serializer,e);r&&(t.labels=r),this.k_(t)}Y_(e){const t={};t.database=eu(this.serializer),t.removeTarget=e,this.k_(t)}}class WS extends gy{constructor(e,t,r,i,s,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,r,i,o),this.serializer=s}get Z_(){return this.C_>0}start(){this.lastStreamToken=void 0,super.start()}U_(){this.Z_&&this.X_([])}z_(e,t){return this.connection.P_("Write",e,t)}j_(e){return Ee(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,Ee(!e.writeResults||e.writeResults.length===0,55816),this.listener.ea()}onNext(e){Ee(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.F_.reset();const t=Zb(e.writeResults,e.commitTime),r=Nt(e.commitTime);return this.listener.ta(r,t)}na(){const e={};e.database=eu(this.serializer),this.k_(e)}X_(e){const t={streamToken:this.lastStreamToken,writes:e.map(r=>cy(this.serializer,r))};this.k_(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HS{}class KS extends HS{constructor(e,t,r,i){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=r,this.serializer=i,this.ra=!1}ia(){if(this.ra)throw new G(V.FAILED_PRECONDITION,"The client has already been terminated.")}Wo(e,t,r,i){return this.ia(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.Wo(e,Zl(t,r),i,s,o)).catch(s=>{throw s.name==="FirebaseError"?(s.code===V.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new G(V.UNKNOWN,s.toString())})}Jo(e,t,r,i,s){return this.ia(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,a])=>this.connection.Jo(e,Zl(t,r),i,o,a,s)).catch(o=>{throw o.name==="FirebaseError"?(o.code===V.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new G(V.UNKNOWN,o.toString())})}terminate(){this.ra=!0,this.connection.terminate()}}class QS{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.sa=0,this.oa=null,this._a=!0}aa(){this.sa===0&&(this.ua("Unknown"),this.oa=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.oa=null,this.ca("Backend didn't respond within 10 seconds."),this.ua("Offline"),Promise.resolve())))}la(e){this.state==="Online"?this.ua("Unknown"):(this.sa++,this.sa>=1&&(this.ha(),this.ca(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ua("Offline")))}set(e){this.ha(),this.sa=0,e==="Online"&&(this._a=!1),this.ua(e)}ua(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}ca(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this._a?(On(t),this._a=!1):Y("OnlineStateTracker",t)}ha(){this.oa!==null&&(this.oa.cancel(),this.oa=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nr="RemoteStore";class YS{constructor(e,t,r,i,s){this.localStore=e,this.datastore=t,this.asyncQueue=r,this.remoteSyncer={},this.Pa=[],this.Ta=new Map,this.Ia=new Set,this.da=[],this.Ea=s,this.Ea.xo(o=>{r.enqueueAndForget(()=>p(this,null,function*(){Gr(this)&&(Y(Nr,"Restarting streams for network reachability change."),yield function(c){return p(this,null,function*(){const u=ae(c);u.Ia.add(4),yield lo(u),u.Aa.set("Unknown"),u.Ia.delete(4),yield Ec(u)})}(this))}))}),this.Aa=new QS(r,i)}}function Ec(n){return p(this,null,function*(){if(Gr(n))for(const e of n.da)yield e(!0)})}function lo(n){return p(this,null,function*(){for(const e of n.da)yield e(!1)})}function _y(n,e){const t=ae(n);t.Ta.has(e.targetId)||(t.Ta.set(e.targetId,e),pd(t)?md(t):Oi(t).x_()&&fd(t,e))}function hd(n,e){const t=ae(n),r=Oi(t);t.Ta.delete(e),r.x_()&&yy(t,e),t.Ta.size===0&&(r.x_()?r.B_():Gr(t)&&t.Aa.set("Unknown"))}function fd(n,e){if(n.Ra.$e(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(ie.min())>0){const t=n.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}Oi(n).H_(e)}function yy(n,e){n.Ra.$e(e),Oi(n).Y_(e)}function md(n){n.Ra=new zb({getRemoteKeysForTarget:e=>n.remoteSyncer.getRemoteKeysForTarget(e),Et:e=>n.Ta.get(e)||null,lt:()=>n.datastore.serializer.databaseId}),Oi(n).start(),n.Aa.aa()}function pd(n){return Gr(n)&&!Oi(n).M_()&&n.Ta.size>0}function Gr(n){return ae(n).Ia.size===0}function wy(n){n.Ra=void 0}function JS(n){return p(this,null,function*(){n.Aa.set("Online")})}function XS(n){return p(this,null,function*(){n.Ta.forEach((e,t)=>{fd(n,e)})})}function ZS(n,e){return p(this,null,function*(){wy(n),pd(n)?(n.Aa.la(e),md(n)):n.Aa.set("Unknown")})}function e0(n,e,t){return p(this,null,function*(){if(n.Aa.set("Online"),e instanceof ry&&e.state===2&&e.cause)try{yield function(i,s){return p(this,null,function*(){const o=s.cause;for(const a of s.targetIds)i.Ta.has(a)&&(yield i.remoteSyncer.rejectListen(a,o),i.Ta.delete(a),i.Ra.removeTarget(a))})}(n,e)}catch(r){Y(Nr,"Failed to remove targets %s: %s ",e.targetIds.join(","),r),yield La(n,r)}else if(e instanceof da?n.Ra.Ye(e):e instanceof ny?n.Ra.it(e):n.Ra.et(e),!t.isEqual(ie.min()))try{const r=yield py(n.localStore);t.compareTo(r)>=0&&(yield function(s,o){const a=s.Ra.Pt(o);return a.targetChanges.forEach((c,u)=>{if(c.resumeToken.approximateByteSize()>0){const d=s.Ta.get(u);d&&s.Ta.set(u,d.withResumeToken(c.resumeToken,o))}}),a.targetMismatches.forEach((c,u)=>{const d=s.Ta.get(c);if(!d)return;s.Ta.set(c,d.withResumeToken(rt.EMPTY_BYTE_STRING,d.snapshotVersion)),yy(s,c);const h=new Kn(d.target,c,u,d.sequenceNumber);fd(s,h)}),s.remoteSyncer.applyRemoteEvent(a)}(n,t))}catch(r){Y(Nr,"Failed to raise snapshot:",r),yield La(n,r)}})}function La(n,e,t){return p(this,null,function*(){if(!Ni(e))throw e;n.Ia.add(1),yield lo(n),n.Aa.set("Offline"),t||(t=()=>py(n.localStore)),n.asyncQueue.enqueueRetryable(()=>p(this,null,function*(){Y(Nr,"Retrying IndexedDB access"),yield t(),n.Ia.delete(1),yield Ec(n)}))})}function Ey(n,e){return e().catch(t=>La(n,t,e))}function vc(n){return p(this,null,function*(){const e=ae(n),t=cr(e);let r=e.Pa.length>0?e.Pa[e.Pa.length-1].batchId:Xu;for(;t0(e);)try{const i=yield MS(e.localStore,r);if(i===null){e.Pa.length===0&&t.B_();break}r=i.batchId,n0(e,i)}catch(i){yield La(e,i)}vy(e)&&Ty(e)})}function t0(n){return Gr(n)&&n.Pa.length<10}function n0(n,e){n.Pa.push(e);const t=cr(n);t.x_()&&t.Z_&&t.X_(e.mutations)}function vy(n){return Gr(n)&&!cr(n).M_()&&n.Pa.length>0}function Ty(n){cr(n).start()}function r0(n){return p(this,null,function*(){cr(n).na()})}function i0(n){return p(this,null,function*(){const e=cr(n);for(const t of n.Pa)e.X_(t.mutations)})}function s0(n,e,t){return p(this,null,function*(){const r=n.Pa.shift(),i=id.from(r,e,t);yield Ey(n,()=>n.remoteSyncer.applySuccessfulWrite(i)),yield vc(n)})}function o0(n,e){return p(this,null,function*(){e&&cr(n).Z_&&(yield function(r,i){return p(this,null,function*(){if(function(o){return ey(o)&&o!==V.ABORTED}(i.code)){const s=r.Pa.shift();cr(r).N_(),yield Ey(r,()=>r.remoteSyncer.rejectFailedWrite(s.batchId,i)),yield vc(r)}})}(n,e)),vy(n)&&Ty(n)})}function Fm(n,e){return p(this,null,function*(){const t=ae(n);t.asyncQueue.verifyOperationInProgress(),Y(Nr,"RemoteStore received new credentials");const r=Gr(t);t.Ia.add(3),yield lo(t),r&&t.Aa.set("Unknown"),yield t.remoteSyncer.handleCredentialChange(e),t.Ia.delete(3),yield Ec(t)})}function a0(n,e){return p(this,null,function*(){const t=ae(n);e?(t.Ia.delete(2),yield Ec(t)):e||(t.Ia.add(2),yield lo(t),t.Aa.set("Unknown"))})}function Oi(n){return n.Va||(n.Va=function(t,r,i){const s=ae(t);return s.ia(),new GS(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(n.datastore,n.asyncQueue,{Zo:JS.bind(null,n),e_:XS.bind(null,n),n_:ZS.bind(null,n),J_:e0.bind(null,n)}),n.da.push(e=>p(this,null,function*(){e?(n.Va.N_(),pd(n)?md(n):n.Aa.set("Unknown")):(yield n.Va.stop(),wy(n))}))),n.Va}function cr(n){return n.ma||(n.ma=function(t,r,i){const s=ae(t);return s.ia(),new WS(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(n.datastore,n.asyncQueue,{Zo:()=>Promise.resolve(),e_:r0.bind(null,n),n_:o0.bind(null,n),ea:i0.bind(null,n),ta:s0.bind(null,n)}),n.da.push(e=>p(this,null,function*(){e?(n.ma.N_(),yield vc(n)):(yield n.ma.stop(),n.Pa.length>0&&(Y(Nr,`Stopping write stream with ${n.Pa.length} pending writes`),n.Pa=[]))}))),n.ma}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gd{constructor(e,t,r,i,s){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new cn,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,t,r,i,s){const o=Date.now()+r,a=new gd(e,t,o,i,s);return a.start(r),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new G(V.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function _d(n,e){if(On("AsyncQueue",`${e}: ${n}`),Ni(n))return new G(V.UNAVAILABLE,`${e}: ${n}`);throw n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class di{static emptySet(e){return new di(e.comparator)}constructor(e){this.comparator=e?(t,r)=>e(t,r)||ee.comparator(t.key,r.key):(t,r)=>ee.comparator(t.key,r.key),this.keyedMap=us(),this.sortedSet=new We(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,r)=>(e(t),!1))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof di)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;t.hasNext();){const i=t.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(t=>{e.push(t.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const r=new di;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=t,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bm{constructor(){this.fa=new We(ee.comparator)}track(e){const t=e.doc.key,r=this.fa.get(t);r?e.type!==0&&r.type===3?this.fa=this.fa.insert(t,e):e.type===3&&r.type!==1?this.fa=this.fa.insert(t,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.fa=this.fa.insert(t,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.fa=this.fa.insert(t,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.fa=this.fa.remove(t):e.type===1&&r.type===2?this.fa=this.fa.insert(t,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.fa=this.fa.insert(t,{type:2,doc:e.doc}):ne(63341,{At:e,ga:r}):this.fa=this.fa.insert(t,e)}pa(){const e=[];return this.fa.inorderTraversal((t,r)=>{e.push(r)}),e}}class Ti{constructor(e,t,r,i,s,o,a,c,u){this.query=e,this.docs=t,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=c,this.hasCachedResults=u}static fromInitialDocuments(e,t,r,i,s){const o=[];return t.forEach(a=>{o.push({type:0,doc:a})}),new Ti(e,t,di.emptySet(t),o,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&mc(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,r=e.docChanges;if(t.length!==r.length)return!1;for(let i=0;i<t.length;i++)if(t[i].type!==r[i].type||!t[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class c0{constructor(){this.ya=void 0,this.wa=[]}Sa(){return this.wa.some(e=>e.ba())}}class l0{constructor(){this.queries=$m(),this.onlineState="Unknown",this.Da=new Set}terminate(){(function(t,r){const i=ae(t),s=i.queries;i.queries=$m(),s.forEach((o,a)=>{for(const c of a.wa)c.onError(r)})})(this,new G(V.ABORTED,"Firestore shutting down"))}}function $m(){return new zr(n=>$_(n),mc)}function yd(n,e){return p(this,null,function*(){const t=ae(n);let r=3;const i=e.query;let s=t.queries.get(i);s?!s.Sa()&&e.ba()&&(r=2):(s=new c0,r=e.ba()?0:1);try{switch(r){case 0:s.ya=yield t.onListen(i,!0);break;case 1:s.ya=yield t.onListen(i,!1);break;case 2:yield t.onFirstRemoteStoreListen(i)}}catch(o){const a=_d(o,`Initialization of query '${ni(e.query)}' failed`);return void e.onError(a)}t.queries.set(i,s),s.wa.push(e),e.va(t.onlineState),s.ya&&e.Ca(s.ya)&&Ed(t)})}function wd(n,e){return p(this,null,function*(){const t=ae(n),r=e.query;let i=3;const s=t.queries.get(r);if(s){const o=s.wa.indexOf(e);o>=0&&(s.wa.splice(o,1),s.wa.length===0?i=e.ba()?0:1:!s.Sa()&&e.ba()&&(i=2))}switch(i){case 0:return t.queries.delete(r),t.onUnlisten(r,!0);case 1:return t.queries.delete(r),t.onUnlisten(r,!1);case 2:return t.onLastRemoteStoreUnlisten(r);default:return}})}function u0(n,e){const t=ae(n);let r=!1;for(const i of e){const s=i.query,o=t.queries.get(s);if(o){for(const a of o.wa)a.Ca(i)&&(r=!0);o.ya=i}}r&&Ed(t)}function d0(n,e,t){const r=ae(n),i=r.queries.get(e);if(i)for(const s of i.wa)s.onError(t);r.queries.delete(e)}function Ed(n){n.Da.forEach(e=>{e.next()})}var ru,qm;(qm=ru||(ru={})).Fa="default",qm.Cache="cache";class vd{constructor(e,t,r){this.query=e,this.Ma=t,this.xa=!1,this.Oa=null,this.onlineState="Unknown",this.options=r||{}}Ca(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new Ti(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.xa?this.Na(e)&&(this.Ma.next(e),t=!0):this.Ba(e,this.onlineState)&&(this.La(e),t=!0),this.Oa=e,t}onError(e){this.Ma.error(e)}va(e){this.onlineState=e;let t=!1;return this.Oa&&!this.xa&&this.Ba(this.Oa,e)&&(this.La(this.Oa),t=!0),t}Ba(e,t){if(!e.fromCache||!this.ba())return!0;const r=t!=="Offline";return(!this.options.ka||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}Na(e){if(e.docChanges.length>0)return!0;const t=this.Oa&&this.Oa.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}La(e){e=Ti.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.xa=!0,this.Ma.next(e)}ba(){return this.options.source!==ru.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Iy{constructor(e){this.key=e}}class Ay{constructor(e){this.key=e}}class h0{constructor(e,t){this.query=e,this.Ha=t,this.Ya=null,this.hasCachedResults=!1,this.current=!1,this.Za=he(),this.mutatedKeys=he(),this.Xa=q_(e),this.eu=new di(this.Xa)}get tu(){return this.Ha}nu(e,t){const r=t?t.ru:new Bm,i=t?t.eu:this.eu;let s=t?t.mutatedKeys:this.mutatedKeys,o=i,a=!1;const c=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,u=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((d,h)=>{const m=i.get(d),_=pc(this.query,h)?h:null,w=!!m&&this.mutatedKeys.has(m.key),E=!!_&&(_.hasLocalMutations||this.mutatedKeys.has(_.key)&&_.hasCommittedMutations);let v=!1;m&&_?m.data.isEqual(_.data)?w!==E&&(r.track({type:3,doc:_}),v=!0):this.iu(m,_)||(r.track({type:2,doc:_}),v=!0,(c&&this.Xa(_,c)>0||u&&this.Xa(_,u)<0)&&(a=!0)):!m&&_?(r.track({type:0,doc:_}),v=!0):m&&!_&&(r.track({type:1,doc:m}),v=!0,(c||u)&&(a=!0)),v&&(_?(o=o.add(_),s=E?s.add(d):s.delete(d)):(o=o.delete(d),s=s.delete(d)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const d=this.query.limitType==="F"?o.last():o.first();o=o.delete(d.key),s=s.delete(d.key),r.track({type:1,doc:d})}return{eu:o,ru:r,Ds:a,mutatedKeys:s}}iu(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,r,i){const s=this.eu;this.eu=e.eu,this.mutatedKeys=e.mutatedKeys;const o=e.ru.pa();o.sort((d,h)=>function(_,w){const E=v=>{switch(v){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return ne(20277,{At:v})}};return E(_)-E(w)}(d.type,h.type)||this.Xa(d.doc,h.doc)),this.su(r),i=i!=null&&i;const a=t&&!i?this.ou():[],c=this.Za.size===0&&this.current&&!i?1:0,u=c!==this.Ya;return this.Ya=c,o.length!==0||u?{snapshot:new Ti(this.query,e.eu,s,o,e.mutatedKeys,c===0,u,!1,!!r&&r.resumeToken.approximateByteSize()>0),_u:a}:{_u:a}}va(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({eu:this.eu,ru:new Bm,mutatedKeys:this.mutatedKeys,Ds:!1},!1)):{_u:[]}}au(e){return!this.Ha.has(e)&&!!this.eu.has(e)&&!this.eu.get(e).hasLocalMutations}su(e){e&&(e.addedDocuments.forEach(t=>this.Ha=this.Ha.add(t)),e.modifiedDocuments.forEach(t=>{}),e.removedDocuments.forEach(t=>this.Ha=this.Ha.delete(t)),this.current=e.current)}ou(){if(!this.current)return[];const e=this.Za;this.Za=he(),this.eu.forEach(r=>{this.au(r.key)&&(this.Za=this.Za.add(r.key))});const t=[];return e.forEach(r=>{this.Za.has(r)||t.push(new Ay(r))}),this.Za.forEach(r=>{e.has(r)||t.push(new Iy(r))}),t}uu(e){this.Ha=e.qs,this.Za=he();const t=this.nu(e.documents);return this.applyChanges(t,!0)}cu(){return Ti.fromInitialDocuments(this.query,this.eu,this.mutatedKeys,this.Ya===0,this.hasCachedResults)}}const Td="SyncEngine";class f0{constructor(e,t,r){this.query=e,this.targetId=t,this.view=r}}class m0{constructor(e){this.key=e,this.lu=!1}}class p0{constructor(e,t,r,i,s,o){this.localStore=e,this.remoteStore=t,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.hu={},this.Pu=new zr(a=>$_(a),mc),this.Tu=new Map,this.Iu=new Set,this.du=new We(ee.comparator),this.Eu=new Map,this.Au=new ad,this.Ru={},this.Vu=new Map,this.mu=vi.ur(),this.onlineState="Unknown",this.fu=void 0}get isPrimaryClient(){return this.fu===!0}}function g0(n,e,t=!0){return p(this,null,function*(){const r=Py(n);let i;const s=r.Pu.get(e);return s?(r.sharedClientState.addLocalQueryTarget(s.targetId),i=s.view.cu()):i=yield Ry(r,e,t,!0),i})}function _0(n,e){return p(this,null,function*(){const t=Py(n);yield Ry(t,e,!0,!1)})}function Ry(n,e,t,r){return p(this,null,function*(){const i=yield xS(n.localStore,ln(e)),s=i.targetId,o=n.sharedClientState.addLocalQueryTarget(s,t);let a;return r&&(a=yield y0(n,e,s,o==="current",i.resumeToken)),n.isPrimaryClient&&t&&_y(n.remoteStore,i),a})}function y0(n,e,t,r,i){return p(this,null,function*(){n.gu=(h,m,_)=>function(E,v,C,O){return p(this,null,function*(){let U=v.view.nu(C);U.Ds&&(U=yield Lm(E.localStore,v.query,!1).then(({documents:R})=>v.view.nu(R,U)));const M=O&&O.targetChanges.get(v.targetId),Z=O&&O.targetMismatches.get(v.targetId)!=null,K=v.view.applyChanges(U,E.isPrimaryClient,M,Z);return zm(E,v.targetId,K._u),K.snapshot})}(n,h,m,_);const s=yield Lm(n.localStore,e,!0),o=new h0(e,s.qs),a=o.nu(s.documents),c=co.createSynthesizedTargetChangeForCurrentChange(t,r&&n.onlineState!=="Offline",i),u=o.applyChanges(a,n.isPrimaryClient,c);zm(n,t,u._u);const d=new f0(e,t,o);return n.Pu.set(e,d),n.Tu.has(t)?n.Tu.get(t).push(e):n.Tu.set(t,[e]),u.snapshot})}function w0(n,e,t){return p(this,null,function*(){const r=ae(n),i=r.Pu.get(e),s=r.Tu.get(i.targetId);if(s.length>1)return r.Tu.set(i.targetId,s.filter(o=>!mc(o,e))),void r.Pu.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(i.targetId),r.sharedClientState.isActiveQueryTarget(i.targetId)||(yield tu(r.localStore,i.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(i.targetId),t&&hd(r.remoteStore,i.targetId),iu(r,i.targetId)}).catch(Di))):(iu(r,i.targetId),yield tu(r.localStore,i.targetId,!0))})}function E0(n,e){return p(this,null,function*(){const t=ae(n),r=t.Pu.get(e),i=t.Tu.get(r.targetId);t.isPrimaryClient&&i.length===1&&(t.sharedClientState.removeLocalQueryTarget(r.targetId),hd(t.remoteStore,r.targetId))})}function v0(n,e,t){return p(this,null,function*(){const r=k0(n);try{const i=yield function(o,a){const c=ae(o),u=F.now(),d=a.reduce((_,w)=>_.add(w.key),he());let h,m;return c.persistence.runTransaction("Locally write mutations","readwrite",_=>{let w=Vn(),E=he();return c.Os.getEntries(_,d).next(v=>{w=v,w.forEach((C,O)=>{O.isValidDocument()||(E=E.add(C))})}).next(()=>c.localDocuments.getOverlayedDocuments(_,w)).next(v=>{h=v;const C=[];for(const O of a){const U=Fb(O,h.get(O.key).overlayedDocument);U!=null&&C.push(new pr(O.key,U,O_(U.value.mapValue),je.exists(!0)))}return c.mutationQueue.addMutationBatch(_,u,C,a)}).next(v=>{m=v;const C=v.applyToLocalDocumentSet(h,E);return c.documentOverlayCache.saveOverlays(_,v.batchId,C)})}).then(()=>({batchId:m.batchId,changes:z_(h)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(o,a,c){let u=o.Ru[o.currentUser.toKey()];u||(u=new We(ue)),u=u.insert(a,c),o.Ru[o.currentUser.toKey()]=u}(r,i.batchId,t),yield uo(r,i.changes),yield vc(r.remoteStore)}catch(i){const s=_d(i,"Failed to persist write");t.reject(s)}})}function by(n,e){return p(this,null,function*(){const t=ae(n);try{const r=yield LS(t.localStore,e);e.targetChanges.forEach((i,s)=>{const o=t.Eu.get(s);o&&(Ee(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1,22616),i.addedDocuments.size>0?o.lu=!0:i.modifiedDocuments.size>0?Ee(o.lu,14607):i.removedDocuments.size>0&&(Ee(o.lu,42227),o.lu=!1))}),yield uo(t,r,e)}catch(r){yield Di(r)}})}function jm(n,e,t){const r=ae(n);if(r.isPrimaryClient&&t===0||!r.isPrimaryClient&&t===1){const i=[];r.Pu.forEach((s,o)=>{const a=o.view.va(e);a.snapshot&&i.push(a.snapshot)}),function(o,a){const c=ae(o);c.onlineState=a;let u=!1;c.queries.forEach((d,h)=>{for(const m of h.wa)m.va(a)&&(u=!0)}),u&&Ed(c)}(r.eventManager,e),i.length&&r.hu.J_(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}function T0(n,e,t){return p(this,null,function*(){const r=ae(n);r.sharedClientState.updateQueryState(e,"rejected",t);const i=r.Eu.get(e),s=i&&i.key;if(s){let o=new We(ee.comparator);o=o.insert(s,Xe.newNoDocument(s,ie.min()));const a=he().add(s),c=new yc(ie.min(),new Map,new We(ue),o,a);yield by(r,c),r.du=r.du.remove(s),r.Eu.delete(e),Id(r)}else yield tu(r.localStore,e,!1).then(()=>iu(r,e,t)).catch(Di)})}function I0(n,e){return p(this,null,function*(){const t=ae(n),r=e.batch.batchId;try{const i=yield OS(t.localStore,e);ky(t,r,null),Sy(t,r),t.sharedClientState.updateMutationState(r,"acknowledged"),yield uo(t,i)}catch(i){yield Di(i)}})}function A0(n,e,t){return p(this,null,function*(){const r=ae(n);try{const i=yield function(o,a){const c=ae(o);return c.persistence.runTransaction("Reject batch","readwrite-primary",u=>{let d;return c.mutationQueue.lookupMutationBatch(u,a).next(h=>(Ee(h!==null,37113),d=h.keys(),c.mutationQueue.removeMutationBatch(u,h))).next(()=>c.mutationQueue.performConsistencyCheck(u)).next(()=>c.documentOverlayCache.removeOverlaysForBatchId(u,d,a)).next(()=>c.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(u,d)).next(()=>c.localDocuments.getDocuments(u,d))})}(r.localStore,e);ky(r,e,t),Sy(r,e),r.sharedClientState.updateMutationState(e,"rejected",t),yield uo(r,i)}catch(i){yield Di(i)}})}function Sy(n,e){(n.Vu.get(e)||[]).forEach(t=>{t.resolve()}),n.Vu.delete(e)}function ky(n,e,t){const r=ae(n);let i=r.Ru[r.currentUser.toKey()];if(i){const s=i.get(e);s&&(t?s.reject(t):s.resolve(),i=i.remove(e)),r.Ru[r.currentUser.toKey()]=i}}function iu(n,e,t=null){n.sharedClientState.removeLocalQueryTarget(e);for(const r of n.Tu.get(e))n.Pu.delete(r),t&&n.hu.pu(r,t);n.Tu.delete(e),n.isPrimaryClient&&n.Au.zr(e).forEach(r=>{n.Au.containsKey(r)||Cy(n,r)})}function Cy(n,e){n.Iu.delete(e.path.canonicalString());const t=n.du.get(e);t!==null&&(hd(n.remoteStore,t),n.du=n.du.remove(e),n.Eu.delete(t),Id(n))}function zm(n,e,t){for(const r of t)r instanceof Iy?(n.Au.addReference(r.key,e),R0(n,r)):r instanceof Ay?(Y(Td,"Document no longer in limbo: "+r.key),n.Au.removeReference(r.key,e),n.Au.containsKey(r.key)||Cy(n,r.key)):ne(19791,{yu:r})}function R0(n,e){const t=e.key,r=t.path.canonicalString();n.du.get(t)||n.Iu.has(r)||(Y(Td,"New document in limbo: "+t),n.Iu.add(r),Id(n))}function Id(n){for(;n.Iu.size>0&&n.du.size<n.maxConcurrentLimboResolutions;){const e=n.Iu.values().next().value;n.Iu.delete(e);const t=new ee(Re.fromString(e)),r=n.mu.next();n.Eu.set(r,new m0(t)),n.du=n.du.insert(t,r),_y(n.remoteStore,new Kn(ln(fc(t.path)),r,"TargetPurposeLimboResolution",dc.ue))}}function uo(n,e,t){return p(this,null,function*(){const r=ae(n),i=[],s=[],o=[];r.Pu.isEmpty()||(r.Pu.forEach((a,c)=>{o.push(r.gu(c,e,t).then(u=>{var d;if((u||t)&&r.isPrimaryClient){const h=u?!u.fromCache:(d=t==null?void 0:t.targetChanges.get(c.targetId))===null||d===void 0?void 0:d.current;r.sharedClientState.updateQueryState(c.targetId,h?"current":"not-current")}if(u){i.push(u);const h=ld.Es(c.targetId,u);s.push(h)}}))}),yield Promise.all(o),r.hu.J_(i),yield function(c,u){return p(this,null,function*(){const d=ae(c);try{yield d.persistence.runTransaction("notifyLocalViewChanges","readwrite",h=>$.forEach(u,m=>$.forEach(m.Is,_=>d.persistence.referenceDelegate.addReference(h,m.targetId,_)).next(()=>$.forEach(m.ds,_=>d.persistence.referenceDelegate.removeReference(h,m.targetId,_)))))}catch(h){if(!Ni(h))throw h;Y(ud,"Failed to update sequence numbers: "+h)}for(const h of u){const m=h.targetId;if(!h.fromCache){const _=d.Fs.get(m),w=_.snapshotVersion,E=_.withLastLimboFreeSnapshotVersion(w);d.Fs=d.Fs.insert(m,E)}}})}(r.localStore,s))})}function b0(n,e){return p(this,null,function*(){const t=ae(n);if(!t.currentUser.isEqual(e)){Y(Td,"User change. New user:",e.toKey());const r=yield my(t.localStore,e);t.currentUser=e,function(s,o){s.Vu.forEach(a=>{a.forEach(c=>{c.reject(new G(V.CANCELLED,o))})}),s.Vu.clear()}(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),yield uo(t,r.Bs)}})}function S0(n,e){const t=ae(n),r=t.Eu.get(e);if(r&&r.lu)return he().add(r.key);{let i=he();const s=t.Tu.get(e);if(!s)return i;for(const o of s){const a=t.Pu.get(o);i=i.unionWith(a.view.tu)}return i}}function Py(n){const e=ae(n);return e.remoteStore.remoteSyncer.applyRemoteEvent=by.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=S0.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=T0.bind(null,e),e.hu.J_=u0.bind(null,e.eventManager),e.hu.pu=d0.bind(null,e.eventManager),e}function k0(n){const e=ae(n);return e.remoteStore.remoteSyncer.applySuccessfulWrite=I0.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=A0.bind(null,e),e}class Va{constructor(){this.kind="memory",this.synchronizeTabs=!1}initialize(e){return p(this,null,function*(){this.serializer=wc(e.databaseInfo.databaseId),this.sharedClientState=this.bu(e),this.persistence=this.Du(e),yield this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Cu(e,this.localStore),this.indexBackfillerScheduler=this.Fu(e,this.localStore)})}Cu(e,t){return null}Fu(e,t){return null}vu(e){return NS(this.persistence,new CS,e.initialUser,this.serializer)}Du(e){return new fy(cd.Vi,this.serializer)}bu(e){return new FS}terminate(){return p(this,null,function*(){var e,t;(e=this.gcScheduler)===null||e===void 0||e.stop(),(t=this.indexBackfillerScheduler)===null||t===void 0||t.stop(),this.sharedClientState.shutdown(),yield this.persistence.shutdown()})}}Va.provider={build:()=>new Va};class C0 extends Va{constructor(e){super(),this.cacheSizeBytes=e}Cu(e,t){Ee(this.persistence.referenceDelegate instanceof Oa,46915);const r=this.persistence.referenceDelegate.garbageCollector;return new mS(r,e.asyncQueue,t)}Du(e){const t=this.cacheSizeBytes!==void 0?Tt.withCacheSize(this.cacheSizeBytes):Tt.DEFAULT;return new fy(r=>Oa.Vi(r,t),this.serializer)}}class su{initialize(e,t){return p(this,null,function*(){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>jm(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=b0.bind(null,this.syncEngine),yield a0(this.remoteStore,this.syncEngine.isPrimaryClient))})}createEventManager(e){return function(){return new l0}()}createDatastore(e){const t=wc(e.databaseInfo.databaseId),r=function(s){return new zS(s)}(e.databaseInfo);return function(s,o,a,c){return new KS(s,o,a,c)}(e.authCredentials,e.appCheckCredentials,r,t)}createRemoteStore(e){return function(r,i,s,o,a){return new YS(r,i,s,o,a)}(this.localStore,this.datastore,e.asyncQueue,t=>jm(this.syncEngine,t,0),function(){return xm.C()?new xm:new BS}())}createSyncEngine(e,t){return function(i,s,o,a,c,u,d){const h=new p0(i,s,o,a,c,u);return d&&(h.fu=!0),h}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}terminate(){return p(this,null,function*(){var e,t;yield function(i){return p(this,null,function*(){const s=ae(i);Y(Nr,"RemoteStore shutting down."),s.Ia.add(5),yield lo(s),s.Ea.shutdown(),s.Aa.set("Unknown")})}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(t=this.eventManager)===null||t===void 0||t.terminate()})}}su.provider={build:()=>new su};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ad{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.xu(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.xu(this.observer.error,e):On("Uncaught Error in snapshot listener:",e.toString()))}Ou(){this.muted=!0}xu(e,t){setTimeout(()=>{this.muted||e(t)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class P0{constructor(e){this.datastore=e,this.readVersions=new Map,this.mutations=[],this.committed=!1,this.lastTransactionError=null,this.writtenDocs=new Set}lookup(e){return p(this,null,function*(){if(this.ensureCommitNotCalled(),this.mutations.length>0)throw this.lastTransactionError=new G(V.INVALID_ARGUMENT,"Firestore transactions require all reads to be executed before all writes."),this.lastTransactionError;const t=yield function(i,s){return p(this,null,function*(){const o=ae(i),a={documents:s.map(h=>Na(o.serializer,h))},c=yield o.Jo("BatchGetDocuments",o.serializer.databaseId,Re.emptyPath(),a,s.length),u=new Map;c.forEach(h=>{const m=Jb(o.serializer,h);u.set(m.key.toString(),m)});const d=[];return s.forEach(h=>{const m=u.get(h.toString());Ee(!!m,55234,{key:h}),d.push(m)}),d})}(this.datastore,e);return t.forEach(r=>this.recordVersion(r)),t})}set(e,t){this.write(t.toMutation(e,this.precondition(e))),this.writtenDocs.add(e.toString())}update(e,t){try{this.write(t.toMutation(e,this.preconditionForUpdate(e)))}catch(r){this.lastTransactionError=r}this.writtenDocs.add(e.toString())}delete(e){this.write(new ao(e,this.precondition(e))),this.writtenDocs.add(e.toString())}commit(){return p(this,null,function*(){if(this.ensureCommitNotCalled(),this.lastTransactionError)throw this.lastTransactionError;const e=this.readVersions;this.mutations.forEach(t=>{e.delete(t.key.toString())}),e.forEach((t,r)=>{const i=ee.fromPath(r);this.mutations.push(new Z_(i,this.precondition(i)))}),yield function(r,i){return p(this,null,function*(){const s=ae(r),o={writes:i.map(a=>cy(s.serializer,a))};yield s.Wo("Commit",s.serializer.databaseId,Re.emptyPath(),o)})}(this.datastore,this.mutations),this.committed=!0})}recordVersion(e){let t;if(e.isFoundDocument())t=e.version;else{if(!e.isNoDocument())throw ne(50498,{Wu:e.constructor.name});t=ie.min()}const r=this.readVersions.get(e.key.toString());if(r){if(!t.isEqual(r))throw new G(V.ABORTED,"Document version changed between two reads.")}else this.readVersions.set(e.key.toString(),t)}precondition(e){const t=this.readVersions.get(e.toString());return!this.writtenDocs.has(e.toString())&&t?t.isEqual(ie.min())?je.exists(!1):je.updateTime(t):je.none()}preconditionForUpdate(e){const t=this.readVersions.get(e.toString());if(!this.writtenDocs.has(e.toString())&&t){if(t.isEqual(ie.min()))throw new G(V.INVALID_ARGUMENT,"Can't update a document that doesn't exist.");return je.updateTime(t)}return je.exists(!0)}write(e){this.ensureCommitNotCalled(),this.mutations.push(e)}ensureCommitNotCalled(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class D0{constructor(e,t,r,i,s){this.asyncQueue=e,this.datastore=t,this.options=r,this.updateFunction=i,this.deferred=s,this.Gu=r.maxAttempts,this.F_=new dd(this.asyncQueue,"transaction_retry")}zu(){this.Gu-=1,this.ju()}ju(){this.F_.g_(()=>p(this,null,function*(){const e=new P0(this.datastore),t=this.Ju(e);t&&t.then(r=>{this.asyncQueue.enqueueAndForget(()=>e.commit().then(()=>{this.deferred.resolve(r)}).catch(i=>{this.Hu(i)}))}).catch(r=>{this.Hu(r)})}))}Ju(e){try{const t=this.updateFunction(e);return!so(t)&&t.catch&&t.then?t:(this.deferred.reject(Error("Transaction callback must return a Promise")),null)}catch(t){return this.deferred.reject(t),null}}Hu(e){this.Gu>0&&this.Yu(e)?(this.Gu-=1,this.asyncQueue.enqueueAndForget(()=>(this.ju(),Promise.resolve()))):this.deferred.reject(e)}Yu(e){if(e.name==="FirebaseError"){const t=e.code;return t==="aborted"||t==="failed-precondition"||t==="already-exists"||!ey(t)}return!1}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lr="FirestoreClient";class N0{constructor(e,t,r,i,s){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=r,this.databaseInfo=i,this.user=dt.UNAUTHENTICATED,this.clientId=lc.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=s,this.authCredentials.start(r,o=>p(this,null,function*(){Y(lr,"Received user=",o.uid),yield this.authCredentialListener(o),this.user=o})),this.appCheckCredentials.start(r,o=>(Y(lr,"Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new cn;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(()=>p(this,null,function*(){try{this._onlineComponents&&(yield this._onlineComponents.terminate()),this._offlineComponents&&(yield this._offlineComponents.terminate()),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const r=_d(t,"Failed to shutdown persistence");e.reject(r)}})),e.promise}}function wl(n,e){return p(this,null,function*(){n.asyncQueue.verifyOperationInProgress(),Y(lr,"Initializing OfflineComponentProvider");const t=n.configuration;yield e.initialize(t);let r=t.initialUser;n.setCredentialChangeListener(i=>p(this,null,function*(){r.isEqual(i)||(yield my(e.localStore,i),r=i)})),e.persistence.setDatabaseDeletedListener(()=>{Ln("Terminating Firestore due to IndexedDb database deletion"),n.terminate().then(()=>{Y("Terminating Firestore due to IndexedDb database deletion completed successfully")}).catch(i=>{Ln("Terminating Firestore due to IndexedDb database deletion failed",i)})}),n._offlineComponents=e})}function Gm(n,e){return p(this,null,function*(){n.asyncQueue.verifyOperationInProgress();const t=yield O0(n);Y(lr,"Initializing OnlineComponentProvider"),yield e.initialize(t,n.configuration),n.setCredentialChangeListener(r=>Fm(e.remoteStore,r)),n.setAppCheckTokenChangeListener((r,i)=>Fm(e.remoteStore,i)),n._onlineComponents=e})}function O0(n){return p(this,null,function*(){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){Y(lr,"Using user provided OfflineComponentProvider");try{yield wl(n,n._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!function(i){return i.name==="FirebaseError"?i.code===V.FAILED_PRECONDITION||i.code===V.UNIMPLEMENTED:!(typeof DOMException!="undefined"&&i instanceof DOMException)||i.code===22||i.code===20||i.code===11}(t))throw t;Ln("Error using user provided cache. Falling back to memory cache: "+t),yield wl(n,new Va)}}else Y(lr,"Using default OfflineComponentProvider"),yield wl(n,new C0(void 0));return n._offlineComponents})}function Rd(n){return p(this,null,function*(){return n._onlineComponents||(n._uninitializedComponentsProvider?(Y(lr,"Using user provided OnlineComponentProvider"),yield Gm(n,n._uninitializedComponentsProvider._online)):(Y(lr,"Using default OnlineComponentProvider"),yield Gm(n,new su))),n._onlineComponents})}function L0(n){return Rd(n).then(e=>e.syncEngine)}function V0(n){return Rd(n).then(e=>e.datastore)}function Ma(n){return p(this,null,function*(){const e=yield Rd(n),t=e.eventManager;return t.onListen=g0.bind(null,e.syncEngine),t.onUnlisten=w0.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=_0.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=E0.bind(null,e.syncEngine),t})}function M0(n,e,t={}){const r=new cn;return n.asyncQueue.enqueueAndForget(()=>p(this,null,function*(){return function(s,o,a,c,u){const d=new Ad({next:m=>{d.Ou(),o.enqueueAndForget(()=>wd(s,h));const _=m.docs.has(a);!_&&m.fromCache?u.reject(new G(V.UNAVAILABLE,"Failed to get document because the client is offline.")):_&&m.fromCache&&c&&c.source==="server"?u.reject(new G(V.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):u.resolve(m)},error:m=>u.reject(m)}),h=new vd(fc(a.path),d,{includeMetadataChanges:!0,ka:!0});return yd(s,h)}(yield Ma(n),n.asyncQueue,e,t,r)})),r.promise}function x0(n,e,t={}){const r=new cn;return n.asyncQueue.enqueueAndForget(()=>p(this,null,function*(){return function(s,o,a,c,u){const d=new Ad({next:m=>{d.Ou(),o.enqueueAndForget(()=>wd(s,h)),m.fromCache&&c.source==="server"?u.reject(new G(V.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):u.resolve(m)},error:m=>u.reject(m)}),h=new vd(a,d,{includeMetadataChanges:!0,ka:!0});return yd(s,h)}(yield Ma(n),n.asyncQueue,e,t,r)})),r.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dy(n){const e={};return n.timeoutSeconds!==void 0&&(e.timeoutSeconds=n.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wm=new Map;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ny="firestore.googleapis.com",Hm=!0;class Km{constructor(e){var t,r;if(e.host===void 0){if(e.ssl!==void 0)throw new G(V.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=Ny,this.ssl=Hm}else this.host=e.host,this.ssl=(t=e.ssl)!==null&&t!==void 0?t:Hm;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=hy;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<hS)throw new G(V.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}v_("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Dy((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new G(V.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new G(V.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new G(V.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class ho{constructor(e,t,r,i){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Km({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new G(V.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new G(V.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Km(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new w_;switch(r.type){case"firstParty":return new KR(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new G(V.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}_restart(){return p(this,null,function*(){this._terminateTask==="notTerminated"?yield this._terminate():this._terminateTask="notTerminated"})}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const r=Wm.get(t);r&&(Y("ComponentProvider","Removing Datastore"),Wm.delete(t),r.terminate())}(this),Promise.resolve()}}function Oy(n,e,t,r={}){var i;n=tt(n,ho);const s=fn(e),o=n._getSettings(),a=Object.assign(Object.assign({},o),{emulatorOptions:n._getEmulatorOptions()}),c=`${e}:${t}`;s&&(tc(`https://${c}`),nc("Firestore",!0)),o.host!==Ny&&o.host!==c&&Ln("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const u=Object.assign(Object.assign({},o),{host:c,ssl:s,emulatorOptions:r});if(!Pn(u,a)&&(n._setSettings(u),r.mockUserToken)){let d,h;if(typeof r.mockUserToken=="string")d=r.mockUserToken,h=dt.MOCK_USER;else{d=Ou(r.mockUserToken,(i=n._app)===null||i===void 0?void 0:i.options.projectId);const m=r.mockUserToken.sub||r.mockUserToken.user_id;if(!m)throw new G(V.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");h=new dt(m)}n._authCredentials=new GR(new y_(d,h))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class en{constructor(e,t,r){this.converter=t,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new en(this.firestore,e,this._query)}}class Le{constructor(e,t,r){this.converter=t,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new bn(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Le(this.firestore,e,this._key)}toJSON(){return{type:Le._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,t,r){if(io(t,Le._jsonSchema))return new Le(e,r||null,new ee(Re.fromString(t.referencePath)))}}Le._jsonSchemaVersion="firestore/documentReference/1.0",Le._jsonSchema={type:ze("string",Le._jsonSchemaVersion),referencePath:ze("string")};class bn extends en{constructor(e,t,r){super(e,t,fc(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Le(this.firestore,null,new ee(e))}withConverter(e){return new bn(this.firestore,e,this._path)}}function q(n,e,...t){if(n=fe(n),Ju("collection","path",e),n instanceof ho){const r=Re.fromString(e,...t);return am(r),new bn(n,null,r)}{if(!(n instanceof Le||n instanceof bn))throw new G(V.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(Re.fromString(e,...t));return am(r),new bn(n.firestore,null,r)}}function Ly(n,e){if(n=tt(n,ho),Ju("collectionGroup","collection id",e),e.indexOf("/")>=0)throw new G(V.INVALID_ARGUMENT,`Invalid collection ID '${e}' passed to function collectionGroup(). Collection IDs must not contain '/'.`);return new en(n,null,function(r){return new jr(Re.emptyPath(),r)}(e))}function x(n,e,...t){if(n=fe(n),arguments.length===1&&(e=lc.newId()),Ju("doc","path",e),n instanceof ho){const r=Re.fromString(e,...t);return om(r),new Le(n,null,new ee(r))}{if(!(n instanceof Le||n instanceof bn))throw new G(V.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(Re.fromString(e,...t));return om(r),new Le(n.firestore,n instanceof bn?n.converter:null,new ee(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qm="AsyncQueue";class Ym{constructor(e=Promise.resolve()){this.Zu=[],this.Xu=!1,this.ec=[],this.tc=null,this.nc=!1,this.rc=!1,this.sc=[],this.F_=new dd(this,"async_queue_retry"),this.oc=()=>{const r=yl();r&&Y(Qm,"Visibility state changed to "+r.visibilityState),this.F_.y_()},this._c=e;const t=yl();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.oc)}get isShuttingDown(){return this.Xu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.ac(),this.uc(e)}enterRestrictedMode(e){if(!this.Xu){this.Xu=!0,this.rc=e||!1;const t=yl();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.oc)}}enqueue(e){if(this.ac(),this.Xu)return new Promise(()=>{});const t=new cn;return this.uc(()=>this.Xu&&this.rc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Zu.push(e),this.cc()))}cc(){return p(this,null,function*(){if(this.Zu.length!==0){try{yield this.Zu[0](),this.Zu.shift(),this.F_.reset()}catch(e){if(!Ni(e))throw e;Y(Qm,"Operation failed with retryable error: "+e)}this.Zu.length>0&&this.F_.g_(()=>this.cc())}})}uc(e){const t=this._c.then(()=>(this.nc=!0,e().catch(r=>{throw this.tc=r,this.nc=!1,On("INTERNAL UNHANDLED ERROR: ",Jm(r)),r}).then(r=>(this.nc=!1,r))));return this._c=t,t}enqueueAfterDelay(e,t,r){this.ac(),this.sc.indexOf(e)>-1&&(t=0);const i=gd.createAndSchedule(this,e,t,r,s=>this.lc(s));return this.ec.push(i),i}ac(){this.tc&&ne(47125,{hc:Jm(this.tc)})}verifyOperationInProgress(){}Pc(){return p(this,null,function*(){let e;do e=this._c,yield e;while(e!==this._c)})}Tc(e){for(const t of this.ec)if(t.timerId===e)return!0;return!1}Ic(e){return this.Pc().then(()=>{this.ec.sort((t,r)=>t.targetTimeMs-r.targetTimeMs);for(const t of this.ec)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.Pc()})}dc(e){this.sc.push(e)}lc(e){const t=this.ec.indexOf(e);this.ec.splice(t,1)}}function Jm(n){let e=n.message||"";return n.stack&&(e=n.stack.includes(n.message)?n.stack:n.message+`
`+n.stack),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xm(n){return function(t,r){if(typeof t!="object"||t===null)return!1;const i=t;for(const s of r)if(s in i&&typeof i[s]=="function")return!0;return!1}(n,["next","error","complete"])}class Bt extends ho{constructor(e,t,r,i){super(e,t,r,i),this.type="firestore",this._queue=new Ym,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}_terminate(){return p(this,null,function*(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new Ym(e),this._firestoreClient=void 0,yield e}})}}function ou(n,e){const t=typeof n=="object"?n:Zs(),r=typeof n=="string"?n:ba,i=Fn(t,"firestore").getImmediate({identifier:r});if(!i._initialized){const s=Du("firestore");s&&Oy(i,...s)}return i}function Wr(n){if(n._terminated)throw new G(V.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||U0(n),n._firestoreClient}function U0(n){var e,t,r;const i=n._freezeSettings(),s=function(a,c,u,d){return new ub(a,c,u,d.host,d.ssl,d.experimentalForceLongPolling,d.experimentalAutoDetectLongPolling,Dy(d.experimentalLongPollingOptions),d.useFetchStreams,d.isUsingEmulator)}(n._databaseId,((e=n._app)===null||e===void 0?void 0:e.options.appId)||"",n._persistenceKey,i);n._componentsProvider||!((t=i.localCache)===null||t===void 0)&&t._offlineComponentProvider&&(!((r=i.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(n._componentsProvider={_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider}),n._firestoreClient=new N0(n._authCredentials,n._appCheckCredentials,n._queue,s,n._componentsProvider&&function(a){const c=a==null?void 0:a._online.build();return{_offline:a==null?void 0:a._offline.build(c),_online:c}}(n._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class At{constructor(e){this._byteString=e}static fromBase64String(e){try{return new At(rt.fromBase64String(e))}catch(t){throw new G(V.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new At(rt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:At._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(io(e,At._jsonSchema))return At.fromBase64String(e.bytes)}}At._jsonSchemaVersion="firestore/bytes/1.0",At._jsonSchema={type:ze("string",At._jsonSchemaVersion),bytes:ze("string")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hr{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new G(V.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Ze(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fo{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qt{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new G(V.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new G(V.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return ue(this._lat,e._lat)||ue(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:Qt._jsonSchemaVersion}}static fromJSON(e){if(io(e,Qt._jsonSchema))return new Qt(e.latitude,e.longitude)}}Qt._jsonSchemaVersion="firestore/geoPoint/1.0",Qt._jsonSchema={type:ze("string",Qt._jsonSchemaVersion),latitude:ze("number"),longitude:ze("number")};/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yt{constructor(e){this._values=(e||[]).map(t=>t)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,i){if(r.length!==i.length)return!1;for(let s=0;s<r.length;++s)if(r[s]!==i[s])return!1;return!0}(this._values,e._values)}toJSON(){return{type:Yt._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(io(e,Yt._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every(t=>typeof t=="number"))return new Yt(e.vectorValues);throw new G(V.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}Yt._jsonSchemaVersion="firestore/vectorValue/1.0",Yt._jsonSchema={type:ze("string",Yt._jsonSchemaVersion),vectorValues:ze("object")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const F0=/^__.*__$/;class B0{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return this.fieldMask!==null?new pr(e,this.data,this.fieldMask,t,this.fieldTransforms):new oo(e,this.data,t,this.fieldTransforms)}}class Vy{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return new pr(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function My(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw ne(40011,{Ec:n})}}class bd{constructor(e,t,r,i,s,o){this.settings=e,this.databaseId=t,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.Ac(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Ec(){return this.settings.Ec}Rc(e){return new bd(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Vc(e){var t;const r=(t=this.path)===null||t===void 0?void 0:t.child(e),i=this.Rc({path:r,mc:!1});return i.fc(e),i}gc(e){var t;const r=(t=this.path)===null||t===void 0?void 0:t.child(e),i=this.Rc({path:r,mc:!1});return i.Ac(),i}yc(e){return this.Rc({path:void 0,mc:!0})}wc(e){return xa(e,this.settings.methodName,this.settings.Sc||!1,this.path,this.settings.bc)}contains(e){return this.fieldMask.find(t=>e.isPrefixOf(t))!==void 0||this.fieldTransforms.find(t=>e.isPrefixOf(t.field))!==void 0}Ac(){if(this.path)for(let e=0;e<this.path.length;e++)this.fc(this.path.get(e))}fc(e){if(e.length===0)throw this.wc("Document fields must not be empty");if(My(this.Ec)&&F0.test(e))throw this.wc('Document fields cannot begin and end with "__"')}}class $0{constructor(e,t,r){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=r||wc(e)}Dc(e,t,r,i=!1){return new bd({Ec:e,methodName:t,bc:r,path:Ze.emptyPath(),mc:!1,Sc:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Li(n){const e=n._freezeSettings(),t=wc(n._databaseId);return new $0(n._databaseId,!!e.ignoreUndefinedProperties,t)}function Tc(n,e,t,r,i,s={}){const o=n.Dc(s.merge||s.mergeFields?2:0,e,t,i);Pd("Data must be an object, but it was:",o,r);const a=xy(r,o);let c,u;if(s.merge)c=new Pt(o.fieldMask),u=o.fieldTransforms;else if(s.mergeFields){const d=[];for(const h of s.mergeFields){const m=au(e,h,t);if(!o.contains(m))throw new G(V.INVALID_ARGUMENT,`Field '${m}' is specified in your field mask but missing from your input data.`);Fy(d,m)||d.push(m)}c=new Pt(d),u=o.fieldTransforms.filter(h=>c.covers(h.field))}else c=null,u=o.fieldTransforms;return new B0(new vt(a),c,u)}class Ic extends fo{_toFieldTransform(e){if(e.Ec!==2)throw e.Ec===1?e.wc(`${this._methodName}() can only appear at the top level of your update data`):e.wc(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Ic}}class Sd extends fo{_toFieldTransform(e){return new Vb(e.path,new Bs)}isEqual(e){return e instanceof Sd}}function kd(n,e,t,r){const i=n.Dc(1,e,t);Pd("Data must be an object, but it was:",i,r);const s=[],o=vt.empty();mr(r,(c,u)=>{const d=Dd(e,c,t);u=fe(u);const h=i.gc(d);if(u instanceof Ic)s.push(d);else{const m=mo(u,h);m!=null&&(s.push(d),o.set(d,m))}});const a=new Pt(s);return new Vy(o,a,i.fieldTransforms)}function Cd(n,e,t,r,i,s){const o=n.Dc(1,e,t),a=[au(e,r,t)],c=[i];if(s.length%2!=0)throw new G(V.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let m=0;m<s.length;m+=2)a.push(au(e,s[m])),c.push(s[m+1]);const u=[],d=vt.empty();for(let m=a.length-1;m>=0;--m)if(!Fy(u,a[m])){const _=a[m];let w=c[m];w=fe(w);const E=o.gc(_);if(w instanceof Ic)u.push(_);else{const v=mo(w,E);v!=null&&(u.push(_),d.set(_,v))}}const h=new Pt(u);return new Vy(d,h,o.fieldTransforms)}function q0(n,e,t,r=!1){return mo(t,n.Dc(r?4:3,e))}function mo(n,e){if(Uy(n=fe(n)))return Pd("Unsupported field value:",e,n),xy(n,e);if(n instanceof fo)return function(r,i){if(!My(i.Ec))throw i.wc(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.wc(`${r._methodName}() is not currently supported inside arrays`);const s=r._toFieldTransform(i);s&&i.fieldTransforms.push(s)}(n,e),null;if(n===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),n instanceof Array){if(e.settings.mc&&e.Ec!==4)throw e.wc("Nested arrays are not supported");return function(r,i){const s=[];let o=0;for(const a of r){let c=mo(a,i.yc(o));c==null&&(c={nullValue:"NULL_VALUE"}),s.push(c),o++}return{arrayValue:{values:s}}}(n,e)}return function(r,i){if((r=fe(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return Nb(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const s=F.fromDate(r);return{timestampValue:Da(i.serializer,s)}}if(r instanceof F){const s=new F(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Da(i.serializer,s)}}if(r instanceof Qt)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof At)return{bytesValue:iy(i.serializer,r._byteString)};if(r instanceof Le){const s=i.databaseId,o=r.firestore._databaseId;if(!o.isEqual(s))throw i.wc(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:od(r.firestore._databaseId||i.databaseId,r._key.path)}}if(r instanceof Yt)return function(o,a){return{mapValue:{fields:{[P_]:{stringValue:N_},[Sa]:{arrayValue:{values:o.toArray().map(u=>{if(typeof u!="number")throw a.wc("VectorValues must only contain numeric values.");return rd(a.serializer,u)})}}}}}}(r,i);throw i.wc(`Unsupported field value: ${uc(r)}`)}(n,e)}function xy(n,e){const t={};return A_(n)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):mr(n,(r,i)=>{const s=mo(i,e.Vc(r));s!=null&&(t[r]=s)}),{mapValue:{fields:t}}}function Uy(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof F||n instanceof Qt||n instanceof At||n instanceof Le||n instanceof fo||n instanceof Yt)}function Pd(n,e,t){if(!Uy(t)||!T_(t)){const r=uc(t);throw r==="an object"?e.wc(n+" a custom object"):e.wc(n+" "+r)}}function au(n,e,t){if((e=fe(e))instanceof Hr)return e._internalPath;if(typeof e=="string")return Dd(n,e);throw xa("Field path arguments must be of type string or ",n,!1,void 0,t)}const j0=new RegExp("[~\\*/\\[\\]]");function Dd(n,e,t){if(e.search(j0)>=0)throw xa(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,t);try{return new Hr(...e.split("."))._internalPath}catch(r){throw xa(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,t)}}function xa(n,e,t,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let a=`Function ${e}() called with invalid data`;t&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(s||o)&&(c+=" (found",s&&(c+=` in field ${r}`),o&&(c+=` in document ${i}`),c+=")"),new G(V.INVALID_ARGUMENT,a+n+c)}function Fy(n,e){return n.some(t=>t.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ua{constructor(e,t,r,i,s){this._firestore=e,this._userDataWriter=t,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new Le(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new z0(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(Ac("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class z0 extends Ua{data(){return super.data()}}function Ac(n,e){return typeof e=="string"?Dd(n,e):e instanceof Hr?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function By(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new G(V.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Nd{}class Rc extends Nd{}function Q(n,e,...t){let r=[];e instanceof Nd&&r.push(e),r=r.concat(t),function(s){const o=s.filter(c=>c instanceof bc).length,a=s.filter(c=>c instanceof po).length;if(o>1||o>0&&a>0)throw new G(V.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const i of r)n=i._apply(n);return n}class po extends Rc{constructor(e,t,r){super(),this._field=e,this._op=t,this._value=r,this.type="where"}static _create(e,t,r){return new po(e,t,r)}_apply(e){const t=this._parse(e);return $y(e._query,t),new en(e.firestore,e.converter,Jl(e._query,t))}_parse(e){const t=Li(e.firestore);return function(s,o,a,c,u,d,h){let m;if(u.isKeyField()){if(d==="array-contains"||d==="array-contains-any")throw new G(V.INVALID_ARGUMENT,`Invalid Query. You can't perform '${d}' queries on documentId().`);if(d==="in"||d==="not-in"){ep(h,d);const w=[];for(const E of h)w.push(Zm(c,s,E));m={arrayValue:{values:w}}}else m=Zm(c,s,h)}else d!=="in"&&d!=="not-in"&&d!=="array-contains-any"||ep(h,d),m=q0(a,o,h,d==="in"||d==="not-in");return qe.create(u,d,m)}(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value)}}function le(n,e,t){const r=e,i=Ac("where",n);return po._create(i,r,t)}class bc extends Nd{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new bc(e,t)}_parse(e){const t=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return t.length===1?t[0]:Xt.create(t,this._getOperator())}_apply(e){const t=this._parse(e);return t.getFilters().length===0?e:(function(i,s){let o=i;const a=s.getFlattenedFilters();for(const c of a)$y(o,c),o=Jl(o,c)}(e._query,t),new en(e.firestore,e.converter,Jl(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class Sc extends Rc{constructor(e,t){super(),this._field=e,this._direction=t,this.type="orderBy"}static _create(e,t){return new Sc(e,t)}_apply(e){const t=function(i,s,o){if(i.startAt!==null)throw new G(V.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(i.endAt!==null)throw new G(V.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new Fs(s,o)}(e._query,this._field,this._direction);return new en(e.firestore,e.converter,function(i,s){const o=i.explicitOrderBy.concat([s]);return new jr(i.path,i.collectionGroup,o,i.filters.slice(),i.limit,i.limitType,i.startAt,i.endAt)}(e._query,t))}}function me(n,e="asc"){const t=e,r=Ac("orderBy",n);return Sc._create(r,t)}class kc extends Rc{constructor(e,t,r){super(),this.type=e,this._limit=t,this._limitType=r}static _create(e,t,r){return new kc(e,t,r)}_apply(e){return new en(e.firestore,e.converter,Ca(e._query,this._limit,this._limitType))}}function De(n){return ZR("limit",n),kc._create("limit",n,"F")}function Zm(n,e,t){if(typeof(t=fe(t))=="string"){if(t==="")throw new G(V.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!B_(e)&&t.indexOf("/")!==-1)throw new G(V.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${t}' contains a '/' character.`);const r=e.path.child(Re.fromString(t));if(!ee.isDocumentKey(r))throw new G(V.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return pm(n,new ee(r))}if(t instanceof Le)return pm(n,t._key);throw new G(V.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${uc(t)}.`)}function ep(n,e){if(!Array.isArray(n)||n.length===0)throw new G(V.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function $y(n,e){const t=function(i,s){for(const o of i)for(const a of o.getFlattenedFilters())if(s.indexOf(a.op)>=0)return a.op;return null}(n.filters,function(i){switch(i){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(t!==null)throw t===e.op?new G(V.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new G(V.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${t.toString()}' filters.`)}class Od{convertValue(e,t="none"){switch(ar(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Be(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(or(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw ne(62114,{value:e})}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const r={};return mr(e,(i,s)=>{r[i]=this.convertValue(s,t)}),r}convertVectorValue(e){var t,r,i;const s=(i=(r=(t=e.fields)===null||t===void 0?void 0:t[Sa].arrayValue)===null||r===void 0?void 0:r.values)===null||i===void 0?void 0:i.map(o=>Be(o.doubleValue));return new Yt(s)}convertGeoPoint(e){return new Qt(Be(e.latitude),Be(e.longitude))}convertArray(e,t){return(e.values||[]).map(r=>this.convertValue(r,t))}convertServerTimestamp(e,t){switch(t){case"previous":const r=hc(e);return r==null?null:this.convertValue(r,t);case"estimate":return this.convertTimestamp(xs(e));default:return null}}convertTimestamp(e){const t=sr(e);return new F(t.seconds,t.nanos)}convertDocumentKey(e,t){const r=Re.fromString(e);Ee(dy(r),9688,{name:e});const i=new yi(r.get(1),r.get(3)),s=new ee(r.popFirst(5));return i.isEqual(t)||On(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cc(n,e,t){let r;return r=n?t&&(t.merge||t.mergeFields)?n.toFirestore(e,t):n.toFirestore(e):e,r}class G0 extends Od{constructor(e){super(),this.firestore=e}convertBytes(e){return new At(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new Le(this.firestore,null,t)}}class Rr{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Sn extends Ua{constructor(e,t,r,i,s,o){super(e,t,r,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new Ts(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const r=this._document.data.field(Ac("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,t.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new G(V.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,t={};return t.type=Sn._jsonSchemaVersion,t.bundle="",t.bundleSource="DocumentSnapshot",t.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?t:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),t.bundle="NOT SUPPORTED",t)}}Sn._jsonSchemaVersion="firestore/documentSnapshot/1.0",Sn._jsonSchema={type:ze("string",Sn._jsonSchemaVersion),bundleSource:ze("string","DocumentSnapshot"),bundleName:ze("string"),bundle:ze("string")};class Ts extends Sn{data(e={}){return super.data(e)}}class tr{constructor(e,t,r,i){this._firestore=e,this._userDataWriter=t,this._snapshot=i,this.metadata=new Rr(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach(t=>e.push(t)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach(r=>{e.call(t,new Ts(this._firestore,this._userDataWriter,r.key,r,new Rr(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new G(V.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(i,s){if(i._snapshot.oldDocs.isEmpty()){let o=0;return i._snapshot.docChanges.map(a=>({type:"added",doc:new Ts(i._firestore,i._userDataWriter,a.doc.key,a.doc,new Rr(i._snapshot.mutatedKeys.has(a.doc.key),i._snapshot.fromCache),i.query.converter),oldIndex:-1,newIndex:o++}))}{let o=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(a=>s||a.type!==3).map(a=>{const c=new Ts(i._firestore,i._userDataWriter,a.doc.key,a.doc,new Rr(i._snapshot.mutatedKeys.has(a.doc.key),i._snapshot.fromCache),i.query.converter);let u=-1,d=-1;return a.type!==0&&(u=o.indexOf(a.doc.key),o=o.delete(a.doc.key)),a.type!==1&&(o=o.add(a.doc),d=o.indexOf(a.doc.key)),{type:W0(a.type),doc:c,oldIndex:u,newIndex:d}})}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new G(V.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=tr._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=lc.newId();const t=[],r=[];return this.docs.forEach(i=>{i._document!==null&&(t.push(this._userDataWriter.convertObjectMap(i._document.data.value.mapValue.fields,"previous")),r.push(i.ref.path))}),e.bundle="NOT SUPPORTED",e}}function W0(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return ne(61501,{type:n})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function re(n){n=tt(n,Le);const e=tt(n.firestore,Bt);return M0(Wr(e),n._key).then(t=>qy(e,n,t))}tr._jsonSchemaVersion="firestore/querySnapshot/1.0",tr._jsonSchema={type:ze("string",tr._jsonSchemaVersion),bundleSource:ze("string","QuerySnapshot"),bundleName:ze("string"),bundle:ze("string")};class Pc extends Od{constructor(e){super(),this.firestore=e}convertBytes(e){return new At(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new Le(this.firestore,null,t)}}function J(n){n=tt(n,en);const e=tt(n.firestore,Bt),t=Wr(e),r=new Pc(e);return By(n._query),x0(t,n._query).then(i=>new tr(e,r,n,i))}function dn(n,e,t){n=tt(n,Le);const r=tt(n.firestore,Bt),i=Cc(n.converter,e,t);return Vi(r,[Tc(Li(r),"setDoc",n._key,i,n.converter!==null,t).toMutation(n._key,je.none())])}function X(n,e,t,...r){n=tt(n,Le);const i=tt(n.firestore,Bt),s=Li(i);let o;return o=typeof(e=fe(e))=="string"||e instanceof Hr?Cd(s,"updateDoc",n._key,e,t,r):kd(s,"updateDoc",n._key,e),Vi(i,[o.toMutation(n._key,je.exists(!0))])}function Ge(n){return Vi(tt(n.firestore,Bt),[new ao(n._key,je.none())])}function ge(n,e){const t=tt(n.firestore,Bt),r=x(n),i=Cc(n.converter,e);return Vi(t,[Tc(Li(n.firestore),"addDoc",r._key,i,n.converter!==null,{}).toMutation(r._key,je.exists(!1))]).then(()=>r)}function ur(n,...e){var t,r,i;n=fe(n);let s={includeMetadataChanges:!1,source:"default"},o=0;typeof e[o]!="object"||Xm(e[o])||(s=e[o++]);const a={includeMetadataChanges:s.includeMetadataChanges,source:s.source};if(Xm(e[o])){const h=e[o];e[o]=(t=h.next)===null||t===void 0?void 0:t.bind(h),e[o+1]=(r=h.error)===null||r===void 0?void 0:r.bind(h),e[o+2]=(i=h.complete)===null||i===void 0?void 0:i.bind(h)}let c,u,d;if(n instanceof Le)u=tt(n.firestore,Bt),d=fc(n._key.path),c={next:h=>{e[o]&&e[o](qy(u,n,h))},error:e[o+1],complete:e[o+2]};else{const h=tt(n,en);u=tt(h.firestore,Bt),d=h._query;const m=new Pc(u);c={next:_=>{e[o]&&e[o](new tr(u,m,h,_))},error:e[o+1],complete:e[o+2]},By(n._query)}return function(m,_,w,E){const v=new Ad(E),C=new vd(_,v,w);return m.asyncQueue.enqueueAndForget(()=>p(this,null,function*(){return yd(yield Ma(m),C)})),()=>{v.Ou(),m.asyncQueue.enqueueAndForget(()=>p(this,null,function*(){return wd(yield Ma(m),C)}))}}(Wr(u),d,a,c)}function Vi(n,e){return function(r,i){const s=new cn;return r.asyncQueue.enqueueAndForget(()=>p(this,null,function*(){return v0(yield L0(r),i,s)})),s.promise}(Wr(n),e)}function qy(n,e,t){const r=t.docs.get(e._key),i=new Pc(n);return new Sn(n,i,e._key,r,new Rr(t.hasPendingWrites,t.fromCache),e.converter)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const H0={maxAttempts:5};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jy{constructor(e,t){this._firestore=e,this._commitHandler=t,this._mutations=[],this._committed=!1,this._dataReader=Li(e)}set(e,t,r){this._verifyNotCommitted();const i=Qn(e,this._firestore),s=Cc(i.converter,t,r),o=Tc(this._dataReader,"WriteBatch.set",i._key,s,i.converter!==null,r);return this._mutations.push(o.toMutation(i._key,je.none())),this}update(e,t,r,...i){this._verifyNotCommitted();const s=Qn(e,this._firestore);let o;return o=typeof(t=fe(t))=="string"||t instanceof Hr?Cd(this._dataReader,"WriteBatch.update",s._key,t,r,i):kd(this._dataReader,"WriteBatch.update",s._key,t),this._mutations.push(o.toMutation(s._key,je.exists(!0))),this}delete(e){this._verifyNotCommitted();const t=Qn(e,this._firestore);return this._mutations=this._mutations.concat(new ao(t._key,je.none())),this}commit(){return this._verifyNotCommitted(),this._committed=!0,this._mutations.length>0?this._commitHandler(this._mutations):Promise.resolve()}_verifyNotCommitted(){if(this._committed)throw new G(V.FAILED_PRECONDITION,"A write batch can no longer be used after commit() has been called.")}}function Qn(n,e){if((n=fe(n)).firestore!==e)throw new G(V.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class K0{constructor(e,t){this._firestore=e,this._transaction=t,this._dataReader=Li(e)}get(e){const t=Qn(e,this._firestore),r=new G0(this._firestore);return this._transaction.lookup([t._key]).then(i=>{if(!i||i.length!==1)return ne(24041);const s=i[0];if(s.isFoundDocument())return new Ua(this._firestore,r,s.key,s,t.converter);if(s.isNoDocument())return new Ua(this._firestore,r,t._key,null,t.converter);throw ne(18433,{doc:s})})}set(e,t,r){const i=Qn(e,this._firestore),s=Cc(i.converter,t,r),o=Tc(this._dataReader,"Transaction.set",i._key,s,i.converter!==null,r);return this._transaction.set(i._key,o),this}update(e,t,r,...i){const s=Qn(e,this._firestore);let o;return o=typeof(t=fe(t))=="string"||t instanceof Hr?Cd(this._dataReader,"Transaction.update",s._key,t,r,i):kd(this._dataReader,"Transaction.update",s._key,t),this._transaction.update(s._key,o),this}delete(e){const t=Qn(e,this._firestore);return this._transaction.delete(t._key),this}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zy extends K0{constructor(e,t){super(e,t),this._firestore=e}get(e){const t=Qn(e,this._firestore),r=new Pc(this._firestore);return super.get(e).then(i=>new Sn(this._firestore,r,t._key,i._document,new Rr(!1,!1),t.converter))}}function Gy(n,e,t){n=tt(n,Bt);const r=Object.assign(Object.assign({},H0),t);return function(s){if(s.maxAttempts<1)throw new G(V.INVALID_ARGUMENT,"Max attempts must be at least 1")}(r),function(s,o,a){const c=new cn;return s.asyncQueue.enqueueAndForget(()=>p(this,null,function*(){const u=yield V0(s);new D0(s.asyncQueue,u,a,o,c).zu()})),c.promise}(Wr(n),i=>e(new zy(n,i)),r)}function j(){return new Sd("serverTimestamp")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wn(n){return Wr(n=tt(n,Bt)),new jy(n,e=>Vi(n,e))}(function(e,t=!0){(function(i){Pi=i})(fr),Ft(new Vt("firestore",(r,{instanceIdentifier:i,options:s})=>{const o=r.getProvider("app").getImmediate(),a=new Bt(new WR(r.getProvider("auth-internal")),new QR(o,r.getProvider("app-check-internal")),function(u,d){if(!Object.prototype.hasOwnProperty.apply(u.options,["projectId"]))throw new G(V.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new yi(u.options.projectId,d)}(o,i),o);return s=Object.assign({useFetchStreams:t},s),a._setSettings(s),a},"PUBLIC").setMultipleInstances(!0)),pt(tm,nm,e),pt(tm,nm,"esm2017")})();const Q0=Object.freeze(Object.defineProperty({__proto__:null,AbstractUserDataWriter:Od,Bytes:At,CollectionReference:bn,DocumentReference:Le,DocumentSnapshot:Sn,FieldPath:Hr,FieldValue:fo,Firestore:Bt,FirestoreError:G,GeoPoint:Qt,Query:en,QueryCompositeFilterConstraint:bc,QueryConstraint:Rc,QueryDocumentSnapshot:Ts,QueryFieldFilterConstraint:po,QueryLimitConstraint:kc,QueryOrderByConstraint:Sc,QuerySnapshot:tr,SnapshotMetadata:Rr,Timestamp:F,Transaction:zy,VectorValue:Yt,WriteBatch:jy,_AutoId:lc,_ByteString:rt,_DatabaseId:yi,_DocumentKey:ee,_EmptyAuthCredentialsProvider:w_,_FieldPath:Ze,_cast:tt,_logWarn:Ln,_validateIsNotUsedTogether:v_,addDoc:ge,collection:q,collectionGroup:Ly,connectFirestoreEmulator:Oy,deleteDoc:Ge,doc:x,ensureFirestoreConfigured:Wr,executeWrite:Vi,getDoc:re,getDocs:J,getFirestore:ou,limit:De,onSnapshot:ur,orderBy:me,query:Q,runTransaction:Gy,serverTimestamp:j,setDoc:dn,updateDoc:X,where:le,writeBatch:Wn},Symbol.toStringTag,{value:"Module"}));var Y0="firebase",J0="11.10.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */pt(Y0,J0,"app");const Wy="@firebase/installations",Ld="0.6.18";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hy=1e4,Ky=`w:${Ld}`,Qy="FIS_v2",X0="https://firebaseinstallations.googleapis.com/v1",Z0=60*60*1e3,ek="installations",tk="Installations";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nk={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},Or=new $r(ek,tk,nk);function Yy(n){return n instanceof qt&&n.code.includes("request-failed")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jy({projectId:n}){return`${X0}/projects/${n}/installations`}function Xy(n){return{token:n.token,requestStatus:2,expiresIn:ik(n.expiresIn),creationTime:Date.now()}}function Zy(n,e){return p(this,null,function*(){const r=(yield e.json()).error;return Or.create("request-failed",{requestName:n,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})})}function ew({apiKey:n}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":n})}function rk(n,{refreshToken:e}){const t=ew(n);return t.append("Authorization",sk(e)),t}function tw(n){return p(this,null,function*(){const e=yield n();return e.status>=500&&e.status<600?n():e})}function ik(n){return Number(n.replace("s","000"))}function sk(n){return`${Qy} ${n}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ok(r,i){return p(this,arguments,function*({appConfig:n,heartbeatServiceProvider:e},{fid:t}){const s=Jy(n),o=ew(n),a=e.getImmediate({optional:!0});if(a){const h=yield a.getHeartbeatsHeader();h&&o.append("x-firebase-client",h)}const c={fid:t,authVersion:Qy,appId:n.appId,sdkVersion:Ky},u={method:"POST",headers:o,body:JSON.stringify(c)},d=yield tw(()=>fetch(s,u));if(d.ok){const h=yield d.json();return{fid:h.fid||t,registrationStatus:2,refreshToken:h.refreshToken,authToken:Xy(h.authToken)}}else throw yield Zy("Create Installation",d)})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nw(n){return new Promise(e=>{setTimeout(e,n)})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ak(n){return btoa(String.fromCharCode(...n)).replace(/\+/g,"-").replace(/\//g,"_")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ck=/^[cdef][\w-]{21}$/,cu="";function lk(){try{const n=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(n),n[0]=112+n[0]%16;const t=uk(n);return ck.test(t)?t:cu}catch(n){return cu}}function uk(n){return ak(n).substr(0,22)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dc(n){return`${n.appName}!${n.appId}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rw=new Map;function iw(n,e){const t=Dc(n);sw(t,e),dk(t,e)}function sw(n,e){const t=rw.get(n);if(t)for(const r of t)r(e)}function dk(n,e){const t=hk();t&&t.postMessage({key:n,fid:e}),fk()}let br=null;function hk(){return!br&&"BroadcastChannel"in self&&(br=new BroadcastChannel("[Firebase] FID Change"),br.onmessage=n=>{sw(n.data.key,n.data.fid)}),br}function fk(){rw.size===0&&br&&(br.close(),br=null)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mk="firebase-installations-database",pk=1,Lr="firebase-installations-store";let El=null;function Vd(){return El||(El=pg(mk,pk,{upgrade:(n,e)=>{switch(e){case 0:n.createObjectStore(Lr)}}})),El}function Fa(n,e){return p(this,null,function*(){const t=Dc(n),i=(yield Vd()).transaction(Lr,"readwrite"),s=i.objectStore(Lr),o=yield s.get(t);return yield s.put(e,t),yield i.done,(!o||o.fid!==e.fid)&&iw(n,e.fid),e})}function ow(n){return p(this,null,function*(){const e=Dc(n),r=(yield Vd()).transaction(Lr,"readwrite");yield r.objectStore(Lr).delete(e),yield r.done})}function Nc(n,e){return p(this,null,function*(){const t=Dc(n),i=(yield Vd()).transaction(Lr,"readwrite"),s=i.objectStore(Lr),o=yield s.get(t),a=e(o);return a===void 0?yield s.delete(t):yield s.put(a,t),yield i.done,a&&(!o||o.fid!==a.fid)&&iw(n,a.fid),a})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Md(n){return p(this,null,function*(){let e;const t=yield Nc(n.appConfig,r=>{const i=gk(r),s=_k(n,i);return e=s.registrationPromise,s.installationEntry});return t.fid===cu?{installationEntry:yield e}:{installationEntry:t,registrationPromise:e}})}function gk(n){const e=n||{fid:lk(),registrationStatus:0};return aw(e)}function _k(n,e){if(e.registrationStatus===0){if(!navigator.onLine){const i=Promise.reject(Or.create("app-offline"));return{installationEntry:e,registrationPromise:i}}const t={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},r=yk(n,t);return{installationEntry:t,registrationPromise:r}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:wk(n)}:{installationEntry:e}}function yk(n,e){return p(this,null,function*(){try{const t=yield ok(n,e);return Fa(n.appConfig,t)}catch(t){throw Yy(t)&&t.customData.serverCode===409?yield ow(n.appConfig):yield Fa(n.appConfig,{fid:e.fid,registrationStatus:0}),t}})}function wk(n){return p(this,null,function*(){let e=yield tp(n.appConfig);for(;e.registrationStatus===1;)yield nw(100),e=yield tp(n.appConfig);if(e.registrationStatus===0){const{installationEntry:t,registrationPromise:r}=yield Md(n);return r||t}return e})}function tp(n){return Nc(n,e=>{if(!e)throw Or.create("installation-not-found");return aw(e)})}function aw(n){return Ek(n)?{fid:n.fid,registrationStatus:0}:n}function Ek(n){return n.registrationStatus===1&&n.registrationTime+Hy<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vk(r,i){return p(this,arguments,function*({appConfig:n,heartbeatServiceProvider:e},t){const s=Tk(n,t),o=rk(n,t),a=e.getImmediate({optional:!0});if(a){const h=yield a.getHeartbeatsHeader();h&&o.append("x-firebase-client",h)}const c={installation:{sdkVersion:Ky,appId:n.appId}},u={method:"POST",headers:o,body:JSON.stringify(c)},d=yield tw(()=>fetch(s,u));if(d.ok){const h=yield d.json();return Xy(h)}else throw yield Zy("Generate Auth Token",d)})}function Tk(n,{fid:e}){return`${Jy(n)}/${e}/authTokens:generate`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xd(n,e=!1){return p(this,null,function*(){let t;const r=yield Nc(n.appConfig,s=>{if(!cw(s))throw Or.create("not-registered");const o=s.authToken;if(!e&&Rk(o))return s;if(o.requestStatus===1)return t=Ik(n,e),s;{if(!navigator.onLine)throw Or.create("app-offline");const a=Sk(s);return t=Ak(n,a),a}});return t?yield t:r.authToken})}function Ik(n,e){return p(this,null,function*(){let t=yield np(n.appConfig);for(;t.authToken.requestStatus===1;)yield nw(100),t=yield np(n.appConfig);const r=t.authToken;return r.requestStatus===0?xd(n,e):r})}function np(n){return Nc(n,e=>{if(!cw(e))throw Or.create("not-registered");const t=e.authToken;return kk(t)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}function Ak(n,e){return p(this,null,function*(){try{const t=yield vk(n,e),r=Object.assign(Object.assign({},e),{authToken:t});return yield Fa(n.appConfig,r),t}catch(t){if(Yy(t)&&(t.customData.serverCode===401||t.customData.serverCode===404))yield ow(n.appConfig);else{const r=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});yield Fa(n.appConfig,r)}throw t}})}function cw(n){return n!==void 0&&n.registrationStatus===2}function Rk(n){return n.requestStatus===2&&!bk(n)}function bk(n){const e=Date.now();return e<n.creationTime||n.creationTime+n.expiresIn<e+Z0}function Sk(n){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},n),{authToken:e})}function kk(n){return n.requestStatus===1&&n.requestTime+Hy<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ck(n){return p(this,null,function*(){const e=n,{installationEntry:t,registrationPromise:r}=yield Md(e);return r?r.catch(console.error):xd(e).catch(console.error),t.fid})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pk(n,e=!1){return p(this,null,function*(){const t=n;return yield Dk(t),(yield xd(t,e)).token})}function Dk(n){return p(this,null,function*(){const{registrationPromise:e}=yield Md(n);e&&(yield e)})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nk(n){if(!n||!n.options)throw vl("App Configuration");if(!n.name)throw vl("App Name");const e=["projectId","apiKey","appId"];for(const t of e)if(!n.options[t])throw vl(t);return{appName:n.name,projectId:n.options.projectId,apiKey:n.options.apiKey,appId:n.options.appId}}function vl(n){return Or.create("missing-app-config-values",{valueName:n})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lw="installations",Ok="installations-internal",Lk=n=>{const e=n.getProvider("app").getImmediate(),t=Nk(e),r=Fn(e,"heartbeat");return{app:e,appConfig:t,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},Vk=n=>{const e=n.getProvider("app").getImmediate(),t=Fn(e,lw).getImmediate();return{getId:()=>Ck(t),getToken:i=>Pk(t,i)}};function Mk(){Ft(new Vt(lw,Lk,"PUBLIC")),Ft(new Vt(Ok,Vk,"PRIVATE"))}Mk();pt(Wy,Ld);pt(Wy,Ld,"esm2017");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ba="analytics",xk="firebase_id",Uk="origin",Fk=60*1e3,Bk="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",Ud="https://www.googletagmanager.com/gtag/js";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bt=new Xs("@firebase/analytics");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $k={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-initialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},Ot=new $r("analytics","Analytics",$k);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qk(n){if(!n.startsWith(Ud)){const e=Ot.create("invalid-gtag-resource",{gtagURL:n});return bt.warn(e.message),""}return n}function uw(n){return Promise.all(n.map(e=>e.catch(t=>t)))}function jk(n,e){let t;return window.trustedTypes&&(t=window.trustedTypes.createPolicy(n,e)),t}function zk(n,e){const t=jk("firebase-js-sdk-policy",{createScriptURL:qk}),r=document.createElement("script"),i=`${Ud}?l=${n}&id=${e}`;r.src=t?t==null?void 0:t.createScriptURL(i):i,r.async=!0,document.head.appendChild(r)}function Gk(n){let e=[];return Array.isArray(window[n])?e=window[n]:window[n]=e,e}function Wk(n,e,t,r,i,s){return p(this,null,function*(){const o=r[i];try{if(o)yield e[o];else{const c=(yield uw(t)).find(u=>u.measurementId===i);c&&(yield e[c.appId])}}catch(a){bt.error(a)}n("config",i,s)})}function Hk(n,e,t,r,i){return p(this,null,function*(){try{let s=[];if(i&&i.send_to){let o=i.send_to;Array.isArray(o)||(o=[o]);const a=yield uw(t);for(const c of o){const u=a.find(h=>h.measurementId===c),d=u&&e[u.appId];if(d)s.push(d);else{s=[];break}}}s.length===0&&(s=Object.values(e)),yield Promise.all(s),n("event",r,i||{})}catch(s){bt.error(s)}})}function Kk(n,e,t,r){function i(s,...o){return p(this,null,function*(){try{if(s==="event"){const[a,c]=o;yield Hk(n,e,t,a,c)}else if(s==="config"){const[a,c]=o;yield Wk(n,e,t,r,a,c)}else if(s==="consent"){const[a,c]=o;n("consent",a,c)}else if(s==="get"){const[a,c,u]=o;n("get",a,c,u)}else if(s==="set"){const[a]=o;n("set",a)}else n(s,...o)}catch(a){bt.error(a)}})}return i}function Qk(n,e,t,r,i){let s=function(...o){window[r].push(arguments)};return window[i]&&typeof window[i]=="function"&&(s=window[i]),window[i]=Kk(s,n,e,t),{gtagCore:s,wrappedGtag:window[i]}}function Yk(n){const e=window.document.getElementsByTagName("script");for(const t of Object.values(e))if(t.src&&t.src.includes(Ud)&&t.src.includes(n))return t;return null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jk=30,Xk=1e3;class Zk{constructor(e={},t=Xk){this.throttleMetadata=e,this.intervalMillis=t}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,t){this.throttleMetadata[e]=t}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const dw=new Zk;function eC(n){return new Headers({Accept:"application/json","x-goog-api-key":n})}function tC(n){return p(this,null,function*(){var e;const{appId:t,apiKey:r}=n,i={method:"GET",headers:eC(r)},s=Bk.replace("{app-id}",t),o=yield fetch(s,i);if(o.status!==200&&o.status!==304){let a="";try{const c=yield o.json();!((e=c.error)===null||e===void 0)&&e.message&&(a=c.error.message)}catch(c){}throw Ot.create("config-fetch-failed",{httpStatus:o.status,responseMessage:a})}return o.json()})}function nC(r){return p(this,arguments,function*(n,e=dw,t){const{appId:i,apiKey:s,measurementId:o}=n.options;if(!i)throw Ot.create("no-app-id");if(!s){if(o)return{measurementId:o,appId:i};throw Ot.create("no-api-key")}const a=e.getThrottleMetadata(i)||{backoffCount:0,throttleEndTimeMillis:Date.now()},c=new sC;return setTimeout(()=>p(this,null,function*(){c.abort()}),Fk),hw({appId:i,apiKey:s,measurementId:o},a,c,e)})}function hw(s,o,a){return p(this,arguments,function*(n,{throttleEndTimeMillis:e,backoffCount:t},r,i=dw){var c;const{appId:u,measurementId:d}=n;try{yield rC(r,e)}catch(h){if(d)return bt.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${d} provided in the "measurementId" field in the local Firebase config. [${h==null?void 0:h.message}]`),{appId:u,measurementId:d};throw h}try{const h=yield tC(n);return i.deleteThrottleMetadata(u),h}catch(h){const m=h;if(!iC(m)){if(i.deleteThrottleMetadata(u),d)return bt.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${d} provided in the "measurementId" field in the local Firebase config. [${m==null?void 0:m.message}]`),{appId:u,measurementId:d};throw h}const _=Number((c=m==null?void 0:m.customData)===null||c===void 0?void 0:c.httpStatus)===503?Rf(t,i.intervalMillis,Jk):Rf(t,i.intervalMillis),w={throttleEndTimeMillis:Date.now()+_,backoffCount:t+1};return i.setThrottleMetadata(u,w),bt.debug(`Calling attemptFetch again in ${_} millis`),hw(n,w,r,i)}})}function rC(n,e){return new Promise((t,r)=>{const i=Math.max(e-Date.now(),0),s=setTimeout(t,i);n.addEventListener(()=>{clearTimeout(s),r(Ot.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function iC(n){if(!(n instanceof qt)||!n.customData)return!1;const e=Number(n.customData.httpStatus);return e===429||e===500||e===503||e===504}class sC{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}function oC(n,e,t,r,i){return p(this,null,function*(){if(i&&i.global){n("event",t,r);return}else{const s=yield e,o=Object.assign(Object.assign({},r),{send_to:s});n("event",t,o)}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function aC(){return p(this,null,function*(){if(ug())try{yield dg()}catch(n){return bt.warn(Ot.create("indexeddb-unavailable",{errorInfo:n==null?void 0:n.toString()}).message),!1}else return bt.warn(Ot.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0})}function cC(n,e,t,r,i,s,o){return p(this,null,function*(){var a;const c=nC(n);c.then(_=>{t[_.measurementId]=_.appId,n.options.measurementId&&_.measurementId!==n.options.measurementId&&bt.warn(`The measurement ID in the local Firebase config (${n.options.measurementId}) does not match the measurement ID fetched from the server (${_.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(_=>bt.error(_)),e.push(c);const u=aC().then(_=>{if(_)return r.getId()}),[d,h]=yield Promise.all([c,u]);Yk(s)||zk(s,d.measurementId),i("js",new Date);const m=(a=o==null?void 0:o.config)!==null&&a!==void 0?a:{};return m[Uk]="firebase",m.update=!0,h!=null&&(m[xk]=h),i("config",d.measurementId,m),d.measurementId})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lC{constructor(e){this.app=e}_delete(){return delete Is[this.app.options.appId],Promise.resolve()}}let Is={},rp=[];const ip={};let Tl="dataLayer",uC="gtag",sp,fw,op=!1;function dC(){const n=[];if(cg()&&n.push("This is a browser extension environment."),_T()||n.push("Cookies are not available."),n.length>0){const e=n.map((r,i)=>`(${i+1}) ${r}`).join(" "),t=Ot.create("invalid-analytics-context",{errorInfo:e});bt.warn(t.message)}}function hC(n,e,t){dC();const r=n.options.appId;if(!r)throw Ot.create("no-app-id");if(!n.options.apiKey)if(n.options.measurementId)bt.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${n.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw Ot.create("no-api-key");if(Is[r]!=null)throw Ot.create("already-exists",{id:r});if(!op){Gk(Tl);const{wrappedGtag:s,gtagCore:o}=Qk(Is,rp,ip,Tl,uC);fw=s,sp=o,op=!0}return Is[r]=cC(n,rp,ip,e,sp,Tl,t),new lC(n)}function fC(n=Zs()){n=fe(n);const e=Fn(n,Ba);return e.isInitialized()?e.getImmediate():mC(n)}function mC(n,e={}){const t=Fn(n,Ba);if(t.isInitialized()){const i=t.getImmediate();if(Pn(e,t.getOptions()))return i;throw Ot.create("already-initialized")}return t.initialize({options:e})}function pC(n,e,t,r){n=fe(n),oC(fw,Is[n.app.options.appId],e,t,r).catch(i=>bt.error(i))}const ap="@firebase/analytics",cp="0.10.17";function gC(){Ft(new Vt(Ba,(e,{options:t})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("installations-internal").getImmediate();return hC(r,i,t)},"PUBLIC")),Ft(new Vt("analytics-internal",n,"PRIVATE")),pt(ap,cp),pt(ap,cp,"esm2017");function n(e){try{const t=e.getProvider(Ba).getImmediate();return{logEvent:(r,i,s)=>pC(t,r,i,s)}}catch(t){throw Ot.create("interop-component-reg-failed",{reason:t})}}}gC();var lp={};const up="@firebase/database",dp="1.0.20";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let mw="";function _C(n){mw=n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yC{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,t){t==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),st(t))}get(e){const t=this.domStorage_.getItem(this.prefixedName_(e));return t==null?null:Ds(t)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wC{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,t){t==null?delete this.cache_[e]:this.cache_[e]=t}get(e){return Un(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pw=function(n){try{if(typeof window!="undefined"&&typeof window[n]!="undefined"){const e=window[n];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new yC(e)}}catch(e){}return new wC},Sr=pw("localStorage"),EC=pw("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hi=new Xs("@firebase/database"),vC=function(){let n=1;return function(){return n++}}(),gw=function(n){const e=kT(n),t=new IT;t.update(e);const r=t.digest();return Pu.encodeByteArray(r)},go=function(...n){let e="";for(let t=0;t<n.length;t++){const r=n[t];Array.isArray(r)||r&&typeof r=="object"&&typeof r.length=="number"?e+=go.apply(null,r):typeof r=="object"?e+=st(r):e+=r,e+=" "}return e};let As=null,hp=!0;const TC=function(n,e){H(!e,"Can't turn on custom loggers persistently."),hi.logLevel=de.VERBOSE,As=hi.log.bind(hi)},ht=function(...n){if(hp===!0&&(hp=!1,As===null&&EC.get("logging_enabled")===!0&&TC()),As){const e=go.apply(null,n);As(e)}},_o=function(n){return function(...e){ht(n,...e)}},lu=function(...n){const e="FIREBASE INTERNAL ERROR: "+go(...n);hi.error(e)},Mn=function(...n){const e=`FIREBASE FATAL ERROR: ${go(...n)}`;throw hi.error(e),new Error(e)},Lt=function(...n){const e="FIREBASE WARNING: "+go(...n);hi.warn(e)},IC=function(){typeof window!="undefined"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&Lt("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},_w=function(n){return typeof n=="number"&&(n!==n||n===Number.POSITIVE_INFINITY||n===Number.NEGATIVE_INFINITY)},AC=function(n){if(document.readyState==="complete")n();else{let e=!1;const t=function(){if(!document.body){setTimeout(t,Math.floor(10));return}e||(e=!0,n())};document.addEventListener?(document.addEventListener("DOMContentLoaded",t,!1),window.addEventListener("load",t,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&t()}),window.attachEvent("onload",t))}},Ii="[MIN_NAME]",Vr="[MAX_NAME]",Mi=function(n,e){if(n===e)return 0;if(n===Ii||e===Vr)return-1;if(e===Ii||n===Vr)return 1;{const t=fp(n),r=fp(e);return t!==null?r!==null?t-r===0?n.length-e.length:t-r:-1:r!==null?1:n<e?-1:1}},RC=function(n,e){return n===e?0:n<e?-1:1},ns=function(n,e){if(e&&n in e)return e[n];throw new Error("Missing required key ("+n+") in object: "+st(e))},Fd=function(n){if(typeof n!="object"||n===null)return st(n);const e=[];for(const r in n)e.push(r);e.sort();let t="{";for(let r=0;r<e.length;r++)r!==0&&(t+=","),t+=st(e[r]),t+=":",t+=Fd(n[e[r]]);return t+="}",t},yw=function(n,e){const t=n.length;if(t<=e)return[n];const r=[];for(let i=0;i<t;i+=e)i+e>t?r.push(n.substring(i,t)):r.push(n.substring(i,i+e));return r};function $t(n,e){for(const t in n)n.hasOwnProperty(t)&&e(t,n[t])}const ww=function(n){H(!_w(n),"Invalid JSON number");const e=11,t=52,r=(1<<e-1)-1;let i,s,o,a,c;n===0?(s=0,o=0,i=1/n===-1/0?1:0):(i=n<0,n=Math.abs(n),n>=Math.pow(2,1-r)?(a=Math.min(Math.floor(Math.log(n)/Math.LN2),r),s=a+r,o=Math.round(n*Math.pow(2,t-a)-Math.pow(2,t))):(s=0,o=Math.round(n/Math.pow(2,1-r-t))));const u=[];for(c=t;c;c-=1)u.push(o%2?1:0),o=Math.floor(o/2);for(c=e;c;c-=1)u.push(s%2?1:0),s=Math.floor(s/2);u.push(i?1:0),u.reverse();const d=u.join("");let h="";for(c=0;c<64;c+=8){let m=parseInt(d.substr(c,8),2).toString(16);m.length===1&&(m="0"+m),h=h+m}return h.toLowerCase()},bC=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},SC=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"},kC=new RegExp("^-?(0*)\\d{1,10}$"),CC=-2147483648,PC=2147483647,fp=function(n){if(kC.test(n)){const e=Number(n);if(e>=CC&&e<=PC)return e}return null},yo=function(n){try{n()}catch(e){setTimeout(()=>{const t=e.stack||"";throw Lt("Exception was thrown by user callback.",t),e},Math.floor(0))}},DC=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},Rs=function(n,e){const t=setTimeout(n,e);return typeof t=="number"&&typeof Deno!="undefined"&&Deno.unrefTimer?Deno.unrefTimer(t):typeof t=="object"&&t.unref&&t.unref(),t};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NC{constructor(e,t){this.appCheckProvider=t,this.appName=e.name,Et(e)&&e.settings.appCheckToken&&(this.serverAppAppCheckToken=e.settings.appCheckToken),this.appCheck=t==null?void 0:t.getImmediate({optional:!0}),this.appCheck||t==null||t.get().then(r=>this.appCheck=r)}getToken(e){if(this.serverAppAppCheckToken){if(e)throw new Error("Attempted reuse of `FirebaseServerApp.appCheckToken` after previous usage failed.");return Promise.resolve({token:this.serverAppAppCheckToken})}return this.appCheck?this.appCheck.getToken(e):new Promise((t,r)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(t,r):t(null)},0)})}addTokenChangeListener(e){var t;(t=this.appCheckProvider)===null||t===void 0||t.get().then(r=>r.addTokenListener(e))}notifyForInvalidToken(){Lt(`Provided AppCheck credentials for the app named "${this.appName}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OC{constructor(e,t,r){this.appName_=e,this.firebaseOptions_=t,this.authProvider_=r,this.auth_=null,this.auth_=r.getImmediate({optional:!0}),this.auth_||r.onInit(i=>this.auth_=i)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(t=>t&&t.code==="auth/token-not-initialized"?(ht("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(t)):new Promise((t,r)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(t,r):t(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(t=>t.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(t=>t.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',Lt(e)}}class ha{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}ha.OWNER="owner";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bd="5",Ew="v",vw="s",Tw="r",Iw="f",Aw=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,Rw="ls",bw="p",uu="ac",Sw="websocket",kw="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cw{constructor(e,t,r,i,s=!1,o="",a=!1,c=!1,u=null){this.secure=t,this.namespace=r,this.webSocketOnly=i,this.nodeAdmin=s,this.persistenceKey=o,this.includeNamespaceInQueryParams=a,this.isUsingEmulator=c,this.emulatorOptions=u,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=Sr.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&Sr.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",t=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${t}`}}function LC(n){return n.host!==n.internalHost||n.isCustomHost()||n.includeNamespaceInQueryParams}function Pw(n,e,t){H(typeof e=="string","typeof type must == string"),H(typeof t=="object","typeof params must == object");let r;if(e===Sw)r=(n.secure?"wss://":"ws://")+n.internalHost+"/.ws?";else if(e===kw)r=(n.secure?"https://":"http://")+n.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);LC(n)&&(t.ns=n.namespace);const i=[];return $t(t,(s,o)=>{i.push(s+"="+o)}),r+i.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VC{constructor(){this.counters_={}}incrementCounter(e,t=1){Un(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=t}get(){return iT(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Il={},Al={};function $d(n){const e=n.toString();return Il[e]||(Il[e]=new VC),Il[e]}function MC(n,e){const t=n.toString();return Al[t]||(Al[t]=e()),Al[t]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xC{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,t){this.closeAfterResponse=e,this.onClose=t,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,t){for(this.pendingResponses[e]=t;this.pendingResponses[this.currentResponseNum];){const r=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let i=0;i<r.length;++i)r[i]&&yo(()=>{this.onMessage_(r[i])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mp="start",UC="close",FC="pLPCommand",BC="pRTLPCB",Dw="id",Nw="pw",Ow="ser",$C="cb",qC="seg",jC="ts",zC="d",GC="dframe",Lw=1870,Vw=30,WC=Lw-Vw,HC=25e3,KC=3e4;class si{constructor(e,t,r,i,s,o,a){this.connId=e,this.repoInfo=t,this.applicationId=r,this.appCheckToken=i,this.authToken=s,this.transportSessionId=o,this.lastSessionId=a,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=_o(e),this.stats_=$d(t),this.urlFn=c=>(this.appCheckToken&&(c[uu]=this.appCheckToken),Pw(t,kw,c))}open(e,t){this.curSegmentNum=0,this.onDisconnect_=t,this.myPacketOrderer=new xC(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(KC)),AC(()=>{if(this.isClosed_)return;this.scriptTagHolder=new qd((...s)=>{const[o,a,c,u,d]=s;if(this.incrementIncomingBytes_(s),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===mp)this.id=a,this.password=c;else if(o===UC)a?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(a,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...s)=>{const[o,a]=s;this.incrementIncomingBytes_(s),this.myPacketOrderer.handleResponse(o,a)},()=>{this.onClosed_()},this.urlFn);const r={};r[mp]="t",r[Ow]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(r[$C]=this.scriptTagHolder.uniqueCallbackIdentifier),r[Ew]=Bd,this.transportSessionId&&(r[vw]=this.transportSessionId),this.lastSessionId&&(r[Rw]=this.lastSessionId),this.applicationId&&(r[bw]=this.applicationId),this.appCheckToken&&(r[uu]=this.appCheckToken),typeof location!="undefined"&&location.hostname&&Aw.test(location.hostname)&&(r[Tw]=Iw);const i=this.urlFn(r);this.log_("Connecting via long-poll to "+i),this.scriptTagHolder.addTag(i,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){si.forceAllow_=!0}static forceDisallow(){si.forceDisallow_=!0}static isAvailable(){return si.forceAllow_?!0:!si.forceDisallow_&&typeof document!="undefined"&&document.createElement!=null&&!bC()&&!SC()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const t=st(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const r=rg(t),i=yw(r,WC);for(let s=0;s<i.length;s++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[s]),this.curSegmentNum++}addDisconnectPingFrame(e,t){this.myDisconnFrame=document.createElement("iframe");const r={};r[GC]="t",r[Dw]=e,r[Nw]=t,this.myDisconnFrame.src=this.urlFn(r),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const t=st(e).length;this.bytesReceived+=t,this.stats_.incrementCounter("bytes_received",t)}}class qd{constructor(e,t,r,i){this.onDisconnect=r,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=vC(),window[FC+this.uniqueCallbackIdentifier]=e,window[BC+this.uniqueCallbackIdentifier]=t,this.myIFrame=qd.createIFrame_();let s="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(s='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+s+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(a){ht("frame writing exception"),a.stack&&ht(a.stack),ht(a)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||ht("No IE domain setting required")}catch(t){const r=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+r+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,t){for(this.myID=e,this.myPW=t,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[Dw]=this.myID,e[Nw]=this.myPW,e[Ow]=this.currentSerial;let t=this.urlFn(e),r="",i=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+Vw+r.length<=Lw;){const o=this.pendingSegs.shift();r=r+"&"+qC+i+"="+o.seg+"&"+jC+i+"="+o.ts+"&"+zC+i+"="+o.d,i++}return t=t+r,this.addLongPollTag_(t,this.currentSerial),!0}else return!1}enqueueSegment(e,t,r){this.pendingSegs.push({seg:e,ts:t,d:r}),this.alive&&this.newRequest_()}addLongPollTag_(e,t){this.outstandingRequests.add(t);const r=()=>{this.outstandingRequests.delete(t),this.newRequest_()},i=setTimeout(r,Math.floor(HC)),s=()=>{clearTimeout(i),r()};this.addTag(e,s)}addTag(e,t){setTimeout(()=>{try{if(!this.sendNewPolls)return;const r=this.myIFrame.doc.createElement("script");r.type="text/javascript",r.async=!0,r.src=e,r.onload=r.onreadystatechange=function(){const i=r.readyState;(!i||i==="loaded"||i==="complete")&&(r.onload=r.onreadystatechange=null,r.parentNode&&r.parentNode.removeChild(r),t())},r.onerror=()=>{ht("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(r)}catch(r){}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const QC=16384,YC=45e3;let $a=null;typeof MozWebSocket!="undefined"?$a=MozWebSocket:typeof WebSocket!="undefined"&&($a=WebSocket);class Gt{constructor(e,t,r,i,s,o,a){this.connId=e,this.applicationId=r,this.appCheckToken=i,this.authToken=s,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=_o(this.connId),this.stats_=$d(t),this.connURL=Gt.connectionURL_(t,o,a,i,r),this.nodeAdmin=t.nodeAdmin}static connectionURL_(e,t,r,i,s){const o={};return o[Ew]=Bd,typeof location!="undefined"&&location.hostname&&Aw.test(location.hostname)&&(o[Tw]=Iw),t&&(o[vw]=t),r&&(o[Rw]=r),i&&(o[uu]=i),s&&(o[bw]=s),Pw(e,Sw,o)}open(e,t){this.onDisconnect=t,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,Sr.set("previous_websocket_failure",!0);try{let r;this.mySock=new $a(this.connURL,[],r)}catch(r){this.log_("Error instantiating WebSocket.");const i=r.message||r.data;i&&this.log_(i),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=r=>{this.handleIncomingFrame(r)},this.mySock.onerror=r=>{this.log_("WebSocket error.  Closing connection.");const i=r.message||r.data;i&&this.log_(i),this.onClosed_()}}start(){}static forceDisallow(){Gt.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator!="undefined"&&navigator.userAgent){const t=/Android ([0-9]{0,}\.[0-9]{0,})/,r=navigator.userAgent.match(t);r&&r.length>1&&parseFloat(r[1])<4.4&&(e=!0)}return!e&&$a!==null&&!Gt.forceDisallow_}static previouslyFailed(){return Sr.isInMemoryStorage||Sr.get("previous_websocket_failure")===!0}markConnectionHealthy(){Sr.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const t=this.frames.join("");this.frames=null;const r=Ds(t);this.onMessage(r)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(H(this.frames===null,"We already have a frame buffer"),e.length<=6){const t=Number(e);if(!isNaN(t))return this.handleNewFrameCount_(t),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const t=e.data;if(this.bytesReceived+=t.length,this.stats_.incrementCounter("bytes_received",t.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(t);else{const r=this.extractFrameCount_(t);r!==null&&this.appendFrame_(r)}}send(e){this.resetKeepAlive();const t=st(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const r=yw(t,QC);r.length>1&&this.sendString_(String(r.length));for(let i=0;i<r.length;i++)this.sendString_(r[i])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(YC))}sendString_(e){try{this.mySock.send(e)}catch(t){this.log_("Exception thrown from WebSocket.send():",t.message||t.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}Gt.responsesRequiredToBeHealthy=2;Gt.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class js{static get ALL_TRANSPORTS(){return[si,Gt]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}constructor(e){this.initTransports_(e)}initTransports_(e){const t=Gt&&Gt.isAvailable();let r=t&&!Gt.previouslyFailed();if(e.webSocketOnly&&(t||Lt("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),r=!0),r)this.transports_=[Gt];else{const i=this.transports_=[];for(const s of js.ALL_TRANSPORTS)s&&s.isAvailable()&&i.push(s);js.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}js.globalTransportInitialized_=!1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const JC=6e4,XC=5e3,ZC=10*1024,eP=100*1024,Rl="t",pp="d",tP="s",gp="r",nP="e",_p="o",yp="a",wp="n",Ep="p",rP="h";class iP{constructor(e,t,r,i,s,o,a,c,u,d){this.id=e,this.repoInfo_=t,this.applicationId_=r,this.appCheckToken_=i,this.authToken_=s,this.onMessage_=o,this.onReady_=a,this.onDisconnect_=c,this.onKill_=u,this.lastSessionId=d,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=_o("c:"+this.id+":"),this.transportManager_=new js(t),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.conn_),r=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(t,r)},Math.floor(0));const i=e.healthyTimeout||0;i>0&&(this.healthyTimeout_=Rs(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>eP?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>ZC?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return t=>{e===this.conn_?this.onConnectionLost_(t):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return t=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(t):e===this.secondaryConn_?this.onSecondaryMessageReceived_(t):this.log_("message on old connection"))}}sendRequest(e){const t={t:"d",d:e};this.sendData_(t)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(Rl in e){const t=e[Rl];t===yp?this.upgradeIfSecondaryHealthy_():t===gp?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):t===_p&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const t=ns("t",e),r=ns("d",e);if(t==="c")this.onSecondaryControl_(r);else if(t==="d")this.pendingDataMessages.push(r);else throw new Error("Unknown protocol layer: "+t)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:Ep,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:yp,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:wp,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const t=ns("t",e),r=ns("d",e);t==="c"?this.onControl_(r):t==="d"&&this.onDataMessage_(r)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const t=ns(Rl,e);if(pp in e){const r=e[pp];if(t===rP){const i=Object.assign({},r);this.repoInfo_.isUsingEmulator&&(i.h=this.repoInfo_.host),this.onHandshake_(i)}else if(t===wp){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let i=0;i<this.pendingDataMessages.length;++i)this.onDataMessage_(this.pendingDataMessages[i]);this.pendingDataMessages=[],this.tryCleanupConnection()}else t===tP?this.onConnectionShutdown_(r):t===gp?this.onReset_(r):t===nP?lu("Server Error: "+r):t===_p?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):lu("Unknown control packet command: "+t)}}onHandshake_(e){const t=e.ts,r=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,t),Bd!==r&&Lt("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.secondaryConn_),r=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(t,r),Rs(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(JC))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,t){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(t,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):Rs(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(XC))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:Ep,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(Sr.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mw{put(e,t,r,i){}merge(e,t,r,i){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,t,r){}onDisconnectMerge(e,t,r){}onDisconnectCancel(e,t){}reportStats(e){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xw{constructor(e){this.allowedEvents_=e,this.listeners_={},H(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...t){if(Array.isArray(this.listeners_[e])){const r=[...this.listeners_[e]];for(let i=0;i<r.length;i++)r[i].callback.apply(r[i].context,t)}}on(e,t,r){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:t,context:r});const i=this.getInitialEvent(e);i&&t.apply(r,i)}off(e,t,r){this.validateEventType_(e);const i=this.listeners_[e]||[];for(let s=0;s<i.length;s++)if(i[s].callback===t&&(!r||r===i[s].context)){i.splice(s,1);return}}validateEventType_(e){H(this.allowedEvents_.find(t=>t===e),"Unknown event: "+e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qa extends xw{static getInstance(){return new qa}constructor(){super(["online"]),this.online_=!0,typeof window!="undefined"&&typeof window.addEventListener!="undefined"&&!Lu()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}getInitialEvent(e){return H(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vp=32,Tp=768;class Oe{constructor(e,t){if(t===void 0){this.pieces_=e.split("/");let r=0;for(let i=0;i<this.pieces_.length;i++)this.pieces_[i].length>0&&(this.pieces_[r]=this.pieces_[i],r++);this.pieces_.length=r,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=t}toString(){let e="";for(let t=this.pieceNum_;t<this.pieces_.length;t++)this.pieces_[t]!==""&&(e+="/"+this.pieces_[t]);return e||"/"}}function be(){return new Oe("")}function ye(n){return n.pieceNum_>=n.pieces_.length?null:n.pieces_[n.pieceNum_]}function dr(n){return n.pieces_.length-n.pieceNum_}function Pe(n){let e=n.pieceNum_;return e<n.pieces_.length&&e++,new Oe(n.pieces_,e)}function Uw(n){return n.pieceNum_<n.pieces_.length?n.pieces_[n.pieces_.length-1]:null}function sP(n){let e="";for(let t=n.pieceNum_;t<n.pieces_.length;t++)n.pieces_[t]!==""&&(e+="/"+encodeURIComponent(String(n.pieces_[t])));return e||"/"}function Fw(n,e=0){return n.pieces_.slice(n.pieceNum_+e)}function Bw(n){if(n.pieceNum_>=n.pieces_.length)return null;const e=[];for(let t=n.pieceNum_;t<n.pieces_.length-1;t++)e.push(n.pieces_[t]);return new Oe(e,0)}function et(n,e){const t=[];for(let r=n.pieceNum_;r<n.pieces_.length;r++)t.push(n.pieces_[r]);if(e instanceof Oe)for(let r=e.pieceNum_;r<e.pieces_.length;r++)t.push(e.pieces_[r]);else{const r=e.split("/");for(let i=0;i<r.length;i++)r[i].length>0&&t.push(r[i])}return new Oe(t,0)}function pe(n){return n.pieceNum_>=n.pieces_.length}function Ut(n,e){const t=ye(n),r=ye(e);if(t===null)return e;if(t===r)return Ut(Pe(n),Pe(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+n+")")}function $w(n,e){if(dr(n)!==dr(e))return!1;for(let t=n.pieceNum_,r=e.pieceNum_;t<=n.pieces_.length;t++,r++)if(n.pieces_[t]!==e.pieces_[r])return!1;return!0}function Ht(n,e){let t=n.pieceNum_,r=e.pieceNum_;if(dr(n)>dr(e))return!1;for(;t<n.pieces_.length;){if(n.pieces_[t]!==e.pieces_[r])return!1;++t,++r}return!0}class oP{constructor(e,t){this.errorPrefix_=t,this.parts_=Fw(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let r=0;r<this.parts_.length;r++)this.byteLength_+=rc(this.parts_[r]);qw(this)}}function aP(n,e){n.parts_.length>0&&(n.byteLength_+=1),n.parts_.push(e),n.byteLength_+=rc(e),qw(n)}function cP(n){const e=n.parts_.pop();n.byteLength_-=rc(e),n.parts_.length>0&&(n.byteLength_-=1)}function qw(n){if(n.byteLength_>Tp)throw new Error(n.errorPrefix_+"has a key path longer than "+Tp+" bytes ("+n.byteLength_+").");if(n.parts_.length>vp)throw new Error(n.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+vp+") or object contains a cycle "+Tr(n))}function Tr(n){return n.parts_.length===0?"":"in property '"+n.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jd extends xw{static getInstance(){return new jd}constructor(){super(["visible"]);let e,t;typeof document!="undefined"&&typeof document.addEventListener!="undefined"&&(typeof document.hidden!="undefined"?(t="visibilitychange",e="hidden"):typeof document.mozHidden!="undefined"?(t="mozvisibilitychange",e="mozHidden"):typeof document.msHidden!="undefined"?(t="msvisibilitychange",e="msHidden"):typeof document.webkitHidden!="undefined"&&(t="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,t&&document.addEventListener(t,()=>{const r=!document[e];r!==this.visible_&&(this.visible_=r,this.trigger("visible",r))},!1)}getInitialEvent(e){return H(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rs=1e3,lP=60*5*1e3,Ip=30*1e3,uP=1.3,dP=3e4,hP="server_kill",Ap=3;class kn extends Mw{constructor(e,t,r,i,s,o,a,c){if(super(),this.repoInfo_=e,this.applicationId_=t,this.onDataUpdate_=r,this.onConnectStatus_=i,this.onServerInfoUpdate_=s,this.authTokenProvider_=o,this.appCheckTokenProvider_=a,this.authOverride_=c,this.id=kn.nextPersistentConnectionId_++,this.log_=_o("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=rs,this.maxReconnectDelay_=lP,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,c&&!pT())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");jd.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&qa.getInstance().on("online",this.onOnline_,this)}sendRequest(e,t,r){const i=++this.requestNumber_,s={r:i,a:e,b:t};this.log_(st(s)),H(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(s),r&&(this.requestCBHash_[i]=r)}get(e){this.initConnection_();const t=new Nu,i={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const a=o.d;o.s==="ok"?t.resolve(a):t.reject(a)}};this.outstandingGets_.push(i),this.outstandingGetCount_++;const s=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(s),t.promise}listen(e,t,r,i){this.initConnection_();const s=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+s),this.listens.has(o)||this.listens.set(o,new Map),H(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),H(!this.listens.get(o).has(s),"listen() called twice for same path/queryId.");const a={onComplete:i,hashFn:t,query:e,tag:r};this.listens.get(o).set(s,a),this.connected_&&this.sendListen_(a)}sendGet_(e){const t=this.outstandingGets_[e];this.sendRequest("g",t.request,r=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),t.onComplete&&t.onComplete(r)})}sendListen_(e){const t=e.query,r=t._path.toString(),i=t._queryIdentifier;this.log_("Listen on "+r+" for "+i);const s={p:r},o="q";e.tag&&(s.q=t._queryObject,s.t=e.tag),s.h=e.hashFn(),this.sendRequest(o,s,a=>{const c=a.d,u=a.s;kn.warnOnListenWarnings_(c,t),(this.listens.get(r)&&this.listens.get(r).get(i))===e&&(this.log_("listen response",a),u!=="ok"&&this.removeListen_(r,i),e.onComplete&&e.onComplete(u,c))})}static warnOnListenWarnings_(e,t){if(e&&typeof e=="object"&&Un(e,"w")){const r=mi(e,"w");if(Array.isArray(r)&&~r.indexOf("no_index")){const i='".indexOn": "'+t._queryParams.getIndex().toString()+'"',s=t._path.toString();Lt(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${i} at ${s} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||TT(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=Ip)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,t=vT(e)?"auth":"gauth",r={cred:e};this.authOverride_===null?r.noauth=!0:typeof this.authOverride_=="object"&&(r.authvar=this.authOverride_),this.sendRequest(t,r,i=>{const s=i.s,o=i.d||"error";this.authToken_===e&&(s==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(s,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const t=e.s,r=e.d||"error";t==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(t,r)})}unlisten(e,t){const r=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+r+" "+i),H(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(r,i)&&this.connected_&&this.sendUnlisten_(r,i,e._queryObject,t)}sendUnlisten_(e,t,r,i){this.log_("Unlisten on "+e+" for "+t);const s={p:e},o="n";i&&(s.q=r,s.t=i),this.sendRequest(o,s)}onDisconnectPut(e,t,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,t,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:t,onComplete:r})}onDisconnectMerge(e,t,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,t,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:t,onComplete:r})}onDisconnectCancel(e,t){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,t):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:t})}sendOnDisconnect_(e,t,r,i){const s={p:t,d:r};this.log_("onDisconnect "+e,s),this.sendRequest(e,s,o=>{i&&setTimeout(()=>{i(o.s,o.d)},Math.floor(0))})}put(e,t,r,i){this.putInternal("p",e,t,r,i)}merge(e,t,r,i){this.putInternal("m",e,t,r,i)}putInternal(e,t,r,i,s){this.initConnection_();const o={p:t,d:r};s!==void 0&&(o.h=s),this.outstandingPuts_.push({action:e,request:o,onComplete:i}),this.outstandingPutCount_++;const a=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(a):this.log_("Buffering put: "+t)}sendPut_(e){const t=this.outstandingPuts_[e].action,r=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(t,r,s=>{this.log_(t+" response",s),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),i&&i(s.s,s.d)})}reportStats(e){if(this.connected_){const t={c:e};this.log_("reportStats",t),this.sendRequest("s",t,r=>{if(r.s!=="ok"){const s=r.d;this.log_("reportStats","Error sending stats: "+s)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+st(e));const t=e.r,r=this.requestCBHash_[t];r&&(delete this.requestCBHash_[t],r(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,t){this.log_("handleServerMessage",e,t),e==="d"?this.onDataUpdate_(t.p,t.d,!1,t.t):e==="m"?this.onDataUpdate_(t.p,t.d,!0,t.t):e==="c"?this.onListenRevoked_(t.p,t.q):e==="ac"?this.onAuthRevoked_(t.s,t.d):e==="apc"?this.onAppCheckRevoked_(t.s,t.d):e==="sd"?this.onSecurityDebugPacket_(t):lu("Unrecognized action received from server: "+st(e)+`
Are you using the latest client?`)}onReady_(e,t){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=t,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){H(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=rs,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=rs,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>dP&&(this.reconnectDelay_=rs),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=Math.max(0,new Date().getTime()-this.lastConnectionAttemptTime_);let t=Math.max(0,this.reconnectDelay_-e);t=Math.random()*t,this.log_("Trying to reconnect in "+t+"ms"),this.scheduleConnect_(t),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*uP)}this.onConnectStatus_(!1)}establishConnection_(){return p(this,null,function*(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),t=this.onReady_.bind(this),r=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+kn.nextConnectionId_++,s=this.lastSessionId;let o=!1,a=null;const c=function(){a?a.close():(o=!0,r())},u=function(h){H(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(h)};this.realtime_={close:c,sendRequest:u};const d=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[h,m]=yield Promise.all([this.authTokenProvider_.getToken(d),this.appCheckTokenProvider_.getToken(d)]);o?ht("getToken() completed but was canceled"):(ht("getToken() completed. Creating connection."),this.authToken_=h&&h.accessToken,this.appCheckToken_=m&&m.token,a=new iP(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,t,r,_=>{Lt(_+" ("+this.repoInfo_.toString()+")"),this.interrupt(hP)},s))}catch(h){this.log_("Failed to get token: "+h),o||(this.repoInfo_.nodeAdmin&&Lt(h),c())}}})}interrupt(e){ht("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){ht("Resuming connection for reason: "+e),delete this.interruptReasons_[e],Ll(this.interruptReasons_)&&(this.reconnectDelay_=rs,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const t=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:t})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const t=this.outstandingPuts_[e];t&&"h"in t.request&&t.queued&&(t.onComplete&&t.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,t){let r;t?r=t.map(s=>Fd(s)).join("$"):r="default";const i=this.removeListen_(e,r);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,t){const r=new Oe(e).toString();let i;if(this.listens.has(r)){const s=this.listens.get(r);i=s.get(t),s.delete(t),s.size===0&&this.listens.delete(r)}else i=void 0;return i}onAuthRevoked_(e,t){ht("Auth token revoked: "+e+"/"+t),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=Ap&&(this.reconnectDelay_=Ip,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,t){ht("App check token revoked: "+e+"/"+t),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=Ap&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const t of e.values())this.sendListen_(t);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let t="js";e["sdk."+t+"."+mw.replace(/\./g,"-")]=1,Lu()?e["framework.cordova"]=1:lg()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=qa.getInstance().currentlyOnline();return Ll(this.interruptReasons_)&&e}}kn.nextPersistentConnectionId_=0;kn.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class we{constructor(e,t){this.name=e,this.node=t}static Wrap(e,t){return new we(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oc{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,t){const r=new we(Ii,e),i=new we(Ii,t);return this.compare(r,i)!==0}minPost(){return we.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Jo;class jw extends Oc{static get __EMPTY_NODE(){return Jo}static set __EMPTY_NODE(e){Jo=e}compare(e,t){return Mi(e.name,t.name)}isDefinedOn(e){throw ki("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,t){return!1}minPost(){return we.MIN}maxPost(){return new we(Vr,Jo)}makePost(e,t){return H(typeof e=="string","KeyIndex indexValue must always be a string."),new we(e,Jo)}toString(){return".key"}}const fi=new jw;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xo{constructor(e,t,r,i,s=null){this.isReverse_=i,this.resultGenerator_=s,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=t?r(e.key,t):1,i&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),t;if(this.resultGenerator_?t=this.resultGenerator_(e.key,e.value):t={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return t}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class Je{constructor(e,t,r,i,s){this.key=e,this.value=t,this.color=r!=null?r:Je.RED,this.left=i!=null?i:Rt.EMPTY_NODE,this.right=s!=null?s:Rt.EMPTY_NODE}copy(e,t,r,i,s){return new Je(e!=null?e:this.key,t!=null?t:this.value,r!=null?r:this.color,i!=null?i:this.left,s!=null?s:this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,r){let i=this;const s=r(e,i.key);return s<0?i=i.copy(null,null,null,i.left.insert(e,t,r),null):s===0?i=i.copy(null,t,null,null,null):i=i.copy(null,null,null,null,i.right.insert(e,t,r)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return Rt.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,t){let r,i;if(r=this,t(e,r.key)<0)!r.left.isEmpty()&&!r.left.isRed_()&&!r.left.left.isRed_()&&(r=r.moveRedLeft_()),r=r.copy(null,null,null,r.left.remove(e,t),null);else{if(r.left.isRed_()&&(r=r.rotateRight_()),!r.right.isEmpty()&&!r.right.isRed_()&&!r.right.left.isRed_()&&(r=r.moveRedRight_()),t(e,r.key)===0){if(r.right.isEmpty())return Rt.EMPTY_NODE;i=r.right.min_(),r=r.copy(i.key,i.value,null,null,r.right.removeMin_())}r=r.copy(null,null,null,null,r.right.remove(e,t))}return r.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,Je.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,Je.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}Je.RED=!0;Je.BLACK=!1;class fP{copy(e,t,r,i,s){return this}insert(e,t,r){return new Je(e,t,null)}remove(e,t){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class Rt{constructor(e,t=Rt.EMPTY_NODE){this.comparator_=e,this.root_=t}insert(e,t){return new Rt(this.comparator_,this.root_.insert(e,t,this.comparator_).copy(null,null,Je.BLACK,null,null))}remove(e){return new Rt(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,Je.BLACK,null,null))}get(e){let t,r=this.root_;for(;!r.isEmpty();){if(t=this.comparator_(e,r.key),t===0)return r.value;t<0?r=r.left:t>0&&(r=r.right)}return null}getPredecessorKey(e){let t,r=this.root_,i=null;for(;!r.isEmpty();)if(t=this.comparator_(e,r.key),t===0){if(r.left.isEmpty())return i?i.key:null;for(r=r.left;!r.right.isEmpty();)r=r.right;return r.key}else t<0?r=r.left:t>0&&(i=r,r=r.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new Xo(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,t){return new Xo(this.root_,e,this.comparator_,!1,t)}getReverseIteratorFrom(e,t){return new Xo(this.root_,e,this.comparator_,!0,t)}getReverseIterator(e){return new Xo(this.root_,null,this.comparator_,!0,e)}}Rt.EMPTY_NODE=new fP;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mP(n,e){return Mi(n.name,e.name)}function zd(n,e){return Mi(n,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let du;function pP(n){du=n}const zw=function(n){return typeof n=="number"?"number:"+ww(n):"string:"+n},Gw=function(n){if(n.isLeafNode()){const e=n.val();H(typeof e=="string"||typeof e=="number"||typeof e=="object"&&Un(e,".sv"),"Priority must be a string or number.")}else H(n===du||n.isEmpty(),"priority of unexpected type.");H(n===du||n.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Rp;class Qe{static set __childrenNodeConstructor(e){Rp=e}static get __childrenNodeConstructor(){return Rp}constructor(e,t=Qe.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=t,this.lazyHash_=null,H(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),Gw(this.priorityNode_)}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new Qe(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:Qe.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return pe(e)?this:ye(e)===".priority"?this.priorityNode_:Qe.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,t){return null}updateImmediateChild(e,t){return e===".priority"?this.updatePriority(t):t.isEmpty()&&e!==".priority"?this:Qe.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,t).updatePriority(this.priorityNode_)}updateChild(e,t){const r=ye(e);return r===null?t:t.isEmpty()&&r!==".priority"?this:(H(r!==".priority"||dr(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(r,Qe.__childrenNodeConstructor.EMPTY_NODE.updateChild(Pe(e),t)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,t){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+zw(this.priorityNode_.val())+":");const t=typeof this.value_;e+=t+":",t==="number"?e+=ww(this.value_):e+=this.value_,this.lazyHash_=gw(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===Qe.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof Qe.__childrenNodeConstructor?-1:(H(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const t=typeof e.value_,r=typeof this.value_,i=Qe.VALUE_TYPE_ORDER.indexOf(t),s=Qe.VALUE_TYPE_ORDER.indexOf(r);return H(i>=0,"Unknown leaf type: "+t),H(s>=0,"Unknown leaf type: "+r),i===s?r==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:s-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const t=e;return this.value_===t.value_&&this.priorityNode_.equals(t.priorityNode_)}else return!1}}Qe.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ww,Hw;function gP(n){Ww=n}function _P(n){Hw=n}class yP extends Oc{compare(e,t){const r=e.node.getPriority(),i=t.node.getPriority(),s=r.compareTo(i);return s===0?Mi(e.name,t.name):s}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,t){return!e.getPriority().equals(t.getPriority())}minPost(){return we.MIN}maxPost(){return new we(Vr,new Qe("[PRIORITY-POST]",Hw))}makePost(e,t){const r=Ww(e);return new we(t,new Qe("[PRIORITY-POST]",r))}toString(){return".priority"}}const mt=new yP;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wP=Math.log(2);class EP{constructor(e){const t=s=>parseInt(Math.log(s)/wP,10),r=s=>parseInt(Array(s+1).join("1"),2);this.count=t(e+1),this.current_=this.count-1;const i=r(this.count);this.bits_=e+1&i}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const ja=function(n,e,t,r){n.sort(e);const i=function(c,u){const d=u-c;let h,m;if(d===0)return null;if(d===1)return h=n[c],m=t?t(h):h,new Je(m,h.node,Je.BLACK,null,null);{const _=parseInt(d/2,10)+c,w=i(c,_),E=i(_+1,u);return h=n[_],m=t?t(h):h,new Je(m,h.node,Je.BLACK,w,E)}},s=function(c){let u=null,d=null,h=n.length;const m=function(w,E){const v=h-w,C=h;h-=w;const O=i(v+1,C),U=n[v],M=t?t(U):U;_(new Je(M,U.node,E,null,O))},_=function(w){u?(u.left=w,u=w):(d=w,u=w)};for(let w=0;w<c.count;++w){const E=c.nextBitIsOne(),v=Math.pow(2,c.count-(w+1));E?m(v,Je.BLACK):(m(v,Je.BLACK),m(v,Je.RED))}return d},o=new EP(n.length),a=s(o);return new Rt(r||e,a)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let bl;const ei={};class An{static get Default(){return H(ei&&mt,"ChildrenNode.ts has not been loaded"),bl=bl||new An({".priority":ei},{".priority":mt}),bl}constructor(e,t){this.indexes_=e,this.indexSet_=t}get(e){const t=mi(this.indexes_,e);if(!t)throw new Error("No index defined for "+e);return t instanceof Rt?t:null}hasIndex(e){return Un(this.indexSet_,e.toString())}addIndex(e,t){H(e!==fi,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const r=[];let i=!1;const s=t.getIterator(we.Wrap);let o=s.getNext();for(;o;)i=i||e.isDefinedOn(o.node),r.push(o),o=s.getNext();let a;i?a=ja(r,e.getCompare()):a=ei;const c=e.toString(),u=Object.assign({},this.indexSet_);u[c]=e;const d=Object.assign({},this.indexes_);return d[c]=a,new An(d,u)}addToIndexes(e,t){const r=pa(this.indexes_,(i,s)=>{const o=mi(this.indexSet_,s);if(H(o,"Missing index implementation for "+s),i===ei)if(o.isDefinedOn(e.node)){const a=[],c=t.getIterator(we.Wrap);let u=c.getNext();for(;u;)u.name!==e.name&&a.push(u),u=c.getNext();return a.push(e),ja(a,o.getCompare())}else return ei;else{const a=t.get(e.name);let c=i;return a&&(c=c.remove(new we(e.name,a))),c.insert(e,e.node)}});return new An(r,this.indexSet_)}removeFromIndexes(e,t){const r=pa(this.indexes_,i=>{if(i===ei)return i;{const s=t.get(e.name);return s?i.remove(new we(e.name,s)):i}});return new An(r,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let is;class Ae{static get EMPTY_NODE(){return is||(is=new Ae(new Rt(zd),null,An.Default))}constructor(e,t,r){this.children_=e,this.priorityNode_=t,this.indexMap_=r,this.lazyHash_=null,this.priorityNode_&&Gw(this.priorityNode_),this.children_.isEmpty()&&H(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}isLeafNode(){return!1}getPriority(){return this.priorityNode_||is}updatePriority(e){return this.children_.isEmpty()?this:new Ae(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const t=this.children_.get(e);return t===null?is:t}}getChild(e){const t=ye(e);return t===null?this:this.getImmediateChild(t).getChild(Pe(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,t){if(H(t,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(t);{const r=new we(e,t);let i,s;t.isEmpty()?(i=this.children_.remove(e),s=this.indexMap_.removeFromIndexes(r,this.children_)):(i=this.children_.insert(e,t),s=this.indexMap_.addToIndexes(r,this.children_));const o=i.isEmpty()?is:this.priorityNode_;return new Ae(i,o,s)}}updateChild(e,t){const r=ye(e);if(r===null)return t;{H(ye(e)!==".priority"||dr(e)===1,".priority must be the last token in a path");const i=this.getImmediateChild(r).updateChild(Pe(e),t);return this.updateImmediateChild(r,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const t={};let r=0,i=0,s=!0;if(this.forEachChild(mt,(o,a)=>{t[o]=a.val(e),r++,s&&Ae.INTEGER_REGEXP_.test(o)?i=Math.max(i,Number(o)):s=!1}),!e&&s&&i<2*r){const o=[];for(const a in t)o[a]=t[a];return o}else return e&&!this.getPriority().isEmpty()&&(t[".priority"]=this.getPriority().val()),t}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+zw(this.getPriority().val())+":"),this.forEachChild(mt,(t,r)=>{const i=r.hash();i!==""&&(e+=":"+t+":"+i)}),this.lazyHash_=e===""?"":gw(e)}return this.lazyHash_}getPredecessorChildName(e,t,r){const i=this.resolveIndex_(r);if(i){const s=i.getPredecessorKey(new we(e,t));return s?s.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const t=this.resolveIndex_(e);if(t){const r=t.minKey();return r&&r.name}else return this.children_.minKey()}getFirstChild(e){const t=this.getFirstChildName(e);return t?new we(t,this.children_.get(t)):null}getLastChildName(e){const t=this.resolveIndex_(e);if(t){const r=t.maxKey();return r&&r.name}else return this.children_.maxKey()}getLastChild(e){const t=this.getLastChildName(e);return t?new we(t,this.children_.get(t)):null}forEachChild(e,t){const r=this.resolveIndex_(e);return r?r.inorderTraversal(i=>t(i.name,i.node)):this.children_.inorderTraversal(t)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,t){const r=this.resolveIndex_(t);if(r)return r.getIteratorFrom(e,i=>i);{const i=this.children_.getIteratorFrom(e.name,we.Wrap);let s=i.peek();for(;s!=null&&t.compare(s,e)<0;)i.getNext(),s=i.peek();return i}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,t){const r=this.resolveIndex_(t);if(r)return r.getReverseIteratorFrom(e,i=>i);{const i=this.children_.getReverseIteratorFrom(e.name,we.Wrap);let s=i.peek();for(;s!=null&&t.compare(s,e)>0;)i.getNext(),s=i.peek();return i}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===wo?-1:0}withIndex(e){if(e===fi||this.indexMap_.hasIndex(e))return this;{const t=this.indexMap_.addIndex(e,this.children_);return new Ae(this.children_,this.priorityNode_,t)}}isIndexed(e){return e===fi||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const t=e;if(this.getPriority().equals(t.getPriority()))if(this.children_.count()===t.children_.count()){const r=this.getIterator(mt),i=t.getIterator(mt);let s=r.getNext(),o=i.getNext();for(;s&&o;){if(s.name!==o.name||!s.node.equals(o.node))return!1;s=r.getNext(),o=i.getNext()}return s===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===fi?null:this.indexMap_.get(e.toString())}}Ae.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class vP extends Ae{constructor(){super(new Rt(zd),Ae.EMPTY_NODE,An.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return Ae.EMPTY_NODE}isEmpty(){return!1}}const wo=new vP;Object.defineProperties(we,{MIN:{value:new we(Ii,Ae.EMPTY_NODE)},MAX:{value:new we(Vr,wo)}});jw.__EMPTY_NODE=Ae.EMPTY_NODE;Qe.__childrenNodeConstructor=Ae;pP(wo);_P(wo);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const TP=!0;function ft(n,e=null){if(n===null)return Ae.EMPTY_NODE;if(typeof n=="object"&&".priority"in n&&(e=n[".priority"]),H(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof n=="object"&&".value"in n&&n[".value"]!==null&&(n=n[".value"]),typeof n!="object"||".sv"in n){const t=n;return new Qe(t,ft(e))}if(!(n instanceof Array)&&TP){const t=[];let r=!1;if($t(n,(o,a)=>{if(o.substring(0,1)!=="."){const c=ft(a);c.isEmpty()||(r=r||!c.getPriority().isEmpty(),t.push(new we(o,c)))}}),t.length===0)return Ae.EMPTY_NODE;const s=ja(t,mP,o=>o.name,zd);if(r){const o=ja(t,mt.getCompare());return new Ae(s,ft(e),new An({".priority":o},{".priority":mt}))}else return new Ae(s,ft(e),An.Default)}else{let t=Ae.EMPTY_NODE;return $t(n,(r,i)=>{if(Un(n,r)&&r.substring(0,1)!=="."){const s=ft(i);(s.isLeafNode()||!s.isEmpty())&&(t=t.updateImmediateChild(r,s))}}),t.updatePriority(ft(e))}}gP(ft);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class IP extends Oc{constructor(e){super(),this.indexPath_=e,H(!pe(e)&&ye(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,t){const r=this.extractChild(e.node),i=this.extractChild(t.node),s=r.compareTo(i);return s===0?Mi(e.name,t.name):s}makePost(e,t){const r=ft(e),i=Ae.EMPTY_NODE.updateChild(this.indexPath_,r);return new we(t,i)}maxPost(){const e=Ae.EMPTY_NODE.updateChild(this.indexPath_,wo);return new we(Vr,e)}toString(){return Fw(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AP extends Oc{compare(e,t){const r=e.node.compareTo(t.node);return r===0?Mi(e.name,t.name):r}isDefinedOn(e){return!0}indexedValueChanged(e,t){return!e.equals(t)}minPost(){return we.MIN}maxPost(){return we.MAX}makePost(e,t){const r=ft(e);return new we(t,r)}toString(){return".value"}}const RP=new AP;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bP(n){return{type:"value",snapshotNode:n}}function SP(n,e){return{type:"child_added",snapshotNode:e,childName:n}}function kP(n,e){return{type:"child_removed",snapshotNode:e,childName:n}}function bp(n,e,t){return{type:"child_changed",snapshotNode:e,childName:n,oldSnap:t}}function CP(n,e){return{type:"child_moved",snapshotNode:e,childName:n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gd{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=mt}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return H(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return H(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:Ii}hasEnd(){return this.endSet_}getIndexEndValue(){return H(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return H(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:Vr}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return H(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===mt}copy(){const e=new Gd;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function Sp(n){const e={};if(n.isDefault())return e;let t;if(n.index_===mt?t="$priority":n.index_===RP?t="$value":n.index_===fi?t="$key":(H(n.index_ instanceof IP,"Unrecognized index type!"),t=n.index_.toString()),e.orderBy=st(t),n.startSet_){const r=n.startAfterSet_?"startAfter":"startAt";e[r]=st(n.indexStartValue_),n.startNameSet_&&(e[r]+=","+st(n.indexStartName_))}if(n.endSet_){const r=n.endBeforeSet_?"endBefore":"endAt";e[r]=st(n.indexEndValue_),n.endNameSet_&&(e[r]+=","+st(n.indexEndName_))}return n.limitSet_&&(n.isViewFromLeft()?e.limitToFirst=n.limit_:e.limitToLast=n.limit_),e}function kp(n){const e={};if(n.startSet_&&(e.sp=n.indexStartValue_,n.startNameSet_&&(e.sn=n.indexStartName_),e.sin=!n.startAfterSet_),n.endSet_&&(e.ep=n.indexEndValue_,n.endNameSet_&&(e.en=n.indexEndName_),e.ein=!n.endBeforeSet_),n.limitSet_){e.l=n.limit_;let t=n.viewFrom_;t===""&&(n.isViewFromLeft()?t="l":t="r"),e.vf=t}return n.index_!==mt&&(e.i=n.index_.toString()),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class za extends Mw{reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,t){return t!==void 0?"tag$"+t:(H(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}constructor(e,t,r,i){super(),this.repoInfo_=e,this.onDataUpdate_=t,this.authTokenProvider_=r,this.appCheckTokenProvider_=i,this.log_=_o("p:rest:"),this.listens_={}}listen(e,t,r,i){const s=e._path.toString();this.log_("Listen called for "+s+" "+e._queryIdentifier);const o=za.getListenId_(e,r),a={};this.listens_[o]=a;const c=Sp(e._queryParams);this.restRequest_(s+".json",c,(u,d)=>{let h=d;if(u===404&&(h=null,u=null),u===null&&this.onDataUpdate_(s,h,!1,r),mi(this.listens_,o)===a){let m;u?u===401?m="permission_denied":m="rest_error:"+u:m="ok",i(m,null)}})}unlisten(e,t){const r=za.getListenId_(e,t);delete this.listens_[r]}get(e){const t=Sp(e._queryParams),r=e._path.toString(),i=new Nu;return this.restRequest_(r+".json",t,(s,o)=>{let a=o;s===404&&(a=null,s=null),s===null?(this.onDataUpdate_(r,a,!1,null),i.resolve(a)):i.reject(new Error(a))}),i.promise}refreshAuthToken(e){}restRequest_(e,t={},r){return t.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([i,s])=>{i&&i.accessToken&&(t.auth=i.accessToken),s&&s.token&&(t.ac=s.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+Ci(t);this.log_("Sending REST request for "+o);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(r&&a.readyState===4){this.log_("REST Response for "+o+" received. status:",a.status,"response:",a.responseText);let c=null;if(a.status>=200&&a.status<300){try{c=Ds(a.responseText)}catch(u){Lt("Failed to parse JSON response for "+o+": "+a.responseText)}r(null,c)}else a.status!==401&&a.status!==404&&Lt("Got unsuccessful REST response for "+o+" Status: "+a.status),r(a.status);r=null}},a.open("GET",o,!0),a.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PP{constructor(){this.rootNode_=Ae.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,t){this.rootNode_=this.rootNode_.updateChild(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ga(){return{value:null,children:new Map}}function Kw(n,e,t){if(pe(e))n.value=t,n.children.clear();else if(n.value!==null)n.value=n.value.updateChild(e,t);else{const r=ye(e);n.children.has(r)||n.children.set(r,Ga());const i=n.children.get(r);e=Pe(e),Kw(i,e,t)}}function hu(n,e,t){n.value!==null?t(e,n.value):DP(n,(r,i)=>{const s=new Oe(e.toString()+"/"+r);hu(i,s,t)})}function DP(n,e){n.children.forEach((t,r)=>{e(r,t)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NP{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),t=Object.assign({},e);return this.last_&&$t(this.last_,(r,i)=>{t[r]=t[r]-i}),this.last_=e,t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cp=10*1e3,OP=30*1e3,LP=5*60*1e3;class VP{constructor(e,t){this.server_=t,this.statsToReport_={},this.statsListener_=new NP(e);const r=Cp+(OP-Cp)*Math.random();Rs(this.reportStats_.bind(this),Math.floor(r))}reportStats_(){const e=this.statsListener_.get(),t={};let r=!1;$t(e,(i,s)=>{s>0&&Un(this.statsToReport_,i)&&(t[i]=s,r=!0)}),r&&this.server_.reportStats(t),Rs(this.reportStats_.bind(this),Math.floor(Math.random()*2*LP))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var sn;(function(n){n[n.OVERWRITE=0]="OVERWRITE",n[n.MERGE=1]="MERGE",n[n.ACK_USER_WRITE=2]="ACK_USER_WRITE",n[n.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(sn||(sn={}));function Qw(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function Yw(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function Jw(n){return{fromUser:!1,fromServer:!0,queryId:n,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wa{constructor(e,t,r){this.path=e,this.affectedTree=t,this.revert=r,this.type=sn.ACK_USER_WRITE,this.source=Qw()}operationForChild(e){if(pe(this.path)){if(this.affectedTree.value!=null)return H(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const t=this.affectedTree.subtree(new Oe(e));return new Wa(be(),t,this.revert)}}else return H(ye(this.path)===e,"operationForChild called for unrelated child."),new Wa(Pe(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mr{constructor(e,t,r){this.source=e,this.path=t,this.snap=r,this.type=sn.OVERWRITE}operationForChild(e){return pe(this.path)?new Mr(this.source,be(),this.snap.getImmediateChild(e)):new Mr(this.source,Pe(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zs{constructor(e,t,r){this.source=e,this.path=t,this.children=r,this.type=sn.MERGE}operationForChild(e){if(pe(this.path)){const t=this.children.subtree(new Oe(e));return t.isEmpty()?null:t.value?new Mr(this.source,be(),t.value):new zs(this.source,be(),t)}else return H(ye(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new zs(this.source,Pe(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wd{constructor(e,t,r){this.node_=e,this.fullyInitialized_=t,this.filtered_=r}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(pe(e))return this.isFullyInitialized()&&!this.filtered_;const t=ye(e);return this.isCompleteForChild(t)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}function MP(n,e,t,r){const i=[],s=[];return e.forEach(o=>{o.type==="child_changed"&&n.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&s.push(CP(o.childName,o.snapshotNode))}),ss(n,i,"child_removed",e,r,t),ss(n,i,"child_added",e,r,t),ss(n,i,"child_moved",s,r,t),ss(n,i,"child_changed",e,r,t),ss(n,i,"value",e,r,t),i}function ss(n,e,t,r,i,s){const o=r.filter(a=>a.type===t);o.sort((a,c)=>UP(n,a,c)),o.forEach(a=>{const c=xP(n,a,s);i.forEach(u=>{u.respondsTo(a.type)&&e.push(u.createEvent(c,n.query_))})})}function xP(n,e,t){return e.type==="value"||e.type==="child_removed"||(e.prevName=t.getPredecessorChildName(e.childName,e.snapshotNode,n.index_)),e}function UP(n,e,t){if(e.childName==null||t.childName==null)throw ki("Should only compare child_ events.");const r=new we(e.childName,e.snapshotNode),i=new we(t.childName,t.snapshotNode);return n.index_.compare(r,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xw(n,e){return{eventCache:n,serverCache:e}}function bs(n,e,t,r){return Xw(new Wd(e,t,r),n.serverCache)}function Zw(n,e,t,r){return Xw(n.eventCache,new Wd(e,t,r))}function fu(n){return n.eventCache.isFullyInitialized()?n.eventCache.getNode():null}function xr(n){return n.serverCache.isFullyInitialized()?n.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Sl;const FP=()=>(Sl||(Sl=new Rt(RC)),Sl);class Ce{static fromObject(e){let t=new Ce(null);return $t(e,(r,i)=>{t=t.set(new Oe(r),i)}),t}constructor(e,t=FP()){this.value=e,this.children=t}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,t){if(this.value!=null&&t(this.value))return{path:be(),value:this.value};if(pe(e))return null;{const r=ye(e),i=this.children.get(r);if(i!==null){const s=i.findRootMostMatchingPathAndValue(Pe(e),t);return s!=null?{path:et(new Oe(r),s.path),value:s.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(pe(e))return this;{const t=ye(e),r=this.children.get(t);return r!==null?r.subtree(Pe(e)):new Ce(null)}}set(e,t){if(pe(e))return new Ce(t,this.children);{const r=ye(e),s=(this.children.get(r)||new Ce(null)).set(Pe(e),t),o=this.children.insert(r,s);return new Ce(this.value,o)}}remove(e){if(pe(e))return this.children.isEmpty()?new Ce(null):new Ce(null,this.children);{const t=ye(e),r=this.children.get(t);if(r){const i=r.remove(Pe(e));let s;return i.isEmpty()?s=this.children.remove(t):s=this.children.insert(t,i),this.value===null&&s.isEmpty()?new Ce(null):new Ce(this.value,s)}else return this}}get(e){if(pe(e))return this.value;{const t=ye(e),r=this.children.get(t);return r?r.get(Pe(e)):null}}setTree(e,t){if(pe(e))return t;{const r=ye(e),s=(this.children.get(r)||new Ce(null)).setTree(Pe(e),t);let o;return s.isEmpty()?o=this.children.remove(r):o=this.children.insert(r,s),new Ce(this.value,o)}}fold(e){return this.fold_(be(),e)}fold_(e,t){const r={};return this.children.inorderTraversal((i,s)=>{r[i]=s.fold_(et(e,i),t)}),t(e,this.value,r)}findOnPath(e,t){return this.findOnPath_(e,be(),t)}findOnPath_(e,t,r){const i=this.value?r(t,this.value):!1;if(i)return i;if(pe(e))return null;{const s=ye(e),o=this.children.get(s);return o?o.findOnPath_(Pe(e),et(t,s),r):null}}foreachOnPath(e,t){return this.foreachOnPath_(e,be(),t)}foreachOnPath_(e,t,r){if(pe(e))return this;{this.value&&r(t,this.value);const i=ye(e),s=this.children.get(i);return s?s.foreachOnPath_(Pe(e),et(t,i),r):new Ce(null)}}foreach(e){this.foreach_(be(),e)}foreach_(e,t){this.children.inorderTraversal((r,i)=>{i.foreach_(et(e,r),t)}),this.value&&t(e,this.value)}foreachChild(e){this.children.inorderTraversal((t,r)=>{r.value&&e(t,r.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jt{constructor(e){this.writeTree_=e}static empty(){return new Jt(new Ce(null))}}function Ss(n,e,t){if(pe(e))return new Jt(new Ce(t));{const r=n.writeTree_.findRootMostValueAndPath(e);if(r!=null){const i=r.path;let s=r.value;const o=Ut(i,e);return s=s.updateChild(o,t),new Jt(n.writeTree_.set(i,s))}else{const i=new Ce(t),s=n.writeTree_.setTree(e,i);return new Jt(s)}}}function Pp(n,e,t){let r=n;return $t(t,(i,s)=>{r=Ss(r,et(e,i),s)}),r}function Dp(n,e){if(pe(e))return Jt.empty();{const t=n.writeTree_.setTree(e,new Ce(null));return new Jt(t)}}function mu(n,e){return Kr(n,e)!=null}function Kr(n,e){const t=n.writeTree_.findRootMostValueAndPath(e);return t!=null?n.writeTree_.get(t.path).getChild(Ut(t.path,e)):null}function Np(n){const e=[],t=n.writeTree_.value;return t!=null?t.isLeafNode()||t.forEachChild(mt,(r,i)=>{e.push(new we(r,i))}):n.writeTree_.children.inorderTraversal((r,i)=>{i.value!=null&&e.push(new we(r,i.value))}),e}function nr(n,e){if(pe(e))return n;{const t=Kr(n,e);return t!=null?new Jt(new Ce(t)):new Jt(n.writeTree_.subtree(e))}}function pu(n){return n.writeTree_.isEmpty()}function Ai(n,e){return eE(be(),n.writeTree_,e)}function eE(n,e,t){if(e.value!=null)return t.updateChild(n,e.value);{let r=null;return e.children.inorderTraversal((i,s)=>{i===".priority"?(H(s.value!==null,"Priority writes must always be leaf nodes"),r=s.value):t=eE(et(n,i),s,t)}),!t.getChild(n).isEmpty()&&r!==null&&(t=t.updateChild(et(n,".priority"),r)),t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tE(n,e){return oE(e,n)}function BP(n,e,t,r,i){H(r>n.lastWriteId,"Stacking an older write on top of newer ones"),i===void 0&&(i=!0),n.allWrites.push({path:e,snap:t,writeId:r,visible:i}),i&&(n.visibleWrites=Ss(n.visibleWrites,e,t)),n.lastWriteId=r}function $P(n,e){for(let t=0;t<n.allWrites.length;t++){const r=n.allWrites[t];if(r.writeId===e)return r}return null}function qP(n,e){const t=n.allWrites.findIndex(a=>a.writeId===e);H(t>=0,"removeWrite called with nonexistent writeId.");const r=n.allWrites[t];n.allWrites.splice(t,1);let i=r.visible,s=!1,o=n.allWrites.length-1;for(;i&&o>=0;){const a=n.allWrites[o];a.visible&&(o>=t&&jP(a,r.path)?i=!1:Ht(r.path,a.path)&&(s=!0)),o--}if(i){if(s)return zP(n),!0;if(r.snap)n.visibleWrites=Dp(n.visibleWrites,r.path);else{const a=r.children;$t(a,c=>{n.visibleWrites=Dp(n.visibleWrites,et(r.path,c))})}return!0}else return!1}function jP(n,e){if(n.snap)return Ht(n.path,e);for(const t in n.children)if(n.children.hasOwnProperty(t)&&Ht(et(n.path,t),e))return!0;return!1}function zP(n){n.visibleWrites=nE(n.allWrites,GP,be()),n.allWrites.length>0?n.lastWriteId=n.allWrites[n.allWrites.length-1].writeId:n.lastWriteId=-1}function GP(n){return n.visible}function nE(n,e,t){let r=Jt.empty();for(let i=0;i<n.length;++i){const s=n[i];if(e(s)){const o=s.path;let a;if(s.snap)Ht(t,o)?(a=Ut(t,o),r=Ss(r,a,s.snap)):Ht(o,t)&&(a=Ut(o,t),r=Ss(r,be(),s.snap.getChild(a)));else if(s.children){if(Ht(t,o))a=Ut(t,o),r=Pp(r,a,s.children);else if(Ht(o,t))if(a=Ut(o,t),pe(a))r=Pp(r,be(),s.children);else{const c=mi(s.children,ye(a));if(c){const u=c.getChild(Pe(a));r=Ss(r,be(),u)}}}else throw ki("WriteRecord should have .snap or .children")}}return r}function rE(n,e,t,r,i){if(!r&&!i){const s=Kr(n.visibleWrites,e);if(s!=null)return s;{const o=nr(n.visibleWrites,e);if(pu(o))return t;if(t==null&&!mu(o,be()))return null;{const a=t||Ae.EMPTY_NODE;return Ai(o,a)}}}else{const s=nr(n.visibleWrites,e);if(!i&&pu(s))return t;if(!i&&t==null&&!mu(s,be()))return null;{const o=function(u){return(u.visible||i)&&(!r||!~r.indexOf(u.writeId))&&(Ht(u.path,e)||Ht(e,u.path))},a=nE(n.allWrites,o,e),c=t||Ae.EMPTY_NODE;return Ai(a,c)}}}function WP(n,e,t){let r=Ae.EMPTY_NODE;const i=Kr(n.visibleWrites,e);if(i)return i.isLeafNode()||i.forEachChild(mt,(s,o)=>{r=r.updateImmediateChild(s,o)}),r;if(t){const s=nr(n.visibleWrites,e);return t.forEachChild(mt,(o,a)=>{const c=Ai(nr(s,new Oe(o)),a);r=r.updateImmediateChild(o,c)}),Np(s).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}else{const s=nr(n.visibleWrites,e);return Np(s).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}}function HP(n,e,t,r,i){H(r||i,"Either existingEventSnap or existingServerSnap must exist");const s=et(e,t);if(mu(n.visibleWrites,s))return null;{const o=nr(n.visibleWrites,s);return pu(o)?i.getChild(t):Ai(o,i.getChild(t))}}function KP(n,e,t,r){const i=et(e,t),s=Kr(n.visibleWrites,i);if(s!=null)return s;if(r.isCompleteForChild(t)){const o=nr(n.visibleWrites,i);return Ai(o,r.getNode().getImmediateChild(t))}else return null}function QP(n,e){return Kr(n.visibleWrites,e)}function YP(n,e,t,r,i,s,o){let a;const c=nr(n.visibleWrites,e),u=Kr(c,be());if(u!=null)a=u;else if(t!=null)a=Ai(c,t);else return[];if(a=a.withIndex(o),!a.isEmpty()&&!a.isLeafNode()){const d=[],h=o.getCompare(),m=s?a.getReverseIteratorFrom(r,o):a.getIteratorFrom(r,o);let _=m.getNext();for(;_&&d.length<i;)h(_,r)!==0&&d.push(_),_=m.getNext();return d}else return[]}function JP(){return{visibleWrites:Jt.empty(),allWrites:[],lastWriteId:-1}}function gu(n,e,t,r){return rE(n.writeTree,n.treePath,e,t,r)}function iE(n,e){return WP(n.writeTree,n.treePath,e)}function Op(n,e,t,r){return HP(n.writeTree,n.treePath,e,t,r)}function Ha(n,e){return QP(n.writeTree,et(n.treePath,e))}function XP(n,e,t,r,i,s){return YP(n.writeTree,n.treePath,e,t,r,i,s)}function Hd(n,e,t){return KP(n.writeTree,n.treePath,e,t)}function sE(n,e){return oE(et(n.treePath,e),n.writeTree)}function oE(n,e){return{treePath:n,writeTree:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZP{constructor(){this.changeMap=new Map}trackChildChange(e){const t=e.type,r=e.childName;H(t==="child_added"||t==="child_changed"||t==="child_removed","Only child changes supported for tracking"),H(r!==".priority","Only non-priority child changes can be tracked.");const i=this.changeMap.get(r);if(i){const s=i.type;if(t==="child_added"&&s==="child_removed")this.changeMap.set(r,bp(r,e.snapshotNode,i.snapshotNode));else if(t==="child_removed"&&s==="child_added")this.changeMap.delete(r);else if(t==="child_removed"&&s==="child_changed")this.changeMap.set(r,kP(r,i.oldSnap));else if(t==="child_changed"&&s==="child_added")this.changeMap.set(r,SP(r,e.snapshotNode));else if(t==="child_changed"&&s==="child_changed")this.changeMap.set(r,bp(r,e.snapshotNode,i.oldSnap));else throw ki("Illegal combination of changes: "+e+" occurred after "+i)}else this.changeMap.set(r,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eD{getCompleteChild(e){return null}getChildAfterChild(e,t,r){return null}}const aE=new eD;class Kd{constructor(e,t,r=null){this.writes_=e,this.viewCache_=t,this.optCompleteServerCache_=r}getCompleteChild(e){const t=this.viewCache_.eventCache;if(t.isCompleteForChild(e))return t.getNode().getImmediateChild(e);{const r=this.optCompleteServerCache_!=null?new Wd(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return Hd(this.writes_,e,r)}}getChildAfterChild(e,t,r){const i=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:xr(this.viewCache_),s=XP(this.writes_,i,t,1,r,e);return s.length===0?null:s[0]}}function tD(n,e){H(e.eventCache.getNode().isIndexed(n.filter.getIndex()),"Event snap not indexed"),H(e.serverCache.getNode().isIndexed(n.filter.getIndex()),"Server snap not indexed")}function nD(n,e,t,r,i){const s=new ZP;let o,a;if(t.type===sn.OVERWRITE){const u=t;u.source.fromUser?o=_u(n,e,u.path,u.snap,r,i,s):(H(u.source.fromServer,"Unknown source."),a=u.source.tagged||e.serverCache.isFiltered()&&!pe(u.path),o=Ka(n,e,u.path,u.snap,r,i,a,s))}else if(t.type===sn.MERGE){const u=t;u.source.fromUser?o=iD(n,e,u.path,u.children,r,i,s):(H(u.source.fromServer,"Unknown source."),a=u.source.tagged||e.serverCache.isFiltered(),o=yu(n,e,u.path,u.children,r,i,a,s))}else if(t.type===sn.ACK_USER_WRITE){const u=t;u.revert?o=aD(n,e,u.path,r,i,s):o=sD(n,e,u.path,u.affectedTree,r,i,s)}else if(t.type===sn.LISTEN_COMPLETE)o=oD(n,e,t.path,r,s);else throw ki("Unknown operation type: "+t.type);const c=s.getChanges();return rD(e,o,c),{viewCache:o,changes:c}}function rD(n,e,t){const r=e.eventCache;if(r.isFullyInitialized()){const i=r.getNode().isLeafNode()||r.getNode().isEmpty(),s=fu(n);(t.length>0||!n.eventCache.isFullyInitialized()||i&&!r.getNode().equals(s)||!r.getNode().getPriority().equals(s.getPriority()))&&t.push(bP(fu(e)))}}function cE(n,e,t,r,i,s){const o=e.eventCache;if(Ha(r,t)!=null)return e;{let a,c;if(pe(t))if(H(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const u=xr(e),d=u instanceof Ae?u:Ae.EMPTY_NODE,h=iE(r,d);a=n.filter.updateFullNode(e.eventCache.getNode(),h,s)}else{const u=gu(r,xr(e));a=n.filter.updateFullNode(e.eventCache.getNode(),u,s)}else{const u=ye(t);if(u===".priority"){H(dr(t)===1,"Can't have a priority with additional path components");const d=o.getNode();c=e.serverCache.getNode();const h=Op(r,t,d,c);h!=null?a=n.filter.updatePriority(d,h):a=o.getNode()}else{const d=Pe(t);let h;if(o.isCompleteForChild(u)){c=e.serverCache.getNode();const m=Op(r,t,o.getNode(),c);m!=null?h=o.getNode().getImmediateChild(u).updateChild(d,m):h=o.getNode().getImmediateChild(u)}else h=Hd(r,u,e.serverCache);h!=null?a=n.filter.updateChild(o.getNode(),u,h,d,i,s):a=o.getNode()}}return bs(e,a,o.isFullyInitialized()||pe(t),n.filter.filtersNodes())}}function Ka(n,e,t,r,i,s,o,a){const c=e.serverCache;let u;const d=o?n.filter:n.filter.getIndexedFilter();if(pe(t))u=d.updateFullNode(c.getNode(),r,null);else if(d.filtersNodes()&&!c.isFiltered()){const _=c.getNode().updateChild(t,r);u=d.updateFullNode(c.getNode(),_,null)}else{const _=ye(t);if(!c.isCompleteForPath(t)&&dr(t)>1)return e;const w=Pe(t),v=c.getNode().getImmediateChild(_).updateChild(w,r);_===".priority"?u=d.updatePriority(c.getNode(),v):u=d.updateChild(c.getNode(),_,v,w,aE,null)}const h=Zw(e,u,c.isFullyInitialized()||pe(t),d.filtersNodes()),m=new Kd(i,h,s);return cE(n,h,t,i,m,a)}function _u(n,e,t,r,i,s,o){const a=e.eventCache;let c,u;const d=new Kd(i,e,s);if(pe(t))u=n.filter.updateFullNode(e.eventCache.getNode(),r,o),c=bs(e,u,!0,n.filter.filtersNodes());else{const h=ye(t);if(h===".priority")u=n.filter.updatePriority(e.eventCache.getNode(),r),c=bs(e,u,a.isFullyInitialized(),a.isFiltered());else{const m=Pe(t),_=a.getNode().getImmediateChild(h);let w;if(pe(m))w=r;else{const E=d.getCompleteChild(h);E!=null?Uw(m)===".priority"&&E.getChild(Bw(m)).isEmpty()?w=E:w=E.updateChild(m,r):w=Ae.EMPTY_NODE}if(_.equals(w))c=e;else{const E=n.filter.updateChild(a.getNode(),h,w,m,d,o);c=bs(e,E,a.isFullyInitialized(),n.filter.filtersNodes())}}}return c}function Lp(n,e){return n.eventCache.isCompleteForChild(e)}function iD(n,e,t,r,i,s,o){let a=e;return r.foreach((c,u)=>{const d=et(t,c);Lp(e,ye(d))&&(a=_u(n,a,d,u,i,s,o))}),r.foreach((c,u)=>{const d=et(t,c);Lp(e,ye(d))||(a=_u(n,a,d,u,i,s,o))}),a}function Vp(n,e,t){return t.foreach((r,i)=>{e=e.updateChild(r,i)}),e}function yu(n,e,t,r,i,s,o,a){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let c=e,u;pe(t)?u=r:u=new Ce(null).setTree(t,r);const d=e.serverCache.getNode();return u.children.inorderTraversal((h,m)=>{if(d.hasChild(h)){const _=e.serverCache.getNode().getImmediateChild(h),w=Vp(n,_,m);c=Ka(n,c,new Oe(h),w,i,s,o,a)}}),u.children.inorderTraversal((h,m)=>{const _=!e.serverCache.isCompleteForChild(h)&&m.value===null;if(!d.hasChild(h)&&!_){const w=e.serverCache.getNode().getImmediateChild(h),E=Vp(n,w,m);c=Ka(n,c,new Oe(h),E,i,s,o,a)}}),c}function sD(n,e,t,r,i,s,o){if(Ha(i,t)!=null)return e;const a=e.serverCache.isFiltered(),c=e.serverCache;if(r.value!=null){if(pe(t)&&c.isFullyInitialized()||c.isCompleteForPath(t))return Ka(n,e,t,c.getNode().getChild(t),i,s,a,o);if(pe(t)){let u=new Ce(null);return c.getNode().forEachChild(fi,(d,h)=>{u=u.set(new Oe(d),h)}),yu(n,e,t,u,i,s,a,o)}else return e}else{let u=new Ce(null);return r.foreach((d,h)=>{const m=et(t,d);c.isCompleteForPath(m)&&(u=u.set(d,c.getNode().getChild(m)))}),yu(n,e,t,u,i,s,a,o)}}function oD(n,e,t,r,i){const s=e.serverCache,o=Zw(e,s.getNode(),s.isFullyInitialized()||pe(t),s.isFiltered());return cE(n,o,t,r,aE,i)}function aD(n,e,t,r,i,s){let o;if(Ha(r,t)!=null)return e;{const a=new Kd(r,e,i),c=e.eventCache.getNode();let u;if(pe(t)||ye(t)===".priority"){let d;if(e.serverCache.isFullyInitialized())d=gu(r,xr(e));else{const h=e.serverCache.getNode();H(h instanceof Ae,"serverChildren would be complete if leaf node"),d=iE(r,h)}d=d,u=n.filter.updateFullNode(c,d,s)}else{const d=ye(t);let h=Hd(r,d,e.serverCache);h==null&&e.serverCache.isCompleteForChild(d)&&(h=c.getImmediateChild(d)),h!=null?u=n.filter.updateChild(c,d,h,Pe(t),a,s):e.eventCache.getNode().hasChild(d)?u=n.filter.updateChild(c,d,Ae.EMPTY_NODE,Pe(t),a,s):u=c,u.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=gu(r,xr(e)),o.isLeafNode()&&(u=n.filter.updateFullNode(u,o,s)))}return o=e.serverCache.isFullyInitialized()||Ha(r,be())!=null,bs(e,u,o,n.filter.filtersNodes())}}function cD(n,e){const t=xr(n.viewCache_);return t&&(n.query._queryParams.loadsAllData()||!pe(e)&&!t.getImmediateChild(ye(e)).isEmpty())?t.getChild(e):null}function Mp(n,e,t,r){e.type===sn.MERGE&&e.source.queryId!==null&&(H(xr(n.viewCache_),"We should always have a full cache before handling merges"),H(fu(n.viewCache_),"Missing event cache, even though we have a server cache"));const i=n.viewCache_,s=nD(n.processor_,i,e,t,r);return tD(n.processor_,s.viewCache),H(s.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),n.viewCache_=s.viewCache,lD(n,s.changes,s.viewCache.eventCache.getNode())}function lD(n,e,t,r){const i=n.eventRegistrations_;return MP(n.eventGenerator_,e,t,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let xp;function uD(n){H(!xp,"__referenceConstructor has already been defined"),xp=n}function Qd(n,e,t,r){const i=e.source.queryId;if(i!==null){const s=n.views.get(i);return H(s!=null,"SyncTree gave us an op for an invalid query."),Mp(s,e,t,r)}else{let s=[];for(const o of n.views.values())s=s.concat(Mp(o,e,t,r));return s}}function Yd(n,e){let t=null;for(const r of n.views.values())t=t||cD(r,e);return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Up;function dD(n){H(!Up,"__referenceConstructor has already been defined"),Up=n}class Fp{constructor(e){this.listenProvider_=e,this.syncPointTree_=new Ce(null),this.pendingWriteTree_=JP(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function hD(n,e,t,r,i){return BP(n.pendingWriteTree_,e,t,r,i),i?Vc(n,new Mr(Qw(),e,t)):[]}function oi(n,e,t=!1){const r=$P(n.pendingWriteTree_,e);if(qP(n.pendingWriteTree_,e)){let s=new Ce(null);return r.snap!=null?s=s.set(be(),!0):$t(r.children,o=>{s=s.set(new Oe(o),!0)}),Vc(n,new Wa(r.path,s,t))}else return[]}function Lc(n,e,t){return Vc(n,new Mr(Yw(),e,t))}function fD(n,e,t){const r=Ce.fromObject(t);return Vc(n,new zs(Yw(),e,r))}function mD(n,e,t,r){const i=hE(n,r);if(i!=null){const s=fE(i),o=s.path,a=s.queryId,c=Ut(o,e),u=new Mr(Jw(a),c,t);return mE(n,o,u)}else return[]}function pD(n,e,t,r){const i=hE(n,r);if(i){const s=fE(i),o=s.path,a=s.queryId,c=Ut(o,e),u=Ce.fromObject(t),d=new zs(Jw(a),c,u);return mE(n,o,d)}else return[]}function lE(n,e,t){const i=n.pendingWriteTree_,s=n.syncPointTree_.findOnPath(e,(o,a)=>{const c=Ut(o,e),u=Yd(a,c);if(u)return u});return rE(i,e,s,t,!0)}function Vc(n,e){return uE(e,n.syncPointTree_,null,tE(n.pendingWriteTree_,be()))}function uE(n,e,t,r){if(pe(n.path))return dE(n,e,t,r);{const i=e.get(be());t==null&&i!=null&&(t=Yd(i,be()));let s=[];const o=ye(n.path),a=n.operationForChild(o),c=e.children.get(o);if(c&&a){const u=t?t.getImmediateChild(o):null,d=sE(r,o);s=s.concat(uE(a,c,u,d))}return i&&(s=s.concat(Qd(i,n,r,t))),s}}function dE(n,e,t,r){const i=e.get(be());t==null&&i!=null&&(t=Yd(i,be()));let s=[];return e.children.inorderTraversal((o,a)=>{const c=t?t.getImmediateChild(o):null,u=sE(r,o),d=n.operationForChild(o);d&&(s=s.concat(dE(d,a,c,u)))}),i&&(s=s.concat(Qd(i,n,r,t))),s}function hE(n,e){return n.tagToQueryMap.get(e)}function fE(n){const e=n.indexOf("$");return H(e!==-1&&e<n.length-1,"Bad queryKey."),{queryId:n.substr(e+1),path:new Oe(n.substr(0,e))}}function mE(n,e,t){const r=n.syncPointTree_.get(e);H(r,"Missing sync point for query tag that we're tracking");const i=tE(n.pendingWriteTree_,e);return Qd(r,t,i,null)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jd{constructor(e){this.node_=e}getImmediateChild(e){const t=this.node_.getImmediateChild(e);return new Jd(t)}node(){return this.node_}}class Xd{constructor(e,t){this.syncTree_=e,this.path_=t}getImmediateChild(e){const t=et(this.path_,e);return new Xd(this.syncTree_,t)}node(){return lE(this.syncTree_,this.path_)}}const gD=function(n){return n=n||{},n.timestamp=n.timestamp||new Date().getTime(),n},Bp=function(n,e,t){if(!n||typeof n!="object")return n;if(H(".sv"in n,"Unexpected leaf node or priority contents"),typeof n[".sv"]=="string")return _D(n[".sv"],e,t);if(typeof n[".sv"]=="object")return yD(n[".sv"],e);H(!1,"Unexpected server value: "+JSON.stringify(n,null,2))},_D=function(n,e,t){switch(n){case"timestamp":return t.timestamp;default:H(!1,"Unexpected server value: "+n)}},yD=function(n,e,t){n.hasOwnProperty("increment")||H(!1,"Unexpected server value: "+JSON.stringify(n,null,2));const r=n.increment;typeof r!="number"&&H(!1,"Unexpected increment value: "+r);const i=e.node();if(H(i!==null&&typeof i!="undefined","Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return r;const o=i.getValue();return typeof o!="number"?r:o+r},wD=function(n,e,t,r){return Zd(e,new Xd(t,n),r)},ED=function(n,e,t){return Zd(n,new Jd(e),t)};function Zd(n,e,t){const r=n.getPriority().val(),i=Bp(r,e.getImmediateChild(".priority"),t);let s;if(n.isLeafNode()){const o=n,a=Bp(o.getValue(),e,t);return a!==o.getValue()||i!==o.getPriority().val()?new Qe(a,ft(i)):n}else{const o=n;return s=o,i!==o.getPriority().val()&&(s=s.updatePriority(new Qe(i))),o.forEachChild(mt,(a,c)=>{const u=Zd(c,e.getImmediateChild(a),t);u!==c&&(s=s.updateImmediateChild(a,u))}),s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eh{constructor(e="",t=null,r={children:{},childCount:0}){this.name=e,this.parent=t,this.node=r}}function th(n,e){let t=e instanceof Oe?e:new Oe(e),r=n,i=ye(t);for(;i!==null;){const s=mi(r.node.children,i)||{children:{},childCount:0};r=new eh(i,r,s),t=Pe(t),i=ye(t)}return r}function xi(n){return n.node.value}function pE(n,e){n.node.value=e,wu(n)}function gE(n){return n.node.childCount>0}function vD(n){return xi(n)===void 0&&!gE(n)}function Mc(n,e){$t(n.node.children,(t,r)=>{e(new eh(t,n,r))})}function _E(n,e,t,r){t&&!r&&e(n),Mc(n,i=>{_E(i,e,!0,r)}),t&&r&&e(n)}function TD(n,e,t){let r=n.parent;for(;r!==null;){if(e(r))return!0;r=r.parent}return!1}function Eo(n){return new Oe(n.parent===null?n.name:Eo(n.parent)+"/"+n.name)}function wu(n){n.parent!==null&&ID(n.parent,n.name,n)}function ID(n,e,t){const r=vD(t),i=Un(n.node.children,e);r&&i?(delete n.node.children[e],n.node.childCount--,wu(n)):!r&&!i&&(n.node.children[e]=t.node,n.node.childCount++,wu(n))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const AD=/[\[\].#$\/\u0000-\u001F\u007F]/,RD=/[\[\].#$\u0000-\u001F\u007F]/,kl=10*1024*1024,yE=function(n){return typeof n=="string"&&n.length!==0&&!AD.test(n)},bD=function(n){return typeof n=="string"&&n.length!==0&&!RD.test(n)},SD=function(n){return n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),bD(n)},wE=function(n,e,t){const r=t instanceof Oe?new oP(t,n):t;if(e===void 0)throw new Error(n+"contains undefined "+Tr(r));if(typeof e=="function")throw new Error(n+"contains a function "+Tr(r)+" with contents = "+e.toString());if(_w(e))throw new Error(n+"contains "+e.toString()+" "+Tr(r));if(typeof e=="string"&&e.length>kl/3&&rc(e)>kl)throw new Error(n+"contains a string greater than "+kl+" utf8 bytes "+Tr(r)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let i=!1,s=!1;if($t(e,(o,a)=>{if(o===".value")i=!0;else if(o!==".priority"&&o!==".sv"&&(s=!0,!yE(o)))throw new Error(n+" contains an invalid key ("+o+") "+Tr(r)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);aP(r,o),wE(n,a,r),cP(r)}),i&&s)throw new Error(n+' contains ".value" child '+Tr(r)+" in addition to actual children.")}},kD=function(n,e){const t=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!yE(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||t.length!==0&&!SD(t))throw new Error(ST(n,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CD{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function PD(n,e){let t=null;for(let r=0;r<e.length;r++){const i=e[r],s=i.getPath();t!==null&&!$w(s,t.path)&&(n.eventLists_.push(t),t=null),t===null&&(t={events:[],path:s}),t.events.push(i)}t&&n.eventLists_.push(t)}function Qr(n,e,t){PD(n,t),DD(n,r=>Ht(r,e)||Ht(e,r))}function DD(n,e){n.recursionDepth_++;let t=!0;for(let r=0;r<n.eventLists_.length;r++){const i=n.eventLists_[r];if(i){const s=i.path;e(s)?(ND(n.eventLists_[r]),n.eventLists_[r]=null):t=!1}}t&&(n.eventLists_=[]),n.recursionDepth_--}function ND(n){for(let e=0;e<n.events.length;e++){const t=n.events[e];if(t!==null){n.events[e]=null;const r=t.getEventRunner();As&&ht("event: "+t.toString()),yo(r)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const OD="repo_interrupt",LD=25;class VD{constructor(e,t,r,i){this.repoInfo_=e,this.forceRestClient_=t,this.authTokenProvider_=r,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new CD,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=Ga(),this.transactionQueueTree_=new eh,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function MD(n,e,t){if(n.stats_=$d(n.repoInfo_),n.forceRestClient_||DC())n.server_=new za(n.repoInfo_,(r,i,s,o)=>{$p(n,r,i,s,o)},n.authTokenProvider_,n.appCheckProvider_),setTimeout(()=>qp(n,!0),0);else{if(typeof t!="undefined"&&t!==null){if(typeof t!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{st(t)}catch(r){throw new Error("Invalid authOverride provided: "+r)}}n.persistentConnection_=new kn(n.repoInfo_,e,(r,i,s,o)=>{$p(n,r,i,s,o)},r=>{qp(n,r)},r=>{UD(n,r)},n.authTokenProvider_,n.appCheckProvider_,t),n.server_=n.persistentConnection_}n.authTokenProvider_.addTokenChangeListener(r=>{n.server_.refreshAuthToken(r)}),n.appCheckProvider_.addTokenChangeListener(r=>{n.server_.refreshAppCheckToken(r.token)}),n.statsReporter_=MC(n.repoInfo_,()=>new VP(n.stats_,n.server_)),n.infoData_=new PP,n.infoSyncTree_=new Fp({startListening:(r,i,s,o)=>{let a=[];const c=n.infoData_.getNode(r._path);return c.isEmpty()||(a=Lc(n.infoSyncTree_,r._path,c),setTimeout(()=>{o("ok")},0)),a},stopListening:()=>{}}),nh(n,"connected",!1),n.serverSyncTree_=new Fp({startListening:(r,i,s,o)=>(n.server_.listen(r,s,i,(a,c)=>{const u=o(a,c);Qr(n.eventQueue_,r._path,u)}),[]),stopListening:(r,i)=>{n.server_.unlisten(r,i)}})}function xD(n){const t=n.infoData_.getNode(new Oe(".info/serverTimeOffset")).val()||0;return new Date().getTime()+t}function EE(n){return gD({timestamp:xD(n)})}function $p(n,e,t,r,i){n.dataUpdateCount++;const s=new Oe(e);t=n.interceptServerDataCallback_?n.interceptServerDataCallback_(e,t):t;let o=[];if(i)if(r){const c=pa(t,u=>ft(u));o=pD(n.serverSyncTree_,s,c,i)}else{const c=ft(t);o=mD(n.serverSyncTree_,s,c,i)}else if(r){const c=pa(t,u=>ft(u));o=fD(n.serverSyncTree_,s,c)}else{const c=ft(t);o=Lc(n.serverSyncTree_,s,c)}let a=s;o.length>0&&(a=ih(n,s)),Qr(n.eventQueue_,a,o)}function qp(n,e){nh(n,"connected",e),e===!1&&BD(n)}function UD(n,e){$t(e,(t,r)=>{nh(n,t,r)})}function nh(n,e,t){const r=new Oe("/.info/"+e),i=ft(t);n.infoData_.updateSnapshot(r,i);const s=Lc(n.infoSyncTree_,r,i);Qr(n.eventQueue_,r,s)}function FD(n){return n.nextWriteId_++}function BD(n){vE(n,"onDisconnectEvents");const e=EE(n),t=Ga();hu(n.onDisconnect_,be(),(i,s)=>{const o=wD(i,s,n.serverSyncTree_,e);Kw(t,i,o)});let r=[];hu(t,be(),(i,s)=>{r=r.concat(Lc(n.serverSyncTree_,i,s));const o=zD(n,i);ih(n,o)}),n.onDisconnect_=Ga(),Qr(n.eventQueue_,be(),r)}function $D(n){n.persistentConnection_&&n.persistentConnection_.interrupt(OD)}function vE(n,...e){let t="";n.persistentConnection_&&(t=n.persistentConnection_.id+":"),ht(t,...e)}function TE(n,e,t){return lE(n.serverSyncTree_,e,t)||Ae.EMPTY_NODE}function rh(n,e=n.transactionQueueTree_){if(e||xc(n,e),xi(e)){const t=AE(n,e);H(t.length>0,"Sending zero length transaction queue"),t.every(i=>i.status===0)&&qD(n,Eo(e),t)}else gE(e)&&Mc(e,t=>{rh(n,t)})}function qD(n,e,t){const r=t.map(u=>u.currentWriteId),i=TE(n,e,r);let s=i;const o=i.hash();for(let u=0;u<t.length;u++){const d=t[u];H(d.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),d.status=1,d.retryCount++;const h=Ut(e,d.path);s=s.updateChild(h,d.currentOutputSnapshotRaw)}const a=s.val(!0),c=e;n.server_.put(c.toString(),a,u=>{vE(n,"transaction put response",{path:c.toString(),status:u});let d=[];if(u==="ok"){const h=[];for(let m=0;m<t.length;m++)t[m].status=2,d=d.concat(oi(n.serverSyncTree_,t[m].currentWriteId)),t[m].onComplete&&h.push(()=>t[m].onComplete(null,!0,t[m].currentOutputSnapshotResolved)),t[m].unwatcher();xc(n,th(n.transactionQueueTree_,e)),rh(n,n.transactionQueueTree_),Qr(n.eventQueue_,e,d);for(let m=0;m<h.length;m++)yo(h[m])}else{if(u==="datastale")for(let h=0;h<t.length;h++)t[h].status===3?t[h].status=4:t[h].status=0;else{Lt("transaction at "+c.toString()+" failed: "+u);for(let h=0;h<t.length;h++)t[h].status=4,t[h].abortReason=u}ih(n,e)}},o)}function ih(n,e){const t=IE(n,e),r=Eo(t),i=AE(n,t);return jD(n,i,r),r}function jD(n,e,t){if(e.length===0)return;const r=[];let i=[];const o=e.filter(a=>a.status===0).map(a=>a.currentWriteId);for(let a=0;a<e.length;a++){const c=e[a],u=Ut(t,c.path);let d=!1,h;if(H(u!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),c.status===4)d=!0,h=c.abortReason,i=i.concat(oi(n.serverSyncTree_,c.currentWriteId,!0));else if(c.status===0)if(c.retryCount>=LD)d=!0,h="maxretry",i=i.concat(oi(n.serverSyncTree_,c.currentWriteId,!0));else{const m=TE(n,c.path,o);c.currentInputSnapshot=m;const _=e[a].update(m.val());if(_!==void 0){wE("transaction failed: Data returned ",_,c.path);let w=ft(_);typeof _=="object"&&_!=null&&Un(_,".priority")||(w=w.updatePriority(m.getPriority()));const v=c.currentWriteId,C=EE(n),O=ED(w,m,C);c.currentOutputSnapshotRaw=w,c.currentOutputSnapshotResolved=O,c.currentWriteId=FD(n),o.splice(o.indexOf(v),1),i=i.concat(hD(n.serverSyncTree_,c.path,O,c.currentWriteId,c.applyLocally)),i=i.concat(oi(n.serverSyncTree_,v,!0))}else d=!0,h="nodata",i=i.concat(oi(n.serverSyncTree_,c.currentWriteId,!0))}Qr(n.eventQueue_,t,i),i=[],d&&(e[a].status=2,function(m){setTimeout(m,Math.floor(0))}(e[a].unwatcher),e[a].onComplete&&(h==="nodata"?r.push(()=>e[a].onComplete(null,!1,e[a].currentInputSnapshot)):r.push(()=>e[a].onComplete(new Error(h),!1,null))))}xc(n,n.transactionQueueTree_);for(let a=0;a<r.length;a++)yo(r[a]);rh(n,n.transactionQueueTree_)}function IE(n,e){let t,r=n.transactionQueueTree_;for(t=ye(e);t!==null&&xi(r)===void 0;)r=th(r,t),e=Pe(e),t=ye(e);return r}function AE(n,e){const t=[];return RE(n,e,t),t.sort((r,i)=>r.order-i.order),t}function RE(n,e,t){const r=xi(e);if(r)for(let i=0;i<r.length;i++)t.push(r[i]);Mc(e,i=>{RE(n,i,t)})}function xc(n,e){const t=xi(e);if(t){let r=0;for(let i=0;i<t.length;i++)t[i].status!==2&&(t[r]=t[i],r++);t.length=r,pE(e,t.length>0?t:void 0)}Mc(e,r=>{xc(n,r)})}function zD(n,e){const t=Eo(IE(n,e)),r=th(n.transactionQueueTree_,e);return TD(r,i=>{Cl(n,i)}),Cl(n,r),_E(r,i=>{Cl(n,i)}),t}function Cl(n,e){const t=xi(e);if(t){const r=[];let i=[],s=-1;for(let o=0;o<t.length;o++)t[o].status===3||(t[o].status===1?(H(s===o-1,"All SENT items should be at beginning of queue."),s=o,t[o].status=3,t[o].abortReason="set"):(H(t[o].status===0,"Unexpected transaction status in abort"),t[o].unwatcher(),i=i.concat(oi(n.serverSyncTree_,t[o].currentWriteId,!0)),t[o].onComplete&&r.push(t[o].onComplete.bind(null,new Error("set"),!1,null))));s===-1?pE(e,void 0):t.length=s+1,Qr(n.eventQueue_,Eo(e),i);for(let o=0;o<r.length;o++)yo(r[o])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function GD(n){let e="";const t=n.split("/");for(let r=0;r<t.length;r++)if(t[r].length>0){let i=t[r];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch(s){}e+="/"+i}return e}function WD(n){const e={};n.charAt(0)==="?"&&(n=n.substring(1));for(const t of n.split("&")){if(t.length===0)continue;const r=t.split("=");r.length===2?e[decodeURIComponent(r[0])]=decodeURIComponent(r[1]):Lt(`Invalid query segment '${t}' in query '${n}'`)}return e}const jp=function(n,e){const t=HD(n),r=t.namespace;t.domain==="firebase.com"&&Mn(t.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!r||r==="undefined")&&t.domain!=="localhost"&&Mn("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),t.secure||IC();const i=t.scheme==="ws"||t.scheme==="wss";return{repoInfo:new Cw(t.host,t.secure,r,i,e,"",r!==t.subdomain),path:new Oe(t.pathString)}},HD=function(n){let e="",t="",r="",i="",s="",o=!0,a="https",c=443;if(typeof n=="string"){let u=n.indexOf("//");u>=0&&(a=n.substring(0,u-1),n=n.substring(u+2));let d=n.indexOf("/");d===-1&&(d=n.length);let h=n.indexOf("?");h===-1&&(h=n.length),e=n.substring(0,Math.min(d,h)),d<h&&(i=GD(n.substring(d,h)));const m=WD(n.substring(Math.min(n.length,h)));u=e.indexOf(":"),u>=0?(o=a==="https"||a==="wss",c=parseInt(e.substring(u+1),10)):u=e.length;const _=e.slice(0,u);if(_.toLowerCase()==="localhost")t="localhost";else if(_.split(".").length<=2)t=_;else{const w=e.indexOf(".");r=e.substring(0,w).toLowerCase(),t=e.substring(w+1),s=r}"ns"in m&&(s=m.ns)}return{host:e,port:c,domain:t,subdomain:r,secure:o,scheme:a,pathString:i,namespace:s}};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sh{constructor(e,t,r,i){this._repo=e,this._path=t,this._queryParams=r,this._orderByCalled=i}get key(){return pe(this._path)?null:Uw(this._path)}get ref(){return new Ui(this._repo,this._path)}get _queryIdentifier(){const e=kp(this._queryParams),t=Fd(e);return t==="{}"?"default":t}get _queryObject(){return kp(this._queryParams)}isEqual(e){if(e=fe(e),!(e instanceof sh))return!1;const t=this._repo===e._repo,r=$w(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return t&&r&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+sP(this._path)}}class Ui extends sh{constructor(e,t){super(e,t,new Gd,!1)}get parent(){const e=Bw(this._path);return e===null?null:new Ui(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}uD(Ui);dD(Ui);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const KD="FIREBASE_DATABASE_EMULATOR_HOST",Eu={};let QD=!1;function YD(n,e,t,r){const i=e.lastIndexOf(":"),s=e.substring(0,i),o=fn(s);n.repoInfo_=new Cw(e,o,n.repoInfo_.namespace,n.repoInfo_.webSocketOnly,n.repoInfo_.nodeAdmin,n.repoInfo_.persistenceKey,n.repoInfo_.includeNamespaceInQueryParams,!0,t),r&&(n.authTokenProvider_=r)}function JD(n,e,t,r,i){let s=r||n.options.databaseURL;s===void 0&&(n.options.projectId||Mn("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),ht("Using default host for project ",n.options.projectId),s=`${n.options.projectId}-default-rtdb.firebaseio.com`);let o=jp(s,i),a=o.repoInfo,c;typeof process!="undefined"&&lp&&(c=lp[KD]),c&&(s=`http://${c}?ns=${a.namespace}`,o=jp(s,i),a=o.repoInfo);const u=new OC(n.name,n.options,e);kD("Invalid Firebase Database URL",o),pe(o.path)||Mn("Database URL must point to the root of a Firebase Database (not including a child path).");const d=ZD(a,n,u,new NC(n,t));return new eN(d,n)}function XD(n,e){const t=Eu[e];(!t||t[n.key]!==n)&&Mn(`Database ${e}(${n.repoInfo_}) has already been deleted.`),$D(n),delete t[n.key]}function ZD(n,e,t,r){let i=Eu[e.name];i||(i={},Eu[e.name]=i);let s=i[n.toURLString()];return s&&Mn("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),s=new VD(n,QD,t,r),i[n.toURLString()]=s,s}class eN{constructor(e,t){this._repoInternal=e,this.app=t,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(MD(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new Ui(this._repo,be())),this._rootInternal}_delete(){return this._rootInternal!==null&&(XD(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&Mn("Cannot call "+e+" on a deleted database.")}}function zp(n=Zs(),e){const t=Fn(n,"database").getImmediate({identifier:e});if(!t._instanceStarted){const r=Du("database");r&&tN(t,...r)}return t}function tN(n,e,t,r={}){n=fe(n),n._checkNotDeleted("useEmulator");const i=`${e}:${t}`,s=n._repoInternal;if(n._instanceStarted){if(i===n._repoInternal.repoInfo_.host&&Pn(r,s.repoInfo_.emulatorOptions))return;Mn("connectDatabaseEmulator() cannot initialize or alter the emulator configuration after the database instance has started.")}let o;if(s.repoInfo_.nodeAdmin)r.mockUserToken&&Mn('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),o=new ha(ha.OWNER);else if(r.mockUserToken){const a=typeof r.mockUserToken=="string"?r.mockUserToken:Ou(r.mockUserToken,n.app.options.projectId);o=new ha(a)}fn(e)&&(tc(e),nc("Database",!0)),YD(s,i,r,o)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nN(n){_C(fr),Ft(new Vt("database",(e,{instanceIdentifier:t})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),s=e.getProvider("app-check-internal");return JD(r,i,s,t)},"PUBLIC").setMultipleInstances(!0)),pt(up,dp,n),pt(up,dp,"esm2017")}kn.prototype.simpleListen=function(n,e){this.sendRequest("q",{p:n},e)};kn.prototype.echo=function(n,e){this.sendRequest("echo",{d:n},e)};nN();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bE="firebasestorage.googleapis.com",SE="storageBucket",rN=2*60*1e3,iN=10*60*1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fe extends qt{constructor(e,t,r=0){super(Pl(e),`Firebase Storage: ${t} (${Pl(e)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,Fe.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return Pl(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var Ue;(function(n){n.UNKNOWN="unknown",n.OBJECT_NOT_FOUND="object-not-found",n.BUCKET_NOT_FOUND="bucket-not-found",n.PROJECT_NOT_FOUND="project-not-found",n.QUOTA_EXCEEDED="quota-exceeded",n.UNAUTHENTICATED="unauthenticated",n.UNAUTHORIZED="unauthorized",n.UNAUTHORIZED_APP="unauthorized-app",n.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",n.INVALID_CHECKSUM="invalid-checksum",n.CANCELED="canceled",n.INVALID_EVENT_NAME="invalid-event-name",n.INVALID_URL="invalid-url",n.INVALID_DEFAULT_BUCKET="invalid-default-bucket",n.NO_DEFAULT_BUCKET="no-default-bucket",n.CANNOT_SLICE_BLOB="cannot-slice-blob",n.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",n.NO_DOWNLOAD_URL="no-download-url",n.INVALID_ARGUMENT="invalid-argument",n.INVALID_ARGUMENT_COUNT="invalid-argument-count",n.APP_DELETED="app-deleted",n.INVALID_ROOT_OPERATION="invalid-root-operation",n.INVALID_FORMAT="invalid-format",n.INTERNAL_ERROR="internal-error",n.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(Ue||(Ue={}));function Pl(n){return"storage/"+n}function oh(){const n="An unknown error occurred, please check the error payload for server response.";return new Fe(Ue.UNKNOWN,n)}function sN(n){return new Fe(Ue.OBJECT_NOT_FOUND,"Object '"+n+"' does not exist.")}function oN(n){return new Fe(Ue.QUOTA_EXCEEDED,"Quota for bucket '"+n+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function aN(){const n="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new Fe(Ue.UNAUTHENTICATED,n)}function cN(){return new Fe(Ue.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function lN(n){return new Fe(Ue.UNAUTHORIZED,"User does not have permission to access '"+n+"'.")}function uN(){return new Fe(Ue.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function dN(){return new Fe(Ue.CANCELED,"User canceled the upload/download.")}function hN(n){return new Fe(Ue.INVALID_URL,"Invalid URL '"+n+"'.")}function fN(n){return new Fe(Ue.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+n+"'.")}function mN(){return new Fe(Ue.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+SE+"' property when initializing the app?")}function pN(){return new Fe(Ue.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function gN(){return new Fe(Ue.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function _N(n){return new Fe(Ue.UNSUPPORTED_ENVIRONMENT,`${n} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function vu(n){return new Fe(Ue.INVALID_ARGUMENT,n)}function kE(){return new Fe(Ue.APP_DELETED,"The Firebase app was deleted.")}function yN(n){return new Fe(Ue.INVALID_ROOT_OPERATION,"The operation '"+n+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function ks(n,e){return new Fe(Ue.INVALID_FORMAT,"String does not match format '"+n+"': "+e)}function os(n){throw new Fe(Ue.INTERNAL_ERROR,"Internal error: "+n)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dt{constructor(e,t){this.bucket=e,this.path_=t}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,t){let r;try{r=Dt.makeFromUrl(e,t)}catch(i){return new Dt(e,"")}if(r.path==="")return r;throw fN(e)}static makeFromUrl(e,t){let r=null;const i="([A-Za-z0-9.\\-_]+)";function s(M){M.path.charAt(M.path.length-1)==="/"&&(M.path_=M.path_.slice(0,-1))}const o="(/(.*))?$",a=new RegExp("^gs://"+i+o,"i"),c={bucket:1,path:3};function u(M){M.path_=decodeURIComponent(M.path)}const d="v[A-Za-z0-9_]+",h=t.replace(/[.]/g,"\\."),m="(/([^?#]*).*)?$",_=new RegExp(`^https?://${h}/${d}/b/${i}/o${m}`,"i"),w={bucket:1,path:3},E=t===bE?"(?:storage.googleapis.com|storage.cloud.google.com)":t,v="([^?#]*)",C=new RegExp(`^https?://${E}/${i}/${v}`,"i"),U=[{regex:a,indices:c,postModify:s},{regex:_,indices:w,postModify:u},{regex:C,indices:{bucket:1,path:2},postModify:u}];for(let M=0;M<U.length;M++){const Z=U[M],K=Z.regex.exec(e);if(K){const R=K[Z.indices.bucket];let T=K[Z.indices.path];T||(T=""),r=new Dt(R,T),Z.postModify(r);break}}if(r==null)throw hN(e);return r}}class wN{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function EN(n,e,t){let r=1,i=null,s=null,o=!1,a=0;function c(){return a===2}let u=!1;function d(...v){u||(u=!0,e.apply(null,v))}function h(v){i=setTimeout(()=>{i=null,n(_,c())},v)}function m(){s&&clearTimeout(s)}function _(v,...C){if(u){m();return}if(v){m(),d.call(null,v,...C);return}if(c()||o){m(),d.call(null,v,...C);return}r<64&&(r*=2);let U;a===1?(a=2,U=0):U=(r+Math.random())*1e3,h(U)}let w=!1;function E(v){w||(w=!0,m(),!u&&(i!==null?(v||(a=2),clearTimeout(i),h(0)):v||(a=1)))}return h(0),s=setTimeout(()=>{o=!0,E(!0)},t),E}function vN(n){n(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function TN(n){return n!==void 0}function IN(n){return typeof n=="object"&&!Array.isArray(n)}function ah(n){return typeof n=="string"||n instanceof String}function Gp(n){return ch()&&n instanceof Blob}function ch(){return typeof Blob!="undefined"}function Wp(n,e,t,r){if(r<e)throw vu(`Invalid value for '${n}'. Expected ${e} or greater.`);if(r>t)throw vu(`Invalid value for '${n}'. Expected ${t} or less.`)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Uc(n,e,t){let r=e;return t==null&&(r=`https://${e}`),`${t}://${r}/v0${n}`}function CE(n){const e=encodeURIComponent;let t="?";for(const r in n)if(n.hasOwnProperty(r)){const i=e(r)+"="+e(n[r]);t=t+i+"&"}return t=t.slice(0,-1),t}var kr;(function(n){n[n.NO_ERROR=0]="NO_ERROR",n[n.NETWORK_ERROR=1]="NETWORK_ERROR",n[n.ABORT=2]="ABORT"})(kr||(kr={}));/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function AN(n,e){const t=n>=500&&n<600,i=[408,429].indexOf(n)!==-1,s=e.indexOf(n)!==-1;return t||i||s}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RN{constructor(e,t,r,i,s,o,a,c,u,d,h,m=!0,_=!1){this.url_=e,this.method_=t,this.headers_=r,this.body_=i,this.successCodes_=s,this.additionalRetryCodes_=o,this.callback_=a,this.errorCallback_=c,this.timeout_=u,this.progressCallback_=d,this.connectionFactory_=h,this.retry=m,this.isUsingEmulator=_,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((w,E)=>{this.resolve_=w,this.reject_=E,this.start_()})}start_(){const e=(r,i)=>{if(i){r(!1,new Zo(!1,null,!0));return}const s=this.connectionFactory_();this.pendingConnection_=s;const o=a=>{const c=a.loaded,u=a.lengthComputable?a.total:-1;this.progressCallback_!==null&&this.progressCallback_(c,u)};this.progressCallback_!==null&&s.addUploadProgressListener(o),s.send(this.url_,this.method_,this.isUsingEmulator,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&s.removeUploadProgressListener(o),this.pendingConnection_=null;const a=s.getErrorCode()===kr.NO_ERROR,c=s.getStatus();if(!a||AN(c,this.additionalRetryCodes_)&&this.retry){const d=s.getErrorCode()===kr.ABORT;r(!1,new Zo(!1,null,d));return}const u=this.successCodes_.indexOf(c)!==-1;r(!0,new Zo(u,s))})},t=(r,i)=>{const s=this.resolve_,o=this.reject_,a=i.connection;if(i.wasSuccessCode)try{const c=this.callback_(a,a.getResponse());TN(c)?s(c):s()}catch(c){o(c)}else if(a!==null){const c=oh();c.serverResponse=a.getErrorText(),this.errorCallback_?o(this.errorCallback_(a,c)):o(c)}else if(i.canceled){const c=this.appDelete_?kE():dN();o(c)}else{const c=uN();o(c)}};this.canceled_?t(!1,new Zo(!1,null,!0)):this.backoffId_=EN(e,t,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&vN(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class Zo{constructor(e,t,r){this.wasSuccessCode=e,this.connection=t,this.canceled=!!r}}function bN(n,e){e!==null&&e.length>0&&(n.Authorization="Firebase "+e)}function SN(n,e){n["X-Firebase-Storage-Version"]="webjs/"+(e!=null?e:"AppManager")}function kN(n,e){e&&(n["X-Firebase-GMPID"]=e)}function CN(n,e){e!==null&&(n["X-Firebase-AppCheck"]=e)}function PN(n,e,t,r,i,s,o=!0,a=!1){const c=CE(n.urlParams),u=n.url+c,d=Object.assign({},n.headers);return kN(d,e),bN(d,t),SN(d,s),CN(d,r),new RN(u,n.method,d,n.body,n.successCodes,n.additionalRetryCodes,n.handler,n.errorHandler,n.timeout,n.progressCallback,i,o,a)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function DN(){return typeof BlobBuilder!="undefined"?BlobBuilder:typeof WebKitBlobBuilder!="undefined"?WebKitBlobBuilder:void 0}function NN(...n){const e=DN();if(e!==void 0){const t=new e;for(let r=0;r<n.length;r++)t.append(n[r]);return t.getBlob()}else{if(ch())return new Blob(n);throw new Fe(Ue.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function ON(n,e,t){return n.webkitSlice?n.webkitSlice(e,t):n.mozSlice?n.mozSlice(e,t):n.slice?n.slice(e,t):null}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function LN(n){if(typeof atob=="undefined")throw _N("base-64");return atob(n)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const on={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class Dl{constructor(e,t){this.data=e,this.contentType=t||null}}function VN(n,e){switch(n){case on.RAW:return new Dl(PE(e));case on.BASE64:case on.BASE64URL:return new Dl(DE(n,e));case on.DATA_URL:return new Dl(xN(e),UN(e))}throw oh()}function PE(n){const e=[];for(let t=0;t<n.length;t++){let r=n.charCodeAt(t);if(r<=127)e.push(r);else if(r<=2047)e.push(192|r>>6,128|r&63);else if((r&64512)===55296)if(!(t<n.length-1&&(n.charCodeAt(t+1)&64512)===56320))e.push(239,191,189);else{const s=r,o=n.charCodeAt(++t);r=65536|(s&1023)<<10|o&1023,e.push(240|r>>18,128|r>>12&63,128|r>>6&63,128|r&63)}else(r&64512)===56320?e.push(239,191,189):e.push(224|r>>12,128|r>>6&63,128|r&63)}return new Uint8Array(e)}function MN(n){let e;try{e=decodeURIComponent(n)}catch(t){throw ks(on.DATA_URL,"Malformed data URL.")}return PE(e)}function DE(n,e){switch(n){case on.BASE64:{const i=e.indexOf("-")!==-1,s=e.indexOf("_")!==-1;if(i||s)throw ks(n,"Invalid character '"+(i?"-":"_")+"' found: is it base64url encoded?");break}case on.BASE64URL:{const i=e.indexOf("+")!==-1,s=e.indexOf("/")!==-1;if(i||s)throw ks(n,"Invalid character '"+(i?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let t;try{t=LN(e)}catch(i){throw i.message.includes("polyfill")?i:ks(n,"Invalid character found")}const r=new Uint8Array(t.length);for(let i=0;i<t.length;i++)r[i]=t.charCodeAt(i);return r}class NE{constructor(e){this.base64=!1,this.contentType=null;const t=e.match(/^data:([^,]+)?,/);if(t===null)throw ks(on.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const r=t[1]||null;r!=null&&(this.base64=FN(r,";base64"),this.contentType=this.base64?r.substring(0,r.length-7):r),this.rest=e.substring(e.indexOf(",")+1)}}function xN(n){const e=new NE(n);return e.base64?DE(on.BASE64,e.rest):MN(e.rest)}function UN(n){return new NE(n).contentType}function FN(n,e){return n.length>=e.length?n.substring(n.length-e.length)===e:!1}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hn{constructor(e,t){let r=0,i="";Gp(e)?(this.data_=e,r=e.size,i=e.type):e instanceof ArrayBuffer?(t?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),r=this.data_.length):e instanceof Uint8Array&&(t?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),r=e.length),this.size_=r,this.type_=i}size(){return this.size_}type(){return this.type_}slice(e,t){if(Gp(this.data_)){const r=this.data_,i=ON(r,e,t);return i===null?null:new Hn(i)}else{const r=new Uint8Array(this.data_.buffer,e,t-e);return new Hn(r,!0)}}static getBlob(...e){if(ch()){const t=e.map(r=>r instanceof Hn?r.data_:r);return new Hn(NN.apply(null,t))}else{const t=e.map(o=>ah(o)?VN(on.RAW,o).data:o.data_);let r=0;t.forEach(o=>{r+=o.byteLength});const i=new Uint8Array(r);let s=0;return t.forEach(o=>{for(let a=0;a<o.length;a++)i[s++]=o[a]}),new Hn(i,!0)}}uploadData(){return this.data_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function OE(n){let e;try{e=JSON.parse(n)}catch(t){return null}return IN(e)?e:null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function BN(n){if(n.length===0)return null;const e=n.lastIndexOf("/");return e===-1?"":n.slice(0,e)}function $N(n,e){const t=e.split("/").filter(r=>r.length>0).join("/");return n.length===0?t:n+"/"+t}function LE(n){const e=n.lastIndexOf("/",n.length-2);return e===-1?n:n.slice(e+1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qN(n,e){return e}class wt{constructor(e,t,r,i){this.server=e,this.local=t||e,this.writable=!!r,this.xform=i||qN}}let ea=null;function jN(n){return!ah(n)||n.length<2?n:LE(n)}function VE(){if(ea)return ea;const n=[];n.push(new wt("bucket")),n.push(new wt("generation")),n.push(new wt("metageneration")),n.push(new wt("name","fullPath",!0));function e(s,o){return jN(o)}const t=new wt("name");t.xform=e,n.push(t);function r(s,o){return o!==void 0?Number(o):o}const i=new wt("size");return i.xform=r,n.push(i),n.push(new wt("timeCreated")),n.push(new wt("updated")),n.push(new wt("md5Hash",null,!0)),n.push(new wt("cacheControl",null,!0)),n.push(new wt("contentDisposition",null,!0)),n.push(new wt("contentEncoding",null,!0)),n.push(new wt("contentLanguage",null,!0)),n.push(new wt("contentType",null,!0)),n.push(new wt("metadata","customMetadata",!0)),ea=n,ea}function zN(n,e){function t(){const r=n.bucket,i=n.fullPath,s=new Dt(r,i);return e._makeStorageReference(s)}Object.defineProperty(n,"ref",{get:t})}function GN(n,e,t){const r={};r.type="file";const i=t.length;for(let s=0;s<i;s++){const o=t[s];r[o.local]=o.xform(r,e[o.server])}return zN(r,n),r}function ME(n,e,t){const r=OE(e);return r===null?null:GN(n,r,t)}function WN(n,e,t,r){const i=OE(e);if(i===null||!ah(i.downloadTokens))return null;const s=i.downloadTokens;if(s.length===0)return null;const o=encodeURIComponent;return s.split(",").map(u=>{const d=n.bucket,h=n.fullPath,m="/b/"+o(d)+"/o/"+o(h),_=Uc(m,t,r),w=CE({alt:"media",token:u});return _+w})[0]}function HN(n,e){const t={},r=e.length;for(let i=0;i<r;i++){const s=e[i];s.writable&&(t[s.server]=n[s.local])}return JSON.stringify(t)}class lh{constructor(e,t,r,i){this.url=e,this.method=t,this.handler=r,this.timeout=i,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xE(n){if(!n)throw oh()}function KN(n,e){function t(r,i){const s=ME(n,i,e);return xE(s!==null),s}return t}function QN(n,e){function t(r,i){const s=ME(n,i,e);return xE(s!==null),WN(s,i,n.host,n._protocol)}return t}function UE(n){function e(t,r){let i;return t.getStatus()===401?t.getErrorText().includes("Firebase App Check token is invalid")?i=cN():i=aN():t.getStatus()===402?i=oN(n.bucket):t.getStatus()===403?i=lN(n.path):i=r,i.status=t.getStatus(),i.serverResponse=r.serverResponse,i}return e}function FE(n){const e=UE(n);function t(r,i){let s=e(r,i);return r.getStatus()===404&&(s=sN(n.path)),s.serverResponse=i.serverResponse,s}return t}function YN(n,e,t){const r=e.fullServerUrl(),i=Uc(r,n.host,n._protocol),s="GET",o=n.maxOperationRetryTime,a=new lh(i,s,QN(n,t),o);return a.errorHandler=FE(e),a}function JN(n,e){const t=e.fullServerUrl(),r=Uc(t,n.host,n._protocol),i="DELETE",s=n.maxOperationRetryTime;function o(c,u){}const a=new lh(r,i,o,s);return a.successCodes=[200,204],a.errorHandler=FE(e),a}function XN(n,e){return n&&n.contentType||e&&e.type()||"application/octet-stream"}function ZN(n,e,t){const r=Object.assign({},t);return r.fullPath=n.path,r.size=e.size(),r.contentType||(r.contentType=XN(null,e)),r}function e1(n,e,t,r,i){const s=e.bucketOnlyServerUrl(),o={"X-Goog-Upload-Protocol":"multipart"};function a(){let U="";for(let M=0;M<2;M++)U=U+Math.random().toString().slice(2);return U}const c=a();o["Content-Type"]="multipart/related; boundary="+c;const u=ZN(e,r,i),d=HN(u,t),h="--"+c+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+d+`\r
--`+c+`\r
Content-Type: `+u.contentType+`\r
\r
`,m=`\r
--`+c+"--",_=Hn.getBlob(h,r,m);if(_===null)throw pN();const w={name:u.fullPath},E=Uc(s,n.host,n._protocol),v="POST",C=n.maxUploadRetryTime,O=new lh(E,v,KN(n,t),C);return O.urlParams=w,O.headers=o,O.body=_.uploadData(),O.errorHandler=UE(e),O}class t1{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=kr.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=kr.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=kr.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,t,r,i,s){if(this.sent_)throw os("cannot .send() more than once");if(fn(e)&&r&&(this.xhr_.withCredentials=!0),this.sent_=!0,this.xhr_.open(t,e,!0),s!==void 0)for(const o in s)s.hasOwnProperty(o)&&this.xhr_.setRequestHeader(o,s[o].toString());return i!==void 0?this.xhr_.send(i):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw os("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw os("cannot .getStatus() before sending");try{return this.xhr_.status}catch(e){return-1}}getResponse(){if(!this.sent_)throw os("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw os("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class n1 extends t1{initXhr(){this.xhr_.responseType="text"}}function uh(){return new n1}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ur{constructor(e,t){this._service=e,t instanceof Dt?this._location=t:this._location=Dt.makeFromUrl(t,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,t){return new Ur(e,t)}get root(){const e=new Dt(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return LE(this._location.path)}get storage(){return this._service}get parent(){const e=BN(this._location.path);if(e===null)return null;const t=new Dt(this._location.bucket,e);return new Ur(this._service,t)}_throwIfRoot(e){if(this._location.path==="")throw yN(e)}}function r1(n,e,t){n._throwIfRoot("uploadBytes");const r=e1(n.storage,n._location,VE(),new Hn(e,!0),t);return n.storage.makeRequestWithTokens(r,uh).then(i=>({metadata:i,ref:n}))}function i1(n){n._throwIfRoot("getDownloadURL");const e=YN(n.storage,n._location,VE());return n.storage.makeRequestWithTokens(e,uh).then(t=>{if(t===null)throw gN();return t})}function s1(n){n._throwIfRoot("deleteObject");const e=JN(n.storage,n._location);return n.storage.makeRequestWithTokens(e,uh)}function o1(n,e){const t=$N(n._location.path,e),r=new Dt(n._location.bucket,t);return new Ur(n.storage,r)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function a1(n){return/^[A-Za-z]+:\/\//.test(n)}function c1(n,e){return new Ur(n,e)}function BE(n,e){if(n instanceof dh){const t=n;if(t._bucket==null)throw mN();const r=new Ur(t,t._bucket);return e!=null?BE(r,e):r}else return e!==void 0?o1(n,e):n}function l1(n,e){if(e&&a1(e)){if(n instanceof dh)return c1(n,e);throw vu("To use ref(service, url), the first argument must be a Storage instance.")}else return BE(n,e)}function Hp(n,e){const t=e==null?void 0:e[SE];return t==null?null:Dt.makeFromBucketSpec(t,n)}function u1(n,e,t,r={}){n.host=`${e}:${t}`;const i=fn(e);i&&(tc(`https://${n.host}/b`),nc("Storage",!0)),n._isUsingEmulator=!0,n._protocol=i?"https":"http";const{mockUserToken:s}=r;s&&(n._overrideAuthToken=typeof s=="string"?s:Ou(s,n.app.options.projectId))}class dh{constructor(e,t,r,i,s,o=!1){this.app=e,this._authProvider=t,this._appCheckProvider=r,this._url=i,this._firebaseVersion=s,this._isUsingEmulator=o,this._bucket=null,this._host=bE,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=rN,this._maxUploadRetryTime=iN,this._requests=new Set,i!=null?this._bucket=Dt.makeFromBucketSpec(i,this._host):this._bucket=Hp(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=Dt.makeFromBucketSpec(this._url,e):this._bucket=Hp(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){Wp("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){Wp("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}_getAuthToken(){return p(this,null,function*(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const t=yield e.getToken();if(t!==null)return t.accessToken}return null})}_getAppCheckToken(){return p(this,null,function*(){if(Et(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=this._appCheckProvider.getImmediate({optional:!0});return e?(yield e.getToken()).token:null})}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new Ur(this,e)}_makeRequest(e,t,r,i,s=!0){if(this._deleted)return new wN(kE());{const o=PN(e,this._appId,r,i,t,this._firebaseVersion,s,this._isUsingEmulator);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}makeRequestWithTokens(e,t){return p(this,null,function*(){const[r,i]=yield Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,t,r,i).getPromise()})}}const Kp="@firebase/storage",Qp="0.13.14";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $E="storage";function d1(n,e,t){return n=fe(n),r1(n,e,t)}function h1(n){return n=fe(n),i1(n)}function f1(n){return n=fe(n),s1(n)}function qE(n,e){return n=fe(n),l1(n,e)}function Yp(n=Zs(),e){n=fe(n);const r=Fn(n,$E).getImmediate({identifier:e}),i=Du("storage");return i&&m1(r,...i),r}function m1(n,e,t,r={}){u1(n,e,t,r)}function p1(n,{instanceIdentifier:e}){const t=n.getProvider("app").getImmediate(),r=n.getProvider("auth-internal"),i=n.getProvider("app-check-internal");return new dh(t,r,i,e,fr)}function g1(){Ft(new Vt($E,p1,"PUBLIC").setMultipleInstances(!0)),pt(Kp,Qp,""),pt(Kp,Qp,"esm2017")}g1();const Jp={apiKey:"AIzaSyBTwAuJalgcUpDhYqOTL-akmKGfSQQxev0",authDomain:"turkuast-erp.firebaseapp.com",projectId:"turkuast-erp",storageBucket:"turkuast-erp.firebasestorage.app",messagingSenderId:"897264408710",appId:"1:897264408710:web:3a597d471313a5a9f41907",measurementId:"G-VEZKQQQW5Y",databaseURL:""},_1=n=>n.includes(".firebasestorage.app")?n.replace(".firebasestorage.app",".appspot.com"):n,Cs=ce(B({},Jp),{storageBucket:_1(Jp.storageBucket)}),y1=Cs.apiKey&&Cs.projectId;let kt,P=null,S=null,Fr=null;if(Df().length===0)try{if(y1){if(kt=gg(Cs),typeof window!="undefined"){const n=()=>{try{fC(kt)}catch(e){}};"requestIdleCallback"in window?window.requestIdleCallback(()=>{n()},{timeout:3e3}):setTimeout(n,3e3)}try{if(P=oa(kt),!P)throw new Error("Firebase Auth instance oluşturulamadı")}catch(n){P=null}if(Cs.databaseURL)try{zp(kt)}catch(n){}try{S=ou(kt)}catch(n){}try{Fr=Yp(kt)}catch(n){}}}catch(n){}else{const n=Df();if(n.length>0){kt=n[0];try{P=oa(kt),P||(P=oa(kt))}catch(e){P=null}if(Cs.databaseURL)try{zp(kt)}catch(e){}try{S=ou(kt)}catch(e){const t=e instanceof Error?e.message:"";t.includes("already been started")||t.includes("already initialized")}try{Fr=Yp(kt)}catch(e){}}}const se=S,Gs=Object.freeze(Object.defineProperty({__proto__:null,get app(){return kt},get auth(){return P},db:se,get firestore(){return S},get storage(){return Fr}},Symbol.toStringTag,{value:"Module"})),Cn="departments",vo=()=>p(void 0,null,function*(){var n,e;try{if(!se)throw new Error("Firebase Firestore başlatılamadı. Lütfen .env dosyasında Firebase yapılandırmasını kontrol edin.");let t;try{const s=q(se,Cn);t=yield J(s)}catch(s){return[]}let r=[];try{const{getAuth:s}=yield z(()=>p(void 0,null,function*(){const{getAuth:c}=yield Promise.resolve().then(()=>Vs);return{getAuth:c}}),void 0),{auth:o}=yield z(()=>p(void 0,null,function*(){const{auth:c}=yield Promise.resolve().then(()=>Gs);return{auth:c}}),void 0),a=o||s();if(a!=null&&a.currentUser){const{getAllUsers:c}=yield z(()=>p(void 0,null,function*(){const{getAllUsers:u}=yield Promise.resolve().then(()=>Ie);return{getAllUsers:u}}),void 0);r=yield c()}}catch(s){const o=s&&typeof s=="object"?s:null;(o==null?void 0:o.code)!=="permission-denied"&&((n=o==null?void 0:o.message)!=null&&n.includes("permissions"))}const i=[];for(const s of t.docs){const o=s.data(),a=B({id:s.id},o);if(a.managerId){const c=r.find(u=>u.id===a.managerId);if(c)a.managerName=c.fullName||c.displayName||c.email||"Bilinmeyen";else try{const{getAuth:u}=yield z(()=>p(void 0,null,function*(){const{getAuth:m}=yield Promise.resolve().then(()=>Vs);return{getAuth:m}}),void 0),{auth:d}=yield z(()=>p(void 0,null,function*(){const{auth:m}=yield Promise.resolve().then(()=>Gs);return{auth:m}}),void 0),h=d||u();if(h!=null&&h.currentUser){const{getUserProfile:m}=yield z(()=>p(void 0,null,function*(){const{getUserProfile:w}=yield Promise.resolve().then(()=>Ie);return{getUserProfile:w}}),void 0),_=yield m(a.managerId,!1);_?a.managerName=_.fullName||_.displayName||_.email||"Bilinmeyen":(a.managerName=void 0,h!=null&&h.currentUser&&X(x(se,Cn,s.id),{managerId:null,updatedAt:F.now()}).catch(w=>{const E=w&&typeof w=="object"?w:null;E==null||E.code}))}}catch(u){u instanceof Error&&((e=u.message)!=null&&e.includes("silinmiş"))?(a.managerName=void 0,X(x(se,Cn,s.id),{managerId:null,updatedAt:F.now()}).catch(d=>{})):a.managerName=void 0}}r.length>0?a.userCount=r.filter(c=>c.departmentId===s.id).length:a.userCount=0,i.push(a)}return i}catch(t){return[]}}),hr=n=>p(void 0,null,function*(){var e;try{if(!se)throw new Error("Firebase Firestore başlatılamadı. Lütfen .env dosyasında Firebase yapılandırmasını kontrol edin.");const t=x(se,Cn,n),r=yield re(t);if(!r.exists())return null;const i=r.data(),s=B({id:r.id},i);if(s.managerId)try{const o=yield Te(s.managerId,!1);if(o)s.managerName=o.fullName||o.displayName||o.email||"Bilinmeyen";else{s.managerName=void 0;try{yield X(x(se,Cn,n),{managerId:null,updatedAt:F.now()})}catch(a){}}}catch(o){if(o instanceof Error&&((e=o.message)!=null&&e.includes("silinmiş"))){s.managerName=void 0;try{yield X(x(se,Cn,n),{managerId:null,updatedAt:F.now()})}catch(a){}}else s.managerName=void 0}return s}catch(t){const r=t instanceof Error?t.message:"Departman yüklenemedi";throw new Error(r)}}),w1=(n,e=null,t=null,r=null)=>p(void 0,null,function*(){try{if(!se)throw new Error("Firebase Firestore başlatılamadı. Lütfen .env dosyasında Firebase yapılandırmasını kontrol edin.");const i=q(se,Cn),s={name:n,description:e,managerId:t,createdAt:F.now(),updatedAt:F.now()},o=yield ge(i,s);return(r||t)&&(yield oe("CREATE","departments",o.id,r||t,null,s)),o.id}catch(i){const s=i instanceof Error?i.message:"Departman oluşturulamadı";throw new Error(s)}}),E1=(n,e,t)=>p(void 0,null,function*(){try{if(!se)throw new Error("Firebase Firestore başlatılamadı. Lütfen .env dosyasında Firebase yapılandırmasını kontrol edin.");const r=yield hr(n),i=x(se,Cn,n);yield X(i,ce(B({},e),{updatedAt:F.now()}));const s=yield hr(n);t&&(yield oe("UPDATE","departments",n,t,r,s))}catch(r){const i=r instanceof Error?r.message:"Departman güncellenemedi";throw new Error(i)}}),v1=(n,e)=>p(void 0,null,function*(){try{if(!se)throw new Error("Firebase Firestore başlatılamadı. Lütfen .env dosyasında Firebase yapılandırmasını kontrol edin.");const t=yield hr(n),r=x(se,Cn,n);yield Ge(r),e&&(yield oe("DELETE","departments",n,e,t,null))}catch(t){const r=t instanceof Error?t.message:"Departman silinemedi";throw new Error(r)}}),Tu=Object.freeze(Object.defineProperty({__proto__:null,createDepartment:w1,deleteDepartment:v1,getDepartmentById:hr,getDepartments:vo,updateDepartment:E1},Symbol.toStringTag,{value:"Module"})),Ri="audit_logs",hh=(n,e,t,r=null,i=null,s=null,o)=>p(void 0,null,function*(){try{const a=q(se,Ri),c={userId:s,action:n,tableName:e,recordId:t,oldData:r,newData:i,createdAt:F.now()};return o&&(c.metadata=o),(yield ge(a,c)).id}catch(a){return""}}),T1=n=>p(void 0,null,function*(){var e;try{const t=q(se,Ri);let r=Q(t,me("createdAt","desc"));const i=(n==null?void 0:n.limit)||100;r=Q(r,De(i)),n!=null&&n.action&&(r=Q(r,le("action","==",n.action))),n!=null&&n.tableName&&(r=Q(r,le("tableName","==",n.tableName))),n!=null&&n.userId&&(r=Q(r,le("userId","==",n.userId)));const s=yield J(r),o=[],a=new Set;for(const u of s.docs){const d=u.data(),h=B({id:u.id},d);h.userId&&a.add(h.userId),o.push(h)}const c=new Map;if(a.size>0)try{(yield nt()).forEach(d=>{a.has(d.id)&&c.set(d.id,{fullName:d.fullName||d.displayName,email:d.email})})}catch(u){}return o.forEach(u=>{if(u.userId){const d=c.get(u.userId);d&&(u.userName=d.fullName||d.email,u.userEmail=d.email)}}),o}catch(t){const r=t;if((r==null?void 0:r.code)==="failed-precondition"||(e=r==null?void 0:r.message)!=null&&e.includes("index")){console.warn("Audit logs index bulunamadı, basit query kullanılıyor");try{const s=(n==null?void 0:n.limit)||100,o=Q(q(se,Ri),me("createdAt","desc"),De(s));let c=(yield J(o)).docs.map(h=>{const m=h.data();return B({id:h.id},m)});n!=null&&n.action&&(c=c.filter(h=>h.action===n.action)),n!=null&&n.tableName&&(c=c.filter(h=>h.tableName===n.tableName)),n!=null&&n.userId&&(c=c.filter(h=>h.userId===n.userId)),c.sort((h,m)=>{var E,v;const _=((E=h.createdAt)==null?void 0:E.toMillis())||0;return(((v=m.createdAt)==null?void 0:v.toMillis())||0)-_});const u=new Set(c.map(h=>h.userId).filter(Boolean)),d=new Map;if(u.size>0)try{(yield nt()).forEach(m=>{u.has(m.id)&&d.set(m.id,{fullName:m.fullName||m.displayName,email:m.email})})}catch(h){}return c.forEach(h=>{if(h.userId){const m=d.get(h.userId);m&&(h.userName=m.fullName||m.email,h.userEmail=m.email)}}),c}catch(s){return[]}}const i=t instanceof Error?t.message:"Audit logları yüklenemedi";throw new Error(i)}}),I1=n=>p(void 0,null,function*(){var e;try{const[t,r]=yield Promise.all([vo(),nt()]),i=t.filter(d=>d.managerId===n),s={managedTeams:i.map(d=>({id:d.id,name:d.name})),teamMembers:[]};if(i.length===0)return{logs:[],teamInfo:s};const o=i.map(d=>d.id),a=r.filter(d=>{const h=d.approvedTeams||[],m=d.pendingTeams||[];return[...h,...m].some(_=>o.includes(_))});s.teamMembers=a.map(d=>({id:d.id,name:d.fullName||d.email,email:d.email}));const u=[...a.map(d=>d.id),n];try{const d=q(se,Ri),h=yield J(Q(d,me("createdAt","desc"),De(500))),m=[],_=new Set;for(const E of h.docs){const v=E.data();if(v.userId&&u.includes(v.userId)){const C=B({id:E.id},v);C.userId&&_.add(C.userId),m.push(C)}}const w=new Map;if(_.size>0)try{(yield nt()).forEach(v=>{_.has(v.id)&&w.set(v.id,{fullName:v.fullName||v.displayName,email:v.email})})}catch(E){}return m.forEach(E=>{if(E.userId){const v=w.get(E.userId);v&&(E.userName=v.fullName||v.email,E.userEmail=v.email)}}),{logs:m,teamInfo:s}}catch(d){const h=d;if((h==null?void 0:h.code)==="failed-precondition"||(e=h==null?void 0:h.message)!=null&&e.includes("index")){console.warn("Team member logs index bulunamadı, basit query kullanılıyor");try{const m=Q(q(se,Ri),me("createdAt","desc")),w=(yield J(m)).docs.map(C=>{const O=C.data();return B({id:C.id},O)}).filter(C=>C.userId&&u.includes(C.userId));w.sort((C,O)=>{var Z,K;const U=((Z=C.createdAt)==null?void 0:Z.toMillis())||0;return(((K=O.createdAt)==null?void 0:K.toMillis())||0)-U});const E=new Set(w.map(C=>C.userId).filter(Boolean)),v=new Map;if(E.size>0)try{(yield nt()).forEach(O=>{E.has(O.id)&&v.set(O.id,{fullName:O.fullName||O.displayName,email:O.email})})}catch(C){console.error("Error fetching users:",C)}return w.forEach(C=>{if(C.userId){const O=v.get(C.userId);O&&(C.userName=O.fullName||O.email,C.userEmail=O.email)}}),{logs:w,teamInfo:s}}catch(m){return{logs:[],teamInfo:s}}}throw d}}catch(t){return{logs:[],teamInfo:{managedTeams:[],teamMembers:[]}}}}),A1=n=>p(void 0,null,function*(){try{const e=q(se,Ri),t=Q(e,le("userId","==",n)),r=yield J(t),i=500,s=r.docs;for(let o=0;o<s.length;o+=i){const a=Wn(se);s.slice(o,o+i).forEach(u=>{a.delete(u.ref)}),yield a.commit()}}catch(e){throw e}}),R1=Object.freeze(Object.defineProperty({__proto__:null,createAuditLog:hh,deleteUserLogs:A1,getAuditLogs:T1,getTeamMemberLogs:I1},Symbol.toStringTag,{value:"Module"})),jE=`session_${Date.now()}_${Math.random().toString(36).substring(2,9)}`;let Yn=[],Nl=!1;const zE=500,b1=20,S1=(n,e,t,r)=>{if(n==="CREATE")return`Yeni ${ta(r)} kaydı oluşturuldu`;if(n==="DELETE")return`${ta(r)} kaydı silindi`;if(!e||!t||typeof e!="object"||typeof t!="object")return`${ta(r)} kaydı güncellendi`;const i=e,s=t,o=[];for(const a of Object.keys(s))JSON.stringify(i[a])!==JSON.stringify(s[a])&&o.push(k1(a));return o.length===0?`${ta(r)} kaydı güncellendi`:o.length<=3?`${o.join(", ")} güncellendi`:`${o.slice(0,3).join(", ")} ve ${o.length-3} alan daha güncellendi`},ta=n=>({tasks:"Görev",users:"Kullanıcı",departments:"Departman",orders:"Sipariş",production_orders:"Üretim",customers:"Müşteri",products:"Ürün",projects:"Proje",audit_logs:"Denetim Kaydı",role_permissions:"Rol Yetkisi",raw_materials:"Hammadde",warranty:"Garanti",notifications:"Bildirim",task_assignments:"Görev Ataması",reports:"Rapor",profiles:"Profil"})[n]||n,k1=n=>({title:"Başlık",description:"Açıklama",status:"Durum",priority:"Öncelik",dueDate:"Bitiş Tarihi",assignedTo:"Atanan",name:"İsim",email:"E-posta",phone:"Telefon",role:"Rol",fullName:"Ad Soyad",company:"Şirket",address:"Adres",totalAmount:"Toplam Tutar",orderNumber:"Sipariş Numarası",customerId:"Müşteri",isArchived:"Arşivlendi",approvalStatus:"Onay Durumu",isInPool:"Görev Havuzunda",canCreate:"Oluşturma Yetkisi",canRead:"Okuma Yetkisi",canUpdate:"Güncelleme Yetkisi",canDelete:"Silme Yetkisi",subPermissions:"Alt Yetkiler"})[n]||n,GE=(n,e,t,r,i)=>{const s=P==null?void 0:P.currentUser,o=B({sessionId:jE,timestamp:new Date().toISOString(),changesSummary:S1(n,e,t,r)},i);return s&&(o.performedBy={userId:s.uid,email:s.email,displayName:s.displayName}),typeof window!="undefined"&&(o.userAgent=navigator.userAgent,o.screenResolution=`${window.screen.width}x${window.screen.height}`,o.timezone=Intl.DateTimeFormat().resolvedOptions().timeZone,o.language=navigator.language),o},Iu=()=>p(void 0,null,function*(){if(Nl||Yn.length===0)return;Nl=!0;const n=[...Yn];Yn=[];try{yield Promise.allSettled(n.map(e=>hh(e.action,e.tableName,e.recordId,e.oldData,e.newData,e.userId,e.metadata)))}catch(e){}finally{Nl=!1,Yn.length>0&&setTimeout(Iu,zE)}}),oe=(n,e,t,r,i=null,s=null,o)=>p(void 0,null,function*(){var a;try{const c=GE(n,i,s,e,o),u={action:n,tableName:e,recordId:t,userId:r||((a=P==null?void 0:P.currentUser)==null?void 0:a.uid)||null,oldData:i,newData:s,metadata:c,timestamp:Date.now()};Yn.push(u),Yn.length>=b1?Iu():setTimeout(Iu,zE)}catch(c){}}),C1=(r,i,...s)=>p(void 0,[r,i,...s],function*(n,e,t={}){try{const o=GE("CREATE",null,t,"security_events",B({eventType:n,severity:P1(n)},t));yield hh("CREATE","security_events",null,null,B({eventType:n},t),e,o)}catch(o){}}),P1=n=>({LOGIN:"LOW",LOGOUT:"LOW",PASSWORD_RESET:"MEDIUM",EMAIL_VERIFY:"LOW",ROLE_CHANGE:"HIGH",PERMISSION_CHANGE:"HIGH",ACCOUNT_DELETE:"CRITICAL",ACCOUNT_RESTORE:"HIGH"})[n]||"MEDIUM";typeof window!="undefined"&&window.addEventListener("beforeunload",()=>{var n;Yn.length>0&&((n=navigator.sendBeacon)==null||n.call(navigator,"/api/flush-logs",JSON.stringify({logs:Yn,sessionId:jE})))});const WE=Object.freeze(Object.defineProperty({__proto__:null,logAudit:oe,logSecurityEvent:C1},Symbol.toStringTag,{value:"Module"})),D1=(n,e,t,r,i,s)=>p(void 0,null,function*(){try{if(!P||!S)throw new Error("Firebase is not initialized");let o=null;try{const v=q(S,"users"),C=Q(v,le("email","==",n),De(1)),O=yield J(C);if(!O.empty){const U=O.docs[0],M=U.data();M.deleted===!0?o=null:o={id:U.id,data:M}}}catch(v){const C=v==null?void 0:v.code}let a=null,c=!1;if(o)try{a=(yield ps(P,n,e)).user,c=!0;try{yield a.reload(),P.currentUser&&(a=P.currentUser)}catch(M){}const C=o.data,O=C.deleted===!0;let U=a.emailVerified;if(!U&&C.emailVerified===!0&&(U=!0),U&&!O)return yield Ve(P),{success:!1,message:"Bu hesap zaten var, doğrulanmış. Giriş yapabilirsiniz.",user:null}}catch(v){const C=new Error("Bu hesap zaten kayıtlı. Lütfen giriş yapmayı deneyin.");throw C.code="auth/email-already-in-use",C}else try{a=(yield Qg(P,n,e)).user,c=!1}catch(v){if((v==null?void 0:v.code)==="auth/email-already-in-use")try{a=(yield ps(P,n,e)).user,c=!1}catch(O){const U=new Error("Bu hesap zaten kayıtlı. Lütfen giriş yapmayı deneyin.");throw U.code="auth/email-already-in-use",U}else throw v}if(!a)throw new Error("Kullanıcı oluşturulamadı veya bulunamadı");const u=a.uid,d={email:n,displayName:t,fullName:t,role:["viewer"],emailVerified:!1,needsEmailVerification:!0,createdAt:j(),updatedAt:j(),pendingTeams:s?[s]:[],approvedTeams:[]};r&&r.trim()!==""&&(d.phone=r.trim()),i&&i.trim()!==""&&(d.dateOfBirth=i.trim());const h=x(S,"users",u),m=[];let _=null;const w=p(void 0,null,function*(){if(c&&o){const v=a.emailVerified,C={displayName:t,fullName:t,updatedAt:j()};r&&r.trim()!==""&&(C.phone=r.trim()),i&&i.trim()!==""&&(C.dateOfBirth=i.trim()),s&&(C.pendingTeams=[s]),v?(C.needsEmailVerification=!1,C.emailVerified=!0):(C.needsEmailVerification=!0,C.emailVerified=!1);const O={};for(const[U,M]of Object.entries(C))M!==void 0&&(O[U]=M);yield X(h,O)}else{const v=ce(B({},d),{deleted:!1,needsEmailVerification:!0,emailVerified:!1});for(const[C,O]of Object.entries(v))O===void 0&&delete v[C];yield dn(h,v,{merge:!0})}});if(m.push(w),t&&m.push(va(a,{displayName:t}).catch(v=>{})),!a.emailVerified){const v=Ls(a).then(()=>{}).catch(O=>{const U=O==null?void 0:O.code,M=O instanceof Error?O.message:String(O);let Z="Email doğrulama maili gönderilemedi.";U==="auth/too-many-requests"?Z="Çok fazla istek yapıldı. Lütfen bir süre sonra tekrar deneyin.":U==="auth/network-request-failed"?Z="Ağ hatası. İnternet bağlantınızı kontrol edin.":M&&(Z=M),_=new Error(Z+" Lütfen daha sonra tekrar deneyin.")}),C=Promise.race([v,new Promise(O=>{setTimeout(()=>{O()},2e3)})]);m.push(C)}if(yield Promise.allSettled(m),_)throw _;if(yield new Promise(v=>setTimeout(v,100)),s)try{const{getDepartmentById:v}=yield z(()=>p(void 0,null,function*(){const{getDepartmentById:U}=yield Promise.resolve().then(()=>Tu);return{getDepartmentById:U}}),void 0),{createNotification:C}=yield z(()=>p(void 0,null,function*(){const{createNotification:U}=yield Promise.resolve().then(()=>xt);return{createNotification:U}}),void 0),O=yield v(s);if(O){const U=t||n||"Bir kullanıcı",M=O.name||"ekip",Z=[];O.managerId&&Z.push(C({userId:O.managerId,type:"system",title:"Yeni katılım isteği",message:`${U} "${M}" ekibine katılmak için istek gönderdi. İsteği onaylamak veya reddetmek için Ekip Üyeleri sayfasını ziyaret edin.`,read:!1,metadata:{teamId:s,teamName:M,requesterId:u,requesterName:U,requesterEmail:n}}).then(()=>{}).catch(K=>{}));try{const R=(yield nt()).filter(T=>{var I,b;return((I=T.role)==null?void 0:I.includes("super_admin"))||((b=T.role)==null?void 0:b.includes("main_admin"))});for(const T of R)Z.push(C({userId:T.id,type:"system",title:"Yeni ekip katılım isteği",message:`${U} "${M}" ekibine katılmak için istek gönderdi. İsteği onaylamak veya reddetmek için Ekip Onay Yönetimi sayfasını ziyaret edin.`,read:!1,metadata:{teamId:s,teamName:M,requesterId:u,requesterName:U,requesterEmail:n}}).then(()=>{}).catch(I=>{}))}catch(K){}Promise.allSettled(Z).catch(()=>{})}}catch(v){}let E;return c?a.emailVerified?E="Bu hesap zaten var, doğrulanmış. Giriş yapabilirsiniz.":E="Hesap var ama doğrulama yapılmamış. Doğrulama maili gönderildi. Lütfen e-postanızı ve spam kutusunu kontrol edin.":a.emailVerified?E="Kayıt başarılı!":E="Doğrulama maili gönderildi. Doğrulama yaptıktan sonra giriş yapabilirsiniz. Lütfen e-postanızı ve spam kutusunu kontrol edin.",{success:!0,message:E,user:{id:u,email:n,displayName:t,fullName:t,phone:r||void 0,dateOfBirth:i||void 0,role:["viewer"],pendingTeams:s?[s]:[],approvedTeams:[],emailVerified:a.emailVerified||!1,createdAt:new Date,updatedAt:new Date}}}catch(o){let a="Kayıt başarısız";const c=o==null?void 0:o.code,u=o instanceof Error?o.message:String(o),d=["auth/email-already-in-use","auth/invalid-email","auth/weak-password","auth/operation-not-allowed","auth/invalid-credential","auth/user-disabled","auth/too-many-requests"].includes(c||"");if(c==="auth/email-already-in-use")try{let m=(yield ps(P,n,e)).user;try{yield m.reload(),P.currentUser&&(m=P.currentUser)}catch(C){}const _=yield re(x(S,"users",m.uid)),w=_.exists()?_.data():null,E=(w==null?void 0:w.deleted)===!0;let v=m.emailVerified;if(!v&&(w==null?void 0:w.emailVerified)===!0&&(v=!0),v&&!E)return yield Ve(P),{success:!1,message:"Bu hesap zaten var, doğrulanmış. Giriş yapabilirsiniz.",user:null};if(!v||E){if(_.exists()){const U={displayName:t,fullName:t,updatedAt:j()};r&&r.trim()!==""&&(U.phone=r.trim()),i&&i.trim()!==""&&(U.dateOfBirth=i.trim()),s&&(U.pendingTeams=[s]),E&&(U.deleted=!1,U.needsEmailVerification=!0,U.emailVerified=!1);const M={};for(const[Z,K]of Object.entries(U))K!==void 0&&(M[Z]=K);yield X(x(S,"users",m.uid),M)}else{const U={email:n,displayName:t,fullName:t,role:["viewer"],emailVerified:!1,createdAt:j(),updatedAt:j(),pendingTeams:s?[s]:[],approvedTeams:[]};r&&r.trim()!==""&&(U.phone=r.trim()),i&&i.trim()!==""&&(U.dateOfBirth=i.trim());const M={};for(const[Z,K]of Object.entries(U))K!==void 0&&(M[Z]=K);yield dn(x(S,"users",m.uid),M)}if(s)try{const{getDepartmentById:U}=yield z(()=>p(void 0,null,function*(){const{getDepartmentById:K}=yield Promise.resolve().then(()=>Tu);return{getDepartmentById:K}}),void 0),{createNotification:M}=yield z(()=>p(void 0,null,function*(){const{createNotification:K}=yield Promise.resolve().then(()=>xt);return{createNotification:K}}),void 0),Z=yield U(s);if(Z){const K=t||n||"Bir kullanıcı",R=Z.name||"ekip",T=[];Z.managerId&&T.push(M({userId:Z.managerId,type:"system",title:"Yeni katılım isteği",message:`${K} "${R}" ekibine katılmak için istek gönderdi. İsteği onaylamak veya reddetmek için Ekip Üyeleri sayfasını ziyaret edin.`,read:!1,metadata:{teamId:s,teamName:R,requesterId:m.uid,requesterName:K,requesterEmail:n}}).then(()=>{}).catch(I=>{}));try{const b=(yield nt()).filter(k=>{var D,A;return((D=k.role)==null?void 0:D.includes("super_admin"))||((A=k.role)==null?void 0:A.includes("main_admin"))});for(const k of b)T.push(M({userId:k.id,type:"system",title:"Yeni ekip katılım isteği",message:`${K} "${R}" ekibine katılmak için istek gönderdi. İsteği onaylamak veya reddetmek için Ekip Onay Yönetimi sayfasını ziyaret edin.`,read:!1,metadata:{teamId:s,teamName:R,requesterId:m.uid,requesterName:K,requesterEmail:n}}).then(()=>{}).catch(D=>{}))}catch(I){}Promise.allSettled(T).catch(()=>{})}}catch(U){}const C=[];let O=null;if(C.push(va(m,{displayName:t}).catch(U=>{})),C.push(Ls(m).then(()=>{}).catch(U=>{O=new Error("Email doğrulama maili gönderilemedi. Lütfen daha sonra tekrar deneyin veya Firebase Console'da email ayarlarını kontrol edin.")})),yield Promise.allSettled(C),O)throw yield Ve(P),O;return yield Ve(P),{success:!0,message:"Hesap var ama doğrulama yapılmamış. Doğrulama maili gönderildi. Lütfen e-postanızı ve spam kutusunu kontrol edin.",user:{id:m.uid,email:n,displayName:t,fullName:t,phone:r||void 0,dateOfBirth:i||void 0,role:["viewer"],pendingTeams:s?[s]:[],approvedTeams:[],emailVerified:!1,createdAt:new Date,updatedAt:new Date}}}}catch(h){a="Bu hesap zaten kayıtlı. Lütfen giriş yapmayı deneyin."}else c==="auth/invalid-email"?a="Geçersiz e-posta adresi. Lütfen geçerli bir e-posta adresi girin.":c==="auth/weak-password"?a="Şifre çok zayıf. Şifre en az 8 karakter, 1 büyük harf, 1 küçük harf ve 1 rakam içermelidir.":c==="auth/operation-not-allowed"?a="E-posta/şifre ile kayıt şu anda devre dışı. Lütfen yöneticiye başvurun.":c==="auth/invalid-credential"?a="Bu hesap zaten kayıtlı. Lütfen giriş yapmayı deneyin.":c==="auth/user-disabled"?a="Bu hesap devre dışı bırakılmış. Lütfen yöneticiye başvurun.":c==="auth/too-many-requests"?a="Çok fazla istek yapıldı. Lütfen bir süre sonra tekrar deneyin.":c==="auth/network-request-failed"?a="Ağ hatası. İnternet bağlantınızı kontrol edin.":c==="auth/internal-error"?a="Sunucu hatası. Lütfen daha sonra tekrar deneyin.":c==="permission-denied"||u.includes("permissions")?a="Firestore izin hatası. Lütfen Firebase Console'da Security Rules'u kontrol edin. Detaylar: "+(u||"İzin reddedildi"):u.includes("Unsupported field value: undefined")?a="Form verilerinde eksik veya geçersiz alanlar var. Lütfen tüm zorunlu alanları doldurun ve tekrar deneyin.":u.includes("invalid data")?a="Gönderilen veriler geçersiz. Lütfen tüm alanları kontrol edip tekrar deneyin.":u&&(a=u);return{success:!1,message:a,user:null}}}),N1=(n,e)=>p(void 0,null,function*(){var t,r;try{if(!P||!S)throw new Error("Firebase is not initialized");let s=(yield ps(P,n,e)).user;try{yield s.reload(),P.currentUser&&(s=P.currentUser)}catch(o){}try{const o=yield re(x(S,"users",s.uid));if(o.exists()&&o.data().deleted===!0){try{yield Ve(P)}catch(c){}return{success:!1,message:"Bu hesap silinmiş. Giriş yapamazsınız.",user:null}}}catch(o){console.error("Kullanıcı kontrolü hatası:",o)}try{let o=null,a=!1;try{o=yield Te(s.uid)}catch(_){(_ instanceof Error?_.message:String(_)).includes("silinmiş")&&(a=!0)}if(a){try{yield Ve(P)}catch(_){}return{success:!1,message:"Bu hesap silinmiş. Giriş yapamazsınız.",user:null}}if(!o)try{const _=yield re(x(S,"users",s.uid));if(_.exists()){if(_.data().deleted===!0){try{yield Ve(P)}catch(E){}return{success:!1,message:"Bu hesap silinmiş. Giriş yapamazsınız.",user:null}}yield new Promise(E=>setTimeout(E,200));try{o=yield Te(s.uid)}catch(E){if((E instanceof Error?E.message:String(E)).includes("silinmiş")){try{yield Ve(P)}catch(C){}return{success:!1,message:"Bu hesap silinmiş. Giriş yapamazsınız.",user:null}}}}else{yield dn(x(S,"users",s.uid),{email:s.email||n,displayName:s.displayName||"",fullName:s.displayName||"",role:["viewer"],emailVerified:s.emailVerified||!1,needsEmailVerification:!s.emailVerified,createdAt:j(),updatedAt:j(),pendingTeams:[],approvedTeams:[]}),yield new Promise(w=>setTimeout(w,200));try{o=yield Te(s.uid)}catch(w){if((w instanceof Error?w.message:String(w)).includes("silinmiş")){try{yield Ve(P)}catch(v){}return{success:!1,message:"Bu hesap silinmiş. Giriş yapamazsınız.",user:null}}}}}catch(_){}let c=yield re(x(S,"users",s.uid)),u=!1,d=0;const h=2;for(;d<h&&(!c.exists()||((t=c.data())==null?void 0:t.needsEmailVerification)===void 0);)yield new Promise(_=>setTimeout(_,200)),c=yield re(x(S,"users",s.uid)),d++;if(c.exists()){const _=c.data();u=_.needsEmailVerification===!0||_.needsEmailVerification==="true"||_.needsEmailVerification===1}let m=s.emailVerified;if(!m&&c.exists()&&c.data().emailVerified===!0&&(m=!0),!m){if(!u)try{yield X(x(S,"users",s.uid),{needsEmailVerification:!0,emailVerified:!1,updatedAt:j()})}catch(_){}try{yield Ls(s)}catch(_){const w=_==null?void 0:_.code,E=_ instanceof Error?_.message:String(_);let v="Email doğrulama maili gönderilemedi.";w==="auth/too-many-requests"?v="Çok fazla istek yapıldı. Lütfen bir süre sonra tekrar deneyin.":w==="auth/network-request-failed"?v="Ağ hatası. İnternet bağlantınızı kontrol edin.":E&&(v=E);try{yield Ve(P)}catch(C){}return{success:!1,message:v+" Lütfen daha sonra tekrar deneyin veya spam kutunuzu kontrol edin.",user:null}}try{yield Ve(P)}catch(_){}return{success:!1,message:"E-posta adresinizi doğrulamalısınız. Doğrulama e-postası gönderildi. Lütfen e-postanızı ve spam kutusunu kontrol edin.",user:null}}if(m)try{yield X(x(S,"users",s.uid),{needsEmailVerification:!1,emailVerified:!0,updatedAt:j()}),o&&(o.emailVerified=!0)}catch(_){}if(!o){try{o=yield Te(s.uid)}catch(_){if((_ instanceof Error?_.message:String(_)).includes("silinmiş")){try{yield Ve(P)}catch(E){}return{success:!1,message:"Bu hesap silinmiş. Giriş yapamazsınız.",user:null}}}if(!o){try{yield Ve(P)}catch(_){}return{success:!1,message:"Kullanıcı profili alınamadı. Lütfen tekrar deneyin.",user:null}}}try{const _=o.lastLoginAt;yield X(x(S,"users",s.uid),{lastLoginAt:j()}),yield new Promise(E=>setTimeout(E,100));const w=yield Te(s.uid);w&&(o=w);try{const E=new Date().toISOString(),v=_?_ instanceof F?_.toDate().toISOString():String(_):null;let C=0;const O=2;for(;C<=O;)try{yield oe("UPDATE","user_logins",s.uid,s.uid,v?{lastLoginAt:v}:null,null,{action:"LOGIN",method:"EMAIL",email:n,timestamp:E});break}catch(U){C++,C>O||(yield new Promise(M=>setTimeout(M,100*C)))}}catch(E){}}catch(_){}return{success:!0,user:o}}catch(o){if(o instanceof Error&&((r=o.message)!=null&&r.includes("silinmiş"))){try{yield Ve(P)}catch(a){}return{success:!1,message:"Bu hesap silinmiş. Giriş yapamazsınız.",user:null}}throw o}}catch(i){if((i instanceof Error?i.message:String(i)).includes("silinmiş"))return{success:!1,message:"Bu hesap silinmiş. Giriş yapamazsınız.",user:null};let o="Giriş başarısız";const a=i&&typeof i=="object"?i:null;return(a==null?void 0:a.code)==="auth/user-not-found"?o="Bu e-posta adresi kayıtlı değil. Lütfen kayıt olun.":(a==null?void 0:a.code)==="auth/wrong-password"||(a==null?void 0:a.code)==="auth/invalid-credential"?o="E-posta adresi veya şifre hatalı. Lütfen bilgilerinizi kontrol edip tekrar deneyin.":(a==null?void 0:a.code)==="auth/invalid-email"?o="Geçersiz e-posta adresi. Lütfen geçerli bir e-posta adresi girin.":(a==null?void 0:a.code)==="auth/user-disabled"?o="Bu hesap devre dışı bırakılmış. Lütfen yöneticiye başvurun.":(a==null?void 0:a.code)==="auth/too-many-requests"?o="Çok fazla başarısız giriş denemesi. Lütfen birkaç dakika sonra tekrar deneyin.":(a==null?void 0:a.code)==="auth/network-request-failed"?o="İnternet bağlantınızı kontrol edin ve tekrar deneyin.":a!=null&&a.message&&(o=a.message),{success:!1,message:o,user:null}}}),O1=()=>p(void 0,null,function*(){try{return P?(yield Ve(P),{success:!0}):{success:!1,message:"Firebase Auth is not initialized"}}catch(n){return console.error("Logout error:",n),{success:!1,message:(n&&typeof n=="object"&&"message"in n?n.message:void 0)||"Çıkış başarısız"}}}),L1=n=>p(void 0,null,function*(){try{if(!P||!S)throw new Error("Firebase is not initialized");try{const e=q(S,"users"),t=Q(e,le("email","==",n),De(1)),r=yield J(t);if(r.empty)return{success:!1,message:"Bu e-posta adresi kayıtlı değil. Lütfen kayıt olun."};if(r.docs[0].data().deleted===!0)return{success:!1,message:"Bu hesap silinmiş. Lütfen yeni bir hesap oluşturun."}}catch(e){}return yield Kg(P,n),{success:!0,message:"Şifre sıfırlama e-postası gönderildi. Lütfen e-postanızı ve spam kutusunu kontrol edin."}}catch(e){let t="Şifre sıfırlama başarısız";const r=e&&typeof e=="object"&&"code"in e?e:null;return(r==null?void 0:r.code)==="auth/user-not-found"?t="Bu e-posta adresi kayıtlı değil. Lütfen kayıt olun.":(r==null?void 0:r.code)==="auth/invalid-email"?t="Geçersiz e-posta adresi. Lütfen geçerli bir e-posta adresi girin.":(r==null?void 0:r.code)==="auth/too-many-requests"?t="Çok fazla istek yapıldı. Lütfen bir süre sonra tekrar deneyin.":r!=null&&r.message&&(t=r.message),{success:!1,message:t}}}),Te=(n,e=!1)=>p(void 0,null,function*(){var t;try{if(!S)return console.error("Firestore is not initialized"),null;const r=yield re(x(S,"users",n));if(!r.exists())return null;const i=r.data(),s=(P==null?void 0:P.currentUser)||null;if(i.deleted===!0){if(e)return{id:n,email:i.email||"",displayName:"Silinmiş Kullanıcı",fullName:"Silinmiş Kullanıcı",phone:null,dateOfBirth:null,role:[],departmentId:null,emailVerified:!1,createdAt:i.createdAt,updatedAt:i.updatedAt};if(s&&s.uid===n&&P)try{yield Ve(P)}catch(m){}throw new Error("Bu hesap silinmiş. Giriş yapamazsınız.")}const{getRoles:o}=yield z(()=>p(void 0,null,function*(){const{getRoles:m}=yield Promise.resolve().then(()=>Ru);return{getRoles:m}}),void 0),a=yield o(),c=new Set(a.map(m=>m.key)),u=i.role||[],d=u.filter(m=>c.has(m)),h=d.length>0?d:["personnel"];return JSON.stringify(u)!==JSON.stringify(h)&&(yield X(r.ref,{role:h})),{id:n,email:i.email||(s==null?void 0:s.email)||"",displayName:i.displayName||(s==null?void 0:s.displayName)||"",fullName:i.fullName,phone:i.phone,dateOfBirth:i.dateOfBirth,role:h,departmentId:i.departmentId,emailVerified:(s==null?void 0:s.emailVerified)||i.emailVerified||!1,createdAt:i.createdAt,updatedAt:i.updatedAt,lastLoginAt:i.lastLoginAt}}catch(r){const i=r&&typeof r=="object"?r:null;return(i==null?void 0:i.code)==="permission-denied"||(t=i==null?void 0:i.message)!=null&&t.includes("permissions"),null}}),HE=(n,e,t)=>p(void 0,null,function*(){var r;try{if(!S)throw new Error("Firestore is not initialized");const i=yield Te(n),s={updatedAt:j()};Object.keys(e).forEach(a=>{const c=e[a];c!==void 0&&(s[a]=c)}),yield X(x(S,"users",n),s),e.displayName&&(P!=null&&P.currentUser)&&(yield va(P.currentUser,{displayName:e.displayName}));const o=t||((r=P==null?void 0:P.currentUser)==null?void 0:r.uid);if(o&&i){const a=e.role&&JSON.stringify(e.role)!==JSON.stringify(i.role),c=Object.keys(e).some(u=>u!=="role");if(!a||c){const u=yield Te(n);yield oe("UPDATE","users",n,o,i,u,{action:"update_profile",changedFields:Object.keys(e).filter(d=>d!=="role")})}}return{success:!0}}catch(i){return console.error("Update user profile error:",i),{success:!1,message:(i&&typeof i=="object"&&"message"in i?i.message:void 0)||"Profil güncellenemedi"}}}),V1=HE,Xp=new Map,M1=n=>{if(!P)return setTimeout(()=>n(null),0),()=>{};let e=!1;const t=setTimeout(()=>{e||(console.warn("Auth state timeout - callback(null) çağrılıyor"),e=!0,n(null))},3e3),r=Xg(P,i=>{p(void 0,null,function*(){var s;try{if(e||(clearTimeout(t),e=!0),i){if(S)try{const o=yield re(x(S,"users",i.uid));if(o.exists()&&o.data().deleted===!0){try{yield Ve(P)}catch(c){}n(null);return}}catch(o){}try{let o=yield Te(i.uid);if(!o){try{yield Ve(P)}catch(d){}n(null);return}if(S&&i.emailVerified)try{const d=yield re(x(S,"users",i.uid));if(d.exists()){const h=d.data(),m={};if(h.needsEmailVerification===!0&&(m.needsEmailVerification=!1),(!h.emailVerified||h.emailVerified===!1)&&(m.emailVerified=!0),Object.keys(m).length>0&&(m.updatedAt=j(),yield X(x(S,"users",i.uid),m),o=yield Te(i.uid),!o)){n(null);return}}}catch(d){}const a=Date.now(),c=Xp.get(i.uid)||0;if(a-c>1*60*1e3||c===0)try{const d=o.lastLoginAt;let h=!1;if(!d)h=!0;else try{let m;if(d instanceof F)m=d.toDate();else if(d&&typeof d=="object"&&"toDate"in d&&typeof d.toDate=="function")m=d.toDate();else if(d&&typeof d=="object"&&"_seconds"in d){const _=Number(d._seconds||0),w=Number(d._nanoseconds||0);m=new F(_,w).toDate()}else h=!0;!h&&m&&Math.floor((a-m.getTime())/6e4)>30&&(h=!0)}catch(m){h=!0}if(h){yield X(x(S,"users",i.uid),{lastLoginAt:j()}),Xp.set(i.uid,a),yield new Promise(_=>setTimeout(_,200));const m=yield Te(i.uid);m&&(o=m)}}catch(d){}n(o)}catch(o){const a=o&&typeof o=="object"?o:null;if((s=a==null?void 0:a.message)!=null&&s.includes("silinmiş")){try{yield Ve(P)}catch(c){}n(null)}else n(null)}}else n(null)}catch(o){try{n(null)}catch(a){}}}).catch(s=>{try{n(null)}catch(o){}})});return()=>{e||clearTimeout(t),r()}},nt=()=>p(void 0,null,function*(){var n,e;try{if(!S)throw new Error("Firestore is not initialized");const{getAuth:t}=yield z(()=>p(void 0,null,function*(){const{getAuth:c}=yield Promise.resolve().then(()=>Vs);return{getAuth:c}}),void 0),{auth:r}=yield z(()=>p(void 0,null,function*(){const{auth:c}=yield Promise.resolve().then(()=>Gs);return{auth:c}}),void 0),i=r||t();if(!(i!=null&&i.currentUser))return[];const{getRoles:s}=yield z(()=>p(void 0,null,function*(){const{getRoles:c}=yield Promise.resolve().then(()=>Ru);return{getRoles:c}}),void 0),o=yield s(),a=new Set(o.map(c=>c.key));try{const c=Q(q(S,"users"),me("displayName","asc"),De(500));return(yield J(c)).docs.map(h=>{const m=h.data();if(m.deleted===!0)return null;const _=m.role||[],w=_.filter(v=>a.has(v)),E=w.length>0?w:["personnel"];return JSON.stringify(_)!==JSON.stringify(E)&&X(h.ref,{role:E}).catch(v=>{console.error(`Error syncing roles for user ${h.id}:`,v)}),{id:h.id,email:m.email||"",displayName:m.displayName||m.fullName||"",fullName:m.fullName||m.displayName||"",phone:m.phone||"",dateOfBirth:m.dateOfBirth||"",role:E,departmentId:m.departmentId||"",pendingTeams:m.pendingTeams||[],approvedTeams:m.approvedTeams||[],teamLeaderIds:m.teamLeaderIds||[],emailVerified:m.emailVerified||!1,createdAt:m.createdAt||null,updatedAt:m.updatedAt||null,lastLoginAt:m.lastLoginAt||null}}).filter(h=>h!==null&&!!h.id&&!!(h.displayName||h.fullName||h.email))}catch(c){const{getRoles:u}=yield z(()=>p(void 0,null,function*(){const{getRoles:E}=yield Promise.resolve().then(()=>Ru);return{getRoles:E}}),void 0),d=yield u(),h=new Set(d.map(E=>E.key)),m=Q(q(S,"users"),De(500));return(yield J(m)).docs.map(E=>{const v=E.data();if(v.deleted===!0)return null;const C=v.role||[],O=C.filter(M=>h.has(M)),U=O.length>0?O:["personnel"];return JSON.stringify(C)!==JSON.stringify(U)&&X(E.ref,{role:U}).catch(M=>{console.error(`Error syncing roles for user ${E.id}:`,M)}),{id:E.id,email:v.email||"",displayName:v.displayName||v.fullName||"",fullName:v.fullName||v.displayName||"",phone:v.phone||"",dateOfBirth:v.dateOfBirth||"",role:U,departmentId:v.departmentId||"",pendingTeams:v.pendingTeams||[],approvedTeams:v.approvedTeams||[],teamLeaderIds:v.teamLeaderIds||[],emailVerified:v.emailVerified||!1,createdAt:v.createdAt||null,updatedAt:v.updatedAt||null,lastLoginAt:v.lastLoginAt||null}}).filter(E=>E!==null&&!!E.id&&!!(E.displayName||E.fullName||E.email)).sort((E,v)=>{const C=(E.displayName||E.fullName||"").toLowerCase(),O=(v.displayName||v.fullName||"").toLowerCase();return C.localeCompare(O,"tr")})}}catch(t){const r=t&&typeof t=="object"?t:null;return(r==null?void 0:r.code)==="permission-denied"||(n=r==null?void 0:r.message)!=null&&n.includes("permissions")||(r==null?void 0:r.code)==="unavailable"||(e=r==null?void 0:r.message)!=null&&e.includes("network"),[]}}),x1=()=>p(void 0,null,function*(){var n;try{if(!P)throw new Error("Firebase Auth is not initialized");const e=new It;e.addScope("https://www.googleapis.com/auth/drive.file");const r=(yield Aa(P,e)).user;try{const i=yield re(x(S,"users",r.uid));if(i.exists()&&i.data().deleted===!0){try{yield Ve(P)}catch(o){}return{success:!1,message:"Bu hesap silinmiş. Giriş yapamazsınız.",user:null}}}catch(i){console.error("Kullanıcı kontrolü hatası:",i)}try{let i=yield Te(r.uid);if(!i){try{yield Ve(P)}catch(a){}return{success:!1,message:"Bu hesap silinmiş. Giriş yapamazsınız.",user:null}}const s=i.lastLoginAt;yield X(x(S,"users",r.uid),{displayName:r.displayName,fullName:r.displayName,emailVerified:r.emailVerified,updatedAt:j(),lastLoginAt:j()}),yield new Promise(a=>setTimeout(a,100));const o=yield Te(r.uid);o&&(i=o);try{const a=new Date().toISOString(),c=s?s instanceof F?s.toDate().toISOString():String(s):null;let u=0;const d=2;for(;u<=d;)try{yield oe("UPDATE","user_logins",r.uid,r.uid,c?{lastLoginAt:c}:null,null,{action:"LOGIN",method:"GOOGLE",email:r.email||null,timestamp:a});break}catch(h){u++,u>d||(yield new Promise(m=>setTimeout(m,100*u)))}}catch(a){}return{success:!0,user:i}}catch(i){if(i instanceof Error&&((n=i.message)!=null&&n.includes("silinmiş"))){try{yield Ve(P)}catch(o){}return{success:!1,message:"Bu hesap silinmiş. Giriş yapamazsınız.",user:null}}const s={id:r.uid,email:r.email||"",displayName:r.displayName||"",fullName:r.displayName||"",role:["viewer"],emailVerified:r.emailVerified,createdAt:j(),updatedAt:j(),pendingTeams:[],approvedTeams:[]};return yield dn(x(S,"users",r.uid),s),{success:!0,user:s}}}catch(e){console.error("Google Sign-In error:",e);let t="Google ile giriş başarısız";const r=e&&typeof e=="object"?e:null;return(r==null?void 0:r.code)==="auth/popup-closed-by-user"?t="Google giriş penceresi kapatıldı.":r!=null&&r.message&&(t=r.message),{success:!1,message:t,user:null}}}),U1=()=>p(void 0,null,function*(){try{if(!P)return{success:!1,message:"Firebase Auth is not initialized"};const n=P.currentUser;return n?n.emailVerified?{success:!1,message:"Email zaten doğrulanmış"}:(yield Ls(n),{success:!0,message:"Doğrulama e-postası gönderildi. Lütfen e-postanızı ve spam kutusunu kontrol edin."}):{success:!1,message:"Kullanıcı oturum açmamış"}}catch(n){return{success:!1,message:(n&&typeof n=="object"&&"message"in n?n.message:void 0)||"Doğrulama e-postası gönderilemedi"}}}),F1=(n,e)=>p(void 0,null,function*(){var t,r,i;try{if(!P||!S)throw new Error("Firebase is not initialized");const s=yield Te(n,!0);if(!s)throw new Error("Kullanıcı bulunamadı");const o=yield re(x(S,"users",n));if(o.exists()&&((t=o.data())==null?void 0:t.deleted)===!0)throw new Error("Bu kullanıcı zaten silinmiş.");const a=yield Te(e);if(!a||!((r=a.role)!=null&&r.includes("super_admin"))&&!((i=a.role)!=null&&i.includes("main_admin")))throw new Error("Kullanıcı silme yetkiniz yok. Sadece ana yöneticiler kullanıcı silebilir.");if(n===e)throw new Error("Kendi hesabınızı silemezsiniz.");const c={email:s.email,displayName:s.displayName,fullName:s.fullName,phone:s.phone,role:s.role,departmentId:s.departmentId};try{const{removeUserFromAllTasks:d}=yield z(()=>p(void 0,null,function*(){const{removeUserFromAllTasks:h}=yield Promise.resolve().then(()=>MO);return{removeUserFromAllTasks:h}}),void 0);yield d(n)}catch(d){}try{const{deleteUserLogs:d}=yield z(()=>p(void 0,null,function*(){const{deleteUserLogs:h}=yield Promise.resolve().then(()=>R1);return{deleteUserLogs:h}}),void 0);yield d(n)}catch(d){}try{const{deleteUserNotifications:d}=yield z(()=>p(void 0,null,function*(){const{deleteUserNotifications:h}=yield Promise.resolve().then(()=>xt);return{deleteUserNotifications:h}}),void 0);typeof d=="function"&&(yield d(n))}catch(d){}try{const{getDepartments:d,updateDepartment:h}=yield z(()=>p(void 0,null,function*(){const{getDepartments:_,updateDepartment:w}=yield Promise.resolve().then(()=>Tu);return{getDepartments:_,updateDepartment:w}}),void 0),m=yield d();for(const _ of m)_.managerId===n&&(yield h(_.id,{managerId:null}))}catch(d){}const u=x(S,"users",n);yield X(u,{deleted:!0,deletedAt:j(),deletedBy:e,displayName:"Silinmiş Kullanıcı",fullName:"Silinmiş Kullanıcı",phone:null,dateOfBirth:null,role:[],departmentId:null,pendingTeams:[],approvedTeams:[],teamLeaderIds:[],_originalData:c});try{const{logSecurityEvent:d}=yield z(()=>p(void 0,null,function*(){const{logSecurityEvent:h}=yield Promise.resolve().then(()=>WE);return{logSecurityEvent:h}}),void 0);yield d("ACCOUNT_DELETE",e,{targetUserId:n,deletedAt:new Date().toISOString(),reason:"Kullanıcı yönetici tarafından silindi",originalEmail:s==null?void 0:s.email})}catch(d){}}catch(s){throw console.error("Delete user error:",s),s}}),Ie=Object.freeze(Object.defineProperty({__proto__:null,deleteUser:F1,getAllUsers:nt,getUserProfile:Te,login:N1,logout:O1,onAuthChange:M1,register:D1,resetPassword:L1,sendVerificationEmail:U1,signInWithGoogle:x1,updateFirebaseUserProfile:V1,updateUserProfile:HE},Symbol.toStringTag,{value:"Module"})),xn="role_permissions",bi="roles",B1=5*60*1e3,Qa=new Map,Ct=new Map,Zp=new Map,Ya=new Set,KE=n=>{const e=Qa.get(n);return e?Date.now()-e>B1:!0},hs=n=>{Qa.set(n,Date.now())},$1=n=>{if(n)for(const e of Ct.keys())e.startsWith(`${n}:`)&&(Ct.delete(e),Qa.delete(e));else Ct.clear(),Qa.clear();Ya.forEach(e=>{try{e()}catch(t){}})},q1=n=>(Ya.add(n),()=>{Ya.delete(n)}),Au=["tasks","users","departments","orders","production_orders","customers","products","projects","audit_logs","role_permissions","raw_materials","warranty"],QE=[{id:"super_admin",key:"super_admin",label:"Süper Yönetici",color:"bg-red-500",isSystem:!0},{id:"team_leader",key:"team_leader",label:"Ekip Lideri",color:"bg-blue-500",isSystem:!0},{id:"personnel",key:"personnel",label:"Personel",color:"bg-green-500",isSystem:!0}],YE=()=>p(void 0,null,function*(){var n;try{const{getAuth:e}=yield z(()=>p(void 0,null,function*(){const{getAuth:o}=yield Promise.resolve().then(()=>Vs);return{getAuth:o}}),void 0),{auth:t}=yield z(()=>p(void 0,null,function*(){const{auth:o}=yield Promise.resolve().then(()=>Gs);return{auth:o}}),void 0),r=t||e();if(!(r!=null&&r.currentUser))return;const i=q(se,bi);if((yield J(i)).empty)for(const o of QE)yield dn(x(se,bi,o.key),o)}catch(e){const t=e&&typeof e=="object"?e:null;(t==null?void 0:t.code)!=="permission-denied"&&((n=t==null?void 0:t.message)!=null&&n.includes("permissions"))}}),JE=()=>p(void 0,null,function*(){var n;try{const{getAuth:e}=yield z(()=>p(void 0,null,function*(){const{getAuth:o}=yield Promise.resolve().then(()=>Vs);return{getAuth:o}}),void 0),{auth:t}=yield z(()=>p(void 0,null,function*(){const{auth:o}=yield Promise.resolve().then(()=>Gs);return{auth:o}}),void 0),r=t||e();r!=null&&r.currentUser&&(yield YE());const i=q(se,bi);return(yield J(i)).docs.map(o=>B({id:o.id},o.data()))}catch(e){const t=e&&typeof e=="object"?e:null;return(t==null?void 0:t.code)!=="permission-denied"&&((n=t==null?void 0:t.message)!=null&&n.includes("permissions")),QE}}),j1=n=>p(void 0,null,function*(){try{const e=n.key.toLowerCase().replace(/\s+/g,"_"),t=ce(B({},n),{key:e,isSystem:!1});yield dn(x(se,bi,e),t);const r=q(se,xn);for(const i of Au){const s={role:e,resource:i,canCreate:!1,canRead:!0,canUpdate:!1,canDelete:!1,createdAt:F.now(),updatedAt:F.now()},o=Object.fromEntries(Object.entries(s).filter(([a,c])=>c!==void 0));yield ge(r,o)}}catch(e){throw new Error(e instanceof Error?e.message:"Rol eklenemedi")}}),z1=n=>p(void 0,null,function*(){try{const e=yield re(x(se,bi,n));if(e.exists()&&e.data().isSystem)throw new Error("Sistem rolleri silinemez");const t=q(se,"users"),r=Q(t),i=yield J(r),{writeBatch:s}=yield z(()=>p(void 0,null,function*(){const{writeBatch:m}=yield Promise.resolve().then(()=>Q0);return{writeBatch:m}}),void 0);let o=s(se),a=0;const c=500;for(const m of i.docs){const w=m.data().role||[];if(w.includes(n)){const E=w.filter(C=>C!==n),v=E.length>0?E:["personnel"];o.update(m.ref,{role:v}),a++,a>=c&&(yield o.commit(),a=0,o=s(se))}}a>0&&(yield o.commit()),yield Ge(x(se,bi,n));const u=q(se,xn),d=Q(u,le("role","==",n)),h=yield J(d);for(const m of h.docs)yield Ge(x(se,xn,m.id))}catch(e){throw new Error(e instanceof Error?e.message:"Rol silinemedi")}}),G1=()=>p(void 0,null,function*(){try{const n=q(se,xn),e=yield J(n),t=yield JE(),r=e.docs.map(s=>s.data()),i=[];for(const s of t){const o=s.key;for(const a of Au)if(!r.some(u=>u.role===o&&u.resource===a)){let u=!1,d=!0,h=!1,m=!1,_={};const w=Ja(a),E=Object.keys(w);o==="super_admin"?(u=!0,d=!0,h=!0,m=!0,E.forEach(C=>{_[C]=!0})):o==="team_leader"?(u=a!=="role_permissions",d=!0,h=a!=="role_permissions",m=a!=="role_permissions"&&a!=="audit_logs",a!=="role_permissions"&&E.forEach(C=>{_[C]=!0})):o==="personnel"&&(u=["production_orders"].includes(a),d=!0,h=["tasks","production_orders"].includes(a),m=!1,a==="tasks"?(_.canAddComment=!0,_.canAddAttachment=!0,_.canChangeStatus=!0):a==="production_orders"&&(_.canViewSchedule=!0));const v={role:o,resource:a,canCreate:u,canRead:d,canUpdate:h,canDelete:m,createdAt:F.now(),updatedAt:F.now()};Object.keys(_).length>0&&(v.subPermissions=_),i.push(v)}}if(i.length>0)for(const s of i){const o={};for(const[a,c]of Object.entries(s))if(c!==void 0)if(typeof c=="object"&&c!==null&&!(c instanceof F)){const u=Object.fromEntries(Object.entries(c).filter(([d,h])=>h!==void 0));Object.keys(u).length>0&&(o[a]=u)}else o[a]=c;yield ge(n,o)}if(e.size===0&&i.length===0){const s=[];for(const o of t){const a=o.key;for(const c of Au){const u=Ja(c),d=Object.keys(u);let h={};if(a==="super_admin"){d.forEach(_=>{h[_]=!0});const m={role:a,resource:c,canCreate:!0,canRead:!0,canUpdate:!0,canDelete:!0,createdAt:F.now(),updatedAt:F.now()};Object.keys(h).length>0&&(m.subPermissions=h),s.push(m)}else if(a==="team_leader"){c!=="role_permissions"&&d.forEach(_=>{h[_]=!0});const m={role:a,resource:c,canCreate:c!=="role_permissions",canRead:!0,canUpdate:c!=="role_permissions",canDelete:c!=="role_permissions"&&c!=="audit_logs",createdAt:F.now(),updatedAt:F.now()};Object.keys(h).length>0&&(m.subPermissions=h),s.push(m)}else if(a==="personnel"){c==="tasks"?(h.canEditOwn=!0,h.canDeleteOwn=!0,h.canAddComment=!0,h.canAddAttachment=!0):c==="production_orders"&&(h.canViewSchedule=!0);const m={role:a,resource:c,canCreate:["tasks","production_orders"].includes(c),canRead:!0,canUpdate:["tasks","production_orders"].includes(c),canDelete:!1,createdAt:F.now(),updatedAt:F.now()};Object.keys(h).length>0&&(m.subPermissions=h),s.push(m)}else s.push({role:a,resource:c,canCreate:!1,canRead:!0,canUpdate:!1,canDelete:!1,createdAt:F.now(),updatedAt:F.now()})}}for(const o of s){const a={};for(const[c,u]of Object.entries(o))if(u!==void 0)if(typeof u=="object"&&u!==null&&!(u instanceof F)){const d=Object.fromEntries(Object.entries(u).filter(([h,m])=>m!==void 0));Object.keys(d).length>0&&(a[c]=d)}else a[c]=u;yield ge(n,a)}}}catch(n){}}),XE=()=>p(void 0,null,function*(){try{const n=q(se,xn),e=yield J(n);for(const t of e.docs){const r=t.data(),i=Ja(r.resource),s=Object.keys(i);let o=!1,a=B({},r.subPermissions||{});if(r.role==="super_admin"&&s.length>0?s.forEach(c=>{a[c]!==!0&&(a[c]=!0,o=!0)}):r.role==="team_leader"&&r.resource!=="role_permissions"?(s.length>0&&s.forEach(c=>{a[c]!==!0&&(a[c]=!0,o=!0)}),r.canCreate!==!0&&(o=!0),r.canUpdate!==!0&&(o=!0),r.resource!=="audit_logs"&&r.canDelete!==!0&&(o=!0)):r.role==="personnel"&&(r.resource==="tasks"?["canEditOwn","canDeleteOwn","canAddComment","canAddAttachment"].forEach(u=>{a[u]!==!0&&(a[u]=!0,o=!0)}):r.resource==="production_orders"&&a.canViewSchedule!==!0&&(a.canViewSchedule=!0,o=!0)),o){const c={updatedAt:F.now()};r.role==="team_leader"&&r.resource!=="role_permissions"&&(r.canCreate!==!0&&(c.canCreate=!0),r.canUpdate!==!0&&(c.canUpdate=!0),r.resource!=="audit_logs"&&r.canDelete!==!0&&(c.canDelete=!0)),Object.keys(a).length>0&&(c.subPermissions=a);const u=Object.fromEntries(Object.entries(c).filter(([d,h])=>h!==void 0));yield X(x(se,xn,t.id),u)}}}catch(n){}}),W1=()=>p(void 0,null,function*(){try{yield YE(),yield G1(),yield XE();const n=q(se,xn),t=(yield J(n)).docs.map(r=>B({id:r.id},r.data()));return t.forEach(r=>{const i=`${r.role}:${r.resource}`;(!Ct.has(i)||KE(i))&&(Ct.set(i,r),hs(i))}),t}catch(n){throw new Error(n instanceof Error?n.message:"Rol yetkileri yüklenemedi")}}),H1=(n,e,t=!0)=>p(void 0,null,function*(){const r=`${n}:${e}`;try{const i=q(se,xn),s=Q(i,le("role","==",n),le("resource","==",e));if(!t){const o=yield J(s);if(o.empty)return null;const a=o.docs[0];return B({id:a.id},a.data())}if(Ct.has(r))return KE(r)&&hs(r),Ct.get(r)||null;if(!Zp.has(r)){const o=yield J(s);let a=null;if(!o.empty){const u=o.docs[0];a=B({id:u.id},u.data())}Ct.set(r,a),hs(r);const c=ur(s,u=>{if(u.empty)Ct.set(r,null);else{const d=u.docs[0],h=B({id:d.id},d.data());Ct.set(r,h)}hs(r),Ya.forEach(d=>d())},u=>{});return Zp.set(r,c),a}return hs(r),Ct.get(r)||null}catch(i){throw new Error(i instanceof Error?i.message:"Yetki yüklenemedi")}}),Ja=n=>({tasks:{canAssign:"Görev atama",canChangeStatus:"Durum değiştirme",canAddComment:"Yorum ekleme",canAddAttachment:"Dosya ekleme",canViewAll:"Tüm görevleri görme",canEditOwn:"Kendi görevlerini düzenleme",canDeleteOwn:"Kendi görevlerini silme",canApprove:"Görev onaylama",canAddChecklist:"Checklist ekleme",canEditChecklist:"Checklist düzenleme/silme",canViewPrivate:"Gizli görevleri görme"},users:{canChangeRole:"Rol değiştirme",canViewSensitiveData:"Hassas verileri görme",canViewAuditLogs:"Denetim kayıtlarını görme"},departments:{canAssignMembers:"Üye atama",canChangeLeader:"Lider değiştirme",canViewAll:"Tüm departmanları görme",canApproveTeamRequest:"Ekip taleplerini onaylama",canViewTeamManagement:"Ekip yönetimi menüsünü görme"},orders:{canApprove:"Onaylama",canCancel:"İptal etme",canExport:"Dışa aktarma",canViewFinancials:"Finansal bilgileri görme",canEditPrice:"Fiyat düzenleme"},production_orders:{canStartProduction:"Üretimi başlatma",canCompleteProduction:"Üretimi tamamlama",canViewSchedule:"Üretim planını görme",canEditSchedule:"Üretim planını düzenleme"},customers:{canViewFinancials:"Finansal bilgileri görme",canEditFinancials:"Finansal bilgileri düzenleme",canExport:"Dışa aktarma",canViewHistory:"Geçmiş kayıtları görme"},products:{canEditPrice:"Fiyat düzenleme",canEditStock:"Stok düzenleme",canViewCost:"Maliyet görme",canEditCost:"Maliyet düzenleme",canExport:"Dışa aktarma"},projects:{canAssignMembers:"Üye atama",canChangeStatus:"Durum değiştirme",canViewAll:"Tüm projeleri görme",canEditBudget:"Bütçe düzenleme",canViewPrivate:"Gizli projeleri görme"},audit_logs:{canViewAll:"Tüm kayıtları görme",canExport:"Dışa aktarma",canDelete:"Kayıt silme"},role_permissions:{canCreateRoles:"Rol oluşturma",canDeleteRoles:"Rol silme",canEditSystemRoles:"Sistem rollerini düzenleme",canViewAdminPanel:"Admin paneli menüsünü görme"},raw_materials:{canEditStock:"Stok düzenleme",canViewCost:"Maliyet görme",canEditCost:"Maliyet düzenleme",canExport:"Dışa aktarma",canViewTransactions:"İşlem geçmişini görme",canCreateTransactions:"Stok işlemi oluşturma"},warranty:{canApprove:"Garanti onaylama",canReject:"Garanti reddetme",canViewFinancials:"Finansal bilgileri görme",canExport:"Dışa aktarma",canViewHistory:"Geçmiş kayıtları görme"}})[n]||{},K1=(n,e)=>p(void 0,null,function*(){try{const t=x(se,xn,n),r=yield re(t);if(r.exists()){const s=r.data(),o=`${s.role}:${s.resource}`;Ct.delete(o)}const i={};for(const[s,o]of Object.entries(e))if(o!==void 0)if(typeof o=="object"&&o!==null&&!(o instanceof F)){const a=Object.fromEntries(Object.entries(o).filter(([c,u])=>u!==void 0));Object.keys(a).length>0&&(i[s]=a)}else i[s]=o;yield X(t,ce(B({},i),{updatedAt:F.now()}))}catch(t){throw new Error(t instanceof Error?t.message:"Yetki güncellenemedi")}}),Ru=Object.freeze(Object.defineProperty({__proto__:null,addRole:j1,clearPermissionCache:$1,deleteRole:z1,getPermission:H1,getRolePermissions:W1,getRoles:JE,getSubPermissionsForResource:Ja,onPermissionCacheChange:q1,updatePermission:K1,updatePermissionsWithSubPermissions:XE},Symbol.toStringTag,{value:"Module"})),ZE=n=>p(void 0,null,function*(){let e="http://localhost:3000/api/send-email";const t="https://turkuast.com/api/send-email/";e?e.includes("localhost")||e.includes("127.0.0.1")?e=t:!e.endsWith("/send-email")&&!e.endsWith("/send-email/")?e=e.replace(/\/$/,"")+"/send-email/":e.endsWith("/send-email")&&!e.endsWith("/send-email/")&&(e=e+"/"):e=t;const r=(i,s,o=8e3)=>p(void 0,null,function*(){try{return yield Promise.race([fetch(i,ce(B({},s),{headers:ce(B({},s.headers),{Accept:"application/json","Content-Type":"application/json"}),mode:"cors",credentials:"omit"})),new Promise((c,u)=>setTimeout(()=>u(new Error("Timeout")),o))])}catch(a){const c=a instanceof Error?a.message:String(a);return c.includes("CORS")||c.includes("Failed to fetch")||c.includes("ERR_")||c.includes("Redirect is not allowed")||c.includes("preflight")?Promise.reject(new Error("NetworkError")):Promise.reject(a)}});if(e)try{const i=yield r(e,{method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify({to:n.to,subject:n.subject,html:n.html})});if(i.ok){const s=i.headers.get("content-type");if(s&&s.includes("application/json")){const o=yield i.json();if(o.success)return{success:!0};throw new Error(o.error||"Email API başarısız")}else throw new Error("Email API JSON döndürmüyor")}else{const s=yield i.text().catch(()=>"");throw new Error(`Email API hatası (${i.status}): ${s.substring(0,100)}`)}}catch(i){const s=i instanceof Error?i.message:String(i);!s.includes("NetworkError")&&!s.includes("ERR_")&&s.includes("CORS")}try{const i=yield r(t,{method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify({to:n.to,subject:n.subject,html:n.html})}),s=i.headers.get("content-type");if(!s||!s.includes("application/json"))return{success:!1,error:"E-posta servisi şu an meşgul"};const o=yield i.json().catch(()=>({}));return i.ok&&o.success?{success:!0}:{success:!1,error:o.error||`E-posta servisi yanıt vermedi (${i.status})`}}catch(i){return{success:!1,error:"E-posta servisine erişilemedi. Lütfen daha sonra tekrar deneyin veya sistem yöneticisiyle iletişime geçin."}}}),_L=n=>p(void 0,null,function*(){if(!n||!n.includes("@"))return{success:!1,error:"Geçerli bir e-posta adresi giriniz",details:{testEmail:n,timestamp:new Date().toISOString()}};try{const e="http://localhost:3000/api/send-email",t=e.includes("localhost")||e.includes("127.0.0.1");let r;t?r="https://turkuast.com/api/send-email":r="http://localhost:3000/api/send-email";const i=yield ZE({to:n,subject:"Turkuast ERP - E-posta Servisi Test",html:`
        <div style="font-family: Arial, sans-serif; padding: 20px; max-width: 600px; margin: 0 auto;">
          <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 30px; text-align: center; border-radius: 10px 10px 0 0;">
            <h1 style="color: white; margin: 0; font-size: 24px;">Turkuast ERP Suite</h1>
          </div>
          <div style="background: #f9f9f9; padding: 30px; border-radius: 0 0 10px 10px; border: 1px solid #e0e0e0; border-top: none;">
            <h2 style="color: #333; margin-top: 0;">✅ E-posta Servisi Testi</h2>
            <p style="color: #666; font-size: 16px;">
              Bu bir test e-postasıdır. Eğer bu e-postayı alıyorsanız, e-posta servisi başarıyla çalışıyor!
            </p>
            <p style="color: #666; font-size: 14px; margin-top: 20px;">
              <strong>Test Zamanı:</strong> ${new Date().toLocaleString("tr-TR")}
            </p>
            <p style="color: #666; font-size: 14px;">
              <strong>API Endpoint:</strong> ${e}
            </p>
          </div>
        </div>
      `});return{success:i.success,error:i.error,details:{testEmail:n,timestamp:new Date().toISOString(),primaryUrl:e||"Yok",fallbackUrl:r,usedUrl:i.success?e||r:"Hiçbiri çalışmadı"}}}catch(e){return{success:!1,error:e instanceof Error?e.message:String(e)||"E-posta testi başarısız oldu",details:{testEmail:n,timestamp:new Date().toISOString(),error:String(e)}}}}),Q1=(n,e,t,r,i,s)=>p(void 0,null,function*(){const o="https://turkuast-erp.web.app";let a=`${o}/tasks`;r==="system"&&s&&(s.requestType||t!=null&&t.includes("talep"))?a=`${o}/requests`:i&&["task_assigned","task_updated","task_completed","task_created","task_approval"].includes(r)?a=`${o}/tasks?taskId=${i}`:i&&["order_created","order_updated"].includes(r)?a=`${o}/orders`:r==="role_changed"&&(a=`${o}/admin`);const c=_=>{if(!_)return"";try{if(_&&typeof _=="object"&&"seconds"in _&&"nanoseconds"in _){const E=_;return new Date(E.seconds*1e3+(E.nanoseconds||0)/1e6).toLocaleDateString("tr-TR",{day:"numeric",month:"long",year:"numeric",hour:"2-digit",minute:"2-digit"})}if(_ instanceof Date)return _.toLocaleDateString("tr-TR",{day:"numeric",month:"long",year:"numeric",hour:"2-digit",minute:"2-digit"});if(typeof _=="string"){if(_.includes("Timestamp(")||_.includes("seconds=")){const E=_.match(/seconds=(\d+)/);if(E){const v=parseInt(E[1],10);return new Date(v*1e3).toLocaleDateString("tr-TR",{day:"numeric",month:"long",year:"numeric",hour:"2-digit",minute:"2-digit"})}}return new Date(_).toLocaleDateString("tr-TR",{day:"numeric",month:"long",year:"numeric",hour:"2-digit",minute:"2-digit"})}if(typeof _=="object"&&_!==null&&"seconds"in _){const E=_;return new Date(E.seconds*1e3+(E.nanoseconds||0)/1e6).toLocaleDateString("tr-TR",{day:"numeric",month:"long",year:"numeric",hour:"2-digit",minute:"2-digit"})}const w=String(_);if(w.includes("Timestamp(")||w.includes("seconds=")){const E=w.match(/seconds=(\d+)/);if(E){const v=parseInt(E[1],10);return new Date(v*1e3).toLocaleDateString("tr-TR",{day:"numeric",month:"long",year:"numeric",hour:"2-digit",minute:"2-digit"})}}return""}catch(w){return""}},u=_=>!_||typeof _!="string"?String(_||""):{pending:"Beklemede",in_progress:"Devam Ediyor",completed:"Tamamlandı",cancelled:"İptal Edildi",draft:"Taslak",confirmed:"Onaylandı",in_production:"Üretimde",quality_check:"Kalite Kontrol",shipped:"Kargoda",delivered:"Teslim Edildi",on_hold:"Beklemede"}[_]||_;let d="";if(s){const _=[];if(r==="system"&&s.requestType){const E={leave:"İzin",purchase:"Satın Alma",advance:"Avans",expense:"Gider",other:"Diğer"}[s.requestType]||s.requestType;_.push(`<div style="background: #fff; padding: 20px; border-radius: 8px; border-left: 4px solid #667eea; margin: 15px 0;">
        <h3 style="color: #333; margin-top: 0; margin-bottom: 15px; font-size: 18px;">Talep Detayları</h3>
        <div style="margin-bottom: 12px;"><strong style="color: #333;">Talep Tipi:</strong> <span style="color: #666;">${E}</span></div>
        ${s.requestTitle?`<div style="margin-bottom: 12px;"><strong style="color: #333;">Talep Başlığı:</strong> <span style="color: #666;">${s.requestTitle}</span></div>`:""}
        ${s.requestDescription?`<div style="margin-bottom: 12px;"><strong style="color: #333;">Açıklama:</strong><br><span style="color: #666; line-height: 1.6;">${s.requestDescription}</span></div>`:""}
        ${s.amount?`<div style="margin-bottom: 12px;"><strong style="color: #333;">Tutar:</strong> <span style="color: #666;">${s.amount} ${s.currency||"TL"}</span></div>`:""}
        ${s.creatorName?`<div style="margin-bottom: 12px;"><strong style="color: #333;">Talep Eden:</strong> <span style="color: #666;">${s.creatorName}</span></div>`:""}
        ${s.createdAt?`<div style="margin-bottom: 0;"><strong style="color: #333;">Talep Tarihi:</strong> <span style="color: #666;">${c(s.createdAt)}</span></div>`:""}
      </div>`)}if(s.oldStatus&&s.newStatus){const w=u(s.oldStatus),E=u(s.newStatus);_.push(`<div style="background: #fff; padding: 15px; border-radius: 8px; border-left: 4px solid #667eea; margin: 15px 0;"><strong style="color: #333;">Durum Değişikliği:</strong><br><span style="color: #666;">${w} → ${E}</span></div>`)}if(s.updatedAt||s.createdAt){const w=c(s.updatedAt||s.createdAt);w&&_.push(`<div style="background: #fff; padding: 15px; border-radius: 8px; border-left: 4px solid #10b981; margin: 15px 0;"><strong style="color: #333;">İşlem Zamanı:</strong><br><span style="color: #666;">${w}</span></div>`)}if(s.priority){const{getPriorityLabel:w}=yield z(()=>p(void 0,null,function*(){const{getPriorityLabel:v}=yield import("./priority-DjPsOOkO.js");return{getPriorityLabel:v}}),[]),E=w(s.priority);_.push(`<div style="background: #fff; padding: 15px; border-radius: 8px; border-left: 4px solid #f59e0b; margin: 15px 0;"><strong style="color: #333;">Öncelik:</strong><br><span style="color: #666;">${E}</span></div>`)}if(s.dueDate){const w=c(s.dueDate);w&&_.push(`<div style="background: #fff; padding: 15px; border-radius: 8px; border-left: 4px solid #ef4444; margin: 15px 0;"><strong style="color: #333;">Bitiş Tarihi:</strong><br><span style="color: #666;">${w}</span></div>`)}_.length>0&&(d=`<div style="margin: 20px 0;">${_.join("")}</div>`)}const h=`
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${e}</title>
</head>
<body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">
  <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 30px; text-align: center; border-radius: 10px 10px 0 0;">
    <h1 style="color: white; margin: 0; font-size: 24px;">Turkuast ERP Suite</h1>
  </div>
  <div style="background: #f9f9f9; padding: 30px; border-radius: 0 0 10px 10px; border: 1px solid #e0e0e0; border-top: none;">
    <h2 style="color: #333; margin-top: 0; font-size: 20px; margin-bottom: 15px;">${e}</h2>
    <div style="background: #fff; padding: 20px; border-radius: 8px; margin-bottom: 20px; border: 1px solid #e5e7eb;">
      <p style="color: #374151; font-size: 16px; line-height: 1.8; margin: 0;">${t}</p>
    </div>
    ${d}
    ${i?`
    <div style="text-align: center; margin: 30px 0;">
      <a href="${a}" style="display: inline-block; background: #667eea; color: white; padding: 14px 35px; text-decoration: none; border-radius: 6px; font-weight: bold; font-size: 16px; box-shadow: 0 2px 4px rgba(102, 126, 234, 0.3); transition: all 0.3s;">Detayları Görüntüle</a>
    </div>
    `:""}
    <hr style="border: none; border-top: 1px solid #e0e0e0; margin: 30px 0;">
    <p style="color: #999; font-size: 12px; text-align: center; margin: 0;">
      Bu e-posta Turkuast ERP Suite tarafından otomatik olarak gönderilmiştir.<br>
      E-posta bildirimlerini ayarlardan yönetebilirsiniz.
    </p>
  </div>
</body>
</html>
  `.trim();return yield ZE({to:n,subject:`Turkuast ERP - ${e}`,html:h})}),Y1=(n,e)=>p(void 0,null,function*(){try{let t=Q(q(S,"notifications"),le("userId","==",n));return e!=null&&e.unreadOnly&&(t=Q(t,le("read","==",!1))),t=Q(t,me("createdAt","desc")),e!=null&&e.limit&&(t=Q(t,De(e.limit))),(yield J(t)).docs.map(i=>B({id:i.id},i.data()))}catch(t){return typeof t=="object"&&t!==null&&"code"in t&&t.code==="failed-precondition"&&"message"in t&&typeof t.message=="string"&&t.message.includes("index")?[]:[]}}),Ne=n=>p(void 0,null,function*(){try{const e=yield ge(q(S,"notifications"),ce(B({},n),{createdAt:j()})),t=yield re(e);if(!t.exists())throw new Error("Bildirim oluşturulamadı");const r=B({id:t.id},t.data());return Promise.resolve().then(()=>p(void 0,null,function*(){try{const i=yield re(x(S,"users",n.userId));if(i.exists()){const s=i.data();if(s!=null&&s.email)try{yield Q1(s.email,n.title,n.message,n.type,n.relatedId||null,n.metadata||null)}catch(o){}}}catch(i){}})).catch(()=>{}),r}catch(e){throw e}}),fh=(n,e)=>p(void 0,null,function*(){try{yield X(x(S,"notifications",n),e)}catch(t){throw t}}),J1=n=>p(void 0,null,function*(){try{yield X(x(S,"notifications",n),{read:!0})}catch(e){throw e}}),X1=n=>p(void 0,null,function*(){try{const e=Q(q(S,"notifications"),le("userId","==",n),le("read","==",!1)),r=(yield J(e)).docs.map(i=>X(i.ref,{read:!0}));yield Promise.all(r)}catch(e){throw e}}),Z1=n=>p(void 0,null,function*(){try{const e=Q(q(S,"notifications"),le("userId","==",n)),t=yield J(e);if(t.empty)return;const r=t.docs.map(i=>Ge(x(S,"notifications",i.id)));yield Promise.all(r)}catch(e){}}),eO=(n,e={},t)=>{try{const r=q(S,"notifications");let s=(()=>{const a=[le("userId","==",n),me("createdAt","desc")];return e!=null&&e.unreadOnly&&a.push(le("read","==",!1)),e!=null&&e.limit&&a.push(De(e.limit)),Q(r,...a)})();return ur(s,a=>{try{const c=a.docs.map(u=>B({id:u.id},u.data()));t(c)}catch(c){t([])}},a=>{var c,u,d,h;if((a==null?void 0:a.code)==="unavailable"||(a==null?void 0:a.code)==="not-found"||(c=a==null?void 0:a.message)!=null&&c.includes("404")||(u=a==null?void 0:a.message)!=null&&u.includes("network")||(d=a==null?void 0:a.message)!=null&&d.includes("transport errored")){t([]);return}if((a==null?void 0:a.code)==="failed-precondition"||(h=a==null?void 0:a.message)!=null&&h.includes("index"))try{const m=Q(r,le("userId","==",n),me("createdAt","desc"));return ur(m,w=>{try{let E=w.docs.map(v=>B({id:v.id},v.data()));e!=null&&e.unreadOnly&&(E=E.filter(v=>!v.read)),e!=null&&e.limit&&(E=E.slice(0,e.limit)),t(E)}catch(E){t([])}},w=>{t([])})}catch(m){t([])}else t([])})}catch(r){return()=>{}}},xt=Object.freeze(Object.defineProperty({__proto__:null,createNotification:Ne,deleteUserNotifications:Z1,getNotifications:Y1,markAllNotificationsAsRead:X1,markNotificationAsRead:J1,subscribeToNotifications:eO,updateNotification:fh},Symbol.toStringTag,{value:"Module"})),tO=(n,e)=>{const t=n&&typeof n=="object"?n:null;t!=null&&t.code,t!=null&&t.message,e.operation,e.collection,e.documentId,e.userId,new Date().toISOString(),ev(e.data)},ev=n=>{if(!n||typeof n!="object")return n;const e=["password","token","secret","key","apiKey"],t=B({},n);for(const r of e)r in t&&(t[r]="[REDACTED]");for(const r in t)typeof t[r]=="object"&&t[r]!==null&&(t[r]=ev(t[r]));return t},tn=(n,e)=>{var r,i,s;const t=n&&typeof n=="object"?n:null;if((t==null?void 0:t.code)==="permission-denied"||(t==null?void 0:t.code)===7||(r=t==null?void 0:t.message)!=null&&r.includes("Missing or insufficient permissions")||(i=t==null?void 0:t.message)!=null&&i.includes("permission-denied")||(s=t==null?void 0:t.message)!=null&&s.includes("PERMISSION_DENIED")){tO(n,e);const o="Yetkiniz yok. Bu işlemi yapmak için ekip lideri veya yöneticiye ulaşabilirsiniz.";return new Error(o)}return n instanceof Error?n:new Error((t==null?void 0:t.message)||"Bilinmeyen hata")},nn=n=>{var t,r,i;const e=n&&typeof n=="object"?n:null;return(e==null?void 0:e.code)==="permission-denied"||(e==null?void 0:e.code)===7||((t=e==null?void 0:e.message)==null?void 0:t.includes("Missing or insufficient permissions"))||((r=e==null?void 0:e.message)==null?void 0:r.includes("permission-denied"))||((i=e==null?void 0:e.message)==null?void 0:i.includes("PERMISSION_DENIED"))},Cr="projects",nO=n=>p(void 0,null,function*(){var e;try{let t=Q(q(S,Cr),me("createdAt","desc"));return n!=null&&n.status&&(t=Q(t,le("status","==",n.status))),n!=null&&n.createdBy&&(t=Q(t,le("createdBy","==",n.createdBy))),(yield J(t)).docs.map(i=>B({id:i.id},i.data()))}catch(t){const r=t&&typeof t=="object"?t:null;if((r==null?void 0:r.code)==="failed-precondition"||(e=r==null?void 0:r.message)!=null&&e.includes("index"))try{const i=Q(q(S,Cr),me("createdAt","desc"));let o=(yield J(i)).docs.map(a=>B({id:a.id},a.data()));return n!=null&&n.status&&(o=o.filter(a=>a.status===n.status)),n!=null&&n.createdBy&&(o=o.filter(a=>a.createdBy===n.createdBy)),o}catch(i){let o=(yield J(q(S,Cr))).docs.map(a=>B({id:a.id},a.data()));return n!=null&&n.status&&(o=o.filter(a=>a.status===n.status)),n!=null&&n.createdBy&&(o=o.filter(a=>a.createdBy===n.createdBy)),o.sort((a,c)=>{var h,m;const u=((h=a.createdAt)==null?void 0:h.toMillis())||0;return(((m=c.createdAt)==null?void 0:m.toMillis())||0)-u}),o}throw t}}),Si=n=>p(void 0,null,function*(){try{const e=yield re(x(S,Cr,n));return e.exists()?B({id:e.id},e.data()):null}catch(e){throw e}}),rO=n=>p(void 0,null,function*(){try{const e=ce(B({},n),{createdAt:j(),updatedAt:j()}),t=yield ge(q(S,Cr),e),r=yield Si(t.id);if(!r)throw new Error("Proje oluşturulamadı");return yield oe("CREATE","projects",t.id,n.createdBy,null,r),r}catch(e){throw e}}),iO=(n,e,t)=>p(void 0,null,function*(){try{const r=yield Si(n);if(!r)throw new Error("Proje bulunamadı");if(t){const{getUserProfile:s}=yield z(()=>p(void 0,null,function*(){const{getUserProfile:u}=yield Promise.resolve().then(()=>Ie);return{getUserProfile:u}}),void 0),{canEditProject:o}=yield z(()=>p(void 0,null,function*(){const{canEditProject:u}=yield import("./vendor-react-Cc15Kqr9.js").then(d=>d.cS);return{canEditProject:u}}),[]),a=yield s(t);if(!a)throw new Error("Kullanıcı profili bulunamadı");if(!(yield o(r,a)))throw new Error("Bu projeyi düzenlemek için yetkiniz yok. Sadece yöneticiler, ekip liderleri veya projeyi oluşturan kişi düzenleyebilir.")}yield X(x(S,Cr,n),ce(B({},e),{updatedAt:j()}));const i=yield Si(n);t&&(yield oe("UPDATE","projects",n,t,r,i))}catch(r){throw r}}),sO=(n,e)=>p(void 0,null,function*(){try{if(!n||n.trim()==="")throw new Error("Proje ID'si geçersiz");const t=yield Si(n);if(!t)return;if(e){const{getUserProfile:i}=yield z(()=>p(void 0,null,function*(){const{getUserProfile:c}=yield Promise.resolve().then(()=>Ie);return{getUserProfile:c}}),void 0),{canDeleteProject:s}=yield z(()=>p(void 0,null,function*(){const{canDeleteProject:c}=yield import("./vendor-react-Cc15Kqr9.js").then(u=>u.cS);return{canDeleteProject:c}}),[]),o=yield i(e);if(!o)throw new Error("Kullanıcı profili bulunamadı");if(!(yield s(t,o)))throw new Error("Bu projeyi silmek için yetkiniz yok. Sadece yöneticiler projeleri silebilir.")}const r=yield tv({projectId:n});yield Promise.all(r.map(i=>nv(i.id,e))),yield Ge(x(S,Cr,n)),e&&(yield oe("DELETE","projects",n,e,t,null))}catch(t){throw t}}),oO=Object.freeze(Object.defineProperty({__proto__:null,createProject:rO,deleteProject:sO,getProjectById:Si,getProjects:nO,updateProject:iO},Symbol.toStringTag,{value:"Module"})),tv=n=>p(void 0,null,function*(){var e,t;try{const r=q(S,"tasks"),i=a=>{const c=[];a!=null&&a.skipOrder||c.push(me("createdAt","desc")),n!=null&&n.createdBy&&c.push(le("createdBy","==",n.createdBy)),n!=null&&n.status&&c.push(le("status","==",n.status)),n!=null&&n.projectId&&c.push(le("projectId","==",n.projectId)),n!=null&&n.productionOrderId&&c.push(le("productionOrderId","==",n.productionOrderId)),n!=null&&n.approvalStatus&&c.push(le("approvalStatus","==",n.approvalStatus));const u=n!=null&&n.limit?Math.min(n.limit,500):100;return c.push(De(u)),c.length?Q(r,...c):Q(r,De(u))};let s;try{s=yield J(i())}catch(a){const c=a instanceof Error?a.message:String(a);if(typeof c=="string"&&c.includes("requires an index"))s=yield J(i({skipOrder:!0}));else throw a}let o=s.docs.map(a=>B({id:a.id},a.data()));if(n!=null&&n.projectId&&(o=o.filter(a=>a.projectId===n.projectId&&a.projectId!==null&&a.projectId!==void 0).sort((a,c)=>{const u=a.createdAt instanceof F?a.createdAt.toMillis():0;return(c.createdAt instanceof F?c.createdAt.toMillis():0)-u})),n!=null&&n.assignedTo)o=(yield Promise.all(o.map(c=>p(void 0,null,function*(){return c.isPrivate?c.createdBy===n.assignedTo||(yield He(c.id)).some(_=>_.assignedTo===n.assignedTo&&_.status!=="rejected")?c:null:(yield He(c.id)).some(h=>h.assignedTo===n.assignedTo&&h.status!=="rejected")?c:null})))).filter(c=>c!==null);else{const a=(e=P==null?void 0:P.currentUser)==null?void 0:e.uid;if(a){let c=!1;try{const u=yield Te(a);u!=null&&u.role&&(c=u.role.includes("personnel")&&!u.role.includes("super_admin")&&!u.role.includes("main_admin")&&!u.role.includes("team_leader"))}catch(u){}o=yield Promise.all(o.map(u=>p(void 0,null,function*(){if(c)if(u.isPrivate){const h=(yield He(u.id)).some(_=>_.assignedTo===a&&_.status!=="rejected"),m=Array.isArray(u.assignedUsers)&&u.assignedUsers.includes(a);return h||m?u:null}else{const h=(yield He(u.id)).some(_=>_.assignedTo===a&&_.status!=="rejected"),m=Array.isArray(u.assignedUsers)&&u.assignedUsers.includes(a);return h||m?u:null}if(u.onlyInMyTasks)return u.createdBy===a?u:null;if(u.isPrivate){const{getUserProfile:d}=yield z(()=>p(void 0,null,function*(){const{getUserProfile:m}=yield Promise.resolve().then(()=>Ie);return{getUserProfile:m}}),void 0),h=yield d(a);if(h){const{canViewPrivateTask:m}=yield z(()=>p(void 0,null,function*(){const{canViewPrivateTask:v}=yield import("./vendor-react-Cc15Kqr9.js").then(C=>C.cS);return{canViewPrivateTask:v}}),[]),w=(yield He(u.id)).filter(v=>v.status==="accepted"||v.status==="pending").map(v=>v.assignedTo);return(yield m(u,h,w))?u:null}return null}return u}))).then(u=>u.filter(d=>d!==null))}else o=o.filter(c=>!c.onlyInMyTasks)}return o}catch(r){throw nn(r)?tn(r,{operation:"read",collection:"tasks",userId:(t=P==null?void 0:P.currentUser)==null?void 0:t.uid}):r}}),aO=(n={},e)=>{try{const t=q(S,"tasks");let i=(o=>{const a=[];a.push(me("createdAt","desc")),n!=null&&n.createdBy&&a.push(le("createdBy","==",n.createdBy)),n!=null&&n.status&&a.push(le("status","==",n.status)),n!=null&&n.projectId&&a.push(le("projectId","==",n.projectId)),n!=null&&n.productionOrderId&&a.push(le("productionOrderId","==",n.productionOrderId)),n!=null&&n.approvalStatus&&a.push(le("approvalStatus","==",n.approvalStatus));const c=n!=null&&n.limit?Math.min(n.limit,500):100;return a.push(De(c)),a.length?Q(t,...a):Q(t,De(c))})();return ur(i,o=>p(void 0,null,function*(){var a;try{let c=o.docs.map(u=>B({id:u.id},u.data()));if(n!=null&&n.assignedTo)c=(yield Promise.all(c.map(d=>p(void 0,null,function*(){return d.isPrivate?d.createdBy===n.assignedTo||(yield He(d.id)).some(E=>E.assignedTo===n.assignedTo&&E.status!=="rejected")?d:null:(yield He(d.id)).some(_=>_.assignedTo===n.assignedTo&&_.status!=="rejected")?d:null})))).filter(d=>d!==null);else{const u=(a=P==null?void 0:P.currentUser)==null?void 0:a.uid;u?c=yield Promise.all(c.map(d=>p(void 0,null,function*(){return d.onlyInMyTasks?d.createdBy===u?d:null:!d.isPrivate||d.createdBy===u||(yield He(d.id)).some(_=>_.assignedTo===u)?d:null}))).then(d=>d.filter(h=>h!==null)):c=c.filter(d=>!d.onlyInMyTasks)}e(c)}catch(c){e([])}}),o=>{var a,c,u;if((o==null?void 0:o.code)==="unavailable"||(o==null?void 0:o.code)==="not-found"||(a=o==null?void 0:o.message)!=null&&a.includes("404")||(c=o==null?void 0:o.message)!=null&&c.includes("network")||(u=o==null?void 0:o.message)!=null&&u.includes("transport errored")){e([]);return}e([])})}catch(t){return()=>{}}},Me=n=>p(void 0,null,function*(){var e;try{const t=yield re(x(S,"tasks",n));return t.exists()?B({id:t.id},t.data()):null}catch(t){throw nn(t)?tn(t,{operation:"read",collection:"tasks",documentId:n,userId:(e=P==null?void 0:P.currentUser)==null?void 0:e.uid}):t}}),cO=n=>p(void 0,null,function*(){try{if(n.projectId){const{getProjectById:i}=yield z(()=>p(void 0,null,function*(){const{getProjectById:u}=yield Promise.resolve().then(()=>oO);return{getProjectById:u}}),void 0),{getUserProfile:s}=yield z(()=>p(void 0,null,function*(){const{getUserProfile:u}=yield Promise.resolve().then(()=>Ie);return{getUserProfile:u}}),void 0),{canCreateTask:o,canEditProject:a}=yield z(()=>p(void 0,null,function*(){const{canCreateTask:u,canEditProject:d}=yield import("./vendor-react-Cc15Kqr9.js").then(h=>h.cS);return{canCreateTask:u,canEditProject:d}}),[]),c=yield i(n.projectId);if(c){const u=yield s(n.createdBy);if(u){if(!(yield o(u,[])))throw new Error("Görev oluşturma yetkiniz yok. Sadece yöneticiler ve ekip liderleri görev oluşturabilir.");if(!(yield a(c,u))&&c.createdBy!==n.createdBy)throw new Error("Bu projeye görev ekleme yetkiniz yok. Sadece proje sahibi, yöneticiler veya ekip liderleri görev ekleyebilir.")}}}const e=ce(B({},n),{createdAt:j(),updatedAt:j()});n.dueDate!==void 0&&n.dueDate!==null?n.dueDate instanceof Date?e.dueDate=F.fromDate(n.dueDate):typeof n.dueDate=="string"&&(e.dueDate=F.fromDate(new Date(n.dueDate))):e.dueDate=null;const t=yield ge(q(S,"tasks"),e),r=yield Me(t.id);if(!r)throw new Error("Görev oluşturulamadı");if(yield oe("CREATE","tasks",t.id,n.createdBy,null,r),n.createdBy)try{const{getUserProfile:i}=yield z(()=>p(void 0,null,function*(){const{getUserProfile:c}=yield Promise.resolve().then(()=>Ie);return{getUserProfile:c}}),void 0),s=yield i(n.createdBy),o=(s==null?void 0:s.fullName)||(s==null?void 0:s.displayName)||(s==null?void 0:s.email),a=s==null?void 0:s.email;yield To(t.id,n.createdBy,"created","bu görevi oluşturdu",{taskTitle:r.title},o,a)}catch(i){}try{const i=yield mh(r),{createNotification:s}=yield z(()=>p(void 0,null,function*(){const{createNotification:u}=yield Promise.resolve().then(()=>xt);return{createNotification:u}}),void 0),{getUserProfile:o}=yield z(()=>p(void 0,null,function*(){const{getUserProfile:u}=yield Promise.resolve().then(()=>Ie);return{getUserProfile:u}}),void 0),a=yield o(n.createdBy),c=(a==null?void 0:a.fullName)||(a==null?void 0:a.displayName)||(a==null?void 0:a.email)||"Bir kullanıcı";yield Promise.all(i.map(u=>p(void 0,null,function*(){try{if(u===n.createdBy)return;yield s({userId:u,type:"task_created",title:"Yeni görev oluşturuldu",message:`${c} kullanıcısı tarafından "${r.title}" başlıklı yeni bir görev oluşturuldu.

Yeni görev sisteme eklendi. Görev detaylarını görüntülemek için bildirime tıklayabilirsiniz.

Oluşturulma Zamanı: ${new Date().toLocaleString("tr-TR",{day:"numeric",month:"long",year:"numeric",hour:"2-digit",minute:"2-digit"})}`,read:!1,relatedId:t.id,metadata:{createdBy:n.createdBy}})}catch(d){}})))}catch(i){}return r}catch(e){throw nn(e)?tn(e,{operation:"create",collection:"tasks",userId:n.createdBy,data:n}):e}}),mh=n=>p(void 0,null,function*(){if(!n)return[];try{const e=yield vo(),t=[];if(n.createdBy){const r=yield Te(n.createdBy);if(r!=null&&r.approvedTeams&&r.approvedTeams.length>0)for(const i of r.approvedTeams){const s=e.find(o=>o.id===i);s!=null&&s.managerId&&!t.includes(s.managerId)&&t.push(s.managerId)}}if(n.projectId)try{yield Si(n.projectId)}catch(r){}return t}catch(e){return[]}}),lO=(n,e,t)=>p(void 0,null,function*(){var r,i;try{const s=yield Me(n);if(!s)throw new Error("Görev bulunamadı");if((e.title!==void 0||e.description!==void 0||e.priority!==void 0||e.dueDate!==void 0||e.labels!==void 0||e.projectId!==void 0||e.isPrivate!==void 0)&&t){const{getUserProfile:d}=yield z(()=>p(void 0,null,function*(){const{getUserProfile:w}=yield Promise.resolve().then(()=>Ie);return{getUserProfile:w}}),void 0),{canEditTask:h}=yield z(()=>p(void 0,null,function*(){const{canEditTask:w}=yield import("./vendor-react-Cc15Kqr9.js").then(E=>E.cS);return{canEditTask:w}}),[]),m=yield d(t);if(!m)throw new Error("Kullanıcı profili bulunamadı");if(!(yield h(s,m)))throw new Error("Bu görevi düzenlemek için yetkiniz yok. Sadece yöneticiler, ekip liderleri veya görevi oluşturan kişi düzenleyebilir.")}const a=t||((r=P==null?void 0:P.currentUser)==null?void 0:r.uid),c=ce(B({},e),{updatedAt:j()});a&&(c.updatedBy=a),e.dueDate!==void 0&&(e.dueDate===null?c.dueDate=null:e.dueDate instanceof Date&&(c.dueDate=F.fromDate(e.dueDate))),yield X(x(S,"tasks",n),c);const u=yield Me(n);if(t&&(yield oe("UPDATE","tasks",n,t,s,u)),t&&s&&u)try{const{getUserProfile:d}=yield z(()=>p(void 0,null,function*(){const{getUserProfile:E}=yield Promise.resolve().then(()=>Ie);return{getUserProfile:E}}),void 0),h=yield d(t),m=(h==null?void 0:h.fullName)||(h==null?void 0:h.displayName)||(h==null?void 0:h.email),_=h==null?void 0:h.email,w=Object.keys(e).filter(E=>{const v=s[E],C=e[E];return v!==C});w.length>0&&(yield To(n,t,"updated","bu görevi güncelledi",{changedFields:w,taskTitle:u.title},m,_))}catch(d){}if(u&&t)try{const d=yield He(n),m=(yield nt()).find(w=>w.id===t),_=d.filter(w=>w.status==="accepted"||w.status==="pending").map(w=>w.assignedTo).filter(w=>w!==t);yield Promise.all(_.map(w=>p(void 0,null,function*(){try{yield Ne({userId:w,type:"task_updated",title:"Görev güncellendi",message:`${(m==null?void 0:m.fullName)||(m==null?void 0:m.email)||"Bir kullanıcı"} kullanıcısı tarafından "${u.title}" görevinde değişiklik yapıldı.

Görev bilgileri güncellendi. Detayları görüntülemek için bildirime tıklayabilirsiniz.

İşlem Zamanı: ${new Date().toLocaleString("tr-TR",{day:"numeric",month:"long",year:"numeric",hour:"2-digit",minute:"2-digit"})}`,read:!1,relatedId:n,metadata:null})}catch(E){}})))}catch(d){}}catch(s){throw nn(s)?tn(s,{operation:"update",collection:"tasks",documentId:n,userId:t||((i=P==null?void 0:P.currentUser)==null?void 0:i.uid),data:e}):s}}),uO=(n,e)=>p(void 0,null,function*(){var t,r;try{const i=yield Me(n);if(!i)throw new Error("Görev bulunamadı");const s=i.status,o=(t=P==null?void 0:P.currentUser)==null?void 0:t.uid;if(!o)throw new Error("Kullanıcı bilgisi bulunamadı");const a=i.createdBy===o,u=(yield He(n)).some(E=>E.assignedTo===o&&E.status!=="rejected"),d=Array.isArray(i.assignedUsers)&&i.assignedUsers.includes(o);if(!(a||u||d))throw new Error("Bu görevin durumunu değiştirme yetkiniz yok. Sadece görev üyesi olduğunuz görevlerin durumunu değiştirebilirsiniz.");const m=Array.isArray(i.assignedUsers)?i.assignedUsers:[];if(u&&!m.includes(o)){const E=x(S,"tasks",n);yield X(E,{assignedUsers:[...m,o]})}const w={status:e,updatedAt:j()};if(o&&(w.updatedBy=o),s!==e&&o){w.statusUpdatedBy=o,w.statusUpdatedAt=j();const E=i.statusHistory||[];E.push({status:e,changedAt:F.now(),changedBy:o}),w.statusHistory=E}if(yield X(x(S,"tasks",n),w),yield oe("UPDATE","tasks",n,((r=P==null?void 0:P.currentUser)==null?void 0:r.uid)||"system",{status:s},{status:e}),s!==e&&o)try{const{getUserProfile:E}=yield z(()=>p(void 0,null,function*(){const{getUserProfile:K}=yield Promise.resolve().then(()=>Ie);return{getUserProfile:K}}),void 0),v=yield E(o),C=(v==null?void 0:v.fullName)||(v==null?void 0:v.displayName)||(v==null?void 0:v.email),O=v==null?void 0:v.email,U={pending:"Beklemede",in_progress:"Devam Ediyor",completed:"Tamamlandı",cancelled:"İptal Edildi"},M=U[s]||s,Z=U[e]||e;yield To(n,o,"status_changed",`görev durumunu "${M}" → "${Z}" olarak değiştirdi`,{oldStatus:s,newStatus:e,taskTitle:i.title},C,O)}catch(E){}if(s!==e)try{const E=yield He(n),v=yield nt(),C=P==null?void 0:P.currentUser,O=v.find(R=>R.id===(C==null?void 0:C.uid)),U={pending:"Beklemede",in_progress:"Devam Ediyor",completed:"Tamamlandı",cancelled:"İptal Edildi"},M=U[e]||e,Z=U[s]||s;if(i.createdBy&&i.createdBy!==(C==null?void 0:C.uid))try{const R=new Date().toLocaleString("tr-TR",{day:"numeric",month:"long",year:"numeric",hour:"2-digit",minute:"2-digit"});yield Ne({userId:i.createdBy,type:"task_updated",title:"Görev durumu değişti",message:`${(O==null?void 0:O.fullName)||(O==null?void 0:O.email)||"Bir kullanıcı"} kullanıcısı tarafından "${i.title}" görevinin durumu "${Z}" durumundan "${M}" durumuna güncellendi.

İşlem Zamanı: ${R}`,read:!1,relatedId:n,metadata:{oldStatus:s,newStatus:e,updatedAt:new Date,priority:i.priority,dueDate:i.dueDate}})}catch(R){console.error("Error sending notification to task creator:",R)}const K=E.filter(R=>(R.status==="accepted"||R.status==="pending")&&R.assignedTo!==(C==null?void 0:C.uid)).map(R=>R.assignedTo);yield Promise.all(K.map(R=>p(void 0,null,function*(){try{const T=new Date().toLocaleString("tr-TR",{day:"numeric",month:"long",year:"numeric",hour:"2-digit",minute:"2-digit"});yield Ne({userId:R,type:"task_updated",title:"Görev durumu değişti",message:`${(O==null?void 0:O.fullName)||(O==null?void 0:O.email)||"Bir kullanıcı"} tarafından "${i.title}" görevinin durumu "${Z}" durumundan "${M}" durumuna güncellendi.

İşlem Zamanı: ${T}`,read:!1,relatedId:n,metadata:{oldStatus:s,newStatus:e,updatedAt:new Date,priority:i.priority,dueDate:i.dueDate}})}catch(T){console.error("Error sending notification to assigned user:",R,T)}})))}catch(E){console.error("Error sending task status change notifications:",E)}}catch(i){const s=i instanceof Error?i.message:String(i);throw s.includes("Missing or insufficient permissions")||s.includes("permission-denied")?new Error("Firestore güvenlik kuralları görev durumunu değiştirmenize izin vermiyor. Lütfen yöneticinizle iletişime geçin."):i}}),nv=(n,e)=>p(void 0,null,function*(){try{const t=yield Me(n);if(!t)throw new Error("Görev bulunamadı");if(e){const{getUserProfile:o}=yield z(()=>p(void 0,null,function*(){const{getUserProfile:d}=yield Promise.resolve().then(()=>Ie);return{getUserProfile:d}}),void 0),{canDeleteTask:a}=yield z(()=>p(void 0,null,function*(){const{canDeleteTask:d}=yield import("./vendor-react-Cc15Kqr9.js").then(h=>h.cS);return{canDeleteTask:d}}),[]),c=yield o(e);if(!c)throw new Error("Kullanıcı profili bulunamadı");if(!(yield a(t,c)))throw new Error("Bu görevi silmek için yetkiniz yok. Sadece yöneticiler, ekip liderleri veya görevi oluşturan kişi silebilir.")}if(e&&t)try{const{getUserProfile:o}=yield z(()=>p(void 0,null,function*(){const{getUserProfile:d}=yield Promise.resolve().then(()=>Ie);return{getUserProfile:d}}),void 0),a=yield o(e),c=(a==null?void 0:a.fullName)||(a==null?void 0:a.displayName)||(a==null?void 0:a.email),u=a==null?void 0:a.email;yield To(n,e,"deleted","bu görevi sildi",{taskTitle:t.title},c,u)}catch(o){}let r=[],i=[],s;try{r=yield He(n),i=yield nt(),s=i.find(o=>o.id===e)}catch(o){console.error("Error fetching data for notifications:",o)}try{const a=(yield J(q(S,"tasks",n,"assignments"))).docs.map(d=>Ge(d.ref));yield Promise.all(a);const u=(yield J(q(S,"tasks",n,"checklists"))).docs.map(d=>Ge(d.ref));yield Promise.all(u);try{const h=(yield J(q(S,"tasks",n,"attachments"))).docs.map(m=>Ge(m.ref));yield Promise.all(h)}catch(d){}}catch(o){console.error("Error deleting subcollections:",o)}yield Ge(x(S,"tasks",n)),e&&(yield oe("DELETE","tasks",n,e,t,null));try{const o=P==null?void 0:P.currentUser;if(t.createdBy&&t.createdBy!==(o==null?void 0:o.uid))try{const c=new Date().toLocaleString("tr-TR",{day:"numeric",month:"long",year:"numeric",hour:"2-digit",minute:"2-digit"});yield Ne({userId:t.createdBy,type:"task_deleted",title:"Görev silindi",message:`${(s==null?void 0:s.fullName)||(s==null?void 0:s.email)||"Bir kullanıcı"} kullanıcısı tarafından "${t.title}" görevi silindi.

Görev sistemden kalıcı olarak kaldırıldı. Bu işlem geri alınamaz.

Silme Zamanı: ${c}`,read:!1,relatedId:n,metadata:{taskTitle:t.title,updatedAt:new Date}})}catch(c){console.error("Error sending notification to task creator:",c)}const a=r.filter(c=>(c.status==="accepted"||c.status==="pending")&&c.assignedTo!==(o==null?void 0:o.uid)).map(c=>c.assignedTo);yield Promise.all(a.map(c=>p(void 0,null,function*(){try{const u=new Date().toLocaleString("tr-TR",{day:"numeric",month:"long",year:"numeric",hour:"2-digit",minute:"2-digit"});yield Ne({userId:c,type:"task_deleted",title:"Görev silindi",message:`${(s==null?void 0:s.fullName)||(s==null?void 0:s.email)||"Bir kullanıcı"} kullanıcısı tarafından "${t.title}" görevi silindi.

Görev sistemden kalıcı olarak kaldırıldı. Bu işlem geri alınamaz.

Silme Zamanı: ${u}`,read:!1,relatedId:n,metadata:{taskTitle:t.title,updatedAt:new Date}})}catch(u){console.error("Error sending notification to assigned user:",c,u)}})))}catch(o){console.error("Error sending task deletion notifications:",o)}}catch(t){throw t}}),rv=(n,e,t,r)=>p(void 0,null,function*(){try{const i={taskId:n,assignedTo:e,assignedBy:t,status:"accepted",notes:null,assignedAt:F.now(),acceptedAt:F.now(),completedAt:null},s=yield ge(q(S,"tasks",n,"assignments"),i),o=x(S,"tasks",n),a=yield re(o);if(a.exists()){const u=a.data().assignedUsers||[];u.includes(e)||(yield X(o,{assignedUsers:[...u,e]}))}try{const[c,u]=yield Promise.all([Me(n),Te(t)]);if(c){const d=[];if(c.description){const _=c.description.length>100?c.description.substring(0,100)+"...":c.description;d.push(`Açıklama: ${_}`)}if(c.priority){const{getPriorityLabel:_,convertOldPriorityToNew:w}=yield z(()=>p(void 0,null,function*(){const{getPriorityLabel:C,convertOldPriorityToNew:O}=yield import("./priority-DjPsOOkO.js");return{getPriorityLabel:C,convertOldPriorityToNew:O}}),[]),E=w(c.priority),v=_(E);d.push(`Öncelik: ${v}`)}if(c.dueDate)try{const w=(c.dueDate instanceof F?c.dueDate.toDate():new Date(c.dueDate)).toLocaleDateString("tr-TR",{day:"numeric",month:"long",year:"numeric",hour:"2-digit",minute:"2-digit"});d.push(`Bitiş Tarihi: ${w}`)}catch(_){}const h=d.length>0?`

Görev Detayları:
${d.join(`
`)}`:"";let m=null;if(c.dueDate)try{const _=c.dueDate;if(_ instanceof F)m=_.toDate();else if(_ instanceof Date)m=_;else if(typeof _=="object"&&_!==null&&"seconds"in _){const w=_;m=new Date(w.seconds*1e3+(w.nanoseconds||0)/1e6)}}catch(_){m=null}yield Ne({userId:e,type:"task_assigned",title:"Yeni görev atandı",message:`${(u==null?void 0:u.fullName)||(u==null?void 0:u.email)||"Bir yönetici"} kullanıcısı tarafından size "${c.title}" başlıklı yeni bir görev atandı.${h}

Görev detaylarını görüntülemek için bildirime tıklayabilirsiniz.`,read:!1,relatedId:n,metadata:{assignment_id:s.id,priority:c.priority,dueDate:m,updatedAt:new Date}})}}catch(c){}return t&&(yield oe("CREATE","task_assignments",s.id,t,null,i)),B({id:s.id},i)}catch(i){throw i}}),dO=(n,e)=>p(void 0,null,function*(){var t;try{yield X(x(S,"tasks",n,"assignments",e),{status:"accepted",acceptedAt:j()});const r=(t=P==null?void 0:P.currentUser)==null?void 0:t.uid;if(r){const i=yield Me(n),o=(yield re(x(S,"tasks",n,"assignments",e))).data();yield oe("UPDATE","task_assignments",e,r,o||{status:"pending"},{status:"accepted",taskId:n,taskTitle:i==null?void 0:i.title},{action:"accept",taskId:n})}try{const s=(yield re(x(S,"tasks",n,"assignments",e))).data();if(s){const{getNotifications:o}=yield z(()=>p(void 0,null,function*(){const{getNotifications:u}=yield Promise.resolve().then(()=>xt);return{getNotifications:u}}),void 0),c=(yield o(s.assignedTo,{limit:100})).find(u=>{if(u.type!=="task_assigned"||u.relatedId!==n)return!1;const d=u.metadata;return d&&typeof d=="object"&&"assignment_id"in d?d.assignment_id===e:!1});if(c){const u=ce(B({},c.metadata),{action:"accepted"});yield fh(c.id,{metadata:u,read:!0})}}}catch(i){console.error("Error updating assignment notification:",i)}try{const i=yield Me(n),o=(yield re(x(S,"tasks",n,"assignments",e))).data();if(i&&o){const a=yield mh(i),u=(yield nt()).find(d=>d.id===o.assignedTo);yield Promise.all(a.map(d=>p(void 0,null,function*(){try{const h=new Date().toLocaleString("tr-TR",{day:"numeric",month:"long",year:"numeric",hour:"2-digit",minute:"2-digit"});yield Ne({userId:d,type:"task_assigned",title:"Görev kabul edildi",message:`${(u==null?void 0:u.fullName)||(u==null?void 0:u.email)||"Bir kullanıcı"} kullanıcısı "${i.title}" görevini kabul etti.

Görev artık bu kullanıcının görev listesinde görünecek ve üzerinde çalışmaya başlayabilir.

Kabul Zamanı: ${h}`,read:!1,relatedId:n,metadata:{assignment_id:e,action:"accepted",updatedAt:new Date,priority:i.priority,dueDate:i.dueDate}})}catch(h){console.error("Error sending notification to team leader:",d,h)}})))}}catch(i){console.error("Error sending acceptance notifications:",i)}}catch(r){throw r}}),hO=(n,e,t)=>p(void 0,null,function*(){var r,i,s;try{if(t.trim().length<20)throw new Error("Red sebebi en az 20 karakter olmalıdır");yield X(x(S,"tasks",n,"assignments",e),{status:"rejected",rejectionReason:t.trim()});const o=(r=P==null?void 0:P.currentUser)==null?void 0:r.uid;if(o){const a=yield Me(n),u=(yield re(x(S,"tasks",n,"assignments",e))).data();yield oe("UPDATE","task_assignments",e,o,u||{status:"pending"},{status:"rejected",rejectionReason:t.trim(),taskId:n,taskTitle:a==null?void 0:a.title},{action:"reject",taskId:n,reason:t.trim()})}try{const c=(yield re(x(S,"tasks",n,"assignments",e))).data();if(c){const{getNotifications:u}=yield z(()=>p(void 0,null,function*(){const{getNotifications:m}=yield Promise.resolve().then(()=>xt);return{getNotifications:m}}),void 0),h=(yield u(c.assignedTo,{limit:100})).find(m=>{if(m.type!=="task_assigned"||m.relatedId!==n)return!1;const _=m.metadata;return _&&typeof _=="object"&&"assignment_id"in _?_.assignment_id===e:!1});if(h){const m=ce(B({},h.metadata),{action:"rejected"});yield fh(h.id,{metadata:m,read:!0})}}}catch(a){console.error("Error updating assignment notification:",a)}try{const a=yield Me(n),u=(yield re(x(S,"tasks",n,"assignments",e))).data();if(a&&u){const d=yield nt(),h=d.find(_=>_.id===u.assignedTo);if(d.find(_=>_.id===a.createdBy),d.find(_=>_.id===u.assignedBy),u.assignedBy&&u.assignedBy!==((i=P==null?void 0:P.currentUser)==null?void 0:i.uid))try{const _=new Date().toLocaleString("tr-TR",{day:"numeric",month:"long",year:"numeric",hour:"2-digit",minute:"2-digit"});yield Ne({userId:u.assignedBy,type:"task_assigned",title:"Görev reddedildi",message:`${(h==null?void 0:h.fullName)||(h==null?void 0:h.email)||"Bir kullanıcı"} kullanıcısı "${a.title}" görevini reddetti.

Reddetme Sebebi: ${t.trim().substring(0,200)}${t.trim().length>200?"...":""}

Reddetme Zamanı: ${_}`,read:!1,relatedId:n,metadata:{assignment_id:e,action:"rejected",reason:t.trim(),assigned_user_id:u.assignedTo,updatedAt:new Date,priority:a.priority,dueDate:a.dueDate}})}catch(_){console.error("Error sending notification to task assigner:",_)}if(a.createdBy&&a.createdBy!==((s=P==null?void 0:P.currentUser)==null?void 0:s.uid)&&a.createdBy!==u.assignedBy)try{const _=new Date().toLocaleString("tr-TR",{day:"numeric",month:"long",year:"numeric",hour:"2-digit",minute:"2-digit"});yield Ne({userId:a.createdBy,type:"task_assigned",title:"Görev reddedildi - Onayınız gerekiyor",message:`${(h==null?void 0:h.fullName)||(h==null?void 0:h.email)||"Bir kullanıcı"} kullanıcısı "${a.title}" görevini reddetti.

Reddetme Sebebi: ${t.trim().substring(0,200)}${t.trim().length>200?"...":""}

Reddetme Zamanı: ${_}

Lütfen bu reddi onaylayın veya reddedin. Reddin onaylanması durumunda görev başka birine atanabilir.`,read:!1,relatedId:n,metadata:{assignment_id:e,action:"rejection_pending_approval",reason:t.trim(),assigned_user_id:u.assignedTo,updatedAt:new Date,priority:a.priority,dueDate:a.dueDate}})}catch(_){console.error("Error sending notification to task creator:",_)}const m=yield mh(a);yield Promise.all(m.filter(_=>_!==a.createdBy&&_!==u.assignedBy).map(_=>p(void 0,null,function*(){try{yield Ne({userId:_,type:"task_assigned",title:"Görev reddedildi",message:`${(h==null?void 0:h.fullName)||(h==null?void 0:h.email)||"Bir kullanıcı"} "${a.title}" görevini reddetti. Sebep: ${t.trim().substring(0,100)}${t.trim().length>100?"...":""}`,read:!1,relatedId:n,metadata:{assignment_id:e,action:"rejected",reason:t.trim()}})}catch(w){console.error("Error sending notification to team leader:",_,w)}})))}}catch(a){console.error("Error sending rejection notifications:",a)}}catch(o){throw o}}),He=n=>p(void 0,null,function*(){try{return(yield J(q(S,"tasks",n,"assignments"))).docs.map(t=>B({id:t.id},t.data()))}catch(e){throw e}}),fO=n=>p(void 0,null,function*(){try{const e=Ly(S,"assignments");let t=[];n!=null&&n.orderBy&&t.push(me(n.orderBy.field,n.orderBy.direction)),n!=null&&n.limit&&t.push(De(n.limit));let r=Q(e,...t),i;try{i=yield J(r)}catch(s){const o=s instanceof Error?s.message:String(s);if(typeof o=="string"&&o.includes("requires an index"))r=n!=null&&n.limit?Q(e,De(n.limit)):Q(e),i=yield J(r);else throw s}return i.docs.map(s=>{var o;return ce(B({id:s.id},s.data()),{taskId:((o=s.ref.parent.parent)==null?void 0:o.id)||""})})}catch(e){throw e}}),mO=(n,e,t)=>p(void 0,null,function*(){try{const r=x(S,"tasks",n,"assignments",e),i=yield re(r);if(!i.exists())return;const s=i.data();if(yield Ge(r),s){const o=x(S,"tasks",n),a=yield re(o);if(a.exists()){const u=a.data().assignedUsers||[];u.includes(s.assignedTo)&&(yield X(o,{assignedUsers:u.filter(d=>d!==s.assignedTo)}))}if(s)try{const[c,u,d]=yield Promise.all([Me(n),t?Te(t):Promise.resolve(null),Te(s.assignedTo)]);if(c&&d){const h=new Date().toLocaleString("tr-TR",{day:"numeric",month:"long",year:"numeric",hour:"2-digit",minute:"2-digit"});if(yield Ne({userId:s.assignedTo,type:"task_updated",title:"Görev atamanız kaldırıldı",message:`${(u==null?void 0:u.fullName)||(u==null?void 0:u.email)||"Bir yönetici"} kullanıcısı tarafından siz "${c.title}" görevinden kaldırıldınız.

Artık bu görevle ilgili bildirimler almayacaksınız ve görev üzerinde işlem yapamayacaksınız.

Kaldırılma Zamanı: ${h}`,read:!1,relatedId:n,metadata:{assignment_id:e,action:"removed",updatedAt:new Date,priority:c.priority,dueDate:c.dueDate}}),c.createdBy&&c.createdBy!==t&&c.createdBy!==s.assignedTo){const m=new Date().toLocaleString("tr-TR",{day:"numeric",month:"long",year:"numeric",hour:"2-digit",minute:"2-digit"});yield Ne({userId:c.createdBy,type:"task_updated",title:"Görev ataması kaldırıldı",message:`${(u==null?void 0:u.fullName)||(u==null?void 0:u.email)||"Bir yönetici"} kullanıcısı tarafından "${(d==null?void 0:d.fullName)||(d==null?void 0:d.email)||"bir kullanıcı"}" kullanıcısı "${c.title}" görevinden kaldırıldı.

Bu kullanıcı artık görevle ilgili bildirimler almayacak ve görev üzerinde işlem yapamayacak.

Kaldırılma Zamanı: ${m}`,read:!1,relatedId:n,metadata:{assignment_id:e,action:"removed",removed_user_id:s.assignedTo,updatedAt:new Date,priority:c.priority,dueDate:c.dueDate}})}}}catch(c){}}}catch(r){throw r}}),pO=(n,e,t)=>p(void 0,null,function*(){try{const r={taskId:n,title:e,items:t.map(s=>({id:`${Date.now()}-${Math.random()}`,text:s.text,completed:s.completed||!1,createdAt:F.now(),completedAt:null})),createdAt:F.now(),updatedAt:F.now()},i=yield ge(q(S,"tasks",n,"checklists"),r);return B({id:i.id},r)}catch(r){throw r}}),gO=(n,e,t,r,i)=>p(void 0,null,function*(){var s;try{if(i){const d=yield Me(n);if(!d)throw new Error("Görev bulunamadı");const{getUserProfile:h}=yield z(()=>p(void 0,null,function*(){const{getUserProfile:_}=yield Promise.resolve().then(()=>Ie);return{getUserProfile:_}}),void 0),m=yield h(i);if(m){const{canAddChecklist:_}=yield z(()=>p(void 0,null,function*(){const{canAddChecklist:C}=yield import("./vendor-react-Cc15Kqr9.js").then(O=>O.cS);return{canAddChecklist:C}}),[]),E=(yield He(n)).filter(C=>C.status==="accepted"||C.status==="pending").map(C=>C.assignedTo);if(!(yield _(d,m,E)))throw new Error("Checklist işaretleme yetkiniz yok. Sadece size atanan görevlerin checklist'lerini işaretleyebilirsiniz.")}}const o=x(S,"tasks",n,"checklists",e),a=yield re(o);if(!a.exists())throw new Error("Checklist bulunamadı");const u=a.data().items.map(d=>d.id===t?ce(B({},d),{completed:r,completedAt:r?F.now():null}):d);yield X(o,{items:u,updatedAt:j()}),yield oe("UPDATE","checklist_items",`${n}/${e}/${t}`,i||((s=P==null?void 0:P.currentUser)==null?void 0:s.uid)||"system",{completed:!r},{completed:r})}catch(o){throw o}}),_O=n=>p(void 0,null,function*(){try{return(yield J(q(S,"tasks",n,"checklists"))).docs.map(t=>B({id:t.id},t.data()))}catch(e){throw e}}),yO=(n,e,t)=>p(void 0,null,function*(){try{const r=x(S,"tasks",n,"checklists",e),i=yield re(r);if(!i.exists())throw new Error("Checklist bulunamadı");const s=i.data(),o={id:`${Date.now()}-${Math.random()}`,text:t,completed:!1,createdAt:F.now(),completedAt:null};yield X(r,{items:[...s.items,o],updatedAt:j()})}catch(r){throw r}}),wO=(n,e,t)=>p(void 0,null,function*(){try{const r=x(S,"tasks",n,"checklists",e),i=yield re(r);if(!i.exists())throw new Error("Checklist bulunamadı");const o=i.data().items.filter(a=>a.id!==t);yield X(r,{items:o,updatedAt:j()})}catch(r){throw r}}),EO=n=>p(void 0,null,function*(){try{return(yield J(Q(q(S,"tasks",n,"comments"),me("createdAt","desc")))).docs.map(t=>B({id:t.id},t.data()))}catch(e){throw e}}),To=(n,e,t,r,i,s,o)=>p(void 0,null,function*(){try{const a={taskId:n,userId:e,userName:s,userEmail:o,action:t,description:r,metadata:i||{},createdAt:F.now()};return(yield ge(q(S,"tasks",n,"activities"),a)).id}catch(a){return""}}),vO=(n,e)=>p(void 0,null,function*(){var t,r;try{const i=yield Me(n);if(!i)throw new Error("Görev bulunamadı");const s=(t=P==null?void 0:P.currentUser)==null?void 0:t.uid;if(!s)throw new Error("Kullanıcı oturumu bulunamadı");const o=yield Te(s);if(!o)throw new Error("Kullanıcı profili bulunamadı");const{isAdmin:a,isMainAdmin:c}=yield z(()=>p(void 0,null,function*(){const{isAdmin:_,isMainAdmin:w}=yield import("./vendor-react-Cc15Kqr9.js").then(E=>E.cS);return{isAdmin:_,isMainAdmin:w}}),[]);if(!((yield a(o))||(yield c(o)))&&!(i.createdBy===s)&&!(yield He(n)).filter(C=>C.status==="accepted").map(C=>C.assignedTo).includes(s))throw new Error("Bu göreve dosya eklemek için yetkiniz yok. Sadece size atanan görevlere veya oluşturduğunuz görevlere dosya ekleyebilirsiniz.");const d=ce(B({},e),{uploadedAt:j()}),h=yield ge(q(S,"tasks",n,"attachments"),d),m=yield re(h);return ce(B({id:h.id},m.data()),{uploadedAt:((r=m.data())==null?void 0:r.uploadedAt)||F.now()})}catch(i){throw i}}),TO=n=>p(void 0,null,function*(){try{return(yield J(Q(q(S,"tasks",n,"attachments"),me("uploadedAt","desc")))).docs.map(t=>B({id:t.id},t.data()))}catch(e){throw e}}),IO=(n,e)=>p(void 0,null,function*(){var t;try{const r=yield Me(n);if(!r)throw new Error("Görev bulunamadı");const i=(t=P==null?void 0:P.currentUser)==null?void 0:t.uid;if(!i)throw new Error("Kullanıcı oturumu bulunamadı");const s=yield Te(i);if(!s)throw new Error("Kullanıcı profili bulunamadı");const{isAdmin:o,isMainAdmin:a}=yield z(()=>p(void 0,null,function*(){const{isAdmin:u,isMainAdmin:d}=yield import("./vendor-react-Cc15Kqr9.js").then(h=>h.cS);return{isAdmin:u,isMainAdmin:d}}),[]);if(!((yield o(s))||(yield a(s)))&&!(r.createdBy===i)&&!(yield He(n)).filter(_=>_.status==="accepted").map(_=>_.assignedTo).includes(i))throw new Error("Bu görevden dosya silmek için yetkiniz yok. Sadece size atanan görevlerden veya oluşturduğunuz görevlerden dosya silebilirsiniz.");yield Ge(x(S,"tasks",n,"attachments",e))}catch(r){throw r}}),AO=n=>p(void 0,null,function*(){try{yield X(x(S,"tasks",n),{isInPool:!1,poolRequests:[],updatedAt:j()})}catch(e){throw e}}),RO=(n,e)=>p(void 0,null,function*(){try{const t=x(S,"tasks",n),r=yield re(t);if(!r.exists())throw new Error("Görev bulunamadı");const i=r.data(),s=i.poolRequests||[];if(s.includes(e))throw new Error("Bu görev için zaten talep yaptınız");yield X(t,{poolRequests:[...s,e],updatedAt:j()}),yield oe("UPDATE","tasks",n,e,{poolRequests:s},{poolRequests:[...s,e]});const o=i.createdBy;if(o&&o!==e)try{const a=yield Te(e),c=(a==null?void 0:a.fullName)||(a==null?void 0:a.displayName)||(a==null?void 0:a.email)||"Bir kullanıcı";yield Ne({userId:o,type:"task_pool_request",title:"Görev Havuzu Talebi",message:`${c} "${i.title}" görevi için talep gönderdi. Talebi onaylayabilirsiniz.`,read:!1,relatedId:n,metadata:{taskId:n,taskTitle:i.title,requestedBy:e,requestedByName:c,link:`/tasks?taskId=${n}&view=list`}})}catch(a){}}catch(t){throw t}}),bO=(n,e,t,r=!1)=>p(void 0,null,function*(){try{const i=x(S,"tasks",n),s=yield re(i);if(!s.exists())throw new Error("Görev bulunamadı");const o=s.data(),a=o.poolRequests||[];if(!a.includes(e))throw new Error("Bu kullanıcı için talep bulunamadı");if(o.createdBy!==t)throw new Error("Sadece görevi havuza ekleyen kişi talepleri onaylayabilir");const c=yield rv(n,e,t),u=x(S,"tasks",n,"assignments",c.id);yield X(u,{status:"accepted",acceptedAt:j()});const d={poolRequests:a.filter(h=>h!==e),updatedAt:j()};r||(d.isInPool=!1,d.poolRequests=[]),yield X(i,d);try{const{getNotifications:h,updateNotification:m}=yield z(()=>p(void 0,null,function*(){const{getNotifications:v,updateNotification:C}=yield Promise.resolve().then(()=>xt);return{getNotifications:v,updateNotification:C}}),void 0),[_,w,E]=yield Promise.all([Me(n),Te(t),h(e,{limit:10})]);if(_){const v=E.find(C=>{var O;return C.type==="task_assigned"&&C.relatedId===n&&((O=C.metadata)==null?void 0:O.assignment_id)===c.id&&!C.read});v?yield m(v.id,{title:"Görev havuzu talebiniz onaylandı",message:`${(w==null?void 0:w.fullName)||(w==null?void 0:w.email)||"Bir yönetici"} kullanıcısı görev havuzu talebinizi onayladı. "${_.title}" görevine atandınız ve görev otomatik olarak kabul edildi.`,metadata:ce(B({},v.metadata),{action:"pool_request_approved"})}):yield Ne({userId:e,type:"task_assigned",title:"Görev havuzu talebiniz onaylandı",message:`${(w==null?void 0:w.fullName)||(w==null?void 0:w.email)||"Bir yönetici"} kullanıcısı görev havuzu talebinizi onayladı. "${_.title}" görevine atandınız ve görev otomatik olarak kabul edildi.`,read:!1,relatedId:n,metadata:{assignment_id:c.id,action:"pool_request_approved",priority:_.priority,dueDate:_.dueDate,updatedAt:new Date}})}}catch(h){}yield oe("UPDATE","tasks",n,t,{isInPool:!0,poolRequests:a},{isInPool:r,poolRequests:d.poolRequests,assignedTo:e}),yield oe("UPDATE","task_assignments",c.id,t,{status:"pending"},{status:"accepted",taskId:n,taskTitle:o.title})}catch(i){throw i}}),SO=(n,e)=>p(void 0,null,function*(){var t;try{const r=x(S,"tasks",n),i=yield re(r);if(!i.exists())throw new Error("Görev bulunamadı");const o=i.data().poolRequests||[];if(!o.includes(e))throw new Error("Bu kullanıcı için talep bulunamadı");yield X(r,{poolRequests:o.filter(a=>a!==e),updatedAt:j()}),yield oe("UPDATE","tasks",n,((t=P==null?void 0:P.currentUser)==null?void 0:t.uid)||"system",{poolRequests:o},{poolRequests:o.filter(a=>a!==e),rejectedUser:e})}catch(r){throw r}}),kO=(n,e)=>p(void 0,null,function*(){try{const t=yield Me(n);if(!t)throw new Error("Görev bulunamadı");if(t.approvalStatus==="pending")return;if(t.approvalStatus==="approved")throw new Error("Bu görev zaten onaylanmış.");const r=yield Te(e);if(!r)throw new Error("Kullanıcı profili bulunamadı");const{isAdmin:i,isMainAdmin:s}=yield z(()=>p(void 0,null,function*(){const{isAdmin:a,isMainAdmin:c}=yield import("./vendor-react-Cc15Kqr9.js").then(u=>u.cS);return{isAdmin:a,isMainAdmin:c}}),[]);if(!((yield i(r))||(yield s(r)))&&!(yield He(n)).filter(d=>d.status==="accepted").map(d=>d.assignedTo).includes(e))throw new Error("Bu görevi onaya göndermek için yetkiniz yok. Sadece size atanan görevleri onaya gönderebilirsiniz.");yield X(x(S,"tasks",n),{approvalStatus:"pending",approvalRequestedBy:e,updatedAt:j()}),yield oe("UPDATE","tasks",n,e,{approvalStatus:t.approvalStatus||"none"},{approvalStatus:"pending"});try{if(t&&t.createdBy){let a=!1;try{const{getNotifications:c}=yield z(()=>p(void 0,null,function*(){const{getNotifications:d}=yield Promise.resolve().then(()=>xt);return{getNotifications:d}}),void 0);a=(yield c(t.createdBy,{unreadOnly:!0})).some(d=>{var h;return d.type==="task_approval"&&d.relatedId===n&&((h=d.metadata)==null?void 0:h.action)==="approval_requested"})}catch(c){a=!1}if(!a)try{yield Ne({userId:t.createdBy,type:"task_approval",title:"Görev onayı bekleniyor",message:`${(r==null?void 0:r.fullName)||(r==null?void 0:r.email)||"Bir kullanıcı"} kullanıcısı "${t.title}" görevini tamamladı ve onayınızı bekliyor.

"${t.title}" başlıklı görev için onay talebi gönderildi. Lütfen görevi inceleyip onaylayın veya gerekirse geri gönderin.

İşlem Zamanı: ${new Date().toLocaleString("tr-TR",{day:"numeric",month:"long",year:"numeric",hour:"2-digit",minute:"2-digit"})}`,read:!1,relatedId:n,metadata:{action:"approval_requested",updatedAt:new Date,priority:t.priority,dueDate:t.dueDate}})}catch(c){}}}catch(a){}}catch(t){throw t}}),CO=(n,e)=>p(void 0,null,function*(){var t;try{const r=yield Me(n);if(!r)throw new Error("Görev bulunamadı");if(r.approvalStatus==="approved")throw new Error("Bu görev zaten onaylanmış. Tekrar onaylanamaz.");if(r.approvalStatus!=="pending")throw new Error("Bu görev onay beklenmiyor.");const i=yield Te(e);if(!i)throw new Error("Kullanıcı profili bulunamadı");const{isAdmin:s,isMainAdmin:o}=yield z(()=>p(void 0,null,function*(){const{isAdmin:E,isMainAdmin:v}=yield import("./vendor-react-Cc15Kqr9.js").then(C=>C.cS);return{isAdmin:E,isMainAdmin:v}}),[]),a=(yield s(i))||(yield o(i)),c=(t=i.role)==null?void 0:t.includes("team_leader"),u=r.createdBy===e,{canPerformSubPermission:d}=yield z(()=>p(void 0,null,function*(){const{canPerformSubPermission:E}=yield import("./vendor-react-Cc15Kqr9.js").then(v=>v.cS);return{canPerformSubPermission:E}}),[]),h=yield d(i,"tasks","canApprove");if(!a&&!(c&&(h||u)))throw new Error("Bu görevi onaylamak için yetkiniz yok. Sadece yöneticiler veya görevi veren ekip liderleri onaylayabilir.");const _=r.status,w=P==null?void 0:P.currentUser;yield X(x(S,"tasks",n),{approvalStatus:"approved",status:"completed",approvedBy:e,approvedAt:j(),updatedAt:j()}),_!=="completed"&&(w!=null&&w.uid)&&(yield X(x(S,"tasks",n),{statusUpdatedBy:w.uid,statusUpdatedAt:j()})),yield oe("UPDATE","tasks",n,e,{approvalStatus:"pending",status:_},{approvalStatus:"approved",status:"completed"});try{const E=yield Me(n),v=yield Te(e),C=(v==null?void 0:v.fullName)||(v==null?void 0:v.email)||"Yönetici",U=(yield He(n)).filter(K=>K.status==="accepted").map(K=>K.assignedTo),M=new Set;E&&E.approvalRequestedBy&&M.add(E.approvalRequestedBy),U.forEach(K=>{K!==(E==null?void 0:E.approvalRequestedBy)&&M.add(K)});const{getNotifications:Z}=yield z(()=>p(void 0,null,function*(){const{getNotifications:K}=yield Promise.resolve().then(()=>xt);return{getNotifications:K}}),void 0);for(const K of M)try{let R=[];try{R=yield Z(K,{unreadOnly:!0})}catch(I){}if(!R.some(I=>{var b;return I.type==="task_approval"&&I.relatedId===n&&((b=I.metadata)==null?void 0:b.action)==="approved"})){const I=new Date().toLocaleString("tr-TR",{day:"numeric",month:"long",year:"numeric",hour:"2-digit",minute:"2-digit"});yield Ne({userId:K,type:"task_approval",title:"Görev onaylandı",message:`${C} kullanıcısı tarafından "${(E==null?void 0:E.title)||"görev"}" görevi onaylandı ve "Onaylandı" durumuna geçirildi.

Görev başarıyla onaylanmış olarak işaretlendi. Tüm görev üyeleri bu durumu görebilir.

Onay Zamanı: ${I}`,read:!1,relatedId:n,metadata:{action:"approved",updatedAt:new Date,priority:E==null?void 0:E.priority,dueDate:E==null?void 0:E.dueDate}})}}catch(R){console.error(`Error sending notification to user ${K}:`,R)}}catch(E){console.error("Error sending approval notification:",E)}}catch(r){throw r}}),PO=(n,e,t)=>p(void 0,null,function*(){try{const r=yield Me(n);if(!r)throw new Error("Görev bulunamadı");const i=r.status,s=P==null?void 0:P.currentUser;yield X(x(S,"tasks",n),{approvalStatus:"rejected",status:"in_progress",rejectedBy:e,rejectedAt:j(),rejectionReason:t||null,updatedAt:j()}),i!=="in_progress"&&(s!=null&&s.uid)&&(yield X(x(S,"tasks",n),{statusUpdatedBy:s.uid,statusUpdatedAt:j()})),yield oe("UPDATE","tasks",n,e,{approvalStatus:"pending",status:i},{approvalStatus:"rejected",status:"in_progress",rejectionReason:t});try{const o=yield Me(n),a=yield Te(e);if(o){const u=(yield He(n)).filter(h=>h.status!=="rejected").map(h=>h.assignedTo),d=new Set;u.forEach(h=>d.add(h)),o.createdBy&&!d.has(o.createdBy)&&d.add(o.createdBy),o.approvalRequestedBy&&!d.has(o.approvalRequestedBy)&&d.add(o.approvalRequestedBy),yield Promise.all(Array.from(d).map(h=>p(void 0,null,function*(){try{const m=new Date().toLocaleString("tr-TR",{day:"numeric",month:"long",year:"numeric",hour:"2-digit",minute:"2-digit"}),_=t?`${(a==null?void 0:a.fullName)||(a==null?void 0:a.email)||"Yönetici"} kullanıcısı tarafından "${o.title}" görevi için tamamlanma onayı reddedildi.

Reddetme Notu: ${t}

Görev tekrar "Devam Ediyor" durumuna alındı. Lütfen gerekli düzeltmeleri yapıp tekrar onay talebi gönderin.

Reddetme Zamanı: ${m}`:`${(a==null?void 0:a.fullName)||(a==null?void 0:a.email)||"Yönetici"} kullanıcısı tarafından "${o.title}" görevi için tamamlanma onayı reddedildi.

Görev tekrar "Devam Ediyor" durumuna alındı. Lütfen gerekli düzeltmeleri yapıp tekrar onay talebi gönderin.

Reddetme Zamanı: ${m}`;yield Ne({userId:h,type:"task_approval",title:"Görev onayı reddedildi",message:_,read:!1,relatedId:n,metadata:{action:"rejected",rejectionReason:t,updatedAt:new Date,priority:o.priority,dueDate:o.dueDate}})}catch(m){}})))}}catch(o){}}catch(r){throw r}}),DO=(n,e)=>p(void 0,null,function*(){var t;try{const r=(t=P==null?void 0:P.currentUser)==null?void 0:t.uid;if(!r)throw new Error("Kullanıcı kimliği bulunamadı");const i=x(S,"tasks",n,"assignments",e),s=yield re(i);if(!s.exists())throw new Error("Görev ataması bulunamadı");const o=s.data();if(o.status!=="rejected")throw new Error("Görev reddedilmemiş");yield X(i,{rejectionApprovedBy:r,rejectionApprovedAt:j()});const a=yield Me(n);yield oe("UPDATE","task_assignments",e,r,{rejectionApprovedBy:null},{rejectionApprovedBy:r,taskId:n,taskTitle:a==null?void 0:a.title});try{const c=yield nt(),u=c.find(h=>h.id===o.assignedTo),d=c.find(h=>h.id===r);if(u){const h=new Date().toLocaleString("tr-TR",{day:"numeric",month:"long",year:"numeric",hour:"2-digit",minute:"2-digit"});yield Ne({userId:o.assignedTo,type:"task_assigned",title:"Görev reddi onaylandı",message:`${(d==null?void 0:d.fullName)||(d==null?void 0:d.email)||"Yönetici"} kullanıcısı tarafından "${a==null?void 0:a.title}" görevi için reddiniz onaylandı.

Görev artık başka birine atanabilir veya iptal edilebilir. Bu görevle ilgili artık bildirim almayacaksınız.

Onay Zamanı: ${h}`,read:!1,relatedId:n,metadata:{assignment_id:e,action:"rejection_approved",updatedAt:new Date,priority:a==null?void 0:a.priority,dueDate:a==null?void 0:a.dueDate}})}}catch(c){console.error("Error sending approval notification:",c)}}catch(r){throw r}}),NO=(n,e,t)=>p(void 0,null,function*(){var r;try{const i=(r=P==null?void 0:P.currentUser)==null?void 0:r.uid;if(!i)throw new Error("Kullanıcı kimliği bulunamadı");if(t.trim().length<20)throw new Error("Red sebebi en az 20 karakter olmalıdır");const s=x(S,"tasks",n,"assignments",e),o=yield re(s);if(!o.exists())throw new Error("Görev ataması bulunamadı");const a=o.data();if(a.status!=="rejected")throw new Error("Görev reddedilmemiş");yield X(s,{status:"pending",rejectionRejectedBy:i,rejectionRejectedAt:j(),rejectionRejectionReason:t.trim(),rejectionReason:null});const c=yield Me(n);yield oe("UPDATE","task_assignments",e,i,{status:"rejected"},{status:"pending",rejectionRejectedBy:i,rejectionRejectionReason:t.trim(),taskId:n,taskTitle:c==null?void 0:c.title});try{const u=yield nt(),d=u.find(m=>m.id===a.assignedTo),h=u.find(m=>m.id===i);if(d){const m=new Date().toLocaleString("tr-TR",{day:"numeric",month:"long",year:"numeric",hour:"2-digit",minute:"2-digit"});yield Ne({userId:a.assignedTo,type:"task_assigned",title:"Görev reddi reddedildi",message:`${(h==null?void 0:h.fullName)||(h==null?void 0:h.email)||"Yönetici"} kullanıcısı tarafından "${c==null?void 0:c.title}" görevi için reddiniz reddedildi.

Görev tekrar size atandı ve üzerinde çalışmaya devam etmeniz bekleniyor.

Yönetici Notu: ${t.trim().substring(0,200)}${t.trim().length>200?"...":""}

Reddetme Zamanı: ${m}`,read:!1,relatedId:n,metadata:{assignment_id:e,action:"rejection_rejected",reason:t.trim()}})}}catch(u){console.error("Error sending rejection notification:",u)}}catch(i){throw i}}),OO=(n,e)=>p(void 0,null,function*(){try{yield X(x(S,"tasks",n),{isArchived:!0,updatedAt:j()}),yield oe("UPDATE","tasks",n,e,{isArchived:!1},{isArchived:!0})}catch(t){throw t}}),LO=(n,e)=>p(void 0,null,function*(){try{yield X(x(S,"tasks",n),{isArchived:!1,updatedAt:j()}),yield oe("UPDATE","tasks",n,e,{isArchived:!0},{isArchived:!1})}catch(t){throw t}}),VO=n=>p(void 0,null,function*(){try{const e=q(S,"tasks"),t=yield J(e);let r=Wn(S),i=0;const s=500;for(const u of t.docs){const d=u.data(),h=u.id,m=d.assignedUsers||[];if(m.includes(n)){const E=m.filter(O=>O!==n),v=E.length===0,C={assignedUsers:E};v&&(C.isInPool=!0,C.poolRequests=[]),r.update(u.ref,C),i++,i>=s&&(yield r.commit(),i=0,r=Wn(S))}const _=q(S,`tasks/${h}/assignments`),w=yield J(Q(_,le("assignedTo","==",n)));for(const E of w.docs)r.delete(E.ref),i++,i>=s&&(yield r.commit(),i=0,r=Wn(S))}i>0&&(yield r.commit());const o=yield J(Q(e,le("createdBy","==",n)));let a=Wn(S),c=0;for(const u of o.docs)a.update(u.ref,{createdBy:"deleted_user",createdByName:"Silinmiş Kullanıcı"}),c++,c>=s&&(yield a.commit(),c=0,a=Wn(S));c>0&&(yield a.commit())}catch(e){throw e}}),MO=Object.freeze(Object.defineProperty({__proto__:null,acceptTaskAssignment:dO,addChecklistItem:yO,addTaskActivity:To,addTaskAttachment:vO,approvePoolRequest:bO,approveTask:CO,approveTaskRejection:DO,archiveTask:OO,assignTask:rv,createChecklist:pO,createTask:cO,deleteChecklistItem:wO,deleteTask:nv,deleteTaskAssignment:mO,deleteTaskAttachment:IO,getAllTaskAssignments:fO,getChecklists:_O,getTaskAssignments:He,getTaskAttachments:TO,getTaskById:Me,getTaskComments:EO,getTasks:tv,rejectPoolRequest:SO,rejectTaskApproval:PO,rejectTaskAssignment:hO,rejectTaskRejection:NO,removeTaskFromPool:AO,removeUserFromAllTasks:VO,requestTaskApproval:kO,requestTaskFromPool:RO,subscribeToTasks:aO,unarchiveTask:LO,updateChecklistItem:gO,updateTask:lO,updateTaskStatus:uO},Symbol.toStringTag,{value:"Module"})),xO=n=>p(void 0,null,function*(){try{let e=Q(q(S,"orders"),me("createdAt","desc"),De(500));return n!=null&&n.customerId&&(e=Q(e,le("customerId","==",n.customerId))),n!=null&&n.status&&(e=Q(e,le("status","==",n.status))),(yield J(e)).docs.map(r=>B({id:r.id},r.data()))}catch(e){const t=e instanceof Error?e.message:String(e);if((e==null?void 0:e.code)==="failed-precondition"||t.includes("index"))try{const i=Q(q(S,"orders"),me("createdAt","desc"),De(500));let o=(yield J(i)).docs.map(a=>B({id:a.id},a.data()));return n!=null&&n.customerId&&(o=o.filter(a=>a.customerId===n.customerId)),n!=null&&n.status&&(o=o.filter(a=>a.status===n.status)),o}catch(i){let o=(yield J(Q(q(S,"orders"),De(500)))).docs.map(a=>B({id:a.id},a.data()));return n!=null&&n.customerId&&(o=o.filter(a=>a.customerId===n.customerId)),n!=null&&n.status&&(o=o.filter(a=>a.status===n.status)),o.sort((a,c)=>{var h,m;const u=((h=a.createdAt)==null?void 0:h.toMillis())||0;return(((m=c.createdAt)==null?void 0:m.toMillis())||0)-u}),o}throw e}}),hn=n=>p(void 0,null,function*(){try{const e=yield re(x(S,"orders",n));return e.exists()?B({id:e.id},e.data()):null}catch(e){throw e}}),yL=n=>p(void 0,null,function*(){try{return(yield J(q(S,"orders",n,"items"))).docs.map(t=>B({id:t.id},t.data()))}catch(e){throw e}}),wL=(n,e)=>p(void 0,null,function*(){var t,r;try{const i=yield ge(q(S,"orders"),ce(B({},n),{createdAt:j(),updatedAt:j()}));if(e&&e.length>0){const c=Wn(S),u=q(S,"orders",i.id,"items"),d=[];for(const h of e){const m=x(u);c.set(m,h),d.push(m.id)}yield c.commit(),n.createdBy&&d.length>0&&(yield Promise.all(d.map((h,m)=>oe("CREATE","order_items",h,n.createdBy,null,e[m],{orderId:i.id}).catch(_=>{}))))}const s=ce(B({id:i.id},n),{createdAt:F.now(),updatedAt:F.now()}),o=((t=n.orderNumber)==null?void 0:t.startsWith("PROD-"))||((r=n.order_number)==null?void 0:r.startsWith("PROD-"));if((o||n.deductMaterials===!0)&&e&&e.length>0)try{const{getProductRecipes:c}=yield z(()=>p(void 0,null,function*(){const{getProductRecipes:M}=yield Promise.resolve().then(()=>lL);return{getProductRecipes:M}}),void 0),{getRawMaterialById:u,updateRawMaterial:d,addMaterialTransaction:h}=yield z(()=>p(void 0,null,function*(){const{getRawMaterialById:M,updateRawMaterial:Z,addMaterialTransaction:K}=yield Promise.resolve().then(()=>eL);return{getRawMaterialById:M,updateRawMaterial:Z,addMaterialTransaction:K}}),void 0),m=e.filter(M=>M.product_id||M.productId).map(M=>p(void 0,null,function*(){const Z=M.product_id||M.productId,K=M.quantity||1;return(yield c(Z)).map(T=>({recipe:T,quantity:K,productName:M.product_name||"Ürün",item:M}))})),w=(yield Promise.all(m)).flat(),v=[...new Set(w.map(M=>M.recipe.rawMaterialId).filter(Boolean))].map(M=>u(M)),C=yield Promise.all(v),O=new Map(C.filter(Boolean).map(M=>[M.id,M])),U=[];for(const{recipe:M,quantity:Z,productName:K}of w)if(M.rawMaterialId){const R=O.get(M.rawMaterialId);if(R){const T=M.quantityPerUnit*Z,I=Math.max(0,R.currentStock-T),b=U.find(k=>k.materialId===M.rawMaterialId);b?(b.newStock=Math.max(0,b.newStock-T),b.totalQuantity+=T):U.push({materialId:M.rawMaterialId,newStock:I,totalQuantity:T,reason:`${o?"Üretim":"Sipariş"}: ${n.orderNumber||i.id} - ${K} (${Z} adet)`})}}yield Promise.all(U.map(M=>p(void 0,null,function*(){try{yield d(M.materialId,{currentStock:M.newStock}),yield h({materialId:M.materialId,type:"out",quantity:M.totalQuantity,reason:M.reason,relatedOrderId:i.id,createdBy:n.createdBy},!0)}catch(Z){}})))}catch(c){}if(yield oe("CREATE","orders",i.id,n.createdBy,null,s),n.createdBy)try{const{getUserProfile:c}=yield z(()=>p(void 0,null,function*(){const{getUserProfile:m}=yield Promise.resolve().then(()=>Ie);return{getUserProfile:m}}),void 0),u=yield c(n.createdBy),d=(u==null?void 0:u.fullName)||(u==null?void 0:u.displayName)||(u==null?void 0:u.email),h=u==null?void 0:u.email;yield Xa(i.id,n.createdBy,"created","bu siparişi oluşturdu",{orderNumber:n.orderNumber||n.order_number},d,h)}catch(c){}return s}catch(i){throw i}}),UO=(n,e)=>({draft:["pending","cancelled"],pending:["confirmed","cancelled"],confirmed:["in_production","on_hold","cancelled"],planned:["in_production","pending","on_hold","cancelled"],in_production:["quality_check","completed","on_hold","cancelled"],quality_check:["completed","in_production","on_hold","cancelled"],completed:[],on_hold:["in_production","cancelled"],shipped:["delivered"],delivered:["completed","quality_check","in_production"],cancelled:[]}[n]||[]).includes(e),EL=(n,e,t,r)=>p(void 0,null,function*(){try{const i=yield hn(n);if(!i)throw new Error("Sipariş bulunamadı");if(e.status&&e.status!==i.status&&!r&&!UO(i.status,e.status))throw new Error(`Geçersiz durum geçişi: ${i.status} → ${e.status}. Geçerli geçişler: ${FO(i.status).join(", ")}`);const s=ce(B({},e),{updatedAt:j()});e.status&&e.status!==i.status&&t&&(s.statusUpdatedBy=t,s.statusUpdatedAt=j()),yield X(x(S,"orders",n),s);const o=yield hn(n);if(t&&(yield oe("UPDATE","orders",n,t,i,o)),t)try{const{getUserProfile:a}=yield z(()=>p(void 0,null,function*(){const{getUserProfile:h}=yield Promise.resolve().then(()=>Ie);return{getUserProfile:h}}),void 0),c=yield a(t),u=(c==null?void 0:c.fullName)||(c==null?void 0:c.displayName)||(c==null?void 0:c.email),d=c==null?void 0:c.email;if(e.status&&e.status!==i.status){const h={draft:"Taslak",pending:"Beklemede",confirmed:"Onaylandı",planned:"Planlanan",in_production:"Üretimde",quality_check:"Kalite Kontrol",completed:"Tamamlandı",shipped:"Kargoda",delivered:"Teslim Edildi",on_hold:"Beklemede",cancelled:"İptal"},m=h[i.status]||i.status,_=h[e.status]||e.status;yield Xa(n,t,"status_changed",`bu siparişi ${m} durumundan ${_} durumuna taşıdı`,{oldStatus:i.status,newStatus:e.status},u,d)}else{const h=Object.keys(e).filter(m=>{const _=i[m],w=e[m];return _!==w});h.length>0&&(yield Xa(n,t,"updated","bu siparişi güncelledi",{changedFields:h},u,d))}}catch(a){console.error("Add order activity error:",a)}if(i.createdBy&&i.createdBy!==t)try{const{createNotification:a}=yield z(()=>p(void 0,null,function*(){const{createNotification:m}=yield Promise.resolve().then(()=>xt);return{createNotification:m}}),void 0),{getUserProfile:c}=yield z(()=>p(void 0,null,function*(){const{getUserProfile:m}=yield Promise.resolve().then(()=>Ie);return{getUserProfile:m}}),void 0),u=t?yield c(t):null,d=(u==null?void 0:u.fullName)||(u==null?void 0:u.displayName)||(u==null?void 0:u.email)||"Bir kullanıcı";let h=`"${i.orderNumber||i.order_number||n}" siparişi güncellendi.`;if(e.status&&e.status!==i.status){const m={draft:"Taslak",pending:"Beklemede",confirmed:"Onaylandı",in_production:"Üretimde",quality_check:"Kalite Kontrol",completed:"Tamamlandı",shipped:"Kargoda",delivered:"Teslim Edildi",cancelled:"İptal",on_hold:"Beklemede"},_=m[i.status]||i.status,w=m[e.status]||e.status,E=new Date().toLocaleString("tr-TR",{day:"numeric",month:"long",year:"numeric",hour:"2-digit",minute:"2-digit"});h=`"${i.orderNumber||i.order_number||n}" sipariş numaralı siparişin durumu "${_}" durumundan "${w}" durumuna güncellendi.

İşlem Zamanı: ${E}`}else{const m=new Date().toLocaleString("tr-TR",{day:"numeric",month:"long",year:"numeric",hour:"2-digit",minute:"2-digit"});h=`"${i.orderNumber||i.order_number||n}" sipariş numaralı sipariş güncellendi.

İşlem Zamanı: ${m}`}yield a({userId:i.createdBy,type:"order_updated",title:"Siparişiniz güncellendi",message:`${d} kullanıcısı tarafından ${h}`,read:!1,relatedId:n,metadata:{updatedBy:t,statusChanged:e.status&&e.status!==i.status,oldStatus:i.status,newStatus:e.status||i.status,updatedAt:new Date}})}catch(a){console.error("Sipariş güncelleme bildirimi gönderilemedi:",a)}}catch(i){throw console.error("Update order error:",i),i}}),vL=(n,e)=>p(void 0,null,function*(){try{const t=yield hn(n);if(yield X(x(S,"orders",n),{approvalStatus:"pending",approvalRequestedBy:e,approvalRequestedAt:j(),updatedAt:j()}),e){const r=yield hn(n);yield oe("UPDATE","orders",n,e,t,r,{action:"request_completion",approvalStatus:"pending"})}}catch(t){throw console.error("Request order completion error:",t),t}}),TL=(n,e)=>p(void 0,null,function*(){try{const t=yield hn(n);if(yield X(x(S,"orders",n),{status:"completed",approvalStatus:"approved",approvedBy:e,approvedAt:j(),updatedAt:j()}),e){const r=yield hn(n);yield oe("UPDATE","orders",n,e,t,r,{action:"approve_completion",approvalStatus:"approved"})}}catch(t){throw console.error("Approve order completion error:",t),t}}),IL=(n,e,t)=>p(void 0,null,function*(){try{const r=yield hn(n);if(yield X(x(S,"orders",n),{status:"in_production",approvalStatus:"rejected",rejectedBy:e,rejectedAt:j(),rejectionReason:null,updatedAt:j()}),e){const i=yield hn(n);yield oe("UPDATE","orders",n,e,r,i,{action:"reject_completion",approvalStatus:"rejected",reason:null})}}catch(r){throw console.error("Reject order completion error:",r),r}}),FO=n=>({draft:["pending","cancelled"],pending:["confirmed","cancelled"],confirmed:["in_production","on_hold","cancelled"],planned:["in_production","pending","on_hold","cancelled"],in_production:["quality_check","completed","on_hold","cancelled"],quality_check:["completed","in_production","on_hold","cancelled"],completed:[],on_hold:["in_production","cancelled"],shipped:["delivered"],delivered:["completed","quality_check","in_production"],cancelled:[]})[n]||[],AL=(n,e)=>p(void 0,null,function*(){try{yield hn(n),yield Ge(x(S,"orders",n))}catch(t){throw console.error("Delete order error:",t),t}}),RL=(n={},e)=>{try{const t=q(S,"orders");let i=(()=>{const o=[me("createdAt","desc")];return n!=null&&n.customerId&&o.push(le("customerId","==",n.customerId)),n!=null&&n.status&&o.push(le("status","==",n.status)),Q(t,...o)})();return ur(i,o=>{try{let a=o.docs.map(c=>B({id:c.id},c.data()));n!=null&&n.customerId&&(a=a.filter(c=>c.customerId===n.customerId)),n!=null&&n.status&&(a=a.filter(c=>c.status===n.status)),e(a)}catch(a){console.error("Subscribe to orders error:",a),e([])}},o=>{var a,c,u,d;if((o==null?void 0:o.code)==="unavailable"||(o==null?void 0:o.code)==="not-found"||(a=o==null?void 0:o.message)!=null&&a.includes("404")||(c=o==null?void 0:o.message)!=null&&c.includes("network")||(u=o==null?void 0:o.message)!=null&&u.includes("transport errored")){e([]);return}if((o==null?void 0:o.code)==="failed-precondition"||(d=o==null?void 0:o.message)!=null&&d.includes("index"))try{const h=Q(t,me("createdAt","desc"));return ur(h,_=>{try{let w=_.docs.map(E=>B({id:E.id},E.data()));n!=null&&n.customerId&&(w=w.filter(E=>E.customerId===n.customerId)),n!=null&&n.status&&(w=w.filter(E=>E.status===n.status)),e(w)}catch(w){console.error("Fallback subscribe to orders error:",w),e([])}},_=>{console.error("Fallback orders snapshot error:",_),e([])})}catch(h){console.error("Fallback query setup error:",h),e([])}else e([])})}catch(t){return()=>{}}},Xa=(n,e,t,r,i,s,o)=>p(void 0,null,function*(){try{const a={orderId:n,userId:e,userName:s,userEmail:o,action:t,description:r,metadata:i||{},createdAt:F.now()};return(yield ge(q(S,"orders",n,"activities"),a)).id}catch(a){return""}}),bL=(n,e,t)=>p(void 0,null,function*(){try{const r=ce(B({},e),{createdAt:F.now()}),i=yield ge(q(S,"orders",n,"payments"),r),s=yield hn(n);if(s){const a=(s.paidAmount||0)+e.amount,c=s.price||s.totalAmount||0;let u="partially_paid";a>=c?u="paid":a<=0&&(u="unpaid"),yield X(x(S,"orders",n),{paidAmount:a,paymentStatus:u,updatedAt:j()});try{const{getUserProfile:d}=yield z(()=>p(void 0,null,function*(){const{getUserProfile:w}=yield Promise.resolve().then(()=>Ie);return{getUserProfile:w}}),void 0),h=yield d(t),m=(h==null?void 0:h.fullName)||(h==null?void 0:h.displayName)||(h==null?void 0:h.email),_=h==null?void 0:h.email;yield Xa(n,t,"payment_added",`${e.amount} ${e.currency} tutarında ödeme eklendi (${e.method})`,{amount:e.amount,method:e.method,currency:e.currency},m,_)}catch(d){console.error("Payment activity log error:",d)}}return i.id}catch(r){throw console.error("Add order payment error:",r),r}}),SL=n=>p(void 0,null,function*(){try{return(yield J(Q(q(S,"orders",n,"payments"),me("createdAt","desc")))).docs.map(t=>B({id:t.id},t.data()))}catch(e){throw console.error("Get order payments error:",e),e}}),kL=()=>p(void 0,null,function*(){try{if(!S)throw new Error("Firebase Firestore başlatılamadı. Lütfen .env dosyasında Firebase yapılandırmasını kontrol edin.");try{const n=Q(q(S,"customers"),me("createdAt","desc"),De(500));return(yield J(n)).docs.map(i=>B({id:i.id},i.data())).filter((i,s,o)=>s===o.findIndex(a=>a.id===i.id))}catch(n){const e=Q(q(S,"customers"),De(500));return(yield J(e)).docs.map(s=>B({id:s.id},s.data())).filter((s,o,a)=>o===a.findIndex(c=>c.id===s.id)).sort((s,o)=>{var u,d;const a=((u=s.createdAt)==null?void 0:u.toMillis())||0;return(((d=o.createdAt)==null?void 0:d.toMillis())||0)-a})}}catch(n){throw n}}),Za=n=>p(void 0,null,function*(){try{const e=yield re(x(S,"customers",n));return e.exists()?B({id:e.id},e.data()):null}catch(e){throw e}}),CL=n=>p(void 0,null,function*(){try{const e=yield ge(q(S,"customers"),ce(B({},n),{createdAt:j(),updatedAt:j()})),t=yield Za(e.id);if(!t)throw new Error("Müşteri oluşturulamadı");if(yield oe("CREATE","customers",e.id,n.createdBy,null,t),n.createdBy)try{const{getUserProfile:r}=yield z(()=>p(void 0,null,function*(){const{getUserProfile:a}=yield Promise.resolve().then(()=>Ie);return{getUserProfile:a}}),void 0),i=yield r(n.createdBy),s=(i==null?void 0:i.fullName)||(i==null?void 0:i.displayName)||(i==null?void 0:i.email),o=i==null?void 0:i.email;yield ph(e.id,n.createdBy,"created","bu müşteriyi oluşturdu",{customerName:n.name},s,o)}catch(r){}return t}catch(e){throw e}}),PL=(n,e,t)=>p(void 0,null,function*(){try{const r=yield Za(n);yield X(x(S,"customers",n),ce(B({},e),{updatedAt:j()}));const i=yield Za(n);if(t&&(yield oe("UPDATE","customers",n,t,r,i)),t&&r)try{const{getUserProfile:s}=yield z(()=>p(void 0,null,function*(){const{getUserProfile:d}=yield Promise.resolve().then(()=>Ie);return{getUserProfile:d}}),void 0),o=yield s(t),a=(o==null?void 0:o.fullName)||(o==null?void 0:o.displayName)||(o==null?void 0:o.email),c=o==null?void 0:o.email,u=Object.keys(e).filter(d=>{const h=r[d],m=e[d];return h!==m});u.length>0&&(yield ph(n,t,"updated","bu müşteriyi güncelledi",{changedFields:u},a,c))}catch(s){}}catch(r){throw console.error("Update customer error:",r),r}}),DL=(n,e)=>p(void 0,null,function*(){try{const t=yield Za(n);if(e&&t)try{const{getUserProfile:r}=yield z(()=>p(void 0,null,function*(){const{getUserProfile:a}=yield Promise.resolve().then(()=>Ie);return{getUserProfile:a}}),void 0),i=yield r(e),s=(i==null?void 0:i.fullName)||(i==null?void 0:i.displayName)||(i==null?void 0:i.email),o=i==null?void 0:i.email;yield ph(n,e,"deleted","bu müşteriyi sildi",{customerName:t.name},s,o)}catch(r){}yield Ge(x(S,"customers",n)),e&&(yield oe("DELETE","customers",n,e,t,null))}catch(t){throw t}}),ph=(n,e,t,r,i,s,o)=>p(void 0,null,function*(){try{const a={customerId:n,userId:e,userName:s,userEmail:o,action:t,description:r,metadata:i||{},createdAt:F.now()};return(yield ge(q(S,"customers",n,"activities"),a)).id}catch(a){return""}}),NL=()=>p(void 0,null,function*(){try{const n=Q(q(S,"products"),me("createdAt","desc"),De(500));return(yield J(n)).docs.map(t=>B({id:t.id},t.data()))}catch(n){const e=n instanceof Error?n.message:String(n);if((n==null?void 0:n.code)==="failed-precondition"||e.includes("index")||e.includes("requires an index"))try{const r=Q(q(S,"products"),De(500));let s=(yield J(r)).docs.map(o=>B({id:o.id},o.data()));return s.sort((o,a)=>{var d,h;const c=((d=o.createdAt)==null?void 0:d.toMillis())||0;return(((h=a.createdAt)==null?void 0:h.toMillis())||0)-c}),s}catch(r){return[]}throw n}}),Ws=n=>p(void 0,null,function*(){try{const e=yield re(x(S,"products",n));return e.exists()?B({id:e.id},e.data()):null}catch(e){throw e}}),OL=n=>p(void 0,null,function*(){try{const e=yield ge(q(S,"products"),ce(B({},n),{createdAt:j(),updatedAt:j()})),t=yield Ws(e.id);if(!t)throw new Error("Ürün oluşturulamadı");if(yield oe("CREATE","products",e.id,n.createdBy,null,t),n.createdBy)try{const{getUserProfile:r}=yield z(()=>p(void 0,null,function*(){const{getUserProfile:a}=yield Promise.resolve().then(()=>Ie);return{getUserProfile:a}}),void 0),i=yield r(n.createdBy),s=(i==null?void 0:i.fullName)||(i==null?void 0:i.displayName)||(i==null?void 0:i.email),o=i==null?void 0:i.email;yield gh(e.id,n.createdBy,"created","bu ürünü oluşturdu",{productName:n.name},s,o)}catch(r){}return t}catch(e){throw e}}),LL=(n,e,t)=>p(void 0,null,function*(){try{yield Ws(n),yield X(x(S,"products",n),ce(B({},e),{updatedAt:j()})),yield Ws(n)}catch(r){throw r}}),VL=(n,e)=>p(void 0,null,function*(){try{const t=yield Ws(n);if(e&&t)try{const{getUserProfile:r}=yield z(()=>p(void 0,null,function*(){const{getUserProfile:a}=yield Promise.resolve().then(()=>Ie);return{getUserProfile:a}}),void 0),i=yield r(e),s=(i==null?void 0:i.fullName)||(i==null?void 0:i.displayName)||(i==null?void 0:i.email),o=i==null?void 0:i.email;yield gh(n,e,"deleted","bu ürünü sildi",{productName:t.name},s,o)}catch(r){}yield Ge(x(S,"products",n)),e&&(yield oe("DELETE","products",n,e,t,null))}catch(t){throw t}}),ML=(n,e,t,r,i)=>p(void 0,null,function*(){try{const s={productId:n,userId:e,userName:r,userEmail:i,content:t,createdAt:F.now(),updatedAt:null},o=yield ge(q(S,"products",n,"comments"),s);yield gh(n,e,"commented","yorum ekledi",{commentId:o.id},r,i);try{const a=yield Ws(n);if(a!=null&&a.createdBy&&a.createdBy!==e){const{createNotification:c}=yield z(()=>p(void 0,null,function*(){const{createNotification:u}=yield Promise.resolve().then(()=>xt);return{createNotification:u}}),void 0);yield c({userId:a.createdBy,type:"comment_added",title:"Ürününüze Yorum Eklendi",message:`${r||i||"Bir kullanıcı"} "${a.name}" ürününüze yorum ekledi: ${t.substring(0,100)}${t.length>100?"...":""}`,read:!1,relatedId:n,metadata:{commentId:o.id,commenterId:e,commenterName:r,commenterEmail:i}})}}catch(a){}return B({id:o.id},s)}catch(s){throw s}}),xL=n=>p(void 0,null,function*(){try{return(yield J(Q(q(S,"products",n,"comments"),me("createdAt","desc")))).docs.map(t=>B({id:t.id},t.data()))}catch(e){throw e}}),gh=(n,e,t,r,i,s,o)=>p(void 0,null,function*(){try{const a={productId:n,userId:e,userName:s,userEmail:o,action:t,description:r,metadata:i||{},createdAt:F.now()};return(yield ge(q(S,"products",n,"activities"),a)).id}catch(a){return""}}),UL=n=>p(void 0,null,function*(){try{return(yield J(Q(q(S,"products",n,"activities"),me("createdAt","desc")))).docs.map(t=>B({id:t.id},t.data()))}catch(e){throw e}}),Hs="turkuast_drive_token",Ks="turkuast_drive_token_expiry",BO=()=>p(void 0,null,function*(){if(!(P!=null&&P.currentUser))throw new Error("Kullanıcı giriş yapmamış. Lütfen önce giriş yapın.");if(!P.currentUser.providerData.some(r=>r.providerId==="google.com")){const r=new It;r.addScope("https://www.googleapis.com/auth/drive.file");try{const i=yield Aa(P,r),s=It.credentialFromResult(i);if(!(s!=null&&s.accessToken))throw new Error("Google Drive erişim token'ı alınamadı");return eg(s.accessToken,3600),s.accessToken}catch(i){if(i&&typeof i=="object"&&"code"in i){const s=i.code;if(s==="auth/popup-closed-by-user")throw new Error("Google bağlantısı iptal edildi.");if(s==="auth/unauthorized-domain")throw new Error("Bu domain Google Drive yetkilendirmesi için izinli değil. Firebase Console'da Authentication > Settings > Authorized domains bölümünden domaini ekleyin.")}throw new Error(i instanceof Error?i.message:"Google token alınamadı")}}const t=_h();if(!t){const r=new It;r.addScope("https://www.googleapis.com/auth/drive.file");try{const i=yield Aa(P,r),s=It.credentialFromResult(i);if(!(s!=null&&s.accessToken))throw new Error("Google Drive erişim token'ı alınamadı");return eg(s.accessToken,3600),s.accessToken}catch(i){if(i&&typeof i=="object"&&"code"in i){const s=i.code;if(s==="auth/popup-closed-by-user")throw new Error("Google bağlantısı iptal edildi.");if(s==="auth/unauthorized-domain")throw new Error("Bu domain Google Drive yetkilendirmesi için izinli değil. Firebase Console'da Authentication > Settings > Authorized domains bölümünden domaini ekleyin.")}throw new Error(i instanceof Error?i.message:"Google token alınamadı")}}return t}),eg=(n,e)=>{const t=Date.now()+e*1e3;localStorage.setItem(Hs,n),localStorage.setItem(Ks,t.toString())},_h=()=>{const n=localStorage.getItem(Hs),e=localStorage.getItem(Ks);return!n||!e?null:Date.now()>parseInt(e,10)?(localStorage.removeItem(Hs),localStorage.removeItem(Ks),null):n},iv=()=>p(void 0,null,function*(){const n=_h();return n||(yield BO())}),sv=()=>p(void 0,null,function*(){try{return _h()?!0:P!=null&&P.currentUser?P.currentUser.providerData.some(t=>t.providerId==="google.com"):!1}catch(n){return!1}}),ov=(t,...r)=>p(void 0,[t,...r],function*(n,e={}){var i;try{const s=yield iv(),o=n instanceof File?n:new File([n],e.fileName||"file",{type:n.type}),a={name:e.fileName||o.name,mimeType:o.type||"application/octet-stream"};console.log("[DRIVE DEBUG] Upload options:",{type:e.type,folderId:e.folderId});const c="19VARUkhzzg3JSLNFUPA0yoKFcpJuBna7",u="19VARUkhzzg3JSLNFUPA0yoKFcpJuBna7";if(console.log("[DRIVE DEBUG] Env variables:",{envTaskFolderId:"(boş/undefined)",envReportFolderId:"(boş/undefined)"}),e.folderId)a.parents=[e.folderId],console.log("[DRIVE DEBUG] Using explicit folderId:",e.folderId);else if(e.type==="task"){const k=c;console.log("[DRIVE DEBUG] Task folder ID (env veya default):",k),a.parents=[k],console.log("[DRIVE DEBUG] Set task parents:",a.parents)}else if(e.type==="report"){const k=u;console.log("[DRIVE DEBUG] Report folder ID (env veya default):",k),a.parents=[k],console.log("[DRIVE DEBUG] Set report parents:",a.parents)}console.log("[DRIVE DEBUG] Final metadata:",a),e.metadata&&(a.properties=e.metadata);const d="----WebKitFormBoundary"+Math.random().toString(36).substring(2),h=`\r
--`+d+`\r
`,m=`\r
--`+d+"--",_=`Content-Type: application/json; charset=UTF-8\r
\r
${JSON.stringify(a)}`,w=`Content-Type: ${o.type||"application/octet-stream"}\r
\r
`,E=yield o.arrayBuffer(),v=new Uint8Array(E),C=new TextEncoder,O=[C.encode(h),C.encode(_),C.encode(h),C.encode(w),v,C.encode(m)],U=O.reduce((k,D)=>k+D.length,0),M=new Uint8Array(U);let Z=0;for(const k of O)M.set(k,Z),Z+=k.length;const K=new Blob([M],{type:`multipart/related; boundary=${d}`}),R=yield fetch("https://www.googleapis.com/upload/drive/v3/files?uploadType=multipart&fields=id,webViewLink,webContentLink",{method:"POST",headers:{Authorization:`Bearer ${s}`,"Content-Type":`multipart/related; boundary=${d}`},body:K});if(!R.ok){let D=((i=(yield R.json().catch(()=>({}))).error)==null?void 0:i.message)||"Dosya yükleme başarısız oldu";throw R.status===401?(localStorage.removeItem(Hs),localStorage.removeItem(Ks),D="Yetkilendirme hatası. Lütfen tekrar deneyin."):R.status===403?D="Google Drive izni yok. Lütfen yetkilendirme yapın.":R.status===507&&(D="Google Drive depolama kotası dolmuş."),new Error(D)}const T=yield R.json();if(!T.id)throw new Error("Dosya yükleme başarısız oldu");const I=T.id;if(e.makePublic!==!1)try{yield fetch(`https://www.googleapis.com/drive/v3/files/${I}/permissions`,{method:"POST",headers:{Authorization:`Bearer ${s}`,"Content-Type":"application/json"},body:JSON.stringify({role:"reader",type:"anyone"})})}catch(k){}const b=T.webViewLink||`https://drive.google.com/file/d/${I}/view`;return{success:!0,fileId:I,webViewLink:b,webContentLink:T.webContentLink}}catch(s){let o="Google Drive yüklemesi başarısız oldu";throw s instanceof Error?o=s.message:typeof s=="string"?o=s:s&&typeof s=="object"&&"message"in s&&(o=s.message),o.includes("auth")||o.includes("unauthorized")||o.includes("401")?o="Google Drive yetkilendirmesi gerekli. Lütfen Google ile giriş yapın.":o.includes("quota")||o.includes("storage")||o.includes("507")?o="Google Drive depolama kotası dolmuş. Lütfen depolama alanını kontrol edin.":o.includes("403")&&(o="Google Drive izni yok. Lütfen Google ile giriş yapın."),new Error(o)}}),$O=n=>p(void 0,null,function*(){var e;if(!n||n.trim()==="")throw new Error("Geçerli bir Drive dosya ID'si gerekli");try{const t=yield iv(),r=yield fetch(`https://www.googleapis.com/drive/v3/files/${n}`,{method:"DELETE",headers:{Authorization:`Bearer ${t}`}});if(!r.ok){let s=((e=(yield r.json().catch(()=>({}))).error)==null?void 0:e.message)||"Drive dosyası silinemedi";throw r.status===401&&(localStorage.removeItem(Hs),localStorage.removeItem(Ks),s="Yetkilendirme hatası. Lütfen tekrar deneyin."),new Error(s)}}catch(t){let r="Drive dosyası silinemedi";throw t instanceof Error&&t.message?r=t.message:typeof t=="string"?r=t:t&&typeof t=="object"&&"message"in t&&(r=t.message),new Error(r)}}),Qs=(n,e,t)=>p(void 0,null,function*(){try{if(!Fr)throw new Error("Firebase Storage başlatılmamış");const r=qE(Fr,e),i=yield d1(r,n);return yield h1(i.ref)}catch(r){throw new Error(r instanceof Error?r.message:"Dosya yüklenirken hata oluştu")}}),qO=(n,e,t)=>p(void 0,null,function*(){if(console.log("[DRIVE DEBUG] uploadTaskAttachment başladı",{taskId:e,fileName:n.name,size:n.size}),n.size>10*1024*1024)throw new Error("Dosya boyutu 10MB'dan küçük olmalıdır");const r=Date.now(),i=`tasks/${e}/attachments/${r}_${n.name}`;try{console.log("[DRIVE DEBUG] isDriveAuthorized kontrolü...");const o=yield sv();if(console.log("[DRIVE DEBUG] isDriveAuthorized sonuç:",o),o){console.log("[DRIVE DEBUG] uploadFileToDrive çağrılıyor...");const a=yield ov(n,{type:"task",fileName:n.name,metadata:{taskId:e,path:i}});console.log("[DRIVE DEBUG] uploadFileToDrive başarılı:",a);try{const c=yield Qs(n,i);return{provider:"google_drive",url:a.webViewLink||a.webContentLink||"",webViewLink:a.webViewLink,webContentLink:a.webContentLink,fileId:a.fileId,driveLink:a.webViewLink,fallbackUrl:c}}catch(c){return{provider:"google_drive",url:a.webViewLink||a.webContentLink||"",webViewLink:a.webViewLink,webContentLink:a.webContentLink,fileId:a.fileId,driveLink:a.webViewLink}}}else console.log("[DRIVE DEBUG] Drive yetkilendirmesi yok, Firebase'e fallback")}catch(o){console.error("[DRIVE DEBUG] uploadFileToDrive HATA:",o),o instanceof Error&&(o.message.includes("yetkilendirme")||o.message.includes("auth")||o.message.includes("401")||o.message.includes("403"))&&console.info("Drive yetkilendirmesi yok, Firebase Storage kullanılıyor")}return console.log("[DRIVE DEBUG] Firebase Storage'a yüklüyor..."),{provider:"firebase",url:yield Qs(n,i)}}),av=(n,e,t,r)=>p(void 0,null,function*(){const i=Date.now(),s=`reports/${e}/${i}.pdf`,o=n instanceof File?n:new File([n],`${i}.pdf`,{type:"application/pdf"});try{if(yield sv()){const u=yield ov(o,{type:"report",fileName:o.name,metadata:{reportType:e,reportId:null,path:s}});try{const d=yield Qs(o,s);return{provider:"google_drive",url:u.webViewLink||u.webContentLink||"",webViewLink:u.webViewLink,webContentLink:u.webContentLink,fileId:u.fileId,driveLink:u.webViewLink,fallbackUrl:d}}catch(d){return{provider:"google_drive",url:u.webViewLink||u.webContentLink||"",webViewLink:u.webViewLink,webContentLink:u.webContentLink,fileId:u.fileId,driveLink:u.webViewLink}}}}catch(c){}return{provider:"firebase",url:yield Qs(o,s)}}),jO=(n,e)=>p(void 0,null,function*(){var t;try{if((e==null?void 0:e.provider)==="google_drive"||e!=null&&e.fileId){if(!(e!=null&&e.fileId))throw new Error("Drive dosyasını silmek için fileId gerekli");yield $O(e.fileId);return}if(!Fr)throw new Error("Firebase Storage başlatılmamış");const r=new URL(n),i=decodeURIComponent(((t=r.pathname.split("/o/")[1])==null?void 0:t.split("?")[0])||"");if(!i)throw new Error("Geçersiz dosya URL'i");const s=qE(Fr,i);yield f1(s)}catch(r){throw console.error("Delete file error:",r),new Error(r instanceof Error?r.message:"Dosya silinirken hata oluştu")}}),FL=Object.freeze(Object.defineProperty({__proto__:null,deleteFile:jO,uploadFile:Qs,uploadReportPDF:av,uploadTaskAttachment:qO},Symbol.toStringTag,{value:"Module"})),zO=(n,e,t,r,i)=>p(void 0,null,function*(){var s;try{const o=Date.now(),a=`${n}_${o}.pdf`;let c=null;try{c=yield av(t,n)}catch(m){c=null}const u={reportType:n,title:e,startDate:(i==null?void 0:i.startDate)||null,endDate:(i==null?void 0:i.endDate)||null,fileUrl:(c==null?void 0:c.url)||"",fileName:a,fileSize:t.size,createdBy:r,createdAt:j(),metadata:(i==null?void 0:i.metadata)||null,storageProvider:(c==null?void 0:c.provider)||null,driveFileId:(c==null?void 0:c.fileId)||null,driveLink:(c==null?void 0:c.webViewLink)||(c==null?void 0:c.webContentLink)||null},d=yield ge(q(S,"reports"),u),h=yield re(d);return ce(B({id:d.id},h.data()),{createdAt:((s=h.data())==null?void 0:s.createdAt)||F.now()})}catch(o){throw o}}),GO=n=>p(void 0,null,function*(){var e;try{let t=Q(q(S,"reports"),me("createdAt","desc"));return n!=null&&n.reportType&&(t=Q(t,le("reportType","==",n.reportType))),n!=null&&n.createdBy&&(t=Q(t,le("createdBy","==",n.createdBy))),(yield J(t)).docs.map(i=>B({id:i.id},i.data()))}catch(t){return console.error("Get saved reports error:",t),(t==null?void 0:t.code)==="failed-precondition"||(e=t==null?void 0:t.message)!=null&&e.includes("index")?(console.warn("Firestore index eksik, boş array döndürülüyor. Index oluşturulana kadar raporlar görünmeyecek."),[]):[]}}),BL=Object.freeze(Object.defineProperty({__proto__:null,getSavedReports:GO,saveReport:zO},Symbol.toStringTag,{value:"Module"})),WO=(n=!1)=>p(void 0,null,function*(){var e;try{let t;t=Q(q(S,"rawMaterials"),me("createdAt","desc"),De(500));const r=yield J(t),i=[];for(const s of r.docs){const o=s.data();if(!o||!n&&(o.deleted===!0||o.isDeleted===!0))continue;const a={id:s.id,name:o.name||"",code:o.code||o.sku||null,sku:o.sku||o.code||null,category:o.category||"other",unit:o.unit||"Adet",currentStock:o.currentStock!==void 0?o.currentStock:o.stock||0,stock:o.stock!==void 0?o.stock:o.currentStock||0,minStock:o.minStock!==void 0?o.minStock:o.min_stock||0,min_stock:o.min_stock!==void 0?o.min_stock:o.minStock||0,maxStock:o.maxStock!==void 0?o.maxStock:o.max_stock||null,max_stock:o.max_stock!==void 0?o.max_stock:o.maxStock||null,cost:o.cost!==void 0?o.cost:o.unitPrice||null,unitPrice:o.unitPrice!==void 0?o.unitPrice:o.cost||null,totalPrice:o.totalPrice!==void 0?o.totalPrice:null,brand:o.brand||null,link:o.link||null,purchasedBy:o.purchasedBy||null,location:o.location||null,currency:o.currency||null,currencies:o.currencies||null,notes:o.notes||null,description:o.description||null,createdBy:o.createdBy||null,createdAt:o.createdAt||F.now(),updatedAt:o.updatedAt||F.now()};i.push(a)}return i}catch(t){throw nn(t)?tn(t,{operation:"read",collection:"rawMaterials",userId:(e=P==null?void 0:P.currentUser)==null?void 0:e.uid}):t}}),Br=n=>p(void 0,null,function*(){var e;try{const t=yield re(x(S,"rawMaterials",n));if(!t.exists())return null;const r=t.data();return{id:t.id,name:r.name||"",code:r.code||r.sku||null,sku:r.sku||r.code||null,category:r.category||"other",unit:r.unit||"Adet",currentStock:r.currentStock!==void 0?r.currentStock:r.stock||0,stock:r.stock!==void 0?r.stock:r.currentStock||0,minStock:r.minStock!==void 0?r.minStock:r.min_stock||0,min_stock:r.min_stock!==void 0?r.min_stock:r.minStock||0,maxStock:r.maxStock!==void 0?r.maxStock:r.max_stock||null,max_stock:r.max_stock!==void 0?r.max_stock:r.maxStock||null,cost:r.cost!==void 0?r.cost:r.unitPrice||null,unitPrice:r.unitPrice!==void 0?r.unitPrice:r.cost||null,totalPrice:r.totalPrice!==void 0?r.totalPrice:null,brand:r.brand||null,link:r.link||null,purchasedBy:r.purchasedBy||null,location:r.location||null,currency:r.currency||null,currencies:r.currencies||null,notes:r.notes||null,description:r.description||null,createdBy:r.createdBy||null,createdAt:r.createdAt||F.now(),updatedAt:r.updatedAt||F.now()}}catch(t){throw nn(t)?tn(t,{operation:"read",collection:"rawMaterials",documentId:n,userId:(e=P==null?void 0:P.currentUser)==null?void 0:e.uid}):t}}),HO=n=>p(void 0,null,function*(){var e,t,r;try{const i=(e=P==null?void 0:P.currentUser)==null?void 0:e.uid,s=yield ge(q(S,"rawMaterials"),ce(B({},n),{createdBy:i||n.createdBy||null,createdAt:j(),updatedAt:j()})),o=yield Br(s.id);if(!o)throw new Error("Hammade oluşturulamadı");i&&(yield oe("CREATE","raw_materials",s.id,i,null,o));const a=i||n.createdBy||((t=P==null?void 0:P.currentUser)==null?void 0:t.uid);if(a)try{const{getUserProfile:c}=yield z(()=>p(void 0,null,function*(){const{getUserProfile:m}=yield Promise.resolve().then(()=>Ie);return{getUserProfile:m}}),void 0),u=yield c(a),d=(u==null?void 0:u.fullName)||(u==null?void 0:u.displayName)||(u==null?void 0:u.email),h=u==null?void 0:u.email;yield Io(s.id,a,"created","bu hammadeyi oluşturdu",{materialName:n.name},d,h)}catch(c){}return o}catch(i){throw nn(i)?tn(i,{operation:"create",collection:"rawMaterials",userId:(r=P==null?void 0:P.currentUser)==null?void 0:r.uid,data:n}):i}}),cv=(n,e,t)=>p(void 0,null,function*(){var r,i;try{const s=yield Br(n);yield X(x(S,"rawMaterials",n),ce(B({},e),{updatedAt:j()}));const o=yield Br(n);t&&(yield oe("UPDATE","raw_materials",n,t,s,o));const a=t||((r=P==null?void 0:P.currentUser)==null?void 0:r.uid);if(a&&s)try{const{getUserProfile:c}=yield z(()=>p(void 0,null,function*(){const{getUserProfile:_}=yield Promise.resolve().then(()=>Ie);return{getUserProfile:_}}),void 0),u=yield c(a),d=(u==null?void 0:u.fullName)||(u==null?void 0:u.displayName)||(u==null?void 0:u.email),h=u==null?void 0:u.email,m=Object.keys(e).filter(_=>{const w=s[_],E=e[_];return w!==E});m.length>0&&(yield Io(n,a,"updated","bu hammadeyi güncelledi",{changedFields:m},d,h))}catch(c){}}catch(s){throw nn(s)?tn(s,{operation:"update",collection:"rawMaterials",documentId:n,userId:t||((i=P==null?void 0:P.currentUser)==null?void 0:i.uid),data:e}):s}}),KO=(n,e)=>p(void 0,null,function*(){var t,r;try{const i=yield Br(n),s=(t=P==null?void 0:P.currentUser)==null?void 0:t.uid;if(s&&i)try{const{getUserProfile:o}=yield z(()=>p(void 0,null,function*(){const{getUserProfile:d}=yield Promise.resolve().then(()=>Ie);return{getUserProfile:d}}),void 0),a=yield o(s),c=(a==null?void 0:a.fullName)||(a==null?void 0:a.displayName)||(a==null?void 0:a.email),u=a==null?void 0:a.email;yield Io(n,s,"deleted","bu hammadeyi sildi",{materialName:i.name},c,u)}catch(o){}yield Ge(x(S,"rawMaterials",n))}catch(i){throw nn(i)?tn(i,{operation:"delete",collection:"rawMaterials",documentId:n,userId:(r=P==null?void 0:P.currentUser)==null?void 0:r.uid}):i}}),QO=(n,e=!1)=>p(void 0,null,function*(){try{const t=n.materialId,r=yield ge(q(S,"rawMaterials",t,"transactions"),ce(B({},n),{createdAt:j()}));if(!e){const s=yield Br(t);if(s){const o=n.type==="in"?s.currentStock+n.quantity:s.currentStock-n.quantity;yield cv(t,{currentStock:o})}}const i={id:r.id,materialId:n.materialId,type:n.type,quantity:n.quantity,reason:n.reason,relatedOrderId:n.relatedOrderId||null,createdBy:n.createdBy,createdAt:F.now()};try{const{logAudit:s}=yield z(()=>p(void 0,null,function*(){const{logAudit:o}=yield Promise.resolve().then(()=>WE);return{logAudit:o}}),void 0);yield s("CREATE","material_transactions",r.id,n.createdBy,null,{type:n.type,quantity:n.quantity,reason:n.reason},{materialId:n.materialId,relatedOrderId:n.relatedOrderId||null})}catch(s){}return i}catch(t){throw nn(t)?tn(t,{operation:"create",collection:"rawMaterials/transactions",userId:n.createdBy,data:n}):t}}),YO=n=>p(void 0,null,function*(){var e;try{return(yield J(q(S,"rawMaterials",n,"transactions"))).docs.map(r=>{const i=r.data();return{id:r.id,materialId:i.materialId||"",type:i.type||"out",quantity:i.quantity||0,reason:i.reason||"",relatedOrderId:i.relatedOrderId||null,createdAt:i.createdAt||F.now(),createdBy:i.createdBy||""}})}catch(t){throw nn(t)?tn(t,{operation:"read",collection:"rawMaterials/transactions",userId:(e=P==null?void 0:P.currentUser)==null?void 0:e.uid}):t}}),JO=(n,e,t,r,i)=>p(void 0,null,function*(){try{const s={materialId:n,userId:e,userName:r,userEmail:i,content:t,createdAt:F.now(),updatedAt:null},o=yield ge(q(S,"rawMaterials",n,"comments"),s);yield Io(n,e,"commented","yorum ekledi",{commentId:o.id},r,i);try{const a=yield Br(n);if(a!=null&&a.createdBy&&a.createdBy!==e){const{createNotification:c}=yield z(()=>p(void 0,null,function*(){const{createNotification:u}=yield Promise.resolve().then(()=>xt);return{createNotification:u}}),void 0);yield c({userId:a.createdBy,type:"comment_added",title:"Hammadenize Yorum Eklendi",message:`${r||i||"Bir kullanıcı"} "${a.name}" hammadenize yorum ekledi: ${t.substring(0,100)}${t.length>100?"...":""}`,read:!1,relatedId:n,metadata:{commentId:o.id,commenterId:e,commenterName:r,commenterEmail:i}})}}catch(a){console.error("Send comment notification error:",a)}return B({id:o.id},s)}catch(s){throw console.error("Add material comment error:",s),s}}),XO=n=>p(void 0,null,function*(){try{return(yield J(Q(q(S,"rawMaterials",n,"comments"),me("createdAt","desc")))).docs.map(t=>B({id:t.id},t.data()))}catch(e){throw console.error("Get material comments error:",e),e}}),Io=(n,e,t,r,i,s,o)=>p(void 0,null,function*(){try{const a={materialId:n,userId:e,userName:s,userEmail:o,action:t,description:r,metadata:i||{},createdAt:F.now()};return(yield ge(q(S,"rawMaterials",n,"activities"),a)).id}catch(a){return console.error("Add material activity error:",a),""}}),ZO=n=>p(void 0,null,function*(){try{return(yield J(Q(q(S,"rawMaterials",n,"activities"),me("createdAt","desc")))).docs.map(t=>B({id:t.id},t.data()))}catch(e){throw console.error("Get material activities error:",e),e}}),eL=Object.freeze(Object.defineProperty({__proto__:null,addMaterialActivity:Io,addMaterialComment:JO,addMaterialTransaction:QO,createRawMaterial:HO,deleteRawMaterial:KO,getMaterialActivities:ZO,getMaterialComments:XO,getMaterialTransactions:YO,getRawMaterialById:Br,getRawMaterials:WO,updateRawMaterial:cv},Symbol.toStringTag,{value:"Module"})),Bn="warranty",$L=n=>p(void 0,null,function*(){try{let e=Q(q(S,Bn),me("receivedDate","desc"));return(yield J(e)).docs.map(r=>B({id:r.id},r.data()))}catch(e){throw e}}),Ys=n=>p(void 0,null,function*(){try{const e=yield re(x(S,Bn,n));return e.exists()?B({id:e.id},e.data()):null}catch(e){throw e}}),qL=n=>p(void 0,null,function*(){try{const e=ce(B({},n),{receivedDate:n.receivedDate||F.now(),createdAt:j(),updatedAt:j()}),t=yield ge(q(S,Bn),e),r=yield Ys(t.id);if(!r)throw new Error("Garanti kaydı oluşturulamadı");if(yield oe("CREATE","warranty",t.id,n.createdBy,null,r),n.createdBy)try{const{getUserProfile:i}=yield z(()=>p(void 0,null,function*(){const{getUserProfile:c}=yield Promise.resolve().then(()=>Ie);return{getUserProfile:c}}),void 0),s=yield i(n.createdBy),o=(s==null?void 0:s.fullName)||(s==null?void 0:s.displayName)||(s==null?void 0:s.email),a=s==null?void 0:s.email;yield Fc(t.id,n.createdBy,"created","bu garanti kaydını oluşturdu",{reason:n.reason},o,a)}catch(i){}return r}catch(e){throw e}}),jL=(n,e,t)=>p(void 0,null,function*(){try{const r=yield Ys(n),i=ce(B({},e),{updatedAt:j()});e.status==="completed"&&!(r!=null&&r.completedDate)&&(i.completedDate=j()),e.status==="returned"&&!(r!=null&&r.returnedDate)&&(i.returnedDate=j()),yield X(x(S,Bn,n),i);const s=yield Ys(n);if(t&&(yield oe("UPDATE","warranty",n,t,r,s)),t&&r&&s)try{const{getUserProfile:o}=yield z(()=>p(void 0,null,function*(){const{getUserProfile:h}=yield Promise.resolve().then(()=>Ie);return{getUserProfile:h}}),void 0),a=yield o(t),c=(a==null?void 0:a.fullName)||(a==null?void 0:a.displayName)||(a==null?void 0:a.email),u=a==null?void 0:a.email,d=Object.keys(e).filter(h=>{const m=r[h],_=e[h];return m!==_});d.length>0&&(yield Fc(n,t,"updated","bu garanti kaydını güncelledi",{changedFields:d},c,u))}catch(o){}}catch(r){throw r}}),zL=(n,e)=>p(void 0,null,function*(){try{const t=yield Ys(n);if(e&&t)try{const{getUserProfile:r}=yield z(()=>p(void 0,null,function*(){const{getUserProfile:a}=yield Promise.resolve().then(()=>Ie);return{getUserProfile:a}}),void 0),i=yield r(e),s=(i==null?void 0:i.fullName)||(i==null?void 0:i.displayName)||(i==null?void 0:i.email),o=i==null?void 0:i.email;yield Fc(n,e,"deleted","bu garanti kaydını sildi",{reason:t.reason},s,o)}catch(r){}yield Ge(x(S,Bn,n)),e&&(yield oe("DELETE","warranty",n,e,t,null))}catch(t){throw t}}),GL=(n,e,t,r,i)=>p(void 0,null,function*(){try{const s={warrantyId:n,userId:e,userName:r,userEmail:i,content:t,createdAt:F.now(),updatedAt:null},o=yield ge(q(S,Bn,n,"comments"),s);yield Fc(n,e,"commented","yorum ekledi",{commentId:o.id},r,i);try{const a=yield Ys(n);if(a!=null&&a.createdBy&&a.createdBy!==e){const{createNotification:c}=yield z(()=>p(void 0,null,function*(){const{createNotification:u}=yield Promise.resolve().then(()=>xt);return{createNotification:u}}),void 0);yield c({userId:a.createdBy,type:"comment_added",title:"Garanti Kaydınıza Yorum Eklendi",message:`${r||i||"Bir kullanıcı"} garanti kaydınıza yorum ekledi: ${t.substring(0,100)}${t.length>100?"...":""}`,read:!1,relatedId:n,metadata:{commentId:o.id,commenterId:e,commenterName:r,commenterEmail:i}})}}catch(a){}return B({id:o.id},s)}catch(s){throw s}}),WL=n=>p(void 0,null,function*(){try{return(yield J(Q(q(S,Bn,n,"comments"),me("createdAt","desc")))).docs.map(t=>B({id:t.id},t.data()))}catch(e){throw e}}),Fc=(n,e,t,r,i,s,o)=>p(void 0,null,function*(){try{const a={warrantyId:n,userId:e,userName:s,userEmail:o,action:t,description:r,metadata:i||{},createdAt:F.now()};return(yield ge(q(S,Bn,n,"activities"),a)).id}catch(a){return""}}),HL=n=>p(void 0,null,function*(){try{return(yield J(Q(q(S,Bn,n,"activities"),me("createdAt","desc")))).docs.map(t=>B({id:t.id},t.data()))}catch(e){throw e}}),tL=[{value:"unspecified",label:"Belirtilmedi"},{value:"cash",label:"Nakit"},{value:"credit_card",label:"Kredi Kartı"},{value:"bank_transfer",label:"Banka Transferi"},{value:"eft_havale",label:"EFT / Havale"},{value:"check",label:"Çek"},{value:"other",label:"Diğer"}],nL=n=>{var e;return((e=tL.find(t=>t.value===n))==null?void 0:e.label)||"Belirtilmedi"},Ps=n=>{if(!n)return null;if(n instanceof Date)return Number.isNaN(n.getTime())?null:n;if(n instanceof F)return n.toDate();if(typeof n=="string"){const e=new Date(n);return Number.isNaN(e.getTime())?null:e}if(typeof n=="object"&&n&&"seconds"in n){const e=n.seconds;if(typeof e=="number")return new Date(e*1e3)}return null},lv=(n,e)=>{const t=n.paymentStatus||"unpaid",r=n.hasMaturity||!1,i=Ps(n.maturityDate),s=n.paymentTerms||"",o=Ps(n.dueDate||n.due_date),a=Ps(n.paymentReminderSentAt||n.payment_reminder_sent_at);if(t==="paid")return!1;if(r&&i)return a?!1:i.getTime()<=e.getTime();if(!s&&!o||a)return!1;const c=o||(s?e:null);return c?c.getTime()<=e.getTime():!1},rL=(n,e)=>p(void 0,null,function*(){const t=x(S,"orders",n);return Gy(S,r=>p(void 0,null,function*(){const i=yield r.get(t);if(!i.exists())return!1;const s=B({id:i.id},i.data());if(!lv(s,e))return!1;const o=F.fromDate(e);return r.update(t,{paymentReminderSentAt:o,payment_reminder_sent_at:e.toISOString(),updatedAt:o,updated_at:e.toISOString()}),!0}))}),KL=()=>p(void 0,null,function*(){var s,o,a;const n=new Date,t=(yield xO()).filter(c=>lv(c,n));if(t.length===0)return 0;const r=yield nt();let i=0;for(const c of t){if(!(yield rL(c.id,n)))continue;const d=r.filter(T=>T.id===c.createdBy?!0:(T.role||[]).some(b=>["super_admin","main_admin","manager","team_leader"].includes(b))),h=Array.from(new Map(d.map(T=>[T.id,T])).values());if(h.length===0)continue;const m=c.orderNumber||c.order_number||c.id,_=c.customerName||c.customer_name||"Belirtilmemiş müşteri",E=Ps(c.maturityDate)||Ps((s=c.dueDate)!=null?s:c.due_date),v=nL(c.paymentMethod),C=Number((a=(o=c.totalAmount)!=null?o:c.total_amount)!=null?a:0),O=Number(c.paidAmount||0),U=Math.max(C-O,0),M=C.toLocaleString("tr-TR",{minimumFractionDigits:2,maximumFractionDigits:2}),Z=U.toLocaleString("tr-TR",{minimumFractionDigits:2,maximumFractionDigits:2}),K=E?E.toLocaleDateString("tr-TR",{day:"2-digit",month:"long",year:"numeric"}):"belirtilmedi",R=[`"${m}" numaralı siparişin ödeme vadesi doldu.`,`Müşteri: ${_}`,`Toplam Tutar: ${M} ${(c.currency||"TRY")==="TRY"?"TL":c.currency}`,`Kalan Ödeme: ${Z} ${(c.currency||"TRY")==="TRY"?"TL":c.currency}`,`Yöntem: ${v}`,`Vade Tarihi: ${K}`].join(`
`);yield Promise.allSettled(h.map(T=>Ne({userId:T.id,type:"order_updated",title:"Sipariş ödeme vadesi geldi",message:R,read:!1,relatedId:c.id,metadata:{orderNumber:m,dueDate:E?E.toISOString():null,paymentMethod:c.paymentMethod||null,paymentTerms:c.paymentTerms||null,updatedAt:n.toISOString(),reminderType:"payment_due"}}))),i+=1}return i}),Js="requests",QL=n=>p(void 0,null,function*(){try{const e=ce(B({},n),{status:"pending",createdAt:j(),updatedAt:j()});Object.keys(e).forEach(i=>{e[i]===void 0&&delete e[i]});const r=(yield ge(q(S,Js),e)).id;if(e.assignedTo)try{const i=yield Te(e.createdBy),s=(i==null?void 0:i.fullName)||(i==null?void 0:i.displayName)||(i==null?void 0:i.email)||"Bir kullanıcı",a={leave:"İzin",purchase:"Satın Alma",advance:"Avans",expense:"Gider",other:"Diğer"}[e.type]||e.type;yield Ne({userId:e.assignedTo,type:"system",title:"Yeni Talep",message:`${s} size "${e.title}" adlı bir ${a} talebi gönderdi.`,read:!1,relatedId:r,metadata:{requestType:e.type,requestTitle:e.title,requestDescription:e.description,amount:e.amount||null,currency:e.currency||null,createdBy:e.createdBy,creatorName:s,createdAt:new Date().toISOString()}})}catch(i){console.error("Request notification error:",i)}return ce(B({id:r},e),{createdAt:F.now(),updatedAt:F.now()})}catch(e){throw console.error("Create request error:",e),e}}),YL=n=>p(void 0,null,function*(){try{const e=q(S,Js);let r=(yield J(e)).docs.map(i=>B({id:i.id},i.data()));return n!=null&&n.isSuperAdmin||(r=r.filter(i=>{const s=(n==null?void 0:n.createdBy)&&i.createdBy===n.createdBy,o=(n==null?void 0:n.assignedTo)&&i.assignedTo===n.assignedTo;return s||o})),r.sort((i,s)=>{const o=i.createdAt instanceof F?i.createdAt.toMillis():0;return(s.createdAt instanceof F?s.createdAt.toMillis():0)-o}),r}catch(e){throw console.error("Get requests error:",e),e}}),JL=(n,e,t,r)=>p(void 0,null,function*(){try{const i={status:e,approvedBy:t,approvedAt:j(),updatedAt:j()};e==="rejected"&&r&&(i.rejectionReason=r),yield X(x(S,Js,n),i);try{const o=(yield re(x(S,Js,n))).data();if(o){const a=yield Te(t),c=e==="approved"?"Talep Onaylandı":"Talep Reddedildi",u=`"${o.title}" talebiniz ${(a==null?void 0:a.fullName)||"Yönetici"} tarafından ${e==="approved"?"onaylandı":"reddedildi"}.`;yield Ne({userId:o.createdBy,type:"system",title:c,message:u,read:!1,relatedId:n})}}catch(s){console.error("Notification error:",s)}}catch(i){throw console.error("Update request status error:",i),i}}),XL=n=>p(void 0,null,function*(){try{yield Ge(x(S,Js,n))}catch(e){throw console.error("Delete request error:",e),e}}),bu="customerNotes",ZL=n=>p(void 0,null,function*(){var e;try{const t=Q(q(S,bu),le("customerId","==",n),me("createdAt","desc"));return(yield J(t)).docs.map(i=>B({id:i.id},i.data()))}catch(t){const r=t;if((r==null?void 0:r.code)==="failed-precondition"||(e=r==null?void 0:r.message)!=null&&e.includes("index")){console.warn("Customer notes index bulunamadı, basit query kullanılıyor");try{const i=Q(q(S,bu));let o=(yield J(i)).docs.map(a=>B({id:a.id},a.data()));return o=o.filter(a=>a.customerId===n),o.sort((a,c)=>{var h,m;const u=((h=a.createdAt)==null?void 0:h.toMillis())||0;return(((m=c.createdAt)==null?void 0:m.toMillis())||0)-u}),o}catch(i){return console.error("Fallback query de başarısız:",i),[]}}throw console.error("Get customer notes error:",t),t}}),eV=n=>p(void 0,null,function*(){var e;try{const t=ce(B({},n),{createdAt:j(),updatedAt:j()}),r=yield ge(q(S,bu),t),i=yield re(r);if(!i.exists())throw new Error("Not oluşturulamadı");return yield oe("CREATE","customerNotes",r.id,n.createdBy,null,i.data()),ce(B({id:r.id},i.data()),{createdAt:((e=i.data())==null?void 0:e.createdAt)||F.now()})}catch(t){throw console.error("Create customer note error:",t),t}}),Ao="productCategories",Su=["Taşınabilir Güç Paketleri","Kabin Tipi Güç Paketleri","Araç Tipi Güç Paketleri","Endüstriyel Güç Paketleri","Güneş Enerji Sistemleri"],tV=()=>p(void 0,null,function*(){try{const n=q(S,Ao),t=(yield J(Q(n,me("name","asc")))).docs.map(r=>{var i;return{id:r.id,name:r.data().name||"",isDefault:(i=r.data().isDefault)!=null?i:!1,createdAt:r.data().createdAt||F.now(),createdBy:r.data().createdBy||""}});return t.length>0?t:Su.map((r,i)=>({id:`default_${i}`,name:r,isDefault:!0,createdAt:F.now(),createdBy:"system"}))}catch(n){return Su.map((e,t)=>({id:`default_${t}`,name:e,isDefault:!0,createdAt:F.now(),createdBy:"system"}))}}),nV=(n,e)=>p(void 0,null,function*(){const t=q(S,Ao);return{id:(yield ge(t,{name:n.trim(),isDefault:!1,createdAt:j(),createdBy:e})).id,name:n.trim(),isDefault:!1,createdAt:F.now(),createdBy:e}}),rV=(n,e)=>p(void 0,null,function*(){yield X(x(S,Ao,n),{name:e.trim(),updatedAt:j()})}),iV=n=>p(void 0,null,function*(){yield Ge(x(S,Ao,n))}),sV=n=>p(void 0,null,function*(){const e=q(S,Ao);if((yield J(e)).empty)for(const r of Su)yield ge(e,{name:r,isDefault:!0,createdAt:j(),createdBy:n})}),Ro="recipes",iL=n=>p(void 0,null,function*(){try{const e=q(se,Ro),t=Q(e,le("productId","==",n)),r=yield J(t),i=[];for(const s of r.docs){const o=s.data(),a=B({id:s.id},o);if(a.rawMaterialId)try{const c=yield re(x(se,"raw_materials",a.rawMaterialId));if(c.exists()){const u=c.data();if(u.deleted===!0||u.isDeleted===!0)continue;a.rawMaterial={id:c.id,name:u.name||"",unit:u.unit||"Adet",cost:u.cost||u.unitPrice||0,stock:u.stock||u.currentStock||0}}else continue}catch(c){continue}else continue;i.push(a)}return i}catch(e){throw new Error(e instanceof Error?e.message:"Reçeteler yüklenemedi")}}),sL=(n,e,t)=>p(void 0,null,function*(){try{const r=q(se,Ro),i={productId:n,rawMaterialId:e,quantityPerUnit:t,createdAt:F.now(),updatedAt:F.now()};return(yield ge(r,i)).id}catch(r){throw new Error(r instanceof Error?r.message:"Reçete eklenemedi")}}),oL=(n,e)=>p(void 0,null,function*(){try{const t=x(se,Ro,n);yield X(t,{quantityPerUnit:e,updatedAt:F.now()})}catch(t){throw new Error(t instanceof Error?t.message:"Reçete güncellenemedi")}}),aL=n=>p(void 0,null,function*(){try{const e=x(se,Ro,n);yield Ge(e)}catch(e){throw new Error(e instanceof Error?e.message:"Reçete silinemedi")}}),cL=n=>p(void 0,null,function*(){try{const e=q(se,Ro),t=Q(e,le("rawMaterialId","==",n)),r=yield J(t),i=[];for(const s of r.docs){const o=s.data(),a=B({id:s.id},o);if(a.productId)try{const c=yield re(x(se,"products",a.productId));c.exists()&&(a.product=B({id:c.id},c.data()))}catch(c){}i.push(a)}return i}catch(e){throw new Error(e instanceof Error?e.message:"Reçeteler yüklenemedi")}}),lL=Object.freeze(Object.defineProperty({__proto__:null,addRecipeItem:sL,deleteRecipeItem:aL,getProductRecipes:iL,getRawMaterialRecipes:cL,updateRecipeItem:oL},Symbol.toStringTag,{value:"Module"})),uv="rawMaterialCategories",Ol=[{name:"Kimyasal",value:"chemical"},{name:"Metal",value:"metal"},{name:"Plastik",value:"plastic"},{name:"Elektronik",value:"electronic"},{name:"Ambalaj",value:"packaging"},{name:"Diğer",value:"other"}],uL=()=>p(void 0,null,function*(){try{const n=q(S,uv),t=(yield J(Q(n,me("name","asc")))).docs.map(o=>{var c;const a=o.data();return{id:o.id,name:a.name||"",value:a.value||((c=a.name)==null?void 0:c.toLowerCase().replace(/\s+/g,"_"))||"",createdAt:a.createdAt||F.now(),createdBy:a.createdBy||""}}),r=Ol.map(o=>{const a=t.find(c=>c.value===o.value);return a||{id:`default_${o.value}`,name:o.name,value:o.value,createdAt:F.now(),createdBy:"system"}}),i=t.filter(o=>!Ol.some(a=>a.value===o.value));return[...r,...i].sort((o,a)=>o.name.localeCompare(a.name,"tr"))}catch(n){return Ol.map(e=>({id:`default_${e.value}`,name:e.name,value:e.value,createdAt:F.now(),createdBy:"system"}))}}),oV=(n,e)=>p(void 0,null,function*(){var t;try{if(!n||n.trim().length===0)throw new Error("Kategori adı boş olamaz");const r=e||((t=P==null?void 0:P.currentUser)==null?void 0:t.uid);if(!r)throw new Error("Kullanıcı oturumu bulunamadı");const i=n.toLowerCase().trim().replace(/\s+/g,"_").replace(/[^a-z0-9_]/g,"");if(!i||i.length===0)throw new Error("Geçersiz kategori adı");if((yield uL()).find(d=>d.value===i))throw new Error("Bu kategori zaten mevcut");const a=q(S,uv),c={name:n.trim(),value:i,createdAt:j(),createdBy:r},u=yield ge(a,c);return yield oe("CREATE","rawMaterialCategories",u.id,r,null,c),{id:u.id,name:n.trim(),value:i,createdAt:F.now(),createdBy:r}}catch(r){throw r}}),dv="admin_settings",ku="system",dL={companyName:"Turkuast",supportEmail:"destek@turkuast.com",maintenanceMode:!1,allowNewRegistrations:!0,emailNotifications:!0,notifyTasks:!0,notifyProduction:!0,twoFactorRequired:!1,passwordRotationDays:0,sessionTimeoutMinutes:480,minPasswordLength:8,autoBackup:!0,lastBackupAt:null,lastRestoreRequest:null,lastCleanupRequest:null},hL=()=>p(void 0,null,function*(){try{const n=x(se,dv,ku),e=yield re(n);if(!e.exists()){const t=ce(B({id:ku},dL),{updatedAt:F.now(),updatedBy:"system"});return yield dn(n,t),t}return B({id:e.id},e.data())}catch(n){throw new Error(n instanceof Error?n.message:"Admin ayarları yüklenemedi")}}),aV=(n,e)=>p(void 0,null,function*(){try{const t=x(se,dv,ku),r=yield hL(),i=ce(B(B({},r),n),{updatedAt:F.now(),updatedBy:e});yield dn(t,i,{merge:!0})}catch(t){throw console.error("Error updating admin settings:",t),new Error(t.message||"Admin ayarları güncellenemedi")}}),cV=n=>p(void 0,null,function*(){try{const e=q(S,"departments"),t=Q(e,le("managerId","==",n)),i=(yield J(t)).docs.map(a=>a.id);if(i.length===0)return[];const s=yield nt(),o=[];for(const a of s)if(!(!a||!a.id||!a.email)&&a.deleted!==!0&&a.pendingTeams&&a.pendingTeams.length>0){for(const c of a.pendingTeams)if(i.includes(c)){const u=yield hr(c);u&&o.push({userId:a.id,userName:a.fullName||a.displayName||a.email,userEmail:a.email,teamId:c,teamName:u.name,requestedAt:a.createdAt||F.now(),status:"pending"})}}return o.sort((a,c)=>{var h,m;const u=((h=a.requestedAt)==null?void 0:h.toMillis())||0;return(((m=c.requestedAt)==null?void 0:m.toMillis())||0)-u})}catch(e){throw e}}),lV=()=>p(void 0,null,function*(){try{const n=q(S,"departments"),e=yield J(n),t=new Set;e.docs.forEach(s=>{const o=s.data();o.managerId&&o.managerId.trim()!==""&&t.add(s.id)});const r=yield nt(),i=[];for(const s of r)if(!(!s||!s.id||!s.email)&&s.deleted!==!0&&s.pendingTeams&&s.pendingTeams.length>0){for(const o of s.pendingTeams)if(!t.has(o)){const a=yield hr(o);a&&i.push({userId:s.id,userName:s.fullName||s.displayName||s.email,userEmail:s.email,teamId:o,teamName:a.name,requestedAt:s.createdAt||F.now(),status:"pending"})}}return i.sort((s,o)=>{var u,d;const a=((u=s.requestedAt)==null?void 0:u.toMillis())||0;return(((d=o.requestedAt)==null?void 0:d.toMillis())||0)-a})}catch(n){throw console.error("Get all pending team requests error:",n),n}}),uV=(n,e,t)=>p(void 0,null,function*(){try{const{getUserProfile:r}=yield z(()=>p(void 0,null,function*(){const{getUserProfile:w}=yield Promise.resolve().then(()=>Ie);return{getUserProfile:w}}),void 0),i=yield r(t);if(i){const{canApproveTeamRequest:w}=yield z(()=>p(void 0,null,function*(){const{canApproveTeamRequest:C}=yield import("./vendor-react-Cc15Kqr9.js").then(O=>O.cS);return{canApproveTeamRequest:C}}),[]),E=yield vo();if(!(yield w(i,E)))throw new Error("Ekip talebi onaylama yetkiniz yok.")}const s=x(S,"users",n),o=yield re(s);if(!o.exists())throw new Error("Kullanıcı bulunamadı");const a=o.data(),c=a.pendingTeams||[],u=a.approvedTeams||[],d=a.role||[];if(!c.includes(e)){if(u.includes(e))return;throw new Error("Bu ekip talebi bulunamadı. Talep zaten işlenmiş olabilir.")}const h=c.filter(w=>w!==e),m=[...u,e];let _=[...d];d.includes("viewer")&&!d.includes("personnel")&&(_=d.filter(w=>w!=="viewer"),_.includes("personnel")||_.push("personnel"),_.length===0&&(_=["personnel"])),yield X(s,{pendingTeams:h,approvedTeams:m,role:_,updatedAt:j()});try{const w=yield hr(e),E=yield r(t),v=(E==null?void 0:E.fullName)||(E==null?void 0:E.displayName)||(E==null?void 0:E.email)||"Yönetici";yield Ne({userId:n,type:"system",title:"Ekip talebi onaylandı",message:`${v} "${(w==null?void 0:w.name)||"ekip"}" ekibine katılım talebinizi onayladı.`,read:!1,metadata:{teamId:e,teamName:w==null?void 0:w.name,approvedBy:t}})}catch(w){console.error("Error sending approval notification:",w)}}catch(r){throw console.error("Approve team request error:",r),r}}),dV=(n,e,t,r)=>p(void 0,null,function*(){try{if(r){const{getUserProfile:u}=yield z(()=>p(void 0,null,function*(){const{getUserProfile:h}=yield Promise.resolve().then(()=>Ie);return{getUserProfile:h}}),void 0),d=yield u(r);if(d){const{canApproveTeamRequest:h,getDepartments:m}=yield z(()=>p(void 0,null,function*(){const{canApproveTeamRequest:E,getDepartments:v}=yield import("./vendor-react-Cc15Kqr9.js").then(C=>C.cS);return{canApproveTeamRequest:E,getDepartments:v}}),[]),_=yield m();if(!(yield h(d,_)))throw new Error("Ekip talebi reddetme yetkiniz yok.")}}const i=x(S,"users",n),s=yield re(i);if(!s.exists())throw new Error("Kullanıcı bulunamadı");const a=s.data().pendingTeams||[];if(!a.includes(e))throw new Error("Bu ekip talebi bulunamadı");const c=a.filter(u=>u!==e);yield X(i,{pendingTeams:c,updatedAt:j()});try{const u=yield hr(e);yield Ne({userId:n,type:"system",title:"Ekip talebi reddedildi",message:`"${(u==null?void 0:u.name)||"ekip"}" ekibine katılım talebiniz reddedildi.${t?` Sebep: ${t}`:""}`,read:!1,metadata:{teamId:e,teamName:u==null?void 0:u.name,rejectedReason:t}})}catch(u){console.error("Error sending rejection notification:",u)}}catch(i){throw console.error("Reject team request error:",i),i}}),hV=(n,e,t)=>{try{const r=q(S,"users");return ur(r,s=>p(void 0,null,function*(){try{const o=s.docs.map(u=>B({id:u.id},u.data())).filter(u=>u&&u.id&&u.email&&!u.deleted),a=yield vo();let c=[];if(n){const u=new Set;a.forEach(d=>{d.managerId&&d.managerId.trim()!==""&&u.add(d.id)});for(const d of o)if(d.pendingTeams&&d.pendingTeams.length>0){for(const h of d.pendingTeams)if(!u.has(h)){const m=a.find(_=>_.id===h);m&&c.push({userId:d.id,userName:d.fullName||d.displayName||d.email,userEmail:d.email,teamId:h,teamName:m.name,requestedAt:d.createdAt||F.now(),status:"pending"})}}}else if(e){const d=a.filter(h=>h.managerId===e).map(h=>h.id);if(d.length>0){for(const h of o)if(h.pendingTeams&&h.pendingTeams.length>0){for(const m of h.pendingTeams)if(d.includes(m)){const _=a.find(w=>w.id===m);_&&c.push({userId:h.id,userName:h.fullName||h.displayName||h.email,userEmail:h.email,teamId:m,teamName:_.name,requestedAt:h.createdAt||F.now(),status:"pending"})}}}}c.sort((u,d)=>{var _,w;const h=((_=u.requestedAt)==null?void 0:_.toMillis())||0;return(((w=d.requestedAt)==null?void 0:w.toMillis())||0)-h}),t(c)}catch(o){t([])}}),s=>{t([])})}catch(r){return t([]),()=>{}}},Cu="main",fV=()=>p(void 0,null,function*(){try{const n=yield re(x(S,"companySettings",Cu));if(!n.exists()){const e={companyName:"Turkuast ERP",currency:"₺",taxRate:20,updatedAt:j(),updatedBy:""};return yield dn(x(S,"companySettings",Cu),e),e}return n.data()}catch(n){throw console.error("Get company settings error:",n),n}}),mV=(n,e)=>p(void 0,null,function*(){try{yield X(x(S,"companySettings",Cu),ce(B({},n),{updatedAt:j(),updatedBy:e}))}catch(t){throw console.error("Update company settings error:",t),t}});export{Me as $,q as A,ur as B,nt as C,JE as D,V1 as E,vo as F,E1 as G,F1 as H,J as I,se as J,hL as K,sV as L,tV as M,nV as N,rV as O,iV as P,aV as Q,W1 as R,K1 as S,F as T,j1 as U,z1 as V,XE as W,Ja as X,I1 as Y,T1 as Z,z as _,q1 as a,Wn as a$,Si as a0,Za as a1,hn as a2,Ws as a3,Ys as a4,hr as a5,fO as a6,P as a7,xA as a8,MA as a9,Ge as aA,ge as aB,wL as aC,RL as aD,AL as aE,RO as aF,bO as aG,SO as aH,kO as aI,AO as aJ,LO as aK,DL as aL,ZL as aM,eV as aN,PL as aO,OL as aP,LL as aQ,iL as aR,ML as aS,xL as aT,UL as aU,sL as aV,aL as aW,oL as aX,VL as aY,ov as aZ,Qs as a_,X as aa,j as ab,x as ac,U1 as ad,VA as ae,Q as af,le as ag,_L as ah,GO as ai,KL as aj,He as ak,WO as al,$L as am,aO as an,OO as ao,nv as ap,rv as aq,lO as ar,nO as as,YL as at,EO as au,rO as av,sO as aw,uO as ax,yL as ay,EL as az,O1 as b,SL as b0,vL as b1,TL as b2,IL as b3,bL as b4,uL as b5,oV as b6,HO as b7,cv as b8,YO as b9,qO as bA,IO as bB,pO as bC,cO as bD,mO as bE,CL as bF,nn as bG,fV as bH,mV as bI,hV as bJ,dV as bK,uV as bL,Q0 as bM,Gs as bN,Tu as bO,Ie as bP,Ru as bQ,xt as bR,oO as bS,MO as bT,FL as bU,BL as bV,cL as ba,JO as bb,XO as bc,ZO as bd,Te as be,KO as bf,w1 as bg,v1 as bh,lV as bi,cV as bj,iO as bk,GL as bl,WL as bm,HL as bn,qL as bo,jL as bp,zL as bq,QL as br,XL as bs,JL as bt,_O as bu,TO as bv,yO as bw,gO as bx,wO as by,vO as bz,L1 as c,Vf as d,Mu as e,mL as f,H1 as g,eO as h,X1 as i,dO as j,hO as k,N1 as l,J1 as m,DO as n,M1 as o,NO as p,CO as q,D1 as r,x1 as s,PO as t,fh as u,tv as v,xO as w,kL as x,NL as y,S as z};
