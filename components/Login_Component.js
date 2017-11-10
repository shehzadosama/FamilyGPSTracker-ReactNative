import React, { Component } from 'react';
import { View } from 'react-native';
import { Actions } from 'react-native-router-flux';
import * as firebase from 'firebase';
import * as nativebase from 'native-base';
// import { Container, Header, Left, Right, Body, Title, Text, Content, Form, Spinner, Item, Input, Label, Button, Footer, FooterTab, Icon } from 'native-base';
class Login_Component extends Component {
    constructor(props) {
        super(props);

        this.state = {

            email: '',
            pass: '',
            loading: true

        };

    }
    componentWillMount() {
   this.props.checkLogin();
   console.log(this.props.loggedInUser);
//    this.props.updateLoc();
        // firebase.auth().onAuthStateChanged(() => {


        //     if (firebase.auth().currentUser) {
        //         Actions.Dashboard_Container();
        //         // const userId = firebase.auth().currentUser.uid;
        //         // console.log(userId);
        //         // var user;
        //         // const rootRef = firebase.database().ref();
        //         // const speedRef = rootRef.child('users/' + userId);
        //         // speedRef.on('value', snap => {
        //         //     user = snap.val()
        //         //     console.log(user);

        //         // });
        //     }
        //     else {
        //         this.setState({ loading: false })
        //         console.log("No user log in");
        //     }
        // });
    }
    // componentDidMount() {
    //     console.log(this.props.loggedInUser);
    // }


    login() {

        var email = this.state.email;
        var pass = this.state.pass;
        if (email === '' || pass === '') {
            alert("All fields required");
        }
        else {
            this.props.login({
                email: email,
                pass: pass,

            });


        }
    }






    render() {
        console.log(this.props.loggedInUser);
        return (
            <nativebase.Container>
                <nativebase.Header>
                    <nativebase.Body>
                        <nativebase.Title>Family Tracker Application</nativebase.Title>
                    </nativebase.Body>
                </nativebase.Header>
                <nativebase.Content>
                    {!this.props.loggedInUser ? <nativebase.View><nativebase.Spinner color='blue' large /></nativebase.View> :
                        <nativebase.Form>
                            <nativebase.Item floatingLabel >
                                <nativebase.Label>Email</nativebase.Label>
                                <nativebase.Icon name='ios-mail' />
                                <nativebase.Input value={this.state.email} onChange={ev => this.setState({ email: ev.nativeEvent.text })} />
                            </nativebase.Item>
                            <nativebase.Item floatingLabel>
                                <nativebase.Label>Password</nativebase.Label>
                                <nativebase.Icon name='ios-lock' />
                                <nativebase.Input secureTextEntry={true} value={this.state.pass} onChange={ev => this.setState({ pass: ev.nativeEvent.text })} />
                            </nativebase.Item>
                            <nativebase.Button block success iconRight onPress={this.login.bind(this)} >
                                <nativebase.Text>LOGIN</nativebase.Text>
                            </nativebase.Button>
                            <nativebase.Button transparent dark onPress={() => Actions.SignUp_Container()} >
                                <nativebase.Text>Not already User? Create an account</nativebase.Text>
                            </nativebase.Button>
                        </nativebase.Form>}

                </nativebase.Content>

            </nativebase.Container>
        );
    }
}


export default Login_Component;