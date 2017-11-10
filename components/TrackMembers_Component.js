import React, { Component } from 'react';
import { View, Image, StyleSheet, Dimensions, } from 'react-native';
// import { Container, Content, Header, Body, Text, Button, Right, Left, Title, Drawer, Fab, Footer, FooterTab, Spinner } from 'native-base';
import Icon from 'react-native-vector-icons/dist/MaterialIcons';
import * as nb from 'native-base';
import MapView from 'react-native-maps';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { Actions } from 'react-native-router-flux';
import Sidebar from './Sidebar';

export default class TrackMembers_Component extends Component {
    constructor(props) {
        super(props);
        this.state = {
            membersLocation: [],
            initialPosition: {
                latitude: 37.78825,
                longitude: -122.4324,
                latitudeDelta: 0.015,
                longitudeDelta: 0.0121,
            },
            initialMarker: {
                latitude: 0,
                longitude: 0
            },
        }
    }
    componentWillMount() {
        console.log(this.props.data);
        var mydata = this.props.data;
        //   console.log(mydata[0].latitude)
        var membersLocation = [];
        for (var i = 0; i < mydata.length; i++) {
            var membersPostion = {
                latitude: mydata[i].latitude,
                longitude: mydata[i].longitude,
                fName: mydata[i].fName,
                latitudeDelta: 0.015,
                longitudeDelta: 0.0121,
            }
            membersLocation.push(membersPostion);
        }
        console.log(membersLocation);
        this.setState({ membersLocation: membersLocation })
    }

    // signOut() {
    //     this.props.signOut();
    // }

    // updateLoc(location) {
    //     this.props.updateLoc(location);
    // }

    // currentLoc() {
    //     this.props.getCurrentLocation();
    // }


    render() {
        // closeDrawer = () => {
        //   this.drawer._root.close()
        // };
        // openDrawer = () => {
        //   this.drawer._root.open()
        // };
        console.log("Rendering Dashboard");
        console.log(this.props.data, "Track members Component");

        return (
            //   <nb.Drawer
            //     ref={(ref) => { this.drawer = ref; }}
            //     content={<Sidebar navigator={this.navigator} closeDrawer={this.closeDrawer.bind(this)} />}
            //     onClose={() => this.closeDrawer()} >


            <nb.Container>

                <nb.Header>
                    <nb.Left>
                        <nb.Button transparent onPress={() => Actions.pop()}>
                            <nb.Icon name='arrow-back' />
                        </nb.Button>
                    </nb.Left>
                    <nb.Body>
                        <nb.Title>Group tracking</nb.Title>
                    </nb.Body>

                </nb.Header>

                <nb.Content>


                    <nb.View style={{
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
                            region={this.state.membersLocation[0]}
  >
                            {this.state.membersLocation.map((marker,ind) => (
                                <MapView.Marker key={ind}
                                    coordinate={marker}
                                    title={marker.fName}
                                />
                            ))}
                            {/* <MapView.Marker
                                //coordinate={ this.state.region}
                                coordinate={this.props.loc}
                            //center={{ latitude: 24.814211,
                            //longitude: 67.050390,}}
                            //radius={50} strokeColor= {'#3478e5'}
                            //title={marker.title}
                            //description={marker.description}
                            />*/}
                        </MapView> 
                        {/* <nb.Fab
                            active={this.state.active}
                            direction="up"
                            containerStyle={{}}
                            style={{ backgroundColor: '#237ece' }}
                            position="topRight"
                            onPress={this.currentLoc.bind(this)}
                        >
                            <Icon name="gps-fixed" size={30} color="#900" />
                        </nb.Fab> */}
                    </nb.View>
                </nb.Content>

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
            //   </nb.Drawer>
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