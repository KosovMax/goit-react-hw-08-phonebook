(this["webpackJsonpgoit-react-hw-08-phonebook"]=this["webpackJsonpgoit-react-hw-08-phonebook"]||[]).push([[0],{100:function(e,t,n){"use strict";n.r(t);var r=n(2),c=n(0),a=n(21),o=n.n(a),u=n(10),s=n(16),i={home:"/",contacts:"/contacts",register:"/register",login:"/login"},b=n(11);var j=Object(u.b)((function(e){return{isAuthenticated:b.c.getIsAuthenticated(e)}}))((function(e){var t=e.isAuthenticated;return console.log(i),Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(s.b,{exact:!0,to:i.home,className:"NavLink",activeClassName:"NavLink--active",children:"Home"}),t&&Object(r.jsx)(s.b,{to:i.contacts,className:"NavLink",activeClassName:"NavLink--active",children:"Contacts"})]})}));function l(){return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(s.b,{exact:!0,to:i.register,className:"NavLink",activeClassName:"NavLink--active",children:"Register"}),Object(r.jsx)(s.b,{to:i.login,className:"NavLink",activeClassName:"NavLink--active",children:"Login"})]})}var d=n(103),O=n(46),h=n.n(O),f=n.p+"static/media/avatar.a30d46b7.png";var g={onLogout:b.a.logout},p=Object(u.b)((function(e){return{getName:b.c.getAuthUserName(e)}}),g)((function(e){var t=e.getName,n=e.onLogout;return Object(r.jsxs)("div",{className:h.a.flex,children:[Object(r.jsx)("img",{src:f,className:h.a.avatar}),Object(r.jsxs)("b",{children:["Welcome, ",t]}),Object(r.jsx)(d.a,{variant:"primary",onClick:n,children:"Logout"})]})})),x=n(107),v=n(108);var m=Object(u.b)((function(e){return{isAuthenticated:b.c.getIsAuthenticated(e)}}))((function(e){var t=e.isAuthenticated;return Object(r.jsxs)(x.a,{expand:"lg",bg:"dark",variant:"dark",children:[Object(r.jsx)(x.a.Brand,{href:"/",children:"React 21+22"}),Object(r.jsx)(v.a,{className:"mr-auto",children:Object(r.jsx)(j,{})}),Object(r.jsx)(v.a,{children:t?Object(r.jsx)(p,{}):Object(r.jsx)(l,{})})]})})),k=n(8),C=n(104);function y(){return Object(r.jsxs)("div",{style:{width:"100%",height:"150px",display:"flex",alignItems:"center",justifyContent:"center"},children:[Object(r.jsx)("h2",{style:{marginRight:"15px"},children:"Loading"}),Object(r.jsx)(C.a,{animation:"border",role:"status"})]})}var N=n(105),S=n(106),A=n(101),E=n(22),U=n(37),R=function(e){var t=e.component,n=e.isAuthenticated,c=e.redirectTo,a=Object(U.a)(e,["component","isAuthenticated","redirectTo"]);return Object(r.jsx)(k.b,Object(E.a)(Object(E.a)({},a),{},{render:function(e){return n?Object(r.jsx)(t,Object(E.a)({},e)):Object(r.jsx)(k.a,{to:c})}}))};R.defaultProps={redirectTo:"/"};var q=Object(u.b)((function(e){return{isAuthenticated:b.c.getIsAuthenticated(e)}}))(R),w=function(e){var t=e.component,n=e.isAuthenticated,c=e.redirectTo,a=Object(U.a)(e,["component","isAuthenticated","redirectTo"]);return Object(r.jsx)(k.b,Object(E.a)(Object(E.a)({},a),{},{render:function(e){return n&&a.restricted?Object(r.jsx)(k.a,{to:c}):Object(r.jsx)(t,Object(E.a)({},e))}}))};w.defaultProps={redirectTo:"/"};var L=Object(u.b)((function(e){return{isAuthenticated:b.c.getIsAuthenticated(e)}}))(w),T=Object(c.lazy)((function(){return n.e(7).then(n.bind(null,120))})),z=Object(c.lazy)((function(){return Promise.all([n.e(3),n.e(4)]).then(n.bind(null,116))})),I=Object(c.lazy)((function(){return n.e(6).then(n.bind(null,119))})),_=Object(c.lazy)((function(){return n.e(5).then(n.bind(null,118))})),P=Object(c.lazy)((function(){return n.e(8).then(n.bind(null,117))}));var B={getCurrentUser:b.a.getCurrentUser},F=Object(u.b)(null,B)((function(e){var t=e.getCurrentUser;return Object(c.useEffect)((function(){console.log("update app"),t()}),[]),Object(r.jsx)(N.a,{children:Object(r.jsx)(S.a,{children:Object(r.jsxs)(A.a,{children:[Object(r.jsx)(m,{}),Object(r.jsx)("section",{children:Object(r.jsx)(c.Suspense,{fallback:Object(r.jsx)(y,{}),children:Object(r.jsxs)(k.d,{children:[Object(r.jsx)(L,{exact:!0,path:i.home,component:T}),Object(r.jsx)(q,{path:i.contacts,component:z,redirectTo:i.login}),Object(r.jsx)(L,{path:i.register,component:I,restricted:!0,redirectTo:i.contacts}),Object(r.jsx)(L,{path:i.login,component:_,restricted:!0,redirectTo:i.contacts}),Object(r.jsx)(L,{component:P})]})})})]})})})})),M=n(36),J=n(4),H=n(48),V=n(61),W=n.n(V),D=n(62),G=n.n(D),K=n(20),Q=[].concat(Object(M.a)(Object(J.d)({serializableCheck:{ignoredActions:[K.a,K.f,K.b,K.c,K.d,K.e]}})),[G.a]),X={key:"auth",storage:W.a,whitelist:["token"]},Y=Object(J.a)({reducer:{auth:Object(K.g)(X,b.b),phonebook:H.a},middleware:Q,devTools:!1}),Z={store:Y,persistor:Object(K.h)(Y)},$=n(63);n(98),n(99);o.a.render(Object(r.jsx)(u.a,{store:Z.store,children:Object(r.jsx)($.a,{loading:null,persistor:Z.persistor,children:Object(r.jsx)(s.a,{children:Object(r.jsx)(F,{})})})}),document.querySelector("#root"))},11:function(e,t,n){"use strict";n.d(t,"b",(function(){return f})),n.d(t,"a",(function(){return y})),n.d(t,"c",(function(){return N}));var r,c,a,o=n(4),u={registerRequest:Object(o.b)("auth/registerRequest"),registerSuccess:Object(o.b)("auth/registerSuccess"),registerError:Object(o.b)("auth/registerError"),loginRequest:Object(o.b)("auth/loginRequest"),loginSuccess:Object(o.b)("auth/loginSuccess"),loginError:Object(o.b)("auth/loginError"),logoutRequest:Object(o.b)("auth/logoutRequest"),logoutSuccess:Object(o.b)("auth/logoutSuccess"),logoutError:Object(o.b)("auth/logoutError"),getCurrentUserRequest:Object(o.b)("auth/getCurrentUserRequest"),getCurrentUserSuccess:Object(o.b)("auth/getCurrentUserSuccess"),getCurrentUserError:Object(o.b)("auth/getCurrentUserError")},s=n(6),i=n(17),b={name:null,email:null},j=Object(o.c)(b,(r={},Object(s.a)(r,u.registerSuccess,(function(e,t){return t.payload.user})),Object(s.a)(r,u.loginSuccess,(function(e,t){return t.payload.user})),Object(s.a)(r,u.logoutSuccess,(function(){return b})),Object(s.a)(r,u.getCurrentUserSuccess,(function(e,t){return t.payload})),r)),l=Object(o.c)(null,(c={},Object(s.a)(c,u.registerSuccess,(function(e,t){return t.payload.token})),Object(s.a)(c,u.loginSuccess,(function(e,t){return t.payload.token})),Object(s.a)(c,u.logoutSuccess,(function(){return null})),c)),d=function(e,t){return t.payload},O=Object(o.c)(null,(a={},Object(s.a)(a,u.registerError,d),Object(s.a)(a,u.loginError,d),Object(s.a)(a,u.logoutError,d),Object(s.a)(a,u.getCurrentUserError,d),a)),h=Object(o.c)(!1,{}),f=Object(i.b)({user:j,isAuthenticated:h,token:l,error:O}),g=n(19),p=n.n(g),x=n(30),v=n(24),m=n.n(v);m.a.defaults.baseURL="https://goit-phonebook-api.herokuapp.com";var k=function(e){m.a.defaults.headers.common.Authorization="Bearer ".concat(e)},C=function(){m.a.defaults.headers.common.Authorization=""},y={register:function(e){return function(){var t=Object(x.a)(p.a.mark((function t(n){var r;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n(u.registerRequest()),t.prev=1,t.next=4,m.a.post("/users/signup",e);case 4:r=t.sent,k(r.data.token),n(u.registerSuccess(r.data)),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(1),n(u.registerError(t.t0.message));case 12:case"end":return t.stop()}}),t,null,[[1,9]])})));return function(e){return t.apply(this,arguments)}}()},login:function(e){return function(){var t=Object(x.a)(p.a.mark((function t(n){var r;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n(u.loginRequest()),t.prev=1,t.next=4,m.a.post("/users/login",e);case 4:r=t.sent,k(r.data.token),n(u.loginSuccess(r.data)),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(1),n(u.loginError(t.t0.message));case 12:case"end":return t.stop()}}),t,null,[[1,9]])})));return function(e){return t.apply(this,arguments)}}()},logout:function(){return function(){var e=Object(x.a)(p.a.mark((function e(t){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t(u.logoutRequest()),e.prev=1,e.next=4,m.a.post("/users/logout");case 4:C(),t(u.logoutSuccess()),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),t(u.logoutError(e.t0.message));case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t){return e.apply(this,arguments)}}()},getCurrentUser:function(){return function(){var e=Object(x.a)(p.a.mark((function e(t,n){var r,c,a;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(console.log(n()),r=n(),c=r.auth.token){e.next=4;break}return e.abrupt("return");case 4:return k(c),t(u.getCurrentUserRequest()),e.prev=6,e.next=9,m.a.get("/users/current");case 9:a=e.sent,t(u.getCurrentUserSuccess(a.data)),e.next=16;break;case 13:e.prev=13,e.t0=e.catch(6),t(u.getCurrentUserError(e.t0.message));case 16:case"end":return e.stop()}}),e,null,[[6,13]])})));return function(t,n){return e.apply(this,arguments)}}()}},N=(n(10),{getIsAuthenticated:function(e){return Boolean(e.auth.token)},getAuthUserName:function(e){return e.auth.user.name}})},12:function(e,t,n){"use strict";n.d(t,"i",(function(){return c})),n.d(t,"j",(function(){return a})),n.d(t,"h",(function(){return o})),n.d(t,"b",(function(){return u})),n.d(t,"c",(function(){return s})),n.d(t,"a",(function(){return i})),n.d(t,"f",(function(){return b})),n.d(t,"g",(function(){return j})),n.d(t,"e",(function(){return l})),n.d(t,"d",(function(){return d}));var r=n(4),c=Object(r.b)("phonebook/fetchContactRequest"),a=Object(r.b)("phonebook/fetchContactSuccess"),o=Object(r.b)("phonebook/fetchContactError"),u=Object(r.b)("phonebook/addContactRequest"),s=Object(r.b)("phonebook/addContactSuccess"),i=Object(r.b)("phonebook/addContactError"),b=(Object(r.b)("phonebook/findContactName"),Object(r.b)("phonebook/deleteContactRequest")),j=Object(r.b)("phonebook/deleteContactSuccess"),l=Object(r.b)("phonebook/deleteContactError"),d=Object(r.b)("phonebook/changeFilter")},46:function(e,t,n){e.exports={flex:"UserMenu_flex__3rPxM",avatar:"UserMenu_avatar__3LwnV"}},48:function(e,t,n){"use strict";var r,c,a=n(6),o=n(36),u=n(4),s=n(17),i=n(12),b=Object(u.c)([],(r={},Object(a.a)(r,i.j,(function(e,t){return t.payload})),Object(a.a)(r,i.c,(function(e,t){var n=t.payload;return[].concat(Object(o.a)(e),[n])})),Object(a.a)(r,i.g,(function(e,t){var n=t.payload;return e.filter((function(e){return e.id!==n}))})),r)),j=Object(u.c)("",Object(a.a)({},i.d,(function(e,t){return t.payload}))),l=Object(u.c)(!1,(c={},Object(a.a)(c,i.i,(function(){return!0})),Object(a.a)(c,i.j,(function(){return!1})),Object(a.a)(c,i.h,(function(){return!1})),Object(a.a)(c,i.b,(function(){return!0})),Object(a.a)(c,i.c,(function(){return!1})),Object(a.a)(c,i.a,(function(){return!1})),Object(a.a)(c,i.f,(function(){return!0})),Object(a.a)(c,i.g,(function(){return!1})),Object(a.a)(c,i.e,(function(){return!1})),c));t.a=Object(s.b)({contacts:b,filter:j,loading:l})},98:function(e,t,n){}},[[100,1,2]]]);
//# sourceMappingURL=main.095da3fa.chunk.js.map