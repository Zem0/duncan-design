import { useEffect, useState, React } from 'react';
import Layout from '../../components/layout';
import Head from 'next/head';
import Navigation from '../../components/Navigation';
import MobileNavigation from '../../components/MobileNavigation';
import ImageSection from '../../components/ImageSection';
import Image from 'next/image';
import projectStyles from '../../styles/projects.module.sass';

export default function Dexie() {
    const [rotation, setRotation] = useState({ x: 0, y: 0 });
    const [isResetting, setIsResetting] = useState(false);

    useEffect(() => {
        const handleMouseMove = (e) => {
            // Get window dimensions for center calculation
            const logoCenterX = window.innerWidth / 2;
            const logoCenterY = window.innerHeight / 2;

            // Get current mouse coordinates
            const { pageX: x, pageY: y } = e;

            // Calculate rotation values
            const xRotate = (x - logoCenterX) * 0.03;
            const yRotate = (logoCenterY - y) * 0.03;

            setIsResetting(false);
            setRotation({ x: yRotate, y: xRotate });
        };

        const resetLogo = () => {
            console.log('Resetting logo'); // Debug log
            setIsResetting(true);
            setRotation({ x: 0, y: 0 });
        };

        // Change from document to window for mouseleave
        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('mouseout', (e) => {
            // Check if mouse has left the window
            if (e.relatedTarget === null) {
                resetLogo();
            }
        });

        // Cleanup event listeners
        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('mouseout', resetLogo);
        };
    }, []);

    return (
        <Layout homematch additionalClassName={`${projectStyles['main-content-holder']}`}>
            <Head>
                <title>Dripping Logo</title>
            </Head>
            <Navigation />
            <ImageSection>
                <div className={`${projectStyles['imageHolder']}`}
                    style={{
                        transform: `rotateY(${rotation.y}deg) rotateX(${rotation.x}deg)`,
                        transition: isResetting ? 'transform 1s ease-out' : 'none',
                        WebkitTransform: `rotateY(${rotation.y}deg) rotateX(${rotation.x}deg)`,
                        WebkitTransition: isResetting ? 'transform 1s ease-out' : 'none',
                    }}>
                    <Image
                        data-offset="2"
                        className={`${projectStyles['logo']} ${projectStyles['layer1']}`}
                        src="https://dyweauwosjjahwbmhpiw.supabase.co/storage/v1/object/public/portfolio-images/dripping-logo/Layer1.png"
                        width={664}
                        height={856}
                        priority={true}
                    />
                    <Image
                        data-offset="3"
                        className={`${projectStyles['logo']} ${projectStyles['layer2']}`}
                        src="https://dyweauwosjjahwbmhpiw.supabase.co/storage/v1/object/public/portfolio-images/dripping-logo/Layer2.png"
                        width={664}
                        height={856}
                        priority={true}
                    />
                    <Image
                        data-offset="4"
                        className={`${projectStyles['logo']} ${projectStyles['layer3']}`}
                        src="https://dyweauwosjjahwbmhpiw.supabase.co/storage/v1/object/public/portfolio-images/dripping-logo/Layer3.png"
                        width={664}
                        height={856}
                        priority={true}
                    />
                </div>
            </ImageSection>
            <MobileNavigation />
        </Layout>
    );
}