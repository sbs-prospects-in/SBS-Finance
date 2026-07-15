import { motion } from 'framer-motion';

function Privacy() {
  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Top Header Banner */}
      <section className="relative bg-green-950 text-ink-dark py-20 px-4 sm:px-6 lg:px-8 overflow-hidden border-b border-green-700/10">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-gold-400 blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-gold-400 blur-3xl transform -translate-x-1/3 translate-y-1/3"></div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto relative z-10 text-center"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4 font-sans tracking-tight">Privacy Policy</h1>
          <p className="text-ink-muted text-lg leading-relaxed max-w-2xl mx-auto">
            At SBS Finserv, we are committed to protecting your privacy and maintaining the confidentiality of your personal information.
          </p>
        </motion.div>
      </section>

      {/* Policy Content */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white rounded-2xl shadow-xl p-8 md:p-12 text-gray-700 leading-relaxed space-y-8"
        >
          <div>
            <p className="text-sm text-gray-400 font-semibold mb-6">Effective Date: July 15, 2026</p>
            <p>
              At <strong>SBS Finserv</strong> ("Company", "we", "our", or "us"), we are committed to protecting your privacy and maintaining the confidentiality of the personal information you share with us through our website <a href="https://www.sbsfinserv.in" className="text-green-800 hover:text-gold-500 font-medium transition-colors">https://www.sbsfinserv.in</a> ("Website").
            </p>
            <p className="mt-4">
              By accessing or using our Website, you agree to the collection and use of your information in accordance with this Privacy Policy.
            </p>
          </div>

          <hr className="border-gray-100" />

          {/* Section 1 */}
          <div className="space-y-3">
            <h2 className="text-2xl font-bold text-green-950">1. Information We Collect</h2>
            <p>We may collect the following types of personal information:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Full Name</li>
              <li>Mobile Number</li>
              <li>Email Address</li>
              <li>Residential or Business Address</li>
              <li>PAN, Aadhaar, or other KYC documents (where required for applications)</li>
              <li>Financial information necessary for loan or financial service evaluations</li>
              <li>IP Address, browser type, device information, and website usage data</li>
            </ul>
            <div className="p-4 bg-green-50 border-l-4 border-green-700 rounded-r-lg mt-4">
              <p className="text-sm font-semibold text-green-900">Note on Device Permissions:</p>
              <p className="text-sm text-green-800 mt-1">
                We do <strong>not</strong> access, scrape, or collect any personal logs from your device, including contacts, SMS, call logs, media files, or real-time location, in compliance with RBI safety standards.
              </p>
            </div>
          </div>

          <hr className="border-gray-100" />

          {/* Section 2 */}
          <div className="space-y-3">
            <h2 className="text-2xl font-bold text-green-950">2. How We Use Your Information</h2>
            <p>The information collected may be used to:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Process your enquiries and service requests.</li>
              <li>Evaluate and process loan or financial product applications.</li>
              <li>Verify your identity and complete KYC requirements.</li>
              <li>Communicate with you regarding your application or account.</li>
              <li>Improve our products, services, and customer experience.</li>
              <li>Send updates, promotional offers, or important service notifications (where permitted by law).</li>
              <li>Comply with legal, regulatory, and statutory obligations.</li>
            </ul>
          </div>

          <hr className="border-gray-100" />

          {/* Section 3 */}
          <div className="space-y-3">
            <h2 className="text-2xl font-bold text-green-950">3. Consent and Information Sharing</h2>
            <p>We respect your privacy and do not sell or rent your personal information.</p>
            <p>
              We only share your information with third parties after obtaining your explicit consent, or when required by law. Such third parties may include:
            </p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Partner Banks, NBFCs, and Lending Institutions (for loan evaluation)</li>
              <li>Credit Bureaus (to check credit scores, with your authorization)</li>
              <li>KYC Verification Agencies</li>
              <li>Government Authorities or Regulatory Bodies</li>
              <li>Technology and Service Providers assisting us in delivering our services</li>
            </ul>
          </div>

          <hr className="border-gray-100" />

          {/* Section 4 */}
          <div className="space-y-3">
            <h2 className="text-2xl font-bold text-green-950">4. Data Storage and Security</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>Data Storage (India):</strong> All personal and financial data collected by SBS Finserv is stored securely on servers located within India, in compliance with RBI guidelines.
              </li>
              <li>
                <strong>Security Measures:</strong> SBS Finserv implements appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.
              </li>
              <li>
                Our website uses Secure Socket Layer (SSL) encryption and other industry-standard security practices to safeguard information transmitted over the internet.
              </li>
            </ul>
          </div>

          <hr className="border-gray-100" />

          {/* Section 5 */}
          <div className="space-y-3">
            <h2 className="text-2xl font-bold text-green-950">5. User Account Security</h2>
            <p>Where login access is provided, users are responsible for maintaining the confidentiality of their username and password. We recommend:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Using strong passwords.</li>
              <li>Changing passwords periodically.</li>
              <li>Never sharing login credentials with anyone.</li>
              <li>Logging out after each session, especially when using shared devices.</li>
            </ul>
          </div>

          <hr className="border-gray-100" />

          {/* Section 6 */}
          <div className="space-y-3">
            <h2 className="text-2xl font-bold text-green-950">6. Cookies and Website Analytics</h2>
            <p>
              Our Website may use cookies and similar technologies to improve website functionality, understand visitor behavior, enhance user experience, and analyze website traffic.
            </p>
            <p>
              You may disable cookies through your browser settings; however, certain features of the Website may not function properly.
            </p>
          </div>

          <hr className="border-gray-100" />

          {/* Section 7 */}
          <div className="space-y-3">
            <h2 className="text-2xl font-bold text-green-950">7. Third-Party Links</h2>
            <p>
              Our Website may contain links to third-party websites for your convenience. SBS Finserv is not responsible for the privacy practices, content, accuracy, or security of such external websites. Users are advised to review the privacy policies of those websites before sharing any personal information.
            </p>
          </div>

          <hr className="border-gray-100" />

          {/* Section 8 */}
          <div className="space-y-3">
            <h2 className="text-2xl font-bold text-green-950">8. Legal Disclosure</h2>
            <p>
              We may disclose personal information if required by law, court order, regulatory authority, or any government agency under applicable Indian laws.
            </p>
          </div>

          <hr className="border-gray-100" />

          {/* Section 9 */}
          <div className="space-y-3">
            <h2 className="text-2xl font-bold text-green-950">9. Data Retention and Erasure</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                We retain your personal information only for as long as necessary to provide our services, resolve disputes, and enforce our agreements.
              </li>
              <li>
                We also retain KYC and financial data as mandated by financial regulators under the Prevention of Money Laundering Act (PMLA) and other statutory requirements.
              </li>
              <li>
                <strong>Right to Erasure:</strong> Once the regulatory retention period expires, you have the right to request the erasure of your personal data from our servers.
              </li>
            </ul>
          </div>

          <hr className="border-gray-100" />

          {/* Section 10 */}
          <div className="space-y-3">
            <h2 className="text-2xl font-bold text-green-950">10. Your Rights (under DPDPA, 2023)</h2>
            <p>In accordance with the Digital Personal Data Protection Act, 2023, you have the following rights:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Right to Access & Information:</strong> Seek summary details of the data processed and the identities of third parties with whom your data was shared.</li>
              <li><strong>Right to Correction & Erasure:</strong> Request correction of inaccurate data or deletion of data no longer required for processing.</li>
              <li><strong>Right to Withdraw Consent:</strong> You can withdraw your consent at any time. Withdrawal will not affect the legality of processing done prior to withdrawal.</li>
              <li><strong>Right to Nominate:</strong> Nominate any other individual to exercise your rights in the event of death or incapacity.</li>
            </ul>
          </div>

          <hr className="border-gray-100" />

          {/* Section 11 */}
          <div className="space-y-3">
            <h2 className="text-2xl font-bold text-green-950">11. Changes to this Privacy Policy</h2>
            <p>
              SBS Finserv reserves the right to modify or update this Privacy Policy at any time. Any changes will be posted on this page along with the revised Effective Date. Continued use of the Website after such updates constitutes your acceptance of the revised Privacy Policy.
            </p>
          </div>

          <hr className="border-gray-100" />

          {/* Section 12 */}
          <div className="space-y-3">
            <h2 className="text-2xl font-bold text-green-950">12. Grievance Redressal and Contact Details</h2>
            <p>
              If you have any questions, concerns, or requests regarding this Privacy Policy, or if you wish to file a complaint regarding your personal data, you may contact our designated Grievance Officer:
            </p>
            <div className="bg-slate-50 p-6 rounded-xl border border-gray-100 space-y-2 mt-4 text-green-950">
              <p><strong>Name of Grievance Officer:</strong> Mr. Urval Shah</p>
              <p><strong>Phone:</strong> +91 90813 53523</p>
              <p><strong>Email:</strong> <a href="mailto:sbsfin27@gmail.com" className="text-green-800 hover:text-gold-500 font-medium transition-colors">sbsfin27@gmail.com</a></p>
              <p><strong>Website:</strong> <a href="https://www.sbsfinserv.in" className="text-green-800 hover:text-gold-500 font-medium transition-colors">https://www.sbsfinserv.in</a></p>
              <p><strong>Office Address:</strong> 1003, Span Trade Centre, Paldi Rd, Near Bony Travels, Pritam Nagar, Paldi, Ahmedabad, Gujarat 380006</p>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
}

export default Privacy;
