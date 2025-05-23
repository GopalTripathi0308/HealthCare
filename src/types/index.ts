export interface Message {
  id: string;
  type: "user" | "bot";
  text: string;
  timestamp: string;
}

export interface Doctor {
  id: string;
  name: string;
  specialty: string;
  rating: number;
  experience: string;
  image: string;
  availability: string;
  consultationFee: number;
  languages: string[];
  education: string;
  about: string;
}

export interface BotResponse {
  triggers: string[];
  text: string;
}
