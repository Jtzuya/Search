var e,t,n={},r={},o=r={};function i(){throw new Error("setTimeout has not been defined")}function c(){throw new Error("clearTimeout has not been defined")}function a(t){if(e===setTimeout)return setTimeout(t,0);if((e===i||!e)&&setTimeout)return e=setTimeout,setTimeout(t,0);try{return e(t,0)}catch(n){try{return e.call(null,t,0)}catch(n){return e.call(this,t,0)}}}!function(){try{e="function"==typeof setTimeout?setTimeout:i}catch(t){e=i}try{t="function"==typeof clearTimeout?clearTimeout:c}catch(e){t=c}}();var l,s=[],u=!1,f=-1;function h(){u&&l&&(u=!1,l.length?s=l.concat(s):f=-1,s.length&&d())}function d(){if(!u){var e=a(h);u=!0;for(var n=s.length;n;){for(l=s,s=[];++f<n;)l&&l[f].run();f=-1,n=s.length}l=null,u=!1,function(e){if(t===clearTimeout)return clearTimeout(e);if((t===c||!t)&&clearTimeout)return t=clearTimeout,clearTimeout(e);try{t(e)}catch(n){try{return t.call(null,e)}catch(n){return t.call(this,e)}}}(e)}}function g(e,t){this.fun=e,this.array=t}function v(){}o.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];s.push(new g(e,t)),1!==s.length||u||a(d)},g.prototype.run=function(){this.fun.apply(null,this.array)},o.title="browser",o.browser=!0,o.env={},o.argv=[],o.version="",o.versions={},o.on=v,o.addListener=v,o.once=v,o.off=v,o.removeListener=v,o.removeAllListeners=v,o.emit=v,o.prependListener=v,o.prependOnceListener=v,o.listeners=function(e){return[]},o.binding=function(e){throw new Error("process.binding is not supported")},o.cwd=function(){return"/"},o.chdir=function(e){throw new Error("process.chdir is not supported")},o.umask=function(){return 0};var p={},m={};function b(e){if("string"!=typeof e)throw new TypeError("Path must be a string. Received "+JSON.stringify(e))}function y(e,t){for(var n,r="",o=0,i=-1,c=0,a=0;a<=e.length;++a){if(a<e.length)n=e.charCodeAt(a);else{if(47===n)break;n=47}if(47===n){if(i===a-1||1===c);else if(i!==a-1&&2===c){if(r.length<2||2!==o||46!==r.charCodeAt(r.length-1)||46!==r.charCodeAt(r.length-2))if(r.length>2){var l=r.lastIndexOf("/");if(l!==r.length-1){-1===l?(r="",o=0):o=(r=r.slice(0,l)).length-1-r.lastIndexOf("/"),i=a,c=0;continue}}else if(2===r.length||1===r.length){r="",o=0,i=a,c=0;continue}t&&(r.length>0?r+="/..":r="..",o=2)}else r.length>0?r+="/"+e.slice(i+1,a):r=e.slice(i+1,a),o=a-i-1;i=a,c=0}else 46===n&&-1!==c?++c:c=-1}return r}var w={resolve:function(){for(var e,t="",n=!1,o=arguments.length-1;o>=-1&&!n;o--){var i;o>=0?i=arguments[o]:(void 0===e&&(e=r.cwd()),i=e),b(i),0!==i.length&&(t=i+"/"+t,n=47===i.charCodeAt(0))}return t=y(t,!n),n?t.length>0?"/"+t:"/":t.length>0?t:"."},normalize:function(e){if(b(e),0===e.length)return".";var t=47===e.charCodeAt(0),n=47===e.charCodeAt(e.length-1);return 0!==(e=y(e,!t)).length||t||(e="."),e.length>0&&n&&(e+="/"),t?"/"+e:e},isAbsolute:function(e){return b(e),e.length>0&&47===e.charCodeAt(0)},join:function(){if(0===arguments.length)return".";for(var e,t=0;t<arguments.length;++t){var n=arguments[t];b(n),n.length>0&&(void 0===e?e=n:e+="/"+n)}return void 0===e?".":w.normalize(e)},relative:function(e,t){if(b(e),b(t),e===t)return"";if((e=w.resolve(e))===(t=w.resolve(t)))return"";for(var n=1;n<e.length&&47===e.charCodeAt(n);++n);for(var r=e.length,o=r-n,i=1;i<t.length&&47===t.charCodeAt(i);++i);for(var c=t.length-i,a=o<c?o:c,l=-1,s=0;s<=a;++s){if(s===a){if(c>a){if(47===t.charCodeAt(i+s))return t.slice(i+s+1);if(0===s)return t.slice(i+s)}else o>a&&(47===e.charCodeAt(n+s)?l=s:0===s&&(l=0));break}var u=e.charCodeAt(n+s);if(u!==t.charCodeAt(i+s))break;47===u&&(l=s)}var f="";for(s=n+l+1;s<=r;++s)s!==r&&47!==e.charCodeAt(s)||(0===f.length?f+="..":f+="/..");return f.length>0?f+t.slice(i+l):(i+=l,47===t.charCodeAt(i)&&++i,t.slice(i))},_makeLong:function(e){return e},dirname:function(e){if(b(e),0===e.length)return".";for(var t=e.charCodeAt(0),n=47===t,r=-1,o=!0,i=e.length-1;i>=1;--i)if(47===(t=e.charCodeAt(i))){if(!o){r=i;break}}else o=!1;return-1===r?n?"/":".":n&&1===r?"//":e.slice(0,r)},basename:function(e,t){if(void 0!==t&&"string"!=typeof t)throw new TypeError('"ext" argument must be a string');b(e);var n,r=0,o=-1,i=!0;if(void 0!==t&&t.length>0&&t.length<=e.length){if(t.length===e.length&&t===e)return"";var c=t.length-1,a=-1;for(n=e.length-1;n>=0;--n){var l=e.charCodeAt(n);if(47===l){if(!i){r=n+1;break}}else-1===a&&(i=!1,a=n+1),c>=0&&(l===t.charCodeAt(c)?-1==--c&&(o=n):(c=-1,o=a))}return r===o?o=a:-1===o&&(o=e.length),e.slice(r,o)}for(n=e.length-1;n>=0;--n)if(47===e.charCodeAt(n)){if(!i){r=n+1;break}}else-1===o&&(i=!1,o=n+1);return-1===o?"":e.slice(r,o)},extname:function(e){b(e);for(var t=-1,n=0,r=-1,o=!0,i=0,c=e.length-1;c>=0;--c){var a=e.charCodeAt(c);if(47!==a)-1===r&&(o=!1,r=c+1),46===a?-1===t?t=c:1!==i&&(i=1):-1!==t&&(i=-1);else if(!o){n=c+1;break}}return-1===t||-1===r||0===i||1===i&&t===r-1&&t===n+1?"":e.slice(t,r)},format:function(e){if(null===e||"object"!=typeof e)throw new TypeError('The "pathObject" argument must be of type Object. Received type '+typeof e);return function(e,t){var n=t.dir||t.root,r=t.base||(t.name||"")+(t.ext||"");return n?n===t.root?n+r:n+e+r:r}("/",e)},parse:function(e){b(e);var t={root:"",dir:"",base:"",ext:"",name:""};if(0===e.length)return t;var n,r=e.charCodeAt(0),o=47===r;o?(t.root="/",n=1):n=0;for(var i=-1,c=0,a=-1,l=!0,s=e.length-1,u=0;s>=n;--s)if(47!==(r=e.charCodeAt(s)))-1===a&&(l=!1,a=s+1),46===r?-1===i?i=s:1!==u&&(u=1):-1!==i&&(u=-1);else if(!l){c=s+1;break}return-1===i||-1===a||0===u||1===u&&i===a-1&&i===c+1?-1!==a&&(t.base=t.name=0===c&&o?e.slice(1,a):e.slice(c,a)):(0===c&&o?(t.name=e.slice(1,i),t.base=e.slice(1,a)):(t.name=e.slice(c,i),t.base=e.slice(c,a)),t.ext=e.slice(i,a)),c>0?t.dir=e.slice(0,c-1):o&&(t.dir="/"),t},sep:"/",delimiter:":",win32:null,posix:null};w.posix=w,m=w;const A=/(?:^|^)\s*(?:export\s+)?([\w.-]+)(?:\s*=\s*?|:\s+?)(\s*'(?:\\'|[^'])*'|\s*"(?:\\"|[^"])*"|\s*`(?:\\`|[^`])*`|[^#\r\n]+)?\s*(?:#.*)?(?:$|$)/gm;function C(e){console.log(`[dotenv][DEBUG] ${e}`)}const T={config:function(e){let t=m.resolve(r.cwd(),".env"),n="utf8";const o=Boolean(e&&e.debug),i=Boolean(e&&e.override);var c;e&&(null!=e.path&&(t="~"===(c=e.path)[0]?m.join("/",c.slice(1)):c),null!=e.encoding&&(n=e.encoding));try{const e=T.parse(p.readFileSync(t,{encoding:n}));return Object.keys(e).forEach((function(t){Object.prototype.hasOwnProperty.call(r.env,t)?(!0===i&&e[t],o&&C(!0===i?`"${t}" is already defined in \`process.env\` and WAS overwritten`:`"${t}" is already defined in \`process.env\` and was NOT overwritten`)):e[t]})),{parsed:e}}catch(e){return o&&C(`Failed to load ${t} ${e.message}`),{error:e}}},parse:function(e){const t={};let n,r=e.toString();for(r=r.replace(/\r\n?/gm,"\n");null!=(n=A.exec(r));){const e=n[1];let r=n[2]||"";r=r.trim();const o=r[0];r=r.replace(/^(['"`])([\s\S]*)\1$/gm,"$2"),'"'===o&&(r=r.replace(/\\n/g,"\n"),r=r.replace(/\\r/g,"\r")),t[e]=r}return t}};n.config=T.config,n.parse=T.parse,(n=T).config();console.log("https://miamibeachbum.com/products.json"),async function(e){const t=await fetch(e),n=await t.json(),r=await n.products,o=document.querySelector(".__productList");let i="";r.forEach((e=>{const t=e.id,n=e.title,r=e.variants;let o="";r.forEach((e=>{o=e.price}));const c=e.images;let a="";c.forEach((e=>{a=e.src}));if(""!==a)return i+=`\n            <div class="__eachProduct" id="${t}">\n                <div class="__eachDetails">\n                    <div class="__eachContent">\n                        <h2 class="__eachTitle">${n}</h2>\n                        <span class="__eachPrice">$${o}</span>\n                    </div>\n                    <div class="skeleton">\n                        <img src="${a}" alt="">\n                    </div>\n                </div>\n            </div>\n        `})),o.innerHTML=i}("https://miamibeachbum.com/products.json");