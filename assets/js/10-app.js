/* =========================================================
   10-app.js — router, navigasi, pencarian, pengaturan, init
   ========================================================= */
(function (EG) {
  'use strict';

  const esc = EG.esc;
  const $ = EG.$;

  const NAV = [
    { g: 'Mulai' },
    { hash: '#/', ico: '🏠', label: 'Beranda' },
    { g: 'Materi' },
    { hash: '#/learn', ico: '📚', label: 'Semua materi' },
    { hash: '#/map', ico: '🗺️', label: 'Grammar Map' },
    { hash: '#/mistakes', ico: '⚠️', label: 'Kesalahan umum' },
    { g: 'Latihan' },
    { hash: '#/quiz', ico: '🎯', label: 'Quiz campuran' },
    { hash: '#/correction', ico: '✏️', label: 'Koreksi kesalahan' },
    { hash: '#/translation', ico: '🌐', label: 'Terjemahkan' },
    { hash: '#/analyzer', ico: '🔬', label: 'Grammar Autopsy' },
    { g: 'Praktis' },
    { hash: '#/compare', ico: '⚔️', label: 'Compare' },
    { hash: '#/reallife', ico: '🌍', label: 'Real Life' },
    { g: 'Lainnya' },
    { hash: '#/settings', ico: '⚙️', label: 'Pengaturan' }
  ];

  const BOTTOM = [
    { hash: '#/', ico: '🏠', label: 'Beranda' },
    { hash: '#/learn', ico: '📚', label: 'Materi' },
    { hash: '#/analyzer', ico: '🔬', label: 'Autopsy' },
    { hash: '#/quiz', ico: '🎯', label: 'Quiz' },
    { hash: '#/reallife', ico: '🌍', label: 'Praktis' }
  ];

  /* ---------------- NAVIGASI ---------------- */
  function buildNav() {
    const list = $('#navList');
    if (list) {
      list.innerHTML = NAV.map(function (n) {
        if (n.g) return '<div class="nav-group">' + esc(n.g) + '</div>';
        return '<a class="nav-item" href="' + esc(n.hash) + '" data-route="' + esc(n.hash) + '">' +
          '<span class="ico">' + n.ico + '</span><span>' + esc(n.label) + '</span></a>';
      }).join('');
    }
    const bottom = $('#bottomNav');
    if (bottom) {
      bottom.innerHTML = BOTTOM.map(function (n) {
        return '<button data-route="' + esc(n.hash) + '"><span>' + n.ico + '</span><span>' + esc(n.label) + '</span></button>';
      }).join('');
    }
  }

  const NAV_ALIAS = {
    lesson: '#/learn',
    step: '#/learn',
    learn: '#/learn',
    map: '#/map',
    mistakes: '#/mistakes',
    quiz: '#/quiz',
    correction: '#/correction',
    translation: '#/translation',
    analyzer: '#/analyzer',
    compare: '#/compare',
    reallife: '#/reallife',
    settings: '#/settings',
    '': '#/'
  };

  function markActive(hash) {
    const seg = (hash.split('?')[0].replace(/^#\/?/, '').split('/').filter(Boolean))[0] || '';
    const base = NAV_ALIAS[seg] || '#/';
    EG.$$('[data-route]').forEach(function (el) {
      el.classList.toggle('active', el.getAttribute('data-route') === base);
    });
  }

  function updateProgress() {
    const total = (EG.lessons || []).length;
    const done = (EG.state.done || []).length;
    const fill = $('#miniFill');
    const label = $('#miniLabel');
    if (fill) fill.style.width = EG.pct(done, total) + '%';
    if (label) label.textContent = EG.pct(done, total) + '%';
  }

  /* ---------------- ROUTER ---------------- */
  function parseHash() {
    const raw = location.hash || '#/';
    const qi = raw.indexOf('?');
    const path = qi > -1 ? raw.slice(0, qi) : raw;
    const params = {};
    if (qi > -1) {
      raw.slice(qi + 1).split('&').forEach(function (kv) {
        const p = kv.split('=');
        params[decodeURIComponent(p[0])] = decodeURIComponent((p[1] || '').replace(/\+/g, ' '));
      });
    }
    return { path: path, params: params, raw: raw };
  }

  function render() {
    const r = parseHash();
    const v = EG.views;
    const seg = r.path.replace(/^#\/?/, '').split('/').filter(Boolean);
    const content = $('#content');
    if (!content || !v) return;

    let html;
    try {
      if (!seg.length) html = v.home();
      else if (seg[0] === 'learn') html = v.learn(r.params);
      else if (seg[0] === 'step') html = v.stepPage(seg[1]);
      else if (seg[0] === 'lesson') html = v.lesson(seg[1]);
      else if (seg[0] === 'map') html = v.mapPage();
      else if (seg[0] === 'compare') html = v.comparePage(r.params);
      else if (seg[0] === 'reallife') html = v.realLifePage(r.params);
      else if (seg[0] === 'analyzer') html = v.analyzerPage();
      else if (seg[0] === 'mistakes') html = v.mistakesPage();
      else if (seg[0] === 'quiz') html = v.quizPage();
      else if (seg[0] === 'correction') html = v.correctionPage();
      else if (seg[0] === 'translation') html = v.translationPage();
      else if (seg[0] === 'settings') html = v.settingsPage();
      else html = v.notFound(r.raw);
    } catch (err) {
      html = '<div class="card"><h3>Ada kesalahan saat membuka halaman</h3><p class="sub">' +
        esc(err && err.message ? err.message : String(err)) + '</p></div>';
    }

    content.innerHTML = html;
    markActive(r.raw);
    updateProgress();
    afterRender(r);
    window.scrollTo(0, 0);
  }

  /* ---------------- PASCA RENDER ---------------- */
  function afterRender(r) {
    if (EG.ui && EG.ui.bindOsa) EG.ui.bindOsa(content);
    const seg = r.path.replace(/^#\/?/, '').split('/').filter(Boolean);

    /* kuis di dalam halaman lesson */
    if (seg[0] === 'lesson') {
      const id = seg[1];
      const lesson = (EG.lessons || []).filter(function (l) { return l.id === id; })[0];
      const box = document.querySelector('[data-quiz="' + id + '"]');
      if (lesson && box) {
        EG.bindQuiz(box, lesson.practice, { kind: 'quiz', silent: true });
        const chk = document.querySelector('[data-checkall]');
        if (chk) chk.addEventListener('click', function () {
          const opts = EG.$$('.opt', box).filter(function (o) { return !o.disabled; });
          if (opts.length) opts[0].click();
        });
      }
    }

    /* Grammar Autopsy */
    if (seg[0] === 'analyzer') {
      const input = $('#autopsyInput');
      const out = $('#autopsyOut');
      const run = function () {
        const text = (input.value || '').trim();
        if (!text) { EG.toast('Tulis satu kalimat dulu.'); return; }
        EG.state.autopsy = EG.state.autopsy || { count: 0, last: '' };
        EG.state.autopsy.count = (EG.state.autopsy.count || 0) + 1;
        EG.state.autopsy.last = text;
        EG.save();
        out.innerHTML = EG.views.renderAutopsy(EG.analyze(text));
        EG.practice.bindAutopsyChecks(out);
      };
      const runBtn = $('#autopsyRun');
      if (runBtn) runBtn.addEventListener('click', run);
      const sampleBtn = $('#autopsySample');
      if (sampleBtn) sampleBtn.addEventListener('click', function () {
        const list = EG.autopsySamples || [];
        input.value = list[Math.floor(Math.random() * list.length)] || '';
        run();
      });
      const samples = EG.$$('[data-sample]');
      samples.forEach(function (b) {
        b.addEventListener('click', function () {
          input.value = b.getAttribute('data-sample');
          run();
          window.scrollTo(0, 0);
        });
      });
      if (out && out.innerHTML.trim()) EG.practice.bindAutopsyChecks(out);
    }

    /* compare: pilih sendiri dua materi */
    const cmpA = $('#cmpA');
    const cmpB = $('#cmpB');
    if (cmpA && cmpB) {
      const apply = function () {
        location.hash = '#/compare?a=' + encodeURIComponent(cmpA.value) +
          '&b=' + encodeURIComponent(cmpB.value);
      };
      cmpA.addEventListener('change', apply);
      cmpB.addEventListener('change', apply);
    }
    const swapBtn = $('[data-cmp-swap]');
    if (swapBtn) {
      swapBtn.addEventListener('click', function () {
        if (!cmpA || !cmpB) return;
        const tmp = cmpA.value;
        cmpA.value = cmpB.value;
        cmpB.value = tmp;
        location.hash = '#/compare?a=' + encodeURIComponent(cmpA.value) +
          '&b=' + encodeURIComponent(cmpB.value);
      });
    }

    /* drill */
    const mixed = $('#mixedStart');
    if (mixed) mixed.addEventListener('click', function () { EG.practice.startMixedQuiz(10); });

    EG.$$('[data-fix-set]').forEach(function (b) {
      b.addEventListener('click', function () { EG.practice.startCorrection(b.getAttribute('data-fix-set')); });
    });
    EG.$$('[data-tr-set]').forEach(function (b) {
      b.addEventListener('click', function () { EG.practice.startTranslation(b.getAttribute('data-tr-set')); });
    });

    /* tandai selesai */
    EG.$$('[data-done]').forEach(function (b) {
      b.addEventListener('click', function () {
        const id = b.getAttribute('data-done');
        const done = EG.state.done || (EG.state.done = []);
        const i = done.indexOf(id);
        if (i > -1) { done.splice(i, 1); EG.toast('Dita tandakan belum paham.'); }
        else { done.push(id); EG.toast('Materi ditandai sudah paham.'); }
        EG.save();
        render();
      });
    });

    /* catatan */
    EG.$$('[data-note]').forEach(function (ta) {
      ta.addEventListener('input', function () {
        const id = ta.getAttribute('data-note');
        EG.state.notes = EG.state.notes || {};
        EG.state.notes[id] = ta.value;
        EG.save();
      });
    });

    /* pengaturan */
    const save = $('#setSave');
    if (save) save.addEventListener('click', function () {
      const theme = $('#setTheme').value;
      const font = $('#setFont').value;
      EG.state.settings = EG.state.settings || {};
      EG.state.settings.theme = theme;
      EG.state.settings.fontSize = font;
      EG.save();
      EG.applySettings();
      EG.toast('Pengaturan disimpan.');
    });
    const reset = $('#setReset');
    if (reset) reset.addEventListener('click', function () {
      if (confirm('Hapus semua progres, catatan, dan skor?')) {
        EG.resetAll();
        EG.toast('Semua progres dihapus.');
        render();
      }
    });
  }

  /* ---------------- PENCARIAN ---------------- */
  function search(q) {
    const box = $('#searchResults');
    if (!box) return;
    const term = (q || '').trim().toLowerCase();
    if (term.length < 2) { box.hidden = true; box.innerHTML = ''; return; }

    const hits = [];
    (EG.lessons || []).forEach(function (l) {
      const hay = (l.title + ' ' + l.cat + ' ' + l.simple + ' ' + l.hook + ' ' + l.eli10).toLowerCase();
      if (hay.indexOf(term) > -1) hits.push({ kind: 'lesson', label: l.title, sub: l.cat, hash: '#/lesson/' + l.id });
    });
    (EG.realLife || []).forEach(function (s) {
      const hay = (s.title + ' ' + s.goal + ' ' + s.say.map(function (r) { return r.en + ' ' + r.id; }).join(' ')).toLowerCase();
      if (hay.indexOf(term) > -1) hits.push({ kind: 'reallife', label: s.title, sub: 'Real Life', hash: '#/reallife?id=' + s.id });
    });
    (EG.comparePresets || []).forEach(function (p) {
      if ((p.title + ' ' + (p.tip || '')).toLowerCase().indexOf(term) > -1) {
        hits.push({ kind: 'compare', label: p.title, sub: 'Compare', hash: '#/compare?id=' + p.id });
      }
    });

    box.hidden = false;
    box.innerHTML = hits.length
      ? hits.slice(0, 12).map(function (h) {
          return '<button class="search-hit" data-goto="' + esc(h.hash) + '"><b>' + esc(h.label) + '</b><span>' + esc(h.sub) + '</span></button>';
        }).join('')
      : '<div class="search-empty">Tidak ada hasil untuk "' + esc(q) + '".</div>';
  }

  /* ---------------- SIDEBAR MOBILE ---------------- */
  function openSidebar(on) {
    const sb = $('#sidebar');
    const sc = $('#scrim');
    if (sb) sb.classList.toggle('open', on);
    if (sc) sc.hidden = !on;
  }

  function closestOf(e, sel) {
    const t = e.target;
    if (!t || typeof t.closest !== 'function') return null;
    return t.closest(sel);
  }

  /* ---------------- INIT ---------------- */
  function init() {
    if (!EG.lessons || !EG.lessons.length) {
      const c = $('#content');
      if (c) c.innerHTML = '<div class="card"><h3>Data materi belum termuat</h3><p class="sub">Pastikan file lesson dimuat sebelum app.</p></div>';
      return;
    }

    EG.applySettings();
    buildNav();

    window.addEventListener('hashchange', function () {
      render();
      openSidebar(false);
    });

    document.addEventListener('click', function (e) {
      const goto = closestOf(e, '[data-goto]');
      if (goto) {
        e.preventDefault();
        location.hash = goto.getAttribute('data-goto');
        return;
      }
      const route = closestOf(e, '[data-route]');
      if (route && route.tagName === 'BUTTON') {
        location.hash = route.getAttribute('data-route');
      }
    });

    const si = $('#searchInput');
    if (si) {
      si.addEventListener('input', function () { search(si.value); });
      si.addEventListener('focus', function () { search(si.value); });
    }

    document.addEventListener('click', function (e) {
      if (!closestOf(e, '.search-wrap')) {
        const box = $('#searchResults');
        if (box) box.hidden = true;
      }
    });

    const ham = $('#hamburger');
    if (ham) ham.addEventListener('click', function () {
      const sb = $('#sidebar');
      openSidebar(!(sb && sb.classList.contains('open')));
    });
    const sc = $('#scrim');
    if (sc) sc.addEventListener('click', function () { openSidebar(false); });

    render();
    EG.appReady = true;
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();

  EG.app = { render: render, search: search, NAV: NAV };

})(window.EG);
