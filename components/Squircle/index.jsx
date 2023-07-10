/**
 * @function Squircle
 * @returns an SVG squircle shape which can be used to clips images and other html elements.
 * @see <FilesCard> for an example
 */

export default function Squircle() {
    return (
        <svg width='0' height='0'>
            <defs>
                <clipPath id='squircle' clipPathUnits='objectBoundingBox'>
                    <path d='M .5,0 C .1,0 0,.1 0,.5 0,.9 .1,1 .5,1 .9,1 1,.9 1,.5 1,.1 .9,0 .5,0 Z' />
                </clipPath>
            </defs>
        </svg>
    );
}