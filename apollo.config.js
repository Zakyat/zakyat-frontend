const path = require('path');

module.exports = {
  client: {
    service: process.env.VUE_APP_APOLLO_ENGINE_SERVICE,
    includes: ['src/**/*.{js,jsx,ts,tsx,vue,gql}'],
  },
  service: {
    name: process.env.VUE_APP_APOLLO_ENGINE_SERVICE,
    localSchemaFile: path.resolve(__dirname, './node_modules/.temp/graphql/schema.json'),
  },
  engine: {
    endpoint: process.env.APOLLO_ENGINE_API_ENDPOINT,
    apiKey: process.env.VUE_APP_APOLLO_ENGINE_KEY,
  },
};
