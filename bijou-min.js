let node=()=>new Error("You are using Node.js"),isNode=!1;isNode="undefined"==typeof window||"undefined"==typeof document,isNode&&console.warn("There is no document element in Node, some functions of bijou.js will not work. If you need these functions consider using a package like jsDom to recreate the document element.");let _temp={primesTo:e=>{let t=Array.from({length:e-1}).map(((e,t)=>t+2)),r=Math.floor(Math.sqrt(e));return Array.from({length:r-1}).map(((e,t)=>t+2)).forEach((e=>t=t.filter((t=>t%e!=0||t===e)))),t},async:e=>{const t=new Worker(URL.createObjectURL(new Blob([`postMessage((${e})());`]),{type:"application/javascript; charset=utf-8"}));return new Promise(((e,r)=>{t.onmessage=({data:r})=>{e(r),t.terminate()},t.onerror=e=>{r(e),t.terminate()}}))},formatMilliseconds:e=>{e<0&&(e=-e);const t={day:Math.floor(e/864e5),hour:Math.floor(e/36e5)%24,minute:Math.floor(e/6e4)%60,second:Math.floor(e/1e3)%60,millisecond:Math.floor(e)%1e3};return Object.entries(t).filter((e=>0!==e[1])).map((([e,t])=>`${t} ${e}${1!==t?"s":""}`)).join(", ")},addStyles:(e,t)=>{throw node()},onOutsideClick:(e,t)=>{throw node()},onScrollStop:e=>{throw node()},copy:e=>{throw node()},throttle:(e,t)=>{let r,n,a;return function(){const o=this,i=arguments;r?(clearTimeout(n),n=setTimeout((function(){Date.now()-a>=t&&(e.apply(o,i),a=Date.now())}),Math.max(t-(Date.now()-a),0))):(e.apply(o,i),a=Date.now(),r=!0)}},createElement:e=>{throw node()},browser:()=>{throw node()},notify:(e,t,r)=>{throw node()},dayName:(e,t="en-US")=>e.toLocaleDateString(t,{weekday:"long"}),jsonToCsv:(e,t,r=",")=>[t.join(r),...e.map((e=>t.reduce(((t,n)=>`${t}${t.length?r:""}"${e[n]?e[n]:""}"`),"")))].join("\n"),unionArrays:(e,t)=>{for(var r={},n=e.length-1;n>=0;--n)r[e[n]]=e[n];for(n=t.length-1;n>=0;--n)r[t[n]]=t[n];var a=[];for(var o in r)r.hasOwnProperty(o)&&a.push(r[o]);return a},each:(e,t)=>{for(let r=0;r<e.length;r++)t(e[r],r,e)},mapObjectKeys:(e,t)=>Array.isArray(e)?e.map((e=>_$.mapObjectKeys(e,t))):"object"==typeof e?Object.keys(e).reduce(((r,n)=>{const a=t(n),o=e[n];return r[a]=null!==o&&"object"==typeof o?_$.mapObjectKeys(o,t):o,r}),{}):e,arrayToCSV:(e,t=",")=>e.map((e=>e.map((e=>isNaN(e)?`"${e.replace(/"/g,'""')}"`:e)).join(t))).join("\n"),averageBy:(e,t)=>e.map("function"==typeof t?t:e=>e[t]).reduce(((e,t)=>e+t),0)/e.length,inView:e=>{throw node()},inPartialView:e=>{throw node()},serializeForm:e=>{throw node()},formToObject:e=>{throw node()},uuid:(e=Math.random())=>{function t(t){var r=(e.toString(16)+"000000000").substr(2,8);return t?"-"+r.substr(0,4)+"-"+r.substr(4,4):r}return"string"==typeof e&&(e=_temp.hashString(e)/1e16),t()+t(!0)+t(!0)+t()},escapeHTML:e=>e.replace(/[&<>'"]/g,(e=>({"&":"&amp;","<":"&lt;",">":"&gt;","'":"&#39;",'"':"&quot;"}[e]||e))),unescapeHTML:e=>e.replace(/&amp;|&lt;|&gt;|&#39;|&quot;/g,(e=>({"&amp;":"&","&lt;":"<","&gt;":">","&#39;":"'","&quot;":'"'}[e]||e))),previousPage:()=>{throw node()},replaceText:(e,t)=>{throw node()},timeFunction:(e,t="_$ function timer")=>{console.time(t),e(),console.timeEnd(t)},sortObj:e=>Object.keys(e).sort().reduce((function(t,r){return t[r]=e[r],t}),{}),widows:e=>{for(var t=e.split(" "),r="",n=0;n<=t.length-1;n++)r+=t[n],n==t.length-2?r+="&nbsp;":r+=" ";return r},randomColor:()=>"#"+Math.floor(16777215*Math.random()).toString(16),lightenColor:(e,t)=>{var r=!1;"#"==e[0]&&(e=e.slice(1),r=!0);var n=parseInt(e,16),a=(n>>16)+t;a>255?a=255:a<0&&(a=0);var o=(n>>8&255)+t;o>255?o=255:o<0&&(o=0);var i=(255&n)+t;return i>255?i=255:i<0&&(i=0),(r?"#":"")+(i|o<<8|a<<16).toString(16)},lightOrDark:e=>{var t,r,n,a;return e.match(/^rgb/)?(t=(e=e.match(/^rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*(\d+(?:\.\d+)?))?\)$/))[1],r=e[2],n=e[3]):(t=(e=+("0x"+e.slice(1).replace(e.length<5&&/./g,"$&$&")))>>16,r=e>>8&255,n=255&e),(a=Math.sqrt(t*t*.299+r*r*.587+n*n*.114))>127.5?{lightOrDark:"light",hsp:a}:{lightOrDark:"dark",hsp:a}},compStyle:(e,t)=>{throw node()},rgbToHex:e=>{let t=e.indexOf(",")>-1?",":" ",r=(+(e=e.substr(4).split(")")[0].split(t))[0]).toString(16),n=(+e[1]).toString(16),a=(+e[2]).toString(16);return 1==r.length&&(r="0"+r),1==n.length&&(n="0"+n),1==a.length&&(a="0"+a),"#"+r+n+a},hexToRGB:e=>{let t=!1,r=e.slice(e.startsWith("#")?1:0);return 3===r.length?r=[...r].map((e=>e+e)).join(""):8===r.length&&(t=!0),r=parseInt(r,16),"rgb"+(t?"a":"")+"("+(r>>>(t?24:16))+", "+((r&(t?16711680:65280))>>>(t?16:8))+", "+((r&(t?65280:255))>>>(t?8:0))+(t?", "+(255&r):"")+")"},querySelector:e=>{throw node()},removeComments:e=>{if("element"==typeof e){if(isNode)throw new Error("No document element! (You are probably using Node.js)");return e.innerHTML=e.innerHTML.replace(/<!--[\s\S]*?(?:-->)?<!---+>?|<!(?![dD][oO][cC][tT][yY][pP][eE]|\[CDATA\[)[^>]*>?|<[?][^>]*>?/g,""),e}if("string"==typeof e)return string.replace(/<!--[\s\S]*?(?:-->)?<!---+>?|<!(?![dD][oO][cC][tT][yY][pP][eE]|\[CDATA\[)[^>]*>?|<[?][^>]*>?/g,"")},random:(e,t,r=!0,n=Math.random())=>r?Math.floor(n*(t-e+1)+e):Math.random()*(t-e+1)+e,seedRandom:e=>{var t=e+=1831565813;return t=Math.imul(t^t>>>15,1|t),(((t^=t+Math.imul(t^t>>>7,61|t))^t>>>14)>>>0)/4294967296},uniqueArray:e=>[...new Set(e)],formatNumber:e=>e.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g,"$1,"),spliceArrayBuffer:(e,t,r,n)=>{var a=(n=n||!1)?-1:1;n&&([t,r]=[r,t]),t=Math.floor(t),r=Math.floor(r)+a;for(var o=t,i=0;o!=r;o+=a)i=256*i+e[o];return i},unCamelCase:function(e){return e.replace(/([a-z])([A-Z])/g,"$1 $2").replace(/\b([A-Z]+)([A-Z])([a-z])/,"$1 $2$3").replace(/^./,(function(e){return e.toUpperCase()}))},parseHTML:(e,t="text/html")=>(new DOMParser).parseFromString(e,t),syntaxHighlight:(e,t="html",r={})=>{throw node()},composeFunction:(...e)=>t=>e.reduceRight(((e,t)=>t(e)),t),curryFunction:(e,t=e.length,...r)=>t<=r.length?e(...r):curry.bind(null,e,t,...r),mobileOrDesktop:()=>{throw node()},removeTags:e=>e.replace(/<[^>]*>/g,""),camelCase:e=>e.replace(/(?:^\w|[A-Z]|\b\w)/g,(function(e,t){return 0===t?e.toLowerCase():e.toUpperCase()})).replace(/\s+/g,""),scrambleString:e=>{for(var t=e.split(""),r=t.length-1;r>0;r--){var n=Math.floor(Math.random()*(r+1)),a=t[r];t[r]=t[n],t[n]=a}return t.join("")},drag:e=>{throw node()},ease:{linear:e=>e,easeInQuad:e=>e*e,easeOutQuad:e=>e*(2-e),easeInOutQuad:e=>e<.5?2*e*e:(4-2*e)*e-1,easeInCubic:e=>e*e*e,easeOutCubic:e=>--e*e*e+1,easeInOutCubic:e=>e<.5?4*e*e*e:(e-1)*(2*e-2)*(2*e-2)+1,easeInQuart:e=>e*e*e*e,easeOutQuart:e=>1- --e*e*e*e,easeInOutQuart:e=>e<.5?8*e*e*e*e:1-8*--e*e*e*e,easeInQuint:e=>e*e*e*e*e,easeOutQuint:e=>1+--e*e*e*e*e,easeInOutQuint:e=>e<.5?16*e*e*e*e*e:1+16*--e*e*e*e*e},getJSON:(e,t)=>{throw node()},getHTML:(e,t)=>{throw node()},shuffleArray:e=>e.sort((()=>Math.random()-.5)),hashString:(e,t=0)=>{let r=3735928559^t,n=1103547991^t;for(let t,a=0;a<e.length;a++)t=e.charCodeAt(a),r=Math.imul(r^t,2654435761),n=Math.imul(n^t,1597334677);return r=Math.imul(r^r>>>16,2246822507)^Math.imul(n^n>>>13,3266489909),n=Math.imul(n^n>>>16,2246822507)^Math.imul(r^r>>>13,3266489909),4294967296*(2097151&n)+(r>>>0)},blendColors:(e,t,r=50)=>{const n=(e,t,r)=>e+r/100*(t-e),a=parseInt(`${e[1]}${e[2]}`,16),o=parseInt(`${e[3]}${e[4]}`,16),i=parseInt(`${e[5]}${e[6]}`,16),d=parseInt(`${t[1]}${t[2]}`,16),l=parseInt(`${t[3]}${t[4]}`,16),s=parseInt(`${t[5]}${t[6]}`,16);return((e,t,r)=>{let n=e.toString(16),a=t.toString(16),o=r.toString(16);for(;n.length<2;)n=`0${n}`;for(;a.length<2;)a=`0${a}`;for(;o.length<2;)o=`0${o}`;return`#${n}${a}${o}`})(Math.round(n(a,d,r)),Math.round(n(o,l,r)),Math.round(n(i,s,r)))},editDistance:(e,t)=>{if(0==e.length)return t.length;if(0==t.length)return e.length;var r,n,a=[];for(r=0;r<=t.length;r++)a[r]=[r];for(n=0;n<=e.length;n++)a[0][n]=n;for(r=1;r<=t.length;r++)for(n=1;n<=e.length;n++)t.charAt(r-1)==e.charAt(n-1)?a[r][n]=a[r-1][n-1]:a[r][n]=Math.min(a[r-1][n-1]+1,Math.min(a[r][n-1]+1,a[r-1][n]+1));return a[t.length][e.length]},byteSize:e=>new Blob([e]).size,elementSiblings:e=>[...e.parentElement.children].filter((t=>t!=e)),preloadImage:e=>{for(var t=0;t<arguments.length;t++)images[t]=new Image,images[t].src=preload.arguments[t]},replaceMultiple:(e,t)=>{var r=new RegExp(Object.keys(t).join("|"),"gi");return e=e.replace(r,(function(e){return mapObj[e]}))},urlQuery:(e,t=window.location.href)=>{e=e.replace(/[\[\]]/g,"\\$&");var r=new RegExp("[?&]"+e+"(=([^&#]*)|&|#|$)").exec(t);return r?r[2]?decodeURIComponent(r[2].replace(/\+/g," ")):"":null},disableRightClick:e=>{throw node()},sanitize:(e,t,r)=>{throw node()},inlineCSS:e=>{throw node()},saveBlob:(e,t="output.txt")=>{throw node()},clone:e=>{throw node()},markdownToHTML:e=>{var t=/\\([\\\|`*_{}\[\]()#+\-~])/g,r=/\n *&gt; *([^]*?)(?=(\n|$){2})/g,n=/\n( *)(?:[*\-+]|((\d+)|([a-z])|[A-Z])[.)]) +([^]*?)(?=(\n|$){2})/g,a=/(^|[^A-Za-z\d\\])(([*_])|(~)|(\^)|(--)|(\+\+)|`)(\2?)([^<]*?)\2\8(?!\2)(?=\W|_|$)/g,o=/^.*\n( *\|( *\:?-+\:?-+\:? *\|)* *\n|)/,i=/.*\n/g,d=/\||(.*?[^\\])\|/g;function l(t,r){e=e.replace(t,r)}function s(e,t){return"<"+e+">"+t+"</"+e+">"}function u(e){return e.replace(a,(function(e,t,r,n,a,o,i,d,l,f){return t+s(n?l?"strong":"em":a?l?"s":"sub":o?"sup":i?"small":d?"big":"code",u(f))}))}function f(e){return e.replace(t,"$1")}var c=[],h=0;return e="\n"+e+"\n",l(/</g,"&lt;"),l(/>/g,"&gt;"),l(/\t|\r|\uf8ff/g,"  "),e=function e(t){return t.replace(r,(function(t,r){return s("blockquote",e(u(r.replace(/^ *&gt; */gm,""))))}))}(e),l(/^([*\-=_] *){3,}$/gm,"<hr/>"),e=function e(t){return t.replace(n,(function(t,r,n,a,o,i){var d=s("li",u(i.split(RegExp("\n ?"+r+"(?:(?:\\d+|[a-zA-Z])[.)]|[*\\-+]) +","g")).map(e).join("</li><li>")));return"\n"+(n?'<ol start="'+(a?n+'">':parseInt(n,36)-9+'" style="list-style-type:'+(o?"low":"upp")+'er-alpha">')+d+"</ol>":s("ul",d))}))}(e),l(/<\/(ol|ul)>\n\n<\1>/g,""),l(/\n((```|~~~).*\n?([^]*?)\n?\2|((    .*?\n)+))/g,(function(e,t,r,n,a){return c[--h]=s("pre",s("code",n||a.replace(/^    /gm,""))),h+""})),l(/((!?)\[(.*?)\]\((.*?)( ".*")?\)|\\([\\`*_{}\[\]()#+\-.!~]))/g,(function(e,t,r,n,a,o,i){return c[--h]=i||(r?a?'<img src="'+a+'" alt="'+n+'"/>':t:'<a href="'+a+'">'+f(u(n))+"</a>"),h+""})),l(/\n(( *\|.*?\| *\n)+)/g,(function(e,t){var r=t.match(o)[1];return"\n"+s("table",t.replace(i,(function(e,t){return e==r?"":s("tr",e.replace(d,(function(e,n,a){return a?s(r&&!t?"th":"td",f(u(n||""))):""})))})))})),l(/(?=^|>|\n)([>\s]*?)(#{1,6}) (.*?)( #*)? *(?=\n|$)/g,(function(e,t,r,n){return t+s("h"+r.length,f(u(n)))})),l(/(?=^|>|\n)\s*\n+([^<]+?)\n+\s*(?=\n|<|$)/g,(function(e,t){return s("p",f(u(t)))})),l(/-\d+\uf8ff/g,(function(e){return c[parseInt(e)]})),e.trim()},animate:(e,t,r,n,a=20,o=(e=>e))=>{var i=e,d=Date.now();let l=setInterval((()=>{i=o((Date.now()-d)/r)*(t-e)+e,n(i,o((Date.now()-d)/r))}),a);setTimeout((()=>{clearInterval(l),n(t,1)}),r)},requestInterval:function(e,t){var r=window.requestAnimationFrame||function(e,t){window.setTimeout(e,1e3/60)},n=(new Date).getTime(),a={};return a.value=r((function o(){a.value=r(o),(new Date).getTime()-n>=t&&(e.call(),n=(new Date).getTime())})),a},cookies:{setItem:(e,t,r=1e3)=>{throw node()},getItem:e=>{throw node()},removeItem:e=>{throw node()}},regex:{phone:/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/,name:/^(?:[a-zA-Z]{2,}\s[a-zA-Z]{1,}'?-?[a-zA-Z]{2,}\s?(?:[a-zA-Z]{1,})?)/,email:/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,link:/(([\w]+:)?\/\/)?(([\d\w]|%[a-fA-f\d]{2,2})+(:([\d\w]|%[a-fA-f\d]{2,2})+)?@)?([\d\w][-\d\w]{0,253}[\d\w]\.)+[\w]{2,63}(:[\d]+)?(\/([-+_~.\d\w]|%[a-fA-f\d]{2,2})*)*(\?(&?([-+_~.\d\w]|%[a-fA-f\d]{2,2})=?)*)?(#([-+_~.\d\w]|%[a-fA-f\d]{2,2})*)?/,strongPassword:/(?=(.*[0-9]))(?=.*[\!@#$%^&*()\\[\]{}\-_+=~`|:;"'<>,./?])(?=.*[a-z])(?=(.*[A-Z]))(?=(.*)).{8,}/,moderatePassword:/(?=(.*[0-9]))((?=.*[A-Za-z0-9])(?=.*[A-Z])(?=.*[a-z]))^.{8,}$/,ipv4:/^ (([0 - 9] | [1 - 9][0 - 9] | 1[0 - 9]{ 2}| 2[0 - 4][0 - 9] | 25[0 - 5]) \.) { 3 } ([0 - 9] | [1 - 9][0 - 9] | 1[0 - 9]{ 2 }| 2[0 - 4][0 - 9] | 25[0 - 5]) $ /,ipv6:/(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))/,ip:/ ((^\s*((([0 - 9] | [1 - 9][0 - 9] | 1[0 - 9]{ 2} | 2[0 - 4][0 - 9] | 25[0 - 5]) \.) { 3}([0 - 9] | [1 - 9][0 - 9] | 1[0 - 9]{ 2 }| 2[0 - 4][0 - 9] | 25[0 - 5])) \s * $)| (^\s * ((([0 - 9A - Fa - f]{ 1, 4 }:) { 7 } ([0 - 9A - Fa - f]{ 1, 4 }|:))| (([0 - 9A - Fa - f]{ 1, 4 }:) { 6 } (: [0 - 9A - Fa - f]{ 1, 4 }| ((25[0 - 5] | 2[0 - 4]\d | 1\d\d | [1 - 9] ?\d) (\.(25[0 - 5] | 2[0 - 4]\d | 1\d\d | [1 - 9] ?\d)) { 3 })|:))| (([0 - 9A - Fa - f]{ 1, 4 }:) { 5 } (((: [0 - 9A - Fa - f]{ 1, 4 }) { 1, 2 })|: ((25[0 - 5] | 2[0 - 4]\d | 1\d\d | [1 - 9] ?\d) (\.(25[0 - 5] | 2[0 - 4]\d | 1\d\d | [1 - 9] ?\d)) { 3 })|:))| (([0 - 9A - Fa - f]{ 1, 4 }:) { 4 } (((: [0 - 9A - Fa - f]{ 1, 4 }) { 1, 3 })| ((: [0 - 9A - Fa - f]{ 1, 4 })?: ((25[0 - 5] | 2[0 - 4]\d | 1\d\d | [1 - 9] ?\d) (\.(25[0 - 5] | 2[0 - 4]\d | 1\d\d | [1 - 9] ?\d)) { 3 }))|:))| (([0 - 9A - Fa - f]{ 1, 4 }:) { 3 } (((: [0 - 9A - Fa - f]{ 1, 4 }) { 1, 4 })| ((: [0 - 9A - Fa - f]{ 1, 4 }) { 0, 2 }: ((25[0 - 5] | 2[0 - 4]\d | 1\d\d | [1 - 9] ?\d) (\.(25[0 - 5] | 2[0 - 4]\d | 1\d\d | [1 - 9] ?\d)) { 3 }))|:))| (([0 - 9A - Fa - f]{ 1, 4 }:) { 2 } (((: [0 - 9A - Fa - f]{ 1, 4 }) { 1, 5 })| ((: [0 - 9A - Fa - f]{ 1, 4 }) { 0, 3 }: ((25[0 - 5] | 2[0 - 4]\d | 1\d\d | [1 - 9] ?\d) (\.(25[0 - 5] | 2[0 - 4]\d | 1\d\d | [1 - 9] ?\d)) { 3 }))|:))| (([0 - 9A - Fa - f]{ 1, 4 }:) { 1 } (((: [0 - 9A - Fa - f]{ 1, 4 }) { 1, 6 })| ((: [0 - 9A - Fa - f]{ 1, 4 }) { 0, 4 }: ((25[0 - 5] | 2[0 - 4]\d | 1\d\d | [1 - 9] ?\d) (\.(25[0 - 5] | 2[0 - 4]\d | 1\d\d | [1 - 9] ?\d)) { 3 }))|:))| (: (((: [0 - 9A - Fa - f]{ 1, 4 }) { 1, 7 })| ((: [0 - 9A - Fa - f]{ 1, 4 }) { 0, 5 }: ((25[0 - 5] | 2[0 - 4]\d | 1\d\d | [1 - 9] ?\d) (\.(25[0 - 5] | 2[0 - 4]\d | 1\d\d | [1 - 9] ?\d)) { 3 }))|:))) (%.+) ?\s * $)) /,socialSecurity:/^((?!219-09-9999|078-05-1120)(?!666|000|9\d{2})\d{3}-(?!00)\d{2}-(?!0{4})\d{4})|((?!219 09 9999|078 05 1120)(?!666|000|9\d{2})\d{3} (?!00)\d{2} (?!0{4})\d{4})|((?!219099999|078051120)(?!666|000|9\d{2})\d{3}(?!00)\d{2}(?!0{4})\d{4})$/,hex:/^#?([a-fA-F0-9]{6}|[a-fA-F0-9]{3})$/,zipCode:/(^\d{5}(-\d{4})?$)|(^[ABCEGHJKLMNPRSTVXY]{1}\d{1}[A-Z]{1} *\d{1}[A-Z]{1}\d{1}$)/,phone:/^\+?[\d\s]{3,}$/,visaCredit:/^4[0–9]{12}(?:[0–9]{3})?$/,expressCredit:/^3[47][0–9]{13}$/,mastercardCredit:/^(?:5[1–5][0–9]{2}|222[1–9]|22[3–9][0–9]|2[3–6][0–9]{2}|27[01][0–9]|2720)[0–9]{12}$/,discoverCredit:/^6(?:011|5[0–9]{2})[0–9]{12}$/}};_temp=_temp.sortObj(_temp);const _$=_temp,_=_temp,explosion=_temp;isNode&&(module.exports=_temp);