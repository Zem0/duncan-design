// client.js
import {createClient}  from '@sanity/client';

export const client = createClient({
  projectId: '0962e80m',
  dataset: 'production',
  apiVersion: '2024-05-01',
  useCdn: false // `false` if you want to ensure fresh data
});

export async function getPosts() {
  const posts = await client.fetch('*[_type == "post"]');
  return posts;
}

// export async function getStaticPaths() {
//   console.log(client);
//   const paths = await client.fetch(
//     '*[_type == "post" && defined(slug.current)][].slug.current'
//   );

//   return {
//     paths: paths.map((slug) => ({params: {slug}})),
//     fallback: true,
//   };
// }