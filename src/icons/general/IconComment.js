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

const IconComment = ({ className = '', color = '#000000', height = 11, title, width = 11 }: Props) => (
    <AccessibleSVG
        className={`icon-comment ${className}`}
        title={title}
        width={width}
        height={height}
        viewBox="0 0 11 11"
    >
        <path
            className="fill-color"
            d="M9.556.932H1.492C.938.932.49 1.386.49 1.94l-.006 9.072L2.5 8.996h7.056c.554 0 1.008-.454 1.008-1.008V1.94c0-.554-.454-1.008-1.008-1.008zM2.5 4.46h6.048v1.008H2.5V4.46zm4.032 2.52H2.5V5.972h4.032V6.98zm2.016-3.024H2.5V2.948h6.048v1.008z"
            fill={color}
        />
    </AccessibleSVG>
);

export default IconComment;
