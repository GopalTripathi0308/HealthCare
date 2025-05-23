// Bot responses for the instant help chat
export const botResponses = [
  {
    triggers: ["headache", "head pain", "migraine"],
    text: "For headaches, try resting in a dark, quiet room. Stay hydrated and consider over-the-counter pain relievers like acetaminophen or ibuprofen. If headaches persist or are severe, please consult a healthcare professional.",
  },
  {
    triggers: ["fever", "temperature", "hot"],
    text: "For fever, rest and stay hydrated. You can take acetaminophen or ibuprofen to reduce fever. Monitor your temperature regularly. Seek medical attention if fever exceeds 103°F (39.4°C) or persists for more than 3 days.",
  },
  {
    triggers: ["cough", "coughing"],
    text: "For cough, try honey, warm liquids, and throat lozenges. Avoid irritants like smoke. If cough persists for more than 2 weeks, produces blood, or is accompanied by fever, please see a doctor.",
  },
  {
    triggers: ["cold", "runny nose", "congestion"],
    text: "For cold symptoms, get plenty of rest, drink fluids, and use a humidifier. Saline nasal sprays can help with congestion. Most colds resolve in 7-10 days. See a doctor if symptoms worsen or last longer than 10 days.",
  },
  {
    triggers: ["stomach", "nausea", "vomiting", "upset stomach"],
    text: "For stomach issues, try the BRAT diet (bananas, rice, applesauce, toast). Stay hydrated with small sips of water. Avoid dairy and fatty foods. Seek medical attention if symptoms persist or you show signs of dehydration.",
  },
  {
    triggers: ["pain", "hurt", "ache"],
    text: "For general pain, rest the affected area and apply ice for acute injuries or heat for muscle tension. Over-the-counter pain relievers can help. If pain is severe, persistent, or follows an injury, please consult a healthcare provider.",
  },
  {
    triggers: ["sleep", "insomnia", "tired"],
    text: "For better sleep, maintain a regular sleep schedule, create a comfortable sleep environment, and avoid caffeine late in the day. If sleep problems persist, consider speaking with a healthcare professional about sleep hygiene or potential sleep disorders.",
  },
  {
    triggers: ["stress", "anxiety", "worried"],
    text: "For stress and anxiety, try deep breathing exercises, regular physical activity, and mindfulness techniques. Maintain social connections and consider talking to a mental health professional if feelings persist or interfere with daily life.",
  },
  {
    triggers: ["emergency", "urgent", "serious"],
    text: "If this is a medical emergency, please call 911 or go to your nearest emergency room immediately. For urgent but non-emergency situations, contact your healthcare provider or visit an urgent care center.",
  },
];

// Mock doctors data for video consultation
export const doctors = [
  {
    id: "1",
    name: "Dr. Sarah Johnson",
    specialty: "General Medicine",
    rating: 4.9,
    experience: "12 years",
    image:
      "https://images.pexels.com/photos/5327580/pexels-photo-5327580.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&dpr=2",
    availability: "Available Now",
    consultationFee: 50,
    languages: ["English", "Spanish"],
    education: "MD from Harvard Medical School",
    about:
      "Experienced general practitioner with expertise in preventive care and chronic disease management.",
  },
  {
    id: "2",
    name: "Dr. Michael Chen",
    specialty: "Cardiology",
    rating: 4.8,
    experience: "15 years",
    image:
      "https://images.pexels.com/photos/6749778/pexels-photo-6749778.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&dpr=2",
    availability: "Available in 30 mins",
    consultationFee: 75,
    languages: ["English", "Mandarin"],
    education: "MD from Johns Hopkins University",
    about:
      "Board-certified cardiologist specializing in heart disease prevention and treatment.",
  },
  {
    id: "3",
    name: "Dr. Emily Rodriguez",
    specialty: "Dermatology",
    rating: 4.9,
    experience: "10 years",
    image:
      "https://images.pexels.com/photos/5327921/pexels-photo-5327921.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&dpr=2",
    availability: "Available Tomorrow",
    consultationFee: 60,
    languages: ["English", "Spanish", "French"],
    education: "MD from Stanford University",
    about:
      "Dermatologist with expertise in skin conditions, cosmetic procedures, and skin cancer screening.",
  },
  {
    id: "4",
    name: "Dr. James Wilson",
    specialty: "Pediatrics",
    rating: 4.7,
    experience: "18 years",
    image:
      "https://images.pexels.com/photos/5452293/pexels-photo-5452293.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&dpr=2",
    availability: "Available Now",
    consultationFee: 55,
    languages: ["English"],
    education: "MD from University of Pennsylvania",
    about:
      "Pediatrician dedicated to providing comprehensive healthcare for children and adolescents.",
  },
  {
    id: "5",
    name: "Dr. Lisa Thompson",
    specialty: "Mental Health",
    rating: 4.9,
    experience: "14 years",
    image:
      "https://images.pexels.com/photos/5327656/pexels-photo-5327656.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&dpr=2",
    availability: "Available in 1 hour",
    consultationFee: 80,
    languages: ["English", "German"],
    education: "PhD in Psychology from Yale University",
    about:
      "Licensed psychologist specializing in anxiety, depression, and cognitive behavioral therapy.",
  },
];
