import { motion } from 'framer-motion';

function Terms() {
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
          <h1 className="text-4xl md:text-5xl font-bold mb-4 font-sans tracking-tight">Terms of Use</h1>
          <p className="text-ink-muted text-lg leading-relaxed max-w-2xl mx-auto">
            Please read these Terms of Use carefully before using the SBS Finserv website.
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
            <p className="text-sm text-gray-400 font-semibold mb-6">Last Updated: July 15, 2026</p>
            <p>
              Welcome to <strong>sbsfinserv.in</strong>. The Website is owned, managed, and operated by <strong>SBS Financial Services</strong>, having its principal place of business in Ahmedabad, Gujarat, India.
            </p>
            <p className="mt-4">
              By accessing, browsing, or using this Website, you acknowledge that you have read, understood, and agree to be bound by these Terms of Use, Disclaimer, and our Privacy Policy. If you do not agree with any part of these terms, please discontinue using the Website immediately.
            </p>
          </div>


          {/* Section 1 */}
          <div className="space-y-3">
            <h2 className="text-2xl font-bold text-green-950">1. Eligibility & Registration</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>Eligibility:</strong> By using this Website, you represent that you are at least 18 years of age and are legally competent to enter into a binding contract under Indian law.
              </li>
              <li>
                <strong>Accuracy of Information:</strong> If you register or create an account on our Website, you agree to provide true, accurate, current, and complete information. Providing false details may lead to immediate termination of your access.
              </li>
              <li>
                <strong>Account Security:</strong> You are solely responsible for maintaining the confidentiality of your credentials (username, password, OTP). Any activity under your account will be deemed as authorized by you.
              </li>
            </ul>
          </div>



          {/* Section 2 */}
          <div className="space-y-3">
            <h2 className="text-2xl font-bold text-green-950">2. Nature of Financial Services & Disclaimers</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>Informational Purpose Only:</strong> All content, data, research, reports, and calculators displayed on this Website are for informational and educational purposes only. They do not constitute an offer, solicitation, or personal recommendation to buy or sell any financial products.
              </li>
              <li>
                <strong>Market Risks:</strong> You expressly acknowledge that investments in Mutual Funds, unlisted shares, IPOs, bonds, and other financial products are subject to market risks. Past performance is not a guarantee of future returns.
              </li>
            </ul>
            <div className="p-4 bg-amber-50 border-l-4 border-amber-500 rounded-r-lg mt-4">
              <p className="text-sm font-semibold text-amber-900">Statutory Warning (SEBI):</p>
              <p className="text-sm text-amber-800 mt-1 font-medium">
                Mutual Fund investments are subject to market risks, read all scheme-related documents carefully.
              </p>
            </div>
            <ul className="list-disc pl-6 space-y-2 mt-3">
              <li>
                <strong>No Advice:</strong> Unless explicitly entered into a formal advisory agreement with SBS, no content on this Website shall be construed as professional financial, legal, or tax advice. We recommend consulting a certified financial advisor before making any investment decisions.
              </li>
            </ul>
          </div>



          {/* Section 3 */}
          <div className="space-y-3">
            <h2 className="text-2xl font-bold text-green-950">3. Third-Party Links & Services</h2>
            <p>
              Our Website may contain links to third-party websites, platforms, or service providers (such as mutual fund transaction portals, KYC portals, etc.).
            </p>
            <p>
              SBS does not control, endorse, or guarantee the content or services offered by these third parties. Your transactions or interactions with third-party sites are governed solely by their respective terms and conditions.
            </p>
          </div>



          {/* Section 4 */}
          <div className="space-y-3">
            <h2 className="text-2xl font-bold text-green-950">4. Intellectual Property Rights</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>Ownership:</strong> All content on this Website, including but not limited to logos, trademarks, text, graphics, designs, data, and software, is the exclusive intellectual property of SBS Financial Services or its content suppliers.
              </li>
              <li>
                <strong>Prohibitions:</strong> You are strictly prohibited from copying, reproducing, redistributing, publishing, modifying, or using any content from this Website for commercial purposes without prior written consent from Us.
              </li>
            </ul>
          </div>



          {/* Section 5 */}
          <div className="space-y-3">
            <h2 className="text-2xl font-bold text-green-950">5. Limitation of Liability</h2>
            <p>
              SBS, its directors, employees, or agents shall not be liable for any direct, indirect, incidental, or consequential losses, damages, or claims arising out of:
            </p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Your use or inability to use the Website.</li>
              <li>Any delay, failure, interruption, or corruption of data or system downtime.</li>
              <li>Market losses incurred by you based on the information or calculators provided on this Website.</li>
            </ul>
          </div>



          {/* Section 6 */}
          <div className="space-y-3">
            <h2 className="text-2xl font-bold text-green-950">6. Indemnification</h2>
            <p>
              You agree to indemnify, defend, and hold harmless SBS Financial Services, its partners, and employees from and against any and all claims, liabilities, damages, losses, or expenses (including legal fees) arising out of your violation of these Terms of Use or your misuse of the Website.
            </p>
          </div>



          {/* Section 7 */}
          <div className="space-y-3">
            <h2 className="text-2xl font-bold text-green-950">7. Termination of Use</h2>
            <p>
              We reserve the right, in our sole discretion, to restrict, suspend, or terminate your access to the Website or any part of our services at any time, without prior notice or liability, for any reason whatsoever (including breach of these Terms).
            </p>
          </div>



          {/* Section 8 */}
          <div className="space-y-3">
            <h2 className="text-2xl font-bold text-green-950">8. Governing Law & Jurisdiction</h2>
            <p>
              These Terms of Use shall be governed by and construed in accordance with the laws of India. Any disputes or legal proceedings arising out of or in connection with these terms shall be subject to the exclusive jurisdiction of the competent courts in Ahmedabad, Gujarat, India.
            </p>
          </div>



          {/* Section 9 */}
          <div className="space-y-3">
            <h2 className="text-2xl font-bold text-green-950">9. Modifications to Terms</h2>
            <p>
              We reserve the right to revise or update these Terms of Use at any time without prior notice. The "Last Updated" date at the top of this page will indicate the latest revision. Your continued use of the Website post any updates constitutes your acceptance of the revised terms.
            </p>
          </div>



          {/* Section 10 */}
          <div className="space-y-3">
            <h2 className="text-2xl font-bold text-green-950">10. Contact Information</h2>
            <p>
              If you have any questions, feedback, or grievances regarding these Terms of Use, please reach out to us:
            </p>
            <div className="bg-slate-50 p-6 rounded-xl border border-gray-100 space-y-2 mt-4 text-green-950">
              <p><strong>Company Name:</strong> SBS Financial Services</p>
              <p><strong>Office Address:</strong> 1003, Span Trade Centre, Paldi Rd, Near Bony Travels, Paldi, Ahmedabad, Gujarat - 380006</p>
              <p><strong>Mobile:</strong> +91 90813 53523</p>
              <p><strong>Email:</strong> <a href="mailto:sbsfin27@gmail.com" className="text-green-800 hover:text-gold-500 font-medium transition-colors">sbsfin27@gmail.com</a></p>
              <p><strong>Website:</strong> <a href="https://sbsfinserv.in" className="text-green-800 hover:text-gold-500 font-medium transition-colors">https://sbsfinserv.in</a></p>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
}

export default Terms;
