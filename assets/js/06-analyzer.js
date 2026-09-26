/* =========================================================
   06-analyzer.js — mesin Grammar Autopsy
   6 langkah: tipe kalimat, klausa, anatomi, phrase,
   bentuk verb, dan jenis kata
   ========================================================= */
(function (EG) {
  'use strict';

  /* ---------------- DAFTAR KATA DASAR ---------------- */
  const BE = { am: 'be', is: 'be', are: 'be', was: 'be', were: 'be', been: 'be', being: 'be' };
  const HAVE = { have: 'have', has: 'have', had: 'have' };
  const DO = { do: 'do', does: 'do', did: 'do' };
  const MODAL = { will: 'will', would: 'would', shall: 'shall', should: 'should', can: 'can', could: 'could', may: 'may', might: 'might', must: 'must', ought: 'ought' };
  const NEG_AUX = {
    "don't": 'do', "doesn't": 'do', "didn't": 'do', "don't": 'do',
    "isn't": 'be', "aren't": 'be', "wasn't": 'be', "weren't": 'be',
    "haven't": 'have', "hasn't": 'have', "hadn't": 'have',
    "can't": 'can', "cannot": 'can', "couldn't": 'can', "won't": 'will',
    "wouldn't": 'would', "shouldn't": 'should', "mustn't": 'must',
    "mightn't": 'might', "shan't": 'shall'
  };

  const AUX_WORD = Object.assign({}, BE, HAVE, DO, MODAL, NEG_AUX);

  const NEG_TOKENS = Object.keys(NEG_AUX).concat(['not', 'never', 'no', 'none', 'nothing', 'nobody', 'nowhere', 'neither', 'nor']);

  const IRREGULAR = {
    be: { base: 'be', past: 'was', pp: 'been', forms: ['am', 'is', 'are', 'was', 'were', 'been', 'being'] },
    become: { base: 'become', past: 'became', pp: 'become' },
    begin: { base: 'begin', past: 'began', pp: 'begun' },
    break: { base: 'break', past: 'broke', pp: 'broken' },
    bring: { base: 'bring', past: 'brought', pp: 'brought' },
    build: { base: 'build', past: 'built', pp: 'built' },
    buy: { base: 'buy', past: 'bought', pp: 'bought' },
    catch: { base: 'catch', past: 'caught', pp: 'caught' },
    choose: { base: 'choose', past: 'chose', pp: 'chosen' },
    come: { base: 'come', past: 'came', pp: 'come' },
    cost: { base: 'cost', past: 'cost', pp: 'cost' },
    cut: { base: 'cut', past: 'cut', pp: 'cut' },
    do: { base: 'do', past: 'did', pp: 'done' },
    draw: { base: 'draw', past: 'drew', pp: 'drawn' },
    drink: { base: 'drink', past: 'drank', pp: 'drunk' },
    drive: { base: 'drive', past: 'drove', pp: 'driven' },
    eat: { base: 'eat', past: 'ate', pp: 'eaten' },
    fall: { base: 'fall', past: 'fell', pp: 'fallen' },
    feel: { base: 'feel', past: 'felt', pp: 'felt' },
    find: { base: 'find', past: 'found', pp: 'found' },
    finish: { base: 'finish', past: 'finished', pp: 'finished' },
    fly: { base: 'fly', past: 'flew', pp: 'flown' },
    forget: { base: 'forget', past: 'forgot', pp: 'forgotten' },
    forgive: { base: 'forgive', past: 'forgave', pp: 'forgiven' },
    get: { base: 'get', past: 'got', pp: 'got' },
    give: { base: 'give', past: 'gave', pp: 'given' },
    go: { base: 'go', past: 'went', pp: 'gone' },
    grow: { base: 'grow', past: 'grew', pp: 'grown' },
    have: { base: 'have', past: 'had', pp: 'had' },
    hear: { base: 'hear', past: 'heard', pp: 'heard' },
    hold: { base: 'hold', past: 'held', pp: 'held' },
    keep: { base: 'keep', past: 'kept', pp: 'kept' },
    know: { base: 'know', past: 'knew', pp: 'known' },
    leave: { base: 'leave', past: 'left', pp: 'left' },
    lend: { base: 'lend', past: 'lent', pp: 'lent' },
    lose: { base: 'lose', past: 'lost', pp: 'lost' },
    make: { base: 'make', past: 'made', pp: 'made' },
    mean: { base: 'mean', past: 'meant', pp: 'meant' },
    meet: { base: 'meet', past: 'met', pp: 'met' },
    pay: { base: 'pay', past: 'paid', pp: 'paid' },
    put: { base: 'put', past: 'put', pp: 'put' },
    read: { base: 'read', past: 'read', pp: 'read' },
    ride: { base: 'ride', past: 'rode', pp: 'ridden' },
    run: { base: 'run', past: 'ran', pp: 'run' },
    say: { base: 'say', past: 'said', pp: 'said' },
    see: { base: 'see', past: 'saw', pp: 'seen' },
    sell: { base: 'sell', past: 'sold', pp: 'sold' },
    send: { base: 'send', past: 'sent', pp: 'sent' },
    sing: { base: 'sing', past: 'sang', pp: 'sung' },
    sit: { base: 'sit', past: 'sat', pp: 'sat' },
    sleep: { base: 'sleep', past: 'slept', pp: 'slept' },
    speak: { base: 'speak', past: 'spoke', pp: 'spoken' },
    spend: { base: 'spend', past: 'spent', pp: 'spent' },
    stand: { base: 'stand', past: 'stood', pp: 'stood' },
    swim: { base: 'swim', past: 'swam', pp: 'swum' },
    take: { base: 'take', past: 'took', pp: 'taken' },
    teach: { base: 'teach', past: 'taught', pp: 'taught' },
    tell: { base: 'tell', past: 'told', pp: 'told' },
    think: { base: 'think', past: 'thought', pp: 'thought' },
    understand: { base: 'understand', past: 'understood', pp: 'understood' },
    wear: { base: 'wear', past: 'wore', pp: 'worn' },
    win: { base: 'win', past: 'won', pp: 'won' },
    write: { base: 'write', past: 'wrote', pp: 'written' }
  };

  const PREPOSITION = ['in', 'on', 'at', 'to', 'for', 'from', 'with', 'about', 'into', 'onto', 'over', 'under', 'after', 'before', 'between', 'among', 'through', 'during', 'without', 'within', 'against', 'across', 'behind', 'beside', 'near', 'of', 'off', 'out', 'up', 'down', 'by', 'per', 'via'];

  const TIME_ADV = ['now', 'then', 'today', 'tomorrow', 'yesterday', 'tonight', 'here', 'there', 'always', 'never', 'often', 'sometimes', 'usually', 'still', 'already', 'again', 'ever', 'soon', 'later', 'ago', 'before', 'afterwards', 'recently', 'nowadays', 'today'];

  const INTERJECTION = ['please', 'thanks', 'thank', 'hello', 'hi', 'hey', 'yes', 'no', 'ok', 'okay', 'wow', 'oh', 'ah', 'sorry', 'goodbye'];

  const DEGREE_ADV = ['very', 'too', 'quite', 'really', 'just', 'also', 'only', 'even', 'well', 'enough', 'almost', 'nearly', 'hardly', 'barely'];

  const TIME_UNIT = ['day', 'days', 'week', 'weeks', 'month', 'months', 'year', 'years', 'hour', 'hours', 'minute', 'minutes', 'morning', 'afternoon', 'evening', 'night', 'time', 'times', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'];

  const CUT_WORDS = PREPOSITION.concat(TIME_ADV).concat(DEGREE_ADV).concat(['and', 'but', 'or', 'so', 'because', 'although', 'though', 'while', 'if', 'unless', 'until', 'since', 'when', 'as', 'that', 'than', 'whether']);

  const AMBIGUOUS_SUB = ['since', 'before', 'after', 'until', 'when', 'while', 'where', 'as', 'than', 'that', 'which', 'whether', 'if', 'because', 'although', 'though', 'unless', 'so', 'and', 'but', 'or'];

  const SUBORDINATOR = {
    because: 'alasan', although: 'perbandingan', though: 'perbandingan', while: 'waktu atau perbandingan',
    if: 'syarat', unless: 'syarat', until: 'waktu', since: 'waktu', when: 'waktu', whenever: 'waktu',
    before: 'waktu', after: 'waktu', as: 'perbandingan atau alasan', that: 'jenis klausa ditentukan isi',
    whether: 'pilihan', where: 'tempat', why: 'alasan', once: 'waktu', than: 'perbandingan'
  };

  const COORDINATOR = { and: 'penyambung', but: 'pertentangan', or: 'pilihan', so: 'akibat', yet: 'pertentangan', nor: 'penyambung' };

  const RELATIVE = {
    who: 'menjelaskan orang, sebagai subjek', whom: 'menjelaskan orang, sebagai objek',
    whose: 'menjelaskan kepemilikan', which: 'menjelaskan benda', that: 'menjelaskan orang atau benda'
  };

  const WH = ['what', 'where', 'when', 'who', 'whom', 'whose', 'which', 'why', 'how'];

  /* Kata kerja umum yang belum tercakup COMMON_VERB.
     Penting untuk mengenali bentuk orang ketiga singular (rains, tells, rings)
     saat menentukan batas klausa, misalnya "If it rains tomorrow, ...". */
  const VERB_EXTRA = [
    'rain', 'tell', 'belong', 'consist', 'include', 'involve', 'provide', 'offer', 'require', 'expect',
    'wish', 'wonder', 'manage', 'realize', 'notice', 'discover', 'mention', 'discuss', 'argue', 'complain',
    'apologize', 'forgive', 'confirm', 'deny', 'accept', 'receive', 'collect', 'deliver', 'exchange', 'replace',
    'repair', 'protect', 'waste', 'count', 'measure', 'weigh', 'mix', 'pour', 'boil', 'fry', 'bake', 'sweep',
    'fold', 'hang', 'fix', 'fill', 'empty', 'load', 'print', 'copy', 'sign', 'publish', 'continue', 'return',
    'enter', 'follow', 'lead', 'cause', 'happen', 'seem', 'appear', 'cost', 'fit', 'depend', 'refer', 'occur',
    'exist', 'disappear', 'depart', 'borrow', 'lend', 'owe', 'own', 'contain', 'carry', 'push', 'pull', 'hit',
    'kick', 'paint', 'dance', 'marry', 'die', 'fly', 'sail', 'reach', 'escape', 'knock', 'ring', 'shout',
    'scream', 'yell', 'hum', 'perform', 'act', 'produce', 'create', 'design', 'invent', 'explore', 'examine',
    'inspect', 'test', 'solve', 'construct', 'destroy', 'crush', 'burn', 'melt', 'freeze', 'spill', 'pack',
    'wrap', 'lock', 'unlock', 'press', 'rise', 'sink', 'float', 'drop', 'fall', 'jump', 'climb', 'lift',
    'bend', 'dive', 'jog', 'march', 'whisper', 'nod', 'stare', 'glance', 'lean', 'tie', 'beat', 'dry',
    'brush', 'comb', 'shave', 'bathe', 'flow', 'glow', 'shine', 'sparkle', 'score', 'sneak', 'tiptoe'
  ];
  const VERB_EXTRA_INDEX = {};
  VERB_EXTRA.forEach(function (v) { VERB_EXTRA_INDEX[v] = true; });

  const DETERMINER = ['a', 'an', 'the', 'this', 'that', 'these', 'those', 'my', 'your', 'his', 'her', 'its', 'our', 'their', 'some', 'any', 'no', 'every', 'each', 'both', 'all', 'most', 'many', 'much', 'few', 'little', 'several', 'another', 'other', 'either', 'neither', 'what', 'which', 'whose', 'more', 'less', 'enough', 'such'];

  const PRONOUN_SUBJ = ['i', 'you', 'he', 'she', 'it', 'we', 'they', 'who', 'what', 'this', 'that', 'these', 'those', 'there', 'one'];
  const PRONOUN_OBJ = ['me', 'you', 'him', 'her', 'it', 'us', 'them', 'whom', 'which', 'this', 'that', 'these', 'those', 'one', 'ones'];
  const PRONOUN_POSS = ['my', 'your', 'his', 'her', 'its', 'our', 'their', 'mine', 'yours', 'hers', 'ours', 'theirs'];

  const LINKING = ['be', 'am', 'is', 'are', 'was', 'were', 'been', 'being', 'become', 'becomes', 'became', 'seem', 'seems', 'seemed', 'look', 'looks', 'looked', 'feel', 'feels', 'felt', 'sound', 'sounds', 'sounded', 'taste', 'tastes', 'tasted', 'smell', 'smells', 'smelled', 'remain', 'remains', 'remained', 'stay', 'stays', 'stayed', 'get', 'gets', 'got', 'grow', 'grows', 'grew'];

  const COMMON_VERB = ['go', 'come', 'eat', 'drink', 'sleep', 'read', 'write', 'speak', 'talk', 'play', 'run', 'walk', 'buy', 'sell', 'make', 'take', 'give', 'get', 'see', 'watch', 'look', 'listen', 'hear', 'help', 'work', 'study', 'learn', 'teach', 'ask', 'answer', 'open', 'close', 'start', 'stop', 'like', 'love', 'hate', 'want', 'need', 'use', 'put', 'keep', 'let', 'show', 'know', 'think', 'believe', 'hope', 'try', 'call', 'meet', 'send', 'bring', 'build', 'break', 'catch', 'choose', 'clean', 'cook', 'drink', 'drive', 'enjoy', 'finish', 'find', 'forget', 'grow', 'have', 'hear', 'hold', 'learn', 'leave', 'live', 'lose', 'move', 'pay', 'read', 'remember', 'ride', 'say', 'sell', 'sing', 'sit', 'sleep', 'swim', 'throw', 'understand', 'wear', 'win', 'wash', 'wait', 'travel', 'arrive', 'leave', 'visit', 'cook', 'draw', 'drink', 'drive', 'join', 'laugh', 'cry', 'smile', 'hurry', 'worry', 'mind', 'enjoy', 'avoid', 'suggest', 'decide', 'agree', 'refuse', 'promise', 'explain', 'describe', 'imagine', 'remember', 'forget', 'explain', 'describe', 'promise', 'prefer', 'admit', 'deny', 'report', 'announce'];

  const ADJECTIVE = ['good', 'bad', 'big', 'small', 'new', 'old', 'young', 'long', 'short', 'tall', 'happy', 'sad', 'angry', 'easy', 'hard', 'difficult', 'fast', 'slow', 'hot', 'cold', 'warm', 'cool', 'clean', 'dirty', 'nice', 'beautiful', 'ugly', 'expensive', 'cheap', 'early', 'late', 'free', 'busy', 'hungry', 'thirsty', 'tired', 'ready', 'sure', 'afraid', 'funny', 'kind', 'polite', 'safe', 'dangerous', 'healthy', 'delicious', 'quiet', 'loud', 'smart', 'stupid', 'strong', 'weak', 'heavy', 'light', 'right', 'wrong', 'true', 'false', 'same', 'different', 'important', 'possible', 'necessary', 'famous', 'modern', 'simple', 'interesting', 'boring', 'exciting', 'surprising', 'terrible', 'wonderful', 'lazy', 'rich', 'poor', 'young', 'perfect', 'useless', 'careful', 'clear', 'obvious'];

  const COMMON_NOUN_HINT = ['time', 'day', 'night', 'morning', 'evening', 'people', 'man', 'woman', 'child', 'student', 'teacher', 'friend', 'family', 'mother', 'father', 'brother', 'sister', 'son', 'daughter', 'baby', 'home', 'house', 'room', 'door', 'window', 'table', 'chair', 'book', 'paper', 'phone', 'computer', 'car', 'bus', 'train', 'food', 'rice', 'bread', 'water', 'milk', 'coffee', 'tea', 'money', 'price', 'city', 'town', 'country', 'school', 'office', 'job', 'work', 'question', 'answer', 'problem', 'idea', 'story', 'game', 'name', 'reason', 'way', 'thing', 'lot', 'kind', 'part', 'place', 'group', 'number', 'system', 'plan', 'project'];

  const IRREGULAR_FORM_INDEX = (function () {
    const idx = {};
    Object.keys(IRREGULAR).forEach(function (k) {
      const r = IRREGULAR[k];
      [r.base, r.past, r.pp].concat(r.forms || []).forEach(function (f) {
        if (f) idx[f] = k;
      });
    });
    return idx;
  })();

  EG.verbBaseOf = function (word) {
    const c = lower(stripPunct(word));
    if (IRREGULAR_FORM_INDEX[c]) return IRREGULAR_FORM_INDEX[c];
    if (/ing$/.test(c)) return baseFromIng(c);
    if (/ed$/.test(c)) return baseFromEd(c);
    return c;
  };

  /* ---------------- UTILITAS ---------------- */
  function lower(w) { return String(w).toLowerCase(); }

  function stripPunct(w) {
    return w.replace(/^[^\w'’-]+|[^\w'’-]+$/g, '').replace(/[’']s$/i, '’s');
  }

  function baseFromIng(w) {
    if (/ieing$/.test(w)) return w.slice(0, -3) + 'y';
    if (/([bdfglmnprt])\1ing$/.test(w)) return w.slice(0, -4) + w.slice(-4, -3);
    if (/[^aeiou]ing$/.test(w)) return w.slice(0, -3);
    return w.slice(0, -3) + 'e';
  }

  function baseFromEd(w) {
    if (/ied$/.test(w)) return w.slice(0, -3) + 'y';
    if (/([bdfglmnprt])\1ed$/.test(w)) return w.slice(0, -3);
    if (/ed$/.test(w)) return w.slice(0, -2);
    return w;
  }

  /* Mengetahui bentuk kata kerja: V1, V2, V3, atau -ing */
  EG.verbForm = function (word) {
    const w = lower(word);
    const key = IRREGULAR_FORM_INDEX[w];
    if (key) {
      const r = IRREGULAR[key];
      if (r.forms && r.forms.indexOf(w) > -1) return { form: 'V', base: r.base, note: 'bentuk tidak beraturan dari "be"' };
      if (w === r.past && r.past === r.pp) return { form: 'V2=V3', base: r.base, note: 'lampau dan participle sama' };
      if (w === r.past) return { form: 'V2', base: r.base, note: 'lampau (past)' };
      if (w === r.pp) return { form: 'V3', base: r.base, note: 'participle (past participle)' };
      return { form: 'V1', base: r.base, note: 'bentuk dasar' };
    }
    if (/ing$/.test(w)) return { form: '-ing', base: baseFromIng(w), note: 'bentuk -ing, biasanya untuk continuous atau gerund' };
    if (/ed$/.test(w)) return { form: 'V2=V3', base: baseFromEd(w), note: 'lampau dan participle sama (kata kerja beraturan)' };
    return { form: 'V1', base: w, note: 'bentuk dasar' };
  };

  EG.isAuxiliary = function (word) { return lower(word) in AUX_WORD; };
  EG.isModal = function (word) { return lower(word) in MODAL; };
  EG.isNegation = function (word) { return NEG_TOKENS.indexOf(lower(word)) > -1; };

  /* ---------------- LANGKAH 1: TIPE KALIMAT ---------------- */
  EG.splitSentences = function (text) {
    const raw = String(text || '').trim();
    if (!raw) return [];
    return raw
      .replace(/([.!?])\s+/g, '$1|')
      .split('|')
      .map(function (s) { return s.trim(); })
      .filter(Boolean);
  };

  EG.tokenize = function (sentence) {
    const out = [];
    const parts = String(sentence).match(/[A-Za-z'’-]+(?:'[A-Za-z]+)?|\d+(?:[.,]\d+)?|[^\sA-Za-z\d]/g) || [];
    parts.forEach(function (p, i) {
      out.push({ i: i, raw: p, low: lower(p), punct: !/[A-Za-z\d]/.test(p) });
    });
    return out;
  };

  function sentenceType(sentence, firstWord) {
    const s = sentence.trim();
    const end = s.slice(-1);
    const fw = firstWord || '';
    const head = s.toLowerCase();
    const headWords = String(s).toLowerCase().match(/[a-z']+/g) || [];

    const negStart = headWords.slice(0, 3).some(function (w) { return NEG_TOKENS.indexOf(w) > -1; });
    const auxStart = fw in AUX_WORD || fw in NEG_AUX;
    const whStart = WH.indexOf(fw) > -1;

    if (end === '?') {
      if (whStart) return { key: 'wh-question', label: 'Kalimat tanya (wh-question)', why: 'Diawali kata tanya seperti what, where, when, who, why, how.' };
      return { key: 'yesno-question', label: 'Kalimat tanya (yes/no question)', why: 'Diawali kata kerja bantu, jadi jawabannya hanya "ya" atau "tidak".' };
    }
    if (end === '!') {
      return { key: 'exclamatory', label: 'Kalimat seru (exclamatory)', why: 'Diakhiri tanda seru, jadi isinya terasa kuat dan emotif.' };
    }
    if (negStart) {
      return { key: 'negative', label: 'Kalimat negatif', why: 'Diawali kata penanda negatif, jadi kalimatnya berarti membatalkan.' };
    }
    if (head.indexOf(' there ') > -1 || head.indexOf('there is') === 0 || head.indexOf('there are') === 0 || head.indexOf('there was') === 0 || head.indexOf('there were') === 0) {
      return { key: 'existential', label: 'Kalimat keberadaan (there is / there are)', why: 'Dipakai untuk mengatakan ada atau tidak ada sesuatu di suatu tempat.' };
    }
    if (auxStart && (fw in MODAL || fw in BE || fw in HAVE || fw in DO)) {
      return { key: 'yesno-question', label: 'Kalimat tanya (yes/no question)', why: 'Diawali kata kerja bantu seperti is, are, do, can, will.' };
    }
    if (COMMON_VERB.indexOf(fw) > -1 || /^[A-Za-z]+$/.test(fw) && /^(please|do not|don't|let)$/.test(fw)) {
      return { key: 'imperative', label: 'Kalimat perintah (imperative)', why: 'Diawali kata kerja tanpa subjek. Diambil dari kata "you".' };
    }
    return { key: 'declarative', label: 'Kalimat pernyataan (declarative)', why: 'Paling umum. Menyatakan fakta, opini, atau informasi.' };
  }

  /* ---------------- LANGKAH 2: KLAUSA ---------------- */
  function splitClauses(tokens) {
    const chunks = [];
    let cur = [];

    for (let i = 0; i < tokens.length; i++) {
      const tok = tokens[i];

      if (tok.punct) {
        if (tok.raw === ',' && cur.length && cur.some(function (t) { return looksLikeVerbSoft(t.raw); })) {
          const nxt = tokens[i + 1];
          if (nxt && !nxt.punct) {
            const nw = lower(nxt.raw);
            const startsNew = PRONOUN_SUBJ.indexOf(nw) > -1 || DETERMINER.indexOf(nw) > -1;
            if (startsNew) {
              chunks.push({ words: cur, connector: null, kind: 'main' });
              cur = [];
              continue;
            }
          }
        }
        continue;
      }

      const w = tok.low;
      const isCoord = w in COORDINATOR;
      const isSub = w in SUBORDINATOR;
      const isRel = w in RELATIVE;
      const ambiguous = AMBIGUOUS_SUB.indexOf(w) > -1;
      const canSplit = !ambiguous || startsClause(tokens, i);
      const leading = cur.length === 0;

      if (isSub && leading && canSplit) {
        chunks.push({ words: [], connector: tok.raw, kind: 'subordinat' });
        continue;
      }

      /* "the book that I bought" -> relatif, karena kata sebelumnya kata benda.
         "I think that he is right" -> bukan relatif, karena kata sebelumnya kata kerja. */
      const prevTok = cur.length ? cur[cur.length - 1] : null;
      const prevIsVerb = !!prevTok && looksLikeVerbSoft(prevTok.raw);
      if (isRel && !leading && canSplit && !prevIsVerb) {
        chunks.push({ words: cur, connector: null, kind: 'main' });
        cur = [];
        chunks.push({ words: [], connector: tok.raw, kind: 'relatif' });
        continue;
      }

      if ((isCoord || isSub) && !leading && canSplit) {
        chunks.push({ words: cur, connector: null, kind: 'main' });
        cur = [];
        chunks.push({ words: [], connector: tok.raw, kind: isSub ? 'subordinat' : 'koordinat' });
        continue;
      }

      cur.push(tok);
    }
    if (cur.length) chunks.push({ words: cur, connector: null, kind: 'main' });

    const clauses = [];
    let pending = null;
    for (let i = 0; i < chunks.length; i++) {
      const c = chunks[i];
      if (!c.words.length && c.connector) {
        pending = { connector: c.connector, kind: c.kind };
        continue;
      }
      clauses.push({
        words: c.words.map(function (t) { return t.raw; }),
        connector: pending ? pending.connector : null,
        kind: pending ? pending.kind : 'main',
        reason: pending && pending.kind === 'subordinat' ? SUBORDINATOR[lower(pending.connector)] : null
      });
      pending = null;
    }
    if (!clauses.length) {
      const anyWord = tokens.filter(function (t) { return !t.punct; }).map(function (t) { return t.raw; });
      if (anyWord.length) clauses.push({ words: anyWord, connector: null, kind: 'main', reason: null });
    }
    return attachRelativeTails(clauses);
  }

  /* Kata klausa relatif sering tertelan sisa klausa utama di belakangnya:
     "The book that I bought yesterday is very interesting"
     -> relatif: "I bought yesterday", kembali ke klausa utama: "is very interesting".
     Dicari batasnya dari kata kerja kedua yang muncul setelah kelompok kata kerja relatif. */
  function findRelativeBoundary(words) {
    if (words.length < 4) return null;
    let v = -1;
    for (let i = 0; i < words.length; i++) {
      if (looksLikeVerbSoft(words[i])) { v = i; break; }
    }
    if (v === -1) return null;
    let i = v + 1;
    const next = lower(stripPunct(words[i] || ''));
    if (/ing$|ed$/.test(next)) i++;
    for (let k = i; k < words.length; k++) {
      if (looksLikeVerbSoft(words[k])) return k;
    }
    return null;
  }

  function attachRelativeTails(clauses) {
    const out = [];
    for (let i = 0; i < clauses.length; i++) {
      const c = clauses[i];
      if (c.kind !== 'relatif') { out.push(c); continue; }
      const cut = findRelativeBoundary(c.words);
      if (cut === null) { out.push(c); continue; }
      const tail = c.words.slice(cut);
      c.words = c.words.slice(0, cut);
      out.push(c);
      let j = out.length - 2;
      while (j >= 0 && out[j].kind !== 'main') j--;
      if (j >= 0) out[j].words = out[j].words.concat(tail);
      else out.push({ words: tail, connector: null, kind: 'main', reason: null });
    }
    return out;
  }

  /* ---------------- LANGKAH 3: BENTUK VERB & TENSE ---------------- */
  function looksLikeVerb(w) {
    const c = lower(stripPunct(w));
    if (!c) return false;
    if (c in BE || c in HAVE || c in DO || c in MODAL || c in NEG_AUX) return true;
    if (NEG_TOKENS.indexOf(c) > -1) return true;
    if (/ing$/.test(c) || /ed$/.test(c)) return true;
    if (IRREGULAR_FORM_INDEX[c]) return true;
    if (COMMON_VERB.indexOf(c) > -1 || VERB_EXTRA_INDEX[c]) return true;
    if (LINKING.indexOf(c) > -1) return true;
    return false;
  }

  /* Versi longgar: ikut mengenali bentuk orang ketiga Singular (rains, goes, studies).
     Dipakai HANYA untuk mendeteksi batas klausa, bukan untuk menentukan inti kata kerja,
     supaya kata benda jamak tidak ikut dianggap kata kerja. */
  function looksLikeVerbSoft(w) {
    if (looksLikeVerb(w)) return true;
    const c = lower(stripPunct(w));
    if (c.length < 3 || !/s$/.test(c)) return false;
    if (/ss$|us$|is$/.test(c)) return false;
    const stems = [c.slice(0, -1), c.slice(0, -2)];
    if (/ies$/.test(c)) stems.push(c.slice(0, -3) + 'y');
    return stems.some(function (s) { return s.length > 1 && looksLikeVerb(s); });
  }

  function startsClause(tokens, idx) {
    const a = lower(stripPunct((tokens[idx + 1] || {}).raw || ''));
    const b = lower(stripPunct((tokens[idx + 2] || {}).raw || ''));
    if (!a) return false;
    const aSubject = PRONOUN_SUBJ.indexOf(a) > -1 || DETERMINER.indexOf(a) > -1 || a === 'there';
    if (!aSubject) return false;
    return looksLikeVerbSoft(b);
  }

  function verbGroup(words) {
    let start = -1;
    for (let i = 0; i < words.length; i++) {
      if (looksLikeVerb(words[i])) { start = i; break; }
    }
    if (start === -1) return { start: -1, aux: [], main: null, tail: null, end: words.length };

    const aux = [];
    let i = start;
    while (i < words.length) {
      const w = lower(words[i]);
      if (w in NEG_AUX) { aux.push(words[i]); i++; continue; }
      if (w in BE || w in HAVE || w in MODAL) { aux.push(words[i]); i++; continue; }
      if (w in DO) { aux.push(words[i]); i++; continue; }
      break;
    }

    let main = null;
    let tail = null;

    if (i < words.length) {
      const w = lower(words[i]);
      if (w === 'not' || w === 'never') { aux.push(words[i]); i++; }
    }

    if (i < words.length && looksLikeVerb(words[i]) && lower(words[i]) !== 'not') {
      main = words[i];
      i++;
    } else if (aux.length) {
      main = aux.pop();
    }

    if (i < words.length && /ing$/.test(lower(words[i]))) { tail = words[i]; i++; }

    return { start: start, aux: aux, main: main, tail: tail, end: i };
  }

  function detectTense(aux, main, tail) {
    const a = aux.map(lower);
    const m = lower(main || '');
    const notes = [];

    let tense = 'unknown';
    let label = 'Tidak dikenali';
    let form = 'unknown';

    const be = a.find(function (x) { return x in BE; }) || (m in BE ? m : null);
    const have = a.find(function (x) { return x in HAVE; });
    const modal = a.find(function (x) { return x in MODAL; });
    const doAux = a.find(function (x) { return x in DO; });
    const futureModal = modal && (modal === 'will' || modal === 'shall' || modal === 'going');

    const isIng = !!(tail || /ing$/.test(m));
    const isEd = /ed$/.test(m);
    const vf = m ? EG.verbForm(m) : null;
    const isPassive = !!be && !have && !modal && (isEd || (vf && (vf.form === 'V3' || vf.form === 'V2=V3')));

    if (futureModal) {
      tense = 'future';
      label = 'Future (' + modal + ' + kata kerja dasar)';
      form = 'will + V1';
      notes.push('Modal "will" dipakai untuk rencana, tebakan, atau keputusan saat itu juga.');
    } else if (modal) {
      tense = 'modal';
      label = 'Kalimat dengan modal "' + modal + '"';
      form = modal + ' + V1';
      notes.push('Modal menunjukkan sikap pembicara terhadap tindakan, bukan waktunya.');
    } else if (have && isEd && have === 'had') {
      tense = 'past-perfect';
      label = 'Past Perfect (sudah terjadi sebelum waktu lain di masa lalu)';
      form = 'had + V3';
      notes.push('Dipakai untuk menyatakan yang lebih dulu terjadi pada masa lalu.');
    } else if (have && isIng) {
      tense = 'present-perfect-continuous';
      label = 'Present Perfect Continuous (sedang berlangsung dari lalu)';
      form = 'have/has + been + V-ing';
      notes.push('Dipakai untuk aktivitas yang mulai dari lalu dan masih berjalan.');
    } else if (have) {
      tense = 'present-perfect';
      label = 'Present Perfect (pengalaman atau hasil)';
      form = 'have/has + V3';
      notes.push('Dipakai tanpa menyebut waktu lampau yang pasti.');
    } else if (be && isIng) {
      tense = /^(was|were)$/.test(be) ? 'past-continuous' : 'present-continuous';
      label = tense === 'past-continuous' ? 'Past Continuous (sedang terjadi di masa lalu)' : 'Present Continuous (sedang terjadi sekarang)';
      form = tense === 'past-continuous' ? 'was/were + V-ing' : 'am/is/are + V-ing';
      notes.push('Dipakai untuk aktivitas yang sedang berjalan saat kejadian itu dibicarakan.');
    } else if (isPassive) {
      tense = 'passive';
      label = 'Passive Voice (kalimat pasif)';
      form = 'be + V3';
      notes.push('Subjeknya yang dikenai aksi, bukan pelaku. Kalau pelaku disebut,biasanya ditulis setelah "by".');
    } else if (doAux) {
      tense = doAux === 'did' ? 'past-simple' : 'present-simple';
      label = doAux === 'did' ? 'Past Simple' : 'Present Simple';
      form = doAux === 'did' ? 'did + V1' : 'do/does + V1';
      notes.push('Kata kerja bantu do/does dipakai karena kata kerja utamanya tidak berubah bentuk.');
    } else if (vf && (vf.form === 'V2' || vf.form === 'V2=V3')) {
      tense = 'past-simple';
      label = 'Past Simple (kebiasaan atau kejadian di masa lalu)';
      form = 'V2';
      notes.push('Bentuk lampau kata kerja.');
    } else if (vf && vf.form === 'V3') {
      tense = 'past-simple-irr';
      label = 'Past Simple (kata kerja tidak beraturan)';
      form = 'V2';
    } else {
      tense = 'present-simple';
      label = 'Present Simple (kebiasaan atau fakta)';
      form = 'V1';
      notes.push('Bentuk paling dasar. Dipakai untuk kebiasaan, jadwal, dan fakta.');
    }

    return { tense: tense, label: label, form: form, notes: notes, passive: isPassive };
  }

  function detectConditional(clauses) {
    const ifIndex = clauses.findIndex(function (c) { return lower(c.connector || '') === 'if'; });
    if (ifIndex === -1) return null;

    const ifClause = clauses[ifIndex];
    /* "If I were you, I would..." -> if-clause lalu main.
       "I will go if it does not rain" -> main dulu, if-clause di belakang,
       jadi bagian hasilnya adalah klausa utama yang mendahului. */
    const resultClause = ifIndex + 1 < clauses.length ? clauses[ifIndex + 1] : (ifIndex > 0 ? clauses[ifIndex - 1] : null);
    const trailing = ifIndex + 1 >= clauses.length;

    const ifAux = lower(ifClause.aux || '');
    const ifMain = lower(ifClause.mainVerb || '');
    const resAux = lower((resultClause && resultClause.aux) || '');
    const resMain = lower((resultClause && resultClause.mainVerb) || '');

    /* Third: klausa if sudah_manager memakai perfect (had + V3), atau hasil memakai "would have". */
    const ifPerfect = /^(have|has|had)$/.test(ifAux) && ifAux !== ifMain;
    const resPerfect = /\b(would|could|should)\s+have\b/.test(lower(resultClause && resultClause.verb) || '') ||
      (/^(have|has|had)$/.test(resAux) && /^(would|could|should)$/.test(resMain));

    /* Second: kondisi tidak nyata — "were/had + kata benda", hasil "would + V1". */
    const unrealState = /^(was|were|had)$/.test(ifMain);
    const unrealResult = /^(would|could|should)$/.test(resAux) && !resPerfect;

    let type = 'first';
    let label = 'First Conditional (syarat yang mungkin terjadi)';
    if (ifPerfect || resPerfect) {
      type = 'third';
      label = 'Third Conditional (penyesalan tentang masa lalu)';
    } else if (unrealState || unrealResult) {
      type = 'second';
      label = 'Second Conditional (syarat yang tidak nyata)';
    }

    const note = trailing
      ? 'Klausa if ada di belakang, jadi hasil (apodosis) adalah bagian kalimat sebelum if.'
      : null;

    return {
      type: type,
      label: label,
      ifClause: ifClause.words.join(' '),
      resultClause: resultClause ? resultClause.words.join(' ') : '',
      note: note
    };
  }

  /* ---------------- LANGKAH 4: JENIS KATA ---------------- */
  function posTag(word, ctx) {
    const w = lower(word);
    const clean = stripPunct(w);
    const c = clean;
    if (!c) return { tag: 'lainnya', why: 'Bukan kata bahasa.' };
    if (w in NEG_AUX || NEG_TOKENS.indexOf(w) > -1) return { tag: 'kata penanda negatif', why: 'Membatalkan atau menolak.' };
    if (w in MODAL) return { tag: 'modal', why: 'Menunjukkan sikap: bisa, harus, atau mungkin.' };
    if (WH.indexOf(w) > -1) return { tag: 'kata tanya', why: 'Meminta informasi.' };
    if (w in BE) return { tag: 'kata kerja bantu', why: 'Bentuk dari kata kerja "be".' };
    if (w in HAVE) return { tag: 'kata kerja bantu', why: 'Bentuk dari kata kerja "have".' };
    if (w in DO) return { tag: 'kata kerja bantu', why: 'Bentuk dari kata kerja "do".' };
    if (w in COORDINATOR) return { tag: 'konjungsi koordinat', why: 'Menghubungkan dua klausa yang setara.' };
    if (w in SUBORDINATOR) return { tag: 'konjungsi subordinat', why: 'Menghubungkan klausa utama dengan klausa bawahan untuk ' + SUBORDINATOR[w] + '.' };
    if (w in RELATIVE) return { tag: 'kata ganti relatif', why: RELATIVE[w] + '.' };
    if (INTERJECTION.indexOf(c) > -1) return { tag: 'kata interjeksi', why: 'Ungkapan singkat untuk menunjukkan rasa atau sopan santun.' };
    if (DETERMINER.indexOf(w) > -1) return { tag: 'determiner', why: 'Menentukan atau menunjuk kata benda.' };
    if (PRONOUN_POSS.indexOf(w) > -1) return { tag: 'kata ganti kepemilikan', why: 'Menunjukkan milik seseorang.' };
    if (PRONOUN_SUBJ.indexOf(w) > -1 || PRONOUN_OBJ.indexOf(w) > -1) return { tag: 'kata ganti', why: 'Menggantikan kata benda.' };
    if (/^\d/.test(c)) return { tag: 'kata bilangan', why: 'Menyatakan jumlah.' };
    if (TIME_ADV.indexOf(c) > -1) return { tag: 'kata keterangan waktu', why: 'Menunjuk waktu atau frekuensi.' };
    if (DEGREE_ADV.indexOf(c) > -1) return { tag: 'kata keterangan', why: 'Menunjukkan tingkat atau batas, misalnya "very" atau "too".' };
    if (/ly$/.test(c) && c.length > 4) return { tag: 'kata keterangan', why: 'Biasanya berakhiran -ly dan menjawab "how".' };
    if (/ing$/.test(c)) return { tag: 'kata kerja (bentuk -ing) atau gerund', why: 'Bentuk -ing. Bisa jadi kata kerja dalam continuous, bisa jadi gerund.' };
    if (/ed$/.test(c)) return { tag: 'kata kerja (bentuk lampau)', why: 'Berakhiran -ed, dipakai untuk lampau atau participle.' };
    if (ADJECTIVE.indexOf(c) > -1) return { tag: 'kata sifat', why: 'Menggambarkan sifat.' };
    if (COMMON_VERB.indexOf(c) > -1) return { tag: 'kata kerja', why: 'Menyatakan tindakan atau keadaan.' };
    if (COMMON_VERB.indexOf(EG.verbBaseOf(c)) > -1) return { tag: 'kata kerja (bentuk lampau)', why: 'Bentuk lampau dari kata kerja "' + EG.verbBaseOf(c) + '".' };
    if (PREPOSITION.indexOf(c) > -1) return { tag: 'preposisi', why: 'Menunjukkan hubungan, tempat, atau waktu.' };
    if (COMMON_NOUN_HINT.indexOf(c) > -1) return { tag: 'kata benda', why: 'Menyebut benda, orang, atau tempat.' };
    if (/[^s]s$/.test(c) && COMMON_NOUN_HINT.indexOf(c.replace(/es$/, '')) > -1) return { tag: 'kata benda (jamak)', why: 'Bentuk jamak dari kata benda "' + c.replace(/es$/, '') + '".' };
    if (DETERMINER.indexOf(c) > -1) return { tag: 'determiner', why: 'Menentukan atau menunjuk kata benda.' };
    if (/(tion|ment|ness|ity|ship|age)$/.test(c)) return { tag: 'kata benda', why: 'Akhiran ini sering dipakai untuk kata benda.' };
    if (/(ous|ful|ive|able|ible|al|ic|ish|less)$/.test(c)) return { tag: 'kata sifat', why: 'Akhiran ini sering dipakai untuk kata sifat.' };
    return { tag: 'kata benda atau kata kerja', why: 'Tidak bisa dipastikan dari bentuknya. Perhatikan posisinya di kalimat.' };
  }

  /* ---------------- LANGKAH 5: ANATOMI KLAUSA ---------------- */
  function analyzeClause(clause) {
    let words = clause.words.slice();
    while (words.length && INTERJECTION.indexOf(lower(words[0])) > -1) words.shift();
    if (!words.length) words = clause.words.slice();

    const vg = verbGroup(words);
    const vi = vg.end;
    const subject = vg.start > 0 ? words.slice(0, vg.start) : [];

    const after = words.slice(vi);
    const object = [];
    const complement = [];
    const adjuncts = [];

    if (after.length) {
      const isLink = vg.main && LINKING.indexOf(lower(vg.main)) > -1;
      let cut = after.length;
      for (let i = 0; i < after.length; i++) {
        const w = lower(after[i]);
        if (CUT_WORDS.indexOf(w) > -1 || w in COORDINATOR || w in SUBORDINATOR) { cut = i; break; }
      }
      const core = after.slice(0, cut);
      const rest = after.slice(cut);
      if (isLink) complement.push.apply(complement, core);
      else object.push.apply(object, core);
      if (rest.length) adjuncts.push(rest.join(' '));
    }

    const tenseInfo = detectTense(vg.aux, vg.main, vg.tail);

    return {
      words: words,
      subject: subject.join(' '),
      verb: [].concat(vg.aux, vg.main ? [vg.main] : [], vg.tail ? [vg.tail] : []).join(' '),
      aux: vg.aux.join(' '),
      mainVerb: vg.main || '',
      object: object.join(' '),
      complement: complement.join(' '),
      adjuncts: adjuncts,
      tense: tenseInfo,
      connector: clause.connector,
      kind: clause.kind,
      reason: clause.reason
    };
  }

  /* ---------------- LANGKAH 6: FRASA ---------------- */
  function chunkPhrases(words) {
    const chunks = [];
    let i = 0;
    while (i < words.length) {
      const w = lower(words[i]);
      if (PREPOSITION.indexOf(w) > -1) {
        let j = i + 1;
        while (j < words.length) {
          const n = lower(words[j]);
          if (PREPOSITION.indexOf(n) > -1 || n in COORDINATOR || n in SUBORDINATOR) break;
          j++;
        }
        let end = j;
        if (end - i >= 4) {
          const lastUnit = lower(words[end - 1]);
          const beforeUnit = lower(words[end - 2]);
          if (TIME_UNIT.indexOf(lastUnit) > -1 && (DETERMINER.indexOf(beforeUnit) > -1 || beforeUnit === 'each')) end = end - 2;
        }
        chunks.push({ type: 'prepositional phrase', text: words.slice(i, end).join(' '), role: 'menjelaskan tempat, waktu, atau cara' });
        if (end < j) {
          chunks.push({ type: 'time phrase', text: words.slice(end, j).join(' '), role: 'menjelaskan kapan atau seberapa sering' });
        }
        i = j;
        continue;
      }
      if (w === 'to' && i + 1 < words.length && /^[a-z]+$/i.test(words[i + 1])) {
        chunks.push({ type: 'infinitive phrase', text: words.slice(i, i + 2).join(' '), role: 'biasanya menunjukkan tujuan' });
        i += 2;
        continue;
      }
      if (/ing$/.test(w) || /ed$/.test(w)) {
        let j = i + 1;
        while (j < words.length && !PREPOSITION.indexOf(lower(words[j])) && !/[.?!,]/.test(words[j])) j++;
        if (j - i > 1 || (words[i] && /ing$/i.test(words[i]) && j === i + 1)) {
          chunks.push({ type: /ing$/.test(w) ? 'gerund phrase' : 'participial phrase', text: words.slice(i, j).join(' '), role: 'menambahkan informasi tambahan' });
          i = j;
          continue;
        }
      }
      if (DETERMINER.indexOf(w) > -1 || ADJECTIVE.indexOf(w) > -1) {
        let j = i;
        while (j < words.length && (DETERMINER.indexOf(lower(words[j])) > -1 || ADJECTIVE.indexOf(lower(words[j])) > -1 || /ly$/.test(lower(words[j])))) j++;
        if (j < words.length) {
          chunks.push({ type: 'noun phrase', text: words.slice(i, j + 1).join(' '), role: 'sebagai subjek atau objek' });
          i = j + 1;
          continue;
        }
      }
      if (/ly$/.test(w)) {
        chunks.push({ type: 'adverb phrase', text: words[i], role: 'menjawab "how" atau "seberapa"' });
        i++;
        continue;
      }
      i++;
    }
    return chunks;
  }

  /* ---------------- LANGKAH 6: KONSEP KONSEP ---------------- */
  function buildConceptCheck(sentence, clauses, tags) {
    const qs = [];
    const c0 = clauses[0];
    if (!c0) return qs;

    const tenseLabels = [
      c0.tense.label,
      'Present Simple (kebiasaan atau fakta)',
      'Present Continuous (sedang terjadi sekarang)',
      'Past Simple (kejadian di masa lalu)',
      'Present Perfect (pengalaman, tanpa waktu pasti)',
      'Future Simple (rencana atau tebakan)'
    ];
    const uniqTense = tenseLabels.filter(function (v, i, a) { return a.indexOf(v) === i; });
    while (uniqTense.length < 3) uniqTense.push('Tidak ada tense khusus, kalimat pernyataan biasa');
    qs.push({
      q: 'Kalimat ini memakai tense apa?',
      opts: uniqTense.slice(0, 4),
      ans: 0,
      hidden: c0.tense.form + ' — ' + c0.tense.label,
      hint: 'Lihat bentuk kata kerjanya, lalu tanya: ini kebiasaan, sedang terjadi, atau sudah terjadi?'
    });

    const target = tags.filter(function (t) { return t.tag !== 'lainnya' && !/^kata penanda/.test(t.tag); })[0];
    if (target) {
      const posOptions = [target.tag, 'kata keterangan', 'preposisi', 'konjungsi'].filter(function (v, i, a) { return a.indexOf(v) === i; });
      qs.push({
        q: 'Kata "' + target.raw + '" punya tugas apa di kalimat ini?',
        opts: posOptions,
        ans: 0,
        hidden: target.why,
        hint: 'Perhatikan posisinya: sebelum kata benda, sesudah kata kerja, atau menyambung dua bagian.'
      });
    }

    qs.push({
      q: 'Kalau kalimat ini diganti jadi bentuk lain, bagian mana yang PALING mungkin berubah?',
      opts: ['Kata kerja', 'Kata keterangan', 'Tanda baca', ' Huruf besar'],
      ans: 0,
      hidden: 'Kata kerja berubah bentuk mengikuti tense (dari read menjadi reads, reading, atau read).',
      hint: 'Waktu dan tense menempel pada kata kerja.'
    });

    return qs;
  }

  /* ---------------- MESIN UTAMA ---------------- */
  EG.analyze = function (text) {
    const sentences = EG.splitSentences(text);
    if (!sentences.length) {
      return { input: String(text || ''), sentences: [], error: 'Belum ada kalimat untuk dianalisis.' };
    }

    const results = sentences.map(function (s) {
      const tokens = EG.tokenize(s);
      const words = tokens.filter(function (t) { return !t.punct; }).map(function (t) { return t.raw; });
      const firstWord = words.length ? lower(stripPunct(words[0])) : '';
      const type = sentenceType(s, firstWord);
      const clauses = splitClauses(tokens).map(analyzeClause);
      const tags = words.map(function (w) {
        const info = posTag(w, {});
        return { raw: w, tag: info.tag, why: info.why };
      });
      const phrases = chunkPhrases(words);
      const questions = buildConceptCheck(s, clauses, tags);
      const usedConnector = clauses.map(function (c) { return lower(c.connector || ''); });
      tags.forEach(function (t) {
        if (t.tag === 'konjungsi subordinat' && PREPOSITION.indexOf(lower(t.raw)) > -1 && usedConnector.indexOf(lower(t.raw)) === -1) {
          t.tag = 'preposisi';
          t.why = 'Di sini dipakai sebagai preposisi, bukan untuk memulai klausa baru.';
        }
      });

      const isNegative = type.key === 'negative' || words.some(function (w) { return EG.isNegation(w); });
      const independent = clauses.filter(function (c) { return c.kind === 'main'; });
      const dependent = clauses.filter(function (c) { return c.kind !== 'main'; });

      const mainWithVerb = clauses.filter(function (c) { return c.kind === 'main' && c.verb; })[0];
      const anyWithVerb = clauses.filter(function (c) { return c.verb; })[0];

      return {
        sentence: s,
        type: type,
        words: words,
        tokens: tokens,
        tags: tags,
        phrases: phrases,
        clauses: clauses,
        tense: (mainWithVerb || anyWithVerb || clauses[0] || {}).tense || null,
        conditional: detectConditional(clauses),
        clauseCount: clauses.length,
        independentCount: independent.length,
        dependentCount: dependent.length,
        isNegative: isNegative,
        questions: questions,
        warnings: buildWarnings(clauses, tags, type)
      };
    });

    return { input: String(text), sentences: results };
  };

  function buildWarnings(clauses, tags, type) {
    const w = [];
    if (clauses.length > 1) {
      const anySub = clauses.some(function (c) { return c.kind !== 'main'; });
      if (!anySub) w.push('Ada beberapa klausa tapi tidak ada kata penghubung. Coba tambahkan "and", "but", atau "so".');
    }
    const isImperative = type && type.key === 'imperative';
    clauses.forEach(function (c) {
      if (!c.subject && c.kind === 'main' && c.verb && !isImperative) {
        w.push('Klausa ini tidak punya subjek. Kalau bukan perintah, tambahkan subjek seperti "I", "you", atau "he".');
      }
      if (c.subject && !c.verb && c.kind === 'main') w.push('Klausa ini punya subjek tapi tidak punya kata kerja.');
      if (/^would\s+(?!have|be$)/i.test(c.verb) && lower(c.connector || '') === 'if') {
        w.push('Di bagian "if" untuk conditional, jangan pakai "would". Pakai bentuk lampau atau "was/were".');
      }
      if (/^will\b/i.test(c.verb) && lower(c.connector || '') === 'if') {
        w.push('Klausa syarat "if" tidak boleh memakai "will". Cukup pakai bentuk present simple.');
      }
    });
    const neg = tags.filter(function (t) { return /^kata penanda/.test(t.tag); });
    if (neg.length) {
      const hasAux = clauses.some(function (c) { return c.aux; });
      if (!hasAux && neg[0].tag === 'kata penanda negatif' && neg[0].raw.toLowerCase().indexOf('not') > -1) {
        w.push('Kalimat negatif biasanya butuh kata kerja bantu, misalnya "do not go" atau "is not here".');
      }
    }
    return w;
  }

  /* ---------------- DAFTAR KALIMAT CONTOH ---------------- */
  EG.autopsySamples = [
    'I go to school every day.',
    'She is reading a good book now.',
    'They have finished their homework.',
    'We went to the market yesterday.',
    'I will call you tomorrow.',
    'Because it was raining, we stayed home.',
    'The book that I bought yesterday is very interesting.',
    'If I had more time, I would learn another language.',
    'The room was cleaned by the students.',
    'She can swim very well.'
  ];

})(window.EG);
