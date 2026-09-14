export function copyToClipboard(text: string): Promise<boolean> {
  if (navigator.clipboard) {
    return navigator.clipboard.writeText(text).then(() => true).catch(() => false);
  }
  // Fallback
  const ta = document.createElement('textarea');
  ta.value = text;
  ta.style.position = 'fixed';
  ta.style.opacity = '0';
  document.body.appendChild(ta);
  ta.select();
  try {
    document.execCommand('copy');
    return Promise.resolve(true);
  } catch {
    return Promise.resolve(false);
  } finally {
    document.body.removeChild(ta);
  }
}

export function shareResult(title: string, text: string, url?: string) {
  if (navigator.share) {
    return navigator.share({ title, text, url: url || window.location.href });
  }
  return copyToClipboard(text);
}

export function getShareUrl(platform: 'twitter' | 'facebook' | 'whatsapp', text: string, url?: string) {
  const encodedText = encodeURIComponent(text);
  const encodedUrl = encodeURIComponent(url || window.location.href);
  switch (platform) {
    case 'twitter':
      return `https://twitter.com/intent/tweet?text=${encodedText}&url=${encodedUrl}`;
    case 'facebook':
      return `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}&quote=${encodedText}`;
    case 'whatsapp':
      return `https://wa.me/?text=${encodedText}%20${encodedUrl}`;
  }
}

// Favorites management using localStorage
const FAVORITES_KEY = 'namemeld_favorites';

export function getFavorites(): string[] {
  try {
    const stored = localStorage.getItem(FAVORITES_KEY);
    return stored ? JSON.parse(stored) : [];
  } catch {
    return [];
  }
}

export function saveFavorite(name: string): void {
  const favorites = getFavorites();
  if (!favorites.includes(name)) {
    favorites.push(name);
    localStorage.setItem(FAVORITES_KEY, JSON.stringify(favorites));
  }
}

export function removeFavorite(name: string): void {
  const favorites = getFavorites().filter(n => n !== name);
  localStorage.setItem(FAVORITES_KEY, JSON.stringify(favorites));
}

export function isFavorite(name: string): boolean {
  return getFavorites().includes(name);
}

export function toggleFavorite(name: string): boolean {
  if (isFavorite(name)) {
    removeFavorite(name);
    return false;
  } else {
    saveFavorite(name);
    return true;
  }
}

// Brand name generation helpers
const brandPrefixes = ['Vel', 'Nov', 'Zen', 'Lum', 'Aer', 'Nex', 'Pur', 'Sol', 'Ver', 'Flux', 'Ori', 'Evo', 'Ast', 'Cyr', 'Dex', 'Ely', 'Fyn', 'Glo', 'Hex', 'Ion'];
const brandSuffixes = ['ora', 'exa', 'tra', 'ify', 'ly', 'io', 'ia', 'os', 'ix', 'um', 'us', 'ar', 'en', 'on', 'al', 'el', 'in', 'er', 'an', 'ax'];
const brandWords = ['Cloud', 'Peak', 'Spark', 'Bloom', 'Swift', 'Bright', 'Core', 'Pulse', 'Wave', 'Edge', 'Flow', 'Nest', 'Glow', 'Rise', 'Mind', 'Link', 'Star', 'Forge', 'Drift', 'Bolt'];
const brandSecondWords = ['Lab', 'Hub', 'Box', 'Kit', 'Pad', 'Bay', 'Nest', 'Spot', 'Zone', 'Den', 'Arc', 'Net', 'Way', 'Run', 'Bit', 'Pro', 'Max', 'Plus', 'Go', 'Now'];

