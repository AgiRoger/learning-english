/* =========================================================
   09-practice.js — mesin latihan: quiz, koreksi, terjemahan
   ========================================================= */
(function (EG) {
  'use strict';

  const esc = EG.esc;
  const ui = EG.ui;

  function markScore(kind, correct) {
    const st = EG.state[kind] || (EG.state[kind] = { score: 0, answered: 0 });
    st.answered = (st.answered || 0) + 1;
    if (correct) st.score = (st.score || 0) + 1;
    if (kind === 'quiz') st.best = Math.max(st.best || 0, st.score || 0);
    EG.save();
  }

  /* ---------------- QUIZ PILIHAN GANDA ---------------- */
  function bindQuiz(root, questions, opts) {
    const o = opts || {};
    let score = 0, answered = 0;

    root.innerHTML = questions.map(function (q, i) {
      return '<div class="q" data-i="' + i + '">' +
        '<p class="q-text"><b>' + (i + 1) + '.</b> ' + ui.mark(q.q) + '</p>' +
        q.opts.map(function (op, j) {
          return '<button class="opt" data-pick="' + j + '">' + ui.mark(op) + '</button>';
        }).join('') +
        '<div class="explain" hidden></div></div>';
    }).join('') +
      '<div class="card mt"><div class="btn-row">' +
      '<button class="btn ghost sm" data-recheck>Lihat semua jawaban</button>' +
      '<span class="tiny sub" data-score>0 benar dari 0 dijawab</span>' +
      '</div></div>';

    function update() {
      const el = root.querySelector('[data-score]');
      if (el) el.textContent = score + ' benar dari ' + answered + ' dijawab';
    }

    function reveal(qEl, i) {
      const q = questions[i];
      const ex = qEl.querySelector('.explain');
      if (!ex || !ex.hidden) return;
      Array.prototype.forEach.call(qEl.querySelectorAll('.opt'), function (b, j) {
        b.disabled = true;
        if (j === q.ans) b.classList.add('correct');
      });
      ex.hidden = false;
      ex.className = 'explain';
      ex.innerHTML = '<b>Jawaban:</b> ' + esc(q.opts[q.ans]) +
        (q.explain ? '<br>' + esc(q.explain) : '');
    }

    root.addEventListener('click', function (e) {
      const btn = e.target.closest('[data-pick]');
      if (!btn || !root.contains(btn)) return;
      const qEl = btn.closest('.q');
      if (!qEl || qEl.dataset.done === '1') return;

      const i = Number(qEl.dataset.i);
      const pick = Number(btn.dataset.pick);
      const q = questions[i];
      const ok = pick === q.ans;

      qEl.dataset.done = '1';
      answered++;
      if (ok) score++;

      Array.prototype.forEach.call(qEl.querySelectorAll('.opt'), function (b, j) {
        b.disabled = true;
        if (j === q.ans) b.classList.add('correct');
        else if (j === pick) b.classList.add('wrong');
      });

      const ex = qEl.querySelector('.explain');
      ex.hidden = false;
      ex.className = 'explain ' + (ok ? 'ok' : 'no');
      ex.innerHTML = (ok ? '<b>Benar.</b> ' : '<b>Belum tepat.</b> ') + esc(q.explain || '');

      if (!o.silent) markScore(o.kind || 'quiz', ok);
      update();

      if (answered === questions.length && !o.silent) {
        const msg = score === questions.length
          ? 'Semua benar. Bagus.'
          : 'Selesai: ' + score + ' dari ' + questions.length + ' benar.';
        EG.toast(msg);
      }
    });

    root.addEventListener('click', function (e) {
      if (!e.target.closest('[data-recheck]')) return;
      Array.prototype.forEach.call(root.querySelectorAll('.q'), function (qEl, i) {
        reveal(qEl, i);
      });
    });

    return { update: update, result: function () { return { score: score, answered: answered }; } };
  }

  EG.bindQuiz = bindQuiz;

  /* ---------------- QUIX CAMPURAN ---------------- */
  function startMixedQuiz(count) {
    const out = document.getElementById('quizOut');
    if (!out) return;
    const bank = EG.shuffle(EG.quizBank || []).slice(0, count || 10);
    if (!bank.length) { out.innerHTML = ui.empty('Belum ada bank soal.'); return; }

    out.innerHTML = '<h2 class="mt">Quiz berjalan</h2><div class="card" id="mixedBox"></div>';
    const box = document.getElementById('mixedBox');
    bindQuiz(box, bank.map(function (q) {
      return { q: q.q, opts: q.opts, ans: q.ans, explain: q.explain };
    }), { kind: 'quiz' });
  }

  /* ---------------- KOREKSI KESALAHAN ---------------- */
  function drillShell(out) {
    out.innerHTML = '';
    const wrap = document.createElement('div');
    wrap.className = 'drill-set';
    out.appendChild(wrap);
    return wrap;
  }

  function startCorrection(setId) {
    const out = document.getElementById('fixOut');
    if (!out) return;
    const set = (EG.correctionSets || []).filter(function (s) { return s.id === setId; })[0];
    if (!set) { out.innerHTML = ui.empty('Set soal tidak ditemukan.'); return; }

    const wrap = drillShell(out);
    wrap.innerHTML = '<h2 class="mt">' + esc(set.title) + ' <span class="sub">(' + esc(set.level) + ')</span></h2>' +
      set.items.map(function (it, i) {
        return '<div class="drill-in" data-fix="' + i + '">' +
          '<p class="wrong"><s>' + esc(it.wrong) + '</s></p>' +
          '<label class="fld" for="fixIn-' + i + '">Perbaiki kalimatnya (tulis versi English yang benar)</label>' +
          '<input type="text" id="fixIn-' + i + '" data-fix-in="' + i + '" placeholder="Tulis versi yang benar...">' +
          '<div class="btn-row"><button class="btn sm" data-fix-check="' + i + '">Periksa</button></div>' +
          '<div class="explain fix-answer" hidden></div>' +
          '</div>';
      }).join('');

    wrap.addEventListener('click', function (e) {
      const btn = e.target.closest('[data-fix-check]');
      if (!btn || btn.disabled) return;
      const i = Number(btn.dataset.fixCheck);
      const box = wrap.querySelector('[data-fix="' + i + '"]');
      const input = wrap.querySelector('[data-fix-in="' + i + '"]');
      const it = set.items[i];
      if (!box || !input || !it) return;
      const ex = box.querySelector('.explain');

      const given = normText(input.value);
      const target = normText(it.right);
      const ok = given === target || (given.length > 3 && target.indexOf(given) > -1);

      ex.hidden = false;
      ex.className = 'explain fix-answer ' + (ok ? 'ok' : 'no');
      ex.innerHTML = (ok ? '<b>Tepat.</b> ' : '<b>Jawaban yang diharapkan:</b> <code>' + esc(it.right) + '</code><br>') +
        esc(it.why);
      markScore('fix', ok);
      btn.disabled = true;
    });
  }

  /* ---------------- TERJEMAHAN ---------------- */
  function normText(s) {
    return String(s == null ? '' : s).toLowerCase()
      .replace(/[^a-z0-9\s']/g, ' ').replace(/\s+/g, ' ').trim();
  }

  function normalize(s) {
    return String(s || '').toLowerCase()
      .replace(/[.!?,;"']/g, '')
      .replace(/\bcan not\b/g, 'cannot')
      .replace(/\s+/g, ' ').trim();
  }

  function startTranslation(setId) {
    const out = document.getElementById('trOut');
    if (!out) return;
    const set = (EG.translationSets || []).filter(function (s) { return s.id === setId; })[0];
    if (!set) { out.innerHTML = ui.empty('Set kalimat tidak ditemukan.'); return; }

    const wrap = drillShell(out);
    wrap.innerHTML = '<h2 class="mt">' + esc(set.title) + ' <span class="sub">(' + esc(set.level) + ')</span></h2>' +
      set.items.map(function (it, i) {
        return '<div class="drill-in" data-tr="' + i + '">' +
          '<p class="q-text">' + esc(it.id) + '</p>' +
          '<label class="fld" for="trIn-' + i + '">Terjemahkan ke English</label>' +
          '<input type="text" id="trIn-' + i + '" data-tr-in="' + i + '" placeholder="Tulis kalimat English...">' +
          '<div class="btn-row"><button class="btn sm" data-tr-check="' + i + '">Periksa</button>' +
          '<button class="btn ghost sm" data-tr-show="' + i + '">Lihat contoh</button></div>' +
          '<div class="explain fix-answer" hidden></div>' +
          '</div>';
      }).join('');

    wrap.addEventListener('click', function (e) {
      const showBtn = e.target.closest('[data-tr-show]');
      const checkBtn = e.target.closest('[data-tr-check]');

      if (showBtn) {
        const i = Number(showBtn.dataset.trShow);
        const box = wrap.querySelector('[data-tr="' + i + '"]');
        const ex = box && box.querySelector('.explain');
        if (!ex) return;
        ex.hidden = false;
        ex.className = 'explain fix-answer';
        ex.innerHTML = '<b>Contoh:</b> <code>' + esc(set.items[i].en) + '</code><br>' +
          '<span class="tiny">Boleh juga ditulis dengan ejaan lain selama maknanya sama.</span>';
        return;
      }

      if (!checkBtn || checkBtn.disabled) return;
      const i = Number(checkBtn.dataset.trCheck);
      const box = wrap.querySelector('[data-tr="' + i + '"]');
      const input = wrap.querySelector('[data-tr-in="' + i + '"]');
      const it = set.items[i];
      if (!box || !input || !it) return;
      const ex = box.querySelector('.explain');

      const given = normalize(input.value);
      const options = (it.accept || []).map(normalize).concat([normalize(it.en)]);
      const ok = !!given && options.indexOf(given) > -1;

      ex.hidden = false;
      ex.className = 'explain fix-answer ' + (ok ? 'ok' : 'no');
      ex.innerHTML = (ok ? '<b>Benar.</b> ' : '<b>Contoh jawaban:</b> <code>' + esc(it.en) + '</code><br>') +
        '<span class="tiny">Jawaban lain dengan makna sama juga dianggap benar.</span>';
      markScore('translate', ok);
      checkBtn.disabled = true;
    });
  }

  /* ---------------- CONCEPT CHECK AUTOPSY ---------------- */
  function bindAutopsyChecks(root) {
    if (!root || root.__autopsyBound) return;
    root.__autopsyBound = true;
    root.addEventListener('click', function (e) {
      const btn = e.target.closest('[data-autopsy-pick]');
      if (!btn || !root.contains(btn)) return;
      const parts = btn.dataset.autopsyPick.split('-');
      const qEl = btn.closest('.q');
      if (!qEl || qEl.dataset.done === '1') return;
      qEl.dataset.done = '1';

      const pick = Number(parts[parts.length - 1]);
      const ans = Number(btn.dataset.ans);
      const ok = ans > -1 && pick === ans;

      Array.prototype.forEach.call(qEl.querySelectorAll('.opt'), function (b, j) {
        b.disabled = true;
        if (Number(b.dataset.ans) === ans) b.classList.add('correct');
        else if (j === pick) b.classList.add('wrong');
      });

      const ex = qEl.querySelector('.explain');
      const why = qEl.dataset.explain || '';
      ex.hidden = false;
      ex.className = 'explain ' + (ok ? 'ok' : 'no');
      ex.innerHTML = (ok ? '<b>Tepat.</b> ' : '<b>Belum tepat.</b> ') +
        (why ? esc(why) + '<br>' : '') +
        '<span class="tiny">Kalau sering salah di langkah yang sama, buka lagi materinya.</span>';
    });
  }

  EG.practice = {
    startMixedQuiz: startMixedQuiz,
    startCorrection: startCorrection,
    startTranslation: startTranslation,
    bindAutopsyChecks: bindAutopsyChecks,
    markScore: markScore
  };

})(window.EG);
