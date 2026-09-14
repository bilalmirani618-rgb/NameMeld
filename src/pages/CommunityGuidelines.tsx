import { Link } from 'react-router-dom';

import SEO from '../components/SEO';
export function CommunityGuidelines() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-8 sm:py-12">
      <SEO title="NameMeld Community Guidelines" description="Read NameMeld community guidelines covering respectful naming discussions, cultural sensitivity, generated content and reporting issues." path="/community-guidelines" breadcrumbs={[{name:'Home',path:'/'},{name:'Community Guidelines',path:'/community-guidelines'}]} />
      <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6" style={{ fontFamily: 'var(--font-display)' }}>Community Guidelines</h1>
      <p className="text-sm text-gray-500 mb-8">Last updated: January 2026</p>

      <div className="prose prose-lg max-w-none">
        <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8 mb-8 border border-green-100">
          <p className="text-lg text-gray-700 leading-relaxed">
            NameMeld is committed to creating a respectful, inclusive, and welcoming environment for everyone. These guidelines help ensure that our platform remains a positive space for exploring names from all cultures and backgrounds.
          </p>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Our Values</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
          <div className="bg-white rounded-xl p-5 border border-gray-100">
            <h3 className="font-semibold text-gray-900 mb-2">🌍 Respect for All Cultures</h3>
            <p className="text-sm text-gray-600">We celebrate the diversity of names from every culture, language, and tradition. All names deserve respect and accurate representation.</p>
          </div>
          <div className="bg-white rounded-xl p-5 border border-gray-100">
            <h3 className="font-semibold text-gray-900 mb-2">🤝 Inclusivity</h3>
            <p className="text-sm text-gray-600">Our platform welcomes people of all backgrounds, identities, and beliefs. We strive to be accessible and welcoming to everyone.</p>
          </div>
          <div className="bg-white rounded-xl p-5 border border-gray-100">
            <h3 className="font-semibold text-gray-900 mb-2">📚 Accuracy & Integrity</h3>
            <p className="text-sm text-gray-600">We prioritize accuracy in name meanings and origins. When information is unavailable or uncertain, we clearly indicate this rather than fabricating data.</p>
          </div>
          <div className="bg-white rounded-xl p-5 border border-gray-100">
            <h3 className="font-semibold text-gray-900 mb-2">💡 Education & Curiosity</h3>
            <p className="text-sm text-gray-600">We encourage learning about different naming traditions and cultures with openness, curiosity, and respect.</p>
          </div>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Expected Behavior</h2>
        <ul className="space-y-3 text-gray-600 mb-6">
          <li className="flex items-start gap-2"><span className="text-green-500 font-bold mt-1">✓</span> <span><strong>Be respectful:</strong> Treat all users, cultures, and naming traditions with dignity and respect.</span></li>
          <li className="flex items-start gap-2"><span className="text-green-500 font-bold mt-1">✓</span> <span><strong>Embrace diversity:</strong> Appreciate the rich variety of names from different cultures, languages, and backgrounds.</span></li>
          <li className="flex items-start gap-2"><span className="text-green-500 font-bold mt-1">✓</span> <span><strong>Share accurately:</strong> When sharing name information, ensure it's accurate and properly sourced.</span></li>
          <li className="flex items-start gap-2"><span className="text-green-500 font-bold mt-1">✓</span> <span><strong>Ask questions:</strong> Curiosity is welcome! Ask questions about naming traditions respectfully.</span></li>
          <li className="flex items-start gap-2"><span className="text-green-500 font-bold mt-1">✓</span> <span><strong>Give credit:</strong> When using information from NameMeld, acknowledge the source appropriately.</span></li>
          <li className="flex items-start gap-2"><span className="text-green-500 font-bold mt-1">✓</span> <span><strong>Report issues:</strong> If you encounter inaccurate information or inappropriate content, please report it to us.</span></li>
        </ul>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Unacceptable Behavior</h2>
        <div className="bg-red-50 border border-red-200 rounded-xl p-6 mb-6">
          <p className="text-sm text-red-800 mb-3">The following behaviors are not tolerated on NameMeld:</p>
          <ul className="space-y-2 text-sm text-red-800">
            <li>• <strong>Discrimination or hate speech</strong> based on race, ethnicity, religion, gender, sexual orientation, disability, or any other characteristic</li>
            <li>• <strong>Cultural appropriation or mockery</strong> of naming traditions from any culture</li>
            <li>• <strong>Spreading misinformation</strong> about name meanings, origins, or cultural significance</li>
            <li>• <strong>Harassment or bullying</strong> of other users or communities</li>
            <li>• <strong>Commercial spam</strong> or unauthorized advertising</li>
            <li>• <strong>Attempting to manipulate</strong> name data or platform functionality</li>
            <li>• <strong>Using the platform</strong> for illegal activities or to promote illegal content</li>
          </ul>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Cultural Sensitivity</h2>
        <p className="text-gray-600 mb-4">
          Names carry deep cultural, religious, and personal significance. When exploring names from cultures different from your own:
        </p>
        <ul className="space-y-2 text-gray-600 mb-6">
          <li>• Approach with humility and willingness to learn</li>
          <li>• Recognize that you may not fully understand all cultural contexts</li>
          <li>• Avoid making assumptions or generalizations about entire cultures</li>
          <li>• Respect that some names have sacred or deeply personal meanings</li>
          <li>• Understand that naming traditions vary even within the same culture</li>
          <li>• Be open to correction and willing to learn from others</li>
        </ul>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Using Generated Content</h2>
        <p className="text-gray-600 mb-4">
          When using names generated by our tools:
        </p>
        <ul className="space-y-2 text-gray-600 mb-6">
          <li>• <strong>Baby names:</strong> Discuss choices with family and consider cultural significance carefully</li>
          <li>• <strong>Brand names:</strong> Always verify trademark availability and domain registration independently</li>
          <li>• <strong>Character names:</strong> Ensure names are appropriate for your context and audience</li>
          <li>• <strong>Japanese conversions:</strong> Remember these are phonetic approximations, not official translations</li>
          <li>• <strong>Combinations:</strong> Use for entertainment and inspiration, not official purposes</li>
        </ul>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Reporting Issues</h2>
        <p className="text-gray-600 mb-4">
          If you encounter content or behavior that violates these guidelines:
        </p>
        <ol className="list-decimal list-inside space-y-2 text-gray-600 mb-6">
          <li>Document the issue (screenshots, URLs, dates)</li>
          <li>Contact us with a clear description of the problem</li>
          <li>Allow us time to investigate and respond</li>
          <li>Trust that we take all reports seriously and will address them appropriately</li>
        </ol>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Enforcement</h2>
        <p className="text-gray-600 mb-4">
          Violations of these guidelines may result in:
        </p>
        <ul className="space-y-2 text-gray-600 mb-6">
          <li>Warning and request to correct behavior</li>
          <li>Temporary restriction from certain features</li>
          <li>Permanent ban from the platform</li>
          <li>Legal action in cases of serious violations</li>
        </ul>
        <p className="text-gray-600">
          We reserve the right to take any action we deem appropriate to maintain a safe and respectful community.
        </p>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Changes to These Guidelines</h2>
        <p className="text-gray-600">
          We may update these community guidelines from time to time. Changes will be posted on this page with an updated revision date. We encourage users to review the guidelines periodically.
        </p>

        <div className="mt-8 text-center">
          <Link to="/" className="inline-flex items-center gap-2 px-6 py-3 bg-indigo-600 text-white font-semibold rounded-xl hover:bg-indigo-700 transition-colors">
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
