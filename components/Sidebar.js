import React, { Component } from 'react';
import { View, Image, StyleSheet, Dimensions, } from 'react-native';
// import { Container, Content, Header, Body, Text, Button, Right, Left, Icon,List,Switch, ListItem ,Title, Drawer, Fab, Footer, FooterTab, Spinner } from 'native-base';
// import Icon from 'react-native-vector-icons/dist/MaterialIcons';
import * as nativebase from 'native-base';
import FontAwesomeIcons from 'react-native-vector-icons/dist/FontAwesome';
import SimpleLineIcons from 'react-native-vector-icons/dist/SimpleLineIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/dist/MaterialCommunityIcons';
import MapView from 'react-native-maps';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { Actions } from 'react-native-router-flux';


export default class Sidebar extends Component {
  constructor(props) {
    super(props);

    this.state = {

      error: null,

    };

  }

  // closeDrawer = () => {
  //     this.drawer._root.close()
  // };
  // openDrawer = () => {
  //     this.drawer._root.open()
  // };

  render() {
    // closeDrawer = () => {
    //   this.drawer._root.close()
    // };
    // openDrawer = () => {
    //   this.drawer._root.open()
    // };
    console.log("Rendering Sidebar");
    // console.log(this.props.loc);

    return (
      <nativebase.Container>
        <nativebase.Header>
          <nativebase.Left>
            <nativebase.Button transparent onPress={this.props.closeDrawer}>
              <nativebase.Icon name='arrow-back' />
            </nativebase.Button>
          </nativebase.Left>

        </nativebase.Header>
        <nativebase.Content>
          <nativebase.List>
            <nativebase.ListItem icon last onPress={() => Actions.CreateCircle_Container()}>
              <nativebase.Left>
                <nativebase.Icon name="add" />
              </nativebase.Left>
              <nativebase.Body>
                <nativebase.Text>Create Circle</nativebase.Text>
              </nativebase.Body>
              {/* <Right>
                    <Switch value={false} />
                  </Right> */}
            </nativebase.ListItem>
            <nativebase.ListItem icon last onPress={() =>Actions.MyCircles_Container()} >
              <nativebase.Left>
                <FontAwesomeIcons name="group" />
              </nativebase.Left>
              <nativebase.Body>
                <nativebase.Text>My Circles</nativebase.Text>
              </nativebase.Body>
              {/* <Right>
                    <Text>Groups</Text>
                    <Icon name="arrow-forward" />
                  </Right> */}
            </nativebase.ListItem>
            <nativebase.ListItem icon last onPress={() => Actions.JoinCircle_Container()}>
              <nativebase.Left>
                <MaterialCommunityIcons name="google-circles-group" />
              </nativebase.Left>
              <nativebase.Body>
                <nativebase.Text>Join a Circle</nativebase.Text>
              </nativebase.Body>
              {/* <Right>
                    <Text>On</Text>
                    <Icon name="arrow-forward" />
                  </Right> */}
            </nativebase.ListItem>
               {/*<nativebase.ListItem icon last>
              <nativebase.Left>
                <SimpleLineIcons name="logout" />
              </nativebase.Left>
              <nativebase.Body>
              <nativebase.Text>Logout</nativebase.Text>
              </nativebase.Body>
              <Right>
                    <Text>On</Text>
                    <Icon name="arrow-forward" />
                  </Right> 
            </nativebase.ListItem> */}
          </nativebase.List>
        </nativebase.Content>
      </nativebase.Container>
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