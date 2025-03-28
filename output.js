//Fri Mar 28 2025 12:45:50 GMT+0000 (Coordinated Universal Time)
//Base:<url id="cv1cref6o68qmpt26ol0" type="url" status="parsed" title="GitHub - echo094/decode-js: JS混淆代码的AST分析工具 AST analysis tool for obfuscated JS code" wc="2165">https://github.com/echo094/decode-js</url>
//Modify:<url id="cv1cref6o68qmpt26olg" type="url" status="parsed" title="GitHub - smallfawn/decode_action: 世界上本来不存在加密，加密的人多了，也便成就了解密" wc="741">https://github.com/smallfawn/decode_action</url>
var t = require("../../@babel/runtime/helpers/typeof");
(global.webpackJsonp = global.webpackJsonp || []).push([["pages/user/user"], {
  "07e5": function (t, e, n) {
    (function (t) {
      function e(t) {
        return t && t.__esModule ? t : {
          default: t
        };
      }
      n("6cdc");
      n("921b");
      e(n("66fd"));
      t(e(n("33a9")).default);
    }).call(this, n("543d").createPage);
  },
  "15e3": function (t, e, n) {
    n.r(e);
    var r = n("41af"),
      o = n.n(r);
    for (var i in r) if (["default"].indexOf(i) < 0) {
      (function (t) {
        n.d(e, t, function () {
          return r[t];
        });
      })(i);
    }
    e.default = o.a;
  },
  "1dad": function (t, e, n) {
    var r = n("231d");
    n.n(r).a;
  },
  "231d": function (t, e, n) {},
  "33a9": function (t, e, n) {
    n.r(e);
    var r = n("c870"),
      o = n("15e3");
    for (var i in o) if (["default"].indexOf(i) < 0) {
      (function (t) {
        n.d(e, t, function () {
          return o[t];
        });
      })(i);
    }
    n("1dad");
    n("94c7");
    var a = n("f0c5"),
      u = Object(a.a)(o.default, r.b, r.c, !1, null, null, null, !1, r.a, 0);
    e.default = u.exports;
  },
  "41af": function (e, n, r) {
    (function (e) {
      Object.defineProperty(n, "__esModule", {
        value: !0
      });
      n.default = 0;
      var o = p(r("2686")),
        i = r("365c"),
        a = p(r("131c")),
        u = r("aaf5"),
        c = p(r("bee3")),
        s = r("2f62"),
        f = p(r("eea7")),
        l = p(r("b775"));
      function p(t) {
        return t && t.__esModule ? t : {
          default: t
        };
      }
      function h(e) {
        return ("function" == typeof Symbol && "symbol" == t(Symbol.iterator) ? h = function (e) {
          return t(e);
        } : h = function (e) {
          return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : t(e);
        })(e);
      }
      function d() {
        d = function () {
          return e;
        };
        var t,
          e = {},
          n = Object.prototype,
          r = n.hasOwnProperty,
          o = Object.defineProperty || function (t, e, n) {
            t[e] = n.value;
          },
          i = "function" == typeof Symbol ? Symbol : {},
          a = i.iterator || "@@iterator",
          u = i.asyncIterator || "@@asyncIterator",
          c = i.toStringTag || "@@toStringTag";
        function s(t, e, n) {
          Object.defineProperty(t, e, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
          });
          return t[e];
        }
        try {
          s({}, "");
        } catch (t) {
          t = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(t);
          s = function (t, e, n) {
            return t[e] = n;
          };
        }
        function f(t, e, n, r) {
          var i = e && e.prototype instanceof m ? e : m,
            a = Object.create(i.prototype),
            u = new B(r || []);
          o(a, "_invoke", {
            value: S(t, n, u)
          });
          return a;
        }
        function l(t, e, n) {
          try {
            return {
              type: "normal",
              arg: t.call(e, n)
            };
          } catch (t) {
            t = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(t);
            return {
              type: "throw",
              arg: t
            };
          }
        }
        e.wrap = f;
        var p = "suspendedStart",
          g = "executing",
          v = "completed",
          y = {};
        function m() {}
        function b() {}
        function w() {}
        var _ = {};
        s(_, a, function () {
          return this;
        });
        var x = Object.getPrototypeOf,
          P = x && x(x(M([])));
        if (P && P !== n && r.call(P, a)) {
          _ = P;
        }
        var O = w.prototype = m.prototype = Object.create(_);
        function j(t) {
          ["next", "throw", "return"].forEach(function (e) {
            s(t, e, function (t) {
              return this._invoke(e, t);
            });
          });
        }
        function L(t, e) {
          function n(o, i, a, u) {
            var c = l(t[o], t, i);
            if ("throw" !== c.type) {
              var s = c.arg,
                f = s.value;
              return f && "object" == h(f) && r.call(f, "__await") ? e.resolve(f.__await).then(function (t) {
                n("next", t, a, u);
              }, function (t) {
                n("throw", t, a, u);
              }) : e.resolve(f).then(function (t) {
                s.value = t;
                a(s);
              }, function (t) {
                return n("throw", t, a, u);
              });
            }
            u(c.arg);
          }
          var i;
          o(this, "_invoke", {
            value: function (t, r) {
              function o() {
                return new e(function (e, o) {
                  n(t, r, e, o);
                });
              }
              return i ? i = i.then(o, o) : i = o();
            }
          });
        }
        function S(e, n, r) {
          var o = p;
          return function (i, a) {
            if (o === g) {
              throw Error("Generator is already running");
            }
            if (o === v) {
              if ("throw" === i) {
                throw a;
              }
              return {
                value: t,
                done: !0
              };
            }
            for (r.method = i, r.arg = a;;) {
              var u = r.delegate;
              if (u) {
                var c = k(u, r);
                if (c) {
                  if (c === y) {
                    continue;
                  }
                  return c;
                }
              }
              if ("next" === r.method) {
                r.sent = r._sent = r.arg;
              } else {
                if ("throw" === r.method) {
                  if (o === p) {
                    throw o = v, r.arg;
                  }
                  r.dispatchException(r.arg);
                } else {
                  if ("return" === r.method) {
                    r.abrupt("return", r.arg);
                  }
                }
              }
              o = g;
              var s = l(e, n, r);
              if ("normal" === s.type) {
                r.done ? o = v : o = "suspendedYield";
                if (s.arg === y) {
                  continue;
                }
                return {
                  value: s.arg,
                  done: r.done
                };
              }
              if ("throw" === s.type) {
                o = v;
                r.method = "throw";
                r.arg = s.arg;
              }
            }
          };
        }
        function k(e, n) {
          var r = n.method,
            o = e.iterator[r];
          if (o === t) {
            n.delegate = null;
            "throw" === r && e.iterator.return && (n.method = "return", n.arg = t, k(e, n), "throw" === n.method) || "return" !== r && (n.method = "throw", n.arg = new TypeError("The iterator does not provide a '" + r + "' method"));
            return y;
          }
          var i = l(o, e.iterator, n.arg);
          if ("throw" === i.type) {
            n.method = "throw";
            n.arg = i.arg;
            n.delegate = null;
            return y;
          }
          var a = i.arg;
          return a ? a.done ? (n[e.resultName] = a.value, n.next = e.nextLoc, "return" !== n.method && (n.method = "next", n.arg = t), n.delegate = null, y) : a : (n.method = "throw", n.arg = new TypeError("iterator result is not an object"), n.delegate = null, y);
        }
        function E(t) {
          var e = {
            tryLoc: t[0]
          };
          1 in t && (e.catchLoc = t[1]);
          2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]);
          this.tryEntries.push(e);
        }
        function T(t) {
          var e = t.completion || {};
          e.type = "normal";
          delete e.arg;
          t.completion = e;
        }
        function B(t) {
          this.tryEntries = [{
            tryLoc: "root"
          }];
          t.forEach(E, this);
          this.reset(!0);
        }
        function M(e) {
          if (e || "" === e) {
            var n = e[a];
            if (n) {
              return n.call(e);
            }
            if ("function" == typeof e.next) {
              return e;
            }
            if (!isNaN(e.length)) {
              var o = -1,
                i = function n() {
                  for (; ++o < e.length;) if (r.call(e, o)) {
                    n.value = e[o];
                    n.done = !1;
                    return n;
                  }
                  n.value = t;
                  n.done = !0;
                  return n;
                };
              return i.next = i;
            }
          }
          throw new TypeError(h(e) + " is not iterable");
        }
        b.prototype = w;
        o(O, "constructor", {
          value: w,
          configurable: !0
        });
        o(w, "constructor", {
          value: b,
          configurable: !0
        });
        b.displayName = s(w, c, "GeneratorFunction");
        e.isGeneratorFunction = function (t) {
          var e = "function" == typeof t && t.constructor;
          return !!e && (e === b || "GeneratorFunction" === (e.displayName || e.name));
        };
        e.mark = function (t) {
          Object.setPrototypeOf ? Object.setPrototypeOf(t, w) : (t.__proto__ = w, s(t, c, "GeneratorFunction"));
          t.prototype = Object.create(O);
          return t;
        };
        e.awrap = function (t) {
          return {
            __await: t
          };
        };
        j(L.prototype);
        s(L.prototype, u, function () {
          return this;
        });
        e.AsyncIterator = L;
        e.async = function (t, n, r, o, i) {
          if (0 === i) {
            i = Promise;
          }
          var a = new L(f(t, n, r, o), i);
          return e.isGeneratorFunction(n) ? a : a.next().then(function (t) {
            return t.done ? t.value : a.next();
          });
        };
        j(O);
        s(O, c, "Generator");
        s(O, a, function () {
          return this;
        });
        s(O, "toString", function () {
          return "[object Generator]";
        });
        e.keys = function (t) {
          var e = Object(t),
            n = [];
          for (var r in e) n.push(r);
          n.reverse();
          return function t() {
            for (; n.length;) {
              var r = n.pop();
              if (r in e) {
                t.value = r;
                t.done = !1;
                return t;
              }
            }
            t.done = !0;
            return t;
          };
        };
        e.values = M;
        B.prototype = {
          constructor: B,
          reset: function (e) {
            this.prev = 0;
            this.next = 0;
            this.sent = this._sent = t;
            this.done = !1;
            this.delegate = null;
            this.method = "next";
            this.arg = t;
            this.tryEntries.forEach(T);
            if (!e) {
              for (var n in this) if ("t" === n.charAt(0) && r.call(this, n) && !isNaN(+n.slice(1))) {
                this[n] = t;
              }
            }
          },
          stop: function () {
            this.done = !0;
            var t = this.tryEntries[0].completion;
            if ("throw" === t.type) {
              throw t.arg;
            }
            return this.rval;
          },
          dispatchException: function (e) {
            if (this.done) {
              throw e;
            }
            var n = this;
            function o(r, o) {
              u.type = "throw";
              u.arg = e;
              n.next = r;
              o && (n.method = "next", n.arg = t);
              return !!o;
            }
            for (var i = this.tryEntries.length - 1; i >= 0; --i) {
              var a = this.tryEntries[i],
                u = a.completion;
              if ("root" === a.tryLoc) {
                return o("end");
              }
              if (a.tryLoc <= this.prev) {
                var c = r.call(a, "catchLoc"),
                  s = r.call(a, "finallyLoc");
                if (c && s) {
                  if (this.prev < a.catchLoc) {
                    return o(a.catchLoc, !0);
                  }
                  if (this.prev < a.finallyLoc) {
                    return o(a.finallyLoc);
                  }
                } else {
                  if (c) {
                    if (this.prev < a.catchLoc) {
                      return o(a.catchLoc, !0);
                    }
                  } else {
                    if (!s) {
                      throw Error("try statement without catch or finally");
                    }
                    if (this.prev < a.finallyLoc) {
                      return o(a.finallyLoc);
                    }
                  }
                }
              }
            }
          },
          abrupt: function (t, e) {
            for (var n = this.tryEntries.length - 1; n >= 0; --n) {
              var o = this.tryEntries[n];
              if (o.tryLoc <= this.prev && r.call(o, "finallyLoc") && this.prev < o.finallyLoc) {
                var i = o;
                break;
              }
            }
            if (i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc) {
              i = null;
            }
            var a = i ? i.completion : {};
            a.type = t;
            a.arg = e;
            return i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a);
          },
          complete: function (t, e) {
            if ("throw" === t.type) {
              throw t.arg;
            }
            "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e);
            return y;
          },
          finish: function (t) {
            for (var e = this.tryEntries.length - 1; e >= 0; --e) {
              var n = this.tryEntries[e];
              if (n.finallyLoc === t) {
                this.complete(n.completion, n.afterLoc);
                T(n);
                return y;
              }
            }
          },
          catch: function (t) {
            for (var e = this.tryEntries.length - 1; e >= 0; --e) {
              var n = this.tryEntries[e];
              if (n.tryLoc === t) {
                var r = n.completion;
                if ("throw" === r.type) {
                  var o = r.arg;
                  T(n);
                }
                return o;
              }
            }
            throw Error("illegal catch attempt");
          },
          delegateYield: function (e, n, r) {
            this.delegate = {
              iterator: M(e),
              resultName: n,
              nextLoc: r
            };
            "next" === this.method && (this.arg = t);
            return y;
          }
        };
        return e;
      }
      function g(t, e, n, r, o, i, a) {
        try {
          var u = t[i](a),
            c = u.value;
        } catch (t) {
          t = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(t);
          return n(t);
        }
        u.done ? e(c) : Promise.resolve(c).then(r, o);
      }
      function v(t) {
        return function () {
          var e = this,
            n = arguments;
          return new Promise(function (r, o) {
            var i = t.apply(e, n);
            function a(t) {
              g(i, r, o, a, u, "next", t);
            }
            function u(t) {
              g(i, r, o, a, u, "throw", t);
            }
            a(0);
          });
        };
      }
      function y(t, e) {
        var n = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(t);
          e && (r = r.filter(function (e) {
            return Object.getOwnPropertyDescriptor(t, e).enumerable;
          }));
          n.push.apply(n, r);
        }
        return n;
      }
      function m(t) {
        for (var e = 1; e < arguments.length; e++) {
          var n = null != arguments[e] ? arguments[e] : {};
          e % 2 ? y(Object(n), !0).forEach(function (e) {
            b(t, e, n[e]);
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : y(Object(n)).forEach(function (e) {
            Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
          });
        }
        return t;
      }
      function b(t, e, n) {
        (e = function (t) {
          var e = function (t, e) {
            if ("object" != h(t) || !t) {
              return t;
            }
            var n = t[Symbol.toPrimitive];
            if (0 !== n) {
              var r = n.call(t, e || "default");
              if ("object" != h(r)) {
                return r;
              }
              throw new TypeError("@@toPrimitive must return a primitive value.");
            }
            return ("string" === e ? String : Number)(t);
          }(t, "string");
          return "symbol" == h(e) ? e : e + "";
        }(e)) in t ? Object.defineProperty(t, e, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0
        }) : t[e] = n;
        return t;
      }
      var w = getApp().$vm;
      n.default = m(m({}, o.default), {}, {
        components: {
          userHeader: function () {
            r.e("pages/user/components/user-header/user-header").then(function () {
              return resolve(r("d1de"));
            }.bind(null, r)).catch(r.oe);
          },
          userPower: function () {
            r.e("pages/user/components/user-power/user-power").then(function () {
              return resolve(r("c615"));
            }.bind(null, r)).catch(r.oe);
          },
          userProperty: function () {
            Promise.all([r.e("common/vendor"), r.e("pages/user/components/user-property/user-property")]).then(function () {
              return resolve(r("2364"));
            }.bind(null, r)).catch(r.oe);
          },
          userOrder: function () {
            r.e("pages/user/components/user-order/user-order").then(function () {
              return resolve(r("2bd5"));
            }.bind(null, r)).catch(r.oe);
          },
          userService: function () {
            r.e("pages/user/components/user-service/user-service").then(function () {
              return resolve(r("3dd1"));
            }.bind(null, r)).catch(r.oe);
          },
          userCard: function () {
            r.e("pages/user/components/user-card/user-card").then(function () {
              return resolve(r("83ff"));
            }.bind(null, r)).catch(r.oe);
          },
          pmLoading: function () {
            r.e("components/pm-loading/pm-loading").then(function () {
              return resolve(r("763f"));
            }.bind(null, r)).catch(r.oe);
          }
        },
        data: function () {
          return {
            user_config: 0,
            user_info: 0,
            isSpecialScreen: !1,
            userTopBg: "",
            userBadges: {},
            userQuantity: {},
            isProd: !0,
            isShowRobotLimited: !1
          };
        },
        computed: m(m({}, (0, s.mapState)({
          is_login: function (t) {
            return t.is_login;
          },
          svipUserInfo: function (t) {
            return t.svipUserInfo;
          },
          globalUser: function (t) {
            return t.globalUser;
          },
          login_done: function (t) {
            return t.login_done;
          },
          pendant: function (t) {
            return t.pendant;
          },
          showBirthEntry: function (t) {
            return t.showBirthEntry;
          }
        })), {}, {
          headerStyle: function () {
            return ["padding-bottom:200rpx;", "background-image:url(".concat(this.userTopBg, ")")].join(";");
          }
        }),
        onLoad: function () {
          this.isProd = !!l.default.isProd;
          this.randomBackground();
        },
        onShow: function () {
          this.getSpecialScreen();
          this.getJsonUserConfig();
          this.is_login && this.$refs.userHeader.showShakeAni();
          this.showBirthEntry && c.default.track("PopMartMemberMPbirthdayentranceShow");
        },
        onPullDownRefresh: function () {
          this.getJsonUserConfig();
        },
        methods: {
          randomBackground: function () {
            var t = parseInt(4 * Math.random()) + 1;
            this.userTopBg = "https://res.paquapp.com/popmartvip/new_ui/user/user_top_bg".concat(t, ".png");
          },
          getSpecialScreen: function () {
            this.setTabBarIndex(4);
          },
          getJsonUserConfig: function () {
            var t = this;
            return v(d().mark(function e() {
              var n, r;
              return d().wrap(function (e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    {
                      e.next = 2;
                      return (0, i.jsonUserConfig)();
                    }
                  case 2:
                    {
                      n = e.sent;
                      r = n.data;
                      null != r ? t.user_config = r : t.user_config = {};
                      t.user_info = t.globalUser || r.user_info;
                      t.is_login && (t.getProperty(), w.getUserInfo());
                    }
                  case 7:
                    {}
                  case "end":
                    {
                      return e.stop();
                    }
                }
              }, e);
            }))();
          },
          getProperty: function () {
            var t = this;
            Promise.all([(0, i.goPopBadgeNum)(), (0, i.pyUserQuantity)(), a.default.goGetBoxCouponList({
              group_type: 1,
              state: 0,
              is_count: 1
            })]).then(function (e) {
              t.userBadges = e[0].data.data;
              e[1].data.data.coupon_count += e[2].data.data.total;
              t.userQuantity = e[1].data.data;
              t.$nextTick(function () {
                return t.initComponents();
              });
            });
          },
          initComponents: function () {
            for (var t in this.$refs) if (this.$refs[t].init) {
              this.$refs[t].init();
            }
            e.stopPullDownRefresh();
          },
          toPage: function (t) {
            var n = t.config,
              r = t.notice,
              o = t.track,
              i = 0 === o ? null : o;
            this.is_login ? (i && c.default.track(i.name, m({}, i.data)), r && r.message ? this.watchSubscribeMessage(n, r) : (0, u.jumpPage)(n)) : n.hasOwnProperty("need_login") && 0 == n.need_login ? (0, u.jumpPage)(n) : e.navigateTo({
              url: "/packages/login/pages/indexLogin/indexLogin"
            });
          },
          watchSubscribeMessage: function (t, e) {
            var n = this;
            return v(d().mark(function e() {
              var r, o;
              return d().wrap(function (e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    {
                      "rule_my_page_coupon_expiration";
                      r = "SF2EgJqSm2ls-hmDx-z3YZom0JkQIT08jDl1Z4nGNqY";
                      e.prev = 2;
                      e.next = 5;
                      return (0, i.goNewQueryMsgSub)({
                        alias: "rule_my_page_coupon_expiration",
                        key: "coupon_expiration",
                        type: "1"
                      });
                    }
                  case 5:
                    {
                      if (o = e.sent, !o.data.data.sub) {
                        e.next = 10;
                        break;
                      }
                      (0, u.jumpPage)(t);
                      return e.abrupt("return");
                    }
                  case 10:
                    {
                      n.subscribeMessage(t, [r]);
                      e.next = 16;
                      break;
                    }
                  case 13:
                    {
                      e.prev = 13;
                      e.t0 = e.catch(2);
                      (0, u.jumpPage)(t);
                    }
                  case 16:
                    {}
                  case "end":
                    {
                      return e.stop();
                    }
                }
              }, e, null, [[2, 13]]);
            }))();
          },
          subscribeMessage: function (t, e) {
            (0, f.default)("requestSubscribeMessage", {
              tmplIds: e
            }).then(function (t) {
              if (Object.keys(t).filter(function (e) {
                return "accept" == t[e];
              }).length > 0) {
                (0, i.goNewMsgSub)({
                  alias: "rule_my_page_coupon_expiration",
                  key: "coupon_expiration",
                  type: "1"
                });
              }
            }).finally(function () {
              return (0, u.jumpPage)(t);
            });
          },
          noLogin: function () {
            e.stopPullDownRefresh();
            e.showToast({
              title: "您还没有登录哦，请先登录",
              icon: "none"
            });
          },
          serverConfig: function () {
            e.navigateTo({
              url: "/packages/serverConfig/pages/serverConfig"
            });
          }
        },
        watch: {
          globalUser: function (t) {
            this.user_info = Object.assign({}, m({}, t));
            this.$forceUpdate();
          }
        }
      });
    }).call(this, r("543d").default);
  },
  "7a53": function (t, e, n) {},
  "94c7": function (t, e, n) {
    var r = n("7a53");
    n.n(r).a;
  },
  c870: function (t, e, n) {
    n.d(e, "b", function () {
      return o;
    });
    n.d(e, "c", function () {
      return i;
    });
    n.d(e, "a", function () {
      return r;
    });
    var r = {
        pmLoading: function () {
          return n.e("components/pm-loading/pm-loading").then(n.bind(null, "763f"));
        },
        pmBackButton: function () {
          return n.e("components/pm-back-button/pm-back-button").then(n.bind(null, "1f58"));
        }
      },
      o = function () {
        this.$createElement;
        this._self._c;
      },
      i = [];
  }
}, [["07e5", "common/runtime", "common/vendor"]]]);