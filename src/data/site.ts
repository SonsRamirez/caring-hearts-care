/**
 * Central site configuration for Caring Hearts Care.
 *
 * ⚠️  PLACEHOLDERS TO CONFIRM:
 *   - `phone` / `phoneHref` and `email` are placeholders. The live caringheartscare.com
 *     does not publish them in scrapeable HTML, so update these with the real values.
 *   - `web3formsKey` must be set for the contact & careers forms to deliver mail
 *     (get a free key at https://web3forms.com — it's just your email, no account).
 */

export const site = {
  name: 'Caring Hearts Care',
  tagline: 'Your Family Is Our Family',
  promise: 'Your Family Is Our Family',
  description:
    'Compassionate, professional in-home senior care for families across Potomac and the greater DC, Maryland & Virginia area. Your family is our family.',

  // --- Contact (PLACEHOLDERS — confirm with the real business details) ---
  phone: '(301) 555-0142',
  phoneHref: 'tel:+13015550142',
  email: 'care@caringheartscare.com',
  location: 'Potomac, MD 20854',
  serviceArea: 'Potomac, MD & the greater DC, Maryland & Virginia area',
  hours: 'Open 24 hours, 7 days a week — including holidays',

  // --- Social (verified live) ---
  social: {
    facebook: 'https://www.facebook.com/caringheartscare',
    instagram: 'https://www.instagram.com/caringheartscare/',
  },

  // --- Forms ---
  // Replace with your Web3Forms access key (https://web3forms.com). Leave as-is to
  // build; forms won't deliver until a real key is set.
  web3formsKey: 'YOUR_WEB3FORMS_ACCESS_KEY',
};

export type Site = typeof site;
