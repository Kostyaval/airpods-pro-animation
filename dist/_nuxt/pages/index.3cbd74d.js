(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{180:function(t,n,e){var content=e(184);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(64).default)("1b7833da",content,!0,{sourceMap:!1})},181:function(t,n,e){"use strict";var r=e(6),o=e(182),c=e(118),l=/Version\/10\.\d+(\.\d+)?( Mobile\/\w+)? Safari\//.test(c);r(r.P+r.F*l,"String",{padStart:function(t){return o(this,t,arguments.length>1?arguments[1]:void 0,!0)}})},182:function(t,n,e){var r=e(15),o=e(119),c=e(21);t.exports=function(t,n,e,l){var h=String(c(t)),d=h.length,f=void 0===e?" ":String(e),m=r(n);if(m<=d||""==f)return h;var v=m-d,w=o.call(f,Math.ceil(v/f.length));return w.length>v&&(w=w.slice(0,v)),l?w+h:h+w}},183:function(t,n,e){"use strict";var r=e(180);e.n(r).a},184:function(t,n,e){(n=e(63)(!1)).push([t.i,"html{height:100vh}body{height:200vh;background:#000}canvas{position:fixed;left:50%;top:50%;transform:translate(-50%,-50%);max-width:100vw;max-height:100vh}",""]),t.exports=n},185:function(t,n,e){"use strict";e.r(n);e(22),e(23),e(10),e(181);var r={data:function(){return{images:{}}},mounted:function(){var t=this,html=document.documentElement,canvas=document.getElementById("hero-lightpass"),n=canvas.getContext("2d"),e=function(t){return"https://www.apple.com/105/media/us/airpods-pro/2019/1299e2f5_9206_4470_b28e_08307a42f19b/anim/sequence/large/01-hero-lightpass/".concat(t.toString().padStart(4,"0"),".jpg")},img=new Image;img.src=e(1),canvas.width=1158,canvas.height=770,img.onload=function(){n.drawImage(img,0,0)};window.addEventListener("scroll",(function(){var e=html.scrollTop/(html.scrollHeight-window.innerHeight),r=Math.min(146,Math.ceil(147*e));requestAnimationFrame((function(){return e=r+1,console.log(e,t.images[e]),void n.drawImage(t.images[e],0,0);var e}))})),function(){for(var i=1;i<=147;i++){var n=new Image;n.src=e(i),t.images[i]=n}}()}},o=(e(183),e(31)),component=Object(o.a)(r,(function(){var t=this.$createElement;return(this._self._c||t)("canvas",{attrs:{id:"hero-lightpass"}})}),[],!1,null,null,null);n.default=component.exports}}]);