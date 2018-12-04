import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import red from '@material-ui/core/colors/red';
import MoreVertIcon from '@material-ui/icons/MoreVert';
const styles = ({
    card: {

    },
    cardHeader: {
        maxHeight:5

    },
    actions: {
        display: 'flex',
    },

    avatar: {
        width:30,
        height:30,
        backgroundColor: red[500],
        fontSize:10
    },
});

class Comment extends React.Component {

    render() {
        const { classes } = this.props;

        return (
            <Card className={classes.card}>
                <CardHeader
                    className={classes.cardHeader}
                    avatar={
                        <Avatar aria-label="Recipe" className={classes.avatar}>
                            R
                        </Avatar>
                    }
                    action={
                        <IconButton>
                            <MoreVertIcon />
                        </IconButton>
                    }
                    title="Trung"
                />

                <CardContent>
                    <Typography >
                        comment 1
                    </Typography>
                </CardContent>

            </Card>
        );
    }
}

Comment.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Comment);
