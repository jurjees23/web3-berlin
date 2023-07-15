/*! For license information please see 766.d1c6fc47.chunk.js.LICENSE.txt */
(self.webpackChunkxipay_web=self.webpackChunkxipay_web||[]).push([[766],{72106:function(e,a,s){"use strict";s(76870);var n=s(37250),i=s.n(n),t=s(52516),r=function(e){var a=e.name,s=e.placeholder,n=e.value,r=e.label,l=e.error,c=e.info,o=e.type,d=e.onChange,m=e.disabled,u=(e.forgotView,e.forgotLink,e.isRequired),h=e.id;return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)("label",{lassName:"form-label ",children:[r," ",(0,t.jsx)("small",{children:u&&"*"})]}),(0,t.jsx)("input",{type:o,id:h,className:i()("form-control",{"is-invalid":l}),placeholder:s,value:n,onChange:d,name:a,disabled:m}),c&&(0,t.jsx)("small",{className:"form-text text-muted",children:c}),l&&(0,t.jsx)("div",{className:"invalid-feedback text-left text-danger",children:l})]})};r.defaultProps={type:"text"},a.Z=r},95573:function(e,a,s){"use strict";s.d(a,{Z:function(){return x}});var n=s(76870),i=s(26863),t=s(99033),r=s(79428),l=s(22667),c=s(49111),o=s(69935),d=s(5779),m=s(44953),u=s(52516),h=function(e){e.children;var a=(0,r.TH)().key;(0,n.useEffect)((function(){return(0,c.Z)("./assets/js/vendor.min.js"),(0,c.Z)("./assets/js/theme.min.js"),function(){(0,o.Z)("./assets/js/vendor.min.js"),(0,o.Z)("./assets/js/theme.min.js")}}),[a]);var s=(0,t.I0)(),h=(0,t.v9)((function(e){return e.auth})).user,p=[{name:"Dashboard",link:"/user/dashboard",icon:(0,u.jsx)("i",{"data-feather":"pie-chart"})},{name:"Invoices",link:"/user/invoice",icon:(0,u.jsx)("i",{"data-feather":"file"})},{name:"QR Payments",link:"/user/qrpayments",icon:(0,u.jsx)("i",{"data-feather":"camera"})},{name:"Web Payments",link:"/user/webpayment",icon:(0,u.jsx)("i",{"data-feather":"shopping-bag"})},{name:"API Keys",link:"/user/setting/apikey",icon:(0,u.jsx)("i",{"data-feather":"send"})}],x=window.location.pathname,v=p.map((function(e){var a;return x===e.link&&(a="active"),(0,u.jsx)("li",{className:"nav-item pe-3",children:(0,u.jsx)(l.rU,{className:"nav-link ".concat(a),to:e.link,children:(0,u.jsxs)("div",{className:"d-flex align-items-center",children:[(0,u.jsx)("span",{className:"icon-xs me-1 flex-shrink-0",children:e.icon}),(0,u.jsx)("div",{className:"flex-grow-1",children:e.name})]})})})})),f="../../assets/images/avatars/img-8.jpg";return h.photo&&(f=h.photo),(0,u.jsx)("header",{children:(0,u.jsx)("nav",{className:"navbar navbar-expand-lg topnav-menu navbar-light shadow",children:(0,u.jsxs)("div",{className:"container",children:[(0,u.jsx)("a",{className:"navbar-brand me-lg-3 me-auto",href:"/",children:(0,u.jsx)("img",{src:"./assets/images/logo.png",height:30,className:"d-inline-block align-top",alt:""})}),(0,u.jsx)("a",{href:"#",className:"navbar-toggler me-3","data-bs-toggle":"collapse","data-bs-target":"#topnav-menu-content4","aria-controls":"topnav-menu-content4","aria-expanded":"false","aria-label":"Toggle navigation",children:(0,u.jsx)("span",{className:"navbar-toggler-icon"})}),(0,u.jsxs)("div",{className:"collapse navbar-collapse",id:"topnav-menu-content4",children:[(0,u.jsx)("ul",{className:"navbar-nav mx-auto",children:v}),(0,u.jsxs)("ul",{className:"navbar-nav align-items-center",children:[(0,u.jsxs)("li",{className:"nav-item dropdown",children:[(0,u.jsx)("a",{className:"nav-link dropdown-toggle",href:"#",id:"notifications",role:"button","data-bs-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false",children:(0,u.jsx)("span",{className:"icon-xs",children:(0,u.jsxs)("svg",{width:"24px",height:"24px",viewBox:"0 0 24 24",version:"1.1",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",children:[(0,u.jsx)("title",{children:"Stockholm-icons / General / Notification#2"}),(0,u.jsx)("desc",{children:"Created with Sketch."}),(0,u.jsxs)("g",{id:"Stockholm-icons-/-General-/-Notification#2",stroke:"none",strokeWidth:1,fill:"none",fillRule:"evenodd",children:[(0,u.jsx)("rect",{id:"bound",x:0,y:0,width:24,height:24}),(0,u.jsx)("path",{d:"M13.2070325,4 C13.0721672,4.47683179 13,4.97998812 13,5.5 C13,8.53756612 15.4624339,11 18.5,11 C19.0200119,11 19.5231682,10.9278328 20,10.7929675 L20,17 C20,18.6568542 18.6568542,20 17,20 L7,20 C5.34314575,20 4,18.6568542 4,17 L4,7 C4,5.34314575 5.34314575,4 7,4 L13.2070325,4 Z",id:"Combined-Shape",fill:"#335EEA"}),(0,u.jsx)("circle",{id:"Oval",fill:"#335EEA",opacity:"0.3",cx:"18.5",cy:"5.5",r:"2.5"})]})]})})}),(0,u.jsxs)("div",{className:"dropdown-menu p-2","aria-labelledby":"notifications",children:[(0,u.jsx)(l.rU,{className:"dropdown-item p-2",href:"/",children:"Apothem"}),(0,u.jsx)("a",{className:"dropdown-item p-2",href:"#",onClick:function(e){e.preventDefault(),d.aS.info("Mainnet will launch soon")},children:"Mainnet"})]})]}),(0,u.jsxs)("li",{className:"nav-item dropdown",children:[(0,u.jsx)("a",{className:"nav-link dropdown-toggle py-0",href:"#",id:"user",role:"button","data-bs-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false",children:(0,u.jsxs)("div",{className:"d-flex align-items-center",children:[(0,u.jsx)("div",{className:"flex-shrink-0",children:(0,u.jsx)("img",{src:f,className:"avatar avatar-xs rounded-circle me-2",alt:""})}),(0,u.jsxs)("div",{className:"flex-grow-1 ms-1 lh-base",children:[(0,u.jsx)("span",{className:"fw-semibold fs-13 d-block line-height-normal",children:h.firstName}),(0,u.jsx)("span",{className:"text-muted fs-13",children:h.walletAddress&&(0,m.Z)(h.walletAddress)})]})]})}),(0,u.jsxs)("div",{className:"dropdown-menu p-2","aria-labelledby":"user",children:[(0,u.jsxs)(l.rU,{to:"/user/setting",className:"dropdown-item p-2",children:[(0,u.jsx)("i",{className:"icon icon-xxs me-1 icon-dual","data-feather":"settings"}),"Settings"]}),(0,u.jsxs)(l.rU,{to:"/user/setting",onClick:function(e){e.preventDefault(),d.aS.info("Not available now")},className:"dropdown-item p-2",href:"#",children:[(0,u.jsx)("i",{className:"icon icon-xxs me-1 icon-dual","data-feather":"aperture"}),"Support"]}),(0,u.jsx)("div",{className:"dropdown-divider"}),(0,u.jsxs)(l.rU,{className:"dropdown-item p-2",to:"/logout",onClick:function(){s((0,i.TX)())},children:[(0,u.jsx)("i",{className:"icon icon-xxs me-1 icon-dual","data-feather":"unlock"}),"Sign Out"]})]})]})]})]})]})})})},p=function(){return(0,u.jsx)("section",{className:"section py-4 position-relative",children:(0,u.jsx)("div",{className:"container",children:(0,u.jsxs)("div",{className:"row align-items-center",children:[(0,u.jsx)("div",{className:"col",children:(0,u.jsxs)("ul",{className:"list-inline list-with-separator mb-0",children:[(0,u.jsx)("li",{className:"list-inline-item me-0",children:(0,u.jsx)("a",{href:"#",children:"About"})}),(0,u.jsx)("li",{className:"list-inline-item me-0",children:(0,u.jsx)("a",{href:"#",children:"Privacy"})}),(0,u.jsx)("li",{className:"list-inline-item me-0",children:(0,u.jsx)("a",{href:"#",children:"Terms"})}),(0,u.jsx)("li",{className:"list-inline-item me-0",children:(0,u.jsx)("a",{href:"#",children:"Developers"})}),(0,u.jsx)("li",{className:"list-inline-item me-0",children:(0,u.jsx)("a",{href:"#",children:"Support"})}),(0,u.jsx)("li",{className:"list-inline-item me-0",children:(0,u.jsxs)("a",{href:"#",children:["Careers"," ",(0,u.jsx)("span",{className:"align-middle badge badge-soft-info rounded-pill fw-normal fs-11 px-2 py-1",children:"We're hiring"})]})})]})}),(0,u.jsx)("div",{className:"col-md-auto text-md-end mt-2 mt-md-0",children:(0,u.jsxs)("p",{className:"fs-14 mb-0",children:[" ","\xa9 Xipay. All rights reserved."]})})]})})})},x=function(e){var a=e.children;return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(h,{}),a,(0,u.jsx)(p,{})]})}},84766:function(e,a,s){"use strict";s.r(a);var n=s(24611),i=s(19677),t=s(53755),r=s(23680),l=s(76870),c=s(95573),o=s(72106),d=s(8902),m=s(7733),u=s.n(m),h=s(5779),p=s(52516);a.default=function(){var e=(0,l.useRef)(null),a={},s=(0,l.useState)(a),m=(0,r.Z)(s,2),x=m[0],v=m[1],f=(0,l.useState)(a),g=(0,r.Z)(f,2),j=g[0],N=g[1],b=function(){var e=(0,t.Z)((0,n.Z)().mark((function e(a){var s,t,r;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(s=a.target.files[0],!a.target.files){e.next=15;break}return(t=new FormData).append("file",a.target.files[0]),t.append("filename",a.target.files[0].name),e.prev=5,e.next=8,(0,h.zd)(t);case 8:r=e.sent,v((0,i.Z)((0,i.Z)({},x),{},{qrLogo:r})),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(5),h.aS.failure("Error Ocuured in File Upload");case 15:console.log("Selected file:",s);case 16:case"end":return e.stop()}}),e,null,[[5,12]])})));return function(a){return e.apply(this,arguments)}}();(0,l.useEffect)((function(){w()}),[]);var w=function(){var e=(0,t.Z)((0,n.Z)().mark((function e(){var a;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return h.aY.standard(".qrpaymentsetting","Please wait... Don't Close"),e.prev=1,e.next=4,u().get(h.T5+"/api/usersetting/");case 4:a=e.sent,h.aY.remove(".qrpaymentsetting"),a.data&&v(a.data),e.next=13;break;case 9:e.prev=9,e.t0=e.catch(1),h.aY.remove(".qrpaymentsetting"),h.aS.failure("Error Ocuured in API");case 13:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(){return e.apply(this,arguments)}}(),y=function(){var e=(0,t.Z)((0,n.Z)().mark((function e(a){return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a.preventDefault(),h.aY.standard(".qrpaymentsetting","Please wait... Don't Close"),e.prev=2,e.next=5,u().post(h.T5+"/api/usersetting/",x);case 5:e.sent.data&&(h.aY.remove(".qrpaymentsetting"),h.aS.success("Successfully Added")),e.next=13;break;case 9:e.prev=9,e.t0=e.catch(2),h.aY.remove(".qrpaymentsetting"),e.t0&&e.t0.response&&e.t0.response.data&&N(e.t0.response.data);case 13:case"end":return e.stop()}}),e,null,[[2,9]])})));return function(a){return e.apply(this,arguments)}}(),k="./assets/images/avatars/img-8.jpg";return x.qrLogo&&(k=h.yA+x.qrLogo),(0,p.jsx)(c.Z,{children:(0,p.jsx)("section",{className:"position-relative p-3 bg-gradient2",children:(0,p.jsxs)("div",{className:"container",children:[(0,p.jsx)("div",{className:"row",children:(0,p.jsx)("div",{className:"col-lg-12",children:(0,p.jsxs)("div",{className:"page-title",children:[(0,p.jsx)("h3",{className:"my-0",children:"Account Settings"}),(0,p.jsx)("p",{className:"mt-1 fw-medium",children:"Change your account settings"})]})})}),(0,p.jsx)("div",{className:"row mt-2",children:(0,p.jsx)("div",{className:"col-lg-12",children:(0,p.jsx)("div",{className:"card",children:(0,p.jsx)("div",{className:"card-body",children:(0,p.jsxs)("div",{className:"row",children:[(0,p.jsx)("div",{className:"col-lg-3",children:(0,p.jsx)(d.Z,{})}),(0,p.jsx)("div",{className:"col-lg-9 qrpaymentsetting",children:(0,p.jsx)("div",{className:"tab-content p-0",children:(0,p.jsxs)("div",{className:"tab-pane fade show active px-3",id:"account",children:[(0,p.jsx)("h4",{className:"mt-0",children:"QR Payment Setting Information"}),(0,p.jsxs)("form",{onSubmit:y,className:"account-form",children:[(0,p.jsx)("h6",{className:"mt-4",children:"Store Logo for Qrcode"}),(0,p.jsxs)("div",{className:"row align-items-center",children:[(0,p.jsxs)("div",{className:"col-auto",children:[(0,p.jsx)("input",{type:"file",ref:e,style:{display:"none"},onChange:b}),(0,p.jsx)("img",{src:k,className:"img-fluid avatar-md rounded-circle shadow",alt:"..."})]}),(0,p.jsxs)("div",{className:"col",children:[(0,p.jsx)("button",{type:"button",onClick:function(){return e.current.click()},className:"btn btn-outline-primary btn-sm",children:"Upload"}),(0,p.jsx)("button",{type:"button",onClick:function(){return v((0,i.Z)((0,i.Z)({},x),{},{qrLogo:""}))},className:"btn btn-outline-danger btn-sm ms-2",children:"Remove"})]})]}),(0,p.jsx)("hr",{className:"my-4"}),(0,p.jsxs)("div",{className:"row align-items-center",children:[(0,p.jsx)("div",{className:"col-lg-6",children:(0,p.jsx)("div",{className:"mb-3",children:(0,p.jsx)(o.Z,{isRequired:!0,label:"Name",onChange:function(e){return v((0,i.Z)((0,i.Z)({},x),{},{qrName:e.target.value}))},value:x.qrName,placeholder:"",error:j.qrName})})}),(0,p.jsx)("div",{className:"col-lg-6",children:(0,p.jsx)("div",{className:"mb-3",children:(0,p.jsx)(o.Z,{isRequired:!0,label:"Email",onChange:function(e){return v((0,i.Z)((0,i.Z)({},x),{},{qrEmail:e.target.value}))},value:x.qrEmail,placeholder:"",error:j.qrEmail})})})]}),(0,p.jsx)("hr",{className:"my-4"}),(0,p.jsx)("div",{className:"row mt-2",children:(0,p.jsx)("div",{className:"col-lg-12",children:(0,p.jsx)("button",{type:"submit",className:"btn btn-primary",children:"Save Changes"})})})]})]})})})]})})})})})]})})})}},8902:function(e,a,s){"use strict";s(76870);var n=s(79428),i=s(22667),t=s(52516);a.Z=function(e){e.name;var a=(0,n.TH)().pathname;console.log("pathname",a);var s=[{name:"Invoice Setting",link:"/user/setting"},{name:"QR Setting",link:"/user/setting/qr"},{name:"Web Payments",link:"/user/setting/web"},{name:"API Keys",link:"/user/setting/apikey"}].map((function(e){var s="nav-link";return a===e.link&&(s="nav-link active"),(0,t.jsx)("li",{className:"nav-item",children:(0,t.jsx)(i.rU,{to:e.link,className:s,children:(0,t.jsx)("span",{children:e.name})})})}));return(0,t.jsx)("ul",{className:"nav navtab-bg nav-pills flex-column",children:s})}},49111:function(e,a){"use strict";a.Z=function(e){var a=document.createElement("script");a.src=e,a.async=!0,document.body.appendChild(a)}},69935:function(e,a){"use strict";a.Z=function(e){for(var a=document.getElementsByTagName("script"),s=a.length;s>=0;s--)a[s]&&null!==a[s].getAttribute("src")&&-1!==a[s].getAttribute("src").indexOf("".concat(e))&&a[s].parentNode.removeChild(a[s])}},37250:function(e,a){var s;!function(){"use strict";var n={}.hasOwnProperty;function i(){for(var e=[],a=0;a<arguments.length;a++){var s=arguments[a];if(s){var t=typeof s;if("string"===t||"number"===t)e.push(s);else if(Array.isArray(s)){if(s.length){var r=i.apply(null,s);r&&e.push(r)}}else if("object"===t){if(s.toString!==Object.prototype.toString&&!s.toString.toString().includes("[native code]")){e.push(s.toString());continue}for(var l in s)n.call(s,l)&&s[l]&&e.push(l)}}}return e.join(" ")}e.exports?(i.default=i,e.exports=i):void 0===(s=function(){return i}.apply(a,[]))||(e.exports=s)}()},44953:function(e,a){"use strict";var s=/^(0x[a-zA-Z0-9]{4})[a-zA-Z0-9]+([a-zA-Z0-9]{4})$/;a.Z=function(e){var a=e.match(s);return a?a[1]+"\u2026"+a[2]:e}}}]);
//# sourceMappingURL=766.d1c6fc47.chunk.js.map