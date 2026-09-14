import { useState } from 'react';
import { Heart, Copy, Check, ExternalLink } from 'lucide-react';
import { generateBrandNames } from '../utils/helpers';
import { copyToClipboard, toggleFavorite, isFavorite } from '../utils/helpers';

import SEO from '../components/SEO';
import ToolSEOContent from '../components/ToolSEOContent';
export default function BrandGenerator() {
  const [query, setQuery] = useState('');
  const [style, setStyle] = useState('Modern');
  const [length, setLength] = useState('Short');
  const [namingStyle, setNamingStyle] = useState('Invented Words');
  const [results, setResults] = useState<{ name: string; reasoning: string }[]>([]);
  const [favs, setFavs] = useState<Record<string, boolean>>({});
  const [copied, setCopied] = useState('');

  const generate = () => {
    if (!query.trim()) return;
    const names = generateBrandNames(query, style, length, namingStyle);
    setResults(names);
    const favMap: Record<string, boolean> = {};
    names.forEach(n => { favMap[n.name] = isFavorite(n.name); });
    setFavs(favMap);
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
    <div className="max-w-5xl mx-auto px-4 py-8 sm:py-12">
      <SEO title="Brand Name Generator for Business & Startup Ideas | NameMeld" description="Generate memorable brand, business, app and project name ideas. Explore different styles and lengths, then shortlist names that fit your concept." path="/brand-generator" keywords={["brand name generator", "business name generator", "startup name generator", "company name ideas"]} breadcrumbs={[{name:'Home',path:'/'},{name:'Brand Name Generator',path:'/brand-generator'}]} />
      <div className="text-center mb-10">
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'var(--font-display)' }}>
          Brand Name Generator
        </h1>
        <p className="text-gray-600">Create memorable names for businesses, apps and projects.</p>
      </div>

      <div className="bg-white rounded-2xl p-6 sm:p-8 border border-gray-100 shadow-sm mb-8">
        <label className="block text-sm font-medium text-gray-700 mb-2">What is your business about?</label>
        <input
          type="text"
          value={query}
          onChange={e => setQuery(e.target.value)}
          placeholder="e.g. AI fitness app"
          className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none mb-6"
          onKeyDown={e => e.key === 'Enter' && generate()}
        />

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Style</label>
            <select value={style} onChange={e => setStyle(e.target.value)} className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none">
              {['Modern', 'Minimal', 'Luxury', 'Tech', 'Friendly', 'Professional', 'Creative', 'Futuristic'].map(s => <option key={s}>{s}</option>)}
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Length</label>
            <select value={length} onChange={e => setLength(e.target.value)} className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none">
              {['Very Short', 'Short', 'Medium'].map(l => <option key={l}>{l}</option>)}
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Naming Style</label>
            <select value={namingStyle} onChange={e => setNamingStyle(e.target.value)} className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none">
              {['Real Words', 'Invented Words', 'Two Words', 'Abstract', 'Premium'].map(s => <option key={s}>{s}</option>)}
            </select>
          </div>
        </div>

        <button onClick={generate} className="w-full sm:w-auto px-8 py-3 bg-gradient-to-r from-amber-500 to-orange-500 text-white font-semibold rounded-xl hover:from-amber-600 hover:to-orange-600 transition-all shadow-lg shadow-amber-200">
          Generate Brand Names
        </button>
      </div>

      {results.length > 0 && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {results.map((r, i) => (
            <div key={`${r.name}-${i}`} className="brand-result-card card-hover bg-white rounded-2xl p-5 border border-gray-100 shadow-sm animate-fade-in" style={{ animationDelay: `${i * 0.05}s` }}>
              <div className="flex items-start justify-between mb-2">
                <h3 className="text-xl font-bold text-gray-900">{r.name}</h3>
                <div className="flex items-center gap-1">
                  <button onClick={() => handleFav(r.name)} className={`fav-btn p-2 rounded-lg ${favs[r.name] ? 'text-pink-500 bg-pink-50' : 'text-gray-300 hover:text-pink-500'}`}>
                    <Heart size={16} fill={favs[r.name] ? 'currentColor' : 'none'} />
                  </button>
                  <button onClick={() => handleCopy(r.name)} className="p-2 rounded-lg text-gray-300 hover:text-indigo-600 hover:bg-indigo-50">
                    {copied === r.name ? <Check size={16} className="text-green-500" /> : <Copy size={16} />}
                  </button>
                </div>
              </div>
              <p className="text-sm text-gray-500 mb-3">{r.reasoning}</p>
              <button className="flex items-center gap-1 text-xs text-indigo-600 hover:text-indigo-700 font-medium">
                <ExternalLink size={12} /> Check Domain
              </button>
            </div>
          ))}
        </div>
      )}

      <div className="mt-6 text-center text-xs text-gray-400">
        <p>Brand names are generated for inspiration. Always verify trademark availability before use.</p>
      </div>

      {/* About the Tool */}
      <section className="mt-12 bg-gradient-to-br from-amber-50/50 to-orange-50/50 rounded-2xl p-6 sm:p-8 border border-amber-100/50">
        <h2 className="text-2xl font-bold text-gray-900 mb-3" style={{ fontFamily: 'var(--font-display)' }}>About the Brand Name Generator</h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          Choosing the <strong>perfect brand name</strong> is one of the most important decisions for any business, startup, app, or project. A great brand name is <strong>memorable, distinctive, easy to pronounce</strong>, and evokes the right emotions in your target audience. Our <strong>brand name generator</strong> helps you brainstorm creative options instantly.
        </p>
        <p className="text-gray-600 leading-relaxed mb-4">
          Whether you're launching a <strong>tech startup</strong>, naming a <strong>mobile app</strong>, creating a <strong>YouTube channel</strong>, starting an <strong>e-commerce store</strong>, or building any other brand, this tool generates dozens of unique name ideas tailored to your industry and style preferences. Choose from different naming styles including <strong>invented words</strong> (like Google or Rolex), <strong>real word combinations</strong> (like Facebook or PayPal), <strong>abstract names</strong>, and <strong>premium luxury names</strong>.
        </p>
        <p className="text-gray-600 leading-relaxed">
          The generator uses advanced algorithms to create names that sound professional, are easy to remember, and align with your brand's personality. Each suggestion comes with a brief explanation of why it works, helping you understand the <strong>branding psychology</strong> behind each option. Save your favorites, copy names instantly, and build a shortlist of the best candidates for your new venture.
        </p>
      </section>

      {/* How to Use */}
      <section className="mt-10">
        <h2 className="text-2xl font-bold text-gray-900 mb-6" style={{ fontFamily: 'var(--font-display)' }}>How to Generate Brand Names</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-white rounded-xl p-5 border border-gray-100 shadow-sm">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-amber-500 to-orange-600 text-white font-bold flex items-center justify-center mb-3 text-sm">1</div>
            <h3 className="font-semibold text-gray-900 mb-1">Describe Your Business</h3>
            <p className="text-sm text-gray-600">Enter what your business does. Be specific: "AI fitness app" works better than just "app."</p>
          </div>
          <div className="bg-white rounded-xl p-5 border border-gray-100 shadow-sm">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-amber-500 to-orange-600 text-white font-bold flex items-center justify-center mb-3 text-sm">2</div>
            <h3 className="font-semibold text-gray-900 mb-1">Choose Your Style</h3>
            <p className="text-sm text-gray-600">Modern, minimal, luxury, tech, friendly, professional, creative, or futuristic.</p>
          </div>
          <div className="bg-white rounded-xl p-5 border border-gray-100 shadow-sm">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-amber-500 to-orange-600 text-white font-bold flex items-center justify-center mb-3 text-sm">3</div>
            <h3 className="font-semibold text-gray-900 mb-1">Set Length & Type</h3>
            <p className="text-sm text-gray-600">Choose very short, short, or medium length. Pick invented words, real words, or abstract.</p>
          </div>
          <div className="bg-white rounded-xl p-5 border border-gray-100 shadow-sm">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-amber-500 to-orange-600 text-white font-bold flex items-center justify-center mb-3 text-sm">4</div>
            <h3 className="font-semibold text-gray-900 mb-1">Generate & Refine</h3>
            <p className="text-sm text-gray-600">Get 12+ name ideas, save favorites, and iterate until you find the perfect name.</p>
          </div>
        </div>
      </section>

      {/* Pro Tips */}
      <section className="mt-10 bg-amber-50/50 rounded-2xl p-6 border border-amber-100/50">
        <h2 className="text-xl font-bold text-gray-900 mb-4">💡 Pro Tips for Choosing a Brand Name</h2>
        <ul className="space-y-2">
          <li className="flex items-start gap-2 text-sm text-gray-700"><span className="text-amber-500 font-bold mt-0.5">✓</span><span><strong>Keep it simple:</strong> The best brand names are easy to spell, pronounce, and remember. Avoid complex spellings.</span></li>
          <li className="flex items-start gap-2 text-sm text-gray-700"><span className="text-amber-500 font-bold mt-0.5">✓</span><span><strong>Check domain availability:</strong> Before falling in love with a name, verify the .com domain is available.</span></li>
          <li className="flex items-start gap-2 text-sm text-gray-700"><span className="text-amber-500 font-bold mt-0.5">✓</span><span><strong>Verify trademark status:</strong> Search trademark databases to ensure the name isn't already registered in your industry.</span></li>
          <li className="flex items-start gap-2 text-sm text-gray-700"><span className="text-amber-500 font-bold mt-0.5">✓</span><span><strong>Test it out loud:</strong> Say the name out loud. Does it sound good? Is it easy to say over the phone?</span></li>
          <li className="flex items-start gap-2 text-sm text-gray-700"><span className="text-amber-500 font-bold mt-0.5">✓</span><span><strong>Think long-term:</strong> Will this name still work as your business grows and expands into new markets?</span></li>
          <li className="flex items-start gap-2 text-sm text-gray-700"><span className="text-amber-500 font-bold mt-0.5">✓</span><span><strong>Get feedback:</strong> Share your top 3-5 names with trusted friends, family, or potential customers.</span></li>
        </ul>
      </section>

      {/* FAQ */}
      <ToolSEOContent
        title="Brand Name Generator for Businesses, Apps and Projects"
        paragraphs={[
          'A useful brand name generator should create ideas that are memorable, pronounceable, and relevant to the product or audience. NameMeld lets you describe your concept and choose a style so you can generate multiple directions instead of settling on the first idea that appears.',
          'Use the tool for business names, startup names, app names, product concepts, side projects, stores, and creative ventures. Shortlist names by saying them aloud, checking spelling, considering international pronunciation, and making sure the name still works if your business expands later.',
          'Generated brand names are brainstorming suggestions. Before using one commercially, independently check trademark databases, company-name requirements, social handles, and domain availability in the markets where you plan to operate.'
        ]}
        links={[
          { to: '/name-generator', label: 'Generate personal names' },
          { to: '/name-combiner', label: 'Combine name ideas' },
          { to: '/name-meaning', label: 'Research name meanings' },
        ]}
      />

      <section className="mt-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6" style={{ fontFamily: 'var(--font-display)' }}>Frequently Asked Questions</h2>
        <div className="space-y-3">
          <details className="bg-white rounded-xl border border-gray-100 p-5 group">
            <summary className="font-medium text-gray-900 cursor-pointer list-none flex items-center justify-between">
              Can I use these names for my business?
              <span className="text-indigo-500 group-open:rotate-180 transition-transform">▼</span>
            </summary>
            <p className="mt-3 text-sm text-gray-600">Yes! The generated names are suggestions for inspiration. However, you must independently verify trademark availability and domain registration before using any name commercially. We don't claim ownership of generated names.</p>
          </details>
          <details className="bg-white rounded-xl border border-gray-100 p-5 group">
            <summary className="font-medium text-gray-900 cursor-pointer list-none flex items-center justify-between">
              How do I check if a domain is available?
              <span className="text-indigo-500 group-open:rotate-180 transition-transform">▼</span>
            </summary>
            <p className="mt-3 text-sm text-gray-600">Use domain registrars like GoDaddy, Namecheap, or Google Domains to check availability. We recommend checking multiple extensions (.com, .io, .co, .app) as .com domains are often taken.</p>
          </details>
          <details className="bg-white rounded-xl border border-gray-100 p-5 group">
            <summary className="font-medium text-gray-900 cursor-pointer list-none flex items-center justify-between">
              What makes a good brand name?
              <span className="text-indigo-500 group-open:rotate-180 transition-transform">▼</span>
            </summary>
            <p className="mt-3 text-sm text-gray-600">Great brand names are memorable, easy to spell and pronounce, distinctive from competitors, emotionally resonant, and scalable as your business grows. They should also have available domains and clear trademark status.</p>
          </details>
          <details className="bg-white rounded-xl border border-gray-100 p-5 group">
            <summary className="font-medium text-gray-900 cursor-pointer list-none flex items-center justify-between">
              Should I choose an invented word or a real word?
              <span className="text-indigo-500 group-open:rotate-180 transition-transform">▼</span>
            </summary>
            <p className="mt-3 text-sm text-gray-600">Both work! Invented words (like Google, Rolex) are highly distinctive and easier to trademark. Real words (like Apple, Amazon) are memorable and meaningful. The best choice depends on your brand personality and industry.</p>
          </details>
          <details className="bg-white rounded-xl border border-gray-100 p-5 group">
            <summary className="font-medium text-gray-900 cursor-pointer list-none flex items-center justify-between">
              How much does trademark registration cost?
              <span className="text-indigo-500 group-open:rotate-180 transition-transform">▼</span>
            </summary>
            <p className="mt-3 text-sm text-gray-600">Costs vary by country. In the US, USPTO filing fees range from $250-$350 per class. Consider hiring a trademark attorney for comprehensive searches and applications, which typically costs $1,000-$2,000 total.</p>
          </details>
        </div>
      </section>

      {/* Related Keywords */}
      <section className="mt-10">
        <h2 className="text-lg font-semibold text-gray-900 mb-3">Related Searches</h2>
        <div className="flex flex-wrap gap-2">
          {['business name generator', 'startup name ideas', 'company name generator', 'app name generator', 'brand name ideas', 'business naming tool', 'company name generator free', 'startup naming service', 'brand name suggestions', 'business name brainstorm'].map(k => (
            <span key={k} className="px-3 py-1 bg-gray-50 border border-gray-200 rounded-full text-xs text-gray-600">{k}</span>
          ))}
        </div>
      </section>
    </div>
  );
}
