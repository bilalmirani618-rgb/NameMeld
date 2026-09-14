import { ChevronDown } from 'lucide-react';
import { useState } from 'react';

interface FAQ {
  question: string;
  answer: string;
}

export function AboutSection({ title, description }: { title: string; description: string }) {
  return (
    <section className="mt-12 bg-gradient-to-br from-indigo-50/50 to-purple-50/50 rounded-2xl p-6 sm:p-8 border border-indigo-100/50">
      <h2 className="text-2xl font-bold text-gray-900 mb-3" style={{ fontFamily: 'var(--font-display)' }}>{title}</h2>
      <p className="text-gray-600 leading-relaxed">{description}</p>
    </section>
  );
}

export function HowToSection({ steps }: { steps: { title: string; desc: string }[] }) {
  return (
    <section className="mt-10">
      <h2 className="text-2xl font-bold text-gray-900 mb-6" style={{ fontFamily: 'var(--font-display)' }}>How to Use This Tool</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {steps.map((step, i) => (
          <div key={i} className="bg-white rounded-xl p-5 border border-gray-100 shadow-sm">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 text-white font-bold flex items-center justify-center mb-3 text-sm">
              {i + 1}
            </div>
            <h3 className="font-semibold text-gray-900 mb-1">{step.title}</h3>
            <p className="text-sm text-gray-600">{step.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export function FAQSection({ faqs }: { faqs: FAQ[] }) {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="mt-12">
      <h2 className="text-2xl font-bold text-gray-900 mb-6" style={{ fontFamily: 'var(--font-display)' }}>Frequently Asked Questions</h2>
      <div className="space-y-3">
        {faqs.map((faq, i) => (
          <div key={i} className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden">
            <button
              onClick={() => setOpen(open === i ? null : i)}
              className="w-full flex items-center justify-between p-5 text-left hover:bg-gray-50 transition-colors"
              aria-expanded={open === i}
            >
              <span className="font-medium text-gray-900 pr-4">{faq.question}</span>
              <ChevronDown size={20} className={`text-gray-400 flex-shrink-0 transition-transform ${open === i ? 'rotate-180' : ''}`} />
            </button>
            {open === i && (
              <div className="px-5 pb-5 text-gray-600 text-sm leading-relaxed border-t border-gray-100 pt-4 animate-fade-in">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

export function KeywordsSection({ keywords }: { keywords: string[] }) {
  return (
    <section className="mt-10">
      <h2 className="text-lg font-semibold text-gray-900 mb-3">Related Searches</h2>
      <div className="flex flex-wrap gap-2">
        {keywords.map(k => (
          <span key={k} className="px-3 py-1 bg-gray-50 border border-gray-200 rounded-full text-xs text-gray-600">
            {k}
          </span>
        ))}
      </div>
    </section>
  );
}

export function TipsSection({ tips }: { tips: string[] }) {
  return (
    <section className="mt-10 bg-amber-50/50 rounded-2xl p-6 border border-amber-100/50">
      <h2 className="text-xl font-bold text-gray-900 mb-4">💡 Pro Tips</h2>
      <ul className="space-y-2">
        {tips.map((tip, i) => (
          <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
            <span className="text-amber-500 font-bold mt-0.5">✓</span>
            <span>{tip}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
