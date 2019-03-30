
// Home Routes

import { createStackNavigator, createDrawerNavigator } from 'react-navigation';
import Home from '../containers/home';

export default createStackNavigator({
    home: {
        screen: Home,
        navigationOptions: ({ navigation }) => ({

        })
    },
})
