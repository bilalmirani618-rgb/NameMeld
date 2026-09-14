import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Search, BookOpen, Wand2, Languages, CircleDot, Sparkles, Combine, Baby, TrendingUp, Heart } from 'lucide-react';
import { searchNames } from '../data/names';

import SEO from '../components/SEO';
import ToolSEOContent from '../components/ToolSEOContent';
export default function Home() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<{ name: string; slug: string; origin: string }[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    if (query.length >= 2) {
      const r = searchNames(query).slice(0, 6);
      setResults(r.map(x => ({ name: x.name, slug: x.slug, origin: x.origin })));
    } else {
      setResults([]);
    }
  }, [query]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      const r = searchNames(query);
      if (r.length > 0) navigate(`/names/${r[0].slug}`);
      else navigate(`/name-meaning?q=${encodeURIComponent(query)}`);
    }
  };

  const exampleSearches = ['Bilal', 'Muhammad', 'Sarah', 'Emma', 'Ayaan'];

  const tools = [
    { icon: BookOpen, title: 'Name Meaning', desc: 'Find meaning, origin, pronunciation, variants and related names.', to: '/name-meaning', color: 'from-blue-500 to-indigo-600' },
    { icon: Wand2, title: 'Name Generator', desc: 'Generate names based on style, gender, origin and meaning.', to: '/name-generator', color: 'from-purple-500 to-pink-600' },
    { icon: Languages, title: 'Japanese Converter', desc: 'Convert names into Japanese Katakana script.', to: '/japanese-converter', color: 'from-red-500 to-orange-600' },
    { icon: CircleDot, title: 'Name Wheel', desc: 'Randomly select a name with an interactive spinning wheel.', to: '/name-wheel', color: 'from-green-500 to-teal-600' },
    { icon: Sparkles, title: 'Brand Name Generator', desc: 'Create memorable names for businesses, apps and projects.', to: '/brand-generator', color: 'from-amber-500 to-yellow-600' },
    { icon: Combine, title: 'Name Combiner', desc: 'Combine two names into creative combinations.', to: '/name-combiner', color: 'from-cyan-500 to-blue-600' },
    { icon: Baby, title: 'Baby Name Generator', desc: 'Find baby names based on your preferences.', to: '/baby-names', color: 'from-pink-500 to-rose-600' },
    { icon: TrendingUp, title: 'Name Popularity', desc: 'Explore available popularity and trend information.', to: '/popularity', color: 'from-indigo-500 to-violet-600' },
  ];

  const popularNames = [
    { name: 'Bilal', slug: 'bilal' },
    { name: 'Muhammad', slug: 'muhammad' },
    { name: 'Ahmed', slug: 'ahmed' },
    { name: 'Sarah', slug: 'sarah' },
    { name: 'Emma', slug: 'emma' },
    { name: 'Ayaan', slug: 'ayaan' },
  ];

  const origins = ['Arabic', 'Japanese', 'English', 'Indian', 'Spanish', 'French', 'Korean'];

  const seoLinks = [
    { to: '/name-meaning', label: 'Name meanings & origins' },
    { to: '/name-generator', label: 'Name generator' },
    { to: '/baby-names', label: 'Baby names' },
    { to: '/name-wheel', label: 'Wheel of names' },
    { to: '/japanese-converter', label: 'My name in Japanese' },
  ];

  return (
    <div>
      <SEO title="NameMeld: Name Meaning, Name Generator, Baby Names & More" description="Discover name meanings, origins and pronunciation, generate names, explore baby names, use a random name generator or wheel of names, and convert names to Japanese Katakana with NameMeld." path="/" keywords={["name meaning", "name generator", "random name generator", "baby names", "boy names", "girl names", "wheel of names"]} />
      {/* Hero Section */}
      <section className="bg-gradient-hero relative overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-20 left-10 w-72 h-72 bg-indigo-200 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-200 rounded-full blur-3xl"></div>
          <div className="absolute top-40 right-1/3 w-64 h-64 bg-pink-200 rounded-full blur-3xl"></div>
        </div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-16 sm:py-24 text-center relative z-10">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight" style={{ fontFamily: 'var(--font-display)' }}>
            Discover name meanings, generate names, and explore baby names.
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
            Find meanings, generate unique names, convert names, explore name origins, and discover your next favorite name.
          </p>

          {/* Search Box */}
          <div className="max-w-xl mx-auto relative">
            <form onSubmit={handleSearch}>
              <div className="flex items-center bg-white rounded-2xl shadow-lg shadow-indigo-100 border border-gray-100 overflow-hidden">
                <Search className="ml-4 text-gray-400" size={20} />
                <input
                  type="text"
                  value={query}
                  onChange={e => setQuery(e.target.value)}
                  placeholder="Search a name..."
                  className="flex-1 px-4 py-4 text-lg outline-none bg-transparent"
                  aria-label="Search for a name"
                />
                <button type="submit" className="px-6 py-4 bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-semibold hover:from-indigo-600 hover:to-purple-700 transition-all">
                  Explore Name
                </button>
              </div>
            </form>

            {/* Autocomplete */}
            {results.length > 0 && (
              <div className="autocomplete-dropdown mt-1 rounded-xl">
                {results.map(r => (
                  <Link key={r.slug} to={`/names/${r.slug}`} className="autocomplete-item flex items-center justify-between" onClick={() => setQuery('')}>
                    <span className="font-medium text-gray-800">{r.name}</span>
                    <span className="text-xs text-gray-400 bg-gray-100 px-2 py-1 rounded-full">{r.origin}</span>
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* Example searches */}
          <div className="mt-6 flex flex-wrap items-center justify-center gap-2">
            <span className="text-sm text-gray-500">Try:</span>
            {exampleSearches.map(name => (
              <button key={name} onClick={() => { setQuery(name); navigate(`/names/${name.toLowerCase()}`); }} className="px-3 py-1 text-sm bg-white/80 hover:bg-white border border-gray-200 rounded-full text-gray-600 hover:text-indigo-600 transition-all">
                {name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Tool Cards Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'var(--font-display)' }}>
            Explore NameMeld
          </h2>
          <p className="text-gray-600 max-w-xl mx-auto">
            Powerful tools for everything related to names. All free, all instant.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {tools.map((tool, i) => (
            <Link key={tool.to} to={tool.to} className="card-hover group bg-white rounded-2xl p-6 border border-gray-100 shadow-sm" style={{ animationDelay: `${i * 0.05}s` }}>
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${tool.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                <tool.icon size={24} className="text-white" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">{tool.title}</h3>
              <p className="text-sm text-gray-500">{tool.desc}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* Popular Names */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Popular Name Searches</h2>
        <div className="flex flex-wrap gap-3">
          {popularNames.map(n => (
            <Link key={n.slug} to={`/names/${n.slug}`} className="px-5 py-3 bg-white border border-gray-200 rounded-xl text-gray-700 hover:border-indigo-300 hover:text-indigo-600 hover:shadow-md transition-all font-medium">
              {n.name}
            </Link>
          ))}
        </div>
      </section>

      {/* Explore by Origin */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Explore by Origin</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-7 gap-3">
          {origins.map(origin => (
            <Link key={origin} to={`/name-meaning?origin=${origin}`} className="card-hover px-4 py-6 bg-white border border-gray-100 rounded-xl text-center hover:border-indigo-300 transition-all">
              <span className="font-medium text-gray-700 hover:text-indigo-600">{origin}</span>
            </Link>
          ))}
        </div>
      </section>

      {/* Popular Tools */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Popular Tools</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {[
            { label: 'Name Meaning', to: '/name-meaning', emoji: '📖' },
            { label: 'Japanese Converter', to: '/japanese-converter', emoji: '🇯🇵' },
            { label: 'Name Generator', to: '/name-generator', emoji: '✨' },
            { label: 'Random Name Wheel', to: '/name-wheel', emoji: '🎡' },
            { label: 'Brand Name Generator', to: '/brand-generator', emoji: '💼' },
          ].map(tool => (
            <Link key={tool.to} to={tool.to} className="card-hover flex items-center gap-3 px-5 py-4 bg-white border border-gray-100 rounded-xl hover:border-indigo-300 transition-all">
              <span className="text-2xl">{tool.emoji}</span>
              <span className="font-medium text-gray-700">{tool.label}</span>
            </Link>
          ))}
        </div>
      </section>

      <ToolSEOContent
        title="A practical name discovery hub for meanings, generators and name ideas"
        paragraphs={[
          'NameMeld brings several everyday name searches into one place. You can look up a name meaning and origin, explore pronunciation and related names, or use a name generator when you need fresh ideas. The goal is simple: make name discovery useful whether you are naming a baby, creating a character, choosing a nickname, or brainstorming a project.',
          'If you are comparing baby names, start with the Baby Name Generator and explore boy names, girl names, and unisex options by origin, style, and meaning. If you need a quick random name generator, use the Name Generator for instant suggestions. For games, classrooms, groups, and decisions, the interactive Wheel of Names provides a simple random picker you can fill with your own list.',
          'NameMeld also covers international naming. Search individual name profiles to learn about meaning and cultural context, or use the Japanese Converter to see how an English name can be represented phonetically in Katakana. Generated and converted results are presented as helpful starting points, while uncertain or unavailable facts are clearly labeled rather than invented.'
        ]}
        links={seoLinks}
      />

      {/* Favorites CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
        <div className="bg-gradient-to-r from-pink-50 to-purple-50 rounded-2xl p-8 sm:p-12 text-center border border-pink-100">
          <Heart className="mx-auto text-pink-500 mb-4" size={40} />
          <h2 className="text-2xl font-bold text-gray-900 mb-3">Save Your Favorite Names</h2>
          <p className="text-gray-600 mb-6 max-w-md mx-auto">Build your personal collection of names you love. No account needed – saved locally in your browser.</p>
          <Link to="/favorites" className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-pink-500 to-purple-600 text-white font-semibold rounded-xl hover:from-pink-600 hover:to-purple-700 transition-all shadow-lg shadow-pink-200">
            <Heart size={18} /> View My Favorites
          </Link>
        </div>
      </section>

      {/* About NameMeld */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 py-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center" style={{ fontFamily: 'var(--font-display)' }}>
          The Ultimate Name Discovery Platform
        </h2>
        <div className="prose prose-lg max-w-none text-gray-600 space-y-4">
          <p>
            <strong>NameMeld</strong> is your comprehensive all-in-one platform for exploring the fascinating world of names. Whether you're searching for the <strong>meaning of a name</strong>, looking for <strong>baby name ideas</strong>, wanting to <strong>generate brand names</strong> for your startup, or curious about <strong>name origins and etymology</strong>, NameMeld brings everything together in one beautiful, easy-to-use interface.
          </p>
          <p>
            Our platform features a curated database of <strong>names from around the world</strong> including Arabic names, Japanese names, English names, Indian names, Spanish names, French names, Korean names, and many more. Each name entry includes detailed information about its <strong>meaning, origin, pronunciation, gender association, cultural significance</strong>, and related names.
          </p>
          <p>
            Beyond name meanings, NameMeld offers powerful tools like our <strong>Japanese name converter</strong> that transforms any name into Katakana script, an interactive <strong>random name wheel</strong> perfect for games and decision-making, a sophisticated <strong>brand name generator</strong> for entrepreneurs, and a creative <strong>name combiner</strong> for generating unique combinations. All tools are completely free, require no account, and work instantly in your browser.
          </p>
          <p>
            Perfect for <strong>expecting parents</strong> choosing a baby name, <strong>writers</strong> developing characters, <strong>entrepreneurs</strong> naming their business, <strong>game masters</strong> generating NPC names, or anyone curious about the stories behind names. Start exploring today and discover the meaning, origin, and beauty of names from every culture.
          </p>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 py-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center" style={{ fontFamily: 'var(--font-display)' }}>
          Frequently Asked Questions
        </h2>
        <div className="space-y-4">
          <details className="bg-white rounded-xl border border-gray-100 p-5 group">
            <summary className="font-semibold text-gray-900 cursor-pointer list-none flex items-center justify-between">
              What is NameMeld?
              <span className="text-indigo-500 group-open:rotate-180 transition-transform">▼</span>
            </summary>
            <p className="mt-3 text-gray-600">
              NameMeld is a comprehensive name discovery platform that helps you explore name meanings, generate unique names, convert names to different scripts, and much more. All tools are free and work instantly in your browser.
            </p>
          </details>
          <details className="bg-white rounded-xl border border-gray-100 p-5 group">
            <summary className="font-semibold text-gray-900 cursor-pointer list-none flex items-center justify-between">
              Is NameMeld free to use?
              <span className="text-indigo-500 group-open:rotate-180 transition-transform">▼</span>
            </summary>
            <p className="mt-3 text-gray-600">
              Yes! All NameMeld tools are completely free. No account required, no hidden fees, no premium tiers. Just open the tool and start exploring.
            </p>
          </details>
          <details className="bg-white rounded-xl border border-gray-100 p-5 group">
            <summary className="font-semibold text-gray-900 cursor-pointer list-none flex items-center justify-between">
              How accurate are the name meanings?
              <span className="text-indigo-500 group-open:rotate-180 transition-transform">▼</span>
            </summary>
            <p className="mt-3 text-gray-600">
              Our name meanings are sourced from reputable etymological references. However, name meanings can vary across cultures and time periods. We recommend verifying important information with authoritative sources for academic or official purposes.
            </p>
          </details>
          <details className="bg-white rounded-xl border border-gray-100 p-5 group">
            <summary className="font-semibold text-gray-900 cursor-pointer list-none flex items-center justify-between">
              Can I use generated brand names for my business?
              <span className="text-indigo-500 group-open:rotate-180 transition-transform">▼</span>
            </summary>
            <p className="mt-3 text-gray-600">
              Our brand name generator provides inspiration, but you must verify trademark availability and domain registration independently before using any name commercially. We don't claim ownership of generated names.
            </p>
          </details>
          <details className="bg-white rounded-xl border border-gray-100 p-5 group">
            <summary className="font-semibold text-gray-900 cursor-pointer list-none flex items-center justify-between">
              Are my favorite names saved securely?
              <span className="text-indigo-500 group-open:rotate-180 transition-transform">▼</span>
            </summary>
            <p className="mt-3 text-gray-600">
              Your favorite names are stored locally in your browser using localStorage. They never leave your device and are not transmitted to any server. Clearing your browser data will remove your favorites.
            </p>
          </details>
          <details className="bg-white rounded-xl border border-gray-100 p-5 group">
            <summary className="font-semibold text-gray-900 cursor-pointer list-none flex items-center justify-between">
              What cultures and origins are covered?
              <span className="text-indigo-500 group-open:rotate-180 transition-transform">▼</span>
            </summary>
            <p className="mt-3 text-gray-600">
              NameMeld includes names from Arabic, Japanese, English, Indian, Spanish, French, Korean, Hebrew, Greek, German, Irish, Latin, and many other cultures. We're continuously expanding our database.
            </p>
          </details>
        </div>
      </section>
    </div>
  );
}
