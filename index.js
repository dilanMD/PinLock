import React from "react";
import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './app.json';
import { createStore } from 'redux';
import reducer from "./reducers";
import { Provider } from 'react-redux';

const store = createStore(reducer);

const wrapper = () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
}

AppRegistry.registerComponent(appName, () => wrapper);
