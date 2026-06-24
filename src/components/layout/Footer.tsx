import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="relative z-10 w-full glass-card-static border-t border-white/5 mt-[120px]">
      <div className="max-w-[1280px] mx-auto px-6 py-20 grid grid-cols-1 md:grid-cols-4 gap-12">
        {/* Brand */}
        <div className="col-span-1">
          <div className="flex items-center gap-3 mb-6">
            <Image
              src="/logo-brand.png"
              alt="DEZAI"
              width={48}
              height={48}
              className="object-contain drop-shadow-[0_0_8px_rgba(37,99,235,0.3)]"
            />
            <span className="text-2xl font-bold text-primary">DEZAI</span>
          </div>
          <p className="text-on-surface-variant text-sm mb-4 leading-relaxed">
            UAE Registered Company.<br />
            Remote-First Global Team.
          </p>
          <p className="text-on-surface-variant/60 text-xs leading-relaxed">
            Building world-class digital products and the talent that creates them.
          </p>
        </div>

        {/* Services */}
        <div>
          <h5 className="font-bold mb-6 text-sm">Services</h5>
          <ul className="space-y-3 text-on-surface-variant text-sm">
            <li><Link href="/studio" className="hover:text-tertiary transition-colors">UI/UX Design</Link></li>
            <li><Link href="/studio" className="hover:text-tertiary transition-colors">Web Development</Link></li>
            <li><Link href="/studio" className="hover:text-tertiary transition-colors">Mobile App Dev</Link></li>
            <li><Link href="/studio" className="hover:text-tertiary transition-colors">AI Integrations</Link></li>
            <li><Link href="/studio" className="hover:text-tertiary transition-colors">Cloud Solutions</Link></li>
          </ul>
        </div>

        {/* Learner Hub */}
        <div>
          <h5 className="font-bold mb-6 text-sm">Learner Hub</h5>
          <ul className="space-y-3 text-on-surface-variant text-sm">
            <li><Link href="/learners" className="hover:text-tertiary transition-colors">Frontend Path</Link></li>
            <li><Link href="/learners" className="hover:text-tertiary transition-colors">Backend Path</Link></li>
            <li><Link href="/learners" className="hover:text-tertiary transition-colors">AI & Data</Link></li>
            <li><Link href="/learners" className="hover:text-tertiary transition-colors">Design Mentorship</Link></li>
            <li><Link href="/learners" className="hover:text-tertiary transition-colors">All Paths</Link></li>
          </ul>
        </div>

        {/* Connect */}
        <div>
          <h5 className="font-bold mb-6 text-sm">Connect</h5>
          <ul className="space-y-3 text-on-surface-variant text-sm">
            <li><Link href="/contact" className="hover:text-tertiary transition-colors">Start a Project</Link></li>
            <li><Link href="/contact" className="hover:text-tertiary transition-colors">Apply as Learner</Link></li>
            <li><Link href="/portfolio" className="hover:text-tertiary transition-colors">Concept Showcase</Link></li>
            <li>
              <a href="mailto:team.dezaiai@gmail.com" className="hover:text-tertiary transition-colors flex items-center gap-2">
                <span className="material-symbols-outlined text-xs text-tertiary">support_agent</span>
                team.dezaiai@gmail.com
              </a>
            </li>
            <li>
              <a href="tel:+971552279475" className="hover:text-tertiary transition-colors flex items-center gap-2">
                <span className="material-symbols-outlined text-xs text-tertiary">phone</span>
                +971 55 227 9475
              </a>
            </li>
            <li className="pt-2 border-t border-white/5">
              <Link href="/privacy" className="hover:text-tertiary transition-colors">Privacy Policy</Link>
            </li>
            <li>
              <Link href="/terms" className="hover:text-tertiary transition-colors">Terms &amp; Conditions</Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Copyright */}
      <div className="max-w-[1280px] mx-auto px-6 py-6 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-xs label-caps text-on-surface-variant/40">
        <div>© 2025 DEZAI. Architectural Digital Excellence.</div>
        <div className="flex gap-6">
          <Link href="/privacy" className="hover:text-primary transition-colors">Privacy Policy</Link>
          <Link href="/terms" className="hover:text-primary transition-colors">Terms &amp; Conditions</Link>
        </div>
        <div>UAE Registered • Remote-First Global Team</div>
      </div>
    </footer>
  );
}
