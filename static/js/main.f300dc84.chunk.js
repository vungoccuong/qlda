(this.webpackJsonpqlda=this.webpackJsonpqlda||[]).push([[0],{115:function(e,t,n){e.exports=n.p+"static/media/logo.5d5d9eef.svg"},120:function(e,t,n){e.exports=n(199)},125:function(e,t,n){},199:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(3),i=n.n(o),c=(n(87),n(26)),l=(n(125),n(31)),u=n(205),s=n(207),m=n(85),f=n(8),d=n(32);function v(){var e=Object(l.a)([""]);return v=function(){return e},e}var E=d.a.span(v()),p=function(e){var t=e.text,n=e.isAns;return r.a.createElement(E,null,t,n&&r.a.createElement(f.a,{type:"star-o",style:{marginLeft:8,color:"#eb2f96"}}))};var h=function(e){var t=e.A,n=e.B,a=e.C,o=e.D,i=e.Ans;return[r.a.createElement(p,{text:"".concat(t),isAns:"A"===i,key:"list-vertical-star-o"}),r.a.createElement(p,{text:"".concat(n),isAns:"B"===i,key:"list-vertical-like-o"}),r.a.createElement(p,{text:"".concat(a),isAns:"C"===i,key:"list-vertical-message"}),r.a.createElement(p,{text:"".concat(o),isAns:"D"===i,key:"list-vertical-message"})]},b=n(206),g=Object(a.createContext)([]);function y(){var e=Object(l.a)(["\n  > * {\n    width: 60%;\n  }\n"]);return y=function(){return e},e}var k=b.a.Search,w=d.a.div(y());var j=function(){var e=Object(a.useContext)(g),t=Object(c.a)(e,2)[1];return r.a.createElement(w,null,r.a.createElement(k,{onSearch:t,placeholder:"T\xecm ki\u1ebfm n\u1ed9i dung "}))};function x(){var e=Object(l.a)(["\n  margin-bottom: 20px;\n  & .ant-list-item-action {\n    display: flex;\n    align-items: flex-start;\n    flex-direction: column;\n  }\n  & .ant-list-item-action > li {\n    display: block;\n    padding: 0;\n    text-align: start;\n  }\n  &.ant-list-item-action-split {\n    display: none;\n  }\n"]);return x=function(){return e},e}function O(){var e=Object(l.a)(["\n  max-width: 70%;\n  word-break: break-word;\n  font-weight: 500;\n"]);return O=function(){return e},e}var C=d.a.div(O());function A(e){var t=e.item,n=e.index;return r.a.createElement(u.a.Item,{actions:h(t)},r.a.createElement(u.a.Item.Meta,{title:"C\xe2u th\u1ee9 ".concat(n+1)}),r.a.createElement(C,null,t.noidung))}var S=d.a.div(x());var T=function(e){var t=e.data,n=Object(a.useState)(""),o=Object(c.a)(n,2),i=o[0],l=o[1],f=Object(a.useState)(1),d=Object(c.a)(f,2),v=d[0],E=d[1],p=Object(a.useMemo)((function(){return t.filter(function(e){var t=new RegExp(e);return function(e){return e.noidung.match(t)}}(i))}),[i]),h=function(){return v>1&&E(v-1)},b=function(){return E(v+1)};return Object(a.useEffect)((function(){var e=function(e){38===e.keyCode||40===e.keyCode||(37===e.keyCode?h():39===e.keyCode&&b())};return document.addEventListener("keydown",e),function(){return document.removeEventListener("keydown",e)}}),[v]),r.a.createElement(g.Provider,{value:[i,l]},r.a.createElement(s.a,{offsetTop:500,style:{position:"absolute",right:40}},r.a.createElement(m.a,{onClick:b,icon:"right"})),r.a.createElement(s.a,{offsetTop:500,style:{position:"absolute",left:0}},r.a.createElement(m.a,{onClick:h,icon:"left"})),r.a.createElement(S,{id:"start"},r.a.createElement(u.a,{header:r.a.createElement(j,null),itemLayout:"vertical",size:"large",pagination:{onChange:function(e){E(e),window.location.hash="start",setTimeout((function(){window.location.hash=""}),200)},current:v,pageSize:5},dataSource:p,renderItem:function(e,t){return r.a.createElement(A,{item:e,index:5*(v-1)+t})}})))},L=n(115),B=n.n(L);var I=function(e){return r.a.createElement("div",{className:"App"},r.a.createElement("header",{className:"App-header"},r.a.createElement("img",{src:B.a,className:"App-logo",alt:"logo"}),r.a.createElement("p",null,"Loading....")))},N=n(203),q=n(204);var z=function(){var e=Object(a.useState)(!0),t=Object(c.a)(e,2),o=t[0],i=t[1],l=Object(a.useState)([]),u=Object(c.a)(l,2),f=u[0],d=u[1];return Object(a.useEffect)((function(){n.e(3).then(n.t.bind(null,208,3)).then((function(e){return new Promise((function(t){setTimeout((function(){return t(e)}),1e3)}))})).then((function(e){return d(e.entries.entry)})).finally((function(){return i(!1)}))}),[]),o?r.a.createElement(I,null):r.a.createElement(N.a,null,r.a.createElement(s.a,{offsetTop:20,style:{position:"absolute",right:10}},r.a.createElement(m.a,{href:"#start",icon:"up"})),r.a.createElement(q.a,{span:22,offset:1},r.a.createElement(T,{data:f})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(z,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},87:function(e,t,n){}},[[120,1,2]]]);
//# sourceMappingURL=main.f300dc84.chunk.js.map