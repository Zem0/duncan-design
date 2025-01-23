import React from 'react';
import Layout from '../../components/layout';
import Head from 'next/head';
import Navigation from '../../components/Navigation';
import Image from 'next/image';
import projectStyles from '../../styles/projects.module.sass';
import utilStyles from '../../styles/utils.module.sass';
import ImageSection from '../../components/ImageSection';
import { images } from '../../data/iconImages';

export default function Dexie() {
    return (
        <Layout homematch additionalClassName={`${projectStyles['main-content-holder']}`}>
            <Head>
                <title>Icon Design</title>
            </Head>
            <Navigation />
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
        </Layout>
    );
}