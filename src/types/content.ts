export type Service = {
  name: string;
  duration: string;
  price: string;
  description: string;
  benefits: string[];
  image: string;
};

export type Therapist = {
  name: string;
  role: string;
  experience: string;
  bio: string;
  photo: string;
};

export type Testimonial = {
  quote: string;
  name: string;
  detail: string;
};

export type FaqItem = {
  question: string;
  answer: string;
};

export type GalleryItem = {
  title: string;
  category: string;
  image: string;
};
