
import * as React from 'react';
import {Image} from 'react-native';
import { BottomNavigation, Text } from 'react-native-paper';
import homeScreen from './Screen/homeScreen';
import settingScreen from './Screen/settingScreen';
import loginScreen from './Screen/loginScreen';
import menuScreen from './Screen/menuScreen';
import contactScreen from './Screen/contactScreen';



export default class Router extends React.Component {
  state = {
    index: 0,
    routes: [
      { key: 'Home', title: 'Home', icon: props => <Image source={require('./assets/home.png')}
      style={{ width: 20, height: 20, tintColor: 'red' }}  /> },
      { key: 'Settings', title: 'Settings', icon: 'shopping-cart' },
      { key: 'Login', title: 'Login', icon: 'history' },
      { key: 'Menu', title: 'Menu', icon: props => <Image source={require('./assets/menu.png')}
      style={{ width: 20, height: 20, tintColor: 'red' }}  /> }, 
      { key: 'Contact', title: 'Contact', icon: props => <Image source={require('./assets/contact.png')}
      style={{ width: 20, height: 20, tintColor: 'red' }}  /> }, 
    ],
  };

  _handleIndexChange = index => this.setState({ index });

  _renderScene = BottomNavigation.SceneMap({
    Home: homeScreen,
    Settings: settingScreen,
    Login: loginScreen,
    Menu:menuScreen,
  });

  render() {
    return (
      <BottomNavigation style={{ color :'green' }}  
        navigationState={this.state}
        onIndexChange={this._handleIndexChange}
        renderScene={this._renderScene}
      />
    );
  }
}