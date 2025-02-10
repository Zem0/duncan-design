import groq from 'groq';
import imageUrlBuilder from '@sanity/image-url';
import {PortableText} from '@portabletext/react';
import client from '../../sanity/lib/client';
import Image from 'next/image';
const BlockContent = require('@sanity/block-content-to-react');

import Head from 'next/head';
import Navigation from '../../components/Navigation';
import MobileNavigation from '../../components/MobileNavigation';
import ImageSection from '../../components/ImageSection';
import Layout from '../../components/layout';
import Section from '../../components/Section';
// import serializer from '../../components/serializer';

import blogStyles from '../../styles/blog.module.sass';
import utilStyles from '../../styles/utils.module.sass';

function urlFor (source) {
  return imageUrlBuilder(client).image(source);
}

const ptComponents = {
  types: {
    image: ({ value }) => {
      if (!value?.asset?._ref) {
        return null;
      }
      return (
        <Image
          alt={value.alt || ' '}
          loading="lazy"
          width={320}
          height={240}
          quality={100}
          className={`${blogStyles['post-img']}`}
          src={urlFor(value).auto('format').url()}
        />
      );
    },
    hr: () => <hr className={`${blogStyles['custom-hr']}`} />,
  }
};

const Post = ({post}) => {
  const {
    title = 'Missing title',
    name = 'Missing name',
    categories,
    mainImage,
    publishedAt,
    body = []
  } = post;
  return (
    <Layout homematch additionalClassName={`${blogStyles['main-content-holder']}`}>
      <Head>
          <title>{title}</title>
          <meta name="og:title" content={title} />
      </Head>
      <Navigation />
      {mainImage && (
        <ImageSection>
          <Image
            src={urlFor(mainImage).url()}
            alt={`${name}'s picture`}
            width={688}
            height={393}
            className={`${utilStyles['general-image']}`}
          />
        </ImageSection>

      )}
      <Section heading={title} notes additionalClasses={`${blogStyles['post-section']}`}>
        <article className={`${blogStyles['post']}`}>
          {categories && (
            <ul className={`${'tag-list'}`}>
              <li className={`${'tag'}`}>{new Date(publishedAt).toLocaleDateString('en-GB')}</li>
              {categories.map(category => <li key={category} className={`${'tag'} ${category}`}>{category.toUpperCase()}</li>)}
            </ul>
          )}
          <PortableText
            value={body}
            components={ptComponents}
            type={{ type: 'blockContent' }}
          />
          <BlockContent></BlockContent>
        </article>
      </Section>
      <MobileNavigation />
    </Layout>
  );
};

const query = groq`*[_type == "post" && slug.current == $slug][0]{
  title,
  "name": author->name,
  "categories": categories[]->title,
  publishedAt,
  "authorImage": author->image,
  mainImage,
  "image": image.asset->url,
  body
}`;

export async function getStaticPaths() {

  const paths = await client.fetch(
    groq`*[_type == "post" && defined(slug.current)][].slug.current`
  );

  return {
    paths: paths.map((slug) => ({params: {slug}})),
    fallback: 'blocking',
  };
}

export async function getStaticProps(context) {
  // It's important to default the slug so that it doesn't return "undefined"
  const { slug = '' } = context.params;
  const post = await client.fetch(query, { slug });
  console.log(client);
  return {
    props: {
      post
    }
  };
}
export default Post;