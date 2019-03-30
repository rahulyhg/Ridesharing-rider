import { createSwitchNavigator, createBottomTabNavigator, createAppContainer, createStackNavigator, DrawerNavigator } from 'react-navigation';
import React from 'react';
import { connect } from 'react-redux';

import Home from '../../features/home/components';

export var Auth = createSwitchNavigator({
    home: Home
});

export var AllTab =  createAppContainer(Auth);

const mapStateToProps = (state, count) => {
  return {
      seen: true
    }
}

export var Main = connect(mapStateToProps)(AllTab);
