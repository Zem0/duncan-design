import React from 'react';
import helloTextStyles from './index.module.sass';

const Text = ({strokeColor, strokeWidth}) => {
    return (
        <g stroke="none" stroke-width="" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round">
            <path d="M41,411.77899 C146.361,350.03499 263.76,253.38199 278.5,121.77929 C289.370111,24.7280029 222.457,48.6065124 202,103.77899 C185.5,148.27899 173.569,287.41899 164.069,354.25199 C154.569,421.08499 152.5,430.27899 152.5,430.27899 C158.333,391.44599 174.5,313.27899 201.5,281.27899 C231.171,246.11299 288.979,237.50599 296,295.77899 C301,337.27899 273,399.27899 300.5,420.27899 C328,441.27899 397,423.27899 426,403.77899 C467.067841,380.842896 500.628,349.23599 511.5,310.99999 C528.187,252.31399 463.443,226.79099 426,269.77899 C397.5,302.49999 392,370.58999 432,400.81899 C469.671366,429.288183 537.8,457.47899 617,374.27899 C625.547,365.29999 695.341254,287.996507 717.5,208.77899 C737.499972,137.27909 741.5,86.7790904 714.5,73.7789904 C684.5,59.3344904 647.5,99.5000904 631,181.99999 C619.377,240.11499 617,270.77899 617,314.77899 C617,355.283678 627,430.17899 691,431.77899 C765.5,433.64199 817.833,364.27899 841,329.77899 C862.866687,297.2154 896.66,227.95099 911.001,170.77899 C927.5,105.00019 918.706,82.0700904 896,74.2791904 C867.5,64.5000904 835.5,103.27929 820,170.77899 C805.852,232.39399 791,313.77899 809,365.77899 C824.893132,411.692484 838.437,429.59499 879,431.27899 C932.5,433.49999 970.5,392.77899 995,317.27899 C1008.81933,274.6929 1029.83597,252.26657 1058.04993,250 C1101.16874,245.568604 1127.26111,263.757254 1136.32703,304.565948 C1149.9259,365.77899 1110.23828,416.968036 1086.38733,424.391907 C1062.53638,431.815778 998.97937,446.371518 991.285645,365.77899 C986.589062,316.581825 1009.38529,271.082318 1036.90906,256.337936 C1047.58972,250.616342 1060.66869,248.72988 1073.72166,249.277824 C1085.56512,249.774995 1099.52778,251.941106 1112.40598,258.918541 C1124.16245,265.288226 1131.86336,271.363376 1142.98425,272.783272 C1170.02679,276.236015 1194.6987,265.734588 1217,241.27899" stroke={strokeColor} stroke-width={strokeWidth}></path>
        </g>
    );
};

export default function HelloText({className}) {
    return (
        <div className={`${helloTextStyles['text_holder']} ${className}`}>
            <svg className={`${helloTextStyles['text_holder__svg']}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1257 487">
                <defs>
                    <linearGradient id='a' gradientUnits='objectBoundingBox' x1='0' y1='0' x2='1' y2='1'>
                        <stop offset='0' stopColor='#FF2D55'>
                            <animate attributeName="stop-color"
                                values="#FF2D55;DarkViolet;DodgerBlue;#00FF31;yellow;orange;#FF2D55;" dur="20s" repeatCount="indefinite">
                            </animate>
                        </stop>
                        <stop offset='.5' stopColor='DarkViolet'>
                            <animate attributeName="stop-color"
                                values="DarkViolet;DodgerBlue;#00FF31;yellow;orange;#FF2D55;DarkViolet;" dur="20s" repeatCount="indefinite">
                            </animate>
                        </stop>
                        <stop offset='1' stopColor='DodgerBlue'>
                            <animate attributeName="stop-color"
                                values="DodgerBlue;#00FF31;yellow;orange;#FF2D55;DarkViolet;DodgerBlue;" dur="20s" repeatCount="indefinite">
                            </animate>
                        </stop>
                        <animateTransform attributeName="gradientTransform" type="rotate" from="0 .5 .5" to="360 .5 .5"
                            dur="20s" repeatCount="indefinite" />
                    </linearGradient>

                    <linearGradient id='b' gradientUnits='objectBoundingBox' x1='0' y1='1' x2='1' y2='1'>
                        <stop offset='0' stopColor='#FF2D55'>
                            <animate attributeName="stop-color"
                                values="#FF2D55;DarkViolet;DodgerBlue;#00FF31;yellow;orange;#FF2D55;" dur="20s" repeatCount="indefinite">
                            </animate>
                        </stop>
                        <stop offset='1' stopColor='#BA39FF' stopOpacity="0">
                            <animate attributeName="stop-color"
                                values="DarkViolet;DodgerBlue;#00FF31;yellow;orange;#FF2D55;#BA39FF;" dur="20s" repeatCount="indefinite">
                            </animate>
                        </stop>
                        <animateTransform attributeName="gradientTransform" type="rotate" values="360 .5 .5;0 .5 .5"
                            dur="10s" repeatCount="indefinite" />
                    </linearGradient>

                    <filter id="shadow">
                        <feDropShadow dx="0.2" dy="0.8" stdDeviation="0.2" flood-color="rgba(0,0,0,0.4)" />
                    </filter>
                </defs>

                <Text strokeColor='white' strokeWidth='80'/>
                <Text strokeColor='url(#a)' strokeWidth='46'/>
                <Text strokeColor='url(#b)' strokeWidth='46'/>
            </svg>
        </div>
    );
}