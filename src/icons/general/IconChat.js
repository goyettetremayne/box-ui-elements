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

const IconChat = ({ className = '', color = '#979797', height = 16, title, width = 16 }: Props) => (
    <AccessibleSVG className={`icon-chat ${className}`} title={title} width={width} height={height} viewBox="0 0 14 15">
        <g className="fill-color" fill={color}>
            <path d="M1 0C.4 0 0 .4 0 1v10h2v3.2L5.7 11H13c.6 0 1-.4 1-1V0H1zm12 10H5.3l-.3.2L3 12v-2H1V1h12v9z" />
            <path d="M3.5 6h1c.3 0 .5-.2.5-.5S4.8 5 4.5 5h-1c-.3 0-.5.2-.5.5s.2.5.5.5zM6.5 6h1c.3 0 .5-.2.5-.5S7.8 5 7.5 5h-1c-.3 0-.5.2-.5.5s.2.5.5.5zM9.5 6h1c.3 0 .5-.2.5-.5s-.2-.5-.5-.5h-1c-.3 0-.5.2-.5.5s.2.5.5.5z" />
        </g>
    </AccessibleSVG>
);

export default IconChat;
