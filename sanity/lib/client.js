// client.js

import sanityClient from '@sanity/client';

export default sanityClient({
  projectId: '0962e80m', // you can find this in sanity.json
  dataset: 'production', // or the name you chose in step 1
  apiVersion: '2024-05-01',
  useCdn: true // `false` if you want to ensure fresh data
});