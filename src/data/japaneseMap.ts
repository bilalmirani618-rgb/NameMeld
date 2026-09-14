// English to Katakana mapping for name conversion
// This is an approximation for entertainment purposes

const katakanaMap: Record<string, string> = {
  'a': 'ア', 'i': 'イ', 'u': 'ウ', 'e': 'エ', 'o': 'オ',
  'ka': 'カ', 'ki': 'キ', 'ku': 'ク', 'ke': 'ケ', 'ko': 'コ',
  'sa': 'サ', 'si': 'シ', 'shi': 'シ', 'su': 'ス', 'se': 'セ', 'so': 'ソ',
  'ta': 'タ', 'ti': 'チ', 'chi': 'チ', 'tu': 'ツ', 'tsu': 'ツ', 'te': 'テ', 'to': 'ト',
  'na': 'ナ', 'ni': 'ニ', 'nu': 'ヌ', 'ne': 'ネ', 'no': 'ノ',
  'ha': 'ハ', 'hi': 'ヒ', 'hu': 'フ', 'fu': 'フ', 'he': 'ヘ', 'ho': 'ホ',
  'ma': 'マ', 'mi': 'ミ', 'mu': 'ム', 'me': 'メ', 'mo': 'モ',
  'ya': 'ヤ', 'yi': 'イ', 'yu': 'ユ', 'ye': 'イェ', 'yo': 'ヨ',
  'ra': 'ラ', 'ri': 'リ', 'ru': 'ル', 're': 'レ', 'ro': 'ロ',
  'wa': 'ワ', 'wi': 'ウィ', 'wu': 'ウ', 'we': 'ウェ', 'wo': 'ヲ',
  'n': 'ン', 'nn': 'ン',
  'ga': 'ガ', 'gi': 'ギ', 'gu': 'グ', 'ge': 'ゲ', 'go': 'ゴ',
  'za': 'ザ', 'zi': 'ジ', 'ji': 'ジ', 'zu': 'ズ', 'ze': 'ゼ', 'zo': 'ゾ',
  'da': 'ダ', 'di': 'ヂ', 'du': 'ヅ', 'de': 'デ', 'do': 'ド',
  'ba': 'バ', 'bi': 'ビ', 'bu': 'ブ', 'be': 'ベ', 'bo': 'ボ',
  'pa': 'パ', 'pi': 'ピ', 'pu': 'プ', 'pe': 'ペ', 'po': 'ポ',
  'kya': 'キャ', 'kyi': 'キィ', 'kyu': 'キュ', 'kye': 'キェ', 'kyo': 'キョ',
  'sha': 'シャ', 'shu': 'シュ', 'she': 'シェ', 'sho': 'ショ',
  'cha': 'チャ', 'chu': 'チュ', 'che': 'チェ', 'cho': 'チョ',
  'nya': 'ニャ', 'nyu': 'ニュ', 'nyo': 'ニョ',
  'hya': 'ヒャ', 'hyu': 'ヒュ', 'hyo': 'ヒョ',
  'mya': 'ミャ', 'myu': 'ミュ', 'myo': 'ミョ',
  'rya': 'リャ', 'ryu': 'リュ', 'ryo': 'リョ',
  'gya': 'ギャ', 'gyu': 'ギュ', 'gyo': 'ギョ',
  'ja': 'ジャ', 'ju': 'ジュ', 'je': 'ジェ', 'jo': 'ジョ',
  'bya': 'ビャ', 'byu': 'ビュ', 'byo': 'ビョ',
  'pya': 'ピャ', 'pyu': 'ピュ', 'pyo': 'ピョ',
  'fa': 'ファ', 'fi': 'フィ', 'fe': 'フェ', 'fo': 'フォ',
  'va': 'ヴァ', 'vi': 'ヴィ', 'vu': 'ヴ', 've': 'ヴェ', 'vo': 'ヴォ',
  'tha': 'サ', 'thi': 'シ', 'thu': 'ス', 'the': 'セ', 'tho': 'ソ',
  'dha': 'ダ', 'dhi': 'ヂ', 'dhu': 'ヅ', 'dhe': 'デ', 'dho': 'ド',
  'la': 'ラ', 'li': 'リ', 'lu': 'ル', 'le': 'レ', 'lo': 'ロ',
  'lya': 'リャ', 'lyu': 'リュ', 'lyo': 'リョ',
  'x': 'ックス', 'q': 'ク',
  'bh': 'ブ', 'ph': 'フ',
  'wh': 'ウ',
  '-': 'ー',
};

const smallKatakana: Record<string, string> = {
  'a': 'ァ', 'i': 'ィ', 'u': 'ゥ', 'e': 'ェ', 'o': 'ォ',
  'ya': 'ャ', 'yu': 'ュ', 'yo': 'ョ',
  'tsu': 'ッ', 'tu': 'ッ',
};

