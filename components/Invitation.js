import React, { Component } from 'react';
import { View, Image, StyleSheet, Dimensions, } from 'react-native';
// import { Container, Content, Header, Body, Text, Button, Right, Left, Title, Drawer, Fab, Footer, FooterTab, Spinner } from 'native-base';
import * as nb from 'native-base';
import Icon from 'react-native-vector-icons/dist/MaterialIcons';
import FontAwesomeIcons from 'react-native-vector-icons/dist/FontAwesome';
import MapView from 'react-native-maps';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { Actions } from 'react-native-router-flux';
import Sidebar from './Sidebar';

export default class Invitation extends Component {
    constructor(props) {
        super(props);
        this.state = {
            invitation_code: null,

        };
    }

    componentDidMount() {

        // this.props.getMyCircles();
    }
    render() {



        console.log("Rendering in my Circle component");
        console.log(this.props.invitation_code)




        // console.log(list);

        return (
            <nb.Container>
                <nb.Header>
                    <nb.Left>
                        <nb.Button transparent onPress={() => Actions.pop()}>
                            <nb.Icon name='arrow-back' />
                        </nb.Button>
                    </nb.Left>
                    <nb.Body>
                        <nb.Title>Invite Friends</nb.Title>
                    </nb.Body>
                </nb.Header>
                <nb.Content>
                    <nb.View><nb.Text>Invitation Code: {this.props.invitation_code}</nb.Text></nb.View>

                </nb.Content>

            </nb.Container>
        );
    }
}


