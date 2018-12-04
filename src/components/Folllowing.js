import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({

    cardGrid: {
        padding: `${theme.spacing.unit * 8}px 0`,
    },
    card: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column',

    },
    cardMedia: {
        paddingTop: '56.25%', // 16:9
    },
    cardContent: {
        flexGrow: 1,
        display: 'flex',
        justifyContent: 'center',
    },
    avatar:{
        width:'80px',
        height:'80px',
        backgroundColor:'#AFEEEE'
    },

});

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

function Following(props) {
    const { classes } = props;

    return (
        <React.Fragment>
            <main>
                <div className={classNames(classes.layout, classes.cardGrid)}>
                    {/* End hero unit */}
                    <Grid container spacing={40}>
                        {cards.map(card => (
                            <Grid item key={card} sm={6} md={4} lg={3}>
                                <Card className={classes.card}>
                                    <CardContent className={classes.cardContent}>
                                        <div>
                                            <Avatar className={classes.avatar} >
                                                T
                                            </Avatar>
                                        </div>

                                    </CardContent>
                                    <CardContent className={classes.cardContent}>
                                        <div className="placeholder">
                                            <Typography variant="h6" align={"center"} >
                                                Trung
                                            </Typography>
                                        </div>
                                    </CardContent>
                                    <CardActions>
                                        <Button size="medium" color="primary" fullWidth >
                                            UnFollow
                                        </Button>

                                    </CardActions>
                                </Card>
                            </Grid>
                        ))}
                    </Grid>
                </div>
            </main>

        </React.Fragment>
    );
}

Following.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Following);