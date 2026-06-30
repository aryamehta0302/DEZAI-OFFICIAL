'use client';

import { motion } from 'framer-motion';

const SECTIONS = [
  { id: 'preamble', title: '1. Preamble & Infrastructure Declaration' },
  { id: 'definitions', title: '2. Definitional Core Architecture' },
  { id: 'taxonomy', title: '3. Taxonomy of Data Vector Capture' },
  { id: 'rationalization', title: '4. Rationalization & Telemetry Operations' },
  { id: 'preservation', title: '5. Cryptographic Data Preservation' },
  { id: 'ai-treatment', title: '6. AI System Data Treatment' },
  { id: 'third-party', title: '7. Third-Party Sub-Processors' },
  { id: 'learners', title: '8. DEZAI Learners Provisions' },
  { id: 'cross-border', title: '9. Cross-Border Translations' },
  { id: 'compliance', title: '10. User Compliance Mandates' },
  { id: 'enforcement', title: '11. Enforcement Audits & Amendments' },
  { id: 'contact', title: '12. System Contact Blueprint' }
];

export default function PrivacyPage() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="pt-32 pb-[120px] relative max-w-[1280px] mx-auto px-6">
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
        {/* Sidebar Nav */}
        <aside className="hidden lg:block col-span-1 sticky top-28 self-start max-h-[80vh] overflow-y-auto pr-4 scrollbar-thin">
          <h4 className="label-caps text-xs text-primary mb-6 select-none">Table of Contents</h4>
          <ul className="space-y-4 text-sm">
            {SECTIONS.map((sec) => (
              <li key={sec.id}>
                <button
                  onClick={() => scrollToSection(sec.id)}
                  className="text-left text-on-surface-variant hover:text-primary transition-colors focus:outline-none cursor-pointer leading-tight text-xs font-semibold"
                >
                  {sec.title}
                </button>
              </li>
            ))}
          </ul>
        </aside>

        {/* Content Area */}
        <main className="col-span-1 lg:col-span-3">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="card-static rounded-2xl p-8 md:p-12"
          >
            {/* Header metadata */}
            <div className="border-b border-border pb-8 mb-8">
              <span className="label-caps text-primary text-xs block mb-3">Corporate Charter</span>
              <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-6">
                Privacy Policy &amp; Data Governance Charter
              </h1>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 text-xs text-on-surface-variant/80 font-mono mt-8">
                <div>DOCUMENT CODE: DZ-PRIVACY-EX-2026-V4</div>
                <div>SECURITY: COMPLIANCE VERIFIED</div>
                <div>EFFECTIVE DATE: June 20, 2026</div>
              </div>
            </div>

            {/* Document Body */}
            <div className="space-y-12 text-on-surface-variant/90 leading-relaxed text-sm">
              
              {/* Section 1 */}
              <section id="preamble" className="scroll-mt-28">
                <h3 className="text-xl font-bold text-on-surface mb-4">1. Preamble &amp; Infrastructure Declaration</h3>
                <div className="space-y-4">
                  <p>
                    <strong>1.1. Executive Intent.</strong> DEZAI is highly committed to deploying comprehensive, secure operational standards across all web deployment layers, custom user interfaces, mobile application ecosystems, e-commerce purchase engines, and technical training setups. This Privacy Policy is a core document defining how we extract, sort, store, protect, and distribute user metadata vectors flowing through our global systems network.
                  </p>
                  <p>
                    <strong>1.2. Scope of Application.</strong> This data charter governs every interaction vector initiated within our primary web interface, interactive prototypes, registration APIs, communication layers, and training platforms. By executing actions on these endpoints, you accept these architectural processes completely.
                  </p>
                  <p>
                    <strong>1.3. Structural Adjustments.</strong> Our information systems require periodic security updates and architectural shifts. DEZAI maintains the explicit authority to change this document to match current global compliance standards. We recommend tracking these shifts regularly.
                  </p>
                </div>
              </section>

              {/* Section 2 */}
              <section id="definitions" className="scroll-mt-28 border-t border-border pt-8">
                <h3 className="text-xl font-bold text-on-surface mb-4">2. Definitional Core Architecture</h3>
                <div className="space-y-4">
                  <p>
                    <strong>2.1. System Definitions.</strong> To maintain clear regulatory transparency, the following definitions apply across our compliance pipeline:
                  </p>
                  <ul className="list-disc pl-6 space-y-3">
                    <li>
                      <strong>Data Ingestion Vector:</strong> Any endpoint where an interactive asset captures public, personal, or corporate metadata inputs.
                    </li>
                    <li>
                      <strong>Telemetric Fingerprints:</strong> System logs, network parameters, device configurations, viewport sizes, and performance footprints generated automatically by browsing nodes.
                    </li>
                    <li>
                      <strong>AI Node Processing:</strong> The evaluation of text summaries, system diagrams, or audio models via custom algorithms.
                    </li>
                    <li>
                      <strong>The Pipeline Network:</strong> The unified operational environment managing DEZAI Agency contracts and DEZAI Learners projects.
                    </li>
                  </ul>
                </div>
              </section>

              {/* Section 3 */}
              <section id="taxonomy" className="scroll-mt-28 border-t border-border pt-8">
                <h3 className="text-xl font-bold text-on-surface mb-4">3. Taxonomy of Data Vector Capture (Ingestion Channels)</h3>
                <div className="space-y-4">
                  <p>
                    <strong>3.1. Voluntarily Provisioned Information Packets.</strong> When you contact our offices, register project requirements, request a custom proposal, or apply to the DEZAI Learners program, we capture specific personal details, including full names, email addresses, phone contact points, portfolio links, and structural project descriptions.
                  </p>
                  <p>
                    <strong>3.2. Automated Telemetry and Hardware Tracking.</strong> To keep network performance stable, our servers automatically monitor traffic metadata. This tracking captures system elements like internet protocol metrics, specific browser details, display configurations, referral path strings, interaction timing parameters, and internal application diagnostic logs.
                  </p>
                  <p>
                    <strong>3.3. Transactional &amp; Agency Engineering Payloads.</strong> For custom web designs, app development projects, or e-commerce implementations, we maintain detailed design files, user interaction models, checkout flow wireframes, system schematics, and structural deployment parameters necessary to complete client milestones.
                  </p>
                </div>
              </section>

              {/* Section 4 */}
              <section id="rationalization" className="scroll-mt-28 border-t border-border pt-8">
                <h3 className="text-xl font-bold text-on-surface mb-4">4. Rationalization &amp; Telemetry Processing Operations</h3>
                <div className="space-y-4">
                  <p>
                    DEZAI uses captured information blocks strictly for confirmed technical and operations tasks, including:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Optimizing system layouts and user experiences across various target client hardware platforms.</li>
                    <li>Evaluating portfolio applications for the DEZAI Learners program to support fair student selection paths.</li>
                    <li>Managing client updates and milestone deliverables for active web development and design projects.</li>
                    <li>Protecting system boundaries against malicious scraping, denial-of-service attempts, or unauthorized access vectors.</li>
                  </ul>
                </div>
              </section>

              {/* Section 5 */}
              <section id="preservation" className="scroll-mt-28 border-t border-border pt-8">
                <h3 className="text-xl font-bold text-on-surface mb-4">5. Cryptographic Data Preservation &amp; Housing Frameworks</h3>
                <div className="space-y-4">
                  <p>
                    <strong>5.1. Encryption Standard.</strong> We deploy modern encryption standards for all incoming user payloads during active network transits and static cloud storage cycles. Database storage systems feature strict authentication checks and restricted security roles.
                  </p>
                  <p>
                    <strong>5.2. Preservation Bounds.</strong> Data records are kept inside our systems only as long as necessary to complete development tasks, maintain support tickets, or meet regulatory auditing rules.
                  </p>
                  <p>
                    <strong>5.3. Incidents Response.</strong> If we detect an unauthorized system access vector or data compromise event, DEZAI infrastructure teams will isolate affected containers, notify targeted users within standard regulatory windows, and provide clear remediation guidelines.
                  </p>
                </div>
              </section>

              {/* Section 6 */}
              <section id="ai-treatment" className="scroll-mt-28 border-t border-border pt-8">
                <h3 className="text-xl font-bold text-on-surface mb-4">6. AI System Data Treatment &amp; Algocurrency Boundaries</h3>
                <div className="space-y-4">
                  <p>
                    <strong>6.1. Logic Isolation.</strong> User project requirements, educational materials, summary requests, and schematic architectures processed by DEZAI systems are handled within secure runtime containers. We do not sell user data parameters to external entity brokers.
                  </p>
                  <p>
                    <strong>6.2. Model Fine-Tuning.</strong> Any training configurations built to enhance platform efficiency rely exclusively on anonymized, grouped telemetry logs to ensure individual profiles cannot be reversed or identified.
                  </p>
                </div>
              </section>

              {/* Section 7 */}
              <section id="third-party" className="scroll-mt-28 border-t border-border pt-8">
                <h3 className="text-xl font-bold text-on-surface mb-4">7. Third-Party Microservice Routing &amp; Sub-Processors</h3>
                <p>
                  To maintain high global performance, DEZAI routes platform telemetry and web assets through external microservices, including cloud storage clusters, content distribution networks (CDNs), performance tracking services, and secure communication channels. These microservices manage infrastructure parameters in accordance with their independent privacy terms, which we advise users to review separately.
                </p>
              </section>

              {/* Section 8 */}
              <section id="learners" className="scroll-mt-28 border-t border-border pt-8">
                <h3 className="text-xl font-bold text-on-surface mb-4">8. DEZAI Learners Talent Program Specific Provisions</h3>
                <div className="space-y-4">
                  <p>
                    <strong>8.1. Academic Profiles.</strong> Data received for the DEZAI Learners program is used specifically to review technical skills, evaluate portfolio capabilities, and structure educational sprints. We hold applicant information securely throughout the assessment phase.
                  </p>
                  <p>
                    <strong>8.2. Collaborative Spaces.</strong> Code repositories, interface layouts, and system logic designs created during these learning workflows may be shared with team mentors and peer participants to support code reviews and performance tracking.
                  </p>
                </div>
              </section>

              {/* Section 9 */}
              <section id="cross-border" className="scroll-mt-28 border-t border-border pt-8">
                <h3 className="text-xl font-bold text-on-surface mb-4">9. Cross-Border Data Translation &amp; Sovereign Regulatory Maps</h3>
                <p>
                  Because DEZAI operates cross-border technology services, user data vectors may be routed or stored across international data center nodes. We deploy appropriate security structures to keep these transfers compliant with global privacy benchmarks and regional security rules.
                </p>
              </section>

              {/* Section 10 */}
              <section id="compliance" className="scroll-mt-28 border-t border-border pt-8">
                <h3 className="text-xl font-bold text-on-surface mb-4">10. User Compliance Mandates &amp; Control Mechanisms</h3>
                <div className="space-y-4">
                  <p>
                    Users maintain full governance rights over their data profiles managed by DEZAI, including options to:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Request detailed summaries of personal records stored within our active databases.</li>
                    <li>Update inaccurate details or fix missing information in active records.</li>
                    <li>Initiate complete data removal paths across our storage systems, subject to active contract obligations.</li>
                    <li>Limit tracking mechanisms by managing local browser storage rules and cookie preferences.</li>
                  </ul>
                </div>
              </section>

              {/* Section 11 */}
              <section id="enforcement" className="scroll-mt-28 border-t border-border pt-8">
                <h3 className="text-xl font-bold text-on-surface mb-4">11. Enforcement Audits &amp; Amendments</h3>
                <p>
                  Our internal compliance officers review these data governance rules regularly. We update the version code and publication date whenever systemic shifts roll out to production environments. Continuous use of our web endpoints after updates indicates full agreement to the updated framework.
                </p>
              </section>

              {/* Section 12 */}
              <section id="contact" className="scroll-mt-28 border-t border-border pt-8">
                <h3 className="text-xl font-bold text-on-surface mb-6">12. System Contact Blueprint &amp; Compliance Office Sign-Off</h3>
                <p className="mb-6">
                  For data inquiries, access requests, or specific compliance questions, please contact our administrative offices through our official contact matrix:
                </p>
                <div className="overflow-x-auto">
                  <table className="w-full text-left text-xs md:text-sm font-mono border-collapse">
                    <tbody>
                      <tr className="border-b border-border">
                        <td className="py-3 pr-4 font-bold text-on-surface select-none">Data Protection Officer Email</td>
                        <td className="py-3 text-primary">team.dezaiai@gmail.com</td>
                      </tr>
                      <tr className="border-b border-border">
                        <td className="py-3 pr-4 font-bold text-on-surface select-none">Technical Infrastructure Desk</td>
                        <td className="py-3">+91 98253 36328</td>
                      </tr>
                      <tr className="border-b border-border">
                        <td className="py-3 pr-4 font-bold text-on-surface select-none">System Deployments Line</td>
                        <td className="py-3">+91 63533 62927</td>
                      </tr>
                      <tr className="border-b border-border">
                        <td className="py-3 pr-4 font-bold text-on-surface select-none">Operational Partnerships Division</td>
                        <td className="py-3">+91 98987 60869</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="mt-8 text-center text-xs text-on-surface-variant/60 font-medium select-none">
                  dezai.orgpliance Office â€” Systemic Verification Approved 2026
                </div>
              </section>

            </div>
          </motion.div>
        </main>
      </div>
    </div>
  );
}

