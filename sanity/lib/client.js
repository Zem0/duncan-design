// client.js
import sanityClient from '@sanity/client';

export default sanityClient({ //TODO - upgrade this to createClient
  projectId: '0962e80m',
  dataset: 'production',
  apiVersion: '2024-05-01',
  useCdn: true // `false` if you want to ensure fresh data
});