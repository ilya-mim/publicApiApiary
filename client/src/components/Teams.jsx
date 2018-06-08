import React from 'react';
import PropTypes from 'prop-types';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

const Teams = ({ teams }) => {
    return (
        <List>
            {teams && teams.map(team => (
                <ListItem key={team.teamId}>
                    <ListItemText primary={team.teamName} secondary={team.teamApisUrl} />
                </ListItem>
            ))}
        </List>
    )
};

Teams.propTypes = {
    teams: PropTypes.array.isRequired
};

export default Teams;