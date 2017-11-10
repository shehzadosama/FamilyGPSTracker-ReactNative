import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container, Header, Body, Text, Content, Form, Item, Input, Label, Button, Footer, FooterTab, Icon } from 'native-base';
import SignUp_Component from '../components/SignUp_Component';
import SignUpMiddleware from '../store/middlewares/SignUpMiddleware';

function mapStateToProps(state) {
    
    return {
        // list: state.addPatients.patientsList
        
    };
}

function mapDispatchToProps(dispatch) {
    return {
        signUpUser: function (value) {

            return dispatch(SignUpMiddleware.signUp(value));
        },
       
    };
}


class SignUp_Container extends Component {
    signUp(user) {
        this.props.signUpUser(user);
    }
    render() {
        return <SignUp_Component signUp={this.signUp.bind(this)} />
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(SignUp_Container);


