(window["webpackJsonpbang-gu-seok"]=window["webpackJsonpbang-gu-seok"]||[]).push([[0],{16:function(e,t,a){e.exports=a(43)},21:function(e,t,a){},22:function(e,t,a){},43:function(e,t,a){"use strict";a.r(t);var r=a(0),o=a.n(r),n=a(15),i=a.n(n),l=(a(21),a(22),a(3)),c=a(4),s=a.n(c),m=a(1),u=a.n(m);function d(e){var t=e.weather;return Object(r.useEffect)(function(){},[t]),o.a.createElement("div",{id:"weatherCardWrap"},o.a.createElement("p",null,"\ud604\uc7ac \ub0a0\uc528"),o.a.createElement("div",{id:"weatherCardMain"},o.a.createElement("div",{className:"weatherCard",style:{marginTop:"0"}},o.a.createElement("p",{className:"title"},"\uae30\uc628"),o.a.createElement("p",{className:"details"},t&&t.item.filter(function(e){return"T1H"===e.category})[0].obsrValue<900&&t.item.filter(function(e){return"T1H"===e.category})[0].obsrValue>-900&&"".concat(t.item.filter(function(e){return"T1H"===e.category})[0].obsrValue," \u2103"),t?"":o.a.createElement("span",{className:"loading"},"\ub85c\ub529\uc911"),t&&(t.item.filter(function(e){return"T1H"===e.category})[0].obsrValue>=900||t.item.filter(function(e){return"T1H"===e.category})[0].obsrValue<=-900)&&"\uad00\uce21\uc2e4\ud328")),o.a.createElement("div",{className:"weatherCard",style:{marginTop:"0"}},o.a.createElement("p",{className:"title"},"\ube44\uc624\ub098?\ub208\uc624\ub098?"),o.a.createElement("p",{className:"details"},t&&(t.item.filter(function(e){return"PTY"===e.category})[0].obsrValue>=900||t.item.filter(function(e){return"PTY"===e.category})[0].obsrValue<=-900)&&"\uad00\uce21\uc2e4\ud328",t?"":o.a.createElement("span",{className:"loading"},"\ub85c\ub529\uc911"),t&&0===t.item.filter(function(e){return"PTY"===e.category})[0].obsrValue&&"\uc5d0\uc787! \uc548\uc624\ub124...",t&&1===t.item.filter(function(e){return"PTY"===e.category})[0].obsrValue&&"\ub098\uc774\uc2a4! \ube44\uc628\ub2e4!",t&&2===t.item.filter(function(e){return"PTY"===e.category})[0].obsrValue&&"\uc6b0\uc640~ \ube44\ub791 \ub208 \ub458\ub2e4!",t&&3===t.item.filter(function(e){return"PTY"===e.category})[0].obsrValue&&"\ub098\uc774\uc2a4! \ub208\uc628\ub2e4!",t&&4===t.item.filter(function(e){return"PTY"===e.category})[0].obsrValue&&"\uc624! \uc18c\ub098\uae30\ub2e4!")),o.a.createElement("div",{className:"weatherCard",style:{marginTop:"0"}},o.a.createElement("p",{className:"title"},"\uc2b5\ub3c4"),o.a.createElement("p",{className:"details"},t&&t.item.filter(function(e){return"REH"===e.category})[0].obsrValue<900&&t.item.filter(function(e){return"REH"===e.category})[0].obsrValue>-900&&"".concat(t.item.filter(function(e){return"REH"===e.category})[0].obsrValue," %"),t?"":o.a.createElement("span",{className:"loading"},"\ub85c\ub529\uc911"),t&&(t.item.filter(function(e){return"REH"===e.category})[0].obsrValue>=900||t.item.filter(function(e){return"REH"===e.category})[0].obsrValue<=-900)&&"\uad00\uce21\uc2e4\ud328")),o.a.createElement("div",{className:"weatherCard"},o.a.createElement("p",{className:"title"},"\ud48d\uc18d"),o.a.createElement("p",{className:"details"},t&&t.item.filter(function(e){return"WSD"===e.category})[0].obsrValue<900&&t.item.filter(function(e){return"WSD"===e.category})[0].obsrValue>-900&&"".concat(t.item.filter(function(e){return"WSD"===e.category})[0].obsrValue," m/s"),t?"":o.a.createElement("span",{className:"loading"},"\ub85c\ub529\uc911"),t&&(t.item.filter(function(e){return"WSD"===e.category})[0].obsrValue>=900||t.item.filter(function(e){return"WSD"===e.category})[0].obsrValue<=-900)&&"\uad00\uce21\uc2e4\ud328")),o.a.createElement("div",{className:"weatherCard"},o.a.createElement("p",{className:"title"},"\uc9c0\uc5ed\uae30\uc900"),o.a.createElement("p",{className:"details"},t?"":o.a.createElement("span",{className:"loading"},"\ub85c\ub529\uc911"),t&&t.dong)),o.a.createElement("div",{className:"weatherCard"},o.a.createElement("p",{className:"title"},"\ub0a0\uc9dc\uae30\uc900"),o.a.createElement("p",{className:"details"},t?"":o.a.createElement("span",{className:"loading"},"\ub85c\ub529\uc911"),t&&"".concat("".concat(t.item[0].baseTime).substring(0,2)," \uc2dc"),t&&o.a.createElement("span",{className:"small"},t.date)))))}function f(){return o.a.createElement("div",{id:"weatherMain"})}var g=6371.00877,p=5,h=30,w=60,S=126,E=38,b=43,y=136;function M(){var e=Object(r.useState)(),t=Object(l.a)(e,2),a=t[0],n=t[1],i=Object(r.useState)(),c=Object(l.a)(i,2),m=c[0],M=c[1],N=Object(r.useState)(),v=Object(l.a)(N,2),Y=v[0],I=v[1],P=Object(r.useState)(!0),V=Object(l.a)(P,2),A=V[0],H=V[1];return Object(r.useEffect)(function(){function e(e,t){console.log("position"),s.a.get("https://cors-anywhere.herokuapp.com/https://naveropenapi.apigw.ntruss.com/map-reversegeocode/v2/gc?request=coordsToaddr&coords=".concat(t.toFixed(4),",").concat(+e.toFixed(4),"&orders=admcode&output=json"),{headers:{"X-NCP-APIGW-API-KEY-ID":"y6syzp2el8","X-NCP-APIGW-API-KEY":"oGUQ22oSWOEDf44apBf9QSZVKanLLauMgr5CnBDy"}}).then(function(a){n({latitude:+e.toFixed(4),longitude:+t.toFixed(4),dong:a.data.results[0].region.area3.name}),window.localStorage.setItem("position",JSON.stringify({latitude:+e.toFixed(4),longitude:+t.toFixed(4),dong:a.data.results[0].region.area3.name}))})}navigator.geolocation.getCurrentPosition(function(t){window.localStorage.getItem("position")?JSON.parse(window.localStorage.getItem("position")).latitude!==+t.coords.latitude.toFixed(4)||JSON.parse(window.localStorage.getItem("position")).longitude!==+t.coords.longitude.toFixed(4)?e(t.coords.latitude,t.coords.longitude):n(JSON.parse(window.localStorage.getItem("position"))):e(t.coords.latitude,t.coords.longitude)},function(t){if(window.localStorage.getItem("position")){var a=JSON.parse(window.localStorage.getItem("position"));e(a.latitude,a.longitude)}else e(37.645050399999995,126.786284)}),setInterval(function(){M({date:u.a.tz("Asia/Seoul").format("YYYY.MM.DD"),hour:u.a.tz("Asia/Seoul").format("hh"),minute:u.a.tz("Asia/Seoul").format("mm"),seconds:u.a.tz("Asia/Seoul").format("ss"),ampm:u.a.tz("Asia/Seoul").format("A")})},300)},[]),Object(r.useEffect)(function(){function e(){H(!1);var e,t=function(e,t){var a=Math.PI/180,r=g/p,o=h*a,n=w*a,i=S*a,l=E*a,c=Math.tan(.25*Math.PI+.5*n)/Math.tan(.25*Math.PI+.5*o);c=Math.log(Math.cos(o)/Math.cos(n))/Math.log(c);var s=Math.tan(.25*Math.PI+.5*o);s=Math.pow(s,c)*Math.cos(o)/c;var m=Math.tan(.25*Math.PI+.5*l);m=r*s/Math.pow(m,c);var u={};u.lat=e,u.lng=t;var d=Math.tan(.25*Math.PI+e*a*.5);d=r*s/Math.pow(d,c);var f=t*a-i;return f>Math.PI&&(f-=2*Math.PI),f<-Math.PI&&(f+=2*Math.PI),f*=c,u.x=Math.floor(d*Math.sin(f)+b+.5),u.y=Math.floor(m-d*Math.cos(f)+y+.5),u}(a.latitude,a.longitude),r=t.x,o=t.y;e=+u.a.tz("Asia/Seoul").format("mm")>=40?u.a.tz("Asia/Seoul").format("HH00"):+u.a.tz("Asia/Seoul").format("HH")<11?"0".concat(+u.a.tz("Asia/Seoul").format("HH00")-100):"".concat(+u.a.tz("Asia/Seoul").format("HH00")-100),s.a.get("https://cors-anywhere.herokuapp.com/http://newsky2.kma.go.kr/service/SecndSrtpdFrcstInfoService2/ForecastGrib?ServiceKey=j%2BeCKcismlZK%2BpaFNLrSPqSvTKVFFiiUqzXfxIXmNPl%2F4dWUGjlDL9wjnnAVFfGUGfJMK62lqnYwqLQe4r88fA%3D%3D&base_date=".concat(u.a.tz("Asia/Seoul").format("YYYYMMDD"),"&base_time=").concat(e,"&nx=").concat(r,"&ny=").concat(o,"&_type=json")).then(function(e){console.log("weather"),I({time:u.a.tz("Asia/Seoul").format("HHmm"),date:u.a.tz("Asia/Seoul").format("YYYYMMDD"),item:e.data.response.body.items.item,dong:a.dong}),window.localStorage.setItem("weather",JSON.stringify({time:u.a.tz("Asia/Seoul").format("HHmm"),date:u.a.tz("Asia/Seoul").format("YYYYMMDD"),item:e.data.response.body.items.item,dong:a.dong})),H(!0)}).catch(function(e){H(!0)})}a&&A&&(window.localStorage.getItem("weather")?Y||I(JSON.parse(window.localStorage.getItem("weather"))):e(),Y&&a&&(+u.a.tz("Asia/Seoul").format("YYYYMMDD")-+Y.item[0].baseDate!==0?e():+u.a.tz("Asia/Seoul").format("HHmm")-+Y.item[0].baseTime>=140&&e()))},[a,Y,m,A]),o.a.createElement(o.a.Fragment,null,o.a.createElement("header",null,"\ubc29\uad6c\uc11d"),o.a.createElement("div",{id:"weatherWrapper"},o.a.createElement(f,null),o.a.createElement(d,{weather:Y})))}var N=function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement(M,null))};i.a.render(o.a.createElement(N,null),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.472b9f81.chunk.js.map