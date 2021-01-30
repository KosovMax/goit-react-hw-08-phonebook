(this["webpackJsonpgoit-react-hw-08-phonebook"]=this["webpackJsonpgoit-react-hw-08-phonebook"]||[]).push([[6],{109:function(e,a,t){"use strict";t.d(a,"a",(function(){return l}));var r=t(47);function l(e,a){return function(e){if(Array.isArray(e))return e}(e)||function(e,a){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e)){var t=[],r=!0,l=!1,i=void 0;try{for(var s,o=e[Symbol.iterator]();!(r=(s=o.next()).done)&&(t.push(s.value),!a||t.length!==a);r=!0);}catch(n){l=!0,i=n}finally{try{r||null==o.return||o.return()}finally{if(l)throw i}}return t}}(e,a)||Object(r.a)(e,a)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},112:function(e,a,t){"use strict";var r=t(1),l=t(3),i=t(5),s=t.n(i),o=t(0),n=t.n(o),c=(t(64),t(26)),d=t.n(c),m={type:d.a.string,tooltip:d.a.bool,as:d.a.elementType},b=n.a.forwardRef((function(e,a){var t=e.as,i=void 0===t?"div":t,o=e.className,c=e.type,d=void 0===c?"valid":c,m=e.tooltip,b=void 0!==m&&m,u=Object(l.a)(e,["as","className","type","tooltip"]);return n.a.createElement(i,Object(r.a)({},u,{ref:a,className:s()(o,d+"-"+(b?"tooltip":"feedback"))}))}));b.displayName="Feedback",b.propTypes=m;var u=b,f=n.a.createContext({controlId:void 0}),v=t(7),p=n.a.forwardRef((function(e,a){var t=e.id,i=e.bsPrefix,c=e.bsCustomPrefix,d=e.className,m=e.type,b=void 0===m?"checkbox":m,u=e.isValid,p=void 0!==u&&u,j=e.isInvalid,O=void 0!==j&&j,x=e.isStatic,y=e.as,h=void 0===y?"input":y,N=Object(l.a)(e,["id","bsPrefix","bsCustomPrefix","className","type","isValid","isInvalid","isStatic","as"]),P=Object(o.useContext)(f),w=P.controlId,I=P.custom?[c,"custom-control-input"]:[i,"form-check-input"],C=I[0],E=I[1];return i=Object(v.a)(C,E),n.a.createElement(h,Object(r.a)({},N,{ref:a,type:b,id:t||w,className:s()(d,i,p&&"is-valid",O&&"is-invalid",x&&"position-static")}))}));p.displayName="FormCheckInput";var j=p,O=n.a.forwardRef((function(e,a){var t=e.bsPrefix,i=e.bsCustomPrefix,c=e.className,d=e.htmlFor,m=Object(l.a)(e,["bsPrefix","bsCustomPrefix","className","htmlFor"]),b=Object(o.useContext)(f),u=b.controlId,p=b.custom?[i,"custom-control-label"]:[t,"form-check-label"],j=p[0],O=p[1];return t=Object(v.a)(j,O),n.a.createElement("label",Object(r.a)({},m,{ref:a,htmlFor:d||u,className:s()(c,t)}))}));O.displayName="FormCheckLabel";var x=O,y=n.a.forwardRef((function(e,a){var t=e.id,i=e.bsPrefix,c=e.bsCustomPrefix,d=e.inline,m=void 0!==d&&d,b=e.disabled,p=void 0!==b&&b,O=e.isValid,y=void 0!==O&&O,h=e.isInvalid,N=void 0!==h&&h,P=e.feedbackTooltip,w=void 0!==P&&P,I=e.feedback,C=e.className,E=e.style,F=e.title,g=void 0===F?"":F,k=e.type,R=void 0===k?"checkbox":k,S=e.label,V=e.children,L=e.custom,T=e.as,z=void 0===T?"input":T,A=Object(l.a)(e,["id","bsPrefix","bsCustomPrefix","inline","disabled","isValid","isInvalid","feedbackTooltip","feedback","className","style","title","type","label","children","custom","as"]),G="switch"===R||L,M=G?[c,"custom-control"]:[i,"form-check"],B=M[0],J=M[1];i=Object(v.a)(B,J);var D=Object(o.useContext)(f).controlId,U=Object(o.useMemo)((function(){return{controlId:t||D,custom:G}}),[D,G,t]),q=G||null!=S&&!1!==S&&!V,H=n.a.createElement(j,Object(r.a)({},A,{type:"switch"===R?"checkbox":R,ref:a,isValid:y,isInvalid:N,isStatic:!q,disabled:p,as:z}));return n.a.createElement(f.Provider,{value:U},n.a.createElement("div",{style:E,className:s()(C,i,G&&"custom-"+R,m&&i+"-inline")},V||n.a.createElement(n.a.Fragment,null,H,q&&n.a.createElement(x,{title:g},S),(y||N)&&n.a.createElement(u,{type:y?"valid":"invalid",tooltip:w},I))))}));y.displayName="FormCheck",y.Input=j,y.Label=x;var h=y,N=n.a.forwardRef((function(e,a){var t=e.id,i=e.bsPrefix,c=e.bsCustomPrefix,d=e.className,m=e.isValid,b=e.isInvalid,u=e.lang,p=e.as,j=void 0===p?"input":p,O=Object(l.a)(e,["id","bsPrefix","bsCustomPrefix","className","isValid","isInvalid","lang","as"]),x=Object(o.useContext)(f),y=x.controlId,h=x.custom?[c,"custom-file-input"]:[i,"form-control-file"],N=h[0],P=h[1];return i=Object(v.a)(N,P),n.a.createElement(j,Object(r.a)({},O,{ref:a,id:t||y,type:"file",lang:u,className:s()(d,i,m&&"is-valid",b&&"is-invalid")}))}));N.displayName="FormFileInput";var P=N,w=n.a.forwardRef((function(e,a){var t=e.bsPrefix,i=e.bsCustomPrefix,c=e.className,d=e.htmlFor,m=Object(l.a)(e,["bsPrefix","bsCustomPrefix","className","htmlFor"]),b=Object(o.useContext)(f),u=b.controlId,p=b.custom?[i,"custom-file-label"]:[t,"form-file-label"],j=p[0],O=p[1];return t=Object(v.a)(j,O),n.a.createElement("label",Object(r.a)({},m,{ref:a,htmlFor:d||u,className:s()(c,t),"data-browse":m["data-browse"]}))}));w.displayName="FormFileLabel";var I=w,C=n.a.forwardRef((function(e,a){var t=e.id,i=e.bsPrefix,c=e.bsCustomPrefix,d=e.disabled,m=void 0!==d&&d,b=e.isValid,p=void 0!==b&&b,j=e.isInvalid,O=void 0!==j&&j,x=e.feedbackTooltip,y=void 0!==x&&x,h=e.feedback,N=e.className,w=e.style,C=e.label,E=e.children,F=e.custom,g=e.lang,k=e["data-browse"],R=e.as,S=void 0===R?"div":R,V=e.inputAs,L=void 0===V?"input":V,T=Object(l.a)(e,["id","bsPrefix","bsCustomPrefix","disabled","isValid","isInvalid","feedbackTooltip","feedback","className","style","label","children","custom","lang","data-browse","as","inputAs"]),z=F?[c,"custom"]:[i,"form-file"],A=z[0],G=z[1];i=Object(v.a)(A,G);var M=Object(o.useContext)(f).controlId,B=Object(o.useMemo)((function(){return{controlId:t||M,custom:F}}),[M,F,t]),J=null!=C&&!1!==C&&!E,D=n.a.createElement(P,Object(r.a)({},T,{ref:a,isValid:p,isInvalid:O,disabled:m,as:L,lang:g}));return n.a.createElement(f.Provider,{value:B},n.a.createElement(S,{style:w,className:s()(N,i,F&&"custom-file")},E||n.a.createElement(n.a.Fragment,null,F?n.a.createElement(n.a.Fragment,null,D,J&&n.a.createElement(I,{"data-browse":k},C)):n.a.createElement(n.a.Fragment,null,J&&n.a.createElement(I,null,C),D),(p||O)&&n.a.createElement(u,{type:p?"valid":"invalid",tooltip:y},h))))}));C.displayName="FormFile",C.Input=P,C.Label=I;var E=C,F=(t(65),n.a.forwardRef((function(e,a){var t,i,c=e.bsPrefix,d=e.bsCustomPrefix,m=e.type,b=e.size,u=e.htmlSize,p=e.id,j=e.className,O=e.isValid,x=void 0!==O&&O,y=e.isInvalid,h=void 0!==y&&y,N=e.plaintext,P=e.readOnly,w=e.custom,I=e.as,C=void 0===I?"input":I,E=Object(l.a)(e,["bsPrefix","bsCustomPrefix","type","size","htmlSize","id","className","isValid","isInvalid","plaintext","readOnly","custom","as"]),F=Object(o.useContext)(f).controlId,g=w?[d,"custom"]:[c,"form-control"],k=g[0],R=g[1];if(c=Object(v.a)(k,R),N)(i={})[c+"-plaintext"]=!0,t=i;else if("file"===m){var S;(S={})[c+"-file"]=!0,t=S}else if("range"===m){var V;(V={})[c+"-range"]=!0,t=V}else if("select"===C&&w){var L;(L={})[c+"-select"]=!0,L[c+"-select-"+b]=b,t=L}else{var T;(T={})[c]=!0,T[c+"-"+b]=b,t=T}return n.a.createElement(C,Object(r.a)({},E,{type:m,size:u,ref:a,readOnly:P,id:p||F,className:s()(j,t,x&&"is-valid",h&&"is-invalid")}))})));F.displayName="FormControl";var g=Object.assign(F,{Feedback:u}),k=n.a.forwardRef((function(e,a){var t=e.bsPrefix,i=e.className,c=e.children,d=e.controlId,m=e.as,b=void 0===m?"div":m,u=Object(l.a)(e,["bsPrefix","className","children","controlId","as"]);t=Object(v.a)(t,"form-group");var p=Object(o.useMemo)((function(){return{controlId:d}}),[d]);return n.a.createElement(f.Provider,{value:p},n.a.createElement(b,Object(r.a)({},u,{ref:a,className:s()(i,t)}),c))}));k.displayName="FormGroup";var R=k,S=t(101),V=n.a.forwardRef((function(e,a){var t=e.as,i=void 0===t?"label":t,c=e.bsPrefix,d=e.column,m=e.srOnly,b=e.className,u=e.htmlFor,p=Object(l.a)(e,["as","bsPrefix","column","srOnly","className","htmlFor"]),j=Object(o.useContext)(f).controlId;c=Object(v.a)(c,"form-label");var O="col-form-label";"string"===typeof d&&(O=O+" "+O+"-"+d);var x=s()(b,c,m&&"sr-only",d&&O);return u=u||j,d?n.a.createElement(S.a,Object(r.a)({as:"label",className:x,htmlFor:u},p)):n.a.createElement(i,Object(r.a)({ref:a,className:x,htmlFor:u},p))}));V.displayName="FormLabel",V.defaultProps={column:!1,srOnly:!1};var L=V,T=n.a.forwardRef((function(e,a){var t=e.bsPrefix,i=e.className,o=e.as,c=void 0===o?"small":o,d=e.muted,m=Object(l.a)(e,["bsPrefix","className","as","muted"]);return t=Object(v.a)(t,"form-text"),n.a.createElement(c,Object(r.a)({},m,{ref:a,className:s()(i,t,d&&"text-muted")}))}));T.displayName="FormText";var z=T,A=n.a.forwardRef((function(e,a){return n.a.createElement(h,Object(r.a)({},e,{ref:a,type:"switch"}))}));A.displayName="Switch",A.Input=h.Input,A.Label=h.Label;var G=A,M=t(49),B=Object(M.a)("form-row"),J=n.a.forwardRef((function(e,a){var t=e.bsPrefix,i=e.inline,o=e.className,c=e.validated,d=e.as,m=void 0===d?"form":d,b=Object(l.a)(e,["bsPrefix","inline","className","validated","as"]);return t=Object(v.a)(t,"form"),n.a.createElement(m,Object(r.a)({},b,{ref:a,className:s()(o,c&&"was-validated",i&&t+"-inline")}))}));J.displayName="Form",J.defaultProps={inline:!1},J.Row=B,J.Group=R,J.Control=g,J.Check=h,J.File=E,J.Switch=G,J.Label=L,J.Text=z;a.a=J},119:function(e,a,t){"use strict";t.r(a),t.d(a,"default",(function(){return f}));var r=t(2),l=t(6),i=t(22),s=t(109),o=t(0),n=t(112),c=t(103),d=t(10),m=t(11),b={name:"",email:"",password:""};var u={onRegister:m.a.register},f=Object(d.b)(null,u)((function(e){var a=e.onRegister,t=Object(o.useState)(Object(i.a)({},b)),d=Object(s.a)(t,2),m=d[0],u=d[1],f=m.name,v=m.email,p=m.password,j=function(e){var a=e.target,t=a.name,r=a.value;u((function(e){return Object(i.a)(Object(i.a)({},e),{},Object(l.a)({},t,r))}))};return Object(r.jsxs)(n.a,{className:"formInput",onSubmit:function(e){e.preventDefault(),a(m),u(b)},children:[Object(r.jsx)("h3",{style:{textAlign:"center"},children:"Register"}),Object(r.jsxs)(n.a.Group,{controlId:"formName",children:[Object(r.jsx)(n.a.Label,{children:"Name"}),Object(r.jsx)(n.a.Control,{type:"text",placeholder:"Enter name",name:"name",value:f,onChange:j})]}),Object(r.jsxs)(n.a.Group,{controlId:"formBasicEmail",children:[Object(r.jsx)(n.a.Label,{children:"Email"}),Object(r.jsx)(n.a.Control,{type:"email",placeholder:"Enter email",name:"email",value:v,onChange:j})]}),Object(r.jsxs)(n.a.Group,{controlId:"formBasicPassword",children:[Object(r.jsx)(n.a.Label,{children:"Password"}),Object(r.jsx)(n.a.Control,{type:"password",placeholder:"Password",name:"password",value:p,onChange:j})]}),Object(r.jsx)(c.a,{variant:"primary",type:"submit",style:{margin:"auto",display:"block"},children:"Sign Up"})]})}))}}]);
//# sourceMappingURL=6.7e7c9841.chunk.js.map