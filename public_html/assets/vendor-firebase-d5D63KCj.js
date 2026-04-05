var xE=Object.defineProperty,UE=Object.defineProperties;var FE=Object.getOwnPropertyDescriptors;var cf=Object.getOwnPropertySymbols,BE=Object.getPrototypeOf,$E=Object.prototype.hasOwnProperty,qE=Object.prototype.propertyIsEnumerable,jE=Reflect.get;var lf=(n,e,t)=>e in n?xE(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t,F=(n,e)=>{for(var t in e||(e={}))$E.call(e,t)&&lf(n,t,e[t]);if(cf)for(var t of cf(e))qE.call(e,t)&&lf(n,t,e[t]);return n},le=(n,e)=>UE(n,FE(e));var wr=(n,e,t)=>jE(BE(n),t,e);var p=(n,e,t)=>new Promise((r,i)=>{var s=c=>{try{a(t.next(c))}catch(u){i(u)}},o=c=>{try{a(t.throw(c))}catch(u){i(u)}},a=c=>c.done?r(c.value):Promise.resolve(c.value).then(s,o);a((t=t.apply(n,e)).next())});const zE="modulepreload",GE=function(n){return"/"+n},uf={},z=function(e,t,r){let i=Promise.resolve();if(t&&t.length>0){document.getElementsByTagName("link");const o=document.querySelector("meta[property=csp-nonce]"),a=(o==null?void 0:o.nonce)||(o==null?void 0:o.getAttribute("nonce"));i=Promise.allSettled(t.map(c=>{if(c=GE(c),c in uf)return;uf[c]=!0;const u=c.endsWith(".css"),d=u?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${c}"]${d}`))return;const h=document.createElement("link");if(h.rel=u?"stylesheet":zE,u||(h.as="script"),h.crossOrigin="",h.href=c,a&&h.setAttribute("nonce",a),document.head.appendChild(h),u)return new Promise((m,_)=>{h.addEventListener("load",m),h.addEventListener("error",()=>_(new Error(`Unable to preload CSS for ${c}`)))})}))}function s(o){const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=o,window.dispatchEvent(a),!a.defaultPrevented)throw o}return i.then(o=>{for(const a of o||[])a.status==="rejected"&&s(a.reason);return e().catch(s)})};var df={};/**
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
 */const zp={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
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
 */const H=function(n,e){if(!n)throw Ri(e)},Ri=function(n){return new Error("Firebase Database ("+zp.SDK_VERSION+") INTERNAL ASSERT FAILED: "+n)};/**
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
 */const Gp=function(n){const e=[];let t=0;for(let r=0;r<n.length;r++){let i=n.charCodeAt(r);i<128?e[t++]=i:i<2048?(e[t++]=i>>6|192,e[t++]=i&63|128):(i&64512)===55296&&r+1<n.length&&(n.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(n.charCodeAt(++r)&1023),e[t++]=i>>18|240,e[t++]=i>>12&63|128,e[t++]=i>>6&63|128,e[t++]=i&63|128):(e[t++]=i>>12|224,e[t++]=i>>6&63|128,e[t++]=i&63|128)}return e},WE=function(n){const e=[];let t=0,r=0;for(;t<n.length;){const i=n[t++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=n[t++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=n[t++],o=n[t++],a=n[t++],c=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(c>>10)),e[r++]=String.fromCharCode(56320+(c&1023))}else{const s=n[t++],o=n[t++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},Tu={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<n.length;i+=3){const s=n[i],o=i+1<n.length,a=o?n[i+1]:0,c=i+2<n.length,u=c?n[i+2]:0,d=s>>2,h=(s&3)<<4|a>>4;let m=(a&15)<<2|u>>6,_=u&63;c||(_=64,o||(m=64)),r.push(t[d],t[h],t[m],t[_])}return r.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(Gp(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):WE(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<n.length;){const s=t[n.charAt(i++)],a=i<n.length?t[n.charAt(i)]:0;++i;const u=i<n.length?t[n.charAt(i)]:64;++i;const h=i<n.length?t[n.charAt(i)]:64;if(++i,s==null||a==null||u==null||h==null)throw new HE;const m=s<<2|a>>4;if(r.push(m),u!==64){const _=a<<4&240|u>>2;if(r.push(_),h!==64){const w=u<<6&192|h;r.push(w)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class HE extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Wp=function(n){const e=Gp(n);return Tu.encodeByteArray(e,!0)},oa=function(n){return Wp(n).replace(/\./g,"")},aa=function(n){try{return Tu.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function KE(n){return Hp(void 0,n)}function Hp(n,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const t=e;return new Date(t.getTime());case Object:n===void 0&&(n={});break;case Array:n=[];break;default:return e}for(const t in e)!e.hasOwnProperty(t)||!QE(t)||(n[t]=Hp(n[t],e[t]));return n}function QE(n){return n!=="__proto__"}/**
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
 */function YE(){if(typeof self!="undefined")return self;if(typeof window!="undefined")return window;if(typeof global!="undefined")return global;throw new Error("Unable to locate global object.")}/**
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
 */const JE=()=>YE().__FIREBASE_DEFAULTS__,XE=()=>{if(typeof process=="undefined"||typeof df=="undefined")return;const n=df.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},ZE=()=>{if(typeof document=="undefined")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch(t){return}const e=n&&aa(n[1]);return e&&JSON.parse(e)},Ga=()=>{try{return JE()||XE()||ZE()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},Kp=n=>{var e,t;return(t=(e=Ga())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[n]},Iu=n=>{const e=Kp(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),r]:[e.substring(0,t),r]},Qp=()=>{var n;return(n=Ga())===null||n===void 0?void 0:n.config},Yp=n=>{var e;return(e=Ga())===null||e===void 0?void 0:e[`_${n}`]};/**
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
 */class Au{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,r)=>{t?this.reject(t):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,r))}}}/**
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
 */function hn(n){try{return(n.startsWith("http://")||n.startsWith("https://")?new URL(n).hostname:n).endsWith(".cloudworkstations.dev")}catch(e){return!1}}function Wa(n){return p(this,null,function*(){return(yield fetch(n,{credentials:"include"})).ok})}/**
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
 */function Ru(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},r=e||"demo-project",i=n.iat||0,s=n.sub||n.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},n);return[oa(JSON.stringify(t)),oa(JSON.stringify(o)),""].join(".")}const ds={};function eT(){const n={prod:[],emulator:[]};for(const e of Object.keys(ds))ds[e]?n.emulator.push(e):n.prod.push(e);return n}function tT(n){let e=document.getElementById(n),t=!1;return e||(e=document.createElement("div"),e.setAttribute("id",n),t=!0),{created:t,element:e}}let hf=!1;function Ha(n,e){if(typeof window=="undefined"||typeof document=="undefined"||!hn(window.location.host)||ds[n]===e||ds[n]||hf)return;ds[n]=e;function t(m){return`__firebase__banner__${m}`}const r="__firebase__banner",s=eT().prod.length>0;function o(){const m=document.getElementById(r);m&&m.remove()}function a(m){m.style.display="flex",m.style.background="#7faaf0",m.style.position="fixed",m.style.bottom="5px",m.style.left="5px",m.style.padding=".5em",m.style.borderRadius="5px",m.style.alignItems="center"}function c(m,_){m.setAttribute("width","24"),m.setAttribute("id",_),m.setAttribute("height","24"),m.setAttribute("viewBox","0 0 24 24"),m.setAttribute("fill","none"),m.style.marginLeft="-6px"}function u(){const m=document.createElement("span");return m.style.cursor="pointer",m.style.marginLeft="16px",m.style.fontSize="24px",m.innerHTML=" &times;",m.onclick=()=>{hf=!0,o()},m}function d(m,_){m.setAttribute("id",_),m.innerText="Learn more",m.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",m.setAttribute("target","__blank"),m.style.paddingLeft="5px",m.style.textDecoration="underline"}function h(){const m=tT(r),_=t("text"),w=document.getElementById(_)||document.createElement("span"),v=t("learnmore"),E=document.getElementById(v)||document.createElement("a"),P=t("preprendIcon"),O=document.getElementById(P)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(m.created){const M=m.element;a(M),d(E,v);const x=u();c(O,P),M.append(O,w,E,x),document.body.appendChild(M)}s?(w.innerText="Preview backend disconnected.",O.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
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
 */function pt(){return typeof navigator!="undefined"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function bu(){return typeof window!="undefined"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(pt())}function nT(){var n;const e=(n=Ga())===null||n===void 0?void 0:n.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch(t){return!1}}function rT(){return typeof navigator!="undefined"&&navigator.userAgent==="Cloudflare-Workers"}function Jp(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function Xp(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function iT(){const n=pt();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function sT(){return zp.NODE_ADMIN===!0}function oT(){return!nT()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Zp(){try{return typeof indexedDB=="object"}catch(n){return!1}}function eg(){return new Promise((n,e)=>{try{let t=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),t||self.indexedDB.deleteDatabase(r),n(!0)},i.onupgradeneeded=()=>{t=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(t){e(t)}})}function aT(){return!(typeof navigator=="undefined"||!navigator.cookieEnabled)}/**
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
 */const cT="FirebaseError";class Bt extends Error{constructor(e,t,r){super(t),this.code=e,this.customData=r,this.name=cT,Object.setPrototypeOf(this,Bt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Fr.prototype.create)}}class Fr{constructor(e,t,r){this.service=e,this.serviceName=t,this.errors=r}create(e,...t){const r=t[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?lT(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new Bt(i,a,r)}}function lT(n,e){return n.replace(uT,(t,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const uT=/\{\$([^}]+)}/g;/**
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
 */function Ss(n){return JSON.parse(n)}function tt(n){return JSON.stringify(n)}/**
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
 */const tg=function(n){let e={},t={},r={},i="";try{const s=n.split(".");e=Ss(aa(s[0])||""),t=Ss(aa(s[1])||""),i=s[2],r=t.d||{},delete t.d}catch(s){}return{header:e,claims:t,data:r,signature:i}},dT=function(n){const e=tg(n),t=e.claims;return!!t&&typeof t=="object"&&t.hasOwnProperty("iat")},hT=function(n){const e=tg(n).claims;return typeof e=="object"&&e.admin===!0};/**
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
 */function xn(n,e){return Object.prototype.hasOwnProperty.call(n,e)}function di(n,e){if(Object.prototype.hasOwnProperty.call(n,e))return n[e]}function bl(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function ca(n,e,t){const r={};for(const i in n)Object.prototype.hasOwnProperty.call(n,i)&&(r[i]=e.call(t,n[i],i,n));return r}function Cn(n,e){if(n===e)return!0;const t=Object.keys(n),r=Object.keys(e);for(const i of t){if(!r.includes(i))return!1;const s=n[i],o=e[i];if(ff(s)&&ff(o)){if(!Cn(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!t.includes(i))return!1;return!0}function ff(n){return n!==null&&typeof n=="object"}/**
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
 */function bi(n){const e=[];for(const[t,r]of Object.entries(n))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function ss(n){const e={};return n.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function os(n){const e=n.indexOf("?");if(!e)return"";const t=n.indexOf("#",e);return n.substring(e,t>0?t:void 0)}/**
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
 */class fT{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,t){t||(t=0);const r=this.W_;if(typeof e=="string")for(let h=0;h<16;h++)r[h]=e.charCodeAt(t)<<24|e.charCodeAt(t+1)<<16|e.charCodeAt(t+2)<<8|e.charCodeAt(t+3),t+=4;else for(let h=0;h<16;h++)r[h]=e[t]<<24|e[t+1]<<16|e[t+2]<<8|e[t+3],t+=4;for(let h=16;h<80;h++){const m=r[h-3]^r[h-8]^r[h-14]^r[h-16];r[h]=(m<<1|m>>>31)&4294967295}let i=this.chain_[0],s=this.chain_[1],o=this.chain_[2],a=this.chain_[3],c=this.chain_[4],u,d;for(let h=0;h<80;h++){h<40?h<20?(u=a^s&(o^a),d=1518500249):(u=s^o^a,d=1859775393):h<60?(u=s&o|a&(s|o),d=2400959708):(u=s^o^a,d=3395469782);const m=(i<<5|i>>>27)+u+c+d+r[h]&4294967295;c=a,a=o,o=(s<<30|s>>>2)&4294967295,s=i,i=m}this.chain_[0]=this.chain_[0]+i&4294967295,this.chain_[1]=this.chain_[1]+s&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+a&4294967295,this.chain_[4]=this.chain_[4]+c&4294967295}update(e,t){if(e==null)return;t===void 0&&(t=e.length);const r=t-this.blockSize;let i=0;const s=this.buf_;let o=this.inbuf_;for(;i<t;){if(o===0)for(;i<=r;)this.compress_(e,i),i+=this.blockSize;if(typeof e=="string"){for(;i<t;)if(s[o]=e.charCodeAt(i),++o,++i,o===this.blockSize){this.compress_(s),o=0;break}}else for(;i<t;)if(s[o]=e[i],++o,++i,o===this.blockSize){this.compress_(s),o=0;break}}this.inbuf_=o,this.total_+=t}digest(){const e=[];let t=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let i=this.blockSize-1;i>=56;i--)this.buf_[i]=t&255,t/=256;this.compress_(this.buf_);let r=0;for(let i=0;i<5;i++)for(let s=24;s>=0;s-=8)e[r]=this.chain_[i]>>s&255,++r;return e}}function mT(n,e){const t=new pT(n,e);return t.subscribe.bind(t)}class pT{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,r){let i;if(e===void 0&&t===void 0&&r===void 0)throw new Error("Missing Observer.");gT(e,["next","error","complete"])?i=e:i={next:e,error:t,complete:r},i.next===void 0&&(i.next=el),i.error===void 0&&(i.error=el),i.complete===void 0&&(i.complete=el);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch(o){}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(r){typeof console!="undefined"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function gT(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function el(){}function _T(n,e){return`${n} failed: ${e} argument `}/**
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
 */const yT=function(n){const e=[];let t=0;for(let r=0;r<n.length;r++){let i=n.charCodeAt(r);if(i>=55296&&i<=56319){const s=i-55296;r++,H(r<n.length,"Surrogate pair missing trail surrogate.");const o=n.charCodeAt(r)-56320;i=65536+(s<<10)+o}i<128?e[t++]=i:i<2048?(e[t++]=i>>6|192,e[t++]=i&63|128):i<65536?(e[t++]=i>>12|224,e[t++]=i>>6&63|128,e[t++]=i&63|128):(e[t++]=i>>18|240,e[t++]=i>>12&63|128,e[t++]=i>>6&63|128,e[t++]=i&63|128)}return e},Ka=function(n){let e=0;for(let t=0;t<n.length;t++){const r=n.charCodeAt(t);r<128?e++:r<2048?e+=2:r>=55296&&r<=56319?(e+=4,t++):e+=3}return e};/**
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
 */const wT=1e3,vT=2,ET=4*60*60*1e3,TT=.5;function mf(n,e=wT,t=vT){const r=e*Math.pow(t,n),i=Math.round(TT*r*(Math.random()-.5)*2);return Math.min(ET,r+i)}/**
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
 */function pe(n){return n&&n._delegate?n._delegate:n}class Vt{constructor(e,t,r){this.name=e,this.instanceFactory=t,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */class IT{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const r=new Au;if(this.instancesDeferred.set(t,r),this.isInitialized(t)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:t});i&&r.resolve(i)}catch(i){}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(RT(e))try{this.getOrInitializeService({instanceIdentifier:vr})}catch(t){}for(const[t,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(t);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch(s){}}}}clearInstance(e=vr){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}delete(){return p(this,null,function*(){const e=Array.from(this.instances.values());yield Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])})}isComponentSet(){return this.component!=null}isInitialized(e=vr){return this.instances.has(e)}getOptions(e=vr){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:t});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(e,t){var r;const i=this.normalizeInstanceIdentifier(t),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,t){const r=this.onInitCallbacks.get(t);if(r)for(const i of r)try{i(e,t)}catch(s){}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:AT(e),options:t}),this.instances.set(e,r),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch(i){}return r||null}normalizeInstanceIdentifier(e=vr){return this.component?this.component.multipleInstances?e:vr:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function AT(n){return n===vr?void 0:n}function RT(n){return n.instantiationMode==="EAGER"}/**
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
 */class bT{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new IT(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var de;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(de||(de={}));const ST={debug:de.DEBUG,verbose:de.VERBOSE,info:de.INFO,warn:de.WARN,error:de.ERROR,silent:de.SILENT},kT=de.INFO,CT={[de.DEBUG]:"log",[de.VERBOSE]:"log",[de.INFO]:"info",[de.WARN]:"warn",[de.ERROR]:"error"},PT=(n,e,...t)=>{if(e<n.logLevel)return;const r=new Date().toISOString(),i=CT[e];if(i)console[i](`[${r}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Hs{constructor(e){this.name=e,this._logLevel=kT,this._logHandler=PT,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in de))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?ST[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,de.DEBUG,...e),this._logHandler(this,de.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,de.VERBOSE,...e),this._logHandler(this,de.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,de.INFO,...e),this._logHandler(this,de.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,de.WARN,...e),this._logHandler(this,de.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,de.ERROR,...e),this._logHandler(this,de.ERROR,...e)}}const NT=(n,e)=>e.some(t=>n instanceof t);let pf,gf;function DT(){return pf||(pf=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function OT(){return gf||(gf=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const ng=new WeakMap,Sl=new WeakMap,rg=new WeakMap,tl=new WeakMap,Su=new WeakMap;function LT(n){const e=new Promise((t,r)=>{const i=()=>{n.removeEventListener("success",s),n.removeEventListener("error",o)},s=()=>{t(Qn(n.result)),i()},o=()=>{r(n.error),i()};n.addEventListener("success",s),n.addEventListener("error",o)});return e.then(t=>{t instanceof IDBCursor&&ng.set(t,n)}).catch(()=>{}),Su.set(e,n),e}function VT(n){if(Sl.has(n))return;const e=new Promise((t,r)=>{const i=()=>{n.removeEventListener("complete",s),n.removeEventListener("error",o),n.removeEventListener("abort",o)},s=()=>{t(),i()},o=()=>{r(n.error||new DOMException("AbortError","AbortError")),i()};n.addEventListener("complete",s),n.addEventListener("error",o),n.addEventListener("abort",o)});Sl.set(n,e)}let kl={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return Sl.get(n);if(e==="objectStoreNames")return n.objectStoreNames||rg.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return Qn(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function MT(n){kl=n(kl)}function xT(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const r=n.call(nl(this),e,...t);return rg.set(r,e.sort?e.sort():[e]),Qn(r)}:OT().includes(n)?function(...e){return n.apply(nl(this),e),Qn(ng.get(this))}:function(...e){return Qn(n.apply(nl(this),e))}}function UT(n){return typeof n=="function"?xT(n):(n instanceof IDBTransaction&&VT(n),NT(n,DT())?new Proxy(n,kl):n)}function Qn(n){if(n instanceof IDBRequest)return LT(n);if(tl.has(n))return tl.get(n);const e=UT(n);return e!==n&&(tl.set(n,e),Su.set(e,n)),e}const nl=n=>Su.get(n);function ig(n,e,{blocked:t,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(n,e),a=Qn(o);return r&&o.addEventListener("upgradeneeded",c=>{r(Qn(o.result),c.oldVersion,c.newVersion,Qn(o.transaction),c)}),t&&o.addEventListener("blocked",c=>t(c.oldVersion,c.newVersion,c)),a.then(c=>{s&&c.addEventListener("close",()=>s()),i&&c.addEventListener("versionchange",u=>i(u.oldVersion,u.newVersion,u))}).catch(()=>{}),a}const FT=["get","getKey","getAll","getAllKeys","count"],BT=["put","add","delete","clear"],rl=new Map;function _f(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(rl.get(e))return rl.get(e);const t=e.replace(/FromIndex$/,""),r=e!==t,i=BT.includes(t);if(!(t in(r?IDBIndex:IDBObjectStore).prototype)||!(i||FT.includes(t)))return;const s=function(o,...a){return p(this,null,function*(){const c=this.transaction(o,i?"readwrite":"readonly");let u=c.store;return r&&(u=u.index(a.shift())),(yield Promise.all([u[t](...a),i&&c.done]))[0]})};return rl.set(e,s),s}MT(n=>le(F({},n),{get:(e,t,r)=>_f(e,t)||n.get(e,t,r),has:(e,t)=>!!_f(e,t)||n.has(e,t)}));/**
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
 */class $T{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(qT(t)){const r=t.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(t=>t).join(" ")}}function qT(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Cl="@firebase/app",yf="0.13.2";/**
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
 */const Pn=new Hs("@firebase/app"),jT="@firebase/app-compat",zT="@firebase/analytics-compat",GT="@firebase/analytics",WT="@firebase/app-check-compat",HT="@firebase/app-check",KT="@firebase/auth",QT="@firebase/auth-compat",YT="@firebase/database",JT="@firebase/data-connect",XT="@firebase/database-compat",ZT="@firebase/functions",eI="@firebase/functions-compat",tI="@firebase/installations",nI="@firebase/installations-compat",rI="@firebase/messaging",iI="@firebase/messaging-compat",sI="@firebase/performance",oI="@firebase/performance-compat",aI="@firebase/remote-config",cI="@firebase/remote-config-compat",lI="@firebase/storage",uI="@firebase/storage-compat",dI="@firebase/firestore",hI="@firebase/ai",fI="@firebase/firestore-compat",mI="firebase",pI="11.10.0";/**
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
 */const Pl="[DEFAULT]",gI={[Cl]:"fire-core",[jT]:"fire-core-compat",[GT]:"fire-analytics",[zT]:"fire-analytics-compat",[HT]:"fire-app-check",[WT]:"fire-app-check-compat",[KT]:"fire-auth",[QT]:"fire-auth-compat",[YT]:"fire-rtdb",[JT]:"fire-data-connect",[XT]:"fire-rtdb-compat",[ZT]:"fire-fn",[eI]:"fire-fn-compat",[tI]:"fire-iid",[nI]:"fire-iid-compat",[rI]:"fire-fcm",[iI]:"fire-fcm-compat",[sI]:"fire-perf",[oI]:"fire-perf-compat",[aI]:"fire-rc",[cI]:"fire-rc-compat",[lI]:"fire-gcs",[uI]:"fire-gcs-compat",[dI]:"fire-fst",[fI]:"fire-fst-compat",[hI]:"fire-vertex","fire-js":"fire-js",[mI]:"fire-js-all"};/**
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
 */const ks=new Map,_I=new Map,Nl=new Map;function wf(n,e){try{n.container.addComponent(e)}catch(t){Pn.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function Ut(n){const e=n.name;if(Nl.has(e))return Pn.debug(`There were multiple attempts to register component ${e}.`),!1;Nl.set(e,n);for(const t of ks.values())wf(t,n);for(const t of _I.values())wf(t,n);return!0}function Un(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function wt(n){return n==null?!1:n.settings!==void 0}/**
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
 */const yI={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Yn=new Fr("app","Firebase",yI);/**
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
 */class wI{constructor(e,t,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Vt("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Yn.create("app-deleted",{appName:this._name})}}/**
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
 */const hr=pI;function sg(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Pl,automaticDataCollectionEnabled:!0},e),i=r.name;if(typeof i!="string"||!i)throw Yn.create("bad-app-name",{appName:String(i)});if(t||(t=Qp()),!t)throw Yn.create("no-options");const s=ks.get(i);if(s){if(Cn(t,s.options)&&Cn(r,s.config))return s;throw Yn.create("duplicate-app",{appName:i})}const o=new bT(i);for(const c of Nl.values())o.addComponent(c);const a=new wI(t,r,o);return ks.set(i,a),a}function Ks(n=Pl){const e=ks.get(n);if(!e&&n===Pl&&Qp())return sg();if(!e)throw Yn.create("no-app",{appName:n});return e}function vf(){return Array.from(ks.values())}function mt(n,e,t){var r;let i=(r=gI[n])!==null&&r!==void 0?r:n;t&&(i+=`-${t}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const a=[`Unable to register library "${i}" with version "${e}":`];s&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Pn.warn(a.join(" "));return}Ut(new Vt(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const vI="firebase-heartbeat-database",EI=1,Cs="firebase-heartbeat-store";let il=null;function og(){return il||(il=ig(vI,EI,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(Cs)}catch(t){console.warn(t)}}}}).catch(n=>{throw Yn.create("idb-open",{originalErrorMessage:n.message})})),il}function TI(n){return p(this,null,function*(){try{const t=(yield og()).transaction(Cs),r=yield t.objectStore(Cs).get(ag(n));return yield t.done,r}catch(e){if(e instanceof Bt)Pn.warn(e.message);else{const t=Yn.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Pn.warn(t.message)}}})}function Ef(n,e){return p(this,null,function*(){try{const r=(yield og()).transaction(Cs,"readwrite");yield r.objectStore(Cs).put(e,ag(n)),yield r.done}catch(t){if(t instanceof Bt)Pn.warn(t.message);else{const r=Yn.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});Pn.warn(r.message)}}})}function ag(n){return`${n.name}!${n.options.appId}`}/**
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
 */const II=1024,AI=30;class RI{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new SI(t),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}triggerHeartbeat(){return p(this,null,function*(){var e,t;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=Tf();if(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=yield this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s))return;if(this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats.length>AI){const o=kI(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(o,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){Pn.warn(r)}})}getHeartbeatsHeader(){return p(this,null,function*(){var e;try{if(this._heartbeatsCache===null&&(yield this._heartbeatsCachePromise),((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=Tf(),{heartbeatsToSend:r,unsentEntries:i}=bI(this._heartbeatsCache.heartbeats),s=oa(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=t,i.length>0?(this._heartbeatsCache.heartbeats=i,yield this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(t){return Pn.warn(t),""}})}}function Tf(){return new Date().toISOString().substring(0,10)}function bI(n,e=II){const t=[];let r=n.slice();for(const i of n){const s=t.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),If(t)>e){s.dates.pop();break}}else if(t.push({agent:i.agent,dates:[i.date]}),If(t)>e){t.pop();break}r=r.slice(1)}return{heartbeatsToSend:t,unsentEntries:r}}class SI{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}runIndexedDBEnvironmentCheck(){return p(this,null,function*(){return Zp()?eg().then(()=>!0).catch(()=>!1):!1})}read(){return p(this,null,function*(){if(yield this._canUseIndexedDBPromise){const t=yield TI(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}})}overwrite(e){return p(this,null,function*(){var t;if(yield this._canUseIndexedDBPromise){const i=yield this.read();return Ef(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return})}add(e){return p(this,null,function*(){var t;if(yield this._canUseIndexedDBPromise){const i=yield this.read();return Ef(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return})}}function If(n){return oa(JSON.stringify({version:2,heartbeats:n})).length}function kI(n){if(n.length===0)return-1;let e=0,t=n[0].date;for(let r=1;r<n.length;r++)n[r].date<t&&(t=n[r].date,e=r);return e}/**
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
 */function CI(n){Ut(new Vt("platform-logger",e=>new $T(e),"PRIVATE")),Ut(new Vt("heartbeat",e=>new RI(e),"PRIVATE")),mt(Cl,yf,n),mt(Cl,yf,"esm2017"),mt("fire-js","")}CI("");var Af=function(){return Af=Object.assign||function(e){for(var t,r=1,i=arguments.length;r<i;r++){t=arguments[r];for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&(e[s]=t[s])}return e},Af.apply(this,arguments)};function ku(n,e){var t={};for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&e.indexOf(r)<0&&(t[r]=n[r]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(n);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(n,r[i])&&(t[r[i]]=n[r[i]]);return t}function JO(n,e,t){if(t||arguments.length===2)for(var r=0,i=e.length,s;r<i;r++)(s||!(r in e))&&(s||(s=Array.prototype.slice.call(e,0,r)),s[r]=e[r]);return n.concat(s||Array.prototype.slice.call(e))}function cg(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const lg=cg,ug=new Fr("auth","Firebase",cg());/**
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
 */const la=new Hs("@firebase/auth");function PI(n,...e){la.logLevel<=de.WARN&&la.warn(`Auth (${hr}): ${n}`,...e)}function Qo(n,...e){la.logLevel<=de.ERROR&&la.error(`Auth (${hr}): ${n}`,...e)}/**
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
 */function Mt(n,...e){throw Pu(n,...e)}function Wt(n,...e){return Pu(n,...e)}function Cu(n,e,t){const r=Object.assign(Object.assign({},lg()),{[e]:t});return new Fr("auth","Firebase",r).create(e,{appName:n.name})}function An(n){return Cu(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function NI(n,e,t){const r=t;if(!(e instanceof r))throw r.name!==e.constructor.name&&Mt(n,"argument-error"),Cu(n,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Pu(n,...e){if(typeof n!="string"){const t=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=n.name),n._errorFactory.create(t,...r)}return ug.create(n,...e)}function te(n,e,...t){if(!n)throw Pu(e,...t)}function En(n){const e="INTERNAL ASSERTION FAILED: "+n;throw Qo(e),new Error(e)}function Nn(n,e){n||En(e)}/**
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
 */function Dl(){var n;return typeof self!="undefined"&&((n=self.location)===null||n===void 0?void 0:n.href)||""}function DI(){return Rf()==="http:"||Rf()==="https:"}function Rf(){var n;return typeof self!="undefined"&&((n=self.location)===null||n===void 0?void 0:n.protocol)||null}/**
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
 */function OI(){return typeof navigator!="undefined"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(DI()||Jp()||"connection"in navigator)?navigator.onLine:!0}function LI(){if(typeof navigator=="undefined")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
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
 */class Qs{constructor(e,t){this.shortDelay=e,this.longDelay=t,Nn(t>e,"Short delay should be less than long delay!"),this.isMobile=bu()||Xp()}get(){return OI()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Nu(n,e){Nn(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
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
 */class dg{static initialize(e,t,r){this.fetchImpl=e,t&&(this.headersImpl=t),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self!="undefined"&&"fetch"in self)return self.fetch;if(typeof globalThis!="undefined"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch!="undefined")return fetch;En("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self!="undefined"&&"Headers"in self)return self.Headers;if(typeof globalThis!="undefined"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers!="undefined")return Headers;En("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self!="undefined"&&"Response"in self)return self.Response;if(typeof globalThis!="undefined"&&globalThis.Response)return globalThis.Response;if(typeof Response!="undefined")return Response;En("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const VI={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const MI=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],xI=new Qs(3e4,6e4);function Xt(n,e){return n.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:n.tenantId}):e}function $t(s,o,a,c){return p(this,arguments,function*(n,e,t,r,i={}){return hg(n,i,()=>p(this,null,function*(){let u={},d={};r&&(e==="GET"?d=r:u={body:JSON.stringify(r)});const h=bi(Object.assign({key:n.config.apiKey},d)).slice(1),m=yield n._getAdditionalHeaders();m["Content-Type"]="application/json",n.languageCode&&(m["X-Firebase-Locale"]=n.languageCode);const _=Object.assign({method:e,headers:m},u);return rT()||(_.referrerPolicy="no-referrer"),n.emulatorConfig&&hn(n.emulatorConfig.host)&&(_.credentials="include"),dg.fetch()(yield fg(n,n.config.apiHost,t,h),_)}))})}function hg(n,e,t){return p(this,null,function*(){n._canInitEmulator=!1;const r=Object.assign(Object.assign({},VI),e);try{const i=new FI(n),s=yield Promise.race([t(),i.promise]);i.clearNetworkTimeout();const o=yield s.json();if("needConfirmation"in o)throw Uo(n,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[c,u]=a.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw Uo(n,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw Uo(n,"email-already-in-use",o);if(c==="USER_DISABLED")throw Uo(n,"user-disabled",o);const d=r[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw Cu(n,d,u);Mt(n,d)}}catch(i){if(i instanceof Bt)throw i;Mt(n,"network-request-failed",{message:String(i)})}})}function Ys(s,o,a,c){return p(this,arguments,function*(n,e,t,r,i={}){const u=yield $t(n,e,t,r,i);return"mfaPendingCredential"in u&&Mt(n,"multi-factor-auth-required",{_serverResponse:u}),u})}function fg(n,e,t,r){return p(this,null,function*(){const i=`${e}${t}?${r}`,s=n,o=s.config.emulator?Nu(n.config,i):`${n.config.apiScheme}://${i}`;return MI.includes(t)&&(yield s._persistenceManagerAvailable,s._getPersistenceType()==="COOKIE")?s._getPersistence()._getFinalTarget(o).toString():o})}function UI(n){switch(n){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class FI{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,r)=>{this.timer=setTimeout(()=>r(Wt(this.auth,"network-request-failed")),xI.get())})}}function Uo(n,e,t){const r={appName:n.name};t.email&&(r.email=t.email),t.phoneNumber&&(r.phoneNumber=t.phoneNumber);const i=Wt(n,e,r);return i.customData._tokenResponse=t,i}function bf(n){return n!==void 0&&n.enterprise!==void 0}class BI{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return UI(t.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}function $I(n,e){return p(this,null,function*(){return $t(n,"GET","/v2/recaptchaConfig",Xt(n,e))})}/**
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
 */function qI(n,e){return p(this,null,function*(){return $t(n,"POST","/v1/accounts:delete",e)})}function ua(n,e){return p(this,null,function*(){return $t(n,"POST","/v1/accounts:lookup",e)})}/**
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
 */function hs(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch(e){}}function mg(n,e=!1){return p(this,null,function*(){const t=pe(n),r=yield t.getIdToken(e),i=Du(r);te(i&&i.exp&&i.auth_time&&i.iat,t.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:hs(sl(i.auth_time)),issuedAtTime:hs(sl(i.iat)),expirationTime:hs(sl(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}})}function sl(n){return Number(n)*1e3}function Du(n){const[e,t,r]=n.split(".");if(e===void 0||t===void 0||r===void 0)return Qo("JWT malformed, contained fewer than 3 sections"),null;try{const i=aa(t);return i?JSON.parse(i):(Qo("Failed to decode base64 JWT payload"),null)}catch(i){return Qo("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function Sf(n){const e=Du(n);return te(e,"internal-error"),te(typeof e.exp!="undefined","internal-error"),te(typeof e.iat!="undefined","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */function hi(n,e,t=!1){return p(this,null,function*(){if(t)return e;try{return yield e}catch(r){throw r instanceof Bt&&jI(r)&&n.auth.currentUser===n&&(yield n.auth.signOut()),r}})}function jI({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
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
 */class zI{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(()=>p(this,null,function*(){yield this.iteration()}),t)}iteration(){return p(this,null,function*(){try{yield this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()})}}/**
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
 */class Ol{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=hs(this.lastLoginAt),this.creationTime=hs(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */function da(n){return p(this,null,function*(){var e;const t=n.auth,r=yield n.getIdToken(),i=yield hi(n,ua(t,{idToken:r}));te(i==null?void 0:i.users.length,t,"internal-error");const s=i.users[0];n._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?gg(s.providerUserInfo):[],a=GI(n.providerData,o),c=n.isAnonymous,u=!(n.email&&s.passwordHash)&&!(a!=null&&a.length),d=c?u:!1,h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new Ol(s.createdAt,s.lastLoginAt),isAnonymous:d};Object.assign(n,h)})}function pg(n){return p(this,null,function*(){const e=pe(n);yield da(e),yield e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)})}function GI(n,e){return[...n.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function gg(n){return n.map(e=>{var{providerId:t}=e,r=ku(e,["providerId"]);return{providerId:t,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */function WI(n,e){return p(this,null,function*(){const t=yield hg(n,{},()=>p(this,null,function*(){const r=bi({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=n.config,o=yield fg(n,i,"/v1/token",`key=${s}`),a=yield n._getAdditionalHeaders();a["Content-Type"]="application/x-www-form-urlencoded";const c={method:"POST",headers:a,body:r};return n.emulatorConfig&&hn(n.emulatorConfig.host)&&(c.credentials="include"),dg.fetch()(o,c)}));return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}})}function HI(n,e){return p(this,null,function*(){return $t(n,"POST","/v2/accounts:revokeToken",Xt(n,e))})}/**
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
 */class ii{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){te(e.idToken,"internal-error"),te(typeof e.idToken!="undefined","internal-error"),te(typeof e.refreshToken!="undefined","internal-error");const t="expiresIn"in e&&typeof e.expiresIn!="undefined"?Number(e.expiresIn):Sf(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){te(e.length!==0,"internal-error");const t=Sf(e);this.updateTokensAndExpiration(e,null,t)}getToken(e,t=!1){return p(this,null,function*(){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(te(this.refreshToken,e,"user-token-expired"),this.refreshToken?(yield this.refresh(e,this.refreshToken),this.accessToken):null)})}clearRefreshToken(){this.refreshToken=null}refresh(e,t){return p(this,null,function*(){const{accessToken:r,refreshToken:i,expiresIn:s}=yield WI(e,t);this.updateTokensAndExpiration(r,i,Number(s))})}updateTokensAndExpiration(e,t,r){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,t){const{refreshToken:r,accessToken:i,expirationTime:s}=t,o=new ii;return r&&(te(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(te(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(te(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new ii,this.toJSON())}_performRefresh(){return En("not implemented")}}/**
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
 */function zn(n,e){te(typeof n=="string"||typeof n=="undefined","internal-error",{appName:e})}class zt{constructor(e){var{uid:t,auth:r,stsTokenManager:i}=e,s=ku(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new zI(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new Ol(s.createdAt||void 0,s.lastLoginAt||void 0)}getIdToken(e){return p(this,null,function*(){const t=yield hi(this,this.stsTokenManager.getToken(this.auth,e));return te(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,yield this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t})}getIdTokenResult(e){return mg(this,e)}reload(){return pg(this)}_assign(e){this!==e&&(te(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new zt(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){te(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}_updateTokensIfNecessary(e,t=!1){return p(this,null,function*(){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),t&&(yield da(this)),yield this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)})}delete(){return p(this,null,function*(){if(wt(this.auth.app))return Promise.reject(An(this.auth));const e=yield this.getIdToken();return yield hi(this,qI(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()})}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var r,i,s,o,a,c,u,d;const h=(r=t.displayName)!==null&&r!==void 0?r:void 0,m=(i=t.email)!==null&&i!==void 0?i:void 0,_=(s=t.phoneNumber)!==null&&s!==void 0?s:void 0,w=(o=t.photoURL)!==null&&o!==void 0?o:void 0,v=(a=t.tenantId)!==null&&a!==void 0?a:void 0,E=(c=t._redirectEventId)!==null&&c!==void 0?c:void 0,P=(u=t.createdAt)!==null&&u!==void 0?u:void 0,O=(d=t.lastLoginAt)!==null&&d!==void 0?d:void 0,{uid:M,emailVerified:x,isAnonymous:Z,providerData:K,stsTokenManager:R}=t;te(M&&R,e,"internal-error");const T=ii.fromJSON(this.name,R);te(typeof M=="string",e,"internal-error"),zn(h,e.name),zn(m,e.name),te(typeof x=="boolean",e,"internal-error"),te(typeof Z=="boolean",e,"internal-error"),zn(_,e.name),zn(w,e.name),zn(v,e.name),zn(E,e.name),zn(P,e.name),zn(O,e.name);const I=new zt({uid:M,auth:e,email:m,emailVerified:x,displayName:h,isAnonymous:Z,photoURL:w,phoneNumber:_,tenantId:v,stsTokenManager:T,createdAt:P,lastLoginAt:O});return K&&Array.isArray(K)&&(I.providerData=K.map(b=>Object.assign({},b))),E&&(I._redirectEventId=E),I}static _fromIdTokenResponse(e,t,r=!1){return p(this,null,function*(){const i=new ii;i.updateFromServerResponse(t);const s=new zt({uid:t.localId,auth:e,stsTokenManager:i,isAnonymous:r});return yield da(s),s})}static _fromGetAccountInfoResponse(e,t,r){return p(this,null,function*(){const i=t.users[0];te(i.localId!==void 0,"internal-error");const s=i.providerUserInfo!==void 0?gg(i.providerUserInfo):[],o=!(i.email&&i.passwordHash)&&!(s!=null&&s.length),a=new ii;a.updateFromIdToken(r);const c=new zt({uid:i.localId,auth:e,stsTokenManager:a,isAnonymous:o}),u={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:s,metadata:new Ol(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(s!=null&&s.length)};return Object.assign(c,u),c})}}/**
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
 */const kf=new Map;function Tn(n){Nn(n instanceof Function,"Expected a class definition");let e=kf.get(n);return e?(Nn(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,kf.set(n,e),e)}/**
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
 */class _g{constructor(){this.type="NONE",this.storage={}}_isAvailable(){return p(this,null,function*(){return!0})}_set(e,t){return p(this,null,function*(){this.storage[e]=t})}_get(e){return p(this,null,function*(){const t=this.storage[e];return t===void 0?null:t})}_remove(e){return p(this,null,function*(){delete this.storage[e]})}_addListener(e,t){}_removeListener(e,t){}}_g.type="NONE";const Ll=_g;/**
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
 */function Yo(n,e,t){return`firebase:${n}:${e}:${t}`}class si{constructor(e,t,r){this.persistence=e,this.auth=t,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=Yo(this.userKey,i.apiKey,s),this.fullPersistenceKey=Yo("persistence",i.apiKey,s),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}getCurrentUser(){return p(this,null,function*(){const e=yield this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const t=yield ua(this.auth,{idToken:e}).catch(()=>{});return t?zt._fromGetAccountInfoResponse(this.auth,t,e):null}return zt._fromJSON(this.auth,e)})}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}setPersistence(e){return p(this,null,function*(){if(this.persistence===e)return;const t=yield this.getCurrentUser();if(yield this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)})}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static create(e,t,r="authUser"){return p(this,null,function*(){if(!t.length)return new si(Tn(Ll),e,r);const i=(yield Promise.all(t.map(u=>p(this,null,function*(){if(yield u._isAvailable())return u})))).filter(u=>u);let s=i[0]||Tn(Ll);const o=Yo(r,e.config.apiKey,e.name);let a=null;for(const u of t)try{const d=yield u._get(o);if(d){let h;if(typeof d=="string"){const m=yield ua(e,{idToken:d}).catch(()=>{});if(!m)break;h=yield zt._fromGetAccountInfoResponse(e,m,d)}else h=zt._fromJSON(e,d);u!==s&&(a=h),s=u;break}}catch(d){}const c=i.filter(u=>u._shouldAllowMigration);return!s._shouldAllowMigration||!c.length?new si(s,e,r):(s=c[0],a&&(yield s._set(o,a.toJSON())),yield Promise.all(t.map(u=>p(this,null,function*(){if(u!==s)try{yield u._remove(o)}catch(d){}}))),new si(s,e,r))})}}/**
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
 */function Cf(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Eg(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(yg(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Ig(e))return"Blackberry";if(Ag(e))return"Webos";if(wg(e))return"Safari";if((e.includes("chrome/")||vg(e))&&!e.includes("edge/"))return"Chrome";if(Tg(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=n.match(t);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function yg(n=pt()){return/firefox\//i.test(n)}function wg(n=pt()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function vg(n=pt()){return/crios\//i.test(n)}function Eg(n=pt()){return/iemobile/i.test(n)}function Tg(n=pt()){return/android/i.test(n)}function Ig(n=pt()){return/blackberry/i.test(n)}function Ag(n=pt()){return/webos/i.test(n)}function Ou(n=pt()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function KI(n=pt()){var e;return Ou(n)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function QI(){return iT()&&document.documentMode===10}function Rg(n=pt()){return Ou(n)||Tg(n)||Ag(n)||Ig(n)||/windows phone/i.test(n)||Eg(n)}/**
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
 */function bg(n,e=[]){let t;switch(n){case"Browser":t=Cf(pt());break;case"Worker":t=`${Cf(pt())}-${n}`;break;default:t=n}const r=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${hr}/${r}`}/**
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
 */class YI{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const r=s=>new Promise((o,a)=>{try{const c=e(s);o(c)}catch(c){a(c)}});r.onAbort=t,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}runMiddleware(e){return p(this,null,function*(){if(this.auth.currentUser===e)return;const t=[];try{for(const r of this.queue)yield r(e),r.onAbort&&t.push(r.onAbort)}catch(r){t.reverse();for(const i of t)try{i()}catch(s){}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}})}}/**
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
 */function JI(t){return p(this,arguments,function*(n,e={}){return $t(n,"GET","/v2/passwordPolicy",Xt(n,e))})}/**
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
 */const XI=6;class ZI{constructor(e){var t,r,i,s;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(t=o.minPasswordLength)!==null&&t!==void 0?t:XI,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(s=e.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,r,i,s,o,a;const c={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,c),this.validatePasswordCharacterOptions(e,c),c.isValid&&(c.isValid=(t=c.meetsMinPasswordLength)!==null&&t!==void 0?t:!0),c.isValid&&(c.isValid=(r=c.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),c.isValid&&(c.isValid=(i=c.containsLowercaseLetter)!==null&&i!==void 0?i:!0),c.isValid&&(c.isValid=(s=c.containsUppercaseLetter)!==null&&s!==void 0?s:!0),c.isValid&&(c.isValid=(o=c.containsNumericCharacter)!==null&&o!==void 0?o:!0),c.isValid&&(c.isValid=(a=c.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),c}validatePasswordLengthOptions(e,t){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(t.meetsMinPasswordLength=e.length>=r),i&&(t.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(t,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,t,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
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
 */class eA{constructor(e,t,r,i){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Pf(this),this.idTokenSubscription=new Pf(this),this.beforeStateQueue=new YI(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=ug,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion,this._persistenceManagerAvailable=new Promise(s=>this._resolvePersistenceManagerAvailable=s)}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=Tn(t)),this._initializationPromise=this.queue(()=>p(this,null,function*(){var r,i,s;if(!this._deleted&&(this.persistenceManager=yield si.create(this,e),(r=this._resolvePersistenceManagerAvailable)===null||r===void 0||r.call(this),!this._deleted)){if(!((i=this._popupRedirectResolver)===null||i===void 0)&&i._shouldInitProactively)try{yield this._popupRedirectResolver._initialize(this)}catch(o){}yield this.initializeCurrentUser(t),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}})),this._initializationPromise}_onStorageEvent(){return p(this,null,function*(){if(this._deleted)return;const e=yield this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),yield this.currentUser.getIdToken();return}yield this._updateCurrentUser(e,!0)}})}initializeCurrentUserFromIdToken(e){return p(this,null,function*(){try{const t=yield ua(this,{idToken:e}),r=yield zt._fromGetAccountInfoResponse(this,t,e);yield this.directlySetCurrentUser(r)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),yield this.directlySetCurrentUser(null)}})}initializeCurrentUser(e){return p(this,null,function*(){var t;if(wt(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(a=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(a,a))}):this.directlySetCurrentUser(null)}const r=yield this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){yield this.getOrInitRedirectPersistenceManager();const o=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,a=i==null?void 0:i._redirectEventId,c=yield this.tryRedirectSignIn(e);(!o||o===a)&&(c!=null&&c.user)&&(i=c.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{yield this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return te(this._popupRedirectResolver,this,"argument-error"),yield this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)})}tryRedirectSignIn(e){return p(this,null,function*(){let t=null;try{t=yield this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch(r){yield this._setRedirectUser(null)}return t})}reloadAndSetCurrentUserOrClear(e){return p(this,null,function*(){try{yield da(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)})}useDeviceLanguage(){this.languageCode=LI()}_delete(){return p(this,null,function*(){this._deleted=!0})}updateCurrentUser(e){return p(this,null,function*(){if(wt(this.app))return Promise.reject(An(this));const t=e?pe(e):null;return t&&te(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))})}_updateCurrentUser(e,t=!1){return p(this,null,function*(){if(!this._deleted)return e&&te(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||(yield this.beforeStateQueue.runMiddleware(e)),this.queue(()=>p(this,null,function*(){yield this.directlySetCurrentUser(e),this.notifyAuthListeners()}))})}signOut(){return p(this,null,function*(){return wt(this.app)?Promise.reject(An(this)):(yield this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&(yield this._setRedirectUser(null)),this._updateCurrentUser(null,!0))})}setPersistence(e){return wt(this.app)?Promise.reject(An(this)):this.queue(()=>p(this,null,function*(){yield this.assertedPersistence.setPersistence(Tn(e))}))}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}validatePassword(e){return p(this,null,function*(){this._getPasswordPolicyInternal()||(yield this._updatePasswordPolicy());const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)})}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}_updatePasswordPolicy(){return p(this,null,function*(){const e=yield JI(this),t=new ZI(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t})}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new Fr("auth","Firebase",e())}onAuthStateChanged(e,t,r){return this.registerStateListener(this.authStateSubscription,e,t,r)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,r){return this.registerStateListener(this.idTokenSubscription,e,t,r)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},t)}})}revokeAccessToken(e){return p(this,null,function*(){if(this.currentUser){const t=yield this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(r.tenantId=this.tenantId),yield HI(this,r)}})}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}_setRedirectUser(e,t){return p(this,null,function*(){const r=yield this.getOrInitRedirectPersistenceManager(t);return e===null?r.removeCurrentUser():r.setCurrentUser(e)})}getOrInitRedirectPersistenceManager(e){return p(this,null,function*(){if(!this.redirectPersistenceManager){const t=e&&Tn(e)||this._popupRedirectResolver;te(t,this,"argument-error"),this.redirectPersistenceManager=yield si.create(this,[Tn(t._redirectPersistence)],"redirectUser"),this.redirectUser=yield this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager})}_redirectUserForId(e){return p(this,null,function*(){var t,r;return this._isInitialized&&(yield this.queue(()=>p(this,null,function*(){}))),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null})}_persistUserIfCurrent(e){return p(this,null,function*(){if(e===this.currentUser)return this.queue(()=>p(this,null,function*(){return this.directlySetCurrentUser(e)}))})}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,r,i){if(this._deleted)return()=>{};const s=typeof t=="function"?t:t.next.bind(t);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(te(a,this,"internal-error"),a.then(()=>{o||s(this.currentUser)}),typeof t=="function"){const c=e.addObserver(t,r,i);return()=>{o=!0,c()}}else{const c=e.addObserver(t);return()=>{o=!0,c()}}}directlySetCurrentUser(e){return p(this,null,function*(){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?yield this.assertedPersistence.setCurrentUser(e):yield this.assertedPersistence.removeCurrentUser()})}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return te(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=bg(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}_getAdditionalHeaders(){return p(this,null,function*(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const r=yield(e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader();r&&(t["X-Firebase-Client"]=r);const i=yield this._getAppCheckToken();return i&&(t["X-Firebase-AppCheck"]=i),t})}_getAppCheckToken(){return p(this,null,function*(){var e;if(wt(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const t=yield(e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken();return t!=null&&t.error&&PI(`Error while retrieving App Check token: ${t.error}`),t==null?void 0:t.token})}}function fn(n){return pe(n)}class Pf{constructor(e){this.auth=e,this.observer=null,this.addObserver=mT(t=>this.observer=t)}get next(){return te(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let Qa={loadJS(){return p(this,null,function*(){throw new Error("Unable to load external scripts")})},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function tA(n){Qa=n}function Sg(n){return Qa.loadJS(n)}function nA(){return Qa.recaptchaEnterpriseScript}function rA(){return Qa.gapiScript}function iA(n){return`__${n}${Math.floor(Math.random()*1e6)}`}class sA{constructor(){this.enterprise=new oA}ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}class oA{ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}const aA="recaptcha-enterprise",kg="NO_RECAPTCHA";class cA{constructor(e){this.type=aA,this.auth=fn(e)}verify(e="verify",t=!1){return p(this,null,function*(){function r(s){return p(this,null,function*(){if(!t){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise((o,a)=>p(this,null,function*(){$I(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(c=>{if(c.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const u=new BI(c);return s.tenantId==null?s._agentRecaptchaConfig=u:s._tenantRecaptchaConfigs[s.tenantId]=u,o(u.siteKey)}}).catch(c=>{a(c)})}))})}function i(s,o,a){const c=window.grecaptcha;bf(c)?c.enterprise.ready(()=>{c.enterprise.execute(s,{action:e}).then(u=>{o(u)}).catch(()=>{o(kg)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new sA().execute("siteKey",{action:"verify"}):new Promise((s,o)=>{r(this.auth).then(a=>{if(!t&&bf(window.grecaptcha))i(a,s,o);else{if(typeof window=="undefined"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let c=nA();c.length!==0&&(c+=a),Sg(c).then(()=>{i(a,s,o)}).catch(u=>{o(u)})}}).catch(a=>{o(a)})})})}}function Nf(n,e,t,r=!1,i=!1){return p(this,null,function*(){const s=new cA(n);let o;if(i)o=kg;else try{o=yield s.verify(t)}catch(c){o=yield s.verify(t,!0)}const a=Object.assign({},e);if(t==="mfaSmsEnrollment"||t==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in a){const c=a.phoneEnrollmentInfo.phoneNumber,u=a.phoneEnrollmentInfo.recaptchaToken;Object.assign(a,{phoneEnrollmentInfo:{phoneNumber:c,recaptchaToken:u,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in a){const c=a.phoneSignInInfo.recaptchaToken;Object.assign(a,{phoneSignInInfo:{recaptchaToken:c,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return a}return r?Object.assign(a,{captchaResp:o}):Object.assign(a,{captchaResponse:o}),Object.assign(a,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(a,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),a})}function ha(n,e,t,r,i){return p(this,null,function*(){var s;if(!((s=n._getRecaptchaConfig())===null||s===void 0)&&s.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const o=yield Nf(n,e,t,t==="getOobCode");return r(n,o)}else return r(n,e).catch(o=>p(this,null,function*(){if(o.code==="auth/missing-recaptcha-token"){console.log(`${t} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const a=yield Nf(n,e,t,t==="getOobCode");return r(n,a)}else return Promise.reject(o)}))})}/**
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
 */function Cg(n,e){const t=Un(n,"auth");if(t.isInitialized()){const i=t.getImmediate(),s=t.getOptions();if(Cn(s,e!=null?e:{}))return i;Mt(i,"already-initialized")}return t.initialize({options:e})}function lA(n,e){const t=(e==null?void 0:e.persistence)||[],r=(Array.isArray(t)?t:[t]).map(Tn);e!=null&&e.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function Pg(n,e,t){const r=fn(n);te(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!1,s=Ng(e),{host:o,port:a}=uA(e),c=a===null?"":`:${a}`,u={url:`${s}//${o}${c}/`},d=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})});if(!r._canInitEmulator){te(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),te(Cn(u,r.config.emulator)&&Cn(d,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=u,r.emulatorConfig=d,r.settings.appVerificationDisabledForTesting=!0,hn(o)?(Wa(`${s}//${o}${c}`),Ha("Auth",!0)):dA()}function Ng(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function uA(n){const e=Ng(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const r=t[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:Df(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:Df(o)}}}function Df(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function dA(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console!="undefined"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window!="undefined"&&typeof document!="undefined"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
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
 */class Ya{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return En("not implemented")}_getIdTokenResponse(e){return En("not implemented")}_linkToIdToken(e,t){return En("not implemented")}_getReauthenticationResolver(e){return En("not implemented")}}/**
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
 */function Dg(n,e){return p(this,null,function*(){return $t(n,"POST","/v1/accounts:resetPassword",Xt(n,e))})}function hA(n,e){return p(this,null,function*(){return $t(n,"POST","/v1/accounts:signUp",e)})}function fA(n,e){return p(this,null,function*(){return $t(n,"POST","/v1/accounts:update",Xt(n,e))})}/**
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
 */function mA(n,e){return p(this,null,function*(){return Ys(n,"POST","/v1/accounts:signInWithPassword",Xt(n,e))})}function Og(n,e){return p(this,null,function*(){return $t(n,"POST","/v1/accounts:sendOobCode",Xt(n,e))})}function pA(n,e){return p(this,null,function*(){return Og(n,e)})}function gA(n,e){return p(this,null,function*(){return Og(n,e)})}/**
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
 */function _A(n,e){return p(this,null,function*(){return Ys(n,"POST","/v1/accounts:signInWithEmailLink",Xt(n,e))})}function yA(n,e){return p(this,null,function*(){return Ys(n,"POST","/v1/accounts:signInWithEmailLink",Xt(n,e))})}/**
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
 */class fi extends Ya{constructor(e,t,r,i=null){super("password",r),this._email=e,this._password=t,this._tenantId=i}static _fromEmailAndPassword(e,t){return new fi(e,t,"password")}static _fromEmailAndCode(e,t,r=null){return new fi(e,t,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;if(t!=null&&t.email&&(t!=null&&t.password)){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}_getIdTokenResponse(e){return p(this,null,function*(){switch(this.signInMethod){case"password":const t={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return ha(e,t,"signInWithPassword",mA);case"emailLink":return _A(e,{email:this._email,oobCode:this._password});default:Mt(e,"internal-error")}})}_linkToIdToken(e,t){return p(this,null,function*(){switch(this.signInMethod){case"password":const r={idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return ha(e,r,"signUpPassword",hA);case"emailLink":return yA(e,{idToken:t,email:this._email,oobCode:this._password});default:Mt(e,"internal-error")}})}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */function oi(n,e){return p(this,null,function*(){return Ys(n,"POST","/v1/accounts:signInWithIdp",Xt(n,e))})}/**
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
 */const wA="http://localhost";class nr extends Ya{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new nr(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):Mt("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=t,s=ku(t,["providerId","signInMethod"]);if(!r||!i)return null;const o=new nr(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const t=this.buildRequest();return oi(e,t)}_linkToIdToken(e,t){const r=this.buildRequest();return r.idToken=t,oi(e,r)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,oi(e,t)}buildRequest(){const e={requestUri:wA,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=bi(t)}return e}}/**
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
 */function vA(n){switch(n){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function EA(n){const e=ss(os(n)).link,t=e?ss(os(e)).deep_link_id:null,r=ss(os(n)).deep_link_id;return(r?ss(os(r)).link:null)||r||t||e||n}class Ja{constructor(e){var t,r,i,s,o,a;const c=ss(os(e)),u=(t=c.apiKey)!==null&&t!==void 0?t:null,d=(r=c.oobCode)!==null&&r!==void 0?r:null,h=vA((i=c.mode)!==null&&i!==void 0?i:null);te(u&&d&&h,"argument-error"),this.apiKey=u,this.operation=h,this.code=d,this.continueUrl=(s=c.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(o=c.lang)!==null&&o!==void 0?o:null,this.tenantId=(a=c.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const t=EA(e);try{return new Ja(t)}catch(r){return null}}}/**
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
 */class Br{constructor(){this.providerId=Br.PROVIDER_ID}static credential(e,t){return fi._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const r=Ja.parseLink(t);return te(r,"argument-error"),fi._fromEmailAndCode(e,r.code,r.tenantId)}}Br.PROVIDER_ID="password";Br.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Br.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class Lu{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Js extends Lu{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class yn extends Js{constructor(){super("facebook.com")}static credential(e){return nr._fromParams({providerId:yn.PROVIDER_ID,signInMethod:yn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return yn.credentialFromTaggedObject(e)}static credentialFromError(e){return yn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return yn.credential(e.oauthAccessToken)}catch(t){return null}}}yn.FACEBOOK_SIGN_IN_METHOD="facebook.com";yn.PROVIDER_ID="facebook.com";/**
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
 */class Tt extends Js{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return nr._fromParams({providerId:Tt.PROVIDER_ID,signInMethod:Tt.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return Tt.credentialFromTaggedObject(e)}static credentialFromError(e){return Tt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:r}=e;if(!t&&!r)return null;try{return Tt.credential(t,r)}catch(i){return null}}}Tt.GOOGLE_SIGN_IN_METHOD="google.com";Tt.PROVIDER_ID="google.com";/**
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
 */class wn extends Js{constructor(){super("github.com")}static credential(e){return nr._fromParams({providerId:wn.PROVIDER_ID,signInMethod:wn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return wn.credentialFromTaggedObject(e)}static credentialFromError(e){return wn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return wn.credential(e.oauthAccessToken)}catch(t){return null}}}wn.GITHUB_SIGN_IN_METHOD="github.com";wn.PROVIDER_ID="github.com";/**
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
 */class vn extends Js{constructor(){super("twitter.com")}static credential(e,t){return nr._fromParams({providerId:vn.PROVIDER_ID,signInMethod:vn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return vn.credentialFromTaggedObject(e)}static credentialFromError(e){return vn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:r}=e;if(!t||!r)return null;try{return vn.credential(t,r)}catch(i){return null}}}vn.TWITTER_SIGN_IN_METHOD="twitter.com";vn.PROVIDER_ID="twitter.com";/**
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
 */function TA(n,e){return p(this,null,function*(){return Ys(n,"POST","/v1/accounts:signUp",Xt(n,e))})}/**
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
 */class kr{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static _fromIdTokenResponse(e,t,r,i=!1){return p(this,null,function*(){const s=yield zt._fromIdTokenResponse(e,r,i),o=Of(r);return new kr({user:s,providerId:o,_tokenResponse:r,operationType:t})})}static _forOperation(e,t,r){return p(this,null,function*(){yield e._updateTokensIfNecessary(r,!0);const i=Of(r);return new kr({user:e,providerId:i,_tokenResponse:r,operationType:t})})}}function Of(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
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
 */class fa extends Bt{constructor(e,t,r,i){var s;super(t.code,t.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,fa.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:t.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,t,r,i){return new fa(e,t,r,i)}}function Lg(n,e,t,r){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?fa._fromErrorAndOperation(n,s,e,r):s})}function IA(n,e,t=!1){return p(this,null,function*(){const r=yield hi(n,e._linkToIdToken(n.auth,yield n.getIdToken()),t);return kr._forOperation(n,"link",r)})}/**
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
 */function AA(n,e,t=!1){return p(this,null,function*(){const{auth:r}=n;if(wt(r.app))return Promise.reject(An(r));const i="reauthenticate";try{const s=yield hi(n,Lg(r,i,e,n),t);te(s.idToken,r,"internal-error");const o=Du(s.idToken);te(o,r,"internal-error");const{sub:a}=o;return te(n.uid===a,r,"user-mismatch"),kr._forOperation(n,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&Mt(r,"user-mismatch"),s}})}/**
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
 */function Vg(n,e,t=!1){return p(this,null,function*(){if(wt(n.app))return Promise.reject(An(n));const r="signIn",i=yield Lg(n,r,e),s=yield kr._fromIdTokenResponse(n,r,i);return t||(yield n._updateCurrentUser(s.user)),s})}function Mg(n,e){return p(this,null,function*(){return Vg(fn(n),e)})}/**
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
 */class Vu{constructor(e,t){this.factorId=e,this.uid=t.mfaEnrollmentId,this.enrollmentTime=new Date(t.enrolledAt).toUTCString(),this.displayName=t.displayName}static _fromServerResponse(e,t){return"phoneInfo"in t?Mu._fromServerResponse(e,t):"totpInfo"in t?xu._fromServerResponse(e,t):Mt(e,"internal-error")}}class Mu extends Vu{constructor(e){super("phone",e),this.phoneNumber=e.phoneInfo}static _fromServerResponse(e,t){return new Mu(t)}}class xu extends Vu{constructor(e){super("totp",e)}static _fromServerResponse(e,t){return new xu(t)}}/**
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
 */function Uu(n){return p(this,null,function*(){const e=fn(n);e._getPasswordPolicyInternal()&&(yield e._updatePasswordPolicy())})}function xg(n,e,t){return p(this,null,function*(){const r=fn(n);yield ha(r,{requestType:"PASSWORD_RESET",email:e,clientType:"CLIENT_TYPE_WEB"},"getOobCode",gA)})}function RA(n,e,t){return p(this,null,function*(){yield Dg(pe(n),{oobCode:e,newPassword:t}).catch(r=>p(this,null,function*(){throw r.code==="auth/password-does-not-meet-requirements"&&Uu(n),r}))})}function bA(n,e){return p(this,null,function*(){yield fA(pe(n),{oobCode:e})})}function SA(n,e){return p(this,null,function*(){const t=pe(n),r=yield Dg(t,{oobCode:e}),i=r.requestType;switch(te(i,t,"internal-error"),i){case"EMAIL_SIGNIN":break;case"VERIFY_AND_CHANGE_EMAIL":te(r.newEmail,t,"internal-error");break;case"REVERT_SECOND_FACTOR_ADDITION":te(r.mfaInfo,t,"internal-error");default:te(r.email,t,"internal-error")}let s=null;return r.mfaInfo&&(s=Vu._fromServerResponse(fn(t),r.mfaInfo)),{data:{email:(r.requestType==="VERIFY_AND_CHANGE_EMAIL"?r.newEmail:r.email)||null,previousEmail:(r.requestType==="VERIFY_AND_CHANGE_EMAIL"?r.email:r.newEmail)||null,multiFactorInfo:s},operation:i}})}function Ug(n,e,t){return p(this,null,function*(){if(wt(n.app))return Promise.reject(An(n));const r=fn(n),o=yield ha(r,{returnSecureToken:!0,email:e,password:t,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",TA).catch(c=>{throw c.code==="auth/password-does-not-meet-requirements"&&Uu(n),c}),a=yield kr._fromIdTokenResponse(r,"signIn",o);return yield r._updateCurrentUser(a.user),a})}function fs(n,e,t){return wt(n.app)?Promise.reject(An(n)):Mg(pe(n),Br.credential(e,t)).catch(r=>p(this,null,function*(){throw r.code==="auth/password-does-not-meet-requirements"&&Uu(n),r}))}function Ps(n,e){return p(this,null,function*(){const t=pe(n),i={requestType:"VERIFY_EMAIL",idToken:yield n.getIdToken()},{email:s}=yield pA(t.auth,i);s!==n.email&&(yield n.reload())})}/**
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
 */function kA(n,e){return p(this,null,function*(){return $t(n,"POST","/v1/accounts:update",e)})}/**
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
 */function ma(r,i){return p(this,arguments,function*(n,{displayName:e,photoURL:t}){if(e===void 0&&t===void 0)return;const s=pe(n),a={idToken:yield s.getIdToken(),displayName:e,photoUrl:t,returnSecureToken:!0},c=yield hi(s,kA(s.auth,a));s.displayName=c.displayName||null,s.photoURL=c.photoUrl||null;const u=s.providerData.find(({providerId:d})=>d==="password");u&&(u.displayName=s.displayName,u.photoURL=s.photoURL),yield s._updateTokensIfNecessary(c)})}function Fg(n,e,t,r){return pe(n).onIdTokenChanged(e,t,r)}function Bg(n,e,t){return pe(n).beforeAuthStateChanged(e,t)}function $g(n,e,t,r){return pe(n).onAuthStateChanged(e,t,r)}function Le(n){return pe(n).signOut()}const pa="__sak";/**
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
 */class qg{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(pa,"1"),this.storage.removeItem(pa),Promise.resolve(!0)):Promise.resolve(!1)}catch(e){return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const CA=1e3,PA=10;class ai extends qg{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Rg(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const r=this.storage.getItem(t),i=this.localCache[t];r!==i&&e(t,i,r)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((o,a,c)=>{this.notifyListeners(o,c)});return}const r=e.key;t?this.detachListener():this.stopPolling();const i=()=>{const o=this.storage.getItem(r);!t&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);QI()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,PA):i()}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:r}),!0)})},CA)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}_set(e,t){return p(this,null,function*(){yield wr(ai.prototype,this,"_set").call(this,e,t),this.localCache[e]=JSON.stringify(t)})}_get(e){return p(this,null,function*(){const t=yield wr(ai.prototype,this,"_get").call(this,e);return this.localCache[e]=JSON.stringify(t),t})}_remove(e){return p(this,null,function*(){yield wr(ai.prototype,this,"_remove").call(this,e),delete this.localCache[e]})}}ai.type="LOCAL";const jg=ai;/**
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
 */class zg extends qg{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}zg.type="SESSION";const Fu=zg;/**
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
 */function NA(n){return Promise.all(n.map(e=>p(this,null,function*(){try{return{fulfilled:!0,value:yield e}}catch(t){return{fulfilled:!1,reason:t}}})))}/**
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
 */class Xa{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(i=>i.isListeningto(e));if(t)return t;const r=new Xa(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}handleEvent(e){return p(this,null,function*(){const t=e,{eventId:r,eventType:i,data:s}=t.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;t.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(o).map(u=>p(this,null,function*(){return u(t.origin,s)})),c=yield NA(a);t.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:c})})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Xa.receivers=[];/**
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
 */function Bu(n="",e=10){let t="";for(let r=0;r<e;r++)t+=Math.floor(Math.random()*10);return n+t}/**
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
 */class DA{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}_send(e,t,r=50){return p(this,null,function*(){const i=typeof MessageChannel!="undefined"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((a,c)=>{const u=Bu("",20);i.port1.start();const d=setTimeout(()=>{c(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(h){const m=h;if(m.data.eventId===u)switch(m.data.status){case"ack":clearTimeout(d),s=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(m.data.response);break;default:clearTimeout(d),clearTimeout(s),c(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:t},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})})}}/**
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
 */function on(){return window}function OA(n){on().location.href=n}/**
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
 */function Gg(){return typeof on().WorkerGlobalScope!="undefined"&&typeof on().importScripts=="function"}function LA(){return p(this,null,function*(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(yield navigator.serviceWorker.ready).active}catch(n){return null}})}function VA(){var n;return((n=navigator==null?void 0:navigator.serviceWorker)===null||n===void 0?void 0:n.controller)||null}function MA(){return Gg()?self:null}/**
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
 */const Wg="firebaseLocalStorageDb",xA=1,ga="firebaseLocalStorage",Hg="fbase_key";class Xs{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function Za(n,e){return n.transaction([ga],e?"readwrite":"readonly").objectStore(ga)}function UA(){const n=indexedDB.deleteDatabase(Wg);return new Xs(n).toPromise()}function Vl(){const n=indexedDB.open(Wg,xA);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const r=n.result;try{r.createObjectStore(ga,{keyPath:Hg})}catch(i){t(i)}}),n.addEventListener("success",()=>p(this,null,function*(){const r=n.result;r.objectStoreNames.contains(ga)?e(r):(r.close(),yield UA(),e(yield Vl()))}))})}function Lf(n,e,t){return p(this,null,function*(){const r=Za(n,!0).put({[Hg]:e,value:t});return new Xs(r).toPromise()})}function FA(n,e){return p(this,null,function*(){const t=Za(n,!1).get(e),r=yield new Xs(t).toPromise();return r===void 0?null:r.value})}function Vf(n,e){const t=Za(n,!0).delete(e);return new Xs(t).toPromise()}const BA=800,$A=3;class Kg{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}_openDb(){return p(this,null,function*(){return this.db?this.db:(this.db=yield Vl(),this.db)})}_withRetries(e){return p(this,null,function*(){let t=0;for(;;)try{const r=yield this._openDb();return yield e(r)}catch(r){if(t++>$A)throw r;this.db&&(this.db.close(),this.db=void 0)}})}initializeServiceWorkerMessaging(){return p(this,null,function*(){return Gg()?this.initializeReceiver():this.initializeSender()})}initializeReceiver(){return p(this,null,function*(){this.receiver=Xa._getInstance(MA()),this.receiver._subscribe("keyChanged",(e,t)=>p(this,null,function*(){return{keyProcessed:(yield this._poll()).includes(t.key)}})),this.receiver._subscribe("ping",(e,t)=>p(this,null,function*(){return["keyChanged"]}))})}initializeSender(){return p(this,null,function*(){var e,t;if(this.activeServiceWorker=yield LA(),!this.activeServiceWorker)return;this.sender=new DA(this.activeServiceWorker);const r=yield this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((t=r[0])===null||t===void 0)&&t.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)})}notifyServiceWorker(e){return p(this,null,function*(){if(!(!this.sender||!this.activeServiceWorker||VA()!==this.activeServiceWorker))try{yield this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch(t){}})}_isAvailable(){return p(this,null,function*(){try{if(!indexedDB)return!1;const e=yield Vl();return yield Lf(e,pa,"1"),yield Vf(e,pa),!0}catch(e){}return!1})}_withPendingWrite(e){return p(this,null,function*(){this.pendingWrites++;try{yield e()}finally{this.pendingWrites--}})}_set(e,t){return p(this,null,function*(){return this._withPendingWrite(()=>p(this,null,function*(){return yield this._withRetries(r=>Lf(r,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)}))})}_get(e){return p(this,null,function*(){const t=yield this._withRetries(r=>FA(r,e));return this.localCache[e]=t,t})}_remove(e){return p(this,null,function*(){return this._withPendingWrite(()=>p(this,null,function*(){return yield this._withRetries(t=>Vf(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)}))})}_poll(){return p(this,null,function*(){const e=yield this._withRetries(i=>{const s=Za(i,!1).getAll();return new Xs(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),t.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),t.push(i));return t})}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>p(this,null,function*(){return this._poll()}),BA)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Kg.type="LOCAL";const Qg=Kg;new Qs(3e4,6e4);/**
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
 */function Yg(n,e){return e?Tn(e):(te(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
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
 */class $u extends Ya{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return oi(e,this._buildIdpRequest())}_linkToIdToken(e,t){return oi(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return oi(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function qA(n){return Vg(n.auth,new $u(n),n.bypassAuthState)}function jA(n){const{auth:e,user:t}=n;return te(t,e,"internal-error"),AA(t,new $u(n),n.bypassAuthState)}function zA(n){return p(this,null,function*(){const{auth:e,user:t}=n;return te(t,e,"internal-error"),IA(t,new $u(n),n.bypassAuthState)})}/**
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
 */class Jg{constructor(e,t,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise((e,t)=>p(this,null,function*(){this.pendingPromise={resolve:e,reject:t};try{this.eventManager=yield this.resolver._initialize(this.auth),yield this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}}))}onAuthEvent(e){return p(this,null,function*(){const{urlResponse:t,sessionId:r,postBody:i,tenantId:s,error:o,type:a}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:t,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(yield this.getIdpTask(a)(c))}catch(u){this.reject(u)}})}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return qA;case"linkViaPopup":case"linkViaRedirect":return zA;case"reauthViaPopup":case"reauthViaRedirect":return jA;default:Mt(this.auth,"internal-error")}}resolve(e){Nn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Nn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const GA=new Qs(2e3,1e4);function _a(n,e,t){return p(this,null,function*(){if(wt(n.app))return Promise.reject(Wt(n,"operation-not-supported-in-this-environment"));const r=fn(n);NI(n,e,Lu);const i=Yg(r,t);return new Tr(r,"signInViaPopup",e,i).executeNotNull()})}class Tr extends Jg{constructor(e,t,r,i,s){super(e,t,i,s),this.provider=r,this.authWindow=null,this.pollId=null,Tr.currentPopupAction&&Tr.currentPopupAction.cancel(),Tr.currentPopupAction=this}executeNotNull(){return p(this,null,function*(){const e=yield this.execute();return te(e,this.auth,"internal-error"),e})}onExecution(){return p(this,null,function*(){Nn(this.filter.length===1,"Popup operations only handle one event");const e=Bu();this.authWindow=yield this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(Wt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()})}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Wt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Tr.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,r;if(!((r=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Wt(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,GA.get())};e()}}Tr.currentPopupAction=null;/**
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
 */const WA="pendingRedirect",Jo=new Map;class ms extends Jg{constructor(e,t,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,r),this.eventId=null}execute(){return p(this,null,function*(){let e=Jo.get(this.auth._key());if(!e){try{const r=(yield HA(this.resolver,this.auth))?yield wr(ms.prototype,this,"execute").call(this):null;e=()=>Promise.resolve(r)}catch(t){e=()=>Promise.reject(t)}Jo.set(this.auth._key(),e)}return this.bypassAuthState||Jo.set(this.auth._key(),()=>Promise.resolve(null)),e()})}onAuthEvent(e){return p(this,null,function*(){if(e.type==="signInViaRedirect")return wr(ms.prototype,this,"onAuthEvent").call(this,e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=yield this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,wr(ms.prototype,this,"onAuthEvent").call(this,e);this.resolve(null)}})}onExecution(){return p(this,null,function*(){})}cleanUp(){}}function HA(n,e){return p(this,null,function*(){const t=YA(e),r=QA(n);if(!(yield r._isAvailable()))return!1;const i=(yield r._get(t))==="true";return yield r._remove(t),i})}function KA(n,e){Jo.set(n._key(),e)}function QA(n){return Tn(n._redirectPersistence)}function YA(n){return Yo(WA,n.config.apiKey,n.name)}function JA(n,e,t=!1){return p(this,null,function*(){if(wt(n.app))return Promise.reject(An(n));const r=fn(n),i=Yg(r,e),o=yield new ms(r,i,t).execute();return o&&!t&&(delete o.user._redirectEventId,yield r._persistUserIfCurrent(o.user),yield r._setRedirectUser(null,e)),o})}/**
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
 */const XA=10*60*1e3;class ZA{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(t=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!eR(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var r;if(e.error&&!Xg(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";t.onError(Wt(this.auth,i))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const r=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=XA&&this.cachedEventUids.clear(),this.cachedEventUids.has(Mf(e))}saveEventToCache(e){this.cachedEventUids.add(Mf(e)),this.lastProcessedEventTime=Date.now()}}function Mf(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function Xg({type:n,error:e}){return n==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function eR(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Xg(n);default:return!1}}/**
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
 */function tR(t){return p(this,arguments,function*(n,e={}){return $t(n,"GET","/v1/projects",e)})}/**
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
 */const nR=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,rR=/^https?/;function iR(n){return p(this,null,function*(){if(n.config.emulator)return;const{authorizedDomains:e}=yield tR(n);for(const t of e)try{if(sR(t))return}catch(r){}Mt(n,"unauthorized-domain")})}function sR(n){const e=Dl(),{protocol:t,hostname:r}=new URL(e);if(n.startsWith("chrome-extension://")){const o=new URL(n);return o.hostname===""&&r===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&o.hostname===r}if(!rR.test(t))return!1;if(nR.test(n))return r===n;const i=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
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
 */const oR=new Qs(3e4,6e4);function xf(){const n=on().___jsl;if(n!=null&&n.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function aR(n){return new Promise((e,t)=>{var r,i,s;function o(){xf(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{xf(),t(Wt(n,"network-request-failed"))},timeout:oR.get()})}if(!((i=(r=on().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=on().gapi)===null||s===void 0)&&s.load)o();else{const a=iA("iframefcb");return on()[a]=()=>{gapi.load?o():t(Wt(n,"network-request-failed"))},Sg(`${rA()}?onload=${a}`).catch(c=>t(c))}}).catch(e=>{throw Xo=null,e})}let Xo=null;function cR(n){return Xo=Xo||aR(n),Xo}/**
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
 */const lR=new Qs(5e3,15e3),uR="__/auth/iframe",dR="emulator/auth/iframe",hR={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},fR=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function mR(n){const e=n.config;te(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?Nu(e,dR):`https://${n.config.authDomain}/${uR}`,r={apiKey:e.apiKey,appName:n.name,v:hr},i=fR.get(n.config.apiHost);i&&(r.eid=i);const s=n._getFrameworks();return s.length&&(r.fw=s.join(",")),`${t}?${bi(r).slice(1)}`}function pR(n){return p(this,null,function*(){const e=yield cR(n),t=on().gapi;return te(t,n,"internal-error"),e.open({where:document.body,url:mR(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:hR,dontclear:!0},r=>new Promise((i,s)=>p(this,null,function*(){yield r.restyle({setHideOnLeave:!1});const o=Wt(n,"network-request-failed"),a=on().setTimeout(()=>{s(o)},lR.get());function c(){on().clearTimeout(a),i(r)}r.ping(c).then(c,()=>{s(o)})})))})}/**
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
 */const gR={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},_R=500,yR=600,wR="_blank",vR="http://localhost";class Uf{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch(e){}}}function ER(n,e,t,r=_R,i=yR){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const c=Object.assign(Object.assign({},gR),{width:r.toString(),height:i.toString(),top:s,left:o}),u=pt().toLowerCase();t&&(a=vg(u)?wR:t),yg(u)&&(e=e||vR,c.scrollbars="yes");const d=Object.entries(c).reduce((m,[_,w])=>`${m}${_}=${w},`,"");if(KI(u)&&a!=="_self")return TR(e||"",a),new Uf(null);const h=window.open(e||"",a,d);te(h,n,"popup-blocked");try{h.focus()}catch(m){}return new Uf(h)}function TR(n,e){const t=document.createElement("a");t.href=n,t.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(r)}/**
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
 */const IR="__/auth/handler",AR="emulator/auth/handler",RR=encodeURIComponent("fac");function Ff(n,e,t,r,i,s){return p(this,null,function*(){te(n.config.authDomain,n,"auth-domain-config-required"),te(n.config.apiKey,n,"invalid-api-key");const o={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:r,v:hr,eventId:i};if(e instanceof Lu){e.setDefaultLanguage(n.languageCode),o.providerId=e.providerId||"",bl(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[d,h]of Object.entries({}))o[d]=h}if(e instanceof Js){const d=e.getScopes().filter(h=>h!=="");d.length>0&&(o.scopes=d.join(","))}n.tenantId&&(o.tid=n.tenantId);const a=o;for(const d of Object.keys(a))a[d]===void 0&&delete a[d];const c=yield n._getAppCheckToken(),u=c?`#${RR}=${encodeURIComponent(c)}`:"";return`${bR(n)}?${bi(a).slice(1)}${u}`})}function bR({config:n}){return n.emulator?Nu(n,AR):`https://${n.authDomain}/${IR}`}/**
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
 */const ol="webStorageSupport";class SR{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Fu,this._completeRedirectFn=JA,this._overrideRedirectResult=KA}_openPopup(e,t,r,i){return p(this,null,function*(){var s;Nn((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=yield Ff(e,t,r,Dl(),i);return ER(e,o,Bu())})}_openRedirect(e,t,r,i){return p(this,null,function*(){yield this._originValidation(e);const s=yield Ff(e,t,r,Dl(),i);return OA(s),new Promise(()=>{})})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:i,promise:s}=this.eventManagers[t];return i?Promise.resolve(i):(Nn(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[t]={promise:r},r.catch(()=>{delete this.eventManagers[t]}),r}initAndGetManager(e){return p(this,null,function*(){const t=yield pR(e),r=new ZA(e);return t.register("authEvent",i=>(te(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=t,r})}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(ol,{type:ol},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[ol];o!==void 0&&t(!!o),Mt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=iR(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return Rg()||wg()||Ou()}}const Zg=SR;var Bf="@firebase/auth",$f="1.10.8";/**
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
 */class kR{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}getToken(e){return p(this,null,function*(){return this.assertAuthConfigured(),yield this.auth._initializationPromise,this.auth.currentUser?{accessToken:yield this.auth.currentUser.getIdToken(e)}:null})}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){te(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function CR(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function PR(n){Ut(new Vt("auth",(e,{options:t})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;te(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const c={apiKey:o,authDomain:a,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:bg(n)},u=new eA(r,i,s,c);return lA(u,t),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,r)=>{e.getProvider("auth-internal").initialize()})),Ut(new Vt("auth-internal",e=>{const t=fn(e.getProvider("auth").getImmediate());return(r=>new kR(r))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),mt(Bf,$f,CR(n)),mt(Bf,$f,"esm2017")}/**
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
 */const NR=5*60,DR=Yp("authIdTokenMaxAge")||NR;let qf=null;const OR=n=>e=>p(void 0,null,function*(){const t=e&&(yield e.getIdTokenResult()),r=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(r&&r>DR)return;const i=t==null?void 0:t.token;qf!==i&&(qf=i,yield fetch(n,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))});function Zo(n=Ks()){const e=Un(n,"auth");if(e.isInitialized())return e.getImmediate();const t=Cg(n,{popupRedirectResolver:Zg,persistence:[Qg,jg,Fu]}),r=Yp("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const s=new URL(r,location.origin);if(location.origin===s.origin){const o=OR(s.toString());Bg(t,o,()=>o(t.currentUser)),Fg(t,a=>o(a))}}const i=Kp("auth");return i&&Pg(t,`http://${i}`),t}function LR(){var n,e;return(e=(n=document.getElementsByTagName("head"))===null||n===void 0?void 0:n[0])!==null&&e!==void 0?e:document}tA({loadJS(n){return new Promise((e,t)=>{const r=document.createElement("script");r.setAttribute("src",n),r.onload=e,r.onerror=i=>{const s=Wt("internal-error");s.customData=i,t(s)},r.type="text/javascript",r.charset="UTF-8",LR().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});PR("Browser");const Ns=Object.freeze(Object.defineProperty({__proto__:null,ActionCodeURL:Ja,AuthCredential:Ya,EmailAuthCredential:fi,EmailAuthProvider:Br,FacebookAuthProvider:yn,GithubAuthProvider:wn,GoogleAuthProvider:Tt,OAuthCredential:nr,TwitterAuthProvider:vn,applyActionCode:bA,beforeAuthStateChanged:Bg,browserLocalPersistence:jg,browserPopupRedirectResolver:Zg,browserSessionPersistence:Fu,checkActionCode:SA,confirmPasswordReset:RA,connectAuthEmulator:Pg,createUserWithEmailAndPassword:Ug,getAuth:Zo,getIdTokenResult:mg,inMemoryPersistence:Ll,indexedDBLocalPersistence:Qg,initializeAuth:Cg,onAuthStateChanged:$g,onIdTokenChanged:Fg,prodErrorMap:lg,reload:pg,sendEmailVerification:Ps,sendPasswordResetEmail:xg,signInWithCredential:Mg,signInWithEmailAndPassword:fs,signInWithPopup:_a,signOut:Le,updateProfile:ma},Symbol.toStringTag,{value:"Module"}));var jf=typeof globalThis!="undefined"?globalThis:typeof window!="undefined"?window:typeof global!="undefined"?global:typeof self!="undefined"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Jn,e_;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(R,T){function I(){}I.prototype=T.prototype,R.D=T.prototype,R.prototype=new I,R.prototype.constructor=R,R.C=function(b,k,D){for(var A=Array(arguments.length-2),mn=2;mn<arguments.length;mn++)A[mn-2]=arguments[mn];return T.prototype[k].apply(b,A)}}function t(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,t),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(R,T,I){I||(I=0);var b=Array(16);if(typeof T=="string")for(var k=0;16>k;++k)b[k]=T.charCodeAt(I++)|T.charCodeAt(I++)<<8|T.charCodeAt(I++)<<16|T.charCodeAt(I++)<<24;else for(k=0;16>k;++k)b[k]=T[I++]|T[I++]<<8|T[I++]<<16|T[I++]<<24;T=R.g[0],I=R.g[1],k=R.g[2];var D=R.g[3],A=T+(D^I&(k^D))+b[0]+3614090360&4294967295;T=I+(A<<7&4294967295|A>>>25),A=D+(k^T&(I^k))+b[1]+3905402710&4294967295,D=T+(A<<12&4294967295|A>>>20),A=k+(I^D&(T^I))+b[2]+606105819&4294967295,k=D+(A<<17&4294967295|A>>>15),A=I+(T^k&(D^T))+b[3]+3250441966&4294967295,I=k+(A<<22&4294967295|A>>>10),A=T+(D^I&(k^D))+b[4]+4118548399&4294967295,T=I+(A<<7&4294967295|A>>>25),A=D+(k^T&(I^k))+b[5]+1200080426&4294967295,D=T+(A<<12&4294967295|A>>>20),A=k+(I^D&(T^I))+b[6]+2821735955&4294967295,k=D+(A<<17&4294967295|A>>>15),A=I+(T^k&(D^T))+b[7]+4249261313&4294967295,I=k+(A<<22&4294967295|A>>>10),A=T+(D^I&(k^D))+b[8]+1770035416&4294967295,T=I+(A<<7&4294967295|A>>>25),A=D+(k^T&(I^k))+b[9]+2336552879&4294967295,D=T+(A<<12&4294967295|A>>>20),A=k+(I^D&(T^I))+b[10]+4294925233&4294967295,k=D+(A<<17&4294967295|A>>>15),A=I+(T^k&(D^T))+b[11]+2304563134&4294967295,I=k+(A<<22&4294967295|A>>>10),A=T+(D^I&(k^D))+b[12]+1804603682&4294967295,T=I+(A<<7&4294967295|A>>>25),A=D+(k^T&(I^k))+b[13]+4254626195&4294967295,D=T+(A<<12&4294967295|A>>>20),A=k+(I^D&(T^I))+b[14]+2792965006&4294967295,k=D+(A<<17&4294967295|A>>>15),A=I+(T^k&(D^T))+b[15]+1236535329&4294967295,I=k+(A<<22&4294967295|A>>>10),A=T+(k^D&(I^k))+b[1]+4129170786&4294967295,T=I+(A<<5&4294967295|A>>>27),A=D+(I^k&(T^I))+b[6]+3225465664&4294967295,D=T+(A<<9&4294967295|A>>>23),A=k+(T^I&(D^T))+b[11]+643717713&4294967295,k=D+(A<<14&4294967295|A>>>18),A=I+(D^T&(k^D))+b[0]+3921069994&4294967295,I=k+(A<<20&4294967295|A>>>12),A=T+(k^D&(I^k))+b[5]+3593408605&4294967295,T=I+(A<<5&4294967295|A>>>27),A=D+(I^k&(T^I))+b[10]+38016083&4294967295,D=T+(A<<9&4294967295|A>>>23),A=k+(T^I&(D^T))+b[15]+3634488961&4294967295,k=D+(A<<14&4294967295|A>>>18),A=I+(D^T&(k^D))+b[4]+3889429448&4294967295,I=k+(A<<20&4294967295|A>>>12),A=T+(k^D&(I^k))+b[9]+568446438&4294967295,T=I+(A<<5&4294967295|A>>>27),A=D+(I^k&(T^I))+b[14]+3275163606&4294967295,D=T+(A<<9&4294967295|A>>>23),A=k+(T^I&(D^T))+b[3]+4107603335&4294967295,k=D+(A<<14&4294967295|A>>>18),A=I+(D^T&(k^D))+b[8]+1163531501&4294967295,I=k+(A<<20&4294967295|A>>>12),A=T+(k^D&(I^k))+b[13]+2850285829&4294967295,T=I+(A<<5&4294967295|A>>>27),A=D+(I^k&(T^I))+b[2]+4243563512&4294967295,D=T+(A<<9&4294967295|A>>>23),A=k+(T^I&(D^T))+b[7]+1735328473&4294967295,k=D+(A<<14&4294967295|A>>>18),A=I+(D^T&(k^D))+b[12]+2368359562&4294967295,I=k+(A<<20&4294967295|A>>>12),A=T+(I^k^D)+b[5]+4294588738&4294967295,T=I+(A<<4&4294967295|A>>>28),A=D+(T^I^k)+b[8]+2272392833&4294967295,D=T+(A<<11&4294967295|A>>>21),A=k+(D^T^I)+b[11]+1839030562&4294967295,k=D+(A<<16&4294967295|A>>>16),A=I+(k^D^T)+b[14]+4259657740&4294967295,I=k+(A<<23&4294967295|A>>>9),A=T+(I^k^D)+b[1]+2763975236&4294967295,T=I+(A<<4&4294967295|A>>>28),A=D+(T^I^k)+b[4]+1272893353&4294967295,D=T+(A<<11&4294967295|A>>>21),A=k+(D^T^I)+b[7]+4139469664&4294967295,k=D+(A<<16&4294967295|A>>>16),A=I+(k^D^T)+b[10]+3200236656&4294967295,I=k+(A<<23&4294967295|A>>>9),A=T+(I^k^D)+b[13]+681279174&4294967295,T=I+(A<<4&4294967295|A>>>28),A=D+(T^I^k)+b[0]+3936430074&4294967295,D=T+(A<<11&4294967295|A>>>21),A=k+(D^T^I)+b[3]+3572445317&4294967295,k=D+(A<<16&4294967295|A>>>16),A=I+(k^D^T)+b[6]+76029189&4294967295,I=k+(A<<23&4294967295|A>>>9),A=T+(I^k^D)+b[9]+3654602809&4294967295,T=I+(A<<4&4294967295|A>>>28),A=D+(T^I^k)+b[12]+3873151461&4294967295,D=T+(A<<11&4294967295|A>>>21),A=k+(D^T^I)+b[15]+530742520&4294967295,k=D+(A<<16&4294967295|A>>>16),A=I+(k^D^T)+b[2]+3299628645&4294967295,I=k+(A<<23&4294967295|A>>>9),A=T+(k^(I|~D))+b[0]+4096336452&4294967295,T=I+(A<<6&4294967295|A>>>26),A=D+(I^(T|~k))+b[7]+1126891415&4294967295,D=T+(A<<10&4294967295|A>>>22),A=k+(T^(D|~I))+b[14]+2878612391&4294967295,k=D+(A<<15&4294967295|A>>>17),A=I+(D^(k|~T))+b[5]+4237533241&4294967295,I=k+(A<<21&4294967295|A>>>11),A=T+(k^(I|~D))+b[12]+1700485571&4294967295,T=I+(A<<6&4294967295|A>>>26),A=D+(I^(T|~k))+b[3]+2399980690&4294967295,D=T+(A<<10&4294967295|A>>>22),A=k+(T^(D|~I))+b[10]+4293915773&4294967295,k=D+(A<<15&4294967295|A>>>17),A=I+(D^(k|~T))+b[1]+2240044497&4294967295,I=k+(A<<21&4294967295|A>>>11),A=T+(k^(I|~D))+b[8]+1873313359&4294967295,T=I+(A<<6&4294967295|A>>>26),A=D+(I^(T|~k))+b[15]+4264355552&4294967295,D=T+(A<<10&4294967295|A>>>22),A=k+(T^(D|~I))+b[6]+2734768916&4294967295,k=D+(A<<15&4294967295|A>>>17),A=I+(D^(k|~T))+b[13]+1309151649&4294967295,I=k+(A<<21&4294967295|A>>>11),A=T+(k^(I|~D))+b[4]+4149444226&4294967295,T=I+(A<<6&4294967295|A>>>26),A=D+(I^(T|~k))+b[11]+3174756917&4294967295,D=T+(A<<10&4294967295|A>>>22),A=k+(T^(D|~I))+b[2]+718787259&4294967295,k=D+(A<<15&4294967295|A>>>17),A=I+(D^(k|~T))+b[9]+3951481745&4294967295,R.g[0]=R.g[0]+T&4294967295,R.g[1]=R.g[1]+(k+(A<<21&4294967295|A>>>11))&4294967295,R.g[2]=R.g[2]+k&4294967295,R.g[3]=R.g[3]+D&4294967295}r.prototype.u=function(R,T){T===void 0&&(T=R.length);for(var I=T-this.blockSize,b=this.B,k=this.h,D=0;D<T;){if(k==0)for(;D<=I;)i(this,R,D),D+=this.blockSize;if(typeof R=="string"){for(;D<T;)if(b[k++]=R.charCodeAt(D++),k==this.blockSize){i(this,b),k=0;break}}else for(;D<T;)if(b[k++]=R[D++],k==this.blockSize){i(this,b),k=0;break}}this.h=k,this.o+=T},r.prototype.v=function(){var R=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);R[0]=128;for(var T=1;T<R.length-8;++T)R[T]=0;var I=8*this.o;for(T=R.length-8;T<R.length;++T)R[T]=I&255,I/=256;for(this.u(R),R=Array(16),T=I=0;4>T;++T)for(var b=0;32>b;b+=8)R[I++]=this.g[T]>>>b&255;return R};function s(R,T){var I=a;return Object.prototype.hasOwnProperty.call(I,R)?I[R]:I[R]=T(R)}function o(R,T){this.h=T;for(var I=[],b=!0,k=R.length-1;0<=k;k--){var D=R[k]|0;b&&D==T||(I[k]=D,b=!1)}this.g=I}var a={};function c(R){return-128<=R&&128>R?s(R,function(T){return new o([T|0],0>T?-1:0)}):new o([R|0],0>R?-1:0)}function u(R){if(isNaN(R)||!isFinite(R))return h;if(0>R)return E(u(-R));for(var T=[],I=1,b=0;R>=I;b++)T[b]=R/I|0,I*=4294967296;return new o(T,0)}function d(R,T){if(R.length==0)throw Error("number format error: empty string");if(T=T||10,2>T||36<T)throw Error("radix out of range: "+T);if(R.charAt(0)=="-")return E(d(R.substring(1),T));if(0<=R.indexOf("-"))throw Error('number format error: interior "-" character');for(var I=u(Math.pow(T,8)),b=h,k=0;k<R.length;k+=8){var D=Math.min(8,R.length-k),A=parseInt(R.substring(k,k+D),T);8>D?(D=u(Math.pow(T,D)),b=b.j(D).add(u(A))):(b=b.j(I),b=b.add(u(A)))}return b}var h=c(0),m=c(1),_=c(16777216);n=o.prototype,n.m=function(){if(v(this))return-E(this).m();for(var R=0,T=1,I=0;I<this.g.length;I++){var b=this.i(I);R+=(0<=b?b:4294967296+b)*T,T*=4294967296}return R},n.toString=function(R){if(R=R||10,2>R||36<R)throw Error("radix out of range: "+R);if(w(this))return"0";if(v(this))return"-"+E(this).toString(R);for(var T=u(Math.pow(R,6)),I=this,b="";;){var k=x(I,T).g;I=P(I,k.j(T));var D=((0<I.g.length?I.g[0]:I.h)>>>0).toString(R);if(I=k,w(I))return D+b;for(;6>D.length;)D="0"+D;b=D+b}},n.i=function(R){return 0>R?0:R<this.g.length?this.g[R]:this.h};function w(R){if(R.h!=0)return!1;for(var T=0;T<R.g.length;T++)if(R.g[T]!=0)return!1;return!0}function v(R){return R.h==-1}n.l=function(R){return R=P(this,R),v(R)?-1:w(R)?0:1};function E(R){for(var T=R.g.length,I=[],b=0;b<T;b++)I[b]=~R.g[b];return new o(I,~R.h).add(m)}n.abs=function(){return v(this)?E(this):this},n.add=function(R){for(var T=Math.max(this.g.length,R.g.length),I=[],b=0,k=0;k<=T;k++){var D=b+(this.i(k)&65535)+(R.i(k)&65535),A=(D>>>16)+(this.i(k)>>>16)+(R.i(k)>>>16);b=A>>>16,D&=65535,A&=65535,I[k]=A<<16|D}return new o(I,I[I.length-1]&-2147483648?-1:0)};function P(R,T){return R.add(E(T))}n.j=function(R){if(w(this)||w(R))return h;if(v(this))return v(R)?E(this).j(E(R)):E(E(this).j(R));if(v(R))return E(this.j(E(R)));if(0>this.l(_)&&0>R.l(_))return u(this.m()*R.m());for(var T=this.g.length+R.g.length,I=[],b=0;b<2*T;b++)I[b]=0;for(b=0;b<this.g.length;b++)for(var k=0;k<R.g.length;k++){var D=this.i(b)>>>16,A=this.i(b)&65535,mn=R.i(k)>>>16,xi=R.i(k)&65535;I[2*b+2*k]+=A*xi,O(I,2*b+2*k),I[2*b+2*k+1]+=D*xi,O(I,2*b+2*k+1),I[2*b+2*k+1]+=A*mn,O(I,2*b+2*k+1),I[2*b+2*k+2]+=D*mn,O(I,2*b+2*k+2)}for(b=0;b<T;b++)I[b]=I[2*b+1]<<16|I[2*b];for(b=T;b<2*T;b++)I[b]=0;return new o(I,0)};function O(R,T){for(;(R[T]&65535)!=R[T];)R[T+1]+=R[T]>>>16,R[T]&=65535,T++}function M(R,T){this.g=R,this.h=T}function x(R,T){if(w(T))throw Error("division by zero");if(w(R))return new M(h,h);if(v(R))return T=x(E(R),T),new M(E(T.g),E(T.h));if(v(T))return T=x(R,E(T)),new M(E(T.g),T.h);if(30<R.g.length){if(v(R)||v(T))throw Error("slowDivide_ only works with positive integers.");for(var I=m,b=T;0>=b.l(R);)I=Z(I),b=Z(b);var k=K(I,1),D=K(b,1);for(b=K(b,2),I=K(I,2);!w(b);){var A=D.add(b);0>=A.l(R)&&(k=k.add(I),D=A),b=K(b,1),I=K(I,1)}return T=P(R,k.j(T)),new M(k,T)}for(k=h;0<=R.l(T);){for(I=Math.max(1,Math.floor(R.m()/T.m())),b=Math.ceil(Math.log(I)/Math.LN2),b=48>=b?1:Math.pow(2,b-48),D=u(I),A=D.j(T);v(A)||0<A.l(R);)I-=b,D=u(I),A=D.j(T);w(D)&&(D=m),k=k.add(D),R=P(R,A)}return new M(k,R)}n.A=function(R){return x(this,R).h},n.and=function(R){for(var T=Math.max(this.g.length,R.g.length),I=[],b=0;b<T;b++)I[b]=this.i(b)&R.i(b);return new o(I,this.h&R.h)},n.or=function(R){for(var T=Math.max(this.g.length,R.g.length),I=[],b=0;b<T;b++)I[b]=this.i(b)|R.i(b);return new o(I,this.h|R.h)},n.xor=function(R){for(var T=Math.max(this.g.length,R.g.length),I=[],b=0;b<T;b++)I[b]=this.i(b)^R.i(b);return new o(I,this.h^R.h)};function Z(R){for(var T=R.g.length+1,I=[],b=0;b<T;b++)I[b]=R.i(b)<<1|R.i(b-1)>>>31;return new o(I,R.h)}function K(R,T){var I=T>>5;T%=32;for(var b=R.g.length-I,k=[],D=0;D<b;D++)k[D]=0<T?R.i(D+I)>>>T|R.i(D+I+1)<<32-T:R.i(D+I);return new o(k,R.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,e_=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.A,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=u,o.fromString=d,Jn=o}).apply(typeof jf!="undefined"?jf:typeof self!="undefined"?self:typeof window!="undefined"?window:{});var Fo=typeof globalThis!="undefined"?globalThis:typeof window!="undefined"?window:typeof global!="undefined"?global:typeof self!="undefined"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var t_,as,n_,ea,Ml,r_,i_,s_;(function(){var n,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(l,f,g){return l==Array.prototype||l==Object.prototype||(l[f]=g.value),l};function t(l){l=[typeof globalThis=="object"&&globalThis,l,typeof window=="object"&&window,typeof self=="object"&&self,typeof Fo=="object"&&Fo];for(var f=0;f<l.length;++f){var g=l[f];if(g&&g.Math==Math)return g}throw Error("Cannot find global object")}var r=t(this);function i(l,f){if(f)e:{var g=r;l=l.split(".");for(var y=0;y<l.length-1;y++){var N=l[y];if(!(N in g))break e;g=g[N]}l=l[l.length-1],y=g[l],f=f(y),f!=y&&f!=null&&e(g,l,{configurable:!0,writable:!0,value:f})}}function s(l,f){l instanceof String&&(l+="");var g=0,y=!1,N={next:function(){if(!y&&g<l.length){var L=g++;return{value:f(L,l[L]),done:!1}}return y=!0,{done:!0,value:void 0}}};return N[Symbol.iterator]=function(){return N},N}i("Array.prototype.values",function(l){return l||function(){return s(this,function(f,g){return g})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},a=this||self;function c(l){var f=typeof l;return f=f!="object"?f:l?Array.isArray(l)?"array":f:"null",f=="array"||f=="object"&&typeof l.length=="number"}function u(l){var f=typeof l;return f=="object"&&l!=null||f=="function"}function d(l,f,g){return l.call.apply(l.bind,arguments)}function h(l,f,g){if(!l)throw Error();if(2<arguments.length){var y=Array.prototype.slice.call(arguments,2);return function(){var N=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(N,y),l.apply(f,N)}}return function(){return l.apply(f,arguments)}}function m(l,f,g){return m=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?d:h,m.apply(null,arguments)}function _(l,f){var g=Array.prototype.slice.call(arguments,1);return function(){var y=g.slice();return y.push.apply(y,arguments),l.apply(this,y)}}function w(l,f){function g(){}g.prototype=f.prototype,l.aa=f.prototype,l.prototype=new g,l.prototype.constructor=l,l.Qb=function(y,N,L){for(var G=Array(arguments.length-2),be=2;be<arguments.length;be++)G[be-2]=arguments[be];return f.prototype[N].apply(y,G)}}function v(l){const f=l.length;if(0<f){const g=Array(f);for(let y=0;y<f;y++)g[y]=l[y];return g}return[]}function E(l,f){for(let g=1;g<arguments.length;g++){const y=arguments[g];if(c(y)){const N=l.length||0,L=y.length||0;l.length=N+L;for(let G=0;G<L;G++)l[N+G]=y[G]}else l.push(y)}}class P{constructor(f,g){this.i=f,this.j=g,this.h=0,this.g=null}get(){let f;return 0<this.h?(this.h--,f=this.g,this.g=f.next,f.next=null):f=this.i(),f}}function O(l){return/^[\s\xa0]*$/.test(l)}function M(){var l=a.navigator;return l&&(l=l.userAgent)?l:""}function x(l){return x[" "](l),l}x[" "]=function(){};var Z=M().indexOf("Gecko")!=-1&&!(M().toLowerCase().indexOf("webkit")!=-1&&M().indexOf("Edge")==-1)&&!(M().indexOf("Trident")!=-1||M().indexOf("MSIE")!=-1)&&M().indexOf("Edge")==-1;function K(l,f,g){for(const y in l)f.call(g,l[y],y,l)}function R(l,f){for(const g in l)f.call(void 0,l[g],g,l)}function T(l){const f={};for(const g in l)f[g]=l[g];return f}const I="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function b(l,f){let g,y;for(let N=1;N<arguments.length;N++){y=arguments[N];for(g in y)l[g]=y[g];for(let L=0;L<I.length;L++)g=I[L],Object.prototype.hasOwnProperty.call(y,g)&&(l[g]=y[g])}}function k(l){var f=1;l=l.split(":");const g=[];for(;0<f&&l.length;)g.push(l.shift()),f--;return l.length&&g.push(l.join(":")),g}function D(l){a.setTimeout(()=>{throw l},0)}function A(){var l=Pc;let f=null;return l.g&&(f=l.g,l.g=l.g.next,l.g||(l.h=null),f.next=null),f}class mn{constructor(){this.h=this.g=null}add(f,g){const y=xi.get();y.set(f,g),this.h?this.h.next=y:this.g=y,this.h=y}}var xi=new P(()=>new nE,l=>l.reset());class nE{constructor(){this.next=this.g=this.h=null}set(f,g){this.h=f,this.g=g,this.next=null}reset(){this.next=this.g=this.h=null}}let Ui,Fi=!1,Pc=new mn,ah=()=>{const l=a.Promise.resolve(void 0);Ui=()=>{l.then(rE)}};var rE=()=>{for(var l;l=A();){try{l.h.call(l.g)}catch(g){D(g)}var f=xi;f.j(l),100>f.h&&(f.h++,l.next=f.g,f.g=l)}Fi=!1};function Bn(){this.s=this.s,this.C=this.C}Bn.prototype.s=!1,Bn.prototype.ma=function(){this.s||(this.s=!0,this.N())},Bn.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function it(l,f){this.type=l,this.g=this.target=f,this.defaultPrevented=!1}it.prototype.h=function(){this.defaultPrevented=!0};var iE=function(){if(!a.addEventListener||!Object.defineProperty)return!1;var l=!1,f=Object.defineProperty({},"passive",{get:function(){l=!0}});try{const g=()=>{};a.addEventListener("test",g,f),a.removeEventListener("test",g,f)}catch(g){}return l}();function Bi(l,f){if(it.call(this,l?l.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,l){var g=this.type=l.type,y=l.changedTouches&&l.changedTouches.length?l.changedTouches[0]:null;if(this.target=l.target||l.srcElement,this.g=f,f=l.relatedTarget){if(Z){e:{try{x(f.nodeName);var N=!0;break e}catch(L){}N=!1}N||(f=null)}}else g=="mouseover"?f=l.fromElement:g=="mouseout"&&(f=l.toElement);this.relatedTarget=f,y?(this.clientX=y.clientX!==void 0?y.clientX:y.pageX,this.clientY=y.clientY!==void 0?y.clientY:y.pageY,this.screenX=y.screenX||0,this.screenY=y.screenY||0):(this.clientX=l.clientX!==void 0?l.clientX:l.pageX,this.clientY=l.clientY!==void 0?l.clientY:l.pageY,this.screenX=l.screenX||0,this.screenY=l.screenY||0),this.button=l.button,this.key=l.key||"",this.ctrlKey=l.ctrlKey,this.altKey=l.altKey,this.shiftKey=l.shiftKey,this.metaKey=l.metaKey,this.pointerId=l.pointerId||0,this.pointerType=typeof l.pointerType=="string"?l.pointerType:sE[l.pointerType]||"",this.state=l.state,this.i=l,l.defaultPrevented&&Bi.aa.h.call(this)}}w(Bi,it);var sE={2:"touch",3:"pen",4:"mouse"};Bi.prototype.h=function(){Bi.aa.h.call(this);var l=this.i;l.preventDefault?l.preventDefault():l.returnValue=!1};var wo="closure_listenable_"+(1e6*Math.random()|0),oE=0;function aE(l,f,g,y,N){this.listener=l,this.proxy=null,this.src=f,this.type=g,this.capture=!!y,this.ha=N,this.key=++oE,this.da=this.fa=!1}function vo(l){l.da=!0,l.listener=null,l.proxy=null,l.src=null,l.ha=null}function Eo(l){this.src=l,this.g={},this.h=0}Eo.prototype.add=function(l,f,g,y,N){var L=l.toString();l=this.g[L],l||(l=this.g[L]=[],this.h++);var G=Dc(l,f,y,N);return-1<G?(f=l[G],g||(f.fa=!1)):(f=new aE(f,this.src,L,!!y,N),f.fa=g,l.push(f)),f};function Nc(l,f){var g=f.type;if(g in l.g){var y=l.g[g],N=Array.prototype.indexOf.call(y,f,void 0),L;(L=0<=N)&&Array.prototype.splice.call(y,N,1),L&&(vo(f),l.g[g].length==0&&(delete l.g[g],l.h--))}}function Dc(l,f,g,y){for(var N=0;N<l.length;++N){var L=l[N];if(!L.da&&L.listener==f&&L.capture==!!g&&L.ha==y)return N}return-1}var Oc="closure_lm_"+(1e6*Math.random()|0),Lc={};function ch(l,f,g,y,N){if(Array.isArray(f)){for(var L=0;L<f.length;L++)ch(l,f[L],g,y,N);return null}return g=dh(g),l&&l[wo]?l.K(f,g,u(y)?!!y.capture:!!y,N):cE(l,f,g,!1,y,N)}function cE(l,f,g,y,N,L){if(!f)throw Error("Invalid event type");var G=u(N)?!!N.capture:!!N,be=Mc(l);if(be||(l[Oc]=be=new Eo(l)),g=be.add(f,g,y,G,L),g.proxy)return g;if(y=lE(),g.proxy=y,y.src=l,y.listener=g,l.addEventListener)iE||(N=G),N===void 0&&(N=!1),l.addEventListener(f.toString(),y,N);else if(l.attachEvent)l.attachEvent(uh(f.toString()),y);else if(l.addListener&&l.removeListener)l.addListener(y);else throw Error("addEventListener and attachEvent are unavailable.");return g}function lE(){function l(g){return f.call(l.src,l.listener,g)}const f=uE;return l}function lh(l,f,g,y,N){if(Array.isArray(f))for(var L=0;L<f.length;L++)lh(l,f[L],g,y,N);else y=u(y)?!!y.capture:!!y,g=dh(g),l&&l[wo]?(l=l.i,f=String(f).toString(),f in l.g&&(L=l.g[f],g=Dc(L,g,y,N),-1<g&&(vo(L[g]),Array.prototype.splice.call(L,g,1),L.length==0&&(delete l.g[f],l.h--)))):l&&(l=Mc(l))&&(f=l.g[f.toString()],l=-1,f&&(l=Dc(f,g,y,N)),(g=-1<l?f[l]:null)&&Vc(g))}function Vc(l){if(typeof l!="number"&&l&&!l.da){var f=l.src;if(f&&f[wo])Nc(f.i,l);else{var g=l.type,y=l.proxy;f.removeEventListener?f.removeEventListener(g,y,l.capture):f.detachEvent?f.detachEvent(uh(g),y):f.addListener&&f.removeListener&&f.removeListener(y),(g=Mc(f))?(Nc(g,l),g.h==0&&(g.src=null,f[Oc]=null)):vo(l)}}}function uh(l){return l in Lc?Lc[l]:Lc[l]="on"+l}function uE(l,f){if(l.da)l=!0;else{f=new Bi(f,this);var g=l.listener,y=l.ha||l.src;l.fa&&Vc(l),l=g.call(y,f)}return l}function Mc(l){return l=l[Oc],l instanceof Eo?l:null}var xc="__closure_events_fn_"+(1e9*Math.random()>>>0);function dh(l){return typeof l=="function"?l:(l[xc]||(l[xc]=function(f){return l.handleEvent(f)}),l[xc])}function st(){Bn.call(this),this.i=new Eo(this),this.M=this,this.F=null}w(st,Bn),st.prototype[wo]=!0,st.prototype.removeEventListener=function(l,f,g,y){lh(this,l,f,g,y)};function gt(l,f){var g,y=l.F;if(y)for(g=[];y;y=y.F)g.push(y);if(l=l.M,y=f.type||f,typeof f=="string")f=new it(f,l);else if(f instanceof it)f.target=f.target||l;else{var N=f;f=new it(y,l),b(f,N)}if(N=!0,g)for(var L=g.length-1;0<=L;L--){var G=f.g=g[L];N=To(G,y,!0,f)&&N}if(G=f.g=l,N=To(G,y,!0,f)&&N,N=To(G,y,!1,f)&&N,g)for(L=0;L<g.length;L++)G=f.g=g[L],N=To(G,y,!1,f)&&N}st.prototype.N=function(){if(st.aa.N.call(this),this.i){var l=this.i,f;for(f in l.g){for(var g=l.g[f],y=0;y<g.length;y++)vo(g[y]);delete l.g[f],l.h--}}this.F=null},st.prototype.K=function(l,f,g,y){return this.i.add(String(l),f,!1,g,y)},st.prototype.L=function(l,f,g,y){return this.i.add(String(l),f,!0,g,y)};function To(l,f,g,y){if(f=l.i.g[String(f)],!f)return!0;f=f.concat();for(var N=!0,L=0;L<f.length;++L){var G=f[L];if(G&&!G.da&&G.capture==g){var be=G.listener,et=G.ha||G.src;G.fa&&Nc(l.i,G),N=be.call(et,y)!==!1&&N}}return N&&!y.defaultPrevented}function hh(l,f,g){if(typeof l=="function")g&&(l=m(l,g));else if(l&&typeof l.handleEvent=="function")l=m(l.handleEvent,l);else throw Error("Invalid listener argument");return 2147483647<Number(f)?-1:a.setTimeout(l,f||0)}function fh(l){l.g=hh(()=>{l.g=null,l.i&&(l.i=!1,fh(l))},l.l);const f=l.h;l.h=null,l.m.apply(null,f)}class dE extends Bn{constructor(f,g){super(),this.m=f,this.l=g,this.h=null,this.i=!1,this.g=null}j(f){this.h=arguments,this.g?this.i=!0:fh(this)}N(){super.N(),this.g&&(a.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function $i(l){Bn.call(this),this.h=l,this.g={}}w($i,Bn);var mh=[];function ph(l){K(l.g,function(f,g){this.g.hasOwnProperty(g)&&Vc(f)},l),l.g={}}$i.prototype.N=function(){$i.aa.N.call(this),ph(this)},$i.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Uc=a.JSON.stringify,hE=a.JSON.parse,fE=class{stringify(l){return a.JSON.stringify(l,void 0)}parse(l){return a.JSON.parse(l,void 0)}};function Fc(){}Fc.prototype.h=null;function gh(l){return l.h||(l.h=l.i())}function _h(){}var qi={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Bc(){it.call(this,"d")}w(Bc,it);function $c(){it.call(this,"c")}w($c,it);var pr={},yh=null;function Io(){return yh=yh||new st}pr.La="serverreachability";function wh(l){it.call(this,pr.La,l)}w(wh,it);function ji(l){const f=Io();gt(f,new wh(f))}pr.STAT_EVENT="statevent";function vh(l,f){it.call(this,pr.STAT_EVENT,l),this.stat=f}w(vh,it);function _t(l){const f=Io();gt(f,new vh(f,l))}pr.Ma="timingevent";function Eh(l,f){it.call(this,pr.Ma,l),this.size=f}w(Eh,it);function zi(l,f){if(typeof l!="function")throw Error("Fn must not be null and must be a function");return a.setTimeout(function(){l()},f)}function Gi(){this.g=!0}Gi.prototype.xa=function(){this.g=!1};function mE(l,f,g,y,N,L){l.info(function(){if(l.g)if(L)for(var G="",be=L.split("&"),et=0;et<be.length;et++){var ve=be[et].split("=");if(1<ve.length){var ot=ve[0];ve=ve[1];var at=ot.split("_");G=2<=at.length&&at[1]=="type"?G+(ot+"="+ve+"&"):G+(ot+"=redacted&")}}else G=null;else G=L;return"XMLHTTP REQ ("+y+") [attempt "+N+"]: "+f+`
`+g+`
`+G})}function pE(l,f,g,y,N,L,G){l.info(function(){return"XMLHTTP RESP ("+y+") [ attempt "+N+"]: "+f+`
`+g+`
`+L+" "+G})}function Wr(l,f,g,y){l.info(function(){return"XMLHTTP TEXT ("+f+"): "+_E(l,g)+(y?" "+y:"")})}function gE(l,f){l.info(function(){return"TIMEOUT: "+f})}Gi.prototype.info=function(){};function _E(l,f){if(!l.g)return f;if(!f)return null;try{var g=JSON.parse(f);if(g){for(l=0;l<g.length;l++)if(Array.isArray(g[l])){var y=g[l];if(!(2>y.length)){var N=y[1];if(Array.isArray(N)&&!(1>N.length)){var L=N[0];if(L!="noop"&&L!="stop"&&L!="close")for(var G=1;G<N.length;G++)N[G]=""}}}}return Uc(g)}catch(be){return f}}var Ao={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Th={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},qc;function Ro(){}w(Ro,Fc),Ro.prototype.g=function(){return new XMLHttpRequest},Ro.prototype.i=function(){return{}},qc=new Ro;function $n(l,f,g,y){this.j=l,this.i=f,this.l=g,this.R=y||1,this.U=new $i(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Ih}function Ih(){this.i=null,this.g="",this.h=!1}var Ah={},jc={};function zc(l,f,g){l.L=1,l.v=Co(pn(f)),l.m=g,l.P=!0,Rh(l,null)}function Rh(l,f){l.F=Date.now(),bo(l),l.A=pn(l.v);var g=l.A,y=l.R;Array.isArray(y)||(y=[String(y)]),Fh(g.i,"t",y),l.C=0,g=l.j.J,l.h=new Ih,l.g=rf(l.j,g?f:null,!l.m),0<l.O&&(l.M=new dE(m(l.Y,l,l.g),l.O)),f=l.U,g=l.g,y=l.ca;var N="readystatechange";Array.isArray(N)||(N&&(mh[0]=N.toString()),N=mh);for(var L=0;L<N.length;L++){var G=ch(g,N[L],y||f.handleEvent,!1,f.h||f);if(!G)break;f.g[G.key]=G}f=l.H?T(l.H):{},l.m?(l.u||(l.u="POST"),f["Content-Type"]="application/x-www-form-urlencoded",l.g.ea(l.A,l.u,l.m,f)):(l.u="GET",l.g.ea(l.A,l.u,null,f)),ji(),mE(l.i,l.u,l.A,l.l,l.R,l.m)}$n.prototype.ca=function(l){l=l.target;const f=this.M;f&&gn(l)==3?f.j():this.Y(l)},$n.prototype.Y=function(l){try{if(l==this.g)e:{const at=gn(this.g);var f=this.g.Ba();const Qr=this.g.Z();if(!(3>at)&&(at!=3||this.g&&(this.h.h||this.g.oa()||Wh(this.g)))){this.J||at!=4||f==7||(f==8||0>=Qr,ji()),Gc(this);var g=this.g.Z();this.X=g;t:if(bh(this)){var y=Wh(this.g);l="";var N=y.length,L=gn(this.g)==4;if(!this.h.i){if(typeof TextDecoder=="undefined"){gr(this),Wi(this);var G="";break t}this.h.i=new a.TextDecoder}for(f=0;f<N;f++)this.h.h=!0,l+=this.h.i.decode(y[f],{stream:!(L&&f==N-1)});y.length=0,this.h.g+=l,this.C=0,G=this.h.g}else G=this.g.oa();if(this.o=g==200,pE(this.i,this.u,this.A,this.l,this.R,at,g),this.o){if(this.T&&!this.K){t:{if(this.g){var be,et=this.g;if((be=et.g?et.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!O(be)){var ve=be;break t}}ve=null}if(g=ve)Wr(this.i,this.l,g,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Wc(this,g);else{this.o=!1,this.s=3,_t(12),gr(this),Wi(this);break e}}if(this.P){g=!0;let qt;for(;!this.J&&this.C<G.length;)if(qt=yE(this,G),qt==jc){at==4&&(this.s=4,_t(14),g=!1),Wr(this.i,this.l,null,"[Incomplete Response]");break}else if(qt==Ah){this.s=4,_t(15),Wr(this.i,this.l,G,"[Invalid Chunk]"),g=!1;break}else Wr(this.i,this.l,qt,null),Wc(this,qt);if(bh(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),at!=4||G.length!=0||this.h.h||(this.s=1,_t(16),g=!1),this.o=this.o&&g,!g)Wr(this.i,this.l,G,"[Invalid Chunked Response]"),gr(this),Wi(this);else if(0<G.length&&!this.W){this.W=!0;var ot=this.j;ot.g==this&&ot.ba&&!ot.M&&(ot.j.info("Great, no buffering proxy detected. Bytes received: "+G.length),Xc(ot),ot.M=!0,_t(11))}}else Wr(this.i,this.l,G,null),Wc(this,G);at==4&&gr(this),this.o&&!this.J&&(at==4?Zh(this.j,this):(this.o=!1,bo(this)))}else VE(this.g),g==400&&0<G.indexOf("Unknown SID")?(this.s=3,_t(12)):(this.s=0,_t(13)),gr(this),Wi(this)}}}catch(at){}finally{}};function bh(l){return l.g?l.u=="GET"&&l.L!=2&&l.j.Ca:!1}function yE(l,f){var g=l.C,y=f.indexOf(`
`,g);return y==-1?jc:(g=Number(f.substring(g,y)),isNaN(g)?Ah:(y+=1,y+g>f.length?jc:(f=f.slice(y,y+g),l.C=y+g,f)))}$n.prototype.cancel=function(){this.J=!0,gr(this)};function bo(l){l.S=Date.now()+l.I,Sh(l,l.I)}function Sh(l,f){if(l.B!=null)throw Error("WatchDog timer not null");l.B=zi(m(l.ba,l),f)}function Gc(l){l.B&&(a.clearTimeout(l.B),l.B=null)}$n.prototype.ba=function(){this.B=null;const l=Date.now();0<=l-this.S?(gE(this.i,this.A),this.L!=2&&(ji(),_t(17)),gr(this),this.s=2,Wi(this)):Sh(this,this.S-l)};function Wi(l){l.j.G==0||l.J||Zh(l.j,l)}function gr(l){Gc(l);var f=l.M;f&&typeof f.ma=="function"&&f.ma(),l.M=null,ph(l.U),l.g&&(f=l.g,l.g=null,f.abort(),f.ma())}function Wc(l,f){try{var g=l.j;if(g.G!=0&&(g.g==l||Hc(g.h,l))){if(!l.K&&Hc(g.h,l)&&g.G==3){try{var y=g.Da.g.parse(f)}catch(ve){y=null}if(Array.isArray(y)&&y.length==3){var N=y;if(N[0]==0){e:if(!g.u){if(g.g)if(g.g.F+3e3<l.F)Vo(g),Oo(g);else break e;Jc(g),_t(18)}}else g.za=N[1],0<g.za-g.T&&37500>N[2]&&g.F&&g.v==0&&!g.C&&(g.C=zi(m(g.Za,g),6e3));if(1>=Ph(g.h)&&g.ca){try{g.ca()}catch(ve){}g.ca=void 0}}else yr(g,11)}else if((l.K||g.g==l)&&Vo(g),!O(f))for(N=g.Da.g.parse(f),f=0;f<N.length;f++){let ve=N[f];if(g.T=ve[0],ve=ve[1],g.G==2)if(ve[0]=="c"){g.K=ve[1],g.ia=ve[2];const ot=ve[3];ot!=null&&(g.la=ot,g.j.info("VER="+g.la));const at=ve[4];at!=null&&(g.Aa=at,g.j.info("SVER="+g.Aa));const Qr=ve[5];Qr!=null&&typeof Qr=="number"&&0<Qr&&(y=1.5*Qr,g.L=y,g.j.info("backChannelRequestTimeoutMs_="+y)),y=g;const qt=l.g;if(qt){const xo=qt.g?qt.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(xo){var L=y.h;L.g||xo.indexOf("spdy")==-1&&xo.indexOf("quic")==-1&&xo.indexOf("h2")==-1||(L.j=L.l,L.g=new Set,L.h&&(Kc(L,L.h),L.h=null))}if(y.D){const Zc=qt.g?qt.g.getResponseHeader("X-HTTP-Session-Id"):null;Zc&&(y.ya=Zc,ke(y.I,y.D,Zc))}}g.G=3,g.l&&g.l.ua(),g.ba&&(g.R=Date.now()-l.F,g.j.info("Handshake RTT: "+g.R+"ms")),y=g;var G=l;if(y.qa=nf(y,y.J?y.ia:null,y.W),G.K){Nh(y.h,G);var be=G,et=y.L;et&&(be.I=et),be.B&&(Gc(be),bo(be)),y.g=G}else Jh(y);0<g.i.length&&Lo(g)}else ve[0]!="stop"&&ve[0]!="close"||yr(g,7);else g.G==3&&(ve[0]=="stop"||ve[0]=="close"?ve[0]=="stop"?yr(g,7):Yc(g):ve[0]!="noop"&&g.l&&g.l.ta(ve),g.v=0)}}ji()}catch(ve){}}var wE=class{constructor(l,f){this.g=l,this.map=f}};function kh(l){this.l=l||10,a.PerformanceNavigationTiming?(l=a.performance.getEntriesByType("navigation"),l=0<l.length&&(l[0].nextHopProtocol=="hq"||l[0].nextHopProtocol=="h2")):l=!!(a.chrome&&a.chrome.loadTimes&&a.chrome.loadTimes()&&a.chrome.loadTimes().wasFetchedViaSpdy),this.j=l?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Ch(l){return l.h?!0:l.g?l.g.size>=l.j:!1}function Ph(l){return l.h?1:l.g?l.g.size:0}function Hc(l,f){return l.h?l.h==f:l.g?l.g.has(f):!1}function Kc(l,f){l.g?l.g.add(f):l.h=f}function Nh(l,f){l.h&&l.h==f?l.h=null:l.g&&l.g.has(f)&&l.g.delete(f)}kh.prototype.cancel=function(){if(this.i=Dh(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const l of this.g.values())l.cancel();this.g.clear()}};function Dh(l){if(l.h!=null)return l.i.concat(l.h.D);if(l.g!=null&&l.g.size!==0){let f=l.i;for(const g of l.g.values())f=f.concat(g.D);return f}return v(l.i)}function vE(l){if(l.V&&typeof l.V=="function")return l.V();if(typeof Map!="undefined"&&l instanceof Map||typeof Set!="undefined"&&l instanceof Set)return Array.from(l.values());if(typeof l=="string")return l.split("");if(c(l)){for(var f=[],g=l.length,y=0;y<g;y++)f.push(l[y]);return f}f=[],g=0;for(y in l)f[g++]=l[y];return f}function EE(l){if(l.na&&typeof l.na=="function")return l.na();if(!l.V||typeof l.V!="function"){if(typeof Map!="undefined"&&l instanceof Map)return Array.from(l.keys());if(!(typeof Set!="undefined"&&l instanceof Set)){if(c(l)||typeof l=="string"){var f=[];l=l.length;for(var g=0;g<l;g++)f.push(g);return f}f=[],g=0;for(const y in l)f[g++]=y;return f}}}function Oh(l,f){if(l.forEach&&typeof l.forEach=="function")l.forEach(f,void 0);else if(c(l)||typeof l=="string")Array.prototype.forEach.call(l,f,void 0);else for(var g=EE(l),y=vE(l),N=y.length,L=0;L<N;L++)f.call(void 0,y[L],g&&g[L],l)}var Lh=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function TE(l,f){if(l){l=l.split("&");for(var g=0;g<l.length;g++){var y=l[g].indexOf("="),N=null;if(0<=y){var L=l[g].substring(0,y);N=l[g].substring(y+1)}else L=l[g];f(L,N?decodeURIComponent(N.replace(/\+/g," ")):"")}}}function _r(l){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,l instanceof _r){this.h=l.h,So(this,l.j),this.o=l.o,this.g=l.g,ko(this,l.s),this.l=l.l;var f=l.i,g=new Qi;g.i=f.i,f.g&&(g.g=new Map(f.g),g.h=f.h),Vh(this,g),this.m=l.m}else l&&(f=String(l).match(Lh))?(this.h=!1,So(this,f[1]||"",!0),this.o=Hi(f[2]||""),this.g=Hi(f[3]||"",!0),ko(this,f[4]),this.l=Hi(f[5]||"",!0),Vh(this,f[6]||"",!0),this.m=Hi(f[7]||"")):(this.h=!1,this.i=new Qi(null,this.h))}_r.prototype.toString=function(){var l=[],f=this.j;f&&l.push(Ki(f,Mh,!0),":");var g=this.g;return(g||f=="file")&&(l.push("//"),(f=this.o)&&l.push(Ki(f,Mh,!0),"@"),l.push(encodeURIComponent(String(g)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),g=this.s,g!=null&&l.push(":",String(g))),(g=this.l)&&(this.g&&g.charAt(0)!="/"&&l.push("/"),l.push(Ki(g,g.charAt(0)=="/"?RE:AE,!0))),(g=this.i.toString())&&l.push("?",g),(g=this.m)&&l.push("#",Ki(g,SE)),l.join("")};function pn(l){return new _r(l)}function So(l,f,g){l.j=g?Hi(f,!0):f,l.j&&(l.j=l.j.replace(/:$/,""))}function ko(l,f){if(f){if(f=Number(f),isNaN(f)||0>f)throw Error("Bad port number "+f);l.s=f}else l.s=null}function Vh(l,f,g){f instanceof Qi?(l.i=f,kE(l.i,l.h)):(g||(f=Ki(f,bE)),l.i=new Qi(f,l.h))}function ke(l,f,g){l.i.set(f,g)}function Co(l){return ke(l,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),l}function Hi(l,f){return l?f?decodeURI(l.replace(/%25/g,"%2525")):decodeURIComponent(l):""}function Ki(l,f,g){return typeof l=="string"?(l=encodeURI(l).replace(f,IE),g&&(l=l.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),l):null}function IE(l){return l=l.charCodeAt(0),"%"+(l>>4&15).toString(16)+(l&15).toString(16)}var Mh=/[#\/\?@]/g,AE=/[#\?:]/g,RE=/[#\?]/g,bE=/[#\?@]/g,SE=/#/g;function Qi(l,f){this.h=this.g=null,this.i=l||null,this.j=!!f}function qn(l){l.g||(l.g=new Map,l.h=0,l.i&&TE(l.i,function(f,g){l.add(decodeURIComponent(f.replace(/\+/g," ")),g)}))}n=Qi.prototype,n.add=function(l,f){qn(this),this.i=null,l=Hr(this,l);var g=this.g.get(l);return g||this.g.set(l,g=[]),g.push(f),this.h+=1,this};function xh(l,f){qn(l),f=Hr(l,f),l.g.has(f)&&(l.i=null,l.h-=l.g.get(f).length,l.g.delete(f))}function Uh(l,f){return qn(l),f=Hr(l,f),l.g.has(f)}n.forEach=function(l,f){qn(this),this.g.forEach(function(g,y){g.forEach(function(N){l.call(f,N,y,this)},this)},this)},n.na=function(){qn(this);const l=Array.from(this.g.values()),f=Array.from(this.g.keys()),g=[];for(let y=0;y<f.length;y++){const N=l[y];for(let L=0;L<N.length;L++)g.push(f[y])}return g},n.V=function(l){qn(this);let f=[];if(typeof l=="string")Uh(this,l)&&(f=f.concat(this.g.get(Hr(this,l))));else{l=Array.from(this.g.values());for(let g=0;g<l.length;g++)f=f.concat(l[g])}return f},n.set=function(l,f){return qn(this),this.i=null,l=Hr(this,l),Uh(this,l)&&(this.h-=this.g.get(l).length),this.g.set(l,[f]),this.h+=1,this},n.get=function(l,f){return l?(l=this.V(l),0<l.length?String(l[0]):f):f};function Fh(l,f,g){xh(l,f),0<g.length&&(l.i=null,l.g.set(Hr(l,f),v(g)),l.h+=g.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const l=[],f=Array.from(this.g.keys());for(var g=0;g<f.length;g++){var y=f[g];const L=encodeURIComponent(String(y)),G=this.V(y);for(y=0;y<G.length;y++){var N=L;G[y]!==""&&(N+="="+encodeURIComponent(String(G[y]))),l.push(N)}}return this.i=l.join("&")};function Hr(l,f){return f=String(f),l.j&&(f=f.toLowerCase()),f}function kE(l,f){f&&!l.j&&(qn(l),l.i=null,l.g.forEach(function(g,y){var N=y.toLowerCase();y!=N&&(xh(this,y),Fh(this,N,g))},l)),l.j=f}function CE(l,f){const g=new Gi;if(a.Image){const y=new Image;y.onload=_(jn,g,"TestLoadImage: loaded",!0,f,y),y.onerror=_(jn,g,"TestLoadImage: error",!1,f,y),y.onabort=_(jn,g,"TestLoadImage: abort",!1,f,y),y.ontimeout=_(jn,g,"TestLoadImage: timeout",!1,f,y),a.setTimeout(function(){y.ontimeout&&y.ontimeout()},1e4),y.src=l}else f(!1)}function PE(l,f){const g=new Gi,y=new AbortController,N=setTimeout(()=>{y.abort(),jn(g,"TestPingServer: timeout",!1,f)},1e4);fetch(l,{signal:y.signal}).then(L=>{clearTimeout(N),L.ok?jn(g,"TestPingServer: ok",!0,f):jn(g,"TestPingServer: server error",!1,f)}).catch(()=>{clearTimeout(N),jn(g,"TestPingServer: error",!1,f)})}function jn(l,f,g,y,N){try{N&&(N.onload=null,N.onerror=null,N.onabort=null,N.ontimeout=null),y(g)}catch(L){}}function NE(){this.g=new fE}function DE(l,f,g){const y=g||"";try{Oh(l,function(N,L){let G=N;u(N)&&(G=Uc(N)),f.push(y+L+"="+encodeURIComponent(G))})}catch(N){throw f.push(y+"type="+encodeURIComponent("_badmap")),N}}function Po(l){this.l=l.Ub||null,this.j=l.eb||!1}w(Po,Fc),Po.prototype.g=function(){return new No(this.l,this.j)},Po.prototype.i=function(l){return function(){return l}}({});function No(l,f){st.call(this),this.D=l,this.o=f,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}w(No,st),n=No.prototype,n.open=function(l,f){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=l,this.A=f,this.readyState=1,Ji(this)},n.send=function(l){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const f={headers:this.u,method:this.B,credentials:this.m,cache:void 0};l&&(f.body=l),(this.D||a).fetch(new Request(this.A,f)).then(this.Sa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Yi(this)),this.readyState=0},n.Sa=function(l){if(this.g&&(this.l=l,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=l.headers,this.readyState=2,Ji(this)),this.g&&(this.readyState=3,Ji(this),this.g)))if(this.responseType==="arraybuffer")l.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof a.ReadableStream!="undefined"&&"body"in l){if(this.j=l.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Bh(this)}else l.text().then(this.Ra.bind(this),this.ga.bind(this))};function Bh(l){l.j.read().then(l.Pa.bind(l)).catch(l.ga.bind(l))}n.Pa=function(l){if(this.g){if(this.o&&l.value)this.response.push(l.value);else if(!this.o){var f=l.value?l.value:new Uint8Array(0);(f=this.v.decode(f,{stream:!l.done}))&&(this.response=this.responseText+=f)}l.done?Yi(this):Ji(this),this.readyState==3&&Bh(this)}},n.Ra=function(l){this.g&&(this.response=this.responseText=l,Yi(this))},n.Qa=function(l){this.g&&(this.response=l,Yi(this))},n.ga=function(){this.g&&Yi(this)};function Yi(l){l.readyState=4,l.l=null,l.j=null,l.v=null,Ji(l)}n.setRequestHeader=function(l,f){this.u.append(l,f)},n.getResponseHeader=function(l){return this.h&&this.h.get(l.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const l=[],f=this.h.entries();for(var g=f.next();!g.done;)g=g.value,l.push(g[0]+": "+g[1]),g=f.next();return l.join(`\r
`)};function Ji(l){l.onreadystatechange&&l.onreadystatechange.call(l)}Object.defineProperty(No.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(l){this.m=l?"include":"same-origin"}});function $h(l){let f="";return K(l,function(g,y){f+=y,f+=":",f+=g,f+=`\r
`}),f}function Qc(l,f,g){e:{for(y in g){var y=!1;break e}y=!0}y||(g=$h(g),typeof l=="string"?g!=null&&encodeURIComponent(String(g)):ke(l,f,g))}function xe(l){st.call(this),this.headers=new Map,this.o=l||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}w(xe,st);var OE=/^https?$/i,LE=["POST","PUT"];n=xe.prototype,n.Ha=function(l){this.J=l},n.ea=function(l,f,g,y){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+l);f=f?f.toUpperCase():"GET",this.D=l,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():qc.g(),this.v=this.o?gh(this.o):gh(qc),this.g.onreadystatechange=m(this.Ea,this);try{this.B=!0,this.g.open(f,String(l),!0),this.B=!1}catch(L){qh(this,L);return}if(l=g||"",g=new Map(this.headers),y)if(Object.getPrototypeOf(y)===Object.prototype)for(var N in y)g.set(N,y[N]);else if(typeof y.keys=="function"&&typeof y.get=="function")for(const L of y.keys())g.set(L,y.get(L));else throw Error("Unknown input type for opt_headers: "+String(y));y=Array.from(g.keys()).find(L=>L.toLowerCase()=="content-type"),N=a.FormData&&l instanceof a.FormData,!(0<=Array.prototype.indexOf.call(LE,f,void 0))||y||N||g.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[L,G]of g)this.g.setRequestHeader(L,G);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Gh(this),this.u=!0,this.g.send(l),this.u=!1}catch(L){qh(this,L)}};function qh(l,f){l.h=!1,l.g&&(l.j=!0,l.g.abort(),l.j=!1),l.l=f,l.m=5,jh(l),Do(l)}function jh(l){l.A||(l.A=!0,gt(l,"complete"),gt(l,"error"))}n.abort=function(l){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=l||7,gt(this,"complete"),gt(this,"abort"),Do(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Do(this,!0)),xe.aa.N.call(this)},n.Ea=function(){this.s||(this.B||this.u||this.j?zh(this):this.bb())},n.bb=function(){zh(this)};function zh(l){if(l.h&&typeof o!="undefined"&&(!l.v[1]||gn(l)!=4||l.Z()!=2)){if(l.u&&gn(l)==4)hh(l.Ea,0,l);else if(gt(l,"readystatechange"),gn(l)==4){l.h=!1;try{const G=l.Z();e:switch(G){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var f=!0;break e;default:f=!1}var g;if(!(g=f)){var y;if(y=G===0){var N=String(l.D).match(Lh)[1]||null;!N&&a.self&&a.self.location&&(N=a.self.location.protocol.slice(0,-1)),y=!OE.test(N?N.toLowerCase():"")}g=y}if(g)gt(l,"complete"),gt(l,"success");else{l.m=6;try{var L=2<gn(l)?l.g.statusText:""}catch(be){L=""}l.l=L+" ["+l.Z()+"]",jh(l)}}finally{Do(l)}}}}function Do(l,f){if(l.g){Gh(l);const g=l.g,y=l.v[0]?()=>{}:null;l.g=null,l.v=null,f||gt(l,"ready");try{g.onreadystatechange=y}catch(N){}}}function Gh(l){l.I&&(a.clearTimeout(l.I),l.I=null)}n.isActive=function(){return!!this.g};function gn(l){return l.g?l.g.readyState:0}n.Z=function(){try{return 2<gn(this)?this.g.status:-1}catch(l){return-1}},n.oa=function(){try{return this.g?this.g.responseText:""}catch(l){return""}},n.Oa=function(l){if(this.g){var f=this.g.responseText;return l&&f.indexOf(l)==0&&(f=f.substring(l.length)),hE(f)}};function Wh(l){try{if(!l.g)return null;if("response"in l.g)return l.g.response;switch(l.H){case"":case"text":return l.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in l.g)return l.g.mozResponseArrayBuffer}return null}catch(f){return null}}function VE(l){const f={};l=(l.g&&2<=gn(l)&&l.g.getAllResponseHeaders()||"").split(`\r
`);for(let y=0;y<l.length;y++){if(O(l[y]))continue;var g=k(l[y]);const N=g[0];if(g=g[1],typeof g!="string")continue;g=g.trim();const L=f[N]||[];f[N]=L,L.push(g)}R(f,function(y){return y.join(", ")})}n.Ba=function(){return this.m},n.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Xi(l,f,g){return g&&g.internalChannelParams&&g.internalChannelParams[l]||f}function Hh(l){this.Aa=0,this.i=[],this.j=new Gi,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Xi("failFast",!1,l),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Xi("baseRetryDelayMs",5e3,l),this.cb=Xi("retryDelaySeedMs",1e4,l),this.Wa=Xi("forwardChannelMaxRetries",2,l),this.wa=Xi("forwardChannelRequestTimeoutMs",2e4,l),this.pa=l&&l.xmlHttpFactory||void 0,this.Xa=l&&l.Tb||void 0,this.Ca=l&&l.useFetchStreams||!1,this.L=void 0,this.J=l&&l.supportsCrossDomainXhr||!1,this.K="",this.h=new kh(l&&l.concurrentRequestLimit),this.Da=new NE,this.P=l&&l.fastHandshake||!1,this.O=l&&l.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=l&&l.Rb||!1,l&&l.xa&&this.j.xa(),l&&l.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&l&&l.detectBufferingProxy||!1,this.ja=void 0,l&&l.longPollingTimeout&&0<l.longPollingTimeout&&(this.ja=l.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}n=Hh.prototype,n.la=8,n.G=1,n.connect=function(l,f,g,y){_t(0),this.W=l,this.H=f||{},g&&y!==void 0&&(this.H.OSID=g,this.H.OAID=y),this.F=this.X,this.I=nf(this,null,this.W),Lo(this)};function Yc(l){if(Kh(l),l.G==3){var f=l.U++,g=pn(l.I);if(ke(g,"SID",l.K),ke(g,"RID",f),ke(g,"TYPE","terminate"),Zi(l,g),f=new $n(l,l.j,f),f.L=2,f.v=Co(pn(g)),g=!1,a.navigator&&a.navigator.sendBeacon)try{g=a.navigator.sendBeacon(f.v.toString(),"")}catch(y){}!g&&a.Image&&(new Image().src=f.v,g=!0),g||(f.g=rf(f.j,null),f.g.ea(f.v)),f.F=Date.now(),bo(f)}tf(l)}function Oo(l){l.g&&(Xc(l),l.g.cancel(),l.g=null)}function Kh(l){Oo(l),l.u&&(a.clearTimeout(l.u),l.u=null),Vo(l),l.h.cancel(),l.s&&(typeof l.s=="number"&&a.clearTimeout(l.s),l.s=null)}function Lo(l){if(!Ch(l.h)&&!l.s){l.s=!0;var f=l.Ga;Ui||ah(),Fi||(Ui(),Fi=!0),Pc.add(f,l),l.B=0}}function ME(l,f){return Ph(l.h)>=l.h.j-(l.s?1:0)?!1:l.s?(l.i=f.D.concat(l.i),!0):l.G==1||l.G==2||l.B>=(l.Va?0:l.Wa)?!1:(l.s=zi(m(l.Ga,l,f),ef(l,l.B)),l.B++,!0)}n.Ga=function(l){if(this.s)if(this.s=null,this.G==1){if(!l){this.U=Math.floor(1e5*Math.random()),l=this.U++;const N=new $n(this,this.j,l);let L=this.o;if(this.S&&(L?(L=T(L),b(L,this.S)):L=this.S),this.m!==null||this.O||(N.H=L,L=null),this.P)e:{for(var f=0,g=0;g<this.i.length;g++){t:{var y=this.i[g];if("__data__"in y.map&&(y=y.map.__data__,typeof y=="string")){y=y.length;break t}y=void 0}if(y===void 0)break;if(f+=y,4096<f){f=g;break e}if(f===4096||g===this.i.length-1){f=g+1;break e}}f=1e3}else f=1e3;f=Yh(this,N,f),g=pn(this.I),ke(g,"RID",l),ke(g,"CVER",22),this.D&&ke(g,"X-HTTP-Session-Id",this.D),Zi(this,g),L&&(this.O?f="headers="+encodeURIComponent(String($h(L)))+"&"+f:this.m&&Qc(g,this.m,L)),Kc(this.h,N),this.Ua&&ke(g,"TYPE","init"),this.P?(ke(g,"$req",f),ke(g,"SID","null"),N.T=!0,zc(N,g,null)):zc(N,g,f),this.G=2}}else this.G==3&&(l?Qh(this,l):this.i.length==0||Ch(this.h)||Qh(this))};function Qh(l,f){var g;f?g=f.l:g=l.U++;const y=pn(l.I);ke(y,"SID",l.K),ke(y,"RID",g),ke(y,"AID",l.T),Zi(l,y),l.m&&l.o&&Qc(y,l.m,l.o),g=new $n(l,l.j,g,l.B+1),l.m===null&&(g.H=l.o),f&&(l.i=f.D.concat(l.i)),f=Yh(l,g,1e3),g.I=Math.round(.5*l.wa)+Math.round(.5*l.wa*Math.random()),Kc(l.h,g),zc(g,y,f)}function Zi(l,f){l.H&&K(l.H,function(g,y){ke(f,y,g)}),l.l&&Oh({},function(g,y){ke(f,y,g)})}function Yh(l,f,g){g=Math.min(l.i.length,g);var y=l.l?m(l.l.Na,l.l,l):null;e:{var N=l.i;let L=-1;for(;;){const G=["count="+g];L==-1?0<g?(L=N[0].g,G.push("ofs="+L)):L=0:G.push("ofs="+L);let be=!0;for(let et=0;et<g;et++){let ve=N[et].g;const ot=N[et].map;if(ve-=L,0>ve)L=Math.max(0,N[et].g-100),be=!1;else try{DE(ot,G,"req"+ve+"_")}catch(at){y&&y(ot)}}if(be){y=G.join("&");break e}}}return l=l.i.splice(0,g),f.D=l,y}function Jh(l){if(!l.g&&!l.u){l.Y=1;var f=l.Fa;Ui||ah(),Fi||(Ui(),Fi=!0),Pc.add(f,l),l.v=0}}function Jc(l){return l.g||l.u||3<=l.v?!1:(l.Y++,l.u=zi(m(l.Fa,l),ef(l,l.v)),l.v++,!0)}n.Fa=function(){if(this.u=null,Xh(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var l=2*this.R;this.j.info("BP detection timer enabled: "+l),this.A=zi(m(this.ab,this),l)}},n.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,_t(10),Oo(this),Xh(this))};function Xc(l){l.A!=null&&(a.clearTimeout(l.A),l.A=null)}function Xh(l){l.g=new $n(l,l.j,"rpc",l.Y),l.m===null&&(l.g.H=l.o),l.g.O=0;var f=pn(l.qa);ke(f,"RID","rpc"),ke(f,"SID",l.K),ke(f,"AID",l.T),ke(f,"CI",l.F?"0":"1"),!l.F&&l.ja&&ke(f,"TO",l.ja),ke(f,"TYPE","xmlhttp"),Zi(l,f),l.m&&l.o&&Qc(f,l.m,l.o),l.L&&(l.g.I=l.L);var g=l.g;l=l.ia,g.L=1,g.v=Co(pn(f)),g.m=null,g.P=!0,Rh(g,l)}n.Za=function(){this.C!=null&&(this.C=null,Oo(this),Jc(this),_t(19))};function Vo(l){l.C!=null&&(a.clearTimeout(l.C),l.C=null)}function Zh(l,f){var g=null;if(l.g==f){Vo(l),Xc(l),l.g=null;var y=2}else if(Hc(l.h,f))g=f.D,Nh(l.h,f),y=1;else return;if(l.G!=0){if(f.o)if(y==1){g=f.m?f.m.length:0,f=Date.now()-f.F;var N=l.B;y=Io(),gt(y,new Eh(y,g)),Lo(l)}else Jh(l);else if(N=f.s,N==3||N==0&&0<f.X||!(y==1&&ME(l,f)||y==2&&Jc(l)))switch(g&&0<g.length&&(f=l.h,f.i=f.i.concat(g)),N){case 1:yr(l,5);break;case 4:yr(l,10);break;case 3:yr(l,6);break;default:yr(l,2)}}}function ef(l,f){let g=l.Ta+Math.floor(Math.random()*l.cb);return l.isActive()||(g*=2),g*f}function yr(l,f){if(l.j.info("Error code "+f),f==2){var g=m(l.fb,l),y=l.Xa;const N=!y;y=new _r(y||"//www.google.com/images/cleardot.gif"),a.location&&a.location.protocol=="http"||So(y,"https"),Co(y),N?CE(y.toString(),g):PE(y.toString(),g)}else _t(2);l.G=0,l.l&&l.l.sa(f),tf(l),Kh(l)}n.fb=function(l){l?(this.j.info("Successfully pinged google.com"),_t(2)):(this.j.info("Failed to ping google.com"),_t(1))};function tf(l){if(l.G=0,l.ka=[],l.l){const f=Dh(l.h);(f.length!=0||l.i.length!=0)&&(E(l.ka,f),E(l.ka,l.i),l.h.i.length=0,v(l.i),l.i.length=0),l.l.ra()}}function nf(l,f,g){var y=g instanceof _r?pn(g):new _r(g);if(y.g!="")f&&(y.g=f+"."+y.g),ko(y,y.s);else{var N=a.location;y=N.protocol,f=f?f+"."+N.hostname:N.hostname,N=+N.port;var L=new _r(null);y&&So(L,y),f&&(L.g=f),N&&ko(L,N),g&&(L.l=g),y=L}return g=l.D,f=l.ya,g&&f&&ke(y,g,f),ke(y,"VER",l.la),Zi(l,y),y}function rf(l,f,g){if(f&&!l.J)throw Error("Can't create secondary domain capable XhrIo object.");return f=l.Ca&&!l.pa?new xe(new Po({eb:g})):new xe(l.pa),f.Ha(l.J),f}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function sf(){}n=sf.prototype,n.ua=function(){},n.ta=function(){},n.sa=function(){},n.ra=function(){},n.isActive=function(){return!0},n.Na=function(){};function Mo(){}Mo.prototype.g=function(l,f){return new St(l,f)};function St(l,f){st.call(this),this.g=new Hh(f),this.l=l,this.h=f&&f.messageUrlParams||null,l=f&&f.messageHeaders||null,f&&f.clientProtocolHeaderRequired&&(l?l["X-Client-Protocol"]="webchannel":l={"X-Client-Protocol":"webchannel"}),this.g.o=l,l=f&&f.initMessageHeaders||null,f&&f.messageContentType&&(l?l["X-WebChannel-Content-Type"]=f.messageContentType:l={"X-WebChannel-Content-Type":f.messageContentType}),f&&f.va&&(l?l["X-WebChannel-Client-Profile"]=f.va:l={"X-WebChannel-Client-Profile":f.va}),this.g.S=l,(l=f&&f.Sb)&&!O(l)&&(this.g.m=l),this.v=f&&f.supportsCrossDomainXhr||!1,this.u=f&&f.sendRawJson||!1,(f=f&&f.httpSessionIdParam)&&!O(f)&&(this.g.D=f,l=this.h,l!==null&&f in l&&(l=this.h,f in l&&delete l[f])),this.j=new Kr(this)}w(St,st),St.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},St.prototype.close=function(){Yc(this.g)},St.prototype.o=function(l){var f=this.g;if(typeof l=="string"){var g={};g.__data__=l,l=g}else this.u&&(g={},g.__data__=Uc(l),l=g);f.i.push(new wE(f.Ya++,l)),f.G==3&&Lo(f)},St.prototype.N=function(){this.g.l=null,delete this.j,Yc(this.g),delete this.g,St.aa.N.call(this)};function of(l){Bc.call(this),l.__headers__&&(this.headers=l.__headers__,this.statusCode=l.__status__,delete l.__headers__,delete l.__status__);var f=l.__sm__;if(f){e:{for(const g in f){l=g;break e}l=void 0}(this.i=l)&&(l=this.i,f=f!==null&&l in f?f[l]:void 0),this.data=f}else this.data=l}w(of,Bc);function af(){$c.call(this),this.status=1}w(af,$c);function Kr(l){this.g=l}w(Kr,sf),Kr.prototype.ua=function(){gt(this.g,"a")},Kr.prototype.ta=function(l){gt(this.g,new of(l))},Kr.prototype.sa=function(l){gt(this.g,new af)},Kr.prototype.ra=function(){gt(this.g,"b")},Mo.prototype.createWebChannel=Mo.prototype.g,St.prototype.send=St.prototype.o,St.prototype.open=St.prototype.m,St.prototype.close=St.prototype.close,s_=function(){return new Mo},i_=function(){return Io()},r_=pr,Ml={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Ao.NO_ERROR=0,Ao.TIMEOUT=8,Ao.HTTP_ERROR=6,ea=Ao,Th.COMPLETE="complete",n_=Th,_h.EventType=qi,qi.OPEN="a",qi.CLOSE="b",qi.ERROR="c",qi.MESSAGE="d",st.prototype.listen=st.prototype.K,as=_h,xe.prototype.listenOnce=xe.prototype.L,xe.prototype.getLastError=xe.prototype.Ka,xe.prototype.getLastErrorCode=xe.prototype.Ba,xe.prototype.getStatus=xe.prototype.Z,xe.prototype.getResponseJson=xe.prototype.Oa,xe.prototype.getResponseText=xe.prototype.oa,xe.prototype.send=xe.prototype.ea,xe.prototype.setWithCredentials=xe.prototype.Ha,t_=xe}).apply(typeof Fo!="undefined"?Fo:typeof self!="undefined"?self:typeof window!="undefined"?window:{});const zf="@firebase/firestore",Gf="4.8.0";/**
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
 */class lt{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}lt.UNAUTHENTICATED=new lt(null),lt.GOOGLE_CREDENTIALS=new lt("google-credentials-uid"),lt.FIRST_PARTY=new lt("first-party-uid"),lt.MOCK_USER=new lt("mock-user");/**
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
 */let Si="11.10.0";/**
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
 */const Cr=new Hs("@firebase/firestore");function Jr(){return Cr.logLevel}function Y(n,...e){if(Cr.logLevel<=de.DEBUG){const t=e.map(qu);Cr.debug(`Firestore (${Si}): ${n}`,...t)}}function Dn(n,...e){if(Cr.logLevel<=de.ERROR){const t=e.map(qu);Cr.error(`Firestore (${Si}): ${n}`,...t)}}function On(n,...e){if(Cr.logLevel<=de.WARN){const t=e.map(qu);Cr.warn(`Firestore (${Si}): ${n}`,...t)}}function qu(n){if(typeof n=="string")return n;try{/**
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
 */function ie(n,e,t){let r="Unexpected state";typeof e=="string"?r=e:t=e,o_(n,r,t)}function o_(n,e,t){let r=`FIRESTORE (${Si}) INTERNAL ASSERTION FAILED: ${e} (ID: ${n.toString(16)})`;if(t!==void 0)try{r+=" CONTEXT: "+JSON.stringify(t)}catch(i){r+=" CONTEXT: "+t}throw Dn(r),new Error(r)}function Ie(n,e,t,r){let i="Unexpected state";typeof t=="string"?i=t:r=t,n||o_(e,i,r)}function ae(n,e){return n}/**
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
 */const V={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class W extends Bt{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class Rn{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}/**
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
 */class a_{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class c_{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(lt.UNAUTHENTICATED))}shutdown(){}}class VR{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class MR{constructor(e){this.t=e,this.currentUser=lt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){Ie(this.o===void 0,42304);let r=this.i;const i=c=>this.i!==r?(r=this.i,t(c)):Promise.resolve();let s=new Rn;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new Rn,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const c=s;e.enqueueRetryable(()=>p(this,null,function*(){yield c.promise,yield i(this.currentUser)}))},a=c=>{Y("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit(c=>a(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?a(c):(Y("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new Rn)}},0),o()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(r=>this.i!==e?(Y("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(Ie(typeof r.accessToken=="string",31837,{l:r}),new a_(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return Ie(e===null||typeof e=="string",2055,{h:e}),new lt(e)}}class xR{constructor(e,t,r){this.P=e,this.T=t,this.I=r,this.type="FirstParty",this.user=lt.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class UR{constructor(e,t,r){this.P=e,this.T=t,this.I=r}getToken(){return Promise.resolve(new xR(this.P,this.T,this.I))}start(e,t){e.enqueueRetryable(()=>t(lt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Wf{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class FR{constructor(e,t){this.V=t,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,wt(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,t){Ie(this.o===void 0,3512);const r=s=>{s.error!=null&&Y("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.m;return this.m=s.token,Y("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?t(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{Y("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.V.getImmediate({optional:!0});s?i(s):Y("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.p)return Promise.resolve(new Wf(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(t=>t?(Ie(typeof t.token=="string",44558,{tokenResult:t}),this.m=t.token,new Wf(t.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function BR(n){const e=typeof self!="undefined"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let r=0;r<n;r++)t[r]=Math.floor(256*Math.random());return t}/**
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
 */function l_(){return new TextEncoder}/**
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
 */class ec{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const i=BR(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<t&&(r+=e.charAt(i[s]%62))}return r}}function ue(n,e){return n<e?-1:n>e?1:0}function xl(n,e){let t=0;for(;t<n.length&&t<e.length;){const r=n.codePointAt(t),i=e.codePointAt(t);if(r!==i){if(r<128&&i<128)return ue(r,i);{const s=l_(),o=$R(s.encode(Hf(n,t)),s.encode(Hf(e,t)));return o!==0?o:ue(r,i)}}t+=r>65535?2:1}return ue(n.length,e.length)}function Hf(n,e){return n.codePointAt(e)>65535?n.substring(e,e+2):n.substring(e,e+1)}function $R(n,e){for(let t=0;t<n.length&&t<e.length;++t)if(n[t]!==e[t])return ue(n[t],e[t]);return ue(n.length,e.length)}function mi(n,e,t){return n.length===e.length&&n.every((r,i)=>t(r,e[i]))}/**
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
 */const Kf="__name__";class nn{constructor(e,t,r){t===void 0?t=0:t>e.length&&ie(637,{offset:t,range:e.length}),r===void 0?r=e.length-t:r>e.length-t&&ie(1746,{length:r,range:e.length-t}),this.segments=e,this.offset=t,this.len=r}get length(){return this.len}isEqual(e){return nn.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof nn?e.forEach(r=>{t.push(r)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,r=this.limit();t<r;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const r=Math.min(e.length,t.length);for(let i=0;i<r;i++){const s=nn.compareSegments(e.get(i),t.get(i));if(s!==0)return s}return ue(e.length,t.length)}static compareSegments(e,t){const r=nn.isNumericId(e),i=nn.isNumericId(t);return r&&!i?-1:!r&&i?1:r&&i?nn.extractNumericId(e).compare(nn.extractNumericId(t)):xl(e,t)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return Jn.fromString(e.substring(4,e.length-2))}}class Se extends nn{construct(e,t,r){return new Se(e,t,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const r of e){if(r.indexOf("//")>=0)throw new W(V.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);t.push(...r.split("/").filter(i=>i.length>0))}return new Se(t)}static emptyPath(){return new Se([])}}const qR=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Je extends nn{construct(e,t,r){return new Je(e,t,r)}static isValidIdentifier(e){return qR.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Je.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===Kf}static keyField(){return new Je([Kf])}static fromServerFormat(e){const t=[];let r="",i=0;const s=()=>{if(r.length===0)throw new W(V.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(r),r=""};let o=!1;for(;i<e.length;){const a=e[i];if(a==="\\"){if(i+1===e.length)throw new W(V.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const c=e[i+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new W(V.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=c,i+=2}else a==="`"?(o=!o,i++):a!=="."||o?(r+=a,i++):(s(),i++)}if(s(),o)throw new W(V.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Je(t)}static emptyPath(){return new Je([])}}/**
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
 */class ee{constructor(e){this.path=e}static fromPath(e){return new ee(Se.fromString(e))}static fromName(e){return new ee(Se.fromString(e).popFirst(5))}static empty(){return new ee(Se.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Se.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return Se.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new ee(new Se(e.slice()))}}/**
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
 */function ju(n,e,t){if(!t)throw new W(V.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${e}.`)}function u_(n,e,t,r){if(e===!0&&r===!0)throw new W(V.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function Qf(n){if(!ee.isDocumentKey(n))throw new W(V.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function Yf(n){if(ee.isDocumentKey(n))throw new W(V.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function d_(n){return typeof n=="object"&&n!==null&&(Object.getPrototypeOf(n)===Object.prototype||Object.getPrototypeOf(n)===null)}function tc(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":ie(12329,{type:typeof n})}function nt(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new W(V.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=tc(n);throw new W(V.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}function jR(n,e){if(e<=0)throw new W(V.INVALID_ARGUMENT,`Function ${n}() requires a positive number, but it was: ${e}.`)}/**
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
 */function je(n,e){const t={typeString:n};return e&&(t.value=e),t}function Zs(n,e){if(!d_(n))throw new W(V.INVALID_ARGUMENT,"JSON must be an object");let t;for(const r in e)if(e[r]){const i=e[r].typeString,s="value"in e[r]?{value:e[r].value}:void 0;if(!(r in n)){t=`JSON missing required field: '${r}'`;break}const o=n[r];if(i&&typeof o!==i){t=`JSON field '${r}' must be a ${i}.`;break}if(s!==void 0&&o!==s.value){t=`Expected '${r}' field to equal '${s.value}'`;break}}if(t)throw new W(V.INVALID_ARGUMENT,t);return!0}/**
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
 */const Jf=-62135596800,Xf=1e6;class ${static now(){return $.fromMillis(Date.now())}static fromDate(e){return $.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),r=Math.floor((e-1e3*t)*Xf);return new $(t,r)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new W(V.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new W(V.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<Jf)throw new W(V.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new W(V.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/Xf}_compareTo(e){return this.seconds===e.seconds?ue(this.nanoseconds,e.nanoseconds):ue(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:$._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(Zs(e,$._jsonSchema))return new $(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-Jf;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}$._jsonSchemaVersion="firestore/timestamp/1.0",$._jsonSchema={type:je("string",$._jsonSchemaVersion),seconds:je("number"),nanoseconds:je("number")};/**
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
 */class oe{static fromTimestamp(e){return new oe(e)}static min(){return new oe(new $(0,0))}static max(){return new oe(new $(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */const Ds=-1;function zR(n,e){const t=n.toTimestamp().seconds,r=n.toTimestamp().nanoseconds+1,i=oe.fromTimestamp(r===1e9?new $(t+1,0):new $(t,r));return new rr(i,ee.empty(),e)}function GR(n){return new rr(n.readTime,n.key,Ds)}class rr{constructor(e,t,r){this.readTime=e,this.documentKey=t,this.largestBatchId=r}static min(){return new rr(oe.min(),ee.empty(),Ds)}static max(){return new rr(oe.max(),ee.empty(),Ds)}}function WR(n,e){let t=n.readTime.compareTo(e.readTime);return t!==0?t:(t=ee.comparator(n.documentKey,e.documentKey),t!==0?t:ue(n.largestBatchId,e.largestBatchId))}/**
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
 */const HR="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class KR{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */function ki(n){return p(this,null,function*(){if(n.code!==V.FAILED_PRECONDITION||n.message!==HR)throw n;Y("LocalStore","Unexpectedly lost primary lease")})}/**
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
 */class B{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)},t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&ie(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new B((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(t,s).next(r,i)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{const t=e();return t instanceof B?t:B.resolve(t)}catch(t){return B.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):B.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):B.reject(t)}static resolve(e){return new B((t,r)=>{t(e)})}static reject(e){return new B((t,r)=>{r(e)})}static waitFor(e){return new B((t,r)=>{let i=0,s=0,o=!1;e.forEach(a=>{++i,a.next(()=>{++s,o&&s===i&&t()},c=>r(c))}),o=!0,s===i&&t()})}static or(e){let t=B.resolve(!1);for(const r of e)t=t.next(i=>i?B.resolve(i):r());return t}static forEach(e,t){const r=[];return e.forEach((i,s)=>{r.push(t.call(this,i,s))}),this.waitFor(r)}static mapArray(e,t){return new B((r,i)=>{const s=e.length,o=new Array(s);let a=0;for(let c=0;c<s;c++){const u=c;t(e[u]).next(d=>{o[u]=d,++a,a===s&&r(o)},d=>i(d))}})}static doWhile(e,t){return new B((r,i)=>{const s=()=>{e()===!0?t().next(()=>{s()},i):r()};s()})}}function QR(n){const e=n.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function Ci(n){return n.name==="IndexedDbTransactionError"}/**
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
 */class nc{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=r=>this._e(r),this.ae=r=>t.writeSequenceNumber(r))}_e(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ae&&this.ae(e),e}}nc.ue=-1;/**
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
 */const zu=-1;function rc(n){return n==null}function ya(n){return n===0&&1/n==-1/0}function YR(n){return typeof n=="number"&&Number.isInteger(n)&&!ya(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
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
 */const h_="";function JR(n){let e="";for(let t=0;t<n.length;t++)e.length>0&&(e=Zf(e)),e=XR(n.get(t),e);return Zf(e)}function XR(n,e){let t=e;const r=n.length;for(let i=0;i<r;i++){const s=n.charAt(i);switch(s){case"\0":t+="";break;case h_:t+="";break;default:t+=s}}return t}function Zf(n){return n+h_+""}/**
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
 */function em(n){let e=0;for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function fr(n,e){for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}function f_(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}/**
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
 */let ze=class Ul{constructor(e,t){this.comparator=e,this.root=t||Xn.EMPTY}insert(e,t){return new Ul(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,Xn.BLACK,null,null))}remove(e){return new Ul(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Xn.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const r=this.comparator(e,t.key);if(r===0)return t.value;r<0?t=t.left:r>0&&(t=t.right)}return null}indexOf(e){let t=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return t+r.left.size;i<0?r=r.left:(t+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,r)=>(e(t,r),!1))}toString(){const e=[];return this.inorderTraversal((t,r)=>(e.push(`${t}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Bo(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Bo(this.root,e,this.comparator,!1)}getReverseIterator(){return new Bo(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Bo(this.root,e,this.comparator,!0)}},Bo=class{constructor(e,t,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=t?r(e.key,t):1,t&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}},Xn=class _n{constructor(e,t,r,i,s){this.key=e,this.value=t,this.color=r!=null?r:_n.RED,this.left=i!=null?i:_n.EMPTY,this.right=s!=null?s:_n.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,r,i,s){return new _n(e!=null?e:this.key,t!=null?t:this.value,r!=null?r:this.color,i!=null?i:this.left,s!=null?s:this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,t,r),null):s===0?i.copy(null,t,null,null,null):i.copy(null,null,null,null,i.right.insert(e,t,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return _n.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let r,i=this;if(t(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,t),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),t(e,i.key)===0){if(i.right.isEmpty())return _n.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,t))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,_n.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,_n.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw ie(43730,{key:this.key,value:this.value});if(this.right.isRed())throw ie(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw ie(27949);return e+(this.isRed()?0:1)}};Xn.EMPTY=null,Xn.RED=!0,Xn.BLACK=!1;Xn.EMPTY=new class{constructor(){this.size=0}get key(){throw ie(57766)}get value(){throw ie(16141)}get color(){throw ie(16727)}get left(){throw ie(29726)}get right(){throw ie(36894)}copy(e,t,r,i,s){return this}insert(e,t,r){return new Xn(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class He{constructor(e){this.comparator=e,this.data=new ze(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,r)=>(e(t),!1))}forEachInRange(e,t){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;t(i.key)}}forEachWhile(e,t){let r;for(r=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new tm(this.data.getIterator())}getIteratorFrom(e){return new tm(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(r=>{t=t.add(r)}),t}isEqual(e){if(!(e instanceof He)||this.size!==e.size)return!1;const t=this.data.getIterator(),r=e.data.getIterator();for(;t.hasNext();){const i=t.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(t=>{e.push(t)}),e}toString(){const e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){const t=new He(this.comparator);return t.data=e,t}}class tm{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class Nt{constructor(e){this.fields=e,e.sort(Je.comparator)}static empty(){return new Nt([])}unionWith(e){let t=new He(Je.comparator);for(const r of this.fields)t=t.add(r);for(const r of e)t=t.add(r);return new Nt(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return mi(this.fields,e.fields,(t,r)=>t.isEqual(r))}}/**
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
 */class m_ extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class Ze{constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(i){try{return atob(i)}catch(s){throw typeof DOMException!="undefined"&&s instanceof DOMException?new m_("Invalid base64 string: "+s):s}}(e);return new Ze(t)}static fromUint8Array(e){const t=function(i){let s="";for(let o=0;o<i.length;++o)s+=String.fromCharCode(i[o]);return s}(e);return new Ze(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(t){return btoa(t)}(this.binaryString)}toUint8Array(){return function(t){const r=new Uint8Array(t.length);for(let i=0;i<t.length;i++)r[i]=t.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return ue(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Ze.EMPTY_BYTE_STRING=new Ze("");const ZR=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function ir(n){if(Ie(!!n,39018),typeof n=="string"){let e=0;const t=ZR.exec(n);if(Ie(!!t,46558,{timestamp:n}),t[1]){let i=t[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(n);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Be(n.seconds),nanos:Be(n.nanos)}}function Be(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function sr(n){return typeof n=="string"?Ze.fromBase64String(n):Ze.fromUint8Array(n)}/**
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
 */const p_="server_timestamp",g_="__type__",__="__previous_value__",y_="__local_write_time__";function Gu(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{})[g_])===null||t===void 0?void 0:t.stringValue)===p_}function ic(n){const e=n.mapValue.fields[__];return Gu(e)?ic(e):e}function Os(n){const e=ir(n.mapValue.fields[y_].timestampValue);return new $(e.seconds,e.nanos)}/**
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
 */class eb{constructor(e,t,r,i,s,o,a,c,u,d){this.databaseId=e,this.appId=t,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=c,this.useFetchStreams=u,this.isUsingEmulator=d}}const wa="(default)";class pi{constructor(e,t){this.projectId=e,this.database=t||wa}static empty(){return new pi("","")}get isDefaultDatabase(){return this.database===wa}isEqual(e){return e instanceof pi&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const w_="__type__",v_="__max__",$o={mapValue:{fields:{__type__:{stringValue:v_}}}},E_="__vector__",va="value";function or(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?Gu(n)?4:nb(n)?9007199254740991:tb(n)?10:11:ie(28295,{value:n})}function ln(n,e){if(n===e)return!0;const t=or(n);if(t!==or(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return Os(n).isEqual(Os(e));case 3:return function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;const o=ir(i.timestampValue),a=ir(s.timestampValue);return o.seconds===a.seconds&&o.nanos===a.nanos}(n,e);case 5:return n.stringValue===e.stringValue;case 6:return function(i,s){return sr(i.bytesValue).isEqual(sr(s.bytesValue))}(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return function(i,s){return Be(i.geoPointValue.latitude)===Be(s.geoPointValue.latitude)&&Be(i.geoPointValue.longitude)===Be(s.geoPointValue.longitude)}(n,e);case 2:return function(i,s){if("integerValue"in i&&"integerValue"in s)return Be(i.integerValue)===Be(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){const o=Be(i.doubleValue),a=Be(s.doubleValue);return o===a?ya(o)===ya(a):isNaN(o)&&isNaN(a)}return!1}(n,e);case 9:return mi(n.arrayValue.values||[],e.arrayValue.values||[],ln);case 10:case 11:return function(i,s){const o=i.mapValue.fields||{},a=s.mapValue.fields||{};if(em(o)!==em(a))return!1;for(const c in o)if(o.hasOwnProperty(c)&&(a[c]===void 0||!ln(o[c],a[c])))return!1;return!0}(n,e);default:return ie(52216,{left:n})}}function Ls(n,e){return(n.values||[]).find(t=>ln(t,e))!==void 0}function gi(n,e){if(n===e)return 0;const t=or(n),r=or(e);if(t!==r)return ue(t,r);switch(t){case 0:case 9007199254740991:return 0;case 1:return ue(n.booleanValue,e.booleanValue);case 2:return function(s,o){const a=Be(s.integerValue||s.doubleValue),c=Be(o.integerValue||o.doubleValue);return a<c?-1:a>c?1:a===c?0:isNaN(a)?isNaN(c)?0:-1:1}(n,e);case 3:return nm(n.timestampValue,e.timestampValue);case 4:return nm(Os(n),Os(e));case 5:return xl(n.stringValue,e.stringValue);case 6:return function(s,o){const a=sr(s),c=sr(o);return a.compareTo(c)}(n.bytesValue,e.bytesValue);case 7:return function(s,o){const a=s.split("/"),c=o.split("/");for(let u=0;u<a.length&&u<c.length;u++){const d=ue(a[u],c[u]);if(d!==0)return d}return ue(a.length,c.length)}(n.referenceValue,e.referenceValue);case 8:return function(s,o){const a=ue(Be(s.latitude),Be(o.latitude));return a!==0?a:ue(Be(s.longitude),Be(o.longitude))}(n.geoPointValue,e.geoPointValue);case 9:return rm(n.arrayValue,e.arrayValue);case 10:return function(s,o){var a,c,u,d;const h=s.fields||{},m=o.fields||{},_=(a=h[va])===null||a===void 0?void 0:a.arrayValue,w=(c=m[va])===null||c===void 0?void 0:c.arrayValue,v=ue(((u=_==null?void 0:_.values)===null||u===void 0?void 0:u.length)||0,((d=w==null?void 0:w.values)===null||d===void 0?void 0:d.length)||0);return v!==0?v:rm(_,w)}(n.mapValue,e.mapValue);case 11:return function(s,o){if(s===$o.mapValue&&o===$o.mapValue)return 0;if(s===$o.mapValue)return 1;if(o===$o.mapValue)return-1;const a=s.fields||{},c=Object.keys(a),u=o.fields||{},d=Object.keys(u);c.sort(),d.sort();for(let h=0;h<c.length&&h<d.length;++h){const m=xl(c[h],d[h]);if(m!==0)return m;const _=gi(a[c[h]],u[d[h]]);if(_!==0)return _}return ue(c.length,d.length)}(n.mapValue,e.mapValue);default:throw ie(23264,{le:t})}}function nm(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return ue(n,e);const t=ir(n),r=ir(e),i=ue(t.seconds,r.seconds);return i!==0?i:ue(t.nanos,r.nanos)}function rm(n,e){const t=n.values||[],r=e.values||[];for(let i=0;i<t.length&&i<r.length;++i){const s=gi(t[i],r[i]);if(s)return s}return ue(t.length,r.length)}function _i(n){return Fl(n)}function Fl(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?function(t){const r=ir(t);return`time(${r.seconds},${r.nanos})`}(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?function(t){return sr(t).toBase64()}(n.bytesValue):"referenceValue"in n?function(t){return ee.fromName(t).toString()}(n.referenceValue):"geoPointValue"in n?function(t){return`geo(${t.latitude},${t.longitude})`}(n.geoPointValue):"arrayValue"in n?function(t){let r="[",i=!0;for(const s of t.values||[])i?i=!1:r+=",",r+=Fl(s);return r+"]"}(n.arrayValue):"mapValue"in n?function(t){const r=Object.keys(t.fields||{}).sort();let i="{",s=!0;for(const o of r)s?s=!1:i+=",",i+=`${o}:${Fl(t.fields[o])}`;return i+"}"}(n.mapValue):ie(61005,{value:n})}function ta(n){switch(or(n)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=ic(n);return e?16+ta(e):16;case 5:return 2*n.stringValue.length;case 6:return sr(n.bytesValue).approximateByteSize();case 7:return n.referenceValue.length;case 9:return function(r){return(r.values||[]).reduce((i,s)=>i+ta(s),0)}(n.arrayValue);case 10:case 11:return function(r){let i=0;return fr(r.fields,(s,o)=>{i+=s.length+ta(o)}),i}(n.mapValue);default:throw ie(13486,{value:n})}}function im(n,e){return{referenceValue:`projects/${n.projectId}/databases/${n.database}/documents/${e.path.canonicalString()}`}}function Bl(n){return!!n&&"integerValue"in n}function Wu(n){return!!n&&"arrayValue"in n}function sm(n){return!!n&&"nullValue"in n}function om(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function na(n){return!!n&&"mapValue"in n}function tb(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{})[w_])===null||t===void 0?void 0:t.stringValue)===E_}function ps(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){const e={mapValue:{fields:{}}};return fr(n.mapValue.fields,(t,r)=>e.mapValue.fields[t]=ps(r)),e}if(n.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=ps(n.arrayValue.values[t]);return e}return Object.assign({},n)}function nb(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue===v_}/**
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
 */class It{constructor(e){this.value=e}static empty(){return new It({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let r=0;r<e.length-1;++r)if(t=(t.mapValue.fields||{})[e.get(r)],!na(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=ps(t)}setAll(e){let t=Je.emptyPath(),r={},i=[];e.forEach((o,a)=>{if(!t.isImmediateParentOf(a)){const c=this.getFieldsMap(t);this.applyChanges(c,r,i),r={},i=[],t=a.popLast()}o?r[a.lastSegment()]=ps(o):i.push(a.lastSegment())});const s=this.getFieldsMap(t);this.applyChanges(s,r,i)}delete(e){const t=this.field(e.popLast());na(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return ln(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=t.mapValue.fields[e.get(r)];na(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},t.mapValue.fields[e.get(r)]=i),t=i}return t.mapValue.fields}applyChanges(e,t,r){fr(t,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new It(ps(this.value))}}function T_(n){const e=[];return fr(n.fields,(t,r)=>{const i=new Je([t]);if(na(r)){const s=T_(r.mapValue).fields;if(s.length===0)e.push(i);else for(const o of s)e.push(i.child(o))}else e.push(i)}),new Nt(e)}/**
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
 */class ut{constructor(e,t,r,i,s,o,a){this.key=e,this.documentType=t,this.version=r,this.readTime=i,this.createTime=s,this.data=o,this.documentState=a}static newInvalidDocument(e){return new ut(e,0,oe.min(),oe.min(),oe.min(),It.empty(),0)}static newFoundDocument(e,t,r,i){return new ut(e,1,t,oe.min(),r,i,0)}static newNoDocument(e,t){return new ut(e,2,t,oe.min(),oe.min(),It.empty(),0)}static newUnknownDocument(e,t){return new ut(e,3,t,oe.min(),oe.min(),It.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(oe.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=It.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=It.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=oe.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof ut&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new ut(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Ea{constructor(e,t){this.position=e,this.inclusive=t}}function am(n,e,t){let r=0;for(let i=0;i<n.position.length;i++){const s=e[i],o=n.position[i];if(s.field.isKeyField()?r=ee.comparator(ee.fromName(o.referenceValue),t.key):r=gi(o,t.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function cm(n,e){if(n===null)return e===null;if(e===null||n.inclusive!==e.inclusive||n.position.length!==e.position.length)return!1;for(let t=0;t<n.position.length;t++)if(!ln(n.position[t],e.position[t]))return!1;return!0}/**
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
 */class Vs{constructor(e,t="asc"){this.field=e,this.dir=t}}function rb(n,e){return n.dir===e.dir&&n.field.isEqual(e.field)}/**
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
 */class I_{}class qe extends I_{constructor(e,t,r){super(),this.field=e,this.op=t,this.value=r}static create(e,t,r){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,r):new sb(e,t,r):t==="array-contains"?new cb(e,r):t==="in"?new lb(e,r):t==="not-in"?new ub(e,r):t==="array-contains-any"?new db(e,r):new qe(e,t,r)}static createKeyFieldInFilter(e,t,r){return t==="in"?new ob(e,r):new ab(e,r)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&t.nullValue===void 0&&this.matchesComparison(gi(t,this.value)):t!==null&&or(this.value)===or(t)&&this.matchesComparison(gi(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return ie(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Yt extends I_{constructor(e,t){super(),this.filters=e,this.op=t,this.he=null}static create(e,t){return new Yt(e,t)}matches(e){return A_(this)?this.filters.find(t=>!t.matches(e))===void 0:this.filters.find(t=>t.matches(e))!==void 0}getFlattenedFilters(){return this.he!==null||(this.he=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.he}getFilters(){return Object.assign([],this.filters)}}function A_(n){return n.op==="and"}function R_(n){return ib(n)&&A_(n)}function ib(n){for(const e of n.filters)if(e instanceof Yt)return!1;return!0}function $l(n){if(n instanceof qe)return n.field.canonicalString()+n.op.toString()+_i(n.value);if(R_(n))return n.filters.map(e=>$l(e)).join(",");{const e=n.filters.map(t=>$l(t)).join(",");return`${n.op}(${e})`}}function b_(n,e){return n instanceof qe?function(r,i){return i instanceof qe&&r.op===i.op&&r.field.isEqual(i.field)&&ln(r.value,i.value)}(n,e):n instanceof Yt?function(r,i){return i instanceof Yt&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((s,o,a)=>s&&b_(o,i.filters[a]),!0):!1}(n,e):void ie(19439)}function S_(n){return n instanceof qe?function(t){return`${t.field.canonicalString()} ${t.op} ${_i(t.value)}`}(n):n instanceof Yt?function(t){return t.op.toString()+" {"+t.getFilters().map(S_).join(" ,")+"}"}(n):"Filter"}class sb extends qe{constructor(e,t,r){super(e,t,r),this.key=ee.fromName(r.referenceValue)}matches(e){const t=ee.comparator(e.key,this.key);return this.matchesComparison(t)}}class ob extends qe{constructor(e,t){super(e,"in",t),this.keys=k_("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class ab extends qe{constructor(e,t){super(e,"not-in",t),this.keys=k_("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function k_(n,e){var t;return(((t=e.arrayValue)===null||t===void 0?void 0:t.values)||[]).map(r=>ee.fromName(r.referenceValue))}class cb extends qe{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return Wu(t)&&Ls(t.arrayValue,this.value)}}class lb extends qe{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&Ls(this.value.arrayValue,t)}}class ub extends qe{constructor(e,t){super(e,"not-in",t)}matches(e){if(Ls(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&t.nullValue===void 0&&!Ls(this.value.arrayValue,t)}}class db extends qe{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!Wu(t)||!t.arrayValue.values)&&t.arrayValue.values.some(r=>Ls(this.value.arrayValue,r))}}/**
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
 */class hb{constructor(e,t=null,r=[],i=[],s=null,o=null,a=null){this.path=e,this.collectionGroup=t,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=a,this.Pe=null}}function lm(n,e=null,t=[],r=[],i=null,s=null,o=null){return new hb(n,e,t,r,i,s,o)}function Hu(n){const e=ae(n);if(e.Pe===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map(r=>$l(r)).join(","),t+="|ob:",t+=e.orderBy.map(r=>function(s){return s.field.canonicalString()+s.dir}(r)).join(","),rc(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(r=>_i(r)).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(r=>_i(r)).join(",")),e.Pe=t}return e.Pe}function Ku(n,e){if(n.limit!==e.limit||n.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<n.orderBy.length;t++)if(!rb(n.orderBy[t],e.orderBy[t]))return!1;if(n.filters.length!==e.filters.length)return!1;for(let t=0;t<n.filters.length;t++)if(!b_(n.filters[t],e.filters[t]))return!1;return n.collectionGroup===e.collectionGroup&&!!n.path.isEqual(e.path)&&!!cm(n.startAt,e.startAt)&&cm(n.endAt,e.endAt)}function ql(n){return ee.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
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
 */class $r{constructor(e,t=null,r=[],i=[],s=null,o="F",a=null,c=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=a,this.endAt=c,this.Te=null,this.Ie=null,this.de=null}}function fb(n,e,t,r,i,s,o,a){return new $r(n,e,t,r,i,s,o,a)}function sc(n){return new $r(n)}function um(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function C_(n){return n.collectionGroup!==null}function gs(n){const e=ae(n);if(e.Te===null){e.Te=[];const t=new Set;for(const s of e.explicitOrderBy)e.Te.push(s),t.add(s.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let a=new He(Je.comparator);return o.filters.forEach(c=>{c.getFlattenedFilters().forEach(u=>{u.isInequality()&&(a=a.add(u.field))})}),a})(e).forEach(s=>{t.has(s.canonicalString())||s.isKeyField()||e.Te.push(new Vs(s,r))}),t.has(Je.keyField().canonicalString())||e.Te.push(new Vs(Je.keyField(),r))}return e.Te}function an(n){const e=ae(n);return e.Ie||(e.Ie=mb(e,gs(n))),e.Ie}function mb(n,e){if(n.limitType==="F")return lm(n.path,n.collectionGroup,e,n.filters,n.limit,n.startAt,n.endAt);{e=e.map(i=>{const s=i.dir==="desc"?"asc":"desc";return new Vs(i.field,s)});const t=n.endAt?new Ea(n.endAt.position,n.endAt.inclusive):null,r=n.startAt?new Ea(n.startAt.position,n.startAt.inclusive):null;return lm(n.path,n.collectionGroup,e,n.filters,n.limit,t,r)}}function jl(n,e){const t=n.filters.concat([e]);return new $r(n.path,n.collectionGroup,n.explicitOrderBy.slice(),t,n.limit,n.limitType,n.startAt,n.endAt)}function Ta(n,e,t){return new $r(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),e,t,n.startAt,n.endAt)}function oc(n,e){return Ku(an(n),an(e))&&n.limitType===e.limitType}function P_(n){return`${Hu(an(n))}|lt:${n.limitType}`}function Xr(n){return`Query(target=${function(t){let r=t.path.canonicalString();return t.collectionGroup!==null&&(r+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(r+=`, filters: [${t.filters.map(i=>S_(i)).join(", ")}]`),rc(t.limit)||(r+=", limit: "+t.limit),t.orderBy.length>0&&(r+=`, orderBy: [${t.orderBy.map(i=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(i)).join(", ")}]`),t.startAt&&(r+=", startAt: ",r+=t.startAt.inclusive?"b:":"a:",r+=t.startAt.position.map(i=>_i(i)).join(",")),t.endAt&&(r+=", endAt: ",r+=t.endAt.inclusive?"a:":"b:",r+=t.endAt.position.map(i=>_i(i)).join(",")),`Target(${r})`}(an(n))}; limitType=${n.limitType})`}function ac(n,e){return e.isFoundDocument()&&function(r,i){const s=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(s):ee.isDocumentKey(r.path)?r.path.isEqual(s):r.path.isImmediateParentOf(s)}(n,e)&&function(r,i){for(const s of gs(r))if(!s.field.isKeyField()&&i.data.field(s.field)===null)return!1;return!0}(n,e)&&function(r,i){for(const s of r.filters)if(!s.matches(i))return!1;return!0}(n,e)&&function(r,i){return!(r.startAt&&!function(o,a,c){const u=am(o,a,c);return o.inclusive?u<=0:u<0}(r.startAt,gs(r),i)||r.endAt&&!function(o,a,c){const u=am(o,a,c);return o.inclusive?u>=0:u>0}(r.endAt,gs(r),i))}(n,e)}function pb(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function N_(n){return(e,t)=>{let r=!1;for(const i of gs(n)){const s=gb(i,e,t);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function gb(n,e,t){const r=n.field.isKeyField()?ee.comparator(e.key,t.key):function(s,o,a){const c=o.data.field(s),u=a.data.field(s);return c!==null&&u!==null?gi(c,u):ie(42886)}(n.field,e,t);switch(n.dir){case"asc":return r;case"desc":return-1*r;default:return ie(19790,{direction:n.dir})}}/**
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
 */class qr{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,t){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,t]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,t]);i.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[t]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){fr(this.inner,(t,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return f_(this.inner)}size(){return this.innerSize}}/**
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
 */const _b=new ze(ee.comparator);function Ln(){return _b}const D_=new ze(ee.comparator);function cs(...n){let e=D_;for(const t of n)e=e.insert(t.key,t);return e}function O_(n){let e=D_;return n.forEach((t,r)=>e=e.insert(t,r.overlayedDocument)),e}function Ir(){return _s()}function L_(){return _s()}function _s(){return new qr(n=>n.toString(),(n,e)=>n.isEqual(e))}const yb=new ze(ee.comparator),wb=new He(ee.comparator);function he(...n){let e=wb;for(const t of n)e=e.add(t);return e}const vb=new He(ue);function Eb(){return vb}/**
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
 */function Qu(n,e){if(n.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:ya(e)?"-0":e}}function V_(n){return{integerValue:""+n}}function Tb(n,e){return YR(e)?V_(e):Qu(n,e)}/**
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
 */class cc{constructor(){this._=void 0}}function Ib(n,e,t){return n instanceof Ms?function(i,s){const o={fields:{[g_]:{stringValue:p_},[y_]:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return s&&Gu(s)&&(s=ic(s)),s&&(o.fields[__]=s),{mapValue:o}}(t,e):n instanceof xs?x_(n,e):n instanceof Us?U_(n,e):function(i,s){const o=M_(i,s),a=dm(o)+dm(i.Ee);return Bl(o)&&Bl(i.Ee)?V_(a):Qu(i.serializer,a)}(n,e)}function Ab(n,e,t){return n instanceof xs?x_(n,e):n instanceof Us?U_(n,e):t}function M_(n,e){return n instanceof Ia?function(r){return Bl(r)||function(s){return!!s&&"doubleValue"in s}(r)}(e)?e:{integerValue:0}:null}class Ms extends cc{}class xs extends cc{constructor(e){super(),this.elements=e}}function x_(n,e){const t=F_(e);for(const r of n.elements)t.some(i=>ln(i,r))||t.push(r);return{arrayValue:{values:t}}}class Us extends cc{constructor(e){super(),this.elements=e}}function U_(n,e){let t=F_(e);for(const r of n.elements)t=t.filter(i=>!ln(i,r));return{arrayValue:{values:t}}}class Ia extends cc{constructor(e,t){super(),this.serializer=e,this.Ee=t}}function dm(n){return Be(n.integerValue||n.doubleValue)}function F_(n){return Wu(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}/**
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
 */class Rb{constructor(e,t){this.field=e,this.transform=t}}function bb(n,e){return n.field.isEqual(e.field)&&function(r,i){return r instanceof xs&&i instanceof xs||r instanceof Us&&i instanceof Us?mi(r.elements,i.elements,ln):r instanceof Ia&&i instanceof Ia?ln(r.Ee,i.Ee):r instanceof Ms&&i instanceof Ms}(n.transform,e.transform)}class Sb{constructor(e,t){this.version=e,this.transformResults=t}}class vt{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new vt}static exists(e){return new vt(void 0,e)}static updateTime(e){return new vt(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function ra(n,e){return n.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(n.updateTime):n.exists===void 0||n.exists===e.isFoundDocument()}class lc{}function B_(n,e){if(!n.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return n.isNoDocument()?new uc(n.key,vt.none()):new eo(n.key,n.data,vt.none());{const t=n.data,r=It.empty();let i=new He(Je.comparator);for(let s of e.fields)if(!i.has(s)){let o=t.field(s);o===null&&s.length>1&&(s=s.popLast(),o=t.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new mr(n.key,r,new Nt(i.toArray()),vt.none())}}function kb(n,e,t){n instanceof eo?function(i,s,o){const a=i.value.clone(),c=fm(i.fieldTransforms,s,o.transformResults);a.setAll(c),s.convertToFoundDocument(o.version,a).setHasCommittedMutations()}(n,e,t):n instanceof mr?function(i,s,o){if(!ra(i.precondition,s))return void s.convertToUnknownDocument(o.version);const a=fm(i.fieldTransforms,s,o.transformResults),c=s.data;c.setAll($_(i)),c.setAll(a),s.convertToFoundDocument(o.version,c).setHasCommittedMutations()}(n,e,t):function(i,s,o){s.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,t)}function ys(n,e,t,r){return n instanceof eo?function(s,o,a,c){if(!ra(s.precondition,o))return a;const u=s.value.clone(),d=mm(s.fieldTransforms,c,o);return u.setAll(d),o.convertToFoundDocument(o.version,u).setHasLocalMutations(),null}(n,e,t,r):n instanceof mr?function(s,o,a,c){if(!ra(s.precondition,o))return a;const u=mm(s.fieldTransforms,c,o),d=o.data;return d.setAll($_(s)),d.setAll(u),o.convertToFoundDocument(o.version,d).setHasLocalMutations(),a===null?null:a.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(h=>h.field))}(n,e,t,r):function(s,o,a){return ra(s.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):a}(n,e,t)}function Cb(n,e){let t=null;for(const r of n.fieldTransforms){const i=e.data.field(r.field),s=M_(r.transform,i||null);s!=null&&(t===null&&(t=It.empty()),t.set(r.field,s))}return t||null}function hm(n,e){return n.type===e.type&&!!n.key.isEqual(e.key)&&!!n.precondition.isEqual(e.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&mi(r,i,(s,o)=>bb(s,o))}(n.fieldTransforms,e.fieldTransforms)&&(n.type===0?n.value.isEqual(e.value):n.type!==1||n.data.isEqual(e.data)&&n.fieldMask.isEqual(e.fieldMask))}class eo extends lc{constructor(e,t,r,i=[]){super(),this.key=e,this.value=t,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class mr extends lc{constructor(e,t,r,i,s=[]){super(),this.key=e,this.data=t,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function $_(n){const e=new Map;return n.fieldMask.fields.forEach(t=>{if(!t.isEmpty()){const r=n.data.field(t);e.set(t,r)}}),e}function fm(n,e,t){const r=new Map;Ie(n.length===t.length,32656,{Ae:t.length,Re:n.length});for(let i=0;i<t.length;i++){const s=n[i],o=s.transform,a=e.data.field(s.field);r.set(s.field,Ab(o,a,t[i]))}return r}function mm(n,e,t){const r=new Map;for(const i of n){const s=i.transform,o=t.data.field(i.field);r.set(i.field,Ib(s,o,e))}return r}class uc extends lc{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class Pb extends lc{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class Nb{constructor(e,t,r,i){this.batchId=e,this.localWriteTime=t,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,t){const r=t.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&kb(s,e,r[i])}}applyToLocalView(e,t){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(t=ys(r,e,t,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(t=ys(r,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const r=L_();return this.mutations.forEach(i=>{const s=e.get(i.key),o=s.overlayedDocument;let a=this.applyToLocalView(o,s.mutatedFields);a=t.has(i.key)?null:a;const c=B_(o,a);c!==null&&r.set(i.key,c),o.isValidDocument()||o.convertToNoDocument(oe.min())}),r}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),he())}isEqual(e){return this.batchId===e.batchId&&mi(this.mutations,e.mutations,(t,r)=>hm(t,r))&&mi(this.baseMutations,e.baseMutations,(t,r)=>hm(t,r))}}class Yu{constructor(e,t,r,i){this.batch=e,this.commitVersion=t,this.mutationResults=r,this.docVersions=i}static from(e,t,r){Ie(e.mutations.length===r.length,58842,{Ve:e.mutations.length,me:r.length});let i=function(){return yb}();const s=e.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new Yu(e,t,r,i)}}/**
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
 */class Db{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class Ob{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
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
 */var $e,ge;function Lb(n){switch(n){case V.OK:return ie(64938);case V.CANCELLED:case V.UNKNOWN:case V.DEADLINE_EXCEEDED:case V.RESOURCE_EXHAUSTED:case V.INTERNAL:case V.UNAVAILABLE:case V.UNAUTHENTICATED:return!1;case V.INVALID_ARGUMENT:case V.NOT_FOUND:case V.ALREADY_EXISTS:case V.PERMISSION_DENIED:case V.FAILED_PRECONDITION:case V.ABORTED:case V.OUT_OF_RANGE:case V.UNIMPLEMENTED:case V.DATA_LOSS:return!0;default:return ie(15467,{code:n})}}function q_(n){if(n===void 0)return Dn("GRPC error has no .code"),V.UNKNOWN;switch(n){case $e.OK:return V.OK;case $e.CANCELLED:return V.CANCELLED;case $e.UNKNOWN:return V.UNKNOWN;case $e.DEADLINE_EXCEEDED:return V.DEADLINE_EXCEEDED;case $e.RESOURCE_EXHAUSTED:return V.RESOURCE_EXHAUSTED;case $e.INTERNAL:return V.INTERNAL;case $e.UNAVAILABLE:return V.UNAVAILABLE;case $e.UNAUTHENTICATED:return V.UNAUTHENTICATED;case $e.INVALID_ARGUMENT:return V.INVALID_ARGUMENT;case $e.NOT_FOUND:return V.NOT_FOUND;case $e.ALREADY_EXISTS:return V.ALREADY_EXISTS;case $e.PERMISSION_DENIED:return V.PERMISSION_DENIED;case $e.FAILED_PRECONDITION:return V.FAILED_PRECONDITION;case $e.ABORTED:return V.ABORTED;case $e.OUT_OF_RANGE:return V.OUT_OF_RANGE;case $e.UNIMPLEMENTED:return V.UNIMPLEMENTED;case $e.DATA_LOSS:return V.DATA_LOSS;default:return ie(39323,{code:n})}}(ge=$e||($e={}))[ge.OK=0]="OK",ge[ge.CANCELLED=1]="CANCELLED",ge[ge.UNKNOWN=2]="UNKNOWN",ge[ge.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",ge[ge.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",ge[ge.NOT_FOUND=5]="NOT_FOUND",ge[ge.ALREADY_EXISTS=6]="ALREADY_EXISTS",ge[ge.PERMISSION_DENIED=7]="PERMISSION_DENIED",ge[ge.UNAUTHENTICATED=16]="UNAUTHENTICATED",ge[ge.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",ge[ge.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",ge[ge.ABORTED=10]="ABORTED",ge[ge.OUT_OF_RANGE=11]="OUT_OF_RANGE",ge[ge.UNIMPLEMENTED=12]="UNIMPLEMENTED",ge[ge.INTERNAL=13]="INTERNAL",ge[ge.UNAVAILABLE=14]="UNAVAILABLE",ge[ge.DATA_LOSS=15]="DATA_LOSS";/**
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
 */const Vb=new Jn([4294967295,4294967295],0);function pm(n){const e=l_().encode(n),t=new e_;return t.update(e),new Uint8Array(t.digest())}function gm(n){const e=new DataView(n.buffer),t=e.getUint32(0,!0),r=e.getUint32(4,!0),i=e.getUint32(8,!0),s=e.getUint32(12,!0);return[new Jn([t,r],0),new Jn([i,s],0)]}class Ju{constructor(e,t,r){if(this.bitmap=e,this.padding=t,this.hashCount=r,t<0||t>=8)throw new ls(`Invalid padding: ${t}`);if(r<0)throw new ls(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new ls(`Invalid hash count: ${r}`);if(e.length===0&&t!==0)throw new ls(`Invalid padding when bitmap length is 0: ${t}`);this.fe=8*e.length-t,this.ge=Jn.fromNumber(this.fe)}pe(e,t,r){let i=e.add(t.multiply(Jn.fromNumber(r)));return i.compare(Vb)===1&&(i=new Jn([i.getBits(0),i.getBits(1)],0)),i.modulo(this.ge).toNumber()}ye(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.fe===0)return!1;const t=pm(e),[r,i]=gm(t);for(let s=0;s<this.hashCount;s++){const o=this.pe(r,i,s);if(!this.ye(o))return!1}return!0}static create(e,t,r){const i=e%8==0?0:8-e%8,s=new Uint8Array(Math.ceil(e/8)),o=new Ju(s,i,t);return r.forEach(a=>o.insert(a)),o}insert(e){if(this.fe===0)return;const t=pm(e),[r,i]=gm(t);for(let s=0;s<this.hashCount;s++){const o=this.pe(r,i,s);this.we(o)}}we(e){const t=Math.floor(e/8),r=e%8;this.bitmap[t]|=1<<r}}class ls extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class dc{constructor(e,t,r,i,s){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,t,r){const i=new Map;return i.set(e,to.createSynthesizedTargetChangeForCurrentChange(e,t,r)),new dc(oe.min(),i,new ze(ue),Ln(),he())}}class to{constructor(e,t,r,i,s){this.resumeToken=e,this.current=t,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,t,r){return new to(r,t,he(),he(),he())}}/**
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
 */class ia{constructor(e,t,r,i){this.Se=e,this.removedTargetIds=t,this.key=r,this.be=i}}class j_{constructor(e,t){this.targetId=e,this.De=t}}class z_{constructor(e,t,r=Ze.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=t,this.resumeToken=r,this.cause=i}}class _m{constructor(){this.ve=0,this.Ce=ym(),this.Fe=Ze.EMPTY_BYTE_STRING,this.Me=!1,this.xe=!0}get current(){return this.Me}get resumeToken(){return this.Fe}get Oe(){return this.ve!==0}get Ne(){return this.xe}Be(e){e.approximateByteSize()>0&&(this.xe=!0,this.Fe=e)}Le(){let e=he(),t=he(),r=he();return this.Ce.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:t=t.add(i);break;case 1:r=r.add(i);break;default:ie(38017,{changeType:s})}}),new to(this.Fe,this.Me,e,t,r)}ke(){this.xe=!1,this.Ce=ym()}qe(e,t){this.xe=!0,this.Ce=this.Ce.insert(e,t)}Qe(e){this.xe=!0,this.Ce=this.Ce.remove(e)}$e(){this.ve+=1}Ue(){this.ve-=1,Ie(this.ve>=0,3241,{ve:this.ve})}Ke(){this.xe=!0,this.Me=!0}}class Mb{constructor(e){this.We=e,this.Ge=new Map,this.ze=Ln(),this.je=qo(),this.Je=qo(),this.He=new ze(ue)}Ye(e){for(const t of e.Se)e.be&&e.be.isFoundDocument()?this.Ze(t,e.be):this.Xe(t,e.key,e.be);for(const t of e.removedTargetIds)this.Xe(t,e.key,e.be)}et(e){this.forEachTarget(e,t=>{const r=this.tt(t);switch(e.state){case 0:this.nt(t)&&r.Be(e.resumeToken);break;case 1:r.Ue(),r.Oe||r.ke(),r.Be(e.resumeToken);break;case 2:r.Ue(),r.Oe||this.removeTarget(t);break;case 3:this.nt(t)&&(r.Ke(),r.Be(e.resumeToken));break;case 4:this.nt(t)&&(this.rt(t),r.Be(e.resumeToken));break;default:ie(56790,{state:e.state})}})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.Ge.forEach((r,i)=>{this.nt(i)&&t(i)})}it(e){const t=e.targetId,r=e.De.count,i=this.st(t);if(i){const s=i.target;if(ql(s))if(r===0){const o=new ee(s.path);this.Xe(t,o,ut.newNoDocument(o,oe.min()))}else Ie(r===1,20013,{expectedCount:r});else{const o=this.ot(t);if(o!==r){const a=this._t(e),c=a?this.ut(a,e,o):1;if(c!==0){this.rt(t);const u=c===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.He=this.He.insert(t,u)}}}}}_t(e){const t=e.De.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:r="",padding:i=0},hashCount:s=0}=t;let o,a;try{o=sr(r).toUint8Array()}catch(c){if(c instanceof m_)return On("Decoding the base64 bloom filter in existence filter failed ("+c.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw c}try{a=new Ju(o,i,s)}catch(c){return On(c instanceof ls?"BloomFilter error: ":"Applying bloom filter failed: ",c),null}return a.fe===0?null:a}ut(e,t,r){return t.De.count===r-this.ht(e,t.targetId)?0:2}ht(e,t){const r=this.We.getRemoteKeysForTarget(t);let i=0;return r.forEach(s=>{const o=this.We.lt(),a=`projects/${o.projectId}/databases/${o.database}/documents/${s.path.canonicalString()}`;e.mightContain(a)||(this.Xe(t,s,null),i++)}),i}Pt(e){const t=new Map;this.Ge.forEach((s,o)=>{const a=this.st(o);if(a){if(s.current&&ql(a.target)){const c=new ee(a.target.path);this.Tt(c).has(o)||this.It(o,c)||this.Xe(o,c,ut.newNoDocument(c,e))}s.Ne&&(t.set(o,s.Le()),s.ke())}});let r=he();this.Je.forEach((s,o)=>{let a=!0;o.forEachWhile(c=>{const u=this.st(c);return!u||u.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(r=r.add(s))}),this.ze.forEach((s,o)=>o.setReadTime(e));const i=new dc(e,t,this.He,this.ze,r);return this.ze=Ln(),this.je=qo(),this.Je=qo(),this.He=new ze(ue),i}Ze(e,t){if(!this.nt(e))return;const r=this.It(e,t.key)?2:0;this.tt(e).qe(t.key,r),this.ze=this.ze.insert(t.key,t),this.je=this.je.insert(t.key,this.Tt(t.key).add(e)),this.Je=this.Je.insert(t.key,this.dt(t.key).add(e))}Xe(e,t,r){if(!this.nt(e))return;const i=this.tt(e);this.It(e,t)?i.qe(t,1):i.Qe(t),this.Je=this.Je.insert(t,this.dt(t).delete(e)),this.Je=this.Je.insert(t,this.dt(t).add(e)),r&&(this.ze=this.ze.insert(t,r))}removeTarget(e){this.Ge.delete(e)}ot(e){const t=this.tt(e).Le();return this.We.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}$e(e){this.tt(e).$e()}tt(e){let t=this.Ge.get(e);return t||(t=new _m,this.Ge.set(e,t)),t}dt(e){let t=this.Je.get(e);return t||(t=new He(ue),this.Je=this.Je.insert(e,t)),t}Tt(e){let t=this.je.get(e);return t||(t=new He(ue),this.je=this.je.insert(e,t)),t}nt(e){const t=this.st(e)!==null;return t||Y("WatchChangeAggregator","Detected inactive target",e),t}st(e){const t=this.Ge.get(e);return t&&t.Oe?null:this.We.Et(e)}rt(e){this.Ge.set(e,new _m),this.We.getRemoteKeysForTarget(e).forEach(t=>{this.Xe(e,t,null)})}It(e,t){return this.We.getRemoteKeysForTarget(e).has(t)}}function qo(){return new ze(ee.comparator)}function ym(){return new ze(ee.comparator)}const xb={asc:"ASCENDING",desc:"DESCENDING"},Ub={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},Fb={and:"AND",or:"OR"};class Bb{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function zl(n,e){return n.useProto3Json||rc(e)?e:{value:e}}function Aa(n,e){return n.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function G_(n,e){return n.useProto3Json?e.toBase64():e.toUint8Array()}function $b(n,e){return Aa(n,e.toTimestamp())}function cn(n){return Ie(!!n,49232),oe.fromTimestamp(function(t){const r=ir(t);return new $(r.seconds,r.nanos)}(n))}function Xu(n,e){return Gl(n,e).canonicalString()}function Gl(n,e){const t=function(i){return new Se(["projects",i.projectId,"databases",i.database])}(n).child("documents");return e===void 0?t:t.child(e)}function W_(n){const e=Se.fromString(n);return Ie(J_(e),10190,{key:e.toString()}),e}function Wl(n,e){return Xu(n.databaseId,e.path)}function al(n,e){const t=W_(e);if(t.get(1)!==n.databaseId.projectId)throw new W(V.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+n.databaseId.projectId);if(t.get(3)!==n.databaseId.database)throw new W(V.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+n.databaseId.database);return new ee(K_(t))}function H_(n,e){return Xu(n.databaseId,e)}function qb(n){const e=W_(n);return e.length===4?Se.emptyPath():K_(e)}function Hl(n){return new Se(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function K_(n){return Ie(n.length>4&&n.get(4)==="documents",29091,{key:n.toString()}),n.popFirst(5)}function wm(n,e,t){return{name:Wl(n,e),fields:t.value.mapValue.fields}}function jb(n,e){let t;if("targetChange"in e){const r=function(u){return u==="NO_CHANGE"?0:u==="ADD"?1:u==="REMOVE"?2:u==="CURRENT"?3:u==="RESET"?4:ie(39313,{state:u})}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(u,d){return u.useProto3Json?(Ie(d===void 0||typeof d=="string",58123),Ze.fromBase64String(d||"")):(Ie(d===void 0||d instanceof Buffer||d instanceof Uint8Array,16193),Ze.fromUint8Array(d||new Uint8Array))}(n,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(u){const d=u.code===void 0?V.UNKNOWN:q_(u.code);return new W(d,u.message||"")}(o);t=new z_(r,i,s,a||null)}else if("documentChange"in e){const r=e.documentChange,i=al(n,r.document.name),s=cn(r.document.updateTime),o=r.document.createTime?cn(r.document.createTime):oe.min(),a=new It({mapValue:{fields:r.document.fields}}),c=ut.newFoundDocument(i,s,o,a),u=r.targetIds||[],d=r.removedTargetIds||[];t=new ia(u,d,c.key,c)}else if("documentDelete"in e){const r=e.documentDelete,i=al(n,r.document),s=r.readTime?cn(r.readTime):oe.min(),o=ut.newNoDocument(i,s),a=r.removedTargetIds||[];t=new ia([],a,o.key,o)}else if("documentRemove"in e){const r=e.documentRemove,i=al(n,r.document),s=r.removedTargetIds||[];t=new ia([],s,i,null)}else{if(!("filter"in e))return ie(11601,{At:e});{const r=e.filter,{count:i=0,unchangedNames:s}=r,o=new Ob(i,s),a=r.targetId;t=new j_(a,o)}}return t}function zb(n,e){let t;if(e instanceof eo)t={update:wm(n,e.key,e.value)};else if(e instanceof uc)t={delete:Wl(n,e.key)};else if(e instanceof mr)t={update:wm(n,e.key,e.data),updateMask:Zb(e.fieldMask)};else{if(!(e instanceof Pb))return ie(16599,{Rt:e.type});t={verify:Wl(n,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map(r=>function(s,o){const a=o.transform;if(a instanceof Ms)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(a instanceof xs)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:a.elements}};if(a instanceof Us)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:a.elements}};if(a instanceof Ia)return{fieldPath:o.field.canonicalString(),increment:a.Ee};throw ie(20930,{transform:o.transform})}(0,r))),e.precondition.isNone||(t.currentDocument=function(i,s){return s.updateTime!==void 0?{updateTime:$b(i,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:ie(27497)}(n,e.precondition)),t}function Gb(n,e){return n&&n.length>0?(Ie(e!==void 0,14353),n.map(t=>function(i,s){let o=i.updateTime?cn(i.updateTime):cn(s);return o.isEqual(oe.min())&&(o=cn(s)),new Sb(o,i.transformResults||[])}(t,e))):[]}function Wb(n,e){return{documents:[H_(n,e.path)]}}function Hb(n,e){const t={structuredQuery:{}},r=e.path;let i;e.collectionGroup!==null?(i=r,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(i=r.popLast(),t.structuredQuery.from=[{collectionId:r.lastSegment()}]),t.parent=H_(n,i);const s=function(u){if(u.length!==0)return Y_(Yt.create(u,"and"))}(e.filters);s&&(t.structuredQuery.where=s);const o=function(u){if(u.length!==0)return u.map(d=>function(m){return{field:Zr(m.field),direction:Yb(m.dir)}}(d))}(e.orderBy);o&&(t.structuredQuery.orderBy=o);const a=zl(n,e.limit);return a!==null&&(t.structuredQuery.limit=a),e.startAt&&(t.structuredQuery.startAt=function(u){return{before:u.inclusive,values:u.position}}(e.startAt)),e.endAt&&(t.structuredQuery.endAt=function(u){return{before:!u.inclusive,values:u.position}}(e.endAt)),{Vt:t,parent:i}}function Kb(n){let e=qb(n.parent);const t=n.structuredQuery,r=t.from?t.from.length:0;let i=null;if(r>0){Ie(r===1,65062);const d=t.from[0];d.allDescendants?i=d.collectionId:e=e.child(d.collectionId)}let s=[];t.where&&(s=function(h){const m=Q_(h);return m instanceof Yt&&R_(m)?m.getFilters():[m]}(t.where));let o=[];t.orderBy&&(o=function(h){return h.map(m=>function(w){return new Vs(ei(w.field),function(E){switch(E){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(w.direction))}(m))}(t.orderBy));let a=null;t.limit&&(a=function(h){let m;return m=typeof h=="object"?h.value:h,rc(m)?null:m}(t.limit));let c=null;t.startAt&&(c=function(h){const m=!!h.before,_=h.values||[];return new Ea(_,m)}(t.startAt));let u=null;return t.endAt&&(u=function(h){const m=!h.before,_=h.values||[];return new Ea(_,m)}(t.endAt)),fb(e,i,o,s,a,"F",c,u)}function Qb(n,e){const t=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return ie(28987,{purpose:i})}}(e.purpose);return t==null?null:{"goog-listen-tags":t}}function Q_(n){return n.unaryFilter!==void 0?function(t){switch(t.unaryFilter.op){case"IS_NAN":const r=ei(t.unaryFilter.field);return qe.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=ei(t.unaryFilter.field);return qe.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=ei(t.unaryFilter.field);return qe.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=ei(t.unaryFilter.field);return qe.create(o,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return ie(61313);default:return ie(60726)}}(n):n.fieldFilter!==void 0?function(t){return qe.create(ei(t.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return ie(58110);default:return ie(50506)}}(t.fieldFilter.op),t.fieldFilter.value)}(n):n.compositeFilter!==void 0?function(t){return Yt.create(t.compositeFilter.filters.map(r=>Q_(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return ie(1026)}}(t.compositeFilter.op))}(n):ie(30097,{filter:n})}function Yb(n){return xb[n]}function Jb(n){return Ub[n]}function Xb(n){return Fb[n]}function Zr(n){return{fieldPath:n.canonicalString()}}function ei(n){return Je.fromServerFormat(n.fieldPath)}function Y_(n){return n instanceof qe?function(t){if(t.op==="=="){if(om(t.value))return{unaryFilter:{field:Zr(t.field),op:"IS_NAN"}};if(sm(t.value))return{unaryFilter:{field:Zr(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(om(t.value))return{unaryFilter:{field:Zr(t.field),op:"IS_NOT_NAN"}};if(sm(t.value))return{unaryFilter:{field:Zr(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Zr(t.field),op:Jb(t.op),value:t.value}}}(n):n instanceof Yt?function(t){const r=t.getFilters().map(i=>Y_(i));return r.length===1?r[0]:{compositeFilter:{op:Xb(t.op),filters:r}}}(n):ie(54877,{filter:n})}function Zb(n){const e=[];return n.fields.forEach(t=>e.push(t.canonicalString())),{fieldPaths:e}}function J_(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
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
 */class Hn{constructor(e,t,r,i,s=oe.min(),o=oe.min(),a=Ze.EMPTY_BYTE_STRING,c=null){this.target=e,this.targetId=t,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=c}withSequenceNumber(e){return new Hn(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new Hn(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Hn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Hn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class e0{constructor(e){this.gt=e}}function t0(n){const e=Kb({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?Ta(e,e.limit,"L"):e}/**
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
 */class n0{constructor(){this.Dn=new r0}addToCollectionParentIndex(e,t){return this.Dn.add(t),B.resolve()}getCollectionParents(e,t){return B.resolve(this.Dn.getEntries(t))}addFieldIndex(e,t){return B.resolve()}deleteFieldIndex(e,t){return B.resolve()}deleteAllFieldIndexes(e){return B.resolve()}createTargetIndexes(e,t){return B.resolve()}getDocumentsMatchingTarget(e,t){return B.resolve(null)}getIndexType(e,t){return B.resolve(0)}getFieldIndexes(e,t){return B.resolve([])}getNextCollectionGroupToUpdate(e){return B.resolve(null)}getMinOffset(e,t){return B.resolve(rr.min())}getMinOffsetFromCollectionGroup(e,t){return B.resolve(rr.min())}updateCollectionGroup(e,t,r){return B.resolve()}updateIndexEntries(e,t){return B.resolve()}}class r0{constructor(){this.index={}}add(e){const t=e.lastSegment(),r=e.popLast(),i=this.index[t]||new He(Se.comparator),s=!i.has(r);return this.index[t]=i.add(r),s}has(e){const t=e.lastSegment(),r=e.popLast(),i=this.index[t];return i&&i.has(r)}getEntries(e){return(this.index[e]||new He(Se.comparator)).toArray()}}/**
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
 */const vm={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},X_=41943040;class Et{static withCacheSize(e){return new Et(e,Et.DEFAULT_COLLECTION_PERCENTILE,Et.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=r}}/**
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
 */Et.DEFAULT_COLLECTION_PERCENTILE=10,Et.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Et.DEFAULT=new Et(X_,Et.DEFAULT_COLLECTION_PERCENTILE,Et.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Et.DISABLED=new Et(-1,0,0);/**
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
 */class yi{constructor(e){this._r=e}next(){return this._r+=2,this._r}static ar(){return new yi(0)}static ur(){return new yi(-1)}}/**
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
 */const Em="LruGarbageCollector",i0=1048576;function Tm([n,e],[t,r]){const i=ue(n,t);return i===0?ue(e,r):i}class s0{constructor(e){this.Tr=e,this.buffer=new He(Tm),this.Ir=0}dr(){return++this.Ir}Er(e){const t=[e,this.dr()];if(this.buffer.size<this.Tr)this.buffer=this.buffer.add(t);else{const r=this.buffer.last();Tm(t,r)<0&&(this.buffer=this.buffer.delete(r).add(t))}}get maxValue(){return this.buffer.last()[0]}}class o0{constructor(e,t,r){this.garbageCollector=e,this.asyncQueue=t,this.localStore=r,this.Ar=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Rr(6e4)}stop(){this.Ar&&(this.Ar.cancel(),this.Ar=null)}get started(){return this.Ar!==null}Rr(e){Y(Em,`Garbage collection scheduled in ${e}ms`),this.Ar=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,()=>p(this,null,function*(){this.Ar=null;try{yield this.localStore.collectGarbage(this.garbageCollector)}catch(t){Ci(t)?Y(Em,"Ignoring IndexedDB error during garbage collection: ",t):yield ki(t)}yield this.Rr(3e5)}))}}class a0{constructor(e,t){this.Vr=e,this.params=t}calculateTargetCount(e,t){return this.Vr.mr(e).next(r=>Math.floor(t/100*r))}nthSequenceNumber(e,t){if(t===0)return B.resolve(nc.ue);const r=new s0(t);return this.Vr.forEachTarget(e,i=>r.Er(i.sequenceNumber)).next(()=>this.Vr.gr(e,i=>r.Er(i))).next(()=>r.maxValue)}removeTargets(e,t,r){return this.Vr.removeTargets(e,t,r)}removeOrphanedDocuments(e,t){return this.Vr.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(Y("LruGarbageCollector","Garbage collection skipped; disabled"),B.resolve(vm)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?(Y("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),vm):this.pr(e,t))}getCacheSize(e){return this.Vr.getCacheSize(e)}pr(e,t){let r,i,s,o,a,c,u;const d=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(h=>(h>this.params.maximumSequenceNumbersToCollect?(Y("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${h}`),i=this.params.maximumSequenceNumbersToCollect):i=h,o=Date.now(),this.nthSequenceNumber(e,i))).next(h=>(r=h,a=Date.now(),this.removeTargets(e,r,t))).next(h=>(s=h,c=Date.now(),this.removeOrphanedDocuments(e,r))).next(h=>(u=Date.now(),Jr()<=de.DEBUG&&Y("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-d}ms
	Determined least recently used ${i} in `+(a-o)+`ms
	Removed ${s} targets in `+(c-a)+`ms
	Removed ${h} documents in `+(u-c)+`ms
Total Duration: ${u-d}ms`),B.resolve({didRun:!0,sequenceNumbersCollected:i,targetsRemoved:s,documentsRemoved:h})))}}function c0(n,e){return new a0(n,e)}/**
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
 */class l0{constructor(){this.changes=new qr(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,ut.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const r=this.changes.get(t);return r!==void 0?B.resolve(r):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class u0{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
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
 */class d0{constructor(e,t,r,i){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,t){let r=null;return this.documentOverlayCache.getOverlay(e,t).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,t))).next(i=>(r!==null&&ys(r.mutation,i,Nt.empty(),$.now()),i))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(r=>this.getLocalViewOfDocuments(e,r,he()).next(()=>r))}getLocalViewOfDocuments(e,t,r=he()){const i=Ir();return this.populateOverlays(e,i,t).next(()=>this.computeViews(e,t,i,r).next(s=>{let o=cs();return s.forEach((a,c)=>{o=o.insert(a,c.overlayedDocument)}),o}))}getOverlayedDocuments(e,t){const r=Ir();return this.populateOverlays(e,r,t).next(()=>this.computeViews(e,t,r,he()))}populateOverlays(e,t,r){const i=[];return r.forEach(s=>{t.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((o,a)=>{t.set(o,a)})})}computeViews(e,t,r,i){let s=Ln();const o=_s(),a=function(){return _s()}();return t.forEach((c,u)=>{const d=r.get(u.key);i.has(u.key)&&(d===void 0||d.mutation instanceof mr)?s=s.insert(u.key,u):d!==void 0?(o.set(u.key,d.mutation.getFieldMask()),ys(d.mutation,u,d.mutation.getFieldMask(),$.now())):o.set(u.key,Nt.empty())}),this.recalculateAndSaveOverlays(e,s).next(c=>(c.forEach((u,d)=>o.set(u,d)),t.forEach((u,d)=>{var h;return a.set(u,new u0(d,(h=o.get(u))!==null&&h!==void 0?h:null))}),a))}recalculateAndSaveOverlays(e,t){const r=_s();let i=new ze((o,a)=>o-a),s=he();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(o=>{for(const a of o)a.keys().forEach(c=>{const u=t.get(c);if(u===null)return;let d=r.get(c)||Nt.empty();d=a.applyToLocalView(u,d),r.set(c,d);const h=(i.get(a.batchId)||he()).add(c);i=i.insert(a.batchId,h)})}).next(()=>{const o=[],a=i.getReverseIterator();for(;a.hasNext();){const c=a.getNext(),u=c.key,d=c.value,h=L_();d.forEach(m=>{if(!s.has(m)){const _=B_(t.get(m),r.get(m));_!==null&&h.set(m,_),s=s.add(m)}}),o.push(this.documentOverlayCache.saveOverlays(e,u,h))}return B.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,t,r,i){return function(o){return ee.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):C_(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,r,i):this.getDocumentsMatchingCollectionQuery(e,t,r,i)}getNextDocuments(e,t,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,r,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,r.largestBatchId,i-s.size):B.resolve(Ir());let a=Ds,c=s;return o.next(u=>B.forEach(u,(d,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),s.get(d)?B.resolve():this.remoteDocumentCache.getEntry(e,d).next(m=>{c=c.insert(d,m)}))).next(()=>this.populateOverlays(e,u,s)).next(()=>this.computeViews(e,c,u,he())).next(d=>({batchId:a,changes:O_(d)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new ee(t)).next(r=>{let i=cs();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,t,r,i){const s=t.collectionGroup;let o=cs();return this.indexManager.getCollectionParents(e,s).next(a=>B.forEach(a,c=>{const u=function(h,m){return new $r(m,null,h.explicitOrderBy.slice(),h.filters.slice(),h.limit,h.limitType,h.startAt,h.endAt)}(t,c.child(s));return this.getDocumentsMatchingCollectionQuery(e,u,r,i).next(d=>{d.forEach((h,m)=>{o=o.insert(h,m)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,t,r,i){let s;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,r.largestBatchId).next(o=>(s=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,r,s,i))).next(o=>{s.forEach((c,u)=>{const d=u.getKey();o.get(d)===null&&(o=o.insert(d,ut.newInvalidDocument(d)))});let a=cs();return o.forEach((c,u)=>{const d=s.get(c);d!==void 0&&ys(d.mutation,u,Nt.empty(),$.now()),ac(t,u)&&(a=a.insert(c,u))}),a})}}/**
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
 */class h0{constructor(e){this.serializer=e,this.Br=new Map,this.Lr=new Map}getBundleMetadata(e,t){return B.resolve(this.Br.get(t))}saveBundleMetadata(e,t){return this.Br.set(t.id,function(i){return{id:i.id,version:i.version,createTime:cn(i.createTime)}}(t)),B.resolve()}getNamedQuery(e,t){return B.resolve(this.Lr.get(t))}saveNamedQuery(e,t){return this.Lr.set(t.name,function(i){return{name:i.name,query:t0(i.bundledQuery),readTime:cn(i.readTime)}}(t)),B.resolve()}}/**
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
 */class f0{constructor(){this.overlays=new ze(ee.comparator),this.kr=new Map}getOverlay(e,t){return B.resolve(this.overlays.get(t))}getOverlays(e,t){const r=Ir();return B.forEach(t,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,t,r){return r.forEach((i,s)=>{this.wt(e,t,s)}),B.resolve()}removeOverlaysForBatchId(e,t,r){const i=this.kr.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.kr.delete(r)),B.resolve()}getOverlaysForCollection(e,t,r){const i=Ir(),s=t.length+1,o=new ee(t.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const c=a.getNext().value,u=c.getKey();if(!t.isPrefixOf(u.path))break;u.path.length===s&&c.largestBatchId>r&&i.set(c.getKey(),c)}return B.resolve(i)}getOverlaysForCollectionGroup(e,t,r,i){let s=new ze((u,d)=>u-d);const o=this.overlays.getIterator();for(;o.hasNext();){const u=o.getNext().value;if(u.getKey().getCollectionGroup()===t&&u.largestBatchId>r){let d=s.get(u.largestBatchId);d===null&&(d=Ir(),s=s.insert(u.largestBatchId,d)),d.set(u.getKey(),u)}}const a=Ir(),c=s.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((u,d)=>a.set(u,d)),!(a.size()>=i)););return B.resolve(a)}wt(e,t,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.kr.get(i.largestBatchId).delete(r.key);this.kr.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new Db(t,r));let s=this.kr.get(t);s===void 0&&(s=he(),this.kr.set(t,s)),this.kr.set(t,s.add(r.key))}}/**
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
 */class m0{constructor(){this.sessionToken=Ze.EMPTY_BYTE_STRING}getSessionToken(e){return B.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,B.resolve()}}/**
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
 */class Zu{constructor(){this.qr=new He(Qe.Qr),this.$r=new He(Qe.Ur)}isEmpty(){return this.qr.isEmpty()}addReference(e,t){const r=new Qe(e,t);this.qr=this.qr.add(r),this.$r=this.$r.add(r)}Kr(e,t){e.forEach(r=>this.addReference(r,t))}removeReference(e,t){this.Wr(new Qe(e,t))}Gr(e,t){e.forEach(r=>this.removeReference(r,t))}zr(e){const t=new ee(new Se([])),r=new Qe(t,e),i=new Qe(t,e+1),s=[];return this.$r.forEachInRange([r,i],o=>{this.Wr(o),s.push(o.key)}),s}jr(){this.qr.forEach(e=>this.Wr(e))}Wr(e){this.qr=this.qr.delete(e),this.$r=this.$r.delete(e)}Jr(e){const t=new ee(new Se([])),r=new Qe(t,e),i=new Qe(t,e+1);let s=he();return this.$r.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(e){const t=new Qe(e,0),r=this.qr.firstAfterOrEqual(t);return r!==null&&e.isEqual(r.key)}}class Qe{constructor(e,t){this.key=e,this.Hr=t}static Qr(e,t){return ee.comparator(e.key,t.key)||ue(e.Hr,t.Hr)}static Ur(e,t){return ue(e.Hr,t.Hr)||ee.comparator(e.key,t.key)}}/**
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
 */class p0{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.er=1,this.Yr=new He(Qe.Qr)}checkEmpty(e){return B.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,r,i){const s=this.er;this.er++;const o=new Nb(s,t,r,i);this.mutationQueue.push(o);for(const a of i)this.Yr=this.Yr.add(new Qe(a.key,s)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return B.resolve(o)}lookupMutationBatch(e,t){return B.resolve(this.Zr(t))}getNextMutationBatchAfterBatchId(e,t){const r=t+1,i=this.Xr(r),s=i<0?0:i;return B.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return B.resolve(this.mutationQueue.length===0?zu:this.er-1)}getAllMutationBatches(e){return B.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const r=new Qe(t,0),i=new Qe(t,Number.POSITIVE_INFINITY),s=[];return this.Yr.forEachInRange([r,i],o=>{const a=this.Zr(o.Hr);s.push(a)}),B.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,t){let r=new He(ue);return t.forEach(i=>{const s=new Qe(i,0),o=new Qe(i,Number.POSITIVE_INFINITY);this.Yr.forEachInRange([s,o],a=>{r=r.add(a.Hr)})}),B.resolve(this.ei(r))}getAllMutationBatchesAffectingQuery(e,t){const r=t.path,i=r.length+1;let s=r;ee.isDocumentKey(s)||(s=s.child(""));const o=new Qe(new ee(s),0);let a=new He(ue);return this.Yr.forEachWhile(c=>{const u=c.key.path;return!!r.isPrefixOf(u)&&(u.length===i&&(a=a.add(c.Hr)),!0)},o),B.resolve(this.ei(a))}ei(e){const t=[];return e.forEach(r=>{const i=this.Zr(r);i!==null&&t.push(i)}),t}removeMutationBatch(e,t){Ie(this.ti(t.batchId,"removed")===0,55003),this.mutationQueue.shift();let r=this.Yr;return B.forEach(t.mutations,i=>{const s=new Qe(i.key,t.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.Yr=r})}rr(e){}containsKey(e,t){const r=new Qe(t,0),i=this.Yr.firstAfterOrEqual(r);return B.resolve(t.isEqual(i&&i.key))}performConsistencyCheck(e){return B.resolve()}ti(e,t){return this.Xr(e)}Xr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Zr(e){const t=this.Xr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
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
 */class g0{constructor(e){this.ni=e,this.docs=function(){return new ze(ee.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const r=t.key,i=this.docs.get(r),s=i?i.size:0,o=this.ni(t);return this.docs=this.docs.insert(r,{document:t.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const r=this.docs.get(t);return B.resolve(r?r.document.mutableCopy():ut.newInvalidDocument(t))}getEntries(e,t){let r=Ln();return t.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():ut.newInvalidDocument(i))}),B.resolve(r)}getDocumentsMatchingQuery(e,t,r,i){let s=Ln();const o=t.path,a=new ee(o.child("__id-9223372036854775808__")),c=this.docs.getIteratorFrom(a);for(;c.hasNext();){const{key:u,value:{document:d}}=c.getNext();if(!o.isPrefixOf(u.path))break;u.path.length>o.length+1||WR(GR(d),r)<=0||(i.has(d.key)||ac(t,d))&&(s=s.insert(d.key,d.mutableCopy()))}return B.resolve(s)}getAllFromCollectionGroup(e,t,r,i){ie(9500)}ri(e,t){return B.forEach(this.docs,r=>t(r))}newChangeBuffer(e){return new _0(this)}getSize(e){return B.resolve(this.size)}}class _0 extends l0{constructor(e){super(),this.Or=e}applyChanges(e){const t=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?t.push(this.Or.addEntry(e,i)):this.Or.removeEntry(r)}),B.waitFor(t)}getFromCache(e,t){return this.Or.getEntry(e,t)}getAllFromCache(e,t){return this.Or.getEntries(e,t)}}/**
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
 */class y0{constructor(e){this.persistence=e,this.ii=new qr(t=>Hu(t),Ku),this.lastRemoteSnapshotVersion=oe.min(),this.highestTargetId=0,this.si=0,this.oi=new Zu,this.targetCount=0,this._i=yi.ar()}forEachTarget(e,t){return this.ii.forEach((r,i)=>t(i)),B.resolve()}getLastRemoteSnapshotVersion(e){return B.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return B.resolve(this.si)}allocateTargetId(e){return this.highestTargetId=this._i.next(),B.resolve(this.highestTargetId)}setTargetsMetadata(e,t,r){return r&&(this.lastRemoteSnapshotVersion=r),t>this.si&&(this.si=t),B.resolve()}hr(e){this.ii.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this._i=new yi(t),this.highestTargetId=t),e.sequenceNumber>this.si&&(this.si=e.sequenceNumber)}addTargetData(e,t){return this.hr(t),this.targetCount+=1,B.resolve()}updateTargetData(e,t){return this.hr(t),B.resolve()}removeTargetData(e,t){return this.ii.delete(t.target),this.oi.zr(t.targetId),this.targetCount-=1,B.resolve()}removeTargets(e,t,r){let i=0;const s=[];return this.ii.forEach((o,a)=>{a.sequenceNumber<=t&&r.get(a.targetId)===null&&(this.ii.delete(o),s.push(this.removeMatchingKeysForTargetId(e,a.targetId)),i++)}),B.waitFor(s).next(()=>i)}getTargetCount(e){return B.resolve(this.targetCount)}getTargetData(e,t){const r=this.ii.get(t)||null;return B.resolve(r)}addMatchingKeys(e,t,r){return this.oi.Kr(t,r),B.resolve()}removeMatchingKeys(e,t,r){this.oi.Gr(t,r);const i=this.persistence.referenceDelegate,s=[];return i&&t.forEach(o=>{s.push(i.markPotentiallyOrphaned(e,o))}),B.waitFor(s)}removeMatchingKeysForTargetId(e,t){return this.oi.zr(t),B.resolve()}getMatchingKeysForTargetId(e,t){const r=this.oi.Jr(t);return B.resolve(r)}containsKey(e,t){return B.resolve(this.oi.containsKey(t))}}/**
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
 */class Z_{constructor(e,t){this.ai={},this.overlays={},this.ui=new nc(0),this.ci=!1,this.ci=!0,this.li=new m0,this.referenceDelegate=e(this),this.hi=new y0(this),this.indexManager=new n0,this.remoteDocumentCache=function(i){return new g0(i)}(r=>this.referenceDelegate.Pi(r)),this.serializer=new e0(t),this.Ti=new h0(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.ci=!1,Promise.resolve()}get started(){return this.ci}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new f0,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let r=this.ai[e.toKey()];return r||(r=new p0(t,this.referenceDelegate),this.ai[e.toKey()]=r),r}getGlobalsCache(){return this.li}getTargetCache(){return this.hi}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ti}runTransaction(e,t,r){Y("MemoryPersistence","Starting transaction:",e);const i=new w0(this.ui.next());return this.referenceDelegate.Ii(),r(i).next(s=>this.referenceDelegate.di(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Ei(e,t){return B.or(Object.values(this.ai).map(r=>()=>r.containsKey(e,t)))}}class w0 extends KR{constructor(e){super(),this.currentSequenceNumber=e}}class ed{constructor(e){this.persistence=e,this.Ai=new Zu,this.Ri=null}static Vi(e){return new ed(e)}get mi(){if(this.Ri)return this.Ri;throw ie(60996)}addReference(e,t,r){return this.Ai.addReference(r,t),this.mi.delete(r.toString()),B.resolve()}removeReference(e,t,r){return this.Ai.removeReference(r,t),this.mi.add(r.toString()),B.resolve()}markPotentiallyOrphaned(e,t){return this.mi.add(t.toString()),B.resolve()}removeTarget(e,t){this.Ai.zr(t.targetId).forEach(i=>this.mi.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,t.targetId).next(i=>{i.forEach(s=>this.mi.add(s.toString()))}).next(()=>r.removeTargetData(e,t))}Ii(){this.Ri=new Set}di(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return B.forEach(this.mi,r=>{const i=ee.fromPath(r);return this.fi(e,i).next(s=>{s||t.removeEntry(i,oe.min())})}).next(()=>(this.Ri=null,t.apply(e)))}updateLimboDocument(e,t){return this.fi(e,t).next(r=>{r?this.mi.delete(t.toString()):this.mi.add(t.toString())})}Pi(e){return 0}fi(e,t){return B.or([()=>B.resolve(this.Ai.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Ei(e,t)])}}class Ra{constructor(e,t){this.persistence=e,this.gi=new qr(r=>JR(r.path),(r,i)=>r.isEqual(i)),this.garbageCollector=c0(this,t)}static Vi(e,t){return new Ra(e,t)}Ii(){}di(e){return B.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}mr(e){const t=this.yr(e);return this.persistence.getTargetCache().getTargetCount(e).next(r=>t.next(i=>r+i))}yr(e){let t=0;return this.gr(e,r=>{t++}).next(()=>t)}gr(e,t){return B.forEach(this.gi,(r,i)=>this.Sr(e,r,i).next(s=>s?B.resolve():t(i)))}removeTargets(e,t,r){return this.persistence.getTargetCache().removeTargets(e,t,r)}removeOrphanedDocuments(e,t){let r=0;const i=this.persistence.getRemoteDocumentCache(),s=i.newChangeBuffer();return i.ri(e,o=>this.Sr(e,o,t).next(a=>{a||(r++,s.removeEntry(o,oe.min()))})).next(()=>s.apply(e)).next(()=>r)}markPotentiallyOrphaned(e,t){return this.gi.set(t,e.currentSequenceNumber),B.resolve()}removeTarget(e,t){const r=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,t,r){return this.gi.set(r,e.currentSequenceNumber),B.resolve()}removeReference(e,t,r){return this.gi.set(r,e.currentSequenceNumber),B.resolve()}updateLimboDocument(e,t){return this.gi.set(t,e.currentSequenceNumber),B.resolve()}Pi(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=ta(e.data.value)),t}Sr(e,t,r){return B.or([()=>this.persistence.Ei(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const i=this.gi.get(t);return B.resolve(i!==void 0&&i>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
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
 */class td{constructor(e,t,r,i){this.targetId=e,this.fromCache=t,this.Is=r,this.ds=i}static Es(e,t){let r=he(),i=he();for(const s of t.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new td(e,t.fromCache,r,i)}}/**
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
 */class v0{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class E0{constructor(){this.As=!1,this.Rs=!1,this.Vs=100,this.fs=function(){return oT()?8:QR(pt())>0?6:4}()}initialize(e,t){this.gs=e,this.indexManager=t,this.As=!0}getDocumentsMatchingQuery(e,t,r,i){const s={result:null};return this.ps(e,t).next(o=>{s.result=o}).next(()=>{if(!s.result)return this.ys(e,t,i,r).next(o=>{s.result=o})}).next(()=>{if(s.result)return;const o=new v0;return this.ws(e,t,o).next(a=>{if(s.result=a,this.Rs)return this.Ss(e,t,o,a.size)})}).next(()=>s.result)}Ss(e,t,r,i){return r.documentReadCount<this.Vs?(Jr()<=de.DEBUG&&Y("QueryEngine","SDK will not create cache indexes for query:",Xr(t),"since it only creates cache indexes for collection contains","more than or equal to",this.Vs,"documents"),B.resolve()):(Jr()<=de.DEBUG&&Y("QueryEngine","Query:",Xr(t),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.fs*i?(Jr()<=de.DEBUG&&Y("QueryEngine","The SDK decides to create cache indexes for query:",Xr(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,an(t))):B.resolve())}ps(e,t){if(um(t))return B.resolve(null);let r=an(t);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(t.limit!==null&&i===1&&(t=Ta(t,null,"F"),r=an(t)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{const o=he(...s);return this.gs.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,r).next(c=>{const u=this.bs(t,a);return this.Ds(t,u,o,c.readTime)?this.ps(e,Ta(t,null,"F")):this.vs(e,u,t,c)}))})))}ys(e,t,r,i){return um(t)||i.isEqual(oe.min())?B.resolve(null):this.gs.getDocuments(e,r).next(s=>{const o=this.bs(t,s);return this.Ds(t,o,r,i)?B.resolve(null):(Jr()<=de.DEBUG&&Y("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),Xr(t)),this.vs(e,o,t,zR(i,Ds)).next(a=>a))})}bs(e,t){let r=new He(N_(e));return t.forEach((i,s)=>{ac(e,s)&&(r=r.add(s))}),r}Ds(e,t,r,i){if(e.limit===null)return!1;if(r.size!==t.size)return!0;const s=e.limitType==="F"?t.last():t.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}ws(e,t,r){return Jr()<=de.DEBUG&&Y("QueryEngine","Using full collection scan to execute query:",Xr(t)),this.gs.getDocumentsMatchingQuery(e,t,rr.min(),r)}vs(e,t,r,i){return this.gs.getDocumentsMatchingQuery(e,r,i).next(s=>(t.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
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
 */const nd="LocalStore",T0=3e8;class I0{constructor(e,t,r,i){this.persistence=e,this.Cs=t,this.serializer=i,this.Fs=new ze(ue),this.Ms=new qr(s=>Hu(s),Ku),this.xs=new Map,this.Os=e.getRemoteDocumentCache(),this.hi=e.getTargetCache(),this.Ti=e.getBundleCache(),this.Ns(r)}Ns(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new d0(this.Os,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Os.setIndexManager(this.indexManager),this.Cs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.Fs))}}function A0(n,e,t,r){return new I0(n,e,t,r)}function ey(n,e){return p(this,null,function*(){const t=ae(n);return yield t.persistence.runTransaction("Handle user change","readonly",r=>{let i;return t.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,t.Ns(e),t.mutationQueue.getAllMutationBatches(r))).next(s=>{const o=[],a=[];let c=he();for(const u of i){o.push(u.batchId);for(const d of u.mutations)c=c.add(d.key)}for(const u of s){a.push(u.batchId);for(const d of u.mutations)c=c.add(d.key)}return t.localDocuments.getDocuments(r,c).next(u=>({Bs:u,removedBatchIds:o,addedBatchIds:a}))})})})}function R0(n,e){const t=ae(n);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),s=t.Os.newChangeBuffer({trackRemovals:!0});return function(a,c,u,d){const h=u.batch,m=h.keys();let _=B.resolve();return m.forEach(w=>{_=_.next(()=>d.getEntry(c,w)).next(v=>{const E=u.docVersions.get(w);Ie(E!==null,48541),v.version.compareTo(E)<0&&(h.applyToRemoteDocument(v,u),v.isValidDocument()&&(v.setReadTime(u.commitVersion),d.addEntry(v)))})}),_.next(()=>a.mutationQueue.removeMutationBatch(c,h))}(t,r,e,s).next(()=>s.apply(r)).next(()=>t.mutationQueue.performConsistencyCheck(r)).next(()=>t.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(a){let c=he();for(let u=0;u<a.mutationResults.length;++u)a.mutationResults[u].transformResults.length>0&&(c=c.add(a.batch.mutations[u].key));return c}(e))).next(()=>t.localDocuments.getDocuments(r,i))})}function ty(n){const e=ae(n);return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.hi.getLastRemoteSnapshotVersion(t))}function b0(n,e){const t=ae(n),r=e.snapshotVersion;let i=t.Fs;return t.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=t.Os.newChangeBuffer({trackRemovals:!0});i=t.Fs;const a=[];e.targetChanges.forEach((d,h)=>{const m=i.get(h);if(!m)return;a.push(t.hi.removeMatchingKeys(s,d.removedDocuments,h).next(()=>t.hi.addMatchingKeys(s,d.addedDocuments,h)));let _=m.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.get(h)!==null?_=_.withResumeToken(Ze.EMPTY_BYTE_STRING,oe.min()).withLastLimboFreeSnapshotVersion(oe.min()):d.resumeToken.approximateByteSize()>0&&(_=_.withResumeToken(d.resumeToken,r)),i=i.insert(h,_),function(v,E,P){return v.resumeToken.approximateByteSize()===0||E.snapshotVersion.toMicroseconds()-v.snapshotVersion.toMicroseconds()>=T0?!0:P.addedDocuments.size+P.modifiedDocuments.size+P.removedDocuments.size>0}(m,_,d)&&a.push(t.hi.updateTargetData(s,_))});let c=Ln(),u=he();if(e.documentUpdates.forEach(d=>{e.resolvedLimboDocuments.has(d)&&a.push(t.persistence.referenceDelegate.updateLimboDocument(s,d))}),a.push(S0(s,o,e.documentUpdates).next(d=>{c=d.Ls,u=d.ks})),!r.isEqual(oe.min())){const d=t.hi.getLastRemoteSnapshotVersion(s).next(h=>t.hi.setTargetsMetadata(s,s.currentSequenceNumber,r));a.push(d)}return B.waitFor(a).next(()=>o.apply(s)).next(()=>t.localDocuments.getLocalViewOfDocuments(s,c,u)).next(()=>c)}).then(s=>(t.Fs=i,s))}function S0(n,e,t){let r=he(),i=he();return t.forEach(s=>r=r.add(s)),e.getEntries(n,r).next(s=>{let o=Ln();return t.forEach((a,c)=>{const u=s.get(a);c.isFoundDocument()!==u.isFoundDocument()&&(i=i.add(a)),c.isNoDocument()&&c.version.isEqual(oe.min())?(e.removeEntry(a,c.readTime),o=o.insert(a,c)):!u.isValidDocument()||c.version.compareTo(u.version)>0||c.version.compareTo(u.version)===0&&u.hasPendingWrites?(e.addEntry(c),o=o.insert(a,c)):Y(nd,"Ignoring outdated watch update for ",a,". Current version:",u.version," Watch version:",c.version)}),{Ls:o,ks:i}})}function k0(n,e){const t=ae(n);return t.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=zu),t.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function C0(n,e){const t=ae(n);return t.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return t.hi.getTargetData(r,e).next(s=>s?(i=s,B.resolve(i)):t.hi.allocateTargetId(r).next(o=>(i=new Hn(e,o,"TargetPurposeListen",r.currentSequenceNumber),t.hi.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=t.Fs.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(t.Fs=t.Fs.insert(r.targetId,r),t.Ms.set(e,r.targetId)),r})}function Kl(n,e,t){return p(this,null,function*(){const r=ae(n),i=r.Fs.get(e),s=t?"readwrite":"readwrite-primary";try{t||(yield r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i)))}catch(o){if(!Ci(o))throw o;Y(nd,`Failed to update sequence numbers for target ${e}: ${o}`)}r.Fs=r.Fs.remove(e),r.Ms.delete(i.target)})}function Im(n,e,t){const r=ae(n);let i=oe.min(),s=he();return r.persistence.runTransaction("Execute query","readwrite",o=>function(c,u,d){const h=ae(c),m=h.Ms.get(d);return m!==void 0?B.resolve(h.Fs.get(m)):h.hi.getTargetData(u,d)}(r,o,an(e)).next(a=>{if(a)return i=a.lastLimboFreeSnapshotVersion,r.hi.getMatchingKeysForTargetId(o,a.targetId).next(c=>{s=c})}).next(()=>r.Cs.getDocumentsMatchingQuery(o,e,t?i:oe.min(),t?s:he())).next(a=>(P0(r,pb(e),a),{documents:a,qs:s})))}function P0(n,e,t){let r=n.xs.get(e)||oe.min();t.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),n.xs.set(e,r)}class Am{constructor(){this.activeTargetIds=Eb()}Gs(e){this.activeTargetIds=this.activeTargetIds.add(e)}zs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Ws(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class N0{constructor(){this.Fo=new Am,this.Mo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,r){}addLocalQueryTarget(e,t=!0){return t&&this.Fo.Gs(e),this.Mo[e]||"not-current"}updateQueryState(e,t,r){this.Mo[e]=t}removeLocalQueryTarget(e){this.Fo.zs(e)}isLocalQueryTarget(e){return this.Fo.activeTargetIds.has(e)}clearQueryState(e){delete this.Mo[e]}getAllActiveQueryTargets(){return this.Fo.activeTargetIds}isActiveQueryTarget(e){return this.Fo.activeTargetIds.has(e)}start(){return this.Fo=new Am,Promise.resolve()}handleUserChange(e,t,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class D0{xo(e){}shutdown(){}}/**
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
 */const Rm="ConnectivityMonitor";class bm{constructor(){this.Oo=()=>this.No(),this.Bo=()=>this.Lo(),this.ko=[],this.qo()}xo(e){this.ko.push(e)}shutdown(){window.removeEventListener("online",this.Oo),window.removeEventListener("offline",this.Bo)}qo(){window.addEventListener("online",this.Oo),window.addEventListener("offline",this.Bo)}No(){Y(Rm,"Network connectivity changed: AVAILABLE");for(const e of this.ko)e(0)}Lo(){Y(Rm,"Network connectivity changed: UNAVAILABLE");for(const e of this.ko)e(1)}static C(){return typeof window!="undefined"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let jo=null;function Ql(){return jo===null?jo=function(){return 268435456+Math.round(2147483648*Math.random())}():jo++,"0x"+jo.toString(16)}/**
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
 */const cl="RestConnection",O0={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class L0{get Qo(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.$o=t+"://"+e.host,this.Uo=`projects/${r}/databases/${i}`,this.Ko=this.databaseId.database===wa?`project_id=${r}`:`project_id=${r}&database_id=${i}`}Wo(e,t,r,i,s){const o=Ql(),a=this.Go(e,t.toUriEncodedString());Y(cl,`Sending RPC '${e}' ${o}:`,a,r);const c={"google-cloud-resource-prefix":this.Uo,"x-goog-request-params":this.Ko};this.zo(c,i,s);const{host:u}=new URL(a),d=hn(u);return this.jo(e,a,c,r,d).then(h=>(Y(cl,`Received RPC '${e}' ${o}: `,h),h),h=>{throw On(cl,`RPC '${e}' ${o} failed with error: `,h,"url: ",a,"request:",r),h})}Jo(e,t,r,i,s,o){return this.Wo(e,t,r,i,s)}zo(e,t,r){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Si}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach((i,s)=>e[s]=i),r&&r.headers.forEach((i,s)=>e[s]=i)}Go(e,t){const r=O0[e];return`${this.$o}/v1/${t}:${r}`}terminate(){}}/**
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
 */class V0{constructor(e){this.Ho=e.Ho,this.Yo=e.Yo}Zo(e){this.Xo=e}e_(e){this.t_=e}n_(e){this.r_=e}onMessage(e){this.i_=e}close(){this.Yo()}send(e){this.Ho(e)}s_(){this.Xo()}o_(){this.t_()}__(e){this.r_(e)}a_(e){this.i_(e)}}/**
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
 */const ct="WebChannelConnection";class M0 extends L0{constructor(e){super(e),this.u_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}jo(e,t,r,i,s){const o=Ql();return new Promise((a,c)=>{const u=new t_;u.setWithCredentials(!0),u.listenOnce(n_.COMPLETE,()=>{try{switch(u.getLastErrorCode()){case ea.NO_ERROR:const h=u.getResponseJson();Y(ct,`XHR for RPC '${e}' ${o} received:`,JSON.stringify(h)),a(h);break;case ea.TIMEOUT:Y(ct,`RPC '${e}' ${o} timed out`),c(new W(V.DEADLINE_EXCEEDED,"Request time out"));break;case ea.HTTP_ERROR:const m=u.getStatus();if(Y(ct,`RPC '${e}' ${o} failed with status:`,m,"response text:",u.getResponseText()),m>0){let _=u.getResponseJson();Array.isArray(_)&&(_=_[0]);const w=_==null?void 0:_.error;if(w&&w.status&&w.message){const v=function(P){const O=P.toLowerCase().replace(/_/g,"-");return Object.values(V).indexOf(O)>=0?O:V.UNKNOWN}(w.status);c(new W(v,w.message))}else c(new W(V.UNKNOWN,"Server responded with status "+u.getStatus()))}else c(new W(V.UNAVAILABLE,"Connection failed."));break;default:ie(9055,{c_:e,streamId:o,l_:u.getLastErrorCode(),h_:u.getLastError()})}}finally{Y(ct,`RPC '${e}' ${o} completed.`)}});const d=JSON.stringify(i);Y(ct,`RPC '${e}' ${o} sending request:`,i),u.send(t,"POST",d,r,15)})}P_(e,t,r){const i=Ql(),s=[this.$o,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=s_(),a=i_(),c={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},u=this.longPollingOptions.timeoutSeconds;u!==void 0&&(c.longPollingTimeout=Math.round(1e3*u)),this.useFetchStreams&&(c.useFetchStreams=!0),this.zo(c.initMessageHeaders,t,r),c.encodeInitMessageHeaders=!0;const d=s.join("");Y(ct,`Creating RPC '${e}' stream ${i}: ${d}`,c);const h=o.createWebChannel(d,c);this.T_(h);let m=!1,_=!1;const w=new V0({Ho:E=>{_?Y(ct,`Not sending because RPC '${e}' stream ${i} is closed:`,E):(m||(Y(ct,`Opening RPC '${e}' stream ${i} transport.`),h.open(),m=!0),Y(ct,`RPC '${e}' stream ${i} sending:`,E),h.send(E))},Yo:()=>h.close()}),v=(E,P,O)=>{E.listen(P,M=>{try{O(M)}catch(x){setTimeout(()=>{throw x},0)}})};return v(h,as.EventType.OPEN,()=>{_||(Y(ct,`RPC '${e}' stream ${i} transport opened.`),w.s_())}),v(h,as.EventType.CLOSE,()=>{_||(_=!0,Y(ct,`RPC '${e}' stream ${i} transport closed`),w.__(),this.I_(h))}),v(h,as.EventType.ERROR,E=>{_||(_=!0,On(ct,`RPC '${e}' stream ${i} transport errored. Name:`,E.name,"Message:",E.message),w.__(new W(V.UNAVAILABLE,"The operation could not be completed")))}),v(h,as.EventType.MESSAGE,E=>{var P;if(!_){const O=E.data[0];Ie(!!O,16349);const M=O,x=(M==null?void 0:M.error)||((P=M[0])===null||P===void 0?void 0:P.error);if(x){Y(ct,`RPC '${e}' stream ${i} received error:`,x);const Z=x.status;let K=function(I){const b=$e[I];if(b!==void 0)return q_(b)}(Z),R=x.message;K===void 0&&(K=V.INTERNAL,R="Unknown error status: "+Z+" with message "+x.message),_=!0,w.__(new W(K,R)),h.close()}else Y(ct,`RPC '${e}' stream ${i} received:`,O),w.a_(O)}}),v(a,r_.STAT_EVENT,E=>{E.stat===Ml.PROXY?Y(ct,`RPC '${e}' stream ${i} detected buffering proxy`):E.stat===Ml.NOPROXY&&Y(ct,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{w.o_()},0),w}terminate(){this.u_.forEach(e=>e.close()),this.u_=[]}T_(e){this.u_.push(e)}I_(e){this.u_=this.u_.filter(t=>t===e)}}function ll(){return typeof document!="undefined"?document:null}/**
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
 */function hc(n){return new Bb(n,!0)}/**
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
 */class ny{constructor(e,t,r=1e3,i=1.5,s=6e4){this.Fi=e,this.timerId=t,this.d_=r,this.E_=i,this.A_=s,this.R_=0,this.V_=null,this.m_=Date.now(),this.reset()}reset(){this.R_=0}f_(){this.R_=this.A_}g_(e){this.cancel();const t=Math.floor(this.R_+this.p_()),r=Math.max(0,Date.now()-this.m_),i=Math.max(0,t-r);i>0&&Y("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.R_} ms, delay with jitter: ${t} ms, last attempt: ${r} ms ago)`),this.V_=this.Fi.enqueueAfterDelay(this.timerId,i,()=>(this.m_=Date.now(),e())),this.R_*=this.E_,this.R_<this.d_&&(this.R_=this.d_),this.R_>this.A_&&(this.R_=this.A_)}y_(){this.V_!==null&&(this.V_.skipDelay(),this.V_=null)}cancel(){this.V_!==null&&(this.V_.cancel(),this.V_=null)}p_(){return(Math.random()-.5)*this.R_}}/**
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
 */const Sm="PersistentStream";class ry{constructor(e,t,r,i,s,o,a,c){this.Fi=e,this.w_=r,this.S_=i,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=c,this.state=0,this.b_=0,this.D_=null,this.v_=null,this.stream=null,this.C_=0,this.F_=new ny(e,t)}M_(){return this.state===1||this.state===5||this.x_()}x_(){return this.state===2||this.state===3}start(){this.C_=0,this.state!==4?this.auth():this.O_()}stop(){return p(this,null,function*(){this.M_()&&(yield this.close(0))})}N_(){this.state=0,this.F_.reset()}B_(){this.x_()&&this.D_===null&&(this.D_=this.Fi.enqueueAfterDelay(this.w_,6e4,()=>this.L_()))}k_(e){this.q_(),this.stream.send(e)}L_(){return p(this,null,function*(){if(this.x_())return this.close(0)})}q_(){this.D_&&(this.D_.cancel(),this.D_=null)}Q_(){this.v_&&(this.v_.cancel(),this.v_=null)}close(e,t){return p(this,null,function*(){this.q_(),this.Q_(),this.F_.cancel(),this.b_++,e!==4?this.F_.reset():t&&t.code===V.RESOURCE_EXHAUSTED?(Dn(t.toString()),Dn("Using maximum backoff delay to prevent overloading the backend."),this.F_.f_()):t&&t.code===V.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.U_(),this.stream.close(),this.stream=null),this.state=e,yield this.listener.n_(t)})}U_(){}auth(){this.state=1;const e=this.K_(this.b_),t=this.b_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.b_===t&&this.W_(r,i)},r=>{e(()=>{const i=new W(V.UNKNOWN,"Fetching auth token failed: "+r.message);return this.G_(i)})})}W_(e,t){const r=this.K_(this.b_);this.stream=this.z_(e,t),this.stream.Zo(()=>{r(()=>this.listener.Zo())}),this.stream.e_(()=>{r(()=>(this.state=2,this.v_=this.Fi.enqueueAfterDelay(this.S_,1e4,()=>(this.x_()&&(this.state=3),Promise.resolve())),this.listener.e_()))}),this.stream.n_(i=>{r(()=>this.G_(i))}),this.stream.onMessage(i=>{r(()=>++this.C_==1?this.j_(i):this.onNext(i))})}O_(){this.state=5,this.F_.g_(()=>p(this,null,function*(){this.state=0,this.start()}))}G_(e){return Y(Sm,`close with error: ${e}`),this.stream=null,this.close(4,e)}K_(e){return t=>{this.Fi.enqueueAndForget(()=>this.b_===e?t():(Y(Sm,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class x0 extends ry{constructor(e,t,r,i,s,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,r,i,o),this.serializer=s}z_(e,t){return this.connection.P_("Listen",e,t)}j_(e){return this.onNext(e)}onNext(e){this.F_.reset();const t=jb(this.serializer,e),r=function(s){if(!("targetChange"in s))return oe.min();const o=s.targetChange;return o.targetIds&&o.targetIds.length?oe.min():o.readTime?cn(o.readTime):oe.min()}(e);return this.listener.J_(t,r)}H_(e){const t={};t.database=Hl(this.serializer),t.addTarget=function(s,o){let a;const c=o.target;if(a=ql(c)?{documents:Wb(s,c)}:{query:Hb(s,c).Vt},a.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){a.resumeToken=G_(s,o.resumeToken);const u=zl(s,o.expectedCount);u!==null&&(a.expectedCount=u)}else if(o.snapshotVersion.compareTo(oe.min())>0){a.readTime=Aa(s,o.snapshotVersion.toTimestamp());const u=zl(s,o.expectedCount);u!==null&&(a.expectedCount=u)}return a}(this.serializer,e);const r=Qb(this.serializer,e);r&&(t.labels=r),this.k_(t)}Y_(e){const t={};t.database=Hl(this.serializer),t.removeTarget=e,this.k_(t)}}class U0 extends ry{constructor(e,t,r,i,s,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,r,i,o),this.serializer=s}get Z_(){return this.C_>0}start(){this.lastStreamToken=void 0,super.start()}U_(){this.Z_&&this.X_([])}z_(e,t){return this.connection.P_("Write",e,t)}j_(e){return Ie(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,Ie(!e.writeResults||e.writeResults.length===0,55816),this.listener.ea()}onNext(e){Ie(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.F_.reset();const t=Gb(e.writeResults,e.commitTime),r=cn(e.commitTime);return this.listener.ta(r,t)}na(){const e={};e.database=Hl(this.serializer),this.k_(e)}X_(e){const t={streamToken:this.lastStreamToken,writes:e.map(r=>zb(this.serializer,r))};this.k_(t)}}/**
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
 */class F0{}class B0 extends F0{constructor(e,t,r,i){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=r,this.serializer=i,this.ra=!1}ia(){if(this.ra)throw new W(V.FAILED_PRECONDITION,"The client has already been terminated.")}Wo(e,t,r,i){return this.ia(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.Wo(e,Gl(t,r),i,s,o)).catch(s=>{throw s.name==="FirebaseError"?(s.code===V.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new W(V.UNKNOWN,s.toString())})}Jo(e,t,r,i,s){return this.ia(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,a])=>this.connection.Jo(e,Gl(t,r),i,o,a,s)).catch(o=>{throw o.name==="FirebaseError"?(o.code===V.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new W(V.UNKNOWN,o.toString())})}terminate(){this.ra=!0,this.connection.terminate()}}class $0{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.sa=0,this.oa=null,this._a=!0}aa(){this.sa===0&&(this.ua("Unknown"),this.oa=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.oa=null,this.ca("Backend didn't respond within 10 seconds."),this.ua("Offline"),Promise.resolve())))}la(e){this.state==="Online"?this.ua("Unknown"):(this.sa++,this.sa>=1&&(this.ha(),this.ca(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ua("Offline")))}set(e){this.ha(),this.sa=0,e==="Online"&&(this._a=!1),this.ua(e)}ua(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}ca(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this._a?(Dn(t),this._a=!1):Y("OnlineStateTracker",t)}ha(){this.oa!==null&&(this.oa.cancel(),this.oa=null)}}/**
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
 */const Pr="RemoteStore";class q0{constructor(e,t,r,i,s){this.localStore=e,this.datastore=t,this.asyncQueue=r,this.remoteSyncer={},this.Pa=[],this.Ta=new Map,this.Ia=new Set,this.da=[],this.Ea=s,this.Ea.xo(o=>{r.enqueueAndForget(()=>p(this,null,function*(){jr(this)&&(Y(Pr,"Restarting streams for network reachability change."),yield function(c){return p(this,null,function*(){const u=ae(c);u.Ia.add(4),yield no(u),u.Aa.set("Unknown"),u.Ia.delete(4),yield fc(u)})}(this))}))}),this.Aa=new $0(r,i)}}function fc(n){return p(this,null,function*(){if(jr(n))for(const e of n.da)yield e(!0)})}function no(n){return p(this,null,function*(){for(const e of n.da)yield e(!1)})}function iy(n,e){const t=ae(n);t.Ta.has(e.targetId)||(t.Ta.set(e.targetId,e),od(t)?sd(t):Pi(t).x_()&&id(t,e))}function rd(n,e){const t=ae(n),r=Pi(t);t.Ta.delete(e),r.x_()&&sy(t,e),t.Ta.size===0&&(r.x_()?r.B_():jr(t)&&t.Aa.set("Unknown"))}function id(n,e){if(n.Ra.$e(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(oe.min())>0){const t=n.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}Pi(n).H_(e)}function sy(n,e){n.Ra.$e(e),Pi(n).Y_(e)}function sd(n){n.Ra=new Mb({getRemoteKeysForTarget:e=>n.remoteSyncer.getRemoteKeysForTarget(e),Et:e=>n.Ta.get(e)||null,lt:()=>n.datastore.serializer.databaseId}),Pi(n).start(),n.Aa.aa()}function od(n){return jr(n)&&!Pi(n).M_()&&n.Ta.size>0}function jr(n){return ae(n).Ia.size===0}function oy(n){n.Ra=void 0}function j0(n){return p(this,null,function*(){n.Aa.set("Online")})}function z0(n){return p(this,null,function*(){n.Ta.forEach((e,t)=>{id(n,e)})})}function G0(n,e){return p(this,null,function*(){oy(n),od(n)?(n.Aa.la(e),sd(n)):n.Aa.set("Unknown")})}function W0(n,e,t){return p(this,null,function*(){if(n.Aa.set("Online"),e instanceof z_&&e.state===2&&e.cause)try{yield function(i,s){return p(this,null,function*(){const o=s.cause;for(const a of s.targetIds)i.Ta.has(a)&&(yield i.remoteSyncer.rejectListen(a,o),i.Ta.delete(a),i.Ra.removeTarget(a))})}(n,e)}catch(r){Y(Pr,"Failed to remove targets %s: %s ",e.targetIds.join(","),r),yield ba(n,r)}else if(e instanceof ia?n.Ra.Ye(e):e instanceof j_?n.Ra.it(e):n.Ra.et(e),!t.isEqual(oe.min()))try{const r=yield ty(n.localStore);t.compareTo(r)>=0&&(yield function(s,o){const a=s.Ra.Pt(o);return a.targetChanges.forEach((c,u)=>{if(c.resumeToken.approximateByteSize()>0){const d=s.Ta.get(u);d&&s.Ta.set(u,d.withResumeToken(c.resumeToken,o))}}),a.targetMismatches.forEach((c,u)=>{const d=s.Ta.get(c);if(!d)return;s.Ta.set(c,d.withResumeToken(Ze.EMPTY_BYTE_STRING,d.snapshotVersion)),sy(s,c);const h=new Hn(d.target,c,u,d.sequenceNumber);id(s,h)}),s.remoteSyncer.applyRemoteEvent(a)}(n,t))}catch(r){Y(Pr,"Failed to raise snapshot:",r),yield ba(n,r)}})}function ba(n,e,t){return p(this,null,function*(){if(!Ci(e))throw e;n.Ia.add(1),yield no(n),n.Aa.set("Offline"),t||(t=()=>ty(n.localStore)),n.asyncQueue.enqueueRetryable(()=>p(this,null,function*(){Y(Pr,"Retrying IndexedDB access"),yield t(),n.Ia.delete(1),yield fc(n)}))})}function ay(n,e){return e().catch(t=>ba(n,t,e))}function mc(n){return p(this,null,function*(){const e=ae(n),t=ar(e);let r=e.Pa.length>0?e.Pa[e.Pa.length-1].batchId:zu;for(;H0(e);)try{const i=yield k0(e.localStore,r);if(i===null){e.Pa.length===0&&t.B_();break}r=i.batchId,K0(e,i)}catch(i){yield ba(e,i)}cy(e)&&ly(e)})}function H0(n){return jr(n)&&n.Pa.length<10}function K0(n,e){n.Pa.push(e);const t=ar(n);t.x_()&&t.Z_&&t.X_(e.mutations)}function cy(n){return jr(n)&&!ar(n).M_()&&n.Pa.length>0}function ly(n){ar(n).start()}function Q0(n){return p(this,null,function*(){ar(n).na()})}function Y0(n){return p(this,null,function*(){const e=ar(n);for(const t of n.Pa)e.X_(t.mutations)})}function J0(n,e,t){return p(this,null,function*(){const r=n.Pa.shift(),i=Yu.from(r,e,t);yield ay(n,()=>n.remoteSyncer.applySuccessfulWrite(i)),yield mc(n)})}function X0(n,e){return p(this,null,function*(){e&&ar(n).Z_&&(yield function(r,i){return p(this,null,function*(){if(function(o){return Lb(o)&&o!==V.ABORTED}(i.code)){const s=r.Pa.shift();ar(r).N_(),yield ay(r,()=>r.remoteSyncer.rejectFailedWrite(s.batchId,i)),yield mc(r)}})}(n,e)),cy(n)&&ly(n)})}function km(n,e){return p(this,null,function*(){const t=ae(n);t.asyncQueue.verifyOperationInProgress(),Y(Pr,"RemoteStore received new credentials");const r=jr(t);t.Ia.add(3),yield no(t),r&&t.Aa.set("Unknown"),yield t.remoteSyncer.handleCredentialChange(e),t.Ia.delete(3),yield fc(t)})}function Z0(n,e){return p(this,null,function*(){const t=ae(n);e?(t.Ia.delete(2),yield fc(t)):e||(t.Ia.add(2),yield no(t),t.Aa.set("Unknown"))})}function Pi(n){return n.Va||(n.Va=function(t,r,i){const s=ae(t);return s.ia(),new x0(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(n.datastore,n.asyncQueue,{Zo:j0.bind(null,n),e_:z0.bind(null,n),n_:G0.bind(null,n),J_:W0.bind(null,n)}),n.da.push(e=>p(this,null,function*(){e?(n.Va.N_(),od(n)?sd(n):n.Aa.set("Unknown")):(yield n.Va.stop(),oy(n))}))),n.Va}function ar(n){return n.ma||(n.ma=function(t,r,i){const s=ae(t);return s.ia(),new U0(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(n.datastore,n.asyncQueue,{Zo:()=>Promise.resolve(),e_:Q0.bind(null,n),n_:X0.bind(null,n),ea:Y0.bind(null,n),ta:J0.bind(null,n)}),n.da.push(e=>p(this,null,function*(){e?(n.ma.N_(),yield mc(n)):(yield n.ma.stop(),n.Pa.length>0&&(Y(Pr,`Stopping write stream with ${n.Pa.length} pending writes`),n.Pa=[]))}))),n.ma}/**
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
 */class ad{constructor(e,t,r,i,s){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new Rn,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,t,r,i,s){const o=Date.now()+r,a=new ad(e,t,o,i,s);return a.start(r),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new W(V.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function cd(n,e){if(Dn("AsyncQueue",`${e}: ${n}`),Ci(n))return new W(V.UNAVAILABLE,`${e}: ${n}`);throw n}/**
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
 */class ci{static emptySet(e){return new ci(e.comparator)}constructor(e){this.comparator=e?(t,r)=>e(t,r)||ee.comparator(t.key,r.key):(t,r)=>ee.comparator(t.key,r.key),this.keyedMap=cs(),this.sortedSet=new ze(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,r)=>(e(t),!1))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof ci)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;t.hasNext();){const i=t.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(t=>{e.push(t.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const r=new ci;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=t,r}}/**
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
 */class Cm{constructor(){this.fa=new ze(ee.comparator)}track(e){const t=e.doc.key,r=this.fa.get(t);r?e.type!==0&&r.type===3?this.fa=this.fa.insert(t,e):e.type===3&&r.type!==1?this.fa=this.fa.insert(t,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.fa=this.fa.insert(t,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.fa=this.fa.insert(t,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.fa=this.fa.remove(t):e.type===1&&r.type===2?this.fa=this.fa.insert(t,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.fa=this.fa.insert(t,{type:2,doc:e.doc}):ie(63341,{At:e,ga:r}):this.fa=this.fa.insert(t,e)}pa(){const e=[];return this.fa.inorderTraversal((t,r)=>{e.push(r)}),e}}class wi{constructor(e,t,r,i,s,o,a,c,u){this.query=e,this.docs=t,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=c,this.hasCachedResults=u}static fromInitialDocuments(e,t,r,i,s){const o=[];return t.forEach(a=>{o.push({type:0,doc:a})}),new wi(e,t,ci.emptySet(t),o,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&oc(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,r=e.docChanges;if(t.length!==r.length)return!1;for(let i=0;i<t.length;i++)if(t[i].type!==r[i].type||!t[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
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
 */class eS{constructor(){this.ya=void 0,this.wa=[]}Sa(){return this.wa.some(e=>e.ba())}}class tS{constructor(){this.queries=Pm(),this.onlineState="Unknown",this.Da=new Set}terminate(){(function(t,r){const i=ae(t),s=i.queries;i.queries=Pm(),s.forEach((o,a)=>{for(const c of a.wa)c.onError(r)})})(this,new W(V.ABORTED,"Firestore shutting down"))}}function Pm(){return new qr(n=>P_(n),oc)}function ld(n,e){return p(this,null,function*(){const t=ae(n);let r=3;const i=e.query;let s=t.queries.get(i);s?!s.Sa()&&e.ba()&&(r=2):(s=new eS,r=e.ba()?0:1);try{switch(r){case 0:s.ya=yield t.onListen(i,!0);break;case 1:s.ya=yield t.onListen(i,!1);break;case 2:yield t.onFirstRemoteStoreListen(i)}}catch(o){const a=cd(o,`Initialization of query '${Xr(e.query)}' failed`);return void e.onError(a)}t.queries.set(i,s),s.wa.push(e),e.va(t.onlineState),s.ya&&e.Ca(s.ya)&&dd(t)})}function ud(n,e){return p(this,null,function*(){const t=ae(n),r=e.query;let i=3;const s=t.queries.get(r);if(s){const o=s.wa.indexOf(e);o>=0&&(s.wa.splice(o,1),s.wa.length===0?i=e.ba()?0:1:!s.Sa()&&e.ba()&&(i=2))}switch(i){case 0:return t.queries.delete(r),t.onUnlisten(r,!0);case 1:return t.queries.delete(r),t.onUnlisten(r,!1);case 2:return t.onLastRemoteStoreUnlisten(r);default:return}})}function nS(n,e){const t=ae(n);let r=!1;for(const i of e){const s=i.query,o=t.queries.get(s);if(o){for(const a of o.wa)a.Ca(i)&&(r=!0);o.ya=i}}r&&dd(t)}function rS(n,e,t){const r=ae(n),i=r.queries.get(e);if(i)for(const s of i.wa)s.onError(t);r.queries.delete(e)}function dd(n){n.Da.forEach(e=>{e.next()})}var Yl,Nm;(Nm=Yl||(Yl={})).Fa="default",Nm.Cache="cache";class hd{constructor(e,t,r){this.query=e,this.Ma=t,this.xa=!1,this.Oa=null,this.onlineState="Unknown",this.options=r||{}}Ca(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new wi(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.xa?this.Na(e)&&(this.Ma.next(e),t=!0):this.Ba(e,this.onlineState)&&(this.La(e),t=!0),this.Oa=e,t}onError(e){this.Ma.error(e)}va(e){this.onlineState=e;let t=!1;return this.Oa&&!this.xa&&this.Ba(this.Oa,e)&&(this.La(this.Oa),t=!0),t}Ba(e,t){if(!e.fromCache||!this.ba())return!0;const r=t!=="Offline";return(!this.options.ka||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}Na(e){if(e.docChanges.length>0)return!0;const t=this.Oa&&this.Oa.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}La(e){e=wi.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.xa=!0,this.Ma.next(e)}ba(){return this.options.source!==Yl.Cache}}/**
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
 */class uy{constructor(e){this.key=e}}class dy{constructor(e){this.key=e}}class iS{constructor(e,t){this.query=e,this.Ha=t,this.Ya=null,this.hasCachedResults=!1,this.current=!1,this.Za=he(),this.mutatedKeys=he(),this.Xa=N_(e),this.eu=new ci(this.Xa)}get tu(){return this.Ha}nu(e,t){const r=t?t.ru:new Cm,i=t?t.eu:this.eu;let s=t?t.mutatedKeys:this.mutatedKeys,o=i,a=!1;const c=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,u=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((d,h)=>{const m=i.get(d),_=ac(this.query,h)?h:null,w=!!m&&this.mutatedKeys.has(m.key),v=!!_&&(_.hasLocalMutations||this.mutatedKeys.has(_.key)&&_.hasCommittedMutations);let E=!1;m&&_?m.data.isEqual(_.data)?w!==v&&(r.track({type:3,doc:_}),E=!0):this.iu(m,_)||(r.track({type:2,doc:_}),E=!0,(c&&this.Xa(_,c)>0||u&&this.Xa(_,u)<0)&&(a=!0)):!m&&_?(r.track({type:0,doc:_}),E=!0):m&&!_&&(r.track({type:1,doc:m}),E=!0,(c||u)&&(a=!0)),E&&(_?(o=o.add(_),s=v?s.add(d):s.delete(d)):(o=o.delete(d),s=s.delete(d)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const d=this.query.limitType==="F"?o.last():o.first();o=o.delete(d.key),s=s.delete(d.key),r.track({type:1,doc:d})}return{eu:o,ru:r,Ds:a,mutatedKeys:s}}iu(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,r,i){const s=this.eu;this.eu=e.eu,this.mutatedKeys=e.mutatedKeys;const o=e.ru.pa();o.sort((d,h)=>function(_,w){const v=E=>{switch(E){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return ie(20277,{At:E})}};return v(_)-v(w)}(d.type,h.type)||this.Xa(d.doc,h.doc)),this.su(r),i=i!=null&&i;const a=t&&!i?this.ou():[],c=this.Za.size===0&&this.current&&!i?1:0,u=c!==this.Ya;return this.Ya=c,o.length!==0||u?{snapshot:new wi(this.query,e.eu,s,o,e.mutatedKeys,c===0,u,!1,!!r&&r.resumeToken.approximateByteSize()>0),_u:a}:{_u:a}}va(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({eu:this.eu,ru:new Cm,mutatedKeys:this.mutatedKeys,Ds:!1},!1)):{_u:[]}}au(e){return!this.Ha.has(e)&&!!this.eu.has(e)&&!this.eu.get(e).hasLocalMutations}su(e){e&&(e.addedDocuments.forEach(t=>this.Ha=this.Ha.add(t)),e.modifiedDocuments.forEach(t=>{}),e.removedDocuments.forEach(t=>this.Ha=this.Ha.delete(t)),this.current=e.current)}ou(){if(!this.current)return[];const e=this.Za;this.Za=he(),this.eu.forEach(r=>{this.au(r.key)&&(this.Za=this.Za.add(r.key))});const t=[];return e.forEach(r=>{this.Za.has(r)||t.push(new dy(r))}),this.Za.forEach(r=>{e.has(r)||t.push(new uy(r))}),t}uu(e){this.Ha=e.qs,this.Za=he();const t=this.nu(e.documents);return this.applyChanges(t,!0)}cu(){return wi.fromInitialDocuments(this.query,this.eu,this.mutatedKeys,this.Ya===0,this.hasCachedResults)}}const fd="SyncEngine";class sS{constructor(e,t,r){this.query=e,this.targetId=t,this.view=r}}class oS{constructor(e){this.key=e,this.lu=!1}}class aS{constructor(e,t,r,i,s,o){this.localStore=e,this.remoteStore=t,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.hu={},this.Pu=new qr(a=>P_(a),oc),this.Tu=new Map,this.Iu=new Set,this.du=new ze(ee.comparator),this.Eu=new Map,this.Au=new Zu,this.Ru={},this.Vu=new Map,this.mu=yi.ur(),this.onlineState="Unknown",this.fu=void 0}get isPrimaryClient(){return this.fu===!0}}function cS(n,e,t=!0){return p(this,null,function*(){const r=_y(n);let i;const s=r.Pu.get(e);return s?(r.sharedClientState.addLocalQueryTarget(s.targetId),i=s.view.cu()):i=yield hy(r,e,t,!0),i})}function lS(n,e){return p(this,null,function*(){const t=_y(n);yield hy(t,e,!0,!1)})}function hy(n,e,t,r){return p(this,null,function*(){const i=yield C0(n.localStore,an(e)),s=i.targetId,o=n.sharedClientState.addLocalQueryTarget(s,t);let a;return r&&(a=yield uS(n,e,s,o==="current",i.resumeToken)),n.isPrimaryClient&&t&&iy(n.remoteStore,i),a})}function uS(n,e,t,r,i){return p(this,null,function*(){n.gu=(h,m,_)=>function(v,E,P,O){return p(this,null,function*(){let M=E.view.nu(P);M.Ds&&(M=yield Im(v.localStore,E.query,!1).then(({documents:R})=>E.view.nu(R,M)));const x=O&&O.targetChanges.get(E.targetId),Z=O&&O.targetMismatches.get(E.targetId)!=null,K=E.view.applyChanges(M,v.isPrimaryClient,x,Z);return Om(v,E.targetId,K._u),K.snapshot})}(n,h,m,_);const s=yield Im(n.localStore,e,!0),o=new iS(e,s.qs),a=o.nu(s.documents),c=to.createSynthesizedTargetChangeForCurrentChange(t,r&&n.onlineState!=="Offline",i),u=o.applyChanges(a,n.isPrimaryClient,c);Om(n,t,u._u);const d=new sS(e,t,o);return n.Pu.set(e,d),n.Tu.has(t)?n.Tu.get(t).push(e):n.Tu.set(t,[e]),u.snapshot})}function dS(n,e,t){return p(this,null,function*(){const r=ae(n),i=r.Pu.get(e),s=r.Tu.get(i.targetId);if(s.length>1)return r.Tu.set(i.targetId,s.filter(o=>!oc(o,e))),void r.Pu.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(i.targetId),r.sharedClientState.isActiveQueryTarget(i.targetId)||(yield Kl(r.localStore,i.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(i.targetId),t&&rd(r.remoteStore,i.targetId),Jl(r,i.targetId)}).catch(ki))):(Jl(r,i.targetId),yield Kl(r.localStore,i.targetId,!0))})}function hS(n,e){return p(this,null,function*(){const t=ae(n),r=t.Pu.get(e),i=t.Tu.get(r.targetId);t.isPrimaryClient&&i.length===1&&(t.sharedClientState.removeLocalQueryTarget(r.targetId),rd(t.remoteStore,r.targetId))})}function fS(n,e,t){return p(this,null,function*(){const r=vS(n);try{const i=yield function(o,a){const c=ae(o),u=$.now(),d=a.reduce((_,w)=>_.add(w.key),he());let h,m;return c.persistence.runTransaction("Locally write mutations","readwrite",_=>{let w=Ln(),v=he();return c.Os.getEntries(_,d).next(E=>{w=E,w.forEach((P,O)=>{O.isValidDocument()||(v=v.add(P))})}).next(()=>c.localDocuments.getOverlayedDocuments(_,w)).next(E=>{h=E;const P=[];for(const O of a){const M=Cb(O,h.get(O.key).overlayedDocument);M!=null&&P.push(new mr(O.key,M,T_(M.value.mapValue),vt.exists(!0)))}return c.mutationQueue.addMutationBatch(_,u,P,a)}).next(E=>{m=E;const P=E.applyToLocalDocumentSet(h,v);return c.documentOverlayCache.saveOverlays(_,E.batchId,P)})}).then(()=>({batchId:m.batchId,changes:O_(h)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(o,a,c){let u=o.Ru[o.currentUser.toKey()];u||(u=new ze(ue)),u=u.insert(a,c),o.Ru[o.currentUser.toKey()]=u}(r,i.batchId,t),yield ro(r,i.changes),yield mc(r.remoteStore)}catch(i){const s=cd(i,"Failed to persist write");t.reject(s)}})}function fy(n,e){return p(this,null,function*(){const t=ae(n);try{const r=yield b0(t.localStore,e);e.targetChanges.forEach((i,s)=>{const o=t.Eu.get(s);o&&(Ie(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1,22616),i.addedDocuments.size>0?o.lu=!0:i.modifiedDocuments.size>0?Ie(o.lu,14607):i.removedDocuments.size>0&&(Ie(o.lu,42227),o.lu=!1))}),yield ro(t,r,e)}catch(r){yield ki(r)}})}function Dm(n,e,t){const r=ae(n);if(r.isPrimaryClient&&t===0||!r.isPrimaryClient&&t===1){const i=[];r.Pu.forEach((s,o)=>{const a=o.view.va(e);a.snapshot&&i.push(a.snapshot)}),function(o,a){const c=ae(o);c.onlineState=a;let u=!1;c.queries.forEach((d,h)=>{for(const m of h.wa)m.va(a)&&(u=!0)}),u&&dd(c)}(r.eventManager,e),i.length&&r.hu.J_(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}function mS(n,e,t){return p(this,null,function*(){const r=ae(n);r.sharedClientState.updateQueryState(e,"rejected",t);const i=r.Eu.get(e),s=i&&i.key;if(s){let o=new ze(ee.comparator);o=o.insert(s,ut.newNoDocument(s,oe.min()));const a=he().add(s),c=new dc(oe.min(),new Map,new ze(ue),o,a);yield fy(r,c),r.du=r.du.remove(s),r.Eu.delete(e),md(r)}else yield Kl(r.localStore,e,!1).then(()=>Jl(r,e,t)).catch(ki)})}function pS(n,e){return p(this,null,function*(){const t=ae(n),r=e.batch.batchId;try{const i=yield R0(t.localStore,e);py(t,r,null),my(t,r),t.sharedClientState.updateMutationState(r,"acknowledged"),yield ro(t,i)}catch(i){yield ki(i)}})}function gS(n,e,t){return p(this,null,function*(){const r=ae(n);try{const i=yield function(o,a){const c=ae(o);return c.persistence.runTransaction("Reject batch","readwrite-primary",u=>{let d;return c.mutationQueue.lookupMutationBatch(u,a).next(h=>(Ie(h!==null,37113),d=h.keys(),c.mutationQueue.removeMutationBatch(u,h))).next(()=>c.mutationQueue.performConsistencyCheck(u)).next(()=>c.documentOverlayCache.removeOverlaysForBatchId(u,d,a)).next(()=>c.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(u,d)).next(()=>c.localDocuments.getDocuments(u,d))})}(r.localStore,e);py(r,e,t),my(r,e),r.sharedClientState.updateMutationState(e,"rejected",t),yield ro(r,i)}catch(i){yield ki(i)}})}function my(n,e){(n.Vu.get(e)||[]).forEach(t=>{t.resolve()}),n.Vu.delete(e)}function py(n,e,t){const r=ae(n);let i=r.Ru[r.currentUser.toKey()];if(i){const s=i.get(e);s&&(t?s.reject(t):s.resolve(),i=i.remove(e)),r.Ru[r.currentUser.toKey()]=i}}function Jl(n,e,t=null){n.sharedClientState.removeLocalQueryTarget(e);for(const r of n.Tu.get(e))n.Pu.delete(r),t&&n.hu.pu(r,t);n.Tu.delete(e),n.isPrimaryClient&&n.Au.zr(e).forEach(r=>{n.Au.containsKey(r)||gy(n,r)})}function gy(n,e){n.Iu.delete(e.path.canonicalString());const t=n.du.get(e);t!==null&&(rd(n.remoteStore,t),n.du=n.du.remove(e),n.Eu.delete(t),md(n))}function Om(n,e,t){for(const r of t)r instanceof uy?(n.Au.addReference(r.key,e),_S(n,r)):r instanceof dy?(Y(fd,"Document no longer in limbo: "+r.key),n.Au.removeReference(r.key,e),n.Au.containsKey(r.key)||gy(n,r.key)):ie(19791,{yu:r})}function _S(n,e){const t=e.key,r=t.path.canonicalString();n.du.get(t)||n.Iu.has(r)||(Y(fd,"New document in limbo: "+t),n.Iu.add(r),md(n))}function md(n){for(;n.Iu.size>0&&n.du.size<n.maxConcurrentLimboResolutions;){const e=n.Iu.values().next().value;n.Iu.delete(e);const t=new ee(Se.fromString(e)),r=n.mu.next();n.Eu.set(r,new oS(t)),n.du=n.du.insert(t,r),iy(n.remoteStore,new Hn(an(sc(t.path)),r,"TargetPurposeLimboResolution",nc.ue))}}function ro(n,e,t){return p(this,null,function*(){const r=ae(n),i=[],s=[],o=[];r.Pu.isEmpty()||(r.Pu.forEach((a,c)=>{o.push(r.gu(c,e,t).then(u=>{var d;if((u||t)&&r.isPrimaryClient){const h=u?!u.fromCache:(d=t==null?void 0:t.targetChanges.get(c.targetId))===null||d===void 0?void 0:d.current;r.sharedClientState.updateQueryState(c.targetId,h?"current":"not-current")}if(u){i.push(u);const h=td.Es(c.targetId,u);s.push(h)}}))}),yield Promise.all(o),r.hu.J_(i),yield function(c,u){return p(this,null,function*(){const d=ae(c);try{yield d.persistence.runTransaction("notifyLocalViewChanges","readwrite",h=>B.forEach(u,m=>B.forEach(m.Is,_=>d.persistence.referenceDelegate.addReference(h,m.targetId,_)).next(()=>B.forEach(m.ds,_=>d.persistence.referenceDelegate.removeReference(h,m.targetId,_)))))}catch(h){if(!Ci(h))throw h;Y(nd,"Failed to update sequence numbers: "+h)}for(const h of u){const m=h.targetId;if(!h.fromCache){const _=d.Fs.get(m),w=_.snapshotVersion,v=_.withLastLimboFreeSnapshotVersion(w);d.Fs=d.Fs.insert(m,v)}}})}(r.localStore,s))})}function yS(n,e){return p(this,null,function*(){const t=ae(n);if(!t.currentUser.isEqual(e)){Y(fd,"User change. New user:",e.toKey());const r=yield ey(t.localStore,e);t.currentUser=e,function(s,o){s.Vu.forEach(a=>{a.forEach(c=>{c.reject(new W(V.CANCELLED,o))})}),s.Vu.clear()}(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),yield ro(t,r.Bs)}})}function wS(n,e){const t=ae(n),r=t.Eu.get(e);if(r&&r.lu)return he().add(r.key);{let i=he();const s=t.Tu.get(e);if(!s)return i;for(const o of s){const a=t.Pu.get(o);i=i.unionWith(a.view.tu)}return i}}function _y(n){const e=ae(n);return e.remoteStore.remoteSyncer.applyRemoteEvent=fy.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=wS.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=mS.bind(null,e),e.hu.J_=nS.bind(null,e.eventManager),e.hu.pu=rS.bind(null,e.eventManager),e}function vS(n){const e=ae(n);return e.remoteStore.remoteSyncer.applySuccessfulWrite=pS.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=gS.bind(null,e),e}class Sa{constructor(){this.kind="memory",this.synchronizeTabs=!1}initialize(e){return p(this,null,function*(){this.serializer=hc(e.databaseInfo.databaseId),this.sharedClientState=this.bu(e),this.persistence=this.Du(e),yield this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Cu(e,this.localStore),this.indexBackfillerScheduler=this.Fu(e,this.localStore)})}Cu(e,t){return null}Fu(e,t){return null}vu(e){return A0(this.persistence,new E0,e.initialUser,this.serializer)}Du(e){return new Z_(ed.Vi,this.serializer)}bu(e){return new N0}terminate(){return p(this,null,function*(){var e,t;(e=this.gcScheduler)===null||e===void 0||e.stop(),(t=this.indexBackfillerScheduler)===null||t===void 0||t.stop(),this.sharedClientState.shutdown(),yield this.persistence.shutdown()})}}Sa.provider={build:()=>new Sa};class ES extends Sa{constructor(e){super(),this.cacheSizeBytes=e}Cu(e,t){Ie(this.persistence.referenceDelegate instanceof Ra,46915);const r=this.persistence.referenceDelegate.garbageCollector;return new o0(r,e.asyncQueue,t)}Du(e){const t=this.cacheSizeBytes!==void 0?Et.withCacheSize(this.cacheSizeBytes):Et.DEFAULT;return new Z_(r=>Ra.Vi(r,t),this.serializer)}}class Xl{initialize(e,t){return p(this,null,function*(){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Dm(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=yS.bind(null,this.syncEngine),yield Z0(this.remoteStore,this.syncEngine.isPrimaryClient))})}createEventManager(e){return function(){return new tS}()}createDatastore(e){const t=hc(e.databaseInfo.databaseId),r=function(s){return new M0(s)}(e.databaseInfo);return function(s,o,a,c){return new B0(s,o,a,c)}(e.authCredentials,e.appCheckCredentials,r,t)}createRemoteStore(e){return function(r,i,s,o,a){return new q0(r,i,s,o,a)}(this.localStore,this.datastore,e.asyncQueue,t=>Dm(this.syncEngine,t,0),function(){return bm.C()?new bm:new D0}())}createSyncEngine(e,t){return function(i,s,o,a,c,u,d){const h=new aS(i,s,o,a,c,u);return d&&(h.fu=!0),h}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}terminate(){return p(this,null,function*(){var e,t;yield function(i){return p(this,null,function*(){const s=ae(i);Y(Pr,"RemoteStore shutting down."),s.Ia.add(5),yield no(s),s.Ea.shutdown(),s.Aa.set("Unknown")})}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(t=this.eventManager)===null||t===void 0||t.terminate()})}}Xl.provider={build:()=>new Xl};/**
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
 */class pd{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.xu(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.xu(this.observer.error,e):Dn("Uncaught Error in snapshot listener:",e.toString()))}Ou(){this.muted=!0}xu(e,t){setTimeout(()=>{this.muted||e(t)},0)}}/**
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
 */const cr="FirestoreClient";class TS{constructor(e,t,r,i,s){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=r,this.databaseInfo=i,this.user=lt.UNAUTHENTICATED,this.clientId=ec.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=s,this.authCredentials.start(r,o=>p(this,null,function*(){Y(cr,"Received user=",o.uid),yield this.authCredentialListener(o),this.user=o})),this.appCheckCredentials.start(r,o=>(Y(cr,"Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Rn;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(()=>p(this,null,function*(){try{this._onlineComponents&&(yield this._onlineComponents.terminate()),this._offlineComponents&&(yield this._offlineComponents.terminate()),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const r=cd(t,"Failed to shutdown persistence");e.reject(r)}})),e.promise}}function ul(n,e){return p(this,null,function*(){n.asyncQueue.verifyOperationInProgress(),Y(cr,"Initializing OfflineComponentProvider");const t=n.configuration;yield e.initialize(t);let r=t.initialUser;n.setCredentialChangeListener(i=>p(this,null,function*(){r.isEqual(i)||(yield ey(e.localStore,i),r=i)})),e.persistence.setDatabaseDeletedListener(()=>{On("Terminating Firestore due to IndexedDb database deletion"),n.terminate().then(()=>{Y("Terminating Firestore due to IndexedDb database deletion completed successfully")}).catch(i=>{On("Terminating Firestore due to IndexedDb database deletion failed",i)})}),n._offlineComponents=e})}function Lm(n,e){return p(this,null,function*(){n.asyncQueue.verifyOperationInProgress();const t=yield IS(n);Y(cr,"Initializing OnlineComponentProvider"),yield e.initialize(t,n.configuration),n.setCredentialChangeListener(r=>km(e.remoteStore,r)),n.setAppCheckTokenChangeListener((r,i)=>km(e.remoteStore,i)),n._onlineComponents=e})}function IS(n){return p(this,null,function*(){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){Y(cr,"Using user provided OfflineComponentProvider");try{yield ul(n,n._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!function(i){return i.name==="FirebaseError"?i.code===V.FAILED_PRECONDITION||i.code===V.UNIMPLEMENTED:!(typeof DOMException!="undefined"&&i instanceof DOMException)||i.code===22||i.code===20||i.code===11}(t))throw t;On("Error using user provided cache. Falling back to memory cache: "+t),yield ul(n,new Sa)}}else Y(cr,"Using default OfflineComponentProvider"),yield ul(n,new ES(void 0));return n._offlineComponents})}function yy(n){return p(this,null,function*(){return n._onlineComponents||(n._uninitializedComponentsProvider?(Y(cr,"Using user provided OnlineComponentProvider"),yield Lm(n,n._uninitializedComponentsProvider._online)):(Y(cr,"Using default OnlineComponentProvider"),yield Lm(n,new Xl))),n._onlineComponents})}function AS(n){return yy(n).then(e=>e.syncEngine)}function ka(n){return p(this,null,function*(){const e=yield yy(n),t=e.eventManager;return t.onListen=cS.bind(null,e.syncEngine),t.onUnlisten=dS.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=lS.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=hS.bind(null,e.syncEngine),t})}function RS(n,e,t={}){const r=new Rn;return n.asyncQueue.enqueueAndForget(()=>p(this,null,function*(){return function(s,o,a,c,u){const d=new pd({next:m=>{d.Ou(),o.enqueueAndForget(()=>ud(s,h));const _=m.docs.has(a);!_&&m.fromCache?u.reject(new W(V.UNAVAILABLE,"Failed to get document because the client is offline.")):_&&m.fromCache&&c&&c.source==="server"?u.reject(new W(V.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):u.resolve(m)},error:m=>u.reject(m)}),h=new hd(sc(a.path),d,{includeMetadataChanges:!0,ka:!0});return ld(s,h)}(yield ka(n),n.asyncQueue,e,t,r)})),r.promise}function bS(n,e,t={}){const r=new Rn;return n.asyncQueue.enqueueAndForget(()=>p(this,null,function*(){return function(s,o,a,c,u){const d=new pd({next:m=>{d.Ou(),o.enqueueAndForget(()=>ud(s,h)),m.fromCache&&c.source==="server"?u.reject(new W(V.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):u.resolve(m)},error:m=>u.reject(m)}),h=new hd(a,d,{includeMetadataChanges:!0,ka:!0});return ld(s,h)}(yield ka(n),n.asyncQueue,e,t,r)})),r.promise}/**
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
 */function wy(n){const e={};return n.timeoutSeconds!==void 0&&(e.timeoutSeconds=n.timeoutSeconds),e}/**
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
 */const Vm=new Map;/**
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
 */const vy="firestore.googleapis.com",Mm=!0;class xm{constructor(e){var t,r;if(e.host===void 0){if(e.ssl!==void 0)throw new W(V.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=vy,this.ssl=Mm}else this.host=e.host,this.ssl=(t=e.ssl)!==null&&t!==void 0?t:Mm;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=X_;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<i0)throw new W(V.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}u_("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=wy((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new W(V.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new W(V.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new W(V.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class io{constructor(e,t,r,i){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new xm({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new W(V.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new W(V.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new xm(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new c_;switch(r.type){case"firstParty":return new UR(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new W(V.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}_restart(){return p(this,null,function*(){this._terminateTask==="notTerminated"?yield this._terminate():this._terminateTask="notTerminated"})}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const r=Vm.get(t);r&&(Y("ComponentProvider","Removing Datastore"),Vm.delete(t),r.terminate())}(this),Promise.resolve()}}function Ey(n,e,t,r={}){var i;n=nt(n,io);const s=hn(e),o=n._getSettings(),a=Object.assign(Object.assign({},o),{emulatorOptions:n._getEmulatorOptions()}),c=`${e}:${t}`;s&&(Wa(`https://${c}`),Ha("Firestore",!0)),o.host!==vy&&o.host!==c&&On("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const u=Object.assign(Object.assign({},o),{host:c,ssl:s,emulatorOptions:r});if(!Cn(u,a)&&(n._setSettings(u),r.mockUserToken)){let d,h;if(typeof r.mockUserToken=="string")d=r.mockUserToken,h=lt.MOCK_USER;else{d=Ru(r.mockUserToken,(i=n._app)===null||i===void 0?void 0:i.options.projectId);const m=r.mockUserToken.sub||r.mockUserToken.user_id;if(!m)throw new W(V.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");h=new lt(m)}n._authCredentials=new VR(new a_(d,h))}}/**
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
 */class Zt{constructor(e,t,r){this.converter=t,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Zt(this.firestore,e,this._query)}}class Ve{constructor(e,t,r){this.converter=t,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new bn(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Ve(this.firestore,e,this._key)}toJSON(){return{type:Ve._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,t,r){if(Zs(t,Ve._jsonSchema))return new Ve(e,r||null,new ee(Se.fromString(t.referencePath)))}}Ve._jsonSchemaVersion="firestore/documentReference/1.0",Ve._jsonSchema={type:je("string",Ve._jsonSchemaVersion),referencePath:je("string")};class bn extends Zt{constructor(e,t,r){super(e,t,sc(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Ve(this.firestore,null,new ee(e))}withConverter(e){return new bn(this.firestore,e,this._path)}}function q(n,e,...t){if(n=pe(n),ju("collection","path",e),n instanceof io){const r=Se.fromString(e,...t);return Yf(r),new bn(n,null,r)}{if(!(n instanceof Ve||n instanceof bn))throw new W(V.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(Se.fromString(e,...t));return Yf(r),new bn(n.firestore,null,r)}}function Ty(n,e){if(n=nt(n,io),ju("collectionGroup","collection id",e),e.indexOf("/")>=0)throw new W(V.INVALID_ARGUMENT,`Invalid collection ID '${e}' passed to function collectionGroup(). Collection IDs must not contain '/'.`);return new Zt(n,null,function(r){return new $r(Se.emptyPath(),r)}(e))}function U(n,e,...t){if(n=pe(n),arguments.length===1&&(e=ec.newId()),ju("doc","path",e),n instanceof io){const r=Se.fromString(e,...t);return Qf(r),new Ve(n,null,new ee(r))}{if(!(n instanceof Ve||n instanceof bn))throw new W(V.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(Se.fromString(e,...t));return Qf(r),new Ve(n.firestore,n instanceof bn?n.converter:null,new ee(r))}}/**
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
 */const Um="AsyncQueue";class Fm{constructor(e=Promise.resolve()){this.Zu=[],this.Xu=!1,this.ec=[],this.tc=null,this.nc=!1,this.rc=!1,this.sc=[],this.F_=new ny(this,"async_queue_retry"),this.oc=()=>{const r=ll();r&&Y(Um,"Visibility state changed to "+r.visibilityState),this.F_.y_()},this._c=e;const t=ll();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.oc)}get isShuttingDown(){return this.Xu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.ac(),this.uc(e)}enterRestrictedMode(e){if(!this.Xu){this.Xu=!0,this.rc=e||!1;const t=ll();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.oc)}}enqueue(e){if(this.ac(),this.Xu)return new Promise(()=>{});const t=new Rn;return this.uc(()=>this.Xu&&this.rc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Zu.push(e),this.cc()))}cc(){return p(this,null,function*(){if(this.Zu.length!==0){try{yield this.Zu[0](),this.Zu.shift(),this.F_.reset()}catch(e){if(!Ci(e))throw e;Y(Um,"Operation failed with retryable error: "+e)}this.Zu.length>0&&this.F_.g_(()=>this.cc())}})}uc(e){const t=this._c.then(()=>(this.nc=!0,e().catch(r=>{throw this.tc=r,this.nc=!1,Dn("INTERNAL UNHANDLED ERROR: ",Bm(r)),r}).then(r=>(this.nc=!1,r))));return this._c=t,t}enqueueAfterDelay(e,t,r){this.ac(),this.sc.indexOf(e)>-1&&(t=0);const i=ad.createAndSchedule(this,e,t,r,s=>this.lc(s));return this.ec.push(i),i}ac(){this.tc&&ie(47125,{hc:Bm(this.tc)})}verifyOperationInProgress(){}Pc(){return p(this,null,function*(){let e;do e=this._c,yield e;while(e!==this._c)})}Tc(e){for(const t of this.ec)if(t.timerId===e)return!0;return!1}Ic(e){return this.Pc().then(()=>{this.ec.sort((t,r)=>t.targetTimeMs-r.targetTimeMs);for(const t of this.ec)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.Pc()})}dc(e){this.sc.push(e)}lc(e){const t=this.ec.indexOf(e);this.ec.splice(t,1)}}function Bm(n){let e=n.message||"";return n.stack&&(e=n.stack.includes(n.message)?n.stack:n.message+`
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
 */function $m(n){return function(t,r){if(typeof t!="object"||t===null)return!1;const i=t;for(const s of r)if(s in i&&typeof i[s]=="function")return!0;return!1}(n,["next","error","complete"])}class Jt extends io{constructor(e,t,r,i){super(e,t,r,i),this.type="firestore",this._queue=new Fm,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}_terminate(){return p(this,null,function*(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new Fm(e),this._firestoreClient=void 0,yield e}})}}function Zl(n,e){const t=typeof n=="object"?n:Ks(),r=typeof n=="string"?n:wa,i=Un(t,"firestore").getImmediate({identifier:r});if(!i._initialized){const s=Iu("firestore");s&&Ey(i,...s)}return i}function Ni(n){if(n._terminated)throw new W(V.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||SS(n),n._firestoreClient}function SS(n){var e,t,r;const i=n._freezeSettings(),s=function(a,c,u,d){return new eb(a,c,u,d.host,d.ssl,d.experimentalForceLongPolling,d.experimentalAutoDetectLongPolling,wy(d.experimentalLongPollingOptions),d.useFetchStreams,d.isUsingEmulator)}(n._databaseId,((e=n._app)===null||e===void 0?void 0:e.options.appId)||"",n._persistenceKey,i);n._componentsProvider||!((t=i.localCache)===null||t===void 0)&&t._offlineComponentProvider&&(!((r=i.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(n._componentsProvider={_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider}),n._firestoreClient=new TS(n._authCredentials,n._appCheckCredentials,n._queue,s,n._componentsProvider&&function(a){const c=a==null?void 0:a._online.build();return{_offline:a==null?void 0:a._offline.build(c),_online:c}}(n._componentsProvider))}/**
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
 */class Pt{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Pt(Ze.fromBase64String(e))}catch(t){throw new W(V.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new Pt(Ze.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:Pt._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(Zs(e,Pt._jsonSchema))return Pt.fromBase64String(e.bytes)}}Pt._jsonSchemaVersion="firestore/bytes/1.0",Pt._jsonSchema={type:je("string",Pt._jsonSchemaVersion),bytes:je("string")};/**
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
 */class Di{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new W(V.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Je(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class so{constructor(e){this._methodName=e}}/**
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
 */class Ht{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new W(V.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new W(V.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return ue(this._lat,e._lat)||ue(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:Ht._jsonSchemaVersion}}static fromJSON(e){if(Zs(e,Ht._jsonSchema))return new Ht(e.latitude,e.longitude)}}Ht._jsonSchemaVersion="firestore/geoPoint/1.0",Ht._jsonSchema={type:je("string",Ht._jsonSchemaVersion),latitude:je("number"),longitude:je("number")};/**
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
 */class Kt{constructor(e){this._values=(e||[]).map(t=>t)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,i){if(r.length!==i.length)return!1;for(let s=0;s<r.length;++s)if(r[s]!==i[s])return!1;return!0}(this._values,e._values)}toJSON(){return{type:Kt._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(Zs(e,Kt._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every(t=>typeof t=="number"))return new Kt(e.vectorValues);throw new W(V.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}Kt._jsonSchemaVersion="firestore/vectorValue/1.0",Kt._jsonSchema={type:je("string",Kt._jsonSchemaVersion),vectorValues:je("object")};/**
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
 */const kS=/^__.*__$/;class CS{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return this.fieldMask!==null?new mr(e,this.data,this.fieldMask,t,this.fieldTransforms):new eo(e,this.data,t,this.fieldTransforms)}}class Iy{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return new mr(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function Ay(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw ie(40011,{Ec:n})}}class gd{constructor(e,t,r,i,s,o){this.settings=e,this.databaseId=t,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.Ac(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Ec(){return this.settings.Ec}Rc(e){return new gd(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Vc(e){var t;const r=(t=this.path)===null||t===void 0?void 0:t.child(e),i=this.Rc({path:r,mc:!1});return i.fc(e),i}gc(e){var t;const r=(t=this.path)===null||t===void 0?void 0:t.child(e),i=this.Rc({path:r,mc:!1});return i.Ac(),i}yc(e){return this.Rc({path:void 0,mc:!0})}wc(e){return Ca(e,this.settings.methodName,this.settings.Sc||!1,this.path,this.settings.bc)}contains(e){return this.fieldMask.find(t=>e.isPrefixOf(t))!==void 0||this.fieldTransforms.find(t=>e.isPrefixOf(t.field))!==void 0}Ac(){if(this.path)for(let e=0;e<this.path.length;e++)this.fc(this.path.get(e))}fc(e){if(e.length===0)throw this.wc("Document fields must not be empty");if(Ay(this.Ec)&&kS.test(e))throw this.wc('Document fields cannot begin and end with "__"')}}class PS{constructor(e,t,r){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=r||hc(e)}Dc(e,t,r,i=!1){return new gd({Ec:e,methodName:t,bc:r,path:Je.emptyPath(),mc:!1,Sc:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function oo(n){const e=n._freezeSettings(),t=hc(n._databaseId);return new PS(n._databaseId,!!e.ignoreUndefinedProperties,t)}function _d(n,e,t,r,i,s={}){const o=n.Dc(s.merge||s.mergeFields?2:0,e,t,i);wd("Data must be an object, but it was:",o,r);const a=Sy(r,o);let c,u;if(s.merge)c=new Nt(o.fieldMask),u=o.fieldTransforms;else if(s.mergeFields){const d=[];for(const h of s.mergeFields){const m=eu(e,h,t);if(!o.contains(m))throw new W(V.INVALID_ARGUMENT,`Field '${m}' is specified in your field mask but missing from your input data.`);Cy(d,m)||d.push(m)}c=new Nt(d),u=o.fieldTransforms.filter(h=>c.covers(h.field))}else c=null,u=o.fieldTransforms;return new CS(new It(a),c,u)}class pc extends so{_toFieldTransform(e){if(e.Ec!==2)throw e.Ec===1?e.wc(`${this._methodName}() can only appear at the top level of your update data`):e.wc(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof pc}}class yd extends so{_toFieldTransform(e){return new Rb(e.path,new Ms)}isEqual(e){return e instanceof yd}}function Ry(n,e,t,r){const i=n.Dc(1,e,t);wd("Data must be an object, but it was:",i,r);const s=[],o=It.empty();fr(r,(c,u)=>{const d=vd(e,c,t);u=pe(u);const h=i.gc(d);if(u instanceof pc)s.push(d);else{const m=ao(u,h);m!=null&&(s.push(d),o.set(d,m))}});const a=new Nt(s);return new Iy(o,a,i.fieldTransforms)}function by(n,e,t,r,i,s){const o=n.Dc(1,e,t),a=[eu(e,r,t)],c=[i];if(s.length%2!=0)throw new W(V.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let m=0;m<s.length;m+=2)a.push(eu(e,s[m])),c.push(s[m+1]);const u=[],d=It.empty();for(let m=a.length-1;m>=0;--m)if(!Cy(u,a[m])){const _=a[m];let w=c[m];w=pe(w);const v=o.gc(_);if(w instanceof pc)u.push(_);else{const E=ao(w,v);E!=null&&(u.push(_),d.set(_,E))}}const h=new Nt(u);return new Iy(d,h,o.fieldTransforms)}function NS(n,e,t,r=!1){return ao(t,n.Dc(r?4:3,e))}function ao(n,e){if(ky(n=pe(n)))return wd("Unsupported field value:",e,n),Sy(n,e);if(n instanceof so)return function(r,i){if(!Ay(i.Ec))throw i.wc(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.wc(`${r._methodName}() is not currently supported inside arrays`);const s=r._toFieldTransform(i);s&&i.fieldTransforms.push(s)}(n,e),null;if(n===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),n instanceof Array){if(e.settings.mc&&e.Ec!==4)throw e.wc("Nested arrays are not supported");return function(r,i){const s=[];let o=0;for(const a of r){let c=ao(a,i.yc(o));c==null&&(c={nullValue:"NULL_VALUE"}),s.push(c),o++}return{arrayValue:{values:s}}}(n,e)}return function(r,i){if((r=pe(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return Tb(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const s=$.fromDate(r);return{timestampValue:Aa(i.serializer,s)}}if(r instanceof $){const s=new $(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Aa(i.serializer,s)}}if(r instanceof Ht)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Pt)return{bytesValue:G_(i.serializer,r._byteString)};if(r instanceof Ve){const s=i.databaseId,o=r.firestore._databaseId;if(!o.isEqual(s))throw i.wc(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:Xu(r.firestore._databaseId||i.databaseId,r._key.path)}}if(r instanceof Kt)return function(o,a){return{mapValue:{fields:{[w_]:{stringValue:E_},[va]:{arrayValue:{values:o.toArray().map(u=>{if(typeof u!="number")throw a.wc("VectorValues must only contain numeric values.");return Qu(a.serializer,u)})}}}}}}(r,i);throw i.wc(`Unsupported field value: ${tc(r)}`)}(n,e)}function Sy(n,e){const t={};return f_(n)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):fr(n,(r,i)=>{const s=ao(i,e.Vc(r));s!=null&&(t[r]=s)}),{mapValue:{fields:t}}}function ky(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof $||n instanceof Ht||n instanceof Pt||n instanceof Ve||n instanceof so||n instanceof Kt)}function wd(n,e,t){if(!ky(t)||!d_(t)){const r=tc(t);throw r==="an object"?e.wc(n+" a custom object"):e.wc(n+" "+r)}}function eu(n,e,t){if((e=pe(e))instanceof Di)return e._internalPath;if(typeof e=="string")return vd(n,e);throw Ca("Field path arguments must be of type string or ",n,!1,void 0,t)}const DS=new RegExp("[~\\*/\\[\\]]");function vd(n,e,t){if(e.search(DS)>=0)throw Ca(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,t);try{return new Di(...e.split("."))._internalPath}catch(r){throw Ca(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,t)}}function Ca(n,e,t,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let a=`Function ${e}() called with invalid data`;t&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(s||o)&&(c+=" (found",s&&(c+=` in field ${r}`),o&&(c+=` in document ${i}`),c+=")"),new W(V.INVALID_ARGUMENT,a+n+c)}function Cy(n,e){return n.some(t=>t.isEqual(e))}/**
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
 */class Py{constructor(e,t,r,i,s){this._firestore=e,this._userDataWriter=t,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new Ve(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new OS(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(gc("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class OS extends Py{data(){return super.data()}}function gc(n,e){return typeof e=="string"?vd(n,e):e instanceof Di?e._internalPath:e._delegate._internalPath}/**
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
 */function Ny(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new W(V.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Ed{}class _c extends Ed{}function Q(n,e,...t){let r=[];e instanceof Ed&&r.push(e),r=r.concat(t),function(s){const o=s.filter(c=>c instanceof yc).length,a=s.filter(c=>c instanceof co).length;if(o>1||o>0&&a>0)throw new W(V.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const i of r)n=i._apply(n);return n}class co extends _c{constructor(e,t,r){super(),this._field=e,this._op=t,this._value=r,this.type="where"}static _create(e,t,r){return new co(e,t,r)}_apply(e){const t=this._parse(e);return Dy(e._query,t),new Zt(e.firestore,e.converter,jl(e._query,t))}_parse(e){const t=oo(e.firestore);return function(s,o,a,c,u,d,h){let m;if(u.isKeyField()){if(d==="array-contains"||d==="array-contains-any")throw new W(V.INVALID_ARGUMENT,`Invalid Query. You can't perform '${d}' queries on documentId().`);if(d==="in"||d==="not-in"){jm(h,d);const w=[];for(const v of h)w.push(qm(c,s,v));m={arrayValue:{values:w}}}else m=qm(c,s,h)}else d!=="in"&&d!=="not-in"&&d!=="array-contains-any"||jm(h,d),m=NS(a,o,h,d==="in"||d==="not-in");return qe.create(u,d,m)}(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value)}}function ce(n,e,t){const r=e,i=gc("where",n);return co._create(i,r,t)}class yc extends Ed{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new yc(e,t)}_parse(e){const t=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return t.length===1?t[0]:Yt.create(t,this._getOperator())}_apply(e){const t=this._parse(e);return t.getFilters().length===0?e:(function(i,s){let o=i;const a=s.getFlattenedFilters();for(const c of a)Dy(o,c),o=jl(o,c)}(e._query,t),new Zt(e.firestore,e.converter,jl(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class wc extends _c{constructor(e,t){super(),this._field=e,this._direction=t,this.type="orderBy"}static _create(e,t){return new wc(e,t)}_apply(e){const t=function(i,s,o){if(i.startAt!==null)throw new W(V.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(i.endAt!==null)throw new W(V.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new Vs(s,o)}(e._query,this._field,this._direction);return new Zt(e.firestore,e.converter,function(i,s){const o=i.explicitOrderBy.concat([s]);return new $r(i.path,i.collectionGroup,o,i.filters.slice(),i.limit,i.limitType,i.startAt,i.endAt)}(e._query,t))}}function fe(n,e="asc"){const t=e,r=gc("orderBy",n);return wc._create(r,t)}class vc extends _c{constructor(e,t,r){super(),this.type=e,this._limit=t,this._limitType=r}static _create(e,t,r){return new vc(e,t,r)}_apply(e){return new Zt(e.firestore,e.converter,Ta(e._query,this._limit,this._limitType))}}function Ne(n){return jR("limit",n),vc._create("limit",n,"F")}function qm(n,e,t){if(typeof(t=pe(t))=="string"){if(t==="")throw new W(V.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!C_(e)&&t.indexOf("/")!==-1)throw new W(V.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${t}' contains a '/' character.`);const r=e.path.child(Se.fromString(t));if(!ee.isDocumentKey(r))throw new W(V.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return im(n,new ee(r))}if(t instanceof Ve)return im(n,t._key);throw new W(V.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${tc(t)}.`)}function jm(n,e){if(!Array.isArray(n)||n.length===0)throw new W(V.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function Dy(n,e){const t=function(i,s){for(const o of i)for(const a of o.getFlattenedFilters())if(s.indexOf(a.op)>=0)return a.op;return null}(n.filters,function(i){switch(i){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(t!==null)throw t===e.op?new W(V.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new W(V.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${t.toString()}' filters.`)}class Oy{convertValue(e,t="none"){switch(or(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Be(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(sr(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw ie(62114,{value:e})}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const r={};return fr(e,(i,s)=>{r[i]=this.convertValue(s,t)}),r}convertVectorValue(e){var t,r,i;const s=(i=(r=(t=e.fields)===null||t===void 0?void 0:t[va].arrayValue)===null||r===void 0?void 0:r.values)===null||i===void 0?void 0:i.map(o=>Be(o.doubleValue));return new Kt(s)}convertGeoPoint(e){return new Ht(Be(e.latitude),Be(e.longitude))}convertArray(e,t){return(e.values||[]).map(r=>this.convertValue(r,t))}convertServerTimestamp(e,t){switch(t){case"previous":const r=ic(e);return r==null?null:this.convertValue(r,t);case"estimate":return this.convertTimestamp(Os(e));default:return null}}convertTimestamp(e){const t=ir(e);return new $(t.seconds,t.nanos)}convertDocumentKey(e,t){const r=Se.fromString(e);Ie(J_(r),9688,{name:e});const i=new pi(r.get(1),r.get(3)),s=new ee(r.popFirst(5));return i.isEqual(t)||Dn(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),s}}/**
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
 */function Td(n,e,t){let r;return r=n?t&&(t.merge||t.mergeFields)?n.toFirestore(e,t):n.toFirestore(e):e,r}class ti{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Zn extends Py{constructor(e,t,r,i,s,o){super(e,t,r,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new ws(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const r=this._document.data.field(gc("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,t.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new W(V.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,t={};return t.type=Zn._jsonSchemaVersion,t.bundle="",t.bundleSource="DocumentSnapshot",t.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?t:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),t.bundle="NOT SUPPORTED",t)}}Zn._jsonSchemaVersion="firestore/documentSnapshot/1.0",Zn._jsonSchema={type:je("string",Zn._jsonSchemaVersion),bundleSource:je("string","DocumentSnapshot"),bundleName:je("string"),bundle:je("string")};class ws extends Zn{data(e={}){return super.data(e)}}class er{constructor(e,t,r,i){this._firestore=e,this._userDataWriter=t,this._snapshot=i,this.metadata=new ti(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach(t=>e.push(t)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach(r=>{e.call(t,new ws(this._firestore,this._userDataWriter,r.key,r,new ti(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new W(V.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(i,s){if(i._snapshot.oldDocs.isEmpty()){let o=0;return i._snapshot.docChanges.map(a=>({type:"added",doc:new ws(i._firestore,i._userDataWriter,a.doc.key,a.doc,new ti(i._snapshot.mutatedKeys.has(a.doc.key),i._snapshot.fromCache),i.query.converter),oldIndex:-1,newIndex:o++}))}{let o=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(a=>s||a.type!==3).map(a=>{const c=new ws(i._firestore,i._userDataWriter,a.doc.key,a.doc,new ti(i._snapshot.mutatedKeys.has(a.doc.key),i._snapshot.fromCache),i.query.converter);let u=-1,d=-1;return a.type!==0&&(u=o.indexOf(a.doc.key),o=o.delete(a.doc.key)),a.type!==1&&(o=o.add(a.doc),d=o.indexOf(a.doc.key)),{type:LS(a.type),doc:c,oldIndex:u,newIndex:d}})}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new W(V.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=er._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=ec.newId();const t=[],r=[];return this.docs.forEach(i=>{i._document!==null&&(t.push(this._userDataWriter.convertObjectMap(i._document.data.value.mapValue.fields,"previous")),r.push(i.ref.path))}),e.bundle="NOT SUPPORTED",e}}function LS(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return ie(61501,{type:n})}}/**
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
 */function ne(n){n=nt(n,Ve);const e=nt(n.firestore,Jt);return RS(Ni(e),n._key).then(t=>Ly(e,n,t))}er._jsonSchemaVersion="firestore/querySnapshot/1.0",er._jsonSchema={type:je("string",er._jsonSchemaVersion),bundleSource:je("string","QuerySnapshot"),bundleName:je("string"),bundle:je("string")};class Id extends Oy{constructor(e){super(),this.firestore=e}convertBytes(e){return new Pt(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new Ve(this.firestore,null,t)}}function J(n){n=nt(n,Zt);const e=nt(n.firestore,Jt),t=Ni(e),r=new Id(e);return Ny(n._query),bS(t,n._query).then(i=>new er(e,r,n,i))}function un(n,e,t){n=nt(n,Ve);const r=nt(n.firestore,Jt),i=Td(n.converter,e,t);return Oi(r,[_d(oo(r),"setDoc",n._key,i,n.converter!==null,t).toMutation(n._key,vt.none())])}function X(n,e,t,...r){n=nt(n,Ve);const i=nt(n.firestore,Jt),s=oo(i);let o;return o=typeof(e=pe(e))=="string"||e instanceof Di?by(s,"updateDoc",n._key,e,t,r):Ry(s,"updateDoc",n._key,e),Oi(i,[o.toMutation(n._key,vt.exists(!0))])}function We(n){return Oi(nt(n.firestore,Jt),[new uc(n._key,vt.none())])}function we(n,e){const t=nt(n.firestore,Jt),r=U(n),i=Td(n.converter,e);return Oi(t,[_d(oo(n.firestore),"addDoc",r._key,i,n.converter!==null,{}).toMutation(r._key,vt.exists(!1))]).then(()=>r)}function lr(n,...e){var t,r,i;n=pe(n);let s={includeMetadataChanges:!1,source:"default"},o=0;typeof e[o]!="object"||$m(e[o])||(s=e[o++]);const a={includeMetadataChanges:s.includeMetadataChanges,source:s.source};if($m(e[o])){const h=e[o];e[o]=(t=h.next)===null||t===void 0?void 0:t.bind(h),e[o+1]=(r=h.error)===null||r===void 0?void 0:r.bind(h),e[o+2]=(i=h.complete)===null||i===void 0?void 0:i.bind(h)}let c,u,d;if(n instanceof Ve)u=nt(n.firestore,Jt),d=sc(n._key.path),c={next:h=>{e[o]&&e[o](Ly(u,n,h))},error:e[o+1],complete:e[o+2]};else{const h=nt(n,Zt);u=nt(h.firestore,Jt),d=h._query;const m=new Id(u);c={next:_=>{e[o]&&e[o](new er(u,m,h,_))},error:e[o+1],complete:e[o+2]},Ny(n._query)}return function(m,_,w,v){const E=new pd(v),P=new hd(_,E,w);return m.asyncQueue.enqueueAndForget(()=>p(this,null,function*(){return ld(yield ka(m),P)})),()=>{E.Ou(),m.asyncQueue.enqueueAndForget(()=>p(this,null,function*(){return ud(yield ka(m),P)}))}}(Ni(u),d,a,c)}function Oi(n,e){return function(r,i){const s=new Rn;return r.asyncQueue.enqueueAndForget(()=>p(this,null,function*(){return fS(yield AS(r),i,s)})),s.promise}(Ni(n),e)}function Ly(n,e,t){const r=t.docs.get(e._key),i=new Id(n);return new Zn(n,i,e._key,r,new ti(t.hasPendingWrites,t.fromCache),e.converter)}/**
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
 */class Vy{constructor(e,t){this._firestore=e,this._commitHandler=t,this._mutations=[],this._committed=!1,this._dataReader=oo(e)}set(e,t,r){this._verifyNotCommitted();const i=dl(e,this._firestore),s=Td(i.converter,t,r),o=_d(this._dataReader,"WriteBatch.set",i._key,s,i.converter!==null,r);return this._mutations.push(o.toMutation(i._key,vt.none())),this}update(e,t,r,...i){this._verifyNotCommitted();const s=dl(e,this._firestore);let o;return o=typeof(t=pe(t))=="string"||t instanceof Di?by(this._dataReader,"WriteBatch.update",s._key,t,r,i):Ry(this._dataReader,"WriteBatch.update",s._key,t),this._mutations.push(o.toMutation(s._key,vt.exists(!0))),this}delete(e){this._verifyNotCommitted();const t=dl(e,this._firestore);return this._mutations=this._mutations.concat(new uc(t._key,vt.none())),this}commit(){return this._verifyNotCommitted(),this._committed=!0,this._mutations.length>0?this._commitHandler(this._mutations):Promise.resolve()}_verifyNotCommitted(){if(this._committed)throw new W(V.FAILED_PRECONDITION,"A write batch can no longer be used after commit() has been called.")}}function dl(n,e){if((n=pe(n)).firestore!==e)throw new W(V.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return n}function j(){return new yd("serverTimestamp")}/**
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
 */function Gn(n){return Ni(n=nt(n,Jt)),new Vy(n,e=>Oi(n,e))}(function(e,t=!0){(function(i){Si=i})(hr),Ut(new Vt("firestore",(r,{instanceIdentifier:i,options:s})=>{const o=r.getProvider("app").getImmediate(),a=new Jt(new MR(r.getProvider("auth-internal")),new FR(o,r.getProvider("app-check-internal")),function(u,d){if(!Object.prototype.hasOwnProperty.apply(u.options,["projectId"]))throw new W(V.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new pi(u.options.projectId,d)}(o,i),o);return s=Object.assign({useFetchStreams:t},s),a._setSettings(s),a},"PUBLIC").setMultipleInstances(!0)),mt(zf,Gf,e),mt(zf,Gf,"esm2017")})();const VS=Object.freeze(Object.defineProperty({__proto__:null,AbstractUserDataWriter:Oy,Bytes:Pt,CollectionReference:bn,DocumentReference:Ve,DocumentSnapshot:Zn,FieldPath:Di,FieldValue:so,Firestore:Jt,FirestoreError:W,GeoPoint:Ht,Query:Zt,QueryCompositeFilterConstraint:yc,QueryConstraint:_c,QueryDocumentSnapshot:ws,QueryFieldFilterConstraint:co,QueryLimitConstraint:vc,QueryOrderByConstraint:wc,QuerySnapshot:er,SnapshotMetadata:ti,Timestamp:$,VectorValue:Kt,WriteBatch:Vy,_AutoId:ec,_ByteString:Ze,_DatabaseId:pi,_DocumentKey:ee,_EmptyAuthCredentialsProvider:c_,_FieldPath:Je,_cast:nt,_logWarn:On,_validateIsNotUsedTogether:u_,addDoc:we,collection:q,collectionGroup:Ty,connectFirestoreEmulator:Ey,deleteDoc:We,doc:U,ensureFirestoreConfigured:Ni,executeWrite:Oi,getDoc:ne,getDocs:J,getFirestore:Zl,limit:Ne,onSnapshot:lr,orderBy:fe,query:Q,serverTimestamp:j,setDoc:un,updateDoc:X,where:ce,writeBatch:Gn},Symbol.toStringTag,{value:"Module"}));var MS="firebase",xS="11.10.0";/**
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
 */mt(MS,xS,"app");const My="@firebase/installations",Ad="0.6.18";/**
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
 */const xy=1e4,Uy=`w:${Ad}`,Fy="FIS_v2",US="https://firebaseinstallations.googleapis.com/v1",FS=60*60*1e3,BS="installations",$S="Installations";/**
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
 */const qS={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},Nr=new Fr(BS,$S,qS);function By(n){return n instanceof Bt&&n.code.includes("request-failed")}/**
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
 */function $y({projectId:n}){return`${US}/projects/${n}/installations`}function qy(n){return{token:n.token,requestStatus:2,expiresIn:zS(n.expiresIn),creationTime:Date.now()}}function jy(n,e){return p(this,null,function*(){const r=(yield e.json()).error;return Nr.create("request-failed",{requestName:n,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})})}function zy({apiKey:n}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":n})}function jS(n,{refreshToken:e}){const t=zy(n);return t.append("Authorization",GS(e)),t}function Gy(n){return p(this,null,function*(){const e=yield n();return e.status>=500&&e.status<600?n():e})}function zS(n){return Number(n.replace("s","000"))}function GS(n){return`${Fy} ${n}`}/**
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
 */function WS(r,i){return p(this,arguments,function*({appConfig:n,heartbeatServiceProvider:e},{fid:t}){const s=$y(n),o=zy(n),a=e.getImmediate({optional:!0});if(a){const h=yield a.getHeartbeatsHeader();h&&o.append("x-firebase-client",h)}const c={fid:t,authVersion:Fy,appId:n.appId,sdkVersion:Uy},u={method:"POST",headers:o,body:JSON.stringify(c)},d=yield Gy(()=>fetch(s,u));if(d.ok){const h=yield d.json();return{fid:h.fid||t,registrationStatus:2,refreshToken:h.refreshToken,authToken:qy(h.authToken)}}else throw yield jy("Create Installation",d)})}/**
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
 */function Wy(n){return new Promise(e=>{setTimeout(e,n)})}/**
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
 */function HS(n){return btoa(String.fromCharCode(...n)).replace(/\+/g,"-").replace(/\//g,"_")}/**
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
 */const KS=/^[cdef][\w-]{21}$/,tu="";function QS(){try{const n=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(n),n[0]=112+n[0]%16;const t=YS(n);return KS.test(t)?t:tu}catch(n){return tu}}function YS(n){return HS(n).substr(0,22)}/**
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
 */function Ec(n){return`${n.appName}!${n.appId}`}/**
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
 */const Hy=new Map;function Ky(n,e){const t=Ec(n);Qy(t,e),JS(t,e)}function Qy(n,e){const t=Hy.get(n);if(t)for(const r of t)r(e)}function JS(n,e){const t=XS();t&&t.postMessage({key:n,fid:e}),ZS()}let Ar=null;function XS(){return!Ar&&"BroadcastChannel"in self&&(Ar=new BroadcastChannel("[Firebase] FID Change"),Ar.onmessage=n=>{Qy(n.data.key,n.data.fid)}),Ar}function ZS(){Hy.size===0&&Ar&&(Ar.close(),Ar=null)}/**
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
 */const ek="firebase-installations-database",tk=1,Dr="firebase-installations-store";let hl=null;function Rd(){return hl||(hl=ig(ek,tk,{upgrade:(n,e)=>{switch(e){case 0:n.createObjectStore(Dr)}}})),hl}function Pa(n,e){return p(this,null,function*(){const t=Ec(n),i=(yield Rd()).transaction(Dr,"readwrite"),s=i.objectStore(Dr),o=yield s.get(t);return yield s.put(e,t),yield i.done,(!o||o.fid!==e.fid)&&Ky(n,e.fid),e})}function Yy(n){return p(this,null,function*(){const e=Ec(n),r=(yield Rd()).transaction(Dr,"readwrite");yield r.objectStore(Dr).delete(e),yield r.done})}function Tc(n,e){return p(this,null,function*(){const t=Ec(n),i=(yield Rd()).transaction(Dr,"readwrite"),s=i.objectStore(Dr),o=yield s.get(t),a=e(o);return a===void 0?yield s.delete(t):yield s.put(a,t),yield i.done,a&&(!o||o.fid!==a.fid)&&Ky(n,a.fid),a})}/**
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
 */function bd(n){return p(this,null,function*(){let e;const t=yield Tc(n.appConfig,r=>{const i=nk(r),s=rk(n,i);return e=s.registrationPromise,s.installationEntry});return t.fid===tu?{installationEntry:yield e}:{installationEntry:t,registrationPromise:e}})}function nk(n){const e=n||{fid:QS(),registrationStatus:0};return Jy(e)}function rk(n,e){if(e.registrationStatus===0){if(!navigator.onLine){const i=Promise.reject(Nr.create("app-offline"));return{installationEntry:e,registrationPromise:i}}const t={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},r=ik(n,t);return{installationEntry:t,registrationPromise:r}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:sk(n)}:{installationEntry:e}}function ik(n,e){return p(this,null,function*(){try{const t=yield WS(n,e);return Pa(n.appConfig,t)}catch(t){throw By(t)&&t.customData.serverCode===409?yield Yy(n.appConfig):yield Pa(n.appConfig,{fid:e.fid,registrationStatus:0}),t}})}function sk(n){return p(this,null,function*(){let e=yield zm(n.appConfig);for(;e.registrationStatus===1;)yield Wy(100),e=yield zm(n.appConfig);if(e.registrationStatus===0){const{installationEntry:t,registrationPromise:r}=yield bd(n);return r||t}return e})}function zm(n){return Tc(n,e=>{if(!e)throw Nr.create("installation-not-found");return Jy(e)})}function Jy(n){return ok(n)?{fid:n.fid,registrationStatus:0}:n}function ok(n){return n.registrationStatus===1&&n.registrationTime+xy<Date.now()}/**
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
 */function ak(r,i){return p(this,arguments,function*({appConfig:n,heartbeatServiceProvider:e},t){const s=ck(n,t),o=jS(n,t),a=e.getImmediate({optional:!0});if(a){const h=yield a.getHeartbeatsHeader();h&&o.append("x-firebase-client",h)}const c={installation:{sdkVersion:Uy,appId:n.appId}},u={method:"POST",headers:o,body:JSON.stringify(c)},d=yield Gy(()=>fetch(s,u));if(d.ok){const h=yield d.json();return qy(h)}else throw yield jy("Generate Auth Token",d)})}function ck(n,{fid:e}){return`${$y(n)}/${e}/authTokens:generate`}/**
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
 */function Sd(n,e=!1){return p(this,null,function*(){let t;const r=yield Tc(n.appConfig,s=>{if(!Xy(s))throw Nr.create("not-registered");const o=s.authToken;if(!e&&dk(o))return s;if(o.requestStatus===1)return t=lk(n,e),s;{if(!navigator.onLine)throw Nr.create("app-offline");const a=fk(s);return t=uk(n,a),a}});return t?yield t:r.authToken})}function lk(n,e){return p(this,null,function*(){let t=yield Gm(n.appConfig);for(;t.authToken.requestStatus===1;)yield Wy(100),t=yield Gm(n.appConfig);const r=t.authToken;return r.requestStatus===0?Sd(n,e):r})}function Gm(n){return Tc(n,e=>{if(!Xy(e))throw Nr.create("not-registered");const t=e.authToken;return mk(t)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}function uk(n,e){return p(this,null,function*(){try{const t=yield ak(n,e),r=Object.assign(Object.assign({},e),{authToken:t});return yield Pa(n.appConfig,r),t}catch(t){if(By(t)&&(t.customData.serverCode===401||t.customData.serverCode===404))yield Yy(n.appConfig);else{const r=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});yield Pa(n.appConfig,r)}throw t}})}function Xy(n){return n!==void 0&&n.registrationStatus===2}function dk(n){return n.requestStatus===2&&!hk(n)}function hk(n){const e=Date.now();return e<n.creationTime||n.creationTime+n.expiresIn<e+FS}function fk(n){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},n),{authToken:e})}function mk(n){return n.requestStatus===1&&n.requestTime+xy<Date.now()}/**
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
 */function pk(n){return p(this,null,function*(){const e=n,{installationEntry:t,registrationPromise:r}=yield bd(e);return r?r.catch(console.error):Sd(e).catch(console.error),t.fid})}/**
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
 */function gk(n,e=!1){return p(this,null,function*(){const t=n;return yield _k(t),(yield Sd(t,e)).token})}function _k(n){return p(this,null,function*(){const{registrationPromise:e}=yield bd(n);e&&(yield e)})}/**
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
 */function yk(n){if(!n||!n.options)throw fl("App Configuration");if(!n.name)throw fl("App Name");const e=["projectId","apiKey","appId"];for(const t of e)if(!n.options[t])throw fl(t);return{appName:n.name,projectId:n.options.projectId,apiKey:n.options.apiKey,appId:n.options.appId}}function fl(n){return Nr.create("missing-app-config-values",{valueName:n})}/**
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
 */const Zy="installations",wk="installations-internal",vk=n=>{const e=n.getProvider("app").getImmediate(),t=yk(e),r=Un(e,"heartbeat");return{app:e,appConfig:t,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},Ek=n=>{const e=n.getProvider("app").getImmediate(),t=Un(e,Zy).getImmediate();return{getId:()=>pk(t),getToken:i=>gk(t,i)}};function Tk(){Ut(new Vt(Zy,vk,"PUBLIC")),Ut(new Vt(wk,Ek,"PRIVATE"))}Tk();mt(My,Ad);mt(My,Ad,"esm2017");/**
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
 */const Na="analytics",Ik="firebase_id",Ak="origin",Rk=60*1e3,bk="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",kd="https://www.googletagmanager.com/gtag/js";/**
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
 */const Rt=new Hs("@firebase/analytics");/**
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
 */const Sk={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-initialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},Ot=new Fr("analytics","Analytics",Sk);/**
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
 */function kk(n){if(!n.startsWith(kd)){const e=Ot.create("invalid-gtag-resource",{gtagURL:n});return Rt.warn(e.message),""}return n}function ew(n){return Promise.all(n.map(e=>e.catch(t=>t)))}function Ck(n,e){let t;return window.trustedTypes&&(t=window.trustedTypes.createPolicy(n,e)),t}function Pk(n,e){const t=Ck("firebase-js-sdk-policy",{createScriptURL:kk}),r=document.createElement("script"),i=`${kd}?l=${n}&id=${e}`;r.src=t?t==null?void 0:t.createScriptURL(i):i,r.async=!0,document.head.appendChild(r)}function Nk(n){let e=[];return Array.isArray(window[n])?e=window[n]:window[n]=e,e}function Dk(n,e,t,r,i,s){return p(this,null,function*(){const o=r[i];try{if(o)yield e[o];else{const c=(yield ew(t)).find(u=>u.measurementId===i);c&&(yield e[c.appId])}}catch(a){Rt.error(a)}n("config",i,s)})}function Ok(n,e,t,r,i){return p(this,null,function*(){try{let s=[];if(i&&i.send_to){let o=i.send_to;Array.isArray(o)||(o=[o]);const a=yield ew(t);for(const c of o){const u=a.find(h=>h.measurementId===c),d=u&&e[u.appId];if(d)s.push(d);else{s=[];break}}}s.length===0&&(s=Object.values(e)),yield Promise.all(s),n("event",r,i||{})}catch(s){Rt.error(s)}})}function Lk(n,e,t,r){function i(s,...o){return p(this,null,function*(){try{if(s==="event"){const[a,c]=o;yield Ok(n,e,t,a,c)}else if(s==="config"){const[a,c]=o;yield Dk(n,e,t,r,a,c)}else if(s==="consent"){const[a,c]=o;n("consent",a,c)}else if(s==="get"){const[a,c,u]=o;n("get",a,c,u)}else if(s==="set"){const[a]=o;n("set",a)}else n(s,...o)}catch(a){Rt.error(a)}})}return i}function Vk(n,e,t,r,i){let s=function(...o){window[r].push(arguments)};return window[i]&&typeof window[i]=="function"&&(s=window[i]),window[i]=Lk(s,n,e,t),{gtagCore:s,wrappedGtag:window[i]}}function Mk(n){const e=window.document.getElementsByTagName("script");for(const t of Object.values(e))if(t.src&&t.src.includes(kd)&&t.src.includes(n))return t;return null}/**
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
 */const xk=30,Uk=1e3;class Fk{constructor(e={},t=Uk){this.throttleMetadata=e,this.intervalMillis=t}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,t){this.throttleMetadata[e]=t}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const tw=new Fk;function Bk(n){return new Headers({Accept:"application/json","x-goog-api-key":n})}function $k(n){return p(this,null,function*(){var e;const{appId:t,apiKey:r}=n,i={method:"GET",headers:Bk(r)},s=bk.replace("{app-id}",t),o=yield fetch(s,i);if(o.status!==200&&o.status!==304){let a="";try{const c=yield o.json();!((e=c.error)===null||e===void 0)&&e.message&&(a=c.error.message)}catch(c){}throw Ot.create("config-fetch-failed",{httpStatus:o.status,responseMessage:a})}return o.json()})}function qk(r){return p(this,arguments,function*(n,e=tw,t){const{appId:i,apiKey:s,measurementId:o}=n.options;if(!i)throw Ot.create("no-app-id");if(!s){if(o)return{measurementId:o,appId:i};throw Ot.create("no-api-key")}const a=e.getThrottleMetadata(i)||{backoffCount:0,throttleEndTimeMillis:Date.now()},c=new Gk;return setTimeout(()=>p(this,null,function*(){c.abort()}),Rk),nw({appId:i,apiKey:s,measurementId:o},a,c,e)})}function nw(s,o,a){return p(this,arguments,function*(n,{throttleEndTimeMillis:e,backoffCount:t},r,i=tw){var c;const{appId:u,measurementId:d}=n;try{yield jk(r,e)}catch(h){if(d)return Rt.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${d} provided in the "measurementId" field in the local Firebase config. [${h==null?void 0:h.message}]`),{appId:u,measurementId:d};throw h}try{const h=yield $k(n);return i.deleteThrottleMetadata(u),h}catch(h){const m=h;if(!zk(m)){if(i.deleteThrottleMetadata(u),d)return Rt.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${d} provided in the "measurementId" field in the local Firebase config. [${m==null?void 0:m.message}]`),{appId:u,measurementId:d};throw h}const _=Number((c=m==null?void 0:m.customData)===null||c===void 0?void 0:c.httpStatus)===503?mf(t,i.intervalMillis,xk):mf(t,i.intervalMillis),w={throttleEndTimeMillis:Date.now()+_,backoffCount:t+1};return i.setThrottleMetadata(u,w),Rt.debug(`Calling attemptFetch again in ${_} millis`),nw(n,w,r,i)}})}function jk(n,e){return new Promise((t,r)=>{const i=Math.max(e-Date.now(),0),s=setTimeout(t,i);n.addEventListener(()=>{clearTimeout(s),r(Ot.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function zk(n){if(!(n instanceof Bt)||!n.customData)return!1;const e=Number(n.customData.httpStatus);return e===429||e===500||e===503||e===504}class Gk{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}function Wk(n,e,t,r,i){return p(this,null,function*(){if(i&&i.global){n("event",t,r);return}else{const s=yield e,o=Object.assign(Object.assign({},r),{send_to:s});n("event",t,o)}})}/**
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
 */function Hk(){return p(this,null,function*(){if(Zp())try{yield eg()}catch(n){return Rt.warn(Ot.create("indexeddb-unavailable",{errorInfo:n==null?void 0:n.toString()}).message),!1}else return Rt.warn(Ot.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0})}function Kk(n,e,t,r,i,s,o){return p(this,null,function*(){var a;const c=qk(n);c.then(_=>{t[_.measurementId]=_.appId,n.options.measurementId&&_.measurementId!==n.options.measurementId&&Rt.warn(`The measurement ID in the local Firebase config (${n.options.measurementId}) does not match the measurement ID fetched from the server (${_.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(_=>Rt.error(_)),e.push(c);const u=Hk().then(_=>{if(_)return r.getId()}),[d,h]=yield Promise.all([c,u]);Mk(s)||Pk(s,d.measurementId),i("js",new Date);const m=(a=o==null?void 0:o.config)!==null&&a!==void 0?a:{};return m[Ak]="firebase",m.update=!0,h!=null&&(m[Ik]=h),i("config",d.measurementId,m),d.measurementId})}/**
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
 */class Qk{constructor(e){this.app=e}_delete(){return delete vs[this.app.options.appId],Promise.resolve()}}let vs={},Wm=[];const Hm={};let ml="dataLayer",Yk="gtag",Km,rw,Qm=!1;function Jk(){const n=[];if(Jp()&&n.push("This is a browser extension environment."),aT()||n.push("Cookies are not available."),n.length>0){const e=n.map((r,i)=>`(${i+1}) ${r}`).join(" "),t=Ot.create("invalid-analytics-context",{errorInfo:e});Rt.warn(t.message)}}function Xk(n,e,t){Jk();const r=n.options.appId;if(!r)throw Ot.create("no-app-id");if(!n.options.apiKey)if(n.options.measurementId)Rt.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${n.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw Ot.create("no-api-key");if(vs[r]!=null)throw Ot.create("already-exists",{id:r});if(!Qm){Nk(ml);const{wrappedGtag:s,gtagCore:o}=Vk(vs,Wm,Hm,ml,Yk);rw=s,Km=o,Qm=!0}return vs[r]=Kk(n,Wm,Hm,e,Km,ml,t),new Qk(n)}function Zk(n=Ks()){n=pe(n);const e=Un(n,Na);return e.isInitialized()?e.getImmediate():eC(n)}function eC(n,e={}){const t=Un(n,Na);if(t.isInitialized()){const i=t.getImmediate();if(Cn(e,t.getOptions()))return i;throw Ot.create("already-initialized")}return t.initialize({options:e})}function tC(n,e,t,r){n=pe(n),Wk(rw,vs[n.app.options.appId],e,t,r).catch(i=>Rt.error(i))}const Ym="@firebase/analytics",Jm="0.10.17";function nC(){Ut(new Vt(Na,(e,{options:t})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("installations-internal").getImmediate();return Xk(r,i,t)},"PUBLIC")),Ut(new Vt("analytics-internal",n,"PRIVATE")),mt(Ym,Jm),mt(Ym,Jm,"esm2017");function n(e){try{const t=e.getProvider(Na).getImmediate();return{logEvent:(r,i,s)=>tC(t,r,i,s)}}catch(t){throw Ot.create("interop-component-reg-failed",{reason:t})}}}nC();var Xm={};const Zm="@firebase/database",ep="1.0.20";/**
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
 */let iw="";function rC(n){iw=n}/**
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
 */class iC{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,t){t==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),tt(t))}get(e){const t=this.domStorage_.getItem(this.prefixedName_(e));return t==null?null:Ss(t)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
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
 */class sC{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,t){t==null?delete this.cache_[e]:this.cache_[e]=t}get(e){return xn(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
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
 */const sw=function(n){try{if(typeof window!="undefined"&&typeof window[n]!="undefined"){const e=window[n];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new iC(e)}}catch(e){}return new sC},Rr=sw("localStorage"),oC=sw("sessionStorage");/**
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
 */const li=new Hs("@firebase/database"),aC=function(){let n=1;return function(){return n++}}(),ow=function(n){const e=yT(n),t=new fT;t.update(e);const r=t.digest();return Tu.encodeByteArray(r)},lo=function(...n){let e="";for(let t=0;t<n.length;t++){const r=n[t];Array.isArray(r)||r&&typeof r=="object"&&typeof r.length=="number"?e+=lo.apply(null,r):typeof r=="object"?e+=tt(r):e+=r,e+=" "}return e};let Es=null,tp=!0;const cC=function(n,e){H(!e,"Can't turn on custom loggers persistently."),li.logLevel=de.VERBOSE,Es=li.log.bind(li)},dt=function(...n){if(tp===!0&&(tp=!1,Es===null&&oC.get("logging_enabled")===!0&&cC()),Es){const e=lo.apply(null,n);Es(e)}},uo=function(n){return function(...e){dt(n,...e)}},nu=function(...n){const e="FIREBASE INTERNAL ERROR: "+lo(...n);li.error(e)},Vn=function(...n){const e=`FIREBASE FATAL ERROR: ${lo(...n)}`;throw li.error(e),new Error(e)},Lt=function(...n){const e="FIREBASE WARNING: "+lo(...n);li.warn(e)},lC=function(){typeof window!="undefined"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&Lt("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},aw=function(n){return typeof n=="number"&&(n!==n||n===Number.POSITIVE_INFINITY||n===Number.NEGATIVE_INFINITY)},uC=function(n){if(document.readyState==="complete")n();else{let e=!1;const t=function(){if(!document.body){setTimeout(t,Math.floor(10));return}e||(e=!0,n())};document.addEventListener?(document.addEventListener("DOMContentLoaded",t,!1),window.addEventListener("load",t,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&t()}),window.attachEvent("onload",t))}},vi="[MIN_NAME]",Or="[MAX_NAME]",Li=function(n,e){if(n===e)return 0;if(n===vi||e===Or)return-1;if(e===vi||n===Or)return 1;{const t=np(n),r=np(e);return t!==null?r!==null?t-r===0?n.length-e.length:t-r:-1:r!==null?1:n<e?-1:1}},dC=function(n,e){return n===e?0:n<e?-1:1},es=function(n,e){if(e&&n in e)return e[n];throw new Error("Missing required key ("+n+") in object: "+tt(e))},Cd=function(n){if(typeof n!="object"||n===null)return tt(n);const e=[];for(const r in n)e.push(r);e.sort();let t="{";for(let r=0;r<e.length;r++)r!==0&&(t+=","),t+=tt(e[r]),t+=":",t+=Cd(n[e[r]]);return t+="}",t},cw=function(n,e){const t=n.length;if(t<=e)return[n];const r=[];for(let i=0;i<t;i+=e)i+e>t?r.push(n.substring(i,t)):r.push(n.substring(i,i+e));return r};function Ft(n,e){for(const t in n)n.hasOwnProperty(t)&&e(t,n[t])}const lw=function(n){H(!aw(n),"Invalid JSON number");const e=11,t=52,r=(1<<e-1)-1;let i,s,o,a,c;n===0?(s=0,o=0,i=1/n===-1/0?1:0):(i=n<0,n=Math.abs(n),n>=Math.pow(2,1-r)?(a=Math.min(Math.floor(Math.log(n)/Math.LN2),r),s=a+r,o=Math.round(n*Math.pow(2,t-a)-Math.pow(2,t))):(s=0,o=Math.round(n/Math.pow(2,1-r-t))));const u=[];for(c=t;c;c-=1)u.push(o%2?1:0),o=Math.floor(o/2);for(c=e;c;c-=1)u.push(s%2?1:0),s=Math.floor(s/2);u.push(i?1:0),u.reverse();const d=u.join("");let h="";for(c=0;c<64;c+=8){let m=parseInt(d.substr(c,8),2).toString(16);m.length===1&&(m="0"+m),h=h+m}return h.toLowerCase()},hC=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},fC=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"},mC=new RegExp("^-?(0*)\\d{1,10}$"),pC=-2147483648,gC=2147483647,np=function(n){if(mC.test(n)){const e=Number(n);if(e>=pC&&e<=gC)return e}return null},ho=function(n){try{n()}catch(e){setTimeout(()=>{const t=e.stack||"";throw Lt("Exception was thrown by user callback.",t),e},Math.floor(0))}},_C=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},Ts=function(n,e){const t=setTimeout(n,e);return typeof t=="number"&&typeof Deno!="undefined"&&Deno.unrefTimer?Deno.unrefTimer(t):typeof t=="object"&&t.unref&&t.unref(),t};/**
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
 */class yC{constructor(e,t){this.appCheckProvider=t,this.appName=e.name,wt(e)&&e.settings.appCheckToken&&(this.serverAppAppCheckToken=e.settings.appCheckToken),this.appCheck=t==null?void 0:t.getImmediate({optional:!0}),this.appCheck||t==null||t.get().then(r=>this.appCheck=r)}getToken(e){if(this.serverAppAppCheckToken){if(e)throw new Error("Attempted reuse of `FirebaseServerApp.appCheckToken` after previous usage failed.");return Promise.resolve({token:this.serverAppAppCheckToken})}return this.appCheck?this.appCheck.getToken(e):new Promise((t,r)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(t,r):t(null)},0)})}addTokenChangeListener(e){var t;(t=this.appCheckProvider)===null||t===void 0||t.get().then(r=>r.addTokenListener(e))}notifyForInvalidToken(){Lt(`Provided AppCheck credentials for the app named "${this.appName}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
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
 */class wC{constructor(e,t,r){this.appName_=e,this.firebaseOptions_=t,this.authProvider_=r,this.auth_=null,this.auth_=r.getImmediate({optional:!0}),this.auth_||r.onInit(i=>this.auth_=i)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(t=>t&&t.code==="auth/token-not-initialized"?(dt("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(t)):new Promise((t,r)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(t,r):t(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(t=>t.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(t=>t.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',Lt(e)}}class sa{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}sa.OWNER="owner";/**
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
 */const Pd="5",uw="v",dw="s",hw="r",fw="f",mw=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,pw="ls",gw="p",ru="ac",_w="websocket",yw="long_polling";/**
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
 */class ww{constructor(e,t,r,i,s=!1,o="",a=!1,c=!1,u=null){this.secure=t,this.namespace=r,this.webSocketOnly=i,this.nodeAdmin=s,this.persistenceKey=o,this.includeNamespaceInQueryParams=a,this.isUsingEmulator=c,this.emulatorOptions=u,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=Rr.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&Rr.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",t=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${t}`}}function vC(n){return n.host!==n.internalHost||n.isCustomHost()||n.includeNamespaceInQueryParams}function vw(n,e,t){H(typeof e=="string","typeof type must == string"),H(typeof t=="object","typeof params must == object");let r;if(e===_w)r=(n.secure?"wss://":"ws://")+n.internalHost+"/.ws?";else if(e===yw)r=(n.secure?"https://":"http://")+n.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);vC(n)&&(t.ns=n.namespace);const i=[];return Ft(t,(s,o)=>{i.push(s+"="+o)}),r+i.join("&")}/**
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
 */class EC{constructor(){this.counters_={}}incrementCounter(e,t=1){xn(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=t}get(){return KE(this.counters_)}}/**
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
 */const pl={},gl={};function Nd(n){const e=n.toString();return pl[e]||(pl[e]=new EC),pl[e]}function TC(n,e){const t=n.toString();return gl[t]||(gl[t]=e()),gl[t]}/**
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
 */class IC{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,t){this.closeAfterResponse=e,this.onClose=t,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,t){for(this.pendingResponses[e]=t;this.pendingResponses[this.currentResponseNum];){const r=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let i=0;i<r.length;++i)r[i]&&ho(()=>{this.onMessage_(r[i])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
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
 */const rp="start",AC="close",RC="pLPCommand",bC="pRTLPCB",Ew="id",Tw="pw",Iw="ser",SC="cb",kC="seg",CC="ts",PC="d",NC="dframe",Aw=1870,Rw=30,DC=Aw-Rw,OC=25e3,LC=3e4;class ni{constructor(e,t,r,i,s,o,a){this.connId=e,this.repoInfo=t,this.applicationId=r,this.appCheckToken=i,this.authToken=s,this.transportSessionId=o,this.lastSessionId=a,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=uo(e),this.stats_=Nd(t),this.urlFn=c=>(this.appCheckToken&&(c[ru]=this.appCheckToken),vw(t,yw,c))}open(e,t){this.curSegmentNum=0,this.onDisconnect_=t,this.myPacketOrderer=new IC(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(LC)),uC(()=>{if(this.isClosed_)return;this.scriptTagHolder=new Dd((...s)=>{const[o,a,c,u,d]=s;if(this.incrementIncomingBytes_(s),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===rp)this.id=a,this.password=c;else if(o===AC)a?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(a,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...s)=>{const[o,a]=s;this.incrementIncomingBytes_(s),this.myPacketOrderer.handleResponse(o,a)},()=>{this.onClosed_()},this.urlFn);const r={};r[rp]="t",r[Iw]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(r[SC]=this.scriptTagHolder.uniqueCallbackIdentifier),r[uw]=Pd,this.transportSessionId&&(r[dw]=this.transportSessionId),this.lastSessionId&&(r[pw]=this.lastSessionId),this.applicationId&&(r[gw]=this.applicationId),this.appCheckToken&&(r[ru]=this.appCheckToken),typeof location!="undefined"&&location.hostname&&mw.test(location.hostname)&&(r[hw]=fw);const i=this.urlFn(r);this.log_("Connecting via long-poll to "+i),this.scriptTagHolder.addTag(i,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){ni.forceAllow_=!0}static forceDisallow(){ni.forceDisallow_=!0}static isAvailable(){return ni.forceAllow_?!0:!ni.forceDisallow_&&typeof document!="undefined"&&document.createElement!=null&&!hC()&&!fC()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const t=tt(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const r=Wp(t),i=cw(r,DC);for(let s=0;s<i.length;s++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[s]),this.curSegmentNum++}addDisconnectPingFrame(e,t){this.myDisconnFrame=document.createElement("iframe");const r={};r[NC]="t",r[Ew]=e,r[Tw]=t,this.myDisconnFrame.src=this.urlFn(r),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const t=tt(e).length;this.bytesReceived+=t,this.stats_.incrementCounter("bytes_received",t)}}class Dd{constructor(e,t,r,i){this.onDisconnect=r,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=aC(),window[RC+this.uniqueCallbackIdentifier]=e,window[bC+this.uniqueCallbackIdentifier]=t,this.myIFrame=Dd.createIFrame_();let s="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(s='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+s+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(a){dt("frame writing exception"),a.stack&&dt(a.stack),dt(a)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||dt("No IE domain setting required")}catch(t){const r=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+r+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,t){for(this.myID=e,this.myPW=t,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[Ew]=this.myID,e[Tw]=this.myPW,e[Iw]=this.currentSerial;let t=this.urlFn(e),r="",i=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+Rw+r.length<=Aw;){const o=this.pendingSegs.shift();r=r+"&"+kC+i+"="+o.seg+"&"+CC+i+"="+o.ts+"&"+PC+i+"="+o.d,i++}return t=t+r,this.addLongPollTag_(t,this.currentSerial),!0}else return!1}enqueueSegment(e,t,r){this.pendingSegs.push({seg:e,ts:t,d:r}),this.alive&&this.newRequest_()}addLongPollTag_(e,t){this.outstandingRequests.add(t);const r=()=>{this.outstandingRequests.delete(t),this.newRequest_()},i=setTimeout(r,Math.floor(OC)),s=()=>{clearTimeout(i),r()};this.addTag(e,s)}addTag(e,t){setTimeout(()=>{try{if(!this.sendNewPolls)return;const r=this.myIFrame.doc.createElement("script");r.type="text/javascript",r.async=!0,r.src=e,r.onload=r.onreadystatechange=function(){const i=r.readyState;(!i||i==="loaded"||i==="complete")&&(r.onload=r.onreadystatechange=null,r.parentNode&&r.parentNode.removeChild(r),t())},r.onerror=()=>{dt("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(r)}catch(r){}},Math.floor(1))}}/**
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
 */const VC=16384,MC=45e3;let Da=null;typeof MozWebSocket!="undefined"?Da=MozWebSocket:typeof WebSocket!="undefined"&&(Da=WebSocket);class jt{constructor(e,t,r,i,s,o,a){this.connId=e,this.applicationId=r,this.appCheckToken=i,this.authToken=s,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=uo(this.connId),this.stats_=Nd(t),this.connURL=jt.connectionURL_(t,o,a,i,r),this.nodeAdmin=t.nodeAdmin}static connectionURL_(e,t,r,i,s){const o={};return o[uw]=Pd,typeof location!="undefined"&&location.hostname&&mw.test(location.hostname)&&(o[hw]=fw),t&&(o[dw]=t),r&&(o[pw]=r),i&&(o[ru]=i),s&&(o[gw]=s),vw(e,_w,o)}open(e,t){this.onDisconnect=t,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,Rr.set("previous_websocket_failure",!0);try{let r;this.mySock=new Da(this.connURL,[],r)}catch(r){this.log_("Error instantiating WebSocket.");const i=r.message||r.data;i&&this.log_(i),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=r=>{this.handleIncomingFrame(r)},this.mySock.onerror=r=>{this.log_("WebSocket error.  Closing connection.");const i=r.message||r.data;i&&this.log_(i),this.onClosed_()}}start(){}static forceDisallow(){jt.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator!="undefined"&&navigator.userAgent){const t=/Android ([0-9]{0,}\.[0-9]{0,})/,r=navigator.userAgent.match(t);r&&r.length>1&&parseFloat(r[1])<4.4&&(e=!0)}return!e&&Da!==null&&!jt.forceDisallow_}static previouslyFailed(){return Rr.isInMemoryStorage||Rr.get("previous_websocket_failure")===!0}markConnectionHealthy(){Rr.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const t=this.frames.join("");this.frames=null;const r=Ss(t);this.onMessage(r)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(H(this.frames===null,"We already have a frame buffer"),e.length<=6){const t=Number(e);if(!isNaN(t))return this.handleNewFrameCount_(t),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const t=e.data;if(this.bytesReceived+=t.length,this.stats_.incrementCounter("bytes_received",t.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(t);else{const r=this.extractFrameCount_(t);r!==null&&this.appendFrame_(r)}}send(e){this.resetKeepAlive();const t=tt(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const r=cw(t,VC);r.length>1&&this.sendString_(String(r.length));for(let i=0;i<r.length;i++)this.sendString_(r[i])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(MC))}sendString_(e){try{this.mySock.send(e)}catch(t){this.log_("Exception thrown from WebSocket.send():",t.message||t.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}jt.responsesRequiredToBeHealthy=2;jt.healthyTimeout=3e4;/**
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
 */class Fs{static get ALL_TRANSPORTS(){return[ni,jt]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}constructor(e){this.initTransports_(e)}initTransports_(e){const t=jt&&jt.isAvailable();let r=t&&!jt.previouslyFailed();if(e.webSocketOnly&&(t||Lt("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),r=!0),r)this.transports_=[jt];else{const i=this.transports_=[];for(const s of Fs.ALL_TRANSPORTS)s&&s.isAvailable()&&i.push(s);Fs.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}Fs.globalTransportInitialized_=!1;/**
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
 */const xC=6e4,UC=5e3,FC=10*1024,BC=100*1024,_l="t",ip="d",$C="s",sp="r",qC="e",op="o",ap="a",cp="n",lp="p",jC="h";class zC{constructor(e,t,r,i,s,o,a,c,u,d){this.id=e,this.repoInfo_=t,this.applicationId_=r,this.appCheckToken_=i,this.authToken_=s,this.onMessage_=o,this.onReady_=a,this.onDisconnect_=c,this.onKill_=u,this.lastSessionId=d,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=uo("c:"+this.id+":"),this.transportManager_=new Fs(t),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.conn_),r=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(t,r)},Math.floor(0));const i=e.healthyTimeout||0;i>0&&(this.healthyTimeout_=Ts(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>BC?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>FC?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return t=>{e===this.conn_?this.onConnectionLost_(t):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return t=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(t):e===this.secondaryConn_?this.onSecondaryMessageReceived_(t):this.log_("message on old connection"))}}sendRequest(e){const t={t:"d",d:e};this.sendData_(t)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(_l in e){const t=e[_l];t===ap?this.upgradeIfSecondaryHealthy_():t===sp?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):t===op&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const t=es("t",e),r=es("d",e);if(t==="c")this.onSecondaryControl_(r);else if(t==="d")this.pendingDataMessages.push(r);else throw new Error("Unknown protocol layer: "+t)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:lp,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:ap,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:cp,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const t=es("t",e),r=es("d",e);t==="c"?this.onControl_(r):t==="d"&&this.onDataMessage_(r)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const t=es(_l,e);if(ip in e){const r=e[ip];if(t===jC){const i=Object.assign({},r);this.repoInfo_.isUsingEmulator&&(i.h=this.repoInfo_.host),this.onHandshake_(i)}else if(t===cp){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let i=0;i<this.pendingDataMessages.length;++i)this.onDataMessage_(this.pendingDataMessages[i]);this.pendingDataMessages=[],this.tryCleanupConnection()}else t===$C?this.onConnectionShutdown_(r):t===sp?this.onReset_(r):t===qC?nu("Server Error: "+r):t===op?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):nu("Unknown control packet command: "+t)}}onHandshake_(e){const t=e.ts,r=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,t),Pd!==r&&Lt("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.secondaryConn_),r=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(t,r),Ts(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(xC))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,t){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(t,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):Ts(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(UC))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:lp,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(Rr.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
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
 */class bw{put(e,t,r,i){}merge(e,t,r,i){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,t,r){}onDisconnectMerge(e,t,r){}onDisconnectCancel(e,t){}reportStats(e){}}/**
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
 */class Sw{constructor(e){this.allowedEvents_=e,this.listeners_={},H(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...t){if(Array.isArray(this.listeners_[e])){const r=[...this.listeners_[e]];for(let i=0;i<r.length;i++)r[i].callback.apply(r[i].context,t)}}on(e,t,r){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:t,context:r});const i=this.getInitialEvent(e);i&&t.apply(r,i)}off(e,t,r){this.validateEventType_(e);const i=this.listeners_[e]||[];for(let s=0;s<i.length;s++)if(i[s].callback===t&&(!r||r===i[s].context)){i.splice(s,1);return}}validateEventType_(e){H(this.allowedEvents_.find(t=>t===e),"Unknown event: "+e)}}/**
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
 */class Oa extends Sw{static getInstance(){return new Oa}constructor(){super(["online"]),this.online_=!0,typeof window!="undefined"&&typeof window.addEventListener!="undefined"&&!bu()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}getInitialEvent(e){return H(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
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
 */const up=32,dp=768;class De{constructor(e,t){if(t===void 0){this.pieces_=e.split("/");let r=0;for(let i=0;i<this.pieces_.length;i++)this.pieces_[i].length>0&&(this.pieces_[r]=this.pieces_[i],r++);this.pieces_.length=r,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=t}toString(){let e="";for(let t=this.pieceNum_;t<this.pieces_.length;t++)this.pieces_[t]!==""&&(e+="/"+this.pieces_[t]);return e||"/"}}function Re(){return new De("")}function _e(n){return n.pieceNum_>=n.pieces_.length?null:n.pieces_[n.pieceNum_]}function ur(n){return n.pieces_.length-n.pieceNum_}function Pe(n){let e=n.pieceNum_;return e<n.pieces_.length&&e++,new De(n.pieces_,e)}function kw(n){return n.pieceNum_<n.pieces_.length?n.pieces_[n.pieces_.length-1]:null}function GC(n){let e="";for(let t=n.pieceNum_;t<n.pieces_.length;t++)n.pieces_[t]!==""&&(e+="/"+encodeURIComponent(String(n.pieces_[t])));return e||"/"}function Cw(n,e=0){return n.pieces_.slice(n.pieceNum_+e)}function Pw(n){if(n.pieceNum_>=n.pieces_.length)return null;const e=[];for(let t=n.pieceNum_;t<n.pieces_.length-1;t++)e.push(n.pieces_[t]);return new De(e,0)}function Xe(n,e){const t=[];for(let r=n.pieceNum_;r<n.pieces_.length;r++)t.push(n.pieces_[r]);if(e instanceof De)for(let r=e.pieceNum_;r<e.pieces_.length;r++)t.push(e.pieces_[r]);else{const r=e.split("/");for(let i=0;i<r.length;i++)r[i].length>0&&t.push(r[i])}return new De(t,0)}function me(n){return n.pieceNum_>=n.pieces_.length}function xt(n,e){const t=_e(n),r=_e(e);if(t===null)return e;if(t===r)return xt(Pe(n),Pe(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+n+")")}function Nw(n,e){if(ur(n)!==ur(e))return!1;for(let t=n.pieceNum_,r=e.pieceNum_;t<=n.pieces_.length;t++,r++)if(n.pieces_[t]!==e.pieces_[r])return!1;return!0}function Gt(n,e){let t=n.pieceNum_,r=e.pieceNum_;if(ur(n)>ur(e))return!1;for(;t<n.pieces_.length;){if(n.pieces_[t]!==e.pieces_[r])return!1;++t,++r}return!0}class WC{constructor(e,t){this.errorPrefix_=t,this.parts_=Cw(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let r=0;r<this.parts_.length;r++)this.byteLength_+=Ka(this.parts_[r]);Dw(this)}}function HC(n,e){n.parts_.length>0&&(n.byteLength_+=1),n.parts_.push(e),n.byteLength_+=Ka(e),Dw(n)}function KC(n){const e=n.parts_.pop();n.byteLength_-=Ka(e),n.parts_.length>0&&(n.byteLength_-=1)}function Dw(n){if(n.byteLength_>dp)throw new Error(n.errorPrefix_+"has a key path longer than "+dp+" bytes ("+n.byteLength_+").");if(n.parts_.length>up)throw new Error(n.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+up+") or object contains a cycle "+Er(n))}function Er(n){return n.parts_.length===0?"":"in property '"+n.parts_.join(".")+"'"}/**
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
 */class Od extends Sw{static getInstance(){return new Od}constructor(){super(["visible"]);let e,t;typeof document!="undefined"&&typeof document.addEventListener!="undefined"&&(typeof document.hidden!="undefined"?(t="visibilitychange",e="hidden"):typeof document.mozHidden!="undefined"?(t="mozvisibilitychange",e="mozHidden"):typeof document.msHidden!="undefined"?(t="msvisibilitychange",e="msHidden"):typeof document.webkitHidden!="undefined"&&(t="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,t&&document.addEventListener(t,()=>{const r=!document[e];r!==this.visible_&&(this.visible_=r,this.trigger("visible",r))},!1)}getInitialEvent(e){return H(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
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
 */const ts=1e3,QC=60*5*1e3,hp=30*1e3,YC=1.3,JC=3e4,XC="server_kill",fp=3;class Sn extends bw{constructor(e,t,r,i,s,o,a,c){if(super(),this.repoInfo_=e,this.applicationId_=t,this.onDataUpdate_=r,this.onConnectStatus_=i,this.onServerInfoUpdate_=s,this.authTokenProvider_=o,this.appCheckTokenProvider_=a,this.authOverride_=c,this.id=Sn.nextPersistentConnectionId_++,this.log_=uo("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=ts,this.maxReconnectDelay_=QC,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,c&&!sT())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");Od.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&Oa.getInstance().on("online",this.onOnline_,this)}sendRequest(e,t,r){const i=++this.requestNumber_,s={r:i,a:e,b:t};this.log_(tt(s)),H(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(s),r&&(this.requestCBHash_[i]=r)}get(e){this.initConnection_();const t=new Au,i={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const a=o.d;o.s==="ok"?t.resolve(a):t.reject(a)}};this.outstandingGets_.push(i),this.outstandingGetCount_++;const s=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(s),t.promise}listen(e,t,r,i){this.initConnection_();const s=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+s),this.listens.has(o)||this.listens.set(o,new Map),H(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),H(!this.listens.get(o).has(s),"listen() called twice for same path/queryId.");const a={onComplete:i,hashFn:t,query:e,tag:r};this.listens.get(o).set(s,a),this.connected_&&this.sendListen_(a)}sendGet_(e){const t=this.outstandingGets_[e];this.sendRequest("g",t.request,r=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),t.onComplete&&t.onComplete(r)})}sendListen_(e){const t=e.query,r=t._path.toString(),i=t._queryIdentifier;this.log_("Listen on "+r+" for "+i);const s={p:r},o="q";e.tag&&(s.q=t._queryObject,s.t=e.tag),s.h=e.hashFn(),this.sendRequest(o,s,a=>{const c=a.d,u=a.s;Sn.warnOnListenWarnings_(c,t),(this.listens.get(r)&&this.listens.get(r).get(i))===e&&(this.log_("listen response",a),u!=="ok"&&this.removeListen_(r,i),e.onComplete&&e.onComplete(u,c))})}static warnOnListenWarnings_(e,t){if(e&&typeof e=="object"&&xn(e,"w")){const r=di(e,"w");if(Array.isArray(r)&&~r.indexOf("no_index")){const i='".indexOn": "'+t._queryParams.getIndex().toString()+'"',s=t._path.toString();Lt(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${i} at ${s} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||hT(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=hp)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,t=dT(e)?"auth":"gauth",r={cred:e};this.authOverride_===null?r.noauth=!0:typeof this.authOverride_=="object"&&(r.authvar=this.authOverride_),this.sendRequest(t,r,i=>{const s=i.s,o=i.d||"error";this.authToken_===e&&(s==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(s,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const t=e.s,r=e.d||"error";t==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(t,r)})}unlisten(e,t){const r=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+r+" "+i),H(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(r,i)&&this.connected_&&this.sendUnlisten_(r,i,e._queryObject,t)}sendUnlisten_(e,t,r,i){this.log_("Unlisten on "+e+" for "+t);const s={p:e},o="n";i&&(s.q=r,s.t=i),this.sendRequest(o,s)}onDisconnectPut(e,t,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,t,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:t,onComplete:r})}onDisconnectMerge(e,t,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,t,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:t,onComplete:r})}onDisconnectCancel(e,t){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,t):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:t})}sendOnDisconnect_(e,t,r,i){const s={p:t,d:r};this.log_("onDisconnect "+e,s),this.sendRequest(e,s,o=>{i&&setTimeout(()=>{i(o.s,o.d)},Math.floor(0))})}put(e,t,r,i){this.putInternal("p",e,t,r,i)}merge(e,t,r,i){this.putInternal("m",e,t,r,i)}putInternal(e,t,r,i,s){this.initConnection_();const o={p:t,d:r};s!==void 0&&(o.h=s),this.outstandingPuts_.push({action:e,request:o,onComplete:i}),this.outstandingPutCount_++;const a=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(a):this.log_("Buffering put: "+t)}sendPut_(e){const t=this.outstandingPuts_[e].action,r=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(t,r,s=>{this.log_(t+" response",s),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),i&&i(s.s,s.d)})}reportStats(e){if(this.connected_){const t={c:e};this.log_("reportStats",t),this.sendRequest("s",t,r=>{if(r.s!=="ok"){const s=r.d;this.log_("reportStats","Error sending stats: "+s)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+tt(e));const t=e.r,r=this.requestCBHash_[t];r&&(delete this.requestCBHash_[t],r(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,t){this.log_("handleServerMessage",e,t),e==="d"?this.onDataUpdate_(t.p,t.d,!1,t.t):e==="m"?this.onDataUpdate_(t.p,t.d,!0,t.t):e==="c"?this.onListenRevoked_(t.p,t.q):e==="ac"?this.onAuthRevoked_(t.s,t.d):e==="apc"?this.onAppCheckRevoked_(t.s,t.d):e==="sd"?this.onSecurityDebugPacket_(t):nu("Unrecognized action received from server: "+tt(e)+`
Are you using the latest client?`)}onReady_(e,t){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=t,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){H(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=ts,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=ts,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>JC&&(this.reconnectDelay_=ts),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=Math.max(0,new Date().getTime()-this.lastConnectionAttemptTime_);let t=Math.max(0,this.reconnectDelay_-e);t=Math.random()*t,this.log_("Trying to reconnect in "+t+"ms"),this.scheduleConnect_(t),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*YC)}this.onConnectStatus_(!1)}establishConnection_(){return p(this,null,function*(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),t=this.onReady_.bind(this),r=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+Sn.nextConnectionId_++,s=this.lastSessionId;let o=!1,a=null;const c=function(){a?a.close():(o=!0,r())},u=function(h){H(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(h)};this.realtime_={close:c,sendRequest:u};const d=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[h,m]=yield Promise.all([this.authTokenProvider_.getToken(d),this.appCheckTokenProvider_.getToken(d)]);o?dt("getToken() completed but was canceled"):(dt("getToken() completed. Creating connection."),this.authToken_=h&&h.accessToken,this.appCheckToken_=m&&m.token,a=new zC(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,t,r,_=>{Lt(_+" ("+this.repoInfo_.toString()+")"),this.interrupt(XC)},s))}catch(h){this.log_("Failed to get token: "+h),o||(this.repoInfo_.nodeAdmin&&Lt(h),c())}}})}interrupt(e){dt("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){dt("Resuming connection for reason: "+e),delete this.interruptReasons_[e],bl(this.interruptReasons_)&&(this.reconnectDelay_=ts,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const t=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:t})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const t=this.outstandingPuts_[e];t&&"h"in t.request&&t.queued&&(t.onComplete&&t.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,t){let r;t?r=t.map(s=>Cd(s)).join("$"):r="default";const i=this.removeListen_(e,r);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,t){const r=new De(e).toString();let i;if(this.listens.has(r)){const s=this.listens.get(r);i=s.get(t),s.delete(t),s.size===0&&this.listens.delete(r)}else i=void 0;return i}onAuthRevoked_(e,t){dt("Auth token revoked: "+e+"/"+t),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=fp&&(this.reconnectDelay_=hp,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,t){dt("App check token revoked: "+e+"/"+t),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=fp&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const t of e.values())this.sendListen_(t);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let t="js";e["sdk."+t+"."+iw.replace(/\./g,"-")]=1,bu()?e["framework.cordova"]=1:Xp()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=Oa.getInstance().currentlyOnline();return bl(this.interruptReasons_)&&e}}Sn.nextPersistentConnectionId_=0;Sn.nextConnectionId_=0;/**
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
 */class ye{constructor(e,t){this.name=e,this.node=t}static Wrap(e,t){return new ye(e,t)}}/**
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
 */class Ic{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,t){const r=new ye(vi,e),i=new ye(vi,t);return this.compare(r,i)!==0}minPost(){return ye.MIN}}/**
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
 */let zo;class Ow extends Ic{static get __EMPTY_NODE(){return zo}static set __EMPTY_NODE(e){zo=e}compare(e,t){return Li(e.name,t.name)}isDefinedOn(e){throw Ri("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,t){return!1}minPost(){return ye.MIN}maxPost(){return new ye(Or,zo)}makePost(e,t){return H(typeof e=="string","KeyIndex indexValue must always be a string."),new ye(e,zo)}toString(){return".key"}}const ui=new Ow;/**
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
 */class Go{constructor(e,t,r,i,s=null){this.isReverse_=i,this.resultGenerator_=s,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=t?r(e.key,t):1,i&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),t;if(this.resultGenerator_?t=this.resultGenerator_(e.key,e.value):t={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return t}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class Ye{constructor(e,t,r,i,s){this.key=e,this.value=t,this.color=r!=null?r:Ye.RED,this.left=i!=null?i:At.EMPTY_NODE,this.right=s!=null?s:At.EMPTY_NODE}copy(e,t,r,i,s){return new Ye(e!=null?e:this.key,t!=null?t:this.value,r!=null?r:this.color,i!=null?i:this.left,s!=null?s:this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,r){let i=this;const s=r(e,i.key);return s<0?i=i.copy(null,null,null,i.left.insert(e,t,r),null):s===0?i=i.copy(null,t,null,null,null):i=i.copy(null,null,null,null,i.right.insert(e,t,r)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return At.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,t){let r,i;if(r=this,t(e,r.key)<0)!r.left.isEmpty()&&!r.left.isRed_()&&!r.left.left.isRed_()&&(r=r.moveRedLeft_()),r=r.copy(null,null,null,r.left.remove(e,t),null);else{if(r.left.isRed_()&&(r=r.rotateRight_()),!r.right.isEmpty()&&!r.right.isRed_()&&!r.right.left.isRed_()&&(r=r.moveRedRight_()),t(e,r.key)===0){if(r.right.isEmpty())return At.EMPTY_NODE;i=r.right.min_(),r=r.copy(i.key,i.value,null,null,r.right.removeMin_())}r=r.copy(null,null,null,null,r.right.remove(e,t))}return r.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,Ye.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,Ye.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}Ye.RED=!0;Ye.BLACK=!1;class ZC{copy(e,t,r,i,s){return this}insert(e,t,r){return new Ye(e,t,null)}remove(e,t){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class At{constructor(e,t=At.EMPTY_NODE){this.comparator_=e,this.root_=t}insert(e,t){return new At(this.comparator_,this.root_.insert(e,t,this.comparator_).copy(null,null,Ye.BLACK,null,null))}remove(e){return new At(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,Ye.BLACK,null,null))}get(e){let t,r=this.root_;for(;!r.isEmpty();){if(t=this.comparator_(e,r.key),t===0)return r.value;t<0?r=r.left:t>0&&(r=r.right)}return null}getPredecessorKey(e){let t,r=this.root_,i=null;for(;!r.isEmpty();)if(t=this.comparator_(e,r.key),t===0){if(r.left.isEmpty())return i?i.key:null;for(r=r.left;!r.right.isEmpty();)r=r.right;return r.key}else t<0?r=r.left:t>0&&(i=r,r=r.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new Go(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,t){return new Go(this.root_,e,this.comparator_,!1,t)}getReverseIteratorFrom(e,t){return new Go(this.root_,e,this.comparator_,!0,t)}getReverseIterator(e){return new Go(this.root_,null,this.comparator_,!0,e)}}At.EMPTY_NODE=new ZC;/**
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
 */function eP(n,e){return Li(n.name,e.name)}function Ld(n,e){return Li(n,e)}/**
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
 */let iu;function tP(n){iu=n}const Lw=function(n){return typeof n=="number"?"number:"+lw(n):"string:"+n},Vw=function(n){if(n.isLeafNode()){const e=n.val();H(typeof e=="string"||typeof e=="number"||typeof e=="object"&&xn(e,".sv"),"Priority must be a string or number.")}else H(n===iu||n.isEmpty(),"priority of unexpected type.");H(n===iu||n.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
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
 */let mp;class Ke{static set __childrenNodeConstructor(e){mp=e}static get __childrenNodeConstructor(){return mp}constructor(e,t=Ke.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=t,this.lazyHash_=null,H(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),Vw(this.priorityNode_)}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new Ke(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:Ke.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return me(e)?this:_e(e)===".priority"?this.priorityNode_:Ke.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,t){return null}updateImmediateChild(e,t){return e===".priority"?this.updatePriority(t):t.isEmpty()&&e!==".priority"?this:Ke.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,t).updatePriority(this.priorityNode_)}updateChild(e,t){const r=_e(e);return r===null?t:t.isEmpty()&&r!==".priority"?this:(H(r!==".priority"||ur(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(r,Ke.__childrenNodeConstructor.EMPTY_NODE.updateChild(Pe(e),t)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,t){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+Lw(this.priorityNode_.val())+":");const t=typeof this.value_;e+=t+":",t==="number"?e+=lw(this.value_):e+=this.value_,this.lazyHash_=ow(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===Ke.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof Ke.__childrenNodeConstructor?-1:(H(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const t=typeof e.value_,r=typeof this.value_,i=Ke.VALUE_TYPE_ORDER.indexOf(t),s=Ke.VALUE_TYPE_ORDER.indexOf(r);return H(i>=0,"Unknown leaf type: "+t),H(s>=0,"Unknown leaf type: "+r),i===s?r==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:s-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const t=e;return this.value_===t.value_&&this.priorityNode_.equals(t.priorityNode_)}else return!1}}Ke.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
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
 */let Mw,xw;function nP(n){Mw=n}function rP(n){xw=n}class iP extends Ic{compare(e,t){const r=e.node.getPriority(),i=t.node.getPriority(),s=r.compareTo(i);return s===0?Li(e.name,t.name):s}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,t){return!e.getPriority().equals(t.getPriority())}minPost(){return ye.MIN}maxPost(){return new ye(Or,new Ke("[PRIORITY-POST]",xw))}makePost(e,t){const r=Mw(e);return new ye(t,new Ke("[PRIORITY-POST]",r))}toString(){return".priority"}}const ft=new iP;/**
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
 */const sP=Math.log(2);class oP{constructor(e){const t=s=>parseInt(Math.log(s)/sP,10),r=s=>parseInt(Array(s+1).join("1"),2);this.count=t(e+1),this.current_=this.count-1;const i=r(this.count);this.bits_=e+1&i}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const La=function(n,e,t,r){n.sort(e);const i=function(c,u){const d=u-c;let h,m;if(d===0)return null;if(d===1)return h=n[c],m=t?t(h):h,new Ye(m,h.node,Ye.BLACK,null,null);{const _=parseInt(d/2,10)+c,w=i(c,_),v=i(_+1,u);return h=n[_],m=t?t(h):h,new Ye(m,h.node,Ye.BLACK,w,v)}},s=function(c){let u=null,d=null,h=n.length;const m=function(w,v){const E=h-w,P=h;h-=w;const O=i(E+1,P),M=n[E],x=t?t(M):M;_(new Ye(x,M.node,v,null,O))},_=function(w){u?(u.left=w,u=w):(d=w,u=w)};for(let w=0;w<c.count;++w){const v=c.nextBitIsOne(),E=Math.pow(2,c.count-(w+1));v?m(E,Ye.BLACK):(m(E,Ye.BLACK),m(E,Ye.RED))}return d},o=new oP(n.length),a=s(o);return new At(r||e,a)};/**
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
 */let yl;const Yr={};class In{static get Default(){return H(Yr&&ft,"ChildrenNode.ts has not been loaded"),yl=yl||new In({".priority":Yr},{".priority":ft}),yl}constructor(e,t){this.indexes_=e,this.indexSet_=t}get(e){const t=di(this.indexes_,e);if(!t)throw new Error("No index defined for "+e);return t instanceof At?t:null}hasIndex(e){return xn(this.indexSet_,e.toString())}addIndex(e,t){H(e!==ui,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const r=[];let i=!1;const s=t.getIterator(ye.Wrap);let o=s.getNext();for(;o;)i=i||e.isDefinedOn(o.node),r.push(o),o=s.getNext();let a;i?a=La(r,e.getCompare()):a=Yr;const c=e.toString(),u=Object.assign({},this.indexSet_);u[c]=e;const d=Object.assign({},this.indexes_);return d[c]=a,new In(d,u)}addToIndexes(e,t){const r=ca(this.indexes_,(i,s)=>{const o=di(this.indexSet_,s);if(H(o,"Missing index implementation for "+s),i===Yr)if(o.isDefinedOn(e.node)){const a=[],c=t.getIterator(ye.Wrap);let u=c.getNext();for(;u;)u.name!==e.name&&a.push(u),u=c.getNext();return a.push(e),La(a,o.getCompare())}else return Yr;else{const a=t.get(e.name);let c=i;return a&&(c=c.remove(new ye(e.name,a))),c.insert(e,e.node)}});return new In(r,this.indexSet_)}removeFromIndexes(e,t){const r=ca(this.indexes_,i=>{if(i===Yr)return i;{const s=t.get(e.name);return s?i.remove(new ye(e.name,s)):i}});return new In(r,this.indexSet_)}}/**
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
 */let ns;class Te{static get EMPTY_NODE(){return ns||(ns=new Te(new At(Ld),null,In.Default))}constructor(e,t,r){this.children_=e,this.priorityNode_=t,this.indexMap_=r,this.lazyHash_=null,this.priorityNode_&&Vw(this.priorityNode_),this.children_.isEmpty()&&H(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}isLeafNode(){return!1}getPriority(){return this.priorityNode_||ns}updatePriority(e){return this.children_.isEmpty()?this:new Te(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const t=this.children_.get(e);return t===null?ns:t}}getChild(e){const t=_e(e);return t===null?this:this.getImmediateChild(t).getChild(Pe(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,t){if(H(t,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(t);{const r=new ye(e,t);let i,s;t.isEmpty()?(i=this.children_.remove(e),s=this.indexMap_.removeFromIndexes(r,this.children_)):(i=this.children_.insert(e,t),s=this.indexMap_.addToIndexes(r,this.children_));const o=i.isEmpty()?ns:this.priorityNode_;return new Te(i,o,s)}}updateChild(e,t){const r=_e(e);if(r===null)return t;{H(_e(e)!==".priority"||ur(e)===1,".priority must be the last token in a path");const i=this.getImmediateChild(r).updateChild(Pe(e),t);return this.updateImmediateChild(r,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const t={};let r=0,i=0,s=!0;if(this.forEachChild(ft,(o,a)=>{t[o]=a.val(e),r++,s&&Te.INTEGER_REGEXP_.test(o)?i=Math.max(i,Number(o)):s=!1}),!e&&s&&i<2*r){const o=[];for(const a in t)o[a]=t[a];return o}else return e&&!this.getPriority().isEmpty()&&(t[".priority"]=this.getPriority().val()),t}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+Lw(this.getPriority().val())+":"),this.forEachChild(ft,(t,r)=>{const i=r.hash();i!==""&&(e+=":"+t+":"+i)}),this.lazyHash_=e===""?"":ow(e)}return this.lazyHash_}getPredecessorChildName(e,t,r){const i=this.resolveIndex_(r);if(i){const s=i.getPredecessorKey(new ye(e,t));return s?s.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const t=this.resolveIndex_(e);if(t){const r=t.minKey();return r&&r.name}else return this.children_.minKey()}getFirstChild(e){const t=this.getFirstChildName(e);return t?new ye(t,this.children_.get(t)):null}getLastChildName(e){const t=this.resolveIndex_(e);if(t){const r=t.maxKey();return r&&r.name}else return this.children_.maxKey()}getLastChild(e){const t=this.getLastChildName(e);return t?new ye(t,this.children_.get(t)):null}forEachChild(e,t){const r=this.resolveIndex_(e);return r?r.inorderTraversal(i=>t(i.name,i.node)):this.children_.inorderTraversal(t)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,t){const r=this.resolveIndex_(t);if(r)return r.getIteratorFrom(e,i=>i);{const i=this.children_.getIteratorFrom(e.name,ye.Wrap);let s=i.peek();for(;s!=null&&t.compare(s,e)<0;)i.getNext(),s=i.peek();return i}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,t){const r=this.resolveIndex_(t);if(r)return r.getReverseIteratorFrom(e,i=>i);{const i=this.children_.getReverseIteratorFrom(e.name,ye.Wrap);let s=i.peek();for(;s!=null&&t.compare(s,e)>0;)i.getNext(),s=i.peek();return i}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===fo?-1:0}withIndex(e){if(e===ui||this.indexMap_.hasIndex(e))return this;{const t=this.indexMap_.addIndex(e,this.children_);return new Te(this.children_,this.priorityNode_,t)}}isIndexed(e){return e===ui||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const t=e;if(this.getPriority().equals(t.getPriority()))if(this.children_.count()===t.children_.count()){const r=this.getIterator(ft),i=t.getIterator(ft);let s=r.getNext(),o=i.getNext();for(;s&&o;){if(s.name!==o.name||!s.node.equals(o.node))return!1;s=r.getNext(),o=i.getNext()}return s===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===ui?null:this.indexMap_.get(e.toString())}}Te.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class aP extends Te{constructor(){super(new At(Ld),Te.EMPTY_NODE,In.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return Te.EMPTY_NODE}isEmpty(){return!1}}const fo=new aP;Object.defineProperties(ye,{MIN:{value:new ye(vi,Te.EMPTY_NODE)},MAX:{value:new ye(Or,fo)}});Ow.__EMPTY_NODE=Te.EMPTY_NODE;Ke.__childrenNodeConstructor=Te;tP(fo);rP(fo);/**
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
 */const cP=!0;function ht(n,e=null){if(n===null)return Te.EMPTY_NODE;if(typeof n=="object"&&".priority"in n&&(e=n[".priority"]),H(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof n=="object"&&".value"in n&&n[".value"]!==null&&(n=n[".value"]),typeof n!="object"||".sv"in n){const t=n;return new Ke(t,ht(e))}if(!(n instanceof Array)&&cP){const t=[];let r=!1;if(Ft(n,(o,a)=>{if(o.substring(0,1)!=="."){const c=ht(a);c.isEmpty()||(r=r||!c.getPriority().isEmpty(),t.push(new ye(o,c)))}}),t.length===0)return Te.EMPTY_NODE;const s=La(t,eP,o=>o.name,Ld);if(r){const o=La(t,ft.getCompare());return new Te(s,ht(e),new In({".priority":o},{".priority":ft}))}else return new Te(s,ht(e),In.Default)}else{let t=Te.EMPTY_NODE;return Ft(n,(r,i)=>{if(xn(n,r)&&r.substring(0,1)!=="."){const s=ht(i);(s.isLeafNode()||!s.isEmpty())&&(t=t.updateImmediateChild(r,s))}}),t.updatePriority(ht(e))}}nP(ht);/**
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
 */class lP extends Ic{constructor(e){super(),this.indexPath_=e,H(!me(e)&&_e(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,t){const r=this.extractChild(e.node),i=this.extractChild(t.node),s=r.compareTo(i);return s===0?Li(e.name,t.name):s}makePost(e,t){const r=ht(e),i=Te.EMPTY_NODE.updateChild(this.indexPath_,r);return new ye(t,i)}maxPost(){const e=Te.EMPTY_NODE.updateChild(this.indexPath_,fo);return new ye(Or,e)}toString(){return Cw(this.indexPath_,0).join("/")}}/**
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
 */class uP extends Ic{compare(e,t){const r=e.node.compareTo(t.node);return r===0?Li(e.name,t.name):r}isDefinedOn(e){return!0}indexedValueChanged(e,t){return!e.equals(t)}minPost(){return ye.MIN}maxPost(){return ye.MAX}makePost(e,t){const r=ht(e);return new ye(t,r)}toString(){return".value"}}const dP=new uP;/**
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
 */function hP(n){return{type:"value",snapshotNode:n}}function fP(n,e){return{type:"child_added",snapshotNode:e,childName:n}}function mP(n,e){return{type:"child_removed",snapshotNode:e,childName:n}}function pp(n,e,t){return{type:"child_changed",snapshotNode:e,childName:n,oldSnap:t}}function pP(n,e){return{type:"child_moved",snapshotNode:e,childName:n}}/**
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
 */class Vd{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=ft}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return H(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return H(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:vi}hasEnd(){return this.endSet_}getIndexEndValue(){return H(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return H(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:Or}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return H(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===ft}copy(){const e=new Vd;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function gp(n){const e={};if(n.isDefault())return e;let t;if(n.index_===ft?t="$priority":n.index_===dP?t="$value":n.index_===ui?t="$key":(H(n.index_ instanceof lP,"Unrecognized index type!"),t=n.index_.toString()),e.orderBy=tt(t),n.startSet_){const r=n.startAfterSet_?"startAfter":"startAt";e[r]=tt(n.indexStartValue_),n.startNameSet_&&(e[r]+=","+tt(n.indexStartName_))}if(n.endSet_){const r=n.endBeforeSet_?"endBefore":"endAt";e[r]=tt(n.indexEndValue_),n.endNameSet_&&(e[r]+=","+tt(n.indexEndName_))}return n.limitSet_&&(n.isViewFromLeft()?e.limitToFirst=n.limit_:e.limitToLast=n.limit_),e}function _p(n){const e={};if(n.startSet_&&(e.sp=n.indexStartValue_,n.startNameSet_&&(e.sn=n.indexStartName_),e.sin=!n.startAfterSet_),n.endSet_&&(e.ep=n.indexEndValue_,n.endNameSet_&&(e.en=n.indexEndName_),e.ein=!n.endBeforeSet_),n.limitSet_){e.l=n.limit_;let t=n.viewFrom_;t===""&&(n.isViewFromLeft()?t="l":t="r"),e.vf=t}return n.index_!==ft&&(e.i=n.index_.toString()),e}/**
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
 */class Va extends bw{reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,t){return t!==void 0?"tag$"+t:(H(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}constructor(e,t,r,i){super(),this.repoInfo_=e,this.onDataUpdate_=t,this.authTokenProvider_=r,this.appCheckTokenProvider_=i,this.log_=uo("p:rest:"),this.listens_={}}listen(e,t,r,i){const s=e._path.toString();this.log_("Listen called for "+s+" "+e._queryIdentifier);const o=Va.getListenId_(e,r),a={};this.listens_[o]=a;const c=gp(e._queryParams);this.restRequest_(s+".json",c,(u,d)=>{let h=d;if(u===404&&(h=null,u=null),u===null&&this.onDataUpdate_(s,h,!1,r),di(this.listens_,o)===a){let m;u?u===401?m="permission_denied":m="rest_error:"+u:m="ok",i(m,null)}})}unlisten(e,t){const r=Va.getListenId_(e,t);delete this.listens_[r]}get(e){const t=gp(e._queryParams),r=e._path.toString(),i=new Au;return this.restRequest_(r+".json",t,(s,o)=>{let a=o;s===404&&(a=null,s=null),s===null?(this.onDataUpdate_(r,a,!1,null),i.resolve(a)):i.reject(new Error(a))}),i.promise}refreshAuthToken(e){}restRequest_(e,t={},r){return t.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([i,s])=>{i&&i.accessToken&&(t.auth=i.accessToken),s&&s.token&&(t.ac=s.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+bi(t);this.log_("Sending REST request for "+o);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(r&&a.readyState===4){this.log_("REST Response for "+o+" received. status:",a.status,"response:",a.responseText);let c=null;if(a.status>=200&&a.status<300){try{c=Ss(a.responseText)}catch(u){Lt("Failed to parse JSON response for "+o+": "+a.responseText)}r(null,c)}else a.status!==401&&a.status!==404&&Lt("Got unsuccessful REST response for "+o+" Status: "+a.status),r(a.status);r=null}},a.open("GET",o,!0),a.send()})}}/**
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
 */class gP{constructor(){this.rootNode_=Te.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,t){this.rootNode_=this.rootNode_.updateChild(e,t)}}/**
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
 */function Ma(){return{value:null,children:new Map}}function Uw(n,e,t){if(me(e))n.value=t,n.children.clear();else if(n.value!==null)n.value=n.value.updateChild(e,t);else{const r=_e(e);n.children.has(r)||n.children.set(r,Ma());const i=n.children.get(r);e=Pe(e),Uw(i,e,t)}}function su(n,e,t){n.value!==null?t(e,n.value):_P(n,(r,i)=>{const s=new De(e.toString()+"/"+r);su(i,s,t)})}function _P(n,e){n.children.forEach((t,r)=>{e(r,t)})}/**
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
 */class yP{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),t=Object.assign({},e);return this.last_&&Ft(this.last_,(r,i)=>{t[r]=t[r]-i}),this.last_=e,t}}/**
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
 */const yp=10*1e3,wP=30*1e3,vP=5*60*1e3;class EP{constructor(e,t){this.server_=t,this.statsToReport_={},this.statsListener_=new yP(e);const r=yp+(wP-yp)*Math.random();Ts(this.reportStats_.bind(this),Math.floor(r))}reportStats_(){const e=this.statsListener_.get(),t={};let r=!1;Ft(e,(i,s)=>{s>0&&xn(this.statsToReport_,i)&&(t[i]=s,r=!0)}),r&&this.server_.reportStats(t),Ts(this.reportStats_.bind(this),Math.floor(Math.random()*2*vP))}}/**
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
 */var rn;(function(n){n[n.OVERWRITE=0]="OVERWRITE",n[n.MERGE=1]="MERGE",n[n.ACK_USER_WRITE=2]="ACK_USER_WRITE",n[n.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(rn||(rn={}));function Fw(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function Bw(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function $w(n){return{fromUser:!1,fromServer:!0,queryId:n,tagged:!0}}/**
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
 */class xa{constructor(e,t,r){this.path=e,this.affectedTree=t,this.revert=r,this.type=rn.ACK_USER_WRITE,this.source=Fw()}operationForChild(e){if(me(this.path)){if(this.affectedTree.value!=null)return H(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const t=this.affectedTree.subtree(new De(e));return new xa(Re(),t,this.revert)}}else return H(_e(this.path)===e,"operationForChild called for unrelated child."),new xa(Pe(this.path),this.affectedTree,this.revert)}}/**
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
 */class Lr{constructor(e,t,r){this.source=e,this.path=t,this.snap=r,this.type=rn.OVERWRITE}operationForChild(e){return me(this.path)?new Lr(this.source,Re(),this.snap.getImmediateChild(e)):new Lr(this.source,Pe(this.path),this.snap)}}/**
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
 */class Bs{constructor(e,t,r){this.source=e,this.path=t,this.children=r,this.type=rn.MERGE}operationForChild(e){if(me(this.path)){const t=this.children.subtree(new De(e));return t.isEmpty()?null:t.value?new Lr(this.source,Re(),t.value):new Bs(this.source,Re(),t)}else return H(_e(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new Bs(this.source,Pe(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
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
 */class Md{constructor(e,t,r){this.node_=e,this.fullyInitialized_=t,this.filtered_=r}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(me(e))return this.isFullyInitialized()&&!this.filtered_;const t=_e(e);return this.isCompleteForChild(t)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}function TP(n,e,t,r){const i=[],s=[];return e.forEach(o=>{o.type==="child_changed"&&n.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&s.push(pP(o.childName,o.snapshotNode))}),rs(n,i,"child_removed",e,r,t),rs(n,i,"child_added",e,r,t),rs(n,i,"child_moved",s,r,t),rs(n,i,"child_changed",e,r,t),rs(n,i,"value",e,r,t),i}function rs(n,e,t,r,i,s){const o=r.filter(a=>a.type===t);o.sort((a,c)=>AP(n,a,c)),o.forEach(a=>{const c=IP(n,a,s);i.forEach(u=>{u.respondsTo(a.type)&&e.push(u.createEvent(c,n.query_))})})}function IP(n,e,t){return e.type==="value"||e.type==="child_removed"||(e.prevName=t.getPredecessorChildName(e.childName,e.snapshotNode,n.index_)),e}function AP(n,e,t){if(e.childName==null||t.childName==null)throw Ri("Should only compare child_ events.");const r=new ye(e.childName,e.snapshotNode),i=new ye(t.childName,t.snapshotNode);return n.index_.compare(r,i)}/**
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
 */function qw(n,e){return{eventCache:n,serverCache:e}}function Is(n,e,t,r){return qw(new Md(e,t,r),n.serverCache)}function jw(n,e,t,r){return qw(n.eventCache,new Md(e,t,r))}function ou(n){return n.eventCache.isFullyInitialized()?n.eventCache.getNode():null}function Vr(n){return n.serverCache.isFullyInitialized()?n.serverCache.getNode():null}/**
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
 */let wl;const RP=()=>(wl||(wl=new At(dC)),wl);class Ce{static fromObject(e){let t=new Ce(null);return Ft(e,(r,i)=>{t=t.set(new De(r),i)}),t}constructor(e,t=RP()){this.value=e,this.children=t}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,t){if(this.value!=null&&t(this.value))return{path:Re(),value:this.value};if(me(e))return null;{const r=_e(e),i=this.children.get(r);if(i!==null){const s=i.findRootMostMatchingPathAndValue(Pe(e),t);return s!=null?{path:Xe(new De(r),s.path),value:s.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(me(e))return this;{const t=_e(e),r=this.children.get(t);return r!==null?r.subtree(Pe(e)):new Ce(null)}}set(e,t){if(me(e))return new Ce(t,this.children);{const r=_e(e),s=(this.children.get(r)||new Ce(null)).set(Pe(e),t),o=this.children.insert(r,s);return new Ce(this.value,o)}}remove(e){if(me(e))return this.children.isEmpty()?new Ce(null):new Ce(null,this.children);{const t=_e(e),r=this.children.get(t);if(r){const i=r.remove(Pe(e));let s;return i.isEmpty()?s=this.children.remove(t):s=this.children.insert(t,i),this.value===null&&s.isEmpty()?new Ce(null):new Ce(this.value,s)}else return this}}get(e){if(me(e))return this.value;{const t=_e(e),r=this.children.get(t);return r?r.get(Pe(e)):null}}setTree(e,t){if(me(e))return t;{const r=_e(e),s=(this.children.get(r)||new Ce(null)).setTree(Pe(e),t);let o;return s.isEmpty()?o=this.children.remove(r):o=this.children.insert(r,s),new Ce(this.value,o)}}fold(e){return this.fold_(Re(),e)}fold_(e,t){const r={};return this.children.inorderTraversal((i,s)=>{r[i]=s.fold_(Xe(e,i),t)}),t(e,this.value,r)}findOnPath(e,t){return this.findOnPath_(e,Re(),t)}findOnPath_(e,t,r){const i=this.value?r(t,this.value):!1;if(i)return i;if(me(e))return null;{const s=_e(e),o=this.children.get(s);return o?o.findOnPath_(Pe(e),Xe(t,s),r):null}}foreachOnPath(e,t){return this.foreachOnPath_(e,Re(),t)}foreachOnPath_(e,t,r){if(me(e))return this;{this.value&&r(t,this.value);const i=_e(e),s=this.children.get(i);return s?s.foreachOnPath_(Pe(e),Xe(t,i),r):new Ce(null)}}foreach(e){this.foreach_(Re(),e)}foreach_(e,t){this.children.inorderTraversal((r,i)=>{i.foreach_(Xe(e,r),t)}),this.value&&t(e,this.value)}foreachChild(e){this.children.inorderTraversal((t,r)=>{r.value&&e(t,r.value)})}}/**
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
 */class Qt{constructor(e){this.writeTree_=e}static empty(){return new Qt(new Ce(null))}}function As(n,e,t){if(me(e))return new Qt(new Ce(t));{const r=n.writeTree_.findRootMostValueAndPath(e);if(r!=null){const i=r.path;let s=r.value;const o=xt(i,e);return s=s.updateChild(o,t),new Qt(n.writeTree_.set(i,s))}else{const i=new Ce(t),s=n.writeTree_.setTree(e,i);return new Qt(s)}}}function wp(n,e,t){let r=n;return Ft(t,(i,s)=>{r=As(r,Xe(e,i),s)}),r}function vp(n,e){if(me(e))return Qt.empty();{const t=n.writeTree_.setTree(e,new Ce(null));return new Qt(t)}}function au(n,e){return zr(n,e)!=null}function zr(n,e){const t=n.writeTree_.findRootMostValueAndPath(e);return t!=null?n.writeTree_.get(t.path).getChild(xt(t.path,e)):null}function Ep(n){const e=[],t=n.writeTree_.value;return t!=null?t.isLeafNode()||t.forEachChild(ft,(r,i)=>{e.push(new ye(r,i))}):n.writeTree_.children.inorderTraversal((r,i)=>{i.value!=null&&e.push(new ye(r,i.value))}),e}function tr(n,e){if(me(e))return n;{const t=zr(n,e);return t!=null?new Qt(new Ce(t)):new Qt(n.writeTree_.subtree(e))}}function cu(n){return n.writeTree_.isEmpty()}function Ei(n,e){return zw(Re(),n.writeTree_,e)}function zw(n,e,t){if(e.value!=null)return t.updateChild(n,e.value);{let r=null;return e.children.inorderTraversal((i,s)=>{i===".priority"?(H(s.value!==null,"Priority writes must always be leaf nodes"),r=s.value):t=zw(Xe(n,i),s,t)}),!t.getChild(n).isEmpty()&&r!==null&&(t=t.updateChild(Xe(n,".priority"),r)),t}}/**
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
 */function Gw(n,e){return Yw(e,n)}function bP(n,e,t,r,i){H(r>n.lastWriteId,"Stacking an older write on top of newer ones"),i===void 0&&(i=!0),n.allWrites.push({path:e,snap:t,writeId:r,visible:i}),i&&(n.visibleWrites=As(n.visibleWrites,e,t)),n.lastWriteId=r}function SP(n,e){for(let t=0;t<n.allWrites.length;t++){const r=n.allWrites[t];if(r.writeId===e)return r}return null}function kP(n,e){const t=n.allWrites.findIndex(a=>a.writeId===e);H(t>=0,"removeWrite called with nonexistent writeId.");const r=n.allWrites[t];n.allWrites.splice(t,1);let i=r.visible,s=!1,o=n.allWrites.length-1;for(;i&&o>=0;){const a=n.allWrites[o];a.visible&&(o>=t&&CP(a,r.path)?i=!1:Gt(r.path,a.path)&&(s=!0)),o--}if(i){if(s)return PP(n),!0;if(r.snap)n.visibleWrites=vp(n.visibleWrites,r.path);else{const a=r.children;Ft(a,c=>{n.visibleWrites=vp(n.visibleWrites,Xe(r.path,c))})}return!0}else return!1}function CP(n,e){if(n.snap)return Gt(n.path,e);for(const t in n.children)if(n.children.hasOwnProperty(t)&&Gt(Xe(n.path,t),e))return!0;return!1}function PP(n){n.visibleWrites=Ww(n.allWrites,NP,Re()),n.allWrites.length>0?n.lastWriteId=n.allWrites[n.allWrites.length-1].writeId:n.lastWriteId=-1}function NP(n){return n.visible}function Ww(n,e,t){let r=Qt.empty();for(let i=0;i<n.length;++i){const s=n[i];if(e(s)){const o=s.path;let a;if(s.snap)Gt(t,o)?(a=xt(t,o),r=As(r,a,s.snap)):Gt(o,t)&&(a=xt(o,t),r=As(r,Re(),s.snap.getChild(a)));else if(s.children){if(Gt(t,o))a=xt(t,o),r=wp(r,a,s.children);else if(Gt(o,t))if(a=xt(o,t),me(a))r=wp(r,Re(),s.children);else{const c=di(s.children,_e(a));if(c){const u=c.getChild(Pe(a));r=As(r,Re(),u)}}}else throw Ri("WriteRecord should have .snap or .children")}}return r}function Hw(n,e,t,r,i){if(!r&&!i){const s=zr(n.visibleWrites,e);if(s!=null)return s;{const o=tr(n.visibleWrites,e);if(cu(o))return t;if(t==null&&!au(o,Re()))return null;{const a=t||Te.EMPTY_NODE;return Ei(o,a)}}}else{const s=tr(n.visibleWrites,e);if(!i&&cu(s))return t;if(!i&&t==null&&!au(s,Re()))return null;{const o=function(u){return(u.visible||i)&&(!r||!~r.indexOf(u.writeId))&&(Gt(u.path,e)||Gt(e,u.path))},a=Ww(n.allWrites,o,e),c=t||Te.EMPTY_NODE;return Ei(a,c)}}}function DP(n,e,t){let r=Te.EMPTY_NODE;const i=zr(n.visibleWrites,e);if(i)return i.isLeafNode()||i.forEachChild(ft,(s,o)=>{r=r.updateImmediateChild(s,o)}),r;if(t){const s=tr(n.visibleWrites,e);return t.forEachChild(ft,(o,a)=>{const c=Ei(tr(s,new De(o)),a);r=r.updateImmediateChild(o,c)}),Ep(s).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}else{const s=tr(n.visibleWrites,e);return Ep(s).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}}function OP(n,e,t,r,i){H(r||i,"Either existingEventSnap or existingServerSnap must exist");const s=Xe(e,t);if(au(n.visibleWrites,s))return null;{const o=tr(n.visibleWrites,s);return cu(o)?i.getChild(t):Ei(o,i.getChild(t))}}function LP(n,e,t,r){const i=Xe(e,t),s=zr(n.visibleWrites,i);if(s!=null)return s;if(r.isCompleteForChild(t)){const o=tr(n.visibleWrites,i);return Ei(o,r.getNode().getImmediateChild(t))}else return null}function VP(n,e){return zr(n.visibleWrites,e)}function MP(n,e,t,r,i,s,o){let a;const c=tr(n.visibleWrites,e),u=zr(c,Re());if(u!=null)a=u;else if(t!=null)a=Ei(c,t);else return[];if(a=a.withIndex(o),!a.isEmpty()&&!a.isLeafNode()){const d=[],h=o.getCompare(),m=s?a.getReverseIteratorFrom(r,o):a.getIteratorFrom(r,o);let _=m.getNext();for(;_&&d.length<i;)h(_,r)!==0&&d.push(_),_=m.getNext();return d}else return[]}function xP(){return{visibleWrites:Qt.empty(),allWrites:[],lastWriteId:-1}}function lu(n,e,t,r){return Hw(n.writeTree,n.treePath,e,t,r)}function Kw(n,e){return DP(n.writeTree,n.treePath,e)}function Tp(n,e,t,r){return OP(n.writeTree,n.treePath,e,t,r)}function Ua(n,e){return VP(n.writeTree,Xe(n.treePath,e))}function UP(n,e,t,r,i,s){return MP(n.writeTree,n.treePath,e,t,r,i,s)}function xd(n,e,t){return LP(n.writeTree,n.treePath,e,t)}function Qw(n,e){return Yw(Xe(n.treePath,e),n.writeTree)}function Yw(n,e){return{treePath:n,writeTree:e}}/**
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
 */class FP{constructor(){this.changeMap=new Map}trackChildChange(e){const t=e.type,r=e.childName;H(t==="child_added"||t==="child_changed"||t==="child_removed","Only child changes supported for tracking"),H(r!==".priority","Only non-priority child changes can be tracked.");const i=this.changeMap.get(r);if(i){const s=i.type;if(t==="child_added"&&s==="child_removed")this.changeMap.set(r,pp(r,e.snapshotNode,i.snapshotNode));else if(t==="child_removed"&&s==="child_added")this.changeMap.delete(r);else if(t==="child_removed"&&s==="child_changed")this.changeMap.set(r,mP(r,i.oldSnap));else if(t==="child_changed"&&s==="child_added")this.changeMap.set(r,fP(r,e.snapshotNode));else if(t==="child_changed"&&s==="child_changed")this.changeMap.set(r,pp(r,e.snapshotNode,i.oldSnap));else throw Ri("Illegal combination of changes: "+e+" occurred after "+i)}else this.changeMap.set(r,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
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
 */class BP{getCompleteChild(e){return null}getChildAfterChild(e,t,r){return null}}const Jw=new BP;class Ud{constructor(e,t,r=null){this.writes_=e,this.viewCache_=t,this.optCompleteServerCache_=r}getCompleteChild(e){const t=this.viewCache_.eventCache;if(t.isCompleteForChild(e))return t.getNode().getImmediateChild(e);{const r=this.optCompleteServerCache_!=null?new Md(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return xd(this.writes_,e,r)}}getChildAfterChild(e,t,r){const i=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:Vr(this.viewCache_),s=UP(this.writes_,i,t,1,r,e);return s.length===0?null:s[0]}}function $P(n,e){H(e.eventCache.getNode().isIndexed(n.filter.getIndex()),"Event snap not indexed"),H(e.serverCache.getNode().isIndexed(n.filter.getIndex()),"Server snap not indexed")}function qP(n,e,t,r,i){const s=new FP;let o,a;if(t.type===rn.OVERWRITE){const u=t;u.source.fromUser?o=uu(n,e,u.path,u.snap,r,i,s):(H(u.source.fromServer,"Unknown source."),a=u.source.tagged||e.serverCache.isFiltered()&&!me(u.path),o=Fa(n,e,u.path,u.snap,r,i,a,s))}else if(t.type===rn.MERGE){const u=t;u.source.fromUser?o=zP(n,e,u.path,u.children,r,i,s):(H(u.source.fromServer,"Unknown source."),a=u.source.tagged||e.serverCache.isFiltered(),o=du(n,e,u.path,u.children,r,i,a,s))}else if(t.type===rn.ACK_USER_WRITE){const u=t;u.revert?o=HP(n,e,u.path,r,i,s):o=GP(n,e,u.path,u.affectedTree,r,i,s)}else if(t.type===rn.LISTEN_COMPLETE)o=WP(n,e,t.path,r,s);else throw Ri("Unknown operation type: "+t.type);const c=s.getChanges();return jP(e,o,c),{viewCache:o,changes:c}}function jP(n,e,t){const r=e.eventCache;if(r.isFullyInitialized()){const i=r.getNode().isLeafNode()||r.getNode().isEmpty(),s=ou(n);(t.length>0||!n.eventCache.isFullyInitialized()||i&&!r.getNode().equals(s)||!r.getNode().getPriority().equals(s.getPriority()))&&t.push(hP(ou(e)))}}function Xw(n,e,t,r,i,s){const o=e.eventCache;if(Ua(r,t)!=null)return e;{let a,c;if(me(t))if(H(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const u=Vr(e),d=u instanceof Te?u:Te.EMPTY_NODE,h=Kw(r,d);a=n.filter.updateFullNode(e.eventCache.getNode(),h,s)}else{const u=lu(r,Vr(e));a=n.filter.updateFullNode(e.eventCache.getNode(),u,s)}else{const u=_e(t);if(u===".priority"){H(ur(t)===1,"Can't have a priority with additional path components");const d=o.getNode();c=e.serverCache.getNode();const h=Tp(r,t,d,c);h!=null?a=n.filter.updatePriority(d,h):a=o.getNode()}else{const d=Pe(t);let h;if(o.isCompleteForChild(u)){c=e.serverCache.getNode();const m=Tp(r,t,o.getNode(),c);m!=null?h=o.getNode().getImmediateChild(u).updateChild(d,m):h=o.getNode().getImmediateChild(u)}else h=xd(r,u,e.serverCache);h!=null?a=n.filter.updateChild(o.getNode(),u,h,d,i,s):a=o.getNode()}}return Is(e,a,o.isFullyInitialized()||me(t),n.filter.filtersNodes())}}function Fa(n,e,t,r,i,s,o,a){const c=e.serverCache;let u;const d=o?n.filter:n.filter.getIndexedFilter();if(me(t))u=d.updateFullNode(c.getNode(),r,null);else if(d.filtersNodes()&&!c.isFiltered()){const _=c.getNode().updateChild(t,r);u=d.updateFullNode(c.getNode(),_,null)}else{const _=_e(t);if(!c.isCompleteForPath(t)&&ur(t)>1)return e;const w=Pe(t),E=c.getNode().getImmediateChild(_).updateChild(w,r);_===".priority"?u=d.updatePriority(c.getNode(),E):u=d.updateChild(c.getNode(),_,E,w,Jw,null)}const h=jw(e,u,c.isFullyInitialized()||me(t),d.filtersNodes()),m=new Ud(i,h,s);return Xw(n,h,t,i,m,a)}function uu(n,e,t,r,i,s,o){const a=e.eventCache;let c,u;const d=new Ud(i,e,s);if(me(t))u=n.filter.updateFullNode(e.eventCache.getNode(),r,o),c=Is(e,u,!0,n.filter.filtersNodes());else{const h=_e(t);if(h===".priority")u=n.filter.updatePriority(e.eventCache.getNode(),r),c=Is(e,u,a.isFullyInitialized(),a.isFiltered());else{const m=Pe(t),_=a.getNode().getImmediateChild(h);let w;if(me(m))w=r;else{const v=d.getCompleteChild(h);v!=null?kw(m)===".priority"&&v.getChild(Pw(m)).isEmpty()?w=v:w=v.updateChild(m,r):w=Te.EMPTY_NODE}if(_.equals(w))c=e;else{const v=n.filter.updateChild(a.getNode(),h,w,m,d,o);c=Is(e,v,a.isFullyInitialized(),n.filter.filtersNodes())}}}return c}function Ip(n,e){return n.eventCache.isCompleteForChild(e)}function zP(n,e,t,r,i,s,o){let a=e;return r.foreach((c,u)=>{const d=Xe(t,c);Ip(e,_e(d))&&(a=uu(n,a,d,u,i,s,o))}),r.foreach((c,u)=>{const d=Xe(t,c);Ip(e,_e(d))||(a=uu(n,a,d,u,i,s,o))}),a}function Ap(n,e,t){return t.foreach((r,i)=>{e=e.updateChild(r,i)}),e}function du(n,e,t,r,i,s,o,a){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let c=e,u;me(t)?u=r:u=new Ce(null).setTree(t,r);const d=e.serverCache.getNode();return u.children.inorderTraversal((h,m)=>{if(d.hasChild(h)){const _=e.serverCache.getNode().getImmediateChild(h),w=Ap(n,_,m);c=Fa(n,c,new De(h),w,i,s,o,a)}}),u.children.inorderTraversal((h,m)=>{const _=!e.serverCache.isCompleteForChild(h)&&m.value===null;if(!d.hasChild(h)&&!_){const w=e.serverCache.getNode().getImmediateChild(h),v=Ap(n,w,m);c=Fa(n,c,new De(h),v,i,s,o,a)}}),c}function GP(n,e,t,r,i,s,o){if(Ua(i,t)!=null)return e;const a=e.serverCache.isFiltered(),c=e.serverCache;if(r.value!=null){if(me(t)&&c.isFullyInitialized()||c.isCompleteForPath(t))return Fa(n,e,t,c.getNode().getChild(t),i,s,a,o);if(me(t)){let u=new Ce(null);return c.getNode().forEachChild(ui,(d,h)=>{u=u.set(new De(d),h)}),du(n,e,t,u,i,s,a,o)}else return e}else{let u=new Ce(null);return r.foreach((d,h)=>{const m=Xe(t,d);c.isCompleteForPath(m)&&(u=u.set(d,c.getNode().getChild(m)))}),du(n,e,t,u,i,s,a,o)}}function WP(n,e,t,r,i){const s=e.serverCache,o=jw(e,s.getNode(),s.isFullyInitialized()||me(t),s.isFiltered());return Xw(n,o,t,r,Jw,i)}function HP(n,e,t,r,i,s){let o;if(Ua(r,t)!=null)return e;{const a=new Ud(r,e,i),c=e.eventCache.getNode();let u;if(me(t)||_e(t)===".priority"){let d;if(e.serverCache.isFullyInitialized())d=lu(r,Vr(e));else{const h=e.serverCache.getNode();H(h instanceof Te,"serverChildren would be complete if leaf node"),d=Kw(r,h)}d=d,u=n.filter.updateFullNode(c,d,s)}else{const d=_e(t);let h=xd(r,d,e.serverCache);h==null&&e.serverCache.isCompleteForChild(d)&&(h=c.getImmediateChild(d)),h!=null?u=n.filter.updateChild(c,d,h,Pe(t),a,s):e.eventCache.getNode().hasChild(d)?u=n.filter.updateChild(c,d,Te.EMPTY_NODE,Pe(t),a,s):u=c,u.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=lu(r,Vr(e)),o.isLeafNode()&&(u=n.filter.updateFullNode(u,o,s)))}return o=e.serverCache.isFullyInitialized()||Ua(r,Re())!=null,Is(e,u,o,n.filter.filtersNodes())}}function KP(n,e){const t=Vr(n.viewCache_);return t&&(n.query._queryParams.loadsAllData()||!me(e)&&!t.getImmediateChild(_e(e)).isEmpty())?t.getChild(e):null}function Rp(n,e,t,r){e.type===rn.MERGE&&e.source.queryId!==null&&(H(Vr(n.viewCache_),"We should always have a full cache before handling merges"),H(ou(n.viewCache_),"Missing event cache, even though we have a server cache"));const i=n.viewCache_,s=qP(n.processor_,i,e,t,r);return $P(n.processor_,s.viewCache),H(s.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),n.viewCache_=s.viewCache,QP(n,s.changes,s.viewCache.eventCache.getNode())}function QP(n,e,t,r){const i=n.eventRegistrations_;return TP(n.eventGenerator_,e,t,i)}/**
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
 */let bp;function YP(n){H(!bp,"__referenceConstructor has already been defined"),bp=n}function Fd(n,e,t,r){const i=e.source.queryId;if(i!==null){const s=n.views.get(i);return H(s!=null,"SyncTree gave us an op for an invalid query."),Rp(s,e,t,r)}else{let s=[];for(const o of n.views.values())s=s.concat(Rp(o,e,t,r));return s}}function Bd(n,e){let t=null;for(const r of n.views.values())t=t||KP(r,e);return t}/**
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
 */let Sp;function JP(n){H(!Sp,"__referenceConstructor has already been defined"),Sp=n}class kp{constructor(e){this.listenProvider_=e,this.syncPointTree_=new Ce(null),this.pendingWriteTree_=xP(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function XP(n,e,t,r,i){return bP(n.pendingWriteTree_,e,t,r,i),i?Rc(n,new Lr(Fw(),e,t)):[]}function ri(n,e,t=!1){const r=SP(n.pendingWriteTree_,e);if(kP(n.pendingWriteTree_,e)){let s=new Ce(null);return r.snap!=null?s=s.set(Re(),!0):Ft(r.children,o=>{s=s.set(new De(o),!0)}),Rc(n,new xa(r.path,s,t))}else return[]}function Ac(n,e,t){return Rc(n,new Lr(Bw(),e,t))}function ZP(n,e,t){const r=Ce.fromObject(t);return Rc(n,new Bs(Bw(),e,r))}function eN(n,e,t,r){const i=nv(n,r);if(i!=null){const s=rv(i),o=s.path,a=s.queryId,c=xt(o,e),u=new Lr($w(a),c,t);return iv(n,o,u)}else return[]}function tN(n,e,t,r){const i=nv(n,r);if(i){const s=rv(i),o=s.path,a=s.queryId,c=xt(o,e),u=Ce.fromObject(t),d=new Bs($w(a),c,u);return iv(n,o,d)}else return[]}function Zw(n,e,t){const i=n.pendingWriteTree_,s=n.syncPointTree_.findOnPath(e,(o,a)=>{const c=xt(o,e),u=Bd(a,c);if(u)return u});return Hw(i,e,s,t,!0)}function Rc(n,e){return ev(e,n.syncPointTree_,null,Gw(n.pendingWriteTree_,Re()))}function ev(n,e,t,r){if(me(n.path))return tv(n,e,t,r);{const i=e.get(Re());t==null&&i!=null&&(t=Bd(i,Re()));let s=[];const o=_e(n.path),a=n.operationForChild(o),c=e.children.get(o);if(c&&a){const u=t?t.getImmediateChild(o):null,d=Qw(r,o);s=s.concat(ev(a,c,u,d))}return i&&(s=s.concat(Fd(i,n,r,t))),s}}function tv(n,e,t,r){const i=e.get(Re());t==null&&i!=null&&(t=Bd(i,Re()));let s=[];return e.children.inorderTraversal((o,a)=>{const c=t?t.getImmediateChild(o):null,u=Qw(r,o),d=n.operationForChild(o);d&&(s=s.concat(tv(d,a,c,u)))}),i&&(s=s.concat(Fd(i,n,r,t))),s}function nv(n,e){return n.tagToQueryMap.get(e)}function rv(n){const e=n.indexOf("$");return H(e!==-1&&e<n.length-1,"Bad queryKey."),{queryId:n.substr(e+1),path:new De(n.substr(0,e))}}function iv(n,e,t){const r=n.syncPointTree_.get(e);H(r,"Missing sync point for query tag that we're tracking");const i=Gw(n.pendingWriteTree_,e);return Fd(r,t,i,null)}/**
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
 */class $d{constructor(e){this.node_=e}getImmediateChild(e){const t=this.node_.getImmediateChild(e);return new $d(t)}node(){return this.node_}}class qd{constructor(e,t){this.syncTree_=e,this.path_=t}getImmediateChild(e){const t=Xe(this.path_,e);return new qd(this.syncTree_,t)}node(){return Zw(this.syncTree_,this.path_)}}const nN=function(n){return n=n||{},n.timestamp=n.timestamp||new Date().getTime(),n},Cp=function(n,e,t){if(!n||typeof n!="object")return n;if(H(".sv"in n,"Unexpected leaf node or priority contents"),typeof n[".sv"]=="string")return rN(n[".sv"],e,t);if(typeof n[".sv"]=="object")return iN(n[".sv"],e);H(!1,"Unexpected server value: "+JSON.stringify(n,null,2))},rN=function(n,e,t){switch(n){case"timestamp":return t.timestamp;default:H(!1,"Unexpected server value: "+n)}},iN=function(n,e,t){n.hasOwnProperty("increment")||H(!1,"Unexpected server value: "+JSON.stringify(n,null,2));const r=n.increment;typeof r!="number"&&H(!1,"Unexpected increment value: "+r);const i=e.node();if(H(i!==null&&typeof i!="undefined","Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return r;const o=i.getValue();return typeof o!="number"?r:o+r},sN=function(n,e,t,r){return jd(e,new qd(t,n),r)},oN=function(n,e,t){return jd(n,new $d(e),t)};function jd(n,e,t){const r=n.getPriority().val(),i=Cp(r,e.getImmediateChild(".priority"),t);let s;if(n.isLeafNode()){const o=n,a=Cp(o.getValue(),e,t);return a!==o.getValue()||i!==o.getPriority().val()?new Ke(a,ht(i)):n}else{const o=n;return s=o,i!==o.getPriority().val()&&(s=s.updatePriority(new Ke(i))),o.forEachChild(ft,(a,c)=>{const u=jd(c,e.getImmediateChild(a),t);u!==c&&(s=s.updateImmediateChild(a,u))}),s}}/**
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
 */class zd{constructor(e="",t=null,r={children:{},childCount:0}){this.name=e,this.parent=t,this.node=r}}function Gd(n,e){let t=e instanceof De?e:new De(e),r=n,i=_e(t);for(;i!==null;){const s=di(r.node.children,i)||{children:{},childCount:0};r=new zd(i,r,s),t=Pe(t),i=_e(t)}return r}function Vi(n){return n.node.value}function sv(n,e){n.node.value=e,hu(n)}function ov(n){return n.node.childCount>0}function aN(n){return Vi(n)===void 0&&!ov(n)}function bc(n,e){Ft(n.node.children,(t,r)=>{e(new zd(t,n,r))})}function av(n,e,t,r){t&&!r&&e(n),bc(n,i=>{av(i,e,!0,r)}),t&&r&&e(n)}function cN(n,e,t){let r=n.parent;for(;r!==null;){if(e(r))return!0;r=r.parent}return!1}function mo(n){return new De(n.parent===null?n.name:mo(n.parent)+"/"+n.name)}function hu(n){n.parent!==null&&lN(n.parent,n.name,n)}function lN(n,e,t){const r=aN(t),i=xn(n.node.children,e);r&&i?(delete n.node.children[e],n.node.childCount--,hu(n)):!r&&!i&&(n.node.children[e]=t.node,n.node.childCount++,hu(n))}/**
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
 */const uN=/[\[\].#$\/\u0000-\u001F\u007F]/,dN=/[\[\].#$\u0000-\u001F\u007F]/,vl=10*1024*1024,cv=function(n){return typeof n=="string"&&n.length!==0&&!uN.test(n)},hN=function(n){return typeof n=="string"&&n.length!==0&&!dN.test(n)},fN=function(n){return n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),hN(n)},lv=function(n,e,t){const r=t instanceof De?new WC(t,n):t;if(e===void 0)throw new Error(n+"contains undefined "+Er(r));if(typeof e=="function")throw new Error(n+"contains a function "+Er(r)+" with contents = "+e.toString());if(aw(e))throw new Error(n+"contains "+e.toString()+" "+Er(r));if(typeof e=="string"&&e.length>vl/3&&Ka(e)>vl)throw new Error(n+"contains a string greater than "+vl+" utf8 bytes "+Er(r)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let i=!1,s=!1;if(Ft(e,(o,a)=>{if(o===".value")i=!0;else if(o!==".priority"&&o!==".sv"&&(s=!0,!cv(o)))throw new Error(n+" contains an invalid key ("+o+") "+Er(r)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);HC(r,o),lv(n,a,r),KC(r)}),i&&s)throw new Error(n+' contains ".value" child '+Er(r)+" in addition to actual children.")}},mN=function(n,e){const t=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!cv(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||t.length!==0&&!fN(t))throw new Error(_T(n,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
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
 */class pN{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function gN(n,e){let t=null;for(let r=0;r<e.length;r++){const i=e[r],s=i.getPath();t!==null&&!Nw(s,t.path)&&(n.eventLists_.push(t),t=null),t===null&&(t={events:[],path:s}),t.events.push(i)}t&&n.eventLists_.push(t)}function Gr(n,e,t){gN(n,t),_N(n,r=>Gt(r,e)||Gt(e,r))}function _N(n,e){n.recursionDepth_++;let t=!0;for(let r=0;r<n.eventLists_.length;r++){const i=n.eventLists_[r];if(i){const s=i.path;e(s)?(yN(n.eventLists_[r]),n.eventLists_[r]=null):t=!1}}t&&(n.eventLists_=[]),n.recursionDepth_--}function yN(n){for(let e=0;e<n.events.length;e++){const t=n.events[e];if(t!==null){n.events[e]=null;const r=t.getEventRunner();Es&&dt("event: "+t.toString()),ho(r)}}}/**
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
 */const wN="repo_interrupt",vN=25;class EN{constructor(e,t,r,i){this.repoInfo_=e,this.forceRestClient_=t,this.authTokenProvider_=r,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new pN,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=Ma(),this.transactionQueueTree_=new zd,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function TN(n,e,t){if(n.stats_=Nd(n.repoInfo_),n.forceRestClient_||_C())n.server_=new Va(n.repoInfo_,(r,i,s,o)=>{Pp(n,r,i,s,o)},n.authTokenProvider_,n.appCheckProvider_),setTimeout(()=>Np(n,!0),0);else{if(typeof t!="undefined"&&t!==null){if(typeof t!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{tt(t)}catch(r){throw new Error("Invalid authOverride provided: "+r)}}n.persistentConnection_=new Sn(n.repoInfo_,e,(r,i,s,o)=>{Pp(n,r,i,s,o)},r=>{Np(n,r)},r=>{AN(n,r)},n.authTokenProvider_,n.appCheckProvider_,t),n.server_=n.persistentConnection_}n.authTokenProvider_.addTokenChangeListener(r=>{n.server_.refreshAuthToken(r)}),n.appCheckProvider_.addTokenChangeListener(r=>{n.server_.refreshAppCheckToken(r.token)}),n.statsReporter_=TC(n.repoInfo_,()=>new EP(n.stats_,n.server_)),n.infoData_=new gP,n.infoSyncTree_=new kp({startListening:(r,i,s,o)=>{let a=[];const c=n.infoData_.getNode(r._path);return c.isEmpty()||(a=Ac(n.infoSyncTree_,r._path,c),setTimeout(()=>{o("ok")},0)),a},stopListening:()=>{}}),Wd(n,"connected",!1),n.serverSyncTree_=new kp({startListening:(r,i,s,o)=>(n.server_.listen(r,s,i,(a,c)=>{const u=o(a,c);Gr(n.eventQueue_,r._path,u)}),[]),stopListening:(r,i)=>{n.server_.unlisten(r,i)}})}function IN(n){const t=n.infoData_.getNode(new De(".info/serverTimeOffset")).val()||0;return new Date().getTime()+t}function uv(n){return nN({timestamp:IN(n)})}function Pp(n,e,t,r,i){n.dataUpdateCount++;const s=new De(e);t=n.interceptServerDataCallback_?n.interceptServerDataCallback_(e,t):t;let o=[];if(i)if(r){const c=ca(t,u=>ht(u));o=tN(n.serverSyncTree_,s,c,i)}else{const c=ht(t);o=eN(n.serverSyncTree_,s,c,i)}else if(r){const c=ca(t,u=>ht(u));o=ZP(n.serverSyncTree_,s,c)}else{const c=ht(t);o=Ac(n.serverSyncTree_,s,c)}let a=s;o.length>0&&(a=Kd(n,s)),Gr(n.eventQueue_,a,o)}function Np(n,e){Wd(n,"connected",e),e===!1&&bN(n)}function AN(n,e){Ft(e,(t,r)=>{Wd(n,t,r)})}function Wd(n,e,t){const r=new De("/.info/"+e),i=ht(t);n.infoData_.updateSnapshot(r,i);const s=Ac(n.infoSyncTree_,r,i);Gr(n.eventQueue_,r,s)}function RN(n){return n.nextWriteId_++}function bN(n){dv(n,"onDisconnectEvents");const e=uv(n),t=Ma();su(n.onDisconnect_,Re(),(i,s)=>{const o=sN(i,s,n.serverSyncTree_,e);Uw(t,i,o)});let r=[];su(t,Re(),(i,s)=>{r=r.concat(Ac(n.serverSyncTree_,i,s));const o=PN(n,i);Kd(n,o)}),n.onDisconnect_=Ma(),Gr(n.eventQueue_,Re(),r)}function SN(n){n.persistentConnection_&&n.persistentConnection_.interrupt(wN)}function dv(n,...e){let t="";n.persistentConnection_&&(t=n.persistentConnection_.id+":"),dt(t,...e)}function hv(n,e,t){return Zw(n.serverSyncTree_,e,t)||Te.EMPTY_NODE}function Hd(n,e=n.transactionQueueTree_){if(e||Sc(n,e),Vi(e)){const t=mv(n,e);H(t.length>0,"Sending zero length transaction queue"),t.every(i=>i.status===0)&&kN(n,mo(e),t)}else ov(e)&&bc(e,t=>{Hd(n,t)})}function kN(n,e,t){const r=t.map(u=>u.currentWriteId),i=hv(n,e,r);let s=i;const o=i.hash();for(let u=0;u<t.length;u++){const d=t[u];H(d.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),d.status=1,d.retryCount++;const h=xt(e,d.path);s=s.updateChild(h,d.currentOutputSnapshotRaw)}const a=s.val(!0),c=e;n.server_.put(c.toString(),a,u=>{dv(n,"transaction put response",{path:c.toString(),status:u});let d=[];if(u==="ok"){const h=[];for(let m=0;m<t.length;m++)t[m].status=2,d=d.concat(ri(n.serverSyncTree_,t[m].currentWriteId)),t[m].onComplete&&h.push(()=>t[m].onComplete(null,!0,t[m].currentOutputSnapshotResolved)),t[m].unwatcher();Sc(n,Gd(n.transactionQueueTree_,e)),Hd(n,n.transactionQueueTree_),Gr(n.eventQueue_,e,d);for(let m=0;m<h.length;m++)ho(h[m])}else{if(u==="datastale")for(let h=0;h<t.length;h++)t[h].status===3?t[h].status=4:t[h].status=0;else{Lt("transaction at "+c.toString()+" failed: "+u);for(let h=0;h<t.length;h++)t[h].status=4,t[h].abortReason=u}Kd(n,e)}},o)}function Kd(n,e){const t=fv(n,e),r=mo(t),i=mv(n,t);return CN(n,i,r),r}function CN(n,e,t){if(e.length===0)return;const r=[];let i=[];const o=e.filter(a=>a.status===0).map(a=>a.currentWriteId);for(let a=0;a<e.length;a++){const c=e[a],u=xt(t,c.path);let d=!1,h;if(H(u!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),c.status===4)d=!0,h=c.abortReason,i=i.concat(ri(n.serverSyncTree_,c.currentWriteId,!0));else if(c.status===0)if(c.retryCount>=vN)d=!0,h="maxretry",i=i.concat(ri(n.serverSyncTree_,c.currentWriteId,!0));else{const m=hv(n,c.path,o);c.currentInputSnapshot=m;const _=e[a].update(m.val());if(_!==void 0){lv("transaction failed: Data returned ",_,c.path);let w=ht(_);typeof _=="object"&&_!=null&&xn(_,".priority")||(w=w.updatePriority(m.getPriority()));const E=c.currentWriteId,P=uv(n),O=oN(w,m,P);c.currentOutputSnapshotRaw=w,c.currentOutputSnapshotResolved=O,c.currentWriteId=RN(n),o.splice(o.indexOf(E),1),i=i.concat(XP(n.serverSyncTree_,c.path,O,c.currentWriteId,c.applyLocally)),i=i.concat(ri(n.serverSyncTree_,E,!0))}else d=!0,h="nodata",i=i.concat(ri(n.serverSyncTree_,c.currentWriteId,!0))}Gr(n.eventQueue_,t,i),i=[],d&&(e[a].status=2,function(m){setTimeout(m,Math.floor(0))}(e[a].unwatcher),e[a].onComplete&&(h==="nodata"?r.push(()=>e[a].onComplete(null,!1,e[a].currentInputSnapshot)):r.push(()=>e[a].onComplete(new Error(h),!1,null))))}Sc(n,n.transactionQueueTree_);for(let a=0;a<r.length;a++)ho(r[a]);Hd(n,n.transactionQueueTree_)}function fv(n,e){let t,r=n.transactionQueueTree_;for(t=_e(e);t!==null&&Vi(r)===void 0;)r=Gd(r,t),e=Pe(e),t=_e(e);return r}function mv(n,e){const t=[];return pv(n,e,t),t.sort((r,i)=>r.order-i.order),t}function pv(n,e,t){const r=Vi(e);if(r)for(let i=0;i<r.length;i++)t.push(r[i]);bc(e,i=>{pv(n,i,t)})}function Sc(n,e){const t=Vi(e);if(t){let r=0;for(let i=0;i<t.length;i++)t[i].status!==2&&(t[r]=t[i],r++);t.length=r,sv(e,t.length>0?t:void 0)}bc(e,r=>{Sc(n,r)})}function PN(n,e){const t=mo(fv(n,e)),r=Gd(n.transactionQueueTree_,e);return cN(r,i=>{El(n,i)}),El(n,r),av(r,i=>{El(n,i)}),t}function El(n,e){const t=Vi(e);if(t){const r=[];let i=[],s=-1;for(let o=0;o<t.length;o++)t[o].status===3||(t[o].status===1?(H(s===o-1,"All SENT items should be at beginning of queue."),s=o,t[o].status=3,t[o].abortReason="set"):(H(t[o].status===0,"Unexpected transaction status in abort"),t[o].unwatcher(),i=i.concat(ri(n.serverSyncTree_,t[o].currentWriteId,!0)),t[o].onComplete&&r.push(t[o].onComplete.bind(null,new Error("set"),!1,null))));s===-1?sv(e,void 0):t.length=s+1,Gr(n.eventQueue_,mo(e),i);for(let o=0;o<r.length;o++)ho(r[o])}}/**
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
 */function NN(n){let e="";const t=n.split("/");for(let r=0;r<t.length;r++)if(t[r].length>0){let i=t[r];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch(s){}e+="/"+i}return e}function DN(n){const e={};n.charAt(0)==="?"&&(n=n.substring(1));for(const t of n.split("&")){if(t.length===0)continue;const r=t.split("=");r.length===2?e[decodeURIComponent(r[0])]=decodeURIComponent(r[1]):Lt(`Invalid query segment '${t}' in query '${n}'`)}return e}const Dp=function(n,e){const t=ON(n),r=t.namespace;t.domain==="firebase.com"&&Vn(t.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!r||r==="undefined")&&t.domain!=="localhost"&&Vn("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),t.secure||lC();const i=t.scheme==="ws"||t.scheme==="wss";return{repoInfo:new ww(t.host,t.secure,r,i,e,"",r!==t.subdomain),path:new De(t.pathString)}},ON=function(n){let e="",t="",r="",i="",s="",o=!0,a="https",c=443;if(typeof n=="string"){let u=n.indexOf("//");u>=0&&(a=n.substring(0,u-1),n=n.substring(u+2));let d=n.indexOf("/");d===-1&&(d=n.length);let h=n.indexOf("?");h===-1&&(h=n.length),e=n.substring(0,Math.min(d,h)),d<h&&(i=NN(n.substring(d,h)));const m=DN(n.substring(Math.min(n.length,h)));u=e.indexOf(":"),u>=0?(o=a==="https"||a==="wss",c=parseInt(e.substring(u+1),10)):u=e.length;const _=e.slice(0,u);if(_.toLowerCase()==="localhost")t="localhost";else if(_.split(".").length<=2)t=_;else{const w=e.indexOf(".");r=e.substring(0,w).toLowerCase(),t=e.substring(w+1),s=r}"ns"in m&&(s=m.ns)}return{host:e,port:c,domain:t,subdomain:r,secure:o,scheme:a,pathString:i,namespace:s}};/**
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
 */class Qd{constructor(e,t,r,i){this._repo=e,this._path=t,this._queryParams=r,this._orderByCalled=i}get key(){return me(this._path)?null:kw(this._path)}get ref(){return new Mi(this._repo,this._path)}get _queryIdentifier(){const e=_p(this._queryParams),t=Cd(e);return t==="{}"?"default":t}get _queryObject(){return _p(this._queryParams)}isEqual(e){if(e=pe(e),!(e instanceof Qd))return!1;const t=this._repo===e._repo,r=Nw(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return t&&r&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+GC(this._path)}}class Mi extends Qd{constructor(e,t){super(e,t,new Vd,!1)}get parent(){const e=Pw(this._path);return e===null?null:new Mi(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}YP(Mi);JP(Mi);/**
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
 */const LN="FIREBASE_DATABASE_EMULATOR_HOST",fu={};let VN=!1;function MN(n,e,t,r){const i=e.lastIndexOf(":"),s=e.substring(0,i),o=hn(s);n.repoInfo_=new ww(e,o,n.repoInfo_.namespace,n.repoInfo_.webSocketOnly,n.repoInfo_.nodeAdmin,n.repoInfo_.persistenceKey,n.repoInfo_.includeNamespaceInQueryParams,!0,t),r&&(n.authTokenProvider_=r)}function xN(n,e,t,r,i){let s=r||n.options.databaseURL;s===void 0&&(n.options.projectId||Vn("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),dt("Using default host for project ",n.options.projectId),s=`${n.options.projectId}-default-rtdb.firebaseio.com`);let o=Dp(s,i),a=o.repoInfo,c;typeof process!="undefined"&&Xm&&(c=Xm[LN]),c&&(s=`http://${c}?ns=${a.namespace}`,o=Dp(s,i),a=o.repoInfo);const u=new wC(n.name,n.options,e);mN("Invalid Firebase Database URL",o),me(o.path)||Vn("Database URL must point to the root of a Firebase Database (not including a child path).");const d=FN(a,n,u,new yC(n,t));return new BN(d,n)}function UN(n,e){const t=fu[e];(!t||t[n.key]!==n)&&Vn(`Database ${e}(${n.repoInfo_}) has already been deleted.`),SN(n),delete t[n.key]}function FN(n,e,t,r){let i=fu[e.name];i||(i={},fu[e.name]=i);let s=i[n.toURLString()];return s&&Vn("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),s=new EN(n,VN,t,r),i[n.toURLString()]=s,s}class BN{constructor(e,t){this._repoInternal=e,this.app=t,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(TN(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new Mi(this._repo,Re())),this._rootInternal}_delete(){return this._rootInternal!==null&&(UN(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&Vn("Cannot call "+e+" on a deleted database.")}}function Op(n=Ks(),e){const t=Un(n,"database").getImmediate({identifier:e});if(!t._instanceStarted){const r=Iu("database");r&&$N(t,...r)}return t}function $N(n,e,t,r={}){n=pe(n),n._checkNotDeleted("useEmulator");const i=`${e}:${t}`,s=n._repoInternal;if(n._instanceStarted){if(i===n._repoInternal.repoInfo_.host&&Cn(r,s.repoInfo_.emulatorOptions))return;Vn("connectDatabaseEmulator() cannot initialize or alter the emulator configuration after the database instance has started.")}let o;if(s.repoInfo_.nodeAdmin)r.mockUserToken&&Vn('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),o=new sa(sa.OWNER);else if(r.mockUserToken){const a=typeof r.mockUserToken=="string"?r.mockUserToken:Ru(r.mockUserToken,n.app.options.projectId);o=new sa(a)}hn(e)&&(Wa(e),Ha("Database",!0)),MN(s,i,r,o)}/**
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
 */function qN(n){rC(hr),Ut(new Vt("database",(e,{instanceIdentifier:t})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),s=e.getProvider("app-check-internal");return xN(r,i,s,t)},"PUBLIC").setMultipleInstances(!0)),mt(Zm,ep,n),mt(Zm,ep,"esm2017")}Sn.prototype.simpleListen=function(n,e){this.sendRequest("q",{p:n},e)};Sn.prototype.echo=function(n,e){this.sendRequest("echo",{d:n},e)};qN();/**
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
 */const gv="firebasestorage.googleapis.com",_v="storageBucket",jN=2*60*1e3,zN=10*60*1e3;/**
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
 */class Fe extends Bt{constructor(e,t,r=0){super(Tl(e),`Firebase Storage: ${t} (${Tl(e)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,Fe.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return Tl(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var Ue;(function(n){n.UNKNOWN="unknown",n.OBJECT_NOT_FOUND="object-not-found",n.BUCKET_NOT_FOUND="bucket-not-found",n.PROJECT_NOT_FOUND="project-not-found",n.QUOTA_EXCEEDED="quota-exceeded",n.UNAUTHENTICATED="unauthenticated",n.UNAUTHORIZED="unauthorized",n.UNAUTHORIZED_APP="unauthorized-app",n.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",n.INVALID_CHECKSUM="invalid-checksum",n.CANCELED="canceled",n.INVALID_EVENT_NAME="invalid-event-name",n.INVALID_URL="invalid-url",n.INVALID_DEFAULT_BUCKET="invalid-default-bucket",n.NO_DEFAULT_BUCKET="no-default-bucket",n.CANNOT_SLICE_BLOB="cannot-slice-blob",n.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",n.NO_DOWNLOAD_URL="no-download-url",n.INVALID_ARGUMENT="invalid-argument",n.INVALID_ARGUMENT_COUNT="invalid-argument-count",n.APP_DELETED="app-deleted",n.INVALID_ROOT_OPERATION="invalid-root-operation",n.INVALID_FORMAT="invalid-format",n.INTERNAL_ERROR="internal-error",n.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(Ue||(Ue={}));function Tl(n){return"storage/"+n}function Yd(){const n="An unknown error occurred, please check the error payload for server response.";return new Fe(Ue.UNKNOWN,n)}function GN(n){return new Fe(Ue.OBJECT_NOT_FOUND,"Object '"+n+"' does not exist.")}function WN(n){return new Fe(Ue.QUOTA_EXCEEDED,"Quota for bucket '"+n+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function HN(){const n="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new Fe(Ue.UNAUTHENTICATED,n)}function KN(){return new Fe(Ue.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function QN(n){return new Fe(Ue.UNAUTHORIZED,"User does not have permission to access '"+n+"'.")}function YN(){return new Fe(Ue.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function JN(){return new Fe(Ue.CANCELED,"User canceled the upload/download.")}function XN(n){return new Fe(Ue.INVALID_URL,"Invalid URL '"+n+"'.")}function ZN(n){return new Fe(Ue.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+n+"'.")}function eD(){return new Fe(Ue.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+_v+"' property when initializing the app?")}function tD(){return new Fe(Ue.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function nD(){return new Fe(Ue.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function rD(n){return new Fe(Ue.UNSUPPORTED_ENVIRONMENT,`${n} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function mu(n){return new Fe(Ue.INVALID_ARGUMENT,n)}function yv(){return new Fe(Ue.APP_DELETED,"The Firebase app was deleted.")}function iD(n){return new Fe(Ue.INVALID_ROOT_OPERATION,"The operation '"+n+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function Rs(n,e){return new Fe(Ue.INVALID_FORMAT,"String does not match format '"+n+"': "+e)}function is(n){throw new Fe(Ue.INTERNAL_ERROR,"Internal error: "+n)}/**
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
 */class Dt{constructor(e,t){this.bucket=e,this.path_=t}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,t){let r;try{r=Dt.makeFromUrl(e,t)}catch(i){return new Dt(e,"")}if(r.path==="")return r;throw ZN(e)}static makeFromUrl(e,t){let r=null;const i="([A-Za-z0-9.\\-_]+)";function s(x){x.path.charAt(x.path.length-1)==="/"&&(x.path_=x.path_.slice(0,-1))}const o="(/(.*))?$",a=new RegExp("^gs://"+i+o,"i"),c={bucket:1,path:3};function u(x){x.path_=decodeURIComponent(x.path)}const d="v[A-Za-z0-9_]+",h=t.replace(/[.]/g,"\\."),m="(/([^?#]*).*)?$",_=new RegExp(`^https?://${h}/${d}/b/${i}/o${m}`,"i"),w={bucket:1,path:3},v=t===gv?"(?:storage.googleapis.com|storage.cloud.google.com)":t,E="([^?#]*)",P=new RegExp(`^https?://${v}/${i}/${E}`,"i"),M=[{regex:a,indices:c,postModify:s},{regex:_,indices:w,postModify:u},{regex:P,indices:{bucket:1,path:2},postModify:u}];for(let x=0;x<M.length;x++){const Z=M[x],K=Z.regex.exec(e);if(K){const R=K[Z.indices.bucket];let T=K[Z.indices.path];T||(T=""),r=new Dt(R,T),Z.postModify(r);break}}if(r==null)throw XN(e);return r}}class sD{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
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
 */function oD(n,e,t){let r=1,i=null,s=null,o=!1,a=0;function c(){return a===2}let u=!1;function d(...E){u||(u=!0,e.apply(null,E))}function h(E){i=setTimeout(()=>{i=null,n(_,c())},E)}function m(){s&&clearTimeout(s)}function _(E,...P){if(u){m();return}if(E){m(),d.call(null,E,...P);return}if(c()||o){m(),d.call(null,E,...P);return}r<64&&(r*=2);let M;a===1?(a=2,M=0):M=(r+Math.random())*1e3,h(M)}let w=!1;function v(E){w||(w=!0,m(),!u&&(i!==null?(E||(a=2),clearTimeout(i),h(0)):E||(a=1)))}return h(0),s=setTimeout(()=>{o=!0,v(!0)},t),v}function aD(n){n(!1)}/**
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
 */function cD(n){return n!==void 0}function lD(n){return typeof n=="object"&&!Array.isArray(n)}function Jd(n){return typeof n=="string"||n instanceof String}function Lp(n){return Xd()&&n instanceof Blob}function Xd(){return typeof Blob!="undefined"}function Vp(n,e,t,r){if(r<e)throw mu(`Invalid value for '${n}'. Expected ${e} or greater.`);if(r>t)throw mu(`Invalid value for '${n}'. Expected ${t} or less.`)}/**
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
 */function kc(n,e,t){let r=e;return t==null&&(r=`https://${e}`),`${t}://${r}/v0${n}`}function wv(n){const e=encodeURIComponent;let t="?";for(const r in n)if(n.hasOwnProperty(r)){const i=e(r)+"="+e(n[r]);t=t+i+"&"}return t=t.slice(0,-1),t}var br;(function(n){n[n.NO_ERROR=0]="NO_ERROR",n[n.NETWORK_ERROR=1]="NETWORK_ERROR",n[n.ABORT=2]="ABORT"})(br||(br={}));/**
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
 */function uD(n,e){const t=n>=500&&n<600,i=[408,429].indexOf(n)!==-1,s=e.indexOf(n)!==-1;return t||i||s}/**
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
 */class dD{constructor(e,t,r,i,s,o,a,c,u,d,h,m=!0,_=!1){this.url_=e,this.method_=t,this.headers_=r,this.body_=i,this.successCodes_=s,this.additionalRetryCodes_=o,this.callback_=a,this.errorCallback_=c,this.timeout_=u,this.progressCallback_=d,this.connectionFactory_=h,this.retry=m,this.isUsingEmulator=_,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((w,v)=>{this.resolve_=w,this.reject_=v,this.start_()})}start_(){const e=(r,i)=>{if(i){r(!1,new Wo(!1,null,!0));return}const s=this.connectionFactory_();this.pendingConnection_=s;const o=a=>{const c=a.loaded,u=a.lengthComputable?a.total:-1;this.progressCallback_!==null&&this.progressCallback_(c,u)};this.progressCallback_!==null&&s.addUploadProgressListener(o),s.send(this.url_,this.method_,this.isUsingEmulator,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&s.removeUploadProgressListener(o),this.pendingConnection_=null;const a=s.getErrorCode()===br.NO_ERROR,c=s.getStatus();if(!a||uD(c,this.additionalRetryCodes_)&&this.retry){const d=s.getErrorCode()===br.ABORT;r(!1,new Wo(!1,null,d));return}const u=this.successCodes_.indexOf(c)!==-1;r(!0,new Wo(u,s))})},t=(r,i)=>{const s=this.resolve_,o=this.reject_,a=i.connection;if(i.wasSuccessCode)try{const c=this.callback_(a,a.getResponse());cD(c)?s(c):s()}catch(c){o(c)}else if(a!==null){const c=Yd();c.serverResponse=a.getErrorText(),this.errorCallback_?o(this.errorCallback_(a,c)):o(c)}else if(i.canceled){const c=this.appDelete_?yv():JN();o(c)}else{const c=YN();o(c)}};this.canceled_?t(!1,new Wo(!1,null,!0)):this.backoffId_=oD(e,t,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&aD(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class Wo{constructor(e,t,r){this.wasSuccessCode=e,this.connection=t,this.canceled=!!r}}function hD(n,e){e!==null&&e.length>0&&(n.Authorization="Firebase "+e)}function fD(n,e){n["X-Firebase-Storage-Version"]="webjs/"+(e!=null?e:"AppManager")}function mD(n,e){e&&(n["X-Firebase-GMPID"]=e)}function pD(n,e){e!==null&&(n["X-Firebase-AppCheck"]=e)}function gD(n,e,t,r,i,s,o=!0,a=!1){const c=wv(n.urlParams),u=n.url+c,d=Object.assign({},n.headers);return mD(d,e),hD(d,t),fD(d,s),pD(d,r),new dD(u,n.method,d,n.body,n.successCodes,n.additionalRetryCodes,n.handler,n.errorHandler,n.timeout,n.progressCallback,i,o,a)}/**
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
 */function _D(){return typeof BlobBuilder!="undefined"?BlobBuilder:typeof WebKitBlobBuilder!="undefined"?WebKitBlobBuilder:void 0}function yD(...n){const e=_D();if(e!==void 0){const t=new e;for(let r=0;r<n.length;r++)t.append(n[r]);return t.getBlob()}else{if(Xd())return new Blob(n);throw new Fe(Ue.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function wD(n,e,t){return n.webkitSlice?n.webkitSlice(e,t):n.mozSlice?n.mozSlice(e,t):n.slice?n.slice(e,t):null}/**
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
 */function vD(n){if(typeof atob=="undefined")throw rD("base-64");return atob(n)}/**
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
 */const sn={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class Il{constructor(e,t){this.data=e,this.contentType=t||null}}function ED(n,e){switch(n){case sn.RAW:return new Il(vv(e));case sn.BASE64:case sn.BASE64URL:return new Il(Ev(n,e));case sn.DATA_URL:return new Il(ID(e),AD(e))}throw Yd()}function vv(n){const e=[];for(let t=0;t<n.length;t++){let r=n.charCodeAt(t);if(r<=127)e.push(r);else if(r<=2047)e.push(192|r>>6,128|r&63);else if((r&64512)===55296)if(!(t<n.length-1&&(n.charCodeAt(t+1)&64512)===56320))e.push(239,191,189);else{const s=r,o=n.charCodeAt(++t);r=65536|(s&1023)<<10|o&1023,e.push(240|r>>18,128|r>>12&63,128|r>>6&63,128|r&63)}else(r&64512)===56320?e.push(239,191,189):e.push(224|r>>12,128|r>>6&63,128|r&63)}return new Uint8Array(e)}function TD(n){let e;try{e=decodeURIComponent(n)}catch(t){throw Rs(sn.DATA_URL,"Malformed data URL.")}return vv(e)}function Ev(n,e){switch(n){case sn.BASE64:{const i=e.indexOf("-")!==-1,s=e.indexOf("_")!==-1;if(i||s)throw Rs(n,"Invalid character '"+(i?"-":"_")+"' found: is it base64url encoded?");break}case sn.BASE64URL:{const i=e.indexOf("+")!==-1,s=e.indexOf("/")!==-1;if(i||s)throw Rs(n,"Invalid character '"+(i?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let t;try{t=vD(e)}catch(i){throw i.message.includes("polyfill")?i:Rs(n,"Invalid character found")}const r=new Uint8Array(t.length);for(let i=0;i<t.length;i++)r[i]=t.charCodeAt(i);return r}class Tv{constructor(e){this.base64=!1,this.contentType=null;const t=e.match(/^data:([^,]+)?,/);if(t===null)throw Rs(sn.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const r=t[1]||null;r!=null&&(this.base64=RD(r,";base64"),this.contentType=this.base64?r.substring(0,r.length-7):r),this.rest=e.substring(e.indexOf(",")+1)}}function ID(n){const e=new Tv(n);return e.base64?Ev(sn.BASE64,e.rest):TD(e.rest)}function AD(n){return new Tv(n).contentType}function RD(n,e){return n.length>=e.length?n.substring(n.length-e.length)===e:!1}/**
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
 */class Wn{constructor(e,t){let r=0,i="";Lp(e)?(this.data_=e,r=e.size,i=e.type):e instanceof ArrayBuffer?(t?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),r=this.data_.length):e instanceof Uint8Array&&(t?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),r=e.length),this.size_=r,this.type_=i}size(){return this.size_}type(){return this.type_}slice(e,t){if(Lp(this.data_)){const r=this.data_,i=wD(r,e,t);return i===null?null:new Wn(i)}else{const r=new Uint8Array(this.data_.buffer,e,t-e);return new Wn(r,!0)}}static getBlob(...e){if(Xd()){const t=e.map(r=>r instanceof Wn?r.data_:r);return new Wn(yD.apply(null,t))}else{const t=e.map(o=>Jd(o)?ED(sn.RAW,o).data:o.data_);let r=0;t.forEach(o=>{r+=o.byteLength});const i=new Uint8Array(r);let s=0;return t.forEach(o=>{for(let a=0;a<o.length;a++)i[s++]=o[a]}),new Wn(i,!0)}}uploadData(){return this.data_}}/**
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
 */function Iv(n){let e;try{e=JSON.parse(n)}catch(t){return null}return lD(e)?e:null}/**
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
 */function bD(n){if(n.length===0)return null;const e=n.lastIndexOf("/");return e===-1?"":n.slice(0,e)}function SD(n,e){const t=e.split("/").filter(r=>r.length>0).join("/");return n.length===0?t:n+"/"+t}function Av(n){const e=n.lastIndexOf("/",n.length-2);return e===-1?n:n.slice(e+1)}/**
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
 */function kD(n,e){return e}class yt{constructor(e,t,r,i){this.server=e,this.local=t||e,this.writable=!!r,this.xform=i||kD}}let Ho=null;function CD(n){return!Jd(n)||n.length<2?n:Av(n)}function Rv(){if(Ho)return Ho;const n=[];n.push(new yt("bucket")),n.push(new yt("generation")),n.push(new yt("metageneration")),n.push(new yt("name","fullPath",!0));function e(s,o){return CD(o)}const t=new yt("name");t.xform=e,n.push(t);function r(s,o){return o!==void 0?Number(o):o}const i=new yt("size");return i.xform=r,n.push(i),n.push(new yt("timeCreated")),n.push(new yt("updated")),n.push(new yt("md5Hash",null,!0)),n.push(new yt("cacheControl",null,!0)),n.push(new yt("contentDisposition",null,!0)),n.push(new yt("contentEncoding",null,!0)),n.push(new yt("contentLanguage",null,!0)),n.push(new yt("contentType",null,!0)),n.push(new yt("metadata","customMetadata",!0)),Ho=n,Ho}function PD(n,e){function t(){const r=n.bucket,i=n.fullPath,s=new Dt(r,i);return e._makeStorageReference(s)}Object.defineProperty(n,"ref",{get:t})}function ND(n,e,t){const r={};r.type="file";const i=t.length;for(let s=0;s<i;s++){const o=t[s];r[o.local]=o.xform(r,e[o.server])}return PD(r,n),r}function bv(n,e,t){const r=Iv(e);return r===null?null:ND(n,r,t)}function DD(n,e,t,r){const i=Iv(e);if(i===null||!Jd(i.downloadTokens))return null;const s=i.downloadTokens;if(s.length===0)return null;const o=encodeURIComponent;return s.split(",").map(u=>{const d=n.bucket,h=n.fullPath,m="/b/"+o(d)+"/o/"+o(h),_=kc(m,t,r),w=wv({alt:"media",token:u});return _+w})[0]}function OD(n,e){const t={},r=e.length;for(let i=0;i<r;i++){const s=e[i];s.writable&&(t[s.server]=n[s.local])}return JSON.stringify(t)}class Zd{constructor(e,t,r,i){this.url=e,this.method=t,this.handler=r,this.timeout=i,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
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
 */function Sv(n){if(!n)throw Yd()}function LD(n,e){function t(r,i){const s=bv(n,i,e);return Sv(s!==null),s}return t}function VD(n,e){function t(r,i){const s=bv(n,i,e);return Sv(s!==null),DD(s,i,n.host,n._protocol)}return t}function kv(n){function e(t,r){let i;return t.getStatus()===401?t.getErrorText().includes("Firebase App Check token is invalid")?i=KN():i=HN():t.getStatus()===402?i=WN(n.bucket):t.getStatus()===403?i=QN(n.path):i=r,i.status=t.getStatus(),i.serverResponse=r.serverResponse,i}return e}function Cv(n){const e=kv(n);function t(r,i){let s=e(r,i);return r.getStatus()===404&&(s=GN(n.path)),s.serverResponse=i.serverResponse,s}return t}function MD(n,e,t){const r=e.fullServerUrl(),i=kc(r,n.host,n._protocol),s="GET",o=n.maxOperationRetryTime,a=new Zd(i,s,VD(n,t),o);return a.errorHandler=Cv(e),a}function xD(n,e){const t=e.fullServerUrl(),r=kc(t,n.host,n._protocol),i="DELETE",s=n.maxOperationRetryTime;function o(c,u){}const a=new Zd(r,i,o,s);return a.successCodes=[200,204],a.errorHandler=Cv(e),a}function UD(n,e){return n&&n.contentType||e&&e.type()||"application/octet-stream"}function FD(n,e,t){const r=Object.assign({},t);return r.fullPath=n.path,r.size=e.size(),r.contentType||(r.contentType=UD(null,e)),r}function BD(n,e,t,r,i){const s=e.bucketOnlyServerUrl(),o={"X-Goog-Upload-Protocol":"multipart"};function a(){let M="";for(let x=0;x<2;x++)M=M+Math.random().toString().slice(2);return M}const c=a();o["Content-Type"]="multipart/related; boundary="+c;const u=FD(e,r,i),d=OD(u,t),h="--"+c+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+d+`\r
--`+c+`\r
Content-Type: `+u.contentType+`\r
\r
`,m=`\r
--`+c+"--",_=Wn.getBlob(h,r,m);if(_===null)throw tD();const w={name:u.fullPath},v=kc(s,n.host,n._protocol),E="POST",P=n.maxUploadRetryTime,O=new Zd(v,E,LD(n,t),P);return O.urlParams=w,O.headers=o,O.body=_.uploadData(),O.errorHandler=kv(e),O}class $D{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=br.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=br.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=br.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,t,r,i,s){if(this.sent_)throw is("cannot .send() more than once");if(hn(e)&&r&&(this.xhr_.withCredentials=!0),this.sent_=!0,this.xhr_.open(t,e,!0),s!==void 0)for(const o in s)s.hasOwnProperty(o)&&this.xhr_.setRequestHeader(o,s[o].toString());return i!==void 0?this.xhr_.send(i):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw is("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw is("cannot .getStatus() before sending");try{return this.xhr_.status}catch(e){return-1}}getResponse(){if(!this.sent_)throw is("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw is("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class qD extends $D{initXhr(){this.xhr_.responseType="text"}}function eh(){return new qD}/**
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
 */class Mr{constructor(e,t){this._service=e,t instanceof Dt?this._location=t:this._location=Dt.makeFromUrl(t,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,t){return new Mr(e,t)}get root(){const e=new Dt(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return Av(this._location.path)}get storage(){return this._service}get parent(){const e=bD(this._location.path);if(e===null)return null;const t=new Dt(this._location.bucket,e);return new Mr(this._service,t)}_throwIfRoot(e){if(this._location.path==="")throw iD(e)}}function jD(n,e,t){n._throwIfRoot("uploadBytes");const r=BD(n.storage,n._location,Rv(),new Wn(e,!0),t);return n.storage.makeRequestWithTokens(r,eh).then(i=>({metadata:i,ref:n}))}function zD(n){n._throwIfRoot("getDownloadURL");const e=MD(n.storage,n._location,Rv());return n.storage.makeRequestWithTokens(e,eh).then(t=>{if(t===null)throw nD();return t})}function GD(n){n._throwIfRoot("deleteObject");const e=xD(n.storage,n._location);return n.storage.makeRequestWithTokens(e,eh)}function WD(n,e){const t=SD(n._location.path,e),r=new Dt(n._location.bucket,t);return new Mr(n.storage,r)}/**
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
 */function HD(n){return/^[A-Za-z]+:\/\//.test(n)}function KD(n,e){return new Mr(n,e)}function Pv(n,e){if(n instanceof th){const t=n;if(t._bucket==null)throw eD();const r=new Mr(t,t._bucket);return e!=null?Pv(r,e):r}else return e!==void 0?WD(n,e):n}function QD(n,e){if(e&&HD(e)){if(n instanceof th)return KD(n,e);throw mu("To use ref(service, url), the first argument must be a Storage instance.")}else return Pv(n,e)}function Mp(n,e){const t=e==null?void 0:e[_v];return t==null?null:Dt.makeFromBucketSpec(t,n)}function YD(n,e,t,r={}){n.host=`${e}:${t}`;const i=hn(e);i&&(Wa(`https://${n.host}/b`),Ha("Storage",!0)),n._isUsingEmulator=!0,n._protocol=i?"https":"http";const{mockUserToken:s}=r;s&&(n._overrideAuthToken=typeof s=="string"?s:Ru(s,n.app.options.projectId))}class th{constructor(e,t,r,i,s,o=!1){this.app=e,this._authProvider=t,this._appCheckProvider=r,this._url=i,this._firebaseVersion=s,this._isUsingEmulator=o,this._bucket=null,this._host=gv,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=jN,this._maxUploadRetryTime=zN,this._requests=new Set,i!=null?this._bucket=Dt.makeFromBucketSpec(i,this._host):this._bucket=Mp(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=Dt.makeFromBucketSpec(this._url,e):this._bucket=Mp(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){Vp("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){Vp("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}_getAuthToken(){return p(this,null,function*(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const t=yield e.getToken();if(t!==null)return t.accessToken}return null})}_getAppCheckToken(){return p(this,null,function*(){if(wt(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=this._appCheckProvider.getImmediate({optional:!0});return e?(yield e.getToken()).token:null})}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new Mr(this,e)}_makeRequest(e,t,r,i,s=!0){if(this._deleted)return new sD(yv());{const o=gD(e,this._appId,r,i,t,this._firebaseVersion,s,this._isUsingEmulator);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}makeRequestWithTokens(e,t){return p(this,null,function*(){const[r,i]=yield Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,t,r,i).getPromise()})}}const xp="@firebase/storage",Up="0.13.14";/**
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
 */const Nv="storage";function JD(n,e,t){return n=pe(n),jD(n,e,t)}function XD(n){return n=pe(n),zD(n)}function ZD(n){return n=pe(n),GD(n)}function Dv(n,e){return n=pe(n),QD(n,e)}function Fp(n=Ks(),e){n=pe(n);const r=Un(n,Nv).getImmediate({identifier:e}),i=Iu("storage");return i&&e1(r,...i),r}function e1(n,e,t,r={}){YD(n,e,t,r)}function t1(n,{instanceIdentifier:e}){const t=n.getProvider("app").getImmediate(),r=n.getProvider("auth-internal"),i=n.getProvider("app-check-internal");return new th(t,r,i,e,hr)}function n1(){Ut(new Vt(Nv,t1,"PUBLIC").setMultipleInstances(!0)),mt(xp,Up,""),mt(xp,Up,"esm2017")}n1();const Bp={apiKey:"AIzaSyBTwAuJalgcUpDhYqOTL-akmKGfSQQxev0",authDomain:"turkuast-erp.firebaseapp.com",projectId:"turkuast-erp",storageBucket:"turkuast-erp.firebasestorage.app",messagingSenderId:"897264408710",appId:"1:897264408710:web:3a597d471313a5a9f41907",measurementId:"G-VEZKQQQW5Y",databaseURL:""},r1=n=>n.includes(".firebasestorage.app")?n.replace(".firebasestorage.app",".appspot.com"):n,bs=le(F({},Bp),{storageBucket:r1(Bp.storageBucket)}),i1=bs.apiKey&&bs.projectId;let kt,C=null,S=null,xr=null;if(vf().length===0)try{if(i1){if(kt=sg(bs),typeof window!="undefined"){const n=()=>{try{Zk(kt)}catch(e){}};"requestIdleCallback"in window?window.requestIdleCallback(()=>{n()},{timeout:3e3}):setTimeout(n,3e3)}try{if(C=Zo(kt),!C)throw new Error("Firebase Auth instance oluşturulamadı")}catch(n){C=null}if(bs.databaseURL)try{Op(kt)}catch(n){}try{S=Zl(kt)}catch(n){}try{xr=Fp(kt)}catch(n){}}}catch(n){}else{const n=vf();if(n.length>0){kt=n[0];try{C=Zo(kt),C||(C=Zo(kt))}catch(e){C=null}if(bs.databaseURL)try{Op(kt)}catch(e){}try{S=Zl(kt)}catch(e){const t=e instanceof Error?e.message:"";t.includes("already been started")||t.includes("already initialized")}try{xr=Fp(kt)}catch(e){}}}const re=S,$s=Object.freeze(Object.defineProperty({__proto__:null,get app(){return kt},get auth(){return C},db:re,get firestore(){return S},get storage(){return xr}},Symbol.toStringTag,{value:"Module"})),kn="departments",po=()=>p(void 0,null,function*(){var n,e;try{if(!re)throw new Error("Firebase Firestore başlatılamadı. Lütfen .env dosyasında Firebase yapılandırmasını kontrol edin.");let t;try{const s=q(re,kn);t=yield J(s)}catch(s){return[]}let r=[];try{const{getAuth:s}=yield z(()=>p(void 0,null,function*(){const{getAuth:c}=yield Promise.resolve().then(()=>Ns);return{getAuth:c}}),void 0),{auth:o}=yield z(()=>p(void 0,null,function*(){const{auth:c}=yield Promise.resolve().then(()=>$s);return{auth:c}}),void 0),a=o||s();if(a!=null&&a.currentUser){const{getAllUsers:c}=yield z(()=>p(void 0,null,function*(){const{getAllUsers:u}=yield Promise.resolve().then(()=>Ae);return{getAllUsers:u}}),void 0);r=yield c()}}catch(s){const o=s&&typeof s=="object"?s:null;(o==null?void 0:o.code)!=="permission-denied"&&((n=o==null?void 0:o.message)!=null&&n.includes("permissions"))}const i=[];for(const s of t.docs){const o=s.data(),a=F({id:s.id},o);if(a.managerId){const c=r.find(u=>u.id===a.managerId);if(c)a.managerName=c.fullName||c.displayName||c.email||"Bilinmeyen";else try{const{getAuth:u}=yield z(()=>p(void 0,null,function*(){const{getAuth:m}=yield Promise.resolve().then(()=>Ns);return{getAuth:m}}),void 0),{auth:d}=yield z(()=>p(void 0,null,function*(){const{auth:m}=yield Promise.resolve().then(()=>$s);return{auth:m}}),void 0),h=d||u();if(h!=null&&h.currentUser){const{getUserProfile:m}=yield z(()=>p(void 0,null,function*(){const{getUserProfile:w}=yield Promise.resolve().then(()=>Ae);return{getUserProfile:w}}),void 0),_=yield m(a.managerId,!1);_?a.managerName=_.fullName||_.displayName||_.email||"Bilinmeyen":(a.managerName=void 0,h!=null&&h.currentUser&&X(U(re,kn,s.id),{managerId:null,updatedAt:$.now()}).catch(w=>{const v=w&&typeof w=="object"?w:null;v==null||v.code}))}}catch(u){u instanceof Error&&((e=u.message)!=null&&e.includes("silinmiş"))?(a.managerName=void 0,X(U(re,kn,s.id),{managerId:null,updatedAt:$.now()}).catch(d=>{})):a.managerName=void 0}}r.length>0?a.userCount=r.filter(c=>c.departmentId===s.id).length:a.userCount=0,i.push(a)}return i}catch(t){return[]}}),dr=n=>p(void 0,null,function*(){var e;try{if(!re)throw new Error("Firebase Firestore başlatılamadı. Lütfen .env dosyasında Firebase yapılandırmasını kontrol edin.");const t=U(re,kn,n),r=yield ne(t);if(!r.exists())return null;const i=r.data(),s=F({id:r.id},i);if(s.managerId)try{const o=yield Ee(s.managerId,!1);if(o)s.managerName=o.fullName||o.displayName||o.email||"Bilinmeyen";else{s.managerName=void 0;try{yield X(U(re,kn,n),{managerId:null,updatedAt:$.now()})}catch(a){}}}catch(o){if(o instanceof Error&&((e=o.message)!=null&&e.includes("silinmiş"))){s.managerName=void 0;try{yield X(U(re,kn,n),{managerId:null,updatedAt:$.now()})}catch(a){}}else s.managerName=void 0}return s}catch(t){const r=t instanceof Error?t.message:"Departman yüklenemedi";throw new Error(r)}}),s1=(n,e=null,t=null,r=null)=>p(void 0,null,function*(){try{if(!re)throw new Error("Firebase Firestore başlatılamadı. Lütfen .env dosyasında Firebase yapılandırmasını kontrol edin.");const i=q(re,kn),s={name:n,description:e,managerId:t,createdAt:$.now(),updatedAt:$.now()},o=yield we(i,s);return(r||t)&&(yield se("CREATE","departments",o.id,r||t,null,s)),o.id}catch(i){const s=i instanceof Error?i.message:"Departman oluşturulamadı";throw new Error(s)}}),o1=(n,e,t)=>p(void 0,null,function*(){try{if(!re)throw new Error("Firebase Firestore başlatılamadı. Lütfen .env dosyasında Firebase yapılandırmasını kontrol edin.");const r=yield dr(n),i=U(re,kn,n);yield X(i,le(F({},e),{updatedAt:$.now()}));const s=yield dr(n);t&&(yield se("UPDATE","departments",n,t,r,s))}catch(r){const i=r instanceof Error?r.message:"Departman güncellenemedi";throw new Error(i)}}),a1=(n,e)=>p(void 0,null,function*(){try{if(!re)throw new Error("Firebase Firestore başlatılamadı. Lütfen .env dosyasında Firebase yapılandırmasını kontrol edin.");const t=yield dr(n),r=U(re,kn,n);yield We(r),e&&(yield se("DELETE","departments",n,e,t,null))}catch(t){const r=t instanceof Error?t.message:"Departman silinemedi";throw new Error(r)}}),pu=Object.freeze(Object.defineProperty({__proto__:null,createDepartment:s1,deleteDepartment:a1,getDepartmentById:dr,getDepartments:po,updateDepartment:o1},Symbol.toStringTag,{value:"Module"})),Ti="audit_logs",nh=(n,e,t,r=null,i=null,s=null,o)=>p(void 0,null,function*(){try{const a=q(re,Ti),c={userId:s,action:n,tableName:e,recordId:t,oldData:r,newData:i,createdAt:$.now()};return o&&(c.metadata=o),(yield we(a,c)).id}catch(a){return""}}),c1=n=>p(void 0,null,function*(){var e;try{const t=q(re,Ti);let r=Q(t,fe("createdAt","desc"));const i=(n==null?void 0:n.limit)||100;r=Q(r,Ne(i)),n!=null&&n.action&&(r=Q(r,ce("action","==",n.action))),n!=null&&n.tableName&&(r=Q(r,ce("tableName","==",n.tableName))),n!=null&&n.userId&&(r=Q(r,ce("userId","==",n.userId)));const s=yield J(r),o=[],a=new Set;for(const u of s.docs){const d=u.data(),h=F({id:u.id},d);h.userId&&a.add(h.userId),o.push(h)}const c=new Map;if(a.size>0)try{(yield rt()).forEach(d=>{a.has(d.id)&&c.set(d.id,{fullName:d.fullName||d.displayName,email:d.email})})}catch(u){}return o.forEach(u=>{if(u.userId){const d=c.get(u.userId);d&&(u.userName=d.fullName||d.email,u.userEmail=d.email)}}),o}catch(t){const r=t;if((r==null?void 0:r.code)==="failed-precondition"||(e=r==null?void 0:r.message)!=null&&e.includes("index")){console.warn("Audit logs index bulunamadı, basit query kullanılıyor");try{const s=(n==null?void 0:n.limit)||100,o=Q(q(re,Ti),fe("createdAt","desc"),Ne(s));let c=(yield J(o)).docs.map(h=>{const m=h.data();return F({id:h.id},m)});n!=null&&n.action&&(c=c.filter(h=>h.action===n.action)),n!=null&&n.tableName&&(c=c.filter(h=>h.tableName===n.tableName)),n!=null&&n.userId&&(c=c.filter(h=>h.userId===n.userId)),c.sort((h,m)=>{var v,E;const _=((v=h.createdAt)==null?void 0:v.toMillis())||0;return(((E=m.createdAt)==null?void 0:E.toMillis())||0)-_});const u=new Set(c.map(h=>h.userId).filter(Boolean)),d=new Map;if(u.size>0)try{(yield rt()).forEach(m=>{u.has(m.id)&&d.set(m.id,{fullName:m.fullName||m.displayName,email:m.email})})}catch(h){}return c.forEach(h=>{if(h.userId){const m=d.get(h.userId);m&&(h.userName=m.fullName||m.email,h.userEmail=m.email)}}),c}catch(s){return[]}}const i=t instanceof Error?t.message:"Audit logları yüklenemedi";throw new Error(i)}}),l1=n=>p(void 0,null,function*(){var e;try{const[t,r]=yield Promise.all([po(),rt()]),i=t.filter(d=>d.managerId===n),s={managedTeams:i.map(d=>({id:d.id,name:d.name})),teamMembers:[]};if(i.length===0)return{logs:[],teamInfo:s};const o=i.map(d=>d.id),a=r.filter(d=>{const h=d.approvedTeams||[],m=d.pendingTeams||[];return[...h,...m].some(_=>o.includes(_))});s.teamMembers=a.map(d=>({id:d.id,name:d.fullName||d.email,email:d.email}));const u=[...a.map(d=>d.id),n];try{const d=q(re,Ti),h=yield J(Q(d,fe("createdAt","desc"),Ne(500))),m=[],_=new Set;for(const v of h.docs){const E=v.data();if(E.userId&&u.includes(E.userId)){const P=F({id:v.id},E);P.userId&&_.add(P.userId),m.push(P)}}const w=new Map;if(_.size>0)try{(yield rt()).forEach(E=>{_.has(E.id)&&w.set(E.id,{fullName:E.fullName||E.displayName,email:E.email})})}catch(v){}return m.forEach(v=>{if(v.userId){const E=w.get(v.userId);E&&(v.userName=E.fullName||E.email,v.userEmail=E.email)}}),{logs:m,teamInfo:s}}catch(d){const h=d;if((h==null?void 0:h.code)==="failed-precondition"||(e=h==null?void 0:h.message)!=null&&e.includes("index")){console.warn("Team member logs index bulunamadı, basit query kullanılıyor");try{const m=Q(q(re,Ti),fe("createdAt","desc")),w=(yield J(m)).docs.map(P=>{const O=P.data();return F({id:P.id},O)}).filter(P=>P.userId&&u.includes(P.userId));w.sort((P,O)=>{var Z,K;const M=((Z=P.createdAt)==null?void 0:Z.toMillis())||0;return(((K=O.createdAt)==null?void 0:K.toMillis())||0)-M});const v=new Set(w.map(P=>P.userId).filter(Boolean)),E=new Map;if(v.size>0)try{(yield rt()).forEach(O=>{v.has(O.id)&&E.set(O.id,{fullName:O.fullName||O.displayName,email:O.email})})}catch(P){console.error("Error fetching users:",P)}return w.forEach(P=>{if(P.userId){const O=E.get(P.userId);O&&(P.userName=O.fullName||O.email,P.userEmail=O.email)}}),{logs:w,teamInfo:s}}catch(m){return{logs:[],teamInfo:s}}}throw d}}catch(t){return{logs:[],teamInfo:{managedTeams:[],teamMembers:[]}}}}),u1=n=>p(void 0,null,function*(){try{const e=q(re,Ti),t=Q(e,ce("userId","==",n)),r=yield J(t),i=500,s=r.docs;for(let o=0;o<s.length;o+=i){const a=Gn(re);s.slice(o,o+i).forEach(u=>{a.delete(u.ref)}),yield a.commit()}}catch(e){throw e}}),d1=Object.freeze(Object.defineProperty({__proto__:null,createAuditLog:nh,deleteUserLogs:u1,getAuditLogs:c1,getTeamMemberLogs:l1},Symbol.toStringTag,{value:"Module"})),Ov=`session_${Date.now()}_${Math.random().toString(36).substring(2,9)}`;let Kn=[],Al=!1;const Lv=500,h1=20,f1=(n,e,t,r)=>{if(n==="CREATE")return`Yeni ${Ko(r)} kaydı oluşturuldu`;if(n==="DELETE")return`${Ko(r)} kaydı silindi`;if(!e||!t||typeof e!="object"||typeof t!="object")return`${Ko(r)} kaydı güncellendi`;const i=e,s=t,o=[];for(const a of Object.keys(s))JSON.stringify(i[a])!==JSON.stringify(s[a])&&o.push(m1(a));return o.length===0?`${Ko(r)} kaydı güncellendi`:o.length<=3?`${o.join(", ")} güncellendi`:`${o.slice(0,3).join(", ")} ve ${o.length-3} alan daha güncellendi`},Ko=n=>({tasks:"Görev",users:"Kullanıcı",departments:"Departman",orders:"Sipariş",production_orders:"Üretim Siparişi",customers:"Müşteri",products:"Ürün",projects:"Proje",audit_logs:"Denetim Kaydı",role_permissions:"Rol Yetkisi",raw_materials:"Hammadde",warranty:"Garanti",notifications:"Bildirim",task_assignments:"Görev Ataması",reports:"Rapor",profiles:"Profil"})[n]||n,m1=n=>({title:"Başlık",description:"Açıklama",status:"Durum",priority:"Öncelik",dueDate:"Bitiş Tarihi",assignedTo:"Atanan",name:"İsim",email:"E-posta",phone:"Telefon",role:"Rol",fullName:"Ad Soyad",company:"Şirket",address:"Adres",totalAmount:"Toplam Tutar",orderNumber:"Sipariş Numarası",customerId:"Müşteri",isArchived:"Arşivlendi",approvalStatus:"Onay Durumu",isInPool:"Görev Havuzunda",canCreate:"Oluşturma Yetkisi",canRead:"Okuma Yetkisi",canUpdate:"Güncelleme Yetkisi",canDelete:"Silme Yetkisi",subPermissions:"Alt Yetkiler"})[n]||n,Vv=(n,e,t,r,i)=>{const s=C==null?void 0:C.currentUser,o=F({sessionId:Ov,timestamp:new Date().toISOString(),changesSummary:f1(n,e,t,r)},i);return s&&(o.performedBy={userId:s.uid,email:s.email,displayName:s.displayName}),typeof window!="undefined"&&(o.userAgent=navigator.userAgent,o.screenResolution=`${window.screen.width}x${window.screen.height}`,o.timezone=Intl.DateTimeFormat().resolvedOptions().timeZone,o.language=navigator.language),o},gu=()=>p(void 0,null,function*(){if(Al||Kn.length===0)return;Al=!0;const n=[...Kn];Kn=[];try{yield Promise.allSettled(n.map(e=>nh(e.action,e.tableName,e.recordId,e.oldData,e.newData,e.userId,e.metadata)))}catch(e){}finally{Al=!1,Kn.length>0&&setTimeout(gu,Lv)}}),se=(n,e,t,r,i=null,s=null,o)=>p(void 0,null,function*(){var a;try{const c=Vv(n,i,s,e,o),u={action:n,tableName:e,recordId:t,userId:r||((a=C==null?void 0:C.currentUser)==null?void 0:a.uid)||null,oldData:i,newData:s,metadata:c,timestamp:Date.now()};Kn.push(u),Kn.length>=h1?gu():setTimeout(gu,Lv)}catch(c){}}),p1=(r,i,...s)=>p(void 0,[r,i,...s],function*(n,e,t={}){try{const o=Vv("CREATE",null,t,"security_events",F({eventType:n,severity:g1(n)},t));yield nh("CREATE","security_events",null,null,F({eventType:n},t),e,o)}catch(o){}}),g1=n=>({LOGIN:"LOW",LOGOUT:"LOW",PASSWORD_RESET:"MEDIUM",EMAIL_VERIFY:"LOW",ROLE_CHANGE:"HIGH",PERMISSION_CHANGE:"HIGH",ACCOUNT_DELETE:"CRITICAL",ACCOUNT_RESTORE:"HIGH"})[n]||"MEDIUM";typeof window!="undefined"&&window.addEventListener("beforeunload",()=>{var n;Kn.length>0&&((n=navigator.sendBeacon)==null||n.call(navigator,"/api/flush-logs",JSON.stringify({logs:Kn,sessionId:Ov})))});const Mv=Object.freeze(Object.defineProperty({__proto__:null,logAudit:se,logSecurityEvent:p1},Symbol.toStringTag,{value:"Module"})),_1=(n,e,t,r,i,s)=>p(void 0,null,function*(){try{if(!C||!S)throw new Error("Firebase is not initialized");let o=null;try{const E=q(S,"users"),P=Q(E,ce("email","==",n),Ne(1)),O=yield J(P);if(!O.empty){const M=O.docs[0],x=M.data();x.deleted===!0?o=null:o={id:M.id,data:x}}}catch(E){const P=E==null?void 0:E.code}let a=null,c=!1;if(o)try{a=(yield fs(C,n,e)).user,c=!0;try{yield a.reload(),C.currentUser&&(a=C.currentUser)}catch(x){}const P=o.data,O=P.deleted===!0;let M=a.emailVerified;if(!M&&P.emailVerified===!0&&(M=!0),M&&!O)return yield Le(C),{success:!1,message:"Bu hesap zaten var, doğrulanmış. Giriş yapabilirsiniz.",user:null}}catch(E){const P=new Error("Bu hesap zaten kayıtlı. Lütfen giriş yapmayı deneyin.");throw P.code="auth/email-already-in-use",P}else try{a=(yield Ug(C,n,e)).user,c=!1}catch(E){if((E==null?void 0:E.code)==="auth/email-already-in-use")try{a=(yield fs(C,n,e)).user,c=!1}catch(O){const M=new Error("Bu hesap zaten kayıtlı. Lütfen giriş yapmayı deneyin.");throw M.code="auth/email-already-in-use",M}else throw E}if(!a)throw new Error("Kullanıcı oluşturulamadı veya bulunamadı");const u=a.uid,d={email:n,displayName:t,fullName:t,role:["viewer"],emailVerified:!1,needsEmailVerification:!0,createdAt:j(),updatedAt:j(),pendingTeams:s?[s]:[],approvedTeams:[]};r&&r.trim()!==""&&(d.phone=r.trim()),i&&i.trim()!==""&&(d.dateOfBirth=i.trim());const h=U(S,"users",u),m=[];let _=null;const w=p(void 0,null,function*(){if(c&&o){const E=a.emailVerified,P={displayName:t,fullName:t,updatedAt:j()};r&&r.trim()!==""&&(P.phone=r.trim()),i&&i.trim()!==""&&(P.dateOfBirth=i.trim()),s&&(P.pendingTeams=[s]),E?(P.needsEmailVerification=!1,P.emailVerified=!0):(P.needsEmailVerification=!0,P.emailVerified=!1);const O={};for(const[M,x]of Object.entries(P))x!==void 0&&(O[M]=x);yield X(h,O)}else{const E=le(F({},d),{deleted:!1,needsEmailVerification:!0,emailVerified:!1});for(const[P,O]of Object.entries(E))O===void 0&&delete E[P];yield un(h,E,{merge:!0})}});if(m.push(w),t&&m.push(ma(a,{displayName:t}).catch(E=>{})),!a.emailVerified){const E=Ps(a).then(()=>{}).catch(O=>{const M=O==null?void 0:O.code,x=O instanceof Error?O.message:String(O);let Z="Email doğrulama maili gönderilemedi.";M==="auth/too-many-requests"?Z="Çok fazla istek yapıldı. Lütfen bir süre sonra tekrar deneyin.":M==="auth/network-request-failed"?Z="Ağ hatası. İnternet bağlantınızı kontrol edin.":x&&(Z=x),_=new Error(Z+" Lütfen daha sonra tekrar deneyin.")}),P=Promise.race([E,new Promise(O=>{setTimeout(()=>{O()},2e3)})]);m.push(P)}if(yield Promise.allSettled(m),_)throw _;if(yield new Promise(E=>setTimeout(E,100)),s)try{const{getDepartmentById:E}=yield z(()=>p(void 0,null,function*(){const{getDepartmentById:M}=yield Promise.resolve().then(()=>pu);return{getDepartmentById:M}}),void 0),{createNotification:P}=yield z(()=>p(void 0,null,function*(){const{createNotification:M}=yield Promise.resolve().then(()=>bt);return{createNotification:M}}),void 0),O=yield E(s);if(O){const M=t||n||"Bir kullanıcı",x=O.name||"ekip",Z=[];O.managerId&&Z.push(P({userId:O.managerId,type:"system",title:"Yeni katılım isteği",message:`${M} "${x}" ekibine katılmak için istek gönderdi. İsteği onaylamak veya reddetmek için Ekip Üyeleri sayfasını ziyaret edin.`,read:!1,metadata:{teamId:s,teamName:x,requesterId:u,requesterName:M,requesterEmail:n}}).then(()=>{}).catch(K=>{}));try{const R=(yield rt()).filter(T=>{var I,b;return((I=T.role)==null?void 0:I.includes("super_admin"))||((b=T.role)==null?void 0:b.includes("main_admin"))});for(const T of R)Z.push(P({userId:T.id,type:"system",title:"Yeni ekip katılım isteği",message:`${M} "${x}" ekibine katılmak için istek gönderdi. İsteği onaylamak veya reddetmek için Ekip Onay Yönetimi sayfasını ziyaret edin.`,read:!1,metadata:{teamId:s,teamName:x,requesterId:u,requesterName:M,requesterEmail:n}}).then(()=>{}).catch(I=>{}))}catch(K){}Promise.allSettled(Z).catch(()=>{})}}catch(E){}let v;return c?a.emailVerified?v="Bu hesap zaten var, doğrulanmış. Giriş yapabilirsiniz.":v="Hesap var ama doğrulama yapılmamış. Doğrulama maili gönderildi. Lütfen e-postanızı ve spam kutusunu kontrol edin.":a.emailVerified?v="Kayıt başarılı!":v="Doğrulama maili gönderildi. Doğrulama yaptıktan sonra giriş yapabilirsiniz. Lütfen e-postanızı ve spam kutusunu kontrol edin.",{success:!0,message:v,user:{id:u,email:n,displayName:t,fullName:t,phone:r||void 0,dateOfBirth:i||void 0,role:["viewer"],pendingTeams:s?[s]:[],approvedTeams:[],emailVerified:a.emailVerified||!1,createdAt:new Date,updatedAt:new Date}}}catch(o){let a="Kayıt başarısız";const c=o==null?void 0:o.code,u=o instanceof Error?o.message:String(o),d=["auth/email-already-in-use","auth/invalid-email","auth/weak-password","auth/operation-not-allowed","auth/invalid-credential","auth/user-disabled","auth/too-many-requests"].includes(c||"");if(c==="auth/email-already-in-use")try{let m=(yield fs(C,n,e)).user;try{yield m.reload(),C.currentUser&&(m=C.currentUser)}catch(P){}const _=yield ne(U(S,"users",m.uid)),w=_.exists()?_.data():null,v=(w==null?void 0:w.deleted)===!0;let E=m.emailVerified;if(!E&&(w==null?void 0:w.emailVerified)===!0&&(E=!0),E&&!v)return yield Le(C),{success:!1,message:"Bu hesap zaten var, doğrulanmış. Giriş yapabilirsiniz.",user:null};if(!E||v){if(_.exists()){const M={displayName:t,fullName:t,updatedAt:j()};r&&r.trim()!==""&&(M.phone=r.trim()),i&&i.trim()!==""&&(M.dateOfBirth=i.trim()),s&&(M.pendingTeams=[s]),v&&(M.deleted=!1,M.needsEmailVerification=!0,M.emailVerified=!1);const x={};for(const[Z,K]of Object.entries(M))K!==void 0&&(x[Z]=K);yield X(U(S,"users",m.uid),x)}else{const M={email:n,displayName:t,fullName:t,role:["viewer"],emailVerified:!1,createdAt:j(),updatedAt:j(),pendingTeams:s?[s]:[],approvedTeams:[]};r&&r.trim()!==""&&(M.phone=r.trim()),i&&i.trim()!==""&&(M.dateOfBirth=i.trim());const x={};for(const[Z,K]of Object.entries(M))K!==void 0&&(x[Z]=K);yield un(U(S,"users",m.uid),x)}if(s)try{const{getDepartmentById:M}=yield z(()=>p(void 0,null,function*(){const{getDepartmentById:K}=yield Promise.resolve().then(()=>pu);return{getDepartmentById:K}}),void 0),{createNotification:x}=yield z(()=>p(void 0,null,function*(){const{createNotification:K}=yield Promise.resolve().then(()=>bt);return{createNotification:K}}),void 0),Z=yield M(s);if(Z){const K=t||n||"Bir kullanıcı",R=Z.name||"ekip",T=[];Z.managerId&&T.push(x({userId:Z.managerId,type:"system",title:"Yeni katılım isteği",message:`${K} "${R}" ekibine katılmak için istek gönderdi. İsteği onaylamak veya reddetmek için Ekip Üyeleri sayfasını ziyaret edin.`,read:!1,metadata:{teamId:s,teamName:R,requesterId:m.uid,requesterName:K,requesterEmail:n}}).then(()=>{}).catch(I=>{}));try{const b=(yield rt()).filter(k=>{var D,A;return((D=k.role)==null?void 0:D.includes("super_admin"))||((A=k.role)==null?void 0:A.includes("main_admin"))});for(const k of b)T.push(x({userId:k.id,type:"system",title:"Yeni ekip katılım isteği",message:`${K} "${R}" ekibine katılmak için istek gönderdi. İsteği onaylamak veya reddetmek için Ekip Onay Yönetimi sayfasını ziyaret edin.`,read:!1,metadata:{teamId:s,teamName:R,requesterId:m.uid,requesterName:K,requesterEmail:n}}).then(()=>{}).catch(D=>{}))}catch(I){}Promise.allSettled(T).catch(()=>{})}}catch(M){}const P=[];let O=null;if(P.push(ma(m,{displayName:t}).catch(M=>{})),P.push(Ps(m).then(()=>{}).catch(M=>{O=new Error("Email doğrulama maili gönderilemedi. Lütfen daha sonra tekrar deneyin veya Firebase Console'da email ayarlarını kontrol edin.")})),yield Promise.allSettled(P),O)throw yield Le(C),O;return yield Le(C),{success:!0,message:"Hesap var ama doğrulama yapılmamış. Doğrulama maili gönderildi. Lütfen e-postanızı ve spam kutusunu kontrol edin.",user:{id:m.uid,email:n,displayName:t,fullName:t,phone:r||void 0,dateOfBirth:i||void 0,role:["viewer"],pendingTeams:s?[s]:[],approvedTeams:[],emailVerified:!1,createdAt:new Date,updatedAt:new Date}}}}catch(h){a="Bu hesap zaten kayıtlı. Lütfen giriş yapmayı deneyin."}else c==="auth/invalid-email"?a="Geçersiz e-posta adresi. Lütfen geçerli bir e-posta adresi girin.":c==="auth/weak-password"?a="Şifre çok zayıf. Şifre en az 8 karakter, 1 büyük harf, 1 küçük harf ve 1 rakam içermelidir.":c==="auth/operation-not-allowed"?a="E-posta/şifre ile kayıt şu anda devre dışı. Lütfen yöneticiye başvurun.":c==="auth/invalid-credential"?a="Bu hesap zaten kayıtlı. Lütfen giriş yapmayı deneyin.":c==="auth/user-disabled"?a="Bu hesap devre dışı bırakılmış. Lütfen yöneticiye başvurun.":c==="auth/too-many-requests"?a="Çok fazla istek yapıldı. Lütfen bir süre sonra tekrar deneyin.":c==="auth/network-request-failed"?a="Ağ hatası. İnternet bağlantınızı kontrol edin.":c==="auth/internal-error"?a="Sunucu hatası. Lütfen daha sonra tekrar deneyin.":c==="permission-denied"||u.includes("permissions")?a="Firestore izin hatası. Lütfen Firebase Console'da Security Rules'u kontrol edin. Detaylar: "+(u||"İzin reddedildi"):u.includes("Unsupported field value: undefined")?a="Form verilerinde eksik veya geçersiz alanlar var. Lütfen tüm zorunlu alanları doldurun ve tekrar deneyin.":u.includes("invalid data")?a="Gönderilen veriler geçersiz. Lütfen tüm alanları kontrol edip tekrar deneyin.":u&&(a=u);return{success:!1,message:a,user:null}}}),y1=(n,e)=>p(void 0,null,function*(){var t,r;try{if(!C||!S)throw new Error("Firebase is not initialized");let s=(yield fs(C,n,e)).user;try{yield s.reload(),C.currentUser&&(s=C.currentUser)}catch(o){}try{const o=yield ne(U(S,"users",s.uid));if(o.exists()&&o.data().deleted===!0){try{yield Le(C)}catch(c){}return{success:!1,message:"Bu hesap silinmiş. Giriş yapamazsınız.",user:null}}}catch(o){console.error("Kullanıcı kontrolü hatası:",o)}try{let o=null,a=!1;try{o=yield Ee(s.uid)}catch(_){(_ instanceof Error?_.message:String(_)).includes("silinmiş")&&(a=!0)}if(a){try{yield Le(C)}catch(_){}return{success:!1,message:"Bu hesap silinmiş. Giriş yapamazsınız.",user:null}}if(!o)try{const _=yield ne(U(S,"users",s.uid));if(_.exists()){if(_.data().deleted===!0){try{yield Le(C)}catch(v){}return{success:!1,message:"Bu hesap silinmiş. Giriş yapamazsınız.",user:null}}yield new Promise(v=>setTimeout(v,200));try{o=yield Ee(s.uid)}catch(v){if((v instanceof Error?v.message:String(v)).includes("silinmiş")){try{yield Le(C)}catch(P){}return{success:!1,message:"Bu hesap silinmiş. Giriş yapamazsınız.",user:null}}}}else{yield un(U(S,"users",s.uid),{email:s.email||n,displayName:s.displayName||"",fullName:s.displayName||"",role:["viewer"],emailVerified:s.emailVerified||!1,needsEmailVerification:!s.emailVerified,createdAt:j(),updatedAt:j(),pendingTeams:[],approvedTeams:[]}),yield new Promise(w=>setTimeout(w,200));try{o=yield Ee(s.uid)}catch(w){if((w instanceof Error?w.message:String(w)).includes("silinmiş")){try{yield Le(C)}catch(E){}return{success:!1,message:"Bu hesap silinmiş. Giriş yapamazsınız.",user:null}}}}}catch(_){}let c=yield ne(U(S,"users",s.uid)),u=!1,d=0;const h=2;for(;d<h&&(!c.exists()||((t=c.data())==null?void 0:t.needsEmailVerification)===void 0);)yield new Promise(_=>setTimeout(_,200)),c=yield ne(U(S,"users",s.uid)),d++;if(c.exists()){const _=c.data();u=_.needsEmailVerification===!0||_.needsEmailVerification==="true"||_.needsEmailVerification===1}let m=s.emailVerified;if(!m&&c.exists()&&c.data().emailVerified===!0&&(m=!0),!m){if(!u)try{yield X(U(S,"users",s.uid),{needsEmailVerification:!0,emailVerified:!1,updatedAt:j()})}catch(_){}try{yield Ps(s)}catch(_){const w=_==null?void 0:_.code,v=_ instanceof Error?_.message:String(_);let E="Email doğrulama maili gönderilemedi.";w==="auth/too-many-requests"?E="Çok fazla istek yapıldı. Lütfen bir süre sonra tekrar deneyin.":w==="auth/network-request-failed"?E="Ağ hatası. İnternet bağlantınızı kontrol edin.":v&&(E=v);try{yield Le(C)}catch(P){}return{success:!1,message:E+" Lütfen daha sonra tekrar deneyin veya spam kutunuzu kontrol edin.",user:null}}try{yield Le(C)}catch(_){}return{success:!1,message:"E-posta adresinizi doğrulamalısınız. Doğrulama e-postası gönderildi. Lütfen e-postanızı ve spam kutusunu kontrol edin.",user:null}}if(m)try{yield X(U(S,"users",s.uid),{needsEmailVerification:!1,emailVerified:!0,updatedAt:j()}),o&&(o.emailVerified=!0)}catch(_){}if(!o){try{o=yield Ee(s.uid)}catch(_){if((_ instanceof Error?_.message:String(_)).includes("silinmiş")){try{yield Le(C)}catch(v){}return{success:!1,message:"Bu hesap silinmiş. Giriş yapamazsınız.",user:null}}}if(!o){try{yield Le(C)}catch(_){}return{success:!1,message:"Kullanıcı profili alınamadı. Lütfen tekrar deneyin.",user:null}}}try{const _=o.lastLoginAt;yield X(U(S,"users",s.uid),{lastLoginAt:j()}),yield new Promise(v=>setTimeout(v,100));const w=yield Ee(s.uid);w&&(o=w);try{const v=new Date().toISOString(),E=_?_ instanceof $?_.toDate().toISOString():String(_):null;let P=0;const O=2;for(;P<=O;)try{yield se("UPDATE","user_logins",s.uid,s.uid,E?{lastLoginAt:E}:null,null,{action:"LOGIN",method:"EMAIL",email:n,timestamp:v});break}catch(M){P++,P>O||(yield new Promise(x=>setTimeout(x,100*P)))}}catch(v){}}catch(_){}return{success:!0,user:o}}catch(o){if(o instanceof Error&&((r=o.message)!=null&&r.includes("silinmiş"))){try{yield Le(C)}catch(a){}return{success:!1,message:"Bu hesap silinmiş. Giriş yapamazsınız.",user:null}}throw o}}catch(i){if((i instanceof Error?i.message:String(i)).includes("silinmiş"))return{success:!1,message:"Bu hesap silinmiş. Giriş yapamazsınız.",user:null};let o="Giriş başarısız";const a=i&&typeof i=="object"?i:null;return(a==null?void 0:a.code)==="auth/user-not-found"?o="Bu e-posta adresi kayıtlı değil. Lütfen kayıt olun.":(a==null?void 0:a.code)==="auth/wrong-password"||(a==null?void 0:a.code)==="auth/invalid-credential"?o="E-posta adresi veya şifre hatalı. Lütfen bilgilerinizi kontrol edip tekrar deneyin.":(a==null?void 0:a.code)==="auth/invalid-email"?o="Geçersiz e-posta adresi. Lütfen geçerli bir e-posta adresi girin.":(a==null?void 0:a.code)==="auth/user-disabled"?o="Bu hesap devre dışı bırakılmış. Lütfen yöneticiye başvurun.":(a==null?void 0:a.code)==="auth/too-many-requests"?o="Çok fazla başarısız giriş denemesi. Lütfen birkaç dakika sonra tekrar deneyin.":(a==null?void 0:a.code)==="auth/network-request-failed"?o="İnternet bağlantınızı kontrol edin ve tekrar deneyin.":a!=null&&a.message&&(o=a.message),{success:!1,message:o,user:null}}}),w1=()=>p(void 0,null,function*(){try{return C?(yield Le(C),{success:!0}):{success:!1,message:"Firebase Auth is not initialized"}}catch(n){return console.error("Logout error:",n),{success:!1,message:(n&&typeof n=="object"&&"message"in n?n.message:void 0)||"Çıkış başarısız"}}}),v1=n=>p(void 0,null,function*(){try{if(!C||!S)throw new Error("Firebase is not initialized");try{const e=q(S,"users"),t=Q(e,ce("email","==",n),Ne(1)),r=yield J(t);if(r.empty)return{success:!1,message:"Bu e-posta adresi kayıtlı değil. Lütfen kayıt olun."};if(r.docs[0].data().deleted===!0)return{success:!1,message:"Bu hesap silinmiş. Lütfen yeni bir hesap oluşturun."}}catch(e){}return yield xg(C,n),{success:!0,message:"Şifre sıfırlama e-postası gönderildi. Lütfen e-postanızı ve spam kutusunu kontrol edin."}}catch(e){let t="Şifre sıfırlama başarısız";const r=e&&typeof e=="object"&&"code"in e?e:null;return(r==null?void 0:r.code)==="auth/user-not-found"?t="Bu e-posta adresi kayıtlı değil. Lütfen kayıt olun.":(r==null?void 0:r.code)==="auth/invalid-email"?t="Geçersiz e-posta adresi. Lütfen geçerli bir e-posta adresi girin.":(r==null?void 0:r.code)==="auth/too-many-requests"?t="Çok fazla istek yapıldı. Lütfen bir süre sonra tekrar deneyin.":r!=null&&r.message&&(t=r.message),{success:!1,message:t}}}),Ee=(n,e=!1)=>p(void 0,null,function*(){var t;try{if(!S)return console.error("Firestore is not initialized"),null;const r=yield ne(U(S,"users",n));if(!r.exists())return null;const i=r.data(),s=(C==null?void 0:C.currentUser)||null;if(i.deleted===!0){if(e)return{id:n,email:i.email||"",displayName:"Silinmiş Kullanıcı",fullName:"Silinmiş Kullanıcı",phone:null,dateOfBirth:null,role:[],departmentId:null,emailVerified:!1,createdAt:i.createdAt,updatedAt:i.updatedAt};if(s&&s.uid===n&&C)try{yield Le(C)}catch(m){}throw new Error("Bu hesap silinmiş. Giriş yapamazsınız.")}const{getRoles:o}=yield z(()=>p(void 0,null,function*(){const{getRoles:m}=yield Promise.resolve().then(()=>yu);return{getRoles:m}}),void 0),a=yield o(),c=new Set(a.map(m=>m.key)),u=i.role||[],d=u.filter(m=>c.has(m)),h=d.length>0?d:["personnel"];return JSON.stringify(u)!==JSON.stringify(h)&&(yield X(r.ref,{role:h})),{id:n,email:i.email||(s==null?void 0:s.email)||"",displayName:i.displayName||(s==null?void 0:s.displayName)||"",fullName:i.fullName,phone:i.phone,dateOfBirth:i.dateOfBirth,role:h,departmentId:i.departmentId,emailVerified:(s==null?void 0:s.emailVerified)||i.emailVerified||!1,createdAt:i.createdAt,updatedAt:i.updatedAt,lastLoginAt:i.lastLoginAt}}catch(r){const i=r&&typeof r=="object"?r:null;return(i==null?void 0:i.code)==="permission-denied"||(t=i==null?void 0:i.message)!=null&&t.includes("permissions"),null}}),xv=(n,e,t)=>p(void 0,null,function*(){var r;try{if(!S)throw new Error("Firestore is not initialized");const i=yield Ee(n),s={updatedAt:j()};Object.keys(e).forEach(a=>{const c=e[a];c!==void 0&&(s[a]=c)}),yield X(U(S,"users",n),s),e.displayName&&(C!=null&&C.currentUser)&&(yield ma(C.currentUser,{displayName:e.displayName}));const o=t||((r=C==null?void 0:C.currentUser)==null?void 0:r.uid);if(o&&i){const a=e.role&&JSON.stringify(e.role)!==JSON.stringify(i.role),c=Object.keys(e).some(u=>u!=="role");if(!a||c){const u=yield Ee(n);yield se("UPDATE","users",n,o,i,u,{action:"update_profile",changedFields:Object.keys(e).filter(d=>d!=="role")})}}return{success:!0}}catch(i){return console.error("Update user profile error:",i),{success:!1,message:(i&&typeof i=="object"&&"message"in i?i.message:void 0)||"Profil güncellenemedi"}}}),E1=xv,$p=new Map,T1=n=>{if(!C)return setTimeout(()=>n(null),0),()=>{};let e=!1;const t=setTimeout(()=>{e||(console.warn("Auth state timeout - callback(null) çağrılıyor"),e=!0,n(null))},3e3),r=$g(C,i=>{p(void 0,null,function*(){var s;try{if(e||(clearTimeout(t),e=!0),i){if(S)try{const o=yield ne(U(S,"users",i.uid));if(o.exists()&&o.data().deleted===!0){try{yield Le(C)}catch(c){}n(null);return}}catch(o){}try{let o=yield Ee(i.uid);if(!o){try{yield Le(C)}catch(d){}n(null);return}if(S&&i.emailVerified)try{const d=yield ne(U(S,"users",i.uid));if(d.exists()){const h=d.data(),m={};if(h.needsEmailVerification===!0&&(m.needsEmailVerification=!1),(!h.emailVerified||h.emailVerified===!1)&&(m.emailVerified=!0),Object.keys(m).length>0&&(m.updatedAt=j(),yield X(U(S,"users",i.uid),m),o=yield Ee(i.uid),!o)){n(null);return}}}catch(d){}const a=Date.now(),c=$p.get(i.uid)||0;if(a-c>1*60*1e3||c===0)try{const d=o.lastLoginAt;let h=!1;if(!d)h=!0;else try{let m;if(d instanceof $)m=d.toDate();else if(d&&typeof d=="object"&&"toDate"in d&&typeof d.toDate=="function")m=d.toDate();else if(d&&typeof d=="object"&&"_seconds"in d){const _=Number(d._seconds||0),w=Number(d._nanoseconds||0);m=new $(_,w).toDate()}else h=!0;!h&&m&&Math.floor((a-m.getTime())/6e4)>30&&(h=!0)}catch(m){h=!0}if(h){yield X(U(S,"users",i.uid),{lastLoginAt:j()}),$p.set(i.uid,a),yield new Promise(_=>setTimeout(_,200));const m=yield Ee(i.uid);m&&(o=m)}}catch(d){}n(o)}catch(o){const a=o&&typeof o=="object"?o:null;if((s=a==null?void 0:a.message)!=null&&s.includes("silinmiş")){try{yield Le(C)}catch(c){}n(null)}else n(null)}}else n(null)}catch(o){try{n(null)}catch(a){}}}).catch(s=>{try{n(null)}catch(o){}})});return()=>{e||clearTimeout(t),r()}},rt=()=>p(void 0,null,function*(){var n,e;try{if(!S)throw new Error("Firestore is not initialized");const{getAuth:t}=yield z(()=>p(void 0,null,function*(){const{getAuth:c}=yield Promise.resolve().then(()=>Ns);return{getAuth:c}}),void 0),{auth:r}=yield z(()=>p(void 0,null,function*(){const{auth:c}=yield Promise.resolve().then(()=>$s);return{auth:c}}),void 0),i=r||t();if(!(i!=null&&i.currentUser))return[];const{getRoles:s}=yield z(()=>p(void 0,null,function*(){const{getRoles:c}=yield Promise.resolve().then(()=>yu);return{getRoles:c}}),void 0),o=yield s(),a=new Set(o.map(c=>c.key));try{const c=Q(q(S,"users"),fe("displayName","asc"),Ne(500));return(yield J(c)).docs.map(h=>{const m=h.data();if(m.deleted===!0)return null;const _=m.role||[],w=_.filter(E=>a.has(E)),v=w.length>0?w:["personnel"];return JSON.stringify(_)!==JSON.stringify(v)&&X(h.ref,{role:v}).catch(E=>{console.error(`Error syncing roles for user ${h.id}:`,E)}),{id:h.id,email:m.email||"",displayName:m.displayName||m.fullName||"",fullName:m.fullName||m.displayName||"",phone:m.phone||"",dateOfBirth:m.dateOfBirth||"",role:v,departmentId:m.departmentId||"",pendingTeams:m.pendingTeams||[],approvedTeams:m.approvedTeams||[],teamLeaderIds:m.teamLeaderIds||[],emailVerified:m.emailVerified||!1,createdAt:m.createdAt||null,updatedAt:m.updatedAt||null,lastLoginAt:m.lastLoginAt||null}}).filter(h=>h!==null&&!!h.id&&!!(h.displayName||h.fullName||h.email))}catch(c){const{getRoles:u}=yield z(()=>p(void 0,null,function*(){const{getRoles:v}=yield Promise.resolve().then(()=>yu);return{getRoles:v}}),void 0),d=yield u(),h=new Set(d.map(v=>v.key)),m=Q(q(S,"users"),Ne(500));return(yield J(m)).docs.map(v=>{const E=v.data();if(E.deleted===!0)return null;const P=E.role||[],O=P.filter(x=>h.has(x)),M=O.length>0?O:["personnel"];return JSON.stringify(P)!==JSON.stringify(M)&&X(v.ref,{role:M}).catch(x=>{console.error(`Error syncing roles for user ${v.id}:`,x)}),{id:v.id,email:E.email||"",displayName:E.displayName||E.fullName||"",fullName:E.fullName||E.displayName||"",phone:E.phone||"",dateOfBirth:E.dateOfBirth||"",role:M,departmentId:E.departmentId||"",pendingTeams:E.pendingTeams||[],approvedTeams:E.approvedTeams||[],teamLeaderIds:E.teamLeaderIds||[],emailVerified:E.emailVerified||!1,createdAt:E.createdAt||null,updatedAt:E.updatedAt||null,lastLoginAt:E.lastLoginAt||null}}).filter(v=>v!==null&&!!v.id&&!!(v.displayName||v.fullName||v.email)).sort((v,E)=>{const P=(v.displayName||v.fullName||"").toLowerCase(),O=(E.displayName||E.fullName||"").toLowerCase();return P.localeCompare(O,"tr")})}}catch(t){const r=t&&typeof t=="object"?t:null;return(r==null?void 0:r.code)==="permission-denied"||(n=r==null?void 0:r.message)!=null&&n.includes("permissions")||(r==null?void 0:r.code)==="unavailable"||(e=r==null?void 0:r.message)!=null&&e.includes("network"),[]}}),I1=()=>p(void 0,null,function*(){var n;try{if(!C)throw new Error("Firebase Auth is not initialized");const e=new Tt;e.addScope("https://www.googleapis.com/auth/drive.file");const r=(yield _a(C,e)).user;try{const i=yield ne(U(S,"users",r.uid));if(i.exists()&&i.data().deleted===!0){try{yield Le(C)}catch(o){}return{success:!1,message:"Bu hesap silinmiş. Giriş yapamazsınız.",user:null}}}catch(i){console.error("Kullanıcı kontrolü hatası:",i)}try{let i=yield Ee(r.uid);if(!i){try{yield Le(C)}catch(a){}return{success:!1,message:"Bu hesap silinmiş. Giriş yapamazsınız.",user:null}}const s=i.lastLoginAt;yield X(U(S,"users",r.uid),{displayName:r.displayName,fullName:r.displayName,emailVerified:r.emailVerified,updatedAt:j(),lastLoginAt:j()}),yield new Promise(a=>setTimeout(a,100));const o=yield Ee(r.uid);o&&(i=o);try{const a=new Date().toISOString(),c=s?s instanceof $?s.toDate().toISOString():String(s):null;let u=0;const d=2;for(;u<=d;)try{yield se("UPDATE","user_logins",r.uid,r.uid,c?{lastLoginAt:c}:null,null,{action:"LOGIN",method:"GOOGLE",email:r.email||null,timestamp:a});break}catch(h){u++,u>d||(yield new Promise(m=>setTimeout(m,100*u)))}}catch(a){}return{success:!0,user:i}}catch(i){if(i instanceof Error&&((n=i.message)!=null&&n.includes("silinmiş"))){try{yield Le(C)}catch(o){}return{success:!1,message:"Bu hesap silinmiş. Giriş yapamazsınız.",user:null}}const s={id:r.uid,email:r.email||"",displayName:r.displayName||"",fullName:r.displayName||"",role:["viewer"],emailVerified:r.emailVerified,createdAt:j(),updatedAt:j(),pendingTeams:[],approvedTeams:[]};return yield un(U(S,"users",r.uid),s),{success:!0,user:s}}}catch(e){console.error("Google Sign-In error:",e);let t="Google ile giriş başarısız";const r=e&&typeof e=="object"?e:null;return(r==null?void 0:r.code)==="auth/popup-closed-by-user"?t="Google giriş penceresi kapatıldı.":r!=null&&r.message&&(t=r.message),{success:!1,message:t,user:null}}}),A1=()=>p(void 0,null,function*(){try{if(!C)return{success:!1,message:"Firebase Auth is not initialized"};const n=C.currentUser;return n?n.emailVerified?{success:!1,message:"Email zaten doğrulanmış"}:(yield Ps(n),{success:!0,message:"Doğrulama e-postası gönderildi. Lütfen e-postanızı ve spam kutusunu kontrol edin."}):{success:!1,message:"Kullanıcı oturum açmamış"}}catch(n){return{success:!1,message:(n&&typeof n=="object"&&"message"in n?n.message:void 0)||"Doğrulama e-postası gönderilemedi"}}}),R1=(n,e)=>p(void 0,null,function*(){var t,r,i;try{if(!C||!S)throw new Error("Firebase is not initialized");const s=yield Ee(n,!0);if(!s)throw new Error("Kullanıcı bulunamadı");const o=yield ne(U(S,"users",n));if(o.exists()&&((t=o.data())==null?void 0:t.deleted)===!0)throw new Error("Bu kullanıcı zaten silinmiş.");const a=yield Ee(e);if(!a||!((r=a.role)!=null&&r.includes("super_admin"))&&!((i=a.role)!=null&&i.includes("main_admin")))throw new Error("Kullanıcı silme yetkiniz yok. Sadece ana yöneticiler kullanıcı silebilir.");if(n===e)throw new Error("Kendi hesabınızı silemezsiniz.");const c={email:s.email,displayName:s.displayName,fullName:s.fullName,phone:s.phone,role:s.role,departmentId:s.departmentId};try{const{removeUserFromAllTasks:d}=yield z(()=>p(void 0,null,function*(){const{removeUserFromAllTasks:h}=yield Promise.resolve().then(()=>TO);return{removeUserFromAllTasks:h}}),void 0);yield d(n)}catch(d){}try{const{deleteUserLogs:d}=yield z(()=>p(void 0,null,function*(){const{deleteUserLogs:h}=yield Promise.resolve().then(()=>d1);return{deleteUserLogs:h}}),void 0);yield d(n)}catch(d){}try{const{deleteUserNotifications:d}=yield z(()=>p(void 0,null,function*(){const{deleteUserNotifications:h}=yield Promise.resolve().then(()=>bt);return{deleteUserNotifications:h}}),void 0);typeof d=="function"&&(yield d(n))}catch(d){}try{const{getDepartments:d,updateDepartment:h}=yield z(()=>p(void 0,null,function*(){const{getDepartments:_,updateDepartment:w}=yield Promise.resolve().then(()=>pu);return{getDepartments:_,updateDepartment:w}}),void 0),m=yield d();for(const _ of m)_.managerId===n&&(yield h(_.id,{managerId:null}))}catch(d){}const u=U(S,"users",n);yield X(u,{deleted:!0,deletedAt:j(),deletedBy:e,displayName:"Silinmiş Kullanıcı",fullName:"Silinmiş Kullanıcı",phone:null,dateOfBirth:null,role:[],departmentId:null,pendingTeams:[],approvedTeams:[],teamLeaderIds:[],_originalData:c});try{const{logSecurityEvent:d}=yield z(()=>p(void 0,null,function*(){const{logSecurityEvent:h}=yield Promise.resolve().then(()=>Mv);return{logSecurityEvent:h}}),void 0);yield d("ACCOUNT_DELETE",e,{targetUserId:n,deletedAt:new Date().toISOString(),reason:"Kullanıcı yönetici tarafından silindi",originalEmail:s==null?void 0:s.email})}catch(d){}}catch(s){throw console.error("Delete user error:",s),s}}),Ae=Object.freeze(Object.defineProperty({__proto__:null,deleteUser:R1,getAllUsers:rt,getUserProfile:Ee,login:y1,logout:w1,onAuthChange:T1,register:_1,resetPassword:v1,sendVerificationEmail:A1,signInWithGoogle:I1,updateFirebaseUserProfile:E1,updateUserProfile:xv},Symbol.toStringTag,{value:"Module"})),Mn="role_permissions",Ii="roles",b1=5*60*1e3,Ba=new Map,Ct=new Map,qp=new Map,$a=new Set,Uv=n=>{const e=Ba.get(n);return e?Date.now()-e>b1:!0},us=n=>{Ba.set(n,Date.now())},S1=n=>{if(n)for(const e of Ct.keys())e.startsWith(`${n}:`)&&(Ct.delete(e),Ba.delete(e));else Ct.clear(),Ba.clear();$a.forEach(e=>{try{e()}catch(t){}})},k1=n=>($a.add(n),()=>{$a.delete(n)}),_u=["tasks","users","departments","orders","production_orders","customers","products","projects","audit_logs","role_permissions","raw_materials","warranty"],Fv=[{id:"super_admin",key:"super_admin",label:"Süper Yönetici",color:"bg-red-500",isSystem:!0},{id:"team_leader",key:"team_leader",label:"Ekip Lideri",color:"bg-blue-500",isSystem:!0},{id:"personnel",key:"personnel",label:"Personel",color:"bg-green-500",isSystem:!0}],Bv=()=>p(void 0,null,function*(){var n;try{const{getAuth:e}=yield z(()=>p(void 0,null,function*(){const{getAuth:o}=yield Promise.resolve().then(()=>Ns);return{getAuth:o}}),void 0),{auth:t}=yield z(()=>p(void 0,null,function*(){const{auth:o}=yield Promise.resolve().then(()=>$s);return{auth:o}}),void 0),r=t||e();if(!(r!=null&&r.currentUser))return;const i=q(re,Ii);if((yield J(i)).empty)for(const o of Fv)yield un(U(re,Ii,o.key),o)}catch(e){const t=e&&typeof e=="object"?e:null;(t==null?void 0:t.code)!=="permission-denied"&&((n=t==null?void 0:t.message)!=null&&n.includes("permissions"))}}),$v=()=>p(void 0,null,function*(){var n;try{const{getAuth:e}=yield z(()=>p(void 0,null,function*(){const{getAuth:o}=yield Promise.resolve().then(()=>Ns);return{getAuth:o}}),void 0),{auth:t}=yield z(()=>p(void 0,null,function*(){const{auth:o}=yield Promise.resolve().then(()=>$s);return{auth:o}}),void 0),r=t||e();r!=null&&r.currentUser&&(yield Bv());const i=q(re,Ii);return(yield J(i)).docs.map(o=>F({id:o.id},o.data()))}catch(e){const t=e&&typeof e=="object"?e:null;return(t==null?void 0:t.code)!=="permission-denied"&&((n=t==null?void 0:t.message)!=null&&n.includes("permissions")),Fv}}),C1=n=>p(void 0,null,function*(){try{const e=n.key.toLowerCase().replace(/\s+/g,"_"),t=le(F({},n),{key:e,isSystem:!1});yield un(U(re,Ii,e),t);const r=q(re,Mn);for(const i of _u){const s={role:e,resource:i,canCreate:!1,canRead:!0,canUpdate:!1,canDelete:!1,createdAt:$.now(),updatedAt:$.now()},o=Object.fromEntries(Object.entries(s).filter(([a,c])=>c!==void 0));yield we(r,o)}}catch(e){throw new Error(e instanceof Error?e.message:"Rol eklenemedi")}}),P1=n=>p(void 0,null,function*(){try{const e=yield ne(U(re,Ii,n));if(e.exists()&&e.data().isSystem)throw new Error("Sistem rolleri silinemez");const t=q(re,"users"),r=Q(t),i=yield J(r),{writeBatch:s}=yield z(()=>p(void 0,null,function*(){const{writeBatch:m}=yield Promise.resolve().then(()=>VS);return{writeBatch:m}}),void 0);let o=s(re),a=0;const c=500;for(const m of i.docs){const w=m.data().role||[];if(w.includes(n)){const v=w.filter(P=>P!==n),E=v.length>0?v:["personnel"];o.update(m.ref,{role:E}),a++,a>=c&&(yield o.commit(),a=0,o=s(re))}}a>0&&(yield o.commit()),yield We(U(re,Ii,n));const u=q(re,Mn),d=Q(u,ce("role","==",n)),h=yield J(d);for(const m of h.docs)yield We(U(re,Mn,m.id))}catch(e){throw new Error(e instanceof Error?e.message:"Rol silinemedi")}}),N1=()=>p(void 0,null,function*(){try{const n=q(re,Mn),e=yield J(n),t=yield $v(),r=e.docs.map(s=>s.data()),i=[];for(const s of t){const o=s.key;for(const a of _u)if(!r.some(u=>u.role===o&&u.resource===a)){let u=!1,d=!0,h=!1,m=!1,_={};const w=qa(a),v=Object.keys(w);o==="super_admin"?(u=!0,d=!0,h=!0,m=!0,v.forEach(P=>{_[P]=!0})):o==="team_leader"?(u=a!=="role_permissions",d=!0,h=a!=="role_permissions",m=a!=="role_permissions"&&a!=="audit_logs",a!=="role_permissions"&&v.forEach(P=>{_[P]=!0})):o==="personnel"&&(u=["production_orders"].includes(a),d=!0,h=["tasks","production_orders"].includes(a),m=!1,a==="tasks"?(_.canAddComment=!0,_.canAddAttachment=!0,_.canChangeStatus=!0):a==="production_orders"&&(_.canViewSchedule=!0));const E={role:o,resource:a,canCreate:u,canRead:d,canUpdate:h,canDelete:m,createdAt:$.now(),updatedAt:$.now()};Object.keys(_).length>0&&(E.subPermissions=_),i.push(E)}}if(i.length>0)for(const s of i){const o={};for(const[a,c]of Object.entries(s))if(c!==void 0)if(typeof c=="object"&&c!==null&&!(c instanceof $)){const u=Object.fromEntries(Object.entries(c).filter(([d,h])=>h!==void 0));Object.keys(u).length>0&&(o[a]=u)}else o[a]=c;yield we(n,o)}if(e.size===0&&i.length===0){const s=[];for(const o of t){const a=o.key;for(const c of _u){const u=qa(c),d=Object.keys(u);let h={};if(a==="super_admin"){d.forEach(_=>{h[_]=!0});const m={role:a,resource:c,canCreate:!0,canRead:!0,canUpdate:!0,canDelete:!0,createdAt:$.now(),updatedAt:$.now()};Object.keys(h).length>0&&(m.subPermissions=h),s.push(m)}else if(a==="team_leader"){c!=="role_permissions"&&d.forEach(_=>{h[_]=!0});const m={role:a,resource:c,canCreate:c!=="role_permissions",canRead:!0,canUpdate:c!=="role_permissions",canDelete:c!=="role_permissions"&&c!=="audit_logs",createdAt:$.now(),updatedAt:$.now()};Object.keys(h).length>0&&(m.subPermissions=h),s.push(m)}else if(a==="personnel"){c==="tasks"?(h.canEditOwn=!0,h.canDeleteOwn=!0,h.canAddComment=!0,h.canAddAttachment=!0):c==="production_orders"&&(h.canViewSchedule=!0);const m={role:a,resource:c,canCreate:["tasks","production_orders"].includes(c),canRead:!0,canUpdate:["tasks","production_orders"].includes(c),canDelete:!1,createdAt:$.now(),updatedAt:$.now()};Object.keys(h).length>0&&(m.subPermissions=h),s.push(m)}else s.push({role:a,resource:c,canCreate:!1,canRead:!0,canUpdate:!1,canDelete:!1,createdAt:$.now(),updatedAt:$.now()})}}for(const o of s){const a={};for(const[c,u]of Object.entries(o))if(u!==void 0)if(typeof u=="object"&&u!==null&&!(u instanceof $)){const d=Object.fromEntries(Object.entries(u).filter(([h,m])=>m!==void 0));Object.keys(d).length>0&&(a[c]=d)}else a[c]=u;yield we(n,a)}}}catch(n){}}),qv=()=>p(void 0,null,function*(){try{const n=q(re,Mn),e=yield J(n);for(const t of e.docs){const r=t.data(),i=qa(r.resource),s=Object.keys(i);let o=!1,a=F({},r.subPermissions||{});if(r.role==="super_admin"&&s.length>0?s.forEach(c=>{a[c]!==!0&&(a[c]=!0,o=!0)}):r.role==="team_leader"&&r.resource!=="role_permissions"?(s.length>0&&s.forEach(c=>{a[c]!==!0&&(a[c]=!0,o=!0)}),r.canCreate!==!0&&(o=!0),r.canUpdate!==!0&&(o=!0),r.resource!=="audit_logs"&&r.canDelete!==!0&&(o=!0)):r.role==="personnel"&&(r.resource==="tasks"?["canEditOwn","canDeleteOwn","canAddComment","canAddAttachment"].forEach(u=>{a[u]!==!0&&(a[u]=!0,o=!0)}):r.resource==="production_orders"&&a.canViewSchedule!==!0&&(a.canViewSchedule=!0,o=!0)),o){const c={updatedAt:$.now()};r.role==="team_leader"&&r.resource!=="role_permissions"&&(r.canCreate!==!0&&(c.canCreate=!0),r.canUpdate!==!0&&(c.canUpdate=!0),r.resource!=="audit_logs"&&r.canDelete!==!0&&(c.canDelete=!0)),Object.keys(a).length>0&&(c.subPermissions=a);const u=Object.fromEntries(Object.entries(c).filter(([d,h])=>h!==void 0));yield X(U(re,Mn,t.id),u)}}}catch(n){}}),D1=()=>p(void 0,null,function*(){try{yield Bv(),yield N1(),yield qv();const n=q(re,Mn),t=(yield J(n)).docs.map(r=>F({id:r.id},r.data()));return t.forEach(r=>{const i=`${r.role}:${r.resource}`;(!Ct.has(i)||Uv(i))&&(Ct.set(i,r),us(i))}),t}catch(n){throw new Error(n instanceof Error?n.message:"Rol yetkileri yüklenemedi")}}),O1=(n,e,t=!0)=>p(void 0,null,function*(){const r=`${n}:${e}`;try{const i=q(re,Mn),s=Q(i,ce("role","==",n),ce("resource","==",e));if(!t){const o=yield J(s);if(o.empty)return null;const a=o.docs[0];return F({id:a.id},a.data())}if(Ct.has(r))return Uv(r)&&us(r),Ct.get(r)||null;if(!qp.has(r)){const o=yield J(s);let a=null;if(!o.empty){const u=o.docs[0];a=F({id:u.id},u.data())}Ct.set(r,a),us(r);const c=lr(s,u=>{if(u.empty)Ct.set(r,null);else{const d=u.docs[0],h=F({id:d.id},d.data());Ct.set(r,h)}us(r),$a.forEach(d=>d())},u=>{});return qp.set(r,c),a}return us(r),Ct.get(r)||null}catch(i){throw new Error(i instanceof Error?i.message:"Yetki yüklenemedi")}}),qa=n=>({tasks:{canAssign:"Görev atama",canChangeStatus:"Durum değiştirme",canAddComment:"Yorum ekleme",canAddAttachment:"Dosya ekleme",canViewAll:"Tüm görevleri görme",canEditOwn:"Kendi görevlerini düzenleme",canDeleteOwn:"Kendi görevlerini silme",canApprove:"Görev onaylama",canAddChecklist:"Checklist ekleme",canEditChecklist:"Checklist düzenleme/silme",canViewPrivate:"Gizli görevleri görme"},users:{canChangeRole:"Rol değiştirme",canViewSensitiveData:"Hassas verileri görme",canViewAuditLogs:"Denetim kayıtlarını görme"},departments:{canAssignMembers:"Üye atama",canChangeLeader:"Lider değiştirme",canViewAll:"Tüm departmanları görme",canApproveTeamRequest:"Ekip taleplerini onaylama",canViewTeamManagement:"Ekip yönetimi menüsünü görme"},orders:{canApprove:"Onaylama",canCancel:"İptal etme",canExport:"Dışa aktarma",canViewFinancials:"Finansal bilgileri görme",canEditPrice:"Fiyat düzenleme"},production_orders:{canStartProduction:"Üretimi başlatma",canCompleteProduction:"Üretimi tamamlama",canViewSchedule:"Üretim planını görme",canEditSchedule:"Üretim planını düzenleme"},customers:{canViewFinancials:"Finansal bilgileri görme",canEditFinancials:"Finansal bilgileri düzenleme",canExport:"Dışa aktarma",canViewHistory:"Geçmiş kayıtları görme"},products:{canEditPrice:"Fiyat düzenleme",canEditStock:"Stok düzenleme",canViewCost:"Maliyet görme",canEditCost:"Maliyet düzenleme",canExport:"Dışa aktarma"},projects:{canAssignMembers:"Üye atama",canChangeStatus:"Durum değiştirme",canViewAll:"Tüm projeleri görme",canEditBudget:"Bütçe düzenleme",canViewPrivate:"Gizli projeleri görme"},audit_logs:{canViewAll:"Tüm kayıtları görme",canExport:"Dışa aktarma",canDelete:"Kayıt silme"},role_permissions:{canCreateRoles:"Rol oluşturma",canDeleteRoles:"Rol silme",canEditSystemRoles:"Sistem rollerini düzenleme",canViewAdminPanel:"Admin paneli menüsünü görme"},raw_materials:{canEditStock:"Stok düzenleme",canViewCost:"Maliyet görme",canEditCost:"Maliyet düzenleme",canExport:"Dışa aktarma",canViewTransactions:"İşlem geçmişini görme",canCreateTransactions:"Stok işlemi oluşturma"},warranty:{canApprove:"Garanti onaylama",canReject:"Garanti reddetme",canViewFinancials:"Finansal bilgileri görme",canExport:"Dışa aktarma",canViewHistory:"Geçmiş kayıtları görme"}})[n]||{},L1=(n,e)=>p(void 0,null,function*(){try{const t=U(re,Mn,n),r=yield ne(t);if(r.exists()){const s=r.data(),o=`${s.role}:${s.resource}`;Ct.delete(o)}const i={};for(const[s,o]of Object.entries(e))if(o!==void 0)if(typeof o=="object"&&o!==null&&!(o instanceof $)){const a=Object.fromEntries(Object.entries(o).filter(([c,u])=>u!==void 0));Object.keys(a).length>0&&(i[s]=a)}else i[s]=o;yield X(t,le(F({},i),{updatedAt:$.now()}))}catch(t){throw new Error(t instanceof Error?t.message:"Yetki güncellenemedi")}}),yu=Object.freeze(Object.defineProperty({__proto__:null,addRole:C1,clearPermissionCache:S1,deleteRole:P1,getPermission:O1,getRolePermissions:D1,getRoles:$v,getSubPermissionsForResource:qa,onPermissionCacheChange:k1,updatePermission:L1,updatePermissionsWithSubPermissions:qv},Symbol.toStringTag,{value:"Module"})),jv=n=>p(void 0,null,function*(){let e="http://localhost:3000/api/send-email";const t="https://turkuast.com/api/send-email/";e?e.includes("localhost")||e.includes("127.0.0.1")?e=t:!e.endsWith("/send-email")&&!e.endsWith("/send-email/")?e=e.replace(/\/$/,"")+"/send-email/":e.endsWith("/send-email")&&!e.endsWith("/send-email/")&&(e=e+"/"):e=t;const r=(i,s,o=8e3)=>p(void 0,null,function*(){try{return yield Promise.race([fetch(i,le(F({},s),{headers:le(F({},s.headers),{Accept:"application/json","Content-Type":"application/json"}),mode:"cors",credentials:"omit"})),new Promise((c,u)=>setTimeout(()=>u(new Error("Timeout")),o))])}catch(a){const c=a instanceof Error?a.message:String(a);return c.includes("CORS")||c.includes("Failed to fetch")||c.includes("ERR_")||c.includes("Redirect is not allowed")||c.includes("preflight")?Promise.reject(new Error("NetworkError")):Promise.reject(a)}});if(e)try{const i=yield r(e,{method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify({to:n.to,subject:n.subject,html:n.html})});if(i.ok){const s=i.headers.get("content-type");if(s&&s.includes("application/json")){const o=yield i.json();if(o.success)return{success:!0};throw new Error(o.error||"Email API başarısız")}else throw new Error("Email API JSON döndürmüyor")}else{const s=yield i.text().catch(()=>"");throw new Error(`Email API hatası (${i.status}): ${s.substring(0,100)}`)}}catch(i){const s=i instanceof Error?i.message:String(i);!s.includes("NetworkError")&&!s.includes("ERR_")&&s.includes("CORS")}try{const i=yield r(t,{method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify({to:n.to,subject:n.subject,html:n.html})}),s=i.headers.get("content-type");if(!s||!s.includes("application/json"))return{success:!1,error:"E-posta servisi şu an meşgul"};const o=yield i.json().catch(()=>({}));return i.ok&&o.success?{success:!0}:{success:!1,error:o.error||`E-posta servisi yanıt vermedi (${i.status})`}}catch(i){return{success:!1,error:"E-posta servisine erişilemedi. Lütfen daha sonra tekrar deneyin veya sistem yöneticisiyle iletişime geçin."}}}),eL=n=>p(void 0,null,function*(){if(!n||!n.includes("@"))return{success:!1,error:"Geçerli bir e-posta adresi giriniz",details:{testEmail:n,timestamp:new Date().toISOString()}};try{const e="http://localhost:3000/api/send-email",t=e.includes("localhost")||e.includes("127.0.0.1");let r;t?r="https://turkuast.com/api/send-email":r="http://localhost:3000/api/send-email";const i=yield jv({to:n,subject:"Turkuast ERP - E-posta Servisi Test",html:`
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
      `});return{success:i.success,error:i.error,details:{testEmail:n,timestamp:new Date().toISOString(),primaryUrl:e||"Yok",fallbackUrl:r,usedUrl:i.success?e||r:"Hiçbiri çalışmadı"}}}catch(e){return{success:!1,error:e instanceof Error?e.message:String(e)||"E-posta testi başarısız oldu",details:{testEmail:n,timestamp:new Date().toISOString(),error:String(e)}}}}),V1=(n,e,t,r,i,s)=>p(void 0,null,function*(){const o="https://turkuast-erp.web.app";let a=`${o}/tasks`;r==="system"&&s&&(s.requestType||t!=null&&t.includes("talep"))?a=`${o}/requests`:i&&["task_assigned","task_updated","task_completed","task_created","task_approval"].includes(r)?a=`${o}/tasks?taskId=${i}`:i&&["order_created","order_updated"].includes(r)?a=`${o}/orders`:r==="role_changed"&&(a=`${o}/admin`);const c=_=>{if(!_)return"";try{if(_&&typeof _=="object"&&"seconds"in _&&"nanoseconds"in _){const v=_;return new Date(v.seconds*1e3+(v.nanoseconds||0)/1e6).toLocaleDateString("tr-TR",{day:"numeric",month:"long",year:"numeric",hour:"2-digit",minute:"2-digit"})}if(_ instanceof Date)return _.toLocaleDateString("tr-TR",{day:"numeric",month:"long",year:"numeric",hour:"2-digit",minute:"2-digit"});if(typeof _=="string"){if(_.includes("Timestamp(")||_.includes("seconds=")){const v=_.match(/seconds=(\d+)/);if(v){const E=parseInt(v[1],10);return new Date(E*1e3).toLocaleDateString("tr-TR",{day:"numeric",month:"long",year:"numeric",hour:"2-digit",minute:"2-digit"})}}return new Date(_).toLocaleDateString("tr-TR",{day:"numeric",month:"long",year:"numeric",hour:"2-digit",minute:"2-digit"})}if(typeof _=="object"&&_!==null&&"seconds"in _){const v=_;return new Date(v.seconds*1e3+(v.nanoseconds||0)/1e6).toLocaleDateString("tr-TR",{day:"numeric",month:"long",year:"numeric",hour:"2-digit",minute:"2-digit"})}const w=String(_);if(w.includes("Timestamp(")||w.includes("seconds=")){const v=w.match(/seconds=(\d+)/);if(v){const E=parseInt(v[1],10);return new Date(E*1e3).toLocaleDateString("tr-TR",{day:"numeric",month:"long",year:"numeric",hour:"2-digit",minute:"2-digit"})}}return""}catch(w){return""}},u=_=>!_||typeof _!="string"?String(_||""):{pending:"Beklemede",in_progress:"Devam Ediyor",completed:"Tamamlandı",cancelled:"İptal Edildi",draft:"Taslak",confirmed:"Onaylandı",in_production:"Üretimde",quality_check:"Kalite Kontrol",shipped:"Kargoda",delivered:"Teslim Edildi",on_hold:"Beklemede"}[_]||_;let d="";if(s){const _=[];if(r==="system"&&s.requestType){const v={leave:"İzin",purchase:"Satın Alma",advance:"Avans",expense:"Gider",other:"Diğer"}[s.requestType]||s.requestType;_.push(`<div style="background: #fff; padding: 20px; border-radius: 8px; border-left: 4px solid #667eea; margin: 15px 0;">
        <h3 style="color: #333; margin-top: 0; margin-bottom: 15px; font-size: 18px;">Talep Detayları</h3>
        <div style="margin-bottom: 12px;"><strong style="color: #333;">Talep Tipi:</strong> <span style="color: #666;">${v}</span></div>
        ${s.requestTitle?`<div style="margin-bottom: 12px;"><strong style="color: #333;">Talep Başlığı:</strong> <span style="color: #666;">${s.requestTitle}</span></div>`:""}
        ${s.requestDescription?`<div style="margin-bottom: 12px;"><strong style="color: #333;">Açıklama:</strong><br><span style="color: #666; line-height: 1.6;">${s.requestDescription}</span></div>`:""}
        ${s.amount?`<div style="margin-bottom: 12px;"><strong style="color: #333;">Tutar:</strong> <span style="color: #666;">${s.amount} ${s.currency||"TL"}</span></div>`:""}
        ${s.creatorName?`<div style="margin-bottom: 12px;"><strong style="color: #333;">Talep Eden:</strong> <span style="color: #666;">${s.creatorName}</span></div>`:""}
        ${s.createdAt?`<div style="margin-bottom: 0;"><strong style="color: #333;">Talep Tarihi:</strong> <span style="color: #666;">${c(s.createdAt)}</span></div>`:""}
      </div>`)}if(s.oldStatus&&s.newStatus){const w=u(s.oldStatus),v=u(s.newStatus);_.push(`<div style="background: #fff; padding: 15px; border-radius: 8px; border-left: 4px solid #667eea; margin: 15px 0;"><strong style="color: #333;">Durum Değişikliği:</strong><br><span style="color: #666;">${w} → ${v}</span></div>`)}if(s.updatedAt||s.createdAt){const w=c(s.updatedAt||s.createdAt);w&&_.push(`<div style="background: #fff; padding: 15px; border-radius: 8px; border-left: 4px solid #10b981; margin: 15px 0;"><strong style="color: #333;">İşlem Zamanı:</strong><br><span style="color: #666;">${w}</span></div>`)}if(s.priority){const{getPriorityLabel:w}=yield z(()=>p(void 0,null,function*(){const{getPriorityLabel:E}=yield import("./priority-DjPsOOkO.js");return{getPriorityLabel:E}}),[]),v=w(s.priority);_.push(`<div style="background: #fff; padding: 15px; border-radius: 8px; border-left: 4px solid #f59e0b; margin: 15px 0;"><strong style="color: #333;">Öncelik:</strong><br><span style="color: #666;">${v}</span></div>`)}if(s.dueDate){const w=c(s.dueDate);w&&_.push(`<div style="background: #fff; padding: 15px; border-radius: 8px; border-left: 4px solid #ef4444; margin: 15px 0;"><strong style="color: #333;">Bitiş Tarihi:</strong><br><span style="color: #666;">${w}</span></div>`)}_.length>0&&(d=`<div style="margin: 20px 0;">${_.join("")}</div>`)}const h=`
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
  `.trim();return yield jv({to:n,subject:`Turkuast ERP - ${e}`,html:h})}),M1=(n,e)=>p(void 0,null,function*(){try{let t=Q(q(S,"notifications"),ce("userId","==",n));return e!=null&&e.unreadOnly&&(t=Q(t,ce("read","==",!1))),t=Q(t,fe("createdAt","desc")),e!=null&&e.limit&&(t=Q(t,Ne(e.limit))),(yield J(t)).docs.map(i=>F({id:i.id},i.data()))}catch(t){return typeof t=="object"&&t!==null&&"code"in t&&t.code==="failed-precondition"&&"message"in t&&typeof t.message=="string"&&t.message.includes("index")?[]:[]}}),Oe=n=>p(void 0,null,function*(){try{const e=yield we(q(S,"notifications"),le(F({},n),{createdAt:j()})),t=yield ne(e);if(!t.exists())throw new Error("Bildirim oluşturulamadı");const r=F({id:t.id},t.data());return Promise.resolve().then(()=>p(void 0,null,function*(){try{const i=yield ne(U(S,"users",n.userId));if(i.exists()){const s=i.data();if(s!=null&&s.email)try{yield V1(s.email,n.title,n.message,n.type,n.relatedId||null,n.metadata||null)}catch(o){}}}catch(i){}})).catch(()=>{}),r}catch(e){throw e}}),rh=(n,e)=>p(void 0,null,function*(){try{yield X(U(S,"notifications",n),e)}catch(t){throw t}}),x1=n=>p(void 0,null,function*(){try{yield X(U(S,"notifications",n),{read:!0})}catch(e){throw e}}),U1=n=>p(void 0,null,function*(){try{const e=Q(q(S,"notifications"),ce("userId","==",n),ce("read","==",!1)),r=(yield J(e)).docs.map(i=>X(i.ref,{read:!0}));yield Promise.all(r)}catch(e){throw e}}),F1=n=>p(void 0,null,function*(){try{const e=Q(q(S,"notifications"),ce("userId","==",n)),t=yield J(e);if(t.empty)return;const r=t.docs.map(i=>We(U(S,"notifications",i.id)));yield Promise.all(r)}catch(e){}}),B1=(n,e={},t)=>{try{const r=q(S,"notifications");let s=(()=>{const a=[ce("userId","==",n),fe("createdAt","desc")];return e!=null&&e.unreadOnly&&a.push(ce("read","==",!1)),e!=null&&e.limit&&a.push(Ne(e.limit)),Q(r,...a)})();return lr(s,a=>{try{const c=a.docs.map(u=>F({id:u.id},u.data()));t(c)}catch(c){t([])}},a=>{var c,u,d,h;if((a==null?void 0:a.code)==="unavailable"||(a==null?void 0:a.code)==="not-found"||(c=a==null?void 0:a.message)!=null&&c.includes("404")||(u=a==null?void 0:a.message)!=null&&u.includes("network")||(d=a==null?void 0:a.message)!=null&&d.includes("transport errored")){t([]);return}if((a==null?void 0:a.code)==="failed-precondition"||(h=a==null?void 0:a.message)!=null&&h.includes("index"))try{const m=Q(r,ce("userId","==",n),fe("createdAt","desc"));return lr(m,w=>{try{let v=w.docs.map(E=>F({id:E.id},E.data()));e!=null&&e.unreadOnly&&(v=v.filter(E=>!E.read)),e!=null&&e.limit&&(v=v.slice(0,e.limit)),t(v)}catch(v){t([])}},w=>{t([])})}catch(m){t([])}else t([])})}catch(r){return()=>{}}},bt=Object.freeze(Object.defineProperty({__proto__:null,createNotification:Oe,deleteUserNotifications:F1,getNotifications:M1,markAllNotificationsAsRead:U1,markNotificationAsRead:x1,subscribeToNotifications:B1,updateNotification:rh},Symbol.toStringTag,{value:"Module"})),$1=(n,e)=>{const t=n&&typeof n=="object"?n:null;t!=null&&t.code,t!=null&&t.message,e.operation,e.collection,e.documentId,e.userId,new Date().toISOString(),zv(e.data)},zv=n=>{if(!n||typeof n!="object")return n;const e=["password","token","secret","key","apiKey"],t=F({},n);for(const r of e)r in t&&(t[r]="[REDACTED]");for(const r in t)typeof t[r]=="object"&&t[r]!==null&&(t[r]=zv(t[r]));return t},en=(n,e)=>{var r,i,s;const t=n&&typeof n=="object"?n:null;if((t==null?void 0:t.code)==="permission-denied"||(t==null?void 0:t.code)===7||(r=t==null?void 0:t.message)!=null&&r.includes("Missing or insufficient permissions")||(i=t==null?void 0:t.message)!=null&&i.includes("permission-denied")||(s=t==null?void 0:t.message)!=null&&s.includes("PERMISSION_DENIED")){$1(n,e);const o="Yetkiniz yok. Bu işlemi yapmak için ekip lideri veya yöneticiye ulaşabilirsiniz.";return new Error(o)}return n instanceof Error?n:new Error((t==null?void 0:t.message)||"Bilinmeyen hata")},tn=n=>{var t,r,i;const e=n&&typeof n=="object"?n:null;return(e==null?void 0:e.code)==="permission-denied"||(e==null?void 0:e.code)===7||((t=e==null?void 0:e.message)==null?void 0:t.includes("Missing or insufficient permissions"))||((r=e==null?void 0:e.message)==null?void 0:r.includes("permission-denied"))||((i=e==null?void 0:e.message)==null?void 0:i.includes("PERMISSION_DENIED"))},Sr="projects",q1=n=>p(void 0,null,function*(){var e;try{let t=Q(q(S,Sr),fe("createdAt","desc"));return n!=null&&n.status&&(t=Q(t,ce("status","==",n.status))),n!=null&&n.createdBy&&(t=Q(t,ce("createdBy","==",n.createdBy))),(yield J(t)).docs.map(i=>F({id:i.id},i.data()))}catch(t){const r=t&&typeof t=="object"?t:null;if((r==null?void 0:r.code)==="failed-precondition"||(e=r==null?void 0:r.message)!=null&&e.includes("index"))try{const i=Q(q(S,Sr),fe("createdAt","desc"));let o=(yield J(i)).docs.map(a=>F({id:a.id},a.data()));return n!=null&&n.status&&(o=o.filter(a=>a.status===n.status)),n!=null&&n.createdBy&&(o=o.filter(a=>a.createdBy===n.createdBy)),o}catch(i){let o=(yield J(q(S,Sr))).docs.map(a=>F({id:a.id},a.data()));return n!=null&&n.status&&(o=o.filter(a=>a.status===n.status)),n!=null&&n.createdBy&&(o=o.filter(a=>a.createdBy===n.createdBy)),o.sort((a,c)=>{var h,m;const u=((h=a.createdAt)==null?void 0:h.toMillis())||0;return(((m=c.createdAt)==null?void 0:m.toMillis())||0)-u}),o}throw t}}),Ai=n=>p(void 0,null,function*(){try{const e=yield ne(U(S,Sr,n));return e.exists()?F({id:e.id},e.data()):null}catch(e){throw e}}),j1=n=>p(void 0,null,function*(){try{const e=le(F({},n),{createdAt:j(),updatedAt:j()}),t=yield we(q(S,Sr),e),r=yield Ai(t.id);if(!r)throw new Error("Proje oluşturulamadı");return yield se("CREATE","projects",t.id,n.createdBy,null,r),r}catch(e){throw e}}),z1=(n,e,t)=>p(void 0,null,function*(){try{const r=yield Ai(n);if(!r)throw new Error("Proje bulunamadı");if(t){const{getUserProfile:s}=yield z(()=>p(void 0,null,function*(){const{getUserProfile:u}=yield Promise.resolve().then(()=>Ae);return{getUserProfile:u}}),void 0),{canEditProject:o}=yield z(()=>p(void 0,null,function*(){const{canEditProject:u}=yield import("./vendor-react-BTcc4C86.js").then(d=>d.cI);return{canEditProject:u}}),[]),a=yield s(t);if(!a)throw new Error("Kullanıcı profili bulunamadı");if(!(yield o(r,a)))throw new Error("Bu projeyi düzenlemek için yetkiniz yok. Sadece yöneticiler, ekip liderleri veya projeyi oluşturan kişi düzenleyebilir.")}yield X(U(S,Sr,n),le(F({},e),{updatedAt:j()}));const i=yield Ai(n);t&&(yield se("UPDATE","projects",n,t,r,i))}catch(r){throw r}}),G1=(n,e)=>p(void 0,null,function*(){try{if(!n||n.trim()==="")throw new Error("Proje ID'si geçersiz");const t=yield Ai(n);if(!t)return;if(e){const{getUserProfile:i}=yield z(()=>p(void 0,null,function*(){const{getUserProfile:c}=yield Promise.resolve().then(()=>Ae);return{getUserProfile:c}}),void 0),{canDeleteProject:s}=yield z(()=>p(void 0,null,function*(){const{canDeleteProject:c}=yield import("./vendor-react-BTcc4C86.js").then(u=>u.cI);return{canDeleteProject:c}}),[]),o=yield i(e);if(!o)throw new Error("Kullanıcı profili bulunamadı");if(!(yield s(t,o)))throw new Error("Bu projeyi silmek için yetkiniz yok. Sadece yöneticiler projeleri silebilir.")}const r=yield Gv({projectId:n});yield Promise.all(r.map(i=>Wv(i.id,e))),yield We(U(S,Sr,n)),e&&(yield se("DELETE","projects",n,e,t,null))}catch(t){throw t}}),W1=Object.freeze(Object.defineProperty({__proto__:null,createProject:j1,deleteProject:G1,getProjectById:Ai,getProjects:q1,updateProject:z1},Symbol.toStringTag,{value:"Module"})),Gv=n=>p(void 0,null,function*(){var e,t;try{const r=q(S,"tasks"),i=a=>{const c=[];a!=null&&a.skipOrder||c.push(fe("createdAt","desc")),n!=null&&n.createdBy&&c.push(ce("createdBy","==",n.createdBy)),n!=null&&n.status&&c.push(ce("status","==",n.status)),n!=null&&n.projectId&&c.push(ce("projectId","==",n.projectId)),n!=null&&n.productionOrderId&&c.push(ce("productionOrderId","==",n.productionOrderId)),n!=null&&n.approvalStatus&&c.push(ce("approvalStatus","==",n.approvalStatus));const u=n!=null&&n.limit?Math.min(n.limit,500):100;return c.push(Ne(u)),c.length?Q(r,...c):Q(r,Ne(u))};let s;try{s=yield J(i())}catch(a){const c=a instanceof Error?a.message:String(a);if(typeof c=="string"&&c.includes("requires an index"))s=yield J(i({skipOrder:!0}));else throw a}let o=s.docs.map(a=>F({id:a.id},a.data()));if(n!=null&&n.projectId&&(o=o.filter(a=>a.projectId===n.projectId&&a.projectId!==null&&a.projectId!==void 0).sort((a,c)=>{const u=a.createdAt instanceof $?a.createdAt.toMillis():0;return(c.createdAt instanceof $?c.createdAt.toMillis():0)-u})),n!=null&&n.assignedTo)o=(yield Promise.all(o.map(c=>p(void 0,null,function*(){return c.isPrivate?c.createdBy===n.assignedTo||(yield Ge(c.id)).some(_=>_.assignedTo===n.assignedTo&&_.status!=="rejected")?c:null:(yield Ge(c.id)).some(h=>h.assignedTo===n.assignedTo&&h.status!=="rejected")?c:null})))).filter(c=>c!==null);else{const a=(e=C==null?void 0:C.currentUser)==null?void 0:e.uid;if(a){let c=!1;try{const u=yield Ee(a);u!=null&&u.role&&(c=u.role.includes("personnel")&&!u.role.includes("super_admin")&&!u.role.includes("main_admin")&&!u.role.includes("team_leader"))}catch(u){}o=yield Promise.all(o.map(u=>p(void 0,null,function*(){if(c)if(u.isPrivate){const h=(yield Ge(u.id)).some(_=>_.assignedTo===a&&_.status!=="rejected"),m=Array.isArray(u.assignedUsers)&&u.assignedUsers.includes(a);return h||m?u:null}else{const h=(yield Ge(u.id)).some(_=>_.assignedTo===a&&_.status!=="rejected"),m=Array.isArray(u.assignedUsers)&&u.assignedUsers.includes(a);return h||m?u:null}if(u.onlyInMyTasks)return u.createdBy===a?u:null;if(u.isPrivate){const{getUserProfile:d}=yield z(()=>p(void 0,null,function*(){const{getUserProfile:m}=yield Promise.resolve().then(()=>Ae);return{getUserProfile:m}}),void 0),h=yield d(a);if(h){const{canViewPrivateTask:m}=yield z(()=>p(void 0,null,function*(){const{canViewPrivateTask:E}=yield import("./vendor-react-BTcc4C86.js").then(P=>P.cI);return{canViewPrivateTask:E}}),[]),w=(yield Ge(u.id)).filter(E=>E.status==="accepted"||E.status==="pending").map(E=>E.assignedTo);return(yield m(u,h,w))?u:null}return null}return u}))).then(u=>u.filter(d=>d!==null))}else o=o.filter(c=>!c.onlyInMyTasks)}return o}catch(r){throw tn(r)?en(r,{operation:"read",collection:"tasks",userId:(t=C==null?void 0:C.currentUser)==null?void 0:t.uid}):r}}),H1=(n={},e)=>{try{const t=q(S,"tasks");let i=(o=>{const a=[];a.push(fe("createdAt","desc")),n!=null&&n.createdBy&&a.push(ce("createdBy","==",n.createdBy)),n!=null&&n.status&&a.push(ce("status","==",n.status)),n!=null&&n.projectId&&a.push(ce("projectId","==",n.projectId)),n!=null&&n.productionOrderId&&a.push(ce("productionOrderId","==",n.productionOrderId)),n!=null&&n.approvalStatus&&a.push(ce("approvalStatus","==",n.approvalStatus));const c=n!=null&&n.limit?Math.min(n.limit,500):100;return a.push(Ne(c)),a.length?Q(t,...a):Q(t,Ne(c))})();return lr(i,o=>p(void 0,null,function*(){var a;try{let c=o.docs.map(u=>F({id:u.id},u.data()));if(n!=null&&n.assignedTo)c=(yield Promise.all(c.map(d=>p(void 0,null,function*(){return d.isPrivate?d.createdBy===n.assignedTo||(yield Ge(d.id)).some(v=>v.assignedTo===n.assignedTo&&v.status!=="rejected")?d:null:(yield Ge(d.id)).some(_=>_.assignedTo===n.assignedTo&&_.status!=="rejected")?d:null})))).filter(d=>d!==null);else{const u=(a=C==null?void 0:C.currentUser)==null?void 0:a.uid;u?c=yield Promise.all(c.map(d=>p(void 0,null,function*(){return d.onlyInMyTasks?d.createdBy===u?d:null:!d.isPrivate||d.createdBy===u||(yield Ge(d.id)).some(_=>_.assignedTo===u)?d:null}))).then(d=>d.filter(h=>h!==null)):c=c.filter(d=>!d.onlyInMyTasks)}e(c)}catch(c){e([])}}),o=>{var a,c,u;if((o==null?void 0:o.code)==="unavailable"||(o==null?void 0:o.code)==="not-found"||(a=o==null?void 0:o.message)!=null&&a.includes("404")||(c=o==null?void 0:o.message)!=null&&c.includes("network")||(u=o==null?void 0:o.message)!=null&&u.includes("transport errored")){e([]);return}e([])})}catch(t){return()=>{}}},Me=n=>p(void 0,null,function*(){var e;try{const t=yield ne(U(S,"tasks",n));return t.exists()?F({id:t.id},t.data()):null}catch(t){throw tn(t)?en(t,{operation:"read",collection:"tasks",documentId:n,userId:(e=C==null?void 0:C.currentUser)==null?void 0:e.uid}):t}}),K1=n=>p(void 0,null,function*(){try{if(n.projectId){const{getProjectById:i}=yield z(()=>p(void 0,null,function*(){const{getProjectById:u}=yield Promise.resolve().then(()=>W1);return{getProjectById:u}}),void 0),{getUserProfile:s}=yield z(()=>p(void 0,null,function*(){const{getUserProfile:u}=yield Promise.resolve().then(()=>Ae);return{getUserProfile:u}}),void 0),{canCreateTask:o,canEditProject:a}=yield z(()=>p(void 0,null,function*(){const{canCreateTask:u,canEditProject:d}=yield import("./vendor-react-BTcc4C86.js").then(h=>h.cI);return{canCreateTask:u,canEditProject:d}}),[]),c=yield i(n.projectId);if(c){const u=yield s(n.createdBy);if(u){if(!(yield o(u,[])))throw new Error("Görev oluşturma yetkiniz yok. Sadece yöneticiler ve ekip liderleri görev oluşturabilir.");if(!(yield a(c,u))&&c.createdBy!==n.createdBy)throw new Error("Bu projeye görev ekleme yetkiniz yok. Sadece proje sahibi, yöneticiler veya ekip liderleri görev ekleyebilir.")}}}const e=le(F({},n),{createdAt:j(),updatedAt:j()});n.dueDate!==void 0&&n.dueDate!==null?n.dueDate instanceof Date?e.dueDate=$.fromDate(n.dueDate):typeof n.dueDate=="string"&&(e.dueDate=$.fromDate(new Date(n.dueDate))):e.dueDate=null;const t=yield we(q(S,"tasks"),e),r=yield Me(t.id);if(!r)throw new Error("Görev oluşturulamadı");if(yield se("CREATE","tasks",t.id,n.createdBy,null,r),n.createdBy)try{const{getUserProfile:i}=yield z(()=>p(void 0,null,function*(){const{getUserProfile:c}=yield Promise.resolve().then(()=>Ae);return{getUserProfile:c}}),void 0),s=yield i(n.createdBy),o=(s==null?void 0:s.fullName)||(s==null?void 0:s.displayName)||(s==null?void 0:s.email),a=s==null?void 0:s.email;yield go(t.id,n.createdBy,"created","bu görevi oluşturdu",{taskTitle:r.title},o,a)}catch(i){}try{const i=yield ih(r),{createNotification:s}=yield z(()=>p(void 0,null,function*(){const{createNotification:u}=yield Promise.resolve().then(()=>bt);return{createNotification:u}}),void 0),{getUserProfile:o}=yield z(()=>p(void 0,null,function*(){const{getUserProfile:u}=yield Promise.resolve().then(()=>Ae);return{getUserProfile:u}}),void 0),a=yield o(n.createdBy),c=(a==null?void 0:a.fullName)||(a==null?void 0:a.displayName)||(a==null?void 0:a.email)||"Bir kullanıcı";yield Promise.all(i.map(u=>p(void 0,null,function*(){try{if(u===n.createdBy)return;yield s({userId:u,type:"task_created",title:"Yeni görev oluşturuldu",message:`${c} kullanıcısı tarafından "${r.title}" başlıklı yeni bir görev oluşturuldu.

Yeni görev sisteme eklendi. Görev detaylarını görüntülemek için bildirime tıklayabilirsiniz.

Oluşturulma Zamanı: ${new Date().toLocaleString("tr-TR",{day:"numeric",month:"long",year:"numeric",hour:"2-digit",minute:"2-digit"})}`,read:!1,relatedId:t.id,metadata:{createdBy:n.createdBy}})}catch(d){}})))}catch(i){}return r}catch(e){throw tn(e)?en(e,{operation:"create",collection:"tasks",userId:n.createdBy,data:n}):e}}),ih=n=>p(void 0,null,function*(){if(!n)return[];try{const e=yield po(),t=[];if(n.createdBy){const r=yield Ee(n.createdBy);if(r!=null&&r.approvedTeams&&r.approvedTeams.length>0)for(const i of r.approvedTeams){const s=e.find(o=>o.id===i);s!=null&&s.managerId&&!t.includes(s.managerId)&&t.push(s.managerId)}}if(n.projectId)try{yield Ai(n.projectId)}catch(r){}return t}catch(e){return[]}}),Q1=(n,e,t)=>p(void 0,null,function*(){var r,i;try{const s=yield Me(n);if(!s)throw new Error("Görev bulunamadı");if((e.title!==void 0||e.description!==void 0||e.priority!==void 0||e.dueDate!==void 0||e.labels!==void 0||e.projectId!==void 0||e.isPrivate!==void 0)&&t){const{getUserProfile:d}=yield z(()=>p(void 0,null,function*(){const{getUserProfile:w}=yield Promise.resolve().then(()=>Ae);return{getUserProfile:w}}),void 0),{canEditTask:h}=yield z(()=>p(void 0,null,function*(){const{canEditTask:w}=yield import("./vendor-react-BTcc4C86.js").then(v=>v.cI);return{canEditTask:w}}),[]),m=yield d(t);if(!m)throw new Error("Kullanıcı profili bulunamadı");if(!(yield h(s,m)))throw new Error("Bu görevi düzenlemek için yetkiniz yok. Sadece yöneticiler, ekip liderleri veya görevi oluşturan kişi düzenleyebilir.")}const a=t||((r=C==null?void 0:C.currentUser)==null?void 0:r.uid),c=le(F({},e),{updatedAt:j()});a&&(c.updatedBy=a),e.dueDate!==void 0&&(e.dueDate===null?c.dueDate=null:e.dueDate instanceof Date&&(c.dueDate=$.fromDate(e.dueDate))),yield X(U(S,"tasks",n),c);const u=yield Me(n);if(t&&(yield se("UPDATE","tasks",n,t,s,u)),t&&s&&u)try{const{getUserProfile:d}=yield z(()=>p(void 0,null,function*(){const{getUserProfile:v}=yield Promise.resolve().then(()=>Ae);return{getUserProfile:v}}),void 0),h=yield d(t),m=(h==null?void 0:h.fullName)||(h==null?void 0:h.displayName)||(h==null?void 0:h.email),_=h==null?void 0:h.email,w=Object.keys(e).filter(v=>{const E=s[v],P=e[v];return E!==P});w.length>0&&(yield go(n,t,"updated","bu görevi güncelledi",{changedFields:w,taskTitle:u.title},m,_))}catch(d){}if(u&&t)try{const d=yield Ge(n),m=(yield rt()).find(w=>w.id===t),_=d.filter(w=>w.status==="accepted"||w.status==="pending").map(w=>w.assignedTo).filter(w=>w!==t);yield Promise.all(_.map(w=>p(void 0,null,function*(){try{yield Oe({userId:w,type:"task_updated",title:"Görev güncellendi",message:`${(m==null?void 0:m.fullName)||(m==null?void 0:m.email)||"Bir kullanıcı"} kullanıcısı tarafından "${u.title}" görevinde değişiklik yapıldı.

Görev bilgileri güncellendi. Detayları görüntülemek için bildirime tıklayabilirsiniz.

İşlem Zamanı: ${new Date().toLocaleString("tr-TR",{day:"numeric",month:"long",year:"numeric",hour:"2-digit",minute:"2-digit"})}`,read:!1,relatedId:n,metadata:null})}catch(v){}})))}catch(d){}}catch(s){throw tn(s)?en(s,{operation:"update",collection:"tasks",documentId:n,userId:t||((i=C==null?void 0:C.currentUser)==null?void 0:i.uid),data:e}):s}}),Y1=(n,e)=>p(void 0,null,function*(){var t,r;try{const i=yield Me(n);if(!i)throw new Error("Görev bulunamadı");const s=i.status,o=(t=C==null?void 0:C.currentUser)==null?void 0:t.uid;if(!o)throw new Error("Kullanıcı bilgisi bulunamadı");const a=i.createdBy===o,u=(yield Ge(n)).some(v=>v.assignedTo===o&&v.status!=="rejected"),d=Array.isArray(i.assignedUsers)&&i.assignedUsers.includes(o);if(!(a||u||d))throw new Error("Bu görevin durumunu değiştirme yetkiniz yok. Sadece görev üyesi olduğunuz görevlerin durumunu değiştirebilirsiniz.");const m=Array.isArray(i.assignedUsers)?i.assignedUsers:[];if(u&&!m.includes(o)){const v=U(S,"tasks",n);yield X(v,{assignedUsers:[...m,o]})}const w={status:e,updatedAt:j()};if(o&&(w.updatedBy=o),s!==e&&o){w.statusUpdatedBy=o,w.statusUpdatedAt=j();const v=i.statusHistory||[];v.push({status:e,changedAt:$.now(),changedBy:o}),w.statusHistory=v}if(yield X(U(S,"tasks",n),w),yield se("UPDATE","tasks",n,((r=C==null?void 0:C.currentUser)==null?void 0:r.uid)||"system",{status:s},{status:e}),s!==e&&o)try{const{getUserProfile:v}=yield z(()=>p(void 0,null,function*(){const{getUserProfile:K}=yield Promise.resolve().then(()=>Ae);return{getUserProfile:K}}),void 0),E=yield v(o),P=(E==null?void 0:E.fullName)||(E==null?void 0:E.displayName)||(E==null?void 0:E.email),O=E==null?void 0:E.email,M={pending:"Beklemede",in_progress:"Devam Ediyor",completed:"Tamamlandı",cancelled:"İptal Edildi"},x=M[s]||s,Z=M[e]||e;yield go(n,o,"status_changed",`görev durumunu "${x}" → "${Z}" olarak değiştirdi`,{oldStatus:s,newStatus:e,taskTitle:i.title},P,O)}catch(v){}if(s!==e)try{const v=yield Ge(n),E=yield rt(),P=C==null?void 0:C.currentUser,O=E.find(R=>R.id===(P==null?void 0:P.uid)),M={pending:"Beklemede",in_progress:"Devam Ediyor",completed:"Tamamlandı",cancelled:"İptal Edildi"},x=M[e]||e,Z=M[s]||s;if(i.createdBy&&i.createdBy!==(P==null?void 0:P.uid))try{const R=new Date().toLocaleString("tr-TR",{day:"numeric",month:"long",year:"numeric",hour:"2-digit",minute:"2-digit"});yield Oe({userId:i.createdBy,type:"task_updated",title:"Görev durumu değişti",message:`${(O==null?void 0:O.fullName)||(O==null?void 0:O.email)||"Bir kullanıcı"} kullanıcısı tarafından "${i.title}" görevinin durumu "${Z}" durumundan "${x}" durumuna güncellendi.

İşlem Zamanı: ${R}`,read:!1,relatedId:n,metadata:{oldStatus:s,newStatus:e,updatedAt:new Date,priority:i.priority,dueDate:i.dueDate}})}catch(R){console.error("Error sending notification to task creator:",R)}const K=v.filter(R=>(R.status==="accepted"||R.status==="pending")&&R.assignedTo!==(P==null?void 0:P.uid)).map(R=>R.assignedTo);yield Promise.all(K.map(R=>p(void 0,null,function*(){try{const T=new Date().toLocaleString("tr-TR",{day:"numeric",month:"long",year:"numeric",hour:"2-digit",minute:"2-digit"});yield Oe({userId:R,type:"task_updated",title:"Görev durumu değişti",message:`${(O==null?void 0:O.fullName)||(O==null?void 0:O.email)||"Bir kullanıcı"} tarafından "${i.title}" görevinin durumu "${Z}" durumundan "${x}" durumuna güncellendi.

İşlem Zamanı: ${T}`,read:!1,relatedId:n,metadata:{oldStatus:s,newStatus:e,updatedAt:new Date,priority:i.priority,dueDate:i.dueDate}})}catch(T){console.error("Error sending notification to assigned user:",R,T)}})))}catch(v){console.error("Error sending task status change notifications:",v)}}catch(i){const s=i instanceof Error?i.message:String(i);throw s.includes("Missing or insufficient permissions")||s.includes("permission-denied")?new Error("Firestore güvenlik kuralları görev durumunu değiştirmenize izin vermiyor. Lütfen yöneticinizle iletişime geçin."):i}}),Wv=(n,e)=>p(void 0,null,function*(){try{const t=yield Me(n);if(!t)throw new Error("Görev bulunamadı");if(e){const{getUserProfile:o}=yield z(()=>p(void 0,null,function*(){const{getUserProfile:d}=yield Promise.resolve().then(()=>Ae);return{getUserProfile:d}}),void 0),{canDeleteTask:a}=yield z(()=>p(void 0,null,function*(){const{canDeleteTask:d}=yield import("./vendor-react-BTcc4C86.js").then(h=>h.cI);return{canDeleteTask:d}}),[]),c=yield o(e);if(!c)throw new Error("Kullanıcı profili bulunamadı");if(!(yield a(t,c)))throw new Error("Bu görevi silmek için yetkiniz yok. Sadece yöneticiler, ekip liderleri veya görevi oluşturan kişi silebilir.")}if(e&&t)try{const{getUserProfile:o}=yield z(()=>p(void 0,null,function*(){const{getUserProfile:d}=yield Promise.resolve().then(()=>Ae);return{getUserProfile:d}}),void 0),a=yield o(e),c=(a==null?void 0:a.fullName)||(a==null?void 0:a.displayName)||(a==null?void 0:a.email),u=a==null?void 0:a.email;yield go(n,e,"deleted","bu görevi sildi",{taskTitle:t.title},c,u)}catch(o){}let r=[],i=[],s;try{r=yield Ge(n),i=yield rt(),s=i.find(o=>o.id===e)}catch(o){console.error("Error fetching data for notifications:",o)}try{const a=(yield J(q(S,"tasks",n,"assignments"))).docs.map(d=>We(d.ref));yield Promise.all(a);const u=(yield J(q(S,"tasks",n,"checklists"))).docs.map(d=>We(d.ref));yield Promise.all(u);try{const h=(yield J(q(S,"tasks",n,"attachments"))).docs.map(m=>We(m.ref));yield Promise.all(h)}catch(d){}}catch(o){console.error("Error deleting subcollections:",o)}yield We(U(S,"tasks",n)),e&&(yield se("DELETE","tasks",n,e,t,null));try{const o=C==null?void 0:C.currentUser;if(t.createdBy&&t.createdBy!==(o==null?void 0:o.uid))try{const c=new Date().toLocaleString("tr-TR",{day:"numeric",month:"long",year:"numeric",hour:"2-digit",minute:"2-digit"});yield Oe({userId:t.createdBy,type:"task_deleted",title:"Görev silindi",message:`${(s==null?void 0:s.fullName)||(s==null?void 0:s.email)||"Bir kullanıcı"} kullanıcısı tarafından "${t.title}" görevi silindi.

Görev sistemden kalıcı olarak kaldırıldı. Bu işlem geri alınamaz.

Silme Zamanı: ${c}`,read:!1,relatedId:n,metadata:{taskTitle:t.title,updatedAt:new Date}})}catch(c){console.error("Error sending notification to task creator:",c)}const a=r.filter(c=>(c.status==="accepted"||c.status==="pending")&&c.assignedTo!==(o==null?void 0:o.uid)).map(c=>c.assignedTo);yield Promise.all(a.map(c=>p(void 0,null,function*(){try{const u=new Date().toLocaleString("tr-TR",{day:"numeric",month:"long",year:"numeric",hour:"2-digit",minute:"2-digit"});yield Oe({userId:c,type:"task_deleted",title:"Görev silindi",message:`${(s==null?void 0:s.fullName)||(s==null?void 0:s.email)||"Bir kullanıcı"} kullanıcısı tarafından "${t.title}" görevi silindi.

Görev sistemden kalıcı olarak kaldırıldı. Bu işlem geri alınamaz.

Silme Zamanı: ${u}`,read:!1,relatedId:n,metadata:{taskTitle:t.title,updatedAt:new Date}})}catch(u){console.error("Error sending notification to assigned user:",c,u)}})))}catch(o){console.error("Error sending task deletion notifications:",o)}}catch(t){throw t}}),Hv=(n,e,t,r)=>p(void 0,null,function*(){try{const i={taskId:n,assignedTo:e,assignedBy:t,status:"accepted",notes:null,assignedAt:$.now(),acceptedAt:$.now(),completedAt:null},s=yield we(q(S,"tasks",n,"assignments"),i),o=U(S,"tasks",n),a=yield ne(o);if(a.exists()){const u=a.data().assignedUsers||[];u.includes(e)||(yield X(o,{assignedUsers:[...u,e]}))}try{const[c,u]=yield Promise.all([Me(n),Ee(t)]);if(c){const d=[];if(c.description){const _=c.description.length>100?c.description.substring(0,100)+"...":c.description;d.push(`Açıklama: ${_}`)}if(c.priority){const{getPriorityLabel:_,convertOldPriorityToNew:w}=yield z(()=>p(void 0,null,function*(){const{getPriorityLabel:P,convertOldPriorityToNew:O}=yield import("./priority-DjPsOOkO.js");return{getPriorityLabel:P,convertOldPriorityToNew:O}}),[]),v=w(c.priority),E=_(v);d.push(`Öncelik: ${E}`)}if(c.dueDate)try{const w=(c.dueDate instanceof $?c.dueDate.toDate():new Date(c.dueDate)).toLocaleDateString("tr-TR",{day:"numeric",month:"long",year:"numeric",hour:"2-digit",minute:"2-digit"});d.push(`Bitiş Tarihi: ${w}`)}catch(_){}const h=d.length>0?`

Görev Detayları:
${d.join(`
`)}`:"";let m=null;if(c.dueDate)try{const _=c.dueDate;if(_ instanceof $)m=_.toDate();else if(_ instanceof Date)m=_;else if(typeof _=="object"&&_!==null&&"seconds"in _){const w=_;m=new Date(w.seconds*1e3+(w.nanoseconds||0)/1e6)}}catch(_){m=null}yield Oe({userId:e,type:"task_assigned",title:"Yeni görev atandı",message:`${(u==null?void 0:u.fullName)||(u==null?void 0:u.email)||"Bir yönetici"} kullanıcısı tarafından size "${c.title}" başlıklı yeni bir görev atandı.${h}

Görev detaylarını görüntülemek için bildirime tıklayabilirsiniz.`,read:!1,relatedId:n,metadata:{assignment_id:s.id,priority:c.priority,dueDate:m,updatedAt:new Date}})}}catch(c){}return t&&(yield se("CREATE","task_assignments",s.id,t,null,i)),F({id:s.id},i)}catch(i){throw i}}),J1=(n,e)=>p(void 0,null,function*(){var t;try{yield X(U(S,"tasks",n,"assignments",e),{status:"accepted",acceptedAt:j()});const r=(t=C==null?void 0:C.currentUser)==null?void 0:t.uid;if(r){const i=yield Me(n),o=(yield ne(U(S,"tasks",n,"assignments",e))).data();yield se("UPDATE","task_assignments",e,r,o||{status:"pending"},{status:"accepted",taskId:n,taskTitle:i==null?void 0:i.title},{action:"accept",taskId:n})}try{const s=(yield ne(U(S,"tasks",n,"assignments",e))).data();if(s){const{getNotifications:o}=yield z(()=>p(void 0,null,function*(){const{getNotifications:u}=yield Promise.resolve().then(()=>bt);return{getNotifications:u}}),void 0),c=(yield o(s.assignedTo,{limit:100})).find(u=>{if(u.type!=="task_assigned"||u.relatedId!==n)return!1;const d=u.metadata;return d&&typeof d=="object"&&"assignment_id"in d?d.assignment_id===e:!1});if(c){const u=le(F({},c.metadata),{action:"accepted"});yield rh(c.id,{metadata:u,read:!0})}}}catch(i){console.error("Error updating assignment notification:",i)}try{const i=yield Me(n),o=(yield ne(U(S,"tasks",n,"assignments",e))).data();if(i&&o){const a=yield ih(i),u=(yield rt()).find(d=>d.id===o.assignedTo);yield Promise.all(a.map(d=>p(void 0,null,function*(){try{const h=new Date().toLocaleString("tr-TR",{day:"numeric",month:"long",year:"numeric",hour:"2-digit",minute:"2-digit"});yield Oe({userId:d,type:"task_assigned",title:"Görev kabul edildi",message:`${(u==null?void 0:u.fullName)||(u==null?void 0:u.email)||"Bir kullanıcı"} kullanıcısı "${i.title}" görevini kabul etti.

Görev artık bu kullanıcının görev listesinde görünecek ve üzerinde çalışmaya başlayabilir.

Kabul Zamanı: ${h}`,read:!1,relatedId:n,metadata:{assignment_id:e,action:"accepted",updatedAt:new Date,priority:i.priority,dueDate:i.dueDate}})}catch(h){console.error("Error sending notification to team leader:",d,h)}})))}}catch(i){console.error("Error sending acceptance notifications:",i)}}catch(r){throw r}}),X1=(n,e,t)=>p(void 0,null,function*(){var r,i,s;try{if(t.trim().length<20)throw new Error("Red sebebi en az 20 karakter olmalıdır");yield X(U(S,"tasks",n,"assignments",e),{status:"rejected",rejectionReason:t.trim()});const o=(r=C==null?void 0:C.currentUser)==null?void 0:r.uid;if(o){const a=yield Me(n),u=(yield ne(U(S,"tasks",n,"assignments",e))).data();yield se("UPDATE","task_assignments",e,o,u||{status:"pending"},{status:"rejected",rejectionReason:t.trim(),taskId:n,taskTitle:a==null?void 0:a.title},{action:"reject",taskId:n,reason:t.trim()})}try{const c=(yield ne(U(S,"tasks",n,"assignments",e))).data();if(c){const{getNotifications:u}=yield z(()=>p(void 0,null,function*(){const{getNotifications:m}=yield Promise.resolve().then(()=>bt);return{getNotifications:m}}),void 0),h=(yield u(c.assignedTo,{limit:100})).find(m=>{if(m.type!=="task_assigned"||m.relatedId!==n)return!1;const _=m.metadata;return _&&typeof _=="object"&&"assignment_id"in _?_.assignment_id===e:!1});if(h){const m=le(F({},h.metadata),{action:"rejected"});yield rh(h.id,{metadata:m,read:!0})}}}catch(a){console.error("Error updating assignment notification:",a)}try{const a=yield Me(n),u=(yield ne(U(S,"tasks",n,"assignments",e))).data();if(a&&u){const d=yield rt(),h=d.find(_=>_.id===u.assignedTo);if(d.find(_=>_.id===a.createdBy),d.find(_=>_.id===u.assignedBy),u.assignedBy&&u.assignedBy!==((i=C==null?void 0:C.currentUser)==null?void 0:i.uid))try{const _=new Date().toLocaleString("tr-TR",{day:"numeric",month:"long",year:"numeric",hour:"2-digit",minute:"2-digit"});yield Oe({userId:u.assignedBy,type:"task_assigned",title:"Görev reddedildi",message:`${(h==null?void 0:h.fullName)||(h==null?void 0:h.email)||"Bir kullanıcı"} kullanıcısı "${a.title}" görevini reddetti.

Reddetme Sebebi: ${t.trim().substring(0,200)}${t.trim().length>200?"...":""}

Reddetme Zamanı: ${_}`,read:!1,relatedId:n,metadata:{assignment_id:e,action:"rejected",reason:t.trim(),assigned_user_id:u.assignedTo,updatedAt:new Date,priority:a.priority,dueDate:a.dueDate}})}catch(_){console.error("Error sending notification to task assigner:",_)}if(a.createdBy&&a.createdBy!==((s=C==null?void 0:C.currentUser)==null?void 0:s.uid)&&a.createdBy!==u.assignedBy)try{const _=new Date().toLocaleString("tr-TR",{day:"numeric",month:"long",year:"numeric",hour:"2-digit",minute:"2-digit"});yield Oe({userId:a.createdBy,type:"task_assigned",title:"Görev reddedildi - Onayınız gerekiyor",message:`${(h==null?void 0:h.fullName)||(h==null?void 0:h.email)||"Bir kullanıcı"} kullanıcısı "${a.title}" görevini reddetti.

Reddetme Sebebi: ${t.trim().substring(0,200)}${t.trim().length>200?"...":""}

Reddetme Zamanı: ${_}

Lütfen bu reddi onaylayın veya reddedin. Reddin onaylanması durumunda görev başka birine atanabilir.`,read:!1,relatedId:n,metadata:{assignment_id:e,action:"rejection_pending_approval",reason:t.trim(),assigned_user_id:u.assignedTo,updatedAt:new Date,priority:a.priority,dueDate:a.dueDate}})}catch(_){console.error("Error sending notification to task creator:",_)}const m=yield ih(a);yield Promise.all(m.filter(_=>_!==a.createdBy&&_!==u.assignedBy).map(_=>p(void 0,null,function*(){try{yield Oe({userId:_,type:"task_assigned",title:"Görev reddedildi",message:`${(h==null?void 0:h.fullName)||(h==null?void 0:h.email)||"Bir kullanıcı"} "${a.title}" görevini reddetti. Sebep: ${t.trim().substring(0,100)}${t.trim().length>100?"...":""}`,read:!1,relatedId:n,metadata:{assignment_id:e,action:"rejected",reason:t.trim()}})}catch(w){console.error("Error sending notification to team leader:",_,w)}})))}}catch(a){console.error("Error sending rejection notifications:",a)}}catch(o){throw o}}),Ge=n=>p(void 0,null,function*(){try{return(yield J(q(S,"tasks",n,"assignments"))).docs.map(t=>F({id:t.id},t.data()))}catch(e){throw e}}),Z1=n=>p(void 0,null,function*(){try{const e=Ty(S,"assignments");let t=[];n!=null&&n.orderBy&&t.push(fe(n.orderBy.field,n.orderBy.direction)),n!=null&&n.limit&&t.push(Ne(n.limit));let r=Q(e,...t),i;try{i=yield J(r)}catch(s){const o=s instanceof Error?s.message:String(s);if(typeof o=="string"&&o.includes("requires an index"))r=n!=null&&n.limit?Q(e,Ne(n.limit)):Q(e),i=yield J(r);else throw s}return i.docs.map(s=>{var o;return le(F({id:s.id},s.data()),{taskId:((o=s.ref.parent.parent)==null?void 0:o.id)||""})})}catch(e){throw e}}),eO=(n,e,t)=>p(void 0,null,function*(){try{const r=U(S,"tasks",n,"assignments",e),i=yield ne(r);if(!i.exists())return;const s=i.data();if(yield We(r),s){const o=U(S,"tasks",n),a=yield ne(o);if(a.exists()){const u=a.data().assignedUsers||[];u.includes(s.assignedTo)&&(yield X(o,{assignedUsers:u.filter(d=>d!==s.assignedTo)}))}if(s)try{const[c,u,d]=yield Promise.all([Me(n),t?Ee(t):Promise.resolve(null),Ee(s.assignedTo)]);if(c&&d){const h=new Date().toLocaleString("tr-TR",{day:"numeric",month:"long",year:"numeric",hour:"2-digit",minute:"2-digit"});if(yield Oe({userId:s.assignedTo,type:"task_updated",title:"Görev atamanız kaldırıldı",message:`${(u==null?void 0:u.fullName)||(u==null?void 0:u.email)||"Bir yönetici"} kullanıcısı tarafından siz "${c.title}" görevinden kaldırıldınız.

Artık bu görevle ilgili bildirimler almayacaksınız ve görev üzerinde işlem yapamayacaksınız.

Kaldırılma Zamanı: ${h}`,read:!1,relatedId:n,metadata:{assignment_id:e,action:"removed",updatedAt:new Date,priority:c.priority,dueDate:c.dueDate}}),c.createdBy&&c.createdBy!==t&&c.createdBy!==s.assignedTo){const m=new Date().toLocaleString("tr-TR",{day:"numeric",month:"long",year:"numeric",hour:"2-digit",minute:"2-digit"});yield Oe({userId:c.createdBy,type:"task_updated",title:"Görev ataması kaldırıldı",message:`${(u==null?void 0:u.fullName)||(u==null?void 0:u.email)||"Bir yönetici"} kullanıcısı tarafından "${(d==null?void 0:d.fullName)||(d==null?void 0:d.email)||"bir kullanıcı"}" kullanıcısı "${c.title}" görevinden kaldırıldı.

Bu kullanıcı artık görevle ilgili bildirimler almayacak ve görev üzerinde işlem yapamayacak.

Kaldırılma Zamanı: ${m}`,read:!1,relatedId:n,metadata:{assignment_id:e,action:"removed",removed_user_id:s.assignedTo,updatedAt:new Date,priority:c.priority,dueDate:c.dueDate}})}}}catch(c){}}}catch(r){throw r}}),tO=(n,e,t)=>p(void 0,null,function*(){try{const r={taskId:n,title:e,items:t.map(s=>({id:`${Date.now()}-${Math.random()}`,text:s.text,completed:s.completed||!1,createdAt:$.now(),completedAt:null})),createdAt:$.now(),updatedAt:$.now()},i=yield we(q(S,"tasks",n,"checklists"),r);return F({id:i.id},r)}catch(r){throw r}}),nO=(n,e,t,r,i)=>p(void 0,null,function*(){var s;try{if(i){const d=yield Me(n);if(!d)throw new Error("Görev bulunamadı");const{getUserProfile:h}=yield z(()=>p(void 0,null,function*(){const{getUserProfile:_}=yield Promise.resolve().then(()=>Ae);return{getUserProfile:_}}),void 0),m=yield h(i);if(m){const{canAddChecklist:_}=yield z(()=>p(void 0,null,function*(){const{canAddChecklist:P}=yield import("./vendor-react-BTcc4C86.js").then(O=>O.cI);return{canAddChecklist:P}}),[]),v=(yield Ge(n)).filter(P=>P.status==="accepted"||P.status==="pending").map(P=>P.assignedTo);if(!(yield _(d,m,v)))throw new Error("Checklist işaretleme yetkiniz yok. Sadece size atanan görevlerin checklist'lerini işaretleyebilirsiniz.")}}const o=U(S,"tasks",n,"checklists",e),a=yield ne(o);if(!a.exists())throw new Error("Checklist bulunamadı");const u=a.data().items.map(d=>d.id===t?le(F({},d),{completed:r,completedAt:r?$.now():null}):d);yield X(o,{items:u,updatedAt:j()}),yield se("UPDATE","checklist_items",`${n}/${e}/${t}`,i||((s=C==null?void 0:C.currentUser)==null?void 0:s.uid)||"system",{completed:!r},{completed:r})}catch(o){throw o}}),rO=n=>p(void 0,null,function*(){try{return(yield J(q(S,"tasks",n,"checklists"))).docs.map(t=>F({id:t.id},t.data()))}catch(e){throw e}}),iO=(n,e,t)=>p(void 0,null,function*(){try{const r=U(S,"tasks",n,"checklists",e),i=yield ne(r);if(!i.exists())throw new Error("Checklist bulunamadı");const s=i.data(),o={id:`${Date.now()}-${Math.random()}`,text:t,completed:!1,createdAt:$.now(),completedAt:null};yield X(r,{items:[...s.items,o],updatedAt:j()})}catch(r){throw r}}),sO=(n,e,t)=>p(void 0,null,function*(){try{const r=U(S,"tasks",n,"checklists",e),i=yield ne(r);if(!i.exists())throw new Error("Checklist bulunamadı");const o=i.data().items.filter(a=>a.id!==t);yield X(r,{items:o,updatedAt:j()})}catch(r){throw r}}),oO=n=>p(void 0,null,function*(){try{return(yield J(Q(q(S,"tasks",n,"comments"),fe("createdAt","desc")))).docs.map(t=>F({id:t.id},t.data()))}catch(e){throw e}}),go=(n,e,t,r,i,s,o)=>p(void 0,null,function*(){try{const a={taskId:n,userId:e,userName:s,userEmail:o,action:t,description:r,metadata:i||{},createdAt:$.now()};return(yield we(q(S,"tasks",n,"activities"),a)).id}catch(a){return""}}),aO=(n,e)=>p(void 0,null,function*(){var t,r;try{const i=yield Me(n);if(!i)throw new Error("Görev bulunamadı");const s=(t=C==null?void 0:C.currentUser)==null?void 0:t.uid;if(!s)throw new Error("Kullanıcı oturumu bulunamadı");const o=yield Ee(s);if(!o)throw new Error("Kullanıcı profili bulunamadı");const{isAdmin:a,isMainAdmin:c}=yield z(()=>p(void 0,null,function*(){const{isAdmin:_,isMainAdmin:w}=yield import("./vendor-react-BTcc4C86.js").then(v=>v.cI);return{isAdmin:_,isMainAdmin:w}}),[]);if(!((yield a(o))||(yield c(o)))&&!(i.createdBy===s)&&!(yield Ge(n)).filter(P=>P.status==="accepted").map(P=>P.assignedTo).includes(s))throw new Error("Bu göreve dosya eklemek için yetkiniz yok. Sadece size atanan görevlere veya oluşturduğunuz görevlere dosya ekleyebilirsiniz.");const d=le(F({},e),{uploadedAt:j()}),h=yield we(q(S,"tasks",n,"attachments"),d),m=yield ne(h);return le(F({id:h.id},m.data()),{uploadedAt:((r=m.data())==null?void 0:r.uploadedAt)||$.now()})}catch(i){throw i}}),cO=n=>p(void 0,null,function*(){try{return(yield J(Q(q(S,"tasks",n,"attachments"),fe("uploadedAt","desc")))).docs.map(t=>F({id:t.id},t.data()))}catch(e){throw e}}),lO=(n,e)=>p(void 0,null,function*(){var t;try{const r=yield Me(n);if(!r)throw new Error("Görev bulunamadı");const i=(t=C==null?void 0:C.currentUser)==null?void 0:t.uid;if(!i)throw new Error("Kullanıcı oturumu bulunamadı");const s=yield Ee(i);if(!s)throw new Error("Kullanıcı profili bulunamadı");const{isAdmin:o,isMainAdmin:a}=yield z(()=>p(void 0,null,function*(){const{isAdmin:u,isMainAdmin:d}=yield import("./vendor-react-BTcc4C86.js").then(h=>h.cI);return{isAdmin:u,isMainAdmin:d}}),[]);if(!((yield o(s))||(yield a(s)))&&!(r.createdBy===i)&&!(yield Ge(n)).filter(_=>_.status==="accepted").map(_=>_.assignedTo).includes(i))throw new Error("Bu görevden dosya silmek için yetkiniz yok. Sadece size atanan görevlerden veya oluşturduğunuz görevlerden dosya silebilirsiniz.");yield We(U(S,"tasks",n,"attachments",e))}catch(r){throw r}}),uO=n=>p(void 0,null,function*(){try{yield X(U(S,"tasks",n),{isInPool:!1,poolRequests:[],updatedAt:j()})}catch(e){throw e}}),dO=(n,e)=>p(void 0,null,function*(){try{const t=U(S,"tasks",n),r=yield ne(t);if(!r.exists())throw new Error("Görev bulunamadı");const i=r.data(),s=i.poolRequests||[];if(s.includes(e))throw new Error("Bu görev için zaten talep yaptınız");yield X(t,{poolRequests:[...s,e],updatedAt:j()}),yield se("UPDATE","tasks",n,e,{poolRequests:s},{poolRequests:[...s,e]});const o=i.createdBy;if(o&&o!==e)try{const a=yield Ee(e),c=(a==null?void 0:a.fullName)||(a==null?void 0:a.displayName)||(a==null?void 0:a.email)||"Bir kullanıcı";yield Oe({userId:o,type:"task_pool_request",title:"Görev Havuzu Talebi",message:`${c} "${i.title}" görevi için talep gönderdi. Talebi onaylayabilirsiniz.`,read:!1,relatedId:n,metadata:{taskId:n,taskTitle:i.title,requestedBy:e,requestedByName:c,link:`/tasks?taskId=${n}&view=list`}})}catch(a){}}catch(t){throw t}}),hO=(n,e,t,r=!1)=>p(void 0,null,function*(){try{const i=U(S,"tasks",n),s=yield ne(i);if(!s.exists())throw new Error("Görev bulunamadı");const o=s.data(),a=o.poolRequests||[];if(!a.includes(e))throw new Error("Bu kullanıcı için talep bulunamadı");if(o.createdBy!==t)throw new Error("Sadece görevi havuza ekleyen kişi talepleri onaylayabilir");const c=yield Hv(n,e,t),u=U(S,"tasks",n,"assignments",c.id);yield X(u,{status:"accepted",acceptedAt:j()});const d={poolRequests:a.filter(h=>h!==e),updatedAt:j()};r||(d.isInPool=!1,d.poolRequests=[]),yield X(i,d);try{const{getNotifications:h,updateNotification:m}=yield z(()=>p(void 0,null,function*(){const{getNotifications:E,updateNotification:P}=yield Promise.resolve().then(()=>bt);return{getNotifications:E,updateNotification:P}}),void 0),[_,w,v]=yield Promise.all([Me(n),Ee(t),h(e,{limit:10})]);if(_){const E=v.find(P=>{var O;return P.type==="task_assigned"&&P.relatedId===n&&((O=P.metadata)==null?void 0:O.assignment_id)===c.id&&!P.read});E?yield m(E.id,{title:"Görev havuzu talebiniz onaylandı",message:`${(w==null?void 0:w.fullName)||(w==null?void 0:w.email)||"Bir yönetici"} kullanıcısı görev havuzu talebinizi onayladı. "${_.title}" görevine atandınız ve görev otomatik olarak kabul edildi.`,metadata:le(F({},E.metadata),{action:"pool_request_approved"})}):yield Oe({userId:e,type:"task_assigned",title:"Görev havuzu talebiniz onaylandı",message:`${(w==null?void 0:w.fullName)||(w==null?void 0:w.email)||"Bir yönetici"} kullanıcısı görev havuzu talebinizi onayladı. "${_.title}" görevine atandınız ve görev otomatik olarak kabul edildi.`,read:!1,relatedId:n,metadata:{assignment_id:c.id,action:"pool_request_approved",priority:_.priority,dueDate:_.dueDate,updatedAt:new Date}})}}catch(h){}yield se("UPDATE","tasks",n,t,{isInPool:!0,poolRequests:a},{isInPool:r,poolRequests:d.poolRequests,assignedTo:e}),yield se("UPDATE","task_assignments",c.id,t,{status:"pending"},{status:"accepted",taskId:n,taskTitle:o.title})}catch(i){throw i}}),fO=(n,e)=>p(void 0,null,function*(){var t;try{const r=U(S,"tasks",n),i=yield ne(r);if(!i.exists())throw new Error("Görev bulunamadı");const o=i.data().poolRequests||[];if(!o.includes(e))throw new Error("Bu kullanıcı için talep bulunamadı");yield X(r,{poolRequests:o.filter(a=>a!==e),updatedAt:j()}),yield se("UPDATE","tasks",n,((t=C==null?void 0:C.currentUser)==null?void 0:t.uid)||"system",{poolRequests:o},{poolRequests:o.filter(a=>a!==e),rejectedUser:e})}catch(r){throw r}}),mO=(n,e)=>p(void 0,null,function*(){try{const t=yield Me(n);if(!t)throw new Error("Görev bulunamadı");if(t.approvalStatus==="pending")return;if(t.approvalStatus==="approved")throw new Error("Bu görev zaten onaylanmış.");const r=yield Ee(e);if(!r)throw new Error("Kullanıcı profili bulunamadı");const{isAdmin:i,isMainAdmin:s}=yield z(()=>p(void 0,null,function*(){const{isAdmin:a,isMainAdmin:c}=yield import("./vendor-react-BTcc4C86.js").then(u=>u.cI);return{isAdmin:a,isMainAdmin:c}}),[]);if(!((yield i(r))||(yield s(r)))&&!(yield Ge(n)).filter(d=>d.status==="accepted").map(d=>d.assignedTo).includes(e))throw new Error("Bu görevi onaya göndermek için yetkiniz yok. Sadece size atanan görevleri onaya gönderebilirsiniz.");yield X(U(S,"tasks",n),{approvalStatus:"pending",approvalRequestedBy:e,updatedAt:j()}),yield se("UPDATE","tasks",n,e,{approvalStatus:t.approvalStatus||"none"},{approvalStatus:"pending"});try{if(t&&t.createdBy){let a=!1;try{const{getNotifications:c}=yield z(()=>p(void 0,null,function*(){const{getNotifications:d}=yield Promise.resolve().then(()=>bt);return{getNotifications:d}}),void 0);a=(yield c(t.createdBy,{unreadOnly:!0})).some(d=>{var h;return d.type==="task_approval"&&d.relatedId===n&&((h=d.metadata)==null?void 0:h.action)==="approval_requested"})}catch(c){a=!1}if(!a)try{yield Oe({userId:t.createdBy,type:"task_approval",title:"Görev onayı bekleniyor",message:`${(r==null?void 0:r.fullName)||(r==null?void 0:r.email)||"Bir kullanıcı"} kullanıcısı "${t.title}" görevini tamamladı ve onayınızı bekliyor.

"${t.title}" başlıklı görev için onay talebi gönderildi. Lütfen görevi inceleyip onaylayın veya gerekirse geri gönderin.

İşlem Zamanı: ${new Date().toLocaleString("tr-TR",{day:"numeric",month:"long",year:"numeric",hour:"2-digit",minute:"2-digit"})}`,read:!1,relatedId:n,metadata:{action:"approval_requested",updatedAt:new Date,priority:t.priority,dueDate:t.dueDate}})}catch(c){}}}catch(a){}}catch(t){throw t}}),pO=(n,e)=>p(void 0,null,function*(){var t;try{const r=yield Me(n);if(!r)throw new Error("Görev bulunamadı");if(r.approvalStatus==="approved")throw new Error("Bu görev zaten onaylanmış. Tekrar onaylanamaz.");if(r.approvalStatus!=="pending")throw new Error("Bu görev onay beklenmiyor.");const i=yield Ee(e);if(!i)throw new Error("Kullanıcı profili bulunamadı");const{isAdmin:s,isMainAdmin:o}=yield z(()=>p(void 0,null,function*(){const{isAdmin:v,isMainAdmin:E}=yield import("./vendor-react-BTcc4C86.js").then(P=>P.cI);return{isAdmin:v,isMainAdmin:E}}),[]),a=(yield s(i))||(yield o(i)),c=(t=i.role)==null?void 0:t.includes("team_leader"),u=r.createdBy===e,{canPerformSubPermission:d}=yield z(()=>p(void 0,null,function*(){const{canPerformSubPermission:v}=yield import("./vendor-react-BTcc4C86.js").then(E=>E.cI);return{canPerformSubPermission:v}}),[]),h=yield d(i,"tasks","canApprove");if(!a&&!(c&&(h||u)))throw new Error("Bu görevi onaylamak için yetkiniz yok. Sadece yöneticiler veya görevi veren ekip liderleri onaylayabilir.");const _=r.status,w=C==null?void 0:C.currentUser;yield X(U(S,"tasks",n),{approvalStatus:"approved",status:"completed",approvedBy:e,approvedAt:j(),updatedAt:j()}),_!=="completed"&&(w!=null&&w.uid)&&(yield X(U(S,"tasks",n),{statusUpdatedBy:w.uid,statusUpdatedAt:j()})),yield se("UPDATE","tasks",n,e,{approvalStatus:"pending",status:_},{approvalStatus:"approved",status:"completed"});try{const v=yield Me(n),E=yield Ee(e),P=(E==null?void 0:E.fullName)||(E==null?void 0:E.email)||"Yönetici",M=(yield Ge(n)).filter(K=>K.status==="accepted").map(K=>K.assignedTo),x=new Set;v&&v.approvalRequestedBy&&x.add(v.approvalRequestedBy),M.forEach(K=>{K!==(v==null?void 0:v.approvalRequestedBy)&&x.add(K)});const{getNotifications:Z}=yield z(()=>p(void 0,null,function*(){const{getNotifications:K}=yield Promise.resolve().then(()=>bt);return{getNotifications:K}}),void 0);for(const K of x)try{let R=[];try{R=yield Z(K,{unreadOnly:!0})}catch(I){}if(!R.some(I=>{var b;return I.type==="task_approval"&&I.relatedId===n&&((b=I.metadata)==null?void 0:b.action)==="approved"})){const I=new Date().toLocaleString("tr-TR",{day:"numeric",month:"long",year:"numeric",hour:"2-digit",minute:"2-digit"});yield Oe({userId:K,type:"task_approval",title:"Görev onaylandı",message:`${P} kullanıcısı tarafından "${(v==null?void 0:v.title)||"görev"}" görevi onaylandı ve "Onaylandı" durumuna geçirildi.

Görev başarıyla onaylanmış olarak işaretlendi. Tüm görev üyeleri bu durumu görebilir.

Onay Zamanı: ${I}`,read:!1,relatedId:n,metadata:{action:"approved",updatedAt:new Date,priority:v==null?void 0:v.priority,dueDate:v==null?void 0:v.dueDate}})}}catch(R){console.error(`Error sending notification to user ${K}:`,R)}}catch(v){console.error("Error sending approval notification:",v)}}catch(r){throw r}}),gO=(n,e,t)=>p(void 0,null,function*(){try{const r=yield Me(n);if(!r)throw new Error("Görev bulunamadı");const i=r.status,s=C==null?void 0:C.currentUser;yield X(U(S,"tasks",n),{approvalStatus:"rejected",status:"in_progress",rejectedBy:e,rejectedAt:j(),rejectionReason:t||null,updatedAt:j()}),i!=="in_progress"&&(s!=null&&s.uid)&&(yield X(U(S,"tasks",n),{statusUpdatedBy:s.uid,statusUpdatedAt:j()})),yield se("UPDATE","tasks",n,e,{approvalStatus:"pending",status:i},{approvalStatus:"rejected",status:"in_progress",rejectionReason:t});try{const o=yield Me(n),a=yield Ee(e);if(o){const u=(yield Ge(n)).filter(h=>h.status!=="rejected").map(h=>h.assignedTo),d=new Set;u.forEach(h=>d.add(h)),o.createdBy&&!d.has(o.createdBy)&&d.add(o.createdBy),o.approvalRequestedBy&&!d.has(o.approvalRequestedBy)&&d.add(o.approvalRequestedBy),yield Promise.all(Array.from(d).map(h=>p(void 0,null,function*(){try{const m=new Date().toLocaleString("tr-TR",{day:"numeric",month:"long",year:"numeric",hour:"2-digit",minute:"2-digit"}),_=t?`${(a==null?void 0:a.fullName)||(a==null?void 0:a.email)||"Yönetici"} kullanıcısı tarafından "${o.title}" görevi için tamamlanma onayı reddedildi.

Reddetme Notu: ${t}

Görev tekrar "Devam Ediyor" durumuna alındı. Lütfen gerekli düzeltmeleri yapıp tekrar onay talebi gönderin.

Reddetme Zamanı: ${m}`:`${(a==null?void 0:a.fullName)||(a==null?void 0:a.email)||"Yönetici"} kullanıcısı tarafından "${o.title}" görevi için tamamlanma onayı reddedildi.

Görev tekrar "Devam Ediyor" durumuna alındı. Lütfen gerekli düzeltmeleri yapıp tekrar onay talebi gönderin.

Reddetme Zamanı: ${m}`;yield Oe({userId:h,type:"task_approval",title:"Görev onayı reddedildi",message:_,read:!1,relatedId:n,metadata:{action:"rejected",rejectionReason:t,updatedAt:new Date,priority:o.priority,dueDate:o.dueDate}})}catch(m){}})))}}catch(o){}}catch(r){throw r}}),_O=(n,e)=>p(void 0,null,function*(){var t;try{const r=(t=C==null?void 0:C.currentUser)==null?void 0:t.uid;if(!r)throw new Error("Kullanıcı kimliği bulunamadı");const i=U(S,"tasks",n,"assignments",e),s=yield ne(i);if(!s.exists())throw new Error("Görev ataması bulunamadı");const o=s.data();if(o.status!=="rejected")throw new Error("Görev reddedilmemiş");yield X(i,{rejectionApprovedBy:r,rejectionApprovedAt:j()});const a=yield Me(n);yield se("UPDATE","task_assignments",e,r,{rejectionApprovedBy:null},{rejectionApprovedBy:r,taskId:n,taskTitle:a==null?void 0:a.title});try{const c=yield rt(),u=c.find(h=>h.id===o.assignedTo),d=c.find(h=>h.id===r);if(u){const h=new Date().toLocaleString("tr-TR",{day:"numeric",month:"long",year:"numeric",hour:"2-digit",minute:"2-digit"});yield Oe({userId:o.assignedTo,type:"task_assigned",title:"Görev reddi onaylandı",message:`${(d==null?void 0:d.fullName)||(d==null?void 0:d.email)||"Yönetici"} kullanıcısı tarafından "${a==null?void 0:a.title}" görevi için reddiniz onaylandı.

Görev artık başka birine atanabilir veya iptal edilebilir. Bu görevle ilgili artık bildirim almayacaksınız.

Onay Zamanı: ${h}`,read:!1,relatedId:n,metadata:{assignment_id:e,action:"rejection_approved",updatedAt:new Date,priority:a==null?void 0:a.priority,dueDate:a==null?void 0:a.dueDate}})}}catch(c){console.error("Error sending approval notification:",c)}}catch(r){throw r}}),yO=(n,e,t)=>p(void 0,null,function*(){var r;try{const i=(r=C==null?void 0:C.currentUser)==null?void 0:r.uid;if(!i)throw new Error("Kullanıcı kimliği bulunamadı");if(t.trim().length<20)throw new Error("Red sebebi en az 20 karakter olmalıdır");const s=U(S,"tasks",n,"assignments",e),o=yield ne(s);if(!o.exists())throw new Error("Görev ataması bulunamadı");const a=o.data();if(a.status!=="rejected")throw new Error("Görev reddedilmemiş");yield X(s,{status:"pending",rejectionRejectedBy:i,rejectionRejectedAt:j(),rejectionRejectionReason:t.trim(),rejectionReason:null});const c=yield Me(n);yield se("UPDATE","task_assignments",e,i,{status:"rejected"},{status:"pending",rejectionRejectedBy:i,rejectionRejectionReason:t.trim(),taskId:n,taskTitle:c==null?void 0:c.title});try{const u=yield rt(),d=u.find(m=>m.id===a.assignedTo),h=u.find(m=>m.id===i);if(d){const m=new Date().toLocaleString("tr-TR",{day:"numeric",month:"long",year:"numeric",hour:"2-digit",minute:"2-digit"});yield Oe({userId:a.assignedTo,type:"task_assigned",title:"Görev reddi reddedildi",message:`${(h==null?void 0:h.fullName)||(h==null?void 0:h.email)||"Yönetici"} kullanıcısı tarafından "${c==null?void 0:c.title}" görevi için reddiniz reddedildi.

Görev tekrar size atandı ve üzerinde çalışmaya devam etmeniz bekleniyor.

Yönetici Notu: ${t.trim().substring(0,200)}${t.trim().length>200?"...":""}

Reddetme Zamanı: ${m}`,read:!1,relatedId:n,metadata:{assignment_id:e,action:"rejection_rejected",reason:t.trim()}})}}catch(u){console.error("Error sending rejection notification:",u)}}catch(i){throw i}}),wO=(n,e)=>p(void 0,null,function*(){try{yield X(U(S,"tasks",n),{isArchived:!0,updatedAt:j()}),yield se("UPDATE","tasks",n,e,{isArchived:!1},{isArchived:!0})}catch(t){throw t}}),vO=(n,e)=>p(void 0,null,function*(){try{yield X(U(S,"tasks",n),{isArchived:!1,updatedAt:j()}),yield se("UPDATE","tasks",n,e,{isArchived:!0},{isArchived:!1})}catch(t){throw t}}),EO=n=>p(void 0,null,function*(){try{const e=q(S,"tasks"),t=yield J(e);let r=Gn(S),i=0;const s=500;for(const u of t.docs){const d=u.data(),h=u.id,m=d.assignedUsers||[];if(m.includes(n)){const v=m.filter(O=>O!==n),E=v.length===0,P={assignedUsers:v};E&&(P.isInPool=!0,P.poolRequests=[]),r.update(u.ref,P),i++,i>=s&&(yield r.commit(),i=0,r=Gn(S))}const _=q(S,`tasks/${h}/assignments`),w=yield J(Q(_,ce("assignedTo","==",n)));for(const v of w.docs)r.delete(v.ref),i++,i>=s&&(yield r.commit(),i=0,r=Gn(S))}i>0&&(yield r.commit());const o=yield J(Q(e,ce("createdBy","==",n)));let a=Gn(S),c=0;for(const u of o.docs)a.update(u.ref,{createdBy:"deleted_user",createdByName:"Silinmiş Kullanıcı"}),c++,c>=s&&(yield a.commit(),c=0,a=Gn(S));c>0&&(yield a.commit())}catch(e){throw e}}),TO=Object.freeze(Object.defineProperty({__proto__:null,acceptTaskAssignment:J1,addChecklistItem:iO,addTaskActivity:go,addTaskAttachment:aO,approvePoolRequest:hO,approveTask:pO,approveTaskRejection:_O,archiveTask:wO,assignTask:Hv,createChecklist:tO,createTask:K1,deleteChecklistItem:sO,deleteTask:Wv,deleteTaskAssignment:eO,deleteTaskAttachment:lO,getAllTaskAssignments:Z1,getChecklists:rO,getTaskAssignments:Ge,getTaskAttachments:cO,getTaskById:Me,getTaskComments:oO,getTasks:Gv,rejectPoolRequest:fO,rejectTaskApproval:gO,rejectTaskAssignment:X1,rejectTaskRejection:yO,removeTaskFromPool:uO,removeUserFromAllTasks:EO,requestTaskApproval:mO,requestTaskFromPool:dO,subscribeToTasks:H1,unarchiveTask:vO,updateChecklistItem:nO,updateTask:Q1,updateTaskStatus:Y1},Symbol.toStringTag,{value:"Module"})),tL=n=>p(void 0,null,function*(){try{let e=Q(q(S,"orders"),fe("createdAt","desc"),Ne(500));return n!=null&&n.customerId&&(e=Q(e,ce("customerId","==",n.customerId))),n!=null&&n.status&&(e=Q(e,ce("status","==",n.status))),(yield J(e)).docs.map(r=>F({id:r.id},r.data()))}catch(e){const t=e instanceof Error?e.message:String(e);if((e==null?void 0:e.code)==="failed-precondition"||t.includes("index"))try{const i=Q(q(S,"orders"),fe("createdAt","desc"),Ne(500));let o=(yield J(i)).docs.map(a=>F({id:a.id},a.data()));return n!=null&&n.customerId&&(o=o.filter(a=>a.customerId===n.customerId)),n!=null&&n.status&&(o=o.filter(a=>a.status===n.status)),o}catch(i){let o=(yield J(Q(q(S,"orders"),Ne(500)))).docs.map(a=>F({id:a.id},a.data()));return n!=null&&n.customerId&&(o=o.filter(a=>a.customerId===n.customerId)),n!=null&&n.status&&(o=o.filter(a=>a.status===n.status)),o.sort((a,c)=>{var h,m;const u=((h=a.createdAt)==null?void 0:h.toMillis())||0;return(((m=c.createdAt)==null?void 0:m.toMillis())||0)-u}),o}throw e}}),dn=n=>p(void 0,null,function*(){try{const e=yield ne(U(S,"orders",n));return e.exists()?F({id:e.id},e.data()):null}catch(e){throw e}}),nL=n=>p(void 0,null,function*(){try{return(yield J(q(S,"orders",n,"items"))).docs.map(t=>F({id:t.id},t.data()))}catch(e){throw e}}),rL=(n,e)=>p(void 0,null,function*(){var t,r;try{const i=yield we(q(S,"orders"),le(F({},n),{createdAt:j(),updatedAt:j()}));if(e&&e.length>0){const c=Gn(S),u=q(S,"orders",i.id,"items"),d=[];for(const h of e){const m=U(u);c.set(m,h),d.push(m.id)}yield c.commit(),n.createdBy&&d.length>0&&(yield Promise.all(d.map((h,m)=>se("CREATE","order_items",h,n.createdBy,null,e[m],{orderId:i.id}).catch(_=>{}))))}const s=le(F({id:i.id},n),{createdAt:$.now(),updatedAt:$.now()}),o=((t=n.orderNumber)==null?void 0:t.startsWith("PROD-"))||((r=n.order_number)==null?void 0:r.startsWith("PROD-"));if((o||n.deductMaterials===!0)&&e&&e.length>0)try{const{getProductRecipes:c}=yield z(()=>p(void 0,null,function*(){const{getProductRecipes:x}=yield Promise.resolve().then(()=>WO);return{getProductRecipes:x}}),void 0),{getRawMaterialById:u,updateRawMaterial:d,addMaterialTransaction:h}=yield z(()=>p(void 0,null,function*(){const{getRawMaterialById:x,updateRawMaterial:Z,addMaterialTransaction:K}=yield Promise.resolve().then(()=>BO);return{getRawMaterialById:x,updateRawMaterial:Z,addMaterialTransaction:K}}),void 0),m=e.filter(x=>x.product_id||x.productId).map(x=>p(void 0,null,function*(){const Z=x.product_id||x.productId,K=x.quantity||1;return(yield c(Z)).map(T=>({recipe:T,quantity:K,productName:x.product_name||"Ürün",item:x}))})),w=(yield Promise.all(m)).flat(),E=[...new Set(w.map(x=>x.recipe.rawMaterialId).filter(Boolean))].map(x=>u(x)),P=yield Promise.all(E),O=new Map(P.filter(Boolean).map(x=>[x.id,x])),M=[];for(const{recipe:x,quantity:Z,productName:K}of w)if(x.rawMaterialId){const R=O.get(x.rawMaterialId);if(R){const T=x.quantityPerUnit*Z,I=Math.max(0,R.currentStock-T),b=M.find(k=>k.materialId===x.rawMaterialId);b?(b.newStock=Math.max(0,b.newStock-T),b.totalQuantity+=T):M.push({materialId:x.rawMaterialId,newStock:I,totalQuantity:T,reason:`${o?"Üretim siparişi":"Sipariş"}: ${n.orderNumber||i.id} - ${K} (${Z} adet)`})}}yield Promise.all(M.map(x=>p(void 0,null,function*(){try{yield d(x.materialId,{currentStock:x.newStock}),yield h({materialId:x.materialId,type:"out",quantity:x.totalQuantity,reason:x.reason,relatedOrderId:i.id,createdBy:n.createdBy},!0)}catch(Z){}})))}catch(c){}if(yield se("CREATE","orders",i.id,n.createdBy,null,s),n.createdBy)try{const{getUserProfile:c}=yield z(()=>p(void 0,null,function*(){const{getUserProfile:m}=yield Promise.resolve().then(()=>Ae);return{getUserProfile:m}}),void 0),u=yield c(n.createdBy),d=(u==null?void 0:u.fullName)||(u==null?void 0:u.displayName)||(u==null?void 0:u.email),h=u==null?void 0:u.email;yield ja(i.id,n.createdBy,"created","bu siparişi oluşturdu",{orderNumber:n.orderNumber||n.order_number},d,h)}catch(c){}return s}catch(i){throw i}}),IO=(n,e)=>({draft:["pending","cancelled"],pending:["confirmed","cancelled"],confirmed:["in_production","on_hold","cancelled"],planned:["in_production","pending","on_hold","cancelled"],in_production:["quality_check","completed","on_hold","cancelled"],quality_check:["completed","in_production","on_hold","cancelled"],completed:[],on_hold:["in_production","cancelled"],shipped:["delivered"],delivered:["completed","quality_check","in_production"],cancelled:[]}[n]||[]).includes(e),iL=(n,e,t,r)=>p(void 0,null,function*(){try{const i=yield dn(n);if(!i)throw new Error("Sipariş bulunamadı");if(e.status&&e.status!==i.status&&!r&&!IO(i.status,e.status))throw new Error(`Geçersiz durum geçişi: ${i.status} → ${e.status}. Geçerli geçişler: ${AO(i.status).join(", ")}`);const s=le(F({},e),{updatedAt:j()});e.status&&e.status!==i.status&&t&&(s.statusUpdatedBy=t,s.statusUpdatedAt=j()),yield X(U(S,"orders",n),s);const o=yield dn(n);if(t&&(yield se("UPDATE","orders",n,t,i,o)),t)try{const{getUserProfile:a}=yield z(()=>p(void 0,null,function*(){const{getUserProfile:h}=yield Promise.resolve().then(()=>Ae);return{getUserProfile:h}}),void 0),c=yield a(t),u=(c==null?void 0:c.fullName)||(c==null?void 0:c.displayName)||(c==null?void 0:c.email),d=c==null?void 0:c.email;if(e.status&&e.status!==i.status){const h={draft:"Taslak",pending:"Beklemede",confirmed:"Onaylandı",planned:"Planlanan",in_production:"Üretimde",quality_check:"Kalite Kontrol",completed:"Tamamlandı",shipped:"Kargoda",delivered:"Teslim Edildi",on_hold:"Beklemede",cancelled:"İptal"},m=h[i.status]||i.status,_=h[e.status]||e.status;yield ja(n,t,"status_changed",`bu siparişi ${m} durumundan ${_} durumuna taşıdı`,{oldStatus:i.status,newStatus:e.status},u,d)}else{const h=Object.keys(e).filter(m=>{const _=i[m],w=e[m];return _!==w});h.length>0&&(yield ja(n,t,"updated","bu siparişi güncelledi",{changedFields:h},u,d))}}catch(a){console.error("Add order activity error:",a)}if(i.createdBy&&i.createdBy!==t)try{const{createNotification:a}=yield z(()=>p(void 0,null,function*(){const{createNotification:m}=yield Promise.resolve().then(()=>bt);return{createNotification:m}}),void 0),{getUserProfile:c}=yield z(()=>p(void 0,null,function*(){const{getUserProfile:m}=yield Promise.resolve().then(()=>Ae);return{getUserProfile:m}}),void 0),u=t?yield c(t):null,d=(u==null?void 0:u.fullName)||(u==null?void 0:u.displayName)||(u==null?void 0:u.email)||"Bir kullanıcı";let h=`"${i.orderNumber||i.order_number||n}" siparişi güncellendi.`;if(e.status&&e.status!==i.status){const m={draft:"Taslak",pending:"Beklemede",confirmed:"Onaylandı",in_production:"Üretimde",quality_check:"Kalite Kontrol",completed:"Tamamlandı",shipped:"Kargoda",delivered:"Teslim Edildi",cancelled:"İptal",on_hold:"Beklemede"},_=m[i.status]||i.status,w=m[e.status]||e.status,v=new Date().toLocaleString("tr-TR",{day:"numeric",month:"long",year:"numeric",hour:"2-digit",minute:"2-digit"});h=`"${i.orderNumber||i.order_number||n}" sipariş numaralı siparişin durumu "${_}" durumundan "${w}" durumuna güncellendi.

İşlem Zamanı: ${v}`}else{const m=new Date().toLocaleString("tr-TR",{day:"numeric",month:"long",year:"numeric",hour:"2-digit",minute:"2-digit"});h=`"${i.orderNumber||i.order_number||n}" sipariş numaralı sipariş güncellendi.

İşlem Zamanı: ${m}`}yield a({userId:i.createdBy,type:"order_updated",title:"Siparişiniz güncellendi",message:`${d} kullanıcısı tarafından ${h}`,read:!1,relatedId:n,metadata:{updatedBy:t,statusChanged:e.status&&e.status!==i.status,oldStatus:i.status,newStatus:e.status||i.status,updatedAt:new Date}})}catch(a){console.error("Sipariş güncelleme bildirimi gönderilemedi:",a)}}catch(i){throw console.error("Update order error:",i),i}}),sL=(n,e)=>p(void 0,null,function*(){try{const t=yield dn(n);if(yield X(U(S,"orders",n),{approvalStatus:"pending",approvalRequestedBy:e,approvalRequestedAt:j(),updatedAt:j()}),e){const r=yield dn(n);yield se("UPDATE","orders",n,e,t,r,{action:"request_completion",approvalStatus:"pending"})}}catch(t){throw console.error("Request order completion error:",t),t}}),oL=(n,e)=>p(void 0,null,function*(){try{const t=yield dn(n);if(yield X(U(S,"orders",n),{status:"completed",approvalStatus:"approved",approvedBy:e,approvedAt:j(),updatedAt:j()}),e){const r=yield dn(n);yield se("UPDATE","orders",n,e,t,r,{action:"approve_completion",approvalStatus:"approved"})}}catch(t){throw console.error("Approve order completion error:",t),t}}),aL=(n,e,t)=>p(void 0,null,function*(){try{const r=yield dn(n);if(yield X(U(S,"orders",n),{status:"in_production",approvalStatus:"rejected",rejectedBy:e,rejectedAt:j(),rejectionReason:null,updatedAt:j()}),e){const i=yield dn(n);yield se("UPDATE","orders",n,e,r,i,{action:"reject_completion",approvalStatus:"rejected",reason:null})}}catch(r){throw console.error("Reject order completion error:",r),r}}),AO=n=>({draft:["pending","cancelled"],pending:["confirmed","cancelled"],confirmed:["in_production","on_hold","cancelled"],planned:["in_production","pending","on_hold","cancelled"],in_production:["quality_check","completed","on_hold","cancelled"],quality_check:["completed","in_production","on_hold","cancelled"],completed:[],on_hold:["in_production","cancelled"],shipped:["delivered"],delivered:["completed","quality_check","in_production"],cancelled:[]})[n]||[],cL=(n,e)=>p(void 0,null,function*(){try{yield dn(n),yield We(U(S,"orders",n))}catch(t){throw console.error("Delete order error:",t),t}}),lL=(n={},e)=>{try{const t=q(S,"orders");let i=(()=>{const o=[fe("createdAt","desc")];return n!=null&&n.customerId&&o.push(ce("customerId","==",n.customerId)),n!=null&&n.status&&o.push(ce("status","==",n.status)),Q(t,...o)})();return lr(i,o=>{try{let a=o.docs.map(c=>F({id:c.id},c.data()));n!=null&&n.customerId&&(a=a.filter(c=>c.customerId===n.customerId)),n!=null&&n.status&&(a=a.filter(c=>c.status===n.status)),e(a)}catch(a){console.error("Subscribe to orders error:",a),e([])}},o=>{var a,c,u,d;if((o==null?void 0:o.code)==="unavailable"||(o==null?void 0:o.code)==="not-found"||(a=o==null?void 0:o.message)!=null&&a.includes("404")||(c=o==null?void 0:o.message)!=null&&c.includes("network")||(u=o==null?void 0:o.message)!=null&&u.includes("transport errored")){e([]);return}if((o==null?void 0:o.code)==="failed-precondition"||(d=o==null?void 0:o.message)!=null&&d.includes("index"))try{const h=Q(t,fe("createdAt","desc"));return lr(h,_=>{try{let w=_.docs.map(v=>F({id:v.id},v.data()));n!=null&&n.customerId&&(w=w.filter(v=>v.customerId===n.customerId)),n!=null&&n.status&&(w=w.filter(v=>v.status===n.status)),e(w)}catch(w){console.error("Fallback subscribe to orders error:",w),e([])}},_=>{console.error("Fallback orders snapshot error:",_),e([])})}catch(h){console.error("Fallback query setup error:",h),e([])}else e([])})}catch(t){return()=>{}}},uL=(n,e,t,r,i)=>p(void 0,null,function*(){try{const s={orderId:n,userId:e,userName:r,userEmail:i,content:t,createdAt:$.now(),updatedAt:null},o=yield we(q(S,"orders",n,"comments"),s);yield ja(n,e,"commented","yorum ekledi",{commentId:o.id},r,i);try{const a=yield dn(n);if(a!=null&&a.createdBy&&a.createdBy!==e){const{createNotification:c}=yield z(()=>p(void 0,null,function*(){const{createNotification:u}=yield Promise.resolve().then(()=>bt);return{createNotification:u}}),void 0);yield c({userId:a.createdBy,type:"comment_added",title:"Siparişinize Yorum Eklendi",message:`Bir kullanıcı "${a.orderNumber||a.order_number||n}" siparişinize yorum ekledi: ${t.substring(0,100)}${t.length>100?"...":""}`,read:!1,relatedId:n,metadata:{commentId:o.id,commenterId:e,commenterName:r,commenterEmail:i}})}}catch(a){console.error("Send comment notification error:",a)}return F({id:o.id},s)}catch(s){throw console.error("Add order comment error:",s),s}}),dL=n=>p(void 0,null,function*(){try{return(yield J(Q(q(S,"orders",n,"comments"),fe("createdAt","desc")))).docs.map(t=>F({id:t.id},t.data()))}catch(e){throw console.error("Get order comments error:",e),e}}),ja=(n,e,t,r,i,s,o)=>p(void 0,null,function*(){try{const a={orderId:n,userId:e,userName:s,userEmail:o,action:t,description:r,metadata:i||{},createdAt:$.now()};return(yield we(q(S,"orders",n,"activities"),a)).id}catch(a){return""}}),hL=n=>p(void 0,null,function*(){try{return(yield J(Q(q(S,"orders",n,"activities"),fe("createdAt","desc")))).docs.map(t=>F({id:t.id},t.data()))}catch(e){throw console.error("Get order activities error:",e),e}}),fL=()=>p(void 0,null,function*(){try{if(!S)throw new Error("Firebase Firestore başlatılamadı. Lütfen .env dosyasında Firebase yapılandırmasını kontrol edin.");try{const n=Q(q(S,"customers"),fe("createdAt","desc"),Ne(500));return(yield J(n)).docs.map(i=>F({id:i.id},i.data())).filter((i,s,o)=>s===o.findIndex(a=>a.id===i.id))}catch(n){const e=Q(q(S,"customers"),Ne(500));return(yield J(e)).docs.map(s=>F({id:s.id},s.data())).filter((s,o,a)=>o===a.findIndex(c=>c.id===s.id)).sort((s,o)=>{var u,d;const a=((u=s.createdAt)==null?void 0:u.toMillis())||0;return(((d=o.createdAt)==null?void 0:d.toMillis())||0)-a})}}catch(n){throw n}}),za=n=>p(void 0,null,function*(){try{const e=yield ne(U(S,"customers",n));return e.exists()?F({id:e.id},e.data()):null}catch(e){throw e}}),mL=n=>p(void 0,null,function*(){try{const e=yield we(q(S,"customers"),le(F({},n),{createdAt:j(),updatedAt:j()})),t=yield za(e.id);if(!t)throw new Error("Müşteri oluşturulamadı");if(yield se("CREATE","customers",e.id,n.createdBy,null,t),n.createdBy)try{const{getUserProfile:r}=yield z(()=>p(void 0,null,function*(){const{getUserProfile:a}=yield Promise.resolve().then(()=>Ae);return{getUserProfile:a}}),void 0),i=yield r(n.createdBy),s=(i==null?void 0:i.fullName)||(i==null?void 0:i.displayName)||(i==null?void 0:i.email),o=i==null?void 0:i.email;yield sh(e.id,n.createdBy,"created","bu müşteriyi oluşturdu",{customerName:n.name},s,o)}catch(r){}return t}catch(e){throw e}}),pL=(n,e,t)=>p(void 0,null,function*(){try{const r=yield za(n);yield X(U(S,"customers",n),le(F({},e),{updatedAt:j()}));const i=yield za(n);if(t&&(yield se("UPDATE","customers",n,t,r,i)),t&&r)try{const{getUserProfile:s}=yield z(()=>p(void 0,null,function*(){const{getUserProfile:d}=yield Promise.resolve().then(()=>Ae);return{getUserProfile:d}}),void 0),o=yield s(t),a=(o==null?void 0:o.fullName)||(o==null?void 0:o.displayName)||(o==null?void 0:o.email),c=o==null?void 0:o.email,u=Object.keys(e).filter(d=>{const h=r[d],m=e[d];return h!==m});u.length>0&&(yield sh(n,t,"updated","bu müşteriyi güncelledi",{changedFields:u},a,c))}catch(s){}}catch(r){throw console.error("Update customer error:",r),r}}),gL=(n,e)=>p(void 0,null,function*(){try{const t=yield za(n);if(e&&t)try{const{getUserProfile:r}=yield z(()=>p(void 0,null,function*(){const{getUserProfile:a}=yield Promise.resolve().then(()=>Ae);return{getUserProfile:a}}),void 0),i=yield r(e),s=(i==null?void 0:i.fullName)||(i==null?void 0:i.displayName)||(i==null?void 0:i.email),o=i==null?void 0:i.email;yield sh(n,e,"deleted","bu müşteriyi sildi",{customerName:t.name},s,o)}catch(r){}yield We(U(S,"customers",n)),e&&(yield se("DELETE","customers",n,e,t,null))}catch(t){throw t}}),sh=(n,e,t,r,i,s,o)=>p(void 0,null,function*(){try{const a={customerId:n,userId:e,userName:s,userEmail:o,action:t,description:r,metadata:i||{},createdAt:$.now()};return(yield we(q(S,"customers",n,"activities"),a)).id}catch(a){return""}}),_L=()=>p(void 0,null,function*(){try{const n=Q(q(S,"products"),fe("createdAt","desc"),Ne(500));return(yield J(n)).docs.map(t=>F({id:t.id},t.data()))}catch(n){const e=n instanceof Error?n.message:String(n);if((n==null?void 0:n.code)==="failed-precondition"||e.includes("index")||e.includes("requires an index"))try{const r=Q(q(S,"products"),Ne(500));let s=(yield J(r)).docs.map(o=>F({id:o.id},o.data()));return s.sort((o,a)=>{var d,h;const c=((d=o.createdAt)==null?void 0:d.toMillis())||0;return(((h=a.createdAt)==null?void 0:h.toMillis())||0)-c}),s}catch(r){return[]}throw n}}),qs=n=>p(void 0,null,function*(){try{const e=yield ne(U(S,"products",n));return e.exists()?F({id:e.id},e.data()):null}catch(e){throw e}}),yL=n=>p(void 0,null,function*(){try{const e=yield we(q(S,"products"),le(F({},n),{createdAt:j(),updatedAt:j()})),t=yield qs(e.id);if(!t)throw new Error("Ürün oluşturulamadı");if(yield se("CREATE","products",e.id,n.createdBy,null,t),n.createdBy)try{const{getUserProfile:r}=yield z(()=>p(void 0,null,function*(){const{getUserProfile:a}=yield Promise.resolve().then(()=>Ae);return{getUserProfile:a}}),void 0),i=yield r(n.createdBy),s=(i==null?void 0:i.fullName)||(i==null?void 0:i.displayName)||(i==null?void 0:i.email),o=i==null?void 0:i.email;yield oh(e.id,n.createdBy,"created","bu ürünü oluşturdu",{productName:n.name},s,o)}catch(r){}return t}catch(e){throw e}}),wL=(n,e,t)=>p(void 0,null,function*(){try{yield qs(n),yield X(U(S,"products",n),le(F({},e),{updatedAt:j()})),yield qs(n)}catch(r){throw r}}),vL=(n,e)=>p(void 0,null,function*(){try{const t=yield qs(n);if(e&&t)try{const{getUserProfile:r}=yield z(()=>p(void 0,null,function*(){const{getUserProfile:a}=yield Promise.resolve().then(()=>Ae);return{getUserProfile:a}}),void 0),i=yield r(e),s=(i==null?void 0:i.fullName)||(i==null?void 0:i.displayName)||(i==null?void 0:i.email),o=i==null?void 0:i.email;yield oh(n,e,"deleted","bu ürünü sildi",{productName:t.name},s,o)}catch(r){}yield We(U(S,"products",n)),e&&(yield se("DELETE","products",n,e,t,null))}catch(t){throw t}}),EL=(n,e,t,r,i)=>p(void 0,null,function*(){try{const s={productId:n,userId:e,userName:r,userEmail:i,content:t,createdAt:$.now(),updatedAt:null},o=yield we(q(S,"products",n,"comments"),s);yield oh(n,e,"commented","yorum ekledi",{commentId:o.id},r,i);try{const a=yield qs(n);if(a!=null&&a.createdBy&&a.createdBy!==e){const{createNotification:c}=yield z(()=>p(void 0,null,function*(){const{createNotification:u}=yield Promise.resolve().then(()=>bt);return{createNotification:u}}),void 0);yield c({userId:a.createdBy,type:"comment_added",title:"Ürününüze Yorum Eklendi",message:`${r||i||"Bir kullanıcı"} "${a.name}" ürününüze yorum ekledi: ${t.substring(0,100)}${t.length>100?"...":""}`,read:!1,relatedId:n,metadata:{commentId:o.id,commenterId:e,commenterName:r,commenterEmail:i}})}}catch(a){}return F({id:o.id},s)}catch(s){throw s}}),TL=n=>p(void 0,null,function*(){try{return(yield J(Q(q(S,"products",n,"comments"),fe("createdAt","desc")))).docs.map(t=>F({id:t.id},t.data()))}catch(e){throw e}}),oh=(n,e,t,r,i,s,o)=>p(void 0,null,function*(){try{const a={productId:n,userId:e,userName:s,userEmail:o,action:t,description:r,metadata:i||{},createdAt:$.now()};return(yield we(q(S,"products",n,"activities"),a)).id}catch(a){return""}}),IL=n=>p(void 0,null,function*(){try{return(yield J(Q(q(S,"products",n,"activities"),fe("createdAt","desc")))).docs.map(t=>F({id:t.id},t.data()))}catch(e){throw e}}),js="turkuast_drive_token",zs="turkuast_drive_token_expiry",RO=()=>p(void 0,null,function*(){if(!(C!=null&&C.currentUser))throw new Error("Kullanıcı giriş yapmamış. Lütfen önce giriş yapın.");if(!C.currentUser.providerData.some(r=>r.providerId==="google.com")){const r=new Tt;r.addScope("https://www.googleapis.com/auth/drive.file");try{const i=yield _a(C,r),s=Tt.credentialFromResult(i);if(!(s!=null&&s.accessToken))throw new Error("Google Drive erişim token'ı alınamadı");return jp(s.accessToken,3600),s.accessToken}catch(i){throw i&&typeof i=="object"&&"code"in i&&i.code==="auth/popup-closed-by-user"?new Error("Google bağlantısı iptal edildi."):new Error(i instanceof Error?i.message:"Google token alınamadı")}}const t=Kv();if(!t){const r=new Tt;r.addScope("https://www.googleapis.com/auth/drive.file");try{const i=yield _a(C,r),s=Tt.credentialFromResult(i);if(!(s!=null&&s.accessToken))throw new Error("Google Drive erişim token'ı alınamadı");return jp(s.accessToken,3600),s.accessToken}catch(i){throw i&&typeof i=="object"&&"code"in i&&i.code==="auth/popup-closed-by-user"?new Error("Google bağlantısı iptal edildi."):new Error(i instanceof Error?i.message:"Google token alınamadı")}}return t}),jp=(n,e)=>{const t=Date.now()+e*1e3;localStorage.setItem(js,n),localStorage.setItem(zs,t.toString())},Kv=()=>{const n=localStorage.getItem(js),e=localStorage.getItem(zs);return!n||!e?null:Date.now()>parseInt(e,10)?(localStorage.removeItem(js),localStorage.removeItem(zs),null):n},Qv=()=>p(void 0,null,function*(){const n=Kv();return n||(yield RO())}),Yv=(t,...r)=>p(void 0,[t,...r],function*(n,e={}){var i;try{const s=yield Qv(),o=n instanceof File?n:new File([n],e.fileName||"file",{type:n.type}),a={name:e.fileName||o.name,mimeType:o.type||"application/octet-stream"};e.folderId&&(a.parents=[e.folderId]),e.metadata&&(a.properties=e.metadata);const c="----WebKitFormBoundary"+Math.random().toString(36).substring(2),u=`\r
--`+c+`\r
`,d=`\r
--`+c+"--",h=`Content-Type: application/json; charset=UTF-8\r
\r
${JSON.stringify(a)}`,m=`Content-Type: ${o.type||"application/octet-stream"}\r
\r
`,_=yield o.arrayBuffer(),w=new Uint8Array(_),v=new TextEncoder,E=[v.encode(u),v.encode(h),v.encode(u),v.encode(m),w,v.encode(d)],P=E.reduce((I,b)=>I+b.length,0),O=new Uint8Array(P);let M=0;for(const I of E)O.set(I,M),M+=I.length;const x=new Blob([O],{type:`multipart/related; boundary=${c}`}),Z=yield fetch("https://www.googleapis.com/upload/drive/v3/files?uploadType=multipart&fields=id,webViewLink,webContentLink",{method:"POST",headers:{Authorization:`Bearer ${s}`,"Content-Type":`multipart/related; boundary=${c}`},body:x});if(!Z.ok){let b=((i=(yield Z.json().catch(()=>({}))).error)==null?void 0:i.message)||"Dosya yükleme başarısız oldu";throw Z.status===401?(localStorage.removeItem(js),localStorage.removeItem(zs),b="Yetkilendirme hatası. Lütfen tekrar deneyin."):Z.status===403?b="Google Drive izni yok. Lütfen yetkilendirme yapın.":Z.status===507&&(b="Google Drive depolama kotası dolmuş."),new Error(b)}const K=yield Z.json();if(!K.id)throw new Error("Dosya yükleme başarısız oldu");const R=K.id;if(e.makePublic!==!1)try{yield fetch(`https://www.googleapis.com/drive/v3/files/${R}/permissions`,{method:"POST",headers:{Authorization:`Bearer ${s}`,"Content-Type":"application/json"},body:JSON.stringify({role:"reader",type:"anyone"})})}catch(I){}const T=K.webViewLink||`https://drive.google.com/file/d/${R}/view`;return{success:!0,fileId:R,webViewLink:T,webContentLink:K.webContentLink}}catch(s){let o="Google Drive yüklemesi başarısız oldu";throw s instanceof Error?o=s.message:typeof s=="string"?o=s:s&&typeof s=="object"&&"message"in s&&(o=s.message),o.includes("auth")||o.includes("unauthorized")||o.includes("401")?o="Google Drive yetkilendirmesi gerekli. Lütfen Google ile giriş yapın.":o.includes("quota")||o.includes("storage")||o.includes("507")?o="Google Drive depolama kotası dolmuş. Lütfen depolama alanını kontrol edin.":o.includes("403")&&(o="Google Drive izni yok. Lütfen Google ile giriş yapın."),new Error(o)}}),bO=n=>p(void 0,null,function*(){var e;if(!n||n.trim()==="")throw new Error("Geçerli bir Drive dosya ID'si gerekli");try{const t=yield Qv(),r=yield fetch(`https://www.googleapis.com/drive/v3/files/${n}`,{method:"DELETE",headers:{Authorization:`Bearer ${t}`}});if(!r.ok){let s=((e=(yield r.json().catch(()=>({}))).error)==null?void 0:e.message)||"Drive dosyası silinemedi";throw r.status===401&&(localStorage.removeItem(js),localStorage.removeItem(zs),s="Yetkilendirme hatası. Lütfen tekrar deneyin."),new Error(s)}}catch(t){let r="Drive dosyası silinemedi";throw t instanceof Error&&t.message?r=t.message:typeof t=="string"?r=t:t&&typeof t=="object"&&"message"in t&&(r=t.message),new Error(r)}}),Jv=n=>({provider:"google_drive",fileId:n.fileId,webViewLink:n.webViewLink,webContentLink:n.webContentLink,url:n.webViewLink||n.webContentLink||""}),SO=(n,e,t)=>p(void 0,null,function*(){try{if(!xr)throw new Error("Firebase Storage başlatılmamış");const r=Dv(xr,e),i=yield JD(r,n);return yield XD(i.ref)}catch(r){throw new Error(r instanceof Error?r.message:"Dosya yüklenirken hata oluştu")}}),kO=(n,e,t)=>p(void 0,null,function*(){if(n.size>10*1024*1024)throw new Error("Dosya boyutu 10MB'dan küçük olmalıdır");const r=Date.now(),i=`tasks/${e}/attachments/${r}_${n.name}`,s=yield Yv(n,{type:"task",fileName:n.name,metadata:{taskId:e,path:i}});return Jv(s)}),Xv=(n,e,t,r)=>p(void 0,null,function*(){const i=Date.now(),s=`reports/${e}/${i}.pdf`,o=n instanceof File?n:new File([n],`${i}.pdf`,{type:"application/pdf"}),a=yield Yv(o,{type:"report",fileName:o.name,metadata:{reportType:e,reportId:null,path:s}});return Jv(a)}),CO=(n,e)=>p(void 0,null,function*(){var t;try{if((e==null?void 0:e.provider)==="google_drive"||e!=null&&e.fileId){if(!(e!=null&&e.fileId))throw new Error("Drive dosyasını silmek için fileId gerekli");yield bO(e.fileId);return}if(!xr)throw new Error("Firebase Storage başlatılmamış");const r=new URL(n),i=decodeURIComponent(((t=r.pathname.split("/o/")[1])==null?void 0:t.split("?")[0])||"");if(!i)throw new Error("Geçersiz dosya URL'i");const s=Dv(xr,i);yield ZD(s)}catch(r){throw console.error("Delete file error:",r),new Error(r.message||"Dosya silinirken hata oluştu")}}),AL=Object.freeze(Object.defineProperty({__proto__:null,deleteFile:CO,uploadFile:SO,uploadReportPDF:Xv,uploadTaskAttachment:kO},Symbol.toStringTag,{value:"Module"})),PO=(n,e,t,r,i)=>p(void 0,null,function*(){var s;try{const o=Date.now(),a=`${n}_${o}.pdf`;let c=null;try{c=yield Xv(t,n)}catch(m){c=null}const u={reportType:n,title:e,startDate:(i==null?void 0:i.startDate)||null,endDate:(i==null?void 0:i.endDate)||null,fileUrl:(c==null?void 0:c.url)||"",fileName:a,fileSize:t.size,createdBy:r,createdAt:j(),metadata:(i==null?void 0:i.metadata)||null,storageProvider:(c==null?void 0:c.provider)||null,driveFileId:(c==null?void 0:c.fileId)||null,driveLink:(c==null?void 0:c.webViewLink)||(c==null?void 0:c.webContentLink)||null},d=yield we(q(S,"reports"),u),h=yield ne(d);return le(F({id:d.id},h.data()),{createdAt:((s=h.data())==null?void 0:s.createdAt)||$.now()})}catch(o){throw o}}),NO=n=>p(void 0,null,function*(){var e;try{let t=Q(q(S,"reports"),fe("createdAt","desc"));return n!=null&&n.reportType&&(t=Q(t,ce("reportType","==",n.reportType))),n!=null&&n.createdBy&&(t=Q(t,ce("createdBy","==",n.createdBy))),(yield J(t)).docs.map(i=>F({id:i.id},i.data()))}catch(t){return console.error("Get saved reports error:",t),(t==null?void 0:t.code)==="failed-precondition"||(e=t==null?void 0:t.message)!=null&&e.includes("index")?(console.warn("Firestore index eksik, boş array döndürülüyor. Index oluşturulana kadar raporlar görünmeyecek."),[]):[]}}),RL=Object.freeze(Object.defineProperty({__proto__:null,getSavedReports:NO,saveReport:PO},Symbol.toStringTag,{value:"Module"})),DO=(n=!1)=>p(void 0,null,function*(){var e;try{let t;t=Q(q(S,"rawMaterials"),fe("createdAt","desc"),Ne(500));const r=yield J(t),i=[];for(const s of r.docs){const o=s.data();if(!o||!n&&(o.deleted===!0||o.isDeleted===!0))continue;const a={id:s.id,name:o.name||"",code:o.code||o.sku||null,sku:o.sku||o.code||null,category:o.category||"other",unit:o.unit||"Adet",currentStock:o.currentStock!==void 0?o.currentStock:o.stock||0,stock:o.stock!==void 0?o.stock:o.currentStock||0,minStock:o.minStock!==void 0?o.minStock:o.min_stock||0,min_stock:o.min_stock!==void 0?o.min_stock:o.minStock||0,maxStock:o.maxStock!==void 0?o.maxStock:o.max_stock||null,max_stock:o.max_stock!==void 0?o.max_stock:o.maxStock||null,cost:o.cost!==void 0?o.cost:o.unitPrice||null,unitPrice:o.unitPrice!==void 0?o.unitPrice:o.cost||null,totalPrice:o.totalPrice!==void 0?o.totalPrice:null,brand:o.brand||null,link:o.link||null,purchasedBy:o.purchasedBy||null,location:o.location||null,currency:o.currency||null,currencies:o.currencies||null,notes:o.notes||null,description:o.description||null,createdBy:o.createdBy||null,createdAt:o.createdAt||$.now(),updatedAt:o.updatedAt||$.now()};i.push(a)}return i}catch(t){throw tn(t)?en(t,{operation:"read",collection:"rawMaterials",userId:(e=C==null?void 0:C.currentUser)==null?void 0:e.uid}):t}}),Ur=n=>p(void 0,null,function*(){var e;try{const t=yield ne(U(S,"rawMaterials",n));if(!t.exists())return null;const r=t.data();return{id:t.id,name:r.name||"",code:r.code||r.sku||null,sku:r.sku||r.code||null,category:r.category||"other",unit:r.unit||"Adet",currentStock:r.currentStock!==void 0?r.currentStock:r.stock||0,stock:r.stock!==void 0?r.stock:r.currentStock||0,minStock:r.minStock!==void 0?r.minStock:r.min_stock||0,min_stock:r.min_stock!==void 0?r.min_stock:r.minStock||0,maxStock:r.maxStock!==void 0?r.maxStock:r.max_stock||null,max_stock:r.max_stock!==void 0?r.max_stock:r.maxStock||null,cost:r.cost!==void 0?r.cost:r.unitPrice||null,unitPrice:r.unitPrice!==void 0?r.unitPrice:r.cost||null,totalPrice:r.totalPrice!==void 0?r.totalPrice:null,brand:r.brand||null,link:r.link||null,purchasedBy:r.purchasedBy||null,location:r.location||null,currency:r.currency||null,currencies:r.currencies||null,notes:r.notes||null,description:r.description||null,createdBy:r.createdBy||null,createdAt:r.createdAt||$.now(),updatedAt:r.updatedAt||$.now()}}catch(t){throw tn(t)?en(t,{operation:"read",collection:"rawMaterials",documentId:n,userId:(e=C==null?void 0:C.currentUser)==null?void 0:e.uid}):t}}),OO=n=>p(void 0,null,function*(){var e,t,r;try{const i=(e=C==null?void 0:C.currentUser)==null?void 0:e.uid,s=yield we(q(S,"rawMaterials"),le(F({},n),{createdBy:i||n.createdBy||null,createdAt:j(),updatedAt:j()})),o=yield Ur(s.id);if(!o)throw new Error("Hammade oluşturulamadı");i&&(yield se("CREATE","raw_materials",s.id,i,null,o));const a=i||n.createdBy||((t=C==null?void 0:C.currentUser)==null?void 0:t.uid);if(a)try{const{getUserProfile:c}=yield z(()=>p(void 0,null,function*(){const{getUserProfile:m}=yield Promise.resolve().then(()=>Ae);return{getUserProfile:m}}),void 0),u=yield c(a),d=(u==null?void 0:u.fullName)||(u==null?void 0:u.displayName)||(u==null?void 0:u.email),h=u==null?void 0:u.email;yield _o(s.id,a,"created","bu hammadeyi oluşturdu",{materialName:n.name},d,h)}catch(c){}return o}catch(i){throw tn(i)?en(i,{operation:"create",collection:"rawMaterials",userId:(r=C==null?void 0:C.currentUser)==null?void 0:r.uid,data:n}):i}}),Zv=(n,e,t)=>p(void 0,null,function*(){var r,i;try{const s=yield Ur(n);yield X(U(S,"rawMaterials",n),le(F({},e),{updatedAt:j()}));const o=yield Ur(n);t&&(yield se("UPDATE","raw_materials",n,t,s,o));const a=t||((r=C==null?void 0:C.currentUser)==null?void 0:r.uid);if(a&&s)try{const{getUserProfile:c}=yield z(()=>p(void 0,null,function*(){const{getUserProfile:_}=yield Promise.resolve().then(()=>Ae);return{getUserProfile:_}}),void 0),u=yield c(a),d=(u==null?void 0:u.fullName)||(u==null?void 0:u.displayName)||(u==null?void 0:u.email),h=u==null?void 0:u.email,m=Object.keys(e).filter(_=>{const w=s[_],v=e[_];return w!==v});m.length>0&&(yield _o(n,a,"updated","bu hammadeyi güncelledi",{changedFields:m},d,h))}catch(c){}}catch(s){throw tn(s)?en(s,{operation:"update",collection:"rawMaterials",documentId:n,userId:t||((i=C==null?void 0:C.currentUser)==null?void 0:i.uid),data:e}):s}}),LO=(n,e)=>p(void 0,null,function*(){var t,r;try{const i=yield Ur(n),s=(t=C==null?void 0:C.currentUser)==null?void 0:t.uid;if(s&&i)try{const{getUserProfile:o}=yield z(()=>p(void 0,null,function*(){const{getUserProfile:d}=yield Promise.resolve().then(()=>Ae);return{getUserProfile:d}}),void 0),a=yield o(s),c=(a==null?void 0:a.fullName)||(a==null?void 0:a.displayName)||(a==null?void 0:a.email),u=a==null?void 0:a.email;yield _o(n,s,"deleted","bu hammadeyi sildi",{materialName:i.name},c,u)}catch(o){}yield We(U(S,"rawMaterials",n))}catch(i){throw tn(i)?en(i,{operation:"delete",collection:"rawMaterials",documentId:n,userId:(r=C==null?void 0:C.currentUser)==null?void 0:r.uid}):i}}),VO=(n,e=!1)=>p(void 0,null,function*(){try{const t=n.materialId,r=yield we(q(S,"rawMaterials",t,"transactions"),le(F({},n),{createdAt:j()}));if(!e){const s=yield Ur(t);if(s){const o=n.type==="in"?s.currentStock+n.quantity:s.currentStock-n.quantity;yield Zv(t,{currentStock:o})}}const i={id:r.id,materialId:n.materialId,type:n.type,quantity:n.quantity,reason:n.reason,relatedOrderId:n.relatedOrderId||null,createdBy:n.createdBy,createdAt:$.now()};try{const{logAudit:s}=yield z(()=>p(void 0,null,function*(){const{logAudit:o}=yield Promise.resolve().then(()=>Mv);return{logAudit:o}}),void 0);yield s("CREATE","material_transactions",r.id,n.createdBy,null,{type:n.type,quantity:n.quantity,reason:n.reason},{materialId:n.materialId,relatedOrderId:n.relatedOrderId||null})}catch(s){}return i}catch(t){throw tn(t)?en(t,{operation:"create",collection:"rawMaterials/transactions",userId:n.createdBy,data:n}):t}}),MO=n=>p(void 0,null,function*(){var e;try{return(yield J(q(S,"rawMaterials",n,"transactions"))).docs.map(r=>{const i=r.data();return{id:r.id,materialId:i.materialId||"",type:i.type||"out",quantity:i.quantity||0,reason:i.reason||"",relatedOrderId:i.relatedOrderId||null,createdAt:i.createdAt||$.now(),createdBy:i.createdBy||""}})}catch(t){throw tn(t)?en(t,{operation:"read",collection:"rawMaterials/transactions",userId:(e=C==null?void 0:C.currentUser)==null?void 0:e.uid}):t}}),xO=(n,e,t,r,i)=>p(void 0,null,function*(){try{const s={materialId:n,userId:e,userName:r,userEmail:i,content:t,createdAt:$.now(),updatedAt:null},o=yield we(q(S,"rawMaterials",n,"comments"),s);yield _o(n,e,"commented","yorum ekledi",{commentId:o.id},r,i);try{const a=yield Ur(n);if(a!=null&&a.createdBy&&a.createdBy!==e){const{createNotification:c}=yield z(()=>p(void 0,null,function*(){const{createNotification:u}=yield Promise.resolve().then(()=>bt);return{createNotification:u}}),void 0);yield c({userId:a.createdBy,type:"comment_added",title:"Hammadenize Yorum Eklendi",message:`${r||i||"Bir kullanıcı"} "${a.name}" hammadenize yorum ekledi: ${t.substring(0,100)}${t.length>100?"...":""}`,read:!1,relatedId:n,metadata:{commentId:o.id,commenterId:e,commenterName:r,commenterEmail:i}})}}catch(a){console.error("Send comment notification error:",a)}return F({id:o.id},s)}catch(s){throw console.error("Add material comment error:",s),s}}),UO=n=>p(void 0,null,function*(){try{return(yield J(Q(q(S,"rawMaterials",n,"comments"),fe("createdAt","desc")))).docs.map(t=>F({id:t.id},t.data()))}catch(e){throw console.error("Get material comments error:",e),e}}),_o=(n,e,t,r,i,s,o)=>p(void 0,null,function*(){try{const a={materialId:n,userId:e,userName:s,userEmail:o,action:t,description:r,metadata:i||{},createdAt:$.now()};return(yield we(q(S,"rawMaterials",n,"activities"),a)).id}catch(a){return console.error("Add material activity error:",a),""}}),FO=n=>p(void 0,null,function*(){try{return(yield J(Q(q(S,"rawMaterials",n,"activities"),fe("createdAt","desc")))).docs.map(t=>F({id:t.id},t.data()))}catch(e){throw console.error("Get material activities error:",e),e}}),BO=Object.freeze(Object.defineProperty({__proto__:null,addMaterialActivity:_o,addMaterialComment:xO,addMaterialTransaction:VO,createRawMaterial:OO,deleteRawMaterial:LO,getMaterialActivities:FO,getMaterialComments:UO,getMaterialTransactions:MO,getRawMaterialById:Ur,getRawMaterials:DO,updateRawMaterial:Zv},Symbol.toStringTag,{value:"Module"})),Fn="warranty",bL=n=>p(void 0,null,function*(){try{let e=Q(q(S,Fn),fe("receivedDate","desc"));return(yield J(e)).docs.map(r=>F({id:r.id},r.data()))}catch(e){throw e}}),Gs=n=>p(void 0,null,function*(){try{const e=yield ne(U(S,Fn,n));return e.exists()?F({id:e.id},e.data()):null}catch(e){throw e}}),SL=n=>p(void 0,null,function*(){try{const e=le(F({},n),{receivedDate:n.receivedDate||$.now(),createdAt:j(),updatedAt:j()}),t=yield we(q(S,Fn),e),r=yield Gs(t.id);if(!r)throw new Error("Garanti kaydı oluşturulamadı");if(yield se("CREATE","warranty",t.id,n.createdBy,null,r),n.createdBy)try{const{getUserProfile:i}=yield z(()=>p(void 0,null,function*(){const{getUserProfile:c}=yield Promise.resolve().then(()=>Ae);return{getUserProfile:c}}),void 0),s=yield i(n.createdBy),o=(s==null?void 0:s.fullName)||(s==null?void 0:s.displayName)||(s==null?void 0:s.email),a=s==null?void 0:s.email;yield Cc(t.id,n.createdBy,"created","bu garanti kaydını oluşturdu",{reason:n.reason},o,a)}catch(i){}return r}catch(e){throw e}}),kL=(n,e,t)=>p(void 0,null,function*(){try{const r=yield Gs(n),i=le(F({},e),{updatedAt:j()});e.status==="completed"&&!(r!=null&&r.completedDate)&&(i.completedDate=j()),e.status==="returned"&&!(r!=null&&r.returnedDate)&&(i.returnedDate=j()),yield X(U(S,Fn,n),i);const s=yield Gs(n);if(t&&(yield se("UPDATE","warranty",n,t,r,s)),t&&r&&s)try{const{getUserProfile:o}=yield z(()=>p(void 0,null,function*(){const{getUserProfile:h}=yield Promise.resolve().then(()=>Ae);return{getUserProfile:h}}),void 0),a=yield o(t),c=(a==null?void 0:a.fullName)||(a==null?void 0:a.displayName)||(a==null?void 0:a.email),u=a==null?void 0:a.email,d=Object.keys(e).filter(h=>{const m=r[h],_=e[h];return m!==_});d.length>0&&(yield Cc(n,t,"updated","bu garanti kaydını güncelledi",{changedFields:d},c,u))}catch(o){}}catch(r){throw r}}),CL=(n,e)=>p(void 0,null,function*(){try{const t=yield Gs(n);if(e&&t)try{const{getUserProfile:r}=yield z(()=>p(void 0,null,function*(){const{getUserProfile:a}=yield Promise.resolve().then(()=>Ae);return{getUserProfile:a}}),void 0),i=yield r(e),s=(i==null?void 0:i.fullName)||(i==null?void 0:i.displayName)||(i==null?void 0:i.email),o=i==null?void 0:i.email;yield Cc(n,e,"deleted","bu garanti kaydını sildi",{reason:t.reason},s,o)}catch(r){}yield We(U(S,Fn,n)),e&&(yield se("DELETE","warranty",n,e,t,null))}catch(t){throw t}}),PL=(n,e,t,r,i)=>p(void 0,null,function*(){try{const s={warrantyId:n,userId:e,userName:r,userEmail:i,content:t,createdAt:$.now(),updatedAt:null},o=yield we(q(S,Fn,n,"comments"),s);yield Cc(n,e,"commented","yorum ekledi",{commentId:o.id},r,i);try{const a=yield Gs(n);if(a!=null&&a.createdBy&&a.createdBy!==e){const{createNotification:c}=yield z(()=>p(void 0,null,function*(){const{createNotification:u}=yield Promise.resolve().then(()=>bt);return{createNotification:u}}),void 0);yield c({userId:a.createdBy,type:"comment_added",title:"Garanti Kaydınıza Yorum Eklendi",message:`${r||i||"Bir kullanıcı"} garanti kaydınıza yorum ekledi: ${t.substring(0,100)}${t.length>100?"...":""}`,read:!1,relatedId:n,metadata:{commentId:o.id,commenterId:e,commenterName:r,commenterEmail:i}})}}catch(a){}return F({id:o.id},s)}catch(s){throw s}}),NL=n=>p(void 0,null,function*(){try{return(yield J(Q(q(S,Fn,n,"comments"),fe("createdAt","desc")))).docs.map(t=>F({id:t.id},t.data()))}catch(e){throw e}}),Cc=(n,e,t,r,i,s,o)=>p(void 0,null,function*(){try{const a={warrantyId:n,userId:e,userName:s,userEmail:o,action:t,description:r,metadata:i||{},createdAt:$.now()};return(yield we(q(S,Fn,n,"activities"),a)).id}catch(a){return""}}),DL=n=>p(void 0,null,function*(){try{return(yield J(Q(q(S,Fn,n,"activities"),fe("createdAt","desc")))).docs.map(t=>F({id:t.id},t.data()))}catch(e){throw e}}),Ws="requests",OL=n=>p(void 0,null,function*(){try{const e=le(F({},n),{status:"pending",createdAt:j(),updatedAt:j()});Object.keys(e).forEach(i=>{e[i]===void 0&&delete e[i]});const r=(yield we(q(S,Ws),e)).id;if(e.assignedTo)try{const i=yield Ee(e.createdBy),s=(i==null?void 0:i.fullName)||(i==null?void 0:i.displayName)||(i==null?void 0:i.email)||"Bir kullanıcı",a={leave:"İzin",purchase:"Satın Alma",advance:"Avans",expense:"Gider",other:"Diğer"}[e.type]||e.type;yield Oe({userId:e.assignedTo,type:"system",title:"Yeni Talep",message:`${s} size "${e.title}" adlı bir ${a} talebi gönderdi.`,read:!1,relatedId:r,metadata:{requestType:e.type,requestTitle:e.title,requestDescription:e.description,amount:e.amount||null,currency:e.currency||null,createdBy:e.createdBy,creatorName:s,createdAt:new Date().toISOString()}})}catch(i){console.error("Request notification error:",i)}return le(F({id:r},e),{createdAt:$.now(),updatedAt:$.now()})}catch(e){throw console.error("Create request error:",e),e}}),LL=n=>p(void 0,null,function*(){try{const e=q(S,Ws);let r=(yield J(e)).docs.map(i=>F({id:i.id},i.data()));return n!=null&&n.isSuperAdmin||(r=r.filter(i=>{const s=(n==null?void 0:n.createdBy)&&i.createdBy===n.createdBy,o=(n==null?void 0:n.assignedTo)&&i.assignedTo===n.assignedTo;return s||o})),r.sort((i,s)=>{const o=i.createdAt instanceof $?i.createdAt.toMillis():0;return(s.createdAt instanceof $?s.createdAt.toMillis():0)-o}),r}catch(e){throw console.error("Get requests error:",e),e}}),VL=(n,e,t,r)=>p(void 0,null,function*(){try{const i={status:e,approvedBy:t,approvedAt:j(),updatedAt:j()};e==="rejected"&&r&&(i.rejectionReason=r),yield X(U(S,Ws,n),i);try{const o=(yield ne(U(S,Ws,n))).data();if(o){const a=yield Ee(t),c=e==="approved"?"Talep Onaylandı":"Talep Reddedildi",u=`"${o.title}" talebiniz ${(a==null?void 0:a.fullName)||"Yönetici"} tarafından ${e==="approved"?"onaylandı":"reddedildi"}.`;yield Oe({userId:o.createdBy,type:"system",title:c,message:u,read:!1,relatedId:n})}}catch(s){console.error("Notification error:",s)}}catch(i){throw console.error("Update request status error:",i),i}}),ML=n=>p(void 0,null,function*(){try{yield We(U(S,Ws,n))}catch(e){throw console.error("Delete request error:",e),e}}),wu="customerNotes",xL=n=>p(void 0,null,function*(){var e;try{const t=Q(q(S,wu),ce("customerId","==",n),fe("createdAt","desc"));return(yield J(t)).docs.map(i=>F({id:i.id},i.data()))}catch(t){const r=t;if((r==null?void 0:r.code)==="failed-precondition"||(e=r==null?void 0:r.message)!=null&&e.includes("index")){console.warn("Customer notes index bulunamadı, basit query kullanılıyor");try{const i=Q(q(S,wu));let o=(yield J(i)).docs.map(a=>F({id:a.id},a.data()));return o=o.filter(a=>a.customerId===n),o.sort((a,c)=>{var h,m;const u=((h=a.createdAt)==null?void 0:h.toMillis())||0;return(((m=c.createdAt)==null?void 0:m.toMillis())||0)-u}),o}catch(i){return console.error("Fallback query de başarısız:",i),[]}}throw console.error("Get customer notes error:",t),t}}),UL=n=>p(void 0,null,function*(){var e;try{const t=le(F({},n),{createdAt:j(),updatedAt:j()}),r=yield we(q(S,wu),t),i=yield ne(r);if(!i.exists())throw new Error("Not oluşturulamadı");return yield se("CREATE","customerNotes",r.id,n.createdBy,null,i.data()),le(F({id:r.id},i.data()),{createdAt:((e=i.data())==null?void 0:e.createdAt)||$.now()})}catch(t){throw console.error("Create customer note error:",t),t}}),yo="recipes",$O=n=>p(void 0,null,function*(){try{const e=q(re,yo),t=Q(e,ce("productId","==",n)),r=yield J(t),i=[];for(const s of r.docs){const o=s.data(),a=F({id:s.id},o);if(a.rawMaterialId)try{const c=yield ne(U(re,"raw_materials",a.rawMaterialId));if(c.exists()){const u=c.data();if(u.deleted===!0||u.isDeleted===!0)continue;a.rawMaterial={id:c.id,name:u.name||"",unit:u.unit||"Adet",cost:u.cost||u.unitPrice||0,stock:u.stock||u.currentStock||0}}else continue}catch(c){continue}else continue;i.push(a)}return i}catch(e){throw new Error(e instanceof Error?e.message:"Reçeteler yüklenemedi")}}),qO=(n,e,t)=>p(void 0,null,function*(){try{const r=q(re,yo),i={productId:n,rawMaterialId:e,quantityPerUnit:t,createdAt:$.now(),updatedAt:$.now()};return(yield we(r,i)).id}catch(r){throw new Error(r instanceof Error?r.message:"Reçete eklenemedi")}}),jO=(n,e)=>p(void 0,null,function*(){try{const t=U(re,yo,n);yield X(t,{quantityPerUnit:e,updatedAt:$.now()})}catch(t){throw new Error(t instanceof Error?t.message:"Reçete güncellenemedi")}}),zO=n=>p(void 0,null,function*(){try{const e=U(re,yo,n);yield We(e)}catch(e){throw new Error(e instanceof Error?e.message:"Reçete silinemedi")}}),GO=n=>p(void 0,null,function*(){try{const e=q(re,yo),t=Q(e,ce("rawMaterialId","==",n)),r=yield J(t),i=[];for(const s of r.docs){const o=s.data(),a=F({id:s.id},o);if(a.productId)try{const c=yield ne(U(re,"products",a.productId));c.exists()&&(a.product=F({id:c.id},c.data()))}catch(c){}i.push(a)}return i}catch(e){throw new Error(e instanceof Error?e.message:"Reçeteler yüklenemedi")}}),WO=Object.freeze(Object.defineProperty({__proto__:null,addRecipeItem:qO,deleteRecipeItem:zO,getProductRecipes:$O,getRawMaterialRecipes:GO,updateRecipeItem:jO},Symbol.toStringTag,{value:"Module"})),eE="rawMaterialCategories",Rl=[{name:"Kimyasal",value:"chemical"},{name:"Metal",value:"metal"},{name:"Plastik",value:"plastic"},{name:"Elektronik",value:"electronic"},{name:"Ambalaj",value:"packaging"},{name:"Diğer",value:"other"}],HO=()=>p(void 0,null,function*(){try{const n=q(S,eE),t=(yield J(Q(n,fe("name","asc")))).docs.map(o=>{var c;const a=o.data();return{id:o.id,name:a.name||"",value:a.value||((c=a.name)==null?void 0:c.toLowerCase().replace(/\s+/g,"_"))||"",createdAt:a.createdAt||$.now(),createdBy:a.createdBy||""}}),r=Rl.map(o=>{const a=t.find(c=>c.value===o.value);return a||{id:`default_${o.value}`,name:o.name,value:o.value,createdAt:$.now(),createdBy:"system"}}),i=t.filter(o=>!Rl.some(a=>a.value===o.value));return[...r,...i].sort((o,a)=>o.name.localeCompare(a.name,"tr"))}catch(n){return Rl.map(e=>({id:`default_${e.value}`,name:e.name,value:e.value,createdAt:$.now(),createdBy:"system"}))}}),FL=(n,e)=>p(void 0,null,function*(){var t;try{if(!n||n.trim().length===0)throw new Error("Kategori adı boş olamaz");const r=e||((t=C==null?void 0:C.currentUser)==null?void 0:t.uid);if(!r)throw new Error("Kullanıcı oturumu bulunamadı");const i=n.toLowerCase().trim().replace(/\s+/g,"_").replace(/[^a-z0-9_]/g,"");if(!i||i.length===0)throw new Error("Geçersiz kategori adı");if((yield HO()).find(d=>d.value===i))throw new Error("Bu kategori zaten mevcut");const a=q(S,eE),c={name:n.trim(),value:i,createdAt:j(),createdBy:r},u=yield we(a,c);return yield se("CREATE","rawMaterialCategories",u.id,r,null,c),{id:u.id,name:n.trim(),value:i,createdAt:$.now(),createdBy:r}}catch(r){throw r}}),tE="admin_settings",vu="system",KO={companyName:"Turkuast",supportEmail:"destek@turkuast.com",maintenanceMode:!1,allowNewRegistrations:!0,emailNotifications:!0,notifyTasks:!0,notifyProduction:!0,twoFactorRequired:!1,passwordRotationDays:0,sessionTimeoutMinutes:480,minPasswordLength:8,autoBackup:!0,lastBackupAt:null,lastRestoreRequest:null,lastCleanupRequest:null},QO=()=>p(void 0,null,function*(){try{const n=U(re,tE,vu),e=yield ne(n);if(!e.exists()){const t=le(F({id:vu},KO),{updatedAt:$.now(),updatedBy:"system"});return yield un(n,t),t}return F({id:e.id},e.data())}catch(n){throw new Error(n instanceof Error?n.message:"Admin ayarları yüklenemedi")}}),BL=(n,e)=>p(void 0,null,function*(){try{const t=U(re,tE,vu),r=yield QO(),i=le(F(F({},r),n),{updatedAt:$.now(),updatedBy:e});yield un(t,i,{merge:!0})}catch(t){throw console.error("Error updating admin settings:",t),new Error(t.message||"Admin ayarları güncellenemedi")}}),$L=n=>p(void 0,null,function*(){try{const e=q(S,"departments"),t=Q(e,ce("managerId","==",n)),i=(yield J(t)).docs.map(a=>a.id);if(i.length===0)return[];const s=yield rt(),o=[];for(const a of s)if(!(!a||!a.id||!a.email)&&a.deleted!==!0&&a.pendingTeams&&a.pendingTeams.length>0){for(const c of a.pendingTeams)if(i.includes(c)){const u=yield dr(c);u&&o.push({userId:a.id,userName:a.fullName||a.displayName||a.email,userEmail:a.email,teamId:c,teamName:u.name,requestedAt:a.createdAt||$.now(),status:"pending"})}}return o.sort((a,c)=>{var h,m;const u=((h=a.requestedAt)==null?void 0:h.toMillis())||0;return(((m=c.requestedAt)==null?void 0:m.toMillis())||0)-u})}catch(e){throw e}}),qL=()=>p(void 0,null,function*(){try{const n=q(S,"departments"),e=yield J(n),t=new Set;e.docs.forEach(s=>{const o=s.data();o.managerId&&o.managerId.trim()!==""&&t.add(s.id)});const r=yield rt(),i=[];for(const s of r)if(!(!s||!s.id||!s.email)&&s.deleted!==!0&&s.pendingTeams&&s.pendingTeams.length>0){for(const o of s.pendingTeams)if(!t.has(o)){const a=yield dr(o);a&&i.push({userId:s.id,userName:s.fullName||s.displayName||s.email,userEmail:s.email,teamId:o,teamName:a.name,requestedAt:s.createdAt||$.now(),status:"pending"})}}return i.sort((s,o)=>{var u,d;const a=((u=s.requestedAt)==null?void 0:u.toMillis())||0;return(((d=o.requestedAt)==null?void 0:d.toMillis())||0)-a})}catch(n){throw console.error("Get all pending team requests error:",n),n}}),jL=(n,e,t)=>p(void 0,null,function*(){try{const{getUserProfile:r}=yield z(()=>p(void 0,null,function*(){const{getUserProfile:w}=yield Promise.resolve().then(()=>Ae);return{getUserProfile:w}}),void 0),i=yield r(t);if(i){const{canApproveTeamRequest:w}=yield z(()=>p(void 0,null,function*(){const{canApproveTeamRequest:P}=yield import("./vendor-react-BTcc4C86.js").then(O=>O.cI);return{canApproveTeamRequest:P}}),[]),v=yield po();if(!(yield w(i,v)))throw new Error("Ekip talebi onaylama yetkiniz yok.")}const s=U(S,"users",n),o=yield ne(s);if(!o.exists())throw new Error("Kullanıcı bulunamadı");const a=o.data(),c=a.pendingTeams||[],u=a.approvedTeams||[],d=a.role||[];if(!c.includes(e)){if(u.includes(e))return;throw new Error("Bu ekip talebi bulunamadı. Talep zaten işlenmiş olabilir.")}const h=c.filter(w=>w!==e),m=[...u,e];let _=[...d];d.includes("viewer")&&!d.includes("personnel")&&(_=d.filter(w=>w!=="viewer"),_.includes("personnel")||_.push("personnel"),_.length===0&&(_=["personnel"])),yield X(s,{pendingTeams:h,approvedTeams:m,role:_,updatedAt:j()});try{const w=yield dr(e),v=yield r(t),E=(v==null?void 0:v.fullName)||(v==null?void 0:v.displayName)||(v==null?void 0:v.email)||"Yönetici";yield Oe({userId:n,type:"system",title:"Ekip talebi onaylandı",message:`${E} "${(w==null?void 0:w.name)||"ekip"}" ekibine katılım talebinizi onayladı.`,read:!1,metadata:{teamId:e,teamName:w==null?void 0:w.name,approvedBy:t}})}catch(w){console.error("Error sending approval notification:",w)}}catch(r){throw console.error("Approve team request error:",r),r}}),zL=(n,e,t,r)=>p(void 0,null,function*(){try{if(r){const{getUserProfile:u}=yield z(()=>p(void 0,null,function*(){const{getUserProfile:h}=yield Promise.resolve().then(()=>Ae);return{getUserProfile:h}}),void 0),d=yield u(r);if(d){const{canApproveTeamRequest:h,getDepartments:m}=yield z(()=>p(void 0,null,function*(){const{canApproveTeamRequest:v,getDepartments:E}=yield import("./vendor-react-BTcc4C86.js").then(P=>P.cI);return{canApproveTeamRequest:v,getDepartments:E}}),[]),_=yield m();if(!(yield h(d,_)))throw new Error("Ekip talebi reddetme yetkiniz yok.")}}const i=U(S,"users",n),s=yield ne(i);if(!s.exists())throw new Error("Kullanıcı bulunamadı");const a=s.data().pendingTeams||[];if(!a.includes(e))throw new Error("Bu ekip talebi bulunamadı");const c=a.filter(u=>u!==e);yield X(i,{pendingTeams:c,updatedAt:j()});try{const u=yield dr(e);yield Oe({userId:n,type:"system",title:"Ekip talebi reddedildi",message:`"${(u==null?void 0:u.name)||"ekip"}" ekibine katılım talebiniz reddedildi.${t?` Sebep: ${t}`:""}`,read:!1,metadata:{teamId:e,teamName:u==null?void 0:u.name,rejectedReason:t}})}catch(u){console.error("Error sending rejection notification:",u)}}catch(i){throw console.error("Reject team request error:",i),i}}),GL=(n,e,t)=>{try{const r=q(S,"users");return lr(r,s=>p(void 0,null,function*(){try{const o=s.docs.map(u=>F({id:u.id},u.data())).filter(u=>u&&u.id&&u.email&&!u.deleted),a=yield po();let c=[];if(n){const u=new Set;a.forEach(d=>{d.managerId&&d.managerId.trim()!==""&&u.add(d.id)});for(const d of o)if(d.pendingTeams&&d.pendingTeams.length>0){for(const h of d.pendingTeams)if(!u.has(h)){const m=a.find(_=>_.id===h);m&&c.push({userId:d.id,userName:d.fullName||d.displayName||d.email,userEmail:d.email,teamId:h,teamName:m.name,requestedAt:d.createdAt||$.now(),status:"pending"})}}}else if(e){const d=a.filter(h=>h.managerId===e).map(h=>h.id);if(d.length>0){for(const h of o)if(h.pendingTeams&&h.pendingTeams.length>0){for(const m of h.pendingTeams)if(d.includes(m)){const _=a.find(w=>w.id===m);_&&c.push({userId:h.id,userName:h.fullName||h.displayName||h.email,userEmail:h.email,teamId:m,teamName:_.name,requestedAt:h.createdAt||$.now(),status:"pending"})}}}}c.sort((u,d)=>{var _,w;const h=((_=u.requestedAt)==null?void 0:_.toMillis())||0;return(((w=d.requestedAt)==null?void 0:w.toMillis())||0)-h}),t(c)}catch(o){t([])}}),s=>{t([])})}catch(r){return t([]),()=>{}}},Eu="main",WL=()=>p(void 0,null,function*(){try{const n=yield ne(U(S,"companySettings",Eu));if(!n.exists()){const e={companyName:"Turkuast ERP",currency:"₺",taxRate:20,updatedAt:j(),updatedBy:""};return yield un(U(S,"companySettings",Eu),e),e}return n.data()}catch(n){throw console.error("Get company settings error:",n),n}}),HL=(n,e)=>p(void 0,null,function*(){try{yield X(U(S,"companySettings",Eu),le(F({},n),{updatedAt:j(),updatedBy:e}))}catch(t){throw console.error("Update company settings error:",t),t}});export{Gs as $,q as A,lr as B,rt as C,$v as D,E1 as E,po as F,o1 as G,R1 as H,J as I,re as J,QO as K,BL as L,D1 as M,L1 as N,C1 as O,P1 as P,qv as Q,qa as R,l1 as S,$ as T,c1 as U,Me as V,Ai as W,za as X,dn as Y,qs as Z,z as _,k1 as a,FL as a$,dr as a0,Z1 as a1,C as a2,SA as a3,bA as a4,X as a5,j as a6,U as a7,A1 as a8,RA as a9,vO as aA,xL as aB,UL as aC,pL as aD,gL as aE,yL as aF,wL as aG,$O as aH,EL as aI,TL as aJ,IL as aK,qO as aL,zO as aM,jO as aN,vL as aO,Yv as aP,SO as aQ,iL as aR,Gn as aS,rL as aT,uL as aU,dL as aV,hL as aW,sL as aX,oL as aY,aL as aZ,HO as a_,Q as aa,ce as ab,eL as ac,NO as ad,Ge as ae,DO as af,bL as ag,H1 as ah,wO as ai,Wv as aj,Hv as ak,Q1 as al,q1 as am,LL as an,oO as ao,j1 as ap,G1 as aq,Y1 as ar,lL as as,nL as at,cL as au,dO as av,hO as aw,fO as ax,mO as ay,uO as az,w1 as b,OO as b0,Zv as b1,MO as b2,GO as b3,xO as b4,UO as b5,FO as b6,Ee as b7,LO as b8,s1 as b9,WL as bA,HL as bB,GL as bC,zL as bD,jL as bE,VS as bF,$s as bG,pu as bH,Ae as bI,yu as bJ,bt as bK,W1 as bL,TO as bM,AL as bN,RL as bO,a1 as ba,qL as bb,$L as bc,z1 as bd,PL as be,NL as bf,DL as bg,SL as bh,kL as bi,CL as bj,OL as bk,ML as bl,VL as bm,rO as bn,cO as bo,iO as bp,nO as bq,sO as br,aO as bs,kO as bt,lO as bu,tO as bv,K1 as bw,eO as bx,mL as by,tn as bz,v1 as c,Af as d,ku as e,JO as f,O1 as g,B1 as h,U1 as i,J1 as j,X1 as k,y1 as l,x1 as m,_O as n,T1 as o,yO as p,pO as q,_1 as r,I1 as s,gO as t,rh as u,Gv as v,tL as w,fL as x,_L as y,S as z};
