import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container, Header, Body, Text, Content, Form, Item, Input, Label, Button, Footer, FooterTab, Icon } from 'native-base';
import DatePicker from 'react-native-datepicker';
import TrackMembers_Component from '../components/TrackMembers_Component';
// import SignOutMiddleware from '../store/middlewares/SignOutMiddleware';
// import CurrentLocationMiddleware from '../store/middlewares/CurrentLocationMiddleware';
// import UpdateLocationMiddleware from '../store/middlewares/UpdateLocationMiddleware';
import CurrentUserMiddleware from '../store/middlewares/CurrentUserMiddleware';
import CreateCircleMiddleware from '../store/middlewares/CreateCircleMiddleware';

function mapStateToProps(state) {
    console.log(state.CurrentUser.currentUser, "In create circle container, current user");
    return {
        currentUser: state.CurrentUser.currentUser

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


class TrackMembers_Container extends Component {
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
        console.log(this.props.data);
        return <TrackMembers_Component data={this.props.data} />
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(TrackMembers_Container);


