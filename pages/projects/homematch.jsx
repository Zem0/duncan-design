import React from 'react';
import Layout from '../../components/layout';
import Head from 'next/head';
import Navigation from '../../components/Navigation';
import Section from '../../components/Section';
import MacChrome from '../../components/MacChrome';
import Image from 'next/image';
import { Bookmark } from '@phosphor-icons/react';
import projectStyles from '../../styles/projects.module.sass';

export default function HomeMatch() {
    return (
        <Layout homematch additionalClassName={`${projectStyles['main-content-holder']}`}>
            <Head>
                <title>HomeMatch Case Study</title>
            </Head>
            <Navigation />
            <Section pageHeading='HomeMatch' >

            </Section>
            <Section heading='Overview' icon={Bookmark} notes >
                <p>
                    HomeMatch is a web app designed for local authorities, housing associations, and estate agents which helps the teams to match applicants to a list of suitable properties based on a number of factors including affordability, location and number of bedrooms desired.
                    <br></br>
                    <br></br>
                    The goal was to produce two separate areas of the app - a public facing portal where users could register and fill out a questionnaire, and a staff area where data could be viewed and added regarding applications, schemes and properties.
                </p>
            </Section>
            <MacChrome>
                <Image
                    src='https://dyweauwosjjahwbmhpiw.supabase.co/storage/v1/object/public/portfolio-images/homematch/IMG_4650.png'
                    width={3710}
                    height={1874}
                    priority={true}
                    alt='A screenshot showing HomeMatch UI'
                    className={`${projectStyles.screenshot}`}
                />
            </MacChrome>
        </Layout>
    );
}

// HomeMatch.pageClass = 'HM';