import { useParams, Link } from 'react-router-dom';
import { Heart, Copy, Share2, Globe, Volume2 } from 'lucide-react';
import { useState } from 'react';
import { getNameBySlug, searchNames, createFallbackName } from '../data/names';
import { copyToClipboard, toggleFavorite, isFavorite } from '../utils/helpers';
import SEO from '../components/SEO';
import ToolSEOContent from '../components/ToolSEOContent';

export function NameProfile() {
  const { slug } = useParams<{ slug: string }>();
  const name = slug ? getNameBySlug(slug) : undefined;
  const [copied, setCopied] = useState(false);
  const [fav, setFav] = useState(name ? isFavorite(name.name) : false);

  if (!name) return null;

  const profilePath = `/names/${name.slug}`;

  const handleCopy = () => {
    copyToClipboard(`${name.name} – ${name.meaning} (Origin: ${name.origin})`);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleFav = () => {
    const result = toggleFavorite(name.name);
    setFav(result);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8 sm:py-12">
      <SEO
        title={`${name.name} Name Meaning, Origin & Pronunciation | NameMeld`}
        description={`Explore the ${name.name} name meaning, origin, pronunciation, related names, alternate spellings and available popularity information on NameMeld.`}
        path={profilePath}
        keywords={[`${name.name} name meaning`, `${name.name} meaning`, `${name.name} origin`, `${name.name} pronunciation`]}
        breadcrumbs={[{name:'Home',path:'/'},{name:'Name Meaning',path:'/name-meaning'},{name:name.name,path:profilePath}]}
        structuredData={{ '@type': 'DefinedTerm', name: name.name, description: `${name.name} name profile covering available meaning, origin and pronunciation information.` }}
      />
      {/* Breadcrumb */}
      <nav className="text-sm text-gray-500 mb-6">
        <Link to="/" className="hover:text-indigo-600">Home</Link>
        <span className="mx-2">/</span>
        <Link to="/name-meaning" className="hover:text-indigo-600">Name Meaning</Link>
        <span className="mx-2">/</span>
        <span className="text-gray-900 font-medium">{name.name}</span>
      </nav>

      {/* Header */}
      <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-2xl p-6 sm:p-10 mb-8 border border-indigo-100">
        <div className="flex items-start justify-between flex-wrap gap-4">
          <div>
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-2" style={{ fontFamily: 'var(--font-display)' }}>{name.name}</h1>
            <p className="text-lg text-gray-600">{name.meaning}</p>
          </div>
          <div className="flex items-center gap-2">
            <button onClick={handleFav} className={`fav-btn p-3 rounded-xl border ${fav ? 'bg-pink-50 border-pink-200 text-pink-500' : 'bg-white border-gray-200 text-gray-400 hover:text-pink-500'} transition-all`}>
              <Heart size={20} fill={fav ? 'currentColor' : 'none'} />
            </button>
            <button onClick={handleCopy} className="p-3 rounded-xl bg-white border border-gray-200 text-gray-500 hover:text-indigo-600 transition-all">
              <Copy size={20} />
            </button>
            <button onClick={() => navigator.share?.({ title: name.name, text: name.meaning, url: window.location.href }).catch(() => {})} className="p-3 rounded-xl bg-white border border-gray-200 text-gray-500 hover:text-indigo-600 transition-all">
              <Share2 size={20} />
            </button>
          </div>
        </div>

        <div className="mt-6 flex flex-wrap gap-3">
          <span className="inline-flex items-center gap-1 px-3 py-1 bg-white rounded-full text-sm font-medium text-indigo-700 border border-indigo-200">
            <Globe size={14} /> {name.origin}
          </span>
          <span className="inline-flex items-center gap-1 px-3 py-1 bg-white rounded-full text-sm font-medium text-purple-700 border border-purple-200">
            {name.gender}
          </span>
          <span className="inline-flex items-center gap-1 px-3 py-1 bg-white rounded-full text-sm font-medium text-teal-700 border border-teal-200">
            <Volume2 size={14} /> {name.pronunciation}
          </span>
        </div>
      </div>

      {copied && <div className="toast">Copied to clipboard!</div>}

      {/* Research status */}
      {name.categories.includes('Searchable Name') && (
        <div className="bg-amber-50 rounded-xl p-5 border border-amber-100 mb-8">
          <h2 className="font-semibold text-gray-900 mb-2">About this name result</h2>
          <p className="text-sm text-gray-700 leading-relaxed">
            This name was not found in NameMeld's curated reference entries, so we created a useful name-insight page instead of showing a dead-end result. Where a verified etymology is not available, NameMeld does not invent one. Meaning, origin, and pronunciation can vary across languages, cultures, and spellings.
          </p>
        </div>
      )}

      {/* Universal name-insight details */}
      {name.categories.includes('Searchable Name') && (() => {
        const letters = name.name.replace(/[^a-zA-Z]/g, '');
        const vowels = (letters.match(/[aeiou]/gi) || []).length;
        const words = name.name.trim().split(/\s+/).filter(Boolean).length;
        return (
          <div className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm mb-8">
            <h2 className="font-semibold text-gray-900 mb-4 text-lg">Name Insight</h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              <div className="rounded-lg bg-gray-50 p-3"><div className="text-xs text-gray-500">Characters</div><div className="font-semibold text-gray-900">{letters.length}</div></div>
              <div className="rounded-lg bg-gray-50 p-3"><div className="text-xs text-gray-500">Words</div><div className="font-semibold text-gray-900">{words}</div></div>
              <div className="rounded-lg bg-gray-50 p-3"><div className="text-xs text-gray-500">Vowels</div><div className="font-semibold text-gray-900">{vowels}</div></div>
              <div className="rounded-lg bg-gray-50 p-3"><div className="text-xs text-gray-500">First letter</div><div className="font-semibold text-gray-900">{letters.charAt(0).toUpperCase() || '—'}</div></div>
            </div>
            <p className="text-sm text-gray-600 mt-4 leading-relaxed">
              This universal search result is designed so an unfamiliar or newly entered name never produces a dead end. NameMeld separates verified reference information from generated name insights instead of presenting guesses as historical facts.
            </p>
          </div>
        );
      })()}

      {/* Details */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm">
          <h2 className="font-semibold text-gray-900 mb-3 text-lg">Meaning & Origin</h2>
          <p className="text-gray-600">{name.meaning}</p>
          <p className="mt-3 text-sm text-gray-500">Origin: <span className="font-medium text-gray-700">{name.origin}</span></p>
        </div>

        <div className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm">
          <h2 className="font-semibold text-gray-900 mb-3 text-lg">Pronunciation</h2>
          <p className="text-2xl font-medium text-indigo-600">{name.pronunciation}</p>
        </div>
      </div>

      {/* Alternate Spellings */}
      {name.alternateNames.length > 0 && (
        <div className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm mb-6">
          <h2 className="font-semibold text-gray-900 mb-3">Alternate Spellings</h2>
          <div className="flex flex-wrap gap-2">
            {name.alternateNames.map(a => (
              <span key={a} className="px-3 py-1 bg-gray-50 rounded-lg text-sm text-gray-700 border border-gray-200">{a}</span>
            ))}
          </div>
        </div>
      )}

      {/* Nicknames */}
      {name.nicknames.length > 0 && (
        <div className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm mb-6">
          <h2 className="font-semibold text-gray-900 mb-3">Nicknames</h2>
          <div className="flex flex-wrap gap-2">
            {name.nicknames.map(n => (
              <span key={n} className="px-3 py-1 bg-pink-50 rounded-lg text-sm text-pink-700 border border-pink-200">{n}</span>
            ))}
          </div>
        </div>
      )}

      {/* Similar Names */}
      {name.similarNames.length > 0 && (
        <div className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm mb-6">
          <h2 className="font-semibold text-gray-900 mb-3">Similar Names</h2>
          <div className="flex flex-wrap gap-2">
            {name.similarNames.map(s => {
              const slug = s.toLowerCase().replace(/[^a-z]/g, '');
              return (
                <Link key={s} to={`/names/${slug}`} className="px-3 py-1 bg-indigo-50 rounded-lg text-sm text-indigo-700 border border-indigo-200 hover:bg-indigo-100 transition-colors">
                  {s}
                </Link>
              );
            })}
          </div>
        </div>
      )}

      {/* Related Names */}
      {name.relatedNames.length > 0 && (
        <div className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm mb-6">
          <h2 className="font-semibold text-gray-900 mb-3">Related Names</h2>
          <div className="flex flex-wrap gap-2">
            {name.relatedNames.map(r => {
              const slug = r.toLowerCase().replace(/[^a-z]/g, '');
              return (
                <Link key={r} to={`/names/${slug}`} className="px-3 py-1 bg-purple-50 rounded-lg text-sm text-purple-700 border border-purple-200 hover:bg-purple-100 transition-colors">
                  {r}
                </Link>
              );
            })}
          </div>
        </div>
      )}

      {/* Popularity */}
      <div className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm mb-6">
        <h2 className="font-semibold text-gray-900 mb-3">Popularity</h2>
        {name.popularity.available && name.popularity.data ? (
          <div className="space-y-2">
            {name.popularity.data.map(d => (
              <div key={d.year} className="flex items-center gap-3">
                <span className="text-sm font-medium text-gray-600 w-12">{d.year}</span>
                <div className="flex-1 bg-gray-100 rounded-full h-3 overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full" style={{ width: `${Math.max(5, 100 - (d.rank || 50))}%` }}></div>
                </div>
                <span className="text-sm text-gray-500">Rank #{d.rank || 'N/A'}</span>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-gray-500 text-sm">Popularity data is currently unavailable for this name.</p>
        )}
      </div>

      {/* Famous People */}
      {name.famousPeople.length > 0 && (
        <div className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm mb-6">
          <h2 className="font-semibold text-gray-900 mb-3">Famous People</h2>
          <ul className="space-y-2">
            {name.famousPeople.map((p, i) => (
              <li key={i} className="flex items-start gap-2 text-gray-600">
                <span className="text-indigo-500 mt-1">•</span>
                <span>{p}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      <ToolSEOContent
        title={`About the ${name.name} name meaning and origin`}
        paragraphs={[
          `This ${name.name} name profile brings together the available meaning, origin, pronunciation, alternate spellings, related names and popularity information for the name. Name meanings can depend on language, region, historical period and spelling, so the page distinguishes curated reference information from general name insights.`,
          `If you are researching ${name.name} for a baby name, character, username or personal interest, compare the name with related options and consider how it sounds with your surname or in the culture where it will be used. For names without a verified entry, NameMeld provides transparent search insights rather than inventing an etymology.`
        ]}
        links={[
          { to: '/name-meaning', label: 'Search another name meaning' },
          { to: '/name-generator', label: 'Generate similar names' },
          { to: '/baby-names', label: 'Browse baby names' },
          { to: '/japanese-converter', label: 'See the name in Japanese' },
        ]}
      />

      {/* Explore Similar */}
      <div className="mt-8">
        <h2 className="text-xl font-bold text-gray-900 mb-4">Explore Similar Names</h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {searchNames(name.origin).filter(n => n.slug !== name.slug).slice(0, 8).map(n => (
            <Link key={n.slug} to={`/names/${n.slug}`} className="card-hover p-4 bg-white border border-gray-100 rounded-xl text-center">
              <p className="font-medium text-gray-800">{n.name}</p>
              <p className="text-xs text-gray-500 mt-1">{n.origin}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export function NameMeaning() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<ReturnType<typeof searchNames>>([]);
  const [searched, setSearched] = useState(false);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (!query.trim()) return;
    const r = searchNames(query);
    setResults(r.length ? r : [createFallbackName(query)]);
    setSearched(true);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8 sm:py-12">
      <SEO title="Name Meaning Finder: Meanings, Origins & Pronunciation | NameMeld" description="Search any name to explore its meaning, origin, pronunciation, alternate spellings and related names. NameMeld helps you research names across languages and cultures." path="/name-meaning" keywords={["name meaning", "meaning of a name", "name origin", "name pronunciation", "name meaning finder"]} breadcrumbs={[{name:'Home',path:'/'},{name:'Name Meaning',path:'/name-meaning'}]} />
      <div className="text-center mb-10">
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'var(--font-display)' }}>
          Name Meaning Finder
        </h1>
        <p className="text-gray-600">Discover the meaning, origin, pronunciation, and more about any name.</p>
      </div>

      <form onSubmit={handleSearch} className="max-w-xl mx-auto mb-8">
        <div className="flex items-center bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
          <input
            type="text"
            value={query}
            onChange={e => setQuery(e.target.value)}
            placeholder="Enter a name"
            className="flex-1 px-4 py-3 outline-none"
            aria-label="Enter a name to search"
          />
          <button type="submit" className="px-6 py-3 bg-indigo-600 text-white font-semibold hover:bg-indigo-700 transition-colors">
            Search Name
          </button>
        </div>
      </form>

      {searched && results.length === 0 && (
        <div className="text-center py-12 bg-white rounded-xl border border-gray-100">
          <p className="text-gray-500 text-lg mb-2">We couldn't find a curated profile for "{query}". A name-insight result can still be created for this search.</p>
          <p className="text-gray-400 text-sm">Try exploring our other tools or search for a different name.</p>
          <div className="mt-6 flex flex-wrap justify-center gap-2">
            <Link to="/name-generator" className="px-4 py-2 bg-indigo-50 text-indigo-700 rounded-lg text-sm font-medium hover:bg-indigo-100">Generate Names</Link>
            <Link to="/japanese-converter" className="px-4 py-2 bg-purple-50 text-purple-700 rounded-lg text-sm font-medium hover:bg-purple-100">Japanese Converter</Link>
            <Link to="/name-combiner" className="px-4 py-2 bg-pink-50 text-pink-700 rounded-lg text-sm font-medium hover:bg-pink-100">Combine Names</Link>
          </div>
        </div>
      )}

      {results.length > 0 && (
        <div className="space-y-4">
          {results.map(name => (
            <Link key={name.slug} to={`/names/${name.slug}`} className="meaning-result-card block card-hover bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
              <div className="meaning-monogram" aria-hidden="true">{name.name.charAt(0).toUpperCase()}</div>
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-xl font-bold text-gray-900">{name.name}</h3>
                  <p className="text-gray-600 mt-1">{name.meaning}</p>
                  <div className="flex flex-wrap gap-2 mt-3">
                    <span className="px-2 py-1 bg-indigo-50 text-indigo-700 rounded text-xs font-medium">{name.origin}</span>
                    <span className="px-2 py-1 bg-purple-50 text-purple-700 rounded text-xs font-medium">{name.gender}</span>
                    <span className="px-2 py-1 bg-teal-50 text-teal-700 rounded text-xs font-medium">{name.pronunciation}</span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      )}

      {/* About Name Meanings */}
      <section className="mt-12 bg-gradient-to-br from-indigo-50/50 to-purple-50/50 rounded-2xl p-6 sm:p-8 border border-indigo-100/50">
        <h2 className="text-2xl font-bold text-gray-900 mb-3" style={{ fontFamily: 'var(--font-display)' }}>About Name Meanings & Origins</h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          Every name carries a story. The <strong>meaning of a name</strong> often reflects cultural values, historical events, religious beliefs, or natural phenomena. Understanding <strong>name origins and etymology</strong> helps us appreciate the rich tapestry of human language and tradition.
        </p>
        <p className="text-gray-600 leading-relaxed mb-4">
          <strong>Arabic names</strong> often derive from Quranic verses or attributes of God, while <strong>Japanese names</strong> frequently reference nature, seasons, or virtues. <strong>Hebrew names</strong> carry deep biblical significance, and <strong>European names</strong> often trace back to ancient Germanic, Latin, or Celtic roots. Each culture has its own naming traditions that reveal fascinating insights into history and values.
        </p>
        <p className="text-gray-600 leading-relaxed">
          When researching <strong>name meanings</strong>, it's important to consider that meanings can vary across regions, time periods, and sources. A name might have different interpretations in different cultures. Our database aims to provide the most common and widely accepted meanings, but we encourage users to explore multiple sources for comprehensive understanding.
        </p>
      </section>

      {/* How to Use */}
      <section className="mt-10">
        <h2 className="text-2xl font-bold text-gray-900 mb-6" style={{ fontFamily: 'var(--font-display)' }}>How to Explore Name Meanings</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="bg-white rounded-xl p-5 border border-gray-100 shadow-sm">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 text-white font-bold flex items-center justify-center mb-3 text-sm">1</div>
            <h3 className="font-semibold text-gray-900 mb-1">Search Any Name</h3>
            <p className="text-sm text-gray-600">Type a name in the search box to find its meaning, origin, pronunciation, and cultural significance.</p>
          </div>
          <div className="bg-white rounded-xl p-5 border border-gray-100 shadow-sm">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 text-white font-bold flex items-center justify-center mb-3 text-sm">2</div>
            <h3 className="font-semibold text-gray-900 mb-1">Explore Details</h3>
            <p className="text-sm text-gray-600">View alternate spellings, nicknames, similar names, related names, and famous people who share the name.</p>
          </div>
          <div className="bg-white rounded-xl p-5 border border-gray-100 shadow-sm">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 text-white font-bold flex items-center justify-center mb-3 text-sm">3</div>
            <h3 className="font-semibold text-gray-900 mb-1">Save Favorites</h3>
            <p className="text-sm text-gray-600">Click the heart icon to save names you love. Your favorites are stored locally in your browser.</p>
          </div>
        </div>
      </section>

      <ToolSEOContent
        title="How to research the meaning of a name"
        paragraphs={[
          'A name meaning search can answer more than a single dictionary-style definition. When researching a name, look at the language or culture where it developed, historical spelling variants, pronunciation, related forms, and how the name is used today. NameMeld brings these details together when reliable information is available.',
          'Name origins can cross borders and languages. The same spelling may have different histories, while different spellings may be related forms of one older name. That is why NameMeld avoids treating one short definition as the complete story and clearly labels general insights when a verified etymology is not available.',
          'Use the Name Meaning Finder to search a name, open the full profile, then compare similar names. You can also move from name meaning research to a name generator, baby name list, Japanese Katakana conversion, or name popularity exploration depending on what you are trying to decide.'
        ]}
        links={[
          { to: '/name-generator', label: 'Name generator' },
          { to: '/baby-names', label: 'Baby names' },
          { to: '/popularity', label: 'Name popularity' },
          { to: '/japanese-converter', label: 'Japanese name converter' },
        ]}
      />

      {/* FAQ */}
      <section className="mt-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6" style={{ fontFamily: 'var(--font-display)' }}>Frequently Asked Questions</h2>
        <div className="space-y-3">
          <details className="bg-white rounded-xl border border-gray-100 p-5 group">
            <summary className="font-medium text-gray-900 cursor-pointer list-none flex items-center justify-between">
              How are name meanings determined?
              <span className="text-indigo-500 group-open:rotate-180 transition-transform">▼</span>
            </summary>
            <p className="mt-3 text-sm text-gray-600">Name meanings are derived from etymological research, historical records, and cultural traditions. We cross-reference multiple authoritative sources to provide the most widely accepted meanings.</p>
          </details>
          <details className="bg-white rounded-xl border border-gray-100 p-5 group">
            <summary className="font-medium text-gray-900 cursor-pointer list-none flex items-center justify-between">
              Can a name have multiple meanings?
              <span className="text-indigo-500 group-open:rotate-180 transition-transform">▼</span>
            </summary>
            <p className="mt-3 text-sm text-gray-600">Yes! Many names have different meanings across cultures or have evolved over time. For example, a name might mean "light" in one language but "gift" in another.</p>
          </details>
          <details className="bg-white rounded-xl border border-gray-100 p-5 group">
            <summary className="font-medium text-gray-900 cursor-pointer list-none flex items-center justify-between">
              What if my name isn't in the database?
              <span className="text-indigo-500 group-open:rotate-180 transition-transform">▼</span>
            </summary>
            <p className="mt-3 text-sm text-gray-600">We're continuously expanding our database. If your name isn't listed, try our Name Generator or Japanese Converter tools, or explore similar names from the same origin or culture.</p>
          </details>
          <details className="bg-white rounded-xl border border-gray-100 p-5 group">
            <summary className="font-medium text-gray-900 cursor-pointer list-none flex items-center justify-between">
              Are the pronunciations accurate?
              <span className="text-indigo-500 group-open:rotate-180 transition-transform">▼</span>
            </summary>
            <p className="mt-3 text-sm text-gray-600">Our pronunciations use phonetic spelling to guide you. Actual pronunciation may vary by region, dialect, or personal preference. Listen to native speakers when possible for the most authentic pronunciation.</p>
          </details>
        </div>
      </section>

      {/* Related Keywords */}
      <section className="mt-10">
        <h2 className="text-lg font-semibold text-gray-900 mb-3">Related Searches</h2>
        <div className="flex flex-wrap gap-2">
          {['name meaning finder', 'baby name meanings', 'origin of names', 'name etymology', 'cultural names', 'unique name meanings', 'popular name origins', 'name pronunciation guide', 'famous people names', 'alternate name spellings'].map(k => (
            <span key={k} className="px-3 py-1 bg-gray-50 border border-gray-200 rounded-full text-xs text-gray-600">{k}</span>
          ))}
        </div>
      </section>
    </div>
  );
}
