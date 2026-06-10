/**
 * Caring Hearts Care services — text reproduced VERBATIM from caringheartscare.com.
 *
 * The live site is internally inconsistent about its service set, so we mirror it exactly:
 *  • `services`     → the 9 cards on the /services page (Personal Care, Meal Preparation,
 *                     Transportation, Companionship, Light Housekeeping, Manage Medications,
 *                     Respite Care, Post-Cosmetic Care, Dementia Care).
 *  • `homeServices` → the 6 cards in the Home page "Our Services" section (Personal Care,
 *                     Home Helper, Transportation, Companionship, Specialized Care, Manage
 *                     Medications).
 *
 * The original has NO per-service detail pages, so these carry only title + description.
 * (One original typo — "Care Hearts Care" — has been corrected to "Caring Hearts Care".)
 */

export interface Service {
  id: string;
  icon: string;
  title: string;
  image: string;
  description: string;
}

/** The 9 services exactly as listed on the live /services page. */
export const services: Service[] = [
  {
    id: 'personal-care',
    icon: 'hand-helping',
    title: 'Personal Care',
    image: '/assets/photos/caregiver-doorway.jpg',
    description:
      'Our Personal Care service is designed to support clients in their daily routines with dignity and respect. Assistance includes bathing, grooming, dressing, and toileting, catering to each individual’s personal needs and preferences. This service ensures clients can maintain their hygiene and appearance with confidence and comfort.',
  },
  {
    id: 'meal-preparation',
    icon: 'utensils',
    title: 'Meal Preparation',
    image: '/assets/photos/home-helper.jpg',
    description:
      'Our Meal Preparation service involves planning and preparing nutritious meals that cater to the dietary needs and preferences of our clients. From grocery shopping to cooking, we take care of all aspects of mealtime, ensuring clients enjoy healthy, delicious meals every day.',
  },
  {
    id: 'transportation',
    icon: 'car',
    title: 'Transportation',
    image: '/assets/photos/transportation.jpg',
    description:
      'Our Transportation service provides clients with safe and reliable escorting to medical appointments, grocery shopping, errands, and social outings. This service ensures clients remain active and connected with their community, maintaining independence in their daily activities.',
  },
  {
    id: 'companionship',
    icon: 'users',
    title: 'Companionship',
    image: '/assets/photos/companionship-woman.jpg',
    description:
      'The Companionship service provides clients with meaningful social interaction, engaging conversation, and emotional support. This vital service aims to alleviate loneliness, enhance well-being, and promote a positive outlook on life by connecting clients with compassionate caregivers for companionship and activities that bring joy.',
  },
  {
    id: 'light-housekeeping',
    icon: 'sparkles',
    title: 'Light Housekeeping',
    image: '/assets/photos/home-helper.jpg',
    description:
      'The Light Housekeeping service assists clients with maintaining a clean and orderly home environment. Tasks include laundry, vacuuming, and tidying up living spaces, contributing to a pleasant and safe living area that clients can enjoy and be proud of.',
  },
  {
    id: 'manage-medications',
    icon: 'pill',
    title: 'Manage Medications',
    image: '/assets/photos/medication.jpg',
    description:
      'With Medication Management, we offer meticulous reminders for clients to take their medications according to their prescribed schedule, along with assistance in medication administration if required. This service prioritizes the client’s health and well-being, ensuring medications are taken safely and effectively.',
  },
  {
    id: 'respite-care',
    icon: 'coffee',
    title: 'Respite Care',
    image: '/assets/photos/respite-care.jpg',
    description:
      'Respite Care offers temporary relief to family caregivers, allowing them time to rest, recharge, or attend to their own needs. This service supports the well-being of both clients and their families, ensuring continuous, high-quality care even in the caregiver’s absence.',
  },
  {
    id: 'post-cosmetic-care',
    icon: 'bandage',
    title: 'Post-Cosmetic Care',
    image: '/assets/photos/post-cosmetic-care.jpg',
    description:
      'Specializing in Post-Cosmetic Care, we provide dedicated support and assistance to individuals recovering from cosmetic surgery. Tailored to each client’s specific needs and recovery goals, this service focuses on comfortable and safe healing at home, with close coordination with healthcare providers for a smooth recovery process.',
  },
  {
    id: 'dementia-care',
    icon: 'brain',
    title: 'Dementia Care',
    image: '/assets/photos/dementia-care.jpg',
    description:
      'Our Dementia Care service offers specialized attention and support to individuals living with Alzheimer’s disease or other forms of dementia. Focused on cognitive stimulation and behavioral management, our caregivers are trained to enhance the quality of life for clients with dementia, ensuring a safe, supportive, and understanding environment.',
  },
];

/** The 6 services exactly as listed in the Home page "Our Services" section. */
export const homeServices: Service[] = [
  {
    id: 'personal-care',
    icon: 'hand-helping',
    title: 'Personal Care',
    image: '/assets/photos/caregiver-doorway.jpg',
    description:
      'Personal care assistance helps you or your loved one maintain dignity while receiving the care needed to stay healthy and independent.',
  },
  {
    id: 'home-helper',
    icon: 'home',
    title: 'Home Helper',
    image: '/assets/photos/home-helper.jpg',
    description:
      'Simplify your life with our Home Helper service, ensuring a clean, organized home and wholesome, delicious meals, all seamlessly integrated into your daily routine.',
  },
  {
    id: 'transportation',
    icon: 'car',
    title: 'Transportation',
    image: '/assets/photos/transportation.jpg',
    description:
      'When driving becomes challenging, you and your loved one can rely on an expert caregiver to safely provide transportation to various appointments and activities.',
  },
  {
    id: 'companionship',
    icon: 'users',
    title: 'Companionship',
    image: '/assets/photos/companionship-woman.jpg',
    description:
      'Stimulating the mind and keeping the body active are important as you or your loved one faces challenging times. Our caregivers are warm and friendly, and we will match a caregiver to you or your loved one’s personality and individual needs.',
  },
  {
    id: 'specialized-care',
    icon: 'stethoscope',
    title: 'Specialized Care',
    image: '/assets/photos/specialized-care.jpg',
    description:
      'Recovering from surgery, giving birth, or living with an illness or disability can be challenging. Caring Hearts Care provides both long-term and short-term care when you or your loved one need time to rest and recuperate.',
  },
  {
    id: 'manage-medications',
    icon: 'pill',
    title: 'Manage Medications',
    image: '/assets/photos/medication.jpg',
    description:
      'We ensure timely medication reminders and provide thoughtful, comprehensive assistance with medication administration as needed, always prioritizing safety and accuracy in every aspect of our dedicated care.',
  },
];

export const serviceById = (id: string) => services.find((s) => s.id === id);
