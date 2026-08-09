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
      title: "Lagos Office",
      category: "office" as const,
      categoryLabel: "Office",
      imageUrl:
        "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80",
      description: "Our main workspace in Victoria Island, Lagos. This is where most of the product work happens.",
    },
    {
      id: "g2",
      title: "Team All-Hands",
      category: "team" as const,
      categoryLabel: "Team",
      imageUrl:
        "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80",
      description: "Quarterly team meeting bringing together the Lagos, Accra, and Nairobi crews.",
    },
    {
      id: "g3",
      title: "SmoothBallot Launch",
      category: "launches" as const,
      categoryLabel: "Launch Events",
      imageUrl:
        "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&w=800&q=80",
      description: "The public launch of SmoothBallot, attended by electoral commission representatives from four countries.",
    },
    {
      id: "g4",
      title: "Product Workshop",
      category: "workshops" as const,
      categoryLabel: "Product Workshops",
      imageUrl:
        "https://images.unsplash.com/photo-1515187029135-18ee286d815b?auto=format&fit=crop&w=800&q=80",
      description: "Co-design session with HR managers from 12 organizations. This is part of how we built SmoothTeam.",
    },
    {
      id: "g5",
      title: "Community Event",
      category: "community" as const,
      categoryLabel: "Community",
      imageUrl:
        "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=800&q=80",
      description: "Hosting a tech meetup for early-stage founders in Accra.",
    },
    {
      id: "g6",
      title: "Behind the Build",
      category: "behind-scenes" as const,
      categoryLabel: "Behind the Scenes",
      imageUrl:
        "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=800&q=80",
      description: "A typical design review featuring messy whiteboards, strong opinions, and good outcomes.",
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
        "SmoothBallot saved us weeks of manual tallying. The audit trail alone was worth it, as every stakeholder could see exactly what happened at every step.",
      name: "James Kiptoo",
      role: "Electoral Commission Secretary",
      company: "Kenya National Electoral Commission",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=200&q=80",
    },
    {
      id: "t2",
      quote:
        "SmoothTicket eliminated ticket fraud at our annual conference entirely. The scanners synced instantly even when the venue WiFi was spotty.",
      name: "Ngozi Adeyemi",
      role: "Events Director",
      company: "Lagos Tech Summit",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=200&q=80",
    },
    {
      id: "t3",
      quote:
        "The level of support and reliability we get from Smooth Africa is unmatched. We run our entire operational workflow through their platforms.",
      name: "Samuel Owusu",
      role: "Managing Director",
      company: "Owusu Group",
      image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80",
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
