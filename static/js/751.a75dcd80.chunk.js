(self.webpackChunkxipay_web=self.webpackChunkxipay_web||[]).push([[751],{4802:function(e,t,n){"use strict";n.d(t,{TE:function(){return h},iZ:function(){return p},sq:function(){return x},yX:function(){return m},EG:function(){return f},mB:function(){return w},iW:function(){return y},RF:function(){return b}});var a=n(23680),s=n(24611),r=n(53755),i=n(26219),c=n(14441),u=n(5779),l=n(7733),o=n.n(l),d=JSON.parse('[{"inputs":[{"internalType":"string","name":"name_","type":"string"},{"internalType":"string","name":"symbol_","type":"string"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"subtractedValue","type":"uint256"}],"name":"decreaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"addedValue","type":"uint256"}],"name":"increaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"}]'),p=function(){var e=(0,r.Z)((0,s.Z)().mark((function e(t){var n,a;return(0,s.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.getBalance();case 2:return n=e.sent,a=i.bM(n,18),e.abrupt("return",a);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),m=function(){var e=(0,r.Z)((0,s.Z)().mark((function e(t,n,a){var r,u,l;return(0,s.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=new c.CH(t,d,a),e.next=3,r.balanceOf(n);case 3:return u=e.sent,l=i.bM(u,"ether"),e.abrupt("return",l);case 6:case"end":return e.stop()}}),e)})));return function(t,n,a){return e.apply(this,arguments)}}(),f=function(){var e=(0,r.Z)((0,s.Z)().mark((function e(t,n){var a,r;return(0,s.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=new c.CH(t,d,n),e.next=3,a.symbol();case 3:return r=e.sent,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),h=function(e){navigator.clipboard.writeText(e).then((function(){u.aS.success("Copied")})).catch((function(e){u.aS.failure("Error copying text to clipboard:")}))},x=function(){var e=(0,r.Z)((0,s.Z)().mark((function e(t){var n,a;return(0,s.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,o().get("https://api.coingecko.com/api/v3/simple/price?ids=".concat(t,"&vs_currencies=usd"));case 3:return n=e.sent,a=n.data,e.abrupt("return",parseFloat(a[t].usd).toFixed(4));case 8:return e.prev=8,e.t0=e.catch(0),console.log("errr",e.t0),e.abrupt("return",0);case 12:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}(),y=function(){var e=(0,r.Z)((0,s.Z)().mark((function e(t,n,r,c){var u,l,o,d,p;return(0,s.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.sendTransaction({to:r,value:i.fi(c)});case 2:return u=e.sent,console.log("transactionHash",u.hash),e.next=6,w(u.hash,t);case 6:return l=e.sent,o=(0,a.Z)(l,2),d=o[0],p=o[1],e.abrupt("return",{txhash:d,status:p});case 11:case"end":return e.stop()}}),e)})));return function(t,n,a,s){return e.apply(this,arguments)}}(),b=function(){var e=(0,r.Z)((0,s.Z)().mark((function e(t,n,r,u,l){var o,p,m,f,h,x,y,b;return(0,s.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o=new c.CH(r,d,n),p=u,console.log("sendAddress",u),console.log("sendValue",l),m=i.vz(l,"18"),e.next=7,o.transfer(p,m);case 7:return f=e.sent,console.log("transactionHash",f.hash),e.next=11,w(f.hash,t);case 11:return h=e.sent,x=(0,a.Z)(h,2),y=x[0],b=x[1],e.abrupt("return",{txhash:y,status:b});case 16:case"end":return e.stop()}}),e)})));return function(t,n,a,s,r){return e.apply(this,arguments)}}(),v=function(e){return new Promise((function(t){return setTimeout(t,e)}))},w=function(){var e=(0,r.Z)((0,s.Z)().mark((function e(t,n){var a;return(0,s.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:a=null;case 1:if(null!=a){e.next=9;break}return e.next=4,n.getTransactionReceipt(t);case 4:return a=e.sent,e.next=7,v(3e3);case 7:e.next=1;break;case 9:if(!a.status){e.next=13;break}return e.abrupt("return",[t,!0]);case 13:return e.abrupt("return",[t,!1]);case 14:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()},78193:function(e,t,n){"use strict";var a=n(24611),s=n(53755),r=n(23680),i=n(76870),c=n(89157),u=n(73430),l=n.n(u),o=n(12281),d=n(96340),p=n(71623),m=n(99033),f=n(79153),h=n(5779),x=n(52516),y=new(l())({cacheProvider:!0,disableInjectedProvider:!0,providerOptions:{walletconnect:{package:o.Z,options:{infuraId:"27e484dcd9e3efcfd25a83a78777cdf1",rpc:{50:"https://rpc.xinfin.network",51:"https://erpc.apothem.network"}}},"custom-xdc":p.S}});t.Z=function(){var e=(0,i.useState)(),t=(0,r.Z)(e,2),n=(t[0],t[1]),u=(0,m.v9)((function(e){return e.web3})).connected,l=(0,m.I0)();(0,i.useEffect)((function(){y.cachedProvider&&!u&&o()}),[]);var o=function(){var e=(0,s.Z)((0,a.Z)().mark((function e(){var t,s,r,i,u,o,p,m;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,y.connect();case 2:return t=e.sent,s=new d.Q(t),e.next=6,s.getNetwork();case 6:if(r=e.sent,i=r.chainId,u=h.cz.find((function(e){return e.networkID===i}))){e.next=12;break}return h.ah.warning("Network Mismatch","Please Switch to XDC Apothem","OK"),e.abrupt("return");case 12:return e.next=14,s.listAccounts();case 14:if(0!==e.sent.length){e.next=18;break}return c.Report.warning("No Account Connected","Xdc Pay Not LoggedIn.Kindly login your XDC Pay","OK"),e.abrupt("return");case 18:return o=s.getSigner(),e.next=21,o.getAddress();case 21:p=e.sent,n(p),m={provider:s,address:p,signer:o,web3Modal:y,connected:!0,chainId:i,symbol:u.symbol,networkName:u.networkName},l((0,f.fY)(m));case 25:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return(0,x.jsx)(i.Fragment,{children:(0,x.jsx)("div",{className:"mb-0 text-center d-grid",children:u?(0,x.jsxs)("button",{type:"button",onClick:function(){return l((0,f.eW)())},className:"btn btn-primary",children:[(0,x.jsx)("span",{children:"Disconnect Wallet"})," ",(0,x.jsx)("em",{className:"icon ni ni-arrow-long-right"})]}):(0,x.jsxs)("button",{type:"button",onClick:function(){return o()},className:"btn btn-primary",children:[(0,x.jsx)("span",{children:"Connect Wallet"})," ",(0,x.jsx)("em",{className:"icon ni ni-arrow-long-right"})]})})})}},72106:function(e,t,n){"use strict";n(76870);var a=n(37250),s=n.n(a),r=n(52516),i=function(e){var t=e.name,n=e.placeholder,a=e.value,i=e.label,c=e.error,u=e.info,l=e.type,o=e.onChange,d=e.disabled,p=(e.forgotView,e.forgotLink,e.isRequired),m=e.id;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)("label",{lassName:"form-label ",children:[i," ",(0,r.jsx)("small",{children:p&&"*"})]}),(0,r.jsx)("input",{type:l,id:m,className:s()("form-control",{"is-invalid":c}),placeholder:n,value:a,onChange:o,name:t,disabled:d}),u&&(0,r.jsx)("small",{className:"form-text text-muted",children:u}),c&&(0,r.jsx)("div",{className:"invalid-feedback text-left text-danger",children:c})]})};i.defaultProps={type:"text"},t.Z=i},13821:function(e,t,n){"use strict";n.r(t);var a=n(24611),s=n(53755),r=n(23680),i=n(76870),c=n(99033),u=n(5779),l=n(44953),o=(n(72106),n(7733)),d=n.n(o),p=n(79428),m=n(78193),f=n(4802),h=n(52516);t.default=function(){var e=(0,c.v9)((function(e){return e.web3})),t=e.chainId,n=e.connected,o=e.signer,x=e.provider,y=e.address,b=((0,c.v9)((function(e){return e.auth})).user,(0,p.UO)().id),v=(0,i.useState)({}),w=(0,r.Z)(v,2),g=w[0],j=w[1],k=(0,i.useState)([]),Z=(0,r.Z)(k,2),N=Z[0],T=Z[1],S=(0,i.useState)(null),A=(0,r.Z)(S,2),F=A[0],P=A[1],I=(0,i.useState)(null),C=(0,r.Z)(I,2),M=C[0],O=C[1],Y=(0,i.useState)([]),D=(0,r.Z)(Y,2),E=D[0],_=D[1],V=(0,i.useState)(0),W=(0,r.Z)(V,2),R=W[0],U=W[1],H=(0,i.useState)(0),L=(0,r.Z)(H,2),G=L[0],X=L[1],q=(0,i.useState)(!1),B=(0,r.Z)(q,2),z=B[0],K=B[1],J=(0,i.useState)({}),Q=(0,r.Z)(J,2),$=Q[0],ee=Q[1],te=(0,i.useState)(""),ne=(0,r.Z)(te,2),ae=ne[0],se=ne[1];(0,i.useEffect)((function(){if(F&&n){ue();var e=u.sG.find((function(e){return e.value===F&&e.networkID===parseInt(t)}));O(e.type)}}),[F,n]),(0,i.useEffect)((function(){re()}),[]);var re=function(){var e=(0,s.Z)((0,a.Z)().mark((function e(){var t;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return u.aY.standard(".viewinvoice","Please wait..."),e.prev=1,e.next=4,d().post(u.T5+"/api/webpayment/view/",{id:b});case 4:t=e.sent,u.aY.remove(".viewinvoice"),t.data&&(j(t.data),T(t.data.usersetting)),e.next=13;break;case 9:e.prev=9,e.t0=e.catch(1),u.aY.remove(".viewinvoice"),u.aS.failure("Error Ocuured in API");case 13:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(){return e.apply(this,arguments)}}();(0,i.useEffect)((function(){Object.keys(g).length>0&&ie()}),[n,g]);var ie=function(){var e=u.sG.filter((function(e){return e.networkID===parseInt(t)}));e.length>0&&(console.log("filterValue",e[0].type),P(e[0].value),O(e[0].type),_(e))},ce=E.map((function(e,t){return(0,h.jsx)("option",{value:e.value,children:e.label})})),ue=function(){var e=(0,s.Z)((0,a.Z)().mark((function e(){var n,s,r,i,c,l,d;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(U(0),X(0),K(!0),!(n=u.sG.find((function(e){return e.value===F&&e.networkID===parseInt(t)})))||"coin"!==n.type){e.next=18;break}return e.next=7,(0,f.iZ)(o);case 7:return s=e.sent,e.next=10,(0,f.sq)(n.ids);case 10:r=e.sent,i=parseFloat(g.invoiceAmount)/parseFloat(r),se(i.toString()),U(s),X(r),K(!1),e.next=31;break;case 18:if(!n||"token"!==n.type){e.next=31;break}return console.log("findasset.contractAddress",n.contractAddress),e.next=22,(0,f.yX)(n.contractAddress,y,o);case 22:return c=e.sent,e.next=25,(0,f.sq)(n.ids);case 25:l=e.sent,d=parseFloat(g.invoiceAmount)/parseFloat(l),se(d.toString()),U(c),X(l),K(!1);case 31:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),le="assets/images/logo.png";N.invoiceLogo&&(le=u.yA+N.invoiceLogo);var oe=function(){var e=(0,s.Z)((0,a.Z)().mark((function e(){var n,s,r;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(""!==ae){e.next=3;break}return u.aS.failure("Fill All the Fields"),e.abrupt("return");case 3:if(u.L_.test(g.user.walletAddress)){e.next=6;break}return u.aS.failure("Invalid Sender ddress.Address start with 0x"),e.abrupt("return");case 6:if(!(parseFloat(ae)<=0)){e.next=9;break}return u.aS.failure("Send token must be greater the zero"),e.abrupt("return");case 9:if(!(parseFloat(ae)>parseFloat(R))){e.next=12;break}return u.aS.failure("Low Balance"),e.abrupt("return");case 12:if(console.log("token",M),u.aY.standard(".viewinvoice","Please wait... Don't Close"),"coin"!==M){e.next=22;break}return e.next=17,(0,f.iW)(x,o,g.user.walletAddress,ae);case 17:(n=e.sent).status?de(n.txhash):u.aY.remove(".viewinvoice"),ee(n),e.next=30;break;case 22:if("token"!==M){e.next=30;break}return s=u.sG.find((function(e){return e.value===F&&e.networkID===parseInt(t)})),console.log("sendResult",x,o,s.contractAddress,g.user.walletAddress,ae),e.next=27,(0,f.RF)(x,o,s.contractAddress,g.user.walletAddress,ae);case 27:(r=e.sent).status?de(r.txhash):(u.aY.remove(".viewinvoice"),window.location=g.failureUrl),ee(r);case 30:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),de=function(){var e=(0,s.Z)((0,a.Z)().mark((function e(n){var s;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,s={_id:g._id,assetSymbol:F,assetPrice:G,paidAmount:ae,payerWalletAddress:y,txnHash:n,status:"Paid",chainId:t},e.next=4,d().post(u.T5+"/api/webpayment/update",s);case 4:e.sent.data&&(ue(),re(),u.aY.remove(".viewinvoice"),window.location=g.successUrl),e.next=12;break;case 8:e.prev=8,e.t0=e.catch(0),u.aY.remove(".viewinvoice"),u.aS.failure("Erorr Occured Try Again");case 12:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}();return(0,h.jsx)("div",{children:(0,h.jsx)("div",{className:"modal-dialog modal-md",children:(0,h.jsx)("div",{className:"modal-content viewinvoice",children:(0,h.jsx)("div",{className:"modal-body",children:(0,h.jsxs)("div",{children:[(0,h.jsx)("div",{children:(0,h.jsx)("div",{className:"row g-0",children:(0,h.jsxs)("div",{className:"col-md-12",children:[(0,h.jsx)("div",{className:"text-right",children:"Paid"===g.status?(0,h.jsx)("span",{className:"badge badge-soft-success p-1",style:{width:100},children:g.status}):(0,h.jsx)("span",{className:"badge badge-soft-danger p-1",style:{width:100},children:g.status})}),(0,h.jsxs)("div",{className:"p-xl-1 p-3",children:[(0,h.jsx)("div",{className:"text-center mb-2",children:(0,h.jsx)("img",{src:le,className:"align-self-center",alt:"logo-img",height:40})}),(0,h.jsxs)("h3",{className:"h3 mb-0 mt-3 text-center",children:["Inv No :#",g.invoiceNo]}),(0,h.jsx)("p",{className:"text-muted mt-1 mb-4 text-center",children:"Effortlessly View and Swiftly Pay Your Invoices!"}),(0,h.jsxs)("div",{className:"text-center",children:[(0,h.jsxs)("h1",{class:"",children:[g.invoiceAmount," ",g.currencySymbol]}),(0,h.jsx)("p",{class:"text-muted",children:"Amount to Pay"})]}),(0,h.jsxs)("div",{className:"mb-3",children:[(0,h.jsxs)("div",{className:"row",children:["UnPaid"===g.status&&n&&(0,h.jsx)("div",{className:"col",children:(0,h.jsxs)("ul",{className:"checkout-list",children:[(0,h.jsxs)("li",{children:[(0,h.jsx)("span",{children:"Select Asset"}),(0,h.jsx)("span",{children:(0,h.jsx)("select",{value:F,onChange:function(e){return P(e.target.value)},className:"form-select",children:ce})})]}),(0,h.jsxs)("li",{children:[(0,h.jsx)("span",{children:"Your Balance"}),(0,h.jsxs)("span",{className:"checkout-total",children:[parseFloat(R).toFixed(4)," ",F]})]}),(0,h.jsxs)("li",{children:[(0,h.jsxs)("span",{children:[F," Current Price"]}),(0,h.jsxs)("span",{className:"checkout-balance text-primary",children:[G," USD"]})]}),(0,h.jsxs)("li",{children:[(0,h.jsxs)("span",{children:[F," to Send"]}),(0,h.jsxs)("span",{className:"checkout-balance text-primary",children:[parseFloat(ae).toFixed(4)," ",F]})]}),(0,h.jsxs)("li",{children:[(0,h.jsx)("span",{children:"Receiver Address"}),(0,h.jsx)("span",{className:"checkout-balance text-primary",children:g.user&&(0,l.Z)(g.user.walletAddress)})]})]})}),"Paid"===g.status&&(0,h.jsx)("div",{className:"col",children:(0,h.jsxs)("ul",{className:"checkout-list",children:[(0,h.jsxs)("li",{children:[(0,h.jsx)("span",{children:"Asset Paid"}),(0,h.jsxs)("span",{className:"checkout-total",children:[parseFloat(g.paidAmount).toFixed(4)," ",g.assetSymbol]})]}),(0,h.jsxs)("li",{children:[(0,h.jsxs)("span",{children:[F," Price "]}),(0,h.jsxs)("span",{className:"checkout-balance text-primary",children:[g.assetPrice," ",g.assetSymbol]})]}),(0,h.jsxs)("li",{children:[(0,h.jsx)("span",{children:"Payer Address"}),(0,h.jsx)("span",{className:"checkout-balance text-primary",children:g.payerWalletAddress&&(0,l.Z)(g.payerWalletAddress)})]})]})})]}),$&&$.status&&Object.keys($).length>0&&(0,h.jsxs)("div",{role:"alert",class:"alert text-success bg-white border alert-dismissible",children:[(0,h.jsxs)("div",{class:"d-flex align-items-start",children:[(0,h.jsx)("span",{class:"badge badge-soft-success align-self-center me-3",children:"Success"}),(0,h.jsxs)("div",{class:"w-100",children:["Your transaction is success ",(0,h.jsx)("a",{href:u.Fl[t]+$.txhash,target:"_blank",class:"text-success alert-link",children:"View Transaction"})]})]}),(0,h.jsx)("button",{type:"button",class:"btn-close","data-bs-dismiss":"alert","aria-label":"Close"})]}),$&&Object.keys($).length>0&&!$.status&&(0,h.jsxs)("div",{role:"alert",class:"alert text-danger bg-white border alert-dismissible",children:[(0,h.jsxs)("div",{class:"d-flex align-items-start",children:[(0,h.jsx)("span",{class:"badge badge-soft-danger align-self-center me-3",children:"Ohh no!"}),(0,h.jsxs)("div",{class:"w-100",children:["Your transaction is failed ",(0,h.jsx)("a",{href:u.Fl[t]+$.txhash,target:"_blank",class:"text-danger alert-link",children:"View Transaction"})]})]}),(0,h.jsx)("button",{type:"button",class:"btn-close","data-bs-dismiss":"alert","aria-label":"Close"})]}),n?(0,h.jsx)(i.Fragment,{children:"UnPaid"===g.status&&(0,h.jsx)("div",{className:"mb-0 text-center d-grid",children:z?(0,h.jsxs)("button",{class:"btn btn-outline-primary btn-sm",type:"button",children:[(0,h.jsx)("span",{class:"spinner-border spinner-border-sm me-1",role:"status","aria-hidden":"true"}),"Fetching details.."]}):(0,h.jsx)("button",{className:"btn btn-primary",onClick:function(){return oe()},children:"Send"})})}):["UnPaid"===g.status&&(0,h.jsx)(m.Z,{})]]}),(0,h.jsx)("div",{className:"poweredby",style:{textAlign:"right"},children:(0,h.jsx)("img",{src:"assets/images/poweredby.png",className:"align-self-end",alt:"logo-img",height:40})})]})]})})})," "]})})})})})}},36563:function(){},89214:function(){},85568:function(){},40127:function(){},27790:function(){},24654:function(){},52361:function(){},94616:function(){}}]);
//# sourceMappingURL=751.a75dcd80.chunk.js.map