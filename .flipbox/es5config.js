(function(FuseBox){FuseBox.$fuse$=FuseBox;
FuseBox.pkg("default", {}, function(___scope___){
___scope___.file("flipbox-config-es6.js", function(exports, require, module, __filename, __dirname){

'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  // root: './',
  aliasDir: './aliases/',
  apps: [{
    name: 'canadas',
    compile: true,
    fusebox: true,
    presets: ['babel-env'],
    entry: './src/canadas/index.js',
    outFile: './src/canadas/dist/canadasbundle.js'
  }]
};
});
});
FuseBox.expose([{"alias":"*","pkg":"cliFlip"}]);

FuseBox.import("default/flipbox-config-es6.js");
FuseBox.main("default/flipbox-config-es6.js");
})
(function(e){if(e.FuseBox)return e.FuseBox;var r="undefined"!=typeof window&&window.navigator;r&&(window.global=window),e=r&&"undefined"==typeof __fbx__dnm__?e:module.exports;var n=r?window.__fsbx__=window.__fsbx__||{}:global.$fsbx=global.$fsbx||{};r||(global.require=require);var t=n.p=n.p||{},i=n.e=n.e||{},a=function(e){var n=e.charCodeAt(0),t=e.charCodeAt(1);if((r||58!==t)&&(n>=97&&n<=122||64===n)){if(64===n){var i=e.split("/"),a=i.splice(2,i.length).join("/");return[i[0]+"/"+i[1],a||void 0]}var o=e.indexOf("/");if(o===-1)return[e];var f=e.substring(0,o),u=e.substring(o+1);return[f,u]}},o=function(e){return e.substring(0,e.lastIndexOf("/"))||"./"},f=function(){for(var e=[],r=0;r<arguments.length;r++)e[r]=arguments[r];for(var n=[],t=0,i=arguments.length;t<i;t++)n=n.concat(arguments[t].split("/"));for(var a=[],t=0,i=n.length;t<i;t++){var o=n[t];o&&"."!==o&&(".."===o?a.pop():a.push(o))}return""===n[0]&&a.unshift(""),a.join("/")||(a.length?"/":".")},u=function(e){var r=e.match(/\.(\w{1,})$/);if(r){var n=r[1];return n?e:e+".js"}return e+".js"},s=function(e){if(r){var n,t=document,i=t.getElementsByTagName("head")[0];/\.css$/.test(e)?(n=t.createElement("link"),n.rel="stylesheet",n.type="text/css",n.href=e):(n=t.createElement("script"),n.type="text/javascript",n.src=e,n.async=!0),i.insertBefore(n,i.firstChild)}},l=function(e,r){for(var n in e)e.hasOwnProperty(n)&&r(n,e[n])},c=function(e){return{server:require(e)}},v=function(e,n){var i=n.path||"./",o=n.pkg||"default",s=a(e);if(s&&(i="./",o=s[0],n.v&&n.v[o]&&(o=o+"@"+n.v[o]),e=s[1]),e)if(126===e.charCodeAt(0))e=e.slice(2,e.length),i="./";else if(!r&&(47===e.charCodeAt(0)||58===e.charCodeAt(1)))return c(e);var l=t[o];if(!l){if(r)throw'Package was not found "'+o+'"';return c(o+(e?"/"+e:""))}e||(e="./"+l.s.entry);var v,d=f(i,e),p=u(d),g=l.f[p];return!g&&p.indexOf("*")>-1&&(v=p),g||v||(p=f(d,"/","index.js"),g=l.f[p],g||(p=d+".js",g=l.f[p]),g||(g=l.f[d+".jsx"]),g||(p=d+"/index.jsx",g=l.f[p])),{file:g,wildcard:v,pkgName:o,versions:l.v,filePath:d,validPath:p}},d=function(e,n){if(!r)return n(/\.(js|json)$/.test(e)?global.require(e):"");var t;t=new XMLHttpRequest,t.onreadystatechange=function(){if(4==t.readyState)if(200==t.status){var r=t.getResponseHeader("Content-Type"),i=t.responseText;/json/.test(r)?i="module.exports = "+i:/javascript/.test(r)||(i="module.exports = "+JSON.stringify(i));var a=f("./",e);h.dynamic(a,i),n(h.import(e,{}))}else console.error(e+" was not found upon request"),n(void 0)},t.open("GET",e,!0),t.send()},p=function(e,r){var n=i[e];if(n)for(var t in n){var a=n[t].apply(null,r);if(a===!1)return!1}},g=function(e,n){if(void 0===n&&(n={}),58===e.charCodeAt(4)||58===e.charCodeAt(5))return s(e);var i=v(e,n);if(i.server)return i.server;var a=i.file;if(i.wildcard){var f=new RegExp(i.wildcard.replace(/\*/g,"@").replace(/[.?*+^$[\]\\(){}|-]/g,"\\$&").replace(/@/g,"[a-z0-9$_-]+"),"i"),u=t[i.pkgName];if(u){var l={};for(var c in u.f)f.test(c)&&(l[c]=g(i.pkgName+"/"+c));return l}}if(!a){var h="function"==typeof n,m=p("async",[e,n]);if(m===!1)return;return d(e,function(e){if(h)return n(e)})}var x=i.validPath,_=i.pkgName;if(a.locals&&a.locals.module)return a.locals.module.exports;var w=a.locals={},y=o(x);w.exports={},w.module={exports:w.exports},w.require=function(e,r){return g(e,{pkg:_,path:y,v:i.versions})},w.require.main={filename:r?"./":global.require.main.filename,paths:r?[]:global.require.main.paths};var b=[w.module.exports,w.require,w.module,x,y,_];p("before-import",b);var j=a.fn;return j.apply(0,b),p("after-import",b),w.module.exports},h=function(){function n(){}return n.global=function(e,n){var t=r?window:global;return void 0===n?t[e]:void(t[e]=n)},n.import=function(e,r){return g(e,r)},n.on=function(e,r){i[e]=i[e]||[],i[e].push(r)},n.exists=function(e){try{var r=v(e,{});return void 0!==r.file}catch(e){return!1}},n.remove=function(e){var r=v(e,{}),n=t[r.pkgName];n&&n.f[r.validPath]&&delete n.f[r.validPath]},n.main=function(e){return this.mainFile=e,n.import(e,{})},n.expose=function(r){var n=function(n){var t=r[n],i=t.alias,a=g(t.pkg);"*"===i?l(a,function(r,n){return e[r]=n}):"object"==typeof i?l(i,function(r,n){return e[n]=a[r]}):e[i]=a};for(var t in r)n(t)},n.dynamic=function(r,n,t){var i=t&&t.pkg||"default";this.pkg(i,{},function(t){t.file(r,function(r,t,i,a,o){var f=new Function("__fbx__dnm__","exports","require","module","__filename","__dirname","__root__",n);f(!0,r,t,i,a,o,e)})})},n.flush=function(e){var r=t.default;for(var n in r.f){var i=!e||e(n);if(i){var a=r.f[n];delete a.locals}}},n.pkg=function(e,r,n){if(t[e])return n(t[e].s);var i=t[e]={},a=i.f={};i.v=r;var o=i.s={file:function(e,r){a[e]={fn:r}}};return n(o)},n.addPlugin=function(e){this.plugins.push(e)},n}();return h.packages=t,h.isBrowser=void 0!==r,h.isServer=!r,h.plugins=[],e.FuseBox=h}(this))