import { Link } from 'react-router-dom';

type LinkItem = { to: string; label: string };

type Props = {
  title: string;
  paragraphs: string[];
  links?: LinkItem[];
};

export default function ToolSEOContent({ title, paragraphs, links = [] }: Props) {
  return (
    <section className="mt-12 rounded-2xl border border-indigo-100 bg-white p-6 sm:p-8 shadow-sm">
      <h2 className="text-2xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'var(--font-display)' }}>{title}</h2>
      <div className="space-y-4 text-gray-600 leading-relaxed">
        {paragraphs.map((paragraph, index) => <p key={index}>{paragraph}</p>)}
      </div>
      {links.length > 0 && (
        <div className="mt-6 pt-5 border-t border-gray-100">
          <h3 className="font-semibold text-gray-900 mb-3">Continue exploring</h3>
          <div className="flex flex-wrap gap-2">
            {links.map(link => (
              <Link key={link.to} to={link.to} className="px-3 py-2 rounded-lg bg-indigo-50 text-indigo-700 text-sm font-medium hover:bg-indigo-100 transition-colors">
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </section>
  );
}
