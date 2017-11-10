import React, { Component } from 'react';
import { View, Image, StyleSheet, Dimensions, } from 'react-native';
// import { Container, Content, Header, Body, Text, Button, Right, Left, Title, Drawer, Fab, Footer, FooterTab, Spinner } from 'native-base';
import Icon from 'react-native-vector-icons/dist/MaterialIcons';
import * as nb from 'native-base';
import MapView from 'react-native-maps';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { Actions } from 'react-native-router-flux';
import Sidebar from './Sidebar';

export default class Dashboard_Component extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
    };
  }
  componentDidMount() {
    this.props.getCurrentUser();
    this.props.getCurrentLocation();
    console.log(this.props.currentUser);
    // console.log(this.props.currentUser.fName);
  }

  signOut() {
    this.props.signOut();
  }

  updateLoc(location) {
    this.props.updateLoc(location);
  }

  currentLoc() {
    this.props.getCurrentLocation();
  }
  // setUserLoc() {
  //   this.props.setUserLoc();

  // }
  // onRegionChange(region) {
  //   console.log(region);
  //   this.setState({ region });
  // }
  closeDrawer = () => {
    this.drawer._root.close()
  };
  openDrawer = () => {
    this.drawer._root.open()
  };

  render() {
    // closeDrawer = () => {
    //   this.drawer._root.close()
    // };
    // openDrawer = () => {
    //   this.drawer._root.open()
    // };
    console.log("Rendering Dashboard");
    console.log(this.props.loc, "current location Component");
    console.log(this.props.currentUser, "current location Component");
    return (
      <nb.Drawer
        ref={(ref) => { this.drawer = ref; }}
        content={<Sidebar navigator={this.navigator} closeDrawer={this.closeDrawer.bind(this)} />}
        onClose={() => this.closeDrawer()} >


        <nb.Container>

          <nb.Header>
            <nb.Left>
              <nb.Button transparent onPress={this.openDrawer.bind(this)}>
                <Icon name='menu' size={25} color="white" />
              </nb.Button>
            </nb.Left>
            <nb.Body>
    {!this.props.currentUser ?<View><nb.Spinner color='blue' large /></View>   :<nb.Title>HI {this.props.currentUser.fName}</nb.Title>  }
            </nb.Body>
            <nb.Right>
              <nb.Button onPress={this.signOut.bind(this)}>
                <nb.Text>Logout</nb.Text>
              </nb.Button>
            </nb.Right>
          </nb.Header>
          {!this.props.loc ? <View><nb.Spinner color='blue' large /></View> :
            <nb.Content>


              <View style={{
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                flex: 1
              }}>



                <MapView
                  //style={styles.map}
                  style={styles.map}
                  showsCompass={true}
                  loadingEnabled={true}
                  showsBuildings={true}
                  provider='google'
                  showsUserLocation={true}
                  showsMyLocationButton={true}
                  region={this.props.loc}
                >
                  <MapView.Marker
                    //coordinate={ this.state.region}
                    coordinate={this.props.loc}
                  //center={{ latitude: 24.814211,
                  //longitude: 67.050390,}}
                  //radius={50} strokeColor= {'#3478e5'}
                  //title={marker.title}
                  //description={marker.description}
                  />
                </MapView>
                <nb.Fab
                  active={this.state.active}
                  direction="up"
                  containerStyle={{}}
                  style={{ backgroundColor: '#237ece' }}
                  position="topRight"
                  onPress={this.currentLoc.bind(this)}
                >
                  <Icon name="gps-fixed" size={30} color="#900" />
                </nb.Fab>
              </View>
            </nb.Content>}

          {/* <nb.Footer>
            <nb.FooterTab>
              <nb.Button active onPress={() => Actions.CreateCircle_Container()}>
                <nb.Text>Create Circle</nb.Text>
              </nb.Button>
              <nb.Button active onPress={() => Actions.MyCircles_Container()}>
                <nb.Text>My Circles</nb.Text>
              </nb.Button>
              <nb.Button active onPress={() => Actions.JoinCircle_Container()} >
                <nb.Text>Join Circles</nb.Text>
              </nb.Button>

            </nb.FooterTab>
          </nb.Footer> */}

        </nb.Container>
      </nb.Drawer>
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