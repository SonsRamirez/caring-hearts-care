/**
 * Blog articles — the 6 real posts published on caringheartscare.com, rebuilt in
 * the design-system's block format. Each post is meta + heroStyle + a `blocks` array.
 *
 * Block types: p · h2 · quote · image · callout · learn · numbered · checklist · profile · video
 * Hero styles: cover · full · overlay · inline · minimal · video
 */

export interface Author {
  name: string;
  role: string;
  initials: string;
}

export const AUTHORS: Record<string, Author> = {
  nathalie: { name: 'Nathalie Massey', role: 'Founder', initials: 'NM' },
  team: { name: 'The Caring Hearts Team', role: 'Care Coordinators', initials: 'CH' },
};

export interface Article {
  id: string;
  template: 'standard' | 'listicle' | 'guide' | 'spotlight';
  heroStyle: 'cover' | 'full' | 'overlay' | 'inline' | 'minimal' | 'video';
  category: string;
  readTime: string;
  date: string;
  author: keyof typeof AUTHORS;
  hero: string;
  title: string;
  deck: string;
  blocks: any[];
}

export const articles: Article[] = [
  {
    id: 'right-choice',
    template: 'standard',
    heroStyle: 'cover',
    category: 'Home Care',
    readTime: '5 min read',
    date: 'December 6, 2024',
    author: 'nathalie',
    hero: '/assets/photos/hero-companionship-man.jpg',
    title: 'What Makes Caring Hearts Home Care the Right Choice for Your Family?',
    deck: 'Choosing home care is one of the most personal decisions a family can make. Here is what sets compassionate, dependable care apart — and how to recognize it.',
    blocks: [
      { type: 'p', text: 'When a loved one needs help at home, the search for care can feel overwhelming. You are not just hiring a service — you are inviting someone into your family’s daily life. The right caregiver brings skill, yes, but also warmth, patience and genuine connection.' },
      { type: 'h2', text: 'Care that adapts to your loved one' },
      { type: 'p', text: 'No two families are alike, so no two care plans should be either. The best home care begins with listening: understanding routines, preferences, health needs and the small things that make a house feel like home. From there, a plan takes shape — a few hours a week, or around-the-clock support.' },
      { type: 'quote', text: 'I know nothing can truly replace the love of a family member. But I am committed to creating the closest semblance of it.', cite: 'Nathalie Massey, Founder' },
      { type: 'image', src: '/assets/photos/caregiver-doorway.jpg', caption: 'A caregiver greets a client at the door — every visit begins with a familiar, friendly face.' },
      { type: 'callout', title: 'What to look for', text: 'Background-checked, certified caregivers · a personalized care plan · a dedicated coordinator · and a real commitment to matching personalities, not just schedules.' },
      { type: 'h2', text: 'A partner you can trust' },
      { type: 'p', text: 'Trust is earned in the details — a caregiver who shows up on time, remembers how your father takes his coffee, and calls when something changes. When you find care like that, you feel it immediately: the weight lifts, and you can simply be family again.' },
    ],
  },
  {
    id: 'respite-benefits',
    template: 'listicle',
    heroStyle: 'full',
    category: 'Respite Care',
    readTime: '4 min read',
    date: 'November 5, 2024',
    author: 'team',
    hero: '/assets/photos/respite-care.jpg',
    title: 'Discover 3 Benefits of Respite Care: Make Caregiving Easier and More Rewarding',
    deck: 'Full-time caregiving is a nonstop commitment. Respite care gives family caregivers the breaks they need — and deserve. Here are three ways it helps.',
    blocks: [
      { type: 'p', text: 'If you care for a loved one, you know the role rarely clocks out. Respite care offers short-term, professional support so you can step away with confidence. Here is why it matters.' },
      { type: 'numbered', n: 1, h: 'You get to rest and recharge', text: 'Burnout is real. A few hours — or a few days — of trusted coverage lets you sleep, run errands, travel, or simply breathe. You return a better, more present caregiver.' },
      { type: 'numbered', n: 2, h: 'Your loved one keeps their routine', text: 'A professional caregiver continues the daily rhythm your loved one relies on, so they stay comfortable and cared for while you are away — no disruption, no worry.' },
      { type: 'numbered', n: 3, h: 'Your whole family benefits', text: 'When the primary caregiver is supported, relationships ease and everyone is more patient and present. Respite care is care for the family, not just the client.' },
      { type: 'callout', title: 'Good to know', text: 'Respite care is flexible — schedule it for a single afternoon, recurring weekly hours, overnight, or a longer stretch while you travel.' },
      { type: 'p', text: 'Asking for help is not a failure — it is one of the wisest, most loving things a caregiver can do. Respite care makes the journey sustainable.' },
    ],
  },
  {
    id: 'personal-care-myths',
    template: 'listicle',
    heroStyle: 'overlay',
    category: 'Personal Care',
    readTime: '6 min read',
    date: 'November 1, 2024',
    author: 'team',
    hero: '/assets/photos/caregiver-doorway.jpg',
    title: '7 Myths About Personal Care Services That Are Holding Your Family Back',
    deck: 'Are you letting myths about personal care services hold your family back from the exceptional support they deserve? Let’s set the record straight.',
    blocks: [
      { type: 'p', text: 'Personal care can be transformative for a loved one who needs a hand with daily life — but a few stubborn misconceptions keep many families from ever picking up the phone. Here are seven of the most common myths, and the reality behind each one.' },
      { type: 'numbered', n: 1, h: 'Myth: Personal care is only for the elderly', text: 'Reality: Personal care supports people of any age who need daily assistance — after an illness, an injury, or while managing a condition. Care is tailored to the individual, not their birthday.' },
      { type: 'numbered', n: 2, h: 'Myth: Personal care is too expensive', text: 'Reality: Compared to a nursing home or assisted living, in-home personal care is often more affordable — and it’s customizable, so you only pay for the hours and level of support you actually need.' },
      { type: 'numbered', n: 3, h: 'Myth: It’s less effective than facility care', text: 'Reality: One-on-one attention in a familiar home tends to produce better outcomes and higher satisfaction, because care is built around your loved one’s real preferences and needs.' },
      { type: 'numbered', n: 4, h: 'Myth: Personal care is only for short-term needs', text: 'Reality: Personal care flexes to fit both temporary recovery and ongoing, long-term support for chronic conditions — for as short or as long as you need it.' },
      { type: 'numbered', n: 5, h: 'Myth: Family can provide the same level of care', text: 'Reality: Family love is irreplaceable, but professional caregivers bring training and specialized skills — safe transfers, hygiene care, medication routines — that protect your loved one and lighten your load.' },
      { type: 'numbered', n: 6, h: 'Myth: Personal care providers don’t offer companionship', text: 'Reality: The best personal care is deeply relational. Alongside hands-on help, caregivers offer conversation, encouragement and genuine companionship.' },
      { type: 'numbered', n: 7, h: 'Myth: Personal care services aren’t regulated', text: 'Reality: Reputable agencies follow strict standards and screening, with background-checked, certified caregivers and quality oversight comparable to facility settings.' },
      { type: 'callout', title: 'The bottom line', text: 'Don’t let an outdated assumption keep your family from the support it deserves. A free consultation is the easiest way to separate myth from reality for your situation.' },
    ],
  },
  {
    id: 'dementia-factors',
    template: 'guide',
    heroStyle: 'inline',
    category: 'Dementia Care',
    readTime: '7 min read',
    date: 'October 30, 2024',
    author: 'team',
    hero: '/assets/photos/dementia-care.jpg',
    title: '5 Essential Factors to Consider When Choosing Dementia Care Services',
    deck: 'Choosing the right dementia care is a crucial decision. This guide walks you through the five factors that matter most — and a checklist to bring to your search.',
    blocks: [
      { type: 'learn', title: 'What you’ll learn', items: ['How to evaluate caregiver expertise', 'Why consistency matters in dementia care', 'Questions to ask any provider', 'How to weigh location and cost'] },
      { type: 'numbered', n: 1, h: 'Specialized expertise', text: 'Dementia care is its own discipline. Look for caregivers trained in cognitive stimulation, gentle redirection and behavioral support — not just general home care.' },
      { type: 'numbered', n: 2, h: 'Consistency of caregivers', text: 'Familiar faces reduce confusion and anxiety. Ask how a provider ensures the same caregivers return, and how they handle backup coverage.' },
      { type: 'numbered', n: 3, h: 'A structured, safe routine', text: 'Predictable daily rhythms and a safe environment are calming. The right provider builds structure around your loved one’s habits and history.' },
      { type: 'numbered', n: 4, h: 'Family communication', text: 'You deserve to know how each day goes. Choose a provider with open, regular communication and a coordinator who knows your family by name.' },
      { type: 'numbered', n: 5, h: 'Location, cost & flexibility', text: 'Practical factors matter too. Consider service area, transparent pricing, and whether care can scale as needs change over time.' },
      { type: 'checklist', title: 'Bring this checklist to your search', items: ['Are caregivers specifically trained in dementia care?', 'Will the same caregivers return consistently?', 'How is the care plan built around my loved one’s history?', 'How and how often will you communicate with our family?', 'Is pricing clear, and can care scale up later?'] },
      { type: 'callout', title: 'Key takeaway', text: 'The best dementia care blends clinical skill with genuine warmth, consistency and clear communication. Trust your instincts — and ask plenty of questions.' },
    ],
  },
  {
    id: 'post-cosmetic-benefits',
    template: 'guide',
    heroStyle: 'cover',
    category: 'Post-Cosmetic Care',
    readTime: '6 min read',
    date: 'October 27, 2024',
    author: 'team',
    hero: '/assets/photos/post-cosmetic-care.jpg',
    title: '5 Essential Benefits of Compassionate Post-Cosmetic Care for a Speedy Recovery',
    deck: 'Proper nutrition, careful wound care and emotional support all accelerate healing after a cosmetic procedure. Here’s how compassionate post-cosmetic care helps you recover with confidence.',
    blocks: [
      { type: 'p', text: 'Healing well after a cosmetic procedure takes more than rest. The right support — good nutrition, attentive wound care, pain management and genuine encouragement — can mean a smoother, faster, more comfortable recovery at home.' },
      { type: 'h2', text: 'Why recovery support matters' },
      { type: 'p', text: 'Your body needs the right fuel to mend: protein for tissue repair, vitamin C for collagen, vitamin A for cell regeneration, omega-3s to calm inflammation and zinc for immune support. A caregiver can help plan and prepare meals so good nutrition is one less thing to think about.' },
      { type: 'callout', title: 'Follow your surgeon’s guidance', text: 'Every procedure comes with specific post-op instructions — incision care, medications, activity limits. A caregiver helps you follow them to the letter, take medication as directed, keep wounds clean and dry, and stay patient through every follow-up.' },
      { type: 'numbered', n: 1, h: 'Avoiding infections', text: 'Expert, attentive care keeps incisions clean and complications at bay during the most delicate stage of healing.' },
      { type: 'numbered', n: 2, h: 'Emotional support', text: 'Recovery can be an emotional time. Compassionate, reassuring company helps you stay positive and patient as you heal.' },
      { type: 'numbered', n: 3, h: 'The best possible outcome', text: 'Comprehensive care — from wound care to gentle post-operative support — protects your results and your confidence.' },
      { type: 'numbered', n: 4, h: 'Individualized support', text: 'Care is tailored to your procedure and your goals, so your recovery is as comfortable and effective as possible.' },
      { type: 'numbered', n: 5, h: 'A quicker recovery', text: 'Professional monitoring and help with daily tasks let you rest properly and return to normal life sooner.' },
      { type: 'p', text: 'Caring Hearts Care offers personalized post-cosmetic care — help with daily tasks, medication management and recovery support — so you can heal safely and comfortably in your own home.' },
    ],
  },
  {
    id: 'home-care-benefits',
    template: 'listicle',
    heroStyle: 'full',
    category: 'Home Care',
    readTime: '8 min read',
    date: 'September 22, 2024',
    author: 'nathalie',
    hero: '/assets/photos/caregiver-couch.jpg',
    title: '14 Proven Benefits of Home Care for Your Aging Loved Ones',
    deck: 'Aging in place lets seniors receive personalized care while keeping their independence and emotional stability in familiar surroundings. Here are 14 reasons families choose home care.',
    blocks: [
      { type: 'p', text: 'For many families, the goal is simple: help a loved one stay in the home they love, safely and with dignity. Home care makes that possible — offering a warmer, more personal alternative to a facility. Here are fourteen of its most meaningful benefits.' },
      { type: 'numbered', n: 1, h: 'Emotional stability through familiarity', text: 'Staying home reduces the isolation and disorientation an institutional move can cause — especially for those living with dementia.' },
      { type: 'numbered', n: 2, h: 'Preserving independence', text: 'Clients keep control of their schedule, their pace and their daily choices, which supports autonomy and a strong sense of self.' },
      { type: 'numbered', n: 3, h: 'Personalized care for unique needs', text: 'A dedicated caregiver gives individualized, one-on-one attention built around specific health requirements.' },
      { type: 'numbered', n: 4, h: 'Tailored support for health and mobility', text: 'Hands-on help with bathing, grooming and dressing promotes physical well-being, comfortably and respectfully.' },
      { type: 'numbered', n: 5, h: 'Light housekeeping', text: 'Vacuuming, laundry and tidying create a safer, more manageable living space.' },
      { type: 'numbered', n: 6, h: 'Nutritional health and wellness', text: 'Thoughtful meal preparation ensures proper nutrition while honoring dietary preferences and restrictions.' },
      { type: 'numbered', n: 7, h: 'Companionship and social connection', text: 'A genuine caregiver relationship eases loneliness and lifts emotional well-being.' },
      { type: 'numbered', n: 8, h: 'Staying connected to the community', text: 'Transportation keeps seniors socially engaged and physically active beyond the front door.' },
      { type: 'numbered', n: 9, h: 'Respite for family caregivers', text: 'Temporary, trusted coverage lets family members rest and recharge — without guilt.' },
      { type: 'numbered', n: 10, h: 'Dementia and Alzheimer’s support', text: 'Specialized training in behavioral management and cognitive stimulation supports more complex needs.' },
      { type: 'numbered', n: 11, h: 'A safe space for cognitive impairment', text: 'Familiar surroundings and a calm caregiver reduce the anxiety that relocation can trigger.' },
      { type: 'numbered', n: 12, h: 'Support for physical independence', text: 'Help with mobility challenges allows seniors to remain safely at home for longer.' },
      { type: 'numbered', n: 13, h: 'Flexibility in routine', text: 'Care adapts to personal preferences rather than forcing life into an institutional schedule.' },
      { type: 'numbered', n: 14, h: 'Professional, compassionate care', text: 'Trained, caring caregivers deliver quality support that genuinely improves day-to-day quality of life.' },
      { type: 'callout', title: 'Aging in place, with peace of mind', text: 'The right home care lets your loved one stay where they’re happiest — and lets your family breathe easier. A free consultation is the perfect first step.' },
    ],
  },
];

export const POST_ORDER = articles.map((a) => a.id);
export const articleById = (id: string) => articles.find((a) => a.id === id);

export function slugify(s: string): string {
  return s.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
}
