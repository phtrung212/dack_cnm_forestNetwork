import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Menu from './HomeMenu'
import PostWrite from './PostWrite'
import Post from './Post'
import Divider from '@material-ui/core/Divider';

const styles = theme => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing.unit * 2,
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
});

function Home(props) {
    const { classes } = props;

    return (
        <div className={classes.root}>
            <Grid container spacing={24}>

                <Grid item xs={1}>
                    <Menu/>
                </Grid>
                <Grid item xs={3}/>
                <Grid item xs={4}>
                    <PostWrite/>
                    <Divider/>
                    <Post/>
                    <Post/>
                </Grid>
            </Grid>
        </div>
    );
}

Home.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Home);
