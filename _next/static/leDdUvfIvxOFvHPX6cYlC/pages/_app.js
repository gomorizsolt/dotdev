(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{"/0+H":function(t,e,n){"use strict";var r=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0});var o=r(n("q1tI")),u=n("lwAK");function a(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.ampFirst,n=void 0!==e&&e,r=t.hybrid,o=void 0!==r&&r,u=t.hasQuery;return n||o&&(void 0!==u&&u)}e.isInAmpMode=a,e.useAmp=function(){return a(o.default.useContext(u.AmpStateContext))}},0:function(t,e,n){n("GcxT"),t.exports=n("nOHt")},"1DPd":function(t,e){const n=[{name:"John Doe",logo:"static/logo/logo.png",techIcons:{react:{name:"React",path:"static/svg/react.svg"},javascript:{name:"JavaScript",path:"static/svg/js.svg"},html:{name:"HTML",path:"static/svg/html.svg"}},socialIcons:{github:{name:"GitHub",path:"static/svg/github.svg"},medium:{name:"Medium",path:"static/svg/medium.svg"}},display:"icon",proxyURL:"https://cors-anywhere.herokuapp.com/",header:{technologies:["javascript","react"],teamMembers:[{name:"Arunoda Susiripala",link:"https://twitter.com/arunoda"}],socialLinks:[{name:"github",link:"https://github.com/c-hive"},{name:"medium",link:"https://medium.com/c-hive"}]},productsTitle:"Projects",products:[{name:"Next.JS",cover:"",description:"The React Framework",technologies:["react"],socialLinks:[{name:"github",link:"https://github.com/zeit/next.js/"}]}],teamContributionCalendarUsers:{github:[{name:"thisismydesign",from:"2019-09-22"},{name:"gomorizsolt",from:"2020-01-01",to:"2020-04-07"}],gitlab:[]},medium:"c-hive",github:{repos:["c-hive/team-contribution-calendar","c-hive/ws-anywhere","c-hive/js-boilerplate"]}}];t.exports=n.length<=1?n[0]:n},"1TCz":function(t,e,n){"use strict";n.r(e),n.d(e,"default",(function(){return w}));var r=n("o0o1"),o=n.n(r);var u=n("vuIU");function a(t,e){return(a=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}var i=n("U8pU"),c=n("JX7q");function s(t,e){return!e||"object"!==Object(i.a)(e)&&"function"!==typeof e?Object(c.a)(t):e}function f(t){return(f=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var l=n("8Bbg"),p=n.n(l),d=n("8Kt/"),h=n.n(d),m=n("q1tI"),v=n.n(m),y=n("1DPd"),b=n.n(y),g=v.a.createElement;var w=function(t){!function(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&a(t,e)}(n,t);var e=function(t){function e(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}return function(){var n,r=f(t);if(e()){var o=f(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return s(this,n)}}(n);function n(){return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,n),e.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){var t=this.props,e=t.Component,n=t.pageProps;return g(v.a.Fragment,null,g(h.a,null,g("title",null,b.a.name)),g(e,n))}}],[{key:"getInitialProps",value:function(t){var e,n,r;return o.a.async((function(u){for(;;)switch(u.prev=u.next){case 0:if(e=t.Component,n=t.ctx,r={},!e.getInitialProps){u.next=6;break}return u.next=5,o.a.awrap(e.getInitialProps(n));case 5:r=u.sent;case 6:return u.abrupt("return",{pageProps:r});case 7:case"end":return u.stop()}}),null,null,null,Promise)}}]),n}(p.a)},"5fIB":function(t,e){t.exports=function(t){if(Array.isArray(t)){for(var e=0,n=new Array(t.length);e<t.length;e++)n[e]=t[e];return n}}},"8Bbg":function(t,e,n){t.exports=n("B5Ud")},"8Kt/":function(t,e,n){"use strict";var r=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0});var o=r(n("q1tI")),u=r(n("Xuae")),a=n("lwAK"),i=n("FYa8"),c=n("/0+H");function s(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0],e=[o.default.createElement("meta",{charSet:"utf-8"})];return t||e.push(o.default.createElement("meta",{name:"viewport",content:"width=device-width"})),e}function f(t,e){return"string"===typeof e||"number"===typeof e?t:e.type===o.default.Fragment?t.concat(o.default.Children.toArray(e.props.children).reduce((function(t,e){return"string"===typeof e||"number"===typeof e?t:t.concat(e)}),[])):t.concat(e)}e.defaultHead=s;var l=["name","httpEquiv","charSet","itemProp"];function p(t,e){return t.reduce((function(t,e){var n=o.default.Children.toArray(e.props.children);return t.concat(n)}),[]).reduce(f,[]).reverse().concat(s(e.inAmpMode)).filter(function(){var t=new Set,e=new Set,n=new Set,r={};return function(o){var u=!0;if(o.key&&"number"!==typeof o.key&&o.key.indexOf("$")>0){var a=o.key.slice(o.key.indexOf("$")+1);t.has(a)?u=!1:t.add(a)}switch(o.type){case"title":case"base":e.has(o.type)?u=!1:e.add(o.type);break;case"meta":for(var i=0,c=l.length;i<c;i++){var s=l[i];if(o.props.hasOwnProperty(s))if("charSet"===s)n.has(s)?u=!1:n.add(s);else{var f=o.props[s],p=r[s]||new Set;p.has(f)?u=!1:(p.add(f),r[s]=p)}}}return u}}()).reverse().map((function(t,e){var n=t.key||e;return o.default.cloneElement(t,{key:n})}))}var d=u.default();function h(t){var e=t.children;return o.default.createElement(a.AmpStateContext.Consumer,null,(function(t){return o.default.createElement(i.HeadManagerContext.Consumer,null,(function(n){return o.default.createElement(d,{reduceComponentsToState:p,handleStateChange:n,inAmpMode:c.isInAmpMode(t)},e)}))}))}h.rewind=d.rewind,e.default=h},B5Ud:function(t,e,n){"use strict";var r=n("/GRZ"),o=n("i2R6"),u=n("48fX"),a=n("tCBg"),i=n("T0f4"),c=n("vJKn");var s=n("AroE");e.__esModule=!0,e.Container=function(t){0;return t.children},e.createUrl=h,e.default=void 0;var f=s(n("q1tI")),l=n("g/15");function p(t){var e,n,r;return c.async((function(o){for(;;)switch(o.prev=o.next){case 0:return e=t.Component,n=t.ctx,o.next=3,c.awrap((0,l.loadGetInitialProps)(e,n));case 3:return r=o.sent,o.abrupt("return",{pageProps:r});case 5:case"end":return o.stop()}}),null,null,null,Promise)}e.AppInitialProps=l.AppInitialProps;var d=function(t){u(n,t);var e=function(t){function e(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}return function(){var n,r=i(t);if(e()){var o=i(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return a(this,n)}}(n);function n(){return r(this,n),e.apply(this,arguments)}return o(n,[{key:"componentDidCatch",value:function(t,e){throw t}},{key:"render",value:function(){var t=this.props,e=t.router,n=t.Component,r=t.pageProps,o=t.__N_SSG,u=t.__N_SSP;return f.default.createElement(n,Object.assign({},r,o||u?{}:{url:h(e)}))}}]),n}(f.default.Component);function h(t){var e=t.pathname,n=t.asPath,r=t.query;return{get query(){return r},get pathname(){return e},get asPath(){return n},back:function(){t.back()},push:function(e,n){return t.push(e,n)},pushTo:function(e,n){var r=n?e:"",o=n||e;return t.push(r,o)},replace:function(e,n){return t.replace(e,n)},replaceTo:function(e,n){var r=n?e:"",o=n||e;return t.replace(r,o)}}}e.default=d,d.origGetInitialProps=p,d.getInitialProps=p},GcxT:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return n("1TCz")}])},JX7q:function(t,e,n){"use strict";function r(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}n.d(e,"a",(function(){return r}))},U8pU:function(t,e,n){"use strict";function r(t){return(r="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function o(t){return(o="function"===typeof Symbol&&"symbol"===r(Symbol.iterator)?function(t){return r(t)}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":r(t)})(t)}n.d(e,"a",(function(){return o}))},Xuae:function(t,e,n){"use strict";var r=n("/GRZ"),o=n("qXWd"),u=n("i2R6"),a=n("48fX"),i=n("tCBg"),c=n("T0f4"),s=n("mPvQ");Object.defineProperty(e,"__esModule",{value:!0});var f=n("q1tI"),l=!1;e.default=function(){var t,e=new Set;function n(n){t=n.props.reduceComponentsToState(s(e),n.props),n.props.handleStateChange&&n.props.handleStateChange(t)}return function(s){a(p,s);var f=function(t){function e(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}return function(){var n,r=c(t);if(e()){var o=c(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return i(this,n)}}(p);function p(t){var u;return r(this,p),u=f.call(this,t),l&&(e.add(o(u)),n(o(u))),u}return u(p,null,[{key:"rewind",value:function(){var n=t;return t=void 0,e.clear(),n}}]),u(p,[{key:"componentDidMount",value:function(){e.add(this),n(this)}},{key:"componentDidUpdate",value:function(){n(this)}},{key:"componentWillUnmount",value:function(){e.delete(this),n(this)}},{key:"render",value:function(){return null}}]),p}(f.Component)}},kG2m:function(t,e){t.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}},lwAK:function(t,e,n){"use strict";var r=this&&this.__importStar||function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)Object.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e.default=t,e};Object.defineProperty(e,"__esModule",{value:!0});var o=r(n("q1tI"));e.AmpStateContext=o.createContext({})},mPvQ:function(t,e,n){var r=n("5fIB"),o=n("rlHP"),u=n("kG2m");t.exports=function(t){return r(t)||o(t)||u()}},o0o1:function(t,e,n){t.exports=n("ls82")},rlHP:function(t,e){t.exports=function(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}},vuIU:function(t,e,n){"use strict";function r(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function o(t,e,n){return e&&r(t.prototype,e),n&&r(t,n),t}n.d(e,"a",(function(){return o}))}},[[0,1,2,0,3]]]);