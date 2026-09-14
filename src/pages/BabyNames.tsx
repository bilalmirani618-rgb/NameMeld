import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Heart, Copy, Share2, Check } from 'lucide-react';
import { getRandomNames, allOrigins, NameEntry } from '../data/names';
import { copyToClipboard, toggleFavorite, isFavorite, shareResult } from '../utils/helpers';

import SEO from '../components/SEO';
import ToolSEOContent from '../components/ToolSEOContent';
export default function BabyNames() {
  const [gender, setGender] = useState('Any');
  const [origin, setOrigin] = useState('Any');
  const [style, setStyle] = useState('Modern');
  const [meaning, setMeaning] = useState('');
  const [results, setResults] = useState<NameEntry[]>([]);
  const [favs, setFavs] = useState<Record<string, boolean>>({});
  const [copied, setCopied] = useState('');

  const generate = () => {
    const names = getRandomNames(12, { gender, origin, style, meaning });
    setResults(names);
    const favMap: Record<string, boolean> = {};
    names.forEach(n => { favMap[n.name] = isFavorite(n.name); });
    setFavs(favMap);
  };

  const handleCopy = (name: NameEntry) => {
    copyToClipboard(`${name.name} – ${name.meaning} (${name.origin}, ${name.gender})`);
    setCopied(name.name);
    setTimeout(() => setCopied(''), 2000);
  };

  const handleFav = (name: string) => {
    const result = toggleFavorite(name);
    setFavs(prev => ({ ...prev, [name]: result }));
  };

  return (
    <div className="max-w-5xl mx-auto px-4 py-8 sm:py-12">
      <SEO title="Baby Names: Boy Names, Girl Names & Unisex Names | NameMeld" description="Explore baby names, boy names, girl names and unisex options by origin, style and meaning. Build a thoughtful baby name shortlist with NameMeld." path="/baby-names" keywords={["baby names", "boy names", "girl names", "unisex baby names", "baby name generator"]} breadcrumbs={[{name:'Home',path:'/'},{name:'Baby Names',path:'/baby-names'}]} />
      <div className="text-center mb-10">
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'var(--font-display)' }}>
          Baby Name Generator
        </h1>
        <p className="text-gray-600">Find the perfect baby name based on your preferences.</p>
      </div>

      <div className="bg-white rounded-2xl p-6 sm:p-8 border border-gray-100 shadow-sm mb-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Gender</label>
            <select value={gender} onChange={e => setGender(e.target.value)} className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-pink-500 outline-none">
              <option>Any</option>
              <option>Male</option>
              <option>Female</option>
              <option>Unisex</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Origin</label>
            <select value={origin} onChange={e => setOrigin(e.target.value)} className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-pink-500 outline-none">
              <option>Any</option>
              {allOrigins.map(o => <option key={o}>{o}</option>)}
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Style</label>
            <select value={style} onChange={e => setStyle(e.target.value)} className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-pink-500 outline-none">
              {['Modern', 'Classic', 'Unique', 'Short', 'Elegant', 'Strong', 'Cute', 'Traditional', 'Luxury'].map(s => <option key={s}>{s}</option>)}
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Meaning (optional)</label>
            <input type="text" value={meaning} onChange={e => setMeaning(e.target.value)} placeholder="e.g. light, love" className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-pink-500 outline-none" />
          </div>
        </div>
        <button onClick={generate} className="w-full sm:w-auto px-8 py-3 bg-gradient-to-r from-pink-500 to-rose-500 text-white font-semibold rounded-xl hover:from-pink-600 hover:to-rose-600 transition-all shadow-lg shadow-pink-200">
          Generate Baby Names
        </button>
      </div>

      {results.length > 0 && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {results.map((name, i) => (
            <div key={`${name.slug}-${i}`} className="baby-result-card card-hover bg-white rounded-2xl p-5 border border-gray-100 shadow-sm animate-fade-in" style={{ animationDelay: `${i * 0.05}s` }}>
              <div className="flex items-start justify-between mb-2">
                <Link to={`/names/${name.slug}`} className="text-xl font-bold text-gray-900 hover:text-pink-600 transition-colors">
                  {name.name}
                </Link>
                <div className="flex items-center gap-1">
                  <button onClick={() => handleFav(name.name)} className={`fav-btn p-2 rounded-lg ${favs[name.name] ? 'text-pink-500 bg-pink-50' : 'text-gray-300 hover:text-pink-500'}`}>
                    <Heart size={16} fill={favs[name.name] ? 'currentColor' : 'none'} />
                  </button>
                  <button onClick={() => handleCopy(name)} className="p-2 rounded-lg text-gray-300 hover:text-indigo-600 hover:bg-indigo-50">
                    {copied === name.name ? <Check size={16} className="text-green-500" /> : <Copy size={16} />}
                  </button>
                  <button onClick={() => shareResult('Baby Name', `${name.name} – ${name.meaning}`)} className="p-2 rounded-lg text-gray-300 hover:text-indigo-600 hover:bg-indigo-50">
                    <Share2 size={16} />
                  </button>
                </div>
              </div>
              <p className="text-sm text-gray-600 mb-3">{name.meaning}</p>
              <div className="flex flex-wrap gap-2">
                <span className="px-2 py-1 bg-pink-50 text-pink-700 rounded text-xs font-medium">{name.origin}</span>
                <span className="px-2 py-1 bg-purple-50 text-purple-700 rounded text-xs font-medium">{name.gender}</span>
              </div>
            </div>
          ))}
        </div>
      )}

      {results.length === 0 && (
        <div className="text-center py-12 bg-gray-50 rounded-xl">
          <p className="text-gray-500">Set your preferences and click "Generate Baby Names" to get started.</p>
        </div>
      )}

      {/* About the Tool */}
      <section className="mt-12 bg-gradient-to-br from-pink-50/50 to-rose-50/50 rounded-2xl p-6 sm:p-8 border border-pink-100/50">
        <h2 className="text-2xl font-bold text-gray-900 mb-3" style={{ fontFamily: 'var(--font-display)' }}>About the Baby Name Generator</h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          <strong>Choosing a baby name</strong> is one of the most exciting and important decisions you'll make as a parent. A name will accompany your child throughout their entire life, shaping first impressions and carrying deep personal and cultural significance. Our <strong>baby name generator</strong> helps you discover the perfect name by filtering through hundreds of beautiful names based on your preferences.
        </p>
        <p className="text-gray-600 leading-relaxed mb-4">
          Whether you're looking for <strong>traditional names</strong> that honor your heritage, <strong>modern names</strong> that feel fresh and contemporary, <strong>unique names</strong> that stand out, or <strong>classic names</strong> that never go out of style, this tool helps you explore options from <strong>Arabic, Japanese, English, Indian, Spanish, French, Korean</strong>, and many other cultures. Each name comes with its <strong>meaning, origin, and pronunciation</strong>, helping you make an informed choice.
        </p>
        <p className="text-gray-600 leading-relaxed">
          You can filter by <strong>gender</strong> (boy, girl, or unisex), <strong>origin</strong> (to match your cultural background or preferences), <strong>style</strong> (modern, classic, rare, traditional, short, elegant), and even search by <strong>meaning</strong> (find names that mean "light," "love," "strength," etc.). Save your favorites as you browse, explore detailed name profiles, and build a shortlist of your top choices. It's completely free, requires no account, and works instantly.
        </p>
      </section>

      {/* How to Use */}
      <section className="mt-10">
        <h2 className="text-2xl font-bold text-gray-900 mb-6" style={{ fontFamily: 'var(--font-display)' }}>How to Find the Perfect Baby Name</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-white rounded-xl p-5 border border-gray-100 shadow-sm">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-pink-500 to-rose-600 text-white font-bold flex items-center justify-center mb-3 text-sm">1</div>
            <h3 className="font-semibold text-gray-900 mb-1">Set Preferences</h3>
            <p className="text-sm text-gray-600">Choose gender, origin, style, and optionally search by meaning.</p>
          </div>
          <div className="bg-white rounded-xl p-5 border border-gray-100 shadow-sm">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-pink-500 to-rose-600 text-white font-bold flex items-center justify-center mb-3 text-sm">2</div>
            <h3 className="font-semibold text-gray-900 mb-1">Generate Names</h3>
            <p className="text-sm text-gray-600">Click generate to see 12 baby names matching your criteria.</p>
          </div>
          <div className="bg-white rounded-xl p-5 border border-gray-100 shadow-sm">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-pink-500 to-rose-600 text-white font-bold flex items-center justify-center mb-3 text-sm">3</div>
            <h3 className="font-semibold text-gray-900 mb-1">Explore & Save</h3>
            <p className="text-sm text-gray-600">View full profiles, save favorites, and learn about each name's meaning.</p>
          </div>
          <div className="bg-white rounded-xl p-5 border border-gray-100 shadow-sm">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-pink-500 to-rose-600 text-white font-bold flex items-center justify-center mb-3 text-sm">4</div>
            <h3 className="font-semibold text-gray-900 mb-1">Narrow Down</h3>
            <p className="text-sm text-gray-600">Adjust filters and regenerate until you find names you love.</p>
          </div>
        </div>
      </section>

      {/* Tips for Parents */}
      <section className="mt-10 bg-amber-50/50 rounded-2xl p-6 border border-amber-100/50">
        <h2 className="text-xl font-bold text-gray-900 mb-4">💡 Tips for Choosing a Baby Name</h2>
        <ul className="space-y-2">
          <li className="flex items-start gap-2 text-sm text-gray-700"><span className="text-amber-500 font-bold mt-0.5">✓</span><span><strong>Say it out loud:</strong> Does it sound good with your last name? Is it easy to pronounce?</span></li>
          <li className="flex items-start gap-2 text-sm text-gray-700"><span className="text-amber-500 font-bold mt-0.5">✓</span><span><strong>Consider initials:</strong> Make sure the first, middle, and last name initials don't spell anything awkward.</span></li>
          <li className="flex items-start gap-2 text-sm text-gray-700"><span className="text-amber-500 font-bold mt-0.5">✓</span><span><strong>Think about nicknames:</strong> What might people call your child? Are you comfortable with common shortenings?</span></li>
          <li className="flex items-start gap-2 text-sm text-gray-700"><span className="text-amber-500 font-bold mt-0.5">✓</span><span><strong>Research the meaning:</strong> Make sure you love the name's meaning and cultural significance.</span></li>
          <li className="flex items-start gap-2 text-sm text-gray-700"><span className="text-amber-500 font-bold mt-0.5">✓</span><span><strong>Check popularity:</strong> Do you want a common name or something unique? Both are valid choices!</span></li>
          <li className="flex items-start gap-2 text-sm text-gray-700"><span className="text-amber-500 font-bold mt-0.5">✓</span><span><strong>Get partner agreement:</strong> Both parents should feel good about the choice. Compromise and discuss.</span></li>
          <li className="flex items-start gap-2 text-sm text-gray-700"><span className="text-amber-500 font-bold mt-0.5">✓</span><span><strong>Live with it:</strong> Say the name for a few days. Imagine calling it across a playground. Does it feel right?</span></li>
        </ul>
      </section>

      {/* FAQ */}
      <ToolSEOContent
        title="Baby Names: Boy Names, Girl Names and Unisex Ideas"
        paragraphs={[
          'Choosing a baby name often starts with a broad list and becomes easier as you compare sound, meaning, origin, spelling, and style. NameMeld lets you explore baby names using practical filters so you can move from hundreds of possibilities to a smaller group worth discussing with your family.',
          'Browse boy names, girl names, and unisex baby names, then use origin and meaning filters when heritage or symbolism matters. You can also compare modern and classic naming styles. A good shortlist usually balances a name you love with a spelling and pronunciation that will remain practical in everyday life.',
          'NameMeld is an idea and discovery tool, not an official registry or popularity authority. Meaning and origin information can vary between languages and sources, so important cultural or historical claims should be checked against authoritative references before making a final decision.'
        ]}
        links={[
          { to: '/name-generator', label: 'Try the name generator' },
          { to: '/popularity', label: 'Explore name popularity' },
          { to: '/name-meaning', label: 'Research name meanings' },
        ]}
      />

      <section className="mt-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6" style={{ fontFamily: 'var(--font-display)' }}>Frequently Asked Questions</h2>
        <div className="space-y-3">
          <details className="bg-white rounded-xl border border-gray-100 p-5 group">
            <summary className="font-medium text-gray-900 cursor-pointer list-none flex items-center justify-between">
              How do I choose a meaningful baby name?
              <span className="text-indigo-500 group-open:rotate-180 transition-transform">▼</span>
            </summary>
            <p className="mt-3 text-sm text-gray-600">Start by considering your values, heritage, and what qualities you want the name to represent. Use our meaning filter to find names that embody traits like "strength," "wisdom," "joy," or "peace." Explore names from your cultural background for deeper connection.</p>
          </details>
          <details className="bg-white rounded-xl border border-gray-100 p-5 group">
            <summary className="font-medium text-gray-900 cursor-pointer list-none flex items-center justify-between">
              Should I choose a popular or unique name?
              <span className="text-indigo-500 group-open:rotate-180 transition-transform">▼</span>
            </summary>
            <p className="mt-3 text-sm text-gray-600">Both have advantages! Popular names are familiar and easy to spell, while unique names help your child stand out. There's no right answer – choose what feels right for your family. You can use our filters to explore both ends of the spectrum.</p>
          </details>
          <details className="bg-white rounded-xl border border-gray-100 p-5 group">
            <summary className="font-medium text-gray-900 cursor-pointer list-none flex items-center justify-between">
              How important is name pronunciation?
              <span className="text-indigo-500 group-open:rotate-180 transition-transform">▼</span>
            </summary>
            <p className="mt-3 text-sm text-gray-600">Very important! Your child will introduce themselves thousands of times. Consider whether people will pronounce it correctly, whether it's easy to spell after hearing it, and whether you're comfortable correcting people regularly.</p>
          </details>
          <details className="bg-white rounded-xl border border-gray-100 p-5 group">
            <summary className="font-medium text-gray-900 cursor-pointer list-none flex items-center justify-between">
              Can I use this tool for gender-neutral names?
              <span className="text-indigo-500 group-open:rotate-180 transition-transform">▼</span>
            </summary>
            <p className="mt-3 text-sm text-gray-600">Absolutely! Select "Unisex" in the gender filter to see names that work for any gender. Many beautiful names like Kai, Jordan, Avery, and Riley are popular for all genders.</p>
          </details>
          <details className="bg-white rounded-xl border border-gray-100 p-5 group">
            <summary className="font-medium text-gray-900 cursor-pointer list-none flex items-center justify-between">
              What if my partner and I can't agree on a name?
              <span className="text-indigo-500 group-open:rotate-180 transition-transform">▼</span>
            </summary>
            <p className="mt-3 text-sm text-gray-600">This is very common! Try each generating your top 10 favorites separately, then compare lists. Look for overlap or compromise. Sometimes saying names out loud together for a few days helps. Remember, you can always use one name legally and another as a middle name or nickname.</p>
          </details>
        </div>
      </section>

      {/* Related Keywords */}
      <section className="mt-10">
        <h2 className="text-lg font-semibold text-gray-900 mb-3">Related Searches</h2>
        <div className="flex flex-wrap gap-2">
          {['baby name generator', 'baby names 2026', 'unique baby names', 'popular baby names', 'baby girl names', 'baby boy names', 'gender neutral names', 'Arabic baby names', 'Japanese baby names', 'baby names with meanings', 'uncommon baby names', 'beautiful baby names'].map(k => (
            <span key={k} className="px-3 py-1 bg-gray-50 border border-gray-200 rounded-full text-xs text-gray-600">{k}</span>
          ))}
        </div>
      </section>
    </div>
  );
}