// Special name mappings for common names
const specialNames: Record<string, { katakana: string; romanized: string }> = {
  'bilal': { katakana: 'ビラル', romanized: 'Biraru' },
  'muhammad': { katakana: 'ムハンマド', romanized: 'Muhhamado' },
  'ahmed': { katakana: 'アフメド', romanized: 'Ahumedo' },
  'sarah': { katakana: 'サラ', romanized: 'Sara' },
  'emma': { katakana: 'エンマ', romanized: 'Enma' },
  'ayaan': { katakana: 'アヤーン', romanized: 'Ayān' },
  'omar': { katakana: 'オマル', romanized: 'Omaru' },
  'fatima': { katakana: 'ファティマ', romanized: 'Fatima' },
  'ali': { katakana: 'アリ', romanized: 'Ari' },
  'zara': { katakana: 'ザラ', romanized: 'Zara' },
  'daniel': { katakana: 'ダニエル', romanized: 'Danieru' },
  'sophia': { katakana: 'ソフィア', romanized: 'Sofia' },
  'lucas': { katakana: 'ルーカス', romanized: 'Rūkasu' },
  'amelia': { katakana: 'アメリア', romanized: 'Ameria' },
  'hassan': { katakana: 'ハサン', romanized: 'Hasan' },
  'aisha': { katakana: 'アイシャ', romanized: 'Aisha' },
  'olivia': { katakana: 'オリビア', romanized: 'Oribia' },
  'noah': { katakana: 'ノア', romanized: 'Noa' },
  'liam': { katakana: 'リアム', romanized: 'Riamu' },
  'priya': { katakana: 'プリヤ', romanized: 'Puriya' },
  'arjun': { katakana: 'アルジュン', romanized: 'Arujun' },
  'carlos': { katakana: 'カルロス', romanized: 'Karurosu' },
  'isabella': { katakana: 'イザベラ', romanized: 'Izabera' },
  'raj': { katakana: 'ラジ', romanized: 'Raji' },
  'yara': { katakana: 'ヤラ', romanized: 'Yara' },
  'kenji': { katakana: 'ケンジ', romanized: 'Kenji' },
  'marie': { katakana: 'マリー', romanized: 'Marī' },
  'jean': { katakana: 'ジャン', romanized: 'Jan' },
  'james': { katakana: 'ジェームズ', romanized: 'Jēmuzu' },
  'david': { katakana: 'デイビッド', romanized: 'Deibiddo' },
  'alexander': { katakana: 'アレクサンダー', romanized: 'Arekusandā' },
  'charlotte': { katakana: 'シャーロット', romanized: 'Shārotto' },
  'gabriel': { katakana: 'ガブリエル', romanized: 'Gaburieru' },
  'grace': { katakana: 'グレース', romanized: 'Gurēsu' },
  'mohamed': { katakana: 'モハメド', romanized: 'Mohamedo' },
  'aria': { katakana: 'アリア', romanized: 'Aria' },
  'hiro': { katakana: 'ヒロ', romanized: 'Hiro' },
  'nadia': { katakana: 'ナディア', romanized: 'Nadia' },
  'oliver': { katakana: 'オリバー', romanized: 'Oribā' },
  'mei': { katakana: 'メイ', romanized: 'Mei' },
  'rahul': { katakana: 'ラフル', romanized: 'Rafuru' },
  'elena': { katakana: 'エレナ', romanized: 'Erena' },
  'amir': { katakana: 'アミール', romanized: 'Amīru' },
  'luna': { katakana: 'ルナ', romanized: 'Runa' },
  'kai': { katakana: 'カイ', romanized: 'Kai' },
  'chloe': { katakana: 'クロエ', romanized: 'Kuroe' },
  'yusuf': { katakana: 'ユスフ', romanized: 'Yusufu' },
  'mariana': { katakana: 'マリアナ', romanized: 'Mariana' },
  'mateo': { katakana: 'マテオ', romanized: 'Mateo' },
  'nora': { katakana: 'ノラ', romanized: 'Nora' },
  'hamza': { katakana: 'ハムザ', romanized: 'Hamuza' },
  'aurora': { katakana: 'アウロラ', romanized: 'Aurora' },
  'santiago': { katakana: 'サンティアゴ', romanized: 'Santiago' },
  'ren': { katakana: 'レン', romanized: 'Ren' },
  'valentina': { katakana: 'バレンティナ', romanized: 'Barentina' },
  'zain': { katakana: 'ゼイン', romanized: 'Zein' },
  'stella': { katakana: 'ステラ', romanized: 'Sutera' },
  'haru': { katakana: 'ハル', romanized: 'Haru' },
  'khadija': { katakana: 'カディージャ', romanized: 'Kadīja' },
  'leo': { katakana: 'レオ', romanized: 'Reo' },
  'sora': { katakana: 'ソラ', romanized: 'Sora' },
  'maryam': { katakana: 'マルヤム', romanized: 'Maruyamu' },
  'benjamin': { katakana: 'ベンジャミン', romanized: 'Benjamin' },
  'amira': { katakana: 'アミラ', romanized: 'Amira' },
  'rayyan': { katakana: 'ラヤン', romanized: 'Rayan' },
  'isla': { katakana: 'イスラ', romanized: 'Isura' },
  'hugo': { katakana: 'フーゴ', romanized: 'Fūgo' },
  'kavya': { katakana: 'カヴィヤ', romanized: 'Kaviya' },
  'adam': { katakana: 'アダム', romanized: 'Adamu' },
  'zainab': { katakana: 'ザイナブ', romanized: 'Zainabu' },
  'miguel': { katakana: 'ミゲル', romanized: 'Migeru' },
  'haruki': { katakana: 'ハルキ', romanized: 'Haruki' },
  'ananya': { katakana: 'アナニヤ', romanized: 'Ananiya' },
  'camila': { katakana: 'カミラ', romanized: 'Kamira' },
  'nisha': { katakana: 'ニシャ', romanized: 'Nisha' },
  'theo': { katakana: 'テオ', romanized: 'Teo' },
  'meera': { katakana: 'ミーラ', romanized: 'Mīra' },
  'elijah': { katakana: 'エライジャ', romanized: 'Eraija' },
  'aoi': { katakana: 'アオイ', romanized: 'Aoi' },
  'maya': { katakana: 'マヤ', romanized: 'Maya' },
  'khalid': { katakana: 'ハリド', romanized: 'Harido' },
  'victoria': { katakana: 'ビクトリア', romanized: 'Bikutoria' },
  'ravi': { katakana: 'ラヴィ', romanized: 'Ravi' },
  'nova': { katakana: 'ノヴァ', romanized: 'Nova' },
  'ivy': { katakana: 'アイビー', romanized: 'Aibī' },
  'rohan': { katakana: 'ローハン', romanized: 'Rōhan' },
  'celeste': { katakana: 'セレスト', romanized: 'Seresuto' },
  'jin': { katakana: 'ジン', romanized: 'Jin' },
  'felix': { katakana: 'フェリックス', romanized: 'Ferikkusu' },
  'diana': { katakana: 'ディアナ', romanized: 'Diana' },
  'sakura': { katakana: 'サクラ', romanized: 'Sakura' },
  'yuki': { katakana: 'ユキ', romanized: 'Yuki' },
  'hiroshi': { katakana: 'ヒロシ', romanized: 'Hiroshi' },
  'ethan': { katakana: 'イーサン', romanized: 'Īsan' },
  'mia': { katakana: 'ミア', romanized: 'Mia' },
  'hana': { katakana: 'ハナ', romanized: 'Hana' },
  'ibrahim': { katakana: 'イブラヒム', romanized: 'Iburahimu' },
  'layla': { katakana: 'レイラ', romanized: 'Reira' },
  'wei': { katakana: 'ウェイ', romanized: 'Wei' },
  'min-jun': { katakana: 'ミンジュン', romanized: 'Minjun' },
  'seo-yeon': { katakana: 'ソヨン', romanized: 'Soyon' },
  'hazel': { katakana: 'ヘイゼル', romanized: 'Heizeru' },
  'takeshi': { katakana: 'タケシ', romanized: 'Takeshi' },
  'ava': { katakana: 'アヴァ', romanized: 'Ava' },
  'willow': { katakana: 'ウィロー', romanized: 'Wirō' },
  'ryo': { katakana: 'リョウ', romanized: 'Ryō' },
  'aiden': { katakana: 'エイデン', romanized: 'Eiden' },
  'sofia': { katakana: 'ソフィア', romanized: 'Sofia' },
  'mason': { katakana: 'メイソン', romanized: 'Meison' },
  'lily': { katakana: 'リリー', romanized: 'Rirī' },
  'harper': { katakana: 'ハーパー', romanized: 'Hāpā' },
  'evelyn': { katakana: 'エヴリン', romanized: 'Eburin' },
  'scarlett': { katakana: 'スカーレット', romanized: 'Sukāretto' },
  'yasmin': { katakana: 'ヤスミン', romanized: 'Yasumin' },
  'jack': { katakana: 'ジャック', romanized: 'Jakku' },
  'ayla': { katakana: 'アイラ', romanized: 'Airā' },
  'thomas': { katakana: 'トーマス', romanized: 'Tōmasu' },
  'rumi': { katakana: 'ルミ', romanized: 'Rumi' },
  'iris': { katakana: 'アイリス', romanized: 'Airisu' },
  'sebastian': { katakana: 'セバスチャン', romanized: 'Sebasuchan' },
  'nour': { katakana: 'ヌール', romanized: 'Nūru' },
  'henry': { katakana: 'ヘンリー', romanized: 'Henrī' },
  'lina': { katakana: 'リナ', romanized: 'Rina' },
  'rose': { katakana: 'ローズ', romanized: 'Rōzu' },
  'kiran': { katakana: 'キラン', romanized: 'Kiran' },
  'william': { katakana: 'ウィリアム', romanized: 'Wiriamu' },
  'daisy': { katakana: 'デイジー', romanized: 'Deijī' },
  'ruby': { katakana: 'ルビー', romanized: 'Rubī' },
  'finn': { katakana: 'フィン', romanized: 'Fin' },
  'marcus': { katakana: 'マーカス', romanized: 'Mākasu' },
  'eliana': { katakana: 'エリアナ', romanized: 'Eriana' },
  'ryu': { katakana: 'リュウ', romanized: 'Ryū' },
  'samuel': { katakana: 'サミュエル', romanized: 'Samyueru' },
  'adrian': { katakana: 'エイドリアン', romanized: 'Eidorian' },
  'nia': { katakana: 'ニア', romanized: 'Nia' },
  'julian': { katakana: 'ジュリアン', romanized: 'Jurian' },
  'theodore': { katakana: 'セオドア', romanized: 'Seodoa' },
  'amara': { katakana: 'アマラ', romanized: 'Amara' },
  'levi': { katakana: 'レヴィ', romanized: 'Revi' },
  'freya': { katakana: 'フレイヤ', romanized: 'Fureiya' },
  'aya': { katakana: 'アヤ', romanized: 'Aya' },
  'nolan': { katakana: 'ノーラン', romanized: 'Nōran' },
  'ivan': { katakana: 'イヴァン', romanized: 'Ivan' },
  'sana': { katakana: 'サナ', romanized: 'Sana' },
  'mila': { katakana: 'ミラ', romanized: 'Mira' },
  'luca': { katakana: 'ルカ', romanized: 'Ruka' },
  'zayn': { katakana: 'ゼイン', romanized: 'Zein' },
};

