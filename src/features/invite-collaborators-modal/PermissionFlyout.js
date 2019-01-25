import React from 'react';
import { FormattedMessage, injectIntl, intlShape } from 'react-intl';

import { Table, TableBody, TableCell, TableHeader, TableHeaderCell, TableRow } from 'components/table';
import { Flyout, Overlay } from 'components/flyout';
import IconInfo from '../../icons/general/IconInfo';

import messages from './messages';

import './PermissionFlyout.scss';

const PermissionFlyout = ({ intl: { formatMessage } }) => {
    const columnHeaders = [
        formatMessage(messages.permissionLevelsTableHeaderText),
        formatMessage(messages.uploadTableHeaderText),
        formatMessage(messages.downloadTableHeaderText),
        formatMessage(messages.previewTableHeaderText),
        formatMessage(messages.getLinkTableHeaderText),
        formatMessage(messages.editTableHeaderText),
        formatMessage(messages.deleteTableHeaderText),
        formatMessage(messages.ownerTableHeaderText),
    ];
    const data = [
        [formatMessage(messages.coownerLevelText), '●', '●', '●', '●', '●', '●', '●'],
        [formatMessage(messages.editorLevelText), '●', '●', '●', '●', '●', '●', ''],
        [formatMessage(messages.viewerUploaderLevelText), '●', '●', '●', '●', '●', '', ''],
        [formatMessage(messages.previewerUploaderLevelText), '●', '', '●', '', '', '', ''],
        [formatMessage(messages.viewerLevelText), '', '●', '●', '●', '', '', ''],
        [formatMessage(messages.previewerLevelText), '', '', '●', '', '', '', ''],
        [formatMessage(messages.uploaderLevelText), '●', '', '', '', '', '', ''],
    ];

    return (
        <Flyout position="top-center" className="invitation-permission-flyout-overlay">
            <span className="invitation-permission-flyout-target" data-resin-target="learnmore">
                <IconInfo with={16} height={16} />
                <FormattedMessage {...messages.inviteePermissionsLearnMore} />
            </span>
            <Overlay>
                <Table isCompact>
                    <TableHeader>
                        {columnHeaders.map(header => (
                            <TableHeaderCell key={header}>{header}</TableHeaderCell>
                        ))}
                    </TableHeader>
                    <TableBody>
                        {data.map((row, rowIndex) => (
                            <TableRow key={rowIndex}>
                                {row.map((cell, colIndex) => (
                                    <TableCell key={`${rowIndex}${colIndex}`}>{cell}</TableCell>
                                ))}
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </Overlay>
        </Flyout>
    );
};

PermissionFlyout.displayName = 'PermissionFlyout';
PermissionFlyout.propTypes = {
    intl: intlShape.isRequired,
};

export { PermissionFlyout as PermissionFlyoutBase };
export default injectIntl(PermissionFlyout);
