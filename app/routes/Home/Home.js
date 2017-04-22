import React, { Component } from 'react';
import {
  View,
  DrawerLayoutAndroid
} from 'react-native';
import { COLOR, ThemeProvider, Avatar, Drawer } from 'react-native-material-ui';
import Toolbar from '../../components/Toolbar';
import HomeContainer from './HomeContainer';
import styles from './styles';

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

export default class HomeScreen extends Component {

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
      <ThemeProvider uiTheme={uiTheme}>
        <DrawerLayoutAndroid
          drawerWidth={300}
          drawerPosition={DrawerLayoutAndroid.positions.Left}
          ref={'DRAWER_REF'}
          renderNavigationView={() => navigationView}>
          <View style={styles.main}>
            <Toolbar callDrawer={this.openDrawer} />
            <HomeContainer />
          </View>
        </DrawerLayoutAndroid>
      </ThemeProvider>
    );
  }
}
