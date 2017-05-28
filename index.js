'use strict';

import { StackNavigator } from 'react-navigation';

import Home from './app/routes/Home';

const App = StackNavigator({
  Home: { screen: Home }
},
{headerMode: 'none'});

export default App;
