import Link from 'next/link';
import groq from 'groq';
import client from '../../sanity/lib/client';

import Head from 'next/head';
import Navigation from '../../components/Navigation';
import MobileNavigation from '../../components/MobileNavigation';
import Layout from '../../components/layout';
import Section from '../../components/Section';
import { PenNib } from '@phosphor-icons/react';

import blogStyles from '../../styles/blog.module.sass';

const PostList = ({posts}) => {
    return (
      <Layout homematch additionalClassName={`${blogStyles['main-content-holder']}`}>
        <Head>
          <title>Posts / duncandesign</title>
        </Head>
        <Navigation />
        <Section heading='Posts' icon={PenNib} notes>
          <ul>
            {posts.length > 0 && posts.map(
              ({ _id, title = '', slug = '', publishedAt = '' }) =>
                slug && (
                  <li key={_id} className={`${blogStyles['post-item']}`}>
                    <Link href={`/posts/${encodeURIComponent(slug.current)}`}>
                      {title}
                    </Link>
                    <div className={`${blogStyles['post-line']}`}></div>
                    <span className={`${blogStyles['post-date']}`}>{new Date(publishedAt).toLocaleDateString('en-GB')}</span>
                  </li>
                )
            )}
          </ul>
        </Section>
        <MobileNavigation />
      </Layout>
    );
};

export async function getStaticProps() {
    const posts = await client.fetch(groq`
      *[_type == "post" && publishedAt < now()] | order(publishedAt desc)
    `);
    return {
      props: {
        posts
      }
    };
}

export default PostList;