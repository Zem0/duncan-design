import React from 'react';

export default function ProjectCard({children, caption}) {
    return (
        <figure>
            {children}
            <figcaption>{caption}</figcaption>
        </figure>
    );
}