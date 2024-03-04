import React from 'react';
import Layout from '../../components/layout';
import Head from 'next/head';
import Navigation from '../../components/Navigation';
import Section from '../../components/Section';
import MacChrome from '../../components/MacChrome';
import Image from 'next/image';
import { Bookmark, Database, Table, StopCircle, PenNib } from '@phosphor-icons/react';
import projectStyles from '../../styles/projects.module.sass';
import Columns from '../../components/Columns';

export default function HomeMatch() {
    return (
        <Layout homematch additionalClassName={`${projectStyles['main-content-holder']}`}>
            <Head>
                <title>HomeMatch Case Study</title>
            </Head>
            <Navigation />
            <Section heading='HomeMatch' icon={Bookmark} notes>
                <Columns additionalClasses={`${projectStyles['info-table']}`}>
                    <div className={`${projectStyles['info-table__timeline']}`}>
                        <p><em><strong>Timeline</strong></em></p>
                        <p><em>2019 - 2023</em></p>
                    </div>
                    <div>
                        <p><em><strong>Client</strong></em></p>
                        <p><em>Shelton Development Services (SDS)</em></p>
                    </div>
                    <div>
                        <p><em><strong>Role</strong></em></p>
                        <p><em>Project Management, Research, Design, Development, Testing</em></p>
                    </div>
                </Columns>
                <p>
                    <em>
                        HomeMatch is a web app designed for local authorities, housing associations, and estate agents which helps the teams to match applicants to a list of suitable properties based on a number of factors including affordability, location and number of bedrooms desired.
                        <br></br>
                        <br></br>
                        The goal was to produce two separate areas of the app - a public facing portal where users could register and fill out a questionnaire, and a staff area where data could be viewed and added regarding applications, schemes and properties.
                    </em>
                    <PenNib weight='fill'/>
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
            <Section heading='Viewing Data' icon={Database}>
                <p>
                    As SDS already had a large user base from it&apos;s other housing based software we were able to gather requirements from prospective end users by way of interviews and focus groups. One of the problems the team wanted to overcome was that of how to show the data in the best way possible, so that applications can be compared, or a users&apos; details can be opened whilst property or scheme data is being viewed.
                    <br></br>
                    <br></br>
                    Through design workshops and feedback from our users, we landed on a panel design layout, similar to a kanban board you might find in Github or Jira for story/issue management. Most of the fields within HomeMatch&apos;s database would hold a few words, if that, and so this lent to the idea of panels with a list of inputs with headings. This way the user could open up the data of as many applicants data as they wanted and view them side-by-side on a horizontally scrolling board. We also added a handy feature where by panels of the same type, such as a property (house), would scroll at the same time as each other, to make comparison even easier. This can be turned on and off quickly as the user needs.
                </p>
            </Section>
            <MacChrome>
                <Image
                    src='https://dyweauwosjjahwbmhpiw.supabase.co/storage/v1/object/public/portfolio-images/homematch/IMG_2541.png'
                    width={3710}
                    height={1874}
                    priority={true}
                    alt='A screenshot showing HomeMatch UI'
                    className={`${projectStyles.screenshot}`}
                />
            </MacChrome>
            <Section heading='Reporting' icon={Table}>
                <p>
                    Customers of SDS software have always made good use of the reporting features and it was to be no different with HomeMatch. The senior dev team created some special Javascript queries in the form of jQuery dot notation. These could be written in the browser and HomeMatch would interpret them and return the required data.
                    <br></br>
                    <br></br>
                    Our field research told us that our users wanted to export report data to spreadsheet apps such as Excel and Google Sheets. As a company we also wanted the users to be able to write the code for the reports, giving back valuable time to the support team. As this would be quite a UI intensive feature, we dived into making some prototypes in the browser, which we were able to test with clients and iterate upon until we had something everyone was happy with.
                    <br></br>
                    <br></br>
                    This is a handy way of creating a feature like this as the customer isn&apos;t always 100% sure on how they would like a feature like this to work and the team can send out preview links with updates so the users can get a feel of how the tool is progressing and give quick feedback.
                </p>
            </Section>
            <MacChrome>
                <Image
                    src='https://dyweauwosjjahwbmhpiw.supabase.co/storage/v1/object/public/portfolio-images/homematch/IMG_4878.png'
                    width={3712}
                    height={1872}
                    priority={true}
                    alt='A screenshot showing HomeMatch UI'
                    className={`${projectStyles.screenshot}`}
                />
            </MacChrome>
            <Section icon={Table}>
                <p>
                    The final UI for creating reports resulted in a panel where the user can paste the ID for a Google Worksheet to link up with. They can then create sheets within this workbook, shown in the UI as list items that could be expanded. Here the sheet can be given a title and code written to display the data required. The data can be previewed in a table so the user doesn&apos;t have to keep navigating to the sheet to see updates.
                    <StopCircle weight='fill'/>
                </p>
            </Section>
        </Layout>
    );
}