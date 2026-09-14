import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

export function EnhancedPrivacy() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-8 sm:py-12">
      <SEO title="Privacy Policy | NameMeld" description="Read the NameMeld Privacy Policy covering local favorites, data practices, cookies and third-party services." path="/privacy" breadcrumbs={[{name:'Home',path:'/'},{name:'Privacy Policy',path:'/privacy'}]} />
      <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6" style={{ fontFamily: 'var(--font-display)' }}>Privacy Policy</h1>
      <p className="text-sm text-gray-500 mb-8">Last updated: January 2026 · Effective date: January 1, 2026</p>

      <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 mb-8 border border-blue-100">
        <p className="text-lg text-gray-700 leading-relaxed">
          At NameMeld, your privacy is fundamental to how we operate. This Privacy Policy explains what information we collect, how we use it, and your rights regarding your data. We're committed to transparency and protecting your personal information.
        </p>
      </div>

      <nav className="bg-white rounded-xl p-5 border border-gray-100 mb-8">
        <h2 className="font-semibold text-gray-900 mb-3">Quick Navigation</h2>
        <div className="grid grid-cols-2 gap-2 text-sm">
          <a href="#overview" className="text-indigo-600 hover:underline">Overview</a>
          <a href="#data-collect" className="text-indigo-600 hover:underline">Data We Collect</a>
          <a href="#local-storage" className="text-indigo-600 hover:underline">Local Storage</a>
          <a href="#third-party" className="text-indigo-600 hover:underline">Third-Party Services</a>
          <a href="#cookies" className="text-indigo-600 hover:underline">Cookies</a>
          <a href="#children" className="text-indigo-600 hover:underline">Children's Privacy</a>
          <a href="#your-rights" className="text-indigo-600 hover:underline">Your Rights</a>
          <a href="#contact" className="text-indigo-600 hover:underline">Contact Us</a>
        </div>
      </nav>

      <div className="space-y-8 text-gray-600">
        <section id="overview">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Overview</h2>
          <p className="mb-3">
            NameMeld ("we," "our," or "us") operates the NameMeld website and related services. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website.
          </p>
          <p className="mb-3">
            <strong>Key principle:</strong> We collect minimal data. Most of our tools work entirely in your browser without sending any information to our servers. Your favorite names are stored locally on your device and never transmitted to us.
          </p>
          <p>
            Please read this privacy policy carefully. By using NameMeld, you agree to the collection and use of information in accordance with this policy.
          </p>
        </section>

        <section id="data-collect">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Information We Collect</h2>
          
          <h3 className="text-lg font-semibold text-gray-900 mt-6 mb-2">2.1 Information You Provide</h3>
          <p className="mb-3">We collect information you voluntarily provide when using our tools:</p>
          <ul className="list-disc list-inside space-y-1 mb-4">
            <li>Names you search for or enter into our tools</li>
            <li>Names you save to your favorites list</li>
            <li>Any feedback or communications you send us</li>
          </ul>

          <h3 className="text-lg font-semibold text-gray-900 mt-6 mb-2">2.2 Automatically Collected Information</h3>
          <p className="mb-3">When you access NameMeld, we may automatically collect:</p>
          <ul className="list-disc list-inside space-y-1 mb-4">
            <li>Browser type and version</li>
            <li>Device type and operating system</li>
            <li>Pages visited and time spent on pages</li>
            <li>Referring website addresses</li>
            <li>General geographic location (country/region level)</li>
          </ul>

          <h3 className="text-lg font-semibold text-gray-900 mt-6 mb-2">2.3 What We Don't Collect</h3>
          <div className="bg-green-50 border border-green-200 rounded-xl p-4">
            <p className="text-sm text-green-800 mb-2">We do <strong>NOT</strong> collect:</p>
            <ul className="text-sm text-green-800 space-y-1">
              <li>• Personal identification information (name, email, phone) unless you voluntarily provide it</li>
              <li>• Payment information (we don't process payments)</li>
              <li>• Account credentials (no account required for core features)</li>
              <li>• Precise geolocation data</li>
              <li>• Sensitive personal data</li>
            </ul>
          </div>
        </section>

        <section id="local-storage">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Local Storage & Browser Data</h2>
          <p className="mb-3">
            NameMeld uses your browser's <strong>localStorage</strong> to save your preferences and favorite names. This data:
          </p>
          <ul className="list-disc list-inside space-y-1 mb-4">
            <li>Remains entirely on your device</li>
            <li>Is never transmitted to our servers</li>
            <li>Cannot be accessed by other websites</li>
            <li>Is deleted when you clear your browser data</li>
            <li>Is specific to your browser and device</li>
          </ul>
          <p>
            You have complete control over this data. Clearing your browser's local storage will remove all saved favorites and preferences.
          </p>
        </section>

        <section id="third-party">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Third-Party Services</h2>
          <p className="mb-3">
            Currently, NameMeld operates without third-party analytics, advertising, or tracking services. However, we may introduce the following in the future:
          </p>

          <h3 className="text-lg font-semibold text-gray-900 mt-6 mb-2">4.1 Analytics Services (Future)</h3>
          <p className="mb-3">
            We may implement privacy-respecting analytics to understand how visitors use our site. This would help us improve user experience and content. Any analytics implementation will:
          </p>
          <ul className="list-disc list-inside space-y-1 mb-4">
            <li>Use privacy-focused analytics providers</li>
            <li>Not track individual users across sessions</li>
            <li>Not collect personally identifiable information</li>
            <li>Be clearly disclosed in this policy</li>
          </ul>

          <h3 className="text-lg font-semibold text-gray-900 mt-6 mb-2">4.2 Advertising (Future)</h3>
          <p className="mb-3">
            We may introduce advertising to support the platform. If implemented:
          </p>
          <ul className="list-disc list-inside space-y-1 mb-4">
            <li>Ads will be clearly labeled as advertising</li>
            <li>We'll work with reputable advertising networks</li>
            <li>Ads will not interfere with core functionality</li>
            <li>We'll provide options to limit ad personalization</li>
          </ul>

          <h3 className="text-lg font-semibold text-gray-900 mt-6 mb-2">4.3 External Links</h3>
          <p>
            NameMeld may contain links to external websites. We are not responsible for the privacy practices of other sites. We encourage you to read the privacy policies of any website you visit.
          </p>
        </section>

        <section id="cookies">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Cookies & Tracking Technologies</h2>
          <p className="mb-3">
            <strong>Essential cookies:</strong> We may use essential cookies necessary for the website to function properly. These cookies:
          </p>
          <ul className="list-disc list-inside space-y-1 mb-4">
            <li>Don't track your browsing activity</li>
            <li>Don't collect personal information</li>
            <li>Are necessary for basic site functionality</li>
            <li>Cannot be disabled without affecting site operation</li>
          </ul>
          <p className="mb-3">
            <strong>Future cookies:</strong> If we add analytics or advertising, those services may set their own cookies. We'll update this policy and provide appropriate notices before implementing such cookies.
          </p>
          <p>
            You can control cookies through your browser settings. Most browsers allow you to refuse or accept cookies, delete existing cookies, and set preferences for certain websites.
          </p>
        </section>

        <section id="children">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Children's Privacy</h2>
          <p className="mb-3">
            NameMeld is a general-audience website. We do not knowingly collect personal information from children under 13 years of age. If you are a parent or guardian and believe your child has provided us with personal information, please contact us so we can take appropriate action.
          </p>
          <p>
            Parents are encouraged to supervise their children's internet usage and to help enforce our Privacy Policy by instructing their children never to provide personal information through our website without permission.
          </p>
        </section>

        <section id="your-rights">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Your Rights</h2>
          <p className="mb-3">Depending on your location, you may have the following rights regarding your personal data:</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4">
            <div className="bg-white rounded-lg p-4 border border-gray-100">
              <h4 className="font-semibold text-gray-900 text-sm mb-1">Right to Access</h4>
              <p className="text-xs text-gray-600">Request a copy of your personal data</p>
            </div>
            <div className="bg-white rounded-lg p-4 border border-gray-100">
              <h4 className="font-semibold text-gray-900 text-sm mb-1">Right to Rectification</h4>
              <p className="text-xs text-gray-600">Request correction of inaccurate data</p>
            </div>
            <div className="bg-white rounded-lg p-4 border border-gray-100">
              <h4 className="font-semibold text-gray-900 text-sm mb-1">Right to Erasure</h4>
              <p className="text-xs text-gray-600">Request deletion of your data</p>
            </div>
            <div className="bg-white rounded-lg p-4 border border-gray-100">
              <h4 className="font-semibold text-gray-900 text-sm mb-1">Right to Restrict</h4>
              <p className="text-xs text-gray-600">Request limitation of data processing</p>
            </div>
            <div className="bg-white rounded-lg p-4 border border-gray-100">
              <h4 className="font-semibold text-gray-900 text-sm mb-1">Right to Portability</h4>
              <p className="text-xs text-gray-600">Request transfer of your data</p>
            </div>
            <div className="bg-white rounded-lg p-4 border border-gray-100">
              <h4 className="font-semibold text-gray-900 text-sm mb-1">Right to Object</h4>
              <p className="text-xs text-gray-600">Object to processing of your data</p>
            </div>
          </div>
          <p>
            To exercise any of these rights, please contact us using the information provided below. We will respond to your request within 30 days.
          </p>
        </section>

        <section id="data-security">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Data Security</h2>
          <p className="mb-3">
            We implement appropriate technical and organizational measures to protect your information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the Internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
          </p>
          <p>
            Since most of your data is stored locally on your device, the security of that data depends on your device's security measures. We recommend keeping your browser and operating system updated.
          </p>
        </section>

        <section id="international">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">9. International Users</h2>
          <p className="mb-3">
            NameMeld is accessible worldwide. If you are accessing our site from outside the country where our servers are located, please be aware that your information may be transferred to, stored, and processed in that country.
          </p>
          <p>
            By using NameMeld, you consent to the transfer of your information to countries outside your jurisdiction, some of which may have different data protection laws than your country.
          </p>
        </section>

        <section id="changes">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Changes to This Policy</h2>
          <p className="mb-3">
            We may update this Privacy Policy from time to time to reflect changes in our practices, technology, legal requirements, or other factors. We will notify you of any material changes by:
          </p>
          <ul className="list-disc list-inside space-y-1 mb-4">
            <li>Posting the new policy on this page</li>
            <li>Updating the "Last updated" date</li>
            <li>Providing prominent notice on our website</li>
          </ul>
          <p>
            We encourage you to review this Privacy Policy periodically to stay informed about how we protect your information.
          </p>
        </section>

        <section id="contact">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">11. Contact Us</h2>
          <p className="mb-3">
            If you have questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact us:
          </p>
          <div className="bg-gray-50 rounded-xl p-5 border border-gray-200">
            <p className="font-semibold text-gray-900 mb-2">NameMeld Privacy Team</p>
            <p className="text-sm text-gray-600">Email: privacy@namemeld.com</p>
            <p className="text-sm text-gray-600">We aim to respond to all inquiries within 30 days.</p>
          </div>
        </section>

        <div className="mt-12 text-center pt-8 border-t border-gray-200">
          <p className="text-sm text-gray-500 mb-4">
            By using NameMeld, you acknowledge that you have read and understood this Privacy Policy.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link to="/terms" className="text-sm text-indigo-600 hover:underline">Terms of Service</Link>
            <span className="text-gray-300">•</span>
            <Link to="/community-guidelines" className="text-sm text-indigo-600 hover:underline">Community Guidelines</Link>
            <span className="text-gray-300">•</span>
            <Link to="/" className="text-sm text-indigo-600 hover:underline">Back to Home</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export function EnhancedTerms() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-8 sm:py-12">
      <SEO title="Terms of Service | NameMeld" description="Read the NameMeld Terms of Service covering name tools, generated content, accuracy, limitations and responsible use." path="/terms" breadcrumbs={[{name:'Home',path:'/'},{name:'Terms of Service',path:'/terms'}]} />
      <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6" style={{ fontFamily: 'var(--font-display)' }}>Terms of Service</h1>
      <p className="text-sm text-gray-500 mb-8">Last updated: January 2026 · Effective date: January 1, 2026</p>

      <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-8 mb-8 border border-purple-100">
        <p className="text-lg text-gray-700 leading-relaxed">
          Welcome to NameMeld. These Terms of Service ("Terms") govern your access to and use of the NameMeld website, tools, and services. By accessing or using NameMeld, you agree to be bound by these Terms.
        </p>
      </div>

      <nav className="bg-white rounded-xl p-5 border border-gray-100 mb-8">
        <h2 className="font-semibold text-gray-900 mb-3">Quick Navigation</h2>
        <div className="grid grid-cols-2 gap-2 text-sm">
          <a href="#acceptance" className="text-indigo-600 hover:underline">Acceptance of Terms</a>
          <a href="#eligibility" className="text-indigo-600 hover:underline">Eligibility</a>
          <a href="#use" className="text-indigo-600 hover:underline">Use of Service</a>
          <a href="#content" className="text-indigo-600 hover:underline">User Content</a>
          <a href="#ip" className="text-indigo-600 hover:underline">Intellectual Property</a>
          <a href="#disclaimer" className="text-indigo-600 hover:underline">Disclaimers</a>
          <a href="#liability" className="text-indigo-600 hover:underline">Limitation of Liability</a>
          <a href="#termination" className="text-indigo-600 hover:underline">Termination</a>
        </div>
      </nav>

      <div className="space-y-8 text-gray-600">
        <section id="acceptance">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Acceptance of Terms</h2>
          <p className="mb-3">
            By accessing, browsing, or using NameMeld, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service and our Privacy Policy. If you do not agree to these Terms, you must not access or use NameMeld.
          </p>
          <p>
            These Terms constitute a legally binding agreement between you ("User," "you," or "your") and NameMeld ("we," "us," or "our").
          </p>
        </section>

        <section id="eligibility">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Eligibility</h2>
          <p className="mb-3">
            NameMeld is available to users of all ages. However, if you are under 13 years of age, you must use NameMeld with parental or guardian supervision. By using NameMeld, you represent and warrant that:
          </p>
          <ul className="list-disc list-inside space-y-1 mb-4">
            <li>You have the legal capacity to enter into these Terms</li>
            <li>You will comply with all applicable laws and regulations</li>
            <li>You will not use NameMeld for any illegal or unauthorized purpose</li>
          </ul>
        </section>

        <section id="use">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Use of the Service</h2>
          
          <h3 className="text-lg font-semibold text-gray-900 mt-6 mb-2">3.1 Permitted Use</h3>
          <p className="mb-3">You may use NameMeld for:</p>
          <ul className="list-disc list-inside space-y-1 mb-4">
            <li>Personal, non-commercial exploration of name meanings and origins</li>
            <li>Generating name ideas for babies, characters, brands, or projects</li>
            <li>Educational purposes and cultural learning</li>
            <li>Entertainment and creative projects</li>
          </ul>

          <h3 className="text-lg font-semibold text-gray-900 mt-6 mb-2">3.2 Prohibited Use</h3>
          <p className="mb-3">You agree NOT to:</p>
          <ul className="list-disc list-inside space-y-1 mb-4">
            <li>Use NameMeld for any illegal purpose or in violation of any laws</li>
            <li>Attempt to gain unauthorized access to our systems or other users' data</li>
            <li>Use automated systems (bots, scrapers) to access or collect data from NameMeld</li>
            <li>Interfere with or disrupt the service or servers</li>
            <li>Transmit viruses, malware, or other harmful code</li>
            <li>Impersonate any person or entity or misrepresent your affiliation</li>
            <li>Use NameMeld to harass, abuse, or harm others</li>
            <li>Scrape, copy, or distribute our content without permission</li>
            <li>Attempt to reverse engineer or decompile our software</li>
          </ul>

          <h3 className="text-lg font-semibold text-gray-900 mt-6 mb-2">3.3 Account & Access</h3>
          <p>
            NameMeld does not require user accounts for core functionality. All tools are accessible without registration. We reserve the right to restrict access if we detect abuse or violation of these Terms.
          </p>
        </section>

        <section id="content">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Content & Accuracy</h2>
          
          <h3 className="text-lg font-semibold text-gray-900 mt-6 mb-2">4.1 Name Database</h3>
          <p className="mb-3">
            Our name database contains information about name meanings, origins, pronunciations, and cultural significance. While we strive for accuracy:
          </p>
          <ul className="list-disc list-inside space-y-1 mb-4">
            <li>Name meanings can vary across cultures, time periods, and sources</li>
            <li>We provide the most widely accepted meanings but cannot guarantee absolute accuracy</li>
            <li>Users should verify important information with authoritative sources</li>
            <li>We are not responsible for decisions made based on our name information</li>
          </ul>

          <h3 className="text-lg font-semibold text-gray-900 mt-6 mb-2">4.2 Generated Names</h3>
          <p className="mb-3">
            Names generated by our tools (name generator, brand name generator, name combiner) are suggestions for inspiration. You are solely responsible for:
          </p>
          <ul className="list-disc list-inside space-y-1 mb-4">
            <li>Verifying trademark availability before using brand names commercially</li>
            <li>Checking domain availability independently</li>
            <li>Ensuring generated names don't infringe on existing rights</li>
            <li>Assessing cultural appropriateness for your intended use</li>
          </ul>

          <h3 className="text-lg font-semibold text-gray-900 mt-6 mb-2">4.3 Japanese Name Converter</h3>
          <p className="mb-3">
            The Japanese Name Converter provides phonetic approximations only. These conversions:
          </p>
          <ul className="list-disc list-inside space-y-1 mb-4">
            <li>Are NOT official Japanese names or translations</li>
            <li>May not reflect traditional or formal Japanese name readings</li>
            <li>Should not be used for official documents without professional verification</li>
            <li>Are provided for entertainment and educational purposes</li>
          </ul>

          <h3 className="text-lg font-semibold text-gray-900 mt-6 mb-2">4.4 Popularity Data</h3>
          <p>
            Where popularity data is provided, it may be illustrative or approximate rather than exact official statistics. We clearly indicate when data is unavailable rather than fabricating numbers. For official statistics, consult government sources directly.
          </p>
        </section>

        <section id="ip">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Intellectual Property</h2>
          
          <h3 className="text-lg font-semibold text-gray-900 mt-6 mb-2">5.1 Our Content</h3>
          <p className="mb-3">
            The NameMeld website, including its design, layout, code, graphics, and original content, is protected by copyright and other intellectual property laws. You may not:
          </p>
          <ul className="list-disc list-inside space-y-1 mb-4">
            <li>Reproduce, distribute, or create derivative works without permission</li>
            <li>Remove any copyright, trademark, or proprietary notices</li>
            <li>Use our branding, logos, or trademarks without authorization</li>
          </ul>

          <h3 className="text-lg font-semibold text-gray-900 mt-6 mb-2">5.2 Generated Content</h3>
          <p>
            Names generated by our tools are provided as-is for your use. NameMeld does not claim ownership of names you generate using our tools. However, we make no guarantees about the availability, uniqueness, or legal status of generated names.
          </p>

          <h3 className="text-lg font-semibold text-gray-900 mt-6 mb-2">5.3 Feedback</h3>
          <p>
            If you provide feedback, suggestions, or ideas about NameMeld, you grant us a non-exclusive, worldwide, royalty-free license to use, modify, and implement such feedback without obligation to you.
          </p>
        </section>

        <section id="disclaimer">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Disclaimers</h2>
          <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-6">
            <p className="text-sm text-yellow-800 mb-3 font-semibold">
              NAMEVERSE IS PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED.
            </p>
            <p className="text-sm text-yellow-800 mb-3">
              We do not warrant that:
            </p>
            <ul className="text-sm text-yellow-800 space-y-1 mb-3">
              <li>• The service will be uninterrupted, secure, or error-free</li>
              <li>• The information provided is complete, accurate, or reliable</li>
              <li>• Any errors or inaccuracies will be corrected</li>
              <li>• The service will meet your specific requirements</li>
            </ul>
            <p className="text-sm text-yellow-800">
              You acknowledge that you use NameMeld at your own risk and discretion.
            </p>
          </div>
        </section>

        <section id="liability">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Limitation of Liability</h2>
          <p className="mb-3">
            TO THE MAXIMUM EXTENT PERMITTED BY LAW, NAMEVERSE SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING BUT NOT LIMITED TO:
          </p>
          <ul className="list-disc list-inside space-y-1 mb-4">
            <li>Loss of profits, data, business opportunities, or goodwill</li>
            <li>Errors or inaccuracies in name information</li>
            <li>Decisions made based on generated names or name meanings</li>
            <li>Trademark infringement or domain disputes</li>
            <li>Unauthorized access to or alteration of your data</li>
            <li>Service interruptions or technical failures</li>
          </ul>
          <p>
            Our total liability shall not exceed the amount you paid us (if any) during the twelve months preceding the claim.
          </p>
        </section>

        <section id="indemnification">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Indemnification</h2>
          <p>
            You agree to indemnify, defend, and hold harmless NameMeld and its officers, directors, employees, and agents from any claims, damages, losses, liabilities, and expenses (including legal fees) arising from:
          </p>
          <ul className="list-disc list-inside space-y-1 mt-3 mb-4">
            <li>Your use of NameMeld</li>
            <li>Your violation of these Terms</li>
            <li>Your violation of any third-party rights</li>
            <li>Content you generate or submit</li>
          </ul>
        </section>

        <section id="termination">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Termination</h2>
          <p className="mb-3">
            We reserve the right to suspend or terminate your access to NameMeld at any time, without notice, for conduct that we believe violates these Terms or is harmful to other users, us, or third parties.
          </p>
          <p>
            Upon termination, your right to use NameMeld will immediately cease. You may clear your local storage to remove any saved data.
          </p>
        </section>

        <section id="changes">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Changes to Terms</h2>
          <p className="mb-3">
            We reserve the right to modify these Terms at any time. Changes will be effective immediately upon posting to this page. Your continued use of NameMeld after changes constitutes acceptance of the new Terms.
          </p>
          <p>
            We encourage you to review these Terms periodically. Material changes will be highlighted with an updated "Last updated" date.
          </p>
        </section>

        <section id="governing">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">11. Governing Law</h2>
          <p>
            These Terms shall be governed by and construed in accordance with applicable laws, without regard to conflict of law principles. Any disputes arising from these Terms or your use of NameMeld shall be resolved in the appropriate courts of the governing jurisdiction.
          </p>
        </section>

        <section id="severability">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">12. Severability</h2>
          <p>
            If any provision of these Terms is found to be unenforceable or invalid, that provision will be limited or eliminated to the minimum extent necessary so that these Terms will otherwise remain in full force and effect.
          </p>
        </section>

        <section id="contact">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">13. Contact Information</h2>
          <p className="mb-3">
            If you have questions about these Terms, please contact us:
          </p>
          <div className="bg-gray-50 rounded-xl p-5 border border-gray-200">
            <p className="font-semibold text-gray-900 mb-2">NameMeld Legal Team</p>
            <p className="text-sm text-gray-600">Email: legal@namemeld.com</p>
            <p className="text-sm text-gray-600">We aim to respond to all inquiries within 30 days.</p>
          </div>
        </section>

        <div className="mt-12 text-center pt-8 border-t border-gray-200">
          <p className="text-sm text-gray-500 mb-4">
            By using NameMeld, you acknowledge that you have read and understood these Terms of Service.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link to="/privacy" className="text-sm text-indigo-600 hover:underline">Privacy Policy</Link>
            <span className="text-gray-300">•</span>
            <Link to="/community-guidelines" className="text-sm text-indigo-600 hover:underline">Community Guidelines</Link>
            <span className="text-gray-300">•</span>
            <Link to="/" className="text-sm text-indigo-600 hover:underline">Back to Home</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
