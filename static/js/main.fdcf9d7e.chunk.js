(this.webpackJsonppolygonos_nft_minting_dapp=this.webpackJsonppolygonos_nft_minting_dapp||[]).push([[0],{247:function(n,e){},249:function(n,e){},253:function(n,e){},254:function(n,e){},281:function(n,e){},283:function(n,e){},293:function(n,e){},295:function(n,e){},305:function(n,e){},307:function(n,e){},323:function(n,e){},357:function(n,e){},358:function(n,e){},429:function(n,e){},431:function(n,e){},436:function(n,e){},438:function(n,e){},445:function(n,e){},457:function(n,e){},460:function(n,e){},465:function(n,e){},538:function(n,e,t){},539:function(n,e,t){"use strict";t.r(e);var a,o,c,r,i,s,l,d,u,h,b,m,j,p,f,g,x=t(2),O=t(85),y=t.n(O),v=t(16),w=t.n(v),C=t(43),N=t(69),T=t(13),S=t(57),_=t(67),E=t.n(_),k=t(217),A=t.n(k),M=t(70),I=t(218),P=t(18),D={loading:!1,account:null,smartContract:null,web3:null,errorMsg:""},F=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:D,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"CONNECTION_REQUEST":return Object(P.a)(Object(P.a)({},D),{},{loading:!0});case"CONNECTION_SUCCESS":return Object(P.a)(Object(P.a)({},n),{},{loading:!1,account:e.payload.account,smartContract:e.payload.smartContract,web3:e.payload.web3});case"CONNECTION_FAILED":return Object(P.a)(Object(P.a)({},D),{},{loading:!1,errorMsg:e.payload});case"UPDATE_ACCOUNT":return Object(P.a)(Object(P.a)({},n),{},{account:e.payload.account});default:return n}},L={loading:!1,totalSupply:0,cost:0,error:!1,errorMsg:""},q=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:L,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"CHECK_DATA_REQUEST":return Object(P.a)(Object(P.a)({},n),{},{loading:!0,error:!1,errorMsg:""});case"CHECK_DATA_SUCCESS":return Object(P.a)(Object(P.a)({},n),{},{loading:!1,totalSupply:e.payload.totalSupply,error:!1,errorMsg:""});case"CHECK_DATA_FAILED":return Object(P.a)(Object(P.a)({},L),{},{loading:!1,error:!0,errorMsg:e.payload});default:return n}},R=Object(M.b)({blockchain:F,data:q}),z=[I.a],K=Object(M.c)(M.a.apply(void 0,z)),U=Object(M.d)(R,K),W=function(n){return{type:"CHECK_DATA_FAILED",payload:n}},Y=function(){return function(){var n=Object(C.a)(w.a.mark((function n(e){var t;return w.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e({type:"CHECK_DATA_REQUEST"}),n.prev=1,n.next=4,U.getState().blockchain.smartContract.methods.totalSupply().call();case 4:t=n.sent,e({type:"CHECK_DATA_SUCCESS",payload:{totalSupply:t}}),n.next=11;break;case 8:n.prev=8,n.t0=n.catch(1),e(W("Could not load data from contract."));case 11:case"end":return n.stop()}}),n,null,[[1,8]])})));return function(e){return n.apply(this,arguments)}}()},B=function(n){return{type:"CONNECTION_FAILED",payload:n}},H=function(n){return function(){var e=Object(C.a)(w.a.mark((function e(t){return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t({type:"UPDATE_ACCOUNT",payload:{account:n}}),t(Y());case 2:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}()},G=t(14),Q={xs:"320px",sm:"768px",lg:"1200px",xl:"1900px"},X={size:Q,device:{minxs:"(min-width: ".concat(Q.xs,")"),minsm:"(min-width: ".concat(Q.sm,")"),minlg:"(min-width: ".concat(Q.lg,")"),minxl:"(min-width: ".concat(Q.xl,")"),maxxs:"(max-width: ".concat(Q.xs,")"),maxsm:"(max-width: ".concat(Q.sm,")"),maxlg:"(max-width: ".concat(Q.lg,")"),maxxl:"(max-width: ".concat(Q.xl,")")}},J=G.b.div(a||(a=Object(T.a)(["\n  display: flex;\n  flex-direction: column;\n  @media only screen and "," and ","{\n    flex-direction: row;\n    align-items: center;\n  }\n  @media only screen and ","{\n    flex-direction: row;\n  }\n"])),X.device.minsm,X.device.maxlg,X.device.minlg),V=G.b.div(o||(o=Object(T.a)(["\n  background: ",";\n  display: flex;\n  flex-direction: row;\n\n  @media only screen and ","{\n    flex-direction: column;\n  }\n\n  .left,\n  .right {\n    width: 100%;\n    font-size: 1.25rem;\n    line-height: 1.5;\n    color: ",";\n  }\n\n  .left {\n    padding: 8% 4% 4% 8%;\n\n    h1 {\n      font-size: 10rem;\n      font-weight: bold;\n\n      @media only screen and ","{\n        font-size: 5rem;\n      }\n    }\n  }\n\n  .right {\n    padding: 8% 8% 4% 4%;\n\n    h1 {\n      font-size: 2.5rem;\n      font-weight: bold;\n\n      @media only screen and ","{\n        font-size: 1.5rem;\n      }\n    }\n\n    .faq-q {\n      margin-bottom: 2rem;\n\n      .bullet {\n        padding-left: 2rem;\n        margin: 1rem 0;\n      }\n    }\n  }\n\n  @media only screen and ","{\n    .right {\n      padding: 8% 8% 8% 8%;\n    }\n\n    .left {\n      padding: 8% 8% 0 8%;\n    }\n  }\n"])),(function(n){var e=n.bg;return e||"black"}),X.device.maxsm,(function(n){var e=n.color;return e||"var(--secondary-text)"}),X.device.maxsm,X.device.maxsm,X.device.maxsm),Z=G.b.div(c||(c=Object(T.a)(["\n  display: flex;\n  flex-wrap: wrap;\n\n  div {\n    width: 20%;\n\n    @media only screen and ","{\n      width: 10%;\n    }\n\n    img {\n      width: 100%;\n    }\n  }\n"])),X.device.minsm),$=G.b.div(r||(r=Object(T.a)(["\n  background: black;\n  width: 100%;\n  height: 170px;\n  color: var(--secondary-text);\n  font-size: 3rem;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  text-align: center;\n  line-height: 1.25;\n\n  a:hover {\n    color: var(--primary);\n  }\n\n  @media only screen and "," and ","{\n    p {\n      padding: 0 1rem;\n      font-size: 1.5rem;\n      line-height: 1.5;\n    }\n  }\n"])),X.device.minxs,X.device.maxsm),nn=G.b.div(i||(i=Object(T.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  height: auto;\n  width: 100%;\n  padding: 8% 8% 8% 8%;\n  @media only screen and ","{\n    width: 50%;\n    padding: 4% 4% 4% 4%;\n  }\n"])),X.device.minlg),en=G.b.div(s||(s=Object(T.a)(["\n  @media only screen and "," and ","{\n    max-width: 300px;\n  }\n  @media only screen and "," and ","{\n    max-width: 400px;\n  }\n  @media only screen and "," and ","{\n    max-width: 1020px;\n  }\n  @media only screen and ","{\n    width: 790px;\n  }\n"])),X.device.minxs,X.device.maxsm,X.device.minsm,X.device.maxlg,X.device.minlg,X.device.maxxl,X.device.minxl),tn=G.b.div(l||(l=Object(T.a)(["\n  margin: 3rem 0;\n\n  .counter {\n    font-size:  3rem;\n    font-weight: bold;\n    margin-bottom: 1rem;\n  }\n"]))),an=G.b.div(d||(d=Object(T.a)(["\n  height: 400px;\n  width: 100%;\n  background-image: ",";\n  background-size: contain;\n  background-repeat: no-repeat;\n  background-position: center;\n  @media only screen and ","{\n    background-position: inherit;\n  }\n  @media only screen and ","{\n    background-size: cover;\n    width: 50%;\n    height: auto;\n  }\n"])),(function(n){var e=n.image;return e?"url(".concat(e,")"):"none"}),X.device.minsm,X.device.minlg),on=G.b.p(u||(u=Object(T.a)(["\n  color: var(--primary-text);\n  font-size: 1rem;\n  margin-bottom: .5rem;\n  @media only screen and ","{\n    font-size: 1.25rem;\n  }\n"])),X.device.minsm),cn=t.p+"static/media/basiersquaremono.412c5efb.woff",rn=t.p+"static/media/basiersquaremono.e4ada8fa.woff2",sn=Object(G.a)(h||(h=Object(T.a)(["\n    @font-face {\n        font-family: 'basier_square_monoregular';\n        src: local('basier_square_monoregular'), local('basiersquaremono'),\n        url(",") format('woff2'),\n        url(",") format('woff');\n        font-weight: normal;\n        font-style: normal;\n    }\n"])),rn,cn),ln=t(1),dn=[1,2,3,4,5,6,7,8,9,10].map((function(n){return Object(ln.jsx)("div",{children:Object(ln.jsx)("img",{src:"./config/images/".concat(n,".png")})},n)})),un=[11,12,13,14,15,16,17,18,19,20].map((function(n){return Object(ln.jsx)("div",{children:Object(ln.jsx)("img",{src:"./config/images/".concat(n,".png")})},n)})),hn=[21,22,23,24,25,26,27,28,29,30].map((function(n){return Object(ln.jsx)("div",{children:Object(ln.jsx)("img",{src:"./config/images/".concat(n,".png")})},n)})),bn=[31,32,33,34,35,36,37,38,39,40].map((function(n){return Object(ln.jsx)("div",{children:Object(ln.jsx)("img",{src:"./config/images/".concat(n,".png")})},n)})),mn=G.b.button(b||(b=Object(T.a)(["\n  border: none;\n  background-color: var(--accent-text);\n  padding: 20px 40px;\n  color: var(--secondary-text);\n  cursor: pointer;\n  font-family: 'basier_square_monoregular';\n  font-weight: bold;\n  font-size: 1rem;\n  letter-spacing: 5px;\n  margin: 1rem 0;\n\n  &:hover {\n    background-color: var(--secondary);\n    color: var(--secondary-text);\n  }\n"]))),jn=G.b.button(m||(m=Object(T.a)(["\n  padding: 10px;\n  border-radius: 100%;\n  border: none;\n  background-color: var(--accent-text);\n  padding: 10px;\n  font-weight: bold;\n  font-size: 1.5rem;\n  color: var(--secondary-text);\n  width: 40px;\n  height: 40px;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  :active {\n    box-shadow: none;\n    -webkit-box-shadow: none;\n    -moz-box-shadow: none;\n  }\n\n  &:hover {\n    background-color: var(--primary);\n    color: var(--primary-text);\n  }\n"]))),pn=G.b.div(j||(j=Object(T.a)(["\n  height: 200px;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  align-items: flex-start;\n"]))),fn=G.b.div(p||(p=Object(T.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  width: 200px;\n\n  p {\n    font-size: 2rem;\n    font-weight: bold;\n  }\n"]))),gn=G.b.img(f||(f=Object(T.a)(["\n  width: 100%;\n"]))),xn=G.b.a(g||(g=Object(T.a)(["\n  color: var(--accent-text);\n  text-decoration: none;\n\n  &:hover {\n    color: var(--accent);\n  }\n"])));var On=function(){var n,e,t=Object(S.b)(),a=Object(S.c)((function(n){return n.blockchain})),o=Object(S.c)((function(n){return n.data})),c=Object(x.useState)(!1),r=Object(N.a)(c,2),i=r[0],s=r[1],l=Object(x.useState)("Click buy to mint your NFT."),d=Object(N.a)(l,2),u=d[0],h=d[1],b=Object(x.useState)(1),m=Object(N.a)(b,2),j=m[0],p=m[1],f=Object(x.useState)({CONTRACT_ADDRESS:"",SCAN_LINK:"",NETWORK:{NAME:"",SYMBOL:"",ID:0},NFT_NAME:"",SYMBOL:"",MAX_SUPPLY:1,WEI_COST:0,DISPLAY_COST:0,GAS_LIMIT:0,MARKETPLACE:"",MARKETPLACE_LINK:"",SHOW_BACKGROUND:!1}),g=Object(N.a)(f,2),O=g[0],y=g[1],v=function(){""!==a.account&&null!==a.smartContract&&t(Y(a.account))},T=function(){var n=Object(C.a)(w.a.mark((function n(){var e,t;return w.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("/config/config.json",{headers:{"Content-Type":"application/json",Accept:"application/json"}});case 2:return e=n.sent,n.next=5,e.json();case 5:t=n.sent,y(t);case 7:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}();return Object(x.useEffect)((function(){T()}),[]),Object(x.useEffect)((function(){v()}),[a.account]),Object(ln.jsxs)(ln.Fragment,{children:[Object(ln.jsxs)(J,{children:[Object(ln.jsx)(sn,{}),Object(ln.jsxs)(nn,{className:"left",children:[Object(ln.jsx)(en,{className:"top",children:Object(ln.jsx)(gn,{alt:"logo",src:"/config/images/Polygonos_logo.svg"})}),Object(ln.jsxs)(tn,{className:"bottom",children:[Object(ln.jsxs)("p",{className:"counter",children:[o.totalSupply," / ",O.MAX_SUPPLY]}),Object(ln.jsx)(on,{children:Object(ln.jsx)(xn,{target:"_blank",href:O.SCAN_LINK,children:(n=O.CONTRACT_ADDRESS,e=15,n.length>e?"".concat(n.substring(0,e),"..."):n)})}),Number(o.totalSupply)>=O.MAX_SUPPLY?Object(ln.jsxs)(ln.Fragment,{children:[Object(ln.jsx)(on,{children:"The sale has ended."}),Object(ln.jsxs)(on,{children:["You can still find ",O.NFT_NAME," on"]}),Object(ln.jsx)(xn,{target:"_blank",href:O.MARKETPLACE_LINK,children:O.MARKETPLACE})]}):Object(ln.jsxs)(ln.Fragment,{children:[Object(ln.jsxs)(on,{children:["1 ",O.SYMBOL," costs ",O.DISPLAY_COST," ",O.NETWORK.SYMBOL,"."]}),""===a.account||null===a.smartContract?Object(ln.jsxs)(ln.Fragment,{children:[Object(ln.jsxs)(on,{children:["Connect to the ",O.NETWORK.NAME," network"]}),Object(ln.jsx)(mn,{onClick:function(n){n.preventDefault(),t(function(){var n=Object(C.a)(w.a.mark((function n(e){var t,a,o,c,r,i,s,l,d;return w.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e({type:"CONNECTION_REQUEST"}),n.next=3,fetch("/config/abi.json",{headers:{"Content-Type":"application/json",Accept:"application/json"}});case 3:return t=n.sent,n.next=6,t.json();case 6:return a=n.sent,n.next=9,fetch("/config/config.json",{headers:{"Content-Type":"application/json",Accept:"application/json"}});case 9:return o=n.sent,n.next=12,o.json();case 12:if(c=n.sent,r=window,!(i=r.ethereum)||!i.isMetaMask){n.next=33;break}return E.a.setProvider(i),s=new A.a(i),n.prev=18,n.next=21,i.request({method:"eth_requestAccounts"});case 21:return l=n.sent,n.next=24,i.request({method:"net_version"});case 24:n.sent==c.NETWORK.ID?(d=new E.a(a,c.CONTRACT_ADDRESS),e({type:"CONNECTION_SUCCESS",payload:{account:l[0],smartContract:d,web3:s}}),i.on("accountsChanged",(function(n){e(H(n[0]))})),i.on("chainChanged",(function(){window.location.reload()}))):e(B("Change network to ".concat(c.NETWORK.NAME,"."))),n.next=31;break;case 28:n.prev=28,n.t0=n.catch(18),e(B("Something went wrong."));case 31:n.next=34;break;case 33:e(B("Install Metamask."));case 34:case"end":return n.stop()}}),n,null,[[18,28]])})));return function(e){return n.apply(this,arguments)}}()),v()},children:"CONNECT"}),""!==a.errorMsg?Object(ln.jsx)(ln.Fragment,{children:Object(ln.jsx)(on,{children:a.errorMsg})}):null]}):Object(ln.jsxs)(pn,{children:[Object(ln.jsx)(on,{children:u}),Object(ln.jsxs)(fn,{children:[Object(ln.jsx)(jn,{style:{lineHeight:.4},disabled:i?1:0,onClick:function(n){n.preventDefault(),function(){var n=j-1;n<1&&(n=1),p(n)}()},children:"-"}),Object(ln.jsx)("p",{children:j}),Object(ln.jsx)(jn,{disabled:i?1:0,onClick:function(n){n.preventDefault(),function(){var n=j+1;n>5&&(n=5),p(n)}()},children:"+"})]}),Object(ln.jsx)(mn,{disabled:i?1:0,onClick:function(n){n.preventDefault(),function(){var n=O.WEI_COST,e=O.GAS_LIMIT,o=String(n*j),c=String(e*j);h("Minting your ".concat(O.NFT_NAME,"...")),s(!0),a.smartContract.methods.mint(j).send({gasLimit:String(c),to:O.CONTRACT_ADDRESS,from:a.account,value:o}).once("error",(function(n){h("Sorry, something went wrong please try again later."),s(!1)})).then((function(n){h("Welcome to the ".concat(O.NFT_NAME," fam! Go visit Opensea.io to view your Polygono.")),s(!1),t(Y(a.account))}))}(),v()},children:i?"BUSY":"BUY"})]})]})]})]}),Object(ln.jsx)(an,{image:"/config/images/PolygonosGIF"})]}),Object(ln.jsxs)(V,{children:[Object(ln.jsx)("div",{className:"left",children:"Polygonos is a collection of 1,010 abstract characters programmatically generated using more than 50 polygons and minted as NFTs.Polygonos are made up of a unique combination of hairstyles, face accessories, and tattoos, across 50+ traits randomized for varying rarities."}),Object(ln.jsx)("div",{className:"right",children:"Polygonos are known to have many different sides that follow a straight belief. However, there are Polygonos that are different and bend their sides to their vibes making them rare within their posse."})]}),Object(ln.jsx)(Z,{children:dn}),Object(ln.jsx)($,{children:Object(ln.jsx)("p",{children:"No roadmaps or promises, just vibes."})}),Object(ln.jsx)(Z,{children:un}),Object(ln.jsxs)(V,{bg:"white",color:"black",children:[Object(ln.jsx)("div",{className:"left",children:Object(ln.jsx)("h1",{children:"FAQ"})}),Object(ln.jsxs)("div",{className:"right",children:[Object(ln.jsxs)("div",{className:"faq-q",children:[Object(ln.jsx)("h1",{children:"What are Polygonos?"}),Object(ln.jsxs)("p",{children:["Polygonos is a collection of programmatically generated abstract characters designed by ",Object(ln.jsx)(xn,{target:"_blank",href:"https://twitter.com/brizism",children:"@brizism"})," and minted as NFTs on the Ethereum blockchain."]})]}),Object(ln.jsxs)("div",{className:"faq-q",children:[Object(ln.jsx)("h1",{children:"Who is behind Polygonos?"}),Object(ln.jsxs)("p",{children:[Object(ln.jsx)(xn,{target:"_blank",href:"https://twitter.com/brizism",children:"@brizism"}),", the dev/designer behind Polygonos is inspired by abstract, Russian Constructivism art and applies that to her designs. She studied graphic design and career transitioned to web dev and now wants to immerse herself in all things crypto."]})]}),Object(ln.jsxs)("div",{className:"faq-q",children:[Object(ln.jsx)("h1",{children:"What's on the roadmap?"}),Object(ln.jsx)("p",{children:"No roadmap doesn't mean no utility, no production, no future drops, no meetups, no love, no friends. It just means there is no one direct path to lead to all these cool things. All I can promise is to keep creating."})]}),Object(ln.jsxs)("div",{className:"faq-q",children:[Object(ln.jsx)("h1",{children:"What's an NFT?"}),Object(ln.jsx)("p",{children:"NFT stands for \"Non-fungible token,\" which means that it's a unique digital item. NFTs can really be anything digital (such as drawings, music, your brain downloaded and turned into an AI) with blockchain-managed ownership that users can collect, own, and trade. Some NFT's fundamental function is to be digital art. But they can also offer additional benefits like exclusive access to websites, event tickets, game items, and ownership records for physical objects."})]}),Object(ln.jsxs)("div",{className:"faq-q",children:[Object(ln.jsx)("h1",{children:"How do I NFT?"}),Object(ln.jsx)("p",{children:"New to NFTs? No problemo, here are some steps on what you need to do to get your Polygono."}),Object(ln.jsxs)("p",{className:"bullet",children:["Download the ",Object(ln.jsx)(xn,{target:"_blank",href:"https://metamask.io/",children:"metamask.io"})," extension for your Chrome browser or app on mobile. This will allow you to buy with Ethereum and can be found in the extensions tab. If you are on mobile, you must use the Metamask App Browser"]}),Object(ln.jsxs)("p",{className:"bullet",children:["You can buy Ethereum through the Metamask Wallet using Wyre or Send Ethereum from an exchange like ",Object(ln.jsx)(xn,{target:"_blank",href:"https://www.coinbase.com/",children:"Coinbase"}),"."]}),Object(ln.jsx)("p",{className:"bullet",children:"Click on the Connect button at the top of the page and connect your Metamask. Once connected, you will be able to buy up to five Polygonos. You will be prompted to sign your transaction. FYI, there will be a fee associated with every transaction related to gas prices."}),Object(ln.jsx)("p",{className:"bullet",children:"Once you have completed your transaction, your Polygonos NFTs will be viewable in your wallet and on OpenSea."})]})]})]}),Object(ln.jsx)(Z,{children:hn}),Object(ln.jsx)(Z,{children:bn}),Object(ln.jsx)($,{children:Object(ln.jsxs)("p",{children:["Polygonos on ",Object(ln.jsx)(xn,{target:"_blank",href:"https://twitter.com/polygonosNFT",children:"[Twitter]"})," ",Object(ln.jsx)(xn,{target:"_blank",href:"https://opensea.io/collection/polygonos",children:"[OpenSea]"}),"."]})})]})},yn=function(n){n&&n instanceof Function&&t.e(3).then(t.bind(null,543)).then((function(e){var t=e.getCLS,a=e.getFID,o=e.getFCP,c=e.getLCP,r=e.getTTFB;t(n),a(n),o(n),c(n),r(n)}))};t(538);y.a.render(Object(ln.jsx)(S.a,{store:U,children:Object(ln.jsx)(On,{})}),document.getElementById("root")),yn()}},[[539,1,2]]]);
//# sourceMappingURL=main.fdcf9d7e.chunk.js.map