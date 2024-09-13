(function(_,s){typeof exports=="object"&&typeof module<"u"?s(exports,require("vue")):typeof define=="function"&&define.amd?define(["exports","vue"],s):(_=typeof globalThis<"u"?globalThis:_||self,s(_.VueSplitLayout={},_.Vue))})(this,function(_,s){"use strict";var tu=Object.defineProperty;var ru=(_,s,S)=>s in _?tu(_,s,{enumerable:!0,configurable:!0,writable:!0,value:S}):_[s]=S;var lt=(_,s,S)=>ru(_,typeof s!="symbol"?s+"":s,S);const S=(e,t)=>{const r=e.__vccOpts||e;for(const[a,n]of t)r[a]=n;return r},ut=s.defineComponent({name:"SplitPane",props:{resizeable:{type:Boolean,default:!1},dir:{type:String,default:"horizontal"},split:{type:String,default:"50%"}},setup(e,{emit:t}){const r=s.ref({resizing:!1,split:e.split||"50%"}),a=s.computed(()=>["split",e.dir,r.value.resizing?"resizing":"",e.resizeable?"resizeable":""]);return{state:r,splitClass:a,startResize:o=>{if(!e.resizeable||o.button!==0)return;o.stopPropagation(),o.preventDefault(),r.value.resizing=!0;const i=f=>{if(f.button!==0)return;const v=e.dir==="horizontal",m=(v?f.target.parentNode.children[1].clientWidth:f.target.parentNode.children[1].clientHeight)/2,b=f.target.parentNode.getBoundingClientRect(),T=v?(f.x-b.left-m)/f.target.parentNode.clientWidth*100:(f.y-b.top-m)/f.target.parentNode.clientHeight*100;r.value.split=T+"%",t("onSplitResize",f,r.value.split)},c=f=>{f.button===0&&(r.value.resizing=!1,document.removeEventListener("mousemove",i),document.removeEventListener("mouseup",c))};document.addEventListener("mousemove",i),document.addEventListener("mouseup",c)}}}}),ft={class:"content"};function pt(e,t,r,a,n,o){return s.openBlock(),s.createElementBlock("div",{class:s.normalizeClass(e.splitClass)},[s.createElementVNode("div",{class:"content",style:s.normalizeStyle({flexBasis:e.state.split})},[s.renderSlot(e.$slots,"first",{},void 0,!0)],4),s.createElementVNode("div",{class:"splitter",onMousedown:t[0]||(t[0]=(...i)=>e.startResize&&e.startResize(...i))},null,32),s.createElementVNode("div",ft,[s.renderSlot(e.$slots,"second",{},void 0,!0)])],2)}const ge=S(ut,[["render",pt],["__scopeId","data-v-efd8b820"],["__file","C:/Users/sharm/Desktop/playstation/vue-split-layout-2/src/Split.vue"]]),L=class L{constructor(t){this.tree=t||[]}push(t){return t.id===void 0&&(t.id=L.gid++),this.tree.push(t),t}findById(t){var r=this.tree.find(a=>a.id===t);return r}childrenOf(t){return this.tree.filter(r=>r.parent===t)}removeChild(t){var r=this.tree.indexOf(t);if(r!==-1){this.tree.splice(r,1);var a=this.tree.indexOf(t.parent),[n]=this.childrenOf(t.parent),o=this.tree.indexOf(n);this.tree.splice(o,1),this.tree[a]=n,n.parent=n.parent.parent}}attachChild(t,r,a,n){a.id===void 0&&(a.id=L.gid++),n=n||33;var o=this.tree.indexOf(t),i={id:L.gid++,type:"split",parent:t.parent,dir:r%2===0?"vertical":"horizontal"};return t.parent=i,a.parent=i,this.tree[o]=i,r===0||r===3?(i.split=n+"%",this.tree.push(a,t)):(i.split=100-n+"%",this.tree.push(t,a)),a}};lt(L,"gid",0);let w=L;w.from=function(e){return new w(e)};var U=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function vt(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}function dt(){this.__data__=[],this.size=0}var gt=dt;function yt(e,t){return e===t||e!==e&&t!==t}var ye=yt,ht=ye;function $t(e,t){for(var r=e.length;r--;)if(ht(e[r][0],t))return r;return-1}var R=$t,bt=R,_t=Array.prototype,mt=_t.splice;function Tt(e){var t=this.__data__,r=bt(t,e);if(r<0)return!1;var a=t.length-1;return r==a?t.pop():mt.call(t,r,1),--this.size,!0}var jt=Tt,At=R;function wt(e){var t=this.__data__,r=At(t,e);return r<0?void 0:t[r][1]}var St=wt,Ot=R;function Ct(e){return Ot(this.__data__,e)>-1}var It=Ct,Pt=R;function xt(e,t){var r=this.__data__,a=Pt(r,e);return a<0?(++this.size,r.push([e,t])):r[a][1]=t,this}var Et=xt,Dt=gt,Lt=jt,Mt=St,Bt=It,Nt=Et;function I(e){var t=-1,r=e==null?0:e.length;for(this.clear();++t<r;){var a=e[t];this.set(a[0],a[1])}}I.prototype.clear=Dt,I.prototype.delete=Lt,I.prototype.get=Mt,I.prototype.has=Bt,I.prototype.set=Nt;var k=I,Ft=k;function zt(){this.__data__=new Ft,this.size=0}var Gt=zt;function Ut(e){var t=this.__data__,r=t.delete(e);return this.size=t.size,r}var Rt=Ut;function kt(e){return this.__data__.get(e)}var Kt=kt;function Vt(e){return this.__data__.has(e)}var Ht=Vt,Wt=typeof U=="object"&&U&&U.Object===Object&&U,he=Wt,qt=he,Yt=typeof self=="object"&&self&&self.Object===Object&&self,Xt=qt||Yt||Function("return this")(),j=Xt,Jt=j,Zt=Jt.Symbol,Z=Zt,$e=Z,be=Object.prototype,Qt=be.hasOwnProperty,er=be.toString,N=$e?$e.toStringTag:void 0;function tr(e){var t=Qt.call(e,N),r=e[N];try{e[N]=void 0;var a=!0}catch{}var n=er.call(e);return a&&(t?e[N]=r:delete e[N]),n}var rr=tr,ar=Object.prototype,nr=ar.toString;function ir(e){return nr.call(e)}var or=ir,_e=Z,sr=rr,cr=or,lr="[object Null]",ur="[object Undefined]",me=_e?_e.toStringTag:void 0;function fr(e){return e==null?e===void 0?ur:lr:me&&me in Object(e)?sr(e):cr(e)}var K=fr;function pr(e){var t=typeof e;return e!=null&&(t=="object"||t=="function")}var F=pr,vr=K,dr=F,gr="[object AsyncFunction]",yr="[object Function]",hr="[object GeneratorFunction]",$r="[object Proxy]";function br(e){if(!dr(e))return!1;var t=vr(e);return t==yr||t==hr||t==gr||t==$r}var Te=br,_r=j,mr=_r["__core-js_shared__"],Tr=mr,Q=Tr,je=function(){var e=/[^.]+$/.exec(Q&&Q.keys&&Q.keys.IE_PROTO||"");return e?"Symbol(src)_1."+e:""}();function jr(e){return!!je&&je in e}var Ar=jr,wr=Function.prototype,Sr=wr.toString;function Or(e){if(e!=null){try{return Sr.call(e)}catch{}try{return e+""}catch{}}return""}var Ae=Or,Cr=Te,Ir=Ar,Pr=F,xr=Ae,Er=/[\\^$.*+?()[\]{}|]/g,Dr=/^\[object .+?Constructor\]$/,Lr=Function.prototype,Mr=Object.prototype,Br=Lr.toString,Nr=Mr.hasOwnProperty,Fr=RegExp("^"+Br.call(Nr).replace(Er,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");function zr(e){if(!Pr(e)||Ir(e))return!1;var t=Cr(e)?Fr:Dr;return t.test(xr(e))}var Gr=zr;function Ur(e,t){return e==null?void 0:e[t]}var Rr=Ur,kr=Gr,Kr=Rr;function Vr(e,t){var r=Kr(e,t);return kr(r)?r:void 0}var O=Vr,Hr=O,Wr=j,qr=Hr(Wr,"Map"),ee=qr,Yr=O,Xr=Yr(Object,"create"),V=Xr,we=V;function Jr(){this.__data__=we?we(null):{},this.size=0}var Zr=Jr;function Qr(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=t?1:0,t}var ea=Qr,ta=V,ra="__lodash_hash_undefined__",aa=Object.prototype,na=aa.hasOwnProperty;function ia(e){var t=this.__data__;if(ta){var r=t[e];return r===ra?void 0:r}return na.call(t,e)?t[e]:void 0}var oa=ia,sa=V,ca=Object.prototype,la=ca.hasOwnProperty;function ua(e){var t=this.__data__;return sa?t[e]!==void 0:la.call(t,e)}var fa=ua,pa=V,va="__lodash_hash_undefined__";function da(e,t){var r=this.__data__;return this.size+=this.has(e)?0:1,r[e]=pa&&t===void 0?va:t,this}var ga=da,ya=Zr,ha=ea,$a=oa,ba=fa,_a=ga;function P(e){var t=-1,r=e==null?0:e.length;for(this.clear();++t<r;){var a=e[t];this.set(a[0],a[1])}}P.prototype.clear=ya,P.prototype.delete=ha,P.prototype.get=$a,P.prototype.has=ba,P.prototype.set=_a;var ma=P,Se=ma,Ta=k,ja=ee;function Aa(){this.size=0,this.__data__={hash:new Se,map:new(ja||Ta),string:new Se}}var wa=Aa;function Sa(e){var t=typeof e;return t=="string"||t=="number"||t=="symbol"||t=="boolean"?e!=="__proto__":e===null}var Oa=Sa,Ca=Oa;function Ia(e,t){var r=e.__data__;return Ca(t)?r[typeof t=="string"?"string":"hash"]:r.map}var H=Ia,Pa=H;function xa(e){var t=Pa(this,e).delete(e);return this.size-=t?1:0,t}var Ea=xa,Da=H;function La(e){return Da(this,e).get(e)}var Ma=La,Ba=H;function Na(e){return Ba(this,e).has(e)}var Fa=Na,za=H;function Ga(e,t){var r=za(this,e),a=r.size;return r.set(e,t),this.size+=r.size==a?0:1,this}var Ua=Ga,Ra=wa,ka=Ea,Ka=Ma,Va=Fa,Ha=Ua;function x(e){var t=-1,r=e==null?0:e.length;for(this.clear();++t<r;){var a=e[t];this.set(a[0],a[1])}}x.prototype.clear=Ra,x.prototype.delete=ka,x.prototype.get=Ka,x.prototype.has=Va,x.prototype.set=Ha;var Wa=x,qa=k,Ya=ee,Xa=Wa,Ja=200;function Za(e,t){var r=this.__data__;if(r instanceof qa){var a=r.__data__;if(!Ya||a.length<Ja-1)return a.push([e,t]),this.size=++r.size,this;r=this.__data__=new Xa(a)}return r.set(e,t),this.size=r.size,this}var Qa=Za,en=k,tn=Gt,rn=Rt,an=Kt,nn=Ht,on=Qa;function E(e){var t=this.__data__=new en(e);this.size=t.size}E.prototype.clear=tn,E.prototype.delete=rn,E.prototype.get=an,E.prototype.has=nn,E.prototype.set=on;var sn=E;function cn(e,t){for(var r=-1,a=e==null?0:e.length;++r<a&&t(e[r],r,e)!==!1;);return e}var ln=cn,un=O,fn=function(){try{var e=un(Object,"defineProperty");return e({},"",{}),e}catch{}}(),pn=fn,Oe=pn;function vn(e,t,r){t=="__proto__"&&Oe?Oe(e,t,{configurable:!0,enumerable:!0,value:r,writable:!0}):e[t]=r}var Ce=vn,dn=Ce,gn=ye,yn=Object.prototype,hn=yn.hasOwnProperty;function $n(e,t,r){var a=e[t];(!(hn.call(e,t)&&gn(a,r))||r===void 0&&!(t in e))&&dn(e,t,r)}var Ie=$n,bn=Ie,_n=Ce;function mn(e,t,r,a){var n=!r;r||(r={});for(var o=-1,i=t.length;++o<i;){var c=t[o],f=a?a(r[c],e[c],c,r,e):void 0;f===void 0&&(f=e[c]),n?_n(r,c,f):bn(r,c,f)}return r}var W=mn;function Tn(e,t){for(var r=-1,a=Array(e);++r<e;)a[r]=t(r);return a}var jn=Tn;function An(e){return e!=null&&typeof e=="object"}var z=An,wn=K,Sn=z,On="[object Arguments]";function Cn(e){return Sn(e)&&wn(e)==On}var In=Cn,Pe=In,Pn=z,xe=Object.prototype,xn=xe.hasOwnProperty,En=xe.propertyIsEnumerable,Dn=Pe(function(){return arguments}())?Pe:function(e){return Pn(e)&&xn.call(e,"callee")&&!En.call(e,"callee")},Ln=Dn,Mn=Array.isArray,te=Mn,q={exports:{}};function Bn(){return!1}var Nn=Bn;q.exports,function(e,t){var r=j,a=Nn,n=t&&!t.nodeType&&t,o=n&&!0&&e&&!e.nodeType&&e,i=o&&o.exports===n,c=i?r.Buffer:void 0,f=c?c.isBuffer:void 0,v=f||a;e.exports=v}(q,q.exports);var Ee=q.exports,Fn=9007199254740991,zn=/^(?:0|[1-9]\d*)$/;function Gn(e,t){var r=typeof e;return t=t??Fn,!!t&&(r=="number"||r!="symbol"&&zn.test(e))&&e>-1&&e%1==0&&e<t}var Un=Gn,Rn=9007199254740991;function kn(e){return typeof e=="number"&&e>-1&&e%1==0&&e<=Rn}var De=kn,Kn=K,Vn=De,Hn=z,Wn="[object Arguments]",qn="[object Array]",Yn="[object Boolean]",Xn="[object Date]",Jn="[object Error]",Zn="[object Function]",Qn="[object Map]",ei="[object Number]",ti="[object Object]",ri="[object RegExp]",ai="[object Set]",ni="[object String]",ii="[object WeakMap]",oi="[object ArrayBuffer]",si="[object DataView]",ci="[object Float32Array]",li="[object Float64Array]",ui="[object Int8Array]",fi="[object Int16Array]",pi="[object Int32Array]",vi="[object Uint8Array]",di="[object Uint8ClampedArray]",gi="[object Uint16Array]",yi="[object Uint32Array]",g={};g[ci]=g[li]=g[ui]=g[fi]=g[pi]=g[vi]=g[di]=g[gi]=g[yi]=!0,g[Wn]=g[qn]=g[oi]=g[Yn]=g[si]=g[Xn]=g[Jn]=g[Zn]=g[Qn]=g[ei]=g[ti]=g[ri]=g[ai]=g[ni]=g[ii]=!1;function hi(e){return Hn(e)&&Vn(e.length)&&!!g[Kn(e)]}var $i=hi;function bi(e){return function(t){return e(t)}}var re=bi,Y={exports:{}};Y.exports,function(e,t){var r=he,a=t&&!t.nodeType&&t,n=a&&!0&&e&&!e.nodeType&&e,o=n&&n.exports===a,i=o&&r.process,c=function(){try{var f=n&&n.require&&n.require("util").types;return f||i&&i.binding&&i.binding("util")}catch{}}();e.exports=c}(Y,Y.exports);var ae=Y.exports,_i=$i,mi=re,Le=ae,Me=Le&&Le.isTypedArray,Ti=Me?mi(Me):_i,ji=Ti,Ai=jn,wi=Ln,Si=te,Oi=Ee,Ci=Un,Ii=ji,Pi=Object.prototype,xi=Pi.hasOwnProperty;function Ei(e,t){var r=Si(e),a=!r&&wi(e),n=!r&&!a&&Oi(e),o=!r&&!a&&!n&&Ii(e),i=r||a||n||o,c=i?Ai(e.length,String):[],f=c.length;for(var v in e)(t||xi.call(e,v))&&!(i&&(v=="length"||n&&(v=="offset"||v=="parent")||o&&(v=="buffer"||v=="byteLength"||v=="byteOffset")||Ci(v,f)))&&c.push(v);return c}var Be=Ei,Di=Object.prototype;function Li(e){var t=e&&e.constructor,r=typeof t=="function"&&t.prototype||Di;return e===r}var ne=Li;function Mi(e,t){return function(r){return e(t(r))}}var Ne=Mi,Bi=Ne,Ni=Bi(Object.keys,Object),Fi=Ni,zi=ne,Gi=Fi,Ui=Object.prototype,Ri=Ui.hasOwnProperty;function ki(e){if(!zi(e))return Gi(e);var t=[];for(var r in Object(e))Ri.call(e,r)&&r!="constructor"&&t.push(r);return t}var Ki=ki,Vi=Te,Hi=De;function Wi(e){return e!=null&&Hi(e.length)&&!Vi(e)}var Fe=Wi,qi=Be,Yi=Ki,Xi=Fe;function Ji(e){return Xi(e)?qi(e):Yi(e)}var ie=Ji,Zi=W,Qi=ie;function eo(e,t){return e&&Zi(t,Qi(t),e)}var to=eo;function ro(e){var t=[];if(e!=null)for(var r in Object(e))t.push(r);return t}var ao=ro,no=F,io=ne,oo=ao,so=Object.prototype,co=so.hasOwnProperty;function lo(e){if(!no(e))return oo(e);var t=io(e),r=[];for(var a in e)a=="constructor"&&(t||!co.call(e,a))||r.push(a);return r}var uo=lo,fo=Be,po=uo,vo=Fe;function go(e){return vo(e)?fo(e,!0):po(e)}var oe=go,yo=W,ho=oe;function $o(e,t){return e&&yo(t,ho(t),e)}var bo=$o,X={exports:{}};X.exports,function(e,t){var r=j,a=t&&!t.nodeType&&t,n=a&&!0&&e&&!e.nodeType&&e,o=n&&n.exports===a,i=o?r.Buffer:void 0,c=i?i.allocUnsafe:void 0;function f(v,m){if(m)return v.slice();var b=v.length,T=c?c(b):new v.constructor(b);return v.copy(T),T}e.exports=f}(X,X.exports);var _o=X.exports;function mo(e,t){var r=-1,a=e.length;for(t||(t=Array(a));++r<a;)t[r]=e[r];return t}var To=mo;function jo(e,t){for(var r=-1,a=e==null?0:e.length,n=0,o=[];++r<a;){var i=e[r];t(i,r,e)&&(o[n++]=i)}return o}var Ao=jo;function wo(){return[]}var ze=wo,So=Ao,Oo=ze,Co=Object.prototype,Io=Co.propertyIsEnumerable,Ge=Object.getOwnPropertySymbols,Po=Ge?function(e){return e==null?[]:(e=Object(e),So(Ge(e),function(t){return Io.call(e,t)}))}:Oo,se=Po,xo=W,Eo=se;function Do(e,t){return xo(e,Eo(e),t)}var Lo=Do;function Mo(e,t){for(var r=-1,a=t.length,n=e.length;++r<a;)e[n+r]=t[r];return e}var Ue=Mo,Bo=Ne,No=Bo(Object.getPrototypeOf,Object),Re=No,Fo=Ue,zo=Re,Go=se,Uo=ze,Ro=Object.getOwnPropertySymbols,ko=Ro?function(e){for(var t=[];e;)Fo(t,Go(e)),e=zo(e);return t}:Uo,ke=ko,Ko=W,Vo=ke;function Ho(e,t){return Ko(e,Vo(e),t)}var Wo=Ho,qo=Ue,Yo=te;function Xo(e,t,r){var a=t(e);return Yo(e)?a:qo(a,r(e))}var Ke=Xo,Jo=Ke,Zo=se,Qo=ie;function es(e){return Jo(e,Qo,Zo)}var ts=es,rs=Ke,as=ke,ns=oe;function is(e){return rs(e,ns,as)}var os=is,ss=O,cs=j,ls=ss(cs,"DataView"),us=ls,fs=O,ps=j,vs=fs(ps,"Promise"),ds=vs,gs=O,ys=j,hs=gs(ys,"Set"),$s=hs,bs=O,_s=j,ms=bs(_s,"WeakMap"),Ts=ms,ce=us,le=ee,ue=ds,fe=$s,pe=Ts,Ve=K,D=Ae,He="[object Map]",js="[object Object]",We="[object Promise]",qe="[object Set]",Ye="[object WeakMap]",Xe="[object DataView]",As=D(ce),ws=D(le),Ss=D(ue),Os=D(fe),Cs=D(pe),C=Ve;(ce&&C(new ce(new ArrayBuffer(1)))!=Xe||le&&C(new le)!=He||ue&&C(ue.resolve())!=We||fe&&C(new fe)!=qe||pe&&C(new pe)!=Ye)&&(C=function(e){var t=Ve(e),r=t==js?e.constructor:void 0,a=r?D(r):"";if(a)switch(a){case As:return Xe;case ws:return He;case Ss:return We;case Os:return qe;case Cs:return Ye}return t});var ve=C,Is=Object.prototype,Ps=Is.hasOwnProperty;function xs(e){var t=e.length,r=new e.constructor(t);return t&&typeof e[0]=="string"&&Ps.call(e,"index")&&(r.index=e.index,r.input=e.input),r}var Es=xs,Ds=j,Ls=Ds.Uint8Array,Ms=Ls,Je=Ms;function Bs(e){var t=new e.constructor(e.byteLength);return new Je(t).set(new Je(e)),t}var de=Bs,Ns=de;function Fs(e,t){var r=t?Ns(e.buffer):e.buffer;return new e.constructor(r,e.byteOffset,e.byteLength)}var zs=Fs,Gs=/\w*$/;function Us(e){var t=new e.constructor(e.source,Gs.exec(e));return t.lastIndex=e.lastIndex,t}var Rs=Us,Ze=Z,Qe=Ze?Ze.prototype:void 0,et=Qe?Qe.valueOf:void 0;function ks(e){return et?Object(et.call(e)):{}}var Ks=ks,Vs=de;function Hs(e,t){var r=t?Vs(e.buffer):e.buffer;return new e.constructor(r,e.byteOffset,e.length)}var Ws=Hs,qs=de,Ys=zs,Xs=Rs,Js=Ks,Zs=Ws,Qs="[object Boolean]",ec="[object Date]",tc="[object Map]",rc="[object Number]",ac="[object RegExp]",nc="[object Set]",ic="[object String]",oc="[object Symbol]",sc="[object ArrayBuffer]",cc="[object DataView]",lc="[object Float32Array]",uc="[object Float64Array]",fc="[object Int8Array]",pc="[object Int16Array]",vc="[object Int32Array]",dc="[object Uint8Array]",gc="[object Uint8ClampedArray]",yc="[object Uint16Array]",hc="[object Uint32Array]";function $c(e,t,r){var a=e.constructor;switch(t){case sc:return qs(e);case Qs:case ec:return new a(+e);case cc:return Ys(e,r);case lc:case uc:case fc:case pc:case vc:case dc:case gc:case yc:case hc:return Zs(e,r);case tc:return new a;case rc:case ic:return new a(e);case ac:return Xs(e);case nc:return new a;case oc:return Js(e)}}var bc=$c,_c=F,tt=Object.create,mc=function(){function e(){}return function(t){if(!_c(t))return{};if(tt)return tt(t);e.prototype=t;var r=new e;return e.prototype=void 0,r}}(),Tc=mc,jc=Tc,Ac=Re,wc=ne;function Sc(e){return typeof e.constructor=="function"&&!wc(e)?jc(Ac(e)):{}}var Oc=Sc,Cc=ve,Ic=z,Pc="[object Map]";function xc(e){return Ic(e)&&Cc(e)==Pc}var Ec=xc,Dc=Ec,Lc=re,rt=ae,at=rt&&rt.isMap,Mc=at?Lc(at):Dc,Bc=Mc,Nc=ve,Fc=z,zc="[object Set]";function Gc(e){return Fc(e)&&Nc(e)==zc}var Uc=Gc,Rc=Uc,kc=re,nt=ae,it=nt&&nt.isSet,Kc=it?kc(it):Rc,Vc=Kc,Hc=sn,Wc=ln,qc=Ie,Yc=to,Xc=bo,Jc=_o,Zc=To,Qc=Lo,el=Wo,tl=ts,rl=os,al=ve,nl=Es,il=bc,ol=Oc,sl=te,cl=Ee,ll=Bc,ul=F,fl=Vc,pl=ie,vl=oe,dl=1,gl=2,yl=4,ot="[object Arguments]",hl="[object Array]",$l="[object Boolean]",bl="[object Date]",_l="[object Error]",st="[object Function]",ml="[object GeneratorFunction]",Tl="[object Map]",jl="[object Number]",ct="[object Object]",Al="[object RegExp]",wl="[object Set]",Sl="[object String]",Ol="[object Symbol]",Cl="[object WeakMap]",Il="[object ArrayBuffer]",Pl="[object DataView]",xl="[object Float32Array]",El="[object Float64Array]",Dl="[object Int8Array]",Ll="[object Int16Array]",Ml="[object Int32Array]",Bl="[object Uint8Array]",Nl="[object Uint8ClampedArray]",Fl="[object Uint16Array]",zl="[object Uint32Array]",d={};d[ot]=d[hl]=d[Il]=d[Pl]=d[$l]=d[bl]=d[xl]=d[El]=d[Dl]=d[Ll]=d[Ml]=d[Tl]=d[jl]=d[ct]=d[Al]=d[wl]=d[Sl]=d[Ol]=d[Bl]=d[Nl]=d[Fl]=d[zl]=!0,d[_l]=d[st]=d[Cl]=!1;function J(e,t,r,a,n,o){var i,c=t&dl,f=t&gl,v=t&yl;if(r&&(i=n?r(e,a,n,o):r(e)),i!==void 0)return i;if(!ul(e))return e;var m=sl(e);if(m){if(i=nl(e),!c)return Zc(e,i)}else{var b=al(e),T=b==st||b==ml;if(cl(e))return Jc(e,c);if(b==ct||b==ot||T&&!n){if(i=f||T?{}:ol(e),!c)return f?el(e,Xc(i,e)):Qc(e,Yc(i,e))}else{if(!d[b])return n?e:{};i=il(e,b,c)}}o||(o=new Hc);var M=o.get(e);if(M)return M;o.set(e,i),fl(e)?e.forEach(function(y){i.add(J(y,t,r,y,e,o))}):ll(e)&&e.forEach(function(y,l){i.set(l,J(y,t,r,l,e,o))});var u=v?f?rl:tl:f?vl:pl,$=m?void 0:u(e);return Wc($||e,function(y,l){$&&(l=y,y=e[l]),qc(i,l,J(y,t,r,l,e,o))}),i}var Gl=J,Ul=Gl,Rl=1,kl=4;function Kl(e){return Ul(e,Rl|kl)}var Vl=Kl;const Hl=vt(Vl);function Wl(e,t,r=33){const a=r/100,n=e.getBoundingClientRect(),o=n.width*a,i=n.height*a,c={x:t.clientX-n.left,y:t.clientY-n.top},f=[c.y-i,n.width-o-c.x,n.height-i-c.y,c.x-o];let v=0,m=-1;return f.forEach((b,T)=>{b<v&&(v=b,m=T)}),m}const ql=s.defineComponent({name:"Layout",props:{edit:{type:Boolean,default:!0},resize:{type:Boolean,default:!0},splits:{type:[String,Number,Object],default:()=>({})}},setup(e,{emit:t,slots:r}){const a=s.ref(null),n=s.ref(null),o=s.ref(null),i=s.ref({nodes:v(e.splits)}),c=s.ref(null);s.watch(()=>e.splits,()=>{i.value.nodes=v(e.splits)});const f=()=>{if(!a.value)return;const u=a.value.querySelectorAll("[target-view]");Array.from(u).forEach($=>{a.value.querySelector(`[src-view=${$.getAttribute("target-view")}]`).appendChild($.children[0])})};function v(){const u=[],$=w.from(u),y=l=>{if(l instanceof Object){let p=$.push({type:"split",dir:l.dir,split:l.split});return y(l.first).parent=p,y(l.second).parent=p,p}return $.push({type:"view",viewId:l})};return y(e.splits),u}const m=u=>{if(u.button!==0)return;const $=u.target.hasAttribute("node-id"),y=u.target.hasAttribute("pane-drag");if(!$&&!y)return;let l=u.target;if(!$){let A=l;for(;A&&A.matches&&!A.hasAttribute("node-id");A=A.parentNode);if(!A||!A.matches)return;l=A}const p=parseInt(l.getAttribute("node-id"),10);if(p===void 0)return;const h=i.value.nodes.find(A=>A.id===p);if(h===void 0)return;u.preventDefault(),u.stopPropagation();const G=a.value.getBoundingClientRect(),B=u.target.getBoundingClientRect();c.value={node:h,offset:{x:u.clientX-B.left,y:u.clientY-B.top}},i.value.savedNodes=Hl(i.value.nodes),w.from(i.value.nodes).removeChild(h),o.value.style.top=`${B.y-G.top}px`,o.value.style.left=`${B.x-G.left}px`,o.value.style.width=`${B.width}px`,o.value.style.height=`${B.height}px`,document.addEventListener("mousemove",b),document.addEventListener("mouseup",T)},b=u=>{if(u.button!==0)return;u.preventDefault(),u.stopPropagation(),c.value.over=null;const $=a.value.getBoundingClientRect(),y={x:u.clientX-$.left,y:u.clientY-$.top};o.value.style.left=`${y.x-c.value.offset.x}px`,o.value.style.top=`${y.y-c.value.offset.y}px`,o.value.style.pointerEvents="none";let l=document.elementFromPoint(u.clientX,u.clientY);o.value.style.pointerEvents=null;let p=l;for(;p&&p.matches&&!p.matches(".view");p=p.parentNode);if(!p||!p.matches){M(-1);return}const h=Wl(p,u);h!==-1&&(c.value.over={viewDom:p,attach:h}),M(h,p)},T=u=>{if(u.button!==0)return;if(document.removeEventListener("mousemove",b),document.removeEventListener("mouseup",T),o.value.style.right=o.value.style.bottom=o.value.style.left=o.value.style.width=o.value.style.height="0",M(-1),c.value.over==null){c.value=null,i.value.nodes=i.value.savedNodes;return}const{viewDom:$,attach:y}=c.value.over,l=parseInt($.getAttribute("node-id"),10),p=w.from(i.value.nodes),h=p.findById(l);p.attachChild(h,y,c.value.node),c.value=null};function M(u,$,y=33){if(u===-1){n.value.style.opacity=0;return}if(!$)return-1;const l=y/100,p=$.getBoundingClientRect(),h={left:p.left,top:p.top,width:p.width,height:p.height};u===1?h.left+=h.width-h.width*l:u===2&&(h.top+=h.height-h.height*l),u%2===0?h.height*=l:u%2===1&&(h.width*=l),n.value.style.opacity=1,n.value.style.position="fixed";for(const G in h)n.value.style[G]=`${h[G]}px`}return s.nextTick(()=>{t("layout:begin"),f(),t("layout:complete")}),()=>{const u=l=>{switch(l.type){case"split":{const p=w.from(i.value.nodes).childrenOf(l).map(h=>u(h));return s.h(ge,{key:l.id,"node-id":l.id,resizeable:e.resize,dir:l.dir,split:l.split,onSplitResize},p)}default:return e.edit?s.h("div",{class:"view","node-id":l.id,"target-view":`view-${l.viewId}`,onMousedown:m}):s.h("div",{class:"view","node-id":l.id,"target-view":`view-${l.viewId}`})}},$=u(i.value.nodes[0]),y=["layout-container",e.edit?"edit":""];return s.h("div",{class:y.join(" "),ref:a},[s.h("div",{class:`views ${c.value?"dragging":""}`,ref:"views"},[$]),s.h("div",{class:"preview",ref:n}),s.h("div",{class:`drag ${c.value?"dragging":""}`,ref:o,style:{transformOrigin:c.value?`${c.value.offset.x}px ${c.value.offset.y}px`:""}},[c.value&&s.h("div",{class:"view","target-view":`view-${c.value.node.viewId}`})]),s.h("div",{style:{display:"none"}},r.default.filter(l=>l.tag!==void 0).map((l,p)=>s.h("div",{key:l.key||p,"src-view":`view-${l.key||p}`},[l])))])}}}),Yl=s.defineComponent({name:"Pane",props:{title:{type:String,default:""}},setup(e){const{title:t}=s.toRefs(e);return{title:t}}}),Xl={class:"pane"},Jl={class:"header"},Zl={class:"content"};function Ql(e,t,r,a,n,o){return s.openBlock(),s.createElementBlock("div",Xl,[s.createElementVNode("div",Jl,s.toDisplayString(e.title),1),s.createElementVNode("div",Zl,[s.renderSlot(e.$slots,"default",{},void 0,!0)])])}const eu=S(Yl,[["render",Ql],["__scopeId","data-v-e44086ae"],["__file","C:/Users/sharm/Desktop/playstation/vue-split-layout-2/src/Pane.vue"]]);_.Layout=ql,_.Pane=eu,_.Split=ge,_.Tree=w,Object.defineProperty(_,Symbol.toStringTag,{value:"Module"})});
