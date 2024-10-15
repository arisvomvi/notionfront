var mr = {};
/**
* @vue/shared v3.4.27
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function Re(e, t) {
  const n = new Set(e.split(","));
  return (o) => n.has(o);
}
const U = mr.NODE_ENV !== "production" ? Object.freeze({}) : {}, gt = mr.NODE_ENV !== "production" ? Object.freeze([]) : [], J = () => {
}, $i = () => !1, Ft = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // uppercase letter
(e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), rn = (e) => e.startsWith("onUpdate:"), G = Object.assign, Xn = (e, t) => {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}, Ii = Object.prototype.hasOwnProperty, M = (e, t) => Ii.call(e, t), S = Array.isArray, ot = (e) => an(e) === "[object Map]", _r = (e) => an(e) === "[object Set]", T = (e) => typeof e == "function", Y = (e) => typeof e == "string", dt = (e) => typeof e == "symbol", B = (e) => e !== null && typeof e == "object", Zn = (e) => (B(e) || T(e)) && T(e.then) && T(e.catch), gr = Object.prototype.toString, an = (e) => gr.call(e), Qn = (e) => an(e).slice(8, -1), Er = (e) => an(e) === "[object Object]", eo = (e) => Y(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, Tt = /* @__PURE__ */ Re(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), Pi = /* @__PURE__ */ Re(
  "bind,cloak,else-if,else,for,html,if,model,on,once,pre,show,slot,text,memo"
), dn = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return (n) => t[n] || (t[n] = e(n));
}, Ai = /-(\w)/g, De = dn((e) => e.replace(Ai, (t, n) => n ? n.toUpperCase() : "")), Mi = /\B([A-Z])/g, Ye = dn(
  (e) => e.replace(Mi, "-$1").toLowerCase()
), ut = dn((e) => e.charAt(0).toUpperCase() + e.slice(1)), nt = dn((e) => e ? `on${ut(e)}` : ""), ft = (e, t) => !Object.is(e, t), Vt = (e, t) => {
  for (let n = 0; n < e.length; n++)
    e[n](t);
}, Nr = (e, t, n, o = !1) => {
  Object.defineProperty(e, t, {
    configurable: !0,
    enumerable: !1,
    writable: o,
    value: n
  });
}, Ri = (e) => {
  const t = parseFloat(e);
  return isNaN(t) ? e : t;
};
let Io;
const to = () => Io || (Io = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function no(e) {
  if (S(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
      const o = e[n], r = Y(o) ? Hi(o) : no(o);
      if (r)
        for (const i in r)
          t[i] = r[i];
    }
    return t;
  } else if (Y(e) || B(e))
    return e;
}
const Fi = /;(?![^(]*\))/g, ji = /:([^]+)/, Li = /\/\*[^]*?\*\//g;
function Hi(e) {
  const t = {};
  return e.replace(Li, "").split(Fi).forEach((n) => {
    if (n) {
      const o = n.split(ji);
      o.length > 1 && (t[o[0].trim()] = o[1].trim());
    }
  }), t;
}
function pn(e) {
  let t = "";
  if (Y(e))
    t = e;
  else if (S(e))
    for (let n = 0; n < e.length; n++) {
      const o = pn(e[n]);
      o && (t += o + " ");
    }
  else if (B(e))
    for (const n in e)
      e[n] && (t += n + " ");
  return t.trim();
}
const Ui = "html,body,base,head,link,meta,style,title,address,article,aside,footer,header,hgroup,h1,h2,h3,h4,h5,h6,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,summary,template,blockquote,iframe,tfoot", Bi = "svg,animate,animateMotion,animateTransform,circle,clipPath,color-profile,defs,desc,discard,ellipse,feBlend,feColorMatrix,feComponentTransfer,feComposite,feConvolveMatrix,feDiffuseLighting,feDisplacementMap,feDistantLight,feDropShadow,feFlood,feFuncA,feFuncB,feFuncG,feFuncR,feGaussianBlur,feImage,feMerge,feMergeNode,feMorphology,feOffset,fePointLight,feSpecularLighting,feSpotLight,feTile,feTurbulence,filter,foreignObject,g,hatch,hatchpath,image,line,linearGradient,marker,mask,mesh,meshgradient,meshpatch,meshrow,metadata,mpath,path,pattern,polygon,polyline,radialGradient,rect,set,solidcolor,stop,switch,symbol,text,textPath,title,tspan,unknown,use,view", Ki = "annotation,annotation-xml,maction,maligngroup,malignmark,math,menclose,merror,mfenced,mfrac,mfraction,mglyph,mi,mlabeledtr,mlongdiv,mmultiscripts,mn,mo,mover,mpadded,mphantom,mprescripts,mroot,mrow,ms,mscarries,mscarry,msgroup,msline,mspace,msqrt,msrow,mstack,mstyle,msub,msubsup,msup,mtable,mtd,mtext,mtr,munder,munderover,none,semantics", ki = /* @__PURE__ */ Re(Ui), Wi = /* @__PURE__ */ Re(Bi), Gi = /* @__PURE__ */ Re(Ki), qi = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", zi = /* @__PURE__ */ Re(qi);
function br(e) {
  return !!e || e === "";
}
const yr = (e) => Y(e) ? e : e == null ? "" : S(e) || B(e) && (e.toString === gr || !T(e.toString)) ? JSON.stringify(e, Or, 2) : String(e), Or = (e, t) => t && t.__v_isRef ? Or(e, t.value) : ot(t) ? {
  [`Map(${t.size})`]: [...t.entries()].reduce(
    (n, [o, r], i) => (n[Vn(o, i) + " =>"] = r, n),
    {}
  )
} : _r(t) ? {
  [`Set(${t.size})`]: [...t.values()].map((n) => Vn(n))
} : dt(t) ? Vn(t) : B(t) && !S(t) && !Er(t) ? String(t) : t, Vn = (e, t = "") => {
  var n;
  return (
    // Symbol.description in es2019+ so we need to cast here to pass
    // the lib: es2016 check
    dt(e) ? `Symbol(${(n = e.description) != null ? n : t})` : e
  );
};
var Q = {};
function Xe(e, ...t) {
  console.warn(`[Vue warn] ${e}`, ...t);
}
let he;
class Ji {
  constructor(t = !1) {
    this.detached = t, this._active = !0, this.effects = [], this.cleanups = [], this.parent = he, !t && he && (this.index = (he.scopes || (he.scopes = [])).push(
      this
    ) - 1);
  }
  get active() {
    return this._active;
  }
  run(t) {
    if (this._active) {
      const n = he;
      try {
        return he = this, t();
      } finally {
        he = n;
      }
    } else Q.NODE_ENV !== "production" && Xe("cannot run an inactive effect scope.");
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  on() {
    he = this;
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  off() {
    he = this.parent;
  }
  stop(t) {
    if (this._active) {
      let n, o;
      for (n = 0, o = this.effects.length; n < o; n++)
        this.effects[n].stop();
      for (n = 0, o = this.cleanups.length; n < o; n++)
        this.cleanups[n]();
      if (this.scopes)
        for (n = 0, o = this.scopes.length; n < o; n++)
          this.scopes[n].stop(!0);
      if (!this.detached && this.parent && !t) {
        const r = this.parent.scopes.pop();
        r && r !== this && (this.parent.scopes[this.index] = r, r.index = this.index);
      }
      this.parent = void 0, this._active = !1;
    }
  }
}
function Yi(e, t = he) {
  t && t.active && t.effects.push(e);
}
function Xi() {
  return he;
}
let rt;
class oo {
  constructor(t, n, o, r) {
    this.fn = t, this.trigger = n, this.scheduler = o, this.active = !0, this.deps = [], this._dirtyLevel = 4, this._trackId = 0, this._runnings = 0, this._shouldSchedule = !1, this._depsLength = 0, Yi(this, r);
  }
  get dirty() {
    if (this._dirtyLevel === 2 || this._dirtyLevel === 3) {
      this._dirtyLevel = 1, Fe();
      for (let t = 0; t < this._depsLength; t++) {
        const n = this.deps[t];
        if (n.computed && (Zi(n.computed), this._dirtyLevel >= 4))
          break;
      }
      this._dirtyLevel === 1 && (this._dirtyLevel = 0), je();
    }
    return this._dirtyLevel >= 4;
  }
  set dirty(t) {
    this._dirtyLevel = t ? 4 : 0;
  }
  run() {
    if (this._dirtyLevel = 0, !this.active)
      return this.fn();
    let t = ze, n = rt;
    try {
      return ze = !0, rt = this, this._runnings++, Po(this), this.fn();
    } finally {
      Ao(this), this._runnings--, rt = n, ze = t;
    }
  }
  stop() {
    this.active && (Po(this), Ao(this), this.onStop && this.onStop(), this.active = !1);
  }
}
function Zi(e) {
  return e.value;
}
function Po(e) {
  e._trackId++, e._depsLength = 0;
}
function Ao(e) {
  if (e.deps.length > e._depsLength) {
    for (let t = e._depsLength; t < e.deps.length; t++)
      vr(e.deps[t], e);
    e.deps.length = e._depsLength;
  }
}
function vr(e, t) {
  const n = e.get(t);
  n !== void 0 && t._trackId !== n && (e.delete(t), e.size === 0 && e.cleanup());
}
let ze = !0, An = 0;
const wr = [];
function Fe() {
  wr.push(ze), ze = !1;
}
function je() {
  const e = wr.pop();
  ze = e === void 0 ? !0 : e;
}
function ro() {
  An++;
}
function io() {
  for (An--; !An && Mn.length; )
    Mn.shift()();
}
function Vr(e, t, n) {
  var o;
  if (t.get(e) !== e._trackId) {
    t.set(e, e._trackId);
    const r = e.deps[e._depsLength];
    r !== t ? (r && vr(r, e), e.deps[e._depsLength++] = t) : e._depsLength++, Q.NODE_ENV !== "production" && ((o = e.onTrack) == null || o.call(e, G({ effect: e }, n)));
  }
}
const Mn = [];
function xr(e, t, n) {
  var o;
  ro();
  for (const r of e.keys()) {
    let i;
    r._dirtyLevel < t && (i ?? (i = e.get(r) === r._trackId)) && (r._shouldSchedule || (r._shouldSchedule = r._dirtyLevel === 0), r._dirtyLevel = t), r._shouldSchedule && (i ?? (i = e.get(r) === r._trackId)) && (Q.NODE_ENV !== "production" && ((o = r.onTrigger) == null || o.call(r, G({ effect: r }, n))), r.trigger(), (!r._runnings || r.allowRecurse) && r._dirtyLevel !== 2 && (r._shouldSchedule = !1, r.scheduler && Mn.push(r.scheduler)));
  }
  io();
}
const Dr = (e, t) => {
  const n = /* @__PURE__ */ new Map();
  return n.cleanup = e, n.computed = t, n;
}, Rn = /* @__PURE__ */ new WeakMap(), it = Symbol(Q.NODE_ENV !== "production" ? "iterate" : ""), Fn = Symbol(Q.NODE_ENV !== "production" ? "Map key iterate" : "");
function te(e, t, n) {
  if (ze && rt) {
    let o = Rn.get(e);
    o || Rn.set(e, o = /* @__PURE__ */ new Map());
    let r = o.get(n);
    r || o.set(n, r = Dr(() => o.delete(n))), Vr(
      rt,
      r,
      Q.NODE_ENV !== "production" ? {
        target: e,
        type: t,
        key: n
      } : void 0
    );
  }
}
function xe(e, t, n, o, r, i) {
  const l = Rn.get(e);
  if (!l)
    return;
  let c = [];
  if (t === "clear")
    c = [...l.values()];
  else if (n === "length" && S(e)) {
    const f = Number(o);
    l.forEach((p, m) => {
      (m === "length" || !dt(m) && m >= f) && c.push(p);
    });
  } else
    switch (n !== void 0 && c.push(l.get(n)), t) {
      case "add":
        S(e) ? eo(n) && c.push(l.get("length")) : (c.push(l.get(it)), ot(e) && c.push(l.get(Fn)));
        break;
      case "delete":
        S(e) || (c.push(l.get(it)), ot(e) && c.push(l.get(Fn)));
        break;
      case "set":
        ot(e) && c.push(l.get(it));
        break;
    }
  ro();
  for (const f of c)
    f && xr(
      f,
      4,
      Q.NODE_ENV !== "production" ? {
        target: e,
        type: t,
        key: n,
        newValue: o,
        oldValue: r,
        oldTarget: i
      } : void 0
    );
  io();
}
const Qi = /* @__PURE__ */ Re("__proto__,__v_isRef,__isVue"), Cr = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(dt)
), Mo = /* @__PURE__ */ es();
function es() {
  const e = {};
  return ["includes", "indexOf", "lastIndexOf"].forEach((t) => {
    e[t] = function(...n) {
      const o = P(this);
      for (let i = 0, l = this.length; i < l; i++)
        te(o, "get", i + "");
      const r = o[t](...n);
      return r === -1 || r === !1 ? o[t](...n.map(P)) : r;
    };
  }), ["push", "pop", "shift", "unshift", "splice"].forEach((t) => {
    e[t] = function(...n) {
      Fe(), ro();
      const o = P(this)[t].apply(this, n);
      return io(), je(), o;
    };
  }), e;
}
function ts(e) {
  dt(e) || (e = String(e));
  const t = P(this);
  return te(t, "has", e), t.hasOwnProperty(e);
}
class Sr {
  constructor(t = !1, n = !1) {
    this._isReadonly = t, this._isShallow = n;
  }
  get(t, n, o) {
    const r = this._isReadonly, i = this._isShallow;
    if (n === "__v_isReactive")
      return !r;
    if (n === "__v_isReadonly")
      return r;
    if (n === "__v_isShallow")
      return i;
    if (n === "__v_raw")
      return o === (r ? i ? Rr : Mr : i ? Ar : Pr).get(t) || // receiver is not the reactive proxy, but has the same prototype
      // this means the reciever is a user proxy of the reactive proxy
      Object.getPrototypeOf(t) === Object.getPrototypeOf(o) ? t : void 0;
    const l = S(t);
    if (!r) {
      if (l && M(Mo, n))
        return Reflect.get(Mo, n, o);
      if (n === "hasOwnProperty")
        return ts;
    }
    const c = Reflect.get(t, n, o);
    return (dt(n) ? Cr.has(n) : Qi(n)) || (r || te(t, "get", n), i) ? c : oe(c) ? l && eo(n) ? c : c.value : B(c) ? r ? Fr(c) : lo(c) : c;
  }
}
class Tr extends Sr {
  constructor(t = !1) {
    super(!1, t);
  }
  set(t, n, o, r) {
    let i = t[n];
    if (!this._isShallow) {
      const f = yt(i);
      if (!Nt(o) && !yt(o) && (i = P(i), o = P(o)), !S(t) && oe(i) && !oe(o))
        return f ? !1 : (i.value = o, !0);
    }
    const l = S(t) && eo(n) ? Number(n) < t.length : M(t, n), c = Reflect.set(t, n, o, r);
    return t === P(r) && (l ? ft(o, i) && xe(t, "set", n, o, i) : xe(t, "add", n, o)), c;
  }
  deleteProperty(t, n) {
    const o = M(t, n), r = t[n], i = Reflect.deleteProperty(t, n);
    return i && o && xe(t, "delete", n, void 0, r), i;
  }
  has(t, n) {
    const o = Reflect.has(t, n);
    return (!dt(n) || !Cr.has(n)) && te(t, "has", n), o;
  }
  ownKeys(t) {
    return te(
      t,
      "iterate",
      S(t) ? "length" : it
    ), Reflect.ownKeys(t);
  }
}
class $r extends Sr {
  constructor(t = !1) {
    super(!0, t);
  }
  set(t, n) {
    return Q.NODE_ENV !== "production" && Xe(
      `Set operation on key "${String(n)}" failed: target is readonly.`,
      t
    ), !0;
  }
  deleteProperty(t, n) {
    return Q.NODE_ENV !== "production" && Xe(
      `Delete operation on key "${String(n)}" failed: target is readonly.`,
      t
    ), !0;
  }
}
const ns = /* @__PURE__ */ new Tr(), os = /* @__PURE__ */ new $r(), rs = /* @__PURE__ */ new Tr(
  !0
), is = /* @__PURE__ */ new $r(!0), so = (e) => e, hn = (e) => Reflect.getPrototypeOf(e);
function kt(e, t, n = !1, o = !1) {
  e = e.__v_raw;
  const r = P(e), i = P(t);
  n || (ft(t, i) && te(r, "get", t), te(r, "get", i));
  const { has: l } = hn(r), c = o ? so : n ? uo : co;
  if (l.call(r, t))
    return c(e.get(t));
  if (l.call(r, i))
    return c(e.get(i));
  e !== r && e.get(t);
}
function Wt(e, t = !1) {
  const n = this.__v_raw, o = P(n), r = P(e);
  return t || (ft(e, r) && te(o, "has", e), te(o, "has", r)), e === r ? n.has(e) : n.has(e) || n.has(r);
}
function Gt(e, t = !1) {
  return e = e.__v_raw, !t && te(P(e), "iterate", it), Reflect.get(e, "size", e);
}
function Ro(e) {
  e = P(e);
  const t = P(this);
  return hn(t).has.call(t, e) || (t.add(e), xe(t, "add", e, e)), this;
}
function Fo(e, t) {
  t = P(t);
  const n = P(this), { has: o, get: r } = hn(n);
  let i = o.call(n, e);
  i ? Q.NODE_ENV !== "production" && Ir(n, o, e) : (e = P(e), i = o.call(n, e));
  const l = r.call(n, e);
  return n.set(e, t), i ? ft(t, l) && xe(n, "set", e, t, l) : xe(n, "add", e, t), this;
}
function jo(e) {
  const t = P(this), { has: n, get: o } = hn(t);
  let r = n.call(t, e);
  r ? Q.NODE_ENV !== "production" && Ir(t, n, e) : (e = P(e), r = n.call(t, e));
  const i = o ? o.call(t, e) : void 0, l = t.delete(e);
  return r && xe(t, "delete", e, void 0, i), l;
}
function Lo() {
  const e = P(this), t = e.size !== 0, n = Q.NODE_ENV !== "production" ? ot(e) ? new Map(e) : new Set(e) : void 0, o = e.clear();
  return t && xe(e, "clear", void 0, void 0, n), o;
}
function qt(e, t) {
  return function(o, r) {
    const i = this, l = i.__v_raw, c = P(l), f = t ? so : e ? uo : co;
    return !e && te(c, "iterate", it), l.forEach((p, m) => o.call(r, f(p), f(m), i));
  };
}
function zt(e, t, n) {
  return function(...o) {
    const r = this.__v_raw, i = P(r), l = ot(i), c = e === "entries" || e === Symbol.iterator && l, f = e === "keys" && l, p = r[e](...o), m = n ? so : t ? uo : co;
    return !t && te(
      i,
      "iterate",
      f ? Fn : it
    ), {
      // iterator protocol
      next() {
        const { value: d, done: b } = p.next();
        return b ? { value: d, done: b } : {
          value: c ? [m(d[0]), m(d[1])] : m(d),
          done: b
        };
      },
      // iterable protocol
      [Symbol.iterator]() {
        return this;
      }
    };
  };
}
function Ke(e) {
  return function(...t) {
    if (Q.NODE_ENV !== "production") {
      const n = t[0] ? `on key "${t[0]}" ` : "";
      Xe(
        `${ut(e)} operation ${n}failed: target is readonly.`,
        P(this)
      );
    }
    return e === "delete" ? !1 : e === "clear" ? void 0 : this;
  };
}
function ss() {
  const e = {
    get(i) {
      return kt(this, i);
    },
    get size() {
      return Gt(this);
    },
    has: Wt,
    add: Ro,
    set: Fo,
    delete: jo,
    clear: Lo,
    forEach: qt(!1, !1)
  }, t = {
    get(i) {
      return kt(this, i, !1, !0);
    },
    get size() {
      return Gt(this);
    },
    has: Wt,
    add: Ro,
    set: Fo,
    delete: jo,
    clear: Lo,
    forEach: qt(!1, !0)
  }, n = {
    get(i) {
      return kt(this, i, !0);
    },
    get size() {
      return Gt(this, !0);
    },
    has(i) {
      return Wt.call(this, i, !0);
    },
    add: Ke("add"),
    set: Ke("set"),
    delete: Ke("delete"),
    clear: Ke("clear"),
    forEach: qt(!0, !1)
  }, o = {
    get(i) {
      return kt(this, i, !0, !0);
    },
    get size() {
      return Gt(this, !0);
    },
    has(i) {
      return Wt.call(this, i, !0);
    },
    add: Ke("add"),
    set: Ke("set"),
    delete: Ke("delete"),
    clear: Ke("clear"),
    forEach: qt(!0, !0)
  };
  return [
    "keys",
    "values",
    "entries",
    Symbol.iterator
  ].forEach((i) => {
    e[i] = zt(i, !1, !1), n[i] = zt(i, !0, !1), t[i] = zt(i, !1, !0), o[i] = zt(
      i,
      !0,
      !0
    );
  }), [
    e,
    n,
    t,
    o
  ];
}
const [
  ls,
  cs,
  us,
  fs
] = /* @__PURE__ */ ss();
function mn(e, t) {
  const n = t ? e ? fs : us : e ? cs : ls;
  return (o, r, i) => r === "__v_isReactive" ? !e : r === "__v_isReadonly" ? e : r === "__v_raw" ? o : Reflect.get(
    M(n, r) && r in o ? n : o,
    r,
    i
  );
}
const as = {
  get: /* @__PURE__ */ mn(!1, !1)
}, ds = {
  get: /* @__PURE__ */ mn(!1, !0)
}, ps = {
  get: /* @__PURE__ */ mn(!0, !1)
}, hs = {
  get: /* @__PURE__ */ mn(!0, !0)
};
function Ir(e, t, n) {
  const o = P(n);
  if (o !== n && t.call(e, o)) {
    const r = Qn(e);
    Xe(
      `Reactive ${r} contains both the raw and reactive versions of the same object${r === "Map" ? " as keys" : ""}, which can lead to inconsistencies. Avoid differentiating between the raw and reactive versions of an object and only use the reactive version if possible.`
    );
  }
}
const Pr = /* @__PURE__ */ new WeakMap(), Ar = /* @__PURE__ */ new WeakMap(), Mr = /* @__PURE__ */ new WeakMap(), Rr = /* @__PURE__ */ new WeakMap();
function ms(e) {
  switch (e) {
    case "Object":
    case "Array":
      return 1;
    case "Map":
    case "Set":
    case "WeakMap":
    case "WeakSet":
      return 2;
    default:
      return 0;
  }
}
function _s(e) {
  return e.__v_skip || !Object.isExtensible(e) ? 0 : ms(Qn(e));
}
function lo(e) {
  return yt(e) ? e : _n(
    e,
    !1,
    ns,
    as,
    Pr
  );
}
function gs(e) {
  return _n(
    e,
    !1,
    rs,
    ds,
    Ar
  );
}
function Fr(e) {
  return _n(
    e,
    !0,
    os,
    ps,
    Mr
  );
}
function Ve(e) {
  return _n(
    e,
    !0,
    is,
    hs,
    Rr
  );
}
function _n(e, t, n, o, r) {
  if (!B(e))
    return Q.NODE_ENV !== "production" && Xe(`value cannot be made reactive: ${String(e)}`), e;
  if (e.__v_raw && !(t && e.__v_isReactive))
    return e;
  const i = r.get(e);
  if (i)
    return i;
  const l = _s(e);
  if (l === 0)
    return e;
  const c = new Proxy(
    e,
    l === 2 ? o : n
  );
  return r.set(e, c), c;
}
function Et(e) {
  return yt(e) ? Et(e.__v_raw) : !!(e && e.__v_isReactive);
}
function yt(e) {
  return !!(e && e.__v_isReadonly);
}
function Nt(e) {
  return !!(e && e.__v_isShallow);
}
function jn(e) {
  return e ? !!e.__v_raw : !1;
}
function P(e) {
  const t = e && e.__v_raw;
  return t ? P(t) : e;
}
function Es(e) {
  return Object.isExtensible(e) && Nr(e, "__v_skip", !0), e;
}
const co = (e) => B(e) ? lo(e) : e, uo = (e) => B(e) ? Fr(e) : e, Ns = "Computed is still dirty after getter evaluation, likely because a computed is mutating its own dependency in its getter. State mutations in computed getters should be avoided.  Check the docs for more details: https://vuejs.org/guide/essentials/computed.html#getters-should-be-side-effect-free";
class jr {
  constructor(t, n, o, r) {
    this.getter = t, this._setter = n, this.dep = void 0, this.__v_isRef = !0, this.__v_isReadonly = !1, this.effect = new oo(
      () => t(this._value),
      () => xn(
        this,
        this.effect._dirtyLevel === 2 ? 2 : 3
      )
    ), this.effect.computed = this, this.effect.active = this._cacheable = !r, this.__v_isReadonly = o;
  }
  get value() {
    const t = P(this);
    return (!t._cacheable || t.effect.dirty) && ft(t._value, t._value = t.effect.run()) && xn(t, 4), ys(t), t.effect._dirtyLevel >= 2 && (Q.NODE_ENV !== "production" && this._warnRecursive && Xe(Ns, `

getter: `, this.getter), xn(t, 2)), t._value;
  }
  set value(t) {
    this._setter(t);
  }
  // #region polyfill _dirty for backward compatibility third party code for Vue <= 3.3.x
  get _dirty() {
    return this.effect.dirty;
  }
  set _dirty(t) {
    this.effect.dirty = t;
  }
  // #endregion
}
function bs(e, t, n = !1) {
  let o, r;
  const i = T(e);
  i ? (o = e, r = Q.NODE_ENV !== "production" ? () => {
    Xe("Write operation failed: computed value is readonly");
  } : J) : (o = e.get, r = e.set);
  const l = new jr(o, r, i || !r, n);
  return Q.NODE_ENV !== "production" && t && !n && (l.effect.onTrack = t.onTrack, l.effect.onTrigger = t.onTrigger), l;
}
function ys(e) {
  var t;
  ze && rt && (e = P(e), Vr(
    rt,
    (t = e.dep) != null ? t : e.dep = Dr(
      () => e.dep = void 0,
      e instanceof jr ? e : void 0
    ),
    Q.NODE_ENV !== "production" ? {
      target: e,
      type: "get",
      key: "value"
    } : void 0
  ));
}
function xn(e, t = 4, n) {
  e = P(e);
  const o = e.dep;
  o && xr(
    o,
    t,
    Q.NODE_ENV !== "production" ? {
      target: e,
      type: "set",
      key: "value",
      newValue: n
    } : void 0
  );
}
function oe(e) {
  return !!(e && e.__v_isRef === !0);
}
function Os(e) {
  return oe(e) ? e.value : e;
}
const vs = {
  get: (e, t, n) => Os(Reflect.get(e, t, n)),
  set: (e, t, n, o) => {
    const r = e[t];
    return oe(r) && !oe(n) ? (r.value = n, !0) : Reflect.set(e, t, n, o);
  }
};
function Lr(e) {
  return Et(e) ? e : new Proxy(e, vs);
}
var a = {};
const st = [];
function Yt(e) {
  st.push(e);
}
function Xt() {
  st.pop();
}
function v(e, ...t) {
  Fe();
  const n = st.length ? st[st.length - 1].component : null, o = n && n.appContext.config.warnHandler, r = ws();
  if (o)
    Ae(
      o,
      n,
      11,
      [
        e + t.map((i) => {
          var l, c;
          return (c = (l = i.toString) == null ? void 0 : l.call(i)) != null ? c : JSON.stringify(i);
        }).join(""),
        n && n.proxy,
        r.map(
          ({ vnode: i }) => `at <${yn(n, i.type)}>`
        ).join(`
`),
        r
      ]
    );
  else {
    const i = [`[Vue warn]: ${e}`, ...t];
    r.length && i.push(`
`, ...Vs(r)), console.warn(...i);
  }
  je();
}
function ws() {
  let e = st[st.length - 1];
  if (!e)
    return [];
  const t = [];
  for (; e; ) {
    const n = t[0];
    n && n.vnode === e ? n.recurseCount++ : t.push({
      vnode: e,
      recurseCount: 0
    });
    const o = e.component && e.component.parent;
    e = o && o.vnode;
  }
  return t;
}
function Vs(e) {
  const t = [];
  return e.forEach((n, o) => {
    t.push(...o === 0 ? [] : [`
`], ...xs(n));
  }), t;
}
function xs({ vnode: e, recurseCount: t }) {
  const n = t > 0 ? `... (${t} recursive calls)` : "", o = e.component ? e.component.parent == null : !1, r = ` at <${yn(
    e.component,
    e.type,
    o
  )}`, i = ">" + n;
  return e.props ? [r, ...Ds(e.props), i] : [r + i];
}
function Ds(e) {
  const t = [], n = Object.keys(e);
  return n.slice(0, 3).forEach((o) => {
    t.push(...Hr(o, e[o]));
  }), n.length > 3 && t.push(" ..."), t;
}
function Hr(e, t, n) {
  return Y(t) ? (t = JSON.stringify(t), n ? t : [`${e}=${t}`]) : typeof t == "number" || typeof t == "boolean" || t == null ? n ? t : [`${e}=${t}`] : oe(t) ? (t = Hr(e, P(t.value), !0), n ? t : [`${e}=Ref<`, t, ">"]) : T(t) ? [`${e}=fn${t.name ? `<${t.name}>` : ""}`] : (t = P(t), n ? t : [`${e}=`, t]);
}
const fo = {
  sp: "serverPrefetch hook",
  bc: "beforeCreate hook",
  c: "created hook",
  bm: "beforeMount hook",
  m: "mounted hook",
  bu: "beforeUpdate hook",
  u: "updated",
  bum: "beforeUnmount hook",
  um: "unmounted hook",
  a: "activated hook",
  da: "deactivated hook",
  ec: "errorCaptured hook",
  rtc: "renderTracked hook",
  rtg: "renderTriggered hook",
  0: "setup function",
  1: "render function",
  2: "watcher getter",
  3: "watcher callback",
  4: "watcher cleanup function",
  5: "native event handler",
  6: "component event handler",
  7: "vnode hook",
  8: "directive hook",
  9: "transition hook",
  10: "app errorHandler",
  11: "app warnHandler",
  12: "ref function",
  13: "async component loader",
  14: "scheduler flush. This is likely a Vue internals bug. Please open an issue at https://github.com/vuejs/core ."
};
function Ae(e, t, n, o) {
  try {
    return o ? e(...o) : e();
  } catch (r) {
    jt(r, t, n);
  }
}
function ge(e, t, n, o) {
  if (T(e)) {
    const r = Ae(e, t, n, o);
    return r && Zn(r) && r.catch((i) => {
      jt(i, t, n);
    }), r;
  }
  if (S(e)) {
    const r = [];
    for (let i = 0; i < e.length; i++)
      r.push(ge(e[i], t, n, o));
    return r;
  } else a.NODE_ENV !== "production" && v(
    `Invalid value type passed to callWithAsyncErrorHandling(): ${typeof e}`
  );
}
function jt(e, t, n, o = !0) {
  const r = t ? t.vnode : null;
  if (t) {
    let i = t.parent;
    const l = t.proxy, c = a.NODE_ENV !== "production" ? fo[n] : `https://vuejs.org/error-reference/#runtime-${n}`;
    for (; i; ) {
      const p = i.ec;
      if (p) {
        for (let m = 0; m < p.length; m++)
          if (p[m](e, l, c) === !1)
            return;
      }
      i = i.parent;
    }
    const f = t.appContext.config.errorHandler;
    if (f) {
      Fe(), Ae(
        f,
        null,
        10,
        [e, l, c]
      ), je();
      return;
    }
  }
  Cs(e, n, r, o);
}
function Cs(e, t, n, o = !0) {
  if (a.NODE_ENV !== "production") {
    const r = fo[t];
    if (n && Yt(n), v(`Unhandled error${r ? ` during execution of ${r}` : ""}`), n && Xt(), o)
      throw e;
    console.error(e);
  } else
    console.error(e);
}
let At = !1, Ln = !1;
const ne = [];
let ve = 0;
const bt = [];
let Pe = null, ke = 0;
const Ur = /* @__PURE__ */ Promise.resolve();
let ao = null;
const Ss = 100;
function Ts(e) {
  const t = ao || Ur;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function $s(e) {
  let t = ve + 1, n = ne.length;
  for (; t < n; ) {
    const o = t + n >>> 1, r = ne[o], i = Mt(r);
    i < e || i === e && r.pre ? t = o + 1 : n = o;
  }
  return t;
}
function gn(e) {
  (!ne.length || !ne.includes(
    e,
    At && e.allowRecurse ? ve + 1 : ve
  )) && (e.id == null ? ne.push(e) : ne.splice($s(e.id), 0, e), Br());
}
function Br() {
  !At && !Ln && (Ln = !0, ao = Ur.then(Wr));
}
function Is(e) {
  const t = ne.indexOf(e);
  t > ve && ne.splice(t, 1);
}
function Kr(e) {
  S(e) ? bt.push(...e) : (!Pe || !Pe.includes(
    e,
    e.allowRecurse ? ke + 1 : ke
  )) && bt.push(e), Br();
}
function Ho(e, t, n = At ? ve + 1 : 0) {
  for (a.NODE_ENV !== "production" && (t = t || /* @__PURE__ */ new Map()); n < ne.length; n++) {
    const o = ne[n];
    if (o && o.pre) {
      if (e && o.id !== e.uid || a.NODE_ENV !== "production" && po(t, o))
        continue;
      ne.splice(n, 1), n--, o();
    }
  }
}
function kr(e) {
  if (bt.length) {
    const t = [...new Set(bt)].sort(
      (n, o) => Mt(n) - Mt(o)
    );
    if (bt.length = 0, Pe) {
      Pe.push(...t);
      return;
    }
    for (Pe = t, a.NODE_ENV !== "production" && (e = e || /* @__PURE__ */ new Map()), ke = 0; ke < Pe.length; ke++)
      a.NODE_ENV !== "production" && po(e, Pe[ke]) || Pe[ke]();
    Pe = null, ke = 0;
  }
}
const Mt = (e) => e.id == null ? 1 / 0 : e.id, Ps = (e, t) => {
  const n = Mt(e) - Mt(t);
  if (n === 0) {
    if (e.pre && !t.pre)
      return -1;
    if (t.pre && !e.pre)
      return 1;
  }
  return n;
};
function Wr(e) {
  Ln = !1, At = !0, a.NODE_ENV !== "production" && (e = e || /* @__PURE__ */ new Map()), ne.sort(Ps);
  const t = a.NODE_ENV !== "production" ? (n) => po(e, n) : J;
  try {
    for (ve = 0; ve < ne.length; ve++) {
      const n = ne[ve];
      if (n && n.active !== !1) {
        if (a.NODE_ENV !== "production" && t(n))
          continue;
        Ae(n, null, 14);
      }
    }
  } finally {
    ve = 0, ne.length = 0, kr(e), At = !1, ao = null, (ne.length || bt.length) && Wr(e);
  }
}
function po(e, t) {
  if (!e.has(t))
    e.set(t, 1);
  else {
    const n = e.get(t);
    if (n > Ss) {
      const o = t.ownerInstance, r = o && wo(o.type);
      return jt(
        `Maximum recursive updates exceeded${r ? ` in component <${r}>` : ""}. This means you have a reactive effect that is mutating its own dependencies and thus recursively triggering itself. Possible sources include component template, render function, updated hook or watcher source function.`,
        null,
        10
      ), !0;
    } else
      e.set(t, n + 1);
  }
}
let lt = !1;
const mt = /* @__PURE__ */ new Set();
a.NODE_ENV !== "production" && (to().__VUE_HMR_RUNTIME__ = {
  createRecord: Dn(Gr),
  rerender: Dn(Rs),
  reload: Dn(Fs)
});
const at = /* @__PURE__ */ new Map();
function As(e) {
  const t = e.type.__hmrId;
  let n = at.get(t);
  n || (Gr(t, e.type), n = at.get(t)), n.instances.add(e);
}
function Ms(e) {
  at.get(e.type.__hmrId).instances.delete(e);
}
function Gr(e, t) {
  return at.has(e) ? !1 : (at.set(e, {
    initialDef: $t(t),
    instances: /* @__PURE__ */ new Set()
  }), !0);
}
function $t(e) {
  return Di(e) ? e.__vccOpts : e;
}
function Rs(e, t) {
  const n = at.get(e);
  n && (n.initialDef.render = t, [...n.instances].forEach((o) => {
    t && (o.render = t, $t(o.type).render = t), o.renderCache = [], lt = !0, o.effect.dirty = !0, o.update(), lt = !1;
  }));
}
function Fs(e, t) {
  const n = at.get(e);
  if (!n)
    return;
  t = $t(t), Uo(n.initialDef, t);
  const o = [...n.instances];
  for (const r of o) {
    const i = $t(r.type);
    mt.has(i) || (i !== n.initialDef && Uo(i, t), mt.add(i)), r.appContext.propsCache.delete(r.type), r.appContext.emitsCache.delete(r.type), r.appContext.optionsCache.delete(r.type), r.ceReload ? (mt.add(i), r.ceReload(t.styles), mt.delete(i)) : r.parent ? (r.parent.effect.dirty = !0, gn(r.parent.update)) : r.appContext.reload ? r.appContext.reload() : typeof window < "u" ? window.location.reload() : console.warn(
      "[HMR] Root or manually mounted instance modified. Full reload required."
    );
  }
  Kr(() => {
    for (const r of o)
      mt.delete(
        $t(r.type)
      );
  });
}
function Uo(e, t) {
  G(e, t);
  for (const n in e)
    n !== "__file" && !(n in t) && delete e[n];
}
function Dn(e) {
  return (t, n) => {
    try {
      return e(t, n);
    } catch (o) {
      console.error(o), console.warn(
        "[HMR] Something went wrong during Vue component hot-reload. Full reload required."
      );
    }
  };
}
let we, Ct = [], Hn = !1;
function Lt(e, ...t) {
  we ? we.emit(e, ...t) : Hn || Ct.push({ event: e, args: t });
}
function qr(e, t) {
  var n, o;
  we = e, we ? (we.enabled = !0, Ct.forEach(({ event: r, args: i }) => we.emit(r, ...i)), Ct = []) : /* handle late devtools injection - only do this if we are in an actual */ /* browser environment to avoid the timer handle stalling test runner exit */ /* (#4815) */ typeof window < "u" && // some envs mock window but not fully
  window.HTMLElement && // also exclude jsdom
  !((o = (n = window.navigator) == null ? void 0 : n.userAgent) != null && o.includes("jsdom")) ? ((t.__VUE_DEVTOOLS_HOOK_REPLAY__ = t.__VUE_DEVTOOLS_HOOK_REPLAY__ || []).push((i) => {
    qr(i, t);
  }), setTimeout(() => {
    we || (t.__VUE_DEVTOOLS_HOOK_REPLAY__ = null, Hn = !0, Ct = []);
  }, 3e3)) : (Hn = !0, Ct = []);
}
function js(e, t) {
  Lt("app:init", e, t, {
    Fragment: Oe,
    Text: Ht,
    Comment: Ee,
    Static: tn
  });
}
function Ls(e) {
  Lt("app:unmount", e);
}
const Hs = /* @__PURE__ */ ho(
  "component:added"
  /* COMPONENT_ADDED */
), zr = /* @__PURE__ */ ho(
  "component:updated"
  /* COMPONENT_UPDATED */
), Us = /* @__PURE__ */ ho(
  "component:removed"
  /* COMPONENT_REMOVED */
), Bs = (e) => {
  we && typeof we.cleanupBuffer == "function" && // remove the component if it wasn't buffered
  !we.cleanupBuffer(e) && Us(e);
};
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function ho(e) {
  return (t) => {
    Lt(
      e,
      t.appContext.app,
      t.uid,
      t.parent ? t.parent.uid : void 0,
      t
    );
  };
}
const Ks = /* @__PURE__ */ Jr(
  "perf:start"
  /* PERFORMANCE_START */
), ks = /* @__PURE__ */ Jr(
  "perf:end"
  /* PERFORMANCE_END */
);
function Jr(e) {
  return (t, n, o) => {
    Lt(e, t.appContext.app, t.uid, t, n, o);
  };
}
function Ws(e, t, n) {
  Lt(
    "component:emit",
    e.appContext.app,
    e,
    t,
    n
  );
}
function Gs(e, t, ...n) {
  if (e.isUnmounted)
    return;
  const o = e.vnode.props || U;
  if (a.NODE_ENV !== "production") {
    const {
      emitsOptions: m,
      propsOptions: [d]
    } = e;
    if (m)
      if (!(t in m))
        (!d || !(nt(t) in d)) && v(
          `Component emitted event "${t}" but it is neither declared in the emits option nor as an "${nt(t)}" prop.`
        );
      else {
        const b = m[t];
        T(b) && (b(...n) || v(
          `Invalid event arguments: event validation failed for event "${t}".`
        ));
      }
  }
  let r = n;
  const i = t.startsWith("update:"), l = i && t.slice(7);
  if (l && l in o) {
    const m = `${l === "modelValue" ? "model" : l}Modifiers`, { number: d, trim: b } = o[m] || U;
    b && (r = n.map((x) => Y(x) ? x.trim() : x)), d && (r = n.map(Ri));
  }
  if (a.NODE_ENV !== "production" && Ws(e, t, r), a.NODE_ENV !== "production") {
    const m = t.toLowerCase();
    m !== t && o[nt(m)] && v(
      `Event "${m}" is emitted in component ${yn(
        e,
        e.type
      )} but the handler is registered for "${t}". Note that HTML attributes are case-insensitive and you cannot use v-on to listen to camelCase events when using in-DOM templates. You should probably use "${Ye(
        t
      )}" instead of "${t}".`
    );
  }
  let c, f = o[c = nt(t)] || // also try camelCase event handler (#2249)
  o[c = nt(De(t))];
  !f && i && (f = o[c = nt(Ye(t))]), f && ge(
    f,
    e,
    6,
    r
  );
  const p = o[c + "Once"];
  if (p) {
    if (!e.emitted)
      e.emitted = {};
    else if (e.emitted[c])
      return;
    e.emitted[c] = !0, ge(
      p,
      e,
      6,
      r
    );
  }
}
function Yr(e, t, n = !1) {
  const o = t.emitsCache, r = o.get(e);
  if (r !== void 0)
    return r;
  const i = e.emits;
  let l = {}, c = !1;
  if (!T(e)) {
    const f = (p) => {
      const m = Yr(p, t, !0);
      m && (c = !0, G(l, m));
    };
    !n && t.mixins.length && t.mixins.forEach(f), e.extends && f(e.extends), e.mixins && e.mixins.forEach(f);
  }
  return !i && !c ? (B(e) && o.set(e, null), null) : (S(i) ? i.forEach((f) => l[f] = null) : G(l, i), B(e) && o.set(e, l), l);
}
function En(e, t) {
  return !e || !Ft(t) ? !1 : (t = t.slice(2).replace(/Once$/, ""), M(e, t[0].toLowerCase() + t.slice(1)) || M(e, Ye(t)) || M(e, t));
}
let fe = null, Xr = null;
function sn(e) {
  const t = fe;
  return fe = e, Xr = e && e.type.__scopeId || null, t;
}
function qs(e, t = fe, n) {
  if (!t || e._n)
    return e;
  const o = (...r) => {
    o._d && er(-1);
    const i = sn(t);
    let l;
    try {
      l = e(...r);
    } finally {
      sn(i), o._d && er(1);
    }
    return a.NODE_ENV !== "production" && zr(t), l;
  };
  return o._n = !0, o._c = !0, o._d = !0, o;
}
let Un = !1;
function ln() {
  Un = !0;
}
function Cn(e) {
  const {
    type: t,
    vnode: n,
    proxy: o,
    withProxy: r,
    propsOptions: [i],
    slots: l,
    attrs: c,
    emit: f,
    render: p,
    renderCache: m,
    props: d,
    data: b,
    setupState: x,
    ctx: A,
    inheritAttrs: R
  } = e, Ce = sn(e);
  let q, X;
  a.NODE_ENV !== "production" && (Un = !1);
  try {
    if (n.shapeFlag & 4) {
      const z = r || o, ae = a.NODE_ENV !== "production" && x.__isScriptSetup ? new Proxy(z, {
        get(I, re, ie) {
          return v(
            `Property '${String(
              re
            )}' was accessed via 'this'. Avoid using 'this' in templates.`
          ), Reflect.get(I, re, ie);
        }
      }) : z;
      q = me(
        p.call(
          ae,
          z,
          m,
          a.NODE_ENV !== "production" ? Ve(d) : d,
          x,
          b,
          A
        )
      ), X = c;
    } else {
      const z = t;
      a.NODE_ENV !== "production" && c === d && ln(), q = me(
        z.length > 1 ? z(
          a.NODE_ENV !== "production" ? Ve(d) : d,
          a.NODE_ENV !== "production" ? {
            get attrs() {
              return ln(), Ve(c);
            },
            slots: l,
            emit: f
          } : { attrs: c, slots: l, emit: f }
        ) : z(
          a.NODE_ENV !== "production" ? Ve(d) : d,
          null
        )
      ), X = t.props ? c : zs(c);
    }
  } catch (z) {
    Pt.length = 0, jt(z, e, 1), q = Me(Ee);
  }
  let k = q, W;
  if (a.NODE_ENV !== "production" && q.patchFlag > 0 && q.patchFlag & 2048 && ([k, W] = Zr(q)), X && R !== !1) {
    const z = Object.keys(X), { shapeFlag: ae } = k;
    if (z.length) {
      if (ae & 7)
        i && z.some(rn) && (X = Js(
          X,
          i
        )), k = Ze(k, X, !1, !0);
      else if (a.NODE_ENV !== "production" && !Un && k.type !== Ee) {
        const I = Object.keys(c), re = [], ie = [];
        for (let Se = 0, He = I.length; Se < He; Se++) {
          const de = I[Se];
          Ft(de) ? rn(de) || re.push(de[2].toLowerCase() + de.slice(3)) : ie.push(de);
        }
        ie.length && v(
          `Extraneous non-props attributes (${ie.join(", ")}) were passed to component but could not be automatically inherited because component renders fragment or text root nodes.`
        ), re.length && v(
          `Extraneous non-emits event listeners (${re.join(", ")}) were passed to component but could not be automatically inherited because component renders fragment or text root nodes. If the listener is intended to be a component custom event listener only, declare it using the "emits" option.`
        );
      }
    }
  }
  return n.dirs && (a.NODE_ENV !== "production" && !Bo(k) && v(
    "Runtime directive used on component with non-element root node. The directives will not function as intended."
  ), k = Ze(k, null, !1, !0), k.dirs = k.dirs ? k.dirs.concat(n.dirs) : n.dirs), n.transition && (a.NODE_ENV !== "production" && !Bo(k) && v(
    "Component inside <Transition> renders non-element root node that cannot be animated."
  ), k.transition = n.transition), a.NODE_ENV !== "production" && W ? W(k) : q = k, sn(Ce), q;
}
const Zr = (e) => {
  const t = e.children, n = e.dynamicChildren, o = mo(t, !1);
  if (o) {
    if (a.NODE_ENV !== "production" && o.patchFlag > 0 && o.patchFlag & 2048)
      return Zr(o);
  } else return [e, void 0];
  const r = t.indexOf(o), i = n ? n.indexOf(o) : -1, l = (c) => {
    t[r] = c, n && (i > -1 ? n[i] = c : c.patchFlag > 0 && (e.dynamicChildren = [...n, c]));
  };
  return [me(o), l];
};
function mo(e, t = !0) {
  let n;
  for (let o = 0; o < e.length; o++) {
    const r = e[o];
    if (bo(r)) {
      if (r.type !== Ee || r.children === "v-if") {
        if (n)
          return;
        if (n = r, a.NODE_ENV !== "production" && t && n.patchFlag > 0 && n.patchFlag & 2048)
          return mo(n.children);
      }
    } else
      return;
  }
  return n;
}
const zs = (e) => {
  let t;
  for (const n in e)
    (n === "class" || n === "style" || Ft(n)) && ((t || (t = {}))[n] = e[n]);
  return t;
}, Js = (e, t) => {
  const n = {};
  for (const o in e)
    (!rn(o) || !(o.slice(9) in t)) && (n[o] = e[o]);
  return n;
}, Bo = (e) => e.shapeFlag & 7 || e.type === Ee;
function Ys(e, t, n) {
  const { props: o, children: r, component: i } = e, { props: l, children: c, patchFlag: f } = t, p = i.emitsOptions;
  if (a.NODE_ENV !== "production" && (r || c) && lt || t.dirs || t.transition)
    return !0;
  if (n && f >= 0) {
    if (f & 1024)
      return !0;
    if (f & 16)
      return o ? Ko(o, l, p) : !!l;
    if (f & 8) {
      const m = t.dynamicProps;
      for (let d = 0; d < m.length; d++) {
        const b = m[d];
        if (l[b] !== o[b] && !En(p, b))
          return !0;
      }
    }
  } else
    return (r || c) && (!c || !c.$stable) ? !0 : o === l ? !1 : o ? l ? Ko(o, l, p) : !0 : !!l;
  return !1;
}
function Ko(e, t, n) {
  const o = Object.keys(t);
  if (o.length !== Object.keys(e).length)
    return !0;
  for (let r = 0; r < o.length; r++) {
    const i = o[r];
    if (t[i] !== e[i] && !En(n, i))
      return !0;
  }
  return !1;
}
function Xs({ vnode: e, parent: t }, n) {
  for (; t; ) {
    const o = t.subTree;
    if (o.suspense && o.suspense.activeBranch === e && (o.el = e.el), o === e)
      (e = t.vnode).el = n, t = t.parent;
    else
      break;
  }
}
const Zs = "components";
function Qr(e, t) {
  return el(Zs, e, !0, t) || e;
}
const Qs = Symbol.for("v-ndc");
function el(e, t, n = !0, o = !1) {
  const r = fe || Z;
  if (r) {
    const i = r.type;
    {
      const c = wo(
        i,
        !1
      );
      if (c && (c === t || c === De(t) || c === ut(De(t))))
        return i;
    }
    const l = (
      // local registration
      // check instance[type] first which is resolved for options API
      ko(r[e] || i[e], t) || // global registration
      ko(r.appContext[e], t)
    );
    return !l && o ? i : (a.NODE_ENV !== "production" && n && !l && v(`Failed to resolve ${e.slice(0, -1)}: ${t}
If this is a native custom element, make sure to exclude it from component resolution via compilerOptions.isCustomElement.`), l);
  } else a.NODE_ENV !== "production" && v(
    `resolve${ut(e.slice(0, -1))} can only be used in render() or setup().`
  );
}
function ko(e, t) {
  return e && (e[t] || e[De(t)] || e[ut(De(t))]);
}
const tl = (e) => e.__isSuspense;
function nl(e, t) {
  t && t.pendingBranch ? S(e) ? t.effects.push(...e) : t.effects.push(e) : Kr(e);
}
const ol = Symbol.for("v-scx"), rl = () => {
  {
    const e = Qt(ol);
    return e || a.NODE_ENV !== "production" && v(
      "Server rendering context not provided. Make sure to only call useSSRContext() conditionally in the server build."
    ), e;
  }
}, Jt = {};
function Sn(e, t, n) {
  return a.NODE_ENV !== "production" && !T(t) && v(
    "`watch(fn, options?)` signature has been moved to a separate API. Use `watchEffect(fn, options?)` instead. `watch` now only supports `watch(source, cb, options?) signature."
  ), ei(e, t, n);
}
function ei(e, t, {
  immediate: n,
  deep: o,
  flush: r,
  once: i,
  onTrack: l,
  onTrigger: c
} = U) {
  if (t && i) {
    const I = t;
    t = (...re) => {
      I(...re), ae();
    };
  }
  a.NODE_ENV !== "production" && o !== void 0 && typeof o == "number" && v(
    'watch() "deep" option with number value will be used as watch depth in future versions. Please use a boolean instead to avoid potential breakage.'
  ), a.NODE_ENV !== "production" && !t && (n !== void 0 && v(
    'watch() "immediate" option is only respected when using the watch(source, callback, options?) signature.'
  ), o !== void 0 && v(
    'watch() "deep" option is only respected when using the watch(source, callback, options?) signature.'
  ), i !== void 0 && v(
    'watch() "once" option is only respected when using the watch(source, callback, options?) signature.'
  ));
  const f = (I) => {
    v(
      "Invalid watch source: ",
      I,
      "A watch source can only be a getter/effect function, a ref, a reactive object, or an array of these types."
    );
  }, p = Z, m = (I) => o === !0 ? I : (
    // for deep: false, only traverse root-level properties
    _t(I, o === !1 ? 1 : void 0)
  );
  let d, b = !1, x = !1;
  if (oe(e) ? (d = () => e.value, b = Nt(e)) : Et(e) ? (d = () => m(e), b = !0) : S(e) ? (x = !0, b = e.some((I) => Et(I) || Nt(I)), d = () => e.map((I) => {
    if (oe(I))
      return I.value;
    if (Et(I))
      return m(I);
    if (T(I))
      return Ae(I, p, 2);
    a.NODE_ENV !== "production" && f(I);
  })) : T(e) ? t ? d = () => Ae(e, p, 2) : d = () => (A && A(), ge(
    e,
    p,
    3,
    [R]
  )) : (d = J, a.NODE_ENV !== "production" && f(e)), t && o) {
    const I = d;
    d = () => _t(I());
  }
  let A, R = (I) => {
    A = W.onStop = () => {
      Ae(I, p, 4), A = W.onStop = void 0;
    };
  }, Ce;
  if (bn)
    if (R = J, t ? n && ge(t, p, 3, [
      d(),
      x ? [] : void 0,
      R
    ]) : d(), r === "sync") {
      const I = rl();
      Ce = I.__watcherHandles || (I.__watcherHandles = []);
    } else
      return J;
  let q = x ? new Array(e.length).fill(Jt) : Jt;
  const X = () => {
    if (!(!W.active || !W.dirty))
      if (t) {
        const I = W.run();
        (o || b || (x ? I.some((re, ie) => ft(re, q[ie])) : ft(I, q))) && (A && A(), ge(t, p, 3, [
          I,
          // pass undefined as the old value when it's changed for the first time
          q === Jt ? void 0 : x && q[0] === Jt ? [] : q,
          R
        ]), q = I);
      } else
        W.run();
  };
  X.allowRecurse = !!t;
  let k;
  r === "sync" ? k = X : r === "post" ? k = () => ue(X, p && p.suspense) : (X.pre = !0, p && (X.id = p.uid), k = () => gn(X));
  const W = new oo(d, J, k), z = Xi(), ae = () => {
    W.stop(), z && Xn(z.effects, W);
  };
  return a.NODE_ENV !== "production" && (W.onTrack = l, W.onTrigger = c), t ? n ? X() : q = W.run() : r === "post" ? ue(
    W.run.bind(W),
    p && p.suspense
  ) : W.run(), Ce && Ce.push(ae), ae;
}
function il(e, t, n) {
  const o = this.proxy, r = Y(e) ? e.includes(".") ? ti(o, e) : () => o[e] : e.bind(o, o);
  let i;
  T(t) ? i = t : (i = t.handler, n = t);
  const l = Ut(this), c = ei(r, i.bind(o), n);
  return l(), c;
}
function ti(e, t) {
  const n = t.split(".");
  return () => {
    let o = e;
    for (let r = 0; r < n.length && o; r++)
      o = o[n[r]];
    return o;
  };
}
function _t(e, t = 1 / 0, n) {
  if (t <= 0 || !B(e) || e.__v_skip || (n = n || /* @__PURE__ */ new Set(), n.has(e)))
    return e;
  if (n.add(e), t--, oe(e))
    _t(e.value, t, n);
  else if (S(e))
    for (let o = 0; o < e.length; o++)
      _t(e[o], t, n);
  else if (_r(e) || ot(e))
    e.forEach((o) => {
      _t(o, t, n);
    });
  else if (Er(e))
    for (const o in e)
      _t(e[o], t, n);
  return e;
}
function ni(e) {
  Pi(e) && v("Do not use built-in directive ids as custom directive id: " + e);
}
function et(e, t, n, o) {
  const r = e.dirs, i = t && t.dirs;
  for (let l = 0; l < r.length; l++) {
    const c = r[l];
    i && (c.oldValue = i[l].value);
    let f = c.dir[o];
    f && (Fe(), ge(f, n, 8, [
      e.el,
      c,
      e,
      t
    ]), je());
  }
}
const Zt = (e) => !!e.type.__asyncLoader, _o = (e) => e.type.__isKeepAlive;
function sl(e, t) {
  oi(e, "a", t);
}
function ll(e, t) {
  oi(e, "da", t);
}
function oi(e, t, n = Z) {
  const o = e.__wdc || (e.__wdc = () => {
    let r = n;
    for (; r; ) {
      if (r.isDeactivated)
        return;
      r = r.parent;
    }
    return e();
  });
  if (Nn(t, o, n), n) {
    let r = n.parent;
    for (; r && r.parent; )
      _o(r.parent.vnode) && cl(o, t, n, r), r = r.parent;
  }
}
function cl(e, t, n, o) {
  const r = Nn(
    t,
    e,
    o,
    !0
    /* prepend */
  );
  ri(() => {
    Xn(o[t], r);
  }, n);
}
function Nn(e, t, n = Z, o = !1) {
  if (n) {
    const r = n[e] || (n[e] = []), i = t.__weh || (t.__weh = (...l) => {
      if (n.isUnmounted)
        return;
      Fe();
      const c = Ut(n), f = ge(t, n, e, l);
      return c(), je(), f;
    });
    return o ? r.unshift(i) : r.push(i), i;
  } else if (a.NODE_ENV !== "production") {
    const r = nt(fo[e].replace(/ hook$/, ""));
    v(
      `${r} is called when there is no active component instance to be associated with. Lifecycle injection APIs can only be used during execution of setup(). If you are using async setup(), make sure to register lifecycle hooks before the first await statement.`
    );
  }
}
const Le = (e) => (t, n = Z) => (
  // post-create lifecycle registrations are noops during SSR (except for serverPrefetch)
  (!bn || e === "sp") && Nn(e, (...o) => t(...o), n)
), ul = Le("bm"), fl = Le("m"), al = Le("bu"), dl = Le("u"), pl = Le("bum"), ri = Le("um"), hl = Le("sp"), ml = Le(
  "rtg"
), _l = Le(
  "rtc"
);
function gl(e, t = Z) {
  Nn("ec", e, t);
}
const Bn = (e) => e ? Vi(e) ? vo(e) || e.proxy : Bn(e.parent) : null, ct = (
  // Move PURE marker to new line to workaround compiler discarding it
  // due to type annotation
  /* @__PURE__ */ G(/* @__PURE__ */ Object.create(null), {
    $: (e) => e,
    $el: (e) => e.vnode.el,
    $data: (e) => e.data,
    $props: (e) => a.NODE_ENV !== "production" ? Ve(e.props) : e.props,
    $attrs: (e) => a.NODE_ENV !== "production" ? Ve(e.attrs) : e.attrs,
    $slots: (e) => a.NODE_ENV !== "production" ? Ve(e.slots) : e.slots,
    $refs: (e) => a.NODE_ENV !== "production" ? Ve(e.refs) : e.refs,
    $parent: (e) => Bn(e.parent),
    $root: (e) => Bn(e.root),
    $emit: (e) => e.emit,
    $options: (e) => Eo(e),
    $forceUpdate: (e) => e.f || (e.f = () => {
      e.effect.dirty = !0, gn(e.update);
    }),
    $nextTick: (e) => e.n || (e.n = Ts.bind(e.proxy)),
    $watch: (e) => il.bind(e)
  })
), go = (e) => e === "_" || e === "$", Tn = (e, t) => e !== U && !e.__isScriptSetup && M(e, t), ii = {
  get({ _: e }, t) {
    if (t === "__v_skip")
      return !0;
    const { ctx: n, setupState: o, data: r, props: i, accessCache: l, type: c, appContext: f } = e;
    if (a.NODE_ENV !== "production" && t === "__isVue")
      return !0;
    let p;
    if (t[0] !== "$") {
      const x = l[t];
      if (x !== void 0)
        switch (x) {
          case 1:
            return o[t];
          case 2:
            return r[t];
          case 4:
            return n[t];
          case 3:
            return i[t];
        }
      else {
        if (Tn(o, t))
          return l[t] = 1, o[t];
        if (r !== U && M(r, t))
          return l[t] = 2, r[t];
        if (
          // only cache other properties when instance has declared (thus stable)
          // props
          (p = e.propsOptions[0]) && M(p, t)
        )
          return l[t] = 3, i[t];
        if (n !== U && M(n, t))
          return l[t] = 4, n[t];
        Kn && (l[t] = 0);
      }
    }
    const m = ct[t];
    let d, b;
    if (m)
      return t === "$attrs" ? (te(e.attrs, "get", ""), a.NODE_ENV !== "production" && ln()) : a.NODE_ENV !== "production" && t === "$slots" && te(e, "get", t), m(e);
    if (
      // css module (injected by vue-loader)
      (d = c.__cssModules) && (d = d[t])
    )
      return d;
    if (n !== U && M(n, t))
      return l[t] = 4, n[t];
    if (
      // global properties
      b = f.config.globalProperties, M(b, t)
    )
      return b[t];
    a.NODE_ENV !== "production" && fe && (!Y(t) || // #1091 avoid internal isRef/isVNode checks on component instance leading
    // to infinite warning loop
    t.indexOf("__v") !== 0) && (r !== U && go(t[0]) && M(r, t) ? v(
      `Property ${JSON.stringify(
        t
      )} must be accessed via $data because it starts with a reserved character ("$" or "_") and is not proxied on the render context.`
    ) : e === fe && v(
      `Property ${JSON.stringify(t)} was accessed during render but is not defined on instance.`
    ));
  },
  set({ _: e }, t, n) {
    const { data: o, setupState: r, ctx: i } = e;
    return Tn(r, t) ? (r[t] = n, !0) : a.NODE_ENV !== "production" && r.__isScriptSetup && M(r, t) ? (v(`Cannot mutate <script setup> binding "${t}" from Options API.`), !1) : o !== U && M(o, t) ? (o[t] = n, !0) : M(e.props, t) ? (a.NODE_ENV !== "production" && v(`Attempting to mutate prop "${t}". Props are readonly.`), !1) : t[0] === "$" && t.slice(1) in e ? (a.NODE_ENV !== "production" && v(
      `Attempting to mutate public property "${t}". Properties starting with $ are reserved and readonly.`
    ), !1) : (a.NODE_ENV !== "production" && t in e.appContext.config.globalProperties ? Object.defineProperty(i, t, {
      enumerable: !0,
      configurable: !0,
      value: n
    }) : i[t] = n, !0);
  },
  has({
    _: { data: e, setupState: t, accessCache: n, ctx: o, appContext: r, propsOptions: i }
  }, l) {
    let c;
    return !!n[l] || e !== U && M(e, l) || Tn(t, l) || (c = i[0]) && M(c, l) || M(o, l) || M(ct, l) || M(r.config.globalProperties, l);
  },
  defineProperty(e, t, n) {
    return n.get != null ? e._.accessCache[t] = 0 : M(n, "value") && this.set(e, t, n.value, null), Reflect.defineProperty(e, t, n);
  }
};
a.NODE_ENV !== "production" && (ii.ownKeys = (e) => (v(
  "Avoid app logic that relies on enumerating keys on a component instance. The keys will be empty in production mode to avoid performance overhead."
), Reflect.ownKeys(e)));
function El(e) {
  const t = {};
  return Object.defineProperty(t, "_", {
    configurable: !0,
    enumerable: !1,
    get: () => e
  }), Object.keys(ct).forEach((n) => {
    Object.defineProperty(t, n, {
      configurable: !0,
      enumerable: !1,
      get: () => ct[n](e),
      // intercepted by the proxy so no need for implementation,
      // but needed to prevent set errors
      set: J
    });
  }), t;
}
function Nl(e) {
  const {
    ctx: t,
    propsOptions: [n]
  } = e;
  n && Object.keys(n).forEach((o) => {
    Object.defineProperty(t, o, {
      enumerable: !0,
      configurable: !0,
      get: () => e.props[o],
      set: J
    });
  });
}
function bl(e) {
  const { ctx: t, setupState: n } = e;
  Object.keys(P(n)).forEach((o) => {
    if (!n.__isScriptSetup) {
      if (go(o[0])) {
        v(
          `setup() return property ${JSON.stringify(
            o
          )} should not start with "$" or "_" which are reserved prefixes for Vue internals.`
        );
        return;
      }
      Object.defineProperty(t, o, {
        enumerable: !0,
        configurable: !0,
        get: () => n[o],
        set: J
      });
    }
  });
}
function Wo(e) {
  return S(e) ? e.reduce(
    (t, n) => (t[n] = null, t),
    {}
  ) : e;
}
function yl() {
  const e = /* @__PURE__ */ Object.create(null);
  return (t, n) => {
    e[n] ? v(`${t} property "${n}" is already defined in ${e[n]}.`) : e[n] = t;
  };
}
let Kn = !0;
function Ol(e) {
  const t = Eo(e), n = e.proxy, o = e.ctx;
  Kn = !1, t.beforeCreate && Go(t.beforeCreate, e, "bc");
  const {
    // state
    data: r,
    computed: i,
    methods: l,
    watch: c,
    provide: f,
    inject: p,
    // lifecycle
    created: m,
    beforeMount: d,
    mounted: b,
    beforeUpdate: x,
    updated: A,
    activated: R,
    deactivated: Ce,
    beforeDestroy: q,
    beforeUnmount: X,
    destroyed: k,
    unmounted: W,
    render: z,
    renderTracked: ae,
    renderTriggered: I,
    errorCaptured: re,
    serverPrefetch: ie,
    // public API
    expose: Se,
    inheritAttrs: He,
    // assets
    components: de,
    directives: Bt,
    filters: Vo
  } = t, Ue = a.NODE_ENV !== "production" ? yl() : null;
  if (a.NODE_ENV !== "production") {
    const [L] = e.propsOptions;
    if (L)
      for (const j in L)
        Ue("Props", j);
  }
  if (p && vl(p, o, Ue), l)
    for (const L in l) {
      const j = l[L];
      T(j) ? (a.NODE_ENV !== "production" ? Object.defineProperty(o, L, {
        value: j.bind(n),
        configurable: !0,
        enumerable: !0,
        writable: !0
      }) : o[L] = j.bind(n), a.NODE_ENV !== "production" && Ue("Methods", L)) : a.NODE_ENV !== "production" && v(
        `Method "${L}" has type "${typeof j}" in the component definition. Did you reference the function correctly?`
      );
    }
  if (r) {
    a.NODE_ENV !== "production" && !T(r) && v(
      "The data option must be a function. Plain object usage is no longer supported."
    );
    const L = r.call(n, n);
    if (a.NODE_ENV !== "production" && Zn(L) && v(
      "data() returned a Promise - note data() cannot be async; If you intend to perform data fetching before component renders, use async setup() + <Suspense>."
    ), !B(L))
      a.NODE_ENV !== "production" && v("data() should return an object.");
    else if (e.data = lo(L), a.NODE_ENV !== "production")
      for (const j in L)
        Ue("Data", j), go(j[0]) || Object.defineProperty(o, j, {
          configurable: !0,
          enumerable: !0,
          get: () => L[j],
          set: J
        });
  }
  if (Kn = !0, i)
    for (const L in i) {
      const j = i[L], Ne = T(j) ? j.bind(n, n) : T(j.get) ? j.get.bind(n, n) : J;
      a.NODE_ENV !== "production" && Ne === J && v(`Computed property "${L}" has no getter.`);
      const On = !T(j) && T(j.set) ? j.set.bind(n) : a.NODE_ENV !== "production" ? () => {
        v(
          `Write operation failed: computed property "${L}" is readonly.`
        );
      } : J, Ot = uc({
        get: Ne,
        set: On
      });
      Object.defineProperty(o, L, {
        enumerable: !0,
        configurable: !0,
        get: () => Ot.value,
        set: (pt) => Ot.value = pt
      }), a.NODE_ENV !== "production" && Ue("Computed", L);
    }
  if (c)
    for (const L in c)
      si(c[L], o, n, L);
  if (f) {
    const L = T(f) ? f.call(n) : f;
    Reflect.ownKeys(L).forEach((j) => {
      Sl(j, L[j]);
    });
  }
  m && Go(m, e, "c");
  function ce(L, j) {
    S(j) ? j.forEach((Ne) => L(Ne.bind(n))) : j && L(j.bind(n));
  }
  if (ce(ul, d), ce(fl, b), ce(al, x), ce(dl, A), ce(sl, R), ce(ll, Ce), ce(gl, re), ce(_l, ae), ce(ml, I), ce(pl, X), ce(ri, W), ce(hl, ie), S(Se))
    if (Se.length) {
      const L = e.exposed || (e.exposed = {});
      Se.forEach((j) => {
        Object.defineProperty(L, j, {
          get: () => n[j],
          set: (Ne) => n[j] = Ne
        });
      });
    } else e.exposed || (e.exposed = {});
  z && e.render === J && (e.render = z), He != null && (e.inheritAttrs = He), de && (e.components = de), Bt && (e.directives = Bt);
}
function vl(e, t, n = J) {
  S(e) && (e = kn(e));
  for (const o in e) {
    const r = e[o];
    let i;
    B(r) ? "default" in r ? i = Qt(
      r.from || o,
      r.default,
      !0
    ) : i = Qt(r.from || o) : i = Qt(r), oe(i) ? Object.defineProperty(t, o, {
      enumerable: !0,
      configurable: !0,
      get: () => i.value,
      set: (l) => i.value = l
    }) : t[o] = i, a.NODE_ENV !== "production" && n("Inject", o);
  }
}
function Go(e, t, n) {
  ge(
    S(e) ? e.map((o) => o.bind(t.proxy)) : e.bind(t.proxy),
    t,
    n
  );
}
function si(e, t, n, o) {
  const r = o.includes(".") ? ti(n, o) : () => n[o];
  if (Y(e)) {
    const i = t[e];
    T(i) ? Sn(r, i) : a.NODE_ENV !== "production" && v(`Invalid watch handler specified by key "${e}"`, i);
  } else if (T(e))
    Sn(r, e.bind(n));
  else if (B(e))
    if (S(e))
      e.forEach((i) => si(i, t, n, o));
    else {
      const i = T(e.handler) ? e.handler.bind(n) : t[e.handler];
      T(i) ? Sn(r, i, e) : a.NODE_ENV !== "production" && v(`Invalid watch handler specified by key "${e.handler}"`, i);
    }
  else a.NODE_ENV !== "production" && v(`Invalid watch option: "${o}"`, e);
}
function Eo(e) {
  const t = e.type, { mixins: n, extends: o } = t, {
    mixins: r,
    optionsCache: i,
    config: { optionMergeStrategies: l }
  } = e.appContext, c = i.get(t);
  let f;
  return c ? f = c : !r.length && !n && !o ? f = t : (f = {}, r.length && r.forEach(
    (p) => cn(f, p, l, !0)
  ), cn(f, t, l)), B(t) && i.set(t, f), f;
}
function cn(e, t, n, o = !1) {
  const { mixins: r, extends: i } = t;
  i && cn(e, i, n, !0), r && r.forEach(
    (l) => cn(e, l, n, !0)
  );
  for (const l in t)
    if (o && l === "expose")
      a.NODE_ENV !== "production" && v(
        '"expose" option is ignored when declared in mixins or extends. It should only be declared in the base component itself.'
      );
    else {
      const c = wl[l] || n && n[l];
      e[l] = c ? c(e[l], t[l]) : t[l];
    }
  return e;
}
const wl = {
  data: qo,
  props: zo,
  emits: zo,
  // objects
  methods: St,
  computed: St,
  // lifecycle
  beforeCreate: le,
  created: le,
  beforeMount: le,
  mounted: le,
  beforeUpdate: le,
  updated: le,
  beforeDestroy: le,
  beforeUnmount: le,
  destroyed: le,
  unmounted: le,
  activated: le,
  deactivated: le,
  errorCaptured: le,
  serverPrefetch: le,
  // assets
  components: St,
  directives: St,
  // watch
  watch: xl,
  // provide / inject
  provide: qo,
  inject: Vl
};
function qo(e, t) {
  return t ? e ? function() {
    return G(
      T(e) ? e.call(this, this) : e,
      T(t) ? t.call(this, this) : t
    );
  } : t : e;
}
function Vl(e, t) {
  return St(kn(e), kn(t));
}
function kn(e) {
  if (S(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++)
      t[e[n]] = e[n];
    return t;
  }
  return e;
}
function le(e, t) {
  return e ? [...new Set([].concat(e, t))] : t;
}
function St(e, t) {
  return e ? G(/* @__PURE__ */ Object.create(null), e, t) : t;
}
function zo(e, t) {
  return e ? S(e) && S(t) ? [.../* @__PURE__ */ new Set([...e, ...t])] : G(
    /* @__PURE__ */ Object.create(null),
    Wo(e),
    Wo(t ?? {})
  ) : t;
}
function xl(e, t) {
  if (!e)
    return t;
  if (!t)
    return e;
  const n = G(/* @__PURE__ */ Object.create(null), e);
  for (const o in t)
    n[o] = le(e[o], t[o]);
  return n;
}
function li() {
  return {
    app: null,
    config: {
      isNativeTag: $i,
      performance: !1,
      globalProperties: {},
      optionMergeStrategies: {},
      errorHandler: void 0,
      warnHandler: void 0,
      compilerOptions: {}
    },
    mixins: [],
    components: {},
    directives: {},
    provides: /* @__PURE__ */ Object.create(null),
    optionsCache: /* @__PURE__ */ new WeakMap(),
    propsCache: /* @__PURE__ */ new WeakMap(),
    emitsCache: /* @__PURE__ */ new WeakMap()
  };
}
let Dl = 0;
function Cl(e, t) {
  return function(o, r = null) {
    T(o) || (o = G({}, o)), r != null && !B(r) && (a.NODE_ENV !== "production" && v("root props passed to app.mount() must be an object."), r = null);
    const i = li(), l = /* @__PURE__ */ new WeakSet();
    let c = !1;
    const f = i.app = {
      _uid: Dl++,
      _component: o,
      _props: r,
      _container: null,
      _context: i,
      _instance: null,
      version: rr,
      get config() {
        return i.config;
      },
      set config(p) {
        a.NODE_ENV !== "production" && v(
          "app.config cannot be replaced. Modify individual options instead."
        );
      },
      use(p, ...m) {
        return l.has(p) ? a.NODE_ENV !== "production" && v("Plugin has already been applied to target app.") : p && T(p.install) ? (l.add(p), p.install(f, ...m)) : T(p) ? (l.add(p), p(f, ...m)) : a.NODE_ENV !== "production" && v(
          'A plugin must either be a function or an object with an "install" function.'
        ), f;
      },
      mixin(p) {
        return i.mixins.includes(p) ? a.NODE_ENV !== "production" && v(
          "Mixin has already been applied to target app" + (p.name ? `: ${p.name}` : "")
        ) : i.mixins.push(p), f;
      },
      component(p, m) {
        return a.NODE_ENV !== "production" && Jn(p, i.config), m ? (a.NODE_ENV !== "production" && i.components[p] && v(`Component "${p}" has already been registered in target app.`), i.components[p] = m, f) : i.components[p];
      },
      directive(p, m) {
        return a.NODE_ENV !== "production" && ni(p), m ? (a.NODE_ENV !== "production" && i.directives[p] && v(`Directive "${p}" has already been registered in target app.`), i.directives[p] = m, f) : i.directives[p];
      },
      mount(p, m, d) {
        if (c)
          a.NODE_ENV !== "production" && v(
            "App has already been mounted.\nIf you want to remount the same app, move your app creation logic into a factory function and create fresh app instances for each mount - e.g. `const createMyApp = () => createApp(App)`"
          );
        else {
          a.NODE_ENV !== "production" && p.__vue_app__ && v(
            "There is already an app instance mounted on the host container.\n If you want to mount another app on the same host container, you need to unmount the previous app by calling `app.unmount()` first."
          );
          const b = Me(o, r);
          return b.appContext = i, d === !0 ? d = "svg" : d === !1 && (d = void 0), a.NODE_ENV !== "production" && (i.reload = () => {
            e(
              Ze(b),
              p,
              d
            );
          }), m && t ? t(b, p) : e(b, p, d), c = !0, f._container = p, p.__vue_app__ = f, a.NODE_ENV !== "production" && (f._instance = b.component, js(f, rr)), vo(b.component) || b.component.proxy;
        }
      },
      unmount() {
        c ? (e(null, f._container), a.NODE_ENV !== "production" && (f._instance = null, Ls(f)), delete f._container.__vue_app__) : a.NODE_ENV !== "production" && v("Cannot unmount an app that is not mounted.");
      },
      provide(p, m) {
        return a.NODE_ENV !== "production" && p in i.provides && v(
          `App already provides property with key "${String(p)}". It will be overwritten with the new value.`
        ), i.provides[p] = m, f;
      },
      runWithContext(p) {
        const m = It;
        It = f;
        try {
          return p();
        } finally {
          It = m;
        }
      }
    };
    return f;
  };
}
let It = null;
function Sl(e, t) {
  if (!Z)
    a.NODE_ENV !== "production" && v("provide() can only be used inside setup().");
  else {
    let n = Z.provides;
    const o = Z.parent && Z.parent.provides;
    o === n && (n = Z.provides = Object.create(o)), n[e] = t;
  }
}
function Qt(e, t, n = !1) {
  const o = Z || fe;
  if (o || It) {
    const r = o ? o.parent == null ? o.vnode.appContext && o.vnode.appContext.provides : o.parent.provides : It._context.provides;
    if (r && e in r)
      return r[e];
    if (arguments.length > 1)
      return n && T(t) ? t.call(o && o.proxy) : t;
    a.NODE_ENV !== "production" && v(`injection "${String(e)}" not found.`);
  } else a.NODE_ENV !== "production" && v("inject() can only be used inside setup() or functional components.");
}
const ci = {}, ui = () => Object.create(ci), fi = (e) => Object.getPrototypeOf(e) === ci;
function Tl(e, t, n, o = !1) {
  const r = {}, i = ui();
  e.propsDefaults = /* @__PURE__ */ Object.create(null), ai(e, t, r, i);
  for (const l in e.propsOptions[0])
    l in r || (r[l] = void 0);
  a.NODE_ENV !== "production" && pi(t || {}, r, e), n ? e.props = o ? r : gs(r) : e.type.props ? e.props = r : e.props = i, e.attrs = i;
}
function $l(e) {
  for (; e; ) {
    if (e.type.__hmrId)
      return !0;
    e = e.parent;
  }
}
function Il(e, t, n, o) {
  const {
    props: r,
    attrs: i,
    vnode: { patchFlag: l }
  } = e, c = P(r), [f] = e.propsOptions;
  let p = !1;
  if (
    // always force full diff in dev
    // - #1942 if hmr is enabled with sfc component
    // - vite#872 non-sfc component used by sfc component
    !(a.NODE_ENV !== "production" && $l(e)) && (o || l > 0) && !(l & 16)
  ) {
    if (l & 8) {
      const m = e.vnode.dynamicProps;
      for (let d = 0; d < m.length; d++) {
        let b = m[d];
        if (En(e.emitsOptions, b))
          continue;
        const x = t[b];
        if (f)
          if (M(i, b))
            x !== i[b] && (i[b] = x, p = !0);
          else {
            const A = De(b);
            r[A] = Wn(
              f,
              c,
              A,
              x,
              e,
              !1
            );
          }
        else
          x !== i[b] && (i[b] = x, p = !0);
      }
    }
  } else {
    ai(e, t, r, i) && (p = !0);
    let m;
    for (const d in c)
      (!t || // for camelCase
      !M(t, d) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((m = Ye(d)) === d || !M(t, m))) && (f ? n && // for camelCase
      (n[d] !== void 0 || // for kebab-case
      n[m] !== void 0) && (r[d] = Wn(
        f,
        c,
        d,
        void 0,
        e,
        !0
      )) : delete r[d]);
    if (i !== c)
      for (const d in i)
        (!t || !M(t, d)) && (delete i[d], p = !0);
  }
  p && xe(e.attrs, "set", ""), a.NODE_ENV !== "production" && pi(t || {}, r, e);
}
function ai(e, t, n, o) {
  const [r, i] = e.propsOptions;
  let l = !1, c;
  if (t)
    for (let f in t) {
      if (Tt(f))
        continue;
      const p = t[f];
      let m;
      r && M(r, m = De(f)) ? !i || !i.includes(m) ? n[m] = p : (c || (c = {}))[m] = p : En(e.emitsOptions, f) || (!(f in o) || p !== o[f]) && (o[f] = p, l = !0);
    }
  if (i) {
    const f = P(n), p = c || U;
    for (let m = 0; m < i.length; m++) {
      const d = i[m];
      n[d] = Wn(
        r,
        f,
        d,
        p[d],
        e,
        !M(p, d)
      );
    }
  }
  return l;
}
function Wn(e, t, n, o, r, i) {
  const l = e[n];
  if (l != null) {
    const c = M(l, "default");
    if (c && o === void 0) {
      const f = l.default;
      if (l.type !== Function && !l.skipFactory && T(f)) {
        const { propsDefaults: p } = r;
        if (n in p)
          o = p[n];
        else {
          const m = Ut(r);
          o = p[n] = f.call(
            null,
            t
          ), m();
        }
      } else
        o = f;
    }
    l[
      0
      /* shouldCast */
    ] && (i && !c ? o = !1 : l[
      1
      /* shouldCastTrue */
    ] && (o === "" || o === Ye(n)) && (o = !0));
  }
  return o;
}
function di(e, t, n = !1) {
  const o = t.propsCache, r = o.get(e);
  if (r)
    return r;
  const i = e.props, l = {}, c = [];
  let f = !1;
  if (!T(e)) {
    const m = (d) => {
      f = !0;
      const [b, x] = di(d, t, !0);
      G(l, b), x && c.push(...x);
    };
    !n && t.mixins.length && t.mixins.forEach(m), e.extends && m(e.extends), e.mixins && e.mixins.forEach(m);
  }
  if (!i && !f)
    return B(e) && o.set(e, gt), gt;
  if (S(i))
    for (let m = 0; m < i.length; m++) {
      a.NODE_ENV !== "production" && !Y(i[m]) && v("props must be strings when using array syntax.", i[m]);
      const d = De(i[m]);
      Jo(d) && (l[d] = U);
    }
  else if (i) {
    a.NODE_ENV !== "production" && !B(i) && v("invalid props options", i);
    for (const m in i) {
      const d = De(m);
      if (Jo(d)) {
        const b = i[m], x = l[d] = S(b) || T(b) ? { type: b } : G({}, b);
        if (x) {
          const A = Xo(Boolean, x.type), R = Xo(String, x.type);
          x[
            0
            /* shouldCast */
          ] = A > -1, x[
            1
            /* shouldCastTrue */
          ] = R < 0 || A < R, (A > -1 || M(x, "default")) && c.push(d);
        }
      }
    }
  }
  const p = [l, c];
  return B(e) && o.set(e, p), p;
}
function Jo(e) {
  return e[0] !== "$" && !Tt(e) ? !0 : (a.NODE_ENV !== "production" && v(`Invalid prop name: "${e}" is a reserved property.`), !1);
}
function Gn(e) {
  return e === null ? "null" : typeof e == "function" ? e.name || "" : typeof e == "object" && e.constructor && e.constructor.name || "";
}
function Yo(e, t) {
  return Gn(e) === Gn(t);
}
function Xo(e, t) {
  return S(t) ? t.findIndex((n) => Yo(n, e)) : T(t) && Yo(t, e) ? 0 : -1;
}
function pi(e, t, n) {
  const o = P(t), r = n.propsOptions[0];
  for (const i in r) {
    let l = r[i];
    l != null && Pl(
      i,
      o[i],
      l,
      a.NODE_ENV !== "production" ? Ve(o) : o,
      !M(e, i) && !M(e, Ye(i))
    );
  }
}
function Pl(e, t, n, o, r) {
  const { type: i, required: l, validator: c, skipCheck: f } = n;
  if (l && r) {
    v('Missing required prop: "' + e + '"');
    return;
  }
  if (!(t == null && !l)) {
    if (i != null && i !== !0 && !f) {
      let p = !1;
      const m = S(i) ? i : [i], d = [];
      for (let b = 0; b < m.length && !p; b++) {
        const { valid: x, expectedType: A } = Ml(t, m[b]);
        d.push(A || ""), p = x;
      }
      if (!p) {
        v(Rl(e, t, d));
        return;
      }
    }
    c && !c(t, o) && v('Invalid prop: custom validator check failed for prop "' + e + '".');
  }
}
const Al = /* @__PURE__ */ Re(
  "String,Number,Boolean,Function,Symbol,BigInt"
);
function Ml(e, t) {
  let n;
  const o = Gn(t);
  if (Al(o)) {
    const r = typeof e;
    n = r === o.toLowerCase(), !n && r === "object" && (n = e instanceof t);
  } else o === "Object" ? n = B(e) : o === "Array" ? n = S(e) : o === "null" ? n = e === null : n = e instanceof t;
  return {
    valid: n,
    expectedType: o
  };
}
function Rl(e, t, n) {
  if (n.length === 0)
    return `Prop type [] for prop "${e}" won't match anything. Did you mean to use type Array instead?`;
  let o = `Invalid prop: type check failed for prop "${e}". Expected ${n.map(ut).join(" | ")}`;
  const r = n[0], i = Qn(t), l = Zo(t, r), c = Zo(t, i);
  return n.length === 1 && Qo(r) && !Fl(r, i) && (o += ` with value ${l}`), o += `, got ${i} `, Qo(i) && (o += `with value ${c}.`), o;
}
function Zo(e, t) {
  return t === "String" ? `"${e}"` : t === "Number" ? `${Number(e)}` : `${e}`;
}
function Qo(e) {
  return ["string", "number", "boolean"].some((n) => e.toLowerCase() === n);
}
function Fl(...e) {
  return e.some((t) => t.toLowerCase() === "boolean");
}
const hi = (e) => e[0] === "_" || e === "$stable", No = (e) => S(e) ? e.map(me) : [me(e)], jl = (e, t, n) => {
  if (t._n)
    return t;
  const o = qs((...r) => (a.NODE_ENV !== "production" && Z && (!n || n.root === Z.root) && v(
    `Slot "${e}" invoked outside of the render function: this will not track dependencies used in the slot. Invoke the slot function inside the render function instead.`
  ), No(t(...r))), n);
  return o._c = !1, o;
}, mi = (e, t, n) => {
  const o = e._ctx;
  for (const r in e) {
    if (hi(r))
      continue;
    const i = e[r];
    if (T(i))
      t[r] = jl(r, i, o);
    else if (i != null) {
      a.NODE_ENV !== "production" && v(
        `Non-function value encountered for slot "${r}". Prefer function slots for better performance.`
      );
      const l = No(i);
      t[r] = () => l;
    }
  }
}, _i = (e, t) => {
  a.NODE_ENV !== "production" && !_o(e.vnode) && v(
    "Non-function value encountered for default slot. Prefer function slots for better performance."
  );
  const n = No(t);
  e.slots.default = () => n;
}, Ll = (e, t) => {
  const n = e.slots = ui();
  if (e.vnode.shapeFlag & 32) {
    const o = t._;
    o ? (G(n, t), Nr(n, "_", o, !0)) : mi(t, n);
  } else t && _i(e, t);
}, Hl = (e, t, n) => {
  const { vnode: o, slots: r } = e;
  let i = !0, l = U;
  if (o.shapeFlag & 32) {
    const c = t._;
    c ? a.NODE_ENV !== "production" && lt ? (G(r, t), xe(e, "set", "$slots")) : n && c === 1 ? i = !1 : (G(r, t), !n && c === 1 && delete r._) : (i = !t.$stable, mi(t, r)), l = t;
  } else t && (_i(e, t), l = { default: 1 });
  if (i)
    for (const c in r)
      !hi(c) && l[c] == null && delete r[c];
};
function qn(e, t, n, o, r = !1) {
  if (S(e)) {
    e.forEach(
      (b, x) => qn(
        b,
        t && (S(t) ? t[x] : t),
        n,
        o,
        r
      )
    );
    return;
  }
  if (Zt(o) && !r)
    return;
  const i = o.shapeFlag & 4 ? vo(o.component) || o.component.proxy : o.el, l = r ? null : i, { i: c, r: f } = e;
  if (a.NODE_ENV !== "production" && !c) {
    v(
      "Missing ref owner context. ref cannot be used on hoisted vnodes. A vnode with ref must be created inside the render function."
    );
    return;
  }
  const p = t && t.r, m = c.refs === U ? c.refs = {} : c.refs, d = c.setupState;
  if (p != null && p !== f && (Y(p) ? (m[p] = null, M(d, p) && (d[p] = null)) : oe(p) && (p.value = null)), T(f))
    Ae(f, c, 12, [l, m]);
  else {
    const b = Y(f), x = oe(f);
    if (b || x) {
      const A = () => {
        if (e.f) {
          const R = b ? M(d, f) ? d[f] : m[f] : f.value;
          r ? S(R) && Xn(R, i) : S(R) ? R.includes(i) || R.push(i) : b ? (m[f] = [i], M(d, f) && (d[f] = m[f])) : (f.value = [i], e.k && (m[e.k] = f.value));
        } else b ? (m[f] = l, M(d, f) && (d[f] = l)) : x ? (f.value = l, e.k && (m[e.k] = l)) : a.NODE_ENV !== "production" && v("Invalid template ref type:", f, `(${typeof f})`);
      };
      l ? (A.id = -1, ue(A, n)) : A();
    } else a.NODE_ENV !== "production" && v("Invalid template ref type:", f, `(${typeof f})`);
  }
}
let xt, qe;
function $e(e, t) {
  e.appContext.config.performance && un() && qe.mark(`vue-${t}-${e.uid}`), a.NODE_ENV !== "production" && Ks(e, t, un() ? qe.now() : Date.now());
}
function Ie(e, t) {
  if (e.appContext.config.performance && un()) {
    const n = `vue-${t}-${e.uid}`, o = n + ":end";
    qe.mark(o), qe.measure(
      `<${yn(e, e.type)}> ${t}`,
      n,
      o
    ), qe.clearMarks(n), qe.clearMarks(o);
  }
  a.NODE_ENV !== "production" && ks(e, t, un() ? qe.now() : Date.now());
}
function un() {
  return xt !== void 0 || (typeof window < "u" && window.performance ? (xt = !0, qe = window.performance) : xt = !1), xt;
}
function Ul() {
  const e = [];
  if (a.NODE_ENV !== "production" && e.length) {
    const t = e.length > 1;
    console.warn(
      `Feature flag${t ? "s" : ""} ${e.join(", ")} ${t ? "are" : "is"} not explicitly defined. You are running the esm-bundler build of Vue, which expects these compile-time feature flags to be globally injected via the bundler config in order to get better tree-shaking in the production bundle.

For more details, see https://link.vuejs.org/feature-flags.`
    );
  }
}
const ue = nl;
function Bl(e) {
  return Kl(e);
}
function Kl(e, t) {
  Ul();
  const n = to();
  n.__VUE__ = !0, a.NODE_ENV !== "production" && qr(n.__VUE_DEVTOOLS_GLOBAL_HOOK__, n);
  const {
    insert: o,
    remove: r,
    patchProp: i,
    createElement: l,
    createText: c,
    createComment: f,
    setText: p,
    setElementText: m,
    parentNode: d,
    nextSibling: b,
    setScopeId: x = J,
    insertStaticContent: A
  } = e, R = (s, u, h, _ = null, g = null, y = null, w = void 0, N = null, O = a.NODE_ENV !== "production" && lt ? !1 : !!u.dynamicChildren) => {
    if (s === u)
      return;
    s && !Dt(s, u) && (_ = Kt(s), Be(s, g, y, !0), s = null), u.patchFlag === -2 && (O = !1, u.dynamicChildren = null);
    const { type: E, ref: V, shapeFlag: C } = u;
    switch (E) {
      case Ht:
        Ce(s, u, h, _);
        break;
      case Ee:
        q(s, u, h, _);
        break;
      case tn:
        s == null ? X(u, h, _, w) : a.NODE_ENV !== "production" && k(s, u, h, w);
        break;
      case Oe:
        Bt(
          s,
          u,
          h,
          _,
          g,
          y,
          w,
          N,
          O
        );
        break;
      default:
        C & 1 ? ae(
          s,
          u,
          h,
          _,
          g,
          y,
          w,
          N,
          O
        ) : C & 6 ? Vo(
          s,
          u,
          h,
          _,
          g,
          y,
          w,
          N,
          O
        ) : C & 64 || C & 128 ? E.process(
          s,
          u,
          h,
          _,
          g,
          y,
          w,
          N,
          O,
          vt
        ) : a.NODE_ENV !== "production" && v("Invalid VNode type:", E, `(${typeof E})`);
    }
    V != null && g && qn(V, s && s.ref, y, u || s, !u);
  }, Ce = (s, u, h, _) => {
    if (s == null)
      o(
        u.el = c(u.children),
        h,
        _
      );
    else {
      const g = u.el = s.el;
      u.children !== s.children && p(g, u.children);
    }
  }, q = (s, u, h, _) => {
    s == null ? o(
      u.el = f(u.children || ""),
      h,
      _
    ) : u.el = s.el;
  }, X = (s, u, h, _) => {
    [s.el, s.anchor] = A(
      s.children,
      u,
      h,
      _,
      s.el,
      s.anchor
    );
  }, k = (s, u, h, _) => {
    if (u.children !== s.children) {
      const g = b(s.anchor);
      z(s), [u.el, u.anchor] = A(
        u.children,
        h,
        g,
        _
      );
    } else
      u.el = s.el, u.anchor = s.anchor;
  }, W = ({ el: s, anchor: u }, h, _) => {
    let g;
    for (; s && s !== u; )
      g = b(s), o(s, h, _), s = g;
    o(u, h, _);
  }, z = ({ el: s, anchor: u }) => {
    let h;
    for (; s && s !== u; )
      h = b(s), r(s), s = h;
    r(u);
  }, ae = (s, u, h, _, g, y, w, N, O) => {
    u.type === "svg" ? w = "svg" : u.type === "math" && (w = "mathml"), s == null ? I(
      u,
      h,
      _,
      g,
      y,
      w,
      N,
      O
    ) : Se(
      s,
      u,
      g,
      y,
      w,
      N,
      O
    );
  }, I = (s, u, h, _, g, y, w, N) => {
    let O, E;
    const { props: V, shapeFlag: C, transition: D, dirs: $ } = s;
    if (O = s.el = l(
      s.type,
      y,
      V && V.is,
      V
    ), C & 8 ? m(O, s.children) : C & 16 && ie(
      s.children,
      O,
      null,
      _,
      g,
      $n(s, y),
      w,
      N
    ), $ && et(s, null, _, "created"), re(O, s, s.scopeId, w, _), V) {
      for (const H in V)
        H !== "value" && !Tt(H) && i(
          O,
          H,
          null,
          V[H],
          y,
          s.children,
          _,
          g,
          Te
        );
      "value" in V && i(O, "value", null, V.value, y), (E = V.onVnodeBeforeMount) && ye(E, _, s);
    }
    a.NODE_ENV !== "production" && (Object.defineProperty(O, "__vnode", {
      value: s,
      enumerable: !1
    }), Object.defineProperty(O, "__vueParentComponent", {
      value: _,
      enumerable: !1
    })), $ && et(s, null, _, "beforeMount");
    const F = kl(g, D);
    F && D.beforeEnter(O), o(O, u, h), ((E = V && V.onVnodeMounted) || F || $) && ue(() => {
      E && ye(E, _, s), F && D.enter(O), $ && et(s, null, _, "mounted");
    }, g);
  }, re = (s, u, h, _, g) => {
    if (h && x(s, h), _)
      for (let y = 0; y < _.length; y++)
        x(s, _[y]);
    if (g) {
      let y = g.subTree;
      if (a.NODE_ENV !== "production" && y.patchFlag > 0 && y.patchFlag & 2048 && (y = mo(y.children) || y), u === y) {
        const w = g.vnode;
        re(
          s,
          w,
          w.scopeId,
          w.slotScopeIds,
          g.parent
        );
      }
    }
  }, ie = (s, u, h, _, g, y, w, N, O = 0) => {
    for (let E = O; E < s.length; E++) {
      const V = s[E] = N ? We(s[E]) : me(s[E]);
      R(
        null,
        V,
        u,
        h,
        _,
        g,
        y,
        w,
        N
      );
    }
  }, Se = (s, u, h, _, g, y, w) => {
    const N = u.el = s.el;
    let { patchFlag: O, dynamicChildren: E, dirs: V } = u;
    O |= s.patchFlag & 16;
    const C = s.props || U, D = u.props || U;
    let $;
    if (h && tt(h, !1), ($ = D.onVnodeBeforeUpdate) && ye($, h, u, s), V && et(u, s, h, "beforeUpdate"), h && tt(h, !0), a.NODE_ENV !== "production" && lt && (O = 0, w = !1, E = null), E ? (He(
      s.dynamicChildren,
      E,
      N,
      h,
      _,
      $n(u, g),
      y
    ), a.NODE_ENV !== "production" && en(s, u)) : w || Ne(
      s,
      u,
      N,
      null,
      h,
      _,
      $n(u, g),
      y,
      !1
    ), O > 0) {
      if (O & 16)
        de(
          N,
          u,
          C,
          D,
          h,
          _,
          g
        );
      else if (O & 2 && C.class !== D.class && i(N, "class", null, D.class, g), O & 4 && i(N, "style", C.style, D.style, g), O & 8) {
        const F = u.dynamicProps;
        for (let H = 0; H < F.length; H++) {
          const K = F[H], ee = C[K], pe = D[K];
          (pe !== ee || K === "value") && i(
            N,
            K,
            ee,
            pe,
            g,
            s.children,
            h,
            _,
            Te
          );
        }
      }
      O & 1 && s.children !== u.children && m(N, u.children);
    } else !w && E == null && de(
      N,
      u,
      C,
      D,
      h,
      _,
      g
    );
    (($ = D.onVnodeUpdated) || V) && ue(() => {
      $ && ye($, h, u, s), V && et(u, s, h, "updated");
    }, _);
  }, He = (s, u, h, _, g, y, w) => {
    for (let N = 0; N < u.length; N++) {
      const O = s[N], E = u[N], V = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        O.el && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        (O.type === Oe || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !Dt(O, E) || // - In the case of a component, it could contain anything.
        O.shapeFlag & 70) ? d(O.el) : (
          // In other cases, the parent container is not actually used so we
          // just pass the block element here to avoid a DOM parentNode call.
          h
        )
      );
      R(
        O,
        E,
        V,
        null,
        _,
        g,
        y,
        w,
        !0
      );
    }
  }, de = (s, u, h, _, g, y, w) => {
    if (h !== _) {
      if (h !== U)
        for (const N in h)
          !Tt(N) && !(N in _) && i(
            s,
            N,
            h[N],
            null,
            w,
            u.children,
            g,
            y,
            Te
          );
      for (const N in _) {
        if (Tt(N))
          continue;
        const O = _[N], E = h[N];
        O !== E && N !== "value" && i(
          s,
          N,
          E,
          O,
          w,
          u.children,
          g,
          y,
          Te
        );
      }
      "value" in _ && i(s, "value", h.value, _.value, w);
    }
  }, Bt = (s, u, h, _, g, y, w, N, O) => {
    const E = u.el = s ? s.el : c(""), V = u.anchor = s ? s.anchor : c("");
    let { patchFlag: C, dynamicChildren: D, slotScopeIds: $ } = u;
    a.NODE_ENV !== "production" && // #5523 dev root fragment may inherit directives
    (lt || C & 2048) && (C = 0, O = !1, D = null), $ && (N = N ? N.concat($) : $), s == null ? (o(E, h, _), o(V, h, _), ie(
      // #10007
      // such fragment like `<></>` will be compiled into
      // a fragment which doesn't have a children.
      // In this case fallback to an empty array
      u.children || [],
      h,
      V,
      g,
      y,
      w,
      N,
      O
    )) : C > 0 && C & 64 && D && // #2715 the previous fragment could've been a BAILed one as a result
    // of renderSlot() with no valid children
    s.dynamicChildren ? (He(
      s.dynamicChildren,
      D,
      h,
      g,
      y,
      w,
      N
    ), a.NODE_ENV !== "production" ? en(s, u) : (
      // #2080 if the stable fragment has a key, it's a <template v-for> that may
      //  get moved around. Make sure all root level vnodes inherit el.
      // #2134 or if it's a component root, it may also get moved around
      // as the component is being moved.
      (u.key != null || g && u === g.subTree) && en(
        s,
        u,
        !0
        /* shallow */
      )
    )) : Ne(
      s,
      u,
      h,
      V,
      g,
      y,
      w,
      N,
      O
    );
  }, Vo = (s, u, h, _, g, y, w, N, O) => {
    u.slotScopeIds = N, s == null ? u.shapeFlag & 512 ? g.ctx.activate(
      u,
      h,
      _,
      w,
      O
    ) : Ue(
      u,
      h,
      _,
      g,
      y,
      w,
      O
    ) : ce(s, u, O);
  }, Ue = (s, u, h, _, g, y, w) => {
    const N = s.component = Ql(
      s,
      _,
      g
    );
    if (a.NODE_ENV !== "production" && N.type.__hmrId && As(N), a.NODE_ENV !== "production" && (Yt(s), $e(N, "mount")), _o(s) && (N.ctx.renderer = vt), a.NODE_ENV !== "production" && $e(N, "init"), nc(N), a.NODE_ENV !== "production" && Ie(N, "init"), N.asyncDep) {
      if (g && g.registerDep(N, L), !s.el) {
        const O = N.subTree = Me(Ee);
        q(null, O, u, h);
      }
    } else
      L(
        N,
        s,
        u,
        h,
        g,
        y,
        w
      );
    a.NODE_ENV !== "production" && (Xt(), Ie(N, "mount"));
  }, ce = (s, u, h) => {
    const _ = u.component = s.component;
    if (Ys(s, u, h))
      if (_.asyncDep && !_.asyncResolved) {
        a.NODE_ENV !== "production" && Yt(u), j(_, u, h), a.NODE_ENV !== "production" && Xt();
        return;
      } else
        _.next = u, Is(_.update), _.effect.dirty = !0, _.update();
    else
      u.el = s.el, _.vnode = u;
  }, L = (s, u, h, _, g, y, w) => {
    const N = () => {
      if (s.isMounted) {
        let { next: V, bu: C, u: D, parent: $, vnode: F } = s;
        {
          const ht = gi(s);
          if (ht) {
            V && (V.el = F.el, j(s, V, w)), ht.asyncDep.then(() => {
              s.isUnmounted || N();
            });
            return;
          }
        }
        let H = V, K;
        a.NODE_ENV !== "production" && Yt(V || s.vnode), tt(s, !1), V ? (V.el = F.el, j(s, V, w)) : V = F, C && Vt(C), (K = V.props && V.props.onVnodeBeforeUpdate) && ye(K, $, V, F), tt(s, !0), a.NODE_ENV !== "production" && $e(s, "render");
        const ee = Cn(s);
        a.NODE_ENV !== "production" && Ie(s, "render");
        const pe = s.subTree;
        s.subTree = ee, a.NODE_ENV !== "production" && $e(s, "patch"), R(
          pe,
          ee,
          // parent may have changed if it's in a teleport
          d(pe.el),
          // anchor may have changed if it's in a fragment
          Kt(pe),
          s,
          g,
          y
        ), a.NODE_ENV !== "production" && Ie(s, "patch"), V.el = ee.el, H === null && Xs(s, ee.el), D && ue(D, g), (K = V.props && V.props.onVnodeUpdated) && ue(
          () => ye(K, $, V, F),
          g
        ), a.NODE_ENV !== "production" && zr(s), a.NODE_ENV !== "production" && Xt();
      } else {
        let V;
        const { el: C, props: D } = u, { bm: $, m: F, parent: H } = s, K = Zt(u);
        if (tt(s, !1), $ && Vt($), !K && (V = D && D.onVnodeBeforeMount) && ye(V, H, u), tt(s, !0), C && Co) {
          const ee = () => {
            a.NODE_ENV !== "production" && $e(s, "render"), s.subTree = Cn(s), a.NODE_ENV !== "production" && Ie(s, "render"), a.NODE_ENV !== "production" && $e(s, "hydrate"), Co(
              C,
              s.subTree,
              s,
              g,
              null
            ), a.NODE_ENV !== "production" && Ie(s, "hydrate");
          };
          K ? u.type.__asyncLoader().then(
            // note: we are moving the render call into an async callback,
            // which means it won't track dependencies - but it's ok because
            // a server-rendered async wrapper is already in resolved state
            // and it will never need to change.
            () => !s.isUnmounted && ee()
          ) : ee();
        } else {
          a.NODE_ENV !== "production" && $e(s, "render");
          const ee = s.subTree = Cn(s);
          a.NODE_ENV !== "production" && Ie(s, "render"), a.NODE_ENV !== "production" && $e(s, "patch"), R(
            null,
            ee,
            h,
            _,
            s,
            g,
            y
          ), a.NODE_ENV !== "production" && Ie(s, "patch"), u.el = ee.el;
        }
        if (F && ue(F, g), !K && (V = D && D.onVnodeMounted)) {
          const ee = u;
          ue(
            () => ye(V, H, ee),
            g
          );
        }
        (u.shapeFlag & 256 || H && Zt(H.vnode) && H.vnode.shapeFlag & 256) && s.a && ue(s.a, g), s.isMounted = !0, a.NODE_ENV !== "production" && Hs(s), u = h = _ = null;
      }
    }, O = s.effect = new oo(
      N,
      J,
      () => gn(E),
      s.scope
      // track it in component's effect scope
    ), E = s.update = () => {
      O.dirty && O.run();
    };
    E.id = s.uid, tt(s, !0), a.NODE_ENV !== "production" && (O.onTrack = s.rtc ? (V) => Vt(s.rtc, V) : void 0, O.onTrigger = s.rtg ? (V) => Vt(s.rtg, V) : void 0, E.ownerInstance = s), E();
  }, j = (s, u, h) => {
    u.component = s;
    const _ = s.vnode.props;
    s.vnode = u, s.next = null, Il(s, u.props, _, h), Hl(s, u.children, h), Fe(), Ho(s), je();
  }, Ne = (s, u, h, _, g, y, w, N, O = !1) => {
    const E = s && s.children, V = s ? s.shapeFlag : 0, C = u.children, { patchFlag: D, shapeFlag: $ } = u;
    if (D > 0) {
      if (D & 128) {
        Ot(
          E,
          C,
          h,
          _,
          g,
          y,
          w,
          N,
          O
        );
        return;
      } else if (D & 256) {
        On(
          E,
          C,
          h,
          _,
          g,
          y,
          w,
          N,
          O
        );
        return;
      }
    }
    $ & 8 ? (V & 16 && Te(E, g, y), C !== E && m(h, C)) : V & 16 ? $ & 16 ? Ot(
      E,
      C,
      h,
      _,
      g,
      y,
      w,
      N,
      O
    ) : Te(E, g, y, !0) : (V & 8 && m(h, ""), $ & 16 && ie(
      C,
      h,
      _,
      g,
      y,
      w,
      N,
      O
    ));
  }, On = (s, u, h, _, g, y, w, N, O) => {
    s = s || gt, u = u || gt;
    const E = s.length, V = u.length, C = Math.min(E, V);
    let D;
    for (D = 0; D < C; D++) {
      const $ = u[D] = O ? We(u[D]) : me(u[D]);
      R(
        s[D],
        $,
        h,
        null,
        g,
        y,
        w,
        N,
        O
      );
    }
    E > V ? Te(
      s,
      g,
      y,
      !0,
      !1,
      C
    ) : ie(
      u,
      h,
      _,
      g,
      y,
      w,
      N,
      O,
      C
    );
  }, Ot = (s, u, h, _, g, y, w, N, O) => {
    let E = 0;
    const V = u.length;
    let C = s.length - 1, D = V - 1;
    for (; E <= C && E <= D; ) {
      const $ = s[E], F = u[E] = O ? We(u[E]) : me(u[E]);
      if (Dt($, F))
        R(
          $,
          F,
          h,
          null,
          g,
          y,
          w,
          N,
          O
        );
      else
        break;
      E++;
    }
    for (; E <= C && E <= D; ) {
      const $ = s[C], F = u[D] = O ? We(u[D]) : me(u[D]);
      if (Dt($, F))
        R(
          $,
          F,
          h,
          null,
          g,
          y,
          w,
          N,
          O
        );
      else
        break;
      C--, D--;
    }
    if (E > C) {
      if (E <= D) {
        const $ = D + 1, F = $ < V ? u[$].el : _;
        for (; E <= D; )
          R(
            null,
            u[E] = O ? We(u[E]) : me(u[E]),
            h,
            F,
            g,
            y,
            w,
            N,
            O
          ), E++;
      }
    } else if (E > D)
      for (; E <= C; )
        Be(s[E], g, y, !0), E++;
    else {
      const $ = E, F = E, H = /* @__PURE__ */ new Map();
      for (E = F; E <= D; E++) {
        const se = u[E] = O ? We(u[E]) : me(u[E]);
        se.key != null && (a.NODE_ENV !== "production" && H.has(se.key) && v(
          "Duplicate keys found during update:",
          JSON.stringify(se.key),
          "Make sure keys are unique."
        ), H.set(se.key, E));
      }
      let K, ee = 0;
      const pe = D - F + 1;
      let ht = !1, So = 0;
      const wt = new Array(pe);
      for (E = 0; E < pe; E++)
        wt[E] = 0;
      for (E = $; E <= C; E++) {
        const se = s[E];
        if (ee >= pe) {
          Be(se, g, y, !0);
          continue;
        }
        let be;
        if (se.key != null)
          be = H.get(se.key);
        else
          for (K = F; K <= D; K++)
            if (wt[K - F] === 0 && Dt(se, u[K])) {
              be = K;
              break;
            }
        be === void 0 ? Be(se, g, y, !0) : (wt[be - F] = E + 1, be >= So ? So = be : ht = !0, R(
          se,
          u[be],
          h,
          null,
          g,
          y,
          w,
          N,
          O
        ), ee++);
      }
      const To = ht ? Wl(wt) : gt;
      for (K = To.length - 1, E = pe - 1; E >= 0; E--) {
        const se = F + E, be = u[se], $o = se + 1 < V ? u[se + 1].el : _;
        wt[E] === 0 ? R(
          null,
          be,
          h,
          $o,
          g,
          y,
          w,
          N,
          O
        ) : ht && (K < 0 || E !== To[K] ? pt(be, h, $o, 2) : K--);
      }
    }
  }, pt = (s, u, h, _, g = null) => {
    const { el: y, type: w, transition: N, children: O, shapeFlag: E } = s;
    if (E & 6) {
      pt(s.component.subTree, u, h, _);
      return;
    }
    if (E & 128) {
      s.suspense.move(u, h, _);
      return;
    }
    if (E & 64) {
      w.move(s, u, h, vt);
      return;
    }
    if (w === Oe) {
      o(y, u, h);
      for (let C = 0; C < O.length; C++)
        pt(O[C], u, h, _);
      o(s.anchor, u, h);
      return;
    }
    if (w === tn) {
      W(s, u, h);
      return;
    }
    if (_ !== 2 && E & 1 && N)
      if (_ === 0)
        N.beforeEnter(y), o(y, u, h), ue(() => N.enter(y), g);
      else {
        const { leave: C, delayLeave: D, afterLeave: $ } = N, F = () => o(y, u, h), H = () => {
          C(y, () => {
            F(), $ && $();
          });
        };
        D ? D(y, F, H) : H();
      }
    else
      o(y, u, h);
  }, Be = (s, u, h, _ = !1, g = !1) => {
    const {
      type: y,
      props: w,
      ref: N,
      children: O,
      dynamicChildren: E,
      shapeFlag: V,
      patchFlag: C,
      dirs: D
    } = s;
    if (N != null && qn(N, null, h, s, !0), V & 256) {
      u.ctx.deactivate(s);
      return;
    }
    const $ = V & 1 && D, F = !Zt(s);
    let H;
    if (F && (H = w && w.onVnodeBeforeUnmount) && ye(H, u, s), V & 6)
      Ti(s.component, h, _);
    else {
      if (V & 128) {
        s.suspense.unmount(h, _);
        return;
      }
      $ && et(s, null, u, "beforeUnmount"), V & 64 ? s.type.remove(
        s,
        u,
        h,
        g,
        vt,
        _
      ) : E && // #1153: fast path should not be taken for non-stable (v-for) fragments
      (y !== Oe || C > 0 && C & 64) ? Te(
        E,
        u,
        h,
        !1,
        !0
      ) : (y === Oe && C & 384 || !g && V & 16) && Te(O, u, h), _ && vn(s);
    }
    (F && (H = w && w.onVnodeUnmounted) || $) && ue(() => {
      H && ye(H, u, s), $ && et(s, null, u, "unmounted");
    }, h);
  }, vn = (s) => {
    const { type: u, el: h, anchor: _, transition: g } = s;
    if (u === Oe) {
      a.NODE_ENV !== "production" && s.patchFlag > 0 && s.patchFlag & 2048 && g && !g.persisted ? s.children.forEach((w) => {
        w.type === Ee ? r(w.el) : vn(w);
      }) : Si(h, _);
      return;
    }
    if (u === tn) {
      z(s);
      return;
    }
    const y = () => {
      r(h), g && !g.persisted && g.afterLeave && g.afterLeave();
    };
    if (s.shapeFlag & 1 && g && !g.persisted) {
      const { leave: w, delayLeave: N } = g, O = () => w(h, y);
      N ? N(s.el, y, O) : O();
    } else
      y();
  }, Si = (s, u) => {
    let h;
    for (; s !== u; )
      h = b(s), r(s), s = h;
    r(u);
  }, Ti = (s, u, h) => {
    a.NODE_ENV !== "production" && s.type.__hmrId && Ms(s);
    const { bum: _, scope: g, update: y, subTree: w, um: N } = s;
    _ && Vt(_), g.stop(), y && (y.active = !1, Be(w, s, u, h)), N && ue(N, u), ue(() => {
      s.isUnmounted = !0;
    }, u), u && u.pendingBranch && !u.isUnmounted && s.asyncDep && !s.asyncResolved && s.suspenseId === u.pendingId && (u.deps--, u.deps === 0 && u.resolve()), a.NODE_ENV !== "production" && Bs(s);
  }, Te = (s, u, h, _ = !1, g = !1, y = 0) => {
    for (let w = y; w < s.length; w++)
      Be(s[w], u, h, _, g);
  }, Kt = (s) => s.shapeFlag & 6 ? Kt(s.component.subTree) : s.shapeFlag & 128 ? s.suspense.next() : b(s.anchor || s.el);
  let wn = !1;
  const xo = (s, u, h) => {
    s == null ? u._vnode && Be(u._vnode, null, null, !0) : R(
      u._vnode || null,
      s,
      u,
      null,
      null,
      null,
      h
    ), wn || (wn = !0, Ho(), kr(), wn = !1), u._vnode = s;
  }, vt = {
    p: R,
    um: Be,
    m: pt,
    r: vn,
    mt: Ue,
    mc: ie,
    pc: Ne,
    pbc: He,
    n: Kt,
    o: e
  };
  let Do, Co;
  return {
    render: xo,
    hydrate: Do,
    createApp: Cl(xo, Do)
  };
}
function $n({ type: e, props: t }, n) {
  return n === "svg" && e === "foreignObject" || n === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html") ? void 0 : n;
}
function tt({ effect: e, update: t }, n) {
  e.allowRecurse = t.allowRecurse = n;
}
function kl(e, t) {
  return (!e || e && !e.pendingBranch) && t && !t.persisted;
}
function en(e, t, n = !1) {
  const o = e.children, r = t.children;
  if (S(o) && S(r))
    for (let i = 0; i < o.length; i++) {
      const l = o[i];
      let c = r[i];
      c.shapeFlag & 1 && !c.dynamicChildren && ((c.patchFlag <= 0 || c.patchFlag === 32) && (c = r[i] = We(r[i]), c.el = l.el), n || en(l, c)), c.type === Ht && (c.el = l.el), a.NODE_ENV !== "production" && c.type === Ee && !c.el && (c.el = l.el);
    }
}
function Wl(e) {
  const t = e.slice(), n = [0];
  let o, r, i, l, c;
  const f = e.length;
  for (o = 0; o < f; o++) {
    const p = e[o];
    if (p !== 0) {
      if (r = n[n.length - 1], e[r] < p) {
        t[o] = r, n.push(o);
        continue;
      }
      for (i = 0, l = n.length - 1; i < l; )
        c = i + l >> 1, e[n[c]] < p ? i = c + 1 : l = c;
      p < e[n[i]] && (i > 0 && (t[o] = n[i - 1]), n[i] = o);
    }
  }
  for (i = n.length, l = n[i - 1]; i-- > 0; )
    n[i] = l, l = t[l];
  return n;
}
function gi(e) {
  const t = e.subTree.component;
  if (t)
    return t.asyncDep && !t.asyncResolved ? t : gi(t);
}
const Gl = (e) => e.__isTeleport, Oe = Symbol.for("v-fgt"), Ht = Symbol.for("v-txt"), Ee = Symbol.for("v-cmt"), tn = Symbol.for("v-stc"), Pt = [];
let _e = null;
function Ei(e = !1) {
  Pt.push(_e = e ? null : []);
}
function ql() {
  Pt.pop(), _e = Pt[Pt.length - 1] || null;
}
let Rt = 1;
function er(e) {
  Rt += e;
}
function zl(e) {
  return e.dynamicChildren = Rt > 0 ? _e || gt : null, ql(), Rt > 0 && _e && _e.push(e), e;
}
function Ni(e, t, n, o, r, i) {
  return zl(
    yo(
      e,
      t,
      n,
      o,
      r,
      i,
      !0
    )
  );
}
function bo(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
function Dt(e, t) {
  return a.NODE_ENV !== "production" && t.shapeFlag & 6 && mt.has(t.type) ? (e.shapeFlag &= -257, t.shapeFlag &= -513, !1) : e.type === t.type && e.key === t.key;
}
const Jl = (...e) => yi(
  ...e
), bi = ({ key: e }) => e ?? null, nn = ({
  ref: e,
  ref_key: t,
  ref_for: n
}) => (typeof e == "number" && (e = "" + e), e != null ? Y(e) || oe(e) || T(e) ? { i: fe, r: e, k: t, f: !!n } : e : null);
function yo(e, t = null, n = null, o = 0, r = null, i = e === Oe ? 0 : 1, l = !1, c = !1) {
  const f = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && bi(t),
    ref: t && nn(t),
    scopeId: Xr,
    slotScopeIds: null,
    children: n,
    component: null,
    suspense: null,
    ssContent: null,
    ssFallback: null,
    dirs: null,
    transition: null,
    el: null,
    anchor: null,
    target: null,
    targetAnchor: null,
    staticCount: 0,
    shapeFlag: i,
    patchFlag: o,
    dynamicProps: r,
    dynamicChildren: null,
    appContext: null,
    ctx: fe
  };
  return c ? (Oo(f, n), i & 128 && e.normalize(f)) : n && (f.shapeFlag |= Y(n) ? 8 : 16), a.NODE_ENV !== "production" && f.key !== f.key && v("VNode created with invalid key (NaN). VNode type:", f.type), Rt > 0 && // avoid a block node from tracking itself
  !l && // has current parent block
  _e && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (f.patchFlag > 0 || i & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  f.patchFlag !== 32 && _e.push(f), f;
}
const Me = a.NODE_ENV !== "production" ? Jl : yi;
function yi(e, t = null, n = null, o = 0, r = null, i = !1) {
  if ((!e || e === Qs) && (a.NODE_ENV !== "production" && !e && v(`Invalid vnode type when creating vnode: ${e}.`), e = Ee), bo(e)) {
    const c = Ze(
      e,
      t,
      !0
      /* mergeRef: true */
    );
    return n && Oo(c, n), Rt > 0 && !i && _e && (c.shapeFlag & 6 ? _e[_e.indexOf(e)] = c : _e.push(c)), c.patchFlag |= -2, c;
  }
  if (Di(e) && (e = e.__vccOpts), t) {
    t = Yl(t);
    let { class: c, style: f } = t;
    c && !Y(c) && (t.class = pn(c)), B(f) && (jn(f) && !S(f) && (f = G({}, f)), t.style = no(f));
  }
  const l = Y(e) ? 1 : tl(e) ? 128 : Gl(e) ? 64 : B(e) ? 4 : T(e) ? 2 : 0;
  return a.NODE_ENV !== "production" && l & 4 && jn(e) && (e = P(e), v(
    "Vue received a Component that was made a reactive object. This can lead to unnecessary performance overhead and should be avoided by marking the component with `markRaw` or using `shallowRef` instead of `ref`.",
    `
Component that was made reactive: `,
    e
  )), yo(
    e,
    t,
    n,
    o,
    r,
    l,
    i,
    !0
  );
}
function Yl(e) {
  return e ? jn(e) || fi(e) ? G({}, e) : e : null;
}
function Ze(e, t, n = !1, o = !1) {
  const { props: r, ref: i, patchFlag: l, children: c, transition: f } = e, p = t ? wi(r || {}, t) : r, m = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: p,
    key: p && bi(p),
    ref: t && t.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      n && i ? S(i) ? i.concat(nn(t)) : [i, nn(t)] : nn(t)
    ) : i,
    scopeId: e.scopeId,
    slotScopeIds: e.slotScopeIds,
    children: a.NODE_ENV !== "production" && l === -1 && S(c) ? c.map(Oi) : c,
    target: e.target,
    targetAnchor: e.targetAnchor,
    staticCount: e.staticCount,
    shapeFlag: e.shapeFlag,
    // if the vnode is cloned with extra props, we can no longer assume its
    // existing patch flag to be reliable and need to add the FULL_PROPS flag.
    // note: preserve flag for fragments since they use the flag for children
    // fast paths only.
    patchFlag: t && e.type !== Oe ? l === -1 ? 16 : l | 16 : l,
    dynamicProps: e.dynamicProps,
    dynamicChildren: e.dynamicChildren,
    appContext: e.appContext,
    dirs: e.dirs,
    transition: f,
    // These should technically only be non-null on mounted VNodes. However,
    // they *should* be copied for kept-alive vnodes. So we just always copy
    // them since them being non-null during a mount doesn't affect the logic as
    // they will simply be overwritten.
    component: e.component,
    suspense: e.suspense,
    ssContent: e.ssContent && Ze(e.ssContent),
    ssFallback: e.ssFallback && Ze(e.ssFallback),
    el: e.el,
    anchor: e.anchor,
    ctx: e.ctx,
    ce: e.ce
  };
  return f && o && (m.transition = f.clone(m)), m;
}
function Oi(e) {
  const t = Ze(e);
  return S(e.children) && (t.children = e.children.map(Oi)), t;
}
function vi(e = " ", t = 0) {
  return Me(Ht, null, e, t);
}
function me(e) {
  return e == null || typeof e == "boolean" ? Me(Ee) : S(e) ? Me(
    Oe,
    null,
    // #3666, avoid reference pollution when reusing vnode
    e.slice()
  ) : typeof e == "object" ? We(e) : Me(Ht, null, String(e));
}
function We(e) {
  return e.el === null && e.patchFlag !== -1 || e.memo ? e : Ze(e);
}
function Oo(e, t) {
  let n = 0;
  const { shapeFlag: o } = e;
  if (t == null)
    t = null;
  else if (S(t))
    n = 16;
  else if (typeof t == "object")
    if (o & 65) {
      const r = t.default;
      r && (r._c && (r._d = !1), Oo(e, r()), r._c && (r._d = !0));
      return;
    } else {
      n = 32;
      const r = t._;
      !r && !fi(t) ? t._ctx = fe : r === 3 && fe && (fe.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
    }
  else T(t) ? (t = { default: t, _ctx: fe }, n = 32) : (t = String(t), o & 64 ? (n = 16, t = [vi(t)]) : n = 8);
  e.children = t, e.shapeFlag |= n;
}
function wi(...e) {
  const t = {};
  for (let n = 0; n < e.length; n++) {
    const o = e[n];
    for (const r in o)
      if (r === "class")
        t.class !== o.class && (t.class = pn([t.class, o.class]));
      else if (r === "style")
        t.style = no([t.style, o.style]);
      else if (Ft(r)) {
        const i = t[r], l = o[r];
        l && i !== l && !(S(i) && i.includes(l)) && (t[r] = i ? [].concat(i, l) : l);
      } else r !== "" && (t[r] = o[r]);
  }
  return t;
}
function ye(e, t, n, o = null) {
  ge(e, t, 7, [
    n,
    o
  ]);
}
const Xl = li();
let Zl = 0;
function Ql(e, t, n) {
  const o = e.type, r = (t ? t.appContext : e.appContext) || Xl, i = {
    uid: Zl++,
    vnode: e,
    type: o,
    parent: t,
    appContext: r,
    root: null,
    // to be immediately set
    next: null,
    subTree: null,
    // will be set synchronously right after creation
    effect: null,
    update: null,
    // will be set synchronously right after creation
    scope: new Ji(
      !0
      /* detached */
    ),
    render: null,
    proxy: null,
    exposed: null,
    exposeProxy: null,
    withProxy: null,
    provides: t ? t.provides : Object.create(r.provides),
    accessCache: null,
    renderCache: [],
    // local resolved assets
    components: null,
    directives: null,
    // resolved props and emits options
    propsOptions: di(o, r),
    emitsOptions: Yr(o, r),
    // emit
    emit: null,
    // to be set immediately
    emitted: null,
    // props default value
    propsDefaults: U,
    // inheritAttrs
    inheritAttrs: o.inheritAttrs,
    // state
    ctx: U,
    data: U,
    props: U,
    attrs: U,
    slots: U,
    refs: U,
    setupState: U,
    setupContext: null,
    attrsProxy: null,
    slotsProxy: null,
    // suspense related
    suspense: n,
    suspenseId: n ? n.pendingId : 0,
    asyncDep: null,
    asyncResolved: !1,
    // lifecycle hooks
    // not using enums here because it results in computed properties
    isMounted: !1,
    isUnmounted: !1,
    isDeactivated: !1,
    bc: null,
    c: null,
    bm: null,
    m: null,
    bu: null,
    u: null,
    um: null,
    bum: null,
    da: null,
    a: null,
    rtg: null,
    rtc: null,
    ec: null,
    sp: null
  };
  return a.NODE_ENV !== "production" ? i.ctx = El(i) : i.ctx = { _: i }, i.root = t ? t.root : i, i.emit = Gs.bind(null, i), e.ce && e.ce(i), i;
}
let Z = null;
const ec = () => Z || fe;
let fn, zn;
{
  const e = to(), t = (n, o) => {
    let r;
    return (r = e[n]) || (r = e[n] = []), r.push(o), (i) => {
      r.length > 1 ? r.forEach((l) => l(i)) : r[0](i);
    };
  };
  fn = t(
    "__VUE_INSTANCE_SETTERS__",
    (n) => Z = n
  ), zn = t(
    "__VUE_SSR_SETTERS__",
    (n) => bn = n
  );
}
const Ut = (e) => {
  const t = Z;
  return fn(e), e.scope.on(), () => {
    e.scope.off(), fn(t);
  };
}, tr = () => {
  Z && Z.scope.off(), fn(null);
}, tc = /* @__PURE__ */ Re("slot,component");
function Jn(e, { isNativeTag: t }) {
  (tc(e) || t(e)) && v(
    "Do not use built-in or reserved HTML elements as component id: " + e
  );
}
function Vi(e) {
  return e.vnode.shapeFlag & 4;
}
let bn = !1;
function nc(e, t = !1) {
  t && zn(t);
  const { props: n, children: o } = e.vnode, r = Vi(e);
  Tl(e, n, r, t), Ll(e, o);
  const i = r ? oc(e, t) : void 0;
  return t && zn(!1), i;
}
function oc(e, t) {
  var n;
  const o = e.type;
  if (a.NODE_ENV !== "production") {
    if (o.name && Jn(o.name, e.appContext.config), o.components) {
      const i = Object.keys(o.components);
      for (let l = 0; l < i.length; l++)
        Jn(i[l], e.appContext.config);
    }
    if (o.directives) {
      const i = Object.keys(o.directives);
      for (let l = 0; l < i.length; l++)
        ni(i[l]);
    }
    o.compilerOptions && rc() && v(
      '"compilerOptions" is only supported when using a build of Vue that includes the runtime compiler. Since you are using a runtime-only build, the options should be passed via your build tool config instead.'
    );
  }
  e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = new Proxy(e.ctx, ii), a.NODE_ENV !== "production" && Nl(e);
  const { setup: r } = o;
  if (r) {
    const i = e.setupContext = r.length > 1 ? sc(e) : null, l = Ut(e);
    Fe();
    const c = Ae(
      r,
      e,
      0,
      [
        a.NODE_ENV !== "production" ? Ve(e.props) : e.props,
        i
      ]
    );
    if (je(), l(), Zn(c)) {
      if (c.then(tr, tr), t)
        return c.then((f) => {
          nr(e, f, t);
        }).catch((f) => {
          jt(f, e, 0);
        });
      if (e.asyncDep = c, a.NODE_ENV !== "production" && !e.suspense) {
        const f = (n = o.name) != null ? n : "Anonymous";
        v(
          `Component <${f}>: setup function returned a promise, but no <Suspense> boundary was found in the parent component tree. A component with async setup() must be nested in a <Suspense> in order to be rendered.`
        );
      }
    } else
      nr(e, c, t);
  } else
    xi(e, t);
}
function nr(e, t, n) {
  T(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : B(t) ? (a.NODE_ENV !== "production" && bo(t) && v(
    "setup() should not return VNodes directly - return a render function instead."
  ), a.NODE_ENV !== "production" && (e.devtoolsRawSetupState = t), e.setupState = Lr(t), a.NODE_ENV !== "production" && bl(e)) : a.NODE_ENV !== "production" && t !== void 0 && v(
    `setup() should return an object. Received: ${t === null ? "null" : typeof t}`
  ), xi(e, n);
}
let Yn;
const rc = () => !Yn;
function xi(e, t, n) {
  const o = e.type;
  if (!e.render) {
    if (!t && Yn && !o.render) {
      const r = o.template || Eo(e).template;
      if (r) {
        a.NODE_ENV !== "production" && $e(e, "compile");
        const { isCustomElement: i, compilerOptions: l } = e.appContext.config, { delimiters: c, compilerOptions: f } = o, p = G(
          G(
            {
              isCustomElement: i,
              delimiters: c
            },
            l
          ),
          f
        );
        o.render = Yn(r, p), a.NODE_ENV !== "production" && Ie(e, "compile");
      }
    }
    e.render = o.render || J;
  }
  {
    const r = Ut(e);
    Fe();
    try {
      Ol(e);
    } finally {
      je(), r();
    }
  }
  a.NODE_ENV !== "production" && !o.render && e.render === J && !t && (o.template ? v(
    'Component provided template option but runtime compilation is not supported in this build of Vue. Configure your bundler to alias "vue" to "vue/dist/vue.esm-bundler.js".'
  ) : v("Component is missing template or render function."));
}
const or = a.NODE_ENV !== "production" ? {
  get(e, t) {
    return ln(), te(e, "get", ""), e[t];
  },
  set() {
    return v("setupContext.attrs is readonly."), !1;
  },
  deleteProperty() {
    return v("setupContext.attrs is readonly."), !1;
  }
} : {
  get(e, t) {
    return te(e, "get", ""), e[t];
  }
};
function ic(e) {
  return e.slotsProxy || (e.slotsProxy = new Proxy(e.slots, {
    get(t, n) {
      return te(e, "get", "$slots"), t[n];
    }
  }));
}
function sc(e) {
  const t = (n) => {
    if (a.NODE_ENV !== "production" && (e.exposed && v("expose() should be called only once per setup()."), n != null)) {
      let o = typeof n;
      o === "object" && (S(n) ? o = "array" : oe(n) && (o = "ref")), o !== "object" && v(
        `expose() should be passed a plain object, received ${o}.`
      );
    }
    e.exposed = n || {};
  };
  if (a.NODE_ENV !== "production") {
    let n;
    return Object.freeze({
      get attrs() {
        return n || (n = new Proxy(e.attrs, or));
      },
      get slots() {
        return ic(e);
      },
      get emit() {
        return (o, ...r) => e.emit(o, ...r);
      },
      expose: t
    });
  } else
    return {
      attrs: new Proxy(e.attrs, or),
      slots: e.slots,
      emit: e.emit,
      expose: t
    };
}
function vo(e) {
  if (e.exposed)
    return e.exposeProxy || (e.exposeProxy = new Proxy(Lr(Es(e.exposed)), {
      get(t, n) {
        if (n in t)
          return t[n];
        if (n in ct)
          return ct[n](e);
      },
      has(t, n) {
        return n in t || n in ct;
      }
    }));
}
const lc = /(?:^|[-_])(\w)/g, cc = (e) => e.replace(lc, (t) => t.toUpperCase()).replace(/[-_]/g, "");
function wo(e, t = !0) {
  return T(e) ? e.displayName || e.name : e.name || t && e.__name;
}
function yn(e, t, n = !1) {
  let o = wo(t);
  if (!o && t.__file) {
    const r = t.__file.match(/([^/\\]+)\.\w+$/);
    r && (o = r[1]);
  }
  if (!o && e && e.parent) {
    const r = (i) => {
      for (const l in i)
        if (i[l] === t)
          return l;
    };
    o = r(
      e.components || e.parent.type.components
    ) || r(e.appContext.components);
  }
  return o ? cc(o) : n ? "App" : "Anonymous";
}
function Di(e) {
  return T(e) && "__vccOpts" in e;
}
const uc = (e, t) => {
  const n = bs(e, t, bn);
  if (a.NODE_ENV !== "production") {
    const o = ec();
    o && o.appContext.config.warnRecursiveComputed && (n._warnRecursive = !0);
  }
  return n;
};
function fc() {
  if (a.NODE_ENV === "production" || typeof window > "u")
    return;
  const e = { style: "color:#3ba776" }, t = { style: "color:#1677ff" }, n = { style: "color:#f5222d" }, o = { style: "color:#eb2f96" }, r = {
    header(d) {
      return B(d) ? d.__isVue ? ["div", e, "VueInstance"] : oe(d) ? [
        "div",
        {},
        ["span", e, m(d)],
        "<",
        c(d.value),
        ">"
      ] : Et(d) ? [
        "div",
        {},
        ["span", e, Nt(d) ? "ShallowReactive" : "Reactive"],
        "<",
        c(d),
        `>${yt(d) ? " (readonly)" : ""}`
      ] : yt(d) ? [
        "div",
        {},
        ["span", e, Nt(d) ? "ShallowReadonly" : "Readonly"],
        "<",
        c(d),
        ">"
      ] : null : null;
    },
    hasBody(d) {
      return d && d.__isVue;
    },
    body(d) {
      if (d && d.__isVue)
        return [
          "div",
          {},
          ...i(d.$)
        ];
    }
  };
  function i(d) {
    const b = [];
    d.type.props && d.props && b.push(l("props", P(d.props))), d.setupState !== U && b.push(l("setup", d.setupState)), d.data !== U && b.push(l("data", P(d.data)));
    const x = f(d, "computed");
    x && b.push(l("computed", x));
    const A = f(d, "inject");
    return A && b.push(l("injected", A)), b.push([
      "div",
      {},
      [
        "span",
        {
          style: o.style + ";opacity:0.66"
        },
        "$ (internal): "
      ],
      ["object", { object: d }]
    ]), b;
  }
  function l(d, b) {
    return b = G({}, b), Object.keys(b).length ? [
      "div",
      { style: "line-height:1.25em;margin-bottom:0.6em" },
      [
        "div",
        {
          style: "color:#476582"
        },
        d
      ],
      [
        "div",
        {
          style: "padding-left:1.25em"
        },
        ...Object.keys(b).map((x) => [
          "div",
          {},
          ["span", o, x + ": "],
          c(b[x], !1)
        ])
      ]
    ] : ["span", {}];
  }
  function c(d, b = !0) {
    return typeof d == "number" ? ["span", t, d] : typeof d == "string" ? ["span", n, JSON.stringify(d)] : typeof d == "boolean" ? ["span", o, d] : B(d) ? ["object", { object: b ? P(d) : d }] : ["span", n, String(d)];
  }
  function f(d, b) {
    const x = d.type;
    if (T(x))
      return;
    const A = {};
    for (const R in d.ctx)
      p(x, R, b) && (A[R] = d.ctx[R]);
    return A;
  }
  function p(d, b, x) {
    const A = d[x];
    if (S(A) && A.includes(b) || B(A) && b in A || d.extends && p(d.extends, b, x) || d.mixins && d.mixins.some((R) => p(R, b, x)))
      return !0;
  }
  function m(d) {
    return Nt(d) ? "ShallowRef" : d.effect ? "ComputedRef" : "Ref";
  }
  window.devtoolsFormatters ? window.devtoolsFormatters.push(r) : window.devtoolsFormatters = [r];
}
const rr = "3.4.27", Je = a.NODE_ENV !== "production" ? v : J;
var Qe = {};
const ac = "http://www.w3.org/2000/svg", dc = "http://www.w3.org/1998/Math/MathML", Ge = typeof document < "u" ? document : null, ir = Ge && /* @__PURE__ */ Ge.createElement("template"), pc = {
  insert: (e, t, n) => {
    t.insertBefore(e, n || null);
  },
  remove: (e) => {
    const t = e.parentNode;
    t && t.removeChild(e);
  },
  createElement: (e, t, n, o) => {
    const r = t === "svg" ? Ge.createElementNS(ac, e) : t === "mathml" ? Ge.createElementNS(dc, e) : Ge.createElement(e, n ? { is: n } : void 0);
    return e === "select" && o && o.multiple != null && r.setAttribute("multiple", o.multiple), r;
  },
  createText: (e) => Ge.createTextNode(e),
  createComment: (e) => Ge.createComment(e),
  setText: (e, t) => {
    e.nodeValue = t;
  },
  setElementText: (e, t) => {
    e.textContent = t;
  },
  parentNode: (e) => e.parentNode,
  nextSibling: (e) => e.nextSibling,
  querySelector: (e) => Ge.querySelector(e),
  setScopeId(e, t) {
    e.setAttribute(t, "");
  },
  // __UNSAFE__
  // Reason: innerHTML.
  // Static content here can only come from compiled templates.
  // As long as the user only uses trusted templates, this is safe.
  insertStaticContent(e, t, n, o, r, i) {
    const l = n ? n.previousSibling : t.lastChild;
    if (r && (r === i || r.nextSibling))
      for (; t.insertBefore(r.cloneNode(!0), n), !(r === i || !(r = r.nextSibling)); )
        ;
    else {
      ir.innerHTML = o === "svg" ? `<svg>${e}</svg>` : o === "mathml" ? `<math>${e}</math>` : e;
      const c = ir.content;
      if (o === "svg" || o === "mathml") {
        const f = c.firstChild;
        for (; f.firstChild; )
          c.appendChild(f.firstChild);
        c.removeChild(f);
      }
      t.insertBefore(c, n);
    }
    return [
      // first
      l ? l.nextSibling : t.firstChild,
      // last
      n ? n.previousSibling : t.lastChild
    ];
  }
}, hc = Symbol("_vtc");
function mc(e, t, n) {
  const o = e[hc];
  o && (t = (t ? [t, ...o] : [...o]).join(" ")), t == null ? e.removeAttribute("class") : n ? e.setAttribute("class", t) : e.className = t;
}
const sr = Symbol("_vod"), _c = Symbol("_vsh"), gc = Symbol(Qe.NODE_ENV !== "production" ? "CSS_VAR_TEXT" : ""), Ec = /(^|;)\s*display\s*:/;
function Nc(e, t, n) {
  const o = e.style, r = Y(n);
  let i = !1;
  if (n && !r) {
    if (t)
      if (Y(t))
        for (const l of t.split(";")) {
          const c = l.slice(0, l.indexOf(":")).trim();
          n[c] == null && on(o, c, "");
        }
      else
        for (const l in t)
          n[l] == null && on(o, l, "");
    for (const l in n)
      l === "display" && (i = !0), on(o, l, n[l]);
  } else if (r) {
    if (t !== n) {
      const l = o[gc];
      l && (n += ";" + l), o.cssText = n, i = Ec.test(n);
    }
  } else t && e.removeAttribute("style");
  sr in e && (e[sr] = i ? o.display : "", e[_c] && (o.display = "none"));
}
const bc = /[^\\];\s*$/, lr = /\s*!important$/;
function on(e, t, n) {
  if (S(n))
    n.forEach((o) => on(e, t, o));
  else if (n == null && (n = ""), Qe.NODE_ENV !== "production" && bc.test(n) && Je(
    `Unexpected semicolon at the end of '${t}' style value: '${n}'`
  ), t.startsWith("--"))
    e.setProperty(t, n);
  else {
    const o = yc(e, t);
    lr.test(n) ? e.setProperty(
      Ye(o),
      n.replace(lr, ""),
      "important"
    ) : e[o] = n;
  }
}
const cr = ["Webkit", "Moz", "ms"], In = {};
function yc(e, t) {
  const n = In[t];
  if (n)
    return n;
  let o = De(t);
  if (o !== "filter" && o in e)
    return In[t] = o;
  o = ut(o);
  for (let r = 0; r < cr.length; r++) {
    const i = cr[r] + o;
    if (i in e)
      return In[t] = i;
  }
  return t;
}
const ur = "http://www.w3.org/1999/xlink";
function Oc(e, t, n, o, r) {
  if (o && t.startsWith("xlink:"))
    n == null ? e.removeAttributeNS(ur, t.slice(6, t.length)) : e.setAttributeNS(ur, t, n);
  else {
    const i = zi(t);
    n == null || i && !br(n) ? e.removeAttribute(t) : e.setAttribute(t, i ? "" : n);
  }
}
function vc(e, t, n, o, r, i, l) {
  if (t === "innerHTML" || t === "textContent") {
    o && l(o, r, i), e[t] = n ?? "";
    return;
  }
  const c = e.tagName;
  if (t === "value" && c !== "PROGRESS" && // custom elements may use _value internally
  !c.includes("-")) {
    const p = c === "OPTION" ? e.getAttribute("value") || "" : e.value, m = n ?? "";
    (p !== m || !("_value" in e)) && (e.value = m), n == null && e.removeAttribute(t), e._value = n;
    return;
  }
  let f = !1;
  if (n === "" || n == null) {
    const p = typeof e[t];
    p === "boolean" ? n = br(n) : n == null && p === "string" ? (n = "", f = !0) : p === "number" && (n = 0, f = !0);
  }
  try {
    e[t] = n;
  } catch (p) {
    Qe.NODE_ENV !== "production" && !f && Je(
      `Failed setting prop "${t}" on <${c.toLowerCase()}>: value ${n} is invalid.`,
      p
    );
  }
  f && e.removeAttribute(t);
}
function wc(e, t, n, o) {
  e.addEventListener(t, n, o);
}
function Vc(e, t, n, o) {
  e.removeEventListener(t, n, o);
}
const fr = Symbol("_vei");
function xc(e, t, n, o, r = null) {
  const i = e[fr] || (e[fr] = {}), l = i[t];
  if (o && l)
    l.value = Qe.NODE_ENV !== "production" ? dr(o, t) : o;
  else {
    const [c, f] = Dc(t);
    if (o) {
      const p = i[t] = Tc(
        Qe.NODE_ENV !== "production" ? dr(o, t) : o,
        r
      );
      wc(e, c, p, f);
    } else l && (Vc(e, c, l, f), i[t] = void 0);
  }
}
const ar = /(?:Once|Passive|Capture)$/;
function Dc(e) {
  let t;
  if (ar.test(e)) {
    t = {};
    let o;
    for (; o = e.match(ar); )
      e = e.slice(0, e.length - o[0].length), t[o[0].toLowerCase()] = !0;
  }
  return [e[2] === ":" ? e.slice(3) : Ye(e.slice(2)), t];
}
let Pn = 0;
const Cc = /* @__PURE__ */ Promise.resolve(), Sc = () => Pn || (Cc.then(() => Pn = 0), Pn = Date.now());
function Tc(e, t) {
  const n = (o) => {
    if (!o._vts)
      o._vts = Date.now();
    else if (o._vts <= n.attached)
      return;
    ge(
      $c(o, n.value),
      t,
      5,
      [o]
    );
  };
  return n.value = e, n.attached = Sc(), n;
}
function dr(e, t) {
  return T(e) || S(e) ? e : (Je(
    `Wrong type passed as event handler to ${t} - did you forget @ or : in front of your prop?
Expected function or array of functions, received type ${typeof e}.`
  ), J);
}
function $c(e, t) {
  if (S(t)) {
    const n = e.stopImmediatePropagation;
    return e.stopImmediatePropagation = () => {
      n.call(e), e._stopped = !0;
    }, t.map(
      (o) => (r) => !r._stopped && o && o(r)
    );
  } else
    return t;
}
const pr = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // lowercase letter
e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123, Ic = (e, t, n, o, r, i, l, c, f) => {
  const p = r === "svg";
  t === "class" ? mc(e, o, p) : t === "style" ? Nc(e, n, o) : Ft(t) ? rn(t) || xc(e, t, n, o, l) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : Pc(e, t, o, p)) ? vc(
    e,
    t,
    o,
    i,
    l,
    c,
    f
  ) : (t === "true-value" ? e._trueValue = o : t === "false-value" && (e._falseValue = o), Oc(e, t, o, p));
};
function Pc(e, t, n, o) {
  if (o)
    return !!(t === "innerHTML" || t === "textContent" || t in e && pr(t) && T(n));
  if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA")
    return !1;
  if (t === "width" || t === "height") {
    const r = e.tagName;
    if (r === "IMG" || r === "VIDEO" || r === "CANVAS" || r === "SOURCE")
      return !1;
  }
  return pr(t) && Y(n) ? !1 : t in e;
}
const Ac = /* @__PURE__ */ G({ patchProp: Ic }, pc);
let hr;
function Mc() {
  return hr || (hr = Bl(Ac));
}
const Rc = (...e) => {
  const t = Mc().createApp(...e);
  Qe.NODE_ENV !== "production" && (jc(t), Lc(t));
  const { mount: n } = t;
  return t.mount = (o) => {
    const r = Hc(o);
    if (!r)
      return;
    const i = t._component;
    !T(i) && !i.render && !i.template && (i.template = r.innerHTML), r.innerHTML = "";
    const l = n(r, !1, Fc(r));
    return r instanceof Element && (r.removeAttribute("v-cloak"), r.setAttribute("data-v-app", "")), l;
  }, t;
};
function Fc(e) {
  if (e instanceof SVGElement)
    return "svg";
  if (typeof MathMLElement == "function" && e instanceof MathMLElement)
    return "mathml";
}
function jc(e) {
  Object.defineProperty(e.config, "isNativeTag", {
    value: (t) => ki(t) || Wi(t) || Gi(t),
    writable: !1
  });
}
function Lc(e) {
  {
    const t = e.config.isCustomElement;
    Object.defineProperty(e.config, "isCustomElement", {
      get() {
        return t;
      },
      set() {
        Je(
          "The `isCustomElement` config option is deprecated. Use `compilerOptions.isCustomElement` instead."
        );
      }
    });
    const n = e.config.compilerOptions, o = 'The `compilerOptions` config option is only respected when using a build of Vue.js that includes the runtime compiler (aka "full build"). Since you are using the runtime-only build, `compilerOptions` must be passed to `@vue/compiler-dom` in the build setup instead.\n- For vue-loader: pass it via vue-loader\'s `compilerOptions` loader option.\n- For vue-cli: see https://cli.vuejs.org/guide/webpack.html#modifying-options-of-a-loader\n- For vite: pass it via @vitejs/plugin-vue options. See https://github.com/vitejs/vite-plugin-vue/tree/main/packages/plugin-vue#example-for-passing-options-to-vuecompiler-sfc';
    Object.defineProperty(e.config, "compilerOptions", {
      get() {
        return Je(o), n;
      },
      set() {
        Je(o);
      }
    });
  }
}
function Hc(e) {
  if (Y(e)) {
    const t = document.querySelector(e);
    return Qe.NODE_ENV !== "production" && !t && Je(
      `Failed to mount app: mount target selector "${e}" returned null.`
    ), t;
  }
  return Qe.NODE_ENV !== "production" && window.ShadowRoot && e instanceof window.ShadowRoot && e.mode === "closed" && Je(
    'mounting on a ShadowRoot with `{mode: "closed"}` may lead to unpredictable bugs'
  ), e;
}
var Uc = {};
function Bc() {
  fc();
}
Uc.NODE_ENV !== "production" && Bc();
const Ci = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [o, r] of t)
    n[o] = r;
  return n;
}, Kc = {
  name: "FormControl",
  inheritAttrs: !1,
  props: {
    message: {
      type: String,
      default: null
    },
    state: {
      type: String,
      default: null,
      validator: (e) => ["info", "warning", "success", "error"].includes(e)
    }
  },
  computed: {
    formControlClasses() {
      let e = [];
      return e.push(this.state), e;
    }
  }
}, kc = { class: "field-message" };
function Wc(e, t, n, o, r, i) {
  const l = Qr("gng-form-element");
  return Ei(), Ni("div", {
    class: pn(["form-control", i.formControlClasses])
  }, [
    Me(l, wi({ state: n.state }, e.$attrs), null, 16, ["state"]),
    yo("div", kc, yr(n.message), 1)
  ], 2);
}
const Gc = /* @__PURE__ */ Ci(Kc, [["render", Wc]]), qc = {
  mounted() {
    console.log("Component mounted");
  },
  data() {
    return {
      text: null
    };
  }
}, zc = { class: "p-4" };
function Jc(e, t, n, o, r, i) {
  const l = Qr("gng-form-control");
  return Ei(), Ni("div", zc, [
    vi(" YO: " + yr(r.text) + " dsds ", 1),
    Me(l, { label: "dsdsdsd" })
  ]);
}
const Yc = /* @__PURE__ */ Ci(qc, [["render", Jc]]);
function Xc() {
  customElements.define(
    "exp-626",
    class extends HTMLElement {
      connectedCallback() {
        const e = Rc(Yc, {
          type: this.getAttribute("type") || "sliders"
        });
        e.component("gng-form-control", Gc);
        const t = document.createElement("div");
        this.appendChild(t), e.mount(t);
      }
    }
  );
}
export {
  Xc as registerCustomComponent
};
