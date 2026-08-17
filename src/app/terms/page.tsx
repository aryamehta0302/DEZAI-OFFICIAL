'use client';

import { motion } from 'framer-motion';

const SECTIONS = [
  { id: 'preamble', title: 'Preamble & Legal Binding' },
  { id: 'definitions', title: '1. Definitions & Interpretations' },
  { id: 'ip', title: '2. Intellectual Property & Marks' },
  { id: 'scope', title: '3. Scope of Agency Core Services' },
  { id: 'learners', title: '4. DEZAI Learners Protocols' },
  { id: 'onboarding', title: '5. Client Onboarding & SOW' },
  { id: 'financial', title: '6. Financial Milestone Metrics' },
  { id: 'hosting', title: '7. Hosting & Zero-Downtime Disclaimer' },
  { id: 'data-protection', title: '8. Data Protection & Privacy' },
  { id: 'liability', title: '9. Limitation of Liability' },
  { id: 'termination', title: '10. Termination & Severability' },
  { id: 'governing-law', title: '11. Governing Law & Disputes' },
  { id: 'matrices', title: '12. Corporate Matrices' }
];

export default function TermsPage() {
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
              <span className="label-caps text-primary text-xs block mb-3">Legal Framework</span>
              <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-6">
                Master Corporate Terms &amp; Conditions
              </h1>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 text-xs text-on-surface-variant/80 font-mono mt-8 font-semibold">
                <div>DOCUMENT IDENTIFIER: DZ-TC-2026-V2</div>
                <div>SECURITY: PUBLIC / REGULATORY</div>
                <div>VERSION CONTROL: EDITION 2.0.0</div>
              </div>
            </div>

            {/* Document Body */}
            <div className="space-y-12 text-on-surface-variant/90 leading-relaxed text-sm">
              
              {/* Preamble */}
              <section id="preamble" className="scroll-mt-28">
                <h3 className="text-xl font-bold text-on-surface mb-4">Preamble &amp; Legal Binding Agreement</h3>
                <div className="space-y-4">
                  <p>
                    This document constitutes a formal, legally binding electronic agreement between the user (&ldquo;User&rdquo;, &ldquo;You&rdquo;, &ldquo;Your&rdquo;, &ldquo;Client&rdquo;, or &ldquo;Learner&rdquo;) and DEZAI (&ldquo;Company&rdquo;, &ldquo;We&rdquo;, &ldquo;Us&rdquo;, &ldquo;Our&rdquo;, or &ldquo;DEZAI&rdquo;). This agreement governs your entire interaction lifecycle with DEZAI, including but not limited to browsing the official website domain, utilizing embedded digital assets, filling out communication frameworks, onboarding as an active client for engineering or design consultation, or enrolling within our talent development branches such as the DEZAI Learners program.
                  </p>
                  <p>
                    By interacting with our systems, you explicitly declare that you possess the necessary legal capacity, authorization, and mental competence to enter into binding structural agreements within your operational jurisdiction. If you are accessing these assets on behalf of a corporate entity, limited liability partnership, or public enterprise, you warrant that you possess absolute authorization to bind said entity to these complete protocols.
                  </p>
                  <p className="bg-error/10 text-error-dim p-4 rounded-xl border border-error/20 font-bold select-none text-xs">
                    FAILURE TO ACCEDE TO, AGREE WITH, OR UNDERSTAND ANY PORTION OF THESE TERMS IMPOSES AN IMMEDIATE RESTRICTION UPON YOUR USE. YOU ARE EXPRESSLY PROHIBITED FROM UTILIZING ANY CONTINUOUS FRONTEND OR BACK-OFFICE PIPELINES OPERATED BY DEZAI AND MUST DISCONTINUE ALL PLATFORM INTERACTIONS IMMEDIATELY.
                  </p>
                </div>
              </section>

              {/* Section 1 */}
              <section id="definitions" className="scroll-mt-28 border-t border-border pt-8">
                <h3 className="text-xl font-bold text-on-surface mb-4">1. Detailed Definitions and Interpretations</h3>
                <div className="space-y-4">
                  <p>
                    To ensure total clarity throughout this legal framework, the following terms are rigorously defined and shall be interpreted universally across all supplementary Statement of Works (SOWs), Service Level Agreements (SLAs), and Learner guidelines:
                  </p>
                  <ul className="list-disc pl-6 space-y-3">
                    <li>
                      <strong>&ldquo;Frontend Architecture&rdquo;</strong> means all client-facing user interfaces, visual design systems, HTML/CSS/JavaScript layout configurations, interactive prototyping assets, responsive layout matrices, and components rendered visibly on a client user device.
                    </li>
                    <li>
                      <strong>&ldquo;Back-Office Pipeline&rdquo;</strong> means all secure database infrastructures, cloud microservices, payment processing logic, continuous integration systems, data protection configurations, server frameworks, and optimization components handling structural calculations.
                    </li>
                    <li>
                      <strong>&ldquo;Operational Friction&rdquo;</strong> refers to any structural delay, technological incompatibility, resource deficit, or systemic error resulting from misaligned operational requirements or third-party framework instability.
                    </li>
                    <li>
                      <strong>&ldquo;Visibility Engineering&rdquo;</strong> means any data-driven framework, search engine optimization strategy, metadata configuration, index building, or digital distribution model implemented to systematically increase digital asset visibility.
                    </li>
                  </ul>
                </div>
              </section>

              {/* Section 2 */}
              <section id="ip" className="scroll-mt-28 border-t border-border pt-8">
                <h3 className="text-xl font-bold text-on-surface mb-4">2. Intellectual Property and Proprietary Marks</h3>
                <div className="space-y-4">
                  <p>
                    The entire functional ecosystem of DEZAI, including but not limited to custom content, layout structures, proprietary design tokens, database engines, wireframe methodologies, brand iconography, text assets, software components, and original source systems (collectively defined as the &ldquo;Proprietary Core&rdquo;), is owned absolutely by or licensed exclusively to DEZAI. All rights are strictly reserved under national copyright frameworks, international intellectual property treaties, and proprietary trademark protections.
                  </p>
                  <p>
                    No element of the Site, the Content, or the Marks may be extracted, scraped, reverse-engineered, decompiled, mirrored, reproduced, aggregated, distributed, or commercialized without securing an explicit, un-delegated written license carrying the authorized seal and signature of DEZAI corporate officers. Any unauthorized derivation of our progressive design frameworks or layout mechanics will trigger immediate regulatory and technical remediation protocols.
                  </p>
                </div>
              </section>

              {/* Section 3 */}
              <section id="scope" className="scroll-mt-28 border-t border-border pt-8">
                <h3 className="text-xl font-bold text-on-surface mb-4">3. Scope of Professional Agency Core Services</h3>
                <div className="space-y-4">
                  <p>
                    DEZAI executes premium development and design mandates across several core functional digital capabilities:
                  </p>
                  <ul className="list-disc pl-6 space-y-3">
                    <li>
                      <strong>A. UI/UX Design Frameworks:</strong> Our design division specializes in constructing user-centered layouts engineered specifically for maximum user retention and seamless navigation. This comprehensive process comprises localized user research, structural wireframing, the creation of interactive digital prototyping maps, and the finalization of premium design systems built exclusively to mitigate market friction.
                    </li>
                    <li>
                      <strong>B. Advanced Web Engineering &amp; Development:</strong> We build fast, responsive, and scalable custom corporate websites, corporate profiles, and strategic landing pages optimized entirely to load instantaneously across all screen form factors. Frontend assets are constructed using progressive development frameworks.
                    </li>
                    <li>
                      <strong>C. Mobile Application Engineering:</strong> DEZAI provides native and cross-platform mobile application development targeting iOS and Android environments. These feature-rich applications are structured with a clean codebase, smooth cross-system consistency, and high interactivity.
                    </li>
                    <li>
                      <strong>D. E-Commerce Solutions &amp; Purchase Funnels:</strong> We deploy end-to-end digital storefront layouts engineered around high-performing customer purchase funnels. This deployment covers checkout architectures, secure payment gateway choices, and comprehensive inventory dashboards.
                    </li>
                    <li>
                      <strong>E. Digital Marketing &amp; Visibility Engineering:</strong> Our market strategy solutions deploy data-driven traffic-acquisition blueprints engineered to elevate digital brand authority and accelerate lead acquisition streams.
                    </li>
                    <li>
                      <strong>F. Cloud Deployment &amp; Resilient Architecture:</strong> We configure and deploy custom cloud architectures structured to ensure stable systems reach live target servers safely. These environments are optimized for continuous availability, structural data protection, and automated backups.
                    </li>
                  </ul>
                </div>
              </section>

              {/* Section 4 */}
              <section id="learners" className="scroll-mt-28 border-t border-border pt-8">
                <h3 className="text-xl font-bold text-on-surface mb-4">4. DEZAI Learners Talent Initiative Protocols</h3>
                <div className="space-y-4">
                  <p>
                    The DEZAI Learners program represents our foundational talent development initiative, structured around a mentorship-driven learning framework designed specifically to bridge the practical gap between structural technical skills and executive product mastery.
                  </p>
                  <p>
                    Instead of relying upon absolute rejections for promising candidates, DEZAI Learners offers an alternative pathway focused on learning by building. Participants are introduced to guided learning tracks, portfolio-building cycles, and expert support environments intended to optimize professional readiness.
                  </p>
                  <p>
                    By entering this program, you agree that participation is purely educational. It does not constitute a contract of employment or create any employer-employee relationship with DEZAI. All source files, assets, logic modules, and digital architectures built by participants remain the sole intellectual property of DEZAI. Learners are provided a limited, revocable, non-transferable license to host finalized graphical screens in their individual professional portfolios.
                  </p>
                </div>
              </section>

              {/* Section 5 */}
              <section id="onboarding" className="scroll-mt-28 border-t border-border pt-8">
                <h3 className="text-xl font-bold text-on-surface mb-4">5. Client Onboarding, Responsibilities, and SOW Alignment</h3>
                <div className="space-y-4">
                  <p>
                    To preserve our commitment to premium execution and transparent milestones, a highly structured collaborative workflow is enforced across every engagement:
                  </p>
                  <p>
                    Clients are required to deliver all necessary data assets, media components, corporate copy, and technical parameters required for system integration within strict, pre-scheduled sprint intervals. DEZAI explicitly disclaims any liability for operational adjustments, timeline slippage, or product deployment delays caused by a client&apos;s structural failure to deliver these foundational components.
                  </p>
                  <p>
                    Furthermore, the client retains absolute legal liability for ensuring that all data assets delivered to DEZAI do not infringe upon third-party copyrights or intellectual property protections globally. Clients are solely responsible for the financial provisioning and upkeep of all underlying third-party API accounts, server hosting licenses, domain spaces, and specialized processing infrastructure.
                  </p>
                </div>
              </section>

              {/* Section 6 */}
              <section id="financial" className="scroll-mt-28 border-t border-border pt-8">
                <h3 className="text-xl font-bold text-on-surface mb-4">6. Financial Provisions, Milestones, and Fee Metrics</h3>
                <div className="space-y-4">
                  <p>
                    All professional agency fees are calculated, structured, and executed based on separate Statement of Works (SOWs) unique to each client engagement. Unless explicitly adjusted via written mutual addendums, the following financial principles apply uniformly:
                  </p>
                  <p>
                    An initial non-refundable engineering deposit is required prior to allocating layout architects or beginning user research sprints. Subsequent financial allocations are unlocked sequentially upon the successful validation of defined transparent milestones (e.g., Wireframe Approval, Front-End Code Completion, Staging Server Deployment).
                  </p>
                  <p>
                    In the event of payment delinquency exceeding five business days from milestone completion, DEZAI reserves the absolute right to suspend all active development, halt cloud deployment pipelines, restrict API integrations, or take staging environments completely offline without liability for commercial loss.
                  </p>
                </div>
              </section>

              {/* Section 7 */}
              <section id="hosting" className="scroll-mt-28 border-t border-border pt-8">
                <h3 className="text-xl font-bold text-on-surface mb-4">7. Hosting Infrastructure and Zero-Downtime Disclaimer</h3>
                <p>
                  While DEZAI implements elite cloud practices configuration designed to achieve structural protection and continuous zero-downtime availability, all physical processing units and bandwidth delivery frameworks are owned, maintained, and operated by global third-party providers. Consequently, DEZAI does not provide an absolute legal warranty that access to live production environments will remain uninterrupted or error-free at all times. We explicitly disclaim all liability for systemic operational friction, localized data loss, connection drops, or commerce interruptions caused directly by hosting facility downtime, hardware disruptions, or network drops.
                </p>
              </section>

              {/* Section 8 */}
              <section id="data-protection" className="scroll-mt-28 border-t border-border pt-8">
                <h3 className="text-xl font-bold text-on-surface mb-4">8. Data Protection, Privacy, and Structural Compliance</h3>
                <p>
                  DEZAI enforces deep structural data protection measures across all production assets, communication networks, and repository nodes. We process user information and client operational files in full compliance with international digital safety frameworks and secure storage protocols. We apply encryption standards to code assets in transit and at rest. Access control lists are tightly maintained, ensuring that only authorized engineers, product architects, and verified project supervisors possess structural interaction rights over corporate code bases or customer databases.
                </p>
              </section>

              {/* Section 9 */}
              <section id="liability" className="scroll-mt-28 border-t border-border pt-8">
                <h3 className="text-xl font-bold text-on-surface mb-4">9. Absolute Limitation of Liability and Indemnification</h3>
                <div className="space-y-4">
                  <p>
                    UNDER NO CIRCUMSTANCES SHALL DEZAI, ITS FOUNDERS, CORPORATE PARTNERS, AGENTS, OR EMPLOYEES BE LIABLE FOR ANY CONSEQUENTIAL, INDIRECT, SPECIAL, INCIDENTAL, PUNITIVE, OR EXEMPLARY LOSSES, INCLUDING BUT NOT LIMITED TO LOST FINANCIAL REVENUES, RETENTION METRICS DROP, COMMERCIAL INTERRUPTIONS, OR DATABASE CORRUPTION INCURRED BY A CLIENT OR USER.
                  </p>
                  <p>
                    You agree to indemnify, defend, and hold harmless DEZAI against any third-party claims, legal demands, asset losses, administrative fines, or legal expenses arising out of your misuse of our platforms, willful violation of these Terms, or infringement of any third-party intellectual property or civil rights.
                  </p>
                </div>
              </section>

              {/* Section 10 */}
              <section id="termination" className="scroll-mt-28 border-t border-border pt-8">
                <h3 className="text-xl font-bold text-on-surface mb-4">10. Termination Conditions and Lifecycle Severability</h3>
                <div className="space-y-4">
                  <p>
                    Either party may terminate an active professional agreement exclusively under the precise operational frameworks defined within the primary engagement SOW. Upon formal initiation of termination notices, the client remains legally obligated to clear all outstanding financial balances for engineering time spent and milestones reached up to the execution hour.
                  </p>
                  <p>
                    If any clause or provision within these broad Terms is adjudicated as invalid, unlawful, or unenforceable by an authorized court of law, that specific provision shall be severed from the document. The remaining terms, covenants, and clauses shall retain full legal weight and continue to govern the relationship seamlessly.
                  </p>
                </div>
              </section>

              {/* Section 11 */}
              <section id="governing-law" className="scroll-mt-28 border-t border-border pt-8">
                <h3 className="text-xl font-bold text-on-surface mb-4">11. Governing Law and Conflict Resolution Architecture</h3>
                <p>
                  These Terms, along with any external digital solutions agreements, are executed, governed, and interpreted strictly under the regulatory frameworks and commercial laws of our primary operational jurisdictions. Prior to initiating any formal legal or adversarial claims, both parties commit to engaging in a 30-day collaborative diagnostic window to resolve disputes amicably through executive meditation. If resolution fails, all unresolved structural disputes shall be directed exclusively to the authorized corporate courts of our primary jurisdiction.
                </p>
              </section>

              {/* Section 12 */}
              <section id="matrices" className="scroll-mt-28 border-t border-border pt-8">
                <h3 className="text-xl font-bold text-on-surface mb-6">12. Comprehensive Corporate Matrices &amp; Communication</h3>
                <p className="mb-6">
                  To submit official notices, document project adjustments, raise operational feedback, or ask questions concerning these Terms, contact our administration office through our official verified networks:
                </p>
                <div className="overflow-x-auto">
                  <table className="w-full text-left text-xs md:text-sm font-mono border-collapse">
                    <tbody>
                      <tr className="border-b border-border">
                        <td className="py-3 pr-4 font-bold text-on-surface select-none">Official Corporate Email</td>
                        <td className="py-3 text-primary">info@dezai.org</td>
                      </tr>
                      <tr className="border-b border-border">
                        <td className="py-3 pr-4 font-bold text-on-surface select-none">Primary Infrastructure Support</td>
                        <td className="py-3">+91 98253 36328</td>
                      </tr>
                      <tr className="border-b border-border">
                        <td className="py-3 pr-4 font-bold text-on-surface select-none">Systems Deployment Contact</td>
                        <td className="py-3">+91 63533 62927</td>
                      </tr>
                      <tr className="border-b border-border">
                        <td className="py-3 pr-4 font-bold text-on-surface select-none">Strategic Partnerships Desk</td>
                        <td className="py-3">+91 98987 60869</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="mt-8 text-center text-xs text-on-surface-variant/60 font-medium select-none">
                  DEZAI Master Legal Framework | Confidential &amp; Proprietary 2026
                </div>
              </section>

            </div>
          </motion.div>
        </main>
      </div>
    </div>
  );
}
