/**
 * Project config
 * NOTE: No private data/keys should be stored here.
 */
module.exports = function siteConfig(isProduction) {
  return (
    {
      SITENAME: process.env.SITENAME || 'zmgc',
      TWITTER: process.env.TWITTER || 'zmgc',
      GITHUB: process.env.GITHUB || 'TZM',
      GOOGLE_ANALYTICS_UA: (isProduction) ? 'UA-79510184-1' : 'dev',
      AUTH0_CLIENT_ID: process.env.AUTH0_CLIENT_ID || 'oXN9xzJCJAU5BJxftjS4DbGN5hNhGnhk',
      AUTH0_DOMAIN: process.env.AUTH0_DOMAIN || 'zmgc.auth0.com',
      ALGOLIA_ADMIN: process.env.ALGOLIA_ADMIN || '07aa17b67ca0a2609b9dd4b03d939a0a',
      SEGMENT_KEY: process.env.SEGMENT_KEY || 'gNftvcGllpKZTe5PcAxF8pEoenLq32H0',
      /* Serverless API Gateway Endpoints */
      API: {
        ERROR: 'https://h413evrxuk.execute-api.us-west-2.amazonaws.com/dev/report',
        NEWSLETTER: 'https://3upqirwiuc.execute-api.us-west-2.amazonaws.com/dev/subscribe'
      }
    }
  )
}
