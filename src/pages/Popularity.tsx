import { useState } from 'react';
import { Link } from 'react-router-dom';
import { searchNames, createFallbackName } from '../data/names';

import SEO from '../components/SEO';
import ToolSEOContent from '../components/ToolSEOContent';
export default function Popularity() {
  const [query, setQuery] = useState('');
  const [result, setResult] = useState<ReturnType<typeof searchNames>[0] | null>(null);
  const [searched, setSearched] = useState(false);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (!query.trim()) return;
    const r = searchNames(query);
    setResult(r.length > 0 ? r[0] : createFallbackName(query));
    setSearched(true);
  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-8 sm:py-12">
      <SEO title="Name Popularity & Baby Name Trends & Baby Name Trends | NameMeld" description="Explore available name popularity and trend information, compare popular and uncommon names, and distinguish verified statistics from general name insights." path="/popularity" keywords={["name popularity", "popular names", "baby name trends", "popular baby names"]} breadcrumbs={[{name:'Home',path:'/'},{name:'Name Popularity',path:'/popularity'}]} />
      <div className="text-center mb-10">
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'var(--font-display)' }}>
          Name Popularity
        </h1>
        <p className="text-gray-600">Explore available popularity and trend information for names.</p>
      </div>

      <form onSubmit={handleSearch} className="max-w-xl mx-auto mb-8">
        <div className="flex items-center bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
          <input
            type="text"
            value={query}
            onChange={e => setQuery(e.target.value)}
            placeholder="Search a name"
            className="flex-1 px-4 py-3 outline-none"
          />
          <button type="submit" className="px-6 py-3 bg-indigo-600 text-white font-semibold hover:bg-indigo-700 transition-colors">
            Search
          </button>
        </div>
      </form>

      {searched && !result && (
        <div className="text-center py-12 bg-white rounded-xl border border-gray-100">
          <p className="text-gray-500">We couldn't find popularity data for "{query}".</p>
          <Link to="/name-meaning" className="text-indigo-600 hover:underline text-sm mt-2 inline-block">Try the Name Meaning tool instead</Link>
        </div>
      )}

      {result && (
        <div className="bg-white rounded-2xl p-6 sm:p-8 border border-gray-100 shadow-sm animate-fade-in">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-3xl font-bold text-gray-900">{result.name}</h2>
              <p className="text-gray-500">{result.gender} · {result.origin}</p>
            </div>
            <Link to={`/names/${result.slug}`} className="text-sm text-indigo-600 hover:underline">View full profile →</Link>
          </div>

          {result.popularity.available && result.popularity.data && result.popularity.data.length > 0 ? (
            <div>
              <h3 className="font-semibold text-gray-900 mb-4">Popularity Trend</h3>
              <div className="space-y-3">
                {result.popularity.data.map(d => (
                  <div key={d.year} className="flex items-center gap-4">
                    <span className="text-sm font-medium text-gray-600 w-12">{d.year}</span>
                    <div className="flex-1 bg-gray-100 rounded-full h-4 overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full transition-all duration-500"
                        style={{ width: `${Math.max(5, 100 - (d.rank || 50))}%` }}
                      ></div>
                    </div>
                    <span className="text-sm font-medium text-gray-700 w-20 text-right">#{d.rank || 'N/A'}</span>
                  </div>
                ))}
              </div>
              <p className="text-xs text-gray-400 mt-4">Only verified datasets are shown in this chart. When a verified dataset is unavailable, NameMeld leaves the ranking blank rather than estimating a number.</p>
            </div>
          ) : (
            <div className="popularity-discovery-card">
              <div className="popularity-orbit" aria-hidden="true"><span>?</span></div>
              <div className="relative z-10 text-center py-2">
                <span className="popularity-status">No verified ranking yet</span>
                <h3 className="text-2xl font-bold text-gray-900 mt-3 mb-2">{result.name}</h3>
                <p className="text-gray-600 max-w-xl mx-auto">We found the name, but NameMeld does not have a reliable country-and-year popularity dataset for it. We never invent a rank just to fill the chart.</p>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-2xl mx-auto mt-6">
                  <div className="popularity-stat"><b>{result.name.replace(/[^\p{L}]/gu, '').length}</b><span>letters</span></div>
                  <div className="popularity-stat"><b>{result.name.trim().split(/\s+/).length}</b><span>words</span></div>
                  <div className="popularity-stat"><b>{result.name.charAt(0).toUpperCase()}</b><span>first letter</span></div>
                  <div className="popularity-stat"><b>—</b><span>verified rank</span></div>
                </div>
                <Link to={`/names/${result.slug}`} className="inline-flex mt-6 px-5 py-3 rounded-xl bg-indigo-600 text-white font-semibold hover:bg-indigo-700 transition">Explore {result.name}</Link>
              </div>
            </div>
          )}
        </div>
      )}

      {/* About the Tool */}
      <section className="mt-12 bg-gradient-to-br from-indigo-50/50 to-violet-50/50 rounded-2xl p-6 sm:p-8 border border-indigo-100/50">
        <h2 className="text-2xl font-bold text-gray-900 mb-3" style={{ fontFamily: 'var(--font-display)' }}>About Name Popularity Trends</h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          <strong>Name popularity</strong> changes over time, reflecting cultural shifts, celebrity influence, and generational preferences. A name that was popular in the 1950s might feel dated today, while a name from a fantasy novel might suddenly surge in popularity. Understanding <strong>name trends</strong> helps you make informed decisions about baby names, character names, or brand names.
        </p>
        <p className="text-gray-600 leading-relaxed mb-4">
          Our <strong>name popularity tool</strong> lets you explore available trend data for names in our database. Where data is available, you'll see <strong>yearly ranking information</strong> showing how a name's popularity has changed over time. This helps you understand whether a name is <strong>rising in popularity</strong>, <strong>declining</strong>, or <strong>remaining steady</strong>. For names where detailed statistics aren't available, we clearly indicate that data is unavailable rather than fabricating numbers.
        </p>
        <p className="text-gray-600 leading-relaxed">
          Keep in mind that <strong>name popularity varies by country and culture</strong>. A name that's trending in the United States might be uncommon in Japan or the Middle East. Our database includes names from many cultures, but popularity data availability depends on the sources we have access to. We're continuously working to expand our popularity database with more names and more detailed historical data.
        </p>
      </section>

      {/* How to Use */}
      <section className="mt-10">
        <h2 className="text-2xl font-bold text-gray-900 mb-6" style={{ fontFamily: 'var(--font-display)' }}>How to Explore Name Popularity</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="bg-white rounded-xl p-5 border border-gray-100 shadow-sm">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-indigo-500 to-violet-600 text-white font-bold flex items-center justify-center mb-3 text-sm">1</div>
            <h3 className="font-semibold text-gray-900 mb-1">Search a Name</h3>
            <p className="text-sm text-gray-600">Enter any name to see available popularity and trend information.</p>
          </div>
          <div className="bg-white rounded-xl p-5 border border-gray-100 shadow-sm">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-indigo-500 to-violet-600 text-white font-bold flex items-center justify-center mb-3 text-sm">2</div>
            <h3 className="font-semibold text-gray-900 mb-1">View Trends</h3>
            <p className="text-sm text-gray-600">See yearly rankings and visual charts where data is available.</p>
          </div>
          <div className="bg-white rounded-xl p-5 border border-gray-100 shadow-sm">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-indigo-500 to-violet-600 text-white font-bold flex items-center justify-center mb-3 text-sm">3</div>
            <h3 className="font-semibold text-gray-900 mb-1">Explore More</h3>
            <p className="text-sm text-gray-600">Click through to full name profiles for meanings, origins, and more.</p>
          </div>
        </div>
      </section>

      {/* Important Note */}
      <section className="mt-10 bg-amber-50/50 rounded-2xl p-6 border border-amber-100/50">
        <h2 className="text-xl font-bold text-gray-900 mb-4">⚠️ About Our Popularity Data</h2>
        <p className="text-sm text-gray-700 mb-3">
          We believe in <strong>transparency and accuracy</strong>. Rather than fabricating statistics, we clearly indicate when popularity data is unavailable for a name. Where data is provided, it may be:
        </p>
        <ul className="space-y-1 text-sm text-gray-700 list-disc list-inside">
          <li>Illustrative or sample data for demonstration purposes</li>
          <li>Sourced from publicly available statistics (clearly marked)</li>
          <li>Approximate trends rather than exact official rankings</li>
        </ul>
        <p className="text-sm text-gray-700 mt-3">
          For official government statistics on name popularity (such as SSA data in the United States or ONS data in the UK), please consult the original sources directly.
        </p>
      </section>

      {/* FAQ */}
      <ToolSEOContent
        title="Name Popularity, Popular Names and Baby Name Trends"
        paragraphs={[
          'Name popularity can help you understand whether a name is widely used, relatively uncommon, or changing over time. NameMeld separates available popularity information from name insights so that missing statistics are not presented as made-up rankings.',
          'If you are researching baby names, compare popularity alongside meaning, origin, pronunciation, and personal preference. A name that is popular in one country or year can be uncommon in another, so popularity should always be interpreted in cultural and geographic context.',
          'Where NameMeld does not have a reliable country-and-year dataset, the page explains that limitation instead of inventing a precise rank. This makes the tool more useful for discovery while keeping the distinction between verified statistics and general name information clear.'
        ]}
        links={[
          { to: '/baby-names', label: 'Browse baby names' },
          { to: '/name-meaning', label: 'Research meanings' },
          { to: '/name-generator', label: 'Generate alternatives' },
        ]}
      />

      <section className="mt-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6" style={{ fontFamily: 'var(--font-display)' }}>Frequently Asked Questions</h2>
        <div className="space-y-3">
          <details className="bg-white rounded-xl border border-gray-100 p-5 group">
            <summary className="font-medium text-gray-900 cursor-pointer list-none flex items-center justify-between">
              Where does the popularity data come from?
              <span className="text-indigo-500 group-open:rotate-180 transition-transform">▼</span>
            </summary>
            <p className="mt-3 text-sm text-gray-600">Our popularity data comes from various publicly available sources. Where exact official statistics aren't available, we clearly mark the data as illustrative or unavailable. We never fabricate precise rankings.</p>
          </details>
          <details className="bg-white rounded-xl border border-gray-100 p-5 group">
            <summary className="font-medium text-gray-900 cursor-pointer list-none flex items-center justify-between">
              Why is popularity data unavailable for some names?
              <span className="text-indigo-500 group-open:rotate-180 transition-transform">▼</span>
            </summary>
            <p className="mt-3 text-sm text-gray-600">Comprehensive popularity statistics aren't available for every name, especially those from smaller language communities or less commonly tracked regions. We're working to expand our database over time.</p>
          </details>
          <details className="bg-white rounded-xl border border-gray-100 p-5 group">
            <summary className="font-medium text-gray-900 cursor-pointer list-none flex items-center justify-between">
              Does popularity vary by country?
              <span className="text-indigo-500 group-open:rotate-180 transition-transform">▼</span>
            </summary>
            <p className="mt-3 text-sm text-gray-600">Absolutely! A name can be extremely popular in one country and rare in another. Our data may reflect specific regions or be global approximations. Always consider cultural context when evaluating name popularity.</p>
          </details>
          <details className="bg-white rounded-xl border border-gray-100 p-5 group">
            <summary className="font-medium text-gray-900 cursor-pointer list-none flex items-center justify-between">
              Should I avoid popular names for my baby?
              <span className="text-indigo-500 group-open:rotate-180 transition-transform">▼</span>
            </summary>
            <p className="mt-3 text-sm text-gray-600">That's a personal choice! Popular names are familiar and well-liked, while unique names help your child stand out. Both have advantages. Consider what matters most to you and your family.</p>
          </details>
        </div>
      </section>

      {/* Related Keywords */}
      <section className="mt-10">
        <h2 className="text-lg font-semibold text-gray-900 mb-3">Related Searches</h2>
        <div className="flex flex-wrap gap-2">
          {['name popularity tracker', 'popular baby names 2026', 'name trends', 'most popular names', 'name ranking chart', 'trending names', 'name statistics', 'popular name origins', 'name popularity by year', 'unique vs popular names'].map(k => (
            <span key={k} className="px-3 py-1 bg-gray-50 border border-gray-200 rounded-full text-xs text-gray-600">{k}</span>
          ))}
        </div>
      </section>
    </div>
  );
}
