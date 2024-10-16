var So = {};
/**
* @vue/shared v3.4.27
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function dt(e, t) {
  const n = new Set(e.split(","));
  return (i) => n.has(i);
}
const ae = So.NODE_ENV !== "production" ? Object.freeze({}) : {}, tn = So.NODE_ENV !== "production" ? Object.freeze([]) : [], he = () => {
}, xa = () => !1, Mn = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // uppercase letter
(e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), li = (e) => e.startsWith("onUpdate:"), fe = Object.assign, Ms = (e, t) => {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}, Ta = Object.prototype.hasOwnProperty, se = (e, t) => Ta.call(e, t), Z = Array.isArray, Vt = (e) => yi(e) === "[object Map]", xo = (e) => yi(e) === "[object Set]", Q = (e) => typeof e == "function", de = (e) => typeof e == "string", Yt = (e) => typeof e == "symbol", le = (e) => e !== null && typeof e == "object", As = (e) => (le(e) || Q(e)) && Q(e.then) && Q(e.catch), To = Object.prototype.toString, yi = (e) => To.call(e), Ls = (e) => yi(e).slice(8, -1), Oo = (e) => yi(e) === "[object Object]", Is = (e) => de(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, bn = /* @__PURE__ */ dt(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), Oa = /* @__PURE__ */ dt(
  "bind,cloak,else-if,else,for,html,if,model,on,once,pre,show,slot,text,memo"
), Ei = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return (n) => t[n] || (t[n] = e(n));
}, Ca = /-(\w)/g, et = Ei((e) => e.replace(Ca, (t, n) => n ? n.toUpperCase() : "")), Na = /\B([A-Z])/g, Tt = Ei(
  (e) => e.replace(Na, "-$1").toLowerCase()
), Gt = Ei((e) => e.charAt(0).toUpperCase() + e.slice(1)), Lt = Ei((e) => e ? `on${Gt(e)}` : ""), Ot = (e, t) => !Object.is(e, t), fn = (e, t) => {
  for (let n = 0; n < e.length; n++)
    e[n](t);
}, Co = (e, t, n, i = !1) => {
  Object.defineProperty(e, t, {
    configurable: !0,
    enumerable: !1,
    writable: i,
    value: n
  });
}, Pa = (e) => {
  const t = parseFloat(e);
  return isNaN(t) ? e : t;
};
let br;
const Rs = () => br || (br = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function An(e) {
  if (Z(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
      const i = e[n], s = de(i) ? La(i) : An(i);
      if (s)
        for (const r in s)
          t[r] = s[r];
    }
    return t;
  } else if (de(e) || le(e))
    return e;
}
const Da = /;(?![^(]*\))/g, Ma = /:([^]+)/, Aa = /\/\*[^]*?\*\//g;
function La(e) {
  const t = {};
  return e.replace(Aa, "").split(Da).forEach((n) => {
    if (n) {
      const i = n.split(Ma);
      i.length > 1 && (t[i[0].trim()] = i[1].trim());
    }
  }), t;
}
function Dt(e) {
  let t = "";
  if (de(e))
    t = e;
  else if (Z(e))
    for (let n = 0; n < e.length; n++) {
      const i = Dt(e[n]);
      i && (t += i + " ");
    }
  else if (le(e))
    for (const n in e)
      e[n] && (t += n + " ");
  return t.trim();
}
function ai(e) {
  if (!e)
    return null;
  let { class: t, style: n } = e;
  return t && !de(t) && (e.class = Dt(t)), n && (e.style = An(n)), e;
}
const Ia = "html,body,base,head,link,meta,style,title,address,article,aside,footer,header,hgroup,h1,h2,h3,h4,h5,h6,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,summary,template,blockquote,iframe,tfoot", Ra = "svg,animate,animateMotion,animateTransform,circle,clipPath,color-profile,defs,desc,discard,ellipse,feBlend,feColorMatrix,feComponentTransfer,feComposite,feConvolveMatrix,feDiffuseLighting,feDisplacementMap,feDistantLight,feDropShadow,feFlood,feFuncA,feFuncB,feFuncG,feFuncR,feGaussianBlur,feImage,feMerge,feMergeNode,feMorphology,feOffset,fePointLight,feSpecularLighting,feSpotLight,feTile,feTurbulence,filter,foreignObject,g,hatch,hatchpath,image,line,linearGradient,marker,mask,mesh,meshgradient,meshpatch,meshrow,metadata,mpath,path,pattern,polygon,polyline,radialGradient,rect,set,solidcolor,stop,switch,symbol,text,textPath,title,tspan,unknown,use,view", Va = "annotation,annotation-xml,maction,maligngroup,malignmark,math,menclose,merror,mfenced,mfrac,mfraction,mglyph,mi,mlabeledtr,mlongdiv,mmultiscripts,mn,mo,mover,mpadded,mphantom,mprescripts,mroot,mrow,ms,mscarries,mscarry,msgroup,msline,mspace,msqrt,msrow,mstack,mstyle,msub,msubsup,msup,mtable,mtd,mtext,mtr,munder,munderover,none,semantics", $a = /* @__PURE__ */ dt(Ia), Fa = /* @__PURE__ */ dt(Ra), Ba = /* @__PURE__ */ dt(Va), za = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", ka = /* @__PURE__ */ dt(za);
function No(e) {
  return !!e || e === "";
}
const wi = (e) => de(e) ? e : e == null ? "" : Z(e) || le(e) && (e.toString === To || !Q(e.toString)) ? JSON.stringify(e, Po, 2) : String(e), Po = (e, t) => t && t.__v_isRef ? Po(e, t.value) : Vt(t) ? {
  [`Map(${t.size})`]: [...t.entries()].reduce(
    (n, [i, s], r) => (n[Fi(i, r) + " =>"] = s, n),
    {}
  )
} : xo(t) ? {
  [`Set(${t.size})`]: [...t.values()].map((n) => Fi(n))
} : Yt(t) ? Fi(t) : le(t) && !Z(t) && !Oo(t) ? String(t) : t, Fi = (e, t = "") => {
  var n;
  return (
    // Symbol.description in es2019+ so we need to cast here to pass
    // the lib: es2016 check
    Yt(e) ? `Symbol(${(n = e.description) != null ? n : t})` : e
  );
};
var be = {};
function Ct(e, ...t) {
  console.warn(`[Vue warn] ${e}`, ...t);
}
let ze;
class ja {
  constructor(t = !1) {
    this.detached = t, this._active = !0, this.effects = [], this.cleanups = [], this.parent = ze, !t && ze && (this.index = (ze.scopes || (ze.scopes = [])).push(
      this
    ) - 1);
  }
  get active() {
    return this._active;
  }
  run(t) {
    if (this._active) {
      const n = ze;
      try {
        return ze = this, t();
      } finally {
        ze = n;
      }
    } else be.NODE_ENV !== "production" && Ct("cannot run an inactive effect scope.");
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  on() {
    ze = this;
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  off() {
    ze = this.parent;
  }
  stop(t) {
    if (this._active) {
      let n, i;
      for (n = 0, i = this.effects.length; n < i; n++)
        this.effects[n].stop();
      for (n = 0, i = this.cleanups.length; n < i; n++)
        this.cleanups[n]();
      if (this.scopes)
        for (n = 0, i = this.scopes.length; n < i; n++)
          this.scopes[n].stop(!0);
      if (!this.detached && this.parent && !t) {
        const s = this.parent.scopes.pop();
        s && s !== this && (this.parent.scopes[this.index] = s, s.index = this.index);
      }
      this.parent = void 0, this._active = !1;
    }
  }
}
function Ha(e, t = ze) {
  t && t.active && t.effects.push(e);
}
function Ga() {
  return ze;
}
let $t;
class Vs {
  constructor(t, n, i, s) {
    this.fn = t, this.trigger = n, this.scheduler = i, this.active = !0, this.deps = [], this._dirtyLevel = 4, this._trackId = 0, this._runnings = 0, this._shouldSchedule = !1, this._depsLength = 0, Ha(this, s);
  }
  get dirty() {
    if (this._dirtyLevel === 2 || this._dirtyLevel === 3) {
      this._dirtyLevel = 1, ft();
      for (let t = 0; t < this._depsLength; t++) {
        const n = this.deps[t];
        if (n.computed && (Ua(n.computed), this._dirtyLevel >= 4))
          break;
      }
      this._dirtyLevel === 1 && (this._dirtyLevel = 0), pt();
    }
    return this._dirtyLevel >= 4;
  }
  set dirty(t) {
    this._dirtyLevel = t ? 4 : 0;
  }
  run() {
    if (this._dirtyLevel = 0, !this.active)
      return this.fn();
    let t = St, n = $t;
    try {
      return St = !0, $t = this, this._runnings++, yr(this), this.fn();
    } finally {
      Er(this), this._runnings--, $t = n, St = t;
    }
  }
  stop() {
    this.active && (yr(this), Er(this), this.onStop && this.onStop(), this.active = !1);
  }
}
function Ua(e) {
  return e.value;
}
function yr(e) {
  e._trackId++, e._depsLength = 0;
}
function Er(e) {
  if (e.deps.length > e._depsLength) {
    for (let t = e._depsLength; t < e.deps.length; t++)
      Do(e.deps[t], e);
    e.deps.length = e._depsLength;
  }
}
function Do(e, t) {
  const n = e.get(t);
  n !== void 0 && t._trackId !== n && (e.delete(t), e.size === 0 && e.cleanup());
}
let St = !0, ss = 0;
const Mo = [];
function ft() {
  Mo.push(St), St = !1;
}
function pt() {
  const e = Mo.pop();
  St = e === void 0 ? !0 : e;
}
function $s() {
  ss++;
}
function Fs() {
  for (ss--; !ss && rs.length; )
    rs.shift()();
}
function Ao(e, t, n) {
  var i;
  if (t.get(e) !== e._trackId) {
    t.set(e, e._trackId);
    const s = e.deps[e._depsLength];
    s !== t ? (s && Do(s, e), e.deps[e._depsLength++] = t) : e._depsLength++, be.NODE_ENV !== "production" && ((i = e.onTrack) == null || i.call(e, fe({ effect: e }, n)));
  }
}
const rs = [];
function Lo(e, t, n) {
  var i;
  $s();
  for (const s of e.keys()) {
    let r;
    s._dirtyLevel < t && (r ?? (r = e.get(s) === s._trackId)) && (s._shouldSchedule || (s._shouldSchedule = s._dirtyLevel === 0), s._dirtyLevel = t), s._shouldSchedule && (r ?? (r = e.get(s) === s._trackId)) && (be.NODE_ENV !== "production" && ((i = s.onTrigger) == null || i.call(s, fe({ effect: s }, n))), s.trigger(), (!s._runnings || s.allowRecurse) && s._dirtyLevel !== 2 && (s._shouldSchedule = !1, s.scheduler && rs.push(s.scheduler)));
  }
  Fs();
}
const Io = (e, t) => {
  const n = /* @__PURE__ */ new Map();
  return n.cleanup = e, n.computed = t, n;
}, os = /* @__PURE__ */ new WeakMap(), Ft = Symbol(be.NODE_ENV !== "production" ? "iterate" : ""), ls = Symbol(be.NODE_ENV !== "production" ? "Map key iterate" : "");
function _e(e, t, n) {
  if (St && $t) {
    let i = os.get(e);
    i || os.set(e, i = /* @__PURE__ */ new Map());
    let s = i.get(n);
    s || i.set(n, s = Io(() => i.delete(n))), Ao(
      $t,
      s,
      be.NODE_ENV !== "production" ? {
        target: e,
        type: t,
        key: n
      } : void 0
    );
  }
}
function Qe(e, t, n, i, s, r) {
  const o = os.get(e);
  if (!o)
    return;
  let l = [];
  if (t === "clear")
    l = [...o.values()];
  else if (n === "length" && Z(e)) {
    const a = Number(i);
    o.forEach((u, c) => {
      (c === "length" || !Yt(c) && c >= a) && l.push(u);
    });
  } else
    switch (n !== void 0 && l.push(o.get(n)), t) {
      case "add":
        Z(e) ? Is(n) && l.push(o.get("length")) : (l.push(o.get(Ft)), Vt(e) && l.push(o.get(ls)));
        break;
      case "delete":
        Z(e) || (l.push(o.get(Ft)), Vt(e) && l.push(o.get(ls)));
        break;
      case "set":
        Vt(e) && l.push(o.get(Ft));
        break;
    }
  $s();
  for (const a of l)
    a && Lo(
      a,
      4,
      be.NODE_ENV !== "production" ? {
        target: e,
        type: t,
        key: n,
        newValue: i,
        oldValue: s,
        oldTarget: r
      } : void 0
    );
  Fs();
}
const qa = /* @__PURE__ */ dt("__proto__,__v_isRef,__isVue"), Ro = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(Yt)
), wr = /* @__PURE__ */ Wa();
function Wa() {
  const e = {};
  return ["includes", "indexOf", "lastIndexOf"].forEach((t) => {
    e[t] = function(...n) {
      const i = ne(this);
      for (let r = 0, o = this.length; r < o; r++)
        _e(i, "get", r + "");
      const s = i[t](...n);
      return s === -1 || s === !1 ? i[t](...n.map(ne)) : s;
    };
  }), ["push", "pop", "shift", "unshift", "splice"].forEach((t) => {
    e[t] = function(...n) {
      ft(), $s();
      const i = ne(this)[t].apply(this, n);
      return Fs(), pt(), i;
    };
  }), e;
}
function Ka(e) {
  Yt(e) || (e = String(e));
  const t = ne(this);
  return _e(t, "has", e), t.hasOwnProperty(e);
}
class Vo {
  constructor(t = !1, n = !1) {
    this._isReadonly = t, this._isShallow = n;
  }
  get(t, n, i) {
    const s = this._isReadonly, r = this._isShallow;
    if (n === "__v_isReactive")
      return !s;
    if (n === "__v_isReadonly")
      return s;
    if (n === "__v_isShallow")
      return r;
    if (n === "__v_raw")
      return i === (s ? r ? Ho : jo : r ? ko : zo).get(t) || // receiver is not the reactive proxy, but has the same prototype
      // this means the reciever is a user proxy of the reactive proxy
      Object.getPrototypeOf(t) === Object.getPrototypeOf(i) ? t : void 0;
    const o = Z(t);
    if (!s) {
      if (o && se(wr, n))
        return Reflect.get(wr, n, i);
      if (n === "hasOwnProperty")
        return Ka;
    }
    const l = Reflect.get(t, n, i);
    return (Yt(n) ? Ro.has(n) : qa(n)) || (s || _e(t, "get", n), r) ? l : Se(l) ? o && Is(n) ? l : l.value : le(l) ? s ? Go(l) : zs(l) : l;
  }
}
class $o extends Vo {
  constructor(t = !1) {
    super(!1, t);
  }
  set(t, n, i, s) {
    let r = t[n];
    if (!this._isShallow) {
      const a = Ut(r);
      if (!Bt(i) && !Ut(i) && (r = ne(r), i = ne(i)), !Z(t) && Se(r) && !Se(i))
        return a ? !1 : (r.value = i, !0);
    }
    const o = Z(t) && Is(n) ? Number(n) < t.length : se(t, n), l = Reflect.set(t, n, i, s);
    return t === ne(s) && (o ? Ot(i, r) && Qe(t, "set", n, i, r) : Qe(t, "add", n, i)), l;
  }
  deleteProperty(t, n) {
    const i = se(t, n), s = t[n], r = Reflect.deleteProperty(t, n);
    return r && i && Qe(t, "delete", n, void 0, s), r;
  }
  has(t, n) {
    const i = Reflect.has(t, n);
    return (!Yt(n) || !Ro.has(n)) && _e(t, "has", n), i;
  }
  ownKeys(t) {
    return _e(
      t,
      "iterate",
      Z(t) ? "length" : Ft
    ), Reflect.ownKeys(t);
  }
}
class Fo extends Vo {
  constructor(t = !1) {
    super(!0, t);
  }
  set(t, n) {
    return be.NODE_ENV !== "production" && Ct(
      `Set operation on key "${String(n)}" failed: target is readonly.`,
      t
    ), !0;
  }
  deleteProperty(t, n) {
    return be.NODE_ENV !== "production" && Ct(
      `Delete operation on key "${String(n)}" failed: target is readonly.`,
      t
    ), !0;
  }
}
const Ya = /* @__PURE__ */ new $o(), Xa = /* @__PURE__ */ new Fo(), Ja = /* @__PURE__ */ new $o(
  !0
), Za = /* @__PURE__ */ new Fo(!0), Bs = (e) => e, _i = (e) => Reflect.getPrototypeOf(e);
function kn(e, t, n = !1, i = !1) {
  e = e.__v_raw;
  const s = ne(e), r = ne(t);
  n || (Ot(t, r) && _e(s, "get", t), _e(s, "get", r));
  const { has: o } = _i(s), l = i ? Bs : n ? ks : Sn;
  if (o.call(s, t))
    return l(e.get(t));
  if (o.call(s, r))
    return l(e.get(r));
  e !== s && e.get(t);
}
function jn(e, t = !1) {
  const n = this.__v_raw, i = ne(n), s = ne(e);
  return t || (Ot(e, s) && _e(i, "has", e), _e(i, "has", s)), e === s ? n.has(e) : n.has(e) || n.has(s);
}
function Hn(e, t = !1) {
  return e = e.__v_raw, !t && _e(ne(e), "iterate", Ft), Reflect.get(e, "size", e);
}
function _r(e) {
  e = ne(e);
  const t = ne(this);
  return _i(t).has.call(t, e) || (t.add(e), Qe(t, "add", e, e)), this;
}
function Sr(e, t) {
  t = ne(t);
  const n = ne(this), { has: i, get: s } = _i(n);
  let r = i.call(n, e);
  r ? be.NODE_ENV !== "production" && Bo(n, i, e) : (e = ne(e), r = i.call(n, e));
  const o = s.call(n, e);
  return n.set(e, t), r ? Ot(t, o) && Qe(n, "set", e, t, o) : Qe(n, "add", e, t), this;
}
function xr(e) {
  const t = ne(this), { has: n, get: i } = _i(t);
  let s = n.call(t, e);
  s ? be.NODE_ENV !== "production" && Bo(t, n, e) : (e = ne(e), s = n.call(t, e));
  const r = i ? i.call(t, e) : void 0, o = t.delete(e);
  return s && Qe(t, "delete", e, void 0, r), o;
}
function Tr() {
  const e = ne(this), t = e.size !== 0, n = be.NODE_ENV !== "production" ? Vt(e) ? new Map(e) : new Set(e) : void 0, i = e.clear();
  return t && Qe(e, "clear", void 0, void 0, n), i;
}
function Gn(e, t) {
  return function(i, s) {
    const r = this, o = r.__v_raw, l = ne(o), a = t ? Bs : e ? ks : Sn;
    return !e && _e(l, "iterate", Ft), o.forEach((u, c) => i.call(s, a(u), a(c), r));
  };
}
function Un(e, t, n) {
  return function(...i) {
    const s = this.__v_raw, r = ne(s), o = Vt(r), l = e === "entries" || e === Symbol.iterator && o, a = e === "keys" && o, u = s[e](...i), c = n ? Bs : t ? ks : Sn;
    return !t && _e(
      r,
      "iterate",
      a ? ls : Ft
    ), {
      // iterator protocol
      next() {
        const { value: d, done: p } = u.next();
        return p ? { value: d, done: p } : {
          value: l ? [c(d[0]), c(d[1])] : c(d),
          done: p
        };
      },
      // iterable protocol
      [Symbol.iterator]() {
        return this;
      }
    };
  };
}
function mt(e) {
  return function(...t) {
    if (be.NODE_ENV !== "production") {
      const n = t[0] ? `on key "${t[0]}" ` : "";
      Ct(
        `${Gt(e)} operation ${n}failed: target is readonly.`,
        ne(this)
      );
    }
    return e === "delete" ? !1 : e === "clear" ? void 0 : this;
  };
}
function Qa() {
  const e = {
    get(r) {
      return kn(this, r);
    },
    get size() {
      return Hn(this);
    },
    has: jn,
    add: _r,
    set: Sr,
    delete: xr,
    clear: Tr,
    forEach: Gn(!1, !1)
  }, t = {
    get(r) {
      return kn(this, r, !1, !0);
    },
    get size() {
      return Hn(this);
    },
    has: jn,
    add: _r,
    set: Sr,
    delete: xr,
    clear: Tr,
    forEach: Gn(!1, !0)
  }, n = {
    get(r) {
      return kn(this, r, !0);
    },
    get size() {
      return Hn(this, !0);
    },
    has(r) {
      return jn.call(this, r, !0);
    },
    add: mt("add"),
    set: mt("set"),
    delete: mt("delete"),
    clear: mt("clear"),
    forEach: Gn(!0, !1)
  }, i = {
    get(r) {
      return kn(this, r, !0, !0);
    },
    get size() {
      return Hn(this, !0);
    },
    has(r) {
      return jn.call(this, r, !0);
    },
    add: mt("add"),
    set: mt("set"),
    delete: mt("delete"),
    clear: mt("clear"),
    forEach: Gn(!0, !0)
  };
  return [
    "keys",
    "values",
    "entries",
    Symbol.iterator
  ].forEach((r) => {
    e[r] = Un(r, !1, !1), n[r] = Un(r, !0, !1), t[r] = Un(r, !1, !0), i[r] = Un(
      r,
      !0,
      !0
    );
  }), [
    e,
    n,
    t,
    i
  ];
}
const [
  ec,
  tc,
  nc,
  ic
] = /* @__PURE__ */ Qa();
function Si(e, t) {
  const n = t ? e ? ic : nc : e ? tc : ec;
  return (i, s, r) => s === "__v_isReactive" ? !e : s === "__v_isReadonly" ? e : s === "__v_raw" ? i : Reflect.get(
    se(n, s) && s in i ? n : i,
    s,
    r
  );
}
const sc = {
  get: /* @__PURE__ */ Si(!1, !1)
}, rc = {
  get: /* @__PURE__ */ Si(!1, !0)
}, oc = {
  get: /* @__PURE__ */ Si(!0, !1)
}, lc = {
  get: /* @__PURE__ */ Si(!0, !0)
};
function Bo(e, t, n) {
  const i = ne(n);
  if (i !== n && t.call(e, i)) {
    const s = Ls(e);
    Ct(
      `Reactive ${s} contains both the raw and reactive versions of the same object${s === "Map" ? " as keys" : ""}, which can lead to inconsistencies. Avoid differentiating between the raw and reactive versions of an object and only use the reactive version if possible.`
    );
  }
}
const zo = /* @__PURE__ */ new WeakMap(), ko = /* @__PURE__ */ new WeakMap(), jo = /* @__PURE__ */ new WeakMap(), Ho = /* @__PURE__ */ new WeakMap();
function ac(e) {
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
function cc(e) {
  return e.__v_skip || !Object.isExtensible(e) ? 0 : ac(Ls(e));
}
function zs(e) {
  return Ut(e) ? e : xi(
    e,
    !1,
    Ya,
    sc,
    zo
  );
}
function uc(e) {
  return xi(
    e,
    !1,
    Ja,
    rc,
    ko
  );
}
function Go(e) {
  return xi(
    e,
    !0,
    Xa,
    oc,
    jo
  );
}
function Je(e) {
  return xi(
    e,
    !0,
    Za,
    lc,
    Ho
  );
}
function xi(e, t, n, i, s) {
  if (!le(e))
    return be.NODE_ENV !== "production" && Ct(`value cannot be made reactive: ${String(e)}`), e;
  if (e.__v_raw && !(t && e.__v_isReactive))
    return e;
  const r = s.get(e);
  if (r)
    return r;
  const o = cc(e);
  if (o === 0)
    return e;
  const l = new Proxy(
    e,
    o === 2 ? i : n
  );
  return s.set(e, l), l;
}
function nn(e) {
  return Ut(e) ? nn(e.__v_raw) : !!(e && e.__v_isReactive);
}
function Ut(e) {
  return !!(e && e.__v_isReadonly);
}
function Bt(e) {
  return !!(e && e.__v_isShallow);
}
function as(e) {
  return e ? !!e.__v_raw : !1;
}
function ne(e) {
  const t = e && e.__v_raw;
  return t ? ne(t) : e;
}
function dc(e) {
  return Object.isExtensible(e) && Co(e, "__v_skip", !0), e;
}
const Sn = (e) => le(e) ? zs(e) : e, ks = (e) => le(e) ? Go(e) : e, fc = "Computed is still dirty after getter evaluation, likely because a computed is mutating its own dependency in its getter. State mutations in computed getters should be avoided.  Check the docs for more details: https://vuejs.org/guide/essentials/computed.html#getters-should-be-side-effect-free";
class Uo {
  constructor(t, n, i, s) {
    this.getter = t, this._setter = n, this.dep = void 0, this.__v_isRef = !0, this.__v_isReadonly = !1, this.effect = new Vs(
      () => t(this._value),
      () => Yn(
        this,
        this.effect._dirtyLevel === 2 ? 2 : 3
      )
    ), this.effect.computed = this, this.effect.active = this._cacheable = !s, this.__v_isReadonly = i;
  }
  get value() {
    const t = ne(this);
    return (!t._cacheable || t.effect.dirty) && Ot(t._value, t._value = t.effect.run()) && Yn(t, 4), qo(t), t.effect._dirtyLevel >= 2 && (be.NODE_ENV !== "production" && this._warnRecursive && Ct(fc, `

getter: `, this.getter), Yn(t, 2)), t._value;
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
function pc(e, t, n = !1) {
  let i, s;
  const r = Q(e);
  r ? (i = e, s = be.NODE_ENV !== "production" ? () => {
    Ct("Write operation failed: computed value is readonly");
  } : he) : (i = e.get, s = e.set);
  const o = new Uo(i, s, r || !s, n);
  return be.NODE_ENV !== "production" && t && !n && (o.effect.onTrack = t.onTrack, o.effect.onTrigger = t.onTrigger), o;
}
function qo(e) {
  var t;
  St && $t && (e = ne(e), Ao(
    $t,
    (t = e.dep) != null ? t : e.dep = Io(
      () => e.dep = void 0,
      e instanceof Uo ? e : void 0
    ),
    be.NODE_ENV !== "production" ? {
      target: e,
      type: "get",
      key: "value"
    } : void 0
  ));
}
function Yn(e, t = 4, n) {
  e = ne(e);
  const i = e.dep;
  i && Lo(
    i,
    t,
    be.NODE_ENV !== "production" ? {
      target: e,
      type: "set",
      key: "value",
      newValue: n
    } : void 0
  );
}
function Se(e) {
  return !!(e && e.__v_isRef === !0);
}
function Pe(e) {
  return hc(e, !1);
}
function hc(e, t) {
  return Se(e) ? e : new mc(e, t);
}
class mc {
  constructor(t, n) {
    this.__v_isShallow = n, this.dep = void 0, this.__v_isRef = !0, this._rawValue = n ? t : ne(t), this._value = n ? t : Sn(t);
  }
  get value() {
    return qo(this), this._value;
  }
  set value(t) {
    const n = this.__v_isShallow || Bt(t) || Ut(t);
    t = n ? t : ne(t), Ot(t, this._rawValue) && (this._rawValue = t, this._value = n ? t : Sn(t), Yn(this, 4, t));
  }
}
function gc(e) {
  return Se(e) ? e.value : e;
}
const vc = {
  get: (e, t, n) => gc(Reflect.get(e, t, n)),
  set: (e, t, n, i) => {
    const s = e[t];
    return Se(s) && !Se(n) ? (s.value = n, !0) : Reflect.set(e, t, n, i);
  }
};
function Wo(e) {
  return nn(e) ? e : new Proxy(e, vc);
}
var E = {};
const zt = [];
function Xn(e) {
  zt.push(e);
}
function Jn() {
  zt.pop();
}
function k(e, ...t) {
  ft();
  const n = zt.length ? zt[zt.length - 1].component : null, i = n && n.appContext.config.warnHandler, s = bc();
  if (i)
    ct(
      i,
      n,
      11,
      [
        e + t.map((r) => {
          var o, l;
          return (l = (o = r.toString) == null ? void 0 : o.call(r)) != null ? l : JSON.stringify(r);
        }).join(""),
        n && n.proxy,
        s.map(
          ({ vnode: r }) => `at <${Di(n, r.type)}>`
        ).join(`
`),
        s
      ]
    );
  else {
    const r = [`[Vue warn]: ${e}`, ...t];
    s.length && r.push(`
`, ...yc(s)), console.warn(...r);
  }
  pt();
}
function bc() {
  let e = zt[zt.length - 1];
  if (!e)
    return [];
  const t = [];
  for (; e; ) {
    const n = t[0];
    n && n.vnode === e ? n.recurseCount++ : t.push({
      vnode: e,
      recurseCount: 0
    });
    const i = e.component && e.component.parent;
    e = i && i.vnode;
  }
  return t;
}
function yc(e) {
  const t = [];
  return e.forEach((n, i) => {
    t.push(...i === 0 ? [] : [`
`], ...Ec(n));
  }), t;
}
function Ec({ vnode: e, recurseCount: t }) {
  const n = t > 0 ? `... (${t} recursive calls)` : "", i = e.component ? e.component.parent == null : !1, s = ` at <${Di(
    e.component,
    e.type,
    i
  )}`, r = ">" + n;
  return e.props ? [s, ...wc(e.props), r] : [s + r];
}
function wc(e) {
  const t = [], n = Object.keys(e);
  return n.slice(0, 3).forEach((i) => {
    t.push(...Ko(i, e[i]));
  }), n.length > 3 && t.push(" ..."), t;
}
function Ko(e, t, n) {
  return de(t) ? (t = JSON.stringify(t), n ? t : [`${e}=${t}`]) : typeof t == "number" || typeof t == "boolean" || t == null ? n ? t : [`${e}=${t}`] : Se(t) ? (t = Ko(e, ne(t.value), !0), n ? t : [`${e}=Ref<`, t, ">"]) : Q(t) ? [`${e}=fn${t.name ? `<${t.name}>` : ""}`] : (t = ne(t), n ? t : [`${e}=`, t]);
}
const js = {
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
function ct(e, t, n, i) {
  try {
    return i ? e(...i) : e();
  } catch (s) {
    Ln(s, t, n);
  }
}
function He(e, t, n, i) {
  if (Q(e)) {
    const s = ct(e, t, n, i);
    return s && As(s) && s.catch((r) => {
      Ln(r, t, n);
    }), s;
  }
  if (Z(e)) {
    const s = [];
    for (let r = 0; r < e.length; r++)
      s.push(He(e[r], t, n, i));
    return s;
  } else E.NODE_ENV !== "production" && k(
    `Invalid value type passed to callWithAsyncErrorHandling(): ${typeof e}`
  );
}
function Ln(e, t, n, i = !0) {
  const s = t ? t.vnode : null;
  if (t) {
    let r = t.parent;
    const o = t.proxy, l = E.NODE_ENV !== "production" ? js[n] : `https://vuejs.org/error-reference/#runtime-${n}`;
    for (; r; ) {
      const u = r.ec;
      if (u) {
        for (let c = 0; c < u.length; c++)
          if (u[c](e, o, l) === !1)
            return;
      }
      r = r.parent;
    }
    const a = t.appContext.config.errorHandler;
    if (a) {
      ft(), ct(
        a,
        null,
        10,
        [e, o, l]
      ), pt();
      return;
    }
  }
  _c(e, n, s, i);
}
function _c(e, t, n, i = !0) {
  if (E.NODE_ENV !== "production") {
    const s = js[t];
    if (n && Xn(n), k(`Unhandled error${s ? ` during execution of ${s}` : ""}`), n && Jn(), i)
      throw e;
    console.error(e);
  } else
    console.error(e);
}
let xn = !1, cs = !1;
const xe = [];
let Ye = 0;
const sn = [];
let lt = null, bt = 0;
const Yo = /* @__PURE__ */ Promise.resolve();
let Hs = null;
const Sc = 100;
function Xo(e) {
  const t = Hs || Yo;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function xc(e) {
  let t = Ye + 1, n = xe.length;
  for (; t < n; ) {
    const i = t + n >>> 1, s = xe[i], r = Tn(s);
    r < e || r === e && s.pre ? t = i + 1 : n = i;
  }
  return t;
}
function Ti(e) {
  (!xe.length || !xe.includes(
    e,
    xn && e.allowRecurse ? Ye + 1 : Ye
  )) && (e.id == null ? xe.push(e) : xe.splice(xc(e.id), 0, e), Jo());
}
function Jo() {
  !xn && !cs && (cs = !0, Hs = Yo.then(el));
}
function Tc(e) {
  const t = xe.indexOf(e);
  t > Ye && xe.splice(t, 1);
}
function Zo(e) {
  Z(e) ? sn.push(...e) : (!lt || !lt.includes(
    e,
    e.allowRecurse ? bt + 1 : bt
  )) && sn.push(e), Jo();
}
function Or(e, t, n = xn ? Ye + 1 : 0) {
  for (E.NODE_ENV !== "production" && (t = t || /* @__PURE__ */ new Map()); n < xe.length; n++) {
    const i = xe[n];
    if (i && i.pre) {
      if (e && i.id !== e.uid || E.NODE_ENV !== "production" && Gs(t, i))
        continue;
      xe.splice(n, 1), n--, i();
    }
  }
}
function Qo(e) {
  if (sn.length) {
    const t = [...new Set(sn)].sort(
      (n, i) => Tn(n) - Tn(i)
    );
    if (sn.length = 0, lt) {
      lt.push(...t);
      return;
    }
    for (lt = t, E.NODE_ENV !== "production" && (e = e || /* @__PURE__ */ new Map()), bt = 0; bt < lt.length; bt++)
      E.NODE_ENV !== "production" && Gs(e, lt[bt]) || lt[bt]();
    lt = null, bt = 0;
  }
}
const Tn = (e) => e.id == null ? 1 / 0 : e.id, Oc = (e, t) => {
  const n = Tn(e) - Tn(t);
  if (n === 0) {
    if (e.pre && !t.pre)
      return -1;
    if (t.pre && !e.pre)
      return 1;
  }
  return n;
};
function el(e) {
  cs = !1, xn = !0, E.NODE_ENV !== "production" && (e = e || /* @__PURE__ */ new Map()), xe.sort(Oc);
  const t = E.NODE_ENV !== "production" ? (n) => Gs(e, n) : he;
  try {
    for (Ye = 0; Ye < xe.length; Ye++) {
      const n = xe[Ye];
      if (n && n.active !== !1) {
        if (E.NODE_ENV !== "production" && t(n))
          continue;
        ct(n, null, 14);
      }
    }
  } finally {
    Ye = 0, xe.length = 0, Qo(e), xn = !1, Hs = null, (xe.length || sn.length) && el(e);
  }
}
function Gs(e, t) {
  if (!e.has(t))
    e.set(t, 1);
  else {
    const n = e.get(t);
    if (n > Sc) {
      const i = t.ownerInstance, s = i && ir(i.type);
      return Ln(
        `Maximum recursive updates exceeded${s ? ` in component <${s}>` : ""}. This means you have a reactive effect that is mutating its own dependencies and thus recursively triggering itself. Possible sources include component template, render function, updated hook or watcher source function.`,
        null,
        10
      ), !0;
    } else
      e.set(t, n + 1);
  }
}
let kt = !1;
const Zt = /* @__PURE__ */ new Set();
E.NODE_ENV !== "production" && (Rs().__VUE_HMR_RUNTIME__ = {
  createRecord: Bi(tl),
  rerender: Bi(Pc),
  reload: Bi(Dc)
});
const qt = /* @__PURE__ */ new Map();
function Cc(e) {
  const t = e.type.__hmrId;
  let n = qt.get(t);
  n || (tl(t, e.type), n = qt.get(t)), n.instances.add(e);
}
function Nc(e) {
  qt.get(e.type.__hmrId).instances.delete(e);
}
function tl(e, t) {
  return qt.has(e) ? !1 : (qt.set(e, {
    initialDef: yn(t),
    instances: /* @__PURE__ */ new Set()
  }), !0);
}
function yn(e) {
  return Fl(e) ? e.__vccOpts : e;
}
function Pc(e, t) {
  const n = qt.get(e);
  n && (n.initialDef.render = t, [...n.instances].forEach((i) => {
    t && (i.render = t, yn(i.type).render = t), i.renderCache = [], kt = !0, i.effect.dirty = !0, i.update(), kt = !1;
  }));
}
function Dc(e, t) {
  const n = qt.get(e);
  if (!n)
    return;
  t = yn(t), Cr(n.initialDef, t);
  const i = [...n.instances];
  for (const s of i) {
    const r = yn(s.type);
    Zt.has(r) || (r !== n.initialDef && Cr(r, t), Zt.add(r)), s.appContext.propsCache.delete(s.type), s.appContext.emitsCache.delete(s.type), s.appContext.optionsCache.delete(s.type), s.ceReload ? (Zt.add(r), s.ceReload(t.styles), Zt.delete(r)) : s.parent ? (s.parent.effect.dirty = !0, Ti(s.parent.update)) : s.appContext.reload ? s.appContext.reload() : typeof window < "u" ? window.location.reload() : console.warn(
      "[HMR] Root or manually mounted instance modified. Full reload required."
    );
  }
  Zo(() => {
    for (const s of i)
      Zt.delete(
        yn(s.type)
      );
  });
}
function Cr(e, t) {
  fe(e, t);
  for (const n in e)
    n !== "__file" && !(n in t) && delete e[n];
}
function Bi(e) {
  return (t, n) => {
    try {
      return e(t, n);
    } catch (i) {
      console.error(i), console.warn(
        "[HMR] Something went wrong during Vue component hot-reload. Full reload required."
      );
    }
  };
}
let Xe, gn = [], us = !1;
function In(e, ...t) {
  Xe ? Xe.emit(e, ...t) : us || gn.push({ event: e, args: t });
}
function nl(e, t) {
  var n, i;
  Xe = e, Xe ? (Xe.enabled = !0, gn.forEach(({ event: s, args: r }) => Xe.emit(s, ...r)), gn = []) : /* handle late devtools injection - only do this if we are in an actual */ /* browser environment to avoid the timer handle stalling test runner exit */ /* (#4815) */ typeof window < "u" && // some envs mock window but not fully
  window.HTMLElement && // also exclude jsdom
  !((i = (n = window.navigator) == null ? void 0 : n.userAgent) != null && i.includes("jsdom")) ? ((t.__VUE_DEVTOOLS_HOOK_REPLAY__ = t.__VUE_DEVTOOLS_HOOK_REPLAY__ || []).push((r) => {
    nl(r, t);
  }), setTimeout(() => {
    Xe || (t.__VUE_DEVTOOLS_HOOK_REPLAY__ = null, us = !0, gn = []);
  }, 3e3)) : (us = !0, gn = []);
}
function Mc(e, t) {
  In("app:init", e, t, {
    Fragment: $e,
    Text: Rn,
    Comment: Me,
    Static: ti
  });
}
function Ac(e) {
  In("app:unmount", e);
}
const Lc = /* @__PURE__ */ Us(
  "component:added"
  /* COMPONENT_ADDED */
), il = /* @__PURE__ */ Us(
  "component:updated"
  /* COMPONENT_UPDATED */
), Ic = /* @__PURE__ */ Us(
  "component:removed"
  /* COMPONENT_REMOVED */
), Rc = (e) => {
  Xe && typeof Xe.cleanupBuffer == "function" && // remove the component if it wasn't buffered
  !Xe.cleanupBuffer(e) && Ic(e);
};
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function Us(e) {
  return (t) => {
    In(
      e,
      t.appContext.app,
      t.uid,
      t.parent ? t.parent.uid : void 0,
      t
    );
  };
}
const Vc = /* @__PURE__ */ sl(
  "perf:start"
  /* PERFORMANCE_START */
), $c = /* @__PURE__ */ sl(
  "perf:end"
  /* PERFORMANCE_END */
);
function sl(e) {
  return (t, n, i) => {
    In(e, t.appContext.app, t.uid, t, n, i);
  };
}
function Fc(e, t, n) {
  In(
    "component:emit",
    e.appContext.app,
    e,
    t,
    n
  );
}
function Bc(e, t, ...n) {
  if (e.isUnmounted)
    return;
  const i = e.vnode.props || ae;
  if (E.NODE_ENV !== "production") {
    const {
      emitsOptions: c,
      propsOptions: [d]
    } = e;
    if (c)
      if (!(t in c))
        (!d || !(Lt(t) in d)) && k(
          `Component emitted event "${t}" but it is neither declared in the emits option nor as an "${Lt(t)}" prop.`
        );
      else {
        const p = c[t];
        Q(p) && (p(...n) || k(
          `Invalid event arguments: event validation failed for event "${t}".`
        ));
      }
  }
  let s = n;
  const r = t.startsWith("update:"), o = r && t.slice(7);
  if (o && o in i) {
    const c = `${o === "modelValue" ? "model" : o}Modifiers`, { number: d, trim: p } = i[c] || ae;
    p && (s = n.map((g) => de(g) ? g.trim() : g)), d && (s = n.map(Pa));
  }
  if (E.NODE_ENV !== "production" && Fc(e, t, s), E.NODE_ENV !== "production") {
    const c = t.toLowerCase();
    c !== t && i[Lt(c)] && k(
      `Event "${c}" is emitted in component ${Di(
        e,
        e.type
      )} but the handler is registered for "${t}". Note that HTML attributes are case-insensitive and you cannot use v-on to listen to camelCase events when using in-DOM templates. You should probably use "${Tt(
        t
      )}" instead of "${t}".`
    );
  }
  let l, a = i[l = Lt(t)] || // also try camelCase event handler (#2249)
  i[l = Lt(et(t))];
  !a && r && (a = i[l = Lt(Tt(t))]), a && He(
    a,
    e,
    6,
    s
  );
  const u = i[l + "Once"];
  if (u) {
    if (!e.emitted)
      e.emitted = {};
    else if (e.emitted[l])
      return;
    e.emitted[l] = !0, He(
      u,
      e,
      6,
      s
    );
  }
}
function rl(e, t, n = !1) {
  const i = t.emitsCache, s = i.get(e);
  if (s !== void 0)
    return s;
  const r = e.emits;
  let o = {}, l = !1;
  if (!Q(e)) {
    const a = (u) => {
      const c = rl(u, t, !0);
      c && (l = !0, fe(o, c));
    };
    !n && t.mixins.length && t.mixins.forEach(a), e.extends && a(e.extends), e.mixins && e.mixins.forEach(a);
  }
  return !r && !l ? (le(e) && i.set(e, null), null) : (Z(r) ? r.forEach((a) => o[a] = null) : fe(o, r), le(e) && i.set(e, o), o);
}
function Oi(e, t) {
  return !e || !Mn(t) ? !1 : (t = t.slice(2).replace(/Once$/, ""), se(e, t[0].toLowerCase() + t.slice(1)) || se(e, Tt(t)) || se(e, t));
}
let Ee = null, ol = null;
function ci(e) {
  const t = Ee;
  return Ee = e, ol = e && e.type.__scopeId || null, t;
}
function It(e, t = Ee, n) {
  if (!t || e._n)
    return e;
  const i = (...s) => {
    i._d && zr(-1);
    const r = ci(t);
    let o;
    try {
      o = e(...s);
    } finally {
      ci(r), i._d && zr(1);
    }
    return E.NODE_ENV !== "production" && il(t), o;
  };
  return i._n = !0, i._c = !0, i._d = !0, i;
}
let ds = !1;
function ui() {
  ds = !0;
}
function zi(e) {
  const {
    type: t,
    vnode: n,
    proxy: i,
    withProxy: s,
    propsOptions: [r],
    slots: o,
    attrs: l,
    emit: a,
    render: u,
    renderCache: c,
    props: d,
    data: p,
    setupState: g,
    ctx: m,
    inheritAttrs: b
  } = e, w = ci(e);
  let x, v;
  E.NODE_ENV !== "production" && (ds = !1);
  try {
    if (n.shapeFlag & 4) {
      const O = s || i, B = E.NODE_ENV !== "production" && g.__isScriptSetup ? new Proxy(O, {
        get(j, q, N) {
          return k(
            `Property '${String(
              q
            )}' was accessed via 'this'. Avoid using 'this' in templates.`
          ), Reflect.get(j, q, N);
        }
      }) : O;
      x = ke(
        u.call(
          B,
          O,
          c,
          E.NODE_ENV !== "production" ? Je(d) : d,
          g,
          p,
          m
        )
      ), v = l;
    } else {
      const O = t;
      E.NODE_ENV !== "production" && l === d && ui(), x = ke(
        O.length > 1 ? O(
          E.NODE_ENV !== "production" ? Je(d) : d,
          E.NODE_ENV !== "production" ? {
            get attrs() {
              return ui(), Je(l);
            },
            slots: o,
            emit: a
          } : { attrs: l, slots: o, emit: a }
        ) : O(
          E.NODE_ENV !== "production" ? Je(d) : d,
          null
        )
      ), v = t.props ? l : zc(l);
    }
  } catch (O) {
    _n.length = 0, Ln(O, e, 1), x = ce(Me);
  }
  let h = x, S;
  if (E.NODE_ENV !== "production" && x.patchFlag > 0 && x.patchFlag & 2048 && ([h, S] = ll(x)), v && b !== !1) {
    const O = Object.keys(v), { shapeFlag: B } = h;
    if (O.length) {
      if (B & 7)
        r && O.some(li) && (v = kc(
          v,
          r
        )), h = Nt(h, v, !1, !0);
      else if (E.NODE_ENV !== "production" && !ds && h.type !== Me) {
        const j = Object.keys(l), q = [], N = [];
        for (let I = 0, G = j.length; I < G; I++) {
          const A = j[I];
          Mn(A) ? li(A) || q.push(A[2].toLowerCase() + A.slice(3)) : N.push(A);
        }
        N.length && k(
          `Extraneous non-props attributes (${N.join(", ")}) were passed to component but could not be automatically inherited because component renders fragment or text root nodes.`
        ), q.length && k(
          `Extraneous non-emits event listeners (${q.join(", ")}) were passed to component but could not be automatically inherited because component renders fragment or text root nodes. If the listener is intended to be a component custom event listener only, declare it using the "emits" option.`
        );
      }
    }
  }
  return n.dirs && (E.NODE_ENV !== "production" && !Nr(h) && k(
    "Runtime directive used on component with non-element root node. The directives will not function as intended."
  ), h = Nt(h, null, !1, !0), h.dirs = h.dirs ? h.dirs.concat(n.dirs) : n.dirs), n.transition && (E.NODE_ENV !== "production" && !Nr(h) && k(
    "Component inside <Transition> renders non-element root node that cannot be animated."
  ), h.transition = n.transition), E.NODE_ENV !== "production" && S ? S(h) : x = h, ci(w), x;
}
const ll = (e) => {
  const t = e.children, n = e.dynamicChildren, i = qs(t, !1);
  if (i) {
    if (E.NODE_ENV !== "production" && i.patchFlag > 0 && i.patchFlag & 2048)
      return ll(i);
  } else return [e, void 0];
  const s = t.indexOf(i), r = n ? n.indexOf(i) : -1, o = (l) => {
    t[s] = l, n && (r > -1 ? n[r] = l : l.patchFlag > 0 && (e.dynamicChildren = [...n, l]));
  };
  return [ke(i), o];
};
function qs(e, t = !0) {
  let n;
  for (let i = 0; i < e.length; i++) {
    const s = e[i];
    if (on(s)) {
      if (s.type !== Me || s.children === "v-if") {
        if (n)
          return;
        if (n = s, E.NODE_ENV !== "production" && t && n.patchFlag > 0 && n.patchFlag & 2048)
          return qs(n.children);
      }
    } else
      return;
  }
  return n;
}
const zc = (e) => {
  let t;
  for (const n in e)
    (n === "class" || n === "style" || Mn(n)) && ((t || (t = {}))[n] = e[n]);
  return t;
}, kc = (e, t) => {
  const n = {};
  for (const i in e)
    (!li(i) || !(i.slice(9) in t)) && (n[i] = e[i]);
  return n;
}, Nr = (e) => e.shapeFlag & 7 || e.type === Me;
function jc(e, t, n) {
  const { props: i, children: s, component: r } = e, { props: o, children: l, patchFlag: a } = t, u = r.emitsOptions;
  if (E.NODE_ENV !== "production" && (s || l) && kt || t.dirs || t.transition)
    return !0;
  if (n && a >= 0) {
    if (a & 1024)
      return !0;
    if (a & 16)
      return i ? Pr(i, o, u) : !!o;
    if (a & 8) {
      const c = t.dynamicProps;
      for (let d = 0; d < c.length; d++) {
        const p = c[d];
        if (o[p] !== i[p] && !Oi(u, p))
          return !0;
      }
    }
  } else
    return (s || l) && (!l || !l.$stable) ? !0 : i === o ? !1 : i ? o ? Pr(i, o, u) : !0 : !!o;
  return !1;
}
function Pr(e, t, n) {
  const i = Object.keys(t);
  if (i.length !== Object.keys(e).length)
    return !0;
  for (let s = 0; s < i.length; s++) {
    const r = i[s];
    if (t[r] !== e[r] && !Oi(n, r))
      return !0;
  }
  return !1;
}
function Hc({ vnode: e, parent: t }, n) {
  for (; t; ) {
    const i = t.subTree;
    if (i.suspense && i.suspense.activeBranch === e && (i.el = e.el), i === e)
      (e = t.vnode).el = n, t = t.parent;
    else
      break;
  }
}
const al = "components";
function ut(e, t) {
  return ul(al, e, !0, t) || e;
}
const cl = Symbol.for("v-ndc");
function Gc(e) {
  return de(e) ? ul(al, e, !1) || e : e || cl;
}
function ul(e, t, n = !0, i = !1) {
  const s = Ee || ve;
  if (s) {
    const r = s.type;
    {
      const l = ir(
        r,
        !1
      );
      if (l && (l === t || l === et(t) || l === Gt(et(t))))
        return r;
    }
    const o = (
      // local registration
      // check instance[type] first which is resolved for options API
      Dr(s[e] || r[e], t) || // global registration
      Dr(s.appContext[e], t)
    );
    return !o && i ? r : (E.NODE_ENV !== "production" && n && !o && k(`Failed to resolve ${e.slice(0, -1)}: ${t}
If this is a native custom element, make sure to exclude it from component resolution via compilerOptions.isCustomElement.`), o);
  } else E.NODE_ENV !== "production" && k(
    `resolve${Gt(e.slice(0, -1))} can only be used in render() or setup().`
  );
}
function Dr(e, t) {
  return e && (e[t] || e[et(t)] || e[Gt(et(t))]);
}
const Uc = (e) => e.__isSuspense;
function qc(e, t) {
  t && t.pendingBranch ? Z(e) ? t.effects.push(...e) : t.effects.push(e) : Zo(e);
}
const Wc = Symbol.for("v-scx"), Kc = () => {
  {
    const e = Qn(Wc);
    return e || E.NODE_ENV !== "production" && k(
      "Server rendering context not provided. Make sure to only call useSSRContext() conditionally in the server build."
    ), e;
  }
}, qn = {};
function Zn(e, t, n) {
  return E.NODE_ENV !== "production" && !Q(t) && k(
    "`watch(fn, options?)` signature has been moved to a separate API. Use `watchEffect(fn, options?)` instead. `watch` now only supports `watch(source, cb, options?) signature."
  ), dl(e, t, n);
}
function dl(e, t, {
  immediate: n,
  deep: i,
  flush: s,
  once: r,
  onTrack: o,
  onTrigger: l
} = ae) {
  if (t && r) {
    const j = t;
    t = (...q) => {
      j(...q), B();
    };
  }
  E.NODE_ENV !== "production" && i !== void 0 && typeof i == "number" && k(
    'watch() "deep" option with number value will be used as watch depth in future versions. Please use a boolean instead to avoid potential breakage.'
  ), E.NODE_ENV !== "production" && !t && (n !== void 0 && k(
    'watch() "immediate" option is only respected when using the watch(source, callback, options?) signature.'
  ), i !== void 0 && k(
    'watch() "deep" option is only respected when using the watch(source, callback, options?) signature.'
  ), r !== void 0 && k(
    'watch() "once" option is only respected when using the watch(source, callback, options?) signature.'
  ));
  const a = (j) => {
    k(
      "Invalid watch source: ",
      j,
      "A watch source can only be a getter/effect function, a ref, a reactive object, or an array of these types."
    );
  }, u = ve, c = (j) => i === !0 ? j : (
    // for deep: false, only traverse root-level properties
    Qt(j, i === !1 ? 1 : void 0)
  );
  let d, p = !1, g = !1;
  if (Se(e) ? (d = () => e.value, p = Bt(e)) : nn(e) ? (d = () => c(e), p = !0) : Z(e) ? (g = !0, p = e.some((j) => nn(j) || Bt(j)), d = () => e.map((j) => {
    if (Se(j))
      return j.value;
    if (nn(j))
      return c(j);
    if (Q(j))
      return ct(j, u, 2);
    E.NODE_ENV !== "production" && a(j);
  })) : Q(e) ? t ? d = () => ct(e, u, 2) : d = () => (m && m(), He(
    e,
    u,
    3,
    [b]
  )) : (d = he, E.NODE_ENV !== "production" && a(e)), t && i) {
    const j = d;
    d = () => Qt(j());
  }
  let m, b = (j) => {
    m = S.onStop = () => {
      ct(j, u, 4), m = S.onStop = void 0;
    };
  }, w;
  if (Pi)
    if (b = he, t ? n && He(t, u, 3, [
      d(),
      g ? [] : void 0,
      b
    ]) : d(), s === "sync") {
      const j = Kc();
      w = j.__watcherHandles || (j.__watcherHandles = []);
    } else
      return he;
  let x = g ? new Array(e.length).fill(qn) : qn;
  const v = () => {
    if (!(!S.active || !S.dirty))
      if (t) {
        const j = S.run();
        (i || p || (g ? j.some((q, N) => Ot(q, x[N])) : Ot(j, x))) && (m && m(), He(t, u, 3, [
          j,
          // pass undefined as the old value when it's changed for the first time
          x === qn ? void 0 : g && x[0] === qn ? [] : x,
          b
        ]), x = j);
      } else
        S.run();
  };
  v.allowRecurse = !!t;
  let h;
  s === "sync" ? h = v : s === "post" ? h = () => De(v, u && u.suspense) : (v.pre = !0, u && (v.id = u.uid), h = () => Ti(v));
  const S = new Vs(d, he, h), O = Ga(), B = () => {
    S.stop(), O && Ms(O.effects, S);
  };
  return E.NODE_ENV !== "production" && (S.onTrack = o, S.onTrigger = l), t ? n ? v() : x = S.run() : s === "post" ? De(
    S.run.bind(S),
    u && u.suspense
  ) : S.run(), w && w.push(B), B;
}
function Yc(e, t, n) {
  const i = this.proxy, s = de(e) ? e.includes(".") ? fl(i, e) : () => i[e] : e.bind(i, i);
  let r;
  Q(t) ? r = t : (r = t.handler, n = t);
  const o = Vn(this), l = dl(s, r.bind(i), n);
  return o(), l;
}
function fl(e, t) {
  const n = t.split(".");
  return () => {
    let i = e;
    for (let s = 0; s < n.length && i; s++)
      i = i[n[s]];
    return i;
  };
}
function Qt(e, t = 1 / 0, n) {
  if (t <= 0 || !le(e) || e.__v_skip || (n = n || /* @__PURE__ */ new Set(), n.has(e)))
    return e;
  if (n.add(e), t--, Se(e))
    Qt(e.value, t, n);
  else if (Z(e))
    for (let i = 0; i < e.length; i++)
      Qt(e[i], t, n);
  else if (xo(e) || Vt(e))
    e.forEach((i) => {
      Qt(i, t, n);
    });
  else if (Oo(e))
    for (const i in e)
      Qt(e[i], t, n);
  return e;
}
function pl(e) {
  Oa(e) && k("Do not use built-in directive ids as custom directive id: " + e);
}
function Mt(e, t, n, i) {
  const s = e.dirs, r = t && t.dirs;
  for (let o = 0; o < s.length; o++) {
    const l = s[o];
    r && (l.oldValue = r[o].value);
    let a = l.dir[i];
    a && (ft(), He(a, n, 8, [
      e.el,
      l,
      e,
      t
    ]), pt());
  }
}
const En = (e) => !!e.type.__asyncLoader, Ws = (e) => e.type.__isKeepAlive;
function Xc(e, t) {
  hl(e, "a", t);
}
function Jc(e, t) {
  hl(e, "da", t);
}
function hl(e, t, n = ve) {
  const i = e.__wdc || (e.__wdc = () => {
    let s = n;
    for (; s; ) {
      if (s.isDeactivated)
        return;
      s = s.parent;
    }
    return e();
  });
  if (Ci(t, i, n), n) {
    let s = n.parent;
    for (; s && s.parent; )
      Ws(s.parent.vnode) && Zc(i, t, n, s), s = s.parent;
  }
}
function Zc(e, t, n, i) {
  const s = Ci(
    t,
    e,
    i,
    !0
    /* prepend */
  );
  gl(() => {
    Ms(i[t], s);
  }, n);
}
function Ci(e, t, n = ve, i = !1) {
  if (n) {
    const s = n[e] || (n[e] = []), r = t.__weh || (t.__weh = (...o) => {
      if (n.isUnmounted)
        return;
      ft();
      const l = Vn(n), a = He(t, n, e, o);
      return l(), pt(), a;
    });
    return i ? s.unshift(r) : s.push(r), r;
  } else if (E.NODE_ENV !== "production") {
    const s = Lt(js[e].replace(/ hook$/, ""));
    k(
      `${s} is called when there is no active component instance to be associated with. Lifecycle injection APIs can only be used during execution of setup(). If you are using async setup(), make sure to register lifecycle hooks before the first await statement.`
    );
  }
}
const ht = (e) => (t, n = ve) => (
  // post-create lifecycle registrations are noops during SSR (except for serverPrefetch)
  (!Pi || e === "sp") && Ci(e, (...i) => t(...i), n)
), Qc = ht("bm"), Ks = ht("m"), ml = ht("bu"), Ys = ht("u"), Xs = ht("bum"), gl = ht("um"), eu = ht("sp"), tu = ht(
  "rtg"
), nu = ht(
  "rtc"
);
function iu(e, t = ve) {
  Ci("ec", e, t);
}
function ki(e, t, n = {}, i, s) {
  if (Ee.isCE || Ee.parent && En(Ee.parent) && Ee.parent.isCE)
    return t !== "default" && (n.name = t), ce("slot", n, i && i());
  let r = e[t];
  E.NODE_ENV !== "production" && r && r.length > 1 && (k(
    "SSR-optimized slot function detected in a non-SSR-optimized render function. You need to mark this component with $dynamic-slots in the parent template."
  ), r = () => []), r && r._c && (r._d = !1), me();
  const o = r && vl(r(n)), l = Ni(
    $e,
    {
      key: n.key || // slot content array of a dynamic conditional slot may have a branch
      // key attached in the `createSlots` helper, respect that
      o && o.key || `_${t}`
    },
    o || (i ? i() : []),
    o && e._ === 1 ? 64 : -2
  );
  return l.scopeId && (l.slotScopeIds = [l.scopeId + "-s"]), r && r._c && (r._d = !0), l;
}
function vl(e) {
  return e.some((t) => on(t) ? !(t.type === Me || t.type === $e && !vl(t.children)) : !0) ? e : null;
}
const fs = (e) => e ? Vl(e) ? nr(e) || e.proxy : fs(e.parent) : null, jt = (
  // Move PURE marker to new line to workaround compiler discarding it
  // due to type annotation
  /* @__PURE__ */ fe(/* @__PURE__ */ Object.create(null), {
    $: (e) => e,
    $el: (e) => e.vnode.el,
    $data: (e) => e.data,
    $props: (e) => E.NODE_ENV !== "production" ? Je(e.props) : e.props,
    $attrs: (e) => E.NODE_ENV !== "production" ? Je(e.attrs) : e.attrs,
    $slots: (e) => E.NODE_ENV !== "production" ? Je(e.slots) : e.slots,
    $refs: (e) => E.NODE_ENV !== "production" ? Je(e.refs) : e.refs,
    $parent: (e) => fs(e.parent),
    $root: (e) => fs(e.root),
    $emit: (e) => e.emit,
    $options: (e) => Zs(e),
    $forceUpdate: (e) => e.f || (e.f = () => {
      e.effect.dirty = !0, Ti(e.update);
    }),
    $nextTick: (e) => e.n || (e.n = Xo.bind(e.proxy)),
    $watch: (e) => Yc.bind(e)
  })
), Js = (e) => e === "_" || e === "$", ji = (e, t) => e !== ae && !e.__isScriptSetup && se(e, t), bl = {
  get({ _: e }, t) {
    if (t === "__v_skip")
      return !0;
    const { ctx: n, setupState: i, data: s, props: r, accessCache: o, type: l, appContext: a } = e;
    if (E.NODE_ENV !== "production" && t === "__isVue")
      return !0;
    let u;
    if (t[0] !== "$") {
      const g = o[t];
      if (g !== void 0)
        switch (g) {
          case 1:
            return i[t];
          case 2:
            return s[t];
          case 4:
            return n[t];
          case 3:
            return r[t];
        }
      else {
        if (ji(i, t))
          return o[t] = 1, i[t];
        if (s !== ae && se(s, t))
          return o[t] = 2, s[t];
        if (
          // only cache other properties when instance has declared (thus stable)
          // props
          (u = e.propsOptions[0]) && se(u, t)
        )
          return o[t] = 3, r[t];
        if (n !== ae && se(n, t))
          return o[t] = 4, n[t];
        ps && (o[t] = 0);
      }
    }
    const c = jt[t];
    let d, p;
    if (c)
      return t === "$attrs" ? (_e(e.attrs, "get", ""), E.NODE_ENV !== "production" && ui()) : E.NODE_ENV !== "production" && t === "$slots" && _e(e, "get", t), c(e);
    if (
      // css module (injected by vue-loader)
      (d = l.__cssModules) && (d = d[t])
    )
      return d;
    if (n !== ae && se(n, t))
      return o[t] = 4, n[t];
    if (
      // global properties
      p = a.config.globalProperties, se(p, t)
    )
      return p[t];
    E.NODE_ENV !== "production" && Ee && (!de(t) || // #1091 avoid internal isRef/isVNode checks on component instance leading
    // to infinite warning loop
    t.indexOf("__v") !== 0) && (s !== ae && Js(t[0]) && se(s, t) ? k(
      `Property ${JSON.stringify(
        t
      )} must be accessed via $data because it starts with a reserved character ("$" or "_") and is not proxied on the render context.`
    ) : e === Ee && k(
      `Property ${JSON.stringify(t)} was accessed during render but is not defined on instance.`
    ));
  },
  set({ _: e }, t, n) {
    const { data: i, setupState: s, ctx: r } = e;
    return ji(s, t) ? (s[t] = n, !0) : E.NODE_ENV !== "production" && s.__isScriptSetup && se(s, t) ? (k(`Cannot mutate <script setup> binding "${t}" from Options API.`), !1) : i !== ae && se(i, t) ? (i[t] = n, !0) : se(e.props, t) ? (E.NODE_ENV !== "production" && k(`Attempting to mutate prop "${t}". Props are readonly.`), !1) : t[0] === "$" && t.slice(1) in e ? (E.NODE_ENV !== "production" && k(
      `Attempting to mutate public property "${t}". Properties starting with $ are reserved and readonly.`
    ), !1) : (E.NODE_ENV !== "production" && t in e.appContext.config.globalProperties ? Object.defineProperty(r, t, {
      enumerable: !0,
      configurable: !0,
      value: n
    }) : r[t] = n, !0);
  },
  has({
    _: { data: e, setupState: t, accessCache: n, ctx: i, appContext: s, propsOptions: r }
  }, o) {
    let l;
    return !!n[o] || e !== ae && se(e, o) || ji(t, o) || (l = r[0]) && se(l, o) || se(i, o) || se(jt, o) || se(s.config.globalProperties, o);
  },
  defineProperty(e, t, n) {
    return n.get != null ? e._.accessCache[t] = 0 : se(n, "value") && this.set(e, t, n.value, null), Reflect.defineProperty(e, t, n);
  }
};
E.NODE_ENV !== "production" && (bl.ownKeys = (e) => (k(
  "Avoid app logic that relies on enumerating keys on a component instance. The keys will be empty in production mode to avoid performance overhead."
), Reflect.ownKeys(e)));
function su(e) {
  const t = {};
  return Object.defineProperty(t, "_", {
    configurable: !0,
    enumerable: !1,
    get: () => e
  }), Object.keys(jt).forEach((n) => {
    Object.defineProperty(t, n, {
      configurable: !0,
      enumerable: !1,
      get: () => jt[n](e),
      // intercepted by the proxy so no need for implementation,
      // but needed to prevent set errors
      set: he
    });
  }), t;
}
function ru(e) {
  const {
    ctx: t,
    propsOptions: [n]
  } = e;
  n && Object.keys(n).forEach((i) => {
    Object.defineProperty(t, i, {
      enumerable: !0,
      configurable: !0,
      get: () => e.props[i],
      set: he
    });
  });
}
function ou(e) {
  const { ctx: t, setupState: n } = e;
  Object.keys(ne(n)).forEach((i) => {
    if (!n.__isScriptSetup) {
      if (Js(i[0])) {
        k(
          `setup() return property ${JSON.stringify(
            i
          )} should not start with "$" or "_" which are reserved prefixes for Vue internals.`
        );
        return;
      }
      Object.defineProperty(t, i, {
        enumerable: !0,
        configurable: !0,
        get: () => n[i],
        set: he
      });
    }
  });
}
function Mr(e) {
  return Z(e) ? e.reduce(
    (t, n) => (t[n] = null, t),
    {}
  ) : e;
}
function lu() {
  const e = /* @__PURE__ */ Object.create(null);
  return (t, n) => {
    e[n] ? k(`${t} property "${n}" is already defined in ${e[n]}.`) : e[n] = t;
  };
}
let ps = !0;
function au(e) {
  const t = Zs(e), n = e.proxy, i = e.ctx;
  ps = !1, t.beforeCreate && Ar(t.beforeCreate, e, "bc");
  const {
    // state
    data: s,
    computed: r,
    methods: o,
    watch: l,
    provide: a,
    inject: u,
    // lifecycle
    created: c,
    beforeMount: d,
    mounted: p,
    beforeUpdate: g,
    updated: m,
    activated: b,
    deactivated: w,
    beforeDestroy: x,
    beforeUnmount: v,
    destroyed: h,
    unmounted: S,
    render: O,
    renderTracked: B,
    renderTriggered: j,
    errorCaptured: q,
    serverPrefetch: N,
    // public API
    expose: I,
    inheritAttrs: G,
    // assets
    components: A,
    directives: L,
    filters: z
  } = t, U = E.NODE_ENV !== "production" ? lu() : null;
  if (E.NODE_ENV !== "production") {
    const [_] = e.propsOptions;
    if (_)
      for (const P in _)
        U("Props", P);
  }
  if (u && cu(u, i, U), o)
    for (const _ in o) {
      const P = o[_];
      Q(P) ? (E.NODE_ENV !== "production" ? Object.defineProperty(i, _, {
        value: P.bind(n),
        configurable: !0,
        enumerable: !0,
        writable: !0
      }) : i[_] = P.bind(n), E.NODE_ENV !== "production" && U("Methods", _)) : E.NODE_ENV !== "production" && k(
        `Method "${_}" has type "${typeof P}" in the component definition. Did you reference the function correctly?`
      );
    }
  if (s) {
    E.NODE_ENV !== "production" && !Q(s) && k(
      "The data option must be a function. Plain object usage is no longer supported."
    );
    const _ = s.call(n, n);
    if (E.NODE_ENV !== "production" && As(_) && k(
      "data() returned a Promise - note data() cannot be async; If you intend to perform data fetching before component renders, use async setup() + <Suspense>."
    ), !le(_))
      E.NODE_ENV !== "production" && k("data() should return an object.");
    else if (e.data = zs(_), E.NODE_ENV !== "production")
      for (const P in _)
        U("Data", P), Js(P[0]) || Object.defineProperty(i, P, {
          configurable: !0,
          enumerable: !0,
          get: () => _[P],
          set: he
        });
  }
  if (ps = !0, r)
    for (const _ in r) {
      const P = r[_], K = Q(P) ? P.bind(n, n) : Q(P.get) ? P.get.bind(n, n) : he;
      E.NODE_ENV !== "production" && K === he && k(`Computed property "${_}" has no getter.`);
      const pe = !Q(P) && Q(P.set) ? P.set.bind(n) : E.NODE_ENV !== "production" ? () => {
        k(
          `Write operation failed: computed property "${_}" is readonly.`
        );
      } : he, Ne = Bl({
        get: K,
        set: pe
      });
      Object.defineProperty(i, _, {
        enumerable: !0,
        configurable: !0,
        get: () => Ne.value,
        set: (Te) => Ne.value = Te
      }), E.NODE_ENV !== "production" && U("Computed", _);
    }
  if (l)
    for (const _ in l)
      yl(l[_], i, n, _);
  if (a) {
    const _ = Q(a) ? a.call(n) : a;
    Reflect.ownKeys(_).forEach((P) => {
      Qs(P, _[P]);
    });
  }
  c && Ar(c, e, "c");
  function Y(_, P) {
    Z(P) ? P.forEach((K) => _(K.bind(n))) : P && _(P.bind(n));
  }
  if (Y(Qc, d), Y(Ks, p), Y(ml, g), Y(Ys, m), Y(Xc, b), Y(Jc, w), Y(iu, q), Y(nu, B), Y(tu, j), Y(Xs, v), Y(gl, S), Y(eu, N), Z(I))
    if (I.length) {
      const _ = e.exposed || (e.exposed = {});
      I.forEach((P) => {
        Object.defineProperty(_, P, {
          get: () => n[P],
          set: (K) => n[P] = K
        });
      });
    } else e.exposed || (e.exposed = {});
  O && e.render === he && (e.render = O), G != null && (e.inheritAttrs = G), A && (e.components = A), L && (e.directives = L);
}
function cu(e, t, n = he) {
  Z(e) && (e = hs(e));
  for (const i in e) {
    const s = e[i];
    let r;
    le(s) ? "default" in s ? r = Qn(
      s.from || i,
      s.default,
      !0
    ) : r = Qn(s.from || i) : r = Qn(s), Se(r) ? Object.defineProperty(t, i, {
      enumerable: !0,
      configurable: !0,
      get: () => r.value,
      set: (o) => r.value = o
    }) : t[i] = r, E.NODE_ENV !== "production" && n("Inject", i);
  }
}
function Ar(e, t, n) {
  He(
    Z(e) ? e.map((i) => i.bind(t.proxy)) : e.bind(t.proxy),
    t,
    n
  );
}
function yl(e, t, n, i) {
  const s = i.includes(".") ? fl(n, i) : () => n[i];
  if (de(e)) {
    const r = t[e];
    Q(r) ? Zn(s, r) : E.NODE_ENV !== "production" && k(`Invalid watch handler specified by key "${e}"`, r);
  } else if (Q(e))
    Zn(s, e.bind(n));
  else if (le(e))
    if (Z(e))
      e.forEach((r) => yl(r, t, n, i));
    else {
      const r = Q(e.handler) ? e.handler.bind(n) : t[e.handler];
      Q(r) ? Zn(s, r, e) : E.NODE_ENV !== "production" && k(`Invalid watch handler specified by key "${e.handler}"`, r);
    }
  else E.NODE_ENV !== "production" && k(`Invalid watch option: "${i}"`, e);
}
function Zs(e) {
  const t = e.type, { mixins: n, extends: i } = t, {
    mixins: s,
    optionsCache: r,
    config: { optionMergeStrategies: o }
  } = e.appContext, l = r.get(t);
  let a;
  return l ? a = l : !s.length && !n && !i ? a = t : (a = {}, s.length && s.forEach(
    (u) => di(a, u, o, !0)
  ), di(a, t, o)), le(t) && r.set(t, a), a;
}
function di(e, t, n, i = !1) {
  const { mixins: s, extends: r } = t;
  r && di(e, r, n, !0), s && s.forEach(
    (o) => di(e, o, n, !0)
  );
  for (const o in t)
    if (i && o === "expose")
      E.NODE_ENV !== "production" && k(
        '"expose" option is ignored when declared in mixins or extends. It should only be declared in the base component itself.'
      );
    else {
      const l = uu[o] || n && n[o];
      e[o] = l ? l(e[o], t[o]) : t[o];
    }
  return e;
}
const uu = {
  data: Lr,
  props: Ir,
  emits: Ir,
  // objects
  methods: vn,
  computed: vn,
  // lifecycle
  beforeCreate: Ce,
  created: Ce,
  beforeMount: Ce,
  mounted: Ce,
  beforeUpdate: Ce,
  updated: Ce,
  beforeDestroy: Ce,
  beforeUnmount: Ce,
  destroyed: Ce,
  unmounted: Ce,
  activated: Ce,
  deactivated: Ce,
  errorCaptured: Ce,
  serverPrefetch: Ce,
  // assets
  components: vn,
  directives: vn,
  // watch
  watch: fu,
  // provide / inject
  provide: Lr,
  inject: du
};
function Lr(e, t) {
  return t ? e ? function() {
    return fe(
      Q(e) ? e.call(this, this) : e,
      Q(t) ? t.call(this, this) : t
    );
  } : t : e;
}
function du(e, t) {
  return vn(hs(e), hs(t));
}
function hs(e) {
  if (Z(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++)
      t[e[n]] = e[n];
    return t;
  }
  return e;
}
function Ce(e, t) {
  return e ? [...new Set([].concat(e, t))] : t;
}
function vn(e, t) {
  return e ? fe(/* @__PURE__ */ Object.create(null), e, t) : t;
}
function Ir(e, t) {
  return e ? Z(e) && Z(t) ? [.../* @__PURE__ */ new Set([...e, ...t])] : fe(
    /* @__PURE__ */ Object.create(null),
    Mr(e),
    Mr(t ?? {})
  ) : t;
}
function fu(e, t) {
  if (!e)
    return t;
  if (!t)
    return e;
  const n = fe(/* @__PURE__ */ Object.create(null), e);
  for (const i in t)
    n[i] = Ce(e[i], t[i]);
  return n;
}
function El() {
  return {
    app: null,
    config: {
      isNativeTag: xa,
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
let pu = 0;
function hu(e, t) {
  return function(i, s = null) {
    Q(i) || (i = fe({}, i)), s != null && !le(s) && (E.NODE_ENV !== "production" && k("root props passed to app.mount() must be an object."), s = null);
    const r = El(), o = /* @__PURE__ */ new WeakSet();
    let l = !1;
    const a = r.app = {
      _uid: pu++,
      _component: i,
      _props: s,
      _container: null,
      _context: r,
      _instance: null,
      version: Gr,
      get config() {
        return r.config;
      },
      set config(u) {
        E.NODE_ENV !== "production" && k(
          "app.config cannot be replaced. Modify individual options instead."
        );
      },
      use(u, ...c) {
        return o.has(u) ? E.NODE_ENV !== "production" && k("Plugin has already been applied to target app.") : u && Q(u.install) ? (o.add(u), u.install(a, ...c)) : Q(u) ? (o.add(u), u(a, ...c)) : E.NODE_ENV !== "production" && k(
          'A plugin must either be a function or an object with an "install" function.'
        ), a;
      },
      mixin(u) {
        return r.mixins.includes(u) ? E.NODE_ENV !== "production" && k(
          "Mixin has already been applied to target app" + (u.name ? `: ${u.name}` : "")
        ) : r.mixins.push(u), a;
      },
      component(u, c) {
        return E.NODE_ENV !== "production" && ys(u, r.config), c ? (E.NODE_ENV !== "production" && r.components[u] && k(`Component "${u}" has already been registered in target app.`), r.components[u] = c, a) : r.components[u];
      },
      directive(u, c) {
        return E.NODE_ENV !== "production" && pl(u), c ? (E.NODE_ENV !== "production" && r.directives[u] && k(`Directive "${u}" has already been registered in target app.`), r.directives[u] = c, a) : r.directives[u];
      },
      mount(u, c, d) {
        if (l)
          E.NODE_ENV !== "production" && k(
            "App has already been mounted.\nIf you want to remount the same app, move your app creation logic into a factory function and create fresh app instances for each mount - e.g. `const createMyApp = () => createApp(App)`"
          );
        else {
          E.NODE_ENV !== "production" && u.__vue_app__ && k(
            "There is already an app instance mounted on the host container.\n If you want to mount another app on the same host container, you need to unmount the previous app by calling `app.unmount()` first."
          );
          const p = ce(i, s);
          return p.appContext = r, d === !0 ? d = "svg" : d === !1 && (d = void 0), E.NODE_ENV !== "production" && (r.reload = () => {
            e(
              Nt(p),
              u,
              d
            );
          }), c && t ? t(p, u) : e(p, u, d), l = !0, a._container = u, u.__vue_app__ = a, E.NODE_ENV !== "production" && (a._instance = p.component, Mc(a, Gr)), nr(p.component) || p.component.proxy;
        }
      },
      unmount() {
        l ? (e(null, a._container), E.NODE_ENV !== "production" && (a._instance = null, Ac(a)), delete a._container.__vue_app__) : E.NODE_ENV !== "production" && k("Cannot unmount an app that is not mounted.");
      },
      provide(u, c) {
        return E.NODE_ENV !== "production" && u in r.provides && k(
          `App already provides property with key "${String(u)}". It will be overwritten with the new value.`
        ), r.provides[u] = c, a;
      },
      runWithContext(u) {
        const c = wn;
        wn = a;
        try {
          return u();
        } finally {
          wn = c;
        }
      }
    };
    return a;
  };
}
let wn = null;
function Qs(e, t) {
  if (!ve)
    E.NODE_ENV !== "production" && k("provide() can only be used inside setup().");
  else {
    let n = ve.provides;
    const i = ve.parent && ve.parent.provides;
    i === n && (n = ve.provides = Object.create(i)), n[e] = t;
  }
}
function Qn(e, t, n = !1) {
  const i = ve || Ee;
  if (i || wn) {
    const s = i ? i.parent == null ? i.vnode.appContext && i.vnode.appContext.provides : i.parent.provides : wn._context.provides;
    if (s && e in s)
      return s[e];
    if (arguments.length > 1)
      return n && Q(t) ? t.call(i && i.proxy) : t;
    E.NODE_ENV !== "production" && k(`injection "${String(e)}" not found.`);
  } else E.NODE_ENV !== "production" && k("inject() can only be used inside setup() or functional components.");
}
const wl = {}, _l = () => Object.create(wl), Sl = (e) => Object.getPrototypeOf(e) === wl;
function mu(e, t, n, i = !1) {
  const s = {}, r = _l();
  e.propsDefaults = /* @__PURE__ */ Object.create(null), xl(e, t, s, r);
  for (const o in e.propsOptions[0])
    o in s || (s[o] = void 0);
  E.NODE_ENV !== "production" && Ol(t || {}, s, e), n ? e.props = i ? s : uc(s) : e.type.props ? e.props = s : e.props = r, e.attrs = r;
}
function gu(e) {
  for (; e; ) {
    if (e.type.__hmrId)
      return !0;
    e = e.parent;
  }
}
function vu(e, t, n, i) {
  const {
    props: s,
    attrs: r,
    vnode: { patchFlag: o }
  } = e, l = ne(s), [a] = e.propsOptions;
  let u = !1;
  if (
    // always force full diff in dev
    // - #1942 if hmr is enabled with sfc component
    // - vite#872 non-sfc component used by sfc component
    !(E.NODE_ENV !== "production" && gu(e)) && (i || o > 0) && !(o & 16)
  ) {
    if (o & 8) {
      const c = e.vnode.dynamicProps;
      for (let d = 0; d < c.length; d++) {
        let p = c[d];
        if (Oi(e.emitsOptions, p))
          continue;
        const g = t[p];
        if (a)
          if (se(r, p))
            g !== r[p] && (r[p] = g, u = !0);
          else {
            const m = et(p);
            s[m] = ms(
              a,
              l,
              m,
              g,
              e,
              !1
            );
          }
        else
          g !== r[p] && (r[p] = g, u = !0);
      }
    }
  } else {
    xl(e, t, s, r) && (u = !0);
    let c;
    for (const d in l)
      (!t || // for camelCase
      !se(t, d) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((c = Tt(d)) === d || !se(t, c))) && (a ? n && // for camelCase
      (n[d] !== void 0 || // for kebab-case
      n[c] !== void 0) && (s[d] = ms(
        a,
        l,
        d,
        void 0,
        e,
        !0
      )) : delete s[d]);
    if (r !== l)
      for (const d in r)
        (!t || !se(t, d)) && (delete r[d], u = !0);
  }
  u && Qe(e.attrs, "set", ""), E.NODE_ENV !== "production" && Ol(t || {}, s, e);
}
function xl(e, t, n, i) {
  const [s, r] = e.propsOptions;
  let o = !1, l;
  if (t)
    for (let a in t) {
      if (bn(a))
        continue;
      const u = t[a];
      let c;
      s && se(s, c = et(a)) ? !r || !r.includes(c) ? n[c] = u : (l || (l = {}))[c] = u : Oi(e.emitsOptions, a) || (!(a in i) || u !== i[a]) && (i[a] = u, o = !0);
    }
  if (r) {
    const a = ne(n), u = l || ae;
    for (let c = 0; c < r.length; c++) {
      const d = r[c];
      n[d] = ms(
        s,
        a,
        d,
        u[d],
        e,
        !se(u, d)
      );
    }
  }
  return o;
}
function ms(e, t, n, i, s, r) {
  const o = e[n];
  if (o != null) {
    const l = se(o, "default");
    if (l && i === void 0) {
      const a = o.default;
      if (o.type !== Function && !o.skipFactory && Q(a)) {
        const { propsDefaults: u } = s;
        if (n in u)
          i = u[n];
        else {
          const c = Vn(s);
          i = u[n] = a.call(
            null,
            t
          ), c();
        }
      } else
        i = a;
    }
    o[
      0
      /* shouldCast */
    ] && (r && !l ? i = !1 : o[
      1
      /* shouldCastTrue */
    ] && (i === "" || i === Tt(n)) && (i = !0));
  }
  return i;
}
function Tl(e, t, n = !1) {
  const i = t.propsCache, s = i.get(e);
  if (s)
    return s;
  const r = e.props, o = {}, l = [];
  let a = !1;
  if (!Q(e)) {
    const c = (d) => {
      a = !0;
      const [p, g] = Tl(d, t, !0);
      fe(o, p), g && l.push(...g);
    };
    !n && t.mixins.length && t.mixins.forEach(c), e.extends && c(e.extends), e.mixins && e.mixins.forEach(c);
  }
  if (!r && !a)
    return le(e) && i.set(e, tn), tn;
  if (Z(r))
    for (let c = 0; c < r.length; c++) {
      E.NODE_ENV !== "production" && !de(r[c]) && k("props must be strings when using array syntax.", r[c]);
      const d = et(r[c]);
      Rr(d) && (o[d] = ae);
    }
  else if (r) {
    E.NODE_ENV !== "production" && !le(r) && k("invalid props options", r);
    for (const c in r) {
      const d = et(c);
      if (Rr(d)) {
        const p = r[c], g = o[d] = Z(p) || Q(p) ? { type: p } : fe({}, p);
        if (g) {
          const m = $r(Boolean, g.type), b = $r(String, g.type);
          g[
            0
            /* shouldCast */
          ] = m > -1, g[
            1
            /* shouldCastTrue */
          ] = b < 0 || m < b, (m > -1 || se(g, "default")) && l.push(d);
        }
      }
    }
  }
  const u = [o, l];
  return le(e) && i.set(e, u), u;
}
function Rr(e) {
  return e[0] !== "$" && !bn(e) ? !0 : (E.NODE_ENV !== "production" && k(`Invalid prop name: "${e}" is a reserved property.`), !1);
}
function gs(e) {
  return e === null ? "null" : typeof e == "function" ? e.name || "" : typeof e == "object" && e.constructor && e.constructor.name || "";
}
function Vr(e, t) {
  return gs(e) === gs(t);
}
function $r(e, t) {
  return Z(t) ? t.findIndex((n) => Vr(n, e)) : Q(t) && Vr(t, e) ? 0 : -1;
}
function Ol(e, t, n) {
  const i = ne(t), s = n.propsOptions[0];
  for (const r in s) {
    let o = s[r];
    o != null && bu(
      r,
      i[r],
      o,
      E.NODE_ENV !== "production" ? Je(i) : i,
      !se(e, r) && !se(e, Tt(r))
    );
  }
}
function bu(e, t, n, i, s) {
  const { type: r, required: o, validator: l, skipCheck: a } = n;
  if (o && s) {
    k('Missing required prop: "' + e + '"');
    return;
  }
  if (!(t == null && !o)) {
    if (r != null && r !== !0 && !a) {
      let u = !1;
      const c = Z(r) ? r : [r], d = [];
      for (let p = 0; p < c.length && !u; p++) {
        const { valid: g, expectedType: m } = Eu(t, c[p]);
        d.push(m || ""), u = g;
      }
      if (!u) {
        k(wu(e, t, d));
        return;
      }
    }
    l && !l(t, i) && k('Invalid prop: custom validator check failed for prop "' + e + '".');
  }
}
const yu = /* @__PURE__ */ dt(
  "String,Number,Boolean,Function,Symbol,BigInt"
);
function Eu(e, t) {
  let n;
  const i = gs(t);
  if (yu(i)) {
    const s = typeof e;
    n = s === i.toLowerCase(), !n && s === "object" && (n = e instanceof t);
  } else i === "Object" ? n = le(e) : i === "Array" ? n = Z(e) : i === "null" ? n = e === null : n = e instanceof t;
  return {
    valid: n,
    expectedType: i
  };
}
function wu(e, t, n) {
  if (n.length === 0)
    return `Prop type [] for prop "${e}" won't match anything. Did you mean to use type Array instead?`;
  let i = `Invalid prop: type check failed for prop "${e}". Expected ${n.map(Gt).join(" | ")}`;
  const s = n[0], r = Ls(t), o = Fr(t, s), l = Fr(t, r);
  return n.length === 1 && Br(s) && !_u(s, r) && (i += ` with value ${o}`), i += `, got ${r} `, Br(r) && (i += `with value ${l}.`), i;
}
function Fr(e, t) {
  return t === "String" ? `"${e}"` : t === "Number" ? `${Number(e)}` : `${e}`;
}
function Br(e) {
  return ["string", "number", "boolean"].some((n) => e.toLowerCase() === n);
}
function _u(...e) {
  return e.some((t) => t.toLowerCase() === "boolean");
}
const Cl = (e) => e[0] === "_" || e === "$stable", er = (e) => Z(e) ? e.map(ke) : [ke(e)], Su = (e, t, n) => {
  if (t._n)
    return t;
  const i = It((...s) => (E.NODE_ENV !== "production" && ve && (!n || n.root === ve.root) && k(
    `Slot "${e}" invoked outside of the render function: this will not track dependencies used in the slot. Invoke the slot function inside the render function instead.`
  ), er(t(...s))), n);
  return i._c = !1, i;
}, Nl = (e, t, n) => {
  const i = e._ctx;
  for (const s in e) {
    if (Cl(s))
      continue;
    const r = e[s];
    if (Q(r))
      t[s] = Su(s, r, i);
    else if (r != null) {
      E.NODE_ENV !== "production" && k(
        `Non-function value encountered for slot "${s}". Prefer function slots for better performance.`
      );
      const o = er(r);
      t[s] = () => o;
    }
  }
}, Pl = (e, t) => {
  E.NODE_ENV !== "production" && !Ws(e.vnode) && k(
    "Non-function value encountered for default slot. Prefer function slots for better performance."
  );
  const n = er(t);
  e.slots.default = () => n;
}, xu = (e, t) => {
  const n = e.slots = _l();
  if (e.vnode.shapeFlag & 32) {
    const i = t._;
    i ? (fe(n, t), Co(n, "_", i, !0)) : Nl(t, n);
  } else t && Pl(e, t);
}, Tu = (e, t, n) => {
  const { vnode: i, slots: s } = e;
  let r = !0, o = ae;
  if (i.shapeFlag & 32) {
    const l = t._;
    l ? E.NODE_ENV !== "production" && kt ? (fe(s, t), Qe(e, "set", "$slots")) : n && l === 1 ? r = !1 : (fe(s, t), !n && l === 1 && delete s._) : (r = !t.$stable, Nl(t, s)), o = t;
  } else t && (Pl(e, t), o = { default: 1 });
  if (r)
    for (const l in s)
      !Cl(l) && o[l] == null && delete s[l];
};
function vs(e, t, n, i, s = !1) {
  if (Z(e)) {
    e.forEach(
      (p, g) => vs(
        p,
        t && (Z(t) ? t[g] : t),
        n,
        i,
        s
      )
    );
    return;
  }
  if (En(i) && !s)
    return;
  const r = i.shapeFlag & 4 ? nr(i.component) || i.component.proxy : i.el, o = s ? null : r, { i: l, r: a } = e;
  if (E.NODE_ENV !== "production" && !l) {
    k(
      "Missing ref owner context. ref cannot be used on hoisted vnodes. A vnode with ref must be created inside the render function."
    );
    return;
  }
  const u = t && t.r, c = l.refs === ae ? l.refs = {} : l.refs, d = l.setupState;
  if (u != null && u !== a && (de(u) ? (c[u] = null, se(d, u) && (d[u] = null)) : Se(u) && (u.value = null)), Q(a))
    ct(a, l, 12, [o, c]);
  else {
    const p = de(a), g = Se(a);
    if (p || g) {
      const m = () => {
        if (e.f) {
          const b = p ? se(d, a) ? d[a] : c[a] : a.value;
          s ? Z(b) && Ms(b, r) : Z(b) ? b.includes(r) || b.push(r) : p ? (c[a] = [r], se(d, a) && (d[a] = c[a])) : (a.value = [r], e.k && (c[e.k] = a.value));
        } else p ? (c[a] = o, se(d, a) && (d[a] = o)) : g ? (a.value = o, e.k && (c[e.k] = o)) : E.NODE_ENV !== "production" && k("Invalid template ref type:", a, `(${typeof a})`);
      };
      o ? (m.id = -1, De(m, n)) : m();
    } else E.NODE_ENV !== "production" && k("Invalid template ref type:", a, `(${typeof a})`);
  }
}
let pn, wt;
function st(e, t) {
  e.appContext.config.performance && fi() && wt.mark(`vue-${t}-${e.uid}`), E.NODE_ENV !== "production" && Vc(e, t, fi() ? wt.now() : Date.now());
}
function rt(e, t) {
  if (e.appContext.config.performance && fi()) {
    const n = `vue-${t}-${e.uid}`, i = n + ":end";
    wt.mark(i), wt.measure(
      `<${Di(e, e.type)}> ${t}`,
      n,
      i
    ), wt.clearMarks(n), wt.clearMarks(i);
  }
  E.NODE_ENV !== "production" && $c(e, t, fi() ? wt.now() : Date.now());
}
function fi() {
  return pn !== void 0 || (typeof window < "u" && window.performance ? (pn = !0, wt = window.performance) : pn = !1), pn;
}
function Ou() {
  const e = [];
  if (E.NODE_ENV !== "production" && e.length) {
    const t = e.length > 1;
    console.warn(
      `Feature flag${t ? "s" : ""} ${e.join(", ")} ${t ? "are" : "is"} not explicitly defined. You are running the esm-bundler build of Vue, which expects these compile-time feature flags to be globally injected via the bundler config in order to get better tree-shaking in the production bundle.

For more details, see https://link.vuejs.org/feature-flags.`
    );
  }
}
const De = qc;
function Cu(e) {
  return Nu(e);
}
function Nu(e, t) {
  Ou();
  const n = Rs();
  n.__VUE__ = !0, E.NODE_ENV !== "production" && nl(n.__VUE_DEVTOOLS_GLOBAL_HOOK__, n);
  const {
    insert: i,
    remove: s,
    patchProp: r,
    createElement: o,
    createText: l,
    createComment: a,
    setText: u,
    setElementText: c,
    parentNode: d,
    nextSibling: p,
    setScopeId: g = he,
    insertStaticContent: m
  } = e, b = (f, y, C, D = null, M = null, $ = null, H = void 0, V = null, F = E.NODE_ENV !== "production" && kt ? !1 : !!y.dynamicChildren) => {
    if (f === y)
      return;
    f && !hn(f, y) && (D = zn(f), Ie(f, M, $, !0), f = null), y.patchFlag === -2 && (F = !1, y.dynamicChildren = null);
    const { type: R, ref: W, shapeFlag: J } = y;
    switch (R) {
      case Rn:
        w(f, y, C, D);
        break;
      case Me:
        x(f, y, C, D);
        break;
      case ti:
        f == null ? v(y, C, D, H) : E.NODE_ENV !== "production" && h(f, y, C, H);
        break;
      case $e:
        L(
          f,
          y,
          C,
          D,
          M,
          $,
          H,
          V,
          F
        );
        break;
      default:
        J & 1 ? B(
          f,
          y,
          C,
          D,
          M,
          $,
          H,
          V,
          F
        ) : J & 6 ? z(
          f,
          y,
          C,
          D,
          M,
          $,
          H,
          V,
          F
        ) : J & 64 || J & 128 ? R.process(
          f,
          y,
          C,
          D,
          M,
          $,
          H,
          V,
          F,
          un
        ) : E.NODE_ENV !== "production" && k("Invalid VNode type:", R, `(${typeof R})`);
    }
    W != null && M && vs(W, f && f.ref, $, y || f, !y);
  }, w = (f, y, C, D) => {
    if (f == null)
      i(
        y.el = l(y.children),
        C,
        D
      );
    else {
      const M = y.el = f.el;
      y.children !== f.children && u(M, y.children);
    }
  }, x = (f, y, C, D) => {
    f == null ? i(
      y.el = a(y.children || ""),
      C,
      D
    ) : y.el = f.el;
  }, v = (f, y, C, D) => {
    [f.el, f.anchor] = m(
      f.children,
      y,
      C,
      D,
      f.el,
      f.anchor
    );
  }, h = (f, y, C, D) => {
    if (y.children !== f.children) {
      const M = p(f.anchor);
      O(f), [y.el, y.anchor] = m(
        y.children,
        C,
        M,
        D
      );
    } else
      y.el = f.el, y.anchor = f.anchor;
  }, S = ({ el: f, anchor: y }, C, D) => {
    let M;
    for (; f && f !== y; )
      M = p(f), i(f, C, D), f = M;
    i(y, C, D);
  }, O = ({ el: f, anchor: y }) => {
    let C;
    for (; f && f !== y; )
      C = p(f), s(f), f = C;
    s(y);
  }, B = (f, y, C, D, M, $, H, V, F) => {
    y.type === "svg" ? H = "svg" : y.type === "math" && (H = "mathml"), f == null ? j(
      y,
      C,
      D,
      M,
      $,
      H,
      V,
      F
    ) : I(
      f,
      y,
      M,
      $,
      H,
      V,
      F
    );
  }, j = (f, y, C, D, M, $, H, V) => {
    let F, R;
    const { props: W, shapeFlag: J, transition: X, dirs: ee } = f;
    if (F = f.el = o(
      f.type,
      $,
      W && W.is,
      W
    ), J & 8 ? c(F, f.children) : J & 16 && N(
      f.children,
      F,
      null,
      D,
      M,
      Hi(f, $),
      H,
      V
    ), ee && Mt(f, null, D, "created"), q(F, f, f.scopeId, H, D), W) {
      for (const oe in W)
        oe !== "value" && !bn(oe) && r(
          F,
          oe,
          null,
          W[oe],
          $,
          f.children,
          D,
          M,
          it
        );
      "value" in W && r(F, "value", null, W.value, $), (R = W.onVnodeBeforeMount) && Ke(R, D, f);
    }
    E.NODE_ENV !== "production" && (Object.defineProperty(F, "__vnode", {
      value: f,
      enumerable: !1
    }), Object.defineProperty(F, "__vueParentComponent", {
      value: D,
      enumerable: !1
    })), ee && Mt(f, null, D, "beforeMount");
    const re = Pu(M, X);
    re && X.beforeEnter(F), i(F, y, C), ((R = W && W.onVnodeMounted) || re || ee) && De(() => {
      R && Ke(R, D, f), re && X.enter(F), ee && Mt(f, null, D, "mounted");
    }, M);
  }, q = (f, y, C, D, M) => {
    if (C && g(f, C), D)
      for (let $ = 0; $ < D.length; $++)
        g(f, D[$]);
    if (M) {
      let $ = M.subTree;
      if (E.NODE_ENV !== "production" && $.patchFlag > 0 && $.patchFlag & 2048 && ($ = qs($.children) || $), y === $) {
        const H = M.vnode;
        q(
          f,
          H,
          H.scopeId,
          H.slotScopeIds,
          M.parent
        );
      }
    }
  }, N = (f, y, C, D, M, $, H, V, F = 0) => {
    for (let R = F; R < f.length; R++) {
      const W = f[R] = V ? yt(f[R]) : ke(f[R]);
      b(
        null,
        W,
        y,
        C,
        D,
        M,
        $,
        H,
        V
      );
    }
  }, I = (f, y, C, D, M, $, H) => {
    const V = y.el = f.el;
    let { patchFlag: F, dynamicChildren: R, dirs: W } = y;
    F |= f.patchFlag & 16;
    const J = f.props || ae, X = y.props || ae;
    let ee;
    if (C && At(C, !1), (ee = X.onVnodeBeforeUpdate) && Ke(ee, C, y, f), W && Mt(y, f, C, "beforeUpdate"), C && At(C, !0), E.NODE_ENV !== "production" && kt && (F = 0, H = !1, R = null), R ? (G(
      f.dynamicChildren,
      R,
      V,
      C,
      D,
      Hi(y, M),
      $
    ), E.NODE_ENV !== "production" && ei(f, y)) : H || K(
      f,
      y,
      V,
      null,
      C,
      D,
      Hi(y, M),
      $,
      !1
    ), F > 0) {
      if (F & 16)
        A(
          V,
          y,
          J,
          X,
          C,
          D,
          M
        );
      else if (F & 2 && J.class !== X.class && r(V, "class", null, X.class, M), F & 4 && r(V, "style", J.style, X.style, M), F & 8) {
        const re = y.dynamicProps;
        for (let oe = 0; oe < re.length; oe++) {
          const ue = re[oe], ye = J[ue], Be = X[ue];
          (Be !== ye || ue === "value") && r(
            V,
            ue,
            ye,
            Be,
            M,
            f.children,
            C,
            D,
            it
          );
        }
      }
      F & 1 && f.children !== y.children && c(V, y.children);
    } else !H && R == null && A(
      V,
      y,
      J,
      X,
      C,
      D,
      M
    );
    ((ee = X.onVnodeUpdated) || W) && De(() => {
      ee && Ke(ee, C, y, f), W && Mt(y, f, C, "updated");
    }, D);
  }, G = (f, y, C, D, M, $, H) => {
    for (let V = 0; V < y.length; V++) {
      const F = f[V], R = y[V], W = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        F.el && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        (F.type === $e || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !hn(F, R) || // - In the case of a component, it could contain anything.
        F.shapeFlag & 70) ? d(F.el) : (
          // In other cases, the parent container is not actually used so we
          // just pass the block element here to avoid a DOM parentNode call.
          C
        )
      );
      b(
        F,
        R,
        W,
        null,
        D,
        M,
        $,
        H,
        !0
      );
    }
  }, A = (f, y, C, D, M, $, H) => {
    if (C !== D) {
      if (C !== ae)
        for (const V in C)
          !bn(V) && !(V in D) && r(
            f,
            V,
            C[V],
            null,
            H,
            y.children,
            M,
            $,
            it
          );
      for (const V in D) {
        if (bn(V))
          continue;
        const F = D[V], R = C[V];
        F !== R && V !== "value" && r(
          f,
          V,
          R,
          F,
          H,
          y.children,
          M,
          $,
          it
        );
      }
      "value" in D && r(f, "value", C.value, D.value, H);
    }
  }, L = (f, y, C, D, M, $, H, V, F) => {
    const R = y.el = f ? f.el : l(""), W = y.anchor = f ? f.anchor : l("");
    let { patchFlag: J, dynamicChildren: X, slotScopeIds: ee } = y;
    E.NODE_ENV !== "production" && // #5523 dev root fragment may inherit directives
    (kt || J & 2048) && (J = 0, F = !1, X = null), ee && (V = V ? V.concat(ee) : ee), f == null ? (i(R, C, D), i(W, C, D), N(
      // #10007
      // such fragment like `<></>` will be compiled into
      // a fragment which doesn't have a children.
      // In this case fallback to an empty array
      y.children || [],
      C,
      W,
      M,
      $,
      H,
      V,
      F
    )) : J > 0 && J & 64 && X && // #2715 the previous fragment could've been a BAILed one as a result
    // of renderSlot() with no valid children
    f.dynamicChildren ? (G(
      f.dynamicChildren,
      X,
      C,
      M,
      $,
      H,
      V
    ), E.NODE_ENV !== "production" ? ei(f, y) : (
      // #2080 if the stable fragment has a key, it's a <template v-for> that may
      //  get moved around. Make sure all root level vnodes inherit el.
      // #2134 or if it's a component root, it may also get moved around
      // as the component is being moved.
      (y.key != null || M && y === M.subTree) && ei(
        f,
        y,
        !0
        /* shallow */
      )
    )) : K(
      f,
      y,
      C,
      W,
      M,
      $,
      H,
      V,
      F
    );
  }, z = (f, y, C, D, M, $, H, V, F) => {
    y.slotScopeIds = V, f == null ? y.shapeFlag & 512 ? M.ctx.activate(
      y,
      C,
      D,
      H,
      F
    ) : U(
      y,
      C,
      D,
      M,
      $,
      H,
      F
    ) : Y(f, y, F);
  }, U = (f, y, C, D, M, $, H) => {
    const V = f.component = Vu(
      f,
      D,
      M
    );
    if (E.NODE_ENV !== "production" && V.type.__hmrId && Cc(V), E.NODE_ENV !== "production" && (Xn(f), st(V, "mount")), Ws(f) && (V.ctx.renderer = un), E.NODE_ENV !== "production" && st(V, "init"), Bu(V), E.NODE_ENV !== "production" && rt(V, "init"), V.asyncDep) {
      if (M && M.registerDep(V, _), !f.el) {
        const F = V.subTree = ce(Me);
        x(null, F, y, C);
      }
    } else
      _(
        V,
        f,
        y,
        C,
        M,
        $,
        H
      );
    E.NODE_ENV !== "production" && (Jn(), rt(V, "mount"));
  }, Y = (f, y, C) => {
    const D = y.component = f.component;
    if (jc(f, y, C))
      if (D.asyncDep && !D.asyncResolved) {
        E.NODE_ENV !== "production" && Xn(y), P(D, y, C), E.NODE_ENV !== "production" && Jn();
        return;
      } else
        D.next = y, Tc(D.update), D.effect.dirty = !0, D.update();
    else
      y.el = f.el, D.vnode = y;
  }, _ = (f, y, C, D, M, $, H) => {
    const V = () => {
      if (f.isMounted) {
        let { next: W, bu: J, u: X, parent: ee, vnode: re } = f;
        {
          const Jt = Dl(f);
          if (Jt) {
            W && (W.el = re.el, P(f, W, H)), Jt.asyncDep.then(() => {
              f.isUnmounted || V();
            });
            return;
          }
        }
        let oe = W, ue;
        E.NODE_ENV !== "production" && Xn(W || f.vnode), At(f, !1), W ? (W.el = re.el, P(f, W, H)) : W = re, J && fn(J), (ue = W.props && W.props.onVnodeBeforeUpdate) && Ke(ue, ee, W, re), At(f, !0), E.NODE_ENV !== "production" && st(f, "render");
        const ye = zi(f);
        E.NODE_ENV !== "production" && rt(f, "render");
        const Be = f.subTree;
        f.subTree = ye, E.NODE_ENV !== "production" && st(f, "patch"), b(
          Be,
          ye,
          // parent may have changed if it's in a teleport
          d(Be.el),
          // anchor may have changed if it's in a fragment
          zn(Be),
          f,
          M,
          $
        ), E.NODE_ENV !== "production" && rt(f, "patch"), W.el = ye.el, oe === null && Hc(f, ye.el), X && De(X, M), (ue = W.props && W.props.onVnodeUpdated) && De(
          () => Ke(ue, ee, W, re),
          M
        ), E.NODE_ENV !== "production" && il(f), E.NODE_ENV !== "production" && Jn();
      } else {
        let W;
        const { el: J, props: X } = y, { bm: ee, m: re, parent: oe } = f, ue = En(y);
        if (At(f, !1), ee && fn(ee), !ue && (W = X && X.onVnodeBeforeMount) && Ke(W, oe, y), At(f, !0), J && hr) {
          const ye = () => {
            E.NODE_ENV !== "production" && st(f, "render"), f.subTree = zi(f), E.NODE_ENV !== "production" && rt(f, "render"), E.NODE_ENV !== "production" && st(f, "hydrate"), hr(
              J,
              f.subTree,
              f,
              M,
              null
            ), E.NODE_ENV !== "production" && rt(f, "hydrate");
          };
          ue ? y.type.__asyncLoader().then(
            // note: we are moving the render call into an async callback,
            // which means it won't track dependencies - but it's ok because
            // a server-rendered async wrapper is already in resolved state
            // and it will never need to change.
            () => !f.isUnmounted && ye()
          ) : ye();
        } else {
          E.NODE_ENV !== "production" && st(f, "render");
          const ye = f.subTree = zi(f);
          E.NODE_ENV !== "production" && rt(f, "render"), E.NODE_ENV !== "production" && st(f, "patch"), b(
            null,
            ye,
            C,
            D,
            f,
            M,
            $
          ), E.NODE_ENV !== "production" && rt(f, "patch"), y.el = ye.el;
        }
        if (re && De(re, M), !ue && (W = X && X.onVnodeMounted)) {
          const ye = y;
          De(
            () => Ke(W, oe, ye),
            M
          );
        }
        (y.shapeFlag & 256 || oe && En(oe.vnode) && oe.vnode.shapeFlag & 256) && f.a && De(f.a, M), f.isMounted = !0, E.NODE_ENV !== "production" && Lc(f), y = C = D = null;
      }
    }, F = f.effect = new Vs(
      V,
      he,
      () => Ti(R),
      f.scope
      // track it in component's effect scope
    ), R = f.update = () => {
      F.dirty && F.run();
    };
    R.id = f.uid, At(f, !0), E.NODE_ENV !== "production" && (F.onTrack = f.rtc ? (W) => fn(f.rtc, W) : void 0, F.onTrigger = f.rtg ? (W) => fn(f.rtg, W) : void 0, R.ownerInstance = f), R();
  }, P = (f, y, C) => {
    y.component = f;
    const D = f.vnode.props;
    f.vnode = y, f.next = null, vu(f, y.props, D, C), Tu(f, y.children, C), ft(), Or(f), pt();
  }, K = (f, y, C, D, M, $, H, V, F = !1) => {
    const R = f && f.children, W = f ? f.shapeFlag : 0, J = y.children, { patchFlag: X, shapeFlag: ee } = y;
    if (X > 0) {
      if (X & 128) {
        Ne(
          R,
          J,
          C,
          D,
          M,
          $,
          H,
          V,
          F
        );
        return;
      } else if (X & 256) {
        pe(
          R,
          J,
          C,
          D,
          M,
          $,
          H,
          V,
          F
        );
        return;
      }
    }
    ee & 8 ? (W & 16 && it(R, M, $), J !== R && c(C, J)) : W & 16 ? ee & 16 ? Ne(
      R,
      J,
      C,
      D,
      M,
      $,
      H,
      V,
      F
    ) : it(R, M, $, !0) : (W & 8 && c(C, ""), ee & 16 && N(
      J,
      C,
      D,
      M,
      $,
      H,
      V,
      F
    ));
  }, pe = (f, y, C, D, M, $, H, V, F) => {
    f = f || tn, y = y || tn;
    const R = f.length, W = y.length, J = Math.min(R, W);
    let X;
    for (X = 0; X < J; X++) {
      const ee = y[X] = F ? yt(y[X]) : ke(y[X]);
      b(
        f[X],
        ee,
        C,
        null,
        M,
        $,
        H,
        V,
        F
      );
    }
    R > W ? it(
      f,
      M,
      $,
      !0,
      !1,
      J
    ) : N(
      y,
      C,
      D,
      M,
      $,
      H,
      V,
      F,
      J
    );
  }, Ne = (f, y, C, D, M, $, H, V, F) => {
    let R = 0;
    const W = y.length;
    let J = f.length - 1, X = W - 1;
    for (; R <= J && R <= X; ) {
      const ee = f[R], re = y[R] = F ? yt(y[R]) : ke(y[R]);
      if (hn(ee, re))
        b(
          ee,
          re,
          C,
          null,
          M,
          $,
          H,
          V,
          F
        );
      else
        break;
      R++;
    }
    for (; R <= J && R <= X; ) {
      const ee = f[J], re = y[X] = F ? yt(y[X]) : ke(y[X]);
      if (hn(ee, re))
        b(
          ee,
          re,
          C,
          null,
          M,
          $,
          H,
          V,
          F
        );
      else
        break;
      J--, X--;
    }
    if (R > J) {
      if (R <= X) {
        const ee = X + 1, re = ee < W ? y[ee].el : D;
        for (; R <= X; )
          b(
            null,
            y[R] = F ? yt(y[R]) : ke(y[R]),
            C,
            re,
            M,
            $,
            H,
            V,
            F
          ), R++;
      }
    } else if (R > X)
      for (; R <= J; )
        Ie(f[R], M, $, !0), R++;
    else {
      const ee = R, re = R, oe = /* @__PURE__ */ new Map();
      for (R = re; R <= X; R++) {
        const Oe = y[R] = F ? yt(y[R]) : ke(y[R]);
        Oe.key != null && (E.NODE_ENV !== "production" && oe.has(Oe.key) && k(
          "Duplicate keys found during update:",
          JSON.stringify(Oe.key),
          "Make sure keys are unique."
        ), oe.set(Oe.key, R));
      }
      let ue, ye = 0;
      const Be = X - re + 1;
      let Jt = !1, mr = 0;
      const dn = new Array(Be);
      for (R = 0; R < Be; R++)
        dn[R] = 0;
      for (R = ee; R <= J; R++) {
        const Oe = f[R];
        if (ye >= Be) {
          Ie(Oe, M, $, !0);
          continue;
        }
        let We;
        if (Oe.key != null)
          We = oe.get(Oe.key);
        else
          for (ue = re; ue <= X; ue++)
            if (dn[ue - re] === 0 && hn(Oe, y[ue])) {
              We = ue;
              break;
            }
        We === void 0 ? Ie(Oe, M, $, !0) : (dn[We - re] = R + 1, We >= mr ? mr = We : Jt = !0, b(
          Oe,
          y[We],
          C,
          null,
          M,
          $,
          H,
          V,
          F
        ), ye++);
      }
      const gr = Jt ? Du(dn) : tn;
      for (ue = gr.length - 1, R = Be - 1; R >= 0; R--) {
        const Oe = re + R, We = y[Oe], vr = Oe + 1 < W ? y[Oe + 1].el : D;
        dn[R] === 0 ? b(
          null,
          We,
          C,
          vr,
          M,
          $,
          H,
          V,
          F
        ) : Jt && (ue < 0 || R !== gr[ue] ? Te(We, C, vr, 2) : ue--);
      }
    }
  }, Te = (f, y, C, D, M = null) => {
    const { el: $, type: H, transition: V, children: F, shapeFlag: R } = f;
    if (R & 6) {
      Te(f.component.subTree, y, C, D);
      return;
    }
    if (R & 128) {
      f.suspense.move(y, C, D);
      return;
    }
    if (R & 64) {
      H.move(f, y, C, un);
      return;
    }
    if (H === $e) {
      i($, y, C);
      for (let J = 0; J < F.length; J++)
        Te(F[J], y, C, D);
      i(f.anchor, y, C);
      return;
    }
    if (H === ti) {
      S(f, y, C);
      return;
    }
    if (D !== 2 && R & 1 && V)
      if (D === 0)
        V.beforeEnter($), i($, y, C), De(() => V.enter($), M);
      else {
        const { leave: J, delayLeave: X, afterLeave: ee } = V, re = () => i($, y, C), oe = () => {
          J($, () => {
            re(), ee && ee();
          });
        };
        X ? X($, re, oe) : oe();
      }
    else
      i($, y, C);
  }, Ie = (f, y, C, D = !1, M = !1) => {
    const {
      type: $,
      props: H,
      ref: V,
      children: F,
      dynamicChildren: R,
      shapeFlag: W,
      patchFlag: J,
      dirs: X
    } = f;
    if (V != null && vs(V, null, C, f, !0), W & 256) {
      y.ctx.deactivate(f);
      return;
    }
    const ee = W & 1 && X, re = !En(f);
    let oe;
    if (re && (oe = H && H.onVnodeBeforeUnmount) && Ke(oe, y, f), W & 6)
      Vi(f.component, C, D);
    else {
      if (W & 128) {
        f.suspense.unmount(C, D);
        return;
      }
      ee && Mt(f, null, y, "beforeUnmount"), W & 64 ? f.type.remove(
        f,
        y,
        C,
        M,
        un,
        D
      ) : R && // #1153: fast path should not be taken for non-stable (v-for) fragments
      ($ !== $e || J > 0 && J & 64) ? it(
        R,
        y,
        C,
        !1,
        !0
      ) : ($ === $e && J & 384 || !M && W & 16) && it(F, y, C), D && Bn(f);
    }
    (re && (oe = H && H.onVnodeUnmounted) || ee) && De(() => {
      oe && Ke(oe, y, f), ee && Mt(f, null, y, "unmounted");
    }, C);
  }, Bn = (f) => {
    const { type: y, el: C, anchor: D, transition: M } = f;
    if (y === $e) {
      E.NODE_ENV !== "production" && f.patchFlag > 0 && f.patchFlag & 2048 && M && !M.persisted ? f.children.forEach((H) => {
        H.type === Me ? s(H.el) : Bn(H);
      }) : Xt(C, D);
      return;
    }
    if (y === ti) {
      O(f);
      return;
    }
    const $ = () => {
      s(C), M && !M.persisted && M.afterLeave && M.afterLeave();
    };
    if (f.shapeFlag & 1 && M && !M.persisted) {
      const { leave: H, delayLeave: V } = M, F = () => H(C, $);
      V ? V(f.el, $, F) : F();
    } else
      $();
  }, Xt = (f, y) => {
    let C;
    for (; f !== y; )
      C = p(f), s(f), f = C;
    s(y);
  }, Vi = (f, y, C) => {
    E.NODE_ENV !== "production" && f.type.__hmrId && Nc(f);
    const { bum: D, scope: M, update: $, subTree: H, um: V } = f;
    D && fn(D), M.stop(), $ && ($.active = !1, Ie(H, f, y, C)), V && De(V, y), De(() => {
      f.isUnmounted = !0;
    }, y), y && y.pendingBranch && !y.isUnmounted && f.asyncDep && !f.asyncResolved && f.suspenseId === y.pendingId && (y.deps--, y.deps === 0 && y.resolve()), E.NODE_ENV !== "production" && Rc(f);
  }, it = (f, y, C, D = !1, M = !1, $ = 0) => {
    for (let H = $; H < f.length; H++)
      Ie(f[H], y, C, D, M);
  }, zn = (f) => f.shapeFlag & 6 ? zn(f.component.subTree) : f.shapeFlag & 128 ? f.suspense.next() : p(f.anchor || f.el);
  let $i = !1;
  const fr = (f, y, C) => {
    f == null ? y._vnode && Ie(y._vnode, null, null, !0) : b(
      y._vnode || null,
      f,
      y,
      null,
      null,
      null,
      C
    ), $i || ($i = !0, Or(), Qo(), $i = !1), y._vnode = f;
  }, un = {
    p: b,
    um: Ie,
    m: Te,
    r: Bn,
    mt: U,
    mc: N,
    pc: K,
    pbc: G,
    n: zn,
    o: e
  };
  let pr, hr;
  return {
    render: fr,
    hydrate: pr,
    createApp: hu(fr, pr)
  };
}
function Hi({ type: e, props: t }, n) {
  return n === "svg" && e === "foreignObject" || n === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html") ? void 0 : n;
}
function At({ effect: e, update: t }, n) {
  e.allowRecurse = t.allowRecurse = n;
}
function Pu(e, t) {
  return (!e || e && !e.pendingBranch) && t && !t.persisted;
}
function ei(e, t, n = !1) {
  const i = e.children, s = t.children;
  if (Z(i) && Z(s))
    for (let r = 0; r < i.length; r++) {
      const o = i[r];
      let l = s[r];
      l.shapeFlag & 1 && !l.dynamicChildren && ((l.patchFlag <= 0 || l.patchFlag === 32) && (l = s[r] = yt(s[r]), l.el = o.el), n || ei(o, l)), l.type === Rn && (l.el = o.el), E.NODE_ENV !== "production" && l.type === Me && !l.el && (l.el = o.el);
    }
}
function Du(e) {
  const t = e.slice(), n = [0];
  let i, s, r, o, l;
  const a = e.length;
  for (i = 0; i < a; i++) {
    const u = e[i];
    if (u !== 0) {
      if (s = n[n.length - 1], e[s] < u) {
        t[i] = s, n.push(i);
        continue;
      }
      for (r = 0, o = n.length - 1; r < o; )
        l = r + o >> 1, e[n[l]] < u ? r = l + 1 : o = l;
      u < e[n[r]] && (r > 0 && (t[i] = n[r - 1]), n[r] = i);
    }
  }
  for (r = n.length, o = n[r - 1]; r-- > 0; )
    n[r] = o, o = t[o];
  return n;
}
function Dl(e) {
  const t = e.subTree.component;
  if (t)
    return t.asyncDep && !t.asyncResolved ? t : Dl(t);
}
const Mu = (e) => e.__isTeleport, $e = Symbol.for("v-fgt"), Rn = Symbol.for("v-txt"), Me = Symbol.for("v-cmt"), ti = Symbol.for("v-stc"), _n = [];
let je = null;
function me(e = !1) {
  _n.push(je = e ? null : []);
}
function Au() {
  _n.pop(), je = _n[_n.length - 1] || null;
}
let On = 1;
function zr(e) {
  On += e;
}
function Ml(e) {
  return e.dynamicChildren = On > 0 ? je || tn : null, Au(), On > 0 && je && je.push(e), e;
}
function we(e, t, n, i, s, r) {
  return Ml(
    Ue(
      e,
      t,
      n,
      i,
      s,
      r,
      !0
    )
  );
}
function Ni(e, t, n, i, s) {
  return Ml(
    ce(
      e,
      t,
      n,
      i,
      s,
      !0
    )
  );
}
function on(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
function hn(e, t) {
  return E.NODE_ENV !== "production" && t.shapeFlag & 6 && Zt.has(t.type) ? (e.shapeFlag &= -257, t.shapeFlag &= -513, !1) : e.type === t.type && e.key === t.key;
}
const Lu = (...e) => Ll(
  ...e
), Al = ({ key: e }) => e ?? null, ni = ({
  ref: e,
  ref_key: t,
  ref_for: n
}) => (typeof e == "number" && (e = "" + e), e != null ? de(e) || Se(e) || Q(e) ? { i: Ee, r: e, k: t, f: !!n } : e : null);
function Ue(e, t = null, n = null, i = 0, s = null, r = e === $e ? 0 : 1, o = !1, l = !1) {
  const a = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && Al(t),
    ref: t && ni(t),
    scopeId: ol,
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
    shapeFlag: r,
    patchFlag: i,
    dynamicProps: s,
    dynamicChildren: null,
    appContext: null,
    ctx: Ee
  };
  return l ? (tr(a, n), r & 128 && e.normalize(a)) : n && (a.shapeFlag |= de(n) ? 8 : 16), E.NODE_ENV !== "production" && a.key !== a.key && k("VNode created with invalid key (NaN). VNode type:", a.type), On > 0 && // avoid a block node from tracking itself
  !o && // has current parent block
  je && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (a.patchFlag > 0 || r & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  a.patchFlag !== 32 && je.push(a), a;
}
const ce = E.NODE_ENV !== "production" ? Lu : Ll;
function Ll(e, t = null, n = null, i = 0, s = null, r = !1) {
  if ((!e || e === cl) && (E.NODE_ENV !== "production" && !e && k(`Invalid vnode type when creating vnode: ${e}.`), e = Me), on(e)) {
    const l = Nt(
      e,
      t,
      !0
      /* mergeRef: true */
    );
    return n && tr(l, n), On > 0 && !r && je && (l.shapeFlag & 6 ? je[je.indexOf(e)] = l : je.push(l)), l.patchFlag |= -2, l;
  }
  if (Fl(e) && (e = e.__vccOpts), t) {
    t = Cn(t);
    let { class: l, style: a } = t;
    l && !de(l) && (t.class = Dt(l)), le(a) && (as(a) && !Z(a) && (a = fe({}, a)), t.style = An(a));
  }
  const o = de(e) ? 1 : Uc(e) ? 128 : Mu(e) ? 64 : le(e) ? 4 : Q(e) ? 2 : 0;
  return E.NODE_ENV !== "production" && o & 4 && as(e) && (e = ne(e), k(
    "Vue received a Component that was made a reactive object. This can lead to unnecessary performance overhead and should be avoided by marking the component with `markRaw` or using `shallowRef` instead of `ref`.",
    `
Component that was made reactive: `,
    e
  )), Ue(
    e,
    t,
    n,
    i,
    s,
    o,
    r,
    !0
  );
}
function Cn(e) {
  return e ? as(e) || Sl(e) ? fe({}, e) : e : null;
}
function Nt(e, t, n = !1, i = !1) {
  const { props: s, ref: r, patchFlag: o, children: l, transition: a } = e, u = t ? en(s || {}, t) : s, c = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: u,
    key: u && Al(u),
    ref: t && t.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      n && r ? Z(r) ? r.concat(ni(t)) : [r, ni(t)] : ni(t)
    ) : r,
    scopeId: e.scopeId,
    slotScopeIds: e.slotScopeIds,
    children: E.NODE_ENV !== "production" && o === -1 && Z(l) ? l.map(Il) : l,
    target: e.target,
    targetAnchor: e.targetAnchor,
    staticCount: e.staticCount,
    shapeFlag: e.shapeFlag,
    // if the vnode is cloned with extra props, we can no longer assume its
    // existing patch flag to be reliable and need to add the FULL_PROPS flag.
    // note: preserve flag for fragments since they use the flag for children
    // fast paths only.
    patchFlag: t && e.type !== $e ? o === -1 ? 16 : o | 16 : o,
    dynamicProps: e.dynamicProps,
    dynamicChildren: e.dynamicChildren,
    appContext: e.appContext,
    dirs: e.dirs,
    transition: a,
    // These should technically only be non-null on mounted VNodes. However,
    // they *should* be copied for kept-alive vnodes. So we just always copy
    // them since them being non-null during a mount doesn't affect the logic as
    // they will simply be overwritten.
    component: e.component,
    suspense: e.suspense,
    ssContent: e.ssContent && Nt(e.ssContent),
    ssFallback: e.ssFallback && Nt(e.ssFallback),
    el: e.el,
    anchor: e.anchor,
    ctx: e.ctx,
    ce: e.ce
  };
  return a && i && (c.transition = a.clone(c)), c;
}
function Il(e) {
  const t = Nt(e);
  return Z(e.children) && (t.children = e.children.map(Il)), t;
}
function Rl(e = " ", t = 0) {
  return ce(Rn, null, e, t);
}
function Nn(e = "", t = !1) {
  return t ? (me(), Ni(Me, null, e)) : ce(Me, null, e);
}
function ke(e) {
  return e == null || typeof e == "boolean" ? ce(Me) : Z(e) ? ce(
    $e,
    null,
    // #3666, avoid reference pollution when reusing vnode
    e.slice()
  ) : typeof e == "object" ? yt(e) : ce(Rn, null, String(e));
}
function yt(e) {
  return e.el === null && e.patchFlag !== -1 || e.memo ? e : Nt(e);
}
function tr(e, t) {
  let n = 0;
  const { shapeFlag: i } = e;
  if (t == null)
    t = null;
  else if (Z(t))
    n = 16;
  else if (typeof t == "object")
    if (i & 65) {
      const s = t.default;
      s && (s._c && (s._d = !1), tr(e, s()), s._c && (s._d = !0));
      return;
    } else {
      n = 32;
      const s = t._;
      !s && !Sl(t) ? t._ctx = Ee : s === 3 && Ee && (Ee.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
    }
  else Q(t) ? (t = { default: t, _ctx: Ee }, n = 32) : (t = String(t), i & 64 ? (n = 16, t = [Rl(t)]) : n = 8);
  e.children = t, e.shapeFlag |= n;
}
function en(...e) {
  const t = {};
  for (let n = 0; n < e.length; n++) {
    const i = e[n];
    for (const s in i)
      if (s === "class")
        t.class !== i.class && (t.class = Dt([t.class, i.class]));
      else if (s === "style")
        t.style = An([t.style, i.style]);
      else if (Mn(s)) {
        const r = t[s], o = i[s];
        o && r !== o && !(Z(r) && r.includes(o)) && (t[s] = r ? [].concat(r, o) : o);
      } else s !== "" && (t[s] = i[s]);
  }
  return t;
}
function Ke(e, t, n, i = null) {
  He(e, t, 7, [
    n,
    i
  ]);
}
const Iu = El();
let Ru = 0;
function Vu(e, t, n) {
  const i = e.type, s = (t ? t.appContext : e.appContext) || Iu, r = {
    uid: Ru++,
    vnode: e,
    type: i,
    parent: t,
    appContext: s,
    root: null,
    // to be immediately set
    next: null,
    subTree: null,
    // will be set synchronously right after creation
    effect: null,
    update: null,
    // will be set synchronously right after creation
    scope: new ja(
      !0
      /* detached */
    ),
    render: null,
    proxy: null,
    exposed: null,
    exposeProxy: null,
    withProxy: null,
    provides: t ? t.provides : Object.create(s.provides),
    accessCache: null,
    renderCache: [],
    // local resolved assets
    components: null,
    directives: null,
    // resolved props and emits options
    propsOptions: Tl(i, s),
    emitsOptions: rl(i, s),
    // emit
    emit: null,
    // to be set immediately
    emitted: null,
    // props default value
    propsDefaults: ae,
    // inheritAttrs
    inheritAttrs: i.inheritAttrs,
    // state
    ctx: ae,
    data: ae,
    props: ae,
    attrs: ae,
    slots: ae,
    refs: ae,
    setupState: ae,
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
  return E.NODE_ENV !== "production" ? r.ctx = su(r) : r.ctx = { _: r }, r.root = t ? t.root : r, r.emit = Bc.bind(null, r), e.ce && e.ce(r), r;
}
let ve = null;
const $u = () => ve || Ee;
let pi, bs;
{
  const e = Rs(), t = (n, i) => {
    let s;
    return (s = e[n]) || (s = e[n] = []), s.push(i), (r) => {
      s.length > 1 ? s.forEach((o) => o(r)) : s[0](r);
    };
  };
  pi = t(
    "__VUE_INSTANCE_SETTERS__",
    (n) => ve = n
  ), bs = t(
    "__VUE_SSR_SETTERS__",
    (n) => Pi = n
  );
}
const Vn = (e) => {
  const t = ve;
  return pi(e), e.scope.on(), () => {
    e.scope.off(), pi(t);
  };
}, kr = () => {
  ve && ve.scope.off(), pi(null);
}, Fu = /* @__PURE__ */ dt("slot,component");
function ys(e, { isNativeTag: t }) {
  (Fu(e) || t(e)) && k(
    "Do not use built-in or reserved HTML elements as component id: " + e
  );
}
function Vl(e) {
  return e.vnode.shapeFlag & 4;
}
let Pi = !1;
function Bu(e, t = !1) {
  t && bs(t);
  const { props: n, children: i } = e.vnode, s = Vl(e);
  mu(e, n, s, t), xu(e, i);
  const r = s ? zu(e, t) : void 0;
  return t && bs(!1), r;
}
function zu(e, t) {
  var n;
  const i = e.type;
  if (E.NODE_ENV !== "production") {
    if (i.name && ys(i.name, e.appContext.config), i.components) {
      const r = Object.keys(i.components);
      for (let o = 0; o < r.length; o++)
        ys(r[o], e.appContext.config);
    }
    if (i.directives) {
      const r = Object.keys(i.directives);
      for (let o = 0; o < r.length; o++)
        pl(r[o]);
    }
    i.compilerOptions && ku() && k(
      '"compilerOptions" is only supported when using a build of Vue that includes the runtime compiler. Since you are using a runtime-only build, the options should be passed via your build tool config instead.'
    );
  }
  e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = new Proxy(e.ctx, bl), E.NODE_ENV !== "production" && ru(e);
  const { setup: s } = i;
  if (s) {
    const r = e.setupContext = s.length > 1 ? Hu(e) : null, o = Vn(e);
    ft();
    const l = ct(
      s,
      e,
      0,
      [
        E.NODE_ENV !== "production" ? Je(e.props) : e.props,
        r
      ]
    );
    if (pt(), o(), As(l)) {
      if (l.then(kr, kr), t)
        return l.then((a) => {
          jr(e, a, t);
        }).catch((a) => {
          Ln(a, e, 0);
        });
      if (e.asyncDep = l, E.NODE_ENV !== "production" && !e.suspense) {
        const a = (n = i.name) != null ? n : "Anonymous";
        k(
          `Component <${a}>: setup function returned a promise, but no <Suspense> boundary was found in the parent component tree. A component with async setup() must be nested in a <Suspense> in order to be rendered.`
        );
      }
    } else
      jr(e, l, t);
  } else
    $l(e, t);
}
function jr(e, t, n) {
  Q(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : le(t) ? (E.NODE_ENV !== "production" && on(t) && k(
    "setup() should not return VNodes directly - return a render function instead."
  ), E.NODE_ENV !== "production" && (e.devtoolsRawSetupState = t), e.setupState = Wo(t), E.NODE_ENV !== "production" && ou(e)) : E.NODE_ENV !== "production" && t !== void 0 && k(
    `setup() should return an object. Received: ${t === null ? "null" : typeof t}`
  ), $l(e, n);
}
let Es;
const ku = () => !Es;
function $l(e, t, n) {
  const i = e.type;
  if (!e.render) {
    if (!t && Es && !i.render) {
      const s = i.template || Zs(e).template;
      if (s) {
        E.NODE_ENV !== "production" && st(e, "compile");
        const { isCustomElement: r, compilerOptions: o } = e.appContext.config, { delimiters: l, compilerOptions: a } = i, u = fe(
          fe(
            {
              isCustomElement: r,
              delimiters: l
            },
            o
          ),
          a
        );
        i.render = Es(s, u), E.NODE_ENV !== "production" && rt(e, "compile");
      }
    }
    e.render = i.render || he;
  }
  {
    const s = Vn(e);
    ft();
    try {
      au(e);
    } finally {
      pt(), s();
    }
  }
  E.NODE_ENV !== "production" && !i.render && e.render === he && !t && (i.template ? k(
    'Component provided template option but runtime compilation is not supported in this build of Vue. Configure your bundler to alias "vue" to "vue/dist/vue.esm-bundler.js".'
  ) : k("Component is missing template or render function."));
}
const Hr = E.NODE_ENV !== "production" ? {
  get(e, t) {
    return ui(), _e(e, "get", ""), e[t];
  },
  set() {
    return k("setupContext.attrs is readonly."), !1;
  },
  deleteProperty() {
    return k("setupContext.attrs is readonly."), !1;
  }
} : {
  get(e, t) {
    return _e(e, "get", ""), e[t];
  }
};
function ju(e) {
  return e.slotsProxy || (e.slotsProxy = new Proxy(e.slots, {
    get(t, n) {
      return _e(e, "get", "$slots"), t[n];
    }
  }));
}
function Hu(e) {
  const t = (n) => {
    if (E.NODE_ENV !== "production" && (e.exposed && k("expose() should be called only once per setup()."), n != null)) {
      let i = typeof n;
      i === "object" && (Z(n) ? i = "array" : Se(n) && (i = "ref")), i !== "object" && k(
        `expose() should be passed a plain object, received ${i}.`
      );
    }
    e.exposed = n || {};
  };
  if (E.NODE_ENV !== "production") {
    let n;
    return Object.freeze({
      get attrs() {
        return n || (n = new Proxy(e.attrs, Hr));
      },
      get slots() {
        return ju(e);
      },
      get emit() {
        return (i, ...s) => e.emit(i, ...s);
      },
      expose: t
    });
  } else
    return {
      attrs: new Proxy(e.attrs, Hr),
      slots: e.slots,
      emit: e.emit,
      expose: t
    };
}
function nr(e) {
  if (e.exposed)
    return e.exposeProxy || (e.exposeProxy = new Proxy(Wo(dc(e.exposed)), {
      get(t, n) {
        if (n in t)
          return t[n];
        if (n in jt)
          return jt[n](e);
      },
      has(t, n) {
        return n in t || n in jt;
      }
    }));
}
const Gu = /(?:^|[-_])(\w)/g, Uu = (e) => e.replace(Gu, (t) => t.toUpperCase()).replace(/[-_]/g, "");
function ir(e, t = !0) {
  return Q(e) ? e.displayName || e.name : e.name || t && e.__name;
}
function Di(e, t, n = !1) {
  let i = ir(t);
  if (!i && t.__file) {
    const s = t.__file.match(/([^/\\]+)\.\w+$/);
    s && (i = s[1]);
  }
  if (!i && e && e.parent) {
    const s = (r) => {
      for (const o in r)
        if (r[o] === t)
          return o;
    };
    i = s(
      e.components || e.parent.type.components
    ) || s(e.appContext.components);
  }
  return i ? Uu(i) : n ? "App" : "Anonymous";
}
function Fl(e) {
  return Q(e) && "__vccOpts" in e;
}
const Bl = (e, t) => {
  const n = pc(e, t, Pi);
  if (E.NODE_ENV !== "production") {
    const i = $u();
    i && i.appContext.config.warnRecursiveComputed && (n._warnRecursive = !0);
  }
  return n;
};
function Fe(e, t, n) {
  const i = arguments.length;
  return i === 2 ? le(t) && !Z(t) ? on(t) ? ce(e, null, [t]) : ce(e, t) : ce(e, null, t) : (i > 3 ? n = Array.prototype.slice.call(arguments, 2) : i === 3 && on(n) && (n = [n]), ce(e, t, n));
}
function qu() {
  if (E.NODE_ENV === "production" || typeof window > "u")
    return;
  const e = { style: "color:#3ba776" }, t = { style: "color:#1677ff" }, n = { style: "color:#f5222d" }, i = { style: "color:#eb2f96" }, s = {
    header(d) {
      return le(d) ? d.__isVue ? ["div", e, "VueInstance"] : Se(d) ? [
        "div",
        {},
        ["span", e, c(d)],
        "<",
        l(d.value),
        ">"
      ] : nn(d) ? [
        "div",
        {},
        ["span", e, Bt(d) ? "ShallowReactive" : "Reactive"],
        "<",
        l(d),
        `>${Ut(d) ? " (readonly)" : ""}`
      ] : Ut(d) ? [
        "div",
        {},
        ["span", e, Bt(d) ? "ShallowReadonly" : "Readonly"],
        "<",
        l(d),
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
          ...r(d.$)
        ];
    }
  };
  function r(d) {
    const p = [];
    d.type.props && d.props && p.push(o("props", ne(d.props))), d.setupState !== ae && p.push(o("setup", d.setupState)), d.data !== ae && p.push(o("data", ne(d.data)));
    const g = a(d, "computed");
    g && p.push(o("computed", g));
    const m = a(d, "inject");
    return m && p.push(o("injected", m)), p.push([
      "div",
      {},
      [
        "span",
        {
          style: i.style + ";opacity:0.66"
        },
        "$ (internal): "
      ],
      ["object", { object: d }]
    ]), p;
  }
  function o(d, p) {
    return p = fe({}, p), Object.keys(p).length ? [
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
        ...Object.keys(p).map((g) => [
          "div",
          {},
          ["span", i, g + ": "],
          l(p[g], !1)
        ])
      ]
    ] : ["span", {}];
  }
  function l(d, p = !0) {
    return typeof d == "number" ? ["span", t, d] : typeof d == "string" ? ["span", n, JSON.stringify(d)] : typeof d == "boolean" ? ["span", i, d] : le(d) ? ["object", { object: p ? ne(d) : d }] : ["span", n, String(d)];
  }
  function a(d, p) {
    const g = d.type;
    if (Q(g))
      return;
    const m = {};
    for (const b in d.ctx)
      u(g, b, p) && (m[b] = d.ctx[b]);
    return m;
  }
  function u(d, p, g) {
    const m = d[g];
    if (Z(m) && m.includes(p) || le(m) && p in m || d.extends && u(d.extends, p, g) || d.mixins && d.mixins.some((b) => u(b, p, g)))
      return !0;
  }
  function c(d) {
    return Bt(d) ? "ShallowRef" : d.effect ? "ComputedRef" : "Ref";
  }
  window.devtoolsFormatters ? window.devtoolsFormatters.push(s) : window.devtoolsFormatters = [s];
}
const Gr = "3.4.27", xt = E.NODE_ENV !== "production" ? k : he;
var Pt = {};
const Wu = "http://www.w3.org/2000/svg", Ku = "http://www.w3.org/1998/Math/MathML", Et = typeof document < "u" ? document : null, Ur = Et && /* @__PURE__ */ Et.createElement("template"), Yu = {
  insert: (e, t, n) => {
    t.insertBefore(e, n || null);
  },
  remove: (e) => {
    const t = e.parentNode;
    t && t.removeChild(e);
  },
  createElement: (e, t, n, i) => {
    const s = t === "svg" ? Et.createElementNS(Wu, e) : t === "mathml" ? Et.createElementNS(Ku, e) : Et.createElement(e, n ? { is: n } : void 0);
    return e === "select" && i && i.multiple != null && s.setAttribute("multiple", i.multiple), s;
  },
  createText: (e) => Et.createTextNode(e),
  createComment: (e) => Et.createComment(e),
  setText: (e, t) => {
    e.nodeValue = t;
  },
  setElementText: (e, t) => {
    e.textContent = t;
  },
  parentNode: (e) => e.parentNode,
  nextSibling: (e) => e.nextSibling,
  querySelector: (e) => Et.querySelector(e),
  setScopeId(e, t) {
    e.setAttribute(t, "");
  },
  // __UNSAFE__
  // Reason: innerHTML.
  // Static content here can only come from compiled templates.
  // As long as the user only uses trusted templates, this is safe.
  insertStaticContent(e, t, n, i, s, r) {
    const o = n ? n.previousSibling : t.lastChild;
    if (s && (s === r || s.nextSibling))
      for (; t.insertBefore(s.cloneNode(!0), n), !(s === r || !(s = s.nextSibling)); )
        ;
    else {
      Ur.innerHTML = i === "svg" ? `<svg>${e}</svg>` : i === "mathml" ? `<math>${e}</math>` : e;
      const l = Ur.content;
      if (i === "svg" || i === "mathml") {
        const a = l.firstChild;
        for (; a.firstChild; )
          l.appendChild(a.firstChild);
        l.removeChild(a);
      }
      t.insertBefore(l, n);
    }
    return [
      // first
      o ? o.nextSibling : t.firstChild,
      // last
      n ? n.previousSibling : t.lastChild
    ];
  }
}, Xu = Symbol("_vtc");
function Ju(e, t, n) {
  const i = e[Xu];
  i && (t = (t ? [t, ...i] : [...i]).join(" ")), t == null ? e.removeAttribute("class") : n ? e.setAttribute("class", t) : e.className = t;
}
const qr = Symbol("_vod"), Zu = Symbol("_vsh"), Qu = Symbol(Pt.NODE_ENV !== "production" ? "CSS_VAR_TEXT" : ""), ed = /(^|;)\s*display\s*:/;
function td(e, t, n) {
  const i = e.style, s = de(n);
  let r = !1;
  if (n && !s) {
    if (t)
      if (de(t))
        for (const o of t.split(";")) {
          const l = o.slice(0, o.indexOf(":")).trim();
          n[l] == null && ii(i, l, "");
        }
      else
        for (const o in t)
          n[o] == null && ii(i, o, "");
    for (const o in n)
      o === "display" && (r = !0), ii(i, o, n[o]);
  } else if (s) {
    if (t !== n) {
      const o = i[Qu];
      o && (n += ";" + o), i.cssText = n, r = ed.test(n);
    }
  } else t && e.removeAttribute("style");
  qr in e && (e[qr] = r ? i.display : "", e[Zu] && (i.display = "none"));
}
const nd = /[^\\];\s*$/, Wr = /\s*!important$/;
function ii(e, t, n) {
  if (Z(n))
    n.forEach((i) => ii(e, t, i));
  else if (n == null && (n = ""), Pt.NODE_ENV !== "production" && nd.test(n) && xt(
    `Unexpected semicolon at the end of '${t}' style value: '${n}'`
  ), t.startsWith("--"))
    e.setProperty(t, n);
  else {
    const i = id(e, t);
    Wr.test(n) ? e.setProperty(
      Tt(i),
      n.replace(Wr, ""),
      "important"
    ) : e[i] = n;
  }
}
const Kr = ["Webkit", "Moz", "ms"], Gi = {};
function id(e, t) {
  const n = Gi[t];
  if (n)
    return n;
  let i = et(t);
  if (i !== "filter" && i in e)
    return Gi[t] = i;
  i = Gt(i);
  for (let s = 0; s < Kr.length; s++) {
    const r = Kr[s] + i;
    if (r in e)
      return Gi[t] = r;
  }
  return t;
}
const Yr = "http://www.w3.org/1999/xlink";
function sd(e, t, n, i, s) {
  if (i && t.startsWith("xlink:"))
    n == null ? e.removeAttributeNS(Yr, t.slice(6, t.length)) : e.setAttributeNS(Yr, t, n);
  else {
    const r = ka(t);
    n == null || r && !No(n) ? e.removeAttribute(t) : e.setAttribute(t, r ? "" : n);
  }
}
function rd(e, t, n, i, s, r, o) {
  if (t === "innerHTML" || t === "textContent") {
    i && o(i, s, r), e[t] = n ?? "";
    return;
  }
  const l = e.tagName;
  if (t === "value" && l !== "PROGRESS" && // custom elements may use _value internally
  !l.includes("-")) {
    const u = l === "OPTION" ? e.getAttribute("value") || "" : e.value, c = n ?? "";
    (u !== c || !("_value" in e)) && (e.value = c), n == null && e.removeAttribute(t), e._value = n;
    return;
  }
  let a = !1;
  if (n === "" || n == null) {
    const u = typeof e[t];
    u === "boolean" ? n = No(n) : n == null && u === "string" ? (n = "", a = !0) : u === "number" && (n = 0, a = !0);
  }
  try {
    e[t] = n;
  } catch (u) {
    Pt.NODE_ENV !== "production" && !a && xt(
      `Failed setting prop "${t}" on <${l.toLowerCase()}>: value ${n} is invalid.`,
      u
    );
  }
  a && e.removeAttribute(t);
}
function od(e, t, n, i) {
  e.addEventListener(t, n, i);
}
function ld(e, t, n, i) {
  e.removeEventListener(t, n, i);
}
const Xr = Symbol("_vei");
function ad(e, t, n, i, s = null) {
  const r = e[Xr] || (e[Xr] = {}), o = r[t];
  if (i && o)
    o.value = Pt.NODE_ENV !== "production" ? Zr(i, t) : i;
  else {
    const [l, a] = cd(t);
    if (i) {
      const u = r[t] = fd(
        Pt.NODE_ENV !== "production" ? Zr(i, t) : i,
        s
      );
      od(e, l, u, a);
    } else o && (ld(e, l, o, a), r[t] = void 0);
  }
}
const Jr = /(?:Once|Passive|Capture)$/;
function cd(e) {
  let t;
  if (Jr.test(e)) {
    t = {};
    let i;
    for (; i = e.match(Jr); )
      e = e.slice(0, e.length - i[0].length), t[i[0].toLowerCase()] = !0;
  }
  return [e[2] === ":" ? e.slice(3) : Tt(e.slice(2)), t];
}
let Ui = 0;
const ud = /* @__PURE__ */ Promise.resolve(), dd = () => Ui || (ud.then(() => Ui = 0), Ui = Date.now());
function fd(e, t) {
  const n = (i) => {
    if (!i._vts)
      i._vts = Date.now();
    else if (i._vts <= n.attached)
      return;
    He(
      pd(i, n.value),
      t,
      5,
      [i]
    );
  };
  return n.value = e, n.attached = dd(), n;
}
function Zr(e, t) {
  return Q(e) || Z(e) ? e : (xt(
    `Wrong type passed as event handler to ${t} - did you forget @ or : in front of your prop?
Expected function or array of functions, received type ${typeof e}.`
  ), he);
}
function pd(e, t) {
  if (Z(t)) {
    const n = e.stopImmediatePropagation;
    return e.stopImmediatePropagation = () => {
      n.call(e), e._stopped = !0;
    }, t.map(
      (i) => (s) => !s._stopped && i && i(s)
    );
  } else
    return t;
}
const Qr = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // lowercase letter
e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123, hd = (e, t, n, i, s, r, o, l, a) => {
  const u = s === "svg";
  t === "class" ? Ju(e, i, u) : t === "style" ? td(e, n, i) : Mn(t) ? li(t) || ad(e, t, n, i, o) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : md(e, t, i, u)) ? rd(
    e,
    t,
    i,
    r,
    o,
    l,
    a
  ) : (t === "true-value" ? e._trueValue = i : t === "false-value" && (e._falseValue = i), sd(e, t, i, u));
};
function md(e, t, n, i) {
  if (i)
    return !!(t === "innerHTML" || t === "textContent" || t in e && Qr(t) && Q(n));
  if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA")
    return !1;
  if (t === "width" || t === "height") {
    const s = e.tagName;
    if (s === "IMG" || s === "VIDEO" || s === "CANVAS" || s === "SOURCE")
      return !1;
  }
  return Qr(t) && de(n) ? !1 : t in e;
}
const gd = ["ctrl", "shift", "alt", "meta"], vd = {
  stop: (e) => e.stopPropagation(),
  prevent: (e) => e.preventDefault(),
  self: (e) => e.target !== e.currentTarget,
  ctrl: (e) => !e.ctrlKey,
  shift: (e) => !e.shiftKey,
  alt: (e) => !e.altKey,
  meta: (e) => !e.metaKey,
  left: (e) => "button" in e && e.button !== 0,
  middle: (e) => "button" in e && e.button !== 1,
  right: (e) => "button" in e && e.button !== 2,
  exact: (e, t) => gd.some((n) => e[`${n}Key`] && !t.includes(n))
}, bd = (e, t) => {
  const n = e._withMods || (e._withMods = {}), i = t.join(".");
  return n[i] || (n[i] = (s, ...r) => {
    for (let o = 0; o < t.length; o++) {
      const l = vd[t[o]];
      if (l && l(s, t))
        return;
    }
    return e(s, ...r);
  });
}, yd = /* @__PURE__ */ fe({ patchProp: hd }, Yu);
let eo;
function Ed() {
  return eo || (eo = Cu(yd));
}
const wd = (...e) => {
  const t = Ed().createApp(...e);
  Pt.NODE_ENV !== "production" && (Sd(t), xd(t));
  const { mount: n } = t;
  return t.mount = (i) => {
    const s = Td(i);
    if (!s)
      return;
    const r = t._component;
    !Q(r) && !r.render && !r.template && (r.template = s.innerHTML), s.innerHTML = "";
    const o = n(s, !1, _d(s));
    return s instanceof Element && (s.removeAttribute("v-cloak"), s.setAttribute("data-v-app", "")), o;
  }, t;
};
function _d(e) {
  if (e instanceof SVGElement)
    return "svg";
  if (typeof MathMLElement == "function" && e instanceof MathMLElement)
    return "mathml";
}
function Sd(e) {
  Object.defineProperty(e.config, "isNativeTag", {
    value: (t) => $a(t) || Fa(t) || Ba(t),
    writable: !1
  });
}
function xd(e) {
  {
    const t = e.config.isCustomElement;
    Object.defineProperty(e.config, "isCustomElement", {
      get() {
        return t;
      },
      set() {
        xt(
          "The `isCustomElement` config option is deprecated. Use `compilerOptions.isCustomElement` instead."
        );
      }
    });
    const n = e.config.compilerOptions, i = 'The `compilerOptions` config option is only respected when using a build of Vue.js that includes the runtime compiler (aka "full build"). Since you are using the runtime-only build, `compilerOptions` must be passed to `@vue/compiler-dom` in the build setup instead.\n- For vue-loader: pass it via vue-loader\'s `compilerOptions` loader option.\n- For vue-cli: see https://cli.vuejs.org/guide/webpack.html#modifying-options-of-a-loader\n- For vite: pass it via @vitejs/plugin-vue options. See https://github.com/vitejs/vite-plugin-vue/tree/main/packages/plugin-vue#example-for-passing-options-to-vuecompiler-sfc';
    Object.defineProperty(e.config, "compilerOptions", {
      get() {
        return xt(i), n;
      },
      set() {
        xt(i);
      }
    });
  }
}
function Td(e) {
  if (de(e)) {
    const t = document.querySelector(e);
    return Pt.NODE_ENV !== "production" && !t && xt(
      `Failed to mount app: mount target selector "${e}" returned null.`
    ), t;
  }
  return Pt.NODE_ENV !== "production" && window.ShadowRoot && e instanceof window.ShadowRoot && e.mode === "closed" && xt(
    'mounting on a ShadowRoot with `{mode: "closed"}` may lead to unpredictable bugs'
  ), e;
}
var Od = {};
function Cd() {
  qu();
}
Od.NODE_ENV !== "production" && Cd();
const nt = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [i, s] of t)
    n[i] = s;
  return n;
}, Nd = {
  name: "Button",
  props: {
    text: {
      type: String,
      default: null
    },
    variant: {
      type: String,
      default: "primary",
      validator: (e) => ["primary", "secondary", "link"].includes(e)
    },
    size: {
      type: String,
      default: "medium",
      validator: (e) => ["large", "medium", "small"].includes(e)
    },
    state: {
      type: String,
      default: null,
      validator: (e) => ["info", "warning", "success", "error"].includes(e)
    },
    disabled: {
      type: Boolean,
      default: !1
    },
    type: {
      type: String,
      default: "button",
      validator: (e) => ["button", "submit"].includes(e)
    },
    icon: {
      type: String,
      default: null
    },
    iconRight: {
      type: String,
      default: null
    }
  },
  methods: {
    ev_click() {
      console.log("ev_click");
    }
  },
  computed: {
    btnClasses() {
      return [
        `btn--${this.variant}`,
        this.state,
        this.disabled ? "disabled" : "",
        `btn--${this.size}`
      ];
    }
  }
}, Pd = ["type", "disabled"], Dd = {
  key: 0,
  class: "w-5 h-5 bg-color-secondary"
}, Md = {
  key: 1,
  class: "w-5 h-5 bg-color-secondary"
};
function Ad(e, t, n, i, s, r) {
  return me(), we("button", {
    class: Dt(["btn", r.btnClasses]),
    onClick: t[0] || (t[0] = (...o) => r.ev_click && r.ev_click(...o)),
    type: n.type,
    disabled: n.disabled
  }, [
    n.icon ? (me(), we("div", Dd)) : Nn("", !0),
    Rl(" " + wi(n.text) + " ", 1),
    n.iconRight ? (me(), we("div", Md)) : Nn("", !0)
  ], 10, Pd);
}
const zl = /* @__PURE__ */ nt(Nd, [["render", Ad]]), Ld = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: zl
}, Symbol.toStringTag, { value: "Module" })), Id = {
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
}, Rd = { class: "field-message" };
function Vd(e, t, n, i, s, r) {
  const o = ut("gng-form-element");
  return me(), we("div", {
    class: Dt(["form-control", r.formControlClasses])
  }, [
    ce(o, en({ state: n.state }, e.$attrs), null, 16, ["state"]),
    Ue("div", Rd, wi(n.message), 1)
  ], 2);
}
const kl = /* @__PURE__ */ nt(Id, [["render", Vd]]), $d = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: kl
}, Symbol.toStringTag, { value: "Module" })), Fd = {
  name: "FormElement",
  inheritAttrs: !1,
  computed: {
    componentType() {
      return this.$attrs.type === "password" ? "gng-form-field-password" : "gng-form-field";
    }
  }
};
function Bd(e, t, n, i, s, r) {
  return me(), Ni(Gc(r.componentType), ai(Cn(e.$attrs)), null, 16);
}
const zd = /* @__PURE__ */ nt(Fd, [["render", Bd]]), kd = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: zd
}, Symbol.toStringTag, { value: "Module" })), jd = {
  name: "FormField",
  inheritAttrs: !1,
  props: {
    icon: {
      type: String,
      default: null
    },
    iconRight: {
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
    fieldClasses() {
      var t, n;
      let e = [];
      return (this.$attrs.disabled === !0 || this.$attrs.disabled === "") && e.push("disabled"), (t = this.$attrs) != null && t.type && e.push(`form-field--${(n = this.$attrs) == null ? void 0 : n.type}`), this.state && e.push(`${this.state}`), e;
    }
  },
  methods: {
    icon_click(e) {
      console.log("icon_click", e);
    }
  }
}, Hd = {
  key: 0,
  class: "icon icon--right"
};
function Gd(e, t, n, i, s, r) {
  const o = ut("gng-input");
  return me(), we("div", {
    class: Dt(["form-field", r.fieldClasses])
  }, [
    ki(e.$slots, "icon", {}, () => [
      n.icon ? (me(), we("div", {
        key: 0,
        class: "icon icon--left",
        onClick: t[0] || (t[0] = (...l) => r.icon_click && r.icon_click(...l))
      })) : Nn("", !0)
    ]),
    ki(e.$slots, "input", {}, () => [
      ce(o, ai(Cn(e.$attrs)), null, 16)
    ]),
    ki(e.$slots, "icon-right", {}, () => [
      n.iconRight ? (me(), we("div", Hd)) : Nn("", !0)
    ])
  ], 2);
}
const Ud = /* @__PURE__ */ nt(jd, [["render", Gd]]), qd = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Ud
}, Symbol.toStringTag, { value: "Module" })), Wd = {
  name: "FormFieldPassword",
  inheritAttrs: !1,
  data: () => ({
    visible: !1
  }),
  computed: {
    typeRef() {
      return this.visible ? "text" : this.$attrs.type;
    },
    visibilityIcon() {
      return this.visible ? "visible" : "hidden";
    }
  },
  methods: {
    toggle_password() {
      this.visible = !this.visible;
    }
  }
};
function Kd(e, t, n, i, s, r) {
  const o = ut("gng-input"), l = ut("gng-form-field");
  return me(), Ni(l, ai(Cn(e.$attrs)), {
    input: It(() => [
      ce(o, ai(Cn({ ...e.$attrs, type: r.typeRef })), null, 16)
    ]),
    "icon-right": It(() => [
      Ue("div", {
        class: "icon icon--right",
        onClick: t[0] || (t[0] = (...a) => r.toggle_password && r.toggle_password(...a))
      })
    ]),
    _: 1
  }, 16);
}
const Yd = /* @__PURE__ */ nt(Wd, [["render", Kd]]), Xd = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Yd
}, Symbol.toStringTag, { value: "Module" }));
function jl(e, t) {
  return function() {
    return e.apply(t, arguments);
  };
}
const { toString: Jd } = Object.prototype, { getPrototypeOf: sr } = Object, Mi = /* @__PURE__ */ ((e) => (t) => {
  const n = Jd.call(t);
  return e[n] || (e[n] = n.slice(8, -1).toLowerCase());
})(/* @__PURE__ */ Object.create(null)), qe = (e) => (e = e.toLowerCase(), (t) => Mi(t) === e), Ai = (e) => (t) => typeof t === e, { isArray: an } = Array, Pn = Ai("undefined");
function Zd(e) {
  return e !== null && !Pn(e) && e.constructor !== null && !Pn(e.constructor) && Ve(e.constructor.isBuffer) && e.constructor.isBuffer(e);
}
const Hl = qe("ArrayBuffer");
function Qd(e) {
  let t;
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? t = ArrayBuffer.isView(e) : t = e && e.buffer && Hl(e.buffer), t;
}
const ef = Ai("string"), Ve = Ai("function"), Gl = Ai("number"), Li = (e) => e !== null && typeof e == "object", tf = (e) => e === !0 || e === !1, si = (e) => {
  if (Mi(e) !== "object")
    return !1;
  const t = sr(e);
  return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(Symbol.toStringTag in e) && !(Symbol.iterator in e);
}, nf = qe("Date"), sf = qe("File"), rf = qe("Blob"), of = qe("FileList"), lf = (e) => Li(e) && Ve(e.pipe), af = (e) => {
  let t;
  return e && (typeof FormData == "function" && e instanceof FormData || Ve(e.append) && ((t = Mi(e)) === "formdata" || // detect form-data instance
  t === "object" && Ve(e.toString) && e.toString() === "[object FormData]"));
}, cf = qe("URLSearchParams"), [uf, df, ff, pf] = ["ReadableStream", "Request", "Response", "Headers"].map(qe), hf = (e) => e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function $n(e, t, { allOwnKeys: n = !1 } = {}) {
  if (e === null || typeof e > "u")
    return;
  let i, s;
  if (typeof e != "object" && (e = [e]), an(e))
    for (i = 0, s = e.length; i < s; i++)
      t.call(null, e[i], i, e);
  else {
    const r = n ? Object.getOwnPropertyNames(e) : Object.keys(e), o = r.length;
    let l;
    for (i = 0; i < o; i++)
      l = r[i], t.call(null, e[l], l, e);
  }
}
function Ul(e, t) {
  t = t.toLowerCase();
  const n = Object.keys(e);
  let i = n.length, s;
  for (; i-- > 0; )
    if (s = n[i], t === s.toLowerCase())
      return s;
  return null;
}
const Rt = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global, ql = (e) => !Pn(e) && e !== Rt;
function ws() {
  const { caseless: e } = ql(this) && this || {}, t = {}, n = (i, s) => {
    const r = e && Ul(t, s) || s;
    si(t[r]) && si(i) ? t[r] = ws(t[r], i) : si(i) ? t[r] = ws({}, i) : an(i) ? t[r] = i.slice() : t[r] = i;
  };
  for (let i = 0, s = arguments.length; i < s; i++)
    arguments[i] && $n(arguments[i], n);
  return t;
}
const mf = (e, t, n, { allOwnKeys: i } = {}) => ($n(t, (s, r) => {
  n && Ve(s) ? e[r] = jl(s, n) : e[r] = s;
}, { allOwnKeys: i }), e), gf = (e) => (e.charCodeAt(0) === 65279 && (e = e.slice(1)), e), vf = (e, t, n, i) => {
  e.prototype = Object.create(t.prototype, i), e.prototype.constructor = e, Object.defineProperty(e, "super", {
    value: t.prototype
  }), n && Object.assign(e.prototype, n);
}, bf = (e, t, n, i) => {
  let s, r, o;
  const l = {};
  if (t = t || {}, e == null) return t;
  do {
    for (s = Object.getOwnPropertyNames(e), r = s.length; r-- > 0; )
      o = s[r], (!i || i(o, e, t)) && !l[o] && (t[o] = e[o], l[o] = !0);
    e = n !== !1 && sr(e);
  } while (e && (!n || n(e, t)) && e !== Object.prototype);
  return t;
}, yf = (e, t, n) => {
  e = String(e), (n === void 0 || n > e.length) && (n = e.length), n -= t.length;
  const i = e.indexOf(t, n);
  return i !== -1 && i === n;
}, Ef = (e) => {
  if (!e) return null;
  if (an(e)) return e;
  let t = e.length;
  if (!Gl(t)) return null;
  const n = new Array(t);
  for (; t-- > 0; )
    n[t] = e[t];
  return n;
}, wf = /* @__PURE__ */ ((e) => (t) => e && t instanceof e)(typeof Uint8Array < "u" && sr(Uint8Array)), _f = (e, t) => {
  const i = (e && e[Symbol.iterator]).call(e);
  let s;
  for (; (s = i.next()) && !s.done; ) {
    const r = s.value;
    t.call(e, r[0], r[1]);
  }
}, Sf = (e, t) => {
  let n;
  const i = [];
  for (; (n = e.exec(t)) !== null; )
    i.push(n);
  return i;
}, xf = qe("HTMLFormElement"), Tf = (e) => e.toLowerCase().replace(
  /[-_\s]([a-z\d])(\w*)/g,
  function(n, i, s) {
    return i.toUpperCase() + s;
  }
), to = (({ hasOwnProperty: e }) => (t, n) => e.call(t, n))(Object.prototype), Of = qe("RegExp"), Wl = (e, t) => {
  const n = Object.getOwnPropertyDescriptors(e), i = {};
  $n(n, (s, r) => {
    let o;
    (o = t(s, r, e)) !== !1 && (i[r] = o || s);
  }), Object.defineProperties(e, i);
}, Cf = (e) => {
  Wl(e, (t, n) => {
    if (Ve(e) && ["arguments", "caller", "callee"].indexOf(n) !== -1)
      return !1;
    const i = e[n];
    if (Ve(i)) {
      if (t.enumerable = !1, "writable" in t) {
        t.writable = !1;
        return;
      }
      t.set || (t.set = () => {
        throw Error("Can not rewrite read-only method '" + n + "'");
      });
    }
  });
}, Nf = (e, t) => {
  const n = {}, i = (s) => {
    s.forEach((r) => {
      n[r] = !0;
    });
  };
  return an(e) ? i(e) : i(String(e).split(t)), n;
}, Pf = () => {
}, Df = (e, t) => e != null && Number.isFinite(e = +e) ? e : t, qi = "abcdefghijklmnopqrstuvwxyz", no = "0123456789", Kl = {
  DIGIT: no,
  ALPHA: qi,
  ALPHA_DIGIT: qi + qi.toUpperCase() + no
}, Mf = (e = 16, t = Kl.ALPHA_DIGIT) => {
  let n = "";
  const { length: i } = t;
  for (; e--; )
    n += t[Math.random() * i | 0];
  return n;
};
function Af(e) {
  return !!(e && Ve(e.append) && e[Symbol.toStringTag] === "FormData" && e[Symbol.iterator]);
}
const Lf = (e) => {
  const t = new Array(10), n = (i, s) => {
    if (Li(i)) {
      if (t.indexOf(i) >= 0)
        return;
      if (!("toJSON" in i)) {
        t[s] = i;
        const r = an(i) ? [] : {};
        return $n(i, (o, l) => {
          const a = n(o, s + 1);
          !Pn(a) && (r[l] = a);
        }), t[s] = void 0, r;
      }
    }
    return i;
  };
  return n(e, 0);
}, If = qe("AsyncFunction"), Rf = (e) => e && (Li(e) || Ve(e)) && Ve(e.then) && Ve(e.catch), Yl = ((e, t) => e ? setImmediate : t ? ((n, i) => (Rt.addEventListener("message", ({ source: s, data: r }) => {
  s === Rt && r === n && i.length && i.shift()();
}, !1), (s) => {
  i.push(s), Rt.postMessage(n, "*");
}))(`axios@${Math.random()}`, []) : (n) => setTimeout(n))(
  typeof setImmediate == "function",
  Ve(Rt.postMessage)
), Vf = typeof queueMicrotask < "u" ? queueMicrotask.bind(Rt) : typeof process < "u" && process.nextTick || Yl, T = {
  isArray: an,
  isArrayBuffer: Hl,
  isBuffer: Zd,
  isFormData: af,
  isArrayBufferView: Qd,
  isString: ef,
  isNumber: Gl,
  isBoolean: tf,
  isObject: Li,
  isPlainObject: si,
  isReadableStream: uf,
  isRequest: df,
  isResponse: ff,
  isHeaders: pf,
  isUndefined: Pn,
  isDate: nf,
  isFile: sf,
  isBlob: rf,
  isRegExp: Of,
  isFunction: Ve,
  isStream: lf,
  isURLSearchParams: cf,
  isTypedArray: wf,
  isFileList: of,
  forEach: $n,
  merge: ws,
  extend: mf,
  trim: hf,
  stripBOM: gf,
  inherits: vf,
  toFlatObject: bf,
  kindOf: Mi,
  kindOfTest: qe,
  endsWith: yf,
  toArray: Ef,
  forEachEntry: _f,
  matchAll: Sf,
  isHTMLForm: xf,
  hasOwnProperty: to,
  hasOwnProp: to,
  // an alias to avoid ESLint no-prototype-builtins detection
  reduceDescriptors: Wl,
  freezeMethods: Cf,
  toObjectSet: Nf,
  toCamelCase: Tf,
  noop: Pf,
  toFiniteNumber: Df,
  findKey: Ul,
  global: Rt,
  isContextDefined: ql,
  ALPHABET: Kl,
  generateString: Mf,
  isSpecCompliantForm: Af,
  toJSONObject: Lf,
  isAsyncFn: If,
  isThenable: Rf,
  setImmediate: Yl,
  asap: Vf
};
function te(e, t, n, i, s) {
  Error.call(this), Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = new Error().stack, this.message = e, this.name = "AxiosError", t && (this.code = t), n && (this.config = n), i && (this.request = i), s && (this.response = s);
}
T.inherits(te, Error, {
  toJSON: function() {
    return {
      // Standard
      message: this.message,
      name: this.name,
      // Microsoft
      description: this.description,
      number: this.number,
      // Mozilla
      fileName: this.fileName,
      lineNumber: this.lineNumber,
      columnNumber: this.columnNumber,
      stack: this.stack,
      // Axios
      config: T.toJSONObject(this.config),
      code: this.code,
      status: this.response && this.response.status ? this.response.status : null
    };
  }
});
const Xl = te.prototype, Jl = {};
[
  "ERR_BAD_OPTION_VALUE",
  "ERR_BAD_OPTION",
  "ECONNABORTED",
  "ETIMEDOUT",
  "ERR_NETWORK",
  "ERR_FR_TOO_MANY_REDIRECTS",
  "ERR_DEPRECATED",
  "ERR_BAD_RESPONSE",
  "ERR_BAD_REQUEST",
  "ERR_CANCELED",
  "ERR_NOT_SUPPORT",
  "ERR_INVALID_URL"
  // eslint-disable-next-line func-names
].forEach((e) => {
  Jl[e] = { value: e };
});
Object.defineProperties(te, Jl);
Object.defineProperty(Xl, "isAxiosError", { value: !0 });
te.from = (e, t, n, i, s, r) => {
  const o = Object.create(Xl);
  return T.toFlatObject(e, o, function(a) {
    return a !== Error.prototype;
  }, (l) => l !== "isAxiosError"), te.call(o, e.message, t, n, i, s), o.cause = e, o.name = e.name, r && Object.assign(o, r), o;
};
const $f = null;
function _s(e) {
  return T.isPlainObject(e) || T.isArray(e);
}
function Zl(e) {
  return T.endsWith(e, "[]") ? e.slice(0, -2) : e;
}
function io(e, t, n) {
  return e ? e.concat(t).map(function(s, r) {
    return s = Zl(s), !n && r ? "[" + s + "]" : s;
  }).join(n ? "." : "") : t;
}
function Ff(e) {
  return T.isArray(e) && !e.some(_s);
}
const Bf = T.toFlatObject(T, {}, null, function(t) {
  return /^is[A-Z]/.test(t);
});
function Ii(e, t, n) {
  if (!T.isObject(e))
    throw new TypeError("target must be an object");
  t = t || new FormData(), n = T.toFlatObject(n, {
    metaTokens: !0,
    dots: !1,
    indexes: !1
  }, !1, function(b, w) {
    return !T.isUndefined(w[b]);
  });
  const i = n.metaTokens, s = n.visitor || c, r = n.dots, o = n.indexes, a = (n.Blob || typeof Blob < "u" && Blob) && T.isSpecCompliantForm(t);
  if (!T.isFunction(s))
    throw new TypeError("visitor must be a function");
  function u(m) {
    if (m === null) return "";
    if (T.isDate(m))
      return m.toISOString();
    if (!a && T.isBlob(m))
      throw new te("Blob is not supported. Use a Buffer instead.");
    return T.isArrayBuffer(m) || T.isTypedArray(m) ? a && typeof Blob == "function" ? new Blob([m]) : Buffer.from(m) : m;
  }
  function c(m, b, w) {
    let x = m;
    if (m && !w && typeof m == "object") {
      if (T.endsWith(b, "{}"))
        b = i ? b : b.slice(0, -2), m = JSON.stringify(m);
      else if (T.isArray(m) && Ff(m) || (T.isFileList(m) || T.endsWith(b, "[]")) && (x = T.toArray(m)))
        return b = Zl(b), x.forEach(function(h, S) {
          !(T.isUndefined(h) || h === null) && t.append(
            // eslint-disable-next-line no-nested-ternary
            o === !0 ? io([b], S, r) : o === null ? b : b + "[]",
            u(h)
          );
        }), !1;
    }
    return _s(m) ? !0 : (t.append(io(w, b, r), u(m)), !1);
  }
  const d = [], p = Object.assign(Bf, {
    defaultVisitor: c,
    convertValue: u,
    isVisitable: _s
  });
  function g(m, b) {
    if (!T.isUndefined(m)) {
      if (d.indexOf(m) !== -1)
        throw Error("Circular reference detected in " + b.join("."));
      d.push(m), T.forEach(m, function(x, v) {
        (!(T.isUndefined(x) || x === null) && s.call(
          t,
          x,
          T.isString(v) ? v.trim() : v,
          b,
          p
        )) === !0 && g(x, b ? b.concat(v) : [v]);
      }), d.pop();
    }
  }
  if (!T.isObject(e))
    throw new TypeError("data must be an object");
  return g(e), t;
}
function so(e) {
  const t = {
    "!": "%21",
    "'": "%27",
    "(": "%28",
    ")": "%29",
    "~": "%7E",
    "%20": "+",
    "%00": "\0"
  };
  return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g, function(i) {
    return t[i];
  });
}
function rr(e, t) {
  this._pairs = [], e && Ii(e, this, t);
}
const Ql = rr.prototype;
Ql.append = function(t, n) {
  this._pairs.push([t, n]);
};
Ql.toString = function(t) {
  const n = t ? function(i) {
    return t.call(this, i, so);
  } : so;
  return this._pairs.map(function(s) {
    return n(s[0]) + "=" + n(s[1]);
  }, "").join("&");
};
function zf(e) {
  return encodeURIComponent(e).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
}
function ea(e, t, n) {
  if (!t)
    return e;
  const i = n && n.encode || zf, s = n && n.serialize;
  let r;
  if (s ? r = s(t, n) : r = T.isURLSearchParams(t) ? t.toString() : new rr(t, n).toString(i), r) {
    const o = e.indexOf("#");
    o !== -1 && (e = e.slice(0, o)), e += (e.indexOf("?") === -1 ? "?" : "&") + r;
  }
  return e;
}
class ro {
  constructor() {
    this.handlers = [];
  }
  /**
   * Add a new interceptor to the stack
   *
   * @param {Function} fulfilled The function to handle `then` for a `Promise`
   * @param {Function} rejected The function to handle `reject` for a `Promise`
   *
   * @return {Number} An ID used to remove interceptor later
   */
  use(t, n, i) {
    return this.handlers.push({
      fulfilled: t,
      rejected: n,
      synchronous: i ? i.synchronous : !1,
      runWhen: i ? i.runWhen : null
    }), this.handlers.length - 1;
  }
  /**
   * Remove an interceptor from the stack
   *
   * @param {Number} id The ID that was returned by `use`
   *
   * @returns {Boolean} `true` if the interceptor was removed, `false` otherwise
   */
  eject(t) {
    this.handlers[t] && (this.handlers[t] = null);
  }
  /**
   * Clear all interceptors from the stack
   *
   * @returns {void}
   */
  clear() {
    this.handlers && (this.handlers = []);
  }
  /**
   * Iterate over all the registered interceptors
   *
   * This method is particularly useful for skipping over any
   * interceptors that may have become `null` calling `eject`.
   *
   * @param {Function} fn The function to call for each interceptor
   *
   * @returns {void}
   */
  forEach(t) {
    T.forEach(this.handlers, function(i) {
      i !== null && t(i);
    });
  }
}
const ta = {
  silentJSONParsing: !0,
  forcedJSONParsing: !0,
  clarifyTimeoutError: !1
}, kf = typeof URLSearchParams < "u" ? URLSearchParams : rr, jf = typeof FormData < "u" ? FormData : null, Hf = typeof Blob < "u" ? Blob : null, Gf = {
  isBrowser: !0,
  classes: {
    URLSearchParams: kf,
    FormData: jf,
    Blob: Hf
  },
  protocols: ["http", "https", "file", "blob", "url", "data"]
}, or = typeof window < "u" && typeof document < "u", Uf = ((e) => or && ["ReactNative", "NativeScript", "NS"].indexOf(e) < 0)(typeof navigator < "u" && navigator.product), qf = typeof WorkerGlobalScope < "u" && // eslint-disable-next-line no-undef
self instanceof WorkerGlobalScope && typeof self.importScripts == "function", Wf = or && window.location.href || "http://localhost", Kf = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  hasBrowserEnv: or,
  hasStandardBrowserEnv: Uf,
  hasStandardBrowserWebWorkerEnv: qf,
  origin: Wf
}, Symbol.toStringTag, { value: "Module" })), Ge = {
  ...Kf,
  ...Gf
};
function Yf(e, t) {
  return Ii(e, new Ge.classes.URLSearchParams(), Object.assign({
    visitor: function(n, i, s, r) {
      return Ge.isNode && T.isBuffer(n) ? (this.append(i, n.toString("base64")), !1) : r.defaultVisitor.apply(this, arguments);
    }
  }, t));
}
function Xf(e) {
  return T.matchAll(/\w+|\[(\w*)]/g, e).map((t) => t[0] === "[]" ? "" : t[1] || t[0]);
}
function Jf(e) {
  const t = {}, n = Object.keys(e);
  let i;
  const s = n.length;
  let r;
  for (i = 0; i < s; i++)
    r = n[i], t[r] = e[r];
  return t;
}
function na(e) {
  function t(n, i, s, r) {
    let o = n[r++];
    if (o === "__proto__") return !0;
    const l = Number.isFinite(+o), a = r >= n.length;
    return o = !o && T.isArray(s) ? s.length : o, a ? (T.hasOwnProp(s, o) ? s[o] = [s[o], i] : s[o] = i, !l) : ((!s[o] || !T.isObject(s[o])) && (s[o] = []), t(n, i, s[o], r) && T.isArray(s[o]) && (s[o] = Jf(s[o])), !l);
  }
  if (T.isFormData(e) && T.isFunction(e.entries)) {
    const n = {};
    return T.forEachEntry(e, (i, s) => {
      t(Xf(i), s, n, 0);
    }), n;
  }
  return null;
}
function Zf(e, t, n) {
  if (T.isString(e))
    try {
      return (t || JSON.parse)(e), T.trim(e);
    } catch (i) {
      if (i.name !== "SyntaxError")
        throw i;
    }
  return (0, JSON.stringify)(e);
}
const Fn = {
  transitional: ta,
  adapter: ["xhr", "http", "fetch"],
  transformRequest: [function(t, n) {
    const i = n.getContentType() || "", s = i.indexOf("application/json") > -1, r = T.isObject(t);
    if (r && T.isHTMLForm(t) && (t = new FormData(t)), T.isFormData(t))
      return s ? JSON.stringify(na(t)) : t;
    if (T.isArrayBuffer(t) || T.isBuffer(t) || T.isStream(t) || T.isFile(t) || T.isBlob(t) || T.isReadableStream(t))
      return t;
    if (T.isArrayBufferView(t))
      return t.buffer;
    if (T.isURLSearchParams(t))
      return n.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), t.toString();
    let l;
    if (r) {
      if (i.indexOf("application/x-www-form-urlencoded") > -1)
        return Yf(t, this.formSerializer).toString();
      if ((l = T.isFileList(t)) || i.indexOf("multipart/form-data") > -1) {
        const a = this.env && this.env.FormData;
        return Ii(
          l ? { "files[]": t } : t,
          a && new a(),
          this.formSerializer
        );
      }
    }
    return r || s ? (n.setContentType("application/json", !1), Zf(t)) : t;
  }],
  transformResponse: [function(t) {
    const n = this.transitional || Fn.transitional, i = n && n.forcedJSONParsing, s = this.responseType === "json";
    if (T.isResponse(t) || T.isReadableStream(t))
      return t;
    if (t && T.isString(t) && (i && !this.responseType || s)) {
      const o = !(n && n.silentJSONParsing) && s;
      try {
        return JSON.parse(t);
      } catch (l) {
        if (o)
          throw l.name === "SyntaxError" ? te.from(l, te.ERR_BAD_RESPONSE, this, null, this.response) : l;
      }
    }
    return t;
  }],
  /**
   * A timeout in milliseconds to abort a request. If set to 0 (default) a
   * timeout is not created.
   */
  timeout: 0,
  xsrfCookieName: "XSRF-TOKEN",
  xsrfHeaderName: "X-XSRF-TOKEN",
  maxContentLength: -1,
  maxBodyLength: -1,
  env: {
    FormData: Ge.classes.FormData,
    Blob: Ge.classes.Blob
  },
  validateStatus: function(t) {
    return t >= 200 && t < 300;
  },
  headers: {
    common: {
      Accept: "application/json, text/plain, */*",
      "Content-Type": void 0
    }
  }
};
T.forEach(["delete", "get", "head", "post", "put", "patch"], (e) => {
  Fn.headers[e] = {};
});
const Qf = T.toObjectSet([
  "age",
  "authorization",
  "content-length",
  "content-type",
  "etag",
  "expires",
  "from",
  "host",
  "if-modified-since",
  "if-unmodified-since",
  "last-modified",
  "location",
  "max-forwards",
  "proxy-authorization",
  "referer",
  "retry-after",
  "user-agent"
]), ep = (e) => {
  const t = {};
  let n, i, s;
  return e && e.split(`
`).forEach(function(o) {
    s = o.indexOf(":"), n = o.substring(0, s).trim().toLowerCase(), i = o.substring(s + 1).trim(), !(!n || t[n] && Qf[n]) && (n === "set-cookie" ? t[n] ? t[n].push(i) : t[n] = [i] : t[n] = t[n] ? t[n] + ", " + i : i);
  }), t;
}, oo = Symbol("internals");
function mn(e) {
  return e && String(e).trim().toLowerCase();
}
function ri(e) {
  return e === !1 || e == null ? e : T.isArray(e) ? e.map(ri) : String(e);
}
function tp(e) {
  const t = /* @__PURE__ */ Object.create(null), n = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let i;
  for (; i = n.exec(e); )
    t[i[1]] = i[2];
  return t;
}
const np = (e) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());
function Wi(e, t, n, i, s) {
  if (T.isFunction(i))
    return i.call(this, t, n);
  if (s && (t = n), !!T.isString(t)) {
    if (T.isString(i))
      return t.indexOf(i) !== -1;
    if (T.isRegExp(i))
      return i.test(t);
  }
}
function ip(e) {
  return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (t, n, i) => n.toUpperCase() + i);
}
function sp(e, t) {
  const n = T.toCamelCase(" " + t);
  ["get", "set", "has"].forEach((i) => {
    Object.defineProperty(e, i + n, {
      value: function(s, r, o) {
        return this[i].call(this, t, s, r, o);
      },
      configurable: !0
    });
  });
}
class Ae {
  constructor(t) {
    t && this.set(t);
  }
  set(t, n, i) {
    const s = this;
    function r(l, a, u) {
      const c = mn(a);
      if (!c)
        throw new Error("header name must be a non-empty string");
      const d = T.findKey(s, c);
      (!d || s[d] === void 0 || u === !0 || u === void 0 && s[d] !== !1) && (s[d || a] = ri(l));
    }
    const o = (l, a) => T.forEach(l, (u, c) => r(u, c, a));
    if (T.isPlainObject(t) || t instanceof this.constructor)
      o(t, n);
    else if (T.isString(t) && (t = t.trim()) && !np(t))
      o(ep(t), n);
    else if (T.isHeaders(t))
      for (const [l, a] of t.entries())
        r(a, l, i);
    else
      t != null && r(n, t, i);
    return this;
  }
  get(t, n) {
    if (t = mn(t), t) {
      const i = T.findKey(this, t);
      if (i) {
        const s = this[i];
        if (!n)
          return s;
        if (n === !0)
          return tp(s);
        if (T.isFunction(n))
          return n.call(this, s, i);
        if (T.isRegExp(n))
          return n.exec(s);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(t, n) {
    if (t = mn(t), t) {
      const i = T.findKey(this, t);
      return !!(i && this[i] !== void 0 && (!n || Wi(this, this[i], i, n)));
    }
    return !1;
  }
  delete(t, n) {
    const i = this;
    let s = !1;
    function r(o) {
      if (o = mn(o), o) {
        const l = T.findKey(i, o);
        l && (!n || Wi(i, i[l], l, n)) && (delete i[l], s = !0);
      }
    }
    return T.isArray(t) ? t.forEach(r) : r(t), s;
  }
  clear(t) {
    const n = Object.keys(this);
    let i = n.length, s = !1;
    for (; i--; ) {
      const r = n[i];
      (!t || Wi(this, this[r], r, t, !0)) && (delete this[r], s = !0);
    }
    return s;
  }
  normalize(t) {
    const n = this, i = {};
    return T.forEach(this, (s, r) => {
      const o = T.findKey(i, r);
      if (o) {
        n[o] = ri(s), delete n[r];
        return;
      }
      const l = t ? ip(r) : String(r).trim();
      l !== r && delete n[r], n[l] = ri(s), i[l] = !0;
    }), this;
  }
  concat(...t) {
    return this.constructor.concat(this, ...t);
  }
  toJSON(t) {
    const n = /* @__PURE__ */ Object.create(null);
    return T.forEach(this, (i, s) => {
      i != null && i !== !1 && (n[s] = t && T.isArray(i) ? i.join(", ") : i);
    }), n;
  }
  [Symbol.iterator]() {
    return Object.entries(this.toJSON())[Symbol.iterator]();
  }
  toString() {
    return Object.entries(this.toJSON()).map(([t, n]) => t + ": " + n).join(`
`);
  }
  get [Symbol.toStringTag]() {
    return "AxiosHeaders";
  }
  static from(t) {
    return t instanceof this ? t : new this(t);
  }
  static concat(t, ...n) {
    const i = new this(t);
    return n.forEach((s) => i.set(s)), i;
  }
  static accessor(t) {
    const i = (this[oo] = this[oo] = {
      accessors: {}
    }).accessors, s = this.prototype;
    function r(o) {
      const l = mn(o);
      i[l] || (sp(s, o), i[l] = !0);
    }
    return T.isArray(t) ? t.forEach(r) : r(t), this;
  }
}
Ae.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]);
T.reduceDescriptors(Ae.prototype, ({ value: e }, t) => {
  let n = t[0].toUpperCase() + t.slice(1);
  return {
    get: () => e,
    set(i) {
      this[n] = i;
    }
  };
});
T.freezeMethods(Ae);
function Ki(e, t) {
  const n = this || Fn, i = t || n, s = Ae.from(i.headers);
  let r = i.data;
  return T.forEach(e, function(l) {
    r = l.call(n, r, s.normalize(), t ? t.status : void 0);
  }), s.normalize(), r;
}
function ia(e) {
  return !!(e && e.__CANCEL__);
}
function cn(e, t, n) {
  te.call(this, e ?? "canceled", te.ERR_CANCELED, t, n), this.name = "CanceledError";
}
T.inherits(cn, te, {
  __CANCEL__: !0
});
function sa(e, t, n) {
  const i = n.config.validateStatus;
  !n.status || !i || i(n.status) ? e(n) : t(new te(
    "Request failed with status code " + n.status,
    [te.ERR_BAD_REQUEST, te.ERR_BAD_RESPONSE][Math.floor(n.status / 100) - 4],
    n.config,
    n.request,
    n
  ));
}
function rp(e) {
  const t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
  return t && t[1] || "";
}
function op(e, t) {
  e = e || 10;
  const n = new Array(e), i = new Array(e);
  let s = 0, r = 0, o;
  return t = t !== void 0 ? t : 1e3, function(a) {
    const u = Date.now(), c = i[r];
    o || (o = u), n[s] = a, i[s] = u;
    let d = r, p = 0;
    for (; d !== s; )
      p += n[d++], d = d % e;
    if (s = (s + 1) % e, s === r && (r = (r + 1) % e), u - o < t)
      return;
    const g = c && u - c;
    return g ? Math.round(p * 1e3 / g) : void 0;
  };
}
function lp(e, t) {
  let n = 0, i = 1e3 / t, s, r;
  const o = (u, c = Date.now()) => {
    n = c, s = null, r && (clearTimeout(r), r = null), e.apply(null, u);
  };
  return [(...u) => {
    const c = Date.now(), d = c - n;
    d >= i ? o(u, c) : (s = u, r || (r = setTimeout(() => {
      r = null, o(s);
    }, i - d)));
  }, () => s && o(s)];
}
const hi = (e, t, n = 3) => {
  let i = 0;
  const s = op(50, 250);
  return lp((r) => {
    const o = r.loaded, l = r.lengthComputable ? r.total : void 0, a = o - i, u = s(a), c = o <= l;
    i = o;
    const d = {
      loaded: o,
      total: l,
      progress: l ? o / l : void 0,
      bytes: a,
      rate: u || void 0,
      estimated: u && l && c ? (l - o) / u : void 0,
      event: r,
      lengthComputable: l != null,
      [t ? "download" : "upload"]: !0
    };
    e(d);
  }, n);
}, lo = (e, t) => {
  const n = e != null;
  return [(i) => t[0]({
    lengthComputable: n,
    total: e,
    loaded: i
  }), t[1]];
}, ao = (e) => (...t) => T.asap(() => e(...t)), ap = Ge.hasStandardBrowserEnv ? (
  // Standard browser envs have full support of the APIs needed to test
  // whether the request URL is of the same origin as current location.
  function() {
    const t = /(msie|trident)/i.test(navigator.userAgent), n = document.createElement("a");
    let i;
    function s(r) {
      let o = r;
      return t && (n.setAttribute("href", o), o = n.href), n.setAttribute("href", o), {
        href: n.href,
        protocol: n.protocol ? n.protocol.replace(/:$/, "") : "",
        host: n.host,
        search: n.search ? n.search.replace(/^\?/, "") : "",
        hash: n.hash ? n.hash.replace(/^#/, "") : "",
        hostname: n.hostname,
        port: n.port,
        pathname: n.pathname.charAt(0) === "/" ? n.pathname : "/" + n.pathname
      };
    }
    return i = s(window.location.href), function(o) {
      const l = T.isString(o) ? s(o) : o;
      return l.protocol === i.protocol && l.host === i.host;
    };
  }()
) : (
  // Non standard browser envs (web workers, react-native) lack needed support.
  /* @__PURE__ */ function() {
    return function() {
      return !0;
    };
  }()
), cp = Ge.hasStandardBrowserEnv ? (
  // Standard browser envs support document.cookie
  {
    write(e, t, n, i, s, r) {
      const o = [e + "=" + encodeURIComponent(t)];
      T.isNumber(n) && o.push("expires=" + new Date(n).toGMTString()), T.isString(i) && o.push("path=" + i), T.isString(s) && o.push("domain=" + s), r === !0 && o.push("secure"), document.cookie = o.join("; ");
    },
    read(e) {
      const t = document.cookie.match(new RegExp("(^|;\\s*)(" + e + ")=([^;]*)"));
      return t ? decodeURIComponent(t[3]) : null;
    },
    remove(e) {
      this.write(e, "", Date.now() - 864e5);
    }
  }
) : (
  // Non-standard browser env (web workers, react-native) lack needed support.
  {
    write() {
    },
    read() {
      return null;
    },
    remove() {
    }
  }
);
function up(e) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e);
}
function dp(e, t) {
  return t ? e.replace(/\/?\/$/, "") + "/" + t.replace(/^\/+/, "") : e;
}
function ra(e, t) {
  return e && !up(t) ? dp(e, t) : t;
}
const co = (e) => e instanceof Ae ? { ...e } : e;
function Wt(e, t) {
  t = t || {};
  const n = {};
  function i(u, c, d) {
    return T.isPlainObject(u) && T.isPlainObject(c) ? T.merge.call({ caseless: d }, u, c) : T.isPlainObject(c) ? T.merge({}, c) : T.isArray(c) ? c.slice() : c;
  }
  function s(u, c, d) {
    if (T.isUndefined(c)) {
      if (!T.isUndefined(u))
        return i(void 0, u, d);
    } else return i(u, c, d);
  }
  function r(u, c) {
    if (!T.isUndefined(c))
      return i(void 0, c);
  }
  function o(u, c) {
    if (T.isUndefined(c)) {
      if (!T.isUndefined(u))
        return i(void 0, u);
    } else return i(void 0, c);
  }
  function l(u, c, d) {
    if (d in t)
      return i(u, c);
    if (d in e)
      return i(void 0, u);
  }
  const a = {
    url: r,
    method: r,
    data: r,
    baseURL: o,
    transformRequest: o,
    transformResponse: o,
    paramsSerializer: o,
    timeout: o,
    timeoutMessage: o,
    withCredentials: o,
    withXSRFToken: o,
    adapter: o,
    responseType: o,
    xsrfCookieName: o,
    xsrfHeaderName: o,
    onUploadProgress: o,
    onDownloadProgress: o,
    decompress: o,
    maxContentLength: o,
    maxBodyLength: o,
    beforeRedirect: o,
    transport: o,
    httpAgent: o,
    httpsAgent: o,
    cancelToken: o,
    socketPath: o,
    responseEncoding: o,
    validateStatus: l,
    headers: (u, c) => s(co(u), co(c), !0)
  };
  return T.forEach(Object.keys(Object.assign({}, e, t)), function(c) {
    const d = a[c] || s, p = d(e[c], t[c], c);
    T.isUndefined(p) && d !== l || (n[c] = p);
  }), n;
}
const oa = (e) => {
  const t = Wt({}, e);
  let { data: n, withXSRFToken: i, xsrfHeaderName: s, xsrfCookieName: r, headers: o, auth: l } = t;
  t.headers = o = Ae.from(o), t.url = ea(ra(t.baseURL, t.url), e.params, e.paramsSerializer), l && o.set(
    "Authorization",
    "Basic " + btoa((l.username || "") + ":" + (l.password ? unescape(encodeURIComponent(l.password)) : ""))
  );
  let a;
  if (T.isFormData(n)) {
    if (Ge.hasStandardBrowserEnv || Ge.hasStandardBrowserWebWorkerEnv)
      o.setContentType(void 0);
    else if ((a = o.getContentType()) !== !1) {
      const [u, ...c] = a ? a.split(";").map((d) => d.trim()).filter(Boolean) : [];
      o.setContentType([u || "multipart/form-data", ...c].join("; "));
    }
  }
  if (Ge.hasStandardBrowserEnv && (i && T.isFunction(i) && (i = i(t)), i || i !== !1 && ap(t.url))) {
    const u = s && r && cp.read(r);
    u && o.set(s, u);
  }
  return t;
}, fp = typeof XMLHttpRequest < "u", pp = fp && function(e) {
  return new Promise(function(n, i) {
    const s = oa(e);
    let r = s.data;
    const o = Ae.from(s.headers).normalize();
    let { responseType: l, onUploadProgress: a, onDownloadProgress: u } = s, c, d, p, g, m;
    function b() {
      g && g(), m && m(), s.cancelToken && s.cancelToken.unsubscribe(c), s.signal && s.signal.removeEventListener("abort", c);
    }
    let w = new XMLHttpRequest();
    w.open(s.method.toUpperCase(), s.url, !0), w.timeout = s.timeout;
    function x() {
      if (!w)
        return;
      const h = Ae.from(
        "getAllResponseHeaders" in w && w.getAllResponseHeaders()
      ), O = {
        data: !l || l === "text" || l === "json" ? w.responseText : w.response,
        status: w.status,
        statusText: w.statusText,
        headers: h,
        config: e,
        request: w
      };
      sa(function(j) {
        n(j), b();
      }, function(j) {
        i(j), b();
      }, O), w = null;
    }
    "onloadend" in w ? w.onloadend = x : w.onreadystatechange = function() {
      !w || w.readyState !== 4 || w.status === 0 && !(w.responseURL && w.responseURL.indexOf("file:") === 0) || setTimeout(x);
    }, w.onabort = function() {
      w && (i(new te("Request aborted", te.ECONNABORTED, e, w)), w = null);
    }, w.onerror = function() {
      i(new te("Network Error", te.ERR_NETWORK, e, w)), w = null;
    }, w.ontimeout = function() {
      let S = s.timeout ? "timeout of " + s.timeout + "ms exceeded" : "timeout exceeded";
      const O = s.transitional || ta;
      s.timeoutErrorMessage && (S = s.timeoutErrorMessage), i(new te(
        S,
        O.clarifyTimeoutError ? te.ETIMEDOUT : te.ECONNABORTED,
        e,
        w
      )), w = null;
    }, r === void 0 && o.setContentType(null), "setRequestHeader" in w && T.forEach(o.toJSON(), function(S, O) {
      w.setRequestHeader(O, S);
    }), T.isUndefined(s.withCredentials) || (w.withCredentials = !!s.withCredentials), l && l !== "json" && (w.responseType = s.responseType), u && ([p, m] = hi(u, !0), w.addEventListener("progress", p)), a && w.upload && ([d, g] = hi(a), w.upload.addEventListener("progress", d), w.upload.addEventListener("loadend", g)), (s.cancelToken || s.signal) && (c = (h) => {
      w && (i(!h || h.type ? new cn(null, e, w) : h), w.abort(), w = null);
    }, s.cancelToken && s.cancelToken.subscribe(c), s.signal && (s.signal.aborted ? c() : s.signal.addEventListener("abort", c)));
    const v = rp(s.url);
    if (v && Ge.protocols.indexOf(v) === -1) {
      i(new te("Unsupported protocol " + v + ":", te.ERR_BAD_REQUEST, e));
      return;
    }
    w.send(r || null);
  });
}, hp = (e, t) => {
  let n = new AbortController(), i;
  const s = function(a) {
    if (!i) {
      i = !0, o();
      const u = a instanceof Error ? a : this.reason;
      n.abort(u instanceof te ? u : new cn(u instanceof Error ? u.message : u));
    }
  };
  let r = t && setTimeout(() => {
    s(new te(`timeout ${t} of ms exceeded`, te.ETIMEDOUT));
  }, t);
  const o = () => {
    e && (r && clearTimeout(r), r = null, e.forEach((a) => {
      a && (a.removeEventListener ? a.removeEventListener("abort", s) : a.unsubscribe(s));
    }), e = null);
  };
  e.forEach((a) => a && a.addEventListener && a.addEventListener("abort", s));
  const { signal: l } = n;
  return l.unsubscribe = o, [l, () => {
    r && clearTimeout(r), r = null;
  }];
}, mp = function* (e, t) {
  let n = e.byteLength;
  if (n < t) {
    yield e;
    return;
  }
  let i = 0, s;
  for (; i < n; )
    s = i + t, yield e.slice(i, s), i = s;
}, gp = async function* (e, t, n) {
  for await (const i of e)
    yield* mp(ArrayBuffer.isView(i) ? i : await n(String(i)), t);
}, uo = (e, t, n, i, s) => {
  const r = gp(e, t, s);
  let o = 0, l, a = (u) => {
    l || (l = !0, i && i(u));
  };
  return new ReadableStream({
    async pull(u) {
      try {
        const { done: c, value: d } = await r.next();
        if (c) {
          a(), u.close();
          return;
        }
        let p = d.byteLength;
        if (n) {
          let g = o += p;
          n(g);
        }
        u.enqueue(new Uint8Array(d));
      } catch (c) {
        throw a(c), c;
      }
    },
    cancel(u) {
      return a(u), r.return();
    }
  }, {
    highWaterMark: 2
  });
}, Ri = typeof fetch == "function" && typeof Request == "function" && typeof Response == "function", la = Ri && typeof ReadableStream == "function", Ss = Ri && (typeof TextEncoder == "function" ? /* @__PURE__ */ ((e) => (t) => e.encode(t))(new TextEncoder()) : async (e) => new Uint8Array(await new Response(e).arrayBuffer())), aa = (e, ...t) => {
  try {
    return !!e(...t);
  } catch {
    return !1;
  }
}, vp = la && aa(() => {
  let e = !1;
  const t = new Request(Ge.origin, {
    body: new ReadableStream(),
    method: "POST",
    get duplex() {
      return e = !0, "half";
    }
  }).headers.has("Content-Type");
  return e && !t;
}), fo = 64 * 1024, xs = la && aa(() => T.isReadableStream(new Response("").body)), mi = {
  stream: xs && ((e) => e.body)
};
Ri && ((e) => {
  ["text", "arrayBuffer", "blob", "formData", "stream"].forEach((t) => {
    !mi[t] && (mi[t] = T.isFunction(e[t]) ? (n) => n[t]() : (n, i) => {
      throw new te(`Response type '${t}' is not supported`, te.ERR_NOT_SUPPORT, i);
    });
  });
})(new Response());
const bp = async (e) => {
  if (e == null)
    return 0;
  if (T.isBlob(e))
    return e.size;
  if (T.isSpecCompliantForm(e))
    return (await new Request(e).arrayBuffer()).byteLength;
  if (T.isArrayBufferView(e) || T.isArrayBuffer(e))
    return e.byteLength;
  if (T.isURLSearchParams(e) && (e = e + ""), T.isString(e))
    return (await Ss(e)).byteLength;
}, yp = async (e, t) => {
  const n = T.toFiniteNumber(e.getContentLength());
  return n ?? bp(t);
}, Ep = Ri && (async (e) => {
  let {
    url: t,
    method: n,
    data: i,
    signal: s,
    cancelToken: r,
    timeout: o,
    onDownloadProgress: l,
    onUploadProgress: a,
    responseType: u,
    headers: c,
    withCredentials: d = "same-origin",
    fetchOptions: p
  } = oa(e);
  u = u ? (u + "").toLowerCase() : "text";
  let [g, m] = s || r || o ? hp([s, r], o) : [], b, w;
  const x = () => {
    !b && setTimeout(() => {
      g && g.unsubscribe();
    }), b = !0;
  };
  let v;
  try {
    if (a && vp && n !== "get" && n !== "head" && (v = await yp(c, i)) !== 0) {
      let B = new Request(t, {
        method: "POST",
        body: i,
        duplex: "half"
      }), j;
      if (T.isFormData(i) && (j = B.headers.get("content-type")) && c.setContentType(j), B.body) {
        const [q, N] = lo(
          v,
          hi(ao(a))
        );
        i = uo(B.body, fo, q, N, Ss);
      }
    }
    T.isString(d) || (d = d ? "include" : "omit"), w = new Request(t, {
      ...p,
      signal: g,
      method: n.toUpperCase(),
      headers: c.normalize().toJSON(),
      body: i,
      duplex: "half",
      credentials: d
    });
    let h = await fetch(w);
    const S = xs && (u === "stream" || u === "response");
    if (xs && (l || S)) {
      const B = {};
      ["status", "statusText", "headers"].forEach((I) => {
        B[I] = h[I];
      });
      const j = T.toFiniteNumber(h.headers.get("content-length")), [q, N] = l && lo(
        j,
        hi(ao(l), !0)
      ) || [];
      h = new Response(
        uo(h.body, fo, q, () => {
          N && N(), S && x();
        }, Ss),
        B
      );
    }
    u = u || "text";
    let O = await mi[T.findKey(mi, u) || "text"](h, e);
    return !S && x(), m && m(), await new Promise((B, j) => {
      sa(B, j, {
        data: O,
        headers: Ae.from(h.headers),
        status: h.status,
        statusText: h.statusText,
        config: e,
        request: w
      });
    });
  } catch (h) {
    throw x(), h && h.name === "TypeError" && /fetch/i.test(h.message) ? Object.assign(
      new te("Network Error", te.ERR_NETWORK, e, w),
      {
        cause: h.cause || h
      }
    ) : te.from(h, h && h.code, e, w);
  }
}), Ts = {
  http: $f,
  xhr: pp,
  fetch: Ep
};
T.forEach(Ts, (e, t) => {
  if (e) {
    try {
      Object.defineProperty(e, "name", { value: t });
    } catch {
    }
    Object.defineProperty(e, "adapterName", { value: t });
  }
});
const po = (e) => `- ${e}`, wp = (e) => T.isFunction(e) || e === null || e === !1, ca = {
  getAdapter: (e) => {
    e = T.isArray(e) ? e : [e];
    const { length: t } = e;
    let n, i;
    const s = {};
    for (let r = 0; r < t; r++) {
      n = e[r];
      let o;
      if (i = n, !wp(n) && (i = Ts[(o = String(n)).toLowerCase()], i === void 0))
        throw new te(`Unknown adapter '${o}'`);
      if (i)
        break;
      s[o || "#" + r] = i;
    }
    if (!i) {
      const r = Object.entries(s).map(
        ([l, a]) => `adapter ${l} ` + (a === !1 ? "is not supported by the environment" : "is not available in the build")
      );
      let o = t ? r.length > 1 ? `since :
` + r.map(po).join(`
`) : " " + po(r[0]) : "as no adapter specified";
      throw new te(
        "There is no suitable adapter to dispatch the request " + o,
        "ERR_NOT_SUPPORT"
      );
    }
    return i;
  },
  adapters: Ts
};
function Yi(e) {
  if (e.cancelToken && e.cancelToken.throwIfRequested(), e.signal && e.signal.aborted)
    throw new cn(null, e);
}
function ho(e) {
  return Yi(e), e.headers = Ae.from(e.headers), e.data = Ki.call(
    e,
    e.transformRequest
  ), ["post", "put", "patch"].indexOf(e.method) !== -1 && e.headers.setContentType("application/x-www-form-urlencoded", !1), ca.getAdapter(e.adapter || Fn.adapter)(e).then(function(i) {
    return Yi(e), i.data = Ki.call(
      e,
      e.transformResponse,
      i
    ), i.headers = Ae.from(i.headers), i;
  }, function(i) {
    return ia(i) || (Yi(e), i && i.response && (i.response.data = Ki.call(
      e,
      e.transformResponse,
      i.response
    ), i.response.headers = Ae.from(i.response.headers))), Promise.reject(i);
  });
}
const ua = "1.7.4", lr = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach((e, t) => {
  lr[e] = function(i) {
    return typeof i === e || "a" + (t < 1 ? "n " : " ") + e;
  };
});
const mo = {};
lr.transitional = function(t, n, i) {
  function s(r, o) {
    return "[Axios v" + ua + "] Transitional option '" + r + "'" + o + (i ? ". " + i : "");
  }
  return (r, o, l) => {
    if (t === !1)
      throw new te(
        s(o, " has been removed" + (n ? " in " + n : "")),
        te.ERR_DEPRECATED
      );
    return n && !mo[o] && (mo[o] = !0, console.warn(
      s(
        o,
        " has been deprecated since v" + n + " and will be removed in the near future"
      )
    )), t ? t(r, o, l) : !0;
  };
};
function _p(e, t, n) {
  if (typeof e != "object")
    throw new te("options must be an object", te.ERR_BAD_OPTION_VALUE);
  const i = Object.keys(e);
  let s = i.length;
  for (; s-- > 0; ) {
    const r = i[s], o = t[r];
    if (o) {
      const l = e[r], a = l === void 0 || o(l, r, e);
      if (a !== !0)
        throw new te("option " + r + " must be " + a, te.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (n !== !0)
      throw new te("Unknown option " + r, te.ERR_BAD_OPTION);
  }
}
const Os = {
  assertOptions: _p,
  validators: lr
}, gt = Os.validators;
class Ht {
  constructor(t) {
    this.defaults = t, this.interceptors = {
      request: new ro(),
      response: new ro()
    };
  }
  /**
   * Dispatch a request
   *
   * @param {String|Object} configOrUrl The config specific for this request (merged with this.defaults)
   * @param {?Object} config
   *
   * @returns {Promise} The Promise to be fulfilled
   */
  async request(t, n) {
    try {
      return await this._request(t, n);
    } catch (i) {
      if (i instanceof Error) {
        let s;
        Error.captureStackTrace ? Error.captureStackTrace(s = {}) : s = new Error();
        const r = s.stack ? s.stack.replace(/^.+\n/, "") : "";
        try {
          i.stack ? r && !String(i.stack).endsWith(r.replace(/^.+\n.+\n/, "")) && (i.stack += `
` + r) : i.stack = r;
        } catch {
        }
      }
      throw i;
    }
  }
  _request(t, n) {
    typeof t == "string" ? (n = n || {}, n.url = t) : n = t || {}, n = Wt(this.defaults, n);
    const { transitional: i, paramsSerializer: s, headers: r } = n;
    i !== void 0 && Os.assertOptions(i, {
      silentJSONParsing: gt.transitional(gt.boolean),
      forcedJSONParsing: gt.transitional(gt.boolean),
      clarifyTimeoutError: gt.transitional(gt.boolean)
    }, !1), s != null && (T.isFunction(s) ? n.paramsSerializer = {
      serialize: s
    } : Os.assertOptions(s, {
      encode: gt.function,
      serialize: gt.function
    }, !0)), n.method = (n.method || this.defaults.method || "get").toLowerCase();
    let o = r && T.merge(
      r.common,
      r[n.method]
    );
    r && T.forEach(
      ["delete", "get", "head", "post", "put", "patch", "common"],
      (m) => {
        delete r[m];
      }
    ), n.headers = Ae.concat(o, r);
    const l = [];
    let a = !0;
    this.interceptors.request.forEach(function(b) {
      typeof b.runWhen == "function" && b.runWhen(n) === !1 || (a = a && b.synchronous, l.unshift(b.fulfilled, b.rejected));
    });
    const u = [];
    this.interceptors.response.forEach(function(b) {
      u.push(b.fulfilled, b.rejected);
    });
    let c, d = 0, p;
    if (!a) {
      const m = [ho.bind(this), void 0];
      for (m.unshift.apply(m, l), m.push.apply(m, u), p = m.length, c = Promise.resolve(n); d < p; )
        c = c.then(m[d++], m[d++]);
      return c;
    }
    p = l.length;
    let g = n;
    for (d = 0; d < p; ) {
      const m = l[d++], b = l[d++];
      try {
        g = m(g);
      } catch (w) {
        b.call(this, w);
        break;
      }
    }
    try {
      c = ho.call(this, g);
    } catch (m) {
      return Promise.reject(m);
    }
    for (d = 0, p = u.length; d < p; )
      c = c.then(u[d++], u[d++]);
    return c;
  }
  getUri(t) {
    t = Wt(this.defaults, t);
    const n = ra(t.baseURL, t.url);
    return ea(n, t.params, t.paramsSerializer);
  }
}
T.forEach(["delete", "get", "head", "options"], function(t) {
  Ht.prototype[t] = function(n, i) {
    return this.request(Wt(i || {}, {
      method: t,
      url: n,
      data: (i || {}).data
    }));
  };
});
T.forEach(["post", "put", "patch"], function(t) {
  function n(i) {
    return function(r, o, l) {
      return this.request(Wt(l || {}, {
        method: t,
        headers: i ? {
          "Content-Type": "multipart/form-data"
        } : {},
        url: r,
        data: o
      }));
    };
  }
  Ht.prototype[t] = n(), Ht.prototype[t + "Form"] = n(!0);
});
class ar {
  constructor(t) {
    if (typeof t != "function")
      throw new TypeError("executor must be a function.");
    let n;
    this.promise = new Promise(function(r) {
      n = r;
    });
    const i = this;
    this.promise.then((s) => {
      if (!i._listeners) return;
      let r = i._listeners.length;
      for (; r-- > 0; )
        i._listeners[r](s);
      i._listeners = null;
    }), this.promise.then = (s) => {
      let r;
      const o = new Promise((l) => {
        i.subscribe(l), r = l;
      }).then(s);
      return o.cancel = function() {
        i.unsubscribe(r);
      }, o;
    }, t(function(r, o, l) {
      i.reason || (i.reason = new cn(r, o, l), n(i.reason));
    });
  }
  /**
   * Throws a `CanceledError` if cancellation has been requested.
   */
  throwIfRequested() {
    if (this.reason)
      throw this.reason;
  }
  /**
   * Subscribe to the cancel signal
   */
  subscribe(t) {
    if (this.reason) {
      t(this.reason);
      return;
    }
    this._listeners ? this._listeners.push(t) : this._listeners = [t];
  }
  /**
   * Unsubscribe from the cancel signal
   */
  unsubscribe(t) {
    if (!this._listeners)
      return;
    const n = this._listeners.indexOf(t);
    n !== -1 && this._listeners.splice(n, 1);
  }
  /**
   * Returns an object that contains a new `CancelToken` and a function that, when called,
   * cancels the `CancelToken`.
   */
  static source() {
    let t;
    return {
      token: new ar(function(s) {
        t = s;
      }),
      cancel: t
    };
  }
}
function Sp(e) {
  return function(n) {
    return e.apply(null, n);
  };
}
function xp(e) {
  return T.isObject(e) && e.isAxiosError === !0;
}
const Cs = {
  Continue: 100,
  SwitchingProtocols: 101,
  Processing: 102,
  EarlyHints: 103,
  Ok: 200,
  Created: 201,
  Accepted: 202,
  NonAuthoritativeInformation: 203,
  NoContent: 204,
  ResetContent: 205,
  PartialContent: 206,
  MultiStatus: 207,
  AlreadyReported: 208,
  ImUsed: 226,
  MultipleChoices: 300,
  MovedPermanently: 301,
  Found: 302,
  SeeOther: 303,
  NotModified: 304,
  UseProxy: 305,
  Unused: 306,
  TemporaryRedirect: 307,
  PermanentRedirect: 308,
  BadRequest: 400,
  Unauthorized: 401,
  PaymentRequired: 402,
  Forbidden: 403,
  NotFound: 404,
  MethodNotAllowed: 405,
  NotAcceptable: 406,
  ProxyAuthenticationRequired: 407,
  RequestTimeout: 408,
  Conflict: 409,
  Gone: 410,
  LengthRequired: 411,
  PreconditionFailed: 412,
  PayloadTooLarge: 413,
  UriTooLong: 414,
  UnsupportedMediaType: 415,
  RangeNotSatisfiable: 416,
  ExpectationFailed: 417,
  ImATeapot: 418,
  MisdirectedRequest: 421,
  UnprocessableEntity: 422,
  Locked: 423,
  FailedDependency: 424,
  TooEarly: 425,
  UpgradeRequired: 426,
  PreconditionRequired: 428,
  TooManyRequests: 429,
  RequestHeaderFieldsTooLarge: 431,
  UnavailableForLegalReasons: 451,
  InternalServerError: 500,
  NotImplemented: 501,
  BadGateway: 502,
  ServiceUnavailable: 503,
  GatewayTimeout: 504,
  HttpVersionNotSupported: 505,
  VariantAlsoNegotiates: 506,
  InsufficientStorage: 507,
  LoopDetected: 508,
  NotExtended: 510,
  NetworkAuthenticationRequired: 511
};
Object.entries(Cs).forEach(([e, t]) => {
  Cs[t] = e;
});
function da(e) {
  const t = new Ht(e), n = jl(Ht.prototype.request, t);
  return T.extend(n, Ht.prototype, t, { allOwnKeys: !0 }), T.extend(n, t, null, { allOwnKeys: !0 }), n.create = function(s) {
    return da(Wt(e, s));
  }, n;
}
const ge = da(Fn);
ge.Axios = Ht;
ge.CanceledError = cn;
ge.CancelToken = ar;
ge.isCancel = ia;
ge.VERSION = ua;
ge.toFormData = Ii;
ge.AxiosError = te;
ge.Cancel = ge.CanceledError;
ge.all = function(t) {
  return Promise.all(t);
};
ge.spread = Sp;
ge.isAxiosError = xp;
ge.mergeConfig = Wt;
ge.AxiosHeaders = Ae;
ge.formToJSON = (e) => na(T.isHTMLForm(e) ? new FormData(e) : e);
ge.getAdapter = ca.getAdapter;
ge.HttpStatusCode = Cs;
ge.default = ge;
const Tp = {
  name: "Form",
  data() {
    return {
      email: null,
      message: null,
      responseMessage: null
      // To store response messages
    };
  },
  methods: {
    submitForm() {
      const e = {
        email: this.email,
        message: this.message
      };
      ge.post("https://formspree.io/f/mnnqqdbg", e, {
        headers: {
          Accept: "application/json"
          // Ensure Formspree accepts the request
        }
      }).then((t) => {
        t.status === 200 ? (this.responseMessage = "Message sent successfully!", this.email = "", this.message = "") : this.responseMessage = "Something went wrong. Please try again.";
      }).catch((t) => {
        this.responseMessage = "Error submitting form. Please try again later.", console.error("Error submitting form:", t);
      });
    }
  }
}, Op = {
  key: 0,
  class: "response-message"
};
function Cp(e, t, n, i, s, r) {
  const o = ut("gng-form-control"), l = ut("gng-button");
  return me(), we("form", {
    class: "duper-form",
    onSubmit: t[2] || (t[2] = bd((...a) => r.submitForm && r.submitForm(...a), ["prevent"]))
  }, [
    ce(o, {
      label: "email",
      modelValue: s.email,
      "onUpdate:modelValue": t[0] || (t[0] = (a) => s.email = a),
      icon: "ko",
      placeholder: "your email"
    }, null, 8, ["modelValue"]),
    ce(o, {
      label: "message",
      modelValue: s.message,
      "onUpdate:modelValue": t[1] || (t[1] = (a) => s.message = a),
      icon: "ko",
      type: "textarea",
      placeholder: "your message"
    }, null, 8, ["modelValue"]),
    ce(l, {
      type: "submit",
      text: "submit"
    }),
    s.responseMessage ? (me(), we("div", Op, wi(s.responseMessage), 1)) : Nn("", !0)
  ], 32);
}
const Np = /* @__PURE__ */ nt(Tp, [["render", Cp]]), Pp = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Np
}, Symbol.toStringTag, { value: "Module" })), Dp = {
  name: "Image"
}, Mp = /* @__PURE__ */ Ue("img", {
  src: "https://placehold.co/600x400",
  alt: ""
}, null, -1), Ap = [
  Mp
];
function Lp(e, t, n, i, s, r) {
  return me(), we("figure", null, Ap);
}
const Ip = /* @__PURE__ */ nt(Dp, [["render", Lp]]), Rp = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Ip
}, Symbol.toStringTag, { value: "Module" })), Vp = {
  name: "Input",
  emits: ["update:modelValue"],
  inheritAttrs: !1,
  props: {
    modelValue: {
      type: [String, Boolean, Number, Array],
      default: ""
    },
    label: {
      type: String,
      default: null
    },
    type: {
      type: String,
      default: "text"
      // validator: value => ['text', 'checkbox', 'radio', 'number', 'color', 'textarea'].includes(value),
    },
    name: {
      type: String
    },
    value: {
      type: [String, Number],
      default: null
    }
  },
  computed: {
    isChecked() {
      return Array.isArray(this.modelValue) ? this.modelValue.includes(this.value) : this.modelValue === !0;
    },
    inputClasses() {
      return [`type-${this.type}`];
    }
  },
  methods: {
    ev_input(e) {
      this.$emit("update:modelValue", e.target.value);
    },
    ev_change(e) {
      const t = e.target.checked;
      if (Array.isArray(this.modelValue))
        if (t)
          console.log([...this.modelValue, this.value]), this.$emit("update:modelValue", [...this.modelValue, this.value]);
        else {
          const n = this.modelValue.filter((i) => i !== this.value);
          console.log(n), this.$emit("update:modelValue", n);
        }
      else
        this.$emit("update:modelValue", t);
    },
    ev_radio(e) {
      this.$emit("update:modelValue", e.target.value);
    }
  }
}, $p = ["for"], Fp = ["id", "value", "checked", "name"], Bp = ["id", "value", "checked", "name"], zp = ["id", "value"], kp = ["id", "type", "value", "name"];
function jp(e, t, n, i, s, r) {
  return me(), we("div", {
    class: Dt(["input-wrap", r.inputClasses])
  }, [
    Ue("label", {
      for: e.$.uid
    }, wi(n.label), 9, $p),
    n.type === "checkbox" ? (me(), we("input", en({
      key: 0,
      id: e.$.uid,
      type: "checkbox",
      value: n.value,
      checked: r.isChecked,
      name: n.name,
      onChange: t[0] || (t[0] = (...o) => r.ev_change && r.ev_change(...o))
    }, e.$attrs), null, 16, Fp)) : n.type === "radio" ? (me(), we("input", en({
      key: 1,
      id: e.$.uid,
      type: "radio",
      value: n.value,
      checked: n.value === n.modelValue,
      name: n.name,
      onChange: t[1] || (t[1] = (...o) => r.ev_radio && r.ev_radio(...o))
    }, e.$attrs), null, 16, Bp)) : n.type === "textarea" ? (me(), we("textarea", en({
      key: 2,
      id: e.$.uid,
      value: n.modelValue,
      onInput: t[2] || (t[2] = (...o) => r.ev_input && r.ev_input(...o))
    }, e.$attrs), null, 16, zp)) : (me(), we("input", en({
      key: 3,
      id: e.$.uid,
      type: n.type,
      value: n.modelValue,
      name: n.name,
      onInput: t[3] || (t[3] = (...o) => r.ev_input && r.ev_input(...o))
    }, e.$attrs), null, 16, kp))
  ], 2);
}
const Hp = /* @__PURE__ */ nt(Vp, [["render", jp]]), Gp = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Hp
}, Symbol.toStringTag, { value: "Module" })), Up = {
  name: "Progress",
  // mixins: [mixinTemplate],
  props: {
    value: {
      type: [Number, String],
      default: 20
    }
  },
  methods: {}
}, qp = ["aria-valuenow"], Wp = /* @__PURE__ */ Ue("div", null, "sfsdfdf", -1);
function Kp(e, t, n, i, s, r) {
  return me(), we("div", {
    class: "progress",
    role: "progressbar",
    "aria-valuenow": n.value,
    "aria-valuemin": "0",
    "aria-valuemax": "100"
  }, [
    Wp,
    Ue("span", {
      class: "progress__bar",
      "aria-hidden": "true",
      style: An(`--progress: ${n.value}%;`)
    }, null, 4)
  ], 8, qp);
}
const Yp = /* @__PURE__ */ nt(Up, [["render", Kp]]), Xp = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Yp
}, Symbol.toStringTag, { value: "Module" }));
function go(e) {
  return e !== null && typeof e == "object" && "constructor" in e && e.constructor === Object;
}
function cr(e, t) {
  e === void 0 && (e = {}), t === void 0 && (t = {}), Object.keys(t).forEach((n) => {
    typeof e[n] > "u" ? e[n] = t[n] : go(t[n]) && go(e[n]) && Object.keys(t[n]).length > 0 && cr(e[n], t[n]);
  });
}
const fa = {
  body: {},
  addEventListener() {
  },
  removeEventListener() {
  },
  activeElement: {
    blur() {
    },
    nodeName: ""
  },
  querySelector() {
    return null;
  },
  querySelectorAll() {
    return [];
  },
  getElementById() {
    return null;
  },
  createEvent() {
    return {
      initEvent() {
      }
    };
  },
  createElement() {
    return {
      children: [],
      childNodes: [],
      style: {},
      setAttribute() {
      },
      getElementsByTagName() {
        return [];
      }
    };
  },
  createElementNS() {
    return {};
  },
  importNode() {
    return null;
  },
  location: {
    hash: "",
    host: "",
    hostname: "",
    href: "",
    origin: "",
    pathname: "",
    protocol: "",
    search: ""
  }
};
function tt() {
  const e = typeof document < "u" ? document : {};
  return cr(e, fa), e;
}
const Jp = {
  document: fa,
  navigator: {
    userAgent: ""
  },
  location: {
    hash: "",
    host: "",
    hostname: "",
    href: "",
    origin: "",
    pathname: "",
    protocol: "",
    search: ""
  },
  history: {
    replaceState() {
    },
    pushState() {
    },
    go() {
    },
    back() {
    }
  },
  CustomEvent: function() {
    return this;
  },
  addEventListener() {
  },
  removeEventListener() {
  },
  getComputedStyle() {
    return {
      getPropertyValue() {
        return "";
      }
    };
  },
  Image() {
  },
  Date() {
  },
  screen: {},
  setTimeout() {
  },
  clearTimeout() {
  },
  matchMedia() {
    return {};
  },
  requestAnimationFrame(e) {
    return typeof setTimeout > "u" ? (e(), null) : setTimeout(e, 0);
  },
  cancelAnimationFrame(e) {
    typeof setTimeout > "u" || clearTimeout(e);
  }
};
function Le() {
  const e = typeof window < "u" ? window : {};
  return cr(e, Jp), e;
}
function vt(e) {
  return e === void 0 && (e = ""), e.trim().split(" ").filter((t) => !!t.trim());
}
function Zp(e) {
  const t = e;
  Object.keys(t).forEach((n) => {
    try {
      t[n] = null;
    } catch {
    }
    try {
      delete t[n];
    } catch {
    }
  });
}
function gi(e, t) {
  return t === void 0 && (t = 0), setTimeout(e, t);
}
function vi() {
  return Date.now();
}
function Qp(e) {
  const t = Le();
  let n;
  return t.getComputedStyle && (n = t.getComputedStyle(e, null)), !n && e.currentStyle && (n = e.currentStyle), n || (n = e.style), n;
}
function eh(e, t) {
  t === void 0 && (t = "x");
  const n = Le();
  let i, s, r;
  const o = Qp(e);
  return n.WebKitCSSMatrix ? (s = o.transform || o.webkitTransform, s.split(",").length > 6 && (s = s.split(", ").map((l) => l.replace(",", ".")).join(", ")), r = new n.WebKitCSSMatrix(s === "none" ? "" : s)) : (r = o.MozTransform || o.OTransform || o.MsTransform || o.msTransform || o.transform || o.getPropertyValue("transform").replace("translate(", "matrix(1, 0, 0, 1,"), i = r.toString().split(",")), t === "x" && (n.WebKitCSSMatrix ? s = r.m41 : i.length === 16 ? s = parseFloat(i[12]) : s = parseFloat(i[4])), t === "y" && (n.WebKitCSSMatrix ? s = r.m42 : i.length === 16 ? s = parseFloat(i[13]) : s = parseFloat(i[5])), s || 0;
}
function Wn(e) {
  return typeof e == "object" && e !== null && e.constructor && Object.prototype.toString.call(e).slice(8, -1) === "Object";
}
function th(e) {
  return typeof window < "u" && typeof window.HTMLElement < "u" ? e instanceof HTMLElement : e && (e.nodeType === 1 || e.nodeType === 11);
}
function Re() {
  const e = Object(arguments.length <= 0 ? void 0 : arguments[0]), t = ["__proto__", "constructor", "prototype"];
  for (let n = 1; n < arguments.length; n += 1) {
    const i = n < 0 || arguments.length <= n ? void 0 : arguments[n];
    if (i != null && !th(i)) {
      const s = Object.keys(Object(i)).filter((r) => t.indexOf(r) < 0);
      for (let r = 0, o = s.length; r < o; r += 1) {
        const l = s[r], a = Object.getOwnPropertyDescriptor(i, l);
        a !== void 0 && a.enumerable && (Wn(e[l]) && Wn(i[l]) ? i[l].__swiper__ ? e[l] = i[l] : Re(e[l], i[l]) : !Wn(e[l]) && Wn(i[l]) ? (e[l] = {}, i[l].__swiper__ ? e[l] = i[l] : Re(e[l], i[l])) : e[l] = i[l]);
      }
    }
  }
  return e;
}
function Kn(e, t, n) {
  e.style.setProperty(t, n);
}
function pa(e) {
  let {
    swiper: t,
    targetPosition: n,
    side: i
  } = e;
  const s = Le(), r = -t.translate;
  let o = null, l;
  const a = t.params.speed;
  t.wrapperEl.style.scrollSnapType = "none", s.cancelAnimationFrame(t.cssModeFrameID);
  const u = n > r ? "next" : "prev", c = (p, g) => u === "next" && p >= g || u === "prev" && p <= g, d = () => {
    l = (/* @__PURE__ */ new Date()).getTime(), o === null && (o = l);
    const p = Math.max(Math.min((l - o) / a, 1), 0), g = 0.5 - Math.cos(p * Math.PI) / 2;
    let m = r + g * (n - r);
    if (c(m, n) && (m = n), t.wrapperEl.scrollTo({
      [i]: m
    }), c(m, n)) {
      t.wrapperEl.style.overflow = "hidden", t.wrapperEl.style.scrollSnapType = "", setTimeout(() => {
        t.wrapperEl.style.overflow = "", t.wrapperEl.scrollTo({
          [i]: m
        });
      }), s.cancelAnimationFrame(t.cssModeFrameID);
      return;
    }
    t.cssModeFrameID = s.requestAnimationFrame(d);
  };
  d();
}
function Ze(e, t) {
  t === void 0 && (t = "");
  const n = [...e.children];
  return e instanceof HTMLSlotElement && n.push(...e.assignedElements()), t ? n.filter((i) => i.matches(t)) : n;
}
function nh(e, t) {
  const n = t.contains(e);
  return !n && t instanceof HTMLSlotElement ? [...t.assignedElements()].includes(e) : n;
}
function bi(e) {
  try {
    console.warn(e);
    return;
  } catch {
  }
}
function ln(e, t) {
  t === void 0 && (t = []);
  const n = document.createElement(e);
  return n.classList.add(...Array.isArray(t) ? t : vt(t)), n;
}
function ih(e) {
  const t = Le(), n = tt(), i = e.getBoundingClientRect(), s = n.body, r = e.clientTop || s.clientTop || 0, o = e.clientLeft || s.clientLeft || 0, l = e === t ? t.scrollY : e.scrollTop, a = e === t ? t.scrollX : e.scrollLeft;
  return {
    top: i.top + l - r,
    left: i.left + a - o
  };
}
function sh(e, t) {
  const n = [];
  for (; e.previousElementSibling; ) {
    const i = e.previousElementSibling;
    t ? i.matches(t) && n.push(i) : n.push(i), e = i;
  }
  return n;
}
function rh(e, t) {
  const n = [];
  for (; e.nextElementSibling; ) {
    const i = e.nextElementSibling;
    t ? i.matches(t) && n.push(i) : n.push(i), e = i;
  }
  return n;
}
function _t(e, t) {
  return Le().getComputedStyle(e, null).getPropertyValue(t);
}
function Dn(e) {
  let t = e, n;
  if (t) {
    for (n = 0; (t = t.previousSibling) !== null; )
      t.nodeType === 1 && (n += 1);
    return n;
  }
}
function ha(e, t) {
  const n = [];
  let i = e.parentElement;
  for (; i; )
    t ? i.matches(t) && n.push(i) : n.push(i), i = i.parentElement;
  return n;
}
function Ns(e, t, n) {
  const i = Le();
  return e[t === "width" ? "offsetWidth" : "offsetHeight"] + parseFloat(i.getComputedStyle(e, null).getPropertyValue(t === "width" ? "margin-right" : "margin-top")) + parseFloat(i.getComputedStyle(e, null).getPropertyValue(t === "width" ? "margin-left" : "margin-bottom"));
}
function ie(e) {
  return (Array.isArray(e) ? e : [e]).filter((t) => !!t);
}
let Xi;
function oh() {
  const e = Le(), t = tt();
  return {
    smoothScroll: t.documentElement && t.documentElement.style && "scrollBehavior" in t.documentElement.style,
    touch: !!("ontouchstart" in e || e.DocumentTouch && t instanceof e.DocumentTouch)
  };
}
function ma() {
  return Xi || (Xi = oh()), Xi;
}
let Ji;
function lh(e) {
  let {
    userAgent: t
  } = e === void 0 ? {} : e;
  const n = ma(), i = Le(), s = i.navigator.platform, r = t || i.navigator.userAgent, o = {
    ios: !1,
    android: !1
  }, l = i.screen.width, a = i.screen.height, u = r.match(/(Android);?[\s\/]+([\d.]+)?/);
  let c = r.match(/(iPad).*OS\s([\d_]+)/);
  const d = r.match(/(iPod)(.*OS\s([\d_]+))?/), p = !c && r.match(/(iPhone\sOS|iOS)\s([\d_]+)/), g = s === "Win32";
  let m = s === "MacIntel";
  const b = ["1024x1366", "1366x1024", "834x1194", "1194x834", "834x1112", "1112x834", "768x1024", "1024x768", "820x1180", "1180x820", "810x1080", "1080x810"];
  return !c && m && n.touch && b.indexOf(`${l}x${a}`) >= 0 && (c = r.match(/(Version)\/([\d.]+)/), c || (c = [0, 1, "13_0_0"]), m = !1), u && !g && (o.os = "android", o.android = !0), (c || p || d) && (o.os = "ios", o.ios = !0), o;
}
function ga(e) {
  return e === void 0 && (e = {}), Ji || (Ji = lh(e)), Ji;
}
let Zi;
function ah() {
  const e = Le(), t = ga();
  let n = !1;
  function i() {
    const l = e.navigator.userAgent.toLowerCase();
    return l.indexOf("safari") >= 0 && l.indexOf("chrome") < 0 && l.indexOf("android") < 0;
  }
  if (i()) {
    const l = String(e.navigator.userAgent);
    if (l.includes("Version/")) {
      const [a, u] = l.split("Version/")[1].split(" ")[0].split(".").map((c) => Number(c));
      n = a < 16 || a === 16 && u < 2;
    }
  }
  const s = /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(e.navigator.userAgent), r = i(), o = r || s && t.ios;
  return {
    isSafari: n || r,
    needPerspectiveFix: n,
    need3dFix: o,
    isWebView: s
  };
}
function ch() {
  return Zi || (Zi = ah()), Zi;
}
function uh(e) {
  let {
    swiper: t,
    on: n,
    emit: i
  } = e;
  const s = Le();
  let r = null, o = null;
  const l = () => {
    !t || t.destroyed || !t.initialized || (i("beforeResize"), i("resize"));
  }, a = () => {
    !t || t.destroyed || !t.initialized || (r = new ResizeObserver((d) => {
      o = s.requestAnimationFrame(() => {
        const {
          width: p,
          height: g
        } = t;
        let m = p, b = g;
        d.forEach((w) => {
          let {
            contentBoxSize: x,
            contentRect: v,
            target: h
          } = w;
          h && h !== t.el || (m = v ? v.width : (x[0] || x).inlineSize, b = v ? v.height : (x[0] || x).blockSize);
        }), (m !== p || b !== g) && l();
      });
    }), r.observe(t.el));
  }, u = () => {
    o && s.cancelAnimationFrame(o), r && r.unobserve && t.el && (r.unobserve(t.el), r = null);
  }, c = () => {
    !t || t.destroyed || !t.initialized || i("orientationchange");
  };
  n("init", () => {
    if (t.params.resizeObserver && typeof s.ResizeObserver < "u") {
      a();
      return;
    }
    s.addEventListener("resize", l), s.addEventListener("orientationchange", c);
  }), n("destroy", () => {
    u(), s.removeEventListener("resize", l), s.removeEventListener("orientationchange", c);
  });
}
function dh(e) {
  let {
    swiper: t,
    extendParams: n,
    on: i,
    emit: s
  } = e;
  const r = [], o = Le(), l = function(c, d) {
    d === void 0 && (d = {});
    const p = o.MutationObserver || o.WebkitMutationObserver, g = new p((m) => {
      if (t.__preventObserver__) return;
      if (m.length === 1) {
        s("observerUpdate", m[0]);
        return;
      }
      const b = function() {
        s("observerUpdate", m[0]);
      };
      o.requestAnimationFrame ? o.requestAnimationFrame(b) : o.setTimeout(b, 0);
    });
    g.observe(c, {
      attributes: typeof d.attributes > "u" ? !0 : d.attributes,
      childList: t.isElement || (typeof d.childList > "u" ? !0 : d).childList,
      characterData: typeof d.characterData > "u" ? !0 : d.characterData
    }), r.push(g);
  }, a = () => {
    if (t.params.observer) {
      if (t.params.observeParents) {
        const c = ha(t.hostEl);
        for (let d = 0; d < c.length; d += 1)
          l(c[d]);
      }
      l(t.hostEl, {
        childList: t.params.observeSlideChildren
      }), l(t.wrapperEl, {
        attributes: !1
      });
    }
  }, u = () => {
    r.forEach((c) => {
      c.disconnect();
    }), r.splice(0, r.length);
  };
  n({
    observer: !1,
    observeParents: !1,
    observeSlideChildren: !1
  }), i("init", a), i("destroy", u);
}
var fh = {
  on(e, t, n) {
    const i = this;
    if (!i.eventsListeners || i.destroyed || typeof t != "function") return i;
    const s = n ? "unshift" : "push";
    return e.split(" ").forEach((r) => {
      i.eventsListeners[r] || (i.eventsListeners[r] = []), i.eventsListeners[r][s](t);
    }), i;
  },
  once(e, t, n) {
    const i = this;
    if (!i.eventsListeners || i.destroyed || typeof t != "function") return i;
    function s() {
      i.off(e, s), s.__emitterProxy && delete s.__emitterProxy;
      for (var r = arguments.length, o = new Array(r), l = 0; l < r; l++)
        o[l] = arguments[l];
      t.apply(i, o);
    }
    return s.__emitterProxy = t, i.on(e, s, n);
  },
  onAny(e, t) {
    const n = this;
    if (!n.eventsListeners || n.destroyed || typeof e != "function") return n;
    const i = t ? "unshift" : "push";
    return n.eventsAnyListeners.indexOf(e) < 0 && n.eventsAnyListeners[i](e), n;
  },
  offAny(e) {
    const t = this;
    if (!t.eventsListeners || t.destroyed || !t.eventsAnyListeners) return t;
    const n = t.eventsAnyListeners.indexOf(e);
    return n >= 0 && t.eventsAnyListeners.splice(n, 1), t;
  },
  off(e, t) {
    const n = this;
    return !n.eventsListeners || n.destroyed || !n.eventsListeners || e.split(" ").forEach((i) => {
      typeof t > "u" ? n.eventsListeners[i] = [] : n.eventsListeners[i] && n.eventsListeners[i].forEach((s, r) => {
        (s === t || s.__emitterProxy && s.__emitterProxy === t) && n.eventsListeners[i].splice(r, 1);
      });
    }), n;
  },
  emit() {
    const e = this;
    if (!e.eventsListeners || e.destroyed || !e.eventsListeners) return e;
    let t, n, i;
    for (var s = arguments.length, r = new Array(s), o = 0; o < s; o++)
      r[o] = arguments[o];
    return typeof r[0] == "string" || Array.isArray(r[0]) ? (t = r[0], n = r.slice(1, r.length), i = e) : (t = r[0].events, n = r[0].data, i = r[0].context || e), n.unshift(i), (Array.isArray(t) ? t : t.split(" ")).forEach((a) => {
      e.eventsAnyListeners && e.eventsAnyListeners.length && e.eventsAnyListeners.forEach((u) => {
        u.apply(i, [a, ...n]);
      }), e.eventsListeners && e.eventsListeners[a] && e.eventsListeners[a].forEach((u) => {
        u.apply(i, n);
      });
    }), e;
  }
};
function ph() {
  const e = this;
  let t, n;
  const i = e.el;
  typeof e.params.width < "u" && e.params.width !== null ? t = e.params.width : t = i.clientWidth, typeof e.params.height < "u" && e.params.height !== null ? n = e.params.height : n = i.clientHeight, !(t === 0 && e.isHorizontal() || n === 0 && e.isVertical()) && (t = t - parseInt(_t(i, "padding-left") || 0, 10) - parseInt(_t(i, "padding-right") || 0, 10), n = n - parseInt(_t(i, "padding-top") || 0, 10) - parseInt(_t(i, "padding-bottom") || 0, 10), Number.isNaN(t) && (t = 0), Number.isNaN(n) && (n = 0), Object.assign(e, {
    width: t,
    height: n,
    size: e.isHorizontal() ? t : n
  }));
}
function hh() {
  const e = this;
  function t(I, G) {
    return parseFloat(I.getPropertyValue(e.getDirectionLabel(G)) || 0);
  }
  const n = e.params, {
    wrapperEl: i,
    slidesEl: s,
    size: r,
    rtlTranslate: o,
    wrongRTL: l
  } = e, a = e.virtual && n.virtual.enabled, u = a ? e.virtual.slides.length : e.slides.length, c = Ze(s, `.${e.params.slideClass}, swiper-slide`), d = a ? e.virtual.slides.length : c.length;
  let p = [];
  const g = [], m = [];
  let b = n.slidesOffsetBefore;
  typeof b == "function" && (b = n.slidesOffsetBefore.call(e));
  let w = n.slidesOffsetAfter;
  typeof w == "function" && (w = n.slidesOffsetAfter.call(e));
  const x = e.snapGrid.length, v = e.slidesGrid.length;
  let h = n.spaceBetween, S = -b, O = 0, B = 0;
  if (typeof r > "u")
    return;
  typeof h == "string" && h.indexOf("%") >= 0 ? h = parseFloat(h.replace("%", "")) / 100 * r : typeof h == "string" && (h = parseFloat(h)), e.virtualSize = -h, c.forEach((I) => {
    o ? I.style.marginLeft = "" : I.style.marginRight = "", I.style.marginBottom = "", I.style.marginTop = "";
  }), n.centeredSlides && n.cssMode && (Kn(i, "--swiper-centered-offset-before", ""), Kn(i, "--swiper-centered-offset-after", ""));
  const j = n.grid && n.grid.rows > 1 && e.grid;
  j ? e.grid.initSlides(c) : e.grid && e.grid.unsetSlides();
  let q;
  const N = n.slidesPerView === "auto" && n.breakpoints && Object.keys(n.breakpoints).filter((I) => typeof n.breakpoints[I].slidesPerView < "u").length > 0;
  for (let I = 0; I < d; I += 1) {
    q = 0;
    let G;
    if (c[I] && (G = c[I]), j && e.grid.updateSlide(I, G, c), !(c[I] && _t(G, "display") === "none")) {
      if (n.slidesPerView === "auto") {
        N && (c[I].style[e.getDirectionLabel("width")] = "");
        const A = getComputedStyle(G), L = G.style.transform, z = G.style.webkitTransform;
        if (L && (G.style.transform = "none"), z && (G.style.webkitTransform = "none"), n.roundLengths)
          q = e.isHorizontal() ? Ns(G, "width") : Ns(G, "height");
        else {
          const U = t(A, "width"), Y = t(A, "padding-left"), _ = t(A, "padding-right"), P = t(A, "margin-left"), K = t(A, "margin-right"), pe = A.getPropertyValue("box-sizing");
          if (pe && pe === "border-box")
            q = U + P + K;
          else {
            const {
              clientWidth: Ne,
              offsetWidth: Te
            } = G;
            q = U + Y + _ + P + K + (Te - Ne);
          }
        }
        L && (G.style.transform = L), z && (G.style.webkitTransform = z), n.roundLengths && (q = Math.floor(q));
      } else
        q = (r - (n.slidesPerView - 1) * h) / n.slidesPerView, n.roundLengths && (q = Math.floor(q)), c[I] && (c[I].style[e.getDirectionLabel("width")] = `${q}px`);
      c[I] && (c[I].swiperSlideSize = q), m.push(q), n.centeredSlides ? (S = S + q / 2 + O / 2 + h, O === 0 && I !== 0 && (S = S - r / 2 - h), I === 0 && (S = S - r / 2 - h), Math.abs(S) < 1 / 1e3 && (S = 0), n.roundLengths && (S = Math.floor(S)), B % n.slidesPerGroup === 0 && p.push(S), g.push(S)) : (n.roundLengths && (S = Math.floor(S)), (B - Math.min(e.params.slidesPerGroupSkip, B)) % e.params.slidesPerGroup === 0 && p.push(S), g.push(S), S = S + q + h), e.virtualSize += q + h, O = q, B += 1;
    }
  }
  if (e.virtualSize = Math.max(e.virtualSize, r) + w, o && l && (n.effect === "slide" || n.effect === "coverflow") && (i.style.width = `${e.virtualSize + h}px`), n.setWrapperSize && (i.style[e.getDirectionLabel("width")] = `${e.virtualSize + h}px`), j && e.grid.updateWrapperSize(q, p), !n.centeredSlides) {
    const I = [];
    for (let G = 0; G < p.length; G += 1) {
      let A = p[G];
      n.roundLengths && (A = Math.floor(A)), p[G] <= e.virtualSize - r && I.push(A);
    }
    p = I, Math.floor(e.virtualSize - r) - Math.floor(p[p.length - 1]) > 1 && p.push(e.virtualSize - r);
  }
  if (a && n.loop) {
    const I = m[0] + h;
    if (n.slidesPerGroup > 1) {
      const G = Math.ceil((e.virtual.slidesBefore + e.virtual.slidesAfter) / n.slidesPerGroup), A = I * n.slidesPerGroup;
      for (let L = 0; L < G; L += 1)
        p.push(p[p.length - 1] + A);
    }
    for (let G = 0; G < e.virtual.slidesBefore + e.virtual.slidesAfter; G += 1)
      n.slidesPerGroup === 1 && p.push(p[p.length - 1] + I), g.push(g[g.length - 1] + I), e.virtualSize += I;
  }
  if (p.length === 0 && (p = [0]), h !== 0) {
    const I = e.isHorizontal() && o ? "marginLeft" : e.getDirectionLabel("marginRight");
    c.filter((G, A) => !n.cssMode || n.loop ? !0 : A !== c.length - 1).forEach((G) => {
      G.style[I] = `${h}px`;
    });
  }
  if (n.centeredSlides && n.centeredSlidesBounds) {
    let I = 0;
    m.forEach((A) => {
      I += A + (h || 0);
    }), I -= h;
    const G = I > r ? I - r : 0;
    p = p.map((A) => A <= 0 ? -b : A > G ? G + w : A);
  }
  if (n.centerInsufficientSlides) {
    let I = 0;
    m.forEach((A) => {
      I += A + (h || 0);
    }), I -= h;
    const G = (n.slidesOffsetBefore || 0) + (n.slidesOffsetAfter || 0);
    if (I + G < r) {
      const A = (r - I - G) / 2;
      p.forEach((L, z) => {
        p[z] = L - A;
      }), g.forEach((L, z) => {
        g[z] = L + A;
      });
    }
  }
  if (Object.assign(e, {
    slides: c,
    snapGrid: p,
    slidesGrid: g,
    slidesSizesGrid: m
  }), n.centeredSlides && n.cssMode && !n.centeredSlidesBounds) {
    Kn(i, "--swiper-centered-offset-before", `${-p[0]}px`), Kn(i, "--swiper-centered-offset-after", `${e.size / 2 - m[m.length - 1] / 2}px`);
    const I = -e.snapGrid[0], G = -e.slidesGrid[0];
    e.snapGrid = e.snapGrid.map((A) => A + I), e.slidesGrid = e.slidesGrid.map((A) => A + G);
  }
  if (d !== u && e.emit("slidesLengthChange"), p.length !== x && (e.params.watchOverflow && e.checkOverflow(), e.emit("snapGridLengthChange")), g.length !== v && e.emit("slidesGridLengthChange"), n.watchSlidesProgress && e.updateSlidesOffset(), e.emit("slidesUpdated"), !a && !n.cssMode && (n.effect === "slide" || n.effect === "fade")) {
    const I = `${n.containerModifierClass}backface-hidden`, G = e.el.classList.contains(I);
    d <= n.maxBackfaceHiddenSlides ? G || e.el.classList.add(I) : G && e.el.classList.remove(I);
  }
}
function mh(e) {
  const t = this, n = [], i = t.virtual && t.params.virtual.enabled;
  let s = 0, r;
  typeof e == "number" ? t.setTransition(e) : e === !0 && t.setTransition(t.params.speed);
  const o = (l) => i ? t.slides[t.getSlideIndexByData(l)] : t.slides[l];
  if (t.params.slidesPerView !== "auto" && t.params.slidesPerView > 1)
    if (t.params.centeredSlides)
      (t.visibleSlides || []).forEach((l) => {
        n.push(l);
      });
    else
      for (r = 0; r < Math.ceil(t.params.slidesPerView); r += 1) {
        const l = t.activeIndex + r;
        if (l > t.slides.length && !i) break;
        n.push(o(l));
      }
  else
    n.push(o(t.activeIndex));
  for (r = 0; r < n.length; r += 1)
    if (typeof n[r] < "u") {
      const l = n[r].offsetHeight;
      s = l > s ? l : s;
    }
  (s || s === 0) && (t.wrapperEl.style.height = `${s}px`);
}
function gh() {
  const e = this, t = e.slides, n = e.isElement ? e.isHorizontal() ? e.wrapperEl.offsetLeft : e.wrapperEl.offsetTop : 0;
  for (let i = 0; i < t.length; i += 1)
    t[i].swiperSlideOffset = (e.isHorizontal() ? t[i].offsetLeft : t[i].offsetTop) - n - e.cssOverflowAdjustment();
}
const vo = (e, t, n) => {
  t && !e.classList.contains(n) ? e.classList.add(n) : !t && e.classList.contains(n) && e.classList.remove(n);
};
function vh(e) {
  e === void 0 && (e = this && this.translate || 0);
  const t = this, n = t.params, {
    slides: i,
    rtlTranslate: s,
    snapGrid: r
  } = t;
  if (i.length === 0) return;
  typeof i[0].swiperSlideOffset > "u" && t.updateSlidesOffset();
  let o = -e;
  s && (o = e), t.visibleSlidesIndexes = [], t.visibleSlides = [];
  let l = n.spaceBetween;
  typeof l == "string" && l.indexOf("%") >= 0 ? l = parseFloat(l.replace("%", "")) / 100 * t.size : typeof l == "string" && (l = parseFloat(l));
  for (let a = 0; a < i.length; a += 1) {
    const u = i[a];
    let c = u.swiperSlideOffset;
    n.cssMode && n.centeredSlides && (c -= i[0].swiperSlideOffset);
    const d = (o + (n.centeredSlides ? t.minTranslate() : 0) - c) / (u.swiperSlideSize + l), p = (o - r[0] + (n.centeredSlides ? t.minTranslate() : 0) - c) / (u.swiperSlideSize + l), g = -(o - c), m = g + t.slidesSizesGrid[a], b = g >= 0 && g <= t.size - t.slidesSizesGrid[a], w = g >= 0 && g < t.size - 1 || m > 1 && m <= t.size || g <= 0 && m >= t.size;
    w && (t.visibleSlides.push(u), t.visibleSlidesIndexes.push(a)), vo(u, w, n.slideVisibleClass), vo(u, b, n.slideFullyVisibleClass), u.progress = s ? -d : d, u.originalProgress = s ? -p : p;
  }
}
function bh(e) {
  const t = this;
  if (typeof e > "u") {
    const c = t.rtlTranslate ? -1 : 1;
    e = t && t.translate && t.translate * c || 0;
  }
  const n = t.params, i = t.maxTranslate() - t.minTranslate();
  let {
    progress: s,
    isBeginning: r,
    isEnd: o,
    progressLoop: l
  } = t;
  const a = r, u = o;
  if (i === 0)
    s = 0, r = !0, o = !0;
  else {
    s = (e - t.minTranslate()) / i;
    const c = Math.abs(e - t.minTranslate()) < 1, d = Math.abs(e - t.maxTranslate()) < 1;
    r = c || s <= 0, o = d || s >= 1, c && (s = 0), d && (s = 1);
  }
  if (n.loop) {
    const c = t.getSlideIndexByData(0), d = t.getSlideIndexByData(t.slides.length - 1), p = t.slidesGrid[c], g = t.slidesGrid[d], m = t.slidesGrid[t.slidesGrid.length - 1], b = Math.abs(e);
    b >= p ? l = (b - p) / m : l = (b + m - g) / m, l > 1 && (l -= 1);
  }
  Object.assign(t, {
    progress: s,
    progressLoop: l,
    isBeginning: r,
    isEnd: o
  }), (n.watchSlidesProgress || n.centeredSlides && n.autoHeight) && t.updateSlidesProgress(e), r && !a && t.emit("reachBeginning toEdge"), o && !u && t.emit("reachEnd toEdge"), (a && !r || u && !o) && t.emit("fromEdge"), t.emit("progress", s);
}
const Qi = (e, t, n) => {
  t && !e.classList.contains(n) ? e.classList.add(n) : !t && e.classList.contains(n) && e.classList.remove(n);
};
function yh() {
  const e = this, {
    slides: t,
    params: n,
    slidesEl: i,
    activeIndex: s
  } = e, r = e.virtual && n.virtual.enabled, o = e.grid && n.grid && n.grid.rows > 1, l = (d) => Ze(i, `.${n.slideClass}${d}, swiper-slide${d}`)[0];
  let a, u, c;
  if (r)
    if (n.loop) {
      let d = s - e.virtual.slidesBefore;
      d < 0 && (d = e.virtual.slides.length + d), d >= e.virtual.slides.length && (d -= e.virtual.slides.length), a = l(`[data-swiper-slide-index="${d}"]`);
    } else
      a = l(`[data-swiper-slide-index="${s}"]`);
  else
    o ? (a = t.filter((d) => d.column === s)[0], c = t.filter((d) => d.column === s + 1)[0], u = t.filter((d) => d.column === s - 1)[0]) : a = t[s];
  a && (o || (c = rh(a, `.${n.slideClass}, swiper-slide`)[0], n.loop && !c && (c = t[0]), u = sh(a, `.${n.slideClass}, swiper-slide`)[0], n.loop && !u === 0 && (u = t[t.length - 1]))), t.forEach((d) => {
    Qi(d, d === a, n.slideActiveClass), Qi(d, d === c, n.slideNextClass), Qi(d, d === u, n.slidePrevClass);
  }), e.emitSlidesClasses();
}
const oi = (e, t) => {
  if (!e || e.destroyed || !e.params) return;
  const n = () => e.isElement ? "swiper-slide" : `.${e.params.slideClass}`, i = t.closest(n());
  if (i) {
    let s = i.querySelector(`.${e.params.lazyPreloaderClass}`);
    !s && e.isElement && (i.shadowRoot ? s = i.shadowRoot.querySelector(`.${e.params.lazyPreloaderClass}`) : requestAnimationFrame(() => {
      i.shadowRoot && (s = i.shadowRoot.querySelector(`.${e.params.lazyPreloaderClass}`), s && s.remove());
    })), s && s.remove();
  }
}, es = (e, t) => {
  if (!e.slides[t]) return;
  const n = e.slides[t].querySelector('[loading="lazy"]');
  n && n.removeAttribute("loading");
}, Ps = (e) => {
  if (!e || e.destroyed || !e.params) return;
  let t = e.params.lazyPreloadPrevNext;
  const n = e.slides.length;
  if (!n || !t || t < 0) return;
  t = Math.min(t, n);
  const i = e.params.slidesPerView === "auto" ? e.slidesPerViewDynamic() : Math.ceil(e.params.slidesPerView), s = e.activeIndex;
  if (e.params.grid && e.params.grid.rows > 1) {
    const o = s, l = [o - t];
    l.push(...Array.from({
      length: t
    }).map((a, u) => o + i + u)), e.slides.forEach((a, u) => {
      l.includes(a.column) && es(e, u);
    });
    return;
  }
  const r = s + i - 1;
  if (e.params.rewind || e.params.loop)
    for (let o = s - t; o <= r + t; o += 1) {
      const l = (o % n + n) % n;
      (l < s || l > r) && es(e, l);
    }
  else
    for (let o = Math.max(s - t, 0); o <= Math.min(r + t, n - 1); o += 1)
      o !== s && (o > r || o < s) && es(e, o);
};
function Eh(e) {
  const {
    slidesGrid: t,
    params: n
  } = e, i = e.rtlTranslate ? e.translate : -e.translate;
  let s;
  for (let r = 0; r < t.length; r += 1)
    typeof t[r + 1] < "u" ? i >= t[r] && i < t[r + 1] - (t[r + 1] - t[r]) / 2 ? s = r : i >= t[r] && i < t[r + 1] && (s = r + 1) : i >= t[r] && (s = r);
  return n.normalizeSlideIndex && (s < 0 || typeof s > "u") && (s = 0), s;
}
function wh(e) {
  const t = this, n = t.rtlTranslate ? t.translate : -t.translate, {
    snapGrid: i,
    params: s,
    activeIndex: r,
    realIndex: o,
    snapIndex: l
  } = t;
  let a = e, u;
  const c = (g) => {
    let m = g - t.virtual.slidesBefore;
    return m < 0 && (m = t.virtual.slides.length + m), m >= t.virtual.slides.length && (m -= t.virtual.slides.length), m;
  };
  if (typeof a > "u" && (a = Eh(t)), i.indexOf(n) >= 0)
    u = i.indexOf(n);
  else {
    const g = Math.min(s.slidesPerGroupSkip, a);
    u = g + Math.floor((a - g) / s.slidesPerGroup);
  }
  if (u >= i.length && (u = i.length - 1), a === r && !t.params.loop) {
    u !== l && (t.snapIndex = u, t.emit("snapIndexChange"));
    return;
  }
  if (a === r && t.params.loop && t.virtual && t.params.virtual.enabled) {
    t.realIndex = c(a);
    return;
  }
  const d = t.grid && s.grid && s.grid.rows > 1;
  let p;
  if (t.virtual && s.virtual.enabled && s.loop)
    p = c(a);
  else if (d) {
    const g = t.slides.filter((b) => b.column === a)[0];
    let m = parseInt(g.getAttribute("data-swiper-slide-index"), 10);
    Number.isNaN(m) && (m = Math.max(t.slides.indexOf(g), 0)), p = Math.floor(m / s.grid.rows);
  } else if (t.slides[a]) {
    const g = t.slides[a].getAttribute("data-swiper-slide-index");
    g ? p = parseInt(g, 10) : p = a;
  } else
    p = a;
  Object.assign(t, {
    previousSnapIndex: l,
    snapIndex: u,
    previousRealIndex: o,
    realIndex: p,
    previousIndex: r,
    activeIndex: a
  }), t.initialized && Ps(t), t.emit("activeIndexChange"), t.emit("snapIndexChange"), (t.initialized || t.params.runCallbacksOnInit) && (o !== p && t.emit("realIndexChange"), t.emit("slideChange"));
}
function _h(e, t) {
  const n = this, i = n.params;
  let s = e.closest(`.${i.slideClass}, swiper-slide`);
  !s && n.isElement && t && t.length > 1 && t.includes(e) && [...t.slice(t.indexOf(e) + 1, t.length)].forEach((l) => {
    !s && l.matches && l.matches(`.${i.slideClass}, swiper-slide`) && (s = l);
  });
  let r = !1, o;
  if (s) {
    for (let l = 0; l < n.slides.length; l += 1)
      if (n.slides[l] === s) {
        r = !0, o = l;
        break;
      }
  }
  if (s && r)
    n.clickedSlide = s, n.virtual && n.params.virtual.enabled ? n.clickedIndex = parseInt(s.getAttribute("data-swiper-slide-index"), 10) : n.clickedIndex = o;
  else {
    n.clickedSlide = void 0, n.clickedIndex = void 0;
    return;
  }
  i.slideToClickedSlide && n.clickedIndex !== void 0 && n.clickedIndex !== n.activeIndex && n.slideToClickedSlide();
}
var Sh = {
  updateSize: ph,
  updateSlides: hh,
  updateAutoHeight: mh,
  updateSlidesOffset: gh,
  updateSlidesProgress: vh,
  updateProgress: bh,
  updateSlidesClasses: yh,
  updateActiveIndex: wh,
  updateClickedSlide: _h
};
function xh(e) {
  e === void 0 && (e = this.isHorizontal() ? "x" : "y");
  const t = this, {
    params: n,
    rtlTranslate: i,
    translate: s,
    wrapperEl: r
  } = t;
  if (n.virtualTranslate)
    return i ? -s : s;
  if (n.cssMode)
    return s;
  let o = eh(r, e);
  return o += t.cssOverflowAdjustment(), i && (o = -o), o || 0;
}
function Th(e, t) {
  const n = this, {
    rtlTranslate: i,
    params: s,
    wrapperEl: r,
    progress: o
  } = n;
  let l = 0, a = 0;
  const u = 0;
  n.isHorizontal() ? l = i ? -e : e : a = e, s.roundLengths && (l = Math.floor(l), a = Math.floor(a)), n.previousTranslate = n.translate, n.translate = n.isHorizontal() ? l : a, s.cssMode ? r[n.isHorizontal() ? "scrollLeft" : "scrollTop"] = n.isHorizontal() ? -l : -a : s.virtualTranslate || (n.isHorizontal() ? l -= n.cssOverflowAdjustment() : a -= n.cssOverflowAdjustment(), r.style.transform = `translate3d(${l}px, ${a}px, ${u}px)`);
  let c;
  const d = n.maxTranslate() - n.minTranslate();
  d === 0 ? c = 0 : c = (e - n.minTranslate()) / d, c !== o && n.updateProgress(e), n.emit("setTranslate", n.translate, t);
}
function Oh() {
  return -this.snapGrid[0];
}
function Ch() {
  return -this.snapGrid[this.snapGrid.length - 1];
}
function Nh(e, t, n, i, s) {
  e === void 0 && (e = 0), t === void 0 && (t = this.params.speed), n === void 0 && (n = !0), i === void 0 && (i = !0);
  const r = this, {
    params: o,
    wrapperEl: l
  } = r;
  if (r.animating && o.preventInteractionOnTransition)
    return !1;
  const a = r.minTranslate(), u = r.maxTranslate();
  let c;
  if (i && e > a ? c = a : i && e < u ? c = u : c = e, r.updateProgress(c), o.cssMode) {
    const d = r.isHorizontal();
    if (t === 0)
      l[d ? "scrollLeft" : "scrollTop"] = -c;
    else {
      if (!r.support.smoothScroll)
        return pa({
          swiper: r,
          targetPosition: -c,
          side: d ? "left" : "top"
        }), !0;
      l.scrollTo({
        [d ? "left" : "top"]: -c,
        behavior: "smooth"
      });
    }
    return !0;
  }
  return t === 0 ? (r.setTransition(0), r.setTranslate(c), n && (r.emit("beforeTransitionStart", t, s), r.emit("transitionEnd"))) : (r.setTransition(t), r.setTranslate(c), n && (r.emit("beforeTransitionStart", t, s), r.emit("transitionStart")), r.animating || (r.animating = !0, r.onTranslateToWrapperTransitionEnd || (r.onTranslateToWrapperTransitionEnd = function(p) {
    !r || r.destroyed || p.target === this && (r.wrapperEl.removeEventListener("transitionend", r.onTranslateToWrapperTransitionEnd), r.onTranslateToWrapperTransitionEnd = null, delete r.onTranslateToWrapperTransitionEnd, r.animating = !1, n && r.emit("transitionEnd"));
  }), r.wrapperEl.addEventListener("transitionend", r.onTranslateToWrapperTransitionEnd))), !0;
}
var Ph = {
  getTranslate: xh,
  setTranslate: Th,
  minTranslate: Oh,
  maxTranslate: Ch,
  translateTo: Nh
};
function Dh(e, t) {
  const n = this;
  n.params.cssMode || (n.wrapperEl.style.transitionDuration = `${e}ms`, n.wrapperEl.style.transitionDelay = e === 0 ? "0ms" : ""), n.emit("setTransition", e, t);
}
function va(e) {
  let {
    swiper: t,
    runCallbacks: n,
    direction: i,
    step: s
  } = e;
  const {
    activeIndex: r,
    previousIndex: o
  } = t;
  let l = i;
  if (l || (r > o ? l = "next" : r < o ? l = "prev" : l = "reset"), t.emit(`transition${s}`), n && r !== o) {
    if (l === "reset") {
      t.emit(`slideResetTransition${s}`);
      return;
    }
    t.emit(`slideChangeTransition${s}`), l === "next" ? t.emit(`slideNextTransition${s}`) : t.emit(`slidePrevTransition${s}`);
  }
}
function Mh(e, t) {
  e === void 0 && (e = !0);
  const n = this, {
    params: i
  } = n;
  i.cssMode || (i.autoHeight && n.updateAutoHeight(), va({
    swiper: n,
    runCallbacks: e,
    direction: t,
    step: "Start"
  }));
}
function Ah(e, t) {
  e === void 0 && (e = !0);
  const n = this, {
    params: i
  } = n;
  n.animating = !1, !i.cssMode && (n.setTransition(0), va({
    swiper: n,
    runCallbacks: e,
    direction: t,
    step: "End"
  }));
}
var Lh = {
  setTransition: Dh,
  transitionStart: Mh,
  transitionEnd: Ah
};
function Ih(e, t, n, i, s) {
  e === void 0 && (e = 0), n === void 0 && (n = !0), typeof e == "string" && (e = parseInt(e, 10));
  const r = this;
  let o = e;
  o < 0 && (o = 0);
  const {
    params: l,
    snapGrid: a,
    slidesGrid: u,
    previousIndex: c,
    activeIndex: d,
    rtlTranslate: p,
    wrapperEl: g,
    enabled: m
  } = r;
  if (!m && !i && !s || r.destroyed || r.animating && l.preventInteractionOnTransition)
    return !1;
  typeof t > "u" && (t = r.params.speed);
  const b = Math.min(r.params.slidesPerGroupSkip, o);
  let w = b + Math.floor((o - b) / r.params.slidesPerGroup);
  w >= a.length && (w = a.length - 1);
  const x = -a[w];
  if (l.normalizeSlideIndex)
    for (let O = 0; O < u.length; O += 1) {
      const B = -Math.floor(x * 100), j = Math.floor(u[O] * 100), q = Math.floor(u[O + 1] * 100);
      typeof u[O + 1] < "u" ? B >= j && B < q - (q - j) / 2 ? o = O : B >= j && B < q && (o = O + 1) : B >= j && (o = O);
    }
  if (r.initialized && o !== d && (!r.allowSlideNext && (p ? x > r.translate && x > r.minTranslate() : x < r.translate && x < r.minTranslate()) || !r.allowSlidePrev && x > r.translate && x > r.maxTranslate() && (d || 0) !== o))
    return !1;
  o !== (c || 0) && n && r.emit("beforeSlideChangeStart"), r.updateProgress(x);
  let v;
  o > d ? v = "next" : o < d ? v = "prev" : v = "reset";
  const h = r.virtual && r.params.virtual.enabled;
  if (!(h && s) && (p && -x === r.translate || !p && x === r.translate))
    return r.updateActiveIndex(o), l.autoHeight && r.updateAutoHeight(), r.updateSlidesClasses(), l.effect !== "slide" && r.setTranslate(x), v !== "reset" && (r.transitionStart(n, v), r.transitionEnd(n, v)), !1;
  if (l.cssMode) {
    const O = r.isHorizontal(), B = p ? x : -x;
    if (t === 0)
      h && (r.wrapperEl.style.scrollSnapType = "none", r._immediateVirtual = !0), h && !r._cssModeVirtualInitialSet && r.params.initialSlide > 0 ? (r._cssModeVirtualInitialSet = !0, requestAnimationFrame(() => {
        g[O ? "scrollLeft" : "scrollTop"] = B;
      })) : g[O ? "scrollLeft" : "scrollTop"] = B, h && requestAnimationFrame(() => {
        r.wrapperEl.style.scrollSnapType = "", r._immediateVirtual = !1;
      });
    else {
      if (!r.support.smoothScroll)
        return pa({
          swiper: r,
          targetPosition: B,
          side: O ? "left" : "top"
        }), !0;
      g.scrollTo({
        [O ? "left" : "top"]: B,
        behavior: "smooth"
      });
    }
    return !0;
  }
  return r.setTransition(t), r.setTranslate(x), r.updateActiveIndex(o), r.updateSlidesClasses(), r.emit("beforeTransitionStart", t, i), r.transitionStart(n, v), t === 0 ? r.transitionEnd(n, v) : r.animating || (r.animating = !0, r.onSlideToWrapperTransitionEnd || (r.onSlideToWrapperTransitionEnd = function(B) {
    !r || r.destroyed || B.target === this && (r.wrapperEl.removeEventListener("transitionend", r.onSlideToWrapperTransitionEnd), r.onSlideToWrapperTransitionEnd = null, delete r.onSlideToWrapperTransitionEnd, r.transitionEnd(n, v));
  }), r.wrapperEl.addEventListener("transitionend", r.onSlideToWrapperTransitionEnd)), !0;
}
function Rh(e, t, n, i) {
  e === void 0 && (e = 0), n === void 0 && (n = !0), typeof e == "string" && (e = parseInt(e, 10));
  const s = this;
  if (s.destroyed) return;
  typeof t > "u" && (t = s.params.speed);
  const r = s.grid && s.params.grid && s.params.grid.rows > 1;
  let o = e;
  if (s.params.loop)
    if (s.virtual && s.params.virtual.enabled)
      o = o + s.virtual.slidesBefore;
    else {
      let l;
      if (r) {
        const p = o * s.params.grid.rows;
        l = s.slides.filter((g) => g.getAttribute("data-swiper-slide-index") * 1 === p)[0].column;
      } else
        l = s.getSlideIndexByData(o);
      const a = r ? Math.ceil(s.slides.length / s.params.grid.rows) : s.slides.length, {
        centeredSlides: u
      } = s.params;
      let c = s.params.slidesPerView;
      c === "auto" ? c = s.slidesPerViewDynamic() : (c = Math.ceil(parseFloat(s.params.slidesPerView, 10)), u && c % 2 === 0 && (c = c + 1));
      let d = a - l < c;
      if (u && (d = d || l < Math.ceil(c / 2)), i && u && s.params.slidesPerView !== "auto" && !r && (d = !1), d) {
        const p = u ? l < s.activeIndex ? "prev" : "next" : l - s.activeIndex - 1 < s.params.slidesPerView ? "next" : "prev";
        s.loopFix({
          direction: p,
          slideTo: !0,
          activeSlideIndex: p === "next" ? l + 1 : l - a + 1,
          slideRealIndex: p === "next" ? s.realIndex : void 0
        });
      }
      if (r) {
        const p = o * s.params.grid.rows;
        o = s.slides.filter((g) => g.getAttribute("data-swiper-slide-index") * 1 === p)[0].column;
      } else
        o = s.getSlideIndexByData(o);
    }
  return requestAnimationFrame(() => {
    s.slideTo(o, t, n, i);
  }), s;
}
function Vh(e, t, n) {
  t === void 0 && (t = !0);
  const i = this, {
    enabled: s,
    params: r,
    animating: o
  } = i;
  if (!s || i.destroyed) return i;
  typeof e > "u" && (e = i.params.speed);
  let l = r.slidesPerGroup;
  r.slidesPerView === "auto" && r.slidesPerGroup === 1 && r.slidesPerGroupAuto && (l = Math.max(i.slidesPerViewDynamic("current", !0), 1));
  const a = i.activeIndex < r.slidesPerGroupSkip ? 1 : l, u = i.virtual && r.virtual.enabled;
  if (r.loop) {
    if (o && !u && r.loopPreventsSliding) return !1;
    if (i.loopFix({
      direction: "next"
    }), i._clientLeft = i.wrapperEl.clientLeft, i.activeIndex === i.slides.length - 1 && r.cssMode)
      return requestAnimationFrame(() => {
        i.slideTo(i.activeIndex + a, e, t, n);
      }), !0;
  }
  return r.rewind && i.isEnd ? i.slideTo(0, e, t, n) : i.slideTo(i.activeIndex + a, e, t, n);
}
function $h(e, t, n) {
  t === void 0 && (t = !0);
  const i = this, {
    params: s,
    snapGrid: r,
    slidesGrid: o,
    rtlTranslate: l,
    enabled: a,
    animating: u
  } = i;
  if (!a || i.destroyed) return i;
  typeof e > "u" && (e = i.params.speed);
  const c = i.virtual && s.virtual.enabled;
  if (s.loop) {
    if (u && !c && s.loopPreventsSliding) return !1;
    i.loopFix({
      direction: "prev"
    }), i._clientLeft = i.wrapperEl.clientLeft;
  }
  const d = l ? i.translate : -i.translate;
  function p(x) {
    return x < 0 ? -Math.floor(Math.abs(x)) : Math.floor(x);
  }
  const g = p(d), m = r.map((x) => p(x));
  let b = r[m.indexOf(g) - 1];
  if (typeof b > "u" && s.cssMode) {
    let x;
    r.forEach((v, h) => {
      g >= v && (x = h);
    }), typeof x < "u" && (b = r[x > 0 ? x - 1 : x]);
  }
  let w = 0;
  if (typeof b < "u" && (w = o.indexOf(b), w < 0 && (w = i.activeIndex - 1), s.slidesPerView === "auto" && s.slidesPerGroup === 1 && s.slidesPerGroupAuto && (w = w - i.slidesPerViewDynamic("previous", !0) + 1, w = Math.max(w, 0))), s.rewind && i.isBeginning) {
    const x = i.params.virtual && i.params.virtual.enabled && i.virtual ? i.virtual.slides.length - 1 : i.slides.length - 1;
    return i.slideTo(x, e, t, n);
  } else if (s.loop && i.activeIndex === 0 && s.cssMode)
    return requestAnimationFrame(() => {
      i.slideTo(w, e, t, n);
    }), !0;
  return i.slideTo(w, e, t, n);
}
function Fh(e, t, n) {
  t === void 0 && (t = !0);
  const i = this;
  if (!i.destroyed)
    return typeof e > "u" && (e = i.params.speed), i.slideTo(i.activeIndex, e, t, n);
}
function Bh(e, t, n, i) {
  t === void 0 && (t = !0), i === void 0 && (i = 0.5);
  const s = this;
  if (s.destroyed) return;
  typeof e > "u" && (e = s.params.speed);
  let r = s.activeIndex;
  const o = Math.min(s.params.slidesPerGroupSkip, r), l = o + Math.floor((r - o) / s.params.slidesPerGroup), a = s.rtlTranslate ? s.translate : -s.translate;
  if (a >= s.snapGrid[l]) {
    const u = s.snapGrid[l], c = s.snapGrid[l + 1];
    a - u > (c - u) * i && (r += s.params.slidesPerGroup);
  } else {
    const u = s.snapGrid[l - 1], c = s.snapGrid[l];
    a - u <= (c - u) * i && (r -= s.params.slidesPerGroup);
  }
  return r = Math.max(r, 0), r = Math.min(r, s.slidesGrid.length - 1), s.slideTo(r, e, t, n);
}
function zh() {
  const e = this;
  if (e.destroyed) return;
  const {
    params: t,
    slidesEl: n
  } = e, i = t.slidesPerView === "auto" ? e.slidesPerViewDynamic() : t.slidesPerView;
  let s = e.clickedIndex, r;
  const o = e.isElement ? "swiper-slide" : `.${t.slideClass}`;
  if (t.loop) {
    if (e.animating) return;
    r = parseInt(e.clickedSlide.getAttribute("data-swiper-slide-index"), 10), t.centeredSlides ? s < e.loopedSlides - i / 2 || s > e.slides.length - e.loopedSlides + i / 2 ? (e.loopFix(), s = e.getSlideIndex(Ze(n, `${o}[data-swiper-slide-index="${r}"]`)[0]), gi(() => {
      e.slideTo(s);
    })) : e.slideTo(s) : s > e.slides.length - i ? (e.loopFix(), s = e.getSlideIndex(Ze(n, `${o}[data-swiper-slide-index="${r}"]`)[0]), gi(() => {
      e.slideTo(s);
    })) : e.slideTo(s);
  } else
    e.slideTo(s);
}
var kh = {
  slideTo: Ih,
  slideToLoop: Rh,
  slideNext: Vh,
  slidePrev: $h,
  slideReset: Fh,
  slideToClosest: Bh,
  slideToClickedSlide: zh
};
function jh(e) {
  const t = this, {
    params: n,
    slidesEl: i
  } = t;
  if (!n.loop || t.virtual && t.params.virtual.enabled) return;
  const s = () => {
    Ze(i, `.${n.slideClass}, swiper-slide`).forEach((d, p) => {
      d.setAttribute("data-swiper-slide-index", p);
    });
  }, r = t.grid && n.grid && n.grid.rows > 1, o = n.slidesPerGroup * (r ? n.grid.rows : 1), l = t.slides.length % o !== 0, a = r && t.slides.length % n.grid.rows !== 0, u = (c) => {
    for (let d = 0; d < c; d += 1) {
      const p = t.isElement ? ln("swiper-slide", [n.slideBlankClass]) : ln("div", [n.slideClass, n.slideBlankClass]);
      t.slidesEl.append(p);
    }
  };
  if (l) {
    if (n.loopAddBlankSlides) {
      const c = o - t.slides.length % o;
      u(c), t.recalcSlides(), t.updateSlides();
    } else
      bi("Swiper Loop Warning: The number of slides is not even to slidesPerGroup, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)");
    s();
  } else if (a) {
    if (n.loopAddBlankSlides) {
      const c = n.grid.rows - t.slides.length % n.grid.rows;
      u(c), t.recalcSlides(), t.updateSlides();
    } else
      bi("Swiper Loop Warning: The number of slides is not even to grid.rows, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)");
    s();
  } else
    s();
  t.loopFix({
    slideRealIndex: e,
    direction: n.centeredSlides ? void 0 : "next"
  });
}
function Hh(e) {
  let {
    slideRealIndex: t,
    slideTo: n = !0,
    direction: i,
    setTranslate: s,
    activeSlideIndex: r,
    byController: o,
    byMousewheel: l
  } = e === void 0 ? {} : e;
  const a = this;
  if (!a.params.loop) return;
  a.emit("beforeLoopFix");
  const {
    slides: u,
    allowSlidePrev: c,
    allowSlideNext: d,
    slidesEl: p,
    params: g
  } = a, {
    centeredSlides: m
  } = g;
  if (a.allowSlidePrev = !0, a.allowSlideNext = !0, a.virtual && g.virtual.enabled) {
    n && (!g.centeredSlides && a.snapIndex === 0 ? a.slideTo(a.virtual.slides.length, 0, !1, !0) : g.centeredSlides && a.snapIndex < g.slidesPerView ? a.slideTo(a.virtual.slides.length + a.snapIndex, 0, !1, !0) : a.snapIndex === a.snapGrid.length - 1 && a.slideTo(a.virtual.slidesBefore, 0, !1, !0)), a.allowSlidePrev = c, a.allowSlideNext = d, a.emit("loopFix");
    return;
  }
  let b = g.slidesPerView;
  b === "auto" ? b = a.slidesPerViewDynamic() : (b = Math.ceil(parseFloat(g.slidesPerView, 10)), m && b % 2 === 0 && (b = b + 1));
  const w = g.slidesPerGroupAuto ? b : g.slidesPerGroup;
  let x = w;
  x % w !== 0 && (x += w - x % w), x += g.loopAdditionalSlides, a.loopedSlides = x;
  const v = a.grid && g.grid && g.grid.rows > 1;
  u.length < b + x ? bi("Swiper Loop Warning: The number of slides is not enough for loop mode, it will be disabled and not function properly. You need to add more slides (or make duplicates) or lower the values of slidesPerView and slidesPerGroup parameters") : v && g.grid.fill === "row" && bi("Swiper Loop Warning: Loop mode is not compatible with grid.fill = `row`");
  const h = [], S = [];
  let O = a.activeIndex;
  typeof r > "u" ? r = a.getSlideIndex(u.filter((L) => L.classList.contains(g.slideActiveClass))[0]) : O = r;
  const B = i === "next" || !i, j = i === "prev" || !i;
  let q = 0, N = 0;
  const I = v ? Math.ceil(u.length / g.grid.rows) : u.length, A = (v ? u[r].column : r) + (m && typeof s > "u" ? -b / 2 + 0.5 : 0);
  if (A < x) {
    q = Math.max(x - A, w);
    for (let L = 0; L < x - A; L += 1) {
      const z = L - Math.floor(L / I) * I;
      if (v) {
        const U = I - z - 1;
        for (let Y = u.length - 1; Y >= 0; Y -= 1)
          u[Y].column === U && h.push(Y);
      } else
        h.push(I - z - 1);
    }
  } else if (A + b > I - x) {
    N = Math.max(A - (I - x * 2), w);
    for (let L = 0; L < N; L += 1) {
      const z = L - Math.floor(L / I) * I;
      v ? u.forEach((U, Y) => {
        U.column === z && S.push(Y);
      }) : S.push(z);
    }
  }
  if (a.__preventObserver__ = !0, requestAnimationFrame(() => {
    a.__preventObserver__ = !1;
  }), j && h.forEach((L) => {
    u[L].swiperLoopMoveDOM = !0, p.prepend(u[L]), u[L].swiperLoopMoveDOM = !1;
  }), B && S.forEach((L) => {
    u[L].swiperLoopMoveDOM = !0, p.append(u[L]), u[L].swiperLoopMoveDOM = !1;
  }), a.recalcSlides(), g.slidesPerView === "auto" ? a.updateSlides() : v && (h.length > 0 && j || S.length > 0 && B) && a.slides.forEach((L, z) => {
    a.grid.updateSlide(z, L, a.slides);
  }), g.watchSlidesProgress && a.updateSlidesOffset(), n) {
    if (h.length > 0 && j) {
      if (typeof t > "u") {
        const L = a.slidesGrid[O], U = a.slidesGrid[O + q] - L;
        l ? a.setTranslate(a.translate - U) : (a.slideTo(O + Math.ceil(q), 0, !1, !0), s && (a.touchEventsData.startTranslate = a.touchEventsData.startTranslate - U, a.touchEventsData.currentTranslate = a.touchEventsData.currentTranslate - U));
      } else if (s) {
        const L = v ? h.length / g.grid.rows : h.length;
        a.slideTo(a.activeIndex + L, 0, !1, !0), a.touchEventsData.currentTranslate = a.translate;
      }
    } else if (S.length > 0 && B)
      if (typeof t > "u") {
        const L = a.slidesGrid[O], U = a.slidesGrid[O - N] - L;
        l ? a.setTranslate(a.translate - U) : (a.slideTo(O - N, 0, !1, !0), s && (a.touchEventsData.startTranslate = a.touchEventsData.startTranslate - U, a.touchEventsData.currentTranslate = a.touchEventsData.currentTranslate - U));
      } else {
        const L = v ? S.length / g.grid.rows : S.length;
        a.slideTo(a.activeIndex - L, 0, !1, !0);
      }
  }
  if (a.allowSlidePrev = c, a.allowSlideNext = d, a.controller && a.controller.control && !o) {
    const L = {
      slideRealIndex: t,
      direction: i,
      setTranslate: s,
      activeSlideIndex: r,
      byController: !0
    };
    Array.isArray(a.controller.control) ? a.controller.control.forEach((z) => {
      !z.destroyed && z.params.loop && z.loopFix({
        ...L,
        slideTo: z.params.slidesPerView === g.slidesPerView ? n : !1
      });
    }) : a.controller.control instanceof a.constructor && a.controller.control.params.loop && a.controller.control.loopFix({
      ...L,
      slideTo: a.controller.control.params.slidesPerView === g.slidesPerView ? n : !1
    });
  }
  a.emit("loopFix");
}
function Gh() {
  const e = this, {
    params: t,
    slidesEl: n
  } = e;
  if (!t.loop || e.virtual && e.params.virtual.enabled) return;
  e.recalcSlides();
  const i = [];
  e.slides.forEach((s) => {
    const r = typeof s.swiperSlideIndex > "u" ? s.getAttribute("data-swiper-slide-index") * 1 : s.swiperSlideIndex;
    i[r] = s;
  }), e.slides.forEach((s) => {
    s.removeAttribute("data-swiper-slide-index");
  }), i.forEach((s) => {
    n.append(s);
  }), e.recalcSlides(), e.slideTo(e.realIndex, 0);
}
var Uh = {
  loopCreate: jh,
  loopFix: Hh,
  loopDestroy: Gh
};
function qh(e) {
  const t = this;
  if (!t.params.simulateTouch || t.params.watchOverflow && t.isLocked || t.params.cssMode) return;
  const n = t.params.touchEventsTarget === "container" ? t.el : t.wrapperEl;
  t.isElement && (t.__preventObserver__ = !0), n.style.cursor = "move", n.style.cursor = e ? "grabbing" : "grab", t.isElement && requestAnimationFrame(() => {
    t.__preventObserver__ = !1;
  });
}
function Wh() {
  const e = this;
  e.params.watchOverflow && e.isLocked || e.params.cssMode || (e.isElement && (e.__preventObserver__ = !0), e[e.params.touchEventsTarget === "container" ? "el" : "wrapperEl"].style.cursor = "", e.isElement && requestAnimationFrame(() => {
    e.__preventObserver__ = !1;
  }));
}
var Kh = {
  setGrabCursor: qh,
  unsetGrabCursor: Wh
};
function Yh(e, t) {
  t === void 0 && (t = this);
  function n(i) {
    if (!i || i === tt() || i === Le()) return null;
    i.assignedSlot && (i = i.assignedSlot);
    const s = i.closest(e);
    return !s && !i.getRootNode ? null : s || n(i.getRootNode().host);
  }
  return n(t);
}
function bo(e, t, n) {
  const i = Le(), {
    params: s
  } = e, r = s.edgeSwipeDetection, o = s.edgeSwipeThreshold;
  return r && (n <= o || n >= i.innerWidth - o) ? r === "prevent" ? (t.preventDefault(), !0) : !1 : !0;
}
function Xh(e) {
  const t = this, n = tt();
  let i = e;
  i.originalEvent && (i = i.originalEvent);
  const s = t.touchEventsData;
  if (i.type === "pointerdown") {
    if (s.pointerId !== null && s.pointerId !== i.pointerId)
      return;
    s.pointerId = i.pointerId;
  } else i.type === "touchstart" && i.targetTouches.length === 1 && (s.touchId = i.targetTouches[0].identifier);
  if (i.type === "touchstart") {
    bo(t, i, i.targetTouches[0].pageX);
    return;
  }
  const {
    params: r,
    touches: o,
    enabled: l
  } = t;
  if (!l || !r.simulateTouch && i.pointerType === "mouse" || t.animating && r.preventInteractionOnTransition)
    return;
  !t.animating && r.cssMode && r.loop && t.loopFix();
  let a = i.target;
  if (r.touchEventsTarget === "wrapper" && !nh(a, t.wrapperEl) || "which" in i && i.which === 3 || "button" in i && i.button > 0 || s.isTouched && s.isMoved) return;
  const u = !!r.noSwipingClass && r.noSwipingClass !== "", c = i.composedPath ? i.composedPath() : i.path;
  u && i.target && i.target.shadowRoot && c && (a = c[0]);
  const d = r.noSwipingSelector ? r.noSwipingSelector : `.${r.noSwipingClass}`, p = !!(i.target && i.target.shadowRoot);
  if (r.noSwiping && (p ? Yh(d, a) : a.closest(d))) {
    t.allowClick = !0;
    return;
  }
  if (r.swipeHandler && !a.closest(r.swipeHandler))
    return;
  o.currentX = i.pageX, o.currentY = i.pageY;
  const g = o.currentX, m = o.currentY;
  if (!bo(t, i, g))
    return;
  Object.assign(s, {
    isTouched: !0,
    isMoved: !1,
    allowTouchCallbacks: !0,
    isScrolling: void 0,
    startMoving: void 0
  }), o.startX = g, o.startY = m, s.touchStartTime = vi(), t.allowClick = !0, t.updateSize(), t.swipeDirection = void 0, r.threshold > 0 && (s.allowThresholdMove = !1);
  let b = !0;
  a.matches(s.focusableElements) && (b = !1, a.nodeName === "SELECT" && (s.isTouched = !1)), n.activeElement && n.activeElement.matches(s.focusableElements) && n.activeElement !== a && (i.pointerType === "mouse" || i.pointerType !== "mouse" && !a.matches(s.focusableElements)) && n.activeElement.blur();
  const w = b && t.allowTouchMove && r.touchStartPreventDefault;
  (r.touchStartForcePreventDefault || w) && !a.isContentEditable && i.preventDefault(), r.freeMode && r.freeMode.enabled && t.freeMode && t.animating && !r.cssMode && t.freeMode.onTouchStart(), t.emit("touchStart", i);
}
function Jh(e) {
  const t = tt(), n = this, i = n.touchEventsData, {
    params: s,
    touches: r,
    rtlTranslate: o,
    enabled: l
  } = n;
  if (!l || !s.simulateTouch && e.pointerType === "mouse") return;
  let a = e;
  if (a.originalEvent && (a = a.originalEvent), a.type === "pointermove" && (i.touchId !== null || a.pointerId !== i.pointerId))
    return;
  let u;
  if (a.type === "touchmove") {
    if (u = [...a.changedTouches].filter((B) => B.identifier === i.touchId)[0], !u || u.identifier !== i.touchId) return;
  } else
    u = a;
  if (!i.isTouched) {
    i.startMoving && i.isScrolling && n.emit("touchMoveOpposite", a);
    return;
  }
  const c = u.pageX, d = u.pageY;
  if (a.preventedByNestedSwiper) {
    r.startX = c, r.startY = d;
    return;
  }
  if (!n.allowTouchMove) {
    a.target.matches(i.focusableElements) || (n.allowClick = !1), i.isTouched && (Object.assign(r, {
      startX: c,
      startY: d,
      currentX: c,
      currentY: d
    }), i.touchStartTime = vi());
    return;
  }
  if (s.touchReleaseOnEdges && !s.loop) {
    if (n.isVertical()) {
      if (d < r.startY && n.translate <= n.maxTranslate() || d > r.startY && n.translate >= n.minTranslate()) {
        i.isTouched = !1, i.isMoved = !1;
        return;
      }
    } else if (c < r.startX && n.translate <= n.maxTranslate() || c > r.startX && n.translate >= n.minTranslate())
      return;
  }
  if (t.activeElement && t.activeElement.matches(i.focusableElements) && t.activeElement !== a.target && a.pointerType !== "mouse" && t.activeElement.blur(), t.activeElement && a.target === t.activeElement && a.target.matches(i.focusableElements)) {
    i.isMoved = !0, n.allowClick = !1;
    return;
  }
  i.allowTouchCallbacks && n.emit("touchMove", a), r.previousX = r.currentX, r.previousY = r.currentY, r.currentX = c, r.currentY = d;
  const p = r.currentX - r.startX, g = r.currentY - r.startY;
  if (n.params.threshold && Math.sqrt(p ** 2 + g ** 2) < n.params.threshold) return;
  if (typeof i.isScrolling > "u") {
    let B;
    n.isHorizontal() && r.currentY === r.startY || n.isVertical() && r.currentX === r.startX ? i.isScrolling = !1 : p * p + g * g >= 25 && (B = Math.atan2(Math.abs(g), Math.abs(p)) * 180 / Math.PI, i.isScrolling = n.isHorizontal() ? B > s.touchAngle : 90 - B > s.touchAngle);
  }
  if (i.isScrolling && n.emit("touchMoveOpposite", a), typeof i.startMoving > "u" && (r.currentX !== r.startX || r.currentY !== r.startY) && (i.startMoving = !0), i.isScrolling || a.type === "touchmove" && i.preventTouchMoveFromPointerMove) {
    i.isTouched = !1;
    return;
  }
  if (!i.startMoving)
    return;
  n.allowClick = !1, !s.cssMode && a.cancelable && a.preventDefault(), s.touchMoveStopPropagation && !s.nested && a.stopPropagation();
  let m = n.isHorizontal() ? p : g, b = n.isHorizontal() ? r.currentX - r.previousX : r.currentY - r.previousY;
  s.oneWayMovement && (m = Math.abs(m) * (o ? 1 : -1), b = Math.abs(b) * (o ? 1 : -1)), r.diff = m, m *= s.touchRatio, o && (m = -m, b = -b);
  const w = n.touchesDirection;
  n.swipeDirection = m > 0 ? "prev" : "next", n.touchesDirection = b > 0 ? "prev" : "next";
  const x = n.params.loop && !s.cssMode, v = n.touchesDirection === "next" && n.allowSlideNext || n.touchesDirection === "prev" && n.allowSlidePrev;
  if (!i.isMoved) {
    if (x && v && n.loopFix({
      direction: n.swipeDirection
    }), i.startTranslate = n.getTranslate(), n.setTransition(0), n.animating) {
      const B = new window.CustomEvent("transitionend", {
        bubbles: !0,
        cancelable: !0,
        detail: {
          bySwiperTouchMove: !0
        }
      });
      n.wrapperEl.dispatchEvent(B);
    }
    i.allowMomentumBounce = !1, s.grabCursor && (n.allowSlideNext === !0 || n.allowSlidePrev === !0) && n.setGrabCursor(!0), n.emit("sliderFirstMove", a);
  }
  let h;
  if ((/* @__PURE__ */ new Date()).getTime(), i.isMoved && i.allowThresholdMove && w !== n.touchesDirection && x && v && Math.abs(m) >= 1) {
    Object.assign(r, {
      startX: c,
      startY: d,
      currentX: c,
      currentY: d,
      startTranslate: i.currentTranslate
    }), i.loopSwapReset = !0, i.startTranslate = i.currentTranslate;
    return;
  }
  n.emit("sliderMove", a), i.isMoved = !0, i.currentTranslate = m + i.startTranslate;
  let S = !0, O = s.resistanceRatio;
  if (s.touchReleaseOnEdges && (O = 0), m > 0 ? (x && v && !h && i.allowThresholdMove && i.currentTranslate > (s.centeredSlides ? n.minTranslate() - n.slidesSizesGrid[n.activeIndex + 1] - (s.slidesPerView !== "auto" && n.slides.length - s.slidesPerView >= 2 ? n.slidesSizesGrid[n.activeIndex + 1] + n.params.spaceBetween : 0) - n.params.spaceBetween : n.minTranslate()) && n.loopFix({
    direction: "prev",
    setTranslate: !0,
    activeSlideIndex: 0
  }), i.currentTranslate > n.minTranslate() && (S = !1, s.resistance && (i.currentTranslate = n.minTranslate() - 1 + (-n.minTranslate() + i.startTranslate + m) ** O))) : m < 0 && (x && v && !h && i.allowThresholdMove && i.currentTranslate < (s.centeredSlides ? n.maxTranslate() + n.slidesSizesGrid[n.slidesSizesGrid.length - 1] + n.params.spaceBetween + (s.slidesPerView !== "auto" && n.slides.length - s.slidesPerView >= 2 ? n.slidesSizesGrid[n.slidesSizesGrid.length - 1] + n.params.spaceBetween : 0) : n.maxTranslate()) && n.loopFix({
    direction: "next",
    setTranslate: !0,
    activeSlideIndex: n.slides.length - (s.slidesPerView === "auto" ? n.slidesPerViewDynamic() : Math.ceil(parseFloat(s.slidesPerView, 10)))
  }), i.currentTranslate < n.maxTranslate() && (S = !1, s.resistance && (i.currentTranslate = n.maxTranslate() + 1 - (n.maxTranslate() - i.startTranslate - m) ** O))), S && (a.preventedByNestedSwiper = !0), !n.allowSlideNext && n.swipeDirection === "next" && i.currentTranslate < i.startTranslate && (i.currentTranslate = i.startTranslate), !n.allowSlidePrev && n.swipeDirection === "prev" && i.currentTranslate > i.startTranslate && (i.currentTranslate = i.startTranslate), !n.allowSlidePrev && !n.allowSlideNext && (i.currentTranslate = i.startTranslate), s.threshold > 0)
    if (Math.abs(m) > s.threshold || i.allowThresholdMove) {
      if (!i.allowThresholdMove) {
        i.allowThresholdMove = !0, r.startX = r.currentX, r.startY = r.currentY, i.currentTranslate = i.startTranslate, r.diff = n.isHorizontal() ? r.currentX - r.startX : r.currentY - r.startY;
        return;
      }
    } else {
      i.currentTranslate = i.startTranslate;
      return;
    }
  !s.followFinger || s.cssMode || ((s.freeMode && s.freeMode.enabled && n.freeMode || s.watchSlidesProgress) && (n.updateActiveIndex(), n.updateSlidesClasses()), s.freeMode && s.freeMode.enabled && n.freeMode && n.freeMode.onTouchMove(), n.updateProgress(i.currentTranslate), n.setTranslate(i.currentTranslate));
}
function Zh(e) {
  const t = this, n = t.touchEventsData;
  let i = e;
  i.originalEvent && (i = i.originalEvent);
  let s;
  if (i.type === "touchend" || i.type === "touchcancel") {
    if (s = [...i.changedTouches].filter((O) => O.identifier === n.touchId)[0], !s || s.identifier !== n.touchId) return;
  } else {
    if (n.touchId !== null || i.pointerId !== n.pointerId) return;
    s = i;
  }
  if (["pointercancel", "pointerout", "pointerleave", "contextmenu"].includes(i.type) && !(["pointercancel", "contextmenu"].includes(i.type) && (t.browser.isSafari || t.browser.isWebView)))
    return;
  n.pointerId = null, n.touchId = null;
  const {
    params: o,
    touches: l,
    rtlTranslate: a,
    slidesGrid: u,
    enabled: c
  } = t;
  if (!c || !o.simulateTouch && i.pointerType === "mouse") return;
  if (n.allowTouchCallbacks && t.emit("touchEnd", i), n.allowTouchCallbacks = !1, !n.isTouched) {
    n.isMoved && o.grabCursor && t.setGrabCursor(!1), n.isMoved = !1, n.startMoving = !1;
    return;
  }
  o.grabCursor && n.isMoved && n.isTouched && (t.allowSlideNext === !0 || t.allowSlidePrev === !0) && t.setGrabCursor(!1);
  const d = vi(), p = d - n.touchStartTime;
  if (t.allowClick) {
    const O = i.path || i.composedPath && i.composedPath();
    t.updateClickedSlide(O && O[0] || i.target, O), t.emit("tap click", i), p < 300 && d - n.lastClickTime < 300 && t.emit("doubleTap doubleClick", i);
  }
  if (n.lastClickTime = vi(), gi(() => {
    t.destroyed || (t.allowClick = !0);
  }), !n.isTouched || !n.isMoved || !t.swipeDirection || l.diff === 0 && !n.loopSwapReset || n.currentTranslate === n.startTranslate && !n.loopSwapReset) {
    n.isTouched = !1, n.isMoved = !1, n.startMoving = !1;
    return;
  }
  n.isTouched = !1, n.isMoved = !1, n.startMoving = !1;
  let g;
  if (o.followFinger ? g = a ? t.translate : -t.translate : g = -n.currentTranslate, o.cssMode)
    return;
  if (o.freeMode && o.freeMode.enabled) {
    t.freeMode.onTouchEnd({
      currentPos: g
    });
    return;
  }
  const m = g >= -t.maxTranslate() && !t.params.loop;
  let b = 0, w = t.slidesSizesGrid[0];
  for (let O = 0; O < u.length; O += O < o.slidesPerGroupSkip ? 1 : o.slidesPerGroup) {
    const B = O < o.slidesPerGroupSkip - 1 ? 1 : o.slidesPerGroup;
    typeof u[O + B] < "u" ? (m || g >= u[O] && g < u[O + B]) && (b = O, w = u[O + B] - u[O]) : (m || g >= u[O]) && (b = O, w = u[u.length - 1] - u[u.length - 2]);
  }
  let x = null, v = null;
  o.rewind && (t.isBeginning ? v = o.virtual && o.virtual.enabled && t.virtual ? t.virtual.slides.length - 1 : t.slides.length - 1 : t.isEnd && (x = 0));
  const h = (g - u[b]) / w, S = b < o.slidesPerGroupSkip - 1 ? 1 : o.slidesPerGroup;
  if (p > o.longSwipesMs) {
    if (!o.longSwipes) {
      t.slideTo(t.activeIndex);
      return;
    }
    t.swipeDirection === "next" && (h >= o.longSwipesRatio ? t.slideTo(o.rewind && t.isEnd ? x : b + S) : t.slideTo(b)), t.swipeDirection === "prev" && (h > 1 - o.longSwipesRatio ? t.slideTo(b + S) : v !== null && h < 0 && Math.abs(h) > o.longSwipesRatio ? t.slideTo(v) : t.slideTo(b));
  } else {
    if (!o.shortSwipes) {
      t.slideTo(t.activeIndex);
      return;
    }
    t.navigation && (i.target === t.navigation.nextEl || i.target === t.navigation.prevEl) ? i.target === t.navigation.nextEl ? t.slideTo(b + S) : t.slideTo(b) : (t.swipeDirection === "next" && t.slideTo(x !== null ? x : b + S), t.swipeDirection === "prev" && t.slideTo(v !== null ? v : b));
  }
}
function yo() {
  const e = this, {
    params: t,
    el: n
  } = e;
  if (n && n.offsetWidth === 0) return;
  t.breakpoints && e.setBreakpoint();
  const {
    allowSlideNext: i,
    allowSlidePrev: s,
    snapGrid: r
  } = e, o = e.virtual && e.params.virtual.enabled;
  e.allowSlideNext = !0, e.allowSlidePrev = !0, e.updateSize(), e.updateSlides(), e.updateSlidesClasses();
  const l = o && t.loop;
  (t.slidesPerView === "auto" || t.slidesPerView > 1) && e.isEnd && !e.isBeginning && !e.params.centeredSlides && !l ? e.slideTo(e.slides.length - 1, 0, !1, !0) : e.params.loop && !o ? e.slideToLoop(e.realIndex, 0, !1, !0) : e.slideTo(e.activeIndex, 0, !1, !0), e.autoplay && e.autoplay.running && e.autoplay.paused && (clearTimeout(e.autoplay.resizeTimeout), e.autoplay.resizeTimeout = setTimeout(() => {
    e.autoplay && e.autoplay.running && e.autoplay.paused && e.autoplay.resume();
  }, 500)), e.allowSlidePrev = s, e.allowSlideNext = i, e.params.watchOverflow && r !== e.snapGrid && e.checkOverflow();
}
function Qh(e) {
  const t = this;
  t.enabled && (t.allowClick || (t.params.preventClicks && e.preventDefault(), t.params.preventClicksPropagation && t.animating && (e.stopPropagation(), e.stopImmediatePropagation())));
}
function em() {
  const e = this, {
    wrapperEl: t,
    rtlTranslate: n,
    enabled: i
  } = e;
  if (!i) return;
  e.previousTranslate = e.translate, e.isHorizontal() ? e.translate = -t.scrollLeft : e.translate = -t.scrollTop, e.translate === 0 && (e.translate = 0), e.updateActiveIndex(), e.updateSlidesClasses();
  let s;
  const r = e.maxTranslate() - e.minTranslate();
  r === 0 ? s = 0 : s = (e.translate - e.minTranslate()) / r, s !== e.progress && e.updateProgress(n ? -e.translate : e.translate), e.emit("setTranslate", e.translate, !1);
}
function tm(e) {
  const t = this;
  oi(t, e.target), !(t.params.cssMode || t.params.slidesPerView !== "auto" && !t.params.autoHeight) && t.update();
}
function nm() {
  const e = this;
  e.documentTouchHandlerProceeded || (e.documentTouchHandlerProceeded = !0, e.params.touchReleaseOnEdges && (e.el.style.touchAction = "auto"));
}
const ba = (e, t) => {
  const n = tt(), {
    params: i,
    el: s,
    wrapperEl: r,
    device: o
  } = e, l = !!i.nested, a = t === "on" ? "addEventListener" : "removeEventListener", u = t;
  !s || typeof s == "string" || (n[a]("touchstart", e.onDocumentTouchStart, {
    passive: !1,
    capture: l
  }), s[a]("touchstart", e.onTouchStart, {
    passive: !1
  }), s[a]("pointerdown", e.onTouchStart, {
    passive: !1
  }), n[a]("touchmove", e.onTouchMove, {
    passive: !1,
    capture: l
  }), n[a]("pointermove", e.onTouchMove, {
    passive: !1,
    capture: l
  }), n[a]("touchend", e.onTouchEnd, {
    passive: !0
  }), n[a]("pointerup", e.onTouchEnd, {
    passive: !0
  }), n[a]("pointercancel", e.onTouchEnd, {
    passive: !0
  }), n[a]("touchcancel", e.onTouchEnd, {
    passive: !0
  }), n[a]("pointerout", e.onTouchEnd, {
    passive: !0
  }), n[a]("pointerleave", e.onTouchEnd, {
    passive: !0
  }), n[a]("contextmenu", e.onTouchEnd, {
    passive: !0
  }), (i.preventClicks || i.preventClicksPropagation) && s[a]("click", e.onClick, !0), i.cssMode && r[a]("scroll", e.onScroll), i.updateOnWindowResize ? e[u](o.ios || o.android ? "resize orientationchange observerUpdate" : "resize observerUpdate", yo, !0) : e[u]("observerUpdate", yo, !0), s[a]("load", e.onLoad, {
    capture: !0
  }));
};
function im() {
  const e = this, {
    params: t
  } = e;
  e.onTouchStart = Xh.bind(e), e.onTouchMove = Jh.bind(e), e.onTouchEnd = Zh.bind(e), e.onDocumentTouchStart = nm.bind(e), t.cssMode && (e.onScroll = em.bind(e)), e.onClick = Qh.bind(e), e.onLoad = tm.bind(e), ba(e, "on");
}
function sm() {
  ba(this, "off");
}
var rm = {
  attachEvents: im,
  detachEvents: sm
};
const Eo = (e, t) => e.grid && t.grid && t.grid.rows > 1;
function om() {
  const e = this, {
    realIndex: t,
    initialized: n,
    params: i,
    el: s
  } = e, r = i.breakpoints;
  if (!r || r && Object.keys(r).length === 0) return;
  const o = e.getBreakpoint(r, e.params.breakpointsBase, e.el);
  if (!o || e.currentBreakpoint === o) return;
  const a = (o in r ? r[o] : void 0) || e.originalParams, u = Eo(e, i), c = Eo(e, a), d = e.params.grabCursor, p = a.grabCursor, g = i.enabled;
  u && !c ? (s.classList.remove(`${i.containerModifierClass}grid`, `${i.containerModifierClass}grid-column`), e.emitContainerClasses()) : !u && c && (s.classList.add(`${i.containerModifierClass}grid`), (a.grid.fill && a.grid.fill === "column" || !a.grid.fill && i.grid.fill === "column") && s.classList.add(`${i.containerModifierClass}grid-column`), e.emitContainerClasses()), d && !p ? e.unsetGrabCursor() : !d && p && e.setGrabCursor(), ["navigation", "pagination", "scrollbar"].forEach((h) => {
    if (typeof a[h] > "u") return;
    const S = i[h] && i[h].enabled, O = a[h] && a[h].enabled;
    S && !O && e[h].disable(), !S && O && e[h].enable();
  });
  const m = a.direction && a.direction !== i.direction, b = i.loop && (a.slidesPerView !== i.slidesPerView || m), w = i.loop;
  m && n && e.changeDirection(), Re(e.params, a);
  const x = e.params.enabled, v = e.params.loop;
  Object.assign(e, {
    allowTouchMove: e.params.allowTouchMove,
    allowSlideNext: e.params.allowSlideNext,
    allowSlidePrev: e.params.allowSlidePrev
  }), g && !x ? e.disable() : !g && x && e.enable(), e.currentBreakpoint = o, e.emit("_beforeBreakpoint", a), n && (b ? (e.loopDestroy(), e.loopCreate(t), e.updateSlides()) : !w && v ? (e.loopCreate(t), e.updateSlides()) : w && !v && e.loopDestroy()), e.emit("breakpoint", a);
}
function lm(e, t, n) {
  if (t === void 0 && (t = "window"), !e || t === "container" && !n) return;
  let i = !1;
  const s = Le(), r = t === "window" ? s.innerHeight : n.clientHeight, o = Object.keys(e).map((l) => {
    if (typeof l == "string" && l.indexOf("@") === 0) {
      const a = parseFloat(l.substr(1));
      return {
        value: r * a,
        point: l
      };
    }
    return {
      value: l,
      point: l
    };
  });
  o.sort((l, a) => parseInt(l.value, 10) - parseInt(a.value, 10));
  for (let l = 0; l < o.length; l += 1) {
    const {
      point: a,
      value: u
    } = o[l];
    t === "window" ? s.matchMedia(`(min-width: ${u}px)`).matches && (i = a) : u <= n.clientWidth && (i = a);
  }
  return i || "max";
}
var am = {
  setBreakpoint: om,
  getBreakpoint: lm
};
function cm(e, t) {
  const n = [];
  return e.forEach((i) => {
    typeof i == "object" ? Object.keys(i).forEach((s) => {
      i[s] && n.push(t + s);
    }) : typeof i == "string" && n.push(t + i);
  }), n;
}
function um() {
  const e = this, {
    classNames: t,
    params: n,
    rtl: i,
    el: s,
    device: r
  } = e, o = cm(["initialized", n.direction, {
    "free-mode": e.params.freeMode && n.freeMode.enabled
  }, {
    autoheight: n.autoHeight
  }, {
    rtl: i
  }, {
    grid: n.grid && n.grid.rows > 1
  }, {
    "grid-column": n.grid && n.grid.rows > 1 && n.grid.fill === "column"
  }, {
    android: r.android
  }, {
    ios: r.ios
  }, {
    "css-mode": n.cssMode
  }, {
    centered: n.cssMode && n.centeredSlides
  }, {
    "watch-progress": n.watchSlidesProgress
  }], n.containerModifierClass);
  t.push(...o), s.classList.add(...t), e.emitContainerClasses();
}
function dm() {
  const e = this, {
    el: t,
    classNames: n
  } = e;
  !t || typeof t == "string" || (t.classList.remove(...n), e.emitContainerClasses());
}
var fm = {
  addClasses: um,
  removeClasses: dm
};
function pm() {
  const e = this, {
    isLocked: t,
    params: n
  } = e, {
    slidesOffsetBefore: i
  } = n;
  if (i) {
    const s = e.slides.length - 1, r = e.slidesGrid[s] + e.slidesSizesGrid[s] + i * 2;
    e.isLocked = e.size > r;
  } else
    e.isLocked = e.snapGrid.length === 1;
  n.allowSlideNext === !0 && (e.allowSlideNext = !e.isLocked), n.allowSlidePrev === !0 && (e.allowSlidePrev = !e.isLocked), t && t !== e.isLocked && (e.isEnd = !1), t !== e.isLocked && e.emit(e.isLocked ? "lock" : "unlock");
}
var hm = {
  checkOverflow: pm
}, Ds = {
  init: !0,
  direction: "horizontal",
  oneWayMovement: !1,
  swiperElementNodeName: "SWIPER-CONTAINER",
  touchEventsTarget: "wrapper",
  initialSlide: 0,
  speed: 300,
  cssMode: !1,
  updateOnWindowResize: !0,
  resizeObserver: !0,
  nested: !1,
  createElements: !1,
  eventsPrefix: "swiper",
  enabled: !0,
  focusableElements: "input, select, option, textarea, button, video, label",
  // Overrides
  width: null,
  height: null,
  //
  preventInteractionOnTransition: !1,
  // ssr
  userAgent: null,
  url: null,
  // To support iOS's swipe-to-go-back gesture (when being used in-app).
  edgeSwipeDetection: !1,
  edgeSwipeThreshold: 20,
  // Autoheight
  autoHeight: !1,
  // Set wrapper width
  setWrapperSize: !1,
  // Virtual Translate
  virtualTranslate: !1,
  // Effects
  effect: "slide",
  // 'slide' or 'fade' or 'cube' or 'coverflow' or 'flip'
  // Breakpoints
  breakpoints: void 0,
  breakpointsBase: "window",
  // Slides grid
  spaceBetween: 0,
  slidesPerView: 1,
  slidesPerGroup: 1,
  slidesPerGroupSkip: 0,
  slidesPerGroupAuto: !1,
  centeredSlides: !1,
  centeredSlidesBounds: !1,
  slidesOffsetBefore: 0,
  // in px
  slidesOffsetAfter: 0,
  // in px
  normalizeSlideIndex: !0,
  centerInsufficientSlides: !1,
  // Disable swiper and hide navigation when container not overflow
  watchOverflow: !0,
  // Round length
  roundLengths: !1,
  // Touches
  touchRatio: 1,
  touchAngle: 45,
  simulateTouch: !0,
  shortSwipes: !0,
  longSwipes: !0,
  longSwipesRatio: 0.5,
  longSwipesMs: 300,
  followFinger: !0,
  allowTouchMove: !0,
  threshold: 5,
  touchMoveStopPropagation: !1,
  touchStartPreventDefault: !0,
  touchStartForcePreventDefault: !1,
  touchReleaseOnEdges: !1,
  // Unique Navigation Elements
  uniqueNavElements: !0,
  // Resistance
  resistance: !0,
  resistanceRatio: 0.85,
  // Progress
  watchSlidesProgress: !1,
  // Cursor
  grabCursor: !1,
  // Clicks
  preventClicks: !0,
  preventClicksPropagation: !0,
  slideToClickedSlide: !1,
  // loop
  loop: !1,
  loopAddBlankSlides: !0,
  loopAdditionalSlides: 0,
  loopPreventsSliding: !0,
  // rewind
  rewind: !1,
  // Swiping/no swiping
  allowSlidePrev: !0,
  allowSlideNext: !0,
  swipeHandler: null,
  // '.swipe-handler',
  noSwiping: !0,
  noSwipingClass: "swiper-no-swiping",
  noSwipingSelector: null,
  // Passive Listeners
  passiveListeners: !0,
  maxBackfaceHiddenSlides: 10,
  // NS
  containerModifierClass: "swiper-",
  // NEW
  slideClass: "swiper-slide",
  slideBlankClass: "swiper-slide-blank",
  slideActiveClass: "swiper-slide-active",
  slideVisibleClass: "swiper-slide-visible",
  slideFullyVisibleClass: "swiper-slide-fully-visible",
  slideNextClass: "swiper-slide-next",
  slidePrevClass: "swiper-slide-prev",
  wrapperClass: "swiper-wrapper",
  lazyPreloaderClass: "swiper-lazy-preloader",
  lazyPreloadPrevNext: 0,
  // Callbacks
  runCallbacksOnInit: !0,
  // Internals
  _emitClasses: !1
};
function mm(e, t) {
  return function(i) {
    i === void 0 && (i = {});
    const s = Object.keys(i)[0], r = i[s];
    if (typeof r != "object" || r === null) {
      Re(t, i);
      return;
    }
    if (e[s] === !0 && (e[s] = {
      enabled: !0
    }), s === "navigation" && e[s] && e[s].enabled && !e[s].prevEl && !e[s].nextEl && (e[s].auto = !0), ["pagination", "scrollbar"].indexOf(s) >= 0 && e[s] && e[s].enabled && !e[s].el && (e[s].auto = !0), !(s in e && "enabled" in r)) {
      Re(t, i);
      return;
    }
    typeof e[s] == "object" && !("enabled" in e[s]) && (e[s].enabled = !0), e[s] || (e[s] = {
      enabled: !1
    }), Re(t, i);
  };
}
const ts = {
  eventsEmitter: fh,
  update: Sh,
  translate: Ph,
  transition: Lh,
  slide: kh,
  loop: Uh,
  grabCursor: Kh,
  events: rm,
  breakpoints: am,
  checkOverflow: hm,
  classes: fm
}, ns = {};
let ur = class ot {
  constructor() {
    let t, n;
    for (var i = arguments.length, s = new Array(i), r = 0; r < i; r++)
      s[r] = arguments[r];
    s.length === 1 && s[0].constructor && Object.prototype.toString.call(s[0]).slice(8, -1) === "Object" ? n = s[0] : [t, n] = s, n || (n = {}), n = Re({}, n), t && !n.el && (n.el = t);
    const o = tt();
    if (n.el && typeof n.el == "string" && o.querySelectorAll(n.el).length > 1) {
      const c = [];
      return o.querySelectorAll(n.el).forEach((d) => {
        const p = Re({}, n, {
          el: d
        });
        c.push(new ot(p));
      }), c;
    }
    const l = this;
    l.__swiper__ = !0, l.support = ma(), l.device = ga({
      userAgent: n.userAgent
    }), l.browser = ch(), l.eventsListeners = {}, l.eventsAnyListeners = [], l.modules = [...l.__modules__], n.modules && Array.isArray(n.modules) && l.modules.push(...n.modules);
    const a = {};
    l.modules.forEach((c) => {
      c({
        params: n,
        swiper: l,
        extendParams: mm(n, a),
        on: l.on.bind(l),
        once: l.once.bind(l),
        off: l.off.bind(l),
        emit: l.emit.bind(l)
      });
    });
    const u = Re({}, Ds, a);
    return l.params = Re({}, u, ns, n), l.originalParams = Re({}, l.params), l.passedParams = Re({}, n), l.params && l.params.on && Object.keys(l.params.on).forEach((c) => {
      l.on(c, l.params.on[c]);
    }), l.params && l.params.onAny && l.onAny(l.params.onAny), Object.assign(l, {
      enabled: l.params.enabled,
      el: t,
      // Classes
      classNames: [],
      // Slides
      slides: [],
      slidesGrid: [],
      snapGrid: [],
      slidesSizesGrid: [],
      // isDirection
      isHorizontal() {
        return l.params.direction === "horizontal";
      },
      isVertical() {
        return l.params.direction === "vertical";
      },
      // Indexes
      activeIndex: 0,
      realIndex: 0,
      //
      isBeginning: !0,
      isEnd: !1,
      // Props
      translate: 0,
      previousTranslate: 0,
      progress: 0,
      velocity: 0,
      animating: !1,
      cssOverflowAdjustment() {
        return Math.trunc(this.translate / 2 ** 23) * 2 ** 23;
      },
      // Locks
      allowSlideNext: l.params.allowSlideNext,
      allowSlidePrev: l.params.allowSlidePrev,
      // Touch Events
      touchEventsData: {
        isTouched: void 0,
        isMoved: void 0,
        allowTouchCallbacks: void 0,
        touchStartTime: void 0,
        isScrolling: void 0,
        currentTranslate: void 0,
        startTranslate: void 0,
        allowThresholdMove: void 0,
        // Form elements to match
        focusableElements: l.params.focusableElements,
        // Last click time
        lastClickTime: 0,
        clickTimeout: void 0,
        // Velocities
        velocities: [],
        allowMomentumBounce: void 0,
        startMoving: void 0,
        pointerId: null,
        touchId: null
      },
      // Clicks
      allowClick: !0,
      // Touches
      allowTouchMove: l.params.allowTouchMove,
      touches: {
        startX: 0,
        startY: 0,
        currentX: 0,
        currentY: 0,
        diff: 0
      },
      // Images
      imagesToLoad: [],
      imagesLoaded: 0
    }), l.emit("_swiper"), l.params.init && l.init(), l;
  }
  getDirectionLabel(t) {
    return this.isHorizontal() ? t : {
      width: "height",
      "margin-top": "margin-left",
      "margin-bottom ": "margin-right",
      "margin-left": "margin-top",
      "margin-right": "margin-bottom",
      "padding-left": "padding-top",
      "padding-right": "padding-bottom",
      marginRight: "marginBottom"
    }[t];
  }
  getSlideIndex(t) {
    const {
      slidesEl: n,
      params: i
    } = this, s = Ze(n, `.${i.slideClass}, swiper-slide`), r = Dn(s[0]);
    return Dn(t) - r;
  }
  getSlideIndexByData(t) {
    return this.getSlideIndex(this.slides.filter((n) => n.getAttribute("data-swiper-slide-index") * 1 === t)[0]);
  }
  recalcSlides() {
    const t = this, {
      slidesEl: n,
      params: i
    } = t;
    t.slides = Ze(n, `.${i.slideClass}, swiper-slide`);
  }
  enable() {
    const t = this;
    t.enabled || (t.enabled = !0, t.params.grabCursor && t.setGrabCursor(), t.emit("enable"));
  }
  disable() {
    const t = this;
    t.enabled && (t.enabled = !1, t.params.grabCursor && t.unsetGrabCursor(), t.emit("disable"));
  }
  setProgress(t, n) {
    const i = this;
    t = Math.min(Math.max(t, 0), 1);
    const s = i.minTranslate(), o = (i.maxTranslate() - s) * t + s;
    i.translateTo(o, typeof n > "u" ? 0 : n), i.updateActiveIndex(), i.updateSlidesClasses();
  }
  emitContainerClasses() {
    const t = this;
    if (!t.params._emitClasses || !t.el) return;
    const n = t.el.className.split(" ").filter((i) => i.indexOf("swiper") === 0 || i.indexOf(t.params.containerModifierClass) === 0);
    t.emit("_containerClasses", n.join(" "));
  }
  getSlideClasses(t) {
    const n = this;
    return n.destroyed ? "" : t.className.split(" ").filter((i) => i.indexOf("swiper-slide") === 0 || i.indexOf(n.params.slideClass) === 0).join(" ");
  }
  emitSlidesClasses() {
    const t = this;
    if (!t.params._emitClasses || !t.el) return;
    const n = [];
    t.slides.forEach((i) => {
      const s = t.getSlideClasses(i);
      n.push({
        slideEl: i,
        classNames: s
      }), t.emit("_slideClass", i, s);
    }), t.emit("_slideClasses", n);
  }
  slidesPerViewDynamic(t, n) {
    t === void 0 && (t = "current"), n === void 0 && (n = !1);
    const i = this, {
      params: s,
      slides: r,
      slidesGrid: o,
      slidesSizesGrid: l,
      size: a,
      activeIndex: u
    } = i;
    let c = 1;
    if (typeof s.slidesPerView == "number") return s.slidesPerView;
    if (s.centeredSlides) {
      let d = r[u] ? Math.ceil(r[u].swiperSlideSize) : 0, p;
      for (let g = u + 1; g < r.length; g += 1)
        r[g] && !p && (d += Math.ceil(r[g].swiperSlideSize), c += 1, d > a && (p = !0));
      for (let g = u - 1; g >= 0; g -= 1)
        r[g] && !p && (d += r[g].swiperSlideSize, c += 1, d > a && (p = !0));
    } else if (t === "current")
      for (let d = u + 1; d < r.length; d += 1)
        (n ? o[d] + l[d] - o[u] < a : o[d] - o[u] < a) && (c += 1);
    else
      for (let d = u - 1; d >= 0; d -= 1)
        o[u] - o[d] < a && (c += 1);
    return c;
  }
  update() {
    const t = this;
    if (!t || t.destroyed) return;
    const {
      snapGrid: n,
      params: i
    } = t;
    i.breakpoints && t.setBreakpoint(), [...t.el.querySelectorAll('[loading="lazy"]')].forEach((o) => {
      o.complete && oi(t, o);
    }), t.updateSize(), t.updateSlides(), t.updateProgress(), t.updateSlidesClasses();
    function s() {
      const o = t.rtlTranslate ? t.translate * -1 : t.translate, l = Math.min(Math.max(o, t.maxTranslate()), t.minTranslate());
      t.setTranslate(l), t.updateActiveIndex(), t.updateSlidesClasses();
    }
    let r;
    if (i.freeMode && i.freeMode.enabled && !i.cssMode)
      s(), i.autoHeight && t.updateAutoHeight();
    else {
      if ((i.slidesPerView === "auto" || i.slidesPerView > 1) && t.isEnd && !i.centeredSlides) {
        const o = t.virtual && i.virtual.enabled ? t.virtual.slides : t.slides;
        r = t.slideTo(o.length - 1, 0, !1, !0);
      } else
        r = t.slideTo(t.activeIndex, 0, !1, !0);
      r || s();
    }
    i.watchOverflow && n !== t.snapGrid && t.checkOverflow(), t.emit("update");
  }
  changeDirection(t, n) {
    n === void 0 && (n = !0);
    const i = this, s = i.params.direction;
    return t || (t = s === "horizontal" ? "vertical" : "horizontal"), t === s || t !== "horizontal" && t !== "vertical" || (i.el.classList.remove(`${i.params.containerModifierClass}${s}`), i.el.classList.add(`${i.params.containerModifierClass}${t}`), i.emitContainerClasses(), i.params.direction = t, i.slides.forEach((r) => {
      t === "vertical" ? r.style.width = "" : r.style.height = "";
    }), i.emit("changeDirection"), n && i.update()), i;
  }
  changeLanguageDirection(t) {
    const n = this;
    n.rtl && t === "rtl" || !n.rtl && t === "ltr" || (n.rtl = t === "rtl", n.rtlTranslate = n.params.direction === "horizontal" && n.rtl, n.rtl ? (n.el.classList.add(`${n.params.containerModifierClass}rtl`), n.el.dir = "rtl") : (n.el.classList.remove(`${n.params.containerModifierClass}rtl`), n.el.dir = "ltr"), n.update());
  }
  mount(t) {
    const n = this;
    if (n.mounted) return !0;
    let i = t || n.params.el;
    if (typeof i == "string" && (i = document.querySelector(i)), !i)
      return !1;
    i.swiper = n, i.parentNode && i.parentNode.host && i.parentNode.host.nodeName === n.params.swiperElementNodeName.toUpperCase() && (n.isElement = !0);
    const s = () => `.${(n.params.wrapperClass || "").trim().split(" ").join(".")}`;
    let o = i && i.shadowRoot && i.shadowRoot.querySelector ? i.shadowRoot.querySelector(s()) : Ze(i, s())[0];
    return !o && n.params.createElements && (o = ln("div", n.params.wrapperClass), i.append(o), Ze(i, `.${n.params.slideClass}`).forEach((l) => {
      o.append(l);
    })), Object.assign(n, {
      el: i,
      wrapperEl: o,
      slidesEl: n.isElement && !i.parentNode.host.slideSlots ? i.parentNode.host : o,
      hostEl: n.isElement ? i.parentNode.host : i,
      mounted: !0,
      // RTL
      rtl: i.dir.toLowerCase() === "rtl" || _t(i, "direction") === "rtl",
      rtlTranslate: n.params.direction === "horizontal" && (i.dir.toLowerCase() === "rtl" || _t(i, "direction") === "rtl"),
      wrongRTL: _t(o, "display") === "-webkit-box"
    }), !0;
  }
  init(t) {
    const n = this;
    if (n.initialized || n.mount(t) === !1) return n;
    n.emit("beforeInit"), n.params.breakpoints && n.setBreakpoint(), n.addClasses(), n.updateSize(), n.updateSlides(), n.params.watchOverflow && n.checkOverflow(), n.params.grabCursor && n.enabled && n.setGrabCursor(), n.params.loop && n.virtual && n.params.virtual.enabled ? n.slideTo(n.params.initialSlide + n.virtual.slidesBefore, 0, n.params.runCallbacksOnInit, !1, !0) : n.slideTo(n.params.initialSlide, 0, n.params.runCallbacksOnInit, !1, !0), n.params.loop && n.loopCreate(), n.attachEvents();
    const s = [...n.el.querySelectorAll('[loading="lazy"]')];
    return n.isElement && s.push(...n.hostEl.querySelectorAll('[loading="lazy"]')), s.forEach((r) => {
      r.complete ? oi(n, r) : r.addEventListener("load", (o) => {
        oi(n, o.target);
      });
    }), Ps(n), n.initialized = !0, Ps(n), n.emit("init"), n.emit("afterInit"), n;
  }
  destroy(t, n) {
    t === void 0 && (t = !0), n === void 0 && (n = !0);
    const i = this, {
      params: s,
      el: r,
      wrapperEl: o,
      slides: l
    } = i;
    return typeof i.params > "u" || i.destroyed || (i.emit("beforeDestroy"), i.initialized = !1, i.detachEvents(), s.loop && i.loopDestroy(), n && (i.removeClasses(), r && typeof r != "string" && r.removeAttribute("style"), o && o.removeAttribute("style"), l && l.length && l.forEach((a) => {
      a.classList.remove(s.slideVisibleClass, s.slideFullyVisibleClass, s.slideActiveClass, s.slideNextClass, s.slidePrevClass), a.removeAttribute("style"), a.removeAttribute("data-swiper-slide-index");
    })), i.emit("destroy"), Object.keys(i.eventsListeners).forEach((a) => {
      i.off(a);
    }), t !== !1 && (i.el && typeof i.el != "string" && (i.el.swiper = null), Zp(i)), i.destroyed = !0), null;
  }
  static extendDefaults(t) {
    Re(ns, t);
  }
  static get extendedDefaults() {
    return ns;
  }
  static get defaults() {
    return Ds;
  }
  static installModule(t) {
    ot.prototype.__modules__ || (ot.prototype.__modules__ = []);
    const n = ot.prototype.__modules__;
    typeof t == "function" && n.indexOf(t) < 0 && n.push(t);
  }
  static use(t) {
    return Array.isArray(t) ? (t.forEach((n) => ot.installModule(n)), ot) : (ot.installModule(t), ot);
  }
};
Object.keys(ts).forEach((e) => {
  Object.keys(ts[e]).forEach((t) => {
    ur.prototype[t] = ts[e][t];
  });
});
ur.use([uh, dh]);
const ya = [
  "eventsPrefix",
  "injectStyles",
  "injectStylesUrls",
  "modules",
  "init",
  "_direction",
  "oneWayMovement",
  "swiperElementNodeName",
  "touchEventsTarget",
  "initialSlide",
  "_speed",
  "cssMode",
  "updateOnWindowResize",
  "resizeObserver",
  "nested",
  "focusableElements",
  "_enabled",
  "_width",
  "_height",
  "preventInteractionOnTransition",
  "userAgent",
  "url",
  "_edgeSwipeDetection",
  "_edgeSwipeThreshold",
  "_freeMode",
  "_autoHeight",
  "setWrapperSize",
  "virtualTranslate",
  "_effect",
  "breakpoints",
  "breakpointsBase",
  "_spaceBetween",
  "_slidesPerView",
  "maxBackfaceHiddenSlides",
  "_grid",
  "_slidesPerGroup",
  "_slidesPerGroupSkip",
  "_slidesPerGroupAuto",
  "_centeredSlides",
  "_centeredSlidesBounds",
  "_slidesOffsetBefore",
  "_slidesOffsetAfter",
  "normalizeSlideIndex",
  "_centerInsufficientSlides",
  "_watchOverflow",
  "roundLengths",
  "touchRatio",
  "touchAngle",
  "simulateTouch",
  "_shortSwipes",
  "_longSwipes",
  "longSwipesRatio",
  "longSwipesMs",
  "_followFinger",
  "allowTouchMove",
  "_threshold",
  "touchMoveStopPropagation",
  "touchStartPreventDefault",
  "touchStartForcePreventDefault",
  "touchReleaseOnEdges",
  "uniqueNavElements",
  "_resistance",
  "_resistanceRatio",
  "_watchSlidesProgress",
  "_grabCursor",
  "preventClicks",
  "preventClicksPropagation",
  "_slideToClickedSlide",
  "_loop",
  "loopAdditionalSlides",
  "loopAddBlankSlides",
  "loopPreventsSliding",
  "_rewind",
  "_allowSlidePrev",
  "_allowSlideNext",
  "_swipeHandler",
  "_noSwiping",
  "noSwipingClass",
  "noSwipingSelector",
  "passiveListeners",
  "containerModifierClass",
  "slideClass",
  "slideActiveClass",
  "slideVisibleClass",
  "slideFullyVisibleClass",
  "slideNextClass",
  "slidePrevClass",
  "slideBlankClass",
  "wrapperClass",
  "lazyPreloaderClass",
  "lazyPreloadPrevNext",
  "runCallbacksOnInit",
  "observer",
  "observeParents",
  "observeSlideChildren",
  // modules
  "a11y",
  "_autoplay",
  "_controller",
  "coverflowEffect",
  "cubeEffect",
  "fadeEffect",
  "flipEffect",
  "creativeEffect",
  "cardsEffect",
  "hashNavigation",
  "history",
  "keyboard",
  "mousewheel",
  "_navigation",
  "_pagination",
  "parallax",
  "_scrollbar",
  "_thumbs",
  "virtual",
  "zoom",
  "control"
];
function Kt(e) {
  return typeof e == "object" && e !== null && e.constructor && Object.prototype.toString.call(e).slice(8, -1) === "Object" && !e.__swiper__;
}
function rn(e, t) {
  const n = ["__proto__", "constructor", "prototype"];
  Object.keys(t).filter((i) => n.indexOf(i) < 0).forEach((i) => {
    typeof e[i] > "u" ? e[i] = t[i] : Kt(t[i]) && Kt(e[i]) && Object.keys(t[i]).length > 0 ? t[i].__swiper__ ? e[i] = t[i] : rn(e[i], t[i]) : e[i] = t[i];
  });
}
function Ea(e) {
  return e === void 0 && (e = {}), e.navigation && typeof e.navigation.nextEl > "u" && typeof e.navigation.prevEl > "u";
}
function wa(e) {
  return e === void 0 && (e = {}), e.pagination && typeof e.pagination.el > "u";
}
function _a(e) {
  return e === void 0 && (e = {}), e.scrollbar && typeof e.scrollbar.el > "u";
}
function Sa(e) {
  e === void 0 && (e = "");
  const t = e.split(" ").map((i) => i.trim()).filter((i) => !!i), n = [];
  return t.forEach((i) => {
    n.indexOf(i) < 0 && n.push(i);
  }), n.join(" ");
}
function gm(e) {
  return e === void 0 && (e = ""), e ? e.includes("swiper-wrapper") ? e : `swiper-wrapper ${e}` : "swiper-wrapper";
}
function vm(e) {
  let {
    swiper: t,
    slides: n,
    passedParams: i,
    changedParams: s,
    nextEl: r,
    prevEl: o,
    scrollbarEl: l,
    paginationEl: a
  } = e;
  const u = s.filter((N) => N !== "children" && N !== "direction" && N !== "wrapperClass"), {
    params: c,
    pagination: d,
    navigation: p,
    scrollbar: g,
    virtual: m,
    thumbs: b
  } = t;
  let w, x, v, h, S, O, B, j;
  s.includes("thumbs") && i.thumbs && i.thumbs.swiper && c.thumbs && !c.thumbs.swiper && (w = !0), s.includes("controller") && i.controller && i.controller.control && c.controller && !c.controller.control && (x = !0), s.includes("pagination") && i.pagination && (i.pagination.el || a) && (c.pagination || c.pagination === !1) && d && !d.el && (v = !0), s.includes("scrollbar") && i.scrollbar && (i.scrollbar.el || l) && (c.scrollbar || c.scrollbar === !1) && g && !g.el && (h = !0), s.includes("navigation") && i.navigation && (i.navigation.prevEl || o) && (i.navigation.nextEl || r) && (c.navigation || c.navigation === !1) && p && !p.prevEl && !p.nextEl && (S = !0);
  const q = (N) => {
    t[N] && (t[N].destroy(), N === "navigation" ? (t.isElement && (t[N].prevEl.remove(), t[N].nextEl.remove()), c[N].prevEl = void 0, c[N].nextEl = void 0, t[N].prevEl = void 0, t[N].nextEl = void 0) : (t.isElement && t[N].el.remove(), c[N].el = void 0, t[N].el = void 0));
  };
  s.includes("loop") && t.isElement && (c.loop && !i.loop ? O = !0 : !c.loop && i.loop ? B = !0 : j = !0), u.forEach((N) => {
    if (Kt(c[N]) && Kt(i[N]))
      Object.assign(c[N], i[N]), (N === "navigation" || N === "pagination" || N === "scrollbar") && "enabled" in i[N] && !i[N].enabled && q(N);
    else {
      const I = i[N];
      (I === !0 || I === !1) && (N === "navigation" || N === "pagination" || N === "scrollbar") ? I === !1 && q(N) : c[N] = i[N];
    }
  }), u.includes("controller") && !x && t.controller && t.controller.control && c.controller && c.controller.control && (t.controller.control = c.controller.control), s.includes("children") && n && m && c.virtual.enabled ? (m.slides = n, m.update(!0)) : s.includes("virtual") && m && c.virtual.enabled && (n && (m.slides = n), m.update(!0)), s.includes("children") && n && c.loop && (j = !0), w && b.init() && b.update(!0), x && (t.controller.control = c.controller.control), v && (t.isElement && (!a || typeof a == "string") && (a = document.createElement("div"), a.classList.add("swiper-pagination"), a.part.add("pagination"), t.el.appendChild(a)), a && (c.pagination.el = a), d.init(), d.render(), d.update()), h && (t.isElement && (!l || typeof l == "string") && (l = document.createElement("div"), l.classList.add("swiper-scrollbar"), l.part.add("scrollbar"), t.el.appendChild(l)), l && (c.scrollbar.el = l), g.init(), g.updateSize(), g.setTranslate()), S && (t.isElement && ((!r || typeof r == "string") && (r = document.createElement("div"), r.classList.add("swiper-button-next"), r.innerHTML = t.hostEl.constructor.nextButtonSvg, r.part.add("button-next"), t.el.appendChild(r)), (!o || typeof o == "string") && (o = document.createElement("div"), o.classList.add("swiper-button-prev"), o.innerHTML = t.hostEl.constructor.prevButtonSvg, o.part.add("button-prev"), t.el.appendChild(o))), r && (c.navigation.nextEl = r), o && (c.navigation.prevEl = o), p.init(), p.update()), s.includes("allowSlideNext") && (t.allowSlideNext = i.allowSlideNext), s.includes("allowSlidePrev") && (t.allowSlidePrev = i.allowSlidePrev), s.includes("direction") && t.changeDirection(i.direction, !1), (O || j) && t.loopDestroy(), (B || j) && t.loopCreate(), t.update();
}
function wo(e, t) {
  e === void 0 && (e = {});
  const n = {
    on: {}
  }, i = {}, s = {};
  rn(n, Ds), n._emitClasses = !0, n.init = !1;
  const r = {}, o = ya.map((a) => a.replace(/_/, "")), l = Object.assign({}, e);
  return Object.keys(l).forEach((a) => {
    typeof e[a] > "u" || (o.indexOf(a) >= 0 ? Kt(e[a]) ? (n[a] = {}, s[a] = {}, rn(n[a], e[a]), rn(s[a], e[a])) : (n[a] = e[a], s[a] = e[a]) : a.search(/on[A-Z]/) === 0 && typeof e[a] == "function" ? n.on[`${a[2].toLowerCase()}${a.substr(3)}`] = e[a] : r[a] = e[a]);
  }), ["navigation", "pagination", "scrollbar"].forEach((a) => {
    n[a] === !0 && (n[a] = {}), n[a] === !1 && delete n[a];
  }), {
    params: n,
    passedParams: s,
    rest: r,
    events: i
  };
}
function bm(e, t) {
  let {
    el: n,
    nextEl: i,
    prevEl: s,
    paginationEl: r,
    scrollbarEl: o,
    swiper: l
  } = e;
  Ea(t) && i && s && (l.params.navigation.nextEl = i, l.originalParams.navigation.nextEl = i, l.params.navigation.prevEl = s, l.originalParams.navigation.prevEl = s), wa(t) && r && (l.params.pagination.el = r, l.originalParams.pagination.el = r), _a(t) && o && (l.params.scrollbar.el = o, l.originalParams.scrollbar.el = o), l.init(n);
}
function ym(e, t, n, i, s) {
  const r = [];
  if (!t) return r;
  const o = (a) => {
    r.indexOf(a) < 0 && r.push(a);
  };
  if (n && i) {
    const a = i.map(s), u = n.map(s);
    a.join("") !== u.join("") && o("children"), i.length !== n.length && o("children");
  }
  return ya.filter((a) => a[0] === "_").map((a) => a.replace(/_/, "")).forEach((a) => {
    if (a in e && a in t)
      if (Kt(e[a]) && Kt(t[a])) {
        const u = Object.keys(e[a]), c = Object.keys(t[a]);
        u.length !== c.length ? o(a) : (u.forEach((d) => {
          e[a][d] !== t[a][d] && o(a);
        }), c.forEach((d) => {
          e[a][d] !== t[a][d] && o(a);
        }));
      } else e[a] !== t[a] && o(a);
  }), r;
}
const Em = (e) => {
  !e || e.destroyed || !e.params.virtual || e.params.virtual && !e.params.virtual.enabled || (e.updateSlides(), e.updateProgress(), e.updateSlidesClasses(), e.parallax && e.params.parallax && e.params.parallax.enabled && e.parallax.setTranslate());
};
function is(e, t, n) {
  e === void 0 && (e = {});
  const i = [], s = {
    "container-start": [],
    "container-end": [],
    "wrapper-start": [],
    "wrapper-end": []
  }, r = (o, l) => {
    Array.isArray(o) && o.forEach((a) => {
      const u = typeof a.type == "symbol";
      l === "default" && (l = "container-end"), u && a.children ? r(a.children, l) : a.type && (a.type.name === "SwiperSlide" || a.type.name === "AsyncComponentWrapper") || a.componentOptions && a.componentOptions.tag === "SwiperSlide" ? i.push(a) : s[l] && s[l].push(a);
    });
  };
  return Object.keys(e).forEach((o) => {
    if (typeof e[o] != "function") return;
    const l = e[o]();
    r(l, o);
  }), n.value = t.value, t.value = i, {
    slides: i,
    slots: s
  };
}
function wm(e, t, n) {
  if (!n) return null;
  const i = (c) => {
    let d = c;
    return c < 0 ? d = t.length + c : d >= t.length && (d = d - t.length), d;
  }, s = e.value.isHorizontal() ? {
    [e.value.rtlTranslate ? "right" : "left"]: `${n.offset}px`
  } : {
    top: `${n.offset}px`
  }, {
    from: r,
    to: o
  } = n, l = e.value.params.loop ? -t.length : 0, a = e.value.params.loop ? t.length * 2 : t.length, u = [];
  for (let c = l; c < a; c += 1)
    c >= r && c <= o && u.length < t.length && u.push(t[i(c)]);
  return u.map((c) => {
    if (c.props || (c.props = {}), c.props.style || (c.props.style = {}), c.props.swiperRef = e, c.props.style = s, c.type)
      return Fe(c.type, {
        ...c.props
      }, c.children);
    if (c.componentOptions)
      return Fe(c.componentOptions.Ctor, {
        ...c.props
      }, c.componentOptions.children);
  });
}
const _m = {
  name: "Swiper",
  props: {
    tag: {
      type: String,
      default: "div"
    },
    wrapperTag: {
      type: String,
      default: "div"
    },
    modules: {
      type: Array,
      default: void 0
    },
    init: {
      type: Boolean,
      default: void 0
    },
    direction: {
      type: String,
      default: void 0
    },
    oneWayMovement: {
      type: Boolean,
      default: void 0
    },
    swiperElementNodeName: {
      type: String,
      default: "SWIPER-CONTAINER"
    },
    touchEventsTarget: {
      type: String,
      default: void 0
    },
    initialSlide: {
      type: Number,
      default: void 0
    },
    speed: {
      type: Number,
      default: void 0
    },
    cssMode: {
      type: Boolean,
      default: void 0
    },
    updateOnWindowResize: {
      type: Boolean,
      default: void 0
    },
    resizeObserver: {
      type: Boolean,
      default: void 0
    },
    nested: {
      type: Boolean,
      default: void 0
    },
    focusableElements: {
      type: String,
      default: void 0
    },
    width: {
      type: Number,
      default: void 0
    },
    height: {
      type: Number,
      default: void 0
    },
    preventInteractionOnTransition: {
      type: Boolean,
      default: void 0
    },
    userAgent: {
      type: String,
      default: void 0
    },
    url: {
      type: String,
      default: void 0
    },
    edgeSwipeDetection: {
      type: [Boolean, String],
      default: void 0
    },
    edgeSwipeThreshold: {
      type: Number,
      default: void 0
    },
    autoHeight: {
      type: Boolean,
      default: void 0
    },
    setWrapperSize: {
      type: Boolean,
      default: void 0
    },
    virtualTranslate: {
      type: Boolean,
      default: void 0
    },
    effect: {
      type: String,
      default: void 0
    },
    breakpoints: {
      type: Object,
      default: void 0
    },
    breakpointsBase: {
      type: String,
      default: void 0
    },
    spaceBetween: {
      type: [Number, String],
      default: void 0
    },
    slidesPerView: {
      type: [Number, String],
      default: void 0
    },
    maxBackfaceHiddenSlides: {
      type: Number,
      default: void 0
    },
    slidesPerGroup: {
      type: Number,
      default: void 0
    },
    slidesPerGroupSkip: {
      type: Number,
      default: void 0
    },
    slidesPerGroupAuto: {
      type: Boolean,
      default: void 0
    },
    centeredSlides: {
      type: Boolean,
      default: void 0
    },
    centeredSlidesBounds: {
      type: Boolean,
      default: void 0
    },
    slidesOffsetBefore: {
      type: Number,
      default: void 0
    },
    slidesOffsetAfter: {
      type: Number,
      default: void 0
    },
    normalizeSlideIndex: {
      type: Boolean,
      default: void 0
    },
    centerInsufficientSlides: {
      type: Boolean,
      default: void 0
    },
    watchOverflow: {
      type: Boolean,
      default: void 0
    },
    roundLengths: {
      type: Boolean,
      default: void 0
    },
    touchRatio: {
      type: Number,
      default: void 0
    },
    touchAngle: {
      type: Number,
      default: void 0
    },
    simulateTouch: {
      type: Boolean,
      default: void 0
    },
    shortSwipes: {
      type: Boolean,
      default: void 0
    },
    longSwipes: {
      type: Boolean,
      default: void 0
    },
    longSwipesRatio: {
      type: Number,
      default: void 0
    },
    longSwipesMs: {
      type: Number,
      default: void 0
    },
    followFinger: {
      type: Boolean,
      default: void 0
    },
    allowTouchMove: {
      type: Boolean,
      default: void 0
    },
    threshold: {
      type: Number,
      default: void 0
    },
    touchMoveStopPropagation: {
      type: Boolean,
      default: void 0
    },
    touchStartPreventDefault: {
      type: Boolean,
      default: void 0
    },
    touchStartForcePreventDefault: {
      type: Boolean,
      default: void 0
    },
    touchReleaseOnEdges: {
      type: Boolean,
      default: void 0
    },
    uniqueNavElements: {
      type: Boolean,
      default: void 0
    },
    resistance: {
      type: Boolean,
      default: void 0
    },
    resistanceRatio: {
      type: Number,
      default: void 0
    },
    watchSlidesProgress: {
      type: Boolean,
      default: void 0
    },
    grabCursor: {
      type: Boolean,
      default: void 0
    },
    preventClicks: {
      type: Boolean,
      default: void 0
    },
    preventClicksPropagation: {
      type: Boolean,
      default: void 0
    },
    slideToClickedSlide: {
      type: Boolean,
      default: void 0
    },
    loop: {
      type: Boolean,
      default: void 0
    },
    loopedSlides: {
      type: Number,
      default: void 0
    },
    loopPreventsSliding: {
      type: Boolean,
      default: void 0
    },
    rewind: {
      type: Boolean,
      default: void 0
    },
    allowSlidePrev: {
      type: Boolean,
      default: void 0
    },
    allowSlideNext: {
      type: Boolean,
      default: void 0
    },
    swipeHandler: {
      type: Boolean,
      default: void 0
    },
    noSwiping: {
      type: Boolean,
      default: void 0
    },
    noSwipingClass: {
      type: String,
      default: void 0
    },
    noSwipingSelector: {
      type: String,
      default: void 0
    },
    passiveListeners: {
      type: Boolean,
      default: void 0
    },
    containerModifierClass: {
      type: String,
      default: void 0
    },
    slideClass: {
      type: String,
      default: void 0
    },
    slideActiveClass: {
      type: String,
      default: void 0
    },
    slideVisibleClass: {
      type: String,
      default: void 0
    },
    slideFullyVisibleClass: {
      type: String,
      default: void 0
    },
    slideBlankClass: {
      type: String,
      default: void 0
    },
    slideNextClass: {
      type: String,
      default: void 0
    },
    slidePrevClass: {
      type: String,
      default: void 0
    },
    wrapperClass: {
      type: String,
      default: void 0
    },
    lazyPreloaderClass: {
      type: String,
      default: void 0
    },
    lazyPreloadPrevNext: {
      type: Number,
      default: void 0
    },
    runCallbacksOnInit: {
      type: Boolean,
      default: void 0
    },
    observer: {
      type: Boolean,
      default: void 0
    },
    observeParents: {
      type: Boolean,
      default: void 0
    },
    observeSlideChildren: {
      type: Boolean,
      default: void 0
    },
    a11y: {
      type: [Boolean, Object],
      default: void 0
    },
    autoplay: {
      type: [Boolean, Object],
      default: void 0
    },
    controller: {
      type: Object,
      default: void 0
    },
    coverflowEffect: {
      type: Object,
      default: void 0
    },
    cubeEffect: {
      type: Object,
      default: void 0
    },
    fadeEffect: {
      type: Object,
      default: void 0
    },
    flipEffect: {
      type: Object,
      default: void 0
    },
    creativeEffect: {
      type: Object,
      default: void 0
    },
    cardsEffect: {
      type: Object,
      default: void 0
    },
    hashNavigation: {
      type: [Boolean, Object],
      default: void 0
    },
    history: {
      type: [Boolean, Object],
      default: void 0
    },
    keyboard: {
      type: [Boolean, Object],
      default: void 0
    },
    mousewheel: {
      type: [Boolean, Object],
      default: void 0
    },
    navigation: {
      type: [Boolean, Object],
      default: void 0
    },
    pagination: {
      type: [Boolean, Object],
      default: void 0
    },
    parallax: {
      type: [Boolean, Object],
      default: void 0
    },
    scrollbar: {
      type: [Boolean, Object],
      default: void 0
    },
    thumbs: {
      type: Object,
      default: void 0
    },
    virtual: {
      type: [Boolean, Object],
      default: void 0
    },
    zoom: {
      type: [Boolean, Object],
      default: void 0
    },
    grid: {
      type: [Object],
      default: void 0
    },
    freeMode: {
      type: [Boolean, Object],
      default: void 0
    },
    enabled: {
      type: Boolean,
      default: void 0
    }
  },
  emits: ["_beforeBreakpoint", "_containerClasses", "_slideClass", "_slideClasses", "_swiper", "_freeModeNoMomentumRelease", "activeIndexChange", "afterInit", "autoplay", "autoplayStart", "autoplayStop", "autoplayPause", "autoplayResume", "autoplayTimeLeft", "beforeDestroy", "beforeInit", "beforeLoopFix", "beforeResize", "beforeSlideChangeStart", "beforeTransitionStart", "breakpoint", "changeDirection", "click", "disable", "doubleTap", "doubleClick", "destroy", "enable", "fromEdge", "hashChange", "hashSet", "init", "keyPress", "lock", "loopFix", "momentumBounce", "navigationHide", "navigationShow", "navigationPrev", "navigationNext", "observerUpdate", "orientationchange", "paginationHide", "paginationRender", "paginationShow", "paginationUpdate", "progress", "reachBeginning", "reachEnd", "realIndexChange", "resize", "scroll", "scrollbarDragEnd", "scrollbarDragMove", "scrollbarDragStart", "setTransition", "setTranslate", "slidesUpdated", "slideChange", "slideChangeTransitionEnd", "slideChangeTransitionStart", "slideNextTransitionEnd", "slideNextTransitionStart", "slidePrevTransitionEnd", "slidePrevTransitionStart", "slideResetTransitionStart", "slideResetTransitionEnd", "sliderMove", "sliderFirstMove", "slidesLengthChange", "slidesGridLengthChange", "snapGridLengthChange", "snapIndexChange", "swiper", "tap", "toEdge", "touchEnd", "touchMove", "touchMoveOpposite", "touchStart", "transitionEnd", "transitionStart", "unlock", "update", "virtualUpdate", "zoomChange"],
  setup(e, t) {
    let {
      slots: n,
      emit: i
    } = t;
    const {
      tag: s,
      wrapperTag: r
    } = e, o = Pe("swiper"), l = Pe(null), a = Pe(!1), u = Pe(!1), c = Pe(null), d = Pe(null), p = Pe(null), g = {
      value: []
    }, m = {
      value: []
    }, b = Pe(null), w = Pe(null), x = Pe(null), v = Pe(null), {
      params: h,
      passedParams: S
    } = wo(e);
    is(n, g, m), p.value = S, m.value = g.value;
    const O = () => {
      is(n, g, m), a.value = !0;
    };
    h.onAny = function(q) {
      for (var N = arguments.length, I = new Array(N > 1 ? N - 1 : 0), G = 1; G < N; G++)
        I[G - 1] = arguments[G];
      i(q, ...I);
    }, Object.assign(h.on, {
      _beforeBreakpoint: O,
      _containerClasses(q, N) {
        o.value = N;
      }
    });
    const B = {
      ...h
    };
    if (delete B.wrapperClass, d.value = new ur(B), d.value.virtual && d.value.params.virtual.enabled) {
      d.value.virtual.slides = g.value;
      const q = {
        cache: !1,
        slides: g.value,
        renderExternal: (N) => {
          l.value = N;
        },
        renderExternalUpdate: !1
      };
      rn(d.value.params.virtual, q), rn(d.value.originalParams.virtual, q);
    }
    Ys(() => {
      !u.value && d.value && (d.value.emitSlidesClasses(), u.value = !0);
      const {
        passedParams: q
      } = wo(e), N = ym(q, p.value, g.value, m.value, (I) => I.props && I.props.key);
      p.value = q, (N.length || a.value) && d.value && !d.value.destroyed && vm({
        swiper: d.value,
        slides: g.value,
        passedParams: q,
        changedParams: N,
        nextEl: b.value,
        prevEl: w.value,
        scrollbarEl: v.value,
        paginationEl: x.value
      }), a.value = !1;
    }), Qs("swiper", d), Zn(l, () => {
      Xo(() => {
        Em(d.value);
      });
    }), Ks(() => {
      c.value && (bm({
        el: c.value,
        nextEl: b.value,
        prevEl: w.value,
        paginationEl: x.value,
        scrollbarEl: v.value,
        swiper: d.value
      }, h), i("swiper", d.value));
    }), Xs(() => {
      d.value && !d.value.destroyed && d.value.destroy(!0, !1);
    });
    function j(q) {
      return h.virtual ? wm(d, q, l.value) : (q.forEach((N, I) => {
        N.props || (N.props = {}), N.props.swiperRef = d, N.props.swiperSlideIndex = I;
      }), q);
    }
    return () => {
      const {
        slides: q,
        slots: N
      } = is(n, g, m);
      return Fe(s, {
        ref: c,
        class: Sa(o.value)
      }, [N["container-start"], Fe(r, {
        class: gm(h.wrapperClass)
      }, [N["wrapper-start"], j(q), N["wrapper-end"]]), Ea(e) && [Fe("div", {
        ref: w,
        class: "swiper-button-prev"
      }), Fe("div", {
        ref: b,
        class: "swiper-button-next"
      })], _a(e) && Fe("div", {
        ref: v,
        class: "swiper-scrollbar"
      }), wa(e) && Fe("div", {
        ref: x,
        class: "swiper-pagination"
      }), N["container-end"]]);
    };
  }
}, Sm = {
  name: "SwiperSlide",
  props: {
    tag: {
      type: String,
      default: "div"
    },
    swiperRef: {
      type: Object,
      required: !1
    },
    swiperSlideIndex: {
      type: Number,
      default: void 0,
      required: !1
    },
    zoom: {
      type: Boolean,
      default: void 0,
      required: !1
    },
    lazy: {
      type: Boolean,
      default: !1,
      required: !1
    },
    virtualIndex: {
      type: [String, Number],
      default: void 0
    }
  },
  setup(e, t) {
    let {
      slots: n
    } = t, i = !1;
    const {
      swiperRef: s
    } = e, r = Pe(null), o = Pe("swiper-slide"), l = Pe(!1);
    function a(d, p, g) {
      p === r.value && (o.value = g);
    }
    Ks(() => {
      !s || !s.value || (s.value.on("_slideClass", a), i = !0);
    }), ml(() => {
      i || !s || !s.value || (s.value.on("_slideClass", a), i = !0);
    }), Ys(() => {
      !r.value || !s || !s.value || (typeof e.swiperSlideIndex < "u" && (r.value.swiperSlideIndex = e.swiperSlideIndex), s.value.destroyed && o.value !== "swiper-slide" && (o.value = "swiper-slide"));
    }), Xs(() => {
      !s || !s.value || s.value.off("_slideClass", a);
    });
    const u = Bl(() => ({
      isActive: o.value.indexOf("swiper-slide-active") >= 0,
      isVisible: o.value.indexOf("swiper-slide-visible") >= 0,
      isPrev: o.value.indexOf("swiper-slide-prev") >= 0,
      isNext: o.value.indexOf("swiper-slide-next") >= 0
    }));
    Qs("swiperSlide", u);
    const c = () => {
      l.value = !0;
    };
    return () => Fe(e.tag, {
      class: Sa(`${o.value}`),
      ref: r,
      "data-swiper-slide-index": typeof e.virtualIndex > "u" && s && s.value && s.value.params.loop ? e.swiperSlideIndex : e.virtualIndex,
      onLoadCapture: c
    }, e.zoom ? Fe("div", {
      class: "swiper-zoom-container",
      "data-swiper-zoom": typeof e.zoom == "number" ? e.zoom : void 0
    }, [n.default && n.default(u.value), e.lazy && !l.value && Fe("div", {
      class: "swiper-lazy-preloader"
    })]) : [n.default && n.default(u.value), e.lazy && !l.value && Fe("div", {
      class: "swiper-lazy-preloader"
    })]);
  }
};
function dr(e, t, n, i) {
  return e.params.createElements && Object.keys(i).forEach((s) => {
    if (!n[s] && n.auto === !0) {
      let r = Ze(e.el, `.${i[s]}`)[0];
      r || (r = ln("div", i[s]), r.className = i[s], e.el.append(r)), n[s] = r, t[s] = r;
    }
  }), n;
}
function xm(e) {
  let {
    swiper: t,
    extendParams: n,
    on: i,
    emit: s
  } = e;
  n({
    navigation: {
      nextEl: null,
      prevEl: null,
      hideOnClick: !1,
      disabledClass: "swiper-button-disabled",
      hiddenClass: "swiper-button-hidden",
      lockClass: "swiper-button-lock",
      navigationDisabledClass: "swiper-navigation-disabled"
    }
  }), t.navigation = {
    nextEl: null,
    prevEl: null
  };
  function r(m) {
    let b;
    return m && typeof m == "string" && t.isElement && (b = t.el.querySelector(m) || t.hostEl.querySelector(m), b) ? b : (m && (typeof m == "string" && (b = [...document.querySelectorAll(m)]), t.params.uniqueNavElements && typeof m == "string" && b && b.length > 1 && t.el.querySelectorAll(m).length === 1 ? b = t.el.querySelector(m) : b && b.length === 1 && (b = b[0])), m && !b ? m : b);
  }
  function o(m, b) {
    const w = t.params.navigation;
    m = ie(m), m.forEach((x) => {
      x && (x.classList[b ? "add" : "remove"](...w.disabledClass.split(" ")), x.tagName === "BUTTON" && (x.disabled = b), t.params.watchOverflow && t.enabled && x.classList[t.isLocked ? "add" : "remove"](w.lockClass));
    });
  }
  function l() {
    const {
      nextEl: m,
      prevEl: b
    } = t.navigation;
    if (t.params.loop) {
      o(b, !1), o(m, !1);
      return;
    }
    o(b, t.isBeginning && !t.params.rewind), o(m, t.isEnd && !t.params.rewind);
  }
  function a(m) {
    m.preventDefault(), !(t.isBeginning && !t.params.loop && !t.params.rewind) && (t.slidePrev(), s("navigationPrev"));
  }
  function u(m) {
    m.preventDefault(), !(t.isEnd && !t.params.loop && !t.params.rewind) && (t.slideNext(), s("navigationNext"));
  }
  function c() {
    const m = t.params.navigation;
    if (t.params.navigation = dr(t, t.originalParams.navigation, t.params.navigation, {
      nextEl: "swiper-button-next",
      prevEl: "swiper-button-prev"
    }), !(m.nextEl || m.prevEl)) return;
    let b = r(m.nextEl), w = r(m.prevEl);
    Object.assign(t.navigation, {
      nextEl: b,
      prevEl: w
    }), b = ie(b), w = ie(w);
    const x = (v, h) => {
      v && v.addEventListener("click", h === "next" ? u : a), !t.enabled && v && v.classList.add(...m.lockClass.split(" "));
    };
    b.forEach((v) => x(v, "next")), w.forEach((v) => x(v, "prev"));
  }
  function d() {
    let {
      nextEl: m,
      prevEl: b
    } = t.navigation;
    m = ie(m), b = ie(b);
    const w = (x, v) => {
      x.removeEventListener("click", v === "next" ? u : a), x.classList.remove(...t.params.navigation.disabledClass.split(" "));
    };
    m.forEach((x) => w(x, "next")), b.forEach((x) => w(x, "prev"));
  }
  i("init", () => {
    t.params.navigation.enabled === !1 ? g() : (c(), l());
  }), i("toEdge fromEdge lock unlock", () => {
    l();
  }), i("destroy", () => {
    d();
  }), i("enable disable", () => {
    let {
      nextEl: m,
      prevEl: b
    } = t.navigation;
    if (m = ie(m), b = ie(b), t.enabled) {
      l();
      return;
    }
    [...m, ...b].filter((w) => !!w).forEach((w) => w.classList.add(t.params.navigation.lockClass));
  }), i("click", (m, b) => {
    let {
      nextEl: w,
      prevEl: x
    } = t.navigation;
    w = ie(w), x = ie(x);
    const v = b.target;
    let h = x.includes(v) || w.includes(v);
    if (t.isElement && !h) {
      const S = b.path || b.composedPath && b.composedPath();
      S && (h = S.find((O) => w.includes(O) || x.includes(O)));
    }
    if (t.params.navigation.hideOnClick && !h) {
      if (t.pagination && t.params.pagination && t.params.pagination.clickable && (t.pagination.el === v || t.pagination.el.contains(v))) return;
      let S;
      w.length ? S = w[0].classList.contains(t.params.navigation.hiddenClass) : x.length && (S = x[0].classList.contains(t.params.navigation.hiddenClass)), s(S === !0 ? "navigationShow" : "navigationHide"), [...w, ...x].filter((O) => !!O).forEach((O) => O.classList.toggle(t.params.navigation.hiddenClass));
    }
  });
  const p = () => {
    t.el.classList.remove(...t.params.navigation.navigationDisabledClass.split(" ")), c(), l();
  }, g = () => {
    t.el.classList.add(...t.params.navigation.navigationDisabledClass.split(" ")), d();
  };
  Object.assign(t.navigation, {
    enable: p,
    disable: g,
    update: l,
    init: c,
    destroy: d
  });
}
function at(e) {
  return e === void 0 && (e = ""), `.${e.trim().replace(/([\.:!+\/])/g, "\\$1").replace(/ /g, ".")}`;
}
function Tm(e) {
  let {
    swiper: t,
    extendParams: n,
    on: i,
    emit: s
  } = e;
  const r = "swiper-pagination";
  n({
    pagination: {
      el: null,
      bulletElement: "span",
      clickable: !1,
      hideOnClick: !1,
      renderBullet: null,
      renderProgressbar: null,
      renderFraction: null,
      renderCustom: null,
      progressbarOpposite: !1,
      type: "bullets",
      // 'bullets' or 'progressbar' or 'fraction' or 'custom'
      dynamicBullets: !1,
      dynamicMainBullets: 1,
      formatFractionCurrent: (v) => v,
      formatFractionTotal: (v) => v,
      bulletClass: `${r}-bullet`,
      bulletActiveClass: `${r}-bullet-active`,
      modifierClass: `${r}-`,
      currentClass: `${r}-current`,
      totalClass: `${r}-total`,
      hiddenClass: `${r}-hidden`,
      progressbarFillClass: `${r}-progressbar-fill`,
      progressbarOppositeClass: `${r}-progressbar-opposite`,
      clickableClass: `${r}-clickable`,
      lockClass: `${r}-lock`,
      horizontalClass: `${r}-horizontal`,
      verticalClass: `${r}-vertical`,
      paginationDisabledClass: `${r}-disabled`
    }
  }), t.pagination = {
    el: null,
    bullets: []
  };
  let o, l = 0;
  function a() {
    return !t.params.pagination.el || !t.pagination.el || Array.isArray(t.pagination.el) && t.pagination.el.length === 0;
  }
  function u(v, h) {
    const {
      bulletActiveClass: S
    } = t.params.pagination;
    v && (v = v[`${h === "prev" ? "previous" : "next"}ElementSibling`], v && (v.classList.add(`${S}-${h}`), v = v[`${h === "prev" ? "previous" : "next"}ElementSibling`], v && v.classList.add(`${S}-${h}-${h}`)));
  }
  function c(v, h, S) {
    if (v = v % S, h = h % S, h === v + 1)
      return "next";
    if (h === v - 1)
      return "previous";
  }
  function d(v) {
    const h = v.target.closest(at(t.params.pagination.bulletClass));
    if (!h)
      return;
    v.preventDefault();
    const S = Dn(h) * t.params.slidesPerGroup;
    if (t.params.loop) {
      if (t.realIndex === S) return;
      const O = c(t.realIndex, S, t.slides.length);
      O === "next" ? t.slideNext() : O === "previous" ? t.slidePrev() : t.slideToLoop(S);
    } else
      t.slideTo(S);
  }
  function p() {
    const v = t.rtl, h = t.params.pagination;
    if (a()) return;
    let S = t.pagination.el;
    S = ie(S);
    let O, B;
    const j = t.virtual && t.params.virtual.enabled ? t.virtual.slides.length : t.slides.length, q = t.params.loop ? Math.ceil(j / t.params.slidesPerGroup) : t.snapGrid.length;
    if (t.params.loop ? (B = t.previousRealIndex || 0, O = t.params.slidesPerGroup > 1 ? Math.floor(t.realIndex / t.params.slidesPerGroup) : t.realIndex) : typeof t.snapIndex < "u" ? (O = t.snapIndex, B = t.previousSnapIndex) : (B = t.previousIndex || 0, O = t.activeIndex || 0), h.type === "bullets" && t.pagination.bullets && t.pagination.bullets.length > 0) {
      const N = t.pagination.bullets;
      let I, G, A;
      if (h.dynamicBullets && (o = Ns(N[0], t.isHorizontal() ? "width" : "height"), S.forEach((L) => {
        L.style[t.isHorizontal() ? "width" : "height"] = `${o * (h.dynamicMainBullets + 4)}px`;
      }), h.dynamicMainBullets > 1 && B !== void 0 && (l += O - (B || 0), l > h.dynamicMainBullets - 1 ? l = h.dynamicMainBullets - 1 : l < 0 && (l = 0)), I = Math.max(O - l, 0), G = I + (Math.min(N.length, h.dynamicMainBullets) - 1), A = (G + I) / 2), N.forEach((L) => {
        const z = [...["", "-next", "-next-next", "-prev", "-prev-prev", "-main"].map((U) => `${h.bulletActiveClass}${U}`)].map((U) => typeof U == "string" && U.includes(" ") ? U.split(" ") : U).flat();
        L.classList.remove(...z);
      }), S.length > 1)
        N.forEach((L) => {
          const z = Dn(L);
          z === O ? L.classList.add(...h.bulletActiveClass.split(" ")) : t.isElement && L.setAttribute("part", "bullet"), h.dynamicBullets && (z >= I && z <= G && L.classList.add(...`${h.bulletActiveClass}-main`.split(" ")), z === I && u(L, "prev"), z === G && u(L, "next"));
        });
      else {
        const L = N[O];
        if (L && L.classList.add(...h.bulletActiveClass.split(" ")), t.isElement && N.forEach((z, U) => {
          z.setAttribute("part", U === O ? "bullet-active" : "bullet");
        }), h.dynamicBullets) {
          const z = N[I], U = N[G];
          for (let Y = I; Y <= G; Y += 1)
            N[Y] && N[Y].classList.add(...`${h.bulletActiveClass}-main`.split(" "));
          u(z, "prev"), u(U, "next");
        }
      }
      if (h.dynamicBullets) {
        const L = Math.min(N.length, h.dynamicMainBullets + 4), z = (o * L - o) / 2 - A * o, U = v ? "right" : "left";
        N.forEach((Y) => {
          Y.style[t.isHorizontal() ? U : "top"] = `${z}px`;
        });
      }
    }
    S.forEach((N, I) => {
      if (h.type === "fraction" && (N.querySelectorAll(at(h.currentClass)).forEach((G) => {
        G.textContent = h.formatFractionCurrent(O + 1);
      }), N.querySelectorAll(at(h.totalClass)).forEach((G) => {
        G.textContent = h.formatFractionTotal(q);
      })), h.type === "progressbar") {
        let G;
        h.progressbarOpposite ? G = t.isHorizontal() ? "vertical" : "horizontal" : G = t.isHorizontal() ? "horizontal" : "vertical";
        const A = (O + 1) / q;
        let L = 1, z = 1;
        G === "horizontal" ? L = A : z = A, N.querySelectorAll(at(h.progressbarFillClass)).forEach((U) => {
          U.style.transform = `translate3d(0,0,0) scaleX(${L}) scaleY(${z})`, U.style.transitionDuration = `${t.params.speed}ms`;
        });
      }
      h.type === "custom" && h.renderCustom ? (N.innerHTML = h.renderCustom(t, O + 1, q), I === 0 && s("paginationRender", N)) : (I === 0 && s("paginationRender", N), s("paginationUpdate", N)), t.params.watchOverflow && t.enabled && N.classList[t.isLocked ? "add" : "remove"](h.lockClass);
    });
  }
  function g() {
    const v = t.params.pagination;
    if (a()) return;
    const h = t.virtual && t.params.virtual.enabled ? t.virtual.slides.length : t.grid && t.params.grid.rows > 1 ? t.slides.length / Math.ceil(t.params.grid.rows) : t.slides.length;
    let S = t.pagination.el;
    S = ie(S);
    let O = "";
    if (v.type === "bullets") {
      let B = t.params.loop ? Math.ceil(h / t.params.slidesPerGroup) : t.snapGrid.length;
      t.params.freeMode && t.params.freeMode.enabled && B > h && (B = h);
      for (let j = 0; j < B; j += 1)
        v.renderBullet ? O += v.renderBullet.call(t, j, v.bulletClass) : O += `<${v.bulletElement} ${t.isElement ? 'part="bullet"' : ""} class="${v.bulletClass}"></${v.bulletElement}>`;
    }
    v.type === "fraction" && (v.renderFraction ? O = v.renderFraction.call(t, v.currentClass, v.totalClass) : O = `<span class="${v.currentClass}"></span> / <span class="${v.totalClass}"></span>`), v.type === "progressbar" && (v.renderProgressbar ? O = v.renderProgressbar.call(t, v.progressbarFillClass) : O = `<span class="${v.progressbarFillClass}"></span>`), t.pagination.bullets = [], S.forEach((B) => {
      v.type !== "custom" && (B.innerHTML = O || ""), v.type === "bullets" && t.pagination.bullets.push(...B.querySelectorAll(at(v.bulletClass)));
    }), v.type !== "custom" && s("paginationRender", S[0]);
  }
  function m() {
    t.params.pagination = dr(t, t.originalParams.pagination, t.params.pagination, {
      el: "swiper-pagination"
    });
    const v = t.params.pagination;
    if (!v.el) return;
    let h;
    typeof v.el == "string" && t.isElement && (h = t.el.querySelector(v.el)), !h && typeof v.el == "string" && (h = [...document.querySelectorAll(v.el)]), h || (h = v.el), !(!h || h.length === 0) && (t.params.uniqueNavElements && typeof v.el == "string" && Array.isArray(h) && h.length > 1 && (h = [...t.el.querySelectorAll(v.el)], h.length > 1 && (h = h.filter((S) => ha(S, ".swiper")[0] === t.el)[0])), Array.isArray(h) && h.length === 1 && (h = h[0]), Object.assign(t.pagination, {
      el: h
    }), h = ie(h), h.forEach((S) => {
      v.type === "bullets" && v.clickable && S.classList.add(...(v.clickableClass || "").split(" ")), S.classList.add(v.modifierClass + v.type), S.classList.add(t.isHorizontal() ? v.horizontalClass : v.verticalClass), v.type === "bullets" && v.dynamicBullets && (S.classList.add(`${v.modifierClass}${v.type}-dynamic`), l = 0, v.dynamicMainBullets < 1 && (v.dynamicMainBullets = 1)), v.type === "progressbar" && v.progressbarOpposite && S.classList.add(v.progressbarOppositeClass), v.clickable && S.addEventListener("click", d), t.enabled || S.classList.add(v.lockClass);
    }));
  }
  function b() {
    const v = t.params.pagination;
    if (a()) return;
    let h = t.pagination.el;
    h && (h = ie(h), h.forEach((S) => {
      S.classList.remove(v.hiddenClass), S.classList.remove(v.modifierClass + v.type), S.classList.remove(t.isHorizontal() ? v.horizontalClass : v.verticalClass), v.clickable && (S.classList.remove(...(v.clickableClass || "").split(" ")), S.removeEventListener("click", d));
    })), t.pagination.bullets && t.pagination.bullets.forEach((S) => S.classList.remove(...v.bulletActiveClass.split(" ")));
  }
  i("changeDirection", () => {
    if (!t.pagination || !t.pagination.el) return;
    const v = t.params.pagination;
    let {
      el: h
    } = t.pagination;
    h = ie(h), h.forEach((S) => {
      S.classList.remove(v.horizontalClass, v.verticalClass), S.classList.add(t.isHorizontal() ? v.horizontalClass : v.verticalClass);
    });
  }), i("init", () => {
    t.params.pagination.enabled === !1 ? x() : (m(), g(), p());
  }), i("activeIndexChange", () => {
    typeof t.snapIndex > "u" && p();
  }), i("snapIndexChange", () => {
    p();
  }), i("snapGridLengthChange", () => {
    g(), p();
  }), i("destroy", () => {
    b();
  }), i("enable disable", () => {
    let {
      el: v
    } = t.pagination;
    v && (v = ie(v), v.forEach((h) => h.classList[t.enabled ? "remove" : "add"](t.params.pagination.lockClass)));
  }), i("lock unlock", () => {
    p();
  }), i("click", (v, h) => {
    const S = h.target, O = ie(t.pagination.el);
    if (t.params.pagination.el && t.params.pagination.hideOnClick && O && O.length > 0 && !S.classList.contains(t.params.pagination.bulletClass)) {
      if (t.navigation && (t.navigation.nextEl && S === t.navigation.nextEl || t.navigation.prevEl && S === t.navigation.prevEl)) return;
      const B = O[0].classList.contains(t.params.pagination.hiddenClass);
      s(B === !0 ? "paginationShow" : "paginationHide"), O.forEach((j) => j.classList.toggle(t.params.pagination.hiddenClass));
    }
  });
  const w = () => {
    t.el.classList.remove(t.params.pagination.paginationDisabledClass);
    let {
      el: v
    } = t.pagination;
    v && (v = ie(v), v.forEach((h) => h.classList.remove(t.params.pagination.paginationDisabledClass))), m(), g(), p();
  }, x = () => {
    t.el.classList.add(t.params.pagination.paginationDisabledClass);
    let {
      el: v
    } = t.pagination;
    v && (v = ie(v), v.forEach((h) => h.classList.add(t.params.pagination.paginationDisabledClass))), b();
  };
  Object.assign(t.pagination, {
    enable: w,
    disable: x,
    render: g,
    update: p,
    init: m,
    destroy: b
  });
}
function Om(e) {
  let {
    swiper: t,
    extendParams: n,
    on: i,
    emit: s
  } = e;
  const r = tt();
  let o = !1, l = null, a = null, u, c, d, p;
  n({
    scrollbar: {
      el: null,
      dragSize: "auto",
      hide: !1,
      draggable: !1,
      snapOnRelease: !0,
      lockClass: "swiper-scrollbar-lock",
      dragClass: "swiper-scrollbar-drag",
      scrollbarDisabledClass: "swiper-scrollbar-disabled",
      horizontalClass: "swiper-scrollbar-horizontal",
      verticalClass: "swiper-scrollbar-vertical"
    }
  }), t.scrollbar = {
    el: null,
    dragEl: null
  };
  function g() {
    if (!t.params.scrollbar.el || !t.scrollbar.el) return;
    const {
      scrollbar: A,
      rtlTranslate: L
    } = t, {
      dragEl: z,
      el: U
    } = A, Y = t.params.scrollbar, _ = t.params.loop ? t.progressLoop : t.progress;
    let P = c, K = (d - c) * _;
    L ? (K = -K, K > 0 ? (P = c - K, K = 0) : -K + c > d && (P = d + K)) : K < 0 ? (P = c + K, K = 0) : K + c > d && (P = d - K), t.isHorizontal() ? (z.style.transform = `translate3d(${K}px, 0, 0)`, z.style.width = `${P}px`) : (z.style.transform = `translate3d(0px, ${K}px, 0)`, z.style.height = `${P}px`), Y.hide && (clearTimeout(l), U.style.opacity = 1, l = setTimeout(() => {
      U.style.opacity = 0, U.style.transitionDuration = "400ms";
    }, 1e3));
  }
  function m(A) {
    !t.params.scrollbar.el || !t.scrollbar.el || (t.scrollbar.dragEl.style.transitionDuration = `${A}ms`);
  }
  function b() {
    if (!t.params.scrollbar.el || !t.scrollbar.el) return;
    const {
      scrollbar: A
    } = t, {
      dragEl: L,
      el: z
    } = A;
    L.style.width = "", L.style.height = "", d = t.isHorizontal() ? z.offsetWidth : z.offsetHeight, p = t.size / (t.virtualSize + t.params.slidesOffsetBefore - (t.params.centeredSlides ? t.snapGrid[0] : 0)), t.params.scrollbar.dragSize === "auto" ? c = d * p : c = parseInt(t.params.scrollbar.dragSize, 10), t.isHorizontal() ? L.style.width = `${c}px` : L.style.height = `${c}px`, p >= 1 ? z.style.display = "none" : z.style.display = "", t.params.scrollbar.hide && (z.style.opacity = 0), t.params.watchOverflow && t.enabled && A.el.classList[t.isLocked ? "add" : "remove"](t.params.scrollbar.lockClass);
  }
  function w(A) {
    return t.isHorizontal() ? A.clientX : A.clientY;
  }
  function x(A) {
    const {
      scrollbar: L,
      rtlTranslate: z
    } = t, {
      el: U
    } = L;
    let Y;
    Y = (w(A) - ih(U)[t.isHorizontal() ? "left" : "top"] - (u !== null ? u : c / 2)) / (d - c), Y = Math.max(Math.min(Y, 1), 0), z && (Y = 1 - Y);
    const _ = t.minTranslate() + (t.maxTranslate() - t.minTranslate()) * Y;
    t.updateProgress(_), t.setTranslate(_), t.updateActiveIndex(), t.updateSlidesClasses();
  }
  function v(A) {
    const L = t.params.scrollbar, {
      scrollbar: z,
      wrapperEl: U
    } = t, {
      el: Y,
      dragEl: _
    } = z;
    o = !0, u = A.target === _ ? w(A) - A.target.getBoundingClientRect()[t.isHorizontal() ? "left" : "top"] : null, A.preventDefault(), A.stopPropagation(), U.style.transitionDuration = "100ms", _.style.transitionDuration = "100ms", x(A), clearTimeout(a), Y.style.transitionDuration = "0ms", L.hide && (Y.style.opacity = 1), t.params.cssMode && (t.wrapperEl.style["scroll-snap-type"] = "none"), s("scrollbarDragStart", A);
  }
  function h(A) {
    const {
      scrollbar: L,
      wrapperEl: z
    } = t, {
      el: U,
      dragEl: Y
    } = L;
    o && (A.preventDefault && A.cancelable ? A.preventDefault() : A.returnValue = !1, x(A), z.style.transitionDuration = "0ms", U.style.transitionDuration = "0ms", Y.style.transitionDuration = "0ms", s("scrollbarDragMove", A));
  }
  function S(A) {
    const L = t.params.scrollbar, {
      scrollbar: z,
      wrapperEl: U
    } = t, {
      el: Y
    } = z;
    o && (o = !1, t.params.cssMode && (t.wrapperEl.style["scroll-snap-type"] = "", U.style.transitionDuration = ""), L.hide && (clearTimeout(a), a = gi(() => {
      Y.style.opacity = 0, Y.style.transitionDuration = "400ms";
    }, 1e3)), s("scrollbarDragEnd", A), L.snapOnRelease && t.slideToClosest());
  }
  function O(A) {
    const {
      scrollbar: L,
      params: z
    } = t, U = L.el;
    if (!U) return;
    const Y = U, _ = z.passiveListeners ? {
      passive: !1,
      capture: !1
    } : !1, P = z.passiveListeners ? {
      passive: !0,
      capture: !1
    } : !1;
    if (!Y) return;
    const K = A === "on" ? "addEventListener" : "removeEventListener";
    Y[K]("pointerdown", v, _), r[K]("pointermove", h, _), r[K]("pointerup", S, P);
  }
  function B() {
    !t.params.scrollbar.el || !t.scrollbar.el || O("on");
  }
  function j() {
    !t.params.scrollbar.el || !t.scrollbar.el || O("off");
  }
  function q() {
    const {
      scrollbar: A,
      el: L
    } = t;
    t.params.scrollbar = dr(t, t.originalParams.scrollbar, t.params.scrollbar, {
      el: "swiper-scrollbar"
    });
    const z = t.params.scrollbar;
    if (!z.el) return;
    let U;
    if (typeof z.el == "string" && t.isElement && (U = t.el.querySelector(z.el)), !U && typeof z.el == "string") {
      if (U = r.querySelectorAll(z.el), !U.length) return;
    } else U || (U = z.el);
    t.params.uniqueNavElements && typeof z.el == "string" && U.length > 1 && L.querySelectorAll(z.el).length === 1 && (U = L.querySelector(z.el)), U.length > 0 && (U = U[0]), U.classList.add(t.isHorizontal() ? z.horizontalClass : z.verticalClass);
    let Y;
    U && (Y = U.querySelector(at(t.params.scrollbar.dragClass)), Y || (Y = ln("div", t.params.scrollbar.dragClass), U.append(Y))), Object.assign(A, {
      el: U,
      dragEl: Y
    }), z.draggable && B(), U && U.classList[t.enabled ? "remove" : "add"](...vt(t.params.scrollbar.lockClass));
  }
  function N() {
    const A = t.params.scrollbar, L = t.scrollbar.el;
    L && L.classList.remove(...vt(t.isHorizontal() ? A.horizontalClass : A.verticalClass)), j();
  }
  i("changeDirection", () => {
    if (!t.scrollbar || !t.scrollbar.el) return;
    const A = t.params.scrollbar;
    let {
      el: L
    } = t.scrollbar;
    L = ie(L), L.forEach((z) => {
      z.classList.remove(A.horizontalClass, A.verticalClass), z.classList.add(t.isHorizontal() ? A.horizontalClass : A.verticalClass);
    });
  }), i("init", () => {
    t.params.scrollbar.enabled === !1 ? G() : (q(), b(), g());
  }), i("update resize observerUpdate lock unlock changeDirection", () => {
    b();
  }), i("setTranslate", () => {
    g();
  }), i("setTransition", (A, L) => {
    m(L);
  }), i("enable disable", () => {
    const {
      el: A
    } = t.scrollbar;
    A && A.classList[t.enabled ? "remove" : "add"](...vt(t.params.scrollbar.lockClass));
  }), i("destroy", () => {
    N();
  });
  const I = () => {
    t.el.classList.remove(...vt(t.params.scrollbar.scrollbarDisabledClass)), t.scrollbar.el && t.scrollbar.el.classList.remove(...vt(t.params.scrollbar.scrollbarDisabledClass)), q(), b(), g();
  }, G = () => {
    t.el.classList.add(...vt(t.params.scrollbar.scrollbarDisabledClass)), t.scrollbar.el && t.scrollbar.el.classList.add(...vt(t.params.scrollbar.scrollbarDisabledClass)), N();
  };
  Object.assign(t.scrollbar, {
    enable: I,
    disable: G,
    updateSize: b,
    setTranslate: g,
    init: q,
    destroy: N
  });
}
function Cm(e) {
  let {
    swiper: t,
    extendParams: n,
    on: i
  } = e;
  n({
    a11y: {
      enabled: !0,
      notificationClass: "swiper-notification",
      prevSlideMessage: "Previous slide",
      nextSlideMessage: "Next slide",
      firstSlideMessage: "This is the first slide",
      lastSlideMessage: "This is the last slide",
      paginationBulletMessage: "Go to slide {{index}}",
      slideLabelMessage: "{{index}} / {{slidesLength}}",
      containerMessage: null,
      containerRoleDescriptionMessage: null,
      containerRole: null,
      itemRoleDescriptionMessage: null,
      slideRole: "group",
      id: null,
      scrollOnFocus: !0
    }
  }), t.a11y = {
    clicked: !1
  };
  let s = null, r, o, l = (/* @__PURE__ */ new Date()).getTime();
  function a(_) {
    const P = s;
    P.length !== 0 && (P.innerHTML = "", P.innerHTML = _);
  }
  function u(_) {
    const P = () => Math.round(16 * Math.random()).toString(16);
    return "x".repeat(_).replace(/x/g, P);
  }
  function c(_) {
    _ = ie(_), _.forEach((P) => {
      P.setAttribute("tabIndex", "0");
    });
  }
  function d(_) {
    _ = ie(_), _.forEach((P) => {
      P.setAttribute("tabIndex", "-1");
    });
  }
  function p(_, P) {
    _ = ie(_), _.forEach((K) => {
      K.setAttribute("role", P);
    });
  }
  function g(_, P) {
    _ = ie(_), _.forEach((K) => {
      K.setAttribute("aria-roledescription", P);
    });
  }
  function m(_, P) {
    _ = ie(_), _.forEach((K) => {
      K.setAttribute("aria-controls", P);
    });
  }
  function b(_, P) {
    _ = ie(_), _.forEach((K) => {
      K.setAttribute("aria-label", P);
    });
  }
  function w(_, P) {
    _ = ie(_), _.forEach((K) => {
      K.setAttribute("id", P);
    });
  }
  function x(_, P) {
    _ = ie(_), _.forEach((K) => {
      K.setAttribute("aria-live", P);
    });
  }
  function v(_) {
    _ = ie(_), _.forEach((P) => {
      P.setAttribute("aria-disabled", !0);
    });
  }
  function h(_) {
    _ = ie(_), _.forEach((P) => {
      P.setAttribute("aria-disabled", !1);
    });
  }
  function S(_) {
    if (_.keyCode !== 13 && _.keyCode !== 32) return;
    const P = t.params.a11y, K = _.target;
    if (!(t.pagination && t.pagination.el && (K === t.pagination.el || t.pagination.el.contains(_.target)) && !_.target.matches(at(t.params.pagination.bulletClass)))) {
      if (t.navigation && t.navigation.prevEl && t.navigation.nextEl) {
        const pe = ie(t.navigation.prevEl);
        ie(t.navigation.nextEl).includes(K) && (t.isEnd && !t.params.loop || t.slideNext(), t.isEnd ? a(P.lastSlideMessage) : a(P.nextSlideMessage)), pe.includes(K) && (t.isBeginning && !t.params.loop || t.slidePrev(), t.isBeginning ? a(P.firstSlideMessage) : a(P.prevSlideMessage));
      }
      t.pagination && K.matches(at(t.params.pagination.bulletClass)) && K.click();
    }
  }
  function O() {
    if (t.params.loop || t.params.rewind || !t.navigation) return;
    const {
      nextEl: _,
      prevEl: P
    } = t.navigation;
    P && (t.isBeginning ? (v(P), d(P)) : (h(P), c(P))), _ && (t.isEnd ? (v(_), d(_)) : (h(_), c(_)));
  }
  function B() {
    return t.pagination && t.pagination.bullets && t.pagination.bullets.length;
  }
  function j() {
    return B() && t.params.pagination.clickable;
  }
  function q() {
    const _ = t.params.a11y;
    B() && t.pagination.bullets.forEach((P) => {
      t.params.pagination.clickable && (c(P), t.params.pagination.renderBullet || (p(P, "button"), b(P, _.paginationBulletMessage.replace(/\{\{index\}\}/, Dn(P) + 1)))), P.matches(at(t.params.pagination.bulletActiveClass)) ? P.setAttribute("aria-current", "true") : P.removeAttribute("aria-current");
    });
  }
  const N = (_, P, K) => {
    c(_), _.tagName !== "BUTTON" && (p(_, "button"), _.addEventListener("keydown", S)), b(_, K), m(_, P);
  }, I = (_) => {
    o && o !== _.target && !o.contains(_.target) && (r = !0), t.a11y.clicked = !0;
  }, G = () => {
    r = !1, requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        t.destroyed || (t.a11y.clicked = !1);
      });
    });
  }, A = (_) => {
    l = (/* @__PURE__ */ new Date()).getTime();
  }, L = (_) => {
    if (t.a11y.clicked || !t.params.a11y.scrollOnFocus || (/* @__PURE__ */ new Date()).getTime() - l < 100) return;
    const P = _.target.closest(`.${t.params.slideClass}, swiper-slide`);
    if (!P || !t.slides.includes(P)) return;
    o = P;
    const K = t.slides.indexOf(P) === t.activeIndex, pe = t.params.watchSlidesProgress && t.visibleSlides && t.visibleSlides.includes(P);
    K || pe || _.sourceCapabilities && _.sourceCapabilities.firesTouchEvents || (t.isHorizontal() ? t.el.scrollLeft = 0 : t.el.scrollTop = 0, requestAnimationFrame(() => {
      r || (t.params.loop ? t.slideToLoop(parseInt(P.getAttribute("data-swiper-slide-index")), 0) : t.slideTo(t.slides.indexOf(P), 0), r = !1);
    }));
  }, z = () => {
    const _ = t.params.a11y;
    _.itemRoleDescriptionMessage && g(t.slides, _.itemRoleDescriptionMessage), _.slideRole && p(t.slides, _.slideRole);
    const P = t.slides.length;
    _.slideLabelMessage && t.slides.forEach((K, pe) => {
      const Ne = t.params.loop ? parseInt(K.getAttribute("data-swiper-slide-index"), 10) : pe, Te = _.slideLabelMessage.replace(/\{\{index\}\}/, Ne + 1).replace(/\{\{slidesLength\}\}/, P);
      b(K, Te);
    });
  }, U = () => {
    const _ = t.params.a11y;
    t.el.append(s);
    const P = t.el;
    _.containerRoleDescriptionMessage && g(P, _.containerRoleDescriptionMessage), _.containerMessage && b(P, _.containerMessage), _.containerRole && p(P, _.containerRole);
    const K = t.wrapperEl, pe = _.id || K.getAttribute("id") || `swiper-wrapper-${u(16)}`, Ne = t.params.autoplay && t.params.autoplay.enabled ? "off" : "polite";
    w(K, pe), x(K, Ne), z();
    let {
      nextEl: Te,
      prevEl: Ie
    } = t.navigation ? t.navigation : {};
    Te = ie(Te), Ie = ie(Ie), Te && Te.forEach((Xt) => N(Xt, pe, _.nextSlideMessage)), Ie && Ie.forEach((Xt) => N(Xt, pe, _.prevSlideMessage)), j() && ie(t.pagination.el).forEach((Vi) => {
      Vi.addEventListener("keydown", S);
    }), tt().addEventListener("visibilitychange", A), t.el.addEventListener("focus", L, !0), t.el.addEventListener("focus", L, !0), t.el.addEventListener("pointerdown", I, !0), t.el.addEventListener("pointerup", G, !0);
  };
  function Y() {
    s && s.remove();
    let {
      nextEl: _,
      prevEl: P
    } = t.navigation ? t.navigation : {};
    _ = ie(_), P = ie(P), _ && _.forEach((pe) => pe.removeEventListener("keydown", S)), P && P.forEach((pe) => pe.removeEventListener("keydown", S)), j() && ie(t.pagination.el).forEach((Ne) => {
      Ne.removeEventListener("keydown", S);
    }), tt().removeEventListener("visibilitychange", A), t.el && typeof t.el != "string" && (t.el.removeEventListener("focus", L, !0), t.el.removeEventListener("pointerdown", I, !0), t.el.removeEventListener("pointerup", G, !0));
  }
  i("beforeInit", () => {
    s = ln("span", t.params.a11y.notificationClass), s.setAttribute("aria-live", "assertive"), s.setAttribute("aria-atomic", "true");
  }), i("afterInit", () => {
    t.params.a11y.enabled && U();
  }), i("slidesLengthChange snapGridLengthChange slidesGridLengthChange", () => {
    t.params.a11y.enabled && z();
  }), i("fromEdge toEdge afterInit lock unlock", () => {
    t.params.a11y.enabled && O();
  }), i("paginationUpdate", () => {
    t.params.a11y.enabled && q();
  }), i("destroy", () => {
    t.params.a11y.enabled && Y();
  });
}
const Nm = {
  name: "Slider",
  components: {
    Swiper: _m,
    SwiperSlide: Sm
  },
  setup() {
    return {
      onSwiper: (n) => {
        console.log(n);
      },
      onSlideChange: () => {
        console.log("slide change");
      },
      modules: [xm, Tm, Om, Cm]
    };
  }
}, Pm = { class: "slider" }, Dm = /* @__PURE__ */ Ue("img", { src: "https://picsum.photos/1200/600" }, null, -1), Mm = /* @__PURE__ */ Ue("img", { src: "https://picsum.photos/1210/600" }, null, -1), Am = /* @__PURE__ */ Ue("img", { src: "https://picsum.photos/1220/600" }, null, -1);
function Lm(e, t, n, i, s, r) {
  const o = ut("gng-button"), l = ut("swiper-slide"), a = ut("swiper");
  return me(), we("div", Pm, [
    ce(o, { icon: "<-" }),
    ce(a, {
      navigation: !0,
      "slides-per-view": "auto",
      pagination: !0,
      modules: i.modules,
      "space-between": 50,
      onSwiper: i.onSwiper,
      onSlideChange: i.onSlideChange
    }, {
      default: It(() => [
        ce(l, null, {
          default: It(() => [
            Dm
          ]),
          _: 1
        }),
        ce(l, null, {
          default: It(() => [
            Mm
          ]),
          _: 1
        }),
        ce(l, null, {
          default: It(() => [
            Am
          ]),
          _: 1
        })
      ]),
      _: 1
    }, 8, ["modules", "onSwiper", "onSlideChange"]),
    ce(o, { icon: "->" })
  ]);
}
const Im = /* @__PURE__ */ nt(Nm, [["render", Lm]]), Rm = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Im
}, Symbol.toStringTag, { value: "Module" })), _o = /* @__PURE__ */ Object.assign({ "/src/components/base/button/Button.vue": Ld, "/src/components/base/form-control/FormControl.vue": $d, "/src/components/base/form-element/FormElement.vue": kd, "/src/components/base/form-field/FormField.vue": qd, "/src/components/base/form-field/FormFieldPassword.vue": Xd, "/src/components/base/form/Form.vue": Pp, "/src/components/base/image/Image.vue": Rp, "/src/components/base/input/Input.vue": Gp, "/src/components/base/progress/Progess.vue": Xp, "/src/components/base/slider/Slider.vue": Rm });
function Vm() {
  customElements.define(
    "exp-626",
    class extends HTMLElement {
      connectedCallback() {
        const e = document.createElement("div");
        this.appendChild(e);
        const t = wd({});
        Object.keys(_o).forEach((n) => {
          const i = _o[n].default, s = `Gng${i.name}`;
          t.component(s, i);
        }), t.component("gng-button", zl), t.component("gng-form-control", kl), t.mount(e);
      }
    }
  );
}
export {
  Vm as registerCustomComponent
};
