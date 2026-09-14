import { Link } from 'react-router-dom';

import SEO from '../components/SEO';
export function About() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-8 sm:py-12">
      <SEO title="About NameMeld: Name Tools, Meanings & Name Discovery" description="Learn how NameMeld approaches name meanings, generators, baby names, Japanese name conversion, name combinations and popularity information." path="/about" breadcrumbs={[{name:'Home',path:'/'},{name:'About',path:'/about'}]} />
      <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6" style={{ fontFamily: 'var(--font-display)' }}>About NameMeld</h1>
      
      <div className="prose prose-lg max-w-none">
        <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-2xl p-8 mb-8 border border-indigo-100">
          <p className="text-xl text-gray-700 leading-relaxed">
            NameMeld is your all-in-one platform for exploring the world of names. Whether you're searching for the meaning behind a name, generating creative options for a baby or brand, converting names to different scripts, or simply having fun with a random name wheel – NameMeld brings it all together in one place.
          </p>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">What We Offer</h2>
        <ul className="space-y-3 text-gray-600">
          <li className="flex items-start gap-2"><span className="text-indigo-500 font-bold">•</span> <span><strong>Name Meanings:</strong> Discover the origin, meaning, pronunciation, and cultural significance of names from around the world.</span></li>
          <li className="flex items-start gap-2"><span className="text-indigo-500 font-bold">•</span> <span><strong>Name Generator:</strong> Generate personal names filtered by gender, origin, style, and meaning.</span></li>
          <li className="flex items-start gap-2"><span className="text-indigo-500 font-bold">•</span> <span><strong>Japanese Converter:</strong> Convert any name into Japanese Katakana script with romanized pronunciation.</span></li>
          <li className="flex items-start gap-2"><span className="text-indigo-500 font-bold">•</span> <span><strong>Name Wheel:</strong> An interactive spinning wheel for random name selection – perfect for games and decisions.</span></li>
          <li className="flex items-start gap-2"><span className="text-indigo-500 font-bold">•</span> <span><strong>Brand Name Generator:</strong> Create unique, memorable names for businesses, apps, and projects.</span></li>
          <li className="flex items-start gap-2"><span className="text-indigo-500 font-bold">•</span> <span><strong>Name Combiner:</strong> Combine two names into creative new combinations.</span></li>
          <li className="flex items-start gap-2"><span className="text-indigo-500 font-bold">•</span> <span><strong>Baby Name Generator:</strong> Find the perfect name for your little one based on your preferences.</span></li>
          <li className="flex items-start gap-2"><span className="text-indigo-500 font-bold">•</span> <span><strong>Name Popularity:</strong> Explore available trend and popularity information for names.</span></li>
        </ul>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Our Approach</h2>
        <p className="text-gray-600 mb-4">
          NameMeld is built on the belief that names matter. They carry history, culture, identity, and meaning. Our goal is to make name exploration accessible, enjoyable, and informative for everyone.
        </p>
        <p className="text-gray-600 mb-4">
          We draw from a curated database of names representing diverse cultures and origins. While we strive for accuracy in name meanings and origins, we encourage users to verify important information with authoritative sources, especially for academic or official purposes.
        </p>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Important Notes</h2>
        <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 text-sm text-amber-800">
          <ul className="space-y-2">
            <li>• Name meanings and origins are provided for informational purposes and may vary across sources.</li>
            <li>• The Japanese Name Converter provides phonetic approximations and is not an official translation.</li>
            <li>• Brand name suggestions are for inspiration only. Always verify trademark availability.</li>
            <li>• Name combinations are creative exercises for entertainment purposes.</li>
            <li>• Popularity data, where available, is illustrative and may not reflect exact official statistics.</li>
          </ul>
        </div>

        <div className="mt-8 text-center">
          <Link to="/" className="inline-flex items-center gap-2 px-6 py-3 bg-indigo-600 text-white font-semibold rounded-xl hover:bg-indigo-700 transition-colors">
            Start Exploring
          </Link>
        </div>
      </div>
    </div>
  );
}

