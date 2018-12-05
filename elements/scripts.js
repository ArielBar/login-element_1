/*! (C) Andrea Giammarchi - @WebReflection - Mit Style License */
!function(e,t){"use strict";var n=e.document,r=e.Object,l=function(e){var t,n,l,o,a=/^[A-Z]+[a-z]/,i=function(e,t){(t=t.toLowerCase())in u||(u[e]=(u[e]||[]).concat(t),u[t]=u[t.toUpperCase()]=e)},u=(r.create||r)(null),c={};for(n in e)for(o in e[n])for(l=e[n][o],u[o]=l,t=0;t<l.length;t++)u[l[t].toLowerCase()]=u[l[t].toUpperCase()]=o;return c.get=function(e){return"string"==typeof e?u[e]||(a.test(e)?[]:""):function(e){var t,n=[];for(t in u)e.test(t)&&n.push(t);return n}(e)},c.set=function(e,t){return a.test(e)?i(e,t):i(t,e),c},c}({collections:{HTMLAllCollection:["all"],HTMLCollection:["forms"],HTMLFormControlsCollection:["elements"],HTMLOptionsCollection:["options"]},elements:{Element:["element"],HTMLAnchorElement:["a"],HTMLAppletElement:["applet"],HTMLAreaElement:["area"],HTMLAttachmentElement:["attachment"],HTMLAudioElement:["audio"],HTMLBRElement:["br"],HTMLBaseElement:["base"],HTMLBodyElement:["body"],HTMLButtonElement:["button"],HTMLCanvasElement:["canvas"],HTMLContentElement:["content"],HTMLDListElement:["dl"],HTMLDataElement:["data"],HTMLDataListElement:["datalist"],HTMLDetailsElement:["details"],HTMLDialogElement:["dialog"],HTMLDirectoryElement:["dir"],HTMLDivElement:["div"],HTMLDocument:["document"],HTMLElement:["element","abbr","address","article","aside","b","bdi","bdo","cite","code","command","dd","dfn","dt","em","figcaption","figure","footer","header","i","kbd","mark","nav","noscript","rp","rt","ruby","s","samp","section","small","strong","sub","summary","sup","u","var","wbr"],HTMLEmbedElement:["embed"],HTMLFieldSetElement:["fieldset"],HTMLFontElement:["font"],HTMLFormElement:["form"],HTMLFrameElement:["frame"],HTMLFrameSetElement:["frameset"],HTMLHRElement:["hr"],HTMLHeadElement:["head"],HTMLHeadingElement:["h1","h2","h3","h4","h5","h6"],HTMLHtmlElement:["html"],HTMLIFrameElement:["iframe"],HTMLImageElement:["img"],HTMLInputElement:["input"],HTMLKeygenElement:["keygen"],HTMLLIElement:["li"],HTMLLabelElement:["label"],HTMLLegendElement:["legend"],HTMLLinkElement:["link"],HTMLMapElement:["map"],HTMLMarqueeElement:["marquee"],HTMLMediaElement:["media"],HTMLMenuElement:["menu"],HTMLMenuItemElement:["menuitem"],HTMLMetaElement:["meta"],HTMLMeterElement:["meter"],HTMLModElement:["del","ins"],HTMLOListElement:["ol"],HTMLObjectElement:["object"],HTMLOptGroupElement:["optgroup"],HTMLOptionElement:["option"],HTMLOutputElement:["output"],HTMLParagraphElement:["p"],HTMLParamElement:["param"],HTMLPictureElement:["picture"],HTMLPreElement:["pre"],HTMLProgressElement:["progress"],HTMLQuoteElement:["blockquote","q","quote"],HTMLScriptElement:["script"],HTMLSelectElement:["select"],HTMLShadowElement:["shadow"],HTMLSlotElement:["slot"],HTMLSourceElement:["source"],HTMLSpanElement:["span"],HTMLStyleElement:["style"],HTMLTableCaptionElement:["caption"],HTMLTableCellElement:["td","th"],HTMLTableColElement:["col","colgroup"],HTMLTableElement:["table"],HTMLTableRowElement:["tr"],HTMLTableSectionElement:["thead","tbody","tfoot"],HTMLTemplateElement:["template"],HTMLTextAreaElement:["textarea"],HTMLTimeElement:["time"],HTMLTitleElement:["title"],HTMLTrackElement:["track"],HTMLUListElement:["ul"],HTMLUnknownElement:["unknown","vhgroupv","vkeygen"],HTMLVideoElement:["video"]},nodes:{Attr:["node"],Audio:["audio"],CDATASection:["node"],CharacterData:["node"],Comment:["#comment"],Document:["#document"],DocumentFragment:["#document-fragment"],DocumentType:["node"],HTMLDocument:["#document"],Image:["img"],Option:["option"],ProcessingInstruction:["node"],ShadowRoot:["#shadow-root"],Text:["#text"],XMLDocument:["xml"]}});"object"!=typeof t&&(t={type:t||"auto"});var o,a,i,u,c,s,m,f,p,d="registerElement",h="__"+d+(1e5*e.Math.random()>>0),T="addEventListener",L="attached",M="Callback",E="detached",v="extends",H="attributeChanged"+M,g=L+M,b="connected"+M,y="disconnected"+M,C="created"+M,A=E+M,w="ADDITION",O="REMOVAL",N="DOMAttrModified",D="DOMContentLoaded",I="DOMSubtreeModified",F="<",S="=",V=/^[A-Z][A-Z0-9]*(?:-[A-Z0-9]+)+$/,P=["ANNOTATION-XML","COLOR-PROFILE","FONT-FACE","FONT-FACE-SRC","FONT-FACE-URI","FONT-FACE-FORMAT","FONT-FACE-NAME","MISSING-GLYPH"],U=[],R=[],k="",_=n.documentElement,q=U.indexOf||function(e){for(var t=this.length;t--&&this[t]!==e;);return t},x=r.prototype,B=x.hasOwnProperty,Z=x.isPrototypeOf,j=r.defineProperty,G=[],z=r.getOwnPropertyDescriptor,K=r.getOwnPropertyNames,X=r.getPrototypeOf,Q=r.setPrototypeOf,W=!!r.__proto__,Y="__dreCEv1",$=e.customElements,J=!/^force/.test(t.type)&&!!($&&$.define&&$.get&&$.whenDefined),ee=r.create||r,te=e.Map||function(){var e,t=[],n=[];return{get:function(e){return n[q.call(t,e)]},set:function(r,l){(e=q.call(t,r))<0?n[t.push(r)-1]=l:n[e]=l}}},ne=e.Promise||function(e){var t=[],n=!1,r={catch:function(){return r},then:function(e){return t.push(e),n&&setTimeout(l,1),r}};function l(e){for(n=!0;t.length;)t.shift()(e)}return e(l),r},re=!1,le=ee(null),oe=ee(null),ae=new te,ie=function(e){return e.toLowerCase()},ue=r.create||function e(t){return t?(e.prototype=t,new e):this},ce=Q||(W?function(e,t){return e.__proto__=t,e}:K&&z?function(){function e(e,t){for(var n,r=K(t),l=0,o=r.length;l<o;l++)n=r[l],B.call(e,n)||j(e,n,z(t,n))}return function(t,n){do{e(t,n)}while((n=X(n))&&!Z.call(n,t));return t}}():function(e,t){for(var n in t)e[n]=t[n];return e}),se=e.MutationObserver||e.WebKitMutationObserver,me=(e.HTMLElement||e.Element||e.Node).prototype,fe=!Z.call(me,_),pe=fe?function(e,t,n){return e[t]=n.value,e}:j,de=fe?function(e){return 1===e.nodeType}:function(e){return Z.call(me,e)},he=fe&&[],Te=me.attachShadow,Le=me.cloneNode,Me=me.dispatchEvent,Ee=me.getAttribute,ve=me.hasAttribute,He=me.removeAttribute,ge=me.setAttribute,be=n.createElement,ye=be,Ce=se&&{attributes:!0,characterData:!0,attributeOldValue:!0},Ae=se||function(e){Ie=!1,_.removeEventListener(N,Ae)},we=0,Oe=d in n&&!/^force-all/.test(t.type),Ne=!0,De=!1,Ie=!0,Fe=!0,Se=!0;function Ve(){var e=o.splice(0,o.length);for(we=0;e.length;)e.shift().call(null,e.shift())}function Pe(e,t){for(var n=0,r=e.length;n<r;n++)Ge(e[n],t)}function Ue(e){return function(t){de(t)&&(Ge(t,e),k.length&&Pe(t.querySelectorAll(k),e))}}function Re(e){var t=Ee.call(e,"is"),n=e.nodeName.toUpperCase(),r=q.call(U,t?S+t.toUpperCase():F+n);return t&&-1<r&&!ke(n,t)?-1:r}function ke(e,t){return-1<k.indexOf(e+'[is="'+t+'"]')}function _e(e){var t=e.currentTarget,n=e.attrChange,r=e.attrName,l=e.target,o=e[w]||2,a=e[O]||3;!Se||l&&l!==t||!t[H]||"style"===r||e.prevValue===e.newValue&&(""!==e.newValue||n!==o&&n!==a)||t[H](r,n===o?null:e.prevValue,n===a?null:e.newValue)}function qe(e){var t=Ue(e);return function(e){o.push(t,e.target),we&&clearTimeout(we),we=setTimeout(Ve,1)}}function xe(e){Fe&&(Fe=!1,e.currentTarget.removeEventListener(D,xe)),k.length&&Pe((e.target||n).querySelectorAll(k),e.detail===E?E:L),fe&&function(){for(var e,t=0,n=he.length;t<n;t++)e=he[t],_.contains(e)||(n--,he.splice(t--,1),Ge(e,E))}()}function Be(e,t){ge.call(this,e,t),a.call(this,{target:this})}function Ze(e,t){ce(e,t),c?c.observe(e,Ce):(Ie&&(e.setAttribute=Be,e[h]=u(e),e[T](I,a)),e[T](N,_e)),e[C]&&Se&&(e.created=!0,e[C](),e.created=!1)}function je(e){throw new Error("A "+e+" type is already registered")}function Ge(e,t){var n,r,l=Re(e);-1<l&&(m(e,R[l]),l=0,t!==L||e[L]?t!==E||e[E]||(e[L]=!1,e[E]=!0,r="disconnected",l=1):(e[E]=!1,e[L]=!0,r="connected",l=1,fe&&q.call(he,e)<0&&he.push(e)),l&&(n=e[t+M]||e[r+M])&&n.call(e))}function ze(){}function Ke(e,t,r){var l=r&&r[v]||"",o=t.prototype,a=ue(o),i=t.observedAttributes||G,u={prototype:a};pe(a,C,{value:function(){if(re)re=!1;else if(!this[Y]){this[Y]=!0,new t(this),o[C]&&o[C].call(this);var e=le[ae.get(t)];(!J||e.create.length>1)&&We(this)}}}),pe(a,H,{value:function(e){-1<q.call(i,e)&&o[H].apply(this,arguments)}}),o[b]&&pe(a,g,{value:o[b]}),o[y]&&pe(a,A,{value:o[y]}),l&&(u[v]=l),e=e.toUpperCase(),le[e]={constructor:t,create:l?[l,ie(e)]:[e]},ae.set(t,e),n[d](e.toLowerCase(),u),Ye(e),oe[e].r()}function Xe(e){var t=le[e.toUpperCase()];return t&&t.constructor}function Qe(e){return"string"==typeof e?e:e&&e.is||""}function We(e){for(var t,n=e[H],r=n?e.attributes:G,l=r.length;l--;)t=r[l],n.call(e,t.name||t.nodeName,null,t.value||t.nodeValue)}function Ye(e){return(e=e.toUpperCase())in oe||(oe[e]={},oe[e].p=new ne(function(t){oe[e].r=t})),oe[e].p}function $e(){$&&delete e.customElements,j(e,"customElements",{configurable:!0,value:new ze}),j(e,"CustomElementRegistry",{configurable:!0,value:ze});for(var t=function(t){var r=e[t];if(r){e[t]=function(e){var t,l;return e||(e=this),e[Y]||(re=!0,t=le[ae.get(e.constructor)],(e=(l=J&&1===t.create.length)?Reflect.construct(r,G,t.constructor):n.createElement.apply(n,t.create))[Y]=!0,re=!1,l||We(e)),e},e[t].prototype=r.prototype;try{r.prototype.constructor=e[t]}catch(n){!0,j(r,Y,{value:e[t]})}}},r=l.get(/^HTML[A-Z]*[a-z]/),o=r.length;o--;t(r[o]));n.createElement=function(e,t){var n=Qe(t);return n?ye.call(this,e,ie(n)):ye.call(this,e)},Oe||(De=!0,n[d](""))}if(se&&((p=n.createElement("div")).innerHTML="<div><div></div></div>",new se(function(e,t){if(e[0]&&"childList"==e[0].type&&!e[0].removedNodes[0].childNodes.length){var n=(p=z(me,"innerHTML"))&&p.set;n&&j(me,"innerHTML",{set:function(e){for(;this.lastChild;)this.removeChild(this.lastChild);n.call(this,e)}})}t.disconnect(),p=null}).observe(p,{childList:!0,subtree:!0}),p.innerHTML=""),Oe||(Q||W?(m=function(e,t){Z.call(t,e)||Ze(e,t)},f=Ze):f=m=function(e,t){e[h]||(e[h]=r(!0),Ze(e,t))},fe?(Ie=!1,function(){var e=z(me,T),t=e.value,n=function(e){var t=new CustomEvent(N,{bubbles:!0});t.attrName=e,t.prevValue=Ee.call(this,e),t.newValue=null,t[O]=t.attrChange=2,He.call(this,e),Me.call(this,t)},r=function(e,t){var n=ve.call(this,e),r=n&&Ee.call(this,e),l=new CustomEvent(N,{bubbles:!0});ge.call(this,e,t),l.attrName=e,l.prevValue=n?r:null,l.newValue=t,n?l.MODIFICATION=l.attrChange=1:l[w]=l.attrChange=0,Me.call(this,l)},l=function(e){var t,n=e.currentTarget,r=n[h],l=e.propertyName;r.hasOwnProperty(l)&&(r=r[l],(t=new CustomEvent(N,{bubbles:!0})).attrName=r.name,t.prevValue=r.value||null,t.newValue=r.value=n[l]||null,null==t.prevValue?t[w]=t.attrChange=0:t.MODIFICATION=t.attrChange=1,Me.call(n,t))};e.value=function(e,o,a){e===N&&this[H]&&this.setAttribute!==r&&(this[h]={className:{name:"class",value:this.className}},this.setAttribute=r,this.removeAttribute=n,t.call(this,"propertychange",l)),t.call(this,e,o,a)},j(me,T,e)}()):se||(_[T](N,Ae),_.setAttribute(h,1),_.removeAttribute(h),Ie&&(a=function(e){var t,n,r;if(this===e.target){for(r in t=this[h],this[h]=n=u(this),n){if(!(r in t))return i(0,this,r,t[r],n[r],w);if(n[r]!==t[r])return i(1,this,r,t[r],n[r],"MODIFICATION")}for(r in t)if(!(r in n))return i(2,this,r,t[r],n[r],O)}},i=function(e,t,n,r,l,o){var a={attrChange:e,currentTarget:t,attrName:n,prevValue:r,newValue:l};a[o]=e,_e(a)},u=function(e){for(var t,n,r={},l=e.attributes,o=0,a=l.length;o<a;o++)"setAttribute"!==(n=(t=l[o]).name)&&(r[n]=t.value);return r})),n[d]=function(e,t){if(r=e.toUpperCase(),Ne&&(Ne=!1,se?(c=function(e,t){function n(e,t){for(var n=0,r=e.length;n<r;t(e[n++]));}return new se(function(r){for(var l,o,a,i=0,u=r.length;i<u;i++)"childList"===(l=r[i]).type?(n(l.addedNodes,e),n(l.removedNodes,t)):(o=l.target,Se&&o[H]&&"style"!==l.attributeName&&(a=Ee.call(o,l.attributeName))!==l.oldValue&&o[H](l.attributeName,l.oldValue,a))})}(Ue(L),Ue(E)),(s=function(e){return c.observe(e,{childList:!0,subtree:!0}),e})(n),Te&&(me.attachShadow=function(){return s(Te.apply(this,arguments))})):(o=[],n[T]("DOMNodeInserted",qe(L)),n[T]("DOMNodeRemoved",qe(E))),n[T](D,xe),n[T]("readystatechange",xe),me.cloneNode=function(e){var t=Le.call(this,!!e),n=Re(t);return-1<n&&f(t,R[n]),e&&k.length&&function(e){for(var t,n=0,r=e.length;n<r;n++)t=e[n],f(t,R[Re(t)])}(t.querySelectorAll(k)),t}),De)return De=!1;if(-2<q.call(U,S+r)+q.call(U,F+r)&&je(e),!V.test(r)||-1<q.call(P,r))throw new Error("The type "+e+" is invalid");var r,l,a=function(){return u?n.createElement(m,r):n.createElement(m)},i=t||x,u=B.call(i,v),m=u?t[v].toUpperCase():r;return u&&-1<q.call(U,F+m)&&je(m),l=U.push((u?S:F)+r)-1,k=k.concat(k.length?",":"",u?m+'[is="'+e.toLowerCase()+'"]':m),a.prototype=R[l]=B.call(i,"prototype")?i.prototype:ue(me),k.length&&Pe(n.querySelectorAll(k),L),a},n.createElement=ye=function(e,t){var r=Qe(t),l=r?be.call(n,e,ie(r)):be.call(n,e),o=""+e,a=q.call(U,(r?S:F)+(r||o).toUpperCase()),i=-1<a;return r&&(l.setAttribute("is",r=r.toLowerCase()),i&&(i=ke(o.toUpperCase(),r))),Se=!n.createElement.innerHTMLHelper,i&&f(l,R[a]),l}),ze.prototype={constructor:ze,define:J?function(e,t,n){if(n)Ke(e,t,n);else{var r=e.toUpperCase();le[r]={constructor:t,create:[r]},ae.set(t,r),$.define(e,t)}}:Ke,get:J?function(e){return $.get(e)||Xe(e)}:Xe,whenDefined:J?function(e){return ne.race([$.whenDefined(e),Ye(e)])}:Ye},!$||/^force/.test(t.type))$e();else if(!t.noBuiltIn)try{!function(t,r,l){if(r[v]="a",(t.prototype=ue(HTMLAnchorElement.prototype)).constructor=t,e.customElements.define(l,t,r),Ee.call(n.createElement("a",{is:l}),"is")!==l||J&&Ee.call(new t,"is")!==l)throw r}(function e(){return Reflect.construct(HTMLAnchorElement,[],e)},{},"document-register-element-a")}catch(e){$e()}if(!t.noBuiltIn)try{be.call(n,"a","a")}catch(e){ie=function(e){return{is:e.toLowerCase()}}}}(window);