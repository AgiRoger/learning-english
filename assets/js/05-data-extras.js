/* =========================================================
   05-data-extras.js — data pendukung:
   langkah kurikulum, situasi nyata, preset perbandingan,
   latihan koreksi kesalahan, dan latihan terjemahan
   ========================================================= */
(function (EG) {
  'use strict';

  /* ---------------- LANGKAH KURIKULUM ---------------- */
  EG.steps = [
    { n: 1, id: 'sentence', title: 'Kalimat itu apa?', desc: 'Mengenal kalimat, subjek, verba, objek, dan pola dasarnya.', icon: '1' },
    { n: 2, id: 'word', title: 'Kata-kata di dalamnya', desc: 'Tiap kata punya tugas. Kenali tugasnya, bukan hanya artinya.', icon: '2' },
    { n: 3, id: 'structure', title: 'Rakit kalimatnya', desc: 'Menggabungkan kata jadi kalimat yang benar dan lengkap.', icon: '3' },
    { n: 4, id: 'tense', title: 'Kapan? (= tense)', desc: 'Waktu jadi kunci. Mathfisilah tense dari situasi, bukan dari hafalan tabel.', icon: '4' },
    { n: 5, id: 'tense-detail', title: 'Tense satu per satu', desc: 'Bedakan 12 tense berdasarkan makna, bukan hanya bentuk.', icon: '5' },
    { n: 6, id: 'sign', title: 'Tandaan dan tanya', desc: 'Kalimat negatif, kalimat tanya, dan kalimat tanya jawab.', icon: '6' },
    { n: 7, id: 'modal', title: 'Kata kerja bantu', desc: 'Modal, must, have to, should, dan friends.', icon: '7' },
    { n: 8, id: 'conditional', title: 'Kalau ini terjadi', desc: 'Conditional: fakta, kemungkinan, khayalan, dan penyesalan.', icon: '8' },
    { n: 9, id: 'voice', title: 'Arah aksi', desc: 'Active dan passive, plus kata kerja yang sering muncul.', icon: '9' },
    { n: 10, id: 'phrase', title: 'Potongan di dalamnya', desc: 'Phrase, clause, dan cara menyambung kalimat.', icon: '10' },
    { n: 11, id: 'punctuation', title: 'Tanda baca dan kesalahan', desc: 'Tanda baca, kapitalisasi, dan kesalahan yang sering terjadi.', icon: '11' },
    { n: 12, id: 'analysis', title: 'Latihan analisis', desc: 'Gabungkan semua ilmu untuk membedah kalimat.', icon: '12' }
  ];

  EG.levelOrder = ['Dasar', 'Menengah', 'Lanjut'];

  /* ---------------- SITUASI NYATA ---------------- */
  EG.realLife = [
    {
      id: 'rl-restaurant', title: 'Di restoran', icon: '🍽',
      goal: 'Bisa pesan, tanya harga, dan minta bantuan tanpa salah.',
      say: [
        { en: 'A table for two, please.', id: 'Meja untuk dua orang, pak.' },
        { en: 'What do you recommend?', id: 'Apa yang Anda rekomendasikan?' },
        { en: 'Could I get the bill, please?', id: 'Bisa minta bonnya?' },
        { en: 'No sugar, please.', id: 'Tanpa gula, ya.' }
      ],
      listen: 'Kata kunci yang sering muncul: "table for two" (meja untuk dua), "the bill" (bon), "to go" (bawa pulang).',
      tip: 'Sopan cukup dengan sederhana: could I..., would you..., please.'
    },
    {
      id: 'rl-shopping', title: 'Belanja dan Asking price', icon: '🛒',
      goal: 'Tanya harga, minta ukuran lain, dan menyampaikan keluhan dengan sopan.',
      say: [
        { en: 'How much is this?', id: 'Ini berapa?' },
        { en: 'Do you have this in a bigger size?', id: 'Ada ukuran lebih besar?' },
        { en: 'Can I try it on?', id: 'Bisa saya coba?' },
        { en: 'I think there is a mistake here.', id: 'Sepertinya ada yang salah di sini.' }
      ],
      listen: 'Kata kunci: "how much" (harga), "in stock" (stok ada), "on sale" (diskon), "receipt" (struk).',
      tip: 'Komplain paling aman pakai bentuk yang lembut: "I think there might be a problem."'
    },
    {
      id: 'rl-work', title: 'Kantor dan kerjaan', icon: '💼',
      goal: 'Menulis email, menjelaskan prosedur, dan memberi tugas.',
      say: [
        { en: 'Could you send me the file today?', id: 'Bisa kirimkan filenya hari ini?' },
        { en: 'Let us meet at three tomorrow.', id: 'Kita ketemu besok jam tiga.' },
        { en: 'I will get back to you soon.', id: 'Saya akan membalas segera.' },
        { en: 'Sorry, I did not catch that.', id: 'Maaf, saya kurang menangkap maksudnya.' }
      ],
      listen: 'Kata kunci: "deadline" (tenggat), "follow up" (menindaklanjuti), "reschedule" (jadwal ulang).',
      tip: 'Di kantor, nada yang lembut penting: "Could you..." jauh lebih sopan daripada "Give me..."'
    },
    {
      id: 'rl-travel', title: 'Perjalanan dan arah', icon: '✈',
      goal: 'Cek arreglar, booking, dan tanya arah.',
      say: [
        { en: 'I have a reservation under my name.', id: 'Saya punya reservasi atas nama saya.' },
        { en: 'What time does the flight leave?', id: 'Jam berapa pesawat berangkat?' },
        { en: 'Is it far from here?', id: 'Jauh dari sini?' },
        { en: 'Could you take a photo of us?', id: 'Bisa foto kami?' }
      ],
      listen: 'Kata kunci: "boarding pass" (kartu naik pesawat), "gate" (gerbang), "one way" (sekali jalan), "connecting flight".',
      tip: 'Waktu ditulis 12-hour: at seven, at half past seven, at a quarter to eight.'
    },
    {
      id: 'rl-doctor', title: 'Ke dokter', icon: '🩺',
      goal: 'Ceritakan keluhan dengan benar dan jelas.',
      say: [
        { en: 'I have a headache and a fever.', id: 'Saya sakit kepala dan demam.' },
        { en: 'It started three days ago.', id: 'Mulai tiga hari lalu.' },
        { en: 'I am allergic to peanuts.', id: 'Saya alergi kacang.' },
        { en: 'How often should I take it?', id: 'Seberapa sering saya harus minum obat ini?' }
      ],
      listen: 'Kata kunci: "symptom" (gejala), "prescription" (resep), "pharmacy" (apotek), "insurance" (asuransi).',
      tip: 'Pakai "ago" untuk waktu yang sudah lewat, dan "for" untuk lamanya.'
    },
    {
      id: 'rl-interview', title: 'Wawancara kerja', icon: '🎯',
      goal: 'Jawab pertanyaan diri sendiri dengan rapi.',
      say: [
        { en: 'I have been learning English for two years.', id: 'Saya belajar bahasa Inggris selama dua tahun.' },
        { en: 'My strength is that I explain things clearly.', id: 'Kelebihan saya adalah menjelaskan dengan jelas.' },
        { en: 'I used to work in a small shop.', id: 'Dulu saya bekerja di toko kecil.' },
        { en: 'Could you tell me more about the role?', id: 'Bisa ceritakan lebih lanjut soal posisinya?' }
      ],
      listen: 'Kata kunci: "strength" (kelebihan), "weakness" (kekurangan), "experience" (pengalaman), "opportunity" (kesempatan).',
      tip: 'Hindari "I am agree". Katakan: "I agree" atau "I am in agreement".'
    },
    {
      id: 'rl-friends', title: 'Mengobrol santai', icon: '💬',
      goal: 'Bicara santai tanpa bahasa yang terlalu kaku.',
      say: [
        { en: 'What have you been up to?', id: 'Sudah apa aja?' },
        { en: 'I am just hanging out at home.', id: 'Saya cuma di rumah santai.' },
        { en: 'That sounds fun!', id: 'Seru juga ya!' },
        { en: 'Let us catch up later.', id: 'Kita ngobrol lagi nanti ya.' }
      ],
      listen: 'Kata kunci: "hanging out" (santai), "catch up" (ngobrol setelah lama), "give me a call" (telepon saya).',
      tip: 'Frasa kasual: "I am gonna" (informal) hanya oke untuk teman, bukan untuk atasan.'
    },
    {
      id: 'rl-phone', title: 'Telepon dan pesan', icon: '📱',
      goal: 'Menjawab telepon dan menulis pesan singkat yang benar.',
      say: [
        { en: 'Sorry, you are breaking up. Can you repeat that?', id: 'Maaf, suara Anda terputus. Bisa diulang?' },
        { en: 'Can I call you back in ten minutes?', id: 'Bisa saya telepon lagi dalam sepuluh menit?' },
        { en: 'I will text you the details.', id: 'Saya akan kirim detailnya via pesan.' },
        { en: 'Just to confirm, we meet at six.', id: 'Hanya untuk konfirmasi, kita bertemu jam enam.' }
      ],
      listen: 'Kata kunci: "hold on" (tunggu sebentar), "call back" (menelepon lagi), "confirm" (konfirmasi).',
      tip: 'Jangan tulis "I want to discuss" di pesan singkat. Tulis "Can we discuss...?"'
    },
    {
      id: 'rl-market', title: 'Pasar dan belanja', icon: '🥕',
      goal: 'Tanya harga, menawar, dan memilih barang.',
      say: [
        { en: 'How much is this per kilo?', id: 'Ini berapa per kilo?' },
        { en: 'Is this fresh?', id: 'Apakah ini segar?' },
        { en: 'Can I get two of these, please?', id: 'Bisa saya ambil dua ini?' },
        { en: 'Do you have a smaller bag?', id: 'Ada tas yang lebih kecil?' }
      ],
      listen: 'Kata kunci: "fresh" (segar), "ripe" (matang), "discount" (potongan harga), "receipt" (kuitansi).',
      tip: 'Angka besar dan kecil: "two fifty" = 2,50. "twenty fifteen" = 20,15.'
    },
    {
      id: 'rl-housing', title: 'Menyewa tempat tinggal', icon: '🏠',
      goal: 'Tanya sewa, syarat, dan aturan bangunan.',
      say: [
        { en: 'How much is the rent per month?', id: 'Sewanya berapa per bulan?' },
        { en: 'Is the deposit refundable?', id: 'Depositnya bisa dikembalikan?' },
        { en: 'How long is the lease?', id: 'Kontraknya berapa lama?' },
        { en: 'Are pets allowed?', id: 'Boleh ada hewan peliharaan?' }
      ],
      listen: 'Kata kunci: "rent" (sewa), "deposit" (uang muka), "lease" (kontrak), "utilities" (tagihan).',
      tip: '"Utilities" = listrik, air, gas. Biasanya ditanyakan terpisah dari sewa.'
    }
  ];

  /* ---------------- PRESET PERBANDINGAN ---------------- */
  EG.comparePresets = [
    {
      id: 'cmp-tense', title: 'Tense: tiga waktu yang paling sering tertukar',
      pair: ['tense-p-simple', 'tense-p-cont'],
      a: { label: 'Present Simple', text: 'I eat rice every day.', note: 'Kebiasaan, jadwal, atau fakta.' },
      b: { label: 'Present Continuous', text: 'I am eating rice now.', note: 'Sedang terjadi sekarang atau rencana.' },
      c: { label: 'Present Perfect', text: 'I have eaten rice twice today.', note: 'Terjadi, tapi kapan tidak penting.' },
      tip: 'Pertanyaan pemutus: "Ini soal kebiasaan, sedang terjadi, atau cuma terjadi?"'
    },
    {
      id: 'cmp-tense2', title: 'Past Simple vs Present Perfect',
      pair: ['tense-past-simple', 'tense-p-perfect'],
      a: { label: 'Past Simple', text: 'I visited Bali last year.', note: 'Waktu selesai dan disebut.' },
      b: { label: 'Present Perfect', text: 'I have visited Bali twice.', note: 'Pengalaman, tanpa menyebut waktu.' },
      c: null,
      tip: 'Kalau ada kata waktu lampau (yesterday, ago, in 2019, last week), pakai Past Simple.'
    },
    {
      id: 'cmp-sv', title: 'Have / Has vs There is / There are',
      pair: ['have-has', 'there-is'],
      a: { label: 'Have / Has', text: 'I have two brothers.', note: 'Memiliki, subjek orang atau benda.' },
      b: { label: 'There is / There are', text: 'There are two books on the table.', note: 'Keberadaan sesuatu di suatu tempat.' },
      c: null,
      tip: 'Pakai "there is" saat menjelaskan keberadaan, bukan kepemilikan.'
    },
    {
      id: 'cmp-modal', title: 'Can / Could / May / Might',
      pair: ['modal', 'modal-detail'],
      a: { label: 'Can', text: 'I can swim.', note: 'Bisa (bakat atau izin).' },
      b: { label: 'Could', text: 'Could you help me?', note: 'Bisa, tapi lebih sopan atau dulu bisa.' },
      c: { label: 'May / Might', text: 'It might rain.', note: 'Mungkin, atau izin dengan lebih resmi.' },
      tip: '"Could" + orang = lebih sopan. "Could" + benda = mungkin di masa lalu.'
    },
    {
      id: 'cmp-active', title: 'Active vs Passive',
      pair: ['passive', 'sentence-combining'],
      a: { label: 'Active', text: 'The chef cooked the meal.', note: 'Penekanan pada pelaku.' },
      b: { label: 'Passive', text: 'The meal was cooked by the chef.', note: 'Penekanan pada yang dikenai aksi.' },
      c: null,
      tip: 'Pemutus: apakah pelaku penting? Penting → active. Tidak penting → passive.'
    },
    {
      id: 'cmp-article', title: 'A / An / The / tanpa article',
      pair: ['article', 'article-detail'],
      a: { label: 'A / An', text: 'I saw a dog.', note: 'Pertama kali disebut, belum spesifik.' },
      b: { label: 'The', text: 'The dog was friendly.', note: 'Sudah disebut, jadi jelas.' },
      c: { label: 'Tanpa article', text: 'I like music.', note: 'Umum, jamak, atau uncountable.' },
      tip: 'Tanya diri sendiri: "apakah kita sudah tahu yang mana?"'
    },
    {
      id: 'cmp-count', title: 'Some / Any / No / Much / Many',
      pair: ['countable', 'determiner'],
      a: { label: 'Some', text: 'I have some questions.', note: 'Ada, tapi tidak semuanya. Tidak bisa dihitung.' },
      b: { label: 'Any', text: 'I don\'t have any questions.', note: 'Tidak ada (setelah negatif atau tanya).' },
      c: { label: 'Much / Many', text: 'How much sugar? How many apples?', note: 'Much = tidak bisa dihitung, many = bisa.' },
      tip: '"Sugar, rice, water" pakai much. "Apples, cars, people" pakai many.'
    },
    {
      id: 'cmp-prep', title: 'In / On / At',
      pair: ['preposition', 'time-expressions'],
      a: { label: 'At', text: 'at the door, at 7pm', note: 'Titik paling kecil.' },
      b: { label: 'On', text: 'on the table, on Monday', note: 'Permukaan atau hari.' },
      c: { label: 'In', text: 'in the room, in July', note: 'Area, bulan, atau tahun.' },
      tip: 'Semakin kecil tempatnya, semakin kecil preposisinya.'
    },
    {
      id: 'cmp-words', title: 'Because / Because of / So',
      pair: ['conjunction', 'clauses'],
      a: { label: 'Because', text: 'I stayed home because it rained.', note: 'Alasan, diikuti klausa.' },
      b: { label: 'Because of', text: 'I stayed home because of the rain.', note: 'Alasan, diikuti kata benda.' },
      c: { label: 'So', text: 'It rained, so I stayed home.', note: 'Akibat, klausa digabung dengan koma.' },
      tip: 'Hafal: because + klausa, because of + kata benda.'
    },
    {
      id: 'cmp-words2', title: 'In / Into / On / Onto',
      pair: ['preposition-detail', 'phrase-types'],
      a: { label: 'In', text: 'The keys are in the bag.', note: 'Posisi, sudah di dalam.' },
      b: { label: 'Into', text: 'She put the keys into the bag.', note: 'Pergerakan ke dalam.' },
      c: { label: 'On / Onto', text: 'The book is on the desk. She put it onto the desk.', note: 'Posisi di permukaan, lalu gerakan ke permukaan.' },
      tip: 'to + kata benda menunjukkan tujuan atau arah gerak.'
    }
  ];

  /* ---------------- LATIHAN KOREKSI KESALAHAN ---------------- */
  EG.correctionSets = [
    {
      id: 'corr-1', level: 'Dasar', title: 'Kesalahan harian', items: [
        { wrong: 'I very like your shirt.', right: 'I like your shirt very much.', why: 'Dalam bahasa Inggris, "very" tidak bisa mendahului kata kerja. Letakkan setelah kata kerja atau gunakan "really".' },
        { wrong: 'She don\'t come yesterday.', right: 'She didn\'t come yesterday.', why: 'Subject "she" butuh "didn\'t", dan "yesterday" menandai past simple.' },
        { wrong: 'I have went to Bali.', right: 'I have gone to Bali.', why: 'Setelah "have", gunakan participle (V3): gone, bukan went.' },
        { wrong: 'Between you and I.', right: 'Between you and me.', why: 'Setelah preposisi selalu pakai object pronoun: me, you, him, her, us, them.' },
        { wrong: 'I am agree with you.', right: 'I agree with you.', why: 'Verba "agree" sudah berarti "setuju" dan tidak butuh "am".' },
        { wrong: 'My english is better now.', right: 'My English is better now.', why: 'Nama bahasa dan nama orang selalu ditulis dengan huruf besar.' },
        { wrong: 'I have been there two days ago.', right: 'I was there two days ago.', why: '"Two days ago" sudah selesai, jadi bukan present perfect.' },
        { wrong: 'He suggested to go.', right: 'He suggested going.', why: '"Suggest" diikuti gerund (V-ing), bukan infinitive.' }
      ]
    },
    {
      id: 'corr-2', level: 'Menengah', title: 'Kesalahan yang halus', items: [
        { wrong: 'I have many experience.', right: 'I have a lot of experience.', why: '"Experience" tidak bisa dihitung di sini, jadi pakai "a lot of".' },
        { wrong: 'I want to discuss about this.', right: 'I want to discuss this.', why: '"Discuss" sudah transitif. Setelahnya langsung objek, tanpa "about".' },
        { wrong: 'The meeting will be held in the room, so everyone must attend to it.', right: 'The meeting will be held in the room, so everyone must attend.', why: 'Kata kerja "attend" sudah termasuk preposisi, jadi tidak perlu "to".' },
        { wrong: 'I am used to wake up early.', right: 'I am used to waking up early.', why: '"Be used to" diikuti gerund, karena bentuknya sudah menjadi kebiasaan. Setelah "to" selalu V-ing.' },
        { wrong: 'He is taller than me.', right: 'He is taller than I am.', why: 'Setelah "than" pada perbandingan penuh, gunakan subjek + verb: than I am.' },
        { wrong: 'Please notify me about the changing of the schedule.', right: 'Please let me know if the schedule changes.', why: 'Bahasa Inggris modern lebih suka kalimat pendek dan langsung.' }
      ]
    },
    {
      id: 'corr-3', level: 'Lanjut', title: 'Kesalahan tingkat lanjut', items: [
        { wrong: 'If I would have known, I would not have come.', right: 'If I had known, I would not have come.', why: 'Di klausa "if" untuk conditional ketiga tidak memakai "would".' },
        { wrong: 'The house was built by the workers, that took three months.', right: 'The house, which took three months, was built by the workers.', why: 'Ini relative clause yang salah tempat. Koma tidak boleh memisahkan subjek dan verb utama.' },
        { wrong: 'Regardless the weather, we went outside.', right: 'Regardless of the weather, we went outside.', why: 'Some prepositions bisa langsung diikuti noun, tapi "regardless" selalu memakai "of".' },
        { wrong: 'Neither of the students have submitted the assignment.', right: 'Neither of the students has submitted the assignment.', why: 'Frasa "neither of" diikuti kata kerja bentuk singular: has, was, does.' },
        { wrong: 'Each of the students were late.', right: 'Each of the students was late.', why: '"Each of" selalu memakai verb singular: was, has, likes.' },
        { wrong: 'I would have told you, if you would have asked.', right: 'I would have told you if you had asked.', why: 'Klausa "if" untuk masa lalu memakai past perfect, bukan "would".' }
      ]
    }
  ];

  /* ---------------- LATIHAN TERJEMAHAN ----------------
     id = kalimat Indonesia (yang diterjemahkan), en = jawaban English. */
  EG.translationSets = [
    {
      id: 'tr-1', level: 'Dasar', title: 'Kalimat sehari-hari', items: [
        { id: 'Saya lapar.', en: 'I am hungry.', accept: ['i am hungry', 'i m hungry', 'im hungry'] },
        { id: 'Dia saudara perempuan saya.', en: 'She is my sister.', accept: ['she is my sister', 'shes my sister'] },
        { id: 'Mereka tinggal di Bandung.', en: 'They live in Bandung.', accept: ['they live in bandung'] },
        { id: 'Saya tidak suka kopi.', en: 'I do not like coffee.', accept: ['i do not like coffee', 'i dont like coffee'] },
        { id: 'Buku itu ada di atas meja.', en: 'The book is on the table.', accept: ['the book is on the table', 'book is on the table'] },
        { id: 'Kami pergi ke sekolah setiap hari.', en: 'We go to school every day.', accept: ['we go to school every day', 'we go to school everyday'] },
        { id: 'Dia punya dua anak.', en: 'He has two children.', accept: ['he has two children', 'he has two kids'] },
        { id: 'Hari ini dingin.', en: 'It is cold today.', accept: ['it is cold today', 'its cold today'] }
      ]
    },
    {
      id: 'tr-2', level: 'Menengah', title: 'Situasi dan alasan', items: [
        { id: 'Saya lelah, jadi saya tidur lebih awal.', en: 'I was tired, so I went to bed early.', accept: ['i was tired so i went to bed early', 'i was tired, so i went to bed early'] },
        { id: 'Karena hujan, kami tetap di dalam.', en: 'Because it was raining, we stayed inside.', accept: ['because it was raining we stayed inside', 'because it was raining, we stayed inside'] },
        { id: 'Saya tinggal di sini selama lima tahun.', en: 'I have lived here for five years.', accept: ['i have lived here for five years', 'i have been here for five years', 'i have lived here for 5 years'] },
        { id: 'Bisa tolong bantu saya?', en: 'Could you please help me?', accept: ['could you please help me', 'could you help me please'] },
        { id: 'Rapat dimulai jam sembilan.', en: 'The meeting starts at nine.', accept: ['the meeting starts at nine', 'the meeting begins at nine', 'the meeting starts at 9'] },
        { id: 'Saya tidak tertarik pada pekerjaan itu.', en: 'I am not interested in that job.', accept: ['i am not interested in that job', 'im not interested in that job'] }
      ]
    },
    {
      id: 'tr-3', level: 'Lanjut', title: 'Kalimat lebih panjang', items: [
        { id: 'Kalau saya punya waktu lebih, saya akan belajar bahasa lain.', en: 'If I had more time, I would learn another language.', accept: ['if i had more time i would learn another language', 'if i had more time, i would learn another language'] },
        { id: 'Buku yang saya pinjam dari Anda sangat berguna.', en: 'The book that I borrowed from you was very useful.', accept: ['the book that i borrowed from you was very useful', 'the book i borrowed from you was very useful'] },
        { id: 'Dia sudah bekerja di sini sejak tahun dua ribu sembilan belas.', en: 'She has been working here since two thousand and nineteen.', accept: ['she has been working here since two thousand and nineteen', 'shes been working here since 2019', 'she has worked here since 2019'] },
        { id: 'Seandainya kamu bertanya lebih awal, saya akan pergi.', en: 'I would go if you had asked me earlier.', accept: ['i would go if you had asked me earlier', 'i would have gone if you had asked me earlier', 'i would go if you asked me earlier'] }
      ]
    }
  ];

  /* ---------------- BANK SOAL CAMPURAN ---------------- */
  EG.quizBank = (function () {
    const out = [];
    (EG.lessons || []).forEach(function (l) {
      (l.practice || []).forEach(function (q, i) {
        out.push({
          lesson: l.id,
          step: l.step,
          level: l.level,
          tag: l.cat,
          q: q.q,
          opts: q.opts,
          ans: q.ans,
          explain: q.explain,
          ref: l.id + '#' + i
        });
      });
    });
    return out;
  })();

  /* =========================================================
     URUTAN BELAJAR CANONIK
     Satu-satunya sumber urutan materi. Materi disusun:
       Dasar -> Menengah -> Lanjut, dan di dalam tiap level
       ikut langkah 1..12. Nomoring yang tampil di daftar
       (1, 2, 3, ... 65) diambil dari urutan di bawah.
     ========================================================= */
  EG.lesson_order = [
    /* --- Dasar --- */
    /* Langkah 1: Kalimat itu apa? */
    'sentence', 'subject', 'verb', 'object', 'complement',
    'osascomp', 'wordorder', 'clause', 'phrase',
    /* Langkah 2: Kata-kata di dalamnya */
    'noun', 'pronoun', 'adjective', 'determiner', 'article',
    'verb-word', 'adverb', 'preposition', 'conjunction',
    /* Langkah 3: Rakit kalimatnya */
    'sv', 'svo', 'svc', 'singular-plural', 'countable',
    'there-is', 'this-that', 'have-has', 'possessive',
    'imperative', 'adverb-frequency',
    /* Langkah 4: Kapan? (= tense) */
    'tense-concept',
    /* Langkah 6: Tandaan dan tanya */
    'negative', 'question',

    /* --- Menengah --- */
    /* Langkah 3 */
    'sv-agreement', 'do-does', 'linking-verbs', 'comparative',
    /* Langkah 4 */
    'time-expressions',
    /* Langkah 5: Tense satu per satu */
    'tense-p-simple', 'tense-p-cont', 'tense-p-perfect', 'tense-p-perfect-cont',
    'tense-past-simple', 'tense-past-cont', 'tense-past-perfect', 'tense-past-perfect-cont',
    'tense-fut-simple', 'tense-fut-cont', 'tense-fut-perfect', 'tense-fut-perfect-cont',
    /* Langkah 6, 7, 8, 9 */
    'wh-question', 'modal', 'conditional', 'passive',
    /* Langkah 10, 11 */
    'phrase-types', 'gerund-infinitive', 'clauses', 'punctuation',

    /* --- Lanjut --- */
    /* Langkah 2: perdalam kata */
    'article-detail', 'preposition-detail',
    /* Langkah 7 */
    'modal-detail',
    /* Langkah 10: kalimat jadi panjang berlapis */
    'relative-clause', 'sentence-combining',
    /* Langkah 11, 12: rangkuman lalu latihan */
    'common-mistakes', 'analysis-practice', 'osk-journey'
  ];

  (function () {
    const LV = ['Dasar', 'Menengah', 'Lanjut'];
    const rank = {};
    EG.lesson_order.forEach(function (id, i) { rank[id] = i; });
    let cache = null;

    /* Materi terurut: mengikuti EG.lesson_order. Materi yang somehow
       tidak terdaftar tetap ikut tampil, diurutkan level -> langkah. */
    EG.ordered_lessons = function () {
      const src = EG.lessons || [];
      if (cache && cache.src === src && cache.n === src.length) return cache.list;
      const list = src.slice().sort(function (a, b) {
        const ka = rank[a.id] === undefined ? Infinity : rank[a.id];
        const kb = rank[b.id] === undefined ? Infinity : rank[b.id];
        if (ka !== kb) return ka - kb;
        if (a.level !== b.level) return LV.indexOf(a.level) - LV.indexOf(b.level);
        if (a.step !== b.step) return a.step - b.step;
        return src.indexOf(a) - src.indexOf(b);
      });
      cache = { src: src, n: src.length, list: list };
      return list;
    };

    /* Nomor urut materi, dipakai di daftar. */
    EG.lesson_number = function (id) {
      return rank[id] === undefined ? null : rank[id] + 1;
    };
  })();

})(window.EG);
