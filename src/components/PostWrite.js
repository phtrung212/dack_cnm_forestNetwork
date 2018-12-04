import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';

import '../style/postWrite.css'
export default class PostWrite extends React.Component {
    state = {
        open: false,
    };

    handleClickOpen = () => {
        this.setState({ open: true });
    };

    handleClose = () => {
        this.setState({ open: false });
    };

    render() {
        return (
            <div>
                <div className="postWrite">
                    <Paper onClick={this.handleClickOpen} elevation={1} className="paper">
                        <div className="avatar">
                            <Avatar className="avatarIcon">
                                T
                            </Avatar>
                        </div>

                        <div className="placeholder">
                            <Typography variant="h6" color="textSecondary" >
                                What's news with you?
                            </Typography>
                        </div>


                    </Paper>
                </div>
                <Dialog
                    open={this.state.open}
                    onClose={this.handleClose}
                    aria-labelledby="form-dialog-title"
                >
                    <DialogTitle id="form-dialog-title">
                        <div className="avatar">
                            <Avatar className="avatarIcon">
                                T
                            </Avatar>
                        </div>

                        <div className="placeholder">
                            <Typography variant="h6" >
                                Trung
                            </Typography>
                        </div>
                    </DialogTitle>
                    <DialogContent>

                        <TextField
                            autoFocus
                            margin="dense"

                            placeholder="What news with you?"

                            multiline
                            rows={2}
                            rowsMax={4}
                            style={{ fontWeight: 400, fontSize: '14px', margin: '0 16px', flexShrink: 0, width: '500px', flexGrow: 1 }}
                        />
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={this.handleClose} color="primary">
                            Cancel
                        </Button>
                        <Button onClick={this.handleClose} color="primary">
                            Post
                        </Button>
                    </DialogActions>
                </Dialog>
            </div>
        );
    }
}
