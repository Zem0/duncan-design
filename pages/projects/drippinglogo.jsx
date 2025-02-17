import { useEffect, useState, useRef, React } from 'react';
import Layout from '../../components/layout';
import Head from 'next/head';
import Navigation from '../../components/Navigation';
import MobileNavigation from '../../components/MobileNavigation';
import ImageSection from '../../components/ImageSection';
import Image from 'next/image';
import projectStyles from '../../styles/projects.module.sass';

export default function ImageRotator() {
    const [rotation, setRotation] = useState({ x: 0, y: 0 });
    const [isResetting, setIsResetting] = useState(false);
    const [isDragging, setIsDragging] = useState(false);
    const startPosition = useRef({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (e) => {
            const logoCenterX = window.innerWidth / 2;
            const logoCenterY = window.innerHeight / 2;
            const { pageX: x, pageY: y } = e;

            const xRotate = (x - logoCenterX) * 0.03;
            const yRotate = (logoCenterY - y) * 0.03;

            setIsResetting(false);
            setRotation({ x: yRotate, y: xRotate });
        };

        const handleTouchMove = (e) => {
            if (!isDragging) return;

            e.preventDefault();
            const touch = e.touches[0];
            const logoCenterX = window.innerWidth / 2;
            const logoCenterY = window.innerHeight / 2;

            // Calculate the difference from the start position
            const deltaX = touch.pageX - startPosition.current.x;
            const deltaY = touch.pageY - startPosition.current.y;

            // Use deltas to calculate rotation
            const xRotate = deltaX * 0.1;
            const yRotate = -deltaY * 0.1;

            setIsResetting(false);
            setRotation({ x: yRotate, y: xRotate });
        };

        const handleTouchStart = (e) => {
            setIsDragging(true);
            const touch = e.touches[0];
            startPosition.current = {
                x: touch.pageX,
                y: touch.pageY
            };
        };

        const handleTouchEnd = () => {
            setIsDragging(false);
            resetLogo();
        };

        const resetLogo = () => {
            setIsResetting(true);
            setRotation({ x: 0, y: 0 });
        };

        // Mouse events
        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('mouseout', (e) => {
            if (e.relatedTarget === null) {
                resetLogo();
            }
        });

        // Touch events
        window.addEventListener('touchstart', handleTouchStart, { passive: false });
        window.addEventListener('touchmove', handleTouchMove, { passive: false });
        window.addEventListener('touchend', handleTouchEnd);

        return () => {
            // Cleanup mouse events
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('mouseout', resetLogo);

            // Cleanup touch events
            window.removeEventListener('touchstart', handleTouchStart);
            window.removeEventListener('touchmove', handleTouchMove);
            window.removeEventListener('touchend', handleTouchEnd);
        };
    }, [isDragging]); // Add isDragging to dependency array

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
                        touchAction: 'none', // Prevent default touch actions
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