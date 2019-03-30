import React from 'react';
import { StyleSheet, Text, View, ImageBackground,AsyncStorage } from 'react-native';
import * as Expo from 'expo';
import { KeepAwake, registerRootComponent, Constants,Location, Permissions } from 'expo';
import { Provider, connect } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react'
import { store, persistor } from './store';
import Decider from './decider';


class App extends React.Component {

  state = {
      isReady: false,
      permissionLocation: ''
  }

  async componentWillMount() {
   await this.setState({isReady: true})
 }

 async _loadAssetsAsync() {

   const imageAssets = cacheImages([

    ]);

    await Promise.all([...imageAssets]);
 }

  render() {
      if (!this.state.isReady) {
            return (
                <Expo.AppLoading
                  onFinish={() => this.setState({ isReady: true })}
                  onError={console.warn}
                />
            );
        }
      return (
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
              <Decider />
            </PersistGate>
        </Provider>
      );
  }
}

if (__DEV__) {
  KeepAwake.activate();
}

registerRootComponent(App);
