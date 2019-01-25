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

const IconMaximize = ({ className = '', color = '#000000', height = 16, title, width = 16 }: Props) => (
    <AccessibleSVG
        className={`icon-maximize ${className}`}
        title={title}
        width={width}
        height={height}
        viewBox="0 0 16 16"
    >
        <path d="M8 8V3H2v5h6zm1 0v1H1V1h8v7z" fill={color} fillRule="evenodd" className="fill-color" />
    </AccessibleSVG>
);

export default IconMaximize;
