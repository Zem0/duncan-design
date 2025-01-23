import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.sass';
import { Briefcase, IdentificationCard, PenNib } from '@phosphor-icons/react';
import React from 'react';
import Section from '../components/Section';
import Polaroid from '../components/Polaroid';
import homeStyles from '../styles/Home.module.sass';
import TimelineList from '../components/TimelineList';
import Navigation from '../components/Navigation';
import Stickers from '../components/Stickers';
// import Image from 'next/image';

export default function Home() {
    return (
        <Layout home>
            <Head>
                <title>{siteTitle}</title>
            </Head>
            <Navigation />
            <section className={`${utilStyles.grid} ${homeStyles['sticker-section']}`}>
                <div className={`${utilStyles.flex} ${utilStyles['flex-align-stretch']} ${utilStyles['grid-area-main']} ${utilStyles['flex-justify-stretch']} ${utilStyles['gap-2']} ${homeStyles.card} ${homeStyles['sticker-section__polaroid']}`}>
                    <Polaroid />
                    <Stickers />
                </div>
            </section>
            <Section id='about' heading='About' icon={IdentificationCard} notes >
                <p>
                    <em>
                        For over 9 years I have been providing my skills in design and front-end development to <a href='https://s-d-s.co.uk' target='_blank'>Shelton Development Services</a> in the UK. I&apos;m proud to have worn many hats and have worked in various other areas including UI/UX design, email design, graphic design and project management.
                        <br></br>
                        <br></br>
                        I&apos;m now looking for my next role where I can continue working at the intersection of code, design and art and improve my knowledge and exposure to design systems and component libraries.<PenNib weight='fill'/>
                    </em>
                </p>
            </Section>
            <Section id='work' heading='Work' icon={Briefcase}>
                <TimelineList />
            </Section>
        </Layout>
    );
}