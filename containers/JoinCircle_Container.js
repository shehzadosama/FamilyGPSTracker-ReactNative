import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container, Header, Body, Text, Content, Form, Item, Input, Label, Button, Footer, FooterTab, Icon } from 'native-base';
import DatePicker from 'react-native-datepicker';
import JoinCircle_Component from '../components/JoinCircle_Component';
// import SignOutMiddleware from '../store/middlewares/SignOutMiddleware';
// import CurrentLocationMiddleware from '../store/middlewares/CurrentLocationMiddleware';
// import UpdateLocationMiddleware from '../store/middlewares/UpdateLocationMiddleware';
import CurrentUserMiddleware from '../store/middlewares/CurrentUserMiddleware';
import JoinCircleMiddleware from '../store/middlewares/JoinCircleMiddleware';

function mapStateToProps(state) {
    console.log(state.CurrentUser.currentUser,"In Join circle container, current user");
    return {
        currentUser:  state.CurrentUser.currentUser

    };
}

function mapDispatchToProps(dispatch) {
    return {
        // signOutUser: function () {

        //     return dispatch(SignOutMiddleware.signOut());
        // },
        getCurrentUser: function () {

            return dispatch(CurrentUserMiddleware.getCurrentUser());
        },
        joinCircle: function (value) {

            return dispatch(JoinCircleMiddleware.joinCircle(value));
        },

    };
}


class JoinCircle_Container extends Component {
    // getCurrentLocation() {
    //     this.props.getCurrentLocation();
    // }
    // signOut() {
    //     this.props.signOutUser();
    // }
    getCurrentUser() {
        this.props.getCurrentUser();
    }
    joinCircle(value) {
        this.props.joinCircle(value);
    }
    render() {
        return <JoinCircle_Component joinCircle={this.props.joinCircle.bind(this)} getCurrentUser={this.props.getCurrentUser.bind(this)} currentUser={this.props.currentUser}/>
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(JoinCircle_Container);


