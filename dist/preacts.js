function t(){return t=Object.assign?Object.assign.bind():function(t){for(var n=1;n<arguments.length;n++){var e=arguments[n];for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r])}return t},t.apply(this,arguments)}var n,e,r,o,i,_,u,s,c,l={},a=[],f=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,h=Array.isArray;function p(t,n){for(var e in n)t[e]=n[e];return t}function v(t){var n=t.parentNode;n&&n.removeChild(t)}function d(t,e,r){var o,i,_,u={};for(_ in e)"key"==_?o=e[_]:"ref"==_?i=e[_]:u[_]=e[_];if(arguments.length>2&&(u.children=arguments.length>3?n.call(arguments,2):r),"function"==typeof t&&null!=t.defaultProps)for(_ in t.defaultProps)void 0===u[_]&&(u[_]=t.defaultProps[_]);return y(t,u,o,i,null)}function y(t,n,o,i,_){var u={type:t,props:n,key:o,ref:i,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,constructor:void 0,__v:null==_?++r:_,__i:-1,__u:0};return null==_&&null!=e.vnode&&e.vnode(u),u}function m(t){return t.children}function g(t,n){this.props=t,this.context=n}function b(t,n){if(null==n)return t.__?b(t.__,t.__i+1):null;for(var e;n<t.__k.length;n++)if(null!=(e=t.__k[n])&&null!=e.__e)return e.__e;return"function"==typeof t.type?b(t):null}function k(t){var n,e;if(null!=(t=t.__)&&null!=t.__c){for(t.__e=t.__c.base=null,n=0;n<t.__k.length;n++)if(null!=(e=t.__k[n])&&null!=e.__e){t.__e=t.__c.base=e.__e;break}return k(t)}}function S(t){(!t.__d&&(t.__d=!0)&&i.push(t)&&!w.__r++||_!==e.debounceRendering)&&((_=e.debounceRendering)||u)(w)}function w(){var t,n,r,o,_,u,c,l,a;for(i.sort(s);t=i.shift();)t.__d&&(n=i.length,o=void 0,u=(_=(r=t).__v).__e,l=[],a=[],(c=r.__P)&&((o=p({},_)).__v=_.__v+1,e.vnode&&e.vnode(o),O(c,o,_,r.__n,void 0!==c.ownerSVGElement,32&_.__u?[u]:null,l,null==u?b(_):u,!!(32&_.__u),a),o.__.__k[o.__i]=o,$(l,o,a),o.__e!=u&&k(o)),i.length>n&&i.sort(s));w.__r=0}function x(t,n,e,r,o,i,_,u,s,c,f){var p,v,d,g,k,S=r&&r.__k||a,w=n.length;for(e.__d=s,function(t,n,e){var r,o,i,_,u,s=n.length,c=e.length,l=c,a=0;for(t.__k=[],r=0;r<s;r++)null!=(o=t.__k[r]=null==(o=n[r])||"boolean"==typeof o||"function"==typeof o?null:"string"==typeof o||"number"==typeof o||"bigint"==typeof o||o.constructor==String?y(null,o,null,null,o):h(o)?y(m,{children:o},null,null,null):void 0===o.constructor&&o.__b>0?y(o.type,o.props,o.key,o.ref?o.ref:null,o.__v):o)?(o.__=t,o.__b=t.__b+1,u=E(o,e,_=r+a,l),o.__i=u,i=null,-1!==u&&(l--,(i=e[u])&&(i.__u|=131072)),null==i||null===i.__v?(-1==u&&a--,"function"!=typeof o.type&&(o.__u|=65536)):u!==_&&(u===_+1?a++:u>_?l>s-_?a+=u-_:a--:a=u<_&&u==_-1?u-_:0,u!==r+a&&(o.__u|=65536))):(i=e[r])&&null==i.key&&i.__e&&(i.__e==t.__d&&(t.__d=b(i)),A(i,i,!1),e[r]=null,l--);if(l)for(r=0;r<c;r++)null!=(i=e[r])&&0==(131072&i.__u)&&(i.__e==t.__d&&(t.__d=b(i)),A(i,i))}(e,n,S),s=e.__d,p=0;p<w;p++)null!=(d=e.__k[p])&&"boolean"!=typeof d&&"function"!=typeof d&&(v=-1===d.__i?l:S[d.__i]||l,d.__i=p,O(t,d,v,o,i,_,u,s,c,f),g=d.__e,d.ref&&v.ref!=d.ref&&(v.ref&&L(v.ref,null,d),f.push(d.ref,d.__c||g,d)),null==k&&null!=g&&(k=g),65536&d.__u||v.__k===d.__k?s=C(d,s,t):"function"==typeof d.type&&void 0!==d.__d?s=d.__d:g&&(s=g.nextSibling),d.__d=void 0,d.__u&=-196609);e.__d=s,e.__e=k}function C(t,n,e){var r,o;if("function"==typeof t.type){for(r=t.__k,o=0;r&&o<r.length;o++)r[o]&&(r[o].__=t,n=C(r[o],n,e));return n}return t.__e!=n&&(e.insertBefore(t.__e,n||null),n=t.__e),n&&n.nextSibling}function E(t,n,e,r){var o=t.key,i=t.type,_=e-1,u=e+1,s=n[e];if(null===s||s&&o==s.key&&i===s.type)return e;if(r>(null!=s&&0==(131072&s.__u)?1:0))for(;_>=0||u<n.length;){if(_>=0){if((s=n[_])&&0==(131072&s.__u)&&o==s.key&&i===s.type)return _;_--}if(u<n.length){if((s=n[u])&&0==(131072&s.__u)&&o==s.key&&i===s.type)return u;u++}}return-1}function P(t,n,e){"-"===n[0]?t.setProperty(n,null==e?"":e):t[n]=null==e?"":"number"!=typeof e||f.test(n)?e:e+"px"}function H(t,n,e,r,o){var i;t:if("style"===n)if("string"==typeof e)t.style.cssText=e;else{if("string"==typeof r&&(t.style.cssText=r=""),r)for(n in r)e&&n in e||P(t.style,n,"");if(e)for(n in e)r&&e[n]===r[n]||P(t.style,n,e[n])}else if("o"===n[0]&&"n"===n[1])i=n!==(n=n.replace(/(PointerCapture)$|Capture$/,"$1")),n=n.toLowerCase()in t?n.toLowerCase().slice(2):n.slice(2),t.l||(t.l={}),t.l[n+i]=e,e?r?e.u=r.u:(e.u=Date.now(),t.addEventListener(n,i?N:U,i)):t.removeEventListener(n,i?N:U,i);else{if(o)n=n.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if("width"!==n&&"height"!==n&&"href"!==n&&"list"!==n&&"form"!==n&&"tabIndex"!==n&&"download"!==n&&"rowSpan"!==n&&"colSpan"!==n&&"role"!==n&&n in t)try{t[n]=null==e?"":e;break t}catch(t){}"function"==typeof e||(null==e||!1===e&&"-"!==n[4]?t.removeAttribute(n):t.setAttribute(n,e))}}function U(t){var n=this.l[t.type+!1];if(t.t){if(t.t<=n.u)return}else t.t=Date.now();return n(e.event?e.event(t):t)}function N(t){return this.l[t.type+!0](e.event?e.event(t):t)}function O(t,r,o,i,_,u,s,c,a,f){var d,y,k,S,w,C,E,P,U,N,O,$,L,A,D,j=r.type;if(void 0!==r.constructor)return null;128&o.__u&&(a=!!(32&o.__u),u=[c=r.__e=o.__e]),(d=e.__b)&&d(r);t:if("function"==typeof j)try{if(P=r.props,U=(d=j.contextType)&&i[d.__c],N=d?U?U.props.value:d.__:i,o.__c?E=(y=r.__c=o.__c).__=y.__E:("prototype"in j&&j.prototype.render?r.__c=y=new j(P,N):(r.__c=y=new g(P,N),y.constructor=j,y.render=T),U&&U.sub(y),y.props=P,y.state||(y.state={}),y.context=N,y.__n=i,k=y.__d=!0,y.__h=[],y._sb=[]),null==y.__s&&(y.__s=y.state),null!=j.getDerivedStateFromProps&&(y.__s==y.state&&(y.__s=p({},y.__s)),p(y.__s,j.getDerivedStateFromProps(P,y.__s))),S=y.props,w=y.state,y.__v=r,k)null==j.getDerivedStateFromProps&&null!=y.componentWillMount&&y.componentWillMount(),null!=y.componentDidMount&&y.__h.push(y.componentDidMount);else{if(null==j.getDerivedStateFromProps&&P!==S&&null!=y.componentWillReceiveProps&&y.componentWillReceiveProps(P,N),!y.__e&&(null!=y.shouldComponentUpdate&&!1===y.shouldComponentUpdate(P,y.__s,N)||r.__v===o.__v)){for(r.__v!==o.__v&&(y.props=P,y.state=y.__s,y.__d=!1),r.__e=o.__e,r.__k=o.__k,r.__k.forEach(function(t){t&&(t.__=r)}),O=0;O<y._sb.length;O++)y.__h.push(y._sb[O]);y._sb=[],y.__h.length&&s.push(y);break t}null!=y.componentWillUpdate&&y.componentWillUpdate(P,y.__s,N),null!=y.componentDidUpdate&&y.__h.push(function(){y.componentDidUpdate(S,w,C)})}if(y.context=N,y.props=P,y.__P=t,y.__e=!1,$=e.__r,L=0,"prototype"in j&&j.prototype.render){for(y.state=y.__s,y.__d=!1,$&&$(r),d=y.render(y.props,y.state,y.context),A=0;A<y._sb.length;A++)y.__h.push(y._sb[A]);y._sb=[]}else do{y.__d=!1,$&&$(r),d=y.render(y.props,y.state,y.context),y.state=y.__s}while(y.__d&&++L<25);y.state=y.__s,null!=y.getChildContext&&(i=p(p({},i),y.getChildContext())),k||null==y.getSnapshotBeforeUpdate||(C=y.getSnapshotBeforeUpdate(S,w)),x(t,h(D=null!=d&&d.type===m&&null==d.key?d.props.children:d)?D:[D],r,o,i,_,u,s,c,a,f),y.base=r.__e,r.__u&=-161,y.__h.length&&s.push(y),E&&(y.__E=y.__=null)}catch(t){r.__v=null,a||null!=u?(r.__e=c,r.__u|=a?160:32,u[u.indexOf(c)]=null):(r.__e=o.__e,r.__k=o.__k),e.__e(t,r,o)}else null==u&&r.__v===o.__v?(r.__k=o.__k,r.__e=o.__e):r.__e=function(t,e,r,o,i,_,u,s,c){var a,f,p,d,y,m,g,k=r.props,S=e.props,w=e.type;if("svg"===w&&(i=!0),null!=_)for(a=0;a<_.length;a++)if((y=_[a])&&"setAttribute"in y==!!w&&(w?y.localName===w:3===y.nodeType)){t=y,_[a]=null;break}if(null==t){if(null===w)return document.createTextNode(S);t=i?document.createElementNS("http://www.w3.org/2000/svg",w):document.createElement(w,S.is&&S),_=null,s=!1}if(null===w)k===S||s&&t.data===S||(t.data=S);else{if(_=_&&n.call(t.childNodes),k=r.props||l,!s&&null!=_)for(k={},a=0;a<t.attributes.length;a++)k[(y=t.attributes[a]).name]=y.value;for(a in k)y=k[a],"children"==a||("dangerouslySetInnerHTML"==a?p=y:"key"===a||a in S||H(t,a,null,y,i));for(a in S)y=S[a],"children"==a?d=y:"dangerouslySetInnerHTML"==a?f=y:"value"==a?m=y:"checked"==a?g=y:"key"===a||s&&"function"!=typeof y||k[a]===y||H(t,a,y,k[a],i);if(f)s||p&&(f.__html===p.__html||f.__html===t.innerHTML)||(t.innerHTML=f.__html),e.__k=[];else if(p&&(t.innerHTML=""),x(t,h(d)?d:[d],e,r,o,i&&"foreignObject"!==w,_,u,_?_[0]:r.__k&&b(r,0),s,c),null!=_)for(a=_.length;a--;)null!=_[a]&&v(_[a]);s||(a="value",void 0!==m&&(m!==t[a]||"progress"===w&&!m||"option"===w&&m!==k[a])&&H(t,a,m,k[a],!1),a="checked",void 0!==g&&g!==t[a]&&H(t,a,g,k[a],!1))}return t}(o.__e,r,o,i,_,u,s,a,f);(d=e.diffed)&&d(r)}function $(t,n,r){n.__d=void 0;for(var o=0;o<r.length;o++)L(r[o],r[++o],r[++o]);e.__c&&e.__c(n,t),t.some(function(n){try{t=n.__h,n.__h=[],t.some(function(t){t.call(n)})}catch(t){e.__e(t,n.__v)}})}function L(t,n,r){try{"function"==typeof t?t(n):t.current=n}catch(t){e.__e(t,r)}}function A(t,n,r){var o,i;if(e.unmount&&e.unmount(t),(o=t.ref)&&(o.current&&o.current!==t.__e||L(o,null,n)),null!=(o=t.__c)){if(o.componentWillUnmount)try{o.componentWillUnmount()}catch(t){e.__e(t,n)}o.base=o.__P=null,t.__c=void 0}if(o=t.__k)for(i=0;i<o.length;i++)o[i]&&A(o[i],n,r||"function"!=typeof t.type);r||null==t.__e||v(t.__e),t.__=t.__e=t.__d=void 0}function T(t,n,e){return this.constructor(t,e)}function D(t,r,o){var i,_,u,s;e.__&&e.__(t,r),_=(i="function"==typeof o)?null:o&&o.__k||r.__k,u=[],s=[],O(r,t=(!i&&o||r).__k=d(m,null,[t]),_||l,l,void 0!==r.ownerSVGElement,!i&&o?[o]:_?null:r.firstChild?n.call(r.childNodes):null,u,!i&&o?o:_?_.__e:r.firstChild,i,s),$(u,t,s)}function j(t,n){D(t,n,j)}function M(t,e,r){var o,i,_,u,s=p({},t.props);for(_ in t.type&&t.type.defaultProps&&(u=t.type.defaultProps),e)"key"==_?o=e[_]:"ref"==_?i=e[_]:s[_]=void 0===e[_]&&void 0!==u?u[_]:e[_];return arguments.length>2&&(s.children=arguments.length>3?n.call(arguments,2):r),y(t.type,s,o||t.key,i||t.ref,null)}function R(t,n){var e={__c:n="__cC"+c++,__:t,Consumer:function(t,n){return t.children(n)},Provider:function(t){var e,r;return this.getChildContext||(e=[],(r={})[n]=this,this.getChildContext=function(){return r},this.shouldComponentUpdate=function(t){this.props.value!==t.value&&e.some(function(t){t.__e=!0,S(t)})},this.sub=function(t){e.push(t);var n=t.componentWillUnmount;t.componentWillUnmount=function(){e.splice(e.indexOf(t),1),n&&n.call(t)}}),t.children}};return e.Provider.__=e.Consumer.contextType=e}n=a.slice,e={__e:function(t,n,e,r){for(var o,i,_;n=n.__;)if((o=n.__c)&&!o.__)try{if((i=o.constructor)&&null!=i.getDerivedStateFromError&&(o.setState(i.getDerivedStateFromError(t)),_=o.__d),null!=o.componentDidCatch&&(o.componentDidCatch(t,r||{}),_=o.__d),_)return o.__E=o}catch(n){t=n}throw t}},r=0,o=function(t){return null!=t&&null==t.constructor},g.prototype.setState=function(t,n){var e;e=null!=this.__s&&this.__s!==this.state?this.__s:this.__s=p({},this.state),"function"==typeof t&&(t=t(p({},e),this.props)),t&&p(e,t),null!=t&&this.__v&&(n&&this._sb.push(n),S(this))},g.prototype.forceUpdate=function(t){this.__v&&(this.__e=!0,t&&this.__h.push(t),S(this))},g.prototype.render=m,i=[],u="function"==typeof Promise?Promise.prototype.then.bind(Promise.resolve()):setTimeout,s=function(t,n){return t.__v.__b-n.__v.__b},w.__r=0,c=0;var V,W,F,B,I=0,q=[],K=[],G=e.__b,z=e.__r,J=e.diffed,Z=e.__c,Q=e.unmount;function X(t,n){e.__h&&e.__h(W,t,I||n),I=0;var r=W.__H||(W.__H={__:[],__h:[]});return t>=r.__.length&&r.__.push({__V:K}),r.__[t]}function Y(t){return I=1,tt(yt,t)}function tt(t,n,e){var r=X(V++,2);if(r.t=t,!r.__c&&(r.__=[e?e(n):yt(void 0,n),function(t){var n=r.__N?r.__N[0]:r.__[0],e=r.t(n,t);n!==e&&(r.__N=[e,r.__[1]],r.__c.setState({}))}],r.__c=W,!W.u)){var o=function(t,n,e){if(!r.__c.__H)return!0;var o=r.__c.__H.__.filter(function(t){return t.__c});if(o.every(function(t){return!t.__N}))return!i||i.call(this,t,n,e);var _=!1;return o.forEach(function(t){if(t.__N){var n=t.__[0];t.__=t.__N,t.__N=void 0,n!==t.__[0]&&(_=!0)}}),!(!_&&r.__c.props===t)&&(!i||i.call(this,t,n,e))};W.u=!0;var i=W.shouldComponentUpdate,_=W.componentWillUpdate;W.componentWillUpdate=function(t,n,e){if(this.__e){var r=i;i=void 0,o(t,n,e),i=r}_&&_.call(this,t,n,e)},W.shouldComponentUpdate=o}return r.__N||r.__}function nt(t,n){var r=X(V++,3);!e.__s&&dt(r.__H,n)&&(r.__=t,r.i=n,W.__H.__h.push(r))}function et(t,n){var r=X(V++,4);!e.__s&&dt(r.__H,n)&&(r.__=t,r.i=n,W.__h.push(r))}function rt(t){return I=5,it(function(){return{current:t}},[])}function ot(t,n,e){I=6,et(function(){return"function"==typeof t?(t(n()),function(){return t(null)}):t?(t.current=n(),function(){return t.current=null}):void 0},null==e?e:e.concat(t))}function it(t,n){var e=X(V++,7);return dt(e.__H,n)?(e.__V=t(),e.i=n,e.__h=t,e.__V):e.__}function _t(t,n){return I=8,it(function(){return t},n)}function ut(t){var n=W.context[t.__c],e=X(V++,9);return e.c=t,n?(null==e.__&&(e.__=!0,n.sub(W)),n.props.value):t.__}function st(t,n){e.useDebugValue&&e.useDebugValue(n?n(t):t)}function ct(t){var n=X(V++,10),e=Y();return n.__=t,W.componentDidCatch||(W.componentDidCatch=function(t,r){n.__&&n.__(t,r),e[1](t)}),[e[0],function(){e[1](void 0)}]}function lt(){var t=X(V++,11);if(!t.__){for(var n=W.__v;null!==n&&!n.__m&&null!==n.__;)n=n.__;var e=n.__m||(n.__m=[0,0]);t.__="P"+e[0]+"-"+e[1]++}return t.__}function at(){for(var t;t=q.shift();)if(t.__P&&t.__H)try{t.__H.__h.forEach(pt),t.__H.__h.forEach(vt),t.__H.__h=[]}catch(n){t.__H.__h=[],e.__e(n,t.__v)}}e.__b=function(t){W=null,G&&G(t)},e.__r=function(t){z&&z(t),V=0;var n=(W=t.__c).__H;n&&(F===W?(n.__h=[],W.__h=[],n.__.forEach(function(t){t.__N&&(t.__=t.__N),t.__V=K,t.__N=t.i=void 0})):(n.__h.forEach(pt),n.__h.forEach(vt),n.__h=[],V=0)),F=W},e.diffed=function(t){J&&J(t);var n=t.__c;n&&n.__H&&(n.__H.__h.length&&(1!==q.push(n)&&B===e.requestAnimationFrame||((B=e.requestAnimationFrame)||ht)(at)),n.__H.__.forEach(function(t){t.i&&(t.__H=t.i),t.__V!==K&&(t.__=t.__V),t.i=void 0,t.__V=K})),F=W=null},e.__c=function(t,n){n.some(function(t){try{t.__h.forEach(pt),t.__h=t.__h.filter(function(t){return!t.__||vt(t)})}catch(r){n.some(function(t){t.__h&&(t.__h=[])}),n=[],e.__e(r,t.__v)}}),Z&&Z(t,n)},e.unmount=function(t){Q&&Q(t);var n,r=t.__c;r&&r.__H&&(r.__H.__.forEach(function(t){try{pt(t)}catch(t){n=t}}),r.__H=void 0,n&&e.__e(n,r.__v))};var ft="function"==typeof requestAnimationFrame;function ht(t){var n,e=function(){clearTimeout(r),ft&&cancelAnimationFrame(n),setTimeout(t)},r=setTimeout(e,100);ft&&(n=requestAnimationFrame(e))}function pt(t){var n=W,e=t.__c;"function"==typeof e&&(t.__c=void 0,e()),W=n}function vt(t){var n=W;t.__c=t.__(),W=n}function dt(t,n){return!t||t.length!==n.length||n.some(function(n,e){return n!==t[e]})}function yt(t,n){return"function"==typeof n?n(t):n}var mt=function(t,n,e,r){var o;n[0]=0;for(var i=1;i<n.length;i++){var _=n[i++],u=n[i]?(n[0]|=_?1:2,e[n[i++]]):n[++i];3===_?r[0]=u:4===_?r[1]=Object.assign(r[1]||{},u):5===_?(r[1]=r[1]||{})[n[++i]]=u:6===_?r[1][n[++i]]+=u+"":_?(o=t.apply(u,mt(t,u,e,["",null])),r.push(o),u[0]?n[0]|=2:(n[i-2]=0,n[i]=o)):r.push(u)}return r},gt=new Map;function bt(t){var n=gt.get(this);return n||(n=new Map,gt.set(this,n)),(n=mt(this,n.get(t)||(n.set(t,n=function(t){for(var n,e,r=1,o="",i="",_=[0],u=function(t){1===r&&(t||(o=o.replace(/^\s*\n\s*|\s*\n\s*$/g,"")))?_.push(0,t,o):3===r&&(t||o)?(_.push(3,t,o),r=2):2===r&&"..."===o&&t?_.push(4,t,0):2===r&&o&&!t?_.push(5,0,!0,o):r>=5&&((o||!t&&5===r)&&(_.push(r,0,o,e),r=6),t&&(_.push(r,t,0,e),r=6)),o=""},s=0;s<t.length;s++){s&&(1===r&&u(),u(s));for(var c=0;c<t[s].length;c++)n=t[s][c],1===r?"<"===n?(u(),_=[_],r=3):o+=n:4===r?"--"===o&&">"===n?(r=1,o=""):o=n+o[0]:i?n===i?i="":o+=n:'"'===n||"'"===n?i=n:">"===n?(u(),r=1):r&&("="===n?(r=5,e=o,o=""):"/"===n&&(r<5||">"===t[s][c+1])?(u(),3===r&&(_=_[0]),r=_,(_=_[0]).push(2,0,r),r=0):" "===n||"\t"===n||"\n"===n||"\r"===n?(u(),r=2):o+=n),3===r&&"!--"===o&&(r=4,_=_[0])}return u(),_}(t)),n),arguments,[])).length>1?n:n[0]}function kt(){throw new Error("Cycle detected")}var St=Symbol.for("preact-signals");function wt(){if(Ot>1)Ot--;else{for(var t,n=!1;void 0!==Nt;){var e=Nt;for(Nt=void 0,$t++;void 0!==e;){var r=e.o;if(e.o=void 0,e.f&=-3,!(8&e.f)&&jt(e))try{e.c()}catch(e){n||(t=e,n=!0)}e=r}}if($t=0,Ot--,n)throw t}}function xt(t){if(Ot>0)return t();Ot++;try{return t()}finally{wt()}}var Ct=void 0,Et=0;function Pt(t){if(Et>0)return t();var n=Ct;Ct=void 0,Et++;try{return t()}finally{Et--,Ct=n}}var Ht,Ut,Nt=void 0,Ot=0,$t=0,Lt=0;function At(t){if(void 0!==Ct){var n=t.n;if(void 0===n||n.t!==Ct)return n={i:0,S:t,p:Ct.s,n:void 0,t:Ct,e:void 0,x:void 0,r:n},void 0!==Ct.s&&(Ct.s.n=n),Ct.s=n,t.n=n,32&Ct.f&&t.S(n),n;if(-1===n.i)return n.i=0,void 0!==n.n&&(n.n.p=n.p,void 0!==n.p&&(n.p.n=n.n),n.p=Ct.s,n.n=void 0,Ct.s.n=n,Ct.s=n),n}}function Tt(t){this.v=t,this.i=0,this.n=void 0,this.t=void 0}function Dt(t){return new Tt(t)}function jt(t){for(var n=t.s;void 0!==n;n=n.n)if(n.S.i!==n.i||!n.S.h()||n.S.i!==n.i)return!0;return!1}function Mt(t){for(var n=t.s;void 0!==n;n=n.n){var e=n.S.n;if(void 0!==e&&(n.r=e),n.S.n=n,n.i=-1,void 0===n.n){t.s=n;break}}}function Rt(t){for(var n=t.s,e=void 0;void 0!==n;){var r=n.p;-1===n.i?(n.S.U(n),void 0!==r&&(r.n=n.n),void 0!==n.n&&(n.n.p=r)):e=n,n.S.n=n.r,void 0!==n.r&&(n.r=void 0),n=r}t.s=e}function Vt(t){Tt.call(this,void 0),this.x=t,this.s=void 0,this.g=Lt-1,this.f=4}function Wt(t){return new Vt(t)}function Ft(t){var n=t.u;if(t.u=void 0,"function"==typeof n){Ot++;var e=Ct;Ct=void 0;try{n()}catch(n){throw t.f&=-2,t.f|=8,Bt(t),n}finally{Ct=e,wt()}}}function Bt(t){for(var n=t.s;void 0!==n;n=n.n)n.S.U(n);t.x=void 0,t.s=void 0,Ft(t)}function It(t){if(Ct!==this)throw new Error("Out-of-order effect");Rt(this),Ct=t,this.f&=-2,8&this.f&&Bt(this),wt()}function qt(t){this.x=t,this.u=void 0,this.s=void 0,this.o=void 0,this.f=32}function Kt(t){var n=new qt(t);try{n.c()}catch(t){throw n.d(),t}return n.d.bind(n)}function Gt(t,n){e[t]=n.bind(null,e[t]||function(){})}function zt(t){Ut&&Ut(),Ut=t&&t.S()}function Jt(t){var n=this,e=t.data,r=Qt(e);r.value=e;var i=it(function(){for(var t=n.__v;t=t.__;)if(t.__c){t.__c.__$f|=4;break}return n.__$u.c=function(){var t;o(i.peek())||3!==(null==(t=n.base)?void 0:t.nodeType)?(n.__$f|=1,n.setState({})):n.base.data=i.peek()},Wt(function(){var t=r.value.value;return 0===t?0:!0===t?"":t||""})},[]);return i.value}function Zt(t,n,e,r){var o=n in t&&void 0===t.ownerSVGElement,i=Dt(e);return{o:function(t,n){i.value=t,r=n},d:Kt(function(){var e=i.value.value;r[n]!==e&&(r[n]=e,o?t[n]=e:e?t.setAttribute(n,e):t.removeAttribute(n))})}}function Qt(t){return it(function(){return Dt(t)},[])}function Xt(t){var n=rt(t);return n.current=t,Ht.__$f|=4,it(function(){return Wt(function(){return n.current()})},[])}function Yt(t){var n=rt(t);n.current=t,nt(function(){return Kt(function(){return n.current()})},[])}Tt.prototype.brand=St,Tt.prototype.h=function(){return!0},Tt.prototype.S=function(t){this.t!==t&&void 0===t.e&&(t.x=this.t,void 0!==this.t&&(this.t.e=t),this.t=t)},Tt.prototype.U=function(t){if(void 0!==this.t){var n=t.e,e=t.x;void 0!==n&&(n.x=e,t.e=void 0),void 0!==e&&(e.e=n,t.x=void 0),t===this.t&&(this.t=e)}},Tt.prototype.subscribe=function(t){var n=this;return Kt(function(){var e=n.value,r=32&this.f;this.f&=-33;try{t(e)}finally{this.f|=r}})},Tt.prototype.valueOf=function(){return this.value},Tt.prototype.toString=function(){return this.value+""},Tt.prototype.toJSON=function(){return this.value},Tt.prototype.peek=function(){return this.v},Object.defineProperty(Tt.prototype,"value",{get:function(){var t=At(this);return void 0!==t&&(t.i=this.i),this.v},set:function(t){if(Ct instanceof Vt&&function(){throw new Error("Computed cannot have side-effects")}(),t!==this.v){$t>100&&kt(),this.v=t,this.i++,Lt++,Ot++;try{for(var n=this.t;void 0!==n;n=n.x)n.t.N()}finally{wt()}}}}),(Vt.prototype=new Tt).h=function(){if(this.f&=-3,1&this.f)return!1;if(32==(36&this.f))return!0;if(this.f&=-5,this.g===Lt)return!0;if(this.g=Lt,this.f|=1,this.i>0&&!jt(this))return this.f&=-2,!0;var t=Ct;try{Mt(this),Ct=this;var n=this.x();(16&this.f||this.v!==n||0===this.i)&&(this.v=n,this.f&=-17,this.i++)}catch(t){this.v=t,this.f|=16,this.i++}return Ct=t,Rt(this),this.f&=-2,!0},Vt.prototype.S=function(t){if(void 0===this.t){this.f|=36;for(var n=this.s;void 0!==n;n=n.n)n.S.S(n)}Tt.prototype.S.call(this,t)},Vt.prototype.U=function(t){if(void 0!==this.t&&(Tt.prototype.U.call(this,t),void 0===this.t)){this.f&=-33;for(var n=this.s;void 0!==n;n=n.n)n.S.U(n)}},Vt.prototype.N=function(){if(!(2&this.f)){this.f|=6;for(var t=this.t;void 0!==t;t=t.x)t.t.N()}},Vt.prototype.peek=function(){if(this.h()||kt(),16&this.f)throw this.v;return this.v},Object.defineProperty(Vt.prototype,"value",{get:function(){1&this.f&&kt();var t=At(this);if(this.h(),void 0!==t&&(t.i=this.i),16&this.f)throw this.v;return this.v}}),qt.prototype.c=function(){var t=this.S();try{if(8&this.f)return;if(void 0===this.x)return;var n=this.x();"function"==typeof n&&(this.u=n)}finally{t()}},qt.prototype.S=function(){1&this.f&&kt(),this.f|=1,this.f&=-9,Ft(this),Mt(this),Ot++;var t=Ct;return Ct=this,It.bind(this,t)},qt.prototype.N=function(){2&this.f||(this.f|=2,this.o=Nt,Nt=this)},qt.prototype.d=function(){this.f|=8,1&this.f||Bt(this)},Jt.displayName="_st",Object.defineProperties(Tt.prototype,{constructor:{configurable:!0,value:void 0},type:{configurable:!0,value:Jt},props:{configurable:!0,get:function(){return{data:this}}},__b:{configurable:!0,value:1}}),Gt("__b",function(t,n){if("string"==typeof n.type){var e,r=n.props;for(var o in r)if("children"!==o){var i=r[o];i instanceof Tt&&(e||(n.__np=e={}),e[o]=i,r[o]=i.peek())}}t(n)}),Gt("__r",function(t,n){zt();var e,r=n.__c;r&&(r.__$f&=-2,void 0===(e=r.__$u)&&(r.__$u=e=function(t){var n;return Kt(function(){n=this}),n.c=function(){r.__$f|=1,r.setState({})},n}())),Ht=r,zt(e),t(n)}),Gt("__e",function(t,n,e,r){zt(),Ht=void 0,t(n,e,r)}),Gt("diffed",function(t,n){var e;if(zt(),Ht=void 0,"string"==typeof n.type&&(e=n.__e)){var r=n.__np,o=n.props;if(r){var i=e.U;if(i)for(var _ in i){var u=i[_];void 0===u||_ in r||(u.d(),i[_]=void 0)}else e.U=i={};for(var s in r){var c=i[s],l=r[s];void 0===c?(c=Zt(e,s,l,o),i[s]=c):c.o(l,o)}}}t(n)}),Gt("unmount",function(t,n){if("string"==typeof n.type){var e=n.__e;if(e){var r=e.U;if(r)for(var o in e.U=void 0,r){var i=r[o];i&&i.d()}}}else{var _=n.__c;if(_){var u=_.__$u;u&&(_.__$u=void 0,u.d())}}t(n)}),Gt("__h",function(t,n,e,r){(r<3||9===r)&&(n.__$f|=2),t(n,e,r)}),g.prototype.shouldComponentUpdate=function(t,n){var e=this.__$u;if(!(e&&void 0!==e.s||4&this.__$f))return!0;if(3&this.__$f)return!0;for(var r in n)return!0;for(var o in t)if("__source"!==o&&t[o]!==this.props[o])return!0;for(var i in this.props)if(!(i in t))return!0;return!1};var tn=bt.bind(d);const nn=(t,...n)=>String.raw({raw:t},...n);nn.render=t=>{const n=new CSSStyleSheet;n.replace(t),document.adoptedStyleSheets.push(n)};const en=t=>{if(t){if("string"==typeof t){const n=t.replace(/\s+/g," ").trim().split(" ");return 1===n.length?n[0]:en(n)}return Array.isArray(t)?t.map(en).filter(Boolean).join(" "):"object"==typeof t?Object.entries(t).map(([t,n])=>{if(n)return en(t)}).filter(Boolean).join(" "):(console.warn("unknown class names argument structure",t),String(t))}};function rn(){return(rn=Object.assign?Object.assign.bind():function(t){for(var n=1;n<arguments.length;n++){var e=arguments[n];for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r])}return t}).apply(this,arguments)}nn.classNames=en;var on=["context","children"];function _n(t){this.getChildContext=function(){return t.context};var n=t.children,e=function(t,n){if(null==t)return{};var e,r,o={},i=Object.keys(t);for(r=0;r<i.length;r++)n.indexOf(e=i[r])>=0||(o[e]=t[e]);return o}(t,on);return M(n,e)}function un(){var t=new CustomEvent("_preact",{detail:{},bubbles:!0,cancelable:!0});this.dispatchEvent(t),this._vdom=d(_n,rn({},this._props,{context:t.detail.context}),function t(n,e){if(3===n.nodeType)return n.data;if(1!==n.nodeType)return null;var r=[],o={},i=0,_=n.attributes,u=n.childNodes;for(i=_.length;i--;)"slot"!==_[i].name&&(o[_[i].name]=_[i].value,o[sn(_[i].name)]=_[i].value);for(i=u.length;i--;){var s=t(u[i],null),c=u[i].slot;c?o[c]=d(an,{name:c},s):r[i]=s}var l=e?d(an,null,r):r;return d(e||n.nodeName.toLowerCase(),o,l)}(this,this._vdomComponent)),(this.hasAttribute("hydrate")?j:D)(this._vdom,this._root)}function sn(t){return t.replace(/-(\w)/g,function(t,n){return n?n.toUpperCase():""})}function cn(t,n,e){if(this._vdom){var r={};r[t]=e=null==e?void 0:e,r[sn(t)]=e,this._vdom=M(this._vdom,r),D(this._vdom,this._root)}}function ln(){D(this._vdom=null,this._root)}function an(t,n){var e=this;return d("slot",rn({},t,{ref:function(t){t?(e.ref=t,e._listener||(e._listener=function(t){t.stopPropagation(),t.detail.context=n},t.addEventListener("_preact",e._listener))):e.ref.removeEventListener("_preact",e._listener)}}))}function fn(t,n,e,r){function o(){var n=Reflect.construct(HTMLElement,[],o);return n._vdomComponent=t,n._root=r&&r.shadow?n.attachShadow({mode:r.mode||"open"}):n,n}return(o.prototype=Object.create(HTMLElement.prototype)).constructor=o,o.prototype.connectedCallback=un,o.prototype.attributeChangedCallback=cn,o.prototype.disconnectedCallback=ln,e=e||t.observedAttributes||Object.keys(t.propTypes||{}),o.observedAttributes=e,e.forEach(function(t){Object.defineProperty(o.prototype,t,{get:function(){return this._vdom.props[t]},set:function(n){this._vdom?this.attributeChangedCallback(t,null,n):(this._props||(this._props={}),this._props[t]=n,this.connectedCallback());var e=typeof n;null!=n&&"string"!==e&&"boolean"!==e&&"number"!==e||this.setAttribute(t,n)}})}),customElements.define(n||t.tagName||t.displayName||t.name,o)}const hn=!("undefined"==typeof window||void 0===window.document||void 0===window.document.createElement);function pn(t,n){return t===n&&(0!==t||1/t==1/n)||t!=t&&n!=n}const vn=t=>{const n=rt([t,(...t)=>n[0](...t)]).current;return et(()=>{n[0]=t}),n[1]},dn=(t="",n=location.pathname)=>n.toLowerCase().indexOf(t.toLowerCase())?"~"+n:n.slice(t.length)||"/",yn="pushState",mn="replaceState",gn=["popstate",yn,mn,"hashchange"],bn=t=>{for(const n of gn)addEventListener(n,t);return()=>{for(const n of gn)removeEventListener(n,t)}},kn=(t,n)=>function(t,n,e){e&&!hn&&(n=e);const r=n(),[{_instance:o},i]=Y({_instance:{_value:r,_getSnapshot:n}});return et(()=>{o._value=r,o._getSnapshot=n,pn(o._value,n())||i({_instance:o})},[t,r,n]),nt(()=>(pn(o._value,o._getSnapshot())||i({_instance:o}),t(()=>{pn(o._value,o._getSnapshot())||i({_instance:o})})),[t]),r}(bn,t,n),Sn=()=>location.search,wn=()=>location.pathname,xn=({ssrPath:t}={})=>kn(wn,t?()=>t:wn),Cn=(t,{replace:n=!1}={})=>history[n?mn:yn](null,"",t),En=(t={})=>[dn(t.base,xn(t)),vn((n,e)=>Cn(((t,n="")=>"~"===t[0]?t.slice(1):n+t)(n,t.base),e))];if("undefined"!=typeof history)for(const t of[yn,mn]){const n=history[t];history[t]=function(){const e=n.apply(this,arguments),r=new Event(t);return r.arguments=arguments,dispatchEvent(r),e}}var Pn={__proto__:null,events:gn,useLocationProperty:kn,useSearch:()=>kn(Sn),usePathname:xn,navigate:Cn,default:En};function Hn(t=On){let n={};return(e,r)=>{const{regexp:o,keys:i}=(e=>n[e]||(n[e]=t(e)))(e||""),_=o.exec(r);if(!_)return[!1,null];const u=i.reduce((t,n,e)=>(t[n.name]=_[e+1],t),{});return[!0,u]}}const Un=t=>t.replace(/([.+*?=^!:${}()[\]|/\\])/g,"\\$1"),Nn=(t,n,e)=>{let r=t?"((?:[^\\/]+?)(?:\\/(?:[^\\/]+?))*)":"([^\\/]+?)";return n&&e&&(r="(?:\\/"+r+")"),r+(n?"?":"")},On=t=>{const n=/:([A-Za-z0-9_]+)([?+*]?)/g;let e=null,r=0,o=[],i="";for(;null!==(e=n.exec(t));){const[_,u,s]=e,c="+"===s||"*"===s,l="?"===s||"*"===s,a=l&&"/"===t[e.index-1]?1:0,f=t.substring(r,e.index-a);o.push({name:u}),r=n.lastIndex,i+=Un(f)+Nn(c,l,a)}return i+=Un(t.substring(r)),{keys:o,regexp:new RegExp("^"+i+"(?:\\/)?$","i")}},$n={hook:En,matcher:Hn(),base:""},Ln=R($n),An=()=>ut(Ln),Tn=t=>t.hook(t),Dn=()=>Tn(An()),jn=t=>{const n=An(),[e]=Tn(n);return n.matcher(t,e)},Mn=R({params:{}}),Rn=t=>Array.isArray(t)?[].concat(...t.map(t=>Rn(t&&t.type===m?t.props.children:t))):[t];var Vn={__proto__:null,useRouter:An,useLocation:Dn,useRoute:jn,useParams:()=>ut(Mn).params,Router:({hook:t,matcher:n,ssrPath:e,base:r="",parent:o,children:i})=>{const _=(i,_=o||$n)=>(i.hook=t||_.hook,i.matcher=n||_.matcher,i.ssrPath=e||_.ssrPath,i.ownBase=r,i.parent=o,i),[u]=Y(()=>_({get base(){return(u.parent||$n).base+u.ownBase}}));return et(()=>{_(u)}),d(Ln.Provider,{value:u,children:i})},Route:({path:t,match:n,component:e,children:r})=>{const o=jn(t),[i,_]=n||o;return i?((t,n)=>d(Mn.Provider,{value:{params:t},children:n}))(_,e?d(e,{params:_}):"function"==typeof r?r(_):r):null},Link:(t,n)=>{const e=An(),[,r]=Tn(e),{to:i,href:_=i,children:u,onClick:s}=t,c=vn(n=>{n.ctrlKey||n.metaKey||n.altKey||n.shiftKey||0!==n.button||(s&&s(n),n.defaultPrevented||(n.preventDefault(),r(i||_,t)))}),l={href:"~"===_[0]?_.slice(1):e.base+_,onClick:c,to:null,ref:n};return M(o(u)?u:d("a",t),l)},Switch:({children:t,location:n})=>{const e=An(),r=e.matcher,[i]=Tn(e);for(const e of Rn(t)){let t=0;if(o(e)&&(t=e.props.path?r(e.props.path,n||i):[!0,{}])[0])return M(e,{match:t})}return null},Redirect:t=>{const{to:n,href:e=n}=t,[,r]=Dn(),o=vn(()=>r(n||e,t));return et(()=>{o()},[]),null},default:jn};const Wn=t({makeMatcher:Hn},Pn,Vn);export{g as Component,Tt as Signal,xt as batch,Wt as computed,nn as css,Kt as effect,d as h,bt as htm,tn as html,fn as register,D as render,Dt as signal,Pt as untracked,_t as useCallback,Xt as useComputed,ut as useContext,st as useDebugValue,nt as useEffect,ct as useErrorBoundary,lt as useId,ot as useImperativeHandle,et as useLayoutEffect,it as useMemo,tt as useReducer,rt as useRef,Qt as useSignal,Yt as useSignalEffect,Y as useState,Wn as wouter};
