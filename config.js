// MainStreetAI site config — edit this ONE file before deploying.
module.exports = {
  BASE_URL: "https://mainstreetai.vercel.app", // TODO: swap for your Vercel/custom domain
  SITE_NAME: "MainStreetAI",
  CONTACT_EMAIL: "hello@example.com", // TODO
  STRIPE: { // TODO: paste real Stripe Payment Links (https://buy.stripe.com/...)
    featuredSpot: "https://buy.stripe.com/REPLACE_FEATURED_SPOT_299_MO",
    newsletterBanner: "https://buy.stripe.com/REPLACE_NEWSLETTER_BANNER_450_WK",
    fastTrack: "https://buy.stripe.com/REPLACE_FAST_TRACK_49"
  },
  FEATURED: [ // two Featured Partner slots; set name/url/blurb when sold
    { name: null, url: null, blurb: null },
    { name: null, url: null, blurb: null }
  ],
  TICKER: ["Your business here — Featured Partner spots open", "Reach owners of plumbing, HVAC, legal & clinic businesses", "MainStreet AI Brief newsletter banner: $450/week"]
};
