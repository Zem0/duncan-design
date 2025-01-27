import Link from 'next/link';
import Head from 'next/head';
import Layout from '../../components/layout';
import Section from '../../components/Section';
import Navigation from '../../components/Navigation';
import { Devices, PaintBrush, ArticleNyTimes, FolderNotchOpen } from '@phosphor-icons/react';

export default function ProjectList() {
    return (
        <Layout>
            <Head>
                <title>Projects</title>
            </Head>
            <Navigation />
            <Section heading='Projects' icon={FolderNotchOpen} notes>
                <ul>
                    <li><h3><Devices weight='fill' /> UI/UX & Product Design</h3></li>
                    <ul>
                        <li>
                            <Link href='/projects/dexie'>Dexie</Link>
                        </li>
                        <li>
                            <Link href='/projects/homematch'>HomeMatch</Link>
                        </li>
                    </ul>
                    <li><h3><PaintBrush weight='fill' /> Visual Design</h3></li>
                    <ul>
                        <li>
                            <Link href='/projects/icons'>Icon Design</Link>
                        </li>
                        <li>
                            <Link href='/projects/heads'>Heads</Link>
                        </li>
                    </ul>
                    <li><h3><ArticleNyTimes weight='fill' /> Features</h3></li>
                    <ul>
                        <li>
                            <a href='https://www.sketch.com/blog/meet-the-maker-duncan-horne/' target='_blank'>Sketch Interview</a>
                        </li>
                        <li>
                            <a href='https://www.sketch.com/canvas/duncan/' target='_blank'>My very own Sketch homepage</a>
                        </li>
                    </ul>
                </ul>
            </Section>
        </Layout>
    );
}