export function Privacy() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-8 sm:py-12">
      <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6" style={{ fontFamily: 'var(--font-display)' }}>Privacy Policy</h1>
      <p className="text-sm text-gray-500 mb-8">Last updated: January 2026</p>

      <div className="space-y-6 text-gray-600">
        <section>
          <h2 className="text-xl font-semibold text-gray-900 mb-3">Overview</h2>
          <p>NameMeld is committed to protecting your privacy. This policy explains what information we collect and how we use it.</p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-gray-900 mb-3">No Account Required</h2>
          <p>All core tools on NameMeld can be used without creating an account. We do not require registration, email addresses, or personal information to access our name tools.</p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-gray-900 mb-3">Local Storage</h2>
          <p>Your favorite names are stored locally in your browser using localStorage. This data never leaves your device and is not transmitted to any server. Clearing your browser data will remove your saved favorites.</p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-gray-900 mb-3">Third-Party Services</h2>
          <p>Currently, NameMeld does not use third-party analytics or tracking services. In the future, we may introduce:</p>
          <ul className="list-disc list-inside mt-2 space-y-1">
            <li>Analytics services to understand how visitors use the site</li>
            <li>Advertising networks to support the platform</li>
          </ul>
          <p className="mt-2">When such services are enabled, we will update this privacy policy accordingly. We encourage users to review the policy periodically.</p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-gray-900 mb-3">Cookies</h2>
          <p>NameMeld may use essential cookies for site functionality. If advertising or analytics services are added in the future, those services may set their own cookies. You can control cookie settings through your browser preferences.</p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-gray-900 mb-3">Children's Privacy</h2>
          <p>NameMeld is a general-audience website. We do not knowingly collect personal information from children under 13.</p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-gray-900 mb-3">Changes to This Policy</h2>
          <p>We may update this privacy policy from time to time. Changes will be posted on this page with an updated revision date.</p>
        </section>
      </div>
    </div>
  );
}

export function Terms() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-8 sm:py-12">
      <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6" style={{ fontFamily: 'var(--font-display)' }}>Terms of Service</h1>
      <p className="text-sm text-gray-500 mb-8">Last updated: January 2026</p>

      <div className="space-y-6 text-gray-600">
        <section>
          <h2 className="text-xl font-semibold text-gray-900 mb-3">Acceptance of Terms</h2>
          <p>By accessing and using NameMeld, you agree to be bound by these terms of service. If you do not agree with any part of these terms, please do not use the website.</p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-gray-900 mb-3">Use of the Service</h2>
          <p>NameMeld provides name-related tools for informational and entertainment purposes. You may use the tools for personal, non-commercial purposes. The information provided should not be considered as professional, legal, or academic advice.</p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-gray-900 mb-3">Accuracy of Information</h2>
          <p>While we strive to provide accurate information about name meanings, origins, and pronunciations, we cannot guarantee the completeness or accuracy of all data. Name meanings may vary across cultures, sources, and time periods. Users should verify important information with authoritative sources.</p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-gray-900 mb-3">Generated Content</h2>
          <p>Names generated by our tools are suggestions for inspiration. NameMeld does not claim ownership of generated names. Users are responsible for:</p>
          <ul className="list-disc list-inside mt-2 space-y-1">
            <li>Verifying trademark availability for brand names</li>
            <li>Checking domain availability independently</li>
            <li>Ensuring generated names don't infringe on existing rights</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-gray-900 mb-3">Limitations</h2>
          <p>The Japanese Name Converter provides phonetic approximations only. These are not official Japanese names or translations. The Name Combiner produces creative combinations for entertainment purposes only.</p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-gray-900 mb-3">Intellectual Property</h2>
          <p>The NameMeld website, including its design, code, and original content, is protected by copyright. You may not reproduce, distribute, or create derivative works without permission.</p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-gray-900 mb-3">Limitation of Liability</h2>
          <p>NameMeld is provided "as is" without warranties of any kind. We shall not be liable for any damages arising from the use of this website or its tools.</p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-gray-900 mb-3">Changes to Terms</h2>
          <p>We reserve the right to modify these terms at any time. Continued use of the website after changes constitutes acceptance of the new terms.</p>
        </section>
      </div>
    </div>
  );
}
