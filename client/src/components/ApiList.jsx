import React from 'react';
import PropTypes from 'prop-types';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

const ApiList = ({ apiList, errors }) => (
    <Paper className="container">
        <Typography gutterBottom variant="headline" component="h3">
            Apis
        </Typography>

        {errors.summary && <div className="error-message">{errors.summary}</div>}

        <Table>
            <TableHead>
                <TableRow>
                    <TableCell>Name</TableCell>
                    <TableCell>Url</TableCell>
                    <TableCell>Subdomain</TableCell>
                    <TableCell>Private</TableCell>
                    <TableCell>Public</TableCell>
                    <TableCell>Team</TableCell>
                    <TableCell>Personal</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {apiList.map(api => {
                    return (
                        <TableRow key={api.apiName}>
                            <TableCell>{api.apiName}</TableCell>
                            <TableCell>{api.apiDocumentationUrl}</TableCell>
                            <TableCell>{api.apiSubdomain}</TableCell>
                            <TableCell>{api.apiIsPrivate ? 'Yes' : 'No'}</TableCell>
                            <TableCell>{api.apiIsPublic ? 'Yes' : 'No'}</TableCell>
                            <TableCell>{api.apiIsTeam ? 'Yes' : 'No'}</TableCell>
                            <TableCell>{api.apiIsPersonal ? 'Yes' : 'No'}</TableCell>
                        </TableRow>
                    );
                })}
            </TableBody>
        </Table>
    </Paper>
);

ApiList.propTypes = {
    apiList: PropTypes.array.isRequired,
};

export default ApiList;