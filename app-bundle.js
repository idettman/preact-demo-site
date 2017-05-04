!function(){"use strict";function e(){}function t(t,n){var o,l,r,i,u=arguments,a=X;for(i=arguments.length;i-- >2;)F.push(u[i]);for(n&&null!=n.children&&(F.length||F.push(n.children),delete n.children);F.length;)if((l=F.pop())&&void 0!==l.pop)for(i=l.length;i--;)F.push(l[i]);else!0!==l&&!1!==l||(l=null),(r="function"!=typeof t)&&(null==l?l="":"number"==typeof l?l=String(l):"string"!=typeof l&&(r=!1)),r&&o?a[a.length-1]+=l:a===X?a=[l]:a.push(l),o=r;var s=new e;return s.nodeName=t,s.children=a,s.attributes=null==n?void 0:n,s.key=null==n?void 0:n.key,void 0!==K.vnode&&K.vnode(s),s}function n(e,t){for(var n in t)e[n]=t[n];return e}function o(e,o){return t(e.nodeName,n(n({},e.attributes),o),arguments.length>2?[].slice.call(arguments,2):e.children)}function l(e){!e._dirty&&(e._dirty=!0)&&1==ne.push(e)&&(K.debounceRendering||setTimeout)(r)}function r(){var e,t=ne;for(ne=[];e=t.pop();)e._dirty&&N(e)}function i(e,t,n){return"string"==typeof t||"number"==typeof t?void 0!==e.splitText:"string"==typeof t.nodeName?!e._componentConstructor&&u(e,t.nodeName):n||e._componentConstructor===t.nodeName}function u(e,t){return e.normalizedNodeName===t||e.nodeName.toLowerCase()===t.toLowerCase()}function a(e){var t=n({},e.attributes);t.children=e.children;var o=e.nodeName.defaultProps;if(void 0!==o)for(var l in o)void 0===t[l]&&(t[l]=o[l]);return t}function s(e,t){var n=t?document.createElementNS("http://www.w3.org/2000/svg",e):document.createElement(e);return n.normalizedNodeName=e,n}function c(e){e.parentNode&&e.parentNode.removeChild(e)}function p(e,t,n,o,l){if("className"===t&&(t="class"),"key"===t);else if("ref"===t)n&&n(null),o&&o(e);else if("class"!==t||l)if("style"===t){if(o&&"string"!=typeof o&&"string"!=typeof n||(e.style.cssText=o||""),o&&"object"==typeof o){if("string"!=typeof n)for(var r in n)r in o||(e.style[r]="");for(var i in o)e.style[i]="number"==typeof o[i]&&!1===te.test(i)?o[i]+"px":o[i]}}else if("dangerouslySetInnerHTML"===t)o&&(e.innerHTML=o.__html||"");else if("o"==t[0]&&"n"==t[1]){var u=t!==(t=t.replace(/Capture$/,""));t=t.toLowerCase().substring(2),o?n||e.addEventListener(t,h,u):e.removeEventListener(t,h,u),(e._listeners||(e._listeners={}))[t]=o}else if("list"!==t&&"type"!==t&&!l&&t in e)d(e,t,null==o?"":o),null!=o&&!1!==o||e.removeAttribute(t);else{var a=l&&t!==(t=t.replace(/^xlink\:?/,""));null==o||!1===o?a?e.removeAttributeNS("http://www.w3.org/1999/xlink",t.toLowerCase()):e.removeAttribute(t):"function"!=typeof o&&(a?e.setAttributeNS("http://www.w3.org/1999/xlink",t.toLowerCase(),o):e.setAttribute(t,o))}else e.className=o||""}function d(e,t,n){try{e[t]=n}catch(e){}}function h(e){return this._listeners[e.type](K.event&&K.event(e)||e)}function f(){for(var e;e=oe.pop();)K.afterMount&&K.afterMount(e),e.componentDidMount&&e.componentDidMount()}function m(e,t,n,o,l,r){le++||(re=null!=l&&void 0!==l.ownerSVGElement,ie=null!=e&&!(ee in e));var i=v(e,t,n,o,r);return l&&i.parentNode!==l&&l.appendChild(i),--le||(ie=!1,r||f()),i}function v(e,t,n,o,l){var r=e,i=re;if(null==t&&(t=""),"string"==typeof t)return e&&void 0!==e.splitText&&e.parentNode&&(!e._component||l)?e.nodeValue!=t&&(e.nodeValue=t):(r=document.createTextNode(t),e&&(e.parentNode&&e.parentNode.replaceChild(r,e),y(e,!0))),r[ee]=!0,r;if("function"==typeof t.nodeName)return S(e,t,n,o);if(re="svg"===t.nodeName||"foreignObject"!==t.nodeName&&re,(!e||!u(e,String(t.nodeName)))&&(r=s(String(t.nodeName),re),e)){for(;e.firstChild;)r.appendChild(e.firstChild);e.parentNode&&e.parentNode.replaceChild(r,e),y(e,!0)}var a=r.firstChild,c=r[ee]||(r[ee]={}),p=t.children;return!ie&&p&&1===p.length&&"string"==typeof p[0]&&null!=a&&void 0!==a.splitText&&null==a.nextSibling?a.nodeValue!=p[0]&&(a.nodeValue=p[0]):(p&&p.length||null!=a)&&g(r,p,n,o,ie||null!=c.dangerouslySetInnerHTML),_(r,t.attributes,c),re=i,r}function g(e,t,n,o,l){var r,u,a,s,p=e.childNodes,d=[],h={},f=0,m=0,g=p.length,b=0,_=t?t.length:0;if(0!==g)for(var w=0;w<g;w++){var x=p[w],C=x[ee],k=_&&C?x._component?x._component.__key:C.key:null;null!=k?(f++,h[k]=x):(C||(void 0!==x.splitText?!l||x.nodeValue.trim():l))&&(d[b++]=x)}if(0!==_)for(var N=0;N<_;N++){a=t[N],s=null;var S=a.key;if(null!=S)f&&void 0!==h[S]&&(s=h[S],h[S]=void 0,f--);else if(!s&&m<b)for(r=m;r<b;r++)if(void 0!==d[r]&&i(u=d[r],a,l)){s=u,d[r]=void 0,r===b-1&&b--,r===m&&m++;break}s=v(s,a,n,o),s&&s!==e&&(N>=g?e.appendChild(s):s!==p[N]&&(s===p[N+1]?c(p[N]):e.insertBefore(s,p[N]||null)))}if(f)for(var U in h)void 0!==h[U]&&y(h[U],!1);for(;m<=b;)void 0!==(s=d[b--])&&y(s,!1)}function y(e,t){var n=e._component;n?U(n):(null!=e[ee]&&e[ee].ref&&e[ee].ref(null),!1!==t&&null!=e[ee]||c(e),b(e))}function b(e){for(e=e.lastChild;e;){var t=e.previousSibling;y(e,!0),e=t}}function _(e,t,n){var o;for(o in n)t&&null!=t[o]||null==n[o]||p(e,o,n[o],n[o]=void 0,re);for(o in t)"children"===o||"innerHTML"===o||o in n&&t[o]===("value"===o||"checked"===o?e[o]:n[o])||p(e,o,n[o],n[o]=t[o],re)}function w(e){var t=e.constructor.name;(ue[t]||(ue[t]=[])).push(e)}function x(e,t,n){var o,l=ue[e.name];if(e.prototype&&e.prototype.render?(o=new e(t,n),O.call(o,t,n)):(o=new O(t,n),o.constructor=e,o.render=C),l)for(var r=l.length;r--;)if(l[r].constructor===e){o.nextBase=l[r].nextBase,l.splice(r,1);break}return o}function C(e,t,n){return this.constructor(e,n)}function k(e,t,n,o,r){e._disable||(e._disable=!0,(e.__ref=t.ref)&&delete t.ref,(e.__key=t.key)&&delete t.key,!e.base||r?e.componentWillMount&&e.componentWillMount():e.componentWillReceiveProps&&e.componentWillReceiveProps(t,o),o&&o!==e.context&&(e.prevContext||(e.prevContext=e.context),e.context=o),e.prevProps||(e.prevProps=e.props),e.props=t,e._disable=!1,n!==J&&(n!==Z&&!1===K.syncComponentUpdates&&e.base?l(e):N(e,Z,r)),e.__ref&&e.__ref(e))}function N(e,t,o,l){if(!e._disable){var r,i,u,s=e.props,c=e.state,p=e.context,d=e.prevProps||s,h=e.prevState||c,v=e.prevContext||p,g=e.base,b=e.nextBase,_=g||b,w=e._component,C=!1;if(g&&(e.props=d,e.state=h,e.context=v,t!==Q&&e.shouldComponentUpdate&&!1===e.shouldComponentUpdate(s,c,p)?C=!0:e.componentWillUpdate&&e.componentWillUpdate(s,c,p),e.props=s,e.state=c,e.context=p),e.prevProps=e.prevState=e.prevContext=e.nextBase=null,e._dirty=!1,!C){r=e.render(s,c,p),e.getChildContext&&(p=n(n({},p),e.getChildContext()));var S,O,T=r&&r.nodeName;if("function"==typeof T){var M=a(r);i=w,i&&i.constructor===T&&M.key==i.__key?k(i,M,Z,p,!1):(S=i,e._component=i=x(T,M,p),i.nextBase=i.nextBase||b,i._parentComponent=e,k(i,M,J,p,!1),N(i,Z,o,!0)),O=i.base}else u=_,S=w,S&&(u=e._component=null),(_||t===Z)&&(u&&(u._component=null),O=m(u,r,p,o||!g,_&&_.parentNode,!0));if(_&&O!==_&&i!==w){var j=_.parentNode;j&&O!==j&&(j.replaceChild(O,_),S||(_._component=null,y(_,!1)))}if(S&&U(S),e.base=O,O&&!l){for(var A=e,L=e;L=L._parentComponent;)(A=L).base=O;O._component=A,O._componentConstructor=A.constructor}}if(!g||o?oe.unshift(e):C||(f(),e.componentDidUpdate&&e.componentDidUpdate(d,h,v),K.afterUpdate&&K.afterUpdate(e)),null!=e._renderCallbacks)for(;e._renderCallbacks.length;)e._renderCallbacks.pop().call(e);le||l||f()}}function S(e,t,n,o){for(var l=e&&e._component,r=l,i=e,u=l&&e._componentConstructor===t.nodeName,s=u,c=a(t);l&&!s&&(l=l._parentComponent);)s=l.constructor===t.nodeName;return l&&s&&(!o||l._component)?(k(l,c,Y,n,o),e=l.base):(r&&!u&&(U(r),e=i=null),l=x(t.nodeName,c,n),e&&!l.nextBase&&(l.nextBase=e,i=null),k(l,c,Z,n,o),e=l.base,i&&e!==i&&(i._component=null,y(i,!1))),e}function U(e){K.beforeUnmount&&K.beforeUnmount(e);var t=e.base;e._disable=!0,e.componentWillUnmount&&e.componentWillUnmount(),e.base=null;var n=e._component;n?U(n):t&&(t[ee]&&t[ee].ref&&t[ee].ref(null),e.nextBase=t,c(t),w(e),b(t)),e.__ref&&e.__ref(null)}function O(e,t){this._dirty=!0,this.context=t,this.props=e,this.state=this.state||{}}function T(e,t,n){return m(n,e,{},!1,t,!1)}function M(e,t){for(var n in t)e[n]=t[n];return e}function j(e,t,n){void 0===n&&(n=ce);var o,l=/(?:\?([^#]*))?(#.*)?$/,r=e.match(l),i={};if(r&&r[1])for(var u=r[1].split("&"),a=0;a<u.length;a++){var s=u[a].split("=");i[decodeURIComponent(s[0])]=decodeURIComponent(s.slice(1).join("="))}e=L(e.replace(l,"")),t=L(t||"");for(var c=Math.max(e.length,t.length),p=0;p<c;p++)if(t[p]&&":"===t[p].charAt(0)){var d=t[p].replace(/(^\:|[+*?]+$)/g,""),h=(t[p].match(/[+*?]+$/)||ce)[0]||"",f=~h.indexOf("+"),m=~h.indexOf("*"),v=e[p]||"";if(!v&&!m&&(h.indexOf("?")<0||f)){o=!1;break}if(i[d]=decodeURIComponent(v),f||m){i[d]=e.slice(p).map(decodeURIComponent).join("/");break}}else if(t[p]!==e[p]){o=!1;break}return(!0===n.default||!1!==o)&&i}function A(e,t){var n=e.attributes||ce,o=t.attributes||ce;return n.default?1:o.default?-1:P(n.path)-P(o.path)||n.path.length-o.path.length}function L(e){return R(e).split("/")}function P(e){return(R(e).match(/\/+/g)||"").length}function R(e){return e.replace(/(^\/+|\/+$)/g,"")}function E(e){return null!=e.__preactattr_||"undefined"!=typeof Symbol&&null!=e[Symbol.for("preactattr")]}function B(e,t){void 0===t&&(t="push"),pe&&pe[t]?pe[t](e):"undefined"!=typeof history&&history[t+"State"]&&history[t+"State"](null,null,e)}function D(){var e;return e=pe&&pe.location?pe.location:pe&&pe.getCurrentLocation?pe.getCurrentLocation():"undefined"!=typeof location?location:fe,""+(e.pathname||"")+(e.search||"")}function I(e,t){return void 0===t&&(t=!1),"string"!=typeof e&&e.url&&(t=e.replace,e=e.url),H(e)&&B(e,t?"replace":"push"),W(e)}function H(e){for(var t=de.length;t--;)if(de[t].canRoute(e))return!0;return!1}function W(e){for(var t=!1,n=0;n<de.length;n++)!0===de[n].routeTo(e)&&(t=!0);for(var o=he.length;o--;)he[o](e);return t}function q(e){if(e&&e.getAttribute){var t=e.getAttribute("href"),n=e.getAttribute("target");if(t&&t.match(/^\//g)&&(!n||n.match(/^_?self$/i)))return I(t)}}function z(e){if(0==e.button)return q(e.currentTarget||e.target||this),$(e)}function $(e){return e&&(e.stopImmediatePropagation&&e.stopImmediatePropagation(),e.stopPropagation&&e.stopPropagation(),e.preventDefault()),!1}function V(e){if(!(e.ctrlKey||e.metaKey||e.altKey||e.shiftKey||0!==e.button)){var t=e.target;do{if("A"===String(t.nodeName).toUpperCase()&&t.getAttribute("href")&&E(t)){if(t.hasAttribute("native"))return;if(q(t))return $(e)}}while(t=t.parentNode)}}function G(){me||("function"==typeof addEventListener&&(pe||addEventListener("popstate",function(){return W(D())}),addEventListener("click",V)),me=!0)}var K={},F=[],X=[],J=0,Z=1,Q=2,Y=3,ee="__preactattr_",te=/acit|ex(?:s|g|n|p|$)|rph|ows|mnc|ntw|ine[ch]|zoo|^ord/i,ne=[],oe=[],le=0,re=!1,ie=!1,ue={};n(O.prototype,{setState:function(e,t){var o=this.state;this.prevState||(this.prevState=n({},o)),n(o,"function"==typeof e?e(o,this.props):e),t&&(this._renderCallbacks=this._renderCallbacks||[]).push(t),l(this)},forceUpdate:function(e){e&&(this._renderCallbacks=this._renderCallbacks||[]).push(e),N(this,Q)},render:function(){}});var ae={h:t,createElement:t,cloneElement:o,Component:O,render:T,rerender:r,options:K},se=Object.freeze({default:ae,h:t,createElement:t,cloneElement:o,Component:O,render:T,rerender:r,options:K}),ce={},pe=null,de=[],he=[],fe={},me=!1,ve=function(e){function t(t){e.call(this,t),t.history&&(pe=t.history),this.state={url:t.url||D()},G()}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t.prototype.shouldComponentUpdate=function(e){return!0!==e.static||(e.url!==this.props.url||e.onChange!==this.props.onChange)},t.prototype.canRoute=function(e){return this.getMatchingChildren(this.props.children,e,!1).length>0},t.prototype.routeTo=function(e){return this._didRoute=!1,this.setState({url:e}),this.updating?this.canRoute(e):(this.forceUpdate(),this._didRoute)},t.prototype.componentWillMount=function(){de.push(this),this.updating=!0},t.prototype.componentDidMount=function(){var e=this;pe&&(this.unlisten=pe.listen(function(t){e.routeTo(""+(t.pathname||"")+(t.search||""))})),this.updating=!1},t.prototype.componentWillUnmount=function(){"function"==typeof this.unlisten&&this.unlisten(),de.splice(de.indexOf(this),1)},t.prototype.componentWillUpdate=function(){this.updating=!0},t.prototype.componentDidUpdate=function(){this.updating=!1},t.prototype.getMatchingChildren=function(e,t,n){return e.slice().sort(A).map(function(e){var l=e.attributes||{},r=l.path,i=j(t,r,l);if(i){if(!1!==n){var u={url:t,matches:i};return M(u,i),o(e,u)}return e}return!1}).filter(Boolean)},t.prototype.render=function(e,t){var n=e.children,o=e.onChange,l=t.url,r=this.getMatchingChildren(n,l,!0),i=r[0]||null;this._didRoute=!!i;var u=this.previousUrl;return l!==u&&(this.previousUrl=l,"function"==typeof o&&o({router:this,url:l,previous:u,active:r,current:i})),i},t}(O),ge=function(e){return t("a",M({onClick:z},e))},ye=function(e){return t(e.component,e)};ve.subscribers=he,ve.getCurrentUrl=D,ve.route=I,ve.Router=ve,ve.Route=ye,ve.Link=ge;var be=Object.freeze({subscribers:he,getCurrentUrl:D,route:I,Router:ve,Route:ye,Link:ge,default:ve}),_e=function(e){return t("a",{class:"header__title",href:"https://github.com/idettman/idettman.github.io",target:"_blank"},t("svg",{viewBox:"0 0 35 12"},t("defs",null,t("linearGradient",{id:"MyGradient",x1:"0%",x2:"0%",y1:"0%",y2:"100%"},t("stop",{offset:"0%","stop-color":"cornflowerblue"}),t("stop",{offset:"100%","stop-color":"#0B598D"}))),t("text",{x:"0",y:"7",style:"fill: url(#MyGradient); font-size: 1rem"},e.title),t("text",{x:"0",y:"10",style:"fill: orange; font-size: 0.34rem"},e.subtitle)))},we=se&&ae||se,xe=be&&ve||be,Ce=function(e,t){return t={exports:{}},e(t,t.exports),t.exports}(function(e,t){function n(e,t){var n={};for(var o in e)t.indexOf(o)>=0||Object.prototype.hasOwnProperty.call(e,o)&&(n[o]=e[o]);return n}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function r(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0}),t.Link=t.Match=void 0;var i=Object.assign||function(e){for(var t=arguments,n=1;n<arguments.length;n++){var o=t[n];for(var l in o)Object.prototype.hasOwnProperty.call(o,l)&&(e[l]=o[l])}return e},u=t.Match=function(e){function t(){var n,r,i,u=arguments;o(this,t);for(var a=arguments.length,s=Array(a),c=0;c<a;c++)s[c]=u[c];return n=r=l(this,e.call.apply(e,[this].concat(s))),r.update=function(e){r.nextUrl=e,r.setState({})},i=n,l(r,i)}return r(t,e),t.prototype.componentDidMount=function(){xe.subscribers.push(this.update)},t.prototype.componentWillUnmount=function(){xe.subscribers.splice(xe.subscribers.indexOf(this.update)>>>0,1)},t.prototype.render=function(e){var t=this.nextUrl||(0,xe.getCurrentUrl)(),n=t.replace(/\?.+$/,"");return this.nextUrl=null,e.children[0]&&e.children[0]({url:t,path:n,matches:n===e.path})},t}(we.Component),a=function(e){var t=e.activeClassName,o=e.path,l=n(e,["activeClassName","path"]);return(0,we.h)(u,{path:o||l.href},function(e){var n=e.matches;return(0,we.h)(xe.Link,i({},l,{class:[l.class||l.className,n&&t].filter(Boolean).join(" ")}))})};t.Link=a,t.default=u,u.Link=a}),ke=Ce.Link,Ne=function(e){return t("div",{className:"main-navigation"},Object.keys(e.navData).map(function(n){return t(ke,{activeClassName:"active",href:e.navData[n].path},e.navData[n].title)}))},Se=function(e){function n(){e.apply(this,arguments)}return e&&(n.__proto__=e),n.prototype=Object.create(e&&e.prototype),n.prototype.constructor=n,n.prototype.render=function(){return t("div",null,t("h1",null,"Developer Log"),t("div",null,t("h2",null,"Recommended postcss plugins"),t("ul",null,t("li",null,"postcss-import"),t("li",null,"postcss-cssnext"),t("li",null,"postcss-url")),t("a",{href:"http://postcss.parts/tag/sass",target:"_blank",className:"button marginTop"},"Postcss plugin catalog")),t("div",null,t("h2",null,"ES2015 const + let"),t("p",null,"ES6 const has nothing to do with immutability of object values. const creates a immutable binding only, the bound object's value can definitely change. The only thing immutable is the binding."),t("p",null,"The only difference between const and let is that const makes the contract that no rebinding will happen.")),t("div",null,t("h2",null,"When Not to use Arrow Functions"),t("ul",null,t("li",null,"In event handlers when you want the function scoped to the object dispatching the event"),t("li",null,"As object methods"),t("li",null,"As prototype methods"))),t("div",null,t("h2",null,"ES6 Block Scope is The new IIFE"),t("div",{className:"gist gist-iife"},"'use strict' ",t("br",null),"{",t("br",null),"   const component = function()","{}",t("br",null),"}"),t("p",null,"The const is going to be scoped to that block and unavailable in the global scope")),t("div",null,t("h2",null,"HTML Box Model"),t("p",null,"After helping a friend debug a nested dom element that was not affecting the sizing of it's containing element."),t("p",null,"I decided to make a simple overview of the dom box model and how the display and position values work"),t("ul",null,t("li",null,"The following position types will not affect containing elements"),t("li",null,"absolute"),t("li",null,"fixed"),t("li",null,"relative (only the initial position is reflected by the box model, top and left values are not reflected)"))))},n}(O),Ue=function(e){function n(){e.apply(this,arguments)}return e&&(n.__proto__=e),n.prototype=Object.create(e&&e.prototype),n.prototype.constructor=n,n.prototype.render=function(){return t("div",null,t("h1",null,"Bash Reference"),t("h2",null,"OSX Terminal"),t("ul",null,t("li",null,t("h3",null,"Stop a running terminal process"),t("p",null,"Ctrl + C"),t("p",null,"Ctrl + Z (suspends)")),t("li",null,t("h3",null,"history"),t("p",null,"show command history")),t("li",null,t("h3",null,"top"),t("p",null,"show current processes")),t("li",null,t("h3",null,"touch"),t("p",null,"touch filename.txt")),t("li",null,t("h3",null,"man"),t("code",null,"man kill")),t("li",null,t("h3",null,"show ip address"),t("code",null,"ipconfig getifaddr en0")),t("li",null,t("h3",null,"wget"),t("code",null,"brew install wget"),t("code",null,"wget http://google.com")),t("li",null,t("h3",null,"flush osx DNS cache"),t("code",null,"sudo killall -HUP mDNSResponder"),t("a",{href:"http://www.howtoisolve.com/how-to-flush-dns-cache-in-mac-os-x-ei-capitan-10-11-10-10-4/"},"source page")),t("li",null,t("h3",null,"curl"),t("code",null,"curl --proxy http://proxy.com:80 http://site.com:80"),t("code",null,"curl -O http://site.com/file.ext")),t("li",null,t("h3",null,"nslookup"),t("code",null,"nslookup target.site.net")),t("li",null,t("h3",null,"touch"),t("code",null,"touch filename.ext")),t("li",null,t("h3",null,"show command history"),t("code",null,"history")),t("li",null,t("h3",null,"show current processes"),t("code",null,"top")),t("li",null,t("h3",null,"show external IP address"),t("code",null,"curl ipecho.net/plain; echo")),t("li",null,t("h3",null,"show network IP address"),t("code",null,"ipconfig getifaddr en0")),t("li",null,t("h3",null,"run the last command again"),t("code",null,"!!"),t("h4",null,"if you forgot sudo on last command"),t("code",null,"sudo !!")),t("li",null,t("h3",null,"start a simple server in any folder"),t("code",null,"python -m SimpleHTTPServer 8000")),t("li",null,t("h3",null,"view file system usage"),t("code",null,"sudo fs_usage")),t("li",null,t("h3",null,"copy large folder/file data"),t("code",null,"ditto -V /old/work/ /new/work/"))))},n}(O),Oe=function(e){function n(){e.apply(this,arguments)}return e&&(n.__proto__=e),n.prototype=Object.create(e&&e.prototype),n.prototype.constructor=n,n.prototype.render=function(){return t("div",null,t("h1",null,"Repos content"),t("dl",null,t("dt",null,"storygraph"),t("dd",null,t("a",{href:"https://github.com/idettman/story-graph"},"story-graph")),t("dt",null,"webidl-externs"),t("dd",null,t("a",{href:"https://github.com/idettman/webidl-externs"},"webidl-externs"))))},n}(O),Te=function(e){function n(){e.apply(this,arguments)}return e&&(n.__proto__=e),n.prototype=Object.create(e&&e.prototype),n.prototype.constructor=n,n.prototype.render=function(){return t("div",null,t("h1",null,"Git Methodology"),t("h2",null,"Before submitting a bug or feature request"),t("p",null,"Capable programmers should always attempt to investigate and fix problems themselves before asking for others to help. Submit a pull request instead of an issue!"),t("ul",null,t("li",null,"Have you actually read the error message?"),t("li",null,"Have you checked for a Troubleshooting wiki/page?"),t("li",null,"Have you searched for similar issues?"),t("li",null,"Have you updated to the latest stable version of node, npm and the packages you're using?"),t("li",null,"Have you checked that it's not a problem with one of the packages you're using, rather than npm itself?"),t("li",null,"Have you looked at what's involved in fixing/implementing this yourself?")),t("h2",null,"A great bug report contains"),t("ul",null,t("li",null,"Context – what were you trying to achieve?"),t("li",null,"Detailed steps to reproduce the error from scratch. Try isolating the minimal amount of code needed to reproduce the error."),t("li",null,"A link to the full corresponding log output."),t("li",null,"Evidence you've looked into solving the problem and ideally, a theory on the cause and a possible solution.")),t("h2",null,"A great feature request contains"),t("ul",null,t("li",null,"The current situation."),t("li",null,"How and why the current situation is problematic."),t("li",null,"A detailed proposal or pull request that demonstrates how the problem could be solved."),t("li",null,"A use case – who needs this feature and why?"),t("li",null,"Any caveats.")),t("h2",null,"A great pull request contains"),t("ul",null,t("li",null,"Minimal changes. Only submit code relevant to the current issue. Other changes should go in new pull requests."),t("li",null,"Minimal commits. Please squash to a single commit before sending your pull request."),t("li",null,"No conflicts. Please rebase off the latest master before submitting."),t("li",null,"Code conforming to the existing conventions and formats. i.e. Please don't reformat whitespace."),t("li",null,"Passing tests. Use existing tests as a reference.")))},n}(O),Me=function(e){function n(){e.apply(this,arguments)}return e&&(n.__proto__=e),n.prototype=Object.create(e&&e.prototype),n.prototype.constructor=n,n.prototype.render=function(){return t("div",null,t("h1",null,"Definitions"),t("ul",null,t("li",null,t("h2",null,"JavaScript"),t("dl",null,t("dt",null,"closure"),t("dd",null,"a block of code that can be referenced (and passed around) with access to the variables of the enclosing scope. Wrapping statements or an expression in a closure expression does not change their meaning, but merely defers their execution. A block of code which is either a statement list, an expression, or a combination of both. A closure is a function that refers to free variables in it's lexical context"),t("dt",null,"function"),t("dd",null,"a block of code with parameters. It may produce a result value"),t("dt",null,"free variable"),t("dd",null,"is an identifier used but not defined by the closure"),t("dt",null,"imperative programming"),t("dd",null,"a paradigm that describes computation in terms of statements that change a program state"))),t("li",null,t("h2",null,"UX Elements"),t("dl",null,t("dt",null,"accordian menu"),t("dd",null,"menu that repositions surrounding content as it expands and contracts"))),t("li",null,t("h2",null,"Types"),t("ul",null,t("li",null,"menu"),t("li",null,"sub-menu"),t("li",null,"filtered-menu"),t("li",null,"menu bar"),t("li",null,"menu button"),t("li",null,"menu item"),t("li",null,"menu separator"),t("li",null,"tree"),t("li",null,"tab"),t("li",null,"tab bar"),t("li",null,"table"),t("li",null,"table sorter"),t("li",null,"tool-tip"),t("li",null,"tool-bar"),t("li",null,"drag-drop detector"),t("li",null,"date picker"),t("li",null,"combo-box"),t("li",null,"checkbox"),t("li",null,"input"),t("li",null,"grid"),t("li",null,"auto-complete"),t("li",null,"bubble"),t("li",null,"button"),t("li",null,"dialog"),t("li",null,"card"),t("li",null,"hover-card")))))},n}(O),je={home:{path:"/",title:"home"},definitions:{path:"/definitions",title:"definitions"},bash:{path:"/bash",title:"bash reference"},repos:{path:"/repos",title:"repositories"},gitflow:{path:"/gitflow",title:"git methodology"}},Ae=function(e){return je[e].path};T(t("main",null,t(_e,{title:"idettman",subtitle:"prototypical development"}),t(Ne,{navData:je}),t("div",{className:"page-content"},t(ve,null,t(Se,{path:Ae("home")}),t(Me,{path:Ae("definitions")}),t(Ue,{path:Ae("bash")}),t(Oe,{path:Ae("repos")}),t(Te,{path:Ae("gitflow")})))),document.body)}();
//# sourceMappingURL=app-bundle.js.map
