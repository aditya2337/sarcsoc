import { combineReducers } from 'redux';
import homeReducer from './app/routes/Home/reducer';

const reducer = combineReducers({
  home: homeReducer
});

export default reducer;
