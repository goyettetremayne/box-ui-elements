// @flow
import * as React from 'react';
import uniqueId from 'lodash/uniqueId';

import AccessibleSVG from '../accessible-svg';

type Props = {
    className: string,
    height?: number,
    /** A text-only string describing the icon if it's not purely decorative for accessibility */
    title?: string | React.Element<any>,
    width?: number,
};

const ICON_CLASS = 'file-circle-illustration';

class FileCircleIllustration extends React.PureComponent<Props> {
    static defaultProps = {
        className: '',
        height: 200,
        width: 200,
    };

    idPrefix = `${uniqueId(ICON_CLASS)}-`;

    render() {
        const { className, height, title, width } = this.props;
        return (
            <AccessibleSVG
                className={`${ICON_CLASS} ${className}`}
                height={height}
                title={title}
                width={width}
                viewBox="0 0 140 140"
            >
                <defs>
                    <rect id="b" width={18} height={18} rx={2} />
                    <filter x="-86.1%" y="-80.6%" width="272.2%" height="272.2%" filterUnits="objectBoundingBox" id="a">
                        <feOffset dy={1} in="SourceAlpha" result="shadowOffsetOuter1" />
                        <feGaussianBlur stdDeviation={5} in="shadowOffsetOuter1" result="shadowBlurOuter1" />
                        <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.06 0" in="shadowBlurOuter1" />
                    </filter>
                    <rect id="d" width={18} height={18} rx={2} />
                    <filter x="-86.1%" y="-80.6%" width="272.2%" height="272.2%" filterUnits="objectBoundingBox" id="c">
                        <feOffset dy={1} in="SourceAlpha" result="shadowOffsetOuter1" />
                        <feGaussianBlur stdDeviation={5} in="shadowOffsetOuter1" result="shadowBlurOuter1" />
                        <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.06 0" in="shadowBlurOuter1" />
                    </filter>
                    <rect id="f" width={18} height={18} rx={2} />
                    <filter x="-86.1%" y="-80.6%" width="272.2%" height="272.2%" filterUnits="objectBoundingBox" id="e">
                        <feOffset dy={1} in="SourceAlpha" result="shadowOffsetOuter1" />
                        <feGaussianBlur stdDeviation={5} in="shadowOffsetOuter1" result="shadowBlurOuter1" />
                        <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.06 0" in="shadowBlurOuter1" />
                    </filter>
                    <rect id="h" width={18} height={18} rx={2} />
                    <filter x="-86.1%" y="-80.6%" width="272.2%" height="272.2%" filterUnits="objectBoundingBox" id="g">
                        <feOffset dy={1} in="SourceAlpha" result="shadowOffsetOuter1" />
                        <feGaussianBlur stdDeviation={5} in="shadowOffsetOuter1" result="shadowBlurOuter1" />
                        <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.06 0" in="shadowBlurOuter1" />
                    </filter>
                    <rect id="j" width={18} height={18} rx={2} />
                    <filter x="-86.1%" y="-80.6%" width="272.2%" height="272.2%" filterUnits="objectBoundingBox" id="i">
                        <feOffset dy={1} in="SourceAlpha" result="shadowOffsetOuter1" />
                        <feGaussianBlur stdDeviation={5} in="shadowOffsetOuter1" result="shadowBlurOuter1" />
                        <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.06 0" in="shadowBlurOuter1" />
                    </filter>
                    <rect id="l" width={18} height={18} rx={2} />
                    <filter x="-86.1%" y="-80.6%" width="272.2%" height="272.2%" filterUnits="objectBoundingBox" id="k">
                        <feOffset dy={1} in="SourceAlpha" result="shadowOffsetOuter1" />
                        <feGaussianBlur stdDeviation={5} in="shadowOffsetOuter1" result="shadowBlurOuter1" />
                        <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.06 0" in="shadowBlurOuter1" />
                    </filter>
                    <rect id="n" width={18} height={18} rx={2} />
                    <filter x="-86.1%" y="-80.6%" width="272.2%" height="272.2%" filterUnits="objectBoundingBox" id="m">
                        <feOffset dy={1} in="SourceAlpha" result="shadowOffsetOuter1" />
                        <feGaussianBlur stdDeviation={5} in="shadowOffsetOuter1" result="shadowBlurOuter1" />
                        <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.06 0" in="shadowBlurOuter1" />
                    </filter>
                    <rect id="o" x=".86" width="4.29" height={9} rx=".78" />
                </defs>
                <g transform="translate(10 10)" fill="none" fillRule="evenodd">
                    <circle fill="#FC627A" cx={60} cy={60} r={60} />
                    <path
                        d="M36.6 41.4a1 1 0 0 0 .81.44h35.6a1 1 0 0 1 .99 1.01V82a1 1 0 0 1-1 1H15a1 1 0 0 1-1-1.01V38a1 1 0 0 1 1-1h18.05a1 1 0 0 1 .82.47l2.73 3.94z"
                        fill="#F7D271"
                        fillRule="nonzero"
                    />
                    <g transform="translate(20 49)">
                        <rect fill="#FFF" opacity=".24" width={28} height={28} rx={14} />
                        <path d="M19.7 17a5.7 5.7 0 1 0-11.4 0 5.7 5.7 0 0 0 11.4 0z" stroke="#FFF" strokeWidth=".6" />
                        <path
                            d="M10 12.8v-2.57C10 7.89 11.8 6 14 6s4 1.9 4 4.23v2.57M14 15v4"
                            stroke="#FFF"
                            strokeWidth=".6"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </g>
                    <g transform="translate(54 8)">
                        <g transform="translate(44 44)">
                            <use fill="#000" filter="url(#a)" xlinkHref="#b" />
                            <use fill="#FFF" xlinkHref="#b" />
                        </g>
                        <path
                            d="M56.81 55v-2.95H51.1v4.29a1.43 1.43 0 1 1-1.43-1.43c.17-.02.33.01.48.1v-6.77h7.62v8.1a1.43 1.43 0 1 1-1.42-1.43c.16-.02.33.01.47.1zm-5.72-3.9h5.72v-1.91H51.1v1.9z"
                            fillOpacity=".6"
                            fill="#980DE0"
                            fillRule="nonzero"
                        />
                        <g transform="translate(0 44)">
                            <use fill="#000" filter="url(#c)" xlinkHref="#d" />
                            <use fill="#FFF" xlinkHref="#d" />
                        </g>
                        <g fill="#FC627A" fillRule="nonzero">
                            <path d="M3.18 55.65h11.64v1.06H3.18v-1.06zm0 2.11h11.64v1.06H3.18v-1.06zm5.3-9.52a3.12 3.12 0 0 0-3.19 3.17c0 1.8 1.38 3.18 3.18 3.18 1.8 0 3.18-1.38 3.18-3.18H8.47v-3.17z" />
                            <path d="M9.53 47.18v3.17h3.18c0-1.8-1.38-3.17-3.18-3.17z" />
                        </g>
                        <g transform="translate(10 66)">
                            <use fill="#000" filter="url(#e)" xlinkHref="#f" />
                            <use fill="#FFF" xlinkHref="#f" />
                        </g>
                        <path
                            d="M15.76 79.7c-.26.15-.47 0-.47-.29V70.6c0-.3.22-.44.47-.3l7.8 4.41c.12.04.2.15.2.27 0 .12-.08.23-.2.26l-7.8 4.48z"
                            fill="#22A7F0"
                            fillRule="nonzero"
                        />
                        <g transform="translate(32 66)">
                            <use fill="#000" filter="url(#g)" xlinkHref="#h" />
                            <use fill="#FFF" xlinkHref="#h" />
                        </g>
                        <path
                            d="M43.24 73.62c-.99 0-1.8-.75-1.8-1.7 0-.93.81-1.68 1.8-1.68s1.8.75 1.8 1.69-.81 1.7-1.8 1.7zm-.54 3.47l-2.8-3.14a.38.38 0 0 0-.52-.05l-.05.05-4.15 4.76h11.64l-2.43-3.05a.32.32 0 0 0-.27-.15.32.32 0 0 0-.27.15l-1.15 1.43z"
                            fill="#3FB87F"
                            fillRule="nonzero"
                        />
                        <g transform="translate(22 44)">
                            <use fill="#000" filter="url(#i)" xlinkHref="#j" />
                            <use fill="#FFF" xlinkHref="#j" />
                        </g>
                        <path
                            d="M25.18 48.24h11.64v1.36H25.18v-1.36zm0 2.72h11.64v1.36H25.18v-1.36zm0 2.72h11.64v1.36H25.18v-1.36zm0 2.72h8.47v1.36h-8.47V56.4z"
                            fill="#4083F7"
                            fillRule="nonzero"
                        />
                        <g transform="translate(13 22)">
                            <use fill="#000" filter="url(#k)" xlinkHref="#l" />
                            <use fill="#FFF" xlinkHref="#l" />
                        </g>
                        <path
                            d="M26.85 25.18h-9.7c-.54 0-.97.52-.97 1.16v9.32c0 .64.43 1.16.97 1.16h9.7c.54 0 .97-.52.97-1.16v-9.32c0-.64-.43-1.16-.97-1.16zm-9.7 1.16h2.9v2.33h-2.9v-2.33zm0 3.5h2.9v2.32h-2.9v-2.32zm0 5.82v-2.33h2.9v2.33h-2.9zm9.7 0h-5.82v-2.33h5.82v2.33zm0-3.5h-5.82v-2.32h5.82v2.32zm-5.82-3.49v-2.33h5.82v2.33h-5.82z"
                            fill="#3FB87F"
                            fillRule="nonzero"
                        />
                        <g transform="translate(35 22)">
                            <use fill="#000" filter="url(#m)" xlinkHref="#n" />
                            <use fill="#FFF" xlinkHref="#n" />
                        </g>
                        <g transform="rotate(45 -9.1 67.5)">
                            <use fill="#FFF" xlinkHref="#o" />
                            <rect
                                stroke="#FFF"
                                strokeWidth=".78"
                                fillOpacity=".05"
                                fill="#BDC3C7"
                                x=".47"
                                y="-.39"
                                width="5.06"
                                height="9.78"
                                rx=".78"
                            />
                            <rect
                                stroke="#737F8B"
                                strokeWidth=".78"
                                x=".47"
                                y="-.39"
                                width="5.06"
                                height="9.78"
                                rx=".78"
                            />
                        </g>
                        <path fill="#FBFCFC" d="M42.17 29.09l4.24 4.24-.7.7-4.25-4.23z" />
                        <path fill="#737F8B" d="M45.15 29.75l.7.7-2.89 2.9-.7-.71z" />
                        <rect fill="#FFF" opacity=".2" x={22} width={18} height={18} rx={2} />
                        <rect fill="#FFF" opacity=".2" x={44} width={18} height={18} rx={2} />
                        <rect fill="#FFF" opacity=".2" x={57} y={22} width={18} height={18} rx={2} />
                        <rect fill="#FFF" opacity=".2" x={54} y={66} width={18} height={18} rx={2} />
                        <rect fill="#FFF" opacity=".2" x={57} y={88} width={18} height={18} rx={2} />
                        <rect fill="#FFF" opacity=".2" x={66} y={44} width={18} height={18} rx={2} />
                        <rect fill="#FFF" opacity=".2" x={35} y={88} width={18} height={18} rx={2} />
                        <rect fill="#FFF" opacity=".2" x={13} y={88} width={18} height={18} rx={2} />
                        <rect fill="#FFF" opacity=".2" x={21} y={110} width={18} height={18} rx={2} />
                    </g>
                </g>
            </AccessibleSVG>
        );
    }
}

export default FileCircleIllustration;
