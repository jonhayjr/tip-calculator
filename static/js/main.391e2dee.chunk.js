(this["webpackJsonptip-calculator"]=this["webpackJsonptip-calculator"]||[]).push([[0],{22:function(t,e,i){},23:function(t,e,i){},28:function(t,e,i){"use strict";i.r(e);var a=i(0),n=i.n(a),l=i(11),s=i.n(l),c=(i(21),i(22),i(23),i(12)),o=i(13),r=i(14),u=i(6),h=i(16),b=i(15),m=i(30),d=i(31),j=i(32),p=i(5),v=function(t){Object(h.a)(i,t);var e=Object(b.a)(i);function i(t){var a;return Object(o.a)(this,i),(a=e.call(this,t)).tipAmount=function(t){return"Great"===t?.25:"Good"===t?.15:"Okay"===t?.1:"Bad"===t?.05:0},a.state={billAmount:"",serviceQuality:"",tipPercent:"",tipAmount:"",totalAmount:"",isCalculated:!1},a.handleChange=a.handleChange.bind(Object(u.a)(a)),a.handleSubmit=a.handleSubmit.bind(Object(u.a)(a)),a.handleReset=a.handleReset.bind(Object(u.a)(a)),a}return Object(r.a)(i,[{key:"handleChange",value:function(t){var e=t.target.name,i="billAmount"===e?parseFloat(t.target.value):t.target.value;if(this.state.billAmount!==i&&"billAmount"===e&&this.state.serviceQuality){var a=this.tipAmount(this.state.serviceQuality),n=a*i,l=n+i;this.setState({tipAmount:n,tipPercent:a,totalAmount:l})}else if(this.state.serviceQuality!==i&&"serviceQuality"===e&&this.state.billAmount){var s=this.tipAmount(i),o=this.state.billAmount,r=s*o,u=r+o;this.setState({tipAmount:r,tipPercent:s,totalAmount:u})}this.setState(Object(c.a)({},e,i))}},{key:"handleSubmit",value:function(t){t.preventDefault();var e=this.tipAmount(this.state.serviceQuality),i=this.state.billAmount,a=e*i,n=a+i;this.setState({tipAmount:a,tipPercent:e,totalAmount:n,isCalculated:!0})}},{key:"handleReset",value:function(){this.setState({billAmount:"",serviceQuality:"",tipPercent:"",tipAmount:"",totalAmount:"",isCalculated:!1})}},{key:"render",value:function(){return Object(p.jsxs)(m.a,{children:[Object(p.jsx)("h1",{children:"Tip Calculator"}),Object(p.jsxs)(d.a,{onSubmit:this.handleSubmit,children:[Object(p.jsxs)(d.a.Group,{controlId:"formGroupEmail",children:[Object(p.jsx)(d.a.Label,{children:"Bill Amount"}),Object(p.jsx)(d.a.Control,{type:"text",name:"billAmount",value:this.state.billAmount,onChange:this.handleChange,placeholder:"Enter bill amount"})]}),Object(p.jsx)(d.a.Label,{className:"my-1 mr-2",htmlFor:"inlineFormCustomSelectPref",children:"How was the service?"}),Object(p.jsxs)(d.a.Control,{as:"select",className:"my-1 mr-sm-2",id:"inlineFormCustomSelectPref",custom:!0,name:"serviceQuality",value:this.state.serviceQuality,onChange:this.handleChange,children:[Object(p.jsx)("option",{value:"0",children:"Choose..."}),Object(p.jsx)("option",{value:"Great",children:"Great - 25%"}),Object(p.jsx)("option",{value:"Good",children:"Good - 15%"}),Object(p.jsx)("option",{value:"Okay",children:"Okay - 10%"}),Object(p.jsx)("option",{value:"Okay",children:"Bad - 5%"}),Object(p.jsx)("option",{value:"Horrible",children:"Horrible - 0%"})]}),Object(p.jsx)(m.a,{children:this.state.isCalculated&&this.state.billAmount&&this.state.serviceQuality&&Object(p.jsxs)("div",{children:[Object(p.jsxs)("p",{children:["Bill Amount: $",this.state.billAmount.toFixed(2)]}),Object(p.jsxs)("p",{children:["Tip Percent: ",100*this.state.tipPercent,"%"]}),Object(p.jsxs)("p",{children:["Tip Amount: $",this.state.tipAmount.toFixed(2)]}),Object(p.jsxs)("p",{children:["Your total bill amount is: $",this.state.totalAmount.toFixed(2),"."]})]})}),Object(p.jsx)(j.a,{variant:"primary",type:"submit",children:"Submit"}),Object(p.jsx)(j.a,{className:"mx-1",variant:"secondary",type:"submit",onClick:this.handleReset,children:"Reset"})]})]})}}]),i}(a.Component);var O=function(){return Object(p.jsx)("div",{className:"App",children:Object(p.jsx)(v,{})})},A=function(t){t&&t instanceof Function&&i.e(3).then(i.bind(null,33)).then((function(e){var i=e.getCLS,a=e.getFID,n=e.getFCP,l=e.getLCP,s=e.getTTFB;i(t),a(t),n(t),l(t),s(t)}))};s.a.render(Object(p.jsx)(n.a.StrictMode,{children:Object(p.jsx)(O,{})}),document.getElementById("root")),A()}},[[28,1,2]]]);
//# sourceMappingURL=main.391e2dee.chunk.js.map