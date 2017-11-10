import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container, Header, Body, Text, Content, Form, Item, Input, Label, Button, Footer, FooterTab, Icon } from 'native-base';
import DatePicker from 'react-native-datepicker';
import MembersList_Component from '../components/MembersList_Component';
import CurrentUserMiddleware from '../store/middlewares/CurrentUserMiddleware';
import CreateCircleMiddleware from '../store/middlewares/CreateCircleMiddleware';
import MembersDataMiddleware from '../store/middlewares/MembersDataMiddleware';

function mapStateToProps(state) {
    console.log("In members list container");
    return {
        membersData: state.MembersData.membersData

    };
}

function mapDispatchToProps(dispatch) {
    return {
        // signOutUser: function () {

        //     return dispatch(SignOutMiddleware.signOut());
        // // },
        // getCurrentUser: function () {

        //     return dispatch(CurrentUserMiddleware.getCurrentUser());
        // },
        getMembersData: function (value) {

            return dispatch(MembersDataMiddleware.getMembersData(value));
        },

    };
}


class MembersList_Container extends Component {
    // getCurrentLocation() {
    //     this.props.getCurrentLocation();
    // }
    // signOut() {
    //     this.props.signOutUser();
    // }

    // getCurrentUser() {
    //     this.props.getCurrentUser();
    // }
    getMembersData(value) {
        this.props.getMembersData(value);
    }
    render() {
        console.log(this.props.data);
        return <MembersList_Component getMembersData={this.props.getMembersData.bind(this)} data={this.props.data} membersData={this.props.membersData} />
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(MembersList_Container);


