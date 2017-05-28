/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import React from 'react';
import {
  AppRegistry,
  View,
  DrawerLayoutAndroid
} from 'react-native';
import App from './index.js';
import Toolbar from './app/components/Toolbar';
import styles from './styles';

import { COLOR, ThemeProvider, Avatar, Drawer } from 'react-native-material-ui';

import { Provider } from 'react-redux';
import store from './store';

const uiTheme = {
  palette: {
    primaryColor: COLOR.green500
  },
  toolbar: {
    container: {
      height: 50,
      backgroundColor: 'green'
    }
  }
};

class Main extends React.Component {

  constructor (props) {
    super(props);
    this.openDrawer = this.openDrawer.bind(this);
    this.state = {openStatus: true};
  }

  openDrawer () {
    this.refs['DRAWER_REF'].openDrawer();
  }

  handleNavigation = () => {
    console.log('yesss');
  }

  render () {
    var navigationView = (
      <Drawer>
        <Drawer.Header >
          <Drawer.Header.Account
            avatar={<Avatar text={'A'} />}
            footer={{
              dense: true,
              centerElement: {
                primaryText: 'Akhil Chutiya'
              }
            }}
            />
        </Drawer.Header>
        <Drawer.Section
          divider
          items={[
            { icon: 'select-all', value: 'All', active: true },
            { icon: 'accessibility', value: 'Funny', onPress: this.handleNavigation },
            { icon: 'do-not-disturb-off', value: 'Dark humour', onPress: this.handleNavigation },
            { icon: 'data-usage', value: 'Nsfw', onPress: this.handleNavigation },
            { icon: 'date-range', value: 'Current Events', onPress: this.handleNavigation }
          ]}
          />
        <Drawer.Section
          title='Personal'
          items={[
            { icon: 'info', value: 'Info' },
            { icon: 'settings', value: 'Settings' }
          ]}
          />
      </Drawer>
    );
    return (
      <Provider store={store}>
        <ThemeProvider uiTheme={uiTheme}>
          <DrawerLayoutAndroid
            drawerWidth={300}
            drawerPosition={DrawerLayoutAndroid.positions.Left}
            ref={'DRAWER_REF'}
            renderNavigationView={() => navigationView}>
            <View style={styles.main}>
              <Toolbar callDrawer={this.openDrawer} />
              <App />
            </View>
          </DrawerLayoutAndroid>
        </ThemeProvider>
      </Provider>
    );
  }
}

AppRegistry.registerComponent('sarcsoc', () => Main);
