import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container, Header, Body, Text, Content, Form, Item, Input, Label, Button, Footer, FooterTab, Icon } from 'native-base';

import Login_Component from '../components/Login_Component';
import LoginMiddleware from '../store/middlewares/LoginMiddleware';
import CheckLoginMiddleware from '../store/middlewares/CheckLoginMiddleware';
import UpdateUserLocMiddleware from '../store/middlewares/UpdateUserLocMiddleware';

function mapStateToProps(state) {
    console.log(state.Login.loggedInUser);
    return {
        loggedInUser: state.Login.loggedInUser

    };
}

function mapDispatchToProps(dispatch) {
    return {
        loginUser: function (value) {

            return dispatch(LoginMiddleware.login(value));
        },
        checkLogin: function () {

            return dispatch(CheckLoginMiddleware.checkLogin());
        },
        // updateLoc: function () {

        //     return dispatch(UpdateUserLocMiddleware.updateLoc());
        // },


    };
}


class Login_Container extends Component {
    login(user) {
        this.props.loginUser(user);
    }
    checkLogin() {
        this.props.checkLogin();
    }
    render() {
        return <Login_Component login={this.login.bind(this)} loggedInUser={this.props.loggedInUser} checkLogin={this.checkLogin.bind(this)} />
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Login_Container);


