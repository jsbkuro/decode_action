//Fri Mar 28 2025 11:44:05 GMT+0000 (Coordinated Universal Time)
//Base:<url id="cv1cref6o68qmpt26ol0" type="url" status="parsed" title="GitHub - echo094/decode-js: JS混淆代码的AST分析工具 AST analysis tool for obfuscated JS code" wc="2165">https://github.com/echo094/decode-js</url>
//Modify:<url id="cv1cref6o68qmpt26olg" type="url" status="parsed" title="GitHub - smallfawn/decode_action: 世界上本来不存在加密，加密的人多了，也便成就了解密" wc="741">https://github.com/smallfawn/decode_action</url>
const $ = new Env('种豆得豆收取好友营养液');
var vTtnM0g = Object['\x64\x65\x66\x69\x6e\x65\x50\x72\x6f\x70\x65\x72\x74\x79'],
  xM8OSc,
  q6SAtC,
  lN3YKTA,
  OUqBGjz,
  n5cPa1,
  _wRI7FD,
  q9WytXY,
  gT5Reg;
function TRoiWb() {
  return globalThis;
}
function yPMRAMr() {
  return global;
}
function WUTmnt() {
  return window;
}
function Sh5pe94() {
  return new Function("return this")();
}
function JVoj7H2(vTtnM0g = [TRoiWb, yPMRAMr, WUTmnt, Sh5pe94], cAHUAr9, _i8j53z = [], xM8OSc, q6SAtC) {
  cAHUAr9 = cAHUAr9;
  try {
    cAHUAr9 = Object
    _i8j53z["push"](''["__proto__"].constructor["name"])
  } catch (e) {}
  OrmbU7o: for (xM8OSc = 0; xM8OSc < vTtnM0g["length"]; xM8OSc++) try {
    cAHUAr9 = vTtnM0g[xM8OSc]();
    for (q6SAtC = 0x0; q6SAtC < _i8j53z.length; q6SAtC++) {
      if (typeof cAHUAr9[_i8j53z[q6SAtC]] === "undefined") {
        continue OrmbU7o;
      }
    }
    return cAHUAr9;
  } catch (e) {}
  return cAHUAr9 || this;
}
xM8OSc = JVoj7H2() || {}
q6SAtC = xM8OSc.TextDecoder
lN3YKTA = xM8OSc.Uint8Array
OUqBGjz = xM8OSc.Buffer
n5cPa1 = xM8OSc.String || String
_wRI7FD = xM8OSc["Array"] || Array
function cOkEFTK(...vTtnM0g) {
  return vTtnM0g[vTtnM0g["length"] - 1];
}
function ke6BZJ(NC37KUM, vTtnM0g) {
  switch (gT5Reg) {
    case -0x22:
      return !NC37KUM;
    case 4:
      return NC37KUM + vTtnM0g;
  }
}
function wNOeuTO(NC37KUM) {
  return cOkEFTK(NC37KUM = gT5Reg + (gT5Reg = NC37KUM, 0), NC37KUM);
}
gT5Reg = gT5Reg;
const jXUrSVP = require('./jdCookie'),
  PNg_Nxv = require('./utils/Rebels_sendJDNotify'),
  RnVko1 = require('./utils/Rebels_jdCommon'),
  {
    ["H5st"]: pDpxSk
  } = require('./utils/Rebels_H'),
  fbms_KH = (process["env"]["jd_plantBean_notify"] || process["env"]["jd_plantBean_Notify"]) === "true";
let KmbUDj1 = '',
  v3UkQBf = Object["keys"](jXUrSVP)["map"](NC37KUM => jXUrSVP[NC37KUM])["filter"](NC37KUM => NC37KUM);
