import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Menu from './HomeMenu'
import { Parallax } from 'react-parallax';
import Avatar from '@material-ui/core/Avatar';
import red from "@material-ui/core/colors/red";
import Post from './Post'
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Chip from '@material-ui/core/Chip';
import Following from '@material-ui/icons/Favorite';

const styles = theme => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing.unit * 2,
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
    info:{
        boxSizing:'border-box',
        left: 20,
        bottom: 20,
        position: 'absolute',
        width:300

    },
    avatar:{
        float:'left',
        border: '2px solid rgb(255, 255, 255)',
        backgroundColor: red[500],

    },
    listPost: {

    },
    title: {
        textAlign:'center',
        fontSize:30
    },
    displayname:{
        float:'left',
        marginLeft:5,
        marginTop:10,
        fontSize:30,
        fontWeight:500,
        color: '#FFFFFF',
    },
    chip:{
      float:'left',
        margin:5,
    },
    editProfile:{
        right: 20,
        bottom: 20,
        position: 'absolute',
        float:'right'
    },
    button:{
        backgroundColor:'#EBEDF0'
    },
    icon:{
        color:'#F00000'
    },
});

class Profile extends React.Component{
    state = {
        open: false,
    };

    handleClickOpen = () => {
        this.setState({ open: true });
    };

    handleClose = () => {
        this.setState({ open: false });
    };
    render()
    {
        const { classes } = this.props;

        return (
            <div className={classes.root}>
                <Grid container spacing={24}>
                    <Grid item xs={1}>
                        <Menu/>
                    </Grid>
                    <Grid item xs={1}/>
                    <Grid item xs={10}>
                        <div>
                            <Parallax
                                bgImage={require('../static/background.jpg')}
                                bgImageAlt="background"
                                strength={100}
                                bgImageSrcSet='https://2.pik.vn/2015db73b553-5d75-406b-b208-20a05d2084b8.jpeg'
                            >
                                <div className={classes.info}>
                                    <Avatar className={classes.avatar}>
                                        R
                                    </Avatar>

                                    <div className={classes.displayname}>
                                        Trung
                                    </div>
                                    <Chip avatar={<Following className={classes.icon}/>} label="Followers: 10" className={classes.chip} />
                                    <Chip avatar={<Following className={classes.icon}/>} label="Following: 100" className={classes.chip} />
                                </div >
                                <div className={classes.editProfile}>
                                    <Button className={classes.button} onClick={this.handleClickOpen}>Edit your profile</Button>
                                    <Dialog
                                        open={this.state.open}
                                        onClose={this.handleClose}
                                        aria-labelledby="form-dialog-title"
                                    >
                                        <DialogTitle id="form-dialog-title">Subscribe</DialogTitle>
                                        <DialogContent>
                                            <DialogContentText>
                                                To subscribe to this website, please enter your email address here. We will send
                                                updates occasionally.
                                            </DialogContentText>
                                            <TextField
                                                autoFocus
                                                margin="dense"
                                                id="name"
                                                label="Email Address"
                                                type="email"
                                                fullWidth
                                            />
                                        </DialogContent>
                                        <DialogActions>
                                            <Button onClick={this.handleClose} color="primary">
                                                Cancel
                                            </Button>
                                            <Button onClick={this.handleClose} color="primary">
                                                Subscribe
                                            </Button>
                                        </DialogActions>
                                    </Dialog>
                                </div>
                                <div style={{ height: '300px' }} />
                            </Parallax>
                        </div>
                    </Grid>
                </Grid>
                <Grid container spacing={24}>
                    <Grid item xs={4}/>
                    <Grid item xs={6}>
                        <div className={classes.listPost}>
                            <div className={classes.title}>
                                My post
                            </div>

                            <Post/>
                            <Post/>
                        </div>
                    </Grid>
                </Grid>
            </div>
        );
    }
}

Profile.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Profile);
