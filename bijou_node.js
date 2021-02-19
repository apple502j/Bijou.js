Object.defineProperty(exports, '__esModule', { value: !0 }),
  (exports.jsonToCsv = exports.regex = exports.cookies = exports.imageToData = exports.loadScript = exports.requestInterval = exports.saveBlob = exports.preloadImage = exports.getHTML = exports.getJSON = exports.formatHTML = exports.playSection = exports.dispatch = exports.hub = exports.onScrollStop = exports.onOutsideClick = exports.replaceSelection = exports.fullScreen = exports.tilt = exports.observeMutations = exports.attributes = exports.inlineCSS = exports.disableRightClick = exports.elementSiblings = exports.compStyle = exports.createElement = exports.addStyles = exports.sortTableBy = exports.sortTable = exports.addEventListeners = exports.drag = exports.parseHTML = exports.removeComments = exports.querySelector = exports.textNodes = exports.replaceText = exports.serializeForm = exports.inPartialView = exports.inView = exports.context = exports.sortObj = exports.formToObject = exports.mapObjectValues = exports.mapObjectKeys = exports.merge = exports.listen = exports.clone = exports.runAsync = exports.debounce = exports.throttle = exports.isAsync = exports.curryFunction = exports.composeFunction = exports.memoize = exports.spread = exports.each = exports.uniqueArray = exports.averageBy = exports.unionArrays = exports.splice = exports.shuffleArray = exports.contains = exports.nFlatten = exports.flatten = exports.spliceArrayBuffer = exports.remove = exports.diff = exports.arrayDiff = exports.previousPage = exports.unescapeHTML = exports.escapeHTML = exports.replaceBetween = exports.capitalize = exports.syllables = exports.beautifyJS = exports.markdownToHTML = exports.sanitize = exports.urlQuery = exports.replaceMultiple = exports.byteSize = exports.editDistance = exports.hashString = exports.scrambleString = exports.camelCase = exports.syntaxHighlight = exports.unCamelCase = exports.widows = exports.speak = exports.removeTags = exports.mobileOrDesktop = exports.formatMilliseconds = exports.dayName = exports.ease = exports.formatNumber = exports.seedRandom = exports.random = exports.primesTo = exports.uuid = exports.range = exports.animate = void 0),
  (exports._$ = exports[
    'default'
  ] = exports.lightOrDark = exports.lightenColor = exports.randomColor = exports.blendColors = exports.hexToRGB = exports.rgbToHex = exports.browser = exports.copy = exports.notify = exports.timeFunction = exports.arrayToCSV = void 0);
let e = !1;
(e = 'undefined' == typeof window || 'undefined' == typeof document),
  e &&
    console.warn(
      'There is no document element in Node, some functions of bijou.js will not work. If you need these functions consider using a package like jsDom to recreate the document element.',
    );
let t = () => {
    if (e)
      throw new Error(
        'You are using Node.js, this function does not work in Node.js! Sorry!',
      );
  },
  r = (e, t, r, n, o = 20, s = (e) => e) => {
    var a = e,
      l = Date.now();
    let i = setInterval(() => {
      (a = s((Date.now() - l) / r) * (t - e) + e),
        n(a, s((Date.now() - l) / r));
    }, o);
    setTimeout(() => {
      clearInterval(i), n(t, 1);
    }, r);
  };
exports.animate = r;
let n = (e, t) =>
  Array(t - e + 1)
    .fill()
    .map((t, r) => e + r);
exports.range = n;
let o = (e = Math.random()) => {
  function t(t) {
    var r = (e.toString(16) + '000000000').substr(2, 8);
    return t ? '-' + r.substr(0, 4) + '-' + r.substr(4, 4) : r;
  }
  return (
    'string' == typeof e && (e = rt.hashString(e) / 1e16),
    t() + t(!0) + t(!0) + t()
  );
};
exports.uuid = o;
let s = (e) => {
  let t = Array.from({ length: e - 1 }).map((e, t) => t + 2),
    r = Math.floor(Math.sqrt(e));
  return (
    Array.from({ length: r - 1 })
      .map((e, t) => t + 2)
      .forEach((e) => (t = t.filter((t) => t % e != 0 || t === e))),
    t
  );
};
exports.primesTo = s;
let a = (e, t, r = !0, n = Math.random()) =>
  r
    ? Math.floor(n * (t - e + 1) + e)
    : Math.random() * (t - e + 1) + e;
exports.random = a;
let l = (e) => {
  var t = (e += 1831565813);
  return (
    (t = Math.imul(t ^ (t >>> 15), 1 | t)),
    (((t ^= t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ (t >>> 14)) >>>
      0) /
      4294967296
  );
};
exports.seedRandom = l;
let i = (e) =>
  e.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, '$1,');
exports.formatNumber = i;
let p = {
  linear: (e) => e,
  easeInQuad: (e) => e * e,
  easeOutQuad: (e) => e * (2 - e),
  easeInOutQuad: (e) => (e < 0.5 ? 2 * e * e : (4 - 2 * e) * e - 1),
  easeInCubic: (e) => e * e * e,
  easeOutCubic: (e) => --e * e * e + 1,
  easeInOutCubic: (e) =>
    e < 0.5 ? 4 * e * e * e : (e - 1) * (2 * e - 2) * (2 * e - 2) + 1,
  easeInQuart: (e) => e * e * e * e,
  easeOutQuart: (e) => 1 - --e * e * e * e,
  easeInOutQuart: (e) =>
    e < 0.5 ? 8 * e * e * e * e : 1 - 8 * --e * e * e * e,
  easeInQuint: (e) => e * e * e * e * e,
  easeOutQuint: (e) => 1 + --e * e * e * e * e,
  easeInOutQuint: (e) =>
    e < 0.5 ? 16 * e * e * e * e * e : 1 + 16 * --e * e * e * e * e,
};
exports.ease = p;
let u = (e = new Date(), t = 'en-US') =>
  e.toLocaleDateString(t, { weekday: 'long' });
