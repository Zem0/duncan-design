import { useEffect, useRef, React } from 'react';
import canvasStyles from './index.module.sass';

const SPEED = 0.02;

export default function AnimatedGradient() {
    // const canvasRef = useRef < HTMLCanvasElement > null;
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;

        if (canvas) {
            const ctx = canvas.getContext('2d');

            let time = 0;

            const loop = function () {
                for (let x = 0; x <= 32; x++) {
                    for (let y = 0; y <= 32; y++) {
                        color(ctx, {
                            x,
                            y,
                            r: R(x, y, time),
                            g: G(x, y, time),
                            b: B(x, y, time),
                        });
                    }
                }

                time = time + SPEED;

                window.requestAnimationFrame(loop);
            };

            loop();
        }
    }, []);

    return <canvas ref={canvasRef} className={`${canvasStyles.gradient}`} width="32px" height="32px" />;
}

const C1 = 191;
const C2 = 64;

export const color = function (context, { x, y, r, g, b }) {
    context.fillStyle = `rgb(${r}, ${g}, ${b})`;
    context.fillRect(x, y, 1, 1);
};

export const R = function (x, y, time) {
    return Math.floor(C1 + C2 * Math.cos((x * x - y * y) / 300 + time));
};

export const G = function (x, y, time) {
    return Math.floor(
        C1 +
        C2 *
        Math.sin(
            (x * x * Math.cos(time / 4) + y * y * Math.sin(time / 3)) / 300
        )
    );
};

export const B = function (x, y, time) {
    return Math.floor(
        C1 +
        C2 *
        Math.sin(
            5 * Math.sin(time / 9) +
            ((x - 100) * (x - 100) + (y - 100) * (y - 100)) / 1100
        )
    );
};