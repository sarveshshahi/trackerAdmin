import { configureStore, combineReducers } from '@reduxjs/toolkit';
import authReducer from './store/authSlice';

const initialState = {
  sidebarShow: true,
  theme: 'light',
};

const changeState = (state = initialState, { type, ...rest }) => {
  switch (type) {
    case 'set':
      return { ...state, ...rest };
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  ui: changeState,
  auth: authReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;