exports.dayName = u;
let c = (e) => {
  (e = 'string' == typeof e ? +e : e) < 0 && (e = -e);
  const t = {
    century: Math.floor(e / 11448e8),
    year: Math.floor(e / 22896e6) % 50,
    day: Math.floor(e / 864e5) % 365,
    hour: Math.floor(e / 36e5) % 24,
    minute: Math.floor(e / 6e4) % 60,
    second: Math.floor(e / 1e3) % 60,
    millisecond: Math.floor(e) % 1e3,
  };
  return Object.entries(t)
    .filter((e) => 0 !== e[1])
    .map(([e, t]) => `${t} ${e}${1 !== t ? 's' : ''}`)
    .join(', ');
};
exports.formatMilliseconds = c;
let d = () => (
  t(),
  /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    navigator.userAgent,
  )
    ? 'mobile'
    : 'desktop'
);
exports.mobileOrDesktop = d;
let f = (e) => e.replace(/<[^>]*>/g, '');
exports.removeTags = f;
let g = (e, t = 'en', r = 1, n = 1, o = 1, s = 1) => {
  var a = new SpeechSynthesisUtterance(),
    l = window.speechSynthesis.getVoices();
  let i = l.filter((e) => e['default']);
  (a.voice = n ? ('number' == typeof n ? l[n] : n) : i),
    (a.volume = r),
    (a.rate = s),
    (a.pitch = o),
    (a.text = e),
    (a.lang = t),
    speechSynthesis.speak(a);
};
exports.speak = g;
let h = (e) => {
  for (var t = e.split(' '), r = '', n = 0; n <= t.length - 1; n++)
    (r += t[n]), n == t.length - 2 ? (r += '&nbsp;') : (r += ' ');
  return r;
};
exports.widows = h;
let m = function (e) {
  return e
    .replace(/([a-z])([A-Z])/g, '$1 $2')
    .replace(/\b([A-Z]+)([A-Z])([a-z])/, '$1 $2$3')
    .replace(/^./, function (e) {
      return e.toUpperCase();
    });
};
exports.unCamelCase = m;
let x = (e, r = 'html', n = {}) => {
  t();
  let o = document.createElement('DIV');
  o.innerText = e;
  return (
    ((e, t, r = {}) => {
      var n = t || 'html',
        o = document.getElementById(e) || e,
        s = o.innerHTML,
        a = r.tagColor || 'mediumblue',
        l = r.tagNameColor || 'brown',
        i = r.attributeColor || 'red',
        p = r.attributeValueColor || 'mediumblue',
        u = r.commentColor || 'green',
        c = r.cssSelectorColor || 'brown',
        d = r.cssPropertyColor || 'red',
        f = r.cssPropertyValueColor || 'mediumblue',
        g = r.cssLimiterColor || 'black',
        h = r.cssImportantColor || 'red',
        m = r.jsColor || 'black',
        x = r.jsKeywordColor || 'mediumblue',
        b = r.jsStringColor || 'brown',
        y = r.jsNumberColor || 'red',
        w = r.jsPropertyColor || 'black';
      function v(e, t, r, n, o) {
        for (var s, a, l = '', i = []; e.search(t) > -1; )
          (s = e.search(t)),
            -1 == (a = e.indexOf(r, s)) && (a = e.length),
            o
              ? (i.push(n(e.substring(s, a + r.length))),
                (e = e.substring(0, s) + o + e.substr(a + r.length)))
              : ((l += e.substring(0, s)),
                (l += n(e.substring(s, a + r.length))),
                (e = e.substr(a + r.length)));
        (this.rest = l + e), (this.arr = i);
      }
      function A(e) {
        for (var t, r, n, o = e, s = ''; o.search(/(\s|<br>)/) > -1; )
          (t = o.search(/(\s|<br>)/)),
            -1 == (r = o.indexOf('&gt;')) && (r = o.length),
            (s += o.substring(0, t)),
            (s += T(o.substring(t, r))),
            (o = o.substr(r));
        return (
          '&gt;' ==
            (n =
              '<span style=color:' +
              a +
              '>&lt;</span>' +
              (n = s + o).substring(4)).substr(n.length - 4, 4) &&
            (n =
              n.substring(0, n.length - 4) +
              '<span style=color:' +
              a +
              '>&gt;</span>'),
          '<span style=color:' + l + '>' + n + '</span>'
        );
      }
      function T(e) {
        for (var t, r, n, o, s, a = e, l = ''; a.indexOf('=') > -1; )
          (r = -1),
            (t = a.indexOf('=')),
            (n = a.indexOf("'", t)),
            (o = a.indexOf('"', t)),
            (s = a.indexOf(' ', t + 2)) > -1 &&
            (s < n || -1 == n) &&
            (s < o || -1 == o)
              ? (r = a.indexOf(' ', t))
              : o > -1 && (o < n || -1 == n) && (o < s || -1 == s)
              ? (r = a.indexOf('"', a.indexOf('"', t) + 1))
              : n > -1 &&
                (n < o || -1 == o) &&
                (n < s || -1 == s) &&
                (r = a.indexOf("'", a.indexOf("'", t) + 1)),
            (!r || -1 == r || r < t) && (r = a.length),
            (l += a.substring(0, t)),
            (l += S(a.substring(t, r + 1))),
            (a = a.substr(r + 1));
        return '<span style=color:' + i + '>' + l + a + '</span>';
      }
      function S(e) {
        return '<span style=color:' + p + '>' + e + '</span>';
      }
      function O(e) {
        return '<span style=color:' + u + '>' + e + '</span>';
      }
      function C(e) {
        var t,
          r,
          n,
          o,
          s,
          a,
          l,
          i = e,
          p = '';
        for (
          i = (n = new v(i, /\/\*/, '*/', O, 'W3CSSCOMMENTPOS')).rest;
          i.search('{') > -1;

        ) {
          for (
            t = i.search('{'),
              s = i.substr(t + 1),
              l = 1,
              a = 0,
              o = 0;
            o < s.length &&
            ('{' == s.substr(o, 1) && (l++, a++),
            '}' == s.substr(o, 1) && l--,
            0 != l);
            o++
          );
          for (0 != l && (a = 0), r = t, o = 0; o <= a; o++)
            r = i.indexOf('}', r + 1);
          -1 == r && (r = i.length),
            (p += i.substring(0, t + 1)),
            (p += M(i.substring(t + 1, r))),
            (i = i.substr(r));
        }
        for (
          i = (i = (i = p + i).replace(
            /{/g,
            '<span style=color:' + g + '>{</span>',
          )).replace(/}/g, '<span style=color:' + g + '>}</span>'),
            o = 0;
          o < n.arr.length;
          o++
        )
          i = i.replace('W3CSSCOMMENTPOS', n.arr[o]);
        return '<span style=color:' + c + '>' + i + '</span>';
      }
      function M(e) {
        var t,
          r,
          n,
          o,
          s = e,
          a = '';
        if (s.indexOf('{') > -1) return C(s);
        for (; s.search(':') > -1; ) {
          for (o = !0, n = t = s.search(':'); 1 == o; )
            (o = !1),
              (r = s.indexOf(';', n)),
              '&nbsp;' == s.substring(r - 5, r + 1) &&
                ((o = !0), (n = r + 1));
          -1 == r && (r = s.length),
            (a += s.substring(0, t)),
            (a += E(s.substring(t, r + 1))),
            (s = s.substr(r + 1));
        }
        return '<span style=color:' + d + '>' + a + s + '</span>';
      }
      function E(e) {
        var t,
          r = e,
          n = '';
        for (
          r = '<span style=color:' + g + '>:</span>' + r.substring(1);
          r.search(/!important/i) > -1;

        )
          (t = r.search(/!important/i)),
            (n += r.substring(0, t)),
            (n += $(r.substring(t, t + 10))),
            (r = r.substr(t + 10));
        return (
          (result = n + r),
          ';' == result.substr(result.length - 1, 1) &&
            '&nbsp;' != result.substr(result.length - 6, 6) &&
            '&lt;' != result.substr(result.length - 4, 4) &&
            '&gt;' != result.substr(result.length - 4, 4) &&
            '&amp;' != result.substr(result.length - 5, 5) &&
            (result =
              result.substring(0, result.length - 1) +
              '<span style=color:' +
              g +
              '>;</span>'),
          '<span style=color:' + f + '>' + result + '</span>'
        );
      }
      function $(e) {
        return (
          '<span style=color:' +
          h +
          ';font-weight:bold;>' +
          e +
          '</span>'
        );
      }
      function L(e) {
        var t,
          r,
          n,
          o,
          s,
          a,
          l,
          i,
          p,
          u,
          c = e,
          d = '',
          f = [],
          g = '';
        for (t = 0; t < c.length; t++)
          '\\' == (r = c.substr(t, 1)) &&
            (f.push(c.substr(t, 2)), (r = 'W3JSESCAPE'), t++),
            (g += r);
        for (
          c = g, 1;
          (n = D(c, "'", "'", N)),
            (o = D(c, '"', '"', N)),
            (s = D(c, /\/\*/, '*/', O)),
            (a = D(c, /\/\//, '<br>', O)),
            (i = R(c, F)),
            (l = H('js', c, j)),
            (u = I(c, k)),
            -1 !=
              Math.max(i[0], n[0], o[0], s[0], a[0], l[0], u[0]) &&
              -1 != (p = P(i, n, o, s, a, l, u))[0];

        )
          p[0] > -1 &&
            ((d += c.substring(0, p[0])),
            (d += p[2](c.substring(p[0], p[1]))),
            (c = c.substr(p[1])));
        for (c = d + c, t = 0; t < f.length; t++)
          c = c.replace('W3JSESCAPE', f[t]);
        return '<span style=color:' + m + '>' + c + '</span>';
      }
      function N(e) {
        return '<span style=color:' + b + '>' + e + '</span>';
      }
      function j(e) {
        return '<span style=color:' + x + '>' + e + '</span>';
      }
      function F(e) {
        return '<span style=color:' + y + '>' + e + '</span>';
      }
      function k(e) {
        return '<span style=color:' + w + '>' + e + '</span>';
      }
      function I(e, t) {
        var r,
          n,
          o,
          s,
          a = [
            '.',
            '<',
            ' ',
            ';',
            '(',
            '+',
            ')',
            '[',
            ']',
            ',',
            '&',
            ':',
            '{',
            '}',
            '/',
            '-',
            '*',
            '|',
            '%',
          ];
        if ((s = e.indexOf('.')) > -1)
          for (r = e.substr(s + 1), o = 0; o < r.length; o++)
            for (cc = r[o], n = 0; n < a.length; n++)
              if (cc.indexOf(a[n]) > -1) return [s + 1, o + s + 1, t];
        return [-1, -1, t];
      }
      function P() {
        var e,
          t = [];
        for (e = 0; e < arguments.length; e++)
          arguments[e][0] > -1 &&
            (0 == t.length || arguments[e][0] < t[0]) &&
            (t = arguments[e]);
        return 0 == t.length && (t = arguments[e]), t;
      }
      function H(e, t, r) {
        var n,
          o,
          s,
          a,
          l = -1,
          i = -1;
        for (
          'js' == e &&
            (n = [
              'abstract',
              'arguments',
              'boolean',
              'break',
              'byte',
              'case',
              'catch',
              'char',
              'class',
              'const',
              'continue',
              'debugger',
              'default',
              'delete',
              'do',
              'double',
              'else',
              'enum',
              'eval',
              'export',
              'extends',
              'false',
              'final',
              'finally',
              'float',
              'for',
              'function',
              'goto',
              'if',
              'implements',
              'import',
              'in',
              'instanceof',
              'int',
              'interface',
              'let',
              'long',
              'NaN',
              'native',
              'new',
              'null',
              'package',
              'private',
              'protected',
              'public',
              'return',
              'short',
              'static',
              'super',
              'switch',
              'synchronized',
              'this',
              'throw',
              'throws',
              'transient',
              'true',
              'try',
              'typeof',
              'var',
              'void',
              'volatile',
              'while',
              'with',
              'yield',
            ]),
            o = 0;
          o < n.length;
          o++
        )
          (s = t.indexOf(n[o])) > -1 &&
            ((a = /\W/g),
            t.substr(s + n[o].length, 1).match(a) &&
              t.substr(s - 1, 1).match(a) &&
              s > -1 &&
              (-1 == l || s < l) &&
              (i = (l = s) + n[o].length));
        return [l, i, r];
      }
      function D(e, t, r, n) {
        var o, s;
        return (
          (o = e.search(t)),
          -1 == (s = e.indexOf(r, o + r.length)) && (s = e.length),
          [o, s + r.length, n]
        );
      }
      function R(e, t) {
        var r,
          n,
          o,
          s,
          a,
          l = [
            '<br>',
            ' ',
            ';',
            '(',
            '+',
            ')',
            '[',
            ']',
            ',',
            '&',
            ':',
            '{',
            '}',
            '/',
            '-',
            '*',
            '|',
            '%',
            '=',
          ],
          i = 0;
        for (r = 0; r < e.length; r++)
          for (n = 0; n < l.length; n++)
            if ((o = e.substr(r, l[n].length)) == l[n]) {
              if (
                '-' == o &&
                ('e' == e.substr(r - 1, 1) ||
                  'E' == e.substr(r - 1, 1))
              )
                continue;
              if (i < (s = r) && ((a = e.substring(i, s)), !isNaN(a)))
                return [i, s, t];
              (i = r += l[n].length), (r -= 1);
              break;
            }
        return [-1, -1, t];
      }
      (o.style.fontFamily =
        r.fontFamily || "Consolas,'Courier New', monospace"),
        n || (n = 'html'),
        'html' == n &&
          (s = (function (e) {
            var t,
              r,
              n,
              o,
              s,
              a = e,
              l = '';
            (t = new v(
              a,
              '&lt;!--',
              '--&gt;',
              O,
              'W3HTMLCOMMENTPOS',
            )),
              (a = t.rest);
            for (; a.indexOf('&lt;') > -1; )
              (o = ''),
                (r = a.indexOf('&lt;')),
                '&LT;STYLE' == a.substr(r, 9).toUpperCase() &&
                  (o = 'css'),
                '&LT;SCRIPT' == a.substr(r, 10).toUpperCase() &&
                  (o = 'javascript'),
                -1 == (n = a.indexOf('&gt;', r)) && (n = a.length),
                (l += a.substring(0, r)),
                (l += A(a.substring(r, n + 4))),
                (a = a.substr(n + 4)),
                'css' == o &&
                  (n = a.indexOf('&lt;/style&gt;')) > -1 &&
                  ((l += C(a.substring(0, n))), (a = a.substr(n))),
                'javascript' == o &&
                  (n = a.indexOf('&lt;/script&gt;')) > -1 &&
                  ((l += L(a.substring(0, n))), (a = a.substr(n)));
            for (a = l + a, s = 0; s < t.arr.length; s++)
              a = a.replace('W3HTMLCOMMENTPOS', t.arr[s]);
            return a;
          })(s)),
        'css' == n && (s = C(s)),
        'js' == n && (s = L(s)),
        (o.innerHTML = s);
    })(o, r, n),
    o.innerHTML
  );
};
exports.syntaxHighlight = x;
let b = (e) =>
  e
    .replace(/(?:^\w|[A-Z]|\b\w)/g, function (e, t) {
      return 0 === t ? e.toLowerCase() : e.toUpperCase();
    })
    .replace(/\s+/g, '');
exports.camelCase = b;
let y = (e) => {
  for (var t = e.split(''), r = t.length - 1; r > 0; r--) {
    var n = Math.floor(Math.random() * (r + 1)),
      o = t[r];
    (t[r] = t[n]), (t[n] = o);
  }
  return t.join('');
};
exports.scrambleString = y;
let w = (e, t = 0) => {
  let r = 3735928559 ^ t,
    n = 1103547991 ^ t;
  for (let t, o = 0; o < e.length; o++)
    (t = e.charCodeAt(o)),
      (r = Math.imul(r ^ t, 2654435761)),
      (n = Math.imul(n ^ t, 1597334677));
  return (
    (r =
      Math.imul(r ^ (r >>> 16), 2246822507) ^
      Math.imul(n ^ (n >>> 13), 3266489909)),
    (n =
      Math.imul(n ^ (n >>> 16), 2246822507) ^
      Math.imul(r ^ (r >>> 13), 3266489909)),
    4294967296 * (2097151 & n) + (r >>> 0)
  );
};
exports.hashString = w;
let v = (e, t) => {
  if (0 == e.length) return t.length;
  if (0 == t.length) return e.length;
  var r,
    n,
    o = [];
  for (r = 0; r <= t.length; r++) o[r] = [r];
  for (n = 0; n <= e.length; n++) o[0][n] = n;
  for (r = 1; r <= t.length; r++)
    for (n = 1; n <= e.length; n++)
      t.charAt(r - 1) == e.charAt(n - 1)
        ? (o[r][n] = o[r - 1][n - 1])
        : (o[r][n] = Math.min(
            o[r - 1][n - 1] + 1,
            Math.min(o[r][n - 1] + 1, o[r - 1][n] + 1),
          ));
  return o[t.length][e.length];
};
exports.editDistance = v;
let A = (e) => new Blob([e]).size;
exports.byteSize = A;
let T = (e, t) => {
  var r = new RegExp(Object.keys(t).join('|'), 'gi');
  return (e = e.replace(r, function (e) {
    return mapObj[e];
  }));
};
exports.replaceMultiple = T;
let S = (e, t = window.location.href) => {
  e = e.replace(/[\[\]]/g, '\\$&');
  var r = new RegExp(`[?&]${e}(=([^&#]*)|&|#|$)`).exec(t);
  return r
    ? r[2]
      ? decodeURIComponent(r[2].replace(/\+/g, ' '))
      : ''
    : null;
};
exports.urlQuery = S;
let O = (e, r = undefined, n = undefined) => {
  t();
  r = r || [
    'I',
    'P',
    'B',
    'BODY',
    'HTML',
    'DEL',
    'INS',
    'STRONG',
    'SMALL',
    'A',
    'IMG',
    'CITE',
    'FIGCAPTION',
    'ASIDE',
    'ARTICLE',
    'SUMMARY',
    'DETAILS',
    'NAV',
    'TD',
    'TH',
    'TABLE',
    'THEAD',
    'TBODY',
    'NAV',
    'SPAN',
    'BR',
    'CODE',
    'PRE',
    'BLOCKQUOTE',
    'EM',
    'HR',
    'H1',
    'H2',
    'H3',
    'H4',
    'H5',
    'H6',
    'DIV',
    'MAIN',
    'HEADER',
    'FOOTER',
    'SELECT',
    'COL',
    'AREA',
    'ADDRESS',
    'ABBR',
    'BDI',
    'BDO',
  ];
  n = (n = n || [
    { attribute: 'src', tags: '*', regex: /^(?:https|http|\/\/):/ },
    { attribute: 'href', tags: '*', regex: /^(?!javascript:).+/ },
    { attribute: 'width', tags: '*', regex: /^[0-9]+$/ },
    { attribute: 'height', tags: '*', regex: /^[0-9]+$/ },
    { attribute: 'id', tags: '*', regex: /^[a-zA-Z]+$/ },
    { attribute: 'class', tags: '*', regex: /^[a-zA-Z ]+$/ },
    {
      attribute: 'value',
      tags: ['INPUT', 'TEXTAREA'],
      regex: /^.+$/,
    },
    {
      attribute: 'checked',
      tags: ['INPUT'],
      regex: /^(?:true|false)+$/,
    },
    {
      attribute: 'placeholder',
      tags: ['INPUT', 'TEXTAREA'],
      regex: /^.+$/,
    },
    {
      attribute: 'alt',
      tags: ['IMG', 'AREA', 'INPUT'],
      regex: /^[0-9a-zA-Z]+$/,
    },
    {
      attribute: 'autofocus',
      tags: ['INPUT'],
      regex: /^(?:true|false)+$/,
    },
    {
      attribute: 'for',
      tags: ['LABEL', 'OUTPUT'],
      regex: /^[a-zA-Z0-9]+$/,
    },
  ]).map((e) => {
    if ('string' == typeof e)
      return { attribute: e, tags: '*', regex: /^.+$/ };
    let t = e;
    return (
      e.hasOwnProperty('tags') || (t.tags = '*'),
      e.hasOwnProperty('regex') || (t.regex = /^.+$/),
      t
    );
  });
  var o = new DOMParser().parseFromString(e, 'text/html'),
    s = o.querySelectorAll('*');
  for (let e = 0; e < s.length; e++) {
    const t = s[e];
    let n = l(t);
    for (let e = 0; e < n.length; e++) {
      a(t, n[e]) || t.removeAttribute(n[e]);
    }
    r.includes(t.tagName) || t.remove();
  }
  return o.documentElement.innerHTML;
  function a(e, t) {
    return (
      n.filter(
        (r) =>
          r.attribute === t &&
          ('*' === r.tags || r.tags.includes(e.tagName)) &&
          r.regex.test(e.getAttribute(t)),
      ).length > 0
    );
  }
  function l(e) {
    for (
      var t = 0, r = e.attributes, n = r.length, o = [];
      t < n;
      t++
    )
      o.push(r[t].nodeName);
    return o;
  }
};
exports.sanitize = O;
let C = (e) => {
  var t = /\\([\\\|`*_{}\[\]()#+\-~])/g,
    r = /\n *&gt; *([^]*?)(?=(\n|$){2})/g,
    n = /\n( *)(?:[*\-+]|((\d+)|([a-z])|[A-Z])[.)]) +([^]*?)(?=(\n|$){2})/g,
    o = /(^|[^A-Za-z\d\\])(([*_])|(~)|(\^)|(--)|(\+\+)|`)(\2?)([^<]*?)\2\8(?!\2)(?=\W|_|$)/g,
    s = /^.*\n( *\|( *\:?-+\:?-+\:? *\|)* *\n|)/,
    a = /.*\n/g,
    l = /\||(.*?[^\\])\|/g;
  function i(t, r) {
    e = e.replace(t, r);
  }
  function p(e, t) {
    return '<' + e + '>' + t + '</' + e + '>';
  }
  function u(e) {
    return e.replace(o, function (e, t, r, n, o, s, a, l, i, c) {
      return (
        t +
        p(
          n
            ? i
              ? 'strong'
              : 'em'
            : o
            ? i
              ? 's'
              : 'sub'
            : s
            ? 'sup'
            : a
            ? 'small'
            : l
            ? 'big'
            : 'code',
          u(c),
        )
      );
    });
  }
  function c(e) {
    return e.replace(t, '$1');
  }
  var d = [],
    f = 0;
  return (
    (e = '\n' + e + '\n'),
    i(/</g, '&lt;'),
    i(/>/g, '&gt;'),
    i(/\t|\r|\uf8ff/g, '  '),
    (e = (function g(e) {
      return e.replace(r, function (e, t) {
        return p('blockquote', g(u(t.replace(/^ *&gt; */gm, ''))));
      });
    })(e)),
    i(/^([*\-=_] *){3,}$/gm, '<hr/>'),
    (e = (function h(e) {
      return e.replace(n, function (e, t, r, n, o, s) {
        var a = p(
          'li',
          u(
            s
              .split(
                RegExp(
                  '\n ?' + t + '(?:(?:\\d+|[a-zA-Z])[.)]|[*\\-+]) +',
                  'g',
                ),
              )
              .map(h)
              .join('</li><li>'),
          ),
        );
        return (
          '\n' +
          (r
            ? '<ol start="' +
              (n
                ? r + '">'
                : parseInt(r, 36) -
                  9 +
                  '" style="list-style-type:' +
                  (o ? 'low' : 'upp') +
                  'er-alpha">') +
              a +
              '</ol>'
            : p('ul', a))
        );
      });
    })(e)),
    i(/<\/(ol|ul)>\n\n<\1>/g, ''),
    i(
      /\n((```|~~~).*\n?([^]*?)\n?\2|(( {4}.*?\n)+))/g,
      function (e, t, r, n, o) {
        return (
          (d[--f] = p(
            'pre',
            p('code', n || o.replace(/^ {4}/gm, '')),
          )),
          f + ''
        );
      },
    ),
    i(
      /((!?)\[(.*?)\]\((.*?)( ".*")?\)|\\([\\`*_{}\[\]()#+\-.!~]))/g,
      function (e, t, r, n, o, s, a) {
        return (
          (d[--f] =
            a ||
            (r
              ? o
                ? '<img src="' + o + '" alt="' + n + '"/>'
                : t
              : '<a href="' + o + '">' + c(u(n)) + '</a>')),
          f + ''
        );
      },
    ),
    i(/\n(( *\|.*?\| *\n)+)/g, function (e, t) {
      var r = t.match(s)[1];
      return (
        '\n' +
        p(
          'table',
          t.replace(a, function (e, t) {
            return e == r
              ? ''
              : p(
                  'tr',
                  e.replace(l, function (e, n, o) {
                    return o
                      ? p(r && !t ? 'th' : 'td', c(u(n || '')))
                      : '';
                  }),
                );
          }),
        )
      );
    }),
    i(
      /(?=^|>|\n)([>\s]*?)(#{1,6}) (.*?)( #*)? *(?=\n|$)/g,
      function (e, t, r, n) {
        return t + p('h' + r.length, c(u(n)));
      },
    ),
    i(/(?=^|>|\n)\s*\n+([^<]+?)\n+\s*(?=\n|<|$)/g, function (e, t) {
      return p('p', c(u(t)));
    }),
    i(/-\d+\uf8ff/g, function (e) {
      return d[parseInt(e)];
    }),
    e.trim()
  );
};
exports.markdownToHTML = C;
let M = (e, t) => {
  ot.loadScript(
    'https://cdnjs.cloudflare.com/ajax/libs/js-beautify/1.13.5/beautify.min.js',
    () => {
      t(js_beautify(e));
    },
  );
};
exports.beautifyJS = M;
let E = (e) => {
  var t = 0;
  (e = e.toLowerCase()).length > 3 &&
    'some' == e.substring(0, 4) &&
    ((e = e.replace('some', '')), t++);
  var r = (e = (e = e.replace(
    /(?:[^laeiouy]|ed|[^laeiouy]e)$/,
    '',
  )).replace(/^y/, '')).match(/[aeiouy]{1,2}/g);
  if ((console.log(r), r)) return r.length + t;
};
exports.syllables = E;
let $ = (e) =>
  String.fromCodePoint(e.codePointAt(0)).toUpperCase() +
  e.slice(e.codePointAt(0) > 65535 ? 2 : 1);
exports.capitalize = $;
let L = (e, t, r, n) => e.substring(0, t) + n + e.substring(r);
exports.replaceBetween = L;
let N = (e) =>
  e.replace(
    /[&<>'"]/g,
    (e) =>
      ({
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        "'": '&#39;',
        '"': '&quot;',
      }[e] || e),
  );
exports.escapeHTML = N;
let j = (e) =>
  e.replace(
    /&amp;|&lt;|&gt;|&#39;|&quot;/g,
    (e) =>
      ({
        '&amp;': '&',
        '&lt;': '<',
        '&gt;': '>',
        '&#39;': "'",
        '&quot;': '"',
      }[e] || e),
  );
exports.unescapeHTML = j;
let F = () => (t(), document.referrer || window.location.href);
exports.previousPage = F;
let k = (e, t) => {
  for (var r = [], n = [], o = 0; o < e.length; o++) r[e[o]] = !0;
  for (o = 0; o < t.length; o++)
    r[t[o]] ? delete r[t[o]] : (r[t[o]] = !0);
  for (var s in r) n.push(s);
  return n;
};
exports.arrayDiff = k;
let I = function (e, t) {
  for (var r = [], n = undefined, o = 0; o < e.length; o++)
    e[o] != t[o] && n == undefined && (n = [o]),
      n != undefined &&
        e[o] == t[o] &&
        (n.push(o), r.push(n), (n = undefined));
  return n != undefined && (n.push(o), r.push(n)), r;
};
exports.diff = I;
let P = (e, t) => (e.indexOf(t) > -1 ? e.splice(e.indexOf(t), 1) : e);
exports.remove = P;
let H = (e, t, r, n) => {
  var o = (n = n || !1) ? -1 : 1;
  n && ([t, r] = [r, t]),
    (t = Math.floor(t)),
    (r = Math.floor(r) + o);
  for (var s = t, a = 0; s != r; s += o) a = 256 * a + e[s];
  return a;
};
exports.spliceArrayBuffer = H;
let D = (e, t = 1) => {
  var r = e;
  return (
    ot.each(t, () => {
      r = [].concat.apply([], e);
    }),
    r
  );
};
exports.flatten = D;
let R = (e) =>
  e.reduce(function (e, t) {
    return e.concat(Array.isArray(t) ? D(t) : t);
  }, []);
exports.nFlatten = R;
let z = (e, t) => e.includes(t);
exports.contains = z;
let B = (e) => e.sort(() => Math.random() - 0.5);
exports.shuffleArray = B;
let U = (e, t, r, n = 0) =>
  'string' == typeof e
    ? e.slice(0, t) + r + e.slice(t + Math.abs(n))
    : e.splice(t, n, r);
exports.splice = U;
let V = (e, t) => {
  for (var r = {}, n = e.length - 1; n >= 0; --n) r[e[n]] = e[n];
  for (n = t.length - 1; n >= 0; --n) r[t[n]] = t[n];
  var o = [];
  for (var s in r) r.hasOwnProperty(s) && o.push(r[s]);
  return o;
};
exports.unionArrays = V;
let q = (e, t) =>
  e
    .map('function' == typeof t ? t : (e) => e[t])
    .reduce((e, t) => e + t, 0) / e.length;
exports.averageBy = q;
let Z = (e) => [...new Set(e)];
exports.uniqueArray = Z;
let W = (e, t) => {
  e =
    'number' == typeof e
      ? ot.range(1, e)
      : 'string' == typeof e
      ? e.split('')
      : e;
  for (let r = 0; r < e.length; r++) t(e[r], r, e);
};
exports.each = W;
exports.spread = (e) => (e) => {
  call_me.apply(void 0, e);
};
let Y = (e) => {
  let t = {};
  return function () {
    let r = JSON.stringify(Array.from(arguments)),
      n = Array.from(arguments);
    return t[r] || (t[r] = e(...n)), t[r];
  };
};
exports.memoize = Y;
let _ = (...e) => (t) => e.reduceRight((e, t) => t(e), t);
exports.composeFunction = _;
let Q = (e, t = e.length, ...r) =>
  t <= r.length ? e(...r) : curry.bind(null, e, t, ...r);
exports.curryFunction = Q;
let X = (e) =>
  '[object AsyncFunction]' === Object.prototype.toString.call(e);
exports.isAsync = X;
let J = (e, t, r) => {
  var n,
    o,
    s,
    a = null,
    l = 0;
  r || (r = {});
  var i = function () {
    (l = !1 === r.leading ? 0 : Date.now()),
      (a = null),
      (s = e.apply(n, o)),
      a || (n = o = null);
  };
  return function () {
    var p = Date.now();
    l || !1 !== r.leading || (l = p);
    var u = t - (p - l);
    return (
      (n = this),
      (o = arguments),
      u <= 0 || u > t
        ? (a && (clearTimeout(a), (a = null)),
          (l = p),
          (s = e.apply(n, o)),
          a || (n = o = null))
        : a || !1 === r.trailing || (a = setTimeout(i, u)),
      s
    );
  };
};
exports.throttle = J;
exports.debounce = (e, t, r = !1) => {
  var n;
  return function () {
    var o = this,
      s = arguments,
      a = r && !n;
    clearTimeout(n),
      (n = setTimeout(function () {
        (n = null), r || e.apply(o, s);
      }, t)),
      a && e.apply(o, s);
  };
};
let G = (e) => {
  const t = new Worker(
    URL.createObjectURL(new Blob([`postMessage((${e})());`]), {
      type: 'application/javascript; charset=utf-8',
    }),
  );
  return new Promise((e, r) => {
    (t.onmessage = ({ data: r }) => {
      e(r), t.terminate();
    }),
      (t.onerror = (e) => {
        r(e), t.terminate();
      });
  });
};
exports.runAsync = G;
let K = (e) => {
  if (null == e || 'object' != typeof e) return e;
  var t = e.constructor();
  for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]);
  return t;
};
exports.clone = K;
let ee = (e, t, r) =>
  new Proxy(e, {
    set: function (e, r, n) {
      return t(r, n), (e[r] = n), e[r];
    },
    get: function (t, n, o) {
      return r(n, o), e[n];
    },
  });
exports.listen = ee;
let te = function at(e, t) {
  for (var r in t)
    try {
      t[r].constructor == Object
        ? (e[r] = at(e[r], t[r]))
        : (e[r] = t[r]);
    } catch (n) {
      e[r] = t[r];
    }
  return e;
};
exports.merge = te;
let re = (e, t) =>
  Array.isArray(e)
    ? e.map((e) => ot.mapObjectKeys(e, t))
    : 'object' == typeof e
    ? Object.keys(e).reduce((r, n) => {
        const o = t(n),
          s = e[n];
        return (
          (r[o] =
            null !== s && 'object' == typeof s
              ? ot.mapObjectKeys(s, t)
              : s),
          r
        );
      }, {})
    : e;
exports.mapObjectKeys = re;
let ne = (e, t) => (
  Object.keys(e).map(function (r, n) {
    e[r] = t(e[r], n);
  }),
  e
);
exports.mapObjectValues = ne;
let oe = (e) => (
  t(),
  Array.from(new FormData(e)).reduce((e, [t, r]) => ({
    ...e,
    [t]: r,
  }))
);
exports.formToObject = oe;
let se = (e) =>
  Object.keys(e)
    .sort()
    .reduce(function (t, r) {
      return (t[r] = e[r]), t;
    }, {});
exports.sortObj = se;
let ae = () => {
  var e = document.createElement('UL');
  (e.id = 'contextMenu'), document.body.appendChild(e);
  let t = document.createElement('STYLE');
  (t.innerHTML =
    '#contextMenu {\n       pointer-events: none;\n       padding: 0;\n       opacity: 0;\n       transition: opacity .3s ease;\n       position: fixed;\n       padding-top: 3px;\n       padding-bottom: 3px;\n       max-height: 200px;\n       overflow-y: scroll;\n       overflow-x: hidden;\n       list-style: none;\n       z-index: 10000;\n       background: white;\n       color: #333;\n       font-family: sans-serif;\n       border-radius: 5px;\n       box-shadow: 2px 2px 5px #0004;\n       width: fit-content;\n       min-width: 50px;\n       max-width: 150px;\n     }\n     #contextMenu li {\n       transition: background-color .3s ease;\n       display: block;\n       min-width: 150px;\n       margin: 0;\n       padding: 10px;\n     }\n     #contextMenu li:hover {\n       background-color: #ddd;\n       cursor: pointer;\n     }\n     '),
    document.body.appendChild(t);
  var r = document.querySelectorAll('[contextmenu]');
  for (let t = 0; t < r.length; t++)
    window.addEventListener('contextmenu', (t) => {
      let r;
      e.style.pointerEvents = 'auto';
      try {
        (r = document.querySelectorAll(
          `#${t.target
            .closest('[contextmenu]')
            .getAttribute('contextmenu')} menuitem`,
        )),
          t.preventDefault();
      } catch (t) {
        return !0;
      }
      e.innerHTML = '';
      for (let t = 0; t < r.length; t++) {
        const n = r[t];
        e.innerHTML += `<li onclick="${n.getAttribute(
          'onclick',
        )}">${n.getAttribute('label')}</li>`;
      }
      console.log(e.innerHTML),
        (e.style.top = `${t.clientY}px`),
        (e.style.left = `${t.clientX}px`),
        (e.style.opacity = 1);
    });
  var n = 0;
  Re(() => {
    if ((n += 100) > 3e3)
      return (
        (e.style.opacity = 0),
        (e.style.pointerEvents = 'none'),
        void (n = 0)
      );
  }, 100),
    me(e, ['mousemove', 'click', 'scroll'], () => {
      n = 0;
    }),
    Le(e, () => {
      (e.style.opacity = 0), (e.style.pointerEvents = 'none');
    });
};
exports.context = ae;
let le = (e) => {
  t();
  for (
    var r = e.offsetTop,
      n = e.offsetLeft,
      o = e.offsetWidth,
      s = e.offsetHeight;
    e.offsetParent;

  )
    (r += (e = e.offsetParent).offsetTop), (n += e.offsetLeft);
  return (
    r >= window.pageYOffset &&
    n >= window.pageXOffset &&
    r + s <= window.pageYOffset + window.innerHeight &&
    n + o <= window.pageXOffset + window.innerWidth
  );
};
exports.inView = le;
let ie = (e) => {
  t();
  for (
    var r = e.offsetTop,
      n = e.offsetLeft,
      o = e.offsetWidth,
      s = e.offsetHeight;
    e.offsetParent;

  )
    (r += (e = e.offsetParent).offsetTop), (n += e.offsetLeft);
  return (
    r < window.pageYOffset + window.innerHeight &&
    n < window.pageXOffset + window.innerWidth &&
    r + s > window.pageYOffset &&
    n + o > window.pageXOffset
  );
};
exports.inPartialView = ie;
let pe = (e) => (
  t(),
  Array.from(new FormData(e), (e) =>
    e.map(encodeURIComponent).join('='),
  ).join('&')
);
exports.serializeForm = pe;
let ue = (e, r) => {
  t(),
    ot.each(ot.textNodes(e), (e) => {
      e.textContent = r(e.textContent);
    });
};
exports.replaceText = ue;
let ce = (e) =>
  [...e.childNodes].filter(
    (e) => e.nodeType === Node.TEXT_NODE && '' !== e.nodeValue.trim(),
  );
exports.textNodes = ce;
let de = (e) => {
  t();
  var r = '';
  return (
    (function n(e) {
      if (
        e.getAttribute('id') &&
        1 ===
          document.querySelectorAll(`#${e.getAttribute('id')}`).length
      )
        return (r = (r = (r = r.replace(
          /^/,
          ' #' + e.getAttribute('id'),
        )).replace(/\s/, '')).replace(/\s/g, ' > '));
      if (document.body === e)
        return (r = (r = (r = r.replace(/^/, ' body')).replace(
          /\s/,
          '',
        )).replace(/\s/g, ' > '));
      if (e.getAttribute('class')) {
        var t = '.';
        t = (t = (t += e.getAttribute('class')).replace(
          /\s/g,
          '.',
        )).replace(/^/g, ' ');
        var o = '',
          s = e.parentNode.children;
        if (s.length < 2) return;
        for (var a = [], l = 0; l < s.length; l++)
          e.getAttribute('class') == s[l].getAttribute('class') &&
            a.push(s[l]);
        if (a.length > 1)
          for (var i = 0; i < a.length; i++)
            if (e === a[i]) {
              o = ':nth-of-type(' + ++i + ')';
              break;
            }
        r = r.replace(/^/, t + o);
      } else {
        var p = e.nodeName;
        p = p.toLowerCase();
        var u = '';
        if ((s = e.parentNode.children).length > 2) {
          var c = [];
          for (l = 0; l < s.length; l++)
            e.nodeName == s[l].nodeName && c.push(s[l]);
          if (c.length > 1)
            for (i = 0; i < c.length; i++)
              if (e === c[i]) {
                u = ':nth-of-type(' + ++i + ')';
                break;
              }
        }
        r = r.replace(/^/, ' ' + p + u);
      }
      if (!e.parentNode)
        return (r = (r = r.replace(/\s/g, ' > ')).replace(/\s/, ''));
      n(e.parentNode);
    })(e),
    r
  );
};
exports.querySelector = de;
let fe = (t) => {
  if ('object' == typeof t) {
    if (e)
      throw new Error(
        'No document element! (You are probably using Node.js)',
      );
    return (
      (t.innerHTML = t.innerHTML.replace(
        /<!--[\s\S]*?(?:-->)?<!---+>?|<!(?![dD][oO][cC][tT][yY][pP][eE]|\[CDATA\[)[^>]*>?|<[?][^>]*>?/g,
        '',
      )),
      t
    );
  }
  if ('string' == typeof t)
    return t.replace(
      /<!--[\s\S]*?(?:-->)?<!---+>?|<!(?![dD][oO][cC][tT][yY][pP][eE]|\[CDATA\[)[^>]*>?|<[?][^>]*>?/g,
      '',
    );
};
exports.removeComments = fe;
let ge = (e, t = 'text/html') =>
  new DOMParser().parseFromString(e, t);
exports.parseHTML = ge;
let he = (e) => {
  var r, n, o, s;
  function a(e) {
    (this.style.left = r + e.clientX - o + 'px'),
      (this.style.top = n + e.clientY - s + 'px');
  }
  return (
    t(),
    e.addEventListener(
      'mousedown',
      function (t) {
        var l = window.getComputedStyle(e);
        (e.style.top = l.getPropertyValue('top')),
          (e.style.left = l.getPropertyValue('left')),
          (e.style.right = l.getPropertyValue('right')),
          (e.style.bottom = l.getPropertyValue('bottom')),
          (this.style.position = 'absolute'),
          (r = this.offsetLeft),
          (n = this.offsetTop),
          (o = t.clientX),
          (s = t.clientY),
          this.addEventListener('mousemove', a, !1),
          window.addEventListener(
            'mouseup',
            function () {
              e.removeEventListener('mousemove', a, !1);
            },
            !1,
          );
      },
      !1,
    ),
    e
  );
};
exports.drag = he;
let me = (e, t, r = {}, n = !1, o = !1) => {
  if (!(t instanceof Array))
    throw 'addMultipleListeners: please supply an array of eventstrings (like ["click","mouseover"])';
  for (
    var s = function (e) {
        r.apply(this, o && o instanceof Array ? o : []);
      },
      a = 0;
    a < t.length;
    a += 1
  )
    e.addEventListener(t[a], s, n);
};
exports.addEventListeners = me;
let xe = (e) => {
  var t = function (e, t) {
    return e.children[t].innerText || e.children[t].textContent;
  };
  Array.prototype.slice
    .call(e.querySelectorAll('th'))
    .forEach(function (e) {
      e.addEventListener('click', function () {
        for (
          var r, n, o = e.parentNode;
          'TABLE' != o.tagName.toUpperCase();

        )
          o = o.parentNode;
        Array.prototype.slice
          .call(o.querySelectorAll('tr:nth-child(n+2)'))
          .sort(
            ((r = Array.prototype.slice
              .call(e.parentNode.children)
              .indexOf(e)),
            (n = this.asc = !this.asc),
            function (e, o) {
              return (
                (s = t(n ? e : o, r)),
                (a = t(n ? o : e, r)),
                '' === s || '' === a || isNaN(s) || isNaN(a)
                  ? s.toString().localeCompare(a)
                  : s - a
              );
              var s, a;
            }),
          )
          .forEach(function (e) {
            o.appendChild(e);
          });
      });
    });
};
exports.sortTable = xe;
let be = (e, t) => {
  for (
    var r,
      n,
      o = function (e, t) {
        return e.children[t].innerText || e.children[t].textContent;
      },
      s = e.parentNode;
    'TABLE' != s.tagName.toUpperCase();

  )
    s = s.parentNode;
  Array.prototype.slice
    .call(s.querySelectorAll('tr:nth-child(n+2)'))
    .sort(
      ((r = Array.prototype.slice
        .call(e.parentNode.children)
        .indexOf(e)),
      (n = t),
      function (e, t) {
        return (
          (s = o(n ? e : t, r)),
          (a = o(n ? t : e, r)),
          '' === s || '' === a || isNaN(s) || isNaN(a)
            ? s.toString().localeCompare(a)
            : s - a
        );
        var s, a;
      }),
    )
    .forEach(function (e) {
      s.appendChild(e);
    });
};
exports.sortTableBy = be;
let ye = (e, r) => (t(), Object.assign(e.style, r));
exports.addStyles = ye;
let we = (e) => {
  t();
  const r = document.createElement('div');
  return (r.innerHTML = e), r.firstElementChild;
};
exports.createElement = we;
let ve = (e, r) => (
  t(), window.getComputedStyle(e).getPropertyValue(r)
);
exports.compStyle = ve;
let Ae = (e) => [...e.parentElement.children].filter((t) => t != e);
exports.elementSiblings = Ae;
let Te = (e) => (t(), (e.oncontextmenu = !1));
exports.disableRightClick = Te;
let Se = (e) => {
  var t,
    r = getComputedStyle(e, null);
  for (t = 0; t < r.length; t++) {
    var n = r[t] + '';
    e.style[n] = r[n];
  }
};
exports.inlineCSS = Se;
let Oe = (e) => {
  t();
  for (
    var r, n = [], o = 0, s = e.attributes, a = s.length;
    o < a;
    o++
  )
    (r = s[o]), n.push({ name: r.nodeName, value: r.nodeValue });
  return n;
};
exports.attributes = Oe;
let Ce = (e, t, r) => {
  const n = new MutationObserver((e) => e.forEach((e) => t(e)));
  return (
    n.observe(
      e,
      Object.assign(
        {
          childList: !0,
          attributes: !0,
          attributeOldValue: !0,
          characterData: !0,
          characterDataOldValue: !0,
          subtree: !0,
        },
        r,
      ),
    ),
    n
  );
};
exports.observeMutations = Ce;
let Me = (e, t, r, n = 500, o = 30) => {
  e.style.transform = `perspective(${n}px) scale(1.1) rotateX(${
    -1 * o * ((r - e.clientHeight / 2) / e.clientHeight)
  }deg) rotateY(${o * ((t - e.clientWidth / 2) / e.clientWidth)}deg)`;
};
exports.tilt = Me;
let Ee = (e) =>
  e.requestFullScreen ||
  e.mozRequestFullScreen ||
  e.webkitRequestFullScreen() ||
  new Error('Fullscreen failed');
exports.fullScreen = Ee;
let $e = (e) => {
  var t, r;
  if (window.getSelection) {
    if ((t = window.getSelection()).rangeCount) {
      (r = t.getRangeAt(0)).deleteContents();
      let n = document.createElement('span');
      n.insertAdjacentHTML('beforeend', e), r.insertNode(n);
    }
  } else
    document.selection &&
      document.selection.createRange &&
      (console.warn(
        'You are using IE < 9, you are evil. Falling back to text not HTML.',
      ),
      ((r = document.selection.createRange()).text = e.replace(
        /<[^>]*>/g,
        '',
      )));
};
exports.replaceSelection = $e;
let Le = (e, r) => (
  t(),
  document.addEventListener('click', (t) => {
    e.contains(t.target) || r();
  }),
  r
);
exports.onOutsideClick = Le;
let Ne = (e) => {
  let r;
  t(),
    window.addEventListener(
      'scroll',
      (t) => {
        clearTimeout(r),
          (r = setTimeout(() => {
            e(t);
          }, 150));
      },
      !1,
    );
};
exports.onScrollStop = Ne;
let je = () => ({
  hub: Object.create(null),
  emit(e, t) {
    (this.hub[e] || []).forEach((e) => e(t));
  },
  on(e, t) {
    this.hub[e] || (this.hub[e] = []), this.hub[e].push(t);
  },
  off(e, t) {
    const r = (this.hub[e] || []).findIndex((e) => e === t);
    r > -1 && this.hub[e].splice(r, 1),
      0 === this.hub[e].length && delete this.hub[e];
  },
});
exports.hub = je;
let Fe = (e, t, r = window) => {
  let n = new Event(e);
  for (let e in t) n[e] = t[e];
  r.dispatchEvent(n);
};
exports.dispatch = Fe;
exports.playSection = (e, t, r) => {
  let n = e.cloneNode(!0);
  (n.currentTime = t),
    n.play(),
    (n.int = setInterval(function () {
      n.currentTime > r && (n.pause(), clearInterval(n.int));
    }, 10));
};
let ke = (e) => {
  var t = '',
    r = '';
  return (
    e.split(/>\s*</).forEach(function (e) {
      e.match(/^\/\w/) && (r = r.substring('\t'.length)),
        (t += r + '<' + e + '>\r\n'),
        e.match(/^<?\w[^>]*[^\/]$/) &&
          !e.startsWith('input') &&
          (r += '\t');
    }),
    t.substring(1, t.length - 3)
  );
};
exports.formatHTML = ke;
let Ie = (e, r) => {
  t(),
    fetch(e)
      .then((e) => e.json())
      .then((e) => r(e))
      ['catch']((e) => {
        throw new Error(e.stack);
      });
};
exports.getJSON = Ie;
let Pe = (e, r) => {
  t(),
    fetch(e)
      .then((e) => e.text())
      .then((e) => r(ot.parseHTML(e)))
      ['catch']((e) => {
        throw new Error(e.stack);
      });
};
exports.getHTML = Pe;
let He = () => {
  for (var e = 0; e < arguments.length; e++)
    (images[e] = new Image()), (images[e].src = preload.arguments[e]);
};
exports.preloadImage = He;
let De = (e, r = 'output.txt') => {
  t();
  var n = document.createElement('a');
  document.body.appendChild(n), (n.style = 'display: none');
  var o = window.URL.createObjectURL(e);
  (n.href = o),
    (n.download = r),
    n.click(),
    window.URL.revokeObjectURL(o);
};
exports.saveBlob = De;
let Re = function (e, r) {
  t();
  var n =
      window.requestAnimationFrame ||
      function (e) {
        window.setTimeout(e, 1e3 / 60);
      },
    o = new Date().getTime(),
    s = {};
  return (
    (s.value = n(function a() {
      (s.value = n(a)),
        new Date().getTime() - o >= r &&
          (e.call(), (o = new Date().getTime()));
    })),
    s
  );
};
exports.requestInterval = Re;
let ze = (e, r) => {
  t();
  var n = document.createElement('script');
  (n.type = 'text/javascript'),
    n.readyState
      ? (n.onreadystatechange = function () {
          ('loaded' !== n.readyState &&
            'complete' !== n.readyState) ||
            ((n.onreadystatechange = null), r());
        })
      : (n.onload = function () {
          r();
        }),
    (n.src = e),
    document.getElementsByTagName('head')[0].appendChild(n);
};
exports.loadScript = ze;
let Be = async (e, t) => {
  let r = await fetch(e).then((e) => e.blob());
  t(
    await new Promise((e) => {
      let t = new FileReader();
      (t.onload = () => e(t.result)), t.readAsDataURL(r);
    }),
  );
};
exports.imageToData = Be;
let Ue = {
  setItem: (e, r, n = 1e3) => {
    t();
    var o = '';
    if (n) {
      var s = new Date();
      s.setTime(s.getTime() + 24 * n * 60 * 60 * 1e3),
        (o = '; expires=' + s.toUTCString());
    }
    document.cookie = e + '=' + (r || '') + o + '; path=/';
  },
  getItem: (e) => {
    t();
    for (
      var r = e + '=', n = document.cookie.split(';'), o = 0;
      o < n.length;
      o++
    ) {
      for (var s = n[o]; ' ' == s.charAt(0); )
        s = s.substring(1, s.length);
      if (0 == s.indexOf(r)) return s.substring(r.length, s.length);
    }
    return null;
  },
  removeItem: (e) => {
    t(),
      (document.cookie =
        e + '=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;');
  },
};
exports.cookies = Ue;
let Ve = {
  phone: /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/,
  name: /^(?:[a-zA-Z]{2,}\s[a-zA-Z]{1,}'?-?[a-zA-Z]{2,}\s?(?:[a-zA-Z]{1,})?)/,
  email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
  link: /(([\w]+:)?\/\/)?(([\d\w]|%[a-fA-f\d]{2,2})+(:([\d\w]|%[a-fA-f\d]{2,2})+)?@)?([\d\w][-\d\w]{0,253}[\d\w]\.)+[\w]{2,63}(:[\d]+)?(\/([-+_~.\d\w]|%[a-fA-f\d]{2,2})*)*(\?(&?([-+_~.\d\w]|%[a-fA-f\d]{2,2})=?)*)?(#([-+_~.\d\w]|%[a-fA-f\d]{2,2})*)?/,
  strongPassword: /(?=(.*[0-9]))(?=.*[\!@#$%^&*()\\[\]{}\-_+=~`|:;"'<>,./?])(?=.*[a-z])(?=(.*[A-Z]))(?=(.*)).{8,}/,
  moderatePassword: /(?=(.*[0-9]))((?=.*[A-Za-z0-9])(?=.*[A-Z])(?=.*[a-z]))^.{8,}$/,
  ipv4: /^ (([0 - 9] | [1 - 9][0 - 9] | 1[0 - 9]{ 2}| 2[0 - 4][0 - 9] | 25[0 - 5]) \.) { 3 } ([0 - 9] | [1 - 9][0 - 9] | 1[0 - 9]{ 2 }| 2[0 - 4][0 - 9] | 25[0 - 5]) $ /,
  ipv6: /(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))/,
  ip: / ((^\s*((([0 - 9] | [1 - 9][0 - 9] | 1[0 - 9]{ 2} | 2[0 - 4][0 - 9] | 25[0 - 5]) \.) { 3}([0 - 9] | [1 - 9][0 - 9] | 1[0 - 9]{ 2 }| 2[0 - 4][0 - 9] | 25[0 - 5])) \s * $)| (^\s * ((([0 - 9A - Fa - f]{ 1, 4 }:) { 7 } ([0 - 9A - Fa - f]{ 1, 4 }|:))| (([0 - 9A - Fa - f]{ 1, 4 }:) { 6 } (: [0 - 9A - Fa - f]{ 1, 4 }| ((25[0 - 5] | 2[0 - 4]\d | 1\d\d | [1 - 9] ?\d) (\.(25[0 - 5] | 2[0 - 4]\d | 1\d\d | [1 - 9] ?\d)) { 3 })|:))| (([0 - 9A - Fa - f]{ 1, 4 }:) { 5 } (((: [0 - 9A - Fa - f]{ 1, 4 }) { 1, 2 })|: ((25[0 - 5] | 2[0 - 4]\d | 1\d\d | [1 - 9] ?\d) (\.(25[0 - 5] | 2[0 - 4]\d | 1\d\d | [1 - 9] ?\d)) { 3 })|:))| (([0 - 9A - Fa - f]{ 1, 4 }:) { 4 } (((: [0 - 9A - Fa - f]{ 1, 4 }) { 1, 3 })| ((: [0 - 9A - Fa - f]{ 1, 4 })?: ((25[0 - 5] | 2[0 - 4]\d | 1\d\d | [1 - 9] ?\d) (\.(25[0 - 5] | 2[0 - 4]\d | 1\d\d | [1 - 9] ?\d)) { 3 }))|:))| (([0 - 9A - Fa - f]{ 1, 4 }:) { 3 } (((: [0 - 9A - Fa - f]{ 1, 4 }) { 1, 4 })| ((: [0 - 9A - Fa - f]{ 1, 4 }) { 0, 2 }: ((25[0 - 5] | 2[0 - 4]\d | 1\d\d | [1 - 9] ?\d) (\.(25[0 - 5] | 2[0 - 4]\d | 1\d\d | [1 - 9] ?\d)) { 3 }))|:))| (([0 - 9A - Fa - f]{ 1, 4 }:) { 2 } (((: [0 - 9A - Fa - f]{ 1, 4 }) { 1, 5 })| ((: [0 - 9A - Fa - f]{ 1, 4 }) { 0, 3 }: ((25[0 - 5] | 2[0 - 4]\d | 1\d\d | [1 - 9] ?\d) (\.(25[0 - 5] | 2[0 - 4]\d | 1\d\d | [1 - 9] ?\d)) { 3 }))|:))| (([0 - 9A - Fa - f]{ 1, 4 }:) { 1 } (((: [0 - 9A - Fa - f]{ 1, 4 }) { 1, 6 })| ((: [0 - 9A - Fa - f]{ 1, 4 }) { 0, 4 }: ((25[0 - 5] | 2[0 - 4]\d | 1\d\d | [1 - 9] ?\d) (\.(25[0 - 5] | 2[0 - 4]\d | 1\d\d | [1 - 9] ?\d)) { 3 }))|:))| (: (((: [0 - 9A - Fa - f]{ 1, 4 }) { 1, 7 })| ((: [0 - 9A - Fa - f]{ 1, 4 }) { 0, 5 }: ((25[0 - 5] | 2[0 - 4]\d | 1\d\d | [1 - 9] ?\d) (\.(25[0 - 5] | 2[0 - 4]\d | 1\d\d | [1 - 9] ?\d)) { 3 }))|:))) (%.+) ?\s * $)) /,
  socialSecurity: /^((?!219-09-9999|078-05-1120)(?!666|000|9\d{2})\d{3}-(?!00)\d{2}-(?!0{4})\d{4})|((?!219 09 9999|078 05 1120)(?!666|000|9\d{2})\d{3} (?!00)\d{2} (?!0{4})\d{4})|((?!219099999|078051120)(?!666|000|9\d{2})\d{3}(?!00)\d{2}(?!0{4})\d{4})$/,
  hex: /^#?([a-fA-F0-9]{6}|[a-fA-F0-9]{3})$/,
  zipCode: /(^\d{5}(-\d{4})?$)|(^[ABCEGHJKLMNPRSTVXY]{1}\d{1}[A-Z]{1} *\d{1}[A-Z]{1}\d{1}$)/,
  simplePhone: /^\+?[\d\s]{3,}$/,
  visaCredit: /^4[0–9]{12}(?:[0–9]{3})?$/,
  expressCredit: /^3[47][0–9]{13}$/,
  mastercardCredit: /^(?:5[1–5][0–9]{2}|222[1–9]|22[3–9][0–9]|2[3–6][0–9]{2}|27[01][0–9]|2720)[0–9]{12}$/,
  discoverCredit: /^6(?:011|5[0–9]{2})[0–9]{12}$/,
};
exports.regex = Ve;
let qe = (e, t, r = ',') =>
  [
    t.join(r),
    ...e.map((e) =>
      t.reduce(
        (t, n) => `${t}${t.length ? r : ''}"${e[n] ? e[n] : ''}"`,
        '',
      ),
    ),
  ].join('\n');
exports.jsonToCsv = qe;
let Ze = (e, t = ',') =>
  e
    .map((e) =>
      e
        .map((e) => (isNaN(e) ? `"${e.replace(/"/g, '""')}"` : e))
        .join(t),
    )
    .join('\n');
exports.arrayToCSV = Ze;
let We = (e, t = '_$ function timer') => {
  console.time(t), e(), console.timeEnd(t);
};
exports.timeFunction = We;
let Ye = (e, r, n) => {
  t(),
    window.Notification
      ? 'granted' === Notification.permission ||
        Notification.requestPermission()
          .then(function (e) {
            'granted' === e ||
              console.log('User blocked notifications.');
          })
          ['catch'](function (e) {
            console.error(e);
          })
      : console.log('Browser does not support notifications.');
};
exports.notify = Ye;
let _e = (e) => {
  t();
  const r = document.createElement('textarea');
  (r.value = e),
    r.setAttribute('readonly', ''),
    (r.style.position = 'absolute'),
    (r.style.left = '-9999px'),
    document.body.appendChild(r);
  const n =
    document.getSelection().rangeCount > 0 &&
    document.getSelection().getRangeAt(0);
  return (
    r.select(),
    document.execCommand('copy'),
    document.body.removeChild(r),
    n &&
      (document.getSelection().removeAllRanges(),
      document.getSelection().addRange(n)),
    e
  );
};
exports.copy = _e;
let Qe = () => {
  t();
  var e =
      (!!window.opr && !!opr.addons) ||
      !!window.opera ||
      navigator.userAgent.indexOf(' OPR/') >= 0,
    r = 'undefined' != typeof InstallTrigger,
    n =
      /constructor/i.test(window.HTMLElement) ||
      '[object SafariRemoteNotification]' ===
        (
          !window.safari ||
          ('undefined' != typeof safari &&
            window.safari.pushNotification)
        ).toString(),
    o = !!document.documentMode,
    s = !o && !!window.StyleMedia,
    a = !(
      !window.chrome ||
      (!window.chrome.webstore && !window.chrome.runtime)
    ),
    l = a && -1 != navigator.userAgent.indexOf('Edg'),
    i = (a || e) && !!window.CSS;
  return e
    ? 'Opera'
    : r
    ? 'Firefox'
    : n
    ? 'Safari'
    : s
    ? 'Edge'
    : o
    ? 'Internet Explorer'
    : a
    ? 'Chrome'
    : l
    ? 'Edge Chromium'
    : i
    ? 'Blink'
    : void 0;
};
exports.browser = Qe;
let Xe = (e) => {
  let t = e.indexOf(',') > -1 ? ',' : ' ',
    r = (+(e = e.substr(4).split(')')[0].split(t))[0]).toString(16),
    n = (+e[1]).toString(16),
    o = (+e[2]).toString(16);
  return (
    1 == r.length && (r = '0' + r),
    1 == n.length && (n = '0' + n),
    1 == o.length && (o = '0' + o),
    '#' + r + n + o
  );
};
exports.rgbToHex = Xe;
let Je = (e) => {
  if (
    ((e.length - 1 != 6 &&
      e.length - 1 != 8 &&
      e.length - 1 != 4 &&
      e.length - 1 != 3) ||
      !e.startsWith('#')) &&
    ((6 !== e.length &&
      8 !== e.length &&
      4 !== e.length &&
      3 !== e.length) ||
      e.startsWith('#'))
  )
    throw new Error('Invalid hex');
  let t = !1,
    r = e.slice(e.startsWith('#') ? 1 : 0);
  return (
    3 === r.length
      ? (r = [...r].map((e) => e + e).join(''))
      : 8 === r.length && (t = !0),
    (r = parseInt(r, 16)),
    'rgb' +
      (t ? 'a' : '') +
      '(' +
      (r >>> (t ? 24 : 16)) +
      ', ' +
      ((r & (t ? 16711680 : 65280)) >>> (t ? 16 : 8)) +
      ', ' +
      ((r & (t ? 65280 : 255)) >>> (t ? 8 : 0)) +
      (t ? ', ' + (255 & r) : '') +
      ')'
  );
};
exports.hexToRGB = Je;
let Ge = (e, t, r = 50) => {
  const n = (e, t, r) => e + (r / 100) * (t - e),
    o = parseInt(`${e[1]}${e[2]}`, 16),
    s = parseInt(`${e[3]}${e[4]}`, 16),
    a = parseInt(`${e[5]}${e[6]}`, 16),
    l = parseInt(`${t[1]}${t[2]}`, 16),
    i = parseInt(`${t[3]}${t[4]}`, 16),
    p = parseInt(`${t[5]}${t[6]}`, 16);
  return ((e, t, r) => {
    let n = e.toString(16),
      o = t.toString(16),
      s = r.toString(16);
    for (; n.length < 2; ) n = `0${n}`;
    for (; o.length < 2; ) o = `0${o}`;
    for (; s.length < 2; ) s = `0${s}`;
    return `#${n}${o}${s}`;
  })(
    Math.round(n(o, l, r)),
    Math.round(n(s, i, r)),
    Math.round(n(a, p, r)),
  );
};
exports.blendColors = Ge;
let Ke = () =>
  `#${Math.floor(16777215 * Math.random()).toString(16)}`;
exports.randomColor = Ke;
let et = (e, t) => {
  var r = !1;
  '#' == e[0] && ((e = e.slice(1)), (r = !0));
  var n = parseInt(e, 16),
    o = (n >> 16) + t;
  o > 255 ? (o = 255) : o < 0 && (o = 0);
  var s = ((n >> 8) & 255) + t;
  s > 255 ? (s = 255) : s < 0 && (s = 0);
  var a = (255 & n) + t;
  return (
    a > 255 ? (a = 255) : a < 0 && (a = 0),
    (r ? '#' : '') + (a | (s << 8) | (o << 16)).toString(16)
  );
};
exports.lightenColor = et;
let tt = (e) => {
  var t, r, n, o;
  return (
    e.match(/^rgb/)
      ? ((t = (e = e.match(
          /^rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*(\d+(?:\.\d+)?))?\)$/,
        ))[1]),
        (r = e[2]),
        (n = e[3]))
      : ((t =
          (e = +(
            '0x' + e.slice(1).replace(e.length < 5 && /./g, '$&$&')
          )) >> 16),
        (r = (e >> 8) & 255),
        (n = 255 & e)),
    (o = Math.sqrt(t * t * 0.299 + r * r * 0.587 + n * n * 0.114)) >
    127.5
      ? { lightOrDark: 'light', hsp: o }
      : { lightOrDark: 'dark', hsp: o }
  );
};
exports.lightOrDark = tt;
let rt = {
  addEventListeners: me,
  addStyles: ye,
  animate: r,
  arrayDiff: k,
  arrayToCSV: Ze,
  attributes: Oe,
  averageBy: q,
  beautifyJS: M,
  blendColors: Ge,
  browser: Qe,
  byteSize: A,
  camelCase: b,
  capitalize: $,
  clone: K,
  compStyle: ve,
  composeFunction: _,
  contains: z,
  context: ae,
  cookies: Ue,
  copy: _e,
  createElement: we,
  curryFunction: Q,
  dayName: u,
  diff: I,
  disableRightClick: Te,
  dispatch: Fe,
  drag: he,
  each: W,
  ease: p,
  editDistance: v,
  elementSiblings: Ae,
  escapeHTML: N,
  flatten: D,
  formToObject: oe,
  formatHTML: ke,
  formatMilliseconds: c,
  formatNumber: i,
  fullScreen: Ee,
  getHTML: Pe,
  getJSON: Ie,
  hashString: w,
  hexToRGB: Je,
  hub: je,
  imageToData: Be,
  inPartialView: ie,
  inView: le,
  inlineCSS: Se,
  isAsync: X,
  jsonToCsv: qe,
  lightOrDark: tt,
  lightenColor: et,
  listen: ee,
  loadScript: ze,
  mapObjectKeys: re,
  mapObjectValues: ne,
  markdownToHTML: C,
  memoize: Y,
  merge: te,
  mobileOrDesktop: d,
  nFlatten: R,
  notify: Ye,
  observeMutations: Ce,
  onOutsideClick: Le,
  onScrollStop: Ne,
  parseHTML: ge,
  preloadImage: He,
  previousPage: F,
  primesTo: s,
  querySelector: de,
  random: a,
  randomColor: Ke,
  range: n,
  regex: Ve,
  remove: P,
  removeComments: fe,
  removeTags: f,
  replaceBetween: L,
  replaceMultiple: T,
  replaceSelection: $e,
  replaceText: ue,
  requestInterval: Re,
  rgbToHex: Xe,
  runAsync: G,
  sanitize: O,
  saveBlob: De,
  scrambleString: y,
  seedRandom: l,
  serializeForm: pe,
  shuffleArray: B,
  sortObj: se,
  sortTable: xe,
  sortTableBy: be,
  speak: g,
  splice: U,
  spliceArrayBuffer: H,
  syllables: E,
  syntaxHighlight: x,
  textNodes: ce,
  throttle: J,
  tilt: Me,
  timeFunction: We,
  unCamelCase: m,
  unescapeHTML: j,
  unionArrays: V,
  uniqueArray: Z,
  urlQuery: S,
  uuid: o,
  widows: h,
};
var nt = rt;
(exports['default'] = nt), (window._$ = rt);
const ot = rt;
if (((exports._$ = ot), e))
  try {
    module.exports = rt;
  } catch (st) {
    console.error(st);
  }
