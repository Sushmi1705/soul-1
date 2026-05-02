// Mock content scraped/adapted from gitikasharma.in

export const BRAND = {
  name: "Soul Karma",
  tagline: "Where the universe whispers its secrets",
  author: "Gitika Sharma",
};

export const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Courses", href: "#courses" },
  { label: "Journal", href: "#journal" },
  { label: "Contact", href: "#contact" },
];

export const SERVICES = [
  {
    id: "kundali-analysis",
    title: "Kundali Analysis",
    desc: "We combine time-honored techniques with contemporary insights to provide you with personalized interpretations and actionable guidance.",
    image: "https://gitikasharma.in/wp-content/uploads/2024/02/Kundali-analysis-1.png",
    duration: "60 min",
    price: 2499,
  },
  {
    id: "kundali-making",
    title: "Kundali Making",
    desc: "We meticulously craft your personalized birth chart, offering profound insights into the unique cosmic influences shaping your journey.",
    image: "https://gitikasharma.in/wp-content/uploads/2024/02/Kundali-Making.png",
    duration: "45 min",
    price: 1999,
  },
  {
    id: "match-making",
    title: "Match Making",
    desc: "Discover the magic of cosmic connection, embark on a journey of discovery, and let the stars align your path to enduring love.",
    image: "https://gitikasharma.in/wp-content/uploads/2024/02/Match-Making.png",
    duration: "75 min",
    price: 3499,
  },
  {
    id: "numerology-analysis",
    title: "Numerology Analysis",
    desc: "Unveil the mysteries of your destiny and embark on a transformative journey of self-discovery through the wisdom of numbers.",
    image: "https://gitikasharma.in/wp-content/uploads/2024/02/Numerology.png",
    duration: "60 min",
    price: 2199,
  },
  {
    id: "vastu-consultation",
    title: "Vastu Consultation",
    desc: "Create a balanced environment for your home or workspace with insightful recommendations tailored to your specific needs.",
    image: "https://gitikasharma.in/wp-content/uploads/2024/02/Vastu-Consultation.png",
    duration: "90 min",
    price: 4999,
  },
  {
    id: "soul-purpose",
    title: "Soul Purpose",
    desc: "Honor the whispers of your soul and embark on a quest to live a life of purpose, passion, and authenticity.",
    image: "https://gitikasharma.in/wp-content/uploads/2024/02/Soul-Purpose.png",
    duration: "60 min",
    price: 2999,
  },
];

export const COURSES = [
  {
    id: "akashic-records",
    title: "Akashic Records",
    category: "Certification Course",
    price: 15999,
    image: "https://gitikasharma.in/wp-content/uploads/2024/03/7-5.png",
  },
  {
    id: "bhrigu-nandi-nadi",
    title: "Bhrigu Nandi Nadi",
    category: "Advanced Course",
    price: 27999,
    image: "https://gitikasharma.in/wp-content/uploads/2024/03/2-7.png",
  },
  {
    id: "lal-kitab-astrology",
    title: "Lal Kitab Astrology",
    category: "Master Program",
    price: 27999,
    image: "https://gitikasharma.in/wp-content/uploads/2024/03/5-5.png",
  },
  {
    id: "numerology-course",
    title: "Numerology",
    category: "Foundation Course",
    price: 9240,
    image: "https://gitikasharma.in/wp-content/uploads/2024/03/3-5.png",
  },
  {
    id: "palmistry",
    title: "Palmistry",
    category: "Foundation Course",
    price: 9240,
    image: "https://gitikasharma.in/wp-content/uploads/2024/03/4-5.png",
  },
  {
    id: "vastu-shastra-course",
    title: "Vastu Shastra Course",
    category: "Master Program",
    price: 27999,
    image: "https://gitikasharma.in/wp-content/uploads/2024/03/6-7.png",
  },
];

export const TIME_SLOTS = [
  "09:00 AM",
  "10:30 AM",
  "12:00 PM",
  "02:00 PM",
  "03:30 PM",
  "05:00 PM",
  "06:30 PM",
];

// Simulate some slots being unavailable based on date
export const getAvailableSlots = (date) => {
  if (!date) return [];
  const day = date.getDay();
  // Sunday → limited
  if (day === 0) return ["10:30 AM", "12:00 PM", "02:00 PM"];
  // Saturday → mostly full
  if (day === 6) return ["09:00 AM", "03:30 PM", "06:30 PM"];
  // Busy weekday pattern — skip one slot depending on date
  const skipIndex = date.getDate() % TIME_SLOTS.length;
  return TIME_SLOTS.filter((_, i) => i !== skipIndex);
};

