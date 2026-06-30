import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="relative z-10 w-full bg-surface-dim border-t border-border mt-[120px]">
      <div className="max-w-[1280px] mx-auto px-6 py-20 grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-12">
        {/* Brand */}
        <div className="col-span-2 md:col-span-1">
          <div className="flex items-center gap-3 mb-6">
            <Image
              src="/logo-brand.png"
              alt="DEZAI"
              width={140}
              height={44}
              className="object-contain max-h-12 w-auto"
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
            <li><Link href="/studio" className="hover:text-primary transition-colors">UI/UX Design</Link></li>
            <li><Link href="/studio" className="hover:text-primary transition-colors">Web Development</Link></li>
            <li><Link href="/studio" className="hover:text-primary transition-colors">Mobile App Dev</Link></li>
            <li><Link href="/studio" className="hover:text-primary transition-colors">AI Integrations</Link></li>
            <li><Link href="/studio" className="hover:text-primary transition-colors">Cloud Solutions</Link></li>
          </ul>
        </nav>

        {/* Learner Hub */}
        <nav aria-label="Learner Hub">
          <h5 className="font-bold mb-6 text-sm text-on-surface">Learner Hub</h5>
          <ul className="space-y-3 text-on-surface-variant text-sm">
            <li><Link href="/learners" className="hover:text-primary transition-colors">Frontend Path</Link></li>
            <li><Link href="/learners" className="hover:text-primary transition-colors">Backend Path</Link></li>
            <li><Link href="/learners" className="hover:text-primary transition-colors">AI &amp; Data</Link></li>
            <li><Link href="/learners" className="hover:text-primary transition-colors">Design Mentorship</Link></li>
            <li><Link href="/learners" className="hover:text-primary transition-colors">All Paths</Link></li>
          </ul>
        </nav>

        {/* Connect */}
        <nav aria-label="Connect" className="col-span-2 md:col-span-1">
          <h5 className="font-bold mb-6 text-sm text-on-surface">Connect</h5>
          <ul className="space-y-3 text-on-surface-variant text-sm">
            <li><Link href="/contact" className="hover:text-primary transition-colors">Start a Project</Link></li>
            <li><Link href="/contact" className="hover:text-primary transition-colors">Apply as Learner</Link></li>
            <li><Link href="/portfolio" className="hover:text-primary transition-colors">Concept Showcase</Link></li>
            <li>
              <a href="mailto:team.dezaiai@gmail.com" className="hover:text-primary transition-colors flex items-center gap-2">
                <span className="material-symbols-outlined text-xs text-tertiary">support_agent</span>
                team.dezaiai@gmail.com
              </a>
            </li>
            <li>
              <a href="tel:+971552279475" className="hover:text-primary transition-colors flex items-center gap-2">
                <span className="material-symbols-outlined text-xs text-tertiary">phone</span>
                +971 55 227 9475
              </a>
            </li>
            <li>
              <a href="tel:+919898760869" className="hover:text-primary transition-colors flex items-center gap-2">
                <span className="material-symbols-outlined text-xs text-tertiary">phone</span>
                +91 98987 60869
              </a>
            </li>
            <li>
              <a href="tel:+916353362927" className="hover:text-primary transition-colors flex items-center gap-2">
                <span className="material-symbols-outlined text-xs text-tertiary">phone</span>
                +91 63533 62927
              </a>
            </li>
            <li className="pt-2 border-t border-border">
              <Link href="/privacy" className="hover:text-primary transition-colors">Privacy Policy</Link>
            </li>
            <li>
              <Link href="/terms" className="hover:text-primary transition-colors">Terms &amp; Conditions</Link>
            </li>
          </ul>
        </nav>
      </div>

      {/* Copyright */}
      <div className="max-w-[1280px] mx-auto px-6 py-8 border-t border-border flex flex-col lg:flex-row justify-between items-center gap-6 lg:gap-4 text-xs label-caps text-outline text-center lg:text-left">
        <div className="order-3 lg:order-1">© 2026 DEZAI. Architectural Digital Excellence.</div>
        <div className="flex flex-wrap justify-center gap-4 sm:gap-8 order-1 lg:order-2">
          <Link href="/privacy" className="hover:text-primary transition-colors">Privacy Policy</Link>
          <Link href="/terms" className="hover:text-primary transition-colors">Terms &amp; Conditions</Link>
        </div>
        <div className="order-2 lg:order-3 text-center lg:text-right">UAE Registered • Remote-First Global Team</div>
      </div>
    </footer>
  );
}
