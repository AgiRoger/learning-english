/* =========================================================
   02-lesson-basics.js — Step 1,2,3,6: kalimat, jenis kata,
   struktur kalimat, tanya & negatif
   Skema tiap lesson:
   { id, step, level, cat, title, hook, simple, eli10, meaning,
     when, why, whyNot:[{t,d}], formula, examples:[],
     mistakes:[{wrong,right,why}], clues:[], practice:[{q,opts,ans,explain}] }
   ========================================================= */
(function (EG) {
  'use strict';
  EG.lessons = EG.lessons || [];

  const P = EG.lessons.push.bind(EG.lessons);

  /* ---------------- STEP 1 — UNDERSTAND SENTENCE ---------------- */

  P({
    id: 'sentence', step: 1, level: 'Dasar', cat: 'Sentence Structure',
    title: 'Apa itu Sentence (kalimat)?',
    hook: 'Kalimat =thought yang lengkap dan bisa.dimengerti orang lain.',
    simple: 'Sentence itu kalimat: satu rangkaian kata yang lengkap, punya subjek dan verb, dan bisa.dimengerti sendiri.',
    eli10: 'Kalau kamu mau cerita sesuatu ke teman, kalimatmu harus punya dua hal: siapa yang cerita (subjek) dan dia melakukan apa (verb). Tanpa dua itu, kalimatnya belum jadi.',
    meaning: 'Satuan terkecil yang utuh sendiri (bisa berdiri sendiri, tidak menggantung). Bedakan dengan frasa: "the small boy" itu frasa, belum kalimat karena belum ada verb-nya.',
    when: 'Setiap kali kamu menulis atau bicara dalam bahasa Inggris, kalimat adalah alatnya. Semua materi lain di aplikasi ini cuma cara memangkai kalimat.',
    why: 'Kalau kamu paham anatomi kalimat, kamu bisa bedakan kesalahan grammar yang mirip-mirip tapi beda hal. Contoh: "She is a doctor" dan "She is sleeping" dua-duanya punya subjek + verb, tapi isinya beda jauh.',
    whyNot: [
      { t: 'Frasa (phrase)', d: '"the small boy" — punya kata-kata yang saling nyambung, tapi belum ada subjek + verb, jadi belum bisa jadi kalimat utuh.' },
      { t: 'Clause (klausa)', d: '"because he was tired" — sudah punya subjek + verb, tapi masih bergantung bagian lain. Gabungan klausa barulah jadi kalimat penuh.' }
    ],
    formula: 'Kalimat ideal = Subjek + Verb (+ Object / Complement)',
    examples: [
      'The small boy opened the door. (lengkap: ada siapa + melakukan apa)',
      'I slept. (lengkap, walau cuma 2 kata)',
      'the small boy (ini frasa, bukan kalimat)'
    ],
    mistakes: [
      { wrong: 'Running very fast.', right: 'The boy is running very fast.', why: '"Running" di sini cuma kata kerja tanpa subjek. Kalau mau jadi kalimat, tetap perlu siapa yang lari.' }
    ],
    clues: ['Cek: ada subjek?', 'Cek: ada verb?', 'Cek: bisa berdiri sendiri?', 'Cek: diakhiri tanda baca?'],
    practice: [
      { q: 'Manakah yang sudah berupa kalimat sempurna?', opts: ['in the small garden', 'the small boy opened the door', 'opened the door quickly'], ans: 1, explain: 'Cuma pilihan kedua yang punya subjek ("the small boy") DAN verb ("opened"). Pilihan 1 cuma frasa preposisi, pilihan 3 cuma predicate yang menggantung.' }
    ],
    tips: 'Ungkapan yang sering dipakai: "kalimat lengkap" = full sentence, "kalimat menggantung" = fragment.'
  });

  P({
    id: 'subject', step: 1, level: 'Dasar', cat: 'Sentence Structure',
    title: 'Subject — siapa yang Doing',
    hook: 'Subject = siapa atau apa yang jadi pusat kalimat.',
    simple: 'Subject itu siapa yang jadi pusat utama kalimat. Setiap kalimat harus ada satu subject, dan itu yang bikin kalimat itu punya bentuk yang jelas.',
    eli10: 'Bayangkan kalimat punya "main character". "Siapa yang lagi cerita?" Nah, itu namanya subject. Dia yang melakukan, yang punya sifat, atau yang ada di situ.',
    meaning: 'Kata atau frasa yang menunjukkan siapa yang melakukan aksi, punya sifat, atau keberadaan. Subject biasanya ada di awal, tapi TIDAK harus selalu di awal.',
    when: 'Mulai dari subject setiap mau bikin kalimat. Kalau bingung, tanya: "Siapa yang Doing?" — jawabannya itu subject.',
    why: 'Subject menentukan verb-nya. "He work" dan "They work" bedanya cuma di subject, tapi bentuk verb-nya ikut berubah. Jadi bikin subject dulu, baru pilih verb yang cocok.',
    whyNot: [
      { t: 'Object', d: '"She reads a book" — She = subject (yang baca), book = object (yang dibaca). Kalau dibalik, kalimatnya jadi nggak masuk akal.' },
      { t: 'Preposition sebagai object', d: '"The cat sat on the mat" — "mat" itu object, tapi subject-nya "cat". Jangan ketuker.' }
    ],
    formula: 'Subject = kata/fhasa yang jawab pertanyaan "siapa?"',
    examples: [
      'The dog barked loudly. (subject: the dog)',
      'My sister and I went home. (subject: my sister and I — dua orang dalam satu subject)',
      'The keys are on the table. (subject: the keys, bentuk jamak)'
    ],
    mistakes: [
      { wrong: 'My brother is a student.', right: 'My brother is student.', why: '"a student" itu object, bukan subject. Subject-nya sudah ada: "my brother".' },
      { wrong: 'The cat and dog plays in the yard.', right: 'The cat and dog play in the yard.', why: 'Subject-nya "cat" dan "dog" (jamak) → verb-nya "play", bukan "plays".' }
    ],
    clues: ['Kata ganti: I, you, he, she, it, we, they', 'Kata benda: dog, house, idea', 'Dia bisa diganti dengan "he/she/they"', 'Biasanya dekat dengan verb'],
    practice: [
      { q: 'Siapa subject dalam kalimat: "She sold her old car to the buyer."', opts: ['her old car', 'She', 'the buyer'], ans: 1, explain: '"She" yang menjual. "her old car" = object, "the buyer" = kata benda yang diperkenalkan lewat preposition "to" sebagai penerima barang.' }
    ],
    tips: 'Kalimat tanpa subjek: "Running in the rain" → ini fragment, bukan kalimat.'
  });

  P({
    id: 'verb', step: 1, level: 'Dasar', cat: 'Sentence Structure',
    title: 'Verb — melakukan apa',
    hook: 'Kata kerja: melakukan, jadi, punya, menjadi.',
    simple: 'Verba-nya kata kerja: yang bikin kalimat hidup. Tanpa verb, kata-kata cuma benda mati yang berjajar.',
    eli10: 'Kalau subject itu yang cerita, verb itu "lagi ngapain". Contoh: "Dia (subject) makan (verb)". Kalimatnya hidup karena ada kata kerja.',
    meaning: 'Kata yang menunjukkan aksi (eat, go, buy), keadaan (be, become, seem), atau kepemilikan (have). Kalimat tanpa verb selalu tidak lengkap.',
    when: 'Setiap kalimat wajib punya minimal satu verb. Nggak selalu di tengah — bisa di awal ("Go away!") atau di akhir ("He ran fast.").',
    why: 'Verba yang dipakai memberi informasi waktu dan tense. Bentuk verb (eat / eating / ate / eaten) otomatis memberi tahu kapan kejadiannya, tanpa perlu kata kata waktu.',
    whyNot: [
      { t: 'Noun', d: '"work" bisa noun (pekerjaan) atau verb (bekerja). Bedanya lihat posisinya di kalimat: kalau ada yang dikerjakan, itu verb.' },
      { t: 'Gerund sebagai noun', d: '"Swimming is fun" — di sini "swimming" jadi kata benda (gerund), bukan kata kerja utama kalimat itu.' }
    ],
    formula: 'Verb = Base / Past / -ing / Past Participle',
    examples: [
      'I work every day. (verb bentuk dasar)',
      'She is working now. (verb + is)',
      'They went home. (verb bentuk lampau)',
      'He has finished his homework. (verb bentuk ke-3)'
    ],
    mistakes: [
      { wrong: 'I very like coffee.', right: 'I like coffee very much.', why: '"Very" tidak bisa diletakkan tepat sebelum verb. Place-nya setelah kata kerja, atau pakai "really"/"so".' }
    ],
    clues: ['Bisa diganti jadi bentuk -ing: "go" → "going"', 'Bisarawliquet ditambah "to": "go" → "to go"', 'Ada kata bantu: is, am, are, was, have, will'],
    practice: [
      { q: 'Kata mana yang functioning sebagai VERB: "The baby slept quietly."', opts: ['baby', 'slept', 'quietly'], ans: 1, explain: '"Slept" (tidur) = kata kerja. "Baby" = noun, "quietly" = adverb.' }
    ],
    tips: 'Verba di dalam satu kalimat bisa lebih dari satu: "She has been studying" = has (bantu) + been (bantu) + studying (kata kerja utama).'
  });

  P({
    id: 'object', step: 1, level: 'Dasar', cat: 'Sentence Structure',
    title: 'Object — yang kena aksi',
    hook: 'Object = yang receive/toccer dari subjek.',
    simple: 'Object itu kata benda yang kena aksi dari subjek. Kalau subject yang melakukan, object yang kena.',
    eli10: '"Dia (subject) memukul bola (object)." Dia yang Compat, bola yang kena. Kalau menulis "bola memukul dia" — udah dibalik, jadi nggak masuk akal.',
    meaning: 'Kata benda atau frasa yang menerima aksi dari subjek, DAN kata tanya "apa?" atau "siapa?" setelah verb bisa dijawab dengan kata itu.',
    when: 'Setelah kata kerja yang butuh pelengkap: kata kerja transitif. Contoh: buy, eat, read, want, need, see, give, take, make.',
    why: 'Object bikin kalimat jadi spesifik. "She eats" (belum jelas) vs "She eats rice" (jelas).',
    whyNot: [
      { t: 'Complement', d: '"She is a doctor" — doctor bukan yang menerima aksi, tapi melengkapi subjek. Beda: object = yang menerima aksi, complement = pelengkap.' },
      { t: 'Adverb', d: '"She runs quickly" — quickly bukan yang menerima aksi, cuma memberitahu bagaimana. Kalau nggak ada "run" (kata kerja), nggak mungkin ada object.' }
    ],
    formula: 'S + V + O   →   kata tanya: "S V apa?"',
    examples: [
      'I eat rice every day. (object: rice)',
      'She bought a new phone yesterday. (object: a new phone)',
      'He gave his mother money. (object: money — dan "his mother" = indirect object)'
    ],
    mistakes: [
      { wrong: 'I like very music.', right: 'I like music very much.', why: 'Object (music) harus langsung setelah verb. "Very" bukan object dan nggak bisa di posisi itu.' }
    ],
    clues: ['Kata tanya "apa?" dijawab dengan kata itu', 'Kata itu bisa diganti "it/them"', 'Hanya muncul setelah kata kerja transitif'],
    practice: [
      { q: 'Mana object-nya: "She bought some bread and milk at the bakery"?', opts: ['some bread and milk', 'the bakery', 'She'], ans: 0, explain: 'Bread dan milk yang dibeli (menerima aksi "bought"). "the bakery" cuma tempat (object of preposition "at").' }
    ],
    tips: 'Some verbs punya 2 object: give / send / tell / show / buy + orang + benda.'
  });

  P({
    id: 'complement', step: 1, level: 'Dasar', cat: 'Sentence Structure',
    title: 'Complement — pelengkap',
    hook: 'Complement = yang melengkapi subjek atau object.',
    simple: 'Complement itu bagian yang melengkapi subjek, terutama setelah kata kerja "be" (is, am, are, was, were).',
    eli10: 'Kalau subject-nya "Dia", terus kita bilang "Dia itu..." — bagian setelahnya yang bikin dia jadi kalimat yang lengkap. Itu complement.',
    meaning: 'Bagian yang dipakai memberi informasi paling penting tentang subjek, dan sering muncul setelah linking verb (be, seem, become, look, feel, feel).',
    when: 'Setelah kata kerja yang bukan kata kerja aksi: is, are, was, were, become, seem, look, feel, sound, taste, stay, remain.',
    why: 'Tanpa complement, kalimatnya menggantung dan kehilangan informasi penting. "She is" belum bermakna; "She is a nurse" baru jelas.',
    whyNot: [
      { t: 'Object', d: '"She is a nurse" → nurse = complement (melengkapi "she is"). "She is reading a book" → book = object (menerima aksi baca).' },
      { t: 'Adjective', d: 'Kadang ada yang memakai "She is happy" (happy = adjective sebagai complement) dan "She is my mother" (my mother = noun phrase sebagai complement). Dua-duanya complement.' }
    ],
    formula: 'S + linking verb + C  →  "S itu apa?"',
    examples: [
      'She is a teacher.',
      'The soup tastes good.',
      'He became famous after that movie.',
      'The room was very clean.'
    ],
    mistakes: [
      { wrong: 'She is a doctor and very helpful.', right: 'She is a doctor and she is very helpful.', why: 'Setelah "is" kamu nggak bisa menyambung dua predicate langsung. Kalimatnya pecah jadi dua klausa.' }
    ],
    clues: ['Kata tanya "S itu apa?" bisa dijawab', 'Verba-nya adalah be / seem / look / feel', 'Tidak menerima aksi — cuma melengkap'],
    practice: [
      { q: 'Kalimat: "My brother is a chef." Kata "a chef" itu apa?', opts: ['Object', 'Complement', 'Adverb'], ans: 1, explain: '"is" itu linking verb, dan "a chef" melengkap subjek ("my brother = someone who is a chef"). Jadi posisinya complement.' }
    ],
    tips: 'Termasuk juga object complement: "They elected him captain" → "captain" melengkap object "him".'
  });

  P({
    id: 'clause', step: 1, level: 'Dasar', cat: 'Sentence Structure',
    title: 'Apa itu Clause (klausa)?',
    hook: 'Klausa = bagian kalimat yang punya subjek + kata kerja sendiri.',
    simple: 'Clause atau klausa itu kelompok kata yang punya subjek + verb sendiri. Bagian ini yang bisa dipisah jadi "potongan kalimat".',
    eli10: 'Kalau kalimat panjang, coba bayangkan dipecah jadi beberapa bagian. Tiap bagian yang punya subjek + verb itu namanya klausa. Ada yang bisa berdiri sendiri, ada yang nggak.',
    meaning: 'Unit bahasa yang mengandung subjek + predikat. Karena itu, klausa jauh "berisi" daripada phrase. Kalimat penuh biasanya tersusun dari satu atau lebih klausa.',
    when: 'Dipakai saat mau menjelaskan Relationship antar-informasi: waktu, alasan, syarat, akibat, perbandingan.',
    why: 'Begitu kamu bisa melihat klausa, kalimat panjang nggak bikin takut lagi. Kamu tahu di mana "batas antar bagian" — dan itu kunci buat memeriksa grammar.',
    whyNot: [
      { t: 'Phrase', d: '"at the market" = phrase (preposition + noun, tanpa subjek-verb sendiri). "because I needed food" = clause (ada I + needed).' },
      { t: 'Independent vs Dependent', d: 'Klausa yang bisa berdiri sendiri = independent. Yang perlu bergantung = dependent.' }
    ],
    formula: 'Klausa = Subjek + Verb (+ objek/complement)',
    examples: [
      'I went to the market (klausa 1: saya pergi ke pasar)',
      'because I needed some food (klausa 2: karena saya butuh makanan)',
      'Kalimat lengkap: I went to the market because I needed some food.'
    ],
    mistakes: [
      { wrong: 'Because it was raining.', right: 'I stayed home because it was raining.', why: 'Klausa "because it was raining" butuh klausa independen di depannya. Tanpa itu, kalimatnya menggantung.' }
    ],
    clues: ['Suka ada kata penghubung: because, when, if, although, that, which', 'Satu klausa = satu subjek + satu predikat'],
    practice: [
      { q: 'Berapa klausa dalam kalimat: "I stayed home because it was raining"?', opts: ['1', '2', '3'], ans: 1, explain: 'Dua klausa: (1) "I stayed home" (mandiri) dan (2) "because it was raining" (bergantung).' }
    ],
    tips: 'Satu kalimat bisa berisi 1, 2, atau lebih klausa. Yang paling penting dicek: mana yang bisa berdiri sendiri.'
  });

  P({
    id: 'phrase', step: 1, level: 'Dasar', cat: 'Sentence Structure',
    title: 'Apa itu Phrase (frasa)?',
    hook: 'Phrase = sekumpulan kata tanpa subjek-verb sendiri.',
    simple: 'Phrase itu kumpulan kata yang jalan bareng sebagai satu bagian, tapi nggak punya subjek + verb sendiri.',
    eli10: '"Sekelompok teman dekat saya" — ini sekumpulan kata yang menempel. Nggak ada yang melakukan sesuatu. Namanya phrase.',
    meaning: 'Grup kata yang diperlakukan sebagai satu kesatuan dan sering berfungsi sebagai noun, adjective, adverb, atau verb di dalam kalimat. Tidak lengkap sebagai kalimat.',
    when: 'Setiap kali kamu menambah kata atau frasa untuk memperjelas makna: tempat, waktu, cara, sifat.',
    why: 'Mengenal frasa bikin kalimatmu jauh lebih rapi. Banyak kesalahan terjadi karena satu kata dianggap cuma punya satu fungsi saja.',
    whyNot: [
      { t: 'Clause', d: 'Pembedanya: ada subjek + verb sendiri atau nggak. "in the box" = phrase, "he put it in the box" = clause.' },
      { t: 'Satu kata', d: '"quickly" satu kata = adverb. "very quickly" dua kata = adverb phrase. Fungsinya sama.' }
    ],
    formula: 'Phrase tidak punya subjek + verb sendiri',
    examples: [
      'at home (prepositional phrase)',
      'very hungry (adjective phrase)',
      'to buy some milk (infinitive phrase)',
      'running fast (participial phrase)'
    ],
    mistakes: [
      { wrong: 'She likes very much singing.', right: 'She likes singing very much.', why: '"very much" itu adverb phrase yangmodify kata kerja "likes", harus setelah verb, bukan sebelum gerund.' }
    ],
    clues: ['Biasanya punya "inti" (head) + penjelas', 'Umumnya nggak bisa dipindah sembarangan'],
    practice: [
      { q: 'Mana yang PHRASE, bukan klausa?', opts: ['when I get home', 'very tired', 'she sleeps'], ans: 1, explain: '"very tired" cuma adjective + adjective, tanpa subjek-verb sendiri. "when I get home" sudah punya subjek (I) dan verb (get) → klausa.' }
    ],
    tips: 'Frasa penting yang sering muncul: at the moment, in the morning, because of the rain.'
  });

  P({
    id: 'wordorder', step: 1, level: 'Dasar', cat: 'Sentence Structure',
    title: 'Urutan Kata Bahasa Inggris',
    hook: 'Bahasa Inggris: Subjek dulu baru kata kerja.',
    simple: 'Bahasa Inggris punya urutan dasar yang cukup stabil: subjek → kata kerja → objek. Bahasa Indonesia sering menaruh kata kerja di akhir, dan itu nggak bisa dipakai di Inggris.',
    eli10: 'Kalau bahasa Indonesia bisa bilang "Saya makan nasi", bahasa Inggris harus "I eat rice" (saya makan nasi). Verb-nya nggak boleh ditaruh paling belakang.',
    meaning: 'Urutan kata yang "default" dalam bahasa Inggris. Bisa sedikit berubah (adverb bisa pindah, kata tanya bisa maju), tapi tuliskeletonnya tetap S → V → O.',
    when: 'Setiap kali kamu menyusun kalimat dari kata yang sudah kamu pilih. Mulailah dari subjek, lalu verb, baru objek.',
    why: 'Kalau kerangkanya benar, kesalahan lain (tense, plural) jauh lebih gampang ditemukan.',
    whyNot: [
      { t: 'Bahasa Indonesia', d: 'Indonesia: "Dia tidak pergi" → Inggris: "He did not go" / "He doesn\'t go". Bukan "He not go".' },
      { t: 'Bahasa Jepang/Korea', d: 'Di bahasa itu verba sering di akhir. Orang yang baru belajar Inggris dari bahasa Asia biasanya salah di sini.' }
    ],
    formula: 'S + V + O/C + modifier',
    examples: [
      'I (S) eat (V) rice (O) every morning (modifier).',
      'She (S) is reading (V) a book (O) now (modifier).',
      'The boy (S) opened (V) the door (O) quickly (modifier).'
    ],
    mistakes: [
      { wrong: 'Yesterday I went to the shop.', right: 'I went to the shop yesterday.', why: 'Ini sebenarnya BUKAN salah total — "yesterday" boleh di depan. Tapi kalau adverbial waktu panjang, biasanya ditaruh di akhir biar kalimatnya nggak berat di depan.' }
    ],
    clues: ['S = siapa, V = melakukan apa, O = apa yang kena', 'Kata tanya: "Where are you?" → VERB dulu baru subjek', 'Negatif: "I don\'t know" → bantu dulu, baru verb'],
    practice: [
      { q: 'Mana yang urutannya benar?', opts: ['Rice I eat every day.', 'I eat rice every day.', 'Eat I rice every day.'], ans: 1, explain: 'Urutan Inggris = subjek dulu (I), lalu verb (eat), lalu objek (rice). Pilihan lain tidak sesuai.' }
    ],
    tips: 'Rule paling penting: "Subject before verb, verb before object." Ingat ini, 80% kesalahan urutan hilang.'
  });

  P({
    id: 'osascomp', step: 1, level: 'Dasar', cat: 'Sentence Structure',
    title: 'O-S-A-S-C-O-M-P (urutan kata sifat)',
    hook: 'Delapan huruf untuk mengingat urutan kata sifat yang benar.',
    simple: 'O-S-A-S-C-O-M-P adalah alat bantu untuk menyusun KATA SIFAT, bukan urutan kata kalimat. Kalau satu kata benda punya beberapa kata sifat, huruf-huruf ini yang menentukan urutannya.',
    eli10: 'Bayangkan kamu menjelaskan barang di depan orang. Kamu akan bilang lebih dulu "ini bagus", baru "kecil", baru "sudah lama", baru "bentuknya bulat", baru "warnanya hijau", baru "made in Indonesia", baru "bahannya kayu", baru "dipakai buat makan". Kalau urutannya diacak, pendengarnya bingung.',
    meaning: 'Delapan jenis kata sifat, ditulis dari yang paling umum ke yang paling spesifik: Opinion (pendapat), Size (ukuran), Age (usia), Shape (bentuk), Color (warna), Origin (asal), Material (bahan), Purpose (tujuan).',
    when: 'Pakai begitu kamu menumpuk dua kata sifat atau lebih di depan satu kata benda: "a lovely little old green French wooden table". Kalau cuma satu kata sifat, urutan ini tidak kelihatan.',
    why: 'Urutannya menurun dari yang paling subjektif ke yang paling spesifik. Opinion paling subjektif dan paling sering diucapkan duluan, Purpose paling spesifik dan paling dekat dengan kata bendanya. Karena itu urutannya tidak boleh dibalik: bukan karena susunannya wajib, tapi karena bahasa Inggris mengaturnya begitu supaya kalimatnya enak dibaca.',
    whyNot: [
      { t: 'Bukan urutan kata kalimat', d: 'Ini bukan S-V-O. Urutan kata kalimat dibahas di materi "Urutan Kata Bahasa Inggris". OSASCOMP hanya untuk kata sifat di dalam satu kelompok kata.' },
      { t: 'Tidak wajib dipakai', d: 'Orang Inggris biasanya cuma memakai satu atau dua kata sifat, misalnya "a nice red car". OSASCOMP baru terasa begitu kamu memakai tiga kata sifat atau lebih.' }
    ],
    formula: 'Op + Sz + Ag + Sh + Co + Or + Ma + Pu + noun  =  a lovely little old green French wooden table',
    adjective_order: [
      { k: 'O', name: 'Opinion', arti: 'pendapat', what: 'Kata sifat yang berisi penilaian atau perasaan. Paling subjektif, karena ini hanya pendapat, bukan fakta.', ex: ['lovely', 'beautiful', 'nice', 'wonderful', 'ugly', 'terrible', 'silly', 'delicious'], when: 'Selalu di urutan paling depan kalau dipakai. Ini yang paling sering diucapkan orang, jadi paling sering didengar juga.' },
      { k: 'S', name: 'Size', arti: 'ukuran', what: 'Menyatakan besar atau kecilnya benda.', ex: ['big', 'small', 'huge', 'tiny', 'long', 'short', 'tall', 'enormous'], when: 'Setelah Opinion. Kalau butuh dua ukuran, pilih yang paling penting saja: "a small room", bukan "a small big room".' },
      { k: 'A', name: 'Age', arti: 'usia', what: 'Menyatakan umur atau kebaruan bendanya.', ex: ['old', 'new', 'young', 'ancient', 'antique', 'modern', 'brand-new'], when: 'Setelah Size. Bisa untuk benda ("an old house") maupun untuk orang ("an old man").' },
      { k: 'S', name: 'Shape', arti: 'bentuk', what: 'Menyatakan bentuk bendanya.', ex: ['round', 'square', 'rectangular', 'circular', 'oval', 'triangular', 'flat'], when: 'Setelah Age. Cuma perlu kalau bendanya memang berbentuk yang khas, seperti meja, jendela, atau rambu lalu lintas.' },
      { k: 'C', name: 'Color', arti: 'warna', what: 'Menyatakan warnanya.', ex: ['red', 'blue', 'green', 'black', 'white', 'pink', 'grey', 'dark', 'light'], when: 'Setelah Shape. Kalau dua warna, gabung dengan and: "a black and white photo".' },
      { k: 'O', name: 'Origin', arti: 'asal', what: 'Menyatakan asal pembuatan atau asalnya. Hampir selalu berupa nama negara, kota, atau daerah, dan ditulis dengan huruf besar.', ex: ['French', 'Indonesian', 'Japanese', 'American', 'Brazilian', 'Turkish', 'northern', 'southern'], when: 'Setelah Color. "French wine" berarti wine yang berasal dari Prancis. Dan "northern" bukan nama negara, tapi arah: "northern Europe".' },
      { k: 'M', name: 'Material', arti: 'bahan', what: 'Menyatakan bahan pembuatannya. Bentuknya dua: kata benda ditambah -en (wood menjadi wooden), atau langsung nama bahannya (silver, steel, glass, cotton).', ex: ['wooden', 'silver', 'steel', 'plastic', 'leather', 'glass', 'cotton', 'iron'], when: 'Setelah Origin. Perhatikan pasangan yang tidak bisa ditukar: "a wooden spoon", bukan "a wood spoon". Tapi "a silver ring" dan "a steel bridge" memang boleh.' },
      { k: 'P', name: 'Purpose', arti: 'untuk apa', what: 'Menyatakan kegunaan bendanya. Bentuknya kata benda yang dipakai apa adanya, tanpa -ing dan tanpa -ed.', ex: ['walking', 'sleeping', 'drinking', 'wedding', 'tennis', 'hiking', 'reading'], when: 'Selalu paling dekat dengan kata bendanya, di urutan terakhir. "a sleeping bag", bukan "a bag sleeping".' }
    ],
    examples: [
      'a **lovely** **little** **old** **green** **French** **wooden** **table** → lovely (Op), little (Sz), old (Ag), green (Co), French (Or), wooden (Ma).',
      'an **old** **round** **black** **car** → old (Ag), round (Sh), black (Co).',
      'a **sleeping** **bag** → sleeping (Pu), jadi tepat sebelum kata benda.',
      'a **black and white** **photo** → dua warna dari kategori yang sama, jadi digabung dengan and.'
    ],
    mistakes: [
      { wrong: 'a wooden French beautiful table', right: 'a beautiful French wooden table', why: 'Opinion harus paling depan, lalu Origin, baru Material. Kalau dibalik, urutannya tidak natural.' },
      { wrong: 'a red big car', right: 'a big red car', why: 'Size (big) selalu mendahului Color (red), bukan sebaliknya.' },
      { wrong: 'a new leather small bag', right: 'a small new leather bag', why: 'Size dulu, lalu Age, baru Material.' },
      { wrong: 'a bag sleeping', right: 'a sleeping bag', why: 'Purpose harus tepat sebelum kata benda, bukan sesudahnya.' },
      { wrong: 'a very red car', right: 'a bright red car', why: 'very tidak bisa dipakai di depan kata sifat warna. Pakai penguat yang sudah mengandung warna: bright, dark, light, pale.' }
    ],
    clues: [
      'Huruf O muncul dua kali. Yang pertama Opinion, yang kedua Origin.',
      'Semakin ke kanan, semakin spesifik: Opinion paling umum, Purpose paling khusus.',
      'Purpose bukan kata kerja. "sleeping" di "sleeping bag" artinya "untuk tidur", bukan "sedang tidur".',
      'Nama negara ditulis huruf besar: French, Indonesian, Japanese.',
      'Kebanyakan orang hanya memakai satu atau dua. Tidak perlu memaksakan semua delapan.'
    ],
    practice: [
      { q: 'Urutkan yang benar: "a ___ ___ car" dengan kata sifat red dan big.', opts: ['big red', 'red big', 'dua-duanya sama natural'], ans: 0, explain: 'Size (big) selalu mendahului Color (red), jadi "a big red car".' },
      { q: 'Mana yang urutannya BENAR?', opts: ['a lovely small old green table', 'a green small lovely table', 'a small lovely green old table'], ans: 0, explain: 'Opinion (lovely) harus di depan, lalu Size (small), lalu Age (old), baru Color (green). Dua opsi lain mencampuradukkannya.' },
      { q: 'Dalam "walking shoes", kata sifat "walking" termasuk huruf yang mana?', opts: ['P (Purpose)', 'O (Opinion)', 'M (Material)'], ans: 0, explain: '"Walking" menjelaskan kegunaan sepasang sepatu, jadi Purpose, dan letaknya paling dekat dengan kata benda.' }
    ],
    tips: 'Kalau malas menghafal delapan huruf: Opinion dan Size hampir selalu muncul, lalu Age, lalu Color. Empat itu yang paling sering dipakai dalam percakapan sehari-hari. Shape, Origin, Material, dan Purpose baru muncul di deskripsi barang atau tempat.'
  });

  /* ---------------- STEP 2 — LEARN WORD TYPES ---------------- */

  P({
    id: 'noun', step: 2, level: 'Dasar', cat: 'Parts of Speech',
    title: 'Noun — kata benda',
    hook: 'Orang, benda, tempat, gagasan.',
    simple: 'Noun atau kata benda: nama orang, benda, tempat, peristiwa, atau gagasan.',
    eli10: 'Semua yang bisa kita pegang, lihat, atau rasakan. Namanya noun (kata benda). Anak, bola, rumah, cinta — semuanya kata benda.',
    meaning: 'Kata yang menunjuk pada manusia, benda, tempat, atau ide. Bisa jadi subjek, object, atau complement kalimat.',
    when: 'Sebagai subjek: "Budi/**the dog**/**Aisyah** datang." Sebagai object: "Saya lihat **dog**." Sebagai complement: "Dia **adalah** dokter."',
    why: 'Noun menentukan{Impersonate} kata kerja bantu yang dipakai: "He/Aisyah/They + verb". Dan menentukan apakah perlu "a/the".',
    whyNot: [
      { t: 'Pronoun', d: 'Noun = nama spesifik (sinta "sinta"), pronoun = pengganti (sinta "mereka itu"). "The cat" → noun, "it" → pronoun.' },
      { t: 'Verb', d: '"Work" bisa noun (pekerjaan) atau verb (bekerja) tergantung posisinya: "My work is done" = noun, "I work" = verb.' }
    ],
    formula: 'Noun + kata keterangan: dog, girl, book, city',
    examples: [
      'Common noun (umum): dog, city, school',
      'Proper noun (nama khusus): Jakarta, Budi, Monday — SELALU diawali huruf besar',
      'Collective noun (kumpulan): team, family, group'
    ],
    mistakes: [
      { wrong: 'I go to school with my friend yesterday.', right: 'I went to school with my friend yesterday.', why: 'Ini salah tense, bukan salah noun. Tapi sering tercampur: "school" sebagai tempat selalu tanpa "the" kalaubsdan umum: "go to school" (bukan "go to the school") — kecuali maksudnya ke gedung sekolahnya.' }
    ],
    clues: ['Article bisa masuk: a dog, the dog, my dog', 'Bisa diganti pronoun: the dog → it', 'Banyak yang berakhiran -tion, -ment, -ness, -ity, -er, -or, -ist'],
    practice: [
      { q: 'Mana kata BENDA yang benar? "The ___ was very helpful."', opts: ['quickly', 'teacher', 'was'], ans: 1, explain: 'Setelah "The" dan sebelum "was" (linking verb) kita butuh kata benda → "teacher".' }
    ],
    tips: 'Noun yang selalu huruf besar: nama orang, kota, negara, hari, bulan, "|Brand/merek".'
  });

  P({
    id: 'pronoun', step: 2, level: 'Dasar', cat: 'Parts of Speech',
    title: 'Pronoun — kata ganti',
    hook: 'Pengganti nama orang/benda.',
    simple: 'Pronoun mengganti kata benda supaya kalimat nggak diulang-ulang. "Sinta" diganti "she".',
    eli10: 'Kalau nama kamu "Sinta" disebut 10 kali dalam satu paragraf, capek kan? Jadi kalimat ketiga tinggal "she". Nah, "she" itu pronoun.',
    meaning: 'Kata yang menggantikan noun. Ada yang menggantikan subjek (I, you, he, she, it, we, they) dan ada yang menggantikan kepemilikan (my, your, his, her, our, their).',
    when: 'Setiap kali kamu mau menghindari pengulangan noun, atau di awal kalimat saat nama belum perlu disebut: "Sinta is tired. She wants to rest."',
    why: 'Membuat kalimat jadi mengalir dan natural. Orang Inggris sangat menghindari pengulangan noun.',
    whyNot: [
      { t: 'Noun', d: '"she" = pronoun, "Sinta" = noun. Keduanya sama-sama bikin kalimat, tapi pronoun sudah menyamar jadi orang itu.' },
      { t: 'Possessive adjective', d: '"She took her bag" — "she" (= subjek) vs "her" (= pemilik tas). Beda fungsi.' }
    ],
    formula: 'Subject: I, you, he, she, it, we, they | Possessive: my, your, his, her, its, our, their',
    examples: [
      'He is my brother. I like him very much. (he = subjek, him = object)',
      'This is her book. It is new. (her = pemilik, it = subjek untuk "book")',
      'They went home. We stayed. (they, we)'
    ],
    mistakes: [
      { wrong: 'Between you and I, there is a problem.', right: 'Between you and me, there is a problem.', why: 'Setelah preposition (between, for, with, of), harus pakai bentuk OBJECT pronoun: me, him, her, us, them.' }
    ],
    clues: ['Subject pronoun: I, you, he, she, it, we, they', 'Object pronoun: me, you, him, her, it, us, them', 'Possessive: my, your, his, her, our, their'],
    practice: [
      { q: 'Isi titik-titik: "Sinta and I are friends. ___ often study together."', opts: ['They', 'Them', 'We'], ans: 0, explain: 'Karena posisinya sebagai SUBJEK, pakai "They". "Them" itu bentuk object, tidak bisa jadi subjek.' }
    ],
    tips: '"Its" (miliknya) vs "it\'s" (it is) — dua hal berbeda dan sering salah ketik.'
  });

  P({
    id: 'verb-word', step: 2, level: 'Dasar', cat: 'Parts of Speech',
    title: 'Verb (sebagai jenis kata)',
    hook: 'Verb = Doing. Kuncinya: bisa di-/-ing-kan.',
    simple: 'Verba-nya kata kerja. Cara paling gampang mengenali: kalau bisa di-CARI di depan (going, eating, working) dan di belakang (to go, to eat), itu kata kerja.',
    eli10: 'Kata kerja = kata yang bisa bikin kalimat hidup. "Makan" → "sedang makan" → "akan makan". Kalau kata bisa ketiga-tiganya, dia kata kerja.',
    meaning: 'Menceritakan aksi, keadaan, atau kepemilikan. Bentuk-bentuknya (V1, V2, V3, V-ing) menentukan tense, dan tense menentukan makna waktu.',
    when: 'Di posisi setelah subjek (biasanya): "She works." Bisa juga di awal untuk instruksi: "Please close the door."',
    why: 'Bentuk verb yang dipilih otomatis membawa makna waktu. "work" = kebiasaan, "worked" = lampau, "am working" = sedang, "have worked" = pernah/sampai-sini.',
    whyNot: [
      { t: 'Noun', d: '"She sings" (verb) vs "She sings" (noun) — konteks yang membedakan. Kalau ada "the", kemungkinan besar kata itu noun.' },
      { t: 'Gerund/Infinitive sebagai kata benda', d: '"Swimming" bisa noun ("Swimming is healthy") atau verb ("He is swimming").' }
    ],
    formula: 'V1: eat | V2: ate | V3: eaten | V-ing: eating',
    examples: [
      'I eat breakfast at 7. (V1, kebiasaan)',
      'I ate breakfast at 7. (V2, lampau sudah selesai)',
      'I have eaten breakfast. (V3, sudah pernah)',
      'I am eating. (V-ing, sedang)'
    ],
    mistakes: [
      { wrong: 'I am agree with you.', right: 'I agree with you.', why: '"Agree" bukan verb yang butuh "be". Yang butuh "be": be, seem, become, look, feel, appear, stay, remain.' }
    ],
    clues: ['Bisa + to: to eat', 'Bisa + -ing: eating', 'Ada bentuk lampau yang berubah: eat → ate'],
    practice: [
      { q: 'Bentuk KETIGA (V3) dari "go" adalah...', opts: ['went', 'gone', 'going'], ans: 1, explain: 'go → V1 go, V2 went, V3 gone, V-ing going. Setelah "have/has/had" kita butuh V3: "have gone".' }
    ],
    tips: 'Hafalkan 10 kata kerja yang tidak mengikuti aturan biasa saja: go, eat, make, take, give, get, come, buy, sell, write.'
  });

  P({
    id: 'adjective', step: 2, level: 'Dasar', cat: 'Parts of Speech',
    title: 'Adjective — kata sifat',
    hook: 'Menerangkan noun.',
    simple: 'Adjective itu kata sifat. Fungsinya satu: MENJELASKAN kata benda.',
    eli10: '"Buku" itu nggak berwarna. "Buku **merah**" baru jelas. "Merah" yang menjelaskan "buku" → adjective.',
    meaning: 'Kata yang menggambarkan properties (sifat, warna, ukuran, rasa) dari kata benda atau pronoun.',
    when: 'Umumnya tepat sebelum kata benda: "a **small** boy", "**expensive** phone". Bisa juga setelah linking verb: "The soup is **hot**".',
    why: 'Membuat deskripsi jadi jelas. Tanpa adjective, informasi "flat" itu nggak ada — dan tulisan jadi kurang hidup.',
    whyNot: [
      { t: 'Adverb', d: '"He is a **quiet** boy" (boy = noun → quiet = adjective) vs "He speaks **quietly**" (quietly modifies verb → adverb).' },
      { t: 'Noun', d: '"a **long** journey" (sifat) vs "a **long** distance" — bisa dua-duanya sifat, tapi "journey" vs "distance" yang jadi kata bendanya.' }
    ],
    formula: 'a + [adjective] + noun',
    examples: [
      'The small boy opened the door.',
      'She bought a new and expensive phone.',
      'I want something cheap.',
      'The movie was boring.'
    ],
    mistakes: [
      { wrong: 'I have a small car.', right: 'I have a car that is small.', why: 'Ini bukan salah mutlak — "small" di sini dipakai seperti kata benda (bahasa Inggris modern). Tapi kalau mau aman secara formal: "a car that is small" lebih jelas.' }
    ],
    clues: ['Bisa pakai "very": very small, very big', 'Sering diakhiri -ous, -ful, -ive, -al, -less, -able'],
    practice: [
      { q: 'Mana yang berfungsi sebagai ADJECTIVE? "The children were very tired."', opts: ['children', 'very', 'tired'], ans: 2, explain: '"tired" menggambarkan "children" dan juga melengkapi linking verb "were". "very" cuma pokemon penguat sifat.' }
    ],
    tips: 'Kalau menumpuk lebih dari satu kata sifat, urutannya tidak boleh asal. Buka materi "O-S-A-S-C-O-M-P" untuk urutan lengkapnya beserta contoh setiap huruf.'
  });

  P({
    id: 'adverb', step: 2, level: 'Dasar', cat: 'Parts of Speech',
    title: 'Adverb — kata keterangan',
    hook: 'Menerangkan kata kerja.',
    simple: 'Adverb menjelaskan kata kerja: bagaimana, kapan, di mana, seberapa sering. Tapi adverb juga bisa menempel pada adjective dan adverb lain.',
    eli10: 'Kalau adjective kayak warna ("red"), adverb itu gaya ("quickly"). "He runs quickly" → "runs" (kata kerja) dijelasin oleh "quickly".',
    meaning: 'Kata yang memodifikasi verb (atau adjective, atau adverb lain) untuk menambah informasi cara, waktu, tempat, atau tingkat.',
    when: 'Setelah kata kerja: "She sings **beautifully**." Setelah adjective: "very **quickly**", "quite **small**".',
    why: 'Menjawab pertanyaan "bagaimana?" dan "seberapa sering?" — informasi yang tidak bisa diberikan kata benda.',
    whyNot: [
      { t: 'Adjective', d: '"She is **happy**" (menerangkan she, dan sebagai pelengkap) vs "She smiles **happily**" (menerangkan verba smiles).' },
      { t: 'Adverb of frequency', d: '"always, usually, often, sometimes, never" —JX adverb-modifier di belakang kata kerja bantu: "I always eat".' }
    ],
    formula: 'V + adverb  |  Adv + adjective',
    examples: [
      'He runs quickly.',
      'She sings beautifully.',
      'I always drink coffee in the morning.',
      'The test was really difficult.'
    ],
    mistakes: [
      { wrong: 'I go always to work by car.', right: 'I always go to work by car.', why: 'Adverb of frequency (always) diletakkan SEBELUM kata kerja utama, setelah kata bantu: "I always go" / "I have always gone".' }
    ],
    clues: ['Banyak berakhiran -ly (tapi tidak semua: fast, soon, well, often)', 'Bisa jawab "bagaimana?" dan "kapan?"', 'Letak: sebelum adjective, setelah kata kerja'],
    practice: [
      { q: 'Mana ADVERB dalam "She waited patiently for the bus"?', opts: ['waited', 'patiently', 'bus'], ans: 1, explain: '"Patiently" menjelaskan bagaimana dia menunggu. "waited" = verb, "bus" = noun.' }
    ],
    tips: 'Hafal: normally kata yang berakhiran -ly adalah adverb. Pengecualian yang perlu diingat: friendly, lovely, lonely, ugly, early.'
  });

  P({
    id: 'preposition', step: 2, level: 'Dasar', cat: 'Parts of Speech',
    title: 'Preposition — kata depan',
    hook: 'Nunjukin hubungan: di mana, ke mana, kapan, dengan siapa.',
    simple: 'Preposition adalah "kata jembatan" yang menghubungkan kata benda dengan kata lain. Ditempatinya, waktunya, atau caranya.',
    eli10: '"Buku **di atas** meja." "Di atas" = preposition. Dia nunjukin di mana buku itu berada. Tanpa preposition, buku nggak ada hubungannya dengan meja.',
    meaning: 'Kata pendek yang menunjukkan hubungan antara kata benda, pronoun, atau gerund dengan kata lain: tempat, waktu, arah, cara, dan lain-lain.',
    when: 'Hampir selalu di belakang kata benda: "in the room", "on the table", "at school", "for you", "with my friend".',
    why: 'Bahasa Inggris butuh preposition untuk grammarnya: kalau nggak ada "in", "on", "at" — posisinya jadi tidak lengkap.',
    whyNot: [
      { t: 'Adverb', d: '"He works **hard**" (tanpa object) = adverb. "He works **at home**" (terhubung dengan "home") = preposition.' },
      { t: 'Conjunction', d: 'Conjunction menghubungkan klausa: "**because** I was tired". Preposition menghubungkan kata: "**because of** the rain".' }
    ],
    formula: 'in | on | at | to | for | from | with | by | about | of',
    examples: [
      'The book is **in** the bag.',
      'The key is **on** the table.',
      'She lives **at** number 10.',
      'I went **to** the market.',
      'He came **from** the office.'
    ],
    mistakes: [
      { wrong: 'I go to school by foot every day.', right: 'I go to school on foot every day.', why: '"on foot" = dengan berjalan kaki (fixed expression). "by foot" salah. Tapi "by car / by bus / by train" benar.' }
    ],
    clues: ['Selalu diikuti kata benda (atau -ing / pronoun)', 'Bahasa Indonesia belum punya padanan persis — lebih baik dihafal per usage'],
    practice: [
      { q: 'Isi titik: "The meeting is ___ 9 a.m. ___ Monday."', opts: ['in / in', 'at / on', 'on / at'], ans: 1, explain: 'Jam → at (at 9 a.m.), hari → on (on Monday). Pola umum: at + jam, on + hari, in + bulan/tahun.' }
    ],
    tips: 'Tiga preposition paling penting: at = titik/tempat spesifik kecil, on = permukaan/shari, in = area/rumah/bulan.'
  });

  P({
    id: 'conjunction', step: 2, level: 'Dasar', cat: 'Parts of Speech',
    title: 'Conjunction — kata penghubung',
    hook: 'Menyambung kalimat & kata.',
    simple: 'Conjunction adalah kata penghubung: menyambung kata dengan kata, atau klausa dengan klausa.',
    eli10: '"Ayo" = join. "Ayo" nyambungin anak-anak supaya main sama-sama. "And" juga nyambungin: "I have rice **and** fish".',
    meaning: 'Kata yang menyambung bagian-bagian kalimat supaya hubungan antar bagian jelas: addition, contrast, cause, result, atau pilihan.',
    when: 'Penyambung klausa: "I stayed home **because** it rained." Penyambung kata: "rice **and** fish."',
    why: 'Tanpa conjunction, kalimatnya jadi dua bagian terpisah yang belum nyambung.',
    whyNot: [
      { t: 'Preposition', d: '"because I was tired" = conjunction (menyambung klausa). "because of the rain" = prepositional phrase.' },
      { t: 'Relative pronoun', d: '"The man **who** called you is here" — "who" menyambung klausa ke kata benda, tapi fungsinya sedikit berbeda dari conjunction biasa.' }
    ],
    formula: 'Coordinating: for, and, nor, but, or, yet, so (FANBOYS)',
    examples: [
      'I want rice **and** fish. (kata + kata)',
      'I came in **but** nobody was home. (klausa + klausa, berlawanan)',
      'It was raining, **so** I stayed home. (akibat)',
      '**Although** it rained, we went out. (penghubung bertentangan)'
    ],
    mistakes: [
      { wrong: 'Because I was tired, so I slept early.', right: 'Because I was tired, I slept early.', why: 'Jangan pakai "because" DAN "so" sekaligus untuk hal yang sama. Pilih salah satu.' }
    ],
    clues: ['FANBOYS: for, and, nor, but, or, yet, so', 'Subordinating: because, although, while, if, when, since, unless, until, after, before'],
    practice: [
      { q: 'Mana conjunction yang tepat? "It was late, ___ I went home."', opts: ['because', 'so', 'or'], ans: 1, explain: '"It was late, so I went home" = hubungan AKIBAT. "Because" menghubungkan dua klausa sebagai subordinates, "or" berarti "atau".' }
    ],
    tips: 'Coordinating = penghubung sama besar. Subordinating = menyatukan klausa yang bergantung pada klausa lain.'
  });

  P({
    id: 'article', step: 2, level: 'Dasar', cat: 'Parts of Speech',
    title: 'Article — a, an, the',
    hook: 'Penanda "sebuah" atau "yang itu".',
    simple: 'Article cuma 3: a, an, the. Dua di antaranya sudah sering kamu pakai; satu lagi sering dilupakan — the.',
    eli10: '"Saya lihat **sebuah** kucing." = a. "**Kucing itu** lucu." = the. Bedanya: yang pertama baru pertama kali disebut, yang kedua kita sudah tahu yang mana.',
    meaning: 'Kata yang wajib kita pakai SEBELUM kata benda tunggal untuk menunjukkan apakah bendanya sudah spesifik atau belum dalam percakapan.',
    when: 'Hampir setiap kali menyebut kata benda tunggal countable: "**a** dog", "**the** dog", "**an** apple", "**the** apple".',
    why: 'Tanpa article, kalimatmu terdengar aneh dan kasar bagi native speaker. Ini salah satu hal yang paling sering dinilai dalam penilaian writing.',
    whyNot: [
      { t: 'Zero article', d: 'Plural dan uncountable sering tanpa article: "dogs are cute", "water is important". Ini juga aturan, bukan kelalaian.' },
      { t: 'Determiner lain', d: 'my, your, his, this, that, each, every — ini juga determiner, cuma bukan article. Total satu kata saja: "**the** dog" bukan "the my dog".' }
    ],
    formula: 'a / an + countable noun singular | the + known noun | no article + plural/uncountable',
    examples: [
      'I saw **a** dog. (**a** = satu, belum spesifik)',
      '**The** dog was very cute. (**the** = kita tahu dog yang mana)',
      'She is **an** artist. (a → an sebelum vokal)',
      'I like **the** music you played.'
    ],
    mistakes: [
      { wrong: 'I have a book. The book is interesting.', right: 'Benar — begini yang benar.', why: 'Ini contoh paling bagus: kali pertama "a", setelah itu "the" karena sudah tahu buku yang mana. Kalau ada yang salah di sini, biasanya "a" untuk yang kedua.' },
      { wrong: 'I am student.', right: 'I am a student.', why: 'Kata benda tunggal countable butuh article: "a student".' }
    ],
    clues: ['a + bunyi konsonan: a book, a cat', 'an + bunyi vokal: an apple, an hour (h bukan bunyinya)', 'the kalau bendanya sudah dikenal atau unik (the sun, the internet)'],
    practice: [
      { q: 'Pilih yang benar: "She plays ___ piano every day."', opts: ['a', 'the', '—'], ans: 1, explain: '"Piano" di sini alat musik yang spesifik (yang dia main setiap hari, piano itu) → "the". Bandingkan: "She plays a piano" = dia punya piano sendiri.' }
    ],
    tips: 'Rule cepat untuk no-article: plural (books), uncountable (rice), nama sendiri (Jakarta, Budi), hari (Monday, bukan hari kerja).'
  });

  P({
    id: 'determiner', step: 2, level: 'Dasar', cat: 'Parts of Speech',
    title: 'Determiner — penentu kata benda',
    hook: 'Article + demonstratif + possessive +-quantifier.',
    simple: 'Determiner adalah kata yang "menentukan" kata benda: hilangin article-nya, kalimatnya masih jelas, tapi dua determiner sekaligus tetap salah ("the my book").',
    eli10: 'SEBELUM kata benda, kamu cuma boleh pakai satu "penentu": a, the, my, this, two, each... Kalau sudah pakai "the", nggak boleh tambah "my" juga.',
    meaning: 'Kelompok kata yang wajib mendahului kata benda dalam frasa kata benda: article (a/the), demonstrative (this/that/these/those), possessive (my/his), quantifier (some/many/two/each/every).',
    when: 'Setiap kali membentuk noun phrase: "the book", "my book", "this book", "two books", "every book".',
    why: 'Aturan "satu kata saja" ini sering kelihatan aneh bagi pemula yang bahasanyanya lebih fleksibel. Tapi ini yang bikin kalimatmu benar.',
    whyNot: [
      { t: 'Article', d: 'Article (a/the) hanyalah salah satu jenis determiner. "A" dan "the" nggak bisa dipakai bersamaan.' },
      { t: 'Possessive pronoun vs possessive adjective', d: '"This is **my** book" (my = determiner) vs "The book is **mine**" (mine = pronoun, berdiri sendiri).' }
    ],
    formula: 'Determiner + (adjective) + noun',
    examples: [
      '**a** small **boy**',
      '**the** red **car**',
      '**my** old **house**',
      '**three** big **cats**',
      '**these** new **phones**'
    ],
    mistakes: [
      { wrong: 'I like the my new job.', right: 'I like my new job.', why: 'Dua determiner dalam satu frasa: "the" + "my". Pilih salah satu. "the" dipakai kalau pembaca sudah tahu yang mana.' },
      { wrong: 'He is a my friend.', right: 'He is my friend.', why: 'Sama seperti di atas — "a" dan "my" nggak bisa bareng.' }
    ],
    clues: ['Quantifier: some, any, much, many, few, little, several, all, both, each, every, no'],
    practice: [
      { q: 'Mana yang BENAR?', opts: ['a my friend', 'my friend', 'the my friend'], ans: 1, explain: 'Cuma satu determiner yang boleh: "my". "My friend" sudah cukup jelas.' }
    ],
    tips: '"Each" dan "every" = satu per satu. "Some" untuk positif, "any" untuk negatif/tanya.'
  });

  /* ---------------- STEP 3 — LEARN SENTENCE STRUCTURE ---------------- */

  P({
    id: 'sv', step: 3, level: 'Dasar', cat: 'Sentence Structure',
    title: 'Pola 1 — Subject + Verb',
    hook: 'Polanya paling sederhana.',
    simple: 'Cuma subjek + kata kerja. Nggak ada objek. Sering dipakai untuk hal yang sudah jelas sendiri.',
    eli10: '"Dia tidur." Simple banget. Siapa? Dia. Ngapain? Tidur. Selesai. Nggak perlu objek.',
    meaning: 'Kalimat inti yang subjek dan kata kerjanya sudah jelas tanpa pelengkap. Sering dipakai untuk aksi yang objeknya sudah jelas dari konteks, atau untuk deskripsi.',
    when: 'Untuk kebiasaan/fakta: "Water boils at 100°C." Untuk aksi yang objeknya sudah jelas dari konteks: "She smiled."',
    why: 'Mulai dari sini. Kalau kalimatmu bisa dibuat jadi S+V dan maknanya sudah cukup, jangan tambah kata lain.',
    whyNot: [
      { t: 'S + V + O', d: '"She eats" (kalau belum jelas) lebih baik "She eats rice". Kalau nggak ada konteks, tambah object supaya kalimatnya lengkap.' },
      { t: 'S + Linking V + C', d: '"She is" belum bermakna. "She is happy" baru jelas — needs complement.' }
    ],
    formula: 'S + V',
    examples: [
      'I work.',
      'Birds fly.',
      'The baby slept.',
      'My phone rang.'
    ],
    mistakes: [
      { wrong: 'I very tired.', right: 'I am very tired.', why: 'Butuh linking verb "is/am/are" untuk menjelaskan keadaan. "Very tired" butuh sesuatu yang bilang "dia ada dalam keadaan itu".' }
    ],
    clues: ['Verba-nya sering intransitif (tak butuh object)', 'Sering muncul di kalimat umum: "It rains", "The sun rises"'],
    practice: [
      { q: 'Kalimat mana yang pola S + V?', opts: ['She is happy.', 'She smiles.', 'She ate rice.'], ans: 1, explain: '"She smiles" cuma punya subjek + verb. Opsi 1 punya tambahan pelengkap, opsi 3 punya objek.' }
    ],
    tips: 'Tidak selalu perlu objek kalau maknanya sudah jelas dari situasinya.'
  });

  P({
    id: 'svo', step: 3, level: 'Dasar', cat: 'Sentence Structure',
    title: 'Pola 2 — Subject + Verb + Object',
    hook: 'Subjek melakukan, objek kena.',
    simple: 'Subjek + kata kerja + objek. Ini pola paling sering dipakai sehari-hari.',
    eli10: '"Dia makan nasi." Kalau bikin kalimat mainan, tinggal three pieces: siapa, melakukan apa, apa yang kena aksi.',
    meaning: 'Struktur paling umum di bahasa Inggris: pelaku, aksinya, dan target aksinya.',
    when: 'Hampir setiap kali kamu},{\parameter mau=} bilang orang melakukan sesuatu ke sesuatu: "I bought milk", "She reads books", "He kicked the ball".',
    why: 'Object bikin kalimat jadi informatif. Tanpa object, pembaca harus menebak-tebak bendanya.',
    whyNot: [
      { t: 'S + V + C', d: '"She is happy" (bukan SVO) — "happy" melengkap subjek, bukan target aksi. Tes: ganti dengan "apa?" — "She happy apa?" nggak nyambung.' },
      { t: 'S + V', d: '"She ate" → belum jelas. Tambahkan object: "She ate rice".' }
    ],
    formula: 'S + V (transitif) + O',
    examples: [
      'I eat rice every day.',
      'He bought a new phone.',
      'The dog chased the cat.',
      'We watched a movie last night.'
    ],
    mistakes: [
      { wrong: 'I like very the food.', right: 'I like the food very much.', why: 'Object harus langsung setelah verb. "Very much" adalah adverb phrase dan diletakkan setelah object.' }
    ],
    clues: ['Kata tanya: "S V apa?" → jawabannya O', 'Verba-nya bisa di-/-ing-kan: "She is buying milk"'],
    practice: [
      { q: 'Mana contoh SVO?', opts: ['The cat sleeps.', 'The cat is sleeping.', 'The cat caught a mouse.'], ans: 2, explain: 'Opsi 3: subjek (the cat) + verb (caught) + object (a mouse). Opsi 1 cuma S+V, opsi 2 S+V+C (pelengkap "sleeping").' }
    ],
    tips: 'Perhatikan: present continuous "is + V-ing" itu MASIH bagian verb, bukan pelengkap. Jadi "She is sleeping" tetap S + V.'
  });

  P({
    id: 'svc', step: 3, level: 'Dasar', cat: 'Sentence Structure',
    title: 'Pola 3 — Subject + Verb + Complement',
    hook: 'Kata kerja yang menjelaskan, bukan menjelaskan (=).',
    simple: 'Verba-nya bukan kata kerja aksi, tapi kata kerja yang menjelaskan keadaan. Setelahnya ada pelengkap.',
    eli10: '"Dia itu dokter." bukan "Dia melakukan dokter". Kata kerjanya cuma "menjelaskan" — itu tugasnya.',
    meaning: 'Pola di mana kata kerja utama bersifat menautkan (linking) — is, are, was, seem, become, look, feel, sound, taste, stay. Yang berikutnya melengkapi subjek.',
    when: 'Untuk menjelaskan identitas, keadaan, atau rasa: "He is a pilot", "The soup tastes great", "She looks tired".',
    why: 'Membedakan ini mencegah kesalahan besar: banyak pemula memakai "be" untuk aksi ("I am go" — salah) atau memakai kata kerja aksi tanpa objek.',
    whyNot: [
      { t: 'S + V + O', d: '"She is a doctor" → "doctor" = complement. "She eats an apple" → "an apple" = object. Tes cepat: apakah frasa itu menjawab "S itu apa?" (complement) atau "S melakukan apa terhadap apa?" (object)?' },
      { t: 'Kata kerja intransitif', d: '"She runs" (S+V) — nggak ada apa-apanya. "She runs fast" → "fast" jadi adverb, bukan complement.' }
    ],
    formula: 'S + linking verb + C (adjective / noun / prepositional phrase)',
    examples: [
      'She is a teacher.',
      'The room was very clean.',
      'It tastes delicious.',
      'He became famous suddenly.'
    ],
    mistakes: [
      { wrong: 'The weather is rain today.', right: 'It is rainy today.', why: 'Setelah "is", kata yang paling tepat yang masuk adalah adjective ("rainy"), bukan kata kerja. Kalau mau pakai kata kerja, bikin klausa baru: "It is raining."' }
    ],
    clues: ['Kata kerja: be, seem, become, look, feel, sound, taste, appear, remain, stay, smell'],
    practice: [
      { q: 'Mana contoh S + V + C?', opts: ['He runs fast.', 'He is very tired.', 'He bought a car.'], ans: 1, explain: '"is" = linking verb, "very tired" = pelengkap. Opsi 1 pelengkapnya adverb, opsi 3 punya object.' }
    ],
    tips: 'Trik cepat: ganti "is" dengan "= (sama dengan)". "She is a doctor" → "she = a doctor" masuk akal. "She is running" → "she = running" nggak masuk akal.'
  });

  P({
    id: 'sv-agreement', step: 3, level: 'Menengah', cat: 'Sentence Structure',
    title: 'Subject–Verb Agreement — kenapa ada "s"?',
    hook: 'Bentuk kata kerja ngikut subjek.',
    simple: 'Aturan: kalau subjeknya satu (tunggal), verb present simple-nya dapat tambahan -s/-es. Kalau jamak, nggak dapat.',
    eli10: 'Bayangkan satu orang versus banyak orang. Satu orang = satu kalimat → pakai bentuk "-s" biar jelas itu cuma satu. Nggak ada aturan ilmiah, cuma kebiasaan.',
    meaning: 'Verba-nya harus cocok dengan bentuk subjek (tunggal atau jamak) di present simple. Ini berlaku di kalimat positif, negatif, dan tanya.',
    when: 'Setiap kali kamu pakai present simple: "I work / She works / They work / She doesn\'t work / Does she work?"',
    why: 'Ini masalah nomor satu pemula. Karena subjek menentukan bentuk verb, dan bentuk verb menentukan tense — tiga hal ini terikat.',
    whyNot: [
      { t: 'Kata ganti yang kelihatan jamak', d: '"Everyone", "each", "everybody" tapi bentuknya TUNGGAL: "Everyone is happy."' },
      { t: 'Kata benda jamak yang dekat', d: '"The news **is** good." Kata "news" berakhiran -s tapi bentuknya tunggal. "The clothes **are** cheap" — jamak, pakai are.' }
    ],
    formula: 'I/you/we/they + V | he/she/it + V-s | ? + do/does + V (tanpa -s!)',
    examples: [
      'I work here. (saya)',
      'He works here. (dia)',
      'They work here. (mereka)',
      'She doesn\'t work here. (ingat: does + V tanpa -s)',
      'Does she work here? (sama)'
    ],
    mistakes: [
      { wrong: 'He work every day.', right: 'He works every day.', why: 'Subjek "he" (tunggal) → kerja + s = works.' },
      { wrong: 'Does she works here?', right: 'Does she work here?', why: 'Begitu ada "does", seluruh kata kerja itu masuk ke bentuk DASAR. Tugas tambah -s diambil alih oleh "does", jadi "works" jadi dobel dan salah.' }
    ],
    clues: ['Subjek tunggal pakai: -s (works), -es (goes, watches), -ies (studies)', 'Semua jamak: I, you, we, they + V (tanpa -s)'],
    practice: [
      { q: 'Mana yang benar?', opts: ['She don\'t like coffee.', 'She doesn\'t likes coffee.', 'She doesn\'t like coffee.'], ans: 2, explain: 'Subjek "she" → pakai "doesn\'t". Setelah "doesn\'t", verb kembali ke bentuk DASAR: "like" (bukan "likes").' }
    ],
    tips: 'Kunci besarnya: "does" = tombol RESET. Begitu kamu menulis "does/did", seluruh kata kerja ditense itu wajib bentuk dasar.'
  });

  P({
    id: 'singular-plural', step: 3, level: 'Dasar', cat: 'Sentence Structure',
    title: 'Singular & Plural (tunggal & jamak)',
    hook: '-s itu bentuk jamak, bukan tense.',
    simple: 'Biasanya noun jamak dapat tambahan -s. Tapi ada banyak pengecualian yang harus dihafal sedikit.',
    eli10: 'Satu bola = ball. Banyak bola = balls. Tapi satu daun = leaf, banyak daun = leaves. Bahasa Inggris tidak selalu memakai aturan, ada juga yang bentuknya khusus.',
    meaning: 'Perubahan bentuk kata benda untuk menunjukkan jumlah: satu (singular) atau lebih dari satu (plural).',
    when: 'Setiap kali menyebut jumlah benda: "one book" vs "three books", "He is a student" vs "They are students".',
    why: 'Jumlah = langsung memengaruhi bentuk kata kerja ("he works" vs "they work") dan kata bantu ("is" vs "are").',
    whyNot: [
      { t: 'Uncountable', d: '"water", "rice", "information" nggak punya bentuk jamak. Nggak bisa bilang "waters" untuk makna umum — pakai "a lot of water" atau tambah pengukur.' },
      { t: 'Bentuk tidak beraturan', d: 'man → men, child → children, foot → feet, tooth → teeth, mouse → mice, person → people.' }
    ],
    formula: 'Umum: +s | Akhiran -s, -sh, -ch, -x, -o: +es | Consonant + y: -y → ies | Tidak beraturan: hafalin',
    examples: [
      'book → books',
      'watch → watches, box → boxes',
      'city → cities, baby → babies',
      'man → men, child → children, person → people'
    ],
    mistakes: [
      { wrong: 'Two childs are playing.', right: 'Two children are playing.', why: '"Child" bentuk jamaknya "children", bukan "childs".' },
      { wrong: 'Many informations are available.', right: 'Much information is available.', why: '"Information" uncountable → pakai "much", kata kerjanya tunggal "is".' }
    ],
    clues: ['Uncountable: rice, water, milk, money, information, advice, furniture, news', 'Bentuknya tunggal tapi berakhiran -s: news, mathematics, physics'],
    practice: [
      { q: 'Mana yang benar?', opts: ['two childs', 'two children', 'two childrens'], ans: 1, explain: '"Child" → "children". Nggak ada bentuk "childs" maupun "childrens" dalam bahasa Inggris.' }
    ],
    tips: 'Selalu cek: kata jamak → kata kerja harus ikut berubah (are/have/do, bukan is/has/does).'
  });

  P({
    id: 'countable', step: 3, level: 'Dasar', cat: 'Sentence Structure',
    title: 'Countable & Uncountable Nouns',
    hook: 'Bisa dihitung (apel) atau nggak (beras).',
    simple: 'Countable bisa dihitung dengan angka: "two apples". Uncountable nggak: "two rice" salah. Nggak ada "s"-nya.',
    eli10: 'Apel bisa ditaruh di keranjang: 1, 2, 3. Beras nggak bisa dihitung per butir, jadi dihitung dengan "a lot of rice" atau "two kilos of rice".',
    meaning: 'Noun yang bisa dihitung (dengan angka) dan noun yang tidak bisa dihitung. Uncountable biasanya diukur dengan unit: a kilo of rice, a glass of water, a piece of advice.',
    when: 'Setiap kali menyebut bahan, makanan, atau hal yang abstrak: "some water", "much money", "a piece of furniture".',
    why: 'Ini yang bikin kesalahan: "many water" (salah, harus "much water") dan "many waters" (justru nggak ada bentuk jamaknya).',
    whyNot: [
      { t: 'Countable', d: '"How many books?" (many + countable) vs "How much water?" (much + uncountable).' },
      { t: 'Solusinya: tambah pengukur', d: '"three coffees" (bisa, pakai "coffee" sebagai frasa), atau "a piece of advice" untuk hal abstrak.' }
    ],
    formula: 'Countable: many / a few / a lot of | Uncountable: much / a little / a lot of',
    examples: [
      'I have **many** books. (countable)',
      'I have **much** money. (uncountable)',
      'I have **a little** sugar left. (uncountable, sedikit)',
      'I have **a few** friends. (countable, sedikit)'
    ],
    mistakes: [
      { wrong: 'How much water do you drink?', right: 'How much water do you drink?', why: 'Ini sudah benar! Contoh kesalahannya: "How many water?" (salah) dan "How many rices?" (salah).' },
      { wrong: 'I need many informations about this.', right: 'I need a lot of information about this.', why: '"Information" uncountable → pakai "a lot of / much", bukan "many".' }
    ],
    clues: ['Uncountable: rice, water, milk, bread, money, time, information, advice, furniture, luggage, news, music, traffic'],
    practice: [
      { q: 'Mana yang benar?', opts: ['How many rice do you eat?', 'How much rice do you eat?', 'How many rices do you eat?'], ans: 1, explain: '"Rice" uncountable → "how much", bukan "how many". Dan bentuk jamaknya nggak ada.' }
    ],
    tips: 'Catatan: beberapa uncountable bisa dihitung dengan "of": a piece of advice, a glass of milk, a kilo of rice.'
  });

  P({
    id: 'there-is', step: 3, level: 'Dasar', cat: 'Sentence Structure',
    title: 'There is / There are — "ada / nggak ada"',
    hook: 'Cara mengatakan "ada" dalam bahasa Inggris.',
    simple: 'Structure "there" bukan untuk menunjukkan tempat, tapi untuk mengatakan "ada" atau "tidak ada".',
    eli10: 'Kalau mau bilang "Ada kucing di kamar" dalam bahasa Inggris, kamu nggak bisa bilang "In the room have cat". Kamu bilang "There is a cat in the room". "There" = "ada".',
    meaning: 'Pola untuk menyatakan keberadaan sesuatu di suatu tempat. "There" di sini adalah kata bantu, bukan kata ganti untuk tempat.',
    when: 'Saat menyatakan ada/tidak ada: "There are two toilets downstairs." "There isn\'t any milk in the fridge."',
    why: 'Bahasa Inggris tidak punya kata "ada" yang berdiri sendiri. "There is/are" adalah cara tercepat untuk menyebut keberadaan.',
    whyNot: [
      { t: 'Have/Has', d: '"I have a car" = saya yang punya. "There is a car outside" = mobil itu ADA di sana, bukan milik saya.' },
      { t: 'This is', d: '"This is my car" (dekat, terarah) vs "There is a car" (ada, tidak perlu terarah).' }
    ],
    formula: 'There is + singular / uncountable noun | There are + plural noun',
    examples: [
      'There is **a** book on the table.',
      'There **are** three books on the table.',
      'There is some water in the glass.',
      'There aren\'t any problems.'
    ],
    mistakes: [
      { wrong: 'There have a problem.', right: 'There is a problem.', why: 'Setelah "there" tidak pakai "have". Bentuknya: "There is / There are / There was / There were".' },
      { wrong: 'There is many people here.', right: 'There are many people here.', why: '"Many people" jamak → "are". "Is" untuk tunggal/uncountable.' }
    ],
    clues: ['Verba-nya harus cocok dengan kata bendanya: is + satu, are + banyak'],
    practice: [
      { q: 'Mana yang benar?', opts: ['There is two people in the room.', 'There are two people in the room.', 'There are two person in the room.'], ans: 1, explain: '"two people" jamak → "are". Dan "people" sudah bentuk jamak dari "person", nggak ditambah "s".' }
    ],
    tips: 'Pertanyaan: "Is there...?" / "Are there...?" — negatif: "There isn\'t / aren\'t".'
  });

  P({
    id: 'this-that', step: 3, level: 'Dasar', cat: 'Sentence Structure',
    title: 'This / That / These / Those',
    hook: 'Ini / itu / ini (jamak) / itu (jamak).',
    simple: 'Menunjukkan objek atau orang berdasarkan jarak: dekat (this/these) atau jauh (that/those).',
    eli10: 'Tunjuk dengan jarinya: "ini" (dekat, satu), "itu" (jauh, satu). Kalau banyak: "ini" (dekat, jamak), "itu" (jauh, jamak).',
    meaning: 'Demonstratif (penunjuk) untuk orang/barang. Determiner kalau langsung ada kata bendanya ("this book"), pronoun kalau berdiri sendiri ("This is my book").',
    when: 'Saat menunjuk sesuatu: "This is my sister." "Those shoes are nice."',
    why: 'Dengan demonstratif, kamu bisa mengganti kata benda sementara-tetap menunjuk yang sama: "That book is mine. **That** is expensive."',
    whyNot: [
      { t: 'Article', d: '"the" menunjuk sesuatu yang sudah spesifik karena konteks; "this/that" menunjuk DAN menunjukkan letaknya (dekat/jauh).' },
      { t: 'Pronoun', d: '"This is my book" (determiner, ada kata benda) vs "**This** is mine" (pronoun, berdiri sendiri).' }
    ],
    formula: 'this + singular (dekat) | that + singular (jauh) | these + plural (dekat) | those + plural (jauh)',
    examples: [
      '**This** is my brother.',
      '**That** is your car.',
      '**These** are my parents.',
      '**Those** are nice shoes.'
    ],
    mistakes: [
      { wrong: 'This my book is interesting.', right: 'This book is interesting.', why: '"This" sudah berupa determiner, jadi TIDAK perlu article "the" lagi: "this book", bukan "this the book".' }
    ],
    clues: ['Singular: this / that | Plural: these / those'],
    practice: [
      { q: 'Mana yang benar? (menerangkan dua buku di depan kita)', opts: ['That books are new.', 'Those books are new.', 'This books are new.'], ans: 1, explain: ' Jamak + jauh = "those". "This books" salah karena "this" hanya untuk tunggal. Karena ada kata "books" dan kita tidak melihat "these", "those" yang tepat secara makna.' }
    ],
    tips: 'Ingat: THOSE = yang itu (jauh), THESE = yang ini (dekat, jamak).'
  });

  P({
    id: 'have-has', step: 3, level: 'Dasar', cat: 'Sentence Structure',
    title: 'Have / Has — punya atau sudah pernah',
    hook: 'Satu kata, tiga arti: punya, makan, dan sudah pernah.',
    simple: '"Have" punya dua wajah: berarti "punya" (present) dan "sudah pernah" (perfect).',
    eli10: '"I have a car" = saya punya mobil. "I have been to Bali" = saya sudah pernah ke Bali. Kata yang sama, artinya beda jauh.',
    meaning: 'Verba "have/has/had" yang berarti (1) memiliki, (2) makan/minum, (3) dalam present perfect: sudah punya pengalaman.',
    when: '"Have a car", "have breakfast", "have a look", "have finished", "have been".',
    why: 'Satu kata kerja ini dipakai dalam banyak konteks berbeda. Kalau kamu paham bedanya, kamu otomatis paham kapan pakai present perfect.',
    whyNot: [
      { t: 'Possessive', d: '"He has a car" = dia punya. "His car is red" = mobilnya. Ini dua cara berbeda untuk hal yang sama.' },
      { t: 'There is', d: '"She has a car" (dia yang punya) vs "There is a car outside" (ada di sana).' }
    ],
    formula: 'have/has + kata benda | have/has + past participle (V3)',
    examples: [
      'I **have** a brother. (punya)',
      'She **has** finished her work. (sudah selesai)',
      'We **have been** friends for ten years. (sudah selama, masih berlaku)',
      'Have a nice day! (dalam frasa: "have a good time")'
    ],
    mistakes: [
      { wrong: 'I have went there.', right: 'I have gone there.', why: 'Setelah "have" wajib V3: gone, bukan went. "Went" itu V2 (untuk past simple).' },
      { wrong: 'She have a car.', right: 'She has a car.', why: 'Subjek "she" → "has", bukan "have".' }
    ],
    clues: ['Ungkapan umum: have a look, have breakfast, have a good time, have fun, have a problem'],
    practice: [
      { q: 'Pilih bentuk benar: "___ (she) ___ (already/eat) lunch."', opts: ['has / already ate', 'has / already eaten', 'have / already eaten'], ans: 1, explain: 'Subjek "she" → "has". Present perfect butuh V3: "eaten". "Ate" itu past simple (V2), bukan V3.' }
    ],
    tips: '"Have" untuk jamak: "They have", "We have", "You have". "Has" hanya untuk he/she/it dan "have" untuk I/you/we/they + "to have".'
  });

  P({
    id: 'do-does', step: 3, level: 'Menengah', cat: 'Sentence Structure',
    title: 'Do / Does — tanya, negatif, penekanan',
    hook: 'Kata bantu untuk tanya & negatif.',
    simple: 'Do dan does dipakai untuk membuat kalimat tanya dan kalimat negatif. Sering muncul tiba-tiba di depan kata kerja.',
    eli10: '"You eat rice." Tanya: "**Do** you eat rice?" Negatif: "**Do** you**n\'t** eat rice?" Kata "do" masuk seperti alat pembuka pintu. Tapi kata-kata lainnya nggak ikut berubah.',
    meaning: 'Auxiliary verb yang masuk saat: (1) bikin pertanyaan, (2) bikin negatif, (3) untuk memberi penekanan.',
    when: 'Present simple — saat kita perlu tanya/negatif tanpa memakai "be" atau kata bantu lain.',
    why: 'Present simple punya bentuk khusus untuk tanya dan negatif. "Do/does" yang membentuknya, dan efeknya: kata kerja utama kembali ke bentuk DASAR.',
    whyNot: [
      { t: 'Kata kerja utama', d: '"She **does** her homework" (mengerjakan) vs "She **does** her homework?" (tanya). Konteks yang membedakan — posisi di kalimat.' },
      { t: 'No need to add do', d: 'Kamu tidak boleh menambahkan "do" kalau sudah ada kata bantu lain: "She **is** working" (bukan "She is do working"), "She **has** finished" (bukan "has do finished").' }
    ],
    formula: 'Do/Does + S + V(dasar) | S + do/does + not + V(dasar) | S + do/does + V(dasar) + ?',
    examples: [
      '**Do** you like coffee?',
      'She **doesn\'t** like coffee.',
      '**Does** he work here?',
      'They **do** want to help.',
      '**Do** you know what time it is?'
    ],
    mistakes: [
      { wrong: '**Do** she like coffee?', right: 'Does she like coffee?', why: 'Subjek "she" → pakai "does".' },
      { wrong: 'She doesn\'t likes coffee.', right: 'She doesn\'t like coffee.', why: 'Setelah "doesn\'t", kata kerja HARUS bentuk dasar: "like".' }
    ],
    clues: ['Subjek "you/they" pakai "do", subjek "he/she/it" pakai "does"', 'Bentuk negativ: don\'t / doesn\'t / didn\'t'],
    practice: [
      { q: 'Mana yang benar?', opts: ['Does he plays soccer?', 'Does he play soccer?', 'Do he play soccer?'], ans: 1, explain: 'Subjek "he" → "does". Setelah "does", verb bentuk dasar: "play" (bukan "plays").' }
    ],
    tips: 'Trik: lihat kata kerja. Kalau di situ sudah ada "s"-nya (plays, works, likes), biasanya kalimat itu TIDAK butuh "do/does".'
  });

  /* ---------------- STEP 6 — QUESTIONS & NEGATIVES ---------------- */

  P({
    id: 'negative', step: 6, level: 'Dasar', cat: 'Sentence Structure',
    title: 'Kalimat Negatif — "nggak / tidak"',
    hook: 'Cara bilang "nggak" dan "tidak pernah".',
    simple: 'Untuk membuat kalimat negatif, cukup tambahkan "not" atau kepanjangan "don\'t / doesn\'t / didn\'t / won\'t / can\'t".',
    eli10: 'Kalimat positif: "I like coffee." Negatif: "I don\'t like coffee." Tinggal tambahkan "don\'t" di depan kata kerja.',
    meaning: 'Cara menyatakan kebalikan dari kalimat positif. Bentuknya: kata bantu + not, atau kontrak singkat (don\'t, doesn\'t, isn\'t, can\'t, won\'t).',
    when: 'Setiap kali menolak, tidak punya, atau menyatakan sebaliknya: "I don\'t know", "She isn\'t here", "They didn\'t come".',
    why: 'Menyusun kalimat negatif butuh tahu kata kerja mana yang dipakai sebagai pembantu. Salah pilih, kalimatnya langsung aneh.',
    whyNot: [
      { t: 'Hanya "not"', d: 'Bisa: "I do not know" (formal). Tapi sehari-hari orang lebih sering pakai kontrak: "I don\'t know".' },
      { t: 'Kata bantu yang salah', d: '"I am not like coffee" salah. Karena "like" bukan linking verb, harus pakai "don\'t": "I don\'t like coffee".' }
    ],
    formula: 'S + do/does/did + not + V | S + be/am/is/are + not | S + have/has/had + not | S + modal + not',
    examples: [
      'I **don\'t** eat meat.',
      'She **isn\'t** ready yet.',
      'They **haven\'t** arrived.',
      'He **can\'t** come tomorrow.',
      'I **didn\'t** know about that.'
    ],
    mistakes: [
      { wrong: 'I don\'t know nothing.', right: 'I know nothing. / I don\'t know anything.', why: '"Don\'t + nothing" = dua negatif, secara logika jadi positif. Pilih salah satu: "I don\'t know anything" atau "I know nothing".' }
    ],
    clues: ['Kata bantu yang sering: be, have, do, will, can, should, must, would, could', 'Letakkan "not" SESUDAH kata bantu, sebelum kata kerja utama'],
    practice: [
      { q: 'Mana kalimat negatif yang benar?', opts: ['I am not like fish.', 'I don\'t like fish.', 'I not like fish.'], ans: 1, explain: '"Like" bukan linking verb, jadi butuh "do/does" untuk negatif: "don\'t like". "Am not like" salah.' }
    ],
    tips: 'Susun dari belakang: dulu pikirkan bentuk kata kerja (eat/ate/eaten), baru pilih kata bantu (do/did/has).'
  });

  P({
    id: 'question', step: 6, level: 'Dasar', cat: 'Sentence Structure',
    title: 'Kalimat Tanya — Yes/No & Wh-',
    hook: 'Tanya = turunkan urutan kata.',
    simple: 'Untuk tanya, kata kerja naik ke depan (setelah kata bantu), dan subjek mengalah.',
    eli10: '"You are happy" → tanya: "**Are** you happy?" Verba naik duluan, kamu turun ke urutan kedua.',
    meaning: 'Dua jenis: Yes/No question (apakah...?) dan Wh- question (siapa/apa/kapan/di mana/mengapa/how). Keduanya membalik urutan S dan V.',
    when: 'Sehari-hari: "Do you like it?", "Where are you going?", "Why didn\'t you tell me?"',
    why: 'Kalau kamu paham aturan "verb naik", semua pola tanya jadi sederhana: WH + (does) + S + (V)? atau (Do) + S + V?',
    whyNot: [
      { t: 'Pernyataan', d: '"You are happy." (kalimat) vs "Are you happy?" (tanya). Perbedaannya bukan kata-katanya, tapi URUTAN dan tanda tanya.' },
      { t: 'Question tag', d: '"You are happy, aren\'t you?" — ini bentuk singkat untuk minta konfirmasi, beda lagi.' }
    ],
    formula: 'Yes/No: (Do/Does/Is) + S + V...? | Wh: Wh + (do/does) + S + V ...?',
    examples: [
      '**Do** you work here?',
      '**Is** she your teacher?',
      '**Where** do you live?',
      '**What** are you doing?',
      '**Why** did you leave?'
    ],
    mistakes: [
      { wrong: 'Where you live?', right: 'Where do you live?', why: 'Wh-question butuh kata bantu: "do/does/did". "Where you live" bukan kalimat.' },
      { wrong: 'What she is doing?', right: 'What is she doing?', why: 'Dengan "be" → subjek dulu, baru "be": "What is she doing?"' }
    ],
    clues: ['Kata tanya: who, what, where, when, why, how, which, whose', 'Kata bantu: do, does, did, is, are, was, were, will, can, should, have, has'],
    practice: [
      { q: 'Mana pertanyaan yang benar?', opts: ['Where do you work?', 'Where you work?', 'Where does you work?'], ans: 0, explain: 'Subjek "you" → "do", lalu subjek "you", lalu verb dasar "work". "Does" hanya untuk he/she/it.' }
    ],
    tips: 'Jawaban singkat: Yes, I do. / No, I don\'t. — Great, isn\'t it? — Not at all.'
  });

  P({
    id: 'wh-question', step: 6, level: 'Menengah', cat: 'Sentence Structure',
    title: 'Kata Tanya (Wh- Words)',
    hook: 'Siapa, apa, kapan, di mana, kenapa, bagaimana.',
    simple: 'Kata tanya yang minta informasi spesifik. Semuanya bisa jadi subjek atau objek kalimat.',
    eli10: '"Who" tanya orang, "what" tanya benda/pekerjaan, "where" tanya tempat, "when" tanya waktu, "why" tanya alasan, "how" tanya cara.',
    meaning: 'Kata untuk membuat pertanyaan informasi: who, what, where, when, why, how, which, whose. Letaknya di awal kalimat.',
    when: 'Saat mau menanyakan informasi, bukan hanya yes/no: "Where is my phone?" "Why are you late?" "How do you get to work?"',
    why: 'Mayoritas kalimat tanya sehari-hari adalah Wh-question. Menguasainya bikin percakapan jauh lebih lancar.',
    whyNot: [
      { t: 'Yes/No question', d: '"Do you smoke?" (apakah) vs "Do you smoke **what**?" (tidak masuk akal). Yang kedua bukan pertanyaan, cuma menekankan.' },
      { t: 'Question word sebagai subjek', d: '"**Who** broke the window?" (who = subjek, langsung + V3) vs "**Who** did you meet?" (who = objek, butuh "did" + V dasar).' }
    ],
    formula: 'Wh + (do/does/did) + S + V? | Wh + be + S ...? | Who/What/Which + V3/sesuai tense?',
    examples: [
      '**Where** are you going?',
      '**What** do you do for a living?',
      '**How** long have you lived here?',
      '**Who** wants tea?',
      '**Which** one do you prefer?'
    ],
    mistakes: [
      { wrong: 'Where you are going?', right: 'Where are you going?', why: 'Tanya butuh kata bantu: "are you going".' },
      { wrong: 'What means this word?', right: 'What does this word mean?', why: 'Di sini "what" = objek, jadi butuh "does" dan verb bentuk dasar: "does ... mean".' }
    ],
    clues: ['What + kata benda = "nanya apa itu" — bisa sendiri: "What happened?"', 'Kata tanya bisa jadi subjek (tanpa kata bantu) saat memakai "be" atau V3: "Who broke it?" / "Who is he?"'],
    practice: [
      { q: 'Mana yang benar?', opts: ['How much cost the ticket?', 'How much does the ticket cost?', 'How much the ticket costs?'], ans: 1, explain: 'Wh + does + S + V = "How much does the ticket cost?" Karena "the ticket" adalah subjek, kata kerjanya kembali ke bentuk dasar.' }
    ],
    tips: '"How much" = berapa (untuk harga/uang), "How many" = berapa (untuk jumlah benda countable).'
  });

  /* ---------------- SISA DASAR ---------------- */

  P({
    id: 'possessive', step: 3, level: 'Dasar', cat: 'Parts of Speech',
    title: 'Possessive — menunjukkan kepemilikan',
    hook: '"Milik saya", "miliknya dia".',
    simple: 'Menunjukkan siapa yang memiliki sesuatu. Ada 2 bentuk: "my" (sebelum kata benda) dan "mine" (berdiri sendiri).',
    eli10: '"This is **my** bag" = ini tas saya. "This bag is **mine**" = tas ini punya saya. Dua-duanya benar, tempatnya berbeda saja.',
    meaning: 'Menunjukkan kepemilikan. Possessive adjective (my, your, his, her, its, our, their) selalu sebelum kata benda. Possessive pronoun (mine, yours, his, hers, ours, theirs) berdiri sendiri.',
    when: 'Setiap kali menyebut "milik seseorang": "Sinta\'s book", "my house", "That\'s hers".',
    why: 'Biar jelas pemilik barang, dan biar kalimat tidak ambigu.',
    whyNot: [
      { t: '"of"', d: '"The bag of Sinta" → formal, tapi "Sinta\'s bag" lebih natural sehari-hari.' },
      { t: 'Possessive pronoun', d: '"This is my bag" (kata benda ada) vs "This one is mine" (berdiri sendiri, menggantikan noun).' }
    ],
    formula: 'Noun + \'s | my/your/his/her/our/their + noun | mine/yours/his/hers/ours/theirs',
    examples: [
      '**my** father (milik saya)',
      '**Sinta\'s** car (mobil Sinta)',
      'The red one is **mine**.',
      'That book is **theirs**.'
    ],
    mistakes: [
      { wrong: 'This is her book, and that one is her.', right: 'This is her book, and that one is hers.', why: 'Kalimat kedua butuh Possessive PRONOUN ("hers") karena tidak ada kata benda yang diikutinya.' },
      { wrong: 'Sinta\'s and Budi\'s car.', right: 'Sinta\'s car and Budi\'s.', why: 'Jangan ulang kata bendanya. Cukup: "Sinta\'s car and Budi\'s".' }
    ],
    clues: ['Penanda "milik": my, your, his, her, its, our, their + noun | mine, yours, his, hers, ours, theirs (tanpa noun)'],
    practice: [
      { q: 'Mana yang benar?', opts: ['This is mine pen.', 'This is my pen.', 'This is mine pen is.'], ans: 1, explain: '"My" harus langsung diikuti kata benda: "my pen". "Mine" tidak bisa followed kata benda.' }
    ],
    tips: 'Its (miliknya) vs it\'s (it is) — sering tertukar. "The dog wagged its tail." = ekornya.'
  });

  P({
    id: 'imperative', step: 3, level: 'Dasar', cat: 'Sentence Structure',
    title: 'Imperative — perintah & ajakan',
    hook: 'Kata kerja di depan, tanpa subjek.',
    simple: 'Perintah, permintaan, atau ajakan. Subjek (kamu) disembunyikan karena sudah jelas.',
    eli10: '"Datang ke sini!" Nggak ada subjeknya. Tapi kita tahu itu artinya kamu yang harus datang.',
    meaning: 'Kalimat perintah/permintaan/ajakan. Subjek "you" hilang, kata kerja langsung di depan. Negatif pakai "don\'t".',
    when: 'Instruksi, resep, pesan, permintaan tolong: "Please close the door." "Don\'t touch it!" "Let\'s go."',
    why: 'Bahasa Inggris boleh punya kalimat tanpa subjek, karena perintah selalu untuk orang yang sedang membaca atau mendengar.',
    whyNot: [
      { t: 'Kalimat biasa', d: '"You close the door" (subjek ada) vs "Close the door" (imperatif). Keduanya valid — yang satu lebih ramah.' },
      { t: '"Let\'s"', d: '"Let\'s go" = ajakan untuk ikut. Bentuknya pakai "let us", bukan "you go".' }
    ],
    formula: 'V (dasar) + ... | Don\'t + V | Let\'s + V | Please + V',
    examples: [
      '**Open** your book, please.',
      '**Don\'t** run in the hallway.',
      '**Let\'s** start now.',
      '**Have** a nice day!'
    ],
    mistakes: [
      { wrong: 'You come here now!', right: 'Come here now! (kasar) / Please come here now. (sopan)', why: 'Dalam bahasa Inggris, perintah dimulai dengan kata kerja, bukan "you". Kalau mau sopan, tambahkan "please" dan Subject: "Please come here."' }
    ],
    clues: ['Kata kerja di awal kalimat', 'Sering muncul di resep, petunjuk, pesan singkat'],
    practice: [
      { q: 'Mana contoh imperative?', opts: ['You should sleep early.', 'Sleep early!', 'I am sleeping early.'], ans: 1, explain: '"Sleep early!" dimulai dengan kata kerja tanpa subjek — ciri imperative.' }
    ],
    tips: '"Let\'s" = "let us" dalam bentuk singkat. Tapi "let me..." = izinkan aku (bukan ajakan).'
  });

  P({
    id: 'adverb-frequency', step: 3, level: 'Dasar', cat: 'Sentence Structure',
    title: 'Adverbs of Frequency — seberapa sering',
    hook: 'Always, usually, often, sometimes, never.',
    simple: 'Menjawab "seberapa sering?" — letaknya di tengah kalimat, sebelum kata kerja utama.',
    eli10: '"Saya selalu minum kopi" → "I always drink coffee". Kata "always" ditaruh di tengah, bukan di depan atau belakang.',
    meaning: 'Adverb yang menunjukkan seberapa sering sesuatu terjadi: always (selalu) → usually (biasanya) → often (sering) → sometimes (kadang) → rarely/jarang → never (tidak pernah).',
    when: 'Ceritakan kebiasaan: "I often walk to school", "She never eats breakfast".',
    why: 'Menjawab pertanyaan habit orang. Nggak perlu kalimat panjang: satu adverb sudah cukup.',
    whyNot: [
      { t: 'Posisi', d: 'Letak: SETELAH kata bantu, SEBELUM kata kerja utama. "I have always eaten..." (bukan "I always have eaten").' },
      { t: 'Kata "usually" vs "often"', d: '"Usually" = lebih sering, "often" = cukup sering, "sometimes" = jarang.' }
    ],
    formula: 'S + (be) + [always/usually/often/sometimes/never] + V',
    examples: [
      'I **always** wake up at 6.',
      'She **usually** walks to work.',
      'We **sometimes** eat out.',
      'He **never** smokes.'
    ],
    mistakes: [
      { wrong: 'I go always to the gym.', right: 'I always go to the gym.', why: 'Adverb of frequency diletakkan sebelum kata kerja utama, bukan sesudahnya.' }
    ],
    clues: ['always > usually > often > sometimes > rarely > never', 'Bisa pindah ke depan kalau mau ditekankan: "**Sometimes** I just stay home."'],
    practice: [
      { q: 'Di mana letak "often" yang benar?', opts: ['I go to bed late often.', 'I often go to bed late.', 'I go often to bed late.'], ans: 1, explain: 'Adverb of frequency diletakkan sebelum kata kerja utama: "I often go".' }
    ],
    tips: 'Dengan "be": "He is always late" (setelah "is").'
  });

  P({
    id: 'linking-verbs', step: 3, level: 'Menengah', cat: 'Sentence Structure',
    title: 'Linking Verbs — kata kerja penghubung',
    hook: 'Verba nggak melakukan aksi, cuma menyambung.',
    simple: 'Ada kata kerja yang tugasnya bukan melakukan aksi, tapi menyambung subjek dengan keterangan.',
    eli10: '"Dia isn\'t eating" artinya dia tidak sedang makan — itu beda dari lapar. Untuk bilang lapar kita butuh "be": "He is hungry". Kalau pakai "eat", artinya dia memang sedang makan.',
    meaning: 'Verba yang menyambung subjek ke kata keterangan: be, am, is, are, was, were, become, seem, appear, look, feel, sound, taste, smell, stay, remain, get, turn.',
    when: 'Untuk menggambarkan keadaan, perasaan, atau perubahan: "The soup tastes good", "He became famous", "I feel tired".',
    why: 'Agak tricky: setelah linking verb selalu ada kata sifat atau kata benda — bukan kata kerja.',
    whyNot: [
      { t: 'Action verbs', d: '"He runs daily" (berlari setiap hari) vs "He is a daily runner" (mendeskripsikan). Action verb butuh object kalau transitif; linking verb butuh pelengkap.' },
      { t: 'Look vs See', d: '"She **looks** happy" (terlihat — deskripsi) vs "She **looks** at me" (memandangi — action).' }
    ],
    formula: 'S + linking verb + adjective / noun / (at) prepositional phrase',
    examples: [
      'I **am** happy today.',
      'The soup **tastes** delicious.',
      'It **sounds** strange.',
      'He **became** a doctor.',
      'We **stayed** calm.'
    ],
    mistakes: [
      { wrong: 'He looks at happy.', right: 'He looks happy.', why: '"Looks" di sini artinya "terlihat" (linking verb), jadi nggak boleh pakai preposition "at". Kalau maksudnya "memandangi", baru: "He looks at me".' }
    ],
    clues: ['Cuma be yang bisa jadi linking DAN action: "He is a doctor" vs "He is running".'],
    practice: [
      { q: 'Mana yang linking verb? "The music sounds ___."', opts: ['loudly', 'beautiful', 'to play'], ans: 1, explain: '"Sounds" di sini = terdengar (linking verb), jadi butuh kata sifat: "beautiful". "Loudly" adalah adverb (menerangkan kata kerja), dan "to play" bukan pelengkap yang tepat.' }
    ],
    tips: 'Catatan: "get" juga bisa jadi linking verb: "It got cold" = makin lama makin dingin.'
  });

  P({
    id: 'comparative', step: 3, level: 'Menengah', cat: 'Sentence Structure',
    title: 'Comparative & Superlative — lebih / paling',
    hook: '-er dan -est, atau "more" dan "most".',
    simple: 'Untuk membandingkan dua (comparative) atau lebih dari dua (superlative).',
    eli10: '"Budi lebih tinggi dari Andi" = membandingkan dua orang. "Budi yang paling tinggi" = dari semua orang.',
    meaning: 'Bentuk kata untuk membandingkan. Pendek: taller, faster. Panjang: more expensive, more beautiful. Superlative: tallest, fastest, most expensive.',
    when: 'Saat membandingkan: "This one is cheaper than that one", "She is the best student in the class".',
    why: 'Mudah digunakan dan sering muncul dalam pidato maupun ungkapan perumpamaan.',
    whyNot: [
      { t: 'Kata pendek vs kata panjang', d: 'Bentuk pendek (tall → taller) untuk kata pendek (1-2 silabel). Bentuk panjang (expensive → more expensive) untuk kata panjang. Dua-duanya bisa, tapi jangan campur ("more taller" salah).' },
      { t: 'Irregular', d: 'good → better → best, bad → worse → worst, far → further → furthest, little → less → least, many/much → more → most.' }
    ],
    formula: 'Comparative: 1-2 silabel +er / more + kata | Superlative: 1-2 silabel +est / most + kata | than / in / the',
    examples: [
      'Sinta **is taller than** Budi. (comparative)',
      'This phone **is more expensive than** that one.',
      'He **is the fastest** runner here. (superlative)',
      'This **is the most delicious** soup I ever tasted.'
    ],
    mistakes: [
      { wrong: 'She is more taller than me.', right: 'She is taller than me.', why: 'Jangan pakai "more" DAN "-er" bareng. Pilih salah satu.' },
      { wrong: 'My brother is taller than I.', right: 'My brother is taller than me.', why: 'Setelah "than" dalam perbandingan, pakai object pronoun: me, him, her, us, them.' }
    ],
    clues: ['Comparative → "than"', 'Superlative → biasanya + "the" dan kata tempat: "in the class", "in Indonesia"'],
    practice: [
      { q: 'Mana yang benar?', opts: ['This is more cheaper than that.', 'This is cheaper than that.', 'This is most cheaper than that.'], ans: 1, explain: '"Cheap" cuma 1 silabel → pakai bentuk pendek "cheaper". "More cheaper" salah (dua-duanya), dan "most" itu untuk superlative (dari lebih dari dua).' }
    ],
    tips: '"The" hanya di superb: "the best". Comparative biasanya tanpa "the".'
  });

})(window.EG);
