(this.webpackJsonptest1=this.webpackJsonptest1||[]).push([[70],{188:function(t,e,n){"use strict";n.r(e),n.d(e,"ion_segment",(function(){return c})),n.d(e,"ion_segment_button",(function(){return d}));var o=n(2),i=n(36),r=n(12),a=n(23),s=n(220),c=function(){function t(t){var e=this;Object(i.k)(this,t),this.didInit=!1,this.activated=!1,this.disabled=!1,this.scrollable=!1,this.onClick=function(t){var n=t.target,o=e.checked;e.value=n.value,o&&e.scrollable&&e.checkButton(o,n),e.checked=n},this.ionChange=Object(i.e)(this,"ionChange",7),this.ionSelect=Object(i.e)(this,"ionSelect",7),this.ionStyle=Object(i.e)(this,"ionStyle",7)}return t.prototype.valueChanged=function(t,e){this.ionSelect.emit({value:t}),(""!==e||this.didInit)&&(this.activated?this.valueAfterGesture=t:this.ionChange.emit({value:t}))},t.prototype.disabledChanged=function(){this.gestureChanged();for(var t=0,e=this.getButtons();t<e.length;t++){e[t].disabled=this.disabled}},t.prototype.gestureChanged=function(){this.gesture&&!this.scrollable&&this.gesture.enable(!this.disabled)},t.prototype.connectedCallback=function(){this.emitStyle()},t.prototype.componentWillLoad=function(){this.emitStyle()},t.prototype.componentDidLoad=function(){return Object(o.a)(this,void 0,void 0,(function(){var t,e=this;return Object(o.c)(this,(function(o){switch(o.label){case 0:return this.setCheckedClasses(),t=this,[4,Promise.resolve().then(n.bind(null,45))];case 1:return t.gesture=o.sent().createGesture({el:this.el,gestureName:"segment",gesturePriority:100,threshold:0,passive:!1,onStart:function(t){return e.onStart(t)},onMove:function(t){return e.onMove(t)},onEnd:function(t){return e.onEnd(t)}}),this.gesture.enable(!this.scrollable),this.gestureChanged(),this.disabled&&this.disabledChanged(),this.didInit=!0,[2]}}))}))},t.prototype.onStart=function(t){this.activate(t)},t.prototype.onMove=function(t){this.setNextIndex(t)},t.prototype.onEnd=function(t){this.setActivated(!1);var e=this.setNextIndex(t,!0);t.event.stopImmediatePropagation(),e&&this.addRipple(t);var n=this.valueAfterGesture;void 0!==n&&(this.ionChange.emit({value:n}),this.valueAfterGesture=void 0)},t.prototype.getButtons=function(){return Array.from(this.el.querySelectorAll("ion-segment-button"))},t.prototype.addRipple=function(t){var e=this;if(r.b.getBoolean("animated",!0)&&r.b.getBoolean("rippleEffect",!0)){var n=this.getButtons().find((function(t){return t.value===e.value})),o=(n.shadowRoot||n).querySelector("ion-ripple-effect");if(o){var i=Object(a.j)(t.event),s=i.x,c=i.y;o.addRipple(s,c).then((function(t){return t()}))}}},t.prototype.setActivated=function(t){this.getButtons().forEach((function(e){t?e.classList.add("segment-button-activated"):e.classList.remove("segment-button-activated")})),this.activated=t},t.prototype.activate=function(t){var e=this,n=t.event.target,o=this.getButtons().find((function(t){return t.value===e.value}));"ION-SEGMENT-BUTTON"===n.tagName&&(o||(this.value=n.value),this.value===n.value&&this.setActivated(!0))},t.prototype.getIndicator=function(t){return(t.shadowRoot||t).querySelector(".segment-button-indicator")},t.prototype.checkButton=function(t,e){var n=this.getIndicator(t),o=this.getIndicator(e);if(null!==n&&null!==o){var r=n.getBoundingClientRect(),a=o.getBoundingClientRect(),s=r.width/a.width,c="translate3d("+(r.left-a.left)+"px, 0, 0) scaleX("+s+")";Object(i.l)((function(){o.classList.remove("segment-button-indicator-animated"),o.style.setProperty("transform",c),o.getBoundingClientRect(),o.classList.add("segment-button-indicator-animated"),o.style.setProperty("transform","")})),this.value=e.value,this.setCheckedClasses()}},t.prototype.setCheckedClasses=function(){var t=this,e=this.getButtons(),n=e.findIndex((function(e){return e.value===t.value}))+1;this.checked=e.find((function(e){return e.value===t.value}));for(var o=0,i=e;o<i.length;o++){i[o].classList.remove("segment-button-after-checked")}n<e.length&&e[n].classList.add("segment-button-after-checked")},t.prototype.setNextIndex=function(t,e){var n=this;void 0===e&&(e=!1);var o,i,r="rtl"===document.dir,a=this.activated,s=this.getButtons(),c=s.findIndex((function(t){return t.value===n.value})),l=s[c];if(-1!==c){var d=l.getBoundingClientRect(),u=d.left,b=d.width,g=t.currentX,h=d.top+d.height/2,m=document.elementFromPoint(g,h);if(a&&!e){if(r?g>u+b:g<u)(f=c-1)>=0&&(i=f);else if(r?g<u:g>u+b){var f;if(a&&!e)(f=c+1)<s.length&&(i=f)}void 0===i||s[i].disabled||(o=s[i])}if(!a&&e&&(o=m),null!=o){if("ION-SEGMENT"===o.tagName)return!1;l!==o&&this.checkButton(l,o)}return!0}},t.prototype.emitStyle=function(){this.ionStyle.emit({segment:!0})},t.prototype.render=function(){var t,e=Object(i.d)(this);return Object(i.i)(i.a,{onClick:this.onClick,class:Object.assign(Object.assign({},Object(s.a)(this.color)),(t={},t[e]=!0,t["in-toolbar"]=Object(s.c)("ion-toolbar",this.el),t["in-toolbar-color"]=Object(s.c)("ion-toolbar[color]",this.el),t["segment-activated"]=this.activated,t["segment-disabled"]=this.disabled,t["segment-scrollable"]=this.scrollable,t))},Object(i.i)("slot",null))},Object.defineProperty(t.prototype,"el",{get:function(){return Object(i.f)(this)},enumerable:!0,configurable:!0}),Object.defineProperty(t,"watchers",{get:function(){return{value:["valueChanged"],disabled:["disabledChanged"]}},enumerable:!0,configurable:!0}),Object.defineProperty(t,"style",{get:function(){return":host{--ripple-color:currentColor;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;display:-ms-flexbox;display:flex;position:relative;-ms-flex-align:stretch;align-items:stretch;-ms-flex-pack:center;justify-content:center;width:100%;background:var(--background);font-family:var(--ion-font-family,inherit);text-align:center;contain:paint}:host(.segment-scrollable){-ms-flex-pack:start;justify-content:start;width:auto;overflow-x:scroll}:host(.segment-scrollable::-webkit-scrollbar){display:none}:host{--background:transparent}:host(.segment-scrollable) ::slotted(ion-segment-button){min-width:90px}"},enumerable:!0,configurable:!0}),t}(),l=0,d=function(){function t(t){var e=this;Object(i.k)(this,t),this.segmentEl=null,this.checked=!1,this.disabled=!1,this.layout="icon-top",this.type="button",this.value="ion-sb-"+l++,this.updateState=function(){e.segmentEl&&(e.checked=e.segmentEl.value===e.value)}}return t.prototype.connectedCallback=function(){var t=this.segmentEl=this.el.closest("ion-segment");t&&(this.updateState(),t.addEventListener("ionSelect",this.updateState))},t.prototype.disconnectedCallback=function(){var t=this.segmentEl;t&&(t.removeEventListener("ionSelect",this.updateState),this.segmentEl=null)},Object.defineProperty(t.prototype,"hasLabel",{get:function(){return!!this.el.querySelector("ion-label")},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"hasIcon",{get:function(){return!!this.el.querySelector("ion-icon")},enumerable:!0,configurable:!0}),t.prototype.render=function(){var t,e=this,n=e.checked,o=e.type,r=e.disabled,a=e.hasIcon,c=e.hasLabel,l=e.layout,d=Object(i.d)(this);return Object(i.i)(i.a,{"aria-disabled":r?"true":null,class:(t={},t[d]=!0,t["in-toolbar"]=Object(s.c)("ion-toolbar",this.el),t["in-toolbar-color"]=Object(s.c)("ion-toolbar[color]",this.el),t["in-segment"]=Object(s.c)("ion-segment",this.el),t["in-segment-color"]=Object(s.c)("ion-segment[color]",this.el),t["segment-button-has-label"]=c,t["segment-button-has-icon"]=a,t["segment-button-has-label-only"]=c&&!a,t["segment-button-has-icon-only"]=a&&!c,t["segment-button-disabled"]=r,t["segment-button-checked"]=n,t["segment-button-layout-"+l]=!0,t["ion-activatable"]=!0,t["ion-activatable-instant"]=!0,t["ion-focusable"]=!0,t)},Object(i.i)("button",{type:o,"aria-pressed":n?"true":null,class:"button-native",disabled:r},Object(i.i)("span",{class:"button-inner"},Object(i.i)("slot",null)),"md"===d&&Object(i.i)("ion-ripple-effect",null)),Object(i.i)("div",{part:"indicator",class:{"segment-button-indicator":!0,"segment-button-indicator-animated":!0}},Object(i.i)("div",{part:"indicator-background",class:"segment-button-indicator-background"})))},Object.defineProperty(t.prototype,"el",{get:function(){return Object(i.f)(this)},enumerable:!0,configurable:!0}),Object.defineProperty(t,"style",{get:function(){return':host{--color:initial;--color-hover:var(--color);--color-checked:var(--color);--color-disabled:var(--color);--padding-start:0;--padding-end:0;border-radius:var(--border-radius);-ms-flex:1 1 auto;flex:1 1 auto;-ms-flex-direction:column;flex-direction:column;background:var(--background);color:var(--color);text-decoration:none;text-overflow:ellipsis;white-space:nowrap;-webkit-font-kerning:none;font-kerning:none;cursor:pointer}.button-native,:host{display:-ms-flexbox;display:flex;position:relative;height:auto}.button-native{border-radius:0;font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-decoration:inherit;text-indent:inherit;text-overflow:inherit;text-transform:inherit;text-align:inherit;white-space:inherit;color:inherit;margin-left:var(--margin-start);margin-right:var(--margin-end);margin-top:var(--margin-top);margin-bottom:var(--margin-bottom);padding-left:var(--padding-start);padding-right:var(--padding-end);padding-top:var(--padding-top);padding-bottom:var(--padding-bottom);-webkit-transform:translateZ(0);transform:translateZ(0);-ms-flex-direction:inherit;flex-direction:inherit;-ms-flex-positive:1;flex-grow:1;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:100%;min-width:inherit;max-width:inherit;min-height:inherit;max-height:inherit;-webkit-transition:var(--transition);transition:var(--transition);border:none;outline:none;background:transparent;contain:content;pointer-events:none;overflow:hidden;z-index:2}@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.button-native{margin-left:unset;margin-right:unset;-webkit-margin-start:var(--margin-start);margin-inline-start:var(--margin-start);-webkit-margin-end:var(--margin-end);margin-inline-end:var(--margin-end);padding-left:unset;padding-right:unset;-webkit-padding-start:var(--padding-start);padding-inline-start:var(--padding-start);-webkit-padding-end:var(--padding-end);padding-inline-end:var(--padding-end)}}.button-native:after{left:0;right:0;top:0;bottom:0;position:absolute;content:"";opacity:0}.button-inner{display:-ms-flexbox;display:flex;position:relative;-ms-flex-flow:inherit;flex-flow:inherit;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:100%;height:100%;z-index:1}:host(.segment-button-checked){background:var(--background-checked);color:var(--color-checked)}:host(.segment-button-disabled){cursor:default;pointer-events:none}:host(.ion-focused) .button-native{color:var(--color-focused)}:host(.ion-focused) .button-native:after{background:var(--background-focused);opacity:var(--background-focused-opacity)}@media (any-hover:hover){:host(:hover) .button-native{color:var(--color-hover)}:host(:hover) .button-native:after{background:var(--background-hover);opacity:var(--background-hover-opacity)}:host(.segment-button-checked:hover) .button-native{color:var(--color-checked)}}::slotted(ion-icon){-ms-flex-negative:0;flex-shrink:0;-ms-flex-order:-1;order:-1;pointer-events:none}::slotted(ion-label){display:block;-ms-flex-item-align:center;align-self:center;line-height:22px;text-overflow:ellipsis;white-space:nowrap;-webkit-box-sizing:border-box;box-sizing:border-box;pointer-events:none}:host(.segment-button-layout-icon-top) .button-native{-ms-flex-direction:column;flex-direction:column}:host(.segment-button-layout-icon-start) .button-native{-ms-flex-direction:row;flex-direction:row}:host(.segment-button-layout-icon-end) .button-native{-ms-flex-direction:row-reverse;flex-direction:row-reverse}:host(.segment-button-layout-icon-bottom) .button-native{-ms-flex-direction:column-reverse;flex-direction:column-reverse}:host(.segment-button-layout-icon-hide) ::slotted(ion-icon),:host(.segment-button-layout-label-hide) ::slotted(ion-label){display:none}ion-ripple-effect{color:var(--ripple-color,var(--color-checked))}.segment-button-indicator{-webkit-transform-origin:left;transform-origin:left;position:absolute;opacity:0;-webkit-box-sizing:border-box;box-sizing:border-box;will-change:transform,opacity;pointer-events:none}.segment-button-indicator-background{width:100%;height:var(--indicator-height);-webkit-transform:var(--indicator-transform);transform:var(--indicator-transform);-webkit-box-shadow:var(--indicator-box-shadow);box-shadow:var(--indicator-box-shadow);pointer-events:none}.segment-button-indicator-animated{-webkit-transition:var(--indicator-transition);transition:var(--indicator-transition)}:host(.segment-button-checked) .segment-button-indicator{opacity:1}@media (prefers-reduced-motion:reduce){.segment-button-indicator-background{-webkit-transform:none;transform:none}.segment-button-indicator-animated{-webkit-transition:none;transition:none}}:host{--background:none;--background-checked:none;--background-hover:var(--color-checked);--background-focused:var(--color-checked);--background-activated-opacity:0;--background-focused-opacity:.12;--background-hover-opacity:.04;--color:rgba(var(--ion-text-color-rgb,0,0,0),0.6);--color-checked:var(--ion-color-primary,#3880ff);--indicator-box-shadow:none;--indicator-color:var(--color-checked);--indicator-height:2px;--indicator-transition:transform 250ms cubic-bezier(0.4,0,0.2,1);--indicator-transform:none;--padding-top:0;--padding-end:16px;--padding-bottom:0;--padding-start:16px;--transition:color 0.15s linear 0s,opacity 0.15s linear 0s;min-width:90px;max-width:360px;min-height:48px;border-width:var(--border-width);border-style:var(--border-style);border-color:var(--border-color);font-size:14px;font-weight:500;letter-spacing:.06em;line-height:40px;text-transform:uppercase}:host(.segment-button-disabled){opacity:.3}:host(.in-segment-color){background:none;color:rgba(var(--ion-text-color-rgb,0,0,0),.6)}:host(.in-segment-color) ion-ripple-effect{color:var(--ion-color-base)}:host(.in-segment-color) .segment-button-indicator-background{background:var(--ion-color-base)}:host(.in-segment-color.segment-button-checked) .button-native{color:var(--ion-color-base)}:host(.in-segment-color.ion-focused) .button-native:after{background:var(--ion-color-base)}@media (any-hover:hover){:host(.in-segment-color:hover) .button-native{color:rgba(var(--ion-text-color-rgb,0,0,0),.6)}:host(.in-segment-color:hover) .button-native:after{background:var(--ion-color-base)}:host(.in-segment-color.segment-button-checked:hover) .button-native{color:var(--ion-color-base)}}:host(.in-toolbar:not(.in-segment-color)){--background:var(--ion-toolbar-segment-background,none);--background-checked:var(--ion-toolbar-segment-background-checked,none);--color:var(--ion-toolbar-segment-color,rgba(var(--ion-text-color-rgb,0,0,0),0.6));--color-checked:var(--ion-toolbar-segment-color-checked,var(--ion-color-primary,#3880ff));--indicator-color:var(--ion-toolbar-segment-color-checked,var(--color-checked))}:host(.in-toolbar-color:not(.in-segment-color)) .button-native{color:rgba(var(--ion-color-contrast-rgb),.6)}:host(.in-toolbar-color.segment-button-checked:not(.in-segment-color)) .button-native{color:var(--ion-color-contrast)}@media (any-hover:hover){:host(.in-toolbar-color:not(.in-segment-color)) .button-native:after{background:var(--ion-color-contrast)}}::slotted(ion-icon){font-size:24px}::slotted(ion-icon),::slotted(ion-label){margin-top:12px;margin-bottom:12px}:host(.segment-button-layout-icon-bottom) ::slotted(ion-icon),:host(.segment-button-layout-icon-top) ::slotted(ion-label){margin-top:0}:host(.segment-button-layout-icon-bottom) ::slotted(ion-label),:host(.segment-button-layout-icon-top) ::slotted(ion-icon){margin-bottom:0}:host(.segment-button-layout-icon-start) ::slotted(ion-label){margin-left:8px;margin-right:0}@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){:host(.segment-button-layout-icon-start) ::slotted(ion-label){margin-left:unset;margin-right:unset;-webkit-margin-start:8px;margin-inline-start:8px;-webkit-margin-end:0;margin-inline-end:0}}:host(.segment-button-layout-icon-end) ::slotted(ion-label){margin-left:0;margin-right:8px}@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){:host(.segment-button-layout-icon-end) ::slotted(ion-label){margin-left:unset;margin-right:unset;-webkit-margin-start:0;margin-inline-start:0;-webkit-margin-end:8px;margin-inline-end:8px}}:host(.segment-button-has-icon-only) ::slotted(ion-icon),:host(.segment-button-has-label-only) ::slotted(ion-label){margin-top:12px;margin-bottom:12px}.segment-button-indicator{left:0;right:0;bottom:0}.segment-button-indicator-background{background:var(--indicator-color)}:host(.in-toolbar:not(.in-segment-color)) .segment-button-indicator-background{background:var(--ion-toolbar-segment-indicator-color,var(--indicator-color))}:host(.in-toolbar-color:not(.in-segment-color)) .segment-button-indicator-background{background:var(--ion-color-contrast)}'},enumerable:!0,configurable:!0}),t}()},220:function(t,e,n){"use strict";n.d(e,"a",(function(){return r})),n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return i})),n.d(e,"d",(function(){return c}));var o=n(2),i=function(t,e){return null!==e.closest(t)},r=function(t){var e;return"string"===typeof t&&t.length>0?((e={"ion-color":!0})["ion-color-"+t]=!0,e):void 0},a=function(t){var e={};return function(t){return void 0!==t?(Array.isArray(t)?t:t.split(" ")).filter((function(t){return null!=t})).map((function(t){return t.trim()})).filter((function(t){return""!==t})):[]}(t).forEach((function(t){return e[t]=!0})),e},s=/^[a-z][a-z0-9+\-.]*:/,c=function(t,e,n){return Object(o.a)(void 0,void 0,void 0,(function(){var i;return Object(o.c)(this,(function(o){return null!=t&&"#"!==t[0]&&!s.test(t)&&(i=document.querySelector("ion-router"))?(null!=e&&e.preventDefault(),[2,i.push(t,n)]):[2,!1]}))}))}}}]);
//# sourceMappingURL=70.c37ceb71.chunk.js.map