// MainStreetAI site config — edit this ONE file before deploying.
module.exports = {
  BASE_URL: "https://mainstreetai.tools", // TODO: swap for your Vercel/custom domain
  SITE_NAME: "MainStreetAI",
  CONTACT_EMAIL: "mainstreettools@gmail.com", // TODO
  STRIPE: { // TODO: paste real Stripe Payment Links (https://buy.stripe.com/...)
    featuredSpot: "https://buy.stripe.com/cNieVccjeaFL0NJ1QIgA803", // Founding: $149/mo, code FOUNDING49 = $49 first month (old $299 link: https://buy.stripe.com/8x27sKab6g050NJ52UgA800)
    // newsletterBanner paused until 500 subscribers (old link deactivated: https://buy.stripe.com/bJe00i3MI6pvaoj7b2gA801)
    fastTrack: "https://buy.stripe.com/6oU6oG0AwbJP2VR3YQgA802"
  },
  FOUNDING_CODE: "FOUNDING49",
  FOUNDING_ENDS: "Dec 31, 2026",
  FEATURED: [ // two Featured Partner slots; set name/url/blurb when sold
    { name: null, url: null, blurb: null },
    { name: null, url: null, blurb: null }
  ],
  TICKER: ["Your business here — Featured Partner spots open", "Reach owners of plumbing, HVAC, legal & clinic businesses", "Free founding listings for the first 10 vendors"]
};
