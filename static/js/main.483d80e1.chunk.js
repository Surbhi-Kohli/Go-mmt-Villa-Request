(this["webpackJsonpgommt-villa-request"]=this["webpackJsonpgommt-villa-request"]||[]).push([[0],{12:function(e,t,n){e.exports={modal:"Modal_modal__31JHg",userInput:"Modal_userInput__2YivC"}},13:function(e,t,n){e.exports={header:"Header_header__3Mhbz",nav:"Header_nav__1W6jF",navLinkActive:"Header_navLinkActive__3IVzJ"}},16:function(e,t,n){e.exports={cardContainer:"Home_cardContainer__1q_Pw"}},17:function(e,t,n){e.exports={card:"Login_card__1m5Ri",login:"Login_login__2sKRa"}},32:function(e,t,n){e.exports={login:"LoginForm_login__2RKO9"}},37:function(e,t,n){},65:function(e,t,n){},66:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),s=n(15),i=n.n(s),r=n(10),o=(n(37),n(3)),l=n(2),j=n(20),d=n.n(j),u=n(0),b=c.a.createContext(),h=function(e){var t=e.children,n=c.a.useState(""),a=Object(l.a)(n,2),s=a[0],i=a[1];return Object(u.jsx)(b.Provider,{value:[s,i],children:t})},O=n(9),x=n.n(O);var g=function(e){var t=e.villa,n=e.bookVillaForGuest,a=e.booking,c=e.origin,s=e.acceptBooking,i="";return t?i=Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("div",{children:Object(u.jsx)("img",{src:t.imgUrl})}),Object(u.jsxs)("div",{className:x.a.info,children:[Object(u.jsx)("div",{children:t.name}),Object(u.jsxs)("div",{children:["\ud83c\udfaf",t.location]}),Object(u.jsxs)("div",{children:[Object(u.jsx)("b",{children:"Cost/Day(Adult):"})," Rs.",t.costPerDayAdult]}),Object(u.jsxs)("div",{children:[Object(u.jsx)("b",{children:"Cost/Day(Child):"})," Rs.",t.costPerDayChild]}),Object(u.jsx)("button",{onClick:function(){return n(t)},children:"Request to Book"})]})]}):a&&(i=Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("div",{children:Object(u.jsx)("img",{src:a.imgUrl})}),Object(u.jsxs)("div",{className:x.a.info,children:[Object(u.jsx)("div",{children:a.propertyName}),Object(u.jsxs)("div",{className:x.a.infoSmall,children:[Object(u.jsx)("b",{children:"Owner:"}),a.propertyOwner]}),Object(u.jsxs)("div",{className:x.a.infoSmall,children:[Object(u.jsx)("b",{children:"Check In:"}),new Date(a.checkInDate).toISOString().slice(0,10)]}),Object(u.jsxs)("div",{className:x.a.infoSmall,children:[Object(u.jsx)("b",{children:"Check out:"}),new Date(a.checkoutDate).toISOString().slice(0,10)]}),Object(u.jsxs)("div",{className:x.a.infoSmall,children:[Object(u.jsx)("b",{children:"Adults:"}),a.adults]}),Object(u.jsxs)("div",{className:x.a.infoSmall,children:[Object(u.jsx)("b",{children:"Children:"}),a.children]}),Object(u.jsxs)("div",{className:x.a.infoSmall,children:[Object(u.jsx)("b",{children:"Cost:"}),"Rs.",a.cost]}),Object(u.jsxs)("div",{className:x.a.infoSmall,children:[Object(u.jsx)("b",{children:"Status:"}),a.status]}),"host"==c?Object(u.jsxs)("div",{className:x.a.infoSmall,children:[Object(u.jsx)("b",{children:"Requested By:"}),a.user]}):"","host"==c&&"approved"!==a.status&&"rejected"!==a.status?Object(u.jsxs)("div",{children:[Object(u.jsx)("button",{onClick:function(){return s(a)},children:"Accept the booking"}),Object(u.jsx)("button",{onClick:function(){return s(a,"reject")},children:"Reject"})]}):""]})]})),Object(u.jsx)("div",{className:x.a.card,children:i})},m=n(12),v=n.n(m),p=function(e){var t=e.isOpen,n=e.setOpen,a=e.villa,i=e.user,r=Object(o.g)(),j=c.a.useState(0),d=Object(l.a)(j,2),b=d[0],h=d[1],O=c.a.useState(0),x=Object(l.a)(O,2),g=x[0],m=x[1],p=c.a.useState(),f=Object(l.a)(p,2),S=f[0],k=f[1],C=c.a.useState(),y=Object(l.a)(C,2),N=y[0],_=y[1],I=c.a.useState(0),w=Object(l.a)(I,2),B=w[0],D=w[1],J=c.a.useState(),A=Object(l.a)(J,2),L=A[0],R=A[1];function P(e,t){var n=new Date(e),a=new Date(S);if(!("end"==t&&n.getTime()<a.getTime()))if("start"==t){k(new Date(e));var c=new Date(n);c.setDate(n.getDate()+1),R(c),_()}else _(new Date(e))}if(c.a.useEffect((function(){var e=new Date(N)-new Date(S),t=Math.ceil(e/864e5);if(!(t<1)){var n=0;b&&g&&t&&(n=(a.costPerDayAdult*b+a.costPerDayChild*g)*t),D(n)}}),[g,b,S,N]),!t)return null;var E=document.getElementById("root");return Object(s.createPortal)(Object(u.jsxs)("div",{className:v.a.modal,children:[Object(u.jsx)("div",{children:Object(u.jsx)("span",{children:a.name})}),Object(u.jsx)("br",{}),Object(u.jsx)("hr",{}),Object(u.jsxs)("div",{children:[Object(u.jsxs)("div",{className:v.a.userInput,children:[Object(u.jsx)("label",{children:"Adult(s):"}),Object(u.jsx)("input",{type:"number",min:"1",max:"50",onChange:function(e){return h(e.target.value)}})]}),Object(u.jsxs)("div",{className:v.a.userInput,children:[Object(u.jsx)("label",{children:"Children:"}),Object(u.jsx)("input",{type:"number",min:"0",max:"10",onChange:function(e){return m(e.target.value)}})]}),Object(u.jsxs)("div",{className:v.a.userInput,children:[Object(u.jsx)("label",{children:"Check In:"}),Object(u.jsx)("input",{type:"date",min:(new Date).toISOString().slice(0,10),onChange:function(e){return P(e.target.value,"start")}})]}),Object(u.jsxs)("div",{className:v.a.userInput,children:[Object(u.jsx)("label",{children:"Check In:"}),Object(u.jsx)("input",{type:"date",min:L?L.toISOString().slice(0,10):"",disabled:!S,onChange:function(e){return P(e.target.value,"end")}})]}),Object(u.jsxs)("div",{children:["TotalCost:",B]})]}),Object(u.jsxs)("div",{children:[Object(u.jsx)("button",{onClick:function(){var e=JSON.parse(localStorage.getItem("Bookings"))||[];e.push({id:Date.now(),user:i.name,adults:b,children:g,propertyOwner:a.Owner,propertyName:a.name,cost:B,checkInDate:S,checkoutDate:N,status:"Pending for approval from Host",imgUrl:a.imgUrl}),localStorage.setItem("Bookings",JSON.stringify(e)),n(!1),r.push("/home/bookings")},children:"Book"}),Object(u.jsx)("button",{onClick:function(){return n(!1)},children:"Close"})]})]}),E)},f=n(16),S=n.n(f);var k=function(){var e=c.a.useState(),t=Object(l.a)(e,2),n=t[0],a=t[1],s=c.a.useState(!1),i=Object(l.a)(s,2),r=i[0],j=i[1],h=c.a.useState(),O=Object(l.a)(h,2),x=O[0],m=O[1],v=c.a.useContext(b),f=Object(l.a)(v,1)[0],k=c.a.useState(JSON.parse(localStorage.getItem("Bookings"))||[]),C=Object(l.a)(k,2),y=C[0],N=C[1],_=c.a.useState(!1),I=Object(l.a)(_,2),w=I[0],B=I[1],D=c.a.useState(!1),J=Object(l.a)(D,2),A=J[0],L=J[1];function R(e){B(!0),m(e)}function P(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"accept",n=y.filter((function(t){if(t.id!=e.id)return t}));e.status="accept"==t?"approved":"rejected",n.push(e),localStorage.removeItem("Bookings"),localStorage.setItem("Bookings",JSON.stringify(n)),N(n)}c.a.useEffect((function(){f&&"host"==f.type&&(j(!0),d.a.get("https://run.mocky.io/v3/12e8811b-5d7b-4d23-ad10-7b9ecaf7fe8f").then((function(e){j(!1);var t=[];JSON.parse(localStorage.getItem("Bookings"))?t=JSON.parse(localStorage.getItem("Bookings")):(localStorage.setItem("Bookings",JSON.stringify(e.data.Bookings)),N(e.data.Bookings));var n=e.data.Bookings;if(t&&t.length>0){for(var a=t,c=0,s=0;s<n.length;s++){c=0;for(var i=0;i<t.length;i++)if(t[i].id==n[s].id){c=1;break}0==c&&a.push(n[s])}localStorage.setItem("Bookings",JSON.stringify(a)),N(a)}})).catch((function(e){j(!1),L(!0)})))}),[f]),c.a.useEffect((function(){f&&"guest"==f.type&&(j(!0),d.a.get("https://run.mocky.io/v3/e28a2450-fa40-4850-bb2c-d39868dd187e").then((function(e){j(!1),a(e.data.Villas)})).catch((function(e){j(!1),L(!0)})))}),[f]);var E=null;return n&&"guest"==f.type?E=n.map((function(e){return Object(u.jsx)(g,{bookVillaForGuest:R,villa:e},e.name)})):"host"==f.type&&(E=y.map((function(e){return Object(u.jsx)(g,{origin:"host",acceptBooking:P,booking:e},e.id)}))),Object(u.jsx)("div",{children:f&&"guest"==f.type||"host"==f.type?Object(u.jsxs)("div",{className:S.a.cardContainer,children:[r?Object(u.jsx)("div",{children:"Loading....."}):"",A?Object(u.jsx)("div",{children:"Error Occurred :("}):"",E,w?Object(u.jsx)(p,{isOpen:w,setOpen:B,user:f,villa:x}):""]}):Object(u.jsx)(o.a,{to:"/"})})},C=(n(65),n(17)),y=n.n(C),N=n(32),_=n.n(N);var I=function(e){var t=e.origin,n=c.a.useContext(b),a=Object(l.a)(n,2),s=a[0],i=a[1],r=c.a.useState(""),j=Object(l.a)(r,2),d=j[0],h=j[1],O=c.a.useState(!1),x=Object(l.a)(O,2),g=x[0],m=x[1],v=c.a.useState(!1),p=Object(l.a)(v,2),f=p[0],S=p[1],k=c.a.useState(""),C=Object(l.a)(k,2),y=C[0],N=C[1],I=Object(o.g)();return c.a.useEffect((function(){s&&I.push("/home")}),[s]),Object(u.jsxs)("div",{className:_.a.login,children:[Object(u.jsxs)("div",{children:[Object(u.jsxs)("label",{children:[f?"New ":"","Username"]}),Object(u.jsx)("input",{type:"text",placeholder:"Enter username",value:d,onChange:function(e){return h(e.target.value)}})]}),Object(u.jsxs)("div",{children:["  ",Object(u.jsxs)("label",{children:[f?"New ":"","Password"]})," ",Object(u.jsx)("input",{type:"password",placeholder:"Enter password",value:y,onChange:function(e){return N(e.target.value)}})]}),Object(u.jsx)("button",{disabled:f,onClick:function(){var e=JSON.parse(localStorage.getItem("".concat(d)));e?e.password==y&&(i(e),m(!1)):m(!0)},children:"Login"}),f?Object(u.jsx)("button",{onClick:function(){var e={name:d,password:y,type:t};localStorage.setItem("".concat(d),JSON.stringify(e)),S(!1),h(""),N("")},children:"Create Account"}):"",f?"":Object(u.jsx)("button",{onClick:function(){return S(!0)},children:"Sign Up"}),g?Object(u.jsx)("div",{style:{color:"red"},children:"Incorrect Creds..."}):""]})};var w=function(){return Object(u.jsxs)("div",{className:y.a.login,children:[Object(u.jsxs)("div",{className:y.a.card,children:["Guests",Object(u.jsx)(I,{origin:"guest"})]}),Object(u.jsxs)("div",{className:y.a.card,children:["Hosts",Object(u.jsx)(I,{origin:"host"})]})]})};var B=function(){var e=c.a.useContext(b),t=Object(l.a)(e,1)[0],n=c.a.useState([]),a=Object(l.a)(n,2),s=a[0],i=a[1];return c.a.useEffect((function(){var e=(JSON.parse(localStorage.getItem("Bookings"))||[]).filter((function(e){return e.user!=t}));i(e)}),[]),Object(u.jsx)("div",{className:S.a.cardContainer,children:t?s.length>0?s.map((function(e,t){return Object(u.jsx)(g,{booking:e},t)})):Object(u.jsx)("div",{children:"No Bookings done by you yet !!"}):Object(u.jsx)(o.a,{to:"/"})})},D=n(13),J=n.n(D),A=n.p+"static/media/makemytrip_logo.9295d077.png";var L=function(){var e=c.a.useContext(b),t=Object(l.a)(e,2),n=t[0],a=t[1];return Object(u.jsxs)("header",{className:J.a.header,children:[Object(u.jsxs)("div",{children:["Go MMT Villa Booking",Object(u.jsx)("img",{src:A,alt:"logo",style:{width:"25px",height:"25px"}})]}),n?Object(u.jsxs)("div",{style:{display:"flex",marginRight:"10px"},children:[n&&"guest"==n.type?Object(u.jsx)("div",{style:{marginRight:"5px"},children:Object(u.jsx)(r.b,{to:"/home/bookings",className:J.a.nav,exact:!0,activeClassName:J.a.navLinkActive,children:"My Bookings"})}):"",Object(u.jsx)("div",{style:{marginRight:"5px"},children:Object(u.jsxs)(r.b,{to:"/home",className:J.a.nav,exact:!0,activeClassName:J.a.navLinkActive,children:[n.name,"(",n.type,")"]})}),Object(u.jsx)("button",{onClick:function(){return a("")},children:"\u2796Logout"})]}):""]})};var R=function(){return Object(u.jsx)(h,{children:Object(u.jsxs)("div",{className:"App",children:[Object(u.jsx)(L,{}),Object(u.jsx)("div",{className:"main",children:Object(u.jsxs)(o.d,{children:[Object(u.jsx)(o.b,{path:"/home/bookings",exact:!0,component:B}),Object(u.jsx)(o.b,{path:"/home",exact:!0,component:k}),Object(u.jsx)(o.b,{path:"/",exact:!0,component:w})]})})]})})},P=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,67)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,s=t.getLCP,i=t.getTTFB;n(e),a(e),c(e),s(e),i(e)}))};i.a.render(Object(u.jsx)(c.a.StrictMode,{children:Object(u.jsx)(r.a,{children:Object(u.jsx)(R,{})})}),document.getElementById("root")),P()},9:function(e,t,n){e.exports={card:"Card_card__356l6",info:"Card_info__3weM8",infoSmall:"Card_infoSmall__2JA21"}}},[[66,1,2]]]);
//# sourceMappingURL=main.483d80e1.chunk.js.map