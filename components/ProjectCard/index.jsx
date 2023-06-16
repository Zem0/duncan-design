import React from 'react';
import Image from 'next/image';
import projectCardStyles from './index.module.sass';

export default function ProjectCard({children, caption, imgSrc, altText}) {
    return (
        <figure className={`${projectCardStyles['project-card']}`}>
            {children}
            <Image
                src={imgSrc}
                priority={true}
                alt={altText}
                className={`${projectCardStyles['project-card__img']}`}/>
            <figcaption>{caption}</figcaption>
        </figure>
    );
}