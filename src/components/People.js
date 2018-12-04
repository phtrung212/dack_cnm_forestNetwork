import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Menu from './HomeMenu'
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import FindPeople from './FindPeople'
import Following from './Folllowing'
function TabContainer(props) {
    return (
        <Typography component="div" style={{ padding: 8 * 3 }}>
            {props.children}
        </Typography>
    );
}

TabContainer.propTypes = {
    children: PropTypes.node.isRequired,
};

const styles = theme => ({
    root: {
        flexGrow: 1,

        backgroundColor:'#E9EBEE',
    },
});
class People extends React.Component{
    state = {
        value: 0,
    };

    handleChange = (event, value) => {
        this.setState({ value });
    };
    render()
    {
        const { classes } = this.props;
        const { value } = this.state;
        return (
            <div className={classes.root}>
                <Grid container spacing={24}>

                    <Grid item xs={1}>
                        <Menu/>
                    </Grid>
                    <Grid item xs={1}/>
                    <Grid item xs={10}>
                        <Tabs value={value} onChange={this.handleChange} centered>
                            <Tab label="FIND PEOPLE" />
                            <Tab label="FOLLOWING" />
                            <Tab label="FOLLOWER" />
                        </Tabs>
                        {value === 0 && <TabContainer>
                            <FindPeople/>
                        </TabContainer>}
                        {value === 1 && <TabContainer>
                            <Following/>
                        </TabContainer>}
                        {value === 2 && <TabContainer>Item Three</TabContainer>}
                    </Grid>
                </Grid>
            </div>
        );
    }

}
People.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(People);
