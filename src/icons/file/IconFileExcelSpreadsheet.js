// @flow
import * as React from 'react';

import AccessibleSVG from '../accessible-svg';

type Props = {
    className?: string,
    height?: number,
    /** A text-only string describing the icon if it's not purely decorative for accessibility */
    title?: string | React.Element<any>,
    width?: number,
};

const IconFileExcelSpreadsheet = ({ className = '', height = 32, title, width = 32 }: Props) => (
    <AccessibleSVG
        className={`icon-file-excel-spreadsheet ${className}`}
        title={title}
        width={width}
        height={height}
        viewBox="0 0 32 32"
    >
        <path d="M25 27H7V5h13l5 5z" fill="#FFFFFF" />
        <path
            d="M20 4H7c-.6 0-1 .4-1 1v22c0 .6.4 1 1 1h18c.6 0 1-.4 1-1V9.9L20 4zm5 23H7V5h13v4c0 .6.4 1 1 1h4v17z"
            fill="#207245"
        />
        <path
            d="M10 13h3v2h-3zm4 0h3v2h-3zm4 0h3v2h-3zm-8 3h3v2h-3zm4 0h3v2h-3zm4 0h3v2h-3zm-8 3h3v2h-3zm4 0h3v2h-3zm4 0h3v2h-3zm-8 3h3v2h-3zm4 0h3v2h-3zm4 0h3v2h-3z"
            fill="#207245"
        />
    </AccessibleSVG>
);

export default IconFileExcelSpreadsheet;
