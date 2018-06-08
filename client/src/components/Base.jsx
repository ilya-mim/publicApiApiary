import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Auth from '../modules/Auth';

const Base = ({ children }) => (
    <div>
        <AppBar position="static" color="default">
            <Toolbar>
                <Typography variant="title" color="inherit" className="flex">
                    Apiary’s Public API UI
                </Typography>
                {Auth.isUserAuthenticated() && (
                    <div className="top-bar-right">
                        <Link to="/logout">Log out</Link>
                    </div>
                )}
            </Toolbar>
        </AppBar>

        {children}

    </div>
);

Base.propTypes = {
    children: PropTypes.object.isRequired
};

export default Base;