/**
 * The 9 Caring Hearts Care services. Mirrors the live caringheartscare.com site.
 * `shortDesc` → Home grid · `cardDesc` → Services grid · the rest → detail page.
 */

export interface Service {
  id: string;
  icon: string;
  title: string;
  image: string;
  shortDesc: string;
  cardDesc: string;
  lead: string;
  includes: string[];
  forYou: string;
}

export const services: Service[] = [
  {
    id: 'personal-care',
    icon: 'hand-helping',
    title: 'Personal Care',
    image: '/assets/photos/caregiver-doorway.jpg',
    shortDesc: 'Maintain dignity and independence with hands-on help to stay healthy at home.',
    cardDesc:
      'Personal care assistance helps your loved one maintain dignity while receiving the support needed to stay healthy and independent at home.',
    lead: 'Hands-on help with the activities of daily living, delivered with the patience and respect your loved one deserves — so they can stay healthy, comfortable and independent at home.',
    includes: [
      'Bathing, grooming and dressing',
      'Toileting and incontinence care',
      'Mobility, transfers and fall prevention',
      'Feeding and hydration support',
      'Skin and personal hygiene care',
    ],
    forYou:
      'Ideal for seniors who need daily assistance to remain safely at home while preserving their dignity and routine.',
  },
  {
    id: 'home-helper',
    icon: 'home',
    title: 'Home Helper',
    image: '/assets/photos/home-helper.jpg',
    shortDesc: 'A clean, organized home and wholesome meals, woven into the daily routine.',
    cardDesc:
      'A clean, organized home and wholesome, delicious meals — seamlessly woven into your loved one’s daily routine.',
    lead: 'A clean, organized home and wholesome, delicious meals — seamlessly woven into your loved one’s daily routine so home stays a comfortable, safe place to be.',
    includes: [
      'Light housekeeping and tidying',
      'Laundry and linens',
      'Meal planning and preparation',
      'Grocery shopping and errands',
      'Organizing and seasonal help',
    ],
    forYou:
      'Perfect for those who are largely independent but could use a hand keeping the household running smoothly.',
  },
  {
    id: 'transportation',
    icon: 'car',
    title: 'Transportation',
    image: '/assets/photos/transportation.jpg',
    shortDesc: 'Safe, friendly rides to appointments, the pharmacy and activities.',
    cardDesc:
      'When driving becomes challenging, rely on an expert caregiver to safely provide transportation to appointments and activities.',
    lead: 'When driving becomes challenging, a trusted caregiver provides safe, friendly transportation to wherever your loved one needs to go.',
    includes: [
      'Medical and dental appointments',
      'Pharmacy and grocery trips',
      'Worship services and social outings',
      'Door-through-door escort',
      'Help with mobility aids',
    ],
    forYou:
      'Great for seniors who no longer drive but want to stay active, connected and on top of their health.',
  },
  {
    id: 'companionship',
    icon: 'users',
    title: 'Companionship',
    image: '/assets/photos/companionship-woman.jpg',
    shortDesc: 'A warm, friendly caregiver matched to your loved one’s personality and needs.',
    cardDesc:
      'Warm, friendly caregivers keep the mind stimulated and the body active — matched to your loved one’s personality and individual needs.',
    lead: 'Warm, friendly caregivers who keep the mind stimulated and the body active — matched to your loved one’s personality and individual interests.',
    includes: [
      'Conversation and emotional support',
      'Games, hobbies and reading',
      'Walks and gentle activity',
      'Help staying socially connected',
      'A consistent, familiar presence',
    ],
    forYou:
      'Ideal for seniors experiencing loneliness or isolation who would thrive with regular, caring company.',
  },
  {
    id: 'specialized-care',
    icon: 'stethoscope',
    title: 'Specialized Care',
    image: '/assets/photos/specialized-care.jpg',
    shortDesc: 'Long- and short-term care for recovery from surgery, illness or disability.',
    cardDesc:
      'Recovering from surgery, childbirth, illness or disability? We provide long-term and short-term care when you need time to rest and recuperate.',
    lead: 'Recovering from surgery, childbirth, illness or disability? We provide long-term and short-term care for when you or your loved one needs time to rest and recuperate.',
    includes: [
      'Post-surgical recovery support',
      'Chronic illness and disability care',
      'Stroke and mobility recovery',
      'Coordination with your care team',
      'Long-term or short-term plans',
    ],
    forYou:
      'For families navigating a complex diagnosis or recovery who need experienced, attentive support at home.',
  },
  {
    id: 'manage-medications',
    icon: 'pill',
    title: 'Manage Medications',
    image: '/assets/photos/medication.jpg',
    shortDesc: 'Timely reminders and careful assistance, prioritizing safety and accuracy.',
    cardDesc:
      'Timely medication reminders and thoughtful, comprehensive assistance with administration — always prioritizing safety and accuracy.',
    lead: 'Timely medication reminders and thoughtful, comprehensive assistance with administration — always prioritizing safety and accuracy.',
    includes: [
      'Scheduled medication reminders',
      'Assistance with administration',
      'Refill tracking and pickup',
      'Watching for side effects',
      'Coordination with pharmacists',
    ],
    forYou:
      'Best for seniors managing multiple prescriptions who need a careful, reliable routine to stay safe.',
  },
  {
    id: 'respite-care',
    icon: 'coffee',
    title: 'Respite Care',
    image: '/assets/photos/respite-care.jpg',
    shortDesc: 'Short-term relief for family caregivers — take the break you need.',
    cardDesc:
      'Short-term relief for family caregivers — take the break you need, knowing your loved one is in trusted, attentive hands.',
    lead: 'Short-term relief for family caregivers — take the break you need, knowing your loved one is in trusted, attentive hands.',
    includes: [
      'A few hours or several days',
      'Full continuity of the care routine',
      'Overnight and weekend coverage',
      'Peace of mind while you rest',
      'Flexible, on-your-schedule support',
    ],
    forYou:
      'For devoted family caregivers who need time to recharge, travel or simply attend to their own needs.',
  },
  {
    id: 'post-cosmetic-care',
    icon: 'bandage',
    title: 'Post-Cosmetic Care',
    image: '/assets/photos/post-cosmetic-care.jpg',
    shortDesc: 'Attentive recovery support after a cosmetic procedure, for smooth healing at home.',
    cardDesc:
      'Compassionate, attentive recovery support after a cosmetic procedure, for a smooth and comfortable healing at home.',
    lead: 'Compassionate, attentive recovery support after a cosmetic procedure, tailored to your specific needs and recovery goals — for a smooth, comfortable healing at home.',
    includes: [
      'Personalized recovery support',
      'Comfort and mobility assistance',
      'Help following post-op instructions',
      'Coordination with your provider',
      'A calm, restful home environment',
    ],
    forYou:
      'For anyone recovering from a cosmetic procedure who wants to heal safely in familiar surroundings.',
  },
  {
    id: 'dementia-care',
    icon: 'brain',
    title: 'Dementia Care',
    image: '/assets/photos/dementia-care.jpg',
    shortDesc: 'Patient, specialized support for memory loss — improving quality of life.',
    cardDesc:
      'Patient, specialized support for memory loss — improving quality of life with skilled caregivers who are genuinely caring.',
    lead: 'Patient, specialized support for individuals living with Alzheimer’s or other forms of dementia — including cognitive stimulation and gentle behavioral management.',
    includes: [
      'Cognitive stimulation activities',
      'Gentle behavioral management',
      'Safe, structured routines',
      'Familiar, consistent caregivers',
      'Family guidance and support',
    ],
    forYou:
      'For families caring for a loved one with memory loss who need skilled, genuinely caring, specialized support.',
  },
];

export const serviceById = (id: string) => services.find((s) => s.id === id);
