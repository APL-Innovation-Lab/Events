!function s(a,n,i){function o(t,e){if(!n[t]){if(!a[t]){var r="function"==typeof require&&require;if(!e&&r)return r(t,!0);if(c)return c(t,!0);throw(e=new Error("Cannot find module '"+t+"'")).code="MODULE_NOT_FOUND",e}r=n[t]={exports:{}},a[t][0].call(r.exports,function(e){return o(a[t][1][e]||e)},r,r.exports,s,a,n,i)}return n[t].exports}for(var c="function"==typeof require&&require,e=0;e<i.length;e++)o(i[e]);return o}({1:[function(e,t,r){"use strict";var s;if("document"in window.self)if("classList"in document.createElement("_")&&(!document.createElementNS||"classList"in document.createElementNS("http://www.w3.org/2000/svg","g")))(a=document.createElement("_")).classList.add("c1","c2"),a.classList.contains("c2")||((i=function(e){var s=DOMTokenList.prototype[e];DOMTokenList.prototype[e]=function(e){for(var t=arguments.length,r=0;r<t;r++)s.call(this,arguments[r])}})("add"),i("remove")),a.classList.toggle("c3",!1),a.classList.contains("c3")&&(s=DOMTokenList.prototype.toggle,DOMTokenList.prototype.toggle=function(e,t){return 1 in arguments&&!this.contains(e)==!t?t:s.call(this,e)});else if("Element"in(i=window.self)){var a="classList",n="prototype",i=i.Element[n],o=Object,c=String[n].trim||function(){return this.replace(/^\s+|\s+$/g,"")},l=Array[n].indexOf||function(e){for(var t=0,r=this.length;t<r;t++)if(t in this&&this[t]===e)return t;return-1},u=function(e,t){this.name=e,this.code=DOMException[e],this.message=t},d=function(e,t){if(""===t)throw new u("SYNTAX_ERR","An invalid or illegal string was specified");if(/\s/.test(t))throw new u("INVALID_CHARACTER_ERR","String contains an invalid character");return l.call(e,t)},p=function(e){for(var t=c.call(e.getAttribute("class")||""),r=t?t.split(/\s+/):[],s=0,a=r.length;s<a;s++)this.push(r[s]);this._updateClassName=function(){e.setAttribute("class",this.toString())}},b=p[n]=[],f=function(){return new p(this)};if(u[n]=Error[n],b.item=function(e){return this[e]||null},b.contains=function(e){return-1!==d(this,e+="")},b.add=function(){for(var e,t=arguments,r=0,s=t.length,a=!1;-1===d(this,e=t[r]+"")&&(this.push(e),a=!0),++r<s;);a&&this._updateClassName()},b.remove=function(){var e,t,r=arguments,s=0,a=r.length,n=!1;do{for(t=d(this,e=r[s]+"");-1!==t;)this.splice(t,1),n=!0,t=d(this,e)}while(++s<a);n&&this._updateClassName()},b.toggle=function(e,t){var r=this.contains(e+=""),s=r?!0!==t&&"remove":!1!==t&&"add";return s&&this[s](e),!0===t||!1===t?t:!r},b.toString=function(){return this.join(" ")},o.defineProperty){b={get:f,enumerable:!0,configurable:!0};try{o.defineProperty(i,a,b)}catch(e){-2146823252===e.number&&(b.enumerable=!1,o.defineProperty(i,a,b))}}else o[n].__defineGetter__&&i.__defineGetter__(a,f)}},{}],2:[function(e,t,r){"use strict";var s;"function"!=typeof(s=window.Element.prototype).matches&&(s.matches=s.msMatchesSelector||s.mozMatchesSelector||s.webkitMatchesSelector||function(e){for(var t=(this.document||this.ownerDocument).querySelectorAll(e),r=0;t[r]&&t[r]!==this;)++r;return Boolean(t[r])}),"function"!=typeof s.closest&&(s.closest=function(e){for(var t=this;t&&1===t.nodeType;){if(t.matches(e))return t;t=t.parentNode}return null})},{}],3:[function(e,t,r){"use strict";for(var s={polyfill:function(){if(!("KeyboardEvent"in window)||"key"in KeyboardEvent.prototype)return!1;var e={get:function(e){var t=s.keys[this.which||this.keyCode];return t=Array.isArray(t)?t[+this.shiftKey]:t}};return Object.defineProperty(KeyboardEvent.prototype,"key",e),e},keys:{3:"Cancel",6:"Help",8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",28:"Convert",29:"NonConvert",30:"Accept",31:"ModeChange",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",41:"Select",42:"Print",43:"Execute",44:"PrintScreen",45:"Insert",46:"Delete",48:["0",")"],49:["1","!"],50:["2","@"],51:["3","#"],52:["4","$"],53:["5","%"],54:["6","^"],55:["7","&"],56:["8","*"],57:["9","("],91:"OS",93:"ContextMenu",144:"NumLock",145:"ScrollLock",181:"VolumeMute",182:"VolumeDown",183:"VolumeUp",186:[";",":"],187:["=","+"],188:[",","<"],189:["-","_"],190:[".",">"],191:["/","?"],192:["`","~"],219:["[","{"],220:["\\","|"],221:["]","}"],222:["'",'"'],224:"Meta",225:"AltGraph",246:"Attn",247:"CrSel",248:"ExSel",249:"EraseEof",250:"Play",251:"ZoomOut"}},a=1;a<25;a++)s.keys[111+a]="F"+a;var n="";for(a=65;a<91;a++)n=String.fromCharCode(a),s.keys[a]=[n.toLowerCase(),n.toUpperCase()];"function"==typeof define&&define.amd?define("keyboardevent-key-polyfill",s):void 0!==r&&void 0!==t?t.exports=s:window&&(window.keyboardeventKeyPolyfill=s)},{}],4:[function(e,t,r){"use strict";var c=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable;t.exports=function(){try{if(Object.assign){var e=new String("abc");if(e[5]="de","5"!==Object.getOwnPropertyNames(e)[0]){for(var t={},r=0;r<10;r++)t["_"+String.fromCharCode(r)]=r;var s,a=Object.getOwnPropertyNames(t).map(function(e){return t[e]});if("0123456789"===a.join(""))return s={},"abcdefghijklmnopqrst".split("").forEach(function(e){s[e]=e}),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},s)).join("")?1:void 0}}}catch(e){}}()?Object.assign:function(e,t){for(var r,s=function(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}(e),a=1;a<arguments.length;a++){for(var n in r=Object(arguments[a]))l.call(r,n)&&(s[n]=r[n]);if(c)for(var i=c(r),o=0;o<i.length;o++)u.call(r,i[o])&&(s[i[o]]=r[i[o]])}return s}},{}],5:[function(e,t,r){"use strict";const c=e("object-assign"),l=e("../delegate"),u=e("../delegateAll"),d=/^(.+):delegate\((.+)\)$/;function p(e,t){var r=e[t];return delete e[t],r}t.exports=function(o,e){const r=Object.keys(o).reduce(function(e,t){r=o[t=t],(i=t.match(d))&&(t=i[1],s=i[2]),"object"==typeof r&&(a={capture:p(r,"capture"),passive:p(r,"passive")}),n={selector:s,delegate:"object"==typeof r?u(r):s?l(s,r):r,options:a};var r,s,a,n,i=-1<t.indexOf(" ")?t.split(" ").map(function(e){return c({type:e},n)}):(n.type=t,[n]);return e.concat(i)},[]);return c({add:function(t){r.forEach(function(e){t.addEventListener(e.type,e.delegate,e.options)})},remove:function(t){r.forEach(function(e){t.removeEventListener(e.type,e.delegate,e.options)})}},e)}},{"../delegate":7,"../delegateAll":8,"object-assign":4}],6:[function(e,t,r){"use strict";t.exports=function(e){return function(t){return e.some(function(e){return!1===e.call(this,t)},this)}}},{}],7:[function(e,t,r){"use strict";e("element-closest"),t.exports=function(r,s){return function(e){var t=e.target.closest(r);if(t)return s.call(t,e)}}},{"element-closest":2}],8:[function(e,t,r){"use strict";const s=e("../delegate"),a=e("../compose");t.exports=function(r){var e=Object.keys(r);return 1===e.length&&"*"===e[0]?r["*"]:(e=e.reduce(function(e,t){return e.push(s(t,r[t])),e},[]),a(e))}},{"../compose":6,"../delegate":7}],9:[function(e,t,r){"use strict";t.exports=function(t,r){return function(e){if(t!==e.target&&!t.contains(e.target))return r.call(this,e)}}},{}],10:[function(e,t,r){"use strict";t.exports={behavior:e("./behavior"),delegate:e("./delegate"),delegateAll:e("./delegateAll"),ignore:e("./ignore"),keymap:e("./keymap")}},{"./behavior":5,"./delegate":7,"./delegateAll":8,"./ignore":9,"./keymap":11}],11:[function(e,t,r){"use strict";e("keyboardevent-key-polyfill");const n={Alt:"altKey",Control:"ctrlKey",Ctrl:"ctrlKey",Shift:"shiftKey"};t.exports=function(a){const e=Object.keys(a).some(function(e){return-1<e.indexOf("+")});return function(r){var s=function(e,t){var r=e.key;if(t)for(var s in n)!0===e[n[s]]&&(r=[s,r].join("+"));return r}(r,e);return[s,s.toLowerCase()].reduce(function(e,t){return e=t in a?a[s].call(this,r):e},void 0)}},t.exports.MODIFIERS=n},{"keyboardevent-key-polyfill":3}],12:[function(e,t,r){"use strict";t.exports=function(t,r){function s(e){return e.currentTarget.removeEventListener(e.type,s,r),t.call(this,e)}return s}},{}],13:[function(e,t,r){"use strict";var s=/(^\s+)|(\s+$)/g,a=/\s+/,n=String.prototype.trim?function(e){return e.trim()}:function(e){return e.replace(s,"")};t.exports=function(e,t){if("string"!=typeof e)throw new Error("Expected a string but got "+typeof e);var r=((t=t||window.document).getElementById||function(e){return this.querySelector('[id="'+e.replace(/"/g,'\\"')+'"]')}).bind(t);return 1===(e=n(e).split(a)).length&&""===e[0]?[]:e.map(function(e){var t=r(e);if(t)return t;throw new Error('no element with id: "'+e+'"')})}},{}],14:[function(e,t,r){"use strict";var s=e("../../uswds-core/src/js/utils/behavior");const a=e("../../uswds-core/src/js/utils/toggle-form-input");var n=e("../../uswds-core/src/js/events")["CLICK"],e=e("../../uswds-core/src/js/config")["prefix"];t.exports=s({[n]:{[`.${e}-show-password`]:function(e){e.preventDefault(),a(this)}}})},{"../../uswds-core/src/js/config":35,"../../uswds-core/src/js/events":36,"../../uswds-core/src/js/utils/behavior":45,"../../uswds-core/src/js/utils/toggle-form-input":55}],15:[function(e,t,r){"use strict";const s=e("../../uswds-core/src/js/utils/select");var a=e("../../uswds-core/src/js/utils/behavior");const n=e("../../uswds-core/src/js/utils/toggle"),i=e("../../uswds-core/src/js/utils/is-in-viewport");var o=e("../../uswds-core/src/js/events")["CLICK"],e=e("../../uswds-core/src/js/config")["prefix"];const c=`.${e}-accordion, .${e}-accordion--bordered`,l=`.${e}-accordion__button[aria-controls]`,u="aria-expanded",d=t=>{return s(l,t).filter(e=>e.closest(c)===t)},p=(t,e)=>{var r=t.closest(c);if(!r)throw new Error(l+" is missing outer "+c);var e=n(t,e),s=r.hasAttribute("data-allow-multiple");e&&!s&&d(r).forEach(e=>{e!==t&&n(e,!1)})};e=a({[o]:{[l](){p(this),"true"!==this.getAttribute(u)||i(this)||this.scrollIntoView()}}},{init(e){s(l,e).forEach(e=>{var t="true"===e.getAttribute(u);p(e,t)})},ACCORDION:c,BUTTON:l,show:e=>p(e,!0),hide:e=>p(e,!1),toggle:p,getButtons:d});t.exports=e},{"../../uswds-core/src/js/config":35,"../../uswds-core/src/js/events":36,"../../uswds-core/src/js/utils/behavior":45,"../../uswds-core/src/js/utils/is-in-viewport":48,"../../uswds-core/src/js/utils/select":53,"../../uswds-core/src/js/utils/toggle":56}],16:[function(e,t,r){"use strict";var s=e("../../uswds-core/src/js/utils/behavior"),a=e("../../uswds-core/src/js/events")["CLICK"],e=e("../../uswds-core/src/js/config")["prefix"];const n=`.${e}-banner__header`,i=e+"-banner__header--expanded";t.exports=s({[a]:{[n+" [aria-controls]"]:function(e){e.preventDefault(),this.closest(n).classList.toggle(i)}}})},{"../../uswds-core/src/js/config":35,"../../uswds-core/src/js/events":36,"../../uswds-core/src/js/utils/behavior":45}],17:[function(e,t,r){"use strict";var s=e("receptor/keymap"),e=e("../../uswds-core/src/js/utils/behavior")({keydown:{'a[class*="usa-button"]':s({" ":e=>{e.preventDefault(),e.target.click()}})}});t.exports=e},{"../../uswds-core/src/js/utils/behavior":45,"receptor/keymap":11}],18:[function(e,t,r){"use strict";const s=e("../../uswds-core/src/js/utils/select");var a=e("../../uswds-core/src/js/utils/behavior"),n=e("../../uswds-core/src/js/utils/debounce"),e=e("../../uswds-core/src/js/config")["prefix"],i=e+"-character-count";const o="."+i,c=`.${e}-character-count__field`,l=`.${e}-character-count__message`,u="The content is too long.",d=e+"-character-count__status--invalid",p=i+"__status",b=i+"__sr-status",f="."+p,h="."+b,m="characters allowed",v=e=>{e=e.closest(o);if(!e)throw new Error(c+" is missing outer "+o);var t=e.querySelector(l);if(t)return{characterCountEl:e,messageEl:t};throw new Error(o+" is missing inner "+l)},g=e=>{var t=document.createElement("div"),r=document.createElement("div"),s=e.dataset.maxlength+" "+m;t.classList.add(""+p,"usa-hint"),r.classList.add(""+b,"usa-sr-only"),t.setAttribute("aria-hidden",!0),r.setAttribute("aria-live","polite"),t.textContent=s,r.textContent=s,e.append(t,r)},y=(e,t)=>{let r="";var s;return r=0===e?t+" "+m:(s=Math.abs(t-e))+` ${"character"+(1===s?"":"s")} `+(t<e?"over limit":"left")},w=n((e,t)=>{e.textContent=t},1e3),A=e=>{var t=v(e)["characterCountEl"],r=e.value.length,s=parseInt(t.getAttribute("data-maxlength"),10),a=t.querySelector(f),t=t.querySelector(h),n=y(r,s);s&&(s=r&&s<r,a.textContent=n,w(t,n),s&&!e.validationMessage&&e.setCustomValidity(u),s||e.validationMessage!==u||e.setCustomValidity(""),a.classList.toggle(d,s))},E=e=>{var t,{characterCountEl:r,messageEl:s}=v(e);s.classList.add("usa-sr-only"),s.removeAttribute("aria-live"),s=e,e=v(s).characterCountEl,(t=s.getAttribute("maxlength"))&&(s.removeAttribute("maxlength"),e.setAttribute("data-maxlength",t)),g(r)};e=a({input:{[c](){A(this)}}},{init(e){s(c,e).forEach(e=>E(e))},MESSAGE_INVALID_CLASS:d,VALIDATION_MESSAGE:u,STATUS_MESSAGE_CLASS:p,STATUS_MESSAGE_SR_ONLY_CLASS:b,DEFAULT_STATUS_LABEL:m,createStatusMessages:g,getCountMessage:y,updateCountMessage:A});t.exports=e},{"../../uswds-core/src/js/config":35,"../../uswds-core/src/js/utils/behavior":45,"../../uswds-core/src/js/utils/debounce":46,"../../uswds-core/src/js/utils/select":53}],19:[function(e,t,I){"use strict";var r=e("receptor/keymap");const s=e("../../uswds-core/src/js/utils/select-or-matches");var a=e("../../uswds-core/src/js/utils/behavior");const b=e("../../uswds-core/src/js/utils/sanitizer");var n=e("../../uswds-core/src/js/config")["prefix"],e=e("../../uswds-core/src/js/events")["CLICK"],n=n+"-combo-box";const f=n+"--pristine",h=n+"__select",m=n+"__input",v=n+"__clear-input",O=v+"__wrapper",B=n+"__input-button-separator",g=n+"__toggle-list",H=g+"__wrapper",y=n+"__list",w=n+"__list-option",A=w+"--focused",E=w+"--selected",x=n+"__status",j="."+n,P="."+h,u="."+m,d="."+v,p="."+g,F="."+y,i="."+w,L="."+A,R="."+E,Y="."+x,U=".*{{query}}.*";const _=function(e){var t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:"",t=(e.value=t,new CustomEvent("change",{bubbles:!0,cancelable:!0,detail:{value:t}}));e.dispatchEvent(t)},S=e=>{var t,r,s,a,n,i,o,c,l,e=e.closest(j);if(e)return t=e.querySelector(P),r=e.querySelector(u),s=e.querySelector(F),a=e.querySelector(Y),n=e.querySelector(L),i=e.querySelector(R),o=e.querySelector(p),c=e.querySelector(d),l=e.classList.contains(f),{comboBoxEl:e,selectEl:t,inputEl:r,listEl:s,statusEl:a,focusedOptionEl:n,selectedOptionEl:i,toggleListBtnEl:o,clearInputBtnEl:c,isPristine:l,disableFiltering:"true"===e.dataset.disableFiltering};throw new Error("Element is missing outer "+j)},C=e=>{var{inputEl:e,toggleListBtnEl:t,clearInputBtnEl:r}=S(e);r.hidden=!0,r.disabled=!0,t.disabled=!0,e.disabled=!0};const o=e=>{e=e.closest(j);if(!e.dataset.enhanced){const u=e.querySelector("select");if(!u)throw new Error(j+" is missing inner select");var t=u.id,s=document.querySelector(`label[for="${t}"]`),a=t+"--list",n=t+"-label",i=t+"--assistiveHint";const d=[];var o=e.dataset["defaultValue"],c=e.dataset["placeholder"];let r;if(c&&d.push({placeholder:c}),o)for(let e=0,t=u.options.length;e<t;e+=1){var l=u.options[e];if(l.value===o){r=l;break}}if(!s||!s.matches(`label[for="${t}"]`))throw new Error(j+` for ${t} is either missing a label or a "for" attribute`);s.setAttribute("id",n),s.setAttribute("id",n),u.setAttribute("aria-hidden","true"),u.setAttribute("tabindex","-1"),u.classList.add("usa-sr-only",h),u.id="",u.value="",["required","aria-label","aria-labelledby"].forEach(e=>{var t;u.hasAttribute(e)&&(t=u.getAttribute(e),d.push({[e]:t}),u.removeAttribute(e))});const p=document.createElement("input");p.setAttribute("id",t),p.setAttribute("aria-owns",a),p.setAttribute("aria-controls",a),p.setAttribute("aria-autocomplete","list"),p.setAttribute("aria-describedby",i),p.setAttribute("aria-expanded","false"),p.setAttribute("autocapitalize","off"),p.setAttribute("autocomplete","off"),p.setAttribute("class",m),p.setAttribute("type","text"),p.setAttribute("role","combobox"),d.forEach(r=>Object.keys(r).forEach(e=>{var t=b.escapeHTML`${r[e]}`;p.setAttribute(e,t)})),e.insertAdjacentElement("beforeend",p),e.insertAdjacentHTML("beforeend",b.escapeHTML`
    <span class="${O}" tabindex="-1">
        <button type="button" class="${v}" aria-label="Clear the select contents">&nbsp;</button>
      </span>
      <span class="${B}">&nbsp;</span>
      <span class="${H}" tabindex="-1">
        <button type="button" tabindex="-1" class="${g}" aria-label="Toggle the dropdown list">&nbsp;</button>
      </span>
      <ul
        tabindex="-1"
        id="${a}"
        class="${y}"
        role="listbox"
        aria-labelledby="${n}"
        hidden>
      </ul>
      <div class="${x} usa-sr-only" role="status"></div>
      <span id="${i}" class="usa-sr-only">
        When autocomplete results are available use up and down arrows to review and enter to select.
        Touch device users, explore by touch or with swipe gestures.
      </span>`),r&&(c=S(e)["inputEl"],_(u,r.value),_(c,r.text),e.classList.add(f)),u.disabled&&(C(e),u.disabled=!1),u.hasAttribute("aria-disabled")&&(s=e,{inputEl:s,toggleListBtnEl:t,clearInputBtnEl:a}=S(s),a.hidden=!0,a.setAttribute("aria-disabled",!0),t.setAttribute("aria-disabled",!0),s.setAttribute("aria-disabled",!0),u.removeAttribute("aria-disabled")),e.dataset.enhanced="true"}},D=function(e,t){var{skipFocus:r,preventScroll:s}=2<arguments.length&&void 0!==arguments[2]?arguments[2]:{},{inputEl:e,listEl:a,focusedOptionEl:n}=S(e);n&&(n.classList.remove(A),n.setAttribute("tabIndex","-1")),t?(e.setAttribute("aria-activedescendant",t.id),t.setAttribute("tabIndex","0"),t.classList.add(A),s||(n=t.offsetTop+t.offsetHeight,a.scrollTop+a.offsetHeight<n&&(a.scrollTop=n-a.offsetHeight),t.offsetTop<a.scrollTop&&(a.scrollTop=t.offsetTop)),r||t.focus({preventScroll:s})):(e.setAttribute("aria-activedescendant",""),e.focus())},T=function(e){let s=1<arguments.length&&void 0!==arguments[1]?arguments[1]:"",a=2<arguments.length&&void 0!==arguments[2]?arguments[2]:{};const n=e=>e.replace(/[-[\]{}()*+?.,\\^$|#\s]/g,"\\$&");e=`^(?:${e.replace(/{{(.*?)}}/g,(e,t)=>{var t=t.trim(),r=a[t];return"query"!==t&&r?(t=new RegExp(r,"i"),(r=s.match(t))?n(r[1]):""):n(s)})})$`;return new RegExp(e,"i")},c=e=>{const{comboBoxEl:t,selectEl:r,inputEl:s,listEl:a,statusEl:n,isPristine:i,disableFiltering:o}=S(e);let c,l;const u=a.id+"--option-";var d=(s.value||"").toLowerCase(),e=t.dataset.filter||U,p=T(e,d,t.dataset);const b=[];for(let e=0,t=r.options.length;e<t;e+=1){var f=r.options[e],h=u+b.length;f.value&&(o||i||!d||p.test(f.text))&&(r.value&&f.value===r.value&&(c=h),o&&!l&&p.test(f.text)&&(l=h),b.push(f))}var e=b.length,m=b.map((e,t)=>{var r=u+t,s=[w];let a="-1",n="false";r===c&&(s.push(E,A),a="0",n="true"),c||0!==t||(s.push(A),a="0");var i=document.createElement("li");return i.setAttribute("aria-setsize",b.length),i.setAttribute("aria-posinset",t+1),i.setAttribute("aria-selected",n),i.setAttribute("id",r),i.setAttribute("class",s.join(" ")),i.setAttribute("tabindex",a),i.setAttribute("role","option"),i.setAttribute("data-value",e.value),i.textContent=e.text,i}),v=document.createElement("li");v.setAttribute("class",w+"--no-results"),v.textContent="No results found",a.hidden=!1,e?(a.innerHTML="",m.forEach(e=>a.insertAdjacentElement("beforeend",e))):(a.innerHTML="",a.insertAdjacentElement("beforeend",v)),s.setAttribute("aria-expanded","true"),n.textContent=e?e+` result${1<e?"s":""} available.`:"No results.";let g;i&&c?g=a.querySelector("#"+c):o&&l&&(g=a.querySelector("#"+l)),g&&D(a,g,{skipFocus:!0})},l=e=>{var{inputEl:e,listEl:t,statusEl:r,focusedOptionEl:s}=S(e);r.innerHTML="",e.setAttribute("aria-expanded","false"),e.setAttribute("aria-activedescendant",""),s&&s.classList.remove(A),t.scrollTop=0,t.hidden=!0},$=e=>{var{comboBoxEl:t,selectEl:r,inputEl:s}=S(e);_(r,e.dataset.value),_(s,e.textContent),t.classList.add(f),l(t),s.focus()},k=e=>{var{comboBoxEl:r,selectEl:s,inputEl:a}=S(e),n=s.value,i=(a.value||"").toLowerCase();if(n)for(let e=0,t=s.options.length;e<t;e+=1){var o=s.options[e];if(o.value===n)return i!==o.text&&_(a,o.text),void r.classList.add(f)}i&&_(a)};var M=e=>{var{comboBoxEl:t,listEl:r}=S(e.target),r=(r.hidden&&c(t),r.querySelector(L)||r.querySelector(i));r&&D(t,r),e.preventDefault()},q=e=>{var t=e.target,r=t.nextSibling;r&&D(t,r),e.preventDefault()},N=e=>{var{comboBoxEl:t,listEl:r,focusedOptionEl:s}=S(e.target),s=s&&s.previousSibling,r=!r.hidden;D(t,s),r&&e.preventDefault(),s||l(t)};a=a({[e]:{[u](){var e,t;this.disabled||(e=this,{comboBoxEl:e,listEl:t}=S(e),t.hidden&&c(e))},[p](){var e,t,r;this.disabled||(e=this,{comboBoxEl:e,listEl:t,inputEl:r}=S(e),(t.hidden?c:l)(e),r.focus())},[i](){this.disabled||$(this)},[d](){var e,t,r,s;this.disabled||(e=this,{comboBoxEl:e,listEl:s,selectEl:t,inputEl:r}=S(e),s=!s.hidden,t.value&&_(t),r.value&&_(r),e.classList.remove(f),s&&c(e),r.focus())}},focusout:{[j](e){this.contains(e.relatedTarget)||(k(this),l(this))}},keydown:{[j]:r({Escape:e=>{var{comboBoxEl:e,inputEl:t}=S(e.target);l(e),k(e),t.focus()}}),[u]:r({Enter:e=>{var{comboBoxEl:t,listEl:r}=S(e.target),r=!r.hidden;(e=>{var{comboBoxEl:r,selectEl:s,inputEl:a,statusEl:e}=S(e),n=(e.textContent="",(a.value||"").toLowerCase());if(n)for(let e=0,t=s.options.length;e<t;e+=1){var i=s.options[e];if(i.text.toLowerCase()===n)return _(s,i.value),_(a,i.text),r.classList.add(f)}k(r)})(t),r&&l(t),e.preventDefault()},ArrowDown:M,Down:M}),[i]:r({ArrowUp:N,Up:N,ArrowDown:q,Down:q,Enter:e=>{$(e.target),e.preventDefault()}," ":e=>{$(e.target),e.preventDefault()},"Shift+Tab":()=>{}})},input:{[u](){this.closest(j).classList.remove(f),c(this)}},mouseover:{[i](){var e;(e=this).classList.contains(A)||D(e,e,{preventScroll:!0})}}},{init(e){s(j,e).forEach(e=>{o(e)})},getComboBoxContext:S,enhanceComboBox:o,generateDynamicRegExp:T,disable:C,enable:e=>{var{inputEl:e,toggleListBtnEl:t,clearInputBtnEl:r}=S(e);r.hidden=!1,r.disabled=!1,t.disabled=!1,e.disabled=!1},displayList:c,hideList:l,COMBO_BOX_CLASS:n});t.exports=a},{"../../uswds-core/src/js/config":35,"../../uswds-core/src/js/events":36,"../../uswds-core/src/js/utils/behavior":45,"../../uswds-core/src/js/utils/sanitizer":50,"../../uswds-core/src/js/utils/select-or-matches":52,"receptor/keymap":11}],20:[function(e,A,E){"use strict";const t=e("receptor/keymap");var _=e("../../uswds-core/src/js/utils/behavior");const S=e("../../uswds-core/src/js/utils/select"),P=e("../../uswds-core/src/js/utils/select-or-matches");var r=e("../../uswds-core/src/js/config")["prefix"],F=e("../../uswds-core/src/js/events")["CLICK"];const R=e("../../uswds-core/src/js/utils/active-element");var Y=e("../../uswds-core/src/js/utils/is-ios-device");const C=e("../../uswds-core/src/js/utils/sanitizer");e=r+"-date-picker";const U=e+"__wrapper",V=e+"--initialized",K=e+"--active",W=e+"__internal-input",z=e+"__external-input",Q=e+"__button",n=e+"__calendar",G=e+"__status",D=n+"__date",Z=D+"--focused",X=D+"--selected",J=D+"--previous-month",ee=D+"--current-month",te=D+"--next-month",re=D+"--range-date",se=D+"--today",ae=D+"--range-date-start",ne=D+"--range-date-end",ie=D+"--within-range",oe=n+"__previous-year",ce=n+"__previous-month",le=n+"__next-year",ue=n+"__next-month",de=n+"__month-selection",pe=n+"__year-selection",p=n+"__month",be=p+"--focused",fe=p+"--selected",x=n+"__year",he=x+"--focused",me=x+"--selected",ve=n+"__previous-year-chunk",ge=n+"__next-year-chunk",ye=n+"__date-picker",we=n+"__month-picker",Ae=n+"__year-picker",T=n+"__table",Ee=n+"__row",$=n+"__cell",k=$+"--center-items",xe=n+"__month-label",je=n+"__day-of-week",f="."+e,Le="."+Q,_e="."+W,h="."+z,m="."+n,Se="."+G;r="."+D;const o="."+Z;e="."+ee;const Ce="."+oe,De="."+ce,Te="."+le,$e="."+ue;var ke="."+pe,Me="."+de,qe="."+p;const v="."+x,Ne="."+ve,Ie="."+ge,M="."+ye;var Oe="."+we;const Be="."+Ae,c="."+be,l="."+he,He="Please enter a valid date",Pe=["January","February","March","April","May","June","July","August","September","October","November","December"],Fe=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],j=12,Re="MM/DD/YYYY",Ye="YYYY-MM-DD";function Ue(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return t.map(e=>e+":not([disabled])").join(", ")}var Ve=Ue(Ce,De,ke,Me,Te,$e,o),Ke=Ue(c),We=Ue(Ne,Ie,l);const ze=(e,t)=>(t!==e.getMonth()&&e.setDate(0),e),Qe=(e,t,r)=>{var s=new Date(0);return s.setFullYear(e,t,r),s},Ge=()=>{var e=new Date,t=e.getDate(),r=e.getMonth(),e=e.getFullYear();return Qe(e,r,t)},Ze=e=>{var t=new Date(0);return t.setFullYear(e.getFullYear(),e.getMonth(),1),t},Xe=e=>{var t=new Date(0);return t.setFullYear(e.getFullYear(),e.getMonth()+1,0),t},q=(e,t)=>{e=new Date(e.getTime());return e.setDate(e.getDate()+t),e},Je=(e,t)=>q(e,-t),et=(e,t)=>q(e,7*t),tt=e=>{var t=e.getDay();return Je(e,t)},N=(e,t)=>{var e=new Date(e.getTime()),r=(e.getMonth()+12+t)%12;return e.setMonth(e.getMonth()+t),ze(e,r),e},rt=(e,t)=>N(e,-t),st=(e,t)=>N(e,12*t),at=(e,t)=>st(e,-t),b=(e,t)=>{e=new Date(e.getTime());return e.setMonth(t),ze(e,t),e},L=(e,t)=>{var e=new Date(e.getTime()),r=e.getMonth();return e.setFullYear(t),ze(e,r),e},nt=(e,t)=>{let r=t<e?t:e;return new Date(r.getTime())},it=(e,t)=>{let r=e<t?t:e;return new Date(r.getTime())},ot=(e,t)=>e&&t&&e.getFullYear()===t.getFullYear(),I=(e,t)=>ot(e,t)&&e.getMonth()===t.getMonth(),O=(e,t)=>I(e,t)&&e.getDate()===t.getDate(),u=(e,t,r)=>{let s=e;return e<t?s=t:r&&r<e&&(s=r),new Date(s.getTime())},ct=(e,t,r)=>t<=e&&(!r||e<=r),lt=(e,t,r)=>Xe(e)<t||r&&Ze(e)>r,ut=(e,t,r)=>Xe(b(e,11))<t||r&&Ze(b(e,0))>r,g=function(s){var a=1<arguments.length&&void 0!==arguments[1]?arguments[1]:Ye,n=2<arguments.length&&void 0!==arguments[2]&&arguments[2];let i,o,c,l,u;if(s){let e,t,r;a===Re?[e,t,r]=s.split("/"):[r,e,t]=s.split("-"),r&&(u=parseInt(r,10),Number.isNaN(u)||(l=u,n&&(l=Math.max(0,l),r.length<3)&&(s=(a=Ge().getFullYear())-a%10**r.length,l=s+u))),e&&(u=parseInt(e,10),Number.isNaN(u)||(o=u,n&&(o=Math.max(1,o),o=Math.min(12,o)))),o&&t&&null!=l&&(u=parseInt(t,10),Number.isNaN(u)||(c=u,n&&(a=Qe(l,o,0).getDate(),c=Math.max(1,c),c=Math.min(a,c)))),o&&c&&null!=l&&(i=Qe(l,o-1,c))}return i},B=function(e){var t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:Ye,r=(e,t)=>("0000"+e).slice(-t),s=e.getMonth()+1,a=e.getDate(),e=e.getFullYear();return t===Re?[r(s,2),r(a,2),r(e,4)].join("/"):[r(e,4),r(s,2),r(a,2)].join("-")},dt=(e,t)=>{var r=[],s=[];let a=0;for(;a<e.length;){s=[];const i=document.createElement("tr");for(;a<e.length&&s.length<t;){var n=document.createElement("td");n.insertAdjacentElement("beforeend",e[a]),s.push(n),a+=1}s.forEach(e=>{i.insertAdjacentElement("beforeend",e)}),r.push(i)}return r},pt=e=>{const t=document.createElement("tbody");return e.forEach(e=>{t.insertAdjacentElement("beforeend",e)}),t},bt=function(e){var t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:"",t=(e.value=t,new CustomEvent("change",{bubbles:!0,cancelable:!0,detail:{value:t}}));e.dispatchEvent(t)},H=e=>{e=e.closest(f);if(!e)throw new Error("Element is missing outer "+f);var t=e.querySelector(_e),r=e.querySelector(h),s=e.querySelector(m),a=e.querySelector(Le),n=e.querySelector(Se),i=e.querySelector(v),o=g(r.value,Re,!0),c=g(t.value),l=g(s.dataset.value),u=g(e.dataset.minDate),d=g(e.dataset.maxDate),p=g(e.dataset.rangeDate),b=g(e.dataset.defaultDate);if(u&&d&&d<u)throw new Error("Minimum date cannot be after maximum date");return{calendarDate:l,minDate:u,toggleBtnEl:a,selectedDate:c,maxDate:d,firstYearChunkEl:i,datePickerEl:e,inputDate:o,internalInputEl:t,externalInputEl:r,calendarEl:s,rangeDate:p,defaultDate:b,statusEl:n}},ft=e=>{var{externalInputEl:e,toggleBtnEl:t}=H(e);t.disabled=!0,e.disabled=!0},ht=e=>{var{externalInputEl:e,toggleBtnEl:t}=H(e);t.setAttribute("aria-disabled",!0),e.setAttribute("aria-disabled",!0)};const mt=e=>{var t,r,s,a,{externalInputEl:e,minDate:n,maxDate:i}=H(e),e=e.value;let o=!1;return o=e&&(o=!0,[t,r,s]=(e=e.split("/")).map(e=>{let t;e=parseInt(e,10);return t=Number.isNaN(e)?t:e}),t)&&r&&null!=s&&(a=Qe(s,t-1,r)).getMonth()===t-1&&a.getDate()===r&&a.getFullYear()===s&&4===e[2].length&&ct(a,n,i)?!1:o},vt=e=>{var e=H(e)["externalInputEl"],t=mt(e);t&&!e.validationMessage&&e.setCustomValidity(He),t||e.validationMessage!==He||e.setCustomValidity("")},gt=(e,t)=>{var r,s,a=g(t);a&&(a=B(a,Re),{datePickerEl:e,internalInputEl:r,externalInputEl:s}=H(e),bt(r,t),bt(s,a),vt(e))},d=(e,t)=>{const{datePickerEl:r,calendarEl:s,statusEl:a,selectedDate:d,maxDate:p,minDate:b,rangeDate:f}=H(e),h=Ge();let n=t||h;e=s.hidden;const m=q(n,0);var i=n.getMonth(),t=n.getFullYear();const v=rt(n,1),g=N(n,1);var o=B(n),c=Ze(n),l=I(n,b),u=I(n,p),y=d||n;const w=f&&nt(y,f),A=f&&it(y,f),E=f&&q(w,1),x=f&&Je(A,1);for(var y=Pe[i],j=(n=tt(c),[]);j.length<28||n.getMonth()===i||j.length%7!=0;)j.push((e=>{var t=[D],r=e.getDate(),s=e.getMonth(),a=e.getFullYear(),n=e.getDay(),i=B(e);let o="-1";var c=!ct(e,b,p),l=O(e,d),e=(I(e,v)&&t.push(J),I(e,m)&&t.push(ee),I(e,g)&&t.push(te),l&&t.push(X),O(e,h)&&t.push(se),f&&(O(e,f)&&t.push(re),O(e,w)&&t.push(ae),O(e,A)&&t.push(ne),ct(e,E,x))&&t.push(ie),O(e,m)&&(o="0",t.push(Z)),Pe[s]),n=Fe[n],u=document.createElement("button");return u.setAttribute("type","button"),u.setAttribute("tabindex",o),u.setAttribute("class",t.join(" ")),u.setAttribute("data-day",r),u.setAttribute("data-month",s+1),u.setAttribute("data-year",a),u.setAttribute("data-value",i),u.setAttribute("aria-label",C.escapeHTML`${r} ${e} ${a} ${n}`),u.setAttribute("aria-selected",l?"true":"false"),!0==c&&(u.disabled=!0),u.textContent=r,u})(n)),n=q(n,1);var c=dt(j,7),L=s.cloneNode(),o=(L.dataset.value=o,L.style.top=r.offsetHeight+"px",L.hidden=!1,L.innerHTML=C.escapeHTML`
    <div tabindex="-1" class="${ye}">
      <div class="${Ee}">
        <div class="${$} ${k}">
          <button
            type="button"
            class="${oe}"
            aria-label="Navigate back one year"
            ${l?'disabled="disabled"':""}
          ></button>
        </div>
        <div class="${$} ${k}">
          <button
            type="button"
            class="${ce}"
            aria-label="Navigate back one month"
            ${l?'disabled="disabled"':""}
          ></button>
        </div>
        <div class="${$} ${xe}">
          <button
            type="button"
            class="${de}" aria-label="${y}. Click to select month"
          >${y}</button>
          <button
            type="button"
            class="${pe}" aria-label="${t}. Click to select year"
          >${t}</button>
        </div>
        <div class="${$} ${k}">
          <button
            type="button"
            class="${ue}"
            aria-label="Navigate forward one month"
            ${u?'disabled="disabled"':""}
          ></button>
        </div>
        <div class="${$} ${k}">
          <button
            type="button"
            class="${le}"
            aria-label="Navigate forward one year"
            ${u?'disabled="disabled"':""}
          ></button>
        </div>
      </div>
    </div>
    `,document.createElement("table")),l=(o.setAttribute("class",T),o.setAttribute("role","presentation"),document.createElement("thead"));o.insertAdjacentElement("beforeend",l);const _=document.createElement("tr"),S=(l.insertAdjacentElement("beforeend",_),{Sunday:"S",Monday:"M",Tuesday:"T",Wednesday:"W",Thursday:"Th",Friday:"Fr",Saturday:"S"});Object.keys(S).forEach(e=>{var t=document.createElement("th");t.setAttribute("class",je),t.setAttribute("scope","presentation"),t.setAttribute("aria-label",e),t.textContent=S[e],_.insertAdjacentElement("beforeend",t)});u=pt(c);o.insertAdjacentElement("beforeend",u);L.querySelector(M).insertAdjacentElement("beforeend",o),s.parentNode.replaceChild(L,s),r.classList.add(K);l=[];return O(d,m)&&l.push("Selected date"),e?(l.push("You can navigate by day using left and right arrows","Weeks by using up and down arrows","Months by using page up and page down keys","Years by using shift plus page up and shift plus page down","Home and end keys navigate to the beginning and end of a week"),a.textContent=""):l.push(y+" "+t),a.textContent=l.join(". "),L},yt=e=>{var{datePickerEl:e,calendarEl:t,statusEl:r}=H(e);e.classList.remove(K),t.hidden=!0,r.textContent=""},wt=e=>{var{calendarEl:e,inputDate:t,minDate:r,maxDate:s}=H(e);!e.hidden&&t&&(t=u(t,r,s),d(e,t))},At=(e,t)=>{const{calendarEl:r,statusEl:s,calendarDate:o,minDate:c,maxDate:l}=H(e),u=o.getMonth(),d=null==t?u:t;var e=Pe.map((e,t)=>{var r=b(o,t),r=lt(r,c,l);let s="-1";var a=[p],n=t===u,i=(t===d&&(s="0",a.push(be)),n&&a.push(fe),document.createElement("button"));return i.setAttribute("type","button"),i.setAttribute("tabindex",s),i.setAttribute("class",a.join(" ")),i.setAttribute("data-value",t),i.setAttribute("data-label",e),i.setAttribute("aria-selected",n?"true":"false"),!0===r&&(i.disabled=!0),i.textContent=e,i}),t=document.createElement("div"),a=(t.setAttribute("tabindex","-1"),t.setAttribute("class",we),document.createElement("table")),e=(a.setAttribute("class",T),a.setAttribute("role","presentation"),dt(e,3)),e=pt(e),e=(a.insertAdjacentElement("beforeend",e),t.insertAdjacentElement("beforeend",a),r.cloneNode());return e.insertAdjacentElement("beforeend",t),r.parentNode.replaceChild(e,r),s.textContent="Select a month.",e},y=(e,t)=>{var{calendarEl:e,statusEl:r,calendarDate:s,minDate:a,maxDate:n}=H(e),i=s.getFullYear(),o=null==t?i:t,t=o,c=(t-=t%j,t=Math.max(0,t),ut(L(s,t-1),a,n)),l=ut(L(s,t+j),a,n),u=[];let d=t;for(;u.length<j;){var p=ut(L(s,d),a,n);let e="-1";var b=[x],f=d===i,h=(d===o&&(e="0",b.push(he)),f&&b.push(me),document.createElement("button"));h.setAttribute("type","button"),h.setAttribute("tabindex",e),h.setAttribute("class",b.join(" ")),h.setAttribute("data-value",d),h.setAttribute("aria-selected",f?"true":"false"),!0===p&&(h.disabled=!0),h.textContent=d,u.push(h),d+=1}var m=e.cloneNode(),v=document.createElement("div"),g=(v.setAttribute("tabindex","-1"),v.setAttribute("class",Ae),document.createElement("table")),y=(g.setAttribute("role","presentation"),g.setAttribute("class",T),document.createElement("tbody")),w=document.createElement("tr"),A=document.createElement("button"),c=(A.setAttribute("type","button"),A.setAttribute("class",ve),A.setAttribute("aria-label",`Navigate back ${j} years`),!0===c&&(A.disabled=!0),A.innerHTML=C.escapeHTML`&nbsp`,document.createElement("button")),l=(c.setAttribute("type","button"),c.setAttribute("class",ge),c.setAttribute("aria-label",`Navigate forward ${j} years`),!0===l&&(c.disabled=!0),c.innerHTML=C.escapeHTML`&nbsp`,document.createElement("table")),E=(l.setAttribute("class",T),l.setAttribute("role","presentation"),dt(u,3)),E=pt(E),E=(l.insertAdjacentElement("beforeend",E),document.createElement("td")),A=(E.insertAdjacentElement("beforeend",A),document.createElement("td")),l=(A.setAttribute("colspan","3"),A.insertAdjacentElement("beforeend",l),document.createElement("td"));return l.insertAdjacentElement("beforeend",c),w.insertAdjacentElement("beforeend",E),w.insertAdjacentElement("beforeend",A),w.insertAdjacentElement("beforeend",l),y.insertAdjacentElement("beforeend",w),g.insertAdjacentElement("beforeend",y),v.insertAdjacentElement("beforeend",g),m.insertAdjacentElement("beforeend",v),e.parentNode.replaceChild(m,e),r.textContent=C.escapeHTML`Showing years ${t} to ${t+j-1}. Select a year.`,m},Et=e=>{var{datePickerEl:t,externalInputEl:r}=H(e.target);yt(t),r.focus(),e.preventDefault()};var s=i=>e=>{var{calendarEl:t,calendarDate:r,minDate:s,maxDate:a}=H(e.target),n=i(r),n=u(n,s,a);O(r,n)||d(t,n).querySelector(o).focus(),e.preventDefault()},xt=s(e=>{return e=e,t=1,et(e,-t);var t}),jt=s(e=>et(e,1)),Lt=s(e=>Je(e,1)),_t=s(e=>q(e,1)),St=s(e=>tt(e)),Ct=s(e=>{return t=(e=e).getDay(),q(e,6-t);var t}),Dt=s(e=>N(e,1)),Tt=s(e=>rt(e,1)),$t=s(e=>st(e,1)),s=s(e=>at(e,1));var a=o=>e=>{var t=e.target,r=parseInt(t.dataset.value,10),{calendarEl:t,calendarDate:s,minDate:a,maxDate:n}=H(t),i=b(s,r),r=o(r),r=Math.max(0,Math.min(11,r)),s=b(s,r),r=u(s,a,n);I(i,r)||At(t,r.getMonth()).querySelector(c).focus(),e.preventDefault()},kt=a(e=>e-3),Mt=a(e=>e+3),qt=a(e=>e-1),Nt=a(e=>e+1),It=a(e=>e-e%3),Ot=a(e=>e+2-e%3),Bt=a(()=>11),a=a(()=>0);var i=o=>e=>{var t=e.target,r=parseInt(t.dataset.value,10),{calendarEl:t,calendarDate:s,minDate:a,maxDate:n}=H(t),i=L(s,r),r=o(r),r=Math.max(0,r),s=L(s,r),r=u(s,a,n);ot(i,r)||y(t,r.getFullYear()).querySelector(l).focus(),e.preventDefault()},Ht=i(e=>e-3),Pt=i(e=>e+3),Ft=i(e=>e-1),Rt=i(e=>e+1),Yt=i(e=>e-e%3),Ut=i(e=>e+2-e%3),Vt=i(e=>e-j),i=i(e=>e+j);var w=n=>{const a=e=>{var e=H(e)["calendarEl"],e=S(n,e),t=e.length-1,r=e[0],s=e[t],a=e.indexOf(R());return{focusableElements:e,isNotFound:-1===a,firstTabStop:r,isFirstTab:0===a,lastTabStop:s,isLastTab:a===t}};return{tabAhead(e){var{firstTabStop:t,isLastTab:r,isNotFound:s}=a(e.target);(r||s)&&(e.preventDefault(),t.focus())},tabBack(e){var{lastTabStop:t,isFirstTab:r,isNotFound:s}=a(e.target);(r||s)&&(e.preventDefault(),t.focus())}}},Ve=w(Ve),Ke=w(Ke),w=w(We),We={[F]:{[Le](){var e,t,r,s,a,n;(e=this).disabled||({calendarEl:t,inputDate:n,minDate:r,maxDate:s,defaultDate:a}=H(e),t.hidden?(n=u(n||a||Ge(),r,s),d(t,n).querySelector(o).focus()):yt(e))},[r](){var e,t,r;(e=this).disabled||({datePickerEl:t,externalInputEl:r}=H(e),gt(e,e.dataset.value),yt(t),r.focus())},[qe](){var e,t,r,s,a;(e=this).disabled||({calendarEl:t,calendarDate:a,minDate:r,maxDate:s}=H(e),e=parseInt(e.dataset.value,10),a=b(a,e),a=u(a,r,s),d(t,a).querySelector(o).focus())},[v](){var e,t,r,s,a;(e=this).disabled||({calendarEl:t,calendarDate:a,minDate:r,maxDate:s}=H(e),e=parseInt(e.innerHTML,10),a=L(a,e),a=u(a,r,s),d(t,a).querySelector(o).focus())},[De](){var t=this;if(!t.disabled){var{calendarEl:t,calendarDate:r,minDate:s,maxDate:a}=H(t),r=rt(r,1),r=u(r,s,a),s=d(t,r);let e=s.querySelector(De);(e=e.disabled?s.querySelector(M):e).focus()}},[$e](){var t=this;if(!t.disabled){var{calendarEl:t,calendarDate:r,minDate:s,maxDate:a}=H(t),r=N(r,1),r=u(r,s,a),s=d(t,r);let e=s.querySelector($e);(e=e.disabled?s.querySelector(M):e).focus()}},[Ce](){var t=this;if(!t.disabled){var{calendarEl:t,calendarDate:r,minDate:s,maxDate:a}=H(t),r=at(r,1),r=u(r,s,a),s=d(t,r);let e=s.querySelector(Ce);(e=e.disabled?s.querySelector(M):e).focus()}},[Te](){var t=this;if(!t.disabled){var{calendarEl:t,calendarDate:r,minDate:s,maxDate:a}=H(t),r=st(r,1),r=u(r,s,a),s=d(t,r);let e=s.querySelector(Te);(e=e.disabled?s.querySelector(M):e).focus()}},[Ne](){var t=this;if(!t.disabled){var{calendarEl:t,calendarDate:r,minDate:s,maxDate:a}=H(t),n=t.querySelector(l),n=parseInt(n.textContent,10)-j,n=Math.max(0,n),r=L(r,n),n=u(r,s,a),r=y(t,n.getFullYear());let e=r.querySelector(Ne);(e=e.disabled?r.querySelector(Be):e).focus()}},[Ie](){var t=this;if(!t.disabled){var{calendarEl:t,calendarDate:r,minDate:s,maxDate:a}=H(t),n=t.querySelector(l),n=parseInt(n.textContent,10)+j,n=Math.max(0,n),r=L(r,n),n=u(r,s,a),r=y(t,n.getFullYear());let e=r.querySelector(Ie);(e=e.disabled?r.querySelector(Be):e).focus()}},[Me](){At(this).querySelector(c).focus()},[ke](){y(this).querySelector(l).focus()}},keyup:{[m](e){var t=this.dataset.keydownKeyCode;""+e.keyCode!==t&&e.preventDefault()}},keydown:{[h](e){13===e.keyCode&&vt(this)},[r]:t({Up:xt,ArrowUp:xt,Down:jt,ArrowDown:jt,Left:Lt,ArrowLeft:Lt,Right:_t,ArrowRight:_t,Home:St,End:Ct,PageDown:Dt,PageUp:Tt,"Shift+PageDown":$t,"Shift+PageUp":s,Tab:Ve.tabAhead}),[M]:t({Tab:Ve.tabAhead,"Shift+Tab":Ve.tabBack}),[qe]:t({Up:kt,ArrowUp:kt,Down:Mt,ArrowDown:Mt,Left:qt,ArrowLeft:qt,Right:Nt,ArrowRight:Nt,Home:It,End:Ot,PageDown:Bt,PageUp:a}),[Oe]:t({Tab:Ke.tabAhead,"Shift+Tab":Ke.tabBack}),[v]:t({Up:Ht,ArrowUp:Ht,Down:Pt,ArrowDown:Pt,Left:Ft,ArrowLeft:Ft,Right:Rt,ArrowRight:Rt,Home:Yt,End:Ut,PageDown:i,PageUp:Vt}),[Be]:t({Tab:w.tabAhead,"Shift+Tab":w.tabBack}),[m](e){this.dataset.keydownKeyCode=e.keyCode},[f](e){t({Escape:Et})(e)}},focusout:{[h](){vt(this)},[f](e){this.contains(e.relatedTarget)||yt(this)}},input:{[h](){{var t=this,{internalInputEl:r,inputDate:s}=H(t);let e="";s&&!mt(t)&&(e=B(s)),r.value!==e&&bt(r,e)}wt(this)}}},F=(Y()||(We.mouseover={[e](){var e,t,r;(e=this).disabled||(r=(t=e.closest(m)).dataset.value,(e=e.dataset.value)!==r&&(r=g(e),d(t,r).querySelector(o).focus()))},[qe](){var e,t;(e=this).disabled||e.classList.contains(be)||(t=parseInt(e.dataset.value,10),At(e,t).querySelector(c).focus())},[v](){var e,t;(e=this).disabled||e.classList.contains(he)||(t=parseInt(e.dataset.value,10),y(e,t).querySelector(l).focus())}}),_(We,{init(e){P(f,e).forEach(e=>{var t=(e=e.closest(f)).dataset.defaultValue,r=e.querySelector("input");if(!r)throw new Error(f+" is missing inner input");r.value&&(r.value="");var s=g(e.dataset.minDate||r.getAttribute("min"));e.dataset.minDate=s?B(s):"0000-01-01",(s=g(e.dataset.maxDate||r.getAttribute("max")))&&(e.dataset.maxDate=B(s));(s=document.createElement("div")).classList.add(U);var a=r.cloneNode();a.classList.add(z),a.type="text",s.appendChild(a),s.insertAdjacentHTML("beforeend",C.escapeHTML`
    <button type="button" class="${Q}" aria-haspopup="true" aria-label="Toggle calendar"></button>
    <div class="${n}" role="dialog" aria-modal="true" hidden></div>
    <div class="usa-sr-only ${G}" role="status" aria-live="polite"></div>`),r.setAttribute("aria-hidden","true"),r.setAttribute("tabindex","-1"),r.style.display="none",r.classList.add(W),r.removeAttribute("id"),r.removeAttribute("name"),r.required=!1,e.appendChild(s),e.classList.add(V),t&&gt(e,t),r.disabled&&(ft(e),r.disabled=!1),r.hasAttribute("aria-disabled")&&(ht(e),r.removeAttribute("aria-disabled"))})},getDatePickerContext:H,disable:ft,ariaDisable:ht,enable:e=>{var{externalInputEl:e,toggleBtnEl:t}=H(e);t.disabled=!1,e.disabled=!1},isDateInputInvalid:mt,setCalendarValue:gt,validateDateInput:vt,renderCalendar:d,updateCalendarIfVisible:wt}));A.exports=F},{"../../uswds-core/src/js/config":35,"../../uswds-core/src/js/events":36,"../../uswds-core/src/js/utils/active-element":44,"../../uswds-core/src/js/utils/behavior":45,"../../uswds-core/src/js/utils/is-ios-device":49,"../../uswds-core/src/js/utils/sanitizer":50,"../../uswds-core/src/js/utils/select":53,"../../uswds-core/src/js/utils/select-or-matches":52,"receptor/keymap":11}],21:[function(e,t,r){"use strict";var s=e("../../uswds-core/src/js/utils/behavior");const a=e("../../uswds-core/src/js/utils/select"),n=e("../../uswds-core/src/js/utils/select-or-matches");var i=e("../../uswds-core/src/js/config")["prefix"];const{getDatePickerContext:o,isDateInputInvalid:c,updateCalendarIfVisible:l}=e("../../usa-date-picker/src/index");e=i+"-date-range-picker";const u=e+"__range-start",d=e+"__range-end",p="."+(i+"-date-picker"),b="."+e,f="."+u,h="."+d,m=e=>{var t,r,e=e.closest(b);if(e)return t=e.querySelector(f),r=e.querySelector(h),{dateRangePickerEl:e,rangeStartEl:t,rangeEndEl:r};throw new Error("Element is missing outer "+b)},v=e=>{var{dateRangePickerEl:e,rangeStartEl:t,rangeEndEl:r}=m(e),t=o(t)["internalInputEl"],s=t.value;s&&!c(t)?(r.dataset.minDate=s,r.dataset.rangeDate=s,r.dataset.defaultDate=s):(r.dataset.minDate=e.dataset.minDate||"",r.dataset.rangeDate="",r.dataset.defaultDate=""),l(r)},g=e=>{var{dateRangePickerEl:e,rangeStartEl:t,rangeEndEl:r}=m(e),r=o(r)["internalInputEl"],s=r.value;s&&!c(r)?(t.dataset.maxDate=s,t.dataset.rangeDate=s,t.dataset.defaultDate=s):(t.dataset.maxDate=e.dataset.maxDate||"",t.dataset.rangeDate="",t.dataset.defaultDate=""),l(t)};i=s({"input change":{[f](){v(this)},[h](){g(this)}}},{init(e){n(b,e).forEach(e=>{var e=(e=e).closest(b),[t,r]=a(p,e);if(!t)throw new Error(`${b} is missing inner two '${p}' elements`);if(!r)throw new Error(`${b} is missing second '${p}' element`);t.classList.add(u),r.classList.add(d),e.dataset.minDate||(e.dataset.minDate="0000-01-01");var s=e.dataset["minDate"];(s=(t.dataset.minDate=s,r.dataset.minDate=s,e.dataset)["maxDate"])&&(t.dataset.maxDate=s,r.dataset.maxDate=s),v(e),g(e)})}});t.exports=i},{"../../usa-date-picker/src/index":20,"../../uswds-core/src/js/config":35,"../../uswds-core/src/js/utils/behavior":45,"../../uswds-core/src/js/utils/select":53,"../../uswds-core/src/js/utils/select-or-matches":52}],22:[function(e,t,I){"use strict";const r=e("../../uswds-core/src/js/utils/select-or-matches");var s=e("../../uswds-core/src/js/utils/behavior");const g=e("../../uswds-core/src/js/utils/sanitizer");e=e("../../uswds-core/src/js/config").prefix;const y=e+"-file-input",c="."+y,l=e+"-file-input__input",u=e+"-file-input__target",a="."+l,d=e+"-file-input__box",p=e+"-file-input__instructions",w=e+"-file-input__preview",o=e+"-file-input__preview-heading",b=e+"-file-input--disabled",f=e+"-file-input__choose",A=e+"-file-input__accepted-files-message",h=e+"-file-input__drag-text",n=e+"-file-input--drag",E="is-loading",x="has-invalid-file",j=e+"-file-input__preview-image",L=j+"--generic",_=j+"--pdf",S=j+"--word",C=j+"--video",D=j+"--excel",T=e+"-sr-only",$="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7";let k=Boolean(!0),M="",m="";const v=e=>{var t,e=e.closest(c);if(e)return t=e.querySelector(a),{dropZoneEl:e,inputEl:t};throw new Error("Element is missing outer "+c)};const i=e=>{var t=e.charCodeAt(0);return 32===t?"-":65<=t&&t<=90?"img_"+e.toLowerCase():"__"+t.toString(16).slice(-4)},O=e=>e.replace(/[^a-z0-9]/g,i),B=e=>e+"-"+Math.floor(Date.now().toString()/1e3),q=e=>{return e.hasAttribute("multiple")?"files":"file"},H=e=>{var t,r,s,a=e.hasAttribute("aria-disabled")||e.hasAttribute("disabled"),n=(t=e,r=document.createElement("div"),i=document.createElement("div"),n=document.createElement("div"),t.classList.remove(y),t.classList.add(l),r.classList.add(y),n.classList.add(d),i.classList.add(u),i.prepend(n),t.parentNode.insertBefore(i,t),t.parentNode.insertBefore(r,i),i.appendChild(t),r.appendChild(i),i),i=(r=(t=e).closest(c),i=q(t),s=document.createElement("div"),i=`Drag ${i} here or`,o="choose from folder",M=i+" "+o,s.classList.add(p),s.setAttribute("aria-hidden","true"),t.setAttribute("aria-label",M),s.innerHTML=g.escapeHTML`<span class="${h}">${i}</span> <span class="${f}">${o}</span>`,t.parentNode.insertBefore(s,t),(/rv:11.0/i.test(navigator.userAgent)||/Edge\/\d./i.test(navigator.userAgent))&&(r.querySelector("."+h).outerHTML=""),s),o=v(e)["dropZoneEl"];return a?o.classList.add(b):(t=e,r=document.createElement("div"),s=q(t),a=t.closest(c),t=t.closest("."+u),m=`No ${s} selected.`,r.classList.add(T),r.setAttribute("aria-live","polite"),r.textContent=m,a.insertBefore(r,t)),{instructions:i,dropTarget:n}},N=(e,t)=>{var r=e.querySelectorAll("."+w),s=e.querySelector("."+o),a=e.querySelector("."+A);s&&(s.outerHTML=""),a&&(a.outerHTML="",e.classList.remove(x)),null!==r&&(t&&t.removeAttribute("hidden"),Array.prototype.forEach.call(r,e=>{e.parentNode.removeChild(e)}))},P=(e,t,r)=>{const s=e;let a=m;1===t.length?a="You have selected the file: "+r:1<t.length&&(a=`You have selected ${t.length} files: `+r.join(", ")),setTimeout(()=>{s.textContent=a},1e3)},F=(e,t)=>{var r=document.createElement("div"),s=e.closest("."+u),a=s.querySelector("."+p);let n="Change file",i="";1===t.length?i=g.escapeHTML`Selected file <span class="usa-file-input__choose">${n}</span>`:1<t.length&&(n="Change files",i=g.escapeHTML`${t.length} files selected <span class="usa-file-input__choose">${n}</span>`),a.setAttribute("hidden","true"),r.classList.add(o),r.innerHTML=i,s.insertBefore(r,a),e.setAttribute("aria-label",n)},R=(e,t,r,s)=>{var a=e,n=t,i=r,o=s,c=n.getAttribute("accept");if(o.classList.remove(x),c){var l=c.split(","),c=document.createElement("div");let t=!0;var u=a.target.files||a.dataTransfer.files;for(let e=0;e<u.length;e+=1){var d=u[e];if(!t)break;for(let e=0;e<l.length;e+=1){var p=l[e];if(t=0<d.name.indexOf(p)||((e,t)=>{let r=!1;e=e.indexOf(t);return r=0<=e?!0:r})(d.type,p.replace(/\*/g,""))){k=!0;break}}}t||(N(o,i),n.value="",o.insertBefore(c,n),c.textContent=n.dataset.errormessage||"This is not a valid file type.",c.classList.add(A),o.classList.add(x),k=!1,a.preventDefault(),a.stopPropagation())}if(!0===k){var i=t,b=r,n=s,f=(c=e).target.files,c=n.closest("."+y).querySelector("."+T),h=[];N(n,b);for(let e=0;e<f.length;e+=1){const m=new FileReader,v=f[e].name;let t;h.push(v),m.onloadstart=function(){t=B(O(v)),b.insertAdjacentHTML("afterend",g.escapeHTML`<div class="${w}" aria-hidden="true">
          <img id="${t}" src="${$}" alt="" class="${j} ${E}"/>${v}
        <div>`)},m.onloadend=function(){var e=document.getElementById(t);0<v.indexOf(".pdf")?e.setAttribute("onerror",`this.onerror=null;this.src="${$}"; this.classList.add("${_}")`):0<v.indexOf(".doc")||0<v.indexOf(".pages")?e.setAttribute("onerror",`this.onerror=null;this.src="${$}"; this.classList.add("${S}")`):0<v.indexOf(".xls")||0<v.indexOf(".numbers")?e.setAttribute("onerror",`this.onerror=null;this.src="${$}"; this.classList.add("${D}")`):0<v.indexOf(".mov")||0<v.indexOf(".mp4")?e.setAttribute("onerror",`this.onerror=null;this.src="${$}"; this.classList.add("${C}")`):e.setAttribute("onerror",`this.onerror=null;this.src="${$}"; this.classList.add("${L}")`),e.classList.remove(E),e.src=m.result},f[e]&&m.readAsDataURL(f[e])}0===f.length?i.setAttribute("aria-label",M):F(i,f),P(c,f,h)}};e=s({},{init(e){r(c,e).forEach(t=>{const{instructions:r,dropTarget:s}=H(t);s.addEventListener("dragover",function(){this.classList.add(n)},!1),s.addEventListener("dragleave",function(){this.classList.remove(n)},!1),s.addEventListener("drop",function(){this.classList.remove(n)},!1),t.addEventListener("change",e=>R(e,t,r,s),!1)})},teardown(e){r(a,e).forEach(e=>{var t=e.parentElement.parentElement;t.parentElement.replaceChild(e,t),e.className=y})},getFileInputContext:v,disable:e=>{var{dropZoneEl:e,inputEl:t}=v(e);t.disabled=!0,e.classList.add(b)},ariaDisable:e=>{e=v(e).dropZoneEl;e.classList.add(b)},enable:e=>{var{dropZoneEl:e,inputEl:t}=v(e);t.disabled=!1,e.classList.remove(b),e.removeAttribute("aria-disabled")}});t.exports=e},{"../../uswds-core/src/js/config":35,"../../uswds-core/src/js/utils/behavior":45,"../../uswds-core/src/js/utils/sanitizer":50,"../../uswds-core/src/js/utils/select-or-matches":52}],23:[function(e,t,r){"use strict";var s=e("../../uswds-core/src/js/utils/behavior"),a=e("../../uswds-core/src/js/events")["CLICK"];const n=e("../../uswds-core/src/js/config")["prefix"],i=`.${n}-footer--big`,o=i+" nav"+` .${n}-footer__primary-link`;function c(s){var e=document.querySelector(i);e&&e.querySelectorAll(o).forEach(e=>{var t=e.getAttribute("class"),r=e.getAttribute("data-tag")||e.tagName,r=document.createElement(s?"button":r);r.setAttribute("class",t),r.classList.toggle(n+"-footer__primary-link--button",s),r.textContent=e.textContent,s&&(r.setAttribute("data-tag",e.tagName),t=n+"-footer-menu-list-"+Math.floor(1e5*Math.random()),r.setAttribute("aria-controls",t),r.setAttribute("aria-expanded","false"),e.nextElementSibling.setAttribute("id",t),r.setAttribute("type","button")),e.after(r),e.remove()})}const l=e=>{c(e.matches)};t.exports=s({[a]:{[o]:function(){var e;window.innerWidth<480&&(e="true"===this.getAttribute("aria-expanded"),this.closest(i).querySelectorAll(o).forEach(e=>{e.setAttribute("aria-expanded",!1)}),this.setAttribute("aria-expanded",!e))}}},{HIDE_MAX_WIDTH:480,init(){c(window.innerWidth<480),this.mediaQueryList=window.matchMedia("(max-width: 479.9px)"),this.mediaQueryList.addListener(l)},teardown(){this.mediaQueryList.removeListener(l)}})},{"../../uswds-core/src/js/config":35,"../../uswds-core/src/js/events":36,"../../uswds-core/src/js/utils/behavior":45}],24:[function(e,t,N){"use strict";var r=e("receptor/keymap"),s=e("../../uswds-core/src/js/utils/behavior");const a=e("../../uswds-core/src/js/utils/select"),n=e("../../uswds-core/src/js/utils/toggle"),i=e("../../uswds-core/src/js/utils/focus-trap"),o=e("../../usa-accordion/src/index");var c=e("../../uswds-core/src/js/utils/scrollbar-width"),l=e("../../uswds-core/src/js/events")["CLICK"],e=e("../../uswds-core/src/js/config")["prefix"];const u=`.${e}-header`,d=`.${e}-nav`;var p=`.${e}-nav-container`;const b=`.${e}-nav__primary`,f=`.${e}-nav__primary-item`,h=`button.${e}-nav__link`;var m=d+" a";const v="data-nav-hidden",g=`.${e}-menu-btn`,y=`.${e}-nav__close`;var w=y+`, .${e}-overlay`;const A=[d,`.${e}-overlay`].join(", "),E=`body *:not(${u}, ${p}, ${d}, ${d} *):not([aria-hidden])`,x=(v,"usa-js-mobile-nav--active");let j,L,_;const S=()=>document.body.classList.contains(x);e=c();const C=window.getComputedStyle(document.body).getPropertyValue("padding-right"),D=parseInt(C.replace(/px/,""),10)+parseInt(e.replace(/px/,""),10)+"px",T=()=>{const t=document.querySelector(u).parentNode;(_=document.querySelectorAll(E)).forEach(e=>{e!==t&&(e.setAttribute("aria-hidden",!0),e.setAttribute(v,""))})},$=()=>{(_=document.querySelectorAll("[data-nav-hidden]"))&&_.forEach(e=>{e.removeAttribute("aria-hidden"),e.removeAttribute(v)})};p=e=>{var t=document["body"];const r="boolean"==typeof e?e:!S();t.classList.toggle(x,r),a(A).forEach(e=>e.classList.toggle("is-visible",r)),j.focusTrap.update(r);var e=t.querySelector(y),s=document.querySelector(g);return t.style.paddingRight=t.style.paddingRight===D?C:D,(r?T:$)(),r&&e?e.focus():!r&&s&&"none"!==getComputedStyle(s).display&&s.focus(),r};const k=()=>{var e=document.body.querySelector(y);S()&&e&&0===e.getBoundingClientRect().width&&j.toggleNav.call(e,!1)},M=()=>j.toggleNav.call(j,!1),q=()=>{L&&(n(L,!1),L=null)};j=s({[l]:{[h](){return L!==this&&q(),L||(L=this,n(L,!0)),!1},body:q,[g]:p,[w]:p,[m](){var e=this.closest(o.ACCORDION);e&&o.getButtons(e).forEach(e=>o.hide(e)),S()&&j.toggleNav.call(j,!1)}},keydown:{[b]:r({Escape:e=>{var t;q(),t=(e=e).target.closest(f),e.target.matches(h)||(e=t.querySelector(h))&&e.focus()}})},focusout:{[b](e){e.target.closest(b).contains(e.relatedTarget)||q()}}},{init(e){e=e.matches(d)?e:e.querySelector(d);e&&(j.focusTrap=i(e,{Escape:M})),k(),window.addEventListener("resize",k,!1)},teardown(){window.removeEventListener("resize",k,!1),L=!1},focusTrap:null,toggleNav:p}),t.exports=j},{"../../usa-accordion/src/index":15,"../../uswds-core/src/js/config":35,"../../uswds-core/src/js/events":36,"../../uswds-core/src/js/utils/behavior":45,"../../uswds-core/src/js/utils/focus-trap":47,"../../uswds-core/src/js/utils/scrollbar-width":51,"../../uswds-core/src/js/utils/select":53,"../../uswds-core/src/js/utils/toggle":56,"receptor/keymap":11}],25:[function(e,t,r){"use strict";const s=e("receptor/once");var a=e("receptor/keymap");const n=e("../../uswds-core/src/js/utils/select-or-matches");var i=e("../../uswds-core/src/js/utils/behavior"),o=e("../../uswds-core/src/js/config")["prefix"],c=e("../../uswds-core/src/js/events")["CLICK"];const l=e("../../uswds-core/src/js/utils/sanitizer"),u=o+"-current",d=0,p=o+"-in-page-nav",b=o+"-anchor",f=p+"__nav",h=p+"__list",m=p+"__item",v=p+"__link",g=p+"__heading",y=m+"--sub-item",w=e=>{const t=document.querySelectorAll("."+v);e.map(e=>!0===e.isIntersecting&&1<=e.intersectionRatio&&(t.forEach(e=>e.classList.remove(u)),document.querySelector(`a[href="#${e.target.id}"]`).classList.add(u),!0))},A=e=>{var t=document.querySelector("."+p).dataset.scrollOffset||d;window.scroll({behavior:"smooth",top:e.offsetTop-t,block:"start"}),window.location.hash.slice(1)!==e.id&&window.history.pushState(null,"","#"+e.id)},E=e=>{var t=l.escapeHTML`${e.dataset.titleText||"On this page"}`,r=l.escapeHTML`${e.dataset.titleHeadingLevel||"h4"}`,s={root:null,rootMargin:l.escapeHTML`${e.dataset.rootMargin||"0px 0px 0px 0px"}`,threshold:[l.escapeHTML`${e.dataset.threshold||"1"}`]},a=(e=>{e=document.querySelectorAll(e+` h2, ${e} h3`);return Array.from(e).filter(e=>{e=window.getComputedStyle(e);return"none"!==e.getPropertyValue("display")&&"hidden"!==e.getPropertyValue("visibility")})})(l.escapeHTML`${e.dataset.mainContentSelector||"main"}`),n=document.createElement("nav"),r=(n.setAttribute("aria-label",t),n.classList.add(f),document.createElement(r));r.classList.add(g),r.setAttribute("tabindex","0"),r.textContent=t,n.appendChild(r);const i=document.createElement("ul");i.classList.add(h),n.appendChild(i),a.forEach(e=>{var t=document.createElement("li"),r=document.createElement("a"),s=document.createElement("a"),a=e.textContent,n=e.tagName.toLowerCase(),n=(t.classList.add(m),"h3"===n&&t.classList.add(y),(e=>{var t=e.textContent.toLowerCase().replace(/[^a-z\d]/g,"-").replace(/-{2,}/g,"-").replace(/^-|-$/g,"");let r,s=0;for(;r=t,1<(s+=1)&&(r+="-"+s),document.getElementById(r););return r})(e));r.setAttribute("href","#"+n),r.setAttribute("class",v),r.textContent=a,s.setAttribute("id",n),s.setAttribute("class",b),e.insertAdjacentElement("afterbegin",s),i.appendChild(t),t.appendChild(r)}),e.appendChild(n);t=document.querySelectorAll("."+b);const o=new window.IntersectionObserver(w,s);t.forEach(e=>{o.observe(e)})};e=i({[c]:{["."+v](e){e.preventDefault(),this.disabled||(e=this,e=document.getElementById(e.hash.slice(1)),A(e))}},keydown:{["."+v]:a({Enter:e=>{e=(e=>{let t;return t=(e&&1===e.nodeType?e.getAttribute("href"):e.target.hash).replace("#","")})(e),e=document.getElementById(e);const t=e.parentElement;t&&(t.setAttribute("tabindex",0),t.focus(),t.addEventListener("blur",s(()=>{t.setAttribute("tabindex",-1)}))),A(e)}})}},{init(e){n("."+p,e).forEach(e=>{E(e),(e=window.location.hash.slice(1))&&(e=document.getElementById(e))&&A(e)})}});t.exports=e},{"../../uswds-core/src/js/config":35,"../../uswds-core/src/js/events":36,"../../uswds-core/src/js/utils/behavior":45,"../../uswds-core/src/js/utils/sanitizer":50,"../../uswds-core/src/js/utils/select-or-matches":52,"receptor/keymap":11,"receptor/once":12}],26:[function(e,t,r){"use strict";const s=e("../../uswds-core/src/js/utils/select-or-matches");var a=e("../../uswds-core/src/js/utils/behavior"),e=e("../../uswds-core/src/js/config")["prefix"];const n="."+(e+"-masked"),i=e+"-input-mask",o=i+"--content",c="placeholder",p="_#dDmMyY9",b="A",f=(e,t)=>e?t.replace(/\W/g,""):t.replace(/\D/g,""),h=e=>!Number.isNaN(parseInt(e,10)),m=e=>!!e&&e.match(/[A-Z]/i),l=e=>{var t=e,r=t.getAttribute("id"),s=(t.value=(e=>{var t=e.dataset.charset,r=t||e.dataset.placeholder,e=e["value"],s=r.length;let a="",n,i;var o=f(t,e);for(n=0,i=0;n<s;n+=1){var c=h(o[i]),l=m(o[i]),u=0<=p.indexOf(r[n]),d=0<=b.indexOf(r[n]);if(u&&c||t&&d&&l)a+=o[i],i+=1;else{if(!t&&!c&&u||t&&(d&&!l||u&&!c))return a;a+=r[n]}if(void 0===o[i])break}return a})(t),s=(t=e).value,t=""+e.dataset.placeholder.substr(s.length),(e=document.createElement("i")).textContent=s,[e,t]),e=document.getElementById(r+"Mask");e.textContent="",e.replaceChildren(s[0],s[1])};e=a({keyup:{[n](){l(this)}}},{init(e){s(n,e).forEach(e=>{var t,r,s;(s=(e=e).getAttribute(c))&&(e.setAttribute("maxlength",s.length),e.setAttribute("data-placeholder",s),e.removeAttribute(c),(t=document.createElement("span")).classList.add(i),t.setAttribute("data-mask",s),(r=document.createElement("span")).classList.add(o),r.setAttribute("aria-hidden","true"),r.id=e.id+"Mask",r.textContent=s,t.appendChild(r),e.closest("form").insertBefore(t,e),t.appendChild(e))})}});t.exports=e},{"../../uswds-core/src/js/config":35,"../../uswds-core/src/js/utils/behavior":45,"../../uswds-core/src/js/utils/select-or-matches":52}],27:[function(e,t,r){"use strict";var s=e("receptor/keymap"),a=e("../../uswds-core/src/js/utils/behavior");const n=e("../../uswds-core/src/js/utils/toggle"),i=e("../../uswds-core/src/js/utils/focus-trap"),o=e("../../usa-accordion/src/index");var c=e("../../uswds-core/src/js/events")["CLICK"],e=e("../../uswds-core/src/js/config")["prefix"];const l=`.${e}-language__submenu`,u=`.${e}-language__primary`,d=`.${e}-language__primary-item`,p=`button.${e}-language__link`;let b,f;const h=()=>b.toggleLanguage.call(b,!1),m=()=>{f&&(n(f,!1),f=null)};b=a({[c]:{[p](){return f!==this&&m(),f===this?m():f||(f=this,n(f,!0)),!1},body:m,[`.${e}-language`+" a"](){var e=this.closest(o.ACCORDION);e&&o.getButtons(e).forEach(e=>o.hide(e))}},keydown:{[u]:s({Escape:e=>{var t;m(),t=(e=e).target.closest(d),e.target.matches(p)||t.querySelector(p).focus()}})},focusout:{[u](e){e.target.closest(u).contains(e.relatedTarget)||m()}}},{init(e){e=e.matches(l)?e:e.querySelector(l);e&&(b.focusTrap=i(e,{Escape:h}))},teardown(){f=!1},focusTrap:null}),t.exports=b},{"../../usa-accordion/src/index":15,"../../uswds-core/src/js/config":35,"../../uswds-core/src/js/events":36,"../../uswds-core/src/js/utils/behavior":45,"../../uswds-core/src/js/utils/focus-trap":47,"../../uswds-core/src/js/utils/toggle":56,"receptor/keymap":11}],28:[function(e,t,r){"use strict";const s=e("../../uswds-core/src/js/utils/select-or-matches"),u=e("../../uswds-core/src/js/utils/focus-trap");var a=e("../../uswds-core/src/js/utils/scrollbar-width"),e=e("../../uswds-core/src/js/config")["prefix"];const d=e+"-modal",p=d+"-overlay",b=d+"-wrapper",f="data-open-modal",h="data-close-modal",m="data-force-action",v="data-modal-hidden",n="."+d,g=`.${b} *[data-focus]`,y=b+` *[${h}]`,w=(f,y+`, .${p}:not([${m}])`),A=`body > *:not(.${b}):not([aria-hidden])`,E=(v,"usa-js-modal--active"),x="is-hidden";let j;e=a();const L=window.getComputedStyle(document.body).getPropertyValue("padding-right"),_=parseInt(L.replace(/px/,""),10)+parseInt(e.replace(/px/,""),10)+"px",S=()=>{j.toggleModal.call(j,!1)};function C(e){let t,r=e.target;var s,a,n,i,o=document["body"],c=!document.body.classList.contains(E),l=r?r.getAttribute("aria-controls"):document.querySelector(".usa-modal-wrapper.is-visible"),l=c?document.getElementById(l):document.querySelector(".usa-modal-wrapper.is-visible");return!(!l||(s=l.querySelector(g)?l.querySelector(g):l.querySelector(".usa-modal"),a=document.getElementById(l.getAttribute("data-opener")),n=o.querySelector("*[data-open-modal][aria-controls]"),i=l.getAttribute(m),(r="keydown"===e.type&&null!==l?l.querySelector(y):r)&&(r.hasAttribute(f)&&(null===this.getAttribute("id")?(t="modal-"+(Math.floor(9e5*Math.random())+1e5),this.setAttribute("id",t)):t=this.getAttribute("id"),l.setAttribute("data-opener",t)),r.closest("."+d))&&!r.hasAttribute(h)&&!r.closest(`[${h}]`)))&&(o.classList.toggle(E,c),l.classList.toggle("is-visible",c),l.classList.toggle(x,!c),i&&o.classList.toggle("usa-js-no-click",c),o.style.paddingRight=o.style.paddingRight===_?L:_,c&&s?(j.focusTrap=i?u(l):u(l,{Escape:S}),j.focusTrap.update(c),s.focus(),document.querySelectorAll(A).forEach(e=>{e.setAttribute("aria-hidden","true"),e.setAttribute(v,"")})):!c&&n&&a&&(document.querySelectorAll("[data-modal-hidden]").forEach(e=>{e.removeAttribute("aria-hidden"),e.removeAttribute(v)}),a.focus(),j.focusTrap.update(c)),c)}j={init(e){s(n,e).forEach(e=>{var t=e.id;{var r=e,s=document.createElement("div"),a=document.createElement("div");const u=e.getAttribute("id");var n=e.getAttribute("aria-labelledby"),i=e.getAttribute("aria-describedby"),o=!!e.hasAttribute(m)&&e.hasAttribute(m),c=document.createElement("div");c.setAttribute("data-placeholder-for",u),c.style.display="none",c.setAttribute("aria-hidden","true");for(let e=0;e<r.attributes.length;e+=1){var l=r.attributes[e];c.setAttribute("data-original-"+l.name,l.value)}r.after(c),r.parentNode.insertBefore(s,r),s.appendChild(r),r.parentNode.insertBefore(a,r),a.appendChild(r),s.classList.add(x),s.classList.add(b),a.classList.add(p),s.setAttribute("role","dialog"),s.setAttribute("id",u),n&&s.setAttribute("aria-labelledby",n),i&&s.setAttribute("aria-describedby",i),o&&s.setAttribute(m,"true"),e.removeAttribute("id"),e.removeAttribute("aria-labelledby"),e.removeAttribute("aria-describedby"),e.setAttribute("tabindex","-1"),s.querySelectorAll(w).forEach(e=>{e.setAttribute("aria-controls",u)}),document.body.appendChild(s)}document.querySelectorAll(`[aria-controls="${t}"]`).forEach(e=>{"A"===e.nodeName&&(e.setAttribute("role","button"),e.addEventListener("click",e=>e.preventDefault())),e.addEventListener("click",C)})})},teardown(e){s(n,e).forEach(e=>{var t=e,r=t,s=(t=r.parentElement.parentElement).getAttribute("id"),a=document.querySelector(`[data-placeholder-for="${s}"]`);if(a){for(let e=0;e<a.attributes.length;e+=1){var n=a.attributes[e];n.name.startsWith("data-original-")&&r.setAttribute(n.name.substr(14),n.value)}a.after(r),a.parentElement.removeChild(a)}t.parentElement.removeChild(t);s=e.id;document.querySelectorAll(`[aria-controls="${s}"]`).forEach(e=>e.removeEventListener("click",C))})},focusTrap:null,toggleModal:C,on(e){this.init(e)},off(e){this.teardown(e)}},t.exports=j},{"../../uswds-core/src/js/config":35,"../../uswds-core/src/js/utils/focus-trap":47,"../../uswds-core/src/js/utils/scrollbar-width":51,"../../uswds-core/src/js/utils/select-or-matches":52}],29:[function(e,t,r){"use strict";const a=e("receptor/ignore");var s=e("../../uswds-core/src/js/utils/behavior");const n=e("../../uswds-core/src/js/utils/select"),i=e("../../uswds-core/src/js/events")["CLICK"],o=".js-search-button",c=".js-search-form",l="[type=search]",u="header";let d;const p=e=>{e=e.closest(u);return(e||document).querySelector(c)},b=(e,t)=>{var r=p(e);if(!r)throw new Error(`No ${c} found for search toggle in ${u}!`);if(e.hidden=t,r.hidden=!t,t){e=r.querySelector(l);e&&e.focus();const s=a(r,()=>{d&&!function(){b(this,!1),d=void 0}.call(d),document.body.removeEventListener(i,s)});setTimeout(()=>{document.body.addEventListener(i,s)},0)}};e=s({[i]:{".js-search-button":function(){b(this,!0),d=this}}},{init(e){n(o,e).forEach(e=>{b(e,!1)})},teardown(){d=void 0}});t.exports=e},{"../../uswds-core/src/js/events":36,"../../uswds-core/src/js/utils/behavior":45,"../../uswds-core/src/js/utils/select":53,"receptor/ignore":9}],30:[function(e,t,r){"use strict";const s=e("receptor/once");var a=e("../../uswds-core/src/js/utils/behavior"),n=e("../../uswds-core/src/js/events")["CLICK"],e=e("../../uswds-core/src/js/config")["prefix"];t.exports=a({[n]:{[`.${e}-skipnav[href^="#"], .${e}-footer__return-to-top [href^="#"]`]:function(){var e=encodeURI(this.getAttribute("href"));const t=document.getElementById("#"===e?"main-content":e.slice(1));t&&(t.style.outline="0",t.setAttribute("tabindex",0),t.focus(),t.addEventListener("blur",s(()=>{t.setAttribute("tabindex",-1)})))}}})},{"../../uswds-core/src/js/config":35,"../../uswds-core/src/js/events":36,"../../uswds-core/src/js/utils/behavior":45,"receptor/once":12}],31:[function(e,t,r){"use strict";const o=e("../../uswds-core/src/js/utils/select");var s=e("../../uswds-core/src/js/utils/behavior"),a=e("../../uswds-core/src/js/events")["CLICK"];const n=e("../../uswds-core/src/js/config")["prefix"],i=e("../../uswds-core/src/js/utils/sanitizer"),c=`.${n}-table`,l="aria-sort",u="ascending",d="descending",p=n+"-table__header__button",b="."+p,f="th[data-sortable]",h=`.${n}-table__announcement-region[aria-live="polite"]`,m=(e,t)=>e.children[t].getAttribute("data-sort-value")||e.children[t].innerText||e.children[t].textContent,v=(s,a)=>(e,t)=>{var r=m(a?e:t,s),t=m(a?t:e,s);return r&&t&&!Number.isNaN(Number(r))&&!Number.isNaN(Number(t))?r-t:r.toString().localeCompare(t,navigator.language,{numeric:!0,ignorePunctuation:!0})},g=e=>{var t=e.innerText,r=e.getAttribute(l)===u,s=t+", sortable column, currently "+(e.getAttribute(l)===u||e.getAttribute(l)===d||!1?r?"sorted "+u:"sorted "+d:"unsorted"),t=`Click to sort by ${t} in ${r?d:u} order.`;e.setAttribute("aria-label",s),e.querySelector(b).setAttribute("title",t)},y=(t,e)=>{var r,s=t.closest(c);let a=e;if("boolean"!=typeof a&&(a=t.getAttribute(l)===u),!s)throw new Error(f+" is missing outer "+c);if(a=((e,t)=>{e.setAttribute(l,!0===t?d:u),g(e);const r=e.closest(c).querySelector("tbody");var s=[].slice.call(r.querySelectorAll("tr"));const a=[].slice.call(e.parentNode.children).indexOf(e);return s.sort(v(a,!t)).forEach(e=>{[].slice.call(e.children).forEach(e=>e.removeAttribute("data-sort-active")),e.children[a].setAttribute("data-sort-active",!0),r.appendChild(e)}),!0})(t,e)){r=s,o(f,r).filter(e=>e.closest(c)===r).forEach(e=>{e!==t&&((e=e).removeAttribute(l),g(e))});var e=s,s=t,n=e.querySelector("caption").innerText,i=s.getAttribute(l)===u,s=s.innerText;if(!(e=e.nextElementSibling)||!e.matches(h))throw new Error("Table containing a sortable column header is not followed by an aria-live region.");n=`The table named "${n}" is now sorted by ${s} in ${i?u:d} order.`,e.innerText=n}};e=s({[a]:{[b](e){e.preventDefault(),y(e.target.closest(f),e.target.closest(f).getAttribute(l)===u)}}},{init(e){var t,e=o(f,e),e=(e.forEach(e=>{return e=e,(t=document.createElement("button")).setAttribute("tabindex","0"),t.classList.add(p),t.innerHTML=i.escapeHTML`
  <svg class="${n}-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
    <g class="descending" fill="transparent">
      <path d="M17 17L15.59 15.59L12.9999 18.17V2H10.9999V18.17L8.41 15.58L7 17L11.9999 22L17 17Z" />
    </g>
    <g class="ascending" fill="transparent">
      <path transform="rotate(180, 12, 12)" d="M17 17L15.59 15.59L12.9999 18.17V2H10.9999V18.17L8.41 15.58L7 17L11.9999 22L17 17Z" />
    </g>
    <g class="unsorted" fill="transparent">
      <polygon points="15.17 15 13 17.17 13 6.83 15.17 9 16.58 7.59 12 3 7.41 7.59 8.83 9 11 6.83 11 17.17 8.83 15 7.42 16.41 12 21 16.59 16.41 15.17 15"/>
    </g>
  </svg>
  `,e.appendChild(t),void g(e);var t}),e.filter(e=>e.getAttribute(l)===u||e.getAttribute(l)===d)[0]);void 0!==e&&((t=e.getAttribute(l))===u?y(e,!0):t===d&&y(e,!1))},TABLE:c,SORTABLE_HEADER:f,SORT_BUTTON:b});t.exports=e},{"../../uswds-core/src/js/config":35,"../../uswds-core/src/js/events":36,"../../uswds-core/src/js/utils/behavior":45,"../../uswds-core/src/js/utils/sanitizer":50,"../../uswds-core/src/js/utils/select":53}],32:[function(e,t,r){"use strict";var s=e("../../uswds-core/src/js/utils/behavior");const a=e("../../uswds-core/src/js/utils/select-or-matches");var n=e("../../uswds-core/src/js/config")["prefix"];const{COMBO_BOX_CLASS:f,enhanceComboBox:i}=e("../../usa-combo-box/src/index"),h="."+(n+"-time-picker"),m={filter:"0?{{ hourQueryFilter }}:{{minuteQueryFilter}}.*{{ apQueryFilter }}m?",apQueryFilter:"([ap])",hourQueryFilter:"([1-9][0-2]?)",minuteQueryFilter:"[\\d]+:([0-9]{0,2})"},v=e=>{let t;var r;return t=e&&([e,r]=e.split(":").map(e=>{let t;e=parseInt(e,10);return t=Number.isNaN(e)?t:e}),null!=e)&&null!=r?60*e+r:t},o=t=>{const r=t.closest(h),s=r.querySelector("input");if(!s)throw new Error(h+" is missing inner input");const a=document.createElement("select");["id","name","required","aria-label","aria-labelledby","disabled","aria-disabled"].forEach(e=>{var t;s.hasAttribute(e)&&(t=s.getAttribute(e),a.setAttribute(e,t),s.removeAttribute(e))});var n=(e,t)=>("0000"+e).slice(-t),t=Math.max(0,v(r.dataset.minTime)||0),i=Math.min(1439,v(r.dataset.maxTime)||1439),o=Math.floor(Math.max(1,r.dataset.step||30));let c;for(let e=t;e<=i;e+=o){u=e,l=void 0,l=u%60,u=Math.floor(u/60);var{minute:l,hour24:u,hour12:d,ampm:p}={minute:l,hour24:u,hour12:u%12||12,ampm:u<12?"am":"pm"},b=document.createElement("option");b.value=n(u,2)+":"+n(l,2),b.text=d+":"+n(l,2)+p,b.text===s.value&&(c=b.value),a.appendChild(b)}r.classList.add(f),Object.keys(m).forEach(e=>{r.dataset[e]=m[e]}),r.dataset.disableFiltering="true",r.dataset.defaultValue=c,r.appendChild(a),s.remove()};e=s({},{init(e){a(h,e).forEach(e=>{o(e),i(e)})},FILTER_DATASET:m});t.exports=e},{"../../usa-combo-box/src/index":19,"../../uswds-core/src/js/config":35,"../../uswds-core/src/js/utils/behavior":45,"../../uswds-core/src/js/utils/select-or-matches":52}],33:[function(e,t,r){"use strict";const s=e("../../uswds-core/src/js/utils/select-or-matches");var a=e("../../uswds-core/src/js/utils/behavior"),n=e("../../uswds-core/src/js/config")["prefix"];const b=e("../../uswds-core/src/js/utils/is-in-viewport"),i=`.${n}-tooltip`;e=`.${n}-tooltip__trigger`;const o=n+"-tooltip__trigger",c=n+"-tooltip",f=n+"-tooltip__body",h="is-visible",m=n+"-tooltip__body--wrap",l=e=>{var t=e.parentNode,r=t.querySelector("."+f);return{trigger:e,wrapper:t,body:r}},u=(t,s,e)=>{t.setAttribute("aria-hidden","false"),t.classList.add("is-set");const a=e=>{t.classList.remove(f+"--top"),t.classList.remove(f+"--bottom"),t.classList.remove(f+"--right"),t.classList.remove(f+"--left"),t.classList.add(f+"--"+e)},n=e=>{e.style.top=null,e.style.bottom=null,e.style.right=null,e.style.left=null,e.style.margin=null},i=(e,t)=>parseInt(window.getComputedStyle(e).getPropertyValue(t),10),o=(e,t,r)=>{return 0<i(r,"margin-"+e)?t-i(r,"margin-"+e):t},c=e=>{n(e);var t=o("top",e.offsetHeight,s),r=o("left",e.offsetWidth,s);a("top"),e.style.left="50%",e.style.top="-5px",e.style.margin=`-${t}px 0 0 -${r/2}px`},l=e=>{n(e);var t=o("left",e.offsetWidth,s);a("bottom"),e.style.left="50%",e.style.margin=`5px 0 0 -${t/2}px`},u=e=>{n(e);var t=o("top",e.offsetHeight,s);a("right"),e.style.top="50%",e.style.left=s.offsetLeft+s.offsetWidth+5+"px",e.style.margin=`-${t/2}px 0 0 0`},d=e=>{n(e);var t=o("top",e.offsetHeight,s),r=o("left",s.offsetLeft>e.offsetWidth?s.offsetLeft-e.offsetWidth:e.offsetWidth,s);a("left"),e.style.top="50%",e.style.left="-5px",e.style.margin=`-${t/2}px 0 0 ${s.offsetLeft>e.offsetWidth?r:-r}px`};function p(r,e){e=1<arguments.length&&void 0!==e?e:1;const s=[c,l,u,d];let a=!1;!function e(t){t<s.length&&((0,s[t])(r),b(r)?a=!0:e(t+=1))}(0),a||(r.classList.add(m),e<=2&&p(r,e+=1))}switch(e){case"top":c(t),b(t)||p(t);break;case"bottom":l(t),b(t)||p(t);break;case"right":u(t),b(t)||p(t);break;case"left":d(t),b(t)||p(t)}setTimeout(()=>{t.classList.add(h)},20)},d=e=>{e.classList.remove(h),e.classList.remove("is-set"),e.classList.remove(m),e.setAttribute("aria-hidden","true")},p=e=>{var t="tooltip-"+(Math.floor(9e5*Math.random())+1e5),r=e.getAttribute("title");const s=document.createElement("span");var a=document.createElement("span"),n=e.getAttribute("data-classes");let i=e.getAttribute("data-position");return i||(i="top",e.setAttribute("data-position",i)),e.setAttribute("aria-describedby",t),e.setAttribute("tabindex","0"),e.removeAttribute("title"),e.classList.remove(c),e.classList.add(o),e.parentNode.insertBefore(s,e),s.appendChild(e),s.classList.add(c),s.appendChild(a),n&&n.split(" ").forEach(e=>s.classList.add(e)),a.classList.add(f),a.setAttribute("id",t),a.setAttribute("role","tooltip"),a.setAttribute("aria-hidden","true"),a.textContent=r,{tooltipBody:a,position:i,tooltipContent:r,wrapper:s}};n=a({"mouseover focusin":{[i](e){e=e.target;"BUTTON"===e.nodeName&&e.hasAttribute("title")&&p(e)},[e](e){var{trigger:e,body:t}=l(e.target);u(t,e,e.dataset.position)}},"mouseout focusout":{[e](e){e=l(e.target).body;d(e)}}},{init(e){s(i,e).forEach(e=>{p(e)})},setup:p,getTooltipElements:l,show:u,hide:d});t.exports=n},{"../../uswds-core/src/js/config":35,"../../uswds-core/src/js/utils/behavior":45,"../../uswds-core/src/js/utils/is-in-viewport":48,"../../uswds-core/src/js/utils/select-or-matches":52}],34:[function(e,t,r){"use strict";var s=e("../../uswds-core/src/js/utils/behavior");const a=e("../../uswds-core/src/js/utils/validate-input");var n=e("../../uswds-core/src/js/config")["prefix"];const i=e("../../uswds-core/src/js/utils/select-or-matches"),o="input[data-validation-element]",c=`.${n}-checklist__item`,l=e=>{var t,s,r,a;a=(t=e).parentNode,r=t.getAttribute("id")+"-sr-summary",t.setAttribute("aria-describedby",r),(t=document.createElement("span")).setAttribute("data-validation-status",""),t.classList.add("usa-sr-only"),t.setAttribute("aria-live","polite"),t.setAttribute("aria-atomic",!0),t.setAttribute("id",r),a.append(t),r=(s=e).parentNode.querySelectorAll(c),a=s.getAttribute("data-validation-element"),s.setAttribute("aria-controls",a),r.forEach(e=>{let t="status incomplete";s.hasAttribute("data-validation-incomplete")&&(t=s.getAttribute("data-validation-incomplete"));var r=`${e.textContent} ${t} `;e.setAttribute("tabindex","0"),e.setAttribute("aria-label",r)})};e=s({"input change":{"input[data-validation-element]"(e){e=e.target,a(e)}}},{init(e){i(o,e).forEach(e=>l(e))}});t.exports=e},{"../../uswds-core/src/js/config":35,"../../uswds-core/src/js/utils/behavior":45,"../../uswds-core/src/js/utils/select-or-matches":52,"../../uswds-core/src/js/utils/validate-input":57}],35:[function(e,t,r){"use strict";t.exports={prefix:"usa"}},{}],36:[function(e,t,r){"use strict";t.exports={CLICK:"click"}},{}],37:[function(e,t,r){"use strict";var s=e("../../../usa-accordion/src/index"),a=e("../../../usa-banner/src/index"),n=e("../../../usa-button/src/index"),i=e("../../../usa-character-count/src/index"),o=e("../../../usa-combo-box/src/index"),c=e("../../../usa-date-picker/src/index"),l=e("../../../usa-date-range-picker/src/index"),u=e("../../../usa-file-input/src/index"),d=e("../../../usa-footer/src/index"),p=e("../../../usa-in-page-navigation/src/index"),b=e("../../../usa-input-mask/src/index"),f=e("../../../usa-language-selector/src/index"),h=e("../../../usa-modal/src/index"),m=e("../../../usa-header/src/index"),v=e("../../../_usa-password/src/index"),g=e("../../../usa-search/src/index"),y=e("../../../usa-skipnav/src/index"),w=e("../../../usa-table/src/index"),A=e("../../../usa-time-picker/src/index"),E=e("../../../usa-tooltip/src/index"),e=e("../../../usa-validation/src/index");t.exports={accordion:s,banner:a,button:n,characterCount:i,comboBox:o,datePicker:c,dateRangePicker:l,fileInput:u,footer:d,inPageNavigation:p,inputMask:b,languageSelector:f,modal:h,navigation:m,password:v,search:g,skipnav:y,table:w,timePicker:A,tooltip:E,validator:e}},{"../../../_usa-password/src/index":14,"../../../usa-accordion/src/index":15,"../../../usa-banner/src/index":16,"../../../usa-button/src/index":17,"../../../usa-character-count/src/index":18,"../../../usa-combo-box/src/index":19,"../../../usa-date-picker/src/index":20,"../../../usa-date-range-picker/src/index":21,"../../../usa-file-input/src/index":22,"../../../usa-footer/src/index":23,"../../../usa-header/src/index":24,"../../../usa-in-page-navigation/src/index":25,"../../../usa-input-mask/src/index":26,"../../../usa-language-selector/src/index":27,"../../../usa-modal/src/index":28,"../../../usa-search/src/index":29,"../../../usa-skipnav/src/index":30,"../../../usa-table/src/index":31,"../../../usa-time-picker/src/index":32,"../../../usa-tooltip/src/index":33,"../../../usa-validation/src/index":34}],38:[function(e,t,r){"use strict";"function"!=typeof window.CustomEvent&&(window.CustomEvent=function(e,t){var t=t||{bubbles:!1,cancelable:!1,detail:null},r=document.createEvent("CustomEvent");return r.initCustomEvent(e,t.bubbles,t.cancelable,t.detail),r})},{}],39:[function(e,t,r){"use strict";var s=window.HTMLElement.prototype;const a="hidden";a in s||Object.defineProperty(s,a,{get(){return this.hasAttribute(a)},set(e){e?this.setAttribute(a,""):this.removeAttribute(a)}})},{}],40:[function(e,t,r){"use strict";e("classlist-polyfill"),e("./element-hidden"),e("./number-is-nan"),e("./custom-event"),e("./svg4everybody")},{"./custom-event":38,"./element-hidden":39,"./number-is-nan":41,"./svg4everybody":42,"classlist-polyfill":1}],41:[function(e,t,r){"use strict";Number.isNaN=Number.isNaN||function(e){return"number"==typeof e&&e!=e}},{}],42:[function(e,t,r){"use strict";function f(e,t,r,s){if(r){var a=document.createDocumentFragment(),n=!t.hasAttribute("viewBox")&&r.getAttribute("viewBox");n&&t.setAttribute("viewBox",n);for(var i=document.importNode?document.importNode(r,!0):r.cloneNode(!0),o=document.createElementNS(t.namespaceURI||"http://www.w3.org/2000/svg","g");i.childNodes.length;)o.appendChild(i.firstChild);if(s)for(var c=0;s.attributes.length>c;c++){var l=s.attributes[c];"xlink:href"!==l.name&&"href"!==l.name&&o.setAttribute(l.name,l.value)}a.appendChild(o),e.appendChild(a)}}t.exports=function(e){var c,l=Object(e),e=window.top!==window.self,u=(c="polyfill"in l?l.polyfill:/\bTrident\/[567]\b|\bMSIE (?:9|10)\.0\b/.test(navigator.userAgent)||(navigator.userAgent.match(/\bEdge\/12\.(\d+)\b/)||[])[1]<10547||(navigator.userAgent.match(/\bAppleWebKit\/(\d+)\b/)||[])[1]<537||/\bEdge\/.(\d+)\b/.test(navigator.userAgent)&&e,{}),d=window.requestAnimationFrame||setTimeout,p=document.getElementsByTagName("use"),b=0;c&&function e(){if(!(b&&p.length-b<=0))for(var t=b=0;t<p.length;){var r,s,a=p[t],n=a.parentNode,i=function(e){for(var t=e;"svg"!==t.nodeName.toLowerCase()&&(t=t.parentNode););return t}(n),o=a.getAttribute("xlink:href")||a.getAttribute("href");!o&&l.attributeName&&(o=a.getAttribute(l.attributeName)),i&&o?c&&(!l.validate||l.validate(o,i,a)?(n.removeChild(a),r=(o=o.split("#")).shift(),o=o.join("#"),r.length?((s=u[r])||((s=u[r]=new XMLHttpRequest).open("GET",r),s.send(),s._embeds=[]),s._embeds.push({parent:n,svg:i,id:o}),function(s,a){s.onreadystatechange=function(){var r;4===s.readyState&&((r=s._cachedDocument)||((r=s._cachedDocument=document.implementation.createHTMLDocument("")).body.innerHTML=s.responseText,r.domain!==document.domain&&(r.domain=document.domain),s._cachedTarget={}),s._embeds.splice(0).map(function(e){var t=(t=s._cachedTarget[e.id])||(s._cachedTarget[e.id]=r.getElementById(e.id));f(e.parent,e.svg,t,a)}))},s.onreadystatechange()}(s,a)):f(n,i,document.getElementById(o),a)):(++t,++b)):++t}d(e,67)}()}},{}],43:[function(e,t,r){"use strict";window.uswdsPresent=!0,e("./polyfills");var s=e("./config");const a=e("./index"),n=e("./polyfills/svg4everybody");s.components=a;e=()=>{const t=document.body;Object.keys(a).forEach(e=>{a[e].on(t)}),n()};"loading"===document.readyState?document.addEventListener("DOMContentLoaded",e,{once:!0}):e(),r.default=s,r.initComponents=e},{"./config":35,"./index":37,"./polyfills":40,"./polyfills/svg4everybody":42}],44:[function(e,t,r){"use strict";t.exports=function(){return(0<arguments.length&&void 0!==arguments[0]?arguments[0]:document).activeElement}},{}],45:[function(e,t,r){"use strict";function s(){for(var e=arguments.length,r=new Array(e),t=0;t<e;t++)r[t]=arguments[t];return function(){let t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:document.body;r.forEach(e=>{"function"==typeof this[e]&&this[e].call(this,t)})}}const a=e("object-assign"),n=e("receptor/behavior");t.exports=(e,t)=>n(e,a({on:s("init","add"),off:s("teardown","remove")},t))},{"object-assign":4,"receptor/behavior":5}],46:[function(e,t,r){"use strict";t.exports=function(s){var a=this;let n=1<arguments.length&&void 0!==arguments[1]?arguments[1]:500,i=null;return function(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];window.clearTimeout(i),i=window.setTimeout(()=>{s.apply(a,t)},n)}}},{}],47:[function(e,t,r){"use strict";const a=e("object-assign"),n=e("receptor")["keymap"],i=e("./behavior"),o=e("./select"),c=e("./active-element"),l=e=>{const t=o('a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), iframe, object, embed, [tabindex="0"], [contenteditable]',e),r=t[0],s=t[t.length-1];return{firstTabStop:r,lastTabStop:s,tabAhead:function(e){c()===s&&(e.preventDefault(),r.focus())},tabBack:function(e){c()===r?(e.preventDefault(),s.focus()):t.includes(c())||(e.preventDefault(),r.focus())}}};t.exports=function(e){var t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{};const r=l(e);var{Esc:e,Escape:s}=t,e=(s&&!e&&(t.Esc=s),n(a({Tab:r.tabAhead,"Shift+Tab":r.tabBack},t)));return i({keydown:e},{init(){r.firstTabStop&&r.firstTabStop.focus()},update(e){e?this.on():this.off()}})}},{"./active-element":44,"./behavior":45,"./select":53,"object-assign":4,receptor:10}],48:[function(e,t,r){"use strict";t.exports=function(e){var t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:window,r=2<arguments.length&&void 0!==arguments[2]?arguments[2]:document.documentElement,e=e.getBoundingClientRect();return 0<=e.top&&0<=e.left&&e.bottom<=(t.innerHeight||r.clientHeight)&&e.right<=(t.innerWidth||r.clientWidth)}},{}],49:[function(e,t,r){"use strict";t.exports=function(){return"undefined"!=typeof navigator&&(navigator.userAgent.match(/(iPod|iPhone|iPad)/g)||"MacIntel"===navigator.platform&&1<navigator.maxTouchPoints)&&!window.MSStream}},{}],50:[function(e,t,r){"use strict";t.exports=function(){"use strict";var n={_entity:/[&<>"'/]/g,_entities:{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&apos;","/":"&#x2F;"},getEntity:function(e){return n._entities[e]},escapeHTML:function(e){var t="";for(var r=0;r<e.length;r++){t+=e[r];if(r+1<arguments.length){var s=arguments[r+1]||"";t+=String(s).replace(n._entity,n.getEntity)}}return t},createSafeHTML:function(e){var t=arguments.length;var r=new Array(t>1?t-1:0);for(var s=1;s<t;s++)r[s-1]=arguments[s];var a=n.escapeHTML.apply(n,[e].concat(r));return{__html:a,toString:function(){return"[object WrappedHTMLObject]"},info:"This is a wrapped HTML object. See https://developer.mozilla.or"+"g/en-US/Firefox_OS/Security/Security_Automation for more."}},unwrapSafeHTML:function(){var e=arguments.length;var t=new Array(e);for(var r=0;r<e;r++)t[r]=arguments[r];var s=t.map(function(e){return e.__html});return s.join("")}};return n}()},{}],51:[function(e,t,r){"use strict";t.exports=function(){var e=document.createElement("div"),t=(e.style.visibility="hidden",e.style.overflow="scroll",e.style.msOverflowStyle="scrollbar",document.body.appendChild(e),document.createElement("div")),t=(e.appendChild(t),e.offsetWidth-t.offsetWidth+"px");return e.parentNode.removeChild(e),t}},{}],52:[function(e,t,r){"use strict";const a=e("./select");t.exports=(e,t)=>{var r,s=a(e,t);return"string"==typeof e&&(r=t)&&"object"==typeof r&&1===r.nodeType&&t.matches(e)&&s.push(t),s}},{"./select":53}],53:[function(e,t,r){"use strict";t.exports=(e,t)=>{var r;return"string"!=typeof e?[]:(r=(t=t&&(r=t)&&"object"==typeof r&&1===r.nodeType?t:window.document).querySelectorAll(e),Array.prototype.slice.call(r))}},{}],54:[function(e,t,r){"use strict";t.exports=(e,t)=>{e.setAttribute("autocapitalize","off"),e.setAttribute("autocorrect","off"),e.setAttribute("type",t?"password":"text")}},{}],55:[function(e,t,r){"use strict";const a=e("resolve-id-refs"),n=e("./toggle-field-mask"),i="aria-pressed",o="data-show-text";t.exports=e=>{const t=e.hasAttribute(i)&&"true"!==e.getAttribute(i);a(e.getAttribute("aria-controls")).forEach(e=>n(e,t)),e.hasAttribute(o)||e.setAttribute(o,e.textContent);var r=e.getAttribute(o),s=e.getAttribute("data-hide-text")||r.replace(/\bShow\b/i,e=>`${"S"===e[0]?"H":"h"}ide`);return e.textContent=t?r:s,e.setAttribute(i,t),t}},{"./toggle-field-mask":54,"resolve-id-refs":13}],56:[function(e,t,r){"use strict";const s="aria-expanded";t.exports=(e,t)=>{let r=t;"boolean"!=typeof r&&(r="false"===e.getAttribute(s)),e.setAttribute(s,r);t=e.getAttribute("aria-controls"),e=document.getElementById(t);if(e)return r?e.removeAttribute("hidden"):e.setAttribute("hidden",""),r;throw new Error(`No toggle target found with id: "${t}"`)}},{}],57:[function(e,t,r){"use strict";const c=e("./debounce");e=e("../config").prefix;const l=e+"-checklist__item--checked";t.exports=function(n){var e=n.dataset.validationElement;const i="#"===e.charAt(0)?document.querySelector(e):document.getElementById(e);if(!i)throw new Error(`No validation element found with id: "${e}"`);let o="";Object.entries(n.dataset).forEach(t=>{var[t,r]=t;if(t.startsWith("validate")){var t=t.substr("validate".length).toLowerCase(),r=new RegExp(r),s=`[data-validator="${t}"]`,s=i.querySelector(s);const a=n.parentNode.querySelector("[data-validation-status]");r=r.test(n.value);if(s.classList.toggle(l,r),!s)throw new Error(`No validator checkbox found for: "${t}"`);r=n.dataset.validationComplete||"status complete",t=n.dataset.validationIncomplete||"status incomplete";let e=s.textContent+" ";s.classList.contains(l)?e+=r:e+=t,s.setAttribute("aria-label",e),o+=e+". ",c(()=>{a.textContent=o},1e3)()}})}},{"../config":35,"./debounce":46}]},{},[43]);

;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/
(function (Drupal, drupalSettings) {
  Drupal.behaviors.activeLinks = {
    attach: function attach(context) {
      var path = drupalSettings.path;
      var queryString = JSON.stringify(path.currentQuery);
      var querySelector = path.currentQuery ? "[data-drupal-link-query='".concat(queryString, "']") : ':not([data-drupal-link-query])';
      var originalSelectors = ["[data-drupal-link-system-path=\"".concat(path.currentPath, "\"]")];
      var selectors;
      if (path.isFront) {
        originalSelectors.push('[data-drupal-link-system-path="<front>"]');
      }
      selectors = [].concat(originalSelectors.map(function (selector) {
        return "".concat(selector, ":not([hreflang])");
      }), originalSelectors.map(function (selector) {
        return "".concat(selector, "[hreflang=\"").concat(path.currentLanguage, "\"]");
      }));
      selectors = selectors.map(function (current) {
        return current + querySelector;
      });
      var activeLinks = context.querySelectorAll(selectors.join(','));
      var il = activeLinks.length;
      for (var i = 0; i < il; i++) {
        activeLinks[i].classList.add('is-active');
      }
    },
    detach: function detach(context, settings, trigger) {
      if (trigger === 'unload') {
        var activeLinks = context.querySelectorAll('[data-drupal-link-system-path].is-active');
        var il = activeLinks.length;
        for (var i = 0; i < il; i++) {
          activeLinks[i].classList.remove('is-active');
        }
      }
    }
  };
})(Drupal, drupalSettings);;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/
(function ($, Drupal) {
  Drupal.theme.progressBar = function (id) {
    return "<div id=\"".concat(id, "\" class=\"progress\" aria-live=\"polite\">") + '<div class="progress__label">&nbsp;</div>' + '<div class="progress__track"><div class="progress__bar"></div></div>' + '<div class="progress__percentage"></div>' + '<div class="progress__description">&nbsp;</div>' + '</div>';
  };
  Drupal.ProgressBar = function (id, updateCallback, method, errorCallback) {
    this.id = id;
    this.method = method || 'GET';
    this.updateCallback = updateCallback;
    this.errorCallback = errorCallback;
    this.element = $(Drupal.theme('progressBar', id));
  };
  $.extend(Drupal.ProgressBar.prototype, {
    setProgress: function setProgress(percentage, message, label) {
      if (percentage >= 0 && percentage <= 100) {
        $(this.element).find('div.progress__bar').css('width', "".concat(percentage, "%"));
        $(this.element).find('div.progress__percentage').html("".concat(percentage, "%"));
      }
      $('div.progress__description', this.element).html(message);
      $('div.progress__label', this.element).html(label);
      if (this.updateCallback) {
        this.updateCallback(percentage, message, this);
      }
    },
    startMonitoring: function startMonitoring(uri, delay) {
      this.delay = delay;
      this.uri = uri;
      this.sendPing();
    },
    stopMonitoring: function stopMonitoring() {
      clearTimeout(this.timer);
      this.uri = null;
    },
    sendPing: function sendPing() {
      if (this.timer) {
        clearTimeout(this.timer);
      }
      if (this.uri) {
        var pb = this;
        var uri = this.uri;
        if (uri.indexOf('?') === -1) {
          uri += '?';
        } else {
          uri += '&';
        }
        uri += '_format=json';
        $.ajax({
          type: this.method,
          url: uri,
          data: '',
          dataType: 'json',
          success: function success(progress) {
            if (progress.status === 0) {
              pb.displayError(progress.data);
              return;
            }
            pb.setProgress(progress.percentage, progress.message, progress.label);
            pb.timer = setTimeout(function () {
              pb.sendPing();
            }, pb.delay);
          },
          error: function error(xmlhttp) {
            var e = new Drupal.AjaxError(xmlhttp, pb.uri);
            pb.displayError("<pre>".concat(e.message, "</pre>"));
          }
        });
      }
    },
    displayError: function displayError(string) {
      var error = $('<div class="messages messages--error"></div>').html(string);
      $(this.element).before(error).hide();
      if (this.errorCallback) {
        this.errorCallback(this);
      }
    }
  });
})(jQuery, Drupal);;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/
(function ($, once) {
  var deprecatedMessageSuffix = "is deprecated in Drupal 9.3.0 and will be removed in Drupal 10.0.0. Use the core/once library instead. See https://www.drupal.org/node/3158256";
  var originalJQOnce = $.fn.once;
  var originalJQRemoveOnce = $.fn.removeOnce;
  $.fn.once = function jQueryOnce(id) {
    Drupal.deprecationError({
      message: "jQuery.once() ".concat(deprecatedMessageSuffix)
    });
    return originalJQOnce.apply(this, [id]);
  };
  $.fn.removeOnce = function jQueryRemoveOnce(id) {
    Drupal.deprecationError({
      message: "jQuery.removeOnce() ".concat(deprecatedMessageSuffix)
    });
    return originalJQRemoveOnce.apply(this, [id]);
  };
  var drupalOnce = once;
  function augmentedOnce(id, selector, context) {
    originalJQOnce.apply($(selector, context), [id]);
    return drupalOnce(id, selector, context);
  }
  function remove(id, selector, context) {
    originalJQRemoveOnce.apply($(selector, context), [id]);
    return drupalOnce.remove(id, selector, context);
  }
  window.once = Object.assign(augmentedOnce, drupalOnce, {
    remove: remove
  });
})(jQuery, once);;
loadjs=function(){var h=function(){},c={},u={},f={};function o(e,n){if(e){var r=f[e];if(u[e]=n,r)for(;r.length;)r[0](e,n),r.splice(0,1)}}function l(e,n){e.call&&(e={success:e}),n.length?(e.error||h)(n):(e.success||h)(e)}function d(r,t,s,i){var c,o,e=document,n=s.async,u=(s.numRetries||0)+1,f=s.before||h,l=r.replace(/[\?|#].*$/,""),a=r.replace(/^(css|img)!/,"");i=i||0,/(^css!|\.css$)/.test(l)?((o=e.createElement("link")).rel="stylesheet",o.href=a,(c="hideFocus"in o)&&o.relList&&(c=0,o.rel="preload",o.as="style")):/(^img!|\.(png|gif|jpg|svg|webp)$)/.test(l)?(o=e.createElement("img")).src=a:((o=e.createElement("script")).src=r,o.async=void 0===n||n),!(o.onload=o.onerror=o.onbeforeload=function(e){var n=e.type[0];if(c)try{o.sheet.cssText.length||(n="e")}catch(e){18!=e.code&&(n="e")}if("e"==n){if((i+=1)<u)return d(r,t,s,i)}else if("preload"==o.rel&&"style"==o.as)return o.rel="stylesheet";t(r,n,e.defaultPrevented)})!==f(r,o)&&e.head.appendChild(o)}function r(e,n,r){var t,s;if(n&&n.trim&&(t=n),s=(t?r:n)||{},t){if(t in c)throw"LoadJS";c[t]=!0}function i(n,r){!function(e,t,n){var r,s,i=(e=e.push?e:[e]).length,c=i,o=[];for(r=function(e,n,r){if("e"==n&&o.push(e),"b"==n){if(!r)return;o.push(e)}--i||t(o)},s=0;s<c;s++)d(e[s],r,n)}(e,function(e){l(s,e),n&&l({success:n,error:r},e),o(t,e)},s)}if(s.returnPromise)return new Promise(i);i()}return r.ready=function(e,n){return function(e,r){e=e.push?e:[e];var n,t,s,i=[],c=e.length,o=c;for(n=function(e,n){n.length&&i.push(e),--o||r(i)};c--;)t=e[c],(s=u[t])?n(t,s):(f[t]=f[t]||[]).push(n)}(e,function(e){l(n,e)}),r},r.done=function(e){o(e,[])},r.reset=function(){c={},u={},f={}},r.isDefined=function(e){return e in c},r}();;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
(function ($, window, Drupal, drupalSettings, loadjs, _ref) {
  var isFocusable = _ref.isFocusable,
    tabbable = _ref.tabbable;
  Drupal.behaviors.AJAX = {
    attach: function attach(context, settings) {
      function loadAjaxBehavior(base) {
        var elementSettings = settings.ajax[base];
        if (typeof elementSettings.selector === 'undefined') {
          elementSettings.selector = "#".concat(base);
        }
        once('drupal-ajax', $(elementSettings.selector)).forEach(function (el) {
          elementSettings.element = el;
          elementSettings.base = base;
          Drupal.ajax(elementSettings);
        });
      }
      Object.keys(settings.ajax || {}).forEach(function (base) {
        return loadAjaxBehavior(base);
      });
      Drupal.ajax.bindAjaxLinks(document.body);
      once('ajax', '.use-ajax-submit').forEach(function (el) {
        var elementSettings = {};
        elementSettings.url = $(el.form).attr('action');
        elementSettings.setClick = true;
        elementSettings.event = 'click';
        elementSettings.progress = {
          type: 'throbber'
        };
        elementSettings.base = el.id;
        elementSettings.element = el;
        Drupal.ajax(elementSettings);
      });
    },
    detach: function detach(context, settings, trigger) {
      if (trigger === 'unload') {
        Drupal.ajax.expired().forEach(function (instance) {
          Drupal.ajax.instances[instance.instanceIndex] = null;
        });
      }
    }
  };
  Drupal.AjaxError = function (xmlhttp, uri, customMessage) {
    var statusCode;
    var statusText;
    var responseText;
    if (xmlhttp.status) {
      statusCode = "\n".concat(Drupal.t('An AJAX HTTP error occurred.'), "\n").concat(Drupal.t('HTTP Result Code: !status', {
        '!status': xmlhttp.status
      }));
    } else {
      statusCode = "\n".concat(Drupal.t('An AJAX HTTP request terminated abnormally.'));
    }
    statusCode += "\n".concat(Drupal.t('Debugging information follows.'));
    var pathText = "\n".concat(Drupal.t('Path: !uri', {
      '!uri': uri
    }));
    statusText = '';
    try {
      statusText = "\n".concat(Drupal.t('StatusText: !statusText', {
        '!statusText': xmlhttp.statusText.trim()
      }));
    } catch (e) {}
    responseText = '';
    try {
      responseText = "\n".concat(Drupal.t('ResponseText: !responseText', {
        '!responseText': xmlhttp.responseText.trim()
      }));
    } catch (e) {}
    responseText = responseText.replace(/<("[^"]*"|'[^']*'|[^'">])*>/gi, '');
    responseText = responseText.replace(/[\n]+\s+/g, '\n');
    var readyStateText = xmlhttp.status === 0 ? "\n".concat(Drupal.t('ReadyState: !readyState', {
      '!readyState': xmlhttp.readyState
    })) : '';
    customMessage = customMessage ? "\n".concat(Drupal.t('CustomMessage: !customMessage', {
      '!customMessage': customMessage
    })) : '';
    this.message = statusCode + pathText + statusText + customMessage + responseText + readyStateText;
    this.name = 'AjaxError';
  };
  Drupal.AjaxError.prototype = new Error();
  Drupal.AjaxError.prototype.constructor = Drupal.AjaxError;
  Drupal.ajax = function (settings) {
    if (arguments.length !== 1) {
      throw new Error('Drupal.ajax() function must be called with one configuration object only');
    }
    var base = settings.base || false;
    var element = settings.element || false;
    delete settings.base;
    delete settings.element;
    if (!settings.progress && !element) {
      settings.progress = false;
    }
    var ajax = new Drupal.Ajax(base, element, settings);
    ajax.instanceIndex = Drupal.ajax.instances.length;
    Drupal.ajax.instances.push(ajax);
    return ajax;
  };
  Drupal.ajax.instances = [];
  Drupal.ajax.expired = function () {
    return Drupal.ajax.instances.filter(function (instance) {
      return instance && instance.element !== false && !document.body.contains(instance.element);
    });
  };
  Drupal.ajax.bindAjaxLinks = function (element) {
    once('ajax', '.use-ajax', element).forEach(function (ajaxLink) {
      var $linkElement = $(ajaxLink);
      var elementSettings = {
        progress: {
          type: 'throbber'
        },
        dialogType: $linkElement.data('dialog-type'),
        dialog: $linkElement.data('dialog-options'),
        dialogRenderer: $linkElement.data('dialog-renderer'),
        base: $linkElement.attr('id'),
        element: ajaxLink
      };
      var href = $linkElement.attr('href');
      if (href) {
        elementSettings.url = href;
        elementSettings.event = 'click';
      }
      Drupal.ajax(elementSettings);
    });
  };
  Drupal.Ajax = function (base, element, elementSettings) {
    var defaults = {
      event: element ? 'mousedown' : null,
      keypress: true,
      selector: base ? "#".concat(base) : null,
      effect: 'none',
      speed: 'none',
      method: 'replaceWith',
      progress: {
        type: 'throbber',
        message: Drupal.t('Please wait...')
      },
      submit: {
        js: true
      }
    };
    $.extend(this, defaults, elementSettings);
    this.commands = new Drupal.AjaxCommands();
    this.instanceIndex = false;
    if (this.wrapper) {
      this.wrapper = "#".concat(this.wrapper);
    }
    this.element = element;
    this.element_settings = elementSettings;
    this.elementSettings = elementSettings;
    if (this.element && this.element.form) {
      this.$form = $(this.element.form);
    }
    if (!this.url) {
      var $element = $(this.element);
      if ($element.is('a')) {
        this.url = $element.attr('href');
      } else if (this.element && element.form) {
        this.url = this.$form.attr('action');
      }
    }
    var originalUrl = this.url;
    this.url = this.url.replace(/\/nojs(\/|$|\?|#)/, '/ajax$1');
    if (drupalSettings.ajaxTrustedUrl[originalUrl]) {
      drupalSettings.ajaxTrustedUrl[this.url] = true;
    }
    var ajax = this;
    ajax.options = {
      url: ajax.url,
      data: ajax.submit,
      isInProgress: function isInProgress() {
        return ajax.ajaxing;
      },
      beforeSerialize: function beforeSerialize(elementSettings, options) {
        return ajax.beforeSerialize(elementSettings, options);
      },
      beforeSubmit: function beforeSubmit(formValues, elementSettings, options) {
        ajax.ajaxing = true;
        return ajax.beforeSubmit(formValues, elementSettings, options);
      },
      beforeSend: function beforeSend(xmlhttprequest, options) {
        ajax.ajaxing = true;
        return ajax.beforeSend(xmlhttprequest, options);
      },
      success: function success(response, status, xmlhttprequest) {
        var _this = this;
        if (typeof response === 'string') {
          response = $.parseJSON(response);
        }
        if (response !== null && !drupalSettings.ajaxTrustedUrl[ajax.url]) {
          if (xmlhttprequest.getResponseHeader('X-Drupal-Ajax-Token') !== '1') {
            var customMessage = Drupal.t('The response failed verification so will not be processed.');
            return ajax.error(xmlhttprequest, ajax.url, customMessage);
          }
        }
        return Promise.resolve(ajax.success(response, status)).then(function () {
          ajax.ajaxing = false;
          $(document).trigger('ajaxSuccess', [xmlhttprequest, _this]);
          $(document).trigger('ajaxComplete', [xmlhttprequest, _this]);
          if (--$.active === 0) {
            $(document).trigger('ajaxStop');
          }
        });
      },
      error: function error(xmlhttprequest, status, _error) {
        ajax.ajaxing = false;
      },
      complete: function complete(xmlhttprequest, status) {
        if (status === 'error' || status === 'parsererror') {
          return ajax.error(xmlhttprequest, ajax.url);
        }
      },
      dataType: 'json',
      jsonp: false,
      type: 'POST'
    };
    if (elementSettings.dialog) {
      ajax.options.data.dialogOptions = elementSettings.dialog;
    }
    if (ajax.options.url.indexOf('?') === -1) {
      ajax.options.url += '?';
    } else {
      ajax.options.url += '&';
    }
    var wrapper = "drupal_".concat(elementSettings.dialogType || 'ajax');
    if (elementSettings.dialogRenderer) {
      wrapper += ".".concat(elementSettings.dialogRenderer);
    }
    ajax.options.url += "".concat(Drupal.ajax.WRAPPER_FORMAT, "=").concat(wrapper);
    $(ajax.element).on(elementSettings.event, function (event) {
      if (!drupalSettings.ajaxTrustedUrl[ajax.url] && !Drupal.url.isLocal(ajax.url)) {
        throw new Error(Drupal.t('The callback URL is not local and not trusted: !url', {
          '!url': ajax.url
        }));
      }
      return ajax.eventResponse(this, event);
    });
    if (elementSettings.keypress) {
      $(ajax.element).on('keypress', function (event) {
        return ajax.keypressResponse(this, event);
      });
    }
    if (elementSettings.prevent) {
      $(ajax.element).on(elementSettings.prevent, false);
    }
  };
  Drupal.ajax.WRAPPER_FORMAT = '_wrapper_format';
  Drupal.Ajax.AJAX_REQUEST_PARAMETER = '_drupal_ajax';
  Drupal.Ajax.prototype.execute = function () {
    if (this.ajaxing) {
      return;
    }
    try {
      this.beforeSerialize(this.element, this.options);
      return $.ajax(this.options);
    } catch (e) {
      this.ajaxing = false;
      window.alert("An error occurred while attempting to process ".concat(this.options.url, ": ").concat(e.message));
      return $.Deferred().reject();
    }
  };
  Drupal.Ajax.prototype.keypressResponse = function (element, event) {
    var ajax = this;
    if (event.which === 13 || event.which === 32 && element.type !== 'text' && element.type !== 'textarea' && element.type !== 'tel' && element.type !== 'number') {
      event.preventDefault();
      event.stopPropagation();
      $(element).trigger(ajax.elementSettings.event);
    }
  };
  Drupal.Ajax.prototype.eventResponse = function (element, event) {
    event.preventDefault();
    event.stopPropagation();
    var ajax = this;
    if (ajax.ajaxing) {
      return;
    }
    try {
      if (ajax.$form) {
        if (ajax.setClick) {
          element.form.clk = element;
        }
        ajax.$form.ajaxSubmit(ajax.options);
      } else {
        ajax.beforeSerialize(ajax.element, ajax.options);
        $.ajax(ajax.options);
      }
    } catch (e) {
      ajax.ajaxing = false;
      window.alert("An error occurred while attempting to process ".concat(ajax.options.url, ": ").concat(e.message));
    }
  };
  Drupal.Ajax.prototype.beforeSerialize = function (element, options) {
    if (this.$form && document.body.contains(this.$form.get(0))) {
      var settings = this.settings || drupalSettings;
      Drupal.detachBehaviors(this.$form.get(0), settings, 'serialize');
    }
    options.data[Drupal.Ajax.AJAX_REQUEST_PARAMETER] = 1;
    var pageState = drupalSettings.ajaxPageState;
    options.data['ajax_page_state[theme]'] = pageState.theme;
    options.data['ajax_page_state[theme_token]'] = pageState.theme_token;
    options.data['ajax_page_state[libraries]'] = pageState.libraries;
  };
  Drupal.Ajax.prototype.beforeSubmit = function (formValues, element, options) {};
  Drupal.Ajax.prototype.beforeSend = function (xmlhttprequest, options) {
    if (this.$form) {
      options.extraData = options.extraData || {};
      options.extraData.ajax_iframe_upload = '1';
      var v = $.fieldValue(this.element);
      if (v !== null) {
        options.extraData[this.element.name] = v;
      }
    }
    $(this.element).prop('disabled', true);
    if (!this.progress || !this.progress.type) {
      return;
    }
    var progressIndicatorMethod = "setProgressIndicator".concat(this.progress.type.slice(0, 1).toUpperCase()).concat(this.progress.type.slice(1).toLowerCase());
    if (progressIndicatorMethod in this && typeof this[progressIndicatorMethod] === 'function') {
      this[progressIndicatorMethod].call(this);
    }
  };
  Drupal.theme.ajaxProgressThrobber = function (message) {
    var messageMarkup = typeof message === 'string' ? Drupal.theme('ajaxProgressMessage', message) : '';
    var throbber = '<div class="throbber">&nbsp;</div>';
    return "<div class=\"ajax-progress ajax-progress-throbber\">".concat(throbber).concat(messageMarkup, "</div>");
  };
  Drupal.theme.ajaxProgressIndicatorFullscreen = function () {
    return '<div class="ajax-progress ajax-progress-fullscreen">&nbsp;</div>';
  };
  Drupal.theme.ajaxProgressMessage = function (message) {
    return "<div class=\"message\">".concat(message, "</div>");
  };
  Drupal.theme.ajaxProgressBar = function ($element) {
    return $('<div class="ajax-progress ajax-progress-bar"></div>').append($element);
  };
  Drupal.Ajax.prototype.setProgressIndicatorBar = function () {
    var progressBar = new Drupal.ProgressBar("ajax-progress-".concat(this.element.id), $.noop, this.progress.method, $.noop);
    if (this.progress.message) {
      progressBar.setProgress(-1, this.progress.message);
    }
    if (this.progress.url) {
      progressBar.startMonitoring(this.progress.url, this.progress.interval || 1500);
    }
    this.progress.element = $(Drupal.theme('ajaxProgressBar', progressBar.element));
    this.progress.object = progressBar;
    $(this.element).after(this.progress.element);
  };
  Drupal.Ajax.prototype.setProgressIndicatorThrobber = function () {
    this.progress.element = $(Drupal.theme('ajaxProgressThrobber', this.progress.message));
    $(this.element).after(this.progress.element);
  };
  Drupal.Ajax.prototype.setProgressIndicatorFullscreen = function () {
    this.progress.element = $(Drupal.theme('ajaxProgressIndicatorFullscreen'));
    $('body').append(this.progress.element);
  };
  Drupal.Ajax.prototype.commandExecutionQueue = function (response, status) {
    var _this2 = this;
    var ajaxCommands = this.commands;
    return Object.keys(response || {}).reduce(function (executionQueue, key) {
      return executionQueue.then(function () {
        var command = response[key].command;
        if (command && ajaxCommands[command]) {
          return ajaxCommands[command](_this2, response[key], status);
        }
      });
    }, Promise.resolve());
  };
  Drupal.Ajax.prototype.success = function (response, status) {
    var _this3 = this;
    if (this.progress.element) {
      $(this.progress.element).remove();
    }
    if (this.progress.object) {
      this.progress.object.stopMonitoring();
    }
    $(this.element).prop('disabled', false);
    var elementParents = $(this.element).parents('[data-drupal-selector]').addBack().toArray();
    var focusChanged = Object.keys(response || {}).some(function (key) {
      var _response$key = response[key],
        command = _response$key.command,
        method = _response$key.method;
      return command === 'focusFirst' || command === 'invoke' && method === 'focus';
    });
    return this.commandExecutionQueue(response, status).then(function () {
      if (!focusChanged && _this3.element && !$(_this3.element).data('disable-refocus')) {
        var target = false;
        for (var n = elementParents.length - 1; !target && n >= 0; n--) {
          target = document.querySelector("[data-drupal-selector=\"".concat(elementParents[n].getAttribute('data-drupal-selector'), "\"]"));
        }
        if (target) {
          $(target).trigger('focus');
        }
      }
      if (_this3.$form && document.body.contains(_this3.$form.get(0))) {
        var settings = _this3.settings || drupalSettings;
        Drupal.attachBehaviors(_this3.$form.get(0), settings);
      }
      _this3.settings = null;
    }).catch(function (error) {
      return console.error(Drupal.t('An error occurred during the execution of the Ajax response: !error', {
        '!error': error
      }));
    });
  };
  Drupal.Ajax.prototype.getEffect = function (response) {
    var type = response.effect || this.effect;
    var speed = response.speed || this.speed;
    var effect = {};
    if (type === 'none') {
      effect.showEffect = 'show';
      effect.hideEffect = 'hide';
      effect.showSpeed = '';
    } else if (type === 'fade') {
      effect.showEffect = 'fadeIn';
      effect.hideEffect = 'fadeOut';
      effect.showSpeed = speed;
    } else {
      effect.showEffect = "".concat(type, "Toggle");
      effect.hideEffect = "".concat(type, "Toggle");
      effect.showSpeed = speed;
    }
    return effect;
  };
  Drupal.Ajax.prototype.error = function (xmlhttprequest, uri, customMessage) {
    if (this.progress.element) {
      $(this.progress.element).remove();
    }
    if (this.progress.object) {
      this.progress.object.stopMonitoring();
    }
    $(this.wrapper).show();
    $(this.element).prop('disabled', false);
    if (this.$form && document.body.contains(this.$form.get(0))) {
      var settings = this.settings || drupalSettings;
      Drupal.attachBehaviors(this.$form.get(0), settings);
    }
    throw new Drupal.AjaxError(xmlhttprequest, uri, customMessage);
  };
  Drupal.theme.ajaxWrapperNewContent = function ($newContent, ajax, response) {
    return (response.effect || ajax.effect) !== 'none' && $newContent.filter(function (i) {
      return !($newContent[i].nodeName === '#comment' || $newContent[i].nodeName === '#text' && /^(\s|\n|\r)*$/.test($newContent[i].textContent));
    }).length > 1 ? Drupal.theme('ajaxWrapperMultipleRootElements', $newContent) : $newContent;
  };
  Drupal.theme.ajaxWrapperMultipleRootElements = function ($elements) {
    return $('<div></div>').append($elements);
  };
  Drupal.AjaxCommands = function () {};
  Drupal.AjaxCommands.prototype = {
    insert: function insert(ajax, response) {
      var $wrapper = response.selector ? $(response.selector) : $(ajax.wrapper);
      var method = response.method || ajax.method;
      var effect = ajax.getEffect(response);
      var settings = response.settings || ajax.settings || drupalSettings;
      var $newContent = $($.parseHTML(response.data, document, true));
      $newContent = Drupal.theme('ajaxWrapperNewContent', $newContent, ajax, response);
      switch (method) {
        case 'html':
        case 'replaceWith':
        case 'replaceAll':
        case 'empty':
        case 'remove':
          Drupal.detachBehaviors($wrapper.get(0), settings);
          break;
        default:
          break;
      }
      $wrapper[method]($newContent);
      if (effect.showEffect !== 'show') {
        $newContent.hide();
      }
      var $ajaxNewContent = $newContent.find('.ajax-new-content');
      if ($ajaxNewContent.length) {
        $ajaxNewContent.hide();
        $newContent.show();
        $ajaxNewContent[effect.showEffect](effect.showSpeed);
      } else if (effect.showEffect !== 'show') {
        $newContent[effect.showEffect](effect.showSpeed);
      }
      if ($newContent.parents('html').length) {
        $newContent.each(function (index, element) {
          if (element.nodeType === Node.ELEMENT_NODE) {
            Drupal.attachBehaviors(element, settings);
          }
        });
      }
    },
    remove: function remove(ajax, response, status) {
      var settings = response.settings || ajax.settings || drupalSettings;
      $(response.selector).each(function () {
        Drupal.detachBehaviors(this, settings);
      }).remove();
    },
    changed: function changed(ajax, response, status) {
      var $element = $(response.selector);
      if (!$element.hasClass('ajax-changed')) {
        $element.addClass('ajax-changed');
        if (response.asterisk) {
          $element.find(response.asterisk).append(" <abbr class=\"ajax-changed\" title=\"".concat(Drupal.t('Changed'), "\">*</abbr> "));
        }
      }
    },
    alert: function alert(ajax, response, status) {
      window.alert(response.text);
    },
    announce: function announce(ajax, response) {
      if (response.priority) {
        Drupal.announce(response.text, response.priority);
      } else {
        Drupal.announce(response.text);
      }
    },
    redirect: function redirect(ajax, response, status) {
      window.location = response.url;
    },
    css: function css(ajax, response, status) {
      $(response.selector).css(response.argument);
    },
    settings: function settings(ajax, response, status) {
      var ajaxSettings = drupalSettings.ajax;
      if (ajaxSettings) {
        Drupal.ajax.expired().forEach(function (instance) {
          if (instance.selector) {
            var selector = instance.selector.replace('#', '');
            if (selector in ajaxSettings) {
              delete ajaxSettings[selector];
            }
          }
        });
      }
      if (response.merge) {
        $.extend(true, drupalSettings, response.settings);
      } else {
        ajax.settings = response.settings;
      }
    },
    data: function data(ajax, response, status) {
      $(response.selector).data(response.name, response.value);
    },
    focusFirst: function focusFirst(ajax, response, status) {
      var focusChanged = false;
      var container = document.querySelector(response.selector);
      if (container) {
        var tabbableElements = tabbable(container);
        if (tabbableElements.length) {
          tabbableElements[0].focus();
          focusChanged = true;
        } else if (isFocusable(container)) {
          container.focus();
          focusChanged = true;
        }
      }
      if (ajax.hasOwnProperty('element') && !focusChanged) {
        ajax.element.focus();
      }
    },
    invoke: function invoke(ajax, response, status) {
      var $element = $(response.selector);
      $element[response.method].apply($element, _toConsumableArray(response.args));
    },
    restripe: function restripe(ajax, response, status) {
      $(response.selector).find('> tbody > tr:visible, > tr:visible').removeClass('odd even').filter(':even').addClass('odd').end().filter(':odd').addClass('even');
    },
    update_build_id: function update_build_id(ajax, response, status) {
      document.querySelectorAll("input[name=\"form_build_id\"][value=\"".concat(response.old, "\"]")).forEach(function (item) {
        item.value = response.new;
      });
    },
    add_css: function add_css(ajax, response, status) {
      $('head').prepend(response.data);
    },
    message: function message(ajax, response) {
      var messages = new Drupal.Message(document.querySelector(response.messageWrapperQuerySelector));
      if (response.clearPrevious) {
        messages.clear();
      }
      messages.add(response.message, response.messageOptions);
    },
    add_js: function add_js(ajax, response, status) {
      var parentEl = document.querySelector(response.selector || 'body');
      var settings = ajax.settings || drupalSettings;
      var allUniqueBundleIds = response.data.map(function (script) {
        var uniqueBundleId = script.src + ajax.instanceIndex;
        loadjs(script.src, uniqueBundleId, {
          async: false,
          before: function before(path, scriptEl) {
            Object.keys(script).forEach(function (attributeKey) {
              scriptEl.setAttribute(attributeKey, script[attributeKey]);
            });
            parentEl.appendChild(scriptEl);
            return false;
          }
        });
        return uniqueBundleId;
      });
      return new Promise(function (resolve, reject) {
        loadjs.ready(allUniqueBundleIds, {
          success: function success() {
            Drupal.attachBehaviors(parentEl, settings);
            resolve();
          },
          error: function error(depsNotFound) {
            var message = Drupal.t("The following files could not be loaded: @dependencies", {
              '@dependencies': depsNotFound.join(', ')
            });
            reject(message);
          }
        });
      });
    }
  };
  var stopEvent = function stopEvent(xhr, settings) {
    return xhr.getResponseHeader('X-Drupal-Ajax-Token') === '1' && settings.isInProgress && settings.isInProgress();
  };
  $.extend(true, $.event.special, {
    ajaxSuccess: {
      trigger: function trigger(event, xhr, settings) {
        if (stopEvent(xhr, settings)) {
          return false;
        }
      }
    },
    ajaxComplete: {
      trigger: function trigger(event, xhr, settings) {
        if (stopEvent(xhr, settings)) {
          $.active++;
          return false;
        }
      }
    }
  });
})(jQuery, window, Drupal, drupalSettings, loadjs, window.tabbable);;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/
(function ($, Drupal, drupalSettings, storage) {
  var currentUserID = parseInt(drupalSettings.user.uid, 10);
  var secondsIn30Days = 2592000;
  var thirtyDaysAgo = Math.round(new Date().getTime() / 1000) - secondsIn30Days;
  var embeddedLastReadTimestamps = false;
  if (drupalSettings.history && drupalSettings.history.lastReadTimestamps) {
    embeddedLastReadTimestamps = drupalSettings.history.lastReadTimestamps;
  }
  Drupal.history = {
    fetchTimestamps: function fetchTimestamps(nodeIDs, callback) {
      if (embeddedLastReadTimestamps) {
        callback();
        return;
      }
      $.ajax({
        url: Drupal.url('history/get_node_read_timestamps'),
        type: 'POST',
        data: {
          'node_ids[]': nodeIDs
        },
        dataType: 'json',
        success: function success(results) {
          Object.keys(results || {}).forEach(function (nodeID) {
            storage.setItem("Drupal.history.".concat(currentUserID, ".").concat(nodeID), results[nodeID]);
          });
          callback();
        }
      });
    },
    getLastRead: function getLastRead(nodeID) {
      if (embeddedLastReadTimestamps && embeddedLastReadTimestamps[nodeID]) {
        return parseInt(embeddedLastReadTimestamps[nodeID], 10);
      }
      return parseInt(storage.getItem("Drupal.history.".concat(currentUserID, ".").concat(nodeID)) || 0, 10);
    },
    markAsRead: function markAsRead(nodeID) {
      $.ajax({
        url: Drupal.url("history/".concat(nodeID, "/read")),
        type: 'POST',
        dataType: 'json',
        success: function success(timestamp) {
          if (embeddedLastReadTimestamps && embeddedLastReadTimestamps[nodeID]) {
            return;
          }
          storage.setItem("Drupal.history.".concat(currentUserID, ".").concat(nodeID), timestamp);
        }
      });
    },
    needsServerCheck: function needsServerCheck(nodeID, contentTimestamp) {
      if (contentTimestamp < thirtyDaysAgo) {
        return false;
      }
      if (embeddedLastReadTimestamps && embeddedLastReadTimestamps[nodeID]) {
        return contentTimestamp > parseInt(embeddedLastReadTimestamps[nodeID], 10);
      }
      var minLastReadTimestamp = parseInt(storage.getItem("Drupal.history.".concat(currentUserID, ".").concat(nodeID)) || 0, 10);
      return contentTimestamp > minLastReadTimestamp;
    }
  };
})(jQuery, Drupal, drupalSettings, window.localStorage);;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/
(function (window, Drupal, drupalSettings) {
  window.addEventListener('load', function () {
    if (drupalSettings.history && drupalSettings.history.nodesToMarkAsRead) {
      Object.keys(drupalSettings.history.nodesToMarkAsRead).forEach(Drupal.history.markAsRead);
    }
  });
})(window, Drupal, drupalSettings);;
/*!
 * jQuery Form Plugin
 * version: 4.3.0
 * Requires jQuery v1.7.2 or later
 * Project repository: https://github.com/jquery-form/form

 * Copyright 2017 Kevin Morris
 * Copyright 2006 M. Alsup

 * Dual licensed under the LGPL-2.1+ or MIT licenses
 * https://github.com/jquery-form/form#license

 * This library is free software; you can redistribute it and/or
 * modify it under the terms of the GNU Lesser General Public
 * License as published by the Free Software Foundation; either
 * version 2.1 of the License, or (at your option) any later version.
 * This library is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the GNU
 * Lesser General Public License for more details.
 */
!function(r){"function"==typeof define&&define.amd?define(["jquery"],r):"object"==typeof module&&module.exports?module.exports=function(e,t){return void 0===t&&(t="undefined"!=typeof window?require("jquery"):require("jquery")(e)),r(t),t}:r(jQuery)}(function(q){"use strict";var m=/\r?\n/g,S={};S.fileapi=void 0!==q('<input type="file">').get(0).files,S.formdata=void 0!==window.FormData;var _=!!q.fn.prop;function o(e){var t=e.data;e.isDefaultPrevented()||(e.preventDefault(),q(e.target).closest("form").ajaxSubmit(t))}function i(e){var t=e.target,r=q(t);if(!r.is("[type=submit],[type=image]")){var a=r.closest("[type=submit]");if(0===a.length)return;t=a[0]}var n,o=t.form;"image"===(o.clk=t).type&&(void 0!==e.offsetX?(o.clk_x=e.offsetX,o.clk_y=e.offsetY):"function"==typeof q.fn.offset?(n=r.offset(),o.clk_x=e.pageX-n.left,o.clk_y=e.pageY-n.top):(o.clk_x=e.pageX-t.offsetLeft,o.clk_y=e.pageY-t.offsetTop)),setTimeout(function(){o.clk=o.clk_x=o.clk_y=null},100)}function N(){var e;q.fn.ajaxSubmit.debug&&(e="[jquery.form] "+Array.prototype.join.call(arguments,""),window.console&&window.console.log?window.console.log(e):window.opera&&window.opera.postError&&window.opera.postError(e))}q.fn.attr2=function(){if(!_)return this.attr.apply(this,arguments);var e=this.prop.apply(this,arguments);return e&&e.jquery||"string"==typeof e?e:this.attr.apply(this,arguments)},q.fn.ajaxSubmit=function(M,e,t,r){if(!this.length)return N("ajaxSubmit: skipping submit process - no element selected"),this;var O,a,n,o,X=this;"function"==typeof M?M={success:M}:"string"==typeof M||!1===M&&0<arguments.length?(M={url:M,data:e,dataType:t},"function"==typeof r&&(M.success=r)):void 0===M&&(M={}),O=M.method||M.type||this.attr2("method"),n=(n=(n="string"==typeof(a=M.url||this.attr2("action"))?q.trim(a):"")||window.location.href||"")&&(n.match(/^([^#]+)/)||[])[1],o=/(MSIE|Trident)/.test(navigator.userAgent||"")&&/^https/i.test(window.location.href||"")?"javascript:false":"about:blank",M=q.extend(!0,{url:n,success:q.ajaxSettings.success,type:O||q.ajaxSettings.type,iframeSrc:o},M);var i={};if(this.trigger("form-pre-serialize",[this,M,i]),i.veto)return N("ajaxSubmit: submit vetoed via form-pre-serialize trigger"),this;if(M.beforeSerialize&&!1===M.beforeSerialize(this,M))return N("ajaxSubmit: submit aborted via beforeSerialize callback"),this;var s=M.traditional;void 0===s&&(s=q.ajaxSettings.traditional);var u,c,C=[],l=this.formToArray(M.semantic,C,M.filtering);if(M.data&&(c=q.isFunction(M.data)?M.data(l):M.data,M.extraData=c,u=q.param(c,s)),M.beforeSubmit&&!1===M.beforeSubmit(l,this,M))return N("ajaxSubmit: submit aborted via beforeSubmit callback"),this;if(this.trigger("form-submit-validate",[l,this,M,i]),i.veto)return N("ajaxSubmit: submit vetoed via form-submit-validate trigger"),this;var f=q.param(l,s);u&&(f=f?f+"&"+u:u),"GET"===M.type.toUpperCase()?(M.url+=(0<=M.url.indexOf("?")?"&":"?")+f,M.data=null):M.data=f;var d,m,p,h=[];M.resetForm&&h.push(function(){X.resetForm()}),M.clearForm&&h.push(function(){X.clearForm(M.includeHidden)}),!M.dataType&&M.target?(d=M.success||function(){},h.push(function(e,t,r){var a=arguments,n=M.replaceTarget?"replaceWith":"html";q(M.target)[n](e).each(function(){d.apply(this,a)})})):M.success&&(q.isArray(M.success)?q.merge(h,M.success):h.push(M.success)),M.success=function(e,t,r){for(var a=M.context||this,n=0,o=h.length;n<o;n++)h[n].apply(a,[e,t,r||X,X])},M.error&&(m=M.error,M.error=function(e,t,r){var a=M.context||this;m.apply(a,[e,t,r,X])}),M.complete&&(p=M.complete,M.complete=function(e,t){var r=M.context||this;p.apply(r,[e,t,X])});var v=0<q("input[type=file]:enabled",this).filter(function(){return""!==q(this).val()}).length,g="multipart/form-data",x=X.attr("enctype")===g||X.attr("encoding")===g,y=S.fileapi&&S.formdata;N("fileAPI :"+y);var b,T=(v||x)&&!y;!1!==M.iframe&&(M.iframe||T)?M.closeKeepAlive?q.get(M.closeKeepAlive,function(){b=w(l)}):b=w(l):b=(v||x)&&y?function(e){for(var r=new FormData,t=0;t<e.length;t++)r.append(e[t].name,e[t].value);if(M.extraData){var a=function(e){var t,r,a=q.param(e,M.traditional).split("&"),n=a.length,o=[];for(t=0;t<n;t++)a[t]=a[t].replace(/\+/g," "),r=a[t].split("="),o.push([decodeURIComponent(r[0]),decodeURIComponent(r[1])]);return o}(M.extraData);for(t=0;t<a.length;t++)a[t]&&r.append(a[t][0],a[t][1])}M.data=null;var n=q.extend(!0,{},q.ajaxSettings,M,{contentType:!1,processData:!1,cache:!1,type:O||"POST"});M.uploadProgress&&(n.xhr=function(){var e=q.ajaxSettings.xhr();return e.upload&&e.upload.addEventListener("progress",function(e){var t=0,r=e.loaded||e.position,a=e.total;e.lengthComputable&&(t=Math.ceil(r/a*100)),M.uploadProgress(e,r,a,t)},!1),e});n.data=null;var o=n.beforeSend;return n.beforeSend=function(e,t){M.formData?t.data=M.formData:t.data=r,o&&o.call(this,e,t)},q.ajax(n)}(l):q.ajax(M),X.removeData("jqxhr").data("jqxhr",b);for(var j=0;j<C.length;j++)C[j]=null;return this.trigger("form-submit-notify",[this,M]),this;function w(e){var t,r,l,f,o,d,m,p,a,n,h,v,i=X[0],g=q.Deferred();if(g.abort=function(e){p.abort(e)},e)for(r=0;r<C.length;r++)t=q(C[r]),_?t.prop("disabled",!1):t.removeAttr("disabled");(l=q.extend(!0,{},q.ajaxSettings,M)).context=l.context||l,o="jqFormIO"+(new Date).getTime();var s=i.ownerDocument,u=X.closest("body");if(l.iframeTarget?(n=(d=q(l.iframeTarget,s)).attr2("name"))?o=n:d.attr2("name",o):(d=q('<iframe name="'+o+'" src="'+l.iframeSrc+'" />',s)).css({position:"absolute",top:"-1000px",left:"-1000px"}),m=d[0],p={aborted:0,responseText:null,responseXML:null,status:0,statusText:"n/a",getAllResponseHeaders:function(){},getResponseHeader:function(){},setRequestHeader:function(){},abort:function(e){var t="timeout"===e?"timeout":"aborted";N("aborting upload... "+t),this.aborted=1;try{m.contentWindow.document.execCommand&&m.contentWindow.document.execCommand("Stop")}catch(e){}d.attr("src",l.iframeSrc),p.error=t,l.error&&l.error.call(l.context,p,t,e),f&&q.event.trigger("ajaxError",[p,l,t]),l.complete&&l.complete.call(l.context,p,t)}},(f=l.global)&&0==q.active++&&q.event.trigger("ajaxStart"),f&&q.event.trigger("ajaxSend",[p,l]),l.beforeSend&&!1===l.beforeSend.call(l.context,p,l))return l.global&&q.active--,g.reject(),g;if(p.aborted)return g.reject(),g;(a=i.clk)&&(n=a.name)&&!a.disabled&&(l.extraData=l.extraData||{},l.extraData[n]=a.value,"image"===a.type&&(l.extraData[n+".x"]=i.clk_x,l.extraData[n+".y"]=i.clk_y));var x=1,y=2;function b(t){var r=null;try{t.contentWindow&&(r=t.contentWindow.document)}catch(e){N("cannot get iframe.contentWindow document: "+e)}if(r)return r;try{r=t.contentDocument?t.contentDocument:t.document}catch(e){N("cannot get iframe.contentDocument: "+e),r=t.document}return r}var c=q("meta[name=csrf-token]").attr("content"),T=q("meta[name=csrf-param]").attr("content");function j(){var e=X.attr2("target"),t=X.attr2("action"),r=X.attr("enctype")||X.attr("encoding")||"multipart/form-data";i.setAttribute("target",o),O&&!/post/i.test(O)||i.setAttribute("method","POST"),t!==l.url&&i.setAttribute("action",l.url),l.skipEncodingOverride||O&&!/post/i.test(O)||X.attr({encoding:"multipart/form-data",enctype:"multipart/form-data"}),l.timeout&&(v=setTimeout(function(){h=!0,A(x)},l.timeout));var a=[];try{if(l.extraData)for(var n in l.extraData)l.extraData.hasOwnProperty(n)&&(q.isPlainObject(l.extraData[n])&&l.extraData[n].hasOwnProperty("name")&&l.extraData[n].hasOwnProperty("value")?a.push(q('<input type="hidden" name="'+l.extraData[n].name+'">',s).val(l.extraData[n].value).appendTo(i)[0]):a.push(q('<input type="hidden" name="'+n+'">',s).val(l.extraData[n]).appendTo(i)[0]));l.iframeTarget||d.appendTo(u),m.attachEvent?m.attachEvent("onload",A):m.addEventListener("load",A,!1),setTimeout(function e(){try{var t=b(m).readyState;N("state = "+t),t&&"uninitialized"===t.toLowerCase()&&setTimeout(e,50)}catch(e){N("Server abort: ",e," (",e.name,")"),A(y),v&&clearTimeout(v),v=void 0}},15);try{i.submit()}catch(e){document.createElement("form").submit.apply(i)}}finally{i.setAttribute("action",t),i.setAttribute("enctype",r),e?i.setAttribute("target",e):X.removeAttr("target"),q(a).remove()}}T&&c&&(l.extraData=l.extraData||{},l.extraData[T]=c),l.forceSync?j():setTimeout(j,10);var w,S,k,D=50;function A(e){if(!p.aborted&&!k){if((S=b(m))||(N("cannot access response document"),e=y),e===x&&p)return p.abort("timeout"),void g.reject(p,"timeout");if(e===y&&p)return p.abort("server abort"),void g.reject(p,"error","server abort");if(S&&S.location.href!==l.iframeSrc||h){m.detachEvent?m.detachEvent("onload",A):m.removeEventListener("load",A,!1);var t,r="success";try{if(h)throw"timeout";var a="xml"===l.dataType||S.XMLDocument||q.isXMLDoc(S);if(N("isXml="+a),!a&&window.opera&&(null===S.body||!S.body.innerHTML)&&--D)return N("requeing onLoad callback, DOM not available"),void setTimeout(A,250);var n=S.body?S.body:S.documentElement;p.responseText=n?n.innerHTML:null,p.responseXML=S.XMLDocument?S.XMLDocument:S,a&&(l.dataType="xml"),p.getResponseHeader=function(e){return{"content-type":l.dataType}[e.toLowerCase()]},n&&(p.status=Number(n.getAttribute("status"))||p.status,p.statusText=n.getAttribute("statusText")||p.statusText);var o,i,s,u=(l.dataType||"").toLowerCase(),c=/(json|script|text)/.test(u);c||l.textarea?(o=S.getElementsByTagName("textarea")[0])?(p.responseText=o.value,p.status=Number(o.getAttribute("status"))||p.status,p.statusText=o.getAttribute("statusText")||p.statusText):c&&(i=S.getElementsByTagName("pre")[0],s=S.getElementsByTagName("body")[0],i?p.responseText=i.textContent?i.textContent:i.innerText:s&&(p.responseText=s.textContent?s.textContent:s.innerText)):"xml"===u&&!p.responseXML&&p.responseText&&(p.responseXML=F(p.responseText));try{w=E(p,u,l)}catch(e){r="parsererror",p.error=t=e||r}}catch(e){N("error caught: ",e),r="error",p.error=t=e||r}p.aborted&&(N("upload aborted"),r=null),p.status&&(r=200<=p.status&&p.status<300||304===p.status?"success":"error"),"success"===r?(l.success&&l.success.call(l.context,w,"success",p),g.resolve(p.responseText,"success",p),f&&q.event.trigger("ajaxSuccess",[p,l])):r&&(void 0===t&&(t=p.statusText),l.error&&l.error.call(l.context,p,r,t),g.reject(p,"error",t),f&&q.event.trigger("ajaxError",[p,l,t])),f&&q.event.trigger("ajaxComplete",[p,l]),f&&!--q.active&&q.event.trigger("ajaxStop"),l.complete&&l.complete.call(l.context,p,r),k=!0,l.timeout&&clearTimeout(v),setTimeout(function(){l.iframeTarget?d.attr("src",l.iframeSrc):d.remove(),p.responseXML=null},100)}}}var F=q.parseXML||function(e,t){return window.ActiveXObject?((t=new ActiveXObject("Microsoft.XMLDOM")).async="false",t.loadXML(e)):t=(new DOMParser).parseFromString(e,"text/xml"),t&&t.documentElement&&"parsererror"!==t.documentElement.nodeName?t:null},L=q.parseJSON||function(e){return window.eval("("+e+")")},E=function(e,t,r){var a=e.getResponseHeader("content-type")||"",n=("xml"===t||!t)&&0<=a.indexOf("xml"),o=n?e.responseXML:e.responseText;return n&&"parsererror"===o.documentElement.nodeName&&q.error&&q.error("parsererror"),r&&r.dataFilter&&(o=r.dataFilter(o,t)),"string"==typeof o&&(("json"===t||!t)&&0<=a.indexOf("json")?o=L(o):("script"===t||!t)&&0<=a.indexOf("javascript")&&q.globalEval(o)),o};return g}},q.fn.ajaxForm=function(e,t,r,a){if(("string"==typeof e||!1===e&&0<arguments.length)&&(e={url:e,data:t,dataType:r},"function"==typeof a&&(e.success=a)),(e=e||{}).delegation=e.delegation&&q.isFunction(q.fn.on),e.delegation||0!==this.length)return e.delegation?(q(document).off("submit.form-plugin",this.selector,o).off("click.form-plugin",this.selector,i).on("submit.form-plugin",this.selector,e,o).on("click.form-plugin",this.selector,e,i),this):(e.beforeFormUnbind&&e.beforeFormUnbind(this,e),this.ajaxFormUnbind().on("submit.form-plugin",e,o).on("click.form-plugin",e,i));var n={s:this.selector,c:this.context};return!q.isReady&&n.s?(N("DOM not ready, queuing ajaxForm"),q(function(){q(n.s,n.c).ajaxForm(e)})):N("terminating; zero elements found by selector"+(q.isReady?"":" (DOM not ready)")),this},q.fn.ajaxFormUnbind=function(){return this.off("submit.form-plugin click.form-plugin")},q.fn.formToArray=function(e,t,r){var a=[];if(0===this.length)return a;var n,o,i,s,u,c,l,f,d,m,p=this[0],h=this.attr("id"),v=(v=e||void 0===p.elements?p.getElementsByTagName("*"):p.elements)&&q.makeArray(v);if(h&&(e||/(Edge|Trident)\//.test(navigator.userAgent))&&(n=q(':input[form="'+h+'"]').get()).length&&(v=(v||[]).concat(n)),!v||!v.length)return a;for(q.isFunction(r)&&(v=q.map(v,r)),o=0,c=v.length;o<c;o++)if((m=(u=v[o]).name)&&!u.disabled)if(e&&p.clk&&"image"===u.type)p.clk===u&&(a.push({name:m,value:q(u).val(),type:u.type}),a.push({name:m+".x",value:p.clk_x},{name:m+".y",value:p.clk_y}));else if((s=q.fieldValue(u,!0))&&s.constructor===Array)for(t&&t.push(u),i=0,l=s.length;i<l;i++)a.push({name:m,value:s[i]});else if(S.fileapi&&"file"===u.type){t&&t.push(u);var g=u.files;if(g.length)for(i=0;i<g.length;i++)a.push({name:m,value:g[i],type:u.type});else a.push({name:m,value:"",type:u.type})}else null!=s&&(t&&t.push(u),a.push({name:m,value:s,type:u.type,required:u.required}));return e||!p.clk||(m=(d=(f=q(p.clk))[0]).name)&&!d.disabled&&"image"===d.type&&(a.push({name:m,value:f.val()}),a.push({name:m+".x",value:p.clk_x},{name:m+".y",value:p.clk_y})),a},q.fn.formSerialize=function(e){return q.param(this.formToArray(e))},q.fn.fieldSerialize=function(n){var o=[];return this.each(function(){var e=this.name;if(e){var t=q.fieldValue(this,n);if(t&&t.constructor===Array)for(var r=0,a=t.length;r<a;r++)o.push({name:e,value:t[r]});else null!=t&&o.push({name:this.name,value:t})}}),q.param(o)},q.fn.fieldValue=function(e){for(var t=[],r=0,a=this.length;r<a;r++){var n=this[r],o=q.fieldValue(n,e);null==o||o.constructor===Array&&!o.length||(o.constructor===Array?q.merge(t,o):t.push(o))}return t},q.fieldValue=function(e,t){var r=e.name,a=e.type,n=e.tagName.toLowerCase();if(void 0===t&&(t=!0),t&&(!r||e.disabled||"reset"===a||"button"===a||("checkbox"===a||"radio"===a)&&!e.checked||("submit"===a||"image"===a)&&e.form&&e.form.clk!==e||"select"===n&&-1===e.selectedIndex))return null;if("select"!==n)return q(e).val().replace(m,"\r\n");var o=e.selectedIndex;if(o<0)return null;for(var i=[],s=e.options,u="select-one"===a,c=u?o+1:s.length,l=u?o:0;l<c;l++){var f=s[l];if(f.selected&&!f.disabled){var d=(d=f.value)||(f.attributes&&f.attributes.value&&!f.attributes.value.specified?f.text:f.value);if(u)return d;i.push(d)}}return i},q.fn.clearForm=function(e){return this.each(function(){q("input,select,textarea",this).clearFields(e)})},q.fn.clearFields=q.fn.clearInputs=function(r){var a=/^(?:color|date|datetime|email|month|number|password|range|search|tel|text|time|url|week)$/i;return this.each(function(){var e=this.type,t=this.tagName.toLowerCase();a.test(e)||"textarea"===t?this.value="":"checkbox"===e||"radio"===e?this.checked=!1:"select"===t?this.selectedIndex=-1:"file"===e?/MSIE/.test(navigator.userAgent)?q(this).replaceWith(q(this).clone(!0)):q(this).val(""):r&&(!0===r&&/hidden/.test(e)||"string"==typeof r&&q(this).is(r))&&(this.value="")})},q.fn.resetForm=function(){return this.each(function(){var t=q(this),e=this.tagName.toLowerCase();switch(e){case"input":this.checked=this.defaultChecked;case"textarea":return this.value=this.defaultValue,!0;case"option":case"optgroup":var r=t.parents("select");return r.length&&r[0].multiple?"option"===e?this.selected=this.defaultSelected:t.find("option").resetForm():r.resetForm(),!0;case"select":return t.find("option").each(function(e){if(this.selected=this.defaultSelected,this.defaultSelected&&!t[0].multiple)return t[0].selectedIndex=e,!1}),!0;case"label":var a=q(t.attr("for")),n=t.find("input,select,textarea");return a[0]&&n.unshift(a[0]),n.resetForm(),!0;case"form":return"function"!=typeof this.reset&&("object"!=typeof this.reset||this.reset.nodeType)||this.reset(),!0;default:return t.find("form,input,label,select,textarea").resetForm(),!0}})},q.fn.enable=function(e){return void 0===e&&(e=!0),this.each(function(){this.disabled=!e})},q.fn.selected=function(r){return void 0===r&&(r=!0),this.each(function(){var e,t=this.type;"checkbox"===t||"radio"===t?this.checked=r:"option"===this.tagName.toLowerCase()&&(e=q(this).parent("select"),r&&e[0]&&"select-one"===e[0].type&&e.find("option").selected(!1),this.selected=r)})},q.fn.ajaxSubmit.debug=!1});

;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/
(function ($, Drupal, drupalSettings) {
  Drupal.Views = {};
  Drupal.Views.parseQueryString = function (query) {
    var args = {};
    var pos = query.indexOf('?');
    if (pos !== -1) {
      query = query.substring(pos + 1);
    }
    var pair;
    var pairs = query.split('&');
    for (var i = 0; i < pairs.length; i++) {
      pair = pairs[i].split('=');
      if (pair[0] !== 'q' && pair[1]) {
        args[decodeURIComponent(pair[0].replace(/\+/g, ' '))] = decodeURIComponent(pair[1].replace(/\+/g, ' '));
      }
    }
    return args;
  };
  Drupal.Views.parseViewArgs = function (href, viewPath) {
    var returnObj = {};
    var path = Drupal.Views.getPath(href);
    var viewHref = Drupal.url(viewPath).substring(drupalSettings.path.baseUrl.length);
    if (viewHref && path.substring(0, viewHref.length + 1) === "".concat(viewHref, "/")) {
      returnObj.view_args = decodeURIComponent(path.substring(viewHref.length + 1, path.length));
      returnObj.view_path = path;
    }
    return returnObj;
  };
  Drupal.Views.pathPortion = function (href) {
    var protocol = window.location.protocol;
    if (href.substring(0, protocol.length) === protocol) {
      href = href.substring(href.indexOf('/', protocol.length + 2));
    }
    return href;
  };
  Drupal.Views.getPath = function (href) {
    href = Drupal.Views.pathPortion(href);
    href = href.substring(drupalSettings.path.baseUrl.length, href.length);
    if (href.substring(0, 3) === '?q=') {
      href = href.substring(3, href.length);
    }
    var chars = ['#', '?', '&'];
    for (var i = 0; i < chars.length; i++) {
      if (href.indexOf(chars[i]) > -1) {
        href = href.substr(0, href.indexOf(chars[i]));
      }
    }
    return href;
  };
})(jQuery, Drupal, drupalSettings);;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/
(function ($, Drupal, drupalSettings) {
  Drupal.behaviors.ViewsAjaxView = {};
  Drupal.behaviors.ViewsAjaxView.attach = function (context, settings) {
    if (settings && settings.views && settings.views.ajaxViews) {
      var ajaxViews = settings.views.ajaxViews;
      Object.keys(ajaxViews || {}).forEach(function (i) {
        Drupal.views.instances[i] = new Drupal.views.ajaxView(ajaxViews[i]);
      });
    }
  };
  Drupal.behaviors.ViewsAjaxView.detach = function (context, settings, trigger) {
    if (trigger === 'unload') {
      if (settings && settings.views && settings.views.ajaxViews) {
        var ajaxViews = settings.views.ajaxViews;
        Object.keys(ajaxViews || {}).forEach(function (i) {
          var selector = ".js-view-dom-id-".concat(ajaxViews[i].view_dom_id);
          if ($(selector, context).length) {
            delete Drupal.views.instances[i];
            delete settings.views.ajaxViews[i];
          }
        });
      }
    }
  };
  Drupal.views = {};
  Drupal.views.instances = {};
  Drupal.views.ajaxView = function (settings) {
    var selector = ".js-view-dom-id-".concat(settings.view_dom_id);
    this.$view = $(selector);
    var ajaxPath = drupalSettings.views.ajax_path;
    if (ajaxPath.constructor.toString().indexOf('Array') !== -1) {
      ajaxPath = ajaxPath[0];
    }
    var queryString = window.location.search || '';
    if (queryString !== '') {
      queryString = queryString.slice(1).replace(/q=[^&]+&?|&?render=[^&]+/, '');
      if (queryString !== '') {
        queryString = (/\?/.test(ajaxPath) ? '&' : '?') + queryString;
      }
    }
    this.element_settings = {
      url: ajaxPath + queryString,
      submit: settings,
      setClick: true,
      event: 'click',
      selector: selector,
      progress: {
        type: 'fullscreen'
      }
    };
    this.settings = settings;
    this.$exposed_form = $("form#views-exposed-form-".concat(settings.view_name.replace(/_/g, '-'), "-").concat(settings.view_display_id.replace(/_/g, '-')));
    once('exposed-form', this.$exposed_form).forEach($.proxy(this.attachExposedFormAjax, this));
    once('ajax-pager', this.$view.filter($.proxy(this.filterNestedViews, this))).forEach($.proxy(this.attachPagerAjax, this));
    var selfSettings = $.extend({}, this.element_settings, {
      event: 'RefreshView',
      base: this.selector,
      element: this.$view.get(0)
    });
    this.refreshViewAjax = Drupal.ajax(selfSettings);
  };
  Drupal.views.ajaxView.prototype.attachExposedFormAjax = function () {
    var that = this;
    this.exposedFormAjax = [];
    $('input[type=submit], button[type=submit], input[type=image]', this.$exposed_form).not('[data-drupal-selector=edit-reset]').each(function (index) {
      var selfSettings = $.extend({}, that.element_settings, {
        base: $(this).attr('id'),
        element: this
      });
      that.exposedFormAjax[index] = Drupal.ajax(selfSettings);
    });
  };
  Drupal.views.ajaxView.prototype.filterNestedViews = function () {
    return !this.$view.parents('.view').length;
  };
  Drupal.views.ajaxView.prototype.attachPagerAjax = function () {
    this.$view.find('ul.js-pager__items > li > a, th.views-field a, .attachment .views-summary a').each($.proxy(this.attachPagerLinkAjax, this));
  };
  Drupal.views.ajaxView.prototype.attachPagerLinkAjax = function (id, link) {
    var $link = $(link);
    var viewData = {};
    var href = $link.attr('href');
    $.extend(viewData, this.settings, Drupal.Views.parseQueryString(href), Drupal.Views.parseViewArgs(href, this.settings.view_base_path));
    var selfSettings = $.extend({}, this.element_settings, {
      submit: viewData,
      base: false,
      element: link
    });
    this.pagerAjax = Drupal.ajax(selfSettings);
  };
  Drupal.AjaxCommands.prototype.viewsScrollTop = function (ajax, response) {
    var offset = $(response.selector).offset();
    var scrollTarget = response.selector;
    while ($(scrollTarget).scrollTop() === 0 && $(scrollTarget).parent()) {
      scrollTarget = $(scrollTarget).parent();
    }
    if (offset.top - 10 < $(scrollTarget).scrollTop()) {
      $(scrollTarget).animate({
        scrollTop: offset.top - 10
      }, 500);
    }
  };
})(jQuery, Drupal, drupalSettings);;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/
(function (Drupal, drupalSettings) {
  function mapTextContentToAjaxResponse(content) {
    if (content === '') {
      return false;
    }
    try {
      return JSON.parse(content);
    } catch (e) {
      return false;
    }
  }
  function bigPipeProcessPlaceholderReplacement(placeholderReplacement) {
    var placeholderId = placeholderReplacement.getAttribute('data-big-pipe-replacement-for-placeholder-with-id');
    var content = placeholderReplacement.textContent.trim();
    if (typeof drupalSettings.bigPipePlaceholderIds[placeholderId] !== 'undefined') {
      var response = mapTextContentToAjaxResponse(content);
      if (response === false) {
        once.remove('big-pipe', placeholderReplacement);
      } else {
        var ajaxObject = Drupal.ajax({
          url: '',
          base: false,
          element: false,
          progress: false
        });
        ajaxObject.success(response, 'success');
      }
    }
  }
  var interval = drupalSettings.bigPipeInterval || 50;
  var timeoutID;
  function bigPipeProcessDocument(context) {
    if (!context.querySelector('script[data-big-pipe-event="start"]')) {
      return false;
    }
    once('big-pipe-early-behaviors', 'body', context).forEach(function (el) {
      Drupal.attachBehaviors(el);
    });
    once('big-pipe', 'script[data-big-pipe-replacement-for-placeholder-with-id]', context).forEach(bigPipeProcessPlaceholderReplacement);
    if (context.querySelector('script[data-big-pipe-event="stop"]')) {
      if (timeoutID) {
        clearTimeout(timeoutID);
      }
      return true;
    }
    return false;
  }
  function bigPipeProcess() {
    timeoutID = setTimeout(function () {
      if (!bigPipeProcessDocument(document)) {
        bigPipeProcess();
      }
    }, interval);
  }
  bigPipeProcess();
  window.addEventListener('load', function () {
    if (timeoutID) {
      clearTimeout(timeoutID);
    }
    bigPipeProcessDocument(document);
  });
})(Drupal, drupalSettings);;
