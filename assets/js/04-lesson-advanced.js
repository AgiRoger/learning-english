/* =========================================================
   04-lesson-advanced.js — Step 7,8,9,10,11:
   modal, conditional, passive, phrase, clause, punctuation, dll
   ========================================================= */
(function (EG) {
  'use strict';
  const P = EG.lessons.push.bind(EG.lessons);

  /* ---------------- STEP 9 — PASSIVE VOICE ---------------- */
  P({
    id: 'passive', step: 9, level: 'Menengah', cat: 'Active & Passive Voice',
    title: 'Active & Passive Voice',
    hook: 'Arah aksi: siapa melakukan, atau siapa kena.',
    simple: 'Active = subjek yang melakukan aksi. Passive = subjek yang MENERIMA aksi. Yang berubah hanya arahnya, bukan waktunya.',
    eli10: '"She eats rice" = dia yang makan. "Rice is eaten by her" = rice yang jadi subjek kalimat, dan dia yang disebut sebagai pelaku. Berbeda siapa yang jadi pusat kalimat.',
    meaning: 'Active dipakai saat subjeknya pelaku. Passive dipakai saat subjeknya korban atau benda yang dikenai aksi, dan pelaku boleh tidak disebutkan.',
    when: 'Passive sering dipakai kalau pelaku tidak penting, tidak diketahui, atau sudah jelas dari konteks. Contoh: pengumuman, laporan, berita, resep, email, instruksi kerja.',
    why: 'Passive menaruh informasi penting di depan kalimat. Dalam berita, yang penting adalah kejadiannya, bukan siapa yang melakukannya.',
    whyNot: [
      { t: 'Active', d: 'Active lebih kuat dan lebih hidup: "The police arrested the thief." Kalau pelakunya penting dan diketahui, pakai active.' },
      { t: 'Percakapan sehari-hari', d: 'Orang lebih sering pakai active. "I ate rice" jauh lebih natural daripada "Rice was eaten by me".' }
    ],
    formula: 'Active: S + V + O  |  Passive: O + be + V3 ( + by + pelaku )',
    examples: [
      'She eats rice. (active)',
      'Rice is eaten by her. (passive)',
      'They built this house in 1990. (active)',
      'This house was built in 1990. (passive)',
      'Someone stole my bike. (active, pelaku tidak disebut)',
      'My bike was stolen. (passive, lebih dramatis dan tidak perlu menyebut pelaku)'
    ],
    mistakes: [
      { wrong: 'Rice was ate by her.', right: 'Rice was eaten by her.', why: 'Setelah "was" kata kerjanya harus bentuk ketiga: eaten, bukan ate.' },
      { wrong: 'The book is wrote by Sinta.', right: 'The book was written by Sinta.', why: 'Semua passive butuh tense-nya cocok: is/was + V3. Untuk lampau pakai "was", bukan "is".' }
    ],
    clues: ['Kata "by" (oleh) = tanda paling jelas kalimat passive', 'Verb yang selalu butuh object: eat, buy, break, build, kill, steal'],
    practice: [
      { q: 'Mana yang passive?', opts: ['The cat chased the mouse.', 'The mouse was chased by the cat.', 'The cat is chasing.'], ans: 1, explain: 'Ada "was" + V3 (chased) dan "by" — ini ciri kalimat passive.' },
      { q: 'Buat kalimat passive dari "They clean the office every day."', opts: ['The office is cleaned by them every day.', 'The office is cleaning every day.', 'The office cleaned every day.'], ans: 0, explain: 'Present simple passive: O + is/are + V3 + by + pelaku + adverb. "Every day" tetap di akhir.' }
    ],
    tips: 'Kalau pelaku tidak penting, "by them" sering dihilangkan: "The office is cleaned every day."'
  });

  /* ---------------- STEP 7 — MODAL VERBS ---------------- */
  P({
    id: 'modal', step: 7, level: 'Menengah', cat: 'Modal Verbs',
    title: 'Modal Verbs — can, could, may, might, must, should, ...',
    hook: 'Kata kerja bantu untuk kemungkinan, izin, dan kewajiban.',
    simple: 'Modal adalah kata kerja bantu yang mengubah makna kata kerja utama: dari "bisa" jadi "harus", dari "boleh" jadi "pasti".',
    eli10: 'Modal itu kayak pengatur nada bicara. "You can go" = boleh. "You must go" = wajib. "You might go" = mungkin. Kata kerjanya sama, tapi maknanya beda jauh.',
    meaning: 'Auxiliary yang menunjukkan sikap pembicara terhadap suatu tindakan: kemungkinan, izin, kewajiban, saran, atau penyesalan.',
    when: 'Setiap kali kamu menyatakan sikap terhadap sesuatu, bukan hanya jasanya terjadi: "I can help you", "You should rest", "It might rain".',
    why: 'Modal membuat bahasa Inggris bisa menunjukkan posisi pembicara. Tanpa modal, kamu hanya menyatakan fakta, tanpa sikap apa pun.',
    whyNot: [
      { t: 'have to / need to', d: '"You must go" = aturan dari atas, kewajiban moral. "You have to go" = kewajiban karena situasinya (misal statutes, atasan). "You need to go" = kebutuhan pribadi.' },
      { t: 'will', d: '"Will" = keputusan atau tebakan. "Would" =lebih sopan, atau-about masa lalu (bersamaan dengan used to).' }
    ],
    formula: 'S + modal + V1 (tanpa "to", tanpa -s)',
    examples: [
      'can: I can swim. (bisa)',
      'could: Could you help me? (bisa, lebih sopan)',
      'may: May I come in? (boleh, resmi)',
      'must: You must wear a helmet. (wajib, aturan)',
      'should: You should see a doctor. (saran)',
      'might: It might rain. (mungkin)',
      'have to: I have to work tomorrow. (wajib karena situasi)',
      'need to: You need to sleep. (perlu)'
    ],
    mistakes: [
      { wrong: 'She can to drive.', right: 'She can drive.', why: 'Setelah modal TIDAK ada "to". Langsung kata kerja bentuk dasar.' },
      { wrong: 'He musts go home.', right: 'He must go home.', why: 'Modal tidak pernah dapat -s, bahkan setelah he / she / it.' }
    ],
    clues: ['Selalu diikuti kata kerja bentuk dasar', 'Tidak pernah jadi bentuk lampau (bukan "canned", "musted")'],
    practice: [
      { q: 'Mana yang benar?', opts: ['She cans drive.', 'She can drive.', 'She can to drive.'], ans: 1, explain: 'Setelah "can" harus kata kerja bentuk dasar "drive", tanpa "to" dan tanpa -s.' },
      { q: 'Pilih yang paling tepat: "___ I open the window?" (bertanya izin dengan sopan)', opts: ['Can', 'May', 'Must'], ans: 1, explain: '"May I...?" dipakai untuk meminta izin dengan lebih resmi. "Can I...?" juga bisa, tapi lebih kasual.' }
    ],
    tips: 'Tabel rasakan: must (paksa) > have to (harus, karena situasi) > should (sebaiknya) > could (mungkin/lebih sopan) > might (mungkin, lebih ragu).'
  });

  P({
    id: 'modal-detail', step: 7, level: 'Lanjut', cat: 'Modal Verbs',
    title: 'Bandingkan: must, have to, should, need to',
    hook: 'Empat kata, empat rasa berbeda.',
    simple: 'Empat kata ini sering dianggap sama, padahal maknanya beda: aturan, situasi, saran, dan kebutuhan.',
    eli10: '"Must" = wajib. "Have to" = harus, tapi karena situasinya. "Should" = sebaiknya. "Need to" = perlu.',
    meaning: 'Perbedaan utama ada di sumber kewajiban dan seberapa tegas itu disampaikan: dari aturan di atas atau dari situasinya.',
    when: 'Setiap kali kamu memberi instruksi, memberi saran, atau menjelaskan kewajiban di tempat kerja atau di rumah.',
    why: 'Memilih kata yang tepat menunjukkan seberapa tegas kamu. Salah pilih bisa membuatmu terdengar menjatuhkan atau tidak sopan.',
    whyNot: [
      { t: 'must vs have to', d: '"I must leave now" = saya memutuskan sendiri, dan ini sangat penting. "I have to leave now" = saya harus pergi karena situasinya, misalnya jadwal kerja.' },
      { t: 'should vs must', d: '"You must submit it today" = perintah, wajib. "You should submit it today" = saran, masih boleh tidak.' }
    ],
    formula: 'must = kewajiban dari diri sendiri / aturan moral | have to = kewajiban karena situasi | should = saran | need to = kebutuhan',
    examples: [
      'You must not touch this. (dilarang keras)',
      'I have to work until 6pm. (jadwal kerja)',
      'You should rest a bit. (saran baik)',
      'You need to eat more vegetables. (kebutuhan)'
    ],
    mistakes: [
      { wrong: 'You must to be careful.', right: 'You must be careful.', why: 'Setelah must tidak ada "to".' },
      { wrong: 'You should to rest.', right: 'You should rest.', why: 'Hal yang sama berlaku untuk should, could, might, will, would.' }
    ],
    clues: ['Negatif: must not (dilarang keras) vs don\'t have to (nggak wajib — beda makna!)'],
    practice: [
      { q: '"You ___ be quiet in the library." (aturan, wajib)', opts: ['should', 'must', 'might'], ans: 1, explain: 'Ini aturan tempat umum, jadi "must" — kewajiban yang keras.' },
      { q: '"___ I ask you a question?" (izin, ramah)', opts: ['Must', 'May', 'Have to'], ans: 1, explain: 'Untuk meminta izin: "May I...?" atau "Can I...?". "Must I...?" berarti "apakah saya harus...?"' }
    ],
    tips: '"Mustn\'t" vs "don\'t have to": "You mustn\'t smoke" = dilarang. "You don\'t have to smoke" = kamu tidak harus (.. boleh, tapi bukan larangan).'
  });

  /* ---------------- STEP 8 — CONDITIONALS ---------------- */
  P({
    id: 'conditional', step: 8, level: 'Menengah', cat: 'Conditional Sentences',
    title: 'Conditional Sentences — kalimat pengandaian',
    hook: 'Fakta, kemungkinan, khayalan, atau penyesalan?',
    simple: 'Kalimat "if" selalu punya dua klausa: satu syarat, satu hasil. Yang membedakan cuma kita melihat kenyataan dari sudut mana.',
    eli10: '"Kalau air dipanaskan, dia mencair." Itu fakta. "Kalau saya punya uang, saya akan bepergian." Itu khayalan. Dua-duanya pakai "if", tapi artinya beda jauh.',
    meaning: 'Empat jenis conditional yang dibedakan oleh dua hal: apakah syaratnya nyata atau tidak, dan apakah hasilnya benar-benar terjadi atau hanya bayangan.',
    when: 'Saat menyampaikan rencana, harapan, atau kesalahan di masa lalu ("if I had known, I would not have...").',
    why: 'Dengan memilih jenis conditional yang tepat, kamu otomatis memilih tense yang benar. Nggak perlu hafalin rumusnya — cukup tanya: ini fakta, kemungkinan, khayalan, atau penyesalan?',
    whyNot: [
      { t: 'Zero Conditional vs First Conditional', d: 'Zero = keduanya benar-benar terjadi (fakta hukum). First = syarat mungkin terjadi, hasil belum tentu.' },
      { t: 'Second vs Third Conditional', d: 'Second = khayalan soal masa depan atau masa sekarang ("If I were rich..."). Third = penyesalan soal masa lalu ("If I had studied...").' }
    ],
    formula: 'Zero: If + S + V, S + V | First: If + S + V, S + will + V | Second: If + S + V2, S + would + V | Third: If + S + had + V3, S + would have + V3',
    examples: [
      'If you heat ice, it melts. (fakta)',
      'If it rains tomorrow, I will stay home. (kemungkinan nyata)',
      'If I had more money, I would travel. (khayalan)',
      'If I had studied, I would have passed. (penyesalan)'
    ],
    mistakes: [
      { wrong: 'If it will rain, I will stay home.', right: 'If it rains, I will stay home.', why: 'Di bagian "if", jangan pakai will.(rule "no will in the if-clause") — wystarczy yang present simple.' },
      { wrong: 'If I would have money, I would travel.', right: 'If I had more money, I would travel.', why: 'Di bagian "if" untuk kondisi kedua/third, pakai V2 (had), bukan would.' }
    ],
    clues: ['Zero: selalu benar (hukum/alam)', 'First: kemungkinan nyata', 'Second: tidak nyata / khayalan', 'Third: tidak nyata di masa lalu + penyesalan'],
    practice: [
      { q: '"If I ___ rich, I would buy a house." (khayalan)', opts: ['am', 'was', 'were'], ans: 2, explain: 'Untuk kondisi kedua, subjek bisa jadi "were" untuk semua orang: "If I were / he were / she were".' },
      { q: 'Pilih yang benar (first conditional):', opts: ['If you will help me, I will be grateful.', 'If you help me, I will be grateful.', 'If you helped me, I will be grateful.'], ans: 1, explain: 'First conditional: bagian if pakai present simple, bagian hasil pakai will + V1.' }
    ],
    tips: 'Cara cepat memilih: tanyakan "ini mungkin terjadi nggak?" Kalau ya → First. Kalau tidak dan soal sekarang/nanti → Second. Kalau tidak dan soal masa lalu → Third.'
  });

  /* ---------------- STEP 10 — PHRASES ---------------- */
  P({
    id: 'phrase-types', step: 10, level: 'Menengah', cat: 'Phrases & Clauses',
    title: 'Jenis-jenis Phrase',
    hook: 'Kumpulan kata yang bekerja sebagai satu kesatuan.',
    simple: 'Phrase adalah kumpulan kata yang nggak punya subjek + verb sendiri, tapi punya tugas tertentu di dalam kalimat.',
    eli10: 'Ibarat potongan-potongan yang menempel di kalimat. "at the market" adalah potongan tempat. "very tired" adalah potongan sifat. Semuanya menempel pada bagian lain.',
    meaning: 'Tiap phrase punya jenis dan tugasnya sendiri: Noun Phrase (sebagai kata benda), Verb Phrase (sebagai kata kerja), Prepositional Phrase (tempat/waktu), Adjective Phrase, Adverb Phrase, Gerund Phrase, Infinitive Phrase, Participial Phrase.',
    when: 'Setiap kali kamu menambah informasi ke kalimat: tempat (in the room), waktu (last night), cara (very quickly), atau tujuan (to buy milk).',
    why: 'Phrase memungkinkan menambah detail tanpa menambah klausa baru. Dan tugas tiap jenis phrase selalu jelas, jadi mudah dianalisis.',
    whyNot: [
      { t: 'Clause', d: 'Clause punya subjek + verb sendiri. "because he left" = clause. "at the market" = phrase. Beda: ada subjek-verb atau tidak.' },
      { t: 'Kata tunggal', d: '"quickly" = adverb (satu kata). "very quickly" = adverb phrase. Fungsinya sama, cuma panjang.' }
    ],
    formula: 'Noun Phrase: det + adj + noun | Verb Phrase: (aux) + V-ing/V3 | Prep Phrase: prep + NP | Gerund: V-ing | Infinitive: to + V',
    examples: [
      'The small boy (noun phrase) opened (verb phrase) the door (noun phrase) quickly (adverb phrase) at 7pm (prepositional phrase).',
      'to buy some milk (infinitive phrase, tujuan)',
      'running very fast (participial phrase)'
    ],
    mistakes: [
      { wrong: 'I like very much to sing.', right: 'I like singing very much. / I want to sing very much.', why: '"Very much" adalah adverb phrase. Letaknya setelah kata kerja atau setelah object, bukan sebelum gerund.' }
    ],
    clues: ['Gerund phrase = V-ing dan bisa jadi objek kata kerja (enjoy, mind)', 'Infinitive phrase = to + V dan biasanya menunjukkan tujuan'],
    practice: [
      { q: 'Kalimat: "She read a book." Kata kata "a book" itu jenis apa?', opts: ['Prepositional phrase', 'Noun phrase', 'Infinitive phrase'], ans: 1, explain: '"a book" berisi determiner + noun dan berfungsi sebagai objek — itu noun phrase.' },
      { q: 'Mana infinitive phrase?', opts: ['to help', 'helping', 'very helpful'], ans: 0, explain: 'Infinitive phrase selalu diawali "to" + kata kerja dasar.' }
    ],
    tips: 'Coba pecah kalimat panjang jadi potongan-potongan ini. Lebih mudah baca dan lebih mudah cek kesalahannya.'
  });

  P({
    id: 'gerund-infinitive', step: 10, level: 'Menengah', cat: 'Phrases & Clauses',
    title: 'Gerund vs Infinitive — kata kerja setelah kata kerja',
    hook: '"I like swimming" tapi "I want to swim". Kenapa beda?',
    simple: 'Beberapa kata kerja diikuti kata kerja bentuk -ing (gerund), sebagian lagi diikuti to + kata kerja (infinitive). Nggak bisa ditukar.',
    eli10: '"I enjoy reading" (membaca = kegiatan yang kamu nikmati). "I want to read" (ingin — rencana). Dua kata kerja, dua kebutuhan berbeda.',
    meaning: 'Ada pola yang berlaku: (1) kata kerja + gerund, (2) kata kata + infinitive, (3) kata kunci berubah makna kalau diikuti bentuk lain (remember, forget, stop, try).',
    when: 'Setiap kali menyebut kegiatan atau rencana: "I enjoy cooking", "She wants to travel", "Have you ever tried sushi?"',
    why: 'Kombinasinya bukan acak. Ada polanya: kegiatan biasanya gerund, rencana biasanya infinitive. Sekali tahu polanya, kamu bisa menebak.',
    whyNot: [
      { t: 'try + gerund vs try + infinitive', d: '"I tried swimming" = aku mencoba aktivitas itu (coba, hasilnya belum tentu). "I tried to swim" = aku berusaha untuk bisa (usaha, belum tentu berhasil).' },
      { t: 'stop + gerund vs stop + infinitive', d: '"I stopped smoking" = saya berhenti smoking (merokok). "I stopped to smoke" = saya menghentikan kegiatan lain untuk smoke (merokok) sebentar.' }
    ],
    formula: 'Kata kerja + V-ing (gerund) | Kata kerja + to + V1 (infinitive) | stop / remember / forget + bentuk berbeda = makna berbeda',
    examples: [
      'I enjoy cooking. (kegiatan yang saya nikmati)',
      'I want to cook. (rencana)',
      'Have you ever tried sushi? (mencoba aktivitas)',
      'I don\'t mind waiting. (menunggu = aktivitas yang nggak masalah)'
    ],
    mistakes: [
      { wrong: 'I enjoy to swim.', right: 'I enjoy swimming.', why: '"Enjoy" memakai pola gerund, bukan infinitive.' },
      { wrong: 'I suggest to go there.', right: 'I suggest going there.', why: '"Suggest" juga pola gerund. Exception: "suggest that + S + V".' }
    ],
    clues: ['Pola gerund: enjoy, mind, finish, avoid, consider, suggest, keep, practice, miss', 'Pola infinitive: want, need, hope, decide, plan, promise, agree, learn, would like'],
    practice: [
      { q: 'Pilih yang benar: "She enjoys ___ to music."', opts: ['listen', 'listening', 'to listen'], ans: 1, explain: '"Enjoy" memakai pola gerund, jadi "enjoys listening".' },
      { q: 'Pilih yang benar: "They decided ___ abroad."', opts: ['to move', 'moving', 'move'], ans: 0, explain: '"Decide" memakai pola infinitive: "decided to move".' }
    ],
    tips: 'Hafal 10 kata pola gerund dan 10 kata pola infinitive. Itu sudah menutup sebagian besar kasus.'
  });

  /* ---------------- STEP 10 — CLAUSES ---------------- */
  P({
    id: 'clauses', step: 10, level: 'Menengah', cat: 'Phrases & Clauses',
    title: 'Clauses — klausa independen & dependen',
    hook: 'Bisa berdiri sendiri, atau bergantung?',
    simple: 'Klausa yang bisa berdiri sendiri disebut independent. Klausa yang butuh bagian lain disebut dependent.',
    eli10: 'Analoginya: "Saya makan nasi" berdiri sendiri. "karena saya lapar" nggak bisa berdiri sendiri — harus ada "Saya makan nasi" di depannya.',
    meaning: 'Ada tiga jenis klausa dependen: noun clause (berfungsi sebagai kata benda), adjective clause (menjelaskan kata benda), adverb clause (menjelaskan kata kerja).',
    when: 'Setiap kali kalimatnya gabungan dan kamu mau tahu bagian mana yang utama dan mana yang menempel.',
    why: 'Dengan begitu kamu tahu bagian mana yang boleh dihapus dan mana yang tidak. Itu kunci buat menulis kalimat yang rapi.',
    whyNot: [
      { t: 'Phrase', d: 'Phrase = tanpa subjek-verb sendiri ("in the room"). Clause = ada subjek + verb ("when I get home").' },
      { t: 'Noun vs Adjective vs Adverb clause', d: 'Noun clause menjawab "apa?" (I know that...). Adjective clause menjawab "yang mana?" (the man who...). Adverb clause menjawab "kapan/kenapa?" (when it rains...).' }
    ],
    formula: 'Independent clause = bisa berdiri sendiri | Dependent clause = butuh klausa lain | Penghubung: because, when, if, that, which, who',
    examples: [
      'I stayed home because it was raining. (independen: I stayed home | dependen: because it was raining)',
      'I know that he is honest. (that he is honest = noun clause)',
      'The house that I bought is small. (that I bought = adjective clause)',
      'When I get home, I will call you. (when I get home = adverb clause)'
    ],
    mistakes: [
      { wrong: 'Because I was tired.', right: 'I was tired, so I went to bed early.', why: 'Klausa dependen tidak boleh berdiri sendiri sebagai kalimat.' }
    ],
    clues: ['Kata penghubung antarklausa: because, although, if, when, while, since, after, before, unless, until', 'Kata penghubung relatif: who, whom, whose, which, that'],
    practice: [
      { q: 'Klausa mana yang dependen?', opts: ['I bought a new phone', 'because it was cheaper', 'yesterday'], ans: 1, explain: '"Because it was cheaper" butuh klausa independen ("I bought a new phone") supaya utuh.' },
      { q: '"The car ___ I bought yesterday is red." Kata yang tepat: who / which / where', opts: ['who', 'which', 'where'], ans: 1, explain: '"Car" bukan orang, jadi pakai "which" (atau "that").' }
    ],
    tips: 'Cara cepat cek klausa: hapus klausa itu. Kalau kalimat sisa masih utuh, klausa itu bergantung pada klausa lain.'
  });

  P({
    id: 'relative-clause', step: 10, level: 'Lanjut', cat: 'Phrases & Clauses',
    title: 'Relative Clause & kata ganti relatif',
    hook: 'who / whom / whose / which / that',
    simple: 'Adjective clause adalah bagian yang menjelaskan kata benda, dan dimulai dengan kata ganti relatif.',
    eli10: '"The boy who helped me" — "who helped me" menjelaskan boy mana. Tanpa bagian itu, kita cuma tahu ada "the boy", tapi tidak tahu yang mana.',
    meaning: 'Kata ganti relatif yang menarik noun ke clause: who (untuk orang, sebagai subjek), whom (untuk orang, sebagai objek), whose (milik), which (untuk benda), that (untuk keduanya, non-manusia).',
    when: 'Setiap kali perlu menjelaskan kata benda mana yang dimaksud: "The man who called you", "The book that I read".',
    why: 'Tanpa relative clause, kalimat jadi tidak jelas. Dalam bahasa sehari-hari, kita sering pakai bentuk pendek: "The man I met".',
    whyNot: [
      { t: 'who vs whom', d: '"The man who called me" (dia yang menelepon) vs "The man whom I called" (dia yang saya telepon). "Who" = subjek, "whom" = objek.' },
      { t: 'which vs that', d: 'Keduanya bisa untuk benda, tapi jangan dipakai sekaligus dalam satu kalimat. Untuk orang, "who" atau "whom" lebih aman daripada "that".' }
    ],
    formula: 'who = orang (sebagai subjek) | whom = orang (sebagai objek) | whose = milik | which = benda | that = orang atau benda',
    examples: [
      'The man who lives next door is a teacher.',
      'The woman whom I met is Sinta.',
      'The student whose bag was stolen is angry.',
      'The book which I bought is new.',
      'The house that we live in is small.'
    ],
    mistakes: [
      { wrong: 'The house who I live in is small.', right: 'The house which I live in is small.', why: '"House" bukan orang, jadi tidak bisa "who". Pakai "which" atau "that".' },
      { wrong: 'The man which called me...', right: 'The man who called me...', why: 'Untuk orang pakai "who".' }
    ],
    clues: ['"Who" bisa diganti "he/she": the man who came = he came (masuk akal). "Which" bisa diganti "it": the car which came = it came.'],
    practice: [
      { q: 'Pilih: "The girl ___ sits behind me is Sinta."', opts: ['which', 'who', 'whom'], ans: 1, explain: 'Girl = orang, dan dia melakukan "sits" (subjek), jadi pakai "who".' },
      { q: 'Pilih: "This is the book ___ cover I like."', opts: ['who', 'whose', 'which'], ans: 1, explain: '"Whose" menunjukkan kepemilikan: "the book\'s cover" → the book whose cover.' }
    ],
    tips: 'Bentuk singkat untuk benda: "The book (which) I read" → "The book I read". Untuk orang: "The man (whom) I met" → "The man I met".'
  });

  /* ---------------- STEP 2 — ARTICLES ---------------- */
  P({
    id: 'article-detail', step: 2, level: 'Lanjut', cat: 'Parts of Speech',
    title: 'Article — a, an, the, dan zero article',
    hook: 'Jadi pilih yang satu atau yang lebih jelas?',
    simple: 'Keputusan utamanya: apakah bendanya sudah spesifik atau belum. Kalau belum pakai a / an. Kalau sudah, pakai the.',
    eli10: '"Saya lihat seekor anjing." Anjing pertama kali disebut, jadi "a". "Anjing itu lucu." → sekarang kita sudah tahu anjing yang mana, jadi "the".',
    meaning: '"A / an" = satu yang belum spesifik. "The" = sudah spesifik atau unik. Zero article = tidak perlu article (plural, uncountable, nama sendiri).',
    when: 'Setiap kali menyebut kata benda tunggal countable, dan setiap kali Anda menyebut nama kota, hari, atau hal umum.',
    why: 'Article adalah salah satu hal yang paling sering salah bagi orang Indonesia, karena bahasa Indonesia tidak punya article.',
    whyNot: [
      { t: 'Zero article', d: 'Dengan kata benda jamak dan uncountable kita sering TIDAK pakai article: "books are cheap", "water is important". Ini aturan, bukan kelalaian.' },
      { t: 'A vs the', d: '"I saw a dog" → dog yang mana belum jelas. "The dog was cute" → dog itu yang tadi kita lihat, sekarang jelas.' }
    ],
    formula: 'a/an = belum spesifik | the = sudah spesifik | (nol) = plural / uncountable / nama',
    examples: [
      'I bought **a** book. (satu buku, yang mana aja)',
      '**The** book I bought is nice. ( buku tadi)',
      'She is **an** engineer. (vokal)',
      'I go to school by bus. (sekolah sebagai tempat belajar, bukan gedung)',
      'I live in Jakarta. (nama kota, tanpa article)'
    ],
    mistakes: [
      { wrong: 'I saw a dog. The dog bit me.', right: 'I saw a dog. The dog bit me.', why: 'Ini contoh yang benar! Buffa: kali pertama pakai "a", kalimat kedua pakai "the" karena dog yang sama.' },
      { wrong: 'She is a teacher and a engineer.', right: 'She is a teacher and an engineer.', why: 'Di depan kata vokal (engineer) harus pakai "an", bukan "a".' }
    ],
    clues: ['the + kata benda yang ada "of": the price of rice, the idea of love', 'A: "I want water" (umum) vs "I want the water" (air yang ini)'],
    practice: [
      { q: 'Pilih: "I bought a book. ___ book was expensive."', opts: ['A', 'The', '—'], ans: 1, explain: 'Sudah disebut sebelumnya, jadi sekarang spesifik → "the".' },
      { q: 'Pilih: "She is ___ honest person."', opts: ['a', 'an', '—'], ans: 1, explain: '"Honest" diawali huruf vokal (h tidak dibaca), jadi pakai "an".' }
    ],
    tips: 'Penting: a / an ditentukan dari SUARA, bukan dari huruf. "an hour" (h tidak dibaca), "a university" (ada suara "yu").'
  });

  /* ---------------- STEP 2 — PREPOSITIONS ---------------- */
  P({
    id: 'preposition-detail', step: 2, level: 'Lanjut', cat: 'Parts of Speech',
    title: 'Preposition — tempat & waktu',
    hook: 'in, on, at: tiga tingkat "di"',
    simple: 'Preposisi tempat dan waktu punya pola: yang lebih spesifik memakai preposisi yang lebih kecil.',
    eli10: 'Ada tiga lapis tempat: negara besar (in Indonesia), kota besar (in Jakarta), tempat kecil (in the room), titik paling kecil (at the door).',
    meaning: 'Pola umum: AT = titik paling kecil (at the door, at 7pm). ON = permukaan atau hari (on the table, on Monday). IN = area atau container (in the room, in Jakarta, in 2020).',
    when: 'Setiap kali kamu menyebut tempat, waktu, atau cara: "I am at home", "The book is on the shelf", "She lives in Bandung".',
    why: 'Sekali paham pola "kecil ke besar", kamu tidak perlu hafal tiap preposisi satu per satu.',
    whyNot: [
      { t: 'on vs at', d: 'On dipakai jika ada permukaan: "on the wall". At dipakai jika cuma titik: "at the wall" Less natural, tapi "at the bus stop" sangat natural karena titik.' },
      { t: 'in vs at', d: '"in the room" (di dalam ruangan) vs "at the room" (jarak, less natural). Pakai "in" untuk area tertutup.' }
    ],
    formula: 'AT = titik | ON = permukaan / hari | IN = area / bulan / tahun | FOR = durasi | SINCE = titik awal | AGO = waktu yang sudah lewat',
    examples: [
      'I am **at** the office.',
      'The keys are **on** the table.',
      'She lives **in** Jakarta.',
      'The meeting is **at** 9 **on** Monday **in** June.',
      'I have lived here **for** 5 years **since** 2020.'
    ],
    mistakes: [
      { wrong: 'I live in Bandung since 2019.', right: 'I have lived in Bandung since 2019.', why: '"Since" menandai titik awal yang masih berlaku sampai sekarang, jadi butuh present perfect.' },
      { wrong: 'I am coming since two hours.', right: 'I have been here for two hours.', why: '"For" + durasi tidak boleh pakai present continuous. Pakai present perfect atau present perfect continuous.' }
    ],
    clues: ['for + durasi (for 3 hours) | since + titik awal (since 8am) | ago + waktu lalu (2 days ago, TANPA since/for)'],
    practice: [
      { q: 'Pilih: "The book is ___ the shelf."', opts: ['in', 'on', 'at'], ans: 1, explain: 'Shelf = permukaan, jadi pakai "on". Kalau di dalam laci, barulah "in".' },
      { q: 'Pilih: "I have been waiting ___ two hours."', opts: ['since', 'for', 'ago'], ans: 1, explain: '"For" + durasi (two hours). "Since" untuk titik awal (since 2pm).' }
    ],
    tips: '"At home", "at work", "at school" selalu tanpa "the". Tapi "at the office" (maksudnya gedung tertentu) boleh.'
  });

  /* ---------------- STEP 4 — TIME EXPRESSIONS ---------------- */
  P({
    id: 'time-expressions', step: 4, level: 'Menengah', cat: 'Tenses',
    title: 'since, for, ago, at, in, on — kata waktu',
    hook: 'Kata waktu yang sering bikin tense salah.',
    simple: 'Kata kata waktu memilih tense. Kalau salah pilih kata waktu, tense-nya juga ikut salah.',
    eli10: '"Since 2020" = mulai 2020 dan masih jalan. "For 5 years" = selama 5 tahun. "5 years ago" = 5 tahun yang lalu, sudah lewat.',
    meaning: '"Since" + titik awal. "For" + durasi. "Ago" + jarak dari sekarang (selalu lampau, tanpa since / for). "At" + jam. "In" + bulan / tahun. "On" + hari / tanggal.',
    when: 'Setiap kali menyebut waktu, baik lisan maupun tulisan.',
    why: 'Dengan memilih preposisi yang tepat, tense yang terbentuk juga otomatis tepat. Ini contoh paling jelas: pilih kata waktu yang salah, tense ikut salah.',
    whyNot: [
      { t: 'since vs for', d: '"Since Monday" (titik awal) dan "for three days" (durasi). Dua-duanya punya hubungan dengan present perfect.' },
      { t: 'ago vs since', d: '"Two days ago" berdiri sendiri, tanpa since. "Since two days ago" = salah.' }
    ],
    formula: 'at + jam | on + hari/tanggal | in + bulan/tahun | since + titik awal | for + durasi | ... ago',
    examples: [
      'The train leaves **at** 7 **on** Monday **in** July.',
      'I have worked here **since** 2019.',
      'I have worked here **for** 3 years.',
      'I finished it **two days ago**.'
    ],
    mistakes: [
      { wrong: 'I have seen him two days ago.', right: 'I saw him two days ago.', why: '"Ago" selalu menunjuk lampau yang selesai, jadi bukan present perfect.' },
      { wrong: 'I am living here since 2019.', right: 'I have been living here since 2019.', why: '"Since" yang masih berlaku sekarang → present perfect, bukan present continuous.' }
    ],
    clues: ['Kata waktu lampau yang spesifik (yesterday, ago, in 2019, last week) TIDAK bisa dipakai dengan present perfect'],
    practice: [
      { q: 'Pilih: "I ___ here ___ 2018."', opts: ['have lived / since', 'am living / for', 'live / since'], ans: 0, explain: '"Since 2018" menandai titik awal, dan perubahannya masih berlaku → present perfect: "have lived ... since 2018".' },
      { q: 'Mana yang benar?', opts: ['I have finished it yesterday.', 'I finished it yesterday.', 'I finish it yesterday.'], ans: 1, explain: '"Yesterday" = waktu lampau spesifik. Selesai, jadi past simple: "I finished it yesterday".' }
    ],
    tips: 'Latihan cepat: setiap kali lihat kata waktu, tanya "sudah selesai atau masih berlaku?"'
  });

  /* ---------------- STEP 11 — PUNCTUATION ---------------- */
  P({
    id: 'punctuation', step: 11, level: 'Menengah', cat: 'Punctuation',
    title: 'Punctuation — tanda baca',
    hook: 'Tanda baca = cara memberi tahu cara membaca.',
    simple: 'Tanda baca bukan hiasan. Dia memberi tahu pembaca: kapan berhenti, kapan berhenti sebentar, kapan pertanyaan.',
    eli10: 'Tanda baca adalah "nada bicara" yang ditulis. Titik berarti berhenti dan napas baru. Koma berarti berhenti sebentar. Tanda tanya berarti naik nada.',
    meaning: 'Tanda baca utama: . (full stop), , (comma), ? (question), ! (exclamation), : (colon), ; (semicolon), " " (quotation), \' (apostrophe), - (hyphen/dash).',
    when: 'Setiap kali menulis kalimat. especially dalam tulisan formal: email, laporan, tugas.',
    why: 'Tanda baca yang salah bikin kalimat ambigu. Contoh: "Let\'s eat, Grandma" sangat berbeda dari "Let\'s eat Grandma."',
    whyNot: [
      { t: 'Koma vs titik koma', d: 'Koma (,) menghubungkan bagian-bagian yang sama penting. Titik koma (;) memisahkan bagian yang sudah menjadi satu kesatuan ide.' },
      { t: 'Colon vs titik koma', d: 'Titik dua (:) memperkenalkan daftar atau penjelasan. Titik koma (;) hanya jeda.' }
    ],
    formula: '. = berhenti penuh | , = jeda sebentar | ? = tanya | ! = suara keras | : = pengantar daftar | ; = jeda lebih lama | " = kutipan | \' = kepemilikan / contractions',
    examples: [
      'I like coffee. (full stop)',
      'I bought rice, fish, and soup. (koma di daftar)',
      'What time is it? (question mark)',
      'That\'s great! (exclamation)',
      'I need three things: rice, water, and milk. (colon)',
      'He was tired, so he went to bed early. (koma sebelum "so")',
      'It\'s Sinta\'s bag. (apostrophe = milik)',
      'She doesn\'t know. (apostrophe = contractions)'
    ],
    mistakes: [
      { wrong: 'I want to buy a new phone a laptop and a mouse.', right: 'I want to buy a new phone, a laptop, and a mouse.', why: 'Daftar barang butuh koma agar mudah dibaca.' },
      { wrong: 'whats your name?', right: 'What\'s your name?', why: '"What is" disingkat jadi "what\'s" memakai apostrophe, bukan tanda tanya di tengah kata.' }
    ],
    clues: ['Koma sebelum "because", "so", "but", "and" yang menyambung dua klausa', 'Titik dua (colon) sebelum daftar: "I need: A, B, C"'],
    practice: [
      { q: 'Mana yang benar?', opts: ['Its a nice day', "It's a nice day", 'Its\'s a nice day'], ans: 1, explain: '"It is" disingkat jadi "it\'s" dengan apostrophe. "Its" tanpa apostrophe = miliknya.' },
      { q: 'Pilih tanda baca yang tepat: "I need three things rice, water, and milk."', opts: ['. (titik)', ': (titik dua)', '! (seru)'], ans: 1, explain: 'Karena setelahnya ada daftar, pakai titik dua.' }
    ],
    tips: 'Baca kalimatmu keras-keras. Kalau kamu perlu berhenti bernapas, kemungkinan besar perlu koma.'
  });

  /* ---------------- STEP 11 — COMMON MISTAKES ---------------- */
  P({
    id: 'common-mistakes', step: 11, level: 'Lanjut', cat: 'Sentence Structure',
    title: '10 kesalahan paling sering (rangkuman)',
    hook: 'Cek daftar ini sebelum kirim chat atau email.',
    simple: 'Ini daftar kesalahan yang paling sering muncul pada orang Indonesia yang belajar bahasa Inggris.',
    eli10: 'Kayak daftar larangan. Kalau kamu tahu 10 aturan ini, separuh kesalahanmu langsung hilang.',
    meaning: 'Kesalahan yang berasal dari kebiasaan bahasa Indonesia, atau dari tidak paham perbedaan fungsi kata.',
    when: 'Setiap kali menulis atau berbicara. Cocok untuk cek sendiri sebelum kirim.',
    why: 'Karena kesalahan ini muncul karena logika bahasa Indonesia berbeda dengan bahasa Inggris. Kalau paham logikanya, kamu tidak akan mengulang.',
    whyNot: [
      { t: 'Tata bahasa satu kalimat vs kalimat', d: 'Beberapa kesalahan cuma terlihat kalau digabung. Contoh: "I have a book and a pen" — dua object butuh "and" yang tepat.' },
      { t: 'Spelling vs Grammar', d: 'Spelling (ejaan) berbeda dengan grammar (struktur). "definately" salah eja, tapi "I am go" salah grammar.' }
    ],
    formula: '1) do/does reset 2) after preposition pakai object pronoun 3) a/an ditentukan suara 4) since butuh perfect 5) pola S-V-O',
    examples: [
      'Salah: "I very like it." → Benar: "I like it very much."',
      'Salah: "Between you and I" → Benar: "Between you and me"',
      'Salah: "I am agree" → Benar: "I agree"',
      'Salah: "She doesn\'t likes" → Benar: "She doesn\'t like"',
      'Salah: "I have went" → Benar: "I have gone"',
      'Salah: "more better" → Benar: "better"',
      'Salah: "I am living here since 2019." → Benar: "I have been living here since 2019."',
      'Salah: "I go to school with my friend yesterday." → Benar: "I went to school with my friend yesterday."',
      'Salah: "This is a my book." → Benar: "This is my book."',
      'Salah: "How many water?" → Benar: "How much water?"'
    ],
    mistakes: [
      { wrong: 'I am agree with you.', right: 'I agree with you.', why: 'Verba "agree" sudah berarti "setuju", jadi tidak perlu "be".' }
    ],
    clues: ['Cek 4 hal setiap menulis: (1) -s setelah he/she/it? (2) setelah preposition = object pronoun? (3) since wajib perfect? (4) ada "to" yang berlebihan?'],
    practice: [
      { q: 'Mana yang benar?', opts: ['She don\'t know.', 'She doesn\'t know.', 'She doesn\'t knows.'], ans: 1, explain: 'Subjek "she" → "doesn\'t", lalu kata kerja bentuk dasar "know".' },
      { q: 'Mana yang benar?', opts: ['This is my a pen.', 'This is a pen.', 'This is a my pen.'], ans: 1, explain: 'Cuma satu determiner boleh: "a pen" sudah cukup.' }
    ],
    tips: 'Simpan daftar ini. Sebelum kirim email atau chat penting, scan cepat 10 poin ini.'
  });

  /* ---------------- STEP 10 — SENTENCE COMBINING ---------------- */
  P({
    id: 'sentence-combining', step: 10, level: 'Lanjut', cat: 'Sentence Structure',
    title: 'Menyambung kalimat pendek jadi satu',
    hook: 'Dari 2 kalimat jadi 1 kalimat yang rapi.',
    simple: 'Bahasa Inggris lebih sering menyambung dua kalimat pendek dengan kata penghubung daripada bahasa Indonesia.',
    eli10: '"I was tired. I slept early." Bisa disambung: "I was tired, SO I slept early." Kalau alasannya: "I slept early BECAUSE I was tired."',
    meaning: 'Tiga cara utama: menggabungkan dengan FANBOYS (and, but, or, so, yet), dengan because/although/when, atau pakai relative clause.',
    when: 'Setiap kali menulis paragraf, email, atau jawaban esai.',
    why: 'Kalimat yang disambung dengan benar menunjukkan kemampuan menulis yang lebih tinggi, dan lebih enak dibaca.',
    whyNot: [
      { t: 'Dua kalimat terpisah', d: '"I was tired. I slept early." Kalimatnya benar, tapi terasa pendek dan kasar kalau untuk tulisan formal.' },
      { t: 'Run-on sentence', d: 'Kesalahan sebaliknya: menggabungkan dua kalimat tanpa koma atau kata penghubung: "I was tired I slept early."' }
    ],
    formula: 'S + V, FANBOYS + S + V | S + V because + S + V | Relative clause: noun + who/which + S + V',
    examples: [
      'I was tired, so I slept early. (so = akibat)',
      'I slept early because I was tired. (because = alasan)',
      'Although I was tired, I kept working. (meskipun)',
      'The book which I bought yesterday is very good.'
    ],
    mistakes: [
      { wrong: 'I was tired I slept early.', right: 'I was tired, so I slept early.', why: 'Dua klausa tidak boleh disambung tanpa koma dan kata penghubung.' }
    ],
    clues: ['Semicolon (;) bisa menggantikan kata "so": "I was tired; I slept early."'],
    practice: [
      { q: 'Gabungkan: "I was hungry. I cooked rice."', opts: ['I was hungry, and I cooked rice.', 'I was hungry so I cooked rice.', 'I was hungry, I cooked rice.'], ans: 1, explain: 'Hubungan antarkedua kalimat ini AKIBAT, jadi pakai "so" (bukan "and").' },
      { q: 'Mana yang benar?', opts: ['She doesn\'t like coffee and doesn\'t tea.', 'She doesn\'t like coffee and doesn\'t like tea.', 'She don\'t like coffee and doesn\'t like tea.'], ans: 1, explain: 'Setelah doesn\'t, kata kerja harus bentuk dasar: "like tea".' }
    ],
    tips: 'Tidak selalu harus disambung. Kalau pesannya cuma satu, kalimat pendek justru lebih kuat.'
  });

  /* ---------------- STEP 12 — ANALYSIS PRACTICE ---------------- */
  P({
    id: 'analysis-practice', step: 12, level: 'Lanjut', cat: 'Grammar Analysis',
    title: 'Cara menganalisis kalimat (ringkasan)',
    hook: 'Menggabungkan semua yang sudah kamu pelajari.',
    simple: 'Menganalisis kalimat itu 6 langkah: tipe kalimat, klausa, anatomi, phrase, bentuk verb, dan jenis kata.',
    eli10: 'Ini seperti membedah mesin. Pertama WHO (siapa), lalu APA (apa), lalu BAGAIMANA. Kalau tahu urutannya, kalimat yang rumit jadi mudah dipecah.',
    meaning: 'Urutan praktis: (1) berapa klausa, (2) tiap klausa: subjek + verb + objek/complement, (3) phrase di dalamnya, (4) bentuk setiap verb, (5) jenis setiap kata.',
    when: 'Saat belajar, saat menulis, atau saat membaca teks yang kalimatnya rumit.',
    why: 'Ini tujuan akhir semua materi grammar. Kalau kamu bisa menganalisis kalimat yang belum pernah kamu lihat, berarti kamu benar-benar paham — bukan hafalan.',
    whyNot: [
      { t: 'Langsung hafal label', d: 'Langsung menghafal label tanpa proses = cepat lupa. Analisis manual = jauh lebih tahan lama, walau lebih lambat di awal.' },
      { t: 'Hanya hafal label', d: 'Yang dinilai bukan hafalan label-nya, tapi apakah kamu bisa menjelaskan kenapa kata itu masuk kategori itu.' }
    ],
    formula: 'Tipe kalimat → Klausa → S + V + O/C → Phrase → Verb form → Parts of speech',
    examples: [
      '"I went to the market because I needed some food."',
      '→ Complex: 2 klausa.',
      '→ Klausa 1: S=I, V=went, PP=to the market.',
      '→ Klausa 2: S=I, V=needed, O=some food.',
      '→ "went" = Past Tense (V2). "needed" = Past Tense.'
    ],
    mistakes: [
      { wrong: 'Menghafal daftar label saja', right: 'Latih sampai bisa menjelaskan alasan tiap keputusan', why: 'Kalau bisa menjelaskan, kamu bisa menghadapi kalimat baru yang belum ada di daftar.' }
    ],
    clues: ['Mulai dari klausa, bukan dari kata pertama', 'Tandai dulu mana yang bisa berdiri sendiri'],
    practice: [
      { q: '"She is reading a good book." Berapa klausa?', opts: ['1', '2', '3'], ans: 0, explain: 'Hanya ada satu subjek (she) dan satu verb (is reading). "a good book" cuma objek, bukan klausa baru.' },
      { q: '"Because I was tired." Kenapa ini bukan kalimat lengkap?', opts: ['Karena kurang kata', 'Karena tidak ada klausa independen', 'Karena tidak ada kata tanya'], ans: 1, explain: 'Klausa "because I was tired" butuh klausa lain di depannya supaya utuh.' }
    ],
    tips: 'Gunakan fitur Grammar Autopsy untuk melakukan langkah-langkah ini secara otomatis.'
  });

  P({
    id: 'osk-journey', step: 12, level: 'Lanjut', cat: 'Grammar Analysis',
    title: 'Latihan: dari kalimat sederhana ke kalimat kompleks',
    hook: 'Bangun kalimat langkah demi langkah.',
    simple: 'Cara paling aman membangun kalimat yang panjang: mulai dari S + V, tambah O, tambah C, baru tambah phrase dan klausa.',
    eli10: 'Bangun rumah dari bawah. Dulu tembok, lalu pintu, baru atap. Kalau atap dulu, runtuh.',
    meaning: 'Urutan aman: (1) S + V, (2) + O atau C, (3) + modifier (keterangan tempat/waktu), (4) + klausa kedua bila perlu.',
    when: 'Setiap kali kamu bingung mau bilang sesuatu dan tidak tahu mulai dari mana.',
    why: 'Banyak orang mencoba menulis kalimat lengkap dalam satu langkah, lalu bingung di tengah. Dengan bertahap, tiap langkah kecil dan mudah dicek.',
    whyNot: [
      { t: 'Langsung menumpuk', d: '"Although I had studied, I would have passed" — kalau langsung, mudah salah. Mulai dari "I would have passed" (sudah), baru tambah "Although I had studied".' },
      { t: 'Mulai dari klausa dependen', d: 'Jangan pernah mulai dari "Because ...". Selalu tulis klausa independen dulu.' }
    ],
    formula: 'Langkah 1: S + V | Langkah 2: + O / C | Langkah 3: + PP / AdvP | Langkah 4: + klausa kedua',
    examples: [
      'L1: She reads. | L2: She reads books. | L3: She reads books in the library. | L4: She reads books in the library every day.',
      'L1: I will go. | L2: I will go home. | L3: I will go home tomorrow. | L4: If it rains, I will go home.'
    ],
    mistakes: [
      { wrong: 'Mulai: "If it rains tomorrow, then... (bingung mau jawab apa)"', right: 'Tulis dulu klausa hasilnya: "I will stay home." Baru sambung: "If it rains tomorrow, I will stay home."', why: 'Klausa independen selalu ditulis lebih dulu agar kalimatnya punya arah.' }
    ],
    clues: ['Setelah setiap langkah, tanya: "apakah ini sudah benar?"'],
    practice: [
      { q: 'Mana urutan yang benar?', opts: ['Because it was late, I went home.', 'I went home, because it was late.', 'went home, because it was late I.'], ans: 1, explain: 'Klausa independen ("I went home") ditulis dulu, baru klausa dependennya. kalimat lengkap baru jadi.' }
    ],
    tips: 'Latihan ini juga bagus untuk menganalisis: coba balik, dari kalimat panjang, hapus bagian demi bagian sampai tinggal S + V.'
  });

})(window.EG);
