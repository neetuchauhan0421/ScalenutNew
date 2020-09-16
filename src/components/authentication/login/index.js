import React, { Component } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import PropTypes from 'prop-types';
import Divider from '@material-ui/core/Divider';
import { withStyles } from "@material-ui/core/styles";
import LoginComp from "./logincall";
import EmailIcon from '@material-ui/icons/Email';

const styles = theme => ({
  email: {
    background: '#48a026',
    color: 'white',
  },
  gmail: {
    background: '#4385f5',
  },

});




class index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showPassword: false,
      email: '',
      password: '',
    };
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  onclickemail = (event) => {
    console.log(event)
    console.log('sdfs')
    // call register api
    // get response,
    // add response in if statement
   
    fetch(`https://591ae37ab799.ngrok.io/api/user/`, {
  method: 'POST',
  headers: new Headers({
             'Content-Type': 'application/x-www-form-urlencoded', // <-- Specifying the Content-Type
    }),
  body: "email=ankik@gmail.com" // <-- Post parameters
}).then((res) => {
      if (res.result===true){
    this.props.history.push({ pathname: `/password` })
    }
    else{
      this.props.history.push({ pathname: `/` })

    }
    })
    .catch((err) => console.log(err));
    
  }



  // handleSubmit = (event) => {
  //   event.preventDefault();
  //   if (!isError) {
  //     trackEvent('Login', 'Sign in clicked', null);
  //     this.setState({ disableLoginButton: true });
  //     const signInData = {
  //       email: this.state.email,
  //       password: this.state.password,
  //     };
  //     this.props.loginUser(signInData, this.props.history);
  //   }
  // };


  render() {
    const {
      email,
      
    } = this.state;
    const { classes } = this.props;
    return (
      <Grid item xs={12} sm={12} md={5}
        style={{ marginLeft: "23rem", marginTop: "5rem" }}>
        <Card style={{ boxShadow: 'none' }}>
          <CardContent>
            <CssBaseline />

            <Typography
              variant='h4'
              style={{
                fontWeight: '500',
                textAlign: 'center',
                marginBottom: '1rem',
                marginTop: '1rem',
              }}
            >
              Get your free account
            </Typography>


            <Grid container justify='center'>
              <LoginComp />

            </Grid>
            <Divider style={{ marginTop: "2.5rem" }} />
            {/* <form onSubmit={this.handleSubmit}> */}

            <Grid container justify='center'>
              <Grid item xs={12} sm={10} md={9}>
                <TextField
                  variant='outlined'
                  margin='normal'
                  fullWidth
                  size='small'
                  value={email}
                  name='email'
                  label='Work email address'

                  id='email'
                  style={{ marginBottom: '1rem' }}
                  autoComplete='email'
                  onChange={this.handleChange}
                />
              </Grid>
            </Grid>
              <Grid container justify='center'>
                <Grid container justify='center'>
                  <Grid

                    style={{ textAlign: 'center', marginTop: '2rem' }}
                  >
                    <Button
                      className={classes.email}
                      style={{ backgroundColor: '#48a026' }}
                      variant="contained"
                      type="submit  "
                      style={{ width: "23rem" }}
                      onClick={this.onclickemail}
                    >
                      <EmailIcon style={{ marginLeft: "-9rem" }} />
                    Continue with Email
        </Button>
                  </Grid>
                </Grid>
              </Grid>
            {/* </form> */}
          </CardContent>
        </Card>

      </Grid>

    );
  }
}

index.propTypes = {
  history: PropTypes.object.isRequired,
};

export default withStyles(styles)(index);


