(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))o(l);new MutationObserver(l=>{for(const c of l)if(c.type==="childList")for(const u of c.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&o(u)}).observe(document,{childList:!0,subtree:!0});function i(l){const c={};return l.integrity&&(c.integrity=l.integrity),l.referrerPolicy&&(c.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?c.credentials="include":l.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function o(l){if(l.ep)return;l.ep=!0;const c=i(l);fetch(l.href,c)}})();function Mm(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var ru={exports:{}},_i={},iu={exports:{}},ae={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Up;function Jv(){if(Up)return ae;Up=1;var t=Symbol.for("react.element"),r=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),o=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),c=Symbol.for("react.provider"),u=Symbol.for("react.context"),h=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),g=Symbol.for("react.memo"),v=Symbol.for("react.lazy"),x=Symbol.iterator;function w(T){return T===null||typeof T!="object"?null:(T=x&&T[x]||T["@@iterator"],typeof T=="function"?T:null)}var S={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},j=Object.assign,N={};function E(T,O,se){this.props=T,this.context=O,this.refs=N,this.updater=se||S}E.prototype.isReactComponent={},E.prototype.setState=function(T,O){if(typeof T!="object"&&typeof T!="function"&&T!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,T,O,"setState")},E.prototype.forceUpdate=function(T){this.updater.enqueueForceUpdate(this,T,"forceUpdate")};function A(){}A.prototype=E.prototype;function D(T,O,se){this.props=T,this.context=O,this.refs=N,this.updater=se||S}var _=D.prototype=new A;_.constructor=D,j(_,E.prototype),_.isPureReactComponent=!0;var z=Array.isArray,I=Object.prototype.hasOwnProperty,G={current:null},ne={key:!0,ref:!0,__self:!0,__source:!0};function Q(T,O,se){var le,ce={},de=null,we=null;if(O!=null)for(le in O.ref!==void 0&&(we=O.ref),O.key!==void 0&&(de=""+O.key),O)I.call(O,le)&&!ne.hasOwnProperty(le)&&(ce[le]=O[le]);var ge=arguments.length-2;if(ge===1)ce.children=se;else if(1<ge){for(var je=Array(ge),gt=0;gt<ge;gt++)je[gt]=arguments[gt+2];ce.children=je}if(T&&T.defaultProps)for(le in ge=T.defaultProps,ge)ce[le]===void 0&&(ce[le]=ge[le]);return{$$typeof:t,type:T,key:de,ref:we,props:ce,_owner:G.current}}function he(T,O){return{$$typeof:t,type:T.type,key:O,ref:T.ref,props:T.props,_owner:T._owner}}function ye(T){return typeof T=="object"&&T!==null&&T.$$typeof===t}function Ze(T){var O={"=":"=0",":":"=2"};return"$"+T.replace(/[=:]/g,function(se){return O[se]})}var it=/\/+/g;function Ue(T,O){return typeof T=="object"&&T!==null&&T.key!=null?Ze(""+T.key):O.toString(36)}function Xe(T,O,se,le,ce){var de=typeof T;(de==="undefined"||de==="boolean")&&(T=null);var we=!1;if(T===null)we=!0;else switch(de){case"string":case"number":we=!0;break;case"object":switch(T.$$typeof){case t:case r:we=!0}}if(we)return we=T,ce=ce(we),T=le===""?"."+Ue(we,0):le,z(ce)?(se="",T!=null&&(se=T.replace(it,"$&/")+"/"),Xe(ce,O,se,"",function(gt){return gt})):ce!=null&&(ye(ce)&&(ce=he(ce,se+(!ce.key||we&&we.key===ce.key?"":(""+ce.key).replace(it,"$&/")+"/")+T)),O.push(ce)),1;if(we=0,le=le===""?".":le+":",z(T))for(var ge=0;ge<T.length;ge++){de=T[ge];var je=le+Ue(de,ge);we+=Xe(de,O,se,je,ce)}else if(je=w(T),typeof je=="function")for(T=je.call(T),ge=0;!(de=T.next()).done;)de=de.value,je=le+Ue(de,ge++),we+=Xe(de,O,se,je,ce);else if(de==="object")throw O=String(T),Error("Objects are not valid as a React child (found: "+(O==="[object Object]"?"object with keys {"+Object.keys(T).join(", ")+"}":O)+"). If you meant to render a collection of children, use an array instead.");return we}function Ve(T,O,se){if(T==null)return T;var le=[],ce=0;return Xe(T,le,"","",function(de){return O.call(se,de,ce++)}),le}function st(T){if(T._status===-1){var O=T._result;O=O(),O.then(function(se){(T._status===0||T._status===-1)&&(T._status=1,T._result=se)},function(se){(T._status===0||T._status===-1)&&(T._status=2,T._result=se)}),T._status===-1&&(T._status=0,T._result=O)}if(T._status===1)return T._result.default;throw T._result}var oe={current:null},U={transition:null},Z={ReactCurrentDispatcher:oe,ReactCurrentBatchConfig:U,ReactCurrentOwner:G};function H(){throw Error("act(...) is not supported in production builds of React.")}return ae.Children={map:Ve,forEach:function(T,O,se){Ve(T,function(){O.apply(this,arguments)},se)},count:function(T){var O=0;return Ve(T,function(){O++}),O},toArray:function(T){return Ve(T,function(O){return O})||[]},only:function(T){if(!ye(T))throw Error("React.Children.only expected to receive a single React element child.");return T}},ae.Component=E,ae.Fragment=i,ae.Profiler=l,ae.PureComponent=D,ae.StrictMode=o,ae.Suspense=m,ae.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Z,ae.act=H,ae.cloneElement=function(T,O,se){if(T==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+T+".");var le=j({},T.props),ce=T.key,de=T.ref,we=T._owner;if(O!=null){if(O.ref!==void 0&&(de=O.ref,we=G.current),O.key!==void 0&&(ce=""+O.key),T.type&&T.type.defaultProps)var ge=T.type.defaultProps;for(je in O)I.call(O,je)&&!ne.hasOwnProperty(je)&&(le[je]=O[je]===void 0&&ge!==void 0?ge[je]:O[je])}var je=arguments.length-2;if(je===1)le.children=se;else if(1<je){ge=Array(je);for(var gt=0;gt<je;gt++)ge[gt]=arguments[gt+2];le.children=ge}return{$$typeof:t,type:T.type,key:ce,ref:de,props:le,_owner:we}},ae.createContext=function(T){return T={$$typeof:u,_currentValue:T,_currentValue2:T,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},T.Provider={$$typeof:c,_context:T},T.Consumer=T},ae.createElement=Q,ae.createFactory=function(T){var O=Q.bind(null,T);return O.type=T,O},ae.createRef=function(){return{current:null}},ae.forwardRef=function(T){return{$$typeof:h,render:T}},ae.isValidElement=ye,ae.lazy=function(T){return{$$typeof:v,_payload:{_status:-1,_result:T},_init:st}},ae.memo=function(T,O){return{$$typeof:g,type:T,compare:O===void 0?null:O}},ae.startTransition=function(T){var O=U.transition;U.transition={};try{T()}finally{U.transition=O}},ae.unstable_act=H,ae.useCallback=function(T,O){return oe.current.useCallback(T,O)},ae.useContext=function(T){return oe.current.useContext(T)},ae.useDebugValue=function(){},ae.useDeferredValue=function(T){return oe.current.useDeferredValue(T)},ae.useEffect=function(T,O){return oe.current.useEffect(T,O)},ae.useId=function(){return oe.current.useId()},ae.useImperativeHandle=function(T,O,se){return oe.current.useImperativeHandle(T,O,se)},ae.useInsertionEffect=function(T,O){return oe.current.useInsertionEffect(T,O)},ae.useLayoutEffect=function(T,O){return oe.current.useLayoutEffect(T,O)},ae.useMemo=function(T,O){return oe.current.useMemo(T,O)},ae.useReducer=function(T,O,se){return oe.current.useReducer(T,O,se)},ae.useRef=function(T){return oe.current.useRef(T)},ae.useState=function(T){return oe.current.useState(T)},ae.useSyncExternalStore=function(T,O,se){return oe.current.useSyncExternalStore(T,O,se)},ae.useTransition=function(){return oe.current.useTransition()},ae.version="18.3.1",ae}var Wp;function qu(){return Wp||(Wp=1,iu.exports=Jv()),iu.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Hp;function ex(){if(Hp)return _i;Hp=1;var t=qu(),r=Symbol.for("react.element"),i=Symbol.for("react.fragment"),o=Object.prototype.hasOwnProperty,l=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function u(h,m,g){var v,x={},w=null,S=null;g!==void 0&&(w=""+g),m.key!==void 0&&(w=""+m.key),m.ref!==void 0&&(S=m.ref);for(v in m)o.call(m,v)&&!c.hasOwnProperty(v)&&(x[v]=m[v]);if(h&&h.defaultProps)for(v in m=h.defaultProps,m)x[v]===void 0&&(x[v]=m[v]);return{$$typeof:r,type:h,key:w,ref:S,props:x,_owner:l.current}}return _i.Fragment=i,_i.jsx=u,_i.jsxs=u,_i}var Kp;function tx(){return Kp||(Kp=1,ru.exports=ex()),ru.exports}var f=tx(),b=qu();const nx=Mm(b);var wo={},su={exports:{}},mt={},ou={exports:{}},au={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Gp;function rx(){return Gp||(Gp=1,(function(t){function r(U,Z){var H=U.length;U.push(Z);e:for(;0<H;){var T=H-1>>>1,O=U[T];if(0<l(O,Z))U[T]=Z,U[H]=O,H=T;else break e}}function i(U){return U.length===0?null:U[0]}function o(U){if(U.length===0)return null;var Z=U[0],H=U.pop();if(H!==Z){U[0]=H;e:for(var T=0,O=U.length,se=O>>>1;T<se;){var le=2*(T+1)-1,ce=U[le],de=le+1,we=U[de];if(0>l(ce,H))de<O&&0>l(we,ce)?(U[T]=we,U[de]=H,T=de):(U[T]=ce,U[le]=H,T=le);else if(de<O&&0>l(we,H))U[T]=we,U[de]=H,T=de;else break e}}return Z}function l(U,Z){var H=U.sortIndex-Z.sortIndex;return H!==0?H:U.id-Z.id}if(typeof performance=="object"&&typeof performance.now=="function"){var c=performance;t.unstable_now=function(){return c.now()}}else{var u=Date,h=u.now();t.unstable_now=function(){return u.now()-h}}var m=[],g=[],v=1,x=null,w=3,S=!1,j=!1,N=!1,E=typeof setTimeout=="function"?setTimeout:null,A=typeof clearTimeout=="function"?clearTimeout:null,D=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function _(U){for(var Z=i(g);Z!==null;){if(Z.callback===null)o(g);else if(Z.startTime<=U)o(g),Z.sortIndex=Z.expirationTime,r(m,Z);else break;Z=i(g)}}function z(U){if(N=!1,_(U),!j)if(i(m)!==null)j=!0,st(I);else{var Z=i(g);Z!==null&&oe(z,Z.startTime-U)}}function I(U,Z){j=!1,N&&(N=!1,A(Q),Q=-1),S=!0;var H=w;try{for(_(Z),x=i(m);x!==null&&(!(x.expirationTime>Z)||U&&!Ze());){var T=x.callback;if(typeof T=="function"){x.callback=null,w=x.priorityLevel;var O=T(x.expirationTime<=Z);Z=t.unstable_now(),typeof O=="function"?x.callback=O:x===i(m)&&o(m),_(Z)}else o(m);x=i(m)}if(x!==null)var se=!0;else{var le=i(g);le!==null&&oe(z,le.startTime-Z),se=!1}return se}finally{x=null,w=H,S=!1}}var G=!1,ne=null,Q=-1,he=5,ye=-1;function Ze(){return!(t.unstable_now()-ye<he)}function it(){if(ne!==null){var U=t.unstable_now();ye=U;var Z=!0;try{Z=ne(!0,U)}finally{Z?Ue():(G=!1,ne=null)}}else G=!1}var Ue;if(typeof D=="function")Ue=function(){D(it)};else if(typeof MessageChannel<"u"){var Xe=new MessageChannel,Ve=Xe.port2;Xe.port1.onmessage=it,Ue=function(){Ve.postMessage(null)}}else Ue=function(){E(it,0)};function st(U){ne=U,G||(G=!0,Ue())}function oe(U,Z){Q=E(function(){U(t.unstable_now())},Z)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(U){U.callback=null},t.unstable_continueExecution=function(){j||S||(j=!0,st(I))},t.unstable_forceFrameRate=function(U){0>U||125<U?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):he=0<U?Math.floor(1e3/U):5},t.unstable_getCurrentPriorityLevel=function(){return w},t.unstable_getFirstCallbackNode=function(){return i(m)},t.unstable_next=function(U){switch(w){case 1:case 2:case 3:var Z=3;break;default:Z=w}var H=w;w=Z;try{return U()}finally{w=H}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(U,Z){switch(U){case 1:case 2:case 3:case 4:case 5:break;default:U=3}var H=w;w=U;try{return Z()}finally{w=H}},t.unstable_scheduleCallback=function(U,Z,H){var T=t.unstable_now();switch(typeof H=="object"&&H!==null?(H=H.delay,H=typeof H=="number"&&0<H?T+H:T):H=T,U){case 1:var O=-1;break;case 2:O=250;break;case 5:O=1073741823;break;case 4:O=1e4;break;default:O=5e3}return O=H+O,U={id:v++,callback:Z,priorityLevel:U,startTime:H,expirationTime:O,sortIndex:-1},H>T?(U.sortIndex=H,r(g,U),i(m)===null&&U===i(g)&&(N?(A(Q),Q=-1):N=!0,oe(z,H-T))):(U.sortIndex=O,r(m,U),j||S||(j=!0,st(I))),U},t.unstable_shouldYield=Ze,t.unstable_wrapCallback=function(U){var Z=w;return function(){var H=w;w=Z;try{return U.apply(this,arguments)}finally{w=H}}}})(au)),au}var Yp;function ix(){return Yp||(Yp=1,ou.exports=rx()),ou.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Xp;function sx(){if(Xp)return mt;Xp=1;var t=qu(),r=ix();function i(e){for(var n="https://reactjs.org/docs/error-decoder.html?invariant="+e,s=1;s<arguments.length;s++)n+="&args[]="+encodeURIComponent(arguments[s]);return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var o=new Set,l={};function c(e,n){u(e,n),u(e+"Capture",n)}function u(e,n){for(l[e]=n,e=0;e<n.length;e++)o.add(n[e])}var h=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),m=Object.prototype.hasOwnProperty,g=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,v={},x={};function w(e){return m.call(x,e)?!0:m.call(v,e)?!1:g.test(e)?x[e]=!0:(v[e]=!0,!1)}function S(e,n,s,a){if(s!==null&&s.type===0)return!1;switch(typeof n){case"function":case"symbol":return!0;case"boolean":return a?!1:s!==null?!s.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function j(e,n,s,a){if(n===null||typeof n>"u"||S(e,n,s,a))return!0;if(a)return!1;if(s!==null)switch(s.type){case 3:return!n;case 4:return n===!1;case 5:return isNaN(n);case 6:return isNaN(n)||1>n}return!1}function N(e,n,s,a,d,p,y){this.acceptsBooleans=n===2||n===3||n===4,this.attributeName=a,this.attributeNamespace=d,this.mustUseProperty=s,this.propertyName=e,this.type=n,this.sanitizeURL=p,this.removeEmptyString=y}var E={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){E[e]=new N(e,0,!1,e,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var n=e[0];E[n]=new N(n,1,!1,e[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(e){E[e]=new N(e,2,!1,e.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){E[e]=new N(e,2,!1,e,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){E[e]=new N(e,3,!1,e.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(e){E[e]=new N(e,3,!0,e,null,!1,!1)}),["capture","download"].forEach(function(e){E[e]=new N(e,4,!1,e,null,!1,!1)}),["cols","rows","size","span"].forEach(function(e){E[e]=new N(e,6,!1,e,null,!1,!1)}),["rowSpan","start"].forEach(function(e){E[e]=new N(e,5,!1,e.toLowerCase(),null,!1,!1)});var A=/[\-:]([a-z])/g;function D(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var n=e.replace(A,D);E[n]=new N(n,1,!1,e,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var n=e.replace(A,D);E[n]=new N(n,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(e){var n=e.replace(A,D);E[n]=new N(n,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(e){E[e]=new N(e,1,!1,e.toLowerCase(),null,!1,!1)}),E.xlinkHref=new N("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(e){E[e]=new N(e,1,!1,e.toLowerCase(),null,!0,!0)});function _(e,n,s,a){var d=E.hasOwnProperty(n)?E[n]:null;(d!==null?d.type!==0:a||!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(j(n,s,d,a)&&(s=null),a||d===null?w(n)&&(s===null?e.removeAttribute(n):e.setAttribute(n,""+s)):d.mustUseProperty?e[d.propertyName]=s===null?d.type===3?!1:"":s:(n=d.attributeName,a=d.attributeNamespace,s===null?e.removeAttribute(n):(d=d.type,s=d===3||d===4&&s===!0?"":""+s,a?e.setAttributeNS(a,n,s):e.setAttribute(n,s))))}var z=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,I=Symbol.for("react.element"),G=Symbol.for("react.portal"),ne=Symbol.for("react.fragment"),Q=Symbol.for("react.strict_mode"),he=Symbol.for("react.profiler"),ye=Symbol.for("react.provider"),Ze=Symbol.for("react.context"),it=Symbol.for("react.forward_ref"),Ue=Symbol.for("react.suspense"),Xe=Symbol.for("react.suspense_list"),Ve=Symbol.for("react.memo"),st=Symbol.for("react.lazy"),oe=Symbol.for("react.offscreen"),U=Symbol.iterator;function Z(e){return e===null||typeof e!="object"?null:(e=U&&e[U]||e["@@iterator"],typeof e=="function"?e:null)}var H=Object.assign,T;function O(e){if(T===void 0)try{throw Error()}catch(s){var n=s.stack.trim().match(/\n( *(at )?)/);T=n&&n[1]||""}return`
`+T+e}var se=!1;function le(e,n){if(!e||se)return"";se=!0;var s=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(n)if(n=function(){throw Error()},Object.defineProperty(n.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(n,[])}catch(L){var a=L}Reflect.construct(e,[],n)}else{try{n.call()}catch(L){a=L}e.call(n.prototype)}else{try{throw Error()}catch(L){a=L}e()}}catch(L){if(L&&a&&typeof L.stack=="string"){for(var d=L.stack.split(`
`),p=a.stack.split(`
`),y=d.length-1,k=p.length-1;1<=y&&0<=k&&d[y]!==p[k];)k--;for(;1<=y&&0<=k;y--,k--)if(d[y]!==p[k]){if(y!==1||k!==1)do if(y--,k--,0>k||d[y]!==p[k]){var C=`
`+d[y].replace(" at new "," at ");return e.displayName&&C.includes("<anonymous>")&&(C=C.replace("<anonymous>",e.displayName)),C}while(1<=y&&0<=k);break}}}finally{se=!1,Error.prepareStackTrace=s}return(e=e?e.displayName||e.name:"")?O(e):""}function ce(e){switch(e.tag){case 5:return O(e.type);case 16:return O("Lazy");case 13:return O("Suspense");case 19:return O("SuspenseList");case 0:case 2:case 15:return e=le(e.type,!1),e;case 11:return e=le(e.type.render,!1),e;case 1:return e=le(e.type,!0),e;default:return""}}function de(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case ne:return"Fragment";case G:return"Portal";case he:return"Profiler";case Q:return"StrictMode";case Ue:return"Suspense";case Xe:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Ze:return(e.displayName||"Context")+".Consumer";case ye:return(e._context.displayName||"Context")+".Provider";case it:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Ve:return n=e.displayName||null,n!==null?n:de(e.type)||"Memo";case st:n=e._payload,e=e._init;try{return de(e(n))}catch{}}return null}function we(e){var n=e.type;switch(e.tag){case 24:return"Cache";case 9:return(n.displayName||"Context")+".Consumer";case 10:return(n._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=n.render,e=e.displayName||e.name||"",n.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return n;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return de(n);case 8:return n===Q?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n}return null}function ge(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function je(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function gt(e){var n=je(e)?"checked":"value",s=Object.getOwnPropertyDescriptor(e.constructor.prototype,n),a=""+e[n];if(!e.hasOwnProperty(n)&&typeof s<"u"&&typeof s.get=="function"&&typeof s.set=="function"){var d=s.get,p=s.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return d.call(this)},set:function(y){a=""+y,p.call(this,y)}}),Object.defineProperty(e,n,{enumerable:s.enumerable}),{getValue:function(){return a},setValue:function(y){a=""+y},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function us(e){e._valueTracker||(e._valueTracker=gt(e))}function Yc(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var s=n.getValue(),a="";return e&&(a=je(e)?e.checked?"true":"false":e.value),e=a,e!==s?(n.setValue(e),!0):!1}function cs(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function ca(e,n){var s=n.checked;return H({},n,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:s??e._wrapperState.initialChecked})}function Xc(e,n){var s=n.defaultValue==null?"":n.defaultValue,a=n.checked!=null?n.checked:n.defaultChecked;s=ge(n.value!=null?n.value:s),e._wrapperState={initialChecked:a,initialValue:s,controlled:n.type==="checkbox"||n.type==="radio"?n.checked!=null:n.value!=null}}function Qc(e,n){n=n.checked,n!=null&&_(e,"checked",n,!1)}function da(e,n){Qc(e,n);var s=ge(n.value),a=n.type;if(s!=null)a==="number"?(s===0&&e.value===""||e.value!=s)&&(e.value=""+s):e.value!==""+s&&(e.value=""+s);else if(a==="submit"||a==="reset"){e.removeAttribute("value");return}n.hasOwnProperty("value")?fa(e,n.type,s):n.hasOwnProperty("defaultValue")&&fa(e,n.type,ge(n.defaultValue)),n.checked==null&&n.defaultChecked!=null&&(e.defaultChecked=!!n.defaultChecked)}function qc(e,n,s){if(n.hasOwnProperty("value")||n.hasOwnProperty("defaultValue")){var a=n.type;if(!(a!=="submit"&&a!=="reset"||n.value!==void 0&&n.value!==null))return;n=""+e._wrapperState.initialValue,s||n===e.value||(e.value=n),e.defaultValue=n}s=e.name,s!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,s!==""&&(e.name=s)}function fa(e,n,s){(n!=="number"||cs(e.ownerDocument)!==e)&&(s==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+s&&(e.defaultValue=""+s))}var Gr=Array.isArray;function ar(e,n,s,a){if(e=e.options,n){n={};for(var d=0;d<s.length;d++)n["$"+s[d]]=!0;for(s=0;s<e.length;s++)d=n.hasOwnProperty("$"+e[s].value),e[s].selected!==d&&(e[s].selected=d),d&&a&&(e[s].defaultSelected=!0)}else{for(s=""+ge(s),n=null,d=0;d<e.length;d++){if(e[d].value===s){e[d].selected=!0,a&&(e[d].defaultSelected=!0);return}n!==null||e[d].disabled||(n=e[d])}n!==null&&(n.selected=!0)}}function pa(e,n){if(n.dangerouslySetInnerHTML!=null)throw Error(i(91));return H({},n,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Zc(e,n){var s=n.value;if(s==null){if(s=n.children,n=n.defaultValue,s!=null){if(n!=null)throw Error(i(92));if(Gr(s)){if(1<s.length)throw Error(i(93));s=s[0]}n=s}n==null&&(n=""),s=n}e._wrapperState={initialValue:ge(s)}}function Jc(e,n){var s=ge(n.value),a=ge(n.defaultValue);s!=null&&(s=""+s,s!==e.value&&(e.value=s),n.defaultValue==null&&e.defaultValue!==s&&(e.defaultValue=s)),a!=null&&(e.defaultValue=""+a)}function ed(e){var n=e.textContent;n===e._wrapperState.initialValue&&n!==""&&n!==null&&(e.value=n)}function td(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function ha(e,n){return e==null||e==="http://www.w3.org/1999/xhtml"?td(n):e==="http://www.w3.org/2000/svg"&&n==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var ds,nd=(function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(n,s,a,d){MSApp.execUnsafeLocalFunction(function(){return e(n,s,a,d)})}:e})(function(e,n){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=n;else{for(ds=ds||document.createElement("div"),ds.innerHTML="<svg>"+n.valueOf().toString()+"</svg>",n=ds.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;n.firstChild;)e.appendChild(n.firstChild)}});function Yr(e,n){if(n){var s=e.firstChild;if(s&&s===e.lastChild&&s.nodeType===3){s.nodeValue=n;return}}e.textContent=n}var Xr={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},r1=["Webkit","ms","Moz","O"];Object.keys(Xr).forEach(function(e){r1.forEach(function(n){n=n+e.charAt(0).toUpperCase()+e.substring(1),Xr[n]=Xr[e]})});function rd(e,n,s){return n==null||typeof n=="boolean"||n===""?"":s||typeof n!="number"||n===0||Xr.hasOwnProperty(e)&&Xr[e]?(""+n).trim():n+"px"}function id(e,n){e=e.style;for(var s in n)if(n.hasOwnProperty(s)){var a=s.indexOf("--")===0,d=rd(s,n[s],a);s==="float"&&(s="cssFloat"),a?e.setProperty(s,d):e[s]=d}}var i1=H({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ma(e,n){if(n){if(i1[e]&&(n.children!=null||n.dangerouslySetInnerHTML!=null))throw Error(i(137,e));if(n.dangerouslySetInnerHTML!=null){if(n.children!=null)throw Error(i(60));if(typeof n.dangerouslySetInnerHTML!="object"||!("__html"in n.dangerouslySetInnerHTML))throw Error(i(61))}if(n.style!=null&&typeof n.style!="object")throw Error(i(62))}}function ga(e,n){if(e.indexOf("-")===-1)return typeof n.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var va=null;function xa(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var ya=null,lr=null,ur=null;function sd(e){if(e=vi(e)){if(typeof ya!="function")throw Error(i(280));var n=e.stateNode;n&&(n=Ls(n),ya(e.stateNode,e.type,n))}}function od(e){lr?ur?ur.push(e):ur=[e]:lr=e}function ad(){if(lr){var e=lr,n=ur;if(ur=lr=null,sd(e),n)for(e=0;e<n.length;e++)sd(n[e])}}function ld(e,n){return e(n)}function ud(){}var wa=!1;function cd(e,n,s){if(wa)return e(n,s);wa=!0;try{return ld(e,n,s)}finally{wa=!1,(lr!==null||ur!==null)&&(ud(),ad())}}function Qr(e,n){var s=e.stateNode;if(s===null)return null;var a=Ls(s);if(a===null)return null;s=a[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(a=!a.disabled)||(e=e.type,a=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!a;break e;default:e=!1}if(e)return null;if(s&&typeof s!="function")throw Error(i(231,n,typeof s));return s}var ba=!1;if(h)try{var qr={};Object.defineProperty(qr,"passive",{get:function(){ba=!0}}),window.addEventListener("test",qr,qr),window.removeEventListener("test",qr,qr)}catch{ba=!1}function s1(e,n,s,a,d,p,y,k,C){var L=Array.prototype.slice.call(arguments,3);try{n.apply(s,L)}catch(F){this.onError(F)}}var Zr=!1,fs=null,ps=!1,ka=null,o1={onError:function(e){Zr=!0,fs=e}};function a1(e,n,s,a,d,p,y,k,C){Zr=!1,fs=null,s1.apply(o1,arguments)}function l1(e,n,s,a,d,p,y,k,C){if(a1.apply(this,arguments),Zr){if(Zr){var L=fs;Zr=!1,fs=null}else throw Error(i(198));ps||(ps=!0,ka=L)}}function Fn(e){var n=e,s=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,(n.flags&4098)!==0&&(s=n.return),e=n.return;while(e)}return n.tag===3?s:null}function dd(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function fd(e){if(Fn(e)!==e)throw Error(i(188))}function u1(e){var n=e.alternate;if(!n){if(n=Fn(e),n===null)throw Error(i(188));return n!==e?null:e}for(var s=e,a=n;;){var d=s.return;if(d===null)break;var p=d.alternate;if(p===null){if(a=d.return,a!==null){s=a;continue}break}if(d.child===p.child){for(p=d.child;p;){if(p===s)return fd(d),e;if(p===a)return fd(d),n;p=p.sibling}throw Error(i(188))}if(s.return!==a.return)s=d,a=p;else{for(var y=!1,k=d.child;k;){if(k===s){y=!0,s=d,a=p;break}if(k===a){y=!0,a=d,s=p;break}k=k.sibling}if(!y){for(k=p.child;k;){if(k===s){y=!0,s=p,a=d;break}if(k===a){y=!0,a=p,s=d;break}k=k.sibling}if(!y)throw Error(i(189))}}if(s.alternate!==a)throw Error(i(190))}if(s.tag!==3)throw Error(i(188));return s.stateNode.current===s?e:n}function pd(e){return e=u1(e),e!==null?hd(e):null}function hd(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var n=hd(e);if(n!==null)return n;e=e.sibling}return null}var md=r.unstable_scheduleCallback,gd=r.unstable_cancelCallback,c1=r.unstable_shouldYield,d1=r.unstable_requestPaint,Le=r.unstable_now,f1=r.unstable_getCurrentPriorityLevel,Sa=r.unstable_ImmediatePriority,vd=r.unstable_UserBlockingPriority,hs=r.unstable_NormalPriority,p1=r.unstable_LowPriority,xd=r.unstable_IdlePriority,ms=null,Wt=null;function h1(e){if(Wt&&typeof Wt.onCommitFiberRoot=="function")try{Wt.onCommitFiberRoot(ms,e,void 0,(e.current.flags&128)===128)}catch{}}var Lt=Math.clz32?Math.clz32:v1,m1=Math.log,g1=Math.LN2;function v1(e){return e>>>=0,e===0?32:31-(m1(e)/g1|0)|0}var gs=64,vs=4194304;function Jr(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function xs(e,n){var s=e.pendingLanes;if(s===0)return 0;var a=0,d=e.suspendedLanes,p=e.pingedLanes,y=s&268435455;if(y!==0){var k=y&~d;k!==0?a=Jr(k):(p&=y,p!==0&&(a=Jr(p)))}else y=s&~d,y!==0?a=Jr(y):p!==0&&(a=Jr(p));if(a===0)return 0;if(n!==0&&n!==a&&(n&d)===0&&(d=a&-a,p=n&-n,d>=p||d===16&&(p&4194240)!==0))return n;if((a&4)!==0&&(a|=s&16),n=e.entangledLanes,n!==0)for(e=e.entanglements,n&=a;0<n;)s=31-Lt(n),d=1<<s,a|=e[s],n&=~d;return a}function x1(e,n){switch(e){case 1:case 2:case 4:return n+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function y1(e,n){for(var s=e.suspendedLanes,a=e.pingedLanes,d=e.expirationTimes,p=e.pendingLanes;0<p;){var y=31-Lt(p),k=1<<y,C=d[y];C===-1?((k&s)===0||(k&a)!==0)&&(d[y]=x1(k,n)):C<=n&&(e.expiredLanes|=k),p&=~k}}function ja(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function yd(){var e=gs;return gs<<=1,(gs&4194240)===0&&(gs=64),e}function Ca(e){for(var n=[],s=0;31>s;s++)n.push(e);return n}function ei(e,n,s){e.pendingLanes|=n,n!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,n=31-Lt(n),e[n]=s}function w1(e,n){var s=e.pendingLanes&~n;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=n,e.mutableReadLanes&=n,e.entangledLanes&=n,n=e.entanglements;var a=e.eventTimes;for(e=e.expirationTimes;0<s;){var d=31-Lt(s),p=1<<d;n[d]=0,a[d]=-1,e[d]=-1,s&=~p}}function Ea(e,n){var s=e.entangledLanes|=n;for(e=e.entanglements;s;){var a=31-Lt(s),d=1<<a;d&n|e[a]&n&&(e[a]|=n),s&=~d}}var ve=0;function wd(e){return e&=-e,1<e?4<e?(e&268435455)!==0?16:536870912:4:1}var bd,Na,kd,Sd,jd,Pa=!1,ys=[],pn=null,hn=null,mn=null,ti=new Map,ni=new Map,gn=[],b1="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Cd(e,n){switch(e){case"focusin":case"focusout":pn=null;break;case"dragenter":case"dragleave":hn=null;break;case"mouseover":case"mouseout":mn=null;break;case"pointerover":case"pointerout":ti.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":ni.delete(n.pointerId)}}function ri(e,n,s,a,d,p){return e===null||e.nativeEvent!==p?(e={blockedOn:n,domEventName:s,eventSystemFlags:a,nativeEvent:p,targetContainers:[d]},n!==null&&(n=vi(n),n!==null&&Na(n)),e):(e.eventSystemFlags|=a,n=e.targetContainers,d!==null&&n.indexOf(d)===-1&&n.push(d),e)}function k1(e,n,s,a,d){switch(n){case"focusin":return pn=ri(pn,e,n,s,a,d),!0;case"dragenter":return hn=ri(hn,e,n,s,a,d),!0;case"mouseover":return mn=ri(mn,e,n,s,a,d),!0;case"pointerover":var p=d.pointerId;return ti.set(p,ri(ti.get(p)||null,e,n,s,a,d)),!0;case"gotpointercapture":return p=d.pointerId,ni.set(p,ri(ni.get(p)||null,e,n,s,a,d)),!0}return!1}function Ed(e){var n=In(e.target);if(n!==null){var s=Fn(n);if(s!==null){if(n=s.tag,n===13){if(n=dd(s),n!==null){e.blockedOn=n,jd(e.priority,function(){kd(s)});return}}else if(n===3&&s.stateNode.current.memoizedState.isDehydrated){e.blockedOn=s.tag===3?s.stateNode.containerInfo:null;return}}}e.blockedOn=null}function ws(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var s=Ra(e.domEventName,e.eventSystemFlags,n[0],e.nativeEvent);if(s===null){s=e.nativeEvent;var a=new s.constructor(s.type,s);va=a,s.target.dispatchEvent(a),va=null}else return n=vi(s),n!==null&&Na(n),e.blockedOn=s,!1;n.shift()}return!0}function Nd(e,n,s){ws(e)&&s.delete(n)}function S1(){Pa=!1,pn!==null&&ws(pn)&&(pn=null),hn!==null&&ws(hn)&&(hn=null),mn!==null&&ws(mn)&&(mn=null),ti.forEach(Nd),ni.forEach(Nd)}function ii(e,n){e.blockedOn===n&&(e.blockedOn=null,Pa||(Pa=!0,r.unstable_scheduleCallback(r.unstable_NormalPriority,S1)))}function si(e){function n(d){return ii(d,e)}if(0<ys.length){ii(ys[0],e);for(var s=1;s<ys.length;s++){var a=ys[s];a.blockedOn===e&&(a.blockedOn=null)}}for(pn!==null&&ii(pn,e),hn!==null&&ii(hn,e),mn!==null&&ii(mn,e),ti.forEach(n),ni.forEach(n),s=0;s<gn.length;s++)a=gn[s],a.blockedOn===e&&(a.blockedOn=null);for(;0<gn.length&&(s=gn[0],s.blockedOn===null);)Ed(s),s.blockedOn===null&&gn.shift()}var cr=z.ReactCurrentBatchConfig,bs=!0;function j1(e,n,s,a){var d=ve,p=cr.transition;cr.transition=null;try{ve=1,Ta(e,n,s,a)}finally{ve=d,cr.transition=p}}function C1(e,n,s,a){var d=ve,p=cr.transition;cr.transition=null;try{ve=4,Ta(e,n,s,a)}finally{ve=d,cr.transition=p}}function Ta(e,n,s,a){if(bs){var d=Ra(e,n,s,a);if(d===null)Ga(e,n,a,ks,s),Cd(e,a);else if(k1(d,e,n,s,a))a.stopPropagation();else if(Cd(e,a),n&4&&-1<b1.indexOf(e)){for(;d!==null;){var p=vi(d);if(p!==null&&bd(p),p=Ra(e,n,s,a),p===null&&Ga(e,n,a,ks,s),p===d)break;d=p}d!==null&&a.stopPropagation()}else Ga(e,n,a,null,s)}}var ks=null;function Ra(e,n,s,a){if(ks=null,e=xa(a),e=In(e),e!==null)if(n=Fn(e),n===null)e=null;else if(s=n.tag,s===13){if(e=dd(n),e!==null)return e;e=null}else if(s===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null);return ks=e,null}function Pd(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(f1()){case Sa:return 1;case vd:return 4;case hs:case p1:return 16;case xd:return 536870912;default:return 16}default:return 16}}var vn=null,Aa=null,Ss=null;function Td(){if(Ss)return Ss;var e,n=Aa,s=n.length,a,d="value"in vn?vn.value:vn.textContent,p=d.length;for(e=0;e<s&&n[e]===d[e];e++);var y=s-e;for(a=1;a<=y&&n[s-a]===d[p-a];a++);return Ss=d.slice(e,1<a?1-a:void 0)}function js(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function Cs(){return!0}function Rd(){return!1}function vt(e){function n(s,a,d,p,y){this._reactName=s,this._targetInst=d,this.type=a,this.nativeEvent=p,this.target=y,this.currentTarget=null;for(var k in e)e.hasOwnProperty(k)&&(s=e[k],this[k]=s?s(p):p[k]);return this.isDefaultPrevented=(p.defaultPrevented!=null?p.defaultPrevented:p.returnValue===!1)?Cs:Rd,this.isPropagationStopped=Rd,this}return H(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var s=this.nativeEvent;s&&(s.preventDefault?s.preventDefault():typeof s.returnValue!="unknown"&&(s.returnValue=!1),this.isDefaultPrevented=Cs)},stopPropagation:function(){var s=this.nativeEvent;s&&(s.stopPropagation?s.stopPropagation():typeof s.cancelBubble!="unknown"&&(s.cancelBubble=!0),this.isPropagationStopped=Cs)},persist:function(){},isPersistent:Cs}),n}var dr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},_a=vt(dr),oi=H({},dr,{view:0,detail:0}),E1=vt(oi),Ma,La,ai,Es=H({},oi,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:za,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==ai&&(ai&&e.type==="mousemove"?(Ma=e.screenX-ai.screenX,La=e.screenY-ai.screenY):La=Ma=0,ai=e),Ma)},movementY:function(e){return"movementY"in e?e.movementY:La}}),Ad=vt(Es),N1=H({},Es,{dataTransfer:0}),P1=vt(N1),T1=H({},oi,{relatedTarget:0}),Da=vt(T1),R1=H({},dr,{animationName:0,elapsedTime:0,pseudoElement:0}),A1=vt(R1),_1=H({},dr,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),M1=vt(_1),L1=H({},dr,{data:0}),_d=vt(L1),D1={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},z1={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},V1={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function O1(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=V1[e])?!!n[e]:!1}function za(){return O1}var F1=H({},oi,{key:function(e){if(e.key){var n=D1[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=js(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?z1[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:za,charCode:function(e){return e.type==="keypress"?js(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?js(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),I1=vt(F1),B1=H({},Es,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Md=vt(B1),$1=H({},oi,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:za}),U1=vt($1),W1=H({},dr,{propertyName:0,elapsedTime:0,pseudoElement:0}),H1=vt(W1),K1=H({},Es,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),G1=vt(K1),Y1=[9,13,27,32],Va=h&&"CompositionEvent"in window,li=null;h&&"documentMode"in document&&(li=document.documentMode);var X1=h&&"TextEvent"in window&&!li,Ld=h&&(!Va||li&&8<li&&11>=li),Dd=" ",zd=!1;function Vd(e,n){switch(e){case"keyup":return Y1.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Od(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var fr=!1;function Q1(e,n){switch(e){case"compositionend":return Od(n);case"keypress":return n.which!==32?null:(zd=!0,Dd);case"textInput":return e=n.data,e===Dd&&zd?null:e;default:return null}}function q1(e,n){if(fr)return e==="compositionend"||!Va&&Vd(e,n)?(e=Td(),Ss=Aa=vn=null,fr=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return Ld&&n.locale!=="ko"?null:n.data;default:return null}}var Z1={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Fd(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!Z1[e.type]:n==="textarea"}function Id(e,n,s,a){od(a),n=As(n,"onChange"),0<n.length&&(s=new _a("onChange","change",null,s,a),e.push({event:s,listeners:n}))}var ui=null,ci=null;function J1(e){sf(e,0)}function Ns(e){var n=vr(e);if(Yc(n))return e}function ev(e,n){if(e==="change")return n}var Bd=!1;if(h){var Oa;if(h){var Fa="oninput"in document;if(!Fa){var $d=document.createElement("div");$d.setAttribute("oninput","return;"),Fa=typeof $d.oninput=="function"}Oa=Fa}else Oa=!1;Bd=Oa&&(!document.documentMode||9<document.documentMode)}function Ud(){ui&&(ui.detachEvent("onpropertychange",Wd),ci=ui=null)}function Wd(e){if(e.propertyName==="value"&&Ns(ci)){var n=[];Id(n,ci,e,xa(e)),cd(J1,n)}}function tv(e,n,s){e==="focusin"?(Ud(),ui=n,ci=s,ui.attachEvent("onpropertychange",Wd)):e==="focusout"&&Ud()}function nv(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Ns(ci)}function rv(e,n){if(e==="click")return Ns(n)}function iv(e,n){if(e==="input"||e==="change")return Ns(n)}function sv(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var Dt=typeof Object.is=="function"?Object.is:sv;function di(e,n){if(Dt(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var s=Object.keys(e),a=Object.keys(n);if(s.length!==a.length)return!1;for(a=0;a<s.length;a++){var d=s[a];if(!m.call(n,d)||!Dt(e[d],n[d]))return!1}return!0}function Hd(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Kd(e,n){var s=Hd(e);e=0;for(var a;s;){if(s.nodeType===3){if(a=e+s.textContent.length,e<=n&&a>=n)return{node:s,offset:n-e};e=a}e:{for(;s;){if(s.nextSibling){s=s.nextSibling;break e}s=s.parentNode}s=void 0}s=Hd(s)}}function Gd(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?Gd(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function Yd(){for(var e=window,n=cs();n instanceof e.HTMLIFrameElement;){try{var s=typeof n.contentWindow.location.href=="string"}catch{s=!1}if(s)e=n.contentWindow;else break;n=cs(e.document)}return n}function Ia(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}function ov(e){var n=Yd(),s=e.focusedElem,a=e.selectionRange;if(n!==s&&s&&s.ownerDocument&&Gd(s.ownerDocument.documentElement,s)){if(a!==null&&Ia(s)){if(n=a.start,e=a.end,e===void 0&&(e=n),"selectionStart"in s)s.selectionStart=n,s.selectionEnd=Math.min(e,s.value.length);else if(e=(n=s.ownerDocument||document)&&n.defaultView||window,e.getSelection){e=e.getSelection();var d=s.textContent.length,p=Math.min(a.start,d);a=a.end===void 0?p:Math.min(a.end,d),!e.extend&&p>a&&(d=a,a=p,p=d),d=Kd(s,p);var y=Kd(s,a);d&&y&&(e.rangeCount!==1||e.anchorNode!==d.node||e.anchorOffset!==d.offset||e.focusNode!==y.node||e.focusOffset!==y.offset)&&(n=n.createRange(),n.setStart(d.node,d.offset),e.removeAllRanges(),p>a?(e.addRange(n),e.extend(y.node,y.offset)):(n.setEnd(y.node,y.offset),e.addRange(n)))}}for(n=[],e=s;e=e.parentNode;)e.nodeType===1&&n.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof s.focus=="function"&&s.focus(),s=0;s<n.length;s++)e=n[s],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var av=h&&"documentMode"in document&&11>=document.documentMode,pr=null,Ba=null,fi=null,$a=!1;function Xd(e,n,s){var a=s.window===s?s.document:s.nodeType===9?s:s.ownerDocument;$a||pr==null||pr!==cs(a)||(a=pr,"selectionStart"in a&&Ia(a)?a={start:a.selectionStart,end:a.selectionEnd}:(a=(a.ownerDocument&&a.ownerDocument.defaultView||window).getSelection(),a={anchorNode:a.anchorNode,anchorOffset:a.anchorOffset,focusNode:a.focusNode,focusOffset:a.focusOffset}),fi&&di(fi,a)||(fi=a,a=As(Ba,"onSelect"),0<a.length&&(n=new _a("onSelect","select",null,n,s),e.push({event:n,listeners:a}),n.target=pr)))}function Ps(e,n){var s={};return s[e.toLowerCase()]=n.toLowerCase(),s["Webkit"+e]="webkit"+n,s["Moz"+e]="moz"+n,s}var hr={animationend:Ps("Animation","AnimationEnd"),animationiteration:Ps("Animation","AnimationIteration"),animationstart:Ps("Animation","AnimationStart"),transitionend:Ps("Transition","TransitionEnd")},Ua={},Qd={};h&&(Qd=document.createElement("div").style,"AnimationEvent"in window||(delete hr.animationend.animation,delete hr.animationiteration.animation,delete hr.animationstart.animation),"TransitionEvent"in window||delete hr.transitionend.transition);function Ts(e){if(Ua[e])return Ua[e];if(!hr[e])return e;var n=hr[e],s;for(s in n)if(n.hasOwnProperty(s)&&s in Qd)return Ua[e]=n[s];return e}var qd=Ts("animationend"),Zd=Ts("animationiteration"),Jd=Ts("animationstart"),ef=Ts("transitionend"),tf=new Map,nf="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function xn(e,n){tf.set(e,n),c(n,[e])}for(var Wa=0;Wa<nf.length;Wa++){var Ha=nf[Wa],lv=Ha.toLowerCase(),uv=Ha[0].toUpperCase()+Ha.slice(1);xn(lv,"on"+uv)}xn(qd,"onAnimationEnd"),xn(Zd,"onAnimationIteration"),xn(Jd,"onAnimationStart"),xn("dblclick","onDoubleClick"),xn("focusin","onFocus"),xn("focusout","onBlur"),xn(ef,"onTransitionEnd"),u("onMouseEnter",["mouseout","mouseover"]),u("onMouseLeave",["mouseout","mouseover"]),u("onPointerEnter",["pointerout","pointerover"]),u("onPointerLeave",["pointerout","pointerover"]),c("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),c("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),c("onBeforeInput",["compositionend","keypress","textInput","paste"]),c("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),c("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),c("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var pi="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),cv=new Set("cancel close invalid load scroll toggle".split(" ").concat(pi));function rf(e,n,s){var a=e.type||"unknown-event";e.currentTarget=s,l1(a,n,void 0,e),e.currentTarget=null}function sf(e,n){n=(n&4)!==0;for(var s=0;s<e.length;s++){var a=e[s],d=a.event;a=a.listeners;e:{var p=void 0;if(n)for(var y=a.length-1;0<=y;y--){var k=a[y],C=k.instance,L=k.currentTarget;if(k=k.listener,C!==p&&d.isPropagationStopped())break e;rf(d,k,L),p=C}else for(y=0;y<a.length;y++){if(k=a[y],C=k.instance,L=k.currentTarget,k=k.listener,C!==p&&d.isPropagationStopped())break e;rf(d,k,L),p=C}}}if(ps)throw e=ka,ps=!1,ka=null,e}function ke(e,n){var s=n[Ja];s===void 0&&(s=n[Ja]=new Set);var a=e+"__bubble";s.has(a)||(of(n,e,2,!1),s.add(a))}function Ka(e,n,s){var a=0;n&&(a|=4),of(s,e,a,n)}var Rs="_reactListening"+Math.random().toString(36).slice(2);function hi(e){if(!e[Rs]){e[Rs]=!0,o.forEach(function(s){s!=="selectionchange"&&(cv.has(s)||Ka(s,!1,e),Ka(s,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[Rs]||(n[Rs]=!0,Ka("selectionchange",!1,n))}}function of(e,n,s,a){switch(Pd(n)){case 1:var d=j1;break;case 4:d=C1;break;default:d=Ta}s=d.bind(null,n,s,e),d=void 0,!ba||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(d=!0),a?d!==void 0?e.addEventListener(n,s,{capture:!0,passive:d}):e.addEventListener(n,s,!0):d!==void 0?e.addEventListener(n,s,{passive:d}):e.addEventListener(n,s,!1)}function Ga(e,n,s,a,d){var p=a;if((n&1)===0&&(n&2)===0&&a!==null)e:for(;;){if(a===null)return;var y=a.tag;if(y===3||y===4){var k=a.stateNode.containerInfo;if(k===d||k.nodeType===8&&k.parentNode===d)break;if(y===4)for(y=a.return;y!==null;){var C=y.tag;if((C===3||C===4)&&(C=y.stateNode.containerInfo,C===d||C.nodeType===8&&C.parentNode===d))return;y=y.return}for(;k!==null;){if(y=In(k),y===null)return;if(C=y.tag,C===5||C===6){a=p=y;continue e}k=k.parentNode}}a=a.return}cd(function(){var L=p,F=xa(s),B=[];e:{var V=tf.get(e);if(V!==void 0){var W=_a,Y=e;switch(e){case"keypress":if(js(s)===0)break e;case"keydown":case"keyup":W=I1;break;case"focusin":Y="focus",W=Da;break;case"focusout":Y="blur",W=Da;break;case"beforeblur":case"afterblur":W=Da;break;case"click":if(s.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":W=Ad;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":W=P1;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":W=U1;break;case qd:case Zd:case Jd:W=A1;break;case ef:W=H1;break;case"scroll":W=E1;break;case"wheel":W=G1;break;case"copy":case"cut":case"paste":W=M1;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":W=Md}var X=(n&4)!==0,De=!X&&e==="scroll",R=X?V!==null?V+"Capture":null:V;X=[];for(var P=L,M;P!==null;){M=P;var $=M.stateNode;if(M.tag===5&&$!==null&&(M=$,R!==null&&($=Qr(P,R),$!=null&&X.push(mi(P,$,M)))),De)break;P=P.return}0<X.length&&(V=new W(V,Y,null,s,F),B.push({event:V,listeners:X}))}}if((n&7)===0){e:{if(V=e==="mouseover"||e==="pointerover",W=e==="mouseout"||e==="pointerout",V&&s!==va&&(Y=s.relatedTarget||s.fromElement)&&(In(Y)||Y[en]))break e;if((W||V)&&(V=F.window===F?F:(V=F.ownerDocument)?V.defaultView||V.parentWindow:window,W?(Y=s.relatedTarget||s.toElement,W=L,Y=Y?In(Y):null,Y!==null&&(De=Fn(Y),Y!==De||Y.tag!==5&&Y.tag!==6)&&(Y=null)):(W=null,Y=L),W!==Y)){if(X=Ad,$="onMouseLeave",R="onMouseEnter",P="mouse",(e==="pointerout"||e==="pointerover")&&(X=Md,$="onPointerLeave",R="onPointerEnter",P="pointer"),De=W==null?V:vr(W),M=Y==null?V:vr(Y),V=new X($,P+"leave",W,s,F),V.target=De,V.relatedTarget=M,$=null,In(F)===L&&(X=new X(R,P+"enter",Y,s,F),X.target=M,X.relatedTarget=De,$=X),De=$,W&&Y)t:{for(X=W,R=Y,P=0,M=X;M;M=mr(M))P++;for(M=0,$=R;$;$=mr($))M++;for(;0<P-M;)X=mr(X),P--;for(;0<M-P;)R=mr(R),M--;for(;P--;){if(X===R||R!==null&&X===R.alternate)break t;X=mr(X),R=mr(R)}X=null}else X=null;W!==null&&af(B,V,W,X,!1),Y!==null&&De!==null&&af(B,De,Y,X,!0)}}e:{if(V=L?vr(L):window,W=V.nodeName&&V.nodeName.toLowerCase(),W==="select"||W==="input"&&V.type==="file")var q=ev;else if(Fd(V))if(Bd)q=iv;else{q=nv;var J=tv}else(W=V.nodeName)&&W.toLowerCase()==="input"&&(V.type==="checkbox"||V.type==="radio")&&(q=rv);if(q&&(q=q(e,L))){Id(B,q,s,F);break e}J&&J(e,V,L),e==="focusout"&&(J=V._wrapperState)&&J.controlled&&V.type==="number"&&fa(V,"number",V.value)}switch(J=L?vr(L):window,e){case"focusin":(Fd(J)||J.contentEditable==="true")&&(pr=J,Ba=L,fi=null);break;case"focusout":fi=Ba=pr=null;break;case"mousedown":$a=!0;break;case"contextmenu":case"mouseup":case"dragend":$a=!1,Xd(B,s,F);break;case"selectionchange":if(av)break;case"keydown":case"keyup":Xd(B,s,F)}var ee;if(Va)e:{switch(e){case"compositionstart":var re="onCompositionStart";break e;case"compositionend":re="onCompositionEnd";break e;case"compositionupdate":re="onCompositionUpdate";break e}re=void 0}else fr?Vd(e,s)&&(re="onCompositionEnd"):e==="keydown"&&s.keyCode===229&&(re="onCompositionStart");re&&(Ld&&s.locale!=="ko"&&(fr||re!=="onCompositionStart"?re==="onCompositionEnd"&&fr&&(ee=Td()):(vn=F,Aa="value"in vn?vn.value:vn.textContent,fr=!0)),J=As(L,re),0<J.length&&(re=new _d(re,e,null,s,F),B.push({event:re,listeners:J}),ee?re.data=ee:(ee=Od(s),ee!==null&&(re.data=ee)))),(ee=X1?Q1(e,s):q1(e,s))&&(L=As(L,"onBeforeInput"),0<L.length&&(F=new _d("onBeforeInput","beforeinput",null,s,F),B.push({event:F,listeners:L}),F.data=ee))}sf(B,n)})}function mi(e,n,s){return{instance:e,listener:n,currentTarget:s}}function As(e,n){for(var s=n+"Capture",a=[];e!==null;){var d=e,p=d.stateNode;d.tag===5&&p!==null&&(d=p,p=Qr(e,s),p!=null&&a.unshift(mi(e,p,d)),p=Qr(e,n),p!=null&&a.push(mi(e,p,d))),e=e.return}return a}function mr(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function af(e,n,s,a,d){for(var p=n._reactName,y=[];s!==null&&s!==a;){var k=s,C=k.alternate,L=k.stateNode;if(C!==null&&C===a)break;k.tag===5&&L!==null&&(k=L,d?(C=Qr(s,p),C!=null&&y.unshift(mi(s,C,k))):d||(C=Qr(s,p),C!=null&&y.push(mi(s,C,k)))),s=s.return}y.length!==0&&e.push({event:n,listeners:y})}var dv=/\r\n?/g,fv=/\u0000|\uFFFD/g;function lf(e){return(typeof e=="string"?e:""+e).replace(dv,`
`).replace(fv,"")}function _s(e,n,s){if(n=lf(n),lf(e)!==n&&s)throw Error(i(425))}function Ms(){}var Ya=null,Xa=null;function Qa(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var qa=typeof setTimeout=="function"?setTimeout:void 0,pv=typeof clearTimeout=="function"?clearTimeout:void 0,uf=typeof Promise=="function"?Promise:void 0,hv=typeof queueMicrotask=="function"?queueMicrotask:typeof uf<"u"?function(e){return uf.resolve(null).then(e).catch(mv)}:qa;function mv(e){setTimeout(function(){throw e})}function Za(e,n){var s=n,a=0;do{var d=s.nextSibling;if(e.removeChild(s),d&&d.nodeType===8)if(s=d.data,s==="/$"){if(a===0){e.removeChild(d),si(n);return}a--}else s!=="$"&&s!=="$?"&&s!=="$!"||a++;s=d}while(s);si(n)}function yn(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?")break;if(n==="/$")return null}}return e}function cf(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var s=e.data;if(s==="$"||s==="$!"||s==="$?"){if(n===0)return e;n--}else s==="/$"&&n++}e=e.previousSibling}return null}var gr=Math.random().toString(36).slice(2),Ht="__reactFiber$"+gr,gi="__reactProps$"+gr,en="__reactContainer$"+gr,Ja="__reactEvents$"+gr,gv="__reactListeners$"+gr,vv="__reactHandles$"+gr;function In(e){var n=e[Ht];if(n)return n;for(var s=e.parentNode;s;){if(n=s[en]||s[Ht]){if(s=n.alternate,n.child!==null||s!==null&&s.child!==null)for(e=cf(e);e!==null;){if(s=e[Ht])return s;e=cf(e)}return n}e=s,s=e.parentNode}return null}function vi(e){return e=e[Ht]||e[en],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function vr(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(i(33))}function Ls(e){return e[gi]||null}var el=[],xr=-1;function wn(e){return{current:e}}function Se(e){0>xr||(e.current=el[xr],el[xr]=null,xr--)}function be(e,n){xr++,el[xr]=e.current,e.current=n}var bn={},Je=wn(bn),ct=wn(!1),Bn=bn;function yr(e,n){var s=e.type.contextTypes;if(!s)return bn;var a=e.stateNode;if(a&&a.__reactInternalMemoizedUnmaskedChildContext===n)return a.__reactInternalMemoizedMaskedChildContext;var d={},p;for(p in s)d[p]=n[p];return a&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=n,e.__reactInternalMemoizedMaskedChildContext=d),d}function dt(e){return e=e.childContextTypes,e!=null}function Ds(){Se(ct),Se(Je)}function df(e,n,s){if(Je.current!==bn)throw Error(i(168));be(Je,n),be(ct,s)}function ff(e,n,s){var a=e.stateNode;if(n=n.childContextTypes,typeof a.getChildContext!="function")return s;a=a.getChildContext();for(var d in a)if(!(d in n))throw Error(i(108,we(e)||"Unknown",d));return H({},s,a)}function zs(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||bn,Bn=Je.current,be(Je,e),be(ct,ct.current),!0}function pf(e,n,s){var a=e.stateNode;if(!a)throw Error(i(169));s?(e=ff(e,n,Bn),a.__reactInternalMemoizedMergedChildContext=e,Se(ct),Se(Je),be(Je,e)):Se(ct),be(ct,s)}var tn=null,Vs=!1,tl=!1;function hf(e){tn===null?tn=[e]:tn.push(e)}function xv(e){Vs=!0,hf(e)}function kn(){if(!tl&&tn!==null){tl=!0;var e=0,n=ve;try{var s=tn;for(ve=1;e<s.length;e++){var a=s[e];do a=a(!0);while(a!==null)}tn=null,Vs=!1}catch(d){throw tn!==null&&(tn=tn.slice(e+1)),md(Sa,kn),d}finally{ve=n,tl=!1}}return null}var wr=[],br=0,Os=null,Fs=0,jt=[],Ct=0,$n=null,nn=1,rn="";function Un(e,n){wr[br++]=Fs,wr[br++]=Os,Os=e,Fs=n}function mf(e,n,s){jt[Ct++]=nn,jt[Ct++]=rn,jt[Ct++]=$n,$n=e;var a=nn;e=rn;var d=32-Lt(a)-1;a&=~(1<<d),s+=1;var p=32-Lt(n)+d;if(30<p){var y=d-d%5;p=(a&(1<<y)-1).toString(32),a>>=y,d-=y,nn=1<<32-Lt(n)+d|s<<d|a,rn=p+e}else nn=1<<p|s<<d|a,rn=e}function nl(e){e.return!==null&&(Un(e,1),mf(e,1,0))}function rl(e){for(;e===Os;)Os=wr[--br],wr[br]=null,Fs=wr[--br],wr[br]=null;for(;e===$n;)$n=jt[--Ct],jt[Ct]=null,rn=jt[--Ct],jt[Ct]=null,nn=jt[--Ct],jt[Ct]=null}var xt=null,yt=null,Ce=!1,zt=null;function gf(e,n){var s=Tt(5,null,null,0);s.elementType="DELETED",s.stateNode=n,s.return=e,n=e.deletions,n===null?(e.deletions=[s],e.flags|=16):n.push(s)}function vf(e,n){switch(e.tag){case 5:var s=e.type;return n=n.nodeType!==1||s.toLowerCase()!==n.nodeName.toLowerCase()?null:n,n!==null?(e.stateNode=n,xt=e,yt=yn(n.firstChild),!0):!1;case 6:return n=e.pendingProps===""||n.nodeType!==3?null:n,n!==null?(e.stateNode=n,xt=e,yt=null,!0):!1;case 13:return n=n.nodeType!==8?null:n,n!==null?(s=$n!==null?{id:nn,overflow:rn}:null,e.memoizedState={dehydrated:n,treeContext:s,retryLane:1073741824},s=Tt(18,null,null,0),s.stateNode=n,s.return=e,e.child=s,xt=e,yt=null,!0):!1;default:return!1}}function il(e){return(e.mode&1)!==0&&(e.flags&128)===0}function sl(e){if(Ce){var n=yt;if(n){var s=n;if(!vf(e,n)){if(il(e))throw Error(i(418));n=yn(s.nextSibling);var a=xt;n&&vf(e,n)?gf(a,s):(e.flags=e.flags&-4097|2,Ce=!1,xt=e)}}else{if(il(e))throw Error(i(418));e.flags=e.flags&-4097|2,Ce=!1,xt=e}}}function xf(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;xt=e}function Is(e){if(e!==xt)return!1;if(!Ce)return xf(e),Ce=!0,!1;var n;if((n=e.tag!==3)&&!(n=e.tag!==5)&&(n=e.type,n=n!=="head"&&n!=="body"&&!Qa(e.type,e.memoizedProps)),n&&(n=yt)){if(il(e))throw yf(),Error(i(418));for(;n;)gf(e,n),n=yn(n.nextSibling)}if(xf(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(i(317));e:{for(e=e.nextSibling,n=0;e;){if(e.nodeType===8){var s=e.data;if(s==="/$"){if(n===0){yt=yn(e.nextSibling);break e}n--}else s!=="$"&&s!=="$!"&&s!=="$?"||n++}e=e.nextSibling}yt=null}}else yt=xt?yn(e.stateNode.nextSibling):null;return!0}function yf(){for(var e=yt;e;)e=yn(e.nextSibling)}function kr(){yt=xt=null,Ce=!1}function ol(e){zt===null?zt=[e]:zt.push(e)}var yv=z.ReactCurrentBatchConfig;function xi(e,n,s){if(e=s.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(s._owner){if(s=s._owner,s){if(s.tag!==1)throw Error(i(309));var a=s.stateNode}if(!a)throw Error(i(147,e));var d=a,p=""+e;return n!==null&&n.ref!==null&&typeof n.ref=="function"&&n.ref._stringRef===p?n.ref:(n=function(y){var k=d.refs;y===null?delete k[p]:k[p]=y},n._stringRef=p,n)}if(typeof e!="string")throw Error(i(284));if(!s._owner)throw Error(i(290,e))}return e}function Bs(e,n){throw e=Object.prototype.toString.call(n),Error(i(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e))}function wf(e){var n=e._init;return n(e._payload)}function bf(e){function n(R,P){if(e){var M=R.deletions;M===null?(R.deletions=[P],R.flags|=16):M.push(P)}}function s(R,P){if(!e)return null;for(;P!==null;)n(R,P),P=P.sibling;return null}function a(R,P){for(R=new Map;P!==null;)P.key!==null?R.set(P.key,P):R.set(P.index,P),P=P.sibling;return R}function d(R,P){return R=Rn(R,P),R.index=0,R.sibling=null,R}function p(R,P,M){return R.index=M,e?(M=R.alternate,M!==null?(M=M.index,M<P?(R.flags|=2,P):M):(R.flags|=2,P)):(R.flags|=1048576,P)}function y(R){return e&&R.alternate===null&&(R.flags|=2),R}function k(R,P,M,$){return P===null||P.tag!==6?(P=ql(M,R.mode,$),P.return=R,P):(P=d(P,M),P.return=R,P)}function C(R,P,M,$){var q=M.type;return q===ne?F(R,P,M.props.children,$,M.key):P!==null&&(P.elementType===q||typeof q=="object"&&q!==null&&q.$$typeof===st&&wf(q)===P.type)?($=d(P,M.props),$.ref=xi(R,P,M),$.return=R,$):($=fo(M.type,M.key,M.props,null,R.mode,$),$.ref=xi(R,P,M),$.return=R,$)}function L(R,P,M,$){return P===null||P.tag!==4||P.stateNode.containerInfo!==M.containerInfo||P.stateNode.implementation!==M.implementation?(P=Zl(M,R.mode,$),P.return=R,P):(P=d(P,M.children||[]),P.return=R,P)}function F(R,P,M,$,q){return P===null||P.tag!==7?(P=qn(M,R.mode,$,q),P.return=R,P):(P=d(P,M),P.return=R,P)}function B(R,P,M){if(typeof P=="string"&&P!==""||typeof P=="number")return P=ql(""+P,R.mode,M),P.return=R,P;if(typeof P=="object"&&P!==null){switch(P.$$typeof){case I:return M=fo(P.type,P.key,P.props,null,R.mode,M),M.ref=xi(R,null,P),M.return=R,M;case G:return P=Zl(P,R.mode,M),P.return=R,P;case st:var $=P._init;return B(R,$(P._payload),M)}if(Gr(P)||Z(P))return P=qn(P,R.mode,M,null),P.return=R,P;Bs(R,P)}return null}function V(R,P,M,$){var q=P!==null?P.key:null;if(typeof M=="string"&&M!==""||typeof M=="number")return q!==null?null:k(R,P,""+M,$);if(typeof M=="object"&&M!==null){switch(M.$$typeof){case I:return M.key===q?C(R,P,M,$):null;case G:return M.key===q?L(R,P,M,$):null;case st:return q=M._init,V(R,P,q(M._payload),$)}if(Gr(M)||Z(M))return q!==null?null:F(R,P,M,$,null);Bs(R,M)}return null}function W(R,P,M,$,q){if(typeof $=="string"&&$!==""||typeof $=="number")return R=R.get(M)||null,k(P,R,""+$,q);if(typeof $=="object"&&$!==null){switch($.$$typeof){case I:return R=R.get($.key===null?M:$.key)||null,C(P,R,$,q);case G:return R=R.get($.key===null?M:$.key)||null,L(P,R,$,q);case st:var J=$._init;return W(R,P,M,J($._payload),q)}if(Gr($)||Z($))return R=R.get(M)||null,F(P,R,$,q,null);Bs(P,$)}return null}function Y(R,P,M,$){for(var q=null,J=null,ee=P,re=P=0,Ke=null;ee!==null&&re<M.length;re++){ee.index>re?(Ke=ee,ee=null):Ke=ee.sibling;var fe=V(R,ee,M[re],$);if(fe===null){ee===null&&(ee=Ke);break}e&&ee&&fe.alternate===null&&n(R,ee),P=p(fe,P,re),J===null?q=fe:J.sibling=fe,J=fe,ee=Ke}if(re===M.length)return s(R,ee),Ce&&Un(R,re),q;if(ee===null){for(;re<M.length;re++)ee=B(R,M[re],$),ee!==null&&(P=p(ee,P,re),J===null?q=ee:J.sibling=ee,J=ee);return Ce&&Un(R,re),q}for(ee=a(R,ee);re<M.length;re++)Ke=W(ee,R,re,M[re],$),Ke!==null&&(e&&Ke.alternate!==null&&ee.delete(Ke.key===null?re:Ke.key),P=p(Ke,P,re),J===null?q=Ke:J.sibling=Ke,J=Ke);return e&&ee.forEach(function(An){return n(R,An)}),Ce&&Un(R,re),q}function X(R,P,M,$){var q=Z(M);if(typeof q!="function")throw Error(i(150));if(M=q.call(M),M==null)throw Error(i(151));for(var J=q=null,ee=P,re=P=0,Ke=null,fe=M.next();ee!==null&&!fe.done;re++,fe=M.next()){ee.index>re?(Ke=ee,ee=null):Ke=ee.sibling;var An=V(R,ee,fe.value,$);if(An===null){ee===null&&(ee=Ke);break}e&&ee&&An.alternate===null&&n(R,ee),P=p(An,P,re),J===null?q=An:J.sibling=An,J=An,ee=Ke}if(fe.done)return s(R,ee),Ce&&Un(R,re),q;if(ee===null){for(;!fe.done;re++,fe=M.next())fe=B(R,fe.value,$),fe!==null&&(P=p(fe,P,re),J===null?q=fe:J.sibling=fe,J=fe);return Ce&&Un(R,re),q}for(ee=a(R,ee);!fe.done;re++,fe=M.next())fe=W(ee,R,re,fe.value,$),fe!==null&&(e&&fe.alternate!==null&&ee.delete(fe.key===null?re:fe.key),P=p(fe,P,re),J===null?q=fe:J.sibling=fe,J=fe);return e&&ee.forEach(function(Zv){return n(R,Zv)}),Ce&&Un(R,re),q}function De(R,P,M,$){if(typeof M=="object"&&M!==null&&M.type===ne&&M.key===null&&(M=M.props.children),typeof M=="object"&&M!==null){switch(M.$$typeof){case I:e:{for(var q=M.key,J=P;J!==null;){if(J.key===q){if(q=M.type,q===ne){if(J.tag===7){s(R,J.sibling),P=d(J,M.props.children),P.return=R,R=P;break e}}else if(J.elementType===q||typeof q=="object"&&q!==null&&q.$$typeof===st&&wf(q)===J.type){s(R,J.sibling),P=d(J,M.props),P.ref=xi(R,J,M),P.return=R,R=P;break e}s(R,J);break}else n(R,J);J=J.sibling}M.type===ne?(P=qn(M.props.children,R.mode,$,M.key),P.return=R,R=P):($=fo(M.type,M.key,M.props,null,R.mode,$),$.ref=xi(R,P,M),$.return=R,R=$)}return y(R);case G:e:{for(J=M.key;P!==null;){if(P.key===J)if(P.tag===4&&P.stateNode.containerInfo===M.containerInfo&&P.stateNode.implementation===M.implementation){s(R,P.sibling),P=d(P,M.children||[]),P.return=R,R=P;break e}else{s(R,P);break}else n(R,P);P=P.sibling}P=Zl(M,R.mode,$),P.return=R,R=P}return y(R);case st:return J=M._init,De(R,P,J(M._payload),$)}if(Gr(M))return Y(R,P,M,$);if(Z(M))return X(R,P,M,$);Bs(R,M)}return typeof M=="string"&&M!==""||typeof M=="number"?(M=""+M,P!==null&&P.tag===6?(s(R,P.sibling),P=d(P,M),P.return=R,R=P):(s(R,P),P=ql(M,R.mode,$),P.return=R,R=P),y(R)):s(R,P)}return De}var Sr=bf(!0),kf=bf(!1),$s=wn(null),Us=null,jr=null,al=null;function ll(){al=jr=Us=null}function ul(e){var n=$s.current;Se($s),e._currentValue=n}function cl(e,n,s){for(;e!==null;){var a=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,a!==null&&(a.childLanes|=n)):a!==null&&(a.childLanes&n)!==n&&(a.childLanes|=n),e===s)break;e=e.return}}function Cr(e,n){Us=e,al=jr=null,e=e.dependencies,e!==null&&e.firstContext!==null&&((e.lanes&n)!==0&&(ft=!0),e.firstContext=null)}function Et(e){var n=e._currentValue;if(al!==e)if(e={context:e,memoizedValue:n,next:null},jr===null){if(Us===null)throw Error(i(308));jr=e,Us.dependencies={lanes:0,firstContext:e}}else jr=jr.next=e;return n}var Wn=null;function dl(e){Wn===null?Wn=[e]:Wn.push(e)}function Sf(e,n,s,a){var d=n.interleaved;return d===null?(s.next=s,dl(n)):(s.next=d.next,d.next=s),n.interleaved=s,sn(e,a)}function sn(e,n){e.lanes|=n;var s=e.alternate;for(s!==null&&(s.lanes|=n),s=e,e=e.return;e!==null;)e.childLanes|=n,s=e.alternate,s!==null&&(s.childLanes|=n),s=e,e=e.return;return s.tag===3?s.stateNode:null}var Sn=!1;function fl(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function jf(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function on(e,n){return{eventTime:e,lane:n,tag:0,payload:null,callback:null,next:null}}function jn(e,n,s){var a=e.updateQueue;if(a===null)return null;if(a=a.shared,(ue&2)!==0){var d=a.pending;return d===null?n.next=n:(n.next=d.next,d.next=n),a.pending=n,sn(e,s)}return d=a.interleaved,d===null?(n.next=n,dl(a)):(n.next=d.next,d.next=n),a.interleaved=n,sn(e,s)}function Ws(e,n,s){if(n=n.updateQueue,n!==null&&(n=n.shared,(s&4194240)!==0)){var a=n.lanes;a&=e.pendingLanes,s|=a,n.lanes=s,Ea(e,s)}}function Cf(e,n){var s=e.updateQueue,a=e.alternate;if(a!==null&&(a=a.updateQueue,s===a)){var d=null,p=null;if(s=s.firstBaseUpdate,s!==null){do{var y={eventTime:s.eventTime,lane:s.lane,tag:s.tag,payload:s.payload,callback:s.callback,next:null};p===null?d=p=y:p=p.next=y,s=s.next}while(s!==null);p===null?d=p=n:p=p.next=n}else d=p=n;s={baseState:a.baseState,firstBaseUpdate:d,lastBaseUpdate:p,shared:a.shared,effects:a.effects},e.updateQueue=s;return}e=s.lastBaseUpdate,e===null?s.firstBaseUpdate=n:e.next=n,s.lastBaseUpdate=n}function Hs(e,n,s,a){var d=e.updateQueue;Sn=!1;var p=d.firstBaseUpdate,y=d.lastBaseUpdate,k=d.shared.pending;if(k!==null){d.shared.pending=null;var C=k,L=C.next;C.next=null,y===null?p=L:y.next=L,y=C;var F=e.alternate;F!==null&&(F=F.updateQueue,k=F.lastBaseUpdate,k!==y&&(k===null?F.firstBaseUpdate=L:k.next=L,F.lastBaseUpdate=C))}if(p!==null){var B=d.baseState;y=0,F=L=C=null,k=p;do{var V=k.lane,W=k.eventTime;if((a&V)===V){F!==null&&(F=F.next={eventTime:W,lane:0,tag:k.tag,payload:k.payload,callback:k.callback,next:null});e:{var Y=e,X=k;switch(V=n,W=s,X.tag){case 1:if(Y=X.payload,typeof Y=="function"){B=Y.call(W,B,V);break e}B=Y;break e;case 3:Y.flags=Y.flags&-65537|128;case 0:if(Y=X.payload,V=typeof Y=="function"?Y.call(W,B,V):Y,V==null)break e;B=H({},B,V);break e;case 2:Sn=!0}}k.callback!==null&&k.lane!==0&&(e.flags|=64,V=d.effects,V===null?d.effects=[k]:V.push(k))}else W={eventTime:W,lane:V,tag:k.tag,payload:k.payload,callback:k.callback,next:null},F===null?(L=F=W,C=B):F=F.next=W,y|=V;if(k=k.next,k===null){if(k=d.shared.pending,k===null)break;V=k,k=V.next,V.next=null,d.lastBaseUpdate=V,d.shared.pending=null}}while(!0);if(F===null&&(C=B),d.baseState=C,d.firstBaseUpdate=L,d.lastBaseUpdate=F,n=d.shared.interleaved,n!==null){d=n;do y|=d.lane,d=d.next;while(d!==n)}else p===null&&(d.shared.lanes=0);Gn|=y,e.lanes=y,e.memoizedState=B}}function Ef(e,n,s){if(e=n.effects,n.effects=null,e!==null)for(n=0;n<e.length;n++){var a=e[n],d=a.callback;if(d!==null){if(a.callback=null,a=s,typeof d!="function")throw Error(i(191,d));d.call(a)}}}var yi={},Kt=wn(yi),wi=wn(yi),bi=wn(yi);function Hn(e){if(e===yi)throw Error(i(174));return e}function pl(e,n){switch(be(bi,n),be(wi,e),be(Kt,yi),e=n.nodeType,e){case 9:case 11:n=(n=n.documentElement)?n.namespaceURI:ha(null,"");break;default:e=e===8?n.parentNode:n,n=e.namespaceURI||null,e=e.tagName,n=ha(n,e)}Se(Kt),be(Kt,n)}function Er(){Se(Kt),Se(wi),Se(bi)}function Nf(e){Hn(bi.current);var n=Hn(Kt.current),s=ha(n,e.type);n!==s&&(be(wi,e),be(Kt,s))}function hl(e){wi.current===e&&(Se(Kt),Se(wi))}var Ne=wn(0);function Ks(e){for(var n=e;n!==null;){if(n.tag===13){var s=n.memoizedState;if(s!==null&&(s=s.dehydrated,s===null||s.data==="$?"||s.data==="$!"))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!==void 0){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var ml=[];function gl(){for(var e=0;e<ml.length;e++)ml[e]._workInProgressVersionPrimary=null;ml.length=0}var Gs=z.ReactCurrentDispatcher,vl=z.ReactCurrentBatchConfig,Kn=0,Pe=null,Fe=null,We=null,Ys=!1,ki=!1,Si=0,wv=0;function et(){throw Error(i(321))}function xl(e,n){if(n===null)return!1;for(var s=0;s<n.length&&s<e.length;s++)if(!Dt(e[s],n[s]))return!1;return!0}function yl(e,n,s,a,d,p){if(Kn=p,Pe=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,Gs.current=e===null||e.memoizedState===null?jv:Cv,e=s(a,d),ki){p=0;do{if(ki=!1,Si=0,25<=p)throw Error(i(301));p+=1,We=Fe=null,n.updateQueue=null,Gs.current=Ev,e=s(a,d)}while(ki)}if(Gs.current=qs,n=Fe!==null&&Fe.next!==null,Kn=0,We=Fe=Pe=null,Ys=!1,n)throw Error(i(300));return e}function wl(){var e=Si!==0;return Si=0,e}function Gt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return We===null?Pe.memoizedState=We=e:We=We.next=e,We}function Nt(){if(Fe===null){var e=Pe.alternate;e=e!==null?e.memoizedState:null}else e=Fe.next;var n=We===null?Pe.memoizedState:We.next;if(n!==null)We=n,Fe=e;else{if(e===null)throw Error(i(310));Fe=e,e={memoizedState:Fe.memoizedState,baseState:Fe.baseState,baseQueue:Fe.baseQueue,queue:Fe.queue,next:null},We===null?Pe.memoizedState=We=e:We=We.next=e}return We}function ji(e,n){return typeof n=="function"?n(e):n}function bl(e){var n=Nt(),s=n.queue;if(s===null)throw Error(i(311));s.lastRenderedReducer=e;var a=Fe,d=a.baseQueue,p=s.pending;if(p!==null){if(d!==null){var y=d.next;d.next=p.next,p.next=y}a.baseQueue=d=p,s.pending=null}if(d!==null){p=d.next,a=a.baseState;var k=y=null,C=null,L=p;do{var F=L.lane;if((Kn&F)===F)C!==null&&(C=C.next={lane:0,action:L.action,hasEagerState:L.hasEagerState,eagerState:L.eagerState,next:null}),a=L.hasEagerState?L.eagerState:e(a,L.action);else{var B={lane:F,action:L.action,hasEagerState:L.hasEagerState,eagerState:L.eagerState,next:null};C===null?(k=C=B,y=a):C=C.next=B,Pe.lanes|=F,Gn|=F}L=L.next}while(L!==null&&L!==p);C===null?y=a:C.next=k,Dt(a,n.memoizedState)||(ft=!0),n.memoizedState=a,n.baseState=y,n.baseQueue=C,s.lastRenderedState=a}if(e=s.interleaved,e!==null){d=e;do p=d.lane,Pe.lanes|=p,Gn|=p,d=d.next;while(d!==e)}else d===null&&(s.lanes=0);return[n.memoizedState,s.dispatch]}function kl(e){var n=Nt(),s=n.queue;if(s===null)throw Error(i(311));s.lastRenderedReducer=e;var a=s.dispatch,d=s.pending,p=n.memoizedState;if(d!==null){s.pending=null;var y=d=d.next;do p=e(p,y.action),y=y.next;while(y!==d);Dt(p,n.memoizedState)||(ft=!0),n.memoizedState=p,n.baseQueue===null&&(n.baseState=p),s.lastRenderedState=p}return[p,a]}function Pf(){}function Tf(e,n){var s=Pe,a=Nt(),d=n(),p=!Dt(a.memoizedState,d);if(p&&(a.memoizedState=d,ft=!0),a=a.queue,Sl(_f.bind(null,s,a,e),[e]),a.getSnapshot!==n||p||We!==null&&We.memoizedState.tag&1){if(s.flags|=2048,Ci(9,Af.bind(null,s,a,d,n),void 0,null),He===null)throw Error(i(349));(Kn&30)!==0||Rf(s,n,d)}return d}function Rf(e,n,s){e.flags|=16384,e={getSnapshot:n,value:s},n=Pe.updateQueue,n===null?(n={lastEffect:null,stores:null},Pe.updateQueue=n,n.stores=[e]):(s=n.stores,s===null?n.stores=[e]:s.push(e))}function Af(e,n,s,a){n.value=s,n.getSnapshot=a,Mf(n)&&Lf(e)}function _f(e,n,s){return s(function(){Mf(n)&&Lf(e)})}function Mf(e){var n=e.getSnapshot;e=e.value;try{var s=n();return!Dt(e,s)}catch{return!0}}function Lf(e){var n=sn(e,1);n!==null&&It(n,e,1,-1)}function Df(e){var n=Gt();return typeof e=="function"&&(e=e()),n.memoizedState=n.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ji,lastRenderedState:e},n.queue=e,e=e.dispatch=Sv.bind(null,Pe,e),[n.memoizedState,e]}function Ci(e,n,s,a){return e={tag:e,create:n,destroy:s,deps:a,next:null},n=Pe.updateQueue,n===null?(n={lastEffect:null,stores:null},Pe.updateQueue=n,n.lastEffect=e.next=e):(s=n.lastEffect,s===null?n.lastEffect=e.next=e:(a=s.next,s.next=e,e.next=a,n.lastEffect=e)),e}function zf(){return Nt().memoizedState}function Xs(e,n,s,a){var d=Gt();Pe.flags|=e,d.memoizedState=Ci(1|n,s,void 0,a===void 0?null:a)}function Qs(e,n,s,a){var d=Nt();a=a===void 0?null:a;var p=void 0;if(Fe!==null){var y=Fe.memoizedState;if(p=y.destroy,a!==null&&xl(a,y.deps)){d.memoizedState=Ci(n,s,p,a);return}}Pe.flags|=e,d.memoizedState=Ci(1|n,s,p,a)}function Vf(e,n){return Xs(8390656,8,e,n)}function Sl(e,n){return Qs(2048,8,e,n)}function Of(e,n){return Qs(4,2,e,n)}function Ff(e,n){return Qs(4,4,e,n)}function If(e,n){if(typeof n=="function")return e=e(),n(e),function(){n(null)};if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function Bf(e,n,s){return s=s!=null?s.concat([e]):null,Qs(4,4,If.bind(null,n,e),s)}function jl(){}function $f(e,n){var s=Nt();n=n===void 0?null:n;var a=s.memoizedState;return a!==null&&n!==null&&xl(n,a[1])?a[0]:(s.memoizedState=[e,n],e)}function Uf(e,n){var s=Nt();n=n===void 0?null:n;var a=s.memoizedState;return a!==null&&n!==null&&xl(n,a[1])?a[0]:(e=e(),s.memoizedState=[e,n],e)}function Wf(e,n,s){return(Kn&21)===0?(e.baseState&&(e.baseState=!1,ft=!0),e.memoizedState=s):(Dt(s,n)||(s=yd(),Pe.lanes|=s,Gn|=s,e.baseState=!0),n)}function bv(e,n){var s=ve;ve=s!==0&&4>s?s:4,e(!0);var a=vl.transition;vl.transition={};try{e(!1),n()}finally{ve=s,vl.transition=a}}function Hf(){return Nt().memoizedState}function kv(e,n,s){var a=Pn(e);if(s={lane:a,action:s,hasEagerState:!1,eagerState:null,next:null},Kf(e))Gf(n,s);else if(s=Sf(e,n,s,a),s!==null){var d=at();It(s,e,a,d),Yf(s,n,a)}}function Sv(e,n,s){var a=Pn(e),d={lane:a,action:s,hasEagerState:!1,eagerState:null,next:null};if(Kf(e))Gf(n,d);else{var p=e.alternate;if(e.lanes===0&&(p===null||p.lanes===0)&&(p=n.lastRenderedReducer,p!==null))try{var y=n.lastRenderedState,k=p(y,s);if(d.hasEagerState=!0,d.eagerState=k,Dt(k,y)){var C=n.interleaved;C===null?(d.next=d,dl(n)):(d.next=C.next,C.next=d),n.interleaved=d;return}}catch{}finally{}s=Sf(e,n,d,a),s!==null&&(d=at(),It(s,e,a,d),Yf(s,n,a))}}function Kf(e){var n=e.alternate;return e===Pe||n!==null&&n===Pe}function Gf(e,n){ki=Ys=!0;var s=e.pending;s===null?n.next=n:(n.next=s.next,s.next=n),e.pending=n}function Yf(e,n,s){if((s&4194240)!==0){var a=n.lanes;a&=e.pendingLanes,s|=a,n.lanes=s,Ea(e,s)}}var qs={readContext:Et,useCallback:et,useContext:et,useEffect:et,useImperativeHandle:et,useInsertionEffect:et,useLayoutEffect:et,useMemo:et,useReducer:et,useRef:et,useState:et,useDebugValue:et,useDeferredValue:et,useTransition:et,useMutableSource:et,useSyncExternalStore:et,useId:et,unstable_isNewReconciler:!1},jv={readContext:Et,useCallback:function(e,n){return Gt().memoizedState=[e,n===void 0?null:n],e},useContext:Et,useEffect:Vf,useImperativeHandle:function(e,n,s){return s=s!=null?s.concat([e]):null,Xs(4194308,4,If.bind(null,n,e),s)},useLayoutEffect:function(e,n){return Xs(4194308,4,e,n)},useInsertionEffect:function(e,n){return Xs(4,2,e,n)},useMemo:function(e,n){var s=Gt();return n=n===void 0?null:n,e=e(),s.memoizedState=[e,n],e},useReducer:function(e,n,s){var a=Gt();return n=s!==void 0?s(n):n,a.memoizedState=a.baseState=n,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:n},a.queue=e,e=e.dispatch=kv.bind(null,Pe,e),[a.memoizedState,e]},useRef:function(e){var n=Gt();return e={current:e},n.memoizedState=e},useState:Df,useDebugValue:jl,useDeferredValue:function(e){return Gt().memoizedState=e},useTransition:function(){var e=Df(!1),n=e[0];return e=bv.bind(null,e[1]),Gt().memoizedState=e,[n,e]},useMutableSource:function(){},useSyncExternalStore:function(e,n,s){var a=Pe,d=Gt();if(Ce){if(s===void 0)throw Error(i(407));s=s()}else{if(s=n(),He===null)throw Error(i(349));(Kn&30)!==0||Rf(a,n,s)}d.memoizedState=s;var p={value:s,getSnapshot:n};return d.queue=p,Vf(_f.bind(null,a,p,e),[e]),a.flags|=2048,Ci(9,Af.bind(null,a,p,s,n),void 0,null),s},useId:function(){var e=Gt(),n=He.identifierPrefix;if(Ce){var s=rn,a=nn;s=(a&~(1<<32-Lt(a)-1)).toString(32)+s,n=":"+n+"R"+s,s=Si++,0<s&&(n+="H"+s.toString(32)),n+=":"}else s=wv++,n=":"+n+"r"+s.toString(32)+":";return e.memoizedState=n},unstable_isNewReconciler:!1},Cv={readContext:Et,useCallback:$f,useContext:Et,useEffect:Sl,useImperativeHandle:Bf,useInsertionEffect:Of,useLayoutEffect:Ff,useMemo:Uf,useReducer:bl,useRef:zf,useState:function(){return bl(ji)},useDebugValue:jl,useDeferredValue:function(e){var n=Nt();return Wf(n,Fe.memoizedState,e)},useTransition:function(){var e=bl(ji)[0],n=Nt().memoizedState;return[e,n]},useMutableSource:Pf,useSyncExternalStore:Tf,useId:Hf,unstable_isNewReconciler:!1},Ev={readContext:Et,useCallback:$f,useContext:Et,useEffect:Sl,useImperativeHandle:Bf,useInsertionEffect:Of,useLayoutEffect:Ff,useMemo:Uf,useReducer:kl,useRef:zf,useState:function(){return kl(ji)},useDebugValue:jl,useDeferredValue:function(e){var n=Nt();return Fe===null?n.memoizedState=e:Wf(n,Fe.memoizedState,e)},useTransition:function(){var e=kl(ji)[0],n=Nt().memoizedState;return[e,n]},useMutableSource:Pf,useSyncExternalStore:Tf,useId:Hf,unstable_isNewReconciler:!1};function Vt(e,n){if(e&&e.defaultProps){n=H({},n),e=e.defaultProps;for(var s in e)n[s]===void 0&&(n[s]=e[s]);return n}return n}function Cl(e,n,s,a){n=e.memoizedState,s=s(a,n),s=s==null?n:H({},n,s),e.memoizedState=s,e.lanes===0&&(e.updateQueue.baseState=s)}var Zs={isMounted:function(e){return(e=e._reactInternals)?Fn(e)===e:!1},enqueueSetState:function(e,n,s){e=e._reactInternals;var a=at(),d=Pn(e),p=on(a,d);p.payload=n,s!=null&&(p.callback=s),n=jn(e,p,d),n!==null&&(It(n,e,d,a),Ws(n,e,d))},enqueueReplaceState:function(e,n,s){e=e._reactInternals;var a=at(),d=Pn(e),p=on(a,d);p.tag=1,p.payload=n,s!=null&&(p.callback=s),n=jn(e,p,d),n!==null&&(It(n,e,d,a),Ws(n,e,d))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var s=at(),a=Pn(e),d=on(s,a);d.tag=2,n!=null&&(d.callback=n),n=jn(e,d,a),n!==null&&(It(n,e,a,s),Ws(n,e,a))}};function Xf(e,n,s,a,d,p,y){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(a,p,y):n.prototype&&n.prototype.isPureReactComponent?!di(s,a)||!di(d,p):!0}function Qf(e,n,s){var a=!1,d=bn,p=n.contextType;return typeof p=="object"&&p!==null?p=Et(p):(d=dt(n)?Bn:Je.current,a=n.contextTypes,p=(a=a!=null)?yr(e,d):bn),n=new n(s,p),e.memoizedState=n.state!==null&&n.state!==void 0?n.state:null,n.updater=Zs,e.stateNode=n,n._reactInternals=e,a&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=d,e.__reactInternalMemoizedMaskedChildContext=p),n}function qf(e,n,s,a){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(s,a),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(s,a),n.state!==e&&Zs.enqueueReplaceState(n,n.state,null)}function El(e,n,s,a){var d=e.stateNode;d.props=s,d.state=e.memoizedState,d.refs={},fl(e);var p=n.contextType;typeof p=="object"&&p!==null?d.context=Et(p):(p=dt(n)?Bn:Je.current,d.context=yr(e,p)),d.state=e.memoizedState,p=n.getDerivedStateFromProps,typeof p=="function"&&(Cl(e,n,p,s),d.state=e.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof d.getSnapshotBeforeUpdate=="function"||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(n=d.state,typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount(),n!==d.state&&Zs.enqueueReplaceState(d,d.state,null),Hs(e,s,d,a),d.state=e.memoizedState),typeof d.componentDidMount=="function"&&(e.flags|=4194308)}function Nr(e,n){try{var s="",a=n;do s+=ce(a),a=a.return;while(a);var d=s}catch(p){d=`
Error generating stack: `+p.message+`
`+p.stack}return{value:e,source:n,stack:d,digest:null}}function Nl(e,n,s){return{value:e,source:null,stack:s??null,digest:n??null}}function Pl(e,n){try{console.error(n.value)}catch(s){setTimeout(function(){throw s})}}var Nv=typeof WeakMap=="function"?WeakMap:Map;function Zf(e,n,s){s=on(-1,s),s.tag=3,s.payload={element:null};var a=n.value;return s.callback=function(){so||(so=!0,Ul=a),Pl(e,n)},s}function Jf(e,n,s){s=on(-1,s),s.tag=3;var a=e.type.getDerivedStateFromError;if(typeof a=="function"){var d=n.value;s.payload=function(){return a(d)},s.callback=function(){Pl(e,n)}}var p=e.stateNode;return p!==null&&typeof p.componentDidCatch=="function"&&(s.callback=function(){Pl(e,n),typeof a!="function"&&(En===null?En=new Set([this]):En.add(this));var y=n.stack;this.componentDidCatch(n.value,{componentStack:y!==null?y:""})}),s}function ep(e,n,s){var a=e.pingCache;if(a===null){a=e.pingCache=new Nv;var d=new Set;a.set(n,d)}else d=a.get(n),d===void 0&&(d=new Set,a.set(n,d));d.has(s)||(d.add(s),e=Bv.bind(null,e,n,s),n.then(e,e))}function tp(e){do{var n;if((n=e.tag===13)&&(n=e.memoizedState,n=n!==null?n.dehydrated!==null:!0),n)return e;e=e.return}while(e!==null);return null}function np(e,n,s,a,d){return(e.mode&1)===0?(e===n?e.flags|=65536:(e.flags|=128,s.flags|=131072,s.flags&=-52805,s.tag===1&&(s.alternate===null?s.tag=17:(n=on(-1,1),n.tag=2,jn(s,n,1))),s.lanes|=1),e):(e.flags|=65536,e.lanes=d,e)}var Pv=z.ReactCurrentOwner,ft=!1;function ot(e,n,s,a){n.child=e===null?kf(n,null,s,a):Sr(n,e.child,s,a)}function rp(e,n,s,a,d){s=s.render;var p=n.ref;return Cr(n,d),a=yl(e,n,s,a,p,d),s=wl(),e!==null&&!ft?(n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~d,an(e,n,d)):(Ce&&s&&nl(n),n.flags|=1,ot(e,n,a,d),n.child)}function ip(e,n,s,a,d){if(e===null){var p=s.type;return typeof p=="function"&&!Ql(p)&&p.defaultProps===void 0&&s.compare===null&&s.defaultProps===void 0?(n.tag=15,n.type=p,sp(e,n,p,a,d)):(e=fo(s.type,null,a,n,n.mode,d),e.ref=n.ref,e.return=n,n.child=e)}if(p=e.child,(e.lanes&d)===0){var y=p.memoizedProps;if(s=s.compare,s=s!==null?s:di,s(y,a)&&e.ref===n.ref)return an(e,n,d)}return n.flags|=1,e=Rn(p,a),e.ref=n.ref,e.return=n,n.child=e}function sp(e,n,s,a,d){if(e!==null){var p=e.memoizedProps;if(di(p,a)&&e.ref===n.ref)if(ft=!1,n.pendingProps=a=p,(e.lanes&d)!==0)(e.flags&131072)!==0&&(ft=!0);else return n.lanes=e.lanes,an(e,n,d)}return Tl(e,n,s,a,d)}function op(e,n,s){var a=n.pendingProps,d=a.children,p=e!==null?e.memoizedState:null;if(a.mode==="hidden")if((n.mode&1)===0)n.memoizedState={baseLanes:0,cachePool:null,transitions:null},be(Tr,wt),wt|=s;else{if((s&1073741824)===0)return e=p!==null?p.baseLanes|s:s,n.lanes=n.childLanes=1073741824,n.memoizedState={baseLanes:e,cachePool:null,transitions:null},n.updateQueue=null,be(Tr,wt),wt|=e,null;n.memoizedState={baseLanes:0,cachePool:null,transitions:null},a=p!==null?p.baseLanes:s,be(Tr,wt),wt|=a}else p!==null?(a=p.baseLanes|s,n.memoizedState=null):a=s,be(Tr,wt),wt|=a;return ot(e,n,d,s),n.child}function ap(e,n){var s=n.ref;(e===null&&s!==null||e!==null&&e.ref!==s)&&(n.flags|=512,n.flags|=2097152)}function Tl(e,n,s,a,d){var p=dt(s)?Bn:Je.current;return p=yr(n,p),Cr(n,d),s=yl(e,n,s,a,p,d),a=wl(),e!==null&&!ft?(n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~d,an(e,n,d)):(Ce&&a&&nl(n),n.flags|=1,ot(e,n,s,d),n.child)}function lp(e,n,s,a,d){if(dt(s)){var p=!0;zs(n)}else p=!1;if(Cr(n,d),n.stateNode===null)eo(e,n),Qf(n,s,a),El(n,s,a,d),a=!0;else if(e===null){var y=n.stateNode,k=n.memoizedProps;y.props=k;var C=y.context,L=s.contextType;typeof L=="object"&&L!==null?L=Et(L):(L=dt(s)?Bn:Je.current,L=yr(n,L));var F=s.getDerivedStateFromProps,B=typeof F=="function"||typeof y.getSnapshotBeforeUpdate=="function";B||typeof y.UNSAFE_componentWillReceiveProps!="function"&&typeof y.componentWillReceiveProps!="function"||(k!==a||C!==L)&&qf(n,y,a,L),Sn=!1;var V=n.memoizedState;y.state=V,Hs(n,a,y,d),C=n.memoizedState,k!==a||V!==C||ct.current||Sn?(typeof F=="function"&&(Cl(n,s,F,a),C=n.memoizedState),(k=Sn||Xf(n,s,k,a,V,C,L))?(B||typeof y.UNSAFE_componentWillMount!="function"&&typeof y.componentWillMount!="function"||(typeof y.componentWillMount=="function"&&y.componentWillMount(),typeof y.UNSAFE_componentWillMount=="function"&&y.UNSAFE_componentWillMount()),typeof y.componentDidMount=="function"&&(n.flags|=4194308)):(typeof y.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=a,n.memoizedState=C),y.props=a,y.state=C,y.context=L,a=k):(typeof y.componentDidMount=="function"&&(n.flags|=4194308),a=!1)}else{y=n.stateNode,jf(e,n),k=n.memoizedProps,L=n.type===n.elementType?k:Vt(n.type,k),y.props=L,B=n.pendingProps,V=y.context,C=s.contextType,typeof C=="object"&&C!==null?C=Et(C):(C=dt(s)?Bn:Je.current,C=yr(n,C));var W=s.getDerivedStateFromProps;(F=typeof W=="function"||typeof y.getSnapshotBeforeUpdate=="function")||typeof y.UNSAFE_componentWillReceiveProps!="function"&&typeof y.componentWillReceiveProps!="function"||(k!==B||V!==C)&&qf(n,y,a,C),Sn=!1,V=n.memoizedState,y.state=V,Hs(n,a,y,d);var Y=n.memoizedState;k!==B||V!==Y||ct.current||Sn?(typeof W=="function"&&(Cl(n,s,W,a),Y=n.memoizedState),(L=Sn||Xf(n,s,L,a,V,Y,C)||!1)?(F||typeof y.UNSAFE_componentWillUpdate!="function"&&typeof y.componentWillUpdate!="function"||(typeof y.componentWillUpdate=="function"&&y.componentWillUpdate(a,Y,C),typeof y.UNSAFE_componentWillUpdate=="function"&&y.UNSAFE_componentWillUpdate(a,Y,C)),typeof y.componentDidUpdate=="function"&&(n.flags|=4),typeof y.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof y.componentDidUpdate!="function"||k===e.memoizedProps&&V===e.memoizedState||(n.flags|=4),typeof y.getSnapshotBeforeUpdate!="function"||k===e.memoizedProps&&V===e.memoizedState||(n.flags|=1024),n.memoizedProps=a,n.memoizedState=Y),y.props=a,y.state=Y,y.context=C,a=L):(typeof y.componentDidUpdate!="function"||k===e.memoizedProps&&V===e.memoizedState||(n.flags|=4),typeof y.getSnapshotBeforeUpdate!="function"||k===e.memoizedProps&&V===e.memoizedState||(n.flags|=1024),a=!1)}return Rl(e,n,s,a,p,d)}function Rl(e,n,s,a,d,p){ap(e,n);var y=(n.flags&128)!==0;if(!a&&!y)return d&&pf(n,s,!1),an(e,n,p);a=n.stateNode,Pv.current=n;var k=y&&typeof s.getDerivedStateFromError!="function"?null:a.render();return n.flags|=1,e!==null&&y?(n.child=Sr(n,e.child,null,p),n.child=Sr(n,null,k,p)):ot(e,n,k,p),n.memoizedState=a.state,d&&pf(n,s,!0),n.child}function up(e){var n=e.stateNode;n.pendingContext?df(e,n.pendingContext,n.pendingContext!==n.context):n.context&&df(e,n.context,!1),pl(e,n.containerInfo)}function cp(e,n,s,a,d){return kr(),ol(d),n.flags|=256,ot(e,n,s,a),n.child}var Al={dehydrated:null,treeContext:null,retryLane:0};function _l(e){return{baseLanes:e,cachePool:null,transitions:null}}function dp(e,n,s){var a=n.pendingProps,d=Ne.current,p=!1,y=(n.flags&128)!==0,k;if((k=y)||(k=e!==null&&e.memoizedState===null?!1:(d&2)!==0),k?(p=!0,n.flags&=-129):(e===null||e.memoizedState!==null)&&(d|=1),be(Ne,d&1),e===null)return sl(n),e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?((n.mode&1)===0?n.lanes=1:e.data==="$!"?n.lanes=8:n.lanes=1073741824,null):(y=a.children,e=a.fallback,p?(a=n.mode,p=n.child,y={mode:"hidden",children:y},(a&1)===0&&p!==null?(p.childLanes=0,p.pendingProps=y):p=po(y,a,0,null),e=qn(e,a,s,null),p.return=n,e.return=n,p.sibling=e,n.child=p,n.child.memoizedState=_l(s),n.memoizedState=Al,e):Ml(n,y));if(d=e.memoizedState,d!==null&&(k=d.dehydrated,k!==null))return Tv(e,n,y,a,k,d,s);if(p){p=a.fallback,y=n.mode,d=e.child,k=d.sibling;var C={mode:"hidden",children:a.children};return(y&1)===0&&n.child!==d?(a=n.child,a.childLanes=0,a.pendingProps=C,n.deletions=null):(a=Rn(d,C),a.subtreeFlags=d.subtreeFlags&14680064),k!==null?p=Rn(k,p):(p=qn(p,y,s,null),p.flags|=2),p.return=n,a.return=n,a.sibling=p,n.child=a,a=p,p=n.child,y=e.child.memoizedState,y=y===null?_l(s):{baseLanes:y.baseLanes|s,cachePool:null,transitions:y.transitions},p.memoizedState=y,p.childLanes=e.childLanes&~s,n.memoizedState=Al,a}return p=e.child,e=p.sibling,a=Rn(p,{mode:"visible",children:a.children}),(n.mode&1)===0&&(a.lanes=s),a.return=n,a.sibling=null,e!==null&&(s=n.deletions,s===null?(n.deletions=[e],n.flags|=16):s.push(e)),n.child=a,n.memoizedState=null,a}function Ml(e,n){return n=po({mode:"visible",children:n},e.mode,0,null),n.return=e,e.child=n}function Js(e,n,s,a){return a!==null&&ol(a),Sr(n,e.child,null,s),e=Ml(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function Tv(e,n,s,a,d,p,y){if(s)return n.flags&256?(n.flags&=-257,a=Nl(Error(i(422))),Js(e,n,y,a)):n.memoizedState!==null?(n.child=e.child,n.flags|=128,null):(p=a.fallback,d=n.mode,a=po({mode:"visible",children:a.children},d,0,null),p=qn(p,d,y,null),p.flags|=2,a.return=n,p.return=n,a.sibling=p,n.child=a,(n.mode&1)!==0&&Sr(n,e.child,null,y),n.child.memoizedState=_l(y),n.memoizedState=Al,p);if((n.mode&1)===0)return Js(e,n,y,null);if(d.data==="$!"){if(a=d.nextSibling&&d.nextSibling.dataset,a)var k=a.dgst;return a=k,p=Error(i(419)),a=Nl(p,a,void 0),Js(e,n,y,a)}if(k=(y&e.childLanes)!==0,ft||k){if(a=He,a!==null){switch(y&-y){case 4:d=2;break;case 16:d=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:d=32;break;case 536870912:d=268435456;break;default:d=0}d=(d&(a.suspendedLanes|y))!==0?0:d,d!==0&&d!==p.retryLane&&(p.retryLane=d,sn(e,d),It(a,e,d,-1))}return Xl(),a=Nl(Error(i(421))),Js(e,n,y,a)}return d.data==="$?"?(n.flags|=128,n.child=e.child,n=$v.bind(null,e),d._reactRetry=n,null):(e=p.treeContext,yt=yn(d.nextSibling),xt=n,Ce=!0,zt=null,e!==null&&(jt[Ct++]=nn,jt[Ct++]=rn,jt[Ct++]=$n,nn=e.id,rn=e.overflow,$n=n),n=Ml(n,a.children),n.flags|=4096,n)}function fp(e,n,s){e.lanes|=n;var a=e.alternate;a!==null&&(a.lanes|=n),cl(e.return,n,s)}function Ll(e,n,s,a,d){var p=e.memoizedState;p===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:a,tail:s,tailMode:d}:(p.isBackwards=n,p.rendering=null,p.renderingStartTime=0,p.last=a,p.tail=s,p.tailMode=d)}function pp(e,n,s){var a=n.pendingProps,d=a.revealOrder,p=a.tail;if(ot(e,n,a.children,s),a=Ne.current,(a&2)!==0)a=a&1|2,n.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&fp(e,s,n);else if(e.tag===19)fp(e,s,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break e;for(;e.sibling===null;){if(e.return===null||e.return===n)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}a&=1}if(be(Ne,a),(n.mode&1)===0)n.memoizedState=null;else switch(d){case"forwards":for(s=n.child,d=null;s!==null;)e=s.alternate,e!==null&&Ks(e)===null&&(d=s),s=s.sibling;s=d,s===null?(d=n.child,n.child=null):(d=s.sibling,s.sibling=null),Ll(n,!1,d,s,p);break;case"backwards":for(s=null,d=n.child,n.child=null;d!==null;){if(e=d.alternate,e!==null&&Ks(e)===null){n.child=d;break}e=d.sibling,d.sibling=s,s=d,d=e}Ll(n,!0,s,null,p);break;case"together":Ll(n,!1,null,null,void 0);break;default:n.memoizedState=null}return n.child}function eo(e,n){(n.mode&1)===0&&e!==null&&(e.alternate=null,n.alternate=null,n.flags|=2)}function an(e,n,s){if(e!==null&&(n.dependencies=e.dependencies),Gn|=n.lanes,(s&n.childLanes)===0)return null;if(e!==null&&n.child!==e.child)throw Error(i(153));if(n.child!==null){for(e=n.child,s=Rn(e,e.pendingProps),n.child=s,s.return=n;e.sibling!==null;)e=e.sibling,s=s.sibling=Rn(e,e.pendingProps),s.return=n;s.sibling=null}return n.child}function Rv(e,n,s){switch(n.tag){case 3:up(n),kr();break;case 5:Nf(n);break;case 1:dt(n.type)&&zs(n);break;case 4:pl(n,n.stateNode.containerInfo);break;case 10:var a=n.type._context,d=n.memoizedProps.value;be($s,a._currentValue),a._currentValue=d;break;case 13:if(a=n.memoizedState,a!==null)return a.dehydrated!==null?(be(Ne,Ne.current&1),n.flags|=128,null):(s&n.child.childLanes)!==0?dp(e,n,s):(be(Ne,Ne.current&1),e=an(e,n,s),e!==null?e.sibling:null);be(Ne,Ne.current&1);break;case 19:if(a=(s&n.childLanes)!==0,(e.flags&128)!==0){if(a)return pp(e,n,s);n.flags|=128}if(d=n.memoizedState,d!==null&&(d.rendering=null,d.tail=null,d.lastEffect=null),be(Ne,Ne.current),a)break;return null;case 22:case 23:return n.lanes=0,op(e,n,s)}return an(e,n,s)}var hp,Dl,mp,gp;hp=function(e,n){for(var s=n.child;s!==null;){if(s.tag===5||s.tag===6)e.appendChild(s.stateNode);else if(s.tag!==4&&s.child!==null){s.child.return=s,s=s.child;continue}if(s===n)break;for(;s.sibling===null;){if(s.return===null||s.return===n)return;s=s.return}s.sibling.return=s.return,s=s.sibling}},Dl=function(){},mp=function(e,n,s,a){var d=e.memoizedProps;if(d!==a){e=n.stateNode,Hn(Kt.current);var p=null;switch(s){case"input":d=ca(e,d),a=ca(e,a),p=[];break;case"select":d=H({},d,{value:void 0}),a=H({},a,{value:void 0}),p=[];break;case"textarea":d=pa(e,d),a=pa(e,a),p=[];break;default:typeof d.onClick!="function"&&typeof a.onClick=="function"&&(e.onclick=Ms)}ma(s,a);var y;s=null;for(L in d)if(!a.hasOwnProperty(L)&&d.hasOwnProperty(L)&&d[L]!=null)if(L==="style"){var k=d[L];for(y in k)k.hasOwnProperty(y)&&(s||(s={}),s[y]="")}else L!=="dangerouslySetInnerHTML"&&L!=="children"&&L!=="suppressContentEditableWarning"&&L!=="suppressHydrationWarning"&&L!=="autoFocus"&&(l.hasOwnProperty(L)?p||(p=[]):(p=p||[]).push(L,null));for(L in a){var C=a[L];if(k=d!=null?d[L]:void 0,a.hasOwnProperty(L)&&C!==k&&(C!=null||k!=null))if(L==="style")if(k){for(y in k)!k.hasOwnProperty(y)||C&&C.hasOwnProperty(y)||(s||(s={}),s[y]="");for(y in C)C.hasOwnProperty(y)&&k[y]!==C[y]&&(s||(s={}),s[y]=C[y])}else s||(p||(p=[]),p.push(L,s)),s=C;else L==="dangerouslySetInnerHTML"?(C=C?C.__html:void 0,k=k?k.__html:void 0,C!=null&&k!==C&&(p=p||[]).push(L,C)):L==="children"?typeof C!="string"&&typeof C!="number"||(p=p||[]).push(L,""+C):L!=="suppressContentEditableWarning"&&L!=="suppressHydrationWarning"&&(l.hasOwnProperty(L)?(C!=null&&L==="onScroll"&&ke("scroll",e),p||k===C||(p=[])):(p=p||[]).push(L,C))}s&&(p=p||[]).push("style",s);var L=p;(n.updateQueue=L)&&(n.flags|=4)}},gp=function(e,n,s,a){s!==a&&(n.flags|=4)};function Ei(e,n){if(!Ce)switch(e.tailMode){case"hidden":n=e.tail;for(var s=null;n!==null;)n.alternate!==null&&(s=n),n=n.sibling;s===null?e.tail=null:s.sibling=null;break;case"collapsed":s=e.tail;for(var a=null;s!==null;)s.alternate!==null&&(a=s),s=s.sibling;a===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:a.sibling=null}}function tt(e){var n=e.alternate!==null&&e.alternate.child===e.child,s=0,a=0;if(n)for(var d=e.child;d!==null;)s|=d.lanes|d.childLanes,a|=d.subtreeFlags&14680064,a|=d.flags&14680064,d.return=e,d=d.sibling;else for(d=e.child;d!==null;)s|=d.lanes|d.childLanes,a|=d.subtreeFlags,a|=d.flags,d.return=e,d=d.sibling;return e.subtreeFlags|=a,e.childLanes=s,n}function Av(e,n,s){var a=n.pendingProps;switch(rl(n),n.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return tt(n),null;case 1:return dt(n.type)&&Ds(),tt(n),null;case 3:return a=n.stateNode,Er(),Se(ct),Se(Je),gl(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(Is(n)?n.flags|=4:e===null||e.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,zt!==null&&(Kl(zt),zt=null))),Dl(e,n),tt(n),null;case 5:hl(n);var d=Hn(bi.current);if(s=n.type,e!==null&&n.stateNode!=null)mp(e,n,s,a,d),e.ref!==n.ref&&(n.flags|=512,n.flags|=2097152);else{if(!a){if(n.stateNode===null)throw Error(i(166));return tt(n),null}if(e=Hn(Kt.current),Is(n)){a=n.stateNode,s=n.type;var p=n.memoizedProps;switch(a[Ht]=n,a[gi]=p,e=(n.mode&1)!==0,s){case"dialog":ke("cancel",a),ke("close",a);break;case"iframe":case"object":case"embed":ke("load",a);break;case"video":case"audio":for(d=0;d<pi.length;d++)ke(pi[d],a);break;case"source":ke("error",a);break;case"img":case"image":case"link":ke("error",a),ke("load",a);break;case"details":ke("toggle",a);break;case"input":Xc(a,p),ke("invalid",a);break;case"select":a._wrapperState={wasMultiple:!!p.multiple},ke("invalid",a);break;case"textarea":Zc(a,p),ke("invalid",a)}ma(s,p),d=null;for(var y in p)if(p.hasOwnProperty(y)){var k=p[y];y==="children"?typeof k=="string"?a.textContent!==k&&(p.suppressHydrationWarning!==!0&&_s(a.textContent,k,e),d=["children",k]):typeof k=="number"&&a.textContent!==""+k&&(p.suppressHydrationWarning!==!0&&_s(a.textContent,k,e),d=["children",""+k]):l.hasOwnProperty(y)&&k!=null&&y==="onScroll"&&ke("scroll",a)}switch(s){case"input":us(a),qc(a,p,!0);break;case"textarea":us(a),ed(a);break;case"select":case"option":break;default:typeof p.onClick=="function"&&(a.onclick=Ms)}a=d,n.updateQueue=a,a!==null&&(n.flags|=4)}else{y=d.nodeType===9?d:d.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=td(s)),e==="http://www.w3.org/1999/xhtml"?s==="script"?(e=y.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof a.is=="string"?e=y.createElement(s,{is:a.is}):(e=y.createElement(s),s==="select"&&(y=e,a.multiple?y.multiple=!0:a.size&&(y.size=a.size))):e=y.createElementNS(e,s),e[Ht]=n,e[gi]=a,hp(e,n,!1,!1),n.stateNode=e;e:{switch(y=ga(s,a),s){case"dialog":ke("cancel",e),ke("close",e),d=a;break;case"iframe":case"object":case"embed":ke("load",e),d=a;break;case"video":case"audio":for(d=0;d<pi.length;d++)ke(pi[d],e);d=a;break;case"source":ke("error",e),d=a;break;case"img":case"image":case"link":ke("error",e),ke("load",e),d=a;break;case"details":ke("toggle",e),d=a;break;case"input":Xc(e,a),d=ca(e,a),ke("invalid",e);break;case"option":d=a;break;case"select":e._wrapperState={wasMultiple:!!a.multiple},d=H({},a,{value:void 0}),ke("invalid",e);break;case"textarea":Zc(e,a),d=pa(e,a),ke("invalid",e);break;default:d=a}ma(s,d),k=d;for(p in k)if(k.hasOwnProperty(p)){var C=k[p];p==="style"?id(e,C):p==="dangerouslySetInnerHTML"?(C=C?C.__html:void 0,C!=null&&nd(e,C)):p==="children"?typeof C=="string"?(s!=="textarea"||C!=="")&&Yr(e,C):typeof C=="number"&&Yr(e,""+C):p!=="suppressContentEditableWarning"&&p!=="suppressHydrationWarning"&&p!=="autoFocus"&&(l.hasOwnProperty(p)?C!=null&&p==="onScroll"&&ke("scroll",e):C!=null&&_(e,p,C,y))}switch(s){case"input":us(e),qc(e,a,!1);break;case"textarea":us(e),ed(e);break;case"option":a.value!=null&&e.setAttribute("value",""+ge(a.value));break;case"select":e.multiple=!!a.multiple,p=a.value,p!=null?ar(e,!!a.multiple,p,!1):a.defaultValue!=null&&ar(e,!!a.multiple,a.defaultValue,!0);break;default:typeof d.onClick=="function"&&(e.onclick=Ms)}switch(s){case"button":case"input":case"select":case"textarea":a=!!a.autoFocus;break e;case"img":a=!0;break e;default:a=!1}}a&&(n.flags|=4)}n.ref!==null&&(n.flags|=512,n.flags|=2097152)}return tt(n),null;case 6:if(e&&n.stateNode!=null)gp(e,n,e.memoizedProps,a);else{if(typeof a!="string"&&n.stateNode===null)throw Error(i(166));if(s=Hn(bi.current),Hn(Kt.current),Is(n)){if(a=n.stateNode,s=n.memoizedProps,a[Ht]=n,(p=a.nodeValue!==s)&&(e=xt,e!==null))switch(e.tag){case 3:_s(a.nodeValue,s,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&_s(a.nodeValue,s,(e.mode&1)!==0)}p&&(n.flags|=4)}else a=(s.nodeType===9?s:s.ownerDocument).createTextNode(a),a[Ht]=n,n.stateNode=a}return tt(n),null;case 13:if(Se(Ne),a=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(Ce&&yt!==null&&(n.mode&1)!==0&&(n.flags&128)===0)yf(),kr(),n.flags|=98560,p=!1;else if(p=Is(n),a!==null&&a.dehydrated!==null){if(e===null){if(!p)throw Error(i(318));if(p=n.memoizedState,p=p!==null?p.dehydrated:null,!p)throw Error(i(317));p[Ht]=n}else kr(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;tt(n),p=!1}else zt!==null&&(Kl(zt),zt=null),p=!0;if(!p)return n.flags&65536?n:null}return(n.flags&128)!==0?(n.lanes=s,n):(a=a!==null,a!==(e!==null&&e.memoizedState!==null)&&a&&(n.child.flags|=8192,(n.mode&1)!==0&&(e===null||(Ne.current&1)!==0?Ie===0&&(Ie=3):Xl())),n.updateQueue!==null&&(n.flags|=4),tt(n),null);case 4:return Er(),Dl(e,n),e===null&&hi(n.stateNode.containerInfo),tt(n),null;case 10:return ul(n.type._context),tt(n),null;case 17:return dt(n.type)&&Ds(),tt(n),null;case 19:if(Se(Ne),p=n.memoizedState,p===null)return tt(n),null;if(a=(n.flags&128)!==0,y=p.rendering,y===null)if(a)Ei(p,!1);else{if(Ie!==0||e!==null&&(e.flags&128)!==0)for(e=n.child;e!==null;){if(y=Ks(e),y!==null){for(n.flags|=128,Ei(p,!1),a=y.updateQueue,a!==null&&(n.updateQueue=a,n.flags|=4),n.subtreeFlags=0,a=s,s=n.child;s!==null;)p=s,e=a,p.flags&=14680066,y=p.alternate,y===null?(p.childLanes=0,p.lanes=e,p.child=null,p.subtreeFlags=0,p.memoizedProps=null,p.memoizedState=null,p.updateQueue=null,p.dependencies=null,p.stateNode=null):(p.childLanes=y.childLanes,p.lanes=y.lanes,p.child=y.child,p.subtreeFlags=0,p.deletions=null,p.memoizedProps=y.memoizedProps,p.memoizedState=y.memoizedState,p.updateQueue=y.updateQueue,p.type=y.type,e=y.dependencies,p.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),s=s.sibling;return be(Ne,Ne.current&1|2),n.child}e=e.sibling}p.tail!==null&&Le()>Rr&&(n.flags|=128,a=!0,Ei(p,!1),n.lanes=4194304)}else{if(!a)if(e=Ks(y),e!==null){if(n.flags|=128,a=!0,s=e.updateQueue,s!==null&&(n.updateQueue=s,n.flags|=4),Ei(p,!0),p.tail===null&&p.tailMode==="hidden"&&!y.alternate&&!Ce)return tt(n),null}else 2*Le()-p.renderingStartTime>Rr&&s!==1073741824&&(n.flags|=128,a=!0,Ei(p,!1),n.lanes=4194304);p.isBackwards?(y.sibling=n.child,n.child=y):(s=p.last,s!==null?s.sibling=y:n.child=y,p.last=y)}return p.tail!==null?(n=p.tail,p.rendering=n,p.tail=n.sibling,p.renderingStartTime=Le(),n.sibling=null,s=Ne.current,be(Ne,a?s&1|2:s&1),n):(tt(n),null);case 22:case 23:return Yl(),a=n.memoizedState!==null,e!==null&&e.memoizedState!==null!==a&&(n.flags|=8192),a&&(n.mode&1)!==0?(wt&1073741824)!==0&&(tt(n),n.subtreeFlags&6&&(n.flags|=8192)):tt(n),null;case 24:return null;case 25:return null}throw Error(i(156,n.tag))}function _v(e,n){switch(rl(n),n.tag){case 1:return dt(n.type)&&Ds(),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return Er(),Se(ct),Se(Je),gl(),e=n.flags,(e&65536)!==0&&(e&128)===0?(n.flags=e&-65537|128,n):null;case 5:return hl(n),null;case 13:if(Se(Ne),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(i(340));kr()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return Se(Ne),null;case 4:return Er(),null;case 10:return ul(n.type._context),null;case 22:case 23:return Yl(),null;case 24:return null;default:return null}}var to=!1,nt=!1,Mv=typeof WeakSet=="function"?WeakSet:Set,K=null;function Pr(e,n){var s=e.ref;if(s!==null)if(typeof s=="function")try{s(null)}catch(a){Ae(e,n,a)}else s.current=null}function zl(e,n,s){try{s()}catch(a){Ae(e,n,a)}}var vp=!1;function Lv(e,n){if(Ya=bs,e=Yd(),Ia(e)){if("selectionStart"in e)var s={start:e.selectionStart,end:e.selectionEnd};else e:{s=(s=e.ownerDocument)&&s.defaultView||window;var a=s.getSelection&&s.getSelection();if(a&&a.rangeCount!==0){s=a.anchorNode;var d=a.anchorOffset,p=a.focusNode;a=a.focusOffset;try{s.nodeType,p.nodeType}catch{s=null;break e}var y=0,k=-1,C=-1,L=0,F=0,B=e,V=null;t:for(;;){for(var W;B!==s||d!==0&&B.nodeType!==3||(k=y+d),B!==p||a!==0&&B.nodeType!==3||(C=y+a),B.nodeType===3&&(y+=B.nodeValue.length),(W=B.firstChild)!==null;)V=B,B=W;for(;;){if(B===e)break t;if(V===s&&++L===d&&(k=y),V===p&&++F===a&&(C=y),(W=B.nextSibling)!==null)break;B=V,V=B.parentNode}B=W}s=k===-1||C===-1?null:{start:k,end:C}}else s=null}s=s||{start:0,end:0}}else s=null;for(Xa={focusedElem:e,selectionRange:s},bs=!1,K=n;K!==null;)if(n=K,e=n.child,(n.subtreeFlags&1028)!==0&&e!==null)e.return=n,K=e;else for(;K!==null;){n=K;try{var Y=n.alternate;if((n.flags&1024)!==0)switch(n.tag){case 0:case 11:case 15:break;case 1:if(Y!==null){var X=Y.memoizedProps,De=Y.memoizedState,R=n.stateNode,P=R.getSnapshotBeforeUpdate(n.elementType===n.type?X:Vt(n.type,X),De);R.__reactInternalSnapshotBeforeUpdate=P}break;case 3:var M=n.stateNode.containerInfo;M.nodeType===1?M.textContent="":M.nodeType===9&&M.documentElement&&M.removeChild(M.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(i(163))}}catch($){Ae(n,n.return,$)}if(e=n.sibling,e!==null){e.return=n.return,K=e;break}K=n.return}return Y=vp,vp=!1,Y}function Ni(e,n,s){var a=n.updateQueue;if(a=a!==null?a.lastEffect:null,a!==null){var d=a=a.next;do{if((d.tag&e)===e){var p=d.destroy;d.destroy=void 0,p!==void 0&&zl(n,s,p)}d=d.next}while(d!==a)}}function no(e,n){if(n=n.updateQueue,n=n!==null?n.lastEffect:null,n!==null){var s=n=n.next;do{if((s.tag&e)===e){var a=s.create;s.destroy=a()}s=s.next}while(s!==n)}}function Vl(e){var n=e.ref;if(n!==null){var s=e.stateNode;switch(e.tag){case 5:e=s;break;default:e=s}typeof n=="function"?n(e):n.current=e}}function xp(e){var n=e.alternate;n!==null&&(e.alternate=null,xp(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&(delete n[Ht],delete n[gi],delete n[Ja],delete n[gv],delete n[vv])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function yp(e){return e.tag===5||e.tag===3||e.tag===4}function wp(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||yp(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Ol(e,n,s){var a=e.tag;if(a===5||a===6)e=e.stateNode,n?s.nodeType===8?s.parentNode.insertBefore(e,n):s.insertBefore(e,n):(s.nodeType===8?(n=s.parentNode,n.insertBefore(e,s)):(n=s,n.appendChild(e)),s=s._reactRootContainer,s!=null||n.onclick!==null||(n.onclick=Ms));else if(a!==4&&(e=e.child,e!==null))for(Ol(e,n,s),e=e.sibling;e!==null;)Ol(e,n,s),e=e.sibling}function Fl(e,n,s){var a=e.tag;if(a===5||a===6)e=e.stateNode,n?s.insertBefore(e,n):s.appendChild(e);else if(a!==4&&(e=e.child,e!==null))for(Fl(e,n,s),e=e.sibling;e!==null;)Fl(e,n,s),e=e.sibling}var Qe=null,Ot=!1;function Cn(e,n,s){for(s=s.child;s!==null;)bp(e,n,s),s=s.sibling}function bp(e,n,s){if(Wt&&typeof Wt.onCommitFiberUnmount=="function")try{Wt.onCommitFiberUnmount(ms,s)}catch{}switch(s.tag){case 5:nt||Pr(s,n);case 6:var a=Qe,d=Ot;Qe=null,Cn(e,n,s),Qe=a,Ot=d,Qe!==null&&(Ot?(e=Qe,s=s.stateNode,e.nodeType===8?e.parentNode.removeChild(s):e.removeChild(s)):Qe.removeChild(s.stateNode));break;case 18:Qe!==null&&(Ot?(e=Qe,s=s.stateNode,e.nodeType===8?Za(e.parentNode,s):e.nodeType===1&&Za(e,s),si(e)):Za(Qe,s.stateNode));break;case 4:a=Qe,d=Ot,Qe=s.stateNode.containerInfo,Ot=!0,Cn(e,n,s),Qe=a,Ot=d;break;case 0:case 11:case 14:case 15:if(!nt&&(a=s.updateQueue,a!==null&&(a=a.lastEffect,a!==null))){d=a=a.next;do{var p=d,y=p.destroy;p=p.tag,y!==void 0&&((p&2)!==0||(p&4)!==0)&&zl(s,n,y),d=d.next}while(d!==a)}Cn(e,n,s);break;case 1:if(!nt&&(Pr(s,n),a=s.stateNode,typeof a.componentWillUnmount=="function"))try{a.props=s.memoizedProps,a.state=s.memoizedState,a.componentWillUnmount()}catch(k){Ae(s,n,k)}Cn(e,n,s);break;case 21:Cn(e,n,s);break;case 22:s.mode&1?(nt=(a=nt)||s.memoizedState!==null,Cn(e,n,s),nt=a):Cn(e,n,s);break;default:Cn(e,n,s)}}function kp(e){var n=e.updateQueue;if(n!==null){e.updateQueue=null;var s=e.stateNode;s===null&&(s=e.stateNode=new Mv),n.forEach(function(a){var d=Uv.bind(null,e,a);s.has(a)||(s.add(a),a.then(d,d))})}}function Ft(e,n){var s=n.deletions;if(s!==null)for(var a=0;a<s.length;a++){var d=s[a];try{var p=e,y=n,k=y;e:for(;k!==null;){switch(k.tag){case 5:Qe=k.stateNode,Ot=!1;break e;case 3:Qe=k.stateNode.containerInfo,Ot=!0;break e;case 4:Qe=k.stateNode.containerInfo,Ot=!0;break e}k=k.return}if(Qe===null)throw Error(i(160));bp(p,y,d),Qe=null,Ot=!1;var C=d.alternate;C!==null&&(C.return=null),d.return=null}catch(L){Ae(d,n,L)}}if(n.subtreeFlags&12854)for(n=n.child;n!==null;)Sp(n,e),n=n.sibling}function Sp(e,n){var s=e.alternate,a=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Ft(n,e),Yt(e),a&4){try{Ni(3,e,e.return),no(3,e)}catch(X){Ae(e,e.return,X)}try{Ni(5,e,e.return)}catch(X){Ae(e,e.return,X)}}break;case 1:Ft(n,e),Yt(e),a&512&&s!==null&&Pr(s,s.return);break;case 5:if(Ft(n,e),Yt(e),a&512&&s!==null&&Pr(s,s.return),e.flags&32){var d=e.stateNode;try{Yr(d,"")}catch(X){Ae(e,e.return,X)}}if(a&4&&(d=e.stateNode,d!=null)){var p=e.memoizedProps,y=s!==null?s.memoizedProps:p,k=e.type,C=e.updateQueue;if(e.updateQueue=null,C!==null)try{k==="input"&&p.type==="radio"&&p.name!=null&&Qc(d,p),ga(k,y);var L=ga(k,p);for(y=0;y<C.length;y+=2){var F=C[y],B=C[y+1];F==="style"?id(d,B):F==="dangerouslySetInnerHTML"?nd(d,B):F==="children"?Yr(d,B):_(d,F,B,L)}switch(k){case"input":da(d,p);break;case"textarea":Jc(d,p);break;case"select":var V=d._wrapperState.wasMultiple;d._wrapperState.wasMultiple=!!p.multiple;var W=p.value;W!=null?ar(d,!!p.multiple,W,!1):V!==!!p.multiple&&(p.defaultValue!=null?ar(d,!!p.multiple,p.defaultValue,!0):ar(d,!!p.multiple,p.multiple?[]:"",!1))}d[gi]=p}catch(X){Ae(e,e.return,X)}}break;case 6:if(Ft(n,e),Yt(e),a&4){if(e.stateNode===null)throw Error(i(162));d=e.stateNode,p=e.memoizedProps;try{d.nodeValue=p}catch(X){Ae(e,e.return,X)}}break;case 3:if(Ft(n,e),Yt(e),a&4&&s!==null&&s.memoizedState.isDehydrated)try{si(n.containerInfo)}catch(X){Ae(e,e.return,X)}break;case 4:Ft(n,e),Yt(e);break;case 13:Ft(n,e),Yt(e),d=e.child,d.flags&8192&&(p=d.memoizedState!==null,d.stateNode.isHidden=p,!p||d.alternate!==null&&d.alternate.memoizedState!==null||($l=Le())),a&4&&kp(e);break;case 22:if(F=s!==null&&s.memoizedState!==null,e.mode&1?(nt=(L=nt)||F,Ft(n,e),nt=L):Ft(n,e),Yt(e),a&8192){if(L=e.memoizedState!==null,(e.stateNode.isHidden=L)&&!F&&(e.mode&1)!==0)for(K=e,F=e.child;F!==null;){for(B=K=F;K!==null;){switch(V=K,W=V.child,V.tag){case 0:case 11:case 14:case 15:Ni(4,V,V.return);break;case 1:Pr(V,V.return);var Y=V.stateNode;if(typeof Y.componentWillUnmount=="function"){a=V,s=V.return;try{n=a,Y.props=n.memoizedProps,Y.state=n.memoizedState,Y.componentWillUnmount()}catch(X){Ae(a,s,X)}}break;case 5:Pr(V,V.return);break;case 22:if(V.memoizedState!==null){Ep(B);continue}}W!==null?(W.return=V,K=W):Ep(B)}F=F.sibling}e:for(F=null,B=e;;){if(B.tag===5){if(F===null){F=B;try{d=B.stateNode,L?(p=d.style,typeof p.setProperty=="function"?p.setProperty("display","none","important"):p.display="none"):(k=B.stateNode,C=B.memoizedProps.style,y=C!=null&&C.hasOwnProperty("display")?C.display:null,k.style.display=rd("display",y))}catch(X){Ae(e,e.return,X)}}}else if(B.tag===6){if(F===null)try{B.stateNode.nodeValue=L?"":B.memoizedProps}catch(X){Ae(e,e.return,X)}}else if((B.tag!==22&&B.tag!==23||B.memoizedState===null||B===e)&&B.child!==null){B.child.return=B,B=B.child;continue}if(B===e)break e;for(;B.sibling===null;){if(B.return===null||B.return===e)break e;F===B&&(F=null),B=B.return}F===B&&(F=null),B.sibling.return=B.return,B=B.sibling}}break;case 19:Ft(n,e),Yt(e),a&4&&kp(e);break;case 21:break;default:Ft(n,e),Yt(e)}}function Yt(e){var n=e.flags;if(n&2){try{e:{for(var s=e.return;s!==null;){if(yp(s)){var a=s;break e}s=s.return}throw Error(i(160))}switch(a.tag){case 5:var d=a.stateNode;a.flags&32&&(Yr(d,""),a.flags&=-33);var p=wp(e);Fl(e,p,d);break;case 3:case 4:var y=a.stateNode.containerInfo,k=wp(e);Ol(e,k,y);break;default:throw Error(i(161))}}catch(C){Ae(e,e.return,C)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function Dv(e,n,s){K=e,jp(e)}function jp(e,n,s){for(var a=(e.mode&1)!==0;K!==null;){var d=K,p=d.child;if(d.tag===22&&a){var y=d.memoizedState!==null||to;if(!y){var k=d.alternate,C=k!==null&&k.memoizedState!==null||nt;k=to;var L=nt;if(to=y,(nt=C)&&!L)for(K=d;K!==null;)y=K,C=y.child,y.tag===22&&y.memoizedState!==null?Np(d):C!==null?(C.return=y,K=C):Np(d);for(;p!==null;)K=p,jp(p),p=p.sibling;K=d,to=k,nt=L}Cp(e)}else(d.subtreeFlags&8772)!==0&&p!==null?(p.return=d,K=p):Cp(e)}}function Cp(e){for(;K!==null;){var n=K;if((n.flags&8772)!==0){var s=n.alternate;try{if((n.flags&8772)!==0)switch(n.tag){case 0:case 11:case 15:nt||no(5,n);break;case 1:var a=n.stateNode;if(n.flags&4&&!nt)if(s===null)a.componentDidMount();else{var d=n.elementType===n.type?s.memoizedProps:Vt(n.type,s.memoizedProps);a.componentDidUpdate(d,s.memoizedState,a.__reactInternalSnapshotBeforeUpdate)}var p=n.updateQueue;p!==null&&Ef(n,p,a);break;case 3:var y=n.updateQueue;if(y!==null){if(s=null,n.child!==null)switch(n.child.tag){case 5:s=n.child.stateNode;break;case 1:s=n.child.stateNode}Ef(n,y,s)}break;case 5:var k=n.stateNode;if(s===null&&n.flags&4){s=k;var C=n.memoizedProps;switch(n.type){case"button":case"input":case"select":case"textarea":C.autoFocus&&s.focus();break;case"img":C.src&&(s.src=C.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(n.memoizedState===null){var L=n.alternate;if(L!==null){var F=L.memoizedState;if(F!==null){var B=F.dehydrated;B!==null&&si(B)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(i(163))}nt||n.flags&512&&Vl(n)}catch(V){Ae(n,n.return,V)}}if(n===e){K=null;break}if(s=n.sibling,s!==null){s.return=n.return,K=s;break}K=n.return}}function Ep(e){for(;K!==null;){var n=K;if(n===e){K=null;break}var s=n.sibling;if(s!==null){s.return=n.return,K=s;break}K=n.return}}function Np(e){for(;K!==null;){var n=K;try{switch(n.tag){case 0:case 11:case 15:var s=n.return;try{no(4,n)}catch(C){Ae(n,s,C)}break;case 1:var a=n.stateNode;if(typeof a.componentDidMount=="function"){var d=n.return;try{a.componentDidMount()}catch(C){Ae(n,d,C)}}var p=n.return;try{Vl(n)}catch(C){Ae(n,p,C)}break;case 5:var y=n.return;try{Vl(n)}catch(C){Ae(n,y,C)}}}catch(C){Ae(n,n.return,C)}if(n===e){K=null;break}var k=n.sibling;if(k!==null){k.return=n.return,K=k;break}K=n.return}}var zv=Math.ceil,ro=z.ReactCurrentDispatcher,Il=z.ReactCurrentOwner,Pt=z.ReactCurrentBatchConfig,ue=0,He=null,Oe=null,qe=0,wt=0,Tr=wn(0),Ie=0,Pi=null,Gn=0,io=0,Bl=0,Ti=null,pt=null,$l=0,Rr=1/0,ln=null,so=!1,Ul=null,En=null,oo=!1,Nn=null,ao=0,Ri=0,Wl=null,lo=-1,uo=0;function at(){return(ue&6)!==0?Le():lo!==-1?lo:lo=Le()}function Pn(e){return(e.mode&1)===0?1:(ue&2)!==0&&qe!==0?qe&-qe:yv.transition!==null?(uo===0&&(uo=yd()),uo):(e=ve,e!==0||(e=window.event,e=e===void 0?16:Pd(e.type)),e)}function It(e,n,s,a){if(50<Ri)throw Ri=0,Wl=null,Error(i(185));ei(e,s,a),((ue&2)===0||e!==He)&&(e===He&&((ue&2)===0&&(io|=s),Ie===4&&Tn(e,qe)),ht(e,a),s===1&&ue===0&&(n.mode&1)===0&&(Rr=Le()+500,Vs&&kn()))}function ht(e,n){var s=e.callbackNode;y1(e,n);var a=xs(e,e===He?qe:0);if(a===0)s!==null&&gd(s),e.callbackNode=null,e.callbackPriority=0;else if(n=a&-a,e.callbackPriority!==n){if(s!=null&&gd(s),n===1)e.tag===0?xv(Tp.bind(null,e)):hf(Tp.bind(null,e)),hv(function(){(ue&6)===0&&kn()}),s=null;else{switch(wd(a)){case 1:s=Sa;break;case 4:s=vd;break;case 16:s=hs;break;case 536870912:s=xd;break;default:s=hs}s=Vp(s,Pp.bind(null,e))}e.callbackPriority=n,e.callbackNode=s}}function Pp(e,n){if(lo=-1,uo=0,(ue&6)!==0)throw Error(i(327));var s=e.callbackNode;if(Ar()&&e.callbackNode!==s)return null;var a=xs(e,e===He?qe:0);if(a===0)return null;if((a&30)!==0||(a&e.expiredLanes)!==0||n)n=co(e,a);else{n=a;var d=ue;ue|=2;var p=Ap();(He!==e||qe!==n)&&(ln=null,Rr=Le()+500,Xn(e,n));do try{Fv();break}catch(k){Rp(e,k)}while(!0);ll(),ro.current=p,ue=d,Oe!==null?n=0:(He=null,qe=0,n=Ie)}if(n!==0){if(n===2&&(d=ja(e),d!==0&&(a=d,n=Hl(e,d))),n===1)throw s=Pi,Xn(e,0),Tn(e,a),ht(e,Le()),s;if(n===6)Tn(e,a);else{if(d=e.current.alternate,(a&30)===0&&!Vv(d)&&(n=co(e,a),n===2&&(p=ja(e),p!==0&&(a=p,n=Hl(e,p))),n===1))throw s=Pi,Xn(e,0),Tn(e,a),ht(e,Le()),s;switch(e.finishedWork=d,e.finishedLanes=a,n){case 0:case 1:throw Error(i(345));case 2:Qn(e,pt,ln);break;case 3:if(Tn(e,a),(a&130023424)===a&&(n=$l+500-Le(),10<n)){if(xs(e,0)!==0)break;if(d=e.suspendedLanes,(d&a)!==a){at(),e.pingedLanes|=e.suspendedLanes&d;break}e.timeoutHandle=qa(Qn.bind(null,e,pt,ln),n);break}Qn(e,pt,ln);break;case 4:if(Tn(e,a),(a&4194240)===a)break;for(n=e.eventTimes,d=-1;0<a;){var y=31-Lt(a);p=1<<y,y=n[y],y>d&&(d=y),a&=~p}if(a=d,a=Le()-a,a=(120>a?120:480>a?480:1080>a?1080:1920>a?1920:3e3>a?3e3:4320>a?4320:1960*zv(a/1960))-a,10<a){e.timeoutHandle=qa(Qn.bind(null,e,pt,ln),a);break}Qn(e,pt,ln);break;case 5:Qn(e,pt,ln);break;default:throw Error(i(329))}}}return ht(e,Le()),e.callbackNode===s?Pp.bind(null,e):null}function Hl(e,n){var s=Ti;return e.current.memoizedState.isDehydrated&&(Xn(e,n).flags|=256),e=co(e,n),e!==2&&(n=pt,pt=s,n!==null&&Kl(n)),e}function Kl(e){pt===null?pt=e:pt.push.apply(pt,e)}function Vv(e){for(var n=e;;){if(n.flags&16384){var s=n.updateQueue;if(s!==null&&(s=s.stores,s!==null))for(var a=0;a<s.length;a++){var d=s[a],p=d.getSnapshot;d=d.value;try{if(!Dt(p(),d))return!1}catch{return!1}}}if(s=n.child,n.subtreeFlags&16384&&s!==null)s.return=n,n=s;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function Tn(e,n){for(n&=~Bl,n&=~io,e.suspendedLanes|=n,e.pingedLanes&=~n,e=e.expirationTimes;0<n;){var s=31-Lt(n),a=1<<s;e[s]=-1,n&=~a}}function Tp(e){if((ue&6)!==0)throw Error(i(327));Ar();var n=xs(e,0);if((n&1)===0)return ht(e,Le()),null;var s=co(e,n);if(e.tag!==0&&s===2){var a=ja(e);a!==0&&(n=a,s=Hl(e,a))}if(s===1)throw s=Pi,Xn(e,0),Tn(e,n),ht(e,Le()),s;if(s===6)throw Error(i(345));return e.finishedWork=e.current.alternate,e.finishedLanes=n,Qn(e,pt,ln),ht(e,Le()),null}function Gl(e,n){var s=ue;ue|=1;try{return e(n)}finally{ue=s,ue===0&&(Rr=Le()+500,Vs&&kn())}}function Yn(e){Nn!==null&&Nn.tag===0&&(ue&6)===0&&Ar();var n=ue;ue|=1;var s=Pt.transition,a=ve;try{if(Pt.transition=null,ve=1,e)return e()}finally{ve=a,Pt.transition=s,ue=n,(ue&6)===0&&kn()}}function Yl(){wt=Tr.current,Se(Tr)}function Xn(e,n){e.finishedWork=null,e.finishedLanes=0;var s=e.timeoutHandle;if(s!==-1&&(e.timeoutHandle=-1,pv(s)),Oe!==null)for(s=Oe.return;s!==null;){var a=s;switch(rl(a),a.tag){case 1:a=a.type.childContextTypes,a!=null&&Ds();break;case 3:Er(),Se(ct),Se(Je),gl();break;case 5:hl(a);break;case 4:Er();break;case 13:Se(Ne);break;case 19:Se(Ne);break;case 10:ul(a.type._context);break;case 22:case 23:Yl()}s=s.return}if(He=e,Oe=e=Rn(e.current,null),qe=wt=n,Ie=0,Pi=null,Bl=io=Gn=0,pt=Ti=null,Wn!==null){for(n=0;n<Wn.length;n++)if(s=Wn[n],a=s.interleaved,a!==null){s.interleaved=null;var d=a.next,p=s.pending;if(p!==null){var y=p.next;p.next=d,a.next=y}s.pending=a}Wn=null}return e}function Rp(e,n){do{var s=Oe;try{if(ll(),Gs.current=qs,Ys){for(var a=Pe.memoizedState;a!==null;){var d=a.queue;d!==null&&(d.pending=null),a=a.next}Ys=!1}if(Kn=0,We=Fe=Pe=null,ki=!1,Si=0,Il.current=null,s===null||s.return===null){Ie=1,Pi=n,Oe=null;break}e:{var p=e,y=s.return,k=s,C=n;if(n=qe,k.flags|=32768,C!==null&&typeof C=="object"&&typeof C.then=="function"){var L=C,F=k,B=F.tag;if((F.mode&1)===0&&(B===0||B===11||B===15)){var V=F.alternate;V?(F.updateQueue=V.updateQueue,F.memoizedState=V.memoizedState,F.lanes=V.lanes):(F.updateQueue=null,F.memoizedState=null)}var W=tp(y);if(W!==null){W.flags&=-257,np(W,y,k,p,n),W.mode&1&&ep(p,L,n),n=W,C=L;var Y=n.updateQueue;if(Y===null){var X=new Set;X.add(C),n.updateQueue=X}else Y.add(C);break e}else{if((n&1)===0){ep(p,L,n),Xl();break e}C=Error(i(426))}}else if(Ce&&k.mode&1){var De=tp(y);if(De!==null){(De.flags&65536)===0&&(De.flags|=256),np(De,y,k,p,n),ol(Nr(C,k));break e}}p=C=Nr(C,k),Ie!==4&&(Ie=2),Ti===null?Ti=[p]:Ti.push(p),p=y;do{switch(p.tag){case 3:p.flags|=65536,n&=-n,p.lanes|=n;var R=Zf(p,C,n);Cf(p,R);break e;case 1:k=C;var P=p.type,M=p.stateNode;if((p.flags&128)===0&&(typeof P.getDerivedStateFromError=="function"||M!==null&&typeof M.componentDidCatch=="function"&&(En===null||!En.has(M)))){p.flags|=65536,n&=-n,p.lanes|=n;var $=Jf(p,k,n);Cf(p,$);break e}}p=p.return}while(p!==null)}Mp(s)}catch(q){n=q,Oe===s&&s!==null&&(Oe=s=s.return);continue}break}while(!0)}function Ap(){var e=ro.current;return ro.current=qs,e===null?qs:e}function Xl(){(Ie===0||Ie===3||Ie===2)&&(Ie=4),He===null||(Gn&268435455)===0&&(io&268435455)===0||Tn(He,qe)}function co(e,n){var s=ue;ue|=2;var a=Ap();(He!==e||qe!==n)&&(ln=null,Xn(e,n));do try{Ov();break}catch(d){Rp(e,d)}while(!0);if(ll(),ue=s,ro.current=a,Oe!==null)throw Error(i(261));return He=null,qe=0,Ie}function Ov(){for(;Oe!==null;)_p(Oe)}function Fv(){for(;Oe!==null&&!c1();)_p(Oe)}function _p(e){var n=zp(e.alternate,e,wt);e.memoizedProps=e.pendingProps,n===null?Mp(e):Oe=n,Il.current=null}function Mp(e){var n=e;do{var s=n.alternate;if(e=n.return,(n.flags&32768)===0){if(s=Av(s,n,wt),s!==null){Oe=s;return}}else{if(s=_v(s,n),s!==null){s.flags&=32767,Oe=s;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Ie=6,Oe=null;return}}if(n=n.sibling,n!==null){Oe=n;return}Oe=n=e}while(n!==null);Ie===0&&(Ie=5)}function Qn(e,n,s){var a=ve,d=Pt.transition;try{Pt.transition=null,ve=1,Iv(e,n,s,a)}finally{Pt.transition=d,ve=a}return null}function Iv(e,n,s,a){do Ar();while(Nn!==null);if((ue&6)!==0)throw Error(i(327));s=e.finishedWork;var d=e.finishedLanes;if(s===null)return null;if(e.finishedWork=null,e.finishedLanes=0,s===e.current)throw Error(i(177));e.callbackNode=null,e.callbackPriority=0;var p=s.lanes|s.childLanes;if(w1(e,p),e===He&&(Oe=He=null,qe=0),(s.subtreeFlags&2064)===0&&(s.flags&2064)===0||oo||(oo=!0,Vp(hs,function(){return Ar(),null})),p=(s.flags&15990)!==0,(s.subtreeFlags&15990)!==0||p){p=Pt.transition,Pt.transition=null;var y=ve;ve=1;var k=ue;ue|=4,Il.current=null,Lv(e,s),Sp(s,e),ov(Xa),bs=!!Ya,Xa=Ya=null,e.current=s,Dv(s),d1(),ue=k,ve=y,Pt.transition=p}else e.current=s;if(oo&&(oo=!1,Nn=e,ao=d),p=e.pendingLanes,p===0&&(En=null),h1(s.stateNode),ht(e,Le()),n!==null)for(a=e.onRecoverableError,s=0;s<n.length;s++)d=n[s],a(d.value,{componentStack:d.stack,digest:d.digest});if(so)throw so=!1,e=Ul,Ul=null,e;return(ao&1)!==0&&e.tag!==0&&Ar(),p=e.pendingLanes,(p&1)!==0?e===Wl?Ri++:(Ri=0,Wl=e):Ri=0,kn(),null}function Ar(){if(Nn!==null){var e=wd(ao),n=Pt.transition,s=ve;try{if(Pt.transition=null,ve=16>e?16:e,Nn===null)var a=!1;else{if(e=Nn,Nn=null,ao=0,(ue&6)!==0)throw Error(i(331));var d=ue;for(ue|=4,K=e.current;K!==null;){var p=K,y=p.child;if((K.flags&16)!==0){var k=p.deletions;if(k!==null){for(var C=0;C<k.length;C++){var L=k[C];for(K=L;K!==null;){var F=K;switch(F.tag){case 0:case 11:case 15:Ni(8,F,p)}var B=F.child;if(B!==null)B.return=F,K=B;else for(;K!==null;){F=K;var V=F.sibling,W=F.return;if(xp(F),F===L){K=null;break}if(V!==null){V.return=W,K=V;break}K=W}}}var Y=p.alternate;if(Y!==null){var X=Y.child;if(X!==null){Y.child=null;do{var De=X.sibling;X.sibling=null,X=De}while(X!==null)}}K=p}}if((p.subtreeFlags&2064)!==0&&y!==null)y.return=p,K=y;else e:for(;K!==null;){if(p=K,(p.flags&2048)!==0)switch(p.tag){case 0:case 11:case 15:Ni(9,p,p.return)}var R=p.sibling;if(R!==null){R.return=p.return,K=R;break e}K=p.return}}var P=e.current;for(K=P;K!==null;){y=K;var M=y.child;if((y.subtreeFlags&2064)!==0&&M!==null)M.return=y,K=M;else e:for(y=P;K!==null;){if(k=K,(k.flags&2048)!==0)try{switch(k.tag){case 0:case 11:case 15:no(9,k)}}catch(q){Ae(k,k.return,q)}if(k===y){K=null;break e}var $=k.sibling;if($!==null){$.return=k.return,K=$;break e}K=k.return}}if(ue=d,kn(),Wt&&typeof Wt.onPostCommitFiberRoot=="function")try{Wt.onPostCommitFiberRoot(ms,e)}catch{}a=!0}return a}finally{ve=s,Pt.transition=n}}return!1}function Lp(e,n,s){n=Nr(s,n),n=Zf(e,n,1),e=jn(e,n,1),n=at(),e!==null&&(ei(e,1,n),ht(e,n))}function Ae(e,n,s){if(e.tag===3)Lp(e,e,s);else for(;n!==null;){if(n.tag===3){Lp(n,e,s);break}else if(n.tag===1){var a=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof a.componentDidCatch=="function"&&(En===null||!En.has(a))){e=Nr(s,e),e=Jf(n,e,1),n=jn(n,e,1),e=at(),n!==null&&(ei(n,1,e),ht(n,e));break}}n=n.return}}function Bv(e,n,s){var a=e.pingCache;a!==null&&a.delete(n),n=at(),e.pingedLanes|=e.suspendedLanes&s,He===e&&(qe&s)===s&&(Ie===4||Ie===3&&(qe&130023424)===qe&&500>Le()-$l?Xn(e,0):Bl|=s),ht(e,n)}function Dp(e,n){n===0&&((e.mode&1)===0?n=1:(n=vs,vs<<=1,(vs&130023424)===0&&(vs=4194304)));var s=at();e=sn(e,n),e!==null&&(ei(e,n,s),ht(e,s))}function $v(e){var n=e.memoizedState,s=0;n!==null&&(s=n.retryLane),Dp(e,s)}function Uv(e,n){var s=0;switch(e.tag){case 13:var a=e.stateNode,d=e.memoizedState;d!==null&&(s=d.retryLane);break;case 19:a=e.stateNode;break;default:throw Error(i(314))}a!==null&&a.delete(n),Dp(e,s)}var zp;zp=function(e,n,s){if(e!==null)if(e.memoizedProps!==n.pendingProps||ct.current)ft=!0;else{if((e.lanes&s)===0&&(n.flags&128)===0)return ft=!1,Rv(e,n,s);ft=(e.flags&131072)!==0}else ft=!1,Ce&&(n.flags&1048576)!==0&&mf(n,Fs,n.index);switch(n.lanes=0,n.tag){case 2:var a=n.type;eo(e,n),e=n.pendingProps;var d=yr(n,Je.current);Cr(n,s),d=yl(null,n,a,e,d,s);var p=wl();return n.flags|=1,typeof d=="object"&&d!==null&&typeof d.render=="function"&&d.$$typeof===void 0?(n.tag=1,n.memoizedState=null,n.updateQueue=null,dt(a)?(p=!0,zs(n)):p=!1,n.memoizedState=d.state!==null&&d.state!==void 0?d.state:null,fl(n),d.updater=Zs,n.stateNode=d,d._reactInternals=n,El(n,a,e,s),n=Rl(null,n,a,!0,p,s)):(n.tag=0,Ce&&p&&nl(n),ot(null,n,d,s),n=n.child),n;case 16:a=n.elementType;e:{switch(eo(e,n),e=n.pendingProps,d=a._init,a=d(a._payload),n.type=a,d=n.tag=Hv(a),e=Vt(a,e),d){case 0:n=Tl(null,n,a,e,s);break e;case 1:n=lp(null,n,a,e,s);break e;case 11:n=rp(null,n,a,e,s);break e;case 14:n=ip(null,n,a,Vt(a.type,e),s);break e}throw Error(i(306,a,""))}return n;case 0:return a=n.type,d=n.pendingProps,d=n.elementType===a?d:Vt(a,d),Tl(e,n,a,d,s);case 1:return a=n.type,d=n.pendingProps,d=n.elementType===a?d:Vt(a,d),lp(e,n,a,d,s);case 3:e:{if(up(n),e===null)throw Error(i(387));a=n.pendingProps,p=n.memoizedState,d=p.element,jf(e,n),Hs(n,a,null,s);var y=n.memoizedState;if(a=y.element,p.isDehydrated)if(p={element:a,isDehydrated:!1,cache:y.cache,pendingSuspenseBoundaries:y.pendingSuspenseBoundaries,transitions:y.transitions},n.updateQueue.baseState=p,n.memoizedState=p,n.flags&256){d=Nr(Error(i(423)),n),n=cp(e,n,a,s,d);break e}else if(a!==d){d=Nr(Error(i(424)),n),n=cp(e,n,a,s,d);break e}else for(yt=yn(n.stateNode.containerInfo.firstChild),xt=n,Ce=!0,zt=null,s=kf(n,null,a,s),n.child=s;s;)s.flags=s.flags&-3|4096,s=s.sibling;else{if(kr(),a===d){n=an(e,n,s);break e}ot(e,n,a,s)}n=n.child}return n;case 5:return Nf(n),e===null&&sl(n),a=n.type,d=n.pendingProps,p=e!==null?e.memoizedProps:null,y=d.children,Qa(a,d)?y=null:p!==null&&Qa(a,p)&&(n.flags|=32),ap(e,n),ot(e,n,y,s),n.child;case 6:return e===null&&sl(n),null;case 13:return dp(e,n,s);case 4:return pl(n,n.stateNode.containerInfo),a=n.pendingProps,e===null?n.child=Sr(n,null,a,s):ot(e,n,a,s),n.child;case 11:return a=n.type,d=n.pendingProps,d=n.elementType===a?d:Vt(a,d),rp(e,n,a,d,s);case 7:return ot(e,n,n.pendingProps,s),n.child;case 8:return ot(e,n,n.pendingProps.children,s),n.child;case 12:return ot(e,n,n.pendingProps.children,s),n.child;case 10:e:{if(a=n.type._context,d=n.pendingProps,p=n.memoizedProps,y=d.value,be($s,a._currentValue),a._currentValue=y,p!==null)if(Dt(p.value,y)){if(p.children===d.children&&!ct.current){n=an(e,n,s);break e}}else for(p=n.child,p!==null&&(p.return=n);p!==null;){var k=p.dependencies;if(k!==null){y=p.child;for(var C=k.firstContext;C!==null;){if(C.context===a){if(p.tag===1){C=on(-1,s&-s),C.tag=2;var L=p.updateQueue;if(L!==null){L=L.shared;var F=L.pending;F===null?C.next=C:(C.next=F.next,F.next=C),L.pending=C}}p.lanes|=s,C=p.alternate,C!==null&&(C.lanes|=s),cl(p.return,s,n),k.lanes|=s;break}C=C.next}}else if(p.tag===10)y=p.type===n.type?null:p.child;else if(p.tag===18){if(y=p.return,y===null)throw Error(i(341));y.lanes|=s,k=y.alternate,k!==null&&(k.lanes|=s),cl(y,s,n),y=p.sibling}else y=p.child;if(y!==null)y.return=p;else for(y=p;y!==null;){if(y===n){y=null;break}if(p=y.sibling,p!==null){p.return=y.return,y=p;break}y=y.return}p=y}ot(e,n,d.children,s),n=n.child}return n;case 9:return d=n.type,a=n.pendingProps.children,Cr(n,s),d=Et(d),a=a(d),n.flags|=1,ot(e,n,a,s),n.child;case 14:return a=n.type,d=Vt(a,n.pendingProps),d=Vt(a.type,d),ip(e,n,a,d,s);case 15:return sp(e,n,n.type,n.pendingProps,s);case 17:return a=n.type,d=n.pendingProps,d=n.elementType===a?d:Vt(a,d),eo(e,n),n.tag=1,dt(a)?(e=!0,zs(n)):e=!1,Cr(n,s),Qf(n,a,d),El(n,a,d,s),Rl(null,n,a,!0,e,s);case 19:return pp(e,n,s);case 22:return op(e,n,s)}throw Error(i(156,n.tag))};function Vp(e,n){return md(e,n)}function Wv(e,n,s,a){this.tag=e,this.key=s,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=a,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Tt(e,n,s,a){return new Wv(e,n,s,a)}function Ql(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Hv(e){if(typeof e=="function")return Ql(e)?1:0;if(e!=null){if(e=e.$$typeof,e===it)return 11;if(e===Ve)return 14}return 2}function Rn(e,n){var s=e.alternate;return s===null?(s=Tt(e.tag,n,e.key,e.mode),s.elementType=e.elementType,s.type=e.type,s.stateNode=e.stateNode,s.alternate=e,e.alternate=s):(s.pendingProps=n,s.type=e.type,s.flags=0,s.subtreeFlags=0,s.deletions=null),s.flags=e.flags&14680064,s.childLanes=e.childLanes,s.lanes=e.lanes,s.child=e.child,s.memoizedProps=e.memoizedProps,s.memoizedState=e.memoizedState,s.updateQueue=e.updateQueue,n=e.dependencies,s.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},s.sibling=e.sibling,s.index=e.index,s.ref=e.ref,s}function fo(e,n,s,a,d,p){var y=2;if(a=e,typeof e=="function")Ql(e)&&(y=1);else if(typeof e=="string")y=5;else e:switch(e){case ne:return qn(s.children,d,p,n);case Q:y=8,d|=8;break;case he:return e=Tt(12,s,n,d|2),e.elementType=he,e.lanes=p,e;case Ue:return e=Tt(13,s,n,d),e.elementType=Ue,e.lanes=p,e;case Xe:return e=Tt(19,s,n,d),e.elementType=Xe,e.lanes=p,e;case oe:return po(s,d,p,n);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case ye:y=10;break e;case Ze:y=9;break e;case it:y=11;break e;case Ve:y=14;break e;case st:y=16,a=null;break e}throw Error(i(130,e==null?e:typeof e,""))}return n=Tt(y,s,n,d),n.elementType=e,n.type=a,n.lanes=p,n}function qn(e,n,s,a){return e=Tt(7,e,a,n),e.lanes=s,e}function po(e,n,s,a){return e=Tt(22,e,a,n),e.elementType=oe,e.lanes=s,e.stateNode={isHidden:!1},e}function ql(e,n,s){return e=Tt(6,e,null,n),e.lanes=s,e}function Zl(e,n,s){return n=Tt(4,e.children!==null?e.children:[],e.key,n),n.lanes=s,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}function Kv(e,n,s,a,d){this.tag=n,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Ca(0),this.expirationTimes=Ca(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ca(0),this.identifierPrefix=a,this.onRecoverableError=d,this.mutableSourceEagerHydrationData=null}function Jl(e,n,s,a,d,p,y,k,C){return e=new Kv(e,n,s,k,C),n===1?(n=1,p===!0&&(n|=8)):n=0,p=Tt(3,null,null,n),e.current=p,p.stateNode=e,p.memoizedState={element:a,isDehydrated:s,cache:null,transitions:null,pendingSuspenseBoundaries:null},fl(p),e}function Gv(e,n,s){var a=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:G,key:a==null?null:""+a,children:e,containerInfo:n,implementation:s}}function Op(e){if(!e)return bn;e=e._reactInternals;e:{if(Fn(e)!==e||e.tag!==1)throw Error(i(170));var n=e;do{switch(n.tag){case 3:n=n.stateNode.context;break e;case 1:if(dt(n.type)){n=n.stateNode.__reactInternalMemoizedMergedChildContext;break e}}n=n.return}while(n!==null);throw Error(i(171))}if(e.tag===1){var s=e.type;if(dt(s))return ff(e,s,n)}return n}function Fp(e,n,s,a,d,p,y,k,C){return e=Jl(s,a,!0,e,d,p,y,k,C),e.context=Op(null),s=e.current,a=at(),d=Pn(s),p=on(a,d),p.callback=n??null,jn(s,p,d),e.current.lanes=d,ei(e,d,a),ht(e,a),e}function ho(e,n,s,a){var d=n.current,p=at(),y=Pn(d);return s=Op(s),n.context===null?n.context=s:n.pendingContext=s,n=on(p,y),n.payload={element:e},a=a===void 0?null:a,a!==null&&(n.callback=a),e=jn(d,n,y),e!==null&&(It(e,d,y,p),Ws(e,d,y)),y}function mo(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Ip(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var s=e.retryLane;e.retryLane=s!==0&&s<n?s:n}}function eu(e,n){Ip(e,n),(e=e.alternate)&&Ip(e,n)}function Yv(){return null}var Bp=typeof reportError=="function"?reportError:function(e){console.error(e)};function tu(e){this._internalRoot=e}go.prototype.render=tu.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(i(409));ho(e,n,null,null)},go.prototype.unmount=tu.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;Yn(function(){ho(null,e,null,null)}),n[en]=null}};function go(e){this._internalRoot=e}go.prototype.unstable_scheduleHydration=function(e){if(e){var n=Sd();e={blockedOn:null,target:e,priority:n};for(var s=0;s<gn.length&&n!==0&&n<gn[s].priority;s++);gn.splice(s,0,e),s===0&&Ed(e)}};function nu(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function vo(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function $p(){}function Xv(e,n,s,a,d){if(d){if(typeof a=="function"){var p=a;a=function(){var L=mo(y);p.call(L)}}var y=Fp(n,a,e,0,null,!1,!1,"",$p);return e._reactRootContainer=y,e[en]=y.current,hi(e.nodeType===8?e.parentNode:e),Yn(),y}for(;d=e.lastChild;)e.removeChild(d);if(typeof a=="function"){var k=a;a=function(){var L=mo(C);k.call(L)}}var C=Jl(e,0,!1,null,null,!1,!1,"",$p);return e._reactRootContainer=C,e[en]=C.current,hi(e.nodeType===8?e.parentNode:e),Yn(function(){ho(n,C,s,a)}),C}function xo(e,n,s,a,d){var p=s._reactRootContainer;if(p){var y=p;if(typeof d=="function"){var k=d;d=function(){var C=mo(y);k.call(C)}}ho(n,y,e,d)}else y=Xv(s,n,e,d,a);return mo(y)}bd=function(e){switch(e.tag){case 3:var n=e.stateNode;if(n.current.memoizedState.isDehydrated){var s=Jr(n.pendingLanes);s!==0&&(Ea(n,s|1),ht(n,Le()),(ue&6)===0&&(Rr=Le()+500,kn()))}break;case 13:Yn(function(){var a=sn(e,1);if(a!==null){var d=at();It(a,e,1,d)}}),eu(e,1)}},Na=function(e){if(e.tag===13){var n=sn(e,134217728);if(n!==null){var s=at();It(n,e,134217728,s)}eu(e,134217728)}},kd=function(e){if(e.tag===13){var n=Pn(e),s=sn(e,n);if(s!==null){var a=at();It(s,e,n,a)}eu(e,n)}},Sd=function(){return ve},jd=function(e,n){var s=ve;try{return ve=e,n()}finally{ve=s}},ya=function(e,n,s){switch(n){case"input":if(da(e,s),n=s.name,s.type==="radio"&&n!=null){for(s=e;s.parentNode;)s=s.parentNode;for(s=s.querySelectorAll("input[name="+JSON.stringify(""+n)+'][type="radio"]'),n=0;n<s.length;n++){var a=s[n];if(a!==e&&a.form===e.form){var d=Ls(a);if(!d)throw Error(i(90));Yc(a),da(a,d)}}}break;case"textarea":Jc(e,s);break;case"select":n=s.value,n!=null&&ar(e,!!s.multiple,n,!1)}},ld=Gl,ud=Yn;var Qv={usingClientEntryPoint:!1,Events:[vi,vr,Ls,od,ad,Gl]},Ai={findFiberByHostInstance:In,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},qv={bundleType:Ai.bundleType,version:Ai.version,rendererPackageName:Ai.rendererPackageName,rendererConfig:Ai.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:z.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=pd(e),e===null?null:e.stateNode},findFiberByHostInstance:Ai.findFiberByHostInstance||Yv,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var yo=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!yo.isDisabled&&yo.supportsFiber)try{ms=yo.inject(qv),Wt=yo}catch{}}return mt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Qv,mt.createPortal=function(e,n){var s=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!nu(n))throw Error(i(200));return Gv(e,n,null,s)},mt.createRoot=function(e,n){if(!nu(e))throw Error(i(299));var s=!1,a="",d=Bp;return n!=null&&(n.unstable_strictMode===!0&&(s=!0),n.identifierPrefix!==void 0&&(a=n.identifierPrefix),n.onRecoverableError!==void 0&&(d=n.onRecoverableError)),n=Jl(e,1,!1,null,null,s,!1,a,d),e[en]=n.current,hi(e.nodeType===8?e.parentNode:e),new tu(n)},mt.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(i(188)):(e=Object.keys(e).join(","),Error(i(268,e)));return e=pd(n),e=e===null?null:e.stateNode,e},mt.flushSync=function(e){return Yn(e)},mt.hydrate=function(e,n,s){if(!vo(n))throw Error(i(200));return xo(null,e,n,!0,s)},mt.hydrateRoot=function(e,n,s){if(!nu(e))throw Error(i(405));var a=s!=null&&s.hydratedSources||null,d=!1,p="",y=Bp;if(s!=null&&(s.unstable_strictMode===!0&&(d=!0),s.identifierPrefix!==void 0&&(p=s.identifierPrefix),s.onRecoverableError!==void 0&&(y=s.onRecoverableError)),n=Fp(n,null,e,1,s??null,d,!1,p,y),e[en]=n.current,hi(e),a)for(e=0;e<a.length;e++)s=a[e],d=s._getVersion,d=d(s._source),n.mutableSourceEagerHydrationData==null?n.mutableSourceEagerHydrationData=[s,d]:n.mutableSourceEagerHydrationData.push(s,d);return new go(n)},mt.render=function(e,n,s){if(!vo(n))throw Error(i(200));return xo(null,e,n,!1,s)},mt.unmountComponentAtNode=function(e){if(!vo(e))throw Error(i(40));return e._reactRootContainer?(Yn(function(){xo(null,null,e,!1,function(){e._reactRootContainer=null,e[en]=null})}),!0):!1},mt.unstable_batchedUpdates=Gl,mt.unstable_renderSubtreeIntoContainer=function(e,n,s,a){if(!vo(s))throw Error(i(200));if(e==null||e._reactInternals===void 0)throw Error(i(38));return xo(e,n,s,!1,a)},mt.version="18.3.1-next-f1338f8080-20240426",mt}var Qp;function ox(){if(Qp)return su.exports;Qp=1;function t(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(t)}catch(r){console.error(r)}}return t(),su.exports=sx(),su.exports}var qp;function ax(){if(qp)return wo;qp=1;var t=ox();return wo.createRoot=t.createRoot,wo.hydrateRoot=t.hydrateRoot,wo}var lx=ax();const ux=Mm(lx);/**
 * react-router v7.15.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */var Zp="popstate";function Jp(t){return typeof t=="object"&&t!=null&&"pathname"in t&&"search"in t&&"hash"in t&&"state"in t&&"key"in t}function cx(t={}){function r(o,l){var g;let c=(g=l.state)==null?void 0:g.masked,{pathname:u,search:h,hash:m}=c||o.location;return Tu("",{pathname:u,search:h,hash:m},l.state&&l.state.usr||null,l.state&&l.state.key||"default",c?{pathname:o.location.pathname,search:o.location.search,hash:o.location.hash}:void 0)}function i(o,l){return typeof l=="string"?l:Gi(l)}return fx(r,i,null,t)}function Ee(t,r){if(t===!1||t===null||typeof t>"u")throw new Error(r)}function _t(t,r){if(!t){typeof console<"u"&&console.warn(r);try{throw new Error(r)}catch{}}}function dx(){return Math.random().toString(36).substring(2,10)}function eh(t,r){return{usr:t.state,key:t.key,idx:r,masked:t.mask?{pathname:t.pathname,search:t.search,hash:t.hash}:void 0}}function Tu(t,r,i=null,o,l){return{pathname:typeof t=="string"?t:t.pathname,search:"",hash:"",...typeof r=="string"?Ir(r):r,state:i,key:r&&r.key||o||dx(),mask:l}}function Gi({pathname:t="/",search:r="",hash:i=""}){return r&&r!=="?"&&(t+=r.charAt(0)==="?"?r:"?"+r),i&&i!=="#"&&(t+=i.charAt(0)==="#"?i:"#"+i),t}function Ir(t){let r={};if(t){let i=t.indexOf("#");i>=0&&(r.hash=t.substring(i),t=t.substring(0,i));let o=t.indexOf("?");o>=0&&(r.search=t.substring(o),t=t.substring(0,o)),t&&(r.pathname=t)}return r}function fx(t,r,i,o={}){let{window:l=document.defaultView,v5Compat:c=!1}=o,u=l.history,h="POP",m=null,g=v();g==null&&(g=0,u.replaceState({...u.state,idx:g},""));function v(){return(u.state||{idx:null}).idx}function x(){h="POP";let E=v(),A=E==null?null:E-g;g=E,m&&m({action:h,location:N.location,delta:A})}function w(E,A){h="PUSH";let D=Jp(E)?E:Tu(N.location,E,A);g=v()+1;let _=eh(D,g),z=N.createHref(D.mask||D);try{u.pushState(_,"",z)}catch(I){if(I instanceof DOMException&&I.name==="DataCloneError")throw I;l.location.assign(z)}c&&m&&m({action:h,location:N.location,delta:1})}function S(E,A){h="REPLACE";let D=Jp(E)?E:Tu(N.location,E,A);g=v();let _=eh(D,g),z=N.createHref(D.mask||D);u.replaceState(_,"",z),c&&m&&m({action:h,location:N.location,delta:0})}function j(E){return px(E)}let N={get action(){return h},get location(){return t(l,u)},listen(E){if(m)throw new Error("A history only accepts one active listener");return l.addEventListener(Zp,x),m=E,()=>{l.removeEventListener(Zp,x),m=null}},createHref(E){return r(l,E)},createURL:j,encodeLocation(E){let A=j(E);return{pathname:A.pathname,search:A.search,hash:A.hash}},push:w,replace:S,go(E){return u.go(E)}};return N}function px(t,r=!1){let i="http://localhost";typeof window<"u"&&(i=window.location.origin!=="null"?window.location.origin:window.location.href),Ee(i,"No window.location.(origin|href) available to create URL");let o=typeof t=="string"?t:Gi(t);return o=o.replace(/ $/,"%20"),!r&&o.startsWith("//")&&(o=i+o),new URL(o,i)}function Lm(t,r,i="/"){return hx(t,r,i,!1)}function hx(t,r,i,o,l){let c=typeof r=="string"?Ir(r):r,u=dn(c.pathname||"/",i);if(u==null)return null;let h=mx(t),m=null,g=Nx(u);for(let v=0;m==null&&v<h.length;++v)m=Cx(h[v],g,o);return m}function mx(t){let r=Dm(t);return gx(r),r}function Dm(t,r=[],i=[],o="",l=!1){let c=(u,h,m=l,g)=>{let v={relativePath:g===void 0?u.path||"":g,caseSensitive:u.caseSensitive===!0,childrenIndex:h,route:u};if(v.relativePath.startsWith("/")){if(!v.relativePath.startsWith(o)&&m)return;Ee(v.relativePath.startsWith(o),`Absolute route path "${v.relativePath}" nested under path "${o}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),v.relativePath=v.relativePath.slice(o.length)}let x=$t([o,v.relativePath]),w=i.concat(v);u.children&&u.children.length>0&&(Ee(u.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${x}".`),Dm(u.children,r,w,x,m)),!(u.path==null&&!u.index)&&r.push({path:x,score:Sx(x,u.index),routesMeta:w})};return t.forEach((u,h)=>{var m;if(u.path===""||!((m=u.path)!=null&&m.includes("?")))c(u,h);else for(let g of zm(u.path))c(u,h,!0,g)}),r}function zm(t){let r=t.split("/");if(r.length===0)return[];let[i,...o]=r,l=i.endsWith("?"),c=i.replace(/\?$/,"");if(o.length===0)return l?[c,""]:[c];let u=zm(o.join("/")),h=[];return h.push(...u.map(m=>m===""?c:[c,m].join("/"))),l&&h.push(...u),h.map(m=>t.startsWith("/")&&m===""?"/":m)}function gx(t){t.sort((r,i)=>r.score!==i.score?i.score-r.score:jx(r.routesMeta.map(o=>o.childrenIndex),i.routesMeta.map(o=>o.childrenIndex)))}var vx=/^:[\w-]+$/,xx=3,yx=2,wx=1,bx=10,kx=-2,th=t=>t==="*";function Sx(t,r){let i=t.split("/"),o=i.length;return i.some(th)&&(o+=kx),r&&(o+=yx),i.filter(l=>!th(l)).reduce((l,c)=>l+(vx.test(c)?xx:c===""?wx:bx),o)}function jx(t,r){return t.length===r.length&&t.slice(0,-1).every((o,l)=>o===r[l])?t[t.length-1]-r[r.length-1]:0}function Cx(t,r,i=!1){let{routesMeta:o}=t,l={},c="/",u=[];for(let h=0;h<o.length;++h){let m=o[h],g=h===o.length-1,v=c==="/"?r:r.slice(c.length)||"/",x=zo({path:m.relativePath,caseSensitive:m.caseSensitive,end:g},v),w=m.route;if(!x&&g&&i&&!o[o.length-1].route.index&&(x=zo({path:m.relativePath,caseSensitive:m.caseSensitive,end:!1},v)),!x)return null;Object.assign(l,x.params),u.push({params:l,pathname:$t([c,x.pathname]),pathnameBase:Ax($t([c,x.pathnameBase])),route:w}),x.pathnameBase!=="/"&&(c=$t([c,x.pathnameBase]))}return u}function zo(t,r){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[i,o]=Ex(t.path,t.caseSensitive,t.end),l=r.match(i);if(!l)return null;let c=l[0],u=c.replace(/(.)\/+$/,"$1"),h=l.slice(1);return{params:o.reduce((g,{paramName:v,isOptional:x},w)=>{if(v==="*"){let j=h[w]||"";u=c.slice(0,c.length-j.length).replace(/(.)\/+$/,"$1")}const S=h[w];return x&&!S?g[v]=void 0:g[v]=(S||"").replace(/%2F/g,"/"),g},{}),pathname:c,pathnameBase:u,pattern:t}}function Ex(t,r=!1,i=!0){_t(t==="*"||!t.endsWith("*")||t.endsWith("/*"),`Route path "${t}" will be treated as if it were "${t.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${t.replace(/\*$/,"/*")}".`);let o=[],l="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(u,h,m,g,v)=>{if(o.push({paramName:h,isOptional:m!=null}),m){let x=v.charAt(g+u.length);return x&&x!=="/"?"/([^\\/]*)":"(?:/([^\\/]*))?"}return"/([^\\/]+)"}).replace(/\/([\w-]+)\?(\/|$)/g,"(/$1)?$2");return t.endsWith("*")?(o.push({paramName:"*"}),l+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):i?l+="\\/*$":t!==""&&t!=="/"&&(l+="(?:(?=\\/|$))"),[new RegExp(l,r?void 0:"i"),o]}function Nx(t){try{return t.split("/").map(r=>decodeURIComponent(r).replace(/\//g,"%2F")).join("/")}catch(r){return _t(!1,`The URL path "${t}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${r}).`),t}}function dn(t,r){if(r==="/")return t;if(!t.toLowerCase().startsWith(r.toLowerCase()))return null;let i=r.endsWith("/")?r.length-1:r.length,o=t.charAt(i);return o&&o!=="/"?null:t.slice(i)||"/"}var Px=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i;function Tx(t,r="/"){let{pathname:i,search:o="",hash:l=""}=typeof t=="string"?Ir(t):t,c;return i?(i=Vm(i),i.startsWith("/")?c=nh(i.substring(1),"/"):c=nh(i,r)):c=r,{pathname:c,search:_x(o),hash:Mx(l)}}function nh(t,r){let i=Vo(r).split("/");return t.split("/").forEach(l=>{l===".."?i.length>1&&i.pop():l!=="."&&i.push(l)}),i.length>1?i.join("/"):"/"}function lu(t,r,i,o){return`Cannot include a '${t}' character in a manually specified \`to.${r}\` field [${JSON.stringify(o)}].  Please separate it out to the \`to.${i}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function Rx(t){return t.filter((r,i)=>i===0||r.route.path&&r.route.path.length>0)}function Zu(t){let r=Rx(t);return r.map((i,o)=>o===r.length-1?i.pathname:i.pathnameBase)}function qo(t,r,i,o=!1){let l;typeof t=="string"?l=Ir(t):(l={...t},Ee(!l.pathname||!l.pathname.includes("?"),lu("?","pathname","search",l)),Ee(!l.pathname||!l.pathname.includes("#"),lu("#","pathname","hash",l)),Ee(!l.search||!l.search.includes("#"),lu("#","search","hash",l)));let c=t===""||l.pathname==="",u=c?"/":l.pathname,h;if(u==null)h=i;else{let x=r.length-1;if(!o&&u.startsWith("..")){let w=u.split("/");for(;w[0]==="..";)w.shift(),x-=1;l.pathname=w.join("/")}h=x>=0?r[x]:"/"}let m=Tx(l,h),g=u&&u!=="/"&&u.endsWith("/"),v=(c||u===".")&&i.endsWith("/");return!m.pathname.endsWith("/")&&(g||v)&&(m.pathname+="/"),m}var Vm=t=>t.replace(/\/\/+/g,"/"),$t=t=>Vm(t.join("/")),Vo=t=>t.replace(/\/+$/,""),Ax=t=>Vo(t).replace(/^\/*/,"/"),_x=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,Mx=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t,Lx=class{constructor(t,r,i,o=!1){this.status=t,this.statusText=r||"",this.internal=o,i instanceof Error?(this.data=i.toString(),this.error=i):this.data=i}};function Dx(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}function zx(t){let r=t.map(i=>i.route.path).filter(Boolean);return $t(r)||"/"}var Om=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";function Fm(t,r){let i=t;if(typeof i!="string"||!Px.test(i))return{absoluteURL:void 0,isExternal:!1,to:i};let o=i,l=!1;if(Om)try{let c=new URL(window.location.href),u=i.startsWith("//")?new URL(c.protocol+i):new URL(i),h=dn(u.pathname,r);u.origin===c.origin&&h!=null?i=h+u.search+u.hash:l=!0}catch{_t(!1,`<Link to="${i}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}return{absoluteURL:o,isExternal:l,to:i}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");var Im=["POST","PUT","PATCH","DELETE"];new Set(Im);var Vx=["GET",...Im];new Set(Vx);var Br=b.createContext(null);Br.displayName="DataRouter";var Zo=b.createContext(null);Zo.displayName="DataRouterState";var Bm=b.createContext(!1);function Ox(){return b.useContext(Bm)}var $m=b.createContext({isTransitioning:!1});$m.displayName="ViewTransition";var Fx=b.createContext(new Map);Fx.displayName="Fetchers";var Ix=b.createContext(null);Ix.displayName="Await";var kt=b.createContext(null);kt.displayName="Navigation";var Zi=b.createContext(null);Zi.displayName="Location";var Mt=b.createContext({outlet:null,matches:[],isDataRoute:!1});Mt.displayName="Route";var Ju=b.createContext(null);Ju.displayName="RouteError";var Um="REACT_ROUTER_ERROR",Bx="REDIRECT",$x="ROUTE_ERROR_RESPONSE";function Ux(t){if(t.startsWith(`${Um}:${Bx}:{`))try{let r=JSON.parse(t.slice(28));if(typeof r=="object"&&r&&typeof r.status=="number"&&typeof r.statusText=="string"&&typeof r.location=="string"&&typeof r.reloadDocument=="boolean"&&typeof r.replace=="boolean")return r}catch{}}function Wx(t){if(t.startsWith(`${Um}:${$x}:{`))try{let r=JSON.parse(t.slice(40));if(typeof r=="object"&&r&&typeof r.status=="number"&&typeof r.statusText=="string")return new Lx(r.status,r.statusText,r.data)}catch{}}function Hx(t,{relative:r}={}){Ee($r(),"useHref() may be used only in the context of a <Router> component.");let{basename:i,navigator:o}=b.useContext(kt),{hash:l,pathname:c,search:u}=Ji(t,{relative:r}),h=c;return i!=="/"&&(h=c==="/"?i:$t([i,c])),o.createHref({pathname:h,search:u,hash:l})}function $r(){return b.useContext(Zi)!=null}function St(){return Ee($r(),"useLocation() may be used only in the context of a <Router> component."),b.useContext(Zi).location}var Wm="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function Hm(t){b.useContext(kt).static||b.useLayoutEffect(t)}function sr(){let{isDataRoute:t}=b.useContext(Mt);return t?ay():Kx()}function Kx(){Ee($r(),"useNavigate() may be used only in the context of a <Router> component.");let t=b.useContext(Br),{basename:r,navigator:i}=b.useContext(kt),{matches:o}=b.useContext(Mt),{pathname:l}=St(),c=JSON.stringify(Zu(o)),u=b.useRef(!1);return Hm(()=>{u.current=!0}),b.useCallback((m,g={})=>{if(_t(u.current,Wm),!u.current)return;if(typeof m=="number"){i.go(m);return}let v=qo(m,JSON.parse(c),l,g.relative==="path");t==null&&r!=="/"&&(v.pathname=v.pathname==="/"?r:$t([r,v.pathname])),(g.replace?i.replace:i.push)(v,g.state,g)},[r,i,c,l,t])}var Gx=b.createContext(null);function Yx(t){let r=b.useContext(Mt).outlet;return b.useMemo(()=>r&&b.createElement(Gx.Provider,{value:t},r),[r,t])}function Xx(){let{matches:t}=b.useContext(Mt),r=t[t.length-1];return(r==null?void 0:r.params)??{}}function Ji(t,{relative:r}={}){let{matches:i}=b.useContext(Mt),{pathname:o}=St(),l=JSON.stringify(Zu(i));return b.useMemo(()=>qo(t,JSON.parse(l),o,r==="path"),[t,l,o,r])}function Qx(t,r){return Km(t,r)}function Km(t,r,i){var E;Ee($r(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:o}=b.useContext(kt),{matches:l}=b.useContext(Mt),c=l[l.length-1],u=c?c.params:{},h=c?c.pathname:"/",m=c?c.pathnameBase:"/",g=c&&c.route;{let A=g&&g.path||"";Ym(h,!g||A.endsWith("*")||A.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${h}" (under <Route path="${A}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${A}"> to <Route path="${A==="/"?"*":`${A}/*`}">.`)}let v=St(),x;if(r){let A=typeof r=="string"?Ir(r):r;Ee(m==="/"||((E=A.pathname)==null?void 0:E.startsWith(m)),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${m}" but pathname "${A.pathname}" was given in the \`location\` prop.`),x=A}else x=v;let w=x.pathname||"/",S=w;if(m!=="/"){let A=m.replace(/^\//,"").split("/");S="/"+w.replace(/^\//,"").split("/").slice(A.length).join("/")}let j=i&&i.state.matches.length?i.state.matches.map(A=>Object.assign(A,{route:i.manifest[A.route.id]||A.route})):Lm(t,{pathname:S});_t(g||j!=null,`No routes matched location "${x.pathname}${x.search}${x.hash}" `),_t(j==null||j[j.length-1].route.element!==void 0||j[j.length-1].route.Component!==void 0||j[j.length-1].route.lazy!==void 0,`Matched leaf route at location "${x.pathname}${x.search}${x.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let N=ty(j&&j.map(A=>Object.assign({},A,{params:Object.assign({},u,A.params),pathname:$t([m,o.encodeLocation?o.encodeLocation(A.pathname.replace(/%/g,"%25").replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:A.pathname]),pathnameBase:A.pathnameBase==="/"?m:$t([m,o.encodeLocation?o.encodeLocation(A.pathnameBase.replace(/%/g,"%25").replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:A.pathnameBase])})),l,i);return r&&N?b.createElement(Zi.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",mask:void 0,...x},navigationType:"POP"}},N):N}function qx(){let t=oy(),r=Dx(t)?`${t.status} ${t.statusText}`:t instanceof Error?t.message:JSON.stringify(t),i=t instanceof Error?t.stack:null,o="rgba(200,200,200, 0.5)",l={padding:"0.5rem",backgroundColor:o},c={padding:"2px 4px",backgroundColor:o},u=null;return console.error("Error handled by React Router default ErrorBoundary:",t),u=b.createElement(b.Fragment,null,b.createElement("p",null,"💿 Hey developer 👋"),b.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",b.createElement("code",{style:c},"ErrorBoundary")," or"," ",b.createElement("code",{style:c},"errorElement")," prop on your route.")),b.createElement(b.Fragment,null,b.createElement("h2",null,"Unexpected Application Error!"),b.createElement("h3",{style:{fontStyle:"italic"}},r),i?b.createElement("pre",{style:l},i):null,u)}var Zx=b.createElement(qx,null),Gm=class extends b.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,r){return r.location!==t.location||r.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:r.error,location:r.location,revalidation:t.revalidation||r.revalidation}}componentDidCatch(t,r){this.props.onError?this.props.onError(t,r):console.error("React Router caught the following error during render",t)}render(){let t=this.state.error;if(this.context&&typeof t=="object"&&t&&"digest"in t&&typeof t.digest=="string"){const i=Wx(t.digest);i&&(t=i)}let r=t!==void 0?b.createElement(Mt.Provider,{value:this.props.routeContext},b.createElement(Ju.Provider,{value:t,children:this.props.component})):this.props.children;return this.context?b.createElement(Jx,{error:t},r):r}};Gm.contextType=Bm;var uu=new WeakMap;function Jx({children:t,error:r}){let{basename:i}=b.useContext(kt);if(typeof r=="object"&&r&&"digest"in r&&typeof r.digest=="string"){let o=Ux(r.digest);if(o){let l=uu.get(r);if(l)throw l;let c=Fm(o.location,i);if(Om&&!uu.get(r))if(c.isExternal||o.reloadDocument)window.location.href=c.absoluteURL||c.to;else{const u=Promise.resolve().then(()=>window.__reactRouterDataRouter.navigate(c.to,{replace:o.replace}));throw uu.set(r,u),u}return b.createElement("meta",{httpEquiv:"refresh",content:`0;url=${c.absoluteURL||c.to}`})}}return t}function ey({routeContext:t,match:r,children:i}){let o=b.useContext(Br);return o&&o.static&&o.staticContext&&(r.route.errorElement||r.route.ErrorBoundary)&&(o.staticContext._deepestRenderedBoundaryId=r.route.id),b.createElement(Mt.Provider,{value:t},i)}function ty(t,r=[],i){let o=i==null?void 0:i.state;if(t==null){if(!o)return null;if(o.errors)t=o.matches;else if(r.length===0&&!o.initialized&&o.matches.length>0)t=o.matches;else return null}let l=t,c=o==null?void 0:o.errors;if(c!=null){let v=l.findIndex(x=>x.route.id&&(c==null?void 0:c[x.route.id])!==void 0);Ee(v>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(c).join(",")}`),l=l.slice(0,Math.min(l.length,v+1))}let u=!1,h=-1;if(i&&o){u=o.renderFallback;for(let v=0;v<l.length;v++){let x=l[v];if((x.route.HydrateFallback||x.route.hydrateFallbackElement)&&(h=v),x.route.id){let{loaderData:w,errors:S}=o,j=x.route.loader&&!w.hasOwnProperty(x.route.id)&&(!S||S[x.route.id]===void 0);if(x.route.lazy||j){i.isStatic&&(u=!0),h>=0?l=l.slice(0,h+1):l=[l[0]];break}}}}let m=i==null?void 0:i.onError,g=o&&m?(v,x)=>{var w,S;m(v,{location:o.location,params:((S=(w=o.matches)==null?void 0:w[0])==null?void 0:S.params)??{},pattern:zx(o.matches),errorInfo:x})}:void 0;return l.reduceRight((v,x,w)=>{let S,j=!1,N=null,E=null;o&&(S=c&&x.route.id?c[x.route.id]:void 0,N=x.route.errorElement||Zx,u&&(h<0&&w===0?(Ym("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),j=!0,E=null):h===w&&(j=!0,E=x.route.hydrateFallbackElement||null)));let A=r.concat(l.slice(0,w+1)),D=()=>{let _;return S?_=N:j?_=E:x.route.Component?_=b.createElement(x.route.Component,null):x.route.element?_=x.route.element:_=v,b.createElement(ey,{match:x,routeContext:{outlet:v,matches:A,isDataRoute:o!=null},children:_})};return o&&(x.route.ErrorBoundary||x.route.errorElement||w===0)?b.createElement(Gm,{location:o.location,revalidation:o.revalidation,component:N,error:S,children:D(),routeContext:{outlet:null,matches:A,isDataRoute:!0},onError:g}):D()},null)}function ec(t){return`${t} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function ny(t){let r=b.useContext(Br);return Ee(r,ec(t)),r}function ry(t){let r=b.useContext(Zo);return Ee(r,ec(t)),r}function iy(t){let r=b.useContext(Mt);return Ee(r,ec(t)),r}function tc(t){let r=iy(t),i=r.matches[r.matches.length-1];return Ee(i.route.id,`${t} can only be used on routes that contain a unique "id"`),i.route.id}function sy(){return tc("useRouteId")}function oy(){var o;let t=b.useContext(Ju),r=ry("useRouteError"),i=tc("useRouteError");return t!==void 0?t:(o=r.errors)==null?void 0:o[i]}function ay(){let{router:t}=ny("useNavigate"),r=tc("useNavigate"),i=b.useRef(!1);return Hm(()=>{i.current=!0}),b.useCallback(async(l,c={})=>{_t(i.current,Wm),i.current&&(typeof l=="number"?await t.navigate(l):await t.navigate(l,{fromRouteId:r,...c}))},[t,r])}var rh={};function Ym(t,r,i){!r&&!rh[t]&&(rh[t]=!0,_t(!1,i))}b.memo(ly);function ly({routes:t,manifest:r,future:i,state:o,isStatic:l,onError:c}){return Km(t,void 0,{manifest:r,state:o,isStatic:l,onError:c})}function Oo({to:t,replace:r,state:i,relative:o}){Ee($r(),"<Navigate> may be used only in the context of a <Router> component.");let{static:l}=b.useContext(kt);_t(!l,"<Navigate> must not be used on the initial render in a <StaticRouter>. This is a no-op, but you should modify your code so the <Navigate> is only ever rendered in response to some user interaction or state change.");let{matches:c}=b.useContext(Mt),{pathname:u}=St(),h=sr(),m=qo(t,Zu(c),u,o==="path"),g=JSON.stringify(m);return b.useEffect(()=>{h(JSON.parse(g),{replace:r,state:i,relative:o})},[h,g,o,r,i]),null}function Xm(t){return Yx(t.context)}function Ge(t){Ee(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function uy({basename:t="/",children:r=null,location:i,navigationType:o="POP",navigator:l,static:c=!1,useTransitions:u}){Ee(!$r(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let h=t.replace(/^\/*/,"/"),m=b.useMemo(()=>({basename:h,navigator:l,static:c,useTransitions:u,future:{}}),[h,l,c,u]);typeof i=="string"&&(i=Ir(i));let{pathname:g="/",search:v="",hash:x="",state:w=null,key:S="default",mask:j}=i,N=b.useMemo(()=>{let E=dn(g,h);return E==null?null:{location:{pathname:E,search:v,hash:x,state:w,key:S,mask:j},navigationType:o}},[h,g,v,x,w,S,o,j]);return _t(N!=null,`<Router basename="${h}"> is not able to match the URL "${g}${v}${x}" because it does not start with the basename, so the <Router> won't render anything.`),N==null?null:b.createElement(kt.Provider,{value:m},b.createElement(Zi.Provider,{children:r,value:N}))}function cy({children:t,location:r}){return Qx(Ru(t),r)}function Ru(t,r=[]){let i=[];return b.Children.forEach(t,(o,l)=>{if(!b.isValidElement(o))return;let c=[...r,l];if(o.type===b.Fragment){i.push.apply(i,Ru(o.props.children,c));return}Ee(o.type===Ge,`[${typeof o.type=="string"?o.type:o.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),Ee(!o.props.index||!o.props.children,"An index route cannot have child routes.");let u={id:o.props.id||c.join("-"),caseSensitive:o.props.caseSensitive,element:o.props.element,Component:o.props.Component,index:o.props.index,path:o.props.path,middleware:o.props.middleware,loader:o.props.loader,action:o.props.action,hydrateFallbackElement:o.props.hydrateFallbackElement,HydrateFallback:o.props.HydrateFallback,errorElement:o.props.errorElement,ErrorBoundary:o.props.ErrorBoundary,hasErrorBoundary:o.props.hasErrorBoundary===!0||o.props.ErrorBoundary!=null||o.props.errorElement!=null,shouldRevalidate:o.props.shouldRevalidate,handle:o.props.handle,lazy:o.props.lazy};o.props.children&&(u.children=Ru(o.props.children,c)),i.push(u)}),i}var No="get",Po="application/x-www-form-urlencoded";function Jo(t){return typeof HTMLElement<"u"&&t instanceof HTMLElement}function dy(t){return Jo(t)&&t.tagName.toLowerCase()==="button"}function fy(t){return Jo(t)&&t.tagName.toLowerCase()==="form"}function py(t){return Jo(t)&&t.tagName.toLowerCase()==="input"}function hy(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function my(t,r){return t.button===0&&(!r||r==="_self")&&!hy(t)}function Au(t=""){return new URLSearchParams(typeof t=="string"||Array.isArray(t)||t instanceof URLSearchParams?t:Object.keys(t).reduce((r,i)=>{let o=t[i];return r.concat(Array.isArray(o)?o.map(l=>[i,l]):[[i,o]])},[]))}function gy(t,r){let i=Au(t);return r&&r.forEach((o,l)=>{i.has(l)||r.getAll(l).forEach(c=>{i.append(l,c)})}),i}var bo=null;function vy(){if(bo===null)try{new FormData(document.createElement("form"),0),bo=!1}catch{bo=!0}return bo}var xy=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function cu(t){return t!=null&&!xy.has(t)?(_t(!1,`"${t}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Po}"`),null):t}function yy(t,r){let i,o,l,c,u;if(fy(t)){let h=t.getAttribute("action");o=h?dn(h,r):null,i=t.getAttribute("method")||No,l=cu(t.getAttribute("enctype"))||Po,c=new FormData(t)}else if(dy(t)||py(t)&&(t.type==="submit"||t.type==="image")){let h=t.form;if(h==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let m=t.getAttribute("formaction")||h.getAttribute("action");if(o=m?dn(m,r):null,i=t.getAttribute("formmethod")||h.getAttribute("method")||No,l=cu(t.getAttribute("formenctype"))||cu(h.getAttribute("enctype"))||Po,c=new FormData(h,t),!vy()){let{name:g,type:v,value:x}=t;if(v==="image"){let w=g?`${g}.`:"";c.append(`${w}x`,"0"),c.append(`${w}y`,"0")}else g&&c.append(g,x)}}else{if(Jo(t))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');i=No,o=null,l=Po,u=t}return c&&l==="text/plain"&&(u=c,c=void 0),{action:o,method:i.toLowerCase(),encType:l,formData:c,body:u}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function nc(t,r){if(t===!1||t===null||typeof t>"u")throw new Error(r)}function Qm(t,r,i,o){let l=typeof t=="string"?new URL(t,typeof window>"u"?"server://singlefetch/":window.location.origin):t;return i?l.pathname.endsWith("/")?l.pathname=`${l.pathname}_.${o}`:l.pathname=`${l.pathname}.${o}`:l.pathname==="/"?l.pathname=`_root.${o}`:r&&dn(l.pathname,r)==="/"?l.pathname=`${Vo(r)}/_root.${o}`:l.pathname=`${Vo(l.pathname)}.${o}`,l}async function wy(t,r){if(t.id in r)return r[t.id];try{let i=await import(t.module);return r[t.id]=i,i}catch(i){return console.error(`Error loading route module \`${t.module}\`, reloading page...`),console.error(i),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function by(t){return t==null?!1:t.href==null?t.rel==="preload"&&typeof t.imageSrcSet=="string"&&typeof t.imageSizes=="string":typeof t.rel=="string"&&typeof t.href=="string"}async function ky(t,r,i){let o=await Promise.all(t.map(async l=>{let c=r.routes[l.route.id];if(c){let u=await wy(c,i);return u.links?u.links():[]}return[]}));return Ey(o.flat(1).filter(by).filter(l=>l.rel==="stylesheet"||l.rel==="preload").map(l=>l.rel==="stylesheet"?{...l,rel:"prefetch",as:"style"}:{...l,rel:"prefetch"}))}function ih(t,r,i,o,l,c){let u=(m,g)=>i[g]?m.route.id!==i[g].route.id:!0,h=(m,g)=>{var v;return i[g].pathname!==m.pathname||((v=i[g].route.path)==null?void 0:v.endsWith("*"))&&i[g].params["*"]!==m.params["*"]};return c==="assets"?r.filter((m,g)=>u(m,g)||h(m,g)):c==="data"?r.filter((m,g)=>{var x;let v=o.routes[m.route.id];if(!v||!v.hasLoader)return!1;if(u(m,g)||h(m,g))return!0;if(m.route.shouldRevalidate){let w=m.route.shouldRevalidate({currentUrl:new URL(l.pathname+l.search+l.hash,window.origin),currentParams:((x=i[0])==null?void 0:x.params)||{},nextUrl:new URL(t,window.origin),nextParams:m.params,defaultShouldRevalidate:!0});if(typeof w=="boolean")return w}return!0}):[]}function Sy(t,r,{includeHydrateFallback:i}={}){return jy(t.map(o=>{let l=r.routes[o.route.id];if(!l)return[];let c=[l.module];return l.clientActionModule&&(c=c.concat(l.clientActionModule)),l.clientLoaderModule&&(c=c.concat(l.clientLoaderModule)),i&&l.hydrateFallbackModule&&(c=c.concat(l.hydrateFallbackModule)),l.imports&&(c=c.concat(l.imports)),c}).flat(1))}function jy(t){return[...new Set(t)]}function Cy(t){let r={},i=Object.keys(t).sort();for(let o of i)r[o]=t[o];return r}function Ey(t,r){let i=new Set;return new Set(r),t.reduce((o,l)=>{let c=JSON.stringify(Cy(l));return i.has(c)||(i.add(c),o.push({key:c,link:l})),o},[])}function rc(){let t=b.useContext(Br);return nc(t,"You must render this element inside a <DataRouterContext.Provider> element"),t}function Ny(){let t=b.useContext(Zo);return nc(t,"You must render this element inside a <DataRouterStateContext.Provider> element"),t}var ic=b.createContext(void 0);ic.displayName="FrameworkContext";function sc(){let t=b.useContext(ic);return nc(t,"You must render this element inside a <HydratedRouter> element"),t}function Py(t,r){let i=b.useContext(ic),[o,l]=b.useState(!1),[c,u]=b.useState(!1),{onFocus:h,onBlur:m,onMouseEnter:g,onMouseLeave:v,onTouchStart:x}=r,w=b.useRef(null);b.useEffect(()=>{if(t==="render"&&u(!0),t==="viewport"){let N=A=>{A.forEach(D=>{u(D.isIntersecting)})},E=new IntersectionObserver(N,{threshold:.5});return w.current&&E.observe(w.current),()=>{E.disconnect()}}},[t]),b.useEffect(()=>{if(o){let N=setTimeout(()=>{u(!0)},100);return()=>{clearTimeout(N)}}},[o]);let S=()=>{l(!0)},j=()=>{l(!1),u(!1)};return i?t!=="intent"?[c,w,{}]:[c,w,{onFocus:Mi(h,S),onBlur:Mi(m,j),onMouseEnter:Mi(g,S),onMouseLeave:Mi(v,j),onTouchStart:Mi(x,S)}]:[!1,w,{}]}function Mi(t,r){return i=>{t&&t(i),i.defaultPrevented||r(i)}}function Ty({page:t,...r}){let i=Ox(),{router:o}=rc(),l=b.useMemo(()=>Lm(o.routes,t,o.basename),[o.routes,t,o.basename]);return l?i?b.createElement(Ay,{page:t,matches:l,...r}):b.createElement(_y,{page:t,matches:l,...r}):null}function Ry(t){let{manifest:r,routeModules:i}=sc(),[o,l]=b.useState([]);return b.useEffect(()=>{let c=!1;return ky(t,r,i).then(u=>{c||l(u)}),()=>{c=!0}},[t,r,i]),o}function Ay({page:t,matches:r,...i}){let o=St(),{future:l}=sc(),{basename:c}=rc(),u=b.useMemo(()=>{if(t===o.pathname+o.search+o.hash)return[];let h=Qm(t,c,l.unstable_trailingSlashAwareDataRequests,"rsc"),m=!1,g=[];for(let v of r)typeof v.route.shouldRevalidate=="function"?m=!0:g.push(v.route.id);return m&&g.length>0&&h.searchParams.set("_routes",g.join(",")),[h.pathname+h.search]},[c,l.unstable_trailingSlashAwareDataRequests,t,o,r]);return b.createElement(b.Fragment,null,u.map(h=>b.createElement("link",{key:h,rel:"prefetch",as:"fetch",href:h,...i})))}function _y({page:t,matches:r,...i}){let o=St(),{future:l,manifest:c,routeModules:u}=sc(),{basename:h}=rc(),{loaderData:m,matches:g}=Ny(),v=b.useMemo(()=>ih(t,r,g,c,o,"data"),[t,r,g,c,o]),x=b.useMemo(()=>ih(t,r,g,c,o,"assets"),[t,r,g,c,o]),w=b.useMemo(()=>{if(t===o.pathname+o.search+o.hash)return[];let N=new Set,E=!1;if(r.forEach(D=>{var z;let _=c.routes[D.route.id];!_||!_.hasLoader||(!v.some(I=>I.route.id===D.route.id)&&D.route.id in m&&((z=u[D.route.id])!=null&&z.shouldRevalidate)||_.hasClientLoader?E=!0:N.add(D.route.id))}),N.size===0)return[];let A=Qm(t,h,l.unstable_trailingSlashAwareDataRequests,"data");return E&&N.size>0&&A.searchParams.set("_routes",r.filter(D=>N.has(D.route.id)).map(D=>D.route.id).join(",")),[A.pathname+A.search]},[h,l.unstable_trailingSlashAwareDataRequests,m,o,c,v,r,t,u]),S=b.useMemo(()=>Sy(x,c),[x,c]),j=Ry(x);return b.createElement(b.Fragment,null,w.map(N=>b.createElement("link",{key:N,rel:"prefetch",as:"fetch",href:N,...i})),S.map(N=>b.createElement("link",{key:N,rel:"modulepreload",href:N,...i})),j.map(({key:N,link:E})=>b.createElement("link",{key:N,nonce:i.nonce,...E,crossOrigin:E.crossOrigin??i.crossOrigin})))}function My(...t){return r=>{t.forEach(i=>{typeof i=="function"?i(r):i!=null&&(i.current=r)})}}var Ly=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{Ly&&(window.__reactRouterVersion="7.15.1")}catch{}function Dy({basename:t,children:r,useTransitions:i,window:o}){let l=b.useRef();l.current==null&&(l.current=cx({window:o,v5Compat:!0}));let c=l.current,[u,h]=b.useState({action:c.action,location:c.location}),m=b.useCallback(g=>{i===!1?h(g):b.startTransition(()=>h(g))},[i]);return b.useLayoutEffect(()=>c.listen(m),[c,m]),b.createElement(uy,{basename:t,children:r,location:u.location,navigationType:u.action,navigator:c,useTransitions:i})}var qm=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,xe=b.forwardRef(function({onClick:r,discover:i="render",prefetch:o="none",relative:l,reloadDocument:c,replace:u,mask:h,state:m,target:g,to:v,preventScrollReset:x,viewTransition:w,defaultShouldRevalidate:S,...j},N){let{basename:E,navigator:A,useTransitions:D}=b.useContext(kt),_=typeof v=="string"&&qm.test(v),z=Fm(v,E);v=z.to;let I=Hx(v,{relative:l}),G=St(),ne=null;if(h){let Ve=qo(h,[],G.mask?G.mask.pathname:"/",!0);E!=="/"&&(Ve.pathname=Ve.pathname==="/"?E:$t([E,Ve.pathname])),ne=A.createHref(Ve)}let[Q,he,ye]=Py(o,j),Ze=Oy(v,{replace:u,mask:h,state:m,target:g,preventScrollReset:x,relative:l,viewTransition:w,defaultShouldRevalidate:S,useTransitions:D});function it(Ve){r&&r(Ve),Ve.defaultPrevented||Ze(Ve)}let Ue=!(z.isExternal||c),Xe=b.createElement("a",{...j,...ye,href:(Ue?ne:void 0)||z.absoluteURL||I,onClick:Ue?it:r,ref:My(N,he),target:g,"data-discover":!_&&i==="render"?"true":void 0});return Q&&!_?b.createElement(b.Fragment,null,Xe,b.createElement(Ty,{page:I})):Xe});xe.displayName="Link";var oc=b.forwardRef(function({"aria-current":r="page",caseSensitive:i=!1,className:o="",end:l=!1,style:c,to:u,viewTransition:h,children:m,...g},v){let x=Ji(u,{relative:g.relative}),w=St(),S=b.useContext(Zo),{navigator:j,basename:N}=b.useContext(kt),E=S!=null&&Wy(x)&&h===!0,A=j.encodeLocation?j.encodeLocation(x).pathname:x.pathname,D=w.pathname,_=S&&S.navigation&&S.navigation.location?S.navigation.location.pathname:null;i||(D=D.toLowerCase(),_=_?_.toLowerCase():null,A=A.toLowerCase()),_&&N&&(_=dn(_,N)||_);const z=A!=="/"&&A.endsWith("/")?A.length-1:A.length;let I=D===A||!l&&D.startsWith(A)&&D.charAt(z)==="/",G=_!=null&&(_===A||!l&&_.startsWith(A)&&_.charAt(A.length)==="/"),ne={isActive:I,isPending:G,isTransitioning:E},Q=I?r:void 0,he;typeof o=="function"?he=o(ne):he=[o,I?"active":null,G?"pending":null,E?"transitioning":null].filter(Boolean).join(" ");let ye=typeof c=="function"?c(ne):c;return b.createElement(xe,{...g,"aria-current":Q,className:he,ref:v,style:ye,to:u,viewTransition:h},typeof m=="function"?m(ne):m)});oc.displayName="NavLink";var zy=b.forwardRef(({discover:t="render",fetcherKey:r,navigate:i,reloadDocument:o,replace:l,state:c,method:u=No,action:h,onSubmit:m,relative:g,preventScrollReset:v,viewTransition:x,defaultShouldRevalidate:w,...S},j)=>{let{useTransitions:N}=b.useContext(kt),E=$y(),A=Uy(h,{relative:g}),D=u.toLowerCase()==="get"?"get":"post",_=typeof h=="string"&&qm.test(h),z=I=>{if(m&&m(I),I.defaultPrevented)return;I.preventDefault();let G=I.nativeEvent.submitter,ne=(G==null?void 0:G.getAttribute("formmethod"))||u,Q=()=>E(G||I.currentTarget,{fetcherKey:r,method:ne,navigate:i,replace:l,state:c,relative:g,preventScrollReset:v,viewTransition:x,defaultShouldRevalidate:w});N&&i!==!1?b.startTransition(()=>Q()):Q()};return b.createElement("form",{ref:j,method:D,action:A,onSubmit:o?m:z,...S,"data-discover":!_&&t==="render"?"true":void 0})});zy.displayName="Form";function Vy(t){return`${t} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Zm(t){let r=b.useContext(Br);return Ee(r,Vy(t)),r}function Oy(t,{target:r,replace:i,mask:o,state:l,preventScrollReset:c,relative:u,viewTransition:h,defaultShouldRevalidate:m,useTransitions:g}={}){let v=sr(),x=St(),w=Ji(t,{relative:u});return b.useCallback(S=>{if(my(S,r)){S.preventDefault();let j=i!==void 0?i:Gi(x)===Gi(w),N=()=>v(t,{replace:j,mask:o,state:l,preventScrollReset:c,relative:u,viewTransition:h,defaultShouldRevalidate:m});g?b.startTransition(()=>N()):N()}},[x,v,w,i,o,l,r,t,c,u,h,m,g])}function Fy(t){_t(typeof URLSearchParams<"u","You cannot use the `useSearchParams` hook in a browser that does not support the URLSearchParams API. If you need to support Internet Explorer 11, we recommend you load a polyfill such as https://github.com/ungap/url-search-params.");let r=b.useRef(Au(t)),i=b.useRef(!1),o=St(),l=b.useMemo(()=>gy(o.search,i.current?null:r.current),[o.search]),c=sr(),u=b.useCallback((h,m)=>{const g=Au(typeof h=="function"?h(new URLSearchParams(l)):h);i.current=!0,c("?"+g,m)},[c,l]);return[l,u]}var Iy=0,By=()=>`__${String(++Iy)}__`;function $y(){let{router:t}=Zm("useSubmit"),{basename:r}=b.useContext(kt),i=sy(),o=t.fetch,l=t.navigate;return b.useCallback(async(c,u={})=>{let{action:h,method:m,encType:g,formData:v,body:x}=yy(c,r);if(u.navigate===!1){let w=u.fetcherKey||By();await o(w,i,u.action||h,{defaultShouldRevalidate:u.defaultShouldRevalidate,preventScrollReset:u.preventScrollReset,formData:v,body:x,formMethod:u.method||m,formEncType:u.encType||g,flushSync:u.flushSync})}else await l(u.action||h,{defaultShouldRevalidate:u.defaultShouldRevalidate,preventScrollReset:u.preventScrollReset,formData:v,body:x,formMethod:u.method||m,formEncType:u.encType||g,replace:u.replace,state:u.state,fromRouteId:i,flushSync:u.flushSync,viewTransition:u.viewTransition})},[o,l,r,i])}function Uy(t,{relative:r}={}){let{basename:i}=b.useContext(kt),o=b.useContext(Mt);Ee(o,"useFormAction must be used inside a RouteContext");let[l]=o.matches.slice(-1),c={...Ji(t||".",{relative:r})},u=St();if(t==null){c.search=u.search;let h=new URLSearchParams(c.search),m=h.getAll("index");if(m.some(v=>v==="")){h.delete("index"),m.filter(x=>x).forEach(x=>h.append("index",x));let v=h.toString();c.search=v?`?${v}`:""}}return(!t||t===".")&&l.route.index&&(c.search=c.search?c.search.replace(/^\?/,"?index&"):"?index"),i!=="/"&&(c.pathname=c.pathname==="/"?i:$t([i,c.pathname])),Gi(c)}function Wy(t,{relative:r}={}){let i=b.useContext($m);Ee(i!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:o}=Zm("useViewTransitionState"),l=Ji(t,{relative:r});if(!i.isTransitioning)return!1;let c=dn(i.currentLocation.pathname,o)||i.currentLocation.pathname,u=dn(i.nextLocation.pathname,o)||i.nextLocation.pathname;return zo(l.pathname,u)!=null||zo(l.pathname,c)!=null}let Hy={data:""},Ky=t=>{if(typeof window=="object"){let r=(t?t.querySelector("#_goober"):window._goober)||Object.assign(document.createElement("style"),{innerHTML:" ",id:"_goober"});return r.nonce=window.__nonce__,r.parentNode||(t||document.head).appendChild(r),r.firstChild}return t||Hy},Gy=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,Yy=/\/\*[^]*?\*\/|  +/g,sh=/\n+/g,Dn=(t,r)=>{let i="",o="",l="";for(let c in t){let u=t[c];c[0]=="@"?c[1]=="i"?i=c+" "+u+";":o+=c[1]=="f"?Dn(u,c):c+"{"+Dn(u,c[1]=="k"?"":r)+"}":typeof u=="object"?o+=Dn(u,r?r.replace(/([^,])+/g,h=>c.replace(/([^,]*:\S+\([^)]*\))|([^,])+/g,m=>/&/.test(m)?m.replace(/&/g,h):h?h+" "+m:m)):c):u!=null&&(c=c[1]=="-"?c:c.replace(/[A-Z]/g,"-$&").toLowerCase(),l+=Dn.p?Dn.p(c,u):c+":"+u+";")}return i+(r&&l?r+"{"+l+"}":l)+o},_n={},Jm=t=>{if(typeof t=="object"){let r="";for(let i in t)r+=i+Jm(t[i]);return r}return t},Xy=(t,r,i,o,l)=>{let c=Jm(t),u=_n[c]||(_n[c]=(m=>{let g=0,v=11;for(;g<m.length;)v=101*v+m.charCodeAt(g++)>>>0;return"go"+v})(c));if(!_n[u]){let m=c!==t?t:(g=>{let v,x,w=[{}];for(;v=Gy.exec(g.replace(Yy,""));)v[4]?w.shift():v[3]?(x=v[3].replace(sh," ").trim(),w.unshift(w[0][x]=w[0][x]||{})):w[0][v[1]]=v[2].replace(sh," ").trim();return w[0]})(t);_n[u]=Dn(l?{["@keyframes "+u]:m}:m,i?"":"."+u)}let h=i&&_n.g;return i&&(_n.g=_n[u]),((m,g,v,x)=>{x?g.data=g.data.replace(x,m):g.data.indexOf(m)===-1&&(g.data=v?m+g.data:g.data+m)})(_n[u],r,o,h),u},Qy=(t,r,i)=>t.reduce((o,l,c)=>{let u=r[c];if(u&&u.call){let h=u(i),m=h&&h.props&&h.props.className||/^go/.test(h)&&h;u=m?"."+m:h&&typeof h=="object"?h.props?"":Dn(h,""):h===!1?"":h}return o+l+(u??"")},"");function ea(t){let r=this||{},i=t.call?t(r.p):t;return Xy(i.unshift?i.raw?Qy(i,[].slice.call(arguments,1),r.p):i.reduce((o,l)=>Object.assign(o,l&&l.call?l(r.p):l),{}):i,Ky(r.target),r.g,r.o,r.k)}let e0,_u,Mu;ea.bind({g:1});let fn=ea.bind({k:1});function qy(t,r,i,o){Dn.p=r,e0=t,_u=i,Mu=o}function Vn(t,r){let i=this||{};return function(){let o=arguments;function l(c,u){let h=Object.assign({},c),m=h.className||l.className;i.p=Object.assign({theme:_u&&_u()},h),i.o=/go\d/.test(m),h.className=ea.apply(i,o)+(m?" "+m:"");let g=t;return t[0]&&(g=h.as||t,delete h.as),Mu&&g[0]&&Mu(h),e0(g,h)}return l}}var Zy=t=>typeof t=="function",Fo=(t,r)=>Zy(t)?t(r):t,Jy=(()=>{let t=0;return()=>(++t).toString()})(),t0=(()=>{let t;return()=>{if(t===void 0&&typeof window<"u"){let r=matchMedia("(prefers-reduced-motion: reduce)");t=!r||r.matches}return t}})(),e2=20,ac="default",n0=(t,r)=>{let{toastLimit:i}=t.settings;switch(r.type){case 0:return{...t,toasts:[r.toast,...t.toasts].slice(0,i)};case 1:return{...t,toasts:t.toasts.map(u=>u.id===r.toast.id?{...u,...r.toast}:u)};case 2:let{toast:o}=r;return n0(t,{type:t.toasts.find(u=>u.id===o.id)?1:0,toast:o});case 3:let{toastId:l}=r;return{...t,toasts:t.toasts.map(u=>u.id===l||l===void 0?{...u,dismissed:!0,visible:!1}:u)};case 4:return r.toastId===void 0?{...t,toasts:[]}:{...t,toasts:t.toasts.filter(u=>u.id!==r.toastId)};case 5:return{...t,pausedAt:r.time};case 6:let c=r.time-(t.pausedAt||0);return{...t,pausedAt:void 0,toasts:t.toasts.map(u=>({...u,pauseDuration:u.pauseDuration+c}))}}},To=[],r0={toasts:[],pausedAt:void 0,settings:{toastLimit:e2}},Xt={},i0=(t,r=ac)=>{Xt[r]=n0(Xt[r]||r0,t),To.forEach(([i,o])=>{i===r&&o(Xt[r])})},s0=t=>Object.keys(Xt).forEach(r=>i0(t,r)),t2=t=>Object.keys(Xt).find(r=>Xt[r].toasts.some(i=>i.id===t)),ta=(t=ac)=>r=>{i0(r,t)},n2={blank:4e3,error:4e3,success:2e3,loading:1/0,custom:4e3},r2=(t={},r=ac)=>{let[i,o]=b.useState(Xt[r]||r0),l=b.useRef(Xt[r]);b.useEffect(()=>(l.current!==Xt[r]&&o(Xt[r]),To.push([r,o]),()=>{let u=To.findIndex(([h])=>h===r);u>-1&&To.splice(u,1)}),[r]);let c=i.toasts.map(u=>{var h,m,g;return{...t,...t[u.type],...u,removeDelay:u.removeDelay||((h=t[u.type])==null?void 0:h.removeDelay)||(t==null?void 0:t.removeDelay),duration:u.duration||((m=t[u.type])==null?void 0:m.duration)||(t==null?void 0:t.duration)||n2[u.type],style:{...t.style,...(g=t[u.type])==null?void 0:g.style,...u.style}}});return{...i,toasts:c}},i2=(t,r="blank",i)=>({createdAt:Date.now(),visible:!0,dismissed:!1,type:r,ariaProps:{role:"status","aria-live":"polite"},message:t,pauseDuration:0,...i,id:(i==null?void 0:i.id)||Jy()}),es=t=>(r,i)=>{let o=i2(r,t,i);return ta(o.toasterId||t2(o.id))({type:2,toast:o}),o.id},$e=(t,r)=>es("blank")(t,r);$e.error=es("error");$e.success=es("success");$e.loading=es("loading");$e.custom=es("custom");$e.dismiss=(t,r)=>{let i={type:3,toastId:t};r?ta(r)(i):s0(i)};$e.dismissAll=t=>$e.dismiss(void 0,t);$e.remove=(t,r)=>{let i={type:4,toastId:t};r?ta(r)(i):s0(i)};$e.removeAll=t=>$e.remove(void 0,t);$e.promise=(t,r,i)=>{let o=$e.loading(r.loading,{...i,...i==null?void 0:i.loading});return typeof t=="function"&&(t=t()),t.then(l=>{let c=r.success?Fo(r.success,l):void 0;return c?$e.success(c,{id:o,...i,...i==null?void 0:i.success}):$e.dismiss(o),l}).catch(l=>{let c=r.error?Fo(r.error,l):void 0;c?$e.error(c,{id:o,...i,...i==null?void 0:i.error}):$e.dismiss(o)}),t};var s2=1e3,o2=(t,r="default")=>{let{toasts:i,pausedAt:o}=r2(t,r),l=b.useRef(new Map).current,c=b.useCallback((x,w=s2)=>{if(l.has(x))return;let S=setTimeout(()=>{l.delete(x),u({type:4,toastId:x})},w);l.set(x,S)},[]);b.useEffect(()=>{if(o)return;let x=Date.now(),w=i.map(S=>{if(S.duration===1/0)return;let j=(S.duration||0)+S.pauseDuration-(x-S.createdAt);if(j<0){S.visible&&$e.dismiss(S.id);return}return setTimeout(()=>$e.dismiss(S.id,r),j)});return()=>{w.forEach(S=>S&&clearTimeout(S))}},[i,o,r]);let u=b.useCallback(ta(r),[r]),h=b.useCallback(()=>{u({type:5,time:Date.now()})},[u]),m=b.useCallback((x,w)=>{u({type:1,toast:{id:x,height:w}})},[u]),g=b.useCallback(()=>{o&&u({type:6,time:Date.now()})},[o,u]),v=b.useCallback((x,w)=>{let{reverseOrder:S=!1,gutter:j=8,defaultPosition:N}=w||{},E=i.filter(_=>(_.position||N)===(x.position||N)&&_.height),A=E.findIndex(_=>_.id===x.id),D=E.filter((_,z)=>z<A&&_.visible).length;return E.filter(_=>_.visible).slice(...S?[D+1]:[0,D]).reduce((_,z)=>_+(z.height||0)+j,0)},[i]);return b.useEffect(()=>{i.forEach(x=>{if(x.dismissed)c(x.id,x.removeDelay);else{let w=l.get(x.id);w&&(clearTimeout(w),l.delete(x.id))}})},[i,c]),{toasts:i,handlers:{updateHeight:m,startPause:h,endPause:g,calculateOffset:v}}},a2=fn`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
 transform: scale(1) rotate(45deg);
  opacity: 1;
}`,l2=fn`
from {
  transform: scale(0);
  opacity: 0;
}
to {
  transform: scale(1);
  opacity: 1;
}`,u2=fn`
from {
  transform: scale(0) rotate(90deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(90deg);
	opacity: 1;
}`,c2=Vn("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${t=>t.primary||"#ff4b4b"};
  position: relative;
  transform: rotate(45deg);

  animation: ${a2} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;

  &:after,
  &:before {
    content: '';
    animation: ${l2} 0.15s ease-out forwards;
    animation-delay: 150ms;
    position: absolute;
    border-radius: 3px;
    opacity: 0;
    background: ${t=>t.secondary||"#fff"};
    bottom: 9px;
    left: 4px;
    height: 2px;
    width: 12px;
  }

  &:before {
    animation: ${u2} 0.15s ease-out forwards;
    animation-delay: 180ms;
    transform: rotate(90deg);
  }
`,d2=fn`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`,f2=Vn("div")`
  width: 12px;
  height: 12px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: ${t=>t.secondary||"#e0e0e0"};
  border-right-color: ${t=>t.primary||"#616161"};
  animation: ${d2} 1s linear infinite;
`,p2=fn`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(45deg);
	opacity: 1;
}`,h2=fn`
0% {
	height: 0;
	width: 0;
	opacity: 0;
}
40% {
  height: 0;
	width: 6px;
	opacity: 1;
}
100% {
  opacity: 1;
  height: 10px;
}`,m2=Vn("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${t=>t.primary||"#61d345"};
  position: relative;
  transform: rotate(45deg);

  animation: ${p2} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;
  &:after {
    content: '';
    box-sizing: border-box;
    animation: ${h2} 0.2s ease-out forwards;
    opacity: 0;
    animation-delay: 200ms;
    position: absolute;
    border-right: 2px solid;
    border-bottom: 2px solid;
    border-color: ${t=>t.secondary||"#fff"};
    bottom: 6px;
    left: 6px;
    height: 10px;
    width: 6px;
  }
`,g2=Vn("div")`
  position: absolute;
`,v2=Vn("div")`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 20px;
  min-height: 20px;
`,x2=fn`
from {
  transform: scale(0.6);
  opacity: 0.4;
}
to {
  transform: scale(1);
  opacity: 1;
}`,y2=Vn("div")`
  position: relative;
  transform: scale(0.6);
  opacity: 0.4;
  min-width: 20px;
  animation: ${x2} 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
`,w2=({toast:t})=>{let{icon:r,type:i,iconTheme:o}=t;return r!==void 0?typeof r=="string"?b.createElement(y2,null,r):r:i==="blank"?null:b.createElement(v2,null,b.createElement(f2,{...o}),i!=="loading"&&b.createElement(g2,null,i==="error"?b.createElement(c2,{...o}):b.createElement(m2,{...o})))},b2=t=>`
0% {transform: translate3d(0,${t*-200}%,0) scale(.6); opacity:.5;}
100% {transform: translate3d(0,0,0) scale(1); opacity:1;}
`,k2=t=>`
0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}
100% {transform: translate3d(0,${t*-150}%,-1px) scale(.6); opacity:0;}
`,S2="0%{opacity:0;} 100%{opacity:1;}",j2="0%{opacity:1;} 100%{opacity:0;}",C2=Vn("div")`
  display: flex;
  align-items: center;
  background: #fff;
  color: #363636;
  line-height: 1.3;
  will-change: transform;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1), 0 3px 3px rgba(0, 0, 0, 0.05);
  max-width: 350px;
  pointer-events: auto;
  padding: 8px 10px;
  border-radius: 8px;
`,E2=Vn("div")`
  display: flex;
  justify-content: center;
  margin: 4px 10px;
  color: inherit;
  flex: 1 1 auto;
  white-space: pre-line;
`,N2=(t,r)=>{let i=t.includes("top")?1:-1,[o,l]=t0()?[S2,j2]:[b2(i),k2(i)];return{animation:r?`${fn(o)} 0.35s cubic-bezier(.21,1.02,.73,1) forwards`:`${fn(l)} 0.4s forwards cubic-bezier(.06,.71,.55,1)`}},P2=b.memo(({toast:t,position:r,style:i,children:o})=>{let l=t.height?N2(t.position||r||"top-center",t.visible):{opacity:0},c=b.createElement(w2,{toast:t}),u=b.createElement(E2,{...t.ariaProps},Fo(t.message,t));return b.createElement(C2,{className:t.className,style:{...l,...i,...t.style}},typeof o=="function"?o({icon:c,message:u}):b.createElement(b.Fragment,null,c,u))});qy(b.createElement);var T2=({id:t,className:r,style:i,onHeightUpdate:o,children:l})=>{let c=b.useCallback(u=>{if(u){let h=()=>{let m=u.getBoundingClientRect().height;o(t,m)};h(),new MutationObserver(h).observe(u,{subtree:!0,childList:!0,characterData:!0})}},[t,o]);return b.createElement("div",{ref:c,className:r,style:i},l)},R2=(t,r)=>{let i=t.includes("top"),o=i?{top:0}:{bottom:0},l=t.includes("center")?{justifyContent:"center"}:t.includes("right")?{justifyContent:"flex-end"}:{};return{left:0,right:0,display:"flex",position:"absolute",transition:t0()?void 0:"all 230ms cubic-bezier(.21,1.02,.73,1)",transform:`translateY(${r*(i?1:-1)}px)`,...o,...l}},A2=ea`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`,ko=16,_2=({reverseOrder:t,position:r="top-center",toastOptions:i,gutter:o,children:l,toasterId:c,containerStyle:u,containerClassName:h})=>{let{toasts:m,handlers:g}=o2(i,c);return b.createElement("div",{"data-rht-toaster":c||"",style:{position:"fixed",zIndex:9999,top:ko,left:ko,right:ko,bottom:ko,pointerEvents:"none",...u},className:h,onMouseEnter:g.startPause,onMouseLeave:g.endPause},m.map(v=>{let x=v.position||r,w=g.calculateOffset(v,{reverseOrder:t,gutter:o,defaultPosition:r}),S=R2(x,w);return b.createElement(T2,{id:v.id,key:v.id,onHeightUpdate:g.updateHeight,className:v.visible?A2:"",style:S},v.type==="custom"?Fo(v.message,v):l?l(v):b.createElement(P2,{toast:v,position:x}))}))},Me=$e;/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const M2=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),o0=(...t)=>t.filter((r,i,o)=>!!r&&r.trim()!==""&&o.indexOf(r)===i).join(" ").trim();/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var L2={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const D2=b.forwardRef(({color:t="currentColor",size:r=24,strokeWidth:i=2,absoluteStrokeWidth:o,className:l="",children:c,iconNode:u,...h},m)=>b.createElement("svg",{ref:m,...L2,width:r,height:r,stroke:t,strokeWidth:o?Number(i)*24/Number(r):i,className:o0("lucide",l),...h},[...u.map(([g,v])=>b.createElement(g,v)),...Array.isArray(c)?c:[c]]));/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ie=(t,r)=>{const i=b.forwardRef(({className:o,...l},c)=>b.createElement(D2,{ref:c,iconNode:r,className:o0(`lucide-${M2(t)}`,o),...l}));return i.displayName=`${t}`,i};/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oh=ie("ArrowRight",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const z2=ie("Boxes",[["path",{d:"M2.97 12.92A2 2 0 0 0 2 14.63v3.24a2 2 0 0 0 .97 1.71l3 1.8a2 2 0 0 0 2.06 0L12 19v-5.5l-5-3-4.03 2.42Z",key:"lc1i9w"}],["path",{d:"m7 16.5-4.74-2.85",key:"1o9zyk"}],["path",{d:"m7 16.5 5-3",key:"va8pkn"}],["path",{d:"M7 16.5v5.17",key:"jnp8gn"}],["path",{d:"M12 13.5V19l3.97 2.38a2 2 0 0 0 2.06 0l3-1.8a2 2 0 0 0 .97-1.71v-3.24a2 2 0 0 0-.97-1.71L17 10.5l-5 3Z",key:"8zsnat"}],["path",{d:"m17 16.5-5-3",key:"8arw3v"}],["path",{d:"m17 16.5 4.74-2.85",key:"8rfmw"}],["path",{d:"M17 16.5v5.17",key:"k6z78m"}],["path",{d:"M7.97 4.42A2 2 0 0 0 7 6.13v4.37l5 3 5-3V6.13a2 2 0 0 0-.97-1.71l-3-1.8a2 2 0 0 0-2.06 0l-3 1.8Z",key:"1xygjf"}],["path",{d:"M12 8 7.26 5.15",key:"1vbdud"}],["path",{d:"m12 8 4.74-2.85",key:"3rx089"}],["path",{d:"M12 13.5V8",key:"1io7kd"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const a0=ie("ChartNoAxesCombined",[["path",{d:"M12 16v5",key:"zza2cw"}],["path",{d:"M16 14v7",key:"1g90b9"}],["path",{d:"M20 10v11",key:"1iqoj0"}],["path",{d:"m22 3-8.646 8.646a.5.5 0 0 1-.708 0L9.354 8.354a.5.5 0 0 0-.707 0L2 15",key:"1fw8x9"}],["path",{d:"M4 18v3",key:"1yp0dc"}],["path",{d:"M8 14v7",key:"n3cwzv"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const V2=ie("ChevronDown",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ro=ie("ChevronRight",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const O2=ie("Cpu",[["rect",{width:"16",height:"16",x:"4",y:"4",rx:"2",key:"14l7u7"}],["rect",{width:"6",height:"6",x:"9",y:"9",rx:"1",key:"5aljv4"}],["path",{d:"M15 2v2",key:"13l42r"}],["path",{d:"M15 20v2",key:"15mkzm"}],["path",{d:"M2 15h2",key:"1gxd5l"}],["path",{d:"M2 9h2",key:"1bbxkp"}],["path",{d:"M20 15h2",key:"19e6y8"}],["path",{d:"M20 9h2",key:"19tzq7"}],["path",{d:"M9 2v2",key:"165o2o"}],["path",{d:"M9 20v2",key:"i2bqo8"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const F2=ie("Github",[["path",{d:"M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4",key:"tonef"}],["path",{d:"M9 18c-4.51 2-5-2-7-2",key:"9comsn"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const l0=ie("Headphones",[["path",{d:"M3 14h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7a9 9 0 0 1 18 0v7a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3",key:"1xhozi"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lc=ie("Heart",[["path",{d:"M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z",key:"c3ymky"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const u0=ie("House",[["path",{d:"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8",key:"5wwlr5"}],["path",{d:"M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",key:"1d0kgt"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const I2=ie("Instagram",[["rect",{width:"20",height:"20",x:"2",y:"2",rx:"5",ry:"5",key:"2e1cvw"}],["path",{d:"M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z",key:"9exkf1"}],["line",{x1:"17.5",x2:"17.51",y1:"6.5",y2:"6.5",key:"r4j83e"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const B2=ie("LayoutDashboard",[["rect",{width:"7",height:"9",x:"3",y:"3",rx:"1",key:"10lvy0"}],["rect",{width:"7",height:"5",x:"14",y:"3",rx:"1",key:"16une8"}],["rect",{width:"7",height:"9",x:"14",y:"12",rx:"1",key:"1hutg5"}],["rect",{width:"7",height:"5",x:"3",y:"16",rx:"1",key:"ldoo1y"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $2=ie("LogOut",[["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",key:"1uf3rs"}],["polyline",{points:"16 17 21 12 16 7",key:"1gabdz"}],["line",{x1:"21",x2:"9",y1:"12",y2:"12",key:"1uyos4"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const c0=ie("Mail",[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const U2=ie("MapPin",[["path",{d:"M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",key:"1r0f0z"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const W2=ie("Menu",[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const H2=ie("Minus",[["path",{d:"M5 12h14",key:"1ays0h"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const d0=ie("Monitor",[["rect",{width:"20",height:"14",x:"2",y:"3",rx:"2",key:"48i651"}],["line",{x1:"8",x2:"16",y1:"21",y2:"21",key:"1svkeh"}],["line",{x1:"12",x2:"12",y1:"17",y2:"21",key:"vw1qmm"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const K2=ie("Moon",[["path",{d:"M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z",key:"a7tn18"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const G2=ie("PackageCheck",[["path",{d:"m16 16 2 2 4-4",key:"gfu2re"}],["path",{d:"M21 10V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l2-1.14",key:"e7tb2h"}],["path",{d:"m7.5 4.27 9 5.15",key:"1c824w"}],["polyline",{points:"3.29 7 12 12 20.71 7",key:"ousv84"}],["line",{x1:"12",x2:"12",y1:"22",y2:"12",key:"a4e8g8"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Y2=ie("PackagePlus",[["path",{d:"M16 16h6",key:"100bgy"}],["path",{d:"M19 13v6",key:"85cyf1"}],["path",{d:"M21 10V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l2-1.14",key:"e7tb2h"}],["path",{d:"m7.5 4.27 9 5.15",key:"1c824w"}],["polyline",{points:"3.29 7 12 12 20.71 7",key:"ousv84"}],["line",{x1:"12",x2:"12",y1:"22",y2:"12",key:"a4e8g8"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uc=ie("Package",[["path",{d:"M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73z",key:"1a0edw"}],["path",{d:"M12 22V12",key:"d0xqtd"}],["path",{d:"m3.3 7 7.703 4.734a2 2 0 0 0 1.994 0L20.7 7",key:"yx3hmr"}],["path",{d:"m7.5 4.27 9 5.15",key:"1c824w"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const X2=ie("Phone",[["path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",key:"foiqr5"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Q2=ie("Plus",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cc=ie("Search",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const f0=ie("ShieldCheck",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dc=ie("ShoppingBag",[["path",{d:"M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z",key:"hou9p0"}],["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M16 10a4 4 0 0 1-8 0",key:"1ltviw"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const q2=ie("ShoppingCart",[["circle",{cx:"8",cy:"21",r:"1",key:"jimo8o"}],["circle",{cx:"19",cy:"21",r:"1",key:"13723u"}],["path",{d:"M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12",key:"9zh506"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Z2=ie("SlidersHorizontal",[["line",{x1:"21",x2:"14",y1:"4",y2:"4",key:"obuewd"}],["line",{x1:"10",x2:"3",y1:"4",y2:"4",key:"1q6298"}],["line",{x1:"21",x2:"12",y1:"12",y2:"12",key:"1iu8h1"}],["line",{x1:"8",x2:"3",y1:"12",y2:"12",key:"ntss68"}],["line",{x1:"21",x2:"16",y1:"20",y2:"20",key:"14d8ph"}],["line",{x1:"12",x2:"3",y1:"20",y2:"20",key:"m0wm8r"}],["line",{x1:"14",x2:"14",y1:"2",y2:"6",key:"14e1ph"}],["line",{x1:"8",x2:"8",y1:"10",y2:"14",key:"1i6ji0"}],["line",{x1:"16",x2:"16",y1:"18",y2:"22",key:"1lctlv"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const p0=ie("Smartphone",[["rect",{width:"14",height:"20",x:"5",y:"2",rx:"2",ry:"2",key:"1yt0o3"}],["path",{d:"M12 18h.01",key:"mhygvu"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const J2=ie("Sparkles",[["path",{d:"M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z",key:"4pj2yx"}],["path",{d:"M20 3v4",key:"1olli1"}],["path",{d:"M22 5h-4",key:"1gvqau"}],["path",{d:"M4 17v2",key:"vumght"}],["path",{d:"M5 18H3",key:"zchphs"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fc=ie("Star",[["path",{d:"M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z",key:"r04s7s"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ew=ie("Sun",[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tw=ie("Trash2",[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}],["line",{x1:"10",x2:"10",y1:"11",y2:"17",key:"1uufr5"}],["line",{x1:"14",x2:"14",y1:"11",y2:"17",key:"xtxkd"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const h0=ie("Truck",[["path",{d:"M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2",key:"wrbu53"}],["path",{d:"M15 18H9",key:"1lyqi6"}],["path",{d:"M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14",key:"lysw3i"}],["circle",{cx:"17",cy:"18",r:"2",key:"332jqn"}],["circle",{cx:"7",cy:"18",r:"2",key:"19iecd"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nw=ie("Twitter",[["path",{d:"M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z",key:"pff0z6"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rw=ie("UserRound",[["circle",{cx:"12",cy:"8",r:"5",key:"1hypcn"}],["path",{d:"M20 21a8 8 0 0 0-16 0",key:"rfgkzh"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ah=ie("User",[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const m0=ie("Users",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["path",{d:"M16 3.13a4 4 0 0 1 0 7.75",key:"1da9ce"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const g0=ie("Watch",[["circle",{cx:"12",cy:"12",r:"6",key:"1vlfrh"}],["polyline",{points:"12 10 12 12 13 13",key:"19dquz"}],["path",{d:"m16.13 7.66-.81-4.05a2 2 0 0 0-2-1.61h-2.68a2 2 0 0 0-2 1.61l-.78 4.05",key:"18k57s"}],["path",{d:"m7.88 16.36.8 4a2 2 0 0 0 2 1.61h2.72a2 2 0 0 0 2-1.61l.81-4.05",key:"16ny36"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const iw=ie("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sw=ie("Youtube",[["path",{d:"M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17",key:"1q2vi4"}],["path",{d:"m10 15 5-3-5-3z",key:"1jp15x"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const v0=ie("Zap",[["path",{d:"M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",key:"1xq2db"}]]),ow="/api";async function Te(t,r={}){const i=localStorage.getItem("token"),o={"Content-Type":"application/json",...r.headers};i&&(o.Authorization=`Bearer ${i}`);const l=await fetch(`${ow}${t}`,{...r,headers:o}),c=await l.json().catch(()=>({}));if(!l.ok)throw new Error(c.message||"Request failed");return c}function lt(t){return new Intl.NumberFormat("en-IN",{style:"currency",currency:"INR",maximumFractionDigits:0}).format(t||0)}const Io=[{_id:"local-1",name:"Aura Wireless Headphones",slug:"aura-wireless-headphones",category:"Electronics",subCategory:"Earbuds",price:12999,mrp:15999,rating:4.8,stock:18,featured:!0,description:"Noise cancelling headphones with plush memory foam and studio-grade warmth.",images:[{url:"https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=900&q=80"}]},{_id:"local-2",name:"Luxe Ceramic Watch",slug:"luxe-ceramic-watch",category:"Fashion",subCategory:"Watches",price:24999,mrp:31999,rating:4.7,stock:12,featured:!0,description:"Ceramic smartwatch with sapphire glass, health tracking and an elevated finish.",images:[{url:"https://images.unsplash.com/photo-1523170335258-f5ed11844a49?auto=format&fit=crop&w=900&q=80"}]},{_id:"local-3",name:"Drift Travel Backpack",slug:"drift-travel-backpack",category:"Fashion",subCategory:"Bags",price:8999,mrp:11999,rating:4.6,stock:27,featured:!0,description:"Weatherproof travel backpack with a laptop vault and premium accents.",images:[{url:"https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=900&q=80"}]}],x0=b.createContext(null);function aw({children:t}){const[r,i]=b.useState(()=>JSON.parse(localStorage.getItem("user")||"null")),[o,l]=b.useState(!1);b.useEffect(()=>{localStorage.getItem("token")&&Te("/auth/me").then(({user:g})=>{i(g),localStorage.setItem("user",JSON.stringify(g))}).catch(()=>h())},[]);async function c(g,v){l(!0);try{const x=await Te("/auth/login",{method:"POST",body:JSON.stringify({email:g,password:v})});localStorage.setItem("token",x.token),localStorage.setItem("user",JSON.stringify(x.user)),i(x.user),Me.success("Welcome back")}finally{l(!1)}}async function u(g,v,x){l(!0);try{const w=await Te("/auth/signup",{method:"POST",body:JSON.stringify({name:g,email:v,password:x})});localStorage.setItem("token",w.token),localStorage.setItem("user",JSON.stringify(w.user)),i(w.user),Me.success("Account created")}finally{l(!1)}}function h(){localStorage.removeItem("token"),localStorage.removeItem("user"),localStorage.removeItem("cart"),i(null)}const m=b.useMemo(()=>({user:r,loading:o,login:c,signup:u,logout:h,isAdmin:(r==null?void 0:r.role)==="admin"}),[r,o]);return f.jsx(x0.Provider,{value:m,children:t})}const Ur=()=>b.useContext(x0),y0=b.createContext(null);function lw({children:t}){const[r,i]=b.useState(()=>JSON.parse(localStorage.getItem("cart")||"[]"));function o(x){i(x),localStorage.setItem("cart",JSON.stringify(x))}async function l(){try{const{cart:x}=await Te("/cart");o(x.items.map(w=>({product:w.product,quantity:w.quantity})))}catch{return r}}async function c(x,w=1){const j=r.find(N=>N.product._id===x._id)?r.map(N=>N.product._id===x._id?{...N,quantity:N.quantity+w}:N):[...r,{product:x,quantity:w}];o(j),Me.success("Added to cart"),Te("/cart",{method:"POST",body:JSON.stringify({productId:x._id,quantity:w})}).catch(()=>{})}function u(x,w){const S=r.map(j=>j.product._id===x?{...j,quantity:Math.max(1,w)}:j);o(S),Te(`/cart/${x}`,{method:"PUT",body:JSON.stringify({quantity:w})}).catch(()=>{})}function h(x){o(r.filter(w=>w.product._id!==x)),Te(`/cart/${x}`,{method:"DELETE"}).catch(()=>{}),Me.success("Removed from cart")}function m(){o([]),Te("/cart",{method:"DELETE"}).catch(()=>{})}const g=r.reduce((x,w)=>x+w.product.price*w.quantity,0),v=b.useMemo(()=>({items:r,subtotal:g,add:c,update:u,remove:h,sync:l,clear:m,count:r.reduce((x,w)=>x+w.quantity,0)}),[r,g]);return f.jsx(y0.Provider,{value:v,children:t})}const ts=()=>b.useContext(y0),w0=b.createContext(null);function uw({children:t}){const[r,i]=b.useState(()=>localStorage.getItem("theme")==="dark");b.useEffect(()=>{document.documentElement.classList.toggle("dark",r),localStorage.setItem("theme",r?"dark":"light")},[r]);const o=b.useMemo(()=>({dark:r,toggleTheme:()=>i(l=>!l)}),[r]);return f.jsx(w0.Provider,{value:o,children:t})}const ns=()=>b.useContext(w0),cw="'Syne', sans-serif",dw="'DM Mono', monospace",b0=[{icon:p0,label:"Smartphones & Tablets",href:"/products?category=Phones"},{icon:d0,label:"Laptops & PC's",href:"/products?category=Computers"},{icon:l0,label:"Earbuds & Headphones",href:"/products?category=Audio"},{icon:g0,label:"Wearables",href:"/products?category=Wearables "},{icon:uc,label:"Accessories",href:"/products?category=Accessories"},{icon:u0,label:"TV's & AC's",href:"/products?category=Home Appliances"}],lh=[{label:"Home",href:"/"},{label:"Products",href:"/products"}];function fw(){return f.jsxs(xe,{to:"/",className:"logo-wrap","aria-label":"Astaria home",children:[f.jsxs("span",{className:"logo-mark","aria-hidden":"true",children:[f.jsx("span",{className:"logo-hex"}),f.jsx("span",{className:"logo-letter",children:"A"})]}),f.jsxs("span",{className:"logo-text",children:["ASTERIA",f.jsx("span",{className:"logo-dot","aria-hidden":"true",children:"●"})]})]})}function pw({open:t,setOpen:r}){const i=b.useRef(null);return b.useEffect(()=>{function o(l){i.current&&!i.current.contains(l.target)&&r(!1)}return document.addEventListener("mousedown",o),()=>document.removeEventListener("mousedown",o)},[r]),f.jsxs("div",{className:"cat-root",ref:i,children:[f.jsxs("button",{className:`cat-trigger ${t?"cat-trigger--active":""}`,onClick:()=>r(o=>!o),"aria-expanded":t,"aria-haspopup":"true",children:[f.jsx("span",{children:"Categories"}),f.jsx(V2,{size:14,className:`cat-chevron ${t?"cat-chevron--open":""}`})]}),t&&f.jsxs("div",{className:"cat-panel",role:"menu",children:[f.jsx("div",{className:"cat-panel-inner",children:b0.map(({icon:o,label:l,href:c})=>f.jsxs(xe,{to:c,className:"cat-item",role:"menuitem",onClick:()=>r(!1),children:[f.jsx("span",{className:"cat-icon-wrap","aria-hidden":"true",children:f.jsx(o,{size:16})}),f.jsx("span",{className:"cat-label",children:l}),f.jsx(Ro,{size:12,className:"cat-arrow","aria-hidden":"true"})]},c))}),f.jsx("div",{className:"cat-panel-glow","aria-hidden":"true"})]})]})}function hw({onSubmit:t,query:r,setQuery:i}){return f.jsxs("form",{className:"search-form",onSubmit:t,role:"search",children:[f.jsx(cc,{size:16,className:"search-icon","aria-hidden":"true"}),f.jsx("input",{type:"search",value:r,onChange:o=>i(o.target.value),placeholder:"Search products, brands…",className:"search-input","aria-label":"Search products"})]})}function Li({children:t,label:r,to:i,onClick:o,badge:l}){const c="icon-btn",u=f.jsxs(f.Fragment,{children:[t,l>0&&f.jsx("span",{className:"icon-badge","aria-label":`${l} items`,children:l}),f.jsx("span",{className:"sr-only",children:r})]});return i?f.jsx(xe,{to:i,className:c,"aria-label":r,children:u}):f.jsx("button",{onClick:o,className:c,"aria-label":r,children:u})}function mw(){const[t,r]=b.useState(!1),[i,o]=b.useState(!1),[l,c]=b.useState(""),[u,h]=b.useState(!1),{user:m,isAdmin:g,logout:v}=Ur(),{count:x}=ts(),{dark:w,toggleTheme:S}=ns(),j=sr();b.useEffect(()=>{const E=()=>h(window.scrollY>12);return window.addEventListener("scroll",E,{passive:!0}),()=>window.removeEventListener("scroll",E)},[]);function N(E){E.preventDefault(),l.trim()&&(j(`/products?search=${encodeURIComponent(l)}`),o(!1))}return f.jsxs(f.Fragment,{children:[f.jsx("style",{children:"@import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;500;600;700;800&family=DM+Mono:wght@400;500&display=swap');"}),f.jsxs("header",{className:`navbar ${u?"navbar--scrolled":""} ${w?"navbar--dark":""}`,"data-theme":w?"dark":"light",children:[f.jsxs("div",{className:"navbar-inner",children:[f.jsx(fw,{}),f.jsxs("nav",{className:"desktop-nav","aria-label":"Primary",children:[f.jsx(pw,{open:t,setOpen:r}),lh.map(({label:E,href:A})=>f.jsx(oc,{to:A,className:({isActive:D})=>`nav-link ${D?"nav-link--active":""}`,children:E},A))]}),f.jsx(hw,{onSubmit:N,query:l,setQuery:c}),f.jsxs("div",{className:"action-strip",children:[f.jsx(Li,{label:w?"Light mode":"Dark mode",onClick:S,children:w?f.jsx(ew,{size:18}):f.jsx(K2,{size:18})}),g&&f.jsx(Li,{label:"Admin dashboard",to:"/admin",children:f.jsx(B2,{size:18})}),f.jsx(Li,{label:"Wishlist",to:"/wishlist",children:f.jsx(lc,{size:18})}),f.jsx(Li,{label:`Cart – ${x} items`,to:"/cart",badge:x,children:f.jsx(dc,{size:18})}),m?f.jsx(Li,{label:"Your profile",to:"/profile",children:f.jsx(ah,{size:18})}):f.jsxs(xe,{to:"/login",className:"login-btn",children:[f.jsx(ah,{size:15}),f.jsx("span",{children:"Sign in"})]}),f.jsx("button",{className:"hamburger",onClick:()=>o(E=>!E),"aria-label":i?"Close menu":"Open menu","aria-expanded":i,children:i?f.jsx(iw,{size:20}):f.jsx(W2,{size:20})})]})]}),f.jsx("span",{className:"navbar-accent-line","aria-hidden":"true"})]}),f.jsxs("div",{className:`mobile-drawer ${i?"mobile-drawer--open":""} ${w?"navbar--dark":""}`,"aria-hidden":!i,children:[f.jsxs("form",{className:"mobile-search",onSubmit:N,role:"search",children:[f.jsx(cc,{size:16,"aria-hidden":"true"}),f.jsx("input",{value:l,onChange:E=>c(E.target.value),placeholder:"Search products…","aria-label":"Search products"})]}),f.jsx("div",{className:"mobile-section-label",children:"Navigation"}),lh.map(({label:E,href:A})=>f.jsx(xe,{to:A,className:"mobile-link",onClick:()=>o(!1),children:E},A)),f.jsx("div",{className:"mobile-section-label",style:{marginTop:"1.25rem"},children:"Categories"}),b0.map(({icon:E,label:A,href:D})=>f.jsxs(xe,{to:D,className:"mobile-link mobile-link--cat",onClick:()=>o(!1),children:[f.jsx(E,{size:16,"aria-hidden":"true"}),A]},D)),f.jsx("div",{className:"mobile-footer",children:m?f.jsx("button",{className:"mobile-logout",onClick:()=>{v(),o(!1)},children:"Sign out"}):f.jsx(xe,{to:"/login",className:"mobile-signin",onClick:()=>o(!1),children:"Sign in to your account →"})})]}),i&&f.jsx("div",{className:"mobile-backdrop",onClick:()=>o(!1),"aria-hidden":"true"}),f.jsx("style",{children:`
        /* ─ Reset & base ─ */
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        .sr-only { position:absolute; width:1px; height:1px; overflow:hidden; clip:rect(0,0,0,0); white-space:nowrap; }

        /* ─ CSS variables ─ */
        :root {
          --c-surface:   #111118;
          --c-border:    rgba(255,255,255,0.07);
          --c-border-hi: rgba(255,255,255,0.14);
          --c-text:      #f0f0f8;
          --c-muted:     #8888a8;
          --c-accent:    #00e5c4;
          --c-accent2:   #6c63ff;
          --c-accent3:   #ff5f87;
          --logo-accent: #00e5c4;
          --logo-accent2: #6c63ff;
          --c-glass:     rgba(10,10,18,0.72);
          --nav-h:       clamp(56px, 12vw, 64px);
          --font:        ${cw};
          --font-mono:   ${dw};
          --radius:      10px;
          --radius-lg:   16px;
          --trans:       0.2s cubic-bezier(0.4,0,0.2,1);
          --c-glass: linear-gradient(
            90deg,
            rgba(8, 25, 40, 0.92),
            rgba(8, 40, 55, 0.90),
            rgba(10, 20, 35, 0.92)
          );
        }
        [data-theme="light"] {
          --c-bg: rgba(124, 58, 237, 0.25);
          --c-surface: #ffffff;
          --c-border:  rgba(0,0,0,0.08);
          --c-border-hi: rgba(0,0,0,0.15);
          --c-text:    #0d0d1a;
          --c-muted:   #666680;
          --c-glass: rgba(124, 58, 237, 0.15);
          --logo-accent: #7c3aed;
          --logo-accent2: #ec4899;
        }

        /* ─ Navbar shell ─ */
        .navbar {
          position: sticky;
          top: 0;
          z-index: 100;
          width: 100%;
          height: var(--nav-h);
          background: var(--c-glass);
          backdrop-filter: saturate(180%) blur(20px);
          -webkit-backdrop-filter: saturate(180%) blur(20px);
          border-bottom: 1px solid var(--c-border);
          font-family: var(--font);
          transition: box-shadow var(--trans), border-color var(--trans);
        }
        .navbar--scrolled {
          box-shadow: 0 4px 40px rgba(0,0,0,0.35);
          border-bottom-color: var(--c-border-hi);
        }
        .navbar-accent-line {
          display: block;
          position: absolute;
          bottom: 0; left: 0;
          width: 100%; height: 1px;
          background: linear-gradient(90deg, transparent 0%, var(--c-accent) 30%, var(--c-accent2) 70%, transparent 100%);
          opacity: 0.5;
        }
        .navbar--scrolled .navbar-accent-line { opacity: 0.9; }

        .navbar-inner {
          max-width: 1360px;
          margin: 0 auto;
          height: 100%;
          padding: 0 clamp(0.75rem, 4vw, 1.5rem);
          display: flex;
          align-items: center;
          gap: clamp(0.25rem, 1vw, 0.75rem);
        }

        /* ─ Logo ─ */
        .logo-wrap {
          display: flex;
          align-items: center;
          gap: clamp(6px, 2vw, 10px);
          text-decoration: none;
          flex-shrink: 0;
          margin-right: clamp(0.25rem, 2vw, 0.5rem);
        }
        .logo-mark {
          position: relative;
          width: clamp(32px, 4vw, 36px);
          height: clamp(32px, 4vw, 36px);
          flex-shrink: 0;
        }
        .logo-hex {
          display: block;
          width: 100%;
          height: 100%;
          background: linear-gradient(135deg, var(--logo-accent), var(--logo-accent2));
          clip-path: polygon(50% 0%, 93% 25%, 93% 75%, 50% 100%, 7% 75%, 7% 25%);
          transition: transform var(--trans);
        }
        .logo-wrap:hover .logo-hex { transform: rotate(30deg) scale(1.05); }
        .logo-letter {
          position: absolute;
          inset: 0;
          display: flex; align-items: center; justify-content: center;
          font-family: var(--font);
          font-weight: 800;
          font-size: clamp(12px, 2vw, 16px);
          color: #0a0a0f;
          pointer-events: none;
        }
        .logo-text {
          font-family: var(--font);
          font-weight: 800;
          font-size: clamp(14px, 3vw, 17px);
          letter-spacing: 0.14em;
          color: var(--c-text);
          display: flex;
          align-items: center;
          gap: clamp(2px, 1vw, 4px);
        }
        .logo-dot {
          font-size: clamp(15px, 2vw, 20px);
          color: var(--c-accent);
          vertical-align: middle;
          animation: pulse 2.4s ease-in-out infinite;
        }
        [data-theme="dark"] .logo-dot {
          color: #00e5c4;
        }
        [data-theme="light"] .logo-dot {
          color: #A855F7;
        }
        @keyframes pulse { 0%,100%{opacity:1} 50%{opacity:0.3} }

        /* ─ Desktop nav ─ */
        .desktop-nav {
          display: none;
          align-items: center;
          gap: 6px;
          flex-shrink: 0;
        }
        @media (min-width: 1024px) { .desktop-nav { display: flex; } }

        .nav-link {
          font-family: var(--font);
          font-weight: 600;
          font-size: clamp(11px, 1.5vw, 13px);
          letter-spacing: 0.04em;
          text-decoration: none;
          color: var(--c-muted);
          padding: clamp(4px, 1vw, 6px) clamp(10px, 2vw, 14px);
          border-radius: 50px;
          border: 1px solid transparent;
          transition: color var(--trans), background var(--trans), border-color var(--trans);
          white-space: nowrap;
        }
        
        .nav-link:hover {
          color: #7DD3FC;
          background: rgba(125, 211, 252, 0.12);
          border-color: rgba(125, 211, 252, 0.25);
        }

        .nav-link--active {
          color: #7DD3FC;
          background: rgba(125, 211, 252, 0.18);
          border-color: rgba(125, 211, 252, 0.35);
          box-shadow: 0 0 18px rgba(125, 211, 252, 0.18);
        }

        [data-theme="light"] .nav-link:hover {
          color: #7C3AED;
          background: rgba(124, 58, 237, 0.08);
          border-color: rgba(124, 58, 237, 0.15);
        }

        [data-theme="light"] .nav-link--active {
          color: #7C3AED;
          background: rgba(124, 58, 237, 0.12);
          border-color: rgba(124, 58, 237, 0.25);
          box-shadow: 0 0 18px rgba(124, 58, 237, 0.12);
        }

        /* ─ Category dropdown ─ */
        .cat-root { position: relative; }
        .cat-trigger {
          display: flex;
          align-items: center;
          gap: 6px;
          font-family: var(--font);
          font-weight: 600;
          font-size: clamp(11px, 1.5vw, 13px);
          letter-spacing: 0.04em;
          color: var(--c-muted);
          background: transparent;
          border: 1px solid transparent;
          padding: clamp(4px, 1vw, 6px) clamp(10px, 2vw, 14px);
          border-radius: 50px;
          cursor: pointer;
          transition: color var(--trans), background var(--trans), border-color var(--trans);
          white-space: nowrap;
        }
        .cat-trigger:hover { color: var(--logo-accent); }
        [data-theme="dark"] .cat-trigger:hover { background: rgba(255,255,255,0.06); box-shadow: 0 6px 20px rgba(0,229,196,0.06); border-color: rgba(0,229,196,0.12); }
        [data-theme="light"] .cat-trigger:hover { background: rgba(0,0,0,0.05); box-shadow: 0 6px 20px rgba(124,58,237,0.06); border-color: rgba(124,58,237,0.12); }
        .cat-trigger--active { color: var(--logo-accent); }
        [data-theme="dark"] .cat-trigger--active { background: rgba(0,229,196,0.08); border-color: rgba(0,229,196,0.2); box-shadow: 0 8px 28px rgba(0,229,196,0.08); }
        [data-theme="light"] .cat-trigger--active { background: rgba(124,58,237,0.08); border-color: rgba(124,58,237,0.2); box-shadow: 0 8px 28px rgba(124,58,237,0.08); }
        .cat-chevron { transition: transform 0.25s ease; }
        .cat-chevron--open { transform: rotate(180deg); }

        .cat-panel {
          position: absolute;
          top: calc(100% + 14px);
          left: 0;
          min-width: clamp(220px, 80vw, 240px);
          background: var(--c-surface);
          border: 1px solid var(--c-border-hi);
          border-radius: var(--radius-lg);
          overflow: hidden;
          box-shadow: 0 20px 60px rgba(0,0,0,0.5), 0 0 0 1px rgba(0,0,0,0.03);
          animation: panelIn 0.18s ease;
          max-height: 80vh;
          overflow-y: auto;
        }
        [data-theme="dark"] .cat-panel { box-shadow: 0 20px 60px rgba(0,0,0,0.5), 0 0 0 1px rgba(0,229,196,0.06); }
        [data-theme="light"] .cat-panel { box-shadow: 0 20px 60px rgba(0,0,0,0.06), 0 0 0 1px rgba(124,58,237,0.06); }
        @keyframes panelIn { from{opacity:0;transform:translateY(-6px)} to{opacity:1;transform:translateY(0)} }
        .cat-panel-inner { padding: clamp(4px, 1vw, 6px); }
        .cat-panel-glow {
          position: absolute;
          top: 0; left: 10; right: 0;
          height: 2px;
          background: linear-gradient(90deg, var(--logo-accent), var(--logo-accent2));
        }
        .cat-item {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: clamp(7px, 1vw, 9px) 12px;
          border-radius: 8px;
          text-decoration: none;
          color: var(--c-muted);
          font-family: var(--font);
          font-size: clamp(12px, 1.5vw, 13px);
          font-weight: 500;
          transition: background var(--trans), color var(--trans);
          position: relative;
        }
        [data-theme="dark"] .cat-item:hover { background: rgba(0,229,196,0.08); color: var(--logo-accent); }
        [data-theme="light"] .cat-item:hover { background: rgba(124,58,237,0.08); color: var(--logo-accent); }
        .cat-item::before {
          content: '';
          position: absolute;
          left: 5px;
          top: 8px;
          bottom: 8px;
          width: 4px;
          border-radius: 4px;
          opacity: 0;
          transform: scaleY(0.6);
          transition: opacity var(--trans), transform var(--trans);
          background: linear-gradient(180deg, var(--logo-accent), var(--logo-accent2));
        }
        .cat-item:hover::before { opacity: 1; transform: scaleY(1); }
        .cat-icon-wrap {
          display: flex; align-items: center; justify-content: center;
          width: clamp(26px, 4vw, 30px);
          height: clamp(26px, 4vw, 30px);
          border-radius: 7px;
          background: rgba(255,255,255,0.05);
          color: inherit;
          flex-shrink: 0;
          transition: background var(--trans);
          font-size: clamp(14px, 2vw, 16px);
        }
        [data-theme="dark"] .cat-item:hover .cat-icon-wrap { background: rgba(0,229,196,0.15); }
        [data-theme="light"] .cat-item:hover .cat-icon-wrap { background: rgba(124,58,237,0.12); }
        [data-theme="light"] .cat-icon-wrap { background: rgba(0,0,0,0.04); }
        .cat-label { flex: 1; }
        .cat-arrow { opacity: 0; transform: translateX(-4px); transition: opacity var(--trans), transform var(--trans); }
        .cat-item:hover .cat-arrow { opacity: 1; transform: translateX(0); }

        /* ─ Search ─ */
        .search-form {
          flex: 1;
          min-width: 0;
          max-width: clamp(200px, 50vw, 360px);
          display: none;
          align-items: center;
          gap: 8px;
          background: rgba(255,255,255,0.05);
          border: 1px solid var(--c-border);
          border-radius: 50px;
          padding: 0 14px;
          height: 38px;
          transition: border-color var(--trans), background var(--trans), box-shadow var(--trans);
        }
        [data-theme="light"] .search-form { background: rgba(0,0,0,0.04); }
        @media (min-width: 768px) { 
          .search-form { 
            display: flex;
            flex: 0 1 auto;
            max-width: clamp(220px, 35vw, 360px);
            margin: 0 clamp(0.5rem, 2vw, 1.25rem);
          } 
        }
        @media (min-width: 1024px) {
          .search-form {
            flex: 1;
            margin: 0 1.25rem;
          }
        }
        .search-form:focus-within {
          border-color: var(--c-accent);
          background: rgba(0,229,196,0.04);
          box-shadow: 0 0 0 3px rgba(0,229,196,0.1);
        }
        .search-icon { color: var(--c-muted); flex-shrink: 0; }
        .search-input {
          flex: 1;
          min-width: 0;
          background: transparent;
          border: none;
          outline: none;
          font-family: var(--font);
          font-size: clamp(12px, 1.5vw, 13px);
          color: var(--c-text);
        }
        .search-input::placeholder { color: var(--c-muted); }
        .search-kbd {
          font-family: var(--font-mono);
          font-size: clamp(8px, 1vw, 10px);
          font-weight: 500;
          color: var(--c-muted);
          background: rgba(255,255,255,0.07);
          border: 1px solid var(--c-border-hi);
          border-radius: 5px;
          padding: clamp(1px, 0.5vw, 2px) clamp(4px, 1vw, 6px);
          flex-shrink: 0;
        }
        [data-theme="light"] .search-kbd { background: rgba(0,0,0,0.05); }

        /* ─ Action strip ─ */
        .action-strip {
          display: flex;
          align-items: center;
          gap: clamp(2px, 1vw, 8px);
          margin-left: auto;
          flex-shrink: 0;
        }

        /* ─ Icon button ─ */
        .icon-btn {
          position: relative;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: clamp(32px, 8vw, 38px);
          height: clamp(32px, 8vw, 38px);
          border-radius: 50%;
          background: transparent;
          border: 1px solid transparent;
          color: var(--c-muted);
          cursor: pointer;
          text-decoration: none;
          transition: background var(--trans), color var(--trans), border-color var(--trans), transform 0.15s ease;
          flex-shrink: 0;
        }
        .icon-btn:hover {
          background: rgba(255,255,255,0.08);
          color: var(--c-text);
          border-color: var(--c-border-hi);
          transform: translateY(-1px);
        }
        .icon-btn:active { transform: translateY(0) scale(0.95); }
        [data-theme="light"] .icon-btn:hover { background: rgba(0,0,0,0.06); }
        .icon-badge {
          position: absolute;
          top: 1px; right: 1px;
          width: clamp(16px, 3vw, 18px);
          height: clamp(16px, 3vw, 18px);
          border-radius: 50%;
          background: var(--c-accent3);
          color: #fff;
          font-family: var(--font-mono);
          font-size: clamp(8px, 1.5vw, 10px);
          font-weight: 700;
          display: flex; align-items: center; justify-content: center;
          border: 2px solid var(--c-surface);
          pointer-events: none;
        }

        /* ─ Login button ─ */
        .login-btn {
          display: none;
          align-items: center;
          gap: 7px;
          font-family: var(--font);
          font-weight: 700;
          font-size: clamp(11px, 2vw, 12.5px);
          letter-spacing: 0.06em;
          text-decoration: none;
          padding: 0 clamp(12px, 2vw, 16px);
          height: clamp(32px, 6vw, 36px);
          border-radius: 999px;
          white-space: nowrap;
          flex-shrink: 0;
          transition: all 0.25s ease;
        }

        /* Dark Theme */
        [data-theme="dark"] .login-btn {
          color: #7DD3FC;
          background: rgba(125, 211, 252, 0.10);
          border: 1px solid rgba(125, 211, 252, 0.18);
          box-shadow: 0 8px 24px rgba(125, 211, 252, 0.10);
        }

        [data-theme="dark"] .login-btn:hover {
          background: rgba(125, 211, 252, 0.16);
          border-color: rgba(125, 211, 252, 0.28);
          box-shadow: 0 12px 30px rgba(125, 211, 252, 0.16);
        }

        /* Light Theme */
        [data-theme="light"] .login-btn {
          color: #7C3AED;
          background: rgba(168, 85, 247, 0.12);
          border: 1px solid rgba(168, 85, 247, 0.18);
          box-shadow: 0 8px 24px rgba(168, 85, 247, 0.12);
        }

        [data-theme="light"] .login-btn:hover {
          background: rgba(168, 85, 247, 0.18);
          border-color: rgba(168, 85, 247, 0.28);
          box-shadow: 0 12px 30px rgba(168, 85, 247, 0.18);
        }

        .login-btn:active {
          transform: scale(0.97);
        }

        @media (min-width: 640px) {
          .login-btn {
            display: inline-flex;
          }
        }

        /* ─ Hamburger ─ */
        .hamburger {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: clamp(32px, 8vw, 38px);
          height: clamp(32px, 8vw, 38px);
          border-radius: 50%;
          background: transparent;
          border: 1px solid var(--c-border);
          color: var(--c-muted);
          cursor: pointer;
          transition: background var(--trans), color var(--trans);
          flex-shrink: 0;
        }
        .hamburger:hover { background: rgba(255,255,255,0.08); color: var(--c-text); }
        @media (min-width: 1024px) { .hamburger { display: none; } }

        /* ─ Mobile drawer ─ */
        .mobile-drawer {
          position: fixed;
          inset: var(--nav-h) 0 0 0;
          z-index: 99;
          background: var(--c-surface);
          border-top: 1px solid var(--c-border-hi);
          padding: clamp(1rem, 5vw, 1.25rem);
          overflow-y: auto;
          transform: translateX(100%);
          transition: transform 0.3s cubic-bezier(0.4,0,0.2,1);
        }
        .mobile-drawer--open { transform: translateX(0); }
        @media (min-width: 1024px) { .mobile-drawer { display: none; } }

        .mobile-backdrop {
          position: fixed;
          inset: var(--nav-h) 0 0 0;
          z-index: 98;
          background: rgba(0,0,0,0.5);
          backdrop-filter: blur(4px);
        }
        @media (min-width: 1024px) { .mobile-backdrop { display: none; } }

        .mobile-search {
          display: flex;
          align-items: center;
          gap: 8px;
          background: rgba(255,255,255,0.05);
          border: 1px solid var(--c-border-hi);
          border-radius: var(--radius);
          padding: 0 clamp(10px, 2vw, 14px);
          height: clamp(40px, 8vw, 44px);
          margin-bottom: clamp(0.75rem, 3vw, 1.25rem);
          color: var(--c-muted);
        }
        [data-theme="light"] .mobile-search { background: rgba(0,0,0,0.04); }
        .mobile-search input {
          flex: 1; background: transparent; border: none; outline: none;
          font-family: var(--font); font-size: clamp(13px, 2vw, 14px); color: var(--c-text);
        }
        .mobile-search input::placeholder { color: var(--c-muted); }

        .mobile-section-label {
          font-family: var(--font-mono);
          font-size: clamp(8px, 1.5vw, 10px);
          font-weight: 500;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: var(--c-muted);
          padding: 0 4px;
          margin-bottom: clamp(4px, 1vw, 6px);
        }
        .mobile-link {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: clamp(10px, 2vw, 12px) 10px;
          border-radius: 10px;
          text-decoration: none;
          font-family: var(--font);
          font-size: clamp(13px, 2vw, 14px);
          font-weight: 600;
          color: var(--c-text);
          transition: background var(--trans), color var(--trans);
        }
        .mobile-link:hover { background: rgba(255,255,255,0.06); }
        [data-theme="light"] .mobile-link:hover { background: rgba(0,0,0,0.04); }
        .mobile-link--cat { color: var(--c-muted); font-weight: 500; }
        .mobile-link--cat:hover { color: var(--logo-accent); }

        .mobile-footer {
          margin-top: clamp(1rem, 3vw, 1.5rem);
          padding-top: clamp(0.75rem, 2vw, 1rem);
          border-top: 1px solid var(--c-border);
        }
        .mobile-signin {
          font-family: var(--font);
          font-size: clamp(12px, 2vw, 14px);
          font-weight: 700;
          color: var(--c-accent);
          text-decoration: none;
          letter-spacing: 0.03em;
        }
        .mobile-logout {
          font-family: var(--font);
          font-size: clamp(12px, 2vw, 14px);
          font-weight: 600;
          color: var(--c-muted);
          background: none;
          border: none;
          cursor: pointer;
          padding: 0;
        }
        .mobile-logout:hover { color: var(--c-accent3); }
      `})]})}function gw(){return f.jsx("footer",{className:"border-t border-zinc-200 bg-white text-zinc-900 dark:border-white/[0.06] dark:bg-[#040710] dark:text-white",children:f.jsxs("div",{className:"mx-auto max-w-7xl px-5 py-16 lg:px-12",children:[f.jsxs("div",{className:"grid gap-12 sm:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1fr]",children:[f.jsxs("div",{children:[f.jsx("h3",{className:"text-2xl font-black",children:f.jsx("span",{className:"bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent",children:"Astaria"})}),f.jsx("p",{className:"mt-3 max-w-xs text-sm leading-7 text-zinc-600 dark:text-zinc-400",children:"Premium electronics for those who demand performance without compromise."}),f.jsx("div",{className:"mt-5 flex gap-3",children:[I2,nw,sw,F2].map((t,r)=>f.jsx("a",{href:"#",className:"flex h-9 w-9 items-center justify-center rounded-full border border-zinc-300 text-zinc-500 transition-all hover:border-cyan-400 hover:text-cyan-500 dark:border-white/10 dark:text-zinc-400",children:f.jsx(t,{size:16})},r))})]}),[{heading:"Shop",links:["Phones","Laptops","Audio","Gaming","Accessories","Appliances"]},{heading:"Company",links:["About Us","Careers","Press","Blog","Sustainability"]},{heading:"Support",links:["Contact","FAQ","Warranty","Returns","Track Order"]}].map(({heading:t,links:r})=>f.jsxs("div",{children:[f.jsx("p",{className:"mb-4 text-xs font-bold uppercase tracking-widest text-zinc-500 dark:text-zinc-400",children:t}),f.jsx("ul",{className:"space-y-2.5",children:r.map(i=>f.jsx("li",{children:f.jsx(xe,{to:"/products",className:"text-sm text-zinc-600 transition-colors hover:text-cyan-500 dark:text-zinc-500 dark:hover:text-white",children:i})},i))})]},t))]}),f.jsx("div",{className:"mt-12 flex flex-wrap gap-6 border-t border-zinc-200 pt-8 text-xs text-zinc-500 dark:border-white/[0.05] dark:text-zinc-500",children:[[X2,"+91 98765 43210"],[c0,"hello@astaria.in"],[U2,"Mumbai, India"]].map(([t,r])=>f.jsxs("span",{className:"flex items-center gap-2",children:[f.jsx(t,{size:13,className:"text-zinc-500"}),r]},r))}),f.jsxs("div",{className:"mt-6 flex flex-wrap items-center justify-between gap-4 border-t border-zinc-200 pt-6 text-xs text-zinc-500 dark:border-white/[0.05] dark:text-zinc-600",children:[f.jsx("p",{children:"© 2026 Astaria E-Commerce. All rights reserved."}),f.jsx("div",{className:"flex gap-5",children:["Privacy Policy","Terms of Use","Cookie Settings"].map(t=>f.jsx("a",{href:"#",className:"transition-colors hover:text-cyan-500 dark:hover:text-zinc-300",children:t},t))})]})]})})}function vw(){const{user:t}=Ur(),r=St();return t?f.jsx(Xm,{}):f.jsx(Oo,{to:"/login",state:{from:r},replace:!0})}function xw(){const{user:t,isAdmin:r}=Ur();return t?r?f.jsx(Xm,{}):f.jsx(Oo,{to:"/",replace:!0}):f.jsx(Oo,{to:"/login",replace:!0})}const pc=b.createContext({});function Wr(t){const r=b.useRef(null);return r.current===null&&(r.current=t()),r.current}const na=b.createContext(null),rs=b.createContext({transformPagePoint:t=>t,isStatic:!1,reducedMotion:"never"});class yw extends b.Component{getSnapshotBeforeUpdate(r){const i=this.props.childRef.current;if(i&&r.isPresent&&!this.props.isPresent){const o=this.props.sizeRef.current;o.height=i.offsetHeight||0,o.width=i.offsetWidth||0,o.top=i.offsetTop,o.left=i.offsetLeft}return null}componentDidUpdate(){}render(){return this.props.children}}function ww({children:t,isPresent:r}){const i=b.useId(),o=b.useRef(null),l=b.useRef({width:0,height:0,top:0,left:0}),{nonce:c}=b.useContext(rs);return b.useInsertionEffect(()=>{const{width:u,height:h,top:m,left:g}=l.current;if(r||!o.current||!u||!h)return;o.current.dataset.motionPopId=i;const v=document.createElement("style");return c&&(v.nonce=c),document.head.appendChild(v),v.sheet&&v.sheet.insertRule(`
          [data-motion-pop-id="${i}"] {
            position: absolute !important;
            width: ${u}px !important;
            height: ${h}px !important;
            top: ${m}px !important;
            left: ${g}px !important;
          }
        `),()=>{document.head.removeChild(v)}},[r]),f.jsx(yw,{isPresent:r,childRef:o,sizeRef:l,children:b.cloneElement(t,{ref:o})})}const bw=({children:t,initial:r,isPresent:i,onExitComplete:o,custom:l,presenceAffectsLayout:c,mode:u})=>{const h=Wr(kw),m=b.useId(),g=b.useCallback(x=>{h.set(x,!0);for(const w of h.values())if(!w)return;o&&o()},[h,o]),v=b.useMemo(()=>({id:m,initial:r,isPresent:i,custom:l,onExitComplete:g,register:x=>(h.set(x,!1),()=>h.delete(x))}),c?[Math.random(),g]:[i,g]);return b.useMemo(()=>{h.forEach((x,w)=>h.set(w,!1))},[i]),b.useEffect(()=>{!i&&!h.size&&o&&o()},[i]),u==="popLayout"&&(t=f.jsx(ww,{isPresent:i,children:t})),f.jsx(na.Provider,{value:v,children:t})};function kw(){return new Map}function k0(t=!0){const r=b.useContext(na);if(r===null)return[!0,null];const{isPresent:i,onExitComplete:o,register:l}=r,c=b.useId();b.useEffect(()=>{t&&l(c)},[t]);const u=b.useCallback(()=>t&&o&&o(c),[c,o,t]);return!i&&o?[!1,u]:[!0]}const So=t=>t.key||"";function uh(t){const r=[];return b.Children.forEach(t,i=>{b.isValidElement(i)&&r.push(i)}),r}const hc=typeof window<"u",is=hc?b.useLayoutEffect:b.useEffect,Sw=({children:t,custom:r,initial:i=!0,onExitComplete:o,presenceAffectsLayout:l=!0,mode:c="sync",propagate:u=!1})=>{const[h,m]=k0(u),g=b.useMemo(()=>uh(t),[t]),v=u&&!h?[]:g.map(So),x=b.useRef(!0),w=b.useRef(g),S=Wr(()=>new Map),[j,N]=b.useState(g),[E,A]=b.useState(g);is(()=>{x.current=!1,w.current=g;for(let z=0;z<E.length;z++){const I=So(E[z]);v.includes(I)?S.delete(I):S.get(I)!==!0&&S.set(I,!1)}},[E,v.length,v.join("-")]);const D=[];if(g!==j){let z=[...g];for(let I=0;I<E.length;I++){const G=E[I],ne=So(G);v.includes(ne)||(z.splice(I,0,G),D.push(G))}c==="wait"&&D.length&&(z=D),A(uh(z)),N(g);return}const{forceRender:_}=b.useContext(pc);return f.jsx(f.Fragment,{children:E.map(z=>{const I=So(z),G=u&&!h?!1:g===E||v.includes(I),ne=()=>{if(S.has(I))S.set(I,!0);else return;let Q=!0;S.forEach(he=>{he||(Q=!1)}),Q&&(_==null||_(),A(w.current),u&&(m==null||m()),o&&o())};return f.jsx(bw,{isPresent:G,initial:!x.current||i?void 0:!1,custom:G?void 0:r,presenceAffectsLayout:l,mode:c,onExitComplete:G?void 0:ne,children:z},I)})})},ut=t=>t;let jw=ut,S0=ut;function mc(t){let r;return()=>(r===void 0&&(r=t()),r)}const ir=(t,r,i)=>{const o=r-t;return o===0?1:(i-t)/o},un=t=>t*1e3,cn=t=>t/1e3,Cw={useManualTiming:!1};function Ew(t){let r=new Set,i=new Set,o=!1,l=!1;const c=new WeakSet;let u={delta:0,timestamp:0,isProcessing:!1};function h(g){c.has(g)&&(m.schedule(g),t()),g(u)}const m={schedule:(g,v=!1,x=!1)=>{const S=x&&o?r:i;return v&&c.add(g),S.has(g)||S.add(g),g},cancel:g=>{i.delete(g),c.delete(g)},process:g=>{if(u=g,o){l=!0;return}o=!0,[r,i]=[i,r],r.forEach(h),r.clear(),o=!1,l&&(l=!1,m.process(g))}};return m}const jo=["read","resolveKeyframes","update","preRender","render","postRender"],Nw=40;function j0(t,r){let i=!1,o=!0;const l={delta:0,timestamp:0,isProcessing:!1},c=()=>i=!0,u=jo.reduce((A,D)=>(A[D]=Ew(c),A),{}),{read:h,resolveKeyframes:m,update:g,preRender:v,render:x,postRender:w}=u,S=()=>{const A=performance.now();i=!1,l.delta=o?1e3/60:Math.max(Math.min(A-l.timestamp,Nw),1),l.timestamp=A,l.isProcessing=!0,h.process(l),m.process(l),g.process(l),v.process(l),x.process(l),w.process(l),l.isProcessing=!1,i&&r&&(o=!1,t(S))},j=()=>{i=!0,o=!0,l.isProcessing||t(S)};return{schedule:jo.reduce((A,D)=>{const _=u[D];return A[D]=(z,I=!1,G=!1)=>(i||j(),_.schedule(z,I,G)),A},{}),cancel:A=>{for(let D=0;D<jo.length;D++)u[jo[D]].cancel(A)},state:l,steps:u}}const{schedule:pe,cancel:Ut,state:Be,steps:du}=j0(typeof requestAnimationFrame<"u"?requestAnimationFrame:ut,!0),C0=b.createContext({strict:!1}),ch={animation:["animate","variants","whileHover","whileTap","exit","whileInView","whileFocus","whileDrag"],exit:["exit"],drag:["drag","dragControls"],focus:["whileFocus"],hover:["whileHover","onHoverStart","onHoverEnd"],tap:["whileTap","onTap","onTapStart","onTapCancel"],pan:["onPan","onPanStart","onPanSessionStart","onPanEnd"],inView:["whileInView","onViewportEnter","onViewportLeave"],layout:["layout","layoutId"]},Vr={};for(const t in ch)Vr[t]={isEnabled:r=>ch[t].some(i=>!!r[i])};function Pw(t){for(const r in t)Vr[r]={...Vr[r],...t[r]}}const Tw=new Set(["animate","exit","variants","initial","style","values","variants","transition","transformTemplate","custom","inherit","onBeforeLayoutMeasure","onAnimationStart","onAnimationComplete","onUpdate","onDragStart","onDrag","onDragEnd","onMeasureDragConstraints","onDirectionLock","onDragTransitionEnd","_dragX","_dragY","onHoverStart","onHoverEnd","onViewportEnter","onViewportLeave","globalTapTarget","ignoreStrict","viewport"]);function Bo(t){return t.startsWith("while")||t.startsWith("drag")&&t!=="draggable"||t.startsWith("layout")||t.startsWith("onTap")||t.startsWith("onPan")||t.startsWith("onLayout")||Tw.has(t)}let E0=t=>!Bo(t);function Rw(t){t&&(E0=r=>r.startsWith("on")?!Bo(r):t(r))}try{Rw(require("@emotion/is-prop-valid").default)}catch{}function Aw(t,r,i){const o={};for(const l in t)l==="values"&&typeof t.values=="object"||(E0(l)||i===!0&&Bo(l)||!r&&!Bo(l)||t.draggable&&l.startsWith("onDrag"))&&(o[l]=t[l]);return o}function _w(t){if(typeof Proxy>"u")return t;const r=new Map,i=(...o)=>t(...o);return new Proxy(i,{get:(o,l)=>l==="create"?t:(r.has(l)||r.set(l,t(l)),r.get(l))})}const ra=b.createContext({});function Yi(t){return typeof t=="string"||Array.isArray(t)}function ia(t){return t!==null&&typeof t=="object"&&typeof t.start=="function"}const gc=["animate","whileInView","whileFocus","whileHover","whileTap","whileDrag","exit"],vc=["initial",...gc];function sa(t){return ia(t.animate)||vc.some(r=>Yi(t[r]))}function N0(t){return!!(sa(t)||t.variants)}function Mw(t,r){if(sa(t)){const{initial:i,animate:o}=t;return{initial:i===!1||Yi(i)?i:void 0,animate:Yi(o)?o:void 0}}return t.inherit!==!1?r:{}}function Lw(t){const{initial:r,animate:i}=Mw(t,b.useContext(ra));return b.useMemo(()=>({initial:r,animate:i}),[dh(r),dh(i)])}function dh(t){return Array.isArray(t)?t.join(" "):t}const Dw=Symbol.for("motionComponentSymbol");function _r(t){return t&&typeof t=="object"&&Object.prototype.hasOwnProperty.call(t,"current")}function zw(t,r,i){return b.useCallback(o=>{o&&t.onMount&&t.onMount(o),r&&(o?r.mount(o):r.unmount()),i&&(typeof i=="function"?i(o):_r(i)&&(i.current=o))},[r])}const xc=t=>t.replace(/([a-z])([A-Z])/gu,"$1-$2").toLowerCase(),Vw="framerAppearId",P0="data-"+xc(Vw),{schedule:yc}=j0(queueMicrotask,!1),T0=b.createContext({});function Ow(t,r,i,o,l){var c,u;const{visualElement:h}=b.useContext(ra),m=b.useContext(C0),g=b.useContext(na),v=b.useContext(rs).reducedMotion,x=b.useRef(null);o=o||m.renderer,!x.current&&o&&(x.current=o(t,{visualState:r,parent:h,props:i,presenceContext:g,blockInitialAnimation:g?g.initial===!1:!1,reducedMotionConfig:v}));const w=x.current,S=b.useContext(T0);w&&!w.projection&&l&&(w.type==="html"||w.type==="svg")&&Fw(x.current,i,l,S);const j=b.useRef(!1);b.useInsertionEffect(()=>{w&&j.current&&w.update(i,g)});const N=i[P0],E=b.useRef(!!N&&!(!((c=window.MotionHandoffIsComplete)===null||c===void 0)&&c.call(window,N))&&((u=window.MotionHasOptimisedAnimation)===null||u===void 0?void 0:u.call(window,N)));return is(()=>{w&&(j.current=!0,window.MotionIsMounted=!0,w.updateFeatures(),yc.render(w.render),E.current&&w.animationState&&w.animationState.animateChanges())}),b.useEffect(()=>{w&&(!E.current&&w.animationState&&w.animationState.animateChanges(),E.current&&(queueMicrotask(()=>{var A;(A=window.MotionHandoffMarkAsComplete)===null||A===void 0||A.call(window,N)}),E.current=!1))}),w}function Fw(t,r,i,o){const{layoutId:l,layout:c,drag:u,dragConstraints:h,layoutScroll:m,layoutRoot:g}=r;t.projection=new i(t.latestValues,r["data-framer-portal-id"]?void 0:R0(t.parent)),t.projection.setOptions({layoutId:l,layout:c,alwaysMeasureLayout:!!u||h&&_r(h),visualElement:t,animationType:typeof c=="string"?c:"both",initialPromotionConfig:o,layoutScroll:m,layoutRoot:g})}function R0(t){if(t)return t.options.allowProjection!==!1?t.projection:R0(t.parent)}function Iw({preloadedFeatures:t,createVisualElement:r,useRender:i,useVisualState:o,Component:l}){var c,u;t&&Pw(t);function h(g,v){let x;const w={...b.useContext(rs),...g,layoutId:Bw(g)},{isStatic:S}=w,j=Lw(g),N=o(g,S);if(!S&&hc){$w();const E=Uw(w);x=E.MeasureLayout,j.visualElement=Ow(l,N,w,r,E.ProjectionNode)}return f.jsxs(ra.Provider,{value:j,children:[x&&j.visualElement?f.jsx(x,{visualElement:j.visualElement,...w}):null,i(l,g,zw(N,j.visualElement,v),N,S,j.visualElement)]})}h.displayName=`motion.${typeof l=="string"?l:`create(${(u=(c=l.displayName)!==null&&c!==void 0?c:l.name)!==null&&u!==void 0?u:""})`}`;const m=b.forwardRef(h);return m[Dw]=l,m}function Bw({layoutId:t}){const r=b.useContext(pc).id;return r&&t!==void 0?r+"-"+t:t}function $w(t,r){b.useContext(C0).strict}function Uw(t){const{drag:r,layout:i}=Vr;if(!r&&!i)return{};const o={...r,...i};return{MeasureLayout:r!=null&&r.isEnabled(t)||i!=null&&i.isEnabled(t)?o.MeasureLayout:void 0,ProjectionNode:o.ProjectionNode}}const Ww=["animate","circle","defs","desc","ellipse","g","image","line","filter","marker","mask","metadata","path","pattern","polygon","polyline","rect","stop","switch","symbol","svg","text","tspan","use","view"];function wc(t){return typeof t!="string"||t.includes("-")?!1:!!(Ww.indexOf(t)>-1||/[A-Z]/u.test(t))}function fh(t){const r=[{},{}];return t==null||t.values.forEach((i,o)=>{r[0][o]=i.get(),r[1][o]=i.getVelocity()}),r}function bc(t,r,i,o){if(typeof r=="function"){const[l,c]=fh(o);r=r(i!==void 0?i:t.custom,l,c)}if(typeof r=="string"&&(r=t.variants&&t.variants[r]),typeof r=="function"){const[l,c]=fh(o);r=r(i!==void 0?i:t.custom,l,c)}return r}const Lu=t=>Array.isArray(t),Hw=t=>!!(t&&typeof t=="object"&&t.mix&&t.toValue),Kw=t=>Lu(t)?t[t.length-1]||0:t,Ye=t=>!!(t&&t.getVelocity);function Ao(t){const r=Ye(t)?t.get():t;return Hw(r)?r.toValue():r}function Gw({scrapeMotionValuesFromProps:t,createRenderState:r,onUpdate:i},o,l,c){const u={latestValues:Yw(o,l,c,t),renderState:r()};return i&&(u.onMount=h=>i({props:o,current:h,...u}),u.onUpdate=h=>i(h)),u}const A0=t=>(r,i)=>{const o=b.useContext(ra),l=b.useContext(na),c=()=>Gw(t,r,o,l);return i?c():Wr(c)};function Yw(t,r,i,o){const l={},c=o(t,{});for(const w in c)l[w]=Ao(c[w]);let{initial:u,animate:h}=t;const m=sa(t),g=N0(t);r&&g&&!m&&t.inherit!==!1&&(u===void 0&&(u=r.initial),h===void 0&&(h=r.animate));let v=i?i.initial===!1:!1;v=v||u===!1;const x=v?h:u;if(x&&typeof x!="boolean"&&!ia(x)){const w=Array.isArray(x)?x:[x];for(let S=0;S<w.length;S++){const j=bc(t,w[S]);if(j){const{transitionEnd:N,transition:E,...A}=j;for(const D in A){let _=A[D];if(Array.isArray(_)){const z=v?_.length-1:0;_=_[z]}_!==null&&(l[D]=_)}for(const D in N)l[D]=N[D]}}}return l}const Hr=["transformPerspective","x","y","z","translateX","translateY","translateZ","scale","scaleX","scaleY","rotate","rotateX","rotateY","rotateZ","skew","skewX","skewY"],or=new Set(Hr),_0=t=>r=>typeof r=="string"&&r.startsWith(t),M0=_0("--"),Xw=_0("var(--"),kc=t=>Xw(t)?Qw.test(t.split("/*")[0].trim()):!1,Qw=/var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu,L0=(t,r)=>r&&typeof t=="number"?r.transform(t):t,Jt=(t,r,i)=>i>r?r:i<t?t:i,Kr={test:t=>typeof t=="number",parse:parseFloat,transform:t=>t},Xi={...Kr,transform:t=>Jt(0,1,t)},Co={...Kr,default:1},ss=t=>({test:r=>typeof r=="string"&&r.endsWith(t)&&r.split(" ").length===1,parse:parseFloat,transform:r=>`${r}${t}`}),Mn=ss("deg"),qt=ss("%"),te=ss("px"),qw=ss("vh"),Zw=ss("vw"),ph={...qt,parse:t=>qt.parse(t)/100,transform:t=>qt.transform(t*100)},Jw={borderWidth:te,borderTopWidth:te,borderRightWidth:te,borderBottomWidth:te,borderLeftWidth:te,borderRadius:te,radius:te,borderTopLeftRadius:te,borderTopRightRadius:te,borderBottomRightRadius:te,borderBottomLeftRadius:te,width:te,maxWidth:te,height:te,maxHeight:te,top:te,right:te,bottom:te,left:te,padding:te,paddingTop:te,paddingRight:te,paddingBottom:te,paddingLeft:te,margin:te,marginTop:te,marginRight:te,marginBottom:te,marginLeft:te,backgroundPositionX:te,backgroundPositionY:te},e5={rotate:Mn,rotateX:Mn,rotateY:Mn,rotateZ:Mn,scale:Co,scaleX:Co,scaleY:Co,scaleZ:Co,skew:Mn,skewX:Mn,skewY:Mn,distance:te,translateX:te,translateY:te,translateZ:te,x:te,y:te,z:te,perspective:te,transformPerspective:te,opacity:Xi,originX:ph,originY:ph,originZ:te},hh={...Kr,transform:Math.round},Sc={...Jw,...e5,zIndex:hh,size:te,fillOpacity:Xi,strokeOpacity:Xi,numOctaves:hh},t5={x:"translateX",y:"translateY",z:"translateZ",transformPerspective:"perspective"},n5=Hr.length;function r5(t,r,i){let o="",l=!0;for(let c=0;c<n5;c++){const u=Hr[c],h=t[u];if(h===void 0)continue;let m=!0;if(typeof h=="number"?m=h===(u.startsWith("scale")?1:0):m=parseFloat(h)===0,!m||i){const g=L0(h,Sc[u]);if(!m){l=!1;const v=t5[u]||u;o+=`${v}(${g}) `}i&&(r[u]=g)}}return o=o.trim(),i?o=i(r,l?"":o):l&&(o="none"),o}function jc(t,r,i){const{style:o,vars:l,transformOrigin:c}=t;let u=!1,h=!1;for(const m in r){const g=r[m];if(or.has(m)){u=!0;continue}else if(M0(m)){l[m]=g;continue}else{const v=L0(g,Sc[m]);m.startsWith("origin")?(h=!0,c[m]=v):o[m]=v}}if(r.transform||(u||i?o.transform=r5(r,t.transform,i):o.transform&&(o.transform="none")),h){const{originX:m="50%",originY:g="50%",originZ:v=0}=c;o.transformOrigin=`${m} ${g} ${v}`}}const i5={offset:"stroke-dashoffset",array:"stroke-dasharray"},s5={offset:"strokeDashoffset",array:"strokeDasharray"};function o5(t,r,i=1,o=0,l=!0){t.pathLength=1;const c=l?i5:s5;t[c.offset]=te.transform(-o);const u=te.transform(r),h=te.transform(i);t[c.array]=`${u} ${h}`}function mh(t,r,i){return typeof t=="string"?t:te.transform(r+i*t)}function a5(t,r,i){const o=mh(r,t.x,t.width),l=mh(i,t.y,t.height);return`${o} ${l}`}function Cc(t,{attrX:r,attrY:i,attrScale:o,originX:l,originY:c,pathLength:u,pathSpacing:h=1,pathOffset:m=0,...g},v,x){if(jc(t,g,x),v){t.style.viewBox&&(t.attrs.viewBox=t.style.viewBox);return}t.attrs=t.style,t.style={};const{attrs:w,style:S,dimensions:j}=t;w.transform&&(j&&(S.transform=w.transform),delete w.transform),j&&(l!==void 0||c!==void 0||S.transform)&&(S.transformOrigin=a5(j,l!==void 0?l:.5,c!==void 0?c:.5)),r!==void 0&&(w.x=r),i!==void 0&&(w.y=i),o!==void 0&&(w.scale=o),u!==void 0&&o5(w,u,h,m,!1)}const Ec=()=>({style:{},transform:{},transformOrigin:{},vars:{}}),D0=()=>({...Ec(),attrs:{}}),Nc=t=>typeof t=="string"&&t.toLowerCase()==="svg";function z0(t,{style:r,vars:i},o,l){Object.assign(t.style,r,l&&l.getProjectionStyles(o));for(const c in i)t.style.setProperty(c,i[c])}const V0=new Set(["baseFrequency","diffuseConstant","kernelMatrix","kernelUnitLength","keySplines","keyTimes","limitingConeAngle","markerHeight","markerWidth","numOctaves","targetX","targetY","surfaceScale","specularConstant","specularExponent","stdDeviation","tableValues","viewBox","gradientTransform","pathLength","startOffset","textLength","lengthAdjust"]);function O0(t,r,i,o){z0(t,r,void 0,o);for(const l in r.attrs)t.setAttribute(V0.has(l)?l:xc(l),r.attrs[l])}const $o={};function l5(t){Object.assign($o,t)}function F0(t,{layout:r,layoutId:i}){return or.has(t)||t.startsWith("origin")||(r||i!==void 0)&&(!!$o[t]||t==="opacity")}function Pc(t,r,i){var o;const{style:l}=t,c={};for(const u in l)(Ye(l[u])||r.style&&Ye(r.style[u])||F0(u,t)||((o=i==null?void 0:i.getValue(u))===null||o===void 0?void 0:o.liveStyle)!==void 0)&&(c[u]=l[u]);return c}function I0(t,r,i){const o=Pc(t,r,i);for(const l in t)if(Ye(t[l])||Ye(r[l])){const c=Hr.indexOf(l)!==-1?"attr"+l.charAt(0).toUpperCase()+l.substring(1):l;o[c]=t[l]}return o}function u5(t,r){try{r.dimensions=typeof t.getBBox=="function"?t.getBBox():t.getBoundingClientRect()}catch{r.dimensions={x:0,y:0,width:0,height:0}}}const gh=["x","y","width","height","cx","cy","r"],c5={useVisualState:A0({scrapeMotionValuesFromProps:I0,createRenderState:D0,onUpdate:({props:t,prevProps:r,current:i,renderState:o,latestValues:l})=>{if(!i)return;let c=!!t.drag;if(!c){for(const h in l)if(or.has(h)){c=!0;break}}if(!c)return;let u=!r;if(r)for(let h=0;h<gh.length;h++){const m=gh[h];t[m]!==r[m]&&(u=!0)}u&&pe.read(()=>{u5(i,o),pe.render(()=>{Cc(o,l,Nc(i.tagName),t.transformTemplate),O0(i,o)})})}})},d5={useVisualState:A0({scrapeMotionValuesFromProps:Pc,createRenderState:Ec})};function B0(t,r,i){for(const o in r)!Ye(r[o])&&!F0(o,i)&&(t[o]=r[o])}function f5({transformTemplate:t},r){return b.useMemo(()=>{const i=Ec();return jc(i,r,t),Object.assign({},i.vars,i.style)},[r])}function p5(t,r){const i=t.style||{},o={};return B0(o,i,t),Object.assign(o,f5(t,r)),o}function h5(t,r){const i={},o=p5(t,r);return t.drag&&t.dragListener!==!1&&(i.draggable=!1,o.userSelect=o.WebkitUserSelect=o.WebkitTouchCallout="none",o.touchAction=t.drag===!0?"none":`pan-${t.drag==="x"?"y":"x"}`),t.tabIndex===void 0&&(t.onTap||t.onTapStart||t.whileTap)&&(i.tabIndex=0),i.style=o,i}function m5(t,r,i,o){const l=b.useMemo(()=>{const c=D0();return Cc(c,r,Nc(o),t.transformTemplate),{...c.attrs,style:{...c.style}}},[r]);if(t.style){const c={};B0(c,t.style,t),l.style={...c,...l.style}}return l}function g5(t=!1){return(i,o,l,{latestValues:c},u)=>{const m=(wc(i)?m5:h5)(o,c,u,i),g=Aw(o,typeof i=="string",t),v=i!==b.Fragment?{...g,...m,ref:l}:{},{children:x}=o,w=b.useMemo(()=>Ye(x)?x.get():x,[x]);return b.createElement(i,{...v,children:w})}}function v5(t,r){return function(o,{forwardMotionProps:l}={forwardMotionProps:!1}){const u={...wc(o)?c5:d5,preloadedFeatures:t,useRender:g5(l),createVisualElement:r,Component:o};return Iw(u)}}function $0(t,r){if(!Array.isArray(r))return!1;const i=r.length;if(i!==t.length)return!1;for(let o=0;o<i;o++)if(r[o]!==t[o])return!1;return!0}function oa(t,r,i){const o=t.getProps();return bc(o,r,i!==void 0?i:o.custom,t)}const U0=mc(()=>window.ScrollTimeline!==void 0);class x5{constructor(r){this.stop=()=>this.runAll("stop"),this.animations=r.filter(Boolean)}get finished(){return Promise.all(this.animations.map(r=>"finished"in r?r.finished:r))}getAll(r){return this.animations[0][r]}setAll(r,i){for(let o=0;o<this.animations.length;o++)this.animations[o][r]=i}attachTimeline(r,i){const o=this.animations.map(l=>{if(U0()&&l.attachTimeline)return l.attachTimeline(r);if(typeof i=="function")return i(l)});return()=>{o.forEach((l,c)=>{l&&l(),this.animations[c].stop()})}}get time(){return this.getAll("time")}set time(r){this.setAll("time",r)}get speed(){return this.getAll("speed")}set speed(r){this.setAll("speed",r)}get startTime(){return this.getAll("startTime")}get duration(){let r=0;for(let i=0;i<this.animations.length;i++)r=Math.max(r,this.animations[i].duration);return r}runAll(r){this.animations.forEach(i=>i[r]())}flatten(){this.runAll("flatten")}play(){this.runAll("play")}pause(){this.runAll("pause")}cancel(){this.runAll("cancel")}complete(){this.runAll("complete")}}class y5 extends x5{then(r,i){return Promise.all(this.animations).then(r).catch(i)}}function Tc(t,r){return t?t[r]||t.default||t:void 0}const Du=2e4;function W0(t){let r=0;const i=50;let o=t.next(r);for(;!o.done&&r<Du;)r+=i,o=t.next(r);return r>=Du?1/0:r}function Rc(t){return typeof t=="function"}function vh(t,r){t.timeline=r,t.onfinish=null}const Ac=t=>Array.isArray(t)&&typeof t[0]=="number",w5={linearEasing:void 0};function b5(t,r){const i=mc(t);return()=>{var o;return(o=w5[r])!==null&&o!==void 0?o:i()}}const Uo=b5(()=>{try{document.createElement("div").animate({opacity:0},{easing:"linear(0, 1)"})}catch{return!1}return!0},"linearEasing"),H0=(t,r,i=10)=>{let o="";const l=Math.max(Math.round(r/i),2);for(let c=0;c<l;c++)o+=t(ir(0,l-1,c))+", ";return`linear(${o.substring(0,o.length-2)})`};function K0(t){return!!(typeof t=="function"&&Uo()||!t||typeof t=="string"&&(t in zu||Uo())||Ac(t)||Array.isArray(t)&&t.every(K0))}const Oi=([t,r,i,o])=>`cubic-bezier(${t}, ${r}, ${i}, ${o})`,zu={linear:"linear",ease:"ease",easeIn:"ease-in",easeOut:"ease-out",easeInOut:"ease-in-out",circIn:Oi([0,.65,.55,1]),circOut:Oi([.55,0,1,.45]),backIn:Oi([.31,.01,.66,-.59]),backOut:Oi([.33,1.53,.69,.99])};function G0(t,r){if(t)return typeof t=="function"&&Uo()?H0(t,r):Ac(t)?Oi(t):Array.isArray(t)?t.map(i=>G0(i,r)||zu.easeOut):zu[t]}const Bt={x:!1,y:!1};function Y0(){return Bt.x||Bt.y}function X0(t,r,i){var o;if(t instanceof Element)return[t];if(typeof t=="string"){let l=document;const c=(o=void 0)!==null&&o!==void 0?o:l.querySelectorAll(t);return c?Array.from(c):[]}return Array.from(t)}function Q0(t,r){const i=X0(t),o=new AbortController,l={passive:!0,...r,signal:o.signal};return[i,l,()=>o.abort()]}function xh(t){return r=>{r.pointerType==="touch"||Y0()||t(r)}}function k5(t,r,i={}){const[o,l,c]=Q0(t,i),u=xh(h=>{const{target:m}=h,g=r(h);if(typeof g!="function"||!m)return;const v=xh(x=>{g(x),m.removeEventListener("pointerleave",v)});m.addEventListener("pointerleave",v,l)});return o.forEach(h=>{h.addEventListener("pointerenter",u,l)}),c}const q0=(t,r)=>r?t===r?!0:q0(t,r.parentElement):!1,_c=t=>t.pointerType==="mouse"?typeof t.button!="number"||t.button<=0:t.isPrimary!==!1,S5=new Set(["BUTTON","INPUT","SELECT","TEXTAREA","A"]);function j5(t){return S5.has(t.tagName)||t.tabIndex!==-1}const Fi=new WeakSet;function yh(t){return r=>{r.key==="Enter"&&t(r)}}function fu(t,r){t.dispatchEvent(new PointerEvent("pointer"+r,{isPrimary:!0,bubbles:!0}))}const C5=(t,r)=>{const i=t.currentTarget;if(!i)return;const o=yh(()=>{if(Fi.has(i))return;fu(i,"down");const l=yh(()=>{fu(i,"up")}),c=()=>fu(i,"cancel");i.addEventListener("keyup",l,r),i.addEventListener("blur",c,r)});i.addEventListener("keydown",o,r),i.addEventListener("blur",()=>i.removeEventListener("keydown",o),r)};function wh(t){return _c(t)&&!Y0()}function E5(t,r,i={}){const[o,l,c]=Q0(t,i),u=h=>{const m=h.currentTarget;if(!wh(h)||Fi.has(m))return;Fi.add(m);const g=r(h),v=(S,j)=>{window.removeEventListener("pointerup",x),window.removeEventListener("pointercancel",w),!(!wh(S)||!Fi.has(m))&&(Fi.delete(m),typeof g=="function"&&g(S,{success:j}))},x=S=>{v(S,i.useGlobalTarget||q0(m,S.target))},w=S=>{v(S,!1)};window.addEventListener("pointerup",x,l),window.addEventListener("pointercancel",w,l)};return o.forEach(h=>{!j5(h)&&h.getAttribute("tabindex")===null&&(h.tabIndex=0),(i.useGlobalTarget?window:h).addEventListener("pointerdown",u,l),h.addEventListener("focus",g=>C5(g,l),l)}),c}function N5(t){return t==="x"||t==="y"?Bt[t]?null:(Bt[t]=!0,()=>{Bt[t]=!1}):Bt.x||Bt.y?null:(Bt.x=Bt.y=!0,()=>{Bt.x=Bt.y=!1})}const Z0=new Set(["width","height","top","left","right","bottom",...Hr]);let _o;function P5(){_o=void 0}const Zt={now:()=>(_o===void 0&&Zt.set(Be.isProcessing||Cw.useManualTiming?Be.timestamp:performance.now()),_o),set:t=>{_o=t,queueMicrotask(P5)}};function Mc(t,r){t.indexOf(r)===-1&&t.push(r)}function Lc(t,r){const i=t.indexOf(r);i>-1&&t.splice(i,1)}class Dc{constructor(){this.subscriptions=[]}add(r){return Mc(this.subscriptions,r),()=>Lc(this.subscriptions,r)}notify(r,i,o){const l=this.subscriptions.length;if(l)if(l===1)this.subscriptions[0](r,i,o);else for(let c=0;c<l;c++){const u=this.subscriptions[c];u&&u(r,i,o)}}getSize(){return this.subscriptions.length}clear(){this.subscriptions.length=0}}function zc(t,r){return r?t*(1e3/r):0}const bh=30,T5=t=>!isNaN(parseFloat(t)),Bi={current:void 0};class R5{constructor(r,i={}){this.version="11.18.2",this.canTrackVelocity=null,this.events={},this.updateAndNotify=(o,l=!0)=>{const c=Zt.now();this.updatedAt!==c&&this.setPrevFrameValue(),this.prev=this.current,this.setCurrent(o),this.current!==this.prev&&this.events.change&&this.events.change.notify(this.current),l&&this.events.renderRequest&&this.events.renderRequest.notify(this.current)},this.hasAnimated=!1,this.setCurrent(r),this.owner=i.owner}setCurrent(r){this.current=r,this.updatedAt=Zt.now(),this.canTrackVelocity===null&&r!==void 0&&(this.canTrackVelocity=T5(this.current))}setPrevFrameValue(r=this.current){this.prevFrameValue=r,this.prevUpdatedAt=this.updatedAt}onChange(r){return this.on("change",r)}on(r,i){this.events[r]||(this.events[r]=new Dc);const o=this.events[r].add(i);return r==="change"?()=>{o(),pe.read(()=>{this.events.change.getSize()||this.stop()})}:o}clearListeners(){for(const r in this.events)this.events[r].clear()}attach(r,i){this.passiveEffect=r,this.stopPassiveEffect=i}set(r,i=!0){!i||!this.passiveEffect?this.updateAndNotify(r,i):this.passiveEffect(r,this.updateAndNotify)}setWithVelocity(r,i,o){this.set(i),this.prev=void 0,this.prevFrameValue=r,this.prevUpdatedAt=this.updatedAt-o}jump(r,i=!0){this.updateAndNotify(r),this.prev=r,this.prevUpdatedAt=this.prevFrameValue=void 0,i&&this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}get(){return Bi.current&&Bi.current.push(this),this.current}getPrevious(){return this.prev}getVelocity(){const r=Zt.now();if(!this.canTrackVelocity||this.prevFrameValue===void 0||r-this.updatedAt>bh)return 0;const i=Math.min(this.updatedAt-this.prevUpdatedAt,bh);return zc(parseFloat(this.current)-parseFloat(this.prevFrameValue),i)}start(r){return this.stop(),new Promise(i=>{this.hasAnimated=!0,this.animation=r(i),this.events.animationStart&&this.events.animationStart.notify()}).then(()=>{this.events.animationComplete&&this.events.animationComplete.notify(),this.clearAnimation()})}stop(){this.animation&&(this.animation.stop(),this.events.animationCancel&&this.events.animationCancel.notify()),this.clearAnimation()}isAnimating(){return!!this.animation}clearAnimation(){delete this.animation}destroy(){this.clearListeners(),this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}}function Qt(t,r){return new R5(t,r)}function A5(t,r,i){t.hasValue(r)?t.getValue(r).set(i):t.addValue(r,Qt(i))}function _5(t,r){const i=oa(t,r);let{transitionEnd:o={},transition:l={},...c}=i||{};c={...c,...o};for(const u in c){const h=Kw(c[u]);A5(t,u,h)}}function M5(t){return!!(Ye(t)&&t.add)}function Vu(t,r){const i=t.getValue("willChange");if(M5(i))return i.add(r)}function J0(t){return t.props[P0]}const eg=(t,r,i)=>(((1-3*i+3*r)*t+(3*i-6*r))*t+3*r)*t,L5=1e-7,D5=12;function z5(t,r,i,o,l){let c,u,h=0;do u=r+(i-r)/2,c=eg(u,o,l)-t,c>0?i=u:r=u;while(Math.abs(c)>L5&&++h<D5);return u}function os(t,r,i,o){if(t===r&&i===o)return ut;const l=c=>z5(c,0,1,t,i);return c=>c===0||c===1?c:eg(l(c),r,o)}const tg=t=>r=>r<=.5?t(2*r)/2:(2-t(2*(1-r)))/2,ng=t=>r=>1-t(1-r),rg=os(.33,1.53,.69,.99),Vc=ng(rg),ig=tg(Vc),sg=t=>(t*=2)<1?.5*Vc(t):.5*(2-Math.pow(2,-10*(t-1))),Oc=t=>1-Math.sin(Math.acos(t)),og=ng(Oc),ag=tg(Oc),lg=t=>/^0[^.\s]+$/u.test(t);function V5(t){return typeof t=="number"?t===0:t!==null?t==="none"||t==="0"||lg(t):!0}const $i=t=>Math.round(t*1e5)/1e5,Fc=/-?(?:\d+(?:\.\d+)?|\.\d+)/gu;function O5(t){return t==null}const F5=/^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,Ic=(t,r)=>i=>!!(typeof i=="string"&&F5.test(i)&&i.startsWith(t)||r&&!O5(i)&&Object.prototype.hasOwnProperty.call(i,r)),ug=(t,r,i)=>o=>{if(typeof o!="string")return o;const[l,c,u,h]=o.match(Fc);return{[t]:parseFloat(l),[r]:parseFloat(c),[i]:parseFloat(u),alpha:h!==void 0?parseFloat(h):1}},I5=t=>Jt(0,255,t),pu={...Kr,transform:t=>Math.round(I5(t))},nr={test:Ic("rgb","red"),parse:ug("red","green","blue"),transform:({red:t,green:r,blue:i,alpha:o=1})=>"rgba("+pu.transform(t)+", "+pu.transform(r)+", "+pu.transform(i)+", "+$i(Xi.transform(o))+")"};function B5(t){let r="",i="",o="",l="";return t.length>5?(r=t.substring(1,3),i=t.substring(3,5),o=t.substring(5,7),l=t.substring(7,9)):(r=t.substring(1,2),i=t.substring(2,3),o=t.substring(3,4),l=t.substring(4,5),r+=r,i+=i,o+=o,l+=l),{red:parseInt(r,16),green:parseInt(i,16),blue:parseInt(o,16),alpha:l?parseInt(l,16)/255:1}}const Ou={test:Ic("#"),parse:B5,transform:nr.transform},Mr={test:Ic("hsl","hue"),parse:ug("hue","saturation","lightness"),transform:({hue:t,saturation:r,lightness:i,alpha:o=1})=>"hsla("+Math.round(t)+", "+qt.transform($i(r))+", "+qt.transform($i(i))+", "+$i(Xi.transform(o))+")"},rt={test:t=>nr.test(t)||Ou.test(t)||Mr.test(t),parse:t=>nr.test(t)?nr.parse(t):Mr.test(t)?Mr.parse(t):Ou.parse(t),transform:t=>typeof t=="string"?t:t.hasOwnProperty("red")?nr.transform(t):Mr.transform(t)},$5=/(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;function U5(t){var r,i;return isNaN(t)&&typeof t=="string"&&(((r=t.match(Fc))===null||r===void 0?void 0:r.length)||0)+(((i=t.match($5))===null||i===void 0?void 0:i.length)||0)>0}const cg="number",dg="color",W5="var",H5="var(",kh="${}",K5=/var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;function Qi(t){const r=t.toString(),i=[],o={color:[],number:[],var:[]},l=[];let c=0;const h=r.replace(K5,m=>(rt.test(m)?(o.color.push(c),l.push(dg),i.push(rt.parse(m))):m.startsWith(H5)?(o.var.push(c),l.push(W5),i.push(m)):(o.number.push(c),l.push(cg),i.push(parseFloat(m))),++c,kh)).split(kh);return{values:i,split:h,indexes:o,types:l}}function fg(t){return Qi(t).values}function pg(t){const{split:r,types:i}=Qi(t),o=r.length;return l=>{let c="";for(let u=0;u<o;u++)if(c+=r[u],l[u]!==void 0){const h=i[u];h===cg?c+=$i(l[u]):h===dg?c+=rt.transform(l[u]):c+=l[u]}return c}}const G5=t=>typeof t=="number"?0:t;function Y5(t){const r=fg(t);return pg(t)(r.map(G5))}const zn={test:U5,parse:fg,createTransformer:pg,getAnimatableNone:Y5},X5=new Set(["brightness","contrast","saturate","opacity"]);function Q5(t){const[r,i]=t.slice(0,-1).split("(");if(r==="drop-shadow")return t;const[o]=i.match(Fc)||[];if(!o)return t;const l=i.replace(o,"");let c=X5.has(r)?1:0;return o!==i&&(c*=100),r+"("+c+l+")"}const q5=/\b([a-z-]*)\(.*?\)/gu,Fu={...zn,getAnimatableNone:t=>{const r=t.match(q5);return r?r.map(Q5).join(" "):t}},Z5={...Sc,color:rt,backgroundColor:rt,outlineColor:rt,fill:rt,stroke:rt,borderColor:rt,borderTopColor:rt,borderRightColor:rt,borderBottomColor:rt,borderLeftColor:rt,filter:Fu,WebkitFilter:Fu},Bc=t=>Z5[t];function hg(t,r){let i=Bc(t);return i!==Fu&&(i=zn),i.getAnimatableNone?i.getAnimatableNone(r):void 0}const J5=new Set(["auto","none","0"]);function eb(t,r,i){let o=0,l;for(;o<t.length&&!l;){const c=t[o];typeof c=="string"&&!J5.has(c)&&Qi(c).values.length&&(l=t[o]),o++}if(l&&i)for(const c of r)t[c]=hg(i,l)}const Sh=t=>t===Kr||t===te,jh=(t,r)=>parseFloat(t.split(", ")[r]),Ch=(t,r)=>(i,{transform:o})=>{if(o==="none"||!o)return 0;const l=o.match(/^matrix3d\((.+)\)$/u);if(l)return jh(l[1],r);{const c=o.match(/^matrix\((.+)\)$/u);return c?jh(c[1],t):0}},tb=new Set(["x","y","z"]),nb=Hr.filter(t=>!tb.has(t));function rb(t){const r=[];return nb.forEach(i=>{const o=t.getValue(i);o!==void 0&&(r.push([i,o.get()]),o.set(i.startsWith("scale")?1:0))}),r}const Or={width:({x:t},{paddingLeft:r="0",paddingRight:i="0"})=>t.max-t.min-parseFloat(r)-parseFloat(i),height:({y:t},{paddingTop:r="0",paddingBottom:i="0"})=>t.max-t.min-parseFloat(r)-parseFloat(i),top:(t,{top:r})=>parseFloat(r),left:(t,{left:r})=>parseFloat(r),bottom:({y:t},{top:r})=>parseFloat(r)+(t.max-t.min),right:({x:t},{left:r})=>parseFloat(r)+(t.max-t.min),x:Ch(4,13),y:Ch(5,14)};Or.translateX=Or.x;Or.translateY=Or.y;const rr=new Set;let Iu=!1,Bu=!1;function mg(){if(Bu){const t=Array.from(rr).filter(o=>o.needsMeasurement),r=new Set(t.map(o=>o.element)),i=new Map;r.forEach(o=>{const l=rb(o);l.length&&(i.set(o,l),o.render())}),t.forEach(o=>o.measureInitialState()),r.forEach(o=>{o.render();const l=i.get(o);l&&l.forEach(([c,u])=>{var h;(h=o.getValue(c))===null||h===void 0||h.set(u)})}),t.forEach(o=>o.measureEndState()),t.forEach(o=>{o.suspendedScrollY!==void 0&&window.scrollTo(0,o.suspendedScrollY)})}Bu=!1,Iu=!1,rr.forEach(t=>t.complete()),rr.clear()}function gg(){rr.forEach(t=>{t.readKeyframes(),t.needsMeasurement&&(Bu=!0)})}function ib(){gg(),mg()}class $c{constructor(r,i,o,l,c,u=!1){this.isComplete=!1,this.isAsync=!1,this.needsMeasurement=!1,this.isScheduled=!1,this.unresolvedKeyframes=[...r],this.onComplete=i,this.name=o,this.motionValue=l,this.element=c,this.isAsync=u}scheduleResolve(){this.isScheduled=!0,this.isAsync?(rr.add(this),Iu||(Iu=!0,pe.read(gg),pe.resolveKeyframes(mg))):(this.readKeyframes(),this.complete())}readKeyframes(){const{unresolvedKeyframes:r,name:i,element:o,motionValue:l}=this;for(let c=0;c<r.length;c++)if(r[c]===null)if(c===0){const u=l==null?void 0:l.get(),h=r[r.length-1];if(u!==void 0)r[0]=u;else if(o&&i){const m=o.readValue(i,h);m!=null&&(r[0]=m)}r[0]===void 0&&(r[0]=h),l&&u===void 0&&l.set(r[0])}else r[c]=r[c-1]}setFinalKeyframe(){}measureInitialState(){}renderEndStyles(){}measureEndState(){}complete(){this.isComplete=!0,this.onComplete(this.unresolvedKeyframes,this.finalKeyframe),rr.delete(this)}cancel(){this.isComplete||(this.isScheduled=!1,rr.delete(this))}resume(){this.isComplete||this.scheduleResolve()}}const vg=t=>/^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(t),sb=/^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;function ob(t){const r=sb.exec(t);if(!r)return[,];const[,i,o,l]=r;return[`--${i??o}`,l]}function xg(t,r,i=1){const[o,l]=ob(t);if(!o)return;const c=window.getComputedStyle(r).getPropertyValue(o);if(c){const u=c.trim();return vg(u)?parseFloat(u):u}return kc(l)?xg(l,r,i+1):l}const yg=t=>r=>r.test(t),ab={test:t=>t==="auto",parse:t=>t},wg=[Kr,te,qt,Mn,Zw,qw,ab],Eh=t=>wg.find(yg(t));class bg extends $c{constructor(r,i,o,l,c){super(r,i,o,l,c,!0)}readKeyframes(){const{unresolvedKeyframes:r,element:i,name:o}=this;if(!i||!i.current)return;super.readKeyframes();for(let m=0;m<r.length;m++){let g=r[m];if(typeof g=="string"&&(g=g.trim(),kc(g))){const v=xg(g,i.current);v!==void 0&&(r[m]=v),m===r.length-1&&(this.finalKeyframe=g)}}if(this.resolveNoneKeyframes(),!Z0.has(o)||r.length!==2)return;const[l,c]=r,u=Eh(l),h=Eh(c);if(u!==h)if(Sh(u)&&Sh(h))for(let m=0;m<r.length;m++){const g=r[m];typeof g=="string"&&(r[m]=parseFloat(g))}else this.needsMeasurement=!0}resolveNoneKeyframes(){const{unresolvedKeyframes:r,name:i}=this,o=[];for(let l=0;l<r.length;l++)V5(r[l])&&o.push(l);o.length&&eb(r,o,i)}measureInitialState(){const{element:r,unresolvedKeyframes:i,name:o}=this;if(!r||!r.current)return;o==="height"&&(this.suspendedScrollY=window.pageYOffset),this.measuredOrigin=Or[o](r.measureViewportBox(),window.getComputedStyle(r.current)),i[0]=this.measuredOrigin;const l=i[i.length-1];l!==void 0&&r.getValue(o,l).jump(l,!1)}measureEndState(){var r;const{element:i,name:o,unresolvedKeyframes:l}=this;if(!i||!i.current)return;const c=i.getValue(o);c&&c.jump(this.measuredOrigin,!1);const u=l.length-1,h=l[u];l[u]=Or[o](i.measureViewportBox(),window.getComputedStyle(i.current)),h!==null&&this.finalKeyframe===void 0&&(this.finalKeyframe=h),!((r=this.removedTransforms)===null||r===void 0)&&r.length&&this.removedTransforms.forEach(([m,g])=>{i.getValue(m).set(g)}),this.resolveNoneKeyframes()}}const Nh=(t,r)=>r==="zIndex"?!1:!!(typeof t=="number"||Array.isArray(t)||typeof t=="string"&&(zn.test(t)||t==="0")&&!t.startsWith("url("));function lb(t){const r=t[0];if(t.length===1)return!0;for(let i=0;i<t.length;i++)if(t[i]!==r)return!0}function ub(t,r,i,o){const l=t[0];if(l===null)return!1;if(r==="display"||r==="visibility")return!0;const c=t[t.length-1],u=Nh(l,r),h=Nh(c,r);return!u||!h?!1:lb(t)||(i==="spring"||Rc(i))&&o}const cb=t=>t!==null;function aa(t,{repeat:r,repeatType:i="loop"},o){const l=t.filter(cb),c=r&&i!=="loop"&&r%2===1?0:l.length-1;return!c||o===void 0?l[c]:o}const db=40;class kg{constructor({autoplay:r=!0,delay:i=0,type:o="keyframes",repeat:l=0,repeatDelay:c=0,repeatType:u="loop",...h}){this.isStopped=!1,this.hasAttemptedResolve=!1,this.createdAt=Zt.now(),this.options={autoplay:r,delay:i,type:o,repeat:l,repeatDelay:c,repeatType:u,...h},this.updateFinishedPromise()}calcStartTime(){return this.resolvedAt?this.resolvedAt-this.createdAt>db?this.resolvedAt:this.createdAt:this.createdAt}get resolved(){return!this._resolved&&!this.hasAttemptedResolve&&ib(),this._resolved}onKeyframesResolved(r,i){this.resolvedAt=Zt.now(),this.hasAttemptedResolve=!0;const{name:o,type:l,velocity:c,delay:u,onComplete:h,onUpdate:m,isGenerator:g}=this.options;if(!g&&!ub(r,o,l,c))if(u)this.options.duration=0;else{m&&m(aa(r,this.options,i)),h&&h(),this.resolveFinishedPromise();return}const v=this.initPlayback(r,i);v!==!1&&(this._resolved={keyframes:r,finalKeyframe:i,...v},this.onPostResolved())}onPostResolved(){}then(r,i){return this.currentFinishedPromise.then(r,i)}flatten(){this.options.type="keyframes",this.options.ease="linear"}updateFinishedPromise(){this.currentFinishedPromise=new Promise(r=>{this.resolveFinishedPromise=r})}}const Re=(t,r,i)=>t+(r-t)*i;function hu(t,r,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?t+(r-t)*6*i:i<1/2?r:i<2/3?t+(r-t)*(2/3-i)*6:t}function fb({hue:t,saturation:r,lightness:i,alpha:o}){t/=360,r/=100,i/=100;let l=0,c=0,u=0;if(!r)l=c=u=i;else{const h=i<.5?i*(1+r):i+r-i*r,m=2*i-h;l=hu(m,h,t+1/3),c=hu(m,h,t),u=hu(m,h,t-1/3)}return{red:Math.round(l*255),green:Math.round(c*255),blue:Math.round(u*255),alpha:o}}function Wo(t,r){return i=>i>0?r:t}const mu=(t,r,i)=>{const o=t*t,l=i*(r*r-o)+o;return l<0?0:Math.sqrt(l)},pb=[Ou,nr,Mr],hb=t=>pb.find(r=>r.test(t));function Ph(t){const r=hb(t);if(!r)return!1;let i=r.parse(t);return r===Mr&&(i=fb(i)),i}const Th=(t,r)=>{const i=Ph(t),o=Ph(r);if(!i||!o)return Wo(t,r);const l={...i};return c=>(l.red=mu(i.red,o.red,c),l.green=mu(i.green,o.green,c),l.blue=mu(i.blue,o.blue,c),l.alpha=Re(i.alpha,o.alpha,c),nr.transform(l))},mb=(t,r)=>i=>r(t(i)),as=(...t)=>t.reduce(mb),$u=new Set(["none","hidden"]);function gb(t,r){return $u.has(t)?i=>i<=0?t:r:i=>i>=1?r:t}function vb(t,r){return i=>Re(t,r,i)}function Uc(t){return typeof t=="number"?vb:typeof t=="string"?kc(t)?Wo:rt.test(t)?Th:wb:Array.isArray(t)?Sg:typeof t=="object"?rt.test(t)?Th:xb:Wo}function Sg(t,r){const i=[...t],o=i.length,l=t.map((c,u)=>Uc(c)(c,r[u]));return c=>{for(let u=0;u<o;u++)i[u]=l[u](c);return i}}function xb(t,r){const i={...t,...r},o={};for(const l in i)t[l]!==void 0&&r[l]!==void 0&&(o[l]=Uc(t[l])(t[l],r[l]));return l=>{for(const c in o)i[c]=o[c](l);return i}}function yb(t,r){var i;const o=[],l={color:0,var:0,number:0};for(let c=0;c<r.values.length;c++){const u=r.types[c],h=t.indexes[u][l[u]],m=(i=t.values[h])!==null&&i!==void 0?i:0;o[c]=m,l[u]++}return o}const wb=(t,r)=>{const i=zn.createTransformer(r),o=Qi(t),l=Qi(r);return o.indexes.var.length===l.indexes.var.length&&o.indexes.color.length===l.indexes.color.length&&o.indexes.number.length>=l.indexes.number.length?$u.has(t)&&!l.values.length||$u.has(r)&&!o.values.length?gb(t,r):as(Sg(yb(o,l),l.values),i):Wo(t,r)};function jg(t,r,i){return typeof t=="number"&&typeof r=="number"&&typeof i=="number"?Re(t,r,i):Uc(t)(t,r)}const bb=5;function Cg(t,r,i){const o=Math.max(r-bb,0);return zc(i-t(o),r-o)}const _e={stiffness:100,damping:10,mass:1,velocity:0,duration:800,bounce:.3,visualDuration:.3,restSpeed:{granular:.01,default:2},restDelta:{granular:.005,default:.5},minDuration:.01,maxDuration:10,minDamping:.05,maxDamping:1},gu=.001;function kb({duration:t=_e.duration,bounce:r=_e.bounce,velocity:i=_e.velocity,mass:o=_e.mass}){let l,c,u=1-r;u=Jt(_e.minDamping,_e.maxDamping,u),t=Jt(_e.minDuration,_e.maxDuration,cn(t)),u<1?(l=g=>{const v=g*u,x=v*t,w=v-i,S=Uu(g,u),j=Math.exp(-x);return gu-w/S*j},c=g=>{const x=g*u*t,w=x*i+i,S=Math.pow(u,2)*Math.pow(g,2)*t,j=Math.exp(-x),N=Uu(Math.pow(g,2),u);return(-l(g)+gu>0?-1:1)*((w-S)*j)/N}):(l=g=>{const v=Math.exp(-g*t),x=(g-i)*t+1;return-gu+v*x},c=g=>{const v=Math.exp(-g*t),x=(i-g)*(t*t);return v*x});const h=5/t,m=jb(l,c,h);if(t=un(t),isNaN(m))return{stiffness:_e.stiffness,damping:_e.damping,duration:t};{const g=Math.pow(m,2)*o;return{stiffness:g,damping:u*2*Math.sqrt(o*g),duration:t}}}const Sb=12;function jb(t,r,i){let o=i;for(let l=1;l<Sb;l++)o=o-t(o)/r(o);return o}function Uu(t,r){return t*Math.sqrt(1-r*r)}const Cb=["duration","bounce"],Eb=["stiffness","damping","mass"];function Rh(t,r){return r.some(i=>t[i]!==void 0)}function Nb(t){let r={velocity:_e.velocity,stiffness:_e.stiffness,damping:_e.damping,mass:_e.mass,isResolvedFromDuration:!1,...t};if(!Rh(t,Eb)&&Rh(t,Cb))if(t.visualDuration){const i=t.visualDuration,o=2*Math.PI/(i*1.2),l=o*o,c=2*Jt(.05,1,1-(t.bounce||0))*Math.sqrt(l);r={...r,mass:_e.mass,stiffness:l,damping:c}}else{const i=kb(t);r={...r,...i,mass:_e.mass},r.isResolvedFromDuration=!0}return r}function Eg(t=_e.visualDuration,r=_e.bounce){const i=typeof t!="object"?{visualDuration:t,keyframes:[0,1],bounce:r}:t;let{restSpeed:o,restDelta:l}=i;const c=i.keyframes[0],u=i.keyframes[i.keyframes.length-1],h={done:!1,value:c},{stiffness:m,damping:g,mass:v,duration:x,velocity:w,isResolvedFromDuration:S}=Nb({...i,velocity:-cn(i.velocity||0)}),j=w||0,N=g/(2*Math.sqrt(m*v)),E=u-c,A=cn(Math.sqrt(m/v)),D=Math.abs(E)<5;o||(o=D?_e.restSpeed.granular:_e.restSpeed.default),l||(l=D?_e.restDelta.granular:_e.restDelta.default);let _;if(N<1){const I=Uu(A,N);_=G=>{const ne=Math.exp(-N*A*G);return u-ne*((j+N*A*E)/I*Math.sin(I*G)+E*Math.cos(I*G))}}else if(N===1)_=I=>u-Math.exp(-A*I)*(E+(j+A*E)*I);else{const I=A*Math.sqrt(N*N-1);_=G=>{const ne=Math.exp(-N*A*G),Q=Math.min(I*G,300);return u-ne*((j+N*A*E)*Math.sinh(Q)+I*E*Math.cosh(Q))/I}}const z={calculatedDuration:S&&x||null,next:I=>{const G=_(I);if(S)h.done=I>=x;else{let ne=0;N<1&&(ne=I===0?un(j):Cg(_,I,G));const Q=Math.abs(ne)<=o,he=Math.abs(u-G)<=l;h.done=Q&&he}return h.value=h.done?u:G,h},toString:()=>{const I=Math.min(W0(z),Du),G=H0(ne=>z.next(I*ne).value,I,30);return I+"ms "+G}};return z}function Ah({keyframes:t,velocity:r=0,power:i=.8,timeConstant:o=325,bounceDamping:l=10,bounceStiffness:c=500,modifyTarget:u,min:h,max:m,restDelta:g=.5,restSpeed:v}){const x=t[0],w={done:!1,value:x},S=Q=>h!==void 0&&Q<h||m!==void 0&&Q>m,j=Q=>h===void 0?m:m===void 0||Math.abs(h-Q)<Math.abs(m-Q)?h:m;let N=i*r;const E=x+N,A=u===void 0?E:u(E);A!==E&&(N=A-x);const D=Q=>-N*Math.exp(-Q/o),_=Q=>A+D(Q),z=Q=>{const he=D(Q),ye=_(Q);w.done=Math.abs(he)<=g,w.value=w.done?A:ye};let I,G;const ne=Q=>{S(w.value)&&(I=Q,G=Eg({keyframes:[w.value,j(w.value)],velocity:Cg(_,Q,w.value),damping:l,stiffness:c,restDelta:g,restSpeed:v}))};return ne(0),{calculatedDuration:null,next:Q=>{let he=!1;return!G&&I===void 0&&(he=!0,z(Q),ne(Q)),I!==void 0&&Q>=I?G.next(Q-I):(!he&&z(Q),w)}}}const Pb=os(.42,0,1,1),Tb=os(0,0,.58,1),Ng=os(.42,0,.58,1),Rb=t=>Array.isArray(t)&&typeof t[0]!="number",Ab={linear:ut,easeIn:Pb,easeInOut:Ng,easeOut:Tb,circIn:Oc,circInOut:ag,circOut:og,backIn:Vc,backInOut:ig,backOut:rg,anticipate:sg},_h=t=>{if(Ac(t)){S0(t.length===4);const[r,i,o,l]=t;return os(r,i,o,l)}else if(typeof t=="string")return Ab[t];return t};function _b(t,r,i){const o=[],l=i||jg,c=t.length-1;for(let u=0;u<c;u++){let h=l(t[u],t[u+1]);if(r){const m=Array.isArray(r)?r[u]||ut:r;h=as(m,h)}o.push(h)}return o}function Wc(t,r,{clamp:i=!0,ease:o,mixer:l}={}){const c=t.length;if(S0(c===r.length),c===1)return()=>r[0];if(c===2&&r[0]===r[1])return()=>r[1];const u=t[0]===t[1];t[0]>t[c-1]&&(t=[...t].reverse(),r=[...r].reverse());const h=_b(r,o,l),m=h.length,g=v=>{if(u&&v<t[0])return r[0];let x=0;if(m>1)for(;x<t.length-2&&!(v<t[x+1]);x++);const w=ir(t[x],t[x+1],v);return h[x](w)};return i?v=>g(Jt(t[0],t[c-1],v)):g}function Mb(t,r){const i=t[t.length-1];for(let o=1;o<=r;o++){const l=ir(0,r,o);t.push(Re(i,1,l))}}function Pg(t){const r=[0];return Mb(r,t.length-1),r}function Lb(t,r){return t.map(i=>i*r)}function Db(t,r){return t.map(()=>r||Ng).splice(0,t.length-1)}function Ho({duration:t=300,keyframes:r,times:i,ease:o="easeInOut"}){const l=Rb(o)?o.map(_h):_h(o),c={done:!1,value:r[0]},u=Lb(i&&i.length===r.length?i:Pg(r),t),h=Wc(u,r,{ease:Array.isArray(l)?l:Db(r,l)});return{calculatedDuration:t,next:m=>(c.value=h(m),c.done=m>=t,c)}}const zb=t=>{const r=({timestamp:i})=>t(i);return{start:()=>pe.update(r,!0),stop:()=>Ut(r),now:()=>Be.isProcessing?Be.timestamp:Zt.now()}},Vb={decay:Ah,inertia:Ah,tween:Ho,keyframes:Ho,spring:Eg},Ob=t=>t/100;class la extends kg{constructor(r){super(r),this.holdTime=null,this.cancelTime=null,this.currentTime=0,this.playbackSpeed=1,this.pendingPlayState="running",this.startTime=null,this.state="idle",this.stop=()=>{if(this.resolver.cancel(),this.isStopped=!0,this.state==="idle")return;this.teardown();const{onStop:m}=this.options;m&&m()};const{name:i,motionValue:o,element:l,keyframes:c}=this.options,u=(l==null?void 0:l.KeyframeResolver)||$c,h=(m,g)=>this.onKeyframesResolved(m,g);this.resolver=new u(c,h,i,o,l),this.resolver.scheduleResolve()}flatten(){super.flatten(),this._resolved&&Object.assign(this._resolved,this.initPlayback(this._resolved.keyframes))}initPlayback(r){const{type:i="keyframes",repeat:o=0,repeatDelay:l=0,repeatType:c,velocity:u=0}=this.options,h=Rc(i)?i:Vb[i]||Ho;let m,g;h!==Ho&&typeof r[0]!="number"&&(m=as(Ob,jg(r[0],r[1])),r=[0,100]);const v=h({...this.options,keyframes:r});c==="mirror"&&(g=h({...this.options,keyframes:[...r].reverse(),velocity:-u})),v.calculatedDuration===null&&(v.calculatedDuration=W0(v));const{calculatedDuration:x}=v,w=x+l,S=w*(o+1)-l;return{generator:v,mirroredGenerator:g,mapPercentToKeyframes:m,calculatedDuration:x,resolvedDuration:w,totalDuration:S}}onPostResolved(){const{autoplay:r=!0}=this.options;this.play(),this.pendingPlayState==="paused"||!r?this.pause():this.state=this.pendingPlayState}tick(r,i=!1){const{resolved:o}=this;if(!o){const{keyframes:Q}=this.options;return{done:!0,value:Q[Q.length-1]}}const{finalKeyframe:l,generator:c,mirroredGenerator:u,mapPercentToKeyframes:h,keyframes:m,calculatedDuration:g,totalDuration:v,resolvedDuration:x}=o;if(this.startTime===null)return c.next(0);const{delay:w,repeat:S,repeatType:j,repeatDelay:N,onUpdate:E}=this.options;this.speed>0?this.startTime=Math.min(this.startTime,r):this.speed<0&&(this.startTime=Math.min(r-v/this.speed,this.startTime)),i?this.currentTime=r:this.holdTime!==null?this.currentTime=this.holdTime:this.currentTime=Math.round(r-this.startTime)*this.speed;const A=this.currentTime-w*(this.speed>=0?1:-1),D=this.speed>=0?A<0:A>v;this.currentTime=Math.max(A,0),this.state==="finished"&&this.holdTime===null&&(this.currentTime=v);let _=this.currentTime,z=c;if(S){const Q=Math.min(this.currentTime,v)/x;let he=Math.floor(Q),ye=Q%1;!ye&&Q>=1&&(ye=1),ye===1&&he--,he=Math.min(he,S+1),!!(he%2)&&(j==="reverse"?(ye=1-ye,N&&(ye-=N/x)):j==="mirror"&&(z=u)),_=Jt(0,1,ye)*x}const I=D?{done:!1,value:m[0]}:z.next(_);h&&(I.value=h(I.value));let{done:G}=I;!D&&g!==null&&(G=this.speed>=0?this.currentTime>=v:this.currentTime<=0);const ne=this.holdTime===null&&(this.state==="finished"||this.state==="running"&&G);return ne&&l!==void 0&&(I.value=aa(m,this.options,l)),E&&E(I.value),ne&&this.finish(),I}get duration(){const{resolved:r}=this;return r?cn(r.calculatedDuration):0}get time(){return cn(this.currentTime)}set time(r){r=un(r),this.currentTime=r,this.holdTime!==null||this.speed===0?this.holdTime=r:this.driver&&(this.startTime=this.driver.now()-r/this.speed)}get speed(){return this.playbackSpeed}set speed(r){const i=this.playbackSpeed!==r;this.playbackSpeed=r,i&&(this.time=cn(this.currentTime))}play(){if(this.resolver.isScheduled||this.resolver.resume(),!this._resolved){this.pendingPlayState="running";return}if(this.isStopped)return;const{driver:r=zb,onPlay:i,startTime:o}=this.options;this.driver||(this.driver=r(c=>this.tick(c))),i&&i();const l=this.driver.now();this.holdTime!==null?this.startTime=l-this.holdTime:this.startTime?this.state==="finished"&&(this.startTime=l):this.startTime=o??this.calcStartTime(),this.state==="finished"&&this.updateFinishedPromise(),this.cancelTime=this.startTime,this.holdTime=null,this.state="running",this.driver.start()}pause(){var r;if(!this._resolved){this.pendingPlayState="paused";return}this.state="paused",this.holdTime=(r=this.currentTime)!==null&&r!==void 0?r:0}complete(){this.state!=="running"&&this.play(),this.pendingPlayState=this.state="finished",this.holdTime=null}finish(){this.teardown(),this.state="finished";const{onComplete:r}=this.options;r&&r()}cancel(){this.cancelTime!==null&&this.tick(this.cancelTime),this.teardown(),this.updateFinishedPromise()}teardown(){this.state="idle",this.stopDriver(),this.resolveFinishedPromise(),this.updateFinishedPromise(),this.startTime=this.cancelTime=null,this.resolver.cancel()}stopDriver(){this.driver&&(this.driver.stop(),this.driver=void 0)}sample(r){return this.startTime=0,this.tick(r,!0)}}function Fb(t){return new la(t)}const Ib=new Set(["opacity","clipPath","filter","transform"]);function Bb(t,r,i,{delay:o=0,duration:l=300,repeat:c=0,repeatType:u="loop",ease:h="easeInOut",times:m}={}){const g={[r]:i};m&&(g.offset=m);const v=G0(h,l);return Array.isArray(v)&&(g.easing=v),t.animate(g,{delay:o,duration:l,easing:Array.isArray(v)?"linear":v,fill:"both",iterations:c+1,direction:u==="reverse"?"alternate":"normal"})}const $b=mc(()=>Object.hasOwnProperty.call(Element.prototype,"animate")),Ko=10,Ub=2e4;function Wb(t){return Rc(t.type)||t.type==="spring"||!K0(t.ease)}function Hb(t,r){const i=new la({...r,keyframes:t,repeat:0,delay:0,isGenerator:!0});let o={done:!1,value:t[0]};const l=[];let c=0;for(;!o.done&&c<Ub;)o=i.sample(c),l.push(o.value),c+=Ko;return{times:void 0,keyframes:l,duration:c-Ko,ease:"linear"}}const Tg={anticipate:sg,backInOut:ig,circInOut:ag};function Kb(t){return t in Tg}class Mh extends kg{constructor(r){super(r);const{name:i,motionValue:o,element:l,keyframes:c}=this.options;this.resolver=new bg(c,(u,h)=>this.onKeyframesResolved(u,h),i,o,l),this.resolver.scheduleResolve()}initPlayback(r,i){let{duration:o=300,times:l,ease:c,type:u,motionValue:h,name:m,startTime:g}=this.options;if(!h.owner||!h.owner.current)return!1;if(typeof c=="string"&&Uo()&&Kb(c)&&(c=Tg[c]),Wb(this.options)){const{onComplete:x,onUpdate:w,motionValue:S,element:j,...N}=this.options,E=Hb(r,N);r=E.keyframes,r.length===1&&(r[1]=r[0]),o=E.duration,l=E.times,c=E.ease,u="keyframes"}const v=Bb(h.owner.current,m,r,{...this.options,duration:o,times:l,ease:c});return v.startTime=g??this.calcStartTime(),this.pendingTimeline?(vh(v,this.pendingTimeline),this.pendingTimeline=void 0):v.onfinish=()=>{const{onComplete:x}=this.options;h.set(aa(r,this.options,i)),x&&x(),this.cancel(),this.resolveFinishedPromise()},{animation:v,duration:o,times:l,type:u,ease:c,keyframes:r}}get duration(){const{resolved:r}=this;if(!r)return 0;const{duration:i}=r;return cn(i)}get time(){const{resolved:r}=this;if(!r)return 0;const{animation:i}=r;return cn(i.currentTime||0)}set time(r){const{resolved:i}=this;if(!i)return;const{animation:o}=i;o.currentTime=un(r)}get speed(){const{resolved:r}=this;if(!r)return 1;const{animation:i}=r;return i.playbackRate}set speed(r){const{resolved:i}=this;if(!i)return;const{animation:o}=i;o.playbackRate=r}get state(){const{resolved:r}=this;if(!r)return"idle";const{animation:i}=r;return i.playState}get startTime(){const{resolved:r}=this;if(!r)return null;const{animation:i}=r;return i.startTime}attachTimeline(r){if(!this._resolved)this.pendingTimeline=r;else{const{resolved:i}=this;if(!i)return ut;const{animation:o}=i;vh(o,r)}return ut}play(){if(this.isStopped)return;const{resolved:r}=this;if(!r)return;const{animation:i}=r;i.playState==="finished"&&this.updateFinishedPromise(),i.play()}pause(){const{resolved:r}=this;if(!r)return;const{animation:i}=r;i.pause()}stop(){if(this.resolver.cancel(),this.isStopped=!0,this.state==="idle")return;this.resolveFinishedPromise(),this.updateFinishedPromise();const{resolved:r}=this;if(!r)return;const{animation:i,keyframes:o,duration:l,type:c,ease:u,times:h}=r;if(i.playState==="idle"||i.playState==="finished")return;if(this.time){const{motionValue:g,onUpdate:v,onComplete:x,element:w,...S}=this.options,j=new la({...S,keyframes:o,duration:l,type:c,ease:u,times:h,isGenerator:!0}),N=un(this.time);g.setWithVelocity(j.sample(N-Ko).value,j.sample(N).value,Ko)}const{onStop:m}=this.options;m&&m(),this.cancel()}complete(){const{resolved:r}=this;r&&r.animation.finish()}cancel(){const{resolved:r}=this;r&&r.animation.cancel()}static supports(r){const{motionValue:i,name:o,repeatDelay:l,repeatType:c,damping:u,type:h}=r;if(!i||!i.owner||!(i.owner.current instanceof HTMLElement))return!1;const{onUpdate:m,transformTemplate:g}=i.owner.getProps();return $b()&&o&&Ib.has(o)&&!m&&!g&&!l&&c!=="mirror"&&u!==0&&h!=="inertia"}}const Gb={type:"spring",stiffness:500,damping:25,restSpeed:10},Yb=t=>({type:"spring",stiffness:550,damping:t===0?2*Math.sqrt(550):30,restSpeed:10}),Xb={type:"keyframes",duration:.8},Qb={type:"keyframes",ease:[.25,.1,.35,1],duration:.3},qb=(t,{keyframes:r})=>r.length>2?Xb:or.has(t)?t.startsWith("scale")?Yb(r[1]):Gb:Qb;function Zb({when:t,delay:r,delayChildren:i,staggerChildren:o,staggerDirection:l,repeat:c,repeatType:u,repeatDelay:h,from:m,elapsed:g,...v}){return!!Object.keys(v).length}const Hc=(t,r,i,o={},l,c)=>u=>{const h=Tc(o,t)||{},m=h.delay||o.delay||0;let{elapsed:g=0}=o;g=g-un(m);let v={keyframes:Array.isArray(i)?i:[null,i],ease:"easeOut",velocity:r.getVelocity(),...h,delay:-g,onUpdate:w=>{r.set(w),h.onUpdate&&h.onUpdate(w)},onComplete:()=>{u(),h.onComplete&&h.onComplete()},name:t,motionValue:r,element:c?void 0:l};Zb(h)||(v={...v,...qb(t,v)}),v.duration&&(v.duration=un(v.duration)),v.repeatDelay&&(v.repeatDelay=un(v.repeatDelay)),v.from!==void 0&&(v.keyframes[0]=v.from);let x=!1;if((v.type===!1||v.duration===0&&!v.repeatDelay)&&(v.duration=0,v.delay===0&&(x=!0)),x&&!c&&r.get()!==void 0){const w=aa(v.keyframes,h);if(w!==void 0)return pe.update(()=>{v.onUpdate(w),v.onComplete()}),new y5([])}return!c&&Mh.supports(v)?new Mh(v):new la(v)};function Jb({protectedKeys:t,needsAnimating:r},i){const o=t.hasOwnProperty(i)&&r[i]!==!0;return r[i]=!1,o}function Rg(t,r,{delay:i=0,transitionOverride:o,type:l}={}){var c;let{transition:u=t.getDefaultTransition(),transitionEnd:h,...m}=r;o&&(u=o);const g=[],v=l&&t.animationState&&t.animationState.getState()[l];for(const x in m){const w=t.getValue(x,(c=t.latestValues[x])!==null&&c!==void 0?c:null),S=m[x];if(S===void 0||v&&Jb(v,x))continue;const j={delay:i,...Tc(u||{},x)};let N=!1;if(window.MotionHandoffAnimation){const A=J0(t);if(A){const D=window.MotionHandoffAnimation(A,x,pe);D!==null&&(j.startTime=D,N=!0)}}Vu(t,x),w.start(Hc(x,w,S,t.shouldReduceMotion&&Z0.has(x)?{type:!1}:j,t,N));const E=w.animation;E&&g.push(E)}return h&&Promise.all(g).then(()=>{pe.update(()=>{h&&_5(t,h)})}),g}function Wu(t,r,i={}){var o;const l=oa(t,r,i.type==="exit"?(o=t.presenceContext)===null||o===void 0?void 0:o.custom:void 0);let{transition:c=t.getDefaultTransition()||{}}=l||{};i.transitionOverride&&(c=i.transitionOverride);const u=l?()=>Promise.all(Rg(t,l,i)):()=>Promise.resolve(),h=t.variantChildren&&t.variantChildren.size?(g=0)=>{const{delayChildren:v=0,staggerChildren:x,staggerDirection:w}=c;return ek(t,r,v+g,x,w,i)}:()=>Promise.resolve(),{when:m}=c;if(m){const[g,v]=m==="beforeChildren"?[u,h]:[h,u];return g().then(()=>v())}else return Promise.all([u(),h(i.delay)])}function ek(t,r,i=0,o=0,l=1,c){const u=[],h=(t.variantChildren.size-1)*o,m=l===1?(g=0)=>g*o:(g=0)=>h-g*o;return Array.from(t.variantChildren).sort(tk).forEach((g,v)=>{g.notify("AnimationStart",r),u.push(Wu(g,r,{...c,delay:i+m(v)}).then(()=>g.notify("AnimationComplete",r)))}),Promise.all(u)}function tk(t,r){return t.sortNodePosition(r)}function nk(t,r,i={}){t.notify("AnimationStart",r);let o;if(Array.isArray(r)){const l=r.map(c=>Wu(t,c,i));o=Promise.all(l)}else if(typeof r=="string")o=Wu(t,r,i);else{const l=typeof r=="function"?oa(t,r,i.custom):r;o=Promise.all(Rg(t,l,i))}return o.then(()=>{t.notify("AnimationComplete",r)})}const rk=vc.length;function Ag(t){if(!t)return;if(!t.isControllingVariants){const i=t.parent?Ag(t.parent)||{}:{};return t.props.initial!==void 0&&(i.initial=t.props.initial),i}const r={};for(let i=0;i<rk;i++){const o=vc[i],l=t.props[o];(Yi(l)||l===!1)&&(r[o]=l)}return r}const ik=[...gc].reverse(),sk=gc.length;function ok(t){return r=>Promise.all(r.map(({animation:i,options:o})=>nk(t,i,o)))}function ak(t){let r=ok(t),i=Lh(),o=!0;const l=m=>(g,v)=>{var x;const w=oa(t,v,m==="exit"?(x=t.presenceContext)===null||x===void 0?void 0:x.custom:void 0);if(w){const{transition:S,transitionEnd:j,...N}=w;g={...g,...N,...j}}return g};function c(m){r=m(t)}function u(m){const{props:g}=t,v=Ag(t.parent)||{},x=[],w=new Set;let S={},j=1/0;for(let E=0;E<sk;E++){const A=ik[E],D=i[A],_=g[A]!==void 0?g[A]:v[A],z=Yi(_),I=A===m?D.isActive:null;I===!1&&(j=E);let G=_===v[A]&&_!==g[A]&&z;if(G&&o&&t.manuallyAnimateOnMount&&(G=!1),D.protectedKeys={...S},!D.isActive&&I===null||!_&&!D.prevProp||ia(_)||typeof _=="boolean")continue;const ne=lk(D.prevProp,_);let Q=ne||A===m&&D.isActive&&!G&&z||E>j&&z,he=!1;const ye=Array.isArray(_)?_:[_];let Ze=ye.reduce(l(A),{});I===!1&&(Ze={});const{prevResolvedValues:it={}}=D,Ue={...it,...Ze},Xe=oe=>{Q=!0,w.has(oe)&&(he=!0,w.delete(oe)),D.needsAnimating[oe]=!0;const U=t.getValue(oe);U&&(U.liveStyle=!1)};for(const oe in Ue){const U=Ze[oe],Z=it[oe];if(S.hasOwnProperty(oe))continue;let H=!1;Lu(U)&&Lu(Z)?H=!$0(U,Z):H=U!==Z,H?U!=null?Xe(oe):w.add(oe):U!==void 0&&w.has(oe)?Xe(oe):D.protectedKeys[oe]=!0}D.prevProp=_,D.prevResolvedValues=Ze,D.isActive&&(S={...S,...Ze}),o&&t.blockInitialAnimation&&(Q=!1),Q&&(!(G&&ne)||he)&&x.push(...ye.map(oe=>({animation:oe,options:{type:A}})))}if(w.size){const E={};w.forEach(A=>{const D=t.getBaseTarget(A),_=t.getValue(A);_&&(_.liveStyle=!0),E[A]=D??null}),x.push({animation:E})}let N=!!x.length;return o&&(g.initial===!1||g.initial===g.animate)&&!t.manuallyAnimateOnMount&&(N=!1),o=!1,N?r(x):Promise.resolve()}function h(m,g){var v;if(i[m].isActive===g)return Promise.resolve();(v=t.variantChildren)===null||v===void 0||v.forEach(w=>{var S;return(S=w.animationState)===null||S===void 0?void 0:S.setActive(m,g)}),i[m].isActive=g;const x=u(m);for(const w in i)i[w].protectedKeys={};return x}return{animateChanges:u,setActive:h,setAnimateFunction:c,getState:()=>i,reset:()=>{i=Lh(),o=!0}}}function lk(t,r){return typeof r=="string"?r!==t:Array.isArray(r)?!$0(r,t):!1}function Zn(t=!1){return{isActive:t,protectedKeys:{},needsAnimating:{},prevResolvedValues:{}}}function Lh(){return{animate:Zn(!0),whileInView:Zn(),whileHover:Zn(),whileTap:Zn(),whileDrag:Zn(),whileFocus:Zn(),exit:Zn()}}class On{constructor(r){this.isMounted=!1,this.node=r}update(){}}class uk extends On{constructor(r){super(r),r.animationState||(r.animationState=ak(r))}updateAnimationControlsSubscription(){const{animate:r}=this.node.getProps();ia(r)&&(this.unmountControls=r.subscribe(this.node))}mount(){this.updateAnimationControlsSubscription()}update(){const{animate:r}=this.node.getProps(),{animate:i}=this.node.prevProps||{};r!==i&&this.updateAnimationControlsSubscription()}unmount(){var r;this.node.animationState.reset(),(r=this.unmountControls)===null||r===void 0||r.call(this)}}let ck=0;class dk extends On{constructor(){super(...arguments),this.id=ck++}update(){if(!this.node.presenceContext)return;const{isPresent:r,onExitComplete:i}=this.node.presenceContext,{isPresent:o}=this.node.prevPresenceContext||{};if(!this.node.animationState||r===o)return;const l=this.node.animationState.setActive("exit",!r);i&&!r&&l.then(()=>i(this.id))}mount(){const{register:r}=this.node.presenceContext||{};r&&(this.unmount=r(this.id))}unmount(){}}const fk={animation:{Feature:uk},exit:{Feature:dk}};function qi(t,r,i,o={passive:!0}){return t.addEventListener(r,i,o),()=>t.removeEventListener(r,i)}function ls(t){return{point:{x:t.pageX,y:t.pageY}}}const pk=t=>r=>_c(r)&&t(r,ls(r));function Ui(t,r,i,o){return qi(t,r,pk(i),o)}const Dh=(t,r)=>Math.abs(t-r);function hk(t,r){const i=Dh(t.x,r.x),o=Dh(t.y,r.y);return Math.sqrt(i**2+o**2)}class _g{constructor(r,i,{transformPagePoint:o,contextWindow:l,dragSnapToOrigin:c=!1}={}){if(this.startEvent=null,this.lastMoveEvent=null,this.lastMoveEventInfo=null,this.handlers={},this.contextWindow=window,this.updatePoint=()=>{if(!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const x=xu(this.lastMoveEventInfo,this.history),w=this.startEvent!==null,S=hk(x.offset,{x:0,y:0})>=3;if(!w&&!S)return;const{point:j}=x,{timestamp:N}=Be;this.history.push({...j,timestamp:N});const{onStart:E,onMove:A}=this.handlers;w||(E&&E(this.lastMoveEvent,x),this.startEvent=this.lastMoveEvent),A&&A(this.lastMoveEvent,x)},this.handlePointerMove=(x,w)=>{this.lastMoveEvent=x,this.lastMoveEventInfo=vu(w,this.transformPagePoint),pe.update(this.updatePoint,!0)},this.handlePointerUp=(x,w)=>{this.end();const{onEnd:S,onSessionEnd:j,resumeAnimation:N}=this.handlers;if(this.dragSnapToOrigin&&N&&N(),!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const E=xu(x.type==="pointercancel"?this.lastMoveEventInfo:vu(w,this.transformPagePoint),this.history);this.startEvent&&S&&S(x,E),j&&j(x,E)},!_c(r))return;this.dragSnapToOrigin=c,this.handlers=i,this.transformPagePoint=o,this.contextWindow=l||window;const u=ls(r),h=vu(u,this.transformPagePoint),{point:m}=h,{timestamp:g}=Be;this.history=[{...m,timestamp:g}];const{onSessionStart:v}=i;v&&v(r,xu(h,this.history)),this.removeListeners=as(Ui(this.contextWindow,"pointermove",this.handlePointerMove),Ui(this.contextWindow,"pointerup",this.handlePointerUp),Ui(this.contextWindow,"pointercancel",this.handlePointerUp))}updateHandlers(r){this.handlers=r}end(){this.removeListeners&&this.removeListeners(),Ut(this.updatePoint)}}function vu(t,r){return r?{point:r(t.point)}:t}function zh(t,r){return{x:t.x-r.x,y:t.y-r.y}}function xu({point:t},r){return{point:t,delta:zh(t,Mg(r)),offset:zh(t,mk(r)),velocity:gk(r,.1)}}function mk(t){return t[0]}function Mg(t){return t[t.length-1]}function gk(t,r){if(t.length<2)return{x:0,y:0};let i=t.length-1,o=null;const l=Mg(t);for(;i>=0&&(o=t[i],!(l.timestamp-o.timestamp>un(r)));)i--;if(!o)return{x:0,y:0};const c=cn(l.timestamp-o.timestamp);if(c===0)return{x:0,y:0};const u={x:(l.x-o.x)/c,y:(l.y-o.y)/c};return u.x===1/0&&(u.x=0),u.y===1/0&&(u.y=0),u}const Lg=1e-4,vk=1-Lg,xk=1+Lg,Dg=.01,yk=0-Dg,wk=0+Dg;function bt(t){return t.max-t.min}function bk(t,r,i){return Math.abs(t-r)<=i}function Vh(t,r,i,o=.5){t.origin=o,t.originPoint=Re(r.min,r.max,t.origin),t.scale=bt(i)/bt(r),t.translate=Re(i.min,i.max,t.origin)-t.originPoint,(t.scale>=vk&&t.scale<=xk||isNaN(t.scale))&&(t.scale=1),(t.translate>=yk&&t.translate<=wk||isNaN(t.translate))&&(t.translate=0)}function Wi(t,r,i,o){Vh(t.x,r.x,i.x,o?o.originX:void 0),Vh(t.y,r.y,i.y,o?o.originY:void 0)}function Oh(t,r,i){t.min=i.min+r.min,t.max=t.min+bt(r)}function kk(t,r,i){Oh(t.x,r.x,i.x),Oh(t.y,r.y,i.y)}function Fh(t,r,i){t.min=r.min-i.min,t.max=t.min+bt(r)}function Hi(t,r,i){Fh(t.x,r.x,i.x),Fh(t.y,r.y,i.y)}function Sk(t,{min:r,max:i},o){return r!==void 0&&t<r?t=o?Re(r,t,o.min):Math.max(t,r):i!==void 0&&t>i&&(t=o?Re(i,t,o.max):Math.min(t,i)),t}function Ih(t,r,i){return{min:r!==void 0?t.min+r:void 0,max:i!==void 0?t.max+i-(t.max-t.min):void 0}}function jk(t,{top:r,left:i,bottom:o,right:l}){return{x:Ih(t.x,i,l),y:Ih(t.y,r,o)}}function Bh(t,r){let i=r.min-t.min,o=r.max-t.max;return r.max-r.min<t.max-t.min&&([i,o]=[o,i]),{min:i,max:o}}function Ck(t,r){return{x:Bh(t.x,r.x),y:Bh(t.y,r.y)}}function Ek(t,r){let i=.5;const o=bt(t),l=bt(r);return l>o?i=ir(r.min,r.max-o,t.min):o>l&&(i=ir(t.min,t.max-l,r.min)),Jt(0,1,i)}function Nk(t,r){const i={};return r.min!==void 0&&(i.min=r.min-t.min),r.max!==void 0&&(i.max=r.max-t.min),i}const Hu=.35;function Pk(t=Hu){return t===!1?t=0:t===!0&&(t=Hu),{x:$h(t,"left","right"),y:$h(t,"top","bottom")}}function $h(t,r,i){return{min:Uh(t,r),max:Uh(t,i)}}function Uh(t,r){return typeof t=="number"?t:t[r]||0}const Wh=()=>({translate:0,scale:1,origin:0,originPoint:0}),Lr=()=>({x:Wh(),y:Wh()}),Hh=()=>({min:0,max:0}),ze=()=>({x:Hh(),y:Hh()});function At(t){return[t("x"),t("y")]}function zg({top:t,left:r,right:i,bottom:o}){return{x:{min:r,max:i},y:{min:t,max:o}}}function Tk({x:t,y:r}){return{top:r.min,right:t.max,bottom:r.max,left:t.min}}function Rk(t,r){if(!r)return t;const i=r({x:t.left,y:t.top}),o=r({x:t.right,y:t.bottom});return{top:i.y,left:i.x,bottom:o.y,right:o.x}}function yu(t){return t===void 0||t===1}function Ku({scale:t,scaleX:r,scaleY:i}){return!yu(t)||!yu(r)||!yu(i)}function er(t){return Ku(t)||Vg(t)||t.z||t.rotate||t.rotateX||t.rotateY||t.skewX||t.skewY}function Vg(t){return Kh(t.x)||Kh(t.y)}function Kh(t){return t&&t!=="0%"}function Go(t,r,i){const o=t-i,l=r*o;return i+l}function Gh(t,r,i,o,l){return l!==void 0&&(t=Go(t,l,o)),Go(t,i,o)+r}function Gu(t,r=0,i=1,o,l){t.min=Gh(t.min,r,i,o,l),t.max=Gh(t.max,r,i,o,l)}function Og(t,{x:r,y:i}){Gu(t.x,r.translate,r.scale,r.originPoint),Gu(t.y,i.translate,i.scale,i.originPoint)}const Yh=.999999999999,Xh=1.0000000000001;function Ak(t,r,i,o=!1){const l=i.length;if(!l)return;r.x=r.y=1;let c,u;for(let h=0;h<l;h++){c=i[h],u=c.projectionDelta;const{visualElement:m}=c.options;m&&m.props.style&&m.props.style.display==="contents"||(o&&c.options.layoutScroll&&c.scroll&&c!==c.root&&zr(t,{x:-c.scroll.offset.x,y:-c.scroll.offset.y}),u&&(r.x*=u.x.scale,r.y*=u.y.scale,Og(t,u)),o&&er(c.latestValues)&&zr(t,c.latestValues))}r.x<Xh&&r.x>Yh&&(r.x=1),r.y<Xh&&r.y>Yh&&(r.y=1)}function Dr(t,r){t.min=t.min+r,t.max=t.max+r}function Qh(t,r,i,o,l=.5){const c=Re(t.min,t.max,l);Gu(t,r,i,c,o)}function zr(t,r){Qh(t.x,r.x,r.scaleX,r.scale,r.originX),Qh(t.y,r.y,r.scaleY,r.scale,r.originY)}function Fg(t,r){return zg(Rk(t.getBoundingClientRect(),r))}function _k(t,r,i){const o=Fg(t,i),{scroll:l}=r;return l&&(Dr(o.x,l.offset.x),Dr(o.y,l.offset.y)),o}const Ig=({current:t})=>t?t.ownerDocument.defaultView:null,Mk=new WeakMap;class Lk{constructor(r){this.openDragLock=null,this.isDragging=!1,this.currentDirection=null,this.originPoint={x:0,y:0},this.constraints=!1,this.hasMutatedConstraints=!1,this.elastic=ze(),this.visualElement=r}start(r,{snapToCursor:i=!1}={}){const{presenceContext:o}=this.visualElement;if(o&&o.isPresent===!1)return;const l=v=>{const{dragSnapToOrigin:x}=this.getProps();x?this.pauseAnimation():this.stopAnimation(),i&&this.snapToCursor(ls(v).point)},c=(v,x)=>{const{drag:w,dragPropagation:S,onDragStart:j}=this.getProps();if(w&&!S&&(this.openDragLock&&this.openDragLock(),this.openDragLock=N5(w),!this.openDragLock))return;this.isDragging=!0,this.currentDirection=null,this.resolveConstraints(),this.visualElement.projection&&(this.visualElement.projection.isAnimationBlocked=!0,this.visualElement.projection.target=void 0),At(E=>{let A=this.getAxisMotionValue(E).get()||0;if(qt.test(A)){const{projection:D}=this.visualElement;if(D&&D.layout){const _=D.layout.layoutBox[E];_&&(A=bt(_)*(parseFloat(A)/100))}}this.originPoint[E]=A}),j&&pe.postRender(()=>j(v,x)),Vu(this.visualElement,"transform");const{animationState:N}=this.visualElement;N&&N.setActive("whileDrag",!0)},u=(v,x)=>{const{dragPropagation:w,dragDirectionLock:S,onDirectionLock:j,onDrag:N}=this.getProps();if(!w&&!this.openDragLock)return;const{offset:E}=x;if(S&&this.currentDirection===null){this.currentDirection=Dk(E),this.currentDirection!==null&&j&&j(this.currentDirection);return}this.updateAxis("x",x.point,E),this.updateAxis("y",x.point,E),this.visualElement.render(),N&&N(v,x)},h=(v,x)=>this.stop(v,x),m=()=>At(v=>{var x;return this.getAnimationState(v)==="paused"&&((x=this.getAxisMotionValue(v).animation)===null||x===void 0?void 0:x.play())}),{dragSnapToOrigin:g}=this.getProps();this.panSession=new _g(r,{onSessionStart:l,onStart:c,onMove:u,onSessionEnd:h,resumeAnimation:m},{transformPagePoint:this.visualElement.getTransformPagePoint(),dragSnapToOrigin:g,contextWindow:Ig(this.visualElement)})}stop(r,i){const o=this.isDragging;if(this.cancel(),!o)return;const{velocity:l}=i;this.startAnimation(l);const{onDragEnd:c}=this.getProps();c&&pe.postRender(()=>c(r,i))}cancel(){this.isDragging=!1;const{projection:r,animationState:i}=this.visualElement;r&&(r.isAnimationBlocked=!1),this.panSession&&this.panSession.end(),this.panSession=void 0;const{dragPropagation:o}=this.getProps();!o&&this.openDragLock&&(this.openDragLock(),this.openDragLock=null),i&&i.setActive("whileDrag",!1)}updateAxis(r,i,o){const{drag:l}=this.getProps();if(!o||!Eo(r,l,this.currentDirection))return;const c=this.getAxisMotionValue(r);let u=this.originPoint[r]+o[r];this.constraints&&this.constraints[r]&&(u=Sk(u,this.constraints[r],this.elastic[r])),c.set(u)}resolveConstraints(){var r;const{dragConstraints:i,dragElastic:o}=this.getProps(),l=this.visualElement.projection&&!this.visualElement.projection.layout?this.visualElement.projection.measure(!1):(r=this.visualElement.projection)===null||r===void 0?void 0:r.layout,c=this.constraints;i&&_r(i)?this.constraints||(this.constraints=this.resolveRefConstraints()):i&&l?this.constraints=jk(l.layoutBox,i):this.constraints=!1,this.elastic=Pk(o),c!==this.constraints&&l&&this.constraints&&!this.hasMutatedConstraints&&At(u=>{this.constraints!==!1&&this.getAxisMotionValue(u)&&(this.constraints[u]=Nk(l.layoutBox[u],this.constraints[u]))})}resolveRefConstraints(){const{dragConstraints:r,onMeasureDragConstraints:i}=this.getProps();if(!r||!_r(r))return!1;const o=r.current,{projection:l}=this.visualElement;if(!l||!l.layout)return!1;const c=_k(o,l.root,this.visualElement.getTransformPagePoint());let u=Ck(l.layout.layoutBox,c);if(i){const h=i(Tk(u));this.hasMutatedConstraints=!!h,h&&(u=zg(h))}return u}startAnimation(r){const{drag:i,dragMomentum:o,dragElastic:l,dragTransition:c,dragSnapToOrigin:u,onDragTransitionEnd:h}=this.getProps(),m=this.constraints||{},g=At(v=>{if(!Eo(v,i,this.currentDirection))return;let x=m&&m[v]||{};u&&(x={min:0,max:0});const w=l?200:1e6,S=l?40:1e7,j={type:"inertia",velocity:o?r[v]:0,bounceStiffness:w,bounceDamping:S,timeConstant:750,restDelta:1,restSpeed:10,...c,...x};return this.startAxisValueAnimation(v,j)});return Promise.all(g).then(h)}startAxisValueAnimation(r,i){const o=this.getAxisMotionValue(r);return Vu(this.visualElement,r),o.start(Hc(r,o,0,i,this.visualElement,!1))}stopAnimation(){At(r=>this.getAxisMotionValue(r).stop())}pauseAnimation(){At(r=>{var i;return(i=this.getAxisMotionValue(r).animation)===null||i===void 0?void 0:i.pause()})}getAnimationState(r){var i;return(i=this.getAxisMotionValue(r).animation)===null||i===void 0?void 0:i.state}getAxisMotionValue(r){const i=`_drag${r.toUpperCase()}`,o=this.visualElement.getProps(),l=o[i];return l||this.visualElement.getValue(r,(o.initial?o.initial[r]:void 0)||0)}snapToCursor(r){At(i=>{const{drag:o}=this.getProps();if(!Eo(i,o,this.currentDirection))return;const{projection:l}=this.visualElement,c=this.getAxisMotionValue(i);if(l&&l.layout){const{min:u,max:h}=l.layout.layoutBox[i];c.set(r[i]-Re(u,h,.5))}})}scalePositionWithinConstraints(){if(!this.visualElement.current)return;const{drag:r,dragConstraints:i}=this.getProps(),{projection:o}=this.visualElement;if(!_r(i)||!o||!this.constraints)return;this.stopAnimation();const l={x:0,y:0};At(u=>{const h=this.getAxisMotionValue(u);if(h&&this.constraints!==!1){const m=h.get();l[u]=Ek({min:m,max:m},this.constraints[u])}});const{transformTemplate:c}=this.visualElement.getProps();this.visualElement.current.style.transform=c?c({},""):"none",o.root&&o.root.updateScroll(),o.updateLayout(),this.resolveConstraints(),At(u=>{if(!Eo(u,r,null))return;const h=this.getAxisMotionValue(u),{min:m,max:g}=this.constraints[u];h.set(Re(m,g,l[u]))})}addListeners(){if(!this.visualElement.current)return;Mk.set(this.visualElement,this);const r=this.visualElement.current,i=Ui(r,"pointerdown",m=>{const{drag:g,dragListener:v=!0}=this.getProps();g&&v&&this.start(m)}),o=()=>{const{dragConstraints:m}=this.getProps();_r(m)&&m.current&&(this.constraints=this.resolveRefConstraints())},{projection:l}=this.visualElement,c=l.addEventListener("measure",o);l&&!l.layout&&(l.root&&l.root.updateScroll(),l.updateLayout()),pe.read(o);const u=qi(window,"resize",()=>this.scalePositionWithinConstraints()),h=l.addEventListener("didUpdate",(({delta:m,hasLayoutChanged:g})=>{this.isDragging&&g&&(At(v=>{const x=this.getAxisMotionValue(v);x&&(this.originPoint[v]+=m[v].translate,x.set(x.get()+m[v].translate))}),this.visualElement.render())}));return()=>{u(),i(),c(),h&&h()}}getProps(){const r=this.visualElement.getProps(),{drag:i=!1,dragDirectionLock:o=!1,dragPropagation:l=!1,dragConstraints:c=!1,dragElastic:u=Hu,dragMomentum:h=!0}=r;return{...r,drag:i,dragDirectionLock:o,dragPropagation:l,dragConstraints:c,dragElastic:u,dragMomentum:h}}}function Eo(t,r,i){return(r===!0||r===t)&&(i===null||i===t)}function Dk(t,r=10){let i=null;return Math.abs(t.y)>r?i="y":Math.abs(t.x)>r&&(i="x"),i}class zk extends On{constructor(r){super(r),this.removeGroupControls=ut,this.removeListeners=ut,this.controls=new Lk(r)}mount(){const{dragControls:r}=this.node.getProps();r&&(this.removeGroupControls=r.subscribe(this.controls)),this.removeListeners=this.controls.addListeners()||ut}unmount(){this.removeGroupControls(),this.removeListeners()}}const qh=t=>(r,i)=>{t&&pe.postRender(()=>t(r,i))};class Vk extends On{constructor(){super(...arguments),this.removePointerDownListener=ut}onPointerDown(r){this.session=new _g(r,this.createPanHandlers(),{transformPagePoint:this.node.getTransformPagePoint(),contextWindow:Ig(this.node)})}createPanHandlers(){const{onPanSessionStart:r,onPanStart:i,onPan:o,onPanEnd:l}=this.node.getProps();return{onSessionStart:qh(r),onStart:qh(i),onMove:o,onEnd:(c,u)=>{delete this.session,l&&pe.postRender(()=>l(c,u))}}}mount(){this.removePointerDownListener=Ui(this.node.current,"pointerdown",r=>this.onPointerDown(r))}update(){this.session&&this.session.updateHandlers(this.createPanHandlers())}unmount(){this.removePointerDownListener(),this.session&&this.session.end()}}const Mo={hasAnimatedSinceResize:!0,hasEverUpdated:!1};function Zh(t,r){return r.max===r.min?0:t/(r.max-r.min)*100}const Di={correct:(t,r)=>{if(!r.target)return t;if(typeof t=="string")if(te.test(t))t=parseFloat(t);else return t;const i=Zh(t,r.target.x),o=Zh(t,r.target.y);return`${i}% ${o}%`}},Ok={correct:(t,{treeScale:r,projectionDelta:i})=>{const o=t,l=zn.parse(t);if(l.length>5)return o;const c=zn.createTransformer(t),u=typeof l[0]!="number"?1:0,h=i.x.scale*r.x,m=i.y.scale*r.y;l[0+u]/=h,l[1+u]/=m;const g=Re(h,m,.5);return typeof l[2+u]=="number"&&(l[2+u]/=g),typeof l[3+u]=="number"&&(l[3+u]/=g),c(l)}};class Fk extends b.Component{componentDidMount(){const{visualElement:r,layoutGroup:i,switchLayoutGroup:o,layoutId:l}=this.props,{projection:c}=r;l5(Ik),c&&(i.group&&i.group.add(c),o&&o.register&&l&&o.register(c),c.root.didUpdate(),c.addEventListener("animationComplete",()=>{this.safeToRemove()}),c.setOptions({...c.options,onExitComplete:()=>this.safeToRemove()})),Mo.hasEverUpdated=!0}getSnapshotBeforeUpdate(r){const{layoutDependency:i,visualElement:o,drag:l,isPresent:c}=this.props,u=o.projection;return u&&(u.isPresent=c,l||r.layoutDependency!==i||i===void 0?u.willUpdate():this.safeToRemove(),r.isPresent!==c&&(c?u.promote():u.relegate()||pe.postRender(()=>{const h=u.getStack();(!h||!h.members.length)&&this.safeToRemove()}))),null}componentDidUpdate(){const{projection:r}=this.props.visualElement;r&&(r.root.didUpdate(),yc.postRender(()=>{!r.currentAnimation&&r.isLead()&&this.safeToRemove()}))}componentWillUnmount(){const{visualElement:r,layoutGroup:i,switchLayoutGroup:o}=this.props,{projection:l}=r;l&&(l.scheduleCheckAfterUnmount(),i&&i.group&&i.group.remove(l),o&&o.deregister&&o.deregister(l))}safeToRemove(){const{safeToRemove:r}=this.props;r&&r()}render(){return null}}function Bg(t){const[r,i]=k0(),o=b.useContext(pc);return f.jsx(Fk,{...t,layoutGroup:o,switchLayoutGroup:b.useContext(T0),isPresent:r,safeToRemove:i})}const Ik={borderRadius:{...Di,applyTo:["borderTopLeftRadius","borderTopRightRadius","borderBottomLeftRadius","borderBottomRightRadius"]},borderTopLeftRadius:Di,borderTopRightRadius:Di,borderBottomLeftRadius:Di,borderBottomRightRadius:Di,boxShadow:Ok};function Bk(t,r,i){const o=Ye(t)?t:Qt(t);return o.start(Hc("",o,r,i)),o.animation}function $k(t){return t instanceof SVGElement&&t.tagName!=="svg"}const Uk=(t,r)=>t.depth-r.depth;class Wk{constructor(){this.children=[],this.isDirty=!1}add(r){Mc(this.children,r),this.isDirty=!0}remove(r){Lc(this.children,r),this.isDirty=!0}forEach(r){this.isDirty&&this.children.sort(Uk),this.isDirty=!1,this.children.forEach(r)}}function Hk(t,r){const i=Zt.now(),o=({timestamp:l})=>{const c=l-i;c>=r&&(Ut(o),t(c-r))};return pe.read(o,!0),()=>Ut(o)}const $g=["TopLeft","TopRight","BottomLeft","BottomRight"],Kk=$g.length,Jh=t=>typeof t=="string"?parseFloat(t):t,em=t=>typeof t=="number"||te.test(t);function Gk(t,r,i,o,l,c){l?(t.opacity=Re(0,i.opacity!==void 0?i.opacity:1,Yk(o)),t.opacityExit=Re(r.opacity!==void 0?r.opacity:1,0,Xk(o))):c&&(t.opacity=Re(r.opacity!==void 0?r.opacity:1,i.opacity!==void 0?i.opacity:1,o));for(let u=0;u<Kk;u++){const h=`border${$g[u]}Radius`;let m=tm(r,h),g=tm(i,h);if(m===void 0&&g===void 0)continue;m||(m=0),g||(g=0),m===0||g===0||em(m)===em(g)?(t[h]=Math.max(Re(Jh(m),Jh(g),o),0),(qt.test(g)||qt.test(m))&&(t[h]+="%")):t[h]=g}(r.rotate||i.rotate)&&(t.rotate=Re(r.rotate||0,i.rotate||0,o))}function tm(t,r){return t[r]!==void 0?t[r]:t.borderRadius}const Yk=Ug(0,.5,og),Xk=Ug(.5,.95,ut);function Ug(t,r,i){return o=>o<t?0:o>r?1:i(ir(t,r,o))}function nm(t,r){t.min=r.min,t.max=r.max}function Rt(t,r){nm(t.x,r.x),nm(t.y,r.y)}function rm(t,r){t.translate=r.translate,t.scale=r.scale,t.originPoint=r.originPoint,t.origin=r.origin}function im(t,r,i,o,l){return t-=r,t=Go(t,1/i,o),l!==void 0&&(t=Go(t,1/l,o)),t}function Qk(t,r=0,i=1,o=.5,l,c=t,u=t){if(qt.test(r)&&(r=parseFloat(r),r=Re(u.min,u.max,r/100)-u.min),typeof r!="number")return;let h=Re(c.min,c.max,o);t===c&&(h-=r),t.min=im(t.min,r,i,h,l),t.max=im(t.max,r,i,h,l)}function sm(t,r,[i,o,l],c,u){Qk(t,r[i],r[o],r[l],r.scale,c,u)}const qk=["x","scaleX","originX"],Zk=["y","scaleY","originY"];function om(t,r,i,o){sm(t.x,r,qk,i?i.x:void 0,o?o.x:void 0),sm(t.y,r,Zk,i?i.y:void 0,o?o.y:void 0)}function am(t){return t.translate===0&&t.scale===1}function Wg(t){return am(t.x)&&am(t.y)}function lm(t,r){return t.min===r.min&&t.max===r.max}function Jk(t,r){return lm(t.x,r.x)&&lm(t.y,r.y)}function um(t,r){return Math.round(t.min)===Math.round(r.min)&&Math.round(t.max)===Math.round(r.max)}function Hg(t,r){return um(t.x,r.x)&&um(t.y,r.y)}function cm(t){return bt(t.x)/bt(t.y)}function dm(t,r){return t.translate===r.translate&&t.scale===r.scale&&t.originPoint===r.originPoint}class e4{constructor(){this.members=[]}add(r){Mc(this.members,r),r.scheduleRender()}remove(r){if(Lc(this.members,r),r===this.prevLead&&(this.prevLead=void 0),r===this.lead){const i=this.members[this.members.length-1];i&&this.promote(i)}}relegate(r){const i=this.members.findIndex(l=>r===l);if(i===0)return!1;let o;for(let l=i;l>=0;l--){const c=this.members[l];if(c.isPresent!==!1){o=c;break}}return o?(this.promote(o),!0):!1}promote(r,i){const o=this.lead;if(r!==o&&(this.prevLead=o,this.lead=r,r.show(),o)){o.instance&&o.scheduleRender(),r.scheduleRender(),r.resumeFrom=o,i&&(r.resumeFrom.preserveOpacity=!0),o.snapshot&&(r.snapshot=o.snapshot,r.snapshot.latestValues=o.animationValues||o.latestValues),r.root&&r.root.isUpdating&&(r.isLayoutDirty=!0);const{crossfade:l}=r.options;l===!1&&o.hide()}}exitAnimationComplete(){this.members.forEach(r=>{const{options:i,resumingFrom:o}=r;i.onExitComplete&&i.onExitComplete(),o&&o.options.onExitComplete&&o.options.onExitComplete()})}scheduleRender(){this.members.forEach(r=>{r.instance&&r.scheduleRender(!1)})}removeLeadSnapshot(){this.lead&&this.lead.snapshot&&(this.lead.snapshot=void 0)}}function t4(t,r,i){let o="";const l=t.x.translate/r.x,c=t.y.translate/r.y,u=(i==null?void 0:i.z)||0;if((l||c||u)&&(o=`translate3d(${l}px, ${c}px, ${u}px) `),(r.x!==1||r.y!==1)&&(o+=`scale(${1/r.x}, ${1/r.y}) `),i){const{transformPerspective:g,rotate:v,rotateX:x,rotateY:w,skewX:S,skewY:j}=i;g&&(o=`perspective(${g}px) ${o}`),v&&(o+=`rotate(${v}deg) `),x&&(o+=`rotateX(${x}deg) `),w&&(o+=`rotateY(${w}deg) `),S&&(o+=`skewX(${S}deg) `),j&&(o+=`skewY(${j}deg) `)}const h=t.x.scale*r.x,m=t.y.scale*r.y;return(h!==1||m!==1)&&(o+=`scale(${h}, ${m})`),o||"none"}const tr={type:"projectionFrame",totalNodes:0,resolvedTargetDeltas:0,recalculatedProjection:0},Ii=typeof window<"u"&&window.MotionDebug!==void 0,wu=["","X","Y","Z"],n4={visibility:"hidden"},fm=1e3;let r4=0;function bu(t,r,i,o){const{latestValues:l}=r;l[t]&&(i[t]=l[t],r.setStaticValue(t,0),o&&(o[t]=0))}function Kg(t){if(t.hasCheckedOptimisedAppear=!0,t.root===t)return;const{visualElement:r}=t.options;if(!r)return;const i=J0(r);if(window.MotionHasOptimisedAnimation(i,"transform")){const{layout:l,layoutId:c}=t.options;window.MotionCancelOptimisedAnimation(i,"transform",pe,!(l||c))}const{parent:o}=t;o&&!o.hasCheckedOptimisedAppear&&Kg(o)}function Gg({attachResizeListener:t,defaultParent:r,measureScroll:i,checkIsScrollRoot:o,resetTransform:l}){return class{constructor(u={},h=r==null?void 0:r()){this.id=r4++,this.animationId=0,this.children=new Set,this.options={},this.isTreeAnimating=!1,this.isAnimationBlocked=!1,this.isLayoutDirty=!1,this.isProjectionDirty=!1,this.isSharedProjectionDirty=!1,this.isTransformDirty=!1,this.updateManuallyBlocked=!1,this.updateBlockedByResize=!1,this.isUpdating=!1,this.isSVG=!1,this.needsReset=!1,this.shouldResetTransform=!1,this.hasCheckedOptimisedAppear=!1,this.treeScale={x:1,y:1},this.eventHandlers=new Map,this.hasTreeAnimated=!1,this.updateScheduled=!1,this.scheduleUpdate=()=>this.update(),this.projectionUpdateScheduled=!1,this.checkUpdateFailed=()=>{this.isUpdating&&(this.isUpdating=!1,this.clearAllSnapshots())},this.updateProjection=()=>{this.projectionUpdateScheduled=!1,Ii&&(tr.totalNodes=tr.resolvedTargetDeltas=tr.recalculatedProjection=0),this.nodes.forEach(o4),this.nodes.forEach(d4),this.nodes.forEach(f4),this.nodes.forEach(a4),Ii&&window.MotionDebug.record(tr)},this.resolvedRelativeTargetAt=0,this.hasProjected=!1,this.isVisible=!0,this.animationProgress=0,this.sharedNodes=new Map,this.latestValues=u,this.root=h?h.root||h:this,this.path=h?[...h.path,h]:[],this.parent=h,this.depth=h?h.depth+1:0;for(let m=0;m<this.path.length;m++)this.path[m].shouldResetTransform=!0;this.root===this&&(this.nodes=new Wk)}addEventListener(u,h){return this.eventHandlers.has(u)||this.eventHandlers.set(u,new Dc),this.eventHandlers.get(u).add(h)}notifyListeners(u,...h){const m=this.eventHandlers.get(u);m&&m.notify(...h)}hasListeners(u){return this.eventHandlers.has(u)}mount(u,h=this.root.hasTreeAnimated){if(this.instance)return;this.isSVG=$k(u),this.instance=u;const{layoutId:m,layout:g,visualElement:v}=this.options;if(v&&!v.current&&v.mount(u),this.root.nodes.add(this),this.parent&&this.parent.children.add(this),h&&(g||m)&&(this.isLayoutDirty=!0),t){let x;const w=()=>this.root.updateBlockedByResize=!1;t(u,()=>{this.root.updateBlockedByResize=!0,x&&x(),x=Hk(w,250),Mo.hasAnimatedSinceResize&&(Mo.hasAnimatedSinceResize=!1,this.nodes.forEach(hm))})}m&&this.root.registerSharedNode(m,this),this.options.animate!==!1&&v&&(m||g)&&this.addEventListener("didUpdate",({delta:x,hasLayoutChanged:w,hasRelativeTargetChanged:S,layout:j})=>{if(this.isTreeAnimationBlocked()){this.target=void 0,this.relativeTarget=void 0;return}const N=this.options.transition||v.getDefaultTransition()||v4,{onLayoutAnimationStart:E,onLayoutAnimationComplete:A}=v.getProps(),D=!this.targetLayout||!Hg(this.targetLayout,j)||S,_=!w&&S;if(this.options.layoutRoot||this.resumeFrom&&this.resumeFrom.instance||_||w&&(D||!this.currentAnimation)){this.resumeFrom&&(this.resumingFrom=this.resumeFrom,this.resumingFrom.resumingFrom=void 0),this.setAnimationOrigin(x,_);const z={...Tc(N,"layout"),onPlay:E,onComplete:A};(v.shouldReduceMotion||this.options.layoutRoot)&&(z.delay=0,z.type=!1),this.startAnimation(z)}else w||hm(this),this.isLead()&&this.options.onExitComplete&&this.options.onExitComplete();this.targetLayout=j})}unmount(){this.options.layoutId&&this.willUpdate(),this.root.nodes.remove(this);const u=this.getStack();u&&u.remove(this),this.parent&&this.parent.children.delete(this),this.instance=void 0,Ut(this.updateProjection)}blockUpdate(){this.updateManuallyBlocked=!0}unblockUpdate(){this.updateManuallyBlocked=!1}isUpdateBlocked(){return this.updateManuallyBlocked||this.updateBlockedByResize}isTreeAnimationBlocked(){return this.isAnimationBlocked||this.parent&&this.parent.isTreeAnimationBlocked()||!1}startUpdate(){this.isUpdateBlocked()||(this.isUpdating=!0,this.nodes&&this.nodes.forEach(p4),this.animationId++)}getTransformTemplate(){const{visualElement:u}=this.options;return u&&u.getProps().transformTemplate}willUpdate(u=!0){if(this.root.hasTreeAnimated=!0,this.root.isUpdateBlocked()){this.options.onExitComplete&&this.options.onExitComplete();return}if(window.MotionCancelOptimisedAnimation&&!this.hasCheckedOptimisedAppear&&Kg(this),!this.root.isUpdating&&this.root.startUpdate(),this.isLayoutDirty)return;this.isLayoutDirty=!0;for(let v=0;v<this.path.length;v++){const x=this.path[v];x.shouldResetTransform=!0,x.updateScroll("snapshot"),x.options.layoutRoot&&x.willUpdate(!1)}const{layoutId:h,layout:m}=this.options;if(h===void 0&&!m)return;const g=this.getTransformTemplate();this.prevTransformTemplateValue=g?g(this.latestValues,""):void 0,this.updateSnapshot(),u&&this.notifyListeners("willUpdate")}update(){if(this.updateScheduled=!1,this.isUpdateBlocked()){this.unblockUpdate(),this.clearAllSnapshots(),this.nodes.forEach(pm);return}this.isUpdating||this.nodes.forEach(u4),this.isUpdating=!1,this.nodes.forEach(c4),this.nodes.forEach(i4),this.nodes.forEach(s4),this.clearAllSnapshots();const h=Zt.now();Be.delta=Jt(0,1e3/60,h-Be.timestamp),Be.timestamp=h,Be.isProcessing=!0,du.update.process(Be),du.preRender.process(Be),du.render.process(Be),Be.isProcessing=!1}didUpdate(){this.updateScheduled||(this.updateScheduled=!0,yc.read(this.scheduleUpdate))}clearAllSnapshots(){this.nodes.forEach(l4),this.sharedNodes.forEach(h4)}scheduleUpdateProjection(){this.projectionUpdateScheduled||(this.projectionUpdateScheduled=!0,pe.preRender(this.updateProjection,!1,!0))}scheduleCheckAfterUnmount(){pe.postRender(()=>{this.isLayoutDirty?this.root.didUpdate():this.root.checkUpdateFailed()})}updateSnapshot(){this.snapshot||!this.instance||(this.snapshot=this.measure())}updateLayout(){if(!this.instance||(this.updateScroll(),!(this.options.alwaysMeasureLayout&&this.isLead())&&!this.isLayoutDirty))return;if(this.resumeFrom&&!this.resumeFrom.instance)for(let m=0;m<this.path.length;m++)this.path[m].updateScroll();const u=this.layout;this.layout=this.measure(!1),this.layoutCorrected=ze(),this.isLayoutDirty=!1,this.projectionDelta=void 0,this.notifyListeners("measure",this.layout.layoutBox);const{visualElement:h}=this.options;h&&h.notify("LayoutMeasure",this.layout.layoutBox,u?u.layoutBox:void 0)}updateScroll(u="measure"){let h=!!(this.options.layoutScroll&&this.instance);if(this.scroll&&this.scroll.animationId===this.root.animationId&&this.scroll.phase===u&&(h=!1),h){const m=o(this.instance);this.scroll={animationId:this.root.animationId,phase:u,isRoot:m,offset:i(this.instance),wasRoot:this.scroll?this.scroll.isRoot:m}}}resetTransform(){if(!l)return;const u=this.isLayoutDirty||this.shouldResetTransform||this.options.alwaysMeasureLayout,h=this.projectionDelta&&!Wg(this.projectionDelta),m=this.getTransformTemplate(),g=m?m(this.latestValues,""):void 0,v=g!==this.prevTransformTemplateValue;u&&(h||er(this.latestValues)||v)&&(l(this.instance,g),this.shouldResetTransform=!1,this.scheduleRender())}measure(u=!0){const h=this.measurePageBox();let m=this.removeElementScroll(h);return u&&(m=this.removeTransform(m)),x4(m),{animationId:this.root.animationId,measuredBox:h,layoutBox:m,latestValues:{},source:this.id}}measurePageBox(){var u;const{visualElement:h}=this.options;if(!h)return ze();const m=h.measureViewportBox();if(!(((u=this.scroll)===null||u===void 0?void 0:u.wasRoot)||this.path.some(y4))){const{scroll:v}=this.root;v&&(Dr(m.x,v.offset.x),Dr(m.y,v.offset.y))}return m}removeElementScroll(u){var h;const m=ze();if(Rt(m,u),!((h=this.scroll)===null||h===void 0)&&h.wasRoot)return m;for(let g=0;g<this.path.length;g++){const v=this.path[g],{scroll:x,options:w}=v;v!==this.root&&x&&w.layoutScroll&&(x.wasRoot&&Rt(m,u),Dr(m.x,x.offset.x),Dr(m.y,x.offset.y))}return m}applyTransform(u,h=!1){const m=ze();Rt(m,u);for(let g=0;g<this.path.length;g++){const v=this.path[g];!h&&v.options.layoutScroll&&v.scroll&&v!==v.root&&zr(m,{x:-v.scroll.offset.x,y:-v.scroll.offset.y}),er(v.latestValues)&&zr(m,v.latestValues)}return er(this.latestValues)&&zr(m,this.latestValues),m}removeTransform(u){const h=ze();Rt(h,u);for(let m=0;m<this.path.length;m++){const g=this.path[m];if(!g.instance||!er(g.latestValues))continue;Ku(g.latestValues)&&g.updateSnapshot();const v=ze(),x=g.measurePageBox();Rt(v,x),om(h,g.latestValues,g.snapshot?g.snapshot.layoutBox:void 0,v)}return er(this.latestValues)&&om(h,this.latestValues),h}setTargetDelta(u){this.targetDelta=u,this.root.scheduleUpdateProjection(),this.isProjectionDirty=!0}setOptions(u){this.options={...this.options,...u,crossfade:u.crossfade!==void 0?u.crossfade:!0}}clearMeasurements(){this.scroll=void 0,this.layout=void 0,this.snapshot=void 0,this.prevTransformTemplateValue=void 0,this.targetDelta=void 0,this.target=void 0,this.isLayoutDirty=!1}forceRelativeParentToResolveTarget(){this.relativeParent&&this.relativeParent.resolvedRelativeTargetAt!==Be.timestamp&&this.relativeParent.resolveTargetDelta(!0)}resolveTargetDelta(u=!1){var h;const m=this.getLead();this.isProjectionDirty||(this.isProjectionDirty=m.isProjectionDirty),this.isTransformDirty||(this.isTransformDirty=m.isTransformDirty),this.isSharedProjectionDirty||(this.isSharedProjectionDirty=m.isSharedProjectionDirty);const g=!!this.resumingFrom||this!==m;if(!(u||g&&this.isSharedProjectionDirty||this.isProjectionDirty||!((h=this.parent)===null||h===void 0)&&h.isProjectionDirty||this.attemptToResolveRelativeTarget||this.root.updateBlockedByResize))return;const{layout:x,layoutId:w}=this.options;if(!(!this.layout||!(x||w))){if(this.resolvedRelativeTargetAt=Be.timestamp,!this.targetDelta&&!this.relativeTarget){const S=this.getClosestProjectingParent();S&&S.layout&&this.animationProgress!==1?(this.relativeParent=S,this.forceRelativeParentToResolveTarget(),this.relativeTarget=ze(),this.relativeTargetOrigin=ze(),Hi(this.relativeTargetOrigin,this.layout.layoutBox,S.layout.layoutBox),Rt(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}if(!(!this.relativeTarget&&!this.targetDelta)){if(this.target||(this.target=ze(),this.targetWithTransforms=ze()),this.relativeTarget&&this.relativeTargetOrigin&&this.relativeParent&&this.relativeParent.target?(this.forceRelativeParentToResolveTarget(),kk(this.target,this.relativeTarget,this.relativeParent.target)):this.targetDelta?(this.resumingFrom?this.target=this.applyTransform(this.layout.layoutBox):Rt(this.target,this.layout.layoutBox),Og(this.target,this.targetDelta)):Rt(this.target,this.layout.layoutBox),this.attemptToResolveRelativeTarget){this.attemptToResolveRelativeTarget=!1;const S=this.getClosestProjectingParent();S&&!!S.resumingFrom==!!this.resumingFrom&&!S.options.layoutScroll&&S.target&&this.animationProgress!==1?(this.relativeParent=S,this.forceRelativeParentToResolveTarget(),this.relativeTarget=ze(),this.relativeTargetOrigin=ze(),Hi(this.relativeTargetOrigin,this.target,S.target),Rt(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}Ii&&tr.resolvedTargetDeltas++}}}getClosestProjectingParent(){if(!(!this.parent||Ku(this.parent.latestValues)||Vg(this.parent.latestValues)))return this.parent.isProjecting()?this.parent:this.parent.getClosestProjectingParent()}isProjecting(){return!!((this.relativeTarget||this.targetDelta||this.options.layoutRoot)&&this.layout)}calcProjection(){var u;const h=this.getLead(),m=!!this.resumingFrom||this!==h;let g=!0;if((this.isProjectionDirty||!((u=this.parent)===null||u===void 0)&&u.isProjectionDirty)&&(g=!1),m&&(this.isSharedProjectionDirty||this.isTransformDirty)&&(g=!1),this.resolvedRelativeTargetAt===Be.timestamp&&(g=!1),g)return;const{layout:v,layoutId:x}=this.options;if(this.isTreeAnimating=!!(this.parent&&this.parent.isTreeAnimating||this.currentAnimation||this.pendingAnimation),this.isTreeAnimating||(this.targetDelta=this.relativeTarget=void 0),!this.layout||!(v||x))return;Rt(this.layoutCorrected,this.layout.layoutBox);const w=this.treeScale.x,S=this.treeScale.y;Ak(this.layoutCorrected,this.treeScale,this.path,m),h.layout&&!h.target&&(this.treeScale.x!==1||this.treeScale.y!==1)&&(h.target=h.layout.layoutBox,h.targetWithTransforms=ze());const{target:j}=h;if(!j){this.prevProjectionDelta&&(this.createProjectionDeltas(),this.scheduleRender());return}!this.projectionDelta||!this.prevProjectionDelta?this.createProjectionDeltas():(rm(this.prevProjectionDelta.x,this.projectionDelta.x),rm(this.prevProjectionDelta.y,this.projectionDelta.y)),Wi(this.projectionDelta,this.layoutCorrected,j,this.latestValues),(this.treeScale.x!==w||this.treeScale.y!==S||!dm(this.projectionDelta.x,this.prevProjectionDelta.x)||!dm(this.projectionDelta.y,this.prevProjectionDelta.y))&&(this.hasProjected=!0,this.scheduleRender(),this.notifyListeners("projectionUpdate",j)),Ii&&tr.recalculatedProjection++}hide(){this.isVisible=!1}show(){this.isVisible=!0}scheduleRender(u=!0){var h;if((h=this.options.visualElement)===null||h===void 0||h.scheduleRender(),u){const m=this.getStack();m&&m.scheduleRender()}this.resumingFrom&&!this.resumingFrom.instance&&(this.resumingFrom=void 0)}createProjectionDeltas(){this.prevProjectionDelta=Lr(),this.projectionDelta=Lr(),this.projectionDeltaWithTransform=Lr()}setAnimationOrigin(u,h=!1){const m=this.snapshot,g=m?m.latestValues:{},v={...this.latestValues},x=Lr();(!this.relativeParent||!this.relativeParent.options.layoutRoot)&&(this.relativeTarget=this.relativeTargetOrigin=void 0),this.attemptToResolveRelativeTarget=!h;const w=ze(),S=m?m.source:void 0,j=this.layout?this.layout.source:void 0,N=S!==j,E=this.getStack(),A=!E||E.members.length<=1,D=!!(N&&!A&&this.options.crossfade===!0&&!this.path.some(g4));this.animationProgress=0;let _;this.mixTargetDelta=z=>{const I=z/1e3;mm(x.x,u.x,I),mm(x.y,u.y,I),this.setTargetDelta(x),this.relativeTarget&&this.relativeTargetOrigin&&this.layout&&this.relativeParent&&this.relativeParent.layout&&(Hi(w,this.layout.layoutBox,this.relativeParent.layout.layoutBox),m4(this.relativeTarget,this.relativeTargetOrigin,w,I),_&&Jk(this.relativeTarget,_)&&(this.isProjectionDirty=!1),_||(_=ze()),Rt(_,this.relativeTarget)),N&&(this.animationValues=v,Gk(v,g,this.latestValues,I,D,A)),this.root.scheduleUpdateProjection(),this.scheduleRender(),this.animationProgress=I},this.mixTargetDelta(this.options.layoutRoot?1e3:0)}startAnimation(u){this.notifyListeners("animationStart"),this.currentAnimation&&this.currentAnimation.stop(),this.resumingFrom&&this.resumingFrom.currentAnimation&&this.resumingFrom.currentAnimation.stop(),this.pendingAnimation&&(Ut(this.pendingAnimation),this.pendingAnimation=void 0),this.pendingAnimation=pe.update(()=>{Mo.hasAnimatedSinceResize=!0,this.currentAnimation=Bk(0,fm,{...u,onUpdate:h=>{this.mixTargetDelta(h),u.onUpdate&&u.onUpdate(h)},onComplete:()=>{u.onComplete&&u.onComplete(),this.completeAnimation()}}),this.resumingFrom&&(this.resumingFrom.currentAnimation=this.currentAnimation),this.pendingAnimation=void 0})}completeAnimation(){this.resumingFrom&&(this.resumingFrom.currentAnimation=void 0,this.resumingFrom.preserveOpacity=void 0);const u=this.getStack();u&&u.exitAnimationComplete(),this.resumingFrom=this.currentAnimation=this.animationValues=void 0,this.notifyListeners("animationComplete")}finishAnimation(){this.currentAnimation&&(this.mixTargetDelta&&this.mixTargetDelta(fm),this.currentAnimation.stop()),this.completeAnimation()}applyTransformsToTarget(){const u=this.getLead();let{targetWithTransforms:h,target:m,layout:g,latestValues:v}=u;if(!(!h||!m||!g)){if(this!==u&&this.layout&&g&&Yg(this.options.animationType,this.layout.layoutBox,g.layoutBox)){m=this.target||ze();const x=bt(this.layout.layoutBox.x);m.x.min=u.target.x.min,m.x.max=m.x.min+x;const w=bt(this.layout.layoutBox.y);m.y.min=u.target.y.min,m.y.max=m.y.min+w}Rt(h,m),zr(h,v),Wi(this.projectionDeltaWithTransform,this.layoutCorrected,h,v)}}registerSharedNode(u,h){this.sharedNodes.has(u)||this.sharedNodes.set(u,new e4),this.sharedNodes.get(u).add(h);const g=h.options.initialPromotionConfig;h.promote({transition:g?g.transition:void 0,preserveFollowOpacity:g&&g.shouldPreserveFollowOpacity?g.shouldPreserveFollowOpacity(h):void 0})}isLead(){const u=this.getStack();return u?u.lead===this:!0}getLead(){var u;const{layoutId:h}=this.options;return h?((u=this.getStack())===null||u===void 0?void 0:u.lead)||this:this}getPrevLead(){var u;const{layoutId:h}=this.options;return h?(u=this.getStack())===null||u===void 0?void 0:u.prevLead:void 0}getStack(){const{layoutId:u}=this.options;if(u)return this.root.sharedNodes.get(u)}promote({needsReset:u,transition:h,preserveFollowOpacity:m}={}){const g=this.getStack();g&&g.promote(this,m),u&&(this.projectionDelta=void 0,this.needsReset=!0),h&&this.setOptions({transition:h})}relegate(){const u=this.getStack();return u?u.relegate(this):!1}resetSkewAndRotation(){const{visualElement:u}=this.options;if(!u)return;let h=!1;const{latestValues:m}=u;if((m.z||m.rotate||m.rotateX||m.rotateY||m.rotateZ||m.skewX||m.skewY)&&(h=!0),!h)return;const g={};m.z&&bu("z",u,g,this.animationValues);for(let v=0;v<wu.length;v++)bu(`rotate${wu[v]}`,u,g,this.animationValues),bu(`skew${wu[v]}`,u,g,this.animationValues);u.render();for(const v in g)u.setStaticValue(v,g[v]),this.animationValues&&(this.animationValues[v]=g[v]);u.scheduleRender()}getProjectionStyles(u){var h,m;if(!this.instance||this.isSVG)return;if(!this.isVisible)return n4;const g={visibility:""},v=this.getTransformTemplate();if(this.needsReset)return this.needsReset=!1,g.opacity="",g.pointerEvents=Ao(u==null?void 0:u.pointerEvents)||"",g.transform=v?v(this.latestValues,""):"none",g;const x=this.getLead();if(!this.projectionDelta||!this.layout||!x.target){const N={};return this.options.layoutId&&(N.opacity=this.latestValues.opacity!==void 0?this.latestValues.opacity:1,N.pointerEvents=Ao(u==null?void 0:u.pointerEvents)||""),this.hasProjected&&!er(this.latestValues)&&(N.transform=v?v({},""):"none",this.hasProjected=!1),N}const w=x.animationValues||x.latestValues;this.applyTransformsToTarget(),g.transform=t4(this.projectionDeltaWithTransform,this.treeScale,w),v&&(g.transform=v(w,g.transform));const{x:S,y:j}=this.projectionDelta;g.transformOrigin=`${S.origin*100}% ${j.origin*100}% 0`,x.animationValues?g.opacity=x===this?(m=(h=w.opacity)!==null&&h!==void 0?h:this.latestValues.opacity)!==null&&m!==void 0?m:1:this.preserveOpacity?this.latestValues.opacity:w.opacityExit:g.opacity=x===this?w.opacity!==void 0?w.opacity:"":w.opacityExit!==void 0?w.opacityExit:0;for(const N in $o){if(w[N]===void 0)continue;const{correct:E,applyTo:A}=$o[N],D=g.transform==="none"?w[N]:E(w[N],x);if(A){const _=A.length;for(let z=0;z<_;z++)g[A[z]]=D}else g[N]=D}return this.options.layoutId&&(g.pointerEvents=x===this?Ao(u==null?void 0:u.pointerEvents)||"":"none"),g}clearSnapshot(){this.resumeFrom=this.snapshot=void 0}resetTree(){this.root.nodes.forEach(u=>{var h;return(h=u.currentAnimation)===null||h===void 0?void 0:h.stop()}),this.root.nodes.forEach(pm),this.root.sharedNodes.clear()}}}function i4(t){t.updateLayout()}function s4(t){var r;const i=((r=t.resumeFrom)===null||r===void 0?void 0:r.snapshot)||t.snapshot;if(t.isLead()&&t.layout&&i&&t.hasListeners("didUpdate")){const{layoutBox:o,measuredBox:l}=t.layout,{animationType:c}=t.options,u=i.source!==t.layout.source;c==="size"?At(x=>{const w=u?i.measuredBox[x]:i.layoutBox[x],S=bt(w);w.min=o[x].min,w.max=w.min+S}):Yg(c,i.layoutBox,o)&&At(x=>{const w=u?i.measuredBox[x]:i.layoutBox[x],S=bt(o[x]);w.max=w.min+S,t.relativeTarget&&!t.currentAnimation&&(t.isProjectionDirty=!0,t.relativeTarget[x].max=t.relativeTarget[x].min+S)});const h=Lr();Wi(h,o,i.layoutBox);const m=Lr();u?Wi(m,t.applyTransform(l,!0),i.measuredBox):Wi(m,o,i.layoutBox);const g=!Wg(h);let v=!1;if(!t.resumeFrom){const x=t.getClosestProjectingParent();if(x&&!x.resumeFrom){const{snapshot:w,layout:S}=x;if(w&&S){const j=ze();Hi(j,i.layoutBox,w.layoutBox);const N=ze();Hi(N,o,S.layoutBox),Hg(j,N)||(v=!0),x.options.layoutRoot&&(t.relativeTarget=N,t.relativeTargetOrigin=j,t.relativeParent=x)}}}t.notifyListeners("didUpdate",{layout:o,snapshot:i,delta:m,layoutDelta:h,hasLayoutChanged:g,hasRelativeTargetChanged:v})}else if(t.isLead()){const{onExitComplete:o}=t.options;o&&o()}t.options.transition=void 0}function o4(t){Ii&&tr.totalNodes++,t.parent&&(t.isProjecting()||(t.isProjectionDirty=t.parent.isProjectionDirty),t.isSharedProjectionDirty||(t.isSharedProjectionDirty=!!(t.isProjectionDirty||t.parent.isProjectionDirty||t.parent.isSharedProjectionDirty)),t.isTransformDirty||(t.isTransformDirty=t.parent.isTransformDirty))}function a4(t){t.isProjectionDirty=t.isSharedProjectionDirty=t.isTransformDirty=!1}function l4(t){t.clearSnapshot()}function pm(t){t.clearMeasurements()}function u4(t){t.isLayoutDirty=!1}function c4(t){const{visualElement:r}=t.options;r&&r.getProps().onBeforeLayoutMeasure&&r.notify("BeforeLayoutMeasure"),t.resetTransform()}function hm(t){t.finishAnimation(),t.targetDelta=t.relativeTarget=t.target=void 0,t.isProjectionDirty=!0}function d4(t){t.resolveTargetDelta()}function f4(t){t.calcProjection()}function p4(t){t.resetSkewAndRotation()}function h4(t){t.removeLeadSnapshot()}function mm(t,r,i){t.translate=Re(r.translate,0,i),t.scale=Re(r.scale,1,i),t.origin=r.origin,t.originPoint=r.originPoint}function gm(t,r,i,o){t.min=Re(r.min,i.min,o),t.max=Re(r.max,i.max,o)}function m4(t,r,i,o){gm(t.x,r.x,i.x,o),gm(t.y,r.y,i.y,o)}function g4(t){return t.animationValues&&t.animationValues.opacityExit!==void 0}const v4={duration:.45,ease:[.4,0,.1,1]},vm=t=>typeof navigator<"u"&&navigator.userAgent&&navigator.userAgent.toLowerCase().includes(t),xm=vm("applewebkit/")&&!vm("chrome/")?Math.round:ut;function ym(t){t.min=xm(t.min),t.max=xm(t.max)}function x4(t){ym(t.x),ym(t.y)}function Yg(t,r,i){return t==="position"||t==="preserve-aspect"&&!bk(cm(r),cm(i),.2)}function y4(t){var r;return t!==t.root&&((r=t.scroll)===null||r===void 0?void 0:r.wasRoot)}const w4=Gg({attachResizeListener:(t,r)=>qi(t,"resize",r),measureScroll:()=>({x:document.documentElement.scrollLeft||document.body.scrollLeft,y:document.documentElement.scrollTop||document.body.scrollTop}),checkIsScrollRoot:()=>!0}),ku={current:void 0},Xg=Gg({measureScroll:t=>({x:t.scrollLeft,y:t.scrollTop}),defaultParent:()=>{if(!ku.current){const t=new w4({});t.mount(window),t.setOptions({layoutScroll:!0}),ku.current=t}return ku.current},resetTransform:(t,r)=>{t.style.transform=r!==void 0?r:"none"},checkIsScrollRoot:t=>window.getComputedStyle(t).position==="fixed"}),b4={pan:{Feature:Vk},drag:{Feature:zk,ProjectionNode:Xg,MeasureLayout:Bg}};function wm(t,r,i){const{props:o}=t;t.animationState&&o.whileHover&&t.animationState.setActive("whileHover",i==="Start");const l="onHover"+i,c=o[l];c&&pe.postRender(()=>c(r,ls(r)))}class k4 extends On{mount(){const{current:r}=this.node;r&&(this.unmount=k5(r,i=>(wm(this.node,i,"Start"),o=>wm(this.node,o,"End"))))}unmount(){}}class S4 extends On{constructor(){super(...arguments),this.isActive=!1}onFocus(){let r=!1;try{r=this.node.current.matches(":focus-visible")}catch{r=!0}!r||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!0),this.isActive=!0)}onBlur(){!this.isActive||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!1),this.isActive=!1)}mount(){this.unmount=as(qi(this.node.current,"focus",()=>this.onFocus()),qi(this.node.current,"blur",()=>this.onBlur()))}unmount(){}}function bm(t,r,i){const{props:o}=t;t.animationState&&o.whileTap&&t.animationState.setActive("whileTap",i==="Start");const l="onTap"+(i==="End"?"":i),c=o[l];c&&pe.postRender(()=>c(r,ls(r)))}class j4 extends On{mount(){const{current:r}=this.node;r&&(this.unmount=E5(r,i=>(bm(this.node,i,"Start"),(o,{success:l})=>bm(this.node,o,l?"End":"Cancel")),{useGlobalTarget:this.node.props.globalTapTarget}))}unmount(){}}const Yu=new WeakMap,Su=new WeakMap,C4=t=>{const r=Yu.get(t.target);r&&r(t)},E4=t=>{t.forEach(C4)};function N4({root:t,...r}){const i=t||document;Su.has(i)||Su.set(i,{});const o=Su.get(i),l=JSON.stringify(r);return o[l]||(o[l]=new IntersectionObserver(E4,{root:t,...r})),o[l]}function P4(t,r,i){const o=N4(r);return Yu.set(t,i),o.observe(t),()=>{Yu.delete(t),o.unobserve(t)}}const T4={some:0,all:1};class R4 extends On{constructor(){super(...arguments),this.hasEnteredView=!1,this.isInView=!1}startObserver(){this.unmount();const{viewport:r={}}=this.node.getProps(),{root:i,margin:o,amount:l="some",once:c}=r,u={root:i?i.current:void 0,rootMargin:o,threshold:typeof l=="number"?l:T4[l]},h=m=>{const{isIntersecting:g}=m;if(this.isInView===g||(this.isInView=g,c&&!g&&this.hasEnteredView))return;g&&(this.hasEnteredView=!0),this.node.animationState&&this.node.animationState.setActive("whileInView",g);const{onViewportEnter:v,onViewportLeave:x}=this.node.getProps(),w=g?v:x;w&&w(m)};return P4(this.node.current,u,h)}mount(){this.startObserver()}update(){if(typeof IntersectionObserver>"u")return;const{props:r,prevProps:i}=this.node;["amount","margin","root"].some(A4(r,i))&&this.startObserver()}unmount(){}}function A4({viewport:t={}},{viewport:r={}}={}){return i=>t[i]!==r[i]}const _4={inView:{Feature:R4},tap:{Feature:j4},focus:{Feature:S4},hover:{Feature:k4}},M4={layout:{ProjectionNode:Xg,MeasureLayout:Bg}},Xu={current:null},Qg={current:!1};function L4(){if(Qg.current=!0,!!hc)if(window.matchMedia){const t=window.matchMedia("(prefers-reduced-motion)"),r=()=>Xu.current=t.matches;t.addListener(r),r()}else Xu.current=!1}const D4=[...wg,rt,zn],z4=t=>D4.find(yg(t)),km=new WeakMap;function V4(t,r,i){for(const o in r){const l=r[o],c=i[o];if(Ye(l))t.addValue(o,l);else if(Ye(c))t.addValue(o,Qt(l,{owner:t}));else if(c!==l)if(t.hasValue(o)){const u=t.getValue(o);u.liveStyle===!0?u.jump(l):u.hasAnimated||u.set(l)}else{const u=t.getStaticValue(o);t.addValue(o,Qt(u!==void 0?u:l,{owner:t}))}}for(const o in i)r[o]===void 0&&t.removeValue(o);return r}const Sm=["AnimationStart","AnimationComplete","Update","BeforeLayoutMeasure","LayoutMeasure","LayoutAnimationStart","LayoutAnimationComplete"];class O4{scrapeMotionValuesFromProps(r,i,o){return{}}constructor({parent:r,props:i,presenceContext:o,reducedMotionConfig:l,blockInitialAnimation:c,visualState:u},h={}){this.current=null,this.children=new Set,this.isVariantNode=!1,this.isControllingVariants=!1,this.shouldReduceMotion=null,this.values=new Map,this.KeyframeResolver=$c,this.features={},this.valueSubscriptions=new Map,this.prevMotionValues={},this.events={},this.propEventSubscriptions={},this.notifyUpdate=()=>this.notify("Update",this.latestValues),this.render=()=>{this.current&&(this.triggerBuild(),this.renderInstance(this.current,this.renderState,this.props.style,this.projection))},this.renderScheduledAt=0,this.scheduleRender=()=>{const S=Zt.now();this.renderScheduledAt<S&&(this.renderScheduledAt=S,pe.render(this.render,!1,!0))};const{latestValues:m,renderState:g,onUpdate:v}=u;this.onUpdate=v,this.latestValues=m,this.baseTarget={...m},this.initialValues=i.initial?{...m}:{},this.renderState=g,this.parent=r,this.props=i,this.presenceContext=o,this.depth=r?r.depth+1:0,this.reducedMotionConfig=l,this.options=h,this.blockInitialAnimation=!!c,this.isControllingVariants=sa(i),this.isVariantNode=N0(i),this.isVariantNode&&(this.variantChildren=new Set),this.manuallyAnimateOnMount=!!(r&&r.current);const{willChange:x,...w}=this.scrapeMotionValuesFromProps(i,{},this);for(const S in w){const j=w[S];m[S]!==void 0&&Ye(j)&&j.set(m[S],!1)}}mount(r){this.current=r,km.set(r,this),this.projection&&!this.projection.instance&&this.projection.mount(r),this.parent&&this.isVariantNode&&!this.isControllingVariants&&(this.removeFromVariantTree=this.parent.addVariantChild(this)),this.values.forEach((i,o)=>this.bindToMotionValue(o,i)),Qg.current||L4(),this.shouldReduceMotion=this.reducedMotionConfig==="never"?!1:this.reducedMotionConfig==="always"?!0:Xu.current,this.parent&&this.parent.children.add(this),this.update(this.props,this.presenceContext)}unmount(){km.delete(this.current),this.projection&&this.projection.unmount(),Ut(this.notifyUpdate),Ut(this.render),this.valueSubscriptions.forEach(r=>r()),this.valueSubscriptions.clear(),this.removeFromVariantTree&&this.removeFromVariantTree(),this.parent&&this.parent.children.delete(this);for(const r in this.events)this.events[r].clear();for(const r in this.features){const i=this.features[r];i&&(i.unmount(),i.isMounted=!1)}this.current=null}bindToMotionValue(r,i){this.valueSubscriptions.has(r)&&this.valueSubscriptions.get(r)();const o=or.has(r),l=i.on("change",h=>{this.latestValues[r]=h,this.props.onUpdate&&pe.preRender(this.notifyUpdate),o&&this.projection&&(this.projection.isTransformDirty=!0)}),c=i.on("renderRequest",this.scheduleRender);let u;window.MotionCheckAppearSync&&(u=window.MotionCheckAppearSync(this,r,i)),this.valueSubscriptions.set(r,()=>{l(),c(),u&&u(),i.owner&&i.stop()})}sortNodePosition(r){return!this.current||!this.sortInstanceNodePosition||this.type!==r.type?0:this.sortInstanceNodePosition(this.current,r.current)}updateFeatures(){let r="animation";for(r in Vr){const i=Vr[r];if(!i)continue;const{isEnabled:o,Feature:l}=i;if(!this.features[r]&&l&&o(this.props)&&(this.features[r]=new l(this)),this.features[r]){const c=this.features[r];c.isMounted?c.update():(c.mount(),c.isMounted=!0)}}}triggerBuild(){this.build(this.renderState,this.latestValues,this.props)}measureViewportBox(){return this.current?this.measureInstanceViewportBox(this.current,this.props):ze()}getStaticValue(r){return this.latestValues[r]}setStaticValue(r,i){this.latestValues[r]=i}update(r,i){(r.transformTemplate||this.props.transformTemplate)&&this.scheduleRender(),this.prevProps=this.props,this.props=r,this.prevPresenceContext=this.presenceContext,this.presenceContext=i;for(let o=0;o<Sm.length;o++){const l=Sm[o];this.propEventSubscriptions[l]&&(this.propEventSubscriptions[l](),delete this.propEventSubscriptions[l]);const c="on"+l,u=r[c];u&&(this.propEventSubscriptions[l]=this.on(l,u))}this.prevMotionValues=V4(this,this.scrapeMotionValuesFromProps(r,this.prevProps,this),this.prevMotionValues),this.handleChildMotionValue&&this.handleChildMotionValue(),this.onUpdate&&this.onUpdate(this)}getProps(){return this.props}getVariant(r){return this.props.variants?this.props.variants[r]:void 0}getDefaultTransition(){return this.props.transition}getTransformPagePoint(){return this.props.transformPagePoint}getClosestVariantNode(){return this.isVariantNode?this:this.parent?this.parent.getClosestVariantNode():void 0}addVariantChild(r){const i=this.getClosestVariantNode();if(i)return i.variantChildren&&i.variantChildren.add(r),()=>i.variantChildren.delete(r)}addValue(r,i){const o=this.values.get(r);i!==o&&(o&&this.removeValue(r),this.bindToMotionValue(r,i),this.values.set(r,i),this.latestValues[r]=i.get())}removeValue(r){this.values.delete(r);const i=this.valueSubscriptions.get(r);i&&(i(),this.valueSubscriptions.delete(r)),delete this.latestValues[r],this.removeValueFromRenderState(r,this.renderState)}hasValue(r){return this.values.has(r)}getValue(r,i){if(this.props.values&&this.props.values[r])return this.props.values[r];let o=this.values.get(r);return o===void 0&&i!==void 0&&(o=Qt(i===null?void 0:i,{owner:this}),this.addValue(r,o)),o}readValue(r,i){var o;let l=this.latestValues[r]!==void 0||!this.current?this.latestValues[r]:(o=this.getBaseTargetFromProps(this.props,r))!==null&&o!==void 0?o:this.readValueFromInstance(this.current,r,this.options);return l!=null&&(typeof l=="string"&&(vg(l)||lg(l))?l=parseFloat(l):!z4(l)&&zn.test(i)&&(l=hg(r,i)),this.setBaseTarget(r,Ye(l)?l.get():l)),Ye(l)?l.get():l}setBaseTarget(r,i){this.baseTarget[r]=i}getBaseTarget(r){var i;const{initial:o}=this.props;let l;if(typeof o=="string"||typeof o=="object"){const u=bc(this.props,o,(i=this.presenceContext)===null||i===void 0?void 0:i.custom);u&&(l=u[r])}if(o&&l!==void 0)return l;const c=this.getBaseTargetFromProps(this.props,r);return c!==void 0&&!Ye(c)?c:this.initialValues[r]!==void 0&&l===void 0?void 0:this.baseTarget[r]}on(r,i){return this.events[r]||(this.events[r]=new Dc),this.events[r].add(i)}notify(r,...i){this.events[r]&&this.events[r].notify(...i)}}class qg extends O4{constructor(){super(...arguments),this.KeyframeResolver=bg}sortInstanceNodePosition(r,i){return r.compareDocumentPosition(i)&2?1:-1}getBaseTargetFromProps(r,i){return r.style?r.style[i]:void 0}removeValueFromRenderState(r,{vars:i,style:o}){delete i[r],delete o[r]}handleChildMotionValue(){this.childSubscription&&(this.childSubscription(),delete this.childSubscription);const{children:r}=this.props;Ye(r)&&(this.childSubscription=r.on("change",i=>{this.current&&(this.current.textContent=`${i}`)}))}}function F4(t){return window.getComputedStyle(t)}class I4 extends qg{constructor(){super(...arguments),this.type="html",this.renderInstance=z0}readValueFromInstance(r,i){if(or.has(i)){const o=Bc(i);return o&&o.default||0}else{const o=F4(r),l=(M0(i)?o.getPropertyValue(i):o[i])||0;return typeof l=="string"?l.trim():l}}measureInstanceViewportBox(r,{transformPagePoint:i}){return Fg(r,i)}build(r,i,o){jc(r,i,o.transformTemplate)}scrapeMotionValuesFromProps(r,i,o){return Pc(r,i,o)}}class B4 extends qg{constructor(){super(...arguments),this.type="svg",this.isSVGTag=!1,this.measureInstanceViewportBox=ze}getBaseTargetFromProps(r,i){return r[i]}readValueFromInstance(r,i){if(or.has(i)){const o=Bc(i);return o&&o.default||0}return i=V0.has(i)?i:xc(i),r.getAttribute(i)}scrapeMotionValuesFromProps(r,i,o){return I0(r,i,o)}build(r,i,o){Cc(r,i,this.isSVGTag,o.transformTemplate)}renderInstance(r,i,o,l){O0(r,i,o,l)}mount(r){this.isSVGTag=Nc(r.tagName),super.mount(r)}}const $4=(t,r)=>wc(t)?new B4(r):new I4(r,{allowProjection:t!==b.Fragment}),U4=v5({...fk,..._4,...b4,...M4},$4),me=_w(U4);function Zg(t,r){let i;const o=()=>{const{currentTime:l}=r,u=(l===null?0:l.value)/100;i!==u&&t(u),i=u};return pe.update(o,!0),()=>Ut(o)}const Lo=new WeakMap;let Ln;function W4(t,r){if(r){const{inlineSize:i,blockSize:o}=r[0];return{width:i,height:o}}else return t instanceof SVGElement&&"getBBox"in t?t.getBBox():{width:t.offsetWidth,height:t.offsetHeight}}function H4({target:t,contentRect:r,borderBoxSize:i}){var o;(o=Lo.get(t))===null||o===void 0||o.forEach(l=>{l({target:t,contentSize:r,get size(){return W4(t,i)}})})}function K4(t){t.forEach(H4)}function G4(){typeof ResizeObserver>"u"||(Ln=new ResizeObserver(K4))}function Y4(t,r){Ln||G4();const i=X0(t);return i.forEach(o=>{let l=Lo.get(o);l||(l=new Set,Lo.set(o,l)),l.add(r),Ln==null||Ln.observe(o)}),()=>{i.forEach(o=>{const l=Lo.get(o);l==null||l.delete(r),l!=null&&l.size||Ln==null||Ln.unobserve(o)})}}const Do=new Set;let Ki;function X4(){Ki=()=>{const t={width:window.innerWidth,height:window.innerHeight},r={target:window,size:t,contentSize:t};Do.forEach(i=>i(r))},window.addEventListener("resize",Ki)}function Q4(t){return Do.add(t),Ki||X4(),()=>{Do.delete(t),!Do.size&&Ki&&(Ki=void 0)}}function q4(t,r){return typeof t=="function"?Q4(t):Y4(t,r)}const Z4=50,jm=()=>({current:0,offset:[],progress:0,scrollLength:0,targetOffset:0,targetLength:0,containerLength:0,velocity:0}),J4=()=>({time:0,x:jm(),y:jm()}),e3={x:{length:"Width",position:"Left"},y:{length:"Height",position:"Top"}};function Cm(t,r,i,o){const l=i[r],{length:c,position:u}=e3[r],h=l.current,m=i.time;l.current=t[`scroll${u}`],l.scrollLength=t[`scroll${c}`]-t[`client${c}`],l.offset.length=0,l.offset[0]=0,l.offset[1]=l.scrollLength,l.progress=ir(0,l.scrollLength,l.current);const g=o-m;l.velocity=g>Z4?0:zc(l.current-h,g)}function t3(t,r,i){Cm(t,"x",r,i),Cm(t,"y",r,i),r.time=i}function n3(t,r){const i={x:0,y:0};let o=t;for(;o&&o!==r;)if(o instanceof HTMLElement)i.x+=o.offsetLeft,i.y+=o.offsetTop,o=o.offsetParent;else if(o.tagName==="svg"){const l=o.getBoundingClientRect();o=o.parentElement;const c=o.getBoundingClientRect();i.x+=l.left-c.left,i.y+=l.top-c.top}else if(o instanceof SVGGraphicsElement){const{x:l,y:c}=o.getBBox();i.x+=l,i.y+=c;let u=null,h=o.parentNode;for(;!u;)h.tagName==="svg"&&(u=h),h=o.parentNode;o=u}else break;return i}const Qu={start:0,center:.5,end:1};function Em(t,r,i=0){let o=0;if(t in Qu&&(t=Qu[t]),typeof t=="string"){const l=parseFloat(t);t.endsWith("px")?o=l:t.endsWith("%")?t=l/100:t.endsWith("vw")?o=l/100*document.documentElement.clientWidth:t.endsWith("vh")?o=l/100*document.documentElement.clientHeight:t=l}return typeof t=="number"&&(o=r*t),i+o}const r3=[0,0];function i3(t,r,i,o){let l=Array.isArray(t)?t:r3,c=0,u=0;return typeof t=="number"?l=[t,t]:typeof t=="string"&&(t=t.trim(),t.includes(" ")?l=t.split(" "):l=[t,Qu[t]?t:"0"]),c=Em(l[0],i,o),u=Em(l[1],r),c-u}const s3={All:[[0,0],[1,1]]},o3={x:0,y:0};function a3(t){return"getBBox"in t&&t.tagName!=="svg"?t.getBBox():{width:t.clientWidth,height:t.clientHeight}}function l3(t,r,i){const{offset:o=s3.All}=i,{target:l=t,axis:c="y"}=i,u=c==="y"?"height":"width",h=l!==t?n3(l,t):o3,m=l===t?{width:t.scrollWidth,height:t.scrollHeight}:a3(l),g={width:t.clientWidth,height:t.clientHeight};r[c].offset.length=0;let v=!r[c].interpolate;const x=o.length;for(let w=0;w<x;w++){const S=i3(o[w],g[u],m[u],h[c]);!v&&S!==r[c].interpolatorOffsets[w]&&(v=!0),r[c].offset[w]=S}v&&(r[c].interpolate=Wc(r[c].offset,Pg(o),{clamp:!1}),r[c].interpolatorOffsets=[...r[c].offset]),r[c].progress=Jt(0,1,r[c].interpolate(r[c].current))}function u3(t,r=t,i){if(i.x.targetOffset=0,i.y.targetOffset=0,r!==t){let o=r;for(;o&&o!==t;)i.x.targetOffset+=o.offsetLeft,i.y.targetOffset+=o.offsetTop,o=o.offsetParent}i.x.targetLength=r===t?r.scrollWidth:r.clientWidth,i.y.targetLength=r===t?r.scrollHeight:r.clientHeight,i.x.containerLength=t.clientWidth,i.y.containerLength=t.clientHeight}function c3(t,r,i,o={}){return{measure:()=>u3(t,o.target,i),update:l=>{t3(t,i,l),(o.offset||o.target)&&l3(t,i,o)},notify:()=>r(i)}}const zi=new WeakMap,Nm=new WeakMap,ju=new WeakMap,Pm=t=>t===document.documentElement?window:t;function Kc(t,{container:r=document.documentElement,...i}={}){let o=ju.get(r);o||(o=new Set,ju.set(r,o));const l=J4(),c=c3(r,t,l,i);if(o.add(c),!zi.has(r)){const h=()=>{for(const w of o)w.measure()},m=()=>{for(const w of o)w.update(Be.timestamp)},g=()=>{for(const w of o)w.notify()},v=()=>{pe.read(h,!1,!0),pe.read(m,!1,!0),pe.update(g,!1,!0)};zi.set(r,v);const x=Pm(r);window.addEventListener("resize",v,{passive:!0}),r!==document.documentElement&&Nm.set(r,q4(r,v)),x.addEventListener("scroll",v,{passive:!0})}const u=zi.get(r);return pe.read(u,!1,!0),()=>{var h;Ut(u);const m=ju.get(r);if(!m||(m.delete(c),m.size))return;const g=zi.get(r);zi.delete(r),g&&(Pm(r).removeEventListener("scroll",g),(h=Nm.get(r))===null||h===void 0||h(),window.removeEventListener("resize",g))}}function d3({source:t,container:r,axis:i="y"}){t&&(r=t);const o={value:0},l=Kc(c=>{o.value=c[i].progress*100},{container:r,axis:i});return{currentTime:o,cancel:l}}const Cu=new Map;function Jg({source:t,container:r=document.documentElement,axis:i="y"}={}){t&&(r=t),Cu.has(r)||Cu.set(r,{});const o=Cu.get(r);return o[i]||(o[i]=U0()?new ScrollTimeline({source:r,axis:i}):d3({source:r,axis:i})),o[i]}function f3(t){return t.length===2}function e1(t){return t&&(t.target||t.offset)}function p3(t,r){return f3(t)||e1(r)?Kc(i=>{t(i[r.axis].progress,i)},r):Zg(t,Jg(r))}function h3(t,r){if(t.flatten(),e1(r))return t.pause(),Kc(i=>{t.time=t.duration*i[r.axis].progress},r);{const i=Jg(r);return t.attachTimeline?t.attachTimeline(i,o=>(o.pause(),Zg(l=>{o.time=o.duration*l},i))):ut}}function m3(t,{axis:r="y",...i}={}){const o={axis:r,...i};return typeof t=="function"?p3(t,o):h3(t,o)}function Tm(t,r){jw(!!(!r||r.current))}const g3=()=>({scrollX:Qt(0),scrollY:Qt(0),scrollXProgress:Qt(0),scrollYProgress:Qt(0)});function v3({container:t,target:r,layoutEffect:i=!0,...o}={}){const l=Wr(g3);return(i?is:b.useEffect)(()=>(Tm("target",r),Tm("container",t),m3((u,{x:h,y:m})=>{l.scrollX.set(h.current),l.scrollXProgress.set(h.progress),l.scrollY.set(m.current),l.scrollYProgress.set(m.progress)},{...o,container:(t==null?void 0:t.current)||void 0,target:(r==null?void 0:r.current)||void 0})),[t,r,JSON.stringify(o.offset)]),l}function Fr(t){const r=Wr(()=>Qt(t)),{isStatic:i}=b.useContext(rs);if(i){const[,o]=b.useState(t);b.useEffect(()=>r.on("change",o),[])}return r}function t1(t,r){const i=Fr(r()),o=()=>i.set(r());return o(),is(()=>{const l=()=>pe.preRender(o,!1,!0),c=t.map(u=>u.on("change",l));return()=>{c.forEach(u=>u()),Ut(o)}}),i}function Rm(t){return typeof t=="number"?t:parseFloat(t)}function Yo(t,r={}){const{isStatic:i}=b.useContext(rs),o=b.useRef(null),l=Fr(Ye(t)?Rm(t.get()):t),c=b.useRef(l.get()),u=b.useRef(()=>{}),h=()=>{const g=o.current;g&&g.time===0&&g.sample(Be.delta),m(),o.current=Fb({keyframes:[l.get(),c.current],velocity:l.getVelocity(),type:"spring",restDelta:.001,restSpeed:.01,...r,onUpdate:u.current})},m=()=>{o.current&&o.current.stop()};return b.useInsertionEffect(()=>l.attach((g,v)=>i?v(g):(c.current=g,u.current=v,pe.update(h),l.get()),m),[JSON.stringify(r)]),is(()=>{if(Ye(t))return t.on("change",g=>l.set(Rm(g)))},[l]),l}const x3=t=>t&&typeof t=="object"&&t.mix,y3=t=>x3(t)?t.mix:void 0;function w3(...t){const r=!Array.isArray(t[0]),i=r?0:-1,o=t[0+i],l=t[1+i],c=t[2+i],u=t[3+i],h=Wc(l,c,{mixer:y3(c[0]),...u});return r?h(o):h}function b3(t){Bi.current=[],t();const r=t1(Bi.current,t);return Bi.current=void 0,r}function Xo(t,r,i,o){if(typeof t=="function")return b3(t);const l=typeof r=="function"?r:w3(r,i,o);return Array.isArray(t)?Am(t,l):Am([t],([c])=>l(c))}function Am(t,r){const i=Wr(()=>[]);return t1(t,()=>{i.length=0;const o=t.length;for(let l=0;l<o;l++)i[l]=t[l].get();return r(i)})}const n1=b.createContext(null);function k3({children:t}){const[r,i]=b.useState(()=>JSON.parse(localStorage.getItem("wishlist")||"[]"));function o(u){i(u),localStorage.setItem("wishlist",JSON.stringify(u))}function l(u){const h=r.some(m=>m._id===u._id);o(h?r.filter(m=>m._id!==u._id):[...r,u]),Te(`/wishlist/${u._id}`,{method:h?"DELETE":"POST"}).catch(()=>{}),Me.success(h?"Removed from wishlist":"Saved to wishlist")}const c=b.useMemo(()=>({products:r,toggle:l,isSaved:u=>r.some(h=>h._id===u)}),[r]);return f.jsx(n1.Provider,{value:c,children:t})}const Gc=()=>b.useContext(n1);function Qo({product:t}){var E,A,D,_;const{dark:r}=ns(),{add:i}=ts(),{toggle:o,isSaved:l}=Gc(),c=(A=(E=t.images)==null?void 0:E[0])==null?void 0:A.url,u=l(t._id),h=t.mrp&&t.price<t.mrp?Math.round((t.mrp-t.price)/t.mrp*100):null,m=Fr(0),g=Fr(0),v=Yo(Xo(g,[-.5,.5],[4,-4]),{stiffness:300,damping:30}),x=Yo(Xo(m,[-.5,.5],[-4,4]),{stiffness:300,damping:30});function w(z){const I=z.currentTarget.getBoundingClientRect(),G=(z.clientX-I.left)/I.width-.5,ne=(z.clientY-I.top)/I.height-.5;m.set(G),g.set(ne)}function S(){m.set(0),g.set(0)}const j={dark:{Phones:"#22d3ee",Computers:"#818cf8",Audio:"#f472b6",Wearables:"#4ade80",Accessories:"#fb923c","Home Appliances":"#facc15"},light:{Phones:"#0891B2",Computers:"#4F46E5",Audio:"#DB2777",Wearables:"#16A34A",Accessories:"#EA580C","Home Appliances":"#CA8A04"}},N={dark:{Mobile:"#3B82F6",Tablet:"#8B5CF6",Laptop:"#F59E0B",Desktop:"#06B6D4",Earphones:"#EC4899",Earbuds:"#14B8A6",Headphone:"#A855F7",Speaker:"#EF4444",Smartwatch:"#EAB308",FitnessBand:"#84CC16",Charger:"#F97316",PowerBank:"#F43F5E",Storage:"#6366F1",Cable:"#22C55E",Refrigerator:"#0EA5E9",WashingMachine:"#10B981",Microwave:"#FB923C",TV:"#D946EF"},light:{Mobile:"#2563EB",Tablet:"#7C3AED",Laptop:"#D97706",Desktop:"#0891B2",Earphones:"#DB2777",Earbuds:"#0F766E",Headphone:"#9333EA",Speaker:"#DC2626",Smartwatch:"#CA8A04",FitnessBand:"#65A30D",Charger:"#EA580C",PowerBank:"#E11D48",Storage:"#4F46E5",Cable:"#16A34A",Refrigerator:"#0284C7",WashingMachine:"#059669",Microwave:"#C2410C",TV:"#C026D3"}};return f.jsxs(me.article,{layout:!0,initial:{opacity:0,y:24},animate:{opacity:1,y:0},transition:{duration:.5,ease:[.23,1,.32,1]},style:{rotateX:v,rotateY:x,transformStyle:"preserve-3d",perspective:1e3},onMouseMove:w,onMouseLeave:S,className:"product-card group relative flex flex-col overflow-hidden",children:[f.jsx(xe,{to:`/products/${t.slug}`,className:"block",children:f.jsxs("div",{className:"product-card__image-wrap relative aspect-[4/3] overflow-hidden",children:[f.jsx("div",{className:"product-card__spotlight","aria-hidden":"true"}),f.jsx("img",{src:c,alt:t.name,className:"product-card__image h-full w-full object-cover"}),f.jsxs("div",{className:"absolute left-3 top-3 flex flex-wrap gap-1.5 z-10",children:[f.jsx("span",{className:"product-card__badge",style:{background:r?`${j.dark[t.category]}90`:`${j.light[t.category]}90`,borderColor:r?`${j.dark[t.category]}90`:`${j.light[t.category]}90`,color:r?"#000000":"#ffffff"},children:t.category}),t.subCategory&&f.jsx("span",{className:"product-card__badge product-card__badge--sub",style:{background:r?`${N.dark[t.subCategory]}90`:`${N.light[t.subCategory]}90`,borderColor:r?`${N.dark[t.subCategory]}40`:`${N.light[t.subCategory]}35`,color:r?"#000000":"#ffffff"},children:t.subCategory})]}),h&&f.jsxs("div",{className:"product-card__discount absolute right-3 top-3 z-10",children:[f.jsx(v0,{size:10,className:"inline-block mb-0.5"}),h,"% off"]})]})}),f.jsxs("div",{className:"product-card__body flex flex-1 flex-col p-5",children:[f.jsxs("div",{className:"flex items-center justify-between mb-3",children:[f.jsxs("div",{className:"product-card__rating",children:[f.jsx(fc,{size:11,fill:"currentColor",className:"text-amber-400"}),f.jsx("span",{children:((_=(D=t.rating)==null?void 0:D.toFixed)==null?void 0:_.call(D,1))??t.rating})]}),f.jsx(me.button,{whileTap:{scale:.88},className:`product-card__wish ${u?"product-card__wish--saved":""}`,onClick:()=>o(t),"aria-label":u?"Remove from wishlist":"Add to wishlist",children:f.jsx(lc,{size:15,strokeWidth:u?0:1.8,fill:u?"currentColor":"none"})})]}),f.jsx(xe,{to:`/products/${t.slug}`,className:"product-card__name mb-1.5 line-clamp-1",children:t.name}),f.jsx("p",{className:"product-card__desc line-clamp-2 flex-1",children:t.description}),f.jsx("div",{className:"product-card__divider my-4","aria-hidden":"true"}),f.jsxs("div",{className:"flex items-end justify-between gap-3",children:[f.jsxs("div",{className:"leading-none",children:[f.jsx("p",{className:"product-card__price",children:lt(t.price)}),t.mrp&&t.mrp>t.price&&f.jsx("p",{className:"product-card__mrp mt-1",children:lt(t.mrp)})]}),f.jsxs(me.button,{whileHover:{scale:1.04},whileTap:{scale:.96},className:"product-card__cta",onClick:()=>i(t),children:[f.jsx(dc,{size:15,className:"product-card__cta-icon"}),f.jsx("span",{children:"Add to cart"})]})]})]}),f.jsx("div",{className:"product-card__glow","aria-hidden":"true"}),f.jsx("style",{children:`
        .product-card {
          --card-radius: 20px;
          --ease-expo: cubic-bezier(0.23, 1, 0.32, 1);

          border-radius: var(--card-radius);
          background: #ffffff;
          border: 1px solid rgba(0, 0, 0, 0.07);
          box-shadow:
            0 1px 2px rgba(0,0,0,0.04),
            0 4px 16px rgba(0,0,0,0.06),
            0 1px 0 rgba(255,255,255,0.9) inset;
          transition:
            transform 0.4s var(--ease-expo),
            box-shadow 0.4s var(--ease-expo);
          will-change: transform;
        }

        .dark .product-card {
          background: #111318;
          border-color: rgba(255, 255, 255, 0.06);
          box-shadow:
            0 1px 2px rgba(0,0,0,0.4),
            0 8px 32px rgba(0,0,0,0.5),
            0 1px 0 rgba(255,255,255,0.04) inset;
        }

        .product-card:hover {
          box-shadow:
            0 2px 4px rgba(0,0,0,0.06),
            0 12px 40px rgba(0,0,0,0.12),
            0 0 0 1px rgba(99, 102, 241, 0.18),
            0 1px 0 rgba(255,255,255,0.9) inset;
        }

        .dark .product-card:hover {
          box-shadow:
            0 2px 8px rgba(0,0,0,0.6),
            0 16px 56px rgba(0,0,0,0.7),
            0 0 0 1px rgba(139, 92, 246, 0.25),
            0 1px 0 rgba(255,255,255,0.05) inset;
        }

        /* ── Image ─────────────── */
        .product-card__image-wrap {
          border-radius: var(--card-radius) var(--card-radius) 0 0;
          background:
            radial-gradient(ellipse 70% 70% at 50% 60%, rgba(99,102,241,0.06) 0%, transparent 70%),
            #f6f6f8;
        }

        .dark .product-card__image-wrap {
          background:
            radial-gradient(ellipse 70% 70% at 50% 60%, rgba(139,92,246,0.1) 0%, transparent 70%),
            #18191f;
        }

        .product-card__image {
          transition: transform 0.7s var(--ease-expo), filter 0.4s ease;
          transform-origin: center 60%;
        }

        .product-card:hover .product-card__image {
          transform: scale(1.07) translateY(-2px);
        }

        .product-card__spotlight {
          position: absolute;
          inset: 0;
          background: radial-gradient(circle at 50% 0%, rgba(255,255,255,0.4) 0%, transparent 60%);
          pointer-events: none;
          z-index: 1;
        }

        .dark .product-card__spotlight {
          background: radial-gradient(circle at 50% 0%, rgba(255,255,255,0.06) 0%, transparent 60%);
        }

        /* ── Badges ──────────────── */
        .product-card__badge {
          display: inline-block;
          padding: 4px 10px;
          border-radius: 100px;
          font-size: 10px;
          font-weight: 600;
          letter-spacing: 0.04em;
          text-transform: uppercase;
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          border: 1px solid;
        }

        .product-card__badge--sub {
          background: rgba(255,255,255,0.48);
        }

        .dark .product-card__badge--sub {
          background: rgba(17, 19, 24, 0.5);
        }

        .product-card__discount {
          display: inline-flex;
          align-items: center;
          gap: 3px;
          padding: 3px 9px;
          border-radius: 100px;
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 0.02em;
          background: rgba(16, 185, 129, 0.15);
          color: #059669;
          border: 0.5px solid rgba(16, 185, 129, 0.3);
          backdrop-filter: blur(8px);
        }

        .dark .product-card__discount {
          background: rgba(16, 185, 129, 0.12);
          color: #34d399;
          border-color: rgba(52, 211, 153, 0.2);
        }

        /* ── Body ──────────────── */
        .product-card__body {
          position: relative;
          z-index: 1;
        }

        /* ── Rating ──────────────── */
        .product-card__rating {
          display: inline-flex;
          align-items: center;
          gap: 4px;
          padding: 3px 8px 3px 6px;
          border-radius: 100px;
          font-size: 11px;
          font-weight: 700;
          color: #92400e;
          background: rgba(251, 191, 36, 0.12);
          border: 0.5px solid rgba(251, 191, 36, 0.25);
          letter-spacing: 0.01em;
        }

        .dark .product-card__rating {
          color: #fbbf24;
          background: rgba(251, 191, 36, 0.08);
          border-color: rgba(251, 191, 36, 0.15);
        }

        /* ── Wishlist ─────────────── */
        .product-card__wish {
          width: 32px;
          height: 32px;
          border-radius: 50%;
          display: grid;
          place-items: center;
          color: #a3a3a3;
          background: rgba(0,0,0,0.04);
          border: 0.5px solid rgba(0,0,0,0.06);
          transition: all 0.25s ease;
        }

        .dark .product-card__wish {
          color: rgba(255,255,255,0.35);
          background: rgba(255,255,255,0.05);
          border-color: rgba(255,255,255,0.06);
        }

        .product-card__wish:hover {
          background: rgba(239, 68, 68, 0.08);
          border-color: rgba(239, 68, 68, 0.2);
          color: #ef4444;
          transform: scale(1.1);
        }

        .product-card__wish--saved {
          color: #ef4444;
          background: rgba(239, 68, 68, 0.1);
          border-color: rgba(239, 68, 68, 0.25);
          box-shadow: 0 0 0 3px rgba(239, 68, 68, 0.08);
        }

        .dark .product-card__wish--saved {
          color: #f87171;
          background: rgba(248, 113, 113, 0.12);
          border-color: rgba(248, 113, 113, 0.2);
          box-shadow: 0 0 0 3px rgba(248, 113, 113, 0.06);
        }

        /* ── Name ────────────────── */
        .product-card__name {
          display: block;
          font-size: 16px;
          font-weight: 800;
          letter-spacing: -0.02em;
          color: #0d0d14;
          line-height: 1.2;
          transition: color 0.2s;
        }

        .dark .product-card__name {
          color: rgba(255,255,255,0.95);
        }

        .product-card__name:hover {
          color: #4f46e5;
        }

        .dark .product-card__name:hover {
          color: #818cf8;
        }

        /* ── Description ─────────── */
        .product-card__desc {
          font-size: 13px;
          line-height: 1.65;
          color: #737380;
          letter-spacing: 0.005em;
        }

        .dark .product-card__desc {
          color: rgba(255,255,255,0.4);
        }

        /* ── Divider ─────────────── */
        .product-card__divider {
          height: 1px;
          background: linear-gradient(
            to right,
            transparent,
            rgba(0,0,0,0.06) 20%,
            rgba(0,0,0,0.06) 80%,
            transparent
          );
        }

        .dark .product-card__divider {
          background: linear-gradient(
            to right,
            transparent,
            rgba(255,255,255,0.06) 20%,
            rgba(255,255,255,0.06) 80%,
            transparent
          );
        }

        /* ── Price ───────────────── */
        .product-card__price {
          font-size: 22px;
          font-weight: 900;
          letter-spacing: -0.03em;
          color: #0d0d14;
          line-height: 1;
        }

        .dark .product-card__price {
          color: rgba(255,255,255,0.95);
        }

        .product-card__mrp {
          font-size: 12px;
          color: #a3a3a3;
          text-decoration: line-through;
          letter-spacing: -0.01em;
        }

        .dark .product-card__mrp {
          color: rgba(255,255,255,0.25);
        }

        /* ── CTA ─────────────────── */
        .product-card__cta {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 10px 18px;
          border-radius: 100px;
          font-size: 13px;
          font-weight: 700;
          letter-spacing: 0.01em;
          color: #ffffff;

          /* Light Theme - Purple */
          background: linear-gradient(135deg, #7c3aed 0%, #9333ea 100%);

          box-shadow:
            0 1px 2px rgba(124, 58, 237, 0.30),
            0 4px 12px rgba(124, 58, 237, 0.25),
            inset 0 1px 0 rgba(255, 255, 255, 0.15);

          transition:
            transform 0.3s ease,
            box-shadow 0.3s ease,
            background 0.3s ease;

          white-space: nowrap;
        }

        .product-card__cta:hover {
          background: linear-gradient(135deg, #6d28d9 0%, #7e22ce 100%);

          box-shadow:
            0 1px 2px rgba(124, 58, 237, 0.40),
            0 8px 24px rgba(124, 58, 237, 0.35),
            inset 0 1px 0 rgba(255, 255, 255, 0.20);
        }

        /* ── Dark Theme - Cyan ─────────────────── */
        .dark .product-card__cta {
          background: linear-gradient(135deg, #0891b2 0%, #22d3ee 100%);

          box-shadow:
            0 1px 2px rgba(34, 211, 238, 0.30),
            0 4px 16px rgba(34, 211, 238, 0.25),
            inset 0 1px 0 rgba(255, 255, 255, 0.12);
        }

        .dark .product-card__cta:hover {
          background: linear-gradient(135deg, #0ea5e9 0%, #67e8f9 100%);

          box-shadow:
            0 1px 2px rgba(34, 211, 238, 0.45),
            0 10px 28px rgba(34, 211, 238, 0.35),
            inset 0 1px 0 rgba(255, 255, 255, 0.15);
        }

        /* ── Icon Animation ─────────────────── */
        .product-card__cta-icon {
          transition: transform 0.3s var(--ease-expo);
        }

        .product-card__cta:hover .product-card__cta-icon {
          transform: translateY(-1px) scale(1.1);
        }

        /* ── Glow ────────────────── */
        .product-card__glow {
          position: absolute;
          inset: -1px;
          border-radius: calc(var(--card-radius) + 1px);
          background: transparent;
          pointer-events: none;
          transition: box-shadow 0.4s ease;
        }

        .product-card:hover .product-card__glow {
          box-shadow: 0 0 0 1px rgba(99, 102, 241, 0.2);
        }

        .dark .product-card:hover .product-card__glow {
          box-shadow: 0 0 0 1px rgba(139, 92, 246, 0.3);
        }
      `})]})}const S3="/assets/Hero-BewiL0Zh.png",j3=[{name:"Phones",icon:p0,accent:"#22d3ee",lightAccent:"#0891B2",glow:"rgba(34,211,238,0.2)",bg:"from-cyan-950/40 to-slate-900/60",lightBg:"from-cyan-300/20 to-cyan-100/60"},{name:"Computers",icon:d0,accent:"#818cf8",lightAccent:"#4F46E5",glow:"rgba(129,140,248,0.2)",bg:"from-indigo-950/40 to-slate-900/60",lightBg:"from-indigo-300/20 to-indigo-100/60"},{name:"Audio",icon:l0,accent:"#f472b6",lightAccent:"#DB2777",glow:"rgba(244,114,182,0.2)",bg:"from-pink-950/40 to-slate-900/60",lightBg:"from-pink-300/20 to-pink-100/60"},{name:"Wearables",icon:g0,accent:"#4ade80",lightAccent:"#16A34A",glow:"rgba(74,222,128,0.2)",bg:"from-emerald-950/40 to-slate-900/60",lightBg:"from-emerald-300/20 to-emerald-100/60"},{name:"Accessories",icon:uc,accent:"#fb923c",lightAccent:"#EA580C",glow:"rgba(251,146,60,0.2)",bg:"from-orange-950/40 to-slate-900/60",lightBg:"from-orange-300/20 to-orange-100/60"},{name:"Home Appliances",icon:u0,accent:"#facc15",lightAccent:"#CA8A04",glow:"rgba(250,204,21,0.2)",bg:"from-yellow-950/40 to-slate-900/60",lightBg:"from-yellow-300/20 to-yellow-100/60"}],C3=[{icon:f0,label:"2-Year Warranty",desc:"Every product backed by our comprehensive warranty program."},{icon:h0,label:"Free Shipping",desc:"Complimentary delivery on all orders above ₹999."},{icon:v0,label:"Fast Dispatch",desc:"Same-day dispatch for orders placed before 2 PM."},{icon:J2,label:"Premium Curation",desc:"Only the finest electronics, hand-picked by our experts."}],E3=["SAVE30","TECH2025","NEWUSER","FLASHDEAL"],Eu=[.16,1,.3,1],N3=[.4,0,.2,1];function Jn({className:t,opacity:r="opacity-20"}){return f.jsx("div",{className:`pointer-events-none absolute rounded-full blur-[120px] ${r} ${t}`,"aria-hidden":!0})}function Nu({opacity:t=.025}){return f.jsx("div",{className:"pointer-events-none absolute inset-0 z-0",style:{opacity:t,backgroundImage:`url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E")`,backgroundRepeat:"repeat",backgroundSize:"128px 128px"}})}function Vi({color:t="text-cyan-400",children:r}){return f.jsxs("p",{className:`mb-3 flex items-center gap-3 text-[15px] font-bold uppercase tracking-[.35em] ${t}`,children:[f.jsx("span",{className:"inline-block h-px w-10 bg-current opacity-60"}),r,f.jsx("span",{className:"inline-block h-px w-10 bg-current opacity-60"})]})}function Pu({children:t,className:r,...i}){const o=b.useRef(null),l=Fr(0),c=Fr(0),u=Yo(l,{stiffness:300,damping:25}),h=Yo(c,{stiffness:300,damping:25}),m=v=>{var j;const x=(j=o.current)==null?void 0:j.getBoundingClientRect();if(!x)return;const w=x.left+x.width/2,S=x.top+x.height/2;l.set((v.clientX-w)*.25),c.set((v.clientY-S)*.25)},g=()=>{l.set(0),c.set(0)};return f.jsx(me.div,{ref:o,style:{x:u,y:h},onMouseMove:m,onMouseLeave:g,className:r,...i,children:t})}function P3(){const{dark:t}=ns(),[r,i]=b.useState([]),[o,l]=b.useState(!0),[c,u]=b.useState(""),[h,m]=b.useState(!1),g=b.useRef(null),v={root:t?"bg-[#04060e] text-white":"bg-[#F0F2FF] text-zinc-950",selection:t?"selection:bg-cyan-500/25 selection:text-white":"selection:bg-violet-400/30 selection:text-zinc-950",heroSection:t?"bg-[radial-gradient(ellipse_130%_90%_at_55%_35%,#071627_0%,#050810_60%,#04060e_100%)]":"bg-[radial-gradient(ellipse_130%_90%_at_55%_35%,rgba(237,233,254,0.98)_0%,rgba(219,234,254,0.80)_45%,rgba(240,242,255,0.96)_100%)]",heroFrame:t?"border-white/[0.08] bg-slate-950/60 shadow-[0_32px_80px_rgba(0,0,0,0.7)]":"border-violet-200/40 bg-gradient-to-br from-white/95 via-purple-50/90 to-blue-50/85 shadow-[0_32px_80px_rgba(109,40,217,0.14)] backdrop-blur-2xl",sectionDivider:t?"from-transparent via-white/[0.04] to-transparent":"from-transparent via-violet-200/30 to-transparent",newsletterCard:t?"border-white/[0.06] bg-gradient-to-br from-slate-900/80 to-slate-950/90 backdrop-blur-xl":"border-violet-200/30 bg-white/90 backdrop-blur-xl shadow-[0_20px_60px_rgba(109,40,217,0.10)]",inputField:t?"border-white/[0.08] bg-slate-900/60 text-white placeholder-zinc-600 focus:border-cyan-400/40 focus:bg-slate-900/80":"border-violet-200/50 bg-white/90 text-zinc-950 placeholder-zinc-400 focus:border-violet-400/60 focus:shadow-[0_0_0_3px_rgba(139,92,246,0.12)]",trustCard:t?"border-white/[0.06] bg-white/[0.025] hover:border-emerald-500/25 hover:bg-emerald-500/[0.03]":"border-violet-100/60 bg-white/70 hover:border-emerald-300/50 hover:bg-white/90 shadow-[0_4px_20px_rgba(0,0,0,0.04)]",btnPrimary:t?"bg-gradient-to-r from-cyan-500 to-blue-600 shadow-[0_8px_32px_rgba(6,182,212,0.30)] hover:shadow-[0_12px_40px_rgba(6,182,212,0.45)]":"bg-gradient-to-r from-violet-600 to-indigo-600 shadow-[0_8px_32px_rgba(109,40,217,0.30)] hover:shadow-[0_12px_40px_rgba(109,40,217,0.45)]",btnSecondary:t?"border-white/[0.10] bg-white/[0.04] text-white hover:bg-white/[0.08] hover:border-white/20":"border-violet-200/60 bg-white/80 text-zinc-900 hover:bg-white hover:border-violet-300",heroGradText1:t?"linear-gradient(110deg, #115E59 0%, #0D9488 55%, #2DD4BF 100%)":"linear-gradient(110deg,#7C3AED 0%,#6D28D9 50%,#5B21B6 100%)",heroGradText2:t?"linear-gradient(110deg, #0891B2 0%, #22D3EE 50%, #7DD3FC 100%)":"linear-gradient(110deg,#9333EA 0%,#EC4899 100%)"},{scrollYProgress:x}=v3({target:g,offset:["start start","end start"]}),w=Xo(x,[0,1],["0%","12%"]),S=Xo(x,[0,.8],[1,.9]);b.useEffect(()=>{let _=!0;return Te("/products").then(({products:z})=>{_&&i(z||[])}).catch(z=>console.error("Failed to load products",z)).finally(()=>{_&&l(!1)}),()=>{_=!1}},[]);const j=r.sort((_,z)=>(z.rating||0)-(_.rating||0)).slice(0,3),N=r.slice(3,6),E=(_=0,z=32)=>({initial:{opacity:0,y:z},whileInView:{opacity:1,y:0},viewport:{once:!0,margin:"-60px"},transition:{duration:.7,delay:_*.09,ease:Eu}}),A=(_=0)=>({initial:{opacity:0},whileInView:{opacity:1},viewport:{once:!0,margin:"-40px"},transition:{duration:.6,delay:_*.08,ease:N3}}),D=()=>f.jsx("div",{className:`mx-auto h-px max-w-5xl bg-gradient-to-r ${v.sectionDivider}`});return f.jsxs("div",{className:`min-h-screen ${v.root} ${v.selection} font-[system-ui] antialiased`,children:[f.jsxs("section",{ref:g,className:`relative mb-10 min-h-[94vh] overflow-hidden ${v.heroSection}`,children:[f.jsx(Nu,{opacity:t?.03:.02}),f.jsx(Jn,{opacity:t?"opacity-[0.18]":"opacity-[0.45]",className:`left-[-12%] top-[-8%] h-[640px] w-[640px] ${t?"bg-cyan-500":"bg-violet-500"}`}),f.jsx(Jn,{opacity:t?"opacity-[0.12]":"opacity-[0.28]",className:`right-[2%] bottom-[5%] h-[480px] w-[480px] ${t?"bg-blue-500":"bg-fuchsia-400"}`}),f.jsx(Jn,{opacity:t?"opacity-[0.10]":"opacity-[0.22]",className:`left-[38%] top-[15%] h-[360px] w-[360px] ${t?"bg-indigo-600":"bg-indigo-500"}`}),f.jsx("div",{className:"pointer-events-none absolute inset-0",style:{background:t?"radial-gradient(ellipse 80% 60% at 50% 100%, rgba(0,0,0,0.5) 0%, transparent 70%)":"radial-gradient(ellipse 80% 50% at 50% 110%, rgba(240,242,255,0.8) 0%, transparent 70%)"}}),f.jsx("div",{className:"pointer-events-none absolute inset-0",style:{opacity:t?.025:.04,backgroundImage:"linear-gradient(rgba(99,102,241,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(99,102,241,0.5) 1px, transparent 1px)",backgroundSize:"72px 72px"}}),f.jsxs(me.div,{style:{y:w,opacity:S,willChange:"transform, opacity"},className:"relative mx-auto grid max-w-7xl items-center gap-10 px-5 py-10 mb-10 lg:grid-cols-[1.15fr_0.85fr] lg:px-12 lg:py-20",children:[f.jsxs("div",{className:"flex flex-col",children:[f.jsx(me.div,{...E(0),children:f.jsxs("span",{className:`mb-6 inline-flex items-center gap-2.5 rounded-full px-5 py-2.5 text-xs font-bold backdrop-blur-md transition-all duration-500
                ${t?"border border-cyan-400/20 bg-cyan-400/[0.07] text-cyan-300 shadow-[0_0_24px_rgba(34,211,238,0.08)]":"border border-violet-300/50 bg-violet-50/90 text-violet-700 shadow-[0_4px_20px_rgba(139,92,246,0.12)]"}`,children:[f.jsxs("span",{className:"relative flex h-2 w-2",children:[f.jsx("span",{className:`absolute inline-flex h-full w-full animate-ping rounded-full ${t?"bg-cyan-400 opacity-60":"bg-violet-500 opacity-50"}`}),f.jsx("span",{className:`relative inline-flex h-2 w-2 rounded-full ${t?"bg-cyan-400":"bg-violet-500"}`})]}),"2025 Collection — Just dropped"]})}),f.jsxs(me.h1,{...E(1),className:"text-[clamp(3.2rem,7.5vw,5.8rem)] font-black leading-[1.0] tracking-[-0.02em]",children:[f.jsx("span",{className:`block ${t?"text-white":"text-zinc-900"}`,children:"Next-gen"}),f.jsxs("span",{className:"block mt-1",children:[f.jsx("span",{className:"bg-clip-text text-transparent",style:{backgroundImage:v.heroGradText1},children:"Tech."})," ",f.jsx("span",{className:"bg-clip-text text-transparent",style:{backgroundImage:v.heroGradText2},children:"Refined."})]})]}),f.jsx(me.p,{...E(2),className:`mt-7 max-w-[480px] text-[15px] leading-[1.75] ${t?"text-zinc-200":"text-zinc-500"}`,children:"Astaria brings you the world's finest electronics — curated for performance, designed for life. From flagship phones to pro-grade audio, discover tomorrow's essentials today."}),f.jsxs(me.div,{...E(3),className:"mt-9 flex flex-wrap gap-3",children:[f.jsx(Pu,{children:f.jsxs(xe,{to:"/products",className:`group inline-flex items-center gap-2.5 rounded-full px-8 py-4 text-sm font-bold text-white transition-all duration-300 hover:scale-[1.04] active:scale-[0.98] ${v.btnPrimary}`,children:["Shop Now",f.jsx(oh,{size:15,className:"transition-transform duration-300 group-hover:translate-x-1"})]})}),f.jsx(Pu,{children:f.jsx(xe,{to:"/signup",className:`inline-flex items-center gap-2 rounded-full border px-8 py-4 text-sm font-bold transition-all duration-300 backdrop-blur hover:scale-[1.03] active:scale-[0.98] ${v.btnSecondary}`,children:"Join Free"})})]}),f.jsx(me.div,{...E(4),className:"mt-12 flex flex-wrap gap-10",children:[["50K+","Happy Customers"],["200+","Premium Brands"],["4.9★","Average Rating"]].map(([_,z])=>f.jsxs("div",{className:"flex flex-col gap-0.5",children:[f.jsx("p",{className:`text-[1.65rem] font-black leading-none tracking-tight ${t?"text-white":"text-zinc-900"}`,children:_}),f.jsx("p",{className:`text-[11px] font-medium ${t?"text-zinc-500":"text-zinc-400"}`,children:z})]},z))})]}),f.jsxs(me.div,{...E(2,20),className:"relative flex justify-center",children:[f.jsx("div",{className:`absolute inset-4 rounded-3xl blur-3xl ${t?"bg-gradient-to-br from-cyan-500/20 via-blue-600/15 to-violet-600/20":"bg-gradient-to-br from-violet-400/25 via-fuchsia-300/20 to-blue-400/20"}`}),f.jsxs("div",{className:"relative w-full max-w-[460px]",children:[f.jsx("div",{className:`relative overflow-hidden rounded-[2rem] border p-1.5 ${v.heroFrame} transition-all duration-700`,children:f.jsx("img",{src:S3,alt:"Hero product",className:"aspect-[4/5] w-full rounded-[1.6rem] object-cover"})}),f.jsx(me.div,{initial:{opacity:0,x:16},animate:{opacity:1,x:0,y:[0,-9,0]},transition:{opacity:{delay:1,duration:.5},x:{delay:1,duration:.5},y:{delay:1.2,duration:3.8,repeat:1/0,ease:"easeInOut"}},className:`absolute -right-3 top-10 rounded-2xl border px-4 py-3 backdrop-blur-xl shadow-2xl ${t?"border-white/[0.08] bg-black/65":"border-white/70 bg-white/90 shadow-[0_8px_32px_rgba(0,0,0,0.10)]"}`,children:f.jsxs("div",{className:"flex items-center gap-2.5",children:[f.jsx("div",{className:`flex h-8 w-8 items-center justify-center rounded-lg ${t?"bg-cyan-400/10":"bg-violet-300/60"}`,children:f.jsx(O2,{size:16,className:t?"text-cyan-400":"text-violet-600"})}),f.jsxs("div",{children:[f.jsx("p",{className:`text-[9px] font-medium ${t?"text-zinc-500":"text-zinc-400"}`,children:"Latest chips"}),f.jsx("p",{className:`text-[13px] font-black ${t?"text-white":"text-zinc-900"}`,children:"Pro Performance"})]})]})}),f.jsx(me.div,{initial:{opacity:0,x:-16},animate:{opacity:1,x:0,y:[0,9,0]},transition:{opacity:{delay:1.2,duration:.5},x:{delay:1.2,duration:.5},y:{delay:1.4,duration:4.2,repeat:1/0,ease:"easeInOut"}},className:`absolute -left-3 bottom-10 rounded-2xl border px-4 py-3 backdrop-blur-xl shadow-2xl ${t?"border-white/[0.08] bg-black/65":"border-white/70 bg-white/90 shadow-[0_8px_32px_rgba(0,0,0,0.10)]"}`,children:f.jsxs("div",{className:"flex items-center gap-2.5",children:[f.jsx("div",{className:`flex h-8 w-8 items-center justify-center rounded-lg ${t?"bg-cyan-400/10":"bg-yellow-200/40"}`,children:f.jsx(fc,{size:14,fill:"#facc15",className:"text-yellow-400"})}),f.jsx("p",{className:`text-[13px] font-black ${t?"text-white":"text-zinc-900"}`,children:"Editor's Choice"})]})})]})]})]}),f.jsx("div",{className:`pointer-events-none absolute bottom-0 left-0 right-0 h-32 ${t?"bg-gradient-to-t from-[#04060e] to-transparent":"bg-gradient-to-t from-[#F0F2FF] to-transparent"}`})]}),f.jsx(D,{}),f.jsxs("section",{className:"relative mx-auto max-w-7xl px-5 py-5 lg:px-12",children:[f.jsxs("div",{className:"flex items-end justify-between gap-4",children:[f.jsxs("div",{children:[f.jsx(Vi,{color:t?"text-cyan-400":"text-violet-500",children:"Browse"}),f.jsx(me.h2,{...E(0),className:`text-[clamp(1.8rem,4vw,2.6rem)] font-black tracking-tight ${t?"text-white":"text-zinc-900"}`,children:"Shop by Category"})]}),f.jsx(me.div,{...A(1),children:f.jsxs(xe,{to:"/products",className:`hidden items-center gap-1 text-sm font-bold transition-all sm:flex ${t?"text-cyan-400 hover:text-cyan-300":"text-violet-600 hover:text-violet-500"}`,children:["View all ",f.jsx(Ro,{size:13})]})})]}),f.jsx("div",{className:"mt-10 grid grid-cols-2 gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6",children:j3.map((_,z)=>{const I=_.icon;return f.jsx(me.div,{...E(z,24),children:f.jsxs(xe,{to:`/products?category=${_.name}`,className:`group relative w-full flex items-center sm:flex-col sm:items-start sm:justify-between overflow-hidden rounded-2xl border p-5 transition-all duration-500 h-[90px] sm:h-[140px] lg:h-[160px]
                  ${t?`border-white/[0.2] bg-gradient-to-b ${_.bg} hover:border-white/[0.14]`:`border-black/[0.2] bg-gradient-to-b ${_.lightBg} hover:border-zinc-300`}`,style:{boxShadow:t?"none":"0 4px 20px rgba(0,0,0,0.04)"},children:[f.jsx("div",{className:"absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100",style:{background:`radial-gradient(ellipse 80% 60% at 50% 100%, ${_.glow} 0%, transparent 70%)`}}),f.jsxs("div",{className:"relative flex items-center gap-4 w-full sm:flex-col sm:items-start sm:gap-0",children:[f.jsx("div",{className:"flex h-11 w-11 shrink-0 items-center justify-center rounded-xl transition-all duration-300 group-hover:scale-110",style:{background:`${t?_.accent:_.lightAccent}15`,color:t?_.accent:_.lightAccent},children:f.jsx(I,{size:21})}),f.jsxs("div",{className:"sm:mt-8",children:[f.jsx("p",{className:`font-black text-[14px] ${t?"text-white":"text-zinc-900"}`,children:_.name}),f.jsx("p",{className:"mt-1 text-[11px] font-medium transition-colors duration-300 group-hover:opacity-80",style:{color:t?_.accent:_.lightAccent},children:"Explore →"})]})]})]})},_.name)})})]}),f.jsx(D,{}),f.jsxs("section",{className:"relative mx-auto max-w-7xl px-5 py-6 lg:px-12",children:[f.jsxs("div",{className:"flex items-end justify-between gap-4",children:[f.jsxs("div",{children:[f.jsx(Vi,{color:t?"text-violet-400":"text-violet-500",children:"Handpicked"}),f.jsx(me.h2,{...E(0),className:`text-[clamp(1.8rem,4vw,2.6rem)] font-black tracking-tight ${t?"text-white":"text-zinc-900"}`,children:"Editor's Picks"})]}),f.jsx(me.div,{...A(1),children:f.jsxs(xe,{to:"/products",className:`hidden items-center gap-1 text-sm font-bold transition-colors sm:flex ${t?"text-violet-400 hover:text-violet-300":"text-violet-600 hover:text-violet-500"}`,children:["View all ",f.jsx(Ro,{size:13})]})})]}),f.jsx("div",{className:"mt-10 grid gap-5 md:grid-cols-3",children:o?Array.from({length:3}).map((_,z)=>f.jsx("div",{className:`h-80 animate-pulse rounded-2xl ${t?"bg-white/[0.03]":"bg-zinc-100/80"}`},z)):j.length?j.map((_,z)=>f.jsx(me.div,{...E(z),children:f.jsx(Qo,{product:_})},_._id)):f.jsx("div",{className:`col-span-full rounded-2xl border border-dashed p-10 text-center ${t?"border-white/10 text-zinc-500":"border-zinc-200 text-zinc-400"}`,children:"Add products from the admin panel to populate this section."})})]}),f.jsx(D,{}),f.jsx("section",{className:"mx-auto max-w-7xl px-5 py-5 lg:px-12",children:f.jsxs(me.div,{...E(0),className:"relative overflow-hidden rounded-3xl",children:[f.jsx("div",{className:"absolute inset-0 bg-gradient-to-r from-cyan-600 via-blue-700 to-violet-800"}),f.jsx("div",{className:"absolute inset-0 bg-gradient-to-br from-transparent via-white/[0.04] to-white/[0.07]"}),f.jsx(Nu,{opacity:.04}),f.jsx(Jn,{className:"right-[-5%] top-[-30%] h-[380px] w-[380px] bg-cyan-400 opacity-[0.12]"}),f.jsx(Jn,{className:"left-[30%] bottom-[-20%] h-[280px] w-[280px] bg-violet-500 opacity-[0.15]"}),f.jsxs("div",{className:"relative flex flex-col items-start justify-between gap-8 px-8 py-14 sm:flex-row sm:items-center lg:px-16",children:[f.jsxs("div",{children:[f.jsx("p",{className:"text-[10px] font-bold uppercase tracking-[.35em] text-white/60",children:"Limited Time"}),f.jsxs("h3",{className:"mt-2 text-[clamp(1.7rem,4vw,2.8rem)] font-black leading-[1.1] tracking-tight text-white",children:["Flash Sale — Up to",f.jsx("br",{}),f.jsx("span",{className:"text-yellow-300",children:"40% Off"})," Today"]}),f.jsx("div",{className:"mt-5 flex flex-wrap gap-2",children:E3.map(_=>f.jsx("span",{className:"rounded-full border border-white/15 bg-white/[0.08] px-3.5 py-1.5 text-[11px] font-bold text-white/90 backdrop-blur-sm",children:_},_))})]}),f.jsx(Pu,{children:f.jsxs(xe,{to:"/products",className:"group inline-flex items-center gap-2.5 rounded-full bg-white px-9 py-4 text-sm font-black text-blue-700 shadow-2xl shadow-black/20 transition-all duration-300 hover:scale-105 hover:shadow-white/20 active:scale-[0.98]",children:["Grab the deals",f.jsx(oh,{size:15,className:"transition-transform duration-300 group-hover:translate-x-1"})]})})]})]})}),f.jsx(D,{}),f.jsxs("section",{className:"mx-auto max-w-7xl px-5 py-5 lg:px-12",children:[f.jsxs("div",{className:"flex items-end justify-between gap-4",children:[f.jsxs("div",{children:[f.jsx(Vi,{color:t?"text-pink-400":"text-pink-500",children:"Hot right now"}),f.jsx(me.h2,{...E(0),className:`text-[clamp(1.8rem,4vw,2.6rem)] font-black tracking-tight ${t?"text-white":"text-zinc-900"}`,children:"Trending"})]}),f.jsx(me.div,{...A(1),children:f.jsxs(xe,{to:"/products",className:`hidden items-center gap-1 text-sm font-bold transition-colors sm:flex ${t?"text-pink-400 hover:text-pink-300":"text-pink-500 hover:text-pink-400"}`,children:["See more ",f.jsx(Ro,{size:13})]})})]}),f.jsx("div",{className:"mt-10 grid gap-5 md:grid-cols-3",children:o?Array.from({length:3}).map((_,z)=>f.jsx("div",{className:`h-80 animate-pulse rounded-2xl ${t?"bg-white/[0.03]":"bg-zinc-100/80"}`},z)):(N.length?N:j).length?(N.length?N:j).map((_,z)=>f.jsx(me.div,{...E(z),children:f.jsx(Qo,{product:_})},`t-${_._id}`)):f.jsx("div",{className:`col-span-full rounded-2xl border border-dashed p-10 text-center ${t?"border-white/10 text-zinc-500":"border-zinc-200 text-zinc-400"}`,children:"No trending products yet."})})]}),f.jsx(D,{}),f.jsxs("section",{className:"mx-auto max-w-7xl px-5 py-5 lg:px-12",children:[f.jsxs("div",{className:"text-center",children:[f.jsx(Vi,{color:t?"text-emerald-400":"text-emerald-600",children:f.jsx("span",{className:"mx-auto",children:"Why Astaria"})}),f.jsx(me.h2,{...E(0),className:`text-[clamp(1.8rem,4vw,2.6rem)] font-black tracking-tight ${t?"text-white":"text-zinc-900"}`,children:"Built on Trust"}),f.jsx(me.p,{...E(1),className:`mx-auto mt-3 max-w-sm text-sm leading-7 ${t?"text-zinc-500":"text-zinc-400"}`,children:"Every purchase is backed by our promise of quality, speed, and security."})]}),f.jsx("div",{className:"mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4",children:C3.map(({icon:_,label:z,desc:I},G)=>f.jsxs(me.div,{...E(G),className:`group relative overflow-hidden rounded-2xl border p-7 transition-all duration-500 ${v.trustCard}`,children:[f.jsx("div",{className:"absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100",style:{background:t?"radial-gradient(ellipse 80% 50% at 50% 100%, rgba(52,211,153,0.05) 0%, transparent 70%)":"radial-gradient(ellipse 80% 50% at 50% 100%, rgba(52,211,153,0.06) 0%, transparent 70%)"}}),f.jsx("div",{className:`relative mb-5 flex h-12 w-12 items-center justify-center rounded-xl transition-all duration-300 group-hover:scale-110
                ${t?"bg-emerald-500/[0.08] text-emerald-400":"bg-emerald-50 text-emerald-600"}`,children:f.jsx(_,{size:21})}),f.jsx("p",{className:`relative font-black text-[15px] ${t?"text-white":"text-zinc-900"}`,children:z}),f.jsx("p",{className:`relative mt-2 text-sm leading-6 ${t?"text-zinc-500":"text-zinc-400"}`,children:I})]},z))})]}),f.jsx(D,{}),f.jsx("section",{className:"mx-auto max-w-7xl px-5 py-5 lg:px-12",children:f.jsxs(me.div,{...E(0),className:`relative overflow-hidden rounded-3xl border p-10 text-center lg:p-16 ${v.newsletterCard}`,children:[f.jsx(Nu,{opacity:t?.03:.015}),f.jsx(Jn,{className:`left-[5%] top-[-25%] h-[320px] w-[320px] ${t?"bg-cyan-600":"bg-violet-400"} opacity-[0.10]`}),f.jsx(Jn,{className:`right-[5%] bottom-[-15%] h-[280px] w-[280px] ${t?"bg-violet-600":"bg-fuchsia-400"} opacity-[0.10]`}),f.jsxs("div",{className:"relative",children:[f.jsx(Vi,{color:t?"text-cyan-400":"text-violet-500",children:f.jsx("span",{className:"mx-auto",children:"Stay in the loop"})}),f.jsx(me.h2,{...E(0),className:`mt-1 text-[clamp(1.8rem,4vw,2.6rem)] font-black tracking-tight ${t?"text-white":"text-zinc-900"}`,children:"Get Exclusive Deals"}),f.jsx(me.p,{...E(1),className:`mx-auto mt-3 max-w-sm text-sm leading-7 ${t?"text-zinc-500":"text-zinc-400"}`,children:"Subscribe for early access to drops, flash sales, and members-only offers."}),f.jsx(Sw,{mode:"wait",children:h?f.jsx(me.p,{initial:{opacity:0,scale:.88,y:8},animate:{opacity:1,scale:1,y:0},transition:{duration:.5,ease:Eu},className:`mx-auto mt-9 w-fit rounded-full border px-7 py-3.5 text-sm font-bold
                    ${t?"border-emerald-400/25 bg-emerald-400/[0.07] text-emerald-400":"border-emerald-400/40 bg-emerald-50 text-emerald-600"}`,children:"✓ You're on the list!"},"thanks"):f.jsxs(me.form,{initial:{opacity:0,y:10},animate:{opacity:1,y:0},transition:{duration:.5,ease:Eu},className:"mx-auto mt-9 flex max-w-md gap-2",onSubmit:_=>{_.preventDefault(),c&&m(!0)},children:[f.jsxs("div",{className:"relative flex-1",children:[f.jsx(c0,{size:15,className:"absolute left-4 top-1/2 -translate-y-1/2 text-zinc-400"}),f.jsx("input",{type:"email",required:!0,placeholder:"your@email.com",value:c,onChange:_=>u(_.target.value),className:`w-full rounded-full border py-3.5 pl-10 pr-4 text-sm outline-none transition-all duration-200 backdrop-blur ${v.inputField}`})]}),f.jsx("button",{type:"submit",className:`rounded-full px-7 py-3.5 text-sm font-bold text-white transition-all duration-300 hover:scale-105 active:scale-[0.97] ${v.btnPrimary}`,children:"Subscribe"})]},"form")})]})]})}),f.jsx("div",{className:"h-8"})]})}function T3(){return f.jsx("div",{className:"grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4",children:Array.from({length:8}).map((t,r)=>f.jsxs("div",{className:"card overflow-hidden p-4",children:[f.jsx("div",{className:"skeleton aspect-[4/3]"}),f.jsx("div",{className:"skeleton mt-4 h-5 w-3/4"}),f.jsx("div",{className:"skeleton mt-3 h-4 w-full"}),f.jsx("div",{className:"skeleton mt-2 h-4 w-2/3"})]},r))})}function R3(){const[t,r]=Fy(),[i,o]=b.useState([]),[l,c]=b.useState(["All","Electronics","Fashion","Home & Living","Beauty & Care","Gaming","Gadgets & Accessories"]),[u,h]=b.useState(["All"]),[m,g]=b.useState(!0),v={search:t.get("search")||"",category:t.get("category")||"All",subCategory:t.get("subCategory")||"All",maxPrice:t.get("maxPrice")||"1000000",rating:t.get("rating")||"0"};b.useEffect(()=>{g(!0),Te(`/products?${t.toString()}`).then(({products:S,categories:j,subCategories:N})=>{o(S),c(["All",...j]),h(["All",...N||[]])}).catch(()=>o(Io)).finally(()=>g(!1))},[t]);function x(S,j){const N=new URLSearchParams(t);j?N.set(S,j):N.delete(S),r(N)}const w=b.useMemo(()=>`${i.length} products found`,[i.length]);return f.jsxs("section",{className:"section",children:[f.jsxs("div",{className:"mb-8 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between",children:[f.jsxs("div",{children:[f.jsx("p",{className:"text-sm font-bold uppercase tracking-[.25em] text-teal-600",children:"Collection"}),f.jsx("h1",{className:"text-4xl font-black",children:"Premium catalog"}),f.jsx("p",{className:"mt-2 text-zinc-500",children:w})]}),f.jsxs("div",{className:"glass flex min-w-full items-center gap-2 rounded-full px-4 py-3 lg:min-w-96",children:[f.jsx(cc,{size:18}),f.jsx("input",{className:"w-full bg-transparent text-sm outline-none",value:v.search,onChange:S=>x("search",S.target.value),placeholder:"Search by name, category or tag"})]})]}),f.jsxs("div",{className:"grid gap-6 lg:grid-cols-[280px_1fr]",children:[f.jsxs("aside",{className:"glass h-fit rounded-lg p-5",children:[f.jsxs("p",{className:"mb-4 flex items-center gap-2 font-black",children:[f.jsx(Z2,{size:18})," Filters"]}),f.jsx("label",{className:"text-sm font-bold",children:"Category"}),f.jsx("select",{className:"input mt-2",value:v.category,onChange:S=>x("category",S.target.value),children:l.map(S=>f.jsx("option",{children:S},S))}),f.jsx("label",{className:"mt-5 block text-sm font-bold",children:"Max price"}),f.jsx("input",{type:"range",min:"0",max:"1000000",step:"1000",value:v.maxPrice,onChange:S=>x("maxPrice",S.target.value),className:"mt-3 w-full accent-teal-600"}),f.jsxs("p",{className:"text-sm font-bold",children:["Under Rs ",Number(v.maxPrice).toLocaleString("en-IN")]}),f.jsx("label",{className:"mt-5 block text-sm font-bold",children:"Sub category"}),f.jsx("select",{className:"input mt-2",value:v.subCategory,onChange:S=>x("subCategory",S.target.value),children:u.map(S=>f.jsx("option",{children:S},S))}),f.jsx("label",{className:"mt-5 block text-sm font-bold",children:"Minimum rating"}),f.jsxs("select",{className:"input mt-2",value:v.rating,onChange:S=>x("rating",S.target.value),children:[f.jsx("option",{value:"0",children:"Any"}),f.jsx("option",{value:"4",children:"4+ stars"}),f.jsx("option",{value:"4.5",children:"4.5+ stars"})]})]}),m?f.jsx(T3,{}):f.jsx("div",{className:"grid gap-5 sm:grid-cols-2 xl:grid-cols-3",children:i.map(S=>f.jsx(Qo,{product:S},S._id))})]})]})}function A3(){var u,h;const{slug:t}=Xx(),[r,i]=b.useState(null),{add:o}=ts(),{toggle:l,isSaved:c}=Gc();return b.useEffect(()=>{Te(`/products/${t}`).then(({product:m})=>i(m)).catch(()=>i(Io.find(m=>m.slug===t)||Io[0]))},[t]),r?f.jsxs("section",{className:"section grid gap-10 lg:grid-cols-[1fr_.9fr]",children:[f.jsx("div",{className:"overflow-hidden rounded-lg bg-zinc-100 dark:bg-zinc-900",children:f.jsx("img",{className:"aspect-square w-full object-cover",src:(h=(u=r.images)==null?void 0:u[0])==null?void 0:h.url,alt:r.name})}),f.jsxs("div",{children:[f.jsxs("div",{className:"mb-3 flex flex-wrap items-center gap-2",children:[f.jsx("p",{className:"inline-flex rounded-full bg-teal-100 px-3 py-1 text-sm font-bold text-teal-800 dark:bg-teal-400/15 dark:text-teal-100",children:r.category}),r.subCategory&&f.jsx("p",{className:"inline-flex rounded-full bg-zinc-200 px-3 py-1 text-sm font-bold text-zinc-700 dark:bg-zinc-700 dark:text-zinc-200",children:r.subCategory})]}),f.jsx("h1",{className:"text-4xl font-black leading-tight",children:r.name}),f.jsxs("p",{className:"mt-3 flex items-center gap-2 text-amber-600",children:[f.jsx(fc,{size:18,fill:"currentColor"})," ",r.rating," rating"]}),f.jsxs("p",{className:"mt-5 text-3xl font-black",children:[lt(r.price)," ",f.jsx("span",{className:"text-lg text-zinc-400 line-through",children:lt(r.mrp)})]}),f.jsx("p",{className:"mt-5 text-lg leading-8 text-zinc-600 dark:text-zinc-300",children:r.description}),f.jsxs("div",{className:"mt-8 flex flex-wrap gap-3",children:[f.jsxs("button",{className:"btn-primary",onClick:()=>o(r),children:[f.jsx(dc,{size:18})," Add to cart"]}),f.jsxs("button",{className:"btn-soft",onClick:()=>l(r),children:[f.jsx(lc,{size:18,fill:c(r._id)?"currentColor":"none"})," ","Wishlist"]})]}),f.jsxs("div",{className:"mt-8 grid gap-3 sm:grid-cols-2",children:[f.jsxs("div",{className:"glass rounded-lg p-4",children:[f.jsx(h0,{className:"mb-3 text-teal-600"}),f.jsx("p",{className:"font-bold",children:"Fast delivery"}),f.jsx("p",{className:"text-sm text-zinc-500",children:"Free shipping above Rs 5,000"})]}),f.jsxs("div",{className:"glass rounded-lg p-4",children:[f.jsx(f0,{className:"mb-3 text-teal-600"}),f.jsx("p",{className:"font-bold",children:"Secure checkout"}),f.jsx("p",{className:"text-sm text-zinc-500",children:"Razorpay-ready payment flow"})]})]})]})]}):f.jsx("section",{className:"section",children:f.jsx("div",{className:"skeleton h-96"})})}function _3(){const{items:t,subtotal:r,update:i,remove:o}=ts(),l=r>5e3||r===0?0:149,c=Math.round(r*.18);return f.jsxs("section",{className:"section",children:[f.jsx("h1",{className:"mb-8 text-4xl font-black",children:"Shopping cart"}),f.jsxs("div",{className:"grid gap-6 lg:grid-cols-[1fr_360px]",children:[f.jsxs("div",{className:"grid gap-4",children:[t.length===0&&f.jsxs("div",{className:"card p-8 text-center",children:[f.jsx("p",{className:"font-bold",children:"Your cart is empty."}),f.jsx(xe,{className:"btn-primary mt-4",to:"/products",children:"Shop now"})]}),t.map(({product:u,quantity:h})=>{var m,g;return f.jsxs("div",{className:"card grid items-center gap-4 p-4 sm:grid-cols-[120px_minmax(0,1fr)_auto]",children:[f.jsx("img",{src:(g=(m=u.images)==null?void 0:m[0])==null?void 0:g.url,alt:u.name,className:"aspect-square rounded-lg object-cover"}),f.jsxs("div",{className:"min-w-0",children:[f.jsx("p",{className:"font-black",children:u.name}),f.jsx("p",{className:"mt-1 text-sm text-zinc-500",children:u.category}),f.jsx("p",{className:"mt-3 font-bold",children:lt(u.price)})]}),f.jsxs("div",{className:"flex items-center gap-2 self-center",children:[f.jsx("button",{className:"btn-soft !p-2",onClick:()=>i(u._id,h-1),children:f.jsx(H2,{size:16})}),f.jsx("span",{className:"grid h-10 w-10 place-items-center rounded-lg bg-zinc-100 font-bold dark:bg-white/10",children:h}),f.jsx("button",{className:"btn-soft !p-2",onClick:()=>i(u._id,h+1),children:f.jsx(Q2,{size:16})}),f.jsx("button",{className:"btn-soft !p-2 text-rose-600",onClick:()=>o(u._id),children:f.jsx(tw,{size:16})})]})]},u._id)})]}),f.jsxs("aside",{className:"glass h-fit rounded-lg p-6",children:[f.jsx("p",{className:"text-xl font-black",children:"Order summary"}),f.jsxs("div",{className:"mt-5 space-y-3 text-sm",children:[f.jsxs("p",{className:"flex justify-between",children:["Subtotal ",f.jsx("b",{children:lt(r)})]}),f.jsxs("p",{className:"flex justify-between",children:["Shipping ",f.jsx("b",{children:lt(l)})]}),f.jsxs("p",{className:"flex justify-between",children:["Tax ",f.jsx("b",{children:lt(c)})]})]}),f.jsxs("p",{className:"mt-5 flex justify-between border-t border-zinc-200 pt-5 text-lg font-black dark:border-white/10",children:["Total ",f.jsx("span",{children:lt(r+l+c)})]}),f.jsx(xe,{to:"/checkout",className:"btn-primary mt-6 w-full",children:"Checkout"})]})]})]})}function M3(){const{products:t}=Gc();return f.jsxs("section",{className:"section",children:[f.jsx("h1",{className:"mb-8 text-4xl font-black",children:"Wishlist"}),t.length===0?f.jsx("div",{className:"card p-8 text-center font-bold",children:"Saved products will appear here."}):f.jsx("div",{className:"grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4",children:t.map(r=>f.jsx(Qo,{product:r},r._id))})]})}function L3(){const{items:t,subtotal:r,clear:i}=ts(),o=sr(),[l,c]=b.useState(!1),u=r+(r>5e3?0:149)+Math.round(r*.18);async function h(m){m.preventDefault();const g=new FormData(m.currentTarget);c(!0);try{const{order:v}=await Te("/orders",{method:"POST",body:JSON.stringify({shippingAddress:Object.fromEntries(g)})});Me.loading("Payment is processing..."),await new Promise(x=>setTimeout(x,2e3)),await Te("/payments/mock",{method:"POST",body:JSON.stringify({orderId:v._id})}),Me.dismiss(),Me.success("Order placed successfully!"),i(),o("/profile")}catch(v){Me.error(v.message)}finally{c(!1)}}return f.jsxs("section",{className:"section",children:[f.jsx("h1",{className:"mb-8 text-4xl font-black",children:"Checkout"}),f.jsxs("form",{onSubmit:h,className:"grid gap-6 lg:grid-cols-[1fr_360px]",children:[f.jsxs("div",{className:"card p-6",children:[f.jsx("p",{className:"mb-5 text-xl font-black",children:"Shipping details"}),f.jsx("div",{className:"grid gap-4 sm:grid-cols-2",children:["name","phone","line1","city","state","pincode"].map(m=>f.jsx("input",{required:!0,name:m,className:"input",placeholder:m==="line1"?"Address":m[0].toUpperCase()+m.slice(1)},m))})]}),f.jsxs("aside",{className:"glass h-fit rounded-lg p-6",children:[f.jsx("p",{className:"text-xl font-black",children:"Payment"}),f.jsxs("p",{className:"mt-3 text-sm text-zinc-500",children:[t.length," items, Auto pay demo"]}),f.jsxs("p",{className:"mt-6 flex justify-between text-lg font-black",children:["Total ",f.jsx("span",{children:lt(u)})]}),f.jsx("button",{disabled:!t.length||l,className:"btn-primary mt-6 w-full disabled:opacity-50",children:l?"Processing...":"Pay with Auto Pay"})]})]})]})}function D3(){const{user:t,logout:r}=Ur(),[i,o]=b.useState([]);return b.useEffect(()=>{Te("/orders").then(({orders:l})=>o(l)).catch(()=>o([]))},[]),f.jsxs("section",{className:"section",children:[f.jsxs("div",{className:"mb-8 flex flex-wrap items-center justify-between gap-3",children:[f.jsxs("div",{children:[f.jsx("p",{className:"text-sm font-bold uppercase tracking-[.25em] text-teal-600",children:"Account"}),f.jsx("h1",{className:"text-4xl font-black",children:"Profile"})]}),f.jsxs("button",{className:"btn-soft",onClick:r,children:[f.jsx($2,{size:18})," Logout"]})]}),f.jsxs("div",{className:"grid gap-6 lg:grid-cols-[340px_1fr]",children:[f.jsxs("aside",{className:"glass rounded-lg p-6",children:[f.jsx(rw,{className:"mb-4 text-teal-600",size:40}),f.jsx("p",{className:"text-2xl font-black",children:t==null?void 0:t.name}),f.jsx("p",{className:"text-zinc-500",children:t==null?void 0:t.email}),f.jsx("p",{className:"mt-4 inline-flex rounded-full bg-zinc-950 px-3 py-1 text-xs font-bold text-white dark:bg-white dark:text-zinc-950",children:t==null?void 0:t.role})]}),f.jsxs("div",{className:"card p-6",children:[f.jsxs("p",{className:"mb-5 flex items-center gap-2 text-xl font-black",children:[f.jsx(G2,{})," Order history"]}),f.jsxs("div",{className:"space-y-3",children:[i.length===0&&f.jsx("p",{className:"text-zinc-500",children:"No orders yet."}),i.map(l=>f.jsxs("div",{className:"rounded-lg border border-zinc-200 p-4 dark:border-white/10",children:[f.jsxs("p",{className:"font-bold",children:["Order #",l._id.slice(-8)]}),f.jsxs("p",{className:"text-sm text-zinc-500",children:[l.status," - ",lt(l.total)]})]},l._id))]})]})]})]})}const z3=`
  @import url('https://fonts.googleapis.com/css2?family=Sora:wght@300;400;500;600;700&family=DM+Sans:ital,wght@0,300;0,400;0,500;1,300&family=Syne:wght@400;500;600;700;800&display=swap');

  :root {
    --cyan: #00e5ff;
    --cyan-dim: #00b8d4;
    --cyan-glow: rgba(0,229,255,0.18);
    --cyan-glow-sm: rgba(0,229,255,0.08);
    --purple: #7c3aed;
    --purple-dim: #6d28d9;
    --purple-glow: rgba(124,58,237,0.22);
    --purple-glow-sm: rgba(124,58,237,0.08);
    --accent2: #6c63ff;
    --logo-accent: var(--cyan);
    --logo-accent2: #6c63ff;
    --font: 'Syne', sans-serif;
    --radius: 20px;
    --transition: cubic-bezier(0.23, 1, 0.32, 1);
  }

  .astaria-login-root {
    font-family: 'DM Sans', sans-serif;
    min-height: 100vh;
    display: grid;
    place-items: center;
    padding: 36px 16px;
    position: relative;
    overflow: hidden;
  }

  /* ── DARK THEME ── */
  .astaria-login-root.dark-theme {
    background: #050a0f;
    color: #e8f4f8;
    --accent: var(--cyan);
    --accent2: #6c63ff;
    --logo-accent: var(--cyan);
    --logo-accent2: #6c63ff;
    --accent-dim: var(--cyan-dim);
    --accent-glow: var(--cyan-glow);
    --accent-glow-sm: var(--cyan-glow-sm);
    --grad-btn: linear-gradient(135deg, #00e5ff 0%, #006080 100%);
    --grad-btn-hover: linear-gradient(135deg, #33ecff 0%, #007a9e 100%);
    --card-bg: rgba(255,255,255,0.028);
    --card-border: rgba(0,229,255,0.1);
    --card-shadow: 0 32px 80px rgba(0,0,0,0.7), 0 0 0 1px rgba(0,229,255,0.06), inset 0 1px 0 rgba(255,255,255,0.05);
    --input-bg: rgba(255,255,255,0.04);
    --input-border: rgba(255,255,255,0.08);
    --input-border-focus: rgba(0,229,255,0.5);
    --input-shadow-focus: 0 0 0 3px rgba(0,229,255,0.1), 0 0 20px rgba(0,229,255,0.06);
    --text-muted: rgba(180,210,220,0.55);
    --text-sub: rgba(180,210,220,0.75);
    --divider: rgba(255,255,255,0.06);
    --social-bg: rgba(255,255,255,0.04);
    --social-border: rgba(255,255,255,0.08);
    --social-hover: rgba(0,229,255,0.06);
    --blob1: rgba(0,229,255,0.06);
    --blob2: rgba(0,160,200,0.04);
    --blob3: rgba(0,100,150,0.05);
  }

  /* ── LIGHT THEME ── */
  .astaria-login-root.light-theme {
    background: #f5f3ff;
    color: #1a0a3d;
    --accent: var(--purple);
    --accent2: #ec4899;
    --logo-accent: var(--purple);
    --logo-accent2: #ec4899;
    --accent-dim: var(--purple-dim);
    --accent-glow: var(--purple-glow);
    --accent-glow-sm: var(--purple-glow-sm);
    --grad-btn: linear-gradient(135deg, #7c3aed 0%, #4f46e5 100%);
    --grad-btn-hover: linear-gradient(135deg, #8b5cf6 0%, #6366f1 100%);
    --card-bg: rgba(255,255,255,0.7);
    --card-border: rgba(124,58,237,0.12);
    --card-shadow: 0 32px 80px rgba(109,40,217,0.12), 0 0 0 1px rgba(124,58,237,0.08), inset 0 1px 0 rgba(255,255,255,0.9);
    --input-bg: rgba(255,255,255,0.8);
    --input-border: rgba(124,58,237,0.12);
    --input-border-focus: rgba(124,58,237,0.5);
    --input-shadow-focus: 0 0 0 3px rgba(124,58,237,0.1), 0 0 20px rgba(124,58,237,0.06);
    --text-muted: rgba(80,40,160,0.5);
    --text-sub: rgba(80,40,160,0.7);
    --divider: rgba(124,58,237,0.1);
    --social-bg: rgba(255,255,255,0.6);
    --social-border: rgba(124,58,237,0.1);
    --social-hover: rgba(124,58,237,0.06);
    --blob1: rgba(124,58,237,0.07);
    --blob2: rgba(99,102,241,0.05);
    --blob3: rgba(167,139,250,0.06);
  }

  /* ── BACKGROUND BLOBS ── */
  .al-blob {
    position: absolute;
    border-radius: 50%;
    pointer-events: none;
    filter: blur(80px);
    animation: blobDrift 12s ease-in-out infinite alternate;
  }
  .al-blob-1 {
    width: 520px; height: 520px;
    top: -140px; left: -120px;
    background: var(--blob1);
    animation-duration: 14s;
  }
  .al-blob-2 {
    width: 380px; height: 380px;
    bottom: -100px; right: -80px;
    background: var(--blob2);
    animation-duration: 18s;
    animation-delay: -4s;
  }
  .al-blob-3 {
    width: 260px; height: 260px;
    top: 40%; left: 60%;
    background: var(--blob3);
    animation-duration: 22s;
    animation-delay: -9s;
  }
  @keyframes blobDrift {
    0%   { transform: translate(0,0) scale(1); }
    33%  { transform: translate(20px,-30px) scale(1.05); }
    66%  { transform: translate(-10px,20px) scale(0.97); }
    100% { transform: translate(30px,10px) scale(1.03); }
  }

  /* ── GRID OVERLAY ── */
  .al-grid {
    position: absolute;
    inset: 0;
    pointer-events: none;
    opacity: 0.025;
    background-image:
      linear-gradient(var(--accent) 1px, transparent 1px),
      linear-gradient(90deg, var(--accent) 1px, transparent 1px);
    background-size: 48px 48px;
    mask-image: radial-gradient(ellipse 70% 70% at 50% 50%, black, transparent);
  }

  /* ── CARD ── */
  .al-card {
    position: relative;
    z-index: 10;
    width: min(100%, 440px);
    max-width: 440px;
    background: var(--card-bg);
    border: 1px solid var(--card-border);
    border-radius: var(--radius);
    box-shadow: var(--card-shadow);
    backdrop-filter: blur(32px) saturate(180%);
    -webkit-backdrop-filter: blur(32px) saturate(180%);
    padding: 48px 44px;
    animation: cardIn 0.7s var(--transition) both;
  }
  @keyframes cardIn {
    from { opacity: 0; transform: translateY(28px) scale(0.97); filter: blur(4px); }
    to   { opacity: 1; transform: translateY(0) scale(1); filter: blur(0); }
  }

  /* ── LOGO ── */
  .al-logo {
    display: flex;
    align-items: center;
    gap: 10px;
    margin-bottom: 32px;
    animation: fadeUp 0.6s var(--transition) 0.1s both;
  }
  .al-logo-mark {
    position: relative;
    width: 36px;
    height: 36px;
    flex-shrink: 0;
  }
  .logo-hex {
    display: block;
    width: 100%;
    height: 100%;
    background: linear-gradient(135deg, var(--logo-accent), var(--logo-accent2));
    clip-path: polygon(50% 0%, 93% 25%, 93% 75%, 50% 100%, 7% 75%, 7% 25%);
    transition: transform var(--transition);
  }
  .al-card .logo-wrap:hover .logo-hex {
    transform: rotate(30deg) scale(1.05);
  }
  .logo-letter {
    position: absolute;
    inset: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: var(--font);
    font-weight: 800;
    font-size: 16px;
    color: #0a0a0a;
    pointer-events: none;
  }
  .al-logo-text,
  .al-card .logo-text {
    font-family: var(--font);
    font-size: clamp(14px, 3vw, 17px);
    font-weight: 800;
    letter-spacing: 0.14em;
    color: inherit;
  }

  .al-card .logo-wrap {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 10px;
    margin: 0 auto 32px;
    text-align: center;
    width: fit-content;
  }

  .al-card .logo-text {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 6px;
  }

  .astaria-login-root.light-theme .logo-text {
    color: #0a0a0a;
  }

  .astaria-login-root.dark-theme .logo-dot {
    color: #00e5c4;
    animation: ping-dot 1.6s cubic-bezier(0, 0, 0.2, 1) infinite;
  }

  .astaria-login-root.light-theme .logo-dot {
    color: #A855F7;
    animation: ping-dot 1.6s cubic-bezier(0, 0, 0.2, 1) infinite;
  }

  @keyframes ping-dot {
    0%, 100% { transform: scale(1); opacity: 1; }
    50% { transform: scale(1.35); opacity: 0.55; }
  }

  .al-card .logo-dot {
    font-size: clamp(15px, 2vw, 20px);
    color: var(--accent);
    vertical-align: middle;
  }

  /* ── HEADING ── */
  .al-heading {
    font-family: 'Sora', sans-serif;
    font-size: 28px;
    font-weight: 700;
    letter-spacing: -0.03em;
    line-height: 1.15;
    margin: 0;
    animation: fadeUp 0.6s var(--transition) 0.18s both;
  }
  .al-heading-accent {
    color: var(--accent);
  }
  .al-sub {
    margin-top: 8px;
    font-size: 13.5px;
    color: var(--text-muted);
    line-height: 1.6;
    font-weight: 400;
    animation: fadeUp 0.6s var(--transition) 0.24s both;
  }

  @keyframes fadeUp {
    from { opacity: 0; transform: translateY(14px); }
    to   { opacity: 1; transform: translateY(0); }
  }

  /* ── SOCIAL BUTTONS ── */
  .al-socials {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 10px;
    margin-top: 28px;
    animation: fadeUp 0.6s var(--transition) 0.3s both;
  }
  .al-social-btn {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    padding: 11px 16px;
    border-radius: 12px;
    border: 1px solid var(--social-border);
    background: var(--social-bg);
    font-size: 13px;
    font-weight: 500;
    color: inherit;
    cursor: pointer;
    transition: background 0.2s ease, border-color 0.2s ease, transform 0.2s ease;
    backdrop-filter: blur(8px);
  }
  .al-social-btn:hover {
    background: var(--social-hover);
    border-color: var(--input-border-focus);
    transform: translateY(-1px);
  }
  .al-social-btn svg { flex-shrink: 0; }

  /* ── DIVIDER ── */
  .al-divider {
    display: flex;
    align-items: center;
    gap: 12px;
    margin: 24px 0;
    animation: fadeUp 0.6s var(--transition) 0.36s both;
  }
  .al-divider-line {
    flex: 1;
    height: 1px;
    background: var(--divider);
  }
  .al-divider-text {
    font-size: 11px;
    font-weight: 500;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: var(--text-muted);
  }

  /* ── FORM ── */
  .al-form { width: 100%; }

  .al-field {
    position: relative;
    margin-bottom: 14px;
    animation: fadeUp 0.6s var(--transition) both;
  }
  .al-field:nth-child(1) { animation-delay: 0.38s; }
  .al-field:nth-child(2) { animation-delay: 0.44s; }

  .al-field-icon {
    position: absolute;
    left: 15px;
    top: 50%;
    transform: translateY(-50%);
    color: var(--text-muted);
    pointer-events: none;
    transition: color 0.2s ease;
    display: flex;
  }
  .al-field:focus-within .al-field-icon {
    color: var(--accent);
  }

  .al-input {
    width: 100%;
    box-sizing: border-box;
    background: var(--input-bg);
    border: 1px solid var(--input-border);
    border-radius: 13px;
    padding: 14px 44px 14px 44px;
    font-size: 14px;
    font-family: 'DM Sans', sans-serif;
    font-weight: 400;
    color: inherit;
    outline: none;
    transition: border-color 0.25s ease, box-shadow 0.25s ease, background 0.2s ease;
    -webkit-appearance: none;
  }
  .al-input::placeholder { color: var(--text-muted); font-size: 13.5px; }
  .al-input:focus {
    border-color: var(--input-border-focus);
    box-shadow: var(--input-shadow-focus);
    background: var(--input-bg);
  }
  .al-input:hover:not(:focus) { border-color: rgba(255,255,255,0.15); }

  .al-eye-btn {
    position: absolute;
    right: 14px;
    top: 50%;
    transform: translateY(-50%);
    background: none;
    border: none;
    color: var(--text-muted);
    cursor: pointer;
    padding: 4px;
    display: flex;
    align-items: center;
    transition: color 0.2s ease;
  }
  .al-eye-btn:hover { color: var(--accent); }

  /* ── FORGOT ── */
  .al-forgot {
    display: flex;
    justify-content: flex-end;
    margin-top: -4px;
    margin-bottom: 22px;
    animation: fadeUp 0.6s var(--transition) 0.5s both;
  }
  .al-forgot a {
    font-size: 12.5px;
    color: var(--accent);
    text-decoration: none;
    font-weight: 500;
    opacity: 0.85;
    transition: opacity 0.2s ease;
  }
  .al-forgot a:hover { opacity: 1; }

  /* ── PRIMARY BUTTON ── */
  .al-btn-primary {
    width: 100%;
    padding: 15px 24px;
    border-radius: 13px;
    border: none;
    background: var(--grad-btn);
    color: #fff;
    font-family: 'Sora', sans-serif;
    font-size: 14.5px;
    font-weight: 600;
    letter-spacing: 0.01em;
    cursor: pointer;
    position: relative;
    overflow: hidden;
    transition: transform 0.22s var(--transition), box-shadow 0.22s ease;
    box-shadow: 0 4px 24px var(--accent-glow), 0 1px 0 rgba(255,255,255,0.15) inset;
    animation: fadeUp 0.6s var(--transition) 0.54s both;
  }
  .al-btn-primary::before {
    content: '';
    position: absolute;
    inset: 0;
    background: var(--grad-btn-hover);
    opacity: 0;
    transition: opacity 0.25s ease;
  }
  .al-btn-primary:hover:not(:disabled) { transform: translateY(-2px); box-shadow: 0 8px 32px var(--accent-glow), 0 1px 0 rgba(255,255,255,0.15) inset; }
  .al-btn-primary:hover:not(:disabled)::before { opacity: 1; }
  .al-btn-primary:active:not(:disabled) { transform: translateY(0); }
  .al-btn-primary:disabled { opacity: 0.6; cursor: not-allowed; }
  .al-btn-primary span { position: relative; z-index: 1; display: flex; align-items: center; justify-content: center; gap: 8px; }

  /* ── LOADING SPINNER ── */
  .al-spinner {
    width: 16px; height: 16px;
    border: 2px solid rgba(255,255,255,0.3);
    border-top-color: #fff;
    border-radius: 50%;
    animation: spin 0.7s linear infinite;
  }
  @keyframes spin { to { transform: rotate(360deg); } }

  /* ── FOOTER ── */
  .al-footer {
    margin-top: 24px;
    text-align: center;
    font-size: 13px;
    color: var(--text-muted);
    animation: fadeUp 0.6s var(--transition) 0.6s both;
  }
  .al-footer a {
    color: var(--accent);
    text-decoration: none;
    font-weight: 600;
    transition: opacity 0.2s ease;
  }
  .al-footer a:hover { opacity: 0.8; }

  /* ── TRUST BADGES ── */
  .al-trust {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 18px;
    margin-top: 28px;
    padding-top: 20px;
    border-top: 1px solid var(--divider);
    animation: fadeUp 0.6s var(--transition) 0.66s both;
  }
  .al-trust-item {
    display: flex;
    align-items: center;
    gap: 5px;
    font-size: 11px;
    color: var(--text-muted);
    font-weight: 500;
    letter-spacing: 0.02em;
  }

  /* ── RESPONSIVE ── */
  @media (max-width: 720px) {
    .astaria-login-root { padding: 32px 14px; }
    .al-card { padding: 42px 32px; }
    .al-socials { grid-template-columns: 1fr; }
    .al-field { margin-bottom: 16px; }
    .al-btn-primary { padding: 14px 20px; }
    .al-trust { flex-wrap: wrap; justify-content: center; gap: 12px; }
  }

  @media (max-width: 520px) {
    .astaria-login-root { padding: 24px 12px; }
    .al-card { padding: 28px 20px; }
    .al-logo { gap: 8px; margin-bottom: 24px; }
    .al-heading { font-size: 22px; }
    .al-sub { font-size: 13px; }
    .al-socials { grid-template-columns: 1fr; }
    .al-field { margin-bottom: 12px; }
    .al-input { padding: 12px 40px 12px 44px; font-size: 13.5px; }
    .al-forgot { justify-content: center; }
    .al-trust { gap: 10px; margin-top: 24px; padding-top: 16px; }
    .al-blob { display: none; }
    .al-grid { opacity: 0.035; background-size: 32px 32px; }
  }
`;function V3(){const{login:t,loading:r}=Ur(),i=sr(),o=St(),[l,c]=b.useState({email:"",password:""}),[u,h]=b.useState(!1),m=b.useRef(null),{dark:g}=ns();b.useEffect(()=>{if(!m.current){const w=document.createElement("style");w.textContent=z3,document.head.appendChild(w),m.current=w}return()=>{m.current&&(m.current.remove(),m.current=null)}},[]);async function v(w){var S,j;w.preventDefault();try{await t(l.email,l.password),i(((j=(S=o.state)==null?void 0:S.from)==null?void 0:j.pathname)||"/")}catch(N){Me.error(N.message)}}const x=g?"dark-theme":"light-theme";return f.jsxs("section",{className:`astaria-login-root ${x}`,children:[f.jsx("div",{className:"al-blob al-blob-1"}),f.jsx("div",{className:"al-blob al-blob-2"}),f.jsx("div",{className:"al-blob al-blob-3"}),f.jsx("div",{className:"al-grid"}),f.jsxs("div",{className:"al-card",children:[f.jsxs(xe,{to:"/",className:"logo-wrap","aria-label":"Astaria home",children:[f.jsxs("span",{className:"logo-mark","aria-hidden":"true",children:[f.jsx("span",{className:"logo-hex"}),f.jsx("span",{className:"logo-letter",children:"A"})]}),f.jsxs("span",{className:"logo-text",children:["ASTERIA",f.jsx("span",{className:"logo-dot","aria-hidden":"true",children:"●"})]})]}),f.jsxs("h1",{className:"al-heading",children:["Welcome ",f.jsx("span",{className:"al-heading-accent",children:"back."})]}),f.jsx("p",{className:"al-sub",children:"Sign in to access your cart, orders, wishlist & more."}),f.jsxs("div",{className:"al-socials",children:[f.jsxs("button",{type:"button",className:"al-social-btn",onClick:()=>Me("Google login coming soon"),children:[f.jsxs("svg",{width:"16",height:"16",viewBox:"0 0 18 18",fill:"none",children:[f.jsx("path",{d:"M17.64 9.2c0-.637-.057-1.251-.164-1.84H9v3.481h4.844c-.209 1.125-.843 2.078-1.796 2.717v2.258h2.908c1.702-1.567 2.684-3.875 2.684-6.615z",fill:"#4285F4"}),f.jsx("path",{d:"M9 18c2.43 0 4.467-.806 5.956-2.184l-2.908-2.258c-.806.54-1.837.86-3.048.86-2.344 0-4.328-1.584-5.036-3.711H.957v2.332A8.997 8.997 0 009 18z",fill:"#34A853"}),f.jsx("path",{d:"M3.964 10.707A5.41 5.41 0 013.682 9c0-.593.102-1.17.282-1.707V4.961H.957A8.996 8.996 0 000 9c0 1.452.348 2.827.957 4.039l3.007-2.332z",fill:"#FBBC05"}),f.jsx("path",{d:"M9 3.58c1.321 0 2.508.454 3.44 1.345l2.582-2.58C13.463.891 11.426 0 9 0A8.997 8.997 0 00.957 4.96l3.007 2.333C4.672 5.163 6.656 3.58 9 3.58z",fill:"#EA4335"})]}),"Google"]}),f.jsxs("button",{type:"button",className:"al-social-btn",onClick:()=>Me("Apple login coming soon"),children:[f.jsx("svg",{width:"15",height:"16",viewBox:"0 0 814 1000",fill:"currentColor",children:f.jsx("path",{d:"M788.1 340.9c-5.8 4.5-108.2 62.2-108.2 190.5 0 148.4 130.3 200.9 134.2 202.2-.6 3.2-20.7 71.9-68.7 141.9-42.8 61.6-87.5 123.1-155.5 123.1s-85.5-39.5-164-39.5c-76.5 0-103.7 40.8-165.9 40.8s-105-42.3-150.3-109C81 501.1 55.7 342.1 55.7 221.9c0-109.1 69.6-166.5 137.8-166.5 69.6 0 114.9 45.5 164.8 45.5 47.8 0 100.9-48.5 172.5-48.5 27.5 0 108.2 2.6 163.3 69.6zm-145.5-83.4c-28.1-35.3-69-60.6-112.4-60.6-6.4 0-12.8.6-19.2 1.9 1.3 42.3 20.5 83.1 49.3 112.4 28.1 28.8 67 47.4 107.8 47.4 5.1 0 10.3-.6 15.5-1.3-1.3-39.5-18.5-80.2-41-99.8z"})}),"Apple"]})]}),f.jsxs("div",{className:"al-divider",children:[f.jsx("div",{className:"al-divider-line"}),f.jsx("span",{className:"al-divider-text",children:"or continue with email"}),f.jsx("div",{className:"al-divider-line"})]}),f.jsxs("form",{className:"al-form",onSubmit:v,children:[f.jsxs("div",{className:"al-field",children:[f.jsx("span",{className:"al-field-icon",children:f.jsxs("svg",{width:"15",height:"15",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round",children:[f.jsx("rect",{x:"2",y:"4",width:"20",height:"16",rx:"3"}),f.jsx("path",{d:"m2 7 10 7 10-7"})]})}),f.jsx("input",{className:"al-input",type:"email",placeholder:"Email address",value:l.email,autoComplete:"email",required:!0,onChange:w=>c({...l,email:w.target.value})})]}),f.jsxs("div",{className:"al-field",children:[f.jsx("span",{className:"al-field-icon",children:f.jsxs("svg",{width:"15",height:"15",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round",children:[f.jsx("rect",{x:"3",y:"11",width:"18",height:"11",rx:"2"}),f.jsx("path",{d:"M7 11V7a5 5 0 0 1 10 0v4"})]})}),f.jsx("input",{className:"al-input",type:u?"text":"password",placeholder:"Password",value:l.password,autoComplete:"current-password",required:!0,onChange:w=>c({...l,password:w.target.value})}),f.jsx("button",{type:"button",className:"al-eye-btn",onClick:()=>h(w=>!w),"aria-label":u?"Hide password":"Show password",children:u?f.jsxs("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round",children:[f.jsx("path",{d:"M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94"}),f.jsx("path",{d:"M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19"}),f.jsx("line",{x1:"1",y1:"1",x2:"23",y2:"23"})]}):f.jsxs("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round",children:[f.jsx("path",{d:"M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"}),f.jsx("circle",{cx:"12",cy:"12",r:"3"})]})})]}),f.jsx("div",{className:"al-forgot",children:f.jsx(xe,{to:"/forgot-password",children:"Forgot password?"})}),f.jsx("button",{className:"al-btn-primary",type:"submit",disabled:r,children:f.jsx("span",{children:r?f.jsxs(f.Fragment,{children:[f.jsx("span",{className:"al-spinner"}),"Signing in…"]}):"Sign in"})})]}),f.jsxs("p",{className:"al-footer",children:["New to Astaria? ",f.jsx(xe,{to:"/signup",children:"Create a free account →"})]}),f.jsxs("div",{className:"al-trust",children:[f.jsxs("span",{className:"al-trust-item",children:[f.jsxs("svg",{width:"11",height:"11",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[f.jsx("rect",{x:"3",y:"11",width:"18",height:"11",rx:"2"}),f.jsx("path",{d:"M7 11V7a5 5 0 0 1 10 0v4"})]}),"Secure"]}),f.jsxs("span",{className:"al-trust-item",children:[f.jsx("svg",{width:"11",height:"11",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:f.jsx("path",{d:"M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"})}),"SSL Encrypted"]}),f.jsxs("span",{className:"al-trust-item",children:[f.jsx("svg",{width:"11",height:"11",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:f.jsx("polyline",{points:"20 6 9 17 4 12"})}),"Trusted"]})]})]})]})}const O3=`
  @import url('https://fonts.googleapis.com/css2?family=Sora:wght@300;400;500;600;700&family=DM+Sans:ital,wght@0,300;0,400;0,500;1,300&family=Syne:wght@400;500;600;700;800&display=swap');

  :root {
    --cyan: #00e5ff;
    --cyan-dim: #00b8d4;
    --cyan-glow: rgba(0,229,255,0.18);
    --cyan-glow-sm: rgba(0,229,255,0.08);
    --purple: #7c3aed;
    --purple-dim: #6d28d9;
    --purple-glow: rgba(124,58,237,0.22);
    --purple-glow-sm: rgba(124,58,237,0.08);
    --accent2: #6c63ff;
    --logo-accent: var(--cyan);
    --logo-accent2: #6c63ff;
    --font: 'Syne', sans-serif;
    --radius: 20px;
    --transition: cubic-bezier(0.23, 1, 0.32, 1);
  }

  .astaria-signup-root {
    font-family: 'DM Sans', sans-serif;
    min-height: 100vh;
    display: grid;
    place-items: center;
    padding: 36px 16px;
    position: relative;
    overflow: hidden;
  }

  /* ── DARK THEME ── */
  .astaria-signup-root.dark-theme {
    background: #050a0f;
    color: #e8f4f8;
    --accent: var(--cyan);
    --logo-accent: var(--cyan);
    --logo-accent2: #6c63ff;
    --accent-dim: var(--cyan-dim);
    --accent-glow: var(--cyan-glow);
    --accent-glow-sm: var(--cyan-glow-sm);
    --grad-btn: linear-gradient(135deg, #00e5ff 0%, #006080 100%);
    --grad-btn-hover: linear-gradient(135deg, #33ecff 0%, #007a9e 100%);
    --card-bg: rgba(255,255,255,0.028);
    --card-border: rgba(0,229,255,0.1);
    --card-shadow: 0 32px 80px rgba(0,0,0,0.7), 0 0 0 1px rgba(0,229,255,0.06), inset 0 1px 0 rgba(255,255,255,0.05);
    --input-bg: rgba(255,255,255,0.04);
    --input-border: rgba(255,255,255,0.08);
    --input-border-focus: rgba(0,229,255,0.5);
    --input-shadow-focus: 0 0 0 3px rgba(0,229,255,0.1), 0 0 20px rgba(0,229,255,0.06);
    --text-muted: rgba(180,210,220,0.55);
    --text-sub: rgba(180,210,220,0.75);
    --divider: rgba(255,255,255,0.06);
    --social-bg: rgba(255,255,255,0.04);
    --social-border: rgba(255,255,255,0.08);
    --social-hover: rgba(0,229,255,0.06);
    --blob1: rgba(0,229,255,0.06);
    --blob2: rgba(0,160,200,0.04);
    --blob3: rgba(0,100,150,0.05);
  }

  /* ── LIGHT THEME ── */
  .astaria-signup-root.light-theme {
    background: #f5f3ff;
    color: #1a0a3d;
    --accent: var(--purple);
    --logo-accent: var(--purple);
    --logo-accent2: #ec4899;
    --accent-dim: var(--purple-dim);
    --accent-glow: var(--purple-glow);
    --accent-glow-sm: var(--purple-glow-sm);
    --accent2: #ec4899;
    --grad-btn: linear-gradient(135deg, #7c3aed 0%, #4f46e5 100%);
    --grad-btn-hover: linear-gradient(135deg, #8b5cf6 0%, #6366f1 100%);
    --card-bg: rgba(255,255,255,0.7);
    --card-border: rgba(124,58,237,0.12);
    --card-shadow: 0 32px 80px rgba(109,40,217,0.12), 0 0 0 1px rgba(124,58,237,0.08), inset 0 1px 0 rgba(255,255,255,0.9);
    --input-bg: rgba(255,255,255,0.8);
    --input-border: rgba(124,58,237,0.12);
    --input-border-focus: rgba(124,58,237,0.5);
    --input-shadow-focus: 0 0 0 3px rgba(124,58,237,0.1), 0 0 20px rgba(124,58,237,0.06);
    --text-muted: rgba(80,40,160,0.5);
    --text-sub: rgba(80,40,160,0.7);
    --divider: rgba(124,58,237,0.1);
    --social-bg: rgba(255,255,255,0.6);
    --social-border: rgba(124,58,237,0.1);
    --social-hover: rgba(124,58,237,0.06);
    --blob1: rgba(124,58,237,0.07);
    --blob2: rgba(99,102,241,0.05);
    --blob3: rgba(167,139,250,0.06);
  }

  /* ── BACKGROUND BLOBS ── */
  .as-blob {
    position: absolute;
    border-radius: 50%;
    pointer-events: none;
    filter: blur(80px);
    animation: blobDrift 12s ease-in-out infinite alternate;
  }
  .as-blob-1 {
    width: 520px; height: 520px;
    top: -140px; left: -120px;
    background: var(--blob1);
    animation-duration: 14s;
  }
  .as-blob-2 {
    width: 380px; height: 380px;
    bottom: -100px; right: -80px;
    background: var(--blob2);
    animation-duration: 18s;
    animation-delay: -4s;
  }
  .as-blob-3 {
    width: 260px; height: 260px;
    top: 40%; left: 60%;
    background: var(--blob3);
    animation-duration: 22s;
    animation-delay: -9s;
  }
  @keyframes blobDrift {
    0%   { transform: translate(0,0) scale(1); }
    33%  { transform: translate(20px,-30px) scale(1.05); }
    66%  { transform: translate(-10px,20px) scale(0.97); }
    100% { transform: translate(30px,10px) scale(1.03); }
  }

  /* ── GRID OVERLAY ── */
  .as-grid {
    position: absolute;
    inset: 0;
    pointer-events: none;
    opacity: 0.025;
    background-image:
      linear-gradient(var(--accent) 1px, transparent 1px),
      linear-gradient(90deg, var(--accent) 1px, transparent 1px);
    background-size: 48px 48px;
    mask-image: radial-gradient(ellipse 70% 70% at 50% 50%, black, transparent);
  }

  /* ── CARD ── */
  .as-card {
    position: relative;
    z-index: 10;
    width: min(100%, 440px);
    max-width: 440px;
    background: var(--card-bg);
    border: 1px solid var(--card-border);
    border-radius: var(--radius);
    box-shadow: var(--card-shadow);
    backdrop-filter: blur(32px) saturate(180%);
    -webkit-backdrop-filter: blur(32px) saturate(180%);
    padding: 48px 44px;
    animation: cardIn 0.7s var(--transition) both;
  }
  @keyframes cardIn {
    from { opacity: 0; transform: translateY(28px) scale(0.97); filter: blur(4px); }
    to   { opacity: 1; transform: translateY(0) scale(1); filter: blur(0); }
  }

  /* ── LOGO ── */
  .as-card .logo-wrap {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 10px;
    margin: 0 auto 32px;
    text-align: center;
    width: fit-content;
    text-decoration: none;
    color: inherit;
  }
  .as-card .logo-mark {
    position: relative;
    width: 36px;
    height: 36px;
    flex-shrink: 0;
  }
  .as-card .logo-hex {
    display: block;
    width: 100%;
    height: 100%;
    background: linear-gradient(135deg, var(--logo-accent), var(--logo-accent2));
    clip-path: polygon(50% 0%, 93% 25%, 93% 75%, 50% 100%, 7% 75%, 7% 25%);
    transition: transform 0.2s ease;
  }
  .as-card .logo-wrap:hover .logo-hex {
    transform: rotate(30deg) scale(1.05);
  }
  .as-card .logo-letter {
    position: absolute;
    inset: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: var(--font);
    font-weight: 800;
    font-size: 16px;
    color: #0a0a0a;
    pointer-events: none;
  }
  .as-card .logo-text {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 6px;
    font-family: var(--font);
    font-size: clamp(14px, 3vw, 17px);
    font-weight: 800;
    letter-spacing: 0.14em;
    color: inherit;
  }
  .as-card .logo-dot {
    font-size: clamp(15px, 2vw, 20px);
    color: var(--accent);
    vertical-align: middle;
  }

  .astaria-signup-root.dark-theme .logo-dot {
    color: #00e5c4;
  }

  .astaria-signup-root.light-theme .logo-text {
    color: #0a0a0a;
  }
  .astaria-signup-root.light-theme .logo-dot {
    color: #A855F7;
    animation: ping-dot 1.6s cubic-bezier(0, 0, 0.2, 1) infinite;
  }
  @keyframes ping-dot {
    0%, 100% { transform: scale(1); opacity: 1; }
    50% { transform: scale(1.35); opacity: 0.55; }
  }

  /* ── HEADING ── */
  .as-heading {
    font-family: 'Sora', sans-serif;
    font-size: 28px;
    font-weight: 700;
    letter-spacing: -0.03em;
    line-height: 1.15;
    margin: 0;
    animation: fadeUp 0.6s var(--transition) 0.18s both;
  }
  .as-heading-accent { color: var(--accent); }
  .as-sub {
    margin-top: 8px;
    font-size: 13.5px;
    color: var(--text-muted);
    line-height: 1.6;
    font-weight: 400;
    animation: fadeUp 0.6s var(--transition) 0.24s both;
  }

  @keyframes fadeUp {
    from { opacity: 0; transform: translateY(14px); }
    to   { opacity: 1; transform: translateY(0); }
  }

  /* ── SOCIAL BUTTONS ── */
  .as-socials {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 10px;
    margin-top: 28px;
    animation: fadeUp 0.6s var(--transition) 0.3s both;
  }
  .as-social-btn {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    padding: 11px 16px;
    border-radius: 12px;
    border: 1px solid var(--social-border);
    background: var(--social-bg);
    font-size: 13px;
    font-weight: 500;
    color: inherit;
    cursor: pointer;
    transition: background 0.2s ease, border-color 0.2s ease, transform 0.2s ease;
    backdrop-filter: blur(8px);
  }
  .as-social-btn:hover {
    background: var(--social-hover);
    border-color: var(--input-border-focus);
    transform: translateY(-1px);
  }
  .as-social-btn svg { flex-shrink: 0; }

  /* ── DIVIDER ── */
  .as-divider {
    display: flex;
    align-items: center;
    gap: 12px;
    margin: 24px 0;
    animation: fadeUp 0.6s var(--transition) 0.36s both;
  }
  .as-divider-line { flex: 1; height: 1px; background: var(--divider); }
  .as-divider-text {
    font-size: 11px;
    font-weight: 500;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: var(--text-muted);
  }

  /* ── FORM ── */
  .as-form { width: 100%; }

  .as-field {
    position: relative;
    margin-bottom: 14px;
    animation: fadeUp 0.6s var(--transition) both;
  }
  .as-field:nth-child(1) { animation-delay: 0.38s; }
  .as-field:nth-child(2) { animation-delay: 0.44s; }
  .as-field:nth-child(3) { animation-delay: 0.50s; }

  .as-field-icon {
    position: absolute;
    left: 15px;
    top: 50%;
    transform: translateY(-50%);
    color: var(--text-muted);
    pointer-events: none;
    transition: color 0.2s ease;
    display: flex;
  }
  .as-field:focus-within .as-field-icon { color: var(--accent); }

  .as-input {
    width: 100%;
    box-sizing: border-box;
    background: var(--input-bg);
    border: 1px solid var(--input-border);
    border-radius: 13px;
    padding: 14px 44px 14px 44px;
    font-size: 14px;
    font-family: 'DM Sans', sans-serif;
    font-weight: 400;
    color: inherit;
    outline: none;
    transition: border-color 0.25s ease, box-shadow 0.25s ease, background 0.2s ease;
    -webkit-appearance: none;
  }
  .as-input::placeholder { color: var(--text-muted); font-size: 13.5px; }
  .as-input:focus {
    border-color: var(--input-border-focus);
    box-shadow: var(--input-shadow-focus);
  }
  .as-input:hover:not(:focus) { border-color: rgba(255,255,255,0.15); }

  /* no right icon on name/email — reduce right padding */
  .as-input.no-right-icon { padding-right: 16px; }

  .as-eye-btn {
    position: absolute;
    right: 14px;
    top: 50%;
    transform: translateY(-50%);
    background: none;
    border: none;
    color: var(--text-muted);
    cursor: pointer;
    padding: 4px;
    display: flex;
    align-items: center;
    transition: color 0.2s ease;
  }
  .as-eye-btn:hover { color: var(--accent); }

  /* ── PASSWORD STRENGTH ── */
  .as-strength {
    margin-top: 8px;
    animation: fadeUp 0.4s var(--transition) both;
  }
  .as-strength-bars {
    display: flex;
    gap: 4px;
    margin-bottom: 4px;
  }
  .as-strength-bar {
    flex: 1;
    height: 3px;
    border-radius: 99px;
    background: var(--divider);
    transition: background 0.35s ease;
  }
  .as-strength-bar.active-weak    { background: #ef4444; }
  .as-strength-bar.active-fair    { background: #f97316; }
  .as-strength-bar.active-good    { background: #eab308; }
  .as-strength-bar.active-strong  { background: #22c55e; }
  .as-strength-label {
    font-size: 11px;
    color: var(--text-muted);
    font-weight: 500;
  }

  /* ── TERMS ── */
  .as-terms {
    display: flex;
    align-items: flex-start;
    gap: 10px;
    margin: 18px 0 22px;
    animation: fadeUp 0.6s var(--transition) 0.56s both;
  }
  .as-terms-checkbox {
    width: 16px;
    height: 16px;
    flex-shrink: 0;
    accent-color: var(--accent);
    margin-top: 1px;
    cursor: pointer;
  }
  .as-terms-text {
    font-size: 12.5px;
    color: var(--text-muted);
    line-height: 1.5;
  }
  .as-terms-text a {
    color: var(--accent);
    text-decoration: none;
    font-weight: 500;
  }
  .as-terms-text a:hover { opacity: 0.8; }

  /* ── PRIMARY BUTTON ── */
  .as-btn-primary {
    width: 100%;
    padding: 15px 24px;
    border-radius: 13px;
    border: none;
    background: var(--grad-btn);
    color: #fff;
    font-family: 'Sora', sans-serif;
    font-size: 14.5px;
    font-weight: 600;
    letter-spacing: 0.01em;
    cursor: pointer;
    position: relative;
    overflow: hidden;
    transition: transform 0.22s var(--transition), box-shadow 0.22s ease;
    box-shadow: 0 4px 24px var(--accent-glow), 0 1px 0 rgba(255,255,255,0.15) inset;
    animation: fadeUp 0.6s var(--transition) 0.6s both;
  }
  .as-btn-primary::before {
    content: '';
    position: absolute;
    inset: 0;
    background: var(--grad-btn-hover);
    opacity: 0;
    transition: opacity 0.25s ease;
  }
  .as-btn-primary:hover:not(:disabled) { transform: translateY(-2px); box-shadow: 0 8px 32px var(--accent-glow), 0 1px 0 rgba(255,255,255,0.15) inset; }
  .as-btn-primary:hover:not(:disabled)::before { opacity: 1; }
  .as-btn-primary:active:not(:disabled) { transform: translateY(0); }
  .as-btn-primary:disabled { opacity: 0.6; cursor: not-allowed; }
  .as-btn-primary span { position: relative; z-index: 1; display: flex; align-items: center; justify-content: center; gap: 8px; }

  /* ── LOADING SPINNER ── */
  .as-spinner {
    width: 16px; height: 16px;
    border: 2px solid rgba(255,255,255,0.3);
    border-top-color: #fff;
    border-radius: 50%;
    animation: spin 0.7s linear infinite;
  }
  @keyframes spin { to { transform: rotate(360deg); } }

  /* ── FOOTER ── */
  .as-footer {
    margin-top: 24px;
    text-align: center;
    font-size: 13px;
    color: var(--text-muted);
    animation: fadeUp 0.6s var(--transition) 0.66s both;
  }
  .as-footer a {
    color: var(--accent);
    text-decoration: none;
    font-weight: 600;
    transition: opacity 0.2s ease;
  }
  .as-footer a:hover { opacity: 0.8; }

  /* ── TRUST BADGES ── */
  .as-trust {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 18px;
    margin-top: 28px;
    padding-top: 20px;
    border-top: 1px solid var(--divider);
    animation: fadeUp 0.6s var(--transition) 0.72s both;
  }
  .as-trust-item {
    display: flex;
    align-items: center;
    gap: 5px;
    font-size: 11px;
    color: var(--text-muted);
    font-weight: 500;
    letter-spacing: 0.02em;
  }

  /* ── RESPONSIVE ── */
  @media (max-width: 720px) {
    .astaria-signup-root { padding: 32px 14px; }
    .as-card { padding: 42px 32px; }
    .as-socials { grid-template-columns: 1fr; }
    .as-field { margin-bottom: 16px; }
    .as-btn-primary { padding: 14px 20px; }
    .as-trust { flex-wrap: wrap; justify-content: center; gap: 12px; }
  }

  @media (max-width: 520px) {
    .astaria-signup-root { padding: 24px 12px; }
    .as-card { padding: 28px 20px; }
    .as-heading { font-size: 22px; }
    .as-sub { font-size: 13px; }
    .as-socials { grid-template-columns: 1fr; }
    .as-field { margin-bottom: 12px; }
    .as-input { padding: 12px 16px 12px 44px; font-size: 13.5px; }
    .as-input.no-right-icon { padding-right: 16px; }
    .as-trust { gap: 10px; margin-top: 24px; padding-top: 16px; }
    .as-blob { display: none; }
    .as-grid { opacity: 0.035; background-size: 32px 32px; }
  }
`;function F3(t){if(!t)return{score:0,label:""};let r=0;t.length>=8&&r++,/[A-Z]/.test(t)&&r++,/[0-9]/.test(t)&&r++,/[^A-Za-z0-9]/.test(t)&&r++;const i=["","Weak","Fair","Good","Strong"],o=["","weak","fair","good","strong"];return{score:r,label:i[r],key:o[r]}}function I3(){const{signup:t,loading:r}=Ur(),i=sr(),{dark:o}=ns(),l=b.useRef(null),[c,u]=b.useState({name:"",email:"",password:""}),[h,m]=b.useState(!1),[g,v]=b.useState(!1);b.useEffect(()=>{if(!l.current){const j=document.createElement("style");j.textContent=O3,document.head.appendChild(j),l.current=j}return()=>{l.current&&(l.current.remove(),l.current=null)}},[]);async function x(j){if(j.preventDefault(),!g){Me.error("Please agree to the Terms & Privacy Policy.");return}try{await t(c.name,c.email,c.password),i("/")}catch(N){Me.error(N.message)}}const w=F3(c.password),S=o?"dark-theme":"light-theme";return f.jsxs("section",{className:`astaria-signup-root ${S}`,children:[f.jsx("div",{className:"as-blob as-blob-1"}),f.jsx("div",{className:"as-blob as-blob-2"}),f.jsx("div",{className:"as-blob as-blob-3"}),f.jsx("div",{className:"as-grid"}),f.jsxs("div",{className:"as-card",children:[f.jsxs(xe,{to:"/",className:"logo-wrap","aria-label":"Astaria home",children:[f.jsxs("span",{className:"logo-mark","aria-hidden":"true",children:[f.jsx("span",{className:"logo-hex"}),f.jsx("span",{className:"logo-letter",children:"A"})]}),f.jsxs("span",{className:"logo-text",children:["ASTERIA",f.jsx("span",{className:"logo-dot","aria-hidden":"true",children:"●"})]})]}),f.jsxs("h1",{className:"as-heading",children:["Join ",f.jsx("span",{className:"as-heading-accent",children:"Astaria."})]}),f.jsx("p",{className:"as-sub",children:"Create your free account — unlock cart, orders, wishlist & more."}),f.jsxs("div",{className:"as-socials",children:[f.jsxs("button",{type:"button",className:"as-social-btn",onClick:()=>Me("Google sign-up coming soon"),children:[f.jsxs("svg",{width:"16",height:"16",viewBox:"0 0 18 18",fill:"none",children:[f.jsx("path",{d:"M17.64 9.2c0-.637-.057-1.251-.164-1.84H9v3.481h4.844c-.209 1.125-.843 2.078-1.796 2.717v2.258h2.908c1.702-1.567 2.684-3.875 2.684-6.615z",fill:"#4285F4"}),f.jsx("path",{d:"M9 18c2.43 0 4.467-.806 5.956-2.184l-2.908-2.258c-.806.54-1.837.86-3.048.86-2.344 0-4.328-1.584-5.036-3.711H.957v2.332A8.997 8.997 0 009 18z",fill:"#34A853"}),f.jsx("path",{d:"M3.964 10.707A5.41 5.41 0 013.682 9c0-.593.102-1.17.282-1.707V4.961H.957A8.996 8.996 0 000 9c0 1.452.348 2.827.957 4.039l3.007-2.332z",fill:"#FBBC05"}),f.jsx("path",{d:"M9 3.58c1.321 0 2.508.454 3.44 1.345l2.582-2.58C13.463.891 11.426 0 9 0A8.997 8.997 0 00.957 4.96l3.007 2.333C4.672 5.163 6.656 3.58 9 3.58z",fill:"#EA4335"})]}),"Google"]}),f.jsxs("button",{type:"button",className:"as-social-btn",onClick:()=>Me("Apple sign-up coming soon"),children:[f.jsx("svg",{width:"15",height:"16",viewBox:"0 0 814 1000",fill:"currentColor",children:f.jsx("path",{d:"M788.1 340.9c-5.8 4.5-108.2 62.2-108.2 190.5 0 148.4 130.3 200.9 134.2 202.2-.6 3.2-20.7 71.9-68.7 141.9-42.8 61.6-87.5 123.1-155.5 123.1s-85.5-39.5-164-39.5c-76.5 0-103.7 40.8-165.9 40.8s-105-42.3-150.3-109C81 501.1 55.7 342.1 55.7 221.9c0-109.1 69.6-166.5 137.8-166.5 69.6 0 114.9 45.5 164.8 45.5 47.8 0 100.9-48.5 172.5-48.5 27.5 0 108.2 2.6 163.3 69.6zm-145.5-83.4c-28.1-35.3-69-60.6-112.4-60.6-6.4 0-12.8.6-19.2 1.9 1.3 42.3 20.5 83.1 49.3 112.4 28.1 28.8 67 47.4 107.8 47.4 5.1 0 10.3-.6 15.5-1.3-1.3-39.5-18.5-80.2-41-99.8z"})}),"Apple"]})]}),f.jsxs("div",{className:"as-divider",children:[f.jsx("div",{className:"as-divider-line"}),f.jsx("span",{className:"as-divider-text",children:"or sign up with email"}),f.jsx("div",{className:"as-divider-line"})]}),f.jsxs("form",{className:"as-form",onSubmit:x,children:[f.jsxs("div",{className:"as-field",children:[f.jsx("span",{className:"as-field-icon",children:f.jsxs("svg",{width:"15",height:"15",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round",children:[f.jsx("circle",{cx:"12",cy:"8",r:"4"}),f.jsx("path",{d:"M4 20c0-4 3.6-7 8-7s8 3 8 7"})]})}),f.jsx("input",{className:"as-input no-right-icon",type:"text",placeholder:"Full name",value:c.name,autoComplete:"name",required:!0,onChange:j=>u({...c,name:j.target.value})})]}),f.jsxs("div",{className:"as-field",children:[f.jsx("span",{className:"as-field-icon",children:f.jsxs("svg",{width:"15",height:"15",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round",children:[f.jsx("rect",{x:"2",y:"4",width:"20",height:"16",rx:"3"}),f.jsx("path",{d:"m2 7 10 7 10-7"})]})}),f.jsx("input",{className:"as-input no-right-icon",type:"email",placeholder:"Email address",value:c.email,autoComplete:"email",required:!0,onChange:j=>u({...c,email:j.target.value})})]}),f.jsxs("div",{className:"as-field",children:[f.jsx("span",{className:"as-field-icon",children:f.jsxs("svg",{width:"15",height:"15",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round",children:[f.jsx("rect",{x:"3",y:"11",width:"18",height:"11",rx:"2"}),f.jsx("path",{d:"M7 11V7a5 5 0 0 1 10 0v4"})]})}),f.jsx("input",{className:"as-input",type:h?"text":"password",placeholder:"Create a password",value:c.password,autoComplete:"new-password",required:!0,onChange:j=>u({...c,password:j.target.value})}),f.jsx("button",{type:"button",className:"as-eye-btn",onClick:()=>m(j=>!j),"aria-label":h?"Hide password":"Show password",children:h?f.jsxs("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round",children:[f.jsx("path",{d:"M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94"}),f.jsx("path",{d:"M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19"}),f.jsx("line",{x1:"1",y1:"1",x2:"23",y2:"23"})]}):f.jsxs("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round",children:[f.jsx("path",{d:"M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"}),f.jsx("circle",{cx:"12",cy:"12",r:"3"})]})})]}),c.password.length>0&&f.jsxs("div",{className:"as-strength",children:[f.jsx("div",{className:"as-strength-bars",children:[1,2,3,4].map(j=>f.jsx("div",{className:`as-strength-bar${w.score>=j?` active-${w.key}`:""}`},j))}),f.jsx("span",{className:"as-strength-label",children:w.label})]}),f.jsxs("div",{className:"as-terms",children:[f.jsx("input",{id:"as-agree",type:"checkbox",className:"as-terms-checkbox",checked:g,onChange:j=>v(j.target.checked)}),f.jsxs("label",{htmlFor:"as-agree",className:"as-terms-text",children:["I agree to Astaria's ",f.jsx(xe,{to:"/terms",children:"Terms of Service"})," and"," ",f.jsx(xe,{to:"/privacy",children:"Privacy Policy"})]})]}),f.jsx("button",{className:"as-btn-primary",type:"submit",disabled:r,children:f.jsx("span",{children:r?f.jsxs(f.Fragment,{children:[f.jsx("span",{className:"as-spinner"}),"Creating account…"]}):"Create free account"})})]}),f.jsxs("p",{className:"as-footer",children:["Already have an account? ",f.jsx(xe,{to:"/login",children:"Sign in →"})]}),f.jsxs("div",{className:"as-trust",children:[f.jsxs("span",{className:"as-trust-item",children:[f.jsxs("svg",{width:"11",height:"11",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[f.jsx("rect",{x:"3",y:"11",width:"18",height:"11",rx:"2"}),f.jsx("path",{d:"M7 11V7a5 5 0 0 1 10 0v4"})]}),"Secure"]}),f.jsxs("span",{className:"as-trust-item",children:[f.jsx("svg",{width:"11",height:"11",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:f.jsx("path",{d:"M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"})}),"SSL Encrypted"]}),f.jsxs("span",{className:"as-trust-item",children:[f.jsx("svg",{width:"11",height:"11",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:f.jsx("polyline",{points:"20 6 9 17 4 12"})}),"Free Forever"]})]})]})]})}function B3(){const[t,r]=b.useState("");async function i(o){o.preventDefault();try{const l=await Te("/auth/forgot-password",{method:"POST",body:JSON.stringify({email:t})});Me.success(l.message)}catch(l){Me.error(l.message)}}return f.jsx("section",{className:"premium-gradient grid min-h-[78vh] place-items-center px-4 py-12",children:f.jsxs("form",{onSubmit:i,className:"glass w-full max-w-md rounded-lg p-8",children:[f.jsx("h1",{className:"text-3xl font-black",children:"Forgot password"}),f.jsx("p",{className:"mt-2 text-sm text-zinc-500",children:"The API creates a temporary reset token. Wire your email provider for production delivery."}),f.jsx("input",{className:"input mt-6",type:"email",placeholder:"Email",value:t,onChange:o=>r(o.target.value)}),f.jsx("button",{className:"btn-primary mt-5 w-full",children:"Send reset link"})]})})}const $3=[["Dashboard","/admin",a0],["Products","/admin/products",Y2],["Orders","/admin/orders",z2],["Users","/admin/users",m0]];function ua({children:t,title:r}){return f.jsxs("section",{className:"section",children:[f.jsxs("div",{className:"mb-8 flex flex-wrap items-center justify-between gap-3",children:[f.jsxs("div",{children:[f.jsx("p",{className:"text-sm font-bold uppercase tracking-[.25em] text-teal-600",children:"Admin"}),f.jsx("h1",{className:"text-3xl font-black",children:r})]}),f.jsx(xe,{to:"/products",className:"btn-soft",children:"View Store"})]}),f.jsxs("div",{className:"grid gap-6 lg:grid-cols-[240px_1fr]",children:[f.jsx("aside",{className:"glass rounded-lg p-3",children:$3.map(([i,o,l])=>f.jsxs(oc,{end:o==="/admin",to:o,className:({isActive:c})=>`mb-1 flex items-center gap-3 rounded-lg px-3 py-3 text-sm font-bold ${c?"bg-zinc-950 text-white dark:bg-white dark:text-zinc-950":"hover:bg-white/70 dark:hover:bg-white/10"}`,children:[f.jsx(l,{size:18})," ",i]},o))}),f.jsx("div",{children:t})]})]})}function U3(){var o,l;const[t,r]=b.useState({users:0,products:0,orders:0,revenue:0,recentOrders:[],lowStock:[]});b.useEffect(()=>{Te("/admin/dashboard").then(r).catch(()=>{})},[]);const i=[["Revenue",lt(t.revenue),a0],["Orders",t.orders,q2],["Products",t.products,uc],["Users",t.users,m0]];return f.jsxs(ua,{title:"Dashboard",children:[f.jsx("div",{className:"grid gap-4 md:grid-cols-4",children:i.map(([c,u,h])=>f.jsxs("div",{className:"card p-5",children:[f.jsx(h,{className:"mb-4 text-teal-600"}),f.jsx("p",{className:"text-sm text-zinc-500",children:c}),f.jsx("p",{className:"text-2xl font-black",children:u})]},c))}),f.jsxs("div",{className:"mt-6 grid gap-6 lg:grid-cols-2",children:[f.jsxs("div",{className:"card p-6",children:[f.jsx("p",{className:"mb-4 text-xl font-black",children:"Recent orders"}),(o=t.recentOrders)==null?void 0:o.map(c=>{var u;return f.jsxs("p",{className:"border-t border-zinc-100 py-3 text-sm dark:border-white/10",children:[((u=c.user)==null?void 0:u.name)||"Customer"," - ",lt(c.total)]},c._id)})]}),f.jsxs("div",{className:"card p-6",children:[f.jsx("p",{className:"mb-4 text-xl font-black",children:"Inventory alerts"}),(l=t.lowStock)==null?void 0:l.map(c=>f.jsxs("p",{className:"border-t border-zinc-100 py-3 text-sm dark:border-white/10",children:[c.name," - ",c.stock," left"]},c._id))]})]})]})}const _m={name:"",category:"",subCategory:"",brand:"",price:"",rating:"",stock:"",description:"",images:[{url:""}]};function W3(){var w,S;const[t,r]=b.useState([]),[i,o]=b.useState(_m),[l,c]=b.useState(null),u=b.useRef(null),h=b.useRef(null),[m,g]=b.useState(null);b.useEffect(()=>{Te("/products").then(({products:j})=>r(j)).catch(()=>r(Io))},[]);async function v(j){var E,A;if(j.preventDefault(),!i.name||!i.category||!i.price||!i.stock||!i.description){Me.error("Please fill in all required fields, including price.");return}const N={...i,price:Number(i.price),rating:i.rating!==""?Number(i.rating):void 0,stock:Number(i.stock),images:[{url:(A=(E=i.images)==null?void 0:E[0])==null?void 0:A.url}]};if(Number.isNaN(N.price)||Number.isNaN(N.stock)){Me.error("Price and stock must be valid numbers.");return}try{const D=l?await Te(`/products/${l}`,{method:"PUT",body:JSON.stringify(N)}):await Te("/products",{method:"POST",body:JSON.stringify(N)});r(l?t.map(_=>_._id===l?D.product:_):[D.product,...t]),o(_m),c(null),Me.success("Product saved"),l||g(D.product._id)}catch(D){Me.error(D.message)}}async function x(j){await Te(`/products/${j}`,{method:"DELETE"}),r(t.filter(N=>N._id!==j))}return b.useEffect(()=>{m&&h.current&&(h.current.scrollIntoView({behavior:"smooth",block:"start"}),g(null))},[m]),f.jsx(ua,{title:"Products",children:f.jsxs("div",{className:"grid gap-6 xl:grid-cols-[380px_1fr]",children:[f.jsxs("form",{onSubmit:v,className:"glass h-fit rounded-lg p-5",children:[f.jsx("p",{className:"mb-4 text-xl font-black",children:l?"Edit product":"Add product"}),["name","category","price","stock"].map(j=>f.jsx("input",{type:j==="price"||j==="stock"?"number":"text",min:j==="price"||j==="stock"?"0":void 0,required:!0,className:"input mb-3",placeholder:j,value:i[j],onChange:N=>o({...i,[j]:N.target.value})},j)),f.jsx("input",{className:"input mb-3",placeholder:"Sub category",value:i.subCategory,onChange:j=>o({...i,subCategory:j.target.value})}),f.jsx("input",{className:"input mb-3",placeholder:"Brand",value:i.brand,onChange:j=>o({...i,brand:j.target.value})}),f.jsx("input",{className:"input mb-3",type:"number",min:"0",max:"5",step:"0.1",placeholder:"Rating",value:i.rating,onChange:j=>o({...i,rating:j.target.value})}),f.jsx("input",{className:"input mb-3",placeholder:"Image URL or Cloudinary URL",value:((S=(w=i.images)==null?void 0:w[0])==null?void 0:S.url)||"",onChange:j=>o({...i,images:[{url:j.target.value}]})}),f.jsx("textarea",{className:"input mb-3 min-h-28",placeholder:"Description",value:i.description,onChange:j=>o({...i,description:j.target.value})}),f.jsx("button",{className:"btn-primary w-full",children:"Save product"})]}),f.jsx("div",{ref:u,className:"grid gap-3 pr-1",children:t.map(j=>{var N,E;return f.jsxs("div",{ref:j._id===m?h:null,className:"card flex flex-wrap items-center gap-4 p-4",children:[f.jsx("img",{src:(E=(N=j.images)==null?void 0:N[0])==null?void 0:E.url,className:"h-16 w-16 rounded-lg object-cover"}),f.jsxs("div",{className:"mr-auto min-w-0",children:[f.jsx("p",{className:"font-black",children:j.name}),f.jsx("p",{className:"text-sm text-zinc-500",children:j.price?`${lt(j.price)}${j.subCategory?` · ${j.subCategory}`:""}`:""}),f.jsx("p",{className:"text-sm text-zinc-500 mt-1",children:j.rating!==void 0?`${j.rating.toFixed(1)} ★`:""})]}),f.jsx("button",{className:"btn-soft",onClick:()=>{c(j._id),o(j)},children:"Edit"}),f.jsx("button",{className:"btn-soft text-rose-600",onClick:()=>x(j._id),children:"Delete"})]},j._id)})})]})})}function H3(){const[t,r]=b.useState([]);return b.useEffect(()=>{Te("/admin/orders").then(({orders:i})=>r(i)).catch(()=>{})},[]),f.jsx(ua,{title:"Orders",children:f.jsx("div",{className:"card overflow-hidden",children:t.map(i=>{var o;return f.jsxs("div",{className:"grid gap-2 border-b border-zinc-100 p-4 dark:border-white/10 md:grid-cols-4",children:[f.jsxs("b",{children:["#",i._id.slice(-8)]}),f.jsx("span",{children:(o=i.user)==null?void 0:o.email}),f.jsx("span",{children:i.status}),f.jsx("span",{className:"font-bold",children:lt(i.total)})]},i._id)})})})}function K3(){const[t,r]=b.useState([]);return b.useEffect(()=>{Te("/admin/users").then(({users:i})=>r(i)).catch(()=>{})},[]),f.jsx(ua,{title:"Users",children:f.jsx("div",{className:"card overflow-hidden",children:t.map(i=>f.jsxs("div",{className:"grid gap-2 border-b border-zinc-100 p-4 dark:border-white/10 md:grid-cols-3",children:[f.jsx("b",{children:i.name}),f.jsx("span",{children:i.email}),f.jsx("span",{className:"font-bold",children:i.role})]},i._id))})})}function G3(){return f.jsxs("div",{className:"min-h-screen bg-stone-50 text-zinc-950 transition-colors dark:bg-zinc-950 dark:text-stone-50",children:[f.jsx(mw,{}),f.jsx("main",{className:"min-h-[72vh]",children:f.jsxs(cy,{children:[f.jsx(Ge,{path:"/",element:f.jsx(P3,{})}),f.jsx(Ge,{path:"/products",element:f.jsx(R3,{})}),f.jsx(Ge,{path:"/products/:slug",element:f.jsx(A3,{})}),f.jsx(Ge,{path:"/login",element:f.jsx(V3,{})}),f.jsx(Ge,{path:"/signup",element:f.jsx(I3,{})}),f.jsx(Ge,{path:"/forgot-password",element:f.jsx(B3,{})}),f.jsxs(Ge,{element:f.jsx(vw,{}),children:[f.jsx(Ge,{path:"/cart",element:f.jsx(_3,{})}),f.jsx(Ge,{path:"/wishlist",element:f.jsx(M3,{})}),f.jsx(Ge,{path:"/checkout",element:f.jsx(L3,{})}),f.jsx(Ge,{path:"/profile",element:f.jsx(D3,{})})]}),f.jsxs(Ge,{element:f.jsx(xw,{}),children:[f.jsx(Ge,{path:"/admin",element:f.jsx(U3,{})}),f.jsx(Ge,{path:"/admin/products",element:f.jsx(W3,{})}),f.jsx(Ge,{path:"/admin/orders",element:f.jsx(H3,{})}),f.jsx(Ge,{path:"/admin/users",element:f.jsx(K3,{})})]}),f.jsx(Ge,{path:"*",element:f.jsx(Oo,{to:"/"})})]})}),f.jsx(gw,{}),f.jsx(_2,{position:"top-right",toastOptions:{className:"dark:!bg-zinc-900 dark:!text-white"}})]})}ux.createRoot(document.getElementById("root")).render(f.jsx(nx.StrictMode,{children:f.jsx(Dy,{children:f.jsx(uw,{children:f.jsx(aw,{children:f.jsx(lw,{children:f.jsx(k3,{children:f.jsx(G3,{})})})})})})}));
