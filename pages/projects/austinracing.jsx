import React from 'react';
import Layout from '../../components/layout';
import Head from 'next/head';
import Navigation from '../../components/Navigation';
import Section from '../../components/Section';
import Image from 'next/image';
import { Bookmark, ListMagnifyingGlass, Calendar, PersonArmsSpread, BaseballCap, CursorClick, Link, Cpu } from '@phosphor-icons/react';
import projectStyles from '../../styles/projects.module.sass';
import utilStyles from '../../styles/utils.module.sass';
import Columns from '../../components/Columns';
import ImageSection from '../../components/ImageSection';

export default function Dexie() {
    return (
        <Layout homematch additionalClassName={`${projectStyles['main-content-holder']}`}>
            <Head>
                <title>Austin Racing Case Study</title>
            </Head>
            <Navigation />
            <Section heading='Austin Racing' icon={CursorClick} notes>
                <Columns additionalClasses={`${projectStyles['info-table']}`}>
                    <div className={`${projectStyles['info-table__timeline']}`}>
                        <p className={`${projectStyles['info-table__timeline__heading']}`}><em><strong><Calendar weight='fill'/> Timeline</strong></em></p>
                        <p><em>June 2024</em></p>
                    </div>
                    <div>
                        <p className={`${projectStyles['info-table__timeline__heading']}`}><em><strong><PersonArmsSpread weight='fill'/> Client</strong></em></p>
                        <p><em>Austin Racing / Orca Online</em></p>
                    </div>
                    <div>
                        <p className={`${projectStyles['info-table__timeline__heading']}`}><em><strong><BaseballCap weight='fill'/> Role</strong></em></p>
                        <p><em>Research, Design, Development, Testing</em></p>
                    </div>
                </Columns>
                <Columns additionalClasses={`${projectStyles['info-table']}`} noBorder>
                    <div className={`${projectStyles['info-table__timeline']}`}>
                        <p className={`${projectStyles['info-table__timeline__heading']}`}><em><strong><Link weight='regular'/> URL</strong></em></p>
                        <a href='https://austin-racing-website.vercel.app' target='_blank'><em>austin-racing-website.vercel.app</em></a>
                    </div>
                    <div className={`${projectStyles['info-table__timeline']}`}>
                        <p className={`${projectStyles['info-table__timeline__heading']}`}><em><strong><Cpu weight='fill'/> Tech Stack</strong></em></p>
                        <p><em>HTML, CSS, Javascript, Vercel</em></p>
                    </div>
                </Columns>
            </Section>
            <ImageSection>
                <Image
                    src='https://dyweauwosjjahwbmhpiw.supabase.co/storage/v1/object/public/portfolio-images/austin-racing/Screenshot%202025-01-27%20at%2014.30.10.png'
                    width={1215}
                    height={972}
                    priority={true}
                    alt='A screenshot of the austin racing webpage hero section with a Safari chrome surround'
                    className={`${utilStyles['general-image']}`}
                />
            </ImageSection>
            <Section heading='Overview' icon={Bookmark} notes>
                <p>
                    <a href='https://www.orcaonline.co.uk' target='_blank'>Orca Online</a> came to me with a client who searches for investors to buy companies from his selected portfolio. The client wanted something akin to a flyer, which contained all the info about the business in question, but in a digital format.
                </p>
                <p>
                    After some discussion we settled on the idea of a simple static webpage, which could be linked to from various different places. The client then had the option of sending the URL directly to prospective buyers.
                </p>
            </Section>
            <ImageSection>
                <Image
                    src='https://dyweauwosjjahwbmhpiw.supabase.co/storage/v1/object/public/portfolio-images/austin-racing/Screenshot%202025-01-27%20at%2014.20.07.png'
                    width={1215}
                    height={972}
                    priority={true}
                    alt='A screenshot of the austin racing webpage hero section with a Safari chrome surround'
                    className={`${utilStyles['general-image']}`}
                />
            </ImageSection>
            <Section heading='Scoping' icon={ListMagnifyingGlass}>
                <p>
                    The client wanted the page to have to be graphic heavy with moving elements and video playing to grab the users attention. The timeline was very short with the project needed to be live in 3 days with the addition of a relatively small budget.
                </p>
                <p>
                    The team at Orca suggested they also wanted a style similar to some of Apple's product pages, such as the <a href='https://www.apple.com/ipad-pro/' target='_blank'>iPad Pro page</a>.
                </p>
            </Section>
            <ImageSection>
                <Image
                    src='https://dyweauwosjjahwbmhpiw.supabase.co/storage/v1/object/public/portfolio-images/austin-racing/Screenshot%202025-01-27%20at%2014.21.00.png'
                    width={1215}
                    height={972}
                    priority={true}
                    alt='A screenshot of the austin racing webpage hero section with a Safari chrome surround'
                    className={`${utilStyles['general-image']}`}
                />
            </ImageSection>
            <Section>
                <p>
                    Given the project's timeline and resource constraints, I implemented strict milestone deadlines for each component of the page development. This required clear communication with the client regarding scope management and content limitations to maintain the minimalist design aesthetic we aimed to achieve.
                </p>
                <p>
                    Orca originally wanted lots of sound playing on the site, but due to restrictions set by most browsers, videos that are auto playing on the site needed to be muted by default. Again, this was something I had to communicate to both clients, and try and work out a happy medium.
                </p>
                <p>
                    I have a strong belief in not over engineering something if the project doesn't require it. This page has a simple project setup with 3 main files, for HTML, CSS and Javascript and directories for videos, images and audio. No framework was used in the making of this webpage ;-)
                </p>
            </Section>
        </Layout>
    );
}