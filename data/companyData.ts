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
    headline: "Participation is everywhere. Trust should be too.",
    description:
      "Smooth Africa builds digital products and infrastructure that make participation more transparent, secure, seamless, and reliable.",
    cta1: "Explore Products",
    cta2: "Talk to Us",
  },

  story: {
    title: "Our Story",
    paragraphs: [
      "Every day, people participate in things that matter to them. They vote. They register. They compete. They attend. They contribute. They make decisions together.",
      "But participation is only as strong as the system behind it. When the process isn't transparent, people question the outcome. When information isn't secure, people lose confidence. When systems are complicated or unreliable, participation itself becomes harder.",
      "That is where Smooth Africa began. We came together around a simple belief: people should be able to participate without having to question the system they're participating through.",
      "So we started building technology around three things we believe should never be compromised: Transparency. Trust. Security.",
      "Today, Smooth Africa is building participation infrastructure, digital products that make it easier for people and organizations to participate, transact, decide, and engage with confidence.",
      "Our products may serve different experiences, but they are connected by the same idea: Make participation smooth, seamless, and reliable. And we're only getting started."
    ],
  },

  products: [
    {
      id: "smoothballot",
      name: "SmoothBallot",
      tagline: "Participation in voting and decision-making.",
      description:
        "From candidate registration to results publication, SmoothBallot replaces paper-based electoral processes with a secure, auditable digital platform built for institutional trust.",
      status: "live" as const,
      iconName: "Vote",
      color: "blue",
      features: [
        "Secure voter & candidate registration",
        "Virtual voting system",
        "Real-time results tabulation",
        "Complete audit trail",
      ],
      linkText: "Learn More",
      externalLink: "https://smoothballot.com/",
    },
    {
      id: "smoothcontest",
      name: "SmoothContest",
      tagline: "Participation in digital contests and awards.",
      description:
        "A dedicated platform for managing digital contests and pageants. Easily register contestants, collect votes securely, and showcase real-time leaderboards with complete transparency.",
      status: "live" as const,
      iconName: "Trophy",
      color: "amber",
      features: [
        "Contestant registration & profiles",
        "Secure voting mechanisms",
        "Real-time leaderboards",
        "Fraud prevention & analytics",
      ],
      linkText: "Learn More",
      externalLink: "#",
    },
    {
      id: "smoothticket",
      name: "SmoothTicket",
      tagline: "Participation in events and experiences.",
      description:
        "A complete ticketing platform for African events. It handles secure ticket generation, real-time access control, and revenue analytics, making event participation seamless and reliable.",
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
  ] as Product[],

  visionMission: {
    vision: {
      title: "Vision",
      statement: "A world where participation can be trusted.",
      detail: "We envision systems where people can engage, contribute, make decisions, and connect without uncertainty about the process behind them.",
    },
    mission: {
      title: "Mission",
      statement: "Make participation smooth, seamless, and reliable.",
      detail: "We build technology that brings transparency, trust, and security into the everyday systems people rely on to participate.",
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
      bio: "Prince drives the strategic vision at Smooth Africa. With a deep passion for solving complex operational challenges, he leads the team in building systems that empower people to participate with transparency and confidence.",
      image: "/team/prince.jpg",
      linkedin: "https://www.linkedin.com/in/prince-ogbonna-7436041b8/",
      email: "hello@smooth.africa",
    },
    {
      id: "founder-2",
      name: "Owoade Anuoluwapo",
      role: "Co-founder & Tech Lead",
      bio: "Owoade leads the engineering team behind Smooth Africa's products, helping turn the company's vision for trusted participation into the systems people actually use. He guides the architecture and delivery of all products.",
      image: "/images/team/owoade-anuoluwapo.jpg",
      linkedin: "https://www.linkedin.com/in/owoade-anuoluwapo-a09a03235/",
      email: "owoade@smooth.africa",
    },
    {
      id: "member-3",
      name: "Ilerioluwa Adebayo",
      role: "Co-founder & Design Lead",
      bio: "Ileri leads the design team behind Smooth Africa's products, helping turn the company's vision for trusted participation into experiences people find clear and effortless to use. She guides the design direction and product experience of all products.",
      image: "/images/team/ilerioluwa-adebayo.jpg",
      linkedin: "https://www.linkedin.com/in/ilerioluwaadebayo/",
      email: "ileri@smooth.africa",
    },
    {
      id: "member-4",
      name: "Oluwafemi Araoye",
      role: "Co-Founder & Software Engineer",
      bio: "Femi builds the administrative applications that event organizers, election management teams, and contest organizers rely on to run participation smoothly. He helps turn the company's vision for trusted participation into the tools operators use behind the scenes.",
      image: "/images/team/oluwafemi-araoye.jpg",
      linkedin: "https://www.linkedin.com/in/oluwafemiaraoye/",
      email: "femi@smooth.africa",
    },
    {
      id: "member-5",
      name: "Oladejo Jibril",
      role: "Co-Founder & Product Designer",
      bio: "Jibril's design work runs across every Smooth Africa product. Whatever needs designing, he gets it done, from first sketch to final screen, keeping every product consistent and human.",
      image: "/images/team/oladejo-jibril.jpg",
      linkedin: "https://www.linkedin.com/in/oladejo-jibril/",
      email: "jibril@smooth.africa",
    },
    {
      id: "member-6",
      name: "Samuel Ibitoye",
      role: "Co-founder & Software Engineer",
      bio: "Samuel builds the apps people actually touch, the voter casting a ballot, the attendee walking into an event. His work is where Smooth Africa's promise of trusted participation becomes something people feel: simple, fast, and real.",
      image: "/images/team/samuel-ibitoye.jpg",
      linkedin: "https://www.linkedin.com/in/samuel-ibitoye-328850420/",
      email: "samuel@smooth.africa",
    },
  ] as TeamMember[],

  gallery: [
    {
      id: "g1",
      title: "Smooth Contest Payout Milestone",
      category: "milestones" as const,
      categoryLabel: "Milestones",
      imageUrl: "/gallery/img1.jpg",
      description: "Celebrating the disbursement of over N2,000,000 via Smooth contests.",
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
    {
      id: "g9",
      title: "2025 Year in Review",
      category: "milestones" as const,
      categoryLabel: "Milestones",
      imageUrl: "/gallery/img9.jpg",
      description: "Celebrating our Wrapped 2025 impact.",
    },
    {
      id: "g10",
      title: "Tech and You Fest",
      category: "events" as const,
      categoryLabel: "Events",
      imageUrl: "/gallery/img10.jpg",
      description: "Representing Smooth Africa at the Tech and You event.",
    },
    {
      id: "g11",
      title: "HEI Innovation Speaker",
      category: "events" as const,
      categoryLabel: "Events",
      imageUrl: "/gallery/img11.jpg",
      description: "Speaking on innovation and scaling tech products.",
    },
  ] as GalleryItem[],

  metrics: [
    { id: "m1", label: "Products Built", value: 3, suffix: "" },
    { id: "m2", label: "Organizations Served", value: 100, suffix: "+" },
    { id: "m4", label: "Users Served", value: 15000, suffix: "+" },
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
