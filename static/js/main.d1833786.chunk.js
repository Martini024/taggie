(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{20:function(e,t,a){e.exports=a(52)},25:function(e,t,a){},26:function(e,t,a){},32:function(e,t,a){},34:function(e,t,a){},35:function(e,t,a){},36:function(e,t,a){},37:function(e,t,a){},38:function(e,t,a){},39:function(e,t,a){},40:function(e,t,a){},51:function(e,t,a){},52:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(15),c=a.n(i),l=a(2),o=a(3),s=a(5),u=a(4),d=a(6),m=(a(25),function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"video-wrapper"},r.a.createElement("video",{src:"./video/Demo.mp4",className:"demoVideo",controls:!0,autoPlay:!0,muted:!0,playsInline:!0,type:"video/mp4"}))}}]),t}(n.Component)),p=(a(26),function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"intro-wrapper"},r.a.createElement("h1",{id:"title"},"How it works"),r.a.createElement("div",{id:"excel"}),r.a.createElement("div",{className:"arrowLeft"}),r.a.createElement("div",{id:"broswer"}),r.a.createElement("div",{className:"arrowRight"}),r.a.createElement("div",{id:"excel-with-content"}),r.a.createElement("h1",{className:"single-description"},"In single mode, input the product name, output the classification result and the accuracy."),r.a.createElement("h1",{className:"batch-description"},"In batch mode, input the csv file having only one column ITEM_NAME, output the sunburst diagram (data visualization) and user can download the classified file."))}}]),t}(n.Component)),h=a(7),f=a(9),b=a.n(f),v=a(10),y=a(11),E=a(16),g=(a(32),function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=(100*this.props.now).toFixed(2);return r.a.createElement("div",{className:"progress"},r.a.createElement("div",{className:"progressBar",style:{width:e+"%"}},"Accuracy     "+e+"%"))}}]),t}(n.Component));a(33),a(34);v.b.add(E.a);var j=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(s.a)(this,Object(u.a)(t).call(this,e))).state={type:["","",""],prob:0},a.handleClick=a.handleClick.bind(Object(h.a)(Object(h.a)(a))),a}return Object(d.a)(t,e),Object(o.a)(t,[{key:"handleClick",value:function(e){var t=this,a='https://taggie.tech/upload?productname="'+b()("#singleInput").val()+'"';b.a.ajax({url:a,type:"GET",dataType:"json",crossDomain:!0,success:function(e){var a={};0===e.code?(a.type=e.type.split("--"),a.prob=e.prob):(a.type=["","",""],a.prob=0,alert(e.message)),t.setState(a)}})}},{key:"render",value:function(){return r.a.createElement("div",{className:"single-wrapper"},r.a.createElement("h1",{id:"singleTitle"},"Single Mode"),r.a.createElement("div",{alt:"",id:"singleImg"}),r.a.createElement("div",null,r.a.createElement("input",{id:"singleInput",placeholder:"Product Name"}),r.a.createElement("button",{id:"singleCommit",onClick:this.handleClick},"Get Started!")),r.a.createElement("div",null,0!==this.state.type.length?r.a.createElement("div",{className:"typeGroup"},r.a.createElement("label",{id:"type1",className:"btn singleType"},r.a.createElement(y.a,{icon:"tags"}),this.state.type[0]),r.a.createElement("label",{id:"type2",className:"btn singleType"},r.a.createElement(y.a,{icon:"tags"}),this.state.type[1]),r.a.createElement("label",{id:"type3",className:"btn singleType"},r.a.createElement(y.a,{icon:"tags"}),this.state.type[2])):null),r.a.createElement("div",null,r.a.createElement(g,{now:this.state.prob})))}}]),t}(n.Component),O=a(18),C=a(19),w=(a(35),function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("select",{id:"modeSelect",value:this.props.mode,name:"mode",onChange:this.props.handleChange},r.a.createElement("option",{defaultValue:!0,value:"0"},"Efficiency Priority"),r.a.createElement("option",{value:"1"},"Precision Priority"))}}]),t}(n.Component)),x=(a(36),function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"fileContainer"},r.a.createElement("input",{className:"fileInput",type:"file",name:"Upload",accept:".csv",id:"csvFileUpload",onChange:this.props.handleFileUpload}),r.a.createElement("label",{className:"fileInputLabel"},"Upload CSV"),r.a.createElement(w,{handleChange:this.props.handleChange,mode:this.props.mode}))}}]),t}(n.Component)),k=a(8),N=(a(37),function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(s.a)(this,Object(u.a)(t).call(this))).state={data:e.data},a}return Object(d.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){this.drawChart(this.state.data)}},{key:"shouldComponentUpdate",value:function(){return!1}},{key:"partition",value:function(e){var t=k.c(e).sum(function(e){return e.value}).sort(function(e,t){return t.value-e.value});return k.f().size([2*Math.PI,t.height+1])(t)}},{key:"arcVisible",value:function(e){return e.y1<=3&&e.y0>=1&&e.x1>e.x0}},{key:"labelVisible",value:function(e){return e.y1<=3&&e.y0>=1&&(e.y1-e.y0)*(e.x1-e.x0)>.1}},{key:"labelTransform",value:function(e,t){var a=(e.x0+e.x1)/2*180/Math.PI,n=(e.y0+e.y1)/2*t;return"rotate(".concat(a-90,") translate(").concat(n,",0) rotate(").concat(a<180?0:180,")")}},{key:"drawChart",value:function(){var e=this,t=k.i(".sunburst"),a=parseInt(t.style("width")),n=parseInt(t.style("padding-top")),r=this.partition(this.state.data);r.each(function(e){return e.current=e});var i=k.h(k.g(k.e,this.state.data.children.length+1)),c=k.b(",d"),l=a/6-n,o=k.a().startAngle(function(e){return e.x0}).endAngle(function(e){return e.x1}).padAngle(function(e){return Math.min((e.x1-e.x0)/2,.005)}).padRadius(1.5*l).innerRadius(function(e){return e.y0*l}).outerRadius(function(e){return Math.max(e.y0*l,e.y1*l-1)}),s=function(t){p.datum(t.parent||r),r.each(function(e){return e.target={x0:2*Math.max(0,Math.min(1,(e.x0-t.x0)/(t.x1-t.x0)))*Math.PI,x1:2*Math.max(0,Math.min(1,(e.x1-t.x0)/(t.x1-t.x0)))*Math.PI,y0:Math.max(0,e.y0-t.depth),y1:Math.max(0,e.y1-t.depth)}});var a=u.transition().duration(750);d.transition(a).tween("data",function(e){var t=k.d(e.current,e.target);return function(a){return e.current=t(a)}}).filter(function(e){return this.getAttribute("fill-opacity")||this.arcVisible(e.target)}).attr("fill-opacity",function(t){return e.arcVisible(t.target)?t.children?.6:.4:0}).attrTween("d",function(e){return function(){return o(e.current)}}),m.filter(function(e){return this.getAttribute("fill-opacity")||this.labelVisible(e.target)}).transition(a).attr("fill-opacity",function(t){return+e.labelVisible(t.target)}).attrTween("transform",function(t){return function(){return e.labelTransform(t.current,l)}})},u=t.append("g").attr("transform","translate(".concat((a-n)/2,",").concat((a-n)/2,")")),d=u.selectAll("path").data(r.descendants().slice(1)).join("path").attr("fill",function(e){for(;e.depth>1;)e=e.parent;return i(e.data.name)}).attr("fill-opacity",function(t){return e.arcVisible(t.current)?t.children?.6:.4:0}).attr("d",function(e){return o(e.current)});d.filter(function(e){return e.children}).style("cursor","pointer").on("click",s),d.append("title").text(function(e){return"Type: ".concat(e.ancestors().map(function(e){return e.data.name}).reverse().join("-"),"\nNumebr: ").concat(c(e.value))});var m=u.append("g").attr("pointer-events","none").attr("text-anchor","middle").style("user-select","none").selectAll("text").data(r.descendants().slice(1)).join("text").attr("dy","0.35em").attr("fill-opacity",function(t){return+e.labelVisible(t.current)}).attr("transform",function(t){return e.labelTransform(t.current,l)}).text(function(e){return e.data.name}),p=u.append("circle").datum(r).attr("r",l).attr("fill","none").attr("pointer-events","all").on("click",s)}},{key:"render",value:function(){return r.a.createElement("svg",{className:"sunburst"})}}]),t}(n.Component)),T=(a(38),function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("a",{id:"download",download:!0,href:this.props.href},"Download")}}]),t}(n.Component)),I=(a(39),function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(s.a)(this,Object(u.a)(t).call(this,e))).state={code:null,data:null,open:!1,href:null,mode:0},a.handleFileUpload=a.handleFileUpload.bind(Object(h.a)(Object(h.a)(a))),a.handleChange=a.handleChange.bind(Object(h.a)(Object(h.a)(a))),a}return Object(d.a)(t,e),Object(o.a)(t,[{key:"handleChange",value:function(e){var t=e.target,a=t.name,n=t.value;this.setState(Object(O.a)({},a,n))}},{key:"handleFileUpload",value:function(e){b()(".spinner").show(400);var t=this,a=new FormData;a.append("file_test",e.target.files[0]),a.append("encoding","utf-8"),a.append("deal_type",this.state.mode),console.log(),b.a.ajax({url:"https://taggie.tech/uploadfile",type:"POST",data:a,dataType:"json",crossDomain:!0,processData:!1,contentType:!1,success:function(e,a){e.results.name="",e.filename=e.filename.split("/").pop(),t.setState({code:e.code,data:e.results,href:"https://taggie.tech/download/"+e.filename}),b()(".spinner").hide(400),b()(".fileInput").val("")}})}},{key:"render",value:function(){return r.a.createElement("div",{className:"file-wrapper"},r.a.createElement("h1",{id:"fileTitle"},"Batch Mode"),r.a.createElement("div",{alt:"",id:"fileImg"}),r.a.createElement(x,{handleFileUpload:this.handleFileUpload,handleChange:this.handleChange,mode:this.state.mode}),r.a.createElement(C.a,{trigger:r.a.createElement("button",{className:"showCanvas"}," Open Modal "),modal:!0,closeOnDocumentClick:!0},r.a.createElement("div",{className:"canvas"},0===this.state.code?r.a.createElement(N,{data:this.state.data}):r.a.createElement("div",null))),r.a.createElement(T,{href:this.state.href}))}}]),t}(n.Component)),M=(a(40),function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"wrapper"},r.a.createElement("div",{className:"spinner"}),r.a.createElement(j,null),r.a.createElement(I,null))}}]),t}(n.Component)),S=a(14);a(50),a(51);v.b.add(E.a);var V=function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",{className:"logo"},r.a.createElement(y.a,{icon:"tags"})," Taggie"),r.a.createElement("ul",{className:"menu"},r.a.createElement("li",null,r.a.createElement("a",{href:"#sectionOne",className:"active"},"Demo Video")),r.a.createElement("li",null,r.a.createElement("a",{href:"#sectionTwo"},"Introduction")),r.a.createElement("li",null,r.a.createElement("a",{href:"#sectionThree"},"Try it yourself!"))),r.a.createElement(S.SectionsContainer,{activeClass:"active",anchors:["sectionOne","sectionTwo","sectionThree"],arrowNavigation:!1,className:"SectionContainer",delay:700,navigation:!1,scrollBar:!1,sectionClassName:"Section",verticalAlign:!0},r.a.createElement(S.Section,null,r.a.createElement(m,null)),r.a.createElement(S.Section,null,r.a.createElement(p,null)),r.a.createElement(S.Section,null,r.a.createElement(M,null))))}}]),t}(n.Component);c.a.render(r.a.createElement(V,null),document.getElementById("root"))}},[[20,1,2]]]);
//# sourceMappingURL=main.d1833786.chunk.js.map