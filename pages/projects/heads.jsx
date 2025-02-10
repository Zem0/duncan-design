import React from 'react';
import Layout from '../../components/layout';
import Head from 'next/head';
import Navigation from '../../components/Navigation';
import MobileNavigation from '../../components/MobileNavigation';
import Image from 'next/image';
import projectStyles from '../../styles/projects.module.sass';
import utilStyles from '../../styles/utils.module.sass';
import ImageSection from '../../components/ImageSection';
import { images } from '../../data/avatarImages';
import Section from '../../components/Section';
import Columns from '../../components/Columns';
import { Calendar, PersonArmsSpread, BaseballCap, UserCircle } from '@phosphor-icons/react';

export default function Dexie() {
    return (
        <Layout homematch additionalClassName={`${projectStyles['main-content-holder']}`}>
            <Head>
                <title>Icon Design</title>
            </Head>
            <Navigation />
            <Section heading='Heads' icon={UserCircle} notes>
                <Columns additionalClasses={`${projectStyles['info-table']}`} noBorder>
                    <div className={`${projectStyles['info-table__timeline']}`}>
                        <p className={`${projectStyles['info-table__timeline__heading']}`}><em><strong><Calendar weight='fill'/> Timeline</strong></em></p>
                        <p><em>2015 - present</em></p>
                    </div>
                    <div>
                        <p className={`${projectStyles['info-table__timeline__heading']}`}><em><strong><PersonArmsSpread weight='fill'/> Client</strong></em></p>
                        <p><em>Personal project</em></p>
                    </div>
                    <div>
                        <p className={`${projectStyles['info-table__timeline__heading']}`}><em><strong><BaseballCap weight='fill'/> Role</strong></em></p>
                        <p><em>Research, Design, Illustration</em></p>
                    </div>
                </Columns>
            </Section>
            <ImageSection additionalClasses={`${projectStyles['three-image-row']}`}>
                {images.map((image, index) => (
                    <Image
                        key={index}
                        src={image.url}
                        width={image.width}
                        height={image.height}
                        priority={true}
                        alt={image.alt}
                        className={`${utilStyles['general-image']} ${projectStyles['three-image-row__img']}`}
                    />
                ))}
            </ImageSection>
            <MobileNavigation />
        </Layout>
    );
}