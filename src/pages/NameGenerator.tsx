import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Heart, Copy, RefreshCw, Trash2, Check } from 'lucide-react';
import { getRandomNames, allOrigins, NameEntry } from '../data/names';
import { copyToClipboard, toggleFavorite, isFavorite } from '../utils/helpers';

import SEO from '../components/SEO';
import ToolSEOContent from '../components/ToolSEOContent';
export default function NameGenerator() {
  const [gender, setGender] = useState('Any');
  const [origin, setOrigin] = useState('Any');
  const [style, setStyle] = useState('Modern');
  const [meaning, setMeaning] = useState('');
  const [results, setResults] = useState<NameEntry[]>([]);
  const [copiedAll, setCopiedAll] = useState(false);
  const [favs, setFavs] = useState<Record<string, boolean>>({});

  const generate = () => {
    const names = getRandomNames(10, { gender, origin, style, meaning });
    setResults(names);
    const favMap: Record<string, boolean> = {};
    names.forEach(n => { favMap[n.name] = isFavorite(n.name); });
    setFavs(favMap);
  };

  const handleFav = (name: string) => {
    const result = toggleFavorite(name);
    setFavs(prev => ({ ...prev, [name]: result }));
  };

  const handleCopy = (name: NameEntry) => {
    copyToClipboard(`${name.name} – ${name.meaning} (${name.origin}, ${name.gender})`);
  };

  const handleCopyAll = () => {
    const text = results.map(n => `${n.name} – ${n.meaning} (${n.origin})`).join('\n');
    copyToClipboard(text);
    setCopiedAll(true);
    setTimeout(() => setCopiedAll(false), 2000);
  };

  return (
    <div className="max-w-5xl mx-auto px-4 py-8 sm:py-12">
      <SEO title="Name Generator & Random Name Generator | NameMeld" description="Generate name ideas by gender, origin, style and meaning. Use NameMeld as a flexible name generator and random name generator for people, characters, projects and more." path="/name-generator" keywords={["name generator", "random name generator", "unique name generator", "name ideas"]} breadcrumbs={[{name:'Home',path:'/'},{name:'Name Generator',path:'/name-generator'}]} />
      <div className="text-center mb-10">
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'var(--font-display)' }}>
          Name Generator
        </h1>
        <p className="text-gray-600">Generate unique names based on your preferences.</p>
      </div>

      {/* Controls */}
      <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm mb-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Gender</label>
            <select value={gender} onChange={e => setGender(e.target.value)} className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none">
              <option>Any</option>
              <option>Male</option>
              <option>Female</option>
              <option>Unisex</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Origin</label>
            <select value={origin} onChange={e => setOrigin(e.target.value)} className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none">
              <option>Any</option>
              {allOrigins.map(o => <option key={o}>{o}</option>)}
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Style</label>
            <select value={style} onChange={e => setStyle(e.target.value)} className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none">
              {['Modern', 'Classic', 'Unique', 'Short', 'Elegant', 'Strong', 'Cute', 'Traditional', 'Luxury'].map(s => <option key={s}>{s}</option>)}
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Meaning (optional)</label>
            <input type="text" value={meaning} onChange={e => setMeaning(e.target.value)} placeholder="e.g. light, strong" className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none" />
          </div>
        </div>
        <button onClick={generate} className="w-full sm:w-auto px-8 py-3 bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-semibold rounded-xl hover:from-indigo-600 hover:to-purple-700 transition-all shadow-lg shadow-indigo-200">
          Generate Names
        </button>
      </div>

      {/* Results */}
      {results.length > 0 && (
        <div>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold text-gray-900">Generated Names</h2>
            <div className="flex gap-2">
              <button onClick={generate} className="flex items-center gap-1 px-3 py-2 text-sm bg-indigo-50 text-indigo-700 rounded-lg hover:bg-indigo-100 transition-colors">
                <RefreshCw size={14} /> Generate More
              </button>
              <button onClick={handleCopyAll} className="flex items-center gap-1 px-3 py-2 text-sm bg-gray-50 text-gray-700 rounded-lg hover:bg-gray-100 transition-colors">
                {copiedAll ? <Check size={14} /> : <Copy size={14} />} Copy All
              </button>
              <button onClick={() => setResults([])} className="flex items-center gap-1 px-3 py-2 text-sm bg-red-50 text-red-700 rounded-lg hover:bg-red-100 transition-colors">
                <Trash2 size={14} /> Clear
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {results.map((name, i) => (
              <div key={`${name.slug}-${i}`} className="name-generator-card card-hover bg-white rounded-2xl p-5 border border-gray-100 shadow-sm animate-fade-in" style={{ animationDelay: `${i * 0.05}s` }}>
                <div className="flex items-start justify-between mb-2">
                  <Link to={`/names/${name.slug}`} className="text-xl font-bold text-gray-900 hover:text-indigo-600 transition-colors">
                    {name.name}
                  </Link>
                  <div className="flex items-center gap-1">
                    <button onClick={() => handleFav(name.name)} className={`fav-btn p-2 rounded-lg ${favs[name.name] ? 'text-pink-500 bg-pink-50' : 'text-gray-300 hover:text-pink-500 hover:bg-pink-50'} transition-all`}>
                      <Heart size={16} fill={favs[name.name] ? 'currentColor' : 'none'} />
                    </button>
                    <button onClick={() => handleCopy(name)} className="p-2 rounded-lg text-gray-300 hover:text-indigo-600 hover:bg-indigo-50 transition-all">
                      <Copy size={16} />
                    </button>
                  </div>
                </div>
                <p className="text-sm text-gray-600 mb-3">{name.meaning}</p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-2 py-1 bg-indigo-50 text-indigo-700 rounded text-xs font-medium">{name.origin}</span>
                  <span className="px-2 py-1 bg-purple-50 text-purple-700 rounded text-xs font-medium">{name.gender}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {results.length === 0 && (
        <div className="text-center py-12 bg-gray-50 rounded-xl">
          <p className="text-gray-500">Set your preferences and click "Generate Names" to get started.</p>
        </div>
      )}

      {/* About the Tool */}
      <section className="mt-12 bg-gradient-to-br from-purple-50/50 to-pink-50/50 rounded-2xl p-6 sm:p-8 border border-purple-100/50">
        <h2 className="text-2xl font-bold text-gray-900 mb-3" style={{ fontFamily: 'var(--font-display)' }}>About the Name Generator</h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          Our <strong>name generator</strong> is designed to help you discover unique, meaningful names for any purpose. Whether you're <strong>naming a character</strong> for a novel, <strong>choosing a baby name</strong>, creating a <strong>gaming username</strong>, or simply exploring <strong>beautiful names from around the world</strong>, this tool provides instant inspiration.
        </p>
        <p className="text-gray-600 leading-relaxed mb-4">
          Unlike simple random name pickers, our generator lets you <strong>filter by gender</strong> (male, female, unisex), <strong>origin</strong> (Arabic, Japanese, English, Indian, Spanish, French, Korean, and more), <strong>style</strong> (modern, classic, unique, elegant, strong, cute, traditional, luxury), and even <strong>meaning</strong>. This means you can find names that perfectly match your vision and requirements.
        </p>
        <p className="text-gray-600 leading-relaxed">
          Every generated name comes from our curated database of <strong>200+ names</strong> with verified meanings and origins. You can save your favorites, copy names instantly, and explore detailed profiles for each name. The generator is completely free, requires no account, and works instantly in your browser.
        </p>
      </section>

      {/* How to Use */}
      <section className="mt-10">
        <h2 className="text-2xl font-bold text-gray-900 mb-6" style={{ fontFamily: 'var(--font-display)' }}>How to Generate Names</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-white rounded-xl p-5 border border-gray-100 shadow-sm">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-500 to-pink-600 text-white font-bold flex items-center justify-center mb-3 text-sm">1</div>
            <h3 className="font-semibold text-gray-900 mb-1">Choose Gender</h3>
            <p className="text-sm text-gray-600">Select male, female, unisex, or any to filter names by gender association.</p>
          </div>
          <div className="bg-white rounded-xl p-5 border border-gray-100 shadow-sm">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-500 to-pink-600 text-white font-bold flex items-center justify-center mb-3 text-sm">2</div>
            <h3 className="font-semibold text-gray-900 mb-1">Pick an Origin</h3>
            <p className="text-sm text-gray-600">Choose from Arabic, Japanese, English, Indian, Spanish, French, Korean, and more.</p>
          </div>
          <div className="bg-white rounded-xl p-5 border border-gray-100 shadow-sm">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-500 to-pink-600 text-white font-bold flex items-center justify-center mb-3 text-sm">3</div>
            <h3 className="font-semibold text-gray-900 mb-1">Select a Style</h3>
            <p className="text-sm text-gray-600">Modern, classic, unique, short, elegant, strong, cute, traditional, or luxury.</p>
          </div>
          <div className="bg-white rounded-xl p-5 border border-gray-100 shadow-sm">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-500 to-pink-600 text-white font-bold flex items-center justify-center mb-3 text-sm">4</div>
            <h3 className="font-semibold text-gray-900 mb-1">Generate & Explore</h3>
            <p className="text-sm text-gray-600">Click generate, save favorites, copy names, and explore detailed profiles.</p>
          </div>
        </div>
      </section>

      {/* Pro Tips */}
      <section className="mt-10 bg-amber-50/50 rounded-2xl p-6 border border-amber-100/50">
        <h2 className="text-xl font-bold text-gray-900 mb-4">💡 Pro Tips for Better Results</h2>
        <ul className="space-y-2">
          <li className="flex items-start gap-2 text-sm text-gray-700"><span className="text-amber-500 font-bold mt-0.5">✓</span><span>Combine multiple filters for more specific results. Try "Female + Arabic + Elegant" for sophisticated Arabic girl names.</span></li>
          <li className="flex items-start gap-2 text-sm text-gray-700"><span className="text-amber-500 font-bold mt-0.5">✓</span><span>Use the meaning filter to find names with specific qualities like "light," "strength," or "wisdom."</span></li>
          <li className="flex items-start gap-2 text-sm text-gray-700"><span className="text-amber-500 font-bold mt-0.5">✓</span><span>Save your favorites as you browse – you can review them all later in your favorites list.</span></li>
          <li className="flex items-start gap-2 text-sm text-gray-700"><span className="text-amber-500 font-bold mt-0.5">✓</span><span>Click "Generate More" to get a fresh batch of names with the same filters.</span></li>
          <li className="flex items-start gap-2 text-sm text-gray-700"><span className="text-amber-500 font-bold mt-0.5">✓</span><span>Click on any generated name to see its full profile with pronunciation, similar names, and more.</span></li>
        </ul>
      </section>

      {/* FAQ */}
      <section className="mt-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6" style={{ fontFamily: 'var(--font-display)' }}>Frequently Asked Questions</h2>
        <div className="space-y-3">
          <details className="bg-white rounded-xl border border-gray-100 p-5 group">
            <summary className="font-medium text-gray-900 cursor-pointer list-none flex items-center justify-between">
              How does the name generator work?
              <span className="text-indigo-500 group-open:rotate-180 transition-transform">▼</span>
            </summary>
            <p className="mt-3 text-sm text-gray-600">Our generator randomly selects names from our curated database based on your filters (gender, origin, style, meaning). Each generation produces 10 unique names matching your criteria.</p>
          </details>
          <details className="bg-white rounded-xl border border-gray-100 p-5 group">
            <summary className="font-medium text-gray-900 cursor-pointer list-none flex items-center justify-between">
              Can I use generated names for my baby?
              <span className="text-indigo-500 group-open:rotate-180 transition-transform">▼</span>
            </summary>
            <p className="mt-3 text-sm text-gray-600">Absolutely! Our names come from a verified database with real meanings and origins. However, we recommend discussing your choice with family and considering cultural significance.</p>
          </details>
          <details className="bg-white rounded-xl border border-gray-100 p-5 group">
            <summary className="font-medium text-gray-900 cursor-pointer list-none flex items-center justify-between">
              Are the generated names unique?
              <span className="text-indigo-500 group-open:rotate-180 transition-transform">▼</span>
            </summary>
            <p className="mt-3 text-sm text-gray-600">Each generation is random, so you'll get different results each time. While individual names may be common, the combinations of filters help you find names that feel unique to your needs.</p>
          </details>
          <details className="bg-white rounded-xl border border-gray-100 p-5 group">
            <summary className="font-medium text-gray-900 cursor-pointer list-none flex items-center justify-between">
              Can I generate names for characters in a story?
              <span className="text-indigo-500 group-open:rotate-180 transition-transform">▼</span>
            </summary>
            <p className="mt-3 text-sm text-gray-600">Perfect for writers! Use different origins and styles to match your character's background. Save favorites to build your character name list.</p>
          </details>
        </div>
      </section>

      {/* Related Keywords */}
      <section className="mt-10">
        <h2 className="text-lg font-semibold text-gray-900 mb-3">Related Searches</h2>
        <div className="flex flex-wrap gap-2">
          {['random name generator', 'baby name ideas', 'unique name generator', 'name generator by origin', 'Arabic name generator', 'Japanese name generator', 'character name generator', 'name generator with meanings', 'free name generator', 'name generator no sign up'].map(k => (
            <span key={k} className="px-3 py-1 bg-gray-50 border border-gray-200 rounded-full text-xs text-gray-600">{k}</span>
          ))}
        </div>
      </section>
    </div>
  );
}
