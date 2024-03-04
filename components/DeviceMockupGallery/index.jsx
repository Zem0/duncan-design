import React from 'react';
import galleryStyles from './index.module.sass';

export default function DeviceMockupGallery({children, additionalClasses}) {
    return (
        <section className={`${galleryStyles.imageSection} ${additionalClasses}`}>
            <div className={`${galleryStyles['imageSection__img']}`}>
                {children}
            </div>
        </section>
    );
}