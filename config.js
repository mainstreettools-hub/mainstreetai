// MainStreetAI site config — edit this ONE file before deploying.
module.exports = {
  BASE_URL: "https://mainstreetai.tools", // TODO: swap for your Vercel/custom domain
  SITE_NAME: "MainStreetAI",
  CONTACT_EMAIL: "mainstreettools@gmail.com", // TODO
  STRIPE: { // TODO: paste real Stripe Payment Links (https://buy.stripe.com/...)
    featuredSpot: "https://buy.stripe.com/8x27sKab6g050NJ52UgA800",
    newsletterBanner: "https://buy.stripe.com/bJe00i3MI6pvaoj7b2gA801",
    fastTrack: "https://buy.stripe.com/6oU6oG0AwbJP2VR3YQgA802"
  },
  FEATURED: [ // two Featured Partner slots; set name/url/blurb when sold
    { name: null, url: null, blurb: null },
    { name: null, url: null, blurb: null }
  ],
  TICKER: ["Your business here — Featured Partner spots open", "Reach owners of plumbing, HVAC, legal & clinic businesses", "MainStreet AI Brief newsletter banner: $450/week"]
};
