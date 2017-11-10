import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container, Header, Body, Text, Content, Form, Item, Input, Label, Button, Footer, FooterTab, Icon } from 'native-base';
import DatePicker from 'react-native-datepicker';
import MyCircles_Component from '../components/MyCircles_Component';
// import SignOutMiddleware from '../store/middlewares/SignOutMiddleware';
// import CurrentLocationMiddleware from '../store/middlewares/CurrentLocationMiddleware';
// import UpdateLocationMiddleware from '../store/middlewares/UpdateLocationMiddleware';
import CurrentUserMiddleware from '../store/middlewares/CurrentUserMiddleware';
import CreateCircleMiddleware from '../store/middlewares/CreateCircleMiddleware';
import MyCirclesMiddleware from '../store/middlewares/MyCirclesMiddleware';

function mapStateToProps(state) {
    console.log(state.MyCircles.myCircles, "In my circles container, my circles");
    return {
        myCircles: state.MyCircles.myCircles

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

        getMyCircles: function () {

            return dispatch(MyCirclesMiddleware.getMyCircles());
        },


    };
}


class MyCircles_Container extends Component {
    // getCurrentLocation() {
    //     this.props.getCurrentLocation();
    // }
    // signOut() {
    //     this.props.signOutUser();
    // }
    getCurrentUser() {
        this.props.getCurrentUser();
    }
    getMyCircles() {
        this.props.getMyCircles();
    }
    render() {
        return <MyCircles_Component getMyCircles={this.props.getMyCircles.bind(this)}  myCircles={this.props.myCircles} />
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(MyCircles_Container);


