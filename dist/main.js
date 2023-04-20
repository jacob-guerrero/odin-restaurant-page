(()=>{"use strict";var e={};e.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),(()=>{var t;e.g.importScripts&&(t=e.g.location+"");var n=e.g.document;if(!t&&n&&(n.currentScript&&(t=n.currentScript.src),!t)){var o=n.getElementsByTagName("script");o.length&&(t=o[o.length-1].src)}if(!t)throw new Error("Automatic publicPath is not supported in this browser");t=t.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),e.p=t})();const t=e.p+"84fde27f9d30c2ddbc7e.jpg",n=()=>{console.log("Hi, everyone!!");const e=document.querySelector("#content"),n=document.createElement("img");n.src=t;const o=document.createElement("h1");o.textContent="The Best Restaurant In The World";const c=document.createElement("p");c.textContent="In 2019, the Best of the Best category was created, a hall of fame for restaurants that have reached the pinnacle of the No.1 position in The World’s 50 Best Restaurants list. With the creation of this list, No.1 winners are no longer eligible to be voted on new editions of the list.",e.appendChild(n),e.appendChild(o),e.appendChild(c)},o=document.querySelectorAll(".tab"),c=document.querySelector("#content"),d=()=>{c.replaceChildren()};n(),o.forEach((e=>{e.addEventListener("click",(()=>{switch(e.id){case"home":default:d(),n();break;case"menu":d(),(()=>{const e=document.createElement("h1");e.textContent="Menu";const t=document.createElement("div"),n=document.createElement("div"),o=document.createElement("div"),c=document.createElement("h2");c.textContent="Appetizer";const d=document.createElement("h3");d.textContent="Chocolate-Stuffed Strawberries";const a=document.createElement("p");a.textContent="Fresh strawberries filled with creamy chocolate ganache, served with a dollop of whipped cream and a sprinkle of cocoa powder.";const l=document.createElement("div"),r=document.createElement("h3");r.textContent="Chocolate and Cheese Board";const i=document.createElement("p");i.textContent="A selection of artisanal cheeses paired with rich chocolate, fresh fruit, and toasted nuts.";const p=document.createElement("div"),h=document.createElement("h3");h.textContent="Cocoa-Dusted Popcorn";const m=document.createElement("p");m.textContent="Sweet and salty popcorn coated in rich, velvety cocoa powder.",n.appendChild(c),o.appendChild(d),o.appendChild(a),n.appendChild(o),l.appendChild(r),l.appendChild(i),n.appendChild(l),p.appendChild(h),p.appendChild(m),n.appendChild(p);const s=document.createElement("div"),C=document.createElement("div"),u=document.createElement("h2");u.textContent="Entree";const E=document.createElement("h3");E.textContent="Cocoa-Rubbed Steak";const f=document.createElement("p");f.textContent="A juicy steak seasoned with a blend of cocoa powder, smoked paprika, and spices, served with a side of roasted sweet potatoes and sautéed kale.";const v=document.createElement("div"),w=document.createElement("h3");w.textContent="Chocolate-Crusted Salmon";const x=document.createElement("p");x.textContent="A fillet of fresh salmon coated in a crunchy chocolate crust, served with a side of roasted vegetables and a drizzle of balsamic reduction.";const k=document.createElement("div"),g=document.createElement("h3");g.textContent="Mushroom and Truffle Risotto";const b=document.createElement("p");b.textContent="Creamy risotto with earthy mushrooms, shaved truffles, and a touch of dark chocolate, finished with Parmesan cheese and fresh herbs.",s.appendChild(u),C.appendChild(E),C.appendChild(f),s.appendChild(C),v.appendChild(w),v.appendChild(x),s.appendChild(v),k.appendChild(g),k.appendChild(b),s.appendChild(k);const y=document.createElement("div"),A=document.createElement("div"),S=document.createElement("h2");S.textContent="Dessert";const B=document.createElement("h3");B.textContent="Chocolate Molten Cake";const T=document.createElement("p");T.textContent="A warm, gooey chocolate cake with a molten center, served with a scoop of vanilla ice cream and fresh berries.";const q=document.createElement("div"),z=document.createElement("h3");z.textContent="Dark Chocolate Fondue";const M=document.createElement("p");M.textContent="A pot of rich, melted dark chocolate for dipping fresh fruit, marshmallows, and pound cake.";const j=document.createElement("div"),D=document.createElement("h3");D.textContent="Chocolate Chip Cookie Dough Cheesecake";const I=document.createElement("p");I.textContent="A decadent cheesecake filled with chunks of chocolate chip cookie dough and topped with a chocolate drizzle.",y.appendChild(S),A.appendChild(B),A.appendChild(T),y.appendChild(A),q.appendChild(z),q.appendChild(M),y.appendChild(q),j.appendChild(D),j.appendChild(I),y.appendChild(j);const N=document.createElement("div"),P=document.createElement("div"),R=document.createElement("h2");R.textContent="Beverage";const W=document.createElement("h3");W.textContent="Hot Chocolate";const F=document.createElement("p");F.textContent="A classic blend of rich, velvety chocolate and steamed milk, topped with whipped cream and chocolate shavings.";const $=document.createElement("div"),H=document.createElement("h3");H.textContent="Chocolate Martini";const L=document.createElement("p");L.textContent="A creamy, indulgent blend of chocolate liqueur, vodka, and cream, garnished with a chocolate-dipped strawberry.";const U=document.createElement("div"),G=document.createElement("h3");G.textContent="Chocolate Milkshake";const J=document.createElement("p");J.textContent="A thick, creamy milkshake made with real chocolate ice cream and topped with whipped cream and chocolate syrup.",N.appendChild(R),P.appendChild(W),P.appendChild(F),N.appendChild(P),$.appendChild(H),$.appendChild(L),N.appendChild($),U.appendChild(G),U.appendChild(J),N.appendChild(U),t.appendChild(n),t.appendChild(s),t.appendChild(y),t.appendChild(N);const K=document.querySelector("#content");K.appendChild(e),K.appendChild(t)})();break;case"contact":d(),(()=>{const e=document.createElement("h1");e.textContent="Contact Us";const t=document.createElement("div"),n=document.createElement("div"),o=document.createElement("h2");o.textContent="Address";const c=document.createElement("p");c.textContent="1445 West Norwood Avenue, Itasca, Illinois.",n.appendChild(o),n.appendChild(c);const d=document.createElement("div"),a=document.createElement("h2");a.textContent="Phone";const l=document.createElement("p");l.textContent="555-444-5555",d.appendChild(a),d.appendChild(l);const r=document.createElement("div"),i=document.createElement("h2");i.textContent="Email";const p=document.createElement("p");p.textContent="chocoCrush@sweet.com",r.appendChild(i),r.appendChild(p),t.appendChild(n),t.appendChild(d),t.appendChild(r);const h=document.querySelector("#content");h.appendChild(e),h.appendChild(t)})()}}))}))})();