!function(t){var n={};function e(r){if(n[r])return n[r].exports;var i=n[r]={i:r,l:!1,exports:{}};return t[r].call(i.exports,i,i.exports,e),i.l=!0,i.exports}e.m=t,e.c=n,e.d=function(t,n,r){e.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:r})},e.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},e.t=function(t,n){if(1&n&&(t=e(t)),8&n)return t;if(4&n&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(e.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var i in t)e.d(r,i,function(n){return t[n]}.bind(null,i));return r},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},e.p="/diabloweb/",e(e.s=6)}([function(t,n,e){t.exports=e(3)},function(t,n){var e,r,i=t.exports={};function o(){throw new Error("setTimeout has not been defined")}function a(){throw new Error("clearTimeout has not been defined")}function u(t){if(e===setTimeout)return setTimeout(t,0);if((e===o||!e)&&setTimeout)return e=setTimeout,setTimeout(t,0);try{return e(t,0)}catch(n){try{return e.call(null,t,0)}catch(n){return e.call(this,t,0)}}}!function(){try{e="function"===typeof setTimeout?setTimeout:o}catch(t){e=o}try{r="function"===typeof clearTimeout?clearTimeout:a}catch(t){r=a}}();var l,c=[],f=!1,s=-1;function p(){f&&l&&(f=!1,l.length?c=l.concat(c):s=-1,c.length&&y())}function y(){if(!f){var t=u(p);f=!0;for(var n=c.length;n;){for(l=c,c=[];++s<n;)l&&l[s].run();s=-1,n=c.length}l=null,f=!1,function(t){if(r===clearTimeout)return clearTimeout(t);if((r===a||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(t);try{r(t)}catch(n){try{return r.call(null,t)}catch(n){return r.call(this,t)}}}(t)}}function h(t,n){this.fun=t,this.array=n}function m(){}i.nextTick=function(t){var n=new Array(arguments.length-1);if(arguments.length>1)for(var e=1;e<arguments.length;e++)n[e-1]=arguments[e];c.push(new h(t,n)),1!==c.length||f||u(y)},h.prototype.run=function(){this.fun.apply(null,this.array)},i.title="browser",i.browser=!0,i.env={},i.argv=[],i.version="",i.versions={},i.on=m,i.addListener=m,i.once=m,i.off=m,i.removeListener=m,i.removeAllListeners=m,i.emit=m,i.prependListener=m,i.prependOnceListener=m,i.listeners=function(t){return[]},i.binding=function(t){throw new Error("process.binding is not supported")},i.cwd=function(){return"/"},i.chdir=function(t){throw new Error("process.chdir is not supported")},i.umask=function(){return 0}},function(t,n,e){(function(n,r){var i=function(){var t="undefined"!==typeof document&&document.currentScript?document.currentScript.src:void 0;return function(i){var o,a="undefined"!==typeof(i=i||{})?i:{},u={};for(o in a)a.hasOwnProperty(o)&&(u[o]=a[o]);a.arguments=[],a.thisProgram="./this.program",a.quit=function(t,n){throw n},a.preRun=[],a.postRun=[];var l,c,f=!1,s=!1;f="object"===typeof window,s="function"===typeof importScripts,l="object"===typeof n&&!f&&!s,c=!f&&!l&&!s;var p,y,h="";function m(t){return a.locateFile?a.locateFile(t,h):h+t}l?(h=r+"/",a.read=function(t,n){var r;return p||(p=e(4)),y||(y=e(5)),t=y.normalize(t),r=p.readFileSync(t),n?r:r.toString()},a.readBinary=function(t){var n=a.read(t,!0);return n.buffer||(n=new Uint8Array(n)),T(n.buffer),n},n.argv.length>1&&(a.thisProgram=n.argv[1].replace(/\\/g,"/")),a.arguments=n.argv.slice(2),n.on("uncaughtException",function(t){if(!(t instanceof _t))throw t}),n.on("unhandledRejection",function(t,e){n.exit(1)}),a.quit=function(t){n.exit(t)},a.inspect=function(){return"[Emscripten Module object]"}):c?("undefined"!=typeof read&&(a.read=function(t){return read(t)}),a.readBinary=function(t){var n;return"function"===typeof readbuffer?new Uint8Array(readbuffer(t)):(T("object"===typeof(n=read(t,"binary"))),n)},"undefined"!=typeof scriptArgs?a.arguments=scriptArgs:"undefined"!=typeof arguments&&(a.arguments=arguments),"function"===typeof quit&&(a.quit=function(t){quit(t)})):(f||s)&&(f?document.currentScript&&(h=document.currentScript.src):h=self.location.href,t&&(h=t),h=0!==h.indexOf("blob:")?h.split("/").slice(0,-1).join("/")+"/":"",a.read=function(t){var n=new XMLHttpRequest;return n.open("GET",t,!1),n.send(null),n.responseText},s&&(a.readBinary=function(t){var n=new XMLHttpRequest;return n.open("GET",t,!1),n.responseType="arraybuffer",n.send(null),new Uint8Array(n.response)}),a.readAsync=function(t,n,e){var r=new XMLHttpRequest;r.open("GET",t,!0),r.responseType="arraybuffer",r.onload=function(){200==r.status||0==r.status&&r.response?n(r.response):e()},r.onerror=e,r.send(null)},a.setWindowTitle=function(t){document.title=t});var _=a.print||("undefined"!==typeof console?console.log.bind(console):"undefined"!==typeof print?print:null),d=a.printErr||("undefined"!==typeof printErr?printErr:"undefined"!==typeof console&&console.warn.bind(console)||_);for(o in u)u.hasOwnProperty(o)&&(a[o]=u[o]);u=void 0;var v=16;function g(t){var n=L;return L=L+t+15&-16,n}function w(t,n){return n||(n=v),t=Math.ceil(t/n)*n}var b={"f64-rem":function(t,n){return t%n},debugger:function(){}};new Array(0);var A=0;function T(t,n){t||vt("Assertion failed: "+n)}function x(t,n){if(0===n||!t)return"";for(var e,r=0,i=0;r|=e=E[t+i>>0],(0!=e||n)&&(i++,!n||i!=n););n||(n=i);var o="";if(r<128){for(var a;n>0;)a=String.fromCharCode.apply(String,E.subarray(t,t+Math.min(n,1024))),o=o?o+a:a,t+=1024,n-=1024;return o}return function(t){return function(t,n){var e=n;for(;t[e];)++e;if(e-n>16&&t.subarray&&C)return C.decode(t.subarray(n,e));for(var r,i,o,a,u,l,c="";;){if(!(r=t[n++]))return c;if(128&r)if(i=63&t[n++],192!=(224&r))if(o=63&t[n++],224==(240&r)?r=(15&r)<<12|i<<6|o:(a=63&t[n++],240==(248&r)?r=(7&r)<<18|i<<12|o<<6|a:(u=63&t[n++],248==(252&r)?r=(3&r)<<24|i<<18|o<<12|a<<6|u:(l=63&t[n++],r=(1&r)<<30|i<<24|o<<18|a<<12|u<<6|l))),r<65536)c+=String.fromCharCode(r);else{var f=r-65536;c+=String.fromCharCode(55296|f>>10,56320|1023&f)}else c+=String.fromCharCode((31&r)<<6|i);else c+=String.fromCharCode(r)}}(E,t)}(t)}var C="undefined"!==typeof TextDecoder?new TextDecoder("utf8"):void 0;"undefined"!==typeof TextDecoder&&new TextDecoder("utf-16le");var j,M,E,S,L,R,k,O,P,B,I=65536,W=16777216,D=16777216;function z(t,n){return t%n>0&&(t+=n-t%n),t}function N(t){a.buffer=j=t}function G(){a.HEAP8=M=new Int8Array(j),a.HEAP16=new Int16Array(j),a.HEAP32=S=new Int32Array(j),a.HEAPU8=E=new Uint8Array(j),a.HEAPU16=new Uint16Array(j),a.HEAPU32=new Uint32Array(j),a.HEAPF32=new Float32Array(j),a.HEAPF64=new Float64Array(j)}function U(){var t=a.usingWasm?I:W,n=2147483648-t;if(S[B>>2]>n)return!1;var e=H;for(H=Math.max(H,D);H<S[B>>2];)H=H<=536870912?z(2*H,t):Math.min(z((3*H+2147483648)/4,t),n);var r=a.reallocBuffer(H);return r&&r.byteLength==H?(N(r),G(),!0):(H=e,!1)}L=k=B=0,a.reallocBuffer||(a.reallocBuffer=function(t){var n;try{if(ArrayBuffer.transfer)n=ArrayBuffer.transfer(j,t);else{var e=M;n=new ArrayBuffer(t),new Int8Array(n).set(e)}}catch(r){return!1}return!!ft(n)&&n});try{Function.prototype.call.bind(Object.getOwnPropertyDescriptor(ArrayBuffer.prototype,"byteLength").get)(new ArrayBuffer(4))}catch(gt){(function(t){return t.byteLength})}var F=a.TOTAL_STACK||5242880,H=a.TOTAL_MEMORY||134217728;function q(t){for(;t.length>0;){var n=t.shift();if("function"!=typeof n){var e=n.func;"number"===typeof e?void 0===n.arg?a.dynCall_v(e):a.dynCall_vi(e,n.arg):e(void 0===n.arg?null:n.arg)}else n()}}H<F&&d("TOTAL_MEMORY should be larger than TOTAL_STACK, was "+H+"! (TOTAL_STACK="+F+")"),a.buffer?j=a.buffer:("object"===typeof WebAssembly&&"function"===typeof WebAssembly.Memory?(a.wasmMemory=new WebAssembly.Memory({initial:H/I}),j=a.wasmMemory.buffer):j=new ArrayBuffer(H),a.buffer=j),G();var Y=[],X=[],K=[],J=[],Z=!1;function Q(t){J.unshift(t)}Math.abs,Math.cos,Math.sin,Math.tan,Math.acos,Math.asin,Math.atan,Math.atan2,Math.exp,Math.log,Math.sqrt,Math.ceil,Math.floor,Math.pow,Math.imul,Math.fround,Math.round,Math.min,Math.max,Math.clz32,Math.trunc;var V=0,$=null,tt=null;a.preloadedImages={},a.preloadedAudios={};var nt="data:application/octet-stream;base64,";function et(t){return String.prototype.startsWith?t.startsWith(nt):0===t.indexOf(nt)}!function(){var t="MpqCmp.wast",n="MpqCmp.wasm",e="MpqCmp.temp.asm.js";et(t)||(t=m(t)),et(n)||(n=m(n)),et(e)||(e=m(e));var r={global:null,env:null,asm2wasm:b,parent:a},i=null;function o(){try{if(a.wasmBinary)return new Uint8Array(a.wasmBinary);if(a.readBinary)return a.readBinary(n);throw"both async and sync fetching of the wasm failed"}catch(d){vt(d)}}function u(t,e,u){if("object"!==typeof WebAssembly)return d("no native wasm support detected"),!1;if(!(a.wasmMemory instanceof WebAssembly.Memory))return d("no native wasm Memory in use"),!1;function l(t,n){(i=t.exports).memory&&function(t){var n=a.buffer;t.byteLength<n.byteLength&&d("the new buffer in mergeMemory is smaller than the previous one. in native wasm, we should grow memory here");var e=new Int8Array(n);new Int8Array(t).set(e),N(t),G()}(i.memory),a.asm=i,a.usingWasm=!0,function(t){if(V--,a.monitorRunDependencies&&a.monitorRunDependencies(V),0==V&&(null!==$&&(clearInterval($),$=null),tt)){var n=tt;tt=null,n()}}()}if(e.memory=a.wasmMemory,r.global={NaN:NaN,Infinity:1/0},r["global.Math"]=Math,r.env=e,V++,a.monitorRunDependencies&&a.monitorRunDependencies(V),a.instantiateWasm)try{return a.instantiateWasm(r,l)}catch(gt){return d("Module.instantiateWasm callback failed with error: "+gt),!1}function c(t){l(t.instance,t.module)}function p(t){(a.wasmBinary||!f&&!s||"function"!==typeof fetch?new Promise(function(t,n){t(o())}):fetch(n,{credentials:"same-origin"}).then(function(t){if(!t.ok)throw"failed to load wasm binary file at '"+n+"'";return t.arrayBuffer()}).catch(function(){return o()})).then(function(t){return WebAssembly.instantiate(t,r)}).then(t).catch(function(t){d("failed to asynchronously prepare wasm: "+t),vt(t)})}return a.wasmBinary||"function"!==typeof WebAssembly.instantiateStreaming||et(n)||"function"!==typeof fetch?p(c):WebAssembly.instantiateStreaming(fetch(n,{credentials:"same-origin"}),r).then(c).catch(function(t){d("wasm streaming compile failed: "+t),d("falling back to ArrayBuffer instantiation"),p(c)}),{}}a.asmPreload=a.asm;var l=a.reallocBuffer;a.reallocBuffer=function(t){return"asmjs"===c?l(t):function(t){t=z(t,a.usingWasm?I:W);var n=a.buffer.byteLength;if(a.usingWasm)try{return-1!==a.wasmMemory.grow((t-n)/65536)?a.buffer=a.wasmMemory.buffer:null}catch(gt){return null}}(t)};var c="";a.asm=function(t,n,e){var r;if(!(n=n).table){var i=a.wasmTableSize;void 0===i&&(i=1024);var o=a.wasmMaxTableSize;"object"===typeof WebAssembly&&"function"===typeof WebAssembly.Table?n.table=void 0!==o?new WebAssembly.Table({initial:i,maximum:o,element:"anyfunc"}):new WebAssembly.Table({initial:i,element:"anyfunc"}):n.table=new Array(i),a.wasmTable=n.table}return n.memoryBase||(n.memoryBase=a.STATIC_BASE),n.tableBase||(n.tableBase=0),T(r=u(0,n),"no binaryen method succeeded."),r},a.asm}();L=29904,X.push();a.STATIC_BASE=1024,a.STATIC_BUMP=28880;var rt=L;function it(t){try{return st(t)}catch(gt){}}function ot(){return!!ot.uncaught_exception}L+=16;var at={last:0,caught:[],infos:{},deAdjust:function(t){if(!t||at.infos[t])return t;for(var n in at.infos){var e=+n;if(at.infos[e].adjusted===t)return e}return t},addRef:function(t){t&&at.infos[t].refcount++},decRef:function(t){if(t){var n=at.infos[t];T(n.refcount>0),n.refcount--,0!==n.refcount||n.rethrown||(n.destructor&&a.dynCall_vi(n.destructor,t),delete at.infos[t],it(t))}},clearRef:function(t){t&&(at.infos[t].refcount=0)}};function ut(){var t=at.last;if(!t)return 0|(yt(0),0);var n=at.infos[t],e=n.type;if(!e)return 0|(yt(0),t);var r=Array.prototype.slice.call(arguments);a.___cxa_is_pointer_type(e);ut.buffer||(ut.buffer=pt(4)),S[ut.buffer>>2]=t,t=ut.buffer;for(var i=0;i<r.length;i++)if(r[i]&&a.___cxa_can_catch(r[i],e,t))return t=S[t>>2],n.adjusted=t,0|(yt(r[i]),t);return t=S[t>>2],0|(yt(e),t)}function lt(t){return Math.pow(2,t)}B=g(4),R=k=w(L),P=w(O=R+F),S[B>>2]=P;a.wasmTableSize=163,a.wasmMaxTableSize=163,a.asmGlobalArg={},a.asmLibraryArg={abort:vt,assert:T,enlargeMemory:U,getTotalMemory:function(){return H},abortOnCannotGrowMemory:function(){vt("Cannot enlarge memory arrays. Either (1) compile with  -s TOTAL_MEMORY=X  with X higher than the current value "+H+", (2) compile with  -s ALLOW_MEMORY_GROWTH=1  which allows increasing the size at runtime, or (3) if you want malloc to return NULL (0) instead of this abort, compile with  -s ABORTING_MALLOC=0 ")},invoke_ii:function(t,n){var e=mt();try{return a.dynCall_ii(t,n)}catch(gt){if(ht(e),"number"!==typeof gt&&"longjmp"!==gt)throw gt;a.setThrew(1,0)}},invoke_iii:function(t,n,e){var r=mt();try{return a.dynCall_iii(t,n,e)}catch(gt){if(ht(r),"number"!==typeof gt&&"longjmp"!==gt)throw gt;a.setThrew(1,0)}},invoke_iiii:function(t,n,e,r){var i=mt();try{return a.dynCall_iiii(t,n,e,r)}catch(gt){if(ht(i),"number"!==typeof gt&&"longjmp"!==gt)throw gt;a.setThrew(1,0)}},invoke_iiiii:function(t,n,e,r,i){var o=mt();try{return a.dynCall_iiiii(t,n,e,r,i)}catch(gt){if(ht(o),"number"!==typeof gt&&"longjmp"!==gt)throw gt;a.setThrew(1,0)}},invoke_iiiiii:function(t,n,e,r,i,o){var u=mt();try{return a.dynCall_iiiiii(t,n,e,r,i,o)}catch(gt){if(ht(u),"number"!==typeof gt&&"longjmp"!==gt)throw gt;a.setThrew(1,0)}},invoke_iiiiiii:function(t,n,e,r,i,o,u){var l=mt();try{return a.dynCall_iiiiiii(t,n,e,r,i,o,u)}catch(gt){if(ht(l),"number"!==typeof gt&&"longjmp"!==gt)throw gt;a.setThrew(1,0)}},invoke_ji:function(t,n){var e=mt();try{return a.dynCall_ji(t,n)}catch(gt){if(ht(e),"number"!==typeof gt&&"longjmp"!==gt)throw gt;a.setThrew(1,0)}},invoke_v:function(t){var n=mt();try{a.dynCall_v(t)}catch(gt){if(ht(n),"number"!==typeof gt&&"longjmp"!==gt)throw gt;a.setThrew(1,0)}},invoke_vi:function(t,n){var e=mt();try{a.dynCall_vi(t,n)}catch(gt){if(ht(e),"number"!==typeof gt&&"longjmp"!==gt)throw gt;a.setThrew(1,0)}},invoke_vii:function(t,n,e){var r=mt();try{a.dynCall_vii(t,n,e)}catch(gt){if(ht(r),"number"!==typeof gt&&"longjmp"!==gt)throw gt;a.setThrew(1,0)}},invoke_viii:function(t,n,e,r){var i=mt();try{a.dynCall_viii(t,n,e,r)}catch(gt){if(ht(i),"number"!==typeof gt&&"longjmp"!==gt)throw gt;a.setThrew(1,0)}},invoke_viiii:function(t,n,e,r,i){var o=mt();try{a.dynCall_viiii(t,n,e,r,i)}catch(gt){if(ht(o),"number"!==typeof gt&&"longjmp"!==gt)throw gt;a.setThrew(1,0)}},invoke_viiiii:function(t,n,e,r,i,o){var u=mt();try{a.dynCall_viiiii(t,n,e,r,i,o)}catch(gt){if(ht(u),"number"!==typeof gt&&"longjmp"!==gt)throw gt;a.setThrew(1,0)}},invoke_viiiiii:function(t,n,e,r,i,o,u){var l=mt();try{a.dynCall_viiiiii(t,n,e,r,i,o,u)}catch(gt){if(ht(l),"number"!==typeof gt&&"longjmp"!==gt)throw gt;a.setThrew(1,0)}},invoke_viji:function(t,n,e,r,i){var o=mt();try{a.dynCall_viji(t,n,e,r,i)}catch(gt){if(ht(o),"number"!==typeof gt&&"longjmp"!==gt)throw gt;a.setThrew(1,0)}},__ZSt18uncaught_exceptionv:ot,___assert_fail:function(t,n,e,r){vt("Assertion failed: "+x(t)+", at: "+[n?x(n):"unknown filename",e,r?x(r):"unknown function"])},___cxa_allocate_exception:function(t){return pt(t)},___cxa_find_matching_catch:ut,___cxa_find_matching_catch_2:function(){return ut.apply(null,arguments)},___cxa_free_exception:it,___cxa_throw:function(t,n,e){throw at.infos[t]={ptr:t,adjusted:t,type:n,destructor:e,refcount:0,caught:!1,rethrown:!1},at.last=t,"uncaught_exception"in ot?ot.uncaught_exception++:ot.uncaught_exception=1,t},___gxx_personality_v0:function(){},___resumeException:function(t){throw at.last||(at.last=t),t},___setErrNo:function(t){return a.___errno_location&&(S[a.___errno_location()>>2]=t),t},_abort:function(){a.abort()},_do_error:function(t){var n=E.indexOf(0,t),e=String.fromCharCode.apply(null,E.subarray(t,n));self.DApi.exit_error(e)},_do_progress:function(t,n){self.DApi.progress(t,n)},_emscripten_memcpy_big:function(t,n,e){return E.set(E.subarray(n,n+e),t),t},_get_file_contents:function(t,n,e){self.DApi.get_file_contents(E.subarray(t,t+e),n)},_llvm_exp2_f32:lt,_llvm_exp2_f64:function(){return lt.apply(null,arguments)},_put_file_contents:function(t,n,e){self.DApi.put_file_contents(E.subarray(t,t+e),n)},_put_file_size:function(t){self.DApi.put_file_size(t)},DYNAMICTOP_PTR:B,tempDoublePtr:rt,ABORT:A,STACKTOP:k,STACK_MAX:O};var ct=a.asm(a.asmGlobalArg,a.asmLibraryArg,j);a.asm=ct;a._DApi_Alloc=function(){return a.asm._DApi_Alloc.apply(null,arguments)},a._DApi_Compress=function(){return a.asm._DApi_Compress.apply(null,arguments)},a.___cxa_can_catch=function(){return a.asm.___cxa_can_catch.apply(null,arguments)},a.___cxa_is_pointer_type=function(){return a.asm.___cxa_is_pointer_type.apply(null,arguments)},a.___em_js__do_error=function(){return a.asm.___em_js__do_error.apply(null,arguments)},a.___em_js__do_progress=function(){return a.asm.___em_js__do_progress.apply(null,arguments)},a.___em_js__get_file_contents=function(){return a.asm.___em_js__get_file_contents.apply(null,arguments)},a.___em_js__put_file_contents=function(){return a.asm.___em_js__put_file_contents.apply(null,arguments)},a.___em_js__put_file_size=function(){return a.asm.___em_js__put_file_size.apply(null,arguments)};var ft=a._emscripten_replace_memory=function(){return a.asm._emscripten_replace_memory.apply(null,arguments)},st=a._free=function(){return a.asm._free.apply(null,arguments)},pt=(a._llvm_bswap_i32=function(){return a.asm._llvm_bswap_i32.apply(null,arguments)},a._malloc=function(){return a.asm._malloc.apply(null,arguments)}),yt=(a._memcpy=function(){return a.asm._memcpy.apply(null,arguments)},a._memset=function(){return a.asm._memset.apply(null,arguments)},a._sbrk=function(){return a.asm._sbrk.apply(null,arguments)},a.establishStackSpace=function(){return a.asm.establishStackSpace.apply(null,arguments)},a.getTempRet0=function(){return a.asm.getTempRet0.apply(null,arguments)},a.runPostSets=function(){return a.asm.runPostSets.apply(null,arguments)},a.setTempRet0=function(){return a.asm.setTempRet0.apply(null,arguments)}),ht=(a.setThrew=function(){return a.asm.setThrew.apply(null,arguments)},a.stackAlloc=function(){return a.asm.stackAlloc.apply(null,arguments)},a.stackRestore=function(){return a.asm.stackRestore.apply(null,arguments)}),mt=a.stackSave=function(){return a.asm.stackSave.apply(null,arguments)};a.dynCall_ii=function(){return a.asm.dynCall_ii.apply(null,arguments)},a.dynCall_iii=function(){return a.asm.dynCall_iii.apply(null,arguments)},a.dynCall_iiii=function(){return a.asm.dynCall_iiii.apply(null,arguments)},a.dynCall_iiiii=function(){return a.asm.dynCall_iiiii.apply(null,arguments)},a.dynCall_iiiiii=function(){return a.asm.dynCall_iiiiii.apply(null,arguments)},a.dynCall_iiiiiii=function(){return a.asm.dynCall_iiiiiii.apply(null,arguments)},a.dynCall_ji=function(){return a.asm.dynCall_ji.apply(null,arguments)},a.dynCall_v=function(){return a.asm.dynCall_v.apply(null,arguments)},a.dynCall_vi=function(){return a.asm.dynCall_vi.apply(null,arguments)},a.dynCall_vii=function(){return a.asm.dynCall_vii.apply(null,arguments)},a.dynCall_viii=function(){return a.asm.dynCall_viii.apply(null,arguments)},a.dynCall_viiii=function(){return a.asm.dynCall_viiii.apply(null,arguments)},a.dynCall_viiiii=function(){return a.asm.dynCall_viiiii.apply(null,arguments)},a.dynCall_viiiiii=function(){return a.asm.dynCall_viiiiii.apply(null,arguments)},a.dynCall_viji=function(){return a.asm.dynCall_viji.apply(null,arguments)};function _t(t){this.name="ExitStatus",this.message="Program terminated with exit("+t+")",this.status=t}a.asm=ct,a.then=function(t){if(a.calledRun)t(a);else{var n=a.onRuntimeInitialized;a.onRuntimeInitialized=function(){n&&n(),t(a)}}return a},_t.prototype=new Error,_t.prototype.constructor=_t;function dt(t){function n(){a.calledRun||(a.calledRun=!0,A||(Z||(Z=!0,q(X)),q(K),a.onRuntimeInitialized&&a.onRuntimeInitialized(),function(){if(a.postRun)for("function"==typeof a.postRun&&(a.postRun=[a.postRun]);a.postRun.length;)Q(a.postRun.shift());q(J)}()))}t=t||a.arguments,V>0||(!function(){if(a.preRun)for("function"==typeof a.preRun&&(a.preRun=[a.preRun]);a.preRun.length;)t=a.preRun.shift(),Y.unshift(t);var t;q(Y)}(),V>0||a.calledRun||(a.setStatus?(a.setStatus("Running..."),setTimeout(function(){setTimeout(function(){a.setStatus("")},1),n()},1)):n()))}tt=function t(){a.calledRun||dt(),a.calledRun||(tt=t)},a.run=dt;function vt(t){throw a.onAbort&&a.onAbort(t),void 0!==t?(_(t),d(t),t=JSON.stringify(t)):t="",A=!0,1,"abort("+t+"). Build with -s ASSERTIONS=1 for more info."}if(a.abort=vt,a.preInit)for("function"==typeof a.preInit&&(a.preInit=[a.preInit]);a.preInit.length>0;)a.preInit.pop()();return a.noExitRuntime=!0,dt(),a.ready=new Promise(function(t,n){delete a.then,a.onAbort=function(t){n(t)},Q(function(){t(a)})}),i}}();t.exports=i}).call(this,e(1),"/")},function(t,n,e){var r=function(t){"use strict";var n,e=Object.prototype,r=e.hasOwnProperty,i="function"===typeof Symbol?Symbol:{},o=i.iterator||"@@iterator",a=i.asyncIterator||"@@asyncIterator",u=i.toStringTag||"@@toStringTag";function l(t,n,e,r){var i=n&&n.prototype instanceof m?n:m,o=Object.create(i.prototype),a=new M(r||[]);return o._invoke=function(t,n,e){var r=f;return function(i,o){if(r===p)throw new Error("Generator is already running");if(r===y){if("throw"===i)throw o;return S()}for(e.method=i,e.arg=o;;){var a=e.delegate;if(a){var u=x(a,e);if(u){if(u===h)continue;return u}}if("next"===e.method)e.sent=e._sent=e.arg;else if("throw"===e.method){if(r===f)throw r=y,e.arg;e.dispatchException(e.arg)}else"return"===e.method&&e.abrupt("return",e.arg);r=p;var l=c(t,n,e);if("normal"===l.type){if(r=e.done?y:s,l.arg===h)continue;return{value:l.arg,done:e.done}}"throw"===l.type&&(r=y,e.method="throw",e.arg=l.arg)}}}(t,e,a),o}function c(t,n,e){try{return{type:"normal",arg:t.call(n,e)}}catch(r){return{type:"throw",arg:r}}}t.wrap=l;var f="suspendedStart",s="suspendedYield",p="executing",y="completed",h={};function m(){}function _(){}function d(){}var v={};v[o]=function(){return this};var g=Object.getPrototypeOf,w=g&&g(g(E([])));w&&w!==e&&r.call(w,o)&&(v=w);var b=d.prototype=m.prototype=Object.create(v);function A(t){["next","throw","return"].forEach(function(n){t[n]=function(t){return this._invoke(n,t)}})}function T(t){var n;this._invoke=function(e,i){function o(){return new Promise(function(n,o){!function n(e,i,o,a){var u=c(t[e],t,i);if("throw"!==u.type){var l=u.arg,f=l.value;return f&&"object"===typeof f&&r.call(f,"__await")?Promise.resolve(f.__await).then(function(t){n("next",t,o,a)},function(t){n("throw",t,o,a)}):Promise.resolve(f).then(function(t){l.value=t,o(l)},function(t){return n("throw",t,o,a)})}a(u.arg)}(e,i,n,o)})}return n=n?n.then(o,o):o()}}function x(t,e){var r=t.iterator[e.method];if(r===n){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=n,x(t,e),"throw"===e.method))return h;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return h}var i=c(r,t.iterator,e.arg);if("throw"===i.type)return e.method="throw",e.arg=i.arg,e.delegate=null,h;var o=i.arg;return o?o.done?(e[t.resultName]=o.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=n),e.delegate=null,h):o:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,h)}function C(t){var n={tryLoc:t[0]};1 in t&&(n.catchLoc=t[1]),2 in t&&(n.finallyLoc=t[2],n.afterLoc=t[3]),this.tryEntries.push(n)}function j(t){var n=t.completion||{};n.type="normal",delete n.arg,t.completion=n}function M(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(C,this),this.reset(!0)}function E(t){if(t){var e=t[o];if(e)return e.call(t);if("function"===typeof t.next)return t;if(!isNaN(t.length)){var i=-1,a=function e(){for(;++i<t.length;)if(r.call(t,i))return e.value=t[i],e.done=!1,e;return e.value=n,e.done=!0,e};return a.next=a}}return{next:S}}function S(){return{value:n,done:!0}}return _.prototype=b.constructor=d,d.constructor=_,d[u]=_.displayName="GeneratorFunction",t.isGeneratorFunction=function(t){var n="function"===typeof t&&t.constructor;return!!n&&(n===_||"GeneratorFunction"===(n.displayName||n.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,d):(t.__proto__=d,u in t||(t[u]="GeneratorFunction")),t.prototype=Object.create(b),t},t.awrap=function(t){return{__await:t}},A(T.prototype),T.prototype[a]=function(){return this},t.AsyncIterator=T,t.async=function(n,e,r,i){var o=new T(l(n,e,r,i));return t.isGeneratorFunction(e)?o:o.next().then(function(t){return t.done?t.value:o.next()})},A(b),b[u]="Generator",b[o]=function(){return this},b.toString=function(){return"[object Generator]"},t.keys=function(t){var n=[];for(var e in t)n.push(e);return n.reverse(),function e(){for(;n.length;){var r=n.pop();if(r in t)return e.value=r,e.done=!1,e}return e.done=!0,e}},t.values=E,M.prototype={constructor:M,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=n,this.done=!1,this.delegate=null,this.method="next",this.arg=n,this.tryEntries.forEach(j),!t)for(var e in this)"t"===e.charAt(0)&&r.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=n)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function i(r,i){return u.type="throw",u.arg=t,e.next=r,i&&(e.method="next",e.arg=n),!!i}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],u=a.completion;if("root"===a.tryLoc)return i("end");if(a.tryLoc<=this.prev){var l=r.call(a,"catchLoc"),c=r.call(a,"finallyLoc");if(l&&c){if(this.prev<a.catchLoc)return i(a.catchLoc,!0);if(this.prev<a.finallyLoc)return i(a.finallyLoc)}else if(l){if(this.prev<a.catchLoc)return i(a.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return i(a.finallyLoc)}}}},abrupt:function(t,n){for(var e=this.tryEntries.length-1;e>=0;--e){var i=this.tryEntries[e];if(i.tryLoc<=this.prev&&r.call(i,"finallyLoc")&&this.prev<i.finallyLoc){var o=i;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=n&&n<=o.finallyLoc&&(o=null);var a=o?o.completion:{};return a.type=t,a.arg=n,o?(this.method="next",this.next=o.finallyLoc,h):this.complete(a)},complete:function(t,n){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&n&&(this.next=n),h},finish:function(t){for(var n=this.tryEntries.length-1;n>=0;--n){var e=this.tryEntries[n];if(e.finallyLoc===t)return this.complete(e.completion,e.afterLoc),j(e),h}},catch:function(t){for(var n=this.tryEntries.length-1;n>=0;--n){var e=this.tryEntries[n];if(e.tryLoc===t){var r=e.completion;if("throw"===r.type){var i=r.arg;j(e)}return i}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:E(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=n),h}},t}(t.exports);try{regeneratorRuntime=r}catch(i){Function("r","regeneratorRuntime = r")(r)}},function(t,n){},function(t,n,e){(function(t){function e(t,n){for(var e=0,r=t.length-1;r>=0;r--){var i=t[r];"."===i?t.splice(r,1):".."===i?(t.splice(r,1),e++):e&&(t.splice(r,1),e--)}if(n)for(;e--;e)t.unshift("..");return t}function r(t,n){if(t.filter)return t.filter(n);for(var e=[],r=0;r<t.length;r++)n(t[r],r,t)&&e.push(t[r]);return e}n.resolve=function(){for(var n="",i=!1,o=arguments.length-1;o>=-1&&!i;o--){var a=o>=0?arguments[o]:t.cwd();if("string"!==typeof a)throw new TypeError("Arguments to path.resolve must be strings");a&&(n=a+"/"+n,i="/"===a.charAt(0))}return(i?"/":"")+(n=e(r(n.split("/"),function(t){return!!t}),!i).join("/"))||"."},n.normalize=function(t){var o=n.isAbsolute(t),a="/"===i(t,-1);return(t=e(r(t.split("/"),function(t){return!!t}),!o).join("/"))||o||(t="."),t&&a&&(t+="/"),(o?"/":"")+t},n.isAbsolute=function(t){return"/"===t.charAt(0)},n.join=function(){var t=Array.prototype.slice.call(arguments,0);return n.normalize(r(t,function(t,n){if("string"!==typeof t)throw new TypeError("Arguments to path.join must be strings");return t}).join("/"))},n.relative=function(t,e){function r(t){for(var n=0;n<t.length&&""===t[n];n++);for(var e=t.length-1;e>=0&&""===t[e];e--);return n>e?[]:t.slice(n,e-n+1)}t=n.resolve(t).substr(1),e=n.resolve(e).substr(1);for(var i=r(t.split("/")),o=r(e.split("/")),a=Math.min(i.length,o.length),u=a,l=0;l<a;l++)if(i[l]!==o[l]){u=l;break}var c=[];for(l=u;l<i.length;l++)c.push("..");return(c=c.concat(o.slice(u))).join("/")},n.sep="/",n.delimiter=":",n.dirname=function(t){if("string"!==typeof t&&(t+=""),0===t.length)return".";for(var n=t.charCodeAt(0),e=47===n,r=-1,i=!0,o=t.length-1;o>=1;--o)if(47===(n=t.charCodeAt(o))){if(!i){r=o;break}}else i=!1;return-1===r?e?"/":".":e&&1===r?"/":t.slice(0,r)},n.basename=function(t,n){var e=function(t){"string"!==typeof t&&(t+="");var n,e=0,r=-1,i=!0;for(n=t.length-1;n>=0;--n)if(47===t.charCodeAt(n)){if(!i){e=n+1;break}}else-1===r&&(i=!1,r=n+1);return-1===r?"":t.slice(e,r)}(t);return n&&e.substr(-1*n.length)===n&&(e=e.substr(0,e.length-n.length)),e},n.extname=function(t){"string"!==typeof t&&(t+="");for(var n=-1,e=0,r=-1,i=!0,o=0,a=t.length-1;a>=0;--a){var u=t.charCodeAt(a);if(47!==u)-1===r&&(i=!1,r=a+1),46===u?-1===n?n=a:1!==o&&(o=1):-1!==n&&(o=-1);else if(!i){e=a+1;break}}return-1===n||-1===r||0===o||1===o&&n===r-1&&n===e+1?"":t.slice(n,r)};var i="b"==="ab".substr(-1)?function(t,n,e){return t.substr(n,e)}:function(t,n,e){return n<0&&(n=t.length+n),t.substr(n,e)}}).call(this,e(1))},function(t,n,e){"use strict";e.r(n);var r=e(0),i=e.n(r);function o(t,n){return function(t){if(Array.isArray(t))return t}(t)||function(t,n){var e=[],r=!0,i=!1,o=void 0;try{for(var a,u=t[Symbol.iterator]();!(r=(a=u.next()).done)&&(e.push(a.value),!n||e.length!==n);r=!0);}catch(l){i=!0,o=l}finally{try{r||null==u.return||u.return()}finally{if(i)throw o}}return e}(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function a(t,n,e,r,i,o,a){try{var u=t[o](a),l=u.value}catch(c){return void e(c)}u.done?n(l):Promise.resolve(l).then(r,i)}var u=e(2),l=e.n(u),c=self,f=null,s=0,p=null,y=0;var h={exit_error:function(t){throw Error(t)},get_file_contents:function(t,n){t.set(f.subarray(n-s,n-s+t.byteLength))},put_file_size:function(t){p=new Uint8Array(t)},put_file_contents:function(t,n){p.set(t,n)},progress:function(t,n){var e;(t===n||performance.now()>y+100)&&(e=t,c.postMessage({action:"progress",value:e}),y=performance.now())}};function m(){var t;return t=i.a.mark(function t(n){var e,r,o,a,u,c,y,h,m;return i.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return e=n.binary,r=n.mpq,o=n.input,a=n.offset,u=n.blockSize,t.next=3,l()({wasmBinary:e}).ready;case 3:return c=t.sent,f=new Uint8Array(r),s=a,y=o.length/6,h=c._DApi_Alloc(o.byteLength),c.HEAPU32.set(o,h>>2),m=c._DApi_Compress(a+f.length,u,y,h)>>2,t.abrupt("return",[p.buffer,c.HEAPU32.slice(m,m+4*y)]);case 11:case"end":return t.stop()}},t)}),(m=function(){var n=this,e=arguments;return new Promise(function(r,i){var o=t.apply(n,e);function u(t){a(o,r,i,u,l,"next",t)}function l(t){a(o,r,i,u,l,"throw",t)}u(void 0)})}).apply(this,arguments)}c.DApi=h,c.addEventListener("message",function(t){var n=t.data;switch(n.action){case"run":(function(t){return m.apply(this,arguments)})(n).then(function(t){var n=o(t,2),e=n[0],r=n[1];return c.postMessage({action:"result",buffer:e,blocks:r},[e,r.buffer])},function(t){return c.postMessage({action:"error",error:t.toString(),stack:t.stack})})}})}]);
//# sourceMappingURL=8acc76fdb6ee253c485e.worker.js.map