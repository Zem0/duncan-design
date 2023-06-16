import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.sass';
import { CodeBlock, PaintBrush } from '@phosphor-icons/react';
import React from 'react';
import Section from '../components/Section';
import ProjectCard from '../components/ProjectCard';
import Image from 'next/image';
import outgoingsIcon from '../public/images/outgoingsIcon.png';

export default function Home() {
    return (
        <Layout home>
            <Head>
                <title>{siteTitle}</title>
            </Head>
            <section className={`${utilStyles['text-two-column-oversized']} ${utilStyles.grid}`}>
                <div>
                    <p className={`${utilStyles['oversized-text']}`}>
                        Hi. I&apos;m Duncan, a designer<PaintBrush weight="fill"/> &amp; front-end developer<CodeBlock weight="fill"/> based in the UK ツ
                    </p>
                </div>
                <div>
                    <p>This thing comes fully loaded. AM/FM radio, reclining bucket seats, and... power windows. Did he just throw my cat out of the window? God help us, we&apos;re in the hands of engineers. God help us, we&apos;re in the hands of engineers. You know what? It is beets. I&apos;ve crashed into a beet truck.</p>
                    {/* <p><Link href="/posts/first-post">Check my latest post</Link></p>
                    <p><Link href="/projects">Check my latest project</Link></p> */}
                </div>
            </section>
            <Section heading='Latest Projects'>
                <div className={`${utilStyles.grid} ${utilStyles['grid-cols-1']} ${utilStyles['grid-cols-2']} ${utilStyles['grid-cols-3']}`}>
                    <ProjectCard
                        caption='Icon Design'
                        imgSrc={outgoingsIcon}
                        altText='Icon for the iOS app Outgoings'>
                    </ProjectCard>
                </div>
            </Section>
        </Layout>
    );
}