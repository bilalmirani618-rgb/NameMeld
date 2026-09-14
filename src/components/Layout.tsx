import { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Heart, Menu, X, Search, ChevronDown } from 'lucide-react';
import { searchNames } from '../data/names';

export default function Layout({ children }: { children: React.ReactNode }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [exploreOpen, setExploreOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState<{ name: string; slug: string; origin: string }[]>([]);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    setMobileOpen(false);
    setSearchOpen(false);
    window.scrollTo(0, 0);
  }, [location]);

  useEffect(() => {
    if (searchQuery.length >= 2) {
      const results = searchNames(searchQuery).slice(0, 8);
      setSearchResults(results.map(r => ({ name: r.name, slug: r.slug, origin: r.origin })));
    } else {
      setSearchResults([]);
    }
  }, [searchQuery]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      const results = searchNames(searchQuery);
      if (results.length > 0) {
        navigate(`/names/${results[0].slug}`);
      } else {
        navigate(`/name-meaning?q=${encodeURIComponent(searchQuery)}`);
      }
      setSearchQuery('');
      setSearchOpen(false);
    }
  };

  const navLinks = [
    { to: '/', label: 'Home' },
    { to: '/name-meaning', label: 'Name Meaning' },
    { to: '/name-generator', label: 'Name Generator' },
    { to: '/japanese-converter', label: 'Japanese Converter' },
    { to: '/name-wheel', label: 'Name Wheel' },
    { to: '/brand-generator', label: 'Brand Names' },
    { to: '/baby-names', label: 'Baby Names' },
    { to: '/popularity', label: 'Popularity' },
  ];

  const exploreLinks = [
    { to: '/name-meaning?origin=Arabic', label: 'Arabic Names' },
    { to: '/name-meaning?origin=English', label: 'English Names' },
    { to: '/name-meaning?origin=Japanese', label: 'Japanese Names' },
    { to: '/name-meaning?origin=Indian', label: 'Indian Names' },
    { to: '/name-meaning?origin=Spanish', label: 'Spanish Names' },
    { to: '/name-meaning?origin=French', label: 'French Names' },
    { to: '/name-meaning?origin=Korean', label: 'Korean Names' },
    { to: '/name-meaning?origin=Muslim', label: 'Muslim Names' },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      {/* Navbar */}
      <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2 font-bold text-xl text-indigo-600 hover:text-indigo-700 transition-colors">
              <span className="w-8 h-8 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-lg flex items-center justify-center text-white text-sm font-bold">N</span>
              <span>NameMeld</span>
            </Link>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map(link => (
                <Link key={link.to} to={link.to} className="px-3 py-2 text-sm font-medium text-gray-600 hover:text-indigo-600 hover:bg-indigo-50 rounded-lg transition-all">
                  {link.label}
                </Link>
              ))}
              
              {/* Explore Dropdown */}
              <div className="relative">
                <button onClick={() => setExploreOpen(!exploreOpen)} className="px-3 py-2 text-sm font-medium text-gray-600 hover:text-indigo-600 hover:bg-indigo-50 rounded-lg transition-all flex items-center gap-1">
                  Explore Names <ChevronDown size={14} />
                </button>
                {exploreOpen && (
                  <div className="absolute top-full right-0 mt-1 w-48 bg-white border border-gray-100 rounded-xl shadow-lg py-2 z-50">
                    {exploreLinks.map(link => (
                      <Link key={link.to} to={link.to} className="block px-4 py-2 text-sm text-gray-600 hover:text-indigo-600 hover:bg-indigo-50 transition-colors">
                        {link.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Right side */}
            <div className="flex items-center gap-2">
              {/* Search */}
              <div className="relative hidden sm:block">
                <button onClick={() => setSearchOpen(!searchOpen)} className="p-2 text-gray-500 hover:text-indigo-600 hover:bg-indigo-50 rounded-lg transition-all">
                  <Search size={20} />
                </button>
                {searchOpen && (
                  <div className="absolute right-0 top-full mt-2 w-80">
                    <form onSubmit={handleSearch}>
                      <input
                        type="text"
                        value={searchQuery}
                        onChange={e => setSearchQuery(e.target.value)}
                        placeholder="Search a name..."
                        className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none"
                        autoFocus
                      />
                    </form>
                    {searchResults.length > 0 && (
                      <div className="autocomplete-dropdown mt-1 rounded-xl">
                        {searchResults.map(r => (
                          <Link key={r.slug} to={`/names/${r.slug}`} className="autocomplete-item flex items-center justify-between" onClick={() => { setSearchOpen(false); setSearchQuery(''); }}>
                            <span className="font-medium text-gray-800">{r.name}</span>
                            <span className="text-xs text-gray-400">{r.origin}</span>
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                )}
              </div>

              <Link to="/favorites" className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-pink-500 hover:text-pink-600 hover:bg-pink-50 rounded-lg transition-all">
                <Heart size={18} /> <span className="hidden sm:inline">Favorites</span>
              </Link>

              {/* Mobile menu button */}
              <button onClick={() => setMobileOpen(!mobileOpen)} className="lg:hidden p-2 text-gray-600 hover:text-indigo-600 hover:bg-indigo-50 rounded-lg">
                {mobileOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileOpen && (
          <div className="lg:hidden border-t border-gray-100 bg-white mobile-menu">
            <div className="px-4 py-4 space-y-1">
              {/* Mobile search */}
              <form onSubmit={handleSearch} className="mb-4">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={e => setSearchQuery(e.target.value)}
                  placeholder="Search a name..."
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none"
                />
              </form>
              {navLinks.map(link => (
                <Link key={link.to} to={link.to} className="block px-4 py-3 text-base font-medium text-gray-700 hover:text-indigo-600 hover:bg-indigo-50 rounded-xl transition-all">
                  {link.label}
                </Link>
              ))}
              <div className="pt-2 mt-2 border-t border-gray-100">
                <p className="px-4 py-2 text-xs font-semibold text-gray-400 uppercase">Explore by Origin</p>
                {exploreLinks.map(link => (
                  <Link key={link.to} to={link.to} className="block px-4 py-2 text-sm text-gray-600 hover:text-indigo-600 hover:bg-indigo-50 rounded-lg">
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Main content */}
      <main className="flex-1">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 mt-auto">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {/* Brand */}
            <div className="col-span-2 md:col-span-1">
              <div className="flex items-center gap-2 mb-4">
                <span className="w-8 h-8 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-lg flex items-center justify-center text-white text-sm font-bold">N</span>
                <span className="font-bold text-xl text-white">NameMeld</span>
              </div>
              <p className="text-sm text-gray-400 mb-4">Discover. Generate. Convert. Explore.</p>
              <p className="text-xs text-gray-500">Your all-in-one name platform for discovering meanings, generating unique names, and exploring origins from around the world.</p>
            </div>

            {/* Tools */}
            <div>
              <h3 className="font-semibold text-white mb-4 text-sm uppercase tracking-wider">Tools</h3>
              <ul className="space-y-2">
                <li><Link to="/name-meaning" className="text-sm hover:text-indigo-400 transition-colors">Name Meaning</Link></li>
                <li><Link to="/name-generator" className="text-sm hover:text-indigo-400 transition-colors">Name Generator</Link></li>
                <li><Link to="/japanese-converter" className="text-sm hover:text-indigo-400 transition-colors">Japanese Converter</Link></li>
                <li><Link to="/name-wheel" className="text-sm hover:text-indigo-400 transition-colors">Name Wheel</Link></li>
                <li><Link to="/brand-generator" className="text-sm hover:text-indigo-400 transition-colors">Brand Generator</Link></li>
                <li><Link to="/name-combiner" className="text-sm hover:text-indigo-400 transition-colors">Name Combiner</Link></li>
                <li><Link to="/baby-names" className="text-sm hover:text-indigo-400 transition-colors">Baby Names</Link></li>
                <li><Link to="/popularity" className="text-sm hover:text-indigo-400 transition-colors">Name Popularity</Link></li>
              </ul>
            </div>

            {/* Explore */}
            <div>
              <h3 className="font-semibold text-white mb-4 text-sm uppercase tracking-wider">Explore</h3>
              <ul className="space-y-2">
                <li><Link to="/name-meaning?origin=Arabic" className="text-sm hover:text-indigo-400 transition-colors">Arabic Names</Link></li>
                <li><Link to="/name-meaning?origin=Japanese" className="text-sm hover:text-indigo-400 transition-colors">Japanese Names</Link></li>
                <li><Link to="/name-meaning?origin=English" className="text-sm hover:text-indigo-400 transition-colors">English Names</Link></li>
                <li><Link to="/name-meaning?origin=Indian" className="text-sm hover:text-indigo-400 transition-colors">Indian Names</Link></li>
                <li><Link to="/name-meaning?origin=Spanish" className="text-sm hover:text-indigo-400 transition-colors">Spanish Names</Link></li>
                <li><Link to="/name-meaning?origin=Korean" className="text-sm hover:text-indigo-400 transition-colors">Korean Names</Link></li>
                <li><Link to="/name-meaning?origin=French" className="text-sm hover:text-indigo-400 transition-colors">French Names</Link></li>
              </ul>
            </div>

            {/* Company */}
            <div>
              <h3 className="font-semibold text-white mb-4 text-sm uppercase tracking-wider">Company</h3>
              <ul className="space-y-2">
                <li><Link to="/about" className="text-sm hover:text-indigo-400 transition-colors">About</Link></li>
                <li><Link to="/privacy" className="text-sm hover:text-indigo-400 transition-colors">Privacy Policy</Link></li>
                <li><Link to="/terms" className="text-sm hover:text-indigo-400 transition-colors">Terms of Service</Link></li>
                <li><Link to="/community-guidelines" className="text-sm hover:text-indigo-400 transition-colors">Community Guidelines</Link></li>
                <li><Link to="/favorites" className="text-sm hover:text-indigo-400 transition-colors">My Favorites</Link></li>
              </ul>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-sm text-gray-500">© 2026 NameMeld. All rights reserved.</p>
            <div className="flex items-center gap-4">
              <Link to="/privacy" className="text-xs text-gray-500 hover:text-gray-300">Privacy Policy</Link>
              <Link to="/terms" className="text-xs text-gray-500 hover:text-gray-300">Terms of Service</Link>
              <Link to="/community-guidelines" className="text-xs text-gray-500 hover:text-gray-300">Community</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
