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

export default class JoinCircle_Component extends Component {
  constructor(props) {
    super(props);
    this.state = {
      invitation_code: null,
    };
  }

  componentDidMount() {
    // console.log(this.props.currentUser);
    this.props.getCurrentUser();
  }

  joinCircle() {

    let invitation_code = this.state.invitation_code;
    console.log(invitation_code)
    console.log(this.state.invitation_code)
    if (invitation_code === null) {
      alert("Field required");
    }
    else {
      this.props.joinCircle({
        invitation_code: invitation_code,
        uid: this.props.currentUser.userId,
        //  admin: this.props.currentUser.fName,


      });


    }



  }
  render() {

    console.log("Rendering Join Circle component");
    console.log(this.props.currentUser, "Join circle Component");

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
            <nb.Title>Join Circle</nb.Title>
          </nb.Body>
        </nb.Header>
        <nb.Content>
          <nb.Item rounded>
            <nb.Input placeholder='Enter invitation code' value={this.state.invitation_code} onChange={ev => this.setState({ invitation_code: ev.nativeEvent.text })} />
          </nb.Item>
          <nb.Button success onPress={this.joinCircle.bind(this)}>
            <nb.Text>Join</nb.Text>
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