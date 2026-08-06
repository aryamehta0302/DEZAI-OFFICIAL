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
    text: 'DEZAI completely rebuilt our corporate site. The new frontend is significantly faster and looks great across all devices. We\'ve seen a noticeable drop in bounce rates since the relaunch. Great attention to detail.',
    initials: 'MV',
    avatarColor: 'bg-blue-500/20 text-blue-300 border-blue-500/30',
    companyOrPath: 'Revamp Client'
  },
  {
    id: 2,
    name: 'Priya Sharma',
    location: 'Mumbai, Maharashtra, India',
    rating: 4,
    text: 'The design team helped us prototype our fintech app. They handled the wireframing and user research well, and the interface fits our audience perfectly. Communication lagged over one weekend, but the final output was solid.',
    initials: 'PS',
    avatarColor: 'bg-amber-500/20 text-amber-300 border-amber-500/30',
    companyOrPath: 'Fintech Startup'
  },
  {
    id: 3,
    name: 'Alistair Cook',
    location: 'Sydney, New South Wales, Australia',
    rating: 5,
    text: 'They managed our cloud migration from start to finish. The architecture they set up has been completely stable, even during our peak traffic drops. It\'s a huge relief for our compliance team to have the data structured properly.',
    initials: 'AC',
    avatarColor: 'bg-emerald-500/20 text-emerald-300 border-emerald-500/30',
    companyOrPath: 'Cloud Migration'
  },
  {
    id: 4,
    name: 'Chloe Dubois',
    location: 'Paris, Île-de-France, France',
    rating: 4,
    text: 'We worked with them on an SEO push to build our brand presence. Organic traffic has definitely improved, though the initial setup phase took longer than we planned. Happy with the results, but timelines could have been tighter.',
    initials: 'CD',
    avatarColor: 'bg-indigo-500/20 text-indigo-300 border-indigo-500/30',
    companyOrPath: 'SEO Campaign'
  },
  {
    id: 5,
    name: 'Sarah Jenkins',
    location: 'Toronto, Ontario, Canada',
    rating: 5,
    text: 'Our storefront needed an overhaul to fix cart abandonment. DEZAI rebuilt the checkout flow, making it much smoother. We\'ve seen a 35% increase in conversion rates since launch. They were very transparent throughout the project.',
    initials: 'SJ',
    avatarColor: 'bg-cyan-500/20 text-cyan-300 border-cyan-500/30',
    companyOrPath: 'E-commerce Overhaul'
  },
  {
    id: 6,
    name: 'Hans Müller',
    location: 'Frankfurt, Hesse, Germany',
    rating: 4,
    text: 'DEZAI built our cross-platform logistics app. The code is clean and it runs smoothly on both iOS and Android. There was a minor issue with the payment gateway early on, but their team resolved it quickly.',
    initials: 'HM',
    avatarColor: 'bg-purple-500/20 text-purple-300 border-purple-500/30',
    companyOrPath: 'Logistics App'
  },
  {
    id: 7,
    name: 'Fatma Al-Mansoori',
    location: 'Dubai, UAE',
    rating: 5,
    text: 'Great work from the team. They delivered our corporate profiles and landing pages exactly as requested. The design is clean, modern, and fits our brand perfectly.',
    initials: 'FA',
    avatarColor: 'bg-rose-500/20 text-rose-300 border-rose-500/30',
    companyOrPath: 'PropTech UAE'
  },
  {
    id: 8,
    name: 'Kenji Takahashi',
    location: 'Tokyo, Tokyo Prefecture, Japan',
    rating: 4,
    text: 'Solid infrastructure work. They set up our system to handle seasonal traffic spikes without issues. The tech stack is modern. The only minor downside was that the handover documentation could have been a bit more detailed.',
    initials: 'KT',
    avatarColor: 'bg-teal-500/20 text-teal-300 border-teal-500/30',
    companyOrPath: 'Infrastructure Scaling'
  },
  {
    id: 9,
    name: 'Carlos Mendez',
    location: 'Monterrey, Nuevo León, Mexico',
    rating: 5,
    text: 'Their marketing strategy helped us scale our lead generation. The targeted SEO campaigns hit the exact keywords we needed for our market. Really strong ROI on this project.',
    initials: 'CM',
    avatarColor: 'bg-yellow-500/20 text-yellow-300 border-yellow-500/30',
    companyOrPath: 'Marketing ROI'
  },
  {
    id: 10,
    name: 'Rohan Desai',
    location: 'Vadodara, Gujarat, India',
    rating: 5,
    text: 'If you need premium execution, work with DEZAI. They took our early concept and built it into a stable platform with a smooth purchase flow. They actually listened to our operational needs rather than just building from a template.',
    initials: 'RD',
    avatarColor: 'bg-orange-500/20 text-orange-300 border-orange-500/30',
    companyOrPath: 'Startup Launch'
  },
  {
    id: 11,
    name: 'David Campbell',
    location: 'Edinburgh, Scotland, United Kingdom',
    rating: 5,
    text: 'We needed a strategic landing page turned around quickly. They delivered a high-conversion design tailored to our market. It works perfectly on mobile and immediately improved our ad metrics.',
    initials: 'DC',
    avatarColor: 'bg-violet-500/20 text-violet-300 border-violet-500/30',
    companyOrPath: 'Ad Campaigns'
  },
  {
    id: 12,
    name: 'Amara Okafor',
    location: 'Lagos, Lagos State, Nigeria',
    rating: 5,
    text: 'Really good experience working with DEZAI on our e-commerce setup. The inventory dashboard they built makes tracking stock much easier for our warehouse team, and the payment gateway integration went without a hitch.',
    initials: 'AO',
    avatarColor: 'bg-fuchsia-500/20 text-fuchsia-300 border-fuchsia-500/30',
    companyOrPath: 'Inventory Systems'
  },
  {
    id: 13,
    name: 'Isabella Rossi',
    location: 'Milan, Lombardy, Italy',
    rating: 5,
    text: 'DEZAI brings a great design sensibility. They built a custom corporate site for our firm that looks elegant and is easy to navigate. You can tell they pay attention to the small details.',
    initials: 'IR',
    avatarColor: 'bg-lime-500/20 text-lime-300 border-lime-500/30',
    companyOrPath: 'Architectural Portal'
  },
  {
    id: 14,
    name: 'Noor Al-Saeed',
    location: 'Kuwait City, Al Asimah Governorate, Kuwait',
    rating: 5,
    text: 'Excellent execution. DEZAI built our corporate site using modern frameworks and really cleaned up our online presence. They were communicative and easy to work with throughout.',
    initials: 'NA',
    avatarColor: 'bg-pink-500/20 text-pink-300 border-pink-500/30',
    companyOrPath: 'Corporate Identity'
  },
  {
    id: 15,
    name: 'Sneha Desai',
    location: 'Vadodara, Gujarat, India',
    rating: 5,
    text: 'DEZAI has been a great technical partner. They built a corporate site that handles our complex operational needs perfectly. Their client-first approach makes them very reliable.',
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
    text: 'Joining the Learners program was a turning point. Instead of just studying theory, I got to work on actual web apps. Building a real portfolio helped me land my first freelance client within three months.',
    initials: 'AM',
    avatarColor: 'bg-amber-500/20 text-amber-300 border-amber-500/30',
    companyOrPath: 'Frontend Path'
  },
  {
    id: 2,
    name: 'Elena Rostova',
    location: 'Moscow, Moscow Oblast, Russia',
    rating: 5,
    text: 'The program really bridges the gap between learning and doing. Having industry mentors guide me through real projects helped me pick up frontend frameworks way faster than I did on my own.',
    initials: 'ER',
    avatarColor: 'bg-blue-500/20 text-blue-300 border-blue-500/30',
    companyOrPath: 'React Native Track'
  },
  {
    id: 3,
    name: 'Sofia Nielsen',
    location: 'Copenhagen, Capital Region, Denmark',
    rating: 4,
    text: 'DEZAI Learners gave me a structured way to get hands-on experience. It\'s a great stepping stone for anyone looking to transition into a freelance or junior role. The only downside is that spots are highly competitive.',
    initials: 'SN',
    avatarColor: 'bg-purple-500/20 text-purple-300 border-purple-500/30',
    companyOrPath: 'UI/UX Design Track'
  },
  {
    id: 4,
    name: 'Fatima Al-Sayed',
    location: 'Manama, Capital Governorate, Bahrain',
    rating: 5,
    text: 'Working with expert mentors helped me connect what I learned in school with actual product architecture. I walked away with a strong portfolio that helped me secure an internship.',
    initials: 'FA',
    avatarColor: 'bg-rose-500/20 text-rose-300 border-rose-500/30',
    companyOrPath: 'Full Stack Track'
  },
  {
    id: 5,
    name: 'Samuel Adebayo',
    location: 'Abuja, Federal Capital Territory, Nigeria',
    rating: 5,
    text: 'I had the theory down but lacked the practical experience companies look for. The structured mentorship at DEZAI gave me the hands-on project work I needed to actually feel confident in interviews.',
    initials: 'SA',
    avatarColor: 'bg-emerald-500/20 text-emerald-300 border-emerald-500/30',
    companyOrPath: 'Backend Path'
  },
  {
    id: 6,
    name: 'Vivek Shah',
    location: 'Vadodara, Gujarat, India',
    rating: 5,
    text: 'I joined the program to get more industry-ready. Building real projects with feedback from senior devs helped me transition smoothly into doing freelance web development.',
    initials: 'VS',
    avatarColor: 'bg-cyan-500/20 text-cyan-300 border-cyan-500/30',
    companyOrPath: 'Cloud & DevOps Track'
  },
  {
    id: 7,
    name: 'Ananya Iyer',
    location: 'Chennai, Tamil Nadu, India',
    rating: 5,
    text: 'Instead of just leaving you to figure it out, they provide structured mentorship. Building a real engineering portfolio through the program directly helped me get job interviews.',
    initials: 'AI',
    avatarColor: 'bg-teal-500/20 text-teal-300 border-teal-500/30',
    companyOrPath: 'AI & Machine Learning'
  },
  {
    id: 8,
    name: 'Harsh Patel',
    location: 'Ahmedabad, Gujarat, India',
    rating: 5,
    text: 'The program bridges the gap between being a student and working as an engineer. Getting real project experience with mentor support makes a huge difference.',
    initials: 'HP',
    avatarColor: 'bg-indigo-500/20 text-indigo-300 border-indigo-500/30',
    companyOrPath: 'Mobile App Track'
  },
  {
    id: 9,
    name: 'Meera Nair',
    location: 'Kochi, Kerala, India',
    rating: 5,
    text: 'Learning by actually building real-world projects completely changed my approach. It gave me the technical depth and professional readiness I was missing.',
    initials: 'MN',
    avatarColor: 'bg-orange-500/20 text-orange-300 border-orange-500/30',
    companyOrPath: 'Frontend Path'
  },
  {
    id: 10,
    name: 'Sanjay Verma',
    location: 'Vadodara, Gujarat, India',
    rating: 4,
    text: 'The mentorship helped me put together a solid portfolio. The project modules are very practical. I wish there were more live interactive sessions, but the async support is still really good.',
    initials: 'SV',
    avatarColor: 'bg-violet-500/20 text-violet-300 border-violet-500/30',
    companyOrPath: 'Full Stack Track'
  },
  {
    id: 11,
    name: 'Rajesh Mehta',
    location: 'Gandhinagar, Gujarat, India',
    rating: 5,
    text: 'The platform gave me a clear path to develop my skills. Focusing on building actual projects helped me land a full-time role. Really grateful for the experience.',
    initials: 'RM',
    avatarColor: 'bg-pink-500/20 text-pink-300 border-pink-500/30',
    companyOrPath: 'DevOps Track'
  }
];
