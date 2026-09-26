/* =========================================================
   03-lesson-tenses.js — Step 4 & 5: konsep waktu + 12 tenses
   ========================================================= */
(function (EG) {
  'use strict';
  const P = EG.lessons.push.bind(EG.lessons);
  const S5 = { step: 5, level: 'Menengah', cat: 'Tenses' };

  P(Object.assign({}, S5, {
    id: 'tense-p-simple', title: 'Present Simple',
    hook: 'Kebiasaan, fakta, atau jadwal tetap.',
    simple: 'Dipakai untuk hal yang biasa terjadi, rutinitas, atau memang selalu benar. Bukan yang sedang terjadi detik ini.',
    eli10: 'Kalau kamu setiap hari minum kopi, kamu bilang "I drink coffee every day." Itu cerita kebiasaan, bukan yang lagi kamu lakukan sekarang.',
    meaning: 'Menunjukkan kebiasaan, rutinitas, jadwal tetap, atau fakta umum. Fokusnya bukan "sekarang", tapi "biasanya".',
    when: 'Waktu cerita kebiasaan sehari-hari, jadwal (kereta berangkat jam 7), atau fakta umum (air mendidih di 100 derajat C).',
    why: 'Dipilih karena yang mau disampaikan adalah pola berulang, bukan kejadian sesaat.',
    whyNot: [
      { t: 'Present Continuous', d: '"I eat" = kebiasaan makan secara umum. "I am eating" = sedang makan sekarang, saat ini juga. Beda fokus waktunya.' },
      { t: 'Past Simple', d: '"I eat fish" = saya makan ikan (kebiasaan). "I ate fish" = saya makan ikan, sudah terjadi yesterday lalu.' }
    ],
    formula: 'S + V1 (tambah -s / -es untuk he / she / it)',
    examples: ['I drink coffee every morning.', 'She works at a hospital.', 'The sun rises in the east.'],
    mistakes: [
      { wrong: 'He work every day.', right: 'He works every day.', why: 'Setelah subjek he / she / it, kata kerjanya wajib dapat tambahan -s.' }
    ],
    clues: ['every day', 'usually', 'always', 'often', 'never', 'sometimes'],
    practice: [
      { q: 'She ___ to school every day.', opts: ['go', 'goes', 'going'], ans: 1, explain: 'Subjek "she" itu orang ketiga tunggal, jadi verb dasarnya dapat -s menjadi "goes".' },
      { q: 'Mana yang benar tentang kebiasaan?', opts: ['I am work every day.', 'I work every day.', 'I working every day.'], ans: 1, explain: 'Kebiasaan selalu pakai bentuk dasar + (s kalau perlu). "Am work" dan "working" bukan bentuk present simple.' }
    ],
    tips: 'Perhatikan juga: "She doesn\'t work" (bukan doesn\'t works) dan "Does she work?" (bukan does she works?).'
  }));

  P(Object.assign({}, S5, {
    id: 'tense-p-cont', title: 'Present Continuous',
    hook: 'Sedang terjadi sekarang, atau rencana yang sudah pasti.',
    simple: 'Dipakai untuk hal yang sedang berlangsung pada saat ini, atau rencana dekat yang sudah yakin.',
    eli10: 'Kalau kamu lagi makan sekarang sambil ngomong, kamu bilang "I am eating now." Bukan kebiasaan, tapi lagi kejadian.',
    meaning: 'Menunjukkan aksi yang sedang berlangsung pada saat ini, atau rencana yang sudah pasti dalam waktu dekat.',
    when: 'Waktu menjelaskan apa yang sedang kamu atau orang lain lakukan saat ini, atau rencana dekat ("I am meeting him tomorrow").',
    why: 'Dipilih karena kejadiannya belum selesai dan sedang berlangsung, bukan rutinitas.',
    whyNot: [
      { t: 'Present Simple', d: '"I am eating breakfast" = sedang makan sekarang. "I eat breakfast every morning" = itu kebiasaan, bukan yang terjadi sekarang.' },
      { t: 'Past Continuous', d: '"I am eating" = sekarang. "I was eating" = sedang makan di satu waktu di masa lalu.' }
    ],
    formula: 'S + am / is / are + V-ing',
    examples: ['I am reading a book now.', 'They are watching a movie.', 'She is cooking dinner right now.'],
    mistakes: [
      { wrong: 'I am go to school now.', right: 'I am going to school now.', why: 'Setelah am / is / are, kata kerja harus dapat -ing, bukan bentuk dasar.' }
    ],
    clues: ['now', 'right now', 'at the moment', 'currently', 'Look!', 'Listen!'],
    practice: [
      { q: 'Look! The baby ___.', opts: ['cry', 'cries', 'is crying'], ans: 2, explain: 'Kata "Look!" menandakan kejadian sedang berlangsung saat ini juga, jadi pakai is + V-ing.' },
      { q: 'I ___ to the market tomorrow. (rencana yang sudah pasti)', opts: ['go', 'am going', 'went'], ans: 1, explain: 'Present continuous juga bisa untuk rencana yang sudah DISEPAKATI di masa depan, bukan tebakan.' }
    ],
    tips: 'Tapi bukan semua "sedang" pakai present continuous. Contoh: "I know his name" (bukan "I am knowing"), "I like coffee" (bukan "I am liking").'
  }));

  P(Object.assign({}, S5, {
    id: 'tense-p-perfect', title: 'Present Perfect',
    hook: 'Sudah terjadi, tapi hubungannya dengan sekarang masih terasa.',
    simple: 'Dipakai kalau kejadiannya sudah terjadi dan waktu pastinya tidak disebut. Yang penting: hubungan kejadian itu dengan keadaan sekarang.',
    eli10: 'Kalau kamu udah pernah nonton film itu, kamu bilang "I have watched that movie." Nggak penting kapan, yang penting sudah pernah dan masih relevan sekarang.',
    meaning: 'Menghubungkan masa lalu dengan sekarang. Entah karena hasilnya masih terasa, atau karena ini pengalaman hidup.',
    when: 'Waktu cerita pengalaman ("pernah" / "belum pernah"), atau kejadian yang hasilnya masih relevan sekarang.',
    why: 'Dipilih karena yang penting bukan kapan persisnya, tapi hubungan kejadian itu dengan keadaan sekarang.',
    whyNot: [
      { t: 'Past Simple', d: '"I have lost my key" = fokus ke akibat sekarang (makanya nggak bisa masuk). "I lost my key yesterday" = fokus ke waktu kejadian, sudah selesai ceritanya.' },
      { t: 'Present Perfect Continuous', d: '"I have worked here for 5 years" = fokus ke fakta / pencapaian. "I have been working here for 5 years" = fokus ke proses yang berlangsung terus.' }
    ],
    formula: 'S + have / has + V3 (past participle)',
    examples: ['I have visited Bali twice.', 'She has finished her homework.', 'They have lived here since 2020.'],
    mistakes: [
      { wrong: 'I have went there.', right: 'I have gone there.', why: 'Setelah have / has, kata kerja harus bentuk ketiga (V3): go -> gone, bukan went.' },
      { wrong: 'I have seen him yesterday.', right: 'I saw him yesterday.', why: 'Present perfect tidak boleh dipakai dengan kata waktu lampau yang spesifik seperti yesterday, last week, in 2019.' }
    ],
    clues: ['already', 'just', 'yet', 'ever', 'never', 'since', 'for', 'so far'],
    practice: [
      { q: 'I ___ finished my homework.', opts: ['have', 'has', 'had'], ans: 0, explain: 'Subjek "I" pakai "have". "Has" untuk he / she / it, "had" untuk lampau.' },
      { q: '___ you ever ___ sushi?', opts: ['Have / eat', 'Did / eat', 'Have / ate'], ans: 0, explain: '"Ever" menandakan pengalaman hidup → present perfect: have + V3 (eaten).' }
    ],
    tips: 'Kata kunci penting: "since" (titik waktu) dan "for" (durasi). Contoh: "since 2020", "for 5 years".'
  }));

  P(Object.assign({}, S5, {
    id: 'tense-p-perfect-cont', title: 'Present Perfect Continuous',
    hook: 'Menekan DURASI: sudah berapa lama.',
    simple: 'Dipakai kalau aksinya mulai di masa lalu, masih berjalan sampai sekarang, dan kamu mau menekankan berapa lama.',
    eli10: 'Kalau kamu belajar dari pagi dan masih belajar sekarang, kamu bilang "I have been studying since this morning." Yang ditekankan: lamanya.',
    meaning: 'Menekankan durasi atau proses yang berlangsung dari masa lalu sampai sekarang, sering masih berlanjut.',
    when: 'Waktu cerita berapa lama kamu sudah melakukan sesuatu, apalagi kalau masih berlangsung sekarang.',
    why: 'Dipilih karena yang penting bukan hasilnya, tapi prosesnya yang berlangsung terus-menerus.',
    whyNot: [
      { t: 'Present Perfect', d: 'Fokus BERBEDA. "I have worked here for 5 years" = fakta, sudah 5 tahun. "I have been working here for 5 years" = prosesnya masih jalan sampai sekarang.' },
      { t: 'Present Continuous', d: '"I am working now" = sedang kerja saat ini saja. "I have been working since 8am" = sudah dari pagi sampai sekarang.' }
    ],
    formula: 'S + have / has + been + V-ing',
    examples: ['I have been studying English for two years.', 'She has been waiting for an hour.', 'They have been living in Jakarta since 2019.'],
    mistakes: [
      { wrong: 'I have being working.', right: 'I have been working.', why: 'Setelah have / has, kata yang benar adalah "been", bukan "being".' }
    ],
    clues: ['since', 'for', 'all day', 'lately', 'recently', 'how long'],
    practice: [
      { q: 'She ___ for two hours already.', opts: ['has study', 'has been studying', 'is studying'], ans: 1, explain: 'Menekankan durasi yang berlangsung dari tadi sampai sekarang, jadi have / has + been + V-ing.' }
    ],
    tips: 'Kata "lately" dan "recently" hampir selalu menandakan bentuk ini.'
  }));

  P(Object.assign({}, S5, {
    id: 'tense-past-simple', title: 'Past Simple',
    hook: 'Sudah terjadi, selesai, waktunya jelas.',
    simple: 'Dipakai untuk kejadian yang sudah selesai di masa lalu, dan waktunya biasanya disebutkan.',
    eli10: 'Kalau kemarin kamu makan nasi goreng, kamu bilang "I ate fried rice yesterday." Sudah lewat, sudah selesai.',
    meaning: 'Menceritakan sesuatu yang terjadi dan selesai di waktu tertentu di masa lalu.',
    when: 'Waktu cerita pengalaman ("yesterday", "last week", "in 2019") yang sudah selesai.',
    why: 'Dipilih karena kejadiannya sudah berakhir, bukan masih berlangsung atau berhubungan dengan sekarang.',
    whyNot: [
      { t: 'Present Perfect', d: '"I lost my key yesterday" = jelas kapan hilangnya, sudah lewat. "I have lost my key" = fokusnya ke akibat sekarang, waktu hilangnya nggak penting.' },
      { t: 'Past Continuous', d: '"I worked" = kejadian selesai. "I was working" = sedang berlangsung di satu waktu tertentu di masa lalu.' }
    ],
    formula: 'S + V2 (verb bentuk kedua, biasanya + -ed)',
    examples: ['I worked late last night.', 'She visited her grandma last week.', 'They watched a movie yesterday.'],
    mistakes: [
      { wrong: 'I go there yesterday.', right: 'I went there.', why: 'Karena ada kata "yesterday" (masa lalu), kata kerja harus bentuk kedua (V2): go -> went.' }
    ],
    clues: ['yesterday', 'last night', 'last week', 'two days ago', 'in 2019', 'when I was young'],
    practice: [
      { q: 'She ___ home early yesterday.', opts: ['go', 'goes', 'went'], ans: 2, explain: 'Ada kata "yesterday" sehingga kejadian sudah lewat, jadi pakai bentuk kedua "went".' }
    ],
    tips: 'Bentuk tidak beraturan yang penting: go-went-gone, eat-ate-eaten, make-made-made, take-took-taken, buy-bought-bought.'
  }));

  P(Object.assign({}, S5, {
    id: 'tense-past-cont', title: 'Past Continuous',
    hook: 'Sedang berlangsung di masa lalu, biasanya saat ada kejadian lain.',
    simple: 'Dipakai untuk aksi yang sedang berjalan di satu titik waktu di masa lalu, biasanya diselingi kejadian lain yang lebih pendek.',
    eli10: 'Kalau kemarin jam 8 malam kamu lagi nonton TV, kamu bilang "I was watching TV at 8pm yesterday." Itu lagi terjadi di waktu itu.',
    meaning: 'Menunjukkan aksi yang sedang berlangsung pada suatu titik waktu tertentu di masa lalu, sering diselingi kejadian lain yang lebih pendek.',
    when: 'Waktu cerita latar belakang suatu kejadian, atau dua hal yang terjadi bersamaan di masa lalu.',
    why: 'Dipilih karena aksi ini belum selesai pada momen tertentu di masa lalu itu.',
    whyNot: [
      { t: 'Past Simple', d: '"I was cooking when he arrived" = memasak sudah berjalan sebelum dia datang. "I cooked when he arrived" terdengar aneh karena bunyi selesai, bukan sedang jalan.' },
      { t: 'Past Perfect Continuous', d: '"I was working" = sedang pada satu titik. "I had been working for 3 hours" = menekankan durasi sebelum kejadian lain.' }
    ],
    formula: 'S + was / were + V-ing',
    examples: ['I was sleeping when the phone rang.', 'They were playing football at 4pm.', 'She was cooking dinner while I was studying.'],
    mistakes: [
      { wrong: 'I was sleep when you called.', right: 'I was sleeping when you called.', why: 'Setelah was / were harus V-ing, bukan bentuk dasar.' }
    ],
    clues: ['while', 'when', 'at that time', 'at 8pm yesterday', 'all day'],
    practice: [
      { q: 'I ___ when the lights went out.', opts: ['read', 'was reading', 'have read'], ans: 1, explain: 'Sedang berlangsung di satu titik waktu masa lalu saat kejadian lain terjadi, jadi was / were + V-ing.' }
    ],
    tips: 'Pola umum: "Latar belakang (was/were + V-ing) + when + kejadian pendek (past simple)".'
  }));

  P(Object.assign({}, S5, {
    id: 'tense-past-perfect', title: 'Past Perfect',
    hook: 'Sudah selesai lebih dulu sebelum kejadian lain di masa lalu.',
    simple: 'Dipakai untuk kejadian yang sudah selesai duluan, sebelum kejadian lain yang juga sudah lewat.',
    eli10: 'Kalau sebelum kamu berangkat kamu udah makan, kamu bilang "I had eaten before I left." Ada dua kejadian masa lalu, dan yang ini lebih dulu.',
    meaning: 'Menunjukkan urutan waktu di masa lalu: kejadian ini terjadi lebih dulu daripada kejadian lain yang juga sudah lewat.',
    when: 'Waktu ada dua kejadian di masa lalu dan kamu mau menegaskan mana yang lebih dulu.',
    why: 'Dipilih untuk membuat urutan waktu jelas, supaya pembaca nggak bingung mana yang duluan.',
    whyNot: [
      { t: 'Past Simple', d: '"The train had left when I arrived" = kereta berangkat duluan sebelum saya sampai. "The train left when I arrived" terdengar seperti keduanya hampir bersamaan.' },
      { t: 'Past Simple + urutan kata', d: 'Kadang cukup pakai "before": "I finished before I left." Past perfect tidak wajib, tapi lebih jelas kalau jaraknya jauh.' }
    ],
    formula: 'S + had + V3',
    examples: ['I had finished my homework before dinner.', 'She had left when I called.', 'They had already eaten when we arrived.'],
    mistakes: [
      { wrong: 'I had finish before she came.', right: 'I had finished before she came.', why: 'Setelah had, kata kerja harus bentuk ketiga (V3), bukan bentuk dasar.' }
    ],
    clues: ['before', 'after', 'already', 'by the time', 'when ... arrived'],
    practice: [
      { q: 'By the time I arrived, the movie ___.', opts: ['already started', 'had already started', 'was starting'], ans: 1, explain: 'Kejadian ini selesai lebih dulu sebelum kejadian lain di masa lalu, jadi had + V3.' }
    ],
    tips: 'Ingat: past perfect = had + V3, sama seperti present perfect = have / has + V3. Yang bedanya hanya kata bantu "had".'
  }));

  P(Object.assign({}, S5, {
    id: 'tense-past-perfect-cont', title: 'Past Perfect Continuous',
    hook: 'Sudah berlangsung lama SEBELUM kejadian lain.',
    simple: 'Dipakai untuk aksi yang sudah berlangsung selama beberapa waktu, sebelum kejadian lain terjadi di masa lalu.',
    eli10: 'Kalau kamu sudah belajar 2 jam sebelum temanmu datang, kamu bilang "I had been studying for 2 hours before he came." Yang ditekankan: lamanya.',
    meaning: 'Menekankan durasi suatu aksi yang berlangsung sebelum titik waktu tertentu di masa lalu.',
    when: 'Waktu mau menekankan berapa lama sesuatu sudah berlangsung sebelum kejadian lain di masa lalu.',
    why: 'Dipilih karena fokusnya ke proses dan durasi, bukan cuma urutan kejadian.',
    whyNot: [
      { t: 'Past Perfect', d: '"I had worked for 3 hours" = fokus ke fakta sudah 3 jam. "I had been working for 3 hours" = lebih menekankan prosesnya yang berjalan terus selama itu.' },
      { t: 'Past Continuous', d: '"I was working at 8pm" = sedang pada satu titik. "I had been working for 3 hours" = sudah 3 jam SEBELUM titik itu.' }
    ],
    formula: 'S + had + been + V-ing',
    examples: ['I had been waiting for an hour when the bus finally came.', 'She had been studying for 3 hours before she took a break.', 'They had been driving all day before they stopped.'],
    mistakes: [
      { wrong: 'I had been work for hours.', right: 'I had been working for hours.', why: 'Setelah had been, kata kerjanya harus V-ing.' }
    ],
    clues: ['for', 'before', 'by the time', 'all day'],
    practice: [
      { q: 'He ___ for two hours before the rain stopped.', opts: ['had been running', 'has run', 'was running'], ans: 0, explain: 'Durasi yang berlangsung sebelum kejadian lain di masa lalu, jadi had been + V-ing.' }
    ],
    tips: 'Pola: had + been + V-ing + for + durasi + before + kejadian.'
  }));

  P(Object.assign({}, S5, {
    id: 'tense-fut-simple', title: 'Future Simple (will)',
    hook: 'Nanti akan terjadi: janji, keputusan dadakan, atau tebakan.',
    simple: 'Dipakai untuk sesuatu yang akan terjadi di masa depan: janji, keputusan yang baru diambil, atau prediksi.',
    eli10: 'Kalau kamu baru mikir sekarang "nanti aku telepon dia", kamu bilang "I will call her." Diputuskan saat itu juga.',
    meaning: 'Menyatakan sesuatu yang akan terjadi di masa depan. Bisa janji, keputusan spontan, atau prediksi.',
    when: 'Waktu membuat janji ("I will help you"), keputusan dadakan, atau prediksi ("It will rain tomorrow").',
    why: 'Dipilih karena belum ada rencana pasti sebelumnya. Ini keputusan atau tebakan saat itu juga.',
    whyNot: [
      { t: 'going to', d: '"I will help you" = janji atau keputusan spontan saat itu. "I am going to help you" = rencana yang sudah dipikirkan dari sebelumnya.' },
      { t: 'Present Continuous', d: '"I will call you" = tidak ada kesepakatan apa pun. "I am calling you tomorrow" = sudah ada janjian dengan orang lain.' }
    ],
    formula: 'S + will + V1',
    examples: ['I will call you later.', 'She will probably be late.', 'I will help you with that.'],
    mistakes: [
      { wrong: 'I will to call you.', right: 'I will call you.', why: 'Setelah will, langsung kata kerja bentuk dasar, tanpa "to".' }
    ],
    clues: ['tomorrow', 'next week', 'probably', 'I think', 'I promise', 'I hope'],
    practice: [
      { q: 'Don\'t worry, I ___ help you.', opts: ['will', 'am going to', 'would'], ans: 0, explain: 'Ini janji spontan yang diucapkan saat itu juga, jadi will + V1.' }
    ],
    tips: '"Will" juga dipakai untuk kebiasaan di masa depan: "I will always love you", "He will visit us every year".'
  }));

  P(Object.assign({}, S5, {
    id: 'tense-fut-cont', title: 'Future Continuous',
    hook: 'Nanti sedang terjadi di jam tertentu.',
    simple: 'Dipakai untuk sesuatu yang akan sedang berlangsung pada waktu tertentu di masa depan.',
    eli10: 'Kalau besok jam 8 malam kamu pasti lagi kerja, kamu bilang "I will be working at 8pm tomorrow." Bukan sekadar akan kerja, tapi lagi berlangsung di jam itu.',
    meaning: 'Menunjukkan aksi yang akan sedang berlangsung pada waktu tertentu di masa depan.',
    when: 'Waktu membayangkan apa yang sedang kamu lakukan pada momen tertentu nanti.',
    why: 'Dipilih karena fokusnya ke "sedang berlangsung" di titik waktu itu, bukan cuma "akan terjadi".',
    whyNot: [
      { t: 'Future Simple', d: '"I will be sleeping at midnight" = sedang tidur persis jam 12 malam. "I will sleep at midnight" terdengar seperti baru akan mulai tidur jam 12.' },
      { t: 'Future Perfect', d: '"I will be working at 8pm" = sedang. "I will have worked for 8 hours" = sudah selesai Invalid oleh jam itu.' }
    ],
    formula: 'S + will + be + V-ing',
    examples: ['I will be traveling next week.', 'She will be studying at that time.', 'They will be waiting for us at the airport.'],
    mistakes: [
      { wrong: 'I will working tomorrow.', right: 'I will be working tomorrow.', why: 'Perlu "be" di antara will dan V-ing.' }
    ],
    clues: ['at this time tomorrow', 'at 8pm tomorrow', 'this time next week', 'at that time'],
    practice: [
      { q: 'This time tomorrow, I ___ on a plane.', opts: ['will be', 'will', 'am'], ans: 0, explain: 'Menunjukkan sedang berlangsung di satu titik waktu tertentu di masa depan, jadi will be + V-ing.' }
    ],
    tips: 'Sering dipakai di PTAU: "This time tomorrow I will be flying to Bali."'
  }));

  P(Object.assign({}, S5, {
    id: 'tense-fut-perfect', title: 'Future Perfect',
    hook: 'Nanti sudah selesai sebelum waktu tertentu.',
    simple: 'Dipakai untuk sesuatu yang akan sudah selesai sebelum waktu tertentu di masa depan.',
    eli10: 'Kalau kamu yakin jam 5 sore nanti tugasmu sudah kelar, kamu bilang "I will have finished by 5pm." Selesainya sebelum jam itu.',
    meaning: 'Menunjukkan sesuatu yang akan sudah rampung sebelum titik waktu tertentu di masa depan.',
    when: 'Waktu bicara soal target atau deadline: sesuatu yang akan sudah beres sebelum saat itu.',
    why: 'Dipilih untuk menegaskan bahwa aksinya sudah selesai lebih dulu, sebelum waktu yang disebut.',
    whyNot: [
      { t: 'Future Simple', d: '"I will have finished by 5pm" = sudah beres sebelum jam 5. "I will finish at 5pm" berarti selesainya persis jam 5.' },
      { t: 'Future Perfect Continuous', d: '"I will have worked here for 10 years" = fakta. "I will have been working here for 10 years" = menekankan prosesnya.' }
    ],
    formula: 'S + will + have + V3',
    examples: ['I will have finished this report by Friday.', 'She will have graduated by next year.', 'They will have left by the time we arrive.'],
    mistakes: [
      { wrong: 'I will have finish by 5pm.', right: 'I will have finished by 5pm.', why: 'Setelah will have, kata kerja harus bentuk ketiga (V3).' }
    ],
    clues: ['by the time', 'by next year', 'by 5pm', 'by then', 'by Friday'],
    practice: [
      { q: 'By next month, she ___ her studies.', opts: ['will finish', 'will have finished', 'finishes'], ans: 1, explain: 'Selesai sebelum titik waktu tertentu di masa depan, jadi will have + V3.' }
    ],
    tips: 'Kata "by" = "paling lambat". "By Friday" berarti tidak lebih dari Jumat.'
  }));

  P(Object.assign({}, S5, {
    id: 'tense-fut-perfect-cont', title: 'Future Perfect Continuous',
    hook: 'Nanti sudah berlangsung selama ini lamanya.',
    simple: 'Dipakai untuk menekankan berapa lama sesuatu akan sudah berlangsung sampai titik waktu tertentu di masa depan.',
    eli10: 'Kalau bulan Juni nanti kamu genap 10 tahun kerja di sana, kamu bilang "I will have been working here for 10 years by June." Yang ditekankan: lamanya.',
    meaning: 'Menekankan durasi suatu aksi yang akan terus berlangsung sampai suatu titik di masa depan.',
    when: 'Waktu menghitung berapa lama sesuatu akan sudah berjalan pada tanggal tertentu nanti.',
    why: 'Dipilih karena yang ditekankan adalah proses dan durasinya, bukan hanya faktanya.',
    whyNot: [
      { t: 'Future Perfect', d: '"I will have worked here for 10 years" = fokus ke fakta 10 tahun. "I will have been working here for 10 years" = menekankan prosesnya yang jalan terus selama itu.' },
      { t: 'Present Perfect Continuous', d: 'Bentuk masa sekarang: "I have been working for 10 years" (sampai sekarang). Bentuk masa depan menambahkan "will have".' }
    ],
    formula: 'S + will + have + been + V-ing',
    examples: ['By December, I will have been living here for 5 years.', 'She will have been teaching for 20 years by next year.', 'They will have been traveling for a month by then.'],
    mistakes: [
      { wrong: 'I will have been work here for years.', right: 'I will have been working here for years.', why: 'Setelah will have been, kata kerja harus V-ing.' }
    ],
    clues: ['by then', 'by the time', 'for ... by'],
    practice: [
      { q: 'By 2027, they ___ here for a decade.', opts: ['will have been living', 'will live', 'have lived'], ans: 0, explain: 'Menekankan durasi sampai titik waktu tertentu di masa depan, jadi will have been + V-ing.' }
    ],
    tips: 'Bentuk ini jarang dipakai. Kalau ragu, pakai future perfect saja — maknanya hampir sama dan lebih sederhana.'
  }));

  /* ---------- KONSEP DASAR WAKTU (Step 4) ---------- */
  P({
    id: 'tense-concept', step: 4, level: 'Dasar', cat: 'Tenses',
    title: 'Tense = waktu + cara kita melihat kejadian',
    hook: 'Bukan hafalan 12 rumus, tapi cara kita melihat waktu.',
    simple: 'Tense itu cara kita melihat suatu kejadian: kapan terjadi, dan apakah sedang berjalan atau sudah selesai.',
    eli10: 'Bayangkan ada garis waktu: masa lalu, sekarang, masa depan. Kata kerja (tense) bilang kamu sedang menatap titik mana dari garis itu, dan apakah kejadiannya masih jalan.',
    meaning: 'Tense punya dua isi: (1) KAPAN kejadian itu (lampau, sekarang, nanti), dan (2) TATAPAN kita (sedang jalan atau sudah selesai).',
    when: 'Sebelum memilih tense, selalu tanya dua hal dalam urutan ini: pertama, waktunya; kedua, masih berjalan atau sudah selesai.',
    why: 'Kalau kamu paham dua pertanyaannya, kamu tidak perlu hafal 12 rumus. Rumus cuma alat untuk menulis jawaban dari dua jawaban itu.',
    whyNot: [
      { t: 'Hafalan rumus', d: 'Kalau hafalan, kamu akan lupa saat kalimatnya nggak sama persis dengan contoh. Kalau paham timeline, kamu bisa tetap benar.' },
      { t: 'Waktu di kalimat', d: '"Yesterday" menunjuk waktu, tapi tense tidak selalu sama dengan kata waktu itu. "I have seen him yesterday" salah bukan karena seen, tapi karena present perfect + yesterday.' }
    ],
    formula: 'TIME = PAST | NOW | FUTURE   ×   ASPEK = Simple | Continuous | Perfect | Perfect Continuous',
    examples: [
      'I eat. (sekarang = kebiasaan, selesai setiap kali)',
      'I am eating. (sekarang, sedang berjalan)',
      'I ate. (lampau, selesai)',
      'I have eaten. (lampau yang efeknya masih ada sekarang)',
      'I will eat. (nanti)'
    ],
    mistakes: [
      { wrong: 'Saya work every day.', right: 'I work every day.', why: 'Bahasa Inggris tidak bisa mencampur bahasa. Selalu pakai bahasa Inggris utuh.' }
    ],
    clues: ['Kata waktu tidak pernah 100% menentukan tense', 'Baca dua kali: pertama waktu, kedua aspek'],
    practice: [
      { q: '"I am reading a book." Kalimat ini bicara tentang waktu mana?', opts: ['Lampau', 'Sekarang / sedang', 'Nanti'], ans: 1, explain: 'am + V-ing = present continuous = sedang berlangsung sekarang.' },
      { q: '"I have finished my homework." Kenapa bukan past simple?', opts: ['Karena "finished" itu V3', 'Karena hasil atau hubungannya dengan sekarang masih penting', 'Karena soalnya kalimatnya terlalu panjang'], ans: 1, explain: 'Present perfect dipilih bukan karena bentuk V3-nya, tapi karena yang penting adalah sekarang: tugasnya sudah beres dan itu yang kita bicarakan.' }
    ],
    tips: 'Tips kecil: kalau ada "since" atau "for", hampir selalu itu perfect. Kalau ada "now / Look!", hampir selalu itu continuous.'
  });

})(window.EG);