export const TESTIMONIALS = [
  {
    id: 1,
    name: "Ananya R.",
    image: "https://gitikasharma.in/wp-content/uploads/2024/03/3-6-150x150.png",
    quote:
      "Soul Karma is a sanctuary for the soul. Gitika's teachings have helped me find clarity and purpose in my life journey.",
  },
  {
    id: 2,
    name: "Rohan M.",
    image: "https://gitikasharma.in/wp-content/uploads/2024/03/4-8-150x150.png",
    quote:
      "Grateful for the wisdom and warmth at Soul Karma. Gitika's gentle guidance has helped me navigate life's challenges with grace.",
  },
  {
    id: 3,
    name: "Meera K.",
    image: "https://gitikasharma.in/wp-content/uploads/2024/03/5-6-150x150.png",
    quote:
      "A true gem in the realm of spirituality. Soul Karma's teachings have empowered me to live authentically and embrace my true self.",
  },
  {
    id: 4,
    name: "Priya S.",
    image: "https://gitikasharma.in/wp-content/uploads/2024/03/1-8-150x150.png",
    quote:
      "Soul Karma by Gitika Sharma offers a transformative experience. Highly recommend for anyone seeking spiritual growth and inner peace.",
  },
  {
    id: 5,
    name: "Ishaan D.",
    image: "https://gitikasharma.in/wp-content/uploads/2024/03/2-9-150x150.png",
    quote:
      "An oasis of calm and wisdom! Gitika's insights and guidance have been life-changing. Thank you, Soul Karma!",
  },
];

export const JOURNAL = [
  {
    id: "vedic-wisdom",
    category: "Vastu Consultation",
    date: "March 7, 2024",
    title:
      "Unlocking Cosmic Wisdom: Exploring Vedic Astrology with Soul Karma",
    excerpt:
      "In a world filled with uncertainty and rapid change, the ancient wisdom of Vedic astrology offers a guiding light to those seeking clarity and meaning.",
    image:
      "https://gitikasharma.in/wp-content/uploads/2024/03/3-8.png",
  },
  {
    id: "nurturing-love",
    category: "Palmistry",
    date: "March 7, 2024",
    title:
      "Nurturing Love: Healing Marriages & Relationships through Astrology Therapy",
    excerpt:
      "In the intricate dance of love and relationships, challenges are inevitable. Yet within the depths of the stars lies a compass for the heart.",
    image:
      "https://gitikasharma.in/wp-content/uploads/2024/03/2-10.png",
  },
  {
    id: "power-of-numbers",
    category: "Vedic Astrology",
    date: "March 7, 2024",
    title:
      "Harnessing the Power of Numbers: Exploring Numerology with Soul Karma",
    excerpt:
      "In the intricate tapestry of the universe, numbers hold a profound significance — the silent language of creation speaking to those who listen.",
    image:
      "https://gitikasharma.in/wp-content/uploads/2024/02/1-3.png",
  },
];

export const ZODIAC_SIGNS = [
  { id: "aries", name: "Aries", dates: "Mar 21 - Apr 19", image: "https://cdn-icons-png.flaticon.com/512/2647/2647318.png" },
  { id: "taurus", name: "Taurus", dates: "Apr 20 - May 20", image: "https://cdn-icons-png.flaticon.com/512/2647/2647321.png" },
  { id: "gemini", name: "Gemini", dates: "May 21 - Jun 20", image: "https://cdn-icons-png.flaticon.com/512/2647/2647324.png" },
  { id: "cancer", name: "Cancer", dates: "Jun 21 - Jul 22", image: "https://cdn-icons-png.flaticon.com/512/2647/2647327.png" },
  { id: "leo", name: "Leo", dates: "Jul 23 - Aug 22", image: "https://cdn-icons-png.flaticon.com/512/2647/2647330.png" },
  { id: "virgo", name: "Virgo", dates: "Aug 23 - Sep 22", image: "https://cdn-icons-png.flaticon.com/512/2647/2647333.png" },
  { id: "libra", name: "Libra", dates: "Sep 23 - Oct 22", image: "https://cdn-icons-png.flaticon.com/512/2647/2647336.png" },
  { id: "scorpio", name: "Scorpio", dates: "Oct 23 - Nov 21", image: "https://cdn-icons-png.flaticon.com/512/2647/2647339.png" },
  { id: "sagittarius", name: "Sagittarius", dates: "Nov 22 - Dec 21", image: "https://cdn-icons-png.flaticon.com/512/2647/2647342.png" },
  { id: "capricorn", name: "Capricorn", dates: "Dec 22 - Jan 19", image: "https://cdn-icons-png.flaticon.com/512/2647/2647345.png" },
  { id: "aquarius", name: "Aquarius", dates: "Jan 20 - Feb 18", image: "https://cdn-icons-png.flaticon.com/512/2647/2647348.png" },
  { id: "pisces", name: "Pisces", dates: "Feb 19 - Mar 20", image: "https://cdn-icons-png.flaticon.com/512/2647/2647351.png" },
];

export const formatINR = (n) =>
  new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(n);
