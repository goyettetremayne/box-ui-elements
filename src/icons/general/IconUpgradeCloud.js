// @flow
import * as React from 'react';

import AccessibleSVG from '../accessible-svg';
import { BOX_BLUE } from '../../common/variables';

type Props = {
    className?: string,
    color?: string,
    height?: number,
    /** A text-only string describing the icon if it's not purely decorative for accessibility */
    title?: string | React.Element<any>,
    width?: number,
};

const IconUpgradeCloud = ({ className = '', color = BOX_BLUE, height = 50, title, width = 82 }: Props) => (
    <AccessibleSVG
        className={`icon-upgrade-cloud ${className}`}
        title={title}
        width={width}
        height={height}
        viewBox="0 0 82 50"
    >
        <g transform="translate(0 1)" fill="none" fillRule="evenodd">
            <rect className="fill-color" fill={color} opacity="0.3" x="6" y="48" width="63" height="1" rx="100" />
            <rect className="fill-color" fill={color} opacity="0.3" x="71" y="48" width="11" height="1" rx="100" />
            <rect className="fill-color" fill={color} opacity="0.3" y="48" width="4" height="1" rx="100" />
            <path
                className="stroke-color"
                d="M59.5 15C57.75 6.5 50.25 0 41 0c-7.25 0-13.5 4-16.5 10C16.75 11 11 17.25 11 25c0 8.25 6.75 15 15 15h32.5c7 0 12.5-5.5 12.5-12.5 0-6.5-5.25-12-11.5-12.5z"
                stroke={color}
                strokeWidth="2"
            />
            <path
                className="stroke-color"
                d="M14 24c0 7.15 5.826 13 12.947 13H55"
                stroke={color}
                strokeLinecap="round"
                strokeLinejoin="round"
                opacity=".3"
            />
            <path
                className="fill-color"
                d="M41 11c-5.5 0-10 4.5-10 10s4.5 10 10 10 10-4.5 10-10-4.5-10-10-10zm0 18c-4.4 0-8-3.6-8-8s3.6-8 8-8 8 3.6 8 8-3.6 8-8 8z"
                fill={color}
            />
            <path className="fill-color" d="M42 16h-2v4h-4v2h4v4h2v-4h4v-2h-4v-4z" fill={color} />
        </g>
    </AccessibleSVG>
);

export default IconUpgradeCloud;
