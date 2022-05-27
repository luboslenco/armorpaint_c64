
let mem = null;
let Module = {};
Module.print = Krom.log;
Module.wasmMemory = new WebAssembly.Memory({initial:512, maximum:512});
Module.instantiateWasm = function(imports, successCallback) {
	var bin = Krom.loadBlob("data/plugins/plugin_c64.wasm");
	var module = new WebAssembly.Module(bin);
	var inst = new WebAssembly.Instance(module, imports);
	successCallback(inst);
	return inst.exports;
};
Module.onRuntimeInitialized = function() {
	mem = new Uint8Array(Module.wasmMemory.buffer, Module._c64_start(), 392 * 272 * 4);
};

var b;b||(b=typeof Module !== 'undefined' ? Module : {});var e={},f;for(f in b)b.hasOwnProperty(f)&&(e[f]=b[f]);var g=!1,h=!1,k=!1,l=!1,m=!1;g="object"===typeof window;h="function"===typeof importScripts;k=(l="object"===typeof process&&"object"===typeof process.versions&&"string"===typeof process.versions.node)&&!g&&!h;m=!g&&!k&&!h;var n="",p,q;
if(k){n=__dirname+"/";var r,t;p=function(a,c){r||(r=require("fs"));t||(t=require("path"));a=t.normalize(a);a=r.readFileSync(a);return c?a:a.toString()};q=function(a){a=p(a,!0);a.buffer||(a=new Uint8Array(a));a.buffer||u("Assertion failed: undefined");return a};1<process.argv.length&&process.argv[1].replace(/\\/g,"/");process.argv.slice(2);"undefined"!==typeof module&&(module.exports=b);process.on("uncaughtException",function(a){throw a;});process.on("unhandledRejection",u);b.inspect=function(){return"[Emscripten Module object]"}}else if(m)"undefined"!=
typeof read&&(p=function(a){return read(a)}),q=function(a){if("function"===typeof readbuffer)return new Uint8Array(readbuffer(a));a=read(a,"binary");"object"===typeof a||u("Assertion failed: undefined");return a},"undefined"!==typeof print&&("undefined"===typeof console&&(console={}),console.log=print,console.warn=console.error="undefined"!==typeof printErr?printErr:print);else if(g||h)h?n=self.location.href:document.currentScript&&(n=document.currentScript.src),n=0!==n.indexOf("blob:")?n.substr(0,
n.lastIndexOf("/")+1):"",p=function(a){var c=new XMLHttpRequest;c.open("GET",a,!1);c.send(null);return c.responseText},h&&(q=function(a){var c=new XMLHttpRequest;c.open("GET",a,!1);c.responseType="arraybuffer";c.send(null);return new Uint8Array(c.response)});var v=b.print||console.log.bind(console),w=b.printErr||console.warn.bind(console);for(f in e)e.hasOwnProperty(f)&&(b[f]=e[f]);e=null;var x={"f64-rem":function(a,c){return a%c},"debugger":function(){}},y;b.wasmBinary&&(y=b.wasmBinary);
"object"!==typeof WebAssembly&&w("no native wasm support detected");var z,A=!1;"undefined"!==typeof TextDecoder&&new TextDecoder("utf8");"undefined"!==typeof TextDecoder&&new TextDecoder("utf-16le");var buffer,B,C,D=b.TOTAL_MEMORY||33554432;b.wasmMemory?z=b.wasmMemory:z=new WebAssembly.Memory({initial:D/65536});z&&(buffer=z.buffer);D=buffer.byteLength;var F=buffer;buffer=F;b.HEAP8=new Int8Array(F);b.HEAP16=new Int16Array(F);b.HEAP32=C=new Int32Array(F);b.HEAPU8=B=new Uint8Array(F);b.HEAPU16=new Uint16Array(F);
b.HEAPU32=new Uint32Array(F);b.HEAPF32=new Float32Array(F);b.HEAPF64=new Float64Array(F);C[271224]=6327808;function G(a){for(;0<a.length;){var c=a.shift();if("function"==typeof c)c();else{var d=c.g;"number"===typeof d?void 0===c.f?b.dynCall_v(d):b.dynCall_vi(d,c.f):d(void 0===c.f?null:c.f)}}}var H=[],I=[],J=[],K=[];function L(){var a=b.preRun.shift();H.unshift(a)}var M=0,N=null,O=null;b.preloadedImages={};b.preloadedAudios={};
function Q(){var a=R;return String.prototype.startsWith?a.startsWith("data:application/octet-stream;base64,"):0===a.indexOf("data:application/octet-stream;base64,")}var R="c64.wasm";if(!Q()){var S=R;R=b.locateFile?b.locateFile(S,n):n+S}function T(){try{if(y)return new Uint8Array(y);if(q)return q(R);throw"both async and sync fetching of the wasm failed";}catch(a){u(a)}}
function U(){return y||!g&&!h||"function"!==typeof fetch?new Promise(function(a){a(T())}):fetch(R,{credentials:"same-origin"}).then(function(a){if(!a.ok)throw"failed to load wasm binary file at '"+R+"'";return a.arrayBuffer()}).catch(function(){return T()})}
function V(a){function c(a){b.asm=a.exports;M--;b.monitorRunDependencies&&b.monitorRunDependencies(M);0==M&&(null!==N&&(clearInterval(N),N=null),O&&(a=O,O=null,a()))}function d(a){c(a.instance)}function P(a){return U().then(function(a){return WebAssembly.instantiate(a,E)}).then(a,function(a){w("failed to asynchronously prepare wasm: "+a);u(a)})}var E={env:a,global:{NaN:NaN,Infinity:Infinity},"global.Math":Math,asm2wasm:x};M++;b.monitorRunDependencies&&b.monitorRunDependencies(M);if(b.instantiateWasm)try{return b.instantiateWasm(E,
c)}catch(Z){return w("Module.instantiateWasm callback failed with error: "+Z),!1}(function(){if(y||"function"!==typeof WebAssembly.instantiateStreaming||Q()||"function"!==typeof fetch)return P(d);fetch(R,{credentials:"same-origin"}).then(function(a){return WebAssembly.instantiateStreaming(a,E).then(d,function(a){w("wasm streaming compile failed: "+a);w("falling back to ArrayBuffer instantiation");P(d)})})})();return{}}
b.asm=function(a,c){c.memory=z;c.table=new WebAssembly.Table({initial:15,maximum:15,element:"anyfunc"});c.__memory_base=1024;c.__table_base=0;return V(c)};var W=b.asm({},{a:u,b:function(a,c,d){B.set(B.subarray(c,c+d),a)}},buffer);b.asm=W;b._c64_key=function(){return b.asm.c.apply(null,arguments)};b._c64_run=function(){return b.asm.d.apply(null,arguments)};b._c64_start=function(){return b.asm.e.apply(null,arguments)};b.asm=W;var X;O=function aa(){X||Y();X||(O=aa)};
function Y(){function a(){if(!X&&(X=!0,!A)){G(I);G(J);if(b.onRuntimeInitialized)b.onRuntimeInitialized();if(b.postRun)for("function"==typeof b.postRun&&(b.postRun=[b.postRun]);b.postRun.length;){var a=b.postRun.shift();K.unshift(a)}G(K)}}if(!(0<M)){if(b.preRun)for("function"==typeof b.preRun&&(b.preRun=[b.preRun]);b.preRun.length;)L();G(H);0<M||(b.setStatus?(b.setStatus("Running..."),setTimeout(function(){setTimeout(function(){b.setStatus("")},1);a()},1)):a())}}b.run=Y;
function u(a){if(b.onAbort)b.onAbort(a);v(a);w(a);A=!0;throw"abort("+a+"). Build with -s ASSERTIONS=1 for more info.";}b.abort=u;if(b.preInit)for("function"==typeof b.preInit&&(b.preInit=[b.preInit]);0<b.preInit.length;)b.preInit.pop()();Y();

//

var plugin = new arm.Plugin();

plugin.drawUI = function(ui) {};

plugin.keypress = function(code) {
	Module._c64_key(code);
}

plugin.update = function() {
	Module._c64_run();
	plugin.tick(mem);
};
