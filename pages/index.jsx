import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.sass';
import { Briefcase, IdentificationCard } from '@phosphor-icons/react';
import React from 'react';
import Section from '../components/Section';
// import IconCard from '../components/IconCard';
import Polaroid from '../components/Polaroid';
import HelloImg from '../public/images/hello.png';
import Image from 'next/image';
import homeStyles from '../styles/Home.module.sass';

export default function Home() {
    return (
        <Layout home>
            <Head>
                <title>{siteTitle}</title>
            </Head>
            <section className={`${utilStyles.flex} ${utilStyles['flex-align-center']} ${homeStyles.card}`}>
                <Polaroid />
                <Image
                    src={HelloImg}
                    width={420}
                    priority={true}
                    alt='hello text in a cursive font'
                    className={`${homeStyles['card__hello-text']}`}
                />
            </section>
            <Section heading='About' icon={IdentificationCard} notes >
                <p>This thing comes fully loaded. AM/FM radio, reclining bucket seats, and... power windows. Did he just throw my cat out of the window? God help us, we&apos;re in the hands of engineers. God help us, we&apos;re in the hands of engineers. You know what? It is beets. I&apos;ve crashed into a beet truck.</p>
            </Section>
            <Section heading='Work' icon={Briefcase} >
                <p>This thing comes fully loaded. AM/FM radio, reclining bucket seats, and... power windows. Did he just throw my cat out of the window? God help us, we&apos;re in the hands of engineers. God help us, we&apos;re in the hands of engineers. You know what? It is beets. I&apos;ve crashed into a beet truck.</p>
            </Section>
            <section className={`${utilStyles['text-two-column-oversized']} ${utilStyles.grid}`}>
                {/* <div>
                    <p className={`${utilStyles['oversized-text']}`}>
                        Hi. I&apos;m Duncan, a designer<PaintBrush weight="fill"/> &amp; front-end developer<CodeBlock weight="fill"/> based in the UK ツ
                    </p>
                </div> */}
                <div>
                    {/* <p><Link href="/posts/first-post">Check my latest post</Link></p>
                    <p><Link href="/projects">Check my latest project</Link></p> */}
                </div>
            </section>
        </Layout>
    );
}