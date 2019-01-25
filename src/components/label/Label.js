// @flow
import * as React from 'react';
import { FormattedMessage } from 'react-intl';

import commonMessages from 'common/messages';

import InfoIconWithTooltip from './InfoIconWithTooltip';
import StandardLabel from './StandardLabel';
import HiddenLabel from './HiddenLabel';

import './Label.scss';

const OptionalFormattedMessage = () => (
    <span className="label-optional">
        (<FormattedMessage {...commonMessages.optional} />)
    </span>
);

type Props = {
    children: React.Node,
    infoIconProps?: Object,
    infoTooltip?: React.Node,
    /** The label text */
    text: React.Node,
    /** Whether to show the `(Optional)` text next to the label for an optional field */
    showOptionalText?: boolean,
    /** Tooltip text for the label */
    tooltip?: React.Node,
    /** Whether the text of the label should be accessibly hidden */
    hideLabel?: boolean,
};

const Label = ({ text, tooltip, infoTooltip, infoIconProps, showOptionalText, hideLabel, children }: Props) => {
    const labelContent = [
        <span key="labelText">{text}</span>,
        showOptionalText ? <OptionalFormattedMessage key="optionalMessage" /> : null,
    ];

    if (infoTooltip) {
        labelContent.push(
            <InfoIconWithTooltip
                iconProps={{ className: 'tooltip-icon', ...infoIconProps }}
                key="infoTooltip"
                tooltipText={infoTooltip}
            />,
        );
    }

    if (hideLabel) {
        return <HiddenLabel labelContent={labelContent}>{children}</HiddenLabel>;
    }

    return (
        <StandardLabel labelContent={labelContent} tooltip={tooltip}>
            {children}
        </StandardLabel>
    );
};

export default Label;
