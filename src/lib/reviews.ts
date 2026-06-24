export interface ReviewItem {
  id: number;
  name: string;
  location: string;
  rating: number;
  text: string;
  initials: string;
  avatarColor: string;
  companyOrPath: string;
}

export const CUSTOMER_REVIEWS: ReviewItem[] = [
  {
    id: 1,
    name: 'Marcus Vance',
    location: 'Austin, Texas, United States',
    rating: 5,
    text: 'We hired DEZAI to completely revamp our corporate website and the results have been phenomenal. Their web development team delivered an incredibly fast, highly responsive frontend architecture that looks beautiful on mobile and desktop alike. The page loading speeds dropped drastically, which immediately improved our user retention. Outstanding attention to detail.',
    initials: 'MV',
    avatarColor: 'bg-blue-500/20 text-blue-300 border-blue-500/30',
    companyOrPath: 'Revamp Client'
  },
  {
    id: 2,
    name: 'Priya Sharma',
    location: 'Mumbai, Maharashtra, India',
    rating: 4,
    text: 'The UI/UX design team at DEZAI helped us build an interactive prototype for our new fintech app. Their structural wireframing and user research were thorough. The modern interface layout is tailored beautifully for our target audience. Communication was a bit slow over one weekend, but the final deliverables were top-tier.',
    initials: 'PS',
    avatarColor: 'bg-amber-500/20 text-amber-300 border-amber-500/30',
    companyOrPath: 'Fintech Startup'
  },
  {
    id: 3,
    name: 'Alistair Cook',
    location: 'Sydney, New South Wales, Australia',
    rating: 5,
    text: 'DEZAI handled our complete cloud deployment and migration. They set up a resilient cloud architecture that guarantees zero-downtime, and we\'ve experienced seamless availability even during high-traffic product drops. Their focus on structural data protection gives our legal team immense peace of mind.',
    initials: 'AC',
    avatarColor: 'bg-emerald-500/20 text-emerald-300 border-emerald-500/30',
    companyOrPath: 'Cloud Migration'
  },
  {
    id: 4,
    name: 'Chloe Dubois',
    location: 'Paris, Île-de-France, France',
    rating: 4,
    text: 'We utilized their digital marketing and SEO campaigns to boost our brand authority. While our search engine visibility definitely improved and we saw a rise in organic traffic, the setup phase took much longer than initially promised in the project timeline. Good results, but project management could be tightened up.',
    initials: 'CD',
    avatarColor: 'bg-indigo-500/20 text-indigo-300 border-indigo-500/30',
    companyOrPath: 'SEO Campaign'
  },
  {
    id: 5,
    name: 'Sarah Jenkins',
    location: 'Toronto, Ontario, Canada',
    rating: 5,
    text: 'Our e-commerce storefront needed an entire overhaul to reduce cart abandonment. DEZAI engineered a brilliant purchase funnel with an integrated checkout architecture that is completely frictionless. Our conversion rates are up by 35% since launch. Their client-first approach made the collaboration incredibly transparent.',
    initials: 'SJ',
    avatarColor: 'bg-cyan-500/20 text-cyan-300 border-cyan-500/30',
    companyOrPath: 'E-commerce Overhaul'
  },
  {
    id: 6,
    name: 'Hans Müller',
    location: 'Frankfurt, Hesse, Germany',
    rating: 4,
    text: 'DEZAI developed a cross-platform mobile application for our logistics firm. The fluid layout transitions and clean code base make the app feel incredibly premium on both iOS and Android devices. We had a small issue with payment gateway synchronization early on, but their team fixed it quickly.',
    initials: 'HM',
    avatarColor: 'bg-purple-500/20 text-purple-300 border-purple-500/30',
    companyOrPath: 'Logistics App'
  },
  {
    id: 7,
    name: 'Fatma Al-Mansoori',
    location: 'Dubai, UAE',
    rating: 5,
    text: 'Excellent work from the DEZAI team. They perfectly executed our high-performance custom corporate profiles and strategic landing pages. They live up to their motto: "Design. Develop. Deliver." The visual concept across all web application layouts is flawlessly clean and modern.',
    initials: 'FA',
    avatarColor: 'bg-rose-500/20 text-rose-300 border-rose-500/30',
    companyOrPath: 'PropTech UAE'
  },
  {
    id: 8,
    name: 'Kenji Takahashi',
    location: 'Tokyo, Tokyo Prefecture, Japan',
    rating: 4,
    text: 'Very reliable cloud architecture deployment. DEZAI configured our system for scalable bandwidth, allowing us to manage seasonal spikes seamlessly. The technical stack they chose was highly progressive. I would give five stars if the onboarding documentation they provided was slightly more comprehensive.',
    initials: 'KT',
    avatarColor: 'bg-teal-500/20 text-teal-300 border-teal-500/30',
    companyOrPath: 'Infrastructure Scaling'
  },
  {
    id: 9,
    name: 'Carlos Mendez',
    location: 'Monterrey, Nuevo León, Mexico',
    rating: 5,
    text: 'DEZAI’s digital marketing traffic-acquisition blueprint helped scale our lead acquisition significantly. Their visibility engineering and tailored SEO strategies targeted exactly the keywords we needed to dominate our regional market. Phenomenal ROI.',
    initials: 'CM',
    avatarColor: 'bg-yellow-500/20 text-yellow-300 border-yellow-500/30',
    companyOrPath: 'Marketing ROI'
  },
  {
    id: 10,
    name: 'Rohan Desai',
    location: 'Vadodara, Gujarat, India',
    rating: 5,
    text: 'Work with DEZAI if you want premium execution. They took our chaotic startup concept and transformed it into a beautifully structured web platform with a seamless customer purchase funnel. Their collaborative workflow means they actually listen closely to operational requirements.',
    initials: 'RD',
    avatarColor: 'bg-orange-500/20 text-orange-300 border-orange-500/30',
    companyOrPath: 'Startup Launch'
  },
  {
    id: 11,
    name: 'David Campbell',
    location: 'Edinburgh, Scotland, United Kingdom',
    rating: 5,
    text: 'We hired DEZAI for an urgent strategic landing page deployment. They delivered a high-conversion design system built entirely on our specific market needs. The page is responsive across all devices and instantly improved our ad campaign conversion metrics.',
    initials: 'DC',
    avatarColor: 'bg-violet-500/20 text-violet-300 border-violet-500/30',
    companyOrPath: 'Ad Campaigns'
  },
  {
    id: 12,
    name: 'Amara Okafor',
    location: 'Lagos, Lagos State, Nigeria',
    rating: 5,
    text: 'Excellent experience working with DEZAI on our e-commerce solutions. The streamlined inventory dashboards they built make managing our physical stock incredibly easy for our warehouse team. Secure payment gateways were integrated without a single glitch.',
    initials: 'AO',
    avatarColor: 'bg-fuchsia-500/20 text-fuchsia-300 border-fuchsia-500/30',
    companyOrPath: 'Inventory Systems'
  },
  {
    id: 13,
    name: 'Isabella Rossi',
    location: 'Milan, Lombardy, Italy',
    rating: 5,
    text: 'DEZAI brings progressive design frameworks to the table. They built a custom corporate website for our architectural firm that is stunningly elegant and perfectly balanced for user navigation. Their extreme attention to detail is evident in every single page layout.',
    initials: 'IR',
    avatarColor: 'bg-lime-500/20 text-lime-300 border-lime-500/30',
    companyOrPath: 'Architectural Portal'
  },
  {
    id: 14,
    name: 'Noor Al-Saeed',
    location: 'Kuwait City, Al Asimah Governorate, Kuwait',
    rating: 5,
    text: 'Truly premium execution! DEZAI built our custom corporate website using highly progressive design frameworks that have perfectly streamlined our online presence. Their listening and communication skills are wonderful.',
    initials: 'NA',
    avatarColor: 'bg-pink-500/20 text-pink-300 border-pink-500/30',
    companyOrPath: 'Corporate Identity'
  },
  {
    id: 15,
    name: 'Sneha Desai',
    location: 'Vadodara, Gujarat, India',
    rating: 5,
    text: 'DEZAI is hands-down the best digital transformation partner we’ve worked with. They built a custom corporate website that perfectly handles all our complex operational requirements. Their client-first approach makes them a reliable partner.',
    initials: 'SD',
    avatarColor: 'bg-sky-500/20 text-sky-300 border-sky-500/30',
    companyOrPath: 'Digital Transformation'
  }
];

