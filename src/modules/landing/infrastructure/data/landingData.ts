import { ILandingPageData } from "../../core/types/landingTypes";

export const landingPageData: ILandingPageData = {
  hero: {
    title: "Revolutionizing Healthcare",
    subtitle: "Through Innovative Technology",
    description:
      "We develop cutting-edge healthcare solutions that improve patient outcomes, streamline operations, and advance medical research through the power of technology.",
    primaryCta: {
      text: "Get Started",
      href: "#contact",
    },
    secondaryCta: {
      text: "Learn More",
      href: "#about",
    },
  },
  about: {
    title: "Transforming Healthcare with Technology",
    description:
      "Our mission is to bridge the gap between healthcare and technology, creating solutions that make healthcare more accessible, efficient, and effective for everyone.",
    image: "/images/about-healthcare.jpg",
    features: [
      "AI-Powered Diagnostics",
      "Telemedicine Platforms",
      "Electronic Health Records",
      "Medical IoT Solutions",
      "Healthcare Analytics",
      "Patient Management Systems",
    ],
  },
  services: [
    {
      id: "1",
      title: "AI Diagnostics",
      description:
        "Advanced machine learning algorithms for accurate medical diagnosis and treatment recommendations.",
      icon: "Brain",
      features: [
        "Medical Image Analysis",
        "Predictive Analytics",
        "Clinical Decision Support",
        "Real-time Monitoring",
      ],
    },
    {
      id: "2",
      title: "Telemedicine Solutions",
      description:
        "Comprehensive telehealth platforms connecting patients with healthcare providers remotely.",
      icon: "Video",
      features: [
        "Video Consultations",
        "Remote Patient Monitoring",
        "Digital Prescriptions",
        "Health Record Integration",
      ],
    },
    {
      id: "3",
      title: "Healthcare Analytics",
      description:
        "Data-driven insights to optimize healthcare operations and improve patient outcomes.",
      icon: "BarChart3",
      features: [
        "Population Health Analytics",
        "Operational Efficiency",
        "Cost Optimization",
        "Quality Metrics",
      ],
    },
    {
      id: "4",
      title: "Medical IoT",
      description:
        "Connected medical devices and sensors for continuous health monitoring and data collection.",
      icon: "Wifi",
      features: [
        "Wearable Devices",
        "Smart Medical Equipment",
        "Environmental Monitoring",
        "Emergency Response Systems",
      ],
    },
  ],
  experience: [
    {
      id: "1",
      title: "Senior Healthcare Technology Architect",
      company: "MedTech Innovations",
      period: "2022 - Present",
      description:
        "Leading the development of next-generation healthcare platforms, focusing on AI integration and patient data security.",
      technologies: ["React", "Node.js", "Python", "TensorFlow", "AWS", "FHIR"],
    },
    {
      id: "2",
      title: "Full Stack Developer",
      company: "HealthCare Systems Inc.",
      period: "2020 - 2022",
      description:
        "Developed and maintained electronic health record systems serving over 100,000 patients.",
      technologies: [
        "Vue.js",
        "Express.js",
        "PostgreSQL",
        "Docker",
        "Kubernetes",
      ],
    },
    {
      id: "3",
      title: "Software Engineer",
      company: "Digital Health Solutions",
      period: "2018 - 2020",
      description:
        "Built telemedicine applications and integrated various healthcare APIs and standards.",
      technologies: ["Angular", "Spring Boot", "MySQL", "Redis", "HL7"],
    },
  ],
  projects: [
    {
      id: "1",
      title: "AI-Powered Radiology Assistant",
      description:
        "Machine learning platform that assists radiologists in detecting abnormalities in medical images with 95% accuracy.",
      image: "/images/project-radiology.jpg",
      technologies: ["Python", "TensorFlow", "React", "FastAPI", "PostgreSQL"],
      links: {
        demo: "https://demo.radiology-ai.com",
        github: "https://github.com/healthtech/radiology-ai",
      },
      featured: true,
    },
    {
      id: "2",
      title: "Telemedicine Platform",
      description:
        "Comprehensive telehealth solution enabling secure video consultations and remote patient monitoring.",
      image: "/images/project-telemedicine.jpg",
      technologies: ["Next.js", "WebRTC", "Node.js", "MongoDB", "Socket.io"],
      links: {
        live: "https://telehealth-platform.com",
        github: "https://github.com/healthtech/telehealth",
      },
      featured: true,
    },
    {
      id: "3",
      title: "Hospital Management System",
      description:
        "Complete hospital management solution with patient records, scheduling, and billing integration.",
      image: "/images/project-hospital.jpg",
      technologies: ["React", "Express.js", "MySQL", "Redis", "Docker"],
      links: {
        demo: "https://demo.hospital-mgmt.com",
      },
      featured: false,
    },
  ],
  testimonials: [
    {
      id: "1",
      name: "Dr. Sarah Johnson",
      role: "Chief Medical Officer",
      company: "Regional Medical Center",
      content:
        "The AI diagnostic tools have revolutionized our radiology department. We've seen a 40% improvement in diagnostic accuracy and significantly reduced turnaround times.",
      avatar: "/images/testimonial-1.jpg",
      rating: 5,
    },
    {
      id: "2",
      name: "Michael Chen",
      role: "IT Director",
      company: "City Hospital Network",
      content:
        "Their telemedicine platform helped us maintain continuity of care during the pandemic. The implementation was seamless and the support has been exceptional.",
      avatar: "/images/testimonial-2.jpg",
      rating: 5,
    },
    {
      id: "3",
      name: "Dr. Emily Rodriguez",
      role: "Family Physician",
      company: "Community Health Clinic",
      content:
        "The patient management system has streamlined our workflow tremendously. We can now focus more on patient care rather than administrative tasks.",
      avatar: "/images/testimonial-3.jpg",
      rating: 5,
    },
  ],
  contact: {
    email: "contact@healthtech-solutions.com",
    phone: "+1 (555) 123-4567",
    location: "San Francisco, CA",
    socialLinks: {
      twitter: "https://twitter.com/healthtech",
      linkedin: "https://linkedin.com/company/healthtech",
      github: "https://github.com/healthtech",
    },
  },
};
