import React, {Component } from 'react'
import CardContent from '@material-ui/core/CardContent';

import {
    Button,
    Typography,
    Box,
    Grid,
    TextField
} from "@material-ui/core";
import Card from '@material-ui/core/Card';


    class index extends Component {
        constructor(props) {
            super(props);
            this.state = {userId: []};
        } 
        // {user: []};
        handleChange = (e) => {
            this.setState({
                [e.target.name]: e.target.value,
            });
        };
        componentDidMount() {
            fetch('https://591ae37ab799.ngrok.io/api/register:Id', {
                method: 'PUT',
                body: JSON.stringify({
                    name: "Neetu",
                    companyName: 'foo',
                    phone: 'bar',
                    password: '1'
                }),
                headers: {
                  "Content-type": "application/json; charset=UTF-8"
                }
            }).then(response => {
                            return response.json()
            }).then(json => {
                console.log(json)
                this.setState({
                    user:json
                });
            })
        }
       
         

        render() {
           
            return (
                <Card style={{ boxShadow: 'none' }}>
                    <CardContent>

                        <Grid container justify="center">
                            <Box style={{ marginTop: "7rem" }} >
                                <Typography variant="h5" style={{
                                    textAlign: "center",
                                }}>
                                    Complete your free account signup
                    </Typography>
                                <TextField
                                    fullWidth={true}
                                    label="Name"
                                    variant="outlined"
                                    inputProps={{ style: { color: "white" } }}
                                    margin="dense"
                                    size="medium"
                                    value={this.state.userId.name}

                                />
                                <br />
                                <TextField fullWidth={true}
                                    label="Contact Number"
                                    variant="outlined"
                                    inputProps={{ style: { color: "white" } }}
                                    margin="dense"
                                    size="medium"
                                    value={this.state.userId.number}

                                />
                                <br />
                                <TextField fullWidth={true}
                                    label="Company"
                                    variant="outlined"
                                    inputProps={{ style: { color: "white" } }}
                                    margin="dense"
                                    size="medium"
                                    value={this.state.userId.companyName}

                                />
                                <br />
                                <TextField fullWidth={true}
                                    label="Password"
                                    variant="outlined"
                                    inputProps={{ style: { color: "white" } }}
                                    margin="dense"
                                    size="medium"
                                    value={this.state.userId.password}

                                />
                                <br />
                                <Button variant="outlined"
                                    style={{ marginBottom: "-5rem", marginLeft: "8rem" }}
                                // endIcon={<SendIcon />}
                                >
                                    Sign Up
                    </Button>
                            </Box>
                        </Grid>
                        <Typography style={{ marginLeft: "30rem", marginTop: "4rem" }}>
                            Have an account,login instead
            </Typography>
                    </CardContent>

                </Card>
            )
        }
    }
export default (index);