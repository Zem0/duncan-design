import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.sass';
import { Briefcase, IdentificationCard } from '@phosphor-icons/react';
import React from 'react';
import Section from '../components/Section';
import Polaroid from '../components/Polaroid';
// import Image from 'next/image';
import homeStyles from '../styles/Home.module.sass';
import TimelineList from '../components/TimelineList';
// import Map from '../public/images/map.png';
// import SquareCard from '../components/SquareCard';
// import Folds from '../public/images/folds.png';
// import FilesCard from '../components/FilesCard';
// import RowWrapper from '../components/RowWrapper';
import HelloText from '../components/HelloText';
import Navigation from '../components/Navigation';

export default function Home() {
    return (
        <Layout home>
            <Head>
                <title>{siteTitle}</title>
            </Head>
            <Navigation />
            <section className={`${utilStyles.flex} ${utilStyles['flex-align-end']} ${homeStyles.card} ${homeStyles['card--intro']}`}>
                <Polaroid />
                <HelloText className={`${homeStyles['hello_sticker']}`} />
            </section>
            <Section id='about' heading='About' icon={IdentificationCard} notes >
                <p>
                    For over 9 years I have been providing my skills in front-end development and design to Shelton Development Services in the UK. I&apos;m proud to have worn many hats and have worked in various other areas including UI/UX design, email design, graphic design and project management.
                    <br></br>
                    <br></br>
                    I&apos;m now looking for my next role where I can continue working at the intersection of code, design and art and improve my knowledge and exposure to design systems and component libraries.
                </p>
            </Section>
            {/* <RowWrapper>
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
            </RowWrapper> */}
            <Section id='work' heading='Work' icon={Briefcase}>
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