if (ke6BZJ(v3UkQBf[0x0], gT5Reg = -0x22)) {
  $["msg"]($["name"], "【提示】请先获取Cookie")
  process["exit"](1)
}
ke6BZJ((async () => {
  for (let OUqBGjz = cOkEFTK(console["log"](`==========${$["name"]}变量开启状态==========`), console["log"](`活动入口: [APP-我的-种豆得豆]`), console["log"](`代理开关: [${RnVko1["getProxyStatus"]()}]`), console["log"](`==========${$["name"]}变量状态结束==========`), console["log"](''), PNg_Nxv["config"]({
    ["title"]: $["name"]
  }), 0); OUqBGjz < v3UkQBf["length"]; OUqBGjz++) {
    if (cOkEFTK($["index"] = ke6BZJ(OUqBGjz, 1, wNOeuTO(0x4)), KmbUDj1 = v3UkQBf[OUqBGjz], RnVko1["setCookie"](KmbUDj1), $["UserName"] = decodeURIComponent(RnVko1["getCookieValue"](KmbUDj1, "pt_pin")), $.UA = RnVko1["genUA"]($["UserName"]), $["message"] = PNg_Nxv["create"]($["index"], $["UserName"]), $["nickName"] = '', $["title"] = `【账号${$["index"]}】${$["UserName"]}：`, await FrfDfN(), await $["wait"](3000), RnVko1["unsetCookie"](), $["runEnd"])) {
      break;
    }
  }
  const TRoiWb = PNg_Nxv["getMessage"]();
  if (TRoiWb) {
    var yPMRAMr = [" ➜ "];
    if (cOkEFTK(console["log"](`\n📣 运行结果\n${TRoiWb["replace"](/：/g, yPMRAMr[0x0])}`), fbms_KH)) {
      PNg_Nxv["appendContent"](`\n`)
      await PNg_Nxv["push"]()
    }
  }
})()["catch"](NC37KUM => $["logErr"](NC37KUM))["finally"](() => $["done"]()), gT5Reg = -0x22);
async function FrfDfN() {
  try {
    const OUqBGjz = await RnVko1["getLoginStatus"](KmbUDj1);
    if (ke6BZJ(OUqBGjz, wNOeuTO(-34)) && typeof OUqBGjz === "boolean") {
      return cOkEFTK(console["log"](`${$["title"]}账号无效`), undefined);
    }
    if (cOkEFTK($["skipRun"] = false, $["stopRun"] = false, $["plantBeanIndex"] = '', await gc6Ris("plantBeanIndex"), $["plantBeanIndex"])) {
      const TRoiWb = $["plantBeanIndex"]?.["roundList"] || [];
      if (cOkEFTK(TRoiWb["forEach"](vTtnM0g => {
        const {
          ["roundId"]: cAHUAr9,
          ["dateDesc"]: xM8OSc
        } = vTtnM0g;
        if (xM8OSc["includes"]("本期")) {
          $["currentRoundId"] = cAHUAr9;
        }
      }), await $["wait"](500), $["plantFriendList"] = '', await gc6Ris("plantFriendList"), $["stopRun"])) {
        return;
      }
      if ($["plantFriendList"]) {
        if ($["plantFriendList"] && $["plantFriendList"]?.["tips"]) {
          var jXUrSVP = {
            ["S9VYqSt"]: "title"
          };
          return cOkEFTK(console["log"](`${$[jXUrSVP.S9VYqSt]}今日收取好友营养液已达上限`), undefined);
        }
        if ($["plantFriendList"] && $["plantFriendList"]?.["friendInfoList"] && $["plantFriendList"]?.["friendInfoList"]?.["length"] > 0x0) {
          let v3UkQBf = new Date(ke6BZJ(new Date()["getTime"]() + new Date()["getTimezoneOffset"]() * 0x3c * 1000, 28800000, wNOeuTO(0x4))),
            sd3_c23 = cOkEFTK($["plantNickName"] = '', false);
          for (let iv3S_r8 of $["plantFriendList"]?.["friendInfoList"]) {
            if (cOkEFTK($["plantNickName"] = iv3S_r8["plantNickName"], ke6BZJ(iv3S_r8["nutrCount"], wNOeuTO(-34)))) {
              continue;
            }
            if (new Date(v3UkQBf)["getHours"]() >= 20) {
              if (cOkEFTK(sd3_c23 = true, iv3S_r8["nutrCount"]) >= 0x1) {
                if (cOkEFTK($["paradiseUuid"] = iv3S_r8?.["paradiseUuid"], await gc6Ris("collectUserNutr"), await $["wait"](3000), $["skipRun"] || $["stopRun"])) {
                  break;
                }
              }
            } else {
              var yTXhkj = "getHours";
              if (new Date(v3UkQBf)[yTXhkj]() >= 0x12) {
                if (cOkEFTK(sd3_c23 = true, iv3S_r8["nutrCount"]) >= 2) {
                  if (cOkEFTK($["paradiseUuid"] = iv3S_r8?.["paradiseUuid"], await gc6Ris("collectUserNutr"), await $["wait"](3000), $["skipRun"] || $["stopRun"])) {
                    break;
                  }
                } else {
                  console["log"](`${$["title"]}好友[${$["plantNickName"]}]的营养液不足2瓶，暂不收取`)
                }
              } else {
                if (cOkEFTK(sd3_c23 = true, iv3S_r8["nutrCount"]) >= 3) {
                  if (cOkEFTK($["paradiseUuid"] = iv3S_r8?.["paradiseUuid"], await gc6Ris("collectUserNutr"), await $["wait"](3000), $["skipRun"] || $["stopRun"])) {
                    break;
                  }
                } else {
                  console["log"](`${$["title"]}好友[${$["plantNickName"]}]的营养液不足3瓶，暂不收取`);
                }
              }
            }
            if (($["skipRun"] || $["stopRun"]) && 1) {
              break;
            }
            await $["wait"](0x3e8);
          }
          if (ke6BZJ(sd3_c23, gT5Reg = -34) && 1) {
            var tx2U4F = "log";
            console[tx2U4F](`${$["title"]}暂时没有好友有可收取的营养液`);
          }
        } else {
          console["log"](`${$["title"]}暂时没有好友有可收取的营养液`);
        }
      }
      if (cOkEFTK(await $["wait"](500), $["plantBeanIndex"] = '', await gc6Ris("plantBeanIndex"), $["plantBeanIndex"]?.["roundList"])) {
        var TL7ChiH = ["roundList"];
        for (let wpRA_Y of $["plantBeanIndex"][TL7ChiH[0x0]]) {
          const {
            ["roundId"]: dd33W47,
            ["dateDesc"]: RZDdwm
          } = wpRA_Y;
          if (RZDdwm["includes"]("本期") && 1) {
            var xGi5Q7 = ["bubbleInfos"];
            const Hv6lWQk = cOkEFTK($["currentRoundId"] = dd33W47, wpRA_Y);
            if (Hv6lWQk?.["bubbleInfos"] && Hv6lWQk?.[xGi5Q7[0x0]]["length"] && 1) {
              for (let o1p5Oqr of Hv6lWQk["bubbleInfos"]) {
                if (cOkEFTK($["taskbubbleInfo"] = o1p5Oqr, $["nutrientsType"] = o1p5Oqr?.["nutrientsType"], await gc6Ris("cultureBean"), await $["wait"](3000), $["stopRun"])) {
                  break;
                }
              }
            }
          }
        }
      }
      await $["wait"](0x7d0);
    }
  } catch (e) {
    console["log"](`❌ 脚本运行遇到了错误\n${e}`);
  }
}
async function vUIimY(vTtnM0g, cAHUAr9) {
  try {
    let OUqBGjz = '';
    switch (vTtnM0g) {
      case "plantBeanIndex":
        if (cAHUAr9["code"] === '\u0030' && cAHUAr9["data"] && 1) {
          var n5cPa1 = {
            p48c1K: "plantBeanIndex"
          };
          $[n5cPa1["p48c1K"]] = cAHUAr9["data"];
        } else {
          if (cOkEFTK(OUqBGjz = RnVko1["getErrorMsg"](cAHUAr9), console["log"](`${$["title"]}种豆得豆失败：${OUqBGjz}`), OUqBGjz?.["includes"]('火爆') || OUqBGjz?.["includes"]("此路拥堵"))) {
            $["stopRun"] = true;
          }
        }
        break;
      case "collectUserNutr":
        if (cAHUAr9["code"] === "0" && cAHUAr9["data"]) {
          if (cAHUAr9["data"]["collectResult"] === '1') {
            if (cAHUAr9["data"]["collectNutrRewards"] > 0x0) {
              var e49t4W = {
                IPvH1S: "title"
              };
              console["log"](`${$[e49t4W.IPvH1S]}成功帮[${$["plantNickName"]}]收取[${cAHUAr9["data"]["friendNutrRewards"]}]瓶营养液,获得[${cAHUAr9["data"]["collectNutrRewards"]}]瓶营养液🍼`);
            } else {
              var gT5Reg = "data";
              console["log"](`${$["title"]}成功帮[${$["plantNickName"]}]收取[${cAHUAr9[gT5Reg]["friendNutrRewards"]}]瓶营养液,未获得营养液`);
            }
          } else {
            var TRoiWb = ["collectResult"];
            if (cAHUAr9["data"][TRoiWb[0]] === '3') {
              console["log"](`${$["title"]}今日帮助[${$["plantNickName"]}]收取次数已达上限，明天再来帮忙吧`)
              $["skipRun"] = true
            } else {
              console["log"](`${$["title"]}[${$["plantNickName"]}]${cAHUAr9["data"]["collectMsg"]}`)
            }
          }
        } else {
          if (cOkEFTK(OUqBGjz = RnVko1["getErrorMsg"](cAHUAr9), console["log"](`${$["title"]}收取失败：${OUqBGjz}`), OUqBGjz?.["includes"]('火爆') || OUqBGjz?.["includes"]("此路拥堵"))) {
            $["stopRun"] = true;
          }
        }
        break;
      case "plantFriendList":
        if (cAHUAr9["code"] === "0" && cAHUAr9["data"]) {
          $["plantFriendList"] = cAHUAr9["data"];
        } else {
          if (cOkEFTK(OUqBGjz = RnVko1["getErrorMsg"](cAHUAr9), console["log"](`${$["title"]}查询收取好友失败：${OUqBGjz}`), OUqBGjz?.["includes"]('火爆') || OUqBGjz?.["includes"]("此路拥堵"))) {
            $["stopRun"] = true;
          }
        }
        break;
      case "cultureBean":
        if (cAHUAr9["code"] === "0" && cAHUAr9["data"]) {
          var ke6BZJ = {
            oZmcgH: "growth"
          };
          console["log"](`${$["title"]}收集[${$["taskbubbleInfo"]["name"]}]营养液x${$["taskbubbleInfo"]["nutrNum"]}🍼，共计[${cAHUAr9["data"][ke6BZJ.oZmcgH]}]瓶营养液🍼`)
        } else {
          if (cOkEFTK(OUqBGjz = RnVko1["getErrorMsg"](cAHUAr9), console["log"](`${$["title"]}收取失败：${OUqBGjz}`), OUqBGjz?.["includes"]('火爆') || OUqBGjz?.["includes"]("此路拥堵"))) {
            $["stopRun"] = true;
          }
        }
    }
  } catch (e) {
    console["log"](`❌ 未能正确处理 ${vTtnM0g} 请求响应 ${e["message"] || e}`);
  }
}
async function gc6Ris(vTtnM0g) {
  if ($["runEnd"]) {
    return;
  }
  let lN3YKTA = '',
    OUqBGjz = null,
    n5cPa1 = null,
    _wRI7FD = "GET",
    q9WytXY = {},
    kAe_Gc = {};
  switch (vTtnM0g) {
    case "plantBeanIndex":
      kAe_Gc = {
        ["appId"]: "d246a",
        ["functionId"]: "plantBeanIndex",
        ["appid"]: "signed_wh5",
        ["clientVersion"]: RnVko1["getLatestAppVersion"](),
        ["client"]: "apple",
        ["body"]: {
          ["monitor_source"]: "plant_m_plant_index",
          ["monitor_refer"]: '',
          ["version"]: "9.2.4.3"
        },
        ["ua"]: $.UA,
        t: true
      }
      q9WytXY = await pDpxSk["getH5st"](kAe_Gc)
      lN3YKTA = "https://api.m.jd.com/client.action?functionId=plantBeanIndex"
      n5cPa1 = Object["assign"]({}, q9WytXY["paramsData"], {})
      break;
    case "collectUserNutr":
      kAe_Gc = {
        ["appId"]: "14357",
        ["functionId"]: "collectUserNutr",
        ["appid"]: "signed_wh5",
        ["clientVersion"]: RnVko1["getLatestAppVersion"](),
        ["client"]: "apple",
        ["body"]: {
          ["roundId"]: $["currentRoundId"],
          ["paradiseUuid"]: $["paradiseUuid"],
          ["monitor_source"]: "plant_m_plant_index",
          ["monitor_refer"]: "collectUserNutr",
          ["version"]: "9.2.4.3"
        },
        ["ua"]: $["UA"],
        t: true
      }
      q9WytXY = await pDpxSk["getH5st"](kAe_Gc)
      lN3YKTA = "https://api.m.jd.com/client.action?functionId=collectUserNutr"
      n5cPa1 = Object["assign"]({}, q9WytXY["paramsData"], {})
      break;
    case "cultureBean":
      kAe_Gc = {
        ["appId"]: "6a216",
        ["functionId"]: "cultureBean",
        ["appid"]: "signed_wh5",
        ["clientVersion"]: RnVko1["getLatestAppVersion"](),
        ["client"]: "apple",
        ["body"]: {
          ["roundId"]: $["currentRoundId"],
          ["nutrientsType"]: $["nutrientsType"],
          ["monitor_source"]: "plant_m_plant_index",
          ["monitor_refer"]: "plant_index",
          ["version"]: "9.2.4.3"
        },
        ua: $.UA,
        t: true
      }
      q9WytXY = await pDpxSk["getH5st"](kAe_Gc)
      lN3YKTA = "https://api.m.jd.com/client.action?functionId=cultureBean"
      n5cPa1 = Object["assign"]({}, q9WytXY["paramsData"], {})
      break;
    case "plantFriendList":
      lN3YKTA = "https://api.m.jd.com/client.action?functionId=plantFriendList"
      n5cPa1 = {
        ["appid"]: "signed_wh5",
        ["functionId"]: "plantFriendList",
        ["body"]: JSON["stringify"]({
          ["pageNum"]: '\u0031',
          ["monitor_source"]: "plant_m_plant_index",
          ["monitor_refer"]: "plantFriendList",
          ["version"]: "9.2.4.3"
        })
      }
      break;
    default:
      console["log"](`❌ 未知请求 ${vTtnM0g}`);
      return;
  }
  const e49t4W = {};
  if (OUqBGjz) {
    Object["assign"](OUqBGjz, e49t4W);
  }
  if (n5cPa1) {
    Object["assign"](n5cPa1, e49t4W);
  }
  const TRoiWb = {
    ["url"]: lN3YKTA,
    ["method"]: _wRI7FD,
    ["headers"]: {
      ["Accept"]: "*/*",
      ["Origin"]: "https://plantearth.m.jd.com",
      ["Accept-Encoding"]: "gzip,deflate,br",
      ["User-Agent"]: $["UA"],
      ["Accept-Language"]: "zh-CN,zh-Hans;q=0.9",
      ["Referer"]: "https://plantearth.m.jd.com/",
      ["Cookie"]: KmbUDj1
    },
    ["params"]: n5cPa1,
    ["data"]: OUqBGjz,
    ["timeout"]: 0x7530,
    ["httpsTlsOptions"]: {
      ["secureProtocol"]: "TLSv1_2_method",
      ["ciphers"]: "ECDHE-RSA-AES256-GCM-SHA384"
    }
  };
  if (_wRI7FD === "GET") {
    delete (delete TRoiWb["data"], TRoiWb["headers"]["Content-Type"]);
  }
  const yPMRAMr = 1;
  let WUTmnt = 0,
    Sh5pe94 = null;
  while (WUTmnt < yPMRAMr) {
    if (WUTmnt > 0 && 1) {
      await $["wait"](1000);
    }
    const cOkEFTK = await RnVko1["request"](TRoiWb);
    if (ke6BZJ(cOkEFTK["success"], wNOeuTO(-34))) {
      Sh5pe94 = `🚫 ${vTtnM0g} 请求失败 ➜ ${cOkEFTK["error"]}`
      WUTmnt++
      continue;
    }
    if (ke6BZJ(cOkEFTK["data"], gT5Reg = -34)) {
      Sh5pe94 = `🚫 ${vTtnM0g} 请求失败 ➜ 无响应数据`
      WUTmnt++
      continue;
    }
    await vUIimY(vTtnM0g, cOkEFTK["data"]);
    break;
  }
  if (WUTmnt >= yPMRAMr) {
    console["log"](Sh5pe94);
  }
}
function Env(t, e) {
  "undefined" != typeof process && JSON.stringify(process.env).indexOf("GITHUB") > -1 && process.exit(0);
  class s {
    constructor(t) {
      this.env = t;
    }
    send(t, e = "GET") {
      t = "string" == typeof t ? {
        url: t
      } : t;
      let s = this.get;
      return "POST" === e && (s = this.post), new Promise((e, i) => {
        s.call(this, t, (t, s, r) => {
          t ? i(t) : e(s);
        });
      });
    }
    get(t) {
      return this.send.call(this.env, t);
    }
    post(t) {
      return this.send.call(this.env, t, "POST");
    }
  }
  return new class {
    constructor(t, e) {
      this.name = t, this.http = new s(this), this.data = null, this.dataFile = "box.dat", this.logs = [], this.isMute = false, this.isNeedRewrite = false, this.logSeparator = "\n", this.startTime = new Date().getTime(), Object.assign(this, e), this.log("", `🔔${this.name}, 开始!`);
    }
    isNode() {
      return "undefined" != typeof module && !!module.exports;
    }
    isQuanX() {
      return "undefined" != typeof $task;
    }
    isSurge() {
      return "undefined" != typeof $httpClient && "undefined" == typeof $loon;
    }
    isLoon() {
      return "undefined" != typeof $loon;
    }
    toObj(t, e = null) {
      try {
        return JSON.parse(t);
      } catch {
        return e;
      }
    }
    toStr(t, e = null) {
      try {
        return JSON.stringify(t);
      } catch {
        return e;
      }
    }
    getjson(t, e) {
      let s = e;
      const i = this.getdata(t);
      if (i) try {
        s = JSON.parse(this.getdata(t));
      } catch {}
      return s;
    }
    setjson(t, e) {
      try {
        return this.setdata(JSON.stringify(t), e);
      } catch {
        return false;
      }
    }
    getScript(t) {
      return new Promise(e => {
        this.get({
          url: t
        }, (t, s, i) => e(i));
      });
    }
    runScript(t, e) {
      return new Promise(s => {
        let i = this.getdata("@chavy_boxjs_userCfgs.httpapi");
        i = i ? i.replace(/\n/g, "").trim() : i;
        let r = this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout");
        r = r ? 1 * r : 20, r = e && e.timeout ? e.timeout : r;
        const [o, h] = i.split("@"),
          n = {
            url: `http://${h}/v1/scripting/evaluate`,
            body: {
              script_text: t,
              mock_type: "cron",
              timeout: r
            },
            headers: {
              "X-Key": o,
              Accept: "*/*"
            }
          };
        this.post(n, (t, e, i) => s(i));
      }).catch(t => this.logErr(t));
    }
    loaddata() {
      if (!this.isNode()) return {};
      {
        this.fs = this.fs ? this.fs : require("fs"), this.path = this.path ? this.path : require("path");
        const t = this.path.resolve(this.dataFile),
          e = this.path.resolve(process.cwd(), this.dataFile),
          s = this.fs.existsSync(t),
          i = !s && this.fs.existsSync(e);
        if (!s && !i) return {};
        {
          const i = s ? t : e;
          try {
            return JSON.parse(this.fs.readFileSync(i));
          } catch (t) {
            return {};
          }
        }
      }
    }
    writedata() {
      if (this.isNode()) {
        this.fs = this.fs ? this.fs : require("fs"), this.path = this.path ? this.path : require("path");
        const t = this.path.resolve(this.dataFile),
          e = this.path.resolve(process.cwd(), this.dataFile),
          s = this.fs.existsSync(t),
          i = !s && this.fs.existsSync(e),
          r = JSON.stringify(this.data);
        s ? this.fs.writeFileSync(t, r) : i ? this.fs.writeFileSync(e, r) : this.fs.writeFileSync(t, r);
      }
    }
    lodash_get(t, e, s) {
      const i = e.replace(/\[(\d+)\]/g, ".$1").split(".");
      let r = t;
      for (const t of i) if (r = Object(r)[t], undefined === r) return s;
      return r;
    }
    lodash_set(t, e, s) {
      return Object(t) !== t ? t : (Array.isArray(e) || (e = e.toString().match(/[^.[\]]+/g) || []), e.slice(0, -1).reduce((t, s, i) => Object(t[s]) === t[s] ? t[s] : t[s] = Math.abs(e[i + 1]) >> 0 == +e[i + 1] ? [] : {}, t)[e[e.length - 1]] = s, t);
    }
    getdata(t) {
      let e = this.getval(t);
      if (/^@/.test(t)) {
        const [, s, i] = /^@(.*?)\.(.*?)$/.exec(t),
          r = s ? this.getval(s) : "";
        if (r) try {
          const t = JSON.parse(r);
          e = t ? this.lodash_get(t, i, "") : e;
        } catch (t) {
          e = "";
        }
      }
      return e;
    }
    setdata(t, e) {
      let s = false;
      if (/^@/.test(e)) {
        const [, i, r] = /^@(.*?)\.(.*?)$/.exec(e),
          o = this.getval(i),
          h = i ? "null" === o ? null : o || "{}" : "{}";
        try {
          const e = JSON.parse(h);
          this.lodash_set(e, r, t), s = this.setval(JSON.stringify(e), i);
        } catch (e) {
          const o = {};
          this.lodash_set(o, r, t), s = this.setval(JSON.stringify(o), i);
        }
      } else s = this.setval(t, e);
      return s;
    }
    getval(t) {
      return this.isSurge() || this.isLoon() ? $persistentStore.read(t) : this.isQuanX() ? $prefs.valueForKey(t) : this.isNode() ? (this.data = this.loaddata(), this.data[t]) : this.data && this.data[t] || null;
    }
    setval(t, e) {
      return this.isSurge() || this.isLoon() ? $persistentStore.write(t, e) : this.isQuanX() ? $prefs.setValueForKey(t, e) : this.isNode() ? (this.data = this.loaddata(), this.data[e] = t, this.writedata(), true) : this.data && this.data[e] || null;
    }
    initGotEnv(t) {
      this.got = this.got ? this.got : require("got"), this.cktough = this.cktough ? this.cktough : require("tough-cookie"), this.ckjar = this.ckjar ? this.ckjar : new this.cktough.CookieJar(), t && (t.headers = t.headers ? t.headers : {}, undefined === t.headers.Cookie && undefined === t.cookieJar && (t.cookieJar = this.ckjar));
    }
    get(t, e = () => {}) {
      t.headers && (delete t.headers["Content-Type"], delete t.headers["Content-Length"]), this.isSurge() || this.isLoon() ? (this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, {
        "X-Surge-Skip-Scripting": false
      })), $httpClient.get(t, (t, s, i) => {
        !t && s && (s.body = i, s.statusCode = s.status), e(t, s, i);
      })) : this.isQuanX() ? (this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, {
        hints: false
      })), $task.fetch(t).then(t => {
        const {
          statusCode: s,
          statusCode: i,
          headers: r,
          body: o
        } = t;
        e(null, {
          status: s,
          statusCode: i,
          headers: r,
          body: o
        }, o);
      }, t => e(t))) : this.isNode() && (this.initGotEnv(t), this.got(t).on("redirect", (t, e) => {
        try {
          if (t.headers["set-cookie"]) {
            const s = t.headers["set-cookie"].map(this.cktough.Cookie.parse).toString();
            s && this.ckjar.setCookieSync(s, null), e.cookieJar = this.ckjar;
          }
        } catch (t) {
          this.logErr(t);
        }
      }).then(t => {
        const {
          statusCode: s,
          statusCode: i,
          headers: r,
          body: o
        } = t;
        e(null, {
          status: s,
          statusCode: i,
          headers: r,
          body: o
        }, o);
      }, t => {
        const {
          message: s,
          response: i
        } = t;
        e(s, i, i && i.body);
      }));
    }
    post(t, e = () => {}) {
      if (t.body && t.headers && !t.headers["Content-Type"] && (t.headers["Content-Type"] = "application/x-www-form-urlencoded"), t.headers && delete t.headers["Content-Length"], this.isSurge() || this.isLoon()) this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, {
        "X-Surge-Skip-Scripting": false
      })), $httpClient.post(t, (t, s, i) => {
        !t && s && (s.body = i, s.statusCode = s.status), e(t, s, i);
      });else if (this.isQuanX()) t.method = "POST", this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, {
        hints: false
      })), $task.fetch(t).then(t => {
        const {
          statusCode: s,
          statusCode: i,
          headers: r,
          body: o
        } = t;
        e(null, {
          status: s,
          statusCode: i,
          headers: r,
          body: o
        }, o);
      }, t => e(t));else if (this.isNode()) {
        this.initGotEnv(t);
        const {
          url: s,
          ...i
        } = t;
        this.got.post(s, i).then(t => {
          const {
            statusCode: s,
            statusCode: i,
            headers: r,
            body: o
          } = t;
          e(null, {
            status: s,
            statusCode: i,
            headers: r,
            body: o
          }, o);
        }, t => {
          const {
            message: s,
            response: i
          } = t;
          e(s, i, i && i.body);
        });
      }
    }
    time(t, e = null) {
      const s = e ? new Date(e) : new Date();
      let i = {
        "M+": s.getMonth() + 1,
        "d+": s.getDate(),
        "H+": s.getHours(),
        "m+": s.getMinutes(),
        "s+": s.getSeconds(),
        "q+": Math.floor((s.getMonth() + 3) / 3),
        S: s.getMilliseconds()
      };
      /(y+)/.test(t) && (t = t.replace(RegExp.$1, (s.getFullYear() + "").substr(4 - RegExp.$1.length)));
      for (let e in i) new RegExp("(" + e + ")").test(t) && (t = t.replace(RegExp.$1, 1 == RegExp.$1.length ? i[e] : ("00" + i[e]).substr(("" + i[e]).length)));
      return t;
    }
    msg(e = t, s = "", i = "", r) {
      const o = t => {
        if (!t) return t;
        if ("string" == typeof t) return this.isLoon() ? t : this.isQuanX() ? {
          "open-url": t
        } : this.isSurge() ? {
          url: t
        } : undefined;
        if ("object" == typeof t) {
          if (this.isLoon()) {
            let e = t.openUrl || t.url || t["open-url"],
              s = t.mediaUrl || t["media-url"];
            return {
              openUrl: e,
              mediaUrl: s
            };
          }
          if (this.isQuanX()) {
            let e = t["open-url"] || t.url || t.openUrl,
              s = t["media-url"] || t.mediaUrl;
            return {
              "open-url": e,
              "media-url": s
            };
          }
          if (this.isSurge()) {
            let e = t.url || t.openUrl || t["open-url"];
            return {
              url: e
            };
          }
        }
      };
      if (this.isMute || (this.isSurge() || this.isLoon() ? $notification.post(e, s, i, o(r)) : this.isQuanX() && $notify(e, s, i, o(r))), !this.isMuteLog) {
        let t = ["", "==============📣系统通知📣=============="];
        t.push(e), s && t.push(s), i && t.push(i), console.log(t.join("\n")), this.logs = this.logs.concat(t);
      }
    }
    log(...t) {
      t.length > 0 && (this.logs = [...this.logs, ...t]), console.log(t.join(this.logSeparator));
    }
    logErr(t, e) {
      const s = !this.isSurge() && !this.isQuanX() && !this.isLoon();
      s ? this.log("", `❗️${this.name}, 错误!`, t.stack) : this.log("", `❗️${this.name}, 错误!`, t);
    }
    wait(t) {
      return new Promise(e => setTimeout(e, t));
    }
    done(t = {}) {
      const e = new Date().getTime(),
        s = (e - this.startTime) / 1e3;
      this.log("", `🔔${this.name}, 结束! 🕛 ${s} 秒`), this.log(), (this.isSurge() || this.isQuanX() || this.isLoon()) && $done(t);
    }
  }(t, e);
}