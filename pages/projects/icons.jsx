import React from 'react';
import Layout from '../../components/layout';
import Head from 'next/head';
import Navigation from '../../components/Navigation';
import Image from 'next/image';
import projectStyles from '../../styles/projects.module.sass';
import utilStyles from '../../styles/utils.module.sass';
import ImageSection from '../../components/ImageSection';

export default function Dexie() {
    return (
        <Layout homematch additionalClassName={`${projectStyles['main-content-holder']}`}>
            <Head>
                <title>Icon Design</title>
            </Head>
            <Navigation />
            <ImageSection additionalClasses={`${projectStyles['three-image-row']}`}>
                <Image
                    src='https://dyweauwosjjahwbmhpiw.supabase.co/storage/v1/object/public/portfolio-images/icons/SettingsIcon.jpg'
                    width={4000}
                    height={3000}
                    priority={true}
                    alt='A UI design showing the detail view for the Pokémon® Charizard'
                    className={`${utilStyles['general-image']} ${projectStyles['three-image-row__img']}`}
                />
                <Image
                    src='https://dyweauwosjjahwbmhpiw.supabase.co/storage/v1/object/public/portfolio-images/icons/CORAL@1x.jpg'
                    width={1600}
                    height={1200}
                    priority={true}
                    alt='A UI design showing the detail view for the Pokémon® Charizard'
                    className={`${utilStyles['general-image']} ${projectStyles['three-image-row__img']}`}
                />
                <Image
                    src='https://dyweauwosjjahwbmhpiw.supabase.co/storage/v1/object/public/portfolio-images/icons/BLUE@1x.png'
                    width={1600}
                    height={1200}
                    priority={true}
                    alt='A UI design showing the detail view for the Pokémon® Charizard'
                    className={`${utilStyles['general-image']} ${projectStyles['three-image-row__img']}`}
                />
                <Image
                    src='https://dyweauwosjjahwbmhpiw.supabase.co/storage/v1/object/public/portfolio-images/icons/WHITE@1x.png'
                    width={1600}
                    height={1200}
                    priority={true}
                    alt='A UI design showing the detail view for the Pokémon® Charizard'
                    className={`${utilStyles['general-image']} ${projectStyles['three-image-row__img']}`}
                />
                <Image
                    src='https://dyweauwosjjahwbmhpiw.supabase.co/storage/v1/object/public/portfolio-images/icons/ClearHologram.jpg'
                    width={1600}
                    height={1200}
                    priority={true}
                    alt='A UI design showing the detail view for the Pokémon® Charizard'
                    className={`${utilStyles['general-image']} ${projectStyles['three-image-row__img']}`}
                />
                <Image
                    src='https://dyweauwosjjahwbmhpiw.supabase.co/storage/v1/object/public/portfolio-images/icons/PakuBubble-Shot.jpg'
                    width={3000}
                    height={2250}
                    priority={true}
                    alt='A UI design showing the detail view for the Pokémon® Charizard'
                    className={`${utilStyles['general-image']} ${projectStyles['three-image-row__img']}`}
                />
                <Image
                    src='https://dyweauwosjjahwbmhpiw.supabase.co/storage/v1/object/public/portfolio-images/icons/PakuiOS6-Shot.jpg'
                    width={3000}
                    height={2250}
                    priority={true}
                    alt='A UI design showing the detail view for the Pokémon® Charizard'
                    className={`${utilStyles['general-image']} ${projectStyles['three-image-row__img']}`}
                />
                <Image
                    src='https://dyweauwosjjahwbmhpiw.supabase.co/storage/v1/object/public/portfolio-images/icons/BlueskyShot.png'
                    width={4000}
                    height={3000}
                    priority={true}
                    alt='A UI design showing the detail view for the Pokémon® Charizard'
                    className={`${utilStyles['general-image']} ${projectStyles['three-image-row__img']}`}
                />
                <Image
                    src='https://dyweauwosjjahwbmhpiw.supabase.co/storage/v1/object/public/portfolio-images/icons/SketchExperimental-Shot2.png'
                    width={1600}
                    height={1200}
                    priority={true}
                    alt='A UI design showing the detail view for the Pokémon® Charizard'
                    className={`${utilStyles['general-image']} ${projectStyles['three-image-row__img']}`}
                />
                <Image
                    src='https://dyweauwosjjahwbmhpiw.supabase.co/storage/v1/object/public/portfolio-images/icons/iTunes-Terminal-Shot.png'
                    width={4000}
                    height={3000}
                    priority={true}
                    alt='A UI design showing the detail view for the Pokémon® Charizard'
                    className={`${utilStyles['general-image']} ${projectStyles['three-image-row__img']}`}
                />
                <Image
                    src='https://dyweauwosjjahwbmhpiw.supabase.co/storage/v1/object/public/portfolio-images/icons/Outgoings-AppIcon.png'
                    width={1600}
                    height={1200}
                    priority={true}
                    alt='A UI design showing the detail view for the Pokémon® Charizard'
                    className={`${utilStyles['general-image']} ${projectStyles['three-image-row__img']}`}
                />
                <Image
                    src='https://dyweauwosjjahwbmhpiw.supabase.co/storage/v1/object/public/portfolio-images/icons/Outgoings-AppIcon-Blueprint.png'
                    width={1600}
                    height={1200}
                    priority={true}
                    alt='A UI design showing the detail view for the Pokémon® Charizard'
                    className={`${utilStyles['general-image']} ${projectStyles['three-image-row__img']}`}
                />
                <Image
                    src='https://dyweauwosjjahwbmhpiw.supabase.co/storage/v1/object/public/portfolio-images/icons/Outgoings-Leather@1x.png'
                    width={1600}
                    height={1200}
                    priority={true}
                    alt='A UI design showing the detail view for the Pokémon® Charizard'
                    className={`${utilStyles['general-image']} ${projectStyles['three-image-row__img']}`}
                />
                <Image
                    src='https://dyweauwosjjahwbmhpiw.supabase.co/storage/v1/object/public/portfolio-images/icons/Outgoings-Leather%20Wallet@1x.png'
                    width={1600}
                    height={1200}
                    priority={true}
                    alt='A UI design showing the detail view for the Pokémon® Charizard'
                    className={`${utilStyles['general-image']} ${projectStyles['three-image-row__img']}`}
                />
                <Image
                    src='https://dyweauwosjjahwbmhpiw.supabase.co/storage/v1/object/public/portfolio-images/icons/Pikachu%20Icon.png'
                    width={4000}
                    height={3000}
                    priority={true}
                    alt='A UI design showing the detail view for the Pokémon® Charizard'
                    className={`${utilStyles['general-image']} ${projectStyles['three-image-row__img']}`}
                />
                <Image
                    src='https://dyweauwosjjahwbmhpiw.supabase.co/storage/v1/object/public/portfolio-images/icons/Polaroid-shot.png'
                    width={4000}
                    height={3000}
                    priority={true}
                    alt='A UI design showing the detail view for the Pokémon® Charizard'
                    className={`${utilStyles['general-image']} ${projectStyles['three-image-row__img']}`}
                />
                <Image
                    src='https://dyweauwosjjahwbmhpiw.supabase.co/storage/v1/object/public/portfolio-images/icons/medal-shot.png'
                    width={4000}
                    height={3000}
                    priority={true}
                    alt='A UI design showing the detail view for the Pokémon® Charizard'
                    className={`${utilStyles['general-image']} ${projectStyles['three-image-row__img']}`}
                />
                <Image
                    src='https://dyweauwosjjahwbmhpiw.supabase.co/storage/v1/object/public/portfolio-images/icons/shopping-uk.png'
                    width={1600}
                    height={1200}
                    priority={true}
                    alt='A UI design showing the detail view for the Pokémon® Charizard'
                    className={`${utilStyles['general-image']} ${projectStyles['three-image-row__img']}`}
                />
                <Image
                    src='https://dyweauwosjjahwbmhpiw.supabase.co/storage/v1/object/public/portfolio-images/icons/neon-v2.jpg'
                    width={2200}
                    height={1650}
                    priority={true}
                    alt='A UI design showing the detail view for the Pokémon® Charizard'
                    className={`${utilStyles['general-image']} ${projectStyles['three-image-row__img']}`}
                />
                <Image
                    src='https://dyweauwosjjahwbmhpiw.supabase.co/storage/v1/object/public/portfolio-images/icons/IceCubeTray-shot.png'
                    width={4000}
                    height={3000}
                    priority={true}
                    alt='A UI design showing the detail view for the Pokémon® Charizard'
                    className={`${utilStyles['general-image']} ${projectStyles['three-image-row__img']}`}
                />
                <Image
                    src='https://dyweauwosjjahwbmhpiw.supabase.co/storage/v1/object/public/portfolio-images/icons/cocktailbar.png'
                    width={4000}
                    height={3000}
                    priority={true}
                    alt='A UI design showing the detail view for the Pokémon® Charizard'
                    className={`${utilStyles['general-image']} ${projectStyles['three-image-row__img']}`}
                />
            </ImageSection>
        </Layout>
    );
}