import SEO from '../components/SEO';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Heart, Trash2, Copy, Share2, Check } from 'lucide-react';
import { getFavorites, removeFavorite, copyToClipboard, shareResult } from '../utils/helpers';
import { searchNames } from '../data/names';

export default function Favorites() {
  const [favorites, setFavorites] = useState<string[]>([]);
  const [copied, setCopied] = useState('');

  useEffect(() => {
    setFavorites(getFavorites());
  }, []);

  const handleRemove = (name: string) => {
    removeFavorite(name);
    setFavorites(getFavorites());
  };

  const handleCopyAll = () => {
    copyToClipboard(favorites.join(', '));
    setCopied('all');
    setTimeout(() => setCopied(''), 2000);
  };

  const handleCopy = (name: string) => {
    copyToClipboard(name);
    setCopied(name);
    setTimeout(() => setCopied(''), 2000);
  };

  const getNameInfo = (name: string) => {
    const results = searchNames(name);
    return results.find(r => r.name.toLowerCase() === name.toLowerCase()) || results[0];
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8 sm:py-12">
      <SEO title="My Favorite Names | NameMeld" description="Your locally saved NameMeld favorites." path="/favorites" indexable={false} />
      <div className="text-center mb-10">
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'var(--font-display)' }}>
          My Favorite Names
        </h1>
        <p className="text-gray-600">Your personal collection of names you love.</p>
      </div>

      {favorites.length === 0 ? (
        <div className="text-center py-16 bg-white rounded-2xl border border-gray-100">
          <Heart className="mx-auto text-gray-300 mb-4" size={48} />
          <p className="text-gray-500 text-lg mb-6">You haven't saved any names yet.</p>
          <Link to="/name-generator" className="inline-flex items-center gap-2 px-6 py-3 bg-indigo-600 text-white font-semibold rounded-xl hover:bg-indigo-700 transition-colors">
            Explore Names
          </Link>
        </div>
      ) : (
        <div>
          <div className="flex items-center justify-between mb-6">
            <p className="text-sm text-gray-500">{favorites.length} name{favorites.length !== 1 ? 's' : ''} saved</p>
            <div className="flex gap-2">
              <button onClick={handleCopyAll} className="flex items-center gap-1 px-3 py-2 text-sm bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200">
                {copied === 'all' ? <Check size={14} /> : <Copy size={14} />}
                {copied === 'all' ? 'Copied!' : 'Copy All'}
              </button>
              <button onClick={() => shareResult('My Favorite Names', `My favorite names: ${favorites.join(', ')}`)} className="flex items-center gap-1 px-3 py-2 text-sm bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200">
                <Share2 size={14} /> Share
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {favorites.map(name => {
              const info = getNameInfo(name);
              return (
                <div key={name} className="card-hover bg-white rounded-xl p-5 border border-gray-100 shadow-sm">
                  <div className="flex items-start justify-between">
                    <div>
                      {info ? (
                        <Link to={`/names/${info.slug}`} className="text-xl font-bold text-gray-900 hover:text-indigo-600 transition-colors">
                          {info.name}
                        </Link>
                      ) : (
                        <span className="text-xl font-bold text-gray-900">{name}</span>
                      )}
                      {info && (
                        <div className="flex flex-wrap gap-2 mt-2">
                          <span className="px-2 py-1 bg-indigo-50 text-indigo-700 rounded text-xs font-medium">{info.origin}</span>
                          <span className="px-2 py-1 bg-purple-50 text-purple-700 rounded text-xs font-medium">{info.gender}</span>
                        </div>
                      )}
                    </div>
                    <div className="flex items-center gap-1">
                      <button onClick={() => handleCopy(name)} className="p-2 rounded-lg text-gray-300 hover:text-indigo-600 hover:bg-indigo-50">
                        {copied === name ? <Check size={16} className="text-green-500" /> : <Copy size={16} />}
                      </button>
                      <button onClick={() => handleRemove(name)} className="p-2 rounded-lg text-gray-300 hover:text-red-600 hover:bg-red-50">
                        <Trash2 size={16} />
                      </button>
                    </div>
                  </div>
                  {info && <p className="text-sm text-gray-500 mt-2">{info.meaning}</p>}
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
