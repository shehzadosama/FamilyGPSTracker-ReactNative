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

export default class MyCircles_Component extends Component {
  constructor(props) {
    super(props);
    this.state = {
      invitation_code: null,

    };
  }

  componentDidMount() {

    this.props.getMyCircles();
  }
  render() {



    console.log("Rendering in my Circle component");
    console.log(this.props.myCircles)
    let data = this.props.myCircles;
    let invitation_code = this.props.myCircles.invitation_code;
    
    var list = this.props.myCircles.map((data, index) => {
      return (
        <nb.ListItem key={index} last>
          {/* <nb.Thumbnail square size={80} /> */}
          <nb.Left>
            <FontAwesomeIcons name="group" />
            <nb.Text>{data.circleName}</nb.Text>
          </nb.Left>
        {/* <nb.Right> */}
          <nb.Button small onPress={() => Actions.MembersList_Container({ data })}><nb.Text>View</nb.Text></nb.Button>
          <nb.Button small success onPress={() => Actions.Invitation({ invitation_code: data.invitation_code })}><nb.Text>Invite</nb.Text></nb.Button>
          {/* </nb.Right> */}
        </nb.ListItem >
      )
    }

    )

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
            <nb.Title>My Circles</nb.Title>
          </nb.Body>
        </nb.Header>
        <nb.Content>
          <nb.List>

            {list}

          </nb.List>

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