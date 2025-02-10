import React from 'react';
import Layout from '../../components/layout';
import Head from 'next/head';
import Navigation from '../../components/Navigation';
import MobileNavigation from '../../components/MobileNavigation';
import Section from '../../components/Section';
import Image from 'next/image';
import { Bookmark, ListMagnifyingGlass, PenNib, ListBullets, Images, Palette, StopCircle, Calendar, PersonArmsSpread, BaseballCap, PawPrint } from '@phosphor-icons/react';
import projectStyles from '../../styles/projects.module.sass';
import utilStyles from '../../styles/utils.module.sass';
import Columns from '../../components/Columns';
import ImageSection from '../../components/ImageSection';
import DeviceMockupGallery from '../../components/DeviceMockupGallery';

export default function Dexie() {
    return (
        <Layout homematch additionalClassName={`${projectStyles['main-content-holder']}`}>
            <Head>
                <title>Dexie Case Study</title>
            </Head>
            <Navigation />
            <Section heading='Dexie' icon={PawPrint} notes>
                <Columns additionalClasses={`${projectStyles['info-table']}`} noBorder>
                    <div className={`${projectStyles['info-table__timeline']}`}>
                        <p className={`${projectStyles['info-table__timeline__heading']}`}><em><strong><Calendar weight='fill'/> Timeline</strong></em></p>
                        <p><em>2020 - present</em></p>
                    </div>
                    <div>
                        <p className={`${projectStyles['info-table__timeline__heading']}`}><em><strong><PersonArmsSpread weight='fill'/> Client</strong></em></p>
                        <p><em>Personal project</em></p>
                    </div>
                    <div>
                        <p className={`${projectStyles['info-table__timeline__heading']}`}><em><strong><BaseballCap weight='fill'/> Role</strong></em></p>
                        <p><em>Research, Design, Development, Testing</em></p>
                    </div>
                </Columns>
            </Section>
            <DeviceMockupGallery>
                <Image
                    src='https://dyweauwosjjahwbmhpiw.supabase.co/storage/v1/object/public/portfolio-images/dexie/home-view.png'
                    width={894}
                    height={1812}
                    priority={true}
                    alt='A UI design showing the detail view for the Pokémon® Charizard'
                />
                <Image
                    src='https://dyweauwosjjahwbmhpiw.supabase.co/storage/v1/object/public/portfolio-images/dexie/detail-view.png'
                    width={894}
                    height={1812}
                    priority={true}
                    alt='A UI design showing the detail view for the Pokémon® Charizard'
                />
                <Image
                    src='https://dyweauwosjjahwbmhpiw.supabase.co/storage/v1/object/public/portfolio-images/dexie/detail-view-moves.png'
                    width={894}
                    height={1812}
                    priority={true}
                    alt='A UI design showing the detail view for the Pokémon® Charizard'
                    className={`${utilStyles['remove-for-mobile']}`}
                />
            </DeviceMockupGallery>
            <Section heading='Overview' icon={Bookmark} notes>
                <p>
                    <a href='https://www.pokemon.com/uk' target='_blank'>Pokémon®</a> is ranked as the highest grossing media franchise worldwide of all time <small>(by total revenue)</small> and in 2021 was ranked 5th in the Top 10 Global Brand Licensing Companies <sup>[1]</sup>.
                </p>
                <p>
                    Just over a 5<sup>th</sup> of this revenue is attributed to the video games, which are still hugely popular. With each game comes a new set of Pokémon® and other items and moves each with their own metadata. In game there is a database called a Pokédex to show all this information.
                </p>
                <p>
                    We know that iOS is a very popular platform. Although Android remains the most popular operating system in the world, with a whopping 70.89% market share <small>(iOS second at 28.36%)</small>, iOS reigns supreme in the US with a 57.39% market share vs Android&apos;s 42.27% <sup>[2]</sup>.
                </p>
                <hr></hr>
                <p>
                    There are a few Pokédex apps on the App Store, however they do not seem to be native apps <small>(written with Swift or Objective C)</small> and if they are, they do not follow Apple&apos;s <a href='https://developer.apple.com/design/human-interface-guidelines' target='_blank'>Human Interface Guidelines</a>.
                </p>
                <blockquote cite='https://www.sketch.com/blog/part-of-your-world-why-we-re-proud-to-build-a-truly-native-mac-app/'>
                    <strong>Native apps bring so many benefits — from personalisation and performance to familiarity and flexibility.</strong>
                    <br></br>
                    <br></br>
                    <cite> -Sketch.com, Part of your world: Why we’re proud to build a truly native Mac app </cite>
                </blockquote>
                <p>
                    I find it so jarring moving from apps that feel familiar to each other and make use of the OS&apos; features and paradigms, to an app that is built with frameworks such as React Native. In my experience these apps always feel a bit slow and &apos;clunky&apos; and scrolling through lists usually doesn&apos;t have the same snappiness.
                </p>
                <p>
                    Within the iOS community, native apps are very popular and so I believe there is a gap for a truly native Pokémon® app, that looks familiar, feels nice to use and doesn&apos;t show adverts.<PenNib weight='fill'/>
                </p>
                <ul className={`${'reference-links'}`}>
                    <li>
                        [1]
                        <a target='_blank' href='https://www.titlemax.com/discovery-center/money-finance/the-25-highest-grossing-media-franchises-of-all-time/'>https://www.titlemax.com</a>
                    </li>
                    <br></br>
                    <li>[2]
                        <a target='_blank' href='https://www.bankmycell.com/blog/android-vs-apple-market-share/#:~:text=In%20the%20most%20recent%20quarter,share%20for%20operating%20systems%20worldwide'>https://www.bankmycell.com</a>
                    </li>
                </ul>
            </Section>

            <Section heading='Scoping' icon={ListMagnifyingGlass}>
                <p>
                    I have found a RESTful API called <a href='https://pokeapi.co' target='_blank'>PokeAPI</a> linked to an extensive Pokémon® database, which appears to be actively maintained and updated regularly. From conversations on social media with people from the Pokémon® community as well as the iOS community, it was decided to show data for Pokémon®, moves, items and berries in the <a href='https://en.wikipedia.org/wiki/Minimum_viable_product' target='_blank'>MVP</a> and then add more detailed features in subsequent versions. This would mean a list view for each of the four sections, as well as a detail view for each item from those lists.
                </p>
                <p>
                    Once we had scoped what data would be used from PokeAPI for the MVP, I moved on to some high level wireframe sketches of the UI. Having thought about this for a while, I knew that many of the views would contain solely grouped list items so it was mainly the detail views for Pokémon, items and berries that would take the most time to design.
                </p>
                <p>
                    After sketches, I usually take the designs into Sketch and produce some cleaner, black and white stroked designs for clarities sake.
                </p>
            </Section>

            {/* Wireframes */}
            <ImageSection additionalClasses={`${projectStyles['two-image-row']}`}>
                <Image
                    src='https://dyweauwosjjahwbmhpiw.supabase.co/storage/v1/object/public/portfolio-images/dexie/wireframe-2.png'
                    width={2800}
                    height={2100}
                    priority={true}
                    alt='A UI design showing the detail view for the Pokémon® Charizard'
                    className={`${utilStyles['general-image']} ${projectStyles['two-image-row__img']}`}
                />
                <Image
                    src='https://dyweauwosjjahwbmhpiw.supabase.co/storage/v1/object/public/portfolio-images/dexie/wireframe-1.png'
                    width={2800}
                    height={2100}
                    priority={true}
                    alt='A UI design showing the detail view for the Pokémon® Charizard'
                    className={`${utilStyles['general-image']} ${projectStyles['two-image-row__img']}`}
                />
            </ImageSection>

            <Section>
                <p>
                    After sketches, I usually take the designs into Sketch and produce some cleaner, black and white stroked designs for clarities sake.
                </p>
                <p>
                    I will also start playing around with code, whether that be HTML and CSS or SwiftUI, just so I can start to get a feel of how things will be structured within the source code. It also gives me an idea how feasible designs might be.
                </p>
            </Section>

            <ImageSection>
                <Image
                    src='https://dyweauwosjjahwbmhpiw.supabase.co/storage/v1/object/public/portfolio-images/dexie/swiftui-mockups.png'
                    width={2784}
                    height={2045}
                    priority={true}
                    alt='A UI design showing the detail view for the Pokémon® Charizard'
                    className={`${utilStyles['general-image']}`}
                />
            </ImageSection>

            <Section heading='List Views' icon={ListBullets}>
                <p>
                    Each list can be filtered and sorted by different headings. For example the Pokémon list can be sorted by gamer versions, Pokémon type and alphabetically.
                </p>
                <p>
                    Throughout the app, particularly in search results, the user can find alternate sprites <small><a href='https://pokemondb.net/sprites/bulbasaur' target='_blank'>(pixel art style Pokémon® images)</a></small> that can be used in place of the original. These will then be shown in lists and in detail views throughout the app.
                </p>
            </Section>
            <DeviceMockupGallery>
                <Image
                    src='https://dyweauwosjjahwbmhpiw.supabase.co/storage/v1/object/public/portfolio-images/dexie/list-view.png'
                    width={894}
                    height={1812}
                    priority={true}
                    alt='A UI design showing the detail view for the Pokémon® Charizard'
                />
                <Image
                    src='https://dyweauwosjjahwbmhpiw.supabase.co/storage/v1/object/public/portfolio-images/dexie/list-view-scrolled.png'
                    width={894}
                    height={1812}
                    priority={true}
                    alt='A UI design showing the detail view for the Pokémon® Charizard'
                    className={`${utilStyles['remove-for-mobile']}`}
                />
                <Image
                    src='https://dyweauwosjjahwbmhpiw.supabase.co/storage/v1/object/public/portfolio-images/dexie/list-view-search.png'
                    width={894}
                    height={1812}
                    priority={true}
                    alt='A UI design showing the detail view for the Pokémon® Charizard'
                />
            </DeviceMockupGallery>
            <ImageSection>
                <Image
                    src='https://dyweauwosjjahwbmhpiw.supabase.co/storage/v1/object/public/portfolio-images/dexie/alternate-sprite.png'
                    width={904}
                    height={2310}
                    priority={true}
                    alt='A UI design showing the detail view for the Pokémon® Charizard'
                    className={`${utilStyles['general-image']}`}
                />
            </ImageSection>

            <Section heading='Sprites' icon={Images}>
                <p>
                    I feel that the Pokémon games have lost a little of their magic since moving away from pixel art, as the sprites used now show less dynamic poses. All images of Pokémon in the app will be pixel art. The detail images can be tapped on causing them to flip over and show a holo sticker version using the shiny sprite.
                </p>
                <p>
                    If a shiny version of a sprite has been unlocked by the user, they will be able to view this in the Pokémon®&apos;s detail view by tapping the detail image. This will flip the image over with a nice animation to show the shiny sprite.
                </p>
                <p>
                    These are styled to look like holo stickers, inspired by the holographic and foil cards that can be collected from the <a href='https://poke-holo.simey.me' target='_blank'>Pokémon® Trading Card Game</a>.
                </p>
            </Section>

            <ImageSection>
                <Image
                    src='https://dyweauwosjjahwbmhpiw.supabase.co/storage/v1/object/public/portfolio-images/dexie/detail-image-tap.png'
                    width={2427}
                    height={1440}
                    priority={true}
                    alt='A UI design showing the detail view for the Pokémon® Charizard'
                    className={`${utilStyles['general-image']}`}
                />
            </ImageSection>

            <ImageSection>
                <Image
                    src='https://dyweauwosjjahwbmhpiw.supabase.co/storage/v1/object/public/portfolio-images/dexie/detail-images.png'
                    width={2427}
                    height={1440}
                    priority={true}
                    alt='A UI design showing the detail view for the Pokémon® Charizard'
                    className={`${utilStyles['general-image']}`}
                />
            </ImageSection>

            <Section heading='Design' icon={Palette}>
                <p>
                    The design philosophy of the app aims to align seamlessly with the established visual language of iOS, fostering a sense of familiarity and user comfort. Two pivotal sources of inspiration guided the design process: Firstly, the App Store, which provided a compelling reference point with its utilization of an information-rich header for detail views. Secondly, the Shortcuts app, which influenced the adoption of a &apos;card-based&apos; user interface paradigm.
                </p>
                <p>
                    Strategic variations in background choices have been meticulously implemented, notably evident in the description card, to evoke a nostalgic notebook ambiance. The alternate sprites found throughout the app have been given a bright yellow background, with a shimmering animation so these stand out as different from the other information on screen.
                </p>
                <p>
                    The overarching app backdrop adopts a subtle striped pattern, reminiscent of the skeuomorphic design era in earlier iterations of iOS. To further enhance this thematic resonance, careful consideration has been given to the incorporation of depth cues, including judiciously applied shadows and highlights, elevating the overall user experience.<StopCircle weight='fill'/>
                </p>
            </Section>

            <DeviceMockupGallery>
                <Image
                    src='https://dyweauwosjjahwbmhpiw.supabase.co/storage/v1/object/public/portfolio-images/dexie/detail-view-shiny.png'
                    width={894}
                    height={1812}
                    priority={true}
                    alt='A UI design showing the detail view for the Pokémon® Charizard'
                    className={`${utilStyles['remove-for-mobile']}`}
                />
                <Image
                    src='https://dyweauwosjjahwbmhpiw.supabase.co/storage/v1/object/public/portfolio-images/dexie/detail-view-evo.png'
                    width={894}
                    height={1812}
                    priority={true}
                    alt='A UI design showing the detail view for the Pokémon® Charizard'
                />
                <Image
                    src='https://dyweauwosjjahwbmhpiw.supabase.co/storage/v1/object/public/portfolio-images/dexie/detail-view-type.png'
                    width={894}
                    height={1812}
                    priority={true}
                    alt='A UI design showing the detail view for the Pokémon® Charizard'
                />
            </DeviceMockupGallery>
            <MobileNavigation />
        </Layout>
    );
}