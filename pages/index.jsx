import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.sass';
import { Briefcase, IdentificationCard } from '@phosphor-icons/react';
import React from 'react';
import Section from '../components/Section';
import Polaroid from '../components/Polaroid';
import Image from 'next/image';
import homeStyles from '../styles/Home.module.sass';
import TimelineList from '../components/TimelineList';
import Map from '../public/images/map.png';
import SquareCard from '../components/SquareCard';
import Folds from '../public/images/folds.png';
import FilesCard from '../components/FilesCard';
import RowWrapper from '../components/RowWrapper';
import HelloText from '../components/HelloText';

export default function Home() {
    return (
        <Layout home>
            <Head>
                <title>{siteTitle}</title>
            </Head>
            <section className={`${utilStyles.flex} ${utilStyles['flex-align-end']} ${homeStyles.card} ${homeStyles['card--intro']}`}>
                <Polaroid />
                <HelloText className={`${homeStyles['hello_sticker']}`} />
            </section>
            <Section heading='About' icon={IdentificationCard} notes >
                <p>This thing comes fully loaded. AM/FM radio, reclining bucket seats, and... power windows. Did he just throw my cat out of the window? God help us, we&apos;re in the hands of engineers. God help us, we&apos;re in the hands of engineers. You know what? It is beets. I&apos;ve crashed into a beet truck.</p>
            </Section>
            <RowWrapper>
                <SquareCard className={`${homeStyles['map-card']}`}>
                    <Image
                        src={Map}
                        priority={true}
                        alt='A map showing the south of England and northern France'
                        className={`${homeStyles['map-card__img']}`}
                    />
                    <Image
                        src={Folds}
                        priority={true}
                        alt='transparent gradients to look like fold creases'
                        className={`${homeStyles['map-card__folds']}`}
                    />
                    <div className={`${homeStyles['map-card__dot']}`}></div>
                </SquareCard>
                <FilesCard />
            </RowWrapper>
            <Section heading='Work' icon={Briefcase}>
                <TimelineList />
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