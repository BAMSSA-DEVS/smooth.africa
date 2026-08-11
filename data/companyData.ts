export interface Product {
  id: string;
  name: string;
  tagline: string;
  description: string;
  status: 'live' | 'beta' | 'coming-soon';
  iconName: string;
  color: string;
  features: string[];
  linkText: string;
  externalLink?: string;
}

export interface ValueItem {
  id: string;
  title: string;
  statement: string;
  iconName: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  image: string;
  linkedin: string;
  email: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'office' | 'team' | 'community' | 'workshops' | 'launches' | 'behind-scenes';
  categoryLabel: string;
  imageUrl: string;
  description: string;
}

export interface MetricItem {
  id: string;
  label: string;
  value: number;
  prefix?: string;
  suffix?: string;
}

export interface TestimonialItem {
  id: string;
  quote: string;
  name: string;
  role: string;
  company: string;
  image: string;
}

export const companyData = {
  hero: {
    headline: "Building Africa's Next Generation of Digital Products.",
    description:
      "We design, build, and scale software that helps businesses, governments, and communities operate more efficiently across Africa.",
    cta1: "Explore Products",
    cta2: "Talk to Us",
  },

  story: {
    title: "Our Story",
    paragraphs: [
      "Smooth Africa wasn't created to chase trends or build software for the sake of technology. It began with a simple observation: across Africa, talented people and ambitious organizations were spending too much time overcoming friction instead of creating value.",
      "We kept asking ourselves a simple question: What if technology was designed around the realities of the people using it, rather than expecting people to adapt to the technology? That question became the foundation of everything we build.",
      "From businesses managing daily operations to institutions serving communities, we saw the same pattern, important work slowed down by disconnected systems, manual processes, unnecessary complexity, and tools that weren't built for the environments they were meant to serve. We believed there had to be a better way.",
      "Today, Smooth Africa builds practical digital products that simplify work, strengthen trust, and help organizations operate with greater confidence. Each product solves a specific problem, but they all share the same purpose: removing friction so people can focus on what matters most.",
      "As new challenges emerge, we'll continue building new products. Our ambition isn't to become known for a single platform, it's to become the company people trust whenever meaningful problems need thoughtful technology.",
    ],
  },

  products: [
    {
      id: "smoothballot",
      name: "SmoothBallot",
      tagline: "Digital election management platform.",
      description:
        "From candidate registration to results publication, SmoothBallot replaces paper-based electoral processes with a secure, auditable digital platform built for institutional use.",
      status: "live" as const,
      iconName: "Vote",
      color: "blue",
      features: [
        "Secure voter & candidate registration",
        "Virtual voting system",
        "Contest management",
        "Real-time results tabulation",
        "Complete audit trail",
      ],
      linkText: "Learn More",
      externalLink: "https://smoothballot.com/",
    },
    {
      id: "smoothticket",
      name: "SmoothTicket",
      tagline: "Digital event ticketing and access management.",
      description:
        "A complete ticketing platform for African events. It handles secure ticket generation, real-time access control, and revenue analytics all in one place.",
      status: "live" as const,
      iconName: "Ticket",
      color: "emerald",
      features: [
        "Secure QR ticket generation",
        "Real-time scan synchronization",
        "Fraud prevention & transfer limits",
        "Revenue & attendance analytics",
      ],
      linkText: "Learn More",
      externalLink: "https://tickets.smooth.africa/",
    },
    {
      id: "future",
      name: "Next Product",
      tagline: "Something new is coming.",
      description:
        "We're working on something we can't talk about yet. If you have a genuine operational problem you haven't found good software for, we'd genuinely like to hear about it.",
      status: "coming-soon" as const,
      iconName: "Sparkles",
      color: "slate",
      features: [],
      linkText: "Get Notified",
    },
  ] as Product[],

  visionMission: {
    vision: {
      title: "Vision",
      statement:
        "Empowering Africa through technology that removes friction from everyday operations.",
      detail:
        "We see a continent where the quality of your software doesn't determine whether your organization succeeds. Where small businesses run with the same operational clarity as large enterprises. Where paper and guesswork are replaced by systems that just work.",
    },
    mission: {
      title: "Mission",
      statement:
        "Design practical software that simplifies work, improves transparency, and enables organizations to grow confidently.",
      detail:
        "Every product we build has to answer this: does it make the work genuinely easier? We hold that question over every feature, every screen, every decision. Elegance is not just aesthetic, it's functional.",
    },
  },

  values: [
    {
      id: "real-problems",
      title: "Build for Real Problems",
      statement:
        "We create products because people genuinely need them, not because technology is trendy. Every product we've shipped started with someone explaining a problem that was costing them time, money, or sanity.",
      iconName: "Target",
    },
    {
      id: "simplicity",
      title: "Obsess Over Simplicity",
      statement:
        "If software requires a manual, we haven't finished designing it. Simplicity isn't about removing features, it's about making every feature feel like it belongs exactly where it is.",
      iconName: "Minimize2",
    },
    {
      id: "trust",
      title: "Trust First",
      statement:
        "Security, privacy, and transparency influence every decision we make. The organizations using our products are trusting us with their data and their operations. We take that seriously.",
      iconName: "ShieldCheck",
    },
    {
      id: "purpose",
      title: "Ship with Purpose",
      statement:
        "Progress beats perfection, but quality is never compromised. We'd rather ship something genuinely good than something barely finished. Speed and integrity aren't opposites.",
      iconName: "Rocket",
    },
    {
      id: "long-term",
      title: "Think Long-Term",
      statement:
        "We build products intended to serve organizations for decades. Short-term shortcuts create long-term burdens. We make decisions based on what's right at scale, not what's easiest right now.",
      iconName: "Clock",
    },
  ] as ValueItem[],

  team: [
    {
      id: "founder-1",
      name: "Prince (Onyekachukwu) Ogbonna",
      role: "Co-Founder & Team Lead",
      bio: "Prince drives the strategic vision at Smooth Africa. With a deep passion for solving complex operational challenges through elegant digital products, he leads the team in building tools that empower African organizations to operate with greater efficiency and transparency.",
      image: "/team/prince.jpg",
      linkedin: "https://www.linkedin.com/in/prince-ogbonna-7436041b8/",
      email: "hello@smooth.africa",
    },
    {
      id: "founder-2",
      name: "Emmanuel Asante",
      role: "Co-Founder & CTO",
      bio: "Software engineer and systems architect. Previously led engineering at two venture-backed startups in Accra. Believes most software is far more complicated than it needs to be.",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80",
      linkedin: "#",
      email: "emmanuel@smooth.africa",
    },
    {
      id: "member-3",
      name: "Fatima Al-Rashid",
      role: "Head of Product",
      bio: "UX researcher turned product manager. Spent three years studying how SMEs in East Africa manage operations before joining Smooth Africa to help fix what she found.",
      image:
        "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=600&q=80",
      linkedin: "#",
      email: "fatima@smooth.africa",
    },
    {
      id: "member-4",
      name: "Kwame Boateng",
      role: "Lead Engineer",
      bio: "Full-stack engineer with deep expertise in offline-first architectures and mobile systems. Builds the parts of our products that work even when the internet doesn't.",
      image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=600&q=80",
      linkedin: "#",
      email: "kwame@smooth.africa",
    },
    {
      id: "member-5",
      name: "Amina Diallo",
      role: "Head of Customer Success",
      bio: "Former operations manager who switched sides. Understands exactly what it's like to depend on software that wasn't built for your context, and makes sure our customers never feel that way.",
      image:
        "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=600&q=80",
      linkedin: "#",
      email: "amina@smooth.africa",
    },
    {
      id: "member-6",
      name: "Chidi Nwachukwu",
      role: "Design Lead",
      bio: "Visual and interaction designer obsessed with clarity. If a screen has more elements than it needs, Chidi will find them and remove them. Studied architecture before switching to software design.",
      image:
        "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=600&q=80",
      linkedin: "#",
      email: "chidi@smooth.africa",
    },
  ] as TeamMember[],

  gallery: [
    {
      id: "g1",
      title: "Award Recognition",
      category: "events" as const,
      categoryLabel: "Events",
      imageUrl: "/gallery/img1.jpg",
      description: "Receiving recognition for our impact in the tech space.",
    },
    {
      id: "g2",
      title: "Student Innovators Mixer",
      category: "community" as const,
      categoryLabel: "Community",
      imageUrl: "/gallery/img2.jpg",
      description: "Engaging with student entrepreneurs and innovators.",
    },
    {
      id: "g3",
      title: "Team Hangout",
      category: "team" as const,
      categoryLabel: "Team",
      imageUrl: "/gallery/img3.jpg",
      description: "The team unwinding and sharing ideas over drinks.",
    },

    {
      id: "g5",
      title: "Milestone Celebration",
      category: "milestones" as const,
      categoryLabel: "Milestones",
      imageUrl: "/gallery/img5.jpg",
      description: "Celebrating the disbursement of over N2,000,000 via Smooth contests.",
    },
    {
      id: "g6",
      title: "Award of Recognition",
      category: "milestones" as const,
      categoryLabel: "Milestones",
      imageUrl: "/gallery/img6.jpg",
      description: "Recognized as Brand of the Year.",
    },

    {
      id: "g8",
      title: "Team Outing",
      category: "team" as const,
      categoryLabel: "Team",
      imageUrl: "/gallery/img8.jpg",
      description: "Team members gathered at a recent tech event.",
    },
  ] as GalleryItem[],

  metrics: [
    { id: "m1", label: "Products Built", value: 2, suffix: "" },
    { id: "m2", label: "Organizations Served", value: 100, suffix: "+" },
    { id: "m3", label: "Countries Reached", value: 1, suffix: "" },
    { id: "m4", label: "Active Users", value: 15000, suffix: "+" },
    { id: "m6", label: "Years Building", value: 3, suffix: "+" },
  ] as MetricItem[],

  testimonials: [
    {
      id: "t1",
      quote:
        "It is a very reliable voting platform, their team was on standby and always available for communication. I believe smoothballot is the best voting platform I have seen so far.",
      name: "Kelvin Omachonu",
      role: "Electoral Commission Chairman",
      company: "KREIC",
      image:
        "https://ui-avatars.com/api/?name=Kelvin+Omachonu&background=0D8ABC&color=fff&size=200",
    },
    {
      id: "t2",
      quote:
        "We say a very big thank you to smoothballot for making the journey of our election easy...",
      name: "ISBHECO",
      role: "Independent Electoral Committee",
      company: "Sultan Bello Hall",
      image:
        "https://ui-avatars.com/api/?name=ISBHECO&background=F59E0B&color=fff&size=200",
    },
    {
      id: "t3",
      quote:
        "Like the name smoothballot, I would say it is very smooth. The user experience and navigation was smooth. I could easily set up the election without technical support",
      name: "Daniel Anya",
      role: "Electoral Commission Chairman",
      company: "NSASA",
      image:
        "https://ui-avatars.com/api/?name=Daniel+Anya&background=10B981&color=fff&size=200",
    },
    {
      id: "t4",
      quote:
        "It was fast and seamless, I will recommend smoothballot to my friends, other departments, to Africa and to the WORLD!!",
      name: "Ayoleke Oreoluwa",
      role: "Committee Member",
      company: "KREIC",
      image:
        "https://ui-avatars.com/api/?name=Ayoleke+Oreoluwa&background=8B5CF6&color=fff&size=200",
    },
  ] as TestimonialItem[],

  partners: [
    { id: "p1", name: "MTN Group", logo: "MTN" },
    { id: "p2", name: "Access Bank", logo: "Access Bank" },
    { id: "p3", name: "Safaricom", logo: "Safaricom" },
    { id: "p4", name: "Tony Elumelu Foundation", logo: "TEF" },
    { id: "p5", name: "Ghana Digital", logo: "Ghana Digital" },
    { id: "p6", name: "USAID", logo: "USAID" },
  ],
};