export function generateBrandNames(query: string, style: string, length: string, namingStyle: string): { name: string; reasoning: string }[] {
  const results: { name: string; reasoning: string }[] = [];
  const words = query.toLowerCase().split(/\s+/).filter(w => w.length > 2);
  const seed = query.split('').reduce((a, c) => a + c.charCodeAt(0), 0);
  
  const seededRandom = (i: number) => {
    const x = Math.sin(seed + i * 9301 + 49297) * 233280;
    return x - Math.floor(x);
  };

  const generateInvented = (i: number): string => {
    const pre = brandPrefixes[Math.floor(seededRandom(i) * brandPrefixes.length)];
    const suf = brandSuffixes[Math.floor(seededRandom(i + 100) * brandSuffixes.length)];
    return pre + suf;
  };

  const generateTwoWords = (i: number): string => {
    const w1 = brandWords[Math.floor(seededRandom(i + 200) * brandWords.length)];
    const w2 = brandSecondWords[Math.floor(seededRandom(i + 300) * brandSecondWords.length)];
    return w1 + w2;
  };

  const generateFromQuery = (i: number): string => {
    if (words.length === 0) return generateInvented(i);
    const word = words[Math.floor(seededRandom(i + 400) * words.length)];
    const suf = brandSuffixes[Math.floor(seededRandom(i + 500) * brandSuffixes.length)];
    return word.charAt(0).toUpperCase() + word.slice(1, 3) + suf;
  };

  const generateAbstract = (i: number): string => {
    const chars = 'aeiou';
    const cons = 'bcdfghklmnprstvz';
    let name = '';
    for (let j = 0; j < 5; j++) {
      if (j % 2 === 0) name += cons[Math.floor(seededRandom(i + j + 600) * cons.length)];
      else name += chars[Math.floor(seededRandom(i + j + 700) * chars.length)];
    }
    return name.charAt(0).toUpperCase() + name.slice(1);
  };

  const generatePremium = (i: number): string => {
    const pre = brandPrefixes[Math.floor(seededRandom(i + 800) * brandPrefixes.length)];
    const mid = words.length > 0 ? words[0].charAt(0).toUpperCase() + words[0].slice(1, 2) : '';
    const suf = brandSuffixes[Math.floor(seededRandom(i + 900) * brandSuffixes.length)];
    return pre + mid + suf;
  };

  for (let i = 0; i < 15; i++) {
    let name = '';
    let reasoning = '';
    
    switch (namingStyle.toLowerCase()) {
      case 'real words':
        name = generateTwoWords(i);
        reasoning = `Combines concepts related to ${query}`;
        break;
      case 'invented words':
        name = generateInvented(i);
        reasoning = `Unique invented name evoking ${style.toLowerCase()} qualities`;
        break;
      case 'two words':
        name = generateTwoWords(i);
        reasoning = `Two-word combination for ${query}`;
        break;
      case 'abstract':
        name = generateAbstract(i);
        reasoning = `Abstract name with memorable sound patterns`;
        break;
      case 'premium':
        name = generatePremium(i);
        reasoning = `Premium-sounding name for luxury positioning`;
        break;
      default:
        name = generateFromQuery(i);
        reasoning = `Derived from "${query}" with ${style.toLowerCase()} style`;
    }

    if (length === 'very short') name = name.slice(0, 5);
    else if (length === 'short') name = name.slice(0, 7);
    
    if (!results.find(r => r.name === name)) {
      results.push({ name, reasoning });
    }
  }

  return results.slice(0, 12);
}

// Name combination logic
export function combineNames(name1: string, name2: string): string[] {
  const n1 = name1.trim();
  const n2 = name2.trim();
  if (!n1 || !n2) return [];

  const combinations: string[] = [];
  const mid1 = Math.floor(n1.length / 2);
  const mid2 = Math.floor(n2.length / 2);

  // Prefix + Suffix combinations
  combinations.push(n1.slice(0, mid1) + n2.slice(mid2));
  combinations.push(n2.slice(0, mid2) + n1.slice(mid1));
  
  // First half + second half
  combinations.push(n1.slice(0, Math.ceil(n1.length / 2)) + n2.slice(Math.ceil(n2.length / 2)));
  combinations.push(n2.slice(0, Math.ceil(n2.length / 2)) + n1.slice(Math.ceil(n1.length / 2)));

  // Overlapping characters
  for (let i = 1; i < Math.min(n1.length, n2.length); i++) {
    if (n1.slice(-i).toLowerCase() === n2.slice(0, i).toLowerCase()) {
      combinations.push(n1 + n2.slice(i));
    }
    if (n2.slice(-i).toLowerCase() === n1.slice(0, i).toLowerCase()) {
      combinations.push(n2 + n1.slice(i));
    }
  }

  // Syllable mixing
  const vowels = 'aeiouAEIOU';
  const splitAtVowel = (name: string): [string, string] => {
    for (let i = name.length - 1; i > 0; i--) {
      if (vowels.includes(name[i]) && !vowels.includes(name[i - 1])) {
        return [name.slice(0, i), name.slice(i)];
      }
    }
    return [name.slice(0, Math.floor(name.length / 2)), name.slice(Math.floor(name.length / 2))];
  };

  const [pre1, suf1] = splitAtVowel(n1);
  const [pre2, suf2] = splitAtVowel(n2);
  combinations.push(pre1 + suf2);
  combinations.push(pre2 + suf1);

  // Capitalize first letter
  return [...new Set(combinations.map(c => c.charAt(0).toUpperCase() + c.slice(1).toLowerCase()))].slice(0, 10);
}
