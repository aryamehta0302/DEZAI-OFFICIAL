'use client';

import { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { motion } from 'framer-motion';
import { SERVICES, BUDGET_RANGES, BACKGROUND_OPTIONS, PATH_OPTIONS } from '@/lib/constants';
import CustomSelect from '@/components/ui/CustomSelect';
import JsonLd from '@/components/layout/JsonLd';

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};
const stagger = { visible: { transition: { staggerChildren: 0.1 } } };

function BusinessFormContent() {
  const searchParams = useSearchParams();
  const serviceParam = searchParams.get('service');
  const planParam = searchParams.get('plan');
  const usdPriceParam = searchParams.get('usdPrice');

  const [formData, setFormData] = useState({
    name: '', email: '', company: '', budget_range: '', service_interest: '' , project_description: '',
  });
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    if (serviceParam || planParam || usdPriceParam) {
      const decodedService = serviceParam ? decodeURIComponent(serviceParam) : '';
      const decodedPlan = planParam ? decodeURIComponent(planParam) : '';
      
      let matchedService = '';
      if (decodedService) {
        const normalize = (str: string) => str.toLowerCase().replace(/[^a-z0-9]/g, '');
        const normDecoded = normalize(decodedService);
        const match = SERVICES.find(s => {
          const normTitle = normalize(s.title);
          return normTitle.includes(normDecoded) || normDecoded.includes(normTitle);
        });
        if (match) {
          matchedService = match.title;
        }
      }

      let defaultDesc = '';
      if (decodedService && decodedPlan) {
        defaultDesc = `I am interested in the ${decodedPlan} plan for ${decodedService}.`;
      } else if (decodedPlan) {
        defaultDesc = `I am interested in the ${decodedPlan} plan.`;
      }

      let matchedBudget = '';
      if (usdPriceParam) {
        const num = parseInt(decodeURIComponent(usdPriceParam).replace(/[^0-9]/g, ''), 10);
        if (!isNaN(num)) {
          if (num < 5000) matchedBudget = 'Under $5,000';
          else if (num < 15000) matchedBudget = '$5,000 - $15,000';
          else if (num < 50000) matchedBudget = '$15,000 - $50,000';
          else matchedBudget = '$50,000+';
        }
      }

      setFormData(prev => ({ 
        ...prev, 
        ...(matchedService && { service_interest: matchedService }),
        ...(defaultDesc && !prev.project_description && { project_description: defaultDesc }),
        ...(matchedBudget && !prev.budget_range && { budget_range: matchedBudget })
      }));
    }
  }, [serviceParam, planParam, usdPriceParam]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setError('');
    try {
      const res = await fetch('/api/business-lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || 'Submission failed');
      }
      setSuccess(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Something went wrong');
    } finally {
      setSubmitting(false);
    }
  };

  if (success) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="card-static rounded-2xl p-10 text-center"
      >
        <span className="material-symbols-outlined text-primary text-6xl mb-4 block">check_circle</span>
        <h3 className="text-2xl font-bold mb-2">Thank You!</h3>
        <p className="text-on-surface-variant">We&apos;ve received your inquiry and will get back to you within 24 hours.</p>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="card-static rounded-2xl p-8 md:p-10 space-y-6">
      <div>
        <h3 className="text-2xl font-bold mb-2">Start a Project</h3>
        <p className="text-on-surface-variant text-sm">Tell us about your vision and we&apos;ll help you build it.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="label-caps text-on-surface-variant mb-2 block">Name *</label>
          <input
            type="text"
            required
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="input-base"
            placeholder="Your name"
          />
        </div>
        <div>
          <label className="label-caps text-on-surface-variant mb-2 block">Email *</label>
          <input
            type="email"
            required
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="input-base"
            placeholder="you@company.com"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="label-caps text-on-surface-variant mb-2 block">Company</label>
          <input
            type="text"
            value={formData.company}
            onChange={(e) => setFormData({ ...formData, company: e.target.value })}
            className="input-base"
            placeholder="Company name"
          />
        </div>
        <CustomSelect
          label="Budget Range"
          value={formData.budget_range}
          onChange={(val) => setFormData({ ...formData, budget_range: val })}
          options={BUDGET_RANGES}
          placeholder="Select budget"
          accentColor="primary"
        />
      </div>

      <CustomSelect
        label="Service Interest"
        value={formData.service_interest}
        onChange={(val) => setFormData({ ...formData, service_interest: val })}
        options={SERVICES.map((s) => s.title)}
        placeholder="Select service"
        accentColor="primary"
      />

      <div>
        <label className="label-caps text-on-surface-variant mb-2 block">Project Description *</label>
        <textarea
          required
          rows={4}
          value={formData.project_description}
          onChange={(e) => setFormData({ ...formData, project_description: e.target.value })}
          className="input-base resize-none"
          placeholder="Tell us about your project..."
        />
      </div>

      {error && <p className="text-error text-sm">{error}</p>}

      <button
        type="submit"
        disabled={submitting}
        className="w-full bg-primary text-on-primary py-4 rounded-xl font-bold text-lg hover:bg-primary-dim hover:shadow-[0_8px_24px_rgba(26,43,90,0.15)] transition-all disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {submitting ? 'Submitting...' : 'Submit Inquiry'}
      </button>
    </form>
  );
}

function BusinessForm() {
  return (
    <Suspense fallback={<div className="card-static rounded-2xl p-8 md:p-10 h-[560px] flex items-center justify-center text-outline">Loading Form...</div>}>
      <BusinessFormContent />
    </Suspense>
  );
}

