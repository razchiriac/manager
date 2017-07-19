import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import Router from './Router';

class App extends Component {
  componentWillMount() {
    const config = {
      apiKey: 'AIzaSyB6ON9JPhkhBtBTxTRKvzG2P8hSqbvYm1k',
      authDomain: 'manager-ca05e.firebaseapp.com',
      databaseURL: 'https://manager-ca05e.firebaseio.com',
      projectId: 'manager-ca05e',
      storageBucket: '',
      messagingSenderId: '562807145764'
    };
    firebase.initializeApp(config);
  }
  render() {
    const store= createStore(reducers, {}, applyMiddleware(ReduxThunk));
    
    return (
      <Provider store={store}>
        <Router />
      </Provider>
    );
  }
};

export default App;
