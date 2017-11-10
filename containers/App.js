import React, { Component } from 'react';
import {
  AppRegistry,
} from 'react-native';
import Login_Container from '../containers/Login_Container';
import SignUp_Container from '../containers/SignUp_Container';
import Dashboard_Container from '../containers/Dashboard_Container';
import CreateCircle_Container from '../containers/CreateCircle_Container';
import JoinCircle_Container from '../containers/JoinCircle_Container';
import MyCircles_Container from '../containers/MyCircles_Container';
import MembersList_Container from '../containers/MembersList_Container';
import TrackMembers_Container from '../containers/TrackMembers_Container';
import Invitation from '../components/Invitation';


import { Actions } from 'react-native-router-flux';
import { Router, Scene } from 'react-native-router-flux';


const App = () => {
  return (
    <Router>
      <Scene key="root">
        <Scene key="Login_Container"
          component={Login_Container}
          title="Login_Container"
          hideNavBar={true}
          initial
        />
        <Scene
          key="SignUp_Container"
          component={SignUp_Container}
          title="SignUp_Container"
          hideNavBar={true}
        // initial
        />
        <Scene
          key="Dashboard_Container"
          component={Dashboard_Container}
          title="Dashboard_Container"
          hideNavBar={true}
        // initial
        />
        <Scene
          key="CreateCircle_Container"
          component={CreateCircle_Container}
          title="CreateCircle_Container"
          hideNavBar={true}
        // initial
        />
        <Scene
          key="JoinCircle_Container"
          component={JoinCircle_Container}
          title="JoinCircle_Container"
          hideNavBar={true}
        // initial
        />
        <Scene
          key="MyCircles_Container"
          component={MyCircles_Container}
          title="MyCircles_Container"
          hideNavBar={true}
        // initial
        />
        <Scene
          key="MembersList_Container"
          component={MembersList_Container}
          title="MembersList_Container"
          hideNavBar={true}
        // initial
        />
        <Scene
          key="Invitation"
          component={Invitation}
          title="Invitation"
          hideNavBar={true}
        // initial
        />
        <Scene
          key="TrackMembers_Container"
          component={TrackMembers_Container}
          title="TrackMembers_Container"
          hideNavBar={true}
        // initial
        />



      </Scene>

    </Router>
  );
}



export default App;