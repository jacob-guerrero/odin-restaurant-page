(()=>{"use strict";var e={426:(e,t,n)=>{n.d(t,{Z:()=>x});var o=n(81),a=n.n(o),c=n(645),r=n.n(c),d=n(667),i=n.n(d),s=new URL(n(363),n.b),l=new URL(n(375),n.b),p=new URL(n(870),n.b),m=new URL(n(701),n.b),u=r()(a()),h=i()(s),f=i()(l),C=i()(p),b=i()(m);u.push([e.id,"/*  */\nhtml {\n    -webkit-box-sizing: border-box;\n    -moz-box-sizing: border-box;\n    box-sizing: border-box;\n}\n*, *:before, *:after {\n    -webkit-box-sizing: inherit;\n    -moz-box-sizing: inherit;\n    box-sizing: inherit;\n}\n:root {\n    --main-color: #9c6644;\n    --side-color: #7f5539;\n    --side-color-dark: #402b1d;\n    --complementary-color: #b08968;\n    --complementary-color2: #ddb892;\n    --contrast-color: #e6ccb2;\n    --contrast-color2: #ede0d4;\n    --gray-light: #ccc5b9;\n    --gray-dark: #403d39;\n}\n@font-face {\n    font-family: 'Dance Font';\n    src: url("+h+");\n    font-weight: normal;\n    font-style: normal;\n  }\nhtml, body {\n    margin: 0;\n    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\n    width: 100%;\n    height: 100%;\n}\nh1, h2, h3, p {\n    margin: 0;\n}\n\nbody {\n    display: flex;\n    flex-direction: column;\n    padding: 2rem 3rem 2rem 3rem;\n    background: linear-gradient(rgba(255,255,255,.5), rgba(255,255,255,.5)), url("+f+") repeat, var(--main-color);\n    background-size: 100% 50%;\n}\n\nheader {\n    width: 100%;\n    display: flex;\n    justify-content: center;\n}\n\n#nav-bar {\n    width: 100%;\n    text-align: center;\n}\n#nav-bar ul {\n    display: grid;\n    grid-template-columns: 100px 100px 100px;\n    grid-template-rows: 50px;\n    justify-content: center;\n    gap: 2rem;\n}\n.tab {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    font-size: 1.4rem;\n    font-weight: bold;\n    color: var(--contrast-color);\n    border-radius: 5px  5px 0% 0%;\n    background-color: var(--main-color);\n    background: linear-gradient(rgba(0,0,0,.5), rgba(0,0,0,.5)), url("+C+"), var(--main-color) ;\n    background-size: cover;\n}\nul {\n    list-style-type: none;\n    margin: 0;\n    padding: 0;\n}\nli {\n    display: inline-block;\n}\n\n#content {\n    display: grid;\n    grid-template-columns: 1fr;\n    gap: 2rem;\n    padding: 1.2rem;\n    border: 1px solid black;\n    border-radius: 5px;\n    background-color: var(--gray-light);\n    background: linear-gradient(rgba(255,255,255,.1), rgba(255,255,255,.1)), url("+b+") center, var(--main-color);\n    background-size: cover;\n}\n\n\n.main-div {\n    text-align: center;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    gap: 1rem;\n}\n.main-title {\n    font-family: 'Dance Font','Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\n    font-size: 2.5rem;\n    color: var(--contrast-color);\n    border-bottom: 5px double var(--contrast-color);\n    padding: 0.2rem 0.5rem;\n}\nimg {\n    width: 60%;\n    height: auto;\n    border-radius: 5%;\n\n    --s: 8px; /* control the size */\n    padding: var(--s);\n    border: calc(2*var(--s)) solid #0000;\n    /* outline: 2px solid #000; */\n    outline-offset: calc(-1*var(--s));\n    background: conic-gradient(from 90deg at 2px 2px,#0000 25%,var(--main-color) 0);\n}\n\n.description {\n    text-align: center;\n    font-style: italic;\n    font-weight: bold;\n    color:var(--contrast-color2);\n}\n.description::after, .description::before {\n    content: '\"';\n}\n\n.box {\n    padding: 1rem 0.5rem;\n    border-radius: 4px;\n    background-color: var(--complementary-color2);\n    box-shadow: -15px -15px 0px -10px var(--main-color),\n    15px 15px 0px -10px var(--main-color);\n    display: grid;\n    grid-template-columns: 1fr;\n    grid-template-rows: auto;\n    gap: 0.5rem;\n}\n.customer {\n    font-weight: bold;\n    text-align: right;\n}\n\n.schedule.box p {\n    padding-left: 0.5rem;\n}\nspan {\n    font-weight: bold;\n}\n\n/* Menu */\n.main-container {\n    display: grid;\n    grid-template-columns: 1fr;\n    grid-template-rows: auto;\n    gap: 3rem;\n}\n.course {\n    display: grid;\n    grid-template-columns: 1fr;\n    grid-template-rows: auto;\n    gap: 1.5rem;\n}\n.course .box {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    gap: 1rem;\n    text-align: center;\n}\n.course-title {\n    max-width: max-content;\n    color: var(--contrast-color);\n    padding-bottom: 2px;\n    border-bottom: ridge 5px var(--complementary-color);\n}\nh3 {\n    color: var(--side-color-dark);\n}",""]);const x=u},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",o=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),o&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),o&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,o,a,c){"string"==typeof e&&(e=[[null,e,void 0]]);var r={};if(o)for(var d=0;d<this.length;d++){var i=this[d][0];null!=i&&(r[i]=!0)}for(var s=0;s<e.length;s++){var l=[].concat(e[s]);o&&r[l[0]]||(void 0!==c&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=c),n&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=n):l[2]=n),a&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=a):l[4]="".concat(a)),t.push(l))}},t}},667:e=>{e.exports=function(e,t){return t||(t={}),e?(e=String(e.__esModule?e.default:e),/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),t.hash&&(e+=t.hash),/["'() \t\n]|(%20)/.test(e)||t.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e):e}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var t=[];function n(e){for(var n=-1,o=0;o<t.length;o++)if(t[o].identifier===e){n=o;break}return n}function o(e,o){for(var c={},r=[],d=0;d<e.length;d++){var i=e[d],s=o.base?i[0]+o.base:i[0],l=c[s]||0,p="".concat(s," ").concat(l);c[s]=l+1;var m=n(p),u={css:i[1],media:i[2],sourceMap:i[3],supports:i[4],layer:i[5]};if(-1!==m)t[m].references++,t[m].updater(u);else{var h=a(u,o);o.byIndex=d,t.splice(d,0,{identifier:p,updater:h,references:1})}r.push(p)}return r}function a(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,a){var c=o(e=e||[],a=a||{});return function(e){e=e||[];for(var r=0;r<c.length;r++){var d=n(c[r]);t[d].references--}for(var i=o(e,a),s=0;s<c.length;s++){var l=n(c[s]);0===t[l].references&&(t[l].updater(),t.splice(l,1))}c=i}}},569:e=>{var t={};e.exports=function(e,n){var o=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(n)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var o="";n.supports&&(o+="@supports (".concat(n.supports,") {")),n.media&&(o+="@media ".concat(n.media," {"));var a=void 0!==n.layer;a&&(o+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),o+=n.css,a&&(o+="}"),n.media&&(o+="}"),n.supports&&(o+="}");var c=n.sourceMap;c&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(c))))," */")),t.styleTagTransform(o,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}},363:(e,t,n)=>{e.exports=n.p+"5bfc0dcc0c0ff5a2832e.ttf"},375:(e,t,n)=>{e.exports=n.p+"8093e09fcf3647864b06.jpg"},701:(e,t,n)=>{e.exports=n.p+"3d85ec9ff34b5c5ecb26.jpg"},870:(e,t,n)=>{e.exports=n.p+"6c7082e82d6f59f7e936.jpg"}},t={};function n(o){var a=t[o];if(void 0!==a)return a.exports;var c=t[o]={id:o,exports:{}};return e[o](c,c.exports,n),c.exports}n.m=e,n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e;n.g.importScripts&&(e=n.g.location+"");var t=n.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var o=t.getElementsByTagName("script");o.length&&(e=o[o.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),n.p=e})(),n.b=document.baseURI||self.location.href,n.nc=void 0,(()=>{const e=n.p+"84fde27f9d30c2ddbc7e.jpg",t=n.p+"34728bdc138b3ba6c52b.jpg",o=n.p+"375fd2aad9947bede88f.jpg",a=n.p+"71fb7414e9577b3fbf19.jpg",c=(n.p,n.p,n.p,n.p,n.p,n.p,n.p,n.p,n.p,()=>{const e=document.querySelector("#content"),n=document.createElement("div");n.classList.add("main-div");const c=document.createElement("h1");c.textContent="Menu",c.classList.add("main-title"),n.appendChild(c);const r=document.createElement("div");r.classList.add("main-container");const d=document.createElement("div");d.classList.add("course");const i=document.createElement("h2");i.classList.add("course-title"),i.textContent="Appetizer";const s=document.createElement("div");s.classList.add("box");const l=document.createElement("h3");l.textContent="Chocolate-Stuffed Strawberries";const p=document.createElement("img");p.src=t;const m=document.createElement("p");m.textContent="Fresh strawberries filled with creamy chocolate ganache, served with a dollop of whipped cream and a sprinkle of cocoa powder.";const u=document.createElement("div");u.classList.add("box");const h=document.createElement("h3");h.textContent="Chocolate and Cheese Board";const f=document.createElement("img");f.src=o;const C=document.createElement("p");C.textContent="A selection of artisanal cheeses paired with rich chocolate, fresh fruit, and toasted nuts.";const b=document.createElement("div");b.classList.add("box");const x=document.createElement("h3");x.textContent="Cocoa-Dusted Popcorn";const g=document.createElement("img");g.src=a;const v=document.createElement("p");v.textContent="Sweet and salty popcorn coated in rich, velvety cocoa powder.",d.appendChild(i),s.append(l,p,m),d.appendChild(s),u.append(h,f,C),d.appendChild(u),b.append(x,g,v),d.appendChild(b);const E=document.createElement("div");E.classList.add("course");const y=document.createElement("div");y.classList.add("box");const w=document.createElement("h2");w.classList.add("course-title"),w.textContent="Entree";const k=document.createElement("h3");k.textContent="Cocoa-Rubbed Steak";const L=document.createElement("p");L.textContent="A juicy steak seasoned with a blend of cocoa powder, smoked paprika, and spices, served with a side of roasted sweet potatoes and sautéed kale.";const S=document.createElement("div");S.classList.add("box");const A=document.createElement("h3");A.textContent="Chocolate-Crusted Salmon";const z=document.createElement("p");z.textContent="A fillet of fresh salmon coated in a crunchy chocolate crust, served with a side of roasted vegetables and a drizzle of balsamic reduction.";const T=document.createElement("div");T.classList.add("box");const j=document.createElement("h3");j.textContent="Mushroom and Truffle Risotto";const M=document.createElement("p");M.textContent="Creamy risotto with earthy mushrooms, shaved truffles, and a touch of dark chocolate, finished with Parmesan cheese and fresh herbs.",E.appendChild(w),y.appendChild(k),y.appendChild(L),E.appendChild(y),S.appendChild(A),S.appendChild(z),E.appendChild(S),T.appendChild(j),T.appendChild(M),E.appendChild(T);const I=document.createElement("div");I.classList.add("course");const q=document.createElement("div");q.classList.add("box");const U=document.createElement("h2");U.classList.add("course-title"),U.textContent="Dessert";const D=document.createElement("h3");D.textContent="Chocolate Molten Cake";const F=document.createElement("p");F.textContent="A warm, gooey chocolate cake with a molten center, served with a scoop of vanilla ice cream and fresh berries.";const R=document.createElement("div");R.classList.add("box");const P=document.createElement("h3");P.textContent="Dark Chocolate Fondue";const H=document.createElement("p");H.textContent="A pot of rich, melted dark chocolate for dipping fresh fruit, marshmallows, and pound cake.";const N=document.createElement("div");N.classList.add("box");const O=document.createElement("h3");O.textContent="Chocolate Chip Cookie Dough Cheesecake";const Z=document.createElement("p");Z.textContent="A decadent cheesecake filled with chunks of chocolate chip cookie dough and topped with a chocolate drizzle.",I.appendChild(U),q.appendChild(D),q.appendChild(F),I.appendChild(q),R.appendChild(P),R.appendChild(H),I.appendChild(R),N.appendChild(O),N.appendChild(Z),I.appendChild(N);const $=document.createElement("div");$.classList.add("course");const _=document.createElement("div");_.classList.add("box");const B=document.createElement("h2");B.classList.add("course-title"),B.textContent="Beverage";const G=document.createElement("h3");G.textContent="Hot Chocolate";const W=document.createElement("p");W.textContent="A classic blend of rich, velvety chocolate and steamed milk, topped with whipped cream and chocolate shavings.";const V=document.createElement("div");V.classList.add("box");const J=document.createElement("h3");J.textContent="Chocolate Martini";const Q=document.createElement("p");Q.textContent="A creamy, indulgent blend of chocolate liqueur, vodka, and cream, garnished with a chocolate-dipped strawberry.";const K=document.createElement("div");K.classList.add("box");const X=document.createElement("h3");X.textContent="Chocolate Milkshake";const Y=document.createElement("p");Y.textContent="A thick, creamy milkshake made with real chocolate ice cream and topped with whipped cream and chocolate syrup.",$.appendChild(B),_.appendChild(G),_.appendChild(W),$.appendChild(_),V.appendChild(J),V.appendChild(Q),$.appendChild(V),K.appendChild(X),K.appendChild(Y),$.appendChild(K),r.appendChild(d),r.appendChild(E),r.appendChild(I),r.appendChild($),e.appendChild(n),e.appendChild(r)});var r=n(379),d=n.n(r),i=n(795),s=n.n(i),l=n(569),p=n.n(l),m=n(565),u=n.n(m),h=n(216),f=n.n(h),C=n(589),b=n.n(C),x=n(426),g={};g.styleTagTransform=b(),g.setAttributes=u(),g.insert=p().bind(null,"head"),g.domAPI=s(),g.insertStyleElement=f(),d()(x.Z,g),x.Z&&x.Z.locals&&x.Z.locals;const v=document.querySelectorAll(".tab"),E=document.querySelector("#content"),y=()=>{E.replaceChildren()};c(),v.forEach((t=>{t.addEventListener("click",(()=>{switch(t.id){case"home":default:y(),(()=>{console.log("Hi, everyone!!");const t=document.querySelector("#content"),n=document.createElement("div");n.classList.add("main-div");const o=document.createElement("img");o.src=e;const a=document.createElement("h1");a.textContent="Decadence by Cocoa",a.classList.add("main-title"),n.appendChild(a),n.appendChild(o);const c=document.createElement("p");c.classList.add("description"),c.textContent="Indulge in the ultimate chocolate experience at Decadence by Cocoa. Our carefully crafted menu showcases the best of the chocolate world, while our refined and elegant ambiance creates an unforgettable atmosphere.";const r=document.createElement("div");r.classList.add("comment","box");const d=document.createElement("q");d.textContent="We believe that chocolate is more than just a dessert, it's an experience to be savored and appreciated.";const i=document.createElement("p");i.textContent="- General Manager",i.classList.add("customer"),r.appendChild(d),r.appendChild(i);const s=document.createElement("div");s.classList.add("comment","box");const l=document.createElement("q");l.textContent="I have to say, my taste buds have never been happier than they were at this chocolate restaurant. The first bite of the chocolate lava cake was like a warm embrace from an old friend.";const p=document.createElement("p");p.textContent="- Happy Costumer",p.classList.add("customer"),s.appendChild(l),s.appendChild(p);const m=document.createElement("div");m.classList.add("comment","box");const u=document.createElement("q");u.textContent="I couldn't get enough of the rich, gooey goodness that melted in my mouth like a dream. And let's not forget about the drinks! The hot chocolate was so decadent and creamy, it was like sipping on liquid gold.";const h=document.createElement("p");h.textContent="- Food Critic",h.classList.add("customer"),m.appendChild(u),m.appendChild(h);const f=document.createElement("div");f.classList.add("comment","box");const C=document.createElement("q");C.textContent="The atmosphere of the restaurant was cozy and inviting, with a touch of elegance that made me feel like royalty. I'll definitely be back for more chocolatey magic!";const b=document.createElement("p");b.textContent="- Another Happy Customer",b.classList.add("customer"),f.appendChild(C),f.appendChild(b);const x=document.createElement("div");x.classList.add("schedule","box");const g=document.createElement("h2");g.textContent="Schedule";const v=document.createElement("p"),E=document.createElement("span");E.textContent="Monday: ",v.textContent="8:00am - 6:00pm";const y=document.createElement("p"),w=document.createElement("span");w.textContent="Tuesday: ",y.textContent="8:00am - 6:00pm";const k=document.createElement("p"),L=document.createElement("span");L.textContent="Wednesday: ",k.textContent="8:00am - 6:00pm";const S=document.createElement("p"),A=document.createElement("span");A.textContent="Thursday: ",S.textContent="8:00am - 6:00pm";const z=document.createElement("p"),T=document.createElement("span");T.textContent="Friday: ",z.textContent="10:00am - 10:00pm";const j=document.createElement("p"),M=document.createElement("span");M.textContent="Saturday: ",j.textContent="10:00am - 10:00pm";const I=document.createElement("p"),q=document.createElement("span");q.textContent="Sunday: ",I.textContent="10:00am - 10:00pm",x.appendChild(g),v.prepend(E),x.appendChild(v),y.prepend(w),x.appendChild(y),k.prepend(L),x.appendChild(k),S.prepend(A),x.appendChild(S),z.prepend(T),x.appendChild(z),j.prepend(M),x.appendChild(j),I.prepend(q),x.appendChild(I),t.appendChild(n),t.appendChild(c),t.appendChild(r),t.appendChild(s),t.appendChild(m),t.appendChild(f),t.appendChild(x)})();break;case"menu":y(),c();break;case"contact":y(),(()=>{const e=document.querySelector("#content"),t=document.createElement("div");t.classList.add("main-div");const n=document.createElement("h1");n.textContent="Contact Us",n.classList.add("main-title"),t.appendChild(n);const o=document.createElement("div"),a=document.createElement("div"),c=document.createElement("h2");c.textContent="Address";const r=document.createElement("p");r.textContent="1445 West Norwood Avenue, Itasca, Illinois.",a.appendChild(c),a.appendChild(r);const d=document.createElement("div"),i=document.createElement("h2");i.textContent="Phone";const s=document.createElement("p");s.textContent="555-444-5555",d.appendChild(i),d.appendChild(s);const l=document.createElement("div"),p=document.createElement("h2");p.textContent="Email";const m=document.createElement("p");m.textContent="chocoCrush@sweet.com",l.appendChild(p),l.appendChild(m),o.appendChild(a),o.appendChild(d),o.appendChild(l),e.appendChild(t),e.appendChild(o)})()}}))}))})()})();