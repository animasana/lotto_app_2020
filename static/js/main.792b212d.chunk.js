(this.webpackJsonplotto_app_2020=this.webpackJsonplotto_app_2020||[]).push([[0],{11:function(t,e,n){},12:function(t,e,n){"use strict";n.r(e);var r=n(0),a=n.n(r),o=n(2),l=n.n(o),i=n(5),s=n(3),u=n(4),c=function(){function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:5,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:6,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:45;Object(s.a)(this,t),this.nRows=e,this.nCols=n,this.nSize=r,this.lottoMatrix=new Array(e);for(var a=0;a<this.lottoMatrix.length;a++)this.lottoMatrix[a]=new Array(n)}return Object(u.a)(t,[{key:"sample",value:function(){if(this.nRows<=0||this.nCols<=0||this.nSize<this.nCols)throw Error("Illegal Argument!!!");for(var t=0;t<this.lottoMatrix.length;t++)for(var e=Array(this.nSize).fill().map((function(t,e){return e+1})),n=0;n<this.lottoMatrix[t].length;n++){var r=Math.floor(e.length*Math.random());this.lottoMatrix[t][n]=e.splice(r,1)[0]}}},{key:"sort",value:function(){this.lottoMatrix.forEach((function(t){return t.sort((function(t,e){return t-e}))}))}},{key:"matrixToString",value:function(){var t=Math.floor(Math.log10(this.nSize))+1;return this.lottoMatrix.map((function(e){return e.map((function(e){return function(t,e){return(t+="").length>=e?t:new Array(e-t.length+1).join("0")+t}(e,t)})).join(" ")})).join("\n")}},{key:"str",value:function(){try{return this.sample(),this.sort(),this.matrixToString()}catch(t){return""+t}}}]),t}();n(11);var h=function(t){var e=new c(5,6,45),n=a.a.useState(e.str()),r=Object(i.a)(n,2),o=r[0],l=r[1],s=new Date,u=s.getFullYear(),h=s.getMonth()+1,m=s.getDate();return a.a.createElement(a.a.Fragment,null,a.a.createElement("div",{className:"lottoStyle"},a.a.createElement("span",null,u,"\ub144 ",h,"\uc6d4 ",m,"\uc77c"),a.a.createElement("hr",null),a.a.createElement("span",null,t.name),a.a.createElement("hr",null),a.a.createElement("span",null,o.split("\n").map((function(t,e){return a.a.createElement("span",{key:"line-"+e},t,a.a.createElement("br",null))})))),a.a.createElement("div",{className:"buttonStyle"},a.a.createElement("button",{onClick:function(t){t.preventDefault(),l(e.str())}},"\ub85c\ub610 \uc7ac\ubc1c\ud589")))};var m=function(){return a.a.createElement(h,{name:"GiGSoft"})};l.a.render(a.a.createElement(m,null),document.getElementById("root"))},6:function(t,e,n){t.exports=n(12)}},[[6,1,2]]]);
//# sourceMappingURL=main.792b212d.chunk.js.map