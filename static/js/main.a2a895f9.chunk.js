(this.webpackJsonpqlda=this.webpackJsonpqlda||[]).push([[0],{119:function(e,t,n){e.exports=n.p+"static/media/logo.5d5d9eef.svg"},124:function(e,t,n){e.exports=n(204)},129:function(e,t,n){},204:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(3),c=n.n(o),i=(n(90),n(62)),l=n(18),u=(n(129),n(23)),s=n(210),m=n(213),f=n(88),d=n(212),b=n(9),h=n(24);function v(){var e=Object(u.a)(["\n  text-decoration: underline;\n  font-weight: 500;\n"]);return v=function(){return e},e}function g(){var e=Object(u.a)([""]);return g=function(){return e},e}var p=h.a.span(g()),E=h.a.span(v()),j=function(e){var t=e.text,n=e.isAns,a=n?E:p;return r.a.createElement(a,null,t,n&&r.a.createElement(b.a,{type:"star-o",style:{marginLeft:8,color:"#eb2f96"}}))};var O=function(e){var t=e.A,n=e.B,a=e.C,o=e.D,c=e.Ans;return[r.a.createElement(j,{text:"".concat(t),isAns:"A"===c,key:"list-vertical-star-o"}),r.a.createElement(j,{text:"".concat(n),isAns:"B"===c,key:"list-vertical-like-o"}),r.a.createElement(j,{text:"".concat(a),isAns:"C"===c,key:"list-vertical-message"}),r.a.createElement(j,{text:"".concat(o),isAns:"D"===c,key:"list-vertical-message"})]},k=n(211),w=n(207),y=Object(a.createContext)([]),x=Object(a.createContext)([]);function C(){var e=Object(u.a)(["\n  display: flex;\n  align-items: center;\n  > * {\n    &:first-child {\n      width: 300px;\n      input {\n        background-color: #fff0;\n      }\n    }\n    &:nth-child(2) {\n      margin-left: 10px;\n    }\n  }\n"]);return C=function(){return e},e}var S=k.a.Search,A=h.a.div(C());var I=function(){var e=Object(a.useContext)(y),t=Object(l.a)(e,2)[1],n=Object(a.useContext)(x),o=Object(l.a)(n,2),c=o[0],i=o[1];return r.a.createElement(A,null,r.a.createElement(S,{onSearch:t,placeholder:"T\xecm ki\u1ebfm n\u1ed9i dung "}),r.a.createElement(w.a,{size:"small",onChange:function(e){i(e),e?localStorage.setItem("theme","1"):localStorage.removeItem("theme")},checked:c}))};function N(){var e=Object(u.a)(["\n      li {\n        ","\n        .ant-list-item-meta-title {\n          ","\n        }\n      }\n    "]);return N=function(){return e},e}function q(){var e=Object(u.a)(["\n  margin-bottom: 20px;\n  & .ant-list-item-action {\n    display: flex;\n    align-items: flex-start;\n    flex-direction: column;\n  }\n  & .ant-list-item-action > li {\n    display: block;\n    padding: 0;\n    text-align: start;\n  }\n  & .ant-list-item-action-split {\n    display: none;\n  }\n  .ant-input-number {\n    background-color: #fff0;\n    color: inherit;\n  }\n  .ant-list-pagination {\n    ul {\n      li, li a{\n        background-color: #fff0;\n        color: inherit;\n      }\n    }\n  }\n"]);return q=function(){return e},e}function z(){var e=Object(u.a)(["\n  @media (min-width: 961px) {\n    max-width: 70%;\n  }\n  word-break: break-word;\n  font-weight: 500;\n"]);return z=function(){return e},e}var L=h.a.div(z());function M(e){var t=e.item,n=e.index;return r.a.createElement("div",{id:"q-".concat(n+1)},r.a.createElement(s.a.Item,{actions:O(t)},r.a.createElement(s.a.Item.Meta,{title:"C\xe2u th\u1ee9 ".concat(n+1)}),r.a.createElement(L,null,t.noidung)))}var T=h.a.div(q());var B=Number.parseInt(localStorage.getItem("pageSize")||"10",10);function D(){var e=window.location.hash.split("-"),t=Number(e[1])||1;return t<1?1:t}var J=function(e){var t=e.data,n=Object(a.useState)(""),o=Object(l.a)(n,2),c=o[0],u=o[1],b=Object(a.useState)(1),v=Object(l.a)(b,2),g=v[0],p=v[1],E=Object(a.useState)(B),j=Object(l.a)(E,2),O=j[0],k=j[1],w=Object(a.useContext)(x),C=Object(l.a)(w,1)[0],S=Object(a.useMemo)((function(){return t.filter(function(e){var t=new RegExp(e);return function(e){return e.noidung.match(t)}}(c))}),[c]);function A(){var e=D()-1;window.location.hash="q-".concat(e)}function q(){var e=D()+1;window.location.hash="q-".concat(e>=O*g-1?(g-1)*O+1:e)}Object(a.useEffect)((function(){localStorage.setItem("pageSize",String(O))}),[O]);var z=Object(a.useMemo)((function(){return Object(h.a)(T)(N(),C?{color:"#dbd8e3"}:{},C?{color:"#dbd8e3"}:{})}),[C]);Object(a.useEffect)((function(){var e=function(e){38===e.keyCode||40===e.keyCode||(37===e.keyCode?A():39===e.keyCode&&q())};return document.addEventListener("keydown",e),function(){return document.removeEventListener("keydown",e)}}),[g]);var L=Object(a.useMemo)((function(){return Object(i.a)({backgroundColor:"#fff0"},C?{color:"white"}:{color:"black"})}),[C]);return r.a.createElement(y.Provider,{value:[c,u]},r.a.createElement(m.a,{offsetTop:500,style:{position:"absolute",right:40}},r.a.createElement(f.a,{type:"dashed",style:L,onClick:q,icon:"right"})),r.a.createElement(m.a,{offsetTop:500,style:{position:"absolute",left:0}},r.a.createElement(f.a,{type:"dashed",style:L,onClick:A,icon:"left"})),r.a.createElement(z,{id:"start"},r.a.createElement(s.a,{header:r.a.createElement(I,null),itemLayout:"vertical",size:"large",pagination:{onChange:function(e){p(e),window.location.hash="start",setTimeout((function(){window.location.hash=""}),200)},current:g,pageSize:O},dataSource:S,renderItem:function(e,t){return r.a.createElement(M,{item:e,index:(g-1)*O+t})}}),r.a.createElement(d.a,{min:1,max:400,value:O,onChange:function(e){k(e||1)}})))},P=n(119),W=n.n(P);var R=function(e){return r.a.createElement("div",{className:"App"},r.a.createElement("header",{className:"App-header"},r.a.createElement("img",{src:W.a,className:"App-logo",alt:"logo"}),r.a.createElement("p",null,"Loading....")))},$=n(208),F=n(209),G=n(2),H=n.n(G);var K=function(){var e=Object(a.useState)(!0),t=Object(l.a)(e,2),o=t[0],c=t[1],u=Object(a.useState)([]),s=Object(l.a)(u,2),d=s[0],b=s[1],h=Object(a.useState)(!!localStorage.getItem("theme")),v=Object(l.a)(h,2),g=v[0],p=v[1],E=Object(a.useMemo)((function(){return Object(i.a)({backgroundColor:"#fff0"},g?{color:"white"}:{color:"black"})}),[g]);return Object(a.useEffect)((function(){n.e(3).then(n.t.bind(null,214,3)).then((function(e){return b(e.entries.entry)})).finally((function(){return c(!1)}))}),[]),o?r.a.createElement(R,null):r.a.createElement(x.Provider,{value:[g,p]},r.a.createElement("div",{className:H()({dark:g})},r.a.createElement($.a,null,r.a.createElement(m.a,{offsetTop:20,style:{position:"absolute",right:10}},r.a.createElement(f.a,{type:"dashed",href:"#start",style:E,icon:"up"})),r.a.createElement(F.a,{span:22,offset:1},r.a.createElement(J,{data:d})))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(K,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},90:function(e,t,n){}},[[124,1,2]]]);
//# sourceMappingURL=main.a2a895f9.chunk.js.map