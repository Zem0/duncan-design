import Layout from '../../components/layout';
import Head from 'next/head';
import Navigation from '../../components/Navigation';
import Section from '../../components/Section';
import { HouseLine } from '@phosphor-icons/react';

export default function HomeMatch() {
    return (
        <Layout homematch>
            <Head>
                <title>HomeMatch Case Study</title>
            </Head>
            <Navigation />
            <Section id='homematch' heading='HomeMatch' icon={HouseLine} notes >
                <p>info about HM</p>
            </Section>
        </Layout>
    );
}