(this.webpackJsonpexchange=this.webpackJsonpexchange||[]).push([[0],{107:function(e,t,n){},136:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),r=n(10),i=n.n(r),o=(n(107),n(108),n(43)),s=n(89),l=n(12),u="SET_CURRENCIES",j={currencies:[]},d=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:j,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case u:var n=JSON.parse(JSON.stringify(t.currencies)),a=Object.values(n);return a.map((function(e){return e.diff=Number((e.Value-e.Previous).toFixed(4)),e.diff>0&&(e.priceRise=!0),e})),Object(l.a)(Object(l.a)({},e),{},{currencies:a});default:return e}};function b(e){return{type:u,currencies:e}}var O=n(37),h=n(79),p="SET_CONVERT_FROM",m="SET_CONVERT_TO",f={convertFrom:{},convertTo:{}};var x=Object(O.c)({Currencies:d,Conversion:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:f,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case p:return Object(l.a)(Object(l.a)(Object(l.a)({},e),e.convertFrom),{},{convertFrom:t.object});case m:return Object(l.a)(Object(l.a)(Object(l.a)({},e),e.convertFrom),{},{convertTo:t.object});default:return e}}}),g=Object(O.d)(x,Object(O.a)(h.a)),v=n(63),C=n.n(v),N=n(80),S=n(81),y=n.n(S),w=function(){return y.a.get("https://www.cbr-xml-daily.ru/daily_json.js",{"Access-Control-Allow-Origin":"*"}).then((function(e){return e.data.Valute}))},T=n(17),I=n(177),z=n(179),M=n(175),R=n(176),k=n(139),F=n(181),E=n(170),V=n(183),B=n(180),W=n(174),_=n(178),A=n(172),H=n(184),J=n(3),L=Object(E.a)((function(e){return{root:{width:"75%",borderBottom:"none","& .MuiSelect-root":{fontSize:e.spacing(4)},"& .MuiSelect-selectMenu":{minHeight:0},"& .MuiInput-underline:before":{borderBottom:"none"},"& .MuiInputBase-root:hover":{border:"none"},"& .MuiInput-underline:hover:before":{border:"none"},"& .MuiInput-underline:after":{border:"none"}}}}));function U(e){var t=L();return Object(J.jsx)(F.a,{className:t.root,select:!0,value:"from"===e.id?e.value.valueFrom:e.value.valueTo,onChange:function(t){return e.handleSelectValue(t.target.value,e.id)},children:e.currencies?e.currencies.map((function(e){return Object(J.jsx)(H.a,{value:e.CharCode,children:e.CharCode},e.CharCode)})):null})}var D=Object(E.a)((function(e){return{paper:{borderRadius:e.spacing(2)},title:{marginTop:e.spacing(1),fontSize:e.spacing(3)},input:{fontSize:e.spacing(4),textOverflow:"clip","& .MuiInputBase-input":{padding:0},"& .MuiInput-underline:before":{borderBottom:"none"},"& .MuiInputBase-root:hover":{border:"none"},"& .MuiInput-underline:hover":{border:"none"},"& .MuiInput-underline:after":{border:"none"}},container:{marginBottom:e.spacing(1)},selector:{width:"100%",display:"flex",alignItems:"center"}}}));function P(e){var t=D();return Object(J.jsx)(k.a,{className:t.paper,children:Object(J.jsxs)(W.a,{container:!0,children:[Object(J.jsx)(W.a,{item:!0,xs:12,className:t.title,children:Object(J.jsx)(M.a,{children:Object(J.jsx)(R.a,{disabled:!0,className:t.title,variant:"h6",children:"from"===e.id?e.title.titleFrom:e.title.titleTo})})}),Object(J.jsx)(W.a,{item:!0,xs:12,className:t.container,children:Object(J.jsx)(M.a,{children:Object(J.jsxs)(W.a,{container:!0,spacing:2,children:[Object(J.jsx)(W.a,{item:!0,xs:6,className:t.selector,children:Object(J.jsx)(U,Object(l.a)({},e))}),Object(J.jsx)(W.a,{item:!0,xs:6,children:Object(J.jsx)(A.a,{className:t.input,id:e.id,value:"from"===e.id?e.amount.amountFrom:e.amount.amountTo,onChange:function(t){return e.handleInputValue(t.target.value,e.id)}})})]})})})]})})}var q=n(86),G=n.n(q),K=Object(E.a)((function(e){return{root:{display:"flex",marginTop:e.spacing(10),top:e.spacing(18),backgroundColor:e.palette.info.light,minHeight:e.spacing(25),direction:"row",justifyContent:"center",alignItems:"center",borderRadius:e.spacing(2)},grid:{display:"flex",margin:"0 auto",justifyContent:"center",alignItems:"center"},button:{height:e.spacing(8),width:e.spacing(8),borderRadius:"50%"},icon:{transform:"rotate(90deg)",color:e.palette.info.light,height:e.spacing(8),fontSize:e.spacing(6)}}}));function Q(e){var t=K();return Object(J.jsx)(I.a,{maxWidth:"md",className:t.root,children:Object(J.jsxs)(W.a,{container:!0,children:[Object(J.jsx)(W.a,{item:!0,sm:5,className:t.paper,children:Object(J.jsx)(P,Object(l.a)(Object(l.a)({},e),{},{id:"from"}))}),Object(J.jsx)(W.a,{item:!0,sm:2,className:t.grid,children:Object(J.jsx)(_.a,{onClick:e.onClick,variant:"contained",className:t.button,children:Object(J.jsx)(G.a,{className:t.icon})})}),Object(J.jsx)(W.a,{item:!0,sm:5,children:Object(J.jsx)(P,Object(l.a)(Object(l.a)({},e),{},{id:"to"}))})]})})}function X(e){var t=Object(a.useState)("USD"),n=Object(T.a)(t,2),c=n[0],r=n[1],i=Object(a.useState)("EUR"),o=Object(T.a)(i,2),s=o[0],l=o[1],u=Object(a.useState)(),j=Object(T.a)(u,2),d=j[0],b=j[1],O=Object(a.useState)(),h=Object(T.a)(O,2),p=h[0],m=h[1],f=Object(a.useState)("\u0414\u043e\u043b\u043b\u0430\u0440 \u0421\u0428\u0410"),x=Object(T.a)(f,2),g=x[0],v=x[1],C=Object(a.useState)("\u0415\u0432\u0440\u043e"),N=Object(T.a)(C,2),S=N[0],y=N[1],w=Object(a.useState)(),I=Object(T.a)(w,2),z=I[0],M=I[1],R=Object(a.useState)(),k=Object(T.a)(R,2),F=k[0],E=k[1];Object(a.useEffect)((function(){var t=e.currencies.filter((function(e){return e.CharCode===c}))[0];t&&(v(t.Name),M(t),m(""),b(""))}),[c,e]),Object(a.useEffect)((function(){var t=e.currencies.filter((function(e){return e.CharCode===s}))[0];t&&(E(t),y(t.Name),b(""),m(""))}),[s,e]);function V(e,t,n){if(e)return(t.Value/t.Nominal/(n.Value/n.Nominal)*Number(e)).toFixed(2)}return Object(J.jsx)(Q,{currencies:e.currencies,onClick:function(){r(s),l(c)},handleSelectValue:function(e,t){"from"===t?r(e):"to"===t&&l(e)},handleInputValue:function(e,t){"from"===t?(b(e),m(V(e,F,z))):"to"===t&&(m(e),b(V(e,F,z)))},value:{valueFrom:c,valueTo:s},amount:{amountFrom:d,amountTo:p},title:{titleFrom:g,titleTo:S}})}var Y=n(87),Z=n.n(Y),$=n(88),ee=n.n($),te=n(182),ne=Object(E.a)((function(e){return{root:{boxShadow:"5px blue",justifyContent:"space-around",display:"flex",flexWrap:"nowrap"},paper:{borderRadius:e.spacing(2),margin:e.spacing(1)},title:{marginTop:e.spacing(1),fontSize:e.spacing(3)},green:{color:e.palette.success.main,fontSize:e.spacing(5)},red:{color:e.palette.secondary.main,fontSize:e.spacing(5)},container:{justifyContent:"flex-end",fontSize:e.spacing(5),"& .MuiSvgIcon-root":{fontSize:e.spacing(4),marginBottom:e.spacing(.5)}},currency:{fontSize:e.spacing(5)},icon:{transform:"rotate(90deg)",color:e.palette.info.light,height:e.spacing(8),fontSize:e.spacing(10),fontWeight:"normal"}}}));function ae(e){var t=ne();return Object(J.jsx)(k.a,{className:t.paper,children:Object(J.jsxs)(W.a,{container:!0,children:[Object(J.jsx)(W.a,{item:!0,xs:12,children:Object(J.jsx)(M.a,{children:Object(J.jsx)(R.a,{disabled:!0,className:t.title,variant:"h6",children:e.Name})})}),Object(J.jsx)(W.a,{item:!0,xs:12,children:Object(J.jsxs)(W.a,{container:!0,spacing:3,children:[Object(J.jsx)(W.a,{item:!0,xs:8,children:Object(J.jsxs)(W.a,{container:!0,className:t.root,children:[Object(J.jsx)(W.a,{item:!0,children:Object(J.jsx)(te.a,{className:t.root,children:Object(J.jsx)(M.a,{children:Object(J.jsxs)(R.a,{disabled:!0,variant:"h6",className:t.currency,children:[e.Nominal,e.CharCode]})})})}),Object(J.jsx)(W.a,{item:!0,children:Object(J.jsx)("img",{src:"/image/arrow.png",alt:""})}),Object(J.jsx)(W.a,{item:!0,children:Object(J.jsx)(W.a,{container:!0,className:t.container,children:Object(J.jsx)(W.a,{item:!0,children:Object(J.jsx)(M.a,{children:Object(J.jsxs)(R.a,{disabled:!0,variant:"h6",className:t.currency,children:[e.Value.toFixed(2),"RUB"]})})})})})]})}),Object(J.jsx)(W.a,{item:!0,xs:4,children:Object(J.jsx)(W.a,{container:!0,className:t.container,children:Object(J.jsx)(W.a,{item:!0,children:Object(J.jsx)(M.a,{children:Object(J.jsxs)(R.a,{variant:"h6",className:e.priceRise?t.green:t.red,children:[e.priceRise?Object(J.jsx)(Z.a,{}):Object(J.jsx)(ee.a,{}),e.diff]})})})})})]})})]})})}function ce(e){return e.currencies.map((function(e,t){return Object(J.jsx)(ae,Object(l.a)({},e),t)}))}var re=n(90);function ie(e){var t=e.children,n=e.value,a=e.index,c=Object(re.a)(e,["children","value","index"]);return Object(J.jsx)("div",Object(l.a)(Object(l.a)({hidden:n!==a},c),{},{children:n===a&&Object(J.jsx)(te.a,{p:3,children:t})}))}var oe=Object(E.a)((function(e){return{root:{position:"relative",padding:0},root1:{position:"relative",backgroundColor:e.palette.info.light,padding:0},content:{backgroundColor:e.palette.info.light,position:"sticky",padding:0,top:0,zIndex:1e3},header:{minHeight:e.spacing(14),display:"flex",justifyContent:"center"},paper:{borderRadius:"0","& .MuiTab-root":{color:e.palette.info.light,fontSize:e.spacing(3),width:"50%",maxWidth:"none"},"& .MuiTabs-indicator":{backgroundColor:e.palette.primary.main}},input:{marginTop:e.spacing(6),position:"sticky",top:e.spacing(22),autoComplete:"off",zIndex:999},button:{marginTop:e.spacing(2),position:"sticky",top:e.spacing(7),zIndex:999},title:{fontSize:e.spacing(7)},tabs:{width:"100%"},footer:{maxHeight:e.spacing(4),position:"absolute",left:0,bottom:0,backgroundColor:e.palette.info.light},text:{fontSize:e.spacing(2)}}}));function se(e){var t=oe(),n=c.a.useState(0),r=Object(T.a)(n,2),i=r[0],o=r[1],s=e.currencies,u=Object(a.useState)(),j=Object(T.a)(u,2),d=j[0],b=j[1];return Object(J.jsxs)(I.a,{className:1===i?t.root1:t.root,maxWidth:"lg",children:[Object(J.jsxs)(I.a,{className:t.content,children:[Object(J.jsx)(z.a,{position:"static",className:t.header,children:Object(J.jsx)(M.a,{children:Object(J.jsx)(R.a,{className:t.title,variant:"h3",children:"Currency Exchange"})})}),Object(J.jsx)(k.a,{className:t.paper,children:Object(J.jsxs)(V.a,{value:i,onChange:function(e,t){o(t)},className:t.tabs,textColor:"secondary",children:[Object(J.jsx)(B.a,{label:"\u0421\u043f\u0438\u0441\u043e\u043a \u0432\u0430\u043b\u044e\u0442"}),Object(J.jsx)(B.a,{label:"\u041a\u043e\u043d\u0432\u0435\u0440\u0442\u0435\u0440 \u0432\u0430\u043b\u044e\u0442"})]})})]}),Object(J.jsxs)(I.a,{className:t.root,maxWidth:"md",children:[1===i?Object(J.jsx)(I.a,{className:t.input,children:Object(J.jsx)(k.a,{children:Object(J.jsx)(F.a,{id:"filled-search",fullWidth:!0,label:"\u0412\u0430\u043b\u044e\u0442\u0430",type:"search",variant:"filled",avtocomplite:"off",onChange:function(e){var t;(t=e.target.value).charCodeAt()>61&&t.charCodeAt()<122?b(s.filter((function(e){return-1!==e.CharCode.toLowerCase().indexOf(t.toLowerCase())}))):b(s.filter((function(e){return-1!==e.Name.toLowerCase().indexOf(t.toLowerCase())})))}})})}):null,Object(J.jsxs)(I.a,{children:[Object(J.jsx)(ie,{value:i,index:0,children:Object(J.jsx)(X,Object(l.a)({},e))}),Object(J.jsx)(ie,{value:i,index:1,children:Object(J.jsx)(ce,{currencies:d||s})})]})]})]})}function le(){var e=Object(o.c)((function(e){return e.Currencies.currencies})),t=Object(o.b)();return Object(a.useEffect)((function(){t(Object(N.a)(C.a.mark((function e(){var n;return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,w();case 2:n=e.sent,t(b(n));case 4:case"end":return e.stop()}}),e)}))))}),[t]),Object(J.jsx)(se,{currencies:e})}i.a.render(Object(J.jsx)(o.a,{store:g,children:Object(J.jsx)(s.a,{children:Object(J.jsx)(le,{})})}),document.getElementById("root"))}},[[136,1,2]]]);
//# sourceMappingURL=main.ee7fff9c.chunk.js.map