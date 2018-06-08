import React from 'react';
import PropTypes from 'prop-types';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Teams from './Teams';

const UserInfo = ({ userInfo, errors }) => {
    return (
        <Paper className="container">
            <Typography gutterBottom variant="headline" component="h3">
                User
            </Typography>
            
            {errors.summary && <div className="error-message">{errors.summary}</div>}

            <div>Id: {userInfo.userId}</div>
            <div>Name: {userInfo.userName}</div>
            <div>Apis Url: {userInfo.userApisUrl}</div>

            {userInfo.teams && <Teams teams={userInfo.teams} />}

        </Paper>
    )
};

UserInfo.propTypes = {
    userInfo: PropTypes.object.isRequired,
};

export default UserInfo;