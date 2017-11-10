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

export default class MembersList_Component extends Component {
  constructor(props) {
    super(props);
    this.state = {
      invitation_code: null,

    };
  }

  componentDidMount() {
    this.props.getMembersData(this.props.data);
    // console.log(this.props);
    console.log(this.props.membersData);
  }
  render() {
    // console.log(this.props.data);
    console.log(this.props.membersData);

    // var arr = [];
    // arr.push({ name: 'a', age: '20' });
    // arr.push({ name: 'b', age: '21' });
    // //  arr = this.props.myCircles;
    // console.log("Rendering in my Circle component");
    // setTimeout(() => {
    //   // existCircle.push(allCircles)
    //   console.log(this.props.myCircles)
    //   // array.push({id: 1, text: 'a'}, {id: 2, text: 'b'}, {id: 3, text: 'c'});
    // }, 1000);

    // this.props.myCircles.map((data)=>console.log(data)), "in my circle Component";
    // console.log(arr, "in my circle Component");
    // console.log(arr.length, "in my circle Component");
    var list = this.props.membersData.map((data, index) => {
      console.log('hello');
      return (
        <nb.ListItem key={index} last>
          {/* <nb.Thumbnail square size={80} /> */}
          <nb.Body>

            <nb.Text>Name: {`${data.fName}  ${data.lName}`}</nb.Text>
            <nb.Text>Email: {data.email}</nb.Text>

          </nb.Body>

          {/* <nb.Right> */}
          {/* <nb.Button transparent><nb.Text>View</nb.Text></nb.Button> */}
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
            <nb.Title>Members list</nb.Title>
          </nb.Body>
          <nb.Right>
            <nb.Button danger onPress={() => Actions.TrackMembers_Container({ data: this.props.membersData })}>
              <nb.Text>TRACK </nb.Text>
            </nb.Button>
          </nb.Right>
        </nb.Header>
        <nb.Content>
          <nb.List>
            <nb.ListItem>
              <nb.Thumbnail square size={80} source={{ uri: 'd:\OSAMA\PANACLOUD\React Native\FamilyTracking\components\img.jpg' }} />
              <nb.Body>
                <nb.Text note>Admin:</nb.Text>
                <nb.Text>{this.props.data.adminName}</nb.Text>

              </nb.Body>
            </nb.ListItem>
          </nb.List>
          <nb.List>

            {list}


          </nb.List>

        </nb.Content>

      </nb.Container>
    );
  }
}



