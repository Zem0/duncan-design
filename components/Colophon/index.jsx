import useMountTransition from '../../scripts/useMountTransition';
import { useState } from 'react';
import colophonStyles from './index.module.sass';
import utilStyles from '../../styles/utils.module.sass';

export default function Colophon() {
    const [isMounted, setIsMounted] = useState(false);
    const hasTransitionedIn = useMountTransition(isMounted, 1000);

    return (
        <div className="container">

            {/* <span onClick={() => setIsMounted(!isMounted)} className={`${colophonStyles.spann}`}>
                onClick
            </span> */}

            {/* <span onMouseEnter={() => setIsMounted(true)} onMouseLeave={() => setIsMounted(false)} className={`${colophonStyles.spann}`}>
                onMouseEnter
            </span> */}

            <span onMouseOver={() => setIsMounted(true)} onMouseLeave={() => setIsMounted(false)} className={`${utilStyles.rel}`}>
                onMouseOver
                <div className="content" >
                    {(hasTransitionedIn || isMounted) && (
                        <div className={`${colophonStyles.card} ${hasTransitionedIn && colophonStyles.in} ${isMounted && colophonStyles.visible}`} onMouseOver={() => setIsMounted(true)} onMouseLeave={() => setIsMounted(false)}>
                            Card Content
                        </div>
                    )}
                </div>
            </span>

        </div>
    );
}