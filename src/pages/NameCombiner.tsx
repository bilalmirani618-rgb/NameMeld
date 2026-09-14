import { useState } from 'react';
import { Heart, Copy, Share2, Check } from 'lucide-react';
import { combineNames, copyToClipboard, toggleFavorite, isFavorite, shareResult } from '../utils/helpers';

import SEO from '../components/SEO';
import ToolSEOContent from '../components/ToolSEOContent';
export default function NameCombiner() {
  const [name1, setName1] = useState('');
  const [name2, setName2] = useState('');
  const [results, setResults] = useState<string[]>([]);
  const [favs, setFavs] = useState<Record<string, boolean>>({});
  const [copied, setCopied] = useState('');

  const handleCombine = () => {
    if (name1.trim() && name2.trim()) {
      const combos = combineNames(name1, name2);
      setResults(combos);
      const favMap: Record<string, boolean> = {};
      combos.forEach(c => { favMap[c] = isFavorite(c); });
      setFavs(favMap);
    }
  };

  const handleCopy = (name: string) => {
    copyToClipboard(name);
    setCopied(name);
    setTimeout(() => setCopied(''), 2000);
  };

  const handleFav = (name: string) => {
    const result = toggleFavorite(name);
    setFavs(prev => ({ ...prev, [name]: result }));
  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-8 sm:py-12">
      <SEO title="Name Combiner & Couple Name Generator | NameMeld" description="Combine two names into creative blends for nicknames, couples, characters and projects. Generate multiple name combinations instantly." path="/name-combiner" keywords={["name combiner", "couple name generator", "combine two names", "name mixer"]} breadcrumbs={[{name:'Home',path:'/'},{name:'Name Combiner',path:'/name-combiner'}]} />
      <div className="text-center mb-10">
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'var(--font-display)' }}>
          Name Combiner
        </h1>
        <p className="text-gray-600">Combine two names into creative combinations.</p>
      </div>

      <div className="bg-white rounded-2xl p-6 sm:p-8 border border-gray-100 shadow-sm mb-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Name 1</label>
            <input
              type="text"
              value={name1}
              onChange={e => setName1(e.target.value)}
              placeholder="e.g. Sarah"
              className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Name 2</label>
            <input
              type="text"
              value={name2}
              onChange={e => setName2(e.target.value)}
              placeholder="e.g. Michael"
              className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none"
            />
          </div>
        </div>
        <button onClick={handleCombine} className="w-full sm:w-auto px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-xl hover:from-cyan-600 hover:to-blue-600 transition-all shadow-lg shadow-cyan-200">
          Combine Names
        </button>
      </div>

      {results.length > 0 && (
        <div>
          <p className="text-sm text-gray-500 mb-4 text-center">Creative combinations of "{name1}" and "{name2}" – for entertainment purposes only.</p>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {results.map((name, i) => (
              <div key={`${name}-${i}`} className="fusion-result-card card-hover bg-white rounded-2xl p-4 border border-gray-100 shadow-sm text-center animate-fade-in" style={{ animationDelay: `${i * 0.05}s` }}>
                <p className="text-lg font-bold text-gray-900 mb-3">{name}</p>
                <div className="flex items-center justify-center gap-1">
                  <button onClick={() => handleFav(name)} className={`fav-btn p-2 rounded-lg ${favs[name] ? 'text-pink-500 bg-pink-50' : 'text-gray-300 hover:text-pink-500'}`}>
                    <Heart size={14} fill={favs[name] ? 'currentColor' : 'none'} />
                  </button>
                  <button onClick={() => handleCopy(name)} className="p-2 rounded-lg text-gray-300 hover:text-indigo-600 hover:bg-indigo-50">
                    {copied === name ? <Check size={14} className="text-green-500" /> : <Copy size={14} />}
                  </button>
                  <button onClick={() => shareResult('Name Combiner', `${name1} + ${name2} = ${name}`)} className="p-2 rounded-lg text-gray-300 hover:text-indigo-600 hover:bg-indigo-50">
                    <Share2 size={14} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* About the Tool */}
      <section className="mt-12 bg-gradient-to-br from-cyan-50/50 to-blue-50/50 rounded-2xl p-6 sm:p-8 border border-cyan-100/50">
        <h2 className="text-2xl font-bold text-gray-900 mb-3" style={{ fontFamily: 'var(--font-display)' }}>About the Name Combiner</h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          The <strong>name combiner</strong> is a creative tool that takes two names and generates unique combinations by blending syllables, prefixes, and suffixes. It's like a <strong>name mashup generator</strong> that creates entirely new names from existing ones. Think of celebrity couple names like "Brangelina" (Brad + Angelina) or "Bennifer" (Ben + Jennifer) – this tool does the same thing for any two names you choose.
        </p>
        <p className="text-gray-600 leading-relaxed mb-4">
          This tool is perfect for <strong>creating ship names</strong> for fictional couples, <strong>generating unique usernames</strong> by combining your name with a friend's, <strong>creating team names</strong> by merging member names, <strong>inventing character names</strong> for stories and games, or simply having fun seeing what creative combinations emerge from two names. The algorithm uses multiple techniques including <strong>prefix-suffix blending</strong>, <strong>overlapping characters</strong>, and <strong>syllable mixing</strong> to produce diverse and interesting results.
        </p>
        <p className="text-gray-600 leading-relaxed">
          Each combination is generated using different methods, so you'll see a variety of creative results. Some combinations might sound elegant, others playful, and some completely unexpected. It's a fun way to explore the <strong>phonetic possibilities</strong> of names and discover combinations you might never have thought of. Save your favorites, copy combinations instantly, and share the most interesting results with friends.
        </p>
      </section>

      {/* How to Use */}
      <section className="mt-10">
        <h2 className="text-2xl font-bold text-gray-900 mb-6" style={{ fontFamily: 'var(--font-display)' }}>How to Combine Names</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="bg-white rounded-xl p-5 border border-gray-100 shadow-sm">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 text-white font-bold flex items-center justify-center mb-3 text-sm">1</div>
            <h3 className="font-semibold text-gray-900 mb-1">Enter Two Names</h3>
            <p className="text-sm text-gray-600">Type any two names you want to combine. Try different combinations!</p>
          </div>
          <div className="bg-white rounded-xl p-5 border border-gray-100 shadow-sm">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 text-white font-bold flex items-center justify-center mb-3 text-sm">2</div>
            <h3 className="font-semibold text-gray-900 mb-1">Click Combine</h3>
            <p className="text-sm text-gray-600">Instantly see multiple creative combinations using different blending methods.</p>
          </div>
          <div className="bg-white rounded-xl p-5 border border-gray-100 shadow-sm">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 text-white font-bold flex items-center justify-center mb-3 text-sm">3</div>
            <h3 className="font-semibold text-gray-900 mb-1">Save & Share</h3>
            <p className="text-sm text-gray-600">Favorite the best combinations, copy them, or share with friends.</p>
          </div>
        </div>
      </section>

      {/* Fun Ideas */}
      <section className="mt-10 bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
        <h2 className="text-xl font-bold text-gray-900 mb-4">🎨 Fun Things to Try</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div className="flex items-start gap-2"><span className="text-cyan-500 font-bold">✓</span><span className="text-sm text-gray-700"><strong>Ship Names:</strong> Combine your favorite fictional couple's names</span></div>
          <div className="flex items-start gap-2"><span className="text-cyan-500 font-bold">✓</span><span className="text-sm text-gray-700"><strong>Team Names:</strong> Merge team member names for a unique team identity</span></div>
          <div className="flex items-start gap-2"><span className="text-cyan-500 font-bold">✓</span><span className="text-sm text-gray-700"><strong>Baby Names:</strong> Combine parents' names for baby name inspiration</span></div>
          <div className="flex items-start gap-2"><span className="text-cyan-500 font-bold">✓</span><span className="text-sm text-gray-700"><strong>Usernames:</strong> Create unique handles by blending your name with interests</span></div>
          <div className="flex items-start gap-2"><span className="text-cyan-500 font-bold">✓</span><span className="text-sm text-gray-700"><strong>Character Names:</strong> Generate unique names for story characters</span></div>
          <div className="flex items-start gap-2"><span className="text-cyan-500 font-bold">✓</span><span className="text-sm text-gray-700"><strong>Just for Fun:</strong> See what creative combinations emerge!</span></div>
        </div>
      </section>

      {/* Important Note */}
      <section className="mt-10 bg-amber-50/50 rounded-2xl p-6 border border-amber-100/50">
        <h2 className="text-xl font-bold text-gray-900 mb-4">⚠️ For Entertainment Purposes</h2>
        <p className="text-sm text-gray-700">
          The name combinations generated by this tool are <strong>creative exercises for entertainment purposes only</strong>. They are not official names, trademarked brands, or verified combinations. Use them for fun, inspiration, or creative projects, but don't rely on them for official naming decisions without proper research and verification.
        </p>
      </section>

      {/* FAQ */}
      <ToolSEOContent
        title="Name Combiner and Couple Name Generator"
        paragraphs={[
          'The NameMeld Name Combiner creates creative blends from two names. It can be used as a couple name generator, nickname idea tool, character naming helper, or a playful way to discover new word-like combinations from names you already know.',
          'Because name blending is creative rather than historical, the results are suggestions rather than established names with verified etymologies. Try several combinations and compare pronunciation, spelling, length, and how naturally each result sounds when spoken aloud.',
          'For deeper research, open a full name profile for the original names and review their available meanings and origins before choosing a final combination.'
        ]}
        links={[
          { to: '/name-generator', label: 'Use the name generator' },
          { to: '/name-meaning', label: 'Check name meanings' },
          { to: '/baby-names', label: 'Browse baby names' },
        ]}
      />

      <section className="mt-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6" style={{ fontFamily: 'var(--font-display)' }}>Frequently Asked Questions</h2>
        <div className="space-y-3">
          <details className="bg-white rounded-xl border border-gray-100 p-5 group">
            <summary className="font-medium text-gray-900 cursor-pointer list-none flex items-center justify-between">
              How does the name combiner work?
              <span className="text-indigo-500 group-open:rotate-180 transition-transform">▼</span>
            </summary>
            <p className="mt-3 text-sm text-gray-600">The combiner uses multiple algorithms to blend names: prefix-suffix combinations, overlapping character matching, syllable mixing, and vowel-based splitting. This produces a variety of creative results from just two input names.</p>
          </details>
          <details className="bg-white rounded-xl border border-gray-100 p-5 group">
            <summary className="font-medium text-gray-900 cursor-pointer list-none flex items-center justify-between">
              Can I use combined names for my business?
              <span className="text-indigo-500 group-open:rotate-180 transition-transform">▼</span>
            </summary>
            <p className="mt-3 text-sm text-gray-600">You can use them as inspiration, but always verify trademark availability and domain registration before using any name commercially. The combinations are generated algorithmically and may accidentally match existing brands.</p>
          </details>
          <details className="bg-white rounded-xl border border-gray-100 p-5 group">
            <summary className="font-medium text-gray-900 cursor-pointer list-none flex items-center justify-between">
              Why do some combinations sound better than others?
              <span className="text-indigo-500 group-open:rotate-180 transition-transform">▼</span>
            </summary>
            <p className="mt-3 text-sm text-gray-600">Name combinations that flow well phonetically tend to sound better. The tool generates many options using different methods, so you can choose the ones that have the best rhythm and pronunciation for your needs.</p>
          </details>
          <details className="bg-white rounded-xl border border-gray-100 p-5 group">
            <summary className="font-medium text-gray-900 cursor-pointer list-none flex items-center justify-between">
              Can I combine more than two names?
              <span className="text-indigo-500 group-open:rotate-180 transition-transform">▼</span>
            </summary>
            <p className="mt-3 text-sm text-gray-600">Currently, the tool combines two names at a time. For more than two names, try combining them in pairs first, then use the results as inputs for another round of combinations.</p>
          </details>
        </div>
      </section>

      {/* Related Keywords */}
      <section className="mt-10">
        <h2 className="text-lg font-semibold text-gray-900 mb-3">Related Searches</h2>
        <div className="flex flex-wrap gap-2">
          {['name combiner', 'name mashup generator', 'combine two names', 'ship name generator', 'couple name combiner', 'name blender', 'name mixer', 'create combined names', 'name fusion tool', 'portmanteau name generator'].map(k => (
            <span key={k} className="px-3 py-1 bg-gray-50 border border-gray-200 rounded-full text-xs text-gray-600">{k}</span>
          ))}
        </div>
      </section>
    </div>
  );
}
