(this.webpackJsonpcatinder=this.webpackJsonpcatinder||[]).push([[0],{84:function(e,t,n){},91:function(e,t,n){"use strict";n.r(t);var c=n(2),a=n(0),i=n.n(a),s=n(14),r=n.n(s),o=(n(84),n(17)),d=n(127),l=n(124),u=n(128),j=n(125),h=n(13),b=n(126);function f(e){var t=e.children,n=e.parentRef,i=e.id,s=e.lastIdChanged,r=e.swipeSuccessMarginPercentage,d=void 0===r?100:r,l=e.onSwipeRight,u=void 0===l?function(){}:l,j=e.onSwipeLeft,h=void 0===j?function(){}:j,b=e.onSwipeEnd,f=void 0===b?function(){}:b,O=Object(a.useRef)(),g=!1,x=null,m=null,p=n.offsetWidth/(1+d/100),v=Object(a.useRef)(),k=Object(a.useRef)(),C=Object(a.useState)(0),S=Object(o.a)(C,2),y=S[0],M=S[1],w=Object(a.useState)(0),L=Object(o.a)(w,2),N=L[0],A=L[1],T=Object(a.useState)(""),E=Object(o.a)(T,2),I=E[0],R=E[1],P=Object(a.useRef)(0);function D(e,t){if(!x||!m)return x=e,void(m=t);M(y+(e-x)),A(N+(t-m))}function F(e){R("card-swiped-".concat(e)),setTimeout((function(){f(i,e)}),500)}function B(e){g=!1,(v.current?(F("right"),"right"):k.current&&(F("left"),"left"))||(R("reseting"),M(0),A(0),P.current=0,x=0,m=0,setTimeout((function(){R("")}),500))}function U(e){g&&D(e.clientX,e.clientY)}function J(e){g=!0}function K(e){e.preventDefault(),D(e.touches[0].clientX,e.touches[0].clientY)}return Object(a.useEffect)((function(){y>0&&u(y),y<0&&h(y)}),[y,h,u]),Object(a.useEffect)((function(){s.id===i&&F(s.dir)}),[s.id,i,F]),Object(a.useEffect)((function(){O.current&&(O.current.addEventListener("mousedown",J),O.current.addEventListener("mouseup",B),O.current.addEventListener("mousemove",U),O.current.addEventListener("touchmove",K),O.current.addEventListener("touchend",B))}),[]),Object(a.useEffect)((function(){v.current=y>p,k.current=y<-1*p,P.current=y/p/10}),[y,p,v]),Object(c.jsx)("div",{ref:O,style:{transform:"matrix(1.00,".concat(P.current,",").concat(-P.current,",1.00,").concat(y,",").concat(N,")")},className:"card-container ".concat(I),children:t})}var O=n(117),g={makeId:function(){for(var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:5,t="",n="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",c=0;c<e;c++)t+=n.charAt(Math.floor(Math.random()*n.length));return t},parseTimestamp:function(e){return new Date(e).toLocaleString()},getRandomInt:function(e,t){return e=Math.ceil(e),t=Math.floor(t),Math.floor(Math.random()*(t-e+1))+e},getDistanceFromLatLonInKm:function(e,t,n,c){var a=o(n-e),i=o(c-t),s=Math.sin(a/2)*Math.sin(a/2)+Math.cos(o(e))*Math.cos(o(n))*Math.sin(i/2)*Math.sin(i/2),r=2*Math.atan2(Math.sqrt(s),Math.sqrt(1-s));return 6371*r;function o(e){return e*(Math.PI/180)}}};var x=n(63),m=n(28),p=n.n(m),v=n(39),k=n(15),C={saveToStorage:function(e,t){var n=JSON.stringify(t);localStorage.setItem(e,n)},loadFromStorage:function(e){var t=localStorage.getItem(e);return JSON.parse(t)}};var S={getCats:function(){return y.apply(this,arguments)},onLike:function(e){var t=C.loadFromStorage("cats");t||(t={likedCats:[],dislikedCats:[]});t.likedCats=e,C.saveToStorage("cats",t)},onDislike:function(e){var t=C.loadFromStorage("cats");t||(t={likedCats:[],dislikedCats:[]});t.dislikedCats.push(e),C.saveToStorage("cats",t)},getLikedCats:function(){var e=C.loadFromStorage("cats");e||(e={likedCats:[],dislikedCats:[]});return C.saveToStorage("cats",e),e.likedCats},getUserPrefs:M,setMaxRadius:function(e){var t=M();t.maxRadius=e,C.saveToStorage("catUserPrefs",t)},setCatAge:function(e,t){var n=M();n.catAgeMin=e,n.catAgeMax=t,C.saveToStorage("catUserPrefs",n)},onUndo:function(){var e=C.loadFromStorage("cats"),t=e.dislikedCats.pop();return C.saveToStorage("cats",e),t}};function y(){return(y=Object(v.a)(p.a.mark((function e(){var t,n,c=arguments;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=c.length>0&&void 0!==c[0]?c[0]:20,e.next=3,w("https://api.thecatapi.com/v1/images/search?limit=".concat(t));case 3:return n=e.sent,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function M(){var e=C.loadFromStorage("catUserPrefs");return e||(e={maxRadius:10,catAgeMin:0,catAgeMax:12}),e}function w(e){return L.apply(this,arguments)}function L(){return(L=Object(v.a)(p.a.mark((function e(t){var n,c;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch(t);case 3:return n=e.sent,e.next=6,n.json();case 6:return c=e.sent,e.abrupt("return",c);case 10:e.prev=10,e.t0=e.catch(0),console.log(e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})))).apply(this,arguments)}var N={createCatObject:function(e,t,n,c,a,i,s){return{id:t,name:T(),img:e,age:E(n,c),coords:I(a,i,s)}}},A=["Abby","Angel","Annie","Baby","Bailey","Bandit","Bear","Bella","Bob","Boo","Boots","Bubba","Buddy","Buster","Cali","Callie","Casper","Charlie","Chester","Chloe","Cleo","Coco","Cookie","Cuddles","Daisy","Dusty","Felix","Fluffy","Garfield","George","Ginger","Gizmo","Gracie","Harley","Jack","Jasmine","Jasper","Kiki","Kitty","Leo","Lilly","Lily","Loki","Lola","Lucky","Lucy","Luna","Maggie","Max","Mia","Midnight","Milo","Mimi","Miss kitty","Missy","Misty","Mittens","Molly","Muffin","Nala","Oliver","Oreo","Oscar","Patches","Peanut","Pepper","Precious","Princess","Pumpkin","Rascal","Rocky","Sadie","Salem","Sam","Samantha","Sammy","Sasha","Sassy","Scooter","Shadow","Sheba","Simba","Simon","Smokey","Snickers","Snowball","Snuggles","Socks","Sophie","Spooky","Sugar","Tiger","Tigger","Tinkerbell","Toby","Trouble","Whiskers","Willow","Zoe","Zoey"];function T(){var e=g.getRandomInt(0,A.length);return A[e]}function E(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:12,n=g.getRandomInt(12*e,12*t);return n<12?"".concat(n," months"):"".concat(Math.floor(n/12))}function I(e,t,n){var c=n/100/Math.PI*2;return{lat:g.getRandomInt(1e4*e-1e4*c,1e4*e+1e4*c)/1e4,lng:g.getRandomInt(1e4*t-1e4*c,1e4*t+1e4*c)/1e4}}function R(){return{cards:[],likedCats:[],maxDistance:10,catAgeMin:0,catAgeMax:12,userLocation:null,setUserLocation:function(e){var t=e.coords,n=t.latitude,c=t.longitude;this.userLocation={latitude:n,longitude:c}},getCats:function(){var e=this;return Object(v.a)(p.a.mark((function t(){var n,c;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n=20,e.cards.length!==n){t.next=3;break}return t.abrupt("return");case 3:return t.next=5,S.getCats(n-e.cards.length);case 5:return c=t.sent,Object(k.e)((function(){c.forEach((function(t){var n=N.createCatObject(t.url,t.id,e.catAgeMin,e.catAgeMax,e.userLocation.latitude,e.userLocation.longitude,e.maxDistance);e.cards.unshift(n)}))})),t.abrupt("return");case 8:case"end":return t.stop()}}),t)})))()},getUserPrefs:function(){var e=S.getUserPrefs();this.maxDistance=e.maxRadius,this.catAgeMin=e.catAgeMin,this.catAgeMax=e.catAgeMax},setCatAge:function(e,t){this.catAgeMin=e,this.catAgeMax=t,this.cards=[],S.setCatAge(e,t)},setMaxRadius:function(e){this.maxDistance=e,this.cards=[],S.setMaxRadius(e)},getLikedCats:function(){var e=S.getLikedCats();this.likedCats=e},onSwipe:function(e,t){this.cards=this.cards.filter((function(t){return t.id!==e.id})),this.likedCats.unshift(e),"right"===t?S.onLike(Object(k.f)(this.likedCats)):S.onDislike(e),this.cards.length<10&&this.getCats()},onUndo:function(){var e=S.onUndo();return e?(this.cards.push(e),e):null},onDislikeCatById:function(e){this.likedCats=this.likedCats.filter((function(t){return t.id!==e})),S.onLike(Object(k.f)(this.likedCats))}}}var P=i.a.createContext(null),D=function(e){var t=e.children,n={cardStore:Object(x.a)(R)};return Object(c.jsx)(P.Provider,{value:n,children:t})},F=function(){return i.a.useContext(P)};function B(e){var t=e.cat,n=F().cardStore.userLocation,s=Object(a.useState)(!1),r=Object(o.a)(s,2),d=r[0],l=r[1];return Object(a.useEffect)((function(){var e=new Image;return e.src=t.img,e.onload=function(){l(!0)},function(){}}),[t.img]),Object(c.jsx)(i.a.Fragment,{children:d?Object(c.jsx)("div",{className:"cat-container",style:{backgroundImage:"url('".concat(t.img,"')")},children:Object(c.jsxs)("div",{className:"mask",children:[Object(c.jsx)("div",{className:"placeholder"}),Object(c.jsxs)("div",{className:"cat-details",children:[Object(c.jsxs)("div",{className:"cat-header",children:[Object(c.jsx)("span",{children:Object(c.jsx)("h3",{className:"cat-name",children:t.name})}),Object(c.jsx)("span",{className:"cat-age",children:t.age})]}),Object(c.jsx)("div",{className:"cat-distance",children:n?Object(c.jsxs)("span",{children:[Math.round(g.getDistanceFromLatLonInKm(n.latitude,n.longitude,t.coords.lat,t.coords.lng))," km away"]}):Object(c.jsx)(i.a.Fragment,{})})]})]})}):Object(c.jsx)("div",{className:"cat-container",children:Object(c.jsx)(O.a,{})})})}var U=n(49),J=n.n(U),K=n(48),W=n.n(K),q=n(69),G=n.n(q),z=n(121),X=n(120),Y=n(129);function Z(e){var t=e.isOpen,n=e.behavior;return Object(c.jsx)(X.a,{in:t,direction:function(){switch(n){case"like":return"left";case"dislike":return"right";default:return"up"}}(),children:Object(c.jsx)(Y.a,{open:!0,children:Object(c.jsx)("div",{className:"snackbar-container",style:{backgroundColor:function(){switch(n){case"like":return"#63D471";case"dislike":return"#fd5068";default:return"rgb(64,64,64)"}}()},children:Object(c.jsx)("h3",{children:function(){switch(n){case"like":return"Liked!";case"dislike":return"Nope";default:return"Undo"}}()})})})})}function H(){var e=F().cardStore,t=Object(a.useRef)(),n=Object(a.useState)(!1),s=Object(o.a)(n,2),r=s[0],d=s[1],l=Object(a.useState)({id:null,dir:""}),u=Object(o.a)(l,2),j=u[0],h=u[1],O=Object(a.useState)(!1),g=Object(o.a)(O,2),x=g[0],m=g[1],p=Object(a.useState)(""),v=Object(o.a)(p,2),C=v[0],S=v[1];function y(e){39===e.keyCode?M():37===e.keyCode&&w()}function M(){var t=Object(k.f)(e.cards),n=t[t.length-1];h({id:n.id,dir:"right"})}function w(){var t=Object(k.f)(e.cards),n=t[t.length-1];h({id:n.id,dir:"left"})}function L(){h({id:null,dir:""}),e.onUndo()&&A("undo")}Object(a.useEffect)((function(){return e.getCats(),window.addEventListener("keyup",y),function(){window.removeEventListener("keyup",y)}}),[]),Object(a.useEffect)((function(){return t.current&&d(!0),function(){d(!1)}}),[t.current]);var N=function(t,n){var c=Object(k.f)(e.cards).find((function(e){return e.id===t}));c&&(e.onSwipe(c,n),A("right"===n?"like":"dislike"))};function A(e){S(e),m(!0),setTimeout((function(){m(!1)}),3e3)}return Object(b.a)((function(){return Object(c.jsxs)("section",{className:"card-page-container",children:[Object(c.jsx)("div",{className:"upper-container",children:Object(c.jsx)("div",{ref:t,className:"cards-container",children:e.cards.length&&r?Object(c.jsx)("div",{children:e.cards.map((function(e,n){return Object(c.jsx)(f,{parentRef:t.current,lastIdChanged:j,id:e.id,onSwipeEnd:N,children:Object(c.jsx)(B,{cat:e})},"".concat(e.id,"-").concat(n))}))}):Object(c.jsx)(i.a.Fragment,{})})}),Object(c.jsxs)("div",{className:"bottom-action-bar",children:[Object(c.jsx)("div",{className:"dislike-container",children:Object(c.jsx)(z.a,{onClick:w,children:Object(c.jsx)(W.a,{})})}),Object(c.jsx)("div",{className:"undo-container",children:Object(c.jsx)(z.a,{onClick:L,children:Object(c.jsx)(G.a,{})})}),Object(c.jsx)("div",{className:"like-container",children:Object(c.jsx)(z.a,{onClick:M,children:Object(c.jsx)(J.a,{})})})]}),Object(c.jsx)(Z,{isOpen:x,behavior:C})]})}))}var Q=n(122);function V(e){var t=F().cardStore;return Object(a.useEffect)((function(){t.getLikedCats()}),[]),Object(b.a)((function(){return Object(c.jsxs)("section",{className:"liked-cats-page",children:[Object(c.jsx)("h2",{children:"Liked Cats"}),Object(c.jsx)("div",{className:"liked-cats-container",children:t.likedCats&&t.likedCats.length?t.likedCats.map((function(e){return Object(c.jsx)(i.a.Fragment,{children:Object(c.jsxs)("div",{className:"liked-cat-container",children:[Object(c.jsx)("div",{className:"close-container",children:Object(c.jsx)(Q.a,{onClick:function(){return t.onDislikeCatById(e.id)},size:"small",children:Object(c.jsx)(W.a,{fontSize:"small"})})}),Object(c.jsx)(B,{cat:e})]})},e.id)})):Object(c.jsxs)("div",{className:"liked-cats-empty-state",children:[Object(c.jsx)("h3",{children:"No Cats!"}),Object(c.jsx)("p",{children:"Looks like you haven't liked any cats."}),Object(c.jsx)("p",{children:"Why not like some now?"})]})})]})}))}var $=n(130),_=n.p+"static/media/baby-cat.21007a7b.jpg",ee=n.p+"static/media/med-cat.aa909114.jpg",te=n.p+"static/media/grown-cat.ee771749.jpg",ne=n.p+"static/media/old-cat.976ce761.jpg";function ce(){var e=F().cardStore,t=Object(a.useState)([0,12]),n=Object(o.a)(t,2),i=n[0],s=n[1],r=Object(a.useState)(10),d=Object(o.a)(r,2),l=d[0],u=d[1];return Object(a.useEffect)((function(){var t=e.catAgeMin,n=e.catAgeMax,c=e.maxDistance;s([t,n]),u(c)}),[e]),Object(c.jsxs)("section",{className:"user-pref-page",children:[Object(c.jsxs)("div",{className:"slider-container",children:[Object(c.jsx)("div",{className:"header",children:Object(c.jsx)("h3",{children:"Filter the cats you want to meet"})}),Object(c.jsxs)("div",{className:"cat-age-container",children:[Object(c.jsxs)("div",{className:"header",children:[Object(c.jsx)("span",{children:"Age Range"}),Object(c.jsxs)("span",{children:[i[0]," - ",i[1]]})]}),Object(c.jsx)($.a,{value:i,color:"secondary",onChange:function(t,n){s(n),e.setCatAge(n[0],n[1])},valueLabelDisplay:"auto","aria-labelledby":"range-slider",min:0,max:20})]}),Object(c.jsxs)("div",{className:"max-radius-container",children:[Object(c.jsxs)("div",{className:"header",children:[Object(c.jsx)("span",{children:"Maximum Distance"}),Object(c.jsxs)("span",{children:[l," km"]})]}),Object(c.jsx)($.a,{value:l,color:"secondary",onChange:function(t,n){u(n),e.setMaxRadius(n)},valueLabelDisplay:"auto",min:0,max:100})]})]}),Object(c.jsx)("div",{className:"cat-img-container",children:Object(c.jsx)("img",{src:function(){var e=(i[0]+i[1])/2;return e<2?_:e<9?ee:e<15?te:ne}(),alt:"cat"})})]})}var ae=n(70),ie=n.n(ae),se=n(71),re=n.n(se),oe=n(72),de=n.n(oe),le=n.p+"static/media/grumpycat.99162d77.jpg";function ue(){var e=Object(a.useState)(!1),t=Object(o.a)(e,2),n=t[0],i=t[1],s=0;function r(){10===(s+=1)&&(s=0,i(!0))}return Object(a.useEffect)((function(){return window.addEventListener("click",r),function(){window.removeEventListener("click",r)}}),[]),Object(c.jsxs)("section",{className:"about-page",children:[Object(c.jsx)("div",{className:"header",children:Object(c.jsxs)("h2",{children:["About ",Object(c.jsx)("span",{children:"CaTinder"})]})}),Object(c.jsxs)("div",{className:"app-desc",children:[Object(c.jsx)("p",{children:"CaTinder started as a joke project to create, as you might have guessed, a Tinder for cats."}),Object(c.jsx)("p",{children:"If you're wondering, they wont like you back."}),Object(c.jsx)("p",{children:"They don't have thumbs..."}),Object(c.jsx)("p",{children:"And also... they're cats..."})]}),Object(c.jsxs)("div",{className:"credits",children:[Object(c.jsxs)("p",{children:["Thanks to ",Object(c.jsx)("a",{href:"https://thecatapi.com/",children:"The Cat API"})," for the cat photos."]}),Object(c.jsxs)("p",{children:["This project was created by ",Object(c.jsx)("a",{href:"https://yaronl219.github.io/portfolio/",children:"Yaron Lipshitz"})]}),Object(c.jsxs)("p",{children:["If you want to see more projects, visit my ",Object(c.jsx)("a",{href:"https://yaronl219.github.io/portfolio/",children:Object(c.jsx)("span",{children:"portfolio"})})]})]}),Object(c.jsxs)("div",{className:"adopt",children:[Object(c.jsx)("h4",{children:"Like the cats?"}),Object(c.jsxs)("p",{children:["Why not ",Object(c.jsx)("a",{href:"https://www.google.com/search?q=adopt+a+pet&oq=adopt+a+pet",children:"Adopt a new friend?"})]})]}),Object(c.jsxs)("div",{className:"tools",children:[Object(c.jsx)("h4",{children:"Tools used in this project:"}),Object(c.jsxs)("ul",{children:[Object(c.jsx)("li",{children:"React"}),Object(c.jsx)("li",{children:"MobX"}),Object(c.jsx)("li",{children:"SCSS"}),Object(c.jsx)("li",{children:"Material UI"})]})]}),Object(c.jsx)(d.a,{open:n,onBackdropClick:function(){i(!1)},children:Object(c.jsx)("div",{onClick:function(){i(!1)},className:"easter-egg",children:Object(c.jsx)("img",{src:le,alt:"grumpy cat"})})})]})}var je=n(123);function he(e){var t=e.onClose;return Object(c.jsxs)("div",{className:"location-error-container",children:[Object(c.jsx)("h3",{children:"No location found"}),Object(c.jsx)("p",{children:"This app requires access to your location in order to work."}),Object(c.jsx)("p",{children:"Please enable your location to be found via the browser and click OK once you've done so"}),Object(c.jsx)(je.a,{onClick:t,color:"secondary",children:"OK"})]})}var be=function(){var e=Object(h.f)(),t=Object(h.g)(),n=F().cardStore,s=Object(a.useState)(0),r=Object(o.a)(s,2),b=r[0],f=r[1],O=Object(a.useState)(!1),g=Object(o.a)(O,2),x=g[0],m=g[1],p=Object(a.useState)(!1),v=Object(o.a)(p,2),k=v[0],C=v[1],S=["/home","/liked","/user","/about"];function y(t){var n=S.findIndex((function(e){return e===t}));n<0&&(n=0),f(n),e.push(S[n])}function M(){console.log("getting user location"),navigator.geolocation.getCurrentPosition(w,L,{timeout:6e4})}function w(e){console.log("app got loc"),n.setUserLocation(e),n.getUserPrefs(),console.log("loaded"),m(!0)}function L(e){console.log("error",e),C(!0)}return Object(a.useEffect)((function(){M()}),[]),Object(a.useEffect)((function(){y(t.pathname)}),[t.pathname]),Object(c.jsxs)("div",{className:"App",children:[Object(c.jsx)(d.a,{open:k,children:Object(c.jsx)(he,{onClose:function(){C(!1),M()}})}),Object(c.jsx)(l.a,{children:Object(c.jsxs)(u.a,{value:b,variant:"fullWidth",onChange:function(e,t){return y(S[t])},children:[Object(c.jsx)(j.a,{icon:Object(c.jsx)(ie.a,{})}),Object(c.jsx)(j.a,{icon:Object(c.jsx)(J.a,{})}),Object(c.jsx)(j.a,{icon:Object(c.jsx)(re.a,{})}),Object(c.jsx)(j.a,{icon:Object(c.jsx)(de.a,{})})]})}),x?Object(c.jsxs)(h.c,{children:[Object(c.jsx)(h.a,{component:ue,path:"/about"}),Object(c.jsx)(h.a,{component:ce,path:"/user"}),Object(c.jsx)(h.a,{component:V,path:"/liked"}),Object(c.jsx)(h.a,{component:H,path:"/"})]}):Object(c.jsx)(i.a.Fragment,{})]})},fe=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,131)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,i=t.getLCP,s=t.getTTFB;n(e),c(e),a(e),i(e),s(e)}))},Oe=n(56);r.a.render(Object(c.jsx)(Oe.a,{children:Object(c.jsx)(D,{children:Object(c.jsx)(be,{})})}),document.getElementById("root")),fe()}},[[91,1,2]]]);
//# sourceMappingURL=main.4460e24c.chunk.js.map