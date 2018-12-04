import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import HomeIcon from '@material-ui/icons/Home';
import ProfileIcon from '@material-ui/icons/AccountCircle';
import PeopleIcon from '@material-ui/icons/Group';
import { Link } from 'react-router-dom'

const styles = theme => ({
    root: {
        width: '100%',
        maxWidth: 360,
        backgroundColor: '#E9EBEE',
    },
});
function ListItemLink(props) {
    const { primary, to } = props;
    return (
        <li>
            <ListItem button component={Link} to={to}>
                <ListItemText primary={primary} />
            </ListItem>
        </li>
    );
}

function HomeMenu(props) {
    const { classes } = props;
    return (
        <div className={classes.root} >
            <List component="nav">
                <ListItem button>
                    <ListItemIcon>
                        <HomeIcon />
                    </ListItemIcon>
                    <ListItemLink to="/" primary="Home" />
                </ListItem>
                <ListItem button>
                    <ListItemIcon>
                        <ProfileIcon />
                    </ListItemIcon>
                    <ListItemLink to="/profile" primary="Profile" />
                </ListItem>
                <ListItem button>
                    <ListItemIcon>
                        <PeopleIcon />
                    </ListItemIcon>
                    <ListItemLink to="/people" primary="People" />
                </ListItem>
            </List>
        </div>
    );
}

HomeMenu.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(HomeMenu);
