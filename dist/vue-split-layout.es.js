var gt = Object.defineProperty;
var yt = (e, t, r) => t in e ? gt(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r;
var $e = (e, t, r) => yt(e, typeof t != "symbol" ? t + "" : t, r);
import { defineComponent as se, ref as C, computed as ht, openBlock as ke, createElementBlock as He, normalizeClass as $t, createElementVNode as N, normalizeStyle as bt, renderSlot as ee, watch as _t, nextTick as mt, h as T, toRefs as Tt, toDisplayString as At } from "vue";
const Ve = (e, t) => {
  const r = e.__vccOpts || e;
  for (const [a, i] of t)
    r[a] = i;
  return r;
}, jt = se({
  name: "SplitPane",
  props: {
    resizeable: { type: Boolean, default: !1 },
    dir: { type: String, default: "horizontal" },
    split: { type: String, default: "50%" }
  },
  setup(e, { emit: t }) {
    const r = C({
      resizing: !1,
      split: e.split || "50%"
    }), a = ht(() => [
      "split",
      e.dir,
      r.value.resizing ? "resizing" : "",
      e.resizeable ? "resizeable" : ""
    ]);
    return {
      state: r,
      splitClass: a,
      startResize: (s) => {
        if (!e.resizeable || s.button !== 0) return;
        s.stopPropagation(), s.preventDefault(), r.value.resizing = !0;
        const n = (u) => {
          if (u.button !== 0) return;
          const p = e.dir === "horizontal", b = (p ? u.target.parentNode.children[1].clientWidth : u.target.parentNode.children[1].clientHeight) / 2, $ = u.target.parentNode.getBoundingClientRect(), _ = p ? (u.x - $.left - b) / u.target.parentNode.clientWidth * 100 : (u.y - $.top - b) / u.target.parentNode.clientHeight * 100;
          r.value.split = _ + "%", t("onSplitResize", u, r.value.split);
        }, o = (u) => {
          u.button === 0 && (r.value.resizing = !1, document.removeEventListener("mousemove", n), document.removeEventListener("mouseup", o));
        };
        document.addEventListener("mousemove", n), document.addEventListener("mouseup", o);
      }
    };
  }
}), wt = { class: "content" };
function St(e, t, r, a, i, s) {
  return ke(), He("div", {
    class: $t(e.splitClass)
  }, [
    N("div", {
      class: "content",
      style: bt({ flexBasis: e.state.split })
    }, [
      ee(e.$slots, "first", {}, void 0, !0)
    ], 4),
    N("div", {
      class: "splitter",
      onMousedown: t[0] || (t[0] = (...n) => e.startResize && e.startResize(...n))
    }, null, 32),
    N("div", wt, [
      ee(e.$slots, "second", {}, void 0, !0)
    ])
  ], 2);
}
const Ot = /* @__PURE__ */ Ve(jt, [["render", St], ["__scopeId", "data-v-37a86a32"]]), I = class I {
  constructor(t) {
    this.tree = t || [];
  }
  push(t) {
    return t.id === void 0 && (t.id = I.gid++), this.tree.push(t), t;
  }
  findById(t) {
    var r = this.tree.find((a) => a.id === t);
    return r;
  }
  childrenOf(t) {
    return this.tree.filter((r) => r.parent === t);
  }
  removeChild(t) {
    var r = this.tree.indexOf(t);
    if (r !== -1) {
      this.tree.splice(r, 1);
      var a = this.tree.indexOf(t.parent), [i] = this.childrenOf(t.parent), s = this.tree.indexOf(i);
      this.tree.splice(s, 1), this.tree[a] = i, i.parent = i.parent.parent;
    }
  }
  attachChild(t, r, a, i) {
    a.id === void 0 && (a.id = I.gid++), i = i || 33;
    var s = this.tree.indexOf(t), n = {
      id: I.gid++,
      type: "split",
      parent: t.parent,
      dir: r % 2 === 0 ? "vertical" : "horizontal"
    };
    return t.parent = n, a.parent = n, this.tree[s] = n, r === 0 || r === 3 ? (n.split = i + "%", this.tree.push(a, t)) : (n.split = 100 - i + "%", this.tree.push(t, a)), a;
  }
};
$e(I, "gid", 0);
let j = I;
j.from = function(e) {
  return new j(e);
};
var U = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function Ct(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
function It() {
  this.__data__ = [], this.size = 0;
}
var xt = It;
function Pt(e, t) {
  return e === t || e !== e && t !== t;
}
var We = Pt, Et = We;
function Dt(e, t) {
  for (var r = e.length; r--; )
    if (Et(e[r][0], t))
      return r;
  return -1;
}
var W = Dt, Lt = W, Mt = Array.prototype, Bt = Mt.splice;
function Ft(e) {
  var t = this.__data__, r = Lt(t, e);
  if (r < 0)
    return !1;
  var a = t.length - 1;
  return r == a ? t.pop() : Bt.call(t, r, 1), --this.size, !0;
}
var Nt = Ft, zt = W;
function Gt(e) {
  var t = this.__data__, r = zt(t, e);
  return r < 0 ? void 0 : t[r][1];
}
var Rt = Gt, Ut = W;
function Kt(e) {
  return Ut(this.__data__, e) > -1;
}
var kt = Kt, Ht = W;
function Vt(e, t) {
  var r = this.__data__, a = Ht(r, e);
  return a < 0 ? (++this.size, r.push([e, t])) : r[a][1] = t, this;
}
var Wt = Vt, qt = xt, Yt = Nt, Xt = Rt, Jt = kt, Zt = Wt;
function x(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.clear(); ++t < r; ) {
    var a = e[t];
    this.set(a[0], a[1]);
  }
}
x.prototype.clear = qt;
x.prototype.delete = Yt;
x.prototype.get = Xt;
x.prototype.has = Jt;
x.prototype.set = Zt;
var q = x, Qt = q;
function er() {
  this.__data__ = new Qt(), this.size = 0;
}
var tr = er;
function rr(e) {
  var t = this.__data__, r = t.delete(e);
  return this.size = t.size, r;
}
var ar = rr;
function nr(e) {
  return this.__data__.get(e);
}
var ir = nr;
function sr(e) {
  return this.__data__.has(e);
}
var or = sr, cr = typeof U == "object" && U && U.Object === Object && U, qe = cr, lr = qe, ur = typeof self == "object" && self && self.Object === Object && self, fr = lr || ur || Function("return this")(), A = fr, vr = A, pr = vr.Symbol, oe = pr, be = oe, Ye = Object.prototype, dr = Ye.hasOwnProperty, gr = Ye.toString, F = be ? be.toStringTag : void 0;
function yr(e) {
  var t = dr.call(e, F), r = e[F];
  try {
    e[F] = void 0;
    var a = !0;
  } catch {
  }
  var i = gr.call(e);
  return a && (t ? e[F] = r : delete e[F]), i;
}
var hr = yr, $r = Object.prototype, br = $r.toString;
function _r(e) {
  return br.call(e);
}
var mr = _r, _e = oe, Tr = hr, Ar = mr, jr = "[object Null]", wr = "[object Undefined]", me = _e ? _e.toStringTag : void 0;
function Sr(e) {
  return e == null ? e === void 0 ? wr : jr : me && me in Object(e) ? Tr(e) : Ar(e);
}
var Y = Sr;
function Or(e) {
  var t = typeof e;
  return e != null && (t == "object" || t == "function");
}
var z = Or, Cr = Y, Ir = z, xr = "[object AsyncFunction]", Pr = "[object Function]", Er = "[object GeneratorFunction]", Dr = "[object Proxy]";
function Lr(e) {
  if (!Ir(e))
    return !1;
  var t = Cr(e);
  return t == Pr || t == Er || t == xr || t == Dr;
}
var Xe = Lr, Mr = A, Br = Mr["__core-js_shared__"], Fr = Br, Q = Fr, Te = function() {
  var e = /[^.]+$/.exec(Q && Q.keys && Q.keys.IE_PROTO || "");
  return e ? "Symbol(src)_1." + e : "";
}();
function Nr(e) {
  return !!Te && Te in e;
}
var zr = Nr, Gr = Function.prototype, Rr = Gr.toString;
function Ur(e) {
  if (e != null) {
    try {
      return Rr.call(e);
    } catch {
    }
    try {
      return e + "";
    } catch {
    }
  }
  return "";
}
var Je = Ur, Kr = Xe, kr = zr, Hr = z, Vr = Je, Wr = /[\\^$.*+?()[\]{}|]/g, qr = /^\[object .+?Constructor\]$/, Yr = Function.prototype, Xr = Object.prototype, Jr = Yr.toString, Zr = Xr.hasOwnProperty, Qr = RegExp(
  "^" + Jr.call(Zr).replace(Wr, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function ea(e) {
  if (!Hr(e) || kr(e))
    return !1;
  var t = Kr(e) ? Qr : qr;
  return t.test(Vr(e));
}
var ta = ea;
function ra(e, t) {
  return e == null ? void 0 : e[t];
}
var aa = ra, na = ta, ia = aa;
function sa(e, t) {
  var r = ia(e, t);
  return na(r) ? r : void 0;
}
var S = sa, oa = S, ca = A, la = oa(ca, "Map"), ce = la, ua = S, fa = ua(Object, "create"), X = fa, Ae = X;
function va() {
  this.__data__ = Ae ? Ae(null) : {}, this.size = 0;
}
var pa = va;
function da(e) {
  var t = this.has(e) && delete this.__data__[e];
  return this.size -= t ? 1 : 0, t;
}
var ga = da, ya = X, ha = "__lodash_hash_undefined__", $a = Object.prototype, ba = $a.hasOwnProperty;
function _a(e) {
  var t = this.__data__;
  if (ya) {
    var r = t[e];
    return r === ha ? void 0 : r;
  }
  return ba.call(t, e) ? t[e] : void 0;
}
var ma = _a, Ta = X, Aa = Object.prototype, ja = Aa.hasOwnProperty;
function wa(e) {
  var t = this.__data__;
  return Ta ? t[e] !== void 0 : ja.call(t, e);
}
var Sa = wa, Oa = X, Ca = "__lodash_hash_undefined__";
function Ia(e, t) {
  var r = this.__data__;
  return this.size += this.has(e) ? 0 : 1, r[e] = Oa && t === void 0 ? Ca : t, this;
}
var xa = Ia, Pa = pa, Ea = ga, Da = ma, La = Sa, Ma = xa;
function P(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.clear(); ++t < r; ) {
    var a = e[t];
    this.set(a[0], a[1]);
  }
}
P.prototype.clear = Pa;
P.prototype.delete = Ea;
P.prototype.get = Da;
P.prototype.has = La;
P.prototype.set = Ma;
var Ba = P, je = Ba, Fa = q, Na = ce;
function za() {
  this.size = 0, this.__data__ = {
    hash: new je(),
    map: new (Na || Fa)(),
    string: new je()
  };
}
var Ga = za;
function Ra(e) {
  var t = typeof e;
  return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null;
}
var Ua = Ra, Ka = Ua;
function ka(e, t) {
  var r = e.__data__;
  return Ka(t) ? r[typeof t == "string" ? "string" : "hash"] : r.map;
}
var J = ka, Ha = J;
function Va(e) {
  var t = Ha(this, e).delete(e);
  return this.size -= t ? 1 : 0, t;
}
var Wa = Va, qa = J;
function Ya(e) {
  return qa(this, e).get(e);
}
var Xa = Ya, Ja = J;
function Za(e) {
  return Ja(this, e).has(e);
}
var Qa = Za, en = J;
function tn(e, t) {
  var r = en(this, e), a = r.size;
  return r.set(e, t), this.size += r.size == a ? 0 : 1, this;
}
var rn = tn, an = Ga, nn = Wa, sn = Xa, on = Qa, cn = rn;
function E(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.clear(); ++t < r; ) {
    var a = e[t];
    this.set(a[0], a[1]);
  }
}
E.prototype.clear = an;
E.prototype.delete = nn;
E.prototype.get = sn;
E.prototype.has = on;
E.prototype.set = cn;
var ln = E, un = q, fn = ce, vn = ln, pn = 200;
function dn(e, t) {
  var r = this.__data__;
  if (r instanceof un) {
    var a = r.__data__;
    if (!fn || a.length < pn - 1)
      return a.push([e, t]), this.size = ++r.size, this;
    r = this.__data__ = new vn(a);
  }
  return r.set(e, t), this.size = r.size, this;
}
var gn = dn, yn = q, hn = tr, $n = ar, bn = ir, _n = or, mn = gn;
function D(e) {
  var t = this.__data__ = new yn(e);
  this.size = t.size;
}
D.prototype.clear = hn;
D.prototype.delete = $n;
D.prototype.get = bn;
D.prototype.has = _n;
D.prototype.set = mn;
var Tn = D;
function An(e, t) {
  for (var r = -1, a = e == null ? 0 : e.length; ++r < a && t(e[r], r, e) !== !1; )
    ;
  return e;
}
var jn = An, wn = S, Sn = function() {
  try {
    var e = wn(Object, "defineProperty");
    return e({}, "", {}), e;
  } catch {
  }
}(), On = Sn, we = On;
function Cn(e, t, r) {
  t == "__proto__" && we ? we(e, t, {
    configurable: !0,
    enumerable: !0,
    value: r,
    writable: !0
  }) : e[t] = r;
}
var Ze = Cn, In = Ze, xn = We, Pn = Object.prototype, En = Pn.hasOwnProperty;
function Dn(e, t, r) {
  var a = e[t];
  (!(En.call(e, t) && xn(a, r)) || r === void 0 && !(t in e)) && In(e, t, r);
}
var Qe = Dn, Ln = Qe, Mn = Ze;
function Bn(e, t, r, a) {
  var i = !r;
  r || (r = {});
  for (var s = -1, n = t.length; ++s < n; ) {
    var o = t[s], u = a ? a(r[o], e[o], o, r, e) : void 0;
    u === void 0 && (u = e[o]), i ? Mn(r, o, u) : Ln(r, o, u);
  }
  return r;
}
var Z = Bn;
function Fn(e, t) {
  for (var r = -1, a = Array(e); ++r < e; )
    a[r] = t(r);
  return a;
}
var Nn = Fn;
function zn(e) {
  return e != null && typeof e == "object";
}
var G = zn, Gn = Y, Rn = G, Un = "[object Arguments]";
function Kn(e) {
  return Rn(e) && Gn(e) == Un;
}
var kn = Kn, Se = kn, Hn = G, et = Object.prototype, Vn = et.hasOwnProperty, Wn = et.propertyIsEnumerable, qn = Se(/* @__PURE__ */ function() {
  return arguments;
}()) ? Se : function(e) {
  return Hn(e) && Vn.call(e, "callee") && !Wn.call(e, "callee");
}, Yn = qn, Xn = Array.isArray, le = Xn, k = { exports: {} };
function Jn() {
  return !1;
}
var Zn = Jn;
k.exports;
(function(e, t) {
  var r = A, a = Zn, i = t && !t.nodeType && t, s = i && !0 && e && !e.nodeType && e, n = s && s.exports === i, o = n ? r.Buffer : void 0, u = o ? o.isBuffer : void 0, p = u || a;
  e.exports = p;
})(k, k.exports);
var tt = k.exports, Qn = 9007199254740991, ei = /^(?:0|[1-9]\d*)$/;
function ti(e, t) {
  var r = typeof e;
  return t = t ?? Qn, !!t && (r == "number" || r != "symbol" && ei.test(e)) && e > -1 && e % 1 == 0 && e < t;
}
var ri = ti, ai = 9007199254740991;
function ni(e) {
  return typeof e == "number" && e > -1 && e % 1 == 0 && e <= ai;
}
var rt = ni, ii = Y, si = rt, oi = G, ci = "[object Arguments]", li = "[object Array]", ui = "[object Boolean]", fi = "[object Date]", vi = "[object Error]", pi = "[object Function]", di = "[object Map]", gi = "[object Number]", yi = "[object Object]", hi = "[object RegExp]", $i = "[object Set]", bi = "[object String]", _i = "[object WeakMap]", mi = "[object ArrayBuffer]", Ti = "[object DataView]", Ai = "[object Float32Array]", ji = "[object Float64Array]", wi = "[object Int8Array]", Si = "[object Int16Array]", Oi = "[object Int32Array]", Ci = "[object Uint8Array]", Ii = "[object Uint8ClampedArray]", xi = "[object Uint16Array]", Pi = "[object Uint32Array]", y = {};
y[Ai] = y[ji] = y[wi] = y[Si] = y[Oi] = y[Ci] = y[Ii] = y[xi] = y[Pi] = !0;
y[ci] = y[li] = y[mi] = y[ui] = y[Ti] = y[fi] = y[vi] = y[pi] = y[di] = y[gi] = y[yi] = y[hi] = y[$i] = y[bi] = y[_i] = !1;
function Ei(e) {
  return oi(e) && si(e.length) && !!y[ii(e)];
}
var Di = Ei;
function Li(e) {
  return function(t) {
    return e(t);
  };
}
var ue = Li, H = { exports: {} };
H.exports;
(function(e, t) {
  var r = qe, a = t && !t.nodeType && t, i = a && !0 && e && !e.nodeType && e, s = i && i.exports === a, n = s && r.process, o = function() {
    try {
      var u = i && i.require && i.require("util").types;
      return u || n && n.binding && n.binding("util");
    } catch {
    }
  }();
  e.exports = o;
})(H, H.exports);
var fe = H.exports, Mi = Di, Bi = ue, Oe = fe, Ce = Oe && Oe.isTypedArray, Fi = Ce ? Bi(Ce) : Mi, Ni = Fi, zi = Nn, Gi = Yn, Ri = le, Ui = tt, Ki = ri, ki = Ni, Hi = Object.prototype, Vi = Hi.hasOwnProperty;
function Wi(e, t) {
  var r = Ri(e), a = !r && Gi(e), i = !r && !a && Ui(e), s = !r && !a && !i && ki(e), n = r || a || i || s, o = n ? zi(e.length, String) : [], u = o.length;
  for (var p in e)
    (t || Vi.call(e, p)) && !(n && // Safari 9 has enumerable `arguments.length` in strict mode.
    (p == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
    i && (p == "offset" || p == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
    s && (p == "buffer" || p == "byteLength" || p == "byteOffset") || // Skip index properties.
    Ki(p, u))) && o.push(p);
  return o;
}
var at = Wi, qi = Object.prototype;
function Yi(e) {
  var t = e && e.constructor, r = typeof t == "function" && t.prototype || qi;
  return e === r;
}
var ve = Yi;
function Xi(e, t) {
  return function(r) {
    return e(t(r));
  };
}
var nt = Xi, Ji = nt, Zi = Ji(Object.keys, Object), Qi = Zi, es = ve, ts = Qi, rs = Object.prototype, as = rs.hasOwnProperty;
function ns(e) {
  if (!es(e))
    return ts(e);
  var t = [];
  for (var r in Object(e))
    as.call(e, r) && r != "constructor" && t.push(r);
  return t;
}
var is = ns, ss = Xe, os = rt;
function cs(e) {
  return e != null && os(e.length) && !ss(e);
}
var it = cs, ls = at, us = is, fs = it;
function vs(e) {
  return fs(e) ? ls(e) : us(e);
}
var pe = vs, ps = Z, ds = pe;
function gs(e, t) {
  return e && ps(t, ds(t), e);
}
var ys = gs;
function hs(e) {
  var t = [];
  if (e != null)
    for (var r in Object(e))
      t.push(r);
  return t;
}
var $s = hs, bs = z, _s = ve, ms = $s, Ts = Object.prototype, As = Ts.hasOwnProperty;
function js(e) {
  if (!bs(e))
    return ms(e);
  var t = _s(e), r = [];
  for (var a in e)
    a == "constructor" && (t || !As.call(e, a)) || r.push(a);
  return r;
}
var ws = js, Ss = at, Os = ws, Cs = it;
function Is(e) {
  return Cs(e) ? Ss(e, !0) : Os(e);
}
var de = Is, xs = Z, Ps = de;
function Es(e, t) {
  return e && xs(t, Ps(t), e);
}
var Ds = Es, V = { exports: {} };
V.exports;
(function(e, t) {
  var r = A, a = t && !t.nodeType && t, i = a && !0 && e && !e.nodeType && e, s = i && i.exports === a, n = s ? r.Buffer : void 0, o = n ? n.allocUnsafe : void 0;
  function u(p, b) {
    if (b)
      return p.slice();
    var $ = p.length, _ = o ? o($) : new p.constructor($);
    return p.copy(_), _;
  }
  e.exports = u;
})(V, V.exports);
var Ls = V.exports;
function Ms(e, t) {
  var r = -1, a = e.length;
  for (t || (t = Array(a)); ++r < a; )
    t[r] = e[r];
  return t;
}
var Bs = Ms;
function Fs(e, t) {
  for (var r = -1, a = e == null ? 0 : e.length, i = 0, s = []; ++r < a; ) {
    var n = e[r];
    t(n, r, e) && (s[i++] = n);
  }
  return s;
}
var Ns = Fs;
function zs() {
  return [];
}
var st = zs, Gs = Ns, Rs = st, Us = Object.prototype, Ks = Us.propertyIsEnumerable, Ie = Object.getOwnPropertySymbols, ks = Ie ? function(e) {
  return e == null ? [] : (e = Object(e), Gs(Ie(e), function(t) {
    return Ks.call(e, t);
  }));
} : Rs, ge = ks, Hs = Z, Vs = ge;
function Ws(e, t) {
  return Hs(e, Vs(e), t);
}
var qs = Ws;
function Ys(e, t) {
  for (var r = -1, a = t.length, i = e.length; ++r < a; )
    e[i + r] = t[r];
  return e;
}
var ot = Ys, Xs = nt, Js = Xs(Object.getPrototypeOf, Object), ct = Js, Zs = ot, Qs = ct, eo = ge, to = st, ro = Object.getOwnPropertySymbols, ao = ro ? function(e) {
  for (var t = []; e; )
    Zs(t, eo(e)), e = Qs(e);
  return t;
} : to, lt = ao, no = Z, io = lt;
function so(e, t) {
  return no(e, io(e), t);
}
var oo = so, co = ot, lo = le;
function uo(e, t, r) {
  var a = t(e);
  return lo(e) ? a : co(a, r(e));
}
var ut = uo, fo = ut, vo = ge, po = pe;
function go(e) {
  return fo(e, po, vo);
}
var yo = go, ho = ut, $o = lt, bo = de;
function _o(e) {
  return ho(e, bo, $o);
}
var mo = _o, To = S, Ao = A, jo = To(Ao, "DataView"), wo = jo, So = S, Oo = A, Co = So(Oo, "Promise"), Io = Co, xo = S, Po = A, Eo = xo(Po, "Set"), Do = Eo, Lo = S, Mo = A, Bo = Lo(Mo, "WeakMap"), Fo = Bo, te = wo, re = ce, ae = Io, ne = Do, ie = Fo, ft = Y, L = Je, xe = "[object Map]", No = "[object Object]", Pe = "[object Promise]", Ee = "[object Set]", De = "[object WeakMap]", Le = "[object DataView]", zo = L(te), Go = L(re), Ro = L(ae), Uo = L(ne), Ko = L(ie), w = ft;
(te && w(new te(new ArrayBuffer(1))) != Le || re && w(new re()) != xe || ae && w(ae.resolve()) != Pe || ne && w(new ne()) != Ee || ie && w(new ie()) != De) && (w = function(e) {
  var t = ft(e), r = t == No ? e.constructor : void 0, a = r ? L(r) : "";
  if (a)
    switch (a) {
      case zo:
        return Le;
      case Go:
        return xe;
      case Ro:
        return Pe;
      case Uo:
        return Ee;
      case Ko:
        return De;
    }
  return t;
});
var ye = w, ko = Object.prototype, Ho = ko.hasOwnProperty;
function Vo(e) {
  var t = e.length, r = new e.constructor(t);
  return t && typeof e[0] == "string" && Ho.call(e, "index") && (r.index = e.index, r.input = e.input), r;
}
var Wo = Vo, qo = A, Yo = qo.Uint8Array, Xo = Yo, Me = Xo;
function Jo(e) {
  var t = new e.constructor(e.byteLength);
  return new Me(t).set(new Me(e)), t;
}
var he = Jo, Zo = he;
function Qo(e, t) {
  var r = t ? Zo(e.buffer) : e.buffer;
  return new e.constructor(r, e.byteOffset, e.byteLength);
}
var ec = Qo, tc = /\w*$/;
function rc(e) {
  var t = new e.constructor(e.source, tc.exec(e));
  return t.lastIndex = e.lastIndex, t;
}
var ac = rc, Be = oe, Fe = Be ? Be.prototype : void 0, Ne = Fe ? Fe.valueOf : void 0;
function nc(e) {
  return Ne ? Object(Ne.call(e)) : {};
}
var ic = nc, sc = he;
function oc(e, t) {
  var r = t ? sc(e.buffer) : e.buffer;
  return new e.constructor(r, e.byteOffset, e.length);
}
var cc = oc, lc = he, uc = ec, fc = ac, vc = ic, pc = cc, dc = "[object Boolean]", gc = "[object Date]", yc = "[object Map]", hc = "[object Number]", $c = "[object RegExp]", bc = "[object Set]", _c = "[object String]", mc = "[object Symbol]", Tc = "[object ArrayBuffer]", Ac = "[object DataView]", jc = "[object Float32Array]", wc = "[object Float64Array]", Sc = "[object Int8Array]", Oc = "[object Int16Array]", Cc = "[object Int32Array]", Ic = "[object Uint8Array]", xc = "[object Uint8ClampedArray]", Pc = "[object Uint16Array]", Ec = "[object Uint32Array]";
function Dc(e, t, r) {
  var a = e.constructor;
  switch (t) {
    case Tc:
      return lc(e);
    case dc:
    case gc:
      return new a(+e);
    case Ac:
      return uc(e, r);
    case jc:
    case wc:
    case Sc:
    case Oc:
    case Cc:
    case Ic:
    case xc:
    case Pc:
    case Ec:
      return pc(e, r);
    case yc:
      return new a();
    case hc:
    case _c:
      return new a(e);
    case $c:
      return fc(e);
    case bc:
      return new a();
    case mc:
      return vc(e);
  }
}
var Lc = Dc, Mc = z, ze = Object.create, Bc = /* @__PURE__ */ function() {
  function e() {
  }
  return function(t) {
    if (!Mc(t))
      return {};
    if (ze)
      return ze(t);
    e.prototype = t;
    var r = new e();
    return e.prototype = void 0, r;
  };
}(), Fc = Bc, Nc = Fc, zc = ct, Gc = ve;
function Rc(e) {
  return typeof e.constructor == "function" && !Gc(e) ? Nc(zc(e)) : {};
}
var Uc = Rc, Kc = ye, kc = G, Hc = "[object Map]";
function Vc(e) {
  return kc(e) && Kc(e) == Hc;
}
var Wc = Vc, qc = Wc, Yc = ue, Ge = fe, Re = Ge && Ge.isMap, Xc = Re ? Yc(Re) : qc, Jc = Xc, Zc = ye, Qc = G, el = "[object Set]";
function tl(e) {
  return Qc(e) && Zc(e) == el;
}
var rl = tl, al = rl, nl = ue, Ue = fe, Ke = Ue && Ue.isSet, il = Ke ? nl(Ke) : al, sl = il, ol = Tn, cl = jn, ll = Qe, ul = ys, fl = Ds, vl = Ls, pl = Bs, dl = qs, gl = oo, yl = yo, hl = mo, $l = ye, bl = Wo, _l = Lc, ml = Uc, Tl = le, Al = tt, jl = Jc, wl = z, Sl = sl, Ol = pe, Cl = de, Il = 1, xl = 2, Pl = 4, vt = "[object Arguments]", El = "[object Array]", Dl = "[object Boolean]", Ll = "[object Date]", Ml = "[object Error]", pt = "[object Function]", Bl = "[object GeneratorFunction]", Fl = "[object Map]", Nl = "[object Number]", dt = "[object Object]", zl = "[object RegExp]", Gl = "[object Set]", Rl = "[object String]", Ul = "[object Symbol]", Kl = "[object WeakMap]", kl = "[object ArrayBuffer]", Hl = "[object DataView]", Vl = "[object Float32Array]", Wl = "[object Float64Array]", ql = "[object Int8Array]", Yl = "[object Int16Array]", Xl = "[object Int32Array]", Jl = "[object Uint8Array]", Zl = "[object Uint8ClampedArray]", Ql = "[object Uint16Array]", eu = "[object Uint32Array]", g = {};
g[vt] = g[El] = g[kl] = g[Hl] = g[Dl] = g[Ll] = g[Vl] = g[Wl] = g[ql] = g[Yl] = g[Xl] = g[Fl] = g[Nl] = g[dt] = g[zl] = g[Gl] = g[Rl] = g[Ul] = g[Jl] = g[Zl] = g[Ql] = g[eu] = !0;
g[Ml] = g[pt] = g[Kl] = !1;
function K(e, t, r, a, i, s) {
  var n, o = t & Il, u = t & xl, p = t & Pl;
  if (r && (n = i ? r(e, a, i, s) : r(e)), n !== void 0)
    return n;
  if (!wl(e))
    return e;
  var b = Tl(e);
  if (b) {
    if (n = bl(e), !o)
      return pl(e, n);
  } else {
    var $ = $l(e), _ = $ == pt || $ == Bl;
    if (Al(e))
      return vl(e, o);
    if ($ == dt || $ == vt || _ && !i) {
      if (n = u || _ ? {} : ml(e), !o)
        return u ? gl(e, fl(n, e)) : dl(e, ul(n, e));
    } else {
      if (!g[$])
        return i ? e : {};
      n = _l(e, $, o);
    }
  }
  s || (s = new ol());
  var R = s.get(e);
  if (R)
    return R;
  s.set(e, n), Sl(e) ? e.forEach(function(f) {
    n.add(K(f, t, r, f, e, s));
  }) : jl(e) && e.forEach(function(f, d) {
    n.set(d, K(f, t, r, d, e, s));
  });
  var M = p ? u ? hl : yl : u ? Cl : Ol, c = b ? void 0 : M(e);
  return cl(c || e, function(f, d) {
    c && (d = f, f = e[d]), ll(n, d, K(f, t, r, d, e, s));
  }), n;
}
var tu = K, ru = tu, au = 1, nu = 4;
function iu(e) {
  return ru(e, au | nu);
}
var su = iu;
const ou = /* @__PURE__ */ Ct(su);
function cu(e, t, r = 33) {
  const a = r / 100, i = e.getBoundingClientRect(), s = i.width * a, n = i.height * a, o = {
    x: t.clientX - i.left,
    y: t.clientY - i.top
  }, u = [o.y - n, i.width - s - o.x, i.height - n - o.y, o.x - s];
  let p = 0, b = -1;
  return u.forEach(($, _) => {
    $ < p && (p = $, b = _);
  }), b;
}
const yu = /* @__PURE__ */ se({
  name: "Layout",
  props: {
    edit: {
      type: Boolean,
      default: !0
    },
    resize: {
      type: Boolean,
      default: !0
    },
    splits: {
      type: [String, Number, Object],
      default: () => ({})
    }
  },
  setup(e, {
    emit: t,
    slots: r
  }) {
    const a = C(null), i = C(null), s = C(null), n = C({
      nodes: p(e.splits)
    }), o = C(null);
    _t(() => e.splits, () => {
      n.value.nodes = p(e.splits);
    });
    const u = () => {
      if (!a.value) return;
      const c = a.value.querySelectorAll("[target-view]");
      Array.from(c).forEach((f) => {
        a.value.querySelector(`[src-view=${f.getAttribute("target-view")}]`).appendChild(f.children[0]);
      });
    };
    function p() {
      const c = [], f = j.from(c), d = (l) => {
        if (l instanceof Object) {
          let v = f.push({
            type: "split",
            dir: l.dir,
            split: l.split
          });
          return d(l.first).parent = v, d(l.second).parent = v, v;
        }
        return f.push({
          type: "view",
          viewId: l
        });
      };
      return d(e.splits), c;
    }
    const b = (c) => {
      if (c.button !== 0) return;
      const f = c.target.hasAttribute("node-id"), d = c.target.hasAttribute("pane-drag");
      if (!f && !d) return;
      let l = c.target;
      if (!f) {
        let m = l;
        for (; m && m.matches && !m.hasAttribute("node-id"); m = m.parentNode)
          ;
        if (!m || !m.matches)
          return;
        l = m;
      }
      const v = parseInt(l.getAttribute("node-id"), 10);
      if (v === void 0)
        return;
      const h = n.value.nodes.find((m) => m.id === v);
      if (h === void 0)
        return;
      c.preventDefault(), c.stopPropagation();
      const B = a.value.getBoundingClientRect(), O = c.target.getBoundingClientRect();
      o.value = {
        node: h,
        offset: {
          x: c.clientX - O.left,
          y: c.clientY - O.top
        }
      }, n.value.savedNodes = ou(n.value.nodes), j.from(n.value.nodes).removeChild(h), s.value.style.top = `${O.y - B.top}px`, s.value.style.left = `${O.x - B.left}px`, s.value.style.width = `${O.width}px`, s.value.style.height = `${O.height}px`, document.addEventListener("mousemove", $), document.addEventListener("mouseup", _);
    }, $ = (c) => {
      if (c.button !== 0) return;
      c.preventDefault(), c.stopPropagation(), o.value.over = null;
      const f = a.value.getBoundingClientRect(), d = {
        x: c.clientX - f.left,
        y: c.clientY - f.top
      };
      s.value.style.left = `${d.x - o.value.offset.x}px`, s.value.style.top = `${d.y - o.value.offset.y}px`, s.value.style.pointerEvents = "none";
      let l = document.elementFromPoint(c.clientX, c.clientY);
      s.value.style.pointerEvents = null;
      let v = l;
      for (; v && v.matches && !v.matches(".view"); v = v.parentNode)
        ;
      if (!v || !v.matches) {
        M(-1);
        return;
      }
      const h = cu(v, c);
      h !== -1 && (o.value.over = {
        viewDom: v,
        attach: h
      }), M(h, v);
    }, _ = (c) => {
      if (c.button !== 0) return;
      if (document.removeEventListener("mousemove", $), document.removeEventListener("mouseup", _), s.value.style.right = s.value.style.bottom = s.value.style.left = s.value.style.width = s.value.style.height = "0", M(-1), o.value.over == null) {
        o.value = null, n.value.nodes = n.value.savedNodes;
        return;
      }
      const {
        viewDom: f,
        attach: d
      } = o.value.over, l = parseInt(f.getAttribute("node-id"), 10), v = j.from(n.value.nodes), h = v.findById(l);
      v.attachChild(h, d, o.value.node), o.value = null;
    }, R = (c, f, d) => {
      f.props["node-id"], n.value.split = d, t("onSplitResize", c, f, d);
    };
    function M(c, f, d = 33) {
      if (c === -1) {
        i.value.style.opacity = 0;
        return;
      }
      if (!f)
        return -1;
      const l = d / 100, v = f.getBoundingClientRect(), h = {
        left: v.left,
        top: v.top,
        width: v.width,
        height: v.height
      };
      c === 1 ? h.left += h.width - h.width * l : c === 2 && (h.top += h.height - h.height * l), c % 2 === 0 ? h.height *= l : c % 2 === 1 && (h.width *= l), i.value.style.opacity = 1, i.value.style.position = "fixed";
      for (const B in h)
        i.value.style[B] = `${h[B]}px`;
    }
    return mt(() => {
      t("layout:begin"), u(), t("layout:complete");
    }), () => {
      const c = (l) => {
        switch (l.type) {
          case "split": {
            const v = j.from(n.value.nodes).childrenOf(l).map((h) => c(h));
            return T(Ot, {
              key: l.id,
              "node-id": l.id,
              resizeable: e.resize,
              dir: l.dir,
              split: l.split,
              onSplitResize: R
            }, v);
          }
          default:
            return e.edit ? T("div", {
              class: "view",
              "node-id": l.id,
              "target-view": `view-${l.viewId}`,
              onMousedown: b
            }) : T("div", {
              class: "view",
              "node-id": l.id,
              "target-view": `view-${l.viewId}`
            });
        }
      }, f = c(n.value.nodes[0]), d = ["layout-container", e.edit ? "edit" : ""];
      return T("div", {
        class: d.join(" "),
        ref: a
      }, [T("div", {
        class: `views ${o.value ? "dragging" : ""}`,
        ref: "views"
      }, [f]), T("div", {
        class: "preview",
        ref: i
      }), T("div", {
        class: `drag ${o.value ? "dragging" : ""}`,
        ref: s,
        style: {
          transformOrigin: o.value ? `${o.value.offset.x}px ${o.value.offset.y}px` : ""
        }
      }, [o.value && T("div", {
        class: "view",
        "target-view": `view-${o.value.node.viewId}`
      })]), T("div", {
        style: {
          display: "none"
        }
      }, r.default.filter((l) => l.tag !== void 0).map((l, v) => T("div", {
        key: l.key || v,
        "src-view": `view-${l.key || v}`
      }, [l])))]);
    };
  }
}), lu = se({
  name: "Pane",
  props: {
    title: {
      type: String,
      default: ""
    }
  },
  setup(e) {
    const { title: t } = Tt(e);
    return {
      title: t
    };
  }
}), uu = { class: "pane" }, fu = { class: "header" }, vu = { class: "content" };
function pu(e, t, r, a, i, s) {
  return ke(), He("div", uu, [
    N("div", fu, At(e.title), 1),
    N("div", vu, [
      ee(e.$slots, "default", {}, void 0, !0)
    ])
  ]);
}
const hu = /* @__PURE__ */ Ve(lu, [["render", pu], ["__scopeId", "data-v-20dc7a22"]]);
export {
  yu as Layout,
  hu as Pane,
  Ot as Split,
  j as Tree
};
