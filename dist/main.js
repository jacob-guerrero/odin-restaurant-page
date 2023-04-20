(()=>{"use strict";var e={426:(e,t,n)=>{n.d(t,{Z:()=>d});var o=n(81),a=n.n(o),c=n(645),r=n.n(c)()(a());r.push([e.id,"/*  */\nhtml {\n    -webkit-box-sizing: border-box;\n    -moz-box-sizing: border-box;\n    box-sizing: border-box;\n}\n*, *:before, *:after {\n    -webkit-box-sizing: inherit;\n    -moz-box-sizing: inherit;\n    box-sizing: inherit;\n}\n:root {\n    --main-color: #fffcf2;\n    --side-color: #252422;\n    --contrast-color: #eb5e28;\n    --gray-light: #ccc5b9;\n    --gray-dark: #403d39;\n    --blue-light: #00afb9;\n    --blue-dark: #0081a7;\n}\nhtml, body {\n    margin: 0;\n    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\n    width: 100%;\n    height: 100%;\n}\nh1, h2, h3, p {\n    margin: 0;\n}\n\nbody {\n    display: flex;\n    flex-direction: column;\n    padding: 2rem 3rem 2rem 3rem;\n    background-color: var(--main-color);\n}\n\nheader {\n    width: 100%;\n    display: flex;\n    justify-content: center;\n}\n\n#nav-bar {\n    width: 100%;\n    text-align: center;\n}\n#nav-bar ul {\n    display: grid;\n    grid-template-columns: 100px 100px 100px;\n    grid-template-rows: 50px;\n    justify-content: center;\n    gap: 2rem;\n}\n.tab {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    font-size: 1.4rem;\n    font-weight: bold;\n    border-radius: 5px  5px 0% 0%;\n    background-color: var(--gray-light);\n}\nul {\n    list-style-type: none;\n    margin: 0;\n    padding: 0;\n}\nli {\n    display: inline-block;\n}\n\nimg {\n    width: 60%;\n    height: auto;\n    border-radius: 4%;\n}\n\n#content {\n    padding: 1.2rem;\n    border: 1px solid black;\n}",""]);const d=r},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",o=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),o&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),o&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,o,a,c){"string"==typeof e&&(e=[[null,e,void 0]]);var r={};if(o)for(var d=0;d<this.length;d++){var i=this[d][0];null!=i&&(r[i]=!0)}for(var l=0;l<e.length;l++){var p=[].concat(e[l]);o&&r[p[0]]||(void 0!==c&&(void 0===p[5]||(p[1]="@layer".concat(p[5].length>0?" ".concat(p[5]):""," {").concat(p[1],"}")),p[5]=c),n&&(p[2]?(p[1]="@media ".concat(p[2]," {").concat(p[1],"}"),p[2]=n):p[2]=n),a&&(p[4]?(p[1]="@supports (".concat(p[4],") {").concat(p[1],"}"),p[4]=a):p[4]="".concat(a)),t.push(p))}},t}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var t=[];function n(e){for(var n=-1,o=0;o<t.length;o++)if(t[o].identifier===e){n=o;break}return n}function o(e,o){for(var c={},r=[],d=0;d<e.length;d++){var i=e[d],l=o.base?i[0]+o.base:i[0],p=c[l]||0,s="".concat(l," ").concat(p);c[l]=p+1;var h=n(s),m={css:i[1],media:i[2],sourceMap:i[3],supports:i[4],layer:i[5]};if(-1!==h)t[h].references++,t[h].updater(m);else{var u=a(m,o);o.byIndex=d,t.splice(d,0,{identifier:s,updater:u,references:1})}r.push(s)}return r}function a(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,a){var c=o(e=e||[],a=a||{});return function(e){e=e||[];for(var r=0;r<c.length;r++){var d=n(c[r]);t[d].references--}for(var i=o(e,a),l=0;l<c.length;l++){var p=n(c[l]);0===t[p].references&&(t[p].updater(),t.splice(p,1))}c=i}}},569:e=>{var t={};e.exports=function(e,n){var o=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(n)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var o="";n.supports&&(o+="@supports (".concat(n.supports,") {")),n.media&&(o+="@media ".concat(n.media," {"));var a=void 0!==n.layer;a&&(o+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),o+=n.css,a&&(o+="}"),n.media&&(o+="}"),n.supports&&(o+="}");var c=n.sourceMap;c&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(c))))," */")),t.styleTagTransform(o,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}},t={};function n(o){var a=t[o];if(void 0!==a)return a.exports;var c=t[o]={id:o,exports:{}};return e[o](c,c.exports,n),c.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e;n.g.importScripts&&(e=n.g.location+"");var t=n.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var o=t.getElementsByTagName("script");o.length&&(e=o[o.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),n.p=e})(),n.nc=void 0,(()=>{const e=n.p+"84fde27f9d30c2ddbc7e.jpg",t=()=>{console.log("Hi, everyone!!");const t=document.querySelector("#content"),n=document.createElement("img");n.src=e;const o=document.createElement("h1");o.textContent="Decadence by Cocoa";const a=document.createElement("p");a.textContent="Indulge in the ultimate chocolate experience at Decadence by Cocoa. Our carefully crafted menu showcases the best of the chocolate world, while our refined and elegant ambiance creates an unforgettable atmosphere.",t.appendChild(o),t.appendChild(n),t.appendChild(a)};var o=n(379),a=n.n(o),c=n(795),r=n.n(c),d=n(569),i=n.n(d),l=n(565),p=n.n(l),s=n(216),h=n.n(s),m=n(589),u=n.n(m),f=n(426),C={};C.styleTagTransform=u(),C.setAttributes=p(),C.insert=i().bind(null,"head"),C.domAPI=r(),C.insertStyleElement=h(),a()(f.Z,C),f.Z&&f.Z.locals&&f.Z.locals;const v=document.querySelectorAll(".tab"),b=document.querySelector("#content"),x=()=>{b.replaceChildren()};t(),v.forEach((e=>{e.addEventListener("click",(()=>{switch(e.id){case"home":default:x(),t();break;case"menu":x(),(()=>{const e=document.createElement("h1");e.textContent="Menu";const t=document.createElement("div"),n=document.createElement("div"),o=document.createElement("div"),a=document.createElement("h2");a.textContent="Appetizer";const c=document.createElement("h3");c.textContent="Chocolate-Stuffed Strawberries";const r=document.createElement("p");r.textContent="Fresh strawberries filled with creamy chocolate ganache, served with a dollop of whipped cream and a sprinkle of cocoa powder.";const d=document.createElement("div"),i=document.createElement("h3");i.textContent="Chocolate and Cheese Board";const l=document.createElement("p");l.textContent="A selection of artisanal cheeses paired with rich chocolate, fresh fruit, and toasted nuts.";const p=document.createElement("div"),s=document.createElement("h3");s.textContent="Cocoa-Dusted Popcorn";const h=document.createElement("p");h.textContent="Sweet and salty popcorn coated in rich, velvety cocoa powder.",n.appendChild(a),o.appendChild(c),o.appendChild(r),n.appendChild(o),d.appendChild(i),d.appendChild(l),n.appendChild(d),p.appendChild(s),p.appendChild(h),n.appendChild(p);const m=document.createElement("div"),u=document.createElement("div"),f=document.createElement("h2");f.textContent="Entree";const C=document.createElement("h3");C.textContent="Cocoa-Rubbed Steak";const v=document.createElement("p");v.textContent="A juicy steak seasoned with a blend of cocoa powder, smoked paprika, and spices, served with a side of roasted sweet potatoes and sautéed kale.";const b=document.createElement("div"),x=document.createElement("h3");x.textContent="Chocolate-Crusted Salmon";const g=document.createElement("p");g.textContent="A fillet of fresh salmon coated in a crunchy chocolate crust, served with a side of roasted vegetables and a drizzle of balsamic reduction.";const E=document.createElement("div"),y=document.createElement("h3");y.textContent="Mushroom and Truffle Risotto";const w=document.createElement("p");w.textContent="Creamy risotto with earthy mushrooms, shaved truffles, and a touch of dark chocolate, finished with Parmesan cheese and fresh herbs.",m.appendChild(f),u.appendChild(C),u.appendChild(v),m.appendChild(u),b.appendChild(x),b.appendChild(g),m.appendChild(b),E.appendChild(y),E.appendChild(w),m.appendChild(E);const k=document.createElement("div"),S=document.createElement("div"),A=document.createElement("h2");A.textContent="Dessert";const z=document.createElement("h3");z.textContent="Chocolate Molten Cake";const T=document.createElement("p");T.textContent="A warm, gooey chocolate cake with a molten center, served with a scoop of vanilla ice cream and fresh berries.";const M=document.createElement("div"),j=document.createElement("h3");j.textContent="Dark Chocolate Fondue";const I=document.createElement("p");I.textContent="A pot of rich, melted dark chocolate for dipping fresh fruit, marshmallows, and pound cake.";const P=document.createElement("div"),q=document.createElement("h3");q.textContent="Chocolate Chip Cookie Dough Cheesecake";const D=document.createElement("p");D.textContent="A decadent cheesecake filled with chunks of chocolate chip cookie dough and topped with a chocolate drizzle.",k.appendChild(A),S.appendChild(z),S.appendChild(T),k.appendChild(S),M.appendChild(j),M.appendChild(I),k.appendChild(M),P.appendChild(q),P.appendChild(D),k.appendChild(P);const N=document.createElement("div"),F=document.createElement("div"),O=document.createElement("h2");O.textContent="Beverage";const Z=document.createElement("h3");Z.textContent="Hot Chocolate";const H=document.createElement("p");H.textContent="A classic blend of rich, velvety chocolate and steamed milk, topped with whipped cream and chocolate shavings.";const L=document.createElement("div"),R=document.createElement("h3");R.textContent="Chocolate Martini";const U=document.createElement("p");U.textContent="A creamy, indulgent blend of chocolate liqueur, vodka, and cream, garnished with a chocolate-dipped strawberry.";const B=document.createElement("div"),$=document.createElement("h3");$.textContent="Chocolate Milkshake";const _=document.createElement("p");_.textContent="A thick, creamy milkshake made with real chocolate ice cream and topped with whipped cream and chocolate syrup.",N.appendChild(O),F.appendChild(Z),F.appendChild(H),N.appendChild(F),L.appendChild(R),L.appendChild(U),N.appendChild(L),B.appendChild($),B.appendChild(_),N.appendChild(B),t.appendChild(n),t.appendChild(m),t.appendChild(k),t.appendChild(N);const G=document.querySelector("#content");G.appendChild(e),G.appendChild(t)})();break;case"contact":x(),(()=>{const e=document.createElement("h1");e.textContent="Contact Us";const t=document.createElement("div"),n=document.createElement("div"),o=document.createElement("h2");o.textContent="Address";const a=document.createElement("p");a.textContent="1445 West Norwood Avenue, Itasca, Illinois.",n.appendChild(o),n.appendChild(a);const c=document.createElement("div"),r=document.createElement("h2");r.textContent="Phone";const d=document.createElement("p");d.textContent="555-444-5555",c.appendChild(r),c.appendChild(d);const i=document.createElement("div"),l=document.createElement("h2");l.textContent="Email";const p=document.createElement("p");p.textContent="chocoCrush@sweet.com",i.appendChild(l),i.appendChild(p),t.appendChild(n),t.appendChild(c),t.appendChild(i);const s=document.querySelector("#content");s.appendChild(e),s.appendChild(t)})()}}))}))})()})();