(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7339],{2660:function(a,b,c){(window.__NEXT_P=window.__NEXT_P||[]).push(["/account/world-1/anvil",function(){return c(9991)}])},5862:function(c,b,a){"use strict";var d=a(5893),e=a(9226),f=a(1458),g=a(5861);function h(a,b,c){return b in a?Object.defineProperty(a,b,{value:c,enumerable:!0,configurable:!0,writable:!0}):a[b]=c,a}a(7294),b.Z=function(a){var b=a.percent,i=a.bgColor,c=a.label,j=a.sx;return(0,d.jsxs)(e.Z,{sx:{display:"flex",alignItems:"center"},children:[(0,d.jsx)(e.Z,{sx:{width:"100%",mr:1},children:(0,d.jsx)(f.Z,{sx:function(d){for(var a=1;a<arguments.length;a++){var c=null!=arguments[a]?arguments[a]:{},b=Object.keys(c);"function"==typeof Object.getOwnPropertySymbols&&(b=b.concat(Object.getOwnPropertySymbols(c).filter(function(a){return Object.getOwnPropertyDescriptor(c,a).enumerable}))),b.forEach(function(a){h(d,a,c[a])})}return d}({width:"100%",height:10,borderRadius:5,"& .MuiLinearProgress-bar":{backgroundColor:i||""}},j),variant:"determinate",value:b>100?100:b})}),void 0===c||c?(0,d.jsx)(e.Z,{children:(0,d.jsx)(g.Z,{variant:"body2",color:"text.secondary",children:"".concat(Math.round(b),"%")})}):null]})}},134:function(e,b,a){"use strict";var f=a(5893),g=a(7294),h=a(3277),i=a(3913),j=a(7702),c=a(5934),k=a(5861);function l(a,b,c){return b in a?Object.defineProperty(a,b,{value:c,enumerable:!0,configurable:!0,writable:!0}):a[b]=c,a}function m(d){for(var a=1;a<arguments.length;a++){var c=null!=arguments[a]?arguments[a]:{},b=Object.keys(c);"function"==typeof Object.getOwnPropertySymbols&&(b=b.concat(Object.getOwnPropertySymbols(c).filter(function(a){return Object.getOwnPropertyDescriptor(c,a).enumerable}))),b.forEach(function(a){l(d,a,c[a])})}return d}function d(){var a,b,c=(a=["\n  .overtime {\n    color: #f91d1d;\n  }\n"],b||(b=a.slice(0)),Object.freeze(Object.defineProperties(a,{raw:{value:Object.freeze(b)}})));return d=function(){return c},c}var n=c.Z.span(d());b.Z=function(b){var p=b.date,t=b.startDate,q=b.lastUpdated,r=b.type,d=b.pause,s=b.staticTime,e=b.placeholder,u=b.loop,l=(0,g.useState)(),a=l[0],v=l[1],o=(0,g.useState)(r),w=o[0],x=o[1];(0,g.useEffect)(function(){if(p){if(s)return v(m({},(0,j.getDuration)(new Date().getTime(),p)));var a=new Date,c=a.getTime()-(null!=q?q:0),b=(0,i.Z)(p);v(m({},(0,j.getDuration)(null==a?void 0:a.getTime(),p+c*("countdown"===r?-1:1)),{overtime:"countdown"===r&&b})),b&&x("countdown")}},[p,q]);var y=function(){var d=a.days,e=a.hours,b=a.minutes,c=a.seconds;60===(c+=1)&&(c=0,60===(b+=1)&&(b=0,24===(e+=1)&&(d+=1))),v(m({},a,{days:d,hours:e,minutes:b,seconds:c}))},z=function(){var e=a.days,b=a.hours,c=a.minutes,d=a.seconds;if(0===e&&0===b&&0===c&&0===d&&u)return v(m({},(0,j.getDuration)(new Date().getTime(),t)));-1==(d-=1)&&(d=59,-1==(c-=1)&&(c=59,-1==(b-=1)&&(b=0,e-=1))),v(m({},a,{days:e,hours:b,minutes:c,seconds:d}))};(0,h.Z)(function(){if(!a)return null;"countdown"===w?z():y()},d||s?null:1e3);var c=function(a){var b=String(a);return(null==b?void 0:b.length)===1?"0".concat(a):a};return a?(0,f.jsx)(n,{children:((null==a?void 0:a.overtime)||d)&&e?e:(0,f.jsxs)(k.Z,{className:"".concat((null==a?void 0:a.overtime)?"overtime":""),component:"span",children:[(null==a?void 0:a.days)?c(null==a?void 0:a.days)+"d:":"",c(null==a?void 0:a.hours)+"h:",c(null==a?void 0:a.minutes)+"m",(null==a?void 0:a.days)?"":":",(null==a?void 0:a.days)?"":c(null==a?void 0:a.seconds)+"s"]})}):null}},9991:function(e,b,a){"use strict";a.r(b);var f=a(5893),g=a(7294),h=a(4897),i=a(5861),j=a(6447),k=a(6242),l=a(4267),m=a(1594),n=a(7702),o=a(134),c=a(5934),p=a(5862);function d(){var a,b,c=(a=["\n  width: 42px;\n  height: 42px;\n"],b||(b=a.slice(0)),Object.freeze(Object.defineProperties(a,{raw:{value:Object.freeze(b)}})));return d=function(){return c},c}var q=c.Z.img(d());b.default=function(){var a=(0,g.useContext)(h.I).state,b=(null==a?void 0:a.account).anvil;return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(i.Z,{variant:"h2",mb:3,children:"Anvil"}),(0,f.jsx)(j.Z,{gap:3,children:null==b?void 0:b.map(function(x,b){var c,d,e,g,h,r,s,t,u,v,A=null==a?void 0:null===(c=a.characters)|| void 0===c?void 0:null===(d=c[b])|| void 0===d?void 0:d.classIndex,B=null==a?void 0:null===(e=a.characters)|| void 0===e?void 0:null===(g=e[b])|| void 0===g?void 0:g.name,E=null==a?void 0:null===(h=a.characters)|| void 0===h?void 0:null===(r=h[b])|| void 0===r?void 0:r.afkTime,C=null==a?void 0:null===(s=a.characters)|| void 0===s?void 0:null===(t=s[b])|| void 0===t?void 0:null===(u=t.equippedBubbles)|| void 0===u?void 0:u.find(function(a){return"HAMMER_HAMMER"===a.bubbleName}),D=C?3:2,w=null==x?void 0:null===(v=x.production)|| void 0===v?void 0:v.filter(function(a){return a.hammers>0}),y=w.reduce(function(a,b){return a+b.hammers},0),z=y===D?w:(0,n.fillArrayToLength)(y,w);return(0,f.jsx)(k.Z,{sx:{width:{xs:"100%",lg:700}},children:(0,f.jsx)(l.Z,{children:(0,f.jsxs)(j.Z,{sx:{flexDirection:{xs:"column",md:"row"}},alignItems:"center",gap:2,children:[(0,f.jsxs)(j.Z,{sx:{width:175,textAlign:"center",flexDirection:{xs:"column",md:"row"}},alignItems:"center",gap:2,children:[(0,f.jsx)(j.Z,{alignItems:"center",justifyContent:"center",children:(0,f.jsx)("img",{className:"class-icon",src:"".concat(n.prefix,"data/ClassIcons").concat(A,".png"),alt:""})}),(0,f.jsx)(i.Z,{className:"character-name",children:B})]}),(0,f.jsx)(j.Z,{sx:{justifyContent:{xs:"center",md:"flex-start"}},direction:"row",alignItems:"center",flexWrap:"wrap",gap:3,children:null==z?void 0:z.map(function(c,v){var d,e,g,h,r,s=c.rawName,b=c.hammers,w=c.currentAmount,y=c.currentProgress,t=c.time,z=(new Date().getTime()-E)/1e3,u=Math.min(Math.round(w+(y+z*(null==x?void 0:null===(d=x.stats)|| void 0===d?void 0:d.anvilSpeed)/3600)/t*(null!=b?b:0)),null==x?void 0:null===(e=x.stats)|| void 0===e?void 0:e.anvilCapacity),A=Math.round(u/(null==x?void 0:null===(g=x.stats)|| void 0===g?void 0:g.anvilCapacity)*100),B=((null==x?void 0:null===(h=x.stats)|| void 0===h?void 0:h.anvilCapacity)-u)/((null==x?void 0:null===(r=x.stats)|| void 0===r?void 0:r.anvilSpeed)/3600/t*(null!=b?b:0));return(0,f.jsx)(k.Z,{elevation:5,sx:{boxShadow:b>0?"inherit":"0px 0px 5px #ff0707"},children:(0,f.jsx)(l.Z,{children:b>0?(0,f.jsxs)(j.Z,{sx:{width:90,height:65},justifyContent:"flex-start",alignItems:"center",children:[(0,f.jsx)(m.Z,{color:"secondary",variant:"standard",badgeContent:b>1?b:0,children:(0,f.jsx)(q,{src:"".concat(n.prefix,"data/").concat(s,".png"),alt:""})}),(0,f.jsx)(p.Z,{percent:A,label:!1}),(0,f.jsx)(o.Z,{date:new Date().getTime()+1e3*B,type:"countdown",placeholder:(0,f.jsx)(i.Z,{color:"error.light",children:"Full"}),lastUpdated:null==a?void 0:a.lastUpdated})]}):(0,f.jsx)(j.Z,{sx:{width:90,height:65},alignItems:"center",justifyContent:"center",children:(0,f.jsx)(i.Z,{variant:"caption",children:"EMPTY"})})})},"".concat(s,"-").concat(v))})})]})})},"printer-row-".concat(b))})})]})}}},function(a){a.O(0,[194,9774,2888,179],function(){return a(a.s=2660)}),_N_E=a.O()}])