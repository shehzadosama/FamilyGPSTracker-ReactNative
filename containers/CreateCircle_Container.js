import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container, Header, Body, Text, Content, Form, Item, Input, Label, Button, Footer, FooterTab, Icon } from 'native-base';
import DatePicker from 'react-native-datepicker';
import CreateCircle_Component from '../components/CreateCircle_Component';
// import SignOutMiddleware from '../store/middlewares/SignOutMiddleware';
// import CurrentLocationMiddleware from '../store/middlewares/CurrentLocationMiddleware';
// import UpdateLocationMiddleware from '../store/middlewares/UpdateLocationMiddleware';
import CurrentUserMiddleware from '../store/middlewares/CurrentUserMiddleware';
import CreateCircleMiddleware from '../store/middlewares/CreateCircleMiddleware';

function mapStateToProps(state) {
    console.log(state.CurrentUser.currentUser,"In create circle container, current user");
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
        createCircle: function (value) {

            return dispatch(CreateCircleMiddleware.createCircle(value));
        },

    };
}


class CreateCircle_Container extends Component {
    // getCurrentLocation() {
    //     this.props.getCurrentLocation();
    // }
    // signOut() {
    //     this.props.signOutUser();
    // }
    getCurrentUser() {
        this.props.getCurrentUser();
    }
    createCircle(value) {
        this.props.createCircle(value);
    }
    render() {
        return <CreateCircle_Component createCircle={this.props.createCircle.bind(this)} getCurrentUser={this.props.getCurrentUser.bind(this)} currentUser={this.props.currentUser}/>
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(CreateCircle_Container);


