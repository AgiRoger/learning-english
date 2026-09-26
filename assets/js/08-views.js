/* =========================================================
   08-views.js — seluruh halaman aplikasi
   ========================================================= */
(function (EG) {
  'use strict';

  const esc = EG.esc;
  const ui = EG.ui;
  const L = function () {
    return EG.ordered_lessons ? EG.ordered_lessons() : (EG.lessons || []);
  };

  function byId(id) {
    return L().filter(function (l) { return l.id === id; })[0] || null;
  }

  function head(kicker, title, desc) {
    return '<div class="page-head"><span class="badge">' + esc(kicker) + '</span>' +
      '<h1>' + esc(title) + '</h1>' +
      (desc ? '<p class="lead">' + esc(desc) + '</p>' : '') + '</div>';
  }

  /* ================= HOME ================= */
  function home() {
    const done = (EG.state.done || []).length;
    const total = L().length;
    const a = EG.state.autopsy || { count: 0 };

    let html = head('Selamat datang', 'English Grammar',
      'Belajar grammar dari makna dan situasi, bukan dari hafalan tabel. Dimulai dari kalimat paling sederhana, berakhir di kalimat yang panjang dan berlapis.');

    html += '<div class="grid3">' +
      '<div class="stat"><b>' + EG.pct(done, total) + '%</b><span>materi selesai</span></div>' +
      '<div class="stat"><b>' + done + ' / ' + total + '</b><span>lesson ditandai paham</span></div>' +
      '<div class="stat"><b>' + (a.count || 0) + '</b><span>kalimat dibedah</span></div>' +
      '</div>';

    html += '<div class="card mt">' +
      '<h3>Mulai dari sini</h3>' +
      '<div class="btn-row">' +
      '<a class="btn" href="#/learn">Mulai belajar</a>' +
      '<a class="btn ghost" href="#/analyzer">Bedah sebuah kalimat</a>' +
      '<a class="btn soft" href="#/map">Lihat peta grammar</a>' +
      '</div></div>';

    html += '<h2 class="mt">Cara belajar di sini</h2>';
    html += '<div class="grid2">' +
      stepCard(1, 'Mulai dari makna', 'Tiap materi dibuka dengan arti dan contoh nyata, bukan definisi teknis.') +
      stepCard(2, 'Lihat situasinya', 'Kamu sampai tahu kapan bentuk itu dipakai, bukan hanya kapan tidak boleh dipakai.') +
      stepCard(3, 'Pahami alasannya', 'Kenapa bentuk itu muncul? Alasan yang paham lebih tahan lama daripada aturan yang dihafal.') +
      stepCard(4, 'Uji dengan kalimatmu', 'Latihan di setiap materi, plus Grammar Autopsy untuk kalimat yang kamu temui sendiri.') +
      '</div>';

    html += '<h2 class="mt">Materi yang paling sering dibuka</h2>';
    const starters = ['sentence', 'subject', 'verb', 'tense-p-simple', 'tense-past-simple', 'tense-p-perfect'];
    html += '<div class="lesson-list">' + starters.map(function (id) {
      const l = byId(id);
      return l ? ui.lessonRow(l) : '';
    }).join('') + '</div>';

    html += '<div class="card mt"><h3>Latihan mandiri</h3>' +
      '<p class="sub">Kalau mau latihan tanpa baca materi dulu, kerjakan tiga drill ini. Semuanya langsung memberi pembahasan.</p>' +
      '<div class="btn-row">' +
      '<a class="btn" href="#/quiz">Quiz campuran</a>' +
      '<a class="btn ghost" href="#/correction">Koreksi kesalahan</a>' +
      '<a class="btn soft" href="#/translation">Terjemahkan ke English</a>' +
      '</div></div>';

    return html;
  }

  function stepCard(n, title, desc) {
    return '<div class="card"><span class="step-no">' + n + '</span>' +
      '<h3 class="mt">' + esc(title) + '</h3><p class="sub">' + esc(desc) + '</p></div>';
  }

  /* ================= DAFTAR MATERI ================= */
  function learn(params) {
    const level = params.level || '';
    const step = params.step ? Number(params.step) : 0;
    const q = (params.q || '').toLowerCase();

    let list = L();
    if (level) list = list.filter(function (l) { return l.level === level; });
    if (step) list = list.filter(function (l) { return l.step === step; });
    if (q) {
      list = list.filter(function (l) {
        return (l.title + ' ' + l.cat + ' ' + l.simple + ' ' + (l.hook || '')).toLowerCase().indexOf(q) > -1;
      });
    }

    let html = head('Pustaka', 'Semua materi',
      'Ada ' + L().length + ' materi. Pilih yang paling sesuai dengan tahapmu sekarang, tidak harus berurutan.');

    html += '<div class="tabs" id="filterTabs">' +
      filterTab('#/learn', !level && !step && !q, 'Semua') +
      (EG.levelOrder || ['Dasar', 'Menengah', 'Lanjut']).map(function (lv) {
        return filterTab('#/learn?level=' + encodeURIComponent(lv), level === lv, lv);
      }).join('') +
      '</div>';

    html += '<div class="tabs" id="stepTabs">' +
      '<a class="tab' + (step ? '' : ' active') + '" href="#/learn">Semua langkah</a>' +
      (EG.steps || []).map(function (s) {
        return '<a class="tab' + (step === s.n ? ' active' : '') + '" href="#/step/' + s.n + '">' + s.n + '. ' + esc(s.title) + '</a>';
      }).join('') + '</div>';

    if (q) html += '<div class="info">Hasil pencarian untuk <b>' + esc(params.q) + '</b>: ' + list.length + ' materi.</div>';

    if (!list.length) return html + ui.empty('Tidak ada materi yang cocok. Coba kata kunci lain.');

    const groups = {};
    list.forEach(function (l) { (groups[l.level] = groups[l.level] || []).push(l); });

    html += (EG.levelOrder || ['Dasar', 'Menengah', 'Lanjut']).map(function (lv) {
      if (!groups[lv]) return '';
      const doneLv = groups[lv].filter(function (l) { return (EG.state.done || []).indexOf(l.id) > -1; }).length;
      const first = EG.lesson_number ? EG.lesson_number(groups[lv][0].id) : null;
      const lastL = groups[lv][groups[lv].length - 1];
      const lastNo = EG.lesson_number ? EG.lesson_number(lastL.id) : null;
      const range = first !== null && lastNo !== null
        ? ' <span class="sub">materi ' + first + (lastNo !== first ? '-' + lastNo : '') + '</span>' : '';

      /* pecah per langkah supaya urutan belajarnya kelihatan */
      let rows = '';
      let curStep = null;
      groups[lv].forEach(function (l) {
        if (l.step !== curStep) {
          curStep = l.step;
          const st = (EG.steps || []).filter(function (s) { return s.n === curStep; })[0];
          rows += '<h3 class="sub-head">Langkah ' + curStep +
            (st ? ' — ' + esc(st.title) : '') + '</h3>';
        }
        rows += ui.lessonRow(l);
      });

      return '<h2 class="mt">' + esc(lv) + range +
        ' <span class="sub">(' + doneLv + '/' + groups[lv].length + ')</span></h2>' +
        '<div class="lesson-list">' + rows + '</div>';
    }).join('');

    return html;
  }

  function filterTab(href, active, label) {
    return '<a class="tab' + (active ? ' active' : '') + '" href="' + esc(href) + '">' + esc(label) + '</a>';
  }

  function stepPage(n) {
    const s = (EG.steps || []).filter(function (x) { return x.n === Number(n); })[0];
    if (!s) return head('Peta', 'Langkah tidak ditemukan') + ui.empty('Nomor langkah itu tidak ada.');
    const list = L().filter(function (l) { return l.step === s.n; });
    const doneN = list.filter(function (l) { return (EG.state.done || []).indexOf(l.id) > -1; }).length;
    return head('Langkah ' + s.n, s.title, s.desc) +
      ui.progress(doneN, list.length) +
      '<div class="lesson-list mt">' + list.map(ui.lessonRow).join('') + '</div>';
  }

  /* ================= DETAIL LESSON ================= */
  function lesson(id) {
    const l = byId(id);
    if (!l) return head('Materi', 'Tidak ditemukan') + ui.empty('Materi "' + esc(id) + '" tidak ada di daftar.');

    const idx = L().indexOf(l);
    const prev = L()[idx - 1];
    const next = L()[idx + 1];
    const s = (EG.steps || []).filter(function (x) { return x.n === l.step; })[0];
    const isDone = (EG.state.done || []).indexOf(l.id) > -1;

    let html = '<div class="back">' + (s ? '<a class="link" href="#/step/' + s.n + '">← Langkah ' + s.n + ': ' + esc(s.title) + '</a>' : '') + '</div>';

    html += head((l.level || '') + ' · ' + (l.cat || ''), l.title, l.hook);

    html += '<div class="info"><b>Dipakai untuk:</b> ' + esc(l.simple) + '</div>';

    html += ui.card('Kalau bingung dulu', '<div class="puzzle"><p class="puzzle-q">' +
      esc(l.eli10) + '</p><p class="sub">Penjelasan paling sederhana dulu, baru kalimat aslinya di bawah.</p></div>', 'accent');

    html += ui.card('Artinya', '<p>' + esc(l.meaning) + '</p>');
    html += ui.card('Kapan dipakai', '<p>' + esc(l.when) + '</p>');
    html += ui.card('Kenapa begini', '<p>' + esc(l.why) + '</p>');
    html += ui.card('Bandingkan dulu', ui.whyNot(l.whyNot));
    html += ui.card('Polanya', ui.formula(l.formula));
    if (l.adjective_order && l.adjective_order.length) {
      html += ui.card('Huruf per huruf', ui.adjectiveOrder(l.adjective_order), 'accent');
    }
    html += ui.card('Contoh kalimat', ui.examples(l.examples));
    html += ui.card('Kesalahan yang sering terjadi', ui.mistakes(l.mistakes));
    if (l.clues && l.clues.length) {
      html += ui.card('Petunjuk cepat', '<ul class="clues">' + l.clues.map(function (c) {
        return '<li>' + esc(c) + '</li>';
      }).join('') + '</ul>');
    }
    html += ui.card('Catatanmu', ui.noteBox(l.id));
    if (l.tips) html += ui.card('Tips', '<p>' + esc(l.tips) + '</p>');

    html += '<h2 class="mt">Latihan</h2>';
    html += ui.quizBlock(l.id, l.practice, { checkAll: true });

    html += '<div class="card mt"><div class="btn-row">' +
      ui.doneButton(l.id) +
      (prev ? '<a class="btn ghost" href="#/lesson/' + encodeURIComponent(prev.id) + '">← ' + esc(prev.title) + '</a>' : '') +
      (next ? '<a class="btn soft" href="#/lesson/' + encodeURIComponent(next.id) + '">' + esc(next.title) + ' →</a>' : '') +
      '</div>' + (isDone ? '<p class="tiny sub mt">Kamu sudah menandai materi ini paham.</p>' : '') + '</div>';

    return html;
  }

  /* ================= PETA GRAMMAR ================= */
  function mapPage() {
    let html = head('Peta', 'Grammar Map',
      'Semua yang sudah dipelajari dalam satu halaman. Pakai ini untuk mencari cepat, bukan untuk dihafal.');

    html += '<div class="tabs"><a class="tab active" href="#/map">Ringkasan</a>' +
      '<a class="tab" href="#/analyzer">Grammar Autopsy</a></div>';

    html += '<h2>12 tense</h2><div class="gmap">' + esc(
      'TIME          = PAST | NOW | FUTURE          ×         ASPECT = Simple | Continuous | Perfect | Perfect Continuous\n' +
      '---------------------------------------------------------------------------------------------------------------\n' +
      '               Simple              Continuous              Perfect                    Perfect Continuous\n' +
      '               ---------------     ---------------------   ------------------------   --------------------------\n' +
      'PAST          V2                   was / were + V-ing       had + V3                    had been + V-ing\n' +
      'NOW           V1 / am-is-are +V-ing have / has + V3        have / has + been + V-ing\n' +
      'FUTURE        will + V1            will be + V-ing          will have + V3              will have been + V-ing\n' +
      '---------------------------------------------------------------------------------------------------------------\n' +
      'Pilih tense = (1) waktu, lalu (2) sedang berjalan atau sudah selesai.') + '</div>';

    html += '<h2 class="mt">Pola dasar kalimat</h2><div class="gmap">' + esc(
      'S + V                  "She smiled."\n' +
      'S + V + O              "She bought a book."\n' +
      'S + V + C              "She is a doctor."      (C = pelengkap, muncul setelah linking verb)\n' +
      'S + V + O + C          "They elected him captain."\n' +
      'S + V + Phrase         "She read a book" + "at the market".\n' +
      'S + V + Klausa         "I stayed home" + "because it rained."\n' +
      '\n' +
      'Urutan O-S-A-S-C-O-M-P = mnemonic, bukan hukum. "Here comes the bus" tidak ikut aturan ini.') + '</div>';

    html += '<h2 class="mt">Tanda tangan tiap tense</h2>';
    html += '<p class="sub">Urut dari yang paling sering dipakai. Barisnya sama dengan urutan materi di Pustaka.</p>';
    html += '<table class="tbl"><tr><th>Tanda tangan di kalimat</th><th>Artinya</th></tr>' +
      [
        ['V1 / V2 + -s', 'Present Simple — kebiasaan, jadwal, atau fakta umum'],
        ['am / is / are + V-ing', 'Present Continuous — sedang terjadi sekarang'],
        ['have / has + V3', 'Present Perfect — sudah terjadi, hubungannya dengan sekarang masih penting'],
        ['have / has + been + V-ing', 'Present Perfect Continuous — sudah berlangsung dari masa lalu sampai sekarang'],
        ['V2', 'Past Simple — sudah selesai, dan waktunya disebut'],
        ['was / were + V-ing', 'Past Continuous — sedang terjadi di masa lalu'],
        ['had + V3', 'Past Perfect — sudah terjadi sebelum kejadian lain di masa lalu'],
        ['had / been + V-ing', 'Past Perfect Continuous — sudah berlangsung sebelum titik waktu lain'],
        ['will + V1', 'Future Simple (will) — rencana, tebakan, atau keputusan saat itu juga'],
        ['will be + V-ing', 'Future Continuous — sedang berjalan pada waktu tertentu di masa depan'],
        ['will have + V3', 'Future Perfect — sudah selesai sebelum waktu tertentu di masa depan'],
        ['be + V3 (+ by)', 'pasif — pelaku tidak penting'],
        ['modal (can, should, must)', 'sikap pembicara — bisa, saran, atau kewajiban']
      ].map(function (r) {
        return '<tr><td><code>' + esc(r[0]) + '</code></td><td>' + esc(r[1]) + '</td></tr>';
      }).join('') + '</table>';

    html += '<h2 class="mt">Semua langkah</h2><div class="timeline">' +
      (EG.steps || []).map(function (s) {
        const n = L().filter(function (l) { return l.step === s.n; }).length;
        const dn = L().filter(function (l) { return l.step === s.n && (EG.state.done || []).indexOf(l.id) > -1; }).length;
        return '<a class="tl-item' + (dn === n && n ? ' done' : '') + '" href="#/step/' + s.n + '" data-n="' + s.n + '">' +
          '<b>' + esc(s.title) + '</b><p class="sub">' + esc(s.desc) + '</p>' +
          '<p class="tiny">' + dn + ' / ' + n + ' selesai</p></a>';
      }).join('') + '</div>';

    return html;
  }

  /* ================= COMPARE ================= */
  const TENSE_IDS = ['tense-p-simple', 'tense-p-cont', 'tense-past-simple', 'tense-fut-simple',
    'tense-p-perfect', 'tense-past-perfect', 'tense-fut-perfect'];

  function comparePage(params) {
    const lessons = EG.lessons || [];
    const byId = function (id) { return lessons.filter(function (l) { return l.id === id; })[0]; };
    const presets = EG.comparePresets || [];
    const active = params.id ? presets.filter(function (p) { return p.id === params.id; })[0] : null;

    let html = head('Perbandingan', 'Compare',
      'Pilih sendiri dua materi apa pun, lalu lihat bedanya berdampingan. Preset di bawah hanya contoh pasangan yang sering tertukar.');

    /* ---------- PEMILIH BEBAS ---------- */
    const tenses = lessons.filter(function (l) { return TENSE_IDS.indexOf(l.id) > -1; });
    const fallbackA = (tenses[0] && tenses[0].id) || (lessons[0] && lessons[0].id);
    const fallbackB = (tenses[1] && tenses[1].id) || (lessons[1] && lessons[1].id);
    const presetPair = active ? pairIds(active) : null;
    const aId = byId(params.a) ? params.a : (presetPair ? presetPair[0] : fallbackA);
    const bId = byId(params.b) ? params.b : (presetPair ? presetPair[1] : fallbackB);
    const A = byId(aId);
    const B = byId(bId);

    html += ui.card('Pilih dua materi untuk dibandingkan',
      '<div class="grid2">' +
      ui.lessonSelect('cmpA', aId, 'Materi kiri') +
      ui.lessonSelect('cmpB', bId, 'Materi kanan') +
      '</div>' +
      '<div class="btn-row">' +
      '<button class="btn soft" data-cmp-swap>Tukar posisi</button>' +
      '</div>' +
      '<p class="tiny sub mt">Pilihan disimpan di alamat halaman, jadi bisa dibagikan atau ditandai.</p>' +
      '<div id="cmpOut"></div>');

    if (A && B) {
      html += '<div class="cmp-head">' +
        '<div class="cmp-head-cell">' + ui.levelBadge(A.level) + '<h3>' + esc(A.title) + '</h3>' +
        '<a class="link" href="#/lesson/' + encodeURIComponent(A.id) + '">Buka materi ini →</a></div>' +
        '<div class="cmp-head-cell">' + ui.levelBadge(B.level) + '<h3>' + esc(B.title) + '</h3>' +
        '<a class="link" href="#/lesson/' + encodeURIComponent(B.id) + '">Buka materi ini →</a></div>' +
        '</div>';

      html += '<div class="cmp-table">' +
        ui.compareRow('Artinya', '<p>' + esc(A.meaning) + '</p>', '<p>' + esc(B.meaning) + '</p>') +
        ui.compareRow('Dipakai untuk', '<p>' + esc(A.simple) + '</p>', '<p>' + esc(B.simple) + '</p>') +
        ui.compareRow('Kapan dipakai', '<p>' + esc(A.when) + '</p>', '<p>' + esc(B.when) + '</p>') +
        ui.compareRow('Polanya', ui.formula(A.formula), ui.formula(B.formula)) +
        ui.compareRow('Tanda kota', '<div class="pill-row">' + ui.pills(A.clues || [], 'ghost') + '</div>',
          '<div class="pill-row">' + ui.pills(B.clues || [], 'ghost') + '</div>') +
        ui.compareRow('Contoh',
          '<div class="ex plain">' + esc((A.examples || [])[0] || '') + '</div>',
          '<div class="ex plain">' + esc((B.examples || [])[0] || '') + '</div>') +
        ui.compareRow('Salah yang sering',
          ui.mistakes((A.mistakes || []).slice(0, 2)),
          ui.mistakes((B.mistakes || []).slice(0, 2))) +
        '</div>';

      /* "Kenapa bukan yang lain" — memakai whyNot yang saling menunjuk, kalau ada. */
      const aNotB = (A.whyNot || []).filter(function (w) { return w.title === B.title; })[0];
      const bNotA = (B.whyNot || []).filter(function (w) { return w.title === A.title; })[0];
      const pair = aNotB || bNotA;
      html += ui.card('Kenapa bukan yang lain', pair
        ? '<p>' + esc(pair.text) + '</p>'
        : '<p class="sub">Tidak ada catatan khusus untuk pasangan ini. Bandingkan baris <b>Artinya</b>, ' +
          '<b>Dipakai untuk</b>, dan <b>Polanya</b> di atas — biasanya di situ bedanya clearest.</p>');

      if (A.id === B.id) {
        html += '<div class="mis">Keduanya sama. Pilih dua materi yang berbeda agar perbandingannya berarti.</div>';
      }
    } else {
      html += ui.empty('Materi yang dipilih tidak ditemukan.');
    }

    /* ---------- PRESET ---------- */
    if (presets.length) {
      html += '<h2 class="mt">Pasangan yang sering tertukar</h2>' +
        '<p class="sub">Preset di bawah sudah disiapkan. Pilih salah satu, lalu tetap bisa adjusts di dropdown.</p>' +
        '<div class="tabs">' + presets.map(function (p) {
          return '<a class="tab' + (active && p.id === active.id ? ' active' : '') +
            '" href="#/compare?id=' + encodeURIComponent(p.id) + '">' + esc(p.title.split(':')[0]) + '</a>';
        }).join('') + '</div>';

      if (active) {
        const cells = [active.a, active.b, active.c].filter(Boolean);
        html += '<h2>' + esc(active.title) + '</h2>' +
          '<div class="grid' + (cells.length === 3 ? '3' : '2') + '">' + cells.map(function (c) {
            return '<div class="card"><h3>' + esc(c.label) + '</h3>' +
              '<p class="ex">' + esc(c.text) + '</p>' +
              '<p class="sub">' + esc(c.note) + '</p></div>';
          }).join('') + '</div>';
        if (active.tip) html += '<div class="info"><b>Cara memilih:</b> ' + esc(active.tip) + '</div>';
      }
    }

    return html;
  }

  /* Pasangan id materi dari sebuah preset, untuk tautan preset. */
  function pairIds(p) {
    const known = (EG.lessons || []).map(function (l) { return l.id; });
    const ids = (p.pair || []).filter(function (id) { return known.indexOf(id) > -1; });
    if (ids.length >= 2) return [ids[0], ids[1]];
    return [TENSE_IDS[0], TENSE_IDS[3]];
  }

  /* ================= REAL LIFE ================= */
  function realLifePage(params) {
    const list = EG.realLife || [];
    const active = params.id ? list.filter(function (x) { return x.id === params.id; })[0] : null;

    let html = head('Situasi nyata', 'Real Life',
      'Grammar yang dipakai untuk hal yang benar-benar terjadi: restoran, kantor, rumah sakit, perjalanan.');

    if (!active) {
      html += '<div class="grid2">' + list.map(function (s) {
        return '<a class="card lcard" href="#/reallife?id=' + encodeURIComponent(s.id) + '">' +
          '<h3>' + esc(s.icon) + ' ' + esc(s.title) + '</h3>' +
          '<p class="sub">' + esc(s.goal) + '</p>' +
          '<div class="pill-row"><span class="pill">' + s.say.length + ' frasa</span></div>' +
          '</a>';
      }).join('') + '</div>';
      return html;
    }

    html += '<div class="back"><a class="link" href="#/reallife">← Semua situasi</a></div>';
    html += head(active.icon, active.title, active.goal);

    html += ui.card('Frasa yang sering dipakai', '<table class="tbl">' +
      '<tr><th>English</th><th>Artinya</th></tr>' +
      active.say.map(function (r) {
        return '<tr><td><code>' + esc(r.en) + '</code></td><td>' + esc(r.id) + '</td></tr>';
      }).join('') + '</table>');

    if (active.listen) html += ui.card('Dengarkan pakai kata kunci', '<p>' + esc(active.listen) + '</p>');
    if (active.tip) html += ui.card('Tips', '<p>' + esc(active.tip) + '</p>');

    return html;
  }

  /* ================= GRAMMAR AUTOPSY ================= */
  function analyzerPage() {
    const last = (EG.state.autopsy || {}).last || '';
    let html = head('Alat', 'Grammar Autopsy',
      'Tempel satu kalimat, lalu lihat isinya dari luar ke dalam: tipe kalimat, klausa, anatomi, frasa, bentuk kata kerja, dan jenis kata.');

    html += '<div class="card">' +
      '<label class="fld" for="autopsyInput">Kalimat bahasa Inggris</label>' +
      '<textarea id="autopsyInput" rows="3" placeholder="Contoh: Because it was raining, we stayed home.">' + esc(last) + '</textarea>' +
      '<div class="btn-row"><button class="btn" id="autopsyRun">Bedah kalimat</button>' +
      '<button class="btn ghost" id="autopsySample">Contoh kalimat</button></div>' +
      '<p class="tiny sub mt">Alat ini membantu, bukan pengganti penilaian guru. Ada kalimat yang terlalu khusus untuk dibaca aturan.</p>' +
      '</div>';

    html += '<div id="autopsyOut">' + (last ? renderAutopsy(EG.analyze(last)) : '') + '</div>';

    html += '<h2 class="mt">Contoh kalimat siap dicoba</h2>' +
      '<div class="lesson-list">' + (EG.autopsySamples || []).map(function (s) {
        return '<button class="lesson" data-sample="' + esc(s) + '"><span style="flex:1"><b>' + esc(s) + '</b>' +
          '<span class="sub">klik untuk bedah</span></span></button>';
      }).join('') + '</div>';

    html += '<h2 class="mt">Langkah membedah kalimat</h2>' +
      '<div class="grid2">' + [
        ['1. Tipe kalimat', 'Pernyataan, tanya, negatif, perintah, atau kalimat-seru.'],
        ['2. Klausa', 'Hitung klausa, lalu tentukan mana yang bisa berdiri sendiri.'],
        ['3. Anatomi', 'Subjek, kata kerja, objek atau pelengkap, keterangan.'],
        ['4. Frasa', 'Kelompok kata yang punya satu tugas: prepositional phrase, gerund, infinitive.'],
        ['5. Bentuk kata kerja', 'V1, V2, V3, atau -ing, lalu cocokkan dengan tense-nya.'],
        ['6. Jenis kata', 'Kata benda, kata kerja, kata sifat, kata keterangan, preposisi, konjungsi.']
      ].map(function (r) {
        return '<div class="card"><h3>' + esc(r[0]) + '</h3><p class="sub">' + esc(r[1]) + '</p></div>';
      }).join('') + '</div>';

    return html;
  }

  function renderAutopsy(res) {
    if (!res) return ui.empty('Belum ada hasil analisis.');
    if (res.error) return ui.empty(res.error);
    if (!res.sentences.length) return ui.empty('Belum ada kalimat untuk dianalisis.');

    return res.sentences.map(function (s, n) {
      let h = '<div class="card"><h3>Kalimat ' + (res.sentences.length > 1 ? n + 1 : '') + '</h3>';
      h += '<p class="ex">' + esc(s.sentence) + '</p>';

      /* 1 tipe kalimat */
      h += ui.label('1. Tipe kalimat');
      h += '<p><b>' + esc(s.type.label) + '</b><br><span class="sub">' + esc(s.type.why) + '</span></p>';

      /* 2 klausa */
      h += ui.label('2. Klausa');
      h += '<p class="sub">Ada ' + s.clauseCount + ' klausa: ' + s.independentCount +
        ' mandiri, ' + s.dependentCount + ' bergantung.</p>';
      h += s.clauses.map(function (c, i) {
        return '<div class="clause-box ' + (c.kind === 'main' ? 'ind' : 'dep') + '">' +
          '<div class="ctag">Klausa ' + (i + 1) + ' · ' + (c.kind === 'main' ? 'mandiri' : 'bergantung') +
          (c.connector ? ' · dimulai dengan "' + esc(c.connector) + '"' : '') + '</div>' +
          '<p><b>' + esc(c.words.join(' ')) + '</b></p>' +
          (c.reason ? '<p class="tiny sub">' + esc(c.reason) + '</p>' : '') +
          ui.anatomyTable([
            ['Subjek', c.subject || '—'],
            ['Kata kerja', c.verb || '—'],
            ['Objek', c.object || '—'],
            ['Pelengkap', c.complement || '—'],
            ['Keterangan', (c.adjuncts || []).join(' ') || '—'],
            ['Tense', c.tense ? esc(c.tense.label) + ' (' + esc(c.tense.form) + ')' : '—', true]
          ]) +
          '</div>';
      }).join('');

      if (s.conditional) {
        h += '<div class="info"><b>Conditional:</b> ' + esc(s.conditional.label) + ' — ' + esc(s.conditional.why) + '</div>';
      }

      /* 4 frasa */
      h += ui.label('3. Frasa di dalamnya');
      h += s.phrases.length
        ? s.phrases.map(function (p) {
            return '<span class="phrase-chip"><span class="pc-body">' + esc(p.text) + '</span>' +
              '<span class="pc-tag">' + esc(p.type) + ' — ' + esc(p.role) + '</span></span>';
          }).join('')
        : '<p class="sub">Tidak ada frasa terpisah yang terdeteksi.</p>';

      /* 5 bentuk verb */
      h += ui.label('4. Bentuk kata kerja');
      const vforms = (s.clauses || []).filter(function (c) { return c.verb; }).map(function (c) {
        return { v: c.verb, base: c.mainVerb, form: (c.tense && c.tense.form) || '' };
      });
      h += vforms.length
        ? '<table class="vform-table"><tr><th>Di kalimat</th><th>Bentuk dasar</th><th>Forms</th></tr>' +
          vforms.map(function (v) {
            return '<tr><td><code>' + esc(v.v) + '</code></td><td><code>' + esc(v.base) + '</code></td><td>' + esc(v.form) + '</td></tr>';
          }).join('') + '</table>'
        : '<p class="sub">Tidak ada kata kerja yang terdeteksi.</p>';

      /* 6 jenis kata */
      h += ui.label('5. Jenis kata');
      h += '<div>' + s.tags.map(function (t) {
        return '<span class="tok t-' + esc(String(t.tag).split(' ')[0]) + '">' + esc(t.raw) +
          '<small>' + esc(t.tag) + '</small></span>';
      }).join('') + '</div>';

      h += '<details class="acc mt"><summary class="acc-head">Kenapa kata ini masuk kategori itu?</summary>' +
        '<div class="acc-body">' + s.tags.map(function (t) {
          return '<p class="tiny"><b>' + esc(t.raw) + '</b> — ' + esc(t.why) + '</p>';
        }).join('') + '</div></details>';

      /* peringatan */
      if (s.warnings && s.warnings.length) {
        h += ui.label('Yang perlu dicek');
        h += s.warnings.map(function (w) { return '<div class="mis">' + esc(w) + '</div>'; }).join('');
      }

      /* concept check */
      h += ui.label('Coba jawab sendiri dulu');
      h += (s.questions || []).map(function (q, i) {
        return '<div class="q" data-autopsy-q="' + n + '-' + i + '" data-explain="' + esc(q.hidden || '') + '">' +
          '<p class="q-text"><b>' + (i + 1) + '.</b> ' + esc(q.q) + '</p>' +
          q.opts.map(function (o, j) {
            return '<button class="opt" data-autopsy-pick="' + n + '-' + i + '-' + j + '" data-ans="' + q.ans + '">' + esc(o) + '</button>';
          }).join('') +
          '<div class="explain" hidden></div></div>';
      }).join('');

      h += '</div>';
      return h;
    }).join('');
  }

  /* ================= MISTAKES LIBRARY ================= */
  function mistakesPage() {
    let html = head('Kamus', 'Kesalahan yang sering terjadi',
      'Semua kesalahan dari 65 materi dikumpulkan di sini. Baca yang mirip dengan kalimatmu sendiri.');

    (EG.levelOrder || ['Dasar', 'Menengah', 'Lanjut']).forEach(function (lv) {
      const list = L().filter(function (l) { return l.level === lv && l.mistakes && l.mistakes.length; });
      if (!list.length) return;
      html += '<h2 class="mt">' + esc(lv) + '</h2>';
      list.forEach(function (l) {
        html += '<details class="acc"><summary class="acc-head">' + esc(l.title) + ' <span class="arrow">›</span></summary>' +
          '<div class="acc-body">' + ui.mistakes(l.mistakes) +
          '<a class="link" href="#/lesson/' + encodeURIComponent(l.id) + '">Buka materi ini →</a></div></details>';
      });
    });

    return html;
  }

  /* ================= QUIZ / DRILL HALAMAN ================= */
  function quizPage() {
    const bank = EG.quizBank || [];
    const done = (EG.state.quiz || {}).answered || 0;
    let html = head('Latihan', 'Quiz campuran', 'Soal diambil dari seluruh materi, diacak tiap kali.');

    html += ui.stats([
      { value: (EG.state.quiz || {}).score || 0, label: 'benar' },
      { value: done, label: 'dijawab' },
      { value: (EG.state.quiz || {}).best || 0, label: 'skor terbaik' }
    ]);

    html += '<div class="card mt"><h3>Mulai</h3>' +
      '<p class="sub">10 soal acak dari ' + bank.length + ' soal yang tersedia.</p>' +
      '<div class="btn-row"><button class="btn" id="mixedStart">Mulai quiz 10 soal</button>' +
      '<a class="btn ghost" href="#/correction">Koreksi kesalahan</a>' +
      '<a class="btn soft" href="#/translation">Terjemahkan</a></div></div>';

    html += '<div id="quizOut"></div>';
    return html;
  }

  function correctionPage() {
    const sets = EG.correctionSets || [];
    const done = (EG.state.fix || {}).answered || 0;
    let html = head('Latihan', 'Koreksi kesalahan',
      'Kalimatnya salah. Temukan salahnya, lalu baca versi yang benar dan alasannya.');

    html += ui.stats([
      { value: (EG.state.fix || {}).score || 0, label: 'benar' },
      { value: done, label: 'dijawab' },
      { value: sets.length, label: 'set soal' }
    ]);

    html += '<div class="card mt"><div class="btn-row">' + sets.map(function (s) {
      return '<button class="btn ghost" data-fix-set="' + esc(s.id) + '">' + esc(s.level) + ' — ' + esc(s.title) + '</button>';
    }).join('') + '</div></div>';

    html += '<div id="fixOut"></div>';
    return html;
  }

  function translationPage() {
    const sets = EG.translationSets || [];
    const done = (EG.state.translate || {}).answered || 0;
    let html = head('Latihan', 'Terjemahkan ke English',
      'Kalimat Indonesia diberikan, kamu tulis versi English-nya. Bandingkan juga dengan frasa lain yang sama maknanya.');

    html += ui.stats([
      { value: (EG.state.translate || {}).score || 0, label: 'benar' },
      { value: done, label: 'dijawab' },
      { value: sets.reduce(function (a, s) { return a + s.items.length; }, 0), label: 'kalimat' }
    ]);

    html += '<div class="card mt"><div class="btn-row">' + sets.map(function (s) {
      return '<button class="btn ghost" data-tr-set="' + esc(s.id) + '">' + esc(s.level) + ' — ' + esc(s.title) + '</button>';
    }).join('') + '</div></div>';

    html += '<div id="trOut"></div>';
    return html;
  }

  /* ================= PENGATURAN ================= */
  function settingsPage() {
    const s = EG.state.settings || {};
    let html = head('Pengaturan', 'Pengaturan', 'Semua progres disimpan di perangkat ini saja, tidak dikirim ke mana pun.');

    html += '<div class="card"><h3>Tampilan</h3>' +
      '<label class="fld" for="setTheme">Tema</label>' +
      '<select id="setTheme">' +
      ['auto', 'light', 'dark'].map(function (t) {
        return '<option value="' + t + '"' + (s.theme === t ? ' selected' : '') + '>' +
          (t === 'auto' ? 'Otomatis mengikuti sistem' : t === 'light' ? 'Terang' : 'Gelap') + '</option>';
      }).join('') + '</select>' +
      '<label class="fld" for="setFont">Ukuran teks</label>' +
      '<select id="setFont">' + [['sm', 'Kecil'], ['md', 'Sedang'], ['lg', 'Besar'], ['xl', 'Sangat besar']].map(function (p) {
        return '<option value="' + p[0] + '"' + (s.fontSize === p[0] ? ' selected' : '') + '>' + p[1] + '</option>';
      }).join('') + '</select>' +
      '<div class="btn-row"><button class="btn" id="setSave">Simpan</button></div></div>';

    html += '<div class="card"><h3>Progres</h3>' +
      '<p class="sub">Materi selesai: <b>' + (EG.state.done || []).length + ' / ' + L().length + '</b></p>' +
      '<p class="sub">Catatan tersimpan: <b>' + Object.keys(EG.state.notes || {}).length + '</b></p>' +
      '<p class="sub">Kalimat dibedah: <b>' + ((EG.state.autopsy || {}).count || 0) + '</b></p>' +
      '<div class="btn-row"><button class="btn danger" id="setReset">Hapus semua progres</button></div>' +
      '<p class="tiny sub mt">Tindakan ini tidak bisa dibatalkan.</p></div>';

    return html;
  }

  /* ================= 404 ================= */
  function notFound(hash) {
    return head('Halaman', 'Tidak ditemukan', 'Alamat yang kamu buka tidak ada: ' + hash) +
      '<div class="btn-row"><a class="btn" href="#/">Kembali ke beranda</a></div>';
  }

  EG.views = {
    home: home,
    learn: learn,
    stepPage: stepPage,
    lesson: lesson,
    mapPage: mapPage,
    comparePage: comparePage,
    realLifePage: realLifePage,
    analyzerPage: analyzerPage,
    mistakesPage: mistakesPage,
    quizPage: quizPage,
    correctionPage: correctionPage,
    translationPage: translationPage,
    settingsPage: settingsPage,
    notFound: notFound,
    renderAutopsy: renderAutopsy
  };

})(window.EG);
