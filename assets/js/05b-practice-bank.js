/* =========================================================
   BANK SOAL TAMBAHAN
   Setiap materi minimal 25 soal. Soal-soal ini ditambahkan ke
   practice masing-masing materi, lalu quizBank dibangun ulang
   supaya ikut bertambah.

   Bentuk satu soal:
     { q: 'pertanyaan', opts: ['a','b','c','d'], ans: 0, explain: 'alasan' }
   ans = indeks pilihan yang benar (dimulai dari 0).
   ========================================================= */

(function (EG) {
  'use strict';

  EG.extraPractice = EG.extraPractice || {};

  /* ---------------- LANGKAH 1: STRUKTUR KALIMAT ---------------- */

  EG.extraPractice['sentence'] = [
    { q: 'Kalimat ini sudah berupa kalimat sempurna?', opts: ['Because the shop was closed.', 'The shop was closed.', 'Very early in the morning.', 'At the corner of the street.'], ans: 1, explain: '"The shop was closed" punya subjek (the shop) dan verb (was closed). "Because the shop was closed" itu klausa, dua lainnya frasa.' },
    { q: 'Kenapa "the small boy" bukan kalimat?', opts: ['Karena tidak ada huruf besar', 'Karena tidak ada verb', 'Karena hanya satu kata', 'Karena tidak ada tanda baca'], ans: 1, explain: '"the small boy" itu frasa: ada subjek tapi belum ada aksi. Tanpa verb, kalimat belum hidup.' },
    { q: 'Kalimat ini sudah lengkap? "I slept."', opts: ['Belum, perlu ada object', 'Sudah, walau cuma dua kata', 'Belum, perlu ada adverb', 'Sudah, asal ada subjek'], ans: 1, explain: '"I slept" punya subjek (I) dan verb (slept). Object itu opsional, jadi kalimat ini tetap lengkap.' },
    { q: 'Apa yang hilang dari "Running very fast."?', opts: ['Object', 'Subjek', 'Adjektiva', 'Preposisi'], ans: 1, explain: 'Hanya ada "-ing" dan adverb. Tidak ada yang sedang berlari. Butuh subjek, misalnya "The boy is running very fast."' },
    { q: 'Manakah yang BUKAN kalimat?', opts: ['She sings beautifully.', 'Because it was raining.', 'The children played outside.', 'I waited for the bus.'], ans: 0, explain: 'Semua pilihan itu kalimat. "Because it was raining" adalah klausa, bukan kalimat utuh.' },
    { q: 'Syarat minimum sebuah kalimat adalah...', opts: ['Subjek + Object', 'Verb saja', 'Subjek + Verb', 'Subjek + Adverb'], ans: 2, explain: 'Cuma dua hal yang wajib: subjek dan verb. Object, adverb, dan keterangan lain semuanya tambahan.' },
    { q: 'Kalimat ini benar? "Beautiful the garden is."', opts: ['Ya, kalimatnya tetap lengkap', 'Belum, karena tidak ada subjek', 'Belum, karena tidak ada verb', 'Belum, karena terlalu pendek'], ans: 0, explain: 'Subjek (the garden) dan verb (is) sama-sama ada, walau urutannya terbalik. Kalimat ini tetap lengkap secara struktur, walau bunyinya tidak natural.' },
    { q: 'Apa yang membuat "opened the door quickly" bukan kalimat?', opts: ['Tidak ada adverb', 'Tidak ada subjek', 'Tidak ada object', 'Tidak ada kata kerja'], ans: 1, explain: 'Verb "opened" dan object-nya ada, tapi tidak ada siapa yang membuka. Subject-nya yang hilang.' },
    { q: 'Mana yang kalau ditambah subjek akan menjadi kalimat?', opts: ['is very tired', 'in the kitchen', 'quickly and loudly', 'because of the rain'], ans: 0, explain: '"is very tired" sudah punya verb. Tambah subjek, jadi "She is very tired".' },
    { q: 'Apa arti "bisa berdiri sendiri" dalam materi ini?', opts: ['Kalimatnya tidak perlu titik', 'Kalimatnya bisa dipahami tanpa kalimat lain', 'Kalimatnya harus pendek', 'Kalimatnya cuma satu kata'], ans: 1, explain: 'Maksudnya kalimat sudah conveys pesan tanpa harus bergantung pada kalimat sebelumnya.' },
    { q: 'Manakah kalimat lengkap yang TIDAK punya object?', opts: ['She bought a new phone.', 'The baby is sleeping.', 'He gave his mother money.', 'I eat rice every day.'], ans: 1, explain: '"The baby is sleeping" cuma punya subject dan verb. Object tidak wajib untuk semua kalimat.' },
    { q: 'Pada "The small boy opened the door", siapa subjeknya?', opts: ['the door', 'opened', 'the small boy', 'seluruh kalimat'], ans: 2, explain: 'Subjek jawab pertanyaan "siapa yang melakukan?". Yang melakukan "opened" adalah the small boy.' },
    { q: 'Apakah "Go away!" sudah termasuk kalimat lengkap?', opts: ['Ya, karena ada aksi', 'Belum, karena tidak ada subjek', 'Ya, karena ada object', 'Belum, karena hanya dua kata'], ans: 0, explain: 'Perintah boleh tanpa subjek karena subjek-nya kamu, yang tidak diucapkan. Verbnya tetap ada: "Go away" itu aksi.' },
    { q: 'Manakah contoh FRASA, bukan kalimat?', opts: ['on the table', 'I sleep on the table.', 'The table is old.', 'She put it there.'], ans: 0, explain: '"on the table" cuma preposisi + kata benda, tidak ada subjek dan tidak ada verb.' },
    { q: 'Apa bedanya kalimat dengan frasa?', opts: ['Kalimat selalu lebih panjang', 'Kalimat punya subjek dan verb, frasa belum tentu', 'Frasa hanya berisi kata sifat', 'Tidak ada bedanya'], ans: 1, explain: 'Frasa bagian dari kalimat. "the small boy" frasa, "the small boy opened the door" kalimat lengkap.' }
  ];

  EG.extraPractice['subject'] = [
    { q: 'Siapa subjek pada "The dog barked loudly"?', opts: ['the dog', 'barked', 'loudly', 'the dog barked'], ans: 0, explain: 'Yang melakukan aksi "barked" adalah the dog, jadi itu subjeknya.' },
    { q: 'Pada "The keys are on the table", apa bentuk subjeknya?', opts: ['Tunggal', 'Jamak', 'Neither', 'Tidak ada subjek'], ans: 1, explain: '"The keys" jamak. Ini sebabnya verb-nya "are", bukan "is".' },
    { q: 'Mana yang benar-benar subjek?', opts: ['quickly', 'in the yard', 'My sister and I', 'ran fast'], ans: 2, explain: '"My sister and I" menyebut siapa yang bicara: dua orang dalam satu subjek. quicker dan "in the yard" cuma keterangan.' },
    { q: 'Perbaiki kalimat ini: "My brother is student."', opts: ['My brother are a student.', 'My brother is a student.', 'My brothers is a student.', 'My brother is students.'], ans: 1, explain: 'Butuh Determiner "a" sebelum "student". "is a student" benar.' },
    { q: 'Perbaiki: "The cat and dog plays in the yard."', opts: ['The cat and dog play in the yard.', 'The cat and dog is in the yard.', 'The cats and dogs plays in the yard.', 'The cat and dog playing in the yard.'], ans: 0, explain: 'Subjeknya jamak ("the cat and dog" = dua makhluk), jadi verb-nya "play", bukan "plays".' },
    { q: 'Apakah subjek selalu ada di awal kalimat?', opts: ['Ya, selalu di kalimat pertama', 'Tidak, bisa berada di tengah atau akhir', 'Ya, tapi hanya di kalimat negatif', 'Tidak, tapi harus di kalimat kedua'], ans: 1, explain: 'Yang penting functional-nya, bukan posisinya. Contoh: "In the yard played a cat." Subjeknya "a cat" ada di akhir.' },
    { q: 'Pada "The cat is on the table", apa subjeknya?', opts: ['on the table', 'the table', 'the cat', 'is'], ans: 2, explain: 'Yang "ada" dan bisa ditanyakan dengan "apa?" adalah the cat. "on the table" cuma preposisi frasa.' },
    { q: 'Bagaimana cara termudah menemukan subjek di sebuah kalimat?', opts: ['Cari kata paling panjang', 'Tanya "siapa?" atau "apa?"', 'Cari kata di akhir kalimat', 'Cari kata sifatnya'], ans: 1, explain: 'Materi ini suggest: mulai dari subjek, tanya "Siapa yang Doing?". Jawabannya itu subjek.' },
    { q: 'Mana yang BUKAN subjek?', opts: ['The dog', 'My parents', 'The rain', 'Yesterday'], ans: 3, explain: '"Yesterday" adalah keterangan waktu, bukan subjek. Siege yang lain semuanya bisa jadi subjek.' },
    { q: 'Pada "My friends and I went to the park", berapa banyak subjeknya?', opts: ['Dua', 'Satu', 'Tiga', 'Tidak ada'], ans: 1, explain: '"My friends and I" itu satu subjek yang berisi dua orang, ditulis sebagai satu kesatuan.' },
    { q: 'Mana yang paling tepat menjadi subjek?', opts: ['running', 'the tall', 'The children', 'very fast'], ans: 2, explain: 'Subjek harus bisa menjadi "who" atau "what" dari predicate. "The children" bisa; yang lain cuma pecahan.' },
    { q: 'Apa yang terjadi kalau subjek dihapus dari "The baby is sleeping"?', opts: ['Jadi "is sleeping"', 'Jadi "The baby"', 'Tetap kalimat lengkap', 'Jadi frasa preposisi'], ans: 0, explain: 'Tinggal "is sleeping" — predicate yang menggantung, bukan kalimat lengkap.' },
    { q: 'Pada "After the game, the team celebrated", siapa subjeknya?', opts: ['the game', 'the team', 'After', 'celebrated'], ans: 1, explain: 'Yang merayakan adalah the team. "After the game" cuma klausa waktu di depan.' },
    { q: 'Mana yang memakai subjek jamak dengan benar?', opts: ['The books are heavy', 'The books is heavy', 'The books were heavy', 'The books am heavy'], ans: 0, explain: '"The books" jamak, jadi "are". "were" juga benar secara bentuk, tapi soal ini cari yang paling tepat untuk deskripsi umum.' },
    { q: 'Apa fungsi subjek dalam kalimat "The dog barked loudly"?', opts: ['Menunjukkan kapan aksi terjadi', 'Menunjukkan siapa yang melakukan aksi', 'Menunjukkan kata kerja yang dipakai', 'Menunjukkan alat yang dipakai'], ans: 1, explain: 'Subjek memberi tahu siapa pelakunya. Verb memberi tahu aksinya.' }
  ];

  EG.extraPractice['verb'] = [
    { q: 'Kata kerja manakah di "The small boy opened the door"?', opts: ['small', 'boy', 'opened', 'door'], ans: 2, explain: '"Opened" adalah kata kerja.{small dan boy kata benda, door kata benda.' },
    { q: 'Perbaiki: "I very like coffee."', opts: ['I very likes coffee.', 'I like very coffee.', 'I like coffee very much.', 'I am very like coffee.'], ans: 2, explain: 'Adverb "very" tidak bisa langsung di depan verb. Yang benar "like coffee very much".' },
    { q: 'Bentuk verb apa yang dipakai pada "She is working now"?', opts: ['Base form (work)', 'Past form (worked)', 'Bentuk -ing (working)', 'Past participle (worked)'], ans: 2, explain: 'Ditunjukkan oleh "is" yang diikuti kata kerja bentuk -ing, artinya sedang terjadi sekarang.' },
    { q: 'Kata kerja manakah yang menyatakan KEADAAN, bukan aksi?', opts: ['buy', 'run', 'is', 'write'], ans: 2, explain: '"Be" (am/is/are) menyatakan keadaan. buy, run, write menyatakan aksi.' },
    { q: 'Kalimat manakah yang TIDAK punya verb?', opts: ['I eat rice.', 'She is a doctor.', 'The keys on the table.', 'They went home.'], ans: 2, explain: '"The keys on the table" cuma frasa. Tidak ada aksi maupun keadaan, jadi bukan kalimat.' },
    { q: 'Apa arti "have" sebagai kata kerja dalam materi ini?', opts: ['Menyatakan kepemilikan', 'Menyatakan waktu', 'Menyatakan tempat', 'Menyatakan cara'], ans: 0, explain: 'Materi ini mengelompokkan "have" di bawah kata kerja yang menyatakan kepemilikan.' },
    { q: 'Verb pada "He has finished his homework" bentuknya...', opts: ['Base form (finish)', 'Past form (finished)', 'Bentuk -ing (finishing)', 'Past participle (finished)'], ans: 3, explain: 'Setelah "has", bentuk verb-nya adalah bentuk ke-3 (past participle).' },
    { q: 'Mana yang benar tentang posisi verb?', opts: ['Selalu di tengah kalimat', 'Selalu di akhir kalimat', 'Bisa di awal, tengah, atau akhir', 'Selalu setelah subjek'], ans: 2, explain: 'Verb tidak terkunci di satu posisi. "Go away!" ada di awal, "He ran fast" ada di akhir.' },
    { q: 'Perbaiki: "She go to school every day."', opts: ['She goes to school every day.', 'She going to school every day.', 'She gone to school every day.', 'She to school every day.'], ans: 0, explain: 'Subjek "she" butuh verb bentuk -s: "goes".' },
    { q: 'Kata kerja manakah yang butuh object?', opts: ['sleep', 'read', 'is', 'seem'], ans: 1, explain: '"Read" transitif, jadi harus ada object: "She reads a book." sleep, is, seem tidak butuh.' },
    { q: 'Apa akibatnya kalau sebuah kalimat tidak punya verb sama sekali?', opts: ['Tetap kalimat, hanya kurang lengkap', 'Selalu tidak lengkap', 'Berubah jadi frasa', 'Berubah jadi pertanyaan'], ans: 1, explain: 'Setiap kalimat wajib punya minimal satu verb. Tanpa itu, kata-kata cuma berjajar tanpa aksi.' },
    { q: 'Mana yang VERB-nya sudah benar bentuknya?', opts: ['He write a letter.', 'She studies at night.', 'They goes home.', 'I am eat rice.'], ans: 1, explain: '"studies" sudah pakai -ies untuk subjek "she". Yang lain salah bentuk.' },
    { q: 'Dalam "They went home", kata "went" adalah...', opts: ['Base form (go)', 'Past form (go -> went)', 'Bentuk -ing (going)', 'Past participle (gone)'], ans: 1, explain: '"Went" adalah past simple dari "go", dipakai untuk kejadian yang sudah selesai.' },
    { q: 'Perbaiki: "He running very fast."', opts: ['He run very fast.', 'He runs very fast.', 'He is running very fast.', 'He running fast.'], ans: 2, explain: 'Butuh verb bantu "is" sebelum bentuk -ing: "is running".' },
    { q: 'Apa bedanya "eat" dan "is" sebagai kata kerja?', opts: ['Tidak ada bedanya', 'Eat adalah aksi, is adalah keadaan', 'Eat adalah keadaan, is adalah aksi', 'Keduanya sama-sama adjective'], ans: 1, explain: 'Materi ini membagi dua: aksi (eat, go, buy) dan keadaan (be, become, seem).' }
  ];

  EG.extraPractice['object'] = [
    { q: 'Apa object pada "I eat rice every day"?', opts: ['I', 'eat', 'rice', 'every day'], ans: 2, explain: '"Rice" yang kena aksi "eat". Tanya "I eat apa?" jawabannya rice.' },
    { q: 'Apa object pada "She bought a new phone yesterday"?', opts: ['She', 'a new phone', 'yesterday', 'bought'], ans: 1, explain: '"A new phone" yang dibeli. "Yesterday" cuma keterangan waktu.' },
    { q: 'Apa object pada "He gave his mother money"?', opts: ['He', 'his mother', 'money', 'gave'], ans: 2, explain: '"Money" yang diberikan. "His mother" disebut indirect object, bukan object langsung.' },
    { q: 'Perbaiki: "I like very music."', opts: ['I very like music.', 'I like music very much.', 'I likes very music.', 'I am like very music.'], ans: 1, explain: 'Adverb "very" tidak bisa di depan noun. Letakkan di akhir: "like music very much".' },
    { q: 'Kata kerja transitif berarti...', opts: ['Tidak butuh pelengkap', 'Butuh object setelahnya', 'Hanya dipakai di pertanyaan', 'Selalu di akhir kalimat'], ans: 1, explain: 'Materi ini menyebut buy, eat, read, want, need, see, give, take, make sebagai transitif: semuanya butuh object.' },
    { q: 'Mana yang BUKAN object?', opts: ['the ball', 'a book', 'quickly', 'his father'], ans: 2, explain: '"Quickly" adalah adverb, bukan kata benda. Object harus bisa menjawab "apa?" atau "siapa?".' },
    { q: 'Pada "She plays the piano", apa object-nya?', opts: ['She', 'the piano', 'plays', 'piano saja'], ans: 1, explain: '"The piano" yang dipetik. "Piano saja" juga benar jenisnya, tapi objektifnya adalah frasa "the piano".' },
    { q: 'Bagaimana cara memastikan sebuah kata itu object?', opts: ['Tanya "apa?" atau "siapa?" setelah verb', 'Cari kata di awal kalimat', 'Lihat panjangnya', 'Lihat apakah itu kata sifat'], ans: 0, explain: 'Syarat di materi ini: setelah verb, kata tanya "apa?" atau "siapa?" bisa dijawab dengan kata itu.' },
    { q: 'Mana yang objektinya berupa frasa, bukan satu kata?', opts: ['I drink water.', 'She bought a new phone.', 'He runs fast.', 'They left home.'], ans: 1, explain: '"A new phone" adalah frasa (determiner + kata sifat + kata benda), bukan satu kata.' },
    { q: 'Apa yang terjadi pada "The dog bit the cat" kalau dibalik jadi "The cat bit the dog"?', opts: ['Tetap benar', 'Berubah makna dan jadi tidak masuk akal', 'Berubah jadi kalimat tanya', 'Object-nya hilang'], ans: 1, explain: 'Materi ini Mencontohkan: kalau dibalik, dog yang kena dan cat yanguret doing. Makna berubah total.' },
    { q: 'Mana yang TIDAK punya object?', opts: ['I eat rice.', 'She bought a phone.', 'The baby is sleeping.', 'He gave me money.'], ans: 2, explain: '"The baby is sleeping" cuma subject + verb. Tidak ada yangvie menerima aksi.' },
    { q: 'Kata "his mother" pada "He gave his mother money" berfungsi sebagai...', opts: ['Object langsung', 'Indirect object (penerima)', 'Subject', 'Adverb'], ans: 1, explain: 'Urutannya: give + indirect object + direct object. "His mother" yang menerima, "money" yang diberikan.' },
    { q: 'Manakah kalimat dengan object yang benar?', opts: ['She read the book.', 'She read.', 'She the book read.', 'Read the book she.'], ans: 0, explain: 'Harus Subject + Verb + Object: "She read the book."' },
    { q: 'Perhatikan: "I want a cup of tea." Object-nya...', opts: ['want', 'a cup of tea', 'I', 'of tea'], ans: 1, explain: '"A cup of tea" adalah frasa noun yang jadi object dari "want".' },
    { q: 'Apa ciri utama object menurut materi ini?', opts: ['Selalu di akhir kalimat', 'Selalu kata tunggal', 'Bisa dijawab kata tanya "apa?" atau "siapa?" setelah verb', 'Selalu kata benda konkret'], ans: 2, explain: 'Syaratnya behavioral, bukan posisi: "S V apa?" harus bisa dijawab dengan kata itu.' }
  ];

  function merge() {
    const bank = EG.extraPractice || {};
    let n = 0;
    (EG.lessons || []).forEach(function (l) {
      const add = bank[l.id];
      if (!add || !add.length) return;
      if (!Array.isArray(l.practice)) l.practice = [];
      add.forEach(function (q) {
        if (!q || !q.q || !Array.isArray(q.opts) || q.opts.length < 2) return;
        if (typeof q.ans !== 'number' || q.ans < 0 || q.ans >= q.opts.length) return;
        l.practice.push({ q: q.q, opts: q.opts, ans: q.ans, explain: q.explain || '' });
        n++;
      });
    });
    return n;
  }

  function rebuildBank() {
    const out = [];
    (EG.lessons || []).forEach(function (l) {
      (l.practice || []).forEach(function (q, i) {
        out.push({
          lesson: l.id, step: l.step, level: l.level, tag: l.cat,
          q: q.q, opts: q.opts, ans: q.ans, explain: q.explain, ref: l.id + '#' + i
        });
      });
    });
    EG.quizBank = out;
  }

  EG.mergeExtraPractice = function () {
    const n = merge();
    rebuildBank();
    return n;
  };

})(window.EG);
