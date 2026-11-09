(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))r(l);new MutationObserver(l=>{for(const c of l)if(c.type==="childList")for(const h of c.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&r(h)}).observe(document,{childList:!0,subtree:!0});function i(l){const c={};return l.integrity&&(c.integrity=l.integrity),l.referrerPolicy&&(c.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?c.credentials="include":l.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function r(l){if(l.ep)return;l.ep=!0;const c=i(l);fetch(l.href,c)}})();var Od={exports:{}},yl={};var Wv;function kE(){if(Wv)return yl;Wv=1;var o=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function i(r,l,c){var h=null;if(c!==void 0&&(h=""+c),l.key!==void 0&&(h=""+l.key),"key"in l){c={};for(var d in l)d!=="key"&&(c[d]=l[d])}else c=l;return l=c.ref,{$$typeof:o,type:r,key:h,ref:l!==void 0?l:null,props:c}}return yl.Fragment=e,yl.jsx=i,yl.jsxs=i,yl}var Yv;function XE(){return Yv||(Yv=1,Od.exports=kE()),Od.exports}var nt=XE(),Pd={exports:{}},pe={};var qv;function WE(){if(qv)return pe;qv=1;var o=Symbol.for("react.transitional.element"),e=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),c=Symbol.for("react.consumer"),h=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),m=Symbol.for("react.memo"),x=Symbol.for("react.lazy"),g=Symbol.for("react.activity"),v=Symbol.for("react.view_transition"),y=Symbol.iterator;function T(B){return B===null||typeof B!="object"?null:(B=y&&B[y]||B["@@iterator"],typeof B=="function"?B:null)}var w={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},M=Object.assign,S={};function P(B,pt,At){this.props=B,this.context=pt,this.refs=S,this.updater=At||w}P.prototype.isReactComponent={},P.prototype.setState=function(B,pt){if(typeof B!="object"&&typeof B!="function"&&B!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,B,pt,"setState")},P.prototype.forceUpdate=function(B){this.updater.enqueueForceUpdate(this,B,"forceUpdate")};function F(){}F.prototype=P.prototype;function C(B,pt,At){this.props=B,this.context=pt,this.refs=S,this.updater=At||w}var U=C.prototype=new F;U.constructor=C,M(U,P.prototype),U.isPureReactComponent=!0;var N=Array.isArray;function L(){}var b={H:null,A:null,T:null,S:null},D=Object.prototype.hasOwnProperty;function V(B,pt,At){var $=At.ref;return{$$typeof:o,type:B,key:pt,ref:$!==void 0?$:null,props:At}}function O(B,pt){return V(B.type,pt,B.props)}function H(B){return typeof B=="object"&&B!==null&&B.$$typeof===o}function Q(B){var pt={"=":"=0",":":"=2"};return"$"+B.replace(/[=:]/g,function(At){return pt[At]})}var G=/\/+/g;function K(B,pt){return typeof B=="object"&&B!==null&&B.key!=null?Q(""+B.key):pt.toString(36)}function k(B){switch(B.status){case"fulfilled":return B.value;case"rejected":throw B.reason;default:switch(typeof B.status=="string"?B.then(L,L):(B.status="pending",B.then(function(pt){B.status==="pending"&&(B.status="fulfilled",B.value=pt)},function(pt){B.status==="pending"&&(B.status="rejected",B.reason=pt)})),B.status){case"fulfilled":return B.value;case"rejected":throw B.reason}}throw B}function q(B,pt,At,$,mt){var Rt=typeof B;(Rt==="undefined"||Rt==="boolean")&&(B=null);var It=!1;if(B===null)It=!0;else switch(Rt){case"bigint":case"string":case"number":It=!0;break;case"object":switch(B.$$typeof){case o:case e:It=!0;break;case x:return It=B._init,q(It(B._payload),pt,At,$,mt)}}if(It)return mt=mt(B),It=$===""?"."+K(B,0):$,N(mt)?(At="",It!=null&&(At=It.replace(G,"$&/")+"/"),q(mt,pt,At,"",function(Le){return Le})):mt!=null&&(H(mt)&&(mt=O(mt,At+(mt.key==null||B&&B.key===mt.key?"":(""+mt.key).replace(G,"$&/")+"/")+It)),pt.push(mt)),1;It=0;var xt=$===""?".":$+":";if(N(B))for(var Dt=0;Dt<B.length;Dt++)$=B[Dt],Rt=xt+K($,Dt),It+=q($,pt,At,Rt,mt);else if(Dt=T(B),typeof Dt=="function")for(B=Dt.call(B),Dt=0;!($=B.next()).done;)$=$.value,Rt=xt+K($,Dt++),It+=q($,pt,At,Rt,mt);else if(Rt==="object"){if(typeof B.then=="function")return q(k(B),pt,At,$,mt);throw pt=String(B),Error("Objects are not valid as a React child (found: "+(pt==="[object Object]"?"object with keys {"+Object.keys(B).join(", ")+"}":pt)+"). If you meant to render a collection of children, use an array instead.")}return It}function it(B,pt,At){if(B==null)return B;var $=[],mt=0;return q(B,$,"","",function(Rt){return pt.call(At,Rt,mt++)}),$}function rt(B){if(B._status===-1){var pt=B._result,At=pt();At.then(function($){(B._status===0||B._status===-1)&&(B._status=1,B._result=$,At.status===void 0&&(At.status="fulfilled",At.value=$))},function($){(B._status===0||B._status===-1)&&(B._status=2,B._result=$,At.status===void 0&&(At.status="rejected",At.reason=$))}),B._status===-1&&(B._status=0,B._result=At)}if(B._status===1)return B._result.default;throw B._result}var ht=typeof reportError=="function"?reportError:function(B){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var pt=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof B=="object"&&B!==null&&typeof B.message=="string"?String(B.message):String(B),error:B});if(!window.dispatchEvent(pt))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",B);return}console.error(B)};function vt(B){var pt=b.T,At={};At.types=pt!==null?pt.types:null,b.T=At;try{var $=B(),mt=b.S;mt!==null&&mt(At,$),typeof $=="object"&&$!==null&&typeof $.then=="function"&&$.then(L,ht)}catch(Rt){ht(Rt)}finally{pt!==null&&At.types!==null&&(pt.types=At.types),b.T=pt}}function Gt(B){var pt=b.T;if(pt!==null){var At=pt.types;At===null?pt.types=[B]:At.indexOf(B)===-1&&At.push(B)}else vt(Gt.bind(null,B))}var qt={map:it,forEach:function(B,pt,At){it(B,function(){pt.apply(this,arguments)},At)},count:function(B){var pt=0;return it(B,function(){pt++}),pt},toArray:function(B){return it(B,function(pt){return pt})||[]},only:function(B){if(!H(B))throw Error("React.Children.only expected to receive a single React element child.");return B}};return pe.Activity=g,pe.Children=qt,pe.Component=P,pe.Fragment=i,pe.Profiler=l,pe.PureComponent=C,pe.StrictMode=r,pe.Suspense=p,pe.ViewTransition=v,pe.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=b,pe.__COMPILER_RUNTIME={__proto__:null,c:function(B){return b.H.useMemoCache(B)}},pe.addTransitionType=Gt,pe.cache=function(B){return function(){return B.apply(null,arguments)}},pe.cacheSignal=function(){return null},pe.cloneElement=function(B,pt,At){if(B==null)throw Error("The argument must be a React element, but you passed "+B+".");var $=M({},B.props),mt=B.key;if(pt!=null)for(Rt in pt.key!==void 0&&(mt=""+pt.key),pt)!D.call(pt,Rt)||Rt==="key"||Rt==="__self"||Rt==="__source"||Rt==="ref"&&pt.ref===void 0||($[Rt]=pt[Rt]);var Rt=arguments.length-2;if(Rt===1)$.children=At;else if(1<Rt){for(var It=Array(Rt),xt=0;xt<Rt;xt++)It[xt]=arguments[xt+2];$.children=It}return V(B.type,mt,$)},pe.createContext=function(B){return B={$$typeof:h,_currentValue:B,_currentValue2:B,_threadCount:0,Provider:null,Consumer:null},B.Provider=B,B.Consumer={$$typeof:c,_context:B},B},pe.createElement=function(B,pt,At){var $,mt={},Rt=null;if(pt!=null)for($ in pt.key!==void 0&&(Rt=""+pt.key),pt)D.call(pt,$)&&$!=="key"&&$!=="__self"&&$!=="__source"&&(mt[$]=pt[$]);var It=arguments.length-2;if(It===1)mt.children=At;else if(1<It){for(var xt=Array(It),Dt=0;Dt<It;Dt++)xt[Dt]=arguments[Dt+2];mt.children=xt}if(B&&B.defaultProps)for($ in It=B.defaultProps,It)mt[$]===void 0&&(mt[$]=It[$]);return V(B,Rt,mt)},pe.createRef=function(){return{current:null}},pe.forwardRef=function(B){return{$$typeof:d,render:B}},pe.isValidElement=H,pe.lazy=function(B){return{$$typeof:x,_payload:{_status:-1,_result:B},_init:rt}},pe.memo=function(B,pt){return{$$typeof:m,type:B,compare:pt===void 0?null:pt}},pe.startTransition=vt,pe.unstable_useCacheRefresh=function(){return b.H.useCacheRefresh()},pe.use=function(B){return b.H.use(B)},pe.useActionState=function(B,pt,At){return b.H.useActionState(B,pt,At)},pe.useCallback=function(B,pt){return b.H.useCallback(B,pt)},pe.useContext=function(B){return b.H.useContext(B)},pe.useDebugValue=function(){},pe.useDeferredValue=function(B,pt){return b.H.useDeferredValue(B,pt)},pe.useEffect=function(B,pt){return b.H.useEffect(B,pt)},pe.useEffectEvent=function(B){return b.H.useEffectEvent(B)},pe.useId=function(){return b.H.useId()},pe.useImperativeHandle=function(B,pt,At){return b.H.useImperativeHandle(B,pt,At)},pe.useInsertionEffect=function(B,pt){return b.H.useInsertionEffect(B,pt)},pe.useLayoutEffect=function(B,pt){return b.H.useLayoutEffect(B,pt)},pe.useMemo=function(B,pt){return b.H.useMemo(B,pt)},pe.useOptimistic=function(B,pt){return b.H.useOptimistic(B,pt)},pe.useReducer=function(B,pt,At){return b.H.useReducer(B,pt,At)},pe.useRef=function(B){return b.H.useRef(B)},pe.useState=function(B){return b.H.useState(B)},pe.useSyncExternalStore=function(B,pt,At){return b.H.useSyncExternalStore(B,pt,At)},pe.useTransition=function(){return b.H.useTransition()},pe.version="19.3.1",pe}var Zv;function xm(){return Zv||(Zv=1,Pd.exports=WE()),Pd.exports}var oe=xm(),Id={exports:{}},Ml={},zd={exports:{}},Bd={};var jv;function YE(){return jv||(jv=1,(function(o){function e(k,q){var it=k.length;k.push(q);t:for(;0<it;){var rt=it-1>>>1,ht=k[rt];if(0<l(ht,q))k[rt]=q,k[it]=ht,it=rt;else break t}}function i(k){return k.length===0?null:k[0]}function r(k){if(k.length===0)return null;var q=k[0],it=k.pop();if(it!==q){k[0]=it;t:for(var rt=0,ht=k.length,vt=ht>>>1;rt<vt;){var Gt=2*(rt+1)-1,qt=k[Gt],B=Gt+1,pt=k[B];if(0>l(qt,it))B<ht&&0>l(pt,qt)?(k[rt]=pt,k[B]=it,rt=B):(k[rt]=qt,k[Gt]=it,rt=Gt);else if(B<ht&&0>l(pt,it))k[rt]=pt,k[B]=it,rt=B;else break t}}return q}function l(k,q){var it=k.sortIndex-q.sortIndex;return it!==0?it:k.id-q.id}if(o.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var c=performance;o.unstable_now=function(){return c.now()}}else{var h=Date,d=h.now();o.unstable_now=function(){return h.now()-d}}var p=[],m=[],x=1,g=null,v=3,y=!1,T=!1,w=!1,M=!1,S=typeof setTimeout=="function"?setTimeout:null,P=typeof clearTimeout=="function"?clearTimeout:null,F=typeof setImmediate<"u"?setImmediate:null;function C(k){for(var q=i(m);q!==null;){if(q.callback===null)r(m);else if(q.startTime<=k)r(m),q.sortIndex=q.expirationTime,e(p,q);else break;q=i(m)}}function U(k){if(w=!1,C(k),!T)if(i(p)!==null)T=!0,N||(N=!0,H());else{var q=i(m);q!==null&&K(U,q.startTime-k)}}var N=!1,L=-1,b=5,D=-1;function V(){return M?!0:!(o.unstable_now()-D<b)}function O(){if(M=!1,N){var k=o.unstable_now();D=k;var q=!0;try{t:{T=!1,w&&(w=!1,P(L),L=-1),y=!0;var it=v;try{e:{for(C(k),g=i(p);g!==null&&!(g.expirationTime>k&&V());){var rt=g.callback;if(typeof rt=="function"){g.callback=null,v=g.priorityLevel;var ht=rt(g.expirationTime<=k);if(k=o.unstable_now(),typeof ht=="function"){g.callback=ht,C(k),q=!0;break e}g===i(p)&&r(p),C(k)}else r(p);g=i(p)}if(g!==null)q=!0;else{var vt=i(m);vt!==null&&K(U,vt.startTime-k),q=!1}}break t}finally{g=null,v=it,y=!1}q=void 0}}finally{q?H():N=!1}}}var H;if(typeof F=="function")H=function(){F(O)};else if(typeof MessageChannel<"u"){var Q=new MessageChannel,G=Q.port2;Q.port1.onmessage=O,H=function(){G.postMessage(null)}}else H=function(){S(O,0)};function K(k,q){L=S(function(){k(o.unstable_now())},q)}o.unstable_IdlePriority=5,o.unstable_ImmediatePriority=1,o.unstable_LowPriority=4,o.unstable_NormalPriority=3,o.unstable_Profiling=null,o.unstable_UserBlockingPriority=2,o.unstable_cancelCallback=function(k){k.callback=null},o.unstable_forceFrameRate=function(k){0>k||125<k?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):b=0<k?Math.floor(1e3/k):5},o.unstable_getCurrentPriorityLevel=function(){return v},o.unstable_next=function(k){switch(v){case 1:case 2:case 3:var q=3;break;default:q=v}var it=v;v=q;try{return k()}finally{v=it}},o.unstable_requestPaint=function(){M=!0},o.unstable_runWithPriority=function(k,q){switch(k){case 1:case 2:case 3:case 4:case 5:break;default:k=3}var it=v;v=k;try{return q()}finally{v=it}},o.unstable_scheduleCallback=function(k,q,it){var rt=o.unstable_now();switch(typeof it=="object"&&it!==null?(it=it.delay,it=typeof it=="number"&&0<it?rt+it:rt):it=rt,k){case 1:var ht=-1;break;case 2:ht=250;break;case 5:ht=1073741823;break;case 4:ht=1e4;break;default:ht=5e3}return ht=it+ht,k={id:x++,callback:q,priorityLevel:k,startTime:it,expirationTime:ht,sortIndex:-1},it>rt?(k.sortIndex=it,e(m,k),i(p)===null&&k===i(m)&&(w?(P(L),L=-1):w=!0,K(U,it-rt))):(k.sortIndex=ht,e(p,k),T||y||(T=!0,N||(N=!0,H()))),k},o.unstable_shouldYield=V,o.unstable_wrapCallback=function(k){var q=v;return function(){var it=v;v=q;try{return k.apply(this,arguments)}finally{v=it}}}})(Bd)),Bd}var Kv;function qE(){return Kv||(Kv=1,zd.exports=YE()),zd.exports}var Fd={exports:{}},Wn={};var Qv;function ZE(){if(Qv)return Wn;Qv=1;var o=xm();function e(x){var g="https://react.dev/errors/"+x;if(1<arguments.length){g+="?args[]="+encodeURIComponent(arguments[1]);for(var v=2;v<arguments.length;v++)g+="&args[]="+encodeURIComponent(arguments[v])}return"Minified React error #"+x+"; visit "+g+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var r={d:{f:i,r:function(){throw Error(e(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal"),c=Symbol.for("react.recoverable"),h=Symbol.for("react.optimistic_key");function d(x,g,v){var y=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:y==null?null:y===h?h:""+y,children:x,containerInfo:g,implementation:v}}var p=o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function m(x,g){if(x==="font")return"";if(typeof g=="string")return g==="use-credentials"?g:""}return Wn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=r,Wn.browser=function(x){return{$$typeof:c,_reason:x}},Wn.createPortal=function(x,g){var v=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!g||g.nodeType!==1&&g.nodeType!==9&&g.nodeType!==11)throw Error(e(299));return d(x,g,null,v)},Wn.flushSync=function(x){var g=p.T,v=r.p;try{if(p.T=null,r.p=2,x)return x()}finally{p.T=g,r.p=v,r.d.f()}},Wn.preconnect=function(x,g){typeof x=="string"&&(g?(g=g.crossOrigin,g=typeof g=="string"?g==="use-credentials"?g:"":void 0):g=null,r.d.C(x,g))},Wn.prefetchDNS=function(x){typeof x=="string"&&r.d.D(x)},Wn.preinit=function(x,g){if(typeof x=="string"&&g&&typeof g.as=="string"){var v=g.as,y=m(v,g.crossOrigin),T=typeof g.integrity=="string"?g.integrity:void 0,w=typeof g.fetchPriority=="string"?g.fetchPriority:void 0;v==="style"?r.d.S(x,typeof g.precedence=="string"?g.precedence:void 0,{crossOrigin:y,integrity:T,fetchPriority:w}):v==="script"&&r.d.X(x,{crossOrigin:y,integrity:T,fetchPriority:w,nonce:typeof g.nonce=="string"?g.nonce:void 0})}},Wn.preinitModule=function(x,g){if(typeof x=="string")if(typeof g=="object"&&g!==null){if(g.as==null||g.as==="script"){var v=m(g.as,g.crossOrigin);r.d.M(x,{crossOrigin:v,integrity:typeof g.integrity=="string"?g.integrity:void 0,nonce:typeof g.nonce=="string"?g.nonce:void 0,fetchPriority:typeof g.fetchPriority=="string"?g.fetchPriority:void 0})}}else g==null&&r.d.M(x)},Wn.preload=function(x,g){if(typeof x=="string"&&typeof g=="object"&&g!==null&&typeof g.as=="string"){var v=g.as,y=m(v,g.crossOrigin);r.d.L(x,v,{crossOrigin:y,integrity:typeof g.integrity=="string"?g.integrity:void 0,nonce:typeof g.nonce=="string"?g.nonce:void 0,type:typeof g.type=="string"?g.type:void 0,fetchPriority:typeof g.fetchPriority=="string"?g.fetchPriority:void 0,referrerPolicy:typeof g.referrerPolicy=="string"?g.referrerPolicy:void 0,imageSrcSet:typeof g.imageSrcSet=="string"?g.imageSrcSet:void 0,imageSizes:typeof g.imageSizes=="string"?g.imageSizes:void 0,media:typeof g.media=="string"?g.media:void 0})}},Wn.preloadModule=function(x,g){if(typeof x=="string")if(g){var v=m(g.as,g.crossOrigin);r.d.m(x,{as:typeof g.as=="string"&&g.as!=="script"?g.as:void 0,crossOrigin:v,integrity:typeof g.integrity=="string"?g.integrity:void 0,nonce:typeof g.nonce=="string"?g.nonce:void 0,fetchPriority:typeof g.fetchPriority=="string"?g.fetchPriority:void 0})}else r.d.m(x)},Wn.requestFormReset=function(x){r.d.r(x)},Wn.unstable_batchedUpdates=function(x,g){return x(g)},Wn.useFormState=function(x,g,v){return p.H.useFormState(x,g,v)},Wn.useFormStatus=function(){return p.H.useHostTransitionStatus()},Wn.version="19.3.1",Wn}var Jv;function jE(){if(Jv)return Fd.exports;Jv=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(e){console.error(e)}}return o(),Fd.exports=ZE(),Fd.exports}var $v;function KE(){if($v)return Ml;$v=1;var o=qE(),e=xm(),i=jE();function r(t){var n="https://react.dev/errors/"+t;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+t+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function c(t){for(var n=t,a=n;a&&!a.alternate;)n=a,(n.flags&4098)!==0&&(t=n.return),a=n.return;for(;n.return;)n=n.return;return n.tag===3?t:null}function h(t){if(t.tag===13){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function d(t){if(t.tag===31){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function p(t){if(c(t)!==t)throw Error(r(188))}function m(t){var n=t.alternate;if(!n){if(n=c(t),n===null)throw Error(r(188));return n!==t?null:t}for(var a=t,s=n;;){var u=a.return;if(u===null)break;var f=u.alternate;if(f===null){if(s=u.return,s!==null){a=s;continue}break}if(u.child===f.child){for(f=u.child;f;){if(f===a)return p(u),t;if(f===s)return p(u),n;f=f.sibling}throw Error(r(188))}if(a.return!==s.return)a=u,s=f;else{for(var _=!1,R=u.child;R;){if(R===a){_=!0,a=u,s=f;break}if(R===s){_=!0,s=u,a=f;break}R=R.sibling}if(!_){for(R=f.child;R;){if(R===a){_=!0,a=f,s=u;break}if(R===s){_=!0,s=f,a=u;break}R=R.sibling}if(!_)throw Error(r(189))}}if(a.alternate!==s)throw Error(r(190))}if(a.tag!==3)throw Error(r(188));return a.stateNode.current===a?t:n}function x(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t;for(t=t.child;t!==null;){if(n=x(t),n!==null)return n;t=t.sibling}return null}function g(t,n,a,s,u,f){for(;t!==null;){if((t.tag===5||t.tag===27||t.tag===6)&&a(t,s,u,f)||(t.tag!==22||t.memoizedState===null)&&(n||t.tag!==5&&t.tag!==27)&&g(t.child,n,a,s,u,f))return!0;t=t.sibling}return!1}function v(t){for(t=t.return;t!==null;){if(t.tag===3||t.tag===5||t.tag===27)return t;t=t.return}return null}function y(t){var n=!1;for(t=t.return;t!==null&&(t.tag===4&&(n=!0),!(t.tag===3||t.tag===5||t.tag===27));)t=t.return;return n}function T(t){var n=[null,null],a=v(t);return a===null||w(n,t,a.child,{foundSelf:!1}),n}function w(t,n,a,s){for(;a!==null;){if(a===n)s.foundSelf=!0;else if(a.tag===5||a.tag===27||a.tag===6){if(s.foundSelf)return t[1]=a,!0;t[0]=a}else if((a.tag!==22||a.memoizedState===null)&&w(t,n,a.child,s))return!0;a=a.sibling}return!1}function M(t){switch(t.tag){case 5:case 27:case 6:return t.stateNode;case 3:return t.stateNode.containerInfo;default:throw Error(r(559))}}var S=null,P=null;function F(t,n,a){return t===a?!0:t===n?(S=t,!0):!1}function C(t,n,a){return t===a?(P=t,!1):t===n?(P!==null&&(S=t),!0):!1}function U(t){if(t===null)return null;do t=t===null?null:t.return;while(t&&t.tag!==5&&t.tag!==27&&t.tag!==3);return t||null}function N(t,n,a){for(var s=0,u=t;u;u=a(u))s++;u=0;for(var f=n;f;f=a(f))u++;for(;0<s-u;)t=a(t),s--;for(;0<u-s;)n=a(n),u--;for(;s--;){if(t===n||n!==null&&t===n.alternate)return t;t=a(t),n=a(n)}return null}var L=Object.assign,b=Symbol.for("react.element"),D=Symbol.for("react.transitional.element"),V=Symbol.for("react.portal"),O=Symbol.for("react.fragment"),H=Symbol.for("react.strict_mode"),Q=Symbol.for("react.profiler"),G=Symbol.for("react.consumer"),K=Symbol.for("react.context"),k=Symbol.for("react.forward_ref"),q=Symbol.for("react.suspense"),it=Symbol.for("react.suspense_list"),rt=Symbol.for("react.memo"),ht=Symbol.for("react.lazy"),vt=Symbol.for("react.activity"),Gt=Symbol.for("react.legacy_hidden"),qt=Symbol.for("react.memo_cache_sentinel"),B=Symbol.for("react.view_transition"),pt=Symbol.for("react.recoverable"),At=Symbol.iterator;function $(t){return t===null||typeof t!="object"?null:(t=At&&t[At]||t["@@iterator"],typeof t=="function"?t:null)}var mt=Symbol.for("react.client.reference");function Rt(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===mt?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case O:return"Fragment";case Q:return"Profiler";case H:return"StrictMode";case q:return"Suspense";case it:return"SuspenseList";case vt:return"Activity";case B:return"ViewTransition"}if(typeof t=="object")switch(t.$$typeof){case V:return"Portal";case K:return t.displayName||"Context";case G:return(t._context.displayName||"Context")+".Consumer";case k:var n=t.render;return t=t.displayName,t||(t=n.displayName||n.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case rt:return n=t.displayName||null,n!==null?n:Rt(t.type)||"Memo";case ht:n=t._payload,t=t._init;try{return Rt(t(n))}catch{}}return null}var It=Array.isArray,xt=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Dt=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Le={pending:!1,data:null,method:null,action:null},ce=[],ve=-1;function Me(t){return{current:t}}function ae(t){0>ve||(t.current=ce[ve],ce[ve]=null,ve--)}function se(t,n){ve++,ce[ve]=t.current,t.current=n}var Xe=Me(null),_n=Me(null),ze=Me(null),nn=Me(null);function j(t,n){switch(se(ze,n),se(_n,t),se(Xe,null),n.nodeType){case 9:case 11:t=(t=n.documentElement)&&(t=t.namespaceURI)?tv(t):0;break;default:if(t=n.tagName,n=n.namespaceURI)n=tv(n),t=ev(n,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}ae(Xe),se(Xe,t)}function un(){ae(Xe),ae(_n),ae(ze)}function Be(t){var n=t.memoizedState;n!==null&&(ro._currentValue=n.memoizedState,se(nn,t)),n=Xe.current;var a=ev(n,t.type);n!==a&&(se(_n,t),se(Xe,a))}function I(t){_n.current===t&&(ae(Xe),ae(_n)),nn.current===t&&(ae(nn),ro._currentValue=Le)}var E,at;function st(t){if(E===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);E=n&&n[1]||"",at=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+E+t+at}var _t=!1;function Ct(t,n){if(!t||_t)return"";_t=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var s={DetermineComponentFrameRoot:function(){try{if(n){var bt=function(){throw Error()};if(Object.defineProperty(bt.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(bt,[])}catch(Ft){var J=Ft}Reflect.construct(t,[],bt)}else{try{bt.call()}catch(Ft){J=Ft}bt=!1;try{var ft=Object.getOwnPropertyDescriptor(t.prototype,"props");Object.defineProperty(t.prototype,"props",{configurable:!0,set:function(){throw Error()}}),bt=!0,new t}finally{bt&&(ft!==void 0?Object.defineProperty(t.prototype,"props",ft):delete t.prototype.props)}}}else{try{throw Error()}catch(Ft){J=Ft}(bt=t())&&typeof bt.catch=="function"&&bt.catch(function(){})}}catch(Ft){if(Ft&&J&&typeof Ft.stack=="string")return[Ft.stack,J.stack]}return[null,null]}};s.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var u=Object.getOwnPropertyDescriptor(s.DetermineComponentFrameRoot,"name");u&&u.configurable&&Object.defineProperty(s.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var f=s.DetermineComponentFrameRoot(),_=f[0],R=f[1];if(_&&R){var z=_.split(`
`),et=R.split(`
`);for(u=s=0;s<z.length&&!z[s].includes("DetermineComponentFrameRoot");)s++;for(;u<et.length&&!et[u].includes("DetermineComponentFrameRoot");)u++;if(s===z.length||u===et.length)for(s=z.length-1,u=et.length-1;1<=s&&0<=u&&z[s]!==et[u];)u--;for(;1<=s&&0<=u;s--,u--)if(z[s]!==et[u]){if(s!==1||u!==1)do if(s--,u--,0>u||z[s]!==et[u]){var dt=`
`+z[s].replace(" at new "," at ");return t.displayName&&dt.includes("<anonymous>")&&(dt=dt.replace("<anonymous>",t.displayName)),dt}while(1<=s&&0<=u);break}}}finally{_t=!1,Error.prepareStackTrace=a}return(a=t?t.displayName||t.name:"")?st(a):""}function Ot(t,n){switch(t.tag){case 26:case 27:case 5:return st(t.type);case 16:return st("Lazy");case 13:return t.child!==n&&n!==null?st("Suspense Fallback"):st("Suspense");case 19:return st("SuspenseList");case 0:case 15:return Ct(t.type,!1);case 11:return Ct(t.type.render,!1);case 1:return Ct(t.type,!0);case 31:return st("Activity");case 30:return st("ViewTransition");default:return""}}function St(t){try{var n="",a=null;do n+=Ot(t,a),a=t,t=t.return;while(t);return n}catch(s){return`
Error generating stack: `+s.message+`
`+s.stack}}var Et=Object.prototype.hasOwnProperty,Lt=o.unstable_scheduleCallback,ne=o.unstable_cancelCallback,zt=o.unstable_shouldYield,Pt=o.unstable_requestPaint,Vt=o.unstable_now,ie=o.unstable_getCurrentPriorityLevel,le=o.unstable_ImmediatePriority,Z=o.unstable_UserBlockingPriority,Nt=o.unstable_NormalPriority,yt=o.unstable_LowPriority,Ut=o.unstable_IdlePriority,kt=o.log,Tt=o.unstable_setDisableYieldValue,$t=null,Ht=null;function we(t){if(typeof kt=="function"&&Tt(t),Ht&&typeof Ht.setStrictMode=="function")try{Ht.setStrictMode($t,t)}catch{}}var de=Math.clz32?Math.clz32:Ca,ti=Math.log,Zn=Math.LN2;function Ca(t){return t>>>=0,t===0?32:31-(ti(t)/Zn|0)|0}var X=256,wt=262144,Zt=4194304;function Ge(t){var n=t&42;if(n!==0)return n;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return t&-t;case 262144:case 524288:case 1048576:case 2097152:return t&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function Ee(t,n,a){var s=t.pendingLanes;if(s===0)return 0;var u=0,f=t.suspendedLanes,_=t.pingedLanes;t=t.warmLanes;var R=s&134217727;return R!==0?(s=R&~f,s!==0?u=Ge(s):(_&=R,_!==0?u=Ge(_):a||(a=R&~t,a!==0&&(u=Ge(a))))):(R=s&~f,R!==0?u=Ge(R):_!==0?u=Ge(_):a||(a=s&~t,a!==0&&(u=Ge(a)))),u===0?0:n!==0&&n!==u&&(n&f)===0&&(f=u&-u,a=n&-n,f>=a||f===32&&(a&4194048)!==0)?n:u}function cn(t,n){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&n)===0}function an(t,n){(n&8)!==0&&(n|=n&32);var a=t.entangledLanes;if(a!==0)for(t=t.entanglements,a&=n;0<a;){var s=31-de(a),u=1<<s;n|=t[s],a&=~u}return n}function ui(t,n){switch(t){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function pn(){var t=Zt;return Zt<<=1,(Zt&62914560)===0&&(Zt=4194304),t}function wn(t){for(var n=[],a=0;31>a;a++)n.push(t);return n}function Fn(t,n){t.pendingLanes|=n,n!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function Da(t,n,a,s,u,f){var _=t.pendingLanes;t.pendingLanes=a,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=a,t.entangledLanes&=a,t.errorRecoveryDisabledLanes&=a,t.shellSuspendCounter=0;var R=t.entanglements,z=t.expirationTimes,et=t.hiddenUpdates;for(a=_&~a;0<a;){var dt=31-de(a),bt=1<<dt;R[dt]=0,z[dt]=-1;var J=et[dt];if(J!==null)for(et[dt]=null,dt=0;dt<J.length;dt++){var ft=J[dt];ft!==null&&(ft.lane&=-536870913)}a&=~bt}s!==0&&sa(t,s,0),f!==0&&u===0&&t.tag!==0&&(t.suspendedLanes|=f&~(_&~n))}function sa(t,n,a){t.pendingLanes|=n,t.suspendedLanes&=~n;var s=31-de(n);t.entangledLanes|=n,t.entanglements[s]=t.entanglements[s]|1073741824|a&261930}function oa(t,n){var a=t.entangledLanes|=n;for(t=t.entanglements;a;){var s=31-de(a),u=1<<s;u&n|t[s]&n&&(t[s]|=n),a&=~u}}function Gr(t,n){var a=n&-n;return a=(a&42)!==0?1:ci(a),(a&(t.suspendedLanes|n))!==0?0:a}function ci(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function jn(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function jl(){var t=Dt.p;return t!==0?t:(t=window.event,t===void 0?32:Bv(t.type))}function Kl(t,n){var a=Dt.p;try{return Dt.p=t,n()}finally{Dt.p=a}}var Li=Math.random().toString(36).slice(2),A="__reactFiber$"+Li,W="__reactProps$"+Li,gt="__reactContainer$"+Li,ut="__reactEvents$"+Li,ct="__reactListeners$"+Li,Xt="__reactHandles$"+Li,jt="__reactResources$"+Li,Bt="__reactMarker$"+Li,Jt="__reactLoad$"+Li;function te(t){delete t[A],delete t[W],delete t[ct],delete t[Xt]}function fe(t){var n;if(n=t[A])return n;for(var a=t.parentNode;a;){if(n=a[gt]||a[A]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(t=vv(t);t!==null;){if(a=t[A])return a;t=vv(t)}return n}t=a,a=t.parentNode}return null}function ge(t){if(t=t[A]||t[gt]){var n=t.tag;if(n===5||n===6||n===13||n===31||n===26||n===27||n===3)return t}return null}function Kt(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t.stateNode;throw Error(r(33))}function Ce(t){var n=t[jt];return n||(n=t[jt]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function be(t){t[Bt]=!0}function tn(t){t[Jt]=void 0}var qe=new Set,Cn={};function Wt(t,n){vn(t,n),vn(t+"Capture",n)}function vn(t,n){for(Cn[t]=n,t=0;t<n.length;t++)qe.add(n[t])}var Fe=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),ei={},Si={};function la(t){return Et.call(Si,t)?!0:Et.call(ei,t)?!1:Fe.test(t)?Si[t]=!0:(ei[t]=!0,!1)}var Te=!1;function We(){var t=Te;return Te=!1,t}function sn(t,n,a){if(la(n))if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":t.removeAttribute(n);return;case"boolean":var s=n.toLowerCase().slice(0,5);if(s!=="data-"&&s!=="aria-"){t.removeAttribute(n);return}}t.setAttribute(n,a)}}function yi(t,n,a){if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(n);return}t.setAttribute(n,a)}}function Oe(t,n,a,s){if(s===null)t.removeAttribute(a);else{switch(typeof s){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(a);return}t.setAttributeNS(n,a,s)}}function xn(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Na(t){var n=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function Ql(t,n,a){var s=Object.getOwnPropertyDescriptor(t.constructor.prototype,n);if(!t.hasOwnProperty(n)&&typeof s<"u"&&typeof s.get=="function"&&typeof s.set=="function"){var u=s.get,f=s.set;return Object.defineProperty(t,n,{configurable:!0,get:function(){return u.call(this)},set:function(_){a=""+_,f.call(this,_)}}),Object.defineProperty(t,n,{enumerable:s.enumerable}),{getValue:function(){return a},setValue:function(_){a=""+_},stopTracking:function(){t._valueTracker=null,delete t[n]}}}}function cf(t){if(!t._valueTracker){var n=Na(t)?"checked":"value";t._valueTracker=Ql(t,n,""+t[n])}}function Vm(t){if(!t)return!1;var n=t._valueTracker;if(!n)return!0;var a=n.getValue(),s="";return t&&(s=Na(t)?t.checked?"true":"false":t.value),t=s,t!==a?(n.setValue(t),!0):!1}var cy=/[\n"\\]/g;function Oi(t){return t.replace(cy,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function ff(t,n,a,s,u,f,_,R){t.name="",_!=null&&typeof _!="function"&&typeof _!="symbol"&&typeof _!="boolean"?t.type=_:t.removeAttribute("type"),n!=null?_==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+xn(n)):t.value!==""+xn(n)&&(t.value=""+xn(n)):_!=="submit"&&_!=="reset"||t.removeAttribute("value"),n!=null?_==="number"&&t.value==n?hf(t,xn(t.value)):hf(t,xn(n)):a!=null?hf(t,xn(a)):s!=null&&t.removeAttribute("value"),u==null&&f!=null&&(t.defaultChecked=!!f),u!=null&&(t.checked=u&&typeof u!="function"&&typeof u!="symbol"),R!=null&&typeof R!="function"&&typeof R!="symbol"&&typeof R!="boolean"?t.name=""+xn(R):t.removeAttribute("name")}function km(t,n,a,s,u,f,_,R){if(f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"&&(t.type=f),n!=null||a!=null){if(!(f!=="submit"&&f!=="reset"||n!=null)){cf(t);return}a=a!=null?""+xn(a):"",n=n!=null?""+xn(n):a,R||n===t.value||(t.value=n),t.defaultValue=n}s=s??u,s=typeof s!="function"&&typeof s!="symbol"&&!!s,t.checked=R?t.checked:!!s,t.defaultChecked=!!s,_!=null&&typeof _!="function"&&typeof _!="symbol"&&typeof _!="boolean"&&(t.name=_),cf(t)}function hf(t,n){t.defaultValue!==""+n&&(t.defaultValue=""+n)}function Es(t,n,a,s){if(t=t.options,n){n={};for(var u=0;u<a.length;u++)n["$"+a[u]]=!0;for(a=0;a<t.length;a++)u=n.hasOwnProperty("$"+t[a].value),t[a].selected!==u&&(t[a].selected=u),u&&s&&(t[a].defaultSelected=!0)}else{for(a=""+xn(a),n=null,u=0;u<t.length;u++){if(t[u].value===a){t[u].selected=!0,s&&(t[u].defaultSelected=!0);return}n!==null||t[u].disabled||(n=t[u])}n!==null&&(n.selected=!0)}}function Xm(t,n,a){if(n!=null&&(n=""+xn(n),n!==t.value&&(t.value=n),a==null)){t.defaultValue!==n&&(t.defaultValue=n);return}t.defaultValue=a!=null?""+xn(a):""}function Wm(t,n,a,s){if(n==null){if(s!=null){if(a!=null)throw Error(r(92));if(It(s)){if(1<s.length)throw Error(r(93));s=s[0]}a=s}a==null&&(a=""),n=a}a=xn(n),t.defaultValue=a,s=t.textContent,s===a&&s!==""&&s!==null&&(t.value=s),cf(t)}function bs(t,n){if(n){var a=t.firstChild;if(a&&a===t.lastChild&&a.nodeType===3){a.nodeValue=n;return}}t.textContent=n}var fy=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Ym(t,n,a){var s=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?s?t.setProperty(n,""):n==="float"?t.cssFloat="":t[n]="":s?t.setProperty(n,a):typeof a!="number"||a===0||fy.has(n)?n==="float"?t.cssFloat=a:t[n]=(""+a).trim():t[n]=a+"px"}function qm(t,n,a){if(n!=null&&typeof n!="object")throw Error(r(62));if(t=t.style,a!=null){for(var s in a)!a.hasOwnProperty(s)||n!=null&&n.hasOwnProperty(s)||(s.indexOf("--")===0?t.setProperty(s,""):s==="float"?t.cssFloat="":t[s]="",Te=!0);for(var u in n)s=n[u],n.hasOwnProperty(u)&&a[u]!==s&&(Ym(t,u,s),Te=!0)}else for(var f in n)n.hasOwnProperty(f)&&Ym(t,f,n[f])}function df(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var hy=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["maskType","mask-type"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),dy=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Jl(t){return dy.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}function ua(){}var pf=null;function mf(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Ts=null,As=null;function Zm(t){var n=ge(t);if(n&&(t=n.stateNode)){var a=t[W]||null;t:switch(t=n.stateNode,n.type){case"input":if(ff(t,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=t;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+Oi(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var s=a[n];if(s!==t&&s.form===t.form){var u=s[W]||null;if(!u)throw Error(r(90));ff(s,u.value,u.defaultValue,u.defaultValue,u.checked,u.defaultChecked,u.type,u.name)}}for(n=0;n<a.length;n++)s=a[n],s.form===t.form&&Vm(s)}break t;case"textarea":Xm(t,a.value,a.defaultValue);break t;case"select":n=a.value,n!=null&&Es(t,!!a.multiple,n,!1)}}}var gf=!1;function jm(t,n,a){if(gf)return t(n,a);gf=!0;try{var s=t(n);return s}finally{if(gf=!1,(Ts!==null||As!==null)&&(Ju(),Ts&&(n=Ts,t=As,As=Ts=null,Zm(n),t)))for(n=0;n<t.length;n++)Zm(t[n])}}function Lo(t,n){var a=t.stateNode;if(a===null)return null;var s=a[W]||null;if(s===null)return null;a=s[n];t:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(s=!s.disabled)||(t=t.type,s=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!s;break t;default:t=!1}if(t)return null;if(a&&typeof a!="function")throw Error(r(231,n,typeof a));return a}var Ua=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),_f=!1;if(Ua)try{var Oo={};Object.defineProperty(Oo,"passive",{get:function(){_f=!0}}),window.addEventListener("test",Oo,Oo),window.removeEventListener("test",Oo,Oo)}catch{_f=!1}var ar=null,vf=null,$l=null;function Km(){if($l)return $l;var t,n=vf,a=n.length,s,u="value"in ar?ar.value:ar.textContent,f=u.length;for(t=0;t<a&&n[t]===u[t];t++);var _=a-t;for(s=1;s<=_&&n[a-s]===u[f-s];s++);return $l=u.slice(t,1<s?1-s:void 0)}function tu(t){var n=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&n===13&&(t=13)):t=n,t===10&&(t=13),32<=t||t===13?t:0}function eu(){return!0}function Qm(){return!1}function ni(t){function n(a,s,u,f,_){this._reactName=a,this._targetInst=u,this.type=s,this.nativeEvent=f,this.target=_,this.currentTarget=null;for(var R in t)t.hasOwnProperty(R)&&(a=t[R],this[R]=a?a(f):f[R]);return this.isDefaultPrevented=(f.defaultPrevented!=null?f.defaultPrevented:f.returnValue===!1)?eu:Qm,this.isPropagationStopped=Qm,this}return L(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=eu)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=eu)},persist:function(){},isPersistent:eu}),n}var rr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},nu=ni(rr),Po=L({},rr,{view:0,detail:0}),py=ni(Po),xf,Sf,Io,iu=L({},Po,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Mf,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Io&&(Io&&t.type==="mousemove"?(xf=t.screenX-Io.screenX,Sf=t.screenY-Io.screenY):Sf=xf=0,Io=t),xf)},movementY:function(t){return"movementY"in t?t.movementY:Sf}}),Jm=ni(iu),my=L({},iu,{dataTransfer:0}),gy=ni(my),_y=L({},Po,{relatedTarget:0}),yf=ni(_y),vy=L({},rr,{animationName:0,elapsedTime:0,pseudoElement:0}),xy=ni(vy),Sy=L({},rr,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),yy=ni(Sy),My=L({},rr,{data:0}),$m=ni(My),Ey={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},by={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Ty={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Ay(t){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(t):(t=Ty[t])?!!n[t]:!1}function Mf(){return Ay}var Ry=L({},Po,{key:function(t){if(t.key){var n=Ey[t.key]||t.key;if(n!=="Unidentified")return n}return t.type==="keypress"?(t=tu(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?by[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Mf,charCode:function(t){return t.type==="keypress"?tu(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?tu(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),wy=ni(Ry),Cy=L({},iu,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),tg=ni(Cy),Dy=L({},rr,{submitter:0}),Ny=ni(Dy),Uy=L({},Po,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Mf}),Ly=ni(Uy),Oy=L({},rr,{propertyName:0,elapsedTime:0,pseudoElement:0}),Py=ni(Oy),Iy=L({},iu,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),zy=ni(Iy),By=L({},rr,{newState:0,oldState:0,source:0}),Fy=ni(By),Hy=[9,13,27,32],Ef=Ua&&"CompositionEvent"in window,zo=null;Ua&&"documentMode"in document&&(zo=document.documentMode);var Gy=Ua&&"TextEvent"in window&&!zo,eg=Ua&&(!Ef||zo&&8<zo&&11>=zo),ng=" ",ig=!1;function ag(t,n){switch(t){case"keyup":return Hy.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function rg(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Rs=!1;function Vy(t,n){switch(t){case"compositionend":return rg(n);case"keypress":return n.which!==32?null:(ig=!0,ng);case"textInput":return t=n.data,t===ng&&ig?null:t;default:return null}}function ky(t,n){if(Rs)return t==="compositionend"||!Ef&&ag(t,n)?(t=Km(),$l=vf=ar=null,Rs=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return eg&&n.locale!=="ko"?null:n.data;default:return null}}var Xy={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function sg(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n==="input"?!!Xy[t.type]:n==="textarea"}function og(t,n,a,s){Ts?As?As.push(s):As=[s]:Ts=s,n=ac(n,"onChange"),0<n.length&&(a=new nu("onChange","change",null,a,s),t.push({event:a,listeners:n}))}var Bo=null,Fo=null;function Wy(t){Z_(t,0)}function au(t){var n=Kt(t);if(Vm(n))return t}function lg(t,n){if(t==="change")return n}var ug=!1;if(Ua){var bf;if(Ua){var Tf="oninput"in document;if(!Tf){var cg=document.createElement("div");cg.setAttribute("oninput","return;"),Tf=typeof cg.oninput=="function"}bf=Tf}else bf=!1;ug=bf&&(!document.documentMode||9<document.documentMode)}function fg(){Bo&&(Bo.detachEvent("onpropertychange",hg),Fo=Bo=null)}function hg(t){if(t.propertyName==="value"&&au(Fo)){var n=[];og(n,Fo,t,mf(t)),jm(Wy,n)}}function Yy(t,n,a){t==="focusin"?(fg(),Bo=n,Fo=a,Bo.attachEvent("onpropertychange",hg)):t==="focusout"&&fg()}function qy(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return au(Fo)}function Zy(t,n){if(t==="click")return au(n)}function jy(t,n){if(t==="input"||t==="change")return au(n)}function Ky(t,n){return t===n&&(t!==0||1/t===1/n)||t!==t&&n!==n}var Mi=typeof Object.is=="function"?Object.is:Ky;function Ho(t,n){if(Mi(t,n))return!0;if(typeof t!="object"||t===null||typeof n!="object"||n===null)return!1;var a=Object.keys(t),s=Object.keys(n);if(a.length!==s.length)return!1;for(s=0;s<a.length;s++){var u=a[s];if(!Et.call(n,u)||!Mi(t[u],n[u]))return!1}return!0}function Af(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function dg(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function pg(t,n){var a=dg(t);t=0;for(var s;a;){if(a.nodeType===3){if(s=t+a.textContent.length,t<=n&&s>=n)return{node:a,offset:n-t};t=s}t:{for(;a;){if(a.nextSibling){a=a.nextSibling;break t}a=a.parentNode}a=void 0}a=dg(a)}}function mg(t,n){return t&&n?t===n?!0:t&&t.nodeType===3?!1:n&&n.nodeType===3?mg(t,n.parentNode):"contains"in t?t.contains(n):t.compareDocumentPosition?!!(t.compareDocumentPosition(n)&16):!1:!1}function gg(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var n=Af(t.document);n instanceof t.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)t=n.contentWindow;else break;n=Af(t.document)}return n}function Rf(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n&&(n==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||n==="textarea"||t.contentEditable==="true")}var Qy=Ua&&"documentMode"in document&&11>=document.documentMode,ws=null,wf=null,Go=null,Cf=!1;function _g(t,n,a){var s=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Cf||ws==null||ws!==Af(s)||(s=ws,"selectionStart"in s&&Rf(s)?s={start:s.selectionStart,end:s.selectionEnd}:(s=(s.ownerDocument&&s.ownerDocument.defaultView||window).getSelection(),s={anchorNode:s.anchorNode,anchorOffset:s.anchorOffset,focusNode:s.focusNode,focusOffset:s.focusOffset}),Go&&Ho(Go,s)||(Go=s,s=ac(wf,"onSelect"),0<s.length&&(n=new nu("onSelect","select",null,n,a),t.push({event:n,listeners:s}),n.target=ws)))}function Vr(t,n){var a={};return a[t.toLowerCase()]=n.toLowerCase(),a["Webkit"+t]="webkit"+n,a["Moz"+t]="moz"+n,a}var Cs={animationend:Vr("Animation","AnimationEnd"),animationiteration:Vr("Animation","AnimationIteration"),animationstart:Vr("Animation","AnimationStart"),transitionrun:Vr("Transition","TransitionRun"),transitionstart:Vr("Transition","TransitionStart"),transitioncancel:Vr("Transition","TransitionCancel"),transitionend:Vr("Transition","TransitionEnd")},Df={},vg={};Ua&&(vg=document.createElement("div").style,"AnimationEvent"in window||(delete Cs.animationend.animation,delete Cs.animationiteration.animation,delete Cs.animationstart.animation),"TransitionEvent"in window||delete Cs.transitionend.transition);function kr(t){if(Df[t])return Df[t];if(!Cs[t])return t;var n=Cs[t],a;for(a in n)if(n.hasOwnProperty(a)&&a in vg)return Df[t]=n[a];return t}var xg=kr("animationend"),Sg=kr("animationiteration"),yg=kr("animationstart"),Jy=kr("transitionrun"),$y=kr("transitionstart"),tM=kr("transitioncancel"),Mg=kr("transitionend"),Eg=new Map,Nf="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error fullscreenChange fullscreenError gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Nf.push("scrollEnd");function qi(t,n){Eg.set(t,n),Wt(n,[t])}var eM=0;function La(t,n){if(t.name!=null&&t.name!=="auto")return t.name;if(n.autoName!==null)return n.autoName;t=Qi.identifierPrefix;var a=eM++;return t="_"+t+"t_"+a.toString(32)+"_",n.autoName=t}function bg(t){if(t==null||typeof t=="string")return t;var n=null,a=js;if(a!==null)for(var s=0;s<a.length;s++){var u=t[a[s]];if(u!=null){if(u==="none")return"none";n=n==null?u:n+(" "+u)}}return n??t.default}function Oa(t,n){return t=bg(t),n=bg(n),n==null?t==="auto"?null:t:n==="auto"?null:n}var ru=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)},Pi=[],Ds=0,Uf=0;function su(){for(var t=Ds,n=Uf=Ds=0;n<t;){var a=Pi[n];Pi[n++]=null;var s=Pi[n];Pi[n++]=null;var u=Pi[n];Pi[n++]=null;var f=Pi[n];if(Pi[n++]=null,s!==null&&u!==null){var _=s.pending;_===null?u.next=u:(u.next=_.next,_.next=u),s.pending=u}f!==0&&Tg(a,u,f)}}function ou(t,n,a,s){Pi[Ds++]=t,Pi[Ds++]=n,Pi[Ds++]=a,Pi[Ds++]=s,Uf|=s,t.lanes|=s,t=t.alternate,t!==null&&(t.lanes|=s)}function Lf(t,n,a,s){return ou(t,n,a,s),lu(t)}function Xr(t,n){return ou(t,null,null,n),lu(t)}function Tg(t,n,a){t.lanes|=a;var s=t.alternate;s!==null&&(s.lanes|=a);for(var u=!1,f=t.return;f!==null;)f.childLanes|=a,s=f.alternate,s!==null&&(s.childLanes|=a),f.tag===22&&(t=f.stateNode,t===null||t._visibility&1||(u=!0)),t=f,f=f.return;return t.tag===3?(f=t.stateNode,u&&n!==null&&(u=31-de(a),t=f.hiddenUpdates,s=t[u],s===null?t[u]=[n]:s.push(n),n.lane=a|536870912),f):null}function lu(t){if(50<ul)throw ul=0,Qu=null,Error(r(185));for(var n=t.return;n!==null;)t=n,n=t.return;return t.tag===3?t.stateNode:null}var Ns={};function nM(t,n,a,s){this.tag=t,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=s,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function fi(t,n,a,s){return new nM(t,n,a,s)}function Of(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Pa(t,n){var a=t.alternate;return a===null?(a=fi(t.tag,n,t.key,t.mode),a.elementType=t.elementType,a.type=t.type,a.stateNode=t.stateNode,a.alternate=t,t.alternate=a):(a.pendingProps=n,a.type=t.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=t.flags&1206910976,a.childLanes=t.childLanes,a.lanes=t.lanes,a.child=t.child,a.memoizedProps=t.memoizedProps,a.memoizedState=t.memoizedState,a.updateQueue=t.updateQueue,n=t.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=t.sibling,a.index=t.index,a.ref=t.ref,a.refCleanup=t.refCleanup,a}function Ag(t,n){t.flags&=1206910978;var a=t.alternate;return a===null?(t.childLanes=0,t.lanes=n,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=a.childLanes,t.lanes=a.lanes,t.child=a.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=a.memoizedProps,t.memoizedState=a.memoizedState,t.updateQueue=a.updateQueue,t.type=a.type,n=a.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),t}function uu(t,n,a,s,u,f){var _=0;if(s=t,typeof s=="function")Of(s)&&(_=1);else if(typeof s=="string")_=DE(t,a,Xe.current)?26:t==="html"||t==="head"||t==="body"?27:5;else t:switch(s){case vt:return t=fi(31,a,n,u),t.elementType=vt,t.lanes=f,t;case O:return Wr(a.children,u,f,n);case H:_=8,u|=24;break;case Q:return t=fi(12,a,n,u|2),t.elementType=Q,t.lanes=f,t;case q:return t=fi(13,a,n,u),t.elementType=q,t.lanes=f,t;case it:return t=fi(19,a,n,u),t.elementType=it,t.lanes=f,t;case Gt:case B:return t=u|32,t=fi(30,a,n,t),t.elementType=B,t.lanes=f,t.stateNode={autoName:null,paired:null,clones:null,ref:null},t;default:if(typeof s=="object"&&s!==null)switch(s.$$typeof){case K:_=10;break t;case G:_=9;break t;case k:_=11;break t;case rt:_=14;break t;case ht:_=16,s=null;break t}_=29,a=Error(r(130,t===null?"null":typeof t,"")),s=null}return n=fi(_,a,n,u),n.elementType=t,n.type=s,n.lanes=f,n}function Wr(t,n,a,s){return t=fi(7,t,s,n),t.lanes=a,t}function Pf(t,n,a){return t=fi(6,t,null,n),t.lanes=a,t}function Rg(t){var n=fi(18,null,null,0);return n.stateNode=t,n}function If(t,n,a){return n=fi(4,t.children!==null?t.children:[],t.key,n),n.lanes=a,n.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},n}var wg=new WeakMap;function Ii(t,n){if(typeof t=="object"&&t!==null){var a=wg.get(t);return a!==void 0?a:(n={value:t,source:n,stack:St(n)},wg.set(t,n),n)}return{value:t,source:n,stack:St(n)}}var Us=[],Ls=0,cu=null,Vo=0,zi=[],Bi=0,sr=null,ca=1,fa="";function Ia(t,n){Us[Ls++]=Vo,Us[Ls++]=cu,cu=t,Vo=n}function Cg(t,n,a){zi[Bi++]=ca,zi[Bi++]=fa,zi[Bi++]=sr,sr=t;var s=ca;t=fa;var u=32-de(s)-1;s&=~(1<<u),a+=1;var f=32-de(n)+u;if(30<f){var _=u-u%5;f=(s&(1<<_)-1).toString(32),s>>=_,u-=_,ca=1<<32-de(n)+u|a<<u|s,fa=f+t}else ca=1<<f|a<<u|s,fa=t}function fu(t){t.return!==null&&(Ia(t,1),Cg(t,1,0))}function zf(t){for(;t===cu;)cu=Us[--Ls],Us[Ls]=null,Vo=Us[--Ls],Us[Ls]=null;for(;t===sr;)sr=zi[--Bi],zi[Bi]=null,fa=zi[--Bi],zi[Bi]=null,ca=zi[--Bi],zi[Bi]=null}function Dg(t,n){zi[Bi++]=ca,zi[Bi++]=fa,zi[Bi++]=sr,ca=n.id,fa=n.overflow,sr=t}var On=null,on=null,Ae=!1,or=null,Fi=!1,Bf=Error(r(519));function lr(t){var n=Error(r(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw ko(Ii(n,t)),Bf}function Ng(t){var n=t.stateNode,a=t.type,s=t.memoizedProps;switch(n[A]=t,n[W]=s,a){case"dialog":Ne("cancel",n),Ne("close",n);break;case"iframe":case"object":case"embed":Ne("load",n);break;case"video":case"audio":for(a=0;a<fl.length;a++)Ne(fl[a],n);break;case"source":Ne("error",n);break;case"img":case"image":case"link":Ne("error",n),Ne("load",n);break;case"details":Ne("toggle",n);break;case"input":Ne("invalid",n),km(n,s.value,s.defaultValue,s.checked,s.defaultChecked,s.type,s.name,!0);break;case"select":Ne("invalid",n);break;case"textarea":Ne("invalid",n),Wm(n,s.value,s.defaultValue,s.children)}a=s.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||s.suppressHydrationWarning===!0||J_(n.textContent,a)?(s.popover!=null&&(Ne("beforetoggle",n),Ne("toggle",n)),s.onScroll!=null&&Ne("scroll",n),s.onScrollEnd!=null&&Ne("scrollend",n),s.onClick!=null&&(n.onclick=ua),n=!0):n=!1,n||lr(t,!0)}function hu(t){for(On=t.return;On;)switch(On.tag){case 5:case 31:case 13:Fi=!1;return;case 27:case 3:Fi=!0;return;default:On=On.return}}function Os(t){if(t!==On)return!1;if(!Ae)return hu(t),Ae=!0,!1;var n=t.tag,a;if((a=n!==3&&n!==27)&&((a=n===5)&&(a=t.type,a=!(a!=="form"&&a!=="button")||pd(t.type,t.memoizedProps)),a=!a),a&&on&&lr(t),hu(t),n===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(317));on=_v(t)}else if(n===31){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(317));on=_v(t)}else n===27?(n=on,br(t.type)?(t=Ed,Ed=null,on=t):on=n):on=On?Gi(t.stateNode.nextSibling):null;return!0}function Yr(){on=On=null,Ae=!1}function Ff(){var t=or;return t!==null&&(pi===null?pi=t:pi.push.apply(pi,t),or=null),t}function ko(t){or===null?or=[t]:or.push(t)}var Hf=Me(null),qr=null,za=null;function ur(t,n,a){se(Hf,n._currentValue),n._currentValue=a}function Ba(t){t._currentValue=Hf.current,ae(Hf)}function du(t,n,a){for(;t!==null;){var s=t.alternate;if((t.childLanes&n)!==n?(t.childLanes|=n,s!==null&&(s.childLanes|=n)):s!==null&&(s.childLanes&n)!==n&&(s.childLanes|=n),t===a)break;t=t.return}}function Gf(t,n,a,s){var u=t.child;for(u!==null&&(u.return=t);u!==null;){var f=u.dependencies;if(f!==null){var _=u.child;f=f.firstContext;t:for(;f!==null;){var R=f;f=u;for(var z=0;z<n.length;z++)if(R.context===n[z]){f.lanes|=a,R=f.alternate,R!==null&&(R.lanes|=a),du(f.return,a,t),s||(_=null);break t}f=R.next}}else if(u.tag===18){if(_=u.return,_===null)throw Error(r(341));_.lanes|=a,f=_.alternate,f!==null&&(f.lanes|=a),du(_,a,t),_=null}else u.tag===13&&u.memoizedState!==null&&u.memoizedState.dehydrated===null?(u.lanes|=a,_=u.alternate,_!==null&&(_.lanes|=a),du(u.return,a,t),_=u.child,_=_!==null?_.sibling:null):_=u.child;if(_!==null)_.return=u;else for(_=u;_!==null;){if(_===t){_=null;break}if(u=_.sibling,u!==null){u.return=_.return,_=u;break}_=_.return}u=_}}function Zr(t,n,a,s){t=null;for(var u=n,f=!1;u!==null;){if(!f){if((u.flags&524288)!==0)f=!0;else if((u.flags&262144)!==0)break}if(u.tag===10){var _=u.alternate;if(_===null)throw Error(r(387));if(_=_.memoizedProps,_!==null){var R=u.type;Mi(u.pendingProps.value,_.value)||(t!==null?t.push(R):t=[R])}}else if(u===nn.current){if(_=u.alternate,_===null)throw Error(r(387));_.memoizedState.memoizedState!==u.memoizedState.memoizedState&&(t!==null?t.push(ro):t=[ro])}u=u.return}return t!==null&&Gf(n,t,a,s),n.flags|=262144,t!==null}function pu(t){for(t=t.firstContext;t!==null;){if(!Mi(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function jr(t){qr=t,za=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function Hn(t){return Ug(qr,t)}function mu(t,n){return qr===null&&jr(t),Ug(t,n)}function Ug(t,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},za===null){if(t===null)throw Error(r(308));za=n,t.dependencies={lanes:0,firstContext:n},t.flags|=524288}else za=za.next=n;return a}var iM=typeof AbortController<"u"?AbortController:function(){var t=[],n=this.signal={aborted:!1,addEventListener:function(a,s){t.push(s)}};this.abort=function(){n.aborted=!0,t.forEach(function(a){return a()})}},aM=o.unstable_scheduleCallback,rM=o.unstable_NormalPriority,En={$$typeof:K,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Vf(){return{controller:new iM,data:new Map,refCount:0}}function Xo(t){t.refCount--,t.refCount===0&&aM(rM,function(){t.controller.abort()})}function Lg(t,n){if((t.pendingLanes&4194048)!==0){var a=t.transitionTypes;for(a===null&&(a=t.transitionTypes=[]),t=0;t<n.length;t++){var s=n[t];a.indexOf(s)===-1&&a.push(s)}}}var Wo=null;function sM(t){var n=t.transitionTypes;return t.transitionTypes=null,n}var Yo=null,kf=0,Kr=0,Ps=null;function oM(t,n){if(Yo===null){var a=Yo=[];kf=0,Kr=rd(),Ps={status:"pending",value:void 0,then:function(s){a.push(s)}}}return kf++,n.then(Og,Og),n}function Og(){if(--kf===0&&(Wo=null,Yo!==null)){Ps!==null&&(Ps.status="fulfilled");var t=Yo;Yo=null,Kr=0,Ps=null;for(var n=0;n<t.length;n++)(0,t[n])()}}function lM(t,n){var a=[],s={status:"pending",value:null,reason:null,then:function(u){a.push(u)}};return t.then(function(){s.status="fulfilled",s.value=n;for(var u=0;u<a.length;u++)(0,a[u])(n)},function(u){for(s.status="rejected",s.reason=u,u=0;u<a.length;u++)(0,a[u])(void 0)}),s}var Pg=xt.S;xt.S=function(t,n){if(R_=Vt(),typeof n=="object"&&n!==null&&typeof n.then=="function"&&oM(t,n),Wo!==null)for(var a=$s;a!==null;)Lg(a,Wo),a=a.next;if(a=t.types,a!==null){for(var s=$s;s!==null;)Lg(s,a),s=s.next;if(Kr!==0){s=Wo,s===null&&(s=Wo=[]);for(var u=0;u<a.length;u++){var f=a[u];s.indexOf(f)===-1&&s.push(f)}}}Pg!==null&&Pg(t,n)};var Qr=Me(null);function Xf(){var t=Qr.current;return t!==null?t:rn.pooledCache}function gu(t,n){n===null?se(Qr,Qr.current):se(Qr,n.pool)}function Ig(){var t=Xf();return t===null?null:{parent:En._currentValue,pool:t}}var Is=Error(r(460)),Wf=Error(r(474)),_u=Error(r(542)),vu={then:function(){}};function zg(t){return t=t.status,t==="fulfilled"||t==="rejected"}function Bg(t,n,a){switch(a=t[a],a===void 0?t.push(n):a!==n&&(n.then(ua,ua),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,Hg(t),t===void 0&&!("reason"in n)?Error(r(600)):t;default:if(typeof n.status=="string")n.then(ua,ua);else{if(t=rn,t!==null&&100<t.shellSuspendCounter)throw Error(r(482));t=n,t.status="pending",t.then(function(s){if(n.status==="pending"){var u=n;u.status="fulfilled",u.value=s}},function(s){if(n.status==="pending"){var u=n;u.status="rejected",u.reason=s}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,Hg(t),t}throw $r=n,Is}}function Jr(t){try{var n=t._init;return n(t._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?($r=a,Is):a}}var $r=null;function Fg(){if($r===null)throw Error(r(459));var t=$r;return $r=null,t}function Hg(t){if(t===Is||t===_u)throw Error(r(483))}var zs=null,qo=0;function xu(t){var n=qo;return qo+=1,zs===null&&(zs=[]),Bg(zs,t,n)}function cr(t,n){n=n.props.ref,t.ref=n!==void 0?n:null}function Su(t,n){throw n.$$typeof===b?Error(r(525)):(t=Object.prototype.toString.call(n),Error(r(31,t==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":t)))}function Gg(t){function n(tt,Y){if(t){var ot=tt.deletions;ot===null?(tt.deletions=[Y],tt.flags|=16):ot.push(Y)}}function a(tt,Y){if(!t)return null;for(;Y!==null;)n(tt,Y),Y=Y.sibling;return null}function s(tt){for(var Y=new Map;tt!==null;)tt.key===null?Y.set(tt.index,tt):Y.set(tt.key,tt),tt=tt.sibling;return Y}function u(tt,Y){return tt=Pa(tt,Y),tt.index=0,tt.sibling=null,tt}function f(tt,Y,ot){return tt.index=ot,t?(ot=tt.alternate,ot!==null?(ot=ot.index,ot<Y?(tt.flags|=2,Y):ot):(tt.flags|=134217730,Y)):(tt.flags|=1048576,Y)}function _(tt){return t&&tt.alternate===null&&(tt.flags|=134217730),tt}function R(tt,Y,ot,Mt){return Y===null||Y.tag!==6?(Y=Pf(ot,tt.mode,Mt),Y.return=tt,Y):(Y=u(Y,ot),Y.return=tt,Y)}function z(tt,Y,ot,Mt){var Qt=ot.type;return Qt===O?(tt=dt(tt,Y,ot.props.children,Mt,ot.key),cr(tt,ot),tt):Y!==null&&(Y.elementType===Qt||typeof Qt=="object"&&Qt!==null&&Qt.$$typeof===ht&&Jr(Qt)===Y.type)?(Y=u(Y,ot.props),cr(Y,ot),Y.return=tt,Y):(Y=uu(ot.type,ot.key,ot.props,null,tt.mode,Mt),cr(Y,ot),Y.return=tt,Y)}function et(tt,Y,ot,Mt){return Y===null||Y.tag!==4||Y.stateNode.containerInfo!==ot.containerInfo||Y.stateNode.implementation!==ot.implementation?(Y=If(ot,tt.mode,Mt),Y.return=tt,Y):(Y=u(Y,ot.children||[]),Y.return=tt,Y)}function dt(tt,Y,ot,Mt,Qt){return Y===null||Y.tag!==7?(Y=Wr(ot,tt.mode,Mt,Qt),Y.return=tt,Y):(Y=u(Y,ot),Y.return=tt,Y)}function bt(tt,Y,ot){if(typeof Y=="string"&&Y!==""||typeof Y=="number"||typeof Y=="bigint")return Y=Pf(""+Y,tt.mode,ot),Y.return=tt,Y;if(typeof Y=="object"&&Y!==null){switch(Y.$$typeof){case D:return ot=uu(Y.type,Y.key,Y.props,null,tt.mode,ot),cr(ot,Y),ot.return=tt,ot;case V:return Y=If(Y,tt.mode,ot),Y.return=tt,Y;case ht:return Y=Jr(Y),bt(tt,Y,ot)}if(It(Y)||$(Y))return Y=Wr(Y,tt.mode,ot,null),Y.return=tt,Y;if(typeof Y.then=="function")return bt(tt,xu(Y),ot);if(Y.$$typeof===K)return bt(tt,mu(tt,Y),ot);Su(tt,Y)}return null}function J(tt,Y,ot,Mt){var Qt=Y!==null?Y.key:null;if(typeof ot=="string"&&ot!==""||typeof ot=="number"||typeof ot=="bigint")return Qt!==null?null:R(tt,Y,""+ot,Mt);if(typeof ot=="object"&&ot!==null){switch(ot.$$typeof){case D:return ot.key===Qt?z(tt,Y,ot,Mt):null;case V:return ot.key===Qt?et(tt,Y,ot,Mt):null;case ht:return ot=Jr(ot),J(tt,Y,ot,Mt)}if(It(ot)||$(ot))return Qt!==null?null:dt(tt,Y,ot,Mt,null);if(typeof ot.then=="function")return J(tt,Y,xu(ot),Mt);if(ot.$$typeof===K)return J(tt,Y,mu(tt,ot),Mt);Su(tt,ot)}return null}function ft(tt,Y,ot,Mt,Qt){if(typeof Mt=="string"&&Mt!==""||typeof Mt=="number"||typeof Mt=="bigint")return tt=tt.get(ot)||null,R(Y,tt,""+Mt,Qt);if(typeof Mt=="object"&&Mt!==null){switch(Mt.$$typeof){case D:return tt=tt.get(Mt.key===null?ot:Mt.key)||null,z(Y,tt,Mt,Qt);case V:return tt=tt.get(Mt.key===null?ot:Mt.key)||null,et(Y,tt,Mt,Qt);case ht:return Mt=Jr(Mt),ft(tt,Y,ot,Mt,Qt)}if(It(Mt)||$(Mt))return tt=tt.get(ot)||null,dt(Y,tt,Mt,Qt,null);if(typeof Mt.then=="function")return ft(tt,Y,ot,xu(Mt),Qt);if(Mt.$$typeof===K)return ft(tt,Y,ot,mu(Y,Mt),Qt);Su(Y,Mt)}return null}function Ft(tt,Y,ot,Mt){for(var Qt=null,Ie=null,re=Y,ue=Y=0,An=null;re!==null&&ue<ot.length;ue++){re.index>ue?(An=re,re=null):An=re.sibling;var Ve=J(tt,re,ot[ue],Mt);if(Ve===null){re===null&&(re=An);break}t&&re&&Ve.alternate===null&&n(tt,re),Y=f(Ve,Y,ue),Ie===null?Qt=Ve:Ie.sibling=Ve,Ie=Ve,re=An}if(ue===ot.length)return a(tt,re),Ae&&Ia(tt,ue),Qt;if(re===null){for(;ue<ot.length;ue++)re=bt(tt,ot[ue],Mt),re!==null&&(Y=f(re,Y,ue),Ie===null?Qt=re:Ie.sibling=re,Ie=re);return Ae&&Ia(tt,ue),Qt}for(re=s(re);ue<ot.length;ue++)An=ft(re,tt,ue,ot[ue],Mt),An!==null&&(t&&(Ve=An.alternate,Ve!==null&&re.delete(Ve.key===null?ue:Ve.key)),Y=f(An,Y,ue),Ie===null?Qt=An:Ie.sibling=An,Ie=An);return t&&re.forEach(function(Cr){return n(tt,Cr)}),Ae&&Ia(tt,ue),Qt}function ee(tt,Y,ot,Mt){if(ot==null)throw Error(r(151));for(var Qt=null,Ie=null,re=Y,ue=Y=0,An=null,Ve=ot.next();re!==null&&!Ve.done;ue++,Ve=ot.next()){re.index>ue?(An=re,re=null):An=re.sibling;var Cr=J(tt,re,Ve.value,Mt);if(Cr===null){re===null&&(re=An);break}t&&re&&Cr.alternate===null&&n(tt,re),Y=f(Cr,Y,ue),Ie===null?Qt=Cr:Ie.sibling=Cr,Ie=Cr,re=An}if(Ve.done)return a(tt,re),Ae&&Ia(tt,ue),Qt;if(re===null){for(;!Ve.done;ue++,Ve=ot.next())Ve=bt(tt,Ve.value,Mt),Ve!==null&&(Y=f(Ve,Y,ue),Ie===null?Qt=Ve:Ie.sibling=Ve,Ie=Ve);return Ae&&Ia(tt,ue),Qt}for(re=s(re);!Ve.done;ue++,Ve=ot.next())Ve=ft(re,tt,ue,Ve.value,Mt),Ve!==null&&(t&&(An=Ve.alternate,An!==null&&re.delete(An.key===null?ue:An.key)),Y=f(Ve,Y,ue),Ie===null?Qt=Ve:Ie.sibling=Ve,Ie=Ve);return t&&re.forEach(function(VE){return n(tt,VE)}),Ae&&Ia(tt,ue),Qt}function Se(tt,Y,ot,Mt){if(typeof ot=="object"&&ot!==null&&ot.type===O&&ot.key===null&&ot.props.ref===void 0&&(ot=ot.props.children),typeof ot=="object"&&ot!==null){switch(ot.$$typeof){case D:t:{for(var Qt=ot.key;Y!==null;){if(Y.key===Qt){if(Qt=ot.type,Qt===O){if(Y.tag===7){a(tt,Y.sibling),Mt=u(Y,ot.props.children),cr(Mt,ot),Mt.return=tt,tt=Mt;break t}}else if(Y.elementType===Qt||typeof Qt=="object"&&Qt!==null&&Qt.$$typeof===ht&&Jr(Qt)===Y.type){a(tt,Y.sibling),Mt=u(Y,ot.props),cr(Mt,ot),Mt.return=tt,tt=Mt;break t}a(tt,Y);break}else n(tt,Y);Y=Y.sibling}ot.type===O?(Mt=Wr(ot.props.children,tt.mode,Mt,ot.key),cr(Mt,ot),Mt.return=tt,tt=Mt):(Mt=uu(ot.type,ot.key,ot.props,null,tt.mode,Mt),cr(Mt,ot),Mt.return=tt,tt=Mt)}return _(tt);case V:t:{for(Qt=ot.key;Y!==null;){if(Y.key===Qt)if(Y.tag===4&&Y.stateNode.containerInfo===ot.containerInfo&&Y.stateNode.implementation===ot.implementation){a(tt,Y.sibling),Mt=u(Y,ot.children||[]),Mt.return=tt,tt=Mt;break t}else{a(tt,Y);break}else n(tt,Y);Y=Y.sibling}Mt=If(ot,tt.mode,Mt),Mt.return=tt,tt=Mt}return _(tt);case ht:return ot=Jr(ot),Se(tt,Y,ot,Mt)}if(It(ot))return Ft(tt,Y,ot,Mt);if($(ot)){if(Qt=$(ot),typeof Qt!="function")throw Error(r(150));return ot=Qt.call(ot),ee(tt,Y,ot,Mt)}if(typeof ot.then=="function")return Se(tt,Y,xu(ot),Mt);if(ot.$$typeof===K)return Se(tt,Y,mu(tt,ot),Mt);Su(tt,ot)}return typeof ot=="string"&&ot!==""||typeof ot=="number"||typeof ot=="bigint"?(ot=""+ot,Y!==null&&Y.tag===6?(a(tt,Y.sibling),Mt=u(Y,ot),Mt.return=tt,tt=Mt):(a(tt,Y),Mt=Pf(ot,tt.mode,Mt),Mt.return=tt,tt=Mt),_(tt)):a(tt,Y)}return function(tt,Y,ot,Mt){try{qo=0;var Qt=Se(tt,Y,ot,Mt);return zs=null,Qt}catch(re){if(re===Is||re===_u)throw re;var Ie=fi(29,re,null,tt.mode);return Ie.lanes=Mt,Ie.return=tt,Ie}}}var ts=Gg(!0),Vg=Gg(!1),fr=!1;function Yf(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function qf(t,n){t=t.updateQueue,n.updateQueue===t&&(n.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function hr(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function dr(t,n,a){var s=t.updateQueue;if(s===null)return null;if(s=s.shared,(Ye&2)!==0){var u=s.pending;return u===null?n.next=n:(n.next=u.next,u.next=n),s.pending=n,n=lu(t),Tg(t,null,a),n}return ou(t,s,n,a),lu(t)}function Zo(t,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194048)!==0)){var s=n.lanes;s&=t.pendingLanes,a|=s,n.lanes=a,oa(t,a)}}function Zf(t,n){var a=t.updateQueue,s=t.alternate;if(s!==null&&(s=s.updateQueue,a===s)){var u=null,f=null;if(a=a.firstBaseUpdate,a!==null){do{var _={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};f===null?u=f=_:f=f.next=_,a=a.next}while(a!==null);f===null?u=f=n:f=f.next=n}else u=f=n;a={baseState:s.baseState,firstBaseUpdate:u,lastBaseUpdate:f,shared:s.shared,callbacks:s.callbacks},t.updateQueue=a;return}t=a.lastBaseUpdate,t===null?a.firstBaseUpdate=n:t.next=n,a.lastBaseUpdate=n}var jf=!1;function jo(){if(jf){var t=Ps;if(t!==null)throw t}}function Ko(t,n,a,s){jf=!1;var u=t.updateQueue;fr=!1;var f=u.firstBaseUpdate,_=u.lastBaseUpdate,R=u.shared.pending;if(R!==null){u.shared.pending=null;var z=R,et=z.next;z.next=null,_===null?f=et:_.next=et,_=z;var dt=t.alternate;dt!==null&&(dt=dt.updateQueue,R=dt.lastBaseUpdate,R!==_&&(R===null?dt.firstBaseUpdate=et:R.next=et,dt.lastBaseUpdate=z))}if(f!==null){var bt=u.baseState;_=0,dt=et=z=null,R=f;do{var J=R.lane&-536870913,ft=J!==R.lane;if(ft?(Pe&J)===J:(s&J)===J){J!==0&&J===Kr&&(jf=!0),dt!==null&&(dt=dt.next={lane:0,tag:R.tag,payload:R.payload,callback:null,next:null});t:{var Ft=t,ee=R;J=n;var Se=a;switch(ee.tag){case 1:if(Ft=ee.payload,typeof Ft=="function"){bt=Ft.call(Se,bt,J);break t}bt=Ft;break t;case 3:Ft.flags=Ft.flags&-65537|128;case 0:if(Ft=ee.payload,J=typeof Ft=="function"?Ft.call(Se,bt,J):Ft,J==null)break t;bt=L({},bt,J);break t;case 2:fr=!0}}J=R.callback,J!==null&&(t.flags|=64,ft&&(t.flags|=8192),ft=u.callbacks,ft===null?u.callbacks=[J]:ft.push(J))}else ft={lane:J,tag:R.tag,payload:R.payload,callback:R.callback,next:null},dt===null?(et=dt=ft,z=bt):dt=dt.next=ft,_|=J;if(R=R.next,R===null){if(R=u.shared.pending,R===null)break;ft=R,R=ft.next,ft.next=null,u.lastBaseUpdate=ft,u.shared.pending=null}}while(!0);dt===null&&(z=bt),u.baseState=z,u.firstBaseUpdate=et,u.lastBaseUpdate=dt,f===null&&(u.shared.lanes=0),Sr|=_,t.lanes=_,t.memoizedState=bt}}function kg(t,n){if(typeof t!="function")throw Error(r(191,t));t.call(n)}function Xg(t,n){var a=t.callbacks;if(a!==null)for(t.callbacks=null,t=0;t<a.length;t++)kg(a[t],n)}var pr=Me(null),yu=Me(0);function Wg(t,n){t=ka,se(yu,t),se(pr,n),ka=t|n.baseLanes}function Kf(){se(yu,ka),se(pr,pr.current)}function Qf(){ka=yu.current,ae(pr),ae(yu)}var Gn=Me(null),Kn=null;function mr(t){var n=t.alternate;se(Vn,Vn.current&1),se(Gn,t),Kn===null&&(n===null||pr.current!==null||n.memoizedState!==null)&&(Kn=t)}function Jf(t){se(Vn,Vn.current),se(Gn,t),Kn===null&&(Kn=t)}function Yg(t){t.tag===22?(se(Vn,Vn.current),se(Gn,t),Kn===null&&(Kn=t)):gr()}function gr(){se(Vn,Vn.current),se(Gn,Gn.current)}function Ei(t){ae(Gn),Kn===t&&(Kn=null),ae(Vn)}var Vn=Me(0);function Qo(t,n){se(Gn,Gn.current),se(Vn,n)}function $f(t){ae(Vn),ae(Gn),Kn===t&&(Kn=null)}function Mu(t){for(var n=t;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||yd(a)||Md(a)))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!=="independent"){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var Fa=0,xe=null,en=null,bn=null,Eu=!1,Bs=!1,es=!1,bu=0,Jo=0,Fs=null,uM=0;function Sn(){throw Error(r(321))}function th(t,n){if(n===null)return!1;for(var a=0;a<n.length&&a<t.length;a++)if(!Mi(t[a],n[a]))return!1;return!0}function eh(t,n,a,s,u,f){return Fa=f,xe=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,xt.H=t===null||t.memoizedState===null?C0:D0,es=!1,f=a(s,u),es=!1,Bs&&(f=Zg(n,a,s,u)),qg(t),f}function qg(t){xt.H=Nu;var n=en!==null&&en.next!==null;if(Fa=0,bn=en=xe=null,Eu=!1,Jo=0,Fs=null,n)throw Error(r(300));t===null||Tn||(t=t.dependencies,t!==null&&pu(t)&&(Tn=!0))}function Zg(t,n,a,s){xe=t;var u=0;do{if(Bs&&(Fs=null),Jo=0,Bs=!1,25<=u)throw Error(r(301));if(u+=1,bn=en=null,t.updateQueue!=null){var f=t.updateQueue;f.lastEffect=null,f.events=null,f.stores=null,f.memoCache!=null&&(f.memoCache.index=0)}xt.H=_M,f=n(a,s)}while(Bs);return f}function cM(){var t=xt.H,n=t.useState()[0];return n=typeof n.then=="function"?$o(n):n,t=t.useState()[0],(en!==null?en.memoizedState:null)!==t&&(xe.flags|=1024),n}function nh(){var t=bu!==0;return bu=0,t}function ih(t,n,a){n.updateQueue=t.updateQueue,n.flags&=-2053,t.lanes&=~a}function ah(t){if(Eu){for(t=t.memoizedState;t!==null;){var n=t.queue;n!==null&&(n.pending=null),t=t.next}Eu=!1}Fa=0,bn=en=xe=null,Bs=!1,Jo=bu=0,Fs=null}function ii(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return bn===null?xe.memoizedState=bn=t:bn=bn.next=t,bn}function Mn(){if(en===null){var t=xe.alternate;t=t!==null?t.memoizedState:null}else t=en.next;var n=bn===null?xe.memoizedState:bn.next;if(n!==null)bn=n,en=t;else{if(t===null)throw xe.alternate===null?Error(r(467)):Error(r(310));en=t,t={memoizedState:en.memoizedState,baseState:en.baseState,baseQueue:en.baseQueue,queue:en.queue,next:null},bn===null?xe.memoizedState=bn=t:bn=bn.next=t}return bn}function Tu(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function $o(t){var n=Jo;return Jo+=1,Fs===null&&(Fs=[]),t=Bg(Fs,t,n),n=xe,(bn===null?n.memoizedState:bn.next)===null&&(n=n.alternate,xt.H=n===null||n.memoizedState===null?C0:D0),t}function Au(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return $o(t);if(t.$$typeof===pt)return;if(t.$$typeof===K)return Hn(t)}throw Error(r(438,String(t)))}function rh(t){var n=null,a=xe.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var s=xe.alternate;s!==null&&(s=s.updateQueue,s!==null&&(s=s.memoCache,s!=null&&(n={data:s.data.map(function(u){return u.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=Tu(),xe.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(t),s=0;s<t;s++)a[s]=qt;return n.index++,a}function Ha(t,n){return typeof n=="function"?n(t):n}function Ru(t){var n=Mn();return sh(n,en,t)}function sh(t,n,a){var s=t.queue;if(s===null)throw Error(r(311));s.lastRenderedReducer=a;var u=t.baseQueue,f=s.pending;if(f!==null){if(u!==null){var _=u.next;u.next=f.next,f.next=_}n.baseQueue=u=f,s.pending=null}if(f=t.baseState,u===null)t.memoizedState=f;else{n=u.next;var R=_=null,z=null,et=n,dt=!1;do{var bt=et.lane&-536870913;if(bt!==et.lane?(Pe&bt)===bt:(Fa&bt)===bt){var J=et.revertLane;if(J===0)z!==null&&(z=z.next={lane:0,revertLane:0,gesture:null,action:et.action,hasEagerState:et.hasEagerState,eagerState:et.eagerState,next:null}),bt===Kr&&(dt=!0);else if((Fa&J)===J){et=et.next,J===Kr&&(dt=!0);continue}else bt={lane:0,revertLane:et.revertLane,gesture:null,action:et.action,hasEagerState:et.hasEagerState,eagerState:et.eagerState,next:null},z===null?(R=z=bt,_=f):z=z.next=bt,xe.lanes|=J,Sr|=J;bt=et.action,es&&a(f,bt),f=et.hasEagerState?et.eagerState:a(f,bt)}else J={lane:bt,revertLane:et.revertLane,gesture:et.gesture,action:et.action,hasEagerState:et.hasEagerState,eagerState:et.eagerState,next:null},z===null?(R=z=J,_=f):z=z.next=J,xe.lanes|=bt,Sr|=bt;et=et.next}while(et!==null&&et!==n);if(z===null?_=f:z.next=R,!Mi(f,t.memoizedState)&&(Tn=!0,dt&&(a=Ps,a!==null)))throw a;t.memoizedState=f,t.baseState=_,t.baseQueue=z,s.lastRenderedState=f}return u===null&&(s.lanes=0),[t.memoizedState,s.dispatch]}function oh(t){var n=Mn(),a=n.queue;if(a===null)throw Error(r(311));a.lastRenderedReducer=t;var s=a.dispatch,u=a.pending,f=n.memoizedState;if(u!==null){a.pending=null;var _=u=u.next;do f=t(f,_.action),_=_.next;while(_!==u);Mi(f,n.memoizedState)||(Tn=!0),n.memoizedState=f,n.baseQueue===null&&(n.baseState=f),a.lastRenderedState=f}return[f,s]}function jg(t,n,a){var s=xe,u=Mn(),f=Ae;if(f){if(a===void 0)throw Error(r(407));a=a()}else a=n();var _=!Mi((en||u).memoizedState,a);if(_&&(u.memoizedState=a,Tn=!0),u=u.queue,ch(Jg.bind(null,s,u,t),[t]),t=u.getSnapshot!==n||_||bn!==null&&(bn.memoizedState.tag&1)!==0,Hs(t?9:8,{destroy:void 0},Qg.bind(null,s,u,a,n),null),t){if(s.flags|=2048,rn===null)throw Error(r(349));f||(Fa&127)!==0||Kg(s,n,a)}return a}function Kg(t,n,a){t.flags|=16384,t={getSnapshot:n,value:a},n=xe.updateQueue,n===null?(n=Tu(),xe.updateQueue=n,n.stores=[t]):(a=n.stores,a===null?n.stores=[t]:a.push(t))}function Qg(t,n,a,s){n.value=a,n.getSnapshot=s,$g(n)&&t0(t)}function Jg(t,n,a){return a(function(){$g(n)&&t0(t)})}function $g(t){var n=t.getSnapshot;t=t.value;try{var a=n();return!Mi(t,a)}catch{return!0}}function t0(t){var n=Xr(t,2);n!==null&&mi(n,t,2)}function lh(t){var n=ii();if(typeof t=="function"){var a=t;if(t=a(),es){we(!0);try{a()}finally{we(!1)}}}return n.memoizedState=n.baseState=t,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ha,lastRenderedState:t},n}function e0(t,n,a,s){return t.baseState=a,sh(t,en,typeof s=="function"?s:Ha)}function fM(t,n,a,s,u){if(Du(t))throw Error(r(485));if(t=n.action,t!==null){var f={payload:u,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(_){f.listeners.push(_)}};xt.T!==null?a(!0):f.isTransition=!1,s(f),a=n.pending,a===null?(f.next=n.pending=f,n0(n,f)):(f.next=a.next,n.pending=a.next=f)}}function n0(t,n){var a=n.action,s=n.payload,u=t.state;if(n.isTransition){var f=xt.T,_={};_.types=f!==null?f.types:null,xt.T=_;try{var R=a(u,s),z=xt.S;z!==null&&z(_,R),i0(t,n,R)}catch(et){uh(t,n,et)}finally{f!==null&&_.types!==null&&(f.types=_.types),xt.T=f}}else try{f=a(u,s),i0(t,n,f)}catch(et){uh(t,n,et)}}function i0(t,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(s){a0(t,n,s)},function(s){return uh(t,n,s)}):a0(t,n,a)}function a0(t,n,a){n.status="fulfilled",n.value=a,r0(n),t.state=a,n=t.pending,n!==null&&(a=n.next,a===n?t.pending=null:(a=a.next,n.next=a,n0(t,a)))}function uh(t,n,a){var s=t.pending;if(t.pending=null,s!==null){s=s.next;do n.status="rejected",n.reason=a,r0(n),n=n.next;while(n!==s)}t.action=null}function r0(t){t=t.listeners;for(var n=0;n<t.length;n++)(0,t[n])()}function s0(t,n){return n}function o0(t,n){if(Ae){var a=rn.formState;if(a!==null){t:{var s=xe;if(Ae){if(on){e:{for(var u=on,f=Fi;u.nodeType!==8;){if(!f){u=null;break e}if(u=Gi(u.nextSibling),u===null){u=null;break e}}f=u.data,u=f==="F!"||f==="F"?u:null}if(u){on=Gi(u.nextSibling),s=u.data==="F!";break t}}lr(s)}s=!1}s&&(n=a[0])}}return a=ii(),a.memoizedState=a.baseState=n,s={pending:null,lanes:0,dispatch:null,lastRenderedReducer:s0,lastRenderedState:n},a.queue=s,a=A0.bind(null,xe,s),s.dispatch=a,s=lh(!1),f=mh.bind(null,xe,!1,s.queue),s=ii(),u={state:n,dispatch:null,action:t,pending:null},s.queue=u,a=fM.bind(null,xe,u,f,a),u.dispatch=a,s.memoizedState=t,[n,a,!1]}function l0(t){var n=Mn();return u0(n,en,t)}function u0(t,n,a){if(n=sh(t,n,s0)[0],t=Ru(Ha)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var s=$o(n)}catch(_){throw _===Is?_u:_}else s=n;n=Mn();var u=n.queue,f=u.dispatch;return a!==n.memoizedState&&(xe.flags|=2048,Hs(9,{destroy:void 0},hM.bind(null,u,a),null)),[s,f,t]}function hM(t,n){t.action=n}function c0(t){var n=Mn(),a=en;if(a!==null)return u0(n,a,t);Mn(),n=n.memoizedState,a=Mn();var s=a.queue.dispatch;return a.memoizedState=t,[n,s,!1]}function Hs(t,n,a,s){return t={tag:t,create:a,deps:s,inst:n,next:null},n=xe.updateQueue,n===null&&(n=Tu(),xe.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=t.next=t:(s=a.next,a.next=t,t.next=s,n.lastEffect=t),t}function f0(){return Mn().memoizedState}function wu(t,n,a,s){var u=ii();xe.flags|=t,u.memoizedState=Hs(1|n,{destroy:void 0},a,s===void 0?null:s)}function Cu(t,n,a,s){var u=Mn();s=s===void 0?null:s;var f=u.memoizedState.inst;en!==null&&s!==null&&th(s,en.memoizedState.deps)?u.memoizedState=Hs(n,f,a,s):(xe.flags|=t,u.memoizedState=Hs(1|n,f,a,s))}function h0(t,n){wu(8390656,8,t,n)}function ch(t,n){Cu(2048,8,t,n)}function dM(t){xe.flags|=4;var n=xe.updateQueue;if(n===null)n=Tu(),xe.updateQueue=n,n.events=[t];else{var a=n.events;a===null?n.events=[t]:a.push(t)}}function d0(t){var n=Mn().memoizedState;return dM({ref:n,nextImpl:t}),function(){if((Ye&2)!==0)throw Error(r(440));return n.impl.apply(void 0,arguments)}}function p0(t,n){return Cu(4,2,t,n)}function m0(t,n){return Cu(4,4,t,n)}function g0(t,n){if(typeof n=="function"){t=t();var a=n(t);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return t=t(),n.current=t,function(){n.current=null}}function _0(t,n,a){a=a!=null?a.concat([t]):null,Cu(4,4,g0.bind(null,n,t),a)}function fh(){}function v0(t,n){var a=Mn();n=n===void 0?null:n;var s=a.memoizedState;return n!==null&&th(n,s[1])?s[0]:(a.memoizedState=[t,n],t)}function x0(t,n){var a=Mn();n=n===void 0?null:n;var s=a.memoizedState;if(n!==null&&th(n,s[1]))return s[0];if(s=t(),es){we(!0);try{t()}finally{we(!1)}}return a.memoizedState=[s,n],s}function hh(t,n,a){return a===void 0||(Fa&1073741824)!==0&&(Pe&261930)===0?t.memoizedState=n:(t.memoizedState=a,t=C_(),xe.lanes|=t,Sr|=t,a)}function S0(t,n,a,s){return Mi(a,n)?a:pr.current!==null?(t=hh(t,a,s),Mi(t,n)||(Tn=!0),t):(Fa&106)===0||(Fa&1073741824)!==0&&(Pe&261930)===0?(Tn=!0,t.memoizedState=a):(t=C_(),xe.lanes|=t,Sr|=t,n)}function y0(t,n,a,s,u){var f=Dt.p;Dt.p=f!==0&&8>f?f:8;var _=xt.T,R={};R.types=_!==null?_.types:null,xt.T=R,mh(t,!1,n,a);try{var z=u(),et=xt.S;if(et!==null&&et(R,z),z!==null&&typeof z=="object"&&typeof z.then=="function"){var dt=lM(z,s);tl(t,n,dt,Ri(t))}else tl(t,n,s,Ri(t))}catch(bt){tl(t,n,{then:function(){},status:"rejected",reason:bt},Ri())}finally{Dt.p=f,_!==null&&R.types!==null&&(_.types=R.types),xt.T=_}}function pM(){}function dh(t,n,a,s){if(t.tag!==5)throw Error(r(476));var u=M0(t).queue;y0(t,u,n,Le,a===null?pM:function(){return E0(t),a(s)})}function M0(t){var n=t.memoizedState;if(n!==null)return n;n={memoizedState:Le,baseState:Le,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ha,lastRenderedState:Le},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ha,lastRenderedState:a},next:null},t.memoizedState=n,t=t.alternate,t!==null&&(t.memoizedState=n),n}function E0(t){var n=M0(t);n.next===null&&(n=t.alternate.memoizedState),tl(t,n.next.queue,{},Ri())}function ph(){return Hn(ro)}function b0(){return Mn().memoizedState}function T0(){return Mn().memoizedState}function mM(t){for(var n=t.return;n!==null;){switch(n.tag){case 24:case 3:var a=Ri();t=hr(a);var s=dr(n,t,a);s!==null&&(mi(s,n,a),Zo(s,n,a)),n={cache:Vf()},t.payload=n;return}n=n.return}}function gM(t,n,a){var s=Ri();a={lane:s,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},Du(t)?R0(n,a):(a=Lf(t,n,a,s),a!==null&&(mi(a,t,s),w0(a,n,s)))}function A0(t,n,a){var s=Ri();tl(t,n,a,s)}function tl(t,n,a,s){var u={lane:s,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(Du(t))R0(n,u);else{var f=t.alternate;if(t.lanes===0&&(f===null||f.lanes===0)&&(f=n.lastRenderedReducer,f!==null))try{var _=n.lastRenderedState,R=f(_,a);if(u.hasEagerState=!0,u.eagerState=R,Mi(R,_))return ou(t,n,u,0),rn===null&&su(),!1}catch{}if(a=Lf(t,n,u,s),a!==null)return mi(a,t,s),w0(a,n,s),!0}return!1}function mh(t,n,a,s){if(s={lane:2,revertLane:rd(),gesture:null,action:s,hasEagerState:!1,eagerState:null,next:null},Du(t)){if(n)throw Error(r(479))}else n=Lf(t,a,s,2),n!==null&&mi(n,t,2)}function Du(t){var n=t.alternate;return t===xe||n!==null&&n===xe}function R0(t,n){Bs=Eu=!0;var a=t.pending;a===null?n.next=n:(n.next=a.next,a.next=n),t.pending=n}function w0(t,n,a){if((a&4194048)!==0){var s=n.lanes;s&=t.pendingLanes,a|=s,n.lanes=a,oa(t,a)}}var Nu={readContext:Hn,use:Au,useCallback:Sn,useContext:Sn,useEffect:Sn,useImperativeHandle:Sn,useLayoutEffect:Sn,useInsertionEffect:Sn,useMemo:Sn,useReducer:Sn,useRef:Sn,useState:Sn,useDebugValue:Sn,useDeferredValue:Sn,useTransition:Sn,useSyncExternalStore:Sn,useId:Sn,useHostTransitionStatus:Sn,useFormState:Sn,useActionState:Sn,useOptimistic:Sn,useMemoCache:Sn,useCacheRefresh:Sn,useEffectEvent:Sn},C0={readContext:Hn,use:Au,useCallback:function(t,n){return ii().memoizedState=[t,n===void 0?null:n],t},useContext:Hn,useEffect:h0,useImperativeHandle:function(t,n,a){a=a!=null?a.concat([t]):null,wu(4194308,4,g0.bind(null,n,t),a)},useLayoutEffect:function(t,n){return wu(4194308,4,t,n)},useInsertionEffect:function(t,n){wu(4,2,t,n)},useMemo:function(t,n){var a=ii();n=n===void 0?null:n;var s=t();if(es){we(!0);try{t()}finally{we(!1)}}return a.memoizedState=[s,n],s},useReducer:function(t,n,a){var s=ii();if(a!==void 0){var u=a(n);if(es){we(!0);try{a(n)}finally{we(!1)}}}else u=n;return s.memoizedState=s.baseState=u,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:u},s.queue=t,t=t.dispatch=gM.bind(null,xe,t),[s.memoizedState,t]},useRef:function(t){var n=ii();return t={current:t},n.memoizedState=t},useState:function(t){t=lh(t);var n=t.queue,a=A0.bind(null,xe,n);return n.dispatch=a,[t.memoizedState,a]},useDebugValue:fh,useDeferredValue:function(t,n){var a=ii();return hh(a,t,n)},useTransition:function(){var t=lh(!1);return t=y0.bind(null,xe,t.queue,!0,!1),ii().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,n,a){var s=xe,u=ii();if(Ae){if(a===void 0)throw Error(r(407));a=a()}else{if(a=n(),rn===null)throw Error(r(349));(Pe&127)!==0||Kg(s,n,a)}u.memoizedState=a;var f={value:a,getSnapshot:n};return u.queue=f,h0(Jg.bind(null,s,f,t),[t]),s.flags|=2048,Hs(9,{destroy:void 0},Qg.bind(null,s,f,a,n),null),a},useId:function(){var t=ii(),n=rn.identifierPrefix;if(Ae){var a=fa,s=ca;a=(s&~(1<<32-de(s)-1)).toString(32)+a,n="_"+n+"R_"+a,a=bu++,0<a&&(n+="H"+a.toString(32)),n+="_"}else a=uM++,n="_"+n+"r_"+a.toString(32)+"_";return t.memoizedState=n},useHostTransitionStatus:ph,useFormState:o0,useActionState:o0,useOptimistic:function(t){var n=ii();n.memoizedState=n.baseState=t;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=mh.bind(null,xe,!0,a),a.dispatch=n,[t,n]},useMemoCache:rh,useCacheRefresh:function(){return ii().memoizedState=mM.bind(null,xe)},useEffectEvent:function(t){var n=ii(),a={impl:t};return n.memoizedState=a,function(){if((Ye&2)!==0)throw Error(r(440));return a.impl.apply(void 0,arguments)}}},D0={readContext:Hn,use:Au,useCallback:v0,useContext:Hn,useEffect:ch,useImperativeHandle:_0,useInsertionEffect:p0,useLayoutEffect:m0,useMemo:x0,useReducer:Ru,useRef:f0,useState:function(){return Ru(Ha)},useDebugValue:fh,useDeferredValue:function(t,n){var a=Mn();return S0(a,en.memoizedState,t,n)},useTransition:function(){var t=Ru(Ha)[0],n=Mn().memoizedState;return[typeof t=="boolean"?t:$o(t),n]},useSyncExternalStore:jg,useId:b0,useHostTransitionStatus:ph,useFormState:l0,useActionState:l0,useOptimistic:function(t,n){var a=Mn();return e0(a,en,t,n)},useMemoCache:rh,useCacheRefresh:T0,useEffectEvent:d0},_M={readContext:Hn,use:Au,useCallback:v0,useContext:Hn,useEffect:ch,useImperativeHandle:_0,useInsertionEffect:p0,useLayoutEffect:m0,useMemo:x0,useReducer:oh,useRef:f0,useState:function(){return oh(Ha)},useDebugValue:fh,useDeferredValue:function(t,n){var a=Mn();return en===null?hh(a,t,n):S0(a,en.memoizedState,t,n)},useTransition:function(){var t=oh(Ha)[0],n=Mn().memoizedState;return[typeof t=="boolean"?t:$o(t),n]},useSyncExternalStore:jg,useId:b0,useHostTransitionStatus:ph,useFormState:c0,useActionState:c0,useOptimistic:function(t,n){var a=Mn();return en!==null?e0(a,en,t,n):(a.baseState=t,[t,a.queue.dispatch])},useMemoCache:rh,useCacheRefresh:T0,useEffectEvent:d0};function gh(t,n,a,s){n=t.memoizedState,a=a(s,n),a=a==null?n:L({},n,a),t.memoizedState=a,t.lanes===0&&(t.updateQueue.baseState=a)}var _h={enqueueSetState:function(t,n,a){t=t._reactInternals;var s=Ri(),u=hr(s);u.payload=n,a!=null&&(u.callback=a),n=dr(t,u,s),n!==null&&(mi(n,t,s),Zo(n,t,s))},enqueueReplaceState:function(t,n,a){t=t._reactInternals;var s=Ri(),u=hr(s);u.tag=1,u.payload=n,a!=null&&(u.callback=a),n=dr(t,u,s),n!==null&&(mi(n,t,s),Zo(n,t,s))},enqueueForceUpdate:function(t,n){t=t._reactInternals;var a=Ri(),s=hr(a);s.tag=2,n!=null&&(s.callback=n),n=dr(t,s,a),n!==null&&(mi(n,t,a),Zo(n,t,a))}};function N0(t,n,a,s,u,f,_){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(s,f,_):n.prototype&&n.prototype.isPureReactComponent?!Ho(a,s)||!Ho(u,f):!0}function U0(t,n,a,s){t=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,s),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,s),n.state!==t&&_h.enqueueReplaceState(n,n.state,null)}function ns(t,n){var a=n;if("ref"in n){a={};for(var s in n)s!=="ref"&&(a[s]=n[s])}if(t=t.defaultProps){a===n&&(a=L({},a));for(var u in t)a[u]===void 0&&(a[u]=t[u])}return a}function L0(t){ru(t)}function O0(t){console.error(t)}function P0(t){ru(t)}function Uu(t,n){try{var a=t.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(s){setTimeout(function(){throw s})}}function I0(t,n,a){try{var s=t.onCaughtError;s(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(u){setTimeout(function(){throw u})}}function vh(t,n,a){return a=hr(a),a.tag=3,a.payload={element:null},a.callback=function(){Uu(t,n)},a}function z0(t){return t=hr(t),t.tag=3,t}function B0(t,n,a,s){var u=a.type.getDerivedStateFromError;if(typeof u=="function"){var f=s.value;t.payload=function(){return u(f)},t.callback=function(){I0(n,a,s)}}var _=a.stateNode;_!==null&&typeof _.componentDidCatch=="function"&&(t.callback=function(){I0(n,a,s),typeof u!="function"&&(yr===null?yr=new Set([this]):yr.add(this));var R=s.stack;this.componentDidCatch(s.value,{componentStack:R!==null?R:""})})}function vM(t,n,a,s,u){if(a.flags|=32768,s!==null&&typeof s=="object"&&typeof s.then=="function"){if(n=a.alternate,n!==null&&Zr(n,a,u,!0),a=Gn.current,a!==null){switch(a.tag){case 31:case 13:case 19:return Kn===null?$u():a.alternate===null&&yn===0&&(yn=3),a.flags&=-257,a.flags|=65536,a.lanes=u,s===vu?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([s]):n.add(s),nd(t,s,u)),!1;case 22:return a.flags|=65536,s===vu?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([s])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([s]):a.add(s)),nd(t,s,u)),!1}throw Error(r(435,a.tag))}return nd(t,s,u),$u(),!1}if(Ae)return n=Gn.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=u,s!==Bf&&(t=Error(r(422),{cause:s}),ko(Ii(t,a)))):(s!==Bf&&(n=Error(r(423),{cause:s}),ko(Ii(n,a))),t=t.current.alternate,t.flags|=65536,u&=-u,t.lanes|=u,s=Ii(s,a),u=vh(t.stateNode,s,u),Zf(t,u),yn!==4&&(yn=2)),!1;var f=Error(r(520),{cause:s});if(f=Ii(f,a),ll===null?ll=[f]:ll.push(f),yn!==4&&(yn=2),n===null)return!0;s=Ii(s,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,t=u&-u,a.lanes|=t,t=vh(a.stateNode,s,t),Zf(a,t),!1;case 1:if(n=a.type,f=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(yr===null||!yr.has(f))))return a.flags|=65536,u&=-u,a.lanes|=u,u=z0(u),B0(u,t,a,s),Zf(a,u),!1;break;case 22:if(a.memoizedState!==null)return a.flags|=65536,!1}a=a.return}while(a!==null);return!1}var xh=Error(r(461)),Tn=!1;function Dn(t,n,a,s){n.child=t===null?Vg(n,null,a,s):ts(n,t.child,a,s)}function F0(t,n,a,s,u){a=a.render;var f=n.ref;if("ref"in s){var _={};for(var R in s)R!=="ref"&&(_[R]=s[R])}else _=s;return jr(n),s=eh(t,n,a,_,f,u),R=nh(),t!==null&&!Tn?(ih(t,n,u),Ga(t,n,u)):(Ae&&R&&fu(n),n.flags|=1,Dn(t,n,s,u),n.child)}function H0(t,n,a,s,u){if(t===null){var f=a.type;return typeof f=="function"&&!Of(f)&&f.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=f,G0(t,n,f,s,u)):(t=uu(a.type,null,s,n,n.mode,u),t.ref=n.ref,t.return=n,n.child=t)}if(f=t.child,!Rh(t,u)){var _=f.memoizedProps;if(a=a.compare,a=a!==null?a:Ho,a(_,s)&&t.ref===n.ref)return Ga(t,n,u)}return n.flags|=1,t=Pa(f,s),t.ref=n.ref,t.return=n,n.child=t}function G0(t,n,a,s,u){if(t!==null){var f=t.memoizedProps;if(Ho(f,s)&&t.ref===n.ref)if(Tn=!1,n.pendingProps=s=f,Rh(t,u))(t.flags&131072)!==0&&(Tn=!0);else return n.lanes=t.lanes,Ga(t,n,u)}return Sh(t,n,a,s,u)}function V0(t,n,a,s){var u=s.children,f=t!==null?t.memoizedState:null;if(t===null&&n.stateNode===null&&(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),s.mode==="hidden"){if((n.flags&128)!==0){if(f=f!==null?f.baseLanes|a:a,t!==null){for(s=n.child=t.child,u=0;s!==null;)u=u|s.lanes|s.childLanes,s=s.sibling;s=u&~f}else s=0,n.child=null;return k0(t,n,f,a,s)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},t!==null&&gu(n,f!==null?f.cachePool:null),f!==null?Wg(n,f):Kf(),Yg(n);else return s=n.lanes=536870912,k0(t,n,f!==null?f.baseLanes|a:a,a,s)}else f!==null?(gu(n,f.cachePool),Wg(n,f),gr(),n.memoizedState=null):(t!==null&&gu(n,null),Kf(),gr());return Dn(t,n,u,a),n.child}function el(t,n){return t!==null&&t.tag===22||n.stateNode!==null||(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.sibling}function k0(t,n,a,s,u){var f=Xf();return f=f===null?null:{parent:En._currentValue,pool:f},n.memoizedState={baseLanes:a,cachePool:f},t!==null&&gu(n,null),Kf(),Yg(n),t!==null&&Zr(t,n,s,!0),n.childLanes=u,null}function Lu(t,n){return n=Ou({mode:n.mode,children:n.children},t.mode),n.ref=t.ref,t.child=n,n.return=t,n}function X0(t,n,a){return ts(n,t.child,null,a),t=Lu(n,n.pendingProps),t.flags|=2,Ei(n),n.memoizedState=null,t}function xM(t,n,a){var s=n.pendingProps,u=(n.flags&128)!==0;if(n.flags&=-129,t===null){if(Ae){if(s.mode==="hidden")return t=Lu(n,s),n.lanes=536870912,t.memoizedState={baseLanes:0,cachePool:null},el(null,t);if(Jf(n),(t=on)?(t=gv(t,Fi),t=t!==null&&t.data==="&"?t:null,t!==null&&(n.memoizedState={dehydrated:t,treeContext:sr!==null?{id:ca,overflow:fa}:null,retryLane:536870912,hydrationErrors:null},a=Rg(t),a.return=n,n.child=a,On=n,on=null)):t=null,t===null)throw lr(n);return n.lanes=536870912,null}return Lu(n,s)}var f=t.memoizedState;if(f!==null){var _=f.dehydrated;if(Jf(n),u)if(n.flags&256)n.flags&=-257,n=X0(t,n,a);else if(n.memoizedState!==null)n.child=t.child,n.flags|=128,n=null;else throw Error(r(558));else if(Tn||Zr(t,n,a,!1),u=(a&t.childLanes)!==0,Tn||u){if(pr.current===null){if(s=rn,s!==null&&(_=Gr(s,a),_!==0&&_!==f.retryLane))throw f.retryLane=_,Xr(t,_),mi(s,t,_),xh;$u()}n=X0(t,n,a)}else t=f.treeContext,on=Gi(_.nextSibling),On=n,Ae=!0,or=null,Fi=!1,t!==null&&Dg(n,t),n=Lu(n,s),n.flags|=134221824;return n}return t=Pa(t.child,{mode:s.mode,children:s.children}),t.ref=n.ref,n.child=t,t.return=n,t}function Gs(t,n){var a=n.ref;if(a===null)t!==null&&t.ref!==null&&(n.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(r(284));(t===null||t.ref!==a)&&(n.flags|=4194816)}}function Sh(t,n,a,s,u){return jr(n),a=eh(t,n,a,s,void 0,u),s=nh(),t!==null&&!Tn?(ih(t,n,u),Ga(t,n,u)):(Ae&&s&&fu(n),n.flags|=1,Dn(t,n,a,u),n.child)}function W0(t,n,a,s,u,f){return jr(n),n.updateQueue=null,a=Zg(n,s,a,u),qg(t),s=nh(),t!==null&&!Tn?(ih(t,n,f),Ga(t,n,f)):(Ae&&s&&fu(n),n.flags|=1,Dn(t,n,a,f),n.child)}function Y0(t,n,a,s,u){if(jr(n),n.stateNode===null){var f=Ns,_=a.contextType;typeof _=="object"&&_!==null&&(f=Hn(_)),f=new a(s,f),n.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,f.updater=_h,n.stateNode=f,f._reactInternals=n,f=n.stateNode,f.props=s,f.state=n.memoizedState,f.refs={},Yf(n),_=a.contextType,f.context=typeof _=="object"&&_!==null?Hn(_):Ns,f.state=n.memoizedState,_=a.getDerivedStateFromProps,typeof _=="function"&&(gh(n,a,_,s),f.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(_=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),_!==f.state&&_h.enqueueReplaceState(f,f.state,null),Ko(n,s,f,u),jo(),f.state=n.memoizedState),typeof f.componentDidMount=="function"&&(n.flags|=4194308),s=!0}else if(t===null){f=n.stateNode;var R=n.memoizedProps,z=ns(a,R);f.props=z;var et=f.context,dt=a.contextType;_=Ns,typeof dt=="object"&&dt!==null&&(_=Hn(dt));var bt=a.getDerivedStateFromProps;dt=typeof bt=="function"||typeof f.getSnapshotBeforeUpdate=="function",R=n.pendingProps!==R,dt||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(R||et!==_)&&U0(n,f,s,_),fr=!1;var J=n.memoizedState;f.state=J,Ko(n,s,f,u),jo(),et=n.memoizedState,R||J!==et||fr?(typeof bt=="function"&&(gh(n,a,bt,s),et=n.memoizedState),(z=fr||N0(n,a,z,s,J,et,_))?(dt||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount()),typeof f.componentDidMount=="function"&&(n.flags|=4194308)):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=s,n.memoizedState=et),f.props=s,f.state=et,f.context=_,s=z):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),s=!1)}else{f=n.stateNode,qf(t,n),_=n.memoizedProps,dt=ns(a,_),f.props=dt,bt=n.pendingProps,J=f.context,et=a.contextType,z=Ns,typeof et=="object"&&et!==null&&(z=Hn(et)),R=a.getDerivedStateFromProps,(et=typeof R=="function"||typeof f.getSnapshotBeforeUpdate=="function")||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(_!==bt||J!==z)&&U0(n,f,s,z),fr=!1,J=n.memoizedState,f.state=J,Ko(n,s,f,u),jo();var ft=n.memoizedState;_!==bt||J!==ft||fr||t!==null&&t.dependencies!==null&&pu(t.dependencies)?(typeof R=="function"&&(gh(n,a,R,s),ft=n.memoizedState),(dt=fr||N0(n,a,dt,s,J,ft,z)||t!==null&&t.dependencies!==null&&pu(t.dependencies))?(et||typeof f.UNSAFE_componentWillUpdate!="function"&&typeof f.componentWillUpdate!="function"||(typeof f.componentWillUpdate=="function"&&f.componentWillUpdate(s,ft,z),typeof f.UNSAFE_componentWillUpdate=="function"&&f.UNSAFE_componentWillUpdate(s,ft,z)),typeof f.componentDidUpdate=="function"&&(n.flags|=4),typeof f.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof f.componentDidUpdate!="function"||_===t.memoizedProps&&J===t.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||_===t.memoizedProps&&J===t.memoizedState||(n.flags|=1024),n.memoizedProps=s,n.memoizedState=ft),f.props=s,f.state=ft,f.context=z,s=dt):(typeof f.componentDidUpdate!="function"||_===t.memoizedProps&&J===t.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||_===t.memoizedProps&&J===t.memoizedState||(n.flags|=1024),s=!1)}return f=s,Gs(t,n),s=(n.flags&128)!==0,f||s?(f=n.stateNode,a=s&&typeof a.getDerivedStateFromError!="function"?null:f.render(),n.flags|=1,t!==null&&s?(n.child=ts(n,t.child,null,u),n.child=ts(n,null,a,u)):Dn(t,n,a,u),n.memoizedState=f.state,t=n.child):t=Ga(t,n,u),t}function q0(t,n,a,s){return Yr(),n.flags|=256,Dn(t,n,a,s),n.child}var yh={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Mh(t){return{baseLanes:t,cachePool:Ig()}}function Eh(t,n,a){return t=t!==null?t.childLanes&~a:0,n&&(t|=Ai),t}function Z0(t,n,a){var s=n.pendingProps,u=!1,f=(n.flags&128)!==0,_;if((_=f)||(_=t!==null&&t.memoizedState===null?!1:(Vn.current&2)!==0),_&&(u=!0,n.flags&=-129),_=(n.flags&32)!==0,n.flags&=-33,t===null){if(Ae){if(u?mr(n):gr(),(t=on)?(t=gv(t,Fi),t=t!==null&&t.data!=="&"?t:null,t!==null&&(n.memoizedState={dehydrated:t,treeContext:sr!==null?{id:ca,overflow:fa}:null,retryLane:536870912,hydrationErrors:null},a=Rg(t),a.return=n,n.child=a,On=n,on=null)):t=null,t===null)throw lr(n);return Md(t)?n.lanes=32:n.lanes=536870912,null}return f=s.children,s=s.fallback,u?(gr(),u=n.mode,f=Ou({mode:"hidden",children:f},u),s=Wr(s,u,a,null),f.return=n,s.return=n,f.sibling=s,n.child=f,s=n.child,s.memoizedState=Mh(a),s.childLanes=Eh(t,_,a),n.memoizedState=yh,el(null,s)):(mr(n),bh(n,f))}var R=t.memoizedState;if(R!==null){var z=R.dehydrated;if(z!==null)return SM(t,n,f,_,s,z,R,a)}return u?(gr(),u=s.fallback,f=n.mode,R=t.child,z=R.sibling,s=Pa(R,{mode:"hidden",children:s.children}),s.subtreeFlags=R.subtreeFlags&1206910976,z!==null?u=Pa(z,u):(u=Wr(u,f,a,null),u.flags|=2),u.return=n,s.return=n,s.sibling=u,n.child=s,el(null,s),s=n.child,u=t.child.memoizedState,u===null?u=Mh(a):(f=u.cachePool,f!==null?(R=En._currentValue,f=f.parent!==R?{parent:R,pool:R}:f):f=Ig(),u={baseLanes:u.baseLanes|a,cachePool:f}),s.memoizedState=u,s.childLanes=Eh(t,_,a),n.memoizedState=yh,el(t.child,s)):(mr(n),a=t.child,t=a.sibling,a=Pa(a,{mode:"visible",children:s.children}),a.return=n,a.sibling=null,t!==null&&(_=n.deletions,_===null?(n.deletions=[t],n.flags|=16):_.push(t)),n.child=a,n.memoizedState=null,a)}function bh(t,n){return n=Ou({mode:"visible",children:n},t.mode),n.return=t,t.child=n}function Ou(t,n){return t=fi(22,t,null,n),t.lanes=0,t}function Pu(t,n,a){return ts(n,t.child,null,a),t=bh(n,n.pendingProps.children),t.flags|=2,n.memoizedState=null,t}function SM(t,n,a,s,u,f,_,R){if(a)return n.flags&256?(mr(n),n.flags&=-257,Pu(t,n,R)):n.memoizedState!==null?(gr(),n.child=t.child,n.flags|=128,null):(gr(),f=u.fallback,_=n.mode,u=Ou({mode:"visible",children:u.children},_),f=Wr(f,_,R,null),f.flags|=2,u.return=n,f.return=n,u.sibling=f,n.child=u,ts(n,t.child,null,R),u=n.child,u.memoizedState=Mh(R),u.childLanes=Eh(t,s,R),n.memoizedState=yh,el(null,u));if(mr(n),Md(f)){if(s=f.nextSibling&&f.nextSibling.dataset,s)var z=s.dgst;return s=z,s!==""&&(u=Error(r(419)),u.stack="",u.digest=s,ko({value:u,source:null,stack:null})),Pu(t,n,R)}if(Tn||Zr(t,n,R,!1),s=(R&t.childLanes)!==0,Tn||s){if(pr.current!==null)return Pu(t,n,R);if(s=rn,s!==null&&(u=Gr(s,R),u!==0&&u!==_.retryLane))throw _.retryLane=u,Xr(t,u),mi(s,t,u),xh;return yd(f)||$u(),Pu(t,n,R)}return yd(f)?(n.flags|=192,n.child=t.child,null):(t=_.treeContext,on=Gi(f.nextSibling),On=n,Ae=!0,or=null,Fi=!1,t!==null&&Dg(n,t),n=bh(n,u.children),n.flags|=134221824,n)}function j0(t,n,a){t.lanes|=n;var s=t.alternate;s!==null&&(s.lanes|=n),du(t.return,n,a)}function K0(t){for(var n=null;t!==null;){var a=t.alternate;a!==null&&Mu(a)===null&&(n=t),t=t.sibling}return n}function Iu(t,n,a,s,u,f){var _=t.memoizedState;_===null?t.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:s,tail:a,tailMode:u,treeForkCount:f}:(_.isBackwards=n,_.rendering=null,_.renderingStartTime=0,_.last=s,_.tail=a,_.tailMode=u,_.treeForkCount=f)}function Th(t){var n=t.child;for(t.child=null;n!==null;){var a=n.sibling;n.sibling=t.child,t.child=n,n=a}}function Ah(t,n,a){var s=n.pendingProps,u=s.revealOrder,f=s.tail;s=s.children;var _=Vn.current;if(n.flags&128)return Qo(n,_),null;var R=(_&2)!==0;if(R?(_=_&1|2,n.flags|=128):_&=1,Qo(n,_),u==="backwards"&&t!==null?(Th(t),Dn(t,n,s,a),Th(t)):Dn(t,n,s,a),s=Ae?Vo:0,!R&&t!==null&&(t.flags&128)!==0)t:for(t=n.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&j0(t,a,n);else if(t.tag===19)j0(t,a,n);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break t;for(;t.sibling===null;){if(t.return===null||t.return===n)break t;t=t.return}t.sibling.return=t.return,t=t.sibling}switch(u){case"backwards":a=K0(n.child),a===null?(u=n.child,n.child=null):(u=a.sibling,a.sibling=null,Th(n)),Iu(n,!0,u,null,f,s);break;case"unstable_legacy-backwards":for(a=null,u=n.child,n.child=null;u!==null;){if(t=u.alternate,t!==null&&Mu(t)===null){n.child=u;break}t=u.sibling,u.sibling=a,a=u,u=t}Iu(n,!0,a,null,f,s);break;case"together":Iu(n,!1,null,null,void 0,s);break;case"independent":n.memoizedState=null;break;default:a=K0(n.child),a===null?(u=n.child,n.child=null):(u=a.sibling,a.sibling=null),Iu(n,!1,u,a,f,s)}return n.child}function Q0(t,n,a){var s=n.pendingProps;return ur(n,n.type,s.value),Dn(t,n,s.children,a),n.child}function Ga(t,n,a){if(t!==null&&(n.dependencies=t.dependencies),Sr|=n.lanes,(a&n.childLanes)===0)if(t!==null){if(Zr(t,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(t!==null&&n.child!==t.child)throw Error(r(153));if(n.child!==null){for(t=n.child,a=Pa(t,t.pendingProps),n.child=a,a.return=n;t.sibling!==null;)t=t.sibling,a=a.sibling=Pa(t,t.pendingProps),a.return=n;a.sibling=null}return n.child}function Rh(t,n){return(t.lanes&n)!==0?!0:(t=t.dependencies,!!(t!==null&&pu(t)))}function yM(t,n,a){switch(n.tag){case 3:j(n,n.stateNode.containerInfo),ur(n,En,t.memoizedState.cache),Yr();break;case 27:case 5:Be(n);break;case 4:j(n,n.stateNode.containerInfo);break;case 10:ur(n,n.type,n.memoizedProps.value);break;case 31:if(n.memoizedState!==null)return n.flags|=128,Jf(n),null;break;case 13:var s=n.memoizedState;if(s!==null){if(s.dehydrated!==null)return mr(n),n.flags|=128,null;s=Zr(t,n,a,!1);var u=n.child.childLanes;return s||(a&u)!==0?Z0(t,n,a):(mr(n),t=Ga(t,n,a),t!==null?t.sibling:null)}mr(n);break;case 19:if(n.flags&128)return Ah(t,n,a);if(u=(t.flags&128)!==0,s=(a&n.childLanes)!==0,s||(Zr(t,n,a,!1),s=(a&n.childLanes)!==0),u){if(s)return Ah(t,n,a);n.flags|=128}if(u=n.memoizedState,u!==null&&(u.rendering=null,u.tail=null,u.lastEffect=null),Qo(n,Vn.current),s)break;return null;case 22:return n.lanes=0,V0(t,n,a,n.pendingProps);case 24:ur(n,En,t.memoizedState.cache)}return Ga(t,n,a)}function J0(t,n,a){if(t!==null)if(t.memoizedProps!==n.pendingProps)Tn=!0;else{if(!Rh(t,a)&&(n.flags&128)===0)return Tn=!1,yM(t,n,a);Tn=(t.flags&131072)!==0}else Tn=!1,Ae&&(n.flags&1048576)!==0&&Cg(n,Vo,n.index);switch(n.lanes=0,n.tag){case 16:t:{var s=n.pendingProps;if(t=Jr(n.elementType),n.type=t,typeof t=="function")Of(t)?(s=ns(t,s),n.tag=1,n=Y0(null,n,t,s,a)):(n.tag=0,n=Sh(null,n,t,s,a));else{if(t!=null){var u=t.$$typeof;if(u===k){n.tag=11,n=F0(null,n,t,s,a);break t}else if(u===rt){n.tag=14,n=H0(null,n,t,s,a);break t}else if(u===K){n.tag=10,n.type=t,n=Q0(null,n,a);break t}}throw n=Rt(t)||t,Error(r(306,n,""))}}return n;case 0:return Sh(t,n,n.type,n.pendingProps,a);case 1:return s=n.type,u=ns(s,n.pendingProps),Y0(t,n,s,u,a);case 3:t:{if(j(n,n.stateNode.containerInfo),t===null)throw Error(r(387));s=n.pendingProps;var f=n.memoizedState;u=f.element,qf(t,n),Ko(n,s,null,a);var _=n.memoizedState;if(s=_.cache,ur(n,En,s),s!==f.cache&&Gf(n,[En],a,!0),jo(),s=_.element,f.isDehydrated)if(f={element:s,isDehydrated:!1,cache:_.cache},n.updateQueue.baseState=f,n.memoizedState=f,n.flags&256){n=q0(t,n,s,a);break t}else if(s!==u){u=Ii(Error(r(424)),n),ko(u),n=q0(t,n,s,a);break t}else for(t=n.stateNode.containerInfo,t.nodeType===9?t=t.body:t=t.nodeName==="HTML"?t.ownerDocument.body:t,on=Gi(t.firstChild),On=n,Ae=!0,or=null,Fi=!0,a=Vg(n,null,s,a),n.child=a;a;)a.flags=a.flags&-3|134221824,a=a.sibling;else{if(Yr(),s===u){n=Ga(t,n,a);break t}Dn(t,n,s,a)}n=n.child}return n;case 26:return Gs(t,n),t===null?(a=Ev(n.type,null,n.pendingProps,null))?n.memoizedState=a:Ae||(n.stateNode=nv(n.type,n.pendingProps,ze.current,n)):n.memoizedState=Ev(n.type,t.memoizedProps,n.pendingProps,t.memoizedState),null;case 27:return Be(n),t===null&&Ae&&(s=n.stateNode=xv(n.type,n.pendingProps,ze.current),On=n,Fi=!0,u=on,br(n.type)?(Ed=u,on=Gi(s.firstChild)):on=u),Dn(t,n,n.pendingProps.children,a),Gs(t,n),t===null&&(n.flags|=4194304),n.child;case 5:return t===null&&Ae&&((u=s=on)&&(s=mE(s,n.type,n.pendingProps,Fi),s!==null?(n.stateNode=s,On=n,on=Gi(s.firstChild),Fi=!1,u=!0):u=!1),u||lr(n)),Be(n),u=n.type,f=n.pendingProps,_=t!==null?t.memoizedProps:null,s=f.children,pd(u,f)?s=null:_!==null&&pd(u,_)&&(n.flags|=32),n.memoizedState!==null&&(u=eh(t,n,cM,null,null,a),ro._currentValue=u),Gs(t,n),Dn(t,n,s,a),n.child;case 6:return t===null&&Ae&&((t=a=on)&&(a=gE(a,n.pendingProps,Fi),a!==null?(n.stateNode=a,On=n,on=null,t=!0):t=!1),t||lr(n)),null;case 13:return Z0(t,n,a);case 4:return j(n,n.stateNode.containerInfo),s=n.pendingProps,t===null?n.child=ts(n,null,s,a):Dn(t,n,s,a),n.child;case 11:return F0(t,n,n.type,n.pendingProps,a);case 7:return s=n.pendingProps,Gs(t,n),Dn(t,n,s,a),n.child;case 8:return Dn(t,n,n.pendingProps.children,a),n.child;case 12:return Dn(t,n,n.pendingProps.children,a),n.child;case 10:return Q0(t,n,a);case 9:return u=n.type._context,s=n.pendingProps.children,jr(n),u=Hn(u),s=s(u),n.flags|=1,Dn(t,n,s,a),n.child;case 14:return H0(t,n,n.type,n.pendingProps,a);case 15:return G0(t,n,n.type,n.pendingProps,a);case 19:return Ah(t,n,a);case 31:return xM(t,n,a);case 22:return V0(t,n,a,n.pendingProps);case 24:return jr(n),s=Hn(En),t===null?(u=Xf(),u===null&&(u=rn,f=Vf(),u.pooledCache=f,f.refCount++,f!==null&&(u.pooledCacheLanes|=a),u=f),n.memoizedState={parent:s,cache:u},Yf(n),ur(n,En,u)):((t.lanes&a)!==0&&(qf(t,n),Ko(n,null,null,a),jo()),u=t.memoizedState,f=n.memoizedState,u.parent!==s?(u={parent:s,cache:s},n.memoizedState=u,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=u),ur(n,En,s)):(s=f.cache,ur(n,En,s),s!==u.cache&&Gf(n,[En],a,!0))),Dn(t,n,n.pendingProps.children,a),n.child;case 30:return n.stateNode===null&&(n.stateNode={autoName:null,paired:null,clones:null,ref:null}),s=n.pendingProps,s.name!=null&&s.name!=="auto"?n.flags|=t===null?18882560:18874368:Ae&&fu(n),t!==null&&t.memoizedProps.name!==s.name?n.flags|=4194816:Gs(t,n),Dn(t,n,s.children,a),n.child;case 29:throw n.pendingProps}throw Error(r(156,n.tag))}function Va(t){t.flags|=4}function wh(t,n,a,s,u){var f;if((f=(t.mode&32)!==0)&&(f=a===null?Rv(n,s):Rv(n,s)&&(s.src!==a.src||s.srcSet!==a.srcSet)),f){if(t.flags|=16777216,(u&335544128)===u)if(t.stateNode.complete)t.flags|=8192;else if(L_())t.flags|=8192;else throw $r=vu,Wf}else t.flags&=-16777217}function $0(t,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!wv(n))if(L_())t.flags|=8192;else throw $r=vu,Wf}function zu(t,n){n!==null&&(t.flags|=4),t.flags&16384&&(n=t.tag!==22?pn():536870912,t.lanes|=n,Ys|=n)}function nl(t,n){if(!Ae)switch(t.tailMode){case"visible":break;case"collapsed":for(var a=t.tail,s=null;a!==null;)a.alternate!==null&&(s=a),a=a.sibling;s===null?n||t.tail===null?t.tail=null:t.tail.sibling=null:s.sibling=null;break;default:for(n=t.tail,a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?t.tail=null:a.sibling=null}}function ln(t){var n=t.alternate!==null&&t.alternate.child===t.child,a=0,s=0;if(n)for(var u=t.child;u!==null;)a|=u.lanes|u.childLanes,s|=u.subtreeFlags&1206910976,s|=u.flags&1206910976,u.return=t,u=u.sibling;else for(u=t.child;u!==null;)a|=u.lanes|u.childLanes,s|=u.subtreeFlags,s|=u.flags,u.return=t,u=u.sibling;return t.subtreeFlags|=s,t.childLanes=a,n}function MM(t,n,a){var s=n.pendingProps;switch(zf(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ln(n),null;case 1:return ln(n),null;case 3:return a=n.stateNode,s=null,t!==null&&(s=t.memoizedState.cache),n.memoizedState.cache!==s&&(n.flags|=2048),Ba(En),un(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(t===null||t.child===null)&&(Os(n)?Va(n):t===null||t.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,Ff())),ln(n),null;case 26:var u=n.type,f=n.memoizedState;return t===null?(Va(n),f!==null?(ln(n),$0(n,f)):(ln(n),wh(n,u,null,s,a))):f?f!==t.memoizedState?(Va(n),ln(n),$0(n,f)):(ln(n),n.flags&=-16777217):(t=t.memoizedProps,t!==s&&Va(n),ln(n),wh(n,u,t,s,a)),null;case 27:if(I(n),a=ze.current,u=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==s&&Va(n);else{if(!s){if(n.stateNode===null)throw Error(r(166));return ln(n),n.subtreeFlags&=-33554433,null}t=Xe.current,Os(n)?Ng(n):(t=xv(u,s,a),n.stateNode=t,Va(n))}return ln(n),n.subtreeFlags&=-33554433,null;case 5:if(I(n),u=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==s&&Va(n);else{if(!s){if(n.stateNode===null)throw Error(r(166));return ln(n),n.subtreeFlags&=-33554433,null}if(f=Xe.current,Os(n))Ng(n);else{var _=dl(ze.current);switch(f){case 1:f=_.createElementNS("http://www.w3.org/2000/svg",u);break;case 2:f=_.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;default:switch(u){case"svg":f=_.createElementNS("http://www.w3.org/2000/svg",u);break;case"math":f=_.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;case"script":f=_.createElement("div"),f.innerHTML="<script><\/script>",f=f.removeChild(f.firstChild);break;case"select":f=typeof s.is=="string"?_.createElement("select",{is:s.is}):_.createElement("select"),s.multiple?f.multiple=!0:s.size&&(f.size=s.size);break;default:f=typeof s.is=="string"?_.createElement(u,{is:s.is}):_.createElement(u)}}f[A]=n,f[W]=s;t:for(_=n.child;_!==null;){if(_.tag===5||_.tag===6)f.appendChild(_.stateNode);else if(_.tag!==4&&_.tag!==27&&_.child!==null){_.child.return=_,_=_.child;continue}if(_===n)break t;for(;_.sibling===null;){if(_.return===null||_.return===n)break t;_=_.return}_.sibling.return=_.return,_=_.sibling}n.stateNode=f;t:switch(Xn(f,u,s),u){case"button":case"input":case"select":case"textarea":s=!!s.autoFocus;break t;case"img":s=!0;break t;default:s=!1}s&&Va(n)}}return ln(n),n.subtreeFlags&=-33554433,wh(n,n.type,t===null?null:t.memoizedProps,n.pendingProps,a),null;case 6:if(t&&n.stateNode!=null)t.memoizedProps!==s&&Va(n);else{if(typeof s!="string"&&n.stateNode===null)throw Error(r(166));if(t=ze.current,Os(n)){if(t=n.stateNode,a=n.memoizedProps,s=null,u=On,u!==null)switch(u.tag){case 27:case 5:s=u.memoizedProps}t[A]=n,t=!!(t.nodeValue===a||s!==null&&s.suppressHydrationWarning===!0||J_(t.nodeValue,a)),t||lr(n,!0)}else t=dl(t).createTextNode(s),t[A]=n,n.stateNode=t}return ln(n),null;case 31:if(a=n.memoizedState,t===null||t.memoizedState!==null){if(s=Os(n),a!==null){if(t===null){if(!s)throw Error(r(318));if(t=n.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(557));t[A]=n}else Yr(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;ln(n),t=!1}else a=Ff(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=a),t=!0;if(!t)return n.flags&256?(Ei(n),n):(Ei(n),null);if((n.flags&128)!==0)throw Error(r(558))}return ln(n),null;case 13:if(s=n.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(u=Os(n),s!==null&&s.dehydrated!==null){if(t===null){if(!u)throw Error(r(318));if(u=n.memoizedState,u=u!==null?u.dehydrated:null,!u)throw Error(r(317));u[A]=n}else Yr(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;ln(n),u=!1}else u=Ff(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=u),u=!0;if(!u)return n.flags&256?(Ei(n),n):(Ei(n),null)}return Ei(n),(n.flags&128)!==0?(n.lanes=a,n):(a=s!==null,t=t!==null&&t.memoizedState!==null,a&&(s=n.child,u=null,s.alternate!==null&&s.alternate.memoizedState!==null&&s.alternate.memoizedState.cachePool!==null&&(u=s.alternate.memoizedState.cachePool.pool),f=null,s.memoizedState!==null&&s.memoizedState.cachePool!==null&&(f=s.memoizedState.cachePool.pool),f!==u&&(s.flags|=2048)),a!==t&&a&&(n.child.flags|=8192),zu(n,n.updateQueue),ln(n),null);case 4:return un(),t===null&&ud(n.stateNode.containerInfo),n.flags|=67108864,ln(n),null;case 10:return Ba(n.type),ln(n),null;case 19:if($f(n),s=n.memoizedState,s===null)return ln(n),null;if(u=(n.flags&128)!==0,f=s.rendering,f===null)if(u)nl(s,!1);else{if(yn!==0||t!==null&&(t.flags&128)!==0)for(t=n.child;t!==null;){if(f=Mu(t),f!==null){for(n.flags|=128,nl(s,!1),t=f.updateQueue,n.updateQueue=t,zu(n,t),n.subtreeFlags=0,t=a,a=n.child;a!==null;)Ag(a,t),a=a.sibling;return Qo(n,Vn.current&1|2),Ae&&Ia(n,s.treeForkCount),n.child}t=t.sibling}s.tail!==null&&Vt()>ju&&(n.flags|=128,u=!0,nl(s,!1),n.lanes=4194304)}else{if(!u)if(t=Mu(f),t!==null){if(n.flags|=128,u=!0,t=t.updateQueue,n.updateQueue=t,zu(n,t),nl(s,!0),s.tail===null&&s.tailMode!=="collapsed"&&s.tailMode!=="visible"&&!f.alternate&&!Ae)return ln(n),null}else 2*Vt()-s.renderingStartTime>ju&&a!==536870912&&(n.flags|=128,u=!0,nl(s,!1),n.lanes=4194304);s.isBackwards?(f.sibling=n.child,n.child=f):(t=s.last,t!==null?t.sibling=f:n.child=f,s.last=f)}if(s.tail!==null){t=s.tail;t:{for(a=t;a!==null;){if(a.alternate!==null){a=!1;break t}a=a.sibling}a=!0}return s.rendering=t,s.tail=t.sibling,s.renderingStartTime=Vt(),t.sibling=null,f=Vn.current,f=u?f&1|2:f&1,s.tailMode==="visible"||s.tailMode==="collapsed"||!a||Ae?Qo(n,f):(a=f,se(Gn,n),se(Vn,a),Kn===null&&(Kn=n)),Ae&&Ia(n,s.treeForkCount),t}return ln(n),null;case 22:case 23:return Ei(n),Qf(),s=n.memoizedState!==null,t!==null?t.memoizedState!==null!==s&&(n.flags|=8192):s&&(n.flags|=8192),s?(a&536870912)!==0&&(n.flags&128)===0&&(ln(n),n.subtreeFlags&6&&(n.flags|=8192)):ln(n),a=n.updateQueue,a!==null&&zu(n,a.retryQueue),a=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),s=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(s=n.memoizedState.cachePool.pool),s!==a&&(n.flags|=2048),t!==null&&ae(Qr),null;case 24:return a=null,t!==null&&(a=t.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),Ba(En),ln(n),null;case 25:return null;case 30:return n.flags|=33554432,ln(n),null}throw Error(r(156,n.tag))}function EM(t,n){switch(zf(n),n.tag){case 1:return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 3:return Ba(En),un(),t=n.flags,(t&65536)!==0&&(t&128)===0?(n.flags=t&-65537|128,n):null;case 26:case 27:case 5:return I(n),null;case 31:if(n.memoizedState!==null){if(Ei(n),n.alternate===null)throw Error(r(340));Yr()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 13:if(Ei(n),t=n.memoizedState,t!==null&&t.dehydrated!==null){if(n.alternate===null)throw Error(r(340));Yr()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 19:return $f(n),t=n.flags,t&65536?(n.flags=t&-65537|128,t=n.memoizedState,t!==null&&(t.rendering=null,t.tail=null),n.flags|=4,n):null;case 4:return un(),null;case 10:return Ba(n.type),null;case 22:case 23:return Ei(n),Qf(),t!==null&&ae(Qr),t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 24:return Ba(En),null;case 25:return null;default:return null}}function t_(t,n){switch(zf(n),n.tag){case 3:Ba(En),un();break;case 26:case 27:case 5:I(n);break;case 4:un();break;case 31:n.memoizedState!==null&&Ei(n);break;case 13:Ei(n);break;case 19:$f(n);break;case 10:Ba(n.type);break;case 22:case 23:Ei(n),Qf(),t!==null&&ae(Qr);break;case 24:Ba(En)}}function il(t,n){try{var a=n.updateQueue,s=a!==null?a.lastEffect:null;if(s!==null){var u=s.next;a=u;do{if((a.tag&t)===t){s=void 0;var f=a.create,_=a.inst;s=f(),_.destroy=s}a=a.next}while(a!==u)}}catch(R){Ke(n,n.return,R)}}function _r(t,n,a){try{var s=n.updateQueue,u=s!==null?s.lastEffect:null;if(u!==null){var f=u.next;s=f;do{if((s.tag&t)===t){var _=s.inst,R=_.destroy;if(R!==void 0){_.destroy=void 0,u=n;var z=a,et=R;try{et()}catch(dt){Ke(u,z,dt)}}}s=s.next}while(s!==f)}}catch(dt){Ke(n,n.return,dt)}}function e_(t){var n=t.updateQueue;if(n!==null){var a=t.stateNode;try{Xg(n,a)}catch(s){Ke(t,t.return,s)}}}function n_(t,n,a){a.props=ns(t.type,t.memoizedProps),a.state=t.memoizedState;try{a.componentWillUnmount()}catch(s){Ke(t,n,s)}}function ha(t,n){try{var a=t.ref;if(a!==null){switch(t.tag){case 26:case 27:case 5:var s=t.stateNode;break;case 30:var u=t.stateNode,f=La(t.memoizedProps,u);(u.ref===null||u.ref.name!==f)&&(u.ref=uv(f)),s=u.ref;break;case 7:if(t.stateNode===null){var _=new wi(t);g(t.child,!1,dE,_,void 0,void 0),t.stateNode=_}s=t.stateNode;break;default:s=t.stateNode}typeof a=="function"?t.refCleanup=a(s):a.current=s}}catch(R){Ke(t,n,R)}}function kn(t,n){var a=t.ref,s=t.refCleanup;if(a!==null)if(typeof s=="function")try{s()}catch(u){Ke(t,n,u)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(u){Ke(t,n,u)}else a.current=null}function Bu(t,n){if((t.tag===5||t.tag===27||t.tag===6)&&t.alternate===null&&n!==null)for(var a=0;a<n.length;a++)mv(t.stateNode,n[a])}function i_(t){for(var n=t.return;n!==null&&(Dh(n)&&mv(t.stateNode,n.stateNode),!Ch(n));)n=n.return}function al(t){for(var n=t.return;n!==null&&(Dh(n)&&pE(t.stateNode,n.stateNode),!Ch(n));)n=n.return}function Ch(t){return t.tag===5||t.tag===3||t.tag===27}function Dh(t){return t&&t.tag===7&&t.stateNode!==null}function Nh(t){var n=t.type,a=t.memoizedProps,s=t.stateNode;try{t:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&s.focus();break t;case"img":a.src?s.src=a.src:a.srcSet&&(s.srcset=a.srcSet)}}catch(u){Ke(t,t.return,u)}}function Uh(t,n,a){try{var s=t.stateNode;jM(s,t.type,a,n),s[W]=n}catch(u){Ke(t,t.return,u)}}function a_(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&br(t.type)||t.tag===4}function Lh(t){t:for(;;){for(;t.sibling===null;){if(t.return===null||a_(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&br(t.type)||t.flags&2||t.child===null||t.tag===4)continue t;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Oh(t,n,a,s){var u=t.tag;if(u===5||u===6)u=t.stateNode,n?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(u,n):(n=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,n.appendChild(u),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=ua)),Bu(t,s),Te=!0;else if(u!==4&&(u===27&&(Bu(t,s),s=null,br(t.type)&&(a=t.stateNode,n=null)),t=t.child,t!==null))for(Oh(t,n,a,s),t=t.sibling;t!==null;)Oh(t,n,a,s),t=t.sibling}function Fu(t,n,a,s){var u=t.tag;if(u===5||u===6)u=t.stateNode,n?a.insertBefore(u,n):a.appendChild(u),Bu(t,s),Te=!0;else if(u!==4&&(u===27&&(Bu(t,s),s=null,br(t.type)&&(a=t.stateNode)),t=t.child,t!==null))for(Fu(t,n,a,s),t=t.sibling;t!==null;)Fu(t,n,a,s),t=t.sibling}function r_(t){var n=t.stateNode,a=t.memoizedProps;try{for(var s=t.type,u=n.attributes;u.length;)n.removeAttributeNode(u[0]);Xn(n,s,a),n[A]=t,n[W]=a}catch(f){Ke(t,t.return,f)}}var Hu=!1,bi=null;function s_(t){(t.tag===30||(t.subtreeFlags&33554432)!==0)&&(Hu=!0)}var da=null;function o_(){var t=da;return da=null,t}var hi=0;function Vs(t,n,a,s,u){return hi=0,l_(t.child,n,a,s,u)}function l_(t,n,a,s,u){for(var f=!1;t!==null;){if(t.tag===5){var _=t.stateNode;if(s!==null){var R=_d(_);s.push(R),R.view&&(f=!0)}else f||_d(_).view&&(f=!0);Hu=!0,ov(_,hi===0?n:n+"_"+hi,a),hi++}else(t.tag!==22||t.memoizedState===null)&&(t.tag===30&&u||l_(t.child,n,a,s,u)&&(f=!0));t=t.sibling}return f}function pa(t,n){for(;t!==null;)t.tag===5?lv(t.stateNode,t.memoizedProps):(t.tag!==22||t.memoizedState===null)&&(t.tag===30&&n||pa(t.child,n)),t=t.sibling}function Gu(t){if((t.subtreeFlags&18874368)!==0)for(t=t.child;t!==null;){if((t.tag!==22||t.memoizedState===null)&&(Gu(t),t.tag===30&&(t.flags&18874368)!==0&&t.stateNode.paired)){var n=t.memoizedProps;if(n.name==null||n.name==="auto")throw Error(r(544));var a=n.name;n=Oa(n.default,n.share),n!=="none"&&(Vs(t,a,n,null,!1)||pa(t.child,!1))}t=t.sibling}}function Ph(t,n){if(t.tag===30){var a=t.stateNode,s=t.memoizedProps,u=La(s,a),f=Oa(s.default,a.paired?s.share:s.enter);f!=="none"?Vs(t,u,f,null,!1)?(Gu(t),a.paired||n||Ks(t,s.onEnter)):pa(t.child,!1):Gu(t)}else if((t.subtreeFlags&33554432)!==0)for(t=t.child;t!==null;)Ph(t,n),t=t.sibling;else Gu(t)}function Ih(t){if(bi!==null&&bi.size!==0){var n=bi;if((t.subtreeFlags&18874368)!==0)for(t=t.child;t!==null;){if(t.tag!==22||t.memoizedState===null){if(t.tag===30&&(t.flags&18874368)!==0){var a=t.memoizedProps,s=a.name;if(s!=null&&s!=="auto"){var u=n.get(s);if(u!==void 0){var f=Oa(a.default,a.share);if(f!=="none"&&(Vs(t,s,f,null,!1)?(f=t.stateNode,u.paired=f,f.paired=u,Ks(t,a.onShare)):pa(t.child,!1)),n.delete(s),n.size===0)break}}}Ih(t)}t=t.sibling}}}function zh(t){if(t.tag===30){var n=t.memoizedProps,a=La(n,t.stateNode),s=bi!==null?bi.get(a):void 0,u=Oa(n.default,s!==void 0?n.share:n.exit);u!=="none"&&(Vs(t,a,u,null,!1)?s!==void 0?(u=t.stateNode,s.paired=u,u.paired=s,bi.delete(a),Ks(t,n.onShare)):Ks(t,n.onExit):pa(t.child,!1)),bi!==null&&Ih(t)}else if((t.subtreeFlags&33554432)!==0)for(t=t.child;t!==null;)zh(t),t=t.sibling;else bi!==null&&Ih(t)}function u_(t){for(t=t.child;t!==null;){if(t.tag===30){var n=t.memoizedProps,a=La(n,t.stateNode);n=Oa(n.default,n.update),t.flags&=-5,n!=="none"&&Vs(t,a,n,t.memoizedState=[],!1)}else(t.subtreeFlags&33554432)!==0&&u_(t);t=t.sibling}}function Bh(t){if((t.subtreeFlags&18874368)!==0)for(t=t.child;t!==null;){if(t.tag!==22||t.memoizedState===null){if(t.tag===30&&(t.flags&18874368)!==0){var n=t.stateNode;n.paired!==null&&(n.paired=null,pa(t.child,!1))}Bh(t)}t=t.sibling}}function Vu(t){if(t.tag===30)t.stateNode.paired=null,pa(t.child,!1),Bh(t);else if((t.subtreeFlags&33554432)!==0)for(t=t.child;t!==null;)Vu(t),t=t.sibling;else Bh(t)}function c_(t){for(t=t.child;t!==null;)t.tag===30?pa(t.child,!1):(t.subtreeFlags&33554432)!==0&&c_(t),t=t.sibling}function Fh(t,n,a,s,u,f,_){for(var R=!1;n!==null;){if(n.tag===5){var z=n.stateNode;if(f!==null&&hi<f.length){var et=f[hi],dt=_d(z);(et.view||dt.view)&&(R=!0);var bt;if(bt=(t.flags&4)===0)if(dt.clip)bt=!0;else{bt=et.rect;var J=dt.rect;bt=bt.y!==J.y||bt.x!==J.x||bt.height!==J.height||bt.width!==J.width}bt&&(t.flags|=4),dt.abs?dt=!et.abs:(et=et.rect,dt=dt.rect,dt=et.height!==dt.height||et.width!==dt.width),dt&&(t.flags|=32)}else t.flags|=32;(t.flags&4)!==0&&ov(z,hi===0?a:a+"_"+hi,u),R&&(t.flags&4)!==0||(da===null&&(da=[]),da.push(z,hi===0?s:s+"_"+hi,n.memoizedProps)),hi++}else(n.tag!==22||n.memoizedState===null)&&(n.tag===30&&_?t.flags|=n.flags&32:Fh(t,n.child,a,s,u,f,_)&&(R=!0));n=n.sibling}return R}function f_(t,n){for(t=t.child;t!==null;){if(t.tag===30){var a=t.memoizedProps,s=t.stateNode,u=La(a,s),f=Oa(a.default,a.update),_;_=t.memoizedState,t.memoizedState=null,s=t;var R=t.child;hi=0,u=Fh(s,R,u,u,f,_,!1),(t.flags&4)!==0&&u&&Ks(t,a.onUpdate)}else(t.subtreeFlags&33554432)!==0&&f_(t);t=t.sibling}}var Pn=!1,Ze=!1,ma=!1,Hh=!1,h_=typeof WeakSet=="function"?WeakSet:Set,In=null,ga=!1,rl=!1,ku=!1,Gh=!1;function bM(t,n,a){if(t=t.containerInfo,hd=so,t=gg(t),Rf(t)){if("selectionStart"in t)var s={start:t.selectionStart,end:t.selectionEnd};else t:{s=(s=t.ownerDocument)&&s.defaultView||window;var u=s.getSelection&&s.getSelection();if(u&&u.rangeCount!==0){s=u.anchorNode;var f=u.anchorOffset,_=u.focusNode;u=u.focusOffset;try{s.nodeType,_.nodeType}catch{s=null;break t}var R=0,z=-1,et=-1,dt=0,bt=0,J=t,ft=null;e:for(;;){for(var Ft;J!==s||f!==0&&J.nodeType!==3||(z=R+f),J!==_||u!==0&&J.nodeType!==3||(et=R+u),J.nodeType===3&&(R+=J.nodeValue.length),(Ft=J.firstChild)!==null;)ft=J,J=Ft;for(;;){if(J===t)break e;if(ft===s&&++dt===f&&(z=R),ft===_&&++bt===u&&(et=R),(Ft=J.nextSibling)!==null)break;J=ft,ft=J.parentNode}J=Ft}s=z===-1||et===-1?null:{start:z,end:et}}else s=null}s=s||{start:0,end:0}}else s=null;for(dd={focusedElem:t,selectionRange:s},so=!1,a=(a&335544064)===a,In=n,n=a?9270:1024;In!==null;){if(t=In,a&&(s=t.deletions,s!==null))for(f=0;f<s.length;f++)a&&zh(s[f]);if(t.alternate===null&&(t.flags&2)!==0)a&&s_(t),Xu(a);else{if(t.tag===22){if(s=t.alternate,t.memoizedState!==null){s!==null&&s.memoizedState===null&&a&&zh(s),Xu(a);continue}else if(s!==null&&s.memoizedState!==null){a&&s_(t),Xu(a);continue}}s=t.child,(t.subtreeFlags&n)!==0&&s!==null?(s.return=t,In=s):(a&&u_(t),Xu(a))}}bi=null}function Xu(t){for(;In!==null;){var n=In,a=t,s=n.alternate,u=n.flags;switch(n.tag){case 0:case 11:case 15:break;case 1:if((u&1024)!==0&&s!==null){a=void 0,u=s.memoizedProps,s=s.memoizedState;var f=n.stateNode;try{var _=ns(n.type,u);a=f.getSnapshotBeforeUpdate(_,s),f.__reactInternalSnapshotBeforeUpdate=a}catch(R){Ke(n,n.return,R)}}break;case 3:if((u&1024)!==0){if(s=n.stateNode.containerInfo,a=s.nodeType,a===9)Sd(s);else if(a===1)switch(s.nodeName){case"HEAD":case"HTML":case"BODY":Sd(s);break;default:s.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;case 30:a&&s!==null&&(a=La(s.memoizedProps,s.stateNode),u=n.memoizedProps,u=Oa(u.default,u.update),u!=="none"&&Vs(s,a,u,s.memoizedState=[],!0));break;default:if((u&1024)!==0)throw Error(r(163))}if(s=n.sibling,s!==null){s.return=n.return,In=s;break}In=n.return}}function d_(t,n,a){var s=a.flags;switch(a.tag){case 0:case 11:case 15:_a(t,a),s&4&&il(5,a);break;case 1:if(_a(t,a),s&4)if(t=a.stateNode,n===null)try{t.componentDidMount()}catch(_){Ke(a,a.return,_)}else{var u=ns(a.type,n.memoizedProps);n=n.memoizedState;try{t.componentDidUpdate(u,n,t.__reactInternalSnapshotBeforeUpdate)}catch(_){Ke(a,a.return,_)}}s&64&&e_(a),s&512&&ha(a,a.return);break;case 3:if(_a(t,a),s&64&&(t=a.updateQueue,t!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{Xg(t,n)}catch(_){Ke(a,a.return,_)}}break;case 27:n===null&&s&4&&r_(a);case 26:case 5:_a(t,a),n===null&&s&4&&Nh(a),s&512&&ha(a,a.return);break;case 12:_a(t,a);break;case 31:_a(t,a),s&4&&__(t,a);break;case 13:_a(t,a),s&4&&v_(t,a),s&64&&(t=a.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(a=IM.bind(null,a),_E(t,a))));break;case 22:if(s=a.memoizedState!==null||Pn,!s){var f=n!==null&&n.memoizedState!==null||Ze;n=Pn,u=Ze,Pn=s,(Ze=f)&&!u?(s=2,(a.subtreeFlags&8772)!==0&&(s|=1),Ki(t,a,s)):_a(t,a),Pn=n,Ze=u}break;case 30:_a(t,a),s&512&&ha(a,a.return);break;case 7:s&512&&ha(a,a.return);default:_a(t,a)}}function Vh(t,n){for(t=t.child;t!==null;)p_(t,n),t=t.sibling}function p_(t,n){switch(t.tag){case 5:case 26:try{var a=t.stateNode;if(n){var s=a.style;typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"}else{var u=t.stateNode,f=t.memoizedProps.style,_=f!=null&&f.hasOwnProperty("display")?f.display:null;u.style.display=_==null||typeof _=="boolean"?"":(""+_).trim()}}catch(z){Ke(t,t.return,z)}kh(t,n);break;case 6:try{t.stateNode.nodeValue=n?"":t.memoizedProps,Te=!0}catch(z){Ke(t,t.return,z)}break;case 18:try{var R=t.stateNode;n?sv(R,!0):sv(t.stateNode,!1)}catch(z){Ke(t,t.return,z)}break;case 22:case 23:t.memoizedState===null&&Vh(t,n);break;default:Vh(t,n)}}function kh(t,n){if(t.subtreeFlags&67108864)for(t=t.child;t!==null;){t:{var a=t,s=n;switch(a.tag){case 4:p_(a,s);break t;case 22:a.memoizedState===null&&kh(a,s);break t;default:kh(a,s)}}t=t.sibling}}function m_(t){var n=t.alternate;n!==null&&(t.alternate=null,m_(n)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(n=t.stateNode,n!==null&&te(n)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var hn=null,di=!1;function Zi(t,n,a){for(a=a.child;a!==null;)g_(t,n,a),a=a.sibling}function g_(t,n,a){if(Ht&&typeof Ht.onCommitFiberUnmount=="function")try{Ht.onCommitFiberUnmount($t,a)}catch{}switch(a.tag){case 26:Ze||kn(a,n),Zi(t,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&!Ze&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:Ze||kn(a,n),al(a);var s=hn,u=di;br(a.type)&&(hn=a.stateNode,di=!1),Zi(t,n,a),Sv(a.stateNode,a.type,a.memoizedProps),hn=s,di=u;break;case 5:Ze||kn(a,n),al(a);case 6:if(a.tag===6&&al(a),s=hn,u=di,hn=null,Zi(t,n,a),hn=s,di=u,hn!==null)if(di)try{(hn.nodeType===9?hn.body:hn.nodeName==="HTML"?hn.ownerDocument.body:hn).removeChild(a.stateNode),Te=!0}catch(f){Ke(a,n,f)}else try{hn.removeChild(a.stateNode),Te=!0}catch(f){Ke(a,n,f)}break;case 18:hn!==null&&(di?(t=hn,rv(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,a.stateNode),oo(t)):rv(hn,a.stateNode));break;case 4:s=hn,u=di,hn=a.stateNode.containerInfo,di=!0,Zi(t,n,a),hn=s,di=u;break;case 0:case 11:case 14:case 15:_r(2,a,n),Ze||_r(4,a,n),Zi(t,n,a);break;case 1:Ze||(kn(a,n),s=a.stateNode,typeof s.componentWillUnmount=="function"&&n_(a,n,s)),Zi(t,n,a);break;case 21:Zi(t,n,a);break;case 22:Ze=(s=Ze)||a.memoizedState!==null,Zi(t,n,a),Ze=s;break;case 30:kn(a,n),Zi(t,n,a);break;case 7:Ze||kn(a,n),Zi(t,n,a);break;default:Zi(t,n,a)}}function __(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null))){t=t.dehydrated;try{oo(t)}catch(a){Ke(n,n.return,a)}}}function v_(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{oo(t)}catch(a){Ke(n,n.return,a)}}function TM(t){switch(t.tag){case 31:case 13:case 19:var n=t.stateNode;return n===null&&(n=t.stateNode=new h_),n;case 22:return t=t.stateNode,n=t._retryCache,n===null&&(n=t._retryCache=new h_),n;default:throw Error(r(435,t.tag))}}function Wu(t,n){var a=TM(t);n.forEach(function(s){if(!a.has(s)){a.add(s);var u=zM.bind(null,t,s);s.then(u,u)}})}function ai(t,n,a){var s=n.deletions;if(s!==null)for(var u=0;u<s.length;u++){var f=s[u],_=t,R=n,z=R;t:for(;z!==null;){switch(z.tag){case 27:if(br(z.type)){hn=z.stateNode,di=!1;break t}break;case 5:hn=z.stateNode,di=!1;break t;case 3:case 4:hn=z.stateNode.containerInfo,di=!0;break t}z=z.return}if(hn===null)throw Error(r(160));g_(_,R,f),hn=null,di=!1,_=f.alternate,_!==null&&(_.return=null),f.return=null}if(n.subtreeFlags&13886)for(n=n.child;n!==null;)x_(n,t,a),n=n.sibling}var ji=null;function x_(t,n,a){var s=t.alternate,u=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(u&4&&(s=t.updateQueue,s=s!==null?s.events:null,s!==null))for(var f=0;f<s.length;f++){var _=s[f];_.ref.impl=_.nextImpl}ai(n,t,a),ri(t),u&4&&(_r(3,t,t.return),il(3,t),_r(5,t,t.return));break;case 1:ai(n,t,a),ri(t),u&512&&(Ze||s===null||kn(s,s.return)),u&64&&Pn&&(t=t.updateQueue,t!==null&&(n=t.callbacks,n!==null&&(a=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=a===null?n:a.concat(n))));break;case 26:if(f=ji,ai(n,t,a),ri(t),u&512&&(Ze||s===null||kn(s,s.return)),u&4)if(u=s!==null?s.memoizedState:null,a=t.memoizedState,s===null)if(a===null)if(t.stateNode===null)if(Pn)t.stateNode=nv(t.type,t.memoizedProps,n.containerInfo,t);else{t:{n=t.type,a=t.memoizedProps,u=f.ownerDocument||f;e:switch(n){case"title":s=u.getElementsByTagName("title")[0],(!s||s[Bt]||s[A]||s.namespaceURI==="http://www.w3.org/2000/svg"||s.hasAttribute("itemprop"))&&(s=u.createElement(n),u.head.insertBefore(s,u.querySelector("head > title"))),Xn(s,n,a),s[A]=t,be(s),n=s;break t;case"link":if(f=Av("link","href",u).get(n+(a.href||""))){for(_=0;_<f.length;_++)if(s=f[_],s.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&s.getAttribute("rel")===(a.rel==null?null:a.rel)&&s.getAttribute("title")===(a.title==null?null:a.title)&&s.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){f.splice(_,1);break e}}s=u.createElement(n),Xn(s,n,a),u.head.appendChild(s);break;case"meta":if(f=Av("meta","content",u).get(n+(a.content||""))){for(_=0;_<f.length;_++)if(s=f[_],s.getAttribute("content")===(a.content==null?null:""+a.content)&&s.getAttribute("name")===(a.name==null?null:a.name)&&s.getAttribute("property")===(a.property==null?null:a.property)&&s.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&s.getAttribute("charset")===(a.charSet==null?null:a.charSet)){f.splice(_,1);break e}}s=u.createElement(n),Xn(s,n,a),u.head.appendChild(s);break;default:throw Error(r(468,n))}s[A]=t,be(s),n=s}t.stateNode=n}else Pn||Rd(f,t.type,t.stateNode);else t.stateNode=Tv(f,a,t.memoizedProps);else u!==a?(u===null?(n=s.stateNode,n===null||Ze||n.parentNode.removeChild(n)):u.count--,a===null?Pn||Rd(f,t.type,t.stateNode):Tv(f,a,t.memoizedProps)):a===null&&t.stateNode!==null&&Uh(t,t.memoizedProps,s.memoizedProps);break;case 27:ai(n,t,a),ri(t),u&512&&(Ze||s===null||kn(s,s.return)),s!==null&&u&4&&Uh(t,t.memoizedProps,s.memoizedProps);break;case 5:if(f=ma,ma=!1,ai(n,t,a),ma=f,ri(t),u&512&&(Ze||s===null||kn(s,s.return)),t.flags&32){n=t.stateNode;try{bs(n,""),Te=!0}catch(dt){Ke(t,t.return,dt)}}u&4&&t.stateNode!=null&&(n=t.memoizedProps,Uh(t,n,s!==null?s.memoizedProps:n)),u&1024&&(Hh=!0);break;case 6:if(ai(n,t,a),ri(t),u&4){if(t.stateNode===null)throw Error(r(162));n=t.memoizedProps,a=t.stateNode;try{a.nodeValue=n,Te=!0}catch(dt){Ke(t,t.return,dt)}}break;case 3:if(Te=!1,sc=null,f=ji,ji=pl(n.containerInfo),ai(n,t,a),ji=f,ri(t),u&4&&s!==null&&s.memoizedState.isDehydrated)try{oo(n.containerInfo)}catch(dt){Ke(t,t.return,dt)}Hh&&(Hh=!1,S_(t)),Te=!1;break;case 4:u=ma,ma=Pn,s=We(),f=ji,ji=pl(t.stateNode.containerInfo),ai(n,t,a),ri(t),ji=f,Te&&rl&&(ku=!0),Te=s,ma=u;break;case 12:ai(n,t,a),ri(t);break;case 31:ai(n,t,a),ri(t),u&4&&(n=t.updateQueue,n!==null&&(t.updateQueue=null,Wu(t,n)));break;case 13:ai(n,t,a),ri(t),t.child.flags&8192&&t.memoizedState!==null!=(s!==null&&s.memoizedState!==null)&&(Zu=Vt()),u&4&&(n=t.updateQueue,n!==null&&(t.updateQueue=null,Wu(t,n)));break;case 22:f=t.memoizedState!==null,_=s!==null&&s.memoizedState!==null;var R=Pn,z=Ze,et=ma;Pn=R||f,ma=et||f,Ze=z||_,ai(n,t,a),Ze=z,ma=et,Pn=R,ri(t),u&8192&&(n=t.stateNode,n._visibility=f?n._visibility&-2:n._visibility|1,!f||s===null||_||Pn||Ze||(n=_||Ze,a=Pn,s=Ze,Pn=f||Pn,Ze=n,vr(t,2),Pn=a,Ze=s),!f&&ma||Vh(t,f)),u&4&&(n=t.updateQueue,n!==null&&(a=n.retryQueue,a!==null&&(n.retryQueue=null,Wu(t,a))));break;case 19:ai(n,t,a),ri(t),u&4&&(n=t.updateQueue,n!==null&&(t.updateQueue=null,Wu(t,n)));break;case 30:u&512&&(Ze||s===null||kn(s,s.return)),u=We(),f=rl,_=(a&335544064)===a,R=t.memoizedProps,rl=_&&Oa(R.default,R.update)!=="none",ai(n,t,a),ri(t),_&&s!==null&&Te&&(t.flags|=4),rl=f,Te=u;break;case 21:break;case 7:u&512&&(Ze||s===null||kn(s,s.return)),s&&s.stateNode!==null&&(s.stateNode._fragmentFiber=t);default:ai(n,t,a),ri(t)}}function ri(t){var n=t.flags;if(n&2){try{for(var a,s=t.return;s!==null;){if(a_(s)){a=s;break}s=s.return}s=null;for(var u=t.return;u!==null;){if(Dh(u)){var f=u.stateNode;s===null?s=[f]:s.push(f)}if(Ch(u))break;u=u.return}var _=s;if(a==null)throw Error(r(160));switch(a.tag){case 27:var R=a.stateNode,z=Lh(t);Fu(t,z,R,_);break;case 5:var et=a.stateNode;a.flags&32&&(bs(et,""),a.flags&=-33);var dt=Lh(t);Fu(t,dt,et,_);break;case 3:case 4:var bt=a.stateNode.containerInfo,J=Lh(t);Oh(t,J,bt,_);break;default:throw Error(r(161))}}catch(ft){Ke(t,t.return,ft)}t.flags&=-3}n&4096&&(t.flags&=-4097)}function S_(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var n=t;S_(n),n.tag===5&&n.flags&1024&&(n=n.stateNode,so=!0,n.reset(),so=!1),t=t.sibling}}function ks(t,n){if(n.subtreeFlags&9270)for(n=n.child;n!==null;)y_(n,t),n=n.sibling;else f_(n)}function y_(t,n){var a=t.alternate;if(a===null)Ph(t,!1);else switch(t.tag){case 3:if(Gh=ga=!1,o_(),ks(n,t),!ga&&!ku){if(t=da,t!==null)for(var s=0;s<t.length;s+=3){a=t[s];var u=t[s+1];lv(a,t[s+2]),a=a.ownerDocument.documentElement,a!==null&&a.animate({opacity:[0,0],pointerEvents:["none","none"]},{duration:0,fill:"forwards",pseudoElement:"::view-transition-group("+u+")"})}t=n.containerInfo,t=t.nodeType===9?t.documentElement:t.ownerDocument.documentElement,t!==null&&t.style.viewTransitionName===""&&(t.style.viewTransitionName="none",t.animate({opacity:[0,0],pointerEvents:["none","none"]},{duration:0,fill:"forwards",pseudoElement:"::view-transition-group(root)"}),t.animate({width:[0,0],height:[0,0]},{duration:0,fill:"forwards",pseudoElement:"::view-transition"})),Gh=!0}da=null;break;case 5:ks(n,t);break;case 4:s=ga,ga=!1,ks(n,t),ga&&(ku=!0),ga=s;break;case 22:t.memoizedState===null&&(a.memoizedState!==null?Ph(t,!1):ks(n,t));break;case 30:s=ga,u=o_(),ga=!1,ks(n,t),ga&&(t.flags|=4);var f=t.memoizedProps,_=t.stateNode;n=La(f,_),_=La(a.memoizedProps,_);var R=Oa(f.default,f.update);R==="none"?n=!1:(f=a.memoizedState,a.memoizedState=null,a=t.child,hi=0,n=Fh(t,a,n,_,R,f,!0),hi!==(f===null?0:f.length)&&(t.flags|=32)),(t.flags&4)!==0&&n?(Ks(t,t.memoizedProps.onUpdate),da=u):u!==null&&(u.push.apply(u,da),da=u),ga=(t.flags&32)!==0?!0:s;break;default:ks(n,t)}}function _a(t,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)d_(t,n.alternate,n),n=n.sibling}function vr(t,n){for(t=t.child;t!==null;){var a=t,s=n;switch(a.tag){case 0:case 11:case 14:case 15:_r(4,a,a.return),vr(a,s);break;case 1:kn(a,a.return);var u=a.stateNode;typeof u.componentWillUnmount=="function"&&n_(a,a.return,u),vr(a,s);break;case 27:(s&2)!==0&&Sv(a.stateNode,a.type,a.memoizedProps);case 5:kn(a,a.return),a.tag!==5&&a.tag!==27||al(a),vr(a,s);break;case 6:al(a);break;case 26:kn(a,a.return),u=a.stateNode,a.memoizedState!==null||u===null||Ze||u.parentNode.removeChild(u),vr(a,s);break;case 22:a.memoizedState===null&&vr(a,s);break;case 30:kn(a,a.return),vr(a,s);break;case 7:kn(a,a.return);default:vr(a,s)}t=t.sibling}}function Ki(t,n,a){for(a=(n.subtreeFlags&8772)!==0?a:a&-2,n=n.child;n!==null;){var s=n.alternate,u=t,f=n,_=f.flags,R=(a&1)!==0;switch(f.tag){case 0:case 11:case 15:Ki(u,f,a),il(4,f);break;case 1:if(Ki(u,f,a),s=f,u=s.stateNode,typeof u.componentDidMount=="function")try{u.componentDidMount()}catch(dt){Ke(s,s.return,dt)}if(s=f,u=s.updateQueue,u!==null){var z=s.stateNode;try{var et=u.shared.hiddenCallbacks;if(et!==null)for(u.shared.hiddenCallbacks=null,u=0;u<et.length;u++)kg(et[u],z)}catch(dt){Ke(s,s.return,dt)}}R&&_&64&&e_(f),ha(f,f.return);break;case 27:(a&2)!==0&&r_(f);case 5:f.tag!==5&&f.tag!==27||i_(f),Ki(u,f,a),R&&s===null&&_&4&&Nh(f),ha(f,f.return);break;case 6:i_(f);break;case 26:z=f.stateNode,f.memoizedState!==null||z===null||Pn||Rd(pl(z.ownerDocument),f.type,z),Ki(u,f,a),R&&s===null&&_&4&&Nh(f),ha(f,f.return);break;case 12:Ki(u,f,a);break;case 31:Ki(u,f,a),R&&_&4&&__(u,f);break;case 13:Ki(u,f,a),R&&_&4&&v_(u,f);break;case 22:f.memoizedState===null&&Ki(u,f,a),ha(f,f.return);break;case 30:Ki(u,f,a),ha(f,f.return);break;case 7:ha(f,f.return);default:Ki(u,f,a)}n=n.sibling}}function Xh(t,n){var a=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),t=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(t=n.memoizedState.cachePool.pool),t!==a&&(t!=null&&t.refCount++,a!=null&&Xo(a))}function Wh(t,n){t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&Xo(t))}function Hi(t,n,a,s){var u=(a&335544064)===a;if(n.subtreeFlags&(u?10262:10256))for(n=n.child;n!==null;)M_(t,n,a,s),n=n.sibling;else u&&c_(n)}function M_(t,n,a,s){var u=(a&335544064)===a;u&&n.alternate===null&&n.return!==null&&n.return.alternate!==null&&Vu(n);var f=n.flags;switch(n.tag){case 0:case 11:case 15:Hi(t,n,a,s),f&2048&&il(9,n);break;case 1:Hi(t,n,a,s);break;case 3:Hi(t,n,a,s),u&&Gh&&(t=t.containerInfo,t=t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,t.style.viewTransitionName==="root"&&(t.style.viewTransitionName=""),t=t.ownerDocument.documentElement,t!==null&&t.style.viewTransitionName==="none"&&(t.style.viewTransitionName="")),f&2048&&(f=null,n.alternate!==null&&(f=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==f&&(n.refCount++,f!=null&&Xo(f)));break;case 12:if(f&2048){Hi(t,n,a,s),f=n.stateNode;try{var _=n.memoizedProps,R=_.id,z=_.onPostCommit;typeof z=="function"&&z(R,n.alternate===null?"mount":"update",f.passiveEffectDuration,-0)}catch(et){Ke(n,n.return,et)}}else Hi(t,n,a,s);break;case 31:Hi(t,n,a,s);break;case 13:Hi(t,n,a,s);break;case 23:break;case 22:_=n.stateNode,R=n.alternate,n.memoizedState!==null?(u&&R!==null&&R.memoizedState===null&&Vu(R),_._visibility&2?Hi(t,n,a,s):sl(t,n)):(u&&R!==null&&R.memoizedState!==null&&Vu(n),_._visibility&2?Hi(t,n,a,s):(_._visibility|=2,Xs(t,n,a,s,(n.subtreeFlags&10256)!==0||!1))),f&2048&&Xh(R,n);break;case 24:Hi(t,n,a,s),f&2048&&Wh(n.alternate,n);break;case 30:u&&(f=n.alternate,f!==null&&(pa(f.child,!0),pa(n.child,!0))),Hi(t,n,a,s);break;default:Hi(t,n,a,s)}}function Xs(t,n,a,s,u){for(u=u&&((n.subtreeFlags&10256)!==0||!1),n=n.child;n!==null;){var f=t,_=n,R=a,z=s,et=_.flags;switch(_.tag){case 0:case 11:case 15:Xs(f,_,R,z,u),il(8,_);break;case 23:break;case 22:var dt=_.stateNode;_.memoizedState!==null?dt._visibility&2?Xs(f,_,R,z,u):sl(f,_):(dt._visibility|=2,Xs(f,_,R,z,u)),u&&et&2048&&Xh(_.alternate,_);break;case 24:Xs(f,_,R,z,u),u&&et&2048&&Wh(_.alternate,_);break;default:Xs(f,_,R,z,u)}n=n.sibling}}function sl(t,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=t,s=n,u=s.flags;switch(s.tag){case 22:sl(a,s),u&2048&&Xh(s.alternate,s);break;case 24:sl(a,s),u&2048&&Wh(s.alternate,s);break;default:sl(a,s)}n=n.sibling}}var is=8192;function as(t,n,a){if(t.subtreeFlags&is)for(t=t.child;t!==null;)E_(t,n,a),t=t.sibling}function E_(t,n,a){switch(t.tag){case 26:as(t,n,a),t.flags&is&&(t.memoizedState!==null?NE(a,ji,t.memoizedState,t.memoizedProps):(t=t.stateNode,(n&335544128)===n&&Dv(a,t)));break;case 5:as(t,n,a),t.flags&is&&(t=t.stateNode,(n&335544128)===n&&Dv(a,t));break;case 3:case 4:var s=ji;ji=pl(t.stateNode.containerInfo),as(t,n,a),ji=s;break;case 22:t.memoizedState===null&&(s=t.alternate,s!==null&&s.memoizedState!==null?(s=is,is=16777216,as(t,n,a),is=s):as(t,n,a));break;case 30:if((t.flags&is)!==0&&(s=t.memoizedProps.name,s!=null&&s!=="auto")){var u=t.stateNode;u.paired=null,bi===null&&(bi=new Map),bi.set(s,u)}as(t,n,a);break;default:as(t,n,a)}}function b_(t){var n=t.alternate;if(n!==null&&(t=n.child,t!==null)){n.child=null;do n=t.sibling,t.sibling=null,t=n;while(t!==null)}}function ol(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var s=n[a];In=s,A_(s,t)}b_(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)T_(t),t=t.sibling}function T_(t){switch(t.tag){case 0:case 11:case 15:ol(t),t.flags&2048&&_r(9,t,t.return);break;case 3:ol(t);break;case 12:ol(t);break;case 22:var n=t.stateNode;t.memoizedState!==null&&n._visibility&2&&(t.return===null||t.return.tag!==13)?(n._visibility&=-3,Yu(t)):ol(t);break;default:ol(t)}}function Yu(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var s=n[a];In=s,A_(s,t)}b_(t)}for(t=t.child;t!==null;){switch(n=t,n.tag){case 0:case 11:case 15:_r(8,n,n.return),Yu(n);break;case 22:a=n.stateNode,a._visibility&2&&(a._visibility&=-3,Yu(n));break;default:Yu(n)}t=t.sibling}}function A_(t,n){for(;In!==null;){var a=In;switch(a.tag){case 0:case 11:case 15:_r(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var s=a.memoizedState.cachePool.pool;s!=null&&s.refCount++}break;case 24:Xo(a.memoizedState.cache)}if(s=a.child,s!==null)s.return=a,In=s;else t:for(a=t;In!==null;){s=In;var u=s.sibling,f=s.return;if(m_(s),s===a){In=null;break t}if(u!==null){u.return=f,In=u;break t}In=f}}}var AM={getCacheForType:function(t){var n=Hn(En),a=n.data.get(t);return a===void 0&&(a=t(),n.data.set(t,a)),a},cacheSignal:function(){return Hn(En).controller.signal}},RM=typeof WeakMap=="function"?WeakMap:Map,Ye=0,rn=null,De=null,Pe=0,je=0,Ti=null,xr=!1,Ws=!1,Yh=!1,ka=0,yn=0,Sr=0,rs=0,qu=0,Ai=0,Ys=0,ll=null,pi=null,qh=!1,Zu=0,R_=0,ju=1/0,Ku=null,yr=null,mn=0,Qi=null,ss=null,va=0,Zh=0,jh=null,w_=null,qs=null,Zs=null,js=null,ul=0,Qu=null;function Ri(){return(Ye&2)!==0&&Pe!==0?Pe&-Pe:xt.T!==null?rd():jl()}function C_(){if(Ai===0)if((Pe&536870912)===0||Ae){var t=wt;wt<<=1,(wt&3932160)===0&&(wt=262144),Ai=t}else Ai=536870912;return t=Gn.current,t!==null&&(t.flags|=32),Ai}function Ks(t,n){if(n!=null){var a=t.stateNode,s=a.ref;s===null&&(s=a.ref=uv(La(t.memoizedProps,a))),Zs===null&&(Zs=[]),Zs.push(n.bind(null,s))}}function mi(t,n,a){(t===rn&&(je===2||je===9)||t.cancelPendingCommit!==null)&&(Qs(t,0),Mr(t,Pe,Ai,!1)),Fn(t,a),((Ye&2)===0||t!==rn)&&(t===rn&&((Ye&2)===0&&(rs|=a),yn===4&&Mr(t,Pe,Ai,!1)),xa(t))}function D_(t,n,a){if((Ye&6)!==0)throw Error(r(327));var s=!a&&(n&127)===0&&(n&t.expiredLanes)===0||cn(t,n),u=s?DM(t,n):Qh(t,n,!0),f=s;do{if(u===0){Ws&&!s&&Mr(t,n,0,!1);break}else{if(a=t.current.alternate,f&&!wM(a)){u=Qh(t,n,!1),f=!1;continue}if(u===2){if(f=n,t.errorRecoveryDisabledLanes&f)var _=0;else _=t.pendingLanes&-536870913,_=_!==0?_:_&536870912?536870912:0;if(_!==0){n=_;t:{var R=t;u=ll;var z=R.current.memoizedState.isDehydrated;if(z&&(Qs(R,_).flags|=256),_=Qh(R,_,!1),_!==2&&_!==6){if(Yh&&!z){R.errorRecoveryDisabledLanes|=f,rs|=f,u=4;break t}f=pi,pi=u,f!==null&&(pi===null?pi=f:pi.push.apply(pi,f))}u=_}if(f=!1,u!==2)continue}}if(u===1){Qs(t,0),Mr(t,n,0,!0);break}t:{switch(s=t,f=u,f){case 0:case 1:throw Error(r(345));case 4:if((n&4194048)!==n&&(n&62914560)!==n)break;case 6:Mr(s,n,Ai,!xr);break t;case 2:pi=null;break;case 3:case 5:break;default:throw Error(r(329))}if((n&62914560)===n&&(u=Zu+300-Vt(),10<u)){if(Mr(s,n,Ai,!xr),Ee(s,0,!0)!==0)break t;va=n,s.timeoutHandle=gd(N_.bind(null,s,a,pi,Ku,qh,n,Ai,rs,Ys,xr,f,"Throttled",-0,0),u);break t}N_(s,a,pi,Ku,qh,n,Ai,rs,Ys,xr,f,null,-0,0)}}break}while(!0);xa(t)}function N_(t,n,a,s,u,f,_,R,z,et,dt,bt,J,ft){t.timeoutHandle=-1;var Ft=n.subtreeFlags,ee=(f&335544064)===f;if(bt=null,(ee||Ft&8192||(Ft&16785408)===16785408)&&(bt={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:ua},bi=null,E_(n,f,bt),ee&&(Ft=bt,ee=t.containerInfo,ee=(ee.nodeType===9?ee:ee.ownerDocument).__reactViewTransition,ee!=null&&(Ft.count++,Ft.waitingForViewTransition=!0,Ft=_l.bind(Ft),ee.finished.then(Ft,Ft))),Ft=(f&62914560)===f?Zu-Vt():(f&4194048)===f?R_-Vt():0,Ft=UE(bt,Ft),Ft!==null)){va=f,t.cancelPendingCommit=Ft(F_.bind(null,t,n,f,a,s,u,_,R,z,et,dt,bt,null,J,ft)),Mr(t,f,_,!et);return}F_(t,n,f,a,s,u,_,R,z,et,dt,bt)}function wM(t){for(var n=t;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var s=0;s<a.length;s++){var u=a[s],f=u.getSnapshot;u=u.value;try{if(!Mi(f(),u))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function Mr(t,n,a,s){n=an(t,n),n&=~qu,n&=~rs,t.suspendedLanes|=n,t.pingedLanes&=~n,s&&(t.warmLanes|=n),s=t.expirationTimes;for(var u=n;0<u;){var f=31-de(u),_=1<<f;s[f]=-1,u&=~_}a!==0&&sa(t,a,n)}function Ju(){return(Ye&6)===0?(cl(0),!1):!0}function Kh(){if(De!==null){if(je===0)var t=De.return;else t=De,za=qr=null,ah(t),zs=null,qo=0,t=De;for(;t!==null;)t_(t.alternate,t),t=t.return;De=null}}function Qs(t,n){var a=t.timeoutHandle;return a!==-1&&(t.timeoutHandle=-1,JM(a)),a=t.cancelPendingCommit,a!==null&&(t.cancelPendingCommit=null,a()),va=0,Kh(),rn=t,De=a=Pa(t.current,null),Pe=n,je=0,Ti=null,xr=!1,Ws=cn(t,n),Yh=!1,Ys=Ai=qu=rs=Sr=yn=0,pi=ll=null,qh=!1,ka=an(t,n),su(),a}function U_(t,n){xe=null,xt.H=Nu,n===Is||n===_u?(n=Fg(),je=3):n===Wf?(n=Fg(),je=4):je=n===xh?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,Ti=n,De===null&&(yn=1,Uu(t,Ii(n,t.current)))}function L_(){var t=Gn.current;return t===null?!0:(Pe&4194048)===Pe?Kn===null:(Pe&62914560)===Pe||(Pe&536870912)!==0?t===Kn:!1}function O_(){var t=xt.H;return xt.H=Nu,t===null?Nu:t}function P_(){var t=xt.A;return xt.A=AM,t}function $u(){yn=4,xr||(Pe&4194048)!==Pe&&Gn.current!==null||(Ws=!0),(Sr&134217727)===0&&(rs&134217727)===0||rn===null||Mr(rn,Pe,Ai,!1)}function Qh(t,n,a){var s=Ye;Ye|=2;var u=O_(),f=P_();(rn!==t||Pe!==n)&&(Ku=null,Qs(t,n)),n=!1;var _=yn;t:do try{if(je!==0&&De!==null){var R=De,z=Ti;switch(je){case 8:Kh(),_=6;break t;case 3:case 2:case 9:case 6:Gn.current===null&&(n=!0);var et=je;if(je=0,Ti=null,Js(t,R,z,et),a&&Ws){_=0;break t}break;default:et=je,je=0,Ti=null,Js(t,R,z,et)}}CM(),_=yn;break}catch(dt){U_(t,dt)}while(!0);return n&&t.shellSuspendCounter++,za=qr=null,Ye=s,xt.H=u,xt.A=f,De===null&&(rn=null,Pe=0,su()),_}function CM(){for(;De!==null;)I_(De)}function DM(t,n){var a=Ye;Ye|=2;var s=O_(),u=P_();rn!==t||Pe!==n?(Ku=null,ju=Vt()+500,Qs(t,n)):Ws=cn(t,n);t:do try{if(je!==0&&De!==null){n=De;var f=Ti;e:switch(je){case 1:je=0,Ti=null,Js(t,n,f,1);break;case 2:case 9:if(zg(f)){je=0,Ti=null,z_(n);break}n=function(){je!==2&&je!==9||rn!==t||(je=7),xa(t)},f.then(n,n);break t;case 3:je=7;break t;case 4:je=5;break t;case 7:zg(f)?(je=0,Ti=null,z_(n)):(je=0,Ti=null,Js(t,n,f,7));break;case 5:var _=null;switch(De.tag){case 26:_=De.memoizedState;case 5:case 27:var R=De;if(_?wv(_):R.stateNode.complete){je=0,Ti=null;var z=R.sibling;if(z!==null)De=z;else{var et=R.return;et!==null?(De=et,tc(et)):De=null}break e}}je=0,Ti=null,Js(t,n,f,5);break;case 6:je=0,Ti=null,Js(t,n,f,6);break;case 8:Kh(),yn=6;break t;default:throw Error(r(462))}}NM();break}catch(dt){U_(t,dt)}while(!0);return za=qr=null,xt.H=s,xt.A=u,Ye=a,De!==null?0:(rn=null,Pe=0,su(),yn)}function NM(){for(;De!==null&&!zt();)I_(De)}function I_(t){var n=J0(t.alternate,t,ka);t.memoizedProps=t.pendingProps,n===null?tc(t):De=n}function z_(t){var n=t,a=n.alternate;switch(n.tag){case 15:case 0:n=W0(a,n,n.pendingProps,n.type,void 0,Pe);break;case 11:n=W0(a,n,n.pendingProps,n.type.render,n.ref,Pe);break;case 5:ah(n);var s=n;s===On&&(Ae?(hu(s),s.tag===5&&s.stateNode!=null&&(on=s.stateNode)):(hu(s),Ae=!0));default:t_(a,n),n=De=Ag(n,ka),n=J0(a,n,ka)}t.memoizedProps=t.pendingProps,n===null?tc(t):De=n}function Js(t,n,a,s){za=qr=null,ah(n),zs=null,qo=0;var u=n.return;try{if(vM(t,u,n,a,Pe)){yn=1,Uu(t,Ii(a,t.current)),De=null;return}}catch(f){if(u!==null)throw De=u,f;yn=1,Uu(t,Ii(a,t.current)),De=null;return}n.flags&32768?(Ae||s===1?t=!0:Ws||(Pe&536870912)!==0?t=!1:(xr=t=!0,(s===2||s===9||s===3||s===6)&&(s=Gn.current,s!==null&&s.tag===13&&(s.flags|=16384))),B_(n,t)):tc(n)}function tc(t){var n=t;do{if((n.flags&32768)!==0){B_(n,xr);return}t=n.return;var a=MM(n.alternate,n,ka);if(a!==null){De=a;return}if(n=n.sibling,n!==null){De=n;return}De=n=t}while(n!==null);yn===0&&(yn=5)}function B_(t,n){do{var a=EM(t.alternate,t);if(a!==null){a.flags&=32767,De=a;return}if(a=t.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(t=t.sibling,t!==null)){De=t;return}De=t=a}while(t!==null);yn=6,De=null}function F_(t,n,a,s,u,f,_,R,z,et,dt,bt){t.cancelPendingCommit=null;do ec();while(mn!==0);if((Ye&6)!==0)throw Error(r(327));if(n!==null){if(n===t.current)throw Error(r(177));t===rn&&(De=rn=null,Pe=0),ss=n,Qi=t,va=a,jh=u,w_=s,UM(t,n,a,_,R,z,bt)}}function UM(t,n,a,s,u,f,_){var R=n.lanes|n.childLanes;if(Zh=R,R|=Uf,Da(t,a,R,s,u,f),Zs=null,(a&335544064)===a?(js=sM(t),s=10262):(js=null,s=10256),(n.subtreeFlags&s)!==0||(n.flags&s)!==0?(t.callbackNode=null,t.callbackPriority=0,BM(Nt,function(){return ed(),null})):(t.callbackNode=null,t.callbackPriority=0),Hu=!1,s=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||s){s=xt.T,xt.T=null,u=Dt.p,Dt.p=2,f=Ye,Ye|=4;try{bM(t,n,a)}finally{Ye=f,Dt.p=u,xt.T=s}}mn=1,Hu?qs=aE(_,t.containerInfo,js,Jh,$h,OM,td,ed,LM):(Jh(),$h(),td())}function LM(t){if(mn!==0){var n=Qi.onRecoverableError;n(t,{componentStack:null})}}function OM(){mn===3&&(mn=0,y_(ss,Qi),mn=4)}function Jh(){if(mn===1){mn=0;var t=Qi,n=ss,a=va,s=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||s){s=xt.T,xt.T=null;var u=Dt.p;Dt.p=2;var f=Ye;Ye|=4;try{rl=ku=!1,x_(n,t,a),a=dd;var _=gg(t.containerInfo),R=a.focusedElem,z=a.selectionRange;if(_!==R&&R&&R.ownerDocument&&mg(R.ownerDocument.documentElement,R)){if(z!==null&&Rf(R)){var et=z.start,dt=z.end;if(dt===void 0&&(dt=et),"selectionStart"in R)R.selectionStart=et,R.selectionEnd=Math.min(dt,R.value.length);else{var bt=R.ownerDocument||document,J=bt&&bt.defaultView||window;if(J.getSelection){var ft=J.getSelection(),Ft=R.textContent.length,ee=Math.min(z.start,Ft),Se=z.end===void 0?ee:Math.min(z.end,Ft);!ft.extend&&ee>Se&&(_=Se,Se=ee,ee=_);var tt=pg(R,ee),Y=pg(R,Se);if(tt&&Y&&(ft.rangeCount!==1||ft.anchorNode!==tt.node||ft.anchorOffset!==tt.offset||ft.focusNode!==Y.node||ft.focusOffset!==Y.offset)){var ot=bt.createRange();ot.setStart(tt.node,tt.offset),ft.removeAllRanges(),ee>Se?(ft.addRange(ot),ft.extend(Y.node,Y.offset)):(ot.setEnd(Y.node,Y.offset),ft.addRange(ot))}}}}for(bt=[],ft=R;ft=ft.parentNode;)ft.nodeType===1&&bt.push({element:ft,left:ft.scrollLeft,top:ft.scrollTop});for(typeof R.focus=="function"&&R.focus(),R=0;R<bt.length;R++){var Mt=bt[R];Mt.element.scrollLeft=Mt.left,Mt.element.scrollTop=Mt.top}}so=!!hd,dd=hd=null}finally{Ye=f,Dt.p=u,xt.T=s}}t.current=n,mn=2}}function $h(){if(mn===2){mn=0;var t=Qi,n=ss,a=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||a){a=xt.T,xt.T=null;var s=Dt.p;Dt.p=2;var u=Ye;Ye|=4;try{d_(t,n.alternate,n)}finally{Ye=u,Dt.p=s,xt.T=a}}mn=3}}function td(){if(mn===4||mn===3){mn=0;var t=qs;qs=null,Pt();var n=Qi,a=ss,s=va,u=w_,f=(s&335544064)===s?10262:10256;if((a.subtreeFlags&f)!==0||(a.flags&f)!==0?mn=5:(mn=0,ss=Qi=null,H_(n,n.pendingLanes)),f=n.pendingLanes,f===0&&(yr=null),jn(s),a=a.stateNode,Ht&&typeof Ht.onCommitFiberRoot=="function")try{Ht.onCommitFiberRoot($t,a,void 0,(a.current.flags&128)===128)}catch{}if(u!==null){a=xt.T,f=Dt.p,Dt.p=2,xt.T=null;try{for(var _=n.onRecoverableError,R=0;R<u.length;R++){var z=u[R];_(z.value,{componentStack:z.stack})}}finally{xt.T=a,Dt.p=f}}if(u=Zs,_=js,js=null,u!==null&&(Zs=null,_===null&&(_=[]),t!==null))for(z=0;z<u.length;z++)a=(0,u[z])(_),a!==void 0&&t.finished.finally(a);(va&3)!==0&&ec(),xa(n),f=n.pendingLanes,(s&261930)!==0&&(f&42)!==0?n===Qu?ul++:(ul=0,Qu=n):(ul=0,Qu=null),cl(0)}}function H_(t,n){(t.pooledCacheLanes&=n)===0&&(n=t.pooledCache,n!=null&&(t.pooledCache=null,Xo(n)))}function ec(){return qs!==null&&(qs.skipTransition(),qs=null),Jh(),$h(),td(),ed()}function ed(){if(mn!==5)return!1;var t=Qi,n=Zh;Zh=0;var a=jn(va),s=xt.T,u=Dt.p;try{Dt.p=32>a?32:a,xt.T=null,a=jh,jh=null;var f=Qi,_=va;if(mn=0,ss=Qi=null,va=0,(Ye&6)!==0)throw Error(r(331));var R=Ye;if(Ye|=4,T_(f.current),M_(f,f.current,_,a),Ye=R,cl(0,!1),Ht&&typeof Ht.onPostCommitFiberRoot=="function")try{Ht.onPostCommitFiberRoot($t,f)}catch{}return!0}finally{Dt.p=u,xt.T=s,H_(t,n)}}function G_(t,n,a){n=Ii(a,n),n=vh(t.stateNode,n,2),t=dr(t,n,2),t!==null&&(Fn(t,2),xa(t))}function Ke(t,n,a){if(t.tag===3)G_(t,t,a);else for(;n!==null;){if(n.tag===3){G_(n,t,a);break}else if(n.tag===1){var s=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof s.componentDidCatch=="function"&&(yr===null||!yr.has(s))){t=Ii(a,t),a=z0(2),s=dr(n,a,2),s!==null&&(B0(a,s,n,t),Fn(s,2),xa(s));break}}n=n.return}}function nd(t,n,a){var s=t.pingCache;if(s===null){s=t.pingCache=new RM;var u=new Set;s.set(n,u)}else u=s.get(n),u===void 0&&(u=new Set,s.set(n,u));u.has(a)||(Yh=!0,u.add(a),t=PM.bind(null,t,n,a),n.then(t,t))}function PM(t,n,a){var s=t.pingCache;s!==null&&s.delete(n),t.pingedLanes|=t.suspendedLanes&a,t.warmLanes&=~a,rn===t&&(Pe&a)===a&&((yn===4||yn===3&&(Pe&62914560)===Pe&&300>Vt()-Zu)&&(Ye&2)===0?Qs(t,0):qu|=a,Ys===Pe&&(Ys=0)),xa(t)}function V_(t,n){n===0&&(n=pn()),t=Xr(t,n),t!==null&&(Fn(t,n),xa(t))}function IM(t){var n=t.memoizedState,a=0;n!==null&&(a=n.retryLane),V_(t,a)}function zM(t,n){var a=0;switch(t.tag){case 31:case 13:var s=t.stateNode,u=t.memoizedState;u!==null&&(a=u.retryLane);break;case 19:s=t.stateNode;break;case 22:s=t.stateNode._retryCache;break;default:throw Error(r(314))}s!==null&&s.delete(n),V_(t,a)}function BM(t,n){return Lt(t,n)}var $s=null,to=null,id=!1,nc=!1,ad=!1,Er=0;function xa(t){t!==to&&t.next===null&&(to===null?$s=to=t:to=to.next=t),nc=!0,id||(id=!0,HM())}function cl(t,n){if(!ad&&nc){ad=!0;do for(var a=!1,s=$s;s!==null;){if(t!==0){var u=s.pendingLanes;if(u===0)var f=0;else{var _=s.suspendedLanes,R=s.pingedLanes;f=(1<<31-de(42|t)+1)-1,f&=u&~(_&~R),f=f&201326741?f&201326741|1:f?f|2:0}f!==0&&(a=!0,Y_(s,f))}else f=Pe,f=Ee(s,s===rn?f:0,s.cancelPendingCommit!==null||s.timeoutHandle!==-1),(f&3)===0||cn(s,f)||(a=!0,Y_(s,f));s=s.next}while(a);ad=!1}}function FM(){k_()}function k_(){nc=id=!1;var t=0;Er!==0&&QM()&&(t=Er);for(var n=Vt(),a=null,s=$s;s!==null;){var u=s.next,f=X_(s,n);f===0?(s.next=null,a===null?$s=u:a.next=u,u===null&&(to=a)):(a=s,(t!==0||(f&3)!==0)&&(nc=!0)),s=u}mn!==0&&mn!==5||cl(t),Er!==0&&(Er=0)}function X_(t,n){for(var a=t.suspendedLanes,s=t.pingedLanes,u=t.expirationTimes,f=t.pendingLanes&-62914561;0<f;){var _=31-de(f),R=1<<_,z=u[_];z===-1?((R&a)===0||(R&s)!==0)&&(u[_]=ui(R,n)):z<=n&&(t.expiredLanes|=R),f&=~R}if(n=rn,a=Pe,a=Ee(t,t===n?a:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),s=t.callbackNode,a===0||t===n&&(je===2||je===9)||t.cancelPendingCommit!==null)return s!==null&&s!==null&&ne(s),t.callbackNode=null,t.callbackPriority=0;if((a&3)===0||cn(t,a)){if(n=a&-a,n===t.callbackPriority)return n;switch(s!==null&&ne(s),jn(a)){case 2:case 8:a=Z;break;case 32:a=Nt;break;case 268435456:a=Ut;break;default:a=Nt}return s=W_.bind(null,t),a=Lt(a,s),t.callbackPriority=n,t.callbackNode=a,n}return s!==null&&s!==null&&ne(s),t.callbackPriority=2,t.callbackNode=null,2}function W_(t,n){if(mn!==0&&mn!==5)return t.callbackNode=null,t.callbackPriority=0,null;var a=t.callbackNode;if(ec()&&t.callbackNode!==a)return null;var s=Pe;return s=Ee(t,t===rn?s:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),s===0?null:(D_(t,s,n),X_(t,Vt()),t.callbackNode!=null&&t.callbackNode===a?W_.bind(null,t):null)}function Y_(t,n){if(ec())return null;D_(t,n,!0)}function HM(){$M(function(){(Ye&6)!==0?Lt(le,FM):k_()})}function rd(){if(Er===0){var t=Kr;t===0&&(t=X,X<<=1,(X&261888)===0&&(X=256)),Er=t}return Er}function q_(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:Jl(t)}function GM(t,n,a,s,u){if(n==="submit"&&a&&a.stateNode===u){var f=q_((u[W]||null).action),_=s.submitter;_&&(n=(n=_[W]||null)?q_(n.formAction):_.getAttribute("formAction"),n!==null&&(f=n,_=null));var R=new nu("action","action",null,s,u);t.push({event:R,listeners:[{instance:null,listener:function(){if(s.defaultPrevented){if(Er!==0){var z=new FormData(u,_);dh(a,{pending:!0,data:z,method:u.method,action:f},null,z)}}else typeof f=="function"&&(R.preventDefault(),z=new FormData(u,_),dh(a,{pending:!0,data:z,method:u.method,action:f},f,z))},currentTarget:u}]})}}for(var sd=0;sd<Nf.length;sd++){var od=Nf[sd],VM=od.toLowerCase(),kM=od[0].toUpperCase()+od.slice(1);qi(VM,"on"+kM)}qi(xg,"onAnimationEnd"),qi(Sg,"onAnimationIteration"),qi(yg,"onAnimationStart"),qi("dblclick","onDoubleClick"),qi("focusin","onFocus"),qi("focusout","onBlur"),qi(Jy,"onTransitionRun"),qi($y,"onTransitionStart"),qi(tM,"onTransitionCancel"),qi(Mg,"onTransitionEnd"),vn("onMouseEnter",["mouseout","mouseover"]),vn("onMouseLeave",["mouseout","mouseover"]),vn("onPointerEnter",["pointerout","pointerover"]),vn("onPointerLeave",["pointerout","pointerover"]),Wt("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Wt("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Wt("onBeforeInput",["compositionend","keypress","textInput","paste"]),Wt("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Wt("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Wt("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var fl="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),XM=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(fl));function Z_(t,n){n=(n&4)!==0;for(var a=0;a<t.length;a++){var s=t[a],u=s.event;s=s.listeners;t:{var f=void 0;if(n)for(var _=s.length-1;0<=_;_--){var R=s[_],z=R.instance,et=R.currentTarget;if(R=R.listener,z!==f&&u.isPropagationStopped())break t;f=R,u.currentTarget=et;try{f(u)}catch(dt){ru(dt)}u.currentTarget=null,f=z}else for(_=0;_<s.length;_++){if(R=s[_],z=R.instance,et=R.currentTarget,R=R.listener,z!==f&&u.isPropagationStopped())break t;f=R,u.currentTarget=et;try{f(u)}catch(dt){ru(dt)}u.currentTarget=null,f=z}}}}function Ne(t,n){var a=n[ut];a===void 0&&(a=n[ut]=new Set);var s=t+"__bubble";a.has(s)||(j_(n,t,2,!1),a.add(s))}function ld(t,n,a){var s=0;n&&(s|=4),j_(a,t,s,n)}var ic="_reactListening"+Math.random().toString(36).slice(2);function ud(t){if(!t[ic]){t[ic]=!0,qe.forEach(function(a){a!=="selectionchange"&&(XM.has(a)||ld(a,!1,t),ld(a,!0,t))});var n=t.nodeType===9?t:t.ownerDocument;n===null||n[ic]||(n[ic]=!0,ld("selectionchange",!1,n))}}function j_(t,n,a,s){switch(Bv(n)){case 2:var u=IE;break;case 8:u=zE;break;default:u=Cd}a=u.bind(null,n,a,t),u=void 0,!_f||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(u=!0),s?u!==void 0?t.addEventListener(n,a,{capture:!0,passive:u}):t.addEventListener(n,a,!0):u!==void 0?t.addEventListener(n,a,{passive:u}):t.addEventListener(n,a,!1)}function cd(t,n,a,s,u){var f=s;if((n&1)===0&&(n&2)===0&&s!==null)t:for(;;){if(s===null)return;var _=s.tag;if(_===3||_===4){var R=s.stateNode.containerInfo;if(R===u)break;if(_===4)for(_=s.return;_!==null;){var z=_.tag;if((z===3||z===4)&&_.stateNode.containerInfo===u)return;_=_.return}for(;R!==null;){if(_=fe(R),_===null)return;if(z=_.tag,z===5||z===6||z===26||z===27){s=f=_;continue t}R=R.parentNode}}s=s.return}jm(function(){var et=f,dt=mf(a),bt=[];t:{var J=Eg.get(t);if(J!==void 0){var ft=nu,Ft=t;switch(t){case"keypress":if(tu(a)===0)break t;case"keydown":case"keyup":ft=wy;break;case"focusin":Ft="focus",ft=yf;break;case"focusout":Ft="blur",ft=yf;break;case"beforeblur":case"afterblur":ft=yf;break;case"click":if(a.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":ft=Jm;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":ft=gy;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":ft=Ly;break;case xg:case Sg:case yg:ft=xy;break;case Mg:ft=Py;break;case"scroll":case"scrollend":ft=py;break;case"wheel":ft=zy;break;case"copy":case"cut":case"paste":ft=yy;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":ft=tg;break;case"submit":ft=Ny;break;case"toggle":case"beforetoggle":ft=Fy}var ee=(n&4)!==0,Se=!ee&&(t==="scroll"||t==="scrollend"),tt=ee?J!==null?J+"Capture":null:J;ee=[];for(var Y=et,ot;Y!==null;){var Mt=Y;if(ot=Mt.stateNode,Mt=Mt.tag,Mt!==5&&Mt!==26&&Mt!==27||ot===null||tt===null||(Mt=Lo(Y,tt),Mt!=null&&ee.push(hl(Y,Mt,ot))),Se)break;Y=Y.return}0<ee.length&&(J=new ft(J,Ft,null,a,dt),bt.push({event:J,listeners:ee}))}}if((n&7)===0){t:{if(ft=t==="mouseover"||t==="pointerover",J=t==="mouseout"||t==="pointerout",ft&&a!==pf&&(Ft=a.relatedTarget||a.fromElement)&&(fe(Ft)||Ft[gt]))break t;(J||ft)&&(Ft=dt.window===dt?dt:(ft=dt.ownerDocument)?ft.defaultView||ft.parentWindow:window,J?(ft=a.relatedTarget||a.toElement,J=et,ft=ft?fe(ft):null,ft!==null&&(Se=c(ft),ee=ft.tag,ft!==Se||ee!==5&&ee!==27&&ee!==6)&&(ft=null)):(J=null,ft=et),J!==ft&&(ee=Jm,Mt="onMouseLeave",tt="onMouseEnter",Y="mouse",(t==="pointerout"||t==="pointerover")&&(ee=tg,Mt="onPointerLeave",tt="onPointerEnter",Y="pointer"),Se=J==null?Ft:Kt(J),ot=ft==null?Ft:Kt(ft),Ft=new ee(Mt,Y+"leave",J,a,dt),Ft.target=Se,Ft.relatedTarget=ot,Mt=null,fe(dt)===et&&(ee=new ee(tt,Y+"enter",ft,a,dt),ee.target=ot,ee.relatedTarget=Se,Mt=ee),Se=Mt,ee=J&&ft?N(J,ft,WM):null,J!==null&&K_(bt,Ft,J,ee,!1),ft!==null&&Se!==null&&K_(bt,Se,ft,ee,!0)))}t:{if(J=et?Kt(et):window,ft=J.nodeName&&J.nodeName.toLowerCase(),ft==="select"||ft==="input"&&J.type==="file")var Qt=lg;else if(sg(J))if(ug)Qt=jy;else{Qt=qy;var Ie=Yy}else ft=J.nodeName,!ft||ft.toLowerCase()!=="input"||J.type!=="checkbox"&&J.type!=="radio"?et&&df(et.elementType)&&(Qt=lg):Qt=Zy;if(Qt&&(Qt=Qt(t,et))){og(bt,Qt,a,dt);break t}Ie&&Ie(t,J,et)}switch(Ie=et?Kt(et):window,t){case"focusin":(sg(Ie)||Ie.contentEditable==="true")&&(ws=Ie,wf=et,Go=null);break;case"focusout":Go=wf=ws=null;break;case"mousedown":Cf=!0;break;case"contextmenu":case"mouseup":case"dragend":Cf=!1,_g(bt,a,dt);break;case"selectionchange":if(Qy)break;case"keydown":case"keyup":_g(bt,a,dt)}var re;if(Ef)t:{switch(t){case"compositionstart":var ue="onCompositionStart";break t;case"compositionend":ue="onCompositionEnd";break t;case"compositionupdate":ue="onCompositionUpdate";break t}ue=void 0}else Rs?ag(t,a)&&(ue="onCompositionEnd"):t==="keydown"&&a.keyCode===229&&(ue="onCompositionStart");ue&&(eg&&a.locale!=="ko"&&(Rs||ue!=="onCompositionStart"?ue==="onCompositionEnd"&&Rs&&(re=Km()):(ar=dt,vf="value"in ar?ar.value:ar.textContent,Rs=!0)),Ie=ac(et,ue),0<Ie.length&&(ue=new $m(ue,t,null,a,dt),bt.push({event:ue,listeners:Ie}),re?ue.data=re:(re=rg(a),re!==null&&(ue.data=re)))),(re=Gy?Vy(t,a):ky(t,a))&&(ue=ac(et,"onBeforeInput"),0<ue.length&&(Ie=new $m("onBeforeInput","beforeinput",null,a,dt),bt.push({event:Ie,listeners:ue}),Ie.data=re)),GM(bt,t,et,a,dt)}Z_(bt,n)})}function hl(t,n,a){return{instance:t,listener:n,currentTarget:a}}function ac(t,n){for(var a=n+"Capture",s=[];t!==null;){var u=t,f=u.stateNode;if(u=u.tag,u!==5&&u!==26&&u!==27||f===null||(u=Lo(t,a),u!=null&&s.unshift(hl(t,u,f)),u=Lo(t,n),u!=null&&s.push(hl(t,u,f))),t.tag===3)return s;t=t.return}return[]}function WM(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function K_(t,n,a,s,u){for(var f=n._reactName,_=[];a!==null&&a!==s;){var R=a,z=R.alternate,et=R.stateNode;if(R=R.tag,z!==null&&z===s)break;R!==5&&R!==26&&R!==27||et===null||(z=et,u?(et=Lo(a,f),et!=null&&_.unshift(hl(a,et,z))):u||(et=Lo(a,f),et!=null&&_.push(hl(a,et,z)))),a=a.return}_.length!==0&&t.push({event:n,listeners:_})}var YM=/\r\n?/g,qM=/\u0000|\uFFFD/g;function Q_(t){return(typeof t=="string"?t:""+t).replace(YM,`
`).replace(qM,"")}function J_(t,n){return n=Q_(n),Q_(t)===n}function Qe(t,n,a,s,u,f){switch(a){case"children":if(typeof s=="string")n==="body"||n==="textarea"&&s===""||bs(t,s);else if(typeof s=="number"||typeof s=="bigint")n!=="body"&&bs(t,""+s);else return;break;case"className":yi(t,"class",s);break;case"tabIndex":yi(t,"tabindex",s);break;case"dir":case"role":case"viewBox":case"width":case"height":yi(t,a,s);break;case"style":qm(t,s,f);return;case"data":if(n!=="object"){yi(t,"data",s);break}case"src":case"href":if(s===""&&(n!=="a"||a!=="href")){t.removeAttribute(a);break}if(s==null||typeof s=="function"||typeof s=="symbol"||typeof s=="boolean"){t.removeAttribute(a);break}s=Jl(s),t.setAttribute(a,s);break;case"action":case"formAction":if(typeof s=="function"){t.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof f=="function"&&(a==="formAction"?(n!=="input"&&Qe(t,n,"name",u.name,u,null),Qe(t,n,"formEncType",u.formEncType,u,null),Qe(t,n,"formMethod",u.formMethod,u,null),Qe(t,n,"formTarget",u.formTarget,u,null)):(Qe(t,n,"encType",u.encType,u,null),Qe(t,n,"method",u.method,u,null),Qe(t,n,"target",u.target,u,null)));if(s==null||typeof s=="symbol"||typeof s=="boolean"){t.removeAttribute(a);break}s=Jl(s),t.setAttribute(a,s);break;case"onClick":s!=null&&(t.onclick=ua);return;case"onScroll":s!=null&&Ne("scroll",t);return;case"onScrollEnd":s!=null&&Ne("scrollend",t);return;case"dangerouslySetInnerHTML":if(s!=null){if(typeof s!="object"||!("__html"in s))throw Error(r(61));if(a=s.__html,a!=null){if(u.children!=null)throw Error(r(60));f?.__html!==a&&(t.innerHTML=a)}}break;case"multiple":t.multiple=s&&typeof s!="function"&&typeof s!="symbol";break;case"muted":t.muted=s&&typeof s!="function"&&typeof s!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(s==null||typeof s=="function"||typeof s=="boolean"||typeof s=="symbol"){t.removeAttribute("xlink:href");break}a=Jl(s),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":s!=null&&typeof s!="function"&&typeof s!="symbol"?t.setAttribute(a,s):t.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"credentialless":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":s&&typeof s!="function"&&typeof s!="symbol"?t.setAttribute(a,""):t.removeAttribute(a);break;case"capture":case"download":s===!0?t.setAttribute(a,""):s!==!1&&s!=null&&typeof s!="function"&&typeof s!="symbol"?t.setAttribute(a,s):t.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":s!=null&&typeof s!="function"&&typeof s!="symbol"&&!isNaN(s)&&1<=s?t.setAttribute(a,s):t.removeAttribute(a);break;case"rowSpan":case"start":s==null||typeof s=="function"||typeof s=="symbol"||isNaN(s)?t.removeAttribute(a):t.setAttribute(a,s);break;case"popover":Ne("beforetoggle",t),Ne("toggle",t),sn(t,"popover",s);break;case"xlinkActuate":Oe(t,"http://www.w3.org/1999/xlink","xlink:actuate",s);break;case"xlinkArcrole":Oe(t,"http://www.w3.org/1999/xlink","xlink:arcrole",s);break;case"xlinkRole":Oe(t,"http://www.w3.org/1999/xlink","xlink:role",s);break;case"xlinkShow":Oe(t,"http://www.w3.org/1999/xlink","xlink:show",s);break;case"xlinkTitle":Oe(t,"http://www.w3.org/1999/xlink","xlink:title",s);break;case"xlinkType":Oe(t,"http://www.w3.org/1999/xlink","xlink:type",s);break;case"xmlBase":Oe(t,"http://www.w3.org/XML/1998/namespace","xml:base",s);break;case"xmlLang":Oe(t,"http://www.w3.org/XML/1998/namespace","xml:lang",s);break;case"xmlSpace":Oe(t,"http://www.w3.org/XML/1998/namespace","xml:space",s);break;case"is":sn(t,"is",s);break;case"innerText":case"textContent":return;default:if(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")a=hy.get(a)||a,sn(t,a,s);else return}Te=!0}function fd(t,n,a,s,u,f){switch(a){case"style":qm(t,s,f);return;case"dangerouslySetInnerHTML":if(s!=null){if(typeof s!="object"||!("__html"in s))throw Error(r(61));if(a=s.__html,a!=null){if(u.children!=null)throw Error(r(60));f?.__html!==a&&(t.innerHTML=a)}}break;case"children":if(typeof s=="string")bs(t,s);else if(typeof s=="number"||typeof s=="bigint")bs(t,""+s);else return;break;case"onScroll":s!=null&&Ne("scroll",t);return;case"onScrollEnd":s!=null&&Ne("scrollend",t);return;case"onClick":s!=null&&(t.onclick=ua);return;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":return;case"innerText":case"textContent":return;default:if(!Cn.hasOwnProperty(a))t:{if(a[0]==="o"&&a[1]==="n"&&(u=a.endsWith("Capture"),f=a.slice(2,u?a.length-7:void 0),n=t[W]||null,n=n!=null?n[a]:null,typeof n=="function"&&t.removeEventListener(f,n,u),typeof s=="function")){typeof n!="function"&&n!==null&&(a in t?t[a]=null:t.hasAttribute(a)&&t.removeAttribute(a)),t.addEventListener(f,s,u);break t}Te=!0,a in t?t[a]=s:s===!0?t.setAttribute(a,""):sn(t,a,s)}return}Te=!0}function Xn(t,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Ne("error",t),Ne("load",t);var s=!1,u=!1,f;for(f in a)if(a.hasOwnProperty(f)){var _=a[f];if(_!=null)switch(f){case"src":s=!0;break;case"srcSet":u=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:Qe(t,n,f,_,a,null)}}u&&Qe(t,n,"srcSet",a.srcSet,a,null),s&&Qe(t,n,"src",a.src,a,null);return;case"input":Ne("invalid",t);var R=f=_=u=null,z=null,et=null;for(s in a)if(a.hasOwnProperty(s)){var dt=a[s];if(dt!=null)switch(s){case"name":u=dt;break;case"type":_=dt;break;case"checked":z=dt;break;case"defaultChecked":et=dt;break;case"value":f=dt;break;case"defaultValue":R=dt;break;case"children":case"dangerouslySetInnerHTML":if(dt!=null)throw Error(r(137,n));break;default:Qe(t,n,s,dt,a,null)}}km(t,f,R,z,et,_,u,!1);return;case"select":Ne("invalid",t),s=_=f=null;for(u in a)if(a.hasOwnProperty(u)&&(R=a[u],R!=null))switch(u){case"value":f=R;break;case"defaultValue":_=R;break;case"multiple":s=R;default:Qe(t,n,u,R,a,null)}n=f,a=_,t.multiple=!!s,n!=null?Es(t,!!s,n,!1):a!=null&&Es(t,!!s,a,!0);return;case"textarea":Ne("invalid",t),f=u=s=null;for(_ in a)if(a.hasOwnProperty(_)&&(R=a[_],R!=null))switch(_){case"value":s=R;break;case"defaultValue":u=R;break;case"children":f=R;break;case"dangerouslySetInnerHTML":if(R!=null)throw Error(r(91));break;default:Qe(t,n,_,R,a,null)}Wm(t,s,u,f);return;case"option":for(z in a)a.hasOwnProperty(z)&&(s=a[z],s!=null)&&(z==="selected"?t.selected=s&&typeof s!="function"&&typeof s!="symbol":Qe(t,n,z,s,a,null));return;case"dialog":Ne("beforetoggle",t),Ne("toggle",t),Ne("cancel",t),Ne("close",t);break;case"iframe":case"object":Ne("load",t);break;case"video":case"audio":for(s=0;s<fl.length;s++)Ne(fl[s],t);break;case"image":Ne("error",t),Ne("load",t);break;case"details":Ne("toggle",t);break;case"embed":case"source":case"link":Ne("error",t),Ne("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(et in a)if(a.hasOwnProperty(et)&&(s=a[et],s!=null))switch(et){case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:Qe(t,n,et,s,a,null)}return;default:if(df(n)){for(dt in a)a.hasOwnProperty(dt)&&(s=a[dt],s!==void 0&&fd(t,n,dt,s,a,void 0));return}}for(R in a)a.hasOwnProperty(R)&&(s=a[R],s!=null&&Qe(t,n,R,s,a,null))}var ZM={};function jM(t,n,a,s){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var u=null,f=null,_=null,R=null,z=null,et=null,dt=null;for(ft in a){var bt=a[ft];if(a.hasOwnProperty(ft)&&bt!=null)switch(ft){case"checked":break;case"value":break;case"defaultValue":z=bt;default:s.hasOwnProperty(ft)||Qe(t,n,ft,null,s,bt)}}for(var J in s){var ft=s[J];if(bt=a[J],s.hasOwnProperty(J)&&(ft!=null||bt!=null))switch(J){case"type":ft!==bt&&(Te=!0),f=ft;break;case"name":ft!==bt&&(Te=!0),u=ft;break;case"checked":ft!==bt&&(Te=!0),et=ft;break;case"defaultChecked":ft!==bt&&(Te=!0),dt=ft;break;case"value":ft!==bt&&(Te=!0),_=ft;break;case"defaultValue":ft!==bt&&(Te=!0),R=ft;break;case"children":case"dangerouslySetInnerHTML":if(ft!=null)throw Error(r(137,n));break;default:ft!==bt&&Qe(t,n,J,ft,s,bt)}}ff(t,_,R,z,et,dt,f,u);return;case"select":ft=_=R=J=null;for(f in a)if(z=a[f],a.hasOwnProperty(f)&&z!=null)switch(f){case"value":break;case"multiple":ft=z;default:s.hasOwnProperty(f)||Qe(t,n,f,null,s,z)}for(u in s)if(f=s[u],z=a[u],s.hasOwnProperty(u)&&(f!=null||z!=null))switch(u){case"value":f!==z&&(Te=!0),J=f;break;case"defaultValue":f!==z&&(Te=!0),R=f;break;case"multiple":f!==z&&(Te=!0),_=f;default:f!==z&&Qe(t,n,u,f,s,z)}n=R,a=_,s=ft,J!=null?Es(t,!!a,J,!1):!!s!=!!a&&(n!=null?Es(t,!!a,n,!0):Es(t,!!a,a?[]:"",!1));return;case"textarea":ft=J=null;for(R in a)if(u=a[R],a.hasOwnProperty(R)&&u!=null&&!s.hasOwnProperty(R))switch(R){case"value":break;case"children":break;default:Qe(t,n,R,null,s,u)}for(_ in s)if(u=s[_],f=a[_],s.hasOwnProperty(_)&&(u!=null||f!=null))switch(_){case"value":u!==f&&(Te=!0),J=u;break;case"defaultValue":u!==f&&(Te=!0),ft=u;break;case"children":break;case"dangerouslySetInnerHTML":if(u!=null)throw Error(r(91));break;default:u!==f&&Qe(t,n,_,u,s,f)}Xm(t,J,ft);return;case"option":for(var Ft in a)J=a[Ft],a.hasOwnProperty(Ft)&&J!=null&&!s.hasOwnProperty(Ft)&&(Ft==="selected"?t.selected=!1:Qe(t,n,Ft,null,s,J));for(z in s)J=s[z],ft=a[z],s.hasOwnProperty(z)&&J!==ft&&(J!=null||ft!=null)&&(z==="selected"?(J!==ft&&(Te=!0),t.selected=J&&typeof J!="function"&&typeof J!="symbol"):Qe(t,n,z,J,s,ft));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var ee in a)J=a[ee],a.hasOwnProperty(ee)&&J!=null&&!s.hasOwnProperty(ee)&&Qe(t,n,ee,null,s,J);for(et in s)if(J=s[et],ft=a[et],s.hasOwnProperty(et)&&J!==ft&&(J!=null||ft!=null))switch(et){case"children":case"dangerouslySetInnerHTML":if(J!=null)throw Error(r(137,n));break;default:Qe(t,n,et,J,s,ft)}return;default:if(df(n)){for(var Se in a)J=a[Se],a.hasOwnProperty(Se)&&J!==void 0&&!s.hasOwnProperty(Se)&&fd(t,n,Se,void 0,s,J);for(dt in s)J=s[dt],ft=a[dt],!s.hasOwnProperty(dt)||J===ft||J===void 0&&ft===void 0||fd(t,n,dt,J,s,ft);return}}for(var tt in a)J=a[tt],a.hasOwnProperty(tt)&&J!=null&&!s.hasOwnProperty(tt)&&Qe(t,n,tt,null,s,J);for(bt in s)J=s[bt],ft=a[bt],!s.hasOwnProperty(bt)||J===ft||J==null&&ft==null||Qe(t,n,bt,J,s,ft)}function $_(t){switch(t){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function KM(){if(typeof performance.getEntriesByType=="function"){for(var t=0,n=0,a=performance.getEntriesByType("resource"),s=0;s<a.length;s++){var u=a[s],f=u.transferSize,_=u.initiatorType,R=u.duration;if(f&&R&&$_(_)){for(_=0,R=u.responseEnd,s+=1;s<a.length;s++){var z=a[s],et=z.startTime;if(et>R)break;var dt=z.transferSize,bt=z.initiatorType;dt&&$_(bt)&&(z=z.responseEnd,_+=dt*(z<R?1:(R-et)/(z-et)))}if(--s,n+=8*(f+_)/(u.duration/1e3),t++,10<t)break}}if(0<t)return n/t/1e6}return navigator.connection&&(t=navigator.connection.downlink,typeof t=="number")?t:5}var hd=null,dd=null;function dl(t){return t.nodeType===9?t:t.ownerDocument}function tv(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function ev(t,n){if(t===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&n==="foreignObject"?0:t}function nv(t,n,a,s){return a=dl(a).createElement(t),a[A]=s,a[W]=n,Xn(a,t,n),be(a),a}function pd(t,n){return t==="textarea"||t==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var md=null;function QM(){var t=window.event;return t&&t.type==="popstate"?t===md?!1:(md=t,!0):(md=null,!1)}var gd=typeof setTimeout=="function"?setTimeout:void 0,JM=typeof clearTimeout=="function"?clearTimeout:void 0,iv=typeof Promise=="function"?Promise:void 0,av=typeof requestAnimationFrame=="function"?requestAnimationFrame:gd,$M=typeof queueMicrotask=="function"?queueMicrotask:typeof iv<"u"?function(t){return iv.resolve(null).then(t).catch(tE)}:gd;function tE(t){setTimeout(function(){throw t})}function br(t){return t==="head"}function rv(t,n){var a=n,s=0;do{var u=a.nextSibling;if(t.removeChild(a),u&&u.nodeType===8)if(a=u.data,a==="/$"||a==="/&"){if(s===0){t.removeChild(u),oo(n);return}s--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")s++;else if(a==="html")bd(t.ownerDocument.documentElement);else if(a==="head"){a=t.ownerDocument.head,bd(a);for(var f=a.firstChild;f;){var _=f.nextSibling,R=f.nodeName;f[Bt]||R==="SCRIPT"||R==="STYLE"||R==="LINK"&&f.rel.toLowerCase()==="stylesheet"||a.removeChild(f),f=_}}else a==="body"&&bd(t.ownerDocument.body);a=u}while(a);oo(n)}function sv(t,n){var a=t;t=0;do{var s=a.nextSibling;if(a.nodeType===1?n?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(n?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),s&&s.nodeType===8)if(a=s.data,a==="/$"){if(t===0)break;t--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||t++;a=s}while(a)}function ov(t,n,a){if(n=CSS.escape(n)!==n?"r-"+btoa(n).replace(/=/g,""):n,t.style.viewTransitionName=n,a!=null&&(t.style.viewTransitionClass=a),a=getComputedStyle(t),a.display==="inline"){if(n=t.getClientRects(),n.length===1)var s=1;else for(var u=s=0;u<n.length;u++){var f=n[u];0<f.width&&0<f.height&&s++}s===1&&(t=t.style,t.display=n.length===1?"inline-block":"block",t.marginTop="-"+a.paddingTop,t.marginBottom="-"+a.paddingBottom)}}function lv(t,n){t=t.style,n=n.style;var a=n!=null?n.hasOwnProperty("viewTransitionName")?n.viewTransitionName:n.hasOwnProperty("view-transition-name")?n["view-transition-name"]:null:null;t.viewTransitionName=a==null||typeof a=="boolean"?"":(""+a).trim(),a=n!=null?n.hasOwnProperty("viewTransitionClass")?n.viewTransitionClass:n.hasOwnProperty("view-transition-class")?n["view-transition-class"]:null:null,t.viewTransitionClass=a==null||typeof a=="boolean"?"":(""+a).trim(),t.display==="inline-block"&&(n==null?t.display=t.margin="":(a=n.display,t.display=a==null||typeof a=="boolean"?"":a,a=n.margin,a!=null?t.margin=a:(a=n.hasOwnProperty("marginTop")?n.marginTop:n["margin-top"],t.marginTop=a==null||typeof a=="boolean"?"":a,n=n.hasOwnProperty("marginBottom")?n.marginBottom:n["margin-bottom"],t.marginBottom=n==null||typeof n=="boolean"?"":n)))}function eE(t,n,a){return a=a.ownerDocument.defaultView,{rect:t,abs:n.position==="absolute"||n.position==="fixed",clip:n.clipPath!=="none"||n.overflow!=="visible"||n.filter!=="none"||n.mask!=="none"||n.mask!=="none"||n.borderRadius!=="0px",view:0<=t.bottom&&0<=t.right&&t.top<=a.innerHeight&&t.left<=a.innerWidth}}function _d(t){var n=t.getBoundingClientRect(),a=getComputedStyle(t);return eE(n,a,t)}function nE(t){return t.documentElement.clientHeight}function iE(t){this.addEventListener("load",t),this.addEventListener("error",t)}function aE(t,n,a,s,u,f,_,R,z){var et=n.nodeType===9?n:n.ownerDocument;try{var dt=et.startViewTransition({update:function(){var J=et.defaultView,ft=J.navigation&&J.navigation.transition,Ft=et.fonts.status;s();var ee=[];if(Ft==="loaded"&&(nE(et),et.fonts.status==="loading"&&ee.push(et.fonts.ready)),Ft=ee.length,t!==null)for(var Se=t.suspenseyImages,tt=0,Y=0;Y<Se.length;Y++){var ot=Se[Y];if(!ot.complete){var Mt=ot.getBoundingClientRect();if(0<Mt.bottom&&0<Mt.right&&Mt.top<J.innerHeight&&Mt.left<J.innerWidth){if(tt+=Cv(ot),tt>oc){ee.length=Ft;break}ot=new Promise(iE.bind(ot)),ee.push(ot)}}}if(0<ee.length)return J=Promise.race([Promise.all(ee),new Promise(function(Qt){return setTimeout(Qt,500)})]).then(u,u),(ft?Promise.allSettled([ft.finished,J]):J).then(f,f);if(u(),ft)return ft.finished.then(f,f);f()},types:a});et.__reactViewTransition=dt;var bt=[];return dt.ready.then(function(){for(var J=et.documentElement.getAnimations({subtree:!0}),ft=0;ft<J.length;ft++){var Ft=J[ft],ee=Ft.effect,Se=ee.pseudoElement;if(Se!=null&&Se.startsWith("::view-transition")){bt.push(Ft),Ft=ee.getKeyframes();for(var tt=Se=void 0,Y=!0,ot=0;ot<Ft.length;ot++){var Mt=Ft[ot],Qt=Mt.width;if(Se===void 0)Se=Qt;else if(Se!==Qt){Y=!1;break}if(Qt=Mt.height,tt===void 0)tt=Qt;else if(tt!==Qt){Y=!1;break}delete Mt.width,delete Mt.height,Mt.transform==="none"&&delete Mt.transform}Y&&Se!==void 0&&tt!==void 0&&(ee.setKeyframes(Ft),Y=getComputedStyle(ee.target,ee.pseudoElement),Y.width!==Se||Y.height!==tt)&&(Y=Ft[0],Y.width=Se,Y.height=tt,Y=Ft[Ft.length-1],Y.width=Se,Y.height=tt,ee.setKeyframes(Ft))}}_()},function(J){et.__reactViewTransition===dt&&(et.__reactViewTransition=null);try{typeof J=="object"&&J!==null&&J.name==="InvalidStateError"&&(J.message==="View transition was skipped because document visibility state is hidden."||J.message==="Skipping view transition because document visibility state has become hidden."||J.message==="Skipping view transition because viewport size changed."||J.message==="Transition was aborted because of invalid state")&&(J=null),J!==null&&z(J)}finally{s(),u(),_()}}),dt.finished.finally(function(){for(var J=0;J<bt.length;J++)bt[J].cancel();et.__reactViewTransition===dt&&(et.__reactViewTransition=null),R()}),dt}catch{return s(),u(),_(),null}}function os(t,n){this._scope=document.documentElement,this._selector="::view-transition-"+t+"("+n+")"}os.prototype.animate=function(t,n){return n=typeof n=="number"?{duration:n}:L({},n),n.pseudoElement=this._selector,this._scope.animate(t,n)},os.prototype.getAnimations=function(){for(var t=this._scope,n=this._selector,a=t.getAnimations({subtree:!0}),s=[],u=0;u<a.length;u++){var f=a[u].effect;f!==null&&f.target===t&&f.pseudoElement===n&&s.push(a[u])}return s},os.prototype.getComputedStyle=function(){return getComputedStyle(this._scope,this._selector)};function uv(t){return{name:t,group:new os("group",t),imagePair:new os("image-pair",t),old:new os("old",t),new:new os("new",t)}}function wi(t){this._fragmentFiber=t,this._observers=this._eventListeners=null}wi.prototype.addEventListener=function(t,n,a){var s=null,u=null;if(!(a!=null&&typeof a!="boolean"&&(s=a.signal||null,s!==null&&s.aborted))){this._eventListeners===null&&(this._eventListeners=[]);var f=this._eventListeners;if(fv(f,t,n,a)===-1){var _=this,R=n;a!=null&&typeof a!="boolean"&&a.once===!0&&(R=function(z){_.removeEventListener(t,n,a),typeof n=="function"?n.call(this,z):n.handleEvent(z)}),s!==null&&(u=_.removeEventListener.bind(_,t,n,a),s.addEventListener("abort",u,{once:!0}),u=s.removeEventListener.bind(s,"abort",u)),s=eo(a),f.push({type:t,listener:n,optionsOrUseCapture:a,attachedListener:R,cleanup:u}),g(this._fragmentFiber.child,!1,rE,t,R,s)}this._eventListeners=f}};function rE(t,n,a,s){return M(t).addEventListener(n,a,s),!1}wi.prototype.removeEventListener=function(t,n,a){var s=this._eventListeners;if(s!==null&&(n=fv(s,t,n,a),n!==-1)){var u=s[n];a=u.attachedListener;var f=u.cleanup;u=eo(u.optionsOrUseCapture),g(this._fragmentFiber.child,!1,sE,t,a,u),s.splice(n,1),f!==null&&f()}};function sE(t,n,a,s){return M(t).removeEventListener(n,a,s),!1}function eo(t){return t!=null&&typeof t!="boolean"&&(t.once===!0||t.signal instanceof AbortSignal)?{capture:t.capture,passive:t.passive}:t}function cv(t){return t==null?"c=0":typeof t=="boolean"?"c="+(t?"1":"0"):"c="+(t.capture?"1":"0")}function fv(t,n,a,s){if(t.length===0)return-1;s=cv(s);for(var u=0;u<t.length;u++){var f=t[u];if(f.type===n&&f.listener===a&&cv(f.optionsOrUseCapture)===s)return u}return-1}wi.prototype.dispatchEvent=function(t){var n=v(this._fragmentFiber);if(n===null)return!0;n=M(n);var a=this._eventListeners;if(a!==null&&0<a.length||!t.bubbles){var s=n.nodeType===9?n.createComment(""):document.createTextNode("");if(a)for(var u=0;u<a.length;u++){var f=a[u];s.addEventListener(f.type,f.attachedListener,eo(f.optionsOrUseCapture))}if(n.appendChild(s),t=s.dispatchEvent(t),a)for(u=0;u<a.length;u++)f=a[u],s.removeEventListener(f.type,f.attachedListener,eo(f.optionsOrUseCapture));return n.removeChild(s),t}return n.dispatchEvent(t)},wi.prototype.focus=function(t){g(this._fragmentFiber.child,!0,hv,t,void 0,void 0)};function hv(t,n){return t.tag===6?!1:(t=M(t),vE(t,n))}wi.prototype.focusLast=function(t){var n=[];g(this._fragmentFiber.child,!0,vd,n,void 0,void 0);for(var a=n.length-1;0<=a&&!hv(n[a],t);a--);};function vd(t,n){return n.push(t),!1}wi.prototype.blur=function(){var t=v(this._fragmentFiber);t!==null&&(t=M(t),t=dl(t).activeElement,t!==null&&g(this._fragmentFiber.child,!1,oE,t,void 0,void 0))};function oE(t,n){return t.tag===6?!1:(t=M(t),t===n||t.contains(n)?(n.blur(),!0):!1)}wi.prototype.observeUsing=function(t){this._observers===null&&(this._observers=new Set),this._observers.add(t),g(this._fragmentFiber.child,!1,lE,t,void 0,void 0)};function lE(t,n){return t.tag===6||(t=M(t),n.observe(t)),!1}wi.prototype.unobserveUsing=function(t){var n=this._observers;if(n!==null&&n.has(t)){n.delete(t),g(this._fragmentFiber.child,!1,uE,t,void 0,void 0);for(var a=n=0;a<Ji.length;a++){var s=Ji[a];s.fragmentInstance===this&&s.observer===t?t.unobserve(s.instance):Ji[n++]=s}Ji.length=n}};function uE(t,n){return t.tag===6||(t=M(t),n.unobserve(t)),!1}var Ji=[],xd=!1;function cE(t,n,a){Ji.push({fragmentInstance:t,observer:n,instance:a}),xd||(xd=!0,xE(function(){xd=!1;var s=Ji;Ji=[];for(var u=0;u<s.length;u++){var f=s[u];f.observer.unobserve(f.instance)}}))}wi.prototype.getClientRects=function(){var t=[];return g(this._fragmentFiber.child,!1,fE,t,void 0,void 0),t};function fE(t,n){if(t.tag===6){t=t.stateNode;var a=t.ownerDocument.createRange();a.selectNodeContents(t),n.push.apply(n,a.getClientRects())}else t=M(t),n.push.apply(n,t.getClientRects());return!1}wi.prototype.getRootNode=function(t){var n=v(this._fragmentFiber);return n===null?this:M(n).getRootNode(t)},wi.prototype.compareDocumentPosition=function(t){var n=v(this._fragmentFiber);if(n===null)return Node.DOCUMENT_POSITION_DISCONNECTED;var a=[];g(this._fragmentFiber.child,!1,vd,a,void 0,void 0);var s=M(n);if(a.length===0){if(a=s,y(this._fragmentFiber)){t:{for(n=this._fragmentFiber.return;n!==null;){if(n.tag===4){n=n.stateNode.containerInfo;break t}if(n.tag===3||n.tag===5||n.tag===27)break;n=n.return}n=null}n!=null&&(a=n)}n=this._fragmentFiber;var u=s=a.compareDocumentPosition(t);return a===t?u=Node.DOCUMENT_POSITION_CONTAINS:s&Node.DOCUMENT_POSITION_CONTAINED_BY&&(a=T(n)[1],a===null?u=Node.DOCUMENT_POSITION_PRECEDING:(t=M(a).compareDocumentPosition(t),u=t===0||t&Node.DOCUMENT_POSITION_FOLLOWING?Node.DOCUMENT_POSITION_FOLLOWING:Node.DOCUMENT_POSITION_PRECEDING)),u|=Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC}n=M(a[0]),u=M(a[a.length-1]);var f=y(this._fragmentFiber)?n.parentElement:s;if(f==null)return Node.DOCUMENT_POSITION_DISCONNECTED;s=f.compareDocumentPosition(n)&Node.DOCUMENT_POSITION_CONTAINED_BY,f=f.compareDocumentPosition(u)&Node.DOCUMENT_POSITION_CONTAINED_BY;var _=n.compareDocumentPosition(t),R=u.compareDocumentPosition(t),z=_&Node.DOCUMENT_POSITION_CONTAINED_BY||R&Node.DOCUMENT_POSITION_CONTAINED_BY;return R=s&&f&&_&Node.DOCUMENT_POSITION_FOLLOWING&&R&Node.DOCUMENT_POSITION_PRECEDING,n=s&&n===t||f&&u===t||z||R?Node.DOCUMENT_POSITION_CONTAINED_BY:!s&&n===t||!f&&u===t?Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC:_,n&Node.DOCUMENT_POSITION_DISCONNECTED||n&Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC||hE(n,this._fragmentFiber,a[0],a[a.length-1],t)?n:Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC};function hE(t,n,a,s,u){var f=fe(u);if(t&Node.DOCUMENT_POSITION_CONTAINED_BY){if(a=!!f)t:{for(;f!==null;){if(f.tag===7&&(f===n||f.alternate===n)){a=!0;break t}f=f.return}a=!1}return a}if(t&Node.DOCUMENT_POSITION_CONTAINS){if(f===null)return f=u.ownerDocument,u===f||u===f.documentElement||u===f.body;t:{for(f=n,n=v(n);f!==null;){if(!(f.tag!==5&&f.tag!==3&&f.tag!==27||f!==n&&f.alternate!==n)){f=!0;break t}f=f.return}f=!1}return f}return t&Node.DOCUMENT_POSITION_PRECEDING?((n=!!f)&&!(n=f===a)&&(n=N(a,f,U),n===null?n=!1:(g(n,!0,F,f,a),f=S,S=null,n=f!==null)),n):t&Node.DOCUMENT_POSITION_FOLLOWING?((n=!!f)&&!(n=f===s)&&(n=N(s,f,U),n===null?n=!1:(g(n,!0,C,f,s),f=S,P=S=null,n=f!==null)),n):!1}function dv(t,n){var a=t.ownerDocument.createRange();a.selectNodeContents(t),t=a.getBoundingClientRect(),window.scrollTo(window.scrollX+t.left,n?window.scrollY+t.top:window.scrollY+t.bottom-window.innerHeight)}wi.prototype.scrollIntoView=function(t){if(typeof t=="object")throw Error(r(566));var n=[];g(this._fragmentFiber.child,!1,vd,n,void 0,void 0);var a=t!==!1;if(n.length===0){var s=T(this._fragmentFiber);if(s=a?s[1]||s[0]||v(this._fragmentFiber):s[0]||s[1],s===null)return;if(s.tag===6){t=M(s),dv(t,a);return}if(s=M(s),s.nodeType!==9){if(s.nodeType===11){a="host"in s?s.host:null,a!==null&&a.scrollIntoView(t);return}s.scrollIntoView(t)}}for(s=a?n.length-1:0;s!==(a?-1:n.length);){var u=n[s];u.tag===6?(u=M(u),dv(u,a)):M(u).scrollIntoView(t),s+=a?-1:1}};function dE(t,n){return t=M(t),pv(t,n),!1}function pv(t,n){t.reactFragments==null&&(t.reactFragments=new Set),t.reactFragments.add(n)}function mv(t,n){var a=n._eventListeners;if(a!==null)for(var s=0;s<a.length;s++){var u=a[s];t.addEventListener(u.type,u.attachedListener,eo(u.optionsOrUseCapture))}t.nodeType!==3&&(a=n._observers,a!==null&&a.forEach(function(f){for(var _=0,R=0;R<Ji.length;R++){var z=Ji[R];(z.fragmentInstance!==n||z.observer!==f||z.instance!==t)&&(Ji[_++]=z)}Ji.length=_,f.observe(t)}),pv(t,n))}function pE(t,n){var a=n._eventListeners;if(a!==null)for(var s=0;s<a.length;s++){var u=a[s];t.removeEventListener(u.type,u.attachedListener,eo(u.optionsOrUseCapture))}t.nodeType!==3&&(a=n._observers,a!==null&&a.forEach(function(f){typeof f.rootMargin=="string"?cE(n,f,t):f.unobserve(t)}),t.reactFragments!=null&&t.reactFragments.delete(n))}function Sd(t){var n=t.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":Sd(a),te(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}t.removeChild(a)}}function mE(t,n,a,s){for(;t.nodeType===1;){var u=a;if(t.nodeName.toLowerCase()!==n.toLowerCase()){if(!s&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(s){if(!t[Bt])switch(n){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(f=t.getAttribute("rel"),f==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(f!==u.rel||t.getAttribute("href")!==(u.href==null||u.href===""?null:u.href)||t.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin)||t.getAttribute("title")!==(u.title==null?null:u.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(f=t.getAttribute("src"),(f!==(u.src==null?null:u.src)||t.getAttribute("type")!==(u.type==null?null:u.type)||t.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin))&&f&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(n==="input"&&t.type==="hidden"){var f=u.name==null?null:""+u.name;if(u.type==="hidden"&&t.getAttribute("name")===f)return t}else return t;if(t=Gi(t.nextSibling),t===null)break}return null}function gE(t,n,a){if(n==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!a||(t=Gi(t.nextSibling),t===null))return null;return t}function gv(t,n){for(;t.nodeType!==8;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!n||(t=Gi(t.nextSibling),t===null))return null;return t}function yd(t){return t.data==="$?"||t.data==="$~"}function Md(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState!=="loading"}function _E(t,n){var a=t.ownerDocument;if(t.data==="$~")t._reactRetry=n;else if(t.data!=="$?"||a.readyState!=="loading")n();else{var s=function(){n(),a.removeEventListener("DOMContentLoaded",s)};a.addEventListener("DOMContentLoaded",s),t._reactRetry=s}}function Gi(t){for(;t!=null;t=t.nextSibling){var n=t.nodeType;if(n===1||n===3)break;if(n===8){if(n=t.data,n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"||n==="F!"||n==="F")break;if(n==="/$"||n==="/&")return null}}return t}var Ed=null;function _v(t){t=t.nextSibling;for(var n=0;t;){if(t.nodeType===8){var a=t.data;if(a==="/$"||a==="/&"){if(n===0)return Gi(t.nextSibling);n--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||n++}t=t.nextSibling}return null}function vv(t){t=t.previousSibling;for(var n=0;t;){if(t.nodeType===8){var a=t.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(n===0)return t;n--}else a!=="/$"&&a!=="/&"||n++}t=t.previousSibling}return null}function vE(t,n){function a(){s=!0}if(t.ownerDocument.activeElement===t)return!0;var s=!1;try{t.ownerDocument.addEventListener("focus",a,!0),(t.focus||HTMLElement.prototype.focus).call(t,n)}finally{t.ownerDocument.removeEventListener("focus",a,!0)}return s}function xE(t){av(function(){av(function(n){return t(n)})})}function xv(t,n,a){switch(n=dl(a),t){case"html":if(t=n.documentElement,!t)throw Error(r(452));return t;case"head":if(t=n.head,!t)throw Error(r(453));return t;case"body":if(t=n.body,!t)throw Error(r(454));return t;default:throw Error(r(451))}}function Sv(t,n,a){for(var s in a){var u=a[s];a.hasOwnProperty(s)&&u!=null&&Qe(t,n,s,null,ZM,u)}a.dangerouslySetInnerHTML!=null&&(t.textContent=""),t.onclick===ua&&(t.onclick=null),te(t)}function bd(t){for(var n=t.attributes;n.length;)t.removeAttributeNode(n[0]);te(t)}var Vi=new Map,yv=new Set;function pl(t){if(typeof t.getRootNode=="function"){var n=t.getRootNode();if(n.nodeType===9||n.nodeType===11)return n}return t.nodeType===9?t:t.ownerDocument}var Xa=Dt.d;Dt.d={f:SE,r:yE,D:ME,C:EE,L:bE,m:TE,X:RE,S:AE,M:wE};function SE(){var t=Xa.f(),n=Ju();return t||n}function yE(t){var n=ge(t);n!==null&&n.tag===5&&n.type==="form"?E0(n):Xa.r(t)}var no=typeof document>"u"?null:document;function Mv(t,n,a){var s=no;if(s&&typeof n=="string"&&n){var u=Oi(n);u='link[rel="'+t+'"][href="'+u+'"]',typeof a=="string"&&(u+='[crossorigin="'+a+'"]'),yv.has(u)||(yv.add(u),t={rel:t,crossOrigin:a,href:n},s.querySelector(u)===null&&(n=s.createElement("link"),Xn(n,"link",t),be(n),s.head.appendChild(n)))}}function ME(t){Xa.D(t),Mv("dns-prefetch",t,null)}function EE(t,n){Xa.C(t,n),Mv("preconnect",t,n)}function bE(t,n,a){Xa.L(t,n,a);var s=no;if(s&&t&&n){var u='link[rel="preload"][as="'+Oi(n)+'"]';n==="image"&&a&&a.imageSrcSet?(u+='[imagesrcset="'+Oi(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(u+='[imagesizes="'+Oi(a.imageSizes)+'"]')):u+='[href="'+Oi(t)+'"]';var f=u;switch(n){case"style":f=io(t);break;case"script":f=ao(t)}if(!(Vi.has(f)||(t=L({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:t,as:n},a),Vi.set(f,t),s.querySelector(u)!==null||n==="style"&&s.querySelector(ml(f))||n==="script"&&s.querySelector(gl(f))))){var _=s.createElement("link");Xn(_,"link",t),n==="style"&&(_[Jt]=!0,_.onload=_.onerror=function(){tn(_)}),be(_),s.head.appendChild(_)}}}function TE(t,n){Xa.m(t,n);var a=no;if(a&&t){var s=n&&typeof n.as=="string"?n.as:"script",u='link[rel="modulepreload"][as="'+Oi(s)+'"][href="'+Oi(t)+'"]',f=u;switch(s){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":f=ao(t)}if(!Vi.has(f)&&(t=L({rel:"modulepreload",href:t},n),Vi.set(f,t),a.querySelector(u)===null)){switch(s){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(gl(f)))return}s=a.createElement("link"),Xn(s,"link",t),be(s),a.head.appendChild(s)}}}function AE(t,n,a){Xa.S(t,n,a);var s=no;if(s&&t){var u=Ce(s).hoistableStyles,f=io(t);n=n||"default";var _=u.get(f);if(!_){var R={loading:0,preload:null};if(_=s.querySelector(ml(f)))R.loading=5;else{t=L({rel:"stylesheet",href:t,"data-precedence":n},a),(a=Vi.get(f))&&Td(t,a);var z=_=s.createElement("link");be(z),Xn(z,"link",t),z._p=new Promise(function(et,dt){z.onload=et,z.onerror=dt}),z.addEventListener("load",function(){R.loading|=1}),z.addEventListener("error",function(){R.loading|=2}),R.loading|=4,rc(_,n,s)}_={type:"stylesheet",instance:_,count:1,state:R},u.set(f,_)}}}function RE(t,n){Xa.X(t,n);var a=no;if(a&&t){var s=Ce(a).hoistableScripts,u=ao(t),f=s.get(u);f||(f=a.querySelector(gl(u)),f||(t=L({src:t,async:!0},n),(n=Vi.get(u))&&Ad(t,n),f=a.createElement("script"),be(f),Xn(f,"link",t),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},s.set(u,f))}}function wE(t,n){Xa.M(t,n);var a=no;if(a&&t){var s=Ce(a).hoistableScripts,u=ao(t),f=s.get(u);f||(f=a.querySelector(gl(u)),f||(t=L({src:t,async:!0,type:"module"},n),(n=Vi.get(u))&&Ad(t,n),f=a.createElement("script"),be(f),Xn(f,"link",t),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},s.set(u,f))}}function Ev(t,n,a,s){var u=(u=ze.current)?pl(u):null;if(!u)throw Error(r(446));switch(t){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(a=io(a.href),n=Ce(u).hoistableStyles,s=n.get(a),s||(s={type:"style",instance:null,count:0,state:null},n.set(a,s)),s):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){t=io(a.href);var f=Ce(u).hoistableStyles,_=f.get(t);if(_||(u=u.ownerDocument||u,_={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},f.set(t,_),(f=u.querySelector(ml(t)))?f._p||(_.instance=f,_.state.loading=5):(f=Vi.get(t),f||(f={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},Vi.set(t,f)),CE(u,t,f,_.state))),n&&s===null)throw Error(r(528,""));return _}if(n&&s!==null)throw Error(r(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(a=ao(a),n=Ce(u).hoistableScripts,s=n.get(a),s||(s={type:"script",instance:null,count:0,state:null},n.set(a,s)),s):{type:"void",instance:null,count:0,state:null};default:throw Error(r(444,t))}}function io(t){return'href="'+Oi(t)+'"'}function ml(t){return'link[rel="stylesheet"]['+t+"]"}function bv(t){return L({},t,{"data-precedence":t.precedence,precedence:null})}function CE(t,n,a,s){if(n=t.querySelector('link[rel="preload"][as="style"]['+n+"]")){if(n[Jt]!==!0){s.loading=1;return}}else n=t.createElement("link"),n[Jt]=!0,n.onload=n.onerror=tn.bind(null,n),Xn(n,"link",a),be(n),t.head.appendChild(n);s.preload=n,n.addEventListener("load",function(){return s.loading|=1}),n.addEventListener("error",function(){return s.loading|=2})}function ao(t){return'[src="'+Oi(t)+'"]'}function gl(t){return"script[async]"+t}function Tv(t,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var s=t.querySelector('style[data-href~="'+Oi(a.href)+'"]');if(s)return n.instance=s,be(s),s;var u=L({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return s=(t.ownerDocument||t).createElement("style"),be(s),Xn(s,"style",u),rc(s,a.precedence,t),n.instance=s;case"stylesheet":u=io(a.href);var f=t.querySelector(ml(u));if(f)return n.state.loading|=4,n.instance=f,be(f),f;s=bv(a),(u=Vi.get(u))&&Td(s,u),f=(t.ownerDocument||t).createElement("link"),be(f);var _=f;return _._p=new Promise(function(R,z){_.onload=R,_.onerror=z}),Xn(f,"link",s),n.state.loading|=4,rc(f,a.precedence,t),n.instance=f;case"script":return f=ao(a.src),(u=t.querySelector(gl(f)))?(n.instance=u,be(u),u):(s=a,(u=Vi.get(f))&&(s=L({},a),Ad(s,u)),t=t.ownerDocument||t,u=t.createElement("script"),be(u),Xn(u,"link",s),t.head.appendChild(u),n.instance=u);case"void":return null;default:throw Error(r(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(s=n.instance,n.state.loading|=4,rc(s,a.precedence,t));return n.instance}function rc(t,n,a){for(var s=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),u=s.length?s[s.length-1]:null,f=u,_=0;_<s.length;_++){var R=s[_];if(R.dataset.precedence===n)f=R;else if(f!==u)break}f?f.parentNode.insertBefore(t,f.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(t,n.firstChild))}function Td(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.title==null&&(t.title=n.title)}function Ad(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.integrity==null&&(t.integrity=n.integrity)}var sc=null;function Av(t,n,a){if(sc===null){var s=new Map,u=sc=new Map;u.set(a,s)}else u=sc,s=u.get(a),s||(s=new Map,u.set(a,s));if(s.has(t))return s;for(s.set(t,null),a=a.getElementsByTagName(t),u=0;u<a.length;u++){var f=a[u];if(!(f[Bt]||f[A]||t==="link"&&f.getAttribute("rel")==="stylesheet")&&f.namespaceURI!=="http://www.w3.org/2000/svg"){var _=f.getAttribute(n)||"";_=t+_;var R=s.get(_);R?R.push(f):s.set(_,[f])}}return s}function Rd(t,n,a){t=t.ownerDocument||t,t.head.insertBefore(a,n==="title"?t.querySelector("head > title"):null)}function DE(t,n,a){if(a===1||n.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;return n.rel==="stylesheet"?(t=n.disabled,typeof n.precedence=="string"&&t==null):!0;case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function Rv(t,n){return t==="img"&&n.src!=null&&n.src!==""&&n.onLoad==null&&n.loading!=="lazy"}function wv(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}function Cv(t){return(t.width||100)*(t.height||100)*(typeof devicePixelRatio=="number"?devicePixelRatio:1)*.25}function Dv(t,n){typeof n.decode=="function"&&(t.imgCount++,n.complete||(t.imgBytes+=Cv(n),t.suspenseyImages.push(n)),t=LE.bind(t),n.decode().then(t,t))}function NE(t,n,a,s){if(a.type==="stylesheet"&&(typeof s.media!="string"||matchMedia(s.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var u=io(s.href),f=n.querySelector(ml(u));if(f){n=f._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(t.count++,t=_l.bind(t),n.then(t,t)),a.state.loading|=4,a.instance=f,be(f);return}f=n.ownerDocument||n,s=bv(s),(u=Vi.get(u))&&Td(s,u),f=f.createElement("link"),be(f);var _=f;_._p=new Promise(function(R,z){_.onload=R,_.onerror=z}),Xn(f,"link",s),a.instance=f}t.stylesheets===null&&(t.stylesheets=new Map),t.stylesheets.set(a,n),(n=a.state.preload)&&(a.state.loading&3)===0&&(t.count++,a=_l.bind(t),n.addEventListener("load",a),n.addEventListener("error",a))}}var oc=0;function UE(t,n){return t.stylesheets&&t.count===0&&uc(t,t.stylesheets),0<t.count||0<t.imgCount?function(a){var s=setTimeout(function(){if(t.stylesheets&&uc(t,t.stylesheets),t.unsuspend){var f=t.unsuspend;t.unsuspend=null,f()}},6e4+n);0<t.imgBytes&&oc===0&&(oc=62500*KM());var u=setTimeout(function(){if(t.waitingForImages=!1,t.count===0&&(t.stylesheets&&uc(t,t.stylesheets),t.unsuspend)){var f=t.unsuspend;t.unsuspend=null,f()}},(t.imgBytes>oc?50:800)+n);return t.unsuspend=a,function(){t.unsuspend=null,clearTimeout(s),clearTimeout(u)}}:null}function Nv(t){if(t.count===0&&(t.imgCount===0||!t.waitingForImages)){if(t.stylesheets)uc(t,t.stylesheets);else if(t.unsuspend){var n=t.unsuspend;t.unsuspend=null,n()}}}function _l(){this.count--,Nv(this)}function LE(){this.imgCount--,Nv(this)}var lc=null;function uc(t,n){t.stylesheets=null,t.unsuspend!==null&&(t.count++,lc=new Map,n.forEach(OE,t),lc=null,_l.call(t))}function OE(t,n){if(!(n.state.loading&4)){var a=lc.get(t);if(a)var s=a.get(null);else{a=new Map,lc.set(t,a);for(var u=t.querySelectorAll("link[data-precedence],style[data-precedence]"),f=0;f<u.length;f++){var _=u[f];(_.nodeName==="LINK"||_.getAttribute("media")!=="not all")&&(a.set(_.dataset.precedence,_),s=_)}s&&a.set(null,s)}u=n.instance,_=u.getAttribute("data-precedence"),f=a.get(_)||s,f===s&&a.set(null,u),a.set(_,u),this.count++,s=_l.bind(this),u.addEventListener("load",s),u.addEventListener("error",s),f?f.parentNode.insertBefore(u,f.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(u,t.firstChild)),n.state.loading|=4}}var ro={$$typeof:K,Provider:null,Consumer:null,_currentValue:Le,_currentValue2:Le,_threadCount:0};function PE(t,n,a,s,u,f,_,R,z){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=wn(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=wn(0),this.hiddenUpdates=wn(null),this.identifierPrefix=s,this.onUncaughtError=u,this.onCaughtError=f,this.onRecoverableError=_,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=z,this.transitionTypes=null,this.incompleteTransitions=new Map}function Uv(t,n,a,s,u,f,_,R,z,et,dt,bt){return t=new PE(t,n,a,_,z,et,dt,bt,R),n=1,f===!0&&(n|=24),f=fi(3,null,null,n),t.current=f,f.stateNode=t,n=Vf(),n.refCount++,t.pooledCache=n,n.refCount++,f.memoizedState={element:s,isDehydrated:a,cache:n},Yf(f),t}function Lv(t){return t?(t=Ns,t):Ns}function Ov(t,n,a,s,u,f){u=Lv(u),s.context===null?s.context=u:s.pendingContext=u,s=hr(n),s.payload={element:a},f=f===void 0?null:f,f!==null&&(s.callback=f),a=dr(t,s,n),a!==null&&(mi(a,t,n),Zo(a,t,n))}function Pv(t,n){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var a=t.retryLane;t.retryLane=a!==0&&a<n?a:n}}function wd(t,n){Pv(t,n),(t=t.alternate)&&Pv(t,n)}function Iv(t){if(t.tag===13||t.tag===31){var n=Xr(t,67108864);n!==null&&mi(n,t,67108864),wd(t,67108864)}}function zv(t){if(t.tag===13||t.tag===31){var n=Ri();n=ci(n);var a=Xr(t,n);a!==null&&mi(a,t,n),wd(t,n)}}var so=!0;function IE(t,n,a,s){var u=xt.T;xt.T=null;var f=Dt.p;try{Dt.p=2,Cd(t,n,a,s)}finally{Dt.p=f,xt.T=u}}function zE(t,n,a,s){var u=xt.T;xt.T=null;var f=Dt.p;try{Dt.p=8,Cd(t,n,a,s)}finally{Dt.p=f,xt.T=u}}function Cd(t,n,a,s){if(so){var u=Dd(s);if(u===null)cd(t,n,s,cc,a),Fv(t,s);else if(FE(u,t,n,a,s))s.stopPropagation();else if(Fv(t,s),n&4&&-1<BE.indexOf(t)){for(;u!==null;){var f=ge(u);if(f!==null)switch(f.tag){case 3:if(f=f.stateNode,f.current.memoizedState.isDehydrated){var _=Ge(f.pendingLanes);if(_!==0){var R=f;for(R.pendingLanes|=2,R.entangledLanes|=2;_;){var z=1<<31-de(_);R.entanglements[1]|=z,_&=~z}xa(f),(Ye&6)===0&&(ju=Vt()+500,cl(0))}}break;case 31:case 13:R=Xr(f,2),R!==null&&mi(R,f,2),Ju(),wd(f,2)}if(f=Dd(s),f===null&&cd(t,n,s,cc,a),f===u)break;u=f}u!==null&&s.stopPropagation()}else cd(t,n,s,null,a)}}function Dd(t){return t=mf(t),Nd(t)}var cc=null;function Nd(t){if(cc=null,t=fe(t),t!==null){var n=c(t);if(n===null)t=null;else{var a=n.tag;if(a===13){if(t=h(n),t!==null)return t;t=null}else if(a===31){if(t=d(n),t!==null)return t;t=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;t=null}else n!==t&&(t=null)}}return cc=t,null}function Bv(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"fullscreenerror":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"resize":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(ie()){case le:return 2;case Z:return 8;case Nt:case yt:return 32;case Ut:return 268435456;default:return 32}default:return 32}}var Ud=!1,Tr=null,Ar=null,Rr=null,vl=new Map,xl=new Map,wr=[],BE="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Fv(t,n){switch(t){case"focusin":case"focusout":Tr=null;break;case"dragenter":case"dragleave":Ar=null;break;case"mouseover":case"mouseout":Rr=null;break;case"pointerover":case"pointerout":vl.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":xl.delete(n.pointerId)}}function Sl(t,n,a,s,u,f){return t===null||t.nativeEvent!==f?(t={blockedOn:n,domEventName:a,eventSystemFlags:s,nativeEvent:f,targetContainers:[u]},n!==null&&(n=ge(n),n!==null&&Iv(n)),t):(t.eventSystemFlags|=s,n=t.targetContainers,u!==null&&n.indexOf(u)===-1&&n.push(u),t)}function FE(t,n,a,s,u){switch(n){case"focusin":return Tr=Sl(Tr,t,n,a,s,u),!0;case"dragenter":return Ar=Sl(Ar,t,n,a,s,u),!0;case"mouseover":return Rr=Sl(Rr,t,n,a,s,u),!0;case"pointerover":var f=u.pointerId;return vl.set(f,Sl(vl.get(f)||null,t,n,a,s,u)),!0;case"gotpointercapture":return f=u.pointerId,xl.set(f,Sl(xl.get(f)||null,t,n,a,s,u)),!0}return!1}function Hv(t){var n=fe(t.target);if(n!==null){var a=c(n);if(a!==null){if(n=a.tag,n===13){if(n=h(a),n!==null){t.blockedOn=n,Kl(t.priority,function(){zv(a)});return}}else if(n===31){if(n=d(a),n!==null){t.blockedOn=n,Kl(t.priority,function(){zv(a)});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){t.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}t.blockedOn=null}function fc(t){if(t.blockedOn!==null)return!1;for(var n=t.targetContainers;0<n.length;){var a=Dd(t.nativeEvent);if(a===null){a=t.nativeEvent;var s=new a.constructor(a.type,a);pf=s,a.target.dispatchEvent(s),pf=null}else return n=ge(a),n!==null&&Iv(n),t.blockedOn=a,!1;n.shift()}return!0}function Gv(t,n,a){fc(t)&&a.delete(n)}function HE(){Ud=!1,Tr!==null&&fc(Tr)&&(Tr=null),Ar!==null&&fc(Ar)&&(Ar=null),Rr!==null&&fc(Rr)&&(Rr=null),vl.forEach(Gv),xl.forEach(Gv)}function hc(t,n){t.blockedOn===n&&(t.blockedOn=null,Ud||(Ud=!0,o.unstable_scheduleCallback(o.unstable_NormalPriority,HE)))}var dc=null;function Vv(t){dc!==t&&(dc=t,o.unstable_scheduleCallback(o.unstable_NormalPriority,function(){dc===t&&(dc=null);for(var n=0;n<t.length;n+=3){var a=t[n],s=t[n+1],u=t[n+2];if(typeof s!="function"){if(Nd(s||a)===null)continue;break}var f=ge(a);f!==null&&(t.splice(n,3),n-=3,dh(f,{pending:!0,data:u,method:a.method,action:s},s,u))}}))}function oo(t){function n(z){return hc(z,t)}Tr!==null&&hc(Tr,t),Ar!==null&&hc(Ar,t),Rr!==null&&hc(Rr,t),vl.forEach(n),xl.forEach(n);for(var a=0;a<wr.length;a++){var s=wr[a];s.blockedOn===t&&(s.blockedOn=null)}for(;0<wr.length&&(a=wr[0],a.blockedOn===null);)Hv(a),a.blockedOn===null&&wr.shift();if(a=(t.ownerDocument||t).$$reactFormReplay,a!=null)for(s=0;s<a.length;s+=3){var u=a[s],f=a[s+1],_=u[W]||null;if(typeof f=="function")_||Vv(a);else if(_){var R=null;if(f&&f.hasAttribute("formAction")){if(u=f,_=f[W]||null)R=_.formAction;else if(Nd(u)!==null)continue}else R=_.action;typeof R=="function"?a[s+1]=R:(a.splice(s,3),s-=3),Vv(a)}}}function kv(){function t(f){f.canIntercept&&f.info==="react-transition"&&f.intercept({handler:function(){return new Promise(function(_){return u=_})},focusReset:"manual",scroll:"manual"})}function n(){u!==null&&(u(),u=null),s||setTimeout(a,20)}function a(){if(!s&&!navigation.transition){var f=navigation.currentEntry;f&&f.url!=null&&navigation.navigate(f.url,{state:f.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var s=!1,u=null;return navigation.addEventListener("navigate",t),navigation.addEventListener("navigatesuccess",n),navigation.addEventListener("navigateerror",n),setTimeout(a,100),function(){s=!0,navigation.removeEventListener("navigate",t),navigation.removeEventListener("navigatesuccess",n),navigation.removeEventListener("navigateerror",n),u!==null&&(u(),u=null)}}}function Ld(t){this._internalRoot=t}pc.prototype.render=Ld.prototype.render=function(t){var n=this._internalRoot;if(n===null)throw Error(r(409));var a=n.current,s=Ri();Ov(a,s,t,n,null,null)},pc.prototype.unmount=Ld.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var n=t.containerInfo;Ov(t.current,2,null,t,null,null),Ju(),n[gt]=null}};function pc(t){this._internalRoot=t}pc.prototype.unstable_scheduleHydration=function(t){if(t){var n=jl();t={blockedOn:null,target:t,priority:n};for(var a=0;a<wr.length&&n!==0&&n<wr[a].priority;a++);wr.splice(a,0,t),a===0&&Hv(t)}};var Xv=e.version;if(Xv!=="19.3.1")throw Error(r(527,Xv,"19.3.1"));Dt.findDOMNode=function(t){var n=t._reactInternals;if(n===void 0)throw typeof t.render=="function"?Error(r(188)):(t=Object.keys(t).join(","),Error(r(268,t)));return t=m(n),t=t!==null?x(t):null,t=t===null?null:t.stateNode,t};var GE={bundleType:0,version:"19.3.1",rendererPackageName:"react-dom",currentDispatcherRef:xt,reconcilerVersion:"19.3.1"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var mc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!mc.isDisabled&&mc.supportsFiber)try{$t=mc.inject(GE),Ht=mc}catch{}}return Ml.createRoot=function(t,n){if(!l(t))throw Error(r(299));var a=!1,s="",u=L0,f=O0,_=P0;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onUncaughtError!==void 0&&(u=n.onUncaughtError),n.onCaughtError!==void 0&&(f=n.onCaughtError),n.onRecoverableError!==void 0&&(_=n.onRecoverableError)),n=Uv(t,1,!1,null,null,a,s,null,u,f,_,kv),t[gt]=n.current,ud(t),new Ld(n)},Ml.hydrateRoot=function(t,n,a){if(!l(t))throw Error(r(299));var s=!1,u="",f=L0,_=O0,R=P0,z=null;return a!=null&&(a.unstable_strictMode===!0&&(s=!0),a.identifierPrefix!==void 0&&(u=a.identifierPrefix),a.onUncaughtError!==void 0&&(f=a.onUncaughtError),a.onCaughtError!==void 0&&(_=a.onCaughtError),a.onRecoverableError!==void 0&&(R=a.onRecoverableError),a.formState!==void 0&&(z=a.formState)),n=Uv(t,1,!0,n,a??null,s,u,z,f,_,R,kv),n.context=Lv(null),a=n.current,s=Ri(),s=ci(s),u=hr(s),u.callback=null,dr(a,u,s),a=s,n.current.lanes=a,Fn(n,a),xa(n),t[gt]=n.current,ud(t),new pc(n)},Ml.version="19.3.1",Ml}var tx;function QE(){if(tx)return Id.exports;tx=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(e){console.error(e)}}return o(),Id.exports=KE(),Id.exports}var JE=QE(),li=Uint8Array,Ui=Uint16Array,Sm=Int32Array,ym=new li([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),Mm=new li([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),ex=new li([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),gS=function(o,e){for(var i=new Ui(31),r=0;r<31;++r)i[r]=e+=1<<o[r-1];for(var l=new Sm(i[30]),r=1;r<30;++r)for(var c=i[r];c<i[r+1];++c)l[c]=c-i[r]<<5|r;return{b:i,r:l}},_S=gS(ym,2),$E=_S.b,Mp=_S.r;$E[28]=258,Mp[258]=28;var tb=gS(Mm,0),nx=tb.r,Ep=new Ui(32768);for(var fn=0;fn<32768;++fn){var Dr=(fn&43690)>>1|(fn&21845)<<1;Dr=(Dr&52428)>>2|(Dr&13107)<<2,Dr=(Dr&61680)>>4|(Dr&3855)<<4,Ep[fn]=((Dr&65280)>>8|(Dr&255)<<8)>>1}var zl=(function(o,e,i){for(var r=o.length,l=0,c=new Ui(e);l<r;++l)o[l]&&++c[o[l]-1];var h=new Ui(e);for(l=1;l<e;++l)h[l]=h[l-1]+c[l-1]<<1;var d;if(i){d=new Ui(1<<e);var p=15-e;for(l=0;l<r;++l)if(o[l])for(var m=l<<4|o[l],x=e-o[l],g=h[o[l]-1]++<<x,v=g|(1<<x)-1;g<=v;++g)d[Ep[g]>>p]=m}else for(d=new Ui(r),l=0;l<r;++l)o[l]&&(d[l]=Ep[h[o[l]-1]++]>>15-o[l]);return d}),_s=new li(288);for(var fn=0;fn<144;++fn)_s[fn]=8;for(var fn=144;fn<256;++fn)_s[fn]=9;for(var fn=256;fn<280;++fn)_s[fn]=7;for(var fn=280;fn<288;++fn)_s[fn]=8;var qc=new li(32);for(var fn=0;fn<32;++fn)qc[fn]=5;var eb=zl(_s,9,0),nb=zl(qc,5,0),vS=function(o){return(o+7)/8|0},xS=function(o,e,i){return(i==null||i>o.length)&&(i=o.length),new li(o.subarray(e,i))},ib=["unexpected EOF","invalid block type","invalid length/literal","invalid distance","stream finished","no stream handler",,"no callback","invalid UTF-8 data","extra field too long","date not in range 1980-2099","filename too long","stream finishing","invalid zip data"],af=function(o,e,i){var r=new Error(e||ib[o]);if(r.code=o,Error.captureStackTrace&&Error.captureStackTrace(r,af),!i)throw r;return r},Wa=function(o,e,i){i<<=e&7;var r=e/8|0;o[r]|=i,o[r+1]|=i>>8},El=function(o,e,i){i<<=e&7;var r=e/8|0;o[r]|=i,o[r+1]|=i>>8,o[r+2]|=i>>16},Hd=function(o,e){for(var i=[],r=0;r<o.length;++r)o[r]&&i.push({s:r,f:o[r]});var l=i.length,c=i.slice();if(!l)return{t:yS,l:0};if(l==1){var h=new li(i[0].s+1);return h[i[0].s]=1,{t:h,l:1}}i.sort(function(U,N){return U.f-N.f}),i.push({s:-1,f:25001});var d=i[0],p=i[1],m=0,x=1,g=2;for(i[0]={s:-1,f:d.f+p.f,l:d,r:p};x!=l-1;)d=i[i[m].f<i[g].f?m++:g++],p=i[m!=x&&i[m].f<i[g].f?m++:g++],i[x++]={s:-1,f:d.f+p.f,l:d,r:p};for(var v=c[0].s,r=1;r<l;++r)c[r].s>v&&(v=c[r].s);var y=new Ui(v+1),T=bp(i[x-1],y,0);if(T>e){var r=0,w=0,M=T-e,S=1<<M;for(c.sort(function(N,L){return y[L.s]-y[N.s]||N.f-L.f});r<l;++r){var P=c[r].s;if(y[P]>e)w+=S-(1<<T-y[P]),y[P]=e;else break}for(w>>=M;w>0;){var F=c[r].s;y[F]<e?w-=1<<e-y[F]++-1:++r}for(;r>=0&&w;--r){var C=c[r].s;y[C]==e&&(--y[C],++w)}T=e}return{t:new li(y),l:T}},bp=function(o,e,i){return o.s==-1?Math.max(bp(o.l,e,i+1),bp(o.r,e,i+1)):e[o.s]=i},ix=function(o){for(var e=o.length;e&&!o[--e];);for(var i=new Ui(++e),r=0,l=o[0],c=1,h=function(p){i[r++]=p},d=1;d<=e;++d)if(o[d]==l&&d!=e)++c;else{if(!l&&c>2){for(;c>138;c-=138)h(32754);c>2&&(h(c>10?c-11<<5|28690:c-3<<5|12305),c=0)}else if(c>3){for(h(l),--c;c>6;c-=6)h(8304);c>2&&(h(c-3<<5|8208),c=0)}for(;c--;)h(l);c=1,l=o[d]}return{c:i.subarray(0,r),n:e}},bl=function(o,e){for(var i=0,r=0;r<e.length;++r)i+=o[r]*e[r];return i},SS=function(o,e,i){var r=i.length,l=vS(e+2);o[l]=r&255,o[l+1]=r>>8,o[l+2]=o[l]^255,o[l+3]=o[l+1]^255;for(var c=0;c<r;++c)o[l+c+4]=i[c];return(l+4+r)*8},ax=function(o,e,i,r,l,c,h,d,p,m,x){Wa(e,x++,i),++l[256];for(var g=Hd(l,15),v=g.t,y=g.l,T=Hd(c,15),w=T.t,M=T.l,S=ix(v),P=S.c,F=S.n,C=ix(w),U=C.c,N=C.n,L=new Ui(19),b=0;b<P.length;++b)++L[P[b]&31];for(var b=0;b<U.length;++b)++L[U[b]&31];for(var D=Hd(L,7),V=D.t,O=D.l,H=19;H>4&&!V[ex[H-1]];--H);var Q=m+5<<3,G=bl(l,_s)+bl(c,qc)+h,K=bl(l,v)+bl(c,w)+h+14+3*H+bl(L,V)+2*L[16]+3*L[17]+7*L[18];if(p>=0&&Q<=G&&Q<=K)return SS(e,x,o.subarray(p,p+m));var k,q,it,rt;if(Wa(e,x,1+(K<G)),x+=2,K<G){k=zl(v,y,0),q=v,it=zl(w,M,0),rt=w;var ht=zl(V,O,0);Wa(e,x,F-257),Wa(e,x+5,N-1),Wa(e,x+10,H-4),x+=14;for(var b=0;b<H;++b)Wa(e,x+3*b,V[ex[b]]);x+=3*H;for(var vt=[P,U],Gt=0;Gt<2;++Gt)for(var qt=vt[Gt],b=0;b<qt.length;++b){var B=qt[b]&31;Wa(e,x,ht[B]),x+=V[B],B>15&&(Wa(e,x,qt[b]>>5&127),x+=qt[b]>>12)}}else k=eb,q=_s,it=nb,rt=qc;for(var b=0;b<d;++b){var pt=r[b];if(pt>255){var B=pt>>18&31;El(e,x,k[B+257]),x+=q[B+257],B>7&&(Wa(e,x,pt>>23&31),x+=ym[B]);var At=pt&31;El(e,x,it[At]),x+=rt[At],At>3&&(El(e,x,pt>>5&8191),x+=Mm[At])}else El(e,x,k[pt]),x+=q[pt]}return El(e,x,k[256]),x+q[256]},ab=new Sm([65540,131080,131088,131104,262176,1048704,1048832,2114560,2117632]),yS=new li(0),rb=function(o,e,i,r,l,c){var h=c.z||o.length,d=new li(r+h+5*(1+Math.ceil(h/7e3))+l),p=d.subarray(r,d.length-l),m=c.l,x=(c.r||0)&7;if(e){x&&(p[0]=c.r>>3);for(var g=ab[e-1],v=g>>13,y=g&8191,T=(1<<i)-1,w=c.p||new Ui(32768),M=c.h||new Ui(T+1),S=Math.ceil(i/3),P=2*S,F=function(ce){return(o[ce]^o[ce+1]<<S^o[ce+2]<<P)&T},C=new Sm(25e3),U=new Ui(288),N=new Ui(32),L=0,b=0,D=c.i||0,V=0,O=c.w||0,H=0;D+2<h;++D){var Q=F(D),G=D&32767,K=M[Q];if(w[G]=K,M[Q]=G,O<=D){var k=h-D;if((L>7e3||V>24576)&&(k>423||!m)){x=ax(o,p,0,C,U,N,b,V,H,D-H,x),V=L=b=0,H=D;for(var q=0;q<286;++q)U[q]=0;for(var q=0;q<30;++q)N[q]=0}var it=2,rt=0,ht=y,vt=G-K&32767;if(k>2&&Q==F(D-vt))for(var Gt=Math.min(v,k)-1,qt=Math.min(32767,D),B=Math.min(258,k);vt<=qt&&--ht&&G!=K;){if(o[D+it]==o[D+it-vt]){for(var pt=0;pt<B&&o[D+pt]==o[D+pt-vt];++pt);if(pt>it){if(it=pt,rt=vt,pt>Gt)break;for(var At=Math.min(vt,pt-2),$=0,q=0;q<At;++q){var mt=D-vt+q&32767,Rt=w[mt],It=mt-Rt&32767;It>$&&($=It,K=mt)}}}G=K,K=w[G],vt+=G-K&32767}if(rt){C[V++]=268435456|Mp[it]<<18|nx[rt];var xt=Mp[it]&31,Dt=nx[rt]&31;b+=ym[xt]+Mm[Dt],++U[257+xt],++N[Dt],O=D+it,++L}else C[V++]=o[D],++U[o[D]]}}for(D=Math.max(D,O);D<h;++D)C[V++]=o[D],++U[o[D]];x=ax(o,p,m,C,U,N,b,V,H,D-H,x),m||(c.r=x&7|p[x/8|0]<<3,x-=7,c.h=M,c.p=w,c.i=D,c.w=O)}else{for(var D=c.w||0;D<h+m;D+=65535){var Le=D+65535;Le>=h&&(p[x/8|0]=m,Le=h),x=SS(p,x+1,o.subarray(D,Le))}c.i=h}return xS(d,0,r+vS(x)+l)},sb=(function(){for(var o=new Int32Array(256),e=0;e<256;++e){for(var i=e,r=9;--r;)i=(i&1&&-306674912)^i>>>1;o[e]=i}return o})(),ob=function(){var o=-1;return{p:function(e){for(var i=o,r=0;r<e.length;++r)i=sb[i&255^e[r]]^i>>>8;o=i},d:function(){return~o}}},lb=function(o,e,i,r,l){if(!l&&(l={l:1},e.dictionary)){var c=e.dictionary.subarray(-32768),h=new li(c.length+o.length);h.set(c),h.set(o,c.length),o=h,l.w=c.length}return rb(o,e.level==null?6:e.level,e.mem==null?l.l?Math.ceil(Math.max(8,Math.min(13,Math.log(o.length)))*1.5):20:12+e.mem,i,r,l)},MS=function(o,e){var i={};for(var r in o)i[r]=o[r];for(var r in e)i[r]=e[r];return i},Yn=function(o,e,i){for(;i;++e)o[e]=i,i>>>=8};function ub(o,e){return lb(o,e||{},0,0)}var ES=function(o,e,i,r){for(var l in o){var c=o[l],h=e+l,d=r;Array.isArray(c)&&(d=MS(r,c[1]),c=c[0]),ArrayBuffer.isView(c)?i[h]=[c,d]:(i[h+="/"]=[new li(0),d],ES(c,h,i,r))}},rx=typeof TextEncoder<"u"&&new TextEncoder,cb=typeof TextDecoder<"u"&&new TextDecoder,fb=0;try{cb.decode(yS,{stream:!0}),fb=1}catch{}function Tp(o,e){var i;if(rx)return rx.encode(o);for(var r=o.length,l=new li(o.length+(o.length>>1)),c=0,h=function(m){l[c++]=m},i=0;i<r;++i){if(c+5>l.length){var d=new li(c+8+(r-i<<1));d.set(l),l=d}var p=o.charCodeAt(i);p<128||e?h(p):p<2048?(h(192|p>>6),h(128|p&63)):p>55295&&p<57344?(p=65536+(p&1047552)|o.charCodeAt(++i)&1023,h(240|p>>18),h(128|p>>12&63),h(128|p>>6&63),h(128|p&63)):(h(224|p>>12),h(128|p>>6&63),h(128|p&63))}return xS(l,0,c)}var Ap=function(o){var e=0;if(o)for(var i in o){var r=o[i].length;r>65535&&af(9),e+=r+4}return e},sx=function(o,e,i,r,l,c,h,d){var p=r.length,m=i.extra,x=d&&d.length,g=Ap(m);Yn(o,e,h!=null?33639248:67324752),e+=4,h!=null&&(o[e++]=20,o[e++]=i.os),o[e]=20,e+=2,o[e++]=i.flag<<1|(c<0&&8),o[e++]=l&&8,o[e++]=i.compression&255,o[e++]=i.compression>>8;var v=new Date(i.mtime==null?Date.now():i.mtime),y=v.getFullYear()-1980;if((y<0||y>119)&&af(10),Yn(o,e,y<<25|v.getMonth()+1<<21|v.getDate()<<16|v.getHours()<<11|v.getMinutes()<<5|v.getSeconds()>>1),e+=4,c!=-1&&(Yn(o,e,i.crc),Yn(o,e+4,c<0?-c-2:c),Yn(o,e+8,i.size)),Yn(o,e+12,p),Yn(o,e+14,g),e+=16,h!=null&&(Yn(o,e,x),Yn(o,e+6,i.attrs),Yn(o,e+10,h),e+=14),o.set(r,e),e+=p,g)for(var T in m){var w=m[T],M=w.length;Yn(o,e,+T),Yn(o,e+2,M),o.set(w,e+4),e+=4+M}return x&&(o.set(d,e),e+=x),e},hb=function(o,e,i,r,l){Yn(o,e,101010256),Yn(o,e+8,i),Yn(o,e+10,i),Yn(o,e+12,r),Yn(o,e+16,l)};function db(o,e){e||(e={});var i={},r=[];ES(o,"",i,e);var l=0,c=0;for(var h in i){var d=i[h],p=d[0],m=d[1],x=m.level==0?0:8,g=Tp(h),v=g.length,y=m.comment,T=y&&Tp(y),w=T&&T.length,M=Ap(m.extra);v>65535&&af(11);var S=x?ub(p,m):p,P=S.length,F=ob();F.p(p),r.push(MS(m,{size:p.length,crc:F.d(),c:S,f:g,m:T,u:v!=h.length||T&&y.length!=w,o:l,compression:x})),l+=30+v+M+P,c+=76+2*(v+M)+(w||0)+P}for(var C=new li(c+22),U=l,N=c-l,L=0;L<r.length;++L){var g=r[L];sx(C,g.o,g,g.f,g.u,g.c.length);var b=30+g.f.length+Ap(g.extra);C.set(g.c,g.o+b),sx(C,l,g,g.f,g.u,g.c.length,g.o,g.m),l+=16+b+(g.m?g.m.length:0)}return hb(C,l,r.length,N,U),C}const Em="186",Ro={ROTATE:0,DOLLY:1,PAN:2},bo={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},pb=0,ox=1,mb=2,Bl=1,gb=2,Pl=3,vs=0,vi=1,Ja=2,tr=0,Fl=1,lx=2,ux=3,cx=4,_b=5,Eo=100,vb=101,xb=102,Sb=103,yb=104,Mb=200,Eb=201,bb=202,Tb=203,bS=204,TS=205,Ab=206,Rb=207,wb=208,Cb=209,Db=210,Nb=211,Ub=212,Lb=213,Ob=214,Rp=0,wp=1,Cp=2,Gl=3,Dp=4,Np=5,Up=6,Lp=7,AS=0,Pb=1,Ib=2,Ta=0,RS=1,wS=2,CS=3,DS=4,NS=5,US=6,LS=7,OS=300,xs=301,Do=302,Gd=303,Vd=304,rf=306,Op=1e3,$a=1001,Pp=1002,qn=1003,zb=1004,gc=1005,$n=1006,kd=1007,ms=1008,Ni=1009,PS=1010,IS=1011,Vl=1012,bm=1013,Aa=1014,Ea=1015,Ra=1016,Tm=1017,Am=1018,kl=1020,zS=35902,BS=35899,FS=1021,HS=1022,ia=1023,ir=1026,gs=1027,GS=1028,Rm=1029,Ss=1030,wm=1031,Cm=1033,Gc=33776,Vc=33777,kc=33778,Xc=33779,Ip=35840,zp=35841,Bp=35842,Fp=35843,Hp=36196,Gp=37492,Vp=37496,kp=37488,Xp=37489,Zc=37490,Wp=37491,Yp=37808,qp=37809,Zp=37810,jp=37811,Kp=37812,Qp=37813,Jp=37814,$p=37815,tm=37816,em=37817,nm=37818,im=37819,am=37820,rm=37821,sm=36492,om=36494,lm=36495,um=36283,cm=36284,jc=36285,fm=36286,Bb=3200,hm=0,Fb=1,Ir="",Xi="srgb",Kc="srgb-linear",Qc="linear",Je="srgb",Xd=7680,Hb=519,Gb=512,Vb=513,kb=514,Dm=515,Xb=516,Wb=517,Nm=518,Yb=519,qb=35044,fx="300 es",ba=2e3,Xl=2001;function Zb(o){for(let e=o.length-1;e>=0;--e)if(o[e]>=65535)return!0;return!1}function Jc(o){return document.createElementNS("http://www.w3.org/1999/xhtml",o)}function jb(){const o=Jc("canvas");return o.style.display="block",o}const hx={};function dx(...o){const e="THREE."+o.shift();console.log(e,...o)}function VS(o){const e=o[0];if(typeof e=="string"&&e.startsWith("TSL:")){const i=o[1];i&&i.isStackTrace?o[0]+=" "+i.getLocation():o[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return o}function he(...o){o=VS(o);const e="THREE."+o.shift();{const i=o[0];i&&i.isStackTrace?console.warn(i.getError(e)):console.warn(e,...o)}}function ke(...o){o=VS(o);const e="THREE."+o.shift();{const i=o[0];i&&i.isStackTrace?console.error(i.getError(e)):console.error(e,...o)}}function wo(...o){const e=o.join(" ");e in hx||(hx[e]=!0,he(...o))}function Kb(o,e,i){return new Promise(function(r,l){function c(){switch(o.clientWaitSync(e,o.SYNC_FLUSH_COMMANDS_BIT,0)){case o.WAIT_FAILED:l();break;case o.TIMEOUT_EXPIRED:setTimeout(c,i);break;default:r()}}setTimeout(c,i)})}const Qb={[Rp]:wp,[Cp]:Up,[Dp]:Lp,[Gl]:Np,[wp]:Rp,[Up]:Cp,[Lp]:Dp,[Np]:Gl};class Hr{addEventListener(e,i){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(i)===-1&&r[e].push(i)}hasEventListener(e,i){const r=this._listeners;return r===void 0?!1:r[e]!==void 0&&r[e].indexOf(i)!==-1}removeEventListener(e,i){const r=this._listeners;if(r===void 0)return;const l=r[e];if(l!==void 0){const c=l.indexOf(i);c!==-1&&l.splice(c,1)}}dispatchEvent(e){const i=this._listeners;if(i===void 0)return;const r=i[e.type];if(r!==void 0){e.target=this;const l=r.slice(0);for(let c=0,h=l.length;c<h;c++)l[c].call(this,e);e.target=null}}}const Qn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Wc=Math.PI/180,dm=180/Math.PI;function Yl(){const o=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(Qn[o&255]+Qn[o>>8&255]+Qn[o>>16&255]+Qn[o>>24&255]+"-"+Qn[e&255]+Qn[e>>8&255]+"-"+Qn[e>>16&15|64]+Qn[e>>24&255]+"-"+Qn[i&63|128]+Qn[i>>8&255]+"-"+Qn[i>>16&255]+Qn[i>>24&255]+Qn[r&255]+Qn[r>>8&255]+Qn[r>>16&255]+Qn[r>>24&255]).toLowerCase()}function Ue(o,e,i){return Math.max(e,Math.min(i,o))}function Jb(o,e){return(o%e+e)%e}function Wd(o,e,i){return(1-i)*o+i*e}function Tl(o,e){switch(e.constructor){case Float32Array:return o;case Uint32Array:return o/4294967295;case Uint16Array:return o/65535;case Uint8Array:case Uint8ClampedArray:return o/255;case Int32Array:return Math.max(o/2147483647,-1);case Int16Array:return Math.max(o/32767,-1);case Int8Array:return Math.max(o/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function gi(o,e){switch(e.constructor){case Float32Array:return o;case Uint32Array:return Math.round(o*4294967295);case Uint16Array:return Math.round(o*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(o*255);case Int32Array:return Math.round(o*2147483647);case Int16Array:return Math.round(o*32767);case Int8Array:return Math.round(o*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}const $b={DEG2RAD:Wc},zm=class zm{constructor(e=0,i=0){this.x=e,this.y=i}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,i){return this.x=e,this.y=i,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const i=this.x,r=this.y,l=e.elements;return this.x=l[0]*i+l[3]*r+l[6],this.y=l[1]*i+l[4]*r+l[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,i){return this.x=Ue(this.x,e.x,i.x),this.y=Ue(this.y,e.y,i.y),this}clampScalar(e,i){return this.x=Ue(this.x,e,i),this.y=Ue(this.y,e,i),this}clampLength(e,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Ue(r,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(e)/i;return Math.acos(Ue(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,r=this.y-e.y;return i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this}lerpVectors(e,i,r){return this.x=e.x+(i.x-e.x)*r,this.y=e.y+(i.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this}rotateAround(e,i){const r=Math.cos(i),l=Math.sin(i),c=this.x-e.x,h=this.y-e.y;return this.x=c*r-h*l+e.x,this.y=c*l+h*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};zm.prototype.isVector2=!0;let me=zm;class Br{constructor(e=0,i=0,r=0,l=1){this.isQuaternion=!0,this._x=e,this._y=i,this._z=r,this._w=l}static slerpFlat(e,i,r,l,c,h,d){let p=r[l+0],m=r[l+1],x=r[l+2],g=r[l+3],v=c[h+0],y=c[h+1],T=c[h+2],w=c[h+3];if(g!==w||p!==v||m!==y||x!==T){let M=p*v+m*y+x*T+g*w;M<0&&(v=-v,y=-y,T=-T,w=-w,M=-M);let S=1-d;if(M<.9995){const P=Math.acos(M),F=Math.sin(P);S=Math.sin(S*P)/F,d=Math.sin(d*P)/F,p=p*S+v*d,m=m*S+y*d,x=x*S+T*d,g=g*S+w*d}else{p=p*S+v*d,m=m*S+y*d,x=x*S+T*d,g=g*S+w*d;const P=1/Math.sqrt(p*p+m*m+x*x+g*g);p*=P,m*=P,x*=P,g*=P}}e[i]=p,e[i+1]=m,e[i+2]=x,e[i+3]=g}static multiplyQuaternionsFlat(e,i,r,l,c,h){const d=r[l],p=r[l+1],m=r[l+2],x=r[l+3],g=c[h],v=c[h+1],y=c[h+2],T=c[h+3];return e[i]=d*T+x*g+p*y-m*v,e[i+1]=p*T+x*v+m*g-d*y,e[i+2]=m*T+x*y+d*v-p*g,e[i+3]=x*T-d*g-p*v-m*y,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,i,r,l){return this._x=e,this._y=i,this._z=r,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,i=!0){const r=e._x,l=e._y,c=e._z,h=e._order,d=Math.cos,p=Math.sin,m=d(r/2),x=d(l/2),g=d(c/2),v=p(r/2),y=p(l/2),T=p(c/2);switch(h){case"XYZ":this._x=v*x*g+m*y*T,this._y=m*y*g-v*x*T,this._z=m*x*T+v*y*g,this._w=m*x*g-v*y*T;break;case"YXZ":this._x=v*x*g+m*y*T,this._y=m*y*g-v*x*T,this._z=m*x*T-v*y*g,this._w=m*x*g+v*y*T;break;case"ZXY":this._x=v*x*g-m*y*T,this._y=m*y*g+v*x*T,this._z=m*x*T+v*y*g,this._w=m*x*g-v*y*T;break;case"ZYX":this._x=v*x*g-m*y*T,this._y=m*y*g+v*x*T,this._z=m*x*T-v*y*g,this._w=m*x*g+v*y*T;break;case"YZX":this._x=v*x*g+m*y*T,this._y=m*y*g+v*x*T,this._z=m*x*T-v*y*g,this._w=m*x*g-v*y*T;break;case"XZY":this._x=v*x*g-m*y*T,this._y=m*y*g-v*x*T,this._z=m*x*T+v*y*g,this._w=m*x*g+v*y*T;break;default:he("Quaternion: .setFromEuler() encountered an unknown order: "+h)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,i){const r=i/2,l=Math.sin(r);return this._x=e.x*l,this._y=e.y*l,this._z=e.z*l,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const i=e.elements,r=i[0],l=i[4],c=i[8],h=i[1],d=i[5],p=i[9],m=i[2],x=i[6],g=i[10],v=r+d+g;if(v>0){const y=.5/Math.sqrt(v+1);this._w=.25/y,this._x=(x-p)*y,this._y=(c-m)*y,this._z=(h-l)*y}else if(r>d&&r>g){const y=2*Math.sqrt(1+r-d-g);this._w=(x-p)/y,this._x=.25*y,this._y=(l+h)/y,this._z=(c+m)/y}else if(d>g){const y=2*Math.sqrt(1+d-r-g);this._w=(c-m)/y,this._x=(l+h)/y,this._y=.25*y,this._z=(p+x)/y}else{const y=2*Math.sqrt(1+g-r-d);this._w=(h-l)/y,this._x=(c+m)/y,this._y=(p+x)/y,this._z=.25*y}return this._onChangeCallback(),this}setFromUnitVectors(e,i){let r=e.dot(i)+1;return r<1e-8?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*i.z-e.z*i.y,this._y=e.z*i.x-e.x*i.z,this._z=e.x*i.y-e.y*i.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ue(this.dot(e),-1,1)))}rotateTowards(e,i){const r=this.angleTo(e);if(r===0)return this;const l=Math.min(1,i/r);return this.slerp(e,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,i){const r=e._x,l=e._y,c=e._z,h=e._w,d=i._x,p=i._y,m=i._z,x=i._w;return this._x=r*x+h*d+l*m-c*p,this._y=l*x+h*p+c*d-r*m,this._z=c*x+h*m+r*p-l*d,this._w=h*x-r*d-l*p-c*m,this._onChangeCallback(),this}slerp(e,i){let r=e._x,l=e._y,c=e._z,h=e._w,d=this.dot(e);d<0&&(r=-r,l=-l,c=-c,h=-h,d=-d);let p=1-i;if(d<.9995){const m=Math.acos(d),x=Math.sin(m);p=Math.sin(p*m)/x,i=Math.sin(i*m)/x,this._x=this._x*p+r*i,this._y=this._y*p+l*i,this._z=this._z*p+c*i,this._w=this._w*p+h*i,this._onChangeCallback()}else this._x=this._x*p+r*i,this._y=this._y*p+l*i,this._z=this._z*p+c*i,this._w=this._w*p+h*i,this.normalize();return this}slerpQuaternions(e,i,r){return this.copy(e).slerp(i,r)}random(){const e=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),r=Math.random(),l=Math.sqrt(1-r),c=Math.sqrt(r);return this.set(l*Math.sin(e),l*Math.cos(e),c*Math.sin(i),c*Math.cos(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,i=0){return this._x=e[i],this._y=e[i+1],this._z=e[i+2],this._w=e[i+3],this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._w,e}fromBufferAttribute(e,i){return this._x=e.getX(i),this._y=e.getY(i),this._z=e.getZ(i),this._w=e.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const Bm=class Bm{constructor(e=0,i=0,r=0){this.x=e,this.y=i,this.z=r}set(e,i,r){return r===void 0&&(r=this.z),this.x=e,this.y=i,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,i){return this.x=e.x*i.x,this.y=e.y*i.y,this.z=e.z*i.z,this}applyEuler(e){return this.applyQuaternion(px.setFromEuler(e))}applyAxisAngle(e,i){return this.applyQuaternion(px.setFromAxisAngle(e,i))}applyMatrix3(e){const i=this.x,r=this.y,l=this.z,c=e.elements;return this.x=c[0]*i+c[3]*r+c[6]*l,this.y=c[1]*i+c[4]*r+c[7]*l,this.z=c[2]*i+c[5]*r+c[8]*l,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const i=this.x,r=this.y,l=this.z,c=e.elements,h=1/(c[3]*i+c[7]*r+c[11]*l+c[15]);return this.x=(c[0]*i+c[4]*r+c[8]*l+c[12])*h,this.y=(c[1]*i+c[5]*r+c[9]*l+c[13])*h,this.z=(c[2]*i+c[6]*r+c[10]*l+c[14])*h,this}applyQuaternion(e){const i=this.x,r=this.y,l=this.z,c=e.x,h=e.y,d=e.z,p=e.w,m=2*(h*l-d*r),x=2*(d*i-c*l),g=2*(c*r-h*i);return this.x=i+p*m+h*g-d*x,this.y=r+p*x+d*m-c*g,this.z=l+p*g+c*x-h*m,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const i=this.x,r=this.y,l=this.z,c=e.elements;return this.x=c[0]*i+c[4]*r+c[8]*l,this.y=c[1]*i+c[5]*r+c[9]*l,this.z=c[2]*i+c[6]*r+c[10]*l,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,i){return this.x=Ue(this.x,e.x,i.x),this.y=Ue(this.y,e.y,i.y),this.z=Ue(this.z,e.z,i.z),this}clampScalar(e,i){return this.x=Ue(this.x,e,i),this.y=Ue(this.y,e,i),this.z=Ue(this.z,e,i),this}clampLength(e,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Ue(r,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this}lerpVectors(e,i,r){return this.x=e.x+(i.x-e.x)*r,this.y=e.y+(i.y-e.y)*r,this.z=e.z+(i.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,i){const r=e.x,l=e.y,c=e.z,h=i.x,d=i.y,p=i.z;return this.x=l*p-c*d,this.y=c*h-r*p,this.z=r*d-l*h,this}projectOnVector(e){const i=e.lengthSq();if(i===0)return this.set(0,0,0);const r=e.dot(this)/i;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return Yd.copy(this).projectOnVector(e),this.sub(Yd)}reflect(e){return this.sub(Yd.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(e)/i;return Math.acos(Ue(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,r=this.y-e.y,l=this.z-e.z;return i*i+r*r+l*l}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,i,r){const l=Math.sin(i)*e;return this.x=l*Math.sin(r),this.y=Math.cos(i)*e,this.z=l*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,i,r){return this.x=e*Math.sin(i),this.y=r,this.z=e*Math.cos(i),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(e){const i=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),l=this.setFromMatrixColumn(e,2).length();return this.x=i,this.y=r,this.z=l,this}setFromMatrixColumn(e,i){return this.fromArray(e.elements,i*4)}setFromMatrix3Column(e,i){return this.fromArray(e.elements,i*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,i=Math.random()*2-1,r=Math.sqrt(1-i*i);return this.x=r*Math.cos(e),this.y=i,this.z=r*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Bm.prototype.isVector3=!0;let lt=Bm;const Yd=new lt,px=new Br,Fm=class Fm{constructor(e,i,r,l,c,h,d,p,m){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,i,r,l,c,h,d,p,m)}set(e,i,r,l,c,h,d,p,m){const x=this.elements;return x[0]=e,x[1]=l,x[2]=d,x[3]=i,x[4]=c,x[5]=p,x[6]=r,x[7]=h,x[8]=m,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const i=this.elements,r=e.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],this}extractBasis(e,i,r){return e.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const i=e.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const r=e.elements,l=i.elements,c=this.elements,h=r[0],d=r[3],p=r[6],m=r[1],x=r[4],g=r[7],v=r[2],y=r[5],T=r[8],w=l[0],M=l[3],S=l[6],P=l[1],F=l[4],C=l[7],U=l[2],N=l[5],L=l[8];return c[0]=h*w+d*P+p*U,c[3]=h*M+d*F+p*N,c[6]=h*S+d*C+p*L,c[1]=m*w+x*P+g*U,c[4]=m*M+x*F+g*N,c[7]=m*S+x*C+g*L,c[2]=v*w+y*P+T*U,c[5]=v*M+y*F+T*N,c[8]=v*S+y*C+T*L,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[3]*=e,i[6]*=e,i[1]*=e,i[4]*=e,i[7]*=e,i[2]*=e,i[5]*=e,i[8]*=e,this}determinant(){const e=this.elements,i=e[0],r=e[1],l=e[2],c=e[3],h=e[4],d=e[5],p=e[6],m=e[7],x=e[8];return i*h*x-i*d*m-r*c*x+r*d*p+l*c*m-l*h*p}invert(){const e=this.elements,i=e[0],r=e[1],l=e[2],c=e[3],h=e[4],d=e[5],p=e[6],m=e[7],x=e[8],g=x*h-d*m,v=d*p-x*c,y=m*c-h*p,T=i*g+r*v+l*y;if(T===0)return this.set(0,0,0,0,0,0,0,0,0);const w=1/T;return e[0]=g*w,e[1]=(l*m-x*r)*w,e[2]=(d*r-l*h)*w,e[3]=v*w,e[4]=(x*i-l*p)*w,e[5]=(l*c-d*i)*w,e[6]=y*w,e[7]=(r*p-m*i)*w,e[8]=(h*i-r*c)*w,this}transpose(){let e;const i=this.elements;return e=i[1],i[1]=i[3],i[3]=e,e=i[2],i[2]=i[6],i[6]=e,e=i[5],i[5]=i[7],i[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const i=this.elements;return e[0]=i[0],e[1]=i[3],e[2]=i[6],e[3]=i[1],e[4]=i[4],e[5]=i[7],e[6]=i[2],e[7]=i[5],e[8]=i[8],this}setUvTransform(e,i,r,l,c,h,d){const p=Math.cos(c),m=Math.sin(c);return this.set(r*p,r*m,-r*(p*h+m*d)+h+e,-l*m,l*p,-l*(-m*h+p*d)+d+i,0,0,1),this}scale(e,i){return wo("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(qd.makeScale(e,i)),this}rotate(e){return wo("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(qd.makeRotation(-e)),this}translate(e,i){return wo("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(qd.makeTranslation(e,i)),this}makeTranslation(e,i){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,i,0,0,1),this}makeRotation(e){const i=Math.cos(e),r=Math.sin(e);return this.set(i,-r,0,r,i,0,0,0,1),this}makeScale(e,i){return this.set(e,0,0,0,i,0,0,0,1),this}equals(e){const i=this.elements,r=e.elements;for(let l=0;l<9;l++)if(i[l]!==r[l])return!1;return!0}fromArray(e,i=0){for(let r=0;r<9;r++)this.elements[r]=e[r+i];return this}toArray(e=[],i=0){const r=this.elements;return e[i]=r[0],e[i+1]=r[1],e[i+2]=r[2],e[i+3]=r[3],e[i+4]=r[4],e[i+5]=r[5],e[i+6]=r[6],e[i+7]=r[7],e[i+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}};Fm.prototype.isMatrix3=!0;let _e=Fm;const qd=new _e,mx=new _e().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),gx=new _e().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function tT(){const o={enabled:!0,workingColorSpace:Kc,spaces:{},convert:function(l,c,h){return this.enabled===!1||c===h||!c||!h||(this.spaces[c].transfer===Je&&(l.r=er(l.r),l.g=er(l.g),l.b=er(l.b)),this.spaces[c].primaries!==this.spaces[h].primaries&&(l.applyMatrix3(this.spaces[c].toXYZ),l.applyMatrix3(this.spaces[h].fromXYZ)),this.spaces[h].transfer===Je&&(l.r=Co(l.r),l.g=Co(l.g),l.b=Co(l.b))),l},workingToColorSpace:function(l,c){return this.convert(l,this.workingColorSpace,c)},colorSpaceToWorking:function(l,c){return this.convert(l,c,this.workingColorSpace)},getPrimaries:function(l){return this.spaces[l].primaries},getTransfer:function(l){return l===Ir?Qc:this.spaces[l].transfer},getToneMappingMode:function(l){return this.spaces[l].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(l,c=this.workingColorSpace){return l.fromArray(this.spaces[c].luminanceCoefficients)},define:function(l){Object.assign(this.spaces,l)},_getMatrix:function(l,c,h){return l.copy(this.spaces[c].toXYZ).multiply(this.spaces[h].fromXYZ)},_getDrawingBufferColorSpace:function(l){return this.spaces[l].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(l=this.workingColorSpace){return this.spaces[l].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(l,c){return wo("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),o.workingToColorSpace(l,c)},toWorkingColorSpace:function(l,c){return wo("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),o.colorSpaceToWorking(l,c)}},e=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],r=[.3127,.329];return o.define({[Kc]:{primaries:e,whitePoint:r,transfer:Qc,toXYZ:mx,fromXYZ:gx,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:Xi},outputColorSpaceConfig:{drawingBufferColorSpace:Xi}},[Xi]:{primaries:e,whitePoint:r,transfer:Je,toXYZ:mx,fromXYZ:gx,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:Xi}}}),o}const He=tT();function er(o){return o<.04045?o*.0773993808:Math.pow(o*.9478672986+.0521327014,2.4)}function Co(o){return o<.0031308?o*12.92:1.055*Math.pow(o,.41666)-.055}let lo;class eT{static getDataURL(e,i="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let r;if(e instanceof HTMLCanvasElement)r=e;else{lo===void 0&&(lo=Jc("canvas")),lo.width=e.width,lo.height=e.height;const l=lo.getContext("2d");e instanceof ImageData?l.putImageData(e,0,0):l.drawImage(e,0,0,e.width,e.height),r=lo}return r.toDataURL(i)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const i=Jc("canvas");i.width=e.width,i.height=e.height;const r=i.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const l=r.getImageData(0,0,e.width,e.height),c=l.data;for(let h=0;h<c.length;h++)c[h]=er(c[h]/255)*255;return r.putImageData(l,0,0),i}else if(e.data){const i=e.data.slice(0);for(let r=0;r<i.length;r++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[r]=Math.floor(er(i[r]/255)*255):i[r]=er(i[r]);return{data:i,width:e.width,height:e.height}}else return he("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let nT=0;class Um{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:nT++}),this.uuid=Yl(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const i=this.data;return typeof HTMLVideoElement<"u"&&i instanceof HTMLVideoElement?e.set(i.videoWidth,i.videoHeight,0):typeof VideoFrame<"u"&&i instanceof VideoFrame?e.set(i.displayWidth,i.displayHeight,0):i!==null?e.set(i.width,i.height,i.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},l=this.data;if(l!==null){let c;if(Array.isArray(l)){c=[];for(let h=0,d=l.length;h<d;h++)l[h].isDataTexture?c.push(Zd(l[h].image)):c.push(Zd(l[h]))}else c=Zd(l);r.url=c}return i||(e.images[this.uuid]=r),r}}function Zd(o){return typeof HTMLImageElement<"u"&&o instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&o instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&o instanceof ImageBitmap?eT.getDataURL(o):o.data?{data:Array.from(o.data),width:o.width,height:o.height,type:o.data.constructor.name}:(he("Texture: Unable to serialize Texture."),{})}let iT=0;const jd=new lt;class oi extends Hr{constructor(e=oi.DEFAULT_IMAGE,i=oi.DEFAULT_MAPPING,r=$a,l=$a,c=$n,h=ms,d=ia,p=Ni,m=oi.DEFAULT_ANISOTROPY,x=Ir){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:iT++}),this.uuid=Yl(),this.name="",this.source=new Um(e),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=r,this.wrapT=l,this.magFilter=c,this.minFilter=h,this.anisotropy=m,this.format=d,this.internalFormat=null,this.type=p,this.offset=new me(0,0),this.repeat=new me(1,1),this.center=new me(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new _e,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=x,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(jd).x}get height(){return this.source.getSize(jd).y}get depth(){return this.source.getSize(jd).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const i in e){const r=e[i];if(r===void 0){he(`Texture.setValues(): parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){he(`Texture.setValues(): property '${i}' does not exist.`);continue}l&&r&&l.isVector2&&r.isVector2||l&&r&&l.isVector3&&r.isVector3||l&&r&&l.isMatrix3&&r.isMatrix3?l.copy(r):this[i]=r}}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),i||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==OS)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Op:e.x=e.x-Math.floor(e.x);break;case $a:e.x=e.x<0?0:1;break;case Pp:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Op:e.y=e.y-Math.floor(e.y);break;case $a:e.y=e.y<0?0:1;break;case Pp:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}oi.DEFAULT_IMAGE=null;oi.DEFAULT_MAPPING=OS;oi.DEFAULT_ANISOTROPY=1;const Hm=class Hm{constructor(e=0,i=0,r=0,l=1){this.x=e,this.y=i,this.z=r,this.w=l}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,i,r,l){return this.x=e,this.y=i,this.z=r,this.w=l,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this.w=e.w+i.w,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this.w+=e.w*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this.w=e.w-i.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const i=this.x,r=this.y,l=this.z,c=this.w,h=e.elements;return this.x=h[0]*i+h[4]*r+h[8]*l+h[12]*c,this.y=h[1]*i+h[5]*r+h[9]*l+h[13]*c,this.z=h[2]*i+h[6]*r+h[10]*l+h[14]*c,this.w=h[3]*i+h[7]*r+h[11]*l+h[15]*c,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const i=Math.sqrt(1-e.w*e.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/i,this.y=e.y/i,this.z=e.z/i),this}setAxisAngleFromRotationMatrix(e){let i,r,l,c;const p=e.elements,m=p[0],x=p[4],g=p[8],v=p[1],y=p[5],T=p[9],w=p[2],M=p[6],S=p[10];if(Math.abs(x-v)<.01&&Math.abs(g-w)<.01&&Math.abs(T-M)<.01){if(Math.abs(x+v)<.1&&Math.abs(g+w)<.1&&Math.abs(T+M)<.1&&Math.abs(m+y+S-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const F=(m+1)/2,C=(y+1)/2,U=(S+1)/2,N=(x+v)/4,L=(g+w)/4,b=(T+M)/4;return F>C&&F>U?F<.01?(r=0,l=.707106781,c=.707106781):(r=Math.sqrt(F),l=N/r,c=L/r):C>U?C<.01?(r=.707106781,l=0,c=.707106781):(l=Math.sqrt(C),r=N/l,c=b/l):U<.01?(r=.707106781,l=.707106781,c=0):(c=Math.sqrt(U),r=L/c,l=b/c),this.set(r,l,c,i),this}let P=Math.sqrt((M-T)*(M-T)+(g-w)*(g-w)+(v-x)*(v-x));return Math.abs(P)<.001&&(P=1),this.x=(M-T)/P,this.y=(g-w)/P,this.z=(v-x)/P,this.w=Math.acos((m+y+S-1)/2),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,i){return this.x=Ue(this.x,e.x,i.x),this.y=Ue(this.y,e.y,i.y),this.z=Ue(this.z,e.z,i.z),this.w=Ue(this.w,e.w,i.w),this}clampScalar(e,i){return this.x=Ue(this.x,e,i),this.y=Ue(this.y,e,i),this.z=Ue(this.z,e,i),this.w=Ue(this.w,e,i),this}clampLength(e,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Ue(r,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this.w+=(e.w-this.w)*i,this}lerpVectors(e,i,r){return this.x=e.x+(i.x-e.x)*r,this.y=e.y+(i.y-e.y)*r,this.z=e.z+(i.z-e.z)*r,this.w=e.w+(i.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this.w=e[i+3],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e[i+3]=this.w,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this.w=e.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Hm.prototype.isVector4=!0;let gn=Hm;class aT extends Hr{constructor(e=1,i=1,r={}){super(),r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:$n,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},r),this.isRenderTarget=!0,this.width=e,this.height=i,this.depth=r.depth,this.scissor=new gn(0,0,e,i),this.scissorTest=!1,this.viewport=new gn(0,0,e,i),this.textures=[];const l={width:e,height:i,depth:r.depth},c=new oi(l),h=r.count;for(let d=0;d<h;d++)this.textures[d]=c.clone(),this.textures[d].isRenderTargetTexture=!0,this.textures[d].renderTarget=this;this._setTextureOptions(r),this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveColorBuffer=r.resolveColorBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this.storeMultisampledColorBuffer=r.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=r.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=r.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=r.depthTexture,this.samples=r.samples,this.multiview=r.multiview,this.useArrayDepthTexture=r.useArrayDepthTexture}_setTextureOptions(e={}){const i={minFilter:$n,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(i.mapping=e.mapping),e.wrapS!==void 0&&(i.wrapS=e.wrapS),e.wrapT!==void 0&&(i.wrapT=e.wrapT),e.wrapR!==void 0&&(i.wrapR=e.wrapR),e.magFilter!==void 0&&(i.magFilter=e.magFilter),e.minFilter!==void 0&&(i.minFilter=e.minFilter),e.format!==void 0&&(i.format=e.format),e.type!==void 0&&(i.type=e.type),e.anisotropy!==void 0&&(i.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(i.colorSpace=e.colorSpace),e.flipY!==void 0&&(i.flipY=e.flipY),e.generateMipmaps!==void 0&&(i.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(i.internalFormat=e.internalFormat);for(let r=0;r<this.textures.length;r++)this.textures[r].setValues(i)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,i,r=1){if(this.width!==e||this.height!==i||this.depth!==r){this.width=e,this.height=i,this.depth=r;for(let l=0,c=this.textures.length;l<c;l++)this.textures[l].image.width=e,this.textures[l].image.height=i,this.textures[l].image.depth=r,this.textures[l].isData3DTexture!==!0&&(this.textures[l].isArrayTexture=this.textures[l].image.depth>1);this.dispose()}this.viewport.set(0,0,e,i),this.scissor.set(0,0,e,i)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,r=e.textures.length;i<r;i++){this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const l=Object.assign({},e.textures[i].image);this.textures[i].source=new Um(l)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){const i=e.depthTexture.clone();i.renderTarget=null,this.depthTexture=i}else this.depthTexture=e.depthTexture;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class aa extends aT{constructor(e=1,i=1,r={}){super(e,i,r),this.isWebGLRenderTarget=!0}}class kS extends oi{constructor(e=null,i=1,r=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:i,height:r,depth:l},this.magFilter=qn,this.minFilter=qn,this.wrapR=$a,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class rT extends oi{constructor(e=null,i=1,r=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:i,height:r,depth:l},this.magFilter=qn,this.minFilter=qn,this.wrapR=$a,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}}const nf=class nf{constructor(e,i,r,l,c,h,d,p,m,x,g,v,y,T,w,M){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,i,r,l,c,h,d,p,m,x,g,v,y,T,w,M)}set(e,i,r,l,c,h,d,p,m,x,g,v,y,T,w,M){const S=this.elements;return S[0]=e,S[4]=i,S[8]=r,S[12]=l,S[1]=c,S[5]=h,S[9]=d,S[13]=p,S[2]=m,S[6]=x,S[10]=g,S[14]=v,S[3]=y,S[7]=T,S[11]=w,S[15]=M,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new nf().fromArray(this.elements)}copy(e){const i=this.elements,r=e.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],i[9]=r[9],i[10]=r[10],i[11]=r[11],i[12]=r[12],i[13]=r[13],i[14]=r[14],i[15]=r[15],this}copyPosition(e){const i=this.elements,r=e.elements;return i[12]=r[12],i[13]=r[13],i[14]=r[14],this}setFromMatrix3(e){const i=e.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(e,i,r){return this.determinantAffine()===0?(e.set(1,0,0),i.set(0,1,0),r.set(0,0,1),this):(e.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this)}makeBasis(e,i,r){return this.set(e.x,i.x,r.x,0,e.y,i.y,r.y,0,e.z,i.z,r.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const i=this.elements,r=e.elements,l=1/uo.setFromMatrixColumn(e,0).length(),c=1/uo.setFromMatrixColumn(e,1).length(),h=1/uo.setFromMatrixColumn(e,2).length();return i[0]=r[0]*l,i[1]=r[1]*l,i[2]=r[2]*l,i[3]=0,i[4]=r[4]*c,i[5]=r[5]*c,i[6]=r[6]*c,i[7]=0,i[8]=r[8]*h,i[9]=r[9]*h,i[10]=r[10]*h,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(e){const i=this.elements,r=e.x,l=e.y,c=e.z,h=Math.cos(r),d=Math.sin(r),p=Math.cos(l),m=Math.sin(l),x=Math.cos(c),g=Math.sin(c);if(e.order==="XYZ"){const v=h*x,y=h*g,T=d*x,w=d*g;i[0]=p*x,i[4]=-p*g,i[8]=m,i[1]=y+T*m,i[5]=v-w*m,i[9]=-d*p,i[2]=w-v*m,i[6]=T+y*m,i[10]=h*p}else if(e.order==="YXZ"){const v=p*x,y=p*g,T=m*x,w=m*g;i[0]=v+w*d,i[4]=T*d-y,i[8]=h*m,i[1]=h*g,i[5]=h*x,i[9]=-d,i[2]=y*d-T,i[6]=w+v*d,i[10]=h*p}else if(e.order==="ZXY"){const v=p*x,y=p*g,T=m*x,w=m*g;i[0]=v-w*d,i[4]=-h*g,i[8]=T+y*d,i[1]=y+T*d,i[5]=h*x,i[9]=w-v*d,i[2]=-h*m,i[6]=d,i[10]=h*p}else if(e.order==="ZYX"){const v=h*x,y=h*g,T=d*x,w=d*g;i[0]=p*x,i[4]=T*m-y,i[8]=v*m+w,i[1]=p*g,i[5]=w*m+v,i[9]=y*m-T,i[2]=-m,i[6]=d*p,i[10]=h*p}else if(e.order==="YZX"){const v=h*p,y=h*m,T=d*p,w=d*m;i[0]=p*x,i[4]=w-v*g,i[8]=T*g+y,i[1]=g,i[5]=h*x,i[9]=-d*x,i[2]=-m*x,i[6]=y*g+T,i[10]=v-w*g}else if(e.order==="XZY"){const v=h*p,y=h*m,T=d*p,w=d*m;i[0]=p*x,i[4]=-g,i[8]=m*x,i[1]=v*g+w,i[5]=h*x,i[9]=y*g-T,i[2]=T*g-y,i[6]=d*x,i[10]=w*g+v}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(e){return this.compose(sT,e,oT)}lookAt(e,i,r){const l=this.elements;return Ci.subVectors(e,i),Ci.lengthSq()===0&&(Ci.z=1),Ci.normalize(),Nr.crossVectors(r,Ci),Nr.lengthSq()===0&&(Math.abs(r.z)===1?Ci.x+=1e-4:Ci.z+=1e-4,Ci.normalize(),Nr.crossVectors(r,Ci)),Nr.normalize(),_c.crossVectors(Ci,Nr),l[0]=Nr.x,l[4]=_c.x,l[8]=Ci.x,l[1]=Nr.y,l[5]=_c.y,l[9]=Ci.y,l[2]=Nr.z,l[6]=_c.z,l[10]=Ci.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const r=e.elements,l=i.elements,c=this.elements,h=r[0],d=r[4],p=r[8],m=r[12],x=r[1],g=r[5],v=r[9],y=r[13],T=r[2],w=r[6],M=r[10],S=r[14],P=r[3],F=r[7],C=r[11],U=r[15],N=l[0],L=l[4],b=l[8],D=l[12],V=l[1],O=l[5],H=l[9],Q=l[13],G=l[2],K=l[6],k=l[10],q=l[14],it=l[3],rt=l[7],ht=l[11],vt=l[15];return c[0]=h*N+d*V+p*G+m*it,c[4]=h*L+d*O+p*K+m*rt,c[8]=h*b+d*H+p*k+m*ht,c[12]=h*D+d*Q+p*q+m*vt,c[1]=x*N+g*V+v*G+y*it,c[5]=x*L+g*O+v*K+y*rt,c[9]=x*b+g*H+v*k+y*ht,c[13]=x*D+g*Q+v*q+y*vt,c[2]=T*N+w*V+M*G+S*it,c[6]=T*L+w*O+M*K+S*rt,c[10]=T*b+w*H+M*k+S*ht,c[14]=T*D+w*Q+M*q+S*vt,c[3]=P*N+F*V+C*G+U*it,c[7]=P*L+F*O+C*K+U*rt,c[11]=P*b+F*H+C*k+U*ht,c[15]=P*D+F*Q+C*q+U*vt,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[4]*=e,i[8]*=e,i[12]*=e,i[1]*=e,i[5]*=e,i[9]*=e,i[13]*=e,i[2]*=e,i[6]*=e,i[10]*=e,i[14]*=e,i[3]*=e,i[7]*=e,i[11]*=e,i[15]*=e,this}determinant(){const e=this.elements,i=e[0],r=e[4],l=e[8],c=e[12],h=e[1],d=e[5],p=e[9],m=e[13],x=e[2],g=e[6],v=e[10],y=e[14],T=e[3],w=e[7],M=e[11],S=e[15],P=p*y-m*v,F=d*y-m*g,C=d*v-p*g,U=h*y-m*x,N=h*v-p*x,L=h*g-d*x;return i*(w*P-M*F+S*C)-r*(T*P-M*U+S*N)+l*(T*F-w*U+S*L)-c*(T*C-w*N+M*L)}determinantAffine(){const e=this.elements,i=e[0],r=e[4],l=e[8],c=e[1],h=e[5],d=e[9],p=e[2],m=e[6],x=e[10];return i*(h*x-d*m)-r*(c*x-d*p)+l*(c*m-h*p)}transpose(){const e=this.elements;let i;return i=e[1],e[1]=e[4],e[4]=i,i=e[2],e[2]=e[8],e[8]=i,i=e[6],e[6]=e[9],e[9]=i,i=e[3],e[3]=e[12],e[12]=i,i=e[7],e[7]=e[13],e[13]=i,i=e[11],e[11]=e[14],e[14]=i,this}setPosition(e,i,r){const l=this.elements;return e.isVector3?(l[12]=e.x,l[13]=e.y,l[14]=e.z):(l[12]=e,l[13]=i,l[14]=r),this}invert(){const e=this.elements,i=e[0],r=e[1],l=e[2],c=e[3],h=e[4],d=e[5],p=e[6],m=e[7],x=e[8],g=e[9],v=e[10],y=e[11],T=e[12],w=e[13],M=e[14],S=e[15],P=i*d-r*h,F=i*p-l*h,C=i*m-c*h,U=r*p-l*d,N=r*m-c*d,L=l*m-c*p,b=x*w-g*T,D=x*M-v*T,V=x*S-y*T,O=g*M-v*w,H=g*S-y*w,Q=v*S-y*M,G=P*Q-F*H+C*O+U*V-N*D+L*b;if(G===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const K=1/G;return e[0]=(d*Q-p*H+m*O)*K,e[1]=(l*H-r*Q-c*O)*K,e[2]=(w*L-M*N+S*U)*K,e[3]=(v*N-g*L-y*U)*K,e[4]=(p*V-h*Q-m*D)*K,e[5]=(i*Q-l*V+c*D)*K,e[6]=(M*C-T*L-S*F)*K,e[7]=(x*L-v*C+y*F)*K,e[8]=(h*H-d*V+m*b)*K,e[9]=(r*V-i*H-c*b)*K,e[10]=(T*N-w*C+S*P)*K,e[11]=(g*C-x*N-y*P)*K,e[12]=(d*D-h*O-p*b)*K,e[13]=(i*O-r*D+l*b)*K,e[14]=(w*F-T*U-M*P)*K,e[15]=(x*U-g*F+v*P)*K,this}scale(e){const i=this.elements,r=e.x,l=e.y,c=e.z;return i[0]*=r,i[4]*=l,i[8]*=c,i[1]*=r,i[5]*=l,i[9]*=c,i[2]*=r,i[6]*=l,i[10]*=c,i[3]*=r,i[7]*=l,i[11]*=c,this}getMaxScaleOnAxis(){const e=this.elements,i=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],l=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(i,r,l))}makeTranslation(e,i,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,i,0,0,1,r,0,0,0,1),this}makeRotationX(e){const i=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,i,-r,0,0,r,i,0,0,0,0,1),this}makeRotationY(e){const i=Math.cos(e),r=Math.sin(e);return this.set(i,0,r,0,0,1,0,0,-r,0,i,0,0,0,0,1),this}makeRotationZ(e){const i=Math.cos(e),r=Math.sin(e);return this.set(i,-r,0,0,r,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,i){const r=Math.cos(i),l=Math.sin(i),c=1-r,h=e.x,d=e.y,p=e.z,m=c*h,x=c*d;return this.set(m*h+r,m*d-l*p,m*p+l*d,0,m*d+l*p,x*d+r,x*p-l*h,0,m*p-l*d,x*p+l*h,c*p*p+r,0,0,0,0,1),this}makeScale(e,i,r){return this.set(e,0,0,0,0,i,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,i,r,l,c,h){return this.set(1,r,c,0,e,1,h,0,i,l,1,0,0,0,0,1),this}compose(e,i,r){const l=this.elements,c=i._x,h=i._y,d=i._z,p=i._w,m=c+c,x=h+h,g=d+d,v=c*m,y=c*x,T=c*g,w=h*x,M=h*g,S=d*g,P=p*m,F=p*x,C=p*g,U=r.x,N=r.y,L=r.z;return l[0]=(1-(w+S))*U,l[1]=(y+C)*U,l[2]=(T-F)*U,l[3]=0,l[4]=(y-C)*N,l[5]=(1-(v+S))*N,l[6]=(M+P)*N,l[7]=0,l[8]=(T+F)*L,l[9]=(M-P)*L,l[10]=(1-(v+w))*L,l[11]=0,l[12]=e.x,l[13]=e.y,l[14]=e.z,l[15]=1,this}decompose(e,i,r){const l=this.elements;e.x=l[12],e.y=l[13],e.z=l[14];const c=this.determinantAffine();if(c===0)return r.set(1,1,1),i.identity(),this;let h=uo.set(l[0],l[1],l[2]).length();const d=uo.set(l[4],l[5],l[6]).length(),p=uo.set(l[8],l[9],l[10]).length();c<0&&(h=-h),$i.copy(this);const m=1/h,x=1/d,g=1/p;return $i.elements[0]*=m,$i.elements[1]*=m,$i.elements[2]*=m,$i.elements[4]*=x,$i.elements[5]*=x,$i.elements[6]*=x,$i.elements[8]*=g,$i.elements[9]*=g,$i.elements[10]*=g,i.setFromRotationMatrix($i),r.x=h,r.y=d,r.z=p,this}makePerspective(e,i,r,l,c,h,d=ba,p=!1){const m=this.elements,x=2*c/(i-e),g=2*c/(r-l),v=(i+e)/(i-e),y=(r+l)/(r-l);let T,w;if(p)T=c/(h-c),w=h*c/(h-c);else if(d===ba)T=-(h+c)/(h-c),w=-2*h*c/(h-c);else if(d===Xl)T=-h/(h-c),w=-h*c/(h-c);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+d);return m[0]=x,m[4]=0,m[8]=v,m[12]=0,m[1]=0,m[5]=g,m[9]=y,m[13]=0,m[2]=0,m[6]=0,m[10]=T,m[14]=w,m[3]=0,m[7]=0,m[11]=-1,m[15]=0,this}makeOrthographic(e,i,r,l,c,h,d=ba,p=!1){const m=this.elements,x=2/(i-e),g=2/(r-l),v=-(i+e)/(i-e),y=-(r+l)/(r-l);let T,w;if(p)T=1/(h-c),w=h/(h-c);else if(d===ba)T=-2/(h-c),w=-(h+c)/(h-c);else if(d===Xl)T=-1/(h-c),w=-c/(h-c);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+d);return m[0]=x,m[4]=0,m[8]=0,m[12]=v,m[1]=0,m[5]=g,m[9]=0,m[13]=y,m[2]=0,m[6]=0,m[10]=T,m[14]=w,m[3]=0,m[7]=0,m[11]=0,m[15]=1,this}equals(e){const i=this.elements,r=e.elements;for(let l=0;l<16;l++)if(i[l]!==r[l])return!1;return!0}fromArray(e,i=0){for(let r=0;r<16;r++)this.elements[r]=e[r+i];return this}toArray(e=[],i=0){const r=this.elements;return e[i]=r[0],e[i+1]=r[1],e[i+2]=r[2],e[i+3]=r[3],e[i+4]=r[4],e[i+5]=r[5],e[i+6]=r[6],e[i+7]=r[7],e[i+8]=r[8],e[i+9]=r[9],e[i+10]=r[10],e[i+11]=r[11],e[i+12]=r[12],e[i+13]=r[13],e[i+14]=r[14],e[i+15]=r[15],e}};nf.prototype.isMatrix4=!0;let dn=nf;const uo=new lt,$i=new dn,sT=new lt(0,0,0),oT=new lt(1,1,1),Nr=new lt,_c=new lt,Ci=new lt,_x=new dn,vx=new Br;class Fr{constructor(e=0,i=0,r=0,l=Fr.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=i,this._z=r,this._order=l}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,i,r,l=this._order){return this._x=e,this._y=i,this._z=r,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,i=this._order,r=!0){const l=e.elements,c=l[0],h=l[4],d=l[8],p=l[1],m=l[5],x=l[9],g=l[2],v=l[6],y=l[10];switch(i){case"XYZ":this._y=Math.asin(Ue(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-x,y),this._z=Math.atan2(-h,c)):(this._x=Math.atan2(v,m),this._z=0);break;case"YXZ":this._x=Math.asin(-Ue(x,-1,1)),Math.abs(x)<.9999999?(this._y=Math.atan2(d,y),this._z=Math.atan2(p,m)):(this._y=Math.atan2(-g,c),this._z=0);break;case"ZXY":this._x=Math.asin(Ue(v,-1,1)),Math.abs(v)<.9999999?(this._y=Math.atan2(-g,y),this._z=Math.atan2(-h,m)):(this._y=0,this._z=Math.atan2(p,c));break;case"ZYX":this._y=Math.asin(-Ue(g,-1,1)),Math.abs(g)<.9999999?(this._x=Math.atan2(v,y),this._z=Math.atan2(p,c)):(this._x=0,this._z=Math.atan2(-h,m));break;case"YZX":this._z=Math.asin(Ue(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(-x,m),this._y=Math.atan2(-g,c)):(this._x=0,this._y=Math.atan2(d,y));break;case"XZY":this._z=Math.asin(-Ue(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(v,m),this._y=Math.atan2(d,c)):(this._x=Math.atan2(-x,y),this._y=0);break;default:he("Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,i,r){return _x.makeRotationFromQuaternion(e),this.setFromRotationMatrix(_x,i,r)}setFromVector3(e,i=this._order){return this.set(e.x,e.y,e.z,i)}reorder(e){return vx.setFromEuler(this),this.setFromQuaternion(vx,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Fr.DEFAULT_ORDER="XYZ";class Lm{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let lT=0;const xx=new lt,co=new Br,Ya=new dn,vc=new lt,Al=new lt,uT=new lt,cT=new Br,Sx=new lt(1,0,0),yx=new lt(0,1,0),Mx=new lt(0,0,1),Ex={type:"added"},fT={type:"removed"},fo={type:"childadded",child:null},Kd={type:"childremoved",child:null};class Bn extends Hr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:lT++}),this.uuid=Yl(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Bn.DEFAULT_UP.clone();const e=new lt,i=new Fr,r=new Br,l=new lt(1,1,1);function c(){r.setFromEuler(i,!1)}function h(){i.setFromQuaternion(r,void 0,!1)}i._onChange(c),r._onChange(h),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new dn},normalMatrix:{value:new _e}}),this.matrix=new dn,this.matrixWorld=new dn,this.matrixAutoUpdate=Bn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Bn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Lm,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,i){this.quaternion.setFromAxisAngle(e,i)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,i){return co.setFromAxisAngle(e,i),this.quaternion.multiply(co),this}rotateOnWorldAxis(e,i){return co.setFromAxisAngle(e,i),this.quaternion.premultiply(co),this}rotateX(e){return this.rotateOnAxis(Sx,e)}rotateY(e){return this.rotateOnAxis(yx,e)}rotateZ(e){return this.rotateOnAxis(Mx,e)}translateOnAxis(e,i){return xx.copy(e).applyQuaternion(this.quaternion),this.position.add(xx.multiplyScalar(i)),this}translateX(e){return this.translateOnAxis(Sx,e)}translateY(e){return this.translateOnAxis(yx,e)}translateZ(e){return this.translateOnAxis(Mx,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ya.copy(this.matrixWorld).invert())}lookAt(e,i,r){e.isVector3?vc.copy(e):vc.set(e,i,r);const l=this.parent;this.updateWorldMatrix(!0,!1),Al.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ya.lookAt(Al,vc,this.up):Ya.lookAt(vc,Al,this.up),this.quaternion.setFromRotationMatrix(Ya),l&&(Ya.extractRotation(l.matrixWorld),co.setFromRotationMatrix(Ya),this.quaternion.premultiply(co.invert()))}add(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return e===this?(ke("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Ex),fo.child=e,this.dispatchEvent(fo),fo.child=null):ke("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const i=this.children.indexOf(e);return i!==-1&&(e.parent=null,this.children.splice(i,1),e.dispatchEvent(fT),Kd.child=e,this.dispatchEvent(Kd),Kd.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ya.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ya.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ya),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Ex),fo.child=e,this.dispatchEvent(fo),fo.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,i){if(this[e]===i)return this;for(let r=0,l=this.children.length;r<l;r++){const h=this.children[r].getObjectByProperty(e,i);if(h!==void 0)return h}}getObjectsByProperty(e,i,r=[]){this[e]===i&&r.push(this);const l=this.children;for(let c=0,h=l.length;c<h;c++)l[c].getObjectsByProperty(e,i,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Al,e,uT),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Al,cT,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return e.set(i[8],i[9],i[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(e){e(this);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].traverseVisible(e)}traverseAncestors(e){const i=this.parent;i!==null&&(e(i),i.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const i=e.x,r=e.y,l=e.z,c=this.matrix.elements;c[12]+=i-c[0]*i-c[4]*r-c[8]*l,c[13]+=r-c[1]*i-c[5]*r-c[9]*l,c[14]+=l-c[2]*i-c[6]*r-c[10]*l}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].updateMatrixWorld(e)}updateWorldMatrix(e,i,r=!1){const l=this.parent;if(e===!0&&l!==null&&l.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||r)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,r=!0),i===!0){const c=this.children;for(let h=0,d=c.length;h<d;h++)c[h].updateWorldMatrix(!1,!0,r)}}toJSON(e){const i=e===void 0||typeof e=="string",r={};i&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,l.name=this.name,l.castShadow=this.castShadow,l.receiveShadow=this.receiveShadow,l.visible=this.visible,l.frustumCulled=this.frustumCulled,l.renderOrder=this.renderOrder,l.static=this.static,l.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.pivot!==null&&(l.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(l.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(l.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.geometryInfo=this._geometryInfo.map(d=>({...d,boundingBox:d.boundingBox?d.boundingBox.toJSON():void 0,boundingSphere:d.boundingSphere?d.boundingSphere.toJSON():void 0})),l.instanceInfo=this._instanceInfo.map(d=>({...d})),l.availableInstanceIds=this._availableInstanceIds.slice(),l.availableGeometryIds=this._availableGeometryIds.slice(),l.nextIndexStart=this._nextIndexStart,l.nextVertexStart=this._nextVertexStart,l.geometryCount=this._geometryCount,l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.matricesTexture=this._matricesTexture.toJSON(e),l.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(l.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(l.boundingBox=this.boundingBox.toJSON()));function c(d,p){return d[p.uuid]===void 0&&(d[p.uuid]=p.toJSON(e)),p.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=c(e.geometries,this.geometry);const d=this.geometry.parameters;if(d!==void 0&&d.shapes!==void 0){const p=d.shapes;if(Array.isArray(p))for(let m=0,x=p.length;m<x;m++){const g=p[m];c(e.shapes,g)}else c(e.shapes,p)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(c(e.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const d=[];for(let p=0,m=this.material.length;p<m;p++)d.push(c(e.materials,this.material[p]));l.material=d}else l.material=c(e.materials,this.material);if(this.children.length>0){l.children=[];for(let d=0;d<this.children.length;d++)l.children.push(this.children[d].toJSON(e).object)}if(this.animations.length>0){l.animations=[];for(let d=0;d<this.animations.length;d++){const p=this.animations[d];l.animations.push(c(e.animations,p))}}if(i){const d=h(e.geometries),p=h(e.materials),m=h(e.textures),x=h(e.images),g=h(e.shapes),v=h(e.skeletons),y=h(e.animations),T=h(e.nodes);d.length>0&&(r.geometries=d),p.length>0&&(r.materials=p),m.length>0&&(r.textures=m),x.length>0&&(r.images=x),g.length>0&&(r.shapes=g),v.length>0&&(r.skeletons=v),y.length>0&&(r.animations=y),T.length>0&&(r.nodes=T)}return r.object=l,r;function h(d){const p=[];for(const m in d){const x=d[m];delete x.metadata,p.push(x)}return p}}clone(e){return new this.constructor().copy(this,e)}copy(e,i=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),i===!0)for(let r=0;r<e.children.length;r++){const l=e.children[r];this.add(l.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}Bn.DEFAULT_UP=new lt(0,1,0);Bn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Bn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class To extends Bn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const hT={type:"move"};class Qd{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new To,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new To,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new lt,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new lt),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new To,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new lt,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new lt,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const i=this._hand;if(i)for(const r of e.hand.values())this._getHandJoint(i,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,i,r){let l=null,c=null,h=null;const d=this._targetRay,p=this._grip,m=this._hand;if(e&&i.session.visibilityState!=="visible-blurred"){if(m&&e.hand){h=!0;for(const w of e.hand.values()){const M=i.getJointPose(w,r),S=this._getHandJoint(m,w);M!==null&&(S.matrix.fromArray(M.transform.matrix),S.matrix.decompose(S.position,S.rotation,S.scale),S.matrixWorldNeedsUpdate=!0,S.jointRadius=M.radius),S.visible=M!==null}const x=m.joints["index-finger-tip"],g=m.joints["thumb-tip"],v=x.position.distanceTo(g.position),y=.02,T=.005;m.inputState.pinching&&v>y+T?(m.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!m.inputState.pinching&&v<=y-T&&(m.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else p!==null&&e.gripSpace&&(c=i.getPose(e.gripSpace,r),c!==null&&(p.matrix.fromArray(c.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,c.linearVelocity?(p.hasLinearVelocity=!0,p.linearVelocity.copy(c.linearVelocity)):p.hasLinearVelocity=!1,c.angularVelocity?(p.hasAngularVelocity=!0,p.angularVelocity.copy(c.angularVelocity)):p.hasAngularVelocity=!1,p.eventsEnabled&&p.dispatchEvent({type:"gripUpdated",data:e,target:this})));d!==null&&(l=i.getPose(e.targetRaySpace,r),l===null&&c!==null&&(l=c),l!==null&&(d.matrix.fromArray(l.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,l.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(l.linearVelocity)):d.hasLinearVelocity=!1,l.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(l.angularVelocity)):d.hasAngularVelocity=!1,this.dispatchEvent(hT)))}return d!==null&&(d.visible=l!==null),p!==null&&(p.visible=c!==null),m!==null&&(m.visible=h!==null),this}_getHandJoint(e,i){if(e.joints[i.jointName]===void 0){const r=new To;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[i.jointName]=r,e.add(r)}return e.joints[i.jointName]}}const XS={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ur={h:0,s:0,l:0},xc={h:0,s:0,l:0};function Jd(o,e,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?o+(e-o)*6*i:i<1/2?e:i<2/3?o+(e-o)*6*(2/3-i):o}class Re{constructor(e,i,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,i,r)}set(e,i,r){if(i===void 0&&r===void 0){const l=e;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(e,i,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,i=Xi){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,He.colorSpaceToWorking(this,i),this}setRGB(e,i,r,l=He.workingColorSpace){return this.r=e,this.g=i,this.b=r,He.colorSpaceToWorking(this,l),this}setHSL(e,i,r,l=He.workingColorSpace){if(e=Jb(e,1),i=Ue(i,0,1),r=Ue(r,0,1),i===0)this.r=this.g=this.b=r;else{const c=r<=.5?r*(1+i):r+i-r*i,h=2*r-c;this.r=Jd(h,c,e+1/3),this.g=Jd(h,c,e),this.b=Jd(h,c,e-1/3)}return He.colorSpaceToWorking(this,l),this}setStyle(e,i=Xi){function r(c){c!==void 0&&parseFloat(c)<1&&he("Color: Alpha component of "+e+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(e)){let c;const h=l[1],d=l[2];switch(h){case"rgb":case"rgba":if(c=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(c[4]),this.setRGB(Math.min(255,parseInt(c[1],10))/255,Math.min(255,parseInt(c[2],10))/255,Math.min(255,parseInt(c[3],10))/255,i);if(c=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(c[4]),this.setRGB(Math.min(100,parseInt(c[1],10))/100,Math.min(100,parseInt(c[2],10))/100,Math.min(100,parseInt(c[3],10))/100,i);break;case"hsl":case"hsla":if(c=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(c[4]),this.setHSL(parseFloat(c[1])/360,parseFloat(c[2])/100,parseFloat(c[3])/100,i);break;default:he("Color: Unknown color model "+e)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(e)){const c=l[1],h=c.length;if(h===3)return this.setRGB(parseInt(c.charAt(0),16)/15,parseInt(c.charAt(1),16)/15,parseInt(c.charAt(2),16)/15,i);if(h===6)return this.setHex(parseInt(c,16),i);he("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,i);return this}setColorName(e,i=Xi){const r=XS[e.toLowerCase()];return r!==void 0?this.setHex(r,i):he("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=er(e.r),this.g=er(e.g),this.b=er(e.b),this}copyLinearToSRGB(e){return this.r=Co(e.r),this.g=Co(e.g),this.b=Co(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Xi){return He.workingToColorSpace(Jn.copy(this),e),Math.round(Ue(Jn.r*255,0,255))*65536+Math.round(Ue(Jn.g*255,0,255))*256+Math.round(Ue(Jn.b*255,0,255))}getHexString(e=Xi){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,i=He.workingColorSpace){He.workingToColorSpace(Jn.copy(this),i);const r=Jn.r,l=Jn.g,c=Jn.b,h=Math.max(r,l,c),d=Math.min(r,l,c);let p,m;const x=(d+h)/2;if(d===h)p=0,m=0;else{const g=h-d;switch(m=x<=.5?g/(h+d):g/(2-h-d),h){case r:p=(l-c)/g+(l<c?6:0);break;case l:p=(c-r)/g+2;break;case c:p=(r-l)/g+4;break}p/=6}return e.h=p,e.s=m,e.l=x,e}getRGB(e,i=He.workingColorSpace){return He.workingToColorSpace(Jn.copy(this),i),e.r=Jn.r,e.g=Jn.g,e.b=Jn.b,e}getStyle(e=Xi){He.workingToColorSpace(Jn.copy(this),e);const i=Jn.r,r=Jn.g,l=Jn.b;return e!==Xi?`color(${e} ${i.toFixed(3)} ${r.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(r*255)},${Math.round(l*255)})`}offsetHSL(e,i,r){return this.getHSL(Ur),this.setHSL(Ur.h+e,Ur.s+i,Ur.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,i){return this.r=e.r+i.r,this.g=e.g+i.g,this.b=e.b+i.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,i){return this.r+=(e.r-this.r)*i,this.g+=(e.g-this.g)*i,this.b+=(e.b-this.b)*i,this}lerpColors(e,i,r){return this.r=e.r+(i.r-e.r)*r,this.g=e.g+(i.g-e.g)*r,this.b=e.b+(i.b-e.b)*r,this}lerpHSL(e,i){this.getHSL(Ur),e.getHSL(xc);const r=Wd(Ur.h,xc.h,i),l=Wd(Ur.s,xc.s,i),c=Wd(Ur.l,xc.l,i);return this.setHSL(r,l,c),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const i=this.r,r=this.g,l=this.b,c=e.elements;return this.r=c[0]*i+c[3]*r+c[6]*l,this.g=c[1]*i+c[4]*r+c[7]*l,this.b=c[2]*i+c[5]*r+c[8]*l,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,i=0){return this.r=e[i],this.g=e[i+1],this.b=e[i+2],this}toArray(e=[],i=0){return e[i]=this.r,e[i+1]=this.g,e[i+2]=this.b,e}fromBufferAttribute(e,i){return this.r=e.getX(i),this.g=e.getY(i),this.b=e.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Jn=new Re;Re.NAMES=XS;class dT extends Bn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Fr,this.environmentIntensity=1,this.environmentRotation=new Fr,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,i){return super.copy(e,i),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const i=super.toJSON(e);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),i.object.backgroundBlurriness=this.backgroundBlurriness,i.object.backgroundIntensity=this.backgroundIntensity,i.object.backgroundRotation=this.backgroundRotation.toArray(),i.object.environmentIntensity=this.environmentIntensity,i.object.environmentRotation=this.environmentRotation.toArray(),i}}const ta=new lt,qa=new lt,$d=new lt,Za=new lt,ho=new lt,po=new lt,bx=new lt,tp=new lt,ep=new lt,np=new lt,ip=new gn,ap=new gn,rp=new gn;class na{constructor(e=new lt,i=new lt,r=new lt){this.a=e,this.b=i,this.c=r}static getNormal(e,i,r,l){l.subVectors(r,i),ta.subVectors(e,i),l.cross(ta);const c=l.lengthSq();return c>0?l.multiplyScalar(1/Math.sqrt(c)):l.set(0,0,0)}static getBarycoord(e,i,r,l,c){ta.subVectors(l,i),qa.subVectors(r,i),$d.subVectors(e,i);const h=ta.dot(ta),d=ta.dot(qa),p=ta.dot($d),m=qa.dot(qa),x=qa.dot($d),g=h*m-d*d;if(g===0)return c.set(0,0,0),null;const v=1/g,y=(m*p-d*x)*v,T=(h*x-d*p)*v;return c.set(1-y-T,T,y)}static containsPoint(e,i,r,l){return this.getBarycoord(e,i,r,l,Za)===null?!1:Za.x>=0&&Za.y>=0&&Za.x+Za.y<=1}static getInterpolation(e,i,r,l,c,h,d,p){return this.getBarycoord(e,i,r,l,Za)===null?(p.x=0,p.y=0,"z"in p&&(p.z=0),"w"in p&&(p.w=0),null):(p.setScalar(0),p.addScaledVector(c,Za.x),p.addScaledVector(h,Za.y),p.addScaledVector(d,Za.z),p)}static getInterpolatedAttribute(e,i,r,l,c,h){return ip.setScalar(0),ap.setScalar(0),rp.setScalar(0),ip.fromBufferAttribute(e,i),ap.fromBufferAttribute(e,r),rp.fromBufferAttribute(e,l),h.setScalar(0),h.addScaledVector(ip,c.x),h.addScaledVector(ap,c.y),h.addScaledVector(rp,c.z),h}static isFrontFacing(e,i,r,l){return ta.subVectors(r,i),qa.subVectors(e,i),ta.cross(qa).dot(l)<0}set(e,i,r){return this.a.copy(e),this.b.copy(i),this.c.copy(r),this}setFromPointsAndIndices(e,i,r,l){return this.a.copy(e[i]),this.b.copy(e[r]),this.c.copy(e[l]),this}setFromAttributeAndIndices(e,i,r,l){return this.a.fromBufferAttribute(e,i),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,l),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return ta.subVectors(this.c,this.b),qa.subVectors(this.a,this.b),ta.cross(qa).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return na.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,i){return na.getBarycoord(e,this.a,this.b,this.c,i)}getInterpolation(e,i,r,l,c){return na.getInterpolation(e,this.a,this.b,this.c,i,r,l,c)}containsPoint(e){return na.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return na.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,i){const r=this.a,l=this.b,c=this.c;let h,d;ho.subVectors(l,r),po.subVectors(c,r),tp.subVectors(e,r);const p=ho.dot(tp),m=po.dot(tp);if(p<=0&&m<=0)return i.copy(r);ep.subVectors(e,l);const x=ho.dot(ep),g=po.dot(ep);if(x>=0&&g<=x)return i.copy(l);const v=p*g-x*m;if(v<=0&&p>=0&&x<=0)return h=p/(p-x),i.copy(r).addScaledVector(ho,h);np.subVectors(e,c);const y=ho.dot(np),T=po.dot(np);if(T>=0&&y<=T)return i.copy(c);const w=y*m-p*T;if(w<=0&&m>=0&&T<=0)return d=m/(m-T),i.copy(r).addScaledVector(po,d);const M=x*T-y*g;if(M<=0&&g-x>=0&&y-T>=0)return bx.subVectors(c,l),d=(g-x)/(g-x+(y-T)),i.copy(l).addScaledVector(bx,d);const S=1/(M+w+v);return h=w*S,d=v*S,i.copy(r).addScaledVector(ho,h).addScaledVector(po,d)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class ys{constructor(e=new lt(1/0,1/0,1/0),i=new lt(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=i}set(e,i){return this.min.copy(e),this.max.copy(i),this}setFromArray(e){this.makeEmpty();for(let i=0,r=e.length;i<r;i+=3)this.expandByPoint(ea.fromArray(e,i));return this}setFromBufferAttribute(e){this.makeEmpty();for(let i=0,r=e.count;i<r;i++)this.expandByPoint(ea.fromBufferAttribute(e,i));return this}setFromPoints(e){this.makeEmpty();for(let i=0,r=e.length;i<r;i++)this.expandByPoint(e[i]);return this}setFromCenterAndSize(e,i){const r=ea.copy(i).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,i=!1){return this.makeEmpty(),this.expandByObject(e,i)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,i=!1){e.updateWorldMatrix(!1,!1);const r=e.geometry;if(r!==void 0){const c=r.getAttribute("position");if(i===!0&&c!==void 0&&e.isInstancedMesh!==!0)for(let h=0,d=c.count;h<d;h++)e.isMesh===!0?e.getVertexPosition(h,ea):ea.fromBufferAttribute(c,h),ea.applyMatrix4(e.matrixWorld),this.expandByPoint(ea);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Sc.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),Sc.copy(r.boundingBox)),Sc.applyMatrix4(e.matrixWorld),this.union(Sc)}const l=e.children;for(let c=0,h=l.length;c<h;c++)this.expandByObject(l[c],i);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,i){return i.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,ea),ea.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let i,r;return e.normal.x>0?(i=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(i=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(i+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(i+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(i+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(i+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),i<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Rl),yc.subVectors(this.max,Rl),mo.subVectors(e.a,Rl),go.subVectors(e.b,Rl),_o.subVectors(e.c,Rl),Lr.subVectors(go,mo),Or.subVectors(_o,go),ls.subVectors(mo,_o);let i=[0,-Lr.z,Lr.y,0,-Or.z,Or.y,0,-ls.z,ls.y,Lr.z,0,-Lr.x,Or.z,0,-Or.x,ls.z,0,-ls.x,-Lr.y,Lr.x,0,-Or.y,Or.x,0,-ls.y,ls.x,0];return!sp(i,mo,go,_o,yc)||(i=[1,0,0,0,1,0,0,0,1],!sp(i,mo,go,_o,yc))?!1:(Mc.crossVectors(Lr,Or),i=[Mc.x,Mc.y,Mc.z],sp(i,mo,go,_o,yc))}clampPoint(e,i){return i.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,ea).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(ea).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ja[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ja[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ja[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ja[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ja[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ja[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ja[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ja[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ja),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const ja=[new lt,new lt,new lt,new lt,new lt,new lt,new lt,new lt],ea=new lt,Sc=new ys,mo=new lt,go=new lt,_o=new lt,Lr=new lt,Or=new lt,ls=new lt,Rl=new lt,yc=new lt,Mc=new lt,us=new lt;function sp(o,e,i,r,l){for(let c=0,h=o.length-3;c<=h;c+=3){us.fromArray(o,c);const d=l.x*Math.abs(us.x)+l.y*Math.abs(us.y)+l.z*Math.abs(us.z),p=e.dot(us),m=i.dot(us),x=r.dot(us);if(Math.max(-Math.max(p,m,x),Math.min(p,m,x))>d)return!1}return!0}const Rn=new lt,Ec=new me;let pT=0;class nr extends Hr{constructor(e,i,r=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:pT++}),this.name="",this.array=e,this.itemSize=i,this.count=e!==void 0?e.length/i:0,this.normalized=r,this.usage=qb,this.updateRanges=[],this.gpuType=Ea,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,i,r){e*=this.itemSize,r*=i.itemSize;for(let l=0,c=this.itemSize;l<c;l++)this.array[e+l]=i.array[r+l];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let i=0,r=this.count;i<r;i++)Ec.fromBufferAttribute(this,i),Ec.applyMatrix3(e),this.setXY(i,Ec.x,Ec.y);else if(this.itemSize===3)for(let i=0,r=this.count;i<r;i++)Rn.fromBufferAttribute(this,i),Rn.applyMatrix3(e),this.setXYZ(i,Rn.x,Rn.y,Rn.z);return this}applyMatrix4(e){for(let i=0,r=this.count;i<r;i++)Rn.fromBufferAttribute(this,i),Rn.applyMatrix4(e),this.setXYZ(i,Rn.x,Rn.y,Rn.z);return this}applyNormalMatrix(e){for(let i=0,r=this.count;i<r;i++)Rn.fromBufferAttribute(this,i),Rn.applyNormalMatrix(e),this.setXYZ(i,Rn.x,Rn.y,Rn.z);return this}transformDirection(e){for(let i=0,r=this.count;i<r;i++)Rn.fromBufferAttribute(this,i),Rn.transformDirection(e),this.setXYZ(i,Rn.x,Rn.y,Rn.z);return this}set(e,i=0){return this.array.set(e,i),this}getComponent(e,i){let r=this.array[e*this.itemSize+i];return this.normalized&&(r=Tl(r,this.array)),r}setComponent(e,i,r){return this.normalized&&(r=gi(r,this.array)),this.array[e*this.itemSize+i]=r,this}getX(e){let i=this.array[e*this.itemSize];return this.normalized&&(i=Tl(i,this.array)),i}setX(e,i){return this.normalized&&(i=gi(i,this.array)),this.array[e*this.itemSize]=i,this}getY(e){let i=this.array[e*this.itemSize+1];return this.normalized&&(i=Tl(i,this.array)),i}setY(e,i){return this.normalized&&(i=gi(i,this.array)),this.array[e*this.itemSize+1]=i,this}getZ(e){let i=this.array[e*this.itemSize+2];return this.normalized&&(i=Tl(i,this.array)),i}setZ(e,i){return this.normalized&&(i=gi(i,this.array)),this.array[e*this.itemSize+2]=i,this}getW(e){let i=this.array[e*this.itemSize+3];return this.normalized&&(i=Tl(i,this.array)),i}setW(e,i){return this.normalized&&(i=gi(i,this.array)),this.array[e*this.itemSize+3]=i,this}setXY(e,i,r){return e*=this.itemSize,this.normalized&&(i=gi(i,this.array),r=gi(r,this.array)),this.array[e+0]=i,this.array[e+1]=r,this}setXYZ(e,i,r,l){return e*=this.itemSize,this.normalized&&(i=gi(i,this.array),r=gi(r,this.array),l=gi(l,this.array)),this.array[e+0]=i,this.array[e+1]=r,this.array[e+2]=l,this}setXYZW(e,i,r,l,c){return e*=this.itemSize,this.normalized&&(i=gi(i,this.array),r=gi(r,this.array),l=gi(l,this.array),c=gi(c,this.array)),this.array[e+0]=i,this.array[e+1]=r,this.array[e+2]=l,this.array[e+3]=c,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}}class WS extends nr{constructor(e,i,r){super(new Uint16Array(e),i,r)}}class YS extends nr{constructor(e,i,r){super(new Uint32Array(e),i,r)}}class xi extends nr{constructor(e,i,r){super(new Float32Array(e),i,r)}}const mT=new ys,wl=new lt,op=new lt;class sf{constructor(e=new lt,i=-1){this.isSphere=!0,this.center=e,this.radius=i}set(e,i){return this.center.copy(e),this.radius=i,this}setFromPoints(e,i){const r=this.center;i!==void 0?r.copy(i):mT.setFromPoints(e).getCenter(r);let l=0;for(let c=0,h=e.length;c<h;c++)l=Math.max(l,r.distanceToSquared(e[c]));return this.radius=Math.sqrt(l),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const i=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=i*i}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,i){const r=this.center.distanceToSquared(e);return i.copy(e),r>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;wl.subVectors(e,this.center);const i=wl.lengthSq();if(i>this.radius*this.radius){const r=Math.sqrt(i),l=(r-this.radius)*.5;this.center.addScaledVector(wl,l/r),this.radius+=l}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(op.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(wl.copy(e.center).add(op)),this.expandByPoint(wl.copy(e.center).sub(op))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let gT=0;const ki=new dn,lp=new Bn,vo=new lt,Di=new ys,Cl=new ys,zn=new lt;class Yi extends Hr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:gT++}),this.uuid=Yl(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Zb(e)?YS:WS)(e,1):this.index=e,this}setIndirect(e,i=0){return this.indirect=e,this.indirectOffset=i,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,i){return this.attributes[e]=i,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,i,r=0){this.groups.push({start:e,count:i,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,i){this.drawRange.start=e,this.drawRange.count=i}applyMatrix4(e){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(e),i.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const c=new _e().getNormalMatrix(e);r.applyNormalMatrix(c),r.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(e),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return ki.makeRotationFromQuaternion(e),this.applyMatrix4(ki),this}rotateX(e){return ki.makeRotationX(e),this.applyMatrix4(ki),this}rotateY(e){return ki.makeRotationY(e),this.applyMatrix4(ki),this}rotateZ(e){return ki.makeRotationZ(e),this.applyMatrix4(ki),this}translate(e,i,r){return ki.makeTranslation(e,i,r),this.applyMatrix4(ki),this}scale(e,i,r){return ki.makeScale(e,i,r),this.applyMatrix4(ki),this}lookAt(e){return lp.lookAt(e),lp.updateMatrix(),this.applyMatrix4(lp.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(vo).negate(),this.translate(vo.x,vo.y,vo.z),this}setFromPoints(e){const i=this.getAttribute("position");if(i===void 0){const r=[];for(let l=0,c=e.length;l<c;l++){const h=e[l];r.push(h.x,h.y,h.z||0)}this.setAttribute("position",new xi(r,3))}else{const r=Math.min(e.length,i.count);for(let l=0;l<r;l++){const c=e[l];i.setXYZ(l,c.x,c.y,c.z||0)}e.length>i.count&&he("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ys);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){ke("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new lt(-1/0,-1/0,-1/0),new lt(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),i)for(let r=0,l=i.length;r<l;r++){const c=i[r];Di.setFromBufferAttribute(c),this.morphTargetsRelative?(zn.addVectors(this.boundingBox.min,Di.min),this.boundingBox.expandByPoint(zn),zn.addVectors(this.boundingBox.max,Di.max),this.boundingBox.expandByPoint(zn)):(this.boundingBox.expandByPoint(Di.min),this.boundingBox.expandByPoint(Di.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&ke('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new sf);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){ke("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new lt,1/0);return}if(e){const r=this.boundingSphere.center;if(Di.setFromBufferAttribute(e),i)for(let c=0,h=i.length;c<h;c++){const d=i[c];Cl.setFromBufferAttribute(d),this.morphTargetsRelative?(zn.addVectors(Di.min,Cl.min),Di.expandByPoint(zn),zn.addVectors(Di.max,Cl.max),Di.expandByPoint(zn)):(Di.expandByPoint(Cl.min),Di.expandByPoint(Cl.max))}Di.getCenter(r);let l=0;for(let c=0,h=e.count;c<h;c++)zn.fromBufferAttribute(e,c),l=Math.max(l,r.distanceToSquared(zn));if(i)for(let c=0,h=i.length;c<h;c++){const d=i[c],p=this.morphTargetsRelative;for(let m=0,x=d.count;m<x;m++)zn.fromBufferAttribute(d,m),p&&(vo.fromBufferAttribute(e,m),zn.add(vo)),l=Math.max(l,r.distanceToSquared(zn))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&ke('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,i=this.attributes;if(e===null||i.position===void 0||i.normal===void 0||i.uv===void 0){ke("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=i.position,l=i.normal,c=i.uv;let h=this.getAttribute("tangent");(h===void 0||h.count!==r.count)&&(h=new nr(new Float32Array(4*r.count),4),this.setAttribute("tangent",h));const d=[],p=[];for(let b=0;b<r.count;b++)d[b]=new lt,p[b]=new lt;const m=new lt,x=new lt,g=new lt,v=new me,y=new me,T=new me,w=new lt,M=new lt;function S(b,D,V){m.fromBufferAttribute(r,b),x.fromBufferAttribute(r,D),g.fromBufferAttribute(r,V),v.fromBufferAttribute(c,b),y.fromBufferAttribute(c,D),T.fromBufferAttribute(c,V),x.sub(m),g.sub(m),y.sub(v),T.sub(v);const O=1/(y.x*T.y-T.x*y.y);isFinite(O)&&(w.copy(x).multiplyScalar(T.y).addScaledVector(g,-y.y).multiplyScalar(O),M.copy(g).multiplyScalar(y.x).addScaledVector(x,-T.x).multiplyScalar(O),d[b].add(w),d[D].add(w),d[V].add(w),p[b].add(M),p[D].add(M),p[V].add(M))}let P=this.groups;P.length===0&&(P=[{start:0,count:e.count}]);for(let b=0,D=P.length;b<D;++b){const V=P[b],O=V.start,H=V.count;for(let Q=O,G=O+H;Q<G;Q+=3)S(e.getX(Q+0),e.getX(Q+1),e.getX(Q+2))}const F=new lt,C=new lt,U=new lt,N=new lt;function L(b){U.fromBufferAttribute(l,b),N.copy(U);const D=d[b];F.copy(D),F.sub(U.multiplyScalar(U.dot(D))).normalize(),C.crossVectors(N,D);const O=C.dot(p[b])<0?-1:1;h.setXYZW(b,F.x,F.y,F.z,O)}for(let b=0,D=P.length;b<D;++b){const V=P[b],O=V.start,H=V.count;for(let Q=O,G=O+H;Q<G;Q+=3)L(e.getX(Q+0)),L(e.getX(Q+1)),L(e.getX(Q+2))}this._transformed=!0}computeVertexNormals(){const e=this.index,i=this.getAttribute("position");if(i!==void 0){let r=this.getAttribute("normal");if(r===void 0||r.count!==i.count)r=new nr(new Float32Array(i.count*3),3),this.setAttribute("normal",r);else for(let v=0,y=r.count;v<y;v++)r.setXYZ(v,0,0,0);const l=new lt,c=new lt,h=new lt,d=new lt,p=new lt,m=new lt,x=new lt,g=new lt;if(e)for(let v=0,y=e.count;v<y;v+=3){const T=e.getX(v+0),w=e.getX(v+1),M=e.getX(v+2);l.fromBufferAttribute(i,T),c.fromBufferAttribute(i,w),h.fromBufferAttribute(i,M),x.subVectors(h,c),g.subVectors(l,c),x.cross(g),d.fromBufferAttribute(r,T),p.fromBufferAttribute(r,w),m.fromBufferAttribute(r,M),d.add(x),p.add(x),m.add(x),r.setXYZ(T,d.x,d.y,d.z),r.setXYZ(w,p.x,p.y,p.z),r.setXYZ(M,m.x,m.y,m.z)}else for(let v=0,y=i.count;v<y;v+=3)l.fromBufferAttribute(i,v+0),c.fromBufferAttribute(i,v+1),h.fromBufferAttribute(i,v+2),x.subVectors(h,c),g.subVectors(l,c),x.cross(g),r.setXYZ(v+0,x.x,x.y,x.z),r.setXYZ(v+1,x.x,x.y,x.z),r.setXYZ(v+2,x.x,x.y,x.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let i=0,r=e.count;i<r;i++)zn.fromBufferAttribute(e,i),zn.normalize(),e.setXYZ(i,zn.x,zn.y,zn.z)}toNonIndexed(){function e(d,p){const m=d.array,x=d.itemSize,g=d.normalized,v=new m.constructor(p.length*x);let y=0,T=0;for(let w=0,M=p.length;w<M;w++){d.isInterleavedBufferAttribute?y=p[w]*d.data.stride+d.offset:y=p[w]*x;for(let S=0;S<x;S++)v[T++]=m[y++]}return new nr(v,x,g)}if(this.index===null)return he("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new Yi,r=this.index.array,l=this.attributes;for(const d in l){const p=l[d],m=e(p,r);i.setAttribute(d,m)}const c=this.morphAttributes;for(const d in c){const p=[],m=c[d];for(let x=0,g=m.length;x<g;x++){const v=m[x],y=e(v,r);p.push(y)}i.morphAttributes[d]=p}i.morphTargetsRelative=this.morphTargetsRelative;const h=this.groups;for(let d=0,p=h.length;d<p;d++){const m=h[d];i.addGroup(m.start,m.count,m.materialIndex)}return i}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const p=this.parameters;for(const m in p)p[m]!==void 0&&(e[m]=p[m]);return e}e.data={attributes:{}};const i=this.index;i!==null&&(e.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const r=this.attributes;for(const p in r){const m=r[p];e.data.attributes[p]=m.toJSON(e.data)}const l={};let c=!1;for(const p in this.morphAttributes){const m=this.morphAttributes[p],x=[];for(let g=0,v=m.length;g<v;g++){const y=m[g];x.push(y.toJSON(e.data))}x.length>0&&(l[p]=x,c=!0)}c&&(e.data.morphAttributes=l,e.data.morphTargetsRelative=this.morphTargetsRelative);const h=this.groups;h.length>0&&(e.data.groups=JSON.parse(JSON.stringify(h)));const d=this.boundingSphere;return d!==null&&(e.data.boundingSphere=d.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone());const l=e.attributes;for(const m in l){const x=l[m];this.setAttribute(m,x.clone(i))}const c=e.morphAttributes;for(const m in c){const x=[],g=c[m];for(let v=0,y=g.length;v<y;v++)x.push(g[v].clone(i));this.morphAttributes[m]=x}this.morphTargetsRelative=e.morphTargetsRelative;const h=e.groups;for(let m=0,x=h.length;m<x;m++){const g=h[m];this.addGroup(g.start,g.count,g.materialIndex)}const d=e.boundingBox;d!==null&&(this.boundingBox=d.clone());const p=e.boundingSphere;return p!==null&&(this.boundingSphere=p.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}const up=new lt,_T=new lt,vT=new _e;class Qa{constructor(e=new lt(1,0,0),i=0){this.isPlane=!0,this.normal=e,this.constant=i}set(e,i){return this.normal.copy(e),this.constant=i,this}setComponents(e,i,r,l){return this.normal.set(e,i,r),this.constant=l,this}setFromNormalAndCoplanarPoint(e,i){return this.normal.copy(e),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(e,i,r){const l=up.subVectors(r,i).cross(_T.subVectors(e,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,i){return i.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,i,r=!0){const l=e.delta(up),c=this.normal.dot(l);if(c===0)return this.distanceToPoint(e.start)===0?i.copy(e.start):null;const h=-(e.start.dot(this.normal)+this.constant)/c;return r===!0&&(h<0||h>1)?null:i.copy(e.start).addScaledVector(l,h)}intersectsLine(e){const i=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return i<0&&r>0||r<0&&i>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,i){const r=i||vT.getNormalMatrix(e),l=this.coplanarPoint(up).applyMatrix4(e),c=this.normal.applyMatrix3(r).normalize();return this.constant=-l.dot(c),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}}let xT=0;class Ms extends Hr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:xT++}),this.uuid=Yl(),this.name="",this.type="Material",this.blending=Fl,this.side=vs,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=bS,this.blendDst=TS,this.blendEquation=Eo,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Re(0,0,0),this.blendAlpha=0,this.depthFunc=Gl,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Hb,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Xd,this.stencilZFail=Xd,this.stencilZPass=Xd,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const i in e){const r=e[i];if(r===void 0){he(`Material: parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){he(`Material: '${i}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(r):l&&l.isVector2&&r&&r.isVector2||l&&l.isEuler&&r&&r.isEuler||l&&l.isVector3&&r&&r.isVector3?l.copy(r):this[i]=r}}toJSON(e){const i=e===void 0||typeof e=="string";i&&(e={textures:{},images:{}});const r={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,r.blending=this.blending,r.side=this.side,r.shadowSide=this.shadowSide,r.vertexColors=this.vertexColors,r.opacity=this.opacity,r.transparent=this.transparent,r.blendSrc=this.blendSrc,r.blendDst=this.blendDst,r.blendEquation=this.blendEquation,r.blendSrcAlpha=this.blendSrcAlpha,r.blendDstAlpha=this.blendDstAlpha,r.blendEquationAlpha=this.blendEquationAlpha,r.blendColor=this.blendColor.getHex(),r.blendAlpha=this.blendAlpha,r.depthFunc=this.depthFunc,r.depthTest=this.depthTest,r.depthWrite=this.depthWrite,r.colorWrite=this.colorWrite,r.clipIntersection=this.clipIntersection,r.clipShadows=this.clipShadows,r.stencilWriteMask=this.stencilWriteMask,r.stencilFunc=this.stencilFunc,r.stencilRef=this.stencilRef,r.stencilFuncMask=this.stencilFuncMask,r.stencilFail=this.stencilFail,r.stencilZFail=this.stencilZFail,r.stencilZPass=this.stencilZPass,r.stencilWrite=this.stencilWrite,r.polygonOffset=this.polygonOffset,r.polygonOffsetFactor=this.polygonOffsetFactor,r.polygonOffsetUnits=this.polygonOffsetUnits,r.dithering=this.dithering,r.alphaTest=this.alphaTest,r.alphaHash=this.alphaHash,r.alphaToCoverage=this.alphaToCoverage,r.premultipliedAlpha=this.premultipliedAlpha,r.forceSinglePass=this.forceSinglePass,r.allowOverride=this.allowOverride,r.visible=this.visible,r.toneMapped=this.toneMapped,r.name=this.name,this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(r.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(r.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(r.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(r.clippingPlanes=this.clippingPlanes.map(c=>c.toJSON())),this.rotation!==void 0&&(r.rotation=this.rotation),this.depthPacking!==void 0&&(r.depthPacking=this.depthPacking),this.linewidth!==void 0&&(r.linewidth=this.linewidth),this.linecap!==void 0&&(r.linecap=this.linecap),this.linejoin!==void 0&&(r.linejoin=this.linejoin),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.wireframe!==void 0&&(r.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(r.flatShading=this.flatShading),this.fog!==void 0&&(r.fog=this.fog),Object.keys(this.userData).length>0&&(r.userData=this.userData);function l(c){const h=[];for(const d in c){const p=c[d];delete p.metadata,h.push(p)}return h}if(i){const c=l(e.textures),h=l(e.images);c.length>0&&(r.textures=c),h.length>0&&(r.images=h)}return r}fromJSON(e,i){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new Re().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(r=>new Qa().fromJSON(r))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=i[e.map]||null),e.matcap!==void 0&&(this.matcap=i[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=i[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=i[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=i[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let r=e.normalScale;Array.isArray(r)===!1&&(r=[r,r]),this.normalScale=new me().fromArray(r)}return e.displacementMap!==void 0&&(this.displacementMap=i[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=i[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=i[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=i[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=i[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=i[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=i[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=i[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=i[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=i[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=i[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=i[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=i[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=i[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new me().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=i[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=i[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=i[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=i[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=i[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=i[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=i[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const i=e.clippingPlanes;let r=null;if(i!==null){const l=i.length;r=new Array(l);for(let c=0;c!==l;++c)r[c]=i[c].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const Ka=new lt,cp=new lt,bc=new lt,Tc=new lt;class of{constructor(e=new lt,i=new lt(0,0,-1)){this.origin=e,this.direction=i}set(e,i){return this.origin.copy(e),this.direction.copy(i),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,i){return i.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ka)),this}closestPointToPoint(e,i){i.subVectors(e,this.origin);const r=i.dot(this.direction);return r<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const i=Ka.subVectors(e,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(e):(Ka.copy(this.origin).addScaledVector(this.direction,i),Ka.distanceToSquared(e))}distanceSqToSegment(e,i,r,l){cp.copy(e).add(i).multiplyScalar(.5),bc.copy(i).sub(e).normalize(),Tc.copy(this.origin).sub(cp);const c=e.distanceTo(i)*.5,h=-this.direction.dot(bc),d=Tc.dot(this.direction),p=-Tc.dot(bc),m=Tc.lengthSq(),x=Math.abs(1-h*h);let g,v,y,T;if(x>0)if(g=h*p-d,v=h*d-p,T=c*x,g>=0)if(v>=-T)if(v<=T){const w=1/x;g*=w,v*=w,y=g*(g+h*v+2*d)+v*(h*g+v+2*p)+m}else v=c,g=Math.max(0,-(h*v+d)),y=-g*g+v*(v+2*p)+m;else v=-c,g=Math.max(0,-(h*v+d)),y=-g*g+v*(v+2*p)+m;else v<=-T?(g=Math.max(0,-(-h*c+d)),v=g>0?-c:Math.min(Math.max(-c,-p),c),y=-g*g+v*(v+2*p)+m):v<=T?(g=0,v=Math.min(Math.max(-c,-p),c),y=v*(v+2*p)+m):(g=Math.max(0,-(h*c+d)),v=g>0?c:Math.min(Math.max(-c,-p),c),y=-g*g+v*(v+2*p)+m);else v=h>0?-c:c,g=Math.max(0,-(h*v+d)),y=-g*g+v*(v+2*p)+m;return r&&r.copy(this.origin).addScaledVector(this.direction,g),l&&l.copy(cp).addScaledVector(bc,v),y}intersectSphere(e,i){if(e.radius<0)return null;Ka.subVectors(e.center,this.origin);const r=Ka.dot(this.direction),l=Ka.dot(Ka)-r*r,c=e.radius*e.radius;if(l>c)return null;const h=Math.sqrt(c-l),d=r-h,p=r+h;return p<0?null:d<0?this.at(p,i):this.at(d,i)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const i=e.normal.dot(this.direction);if(i===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/i;return r>=0?r:null}intersectPlane(e,i){const r=this.distanceToPlane(e);return r===null?null:this.at(r,i)}intersectsPlane(e){const i=e.distanceToPoint(this.origin);return i===0||e.normal.dot(this.direction)*i<0}intersectBox(e,i){let r,l,c,h,d,p;const m=1/this.direction.x,x=1/this.direction.y,g=1/this.direction.z,v=this.origin;return m>=0?(r=(e.min.x-v.x)*m,l=(e.max.x-v.x)*m):(r=(e.max.x-v.x)*m,l=(e.min.x-v.x)*m),x>=0?(c=(e.min.y-v.y)*x,h=(e.max.y-v.y)*x):(c=(e.max.y-v.y)*x,h=(e.min.y-v.y)*x),r>h||c>l||((c>r||isNaN(r))&&(r=c),(h<l||isNaN(l))&&(l=h),g>=0?(d=(e.min.z-v.z)*g,p=(e.max.z-v.z)*g):(d=(e.max.z-v.z)*g,p=(e.min.z-v.z)*g),r>p||d>l)||((d>r||r!==r)&&(r=d),(p<l||l!==l)&&(l=p),l<0)?null:this.at(r>=0?r:l,i)}intersectsBox(e){return this.intersectBox(e,Ka)!==null}intersectTriangle(e,i,r,l,c){const h=this.origin,d=this.direction,p=d.x,m=d.y,x=d.z,g=e.x-h.x,v=e.y-h.y,y=e.z-h.z,T=i.x-h.x,w=i.y-h.y,M=i.z-h.z,S=r.x-h.x,P=r.y-h.y,F=r.z-h.z,C=Math.abs(p),U=Math.abs(m),N=Math.abs(x);let L,b,D,V,O,H,Q,G,K,k,q,it;if(C>=U&&C>=N?(D=p,H=g,K=T,it=S,p>=0?(L=m,b=x,V=v,O=y,Q=w,G=M,k=P,q=F):(L=x,b=m,V=y,O=v,Q=M,G=w,k=F,q=P)):U>=N?(D=m,H=v,K=w,it=P,m>=0?(L=x,b=p,V=y,O=g,Q=M,G=T,k=F,q=S):(L=p,b=x,V=g,O=y,Q=T,G=M,k=S,q=F)):(D=x,H=y,K=M,it=F,x>=0?(L=p,b=m,V=g,O=v,Q=T,G=w,k=S,q=P):(L=m,b=p,V=v,O=g,Q=w,G=T,k=P,q=S)),D===0)return null;const rt=L/D,ht=b/D,vt=1/D,Gt=V-rt*H,qt=O-ht*H,B=Q-rt*K,pt=G-ht*K,At=k-rt*it,$=q-ht*it,mt=At*pt-$*B,Rt=Gt*$-qt*At,It=B*qt-pt*Gt;if(l){if(mt<0||Rt<0||It<0)return null}else if((mt<0||Rt<0||It<0)&&(mt>0||Rt>0||It>0))return null;const xt=mt+Rt+It;if(xt===0)return null;const Dt=vt*(mt*H+Rt*K+It*it);return(xt>0?Dt<0:Dt>0)?null:this.at(Dt/xt,c)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class qS extends Ms{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Re(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Fr,this.combine=AS,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Tx=new dn,cs=new of,Ac=new sf,Ax=new lt,Rc=new lt,wc=new lt,Cc=new lt,fp=new lt,Dc=new lt,Rx=new lt,Nc=new lt;class ra extends Bn{constructor(e=new Yi,i=new qS){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,i){return super.copy(e,i),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,r=Object.keys(i);if(r.length>0){const l=i[r[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,h=l.length;c<h;c++){const d=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=c}}}}getVertexPosition(e,i){const r=this.geometry,l=r.attributes.position,c=r.morphAttributes.position,h=r.morphTargetsRelative;i.fromBufferAttribute(l,e);const d=this.morphTargetInfluences;if(c&&d){Dc.set(0,0,0);for(let p=0,m=c.length;p<m;p++){const x=d[p],g=c[p];x!==0&&(fp.fromBufferAttribute(g,e),h?Dc.addScaledVector(fp,x):Dc.addScaledVector(fp.sub(i),x))}i.add(Dc)}return i}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,i){const r=this.geometry,l=this.material,c=this.matrixWorld;l!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),Ac.copy(r.boundingSphere),Ac.applyMatrix4(c),cs.copy(e.ray).recast(e.near),!(Ac.containsPoint(cs.origin)===!1&&(cs.intersectSphere(Ac,Ax)===null||cs.origin.distanceToSquared(Ax)>(e.far-e.near)**2))&&(Tx.copy(c).invert(),cs.copy(e.ray).applyMatrix4(Tx),!(r.boundingBox!==null&&cs.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,i,cs)))}_computeIntersections(e,i,r){let l;const c=this.geometry,h=this.material,d=c.index,p=c.attributes.position,m=c.attributes.uv,x=c.attributes.uv1,g=c.attributes.normal,v=c.groups,y=c.drawRange;if(d!==null)if(Array.isArray(h))for(let T=0,w=v.length;T<w;T++){const M=v[T],S=h[M.materialIndex],P=Math.max(M.start,y.start),F=Math.min(d.count,Math.min(M.start+M.count,y.start+y.count));for(let C=P,U=F;C<U;C+=3){const N=d.getX(C),L=d.getX(C+1),b=d.getX(C+2);l=Uc(this,S,e,r,m,x,g,N,L,b),l&&(l.faceIndex=Math.floor(C/3),l.face.materialIndex=M.materialIndex,i.push(l))}}else{const T=Math.max(0,y.start),w=Math.min(d.count,y.start+y.count);for(let M=T,S=w;M<S;M+=3){const P=d.getX(M),F=d.getX(M+1),C=d.getX(M+2);l=Uc(this,h,e,r,m,x,g,P,F,C),l&&(l.faceIndex=Math.floor(M/3),i.push(l))}}else if(p!==void 0)if(Array.isArray(h))for(let T=0,w=v.length;T<w;T++){const M=v[T],S=h[M.materialIndex],P=Math.max(M.start,y.start),F=Math.min(p.count,Math.min(M.start+M.count,y.start+y.count));for(let C=P,U=F;C<U;C+=3){const N=C,L=C+1,b=C+2;l=Uc(this,S,e,r,m,x,g,N,L,b),l&&(l.faceIndex=Math.floor(C/3),l.face.materialIndex=M.materialIndex,i.push(l))}}else{const T=Math.max(0,y.start),w=Math.min(p.count,y.start+y.count);for(let M=T,S=w;M<S;M+=3){const P=M,F=M+1,C=M+2;l=Uc(this,h,e,r,m,x,g,P,F,C),l&&(l.faceIndex=Math.floor(M/3),i.push(l))}}}}function ST(o,e,i,r,l,c,h,d){let p;if(e.side===vi?p=r.intersectTriangle(h,c,l,!0,d):p=r.intersectTriangle(l,c,h,e.side===vs,d),p===null)return null;Nc.copy(d),Nc.applyMatrix4(o.matrixWorld);const m=i.ray.origin.distanceTo(Nc);return m<i.near||m>i.far?null:{distance:m,point:Nc.clone(),object:o}}function Uc(o,e,i,r,l,c,h,d,p,m){o.getVertexPosition(d,Rc),o.getVertexPosition(p,wc),o.getVertexPosition(m,Cc);const x=ST(o,e,i,r,Rc,wc,Cc,Rx);if(x){const g=new lt;na.getBarycoord(Rx,Rc,wc,Cc,g),l&&(x.uv=na.getInterpolatedAttribute(l,d,p,m,g,new me)),c&&(x.uv1=na.getInterpolatedAttribute(c,d,p,m,g,new me)),h&&(x.normal=na.getInterpolatedAttribute(h,d,p,m,g,new lt),x.normal.dot(r.direction)>0&&x.normal.multiplyScalar(-1));const v={a:d,b:p,c:m,normal:new lt,materialIndex:0};na.getNormal(Rc,wc,Cc,v.normal),x.face=v,x.barycoord=g}return x}class yT extends oi{constructor(e=null,i=1,r=1,l,c,h,d,p,m=qn,x=qn,g,v){super(null,h,d,p,m,x,l,c,g,v),this.isDataTexture=!0,this.image={data:e,width:i,height:r},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const fs=new sf,MT=new me(.5,.5),Lc=new lt;class Om{constructor(e=new Qa,i=new Qa,r=new Qa,l=new Qa,c=new Qa,h=new Qa){this.planes=[e,i,r,l,c,h]}set(e,i,r,l,c,h){const d=this.planes;return d[0].copy(e),d[1].copy(i),d[2].copy(r),d[3].copy(l),d[4].copy(c),d[5].copy(h),this}copy(e){const i=this.planes;for(let r=0;r<6;r++)i[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,i=ba,r=!1){const l=this.planes,c=e.elements,h=c[0],d=c[1],p=c[2],m=c[3],x=c[4],g=c[5],v=c[6],y=c[7],T=c[8],w=c[9],M=c[10],S=c[11],P=c[12],F=c[13],C=c[14],U=c[15];if(l[0].setComponents(m-h,y-x,S-T,U-P).normalize(),l[1].setComponents(m+h,y+x,S+T,U+P).normalize(),l[2].setComponents(m+d,y+g,S+w,U+F).normalize(),l[3].setComponents(m-d,y-g,S-w,U-F).normalize(),r)l[4].setComponents(p,v,M,C).normalize(),l[5].setComponents(m-p,y-v,S-M,U-C).normalize();else if(l[4].setComponents(m-p,y-v,S-M,U-C).normalize(),i===ba)l[5].setComponents(m+p,y+v,S+M,U+C).normalize();else if(i===Xl)l[5].setComponents(p,v,M,C).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),fs.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const i=e.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),fs.copy(i.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(fs)}intersectsSprite(e){fs.center.set(0,0,0);const i=MT.distanceTo(e.center);return fs.radius=.7071067811865476+i,fs.applyMatrix4(e.matrixWorld),this.intersectsSphere(fs)}intersectsSphere(e){const i=this.planes,r=e.center,l=-e.radius;for(let c=0;c<6;c++)if(i[c].distanceToPoint(r)<l)return!1;return!0}intersectsBox(e){const i=this.planes;for(let r=0;r<6;r++){const l=i[r];if(Lc.x=l.normal.x>0?e.max.x:e.min.x,Lc.y=l.normal.y>0?e.max.y:e.min.y,Lc.z=l.normal.z>0?e.max.z:e.min.z,l.distanceToPoint(Lc)<0)return!1}return!0}containsPoint(e){const i=this.planes;for(let r=0;r<6;r++)if(i[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class ZS extends Ms{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Re(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const $c=new lt,tf=new lt,wx=new dn,Dl=new of,Oc=new sf,hp=new lt,Cx=new lt;class ET extends Bn{constructor(e=new Yi,i=new ZS){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,i){return super.copy(e,i),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const i=e.attributes.position,r=[0];for(let l=1,c=i.count;l<c;l++)$c.fromBufferAttribute(i,l-1),tf.fromBufferAttribute(i,l),r[l]=r[l-1],r[l]+=$c.distanceTo(tf);e.setAttribute("lineDistance",new xi(r,1))}else he("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,i){const r=this.geometry,l=this.matrixWorld,c=e.params.Line.threshold,h=r.drawRange;if(r.boundingSphere===null&&r.computeBoundingSphere(),Oc.copy(r.boundingSphere),Oc.applyMatrix4(l),Oc.radius+=c,e.ray.intersectsSphere(Oc)===!1)return;wx.copy(l).invert(),Dl.copy(e.ray).applyMatrix4(wx);const d=c/((this.scale.x+this.scale.y+this.scale.z)/3),p=d*d,m=this.isLineSegments?2:1,x=r.index,v=r.attributes.position;if(x!==null){const y=Math.max(0,h.start),T=Math.min(x.count,h.start+h.count);for(let w=y,M=T-1;w<M;w+=m){const S=x.getX(w),P=x.getX(w+1),F=Pc(this,e,Dl,p,S,P,w);F&&i.push(F)}if(this.isLineLoop){const w=x.getX(T-1),M=x.getX(y),S=Pc(this,e,Dl,p,w,M,T-1);S&&i.push(S)}}else{const y=Math.max(0,h.start),T=Math.min(v.count,h.start+h.count);for(let w=y,M=T-1;w<M;w+=m){const S=Pc(this,e,Dl,p,w,w+1,w);S&&i.push(S)}if(this.isLineLoop){const w=Pc(this,e,Dl,p,T-1,y,T-1);w&&i.push(w)}}}updateMorphTargets(){const i=this.geometry.morphAttributes,r=Object.keys(i);if(r.length>0){const l=i[r[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,h=l.length;c<h;c++){const d=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=c}}}}}function Pc(o,e,i,r,l,c,h){const d=o.geometry.attributes.position;if($c.fromBufferAttribute(d,l),tf.fromBufferAttribute(d,c),i.distanceSqToSegment($c,tf,hp,Cx)>r)return;hp.applyMatrix4(o.matrixWorld);const m=e.ray.origin.distanceTo(hp);if(!(m<e.near||m>e.far))return{distance:m,point:Cx.clone().applyMatrix4(o.matrixWorld),index:h,face:null,faceIndex:null,barycoord:null,object:o}}const Dx=new lt,Nx=new lt;class bT extends ET{constructor(e,i){super(e,i),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const i=e.attributes.position,r=[];for(let l=0,c=i.count;l<c;l+=2)Dx.fromBufferAttribute(i,l),Nx.fromBufferAttribute(i,l+1),r[l]=l===0?0:r[l-1],r[l+1]=r[l]+Dx.distanceTo(Nx);e.setAttribute("lineDistance",new xi(r,1))}else he("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class jS extends oi{constructor(e=[],i=xs,r,l,c,h,d,p,m,x){super(e,i,r,l,c,h,d,p,m,x),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Wl extends oi{constructor(e,i,r=Aa,l,c,h,d=qn,p=qn,m,x=ir,g=1){if(x!==ir&&x!==gs)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const v={width:e,height:i,depth:g};super(v,l,c,h,d,p,x,r,m),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Um(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const i=super.toJSON(e);return i.compareFunction=this.compareFunction,i}}class TT extends Wl{constructor(e,i=Aa,r=xs,l,c,h=qn,d=qn,p,m=ir){const x={width:e,height:e,depth:1},g=[x,x,x,x,x,x];super(e,e,i,r,l,c,h,d,p,m),this.image=g,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class KS extends oi{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class ql extends Yi{constructor(e=1,i=1,r=1,l=1,c=1,h=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:i,depth:r,widthSegments:l,heightSegments:c,depthSegments:h};const d=this;l=Math.floor(l),c=Math.floor(c),h=Math.floor(h);const p=[],m=[],x=[],g=[];let v=0,y=0;T("z","y","x",-1,-1,r,i,e,h,c,0),T("z","y","x",1,-1,r,i,-e,h,c,1),T("x","z","y",1,1,e,r,i,l,h,2),T("x","z","y",1,-1,e,r,-i,l,h,3),T("x","y","z",1,-1,e,i,r,l,c,4),T("x","y","z",-1,-1,e,i,-r,l,c,5),this.setIndex(p),this.setAttribute("position",new xi(m,3)),this.setAttribute("normal",new xi(x,3)),this.setAttribute("uv",new xi(g,2));function T(w,M,S,P,F,C,U,N,L,b,D){const V=C/L,O=U/b,H=C/2,Q=U/2,G=N/2,K=L+1,k=b+1;let q=0,it=0;const rt=new lt;for(let ht=0;ht<k;ht++){const vt=ht*O-Q;for(let Gt=0;Gt<K;Gt++){const qt=Gt*V-H;rt[w]=qt*P,rt[M]=vt*F,rt[S]=G,m.push(rt.x,rt.y,rt.z),rt[w]=0,rt[M]=0,rt[S]=N>0?1:-1,x.push(rt.x,rt.y,rt.z),g.push(Gt/L),g.push(1-ht/b),q+=1}}for(let ht=0;ht<b;ht++)for(let vt=0;vt<L;vt++){const Gt=v+vt+K*ht,qt=v+vt+K*(ht+1),B=v+(vt+1)+K*(ht+1),pt=v+(vt+1)+K*ht;p.push(Gt,qt,pt),p.push(qt,B,pt),it+=6}d.addGroup(y,it,D),y+=it,v+=q}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ql(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class Zl extends Yi{constructor(e=1,i=1,r=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:i,widthSegments:r,heightSegments:l};const c=e/2,h=i/2,d=Math.floor(r),p=Math.floor(l),m=d+1,x=p+1,g=e/d,v=i/p,y=[],T=[],w=[],M=[];for(let S=0;S<x;S++){const P=S*v-h;for(let F=0;F<m;F++){const C=F*g-c;T.push(C,-P,0),w.push(0,0,1),M.push(F/d),M.push(1-S/p)}}for(let S=0;S<p;S++)for(let P=0;P<d;P++){const F=P+m*S,C=P+m*(S+1),U=P+1+m*(S+1),N=P+1+m*S;y.push(F,C,N),y.push(C,U,N)}this.setIndex(y),this.setAttribute("position",new xi(T,3)),this.setAttribute("normal",new xi(w,3)),this.setAttribute("uv",new xi(M,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Zl(e.width,e.height,e.widthSegments,e.heightSegments)}}class AT extends Ms{constructor(e){super(),this.isShadowMaterial=!0,this.type="ShadowMaterial",this.color=new Re(0),this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.fog=e.fog,this}}function No(o){const e={};for(const i in o){e[i]={};for(const r in o[i]){const l=o[i][r];if(Ux(l))l.isRenderTargetTexture?(he("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[i][r]=null):e[i][r]=l.clone();else if(Array.isArray(l))if(Ux(l[0])){const c=[];for(let h=0,d=l.length;h<d;h++)c[h]=l[h].clone();e[i][r]=c}else e[i][r]=l.slice();else e[i][r]=l}}return e}function si(o){const e={};for(let i=0;i<o.length;i++){const r=No(o[i]);for(const l in r)e[l]=r[l]}return e}function Ux(o){return o&&(o.isColor||o.isMatrix3||o.isMatrix4||o.isVector2||o.isVector3||o.isVector4||o.isTexture||o.isQuaternion)}function RT(o){const e=[];for(let i=0;i<o.length;i++)e.push(o[i].clone());return e}function QS(o){const e=o.getRenderTarget();return e===null?o.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:He.workingColorSpace}const wT={clone:No,merge:si};var CT=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,DT=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class wa extends Ms{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=CT,this.fragmentShader=DT,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=No(e.uniforms),this.uniformsGroups=RT(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const i=super.toJSON(e);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const h=this.uniforms[l].value;h&&h.isTexture?i.uniforms[l]={type:"t",value:h.toJSON(e).uuid}:h&&h.isColor?i.uniforms[l]={type:"c",value:h.getHex()}:h&&h.isVector2?i.uniforms[l]={type:"v2",value:h.toArray()}:h&&h.isVector3?i.uniforms[l]={type:"v3",value:h.toArray()}:h&&h.isVector4?i.uniforms[l]={type:"v4",value:h.toArray()}:h&&h.isMatrix3?i.uniforms[l]={type:"m3",value:h.toArray()}:h&&h.isMatrix4?i.uniforms[l]={type:"m4",value:h.toArray()}:i.uniforms[l]={value:h}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const r={};for(const l in this.extensions)this.extensions[l]===!0&&(r[l]=!0);return Object.keys(r).length>0&&(i.extensions=r),i}fromJSON(e,i){if(super.fromJSON(e,i),e.uniforms!==void 0)for(const r in e.uniforms){const l=e.uniforms[r];switch(this.uniforms[r]={},l.type){case"t":this.uniforms[r].value=i[l.value]||null;break;case"c":this.uniforms[r].value=new Re().setHex(l.value);break;case"v2":this.uniforms[r].value=new me().fromArray(l.value);break;case"v3":this.uniforms[r].value=new lt().fromArray(l.value);break;case"v4":this.uniforms[r].value=new gn().fromArray(l.value);break;case"m3":this.uniforms[r].value=new _e().fromArray(l.value);break;case"m4":this.uniforms[r].value=new dn().fromArray(l.value);break;default:this.uniforms[r].value=l.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const r in e.extensions)this.extensions[r]=e.extensions[r];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class NT extends wa{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class UT extends Ms{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Re(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Re(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=hm,this.normalScale=new me(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Fr,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class LT extends Ms{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Bb,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class OT extends Ms{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class JS extends Bn{constructor(e,i=1){super(),this.isLight=!0,this.type="Light",this.color=new Re(e),this.intensity=i}copy(e,i){return super.copy(e,i),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const i=super.toJSON(e);return i.object.color=this.color.getHex(),i.object.intensity=this.intensity,i}}class PT extends JS{constructor(e,i,r){super(e,r),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Bn.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Re(i)}copy(e,i){return super.copy(e,i),this.groundColor.copy(e.groundColor),this}toJSON(e){const i=super.toJSON(e);return i.object.groundColor=this.groundColor.getHex(),i}}const dp=new dn,Lx=new lt,Ox=new lt;class IT{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new me(512,512),this.mapType=Ni,this.map=null,this.mapPass=null,this.matrix=new dn,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Om,this._frameExtents=new me(1,1),this._viewportCount=1,this._viewports=[new gn(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){const i=this.camera;Lx.setFromMatrixPosition(e.matrixWorld),i.position.copy(Lx),Ox.setFromMatrixPosition(e.target.matrixWorld),i.lookAt(Ox),i.updateMatrixWorld(),this._updateMatrix(i,this.matrix,this._frustum)}_updateMatrix(e,i,r,l){dp.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),r.setFromProjectionMatrix(dp,e.coordinateSystem,e.reversedDepth);const c=this._frameExtents,h=l?l.z/c.x:1,d=l?l.w/c.y:1,p=l?l.x/c.x:0,m=l?l.y/c.y:0;e.coordinateSystem===Xl||e.reversedDepth?i.set(.5*h,0,0,.5*h+p,0,.5*d,0,.5*d+m,0,0,1,0,0,0,0,1):i.set(.5*h,0,0,.5*h+p,0,.5*d,0,.5*d+m,0,0,.5,.5,0,0,0,1),i.multiply(dp)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const Ic=new lt,zc=new Br,Sa=new lt;class $S extends Bn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new dn,this.projectionMatrix=new dn,this.projectionMatrixInverse=new dn,this.coordinateSystem=ba,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,i){return super.copy(e,i),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Ic,zc,Sa),Sa.x===1&&Sa.y===1&&Sa.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ic,zc,Sa.set(1,1,1)).invert()}updateWorldMatrix(e,i,r=!1){super.updateWorldMatrix(e,i,r),this.matrixWorld.decompose(Ic,zc,Sa),Sa.x===1&&Sa.y===1&&Sa.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ic,zc,Sa.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const Pr=new lt,Px=new me,Ix=new me;class Wi extends $S{constructor(e=50,i=1,r=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const i=.5*this.getFilmHeight()/e;this.fov=dm*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Wc*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return dm*2*Math.atan(Math.tan(Wc*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,i,r){Pr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Pr.x,Pr.y).multiplyScalar(-e/Pr.z),Pr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(Pr.x,Pr.y).multiplyScalar(-e/Pr.z)}getViewSize(e,i){return this.getViewBounds(e,Px,Ix),i.subVectors(Ix,Px)}setViewOffset(e,i,r,l,c,h){this.aspect=e/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=l,this.view.width=c,this.view.height=h,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let i=e*Math.tan(Wc*.5*this.fov)/this.zoom,r=2*i,l=this.aspect*r,c=-.5*l;const h=this.view;if(this.view!==null&&this.view.enabled){const p=h.fullWidth,m=h.fullHeight;c+=h.offsetX*l/p,i-=h.offsetY*r/m,l*=h.width/p,r*=h.height/m}const d=this.filmOffset;d!==0&&(c+=e*d/this.getFilmWidth()),this.projectionMatrix.makePerspective(c,c+l,i,i-r,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}class Pm extends $S{constructor(e=-1,i=1,r=1,l=-1,c=.1,h=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=i,this.top=r,this.bottom=l,this.near=c,this.far=h,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,i,r,l,c,h){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=l,this.view.width=c,this.view.height=h,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let c=r-e,h=r+e,d=l+i,p=l-i;if(this.view!==null&&this.view.enabled){const m=(this.right-this.left)/this.view.fullWidth/this.zoom,x=(this.top-this.bottom)/this.view.fullHeight/this.zoom;c+=m*this.view.offsetX,h=c+m*this.view.width,d-=x*this.view.offsetY,p=d-x*this.view.height}this.projectionMatrix.makeOrthographic(c,h,d,p,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}class zT extends IT{constructor(){super(new Pm(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class BT extends JS{constructor(e,i){super(e,i),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Bn.DEFAULT_UP),this.updateMatrix(),this.target=new Bn,this.shadow=new zT}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const i=super.toJSON(e);return i.object.shadow=this.shadow.toJSON(),i.object.target=this.target.uuid,i}}const xo=-90,So=1;class FT extends Bn{constructor(e,i,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new Wi(xo,So,e,i);l.layers=this.layers,this.add(l);const c=new Wi(xo,So,e,i);c.layers=this.layers,this.add(c);const h=new Wi(xo,So,e,i);h.layers=this.layers,this.add(h);const d=new Wi(xo,So,e,i);d.layers=this.layers,this.add(d);const p=new Wi(xo,So,e,i);p.layers=this.layers,this.add(p);const m=new Wi(xo,So,e,i);m.layers=this.layers,this.add(m)}updateCoordinateSystem(){const e=this.coordinateSystem,i=this.children.concat(),[r,l,c,h,d,p]=i;for(const m of i)this.remove(m);if(e===ba)r.up.set(0,1,0),r.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),c.up.set(0,0,-1),c.lookAt(0,1,0),h.up.set(0,0,1),h.lookAt(0,-1,0),d.up.set(0,1,0),d.lookAt(0,0,1),p.up.set(0,1,0),p.lookAt(0,0,-1);else if(e===Xl)r.up.set(0,-1,0),r.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),c.up.set(0,0,1),c.lookAt(0,1,0),h.up.set(0,0,-1),h.lookAt(0,-1,0),d.up.set(0,-1,0),d.lookAt(0,0,1),p.up.set(0,-1,0),p.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const m of i)this.add(m),m.updateMatrixWorld()}update(e,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:l}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[c,h,d,p,m,x]=this.children,g=e.getRenderTarget(),v=e.getActiveCubeFace(),y=e.getActiveMipmapLevel(),T=e.xr.enabled;e.xr.enabled=!1;const w=r.texture.generateMipmaps;r.texture.generateMipmaps=!1;let M=!1;e.isWebGLRenderer===!0?M=e.state.buffers.depth.getReversed():M=e.reversedDepthBuffer,e.setRenderTarget(r,0,l),M&&e.autoClear===!1&&e.clearDepth(),e.render(i,c),e.setRenderTarget(r,1,l),M&&e.autoClear===!1&&e.clearDepth(),e.render(i,h),e.setRenderTarget(r,2,l),M&&e.autoClear===!1&&e.clearDepth(),e.render(i,d),e.setRenderTarget(r,3,l),M&&e.autoClear===!1&&e.clearDepth(),e.render(i,p),e.setRenderTarget(r,4,l),M&&e.autoClear===!1&&e.clearDepth(),e.render(i,m),r.texture.generateMipmaps=w,e.setRenderTarget(r,5,l),M&&e.autoClear===!1&&e.clearDepth(),e.render(i,x),e.setRenderTarget(g,v,y),e.xr.enabled=T,r.texture.needsPMREMUpdate=!0}}class HT extends Wi{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const zx=new dn;class GT{constructor(e,i,r=0,l=1/0){this.ray=new of(e,i),this.near=r,this.far=l,this.camera=null,this.layers=new Lm,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,i){this.ray.set(e,i)}setFromCamera(e,i){i.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(i.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(i).sub(this.ray.origin).normalize(),this.camera=i):i.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,i.projectionMatrix.elements[14]).unproject(i),this.ray.direction.set(0,0,-1).transformDirection(i.matrixWorld),this.camera=i):ke("Raycaster: Unsupported camera type: "+i.type)}setFromXRController(e){return zx.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(zx),this}intersectObject(e,i=!0,r=[]){return pm(e,this,r,i),r.sort(Bx),r}intersectObjects(e,i=!0,r=[]){for(let l=0,c=e.length;l<c;l++)pm(e[l],this,r,i);return r.sort(Bx),r}}function Bx(o,e){return o.distance-e.distance}function pm(o,e,i,r){let l=!0;if(o.layers.test(e.layers)&&o.raycast(e,i)===!1&&(l=!1),l===!0&&r===!0){const c=o.children;for(let h=0,d=c.length;h<d;h++)pm(c[h],e,i,!0)}}class Fx{constructor(e=1,i=0,r=0){this.radius=e,this.phi=i,this.theta=r}set(e,i,r){return this.radius=e,this.phi=i,this.theta=r,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Ue(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,i,r){return this.radius=Math.sqrt(e*e+i*i+r*r),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,r),this.phi=Math.acos(Ue(i/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}const Gm=class Gm{constructor(e,i,r,l){this.elements=[1,0,0,1],e!==void 0&&this.set(e,i,r,l)}identity(){return this.set(1,0,0,1),this}fromArray(e,i=0){for(let r=0;r<4;r++)this.elements[r]=e[r+i];return this}set(e,i,r,l){const c=this.elements;return c[0]=e,c[2]=i,c[1]=r,c[3]=l,this}};Gm.prototype.isMatrix2=!0;let Hx=Gm;class VT extends bT{constructor(e=10,i=10,r=4473924,l=8947848){r=new Re(r),l=new Re(l);const c=i/2,h=e/i,d=e/2,p=[],m=[];for(let v=0,y=0,T=-d;v<=i;v++,T+=h){p.push(-d,0,T,d,0,T),p.push(T,0,-d,T,0,d);const w=v===c?r:l;w.toArray(m,y),y+=3,w.toArray(m,y),y+=3,w.toArray(m,y),y+=3,w.toArray(m,y),y+=3}const x=new Yi;x.setAttribute("position",new xi(p,3)),x.setAttribute("color",new xi(m,3));const g=new ZS({vertexColors:!0,toneMapped:!1});super(x,g),this.type="GridHelper"}dispose(){super.dispose(),this.geometry.dispose(),this.material.dispose()}}class kT extends Hr{constructor(e,i=null){super(),this.object=e,this.domElement=i,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}}function Gx(o,e,i,r){const l=XT(r);switch(i){case FS:return o*e;case GS:return o*e/l.components*l.byteLength;case Rm:return o*e/l.components*l.byteLength;case Ss:return o*e*2/l.components*l.byteLength;case wm:return o*e*2/l.components*l.byteLength;case HS:return o*e*3/l.components*l.byteLength;case ia:return o*e*4/l.components*l.byteLength;case Cm:return o*e*4/l.components*l.byteLength;case Gc:case Vc:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*8;case kc:case Xc:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case zp:case Fp:return Math.max(o,16)*Math.max(e,8)/4;case Ip:case Bp:return Math.max(o,8)*Math.max(e,8)/2;case Hp:case Gp:case kp:case Xp:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*8;case Vp:case Zc:case Wp:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case Yp:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case qp:return Math.floor((o+4)/5)*Math.floor((e+3)/4)*16;case Zp:return Math.floor((o+4)/5)*Math.floor((e+4)/5)*16;case jp:return Math.floor((o+5)/6)*Math.floor((e+4)/5)*16;case Kp:return Math.floor((o+5)/6)*Math.floor((e+5)/6)*16;case Qp:return Math.floor((o+7)/8)*Math.floor((e+4)/5)*16;case Jp:return Math.floor((o+7)/8)*Math.floor((e+5)/6)*16;case $p:return Math.floor((o+7)/8)*Math.floor((e+7)/8)*16;case tm:return Math.floor((o+9)/10)*Math.floor((e+4)/5)*16;case em:return Math.floor((o+9)/10)*Math.floor((e+5)/6)*16;case nm:return Math.floor((o+9)/10)*Math.floor((e+7)/8)*16;case im:return Math.floor((o+9)/10)*Math.floor((e+9)/10)*16;case am:return Math.floor((o+11)/12)*Math.floor((e+9)/10)*16;case rm:return Math.floor((o+11)/12)*Math.floor((e+11)/12)*16;case sm:case om:case lm:return Math.ceil(o/4)*Math.ceil(e/4)*16;case um:case cm:return Math.ceil(o/4)*Math.ceil(e/4)*8;case jc:case fm:return Math.ceil(o/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function XT(o){switch(o){case Ni:case PS:return{byteLength:1,components:1};case Vl:case IS:case Ra:return{byteLength:2,components:1};case Tm:case Am:return{byteLength:2,components:4};case Aa:case bm:case Ea:return{byteLength:4,components:1};case zS:case BS:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${o}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Em}}));typeof window<"u"&&(window.__THREE__?he("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Em);function ty(){let o=null,e=!1,i=null,r=null;function l(c,h){r=o.requestAnimationFrame(l),i(c,h)}return{start:function(){e!==!0&&i!==null&&o!==null&&(r=o.requestAnimationFrame(l),e=!0)},stop:function(){o!==null&&o.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(c){i=c},setContext:function(c){o=c}}}function WT(o){const e=new WeakMap;function i(d,p){const m=d.array,x=d.usage,g=m.byteLength,v=o.createBuffer();o.bindBuffer(p,v),o.bufferData(p,m,x),d.onUploadCallback();let y;if(m instanceof Float32Array)y=o.FLOAT;else if(typeof Float16Array<"u"&&m instanceof Float16Array)y=o.HALF_FLOAT;else if(m instanceof Uint16Array)d.isFloat16BufferAttribute?y=o.HALF_FLOAT:y=o.UNSIGNED_SHORT;else if(m instanceof Int16Array)y=o.SHORT;else if(m instanceof Uint32Array)y=o.UNSIGNED_INT;else if(m instanceof Int32Array)y=o.INT;else if(m instanceof Int8Array)y=o.BYTE;else if(m instanceof Uint8Array)y=o.UNSIGNED_BYTE;else if(m instanceof Uint8ClampedArray)y=o.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+m);return{buffer:v,type:y,bytesPerElement:m.BYTES_PER_ELEMENT,version:d.version,size:g}}function r(d,p,m){const x=p.array,g=p.updateRanges;if(o.bindBuffer(m,d),g.length===0)o.bufferSubData(m,0,x);else{g.sort((y,T)=>y.start-T.start);let v=0;for(let y=1;y<g.length;y++){const T=g[v],w=g[y];w.start<=T.start+T.count+1?T.count=Math.max(T.count,w.start+w.count-T.start):(++v,g[v]=w)}g.length=v+1;for(let y=0,T=g.length;y<T;y++){const w=g[y];o.bufferSubData(m,w.start*x.BYTES_PER_ELEMENT,x,w.start,w.count)}p.clearUpdateRanges()}p.onUploadCallback()}function l(d){return d.isInterleavedBufferAttribute&&(d=d.data),e.get(d)}function c(d){d.isInterleavedBufferAttribute&&(d=d.data);const p=e.get(d);p&&(o.deleteBuffer(p.buffer),e.delete(d))}function h(d,p){if(d.isInterleavedBufferAttribute&&(d=d.data),d.isGLBufferAttribute){const x=e.get(d);(!x||x.version<d.version)&&e.set(d,{buffer:d.buffer,type:d.type,bytesPerElement:d.elementSize,version:d.version});return}const m=e.get(d);if(m===void 0)e.set(d,i(d,p));else if(m.version<d.version){if(m.size!==d.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(m.buffer,d,p),m.version=d.version}}return{get:l,remove:c,update:h}}var YT=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,qT=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,ZT=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,jT=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,KT=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,QT=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,JT=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,$T=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,t1=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,e1=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,n1=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,i1=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,a1=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,r1=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,s1=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,o1=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,l1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,u1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,c1=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,f1=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,h1=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,d1=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,p1=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,m1=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,g1=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,_1=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,v1=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,x1=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,S1=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,y1=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,M1="gl_FragColor = linearToOutputTexel( gl_FragColor );",E1=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,b1=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,T1=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,A1=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,R1=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,w1=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,C1=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,D1=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,N1=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,U1=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,L1=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,O1=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,P1=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,I1=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,z1=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,B1=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureCubeUV( envMap, envMapRotation * retroVec, roughness );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_CUBE_UV
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,F1=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,H1=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,G1=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,V1=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,k1=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,X1=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,W1=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Y1=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,q1=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Z1=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,j1=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,K1=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Q1=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,J1=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,$1=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,tA=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,eA=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,nA=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,iA=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,aA=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,rA=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,sA=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,oA=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,lA=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,uA=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,cA=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,fA=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,hA=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,dA=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,pA=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,mA=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,gA=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,_A=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,vA=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,xA=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,SA=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,yA=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,MA=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,EA=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,bA=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,TA=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,AA=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,RA=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,wA=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,CA=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,DA=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,NA=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,UA=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,LA=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,OA=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,PA=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,IA=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,zA=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,BA=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,FA=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,HA=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,GA=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,VA=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,kA=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,XA=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,WA=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const YA=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,qA=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ZA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,jA=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,KA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,QA=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,JA=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,$A=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,tR=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,eR=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,nR=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,iR=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,aR=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,rR=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,sR=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,oR=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,lR=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,uR=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,cR=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,fR=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,hR=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,dR=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,pR=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,mR=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,gR=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,_R=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,vR=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,xR=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,SR=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,yR=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,MR=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,ER=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,bR=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,TR=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,ye={alphahash_fragment:YT,alphahash_pars_fragment:qT,alphamap_fragment:ZT,alphamap_pars_fragment:jT,alphatest_fragment:KT,alphatest_pars_fragment:QT,aomap_fragment:JT,aomap_pars_fragment:$T,batching_pars_vertex:t1,batching_vertex:e1,begin_vertex:n1,beginnormal_vertex:i1,bsdfs:a1,iridescence_fragment:r1,bumpmap_pars_fragment:s1,clipping_planes_fragment:o1,clipping_planes_pars_fragment:l1,clipping_planes_pars_vertex:u1,clipping_planes_vertex:c1,color_fragment:f1,color_pars_fragment:h1,color_pars_vertex:d1,color_vertex:p1,common:m1,cube_uv_reflection_fragment:g1,defaultnormal_vertex:_1,displacementmap_pars_vertex:v1,displacementmap_vertex:x1,emissivemap_fragment:S1,emissivemap_pars_fragment:y1,colorspace_fragment:M1,colorspace_pars_fragment:E1,envmap_fragment:b1,envmap_common_pars_fragment:T1,envmap_pars_fragment:A1,envmap_pars_vertex:R1,envmap_physical_pars_fragment:B1,envmap_vertex:w1,fog_vertex:C1,fog_pars_vertex:D1,fog_fragment:N1,fog_pars_fragment:U1,gradientmap_pars_fragment:L1,lightmap_pars_fragment:O1,lights_lambert_fragment:P1,lights_lambert_pars_fragment:I1,lights_pars_begin:z1,lights_toon_fragment:F1,lights_toon_pars_fragment:H1,lights_phong_fragment:G1,lights_phong_pars_fragment:V1,lights_physical_fragment:k1,lights_physical_pars_fragment:X1,lights_fragment_begin:W1,lights_fragment_maps:Y1,lights_fragment_end:q1,lightprobes_pars_fragment:Z1,logdepthbuf_fragment:j1,logdepthbuf_pars_fragment:K1,logdepthbuf_pars_vertex:Q1,logdepthbuf_vertex:J1,map_fragment:$1,map_pars_fragment:tA,map_particle_fragment:eA,map_particle_pars_fragment:nA,metalnessmap_fragment:iA,metalnessmap_pars_fragment:aA,morphinstance_vertex:rA,morphcolor_vertex:sA,morphnormal_vertex:oA,morphtarget_pars_vertex:lA,morphtarget_vertex:uA,normal_fragment_begin:cA,normal_fragment_maps:fA,normal_pars_fragment:hA,normal_pars_vertex:dA,normal_vertex:pA,normalmap_pars_fragment:mA,clearcoat_normal_fragment_begin:gA,clearcoat_normal_fragment_maps:_A,clearcoat_pars_fragment:vA,iridescence_pars_fragment:xA,opaque_fragment:SA,packing:yA,premultiplied_alpha_fragment:MA,project_vertex:EA,dithering_fragment:bA,dithering_pars_fragment:TA,roughnessmap_fragment:AA,roughnessmap_pars_fragment:RA,shadowmap_pars_fragment:wA,shadowmap_pars_vertex:CA,shadowmap_vertex:DA,shadowmask_pars_fragment:NA,skinbase_vertex:UA,skinning_pars_vertex:LA,skinning_vertex:OA,skinnormal_vertex:PA,specularmap_fragment:IA,specularmap_pars_fragment:zA,tonemapping_fragment:BA,tonemapping_pars_fragment:FA,transmission_fragment:HA,transmission_pars_fragment:GA,uv_pars_fragment:VA,uv_pars_vertex:kA,uv_vertex:XA,worldpos_vertex:WA,background_vert:YA,background_frag:qA,backgroundCube_vert:ZA,backgroundCube_frag:jA,cube_vert:KA,cube_frag:QA,depth_vert:JA,depth_frag:$A,distance_vert:tR,distance_frag:eR,equirect_vert:nR,equirect_frag:iR,linedashed_vert:aR,linedashed_frag:rR,meshbasic_vert:sR,meshbasic_frag:oR,meshlambert_vert:lR,meshlambert_frag:uR,meshmatcap_vert:cR,meshmatcap_frag:fR,meshnormal_vert:hR,meshnormal_frag:dR,meshphong_vert:pR,meshphong_frag:mR,meshphysical_vert:gR,meshphysical_frag:_R,meshtoon_vert:vR,meshtoon_frag:xR,points_vert:SR,points_frag:yR,shadow_vert:MR,shadow_frag:ER,sprite_vert:bR,sprite_frag:TR},Yt={common:{diffuse:{value:new Re(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new _e},alphaMap:{value:null},alphaMapTransform:{value:new _e},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new _e}},envmap:{envMap:{value:null},envMapRotation:{value:new _e},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new _e}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new _e}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new _e},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new _e},normalScale:{value:new me(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new _e},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new _e}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new _e}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new _e}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Re(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new lt},probesMax:{value:new lt},probesResolution:{value:new lt}},points:{diffuse:{value:new Re(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new _e},alphaTest:{value:0},uvTransform:{value:new _e}},sprite:{diffuse:{value:new Re(16777215)},opacity:{value:1},center:{value:new me(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new _e},alphaMap:{value:null},alphaMapTransform:{value:new _e},alphaTest:{value:0}}},Ma={basic:{uniforms:si([Yt.common,Yt.specularmap,Yt.envmap,Yt.aomap,Yt.lightmap,Yt.fog]),vertexShader:ye.meshbasic_vert,fragmentShader:ye.meshbasic_frag},lambert:{uniforms:si([Yt.common,Yt.specularmap,Yt.envmap,Yt.aomap,Yt.lightmap,Yt.emissivemap,Yt.bumpmap,Yt.normalmap,Yt.displacementmap,Yt.fog,Yt.lights,{emissive:{value:new Re(0)},envMapIntensity:{value:1}}]),vertexShader:ye.meshlambert_vert,fragmentShader:ye.meshlambert_frag},phong:{uniforms:si([Yt.common,Yt.specularmap,Yt.envmap,Yt.aomap,Yt.lightmap,Yt.emissivemap,Yt.bumpmap,Yt.normalmap,Yt.displacementmap,Yt.fog,Yt.lights,{emissive:{value:new Re(0)},specular:{value:new Re(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:ye.meshphong_vert,fragmentShader:ye.meshphong_frag},standard:{uniforms:si([Yt.common,Yt.envmap,Yt.aomap,Yt.lightmap,Yt.emissivemap,Yt.bumpmap,Yt.normalmap,Yt.displacementmap,Yt.roughnessmap,Yt.metalnessmap,Yt.fog,Yt.lights,{emissive:{value:new Re(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ye.meshphysical_vert,fragmentShader:ye.meshphysical_frag},toon:{uniforms:si([Yt.common,Yt.aomap,Yt.lightmap,Yt.emissivemap,Yt.bumpmap,Yt.normalmap,Yt.displacementmap,Yt.gradientmap,Yt.fog,Yt.lights,{emissive:{value:new Re(0)}}]),vertexShader:ye.meshtoon_vert,fragmentShader:ye.meshtoon_frag},matcap:{uniforms:si([Yt.common,Yt.bumpmap,Yt.normalmap,Yt.displacementmap,Yt.fog,{matcap:{value:null}}]),vertexShader:ye.meshmatcap_vert,fragmentShader:ye.meshmatcap_frag},points:{uniforms:si([Yt.points,Yt.fog]),vertexShader:ye.points_vert,fragmentShader:ye.points_frag},dashed:{uniforms:si([Yt.common,Yt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ye.linedashed_vert,fragmentShader:ye.linedashed_frag},depth:{uniforms:si([Yt.common,Yt.displacementmap]),vertexShader:ye.depth_vert,fragmentShader:ye.depth_frag},normal:{uniforms:si([Yt.common,Yt.bumpmap,Yt.normalmap,Yt.displacementmap,{opacity:{value:1}}]),vertexShader:ye.meshnormal_vert,fragmentShader:ye.meshnormal_frag},sprite:{uniforms:si([Yt.sprite,Yt.fog]),vertexShader:ye.sprite_vert,fragmentShader:ye.sprite_frag},background:{uniforms:{uvTransform:{value:new _e},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ye.background_vert,fragmentShader:ye.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new _e}},vertexShader:ye.backgroundCube_vert,fragmentShader:ye.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ye.cube_vert,fragmentShader:ye.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ye.equirect_vert,fragmentShader:ye.equirect_frag},distance:{uniforms:si([Yt.common,Yt.displacementmap,{referencePosition:{value:new lt},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ye.distance_vert,fragmentShader:ye.distance_frag},shadow:{uniforms:si([Yt.lights,Yt.fog,{color:{value:new Re(0)},opacity:{value:1}}]),vertexShader:ye.shadow_vert,fragmentShader:ye.shadow_frag}};Ma.physical={uniforms:si([Ma.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new _e},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new _e},clearcoatNormalScale:{value:new me(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new _e},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new _e},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new _e},sheen:{value:0},sheenColor:{value:new Re(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new _e},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new _e},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new _e},transmissionSamplerSize:{value:new me},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new _e},attenuationDistance:{value:0},attenuationColor:{value:new Re(0)},specularColor:{value:new Re(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new _e},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new _e},anisotropyVector:{value:new me},anisotropyMap:{value:null},anisotropyMapTransform:{value:new _e}}]),vertexShader:ye.meshphysical_vert,fragmentShader:ye.meshphysical_frag};const Bc={r:0,b:0,g:0},AR=new dn,ey=new _e;ey.set(-1,0,0,0,1,0,0,0,1);function RR(o,e,i,r,l,c){const h=new Re(0);let d=l===!0?0:1,p,m,x=null,g=0,v=null;function y(P){let F=P.isScene===!0?P.background:null;if(F&&F.isTexture){const C=P.backgroundBlurriness>0;F=e.get(F,C)}return F}function T(P){let F=!1;const C=y(P);C===null?M(h,d):C&&C.isColor&&(M(C,1),F=!0);const U=o.xr.getEnvironmentBlendMode();U==="additive"?i.buffers.color.setClear(0,0,0,1,c):U==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,c),(o.autoClear||F)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),o.clear(o.autoClearColor,o.autoClearDepth,o.autoClearStencil))}function w(P,F){const C=y(F);C&&(C.isCubeTexture||C.mapping===rf)?(m===void 0&&(m=new ra(new ql(1,1,1),new wa({name:"BackgroundCubeMaterial",uniforms:No(Ma.backgroundCube.uniforms),vertexShader:Ma.backgroundCube.vertexShader,fragmentShader:Ma.backgroundCube.fragmentShader,side:vi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),m.geometry.deleteAttribute("normal"),m.geometry.deleteAttribute("uv"),m.onBeforeRender=function(U,N,L){this.matrixWorld.copyPosition(L.matrixWorld)},Object.defineProperty(m.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(m)),m.material.uniforms.envMap.value=C,m.material.uniforms.backgroundBlurriness.value=F.backgroundBlurriness,m.material.uniforms.backgroundIntensity.value=F.backgroundIntensity,m.material.uniforms.backgroundRotation.value.setFromMatrix4(AR.makeRotationFromEuler(F.backgroundRotation)).transpose(),C.isCubeTexture&&C.isRenderTargetTexture===!1&&m.material.uniforms.backgroundRotation.value.premultiply(ey),m.material.toneMapped=He.getTransfer(C.colorSpace)!==Je,(x!==C||g!==C.version||v!==o.toneMapping)&&(m.material.needsUpdate=!0,x=C,g=C.version,v=o.toneMapping),m.layers.enableAll(),P.unshift(m,m.geometry,m.material,0,0,null)):C&&C.isTexture&&(p===void 0&&(p=new ra(new Zl(2,2),new wa({name:"BackgroundMaterial",uniforms:No(Ma.background.uniforms),vertexShader:Ma.background.vertexShader,fragmentShader:Ma.background.fragmentShader,side:vs,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),Object.defineProperty(p.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(p)),p.material.uniforms.t2D.value=C,p.material.uniforms.backgroundIntensity.value=F.backgroundIntensity,p.material.toneMapped=He.getTransfer(C.colorSpace)!==Je,C.matrixAutoUpdate===!0&&C.updateMatrix(),p.material.uniforms.uvTransform.value.copy(C.matrix),(x!==C||g!==C.version||v!==o.toneMapping)&&(p.material.needsUpdate=!0,x=C,g=C.version,v=o.toneMapping),p.layers.enableAll(),P.unshift(p,p.geometry,p.material,0,0,null))}function M(P,F){P.getRGB(Bc,QS(o)),i.buffers.color.setClear(Bc.r,Bc.g,Bc.b,F,c)}function S(){m!==void 0&&(m.geometry.dispose(),m.material.dispose(),m=void 0),p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0)}return{getClearColor:function(){return h},setClearColor:function(P,F=1){h.set(P),d=F,M(h,d)},getClearAlpha:function(){return d},setClearAlpha:function(P){d=P,M(h,d)},render:T,addToRenderList:w,dispose:S}}function wR(o,e){const i=o.getParameter(o.MAX_VERTEX_ATTRIBS),r={},l=v(null);let c=l,h=!1;function d(O,H,Q,G,K){let k=!1;const q=g(O,G,Q,H);c!==q&&(c=q,m(c.object)),k=y(O,G,Q,K),k&&T(O,G,Q,K),K!==null&&e.update(K,o.ELEMENT_ARRAY_BUFFER),(k||h)&&(h=!1,C(O,H,Q,G),K!==null&&o.bindBuffer(o.ELEMENT_ARRAY_BUFFER,e.get(K).buffer))}function p(){return o.createVertexArray()}function m(O){return o.bindVertexArray(O)}function x(O){return o.deleteVertexArray(O)}function g(O,H,Q,G){const K=G.wireframe===!0;let k=r[H.id];k===void 0&&(k={},r[H.id]=k);const q=O.isInstancedMesh===!0?O.id:0;let it=k[q];it===void 0&&(it={},k[q]=it);let rt=it[Q.id];rt===void 0&&(rt={},it[Q.id]=rt);let ht=rt[K];return ht===void 0&&(ht=v(p()),rt[K]=ht),ht}function v(O){const H=[],Q=[],G=[];for(let K=0;K<i;K++)H[K]=0,Q[K]=0,G[K]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:H,enabledAttributes:Q,attributeDivisors:G,object:O,attributes:{},index:null}}function y(O,H,Q,G){const K=c.attributes,k=H.attributes;let q=0;const it=Q.getAttributes();for(const rt in it)if(it[rt].location>=0){const vt=K[rt];let Gt=k[rt];if(Gt===void 0&&(rt==="instanceMatrix"&&O.instanceMatrix&&(Gt=O.instanceMatrix),rt==="instanceColor"&&O.instanceColor&&(Gt=O.instanceColor)),vt===void 0||vt.attribute!==Gt||Gt&&vt.data!==Gt.data)return!0;q++}return c.attributesNum!==q||c.index!==G}function T(O,H,Q,G){const K={},k=H.attributes;let q=0;const it=Q.getAttributes();for(const rt in it)if(it[rt].location>=0){let vt=k[rt];vt===void 0&&(rt==="instanceMatrix"&&O.instanceMatrix&&(vt=O.instanceMatrix),rt==="instanceColor"&&O.instanceColor&&(vt=O.instanceColor));const Gt={};Gt.attribute=vt,vt&&vt.data&&(Gt.data=vt.data),K[rt]=Gt,q++}c.attributes=K,c.attributesNum=q,c.index=G}function w(){const O=c.newAttributes;for(let H=0,Q=O.length;H<Q;H++)O[H]=0}function M(O){S(O,0)}function S(O,H){const Q=c.newAttributes,G=c.enabledAttributes,K=c.attributeDivisors;Q[O]=1,G[O]===0&&(o.enableVertexAttribArray(O),G[O]=1),K[O]!==H&&(o.vertexAttribDivisor(O,H),K[O]=H)}function P(){const O=c.newAttributes,H=c.enabledAttributes;for(let Q=0,G=H.length;Q<G;Q++)H[Q]!==O[Q]&&(o.disableVertexAttribArray(Q),H[Q]=0)}function F(O,H,Q,G,K,k,q){q===!0?o.vertexAttribIPointer(O,H,Q,K,k):o.vertexAttribPointer(O,H,Q,G,K,k)}function C(O,H,Q,G){w();const K=G.attributes,k=Q.getAttributes(),q=H.defaultAttributeValues;for(const it in k){const rt=k[it];if(rt.location>=0){let ht=K[it];if(ht===void 0&&(it==="instanceMatrix"&&O.instanceMatrix&&(ht=O.instanceMatrix),it==="instanceColor"&&O.instanceColor&&(ht=O.instanceColor)),ht!==void 0){const vt=ht.normalized,Gt=ht.itemSize,qt=e.get(ht);if(qt===void 0)continue;const B=qt.buffer,pt=qt.type,At=qt.bytesPerElement,$=pt===o.INT||pt===o.UNSIGNED_INT||ht.gpuType===bm;if(ht.isInterleavedBufferAttribute){const mt=ht.data,Rt=mt.stride,It=ht.offset;if(mt.isInstancedInterleavedBuffer){for(let xt=0;xt<rt.locationSize;xt++)S(rt.location+xt,mt.meshPerAttribute);O.isInstancedMesh!==!0&&G._maxInstanceCount===void 0&&(G._maxInstanceCount=mt.meshPerAttribute*mt.count)}else for(let xt=0;xt<rt.locationSize;xt++)M(rt.location+xt);o.bindBuffer(o.ARRAY_BUFFER,B);for(let xt=0;xt<rt.locationSize;xt++)F(rt.location+xt,Gt/rt.locationSize,pt,vt,Rt*At,(It+Gt/rt.locationSize*xt)*At,$)}else{if(ht.isInstancedBufferAttribute){for(let mt=0;mt<rt.locationSize;mt++)S(rt.location+mt,ht.meshPerAttribute);O.isInstancedMesh!==!0&&G._maxInstanceCount===void 0&&(G._maxInstanceCount=ht.meshPerAttribute*ht.count)}else for(let mt=0;mt<rt.locationSize;mt++)M(rt.location+mt);o.bindBuffer(o.ARRAY_BUFFER,B);for(let mt=0;mt<rt.locationSize;mt++)F(rt.location+mt,Gt/rt.locationSize,pt,vt,Gt*At,Gt/rt.locationSize*mt*At,$)}}else if(q!==void 0){const vt=q[it];if(vt!==void 0)switch(vt.length){case 2:o.vertexAttrib2fv(rt.location,vt);break;case 3:o.vertexAttrib3fv(rt.location,vt);break;case 4:o.vertexAttrib4fv(rt.location,vt);break;default:o.vertexAttrib1fv(rt.location,vt)}}}}P()}function U(){D();for(const O in r){const H=r[O];for(const Q in H){const G=H[Q];for(const K in G){const k=G[K];for(const q in k)x(k[q].object),delete k[q];delete G[K]}}delete r[O]}}function N(O){if(r[O.id]===void 0)return;const H=r[O.id];for(const Q in H){const G=H[Q];for(const K in G){const k=G[K];for(const q in k)x(k[q].object),delete k[q];delete G[K]}}delete r[O.id]}function L(O){for(const H in r){const Q=r[H];for(const G in Q){const K=Q[G];if(K[O.id]===void 0)continue;const k=K[O.id];for(const q in k)x(k[q].object),delete k[q];delete K[O.id]}}}function b(O){for(const H in r){const Q=r[H],G=O.isInstancedMesh===!0?O.id:0,K=Q[G];if(K!==void 0){for(const k in K){const q=K[k];for(const it in q)x(q[it].object),delete q[it];delete K[k]}delete Q[G],Object.keys(Q).length===0&&delete r[H]}}}function D(){V(),h=!0,c!==l&&(c=l,m(c.object))}function V(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:d,reset:D,resetDefaultState:V,dispose:U,releaseStatesOfGeometry:N,releaseStatesOfObject:b,releaseStatesOfProgram:L,initAttributes:w,enableAttribute:M,disableUnusedAttributes:P}}function CR(o,e,i){let r;function l(p){r=p}function c(p,m){o.drawArrays(r,p,m),i.update(m,r,1)}function h(p,m,x){x!==0&&(o.drawArraysInstanced(r,p,m,x),i.update(m,r,x))}function d(p,m,x){if(x===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,p,0,m,0,x);let v=0;for(let y=0;y<x;y++)v+=m[y];i.update(v,r,1)}this.setMode=l,this.render=c,this.renderInstances=h,this.renderMultiDraw=d}function DR(o,e,i,r){let l;function c(){if(l!==void 0)return l;if(e.has("EXT_texture_filter_anisotropic")===!0){const L=e.get("EXT_texture_filter_anisotropic");l=o.getParameter(L.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function h(L){return!(L!==ia&&r.convert(L)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_FORMAT))}function d(L){const b=L===Ra&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(L!==Ni&&L!==Ea&&!b&&r.convert(L)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_TYPE))}function p(L){if(L==="highp"){if(o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.HIGH_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.HIGH_FLOAT).precision>0)return"highp";L="mediump"}return L==="mediump"&&o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.MEDIUM_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let m=i.precision!==void 0?i.precision:"highp";const x=p(m);x!==m&&(he("WebGLRenderer:",m,"not supported, using",x,"instead."),m=x);const g=i.logarithmicDepthBuffer===!0,v=i.reversedDepthBuffer===!0&&e.has("EXT_clip_control");i.reversedDepthBuffer===!0&&v===!1&&he("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const y=o.getParameter(o.MAX_TEXTURE_IMAGE_UNITS),T=o.getParameter(o.MAX_VERTEX_TEXTURE_IMAGE_UNITS),w=o.getParameter(o.MAX_TEXTURE_SIZE),M=o.getParameter(o.MAX_CUBE_MAP_TEXTURE_SIZE),S=o.getParameter(o.MAX_VERTEX_ATTRIBS),P=o.getParameter(o.MAX_VERTEX_UNIFORM_VECTORS),F=o.getParameter(o.MAX_VARYING_VECTORS),C=o.getParameter(o.MAX_FRAGMENT_UNIFORM_VECTORS),U=o.getParameter(o.MAX_SAMPLES),N=o.getParameter(o.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:c,getMaxPrecision:p,textureFormatReadable:h,textureTypeReadable:d,precision:m,logarithmicDepthBuffer:g,reversedDepthBuffer:v,maxTextures:y,maxVertexTextures:T,maxTextureSize:w,maxCubemapSize:M,maxAttributes:S,maxVertexUniforms:P,maxVaryings:F,maxFragmentUniforms:C,maxSamples:U,samples:N}}function NR(o){const e=this;let i=null,r=0,l=!1,c=!1;const h=new Qa,d=new _e,p={value:null,needsUpdate:!1};this.uniform=p,this.numPlanes=0,this.numIntersection=0,this.init=function(g,v){const y=g.length!==0||v||r!==0||l;return l=v,r=g.length,y},this.beginShadows=function(){c=!0,x(null)},this.endShadows=function(){c=!1},this.setGlobalState=function(g,v){i=x(g,v,0)},this.setState=function(g,v,y){const T=g.clippingPlanes,w=g.clipIntersection,M=g.clipShadows,S=o.get(g);if(!l||T===null||T.length===0||c&&!M)c?x(null):m();else{const P=c?0:r,F=P*4;let C=S.clippingState||null;p.value=C,C=x(T,v,F,y);for(let U=0;U!==F;++U)C[U]=i[U];S.clippingState=C,this.numIntersection=w?this.numPlanes:0,this.numPlanes+=P}};function m(){p.value!==i&&(p.value=i,p.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function x(g,v,y,T){const w=g!==null?g.length:0;let M=null;if(w!==0){if(M=p.value,T!==!0||M===null){const S=y+w*4,P=v.matrixWorldInverse;d.getNormalMatrix(P),(M===null||M.length<S)&&(M=new Float32Array(S));for(let F=0,C=y;F!==w;++F,C+=4)h.copy(g[F]).applyMatrix4(P,d),h.normal.toArray(M,C),M[C+3]=h.constant}p.value=M,p.needsUpdate=!0}return e.numPlanes=w,e.numIntersection=0,M}}const Ao=4,UR=6,LR=20,OR=256,Nl=new Pm,Vx=new Re;let pp=null,mp=0,gp=0,_p=!1;const PR=new lt,hs=new lt;class kx{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,i=0,r=.1,l=100,c={}){const{size:h=256,position:d=PR}=c;pp=this._renderer.getRenderTarget(),mp=this._renderer.getActiveCubeFace(),gp=this._renderer.getActiveMipmapLevel(),_p=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(h);const p=this._allocateTargets();return p.depthBuffer=!0,this._sceneToCubeUV(e,r,l,p,d),i>0&&this._blur(p,0,0,i),this._applyPMREM(p),this._cleanup(p),p}fromEquirectangular(e,i=null){return this._fromTexture(e,i)}fromCubemap(e,i=null){return this._fromTexture(e,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Yx(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Wx(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(pp,mp,gp),this._renderer.xr.enabled=_p,e.scissorTest=!1,yo(e,0,0,e.width,e.height)}_fromTexture(e,i){e.mapping===xs||e.mapping===Do?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),pp=this._renderer.getRenderTarget(),mp=this._renderer.getActiveCubeFace(),gp=this._renderer.getActiveMipmapLevel(),_p=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=i||this._allocateTargets();return this._textureToCubeUV(e,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,r={magFilter:$n,minFilter:$n,generateMipmaps:!1,type:Ra,format:ia,colorSpace:Kc,depthBuffer:!1},l=Xx(e,i,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Xx(e,i,r);const{_lodMax:c}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=IR(c)),this._blurMaterial=BR(c,e,i),this._ggxMaterial=zR(c,e,i)}return l}_compileMaterial(e){const i=new ra(new Yi,e);this._renderer.compile(i,Nl)}_sceneToCubeUV(e,i,r,l,c){const p=new Wi(90,1,i,r),m=[1,-1,1,1,1,1],x=[1,1,1,-1,-1,-1],g=this._renderer,v=g.autoClear,y=g.toneMapping;g.getClearColor(Vx),g.toneMapping=Ta,g.autoClear=!1,g.state.buffers.depth.getReversed()&&(g.setRenderTarget(l),g.clearDepth(),g.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new ra(new ql,new qS({name:"PMREM.Background",side:vi,depthWrite:!1,depthTest:!1})));const w=this._backgroundBox,M=w.material;let S=!1;const P=e.background;P?P.isColor&&(M.color.copy(P),e.background=null,S=!0):(M.color.copy(Vx),S=!0);for(let F=0;F<6;F++){const C=F%3;C===0?(p.up.set(0,m[F],0),p.position.set(c.x,c.y,c.z),p.lookAt(c.x+x[F],c.y,c.z)):C===1?(p.up.set(0,0,m[F]),p.position.set(c.x,c.y,c.z),p.lookAt(c.x,c.y+x[F],c.z)):(p.up.set(0,m[F],0),p.position.set(c.x,c.y,c.z),p.lookAt(c.x,c.y,c.z+x[F]));const U=this._cubeSize;yo(l,C*U,F>2?U:0,U,U),g.setRenderTarget(l),S&&g.render(w,p),g.render(e,p)}g.toneMapping=y,g.autoClear=v,e.background=P}_textureToCubeUV(e,i){const r=this._renderer,l=e.mapping===xs||e.mapping===Do;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=Yx()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Wx());const c=l?this._cubemapMaterial:this._equirectMaterial,h=this._lodMeshes[0];h.material=c;const d=c.uniforms;d.envMap.value=e;const p=this._cubeSize;yo(i,0,0,3*p,2*p),r.setRenderTarget(i),r.render(h,Nl)}_applyPMREM(e){const i=this._renderer,r=i.autoClear;i.autoClear=!1;const l=this._lodMeshes.length;for(let c=1;c<l;c++)this._applyGGXFilter(e,c-1,c);i.autoClear=r}_applyGGXFilter(e,i,r){const l=this._renderer,c=this._pingPongRenderTarget,h=this._ggxMaterial,d=this._lodMeshes[r];d.material=h;const p=h.uniforms,m=r/(this._lodMeshes.length-1),x=i/(this._lodMeshes.length-1),g=Math.sqrt(m*m-x*x),v=m*1.25,y=g*v,{_lodMax:T}=this,w=this._sizeLods[r],M=3*w*(r>T-Ao?r-T+Ao:0),S=4*(this._cubeSize-w);p.envMap.value=e.texture,p.roughness.value=y,p.mipInt.value=T-i,yo(c,M,S,3*w,2*w),l.setRenderTarget(c),l.render(d,Nl),p.envMap.value=c.texture,p.roughness.value=0,p.mipInt.value=T-r,yo(e,M,S,3*w,2*w),l.setRenderTarget(e),l.render(d,Nl)}_blur(e,i,r,l){const c=this._pingPongRenderTarget,h=Math.min(l,Math.PI)/Math.SQRT2;this._blurPass(e,c,i,r,h),this._blurPass(c,e,r,r,h)}_blurPass(e,i,r,l,c){const h=this._renderer,d=this._blurMaterial,p=this._lodMeshes[l];p.material=d;const m=d.uniforms;m.envMap.value=e.texture,m.sigma.value=c,m.mipInt.value=this._lodMax-r;const x=this._sizeLods[l],g=3*x*(l>this._lodMax-Ao?l-this._lodMax+Ao:0),v=4*(this._cubeSize-x);yo(i,g,v,3*x,2*x),h.setRenderTarget(i),h.render(p,Nl)}}function IR(o){const e=[],i=[];let r=o;const l=o-Ao+1+UR;for(let c=0;c<l;c++){const h=Math.pow(2,r);e.push(h);const d=1/(h-2),p=-d,m=1+d,x=[p,p,m,p,m,m,p,p,m,m,p,m],g=6,v=6,y=3,T=new Float32Array(y*v*g),w=new Float32Array(y*v*g);for(let S=0;S<g;S++){const P=S%3*2/3-1,F=S>2?0:-1,C=[P,F,0,P+2/3,F,0,P+2/3,F+1,0,P,F,0,P+2/3,F+1,0,P,F+1,0];T.set(C,y*v*S);for(let U=0;U<v;U++){const N=x[U*2]*2-1,L=x[U*2+1]*2-1;S===0?hs.set(1,L,N):S===1?hs.set(-N,1,-L):S===2?hs.set(-N,L,1):S===3?hs.set(-1,L,-N):S===4?hs.set(-N,-1,L):hs.set(N,L,-1),hs.toArray(w,(S*v+U)*y)}}const M=new Yi;M.setAttribute("position",new nr(T,y)),M.setAttribute("outputDirection",new nr(w,y)),i.push(new ra(M,null)),r>Ao&&r--}return{lodMeshes:i,sizeLods:e}}function Xx(o,e,i){const r=new aa(o,e,i);return r.texture.mapping=rf,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function yo(o,e,i,r,l){o.viewport.set(e,i,r,l),o.scissor.set(e,i,r,l)}function zR(o,e,i){return new wa({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:OR,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:lf(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:tr,depthTest:!1,depthWrite:!1})}function BR(o,e,i){return new wa({name:"SphericalGaussianBlur",defines:{SAMPLES:LR,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:lf(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float sigma;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359
			#define GOLDEN_ANGLE 2.39996322973

			void main() {

				if ( sigma == 0.0 ) {

					gl_FragColor = vec4( bilinearCubeUV( envMap, vOutputDirection, mipInt ), 1.0 );
					return;

				}

				vec3 outputDirection = normalize( vOutputDirection );

				vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
				vec3 tangent = normalize( cross( up, outputDirection ) );
				vec3 bitangent = cross( outputDirection, tangent );

				// Truncate the kernel at three standard deviations or at the antipode.
				float thetaMax = min( 3.0 * sigma, PI );
				float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

				vec3 accumColor = vec3( 0.0 );
				float accumWeight = 0.0;

				for ( int i = 0; i < SAMPLES; i ++ ) {

					// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
					float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
					float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
					float phi = float( i ) * GOLDEN_ANGLE;

					vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
					vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

					// Correct the planar sample density to solid angle.
					float weight = sin( theta ) / theta;

					accumColor += weight * bilinearCubeUV( envMap, sampleDirection, mipInt );
					accumWeight += weight;

				}

				gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

			}
		`,blending:tr,depthTest:!1,depthWrite:!1})}function Wx(){return new wa({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:lf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:tr,depthTest:!1,depthWrite:!1})}function Yx(){return new wa({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:lf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:tr,depthTest:!1,depthWrite:!1})}function lf(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}class ny extends aa{constructor(e=1,i={}){super(e,e,i),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},l=[r,r,r,r,r,r];this.texture=new jS(l),this._setTextureOptions(i),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},l=new ql(5,5,5),c=new wa({name:"CubemapFromEquirect",uniforms:No(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:vi,blending:tr});c.uniforms.tEquirect.value=i;const h=new ra(l,c),d=i.minFilter;return i.minFilter===ms&&(i.minFilter=$n),new FT(1,10,this).update(e,h),i.minFilter=d,h.geometry.dispose(),h.material.dispose(),this}clear(e,i=!0,r=!0,l=!0){const c=e.getRenderTarget();for(let h=0;h<6;h++)e.setRenderTarget(this,h),e.clear(i,r,l);e.setRenderTarget(c)}}function FR(o){let e=new WeakMap,i=new WeakMap,r=null;function l(v,y=!1){return v==null?null:y?h(v):c(v)}function c(v){if(v&&v.isTexture){const y=v.mapping;if(y===Gd||y===Vd)if(e.has(v)){const T=e.get(v).texture;return d(T,v.mapping)}else{const T=v.image;if(T&&T.height>0){const w=new ny(T.height);return w.fromEquirectangularTexture(o,v),e.set(v,w),v.addEventListener("dispose",m),d(w.texture,v.mapping)}else return null}}return v}function h(v){if(v&&v.isTexture){const y=v.mapping,T=y===Gd||y===Vd,w=y===xs||y===Do;if(T||w){let M=i.get(v);const S=M!==void 0?M.texture.pmremVersion:0;if(v.isRenderTargetTexture&&v.pmremVersion!==S)return r===null&&(r=new kx(o)),M=T?r.fromEquirectangular(v,M):r.fromCubemap(v,M),M.texture.pmremVersion=v.pmremVersion,i.set(v,M),M.texture;if(M!==void 0)return M.texture;{const P=v.image;return T&&P&&P.height>0||w&&P&&p(P)?(r===null&&(r=new kx(o)),M=T?r.fromEquirectangular(v):r.fromCubemap(v),M.texture.pmremVersion=v.pmremVersion,i.set(v,M),v.addEventListener("dispose",x),M.texture):null}}}return v}function d(v,y){return y===Gd?v.mapping=xs:y===Vd&&(v.mapping=Do),v}function p(v){let y=0;const T=6;for(let w=0;w<T;w++)v[w]!==void 0&&y++;return y===T}function m(v){const y=v.target;y.removeEventListener("dispose",m);const T=e.get(y);T!==void 0&&(e.delete(y),T.dispose())}function x(v){const y=v.target;y.removeEventListener("dispose",x);const T=i.get(y);T!==void 0&&(i.delete(y),T.dispose())}function g(){e=new WeakMap,i=new WeakMap,r!==null&&(r.dispose(),r=null)}return{get:l,dispose:g}}function HR(o){const e={};function i(r){if(e[r]!==void 0)return e[r];const l=o.getExtension(r);return e[r]=l,l}return{has:function(r){return i(r)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(r){const l=i(r);return l===null&&wo("WebGLRenderer: "+r+" extension not supported."),l}}}function GR(o,e,i,r){const l={},c=new WeakMap;function h(g){const v=g.target;v.index!==null&&e.remove(v.index);for(const T in v.attributes)e.remove(v.attributes[T]);v.removeEventListener("dispose",h),delete l[v.id];const y=c.get(v);y&&(e.remove(y),c.delete(v)),r.releaseStatesOfGeometry(v),v.isInstancedBufferGeometry===!0&&delete v._maxInstanceCount,i.memory.geometries--}function d(g,v){return l[v.id]===!0||(v.addEventListener("dispose",h),l[v.id]=!0,i.memory.geometries++),v}function p(g){const v=g.attributes;for(const y in v)e.update(v[y],o.ARRAY_BUFFER)}function m(g){const v=[],y=g.index,T=g.attributes.position;let w=0;if(T===void 0)return;if(y!==null){const P=y.array;w=y.version;for(let F=0,C=P.length;F<C;F+=3){const U=P[F+0],N=P[F+1],L=P[F+2];v.push(U,N,N,L,L,U)}}else{const P=T.array;w=T.version;for(let F=0,C=P.length/3-1;F<C;F+=3){const U=F+0,N=F+1,L=F+2;v.push(U,N,N,L,L,U)}}const M=new(T.count>=65535?YS:WS)(v,1);M.version=w;const S=c.get(g);S&&e.remove(S),c.set(g,M)}function x(g){const v=c.get(g);if(v){const y=g.index;y!==null&&v.version<y.version&&m(g)}else m(g);return c.get(g)}return{get:d,update:p,getWireframeAttribute:x}}function VR(o,e,i){let r;function l(g){r=g}let c,h;function d(g){c=g.type,h=g.bytesPerElement}function p(g,v){o.drawElements(r,v,c,g*h),i.update(v,r,1)}function m(g,v,y){y!==0&&(o.drawElementsInstanced(r,v,c,g*h,y),i.update(v,r,y))}function x(g,v,y){if(y===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,v,0,c,g,0,y);let w=0;for(let M=0;M<y;M++)w+=v[M];i.update(w,r,1)}this.setMode=l,this.setIndex=d,this.render=p,this.renderInstances=m,this.renderMultiDraw=x}function kR(o){const e={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function r(c,h,d){switch(i.calls++,h){case o.TRIANGLES:i.triangles+=d*(c/3);break;case o.LINES:i.lines+=d*(c/2);break;case o.LINE_STRIP:i.lines+=d*(c-1);break;case o.LINE_LOOP:i.lines+=d*c;break;case o.POINTS:i.points+=d*c;break;default:ke("WebGLInfo: Unknown draw mode:",h);break}}function l(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:e,render:i,programs:null,autoReset:!0,reset:l,update:r}}function XR(o,e,i){const r=new WeakMap,l=new gn;function c(h,d,p){const m=h.morphTargetInfluences,x=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,g=x!==void 0?x.length:0;let v=r.get(d);if(v===void 0||v.count!==g){let D=function(){L.dispose(),r.delete(d),d.removeEventListener("dispose",D)};v!==void 0&&v.texture.dispose();const y=d.morphAttributes.position!==void 0,T=d.morphAttributes.normal!==void 0,w=d.morphAttributes.color!==void 0,M=d.morphAttributes.position||[],S=d.morphAttributes.normal||[],P=d.morphAttributes.color||[];let F=0;y===!0&&(F=1),T===!0&&(F=2),w===!0&&(F=3);let C=d.attributes.position.count*F,U=1;C>e.maxTextureSize&&(U=Math.ceil(C/e.maxTextureSize),C=e.maxTextureSize);const N=new Float32Array(C*U*4*g),L=new kS(N,C,U,g);L.type=Ea,L.needsUpdate=!0;const b=F*4;for(let V=0;V<g;V++){const O=M[V],H=S[V],Q=P[V],G=C*U*4*V;for(let K=0;K<O.count;K++){const k=K*b;y===!0&&(l.fromBufferAttribute(O,K),N[G+k+0]=l.x,N[G+k+1]=l.y,N[G+k+2]=l.z,N[G+k+3]=0),T===!0&&(l.fromBufferAttribute(H,K),N[G+k+4]=l.x,N[G+k+5]=l.y,N[G+k+6]=l.z,N[G+k+7]=0),w===!0&&(l.fromBufferAttribute(Q,K),N[G+k+8]=l.x,N[G+k+9]=l.y,N[G+k+10]=l.z,N[G+k+11]=Q.itemSize===4?l.w:1)}}v={count:g,texture:L,size:new me(C,U)},r.set(d,v),d.addEventListener("dispose",D)}if(h.isInstancedMesh===!0&&h.morphTexture!==null)p.getUniforms().setValue(o,"morphTexture",h.morphTexture,i);else{let y=0;for(let w=0;w<m.length;w++)y+=m[w];const T=d.morphTargetsRelative?1:1-y;p.getUniforms().setValue(o,"morphTargetBaseInfluence",T),p.getUniforms().setValue(o,"morphTargetInfluences",m)}p.getUniforms().setValue(o,"morphTargetsTexture",v.texture,i),p.getUniforms().setValue(o,"morphTargetsTextureSize",v.size)}return{update:c}}function WR(o,e,i,r,l){let c=new WeakMap;function h(m){const x=l.render.frame,g=m.geometry,v=e.get(m,g);if(c.get(v)!==x&&(e.update(v),c.set(v,x)),m.isInstancedMesh&&(m.hasEventListener("dispose",p)===!1&&m.addEventListener("dispose",p),c.get(m)!==x&&(i.update(m.instanceMatrix,o.ARRAY_BUFFER),m.instanceColor!==null&&i.update(m.instanceColor,o.ARRAY_BUFFER),c.set(m,x))),m.isSkinnedMesh){const y=m.skeleton;c.get(y)!==x&&(y.update(),c.set(y,x))}return v}function d(){c=new WeakMap}function p(m){const x=m.target;x.removeEventListener("dispose",p),r.releaseStatesOfObject(x),i.remove(x.instanceMatrix),x.instanceColor!==null&&i.remove(x.instanceColor)}return{update:h,dispose:d}}const YR={[RS]:"LINEAR_TONE_MAPPING",[wS]:"REINHARD_TONE_MAPPING",[CS]:"CINEON_TONE_MAPPING",[DS]:"ACES_FILMIC_TONE_MAPPING",[US]:"AGX_TONE_MAPPING",[LS]:"NEUTRAL_TONE_MAPPING",[NS]:"CUSTOM_TONE_MAPPING"};function qR(o,e,i,r,l,c){const h=new aa(e,i,{type:o,depthBuffer:l,stencilBuffer:c,samples:r?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1});let d=null,p=null;const m=new Yi;m.setAttribute("position",new xi([-1,3,0,-1,-1,0,3,-1,0],3)),m.setAttribute("uv",new xi([0,2,0,0,2,0],2));const x=new NT({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),g=new ra(m,x),v=new Pm(-1,1,1,-1,0,1);let y=null,T=null,w=!1,M,S=null,P=[],F=!1;this.setSize=function(C,U){h.setSize(C,U),d!==null&&d.setSize(C,U),p!==null&&p.setSize(C,U);for(let N=0;N<P.length;N++){const L=P[N];L.setSize&&L.setSize(C,U)}},this.setEffects=function(C){P=C,F=P.length>0&&P[0].isRenderPass===!0;const U=h.width,N=h.height;P.length>0&&d===null&&(d=new aa(U,N,{type:Ra,depthBuffer:!1,stencilBuffer:!1}),p=new aa(U,N,{type:Ra,depthBuffer:!1,stencilBuffer:!1}));for(let L=0;L<P.length;L++){const b=P[L];b.setSize&&b.setSize(U,N)}},this.begin=function(C,U){if(w||C.toneMapping===Ta&&P.length===0)return!1;if(S=U,U!==null){const N=U.width,L=U.height;(h.width!==N||h.height!==L)&&this.setSize(N,L)}return F===!1&&C.setRenderTarget(h),M=C.toneMapping,C.toneMapping=Ta,!0},this.hasRenderPass=function(){return F},this.end=function(C,U){C.toneMapping=M,w=!0;let N=h,L=d;for(let b=0;b<P.length;b++){const D=P[b];D.enabled!==!1&&(D.render(C,L,N,U),D.needsSwap!==!1&&(N=L,L=L===d?p:d))}if(y!==C.outputColorSpace||T!==C.toneMapping){y=C.outputColorSpace,T=C.toneMapping,x.defines={},He.getTransfer(y)===Je&&(x.defines.SRGB_TRANSFER="");const b=YR[T];b&&(x.defines[b]=""),x.needsUpdate=!0}x.uniforms.tDiffuse.value=N.texture,C.setRenderTarget(S),C.render(g,v),S=null,w=!1},this.isCompositing=function(){return w},this.dispose=function(){h.dispose(),d!==null&&d.dispose(),p!==null&&p.dispose(),m.dispose(),x.dispose()}}const iy=new oi,mm=new Wl(1,1),ay=new kS,ry=new rT,sy=new jS,qx=[],Zx=[],jx=new Float32Array(16),Kx=new Float32Array(9),Qx=new Float32Array(4);function Uo(o,e,i){const r=o[0];if(r<=0||r>0)return o;const l=e*i;let c=qx[l];if(c===void 0&&(c=new Float32Array(l),qx[l]=c),e!==0){r.toArray(c,0);for(let h=1,d=0;h!==e;++h)d+=i,o[h].toArray(c,d)}return c}function Un(o,e){if(o.length!==e.length)return!1;for(let i=0,r=o.length;i<r;i++)if(o[i]!==e[i])return!1;return!0}function Ln(o,e){for(let i=0,r=e.length;i<r;i++)o[i]=e[i]}function uf(o,e){let i=Zx[e];i===void 0&&(i=new Int32Array(e),Zx[e]=i);for(let r=0;r!==e;++r)i[r]=o.allocateTextureUnit();return i}function ZR(o,e){const i=this.cache;i[0]!==e&&(o.uniform1f(this.addr,e),i[0]=e)}function jR(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(o.uniform2f(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(Un(i,e))return;o.uniform2fv(this.addr,e),Ln(i,e)}}function KR(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(o.uniform3f(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else if(e.r!==void 0)(i[0]!==e.r||i[1]!==e.g||i[2]!==e.b)&&(o.uniform3f(this.addr,e.r,e.g,e.b),i[0]=e.r,i[1]=e.g,i[2]=e.b);else{if(Un(i,e))return;o.uniform3fv(this.addr,e),Ln(i,e)}}function QR(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(o.uniform4f(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(Un(i,e))return;o.uniform4fv(this.addr,e),Ln(i,e)}}function JR(o,e){const i=this.cache,r=e.elements;if(r===void 0){if(Un(i,e))return;o.uniformMatrix2fv(this.addr,!1,e),Ln(i,e)}else{if(Un(i,r))return;Qx.set(r),o.uniformMatrix2fv(this.addr,!1,Qx),Ln(i,r)}}function $R(o,e){const i=this.cache,r=e.elements;if(r===void 0){if(Un(i,e))return;o.uniformMatrix3fv(this.addr,!1,e),Ln(i,e)}else{if(Un(i,r))return;Kx.set(r),o.uniformMatrix3fv(this.addr,!1,Kx),Ln(i,r)}}function tw(o,e){const i=this.cache,r=e.elements;if(r===void 0){if(Un(i,e))return;o.uniformMatrix4fv(this.addr,!1,e),Ln(i,e)}else{if(Un(i,r))return;jx.set(r),o.uniformMatrix4fv(this.addr,!1,jx),Ln(i,r)}}function ew(o,e){const i=this.cache;i[0]!==e&&(o.uniform1i(this.addr,e),i[0]=e)}function nw(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(o.uniform2i(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(Un(i,e))return;o.uniform2iv(this.addr,e),Ln(i,e)}}function iw(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(o.uniform3i(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(Un(i,e))return;o.uniform3iv(this.addr,e),Ln(i,e)}}function aw(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(o.uniform4i(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(Un(i,e))return;o.uniform4iv(this.addr,e),Ln(i,e)}}function rw(o,e){const i=this.cache;i[0]!==e&&(o.uniform1ui(this.addr,e),i[0]=e)}function sw(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(o.uniform2ui(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(Un(i,e))return;o.uniform2uiv(this.addr,e),Ln(i,e)}}function ow(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(o.uniform3ui(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(Un(i,e))return;o.uniform3uiv(this.addr,e),Ln(i,e)}}function lw(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(o.uniform4ui(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(Un(i,e))return;o.uniform4uiv(this.addr,e),Ln(i,e)}}function uw(o,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l);let c;this.type===o.SAMPLER_2D_SHADOW?(mm.compareFunction=i.isReversedDepthBuffer()?Nm:Dm,c=mm):c=iy,i.setTexture2D(e||c,l)}function cw(o,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l),i.setTexture3D(e||ry,l)}function fw(o,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l),i.setTextureCube(e||sy,l)}function hw(o,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l),i.setTexture2DArray(e||ay,l)}function dw(o){switch(o){case 5126:return ZR;case 35664:return jR;case 35665:return KR;case 35666:return QR;case 35674:return JR;case 35675:return $R;case 35676:return tw;case 5124:case 35670:return ew;case 35667:case 35671:return nw;case 35668:case 35672:return iw;case 35669:case 35673:return aw;case 5125:return rw;case 36294:return sw;case 36295:return ow;case 36296:return lw;case 35678:case 36198:case 36298:case 36306:case 35682:return uw;case 35679:case 36299:case 36307:return cw;case 35680:case 36300:case 36308:case 36293:return fw;case 36289:case 36303:case 36311:case 36292:return hw}}function pw(o,e){o.uniform1fv(this.addr,e)}function mw(o,e){const i=Uo(e,this.size,2);o.uniform2fv(this.addr,i)}function gw(o,e){const i=Uo(e,this.size,3);o.uniform3fv(this.addr,i)}function _w(o,e){const i=Uo(e,this.size,4);o.uniform4fv(this.addr,i)}function vw(o,e){const i=Uo(e,this.size,4);o.uniformMatrix2fv(this.addr,!1,i)}function xw(o,e){const i=Uo(e,this.size,9);o.uniformMatrix3fv(this.addr,!1,i)}function Sw(o,e){const i=Uo(e,this.size,16);o.uniformMatrix4fv(this.addr,!1,i)}function yw(o,e){o.uniform1iv(this.addr,e)}function Mw(o,e){o.uniform2iv(this.addr,e)}function Ew(o,e){o.uniform3iv(this.addr,e)}function bw(o,e){o.uniform4iv(this.addr,e)}function Tw(o,e){o.uniform1uiv(this.addr,e)}function Aw(o,e){o.uniform2uiv(this.addr,e)}function Rw(o,e){o.uniform3uiv(this.addr,e)}function ww(o,e){o.uniform4uiv(this.addr,e)}function Cw(o,e,i){const r=this.cache,l=e.length,c=uf(i,l);Un(r,c)||(o.uniform1iv(this.addr,c),Ln(r,c));let h;this.type===o.SAMPLER_2D_SHADOW?h=mm:h=iy;for(let d=0;d!==l;++d)i.setTexture2D(e[d]||h,c[d])}function Dw(o,e,i){const r=this.cache,l=e.length,c=uf(i,l);Un(r,c)||(o.uniform1iv(this.addr,c),Ln(r,c));for(let h=0;h!==l;++h)i.setTexture3D(e[h]||ry,c[h])}function Nw(o,e,i){const r=this.cache,l=e.length,c=uf(i,l);Un(r,c)||(o.uniform1iv(this.addr,c),Ln(r,c));for(let h=0;h!==l;++h)i.setTextureCube(e[h]||sy,c[h])}function Uw(o,e,i){const r=this.cache,l=e.length,c=uf(i,l);Un(r,c)||(o.uniform1iv(this.addr,c),Ln(r,c));for(let h=0;h!==l;++h)i.setTexture2DArray(e[h]||ay,c[h])}function Lw(o){switch(o){case 5126:return pw;case 35664:return mw;case 35665:return gw;case 35666:return _w;case 35674:return vw;case 35675:return xw;case 35676:return Sw;case 5124:case 35670:return yw;case 35667:case 35671:return Mw;case 35668:case 35672:return Ew;case 35669:case 35673:return bw;case 5125:return Tw;case 36294:return Aw;case 36295:return Rw;case 36296:return ww;case 35678:case 36198:case 36298:case 36306:case 35682:return Cw;case 35679:case 36299:case 36307:return Dw;case 35680:case 36300:case 36308:case 36293:return Nw;case 36289:case 36303:case 36311:case 36292:return Uw}}class Ow{constructor(e,i,r){this.id=e,this.addr=r,this.cache=[],this.type=i.type,this.setValue=dw(i.type)}}class Pw{constructor(e,i,r){this.id=e,this.addr=r,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=Lw(i.type)}}class Iw{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,i,r){const l=this.seq;for(let c=0,h=l.length;c!==h;++c){const d=l[c];d.setValue(e,i[d.id],r)}}}const vp=/(\w+)(\])?(\[|\.)?/g;function Jx(o,e){o.seq.push(e),o.map[e.id]=e}function zw(o,e,i){const r=o.name,l=r.length;for(vp.lastIndex=0;;){const c=vp.exec(r),h=vp.lastIndex;let d=c[1];const p=c[2]==="]",m=c[3];if(p&&(d=d|0),m===void 0||m==="["&&h+2===l){Jx(i,m===void 0?new Ow(d,o,e):new Pw(d,o,e));break}else{let g=i.map[d];g===void 0&&(g=new Iw(d),Jx(i,g)),i=g}}}class Yc{constructor(e,i){this.seq=[],this.map={};const r=e.getProgramParameter(i,e.ACTIVE_UNIFORMS);for(let h=0;h<r;++h){const d=e.getActiveUniform(i,h),p=e.getUniformLocation(i,d.name);zw(d,p,this)}const l=[],c=[];for(const h of this.seq)h.type===e.SAMPLER_2D_SHADOW||h.type===e.SAMPLER_CUBE_SHADOW||h.type===e.SAMPLER_2D_ARRAY_SHADOW?l.push(h):c.push(h);l.length>0&&(this.seq=l.concat(c))}setValue(e,i,r,l){const c=this.map[i];c!==void 0&&c.setValue(e,r,l)}setOptional(e,i,r){const l=i[r];l!==void 0&&this.setValue(e,r,l)}static upload(e,i,r,l){for(let c=0,h=i.length;c!==h;++c){const d=i[c],p=r[d.id];p.needsUpdate!==!1&&d.setValue(e,p.value,l)}}static seqWithValue(e,i){const r=[];for(let l=0,c=e.length;l!==c;++l){const h=e[l];h.id in i&&r.push(h)}return r}}function $x(o,e,i){const r=o.createShader(e);return o.shaderSource(r,i),o.compileShader(r),r}const Bw=37297;let Fw=0;function Hw(o,e){const i=o.split(`
`),r=[],l=Math.max(e-6,0),c=Math.min(e+6,i.length);for(let h=l;h<c;h++){const d=h+1;r.push(`${d===e?">":" "} ${d}: ${i[h]}`)}return r.join(`
`)}const tS=new _e;function Gw(o){He._getMatrix(tS,He.workingColorSpace,o);const e=`mat3( ${tS.elements.map(i=>i.toFixed(4))} )`;switch(He.getTransfer(o)){case Qc:return[e,"LinearTransferOETF"];case Je:return[e,"sRGBTransferOETF"];default:return he("WebGLProgram: Unsupported color space: ",o),[e,"LinearTransferOETF"]}}function eS(o,e,i){const r=o.getShaderParameter(e,o.COMPILE_STATUS),c=(o.getShaderInfoLog(e)||"").trim();if(r&&c==="")return"";const h=/ERROR: 0:(\d+)/.exec(c);if(h){const d=parseInt(h[1]);return i.toUpperCase()+`

`+c+`

`+Hw(o.getShaderSource(e),d)}else return c}function Vw(o,e){const i=Gw(e);return[`vec4 ${o}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}const kw={[RS]:"Linear",[wS]:"Reinhard",[CS]:"Cineon",[DS]:"ACESFilmic",[US]:"AgX",[LS]:"Neutral",[NS]:"Custom"};function Xw(o,e){const i=kw[e];return i===void 0?(he("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+o+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+o+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const Fc=new lt;function Ww(){He.getLuminanceCoefficients(Fc);const o=Fc.x.toFixed(4),e=Fc.y.toFixed(4),i=Fc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${o}, ${e}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Yw(o){return[o.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",o.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Il).join(`
`)}function qw(o){const e=[];for(const i in o){const r=o[i];r!==!1&&e.push("#define "+i+" "+r)}return e.join(`
`)}function Zw(o,e){const i={},r=o.getProgramParameter(e,o.ACTIVE_ATTRIBUTES);for(let l=0;l<r;l++){const c=o.getActiveAttrib(e,l),h=c.name;let d=1;c.type===o.FLOAT_MAT2&&(d=2),c.type===o.FLOAT_MAT3&&(d=3),c.type===o.FLOAT_MAT4&&(d=4),i[h]={type:c.type,location:o.getAttribLocation(e,h),locationSize:d}}return i}function Il(o){return o!==""}function nS(o,e){const i=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return o.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function iS(o,e){return o.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const jw=/^[ \t]*#include +<([\w\d./]+)>/gm;function gm(o){return o.replace(jw,Qw)}const Kw=new Map;function Qw(o,e){let i=ye[e];if(i===void 0){const r=Kw.get(e);if(r!==void 0)i=ye[r],he('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,r);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return gm(i)}const Jw=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function aS(o){return o.replace(Jw,$w)}function $w(o,e,i,r){let l="";for(let c=parseInt(e);c<parseInt(i);c++)l+=r.replace(/\[\s*i\s*\]/g,"[ "+c+" ]").replace(/UNROLLED_LOOP_INDEX/g,c);return l}function rS(o){let e=`precision ${o.precision} float;
	precision ${o.precision} int;
	precision ${o.precision} sampler2D;
	precision ${o.precision} samplerCube;
	precision ${o.precision} sampler3D;
	precision ${o.precision} sampler2DArray;
	precision ${o.precision} sampler2DShadow;
	precision ${o.precision} samplerCubeShadow;
	precision ${o.precision} sampler2DArrayShadow;
	precision ${o.precision} isampler2D;
	precision ${o.precision} isampler3D;
	precision ${o.precision} isamplerCube;
	precision ${o.precision} isampler2DArray;
	precision ${o.precision} usampler2D;
	precision ${o.precision} usampler3D;
	precision ${o.precision} usamplerCube;
	precision ${o.precision} usampler2DArray;
	`;return o.precision==="highp"?e+=`
#define HIGH_PRECISION`:o.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:o.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const tC={[Bl]:"SHADOWMAP_TYPE_PCF",[Pl]:"SHADOWMAP_TYPE_VSM"};function eC(o){return tC[o.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const nC={[xs]:"ENVMAP_TYPE_CUBE",[Do]:"ENVMAP_TYPE_CUBE",[rf]:"ENVMAP_TYPE_CUBE_UV"};function iC(o){return o.envMap===!1?"ENVMAP_TYPE_CUBE":nC[o.envMapMode]||"ENVMAP_TYPE_CUBE"}const aC={[Do]:"ENVMAP_MODE_REFRACTION"};function rC(o){return o.envMap===!1?"ENVMAP_MODE_REFLECTION":aC[o.envMapMode]||"ENVMAP_MODE_REFLECTION"}const sC={[AS]:"ENVMAP_BLENDING_MULTIPLY",[Pb]:"ENVMAP_BLENDING_MIX",[Ib]:"ENVMAP_BLENDING_ADD"};function oC(o){return o.envMap===!1?"ENVMAP_BLENDING_NONE":sC[o.combine]||"ENVMAP_BLENDING_NONE"}function lC(o){const e=o.envMapCubeUVHeight;if(e===null)return null;const i=Math.log2(e)-2,r=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,i),112)),texelHeight:r,maxMip:i}}function uC(o,e,i,r){const l=o.getContext(),c=i.defines;let h=i.vertexShader,d=i.fragmentShader;const p=eC(i),m=iC(i),x=rC(i),g=oC(i),v=lC(i),y=Yw(i),T=qw(c),w=l.createProgram();let M,S,P=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(M=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,T].filter(Il).join(`
`),M.length>0&&(M+=`
`),S=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,T].filter(Il).join(`
`),S.length>0&&(S+=`
`)):(M=[rS(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,T,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+x:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexNormals?"#define HAS_NORMAL":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+p:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Il).join(`
`),S=[rS(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,T,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+m:"",i.envMap?"#define "+x:"",i.envMap?"#define "+g:"",v?"#define CUBEUV_TEXEL_WIDTH "+v.texelWidth:"",v?"#define CUBEUV_TEXEL_HEIGHT "+v.texelHeight:"",v?"#define CUBEUV_MAX_MIP "+v.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.retroreflection?"#define USE_RETROREFLECTION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor?"#define USE_COLOR":"",i.vertexAlphas||i.batchingColor?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+p:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==Ta?"#define TONE_MAPPING":"",i.toneMapping!==Ta?ye.tonemapping_pars_fragment:"",i.toneMapping!==Ta?Xw("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",ye.colorspace_pars_fragment,Vw("linearToOutputTexel",i.outputColorSpace),Ww(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(Il).join(`
`)),h=gm(h),h=nS(h,i),h=iS(h,i),d=gm(d),d=nS(d,i),d=iS(d,i),h=aS(h),d=aS(d),i.isRawShaderMaterial!==!0&&(P=`#version 300 es
`,M=[y,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+M,S=["#define varying in",i.glslVersion===fx?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===fx?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+S);const F=P+M+h,C=P+S+d,U=$x(l,l.VERTEX_SHADER,F),N=$x(l,l.FRAGMENT_SHADER,C);l.attachShader(w,U),l.attachShader(w,N),i.index0AttributeName!==void 0?l.bindAttribLocation(w,0,i.index0AttributeName):i.hasPositionAttribute===!0&&l.bindAttribLocation(w,0,"position"),l.linkProgram(w);function L(O){if(o.debug.checkShaderErrors){const H=l.getProgramInfoLog(w)||"",Q=l.getShaderInfoLog(U)||"",G=l.getShaderInfoLog(N)||"",K=H.trim(),k=Q.trim(),q=G.trim();let it=!0,rt=!0;if(l.getProgramParameter(w,l.LINK_STATUS)===!1)if(it=!1,typeof o.debug.onShaderError=="function")o.debug.onShaderError(l,w,U,N);else{const ht=eS(l,U,"vertex"),vt=eS(l,N,"fragment");ke("WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(w,l.VALIDATE_STATUS)+`

Material Name: `+O.name+`
Material Type: `+O.type+`

Program Info Log: `+K+`
`+ht+`
`+vt)}else K!==""?he("WebGLProgram: Program Info Log:",K):(k===""||q==="")&&(rt=!1);rt&&(O.diagnostics={runnable:it,programLog:K,vertexShader:{log:k,prefix:M},fragmentShader:{log:q,prefix:S}})}l.deleteShader(U),l.deleteShader(N),b=new Yc(l,w),D=Zw(l,w)}let b;this.getUniforms=function(){return b===void 0&&L(this),b};let D;this.getAttributes=function(){return D===void 0&&L(this),D};let V=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return V===!1&&(V=l.getProgramParameter(w,Bw)),V},this.destroy=function(){r.releaseStatesOfProgram(this),l.deleteProgram(w),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=Fw++,this.cacheKey=e,this.usedTimes=1,this.program=w,this.vertexShader=U,this.fragmentShader=N,this}let cC=0;class fC{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,i,r){const l=this._getShaderCacheForMaterial(e);return l.has(i)===!1&&(l.add(i),i.usedTimes++),l.has(r)===!1&&(l.add(r),r.usedTimes++),this}remove(e){const i=this.materialCache.get(e);for(const r of i)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const i=this.materialCache;let r=i.get(e);return r===void 0&&(r=new Set,i.set(e,r)),r}_getShaderStage(e){const i=this.shaderCache;let r=i.get(e);return r===void 0&&(r=new hC(e),i.set(e,r)),r}}class hC{constructor(e){this.id=cC++,this.code=e,this.usedTimes=0}}function dC(o){return o===Ss||o===Zc||o===jc}function pC(o,e,i,r,l,c){const h=new Lm,d=new fC,p=new Set,m=[],x=new Map,g=r.logarithmicDepthBuffer;let v=r.precision;const y={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function T(b){return p.add(b),b===0?"uv":`uv${b}`}function w(b,D,V,O,H,Q){const G=O.fog,K=H.geometry,k=b.isMeshStandardMaterial||b.isMeshLambertMaterial||b.isMeshPhongMaterial?O.environment:null,q=b.isMeshStandardMaterial||b.isMeshLambertMaterial&&!b.envMap||b.isMeshPhongMaterial&&!b.envMap,it=e.get(b.envMap||k,q),rt=it&&it.mapping===rf?it.image.height:null,ht=y[b.type];b.precision!==null&&(v=r.getMaxPrecision(b.precision),v!==b.precision&&he("WebGLProgram.getParameters:",b.precision,"not supported, using",v,"instead."));const vt=K.morphAttributes.position||K.morphAttributes.normal||K.morphAttributes.color,Gt=vt!==void 0?vt.length:0;let qt=0;K.morphAttributes.position!==void 0&&(qt=1),K.morphAttributes.normal!==void 0&&(qt=2),K.morphAttributes.color!==void 0&&(qt=3);let B,pt,At,$;if(ht){const we=Ma[ht];B=we.vertexShader,pt=we.fragmentShader}else{B=b.vertexShader,pt=b.fragmentShader;const we=d.getVertexShaderStage(b),de=d.getFragmentShaderStage(b);d.update(b,we,de),At=we.id,$=de.id}const mt=o.getRenderTarget(),Rt=o.state.buffers.depth.getReversed(),It=H.isInstancedMesh===!0,xt=H.isBatchedMesh===!0,Dt=!!b.map,Le=!!b.matcap,ce=!!it,ve=!!b.aoMap,Me=!!b.lightMap,ae=!!b.bumpMap&&b.wireframe===!1,se=!!b.normalMap,Xe=!!b.displacementMap,_n=!!b.emissiveMap,ze=!!b.metalnessMap,nn=!!b.roughnessMap,j=b.anisotropy>0,un=b.clearcoat>0,Be=b.dispersion>0,I=b.retroreflectivity>0,E=b.iridescence>0,at=b.sheen>0,st=b.transmission>0,_t=j&&!!b.anisotropyMap,Ct=un&&!!b.clearcoatMap,Ot=un&&!!b.clearcoatNormalMap,St=un&&!!b.clearcoatRoughnessMap,Et=E&&!!b.iridescenceMap,Lt=E&&!!b.iridescenceThicknessMap,ne=at&&!!b.sheenColorMap,zt=at&&!!b.sheenRoughnessMap,Pt=!!b.specularMap,Vt=!!b.specularColorMap,ie=!!b.specularIntensityMap,le=st&&!!b.transmissionMap,Z=st&&!!b.thicknessMap,Nt=!!b.gradientMap,yt=!!b.alphaMap,Ut=b.alphaTest>0,kt=!!b.alphaHash,Tt=!!b.extensions;let $t=Ta;b.toneMapped&&(mt===null||mt.isXRRenderTarget===!0)&&($t=o.toneMapping);const Ht={shaderID:ht,shaderType:b.type,shaderName:b.name,vertexShader:B,fragmentShader:pt,defines:b.defines,customVertexShaderID:At,customFragmentShaderID:$,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:v,batching:xt,batchingColor:xt&&H._colorsTexture!==null,instancing:It,instancingColor:It&&H.instanceColor!==null,instancingMorph:It&&H.morphTexture!==null,outputColorSpace:mt===null?o.outputColorSpace:mt.isXRRenderTarget===!0?mt.texture.colorSpace:He.workingColorSpace,alphaToCoverage:!!b.alphaToCoverage,map:Dt,matcap:Le,envMap:ce,envMapMode:ce&&it.mapping,envMapCubeUVHeight:rt,aoMap:ve,lightMap:Me,bumpMap:ae,normalMap:se,displacementMap:Xe,emissiveMap:_n,normalMapObjectSpace:se&&b.normalMapType===Fb,normalMapTangentSpace:se&&b.normalMapType===hm,packedNormalMap:se&&b.normalMapType===hm&&dC(b.normalMap.format),metalnessMap:ze,roughnessMap:nn,anisotropy:j,anisotropyMap:_t,clearcoat:un,clearcoatMap:Ct,clearcoatNormalMap:Ot,clearcoatRoughnessMap:St,dispersion:Be,retroreflection:I,iridescence:E,iridescenceMap:Et,iridescenceThicknessMap:Lt,sheen:at,sheenColorMap:ne,sheenRoughnessMap:zt,specularMap:Pt,specularColorMap:Vt,specularIntensityMap:ie,transmission:st,transmissionMap:le,thicknessMap:Z,gradientMap:Nt,opaque:b.transparent===!1&&b.blending===Fl&&b.alphaToCoverage===!1,alphaMap:yt,alphaTest:Ut,alphaHash:kt,combine:b.combine,mapUv:Dt&&T(b.map.channel),aoMapUv:ve&&T(b.aoMap.channel),lightMapUv:Me&&T(b.lightMap.channel),bumpMapUv:ae&&T(b.bumpMap.channel),normalMapUv:se&&T(b.normalMap.channel),displacementMapUv:Xe&&T(b.displacementMap.channel),emissiveMapUv:_n&&T(b.emissiveMap.channel),metalnessMapUv:ze&&T(b.metalnessMap.channel),roughnessMapUv:nn&&T(b.roughnessMap.channel),anisotropyMapUv:_t&&T(b.anisotropyMap.channel),clearcoatMapUv:Ct&&T(b.clearcoatMap.channel),clearcoatNormalMapUv:Ot&&T(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:St&&T(b.clearcoatRoughnessMap.channel),iridescenceMapUv:Et&&T(b.iridescenceMap.channel),iridescenceThicknessMapUv:Lt&&T(b.iridescenceThicknessMap.channel),sheenColorMapUv:ne&&T(b.sheenColorMap.channel),sheenRoughnessMapUv:zt&&T(b.sheenRoughnessMap.channel),specularMapUv:Pt&&T(b.specularMap.channel),specularColorMapUv:Vt&&T(b.specularColorMap.channel),specularIntensityMapUv:ie&&T(b.specularIntensityMap.channel),transmissionMapUv:le&&T(b.transmissionMap.channel),thicknessMapUv:Z&&T(b.thicknessMap.channel),alphaMapUv:yt&&T(b.alphaMap.channel),vertexTangents:!!K.attributes.tangent&&(se||j),vertexNormals:!!K.attributes.normal,vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!K.attributes.color&&K.attributes.color.itemSize===4,pointsUvs:H.isPoints===!0&&!!K.attributes.uv&&(Dt||yt),fog:!!G,useFog:b.fog===!0,fogExp2:!!G&&G.isFogExp2,flatShading:b.wireframe===!1&&(b.flatShading===!0||K.attributes.normal===void 0&&se===!1&&(b.isMeshLambertMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isMeshPhysicalMaterial)),sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:g,reversedDepthBuffer:Rt,skinning:H.isSkinnedMesh===!0,hasPositionAttribute:K.attributes.position!==void 0,morphTargets:K.morphAttributes.position!==void 0,morphNormals:K.morphAttributes.normal!==void 0,morphColors:K.morphAttributes.color!==void 0,morphTargetsCount:Gt,morphTextureStride:qt,numSunLights:D.sun.length,numDirLights:D.directional.length,numPointLights:D.point.length,numSpotLights:D.spot.length,numSpotLightMaps:D.spotLightMap.length,numRectAreaLights:D.rectArea.length,numHemiLights:D.hemi.length,numSunLightShadows:D.sunShadowMap.length,numDirLightShadows:D.directionalShadowMap.length,numPointLightShadows:D.pointShadowMap.length,numSpotLightShadows:D.spotShadowMap.length,numSpotLightShadowsWithMaps:D.numSpotLightShadowsWithMaps,numLightProbes:D.numLightProbes,numLightProbeGrids:Q.length,numClippingPlanes:c.numPlanes,numClipIntersection:c.numIntersection,dithering:b.dithering,shadowMapEnabled:o.shadowMap.enabled&&V.length>0,shadowMapType:o.shadowMap.type,toneMapping:$t,decodeVideoTexture:Dt&&b.map.isVideoTexture===!0&&He.getTransfer(b.map.colorSpace)===Je,decodeVideoTextureEmissive:_n&&b.emissiveMap.isVideoTexture===!0&&He.getTransfer(b.emissiveMap.colorSpace)===Je,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===Ja,flipSided:b.side===vi,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionClipCullDistance:Tt&&b.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Tt&&b.extensions.multiDraw===!0||xt)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()};return Ht.vertexUv1s=p.has(1),Ht.vertexUv2s=p.has(2),Ht.vertexUv3s=p.has(3),p.clear(),Ht}function M(b){const D=[];if(b.shaderID?D.push(b.shaderID):(D.push(b.customVertexShaderID),D.push(b.customFragmentShaderID)),b.defines!==void 0)for(const V in b.defines)D.push(V),D.push(b.defines[V]);return b.isRawShaderMaterial===!1&&(S(D,b),P(D,b),D.push(o.outputColorSpace)),D.push(b.customProgramCacheKey),D.join()}function S(b,D){b.push(D.precision),b.push(D.outputColorSpace),b.push(D.envMapMode),b.push(D.envMapCubeUVHeight),b.push(D.mapUv),b.push(D.alphaMapUv),b.push(D.lightMapUv),b.push(D.aoMapUv),b.push(D.bumpMapUv),b.push(D.normalMapUv),b.push(D.displacementMapUv),b.push(D.emissiveMapUv),b.push(D.metalnessMapUv),b.push(D.roughnessMapUv),b.push(D.anisotropyMapUv),b.push(D.clearcoatMapUv),b.push(D.clearcoatNormalMapUv),b.push(D.clearcoatRoughnessMapUv),b.push(D.iridescenceMapUv),b.push(D.iridescenceThicknessMapUv),b.push(D.sheenColorMapUv),b.push(D.sheenRoughnessMapUv),b.push(D.specularMapUv),b.push(D.specularColorMapUv),b.push(D.specularIntensityMapUv),b.push(D.transmissionMapUv),b.push(D.thicknessMapUv),b.push(D.combine),b.push(D.fogExp2),b.push(D.sizeAttenuation),b.push(D.morphTargetsCount),b.push(D.morphAttributeCount),b.push(D.numSunLights),b.push(D.numDirLights),b.push(D.numPointLights),b.push(D.numSpotLights),b.push(D.numSpotLightMaps),b.push(D.numHemiLights),b.push(D.numRectAreaLights),b.push(D.numSunLightShadows),b.push(D.numDirLightShadows),b.push(D.numPointLightShadows),b.push(D.numSpotLightShadows),b.push(D.numSpotLightShadowsWithMaps),b.push(D.numLightProbes),b.push(D.shadowMapType),b.push(D.toneMapping),b.push(D.numClippingPlanes),b.push(D.numClipIntersection),b.push(D.depthPacking)}function P(b,D){h.disableAll(),D.instancing&&h.enable(0),D.instancingColor&&h.enable(1),D.instancingMorph&&h.enable(2),D.matcap&&h.enable(3),D.envMap&&h.enable(4),D.normalMapObjectSpace&&h.enable(5),D.normalMapTangentSpace&&h.enable(6),D.clearcoat&&h.enable(7),D.iridescence&&h.enable(8),D.alphaTest&&h.enable(9),D.vertexColors&&h.enable(10),D.vertexAlphas&&h.enable(11),D.vertexUv1s&&h.enable(12),D.vertexUv2s&&h.enable(13),D.vertexUv3s&&h.enable(14),D.vertexTangents&&h.enable(15),D.anisotropy&&h.enable(16),D.alphaHash&&h.enable(17),D.batching&&h.enable(18),D.dispersion&&h.enable(19),D.retroreflection&&h.enable(24),D.batchingColor&&h.enable(20),D.gradientMap&&h.enable(21),D.packedNormalMap&&h.enable(22),D.vertexNormals&&h.enable(23),b.push(h.mask),h.disableAll(),D.fog&&h.enable(0),D.useFog&&h.enable(1),D.flatShading&&h.enable(2),D.logarithmicDepthBuffer&&h.enable(3),D.reversedDepthBuffer&&h.enable(4),D.skinning&&h.enable(5),D.morphTargets&&h.enable(6),D.morphNormals&&h.enable(7),D.morphColors&&h.enable(8),D.premultipliedAlpha&&h.enable(9),D.shadowMapEnabled&&h.enable(10),D.doubleSided&&h.enable(11),D.flipSided&&h.enable(12),D.useDepthPacking&&h.enable(13),D.dithering&&h.enable(14),D.transmission&&h.enable(15),D.sheen&&h.enable(16),D.opaque&&h.enable(17),D.pointsUvs&&h.enable(18),D.decodeVideoTexture&&h.enable(19),D.decodeVideoTextureEmissive&&h.enable(20),D.alphaToCoverage&&h.enable(21),D.numLightProbeGrids>0&&h.enable(22),D.hasPositionAttribute&&h.enable(23),b.push(h.mask)}function F(b){const D=y[b.type];let V;if(D){const O=Ma[D];V=wT.clone(O.uniforms)}else V=b.uniforms;return V}function C(b,D){let V=x.get(D);return V!==void 0?++V.usedTimes:(V=new uC(o,D,b,l),m.push(V),x.set(D,V)),V}function U(b){if(--b.usedTimes===0){const D=m.indexOf(b);m[D]=m[m.length-1],m.pop(),x.delete(b.cacheKey),b.destroy()}}function N(b){d.remove(b)}function L(){d.dispose()}return{getParameters:w,getProgramCacheKey:M,getUniforms:F,acquireProgram:C,releaseProgram:U,releaseShaderCache:N,programs:m,dispose:L}}function mC(){let o=new WeakMap;function e(h){return o.has(h)}function i(h){let d=o.get(h);return d===void 0&&(d={},o.set(h,d)),d}function r(h){o.delete(h)}function l(h,d,p){o.get(h)[d]=p}function c(){o=new WeakMap}return{has:e,get:i,remove:r,update:l,dispose:c}}function gC(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.material.id!==e.material.id?o.material.id-e.material.id:o.materialVariant!==e.materialVariant?o.materialVariant-e.materialVariant:o.z!==e.z?o.z-e.z:o.id-e.id}function sS(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.z!==e.z?e.z-o.z:o.id-e.id}function oS(){const o=[];let e=0;const i=[],r=[],l=[];function c(){e=0,i.length=0,r.length=0,l.length=0}function h(v){let y=0;return v.isInstancedMesh&&(y+=2),v.isSkinnedMesh&&(y+=1),y}function d(v,y,T,w,M,S){let P=o[e];return P===void 0?(P={id:v.id,object:v,geometry:y,material:T,materialVariant:h(v),groupOrder:w,renderOrder:v.renderOrder,z:M,group:S},o[e]=P):(P.id=v.id,P.object=v,P.geometry=y,P.material=T,P.materialVariant=h(v),P.groupOrder=w,P.renderOrder=v.renderOrder,P.z=M,P.group=S),e++,P}function p(v,y,T,w,M,S,P){P.reversedDepth===!0&&(M=-M);const F=d(v,y,T,w,M,S);T.transmission>0?r.push(F):T.transparent===!0?l.push(F):i.push(F)}function m(v,y,T,w,M,S){const P=d(v,y,T,w,M,S);T.transmission>0?r.unshift(P):T.transparent===!0?l.unshift(P):i.unshift(P)}function x(v,y){i.length>1&&i.sort(v||gC),r.length>1&&r.sort(y||sS),l.length>1&&l.sort(y||sS)}function g(){for(let v=e,y=o.length;v<y;v++){const T=o[v];if(T.id===null)break;T.id=null,T.object=null,T.geometry=null,T.material=null,T.group=null}}return{opaque:i,transmissive:r,transparent:l,init:c,push:p,unshift:m,finish:g,sort:x}}function _C(){let o=new WeakMap;function e(r,l){const c=o.get(r);let h;return c===void 0?(h=new oS,o.set(r,[h])):l>=c.length?(h=new oS,c.push(h)):h=c[l],h}function i(){o=new WeakMap}return{get:e,dispose:i}}function vC(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let i;switch(e.type){case"SunLight":case"DirectionalLight":i={direction:new lt,color:new Re};break;case"SpotLight":i={position:new lt,direction:new lt,color:new Re,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new lt,color:new Re,distance:0,decay:0};break;case"HemisphereLight":i={direction:new lt,skyColor:new Re,groundColor:new Re};break;case"RectAreaLight":i={color:new Re,position:new lt,halfWidth:new lt,halfHeight:new lt};break}return o[e.id]=i,i}}}function xC(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let i;switch(e.type){case"SunLight":case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new me};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new me};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new me,shadowCameraNear:1,shadowCameraFar:1e3};break}return o[e.id]=i,i}}}let SC=0;function yC(o,e){return(e.castShadow?2:0)-(o.castShadow?2:0)+(e.map?1:0)-(o.map?1:0)}function MC(o){const e=new vC,i=xC(),r={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let m=0;m<9;m++)r.probe.push(new lt);const l=new lt,c=new dn,h=new dn;function d(m){let x=0,g=0,v=0;for(let H=0;H<9;H++)r.probe[H].set(0,0,0);let y=0,T=0,w=0,M=0,S=0,P=0,F=0,C=0,U=0,N=0,L=0,b=0,D=0,V=0;m.sort(yC);for(let H=0,Q=m.length;H<Q;H++){const G=m[H],K=G.color,k=G.intensity,q=G.distance;let it=null;if(G.shadow&&G.shadow.map&&(G.shadow.map.texture.format===Ss?it=G.shadow.map.texture:it=G.shadow.map.depthTexture||G.shadow.map.texture),G.isAmbientLight)x+=K.r*k,g+=K.g*k,v+=K.b*k;else if(G.isLightProbe){for(let rt=0;rt<9;rt++)r.probe[rt].addScaledVector(G.sh.coefficients[rt],k);V++}else if(G.isSunLight){const rt=e.get(G);if(rt.color.copy(G.color).multiplyScalar(G.intensity),G.castShadow){const ht=G.shadow,vt=i.get(G);vt.shadowIntensity=ht.intensity,vt.shadowBias=ht.bias,vt.shadowNormalBias=ht.normalBias,vt.shadowRadius=ht.radius,vt.shadowMapSize.copy(ht.mapSize).multiply(ht.getFrameExtents()),r.sunShadow[T]=vt,r.sunShadowMap[T]=it;const Gt=ht.getViewportCount();for(let qt=0;qt<Gt;qt++)r.sunShadowMatrix[w+qt]=ht.getMatrix(qt),r.sunShadowCascade[w+qt]=ht._cascadeData[qt];w+=Gt,T++}r.sun[y]=rt,y++}else if(G.isDirectionalLight){const rt=e.get(G);if(rt.color.copy(G.color).multiplyScalar(G.intensity),G.castShadow){const ht=G.shadow,vt=i.get(G);vt.shadowIntensity=ht.intensity,vt.shadowBias=ht.bias,vt.shadowNormalBias=ht.normalBias,vt.shadowRadius=ht.radius,vt.shadowMapSize=ht.mapSize,r.directionalShadow[M]=vt,r.directionalShadowMap[M]=it,r.directionalShadowMatrix[M]=G.shadow.matrix,U++}r.directional[M]=rt,M++}else if(G.isSpotLight){const rt=e.get(G);rt.position.setFromMatrixPosition(G.matrixWorld),rt.color.copy(K).multiplyScalar(k),rt.distance=q,rt.coneCos=Math.cos(G.angle),rt.penumbraCos=Math.cos(G.angle*(1-G.penumbra)),rt.decay=G.decay,r.spot[P]=rt;const ht=G.shadow;if(G.map&&(r.spotLightMap[b]=G.map,b++,ht.updateMatrices(G),G.castShadow&&D++),r.spotLightMatrix[P]=ht.matrix,G.castShadow){const vt=i.get(G);vt.shadowIntensity=ht.intensity,vt.shadowBias=ht.bias,vt.shadowNormalBias=ht.normalBias,vt.shadowRadius=ht.radius,vt.shadowMapSize=ht.mapSize,r.spotShadow[P]=vt,r.spotShadowMap[P]=it,L++}P++}else if(G.isRectAreaLight){const rt=e.get(G);rt.color.copy(K).multiplyScalar(k),rt.halfWidth.set(G.width*.5,0,0),rt.halfHeight.set(0,G.height*.5,0),r.rectArea[F]=rt,F++}else if(G.isPointLight){const rt=e.get(G);if(rt.color.copy(G.color).multiplyScalar(G.intensity),rt.distance=G.distance,rt.decay=G.decay,G.castShadow){const ht=G.shadow,vt=i.get(G);vt.shadowIntensity=ht.intensity,vt.shadowBias=ht.bias,vt.shadowNormalBias=ht.normalBias,vt.shadowRadius=ht.radius,vt.shadowMapSize=ht.mapSize,vt.shadowCameraNear=ht.camera.near,vt.shadowCameraFar=ht.camera.far,r.pointShadow[S]=vt,r.pointShadowMap[S]=it,r.pointShadowMatrix[S]=G.shadow.matrix,N++}r.point[S]=rt,S++}else if(G.isHemisphereLight){const rt=e.get(G);rt.skyColor.copy(G.color).multiplyScalar(k),rt.groundColor.copy(G.groundColor).multiplyScalar(k),r.hemi[C]=rt,C++}}F>0&&(o.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Yt.LTC_FLOAT_1,r.rectAreaLTC2=Yt.LTC_FLOAT_2):(r.rectAreaLTC1=Yt.LTC_HALF_1,r.rectAreaLTC2=Yt.LTC_HALF_2)),r.ambient[0]=x,r.ambient[1]=g,r.ambient[2]=v;const O=r.hash;(O.sunLength!==y||O.directionalLength!==M||O.pointLength!==S||O.spotLength!==P||O.rectAreaLength!==F||O.hemiLength!==C||O.numSunShadows!==T||O.numDirectionalShadows!==U||O.numPointShadows!==N||O.numSpotShadows!==L||O.numSpotMaps!==b||O.numLightProbes!==V)&&(r.sun.length=y,r.directional.length=M,r.spot.length=P,r.rectArea.length=F,r.point.length=S,r.hemi.length=C,r.sunShadow.length=T,r.sunShadowMap.length=T,r.sunShadowMatrix.length=w,r.sunShadowCascade.length=w,r.directionalShadow.length=U,r.directionalShadowMap.length=U,r.directionalShadowMatrix.length=U,r.pointShadow.length=N,r.pointShadowMap.length=N,r.pointShadowMatrix.length=N,r.spotShadow.length=L,r.spotShadowMap.length=L,r.spotLightMatrix.length=L+b-D,r.spotLightMap.length=b,r.numSpotLightShadowsWithMaps=D,r.numLightProbes=V,O.sunLength=y,O.directionalLength=M,O.pointLength=S,O.spotLength=P,O.rectAreaLength=F,O.hemiLength=C,O.numSunShadows=T,O.numDirectionalShadows=U,O.numPointShadows=N,O.numSpotShadows=L,O.numSpotMaps=b,O.numLightProbes=V,r.version=SC++)}function p(m,x){let g=0,v=0,y=0,T=0,w=0,M=0;const S=x.matrixWorldInverse;for(let P=0,F=m.length;P<F;P++){const C=m[P];if(C.isSunLight){const U=r.sun[g];U.direction.setFromMatrixPosition(C.matrixWorld),U.direction.transformDirection(S),g++}else if(C.isDirectionalLight){const U=r.directional[v];U.direction.setFromMatrixPosition(C.matrixWorld),l.setFromMatrixPosition(C.target.matrixWorld),U.direction.sub(l),U.direction.transformDirection(S),v++}else if(C.isSpotLight){const U=r.spot[T];U.position.setFromMatrixPosition(C.matrixWorld),U.position.applyMatrix4(S),U.direction.setFromMatrixPosition(C.matrixWorld),l.setFromMatrixPosition(C.target.matrixWorld),U.direction.sub(l),U.direction.transformDirection(S),T++}else if(C.isRectAreaLight){const U=r.rectArea[w];U.position.setFromMatrixPosition(C.matrixWorld),U.position.applyMatrix4(S),h.identity(),c.copy(C.matrixWorld),c.premultiply(S),h.extractRotation(c),U.halfWidth.set(C.width*.5,0,0),U.halfHeight.set(0,C.height*.5,0),U.halfWidth.applyMatrix4(h),U.halfHeight.applyMatrix4(h),w++}else if(C.isPointLight){const U=r.point[y];U.position.setFromMatrixPosition(C.matrixWorld),U.position.applyMatrix4(S),y++}else if(C.isHemisphereLight){const U=r.hemi[M];U.direction.setFromMatrixPosition(C.matrixWorld),U.direction.transformDirection(S),M++}}}return{setup:d,setupView:p,state:r}}function lS(o){const e=new MC(o),i=[],r=[],l=[];function c(v){g.camera=v,i.length=0,r.length=0,l.length=0}function h(v){i.push(v)}function d(v){r.push(v)}function p(v){l.push(v)}function m(){e.setup(i)}function x(v){e.setupView(i,v)}const g={lightsArray:i,shadowsArray:r,lightProbeGridArray:l,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:c,state:g,setupLights:m,setupLightsView:x,pushLight:h,pushShadow:d,pushLightProbeGrid:p}}function EC(o){let e=new WeakMap;function i(l,c=0){const h=e.get(l);let d;return h===void 0?(d=new lS(o),e.set(l,[d])):c>=h.length?(d=new lS(o),h.push(d)):d=h[c],d}function r(){e=new WeakMap}return{get:i,dispose:r}}const bC=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,TC=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,AC=[new lt(1,0,0),new lt(-1,0,0),new lt(0,1,0),new lt(0,-1,0),new lt(0,0,1),new lt(0,0,-1)],RC=[new lt(0,-1,0),new lt(0,-1,0),new lt(0,0,1),new lt(0,0,-1),new lt(0,-1,0),new lt(0,-1,0)],uS=new dn,Ul=new lt,xp=new lt;function wC(o,e,i){let r=new Om;const l=new me,c=new me,h=new gn,d=new LT,p=new OT,m={},x=i.maxTextureSize,g={[vs]:vi,[vi]:vs,[Ja]:Ja},v=new wa({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new me},radius:{value:4}},vertexShader:bC,fragmentShader:TC}),y=v.clone();y.defines.HORIZONTAL_PASS=1;const T=new Yi;T.setAttribute("position",new nr(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const w=new ra(T,v),M=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Bl;let S=this.type;this.render=function(N,L,b){if(M.enabled===!1||M.autoUpdate===!1&&M.needsUpdate===!1||N.length===0)return;this.type===gb&&(he("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Bl);const D=o.getRenderTarget(),V=o.getActiveCubeFace(),O=o.getActiveMipmapLevel(),H=o.state;H.setBlending(tr),H.buffers.depth.getReversed()===!0?H.buffers.color.setClear(0,0,0,0):H.buffers.color.setClear(1,1,1,1),H.buffers.depth.setTest(!0),H.setScissorTest(!1);const Q=S!==this.type;Q&&L.traverse(function(G){G.material&&(Array.isArray(G.material)?G.material.forEach(K=>K.needsUpdate=!0):G.material.needsUpdate=!0)});for(let G=0,K=N.length;G<K;G++){const k=N[G],q=k.shadow;if(q===void 0){he("WebGLShadowMap:",k,"has no shadow.");continue}if(q.autoUpdate===!1&&q.needsUpdate===!1)continue;l.copy(q.mapSize);const it=q.getFrameExtents();l.multiply(it),c.copy(q.mapSize),(l.x>x||l.y>x)&&(l.x>x&&(c.x=Math.floor(x/it.x),l.x=c.x*it.x,q.mapSize.x=c.x),l.y>x&&(c.y=Math.floor(x/it.y),l.y=c.y*it.y,q.mapSize.y=c.y));const rt=o.state.buffers.depth.getReversed();if(q.camera._reversedDepth=rt,q.map===null||Q===!0){if(q.map!==null&&(q.map.depthTexture!==null&&(q.map.depthTexture.dispose(),q.map.depthTexture=null),q.map.dispose()),this.type===Pl){if(k.isPointLight){he("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}q.map=new aa(l.x,l.y,{format:Ss,type:Ra,minFilter:$n,magFilter:$n,generateMipmaps:!1}),q.map.texture.name=k.name+".shadowMap",q.map.depthTexture=new Wl(l.x,l.y,Ea),q.map.depthTexture.name=k.name+".shadowMapDepth",q.map.depthTexture.format=ir,q.map.depthTexture.compareFunction=null,q.map.depthTexture.minFilter=qn,q.map.depthTexture.magFilter=qn}else k.isPointLight?(q.map=new ny(l.x),q.map.depthTexture=new TT(l.x,Aa)):(q.map=new aa(l.x,l.y),q.map.depthTexture=new Wl(l.x,l.y,Aa)),q.map.depthTexture.name=k.name+".shadowMap",q.map.depthTexture.format=ir,this.type===Bl?(q.map.depthTexture.compareFunction=rt?Nm:Dm,q.map.depthTexture.minFilter=$n,q.map.depthTexture.magFilter=$n):(q.map.depthTexture.compareFunction=null,q.map.depthTexture.minFilter=qn,q.map.depthTexture.magFilter=qn);q.camera.updateProjectionMatrix()}q.map.isWebGLCubeRenderTarget!==!0&&(q.map.width!==l.x||q.map.height!==l.y)&&q.map.setSize(l.x,l.y);const ht=q.map.isWebGLCubeRenderTarget?6:q.getViewportCount();k.isPointLight!==!0&&q.updateMatrices(k,b);for(let vt=0;vt<ht;vt++){const Gt=q.getCamera(vt);if(k.isPointLight){const qt=q.camera,B=q.matrix,pt=k.distance||qt.far;pt!==qt.far&&(qt.far=pt,qt.updateProjectionMatrix()),Ul.setFromMatrixPosition(k.matrixWorld),qt.position.copy(Ul),xp.copy(qt.position),xp.add(AC[vt]),qt.up.copy(RC[vt]),qt.lookAt(xp),qt.updateMatrixWorld(),B.makeTranslation(-Ul.x,-Ul.y,-Ul.z),uS.multiplyMatrices(qt.projectionMatrix,qt.matrixWorldInverse),q._frustum.setFromProjectionMatrix(uS,qt.coordinateSystem,qt.reversedDepth)}if(q.map.isWebGLCubeRenderTarget)o.setRenderTarget(q.map,vt),o.clear();else{vt===0&&(o.setRenderTarget(q.map),o.clear());const qt=q.getViewport(vt);h.set(c.x*qt.x,c.y*qt.y,c.x*qt.z,c.y*qt.w),H.viewport(h)}r=q.getFrustum(vt),C(L,b,Gt,k,this.type)}q.isPointLightShadow!==!0&&this.type===Pl&&P(q,b),q.needsUpdate=!1}S=this.type,M.needsUpdate=!1,o.setRenderTarget(D,V,O)};function P(N,L){const b=e.update(w);v.defines.VSM_SAMPLES!==N.blurSamples&&(v.defines.VSM_SAMPLES=N.blurSamples,y.defines.VSM_SAMPLES=N.blurSamples,v.needsUpdate=!0,y.needsUpdate=!0),N.mapPass===null?N.mapPass=new aa(l.x,l.y,{format:Ss,type:Ra}):(N.mapPass.width!==N.map.width||N.mapPass.height!==N.map.height)&&N.mapPass.setSize(N.map.width,N.map.height),v.uniforms.shadow_pass.value=N.map.depthTexture,v.uniforms.resolution.value.set(N.map.width,N.map.height),v.uniforms.radius.value=N.radius,o.setRenderTarget(N.mapPass),o.clear(),o.renderBufferDirect(L,null,b,v,w,null),y.uniforms.shadow_pass.value=N.mapPass.texture,y.uniforms.resolution.value.set(N.map.width,N.map.height),y.uniforms.radius.value=N.radius,o.setRenderTarget(N.map),o.clear(),o.renderBufferDirect(L,null,b,y,w,null)}function F(N,L,b,D){let V=null;const O=b.isPointLight===!0?N.customDistanceMaterial:N.customDepthMaterial;if(O!==void 0)V=O;else if(V=b.isPointLight===!0?p:d,o.localClippingEnabled&&L.clipShadows===!0&&Array.isArray(L.clippingPlanes)&&L.clippingPlanes.length!==0||L.displacementMap&&L.displacementScale!==0||L.alphaMap&&L.alphaTest>0||L.map&&L.alphaTest>0||L.alphaToCoverage===!0){const H=V.uuid,Q=L.uuid;let G=m[H];G===void 0&&(G={},m[H]=G);let K=G[Q];K===void 0&&(K=V.clone(),G[Q]=K,L.addEventListener("dispose",U)),V=K}if(V.visible=L.visible,V.wireframe=L.wireframe,D===Pl?V.side=L.shadowSide!==null?L.shadowSide:L.side:V.side=L.shadowSide!==null?L.shadowSide:g[L.side],V.alphaMap=L.alphaMap,V.alphaTest=L.alphaToCoverage===!0?.5:L.alphaTest,V.map=L.map,V.clipShadows=L.clipShadows,V.clippingPlanes=L.clippingPlanes,V.clipIntersection=L.clipIntersection,V.displacementMap=L.displacementMap,V.displacementScale=L.displacementScale,V.displacementBias=L.displacementBias,V.wireframeLinewidth=L.wireframeLinewidth,V.linewidth=L.linewidth,b.isPointLight===!0&&V.isMeshDistanceMaterial===!0){const H=o.properties.get(V);H.light=b}return V}function C(N,L,b,D,V){if(N.visible===!1)return;if(N.layers.test(L.layers)&&(N.isMesh||N.isLine||N.isPoints)&&(N.castShadow||N.receiveShadow&&V===Pl)&&(!N.frustumCulled||N.intersectsFrustum(r))){N.modelViewMatrix.multiplyMatrices(b.matrixWorldInverse,N.matrixWorld);const Q=e.update(N),G=N.material;if(Array.isArray(G)){const K=Q.groups;for(let k=0,q=K.length;k<q;k++){const it=K[k],rt=G[it.materialIndex];if(rt&&rt.visible){const ht=F(N,rt,D,V);N.onBeforeShadow(o,N,L,b,Q,ht,it),o.renderBufferDirect(b,null,Q,ht,N,it),N.onAfterShadow(o,N,L,b,Q,ht,it)}}}else if(G.visible){const K=F(N,G,D,V);N.onBeforeShadow(o,N,L,b,Q,K,null),o.renderBufferDirect(b,null,Q,K,N,null),N.onAfterShadow(o,N,L,b,Q,K,null)}}const H=N.children;for(let Q=0,G=H.length;Q<G;Q++)C(H[Q],L,b,D,V)}function U(N){N.target.removeEventListener("dispose",U);for(const b in m){const D=m[b],V=N.target.uuid;V in D&&(D[V].dispose(),delete D[V])}}}function CC(o,e){function i(){let Z=!1;const Nt=new gn;let yt=null;const Ut=new gn(0,0,0,0);return{setMask:function(kt){yt!==kt&&!Z&&(o.colorMask(kt,kt,kt,kt),yt=kt)},setLocked:function(kt){Z=kt},setClear:function(kt,Tt,$t,Ht,we){we===!0&&(kt*=Ht,Tt*=Ht,$t*=Ht),Nt.set(kt,Tt,$t,Ht),Ut.equals(Nt)===!1&&(o.clearColor(kt,Tt,$t,Ht),Ut.copy(Nt))},reset:function(){Z=!1,yt=null,Ut.set(-1,0,0,0)}}}function r(){let Z=!1,Nt=!1,yt=null,Ut=null,kt=null;return{setReversed:function(Tt){if(Nt!==Tt){const $t=e.get("EXT_clip_control");Tt?$t.clipControlEXT($t.LOWER_LEFT_EXT,$t.ZERO_TO_ONE_EXT):$t.clipControlEXT($t.LOWER_LEFT_EXT,$t.NEGATIVE_ONE_TO_ONE_EXT),Nt=Tt;const Ht=kt;kt=null,this.setClear(Ht)}},getReversed:function(){return Nt},setTest:function(Tt){Tt?mt(o.DEPTH_TEST):Rt(o.DEPTH_TEST)},setMask:function(Tt){yt!==Tt&&!Z&&(o.depthMask(Tt),yt=Tt)},setFunc:function(Tt){if(Nt&&(Tt=Qb[Tt]),Ut!==Tt){switch(Tt){case Rp:o.depthFunc(o.NEVER);break;case wp:o.depthFunc(o.ALWAYS);break;case Cp:o.depthFunc(o.LESS);break;case Gl:o.depthFunc(o.LEQUAL);break;case Dp:o.depthFunc(o.EQUAL);break;case Np:o.depthFunc(o.GEQUAL);break;case Up:o.depthFunc(o.GREATER);break;case Lp:o.depthFunc(o.NOTEQUAL);break;default:o.depthFunc(o.LEQUAL)}Ut=Tt}},setLocked:function(Tt){Z=Tt},setClear:function(Tt){kt!==Tt&&(kt=Tt,Nt&&(Tt=1-Tt),o.clearDepth(Tt))},reset:function(){Z=!1,yt=null,Ut=null,kt=null,Nt=!1}}}function l(){let Z=!1,Nt=null,yt=null,Ut=null,kt=null,Tt=null,$t=null,Ht=null,we=null;return{setTest:function(de){Z||(de?mt(o.STENCIL_TEST):Rt(o.STENCIL_TEST))},setMask:function(de){Nt!==de&&!Z&&(o.stencilMask(de),Nt=de)},setFunc:function(de,ti,Zn){(yt!==de||Ut!==ti||kt!==Zn)&&(o.stencilFunc(de,ti,Zn),yt=de,Ut=ti,kt=Zn)},setOp:function(de,ti,Zn){(Tt!==de||$t!==ti||Ht!==Zn)&&(o.stencilOp(de,ti,Zn),Tt=de,$t=ti,Ht=Zn)},setLocked:function(de){Z=de},setClear:function(de){we!==de&&(o.clearStencil(de),we=de)},reset:function(){Z=!1,Nt=null,yt=null,Ut=null,kt=null,Tt=null,$t=null,Ht=null,we=null}}}const c=new i,h=new r,d=new l,p=new WeakMap,m=new WeakMap;let x={},g={},v={},y=new WeakMap,T=[],w=null,M=!1,S=null,P=null,F=null,C=null,U=null,N=null,L=null,b=new Re(0,0,0),D=0,V=!1,O=null,H=null,Q=null,G=null,K=null;const k=o.getParameter(o.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let q=!1,it=0;const rt=o.getParameter(o.VERSION);rt.indexOf("WebGL")!==-1?(it=parseFloat(/^WebGL (\d)/.exec(rt)[1]),q=it>=1):rt.indexOf("OpenGL ES")!==-1&&(it=parseFloat(/^OpenGL ES (\d)/.exec(rt)[1]),q=it>=2);let ht=null,vt={};const Gt=o.getParameter(o.SCISSOR_BOX),qt=o.getParameter(o.VIEWPORT),B=new gn().fromArray(Gt),pt=new gn().fromArray(qt);function At(Z,Nt,yt,Ut){const kt=new Uint8Array(4),Tt=o.createTexture();o.bindTexture(Z,Tt),o.texParameteri(Z,o.TEXTURE_MIN_FILTER,o.NEAREST),o.texParameteri(Z,o.TEXTURE_MAG_FILTER,o.NEAREST);for(let $t=0;$t<yt;$t++)Z===o.TEXTURE_3D||Z===o.TEXTURE_2D_ARRAY?o.texImage3D(Nt,0,o.RGBA,1,1,Ut,0,o.RGBA,o.UNSIGNED_BYTE,kt):o.texImage2D(Nt+$t,0,o.RGBA,1,1,0,o.RGBA,o.UNSIGNED_BYTE,kt);return Tt}const $={};$[o.TEXTURE_2D]=At(o.TEXTURE_2D,o.TEXTURE_2D,1),$[o.TEXTURE_CUBE_MAP]=At(o.TEXTURE_CUBE_MAP,o.TEXTURE_CUBE_MAP_POSITIVE_X,6),$[o.TEXTURE_2D_ARRAY]=At(o.TEXTURE_2D_ARRAY,o.TEXTURE_2D_ARRAY,1,1),$[o.TEXTURE_3D]=At(o.TEXTURE_3D,o.TEXTURE_3D,1,1),c.setClear(0,0,0,1),h.setClear(1),d.setClear(0),mt(o.DEPTH_TEST),h.setFunc(Gl),ae(!1),se(ox),mt(o.CULL_FACE),ve(tr);function mt(Z){x[Z]!==!0&&(o.enable(Z),x[Z]=!0)}function Rt(Z){x[Z]!==!1&&(o.disable(Z),x[Z]=!1)}function It(Z,Nt){return v[Z]!==Nt?(o.bindFramebuffer(Z,Nt),v[Z]=Nt,Z===o.DRAW_FRAMEBUFFER&&(v[o.FRAMEBUFFER]=Nt),Z===o.FRAMEBUFFER&&(v[o.DRAW_FRAMEBUFFER]=Nt),!0):!1}function xt(Z,Nt){let yt=T,Ut=!1;if(Z){yt=y.get(Nt),yt===void 0&&(yt=[],y.set(Nt,yt));const kt=Z.textures;if(yt.length!==kt.length||yt[0]!==o.COLOR_ATTACHMENT0){for(let Tt=0,$t=kt.length;Tt<$t;Tt++)yt[Tt]=o.COLOR_ATTACHMENT0+Tt;yt.length=kt.length,Ut=!0}}else yt[0]!==o.BACK&&(yt[0]=o.BACK,Ut=!0);Ut&&o.drawBuffers(yt)}function Dt(Z){return w!==Z?(o.useProgram(Z),w=Z,!0):!1}const Le={[Eo]:o.FUNC_ADD,[vb]:o.FUNC_SUBTRACT,[xb]:o.FUNC_REVERSE_SUBTRACT};Le[Sb]=o.MIN,Le[yb]=o.MAX;const ce={[Mb]:o.ZERO,[Eb]:o.ONE,[bb]:o.SRC_COLOR,[bS]:o.SRC_ALPHA,[Db]:o.SRC_ALPHA_SATURATE,[wb]:o.DST_COLOR,[Ab]:o.DST_ALPHA,[Tb]:o.ONE_MINUS_SRC_COLOR,[TS]:o.ONE_MINUS_SRC_ALPHA,[Cb]:o.ONE_MINUS_DST_COLOR,[Rb]:o.ONE_MINUS_DST_ALPHA,[Nb]:o.CONSTANT_COLOR,[Ub]:o.ONE_MINUS_CONSTANT_COLOR,[Lb]:o.CONSTANT_ALPHA,[Ob]:o.ONE_MINUS_CONSTANT_ALPHA};function ve(Z,Nt,yt,Ut,kt,Tt,$t,Ht,we,de){if(Z===tr){M===!0&&(Rt(o.BLEND),M=!1);return}if(M===!1&&(mt(o.BLEND),M=!0),Z!==_b){if(Z!==S||de!==V){if((P!==Eo||U!==Eo)&&(o.blendEquation(o.FUNC_ADD),P=Eo,U=Eo),de)switch(Z){case Fl:o.blendFuncSeparate(o.ONE,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case lx:o.blendFunc(o.ONE,o.ONE);break;case ux:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case cx:o.blendFuncSeparate(o.DST_COLOR,o.ONE_MINUS_SRC_ALPHA,o.ZERO,o.ONE);break;default:ke("WebGLState: Invalid blending: ",Z);break}else switch(Z){case Fl:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case lx:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE,o.ONE,o.ONE);break;case ux:ke("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case cx:ke("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:ke("WebGLState: Invalid blending: ",Z);break}F=null,C=null,N=null,L=null,b.set(0,0,0),D=0,S=Z,V=de}return}kt=kt||Nt,Tt=Tt||yt,$t=$t||Ut,(Nt!==P||kt!==U)&&(o.blendEquationSeparate(Le[Nt],Le[kt]),P=Nt,U=kt),(yt!==F||Ut!==C||Tt!==N||$t!==L)&&(o.blendFuncSeparate(ce[yt],ce[Ut],ce[Tt],ce[$t]),F=yt,C=Ut,N=Tt,L=$t),(Ht.equals(b)===!1||we!==D)&&(o.blendColor(Ht.r,Ht.g,Ht.b,we),b.copy(Ht),D=we),S=Z,V=!1}function Me(Z,Nt){Z.side===Ja?Rt(o.CULL_FACE):mt(o.CULL_FACE);let yt=Z.side===vi;Nt&&(yt=!yt),ae(yt),Z.blending===Fl&&Z.transparent===!1?ve(tr):ve(Z.blending,Z.blendEquation,Z.blendSrc,Z.blendDst,Z.blendEquationAlpha,Z.blendSrcAlpha,Z.blendDstAlpha,Z.blendColor,Z.blendAlpha,Z.premultipliedAlpha),h.setFunc(Z.depthFunc),h.setTest(Z.depthTest),h.setMask(Z.depthWrite),c.setMask(Z.colorWrite);const Ut=Z.stencilWrite;d.setTest(Ut),Ut&&(d.setMask(Z.stencilWriteMask),d.setFunc(Z.stencilFunc,Z.stencilRef,Z.stencilFuncMask),d.setOp(Z.stencilFail,Z.stencilZFail,Z.stencilZPass)),_n(Z.polygonOffset,Z.polygonOffsetFactor,Z.polygonOffsetUnits),Z.alphaToCoverage===!0?mt(o.SAMPLE_ALPHA_TO_COVERAGE):Rt(o.SAMPLE_ALPHA_TO_COVERAGE)}function ae(Z){O!==Z&&(Z?o.frontFace(o.CW):o.frontFace(o.CCW),O=Z)}function se(Z){Z!==pb?(mt(o.CULL_FACE),Z!==H&&(Z===ox?o.cullFace(o.BACK):Z===mb?o.cullFace(o.FRONT):o.cullFace(o.FRONT_AND_BACK))):Rt(o.CULL_FACE),H=Z}function Xe(Z){Z!==Q&&(q&&o.lineWidth(Z),Q=Z)}function _n(Z,Nt,yt){Z?(mt(o.POLYGON_OFFSET_FILL),(G!==Nt||K!==yt)&&(G=Nt,K=yt,h.getReversed()&&(Nt=-Nt),o.polygonOffset(Nt,yt))):Rt(o.POLYGON_OFFSET_FILL)}function ze(Z){Z?mt(o.SCISSOR_TEST):Rt(o.SCISSOR_TEST)}function nn(Z){Z===void 0&&(Z=o.TEXTURE0+k-1),ht!==Z&&(o.activeTexture(Z),ht=Z)}function j(Z,Nt,yt){yt===void 0&&(ht===null?yt=o.TEXTURE0+k-1:yt=ht);let Ut=vt[yt];Ut===void 0&&(Ut={type:void 0,texture:void 0},vt[yt]=Ut),(Ut.type!==Z||Ut.texture!==Nt)&&(ht!==yt&&(o.activeTexture(yt),ht=yt),o.bindTexture(Z,Nt||$[Z]),Ut.type=Z,Ut.texture=Nt)}function un(){const Z=vt[ht];Z!==void 0&&Z.type!==void 0&&(o.bindTexture(Z.type,null),Z.type=void 0,Z.texture=void 0)}function Be(){try{o.compressedTexImage2D(...arguments)}catch(Z){ke("WebGLState:",Z)}}function I(){try{o.compressedTexImage3D(...arguments)}catch(Z){ke("WebGLState:",Z)}}function E(){try{o.texSubImage2D(...arguments)}catch(Z){ke("WebGLState:",Z)}}function at(){try{o.texSubImage3D(...arguments)}catch(Z){ke("WebGLState:",Z)}}function st(){try{o.compressedTexSubImage2D(...arguments)}catch(Z){ke("WebGLState:",Z)}}function _t(){try{o.compressedTexSubImage3D(...arguments)}catch(Z){ke("WebGLState:",Z)}}function Ct(){try{o.texStorage2D(...arguments)}catch(Z){ke("WebGLState:",Z)}}function Ot(){try{o.texStorage3D(...arguments)}catch(Z){ke("WebGLState:",Z)}}function St(){try{o.texImage2D(...arguments)}catch(Z){ke("WebGLState:",Z)}}function Et(){try{o.texImage3D(...arguments)}catch(Z){ke("WebGLState:",Z)}}function Lt(Z){return g[Z]!==void 0?g[Z]:o.getParameter(Z)}function ne(Z,Nt){g[Z]!==Nt&&(o.pixelStorei(Z,Nt),g[Z]=Nt)}function zt(Z){B.equals(Z)===!1&&(o.scissor(Z.x,Z.y,Z.z,Z.w),B.copy(Z))}function Pt(Z){pt.equals(Z)===!1&&(o.viewport(Z.x,Z.y,Z.z,Z.w),pt.copy(Z))}function Vt(Z,Nt){let yt=m.get(Nt);yt===void 0&&(yt=new WeakMap,m.set(Nt,yt));let Ut=yt.get(Z);Ut===void 0&&(Ut=o.getUniformBlockIndex(Nt,Z.name),yt.set(Z,Ut))}function ie(Z,Nt){const Ut=m.get(Nt).get(Z);p.get(Nt)!==Ut&&(o.uniformBlockBinding(Nt,Ut,Z.__bindingPointIndex),p.set(Nt,Ut))}function le(){o.disable(o.BLEND),o.disable(o.CULL_FACE),o.disable(o.DEPTH_TEST),o.disable(o.POLYGON_OFFSET_FILL),o.disable(o.SCISSOR_TEST),o.disable(o.STENCIL_TEST),o.disable(o.SAMPLE_ALPHA_TO_COVERAGE),o.blendEquation(o.FUNC_ADD),o.blendFunc(o.ONE,o.ZERO),o.blendFuncSeparate(o.ONE,o.ZERO,o.ONE,o.ZERO),o.blendColor(0,0,0,0),o.colorMask(!0,!0,!0,!0),o.clearColor(0,0,0,0),o.depthMask(!0),o.depthFunc(o.LESS),h.setReversed(!1),o.clearDepth(1),o.stencilMask(4294967295),o.stencilFunc(o.ALWAYS,0,4294967295),o.stencilOp(o.KEEP,o.KEEP,o.KEEP),o.clearStencil(0),o.cullFace(o.BACK),o.frontFace(o.CCW),o.polygonOffset(0,0),o.activeTexture(o.TEXTURE0),o.bindFramebuffer(o.FRAMEBUFFER,null),o.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),o.bindFramebuffer(o.READ_FRAMEBUFFER,null),o.useProgram(null),o.lineWidth(1),o.scissor(0,0,o.canvas.width,o.canvas.height),o.viewport(0,0,o.canvas.width,o.canvas.height),o.pixelStorei(o.PACK_ALIGNMENT,4),o.pixelStorei(o.UNPACK_ALIGNMENT,4),o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,!1),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,o.BROWSER_DEFAULT_WEBGL),o.pixelStorei(o.PACK_ROW_LENGTH,0),o.pixelStorei(o.PACK_SKIP_PIXELS,0),o.pixelStorei(o.PACK_SKIP_ROWS,0),o.pixelStorei(o.UNPACK_ROW_LENGTH,0),o.pixelStorei(o.UNPACK_IMAGE_HEIGHT,0),o.pixelStorei(o.UNPACK_SKIP_PIXELS,0),o.pixelStorei(o.UNPACK_SKIP_ROWS,0),o.pixelStorei(o.UNPACK_SKIP_IMAGES,0),x={},g={},ht=null,vt={},v={},y=new WeakMap,T=[],w=null,M=!1,S=null,P=null,F=null,C=null,U=null,N=null,L=null,b=new Re(0,0,0),D=0,V=!1,O=null,H=null,Q=null,G=null,K=null,B.set(0,0,o.canvas.width,o.canvas.height),pt.set(0,0,o.canvas.width,o.canvas.height),c.reset(),h.reset(),d.reset()}return{buffers:{color:c,depth:h,stencil:d},enable:mt,disable:Rt,bindFramebuffer:It,drawBuffers:xt,useProgram:Dt,setBlending:ve,setMaterial:Me,setFlipSided:ae,setCullFace:se,setLineWidth:Xe,setPolygonOffset:_n,setScissorTest:ze,activeTexture:nn,bindTexture:j,unbindTexture:un,compressedTexImage2D:Be,compressedTexImage3D:I,texImage2D:St,texImage3D:Et,pixelStorei:ne,getParameter:Lt,updateUBOMapping:Vt,uniformBlockBinding:ie,texStorage2D:Ct,texStorage3D:Ot,texSubImage2D:E,texSubImage3D:at,compressedTexSubImage2D:st,compressedTexSubImage3D:_t,scissor:zt,viewport:Pt,reset:le}}function DC(o,e,i,r,l,c,h){const d=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,p=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),m=new me,x=new WeakMap,g=new Set;let v;const y=new WeakMap;let T=!1;try{T=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function w(I,E){return T?new OffscreenCanvas(I,E):Jc("canvas")}function M(I,E,at){let st=1;const _t=Be(I);if((_t.width>at||_t.height>at)&&(st=at/Math.max(_t.width,_t.height)),st<1)if(typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&I instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&I instanceof ImageBitmap||typeof VideoFrame<"u"&&I instanceof VideoFrame){const Ct=Math.floor(st*_t.width),Ot=Math.floor(st*_t.height);v===void 0&&(v=w(Ct,Ot));const St=E?w(Ct,Ot):v;return St.width=Ct,St.height=Ot,St.getContext("2d").drawImage(I,0,0,Ct,Ot),he("WebGLRenderer: Texture has been resized from ("+_t.width+"x"+_t.height+") to ("+Ct+"x"+Ot+")."),St}else return"data"in I&&he("WebGLRenderer: Image in DataTexture is too big ("+_t.width+"x"+_t.height+")."),I;return I}function S(I){return I.generateMipmaps}function P(I){o.generateMipmap(I)}function F(I){return I.isWebGLCubeRenderTarget?o.TEXTURE_CUBE_MAP:I.isWebGL3DRenderTarget?o.TEXTURE_3D:I.isWebGLArrayRenderTarget||I.isCompressedArrayTexture?o.TEXTURE_2D_ARRAY:o.TEXTURE_2D}function C(I,E,at,st,_t,Ct=!1){if(I!==null){if(o[I]!==void 0)return o[I];he("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+I+"'")}let Ot;st&&(Ot=e.get("EXT_texture_norm16"),Ot||he("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let St=E;if(E===o.RED&&(at===o.FLOAT&&(St=o.R32F),at===o.HALF_FLOAT&&(St=o.R16F),at===o.UNSIGNED_BYTE&&(St=o.R8),at===o.UNSIGNED_SHORT&&Ot&&(St=Ot.R16_EXT),at===o.SHORT&&Ot&&(St=Ot.R16_SNORM_EXT)),E===o.RED_INTEGER&&(at===o.UNSIGNED_BYTE&&(St=o.R8UI),at===o.UNSIGNED_SHORT&&(St=o.R16UI),at===o.UNSIGNED_INT&&(St=o.R32UI),at===o.BYTE&&(St=o.R8I),at===o.SHORT&&(St=o.R16I),at===o.INT&&(St=o.R32I)),E===o.RG&&(at===o.FLOAT&&(St=o.RG32F),at===o.HALF_FLOAT&&(St=o.RG16F),at===o.UNSIGNED_BYTE&&(St=o.RG8),at===o.UNSIGNED_SHORT&&Ot&&(St=Ot.RG16_EXT),at===o.SHORT&&Ot&&(St=Ot.RG16_SNORM_EXT)),E===o.RG_INTEGER&&(at===o.UNSIGNED_BYTE&&(St=o.RG8UI),at===o.UNSIGNED_SHORT&&(St=o.RG16UI),at===o.UNSIGNED_INT&&(St=o.RG32UI),at===o.BYTE&&(St=o.RG8I),at===o.SHORT&&(St=o.RG16I),at===o.INT&&(St=o.RG32I)),E===o.RGB_INTEGER&&(at===o.UNSIGNED_BYTE&&(St=o.RGB8UI),at===o.UNSIGNED_SHORT&&(St=o.RGB16UI),at===o.UNSIGNED_INT&&(St=o.RGB32UI),at===o.BYTE&&(St=o.RGB8I),at===o.SHORT&&(St=o.RGB16I),at===o.INT&&(St=o.RGB32I)),E===o.RGBA_INTEGER&&(at===o.UNSIGNED_BYTE&&(St=o.RGBA8UI),at===o.UNSIGNED_SHORT&&(St=o.RGBA16UI),at===o.UNSIGNED_INT&&(St=o.RGBA32UI),at===o.BYTE&&(St=o.RGBA8I),at===o.SHORT&&(St=o.RGBA16I),at===o.INT&&(St=o.RGBA32I)),E===o.RGB&&(at===o.UNSIGNED_SHORT&&Ot&&(St=Ot.RGB16_EXT),at===o.SHORT&&Ot&&(St=Ot.RGB16_SNORM_EXT),at===o.UNSIGNED_INT_5_9_9_9_REV&&(St=o.RGB9_E5),at===o.UNSIGNED_INT_10F_11F_11F_REV&&(St=o.R11F_G11F_B10F)),E===o.RGBA){const Et=Ct?Qc:He.getTransfer(_t);at===o.FLOAT&&(St=o.RGBA32F),at===o.HALF_FLOAT&&(St=o.RGBA16F),at===o.UNSIGNED_BYTE&&(St=Et===Je?o.SRGB8_ALPHA8:o.RGBA8),at===o.UNSIGNED_SHORT&&Ot&&(St=Ot.RGBA16_EXT),at===o.SHORT&&Ot&&(St=Ot.RGBA16_SNORM_EXT),at===o.UNSIGNED_SHORT_4_4_4_4&&(St=o.RGBA4),at===o.UNSIGNED_SHORT_5_5_5_1&&(St=o.RGB5_A1)}return(St===o.R16F||St===o.R32F||St===o.RG16F||St===o.RG32F||St===o.RGBA16F||St===o.RGBA32F)&&e.get("EXT_color_buffer_float"),St}function U(I,E){let at;return I?E===null||E===Aa||E===kl?at=o.DEPTH24_STENCIL8:E===Ea?at=o.DEPTH32F_STENCIL8:E===Vl&&(at=o.DEPTH24_STENCIL8,he("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===Aa||E===kl?at=o.DEPTH_COMPONENT24:E===Ea?at=o.DEPTH_COMPONENT32F:E===Vl&&(at=o.DEPTH_COMPONENT16),at}function N(I,E){return S(I)===!0||I.isFramebufferTexture&&I.minFilter!==qn&&I.minFilter!==$n?Math.log2(Math.max(E.width,E.height))+1:I.mipmaps!==void 0&&I.mipmaps.length>0?I.mipmaps.length:I.isCompressedTexture&&Array.isArray(I.image)?E.mipmaps.length:1}function L(I){const E=I.target;E.removeEventListener("dispose",L),D(E),E.isVideoTexture&&x.delete(E),E.isHTMLTexture&&g.delete(E)}function b(I){const E=I.target;E.removeEventListener("dispose",b),O(E)}function D(I){const E=r.get(I);if(E.__webglInit===void 0)return;const at=I.source,st=y.get(at);if(st){const _t=st[E.__cacheKey];_t.usedTimes--,_t.usedTimes===0&&V(I),Object.keys(st).length===0&&y.delete(at)}r.remove(I)}function V(I){const E=r.get(I);o.deleteTexture(E.__webglTexture);const at=I.source,st=y.get(at);delete st[E.__cacheKey],h.memory.textures--}function O(I){const E=r.get(I);if(I.depthTexture&&(I.depthTexture.dispose(),r.remove(I.depthTexture)),I.isWebGLCubeRenderTarget)for(let st=0;st<6;st++){if(Array.isArray(E.__webglFramebuffer[st]))for(let _t=0;_t<E.__webglFramebuffer[st].length;_t++)o.deleteFramebuffer(E.__webglFramebuffer[st][_t]);else o.deleteFramebuffer(E.__webglFramebuffer[st]);E.__webglDepthbuffer&&o.deleteRenderbuffer(E.__webglDepthbuffer[st])}else{if(Array.isArray(E.__webglFramebuffer))for(let st=0;st<E.__webglFramebuffer.length;st++)o.deleteFramebuffer(E.__webglFramebuffer[st]);else o.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&o.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&o.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let st=0;st<E.__webglColorRenderbuffer.length;st++)E.__webglColorRenderbuffer[st]&&o.deleteRenderbuffer(E.__webglColorRenderbuffer[st]);E.__webglDepthRenderbuffer&&o.deleteRenderbuffer(E.__webglDepthRenderbuffer)}const at=I.textures;for(let st=0,_t=at.length;st<_t;st++){const Ct=r.get(at[st]);Ct.__webglTexture&&(o.deleteTexture(Ct.__webglTexture),h.memory.textures--),r.remove(at[st])}r.remove(I)}let H=0;function Q(){H=0}function G(){return H}function K(I){H=I}function k(){const I=H;return I>=l.maxTextures&&he("WebGLTextures: Trying to use "+(I+1)+" texture units while this GPU supports only "+l.maxTextures),H+=1,I}function q(I){const E=[];return E.push(I.wrapS),E.push(I.wrapT),E.push(I.wrapR||0),E.push(I.magFilter),E.push(I.minFilter),E.push(I.anisotropy),E.push(I.internalFormat),E.push(I.format),E.push(I.type),E.push(I.generateMipmaps),E.push(I.premultiplyAlpha),E.push(I.flipY),E.push(I.unpackAlignment),E.push(I.colorSpace),E.join()}function it(I,E){const at=r.get(I);if(I.isVideoTexture&&j(I),I.isRenderTargetTexture===!1&&I.isExternalTexture!==!0&&I.version>0&&at.__version!==I.version){const st=I.image;if(st===null)he("WebGLRenderer: Texture marked for update but no image data found.");else if(st.complete===!1)he("WebGLRenderer: Texture marked for update but image is incomplete");else{Rt(at,I,E);return}}else I.isExternalTexture&&(at.__webglTexture=I.sourceTexture?I.sourceTexture:null);i.bindTexture(o.TEXTURE_2D,at.__webglTexture,o.TEXTURE0+E)}function rt(I,E){const at=r.get(I);if(I.isRenderTargetTexture===!1&&I.version>0&&at.__version!==I.version){Rt(at,I,E);return}else I.isExternalTexture&&(at.__webglTexture=I.sourceTexture?I.sourceTexture:null);i.bindTexture(o.TEXTURE_2D_ARRAY,at.__webglTexture,o.TEXTURE0+E)}function ht(I,E){const at=r.get(I);if(I.isRenderTargetTexture===!1&&I.version>0&&at.__version!==I.version){Rt(at,I,E);return}i.bindTexture(o.TEXTURE_3D,at.__webglTexture,o.TEXTURE0+E)}function vt(I,E){const at=r.get(I);if(I.isCubeDepthTexture!==!0&&I.version>0&&at.__version!==I.version){It(at,I,E);return}i.bindTexture(o.TEXTURE_CUBE_MAP,at.__webglTexture,o.TEXTURE0+E)}const Gt={[Op]:o.REPEAT,[$a]:o.CLAMP_TO_EDGE,[Pp]:o.MIRRORED_REPEAT},qt={[qn]:o.NEAREST,[zb]:o.NEAREST_MIPMAP_NEAREST,[gc]:o.NEAREST_MIPMAP_LINEAR,[$n]:o.LINEAR,[kd]:o.LINEAR_MIPMAP_NEAREST,[ms]:o.LINEAR_MIPMAP_LINEAR},B={[Gb]:o.NEVER,[Yb]:o.ALWAYS,[Vb]:o.LESS,[Dm]:o.LEQUAL,[kb]:o.EQUAL,[Nm]:o.GEQUAL,[Xb]:o.GREATER,[Wb]:o.NOTEQUAL};function pt(I,E){if(E.type===Ea&&e.has("OES_texture_float_linear")===!1&&(E.magFilter===$n||E.magFilter===kd||E.magFilter===gc||E.magFilter===ms||E.minFilter===$n||E.minFilter===kd||E.minFilter===gc||E.minFilter===ms)&&he("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),o.texParameteri(I,o.TEXTURE_WRAP_S,Gt[E.wrapS]),o.texParameteri(I,o.TEXTURE_WRAP_T,Gt[E.wrapT]),(I===o.TEXTURE_3D||I===o.TEXTURE_2D_ARRAY)&&o.texParameteri(I,o.TEXTURE_WRAP_R,Gt[E.wrapR]),o.texParameteri(I,o.TEXTURE_MAG_FILTER,qt[E.magFilter]),o.texParameteri(I,o.TEXTURE_MIN_FILTER,qt[E.minFilter]),E.compareFunction&&(o.texParameteri(I,o.TEXTURE_COMPARE_MODE,o.COMPARE_REF_TO_TEXTURE),o.texParameteri(I,o.TEXTURE_COMPARE_FUNC,B[E.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===qn||E.minFilter!==gc&&E.minFilter!==ms||E.type===Ea&&e.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||r.get(E).__currentAnisotropy){const at=e.get("EXT_texture_filter_anisotropic");o.texParameterf(I,at.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,l.getMaxAnisotropy())),r.get(E).__currentAnisotropy=E.anisotropy}}}function At(I,E){let at=!1;I.__webglInit===void 0&&(I.__webglInit=!0,E.addEventListener("dispose",L));const st=E.source;let _t=y.get(st);_t===void 0&&(_t={},y.set(st,_t));const Ct=q(E);if(Ct!==I.__cacheKey){_t[Ct]===void 0&&(_t[Ct]={texture:o.createTexture(),usedTimes:0},h.memory.textures++,at=!0),_t[Ct].usedTimes++;const Ot=_t[I.__cacheKey];Ot!==void 0&&(_t[I.__cacheKey].usedTimes--,Ot.usedTimes===0&&V(E)),I.__cacheKey=Ct,I.__webglTexture=_t[Ct].texture}return at}function $(I,E,at){return Math.floor(Math.floor(I/at)/E)}function mt(I,E,at,st){const Ct=I.updateRanges;if(Ct.length===0)i.texSubImage2D(o.TEXTURE_2D,0,0,0,E.width,E.height,at,st,E.data);else{Ct.sort((ne,zt)=>ne.start-zt.start);let Ot=0;for(let ne=1;ne<Ct.length;ne++){const zt=Ct[Ot],Pt=Ct[ne],Vt=zt.start+zt.count,ie=$(Pt.start,E.width,4),le=$(zt.start,E.width,4);Pt.start<=Vt+1&&ie===le&&$(Pt.start+Pt.count-1,E.width,4)===ie?zt.count=Math.max(zt.count,Pt.start+Pt.count-zt.start):(++Ot,Ct[Ot]=Pt)}Ct.length=Ot+1;const St=i.getParameter(o.UNPACK_ROW_LENGTH),Et=i.getParameter(o.UNPACK_SKIP_PIXELS),Lt=i.getParameter(o.UNPACK_SKIP_ROWS);i.pixelStorei(o.UNPACK_ROW_LENGTH,E.width);for(let ne=0,zt=Ct.length;ne<zt;ne++){const Pt=Ct[ne],Vt=Math.floor(Pt.start/4),ie=Math.ceil(Pt.count/4),le=Vt%E.width,Z=Math.floor(Vt/E.width),Nt=ie,yt=1;i.pixelStorei(o.UNPACK_SKIP_PIXELS,le),i.pixelStorei(o.UNPACK_SKIP_ROWS,Z),i.texSubImage2D(o.TEXTURE_2D,0,le,Z,Nt,yt,at,st,E.data)}I.clearUpdateRanges(),i.pixelStorei(o.UNPACK_ROW_LENGTH,St),i.pixelStorei(o.UNPACK_SKIP_PIXELS,Et),i.pixelStorei(o.UNPACK_SKIP_ROWS,Lt)}}function Rt(I,E,at){let st=o.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(st=o.TEXTURE_2D_ARRAY),E.isData3DTexture&&(st=o.TEXTURE_3D);const _t=At(I,E),Ct=E.source;i.bindTexture(st,I.__webglTexture,o.TEXTURE0+at);const Ot=r.get(Ct);if(Ct.version!==Ot.__version||_t===!0){if(i.activeTexture(o.TEXTURE0+at),(typeof ImageBitmap<"u"&&E.image instanceof ImageBitmap)===!1){const yt=He.getPrimaries(He.workingColorSpace),Ut=E.colorSpace===Ir?null:He.getPrimaries(E.colorSpace),kt=E.colorSpace===Ir||yt===Ut?o.NONE:o.BROWSER_DEFAULT_WEBGL;i.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,E.flipY),i.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),i.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,kt)}i.pixelStorei(o.UNPACK_ALIGNMENT,E.unpackAlignment);let Et=M(E.image,!1,l.maxTextureSize);Et=un(E,Et);const Lt=c.convert(E.format,E.colorSpace),ne=c.convert(E.type);let zt=C(E.internalFormat,Lt,ne,E.normalized,E.colorSpace,E.isVideoTexture);pt(st,E);let Pt;const Vt=E.mipmaps,ie=E.isVideoTexture!==!0,le=Ot.__version===void 0||_t===!0,Z=Ct.dataReady,Nt=N(E,Et);if(E.isDepthTexture)zt=U(E.format===gs,E.type),le&&(ie?i.texStorage2D(o.TEXTURE_2D,1,zt,Et.width,Et.height):i.texImage2D(o.TEXTURE_2D,0,zt,Et.width,Et.height,0,Lt,ne,null));else if(E.isDataTexture)if(Vt.length>0){ie&&le&&i.texStorage2D(o.TEXTURE_2D,Nt,zt,Vt[0].width,Vt[0].height);for(let yt=0,Ut=Vt.length;yt<Ut;yt++)Pt=Vt[yt],ie?Z&&i.texSubImage2D(o.TEXTURE_2D,yt,0,0,Pt.width,Pt.height,Lt,ne,Pt.data):i.texImage2D(o.TEXTURE_2D,yt,zt,Pt.width,Pt.height,0,Lt,ne,Pt.data);E.generateMipmaps=!1}else ie?(le&&i.texStorage2D(o.TEXTURE_2D,Nt,zt,Et.width,Et.height),Z&&mt(E,Et,Lt,ne)):i.texImage2D(o.TEXTURE_2D,0,zt,Et.width,Et.height,0,Lt,ne,Et.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){ie&&le&&i.texStorage3D(o.TEXTURE_2D_ARRAY,Nt,zt,Vt[0].width,Vt[0].height,Et.depth);for(let yt=0,Ut=Vt.length;yt<Ut;yt++)if(Pt=Vt[yt],E.format!==ia)if(Lt!==null)if(ie){if(Z)if(E.layerUpdates.size>0){const kt=Gx(Pt.width,Pt.height,E.format,E.type);for(const Tt of E.layerUpdates){const $t=Pt.data.subarray(Tt*kt/Pt.data.BYTES_PER_ELEMENT,(Tt+1)*kt/Pt.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,yt,0,0,Tt,Pt.width,Pt.height,1,Lt,$t)}}else i.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,yt,0,0,0,Pt.width,Pt.height,Et.depth,Lt,Pt.data)}else i.compressedTexImage3D(o.TEXTURE_2D_ARRAY,yt,zt,Pt.width,Pt.height,Et.depth,0,Pt.data,0,0);else he("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ie?Z&&i.texSubImage3D(o.TEXTURE_2D_ARRAY,yt,0,0,0,Pt.width,Pt.height,Et.depth,Lt,ne,Pt.data):i.texImage3D(o.TEXTURE_2D_ARRAY,yt,zt,Pt.width,Pt.height,Et.depth,0,Lt,ne,Pt.data);E.layerUpdates.size>0&&E.clearLayerUpdates()}else{ie&&le&&i.texStorage2D(o.TEXTURE_2D,Nt,zt,Vt[0].width,Vt[0].height);for(let yt=0,Ut=Vt.length;yt<Ut;yt++)Pt=Vt[yt],E.format!==ia?Lt!==null?ie?Z&&i.compressedTexSubImage2D(o.TEXTURE_2D,yt,0,0,Pt.width,Pt.height,Lt,Pt.data):i.compressedTexImage2D(o.TEXTURE_2D,yt,zt,Pt.width,Pt.height,0,Pt.data):he("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ie?Z&&i.texSubImage2D(o.TEXTURE_2D,yt,0,0,Pt.width,Pt.height,Lt,ne,Pt.data):i.texImage2D(o.TEXTURE_2D,yt,zt,Pt.width,Pt.height,0,Lt,ne,Pt.data)}else if(E.isDataArrayTexture)if(ie){if(le&&i.texStorage3D(o.TEXTURE_2D_ARRAY,Nt,zt,Et.width,Et.height,Et.depth),Z)if(E.layerUpdates.size>0){const yt=Gx(Et.width,Et.height,E.format,E.type);for(const Ut of E.layerUpdates){const kt=Et.data.subarray(Ut*yt/Et.data.BYTES_PER_ELEMENT,(Ut+1)*yt/Et.data.BYTES_PER_ELEMENT);i.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,Ut,Et.width,Et.height,1,Lt,ne,kt)}E.clearLayerUpdates()}else i.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,0,Et.width,Et.height,Et.depth,Lt,ne,Et.data)}else i.texImage3D(o.TEXTURE_2D_ARRAY,0,zt,Et.width,Et.height,Et.depth,0,Lt,ne,Et.data);else if(E.isData3DTexture)ie?(le&&i.texStorage3D(o.TEXTURE_3D,Nt,zt,Et.width,Et.height,Et.depth),Z&&i.texSubImage3D(o.TEXTURE_3D,0,0,0,0,Et.width,Et.height,Et.depth,Lt,ne,Et.data)):i.texImage3D(o.TEXTURE_3D,0,zt,Et.width,Et.height,Et.depth,0,Lt,ne,Et.data);else if(E.isFramebufferTexture){if(le)if(ie)i.texStorage2D(o.TEXTURE_2D,Nt,zt,Et.width,Et.height);else{let yt=Et.width,Ut=Et.height;for(let kt=0;kt<Nt;kt++)i.texImage2D(o.TEXTURE_2D,kt,zt,yt,Ut,0,Lt,ne,null),yt>>=1,Ut>>=1}}else if(E.isHTMLTexture){if("texElementImage2D"in o){const yt=o.canvas;if(yt.hasAttribute("layoutsubtree")||yt.setAttribute("layoutsubtree","true"),Et.parentNode!==yt){yt.appendChild(Et),g.add(E),yt.onpaint=Ut=>{const kt=Ut.changedElements;for(const Tt of g)kt.includes(Tt.image)&&(Tt.needsUpdate=!0)},yt.requestPaint();return}if(o.texElementImage2D.length===3)o.texElementImage2D(o.TEXTURE_2D,o.RGBA8,Et);else{const kt=o.RGBA,Tt=o.RGBA,$t=o.UNSIGNED_BYTE;o.texElementImage2D(o.TEXTURE_2D,0,kt,Tt,$t,Et)}o.texParameteri(o.TEXTURE_2D,o.TEXTURE_MIN_FILTER,o.LINEAR),o.texParameteri(o.TEXTURE_2D,o.TEXTURE_WRAP_S,o.CLAMP_TO_EDGE),o.texParameteri(o.TEXTURE_2D,o.TEXTURE_WRAP_T,o.CLAMP_TO_EDGE)}}else if(Vt.length>0){if(ie&&le){const yt=Be(Vt[0]);i.texStorage2D(o.TEXTURE_2D,Nt,zt,yt.width,yt.height)}for(let yt=0,Ut=Vt.length;yt<Ut;yt++)Pt=Vt[yt],ie?Z&&i.texSubImage2D(o.TEXTURE_2D,yt,0,0,Lt,ne,Pt):i.texImage2D(o.TEXTURE_2D,yt,zt,Lt,ne,Pt);E.generateMipmaps=!1}else if(ie){if(le){const yt=Be(Et);i.texStorage2D(o.TEXTURE_2D,Nt,zt,yt.width,yt.height)}Z&&i.texSubImage2D(o.TEXTURE_2D,0,0,0,Lt,ne,Et)}else i.texImage2D(o.TEXTURE_2D,0,zt,Lt,ne,Et);S(E)&&P(st),Ot.__version=Ct.version,E.onUpdate&&E.onUpdate(E)}I.__version=E.version}function It(I,E,at){if(E.image.length!==6)return;const st=At(I,E),_t=E.source;i.bindTexture(o.TEXTURE_CUBE_MAP,I.__webglTexture,o.TEXTURE0+at);const Ct=r.get(_t);if(_t.version!==Ct.__version||st===!0){i.activeTexture(o.TEXTURE0+at);const Ot=He.getPrimaries(He.workingColorSpace),St=E.colorSpace===Ir?null:He.getPrimaries(E.colorSpace),Et=E.colorSpace===Ir||Ot===St?o.NONE:o.BROWSER_DEFAULT_WEBGL;i.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,E.flipY),i.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),i.pixelStorei(o.UNPACK_ALIGNMENT,E.unpackAlignment),i.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,Et);const Lt=E.isCompressedTexture||E.image[0].isCompressedTexture,ne=E.image[0]&&E.image[0].isDataTexture,zt=[];for(let Tt=0;Tt<6;Tt++)!Lt&&!ne?zt[Tt]=M(E.image[Tt],!0,l.maxCubemapSize):zt[Tt]=ne?E.image[Tt].image:E.image[Tt],zt[Tt]=un(E,zt[Tt]);const Pt=zt[0],Vt=c.convert(E.format,E.colorSpace),ie=c.convert(E.type),le=C(E.internalFormat,Vt,ie,E.normalized,E.colorSpace),Z=E.isVideoTexture!==!0,Nt=Ct.__version===void 0||st===!0,yt=_t.dataReady;let Ut=N(E,Pt);pt(o.TEXTURE_CUBE_MAP,E);let kt;if(Lt){Z&&Nt&&i.texStorage2D(o.TEXTURE_CUBE_MAP,Ut,le,Pt.width,Pt.height);for(let Tt=0;Tt<6;Tt++){kt=zt[Tt].mipmaps;for(let $t=0;$t<kt.length;$t++){const Ht=kt[$t];E.format!==ia?Vt!==null?Z?yt&&i.compressedTexSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Tt,$t,0,0,Ht.width,Ht.height,Vt,Ht.data):i.compressedTexImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Tt,$t,le,Ht.width,Ht.height,0,Ht.data):he("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Z?yt&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Tt,$t,0,0,Ht.width,Ht.height,Vt,ie,Ht.data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Tt,$t,le,Ht.width,Ht.height,0,Vt,ie,Ht.data)}}}else{if(kt=E.mipmaps,Z&&Nt){kt.length>0&&Ut++;const Tt=Be(zt[0]);i.texStorage2D(o.TEXTURE_CUBE_MAP,Ut,le,Tt.width,Tt.height)}for(let Tt=0;Tt<6;Tt++)if(ne){Z?yt&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Tt,0,0,0,zt[Tt].width,zt[Tt].height,Vt,ie,zt[Tt].data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Tt,0,le,zt[Tt].width,zt[Tt].height,0,Vt,ie,zt[Tt].data);for(let $t=0;$t<kt.length;$t++){const we=kt[$t].image[Tt].image;Z?yt&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Tt,$t+1,0,0,we.width,we.height,Vt,ie,we.data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Tt,$t+1,le,we.width,we.height,0,Vt,ie,we.data)}}else{Z?yt&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Tt,0,0,0,Vt,ie,zt[Tt]):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Tt,0,le,Vt,ie,zt[Tt]);for(let $t=0;$t<kt.length;$t++){const Ht=kt[$t];Z?yt&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Tt,$t+1,0,0,Vt,ie,Ht.image[Tt]):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Tt,$t+1,le,Vt,ie,Ht.image[Tt])}}}S(E)&&P(o.TEXTURE_CUBE_MAP),Ct.__version=_t.version,E.onUpdate&&E.onUpdate(E)}I.__version=E.version}function xt(I,E,at,st,_t,Ct){const Ot=c.convert(at.format,at.colorSpace),St=c.convert(at.type),Et=C(at.internalFormat,Ot,St,at.normalized,at.colorSpace),Lt=r.get(E),ne=r.get(at);if(ne.__renderTarget=E,!Lt.__hasExternalTextures){const zt=Math.max(1,E.width>>Ct),Pt=Math.max(1,E.height>>Ct);_t===o.TEXTURE_3D||_t===o.TEXTURE_2D_ARRAY?i.texImage3D(_t,Ct,Et,zt,Pt,E.depth,0,Ot,St,null):i.texImage2D(_t,Ct,Et,zt,Pt,0,Ot,St,null)}i.bindFramebuffer(o.FRAMEBUFFER,I),nn(E)?d.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,st,_t,ne.__webglTexture,0,ze(E)):(_t===o.TEXTURE_2D||_t>=o.TEXTURE_CUBE_MAP_POSITIVE_X&&_t<=o.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&o.framebufferTexture2D(o.FRAMEBUFFER,st,_t,ne.__webglTexture,Ct),i.bindFramebuffer(o.FRAMEBUFFER,null)}function Dt(I,E,at){if(o.bindRenderbuffer(o.RENDERBUFFER,I),E.depthBuffer){const st=E.depthTexture,_t=st&&st.isDepthTexture?st.type:null,Ct=U(E.stencilBuffer,_t),Ot=E.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;nn(E)?d.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,ze(E),Ct,E.width,E.height):at?o.renderbufferStorageMultisample(o.RENDERBUFFER,ze(E),Ct,E.width,E.height):o.renderbufferStorage(o.RENDERBUFFER,Ct,E.width,E.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,Ot,o.RENDERBUFFER,I)}else{const st=E.textures;for(let _t=0;_t<st.length;_t++){const Ct=st[_t],Ot=c.convert(Ct.format,Ct.colorSpace),St=c.convert(Ct.type),Et=C(Ct.internalFormat,Ot,St,Ct.normalized,Ct.colorSpace);nn(E)?d.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,ze(E),Et,E.width,E.height):at?o.renderbufferStorageMultisample(o.RENDERBUFFER,ze(E),Et,E.width,E.height):o.renderbufferStorage(o.RENDERBUFFER,Et,E.width,E.height)}}o.bindRenderbuffer(o.RENDERBUFFER,null)}function Le(I,E,at){const st=E.isWebGLCubeRenderTarget===!0;if(i.bindFramebuffer(o.FRAMEBUFFER,I),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const _t=r.get(E.depthTexture);if(_t.__renderTarget=E,(!_t.__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),st){if(_t.__webglInit===void 0&&(_t.__webglInit=!0,E.depthTexture.addEventListener("dispose",L)),_t.__webglTexture===void 0){_t.__webglTexture=o.createTexture(),i.bindTexture(o.TEXTURE_CUBE_MAP,_t.__webglTexture),pt(o.TEXTURE_CUBE_MAP,E.depthTexture);const Lt=c.convert(E.depthTexture.format),ne=c.convert(E.depthTexture.type);let zt;E.depthTexture.format===ir?zt=o.DEPTH_COMPONENT24:E.depthTexture.format===gs&&(zt=o.DEPTH24_STENCIL8);for(let Pt=0;Pt<6;Pt++)o.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Pt,0,zt,E.width,E.height,0,Lt,ne,null)}}else it(E.depthTexture,0);const Ct=_t.__webglTexture,Ot=ze(E),St=st?o.TEXTURE_CUBE_MAP_POSITIVE_X+at:o.TEXTURE_2D,Et=E.depthTexture.format===gs?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;if(E.depthTexture.format===ir)nn(E)?d.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,Et,St,Ct,0,Ot):o.framebufferTexture2D(o.FRAMEBUFFER,Et,St,Ct,0);else if(E.depthTexture.format===gs)nn(E)?d.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,Et,St,Ct,0,Ot):o.framebufferTexture2D(o.FRAMEBUFFER,Et,St,Ct,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function ce(I){const E=r.get(I),at=I.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==I.depthTexture){const st=I.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),st){const _t=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,st.removeEventListener("dispose",_t)};st.addEventListener("dispose",_t),E.__depthDisposeCallback=_t}E.__boundDepthTexture=st}if(I.depthTexture&&!E.__autoAllocateDepthBuffer)if(at)for(let st=0;st<6;st++)Le(E.__webglFramebuffer[st],I,st);else{const st=I.texture.mipmaps;st&&st.length>0?Le(E.__webglFramebuffer[0],I,0):Le(E.__webglFramebuffer,I,0)}else if(at){E.__webglDepthbuffer=[];for(let st=0;st<6;st++)if(i.bindFramebuffer(o.FRAMEBUFFER,E.__webglFramebuffer[st]),E.__webglDepthbuffer[st]===void 0)E.__webglDepthbuffer[st]=o.createRenderbuffer(),Dt(E.__webglDepthbuffer[st],I,!1);else{const _t=I.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,Ct=E.__webglDepthbuffer[st];o.bindRenderbuffer(o.RENDERBUFFER,Ct),o.framebufferRenderbuffer(o.FRAMEBUFFER,_t,o.RENDERBUFFER,Ct)}}else{const st=I.texture.mipmaps;if(st&&st.length>0?i.bindFramebuffer(o.FRAMEBUFFER,E.__webglFramebuffer[0]):i.bindFramebuffer(o.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=o.createRenderbuffer(),Dt(E.__webglDepthbuffer,I,!1);else{const _t=I.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,Ct=E.__webglDepthbuffer;o.bindRenderbuffer(o.RENDERBUFFER,Ct),o.framebufferRenderbuffer(o.FRAMEBUFFER,_t,o.RENDERBUFFER,Ct)}}i.bindFramebuffer(o.FRAMEBUFFER,null)}function ve(I,E,at){const st=r.get(I);E!==void 0&&xt(st.__webglFramebuffer,I,I.texture,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,0),at!==void 0&&ce(I)}function Me(I){const E=I.texture,at=r.get(I),st=r.get(E);I.addEventListener("dispose",b);const _t=I.textures,Ct=I.isWebGLCubeRenderTarget===!0,Ot=_t.length>1;if(Ot||(st.__webglTexture===void 0&&(st.__webglTexture=o.createTexture()),st.__version=E.version,h.memory.textures++),Ct){at.__webglFramebuffer=[];for(let St=0;St<6;St++)if(E.mipmaps&&E.mipmaps.length>0){at.__webglFramebuffer[St]=[];for(let Et=0;Et<E.mipmaps.length;Et++)at.__webglFramebuffer[St][Et]=o.createFramebuffer()}else at.__webglFramebuffer[St]=o.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){at.__webglFramebuffer=[];for(let St=0;St<E.mipmaps.length;St++)at.__webglFramebuffer[St]=o.createFramebuffer()}else at.__webglFramebuffer=o.createFramebuffer();if(Ot)for(let St=0,Et=_t.length;St<Et;St++){const Lt=r.get(_t[St]);Lt.__webglTexture===void 0&&(Lt.__webglTexture=o.createTexture(),h.memory.textures++)}if(I.samples>0&&nn(I)===!1){at.__webglMultisampledFramebuffer=o.createFramebuffer(),at.__webglColorRenderbuffer=[],i.bindFramebuffer(o.FRAMEBUFFER,at.__webglMultisampledFramebuffer);for(let St=0;St<_t.length;St++){const Et=_t[St];at.__webglColorRenderbuffer[St]=o.createRenderbuffer(),o.bindRenderbuffer(o.RENDERBUFFER,at.__webglColorRenderbuffer[St]);const Lt=c.convert(Et.format,Et.colorSpace),ne=c.convert(Et.type),zt=C(Et.internalFormat,Lt,ne,Et.normalized,Et.colorSpace,I.isXRRenderTarget===!0),Pt=ze(I);o.renderbufferStorageMultisample(o.RENDERBUFFER,Pt,zt,I.width,I.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+St,o.RENDERBUFFER,at.__webglColorRenderbuffer[St])}o.bindRenderbuffer(o.RENDERBUFFER,null),I.depthBuffer&&(at.__webglDepthRenderbuffer=o.createRenderbuffer(),Dt(at.__webglDepthRenderbuffer,I,!0)),i.bindFramebuffer(o.FRAMEBUFFER,null)}}if(Ct){i.bindTexture(o.TEXTURE_CUBE_MAP,st.__webglTexture),pt(o.TEXTURE_CUBE_MAP,E);for(let St=0;St<6;St++)if(E.mipmaps&&E.mipmaps.length>0)for(let Et=0;Et<E.mipmaps.length;Et++)xt(at.__webglFramebuffer[St][Et],I,E,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+St,Et);else xt(at.__webglFramebuffer[St],I,E,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+St,0);S(E)&&P(o.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(Ot){for(let St=0,Et=_t.length;St<Et;St++){const Lt=_t[St],ne=r.get(Lt);let zt=o.TEXTURE_2D;(I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(zt=I.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),i.bindTexture(zt,ne.__webglTexture),pt(zt,Lt),xt(at.__webglFramebuffer,I,Lt,o.COLOR_ATTACHMENT0+St,zt,0),S(Lt)&&P(zt)}i.unbindTexture()}else{let St=o.TEXTURE_2D;if((I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(St=I.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),i.bindTexture(St,st.__webglTexture),pt(St,E),E.mipmaps&&E.mipmaps.length>0)for(let Et=0;Et<E.mipmaps.length;Et++)xt(at.__webglFramebuffer[Et],I,E,o.COLOR_ATTACHMENT0,St,Et);else xt(at.__webglFramebuffer,I,E,o.COLOR_ATTACHMENT0,St,0);S(E)&&P(St),i.unbindTexture()}I.depthBuffer&&ce(I)}function ae(I){const E=I.textures;for(let at=0,st=E.length;at<st;at++){const _t=E[at];if(S(_t)){const Ct=F(I),Ot=r.get(_t).__webglTexture;i.bindTexture(Ct,Ot),P(Ct),i.unbindTexture()}}}const se=[],Xe=[];function _n(I){if(I.samples>0){if(nn(I)===!1){const E=I.textures,at=I.width,st=I.height;let _t=o.COLOR_BUFFER_BIT;const Ct=I.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,Ot=r.get(I),St=E.length>1;if(St)for(let Lt=0;Lt<E.length;Lt++)i.bindFramebuffer(o.FRAMEBUFFER,Ot.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Lt,o.RENDERBUFFER,null),i.bindFramebuffer(o.FRAMEBUFFER,Ot.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+Lt,o.TEXTURE_2D,null,0);i.bindFramebuffer(o.READ_FRAMEBUFFER,Ot.__webglMultisampledFramebuffer);const Et=I.texture.mipmaps;Et&&Et.length>0?i.bindFramebuffer(o.DRAW_FRAMEBUFFER,Ot.__webglFramebuffer[0]):i.bindFramebuffer(o.DRAW_FRAMEBUFFER,Ot.__webglFramebuffer);for(let Lt=0;Lt<E.length;Lt++){if(I.resolveDepthBuffer&&(I.depthBuffer&&(_t|=o.DEPTH_BUFFER_BIT),I.stencilBuffer&&I.resolveStencilBuffer&&(_t|=o.STENCIL_BUFFER_BIT)),St){o.framebufferRenderbuffer(o.READ_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.RENDERBUFFER,Ot.__webglColorRenderbuffer[Lt]);const ne=r.get(E[Lt]).__webglTexture;o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,ne,0)}o.blitFramebuffer(0,0,at,st,0,0,at,st,_t,o.NEAREST),p===!0&&(se.length=0,Xe.length=0,se.push(o.COLOR_ATTACHMENT0+Lt),I.depthBuffer&&I.storeMultisampledDepthBuffer===!1&&(se.push(Ct),Xe.push(Ct),o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,Xe)),o.invalidateFramebuffer(o.READ_FRAMEBUFFER,se))}if(i.bindFramebuffer(o.READ_FRAMEBUFFER,null),i.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),St)for(let Lt=0;Lt<E.length;Lt++){i.bindFramebuffer(o.FRAMEBUFFER,Ot.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Lt,o.RENDERBUFFER,Ot.__webglColorRenderbuffer[Lt]);const ne=r.get(E[Lt]).__webglTexture;i.bindFramebuffer(o.FRAMEBUFFER,Ot.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+Lt,o.TEXTURE_2D,ne,0)}i.bindFramebuffer(o.DRAW_FRAMEBUFFER,Ot.__webglMultisampledFramebuffer)}else if(I.depthBuffer&&I.storeMultisampledDepthBuffer===!1&&p){const E=I.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,[E])}}}function ze(I){return Math.min(l.maxSamples,I.samples)}function nn(I){const E=r.get(I);return I.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function j(I){const E=h.render.frame;x.get(I)!==E&&(x.set(I,E),I.update())}function un(I,E){const at=I.colorSpace,st=I.format,_t=I.type;return I.isCompressedTexture===!0||I.isVideoTexture===!0||at!==Kc&&at!==Ir&&(He.getTransfer(at)===Je?(st!==ia||_t!==Ni)&&he("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):ke("WebGLTextures: Unsupported texture color space:",at)),E}function Be(I){return typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement?(m.width=I.naturalWidth||I.width,m.height=I.naturalHeight||I.height):typeof VideoFrame<"u"&&I instanceof VideoFrame?(m.width=I.displayWidth,m.height=I.displayHeight):(m.width=I.width,m.height=I.height),m}this.allocateTextureUnit=k,this.resetTextureUnits=Q,this.getTextureUnits=G,this.setTextureUnits=K,this.setTexture2D=it,this.setTexture2DArray=rt,this.setTexture3D=ht,this.setTextureCube=vt,this.rebindTextures=ve,this.setupRenderTarget=Me,this.updateRenderTargetMipmap=ae,this.updateMultisampleRenderTarget=_n,this.setupDepthRenderbuffer=ce,this.setupFrameBufferTexture=xt,this.useMultisampledRTT=nn,this.isReversedDepthBuffer=function(){return i.buffers.depth.getReversed()}}function NC(o,e){function i(r,l=Ir){let c;const h=He.getTransfer(l);if(r===Ni)return o.UNSIGNED_BYTE;if(r===Tm)return o.UNSIGNED_SHORT_4_4_4_4;if(r===Am)return o.UNSIGNED_SHORT_5_5_5_1;if(r===zS)return o.UNSIGNED_INT_5_9_9_9_REV;if(r===BS)return o.UNSIGNED_INT_10F_11F_11F_REV;if(r===PS)return o.BYTE;if(r===IS)return o.SHORT;if(r===Vl)return o.UNSIGNED_SHORT;if(r===bm)return o.INT;if(r===Aa)return o.UNSIGNED_INT;if(r===Ea)return o.FLOAT;if(r===Ra)return o.HALF_FLOAT;if(r===FS)return o.ALPHA;if(r===HS)return o.RGB;if(r===ia)return o.RGBA;if(r===ir)return o.DEPTH_COMPONENT;if(r===gs)return o.DEPTH_STENCIL;if(r===GS)return o.RED;if(r===Rm)return o.RED_INTEGER;if(r===Ss)return o.RG;if(r===wm)return o.RG_INTEGER;if(r===Cm)return o.RGBA_INTEGER;if(r===Gc||r===Vc||r===kc||r===Xc)if(h===Je)if(c=e.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(r===Gc)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Vc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===kc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Xc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=e.get("WEBGL_compressed_texture_s3tc"),c!==null){if(r===Gc)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Vc)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===kc)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Xc)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Ip||r===zp||r===Bp||r===Fp)if(c=e.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(r===Ip)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===zp)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Bp)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Fp)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Hp||r===Gp||r===Vp||r===kp||r===Xp||r===Zc||r===Wp)if(c=e.get("WEBGL_compressed_texture_etc"),c!==null){if(r===Hp||r===Gp)return h===Je?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(r===Vp)return h===Je?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC;if(r===kp)return c.COMPRESSED_R11_EAC;if(r===Xp)return c.COMPRESSED_SIGNED_R11_EAC;if(r===Zc)return c.COMPRESSED_RG11_EAC;if(r===Wp)return c.COMPRESSED_SIGNED_RG11_EAC}else return null;if(r===Yp||r===qp||r===Zp||r===jp||r===Kp||r===Qp||r===Jp||r===$p||r===tm||r===em||r===nm||r===im||r===am||r===rm)if(c=e.get("WEBGL_compressed_texture_astc"),c!==null){if(r===Yp)return h===Je?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===qp)return h===Je?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Zp)return h===Je?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===jp)return h===Je?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Kp)return h===Je?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Qp)return h===Je?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Jp)return h===Je?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===$p)return h===Je?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===tm)return h===Je?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===em)return h===Je?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===nm)return h===Je?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===im)return h===Je?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===am)return h===Je?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===rm)return h===Je?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===sm||r===om||r===lm)if(c=e.get("EXT_texture_compression_bptc"),c!==null){if(r===sm)return h===Je?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===om)return c.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===lm)return c.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===um||r===cm||r===jc||r===fm)if(c=e.get("EXT_texture_compression_rgtc"),c!==null){if(r===um)return c.COMPRESSED_RED_RGTC1_EXT;if(r===cm)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===jc)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===fm)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===kl?o.UNSIGNED_INT_24_8:o[r]!==void 0?o[r]:null}return{convert:i}}const UC=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,LC=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class OC{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,i){if(this.texture===null){const r=new KS(e.texture);(e.depthNear!==i.depthNear||e.depthFar!==i.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const i=e.cameras[0].viewport,r=new wa({vertexShader:UC,fragmentShader:LC,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new ra(new Zl(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class PC extends Hr{constructor(e,i){super();const r=this;let l=null,c=1,h=null,d="local-floor",p=1,m=null,x=null,g=null,v=null,y=null,T=null;const w=typeof XRWebGLBinding<"u",M=new OC,S={},P=i.getContextAttributes();let F=null,C=null;const U=[],N=[],L=new me;let b=null,D=null;const V=new Wi;V.viewport=new gn;const O=new Wi;O.viewport=new gn;const H=[V,O],Q=new HT;let G=null,K=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function($){let mt=U[$];return mt===void 0&&(mt=new Qd,U[$]=mt),mt.getTargetRaySpace()},this.getControllerGrip=function($){let mt=U[$];return mt===void 0&&(mt=new Qd,U[$]=mt),mt.getGripSpace()},this.getHand=function($){let mt=U[$];return mt===void 0&&(mt=new Qd,U[$]=mt),mt.getHandSpace()};function k($){const mt=N.indexOf($.inputSource);if(mt===-1)return;const Rt=U[mt];Rt!==void 0&&(Rt.update($.inputSource,$.frame,m||h),Rt.dispatchEvent({type:$.type,data:$.inputSource}))}function q(){l.removeEventListener("select",k),l.removeEventListener("selectstart",k),l.removeEventListener("selectend",k),l.removeEventListener("squeeze",k),l.removeEventListener("squeezestart",k),l.removeEventListener("squeezeend",k),l.removeEventListener("end",q),l.removeEventListener("inputsourceschange",it);for(let $=0;$<U.length;$++){const mt=N[$];mt!==null&&(N[$]=null,U[$].disconnect(mt))}G=null,K=null,M.reset();for(const $ in S)delete S[$];if(e.setRenderTarget(F),y=null,v=null,g=null,l=null,C=null,At.stop(),r.isPresenting=!1,e.setPixelRatio(b),e.setSize(L.width,L.height,!1),D!==null){const $=D.camera;$.fov=D.fov,$.zoom=D.zoom,$.updateProjectionMatrix(),D=null}r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function($){c=$,r.isPresenting===!0&&he("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function($){d=$,r.isPresenting===!0&&he("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return m||h},this.setReferenceSpace=function($){m=$},this.getBaseLayer=function(){return v!==null?v:y},this.getBinding=function(){return g===null&&w&&(g=new XRWebGLBinding(l,i)),g},this.getFrame=function(){return T},this.getSession=function(){return l},this.setSession=async function($){if(l=$,l!==null){if(F=e.getRenderTarget(),l.addEventListener("select",k),l.addEventListener("selectstart",k),l.addEventListener("selectend",k),l.addEventListener("squeeze",k),l.addEventListener("squeezestart",k),l.addEventListener("squeezeend",k),l.addEventListener("end",q),l.addEventListener("inputsourceschange",it),P.xrCompatible!==!0&&await i.makeXRCompatible(),b=e.getPixelRatio(),e.getSize(L),w&&"createProjectionLayer"in XRWebGLBinding.prototype){let Rt=null,It=null,xt=null;P.depth&&(xt=P.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,Rt=P.stencil?gs:ir,It=P.stencil?kl:Aa);const Dt={colorFormat:i.RGBA8,depthFormat:xt,scaleFactor:c};g=this.getBinding(),v=g.createProjectionLayer(Dt),l.updateRenderState({layers:[v]}),e.setPixelRatio(1),e.setSize(v.textureWidth,v.textureHeight,!1),C=new aa(v.textureWidth,v.textureHeight,{format:ia,type:Ni,depthTexture:new Wl(v.textureWidth,v.textureHeight,It,void 0,void 0,void 0,void 0,void 0,void 0,Rt),stencilBuffer:P.stencil,colorSpace:e.outputColorSpace,samples:P.antialias?4:0,resolveDepthBuffer:v.ignoreDepthValues===!1,resolveStencilBuffer:v.ignoreDepthValues===!1,storeMultisampledDepthBuffer:v.ignoreDepthValues===!1,storeMultisampledStencilBuffer:v.ignoreDepthValues===!1})}else{const Rt={antialias:P.antialias,alpha:!0,depth:P.depth,stencil:P.stencil,framebufferScaleFactor:c};y=new XRWebGLLayer(l,i,Rt),l.updateRenderState({baseLayer:y}),e.setPixelRatio(1),e.setSize(y.framebufferWidth,y.framebufferHeight,!1),C=new aa(y.framebufferWidth,y.framebufferHeight,{format:ia,type:Ni,colorSpace:e.outputColorSpace,stencilBuffer:P.stencil,resolveDepthBuffer:y.ignoreDepthValues===!1,resolveStencilBuffer:y.ignoreDepthValues===!1,storeMultisampledDepthBuffer:y.ignoreDepthValues===!1,storeMultisampledStencilBuffer:y.ignoreDepthValues===!1})}C.isXRRenderTarget=!0,this.setFoveation(p),m=null,h=await l.requestReferenceSpace(d),At.setContext(l),At.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return M.getDepthTexture()};function it($){for(let mt=0;mt<$.removed.length;mt++){const Rt=$.removed[mt],It=N.indexOf(Rt);It>=0&&(N[It]=null,U[It].disconnect(Rt))}for(let mt=0;mt<$.added.length;mt++){const Rt=$.added[mt];let It=N.indexOf(Rt);if(It===-1){for(let Dt=0;Dt<U.length;Dt++)if(Dt>=N.length){N.push(Rt),It=Dt;break}else if(N[Dt]===null){N[Dt]=Rt,It=Dt;break}if(It===-1)break}const xt=U[It];xt&&xt.connect(Rt)}}const rt=new lt,ht=new lt;function vt($,mt,Rt){rt.setFromMatrixPosition(mt.matrixWorld),ht.setFromMatrixPosition(Rt.matrixWorld);const It=rt.distanceTo(ht),xt=mt.projectionMatrix.elements,Dt=Rt.projectionMatrix.elements,Le=xt[14]/(xt[10]-1),ce=xt[14]/(xt[10]+1),ve=(xt[9]+1)/xt[5],Me=(xt[9]-1)/xt[5],ae=(xt[8]-1)/xt[0],se=(Dt[8]+1)/Dt[0],Xe=Le*ae,_n=Le*se,ze=It/(-ae+se),nn=ze*-ae;if(mt.matrixWorld.decompose($.position,$.quaternion,$.scale),$.translateX(nn),$.translateZ(ze),$.matrixWorld.compose($.position,$.quaternion,$.scale),$.matrixWorldInverse.copy($.matrixWorld).invert(),xt[10]===-1)$.projectionMatrix.copy(mt.projectionMatrix),$.projectionMatrixInverse.copy(mt.projectionMatrixInverse);else{const j=Le+ze,un=ce+ze,Be=Xe-nn,I=_n+(It-nn),E=ve*ce/un*j,at=Me*ce/un*j;$.projectionMatrix.makePerspective(Be,I,E,at,j,un),$.projectionMatrixInverse.copy($.projectionMatrix).invert()}}function Gt($,mt){mt===null?$.matrixWorld.copy($.matrix):$.matrixWorld.multiplyMatrices(mt.matrixWorld,$.matrix),$.matrixWorldInverse.copy($.matrixWorld).invert()}this.updateCamera=function($){if(l===null)return;let mt=$.near,Rt=$.far;M.texture!==null&&(M.depthNear>0&&(mt=M.depthNear),M.depthFar>0&&(Rt=M.depthFar)),Q.near=O.near=V.near=mt,Q.far=O.far=V.far=Rt,(G!==Q.near||K!==Q.far)&&(l.updateRenderState({depthNear:Q.near,depthFar:Q.far}),G=Q.near,K=Q.far),Q.layers.mask=$.layers.mask|6,V.layers.mask=Q.layers.mask&-5,O.layers.mask=Q.layers.mask&-3;const It=$.parent,xt=Q.cameras;Gt(Q,It);for(let Dt=0;Dt<xt.length;Dt++)Gt(xt[Dt],It);xt.length===2?vt(Q,V,O):Q.projectionMatrix.copy(V.projectionMatrix),D===null&&$.isPerspectiveCamera&&(D={camera:$,fov:$.fov,zoom:$.zoom}),qt($,Q,It)};function qt($,mt,Rt){Rt===null?$.matrix.copy(mt.matrixWorld):($.matrix.copy(Rt.matrixWorld),$.matrix.invert(),$.matrix.multiply(mt.matrixWorld)),$.matrix.decompose($.position,$.quaternion,$.scale),$.updateMatrixWorld(!0),$.projectionMatrix.copy(mt.projectionMatrix),$.projectionMatrixInverse.copy(mt.projectionMatrixInverse),$.isPerspectiveCamera&&($.fov=dm*2*Math.atan(1/$.projectionMatrix.elements[5]),$.zoom=1)}this.getCamera=function(){return Q},this.getFoveation=function(){if(!(v===null&&y===null))return p},this.setFoveation=function($){p=$,v!==null&&(v.fixedFoveation=$),y!==null&&y.fixedFoveation!==void 0&&(y.fixedFoveation=$)},this.hasDepthSensing=function(){return M.texture!==null},this.getDepthSensingMesh=function(){return M.getMesh(Q)},this.getCameraTexture=function($){return S[$]};let B=null;function pt($,mt){if(x=mt.getViewerPose(m||h),T=mt,x!==null){const Rt=x.views;y!==null&&(e.setRenderTargetFramebuffer(C,y.framebuffer),e.setRenderTarget(C));let It=!1;Rt.length!==Q.cameras.length&&(Q.cameras.length=0,It=!0);for(let ce=0;ce<Rt.length;ce++){const ve=Rt[ce];let Me=null;if(y!==null)Me=y.getViewport(ve);else{const se=g.getViewSubImage(v,ve);Me=se.viewport,ce===0&&(e.setRenderTargetTextures(C,se.colorTexture,se.depthStencilTexture),e.setRenderTarget(C))}let ae=H[ce];ae===void 0&&(ae=new Wi,ae.layers.enable(ce),ae.viewport=new gn,H[ce]=ae),ae.matrix.fromArray(ve.transform.matrix),ae.matrix.decompose(ae.position,ae.quaternion,ae.scale),ae.projectionMatrix.fromArray(ve.projectionMatrix),ae.projectionMatrixInverse.copy(ae.projectionMatrix).invert(),ae.viewport.set(Me.x,Me.y,Me.width,Me.height),ce===0&&(Q.matrix.copy(ae.matrix),Q.matrix.decompose(Q.position,Q.quaternion,Q.scale)),It===!0&&Q.cameras.push(ae)}const xt=l.enabledFeatures;if(xt&&xt.includes("depth-sensing")&&l.depthUsage=="gpu-optimized"&&w){g=r.getBinding();const ce=g.getDepthInformation(Rt[0]);ce&&ce.isValid&&ce.texture&&M.init(ce,l.renderState)}if(xt&&xt.includes("camera-access")&&w){e.state.unbindTexture(),g=r.getBinding();for(let ce=0;ce<Rt.length;ce++){const ve=Rt[ce].camera;if(ve){let Me=S[ve];Me||(Me=new KS,S[ve]=Me);const ae=g.getCameraImage(ve);Me.sourceTexture=ae}}}}for(let Rt=0;Rt<U.length;Rt++){const It=N[Rt],xt=U[Rt];It!==null&&xt!==void 0&&xt.update(It,mt,m||h)}B&&B($,mt),mt.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:mt}),T=null}const At=new ty;At.setAnimationLoop(pt),this.setAnimationLoop=function($){B=$},this.dispose=function(){}}}const IC=new dn,oy=new _e;oy.set(-1,0,0,0,1,0,0,0,1);function zC(o,e){function i(M,S){M.matrixAutoUpdate===!0&&M.updateMatrix(),S.value.copy(M.matrix)}function r(M,S){S.color.getRGB(M.fogColor.value,QS(o)),S.isFog?(M.fogNear.value=S.near,M.fogFar.value=S.far):S.isFogExp2&&(M.fogDensity.value=S.density)}function l(M,S,P,F,C){S.isNodeMaterial?S.uniformsNeedUpdate=!1:S.isMeshBasicMaterial?c(M,S):S.isMeshLambertMaterial?(c(M,S),S.envMap&&(M.envMapIntensity.value=S.envMapIntensity)):S.isMeshToonMaterial?(c(M,S),g(M,S)):S.isMeshPhongMaterial?(c(M,S),x(M,S),S.envMap&&(M.envMapIntensity.value=S.envMapIntensity)):S.isMeshStandardMaterial?(c(M,S),v(M,S),S.isMeshPhysicalMaterial&&y(M,S,C)):S.isMeshMatcapMaterial?(c(M,S),T(M,S)):S.isMeshDepthMaterial?c(M,S):S.isMeshDistanceMaterial?(c(M,S),w(M,S)):S.isMeshNormalMaterial?c(M,S):S.isLineBasicMaterial?(h(M,S),S.isLineDashedMaterial&&d(M,S)):S.isPointsMaterial?p(M,S,P,F):S.isSpriteMaterial?m(M,S):S.isShadowMaterial?(M.color.value.copy(S.color),M.opacity.value=S.opacity):S.isShaderMaterial&&(S.uniformsNeedUpdate=!1)}function c(M,S){M.opacity.value=S.opacity,S.color&&M.diffuse.value.copy(S.color),S.emissive&&M.emissive.value.copy(S.emissive).multiplyScalar(S.emissiveIntensity),S.map&&(M.map.value=S.map,i(S.map,M.mapTransform)),S.alphaMap&&(M.alphaMap.value=S.alphaMap,i(S.alphaMap,M.alphaMapTransform)),S.bumpMap&&(M.bumpMap.value=S.bumpMap,i(S.bumpMap,M.bumpMapTransform),M.bumpScale.value=S.bumpScale,S.side===vi&&(M.bumpScale.value*=-1)),S.normalMap&&(M.normalMap.value=S.normalMap,i(S.normalMap,M.normalMapTransform),M.normalScale.value.copy(S.normalScale),S.side===vi&&M.normalScale.value.negate()),S.displacementMap&&(M.displacementMap.value=S.displacementMap,i(S.displacementMap,M.displacementMapTransform),M.displacementScale.value=S.displacementScale,M.displacementBias.value=S.displacementBias),S.emissiveMap&&(M.emissiveMap.value=S.emissiveMap,i(S.emissiveMap,M.emissiveMapTransform)),S.specularMap&&(M.specularMap.value=S.specularMap,i(S.specularMap,M.specularMapTransform)),S.alphaTest>0&&(M.alphaTest.value=S.alphaTest);const P=e.get(S),F=P.envMap,C=P.envMapRotation;F&&(M.envMap.value=F,M.envMapRotation.value.setFromMatrix4(IC.makeRotationFromEuler(C)).transpose(),F.isCubeTexture&&F.isRenderTargetTexture===!1&&M.envMapRotation.value.premultiply(oy),M.reflectivity.value=S.reflectivity,M.ior.value=S.ior,M.refractionRatio.value=S.refractionRatio),S.lightMap&&(M.lightMap.value=S.lightMap,M.lightMapIntensity.value=S.lightMapIntensity,i(S.lightMap,M.lightMapTransform)),S.aoMap&&(M.aoMap.value=S.aoMap,M.aoMapIntensity.value=S.aoMapIntensity,i(S.aoMap,M.aoMapTransform))}function h(M,S){M.diffuse.value.copy(S.color),M.opacity.value=S.opacity,S.map&&(M.map.value=S.map,i(S.map,M.mapTransform))}function d(M,S){M.dashSize.value=S.dashSize,M.totalSize.value=S.dashSize+S.gapSize,M.scale.value=S.scale}function p(M,S,P,F){M.diffuse.value.copy(S.color),M.opacity.value=S.opacity,M.size.value=S.size*P,M.scale.value=F*.5,S.map&&(M.map.value=S.map,i(S.map,M.uvTransform)),S.alphaMap&&(M.alphaMap.value=S.alphaMap,i(S.alphaMap,M.alphaMapTransform)),S.alphaTest>0&&(M.alphaTest.value=S.alphaTest)}function m(M,S){M.diffuse.value.copy(S.color),M.opacity.value=S.opacity,M.rotation.value=S.rotation,S.map&&(M.map.value=S.map,i(S.map,M.mapTransform)),S.alphaMap&&(M.alphaMap.value=S.alphaMap,i(S.alphaMap,M.alphaMapTransform)),S.alphaTest>0&&(M.alphaTest.value=S.alphaTest)}function x(M,S){M.specular.value.copy(S.specular),M.shininess.value=Math.max(S.shininess,1e-4)}function g(M,S){S.gradientMap&&(M.gradientMap.value=S.gradientMap)}function v(M,S){M.metalness.value=S.metalness,S.metalnessMap&&(M.metalnessMap.value=S.metalnessMap,i(S.metalnessMap,M.metalnessMapTransform)),M.roughness.value=S.roughness,S.roughnessMap&&(M.roughnessMap.value=S.roughnessMap,i(S.roughnessMap,M.roughnessMapTransform)),S.envMap&&(M.envMapIntensity.value=S.envMapIntensity)}function y(M,S,P){M.ior.value=S.ior,S.sheen>0&&(M.sheenColor.value.copy(S.sheenColor).multiplyScalar(S.sheen),M.sheenRoughness.value=S.sheenRoughness,S.sheenColorMap&&(M.sheenColorMap.value=S.sheenColorMap,i(S.sheenColorMap,M.sheenColorMapTransform)),S.sheenRoughnessMap&&(M.sheenRoughnessMap.value=S.sheenRoughnessMap,i(S.sheenRoughnessMap,M.sheenRoughnessMapTransform))),S.clearcoat>0&&(M.clearcoat.value=S.clearcoat,M.clearcoatRoughness.value=S.clearcoatRoughness,S.clearcoatMap&&(M.clearcoatMap.value=S.clearcoatMap,i(S.clearcoatMap,M.clearcoatMapTransform)),S.clearcoatRoughnessMap&&(M.clearcoatRoughnessMap.value=S.clearcoatRoughnessMap,i(S.clearcoatRoughnessMap,M.clearcoatRoughnessMapTransform)),S.clearcoatNormalMap&&(M.clearcoatNormalMap.value=S.clearcoatNormalMap,i(S.clearcoatNormalMap,M.clearcoatNormalMapTransform),M.clearcoatNormalScale.value.copy(S.clearcoatNormalScale),S.side===vi&&M.clearcoatNormalScale.value.negate())),S.dispersion>0&&(M.dispersion.value=S.dispersion),S.retroreflectivity>0&&(M.retroreflectivity.value=S.retroreflectivity),S.iridescence>0&&(M.iridescence.value=S.iridescence,M.iridescenceIOR.value=S.iridescenceIOR,M.iridescenceThicknessMinimum.value=S.iridescenceThicknessRange[0],M.iridescenceThicknessMaximum.value=S.iridescenceThicknessRange[1],S.iridescenceMap&&(M.iridescenceMap.value=S.iridescenceMap,i(S.iridescenceMap,M.iridescenceMapTransform)),S.iridescenceThicknessMap&&(M.iridescenceThicknessMap.value=S.iridescenceThicknessMap,i(S.iridescenceThicknessMap,M.iridescenceThicknessMapTransform))),S.transmission>0&&(M.transmission.value=S.transmission,M.transmissionSamplerMap.value=P.texture,M.transmissionSamplerSize.value.set(P.width,P.height),S.transmissionMap&&(M.transmissionMap.value=S.transmissionMap,i(S.transmissionMap,M.transmissionMapTransform)),M.thickness.value=S.thickness,S.thicknessMap&&(M.thicknessMap.value=S.thicknessMap,i(S.thicknessMap,M.thicknessMapTransform)),M.attenuationDistance.value=S.attenuationDistance,M.attenuationColor.value.copy(S.attenuationColor)),S.anisotropy>0&&(M.anisotropyVector.value.set(S.anisotropy*Math.cos(S.anisotropyRotation),S.anisotropy*Math.sin(S.anisotropyRotation)),S.anisotropyMap&&(M.anisotropyMap.value=S.anisotropyMap,i(S.anisotropyMap,M.anisotropyMapTransform))),M.specularIntensity.value=S.specularIntensity,M.specularColor.value.copy(S.specularColor),S.specularColorMap&&(M.specularColorMap.value=S.specularColorMap,i(S.specularColorMap,M.specularColorMapTransform)),S.specularIntensityMap&&(M.specularIntensityMap.value=S.specularIntensityMap,i(S.specularIntensityMap,M.specularIntensityMapTransform))}function T(M,S){S.matcap&&(M.matcap.value=S.matcap)}function w(M,S){const P=e.get(S).light;M.referencePosition.value.setFromMatrixPosition(P.matrixWorld),M.nearDistance.value=P.shadow.camera.near,M.farDistance.value=P.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:l}}function BC(o,e,i,r){let l={},c={},h=[];const d=o.getParameter(o.MAX_UNIFORM_BUFFER_BINDINGS);function p(C,U){const N=U.program;r.uniformBlockBinding(C,N)}function m(C,U){let N=l[C.id];N===void 0&&(M(C),N=x(C),l[C.id]=N,C.addEventListener("dispose",P));const L=U.program;r.updateUBOMapping(C,L);const b=e.render.frame;c[C.id]!==b&&(v(C),c[C.id]=b)}function x(C){const U=g();C.__bindingPointIndex=U;const N=o.createBuffer(),L=C.__size,b=C.usage;return o.bindBuffer(o.UNIFORM_BUFFER,N),o.bufferData(o.UNIFORM_BUFFER,L,b),o.bindBuffer(o.UNIFORM_BUFFER,null),o.bindBufferBase(o.UNIFORM_BUFFER,U,N),N}function g(){for(let C=0;C<d;C++)if(h.indexOf(C)===-1)return h.push(C),C;return ke("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function v(C){const U=l[C.id],N=C.uniforms,L=C.__cache;o.bindBuffer(o.UNIFORM_BUFFER,U);for(let b=0,D=N.length;b<D;b++){const V=N[b];if(Array.isArray(V))for(let O=0,H=V.length;O<H;O++)y(V[O],b,O,L);else y(V,b,0,L)}o.bindBuffer(o.UNIFORM_BUFFER,null)}function y(C,U,N,L){if(w(C,U,N,L)===!0){const b=C.__offset,D=C.value;if(Array.isArray(D)){let V=0;for(let O=0;O<D.length;O++){const H=D[O],Q=S(H);T(H,C.__data,V),typeof H!="number"&&typeof H!="boolean"&&!H.isMatrix3&&!ArrayBuffer.isView(H)&&(V+=Q.storage/Float32Array.BYTES_PER_ELEMENT)}}else T(D,C.__data,0);o.bufferSubData(o.UNIFORM_BUFFER,b,C.__data)}}function T(C,U,N){typeof C=="number"||typeof C=="boolean"?U[0]=C:C.isMatrix3?(U[0]=C.elements[0],U[1]=C.elements[1],U[2]=C.elements[2],U[3]=0,U[4]=C.elements[3],U[5]=C.elements[4],U[6]=C.elements[5],U[7]=0,U[8]=C.elements[6],U[9]=C.elements[7],U[10]=C.elements[8],U[11]=0):ArrayBuffer.isView(C)?U.set(new C.constructor(C.buffer,C.byteOffset,U.length)):C.toArray(U,N)}function w(C,U,N,L){const b=C.value,D=U+"_"+N;if(L[D]===void 0)return typeof b=="number"||typeof b=="boolean"?L[D]=b:ArrayBuffer.isView(b)?L[D]=b.slice():L[D]=b.clone(),!0;{const V=L[D];if(typeof b=="number"||typeof b=="boolean"){if(V!==b)return L[D]=b,!0}else{if(ArrayBuffer.isView(b))return!0;if(V.equals(b)===!1)return V.copy(b),!0}}return!1}function M(C){const U=C.uniforms;let N=0;const L=16;for(let D=0,V=U.length;D<V;D++){const O=Array.isArray(U[D])?U[D]:[U[D]];for(let H=0,Q=O.length;H<Q;H++){const G=O[H],K=Array.isArray(G.value)?G.value:[G.value];for(let k=0,q=K.length;k<q;k++){const it=K[k],rt=S(it),ht=N%L,vt=ht%rt.boundary,Gt=ht+vt;N+=vt,Gt!==0&&L-Gt<rt.storage&&(N+=L-Gt),G.__data=new Float32Array(rt.storage/Float32Array.BYTES_PER_ELEMENT),G.__offset=N,N+=rt.storage}}}const b=N%L;return b>0&&(N+=L-b),C.__size=N,C.__cache={},this}function S(C){const U={boundary:0,storage:0};return typeof C=="number"||typeof C=="boolean"?(U.boundary=4,U.storage=4):C.isVector2?(U.boundary=8,U.storage=8):C.isVector3||C.isColor?(U.boundary=16,U.storage=12):C.isVector4?(U.boundary=16,U.storage=16):C.isMatrix3?(U.boundary=48,U.storage=48):C.isMatrix4?(U.boundary=64,U.storage=64):C.isTexture?he("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(C)?(U.boundary=16,U.storage=C.byteLength):he("WebGLRenderer: Unsupported uniform value type.",C),U}function P(C){const U=C.target;U.removeEventListener("dispose",P);const N=h.indexOf(U.__bindingPointIndex);h.splice(N,1),o.deleteBuffer(l[U.id]),delete l[U.id],delete c[U.id]}function F(){for(const C in l)o.deleteBuffer(l[C]);h=[],l={},c={}}return{bind:p,update:m,dispose:F}}const FC=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let ya=null;function HC(){return ya===null&&(ya=new yT(FC,16,16,Ss,Ra),ya.name="DFG_LUT",ya.minFilter=$n,ya.magFilter=$n,ya.wrapS=$a,ya.wrapT=$a,ya.generateMipmaps=!1,ya.needsUpdate=!0),ya}class GC{constructor(e={}){const{canvas:i=jb(),context:r=null,depth:l=!0,stencil:c=!1,alpha:h=!1,antialias:d=!1,premultipliedAlpha:p=!0,preserveDrawingBuffer:m=!1,powerPreference:x="default",failIfMajorPerformanceCaveat:g=!1,reversedDepthBuffer:v=!1,outputBufferType:y=Ni}=e;this.isWebGLRenderer=!0;let T;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");T=r.getContextAttributes().alpha}else T=h;const w=y,M=new Set([Cm,wm,Rm]),S=new Set([Ni,Aa,Vl,kl,Tm,Am]),P=new Uint32Array(4),F=new Int32Array(4),C=new lt;let U=null,N=null;const L=[],b=[];let D=null;this.domElement=i,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Ta,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const V=this;let O=!1,H=null,Q=null,G=null,K=null;this._outputColorSpace=Xi;let k=0,q=0,it=null,rt=-1,ht=null;const vt=new gn,Gt=new gn;let qt=null;const B=new Re(0);let pt=0,At=i.width,$=i.height,mt=1,Rt=null,It=null;const xt=new gn(0,0,At,$),Dt=new gn(0,0,At,$);let Le=!1;const ce=new Om;let ve=!1,Me=!1;const ae=new dn,se=new lt,Xe=new gn,_n={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ze=!1;function nn(){return it===null?mt:1}let j=r;function un(A,W){return i.getContext(A,W)}let Be,I,E,at,st,_t,Ct,Ot,St,Et,Lt,ne,zt,Pt,Vt,ie,le,Z,Nt,yt,Ut,kt,Tt;try{const A={alpha:!0,depth:l,stencil:c,antialias:d,premultipliedAlpha:p,preserveDrawingBuffer:m,powerPreference:x,failIfMajorPerformanceCaveat:g};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${Em}`),i.addEventListener("webglcontextlost",we,!1),i.addEventListener("webglcontextrestored",de,!1),i.addEventListener("webglcontextcreationerror",ti,!1),j===null){const W="webgl2";if(j=un(W,A),j===null)throw un(W)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}$t()}catch(A){throw i.removeEventListener("webglcontextlost",we,!1),i.removeEventListener("webglcontextrestored",de,!1),i.removeEventListener("webglcontextcreationerror",ti,!1),ke("WebGLRenderer: "+A.message),A}function $t(){Be=new HR(j),Be.init(),Ut=new NC(j,Be),I=new DR(j,Be,e,Ut),E=new CC(j,Be),I.reversedDepthBuffer&&v&&E.buffers.depth.setReversed(!0),Q=j.createFramebuffer(),G=j.createFramebuffer(),K=j.createFramebuffer(),at=new kR(j),st=new mC,_t=new DC(j,Be,E,st,I,Ut,at),Ct=new FR(V),Ot=new WT(j),kt=new wR(j,Ot),St=new GR(j,Ot,at,kt),Et=new WR(j,St,Ot,kt,at),Z=new XR(j,I,_t),Vt=new NR(st),Lt=new pC(V,Ct,Be,I,kt,Vt),ne=new zC(V,st),zt=new _C,Pt=new EC(Be),le=new RR(V,Ct,E,Et,T,p),ie=new wC(V,Et,I),Tt=new BC(j,at,I,E),Nt=new CR(j,Be,at),yt=new VR(j,Be,at),at.programs=Lt.programs,V.capabilities=I,V.extensions=Be,V.properties=st,V.renderLists=zt,V.shadowMap=ie,V.state=E,V.info=at}w!==Ni&&(D=new qR(w,i.width,i.height,d,l,c));const Ht=new PC(V,j);this.xr=Ht,this.getContext=function(){return j},this.getContextAttributes=function(){return j.getContextAttributes()},this.forceContextLoss=function(){const A=Be.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=Be.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return mt},this.setPixelRatio=function(A){A!==void 0&&(mt=A,this.setSize(At,$,!1))},this.getSize=function(A){return A.set(At,$)},this.setSize=function(A,W,gt=!0){if(Ht.isPresenting){he("WebGLRenderer: Can't change size while VR device is presenting.");return}At=A,$=W,i.width=Math.floor(A*mt),i.height=Math.floor(W*mt),gt===!0&&(i.style.width=A+"px",i.style.height=W+"px"),D!==null&&D.setSize(i.width,i.height),this.setViewport(0,0,A,W)},this.getDrawingBufferSize=function(A){return A.set(At*mt,$*mt).floor()},this.setDrawingBufferSize=function(A,W,gt){At=A,$=W,mt=gt,i.width=Math.floor(A*gt),i.height=Math.floor(W*gt),this.setViewport(0,0,A,W)},this.setEffects=function(A){if(w===Ni){ke("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(A){for(let W=0;W<A.length;W++)if(A[W].isOutputPass===!0){he("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}D.setEffects(A||[])},this.getCurrentViewport=function(A){return A.copy(vt)},this.getViewport=function(A){return A.copy(xt)},this.setViewport=function(A,W,gt,ut){A.isVector4?xt.set(A.x,A.y,A.z,A.w):xt.set(A,W,gt,ut),E.viewport(vt.copy(xt).multiplyScalar(mt).round())},this.getScissor=function(A){return A.copy(Dt)},this.setScissor=function(A,W,gt,ut){A.isVector4?Dt.set(A.x,A.y,A.z,A.w):Dt.set(A,W,gt,ut),E.scissor(Gt.copy(Dt).multiplyScalar(mt).round())},this.getScissorTest=function(){return Le},this.setScissorTest=function(A){E.setScissorTest(Le=A)},this.setOpaqueSort=function(A){Rt=A},this.setTransparentSort=function(A){It=A},this.getClearColor=function(A){return A.copy(le.getClearColor())},this.setClearColor=function(){le.setClearColor(...arguments)},this.getClearAlpha=function(){return le.getClearAlpha()},this.setClearAlpha=function(){le.setClearAlpha(...arguments)},this.clear=function(A=!0,W=!0,gt=!0){let ut=0;if(A){let ct=!1;if(it!==null){const Xt=it.texture.format;ct=M.has(Xt)}if(ct){const Xt=it.texture.type,jt=S.has(Xt),Bt=le.getClearColor(),Jt=le.getClearAlpha(),te=Bt.r,fe=Bt.g,ge=Bt.b;jt?(P[0]=te,P[1]=fe,P[2]=ge,P[3]=Jt,j.clearBufferuiv(j.COLOR,0,P)):(F[0]=te,F[1]=fe,F[2]=ge,F[3]=Jt,j.clearBufferiv(j.COLOR,0,F))}else ut|=j.COLOR_BUFFER_BIT}W&&(ut|=j.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),gt&&(ut|=j.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),ut!==0&&j.clear(ut)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(A){A.setRenderer(this),H=A},this.dispose=function(){i.removeEventListener("webglcontextlost",we,!1),i.removeEventListener("webglcontextrestored",de,!1),i.removeEventListener("webglcontextcreationerror",ti,!1),le.dispose(),zt.dispose(),Pt.dispose(),st.dispose(),Ct.dispose(),Et.dispose(),kt.dispose(),Tt.dispose(),Lt.dispose(),Ht.dispose(),Ht.removeEventListener("sessionstart",Ee),Ht.removeEventListener("sessionend",cn),an.stop()};function we(A){A.preventDefault(),dx("WebGLRenderer: Context Lost."),O=!0}function de(){dx("WebGLRenderer: Context Restored."),O=!1;const A=at.autoReset,W=ie.enabled,gt=ie.autoUpdate,ut=ie.needsUpdate,ct=ie.type;$t(),at.autoReset=A,ie.enabled=W,ie.autoUpdate=gt,ie.needsUpdate=ut,ie.type=ct}function ti(A){ke("WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function Zn(A){const W=A.target;W.removeEventListener("dispose",Zn),Ca(W)}function Ca(A){X(A),st.remove(A)}function X(A){const W=st.get(A).programs;W!==void 0&&(W.forEach(function(gt){Lt.releaseProgram(gt)}),A.isShaderMaterial&&Lt.releaseShaderCache(A))}this.renderBufferDirect=function(A,W,gt,ut,ct,Xt){W===null&&(W=_n);const jt=ct.isMesh&&ct.matrixWorld.determinantAffine()<0,Bt=jn(A,W,gt,ut,ct);E.setMaterial(ut,jt);let Jt=gt.index,te=1;if(ut.wireframe===!0){if(Jt=St.getWireframeAttribute(gt),Jt===void 0)return;te=2}const fe=gt.drawRange,ge=gt.attributes.position;let Kt=fe.start*te,Ce=(fe.start+fe.count)*te;Xt!==null&&(Kt=Math.max(Kt,Xt.start*te),Ce=Math.min(Ce,(Xt.start+Xt.count)*te)),Jt!==null?(Kt=Math.max(Kt,0),Ce=Math.min(Ce,Jt.count)):ge!=null&&(Kt=Math.max(Kt,0),Ce=Math.min(Ce,ge.count));const be=Ce-Kt;if(be<0||be===1/0)return;kt.setup(ct,ut,Bt,gt,Jt);let tn,qe=Nt;if(Jt!==null&&(tn=Ot.get(Jt),qe=yt,qe.setIndex(tn)),ct.isMesh)ut.wireframe===!0?(E.setLineWidth(ut.wireframeLinewidth*nn()),qe.setMode(j.LINES)):qe.setMode(j.TRIANGLES);else if(ct.isLine){let Cn=ut.linewidth;Cn===void 0&&(Cn=1),E.setLineWidth(Cn*nn()),ct.isLineSegments?qe.setMode(j.LINES):ct.isLineLoop?qe.setMode(j.LINE_LOOP):qe.setMode(j.LINE_STRIP)}else ct.isPoints?qe.setMode(j.POINTS):ct.isSprite&&qe.setMode(j.TRIANGLES);if(ct.isBatchedMesh)if(Be.get("WEBGL_multi_draw"))qe.renderMultiDraw(ct._multiDrawStarts,ct._multiDrawCounts,ct._multiDrawCount);else{const Cn=ct._multiDrawStarts,Wt=ct._multiDrawCounts,vn=ct._multiDrawCount,Fe=Jt?Ot.get(Jt).bytesPerElement:1,ei=st.get(ut).currentProgram.getUniforms();for(let Si=0;Si<vn;Si++)ei.setValue(j,"_gl_DrawID",Si),qe.render(Cn[Si]/Fe,Wt[Si])}else if(ct.isInstancedMesh)qe.renderInstances(Kt,be,ct.count);else if(gt.isInstancedBufferGeometry){const Cn=gt._maxInstanceCount!==void 0?gt._maxInstanceCount:1/0,Wt=Math.min(gt.instanceCount,Cn);qe.renderInstances(Kt,be,Wt)}else qe.render(Kt,be)};function wt(A,W,gt,ut){H!==null&&A.isNodeMaterial&&H.setObject(ut,A),ve===!0&&Vt.setState(A,gt,!1),A.transparent===!0&&A.side===Ja&&A.forceSinglePass===!1?(A.side=vi,A.needsUpdate=!0,sa(A,W,ut),A.side=vs,A.needsUpdate=!0,sa(A,W,ut),A.side=Ja):sa(A,W,ut)}this.compile=function(A,W,gt=null){gt===null&&(gt=A),H!==null&&H.renderStart(A,W,gt),N=Pt.get(gt),N.init(W),b.push(N),gt.traverseVisible(function(ct){ct.isLight&&ct.layers.test(W.layers)&&(N.pushLight(ct),ct.castShadow&&N.pushShadow(ct))}),A!==gt&&A.traverseVisible(function(ct){ct.isLight&&ct.layers.test(W.layers)&&(N.pushLight(ct),ct.castShadow&&N.pushShadow(ct))}),N.setupLights(),H!==null&&H.updateLights(N.state.lightsArray),Me=this.localClippingEnabled,ve=Vt.init(this.clippingPlanes,Me),ve===!0&&Vt.setGlobalState(this.clippingPlanes,W),H!==null&&ie.render(N.state.shadowsArray,gt,W);const ut=new Set;return A.traverse(function(ct){if(!(ct.isMesh||ct.isPoints||ct.isLine||ct.isSprite))return;const Xt=ct.material;if(Xt)if(Array.isArray(Xt))for(let jt=0;jt<Xt.length;jt++){const Bt=Xt[jt];wt(Bt,gt,W,ct),ut.add(Bt)}else wt(Xt,gt,W,ct),ut.add(Xt)}),N=b.pop(),H!==null&&H.renderEnd(),ut},this.compileAsync=function(A,W,gt=null){const ut=this.compile(A,W,gt);return new Promise(ct=>{function Xt(){if(ut.forEach(function(jt){const Jt=st.get(jt).currentProgram;(Jt===void 0||Jt.isReady())&&ut.delete(jt)}),ut.size===0){ct(A);return}setTimeout(Xt,10)}Be.get("KHR_parallel_shader_compile")!==null?Xt():setTimeout(Xt,10)})};let Zt=null;function Ge(A){Zt&&Zt(A)}function Ee(){an.stop()}function cn(){an.start()}const an=new ty;an.setAnimationLoop(Ge),typeof self<"u"&&an.setContext(self),this.setAnimationLoop=function(A){Zt=A,Ht.setAnimationLoop(A),A===null?an.stop():an.start()},Ht.addEventListener("sessionstart",Ee),Ht.addEventListener("sessionend",cn),this.render=function(A,W){if(W!==void 0&&W.isCamera!==!0){ke("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(O===!0)return;H!==null&&H.renderStart(A,W);const gt=Ht.enabled===!0&&Ht.isPresenting===!0,ut=D!==null&&(it===null||gt)&&D.begin(V,it);if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),W.parent===null&&W.matrixWorldAutoUpdate===!0&&W.updateMatrixWorld(),Ht.enabled===!0&&Ht.isPresenting===!0&&(D===null||D.isCompositing()===!1)&&(Ht.cameraAutoUpdate===!0&&Ht.updateCamera(W),W=Ht.getCamera()),A.isScene===!0&&A.onBeforeRender(V,A,W,it),N=Pt.get(A,b.length),N.init(W),N.state.textureUnits=_t.getTextureUnits(),b.push(N),ae.multiplyMatrices(W.projectionMatrix,W.matrixWorldInverse),ce.setFromProjectionMatrix(ae,ba,W.reversedDepth),Me=this.localClippingEnabled,ve=Vt.init(this.clippingPlanes,Me),U=zt.get(A,L.length),U.init(),L.push(U),Ht.enabled===!0&&Ht.isPresenting===!0){const jt=V.xr.getDepthSensingMesh();jt!==null&&ui(jt,W,-1/0,V.sortObjects)}ui(A,W,0,V.sortObjects),U.finish(),H!==null&&H.updateLights(N.state.lightsArray),V.sortObjects===!0&&U.sort(Rt,It),ze=Ht.enabled===!1||Ht.isPresenting===!1||Ht.hasDepthSensing()===!1,ze&&le.addToRenderList(U,A),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),ve===!0&&Vt.beginShadows();const ct=N.state.shadowsArray;if(ie.render(ct,A,W),ve===!0&&Vt.endShadows(),(ut&&D.hasRenderPass())===!1){const jt=U.opaque,Bt=U.transmissive;if(N.setupLights(),W.isArrayCamera){const Jt=W.cameras;if(Bt.length>0)for(let te=0,fe=Jt.length;te<fe;te++){const ge=Jt[te];wn(jt,Bt,A,ge)}ze&&le.render(A);for(let te=0,fe=Jt.length;te<fe;te++){const ge=Jt[te];pn(U,A,ge,ge.viewport)}}else Bt.length>0&&wn(jt,Bt,A,W),ze&&le.render(A),pn(U,A,W)}it!==null&&q===0&&(_t.updateMultisampleRenderTarget(it),_t.updateRenderTargetMipmap(it)),ut&&D.end(V),A.isScene===!0&&A.onAfterRender(V,A,W),kt.resetDefaultState(),rt=-1,ht=null,b.pop(),b.length>0?(N=b[b.length-1],_t.setTextureUnits(N.state.textureUnits),ve===!0&&Vt.setGlobalState(V.clippingPlanes,N.state.camera)):N=null,L.pop(),L.length>0?U=L[L.length-1]:U=null,H!==null&&H.renderEnd()};function ui(A,W,gt,ut){if(A.visible===!1)return;if(A.layers.test(W.layers)){if(A.isGroup)gt=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(W);else if(A.isLightProbeGrid)N.pushLightProbeGrid(A);else if(A.isLight)N.pushLight(A),A.castShadow&&N.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||A.intersectsFrustum(ce)){ut&&Xe.setFromMatrixPosition(A.matrixWorld).applyMatrix4(ae);const jt=Et.update(A),Bt=A.material;Bt.visible&&U.push(A,jt,Bt,gt,Xe.z,null,W)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||A.intersectsFrustum(ce))){const jt=Et.update(A),Bt=A.material;if(ut&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),Xe.copy(A.boundingSphere.center)):(jt.boundingSphere===null&&jt.computeBoundingSphere(),Xe.copy(jt.boundingSphere.center)),Xe.applyMatrix4(A.matrixWorld).applyMatrix4(ae)),Array.isArray(Bt)){const Jt=jt.groups;for(let te=0,fe=Jt.length;te<fe;te++){const ge=Jt[te],Kt=Bt[ge.materialIndex];Kt&&Kt.visible&&U.push(A,jt,Kt,gt,Xe.z,ge,W)}}else Bt.visible&&U.push(A,jt,Bt,gt,Xe.z,null,W)}}const Xt=A.children;for(let jt=0,Bt=Xt.length;jt<Bt;jt++)ui(Xt[jt],W,gt,ut)}function pn(A,W,gt,ut){const{opaque:ct,transmissive:Xt,transparent:jt}=A;N.setupLightsView(gt),ve===!0&&Vt.setGlobalState(V.clippingPlanes,gt),ut&&E.viewport(vt.copy(ut)),ct.length>0&&Fn(ct,W,gt),Xt.length>0&&Fn(Xt,W,gt),jt.length>0&&Fn(jt,W,gt),E.buffers.depth.setTest(!0),E.buffers.depth.setMask(!0),E.buffers.color.setMask(!0),E.setPolygonOffset(!1)}function wn(A,W,gt,ut){if((gt.isScene===!0?gt.overrideMaterial:null)!==null)return;if(N.state.transmissionRenderTarget[ut.id]===void 0){const Kt=Be.has("EXT_color_buffer_half_float")||Be.has("EXT_color_buffer_float");N.state.transmissionRenderTarget[ut.id]=new aa(1,1,{generateMipmaps:!0,type:Kt?Ra:Ni,minFilter:ms,samples:Math.max(4,I.samples),stencilBuffer:c,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:He.workingColorSpace})}const Xt=N.state.transmissionRenderTarget[ut.id],jt=ut.viewport||vt;Xt.setSize(jt.z*V.transmissionResolutionScale,jt.w*V.transmissionResolutionScale);const Bt=V.getRenderTarget(),Jt=V.getActiveCubeFace(),te=V.getActiveMipmapLevel();V.setRenderTarget(Xt),V.getClearColor(B),pt=V.getClearAlpha(),pt<1&&V.setClearColor(16777215,.5),V.clear(),ze&&le.render(gt);const fe=V.toneMapping;V.toneMapping=Ta;const ge=ut.viewport;if(ut.viewport!==void 0&&(ut.viewport=void 0),N.setupLightsView(ut),ve===!0&&Vt.setGlobalState(V.clippingPlanes,ut),Fn(A,gt,ut),_t.updateMultisampleRenderTarget(Xt),_t.updateRenderTargetMipmap(Xt),Be.has("WEBGL_multisampled_render_to_texture")===!1){let Kt=!1;for(let Ce=0,be=W.length;Ce<be;Ce++){const tn=W[Ce],{object:qe,geometry:Cn,material:Wt,group:vn}=tn;if(Wt.side===Ja&&qe.layers.test(ut.layers)){const Fe=Wt.side;Wt.side=vi,Wt.needsUpdate=!0,Da(qe,gt,ut,Cn,Wt,vn),Wt.side=Fe,Wt.needsUpdate=!0,Kt=!0}}Kt===!0&&(_t.updateMultisampleRenderTarget(Xt),_t.updateRenderTargetMipmap(Xt))}V.setRenderTarget(Bt,Jt,te),V.setClearColor(B,pt),ge!==void 0&&(ut.viewport=ge),V.toneMapping=fe}function Fn(A,W,gt){const ut=W.isScene===!0?W.overrideMaterial:null;for(let ct=0,Xt=A.length;ct<Xt;ct++){const jt=A[ct],{object:Bt,geometry:Jt,group:te}=jt;let fe=jt.material;fe.allowOverride===!0&&ut!==null&&(fe=ut),Bt.layers.test(gt.layers)&&Da(Bt,W,gt,Jt,fe,te)}}function Da(A,W,gt,ut,ct,Xt){H!==null&&ct.isNodeMaterial&&H.setObject(A,ct),A.onBeforeRender(V,W,gt,ut,ct,Xt),A.modelViewMatrix.multiplyMatrices(gt.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),ct.onBeforeRender(V,W,gt,ut,A,Xt),ct.transparent===!0&&ct.side===Ja&&ct.forceSinglePass===!1?(ct.side=vi,ct.needsUpdate=!0,V.renderBufferDirect(gt,W,ut,ct,A,Xt),ct.side=vs,ct.needsUpdate=!0,V.renderBufferDirect(gt,W,ut,ct,A,Xt),ct.side=Ja):V.renderBufferDirect(gt,W,ut,ct,A,Xt),A.onAfterRender(V,W,gt,ut,ct,Xt)}function sa(A,W,gt){W.isScene!==!0&&(W=_n);const ut=st.get(A),ct=N.state.lights,Xt=N.state.shadowsArray,jt=ct.state.version,Bt=Lt.getParameters(A,ct.state,Xt,W,gt,N.state.lightProbeGridArray),Jt=Lt.getProgramCacheKey(Bt);let te=ut.programs;ut.environment=A.isMeshStandardMaterial||A.isMeshLambertMaterial||A.isMeshPhongMaterial?W.environment:null,ut.fog=W.fog;const fe=A.isMeshStandardMaterial||A.isMeshLambertMaterial&&!A.envMap||A.isMeshPhongMaterial&&!A.envMap;ut.envMap=Ct.get(A.envMap||ut.environment,fe),ut.envMapRotation=ut.environment!==null&&A.envMap===null?W.environmentRotation:A.envMapRotation,te===void 0&&(A.addEventListener("dispose",Zn),te=new Map,ut.programs=te);let ge=te.get(Jt);if(ge!==void 0){if(ut.currentProgram===ge&&ut.lightsStateVersion===jt)return Gr(A,Bt),ge}else Bt.uniforms=Lt.getUniforms(A),H!==null&&A.isNodeMaterial&&H.build(A,gt,Bt),A.onBeforeCompile(Bt,V),ge=Lt.acquireProgram(Bt,Jt),te.set(Jt,ge),ut.uniforms=Bt.uniforms;const Kt=ut.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(Kt.clippingPlanes=Vt.uniform),Gr(A,Bt),ut.needsLights=Kl(A),ut.lightsStateVersion=jt,ut.needsLights&&(Kt.ambientLightColor.value=ct.state.ambient,Kt.lightProbe.value=ct.state.probe,Kt.sunLights.value=ct.state.sun,Kt.sunLightShadows.value=ct.state.sunShadow,Kt.directionalLights.value=ct.state.directional,Kt.directionalLightShadows.value=ct.state.directionalShadow,Kt.spotLights.value=ct.state.spot,Kt.spotLightShadows.value=ct.state.spotShadow,Kt.rectAreaLights.value=ct.state.rectArea,Kt.ltc_1.value=ct.state.rectAreaLTC1,Kt.ltc_2.value=ct.state.rectAreaLTC2,Kt.pointLights.value=ct.state.point,Kt.pointLightShadows.value=ct.state.pointShadow,Kt.hemisphereLights.value=ct.state.hemi,Kt.sunShadowMatrix.value=ct.state.sunShadowMatrix,Kt.sunShadowCascade.value=ct.state.sunShadowCascade,Kt.directionalShadowMatrix.value=ct.state.directionalShadowMatrix,Kt.spotLightMatrix.value=ct.state.spotLightMatrix,Kt.spotLightMap.value=ct.state.spotLightMap,Kt.pointShadowMatrix.value=ct.state.pointShadowMatrix),ut.lightProbeGrid=N.state.lightProbeGridArray.length>0,ut.currentProgram=ge,ut.uniformsList=null,ge}function oa(A){if(A.uniformsList===null){const W=A.currentProgram.getUniforms();A.uniformsList=Yc.seqWithValue(W.seq,A.uniforms)}return A.uniformsList}function Gr(A,W){const gt=st.get(A);gt.outputColorSpace=W.outputColorSpace,gt.batching=W.batching,gt.batchingColor=W.batchingColor,gt.instancing=W.instancing,gt.instancingColor=W.instancingColor,gt.instancingMorph=W.instancingMorph,gt.skinning=W.skinning,gt.morphTargets=W.morphTargets,gt.morphNormals=W.morphNormals,gt.morphColors=W.morphColors,gt.morphTargetsCount=W.morphTargetsCount,gt.numClippingPlanes=W.numClippingPlanes,gt.numIntersection=W.numClipIntersection,gt.vertexAlphas=W.vertexAlphas,gt.vertexTangents=W.vertexTangents,gt.toneMapping=W.toneMapping}function ci(A,W){if(A.length===0)return null;if(A.length===1)return A[0].texture!==null?A[0]:null;C.setFromMatrixPosition(W.matrixWorld);for(let gt=0,ut=A.length;gt<ut;gt++){const ct=A[gt];if(ct.texture!==null&&ct.boundingBox.containsPoint(C))return ct}return null}function jn(A,W,gt,ut,ct){W.isScene!==!0&&(W=_n),_t.resetTextureUnits();const Xt=W.fog,jt=ut.isMeshStandardMaterial||ut.isMeshLambertMaterial||ut.isMeshPhongMaterial?W.environment:null,Bt=it===null?V.outputColorSpace:it.isXRRenderTarget===!0?it.texture.colorSpace:He.workingColorSpace,Jt=ut.isMeshStandardMaterial||ut.isMeshLambertMaterial&&!ut.envMap||ut.isMeshPhongMaterial&&!ut.envMap,te=Ct.get(ut.envMap||jt,Jt),fe=ut.vertexColors===!0&&!!gt.attributes.color&&gt.attributes.color.itemSize===4,ge=!!gt.attributes.tangent&&(!!ut.normalMap||ut.anisotropy>0),Kt=!!gt.morphAttributes.position,Ce=!!gt.morphAttributes.normal,be=!!gt.morphAttributes.color;let tn=Ta;ut.toneMapped&&(it===null||it.isXRRenderTarget===!0)&&(tn=V.toneMapping);const qe=gt.morphAttributes.position||gt.morphAttributes.normal||gt.morphAttributes.color,Cn=qe!==void 0?qe.length:0,Wt=st.get(ut),vn=N.state.lights;if(ve===!0&&(Me===!0||A!==ht)){const Oe=A===ht&&ut.id===rt;Vt.setState(ut,A,Oe)}let Fe=!1;ut.version===Wt.__version?(Wt.needsLights&&Wt.lightsStateVersion!==vn.state.version||Wt.outputColorSpace!==Bt||ct.isBatchedMesh&&Wt.batching===!1||!ct.isBatchedMesh&&Wt.batching===!0||ct.isBatchedMesh&&Wt.batchingColor===!0&&ct._colorsTexture===null||ct.isBatchedMesh&&Wt.batchingColor===!1&&ct._colorsTexture!==null||ct.isInstancedMesh&&Wt.instancing===!1||!ct.isInstancedMesh&&Wt.instancing===!0||ct.isSkinnedMesh&&Wt.skinning===!1||!ct.isSkinnedMesh&&Wt.skinning===!0||ct.isInstancedMesh&&Wt.instancingColor===!0&&ct.instanceColor===null||ct.isInstancedMesh&&Wt.instancingColor===!1&&ct.instanceColor!==null||ct.isInstancedMesh&&Wt.instancingMorph===!0&&ct.morphTexture===null||ct.isInstancedMesh&&Wt.instancingMorph===!1&&ct.morphTexture!==null||Wt.envMap!==te||ut.fog===!0&&Wt.fog!==Xt||Wt.numClippingPlanes!==void 0&&(Wt.numClippingPlanes!==Vt.numPlanes||Wt.numIntersection!==Vt.numIntersection)||Wt.vertexAlphas!==fe||Wt.vertexTangents!==ge||Wt.morphTargets!==Kt||Wt.morphNormals!==Ce||Wt.morphColors!==be||Wt.toneMapping!==tn||Wt.morphTargetsCount!==Cn||!!Wt.lightProbeGrid!=N.state.lightProbeGridArray.length>0)&&(Fe=!0):(Fe=!0,Wt.__version=ut.version);let ei=Wt.currentProgram;Fe===!0&&(ei=sa(ut,W,ct),H&&ut.isNodeMaterial&&H.onUpdateProgram(ut,ei,Wt));let Si=!1,la=!1,Te=!1;const We=ei.getUniforms(),sn=Wt.uniforms;if(E.useProgram(ei.program)&&(Si=!0,la=!0,Te=!0),ut.id!==rt&&(rt=ut.id,la=!0),Wt.needsLights){const Oe=ci(N.state.lightProbeGridArray,ct);Wt.lightProbeGrid!==Oe&&(Wt.lightProbeGrid=Oe,la=!0)}if(Si||ht!==A){E.buffers.depth.getReversed()&&A.reversedDepth!==!0&&(A._reversedDepth=!0,A.updateProjectionMatrix()),We.setValue(j,"projectionMatrix",A.projectionMatrix),We.setValue(j,"viewMatrix",A.matrixWorldInverse);const xn=We.map.cameraPosition;xn!==void 0&&xn.setValue(j,se.setFromMatrixPosition(A.matrixWorld)),I.logarithmicDepthBuffer&&We.setValue(j,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(ut.isMeshPhongMaterial||ut.isMeshToonMaterial||ut.isMeshLambertMaterial||ut.isMeshBasicMaterial||ut.isMeshStandardMaterial||ut.isShaderMaterial)&&We.setValue(j,"isOrthographic",A.isOrthographicCamera===!0),ht!==A&&(ht=A,la=!0,Te=!0)}if(Wt.needsLights&&(vn.state.sunShadowMap.length>0&&We.setValue(j,"sunShadowMap",vn.state.sunShadowMap,_t),vn.state.directionalShadowMap.length>0&&We.setValue(j,"directionalShadowMap",vn.state.directionalShadowMap,_t),vn.state.spotShadowMap.length>0&&We.setValue(j,"spotShadowMap",vn.state.spotShadowMap,_t),vn.state.pointShadowMap.length>0&&We.setValue(j,"pointShadowMap",vn.state.pointShadowMap,_t)),ct.isSkinnedMesh){We.setOptional(j,ct,"bindMatrix"),We.setOptional(j,ct,"bindMatrixInverse");const Oe=ct.skeleton;Oe&&(Oe.boneTexture===null&&Oe.computeBoneTexture(),We.setValue(j,"boneTexture",Oe.boneTexture,_t))}ct.isBatchedMesh&&(We.setOptional(j,ct,"batchingTexture"),We.setValue(j,"batchingTexture",ct._matricesTexture,_t),We.setOptional(j,ct,"batchingIdTexture"),We.setValue(j,"batchingIdTexture",ct._indirectTexture,_t),We.setOptional(j,ct,"batchingColorTexture"),ct._colorsTexture!==null&&We.setValue(j,"batchingColorTexture",ct._colorsTexture,_t));const yi=gt.morphAttributes;if((yi.position!==void 0||yi.normal!==void 0||yi.color!==void 0)&&Z.update(ct,gt,ei),(la||Wt.receiveShadow!==ct.receiveShadow)&&(Wt.receiveShadow=ct.receiveShadow,We.setValue(j,"receiveShadow",ct.receiveShadow)),(ut.isMeshStandardMaterial||ut.isMeshLambertMaterial||ut.isMeshPhongMaterial)&&ut.envMap===null&&W.environment!==null&&(sn.envMapIntensity.value=W.environmentIntensity),sn.dfgLUT!==void 0&&(sn.dfgLUT.value=HC()),la){if(We.setValue(j,"toneMappingExposure",V.toneMappingExposure),Wt.needsLights&&jl(sn,Te),Xt&&ut.fog===!0&&ne.refreshFogUniforms(sn,Xt),ne.refreshMaterialUniforms(sn,ut,mt,$,N.state.transmissionRenderTarget[A.id]),Wt.needsLights&&Wt.lightProbeGrid){const Oe=Wt.lightProbeGrid;sn.probesSH.value=Oe.texture,sn.probesMin.value.copy(Oe.boundingBox.min),sn.probesMax.value.copy(Oe.boundingBox.max),sn.probesResolution.value.copy(Oe.resolution)}Yc.upload(j,oa(Wt),sn,_t)}if(ut.isShaderMaterial&&ut.uniformsNeedUpdate===!0&&(Yc.upload(j,oa(Wt),sn,_t),ut.uniformsNeedUpdate=!1),ut.isSpriteMaterial&&We.setValue(j,"center",ct.center),We.setValue(j,"modelViewMatrix",ct.modelViewMatrix),We.setValue(j,"normalMatrix",ct.normalMatrix),We.setValue(j,"modelMatrix",ct.matrixWorld),ut.uniformsGroups!==void 0){const Oe=ut.uniformsGroups;for(let xn=0,Na=Oe.length;xn<Na;xn++){const Ql=Oe[xn];Tt.update(Ql,ei),Tt.bind(Ql,ei)}}return ei}function jl(A,W){A.ambientLightColor.needsUpdate=W,A.lightProbe.needsUpdate=W,A.sunLights.needsUpdate=W,A.sunLightShadows.needsUpdate=W,A.directionalLights.needsUpdate=W,A.directionalLightShadows.needsUpdate=W,A.pointLights.needsUpdate=W,A.pointLightShadows.needsUpdate=W,A.spotLights.needsUpdate=W,A.spotLightShadows.needsUpdate=W,A.rectAreaLights.needsUpdate=W,A.hemisphereLights.needsUpdate=W}function Kl(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return k},this.getActiveMipmapLevel=function(){return q},this.getRenderTarget=function(){return it},this.setRenderTargetTextures=function(A,W,gt){const ut=st.get(A);ut.__autoAllocateDepthBuffer=A.resolveDepthBuffer===!1,ut.__autoAllocateDepthBuffer===!1&&(ut.__useRenderToTexture=!1),st.get(A.texture).__webglTexture=W,st.get(A.depthTexture).__webglTexture=ut.__autoAllocateDepthBuffer?void 0:gt,ut.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(A,W){const gt=st.get(A);gt.__webglFramebuffer=W,gt.__useDefaultFramebuffer=W===void 0},this.setRenderTarget=function(A,W=0,gt=0){it=A,k=W,q=gt;let ut=null,ct=!1,Xt=!1;if(A){const Bt=st.get(A);if(Bt.__useDefaultFramebuffer!==void 0){E.bindFramebuffer(j.FRAMEBUFFER,Bt.__webglFramebuffer),vt.copy(A.viewport),Gt.copy(A.scissor),qt=A.scissorTest,E.viewport(vt),E.scissor(Gt),E.setScissorTest(qt),rt=-1;return}else if(Bt.__webglFramebuffer===void 0)_t.setupRenderTarget(A);else if(Bt.__hasExternalTextures)_t.rebindTextures(A,st.get(A.texture).__webglTexture,st.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){const fe=A.depthTexture;if(Bt.__boundDepthTexture!==fe){if(fe!==null&&st.has(fe)&&(A.width!==fe.image.width||A.height!==fe.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");_t.setupDepthRenderbuffer(A)}}const Jt=A.texture;(Jt.isData3DTexture||Jt.isDataArrayTexture||Jt.isCompressedArrayTexture)&&(Xt=!0);const te=st.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(te[W])?ut=te[W][gt]:ut=te[W],ct=!0):A.samples>0&&_t.useMultisampledRTT(A)===!1?ut=st.get(A).__webglMultisampledFramebuffer:Array.isArray(te)?ut=te[gt]:ut=te,vt.copy(A.viewport),Gt.copy(A.scissor),qt=A.scissorTest}else vt.copy(xt).multiplyScalar(mt).floor(),Gt.copy(Dt).multiplyScalar(mt).floor(),qt=Le;if(gt!==0&&(ut=Q),E.bindFramebuffer(j.FRAMEBUFFER,ut)&&E.drawBuffers(A,ut),E.viewport(vt),E.scissor(Gt),E.setScissorTest(qt),ct){const Bt=st.get(A.texture);j.framebufferTexture2D(j.FRAMEBUFFER,j.COLOR_ATTACHMENT0,j.TEXTURE_CUBE_MAP_POSITIVE_X+W,Bt.__webglTexture,gt)}else if(Xt){const Bt=W;for(let Jt=0;Jt<A.textures.length;Jt++){const te=st.get(A.textures[Jt]);j.framebufferTextureLayer(j.FRAMEBUFFER,j.COLOR_ATTACHMENT0+Jt,te.__webglTexture,gt,Bt)}}else if(A!==null&&gt!==0){const Bt=st.get(A.texture);j.framebufferTexture2D(j.FRAMEBUFFER,j.COLOR_ATTACHMENT0,j.TEXTURE_2D,Bt.__webglTexture,gt)}rt=-1};function Li(A){const W=st.get(A);return(W.__readFormat!==A.format||W.__readType!==A.type)&&(W.__readFormat=A.format,W.__readType=A.type,W.__formatReadable=I.textureFormatReadable(A.format),W.__typeReadable=I.textureTypeReadable(A.type)),W}this.readRenderTargetPixels=function(A,W,gt,ut,ct,Xt,jt,Bt=0){if(!(A&&A.isWebGLRenderTarget)){ke("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Jt=st.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&jt!==void 0&&(Jt=Jt[jt]),Jt){E.bindFramebuffer(j.FRAMEBUFFER,Jt);try{const te=A.textures[Bt],fe=te.format,ge=te.type;A.textures.length>1&&j.readBuffer(j.COLOR_ATTACHMENT0+Bt);const Kt=Li(te);if(Kt.__formatReadable===!1){ke("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Kt.__typeReadable===!1){ke("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}W>=0&&W<=A.width-ut&&gt>=0&&gt<=A.height-ct&&j.readPixels(W,gt,ut,ct,Ut.convert(fe),Ut.convert(ge),Xt)}finally{const te=it!==null?st.get(it).__webglFramebuffer:null;E.bindFramebuffer(j.FRAMEBUFFER,te)}}},this.readRenderTargetPixelsAsync=async function(A,W,gt,ut,ct,Xt,jt,Bt=0){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Jt=st.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&jt!==void 0&&(Jt=Jt[jt]),Jt)if(W>=0&&W<=A.width-ut&&gt>=0&&gt<=A.height-ct){E.bindFramebuffer(j.FRAMEBUFFER,Jt);const te=A.textures[Bt],fe=te.format,ge=te.type;A.textures.length>1&&j.readBuffer(j.COLOR_ATTACHMENT0+Bt);const Kt=Li(te);if(Kt.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Kt.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Ce=j.createBuffer();j.bindBuffer(j.PIXEL_PACK_BUFFER,Ce),j.bufferData(j.PIXEL_PACK_BUFFER,Xt.byteLength,j.STREAM_READ),j.readPixels(W,gt,ut,ct,Ut.convert(fe),Ut.convert(ge),0),j.bindBuffer(j.PIXEL_PACK_BUFFER,null);const be=it!==null?st.get(it).__webglFramebuffer:null;E.bindFramebuffer(j.FRAMEBUFFER,be);const tn=j.fenceSync(j.SYNC_GPU_COMMANDS_COMPLETE,0);return j.flush(),await Kb(j,tn,4),j.bindBuffer(j.PIXEL_PACK_BUFFER,Ce),j.getBufferSubData(j.PIXEL_PACK_BUFFER,0,Xt),j.bindBuffer(j.PIXEL_PACK_BUFFER,null),j.deleteBuffer(Ce),j.deleteSync(tn),Xt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(A,W=null,gt=0){const ut=Math.pow(2,-gt),ct=Math.floor(A.image.width*ut),Xt=Math.floor(A.image.height*ut),jt=W!==null?W.x:0,Bt=W!==null?W.y:0;_t.setTexture2D(A,0),j.copyTexSubImage2D(j.TEXTURE_2D,gt,0,0,jt,Bt,ct,Xt),E.unbindTexture()},this.copyTextureToTexture=function(A,W,gt=null,ut=null,ct=0,Xt=0){let jt,Bt,Jt,te,fe,ge,Kt,Ce,be;const tn=A.isCompressedTexture?A.mipmaps[Xt]:A.image;if(gt!==null)jt=gt.max.x-gt.min.x,Bt=gt.max.y-gt.min.y,Jt=gt.isBox3?gt.max.z-gt.min.z:1,te=gt.min.x,fe=gt.min.y,ge=gt.isBox3?gt.min.z:0;else{const sn=Math.pow(2,-ct);jt=Math.floor(tn.width*sn),Bt=Math.floor(tn.height*sn),A.isDataArrayTexture?Jt=tn.depth:A.isData3DTexture?Jt=Math.floor(tn.depth*sn):Jt=1,te=0,fe=0,ge=0}ut!==null?(Kt=ut.x,Ce=ut.y,be=ut.z):(Kt=0,Ce=0,be=0);const qe=Ut.convert(W.format),Cn=Ut.convert(W.type);let Wt;W.isData3DTexture?(_t.setTexture3D(W,0),Wt=j.TEXTURE_3D):W.isDataArrayTexture||W.isCompressedArrayTexture?(_t.setTexture2DArray(W,0),Wt=j.TEXTURE_2D_ARRAY):(_t.setTexture2D(W,0),Wt=j.TEXTURE_2D),E.activeTexture(j.TEXTURE0),E.pixelStorei(j.UNPACK_FLIP_Y_WEBGL,W.flipY),E.pixelStorei(j.UNPACK_PREMULTIPLY_ALPHA_WEBGL,W.premultiplyAlpha),E.pixelStorei(j.UNPACK_ALIGNMENT,W.unpackAlignment);const vn=E.getParameter(j.UNPACK_ROW_LENGTH),Fe=E.getParameter(j.UNPACK_IMAGE_HEIGHT),ei=E.getParameter(j.UNPACK_SKIP_PIXELS),Si=E.getParameter(j.UNPACK_SKIP_ROWS),la=E.getParameter(j.UNPACK_SKIP_IMAGES);E.pixelStorei(j.UNPACK_ROW_LENGTH,tn.width),E.pixelStorei(j.UNPACK_IMAGE_HEIGHT,tn.height),E.pixelStorei(j.UNPACK_SKIP_PIXELS,te),E.pixelStorei(j.UNPACK_SKIP_ROWS,fe),E.pixelStorei(j.UNPACK_SKIP_IMAGES,ge);const Te=A.isDataArrayTexture||A.isData3DTexture,We=W.isDataArrayTexture||W.isData3DTexture;if(A.isDepthTexture){const sn=st.get(A),yi=st.get(W),Oe=st.get(sn.__renderTarget),xn=st.get(yi.__renderTarget);E.bindFramebuffer(j.READ_FRAMEBUFFER,Oe.__webglFramebuffer),E.bindFramebuffer(j.DRAW_FRAMEBUFFER,xn.__webglFramebuffer);for(let Na=0;Na<Jt;Na++)Te&&(j.framebufferTextureLayer(j.READ_FRAMEBUFFER,j.COLOR_ATTACHMENT0,st.get(A).__webglTexture,ct,ge+Na),j.framebufferTextureLayer(j.DRAW_FRAMEBUFFER,j.COLOR_ATTACHMENT0,st.get(W).__webglTexture,Xt,be+Na)),j.blitFramebuffer(te,fe,jt,Bt,Kt,Ce,jt,Bt,j.DEPTH_BUFFER_BIT,j.NEAREST);E.bindFramebuffer(j.READ_FRAMEBUFFER,null),E.bindFramebuffer(j.DRAW_FRAMEBUFFER,null)}else if(ct!==0||A.isRenderTargetTexture||st.has(A)){const sn=st.get(A),yi=st.get(W);E.bindFramebuffer(j.READ_FRAMEBUFFER,G),E.bindFramebuffer(j.DRAW_FRAMEBUFFER,K);for(let Oe=0;Oe<Jt;Oe++)Te?j.framebufferTextureLayer(j.READ_FRAMEBUFFER,j.COLOR_ATTACHMENT0,sn.__webglTexture,ct,ge+Oe):j.framebufferTexture2D(j.READ_FRAMEBUFFER,j.COLOR_ATTACHMENT0,j.TEXTURE_2D,sn.__webglTexture,ct),We?j.framebufferTextureLayer(j.DRAW_FRAMEBUFFER,j.COLOR_ATTACHMENT0,yi.__webglTexture,Xt,be+Oe):j.framebufferTexture2D(j.DRAW_FRAMEBUFFER,j.COLOR_ATTACHMENT0,j.TEXTURE_2D,yi.__webglTexture,Xt),ct!==0?j.blitFramebuffer(te,fe,jt,Bt,Kt,Ce,jt,Bt,j.COLOR_BUFFER_BIT,j.NEAREST):We?j.copyTexSubImage3D(Wt,Xt,Kt,Ce,be+Oe,te,fe,jt,Bt):j.copyTexSubImage2D(Wt,Xt,Kt,Ce,te,fe,jt,Bt);E.bindFramebuffer(j.READ_FRAMEBUFFER,null),E.bindFramebuffer(j.DRAW_FRAMEBUFFER,null)}else We?A.isDataTexture||A.isData3DTexture?j.texSubImage3D(Wt,Xt,Kt,Ce,be,jt,Bt,Jt,qe,Cn,tn.data):W.isCompressedArrayTexture?j.compressedTexSubImage3D(Wt,Xt,Kt,Ce,be,jt,Bt,Jt,qe,tn.data):j.texSubImage3D(Wt,Xt,Kt,Ce,be,jt,Bt,Jt,qe,Cn,tn):A.isDataTexture?j.texSubImage2D(j.TEXTURE_2D,Xt,Kt,Ce,jt,Bt,qe,Cn,tn.data):A.isCompressedTexture?j.compressedTexSubImage2D(j.TEXTURE_2D,Xt,Kt,Ce,tn.width,tn.height,qe,tn.data):j.texSubImage2D(j.TEXTURE_2D,Xt,Kt,Ce,jt,Bt,qe,Cn,tn);E.pixelStorei(j.UNPACK_ROW_LENGTH,vn),E.pixelStorei(j.UNPACK_IMAGE_HEIGHT,Fe),E.pixelStorei(j.UNPACK_SKIP_PIXELS,ei),E.pixelStorei(j.UNPACK_SKIP_ROWS,Si),E.pixelStorei(j.UNPACK_SKIP_IMAGES,la),Xt===0&&W.generateMipmaps&&j.generateMipmap(Wt),E.unbindTexture()},this.initRenderTarget=function(A){st.get(A).__webglFramebuffer===void 0&&_t.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?_t.setTextureCube(A,0):A.isData3DTexture?_t.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?_t.setTexture2DArray(A,0):_t.setTexture2D(A,0),E.unbindTexture()},this.resetState=function(){k=0,q=0,it=null,E.reset(),kt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ba}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const i=this.getContext();i.drawingBufferColorSpace=He._getDrawingBufferColorSpace(e),i.unpackColorSpace=He._getUnpackColorSpace()}}const cS={type:"change"},Im={type:"start"},ly={type:"end"},Hc=new of,fS=new Qa,VC=Math.cos(70*$b.DEG2RAD),Nn=new lt,_i=2*Math.PI,$e={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Sp=1e-6;class kC extends kT{constructor(e,i=null){super(e,i),this.state=$e.NONE,this.target=new lt,this.cursor=new lt,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Ro.ROTATE,MIDDLE:Ro.DOLLY,RIGHT:Ro.PAN},this.touches={ONE:bo.ROTATE,TWO:bo.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._cursorStyle="auto",this._domElementKeyEvents=null,this._lastPosition=new lt,this._lastQuaternion=new Br,this._lastTargetPosition=new lt,this._quat=new Br().setFromUnitVectors(e.up,new lt(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Fx,this._sphericalDelta=new Fx,this._scale=1,this._panOffset=new lt,this._rotateStart=new me,this._rotateEnd=new me,this._rotateDelta=new me,this._panStart=new me,this._panEnd=new me,this._panDelta=new me,this._dollyStart=new me,this._dollyEnd=new me,this._dollyDelta=new me,this._dollyDirection=new lt,this._mouse=new me,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=WC.bind(this),this._onPointerDown=XC.bind(this),this._onPointerUp=YC.bind(this),this._onContextMenu=$C.bind(this),this._onMouseWheel=jC.bind(this),this._onKeyDown=KC.bind(this),this._onTouchStart=QC.bind(this),this._onTouchMove=JC.bind(this),this._onMouseDown=qC.bind(this),this._onMouseMove=ZC.bind(this),this._interceptControlDown=t3.bind(this),this._interceptControlUp=e3.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}set cursorStyle(e){this._cursorStyle=e,e==="grab"?this.domElement.style.cursor="grab":this.domElement.style.cursor="auto"}get cursorStyle(){return this._cursorStyle}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.state=$e.NONE,this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents();const e=this.domElement.getRootNode();e.removeEventListener("keydown",this._interceptControlDown,{capture:!0}),e.removeEventListener("keyup",this._interceptControlUp,{capture:!0}),this._controlActive=!1,this._pointers.length=0,this._pointerPositions={},this.domElement.style.touchAction="",this.domElement.style.cursor="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(cS),this.update(),this.state=$e.NONE}pan(e,i){this._pan(e,i),this.update()}dollyIn(e){this._dollyIn(e),this.update()}dollyOut(e){this._dollyOut(e),this.update()}rotateLeft(e){this._rotateLeft(e),this.update()}rotateUp(e){this._rotateUp(e),this.update()}update(e=null){const i=this.object.position;Nn.copy(i).sub(this.target),Nn.applyQuaternion(this._quat),this._spherical.setFromVector3(Nn),this.autoRotate&&this.state===$e.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let r=this.minAzimuthAngle,l=this.maxAzimuthAngle;isFinite(r)&&isFinite(l)&&(r<-Math.PI?r+=_i:r>Math.PI&&(r-=_i),l<-Math.PI?l+=_i:l>Math.PI&&(l-=_i),r<=l?this._spherical.theta=Math.max(r,Math.min(l,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(r+l)/2?Math.max(r,this._spherical.theta):Math.min(l,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let c=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const h=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),c=h!=this._spherical.radius}if(Nn.setFromSpherical(this._spherical),Nn.applyQuaternion(this._quatInverse),i.copy(this.target).add(Nn),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let h=null;if(this.object.isPerspectiveCamera){const d=Nn.length();h=this._clampDistance(d*this._scale);const p=d-h;this.object.position.addScaledVector(this._dollyDirection,p),this.object.updateMatrixWorld(),c=!!p}else if(this.object.isOrthographicCamera){const d=new lt(this._mouse.x,this._mouse.y,0);d.unproject(this.object);const p=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),c=p!==this.object.zoom;const m=new lt(this._mouse.x,this._mouse.y,0);m.unproject(this.object),this.object.position.sub(m).add(d),this.object.updateMatrixWorld(),h=Nn.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;h!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(h).add(this.object.position):(Hc.origin.copy(this.object.position),Hc.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Hc.direction))<VC?this.object.lookAt(this.target):(fS.setFromNormalAndCoplanarPoint(this.object.up,this.target),Hc.intersectPlane(fS,this.target))))}else if(this.object.isOrthographicCamera){const h=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),h!==this.object.zoom&&(this.object.updateProjectionMatrix(),c=!0)}return this._scale=1,this._performCursorZoom=!1,c||this._lastPosition.distanceToSquared(this.object.position)>Sp||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Sp||this._lastTargetPosition.distanceToSquared(this.target)>Sp?(this.dispatchEvent(cS),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?_i/60*this.autoRotateSpeed*e:_i/60/60*this.autoRotateSpeed}_getZoomScale(e){const i=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*i)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,i){Nn.setFromMatrixColumn(i,0),Nn.multiplyScalar(-e),this._panOffset.add(Nn)}_panUp(e,i){this.screenSpacePanning===!0?Nn.setFromMatrixColumn(i,1):(Nn.setFromMatrixColumn(i,0),Nn.crossVectors(this.object.up,Nn)),Nn.multiplyScalar(e),this._panOffset.add(Nn)}_pan(e,i){const r=this.domElement;if(this.object.isPerspectiveCamera){const l=this.object.position;Nn.copy(l).sub(this.target);let c=Nn.length();c*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*c/r.clientHeight,this.object.matrix),this._panUp(2*i*c/r.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/r.clientWidth,this.object.matrix),this._panUp(i*(this.object.top-this.object.bottom)/this.object.zoom/r.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,i){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const r=this.domElement.getBoundingClientRect(),l=e-r.left,c=i-r.top,h=r.width,d=r.height;this._mouse.x=l/h*2-1,this._mouse.y=-(c/d)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const i=this.domElement;this._rotateLeft(_i*this._rotateDelta.x/i.clientHeight),this._rotateUp(_i*this._rotateDelta.y/i.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let i=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(_i*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),i=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-_i*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),i=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(_i*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),i=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-_i*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),i=!0;break}i&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const i=this._getSecondPointerPosition(e),r=.5*(e.pageX+i.x),l=.5*(e.pageY+i.y);this._rotateStart.set(r,l)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const i=this._getSecondPointerPosition(e),r=.5*(e.pageX+i.x),l=.5*(e.pageY+i.y);this._panStart.set(r,l)}}_handleTouchStartDolly(e){const i=this._getSecondPointerPosition(e),r=e.pageX-i.x,l=e.pageY-i.y,c=Math.sqrt(r*r+l*l);this._dollyStart.set(0,c)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const r=this._getSecondPointerPosition(e),l=.5*(e.pageX+r.x),c=.5*(e.pageY+r.y);this._rotateEnd.set(l,c)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const i=this.domElement;this._rotateLeft(_i*this._rotateDelta.x/i.clientHeight),this._rotateUp(_i*this._rotateDelta.y/i.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const i=this._getSecondPointerPosition(e),r=.5*(e.pageX+i.x),l=.5*(e.pageY+i.y);this._panEnd.set(r,l)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const i=this._getSecondPointerPosition(e),r=e.pageX-i.x,l=e.pageY-i.y,c=Math.sqrt(r*r+l*l);this._dollyEnd.set(0,c),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const h=(e.pageX+i.x)*.5,d=(e.pageY+i.y)*.5;this._updateZoomParameters(h,d)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let i=0;i<this._pointers.length;i++)if(this._pointers[i]==e.pointerId){this._pointers.splice(i,1);return}}_isTrackingPointer(e){for(let i=0;i<this._pointers.length;i++)if(this._pointers[i]==e.pointerId)return!0;return!1}_trackPointer(e){let i=this._pointerPositions[e.pointerId];i===void 0&&(i=new me,this._pointerPositions[e.pointerId]=i),i.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const i=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[i]}_customWheelEvent(e){const i=e.deltaMode,r={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(i){case 1:r.deltaY*=16;break;case 2:r.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(r.deltaY*=10),r}}function XC(o){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(o.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(o)&&(this._addPointer(o),o.pointerType==="touch"?this._onTouchStart(o):this._onMouseDown(o),this._cursorStyle==="grab"&&(this.domElement.style.cursor="grabbing")))}function WC(o){this.enabled!==!1&&(o.pointerType==="touch"?this._onTouchMove(o):this._onMouseMove(o))}function YC(o){switch(this._removePointer(o),this._pointers.length){case 0:this.domElement.releasePointerCapture(o.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(ly),this.state=$e.NONE,this._cursorStyle==="grab"&&(this.domElement.style.cursor="grab");break;case 1:const e=this._pointers[0],i=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:i.x,pageY:i.y});break}}function qC(o){let e;switch(o.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case Ro.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(o),this.state=$e.DOLLY;break;case Ro.ROTATE:if(o.ctrlKey||o.metaKey||o.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(o),this.state=$e.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(o),this.state=$e.ROTATE}break;case Ro.PAN:if(o.ctrlKey||o.metaKey||o.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(o),this.state=$e.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(o),this.state=$e.PAN}break;default:this.state=$e.NONE}this.state!==$e.NONE&&this.dispatchEvent(Im)}function ZC(o){switch(this.state){case $e.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(o);break;case $e.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(o);break;case $e.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(o);break}}function jC(o){this.enabled===!1||this.enableZoom===!1||this.state!==$e.NONE||(o.preventDefault(),this.dispatchEvent(Im),this._handleMouseWheel(this._customWheelEvent(o)),this.dispatchEvent(ly))}function KC(o){this.enabled!==!1&&this._handleKeyDown(o)}function QC(o){switch(this._trackPointer(o),this._pointers.length){case 1:switch(this.touches.ONE){case bo.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(o),this.state=$e.TOUCH_ROTATE;break;case bo.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(o),this.state=$e.TOUCH_PAN;break;default:this.state=$e.NONE}break;case 2:switch(this.touches.TWO){case bo.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(o),this.state=$e.TOUCH_DOLLY_PAN;break;case bo.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(o),this.state=$e.TOUCH_DOLLY_ROTATE;break;default:this.state=$e.NONE}break;default:this.state=$e.NONE}this.state!==$e.NONE&&this.dispatchEvent(Im)}function JC(o){switch(this._trackPointer(o),this.state){case $e.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(o),this.update();break;case $e.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(o),this.update();break;case $e.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(o),this.update();break;case $e.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(o),this.update();break;default:this.state=$e.NONE}}function $C(o){this.enabled!==!1&&o.preventDefault()}function t3(o){o.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function e3(o){o.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}const _m=[["width","Card width",110,150,1],["length","Card height",150,190,1],["span","Loom height",70,90,1],["deckWidth","Loom width",54,68,1],["rise","Foot length",24,34,1],["peg","Foot tongue width",6,9,.5],["pitch","Warp notch pitch",4,6,.5],["gap","Total slot allowance",.1,.4,.05],["thickness","Panel thickness",1.6,2.4,.2],["spacing","Part spacing",5,9,.5],["tabWidth","Breakaway tab width",.8,1.4,.1],["tabHeight","Breakaway tab thickness",.4,.8,.2],["texture","Medallion dimple depth",0,.4,.1]],Hl={width:130,length:170,span:80,deckWidth:60,rise:28,peg:7,pitch:5,gap:.2,thickness:1.6,spacing:6,tabWidth:1,tabHeight:.6,texture:.2,shape:"round"},n3={"Pocket Swatch":{...Hl,width:110,length:150,span:70,deckWidth:54,rise:24,peg:6,pitch:4,spacing:5,texture:0,shape:"hex"},"Studio Weave":Hl,"Wide Tapestry":{...Hl,width:150,length:190,span:90,deckWidth:68,rise:34,peg:9,pitch:6,thickness:2.4,spacing:9,tabWidth:1.4,tabHeight:.8,texture:.4,shape:"oval"}},yp=["connected-card","loom-frame","left-foot","right-foot","yarn-shuttle"],ds={size:6,height:2,rotation:0,x:0,y:0},hS="Warp & Weft: tabletop weaving loom kit with two removable slotted feet and a reusable forked yarn shuttle. 1. Print the connected card flat Z=0 in PLA/PETG, 0.4 mm nozzle, 0.20 mm layers, three walls; no supports intended. 2. Clip four accessible side tabs per part, sixteen total. Trim nubs and deburr yarn notches; discard frame. 3. Place both feet bed-side down with slots aligned. Lower the loom's two bottom tongues vertically into them until shoulders sit on their top faces. 4. Tie yarn to a lower notch, pass up the front and down the back around matching top/bottom notches, repeat loosely; do not overstress thin rails. 5. Wind a short weft onto the forked shuttle; pass alternately over/under front warp strands, reverse the pattern on the next row and gently pack with fingers. 6. Unhook the completed swatch; lift loom out of feet to store flat. Feet are removable clearance fits, not snap locks; hold the frame while weaving. Start 0.20 mm TOTAL slot allowance, half per side; print one loom frame and left foot first as a fit test on your material/printer. Not universal tolerances. Use soft yarn up to 1 mm diameter; notch pitch 4–6 mm is proposed. Yarn is required and not printed; no other hardware. Card OR separate parts, not both. Imports become solid-unioned or engraved relief on the isolated lower rail; notches, window and tongues are untouched. STL contains no color. Reference: Mike Kasberg, White Cat Kit Card, https://www.printables.com/model/865769-theft-of-fire-white-cat-kit-card and https://github.com/mkasberg/white-cat-kit-card ; CC BY 4.0 https://creativecommons.org/licenses/by/4.0/ . Adapted sheet/perimeter/sacrificial-tab construction; original loom, feet and shuttle reconstruction, no raw source STL redistribution. Computational checks only: no physical print, yarn friction, fit, strength or stability test performed. All dimensions mm; slice 100%. Cutting tools and small parts need adult handling.";function dS(o){return[...["round","hex","oval"].includes(o.shape)?[]:["Unknown plinth outline."],..._m.filter(([e,,i,r])=>!Number.isFinite(o[e])||o[e]<i-1e-8||o[e]>r+1e-8).map(([e,i,r,l])=>`${i} must be ${r}–${l} mm.`)]}function pS(o,e=0,i=0){const r=Math.max(0,Math.min(1,i))*o.parameters.span;return[{pos:[0,0,0]},{pos:[0,o.H/2,o.H+r],rotX:Math.PI/2},{pos:[-o.footX,0,0]},{pos:[o.footX,0,0]},{pos:[0,-o.parameters.rise/2-9,0]}]}function uy(o,e="all"){const i=[];return o.parts.forEach((r,l)=>{if(e==="all"?l!==0:e!==r.name)return;const c=[0,0,0];for(let h=0;h<r.indices.length;h+=3)i.push(r.indices.slice(h,h+3).map(d=>[0,1,2].map(p=>r.vertices[d*r.stride+p]+c[p])))}),i}function i3(o){const e=[1/0,1/0,1/0],i=[-1/0,-1/0,-1/0];for(const r of o)for(const l of r)for(let c=0;c<3;c++)e[c]=Math.min(e[c],l[c]),i[c]=Math.max(i[c],l[c]);return{min:e,max:i}}function Ll(o,e="all"){const i=uy(o,e).map(c=>c.map(h=>h.map(Math.fround))),r=new ArrayBuffer(84+i.length*50),l=new DataView(r);return l.setUint32(80,i.length,!0),i.forEach(([c,h,d],p)=>{const m=h.map((T,w)=>T-c[w]),x=d.map((T,w)=>T-c[w]),g=[m[1]*x[2]-m[2]*x[1],m[2]*x[0]-m[0]*x[2],m[0]*x[1]-m[1]*x[0]],v=Math.hypot(...g);let y=84+p*50;for(const T of[...g.map(w=>w/v),...c,...h,...d])l.setFloat32(y,T,!0),y+=4}),r}function a3(o){let e=2166136261;for(const i of new Uint8Array(o))e^=i,e=Math.imul(e,16777619);return(e>>>0).toString(16)}function vm({model:o,assembled:e,angle:i,lift:r=0,color:l="#e2557a",active:c="",onSelect:h,compact:d=!1,dark:p=!1,view:m="plate",ghost:x=!1}){const g=oe.useRef(),v=oe.useRef();return oe.useEffect(()=>{const y=new dT;y.background=null;const T=new Wi(38,1,.1,2e3);T.up.set(0,0,1);const w=new GC({antialias:!0,alpha:!0});w.setPixelRatio(Math.min(devicePixelRatio,2)),w.shadowMap.enabled=!0,w.shadowMap.type=Bl,g.current.appendChild(w.domElement);const M=new kC(T,w.domElement);M.enableDamping=!1,y.add(new PT(16777215,5534842,3));const S=new BT(16777215,3);S.position.set(30,-60,100),S.castShadow=!0,S.shadow.mapSize.set(1024,1024),Object.assign(S.shadow.camera,{left:-120,right:120,top:120,bottom:-120,near:1,far:300}),S.shadow.bias=-.001,y.add(S);const P=new ra(new Zl(300,300),new AT({opacity:.13}));P.position.z=-.1,P.receiveShadow=!0,y.add(P);const F=new To;y.add(F);const C=new VT(240,24,12239317,13752035);C.rotation.x=Math.PI/2,C.position.z=-.2,C.material.transparent=!0,C.material.opacity=.35,y.add(C);const U=new To;y.add(U);const N=()=>{const D=new ys;F.children.filter(K=>K.visible).forEach(K=>D.expandByObject(K));const V=D.getCenter(new lt),O=D.getSize(new lt),H=T.fov*Math.PI/180,Q=2*Math.atan(Math.tan(H/2)*T.aspect),G=Math.max(O.length()/2,4)/Math.sin(Math.min(H,Q)/2)*1.15;M.target.copy(V),T.position.copy(V).add(new lt(.5,-.8,1).normalize().multiplyScalar(G)),T.far=G*15,T.updateProjectionMatrix(),M.update()},L=()=>w.render(y,T);M.addEventListener("change",L),v.current={scene:y,group:F,cords:U,camera:T,controls:M,fit:N,renderer:w,render:L};const b=new ResizeObserver(()=>{const D=g.current.clientWidth,V=g.current.clientHeight;D<=0||V<=0||(w.setSize(D,V),T.aspect=D/V,T.updateProjectionMatrix(),F.children.length&&N(),L())});return b.observe(g.current),L(),()=>{M.removeEventListener("change",L),b.disconnect(),M.dispose(),F.children.forEach(D=>{D.geometry.dispose(),D.material.dispose()}),w.dispose(),w.domElement.remove()}},[]),oe.useEffect(()=>{const y=v.current;if(!y||!o)return;for(const w of[...y.group.children])y.group.remove(w),w.geometry.dispose(),w.material.dispose();o.parts.forEach((w,M)=>{const S=[];for(const U of w.indices){const N=w.vertices.slice(U*w.stride,U*w.stride+3);S.push(...N)}const P=new Yi;P.setAttribute("position",new xi(S,3)),P.computeVertexNormals();const F=new ra(P,new UT({color:M<2?l:["#99a7d8","#77b7ad","#e1ac62","#e2557a","#a8a1cf"][M%5],emissive:w.name===c?"#26130a":"#000000",roughness:.92,metalness:0,transparent:x&&M<2,opacity:x&&M<2?.26:1,depthWrite:!(x&&M<2)})),C=e&&o.parameters?pS(o,d?0:i,d?0:r)[M]:{pos:o.layout[M],angle:0};F.position.set(...C.pos),C.scale&&F.scale.set(...C.scale),m==="exploded"&&(M===1&&(F.position.z+=o.parameters.span*.45),M===2&&(F.position.x-=8),M===3&&(F.position.x+=8),M===4&&(F.position.y-=8)),F.visible=!o.parameters||(m==="plate"&&!d?M===0:m==="palm"?M===1:m==="wheel"?M===2:m==="support-b"?M===3:m==="shuttle"?M===4:M>0),F.rotation.order="ZYX",F.rotation.set(C.rotX||0,C.rotY||0,C.angle||0),F.castShadow=!0,F.receiveShadow=!0,F.userData.name=w.name,y.group.add(F)});for(const w of[...y.cords.children])y.cords.remove(w),w.geometry.dispose(),w.material.dispose();y.group.rotation.z=0;const T=new ys().setFromObject(y.group).min.z;y.scene.children.filter(w=>w.isMesh&&w.geometry.type==="PlaneGeometry").forEach(w=>w.position.z=T-.1),y.fit(),y.render()},[o,e,l,c,m,p,x,i,r]),oe.useEffect(()=>{const y=v.current;!y||!o||!e||(y.group.rotation.z=0,pS(o,d?0:i,d?0:r).forEach((T,w)=>{const M=y.group.children[w];M.position.set(...T.pos),T.scale&&M.scale.set(...T.scale),m==="exploded"&&(w===1&&(M.position.z+=o.parameters.span*.45),w===2&&(M.position.x-=8),w===3&&(M.position.x+=8),w===4&&(M.position.y-=8)),M.rotation.order="ZYX",M.rotation.set(T.rotX||0,T.rotY||0,T.angle||0)}),y.render())},[i,r,o,e,m]),oe.useEffect(()=>{const y=v.current;if(!y||!h)return;let T;const w=S=>{T=[S.clientX,S.clientY]},M=S=>{if(!T||Math.hypot(S.clientX-T[0],S.clientY-T[1])>5)return;const P=y.renderer.domElement.getBoundingClientRect(),F=new me((S.clientX-P.left)/P.width*2-1,-(S.clientY-P.top)/P.height*2+1),C=new GT;C.setFromCamera(F,y.camera);const U=C.intersectObjects(y.group.children);U[0]&&h(U[0].object.userData.name)};return y.renderer.domElement.addEventListener("pointerdown",w),y.renderer.domElement.addEventListener("pointerup",M),()=>{y.renderer.domElement.removeEventListener("pointerdown",w),y.renderer.domElement.removeEventListener("pointerup",M)}},[h]),nt.jsxs(nt.Fragment,{children:[nt.jsx("div",{className:"canvas",ref:g,"aria-label":"Interactive 3D preview"}),!d&&nt.jsxs("div",{className:"viewtools",children:[nt.jsx("button",{onClick:()=>v.current.fit(),children:"Reset / fit"}),nt.jsx("button",{"aria-label":"Zoom in",onClick:()=>{const y=v.current;y.camera.position.sub(y.controls.target).multiplyScalar(.8).add(y.controls.target),y.controls.update(),y.render()},children:"＋"}),nt.jsx("button",{"aria-label":"Zoom out",onClick:()=>{const y=v.current;y.camera.position.sub(y.controls.target).multiplyScalar(1.25).add(y.controls.target),y.controls.update(),y.render()},children:"−"}),nt.jsx("span",{children:"10 mm grid · drag to orbit · pinch to zoom"})]})]})}const ps=(o,e)=>o.map((i,r)=>i-e[r]),ef=(o,e)=>o.reduce((i,r,l)=>i+r*e[l],0),zr=(o,e)=>[o[1]*e[2]-o[2]*e[1],o[2]*e[0]-o[0]*e[2],o[0]*e[1]-o[1]*e[0]];function r3(o,e){o=o.map(d=>d.map((p,m)=>p*.999999+o.reduce((x,g)=>x+g[m],0)/3*1e-6)),e=e.map(d=>d.map((p,m)=>p*.999999+e.reduce((x,g)=>x+g[m],0)/3*1e-6));const i=o.map((d,p)=>ps(o[(p+1)%3],d)),r=e.map((d,p)=>ps(e[(p+1)%3],d)),l=zr(i[0],i[1]),c=zr(r[0],r[1]),h=[l,c,...i.flatMap(d=>r.map(p=>zr(d,p))),...i.map(d=>zr(l,d)),...r.map(d=>zr(c,d))];for(const d of h){const p=Math.hypot(...d);if(p<1e-12)continue;const m=o.map(g=>ef(g,d)/p),x=e.map(g=>ef(g,d)/p);if(Math.max(...m)<Math.min(...x)-1e-9||Math.max(...x)<Math.min(...m)-1e-9)return!1}return!0}function s3(o,e="z"){if(o.byteLength<40||o.byteLength>2*1024*1024)throw Error("STL must be 40 bytes–2 MB. Re-export a closed low-poly solid.");const i=new DataView(o),r=[];let l;const c=o.byteLength>=84?i.getUint32(80,!0):0;if(c>0&&84+50*c===o.byteLength){if(c>1500)throw Error("STL exceeds 1,500 triangles. Decimate and re-export a closed solid.");l="binary";for(let O=0;O<c;O++)r.push([0,1,2].map(H=>[0,1,2].map(Q=>i.getFloat32(84+50*O+12+H*12+Q*4,!0))))}else{const O=new TextDecoder().decode(o);if(!/^\s*solid\b/i.test(O)||!/endsolid\b\s*[^\n]*\s*$/i.test(O))throw Error("Invalid or truncated STL. Export complete ASCII or binary STL.");l="ASCII";const H=[...O.matchAll(/facet\s+normal\s+([^\n]+)\s+outer\s+loop\s*([\s\S]*?)\s*endloop\s+endfacet/gi)];if(!H.length||H.length>1500)throw Error("ASCII STL must contain 1–1,500 complete facets.");if((O.match(/\bfacet\s+normal\b/gi)||[]).length!==H.length)throw Error("Truncated ASCII facet. Re-export the mesh.");for(const G of H){const K=[...G[2].matchAll(/vertex\s+([^\n]+)/gi)].map(k=>k[1].trim().split(/\s+/).map(Number));if(K.length!==3||K.some(k=>k.length!==3))throw Error("Each STL facet must have exactly three vertices.");r.push(K)}}if(!["z","y","-z"].includes(e))throw Error("Unsupported up axis.");for(const O of r)for(let H=0;H<3;H++){const[Q,G,K]=O[H];O[H]=e==="y"?[Q,-K,G]:e==="-z"?[Q,-G,-K]:[Q,G,K]}const h=[],d=[],p=new Map,m=new Map,x=[],g=[1/0,1/0,1/0],v=[-1/0,-1/0,-1/0];let y=0;const T=O=>{const H=O.map(Q=>Math.round(Q/1e-5)).join(",");return p.has(H)||(p.set(H,h.length/3),h.push(...O)),p.get(H)};r.forEach((O,H)=>{if(!O.flat().every(q=>Number.isFinite(q)&&Math.abs(q)<=1e4))throw Error("STL has invalid / excessive coordinates.");for(const q of O)for(let it=0;it<3;it++)g[it]=Math.min(g[it],q[it]),v[it]=Math.max(v[it],q[it]);const[Q,G,K]=O;if(Math.hypot(...zr(ps(G,Q),ps(K,Q)))<1e-7)throw Error("Degenerate triangle. Clean the mesh in a mesh editor.");y+=ef(Q,zr(G,K))/6;const k=O.map(T);if(new Set(k).size!==3)throw Error("Features below 0.00001 mm are unsupported.");d.push(...k);for(let q=0;q<3;q++){const it=k[q],rt=k[(q+1)%3],ht=[Math.min(it,rt),Math.max(it,rt)].join(":"),vt=m.get(ht)||[];vt.push({face:H,dir:it<rt?1:-1}),m.set(ht,vt)}x[H]=[]});for(const O of m.values()){if(O.length!==2||O[0].dir+O[1].dir!==0)throw Error("Open, nonmanifold or inconsistently wound STL. Export one watertight outward-facing solid; automatic repair is not performed.");x[O[0].face].push(O[1].face),x[O[1].face].push(O[0].face)}const w=new Set([0]),M=[0];for(;M.length;)for(const O of x[M.pop()])w.has(O)||(w.add(O),M.push(O));if(w.size!==r.length||y<=1e-5)throw Error("STL must be one connected solid with outward normals and positive volume.");const S=v.map((O,H)=>O-g[H]);if(S.some(O=>O<.2||O>250))throw Error("STL dimensions must each be 0.2–250 mm. Rescale in your modeler, then confirm mm here.");const P=r.map(O=>[0,1,2].map(H=>[Math.min(...O.map(Q=>Q[H])),Math.max(...O.map(Q=>Q[H]))]));for(let O=0;O<r.length;O++)for(let H=0;H<O;H++)if(!P[O].some((Q,G)=>Q[0]>P[H][G][1]+1e-8||Q[1]<P[H][G][0]-1e-8)&&r3(r[O],r[H]))throw Error("Self-intersecting or touching unsupported mesh. Resolve intersections in your modeler and re-export a single solid.");const F=Math.max(...S)*1e-5,C=Array.from({length:h.length/3},(O,H)=>h.slice(H*3,H*3+3));for(const[O,H,Q]of r){const G=zr(ps(H,O),ps(Q,O)),K=Math.hypot(...G);if(C.some(k=>ef(G,ps(k,O))/K>F))throw Error("Unsupported concave STL. Use one convex solid grip, no cavities or thin branches.")}const U=C.filter(O=>Math.abs(O[2]-g[2])<F).map(O=>O.slice(0,2)).sort((O,H)=>O[0]-H[0]||O[1]-H[1]),N=(O,H,Q)=>(H[0]-O[0])*(Q[1]-O[1])-(H[1]-O[1])*(Q[0]-O[0]),L=[],b=[];for(const O of U){for(;L.length>1&&N(L.at(-2),L.at(-1),O)<=0;)L.pop();L.push(O)}for(const O of U.toReversed()){for(;b.length>1&&N(b.at(-2),b.at(-1),O)<=0;)b.pop();b.push(O)}const D=L.slice(0,-1).concat(b.slice(0,-1)),V=Math.abs(D.reduce((O,H,Q)=>O+H[0]*D[(Q+1)%D.length][1]-H[1]*D[(Q+1)%D.length][0],0))/2;if(D.length<3||V<.25*S[0]*S[1])throw Error("Unsupported STL bed contact. Orient a broad flat base down in Z (at least 25% of footprint).");if(C.some(O=>D.some((H,Q)=>N(H,D[(Q+1)%D.length],O)<-F*Math.max(...S))))throw Error("Unsupported STL overhang. All XY projections must lie inside its bottom footprint. Use a support-free convex flat-bottom grip.");return{vertices:h,indices:d,min:g,dimensions:S,format:l,triangles:r.length,volume:y}}function mS(o){const e=new DataView(o.buffer,o.byteOffset,o.byteLength);let i,r,l;if(o.length>24&&e.getUint32(0)===2303741511&&e.getUint32(4)===218765834)l="PNG",i=e.getUint32(16),r=e.getUint32(20);else if(o[0]===255&&o[1]===216){l="JPEG";let c=2;for(;c+9<o.length;){if(o[c++]!==255)throw Error("Invalid JPEG marker.");let h=o[c++];for(;h===255;)h=o[c++];if(h===217||h===218)break;const d=e.getUint16(c);if(d<2||c+d>o.length)throw Error("Truncated JPEG.");if([192,193,194].includes(h)){r=e.getUint16(c+3),i=e.getUint16(c+5);break}c+=d}}else throw Error("Only actual PNG and JPEG image content is supported.");if(!i||!r||i*r>12e6||i>6e3||r>6e3)throw Error("Image must be at most 12 megapixels and 6,000 pixels per side. Resize locally first.");return{width:i,height:r,type:l}}const o3={heart:'<path d="M12 21L3 12C-4 3 7-2 12 5C17-2 28 3 21 12Z"/>',sun:'<circle cx="12" cy="12" r="5"/><path d="M11 0H13V4H11ZM11 20H13V24H11ZM0 11H4V13H0ZM20 11H24V13H20ZM3 2L6 5L5 6L2 3ZM18 18L21 21L22 20L19 17ZM2 21L5 18L6 19L3 22ZM18 6L21 3L20 2L17 5Z"/>',wave:'<path d="M1 8Q6 1 12 8T23 8V12Q18 19 12 12T1 12ZM1 16Q6 9 12 16T23 16V20Q18 27 12 20T1 20Z"/>',star:'<path d="M12 1L15 8L23 9L17 15L19 23L12 19L5 23L7 15L1 9L9 8Z"/>',circle:'<circle cx="12" cy="12" r="9"/>',plus:'<path d="M9 2H15V9H22V15H15V22H9V15H2V9H9Z"/>'},Ol={mode:"threshold",threshold:130,depth:1.5,fit:"contain",panX:0,panY:0,background:"light",style:"raised"};function Mo({id:o,label:e,min:i,max:r,step:l=1,value:c,onChange:h,unit:d="mm"}){return nt.jsxs("div",{className:"field",children:[nt.jsx("label",{htmlFor:o,children:e}),nt.jsxs("div",{className:"inputrow",children:[nt.jsx("input",{"aria-label":e+" slider",type:"range",min:i,max:r,step:l,value:Number.isFinite(c)?c:i,onChange:p=>h(+p.target.value)}),nt.jsx("input",{id:o,type:"number",min:i,max:r,step:l,value:Number.isFinite(c)?c:"",onChange:p=>h(p.target.value===""?NaN:+p.target.value)}),nt.jsx("span",{children:d})]})]})}function l3(){const[o,e]=oe.useState(Hl),[i,r]=oe.useState(ds),[l,c]=oe.useState(null),[h,d]=oe.useState(null),[p,m]=oe.useState(Ol),[x,g]=oe.useState(""),[v,y]=oe.useState("Built-in loom rail medallion"),[T,w]=oe.useState(null),[M,S]=oe.useState(!0),[P,F]=oe.useState(""),[C,U]=oe.useState(!1),[N,L]=oe.useState(!1),[b,D]=oe.useState(""),[V,O]=oe.useState(""),[H,Q]=oe.useState(!0),[G,K]=oe.useState("all"),k=oe.useRef(),q=oe.useRef(0),it=oe.useRef(0),rt=oe.useRef(0),ht=dS(o);oe.useEffect(()=>{const X=new Worker(new URL("/daily-app2/20261027-20/assets/model.worker-ChPwXPfd.js",import.meta.url),{type:"module"});return k.current=X,X.onerror=()=>{F(""),S(!1),D("Geometry worker failed. Reload the studio to restart; export is disabled.")},X.onmessage=({data:wt})=>{if(wt.type==="parsed"){if(wt.id!==it.current)return;if(L(!1),wt.error){O(wt.error);return}d(null),c({kind:"stl",mesh:wt.mesh,confirmed:!1}),r({...ds}),O("");return}wt.id===q.current&&(S(!1),D(wt.error||""),wt.model&&(w(wt.model),F(wt.key)))},()=>X.terminate()},[]),oe.useEffect(()=>{if(h)try{if(![p.threshold,p.depth,p.panX,p.panY].every(Number.isFinite)||p.threshold<1||p.threshold>254||p.depth<.4||p.depth>3||Math.abs(p.panX)>25||Math.abs(p.panY)>25)throw Error("Image settings out of range. Threshold 1–254; depth 0.4–3 mm; crop shift ±25%.");const X=20,wt=document.createElement("canvas");wt.width=wt.height=X;const Zt=wt.getContext("2d",{willReadFrequently:!0});Zt.fillStyle=p.background==="dark"?"black":"white",Zt.fillRect(0,0,X,X);const Ge=(p.fit==="cover"?Math.max:Math.min)(X/h.bitmap.width,X/h.bitmap.height),Ee=h.bitmap.width*Ge,cn=h.bitmap.height*Ge;Zt.drawImage(h.bitmap,(X-Ee)/2+p.panX*X/100,(X-cn)/2+p.panY*X/100,Ee,cn);const an=Zt.getImageData(0,0,X,X).data,ui=[];for(let pn=0;pn<an.length;pn+=4)ui.push(Math.round((p.background==="dark"?255:0)+(p.background==="dark"?-1:1)*(.2126*an[pn]+.7152*an[pn+1]+.0722*an[pn+2])));for(let pn=0;pn<ui.length;pn++){const wn=p.mode==="threshold"?ui[pn]<p.threshold?30:240:ui[pn];Zt.clearRect(pn%X,Math.floor(pn/X),1,1),(p.mode==="threshold"?wn<235:wn<255)&&(Zt.fillStyle=`rgb(${wn},${wn},${wn})`,Zt.fillRect(pn%X,Math.floor(pn/X),1,1))}g(wt.toDataURL()),c({kind:"image",n:X,pixels:ui,...p}),U(!1),O("")}catch(X){U(!1),O(X.message),S(!1)}},[h,p]),oe.useEffect(()=>{const X=++q.current;if(ht.length){S(!1);return}S(!0);const wt=setTimeout(()=>k.current.postMessage({id:X,p:o,source:l,t:i}),100);return()=>clearTimeout(wt)},[o,l,i]);async function vt(X){if(!X)return;const wt=++rt.current;++it.current,L(!0),O("");try{if(X.size>2*1024*1024||X.size<16)throw Error("Choose a valid file, 16 bytes–2 MB.");const Zt=await X.arrayBuffer(),Ge=X.name.split(".").pop().toLowerCase();if(Ge==="svg"){const wn=new TextDecoder().decode(Zt),Fn=new DOMParser().parseFromString(wn,"image/svg+xml");if(Fn.querySelector("parsererror")||!Fn.documentElement||Fn.documentElement.localName!=="svg")throw Error("Invalid SVG.");if(Fn.querySelectorAll("*").length>2e3)throw Error("SVG has too many shapes; simplify to 2,000 elements.");for(const ci of["width","height"]){const jn=parseFloat(Fn.documentElement.getAttribute(ci)||"256");if(!Number.isFinite(jn)||jn<=0||jn>6e3)throw Error("SVG dimensions must be 1–6,000 px.")}for(const ci of Fn.querySelectorAll("*")){if(!["svg","g","path","rect","circle","ellipse","polygon","polyline","line","title","desc"].includes(ci.localName))throw Error("SVG supports simple filled vector shapes only; flatten text and remove effects.");for(const jn of ci.attributes)if(jn.name!=="xmlns"&&(/^on/i.test(jn.name)||/href|url\(|https?:|data:/i.test(jn.name+" "+jn.value)))throw Error("SVG external resources, scripts and references are not supported.")}const Da=new Image,sa=URL.createObjectURL(new Blob([wn],{type:"image/svg+xml"}));await new Promise((ci,jn)=>{Da.onload=ci,Da.onerror=()=>jn(Error("Cannot rasterize SVG")),Da.src=sa});const oa=document.createElement("canvas");oa.width=oa.height=256,oa.getContext("2d").drawImage(Da,0,0,256,256),URL.revokeObjectURL(sa);const Gr=await new Promise(ci=>oa.toBlob(ci));return wt!==rt.current?void 0:vt(new File([Gr],X.name+".png",{type:"image/png"}))}if(!["png","jpg","jpeg","stl"].includes(Ge))throw Error("Supported: PNG, JPEG and ASCII / binary .stl only.");if(wt!==rt.current)return;if(y(X.name),Ge==="stl"){const wn=++it.current;k.current.postMessage({type:"parse",id:wn,buffer:Zt,axis:Rt},[Zt]);return}const Ee=mS(new Uint8Array(Zt));if(Ee.type==="PNG"&&Ge!=="png"||Ee.type==="JPEG"&&Ge==="png")throw Error("File extension does not match image content.");const cn=await createImageBitmap(new Blob([Zt]));if(wt!==rt.current){cn.close();return}if(cn.width!==Ee.width||cn.height!==Ee.height)throw Error("Image dimensions could not be verified.");const an=document.createElement("canvas"),ui=Math.min(1,500/Math.max(cn.width,cn.height));an.width=cn.width*ui,an.height=cn.height*ui,an.getContext("2d").drawImage(cn,0,0,an.width,an.height);const pn=await createImageBitmap(an);if(cn.close(),wt!==rt.current){pn.close();return}U(!0),d(wn=>(wn?.bitmap.close(),{bitmap:pn,url:an.toDataURL(),...Ee})),r({...ds}),m({...Ol}),L(!1)}catch(Zt){L(!1),O(Zt.message+" Replace the file or return to defaults.")}}function Gt(){U(!1),rt.current++,it.current++,h?.bitmap.close(),d(null),c(null),y("Built-in loom rail medallion"),O(""),L(!1),r({...ds}),m({...Ol})}function qt(){Gt(),e({...Hl}),K("all"),Q(!1),ce("plate"),I(0),at(0)}const B=T?i3(uy(T,G)):null,pt=B?B.max.map((X,wt)=>X-B.min[wt]):null,At=P!==JSON.stringify([o,l,i])||l?.kind==="image"&&["mode","threshold","depth","fit","panX","panY","background","style"].some(X=>l[X]!==p[X])||M||N||C||ht.length>0||!!b||!!V||!T||l?.kind==="stl"&&!l.confirmed;function $(){if(At)return;const X=Ll(T,G),wt=URL.createObjectURL(new Blob([X],{type:"model/stl"})),Zt=document.createElement("a");Zt.href=wt,Zt.download=`warp-weft-${l?.kind||"builtin"}-${o.width}x${o.length}mm-card-${G}.stl`,Zt.click(),setTimeout(()=>URL.revokeObjectURL(wt),2e3)}async function mt(X){try{L(!0);const wt=await(await fetch("/daily-app2/20261027-20/samples/"+X)).blob();await vt(new File([wt],X))}catch(wt){L(!1),O(wt.message)}}const[Rt,It]=oe.useState("z"),[xt,Dt]=oe.useState(()=>localStorage.getItem("warp-weft-theme")==="dark"),[Le,ce]=oe.useState("assembled"),[ve,Me]=oe.useState("My swatch"),[ae,se]=oe.useState(()=>{try{return JSON.parse(localStorage.getItem("warp-weft-designs")||"[]")}catch{return[]}}),[Xe,_n]=oe.useState("WEAVE"),[ze,nn]=oe.useState("");oe.useEffect(()=>{document.documentElement.dataset.theme=xt?"dark":"light",localStorage.setItem("warp-weft-theme",xt?"dark":"light")},[xt]);const[j,un]=oe.useState(!1),[Be,I]=oe.useState(0),[E,at]=oe.useState(0),[st,_t]=oe.useState("Shape"),[Ct,Ot]=oe.useState("#e2557a"),[St,Et]=oe.useState("warp-weft"),[Lt,ne]=oe.useState([]),[zt,Pt]=oe.useState(-1),Vt=oe.useRef(!1),ie=oe.useRef([]),le=oe.useRef(-1);oe.useEffect(()=>{const X=document.querySelector(".railbody");X&&(X.scrollTop=0)},[st]);const Z=()=>({version:1,app:"warp-weft",p:o,t:i,source:l,im:p,sourceName:v,rawData:h?.url||null});oe.useEffect(()=>{if(Vt.current){Vt.current=!1;return}const X=setTimeout(()=>{const wt=Z(),Zt=ie.current.slice(0,le.current+1);JSON.stringify(Zt.at(-1))!==JSON.stringify(wt)&&(Zt.push(wt),Zt.length>35&&Zt.shift(),ie.current=Zt,le.current=Zt.length-1,ne(Zt),Pt(le.current))},450);return()=>clearTimeout(X)},[o,i,l,p,h]);async function Nt(X){if(X.version!==1||X.app!=="warp-weft"||!X.p||dS(X.p).length)throw Error("Unsupported design or invalid dimensions.");if(X.source?.kind==="stl"){const Zt=X.source.mesh;if(!Zt||!Array.isArray(Zt.vertices)||!Array.isArray(Zt.indices)||Zt.vertices.length>13500||Zt.indices.length>4500||Zt.indices.length%3||Zt.vertices.length%3||!Zt.vertices.every(Number.isFinite)||!Zt.indices.every(Ee=>Number.isInteger(Ee)&&Ee>=0&&Ee<Zt.vertices.length/3))throw Error("Saved STL payload is invalid or exceeds the 1,500 triangle limit.");const Ge={parts:[{...X.source.mesh,stride:3,name:"source"}]};X.source.mesh=s3(Ll(Ge))}if(X.source&&!["image","stl"].includes(X.source.kind))throw Error("Unsupported source.");if(X.source?.kind==="image"&&!X.rawData)throw Error("Saved image is missing its portable payload. Reattach the original local image in Import.");let wt=null;if(X.rawData){if(typeof X.rawData!="string"||X.rawData.length>18e5||!X.rawData.startsWith("data:image/png;base64,"))throw Error("Invalid saved image payload.");const Zt=await(await fetch(X.rawData)).blob(),Ge=mS(new Uint8Array(await Zt.arrayBuffer()));if(Ge.width*Ge.height>25e4)throw Error("Saved image exceeds portable limit.");const Ee=await createImageBitmap(Zt);if(Ee.width*Ee.height>25e4)throw Error("Saved image exceeds portable limit.");wt={bitmap:Ee,url:X.rawData,width:Ee.width,height:Ee.height}}Vt.current=!0,U(!!wt),d(wt),e(X.p),r(X.t||ds),c(X.source),m(X.im||Ol),y(X.sourceName||"Restored local source"),D(""),O("")}async function yt(X){const wt=le.current+X;if(!(wt<0||wt>=ie.current.length)){L(!0);try{await Nt(structuredClone(ie.current[wt])),le.current=wt,Pt(wt)}catch(Zt){O(Zt.message)}finally{L(!1)}}}function Ut(X,wt,Zt){const Ge=URL.createObjectURL(new Blob([X],{type:wt})),Ee=document.createElement("a");Ee.href=Ge,Ee.download=Zt,Ee.click(),setTimeout(()=>URL.revokeObjectURL(Ge),2e3)}function kt(){if(At)return;const X=Object.fromEntries(yp.map(wt=>[wt+".stl",new Uint8Array(Ll(T,wt))]));X["ASSEMBLY.txt"]=Tp(hS),Ut(db(X),"application/zip","warp-weft-parts.zip")}function Tt(){Ut(JSON.stringify(Z()),"application/json","warp-weft.design.json")}async function $t(X){L(!0);try{if(!X||X.size>2*1024*1024)throw Error("Design JSON limit is 2 MB.");const wt=JSON.parse(await X.text());await Nt(wt)}catch(wt){O("Cannot open design: "+wt.message)}finally{L(!1)}}function Ht(){const X={shape:["round","hex","oval"][Math.floor(Math.random()*3)]};for(const[wt,,Zt,Ge,Ee]of _m)X[wt]=+(Zt+Math.floor(Math.random()*((Ge-Zt)/Ee+1))*Ee).toFixed(3);X.width=Math.max(X.width,X.deckWidth+15),X.length=Math.max(X.length,Math.ceil(X.span+X.rise+2*X.spacing+X.thickness+26)),e(X)}function we(){const X={name:ve.trim()||"Untitled",data:Z()},wt=[X,...ae.filter(Zt=>Zt.name!==X.name)].slice(0,6);try{localStorage.setItem("warp-weft-designs",JSON.stringify(wt)),se(wt)}catch{O("Local storage is full. Download a portable JSON instead.")}}async function de(X){Gt(),await document.fonts.ready;const wt=document.createElement("canvas");wt.width=wt.height=256;const Zt=wt.getContext("2d");Zt.fillStyle="white",Zt.fillRect(0,0,256,256),Zt.fillStyle="#111",Zt.textAlign="center",Zt.textBaseline="middle",Zt.font=X.length>3?"bold 48px Rubik":"bold 120px Rubik",Zt.fillText(X.slice(0,8),128,128,235);const Ge=await new Promise(Ee=>wt.toBlob(Ee));await vt(new File([Ge],"legend.png",{type:"image/png"})),_t("Import")}async function ti(X){Gt();const wt=`<svg xmlns="http://www.w3.org/2000/svg" width="256" height="256" viewBox="-2 -2 28 28">${o3[X]}</svg>`;await vt(new File([wt],X+".svg",{type:"image/svg+xml"})),_t("Import")}const Zn=X=>_m.filter(([wt])=>X.includes(wt)).map(([wt,Zt,Ge,Ee,cn])=>nt.jsx(Mo,{id:wt,label:Zt,min:Ge,max:Ee,step:cn,unit:"mm",value:o[wt],onChange:an=>e({...o,[wt]:an})},wt)),Ca=(X,wt,Zt)=>nt.jsxs("details",{className:"section",open:!0,children:[nt.jsx("summary",{children:wt}),nt.jsx("div",{children:Zt})]});return nt.jsxs("main",{className:"studio",children:[nt.jsxs("aside",{children:[nt.jsxs("header",{className:"brand",children:[nt.jsx("a",{href:"../","aria-label":"Daily Object Lab gallery",children:"↝"}),nt.jsxs("div",{children:[nt.jsx("h1",{children:"Warp & Weft"}),nt.jsx("small",{children:"snip · stand · weave · mm"})]}),nt.jsx("button",{"aria-label":"Toggle dark theme","aria-pressed":xt,onClick:()=>Dt(!xt),children:xt?"☀":"☾"})]}),nt.jsxs("div",{className:"history",children:[nt.jsx("button",{disabled:zt<1,onClick:()=>yt(-1),children:"Undo"}),nt.jsx("button",{disabled:zt>=Lt.length-1,onClick:()=>yt(1),children:"Redo"}),nt.jsx("button",{onClick:qt,children:"Reset all"})]}),nt.jsx("nav",{"aria-label":"Editor sections",children:["Shape","Assembly","Surface","Import","Print"].map(X=>nt.jsx("button",{"aria-pressed":st===X,onClick:()=>_t(X),children:X},X))}),nt.jsxs("div",{className:"railbody",children:[nt.jsx("div",{hidden:st!=="Shape",children:Ca("shape","01 / A tabletop loom, from one card",nt.jsxs(nt.Fragment,{children:[nt.jsx("p",{children:"Snip sixteen tabs, stand the notched loom in two removable slotted feet, then weave a small swatch with the forked yarn shuttle. Four real parts, carried in one connected card."}),nt.jsx("div",{className:"presets",children:Object.entries(n3).map(([X,wt])=>nt.jsxs("button",{"aria-label":X,"aria-pressed":JSON.stringify(o)===JSON.stringify(wt),onClick:()=>e({...wt}),children:[nt.jsx(u3,{parameters:wt}),nt.jsx("b",{children:X})]},X))}),nt.jsx("div",{className:"keys",children:[["round","Soft corners"],["hex","Clipped corners"],["oval","Scalloped rails"]].map(([X,wt])=>nt.jsx("button",{"aria-pressed":o.shape===X,onClick:()=>e({...o,shape:X}),children:wt},X))}),Zn(["width","length","span","deckWidth","rise","pitch","spacing"]),nt.jsx("button",{onClick:Ht,children:"Bounded variation"}),nt.jsx("p",{children:"Width/height are the exact outer card envelope. Impossible combinations of loom size, foot length, spacing and frame margins block export."})]}))}),nt.jsx("div",{hidden:st!=="Assembly",children:Ca("mechanism","02 / Stand it up, weave it through",nt.jsxs(nt.Fragment,{children:[nt.jsx("p",{children:"Two downward tongues seat in closed foot slots. The loom shoulders rest on the feet, with no snap or glue. Matched semicircular notches guide the warp; a forked shuttle carries the weft. Four tabs per part stay away from all yarn and fit interfaces."}),Zn(["thickness","gap","peg","tabWidth","tabHeight"]),nt.jsx(Mo,{id:"fold",label:"Assembly separation",min:0,max:1,step:.01,unit:"fraction",value:E,onChange:X=>{at(X),ce("assembled"),Q(!0)}}),nt.jsx("p",{children:"Lift the loom to inspect the straight tongue insertion path. Feet remain bed-side down. Clearance is TOTAL extra slot width, half per side; start at 0.20 mm, calibrate and deburr. Feet are removable, not captive. Add soft yarn up to 1 mm diameter; hold the frame while weaving and avoid high warp tension."}),nt.jsxs("p",{children:["Reference: ",nt.jsx("a",{href:"https://github.com/mkasberg/white-cat-kit-card",target:"_blank",rel:"noreferrer",children:"Mike Kasberg’s White Cat Kit Card"}),", CC BY 4.0. Adapted sheet, frame and sacrificial-runner construction; new yarn notches, removable foot tongues and forked shuttle."]})]}))}),nt.jsx("div",{hidden:st!=="Surface",children:Ca("surface","03 / Marks & touch",nt.jsxs(nt.Fragment,{children:[Zn(["texture"]),nt.jsxs("label",{className:"field",children:["Text mark · up to 8 characters",nt.jsx("input",{"aria-label":"Text mark",maxLength:8,value:Xe,onChange:X=>_n(X.target.value)})]}),nt.jsx("button",{onClick:()=>de(Xe),children:"Apply text relief"}),nt.jsxs("label",{className:"field",children:["Search bundled marks",nt.jsx("input",{"aria-label":"Search icons",placeholder:"heart, sun, wave…",value:ze,onChange:X=>nn(X.target.value)})]}),nt.jsx("div",{className:"keys wrap",children:[["heart","♥"],["sun","☀"],["wave","≈"],["star","★"],["circle","●"],["plus","+"]].filter(([X])=>X.includes(ze.toLowerCase())).map(([X,wt])=>nt.jsxs("button",{"aria-label":"Apply "+X+" icon",onClick:()=>ti(X),children:[wt," ",X]},X))}),nt.jsx("p",{children:"Text and icons become the same bounded local height-map geometry as imported artwork. Change scale, threshold and raised/engraved style in Import."}),nt.jsx("div",{className:"palette",children:["#e2557a","#99a7d8","#77b7ad","#e1ac62"].map(X=>nt.jsx("button",{"aria-label":"Preview color "+X,"aria-pressed":Ct===X,style:{background:X},onClick:()=>Ot(X)},X))}),nt.jsx("p",{children:"Preview colours are not stored in STL."})]}))}),nt.jsx("div",{hidden:st!=="Import",children:Ca("import","04 / Your local source",nt.jsxs("section",{className:"imports",onDragOver:X=>X.preventDefault(),onDrop:X=>{X.preventDefault(),X.dataTransfer.files.length===1?vt(X.dataTransfer.files[0]):O("Drop one file at a time.")},children:[nt.jsx("p",{children:"PNG / JPEG / simple SVG → loom rail relief. ASCII / binary STL → integrated loom rail medallion. The original mesh is solid-unioned, never replaced with a convex hull. Concavities, cavities, branches and unsupported overhangs are rejected explicitly."}),nt.jsxs("label",{className:"field",children:["STL up axis · select before attaching",nt.jsxs("select",{id:"axis",value:Rt,onChange:X=>{Gt(),It(X.target.value)},children:[nt.jsx("option",{value:"z",children:"Z up"}),nt.jsx("option",{value:"y",children:"Y up → rotate +90° X"}),nt.jsx("option",{value:"-z",children:"−Z up → turn upside down"})]})]}),nt.jsxs("label",{className:"picker",children:["Choose / replace source",nt.jsx("input",{id:"file",type:"file",accept:".png,.jpg,.jpeg,.svg,.stl,image/png,image/jpeg,image/svg+xml",onChange:X=>{vt(X.target.files[0]),X.target.value=""}})]}),nt.jsx("div",{className:"samplebuttons",children:["mark.png","waves.jpg","ring.svg","wedge-ascii.stl","gem-binary.stl"].map(X=>nt.jsxs("button",{onClick:()=>mt(X),children:["Try ",X]},X))}),nt.jsxs("p",{className:"downloads",children:["Fixtures: ",["mark.png","waves.jpg","ring.svg","wedge-ascii.stl","gem-binary.stl"].map(X=>nt.jsx("a",{href:"/daily-app2/20261027-20/samples/"+X,download:!0,children:X},X))]}),nt.jsx("p",{children:N?"Checking local content & topology…":v}),h&&l?.kind==="image"&&nt.jsxs(nt.Fragment,{children:[nt.jsxs("div",{className:"imagepreviews",children:[nt.jsxs("figure",{children:[nt.jsx("img",{src:h.url,alt:"Imported source image"}),nt.jsxs("figcaption",{children:["Source ",h.width," × ",h.height," px"]})]}),nt.jsxs("figure",{children:[nt.jsx("img",{className:"pixelated",src:x,alt:"Exact 20 by 20 conversion grid"}),nt.jsx("figcaption",{children:"Cutout / 20 × 20 heights"})]})]}),nt.jsxs("p",{children:["2D-to-relief, ",nt.jsx("b",{children:"not full 3D reconstruction from a photo."})," Bright holes remain unraised (or unengraved) inside a continuous solid backing. This is sampled height geometry, not exact outline tracing."]}),nt.jsxs("label",{className:"field",children:["Conversion",nt.jsxs("select",{id:"mode",value:p.mode,onChange:X=>m({...p,mode:X.target.value}),children:[nt.jsx("option",{value:"threshold",children:"Thresholded silhouette relief"}),nt.jsx("option",{value:"relief",children:"Grayscale height relief"})]})]}),nt.jsxs("label",{className:"field",children:["Background",nt.jsxs("select",{id:"background",value:p.background,onChange:X=>m({...p,background:X.target.value}),children:[nt.jsx("option",{value:"light",children:"Remove light / transparent"}),nt.jsx("option",{value:"dark",children:"Remove dark / invert"})]})]}),nt.jsxs("label",{className:"field",children:["Style",nt.jsxs("select",{id:"relief-style",value:p.style,onChange:X=>m({...p,style:X.target.value,depth:X.target.value==="engraved"?.4:1.5}),children:[nt.jsx("option",{value:"raised",children:"Raised"}),nt.jsx("option",{value:"engraved",children:"Engraved · max 0.6 mm"})]})]}),nt.jsxs("label",{className:"field",children:["Fit / crop",nt.jsxs("select",{id:"image-fit",value:p.fit,onChange:X=>m({...p,fit:X.target.value}),children:[nt.jsx("option",{value:"contain",children:"Fit entire source"}),nt.jsx("option",{value:"cover",children:"Fill / crop edges"})]})]}),nt.jsx(Mo,{id:"threshold",label:"Darkness threshold",min:1,max:254,value:p.threshold,unit:"/255",onChange:X=>m({...p,threshold:X})}),nt.jsx(Mo,{id:"depth",label:"Relief depth",min:.4,max:p.style==="engraved"?.6:3,step:.1,value:p.depth,onChange:X=>m({...p,depth:X})}),["panX","panY"].map(X=>nt.jsx(Mo,{id:X,label:"Crop "+(X==="panX"?"X":"Y"),min:-25,max:25,unit:"%",value:p[X],onChange:wt=>m({...p,[X]:wt})},X))]}),l?.kind==="stl"&&nt.jsxs(nt.Fragment,{children:[nt.jsx("div",{className:"source3d",children:nt.jsx(vm,{model:{parts:[{...l.mesh,stride:3,name:"source"}],layout:[[0,0,0]]},angle:0})}),nt.jsxs("p",{children:[nt.jsx("b",{children:"Oriented source:"})," ",l.mesh.dimensions.map(X=>X.toFixed(2)).join(" × ")," mm · ",l.mesh.triangles," triangles · ",l.mesh.format,". Broad flat bed contact and outward-wound closed convex solid verified. No repair performed."]}),nt.jsxs("label",{className:"check",children:[nt.jsx("input",{id:"confirm-mm",type:"checkbox",checked:l.confirmed,onChange:X=>c({...l,confirmed:X.target.checked})}),"I confirm these source coordinates are millimeters (STL has no unit metadata)."]}),nt.jsx("p",{children:"XY scales proportionally to footprint; Z independently fits grip height. Original concavities, hollow shells, disconnected parts or overhangs are unsupported; reorient a flat base before importing. Changing the up-axis selector clears this source and requests reattachment."})]}),l&&nt.jsxs(nt.Fragment,{children:[nt.jsx("h3",{children:"Physical placement · isolated loom rail well"}),[["size","Import footprint",4,7,.1,"mm"],...l.kind==="stl"?[["height","Imported grip height",.6,3,.1,"mm"]]:[],["rotation","Rotate around Z",-180,180,5,"°"],["x","Grip X offset",-1.5,1.5,.1,"mm"],["y","Grip Y offset",-2,2,.1,"mm"]].map(([X,wt,Zt,Ge,Ee,cn])=>nt.jsx(Mo,{id:"import-"+X,label:wt,min:Zt,max:Ge,step:Ee,unit:cn,value:i[X],onChange:an=>r({...i,[X]:an})},X)),nt.jsxs("div",{className:"keys wrap",children:[nt.jsx("button",{onClick:()=>r({...ds}),children:"Center / reset transforms"}),l.kind==="image"&&nt.jsx("button",{onClick:()=>m({...Ol}),children:"Reset image controls"}),nt.jsx("button",{onClick:Gt,children:"Remove import"})]})]}),V&&nt.jsx("p",{className:"error",role:"alert",children:V}),nt.jsx("p",{children:"Limits: 2 MB; PNG/JPEG ≤12 MP and 6,000 px side, normalized to ≤500 px; SVG simple paths/shapes only, rasterized locally to 256 px; STL ≤1,500 triangles, 0.2–250 mm per axis. Every source stays on this device."})]}))}),nt.jsx("div",{hidden:st!=="Print",children:Ca("print","05 / Make & keep",nt.jsxs(nt.Fragment,{children:[nt.jsx("p",{children:hS}),nt.jsxs("label",{className:"field",children:["Local design name",nt.jsx("input",{"aria-label":"Design name",maxLength:40,value:ve,onChange:X=>Me(X.target.value)})]}),nt.jsx("button",{onClick:we,children:"Save named design"}),nt.jsx("div",{className:"saved",children:ae.map(X=>nt.jsxs("button",{onClick:()=>Nt(structuredClone(X.data)).catch(wt=>O(wt.message)),children:["Open ",X.name]},X.name))}),nt.jsxs("div",{className:"keys",children:[nt.jsx("button",{onClick:Tt,children:"Save JSON"}),nt.jsxs("label",{className:"open",children:["Open JSON",nt.jsx("input",{id:"open-design",type:"file",accept:".json",onChange:X=>{$t(X.target.files[0]),X.target.value=""}})]})]}),nt.jsx("p",{children:"JSON includes bounded image/mesh payloads, not paths to missing files. Local named designs keep up to six entries."})]}))})]})]}),nt.jsxs("section",{className:"stage","data-geometry-signature":T?a3(Ll(T,G)):"",children:[nt.jsxs("div",{className:"viewbar",children:[nt.jsx("div",{className:"keys wrap",children:[["plate","Connected card"],["assembled","Assembled loom"],["exploded","Exploded"],["palm","Loom only"],["wheel","Left foot"],["support-b","Right foot"],["shuttle","Shuttle only"],["loose","De-tabbed parts"]].map(([X,wt])=>nt.jsx("button",{"aria-pressed":Le===X,onClick:()=>{ce(X),Q(!["plate","loose"].includes(X))},children:wt},X))}),nt.jsx("button",{"aria-pressed":j,onClick:()=>un(!j),children:"See-through solid"}),nt.jsx("span",{role:"status",children:M||N?"Building / validating…":At?"Check settings":"Current solid ready"})]}),nt.jsx("div",{className:"viewer",children:nt.jsx(vm,{model:T,assembled:H,angle:Be,lift:E,color:Ct,dark:xt,ghost:j,view:Le,active:St,onSelect:Et})}),nt.jsxs("div",{className:"specs",children:[nt.jsxs("div",{children:[nt.jsx("small",{children:"EXPORT X × Y × Z · mm"}),nt.jsx("strong",{"data-testid":"dimensions",children:pt?pt.map(X=>X.toFixed(2)).join(" × "):"—"})]}),nt.jsxs("div",{children:[nt.jsx("small",{children:"SHEET / SLOT WIDTH · mm"}),nt.jsx("strong",{children:T?T.H.toFixed(2)+" / "+T.mechanism.slotWidthMm.toFixed(2):"—"})]})]}),nt.jsxs("p",{className:"caption",children:[At&&"Preview shows the last valid result. Export paused. ","Connected card and four de-tabbed parts use identical checked solids. Both tongues seat through closed foot slots; the frame lifts straight out. Separation is an assembly inspection aid, not motion. Yarn is not included or represented by printable geometry."]}),nt.jsxs("div",{className:"export",children:[(ht.length>0||b)&&nt.jsx("p",{className:"error",role:"alert",children:ht.join(" ")||b}),V&&st!=="Import"&&nt.jsx("p",{className:"error",role:"alert",children:V}),nt.jsx("h2",{children:"One card. Four parts. Start weaving."}),nt.jsx("p",{children:"Print bed-flat in PLA/PETG, 0.20 mm layers, no supports intended. Snip sixteen tabs and trim flush. Align the feet and lower both loom tongues into their slots. Wind soft yarn around matched notches; weave over/under with the shuttle and reverse each row. Print card OR loose parts. Yarn required; no other hardware. Start with 0.20 mm total slot allowance and calibrate. Hold the frame while weaving; loose feet are not captive. No physical print, yarn friction, fit, strength or stability test performed."}),nt.jsxs("div",{className:"exportrow",children:[nt.jsxs("label",{children:["Printable part",nt.jsxs("select",{id:"part",value:G,onChange:X=>K(X.target.value),children:[nt.jsx("option",{value:"all",children:"Connected card · frame + four parts"}),yp.map(X=>nt.jsx("option",{children:X},X))]})]}),nt.jsx("button",{className:"accent",disabled:At,onClick:$,children:"Download STL ↓"}),nt.jsx("button",{disabled:At,onClick:kt,children:"Everything ZIP ↓"})]}),nt.jsx("div",{className:"keys wrap",children:yp.map(X=>nt.jsxs("button",{disabled:At,onClick:()=>Ut(Ll(T,X),"model/stl","warp-weft-"+X+".stl"),children:[X," STL"]},X))}),nt.jsxs("small",{children:[At?"Export blocked: wait for the current valid build or fix feedback.":"Current checked geometry shared by preview and export."," STL contains geometry, not colour."]})]})]})]})}function u3({parameters:o}){const[e,i]=oe.useState(null);return oe.useEffect(()=>{const r=new Worker(new URL("/daily-app2/20261027-20/assets/model.worker-ChPwXPfd.js",import.meta.url),{type:"module"});return r.onmessage=({data:l})=>{l.model&&i(l.model),r.terminate()},r.postMessage({id:1,p:o,source:null,t:ds}),()=>r.terminate()},[]),nt.jsx("div",{className:"thumbnail",children:nt.jsx(vm,{model:e,assembled:!0,angle:0,compact:!0})})}JE.createRoot(document.getElementById("root")).render(nt.jsx(oe.StrictMode,{children:nt.jsx(l3,{})}));
