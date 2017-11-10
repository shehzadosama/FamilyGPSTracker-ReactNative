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

export default class CreateCircle_Component extends Component {
  constructor(props) {
    super(props);

    this.state = {

      circleName: null,

    };

  }
  componentDidMount() {
    // console.log(this.props.currentUser);
    this.props.getCurrentUser();
  }

  createCircle() {

    let circleName = this.state.circleName;
   
    if (circleName === null) {
        alert("All fields required");
    }
    else {
        this.props.createCircle({
          circleName: circleName,
           uid: this.props.currentUser.userId,
           admin: this.props.currentUser.fName,


        });


    }



  }
  render() {

    console.log("Rendering Create Circle component");
    console.log(this.props.currentUser,"create circle Component");
    
    // console.log(this.props.loc, "current location Component");

    return (
      <nb.Container>
        <nb.Header>
          <nb.Left>
            <nb.Button transparent onPress={() => Actions.pop()}>
              <nb.Icon name='arrow-back' />
            </nb.Button>
          </nb.Left>
          <nb.Body>
            <nb.Title>Create Circle</nb.Title>
          </nb.Body>
        </nb.Header>
        <nb.Content>
          <nb.Item rounded>
            <nb.Input placeholder='Enter your circle name here' value={this.state.circleName} onChange={ev => this.setState({ circleName: ev.nativeEvent.text })} />
          </nb.Item>
          <nb.Button success onPress={this.createCircle.bind(this)}>
            <nb.Text>Create</nb.Text>
          </nb.Button>

        </nb.Content>

      </nb.Container>
    );
  }
}



const styles = StyleSheet.create({
  container: {
    // flex: 3, 
    // flexDirection: 'row',
    position: 'absolute',
    // padding: 20,
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    // justifyContent: 'center',
    // alignItems: 'center',
  },
  map: {
    // position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    flex: 1,
    width: '100%',
    height: Dimensions.get('window').height
  }
});