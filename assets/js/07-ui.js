/* =========================================================
   07-ui.js — komponen tampilan yang dipakai berulang
   ========================================================= */
(function (EG) {
  'use strict';

  const esc = EG.esc;

  function card(title, body, cls) {
    return '<section class="card ' + (cls || '') + '">' +
      (title ? '<h3>' + title + '</h3>' : '') + body + '</section>';
  }

  function label(text) {
    return '<div class="label">' + esc(text) + '</div>';
  }

  function pills(items) {
    return '<div class="pill-row">' + items.map(function (t, i) {
      const mod = ['gold', 'brick', 'blue', 'violet', 'ghost'][i % 5];
      return '<span class="pill ' + mod + '">' + esc(t) + '</span>';
    }).join('') + '</div>';
  }

  function levelBadge(level) {
    const map = { Dasar: '', Menengah: 'gold', Lanjut: 'brick' };
    return '<span class="pill ' + (map[level] || '') + '">' + esc(level || '') + '</span>';
  }

  function stepBadge(n) {
    return '<span class="step-no">' + n + '</span>';
  }

  function mark(text) {
    return esc(text).replace(/\*\*(.+?)\*\*/g, '<b>$1</b>');
  }

  function examples(items) {
    if (!items || !items.length) return '<p class="sub">Belum ada contoh.</p>';
    return items.map(function (ex) { return '<div class="ex">' + mark(ex) + '</div>'; }).join('');
  }

  function mistakes(items) {
    if (!items || !items.length) return '<p class="sub">Belum ada catatan kesalahan.</p>';
    return items.map(function (m) {
      return '<div class="mis">' +
        '<div><b class="w">Salah:</b> <s>' + esc(m.wrong) + '</s></div>' +
        '<div><b class="r">Benar:</b> ' + esc(m.right) + '</div>' +
        '<div class="tiny" style="margin-top:5px">' + esc(m.why) + '</div>' +
        '</div>';
    }).join('');
  }

  function whyNot(items) {
    if (!items || !items.length) return '<p class="sub">Tidak ada perbandingan tambahan.</p>';
    return items.map(function (w) {
      return '<div class="info"><b>' + esc(w.t) + '</b><br>' + esc(w.d) + '</div>';
    }).join('');
  }

  function formula(text) {
    if (!text) return '';
    return '<div class="formula">' + esc(text) + '</div>';
  }

  function progress(done, total, labelText) {
    const p = EG.pct(done, total);
    return '<div class="track"><div class="fill" style="width:' + p + '%"></div></div>' +
      '<div class="tiny sub">' + esc(labelText || (done + ' dari ' + total + ' materi sudah paham')) + '</div>';
  }

  function stats(items) {
    return '<div class="grid3">' + items.map(function (s) {
      return '<div class="stat"><b>' + esc(s.value) + '</b><span>' + esc(s.label) + '</span></div>';
    }).join('') + '</div>';
  }

  function anatomyTable(rows) {
    return '<table class="ana">' + rows.map(function (r) {
      return '<tr><td>' + esc(r[0]) + '</td><td>' + (r[2] ? r[1] : esc(r[1] || '—')) + '</td></tr>';
    }).join('') + '</table>';
  }

  /* Delapan huruf OSASCOMP (urutan kata sifat). Menerima `adjectiveOrder`
     dari materi, lalu menampilkannya satu per satu: huruf, nama, artinya,
     contoh kata sifatnya, dan kapan huruf itu dipakai. */
  function adjectiveOrder(items) {
    if (!items || !items.length) return '';
    const bar = items.map(function (it, i) {
      return '<button type="button" class="osa-k" id="osa-btn-' + i + '" data-osa="' + i +
        '" aria-expanded="false" aria-controls="osa-panel-' + i + '" title="' +
        esc(it.name + ' - ' + it.arti) + '">' + esc(it.k) + '</button>';
    }).join('<span class="osa-arrow" aria-hidden="true">&rarr;</span>');

    const rows = items.map(function (it, i) {
      return '<div class="osa-item" id="osa-panel-' + i + '" role="region" aria-labelledby="osa-btn-' + i + '" hidden>' +
        '<div class="osa-head"><span class="osa-letter">' + esc(it.k) + '</span>' +
        '<span class="osa-name">' + esc(it.name) + ' <span class="osa-arti">' + esc(it.arti) + '</span></span></div>' +
        '<p class="osa-what">' + esc(it.what) + '</p>' +
        '<div class="pill-row">' + (it.ex || []).map(function (w) {
          return '<span class="pill">' + esc(w) + '</span>';
        }).join('') + '</div>' +
        '<p class="osa-when"><b>Kapan dipakai:</b> ' + esc(it.when) + '</p>' +
        '</div>';
    }).join('');

    return '<p class="osa-hint">Ketuk hurufnya untuk melihat penjelasannya satu per satu.</p>' +
      '<div class="osa-bar" aria-label="urutan OSASCOMP">' + bar + '</div>' +
      '<div class="osa-panels">' + rows + '</div>';
  }

  /* Huruf O-S-A-S-C-O-M-P jadi tombol: yang diklik baru terbuka penjelasannya,
     jadi tidak perlu menggulir jauh. Accordion: satu huruf terbuka satu kali. */
  function bindOsa(root) {
    if (!root) return;
    const bar = root.querySelector ? root.querySelector('.osa-bar') : null;
    if (!bar || bar.getAttribute('data-osa-bound')) return;
    bar.setAttribute('data-osa-bound', '1');

    function panelOf(btn) {
      return root.querySelector('#osa-panel-' + btn.getAttribute('data-osa'));
    }
    function closeAll() {
      Array.prototype.forEach.call(bar.querySelectorAll('.osa-k'), function (b) {
        b.setAttribute('aria-expanded', 'false');
        const p = panelOf(b);
        if (p) p.hidden = true;
      });
    }
    function open(btn) {
      const p = panelOf(btn);
      if (!p) return;
      btn.setAttribute('aria-expanded', 'true');
      p.hidden = false;
    }

    bar.addEventListener('click', function (e) {
      const btn = e.target.closest ? e.target.closest('.osa-k') : null;
      if (!btn) return;
      const wasOpen = btn.getAttribute('aria-expanded') === 'true';
      closeAll();
      if (!wasOpen) open(btn);
    });
  }

  function noteBox(lessonId) {
    const val = (EG.state.notes && EG.state.notes[lessonId]) || '';
    return '<div class="note-box">' +
      '<label class="fld" for="note-' + esc(lessonId) + '">Catatan pribadi</label>' +
      '<textarea id="note-' + esc(lessonId) + '" data-note="' + esc(lessonId) + '" placeholder="Tulis catatanmu di sini...">' + esc(val) + '</textarea>' +
      '<div class="tiny sub mt">Tersimpan otomatis di perangkat ini.</div>' +
      '</div>';
  }

  function doneButton(lessonId) {
    const done = (EG.state.done || []).indexOf(lessonId) > -1;
    return '<button class="btn ' + (done ? 'soft' : '') + '" data-done="' + esc(lessonId) + '">' +
      (done ? 'Sudah paham (klik untuk batalkan)' : 'Tandai sudah paham') + '</button>';
  }

  function lessonRow(l) {
    const done = (EG.state.done || []).indexOf(l.id) > -1;
    const n = EG.lesson_number ? EG.lesson_number(l.id) : l.step;
    const st = (EG.steps || []).filter(function (s) { return s.n === l.step; })[0];
    const tip = st ? 'Langkah ' + st.n + ': ' + st.title : '';
    return '<button class="lesson" data-goto="#/lesson/' + encodeURIComponent(l.id) + '"' +
      (tip ? ' title="' + esc(tip) + '"' : '') + '>' +
      '<span class="step-no">' + (n === null ? '' : n) + '</span>' +
      '<span style="flex:1"><b>' + esc(l.title) + '</b>' +
      '<span class="sub">' + esc(l.cat) + '</span></span>' +
      (done ? '<span class="tick">Selesai</span>' : '<span class="tiny sub">Buka</span>') +
      '</button>';
  }

  function lessonCard(l) {
    const done = (EG.state.done || []).indexOf(l.id) > -1;
    return '<a class="lesson lcard' + (done ? ' done' : '') + '" href="#/lesson/' + encodeURIComponent(l.id) + '">' +
      '<span style="flex:1"><b>' + esc(l.title) + '</b>' +
      '<span class="sub">' + esc(l.hook || l.simple) + '</span></span>' +
      (done ? '<span class="tick">Selesai</span>' : '') + '</a>';
  }

  function empty(text) {
    return '<div class="card"><p class="sub">' + esc(text) + '</p></div>';
  }

  function backLink(hash, text) {
    return '<div class="back"><button class="link" data-goto="' + esc(hash) + '">← ' + esc(text) + '</button></div>';
  }

  function quizBlock(id, questions, opts) {
    const o = opts || {};
    return '<div class="quiz" data-quiz="' + esc(id) + '">' + questions.map(function (q, i) {
      return '<div class="q" data-q="' + i + '">' +
        '<p class="q-text"><b>' + (i + 1) + '.</b> ' + mark(q.q) + '</p>' +
        q.opts.map(function (op, j) {
          return '<button class="opt" data-pick="' + j + '">' + mark(op) + '</button>';
        }).join('') +
        '<div class="explain" hidden></div>' +
        '</div>';
    }).join('') +
      (o.checkAll ? '<div class="btn-row"><button class="btn" data-checkall="' + esc(id) + '">Periksa semua</button></div>' : '') +
      '</div>';
  }

  /* Dropdown daftar materi, dikelompokkan per level. */
  function lessonSelect(id, value, label) {
    const levels = EG.levelOrder || ['Dasar', 'Menengah', 'Lanjut'];
    const groups = levels.map(function (lv) {
      const list = (EG.lessons || []).filter(function (l) { return l.level === lv; });
      if (!list.length) return '';
      return '<optgroup label="' + esc(lv) + '">' + list.map(function (l) {
        return '<option value="' + esc(l.id) + '"' + (l.id === value ? ' selected' : '') + '>' +
          esc(l.title) + '</option>';
      }).join('') + '</optgroup>';
    }).join('');
    return '<label class="fld" for="' + esc(id) + '">' + esc(label) + '</label>' +
      '<select id="' + esc(id) + '">' + groups + '</select>';
  }

  /* Satu baris perbandingan: label di kiri, dua nilai berdampingan di kanan. */
  function compareRow(title, a, b) {
    function cell(v) {
      if (v === null || v === undefined || v === '') return '<span class="sub">—</span>';
      return v;
    }
    return '<div class="cmp-row">' +
      '<div class="cmp-key">' + esc(title) + '</div>' +
      '<div class="cmp-cell">' + cell(a) + '</div>' +
      '<div class="cmp-cell">' + cell(b) + '</div>' +
      '</div>';
  }

  EG.ui = {
    card: card,
    label: label,
    pills: pills,
    levelBadge: levelBadge,
    stepBadge: stepBadge,
    mark: mark,
    examples: examples,
    mistakes: mistakes,
    whyNot: whyNot,
    formula: formula,
    progress: progress,
    stats: stats,
    anatomyTable: anatomyTable,
    adjectiveOrder: adjectiveOrder,
    bindOsa: bindOsa,
    noteBox: noteBox,
    doneButton: doneButton,
    lessonRow: lessonRow,
    lessonCard: lessonCard,
    empty: empty,
    backLink: backLink,
    quizBlock: quizBlock,
    lessonSelect: lessonSelect,
    compareRow: compareRow
  };

})(window.EG);
