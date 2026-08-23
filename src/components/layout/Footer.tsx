import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="relative z-10 w-full bg-surface-dim border-t border-border mt-[120px]">
      <div className="max-w-[1280px] mx-auto px-6 py-20 grid grid-cols-2 md:grid-cols-5 gap-x-8 gap-y-12">
        {/* Brand */}
        <div className="col-span-2 md:col-span-1">
          <div className="flex items-center gap-3 mb-6">
            <Image
              src="/logo-brand.png"
              alt="DEZAI"
              title="DEZAI"
              width={44}
              height={44}
              className="object-contain max-h-12"
            />
          </div>
          <p className="text-on-surface-variant text-sm mb-4 leading-relaxed">
            UAE Registered Company.<br />
            Remote-First Global Team.
          </p>
          <p className="text-outline text-xs leading-relaxed">
            Building world-class digital products and the talent that creates them.
          </p>
        </div>

        {/* Services */}
        <nav aria-label="Services">
          <h5 className="font-bold mb-6 text-sm text-on-surface">Services</h5>
          <ul className="space-y-3 text-on-surface-variant text-sm">
            <li><Link href="/studio#services" className="hover:text-primary transition-colors block py-1">UI/UX Design</Link></li>
            <li><Link href="/studio#services" className="hover:text-primary transition-colors block py-1">Web Development</Link></li>
            <li><Link href="/studio#services" className="hover:text-primary transition-colors block py-1">Mobile App Dev</Link></li>
            <li><Link href="/studio#services" className="hover:text-primary transition-colors block py-1">AI Integrations</Link></li>
            <li><Link href="/studio#services" className="hover:text-primary transition-colors block py-1">Cloud Solutions</Link></li>
          </ul>
        </nav>

        {/* Learner Hub */}
        <nav aria-label="Learner Hub">
          <h5 className="font-bold mb-6 text-sm text-on-surface">Learner Hub</h5>
          <ul className="space-y-3 text-on-surface-variant text-sm">
            <li><Link href="/learners#paths" className="hover:text-primary transition-colors block py-1">Frontend Path</Link></li>
            <li><Link href="/learners#paths" className="hover:text-primary transition-colors block py-1">Backend Path</Link></li>
            <li><Link href="/learners#paths" className="hover:text-primary transition-colors block py-1">AI &amp; Data</Link></li>
            <li><Link href="/learners#paths" className="hover:text-primary transition-colors block py-1">Design Mentorship</Link></li>
            <li><Link href="/learners#paths" className="hover:text-primary transition-colors block py-1">All Paths</Link></li>
          </ul>
        </nav>

        {/* Connect */}
        <nav aria-label="Connect" className="col-span-2 md:col-span-1">
          <h5 className="font-bold mb-6 text-sm text-on-surface">Connect</h5>
          <ul className="space-y-3 text-on-surface-variant text-sm">
            <li><Link href="/contact" className="hover:text-primary transition-colors block py-1">Start a Project</Link></li>
            <li><Link href="/contact" className="hover:text-primary transition-colors block py-1">Apply as Learner</Link></li>
            <li><Link href="/portfolio" className="hover:text-primary transition-colors block py-1">Concept Showcase</Link></li>
            <li>
              <a href="mailto:info@dezai.org" className="hover:text-primary transition-colors flex items-center gap-2 py-1">
                <span className="material-symbols-outlined text-sm">mail</span>
                info@dezai.org
              </a>
            </li>
            <li>
              <a href="tel:+971552279475" className="hover:text-primary transition-colors flex items-center gap-2 py-1">
                <span className="material-symbols-outlined text-xs text-tertiary">phone</span>
                +971 55 227 9475
              </a>
            </li>
            <li>
              <a href="tel:+919898760869" className="hover:text-primary transition-colors flex items-center gap-2 py-1">
                <span className="material-symbols-outlined text-xs text-tertiary">phone</span>
                +91 98987 60869
              </a>
            </li>
            <li>
              <a href="tel:+916353362927" className="hover:text-primary transition-colors flex items-center gap-2 py-1">
                <span className="material-symbols-outlined text-xs text-tertiary">phone</span>
                +91 63533 62927
              </a>
            </li>
          </ul>
        </nav>

        {/* Social Media */}
        <nav aria-label="Social Media" className="col-span-2 md:col-span-1">
          <h5 className="font-bold mb-6 text-sm text-on-surface">Follow Us</h5>
          <ul className="space-y-3 text-on-surface-variant text-sm">
            <li>
              <a href="https://www.linkedin.com/company/dezaiai/" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors flex items-center gap-2 py-1">
                <span className="material-symbols-outlined text-sm">link</span>
                LinkedIn
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/dezai.ai/" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors flex items-center gap-2 py-1">
                <span className="material-symbols-outlined text-sm">link</span>
                Instagram
              </a>
            </li>
          </ul>
        </nav>
      </div>

      {/* Trust Strip & Copyright */}
      <div className="bg-surface border-t border-border mt-8">
        <div className="max-w-[1280px] mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-medium text-on-surface-variant">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5"><span className="material-symbols-outlined text-[14px]">shield</span> SSL Secured</span>
            <span className="flex items-center gap-1.5"><span className="material-symbols-outlined text-[14px]">business</span> UAE Registered Entity</span>
          </div>
          <div className="flex gap-6">
            <Link href="/privacy" className="hover:text-primary transition-colors py-2 md:py-0">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-primary transition-colors py-2 md:py-0">Terms &amp; Conditions</Link>
          </div>
          <div>© 2026 DEZAI. Architectural Digital Excellence.</div>
        </div>
      </div>
    </footer>
  );
}
