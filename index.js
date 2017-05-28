'use strict';

import { StackNavigator } from 'react-navigation';

import Home from './app/routes/Home';
import CommentModal from './app/components/Comment/index.js';

const App = StackNavigator({
  Home: { screen: Home },
  CommentModal: { screen: CommentModal }
},
{headerMode: 'none'});

export default App;
