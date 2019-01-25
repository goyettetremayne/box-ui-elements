// @flow
import * as React from 'react';

import AccessibleSVG from '../accessible-svg';

type Props = {
    className?: string,
    color?: string,
    height?: number,
    /** A text-only string describing the icon if it's not purely decorative for accessibility */
    title?: string | React.Element<any>,
    width?: number,
};

const IconShield2 = ({ className = '', color = '#8EA6B2', height = 12, title, width = 12 }: Props) => (
    <AccessibleSVG
        className={`icon-shield-2 ${className}`}
        title={title}
        width={width}
        height={height}
        viewBox="0 0 12 12"
    >
        <path
            className="fill-color"
            d="M6 1L2 2.818v2.727C2 8.068 3.707 10.427 6 11c2.293-.573 4-2.932 4-5.455V2.818L6 1zm0 4.995h3.111C8.876 7.868 7.653 9.536 6 10.06V6H2.889V3.41L6 1.994v4z"
            fill={color}
            fillRule="nonzero"
        />
    </AccessibleSVG>
);

export default IconShield2;
