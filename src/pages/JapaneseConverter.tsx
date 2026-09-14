import { useState } from 'react';
import { Copy, Share2, Check } from 'lucide-react';
import { convertToKatakana } from '../data/japaneseMap';
import { copyToClipboard, shareResult } from '../utils/helpers';

import SEO from '../components/SEO';
import ToolSEOContent from '../components/ToolSEOContent';
export default function JapaneseConverter() {
  const [input, setInput] = useState('');
  const [result, setResult] = useState<{ katakana: string; romanized: string } | null>(null);
  const [copied, setCopied] = useState('');

  const handleConvert = () => {
    if (input.trim()) {
      setResult(convertToKatakana(input.trim()));
    }
  };

  const handleCopy = (text: string, label: string) => {
    copyToClipboard(text);
    setCopied(label);
    setTimeout(() => setCopied(''), 2000);
  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-8 sm:py-12">
      <SEO title="My Name in Japanese: English to Katakana Converter | NameMeld" description="Convert your English name to Japanese Katakana and see a romanized pronunciation. Learn how foreign names are represented phonetically in Japanese." path="/japanese-converter" keywords={["my name in Japanese", "name to Katakana", "English to Japanese name converter", "convert name to Japanese"]} breadcrumbs={[{name:'Home',path:'/'},{name:'Japanese Converter',path:'/japanese-converter'}]} />
      <div className="text-center mb-10">
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'var(--font-display)' }}>
          My Name in Japanese – Katakana Converter
        </h1>
        <p className="text-gray-600">Convert your name into Japanese Katakana and see a phonetic Romanized pronunciation.</p>
      </div>

      <div className="bg-white rounded-2xl p-6 sm:p-8 border border-gray-100 shadow-sm mb-8">
        <label className="block text-sm font-medium text-gray-700 mb-2">Enter your name</label>
        <div className="flex gap-3 mb-4">
          <input
            type="text"
            value={input}
            onChange={e => setInput(e.target.value)}
            placeholder="e.g. Bilal"
            className="flex-1 px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none text-lg"
            onKeyDown={e => e.key === 'Enter' && handleConvert()}
            aria-label="Enter name to convert"
          />
          <button onClick={handleConvert} className="px-6 py-3 bg-gradient-to-r from-red-500 to-orange-500 text-white font-semibold rounded-xl hover:from-red-600 hover:to-orange-600 transition-all">
            Convert
          </button>
        </div>

        <p className="text-xs text-gray-400">
          Note: Foreign names are generally represented phonetically in Katakana. This converter provides an approximation and is NOT necessarily an official Japanese personal name.
        </p>
      </div>

      {result && (
        <div className="katakana-result animate-slide-up">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
            <div className="bg-gradient-to-br from-red-50 to-orange-50 rounded-2xl p-8 text-center border border-red-100">
              <h3 className="text-sm font-medium text-gray-500 mb-3">Japanese (Katakana)</h3>
              <p className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">{result.katakana}</p>
              <button onClick={() => handleCopy(result.katakana, 'katakana')} className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors">
                {copied === 'katakana' ? <Check size={16} className="text-green-500" /> : <Copy size={16} />}
                {copied === 'katakana' ? 'Copied!' : 'Copy Katakana'}
              </button>
            </div>
            <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-2xl p-8 text-center border border-indigo-100">
              <h3 className="text-sm font-medium text-gray-500 mb-3">Romanized</h3>
              <p className="text-3xl sm:text-4xl font-bold text-indigo-700 mb-4">{result.romanized}</p>
              <button onClick={() => handleCopy(result.romanized, 'romanized')} className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors">
                {copied === 'romanized' ? <Check size={16} className="text-green-500" /> : <Copy size={16} />}
                {copied === 'romanized' ? 'Copied!' : 'Copy Romanization'}
              </button>
            </div>
          </div>

          <div className="flex justify-center gap-3">
            <button onClick={() => shareResult(`${input} in Japanese`, `${input} → ${result.katakana} (${result.romanized})`)} className="flex items-center gap-2 px-4 py-2 bg-gray-100 text-gray-700 rounded-lg text-sm font-medium hover:bg-gray-200 transition-colors">
              <Share2 size={16} /> Share
            </button>
          </div>
        </div>
      )}

      <ToolSEOContent
        title="My Name in Japanese: English Name to Katakana"
        paragraphs={[
          'If you want to see your name in Japanese, NameMeld converts an English or Latin-script name into a phonetic Katakana representation. This is useful for casual Japanese-style usernames, language practice, creative projects, and learning how a foreign name can be approximated using Japanese sounds.',
          'Searches such as “my name in Japanese,” “name to Katakana,” “English to Japanese name converter,” and “convert name to Japanese” generally describe a phonetic conversion rather than a literal translation. Katakana represents sound, while Kanji characters carry meaning and are not automatically interchangeable with a foreign name.',
          'The result is an approximation and may vary depending on pronunciation, accent, and spelling. For passports, legal records, immigration documents, or other official purposes, use the spelling required by the relevant authority or a qualified translator.'
        ]}
        links={[
          { to: '/name-meaning', label: 'Explore name meanings' },
          { to: '/name-generator', label: 'Generate name ideas' },
          { to: '/names/bilal', label: 'See a name profile' },
        ]}
      />

      {/* About the Tool */}
      <section className="mt-12 bg-gradient-to-br from-red-50/50 to-orange-50/50 rounded-2xl p-6 sm:p-8 border border-red-100/50">
        <h2 className="text-2xl font-bold text-gray-900 mb-3" style={{ fontFamily: 'var(--font-display)' }}>About the Japanese Name Converter</h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          The <strong>Japanese name converter</strong> transforms any English name into <strong>Japanese Katakana script</strong> (カタカナ), the writing system used in Japanese for foreign words and names. Katakana is one of three Japanese writing systems, alongside Hiragana and Kanji, and is specifically designed to represent sounds from other languages.
        </p>
        <p className="text-gray-600 leading-relaxed mb-4">
          When you <strong>convert your name to Japanese</strong>, the tool analyzes the phonetic structure of your name and maps each sound to its closest Katakana equivalent. For example, "Bilal" becomes ビラル (Biraru), "Sarah" becomes サラ (Sara), and "Emma" becomes エンマ (Enma). The converter also provides a <strong>romanized pronunciation guide</strong> showing how the Katakana would be read back into English letters.
        </p>
        <p className="text-gray-600 leading-relaxed">
          This tool is perfect for <strong>creating Japanese nicknames</strong>, understanding how your name sounds in Japanese, adding a Japanese touch to social media profiles, or simply satisfying your curiosity about <strong>Japanese phonetics and writing systems</strong>. It's also useful for <strong>anime fans</strong>, <strong>Japanese language learners</strong>, and anyone interested in <strong>cross-cultural name adaptation</strong>.
        </p>
      </section>

      {/* How to Use */}
      <section className="mt-10">
        <h2 className="text-2xl font-bold text-gray-900 mb-6" style={{ fontFamily: 'var(--font-display)' }}>How to Convert Your Name to Japanese</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="bg-white rounded-xl p-5 border border-gray-100 shadow-sm">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-red-500 to-orange-600 text-white font-bold flex items-center justify-center mb-3 text-sm">1</div>
            <h3 className="font-semibold text-gray-900 mb-1">Enter Your Name</h3>
            <p className="text-sm text-gray-600">Type your name in English letters. Try different spellings to see variations.</p>
          </div>
          <div className="bg-white rounded-xl p-5 border border-gray-100 shadow-sm">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-red-500 to-orange-600 text-white font-bold flex items-center justify-center mb-3 text-sm">2</div>
            <h3 className="font-semibold text-gray-900 mb-1">Click Convert</h3>
            <p className="text-sm text-gray-600">Instantly see your name in Katakana script with romanized pronunciation.</p>
          </div>
          <div className="bg-white rounded-xl p-5 border border-gray-100 shadow-sm">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-red-500 to-orange-600 text-white font-bold flex items-center justify-center mb-3 text-sm">3</div>
            <h3 className="font-semibold text-gray-900 mb-1">Copy & Share</h3>
            <p className="text-sm text-gray-600">Copy the Katakana or romanization, or share your Japanese name with friends.</p>
          </div>
        </div>
      </section>

      {/* Important Notes */}
      <section className="mt-10 bg-amber-50/50 rounded-2xl p-6 border border-amber-100/50">
        <h2 className="text-xl font-bold text-gray-900 mb-4">⚠️ Important Notes</h2>
        <ul className="space-y-2">
          <li className="flex items-start gap-2 text-sm text-gray-700"><span className="text-amber-500 font-bold mt-0.5">•</span><span>This converter provides <strong>phonetic approximations</strong> only. It is NOT an official Japanese name translation.</span></li>
          <li className="flex items-start gap-2 text-sm text-gray-700"><span className="text-amber-500 font-bold mt-0.5">•</span><span>Foreign names are represented phonetically in Katakana. The same English name may have multiple valid Katakana representations.</span></li>
          <li className="flex items-start gap-2 text-sm text-gray-700"><span className="text-amber-500 font-bold mt-0.5">•</span><span>For official documents, legal purposes, or formal Japanese name registration, consult a professional translator or Japanese government office.</span></li>
          <li className="flex items-start gap-2 text-sm text-gray-700"><span className="text-amber-500 font-bold mt-0.5">•</span><span>Japanese has sounds that don't exist in English (and vice versa), so some approximation is inevitable.</span></li>
          <li className="flex items-start gap-2 text-sm text-gray-700"><span className="text-amber-500 font-bold mt-0.5">•</span><span>Try different spellings of your name to see how variations affect the Katakana output.</span></li>
        </ul>
      </section>

      {/* FAQ */}
      <section className="mt-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6" style={{ fontFamily: 'var(--font-display)' }}>Frequently Asked Questions</h2>
        <div className="space-y-3">
          <details className="bg-white rounded-xl border border-gray-100 p-5 group">
            <summary className="font-medium text-gray-900 cursor-pointer list-none flex items-center justify-between">
              What is Katakana?
              <span className="text-indigo-500 group-open:rotate-180 transition-transform">▼</span>
            </summary>
            <p className="mt-3 text-sm text-gray-600">Katakana (カタカナ) is one of three Japanese writing systems. It's primarily used for foreign words, names, scientific terms, and emphasis. Each Katakana character represents a syllable (like "ka", "mi", "tsu").</p>
          </details>
          <details className="bg-white rounded-xl border border-gray-100 p-5 group">
            <summary className="font-medium text-gray-900 cursor-pointer list-none flex items-center justify-between">
              Why use Katakana instead of Kanji for names?
              <span className="text-indigo-500 group-open:rotate-180 transition-transform">▼</span>
            </summary>
            <p className="mt-3 text-sm text-gray-600">Kanji characters carry specific meanings and are typically used for Japanese names. Foreign names are written in Katakana because they don't have established Kanji representations. Katakana focuses on sound rather than meaning.</p>
          </details>
          <details className="bg-white rounded-xl border border-gray-100 p-5 group">
            <summary className="font-medium text-gray-900 cursor-pointer list-none flex items-center justify-between">
              Is this an official Japanese name?
              <span className="text-indigo-500 group-open:rotate-180 transition-transform">▼</span>
            </summary>
            <p className="mt-3 text-sm text-gray-600">No. This tool provides phonetic approximations for entertainment and educational purposes. For official use (passports, legal documents, residency registration), you'll need to work with Japanese authorities who have specific guidelines.</p>
          </details>
          <details className="bg-white rounded-xl border border-gray-100 p-5 group">
            <summary className="font-medium text-gray-900 cursor-pointer list-none flex items-center justify-between">
              Can I use this for my Japanese username or nickname?
              <span className="text-indigo-500 group-open:rotate-180 transition-transform">▼</span>
            </summary>
            <p className="mt-3 text-sm text-gray-600">Absolutely! Many people use Katakana versions of their names for social media, gaming, anime forums, or Japanese language practice. It's a fun way to have a "Japanese name" for casual use.</p>
          </details>
          <details className="bg-white rounded-xl border border-gray-100 p-5 group">
            <summary className="font-medium text-gray-900 cursor-pointer list-none flex items-center justify-between">
              Why does my name sound different in Japanese?
              <span className="text-indigo-500 group-open:rotate-180 transition-transform">▼</span>
            </summary>
            <p className="mt-3 text-sm text-gray-600">Japanese has a limited set of sounds compared to English. Some English sounds (like "th" or "v") don't exist in Japanese, so they're approximated with the closest available sounds. This is normal and expected.</p>
          </details>
        </div>
      </section>

      {/* Related Keywords */}
      <section className="mt-10">
        <h2 className="text-lg font-semibold text-gray-900 mb-3">Related Searches</h2>
        <div className="flex flex-wrap gap-2">
          {['name to katakana', 'english to japanese converter', 'japanese name generator', 'katakana translator', 'my name in japanese', 'japanese writing system', 'convert name to japanese', 'katakana converter online', 'japanese phonetics', 'name in japanese script'].map(k => (
            <span key={k} className="px-3 py-1 bg-gray-50 border border-gray-200 rounded-full text-xs text-gray-600">{k}</span>
          ))}
        </div>
      </section>
    </div>
  );
}