export const LEARNER_REVIEWS: ReviewItem[] = [
  {
    id: 1,
    name: 'Aarav Mehta',
    location: 'Ahmedabad, Gujarat, India',
    rating: 5,
    text: 'Joining the DEZAI Learners program was a turning point for my career. Instead of getting a standard rejection letter, they brought me into this mentorship-driven initiative where I got to build real-world web apps. The practical portfolio-building opportunities allowed me to land a freelance gig within three months. Highly recommend to aspiring devs!',
    initials: 'AM',
    avatarColor: 'bg-amber-500/20 text-amber-300 border-amber-500/30',
    companyOrPath: 'Frontend Path'
  },
  {
    id: 2,
    name: 'Elena Rostova',
    location: 'Moscow, Moscow Oblast, Russia',
    rating: 5,
    text: 'As a participant in the DEZAI Learners program, I can confidently say it fulfills its mission of transforming potential into capability. The industry-guided learning modules and direct expert support helped me master frontend frameworks far faster than any traditional course could.',
    initials: 'ER',
    avatarColor: 'bg-blue-500/20 text-blue-300 border-blue-500/30',
    companyOrPath: 'React Native Track'
  },
  {
    id: 3,
    name: 'Sofia Nielsen',
    location: 'Copenhagen, Capital Region, Denmark',
    rating: 4,
    text: 'The DEZAI Learners initiative gave our community\'s young tech enthusiasts a structured environment to gain real-world experience. Many of them have built stellar professional readiness and moved seamlessly into freelance roles. It is a wonderful talent development program, though slots fill up way too quickly.',
    initials: 'SN',
    avatarColor: 'bg-purple-500/20 text-purple-300 border-purple-500/30',
    companyOrPath: 'UI/UX Design Track'
  },
  {
    id: 4,
    name: 'Fatima Al-Sayed',
    location: 'Manama, Capital Governorate, Bahrain',
    rating: 5,
    text: '"Learn. Build. Grow." perfectly sums up my time with the DEZAI Learners initiative. The expert support helped me bridge the gap between academic theory and real product architecture. I came out with a rock-solid portfolio that immediately landed me an internship.',
    initials: 'FA',
    avatarColor: 'bg-rose-500/20 text-rose-300 border-rose-500/30',
    companyOrPath: 'Full Stack Track'
  },
  {
    id: 5,
    name: 'Samuel Adebayo',
    location: 'Abuja, Federal Capital Territory, Nigeria',
    rating: 5,
    text: 'The DEZAI Learners program saved my tech career. I lacked the industry experience needed for top tech roles, but their structured mentorship gave me practical project experience that transformed my capability. Truly a great talent development initiative.',
    initials: 'SA',
    avatarColor: 'bg-emerald-500/20 text-emerald-300 border-emerald-500/30',
    companyOrPath: 'Backend Path'
  },
  {
    id: 6,
    name: 'Vivek Shah',
    location: 'Vadodara, Gujarat, India',
    rating: 5,
    text: 'I joined DEZAI Learners to improve my professional readiness. Building real projects under the guidance of expert mentors helped me transition effortlessly into a freelance web development role. Their mission to transform ambition into achievement is the real deal.',
    initials: 'VS',
    avatarColor: 'bg-cyan-500/20 text-cyan-300 border-cyan-500/30',
    companyOrPath: 'Cloud & DevOps Track'
  },
  {
    id: 7,
    name: 'Ananya Iyer',
    location: 'Chennai, Tamil Nadu, India',
    rating: 5,
    text: 'DEZAI Learners doesn\'t just reject you; they provide structured mentorship and industry-guided learning to help you succeed. I was able to build a strong engineering portfolio that got me multiple job interviews.',
    initials: 'AI',
    avatarColor: 'bg-teal-500/20 text-teal-300 border-teal-500/30',
    companyOrPath: 'AI & Machine Learning'
  },
  {
    id: 8,
    name: 'Harsh Patel',
    location: 'Ahmedabad, Gujarat, India',
    rating: 5,
    text: '"From Learner to Leader" is absolutely accurate. The DEZAI Learners initiative gave me real project experience that bridged the gap between student life and professional engineering. The mentorship support is incredible.',
    initials: 'HP',
    avatarColor: 'bg-indigo-500/20 text-indigo-300 border-indigo-500/30',
    companyOrPath: 'Mobile App Track'
  },
  {
    id: 9,
    name: 'Meera Nair',
    location: 'Kochi, Kerala, India',
    rating: 5,
    text: 'The DEZAI Learners program completely transformed my career path. By learning by building on real-world projects, I acquired deep technical skills and improved my professional readiness significantly. Exceptional initiative!',
    initials: 'MN',
    avatarColor: 'bg-orange-500/20 text-orange-300 border-orange-500/30',
    companyOrPath: 'Frontend Path'
  },
  {
    id: 10,
    name: 'Sanjay Verma',
    location: 'Vadodara, Gujarat, India',
    rating: 4,
    text: 'As a participant in DEZAI Learners, the structured mentorship helped me build a great professional portfolio. The industry-guided learning modules are highly practical. It would be great if they had more interactive live webinars, but the async expert support is still wonderful.',
    initials: 'SV',
    avatarColor: 'bg-violet-500/20 text-violet-300 border-violet-500/30',
    companyOrPath: 'Full Stack Track'
  },
  {
    id: 11,
    name: 'Rajesh Mehta',
    location: 'Gandhinagar, Gujarat, India',
    rating: 5,
    text: 'The DEZAI Learners platform gave me the accessible pathways for skill development I couldn\'t find elsewhere. Their focus on learning by building helped me land a full-time tech role within their ecosystem. Truly grateful!',
    initials: 'RM',
    avatarColor: 'bg-pink-500/20 text-pink-300 border-pink-500/30',
    companyOrPath: 'DevOps Track'
  }
];
