/* =========================================================
   01-core.js — inti: penyimpanan, state, helper
   ========================================================= */
window.EG = window.EG || {};

(function (EG) {
  'use strict';

  /* ---------- Penyimpanan (aman kalau localStorage diblokir) ---------- */
  const memory = {};
  const store = {
    get(key, fallback) {
      try {
        const raw = localStorage.getItem(key);
        return raw === null ? fallback : JSON.parse(raw);
      } catch (e) {
        return key in memory ? memory[key] : fallback;
      }
    },
    set(key, value) {
      memory[key] = value;
      try { localStorage.setItem(key, JSON.stringify(value)); } catch (e) { /* fallback: memory */ }
    },
    remove(key) {
      delete memory[key];
      try { localStorage.removeItem(key); } catch (e) {}
    }
  };
  EG.store = store;

  const KEY = 'egp_v1';

  function defaultState() {
    return {
      done: [],
      notes: {},
      quiz: { score: 0, answered: 0, best: 0, total: 0 },
      autopsy: { count: 0, last: '' },
      fix: { score: 0, answered: 0 },
      translate: { score: 0, answered: 0 },
      settings: { theme: 'auto', fontSize: 'md', showIndoFirst: true }
    };
  }

  function deepMerge(base, extra) {
    const out = Array.isArray(base) ? base.slice() : Object.assign({}, base);
    if (!extra || typeof extra !== 'object') return out;
    Object.keys(extra).forEach(function (k) {
      const b = out[k], e = extra[k];
      out[k] = (b && typeof b === 'object' && !Array.isArray(b) && e && typeof e === 'object')
        ? deepMerge(b, e) : e;
    });
    return out;
  }

  EG.state = deepMerge(defaultState(), store.get(KEY, null));
  EG.save = function () { store.set(KEY, EG.state); };
  EG.resetAll = function () { store.remove(KEY); EG.state = defaultState(); EG.applySettings(); };

  /* ---------- Helper DOM ---------- */
  EG.$ = function (sel, root) { return (root || document).querySelector(sel); };
  EG.$$ = function (sel, root) { return Array.prototype.slice.call((root || document).querySelectorAll(sel)); };

  EG.esc = function (str) {
    return String(str === null || str === undefined ? '' : str)
      .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;').replace(/'/g, '&#39;');
  };

  /* ----- Teks unsafe untuk HTML (data user) tetap di-escape ----- */
  EG.pct = function (done, total) { return total ? Math.round((done / total) * 100) : 0; };

  EG.clamp = function (n, min, max) { return Math.max(min, Math.min(max, n)); };

  EG.shuffle = function (arr, seed) {
    const a = arr.slice();
    let s = seed || Date.now();
    function rnd() { s = (s * 9301 + 49297) % 233280; return s / 233280; }
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(rnd() * (i + 1));
      const t = a[i]; a[i] = a[j]; a[j] = t;
    }
    return a;
  };

  EG.titleCase = function (s) { return s.charAt(0).toUpperCase() + s.slice(1); };

  /* ---------- Toast ---------- */
  EG.toast = function (msg) {
    let t = document.getElementById('toastBox');
    if (!t) {
      t = document.createElement('div');
      t.id = 'toastBox';
      t.style.cssText = 'position:fixed;left:50%;bottom:24px;transform:translateX(-50%);z-index:99;' +
        'background:var(--ink);color:var(--bg);padding:9px 16px;border-radius:20px;font-size:.85rem;' +
        'opacity:0;transition:opacity .2s;pointer-events:none;max-width:90vw;text-align:center;';
      document.body.appendChild(t);
    }
    t.textContent = msg;
    t.style.opacity = '1';
    clearTimeout(t._timer);
    t._timer = setTimeout(function () { t.style.opacity = '0'; }, 1900);
  };

  /* ---------- Pengaturan tampilan ---------- */
  const FONT_SIZES = { sm: '15px', md: '16px', lg: '17.5px', xl: '19px' };

  EG.applySettings = function () {
    const s = EG.state.settings;
    const root = document.documentElement;
    const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    const dark = s.theme === 'dark' || (s.theme === 'auto' && prefersDark);
    root.setAttribute('data-theme', dark ? 'dark' : 'light');
    root.style.setProperty('--fs', FONT_SIZES[s.fontSize] || FONT_SIZES.md);
  };

  EG.levelBadge = function (level) {
    const map = { Dasar: 'pill', Menengah: 'pill gold', Lanjut: 'pill brick' };
    return '<span class="' + (map[level] || 'pill') + '">' + EG.esc(level || '') + '</span>';
  };

})(window.EG);
