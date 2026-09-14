import { useState, useRef, useCallback } from 'react';
import { Copy, Share2, Trash2, Shuffle, RotateCw } from 'lucide-react';
import { copyToClipboard, shareResult } from '../utils/helpers';

import SEO from '../components/SEO';
import ToolSEOContent from '../components/ToolSEOContent';
const WHEEL_COLORS = ['#6366f1', '#ec4899', '#06b6d4', '#10b981', '#f59e0b', '#8b5cf6', '#ef4444', '#14b8a6', '#f97316', '#3b82f6', '#a855f7', '#22c55e'];

export default function NameWheel() {
  const [names, setNames] = useState(['Alex', 'Sarah', 'John', 'Michael', 'David']);
  const [inputText, setInputText] = useState('Alex\nSarah\nJohn\nMichael\nDavid');
  const [winner, setWinner] = useState<string | null>(null);
  const [spinning, setSpinning] = useState(false);
  const [rotation, setRotation] = useState(0);
  const wheelRef = useRef<HTMLDivElement>(null);

  const updateNames = (text: string) => {
    setInputText(text);
    const parsed = text.split('\n').map(n => n.trim()).filter(n => n.length > 0);
    setNames(parsed);
  };

  const spin = useCallback(() => {
    if (names.length < 2) return;
    setSpinning(true);
    setWinner(null);

    const winnerIndex = Math.floor(Math.random() * names.length);
    const segmentAngle = 360 / names.length;
    const targetAngle = 360 - (winnerIndex * segmentAngle + segmentAngle / 2);
    const spins = 5 + Math.floor(Math.random() * 5);
    const totalRotation = rotation + spins * 360 + targetAngle - (rotation % 360);

    setRotation(totalRotation);

    setTimeout(() => {
      setWinner(names[winnerIndex]);
      setSpinning(false);
    }, 4200);
  }, [names, rotation]);

  const removeWinner = () => {
    if (winner) {
      const newNames = names.filter(n => n !== winner);
      setNames(newNames);
      setInputText(newNames.join('\n'));
      setWinner(null);
    }
  };

  const shuffleNames = () => {
    const shuffled = [...names].sort(() => Math.random() - 0.5);
    setNames(shuffled);
    setInputText(shuffled.join('\n'));
  };

  const clearAll = () => {
    setNames([]);
    setInputText('');
    setWinner(null);
  };

  const renderWheel = () => {
    if (names.length === 0) return null;
    const segmentAngle = 360 / names.length;

    return names.map((name, i) => {
      const startAngle = i * segmentAngle;
      const endAngle = startAngle + segmentAngle;
      const startRad = (startAngle - 90) * (Math.PI / 180);
      const endRad = (endAngle - 90) * (Math.PI / 180);
      const x1 = 50 + 50 * Math.cos(startRad);
      const y1 = 50 + 50 * Math.sin(startRad);
      const x2 = 50 + 50 * Math.cos(endRad);
      const y2 = 50 + 50 * Math.sin(endRad);
      const largeArc = segmentAngle > 180 ? 1 : 0;
      const midAngle = (startAngle + endAngle) / 2;
      const midRad = (midAngle - 90) * (Math.PI / 180);
      const textX = 50 + 30 * Math.cos(midRad);
      const textY = 50 + 30 * Math.sin(midRad);
      const color = WHEEL_COLORS[i % WHEEL_COLORS.length];

      return (
        <g key={i}>
          <path
            d={`M 50 50 L ${x1} ${y1} A 50 50 0 ${largeArc} 1 ${x2} ${y2} Z`}
            fill={color}
            stroke="white"
            strokeWidth="0.5"
          />
          <text
            x={textX}
            y={textY}
            textAnchor="middle"
            dominantBaseline="middle"
            fill="white"
            fontSize={names.length > 8 ? "3" : "4"}
            fontWeight="bold"
            transform={`rotate(${midAngle}, ${textX}, ${textY})`}
          >
            {name.length > 8 ? name.slice(0, 7) + '…' : name}
          </text>
        </g>
      );
    });
  };

  return (
    <div className="max-w-5xl mx-auto px-4 py-8 sm:py-12">
      <SEO title="Wheel of Names: Wheel of Names – Random Name Picker & Picker | NameMeld" description="Use a free interactive wheel of names to randomly pick one name from your list. Great for games, classrooms, groups, decisions and quick random selection." path="/name-wheel" keywords={["wheel of names", "random name wheel", "name picker", "random name generator"]} breadcrumbs={[{name:'Home',path:'/'},{name:'Name Wheel',path:'/name-wheel'}]} />
      <div className="text-center mb-10">
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'var(--font-display)' }}>
          Random Name Wheel
        </h1>
        <p className="text-gray-600">Add names and spin the wheel to randomly select one.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Input Panel */}
        <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
          <label className="block text-sm font-medium text-gray-700 mb-2">Enter names (one per line)</label>
          <textarea
            value={inputText}
            onChange={e => updateNames(e.target.value)}
            className="w-full h-48 px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none resize-none font-mono text-sm"
            placeholder="Enter names, one per line..."
            aria-label="Names for the wheel"
          />
          <p className="text-xs text-gray-400 mt-2">{names.length} names loaded</p>

          <div className="flex flex-wrap gap-2 mt-4">
            <button onClick={shuffleNames} className="flex items-center gap-1 px-3 py-2 text-sm bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors">
              <Shuffle size={14} /> Shuffle
            </button>
            <button onClick={clearAll} className="flex items-center gap-1 px-3 py-2 text-sm bg-red-50 text-red-700 rounded-lg hover:bg-red-100 transition-colors">
              <Trash2 size={14} /> Clear
            </button>
          </div>
        </div>

        {/* Wheel Panel */}
        <div className="flex flex-col items-center">
          <div className="relative mb-6">
            {/* Pointer */}
            <div className="wheel-pointer"></div>
            
            {/* Wheel */}
            <div className="wheel-container">
              <div
                ref={wheelRef}
                className="wheel"
                style={{ transform: `rotate(${rotation}deg)` }}
              >
                <svg viewBox="0 0 100 100" className="w-full h-full">
                  {renderWheel()}
                </svg>
              </div>
              <div className="wheel-center">
                <span>SPIN</span>
              </div>
            </div>
          </div>

          <button
            onClick={spin}
            disabled={spinning || names.length < 2}
            className="px-8 py-3 bg-gradient-to-r from-green-500 to-teal-500 text-white font-semibold rounded-xl hover:from-green-600 hover:to-teal-600 transition-all shadow-lg shadow-green-200 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {spinning ? 'Spinning...' : '🎡 Spin!'}
          </button>

          {names.length < 2 && (
            <p className="text-sm text-amber-600 mt-2">Add at least two names to spin the wheel.</p>
          )}
        </div>
      </div>

      {/* Winner */}
      {winner && (
        <div className="mt-8 text-center animate-slide-up">
          <div className="wheel-winner-card bg-gradient-to-br from-green-50 to-teal-50 rounded-3xl p-8 border border-green-200 inline-block">
            <p className="text-lg text-gray-500 mb-2">🎉 Winner</p>
            <p className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">{winner}</p>
            <div className="flex flex-wrap justify-center gap-3">
              <button onClick={spin} className="flex items-center gap-1 px-4 py-2 bg-white border border-gray-200 rounded-lg text-sm font-medium hover:bg-gray-50">
                <RotateCw size={14} /> Spin Again
              </button>
              <button onClick={removeWinner} className="flex items-center gap-1 px-4 py-2 bg-white border border-gray-200 rounded-lg text-sm font-medium hover:bg-gray-50">
                <Trash2 size={14} /> Remove Winner
              </button>
              <button onClick={() => copyToClipboard(winner)} className="flex items-center gap-1 px-4 py-2 bg-white border border-gray-200 rounded-lg text-sm font-medium hover:bg-gray-50">
                <Copy size={14} /> Copy Result
              </button>
              <button onClick={() => shareResult('Random Name Wheel', `The winner is: ${winner}`)} className="flex items-center gap-1 px-4 py-2 bg-white border border-gray-200 rounded-lg text-sm font-medium hover:bg-gray-50">
                <Share2 size={14} /> Share
              </button>
            </div>
          </div>
        </div>
      )}

      <ToolSEOContent
        title="Wheel of Names and Random Name Picker"
        paragraphs={[
          'The NameMeld name wheel is a simple wheel of names for randomly selecting one item from a list. Add names line by line, spin the wheel, and let the animation choose a result. It works well for classrooms, games, team activities, family decisions, character selection, and any situation where you want a quick random picker.',
          'If you were searching for a wheel of names, random name wheel, name picker, or random name generator, this tool is designed for the same practical use case: turning a list into a visible random selection. Keep the list readable and make sure every entry represents one choice you genuinely want included.',
          'The wheel is intended for casual selection rather than regulated drawings or legally significant decisions. For contests or official uses, follow the rules that apply to your situation and consider documenting the selection process.'
        ]}
        links={[
          { to: '/name-generator', label: 'Generate random name ideas' },
          { to: '/baby-names', label: 'Explore baby names' },
          { to: '/name-meaning', label: 'Look up a name' },
        ]}
      />

      {/* About the Tool */}
      <section className="mt-12 bg-gradient-to-br from-green-50/50 to-teal-50/50 rounded-2xl p-6 sm:p-8 border border-green-100/50">
        <h2 className="text-2xl font-bold text-gray-900 mb-3" style={{ fontFamily: 'var(--font-display)' }}>About the Random Name Wheel</h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          The <strong>random name wheel</strong> (also called a <strong>name spinner</strong> or <strong>random name picker</strong>) is an interactive tool that randomly selects a name from your list with a fun, visual spinning animation. It's the digital equivalent of drawing names from a hat, but way more exciting!
        </p>
        <p className="text-gray-600 leading-relaxed mb-4">
          This tool is incredibly versatile and useful for <strong>teachers picking students</strong>, <strong>game masters selecting characters</strong>, <strong>event organizers doing giveaways</strong>, <strong>teams choosing who goes first</strong>, <strong>content creators picking comment winners</strong>, or anyone who needs to make a <strong>fair, random selection</strong> from a group of names. The visual spinning wheel adds an element of suspense and fun to what would otherwise be a boring random choice.
        </p>
        <p className="text-gray-600 leading-relaxed">
          Simply enter your list of names (one per line), click "Spin," and watch as the wheel rotates and lands on a random winner. You can <strong>remove the winner</strong> from the list for subsequent spins, <strong>shuffle the order</strong>, or <strong>clear and start fresh</strong>. The wheel supports any number of names (minimum 2) and works completely offline in your browser – no internet connection required after the page loads.
        </p>
      </section>

      {/* How to Use */}
      <section className="mt-10">
        <h2 className="text-2xl font-bold text-gray-900 mb-6" style={{ fontFamily: 'var(--font-display)' }}>How to Use the Name Wheel</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-white rounded-xl p-5 border border-gray-100 shadow-sm">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-green-500 to-teal-600 text-white font-bold flex items-center justify-center mb-3 text-sm">1</div>
            <h3 className="font-semibold text-gray-900 mb-1">Enter Names</h3>
            <p className="text-sm text-gray-600">Type or paste your list of names, one per line. Minimum 2 names required.</p>
          </div>
          <div className="bg-white rounded-xl p-5 border border-gray-100 shadow-sm">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-green-500 to-teal-600 text-white font-bold flex items-center justify-center mb-3 text-sm">2</div>
            <h3 className="font-semibold text-gray-900 mb-1">Spin the Wheel</h3>
            <p className="text-sm text-gray-600">Click the "Spin" button and watch the wheel rotate to a random selection.</p>
          </div>
          <div className="bg-white rounded-xl p-5 border border-gray-100 shadow-sm">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-green-500 to-teal-600 text-white font-bold flex items-center justify-center mb-3 text-sm">3</div>
            <h3 className="font-semibold text-gray-900 mb-1">See the Winner</h3>
            <p className="text-sm text-gray-600">The wheel stops on a random name. Copy, share, or remove the winner.</p>
          </div>
          <div className="bg-white rounded-xl p-5 border border-gray-100 shadow-sm">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-green-500 to-teal-600 text-white font-bold flex items-center justify-center mb-3 text-sm">4</div>
            <h3 className="font-semibold text-gray-900 mb-1">Spin Again</h3>
            <p className="text-sm text-gray-600">Remove the winner and spin again, or keep all names for another round.</p>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="mt-10 bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
        <h2 className="text-xl font-bold text-gray-900 mb-4">🎯 Perfect For</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div className="flex items-start gap-2"><span className="text-green-500 font-bold">✓</span><span className="text-sm text-gray-700"><strong>Classrooms:</strong> Randomly select students for questions, presentations, or group assignments</span></div>
          <div className="flex items-start gap-2"><span className="text-green-500 font-bold">✓</span><span className="text-sm text-gray-700"><strong>Giveaways:</strong> Pick winners from a list of entrants fairly and transparently</span></div>
          <div className="flex items-start gap-2"><span className="text-green-500 font-bold">✓</span><span className="text-sm text-gray-700"><strong>Games:</strong> Choose who goes first, assign teams, or pick game masters</span></div>
          <div className="flex items-start gap-2"><span className="text-green-500 font-bold">✓</span><span className="text-sm text-gray-700"><strong>Meetings:</strong> Select who presents, leads discussion, or takes notes</span></div>
          <div className="flex items-start gap-2"><span className="text-green-500 font-bold">✓</span><span className="text-sm text-gray-700"><strong>Content Creation:</strong> Pick comment winners, video topics, or challenge participants</span></div>
          <div className="flex items-start gap-2"><span className="text-green-500 font-bold">✓</span><span className="text-sm text-gray-700"><strong>Decision Making:</strong> Can't decide? Let the wheel choose for you!</span></div>
        </div>
      </section>

      {/* FAQ */}
      <section className="mt-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6" style={{ fontFamily: 'var(--font-display)' }}>Frequently Asked Questions</h2>
        <div className="space-y-3">
          <details className="bg-white rounded-xl border border-gray-100 p-5 group">
            <summary className="font-medium text-gray-900 cursor-pointer list-none flex items-center justify-between">
              Is the selection truly random?
              <span className="text-indigo-500 group-open:rotate-180 transition-transform">▼</span>
            </summary>
            <p className="mt-3 text-sm text-gray-600">Yes! The wheel uses JavaScript's Math.random() function to select a winner, then animates to that position. Every name has an equal chance of being selected, regardless of its position on the wheel.</p>
          </details>
          <details className="bg-white rounded-xl border border-gray-100 p-5 group">
            <summary className="font-medium text-gray-900 cursor-pointer list-none flex items-center justify-between">
              How many names can I add?
              <span className="text-indigo-500 group-open:rotate-180 transition-transform">▼</span>
            </summary>
            <p className="mt-3 text-sm text-gray-600">You can add as many names as you want! The wheel automatically adjusts to accommodate your list. For best visibility, we recommend keeping it under 20 names so each segment is clearly readable.</p>
          </details>
          <details className="bg-white rounded-xl border border-gray-100 p-5 group">
            <summary className="font-medium text-gray-900 cursor-pointer list-none flex items-center justify-between">
              Can I save my name list?
              <span className="text-indigo-500 group-open:rotate-180 transition-transform">▼</span>
            </summary>
            <p className="mt-3 text-sm text-gray-600">Currently, the name list is stored in the page session. If you refresh the page, you'll need to re-enter your names. We recommend copying your list before refreshing if you want to keep it.</p>
          </details>
          <details className="bg-white rounded-xl border border-gray-100 p-5 group">
            <summary className="font-medium text-gray-900 cursor-pointer list-none flex items-center justify-between">
              Does it work on mobile?
              <span className="text-indigo-500 group-open:rotate-180 transition-transform">▼</span>
            </summary>
            <p className="mt-3 text-sm text-gray-600">Absolutely! The name wheel is fully responsive and works perfectly on smartphones and tablets. The wheel automatically resizes to fit your screen.</p>
          </details>
          <details className="bg-white rounded-xl border border-gray-100 p-5 group">
            <summary className="font-medium text-gray-900 cursor-pointer list-none flex items-center justify-between">
              Can I use this for raffles or contests?
              <span className="text-indigo-500 group-open:rotate-180 transition-transform">▼</span>
            </summary>
            <p className="mt-3 text-sm text-gray-600">Yes! The wheel provides fair, transparent random selection. For official contests, you may want to screen-record the spin as proof of fairness. Always comply with local laws regarding contests and giveaways.</p>
          </details>
        </div>
      </section>

      {/* Related Keywords */}
      <section className="mt-10">
        <h2 className="text-lg font-semibold text-gray-900 mb-3">Related Searches</h2>
        <div className="flex flex-wrap gap-2">
          {['wheel of names', 'random name picker', 'name spinner wheel', 'random name generator wheel', 'spin the wheel names', 'random name selector', 'name wheel online', 'free name spinner', 'random picker wheel', 'name roulette', 'random name chooser'].map(k => (
            <span key={k} className="px-3 py-1 bg-gray-50 border border-gray-200 rounded-full text-xs text-gray-600">{k}</span>
          ))}
        </div>
      </section>
    </div>
  );
}