function LearnerForm() {
  const [formData, setFormData] = useState({
    name: '', email: '', background: '', desired_path: '', portfolio_url: '', motivation: '',
  });
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setError('');
    try {
      const res = await fetch('/api/learner-apply', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || 'Submission failed');
      }
      setSuccess(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Something went wrong');
    } finally {
      setSubmitting(false);
    }
  };

  if (success) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="card-static rounded-2xl p-10 text-center"
      >
        <span className="material-symbols-outlined text-primary text-6xl mb-4 block">school</span>
        <h3 className="text-2xl font-bold mb-2">Application Received!</h3>
        <p className="text-on-surface-variant">Welcome to the DEZAI Learners community. We&apos;ll be in touch soon.</p>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="card-static rounded-2xl p-8 md:p-10 space-y-6">
      <div>
        <h3 className="text-2xl font-bold mb-2">Apply as a Learner</h3>
        <p className="text-on-surface-variant text-sm">Start your journey towards becoming a world-class professional.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="label-caps text-on-surface-variant mb-2 block">Name *</label>
          <input
            type="text"
            required
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="input-base"
            placeholder="Your name"
          />
        </div>
        <div>
          <label className="label-caps text-on-surface-variant mb-2 block">Email *</label>
          <input
            type="email"
            required
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="input-base"
            placeholder="you@email.com"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <CustomSelect
          label="Background"
          value={formData.background}
          onChange={(val) => setFormData({ ...formData, background: val })}
          options={BACKGROUND_OPTIONS}
          placeholder="Select background"
          required
          accentColor="tertiary"
        />
        <CustomSelect
          label="Desired Path"
          value={formData.desired_path}
          onChange={(val) => setFormData({ ...formData, desired_path: val })}
          options={PATH_OPTIONS}
          placeholder="Select path"
          required
          accentColor="tertiary"
        />
      </div>

      <div>
        <label className="label-caps text-on-surface-variant mb-2 block">Portfolio URL</label>
        <input
          type="url"
          value={formData.portfolio_url}
          onChange={(e) => setFormData({ ...formData, portfolio_url: e.target.value })}
          className="input-base"
          placeholder="https://your-portfolio.com"
        />
      </div>

      <div>
        <label className="label-caps text-on-surface-variant mb-2 block">Why DEZAI? *</label>
        <textarea
          required
          rows={4}
          value={formData.motivation}
          onChange={(e) => setFormData({ ...formData, motivation: e.target.value })}
          className="input-base resize-none"
          placeholder="Tell us why you want to join DEZAI Learners..."
        />
      </div>

      {error && <p className="text-error text-sm">{error}</p>}

      <button
        type="submit"
        disabled={submitting}
        className="w-full bg-primary text-on-tertiary py-4 rounded-xl font-bold text-lg hover:bg-primary-dim hover:shadow-[0_8px_24px_rgba(212,168,83,0.15)] transition-all disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {submitting ? 'Submitting...' : 'Submit Application'}
      </button>
    </form>
  );
}

export default function ContactPage() {
  const contactSchema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "name": "Contact DEZAI",
    "description": "Start a project with DEZAI Studio or apply to join DEZAI Learners mentorship program.",
    "url": "https://dezai.org/contact",
    "mainEntity": {
      "@type": "Organization",
      "name": "DEZAI",
      "url": "https://dezai.org",
      "email": "info@dezai.org",
      "telephone": "+971552279475",
      "areaServed": "Global"
    }
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://dezai.org"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Contact",
        "item": "https://dezai.org/contact"
      }
    ]
  };

  return (
    <>
      <JsonLd schema={[contactSchema, breadcrumbSchema]} />
      {/* Hero */}
      <section className="pt-32 pb-16 relative">
        <div className="max-w-[1280px] mx-auto px-6">
          <motion.div initial="hidden" animate="visible" variants={stagger} className="text-center max-w-3xl mx-auto">
            <motion.h1
              variants={fadeInUp}
              className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6"
              style={{ letterSpacing: '-0.04em' }}
            >
              Let&apos;s Connect.
            </motion.h1>
            <motion.p variants={fadeInUp} className="text-on-surface-variant text-lg max-w-xl mx-auto leading-relaxed">
              Whether you&apos;re a business looking to scale or a learner ready to grow, we&apos;d love to hear from you.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Forms */}
      <section className="pb-[120px]">
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <BusinessForm />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <LearnerForm />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="pb-[120px]">
        <div className="max-w-[1280px] mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="card-static rounded-2xl p-12 max-w-2xl mx-auto"
          >
            <h3 className="text-xl font-bold mb-6">Other Ways to Reach Us</h3>
            <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
              <a href="mailto:info@dezai.org" className="flex items-center gap-3 text-on-surface-variant hover:text-primary transition-colors">
                <span className="material-symbols-outlined text-primary">support_agent</span>
                <div>
                  <div className="text-[10px] text-left text-outline label-caps">Direct Support</div>
                  <div className="text-sm">info@dezai.org</div>
                </div>
              </a>
              <a href="tel:+971552279475" className="flex items-center gap-3 text-on-surface-variant hover:text-primary transition-colors">
                <span className="material-symbols-outlined text-primary">phone</span>
                <div>
                  <div className="text-[10px] text-left text-outline label-caps">Support Hotline</div>
                  <div className="text-sm">+971 55 227 9475</div>
                </div>
              </a>
            </div>
            <div className="mt-6 flex justify-center gap-3 text-on-surface-variant/60 text-sm">
              <span className="flex items-center gap-1">
                <span className="material-symbols-outlined text-xs text-primary">verified</span>
                UAE Registered
              </span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <span className="material-symbols-outlined text-xs text-primary">public</span>
                Remote-First Global Team
              </span>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}