export function convertToKatakana(name: string): { katakana: string; romanized: string } {
  const lower = name.toLowerCase().trim();
  
  // Check special names first
  if (specialNames[lower]) {
    return specialNames[lower];
  }

  // Algorithmic conversion
  let katakana = '';
  let romanized = '';
  let i = 0;
  const chars = lower.split('');

  while (i < chars.length) {
    let matched = false;
    
    // Try matching 3 characters first (for combinations like 'shi', 'cha', 'tsu')
    if (i + 2 < chars.length) {
      const three = chars.slice(i, i + 3).join('');
      if (katakanaMap[three]) {
        katakana += katakanaMap[three];
        romanized += three.charAt(0).toUpperCase() + three.slice(1);
        i += 3;
        matched = true;
      }
    }
    
    // Try matching 2 characters
    if (!matched && i + 1 < chars.length) {
      const two = chars.slice(i, i + 2).join('');
      if (katakanaMap[two]) {
        katakana += katakanaMap[two];
        romanized += two.charAt(0).toUpperCase() + two.slice(1);
        i += 2;
        matched = true;
      }
    }
    
    // Try matching 1 character
    if (!matched) {
      const one = chars[i];
      if (katakanaMap[one]) {
        katakana += katakanaMap[one];
        romanized += one.toUpperCase();
        i += 1;
        matched = true;
      } else if (one === ' ') {
        katakana += '・';
        romanized += ' ';
        i += 1;
        matched = true;
      } else if (one === '-') {
        katakana += 'ー';
        romanized += '-';
        i += 1;
        matched = true;
      } else if (/[a-z]/.test(one)) {
        // Fallback: use small katakana for unmatched vowels
        if (['a', 'i', 'u', 'e', 'o'].includes(one)) {
          katakana += smallKatakana[one] || katakanaMap[one] || 'ー';
        } else {
          katakana += 'ー';
        }
        romanized += one.toUpperCase();
        i += 1;
        matched = true;
      } else {
        i += 1;
      }
    }
  }

  // Add long vowel mark for names ending in certain patterns
  if (lower.endsWith('o') || lower.endsWith('u') || lower.endsWith('oo')) {
    if (!katakana.endsWith('ー')) {
      katakana += 'ー';
    }
  }

  return { katakana, romanized };
}
