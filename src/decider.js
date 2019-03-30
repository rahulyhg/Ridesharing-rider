import React from 'react';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';
import { Provider, connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { AppContext } from './context';
import { Main } from './navigation/navigators';

class Decider extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        const { user, isAuthenticated } = this.props;
        
        return (
          <AppContext.Provider value={user}>
              <Main />
          </AppContext.Provider>
        )
    }
}

const mapStateToProps = state => {
    return {
        isAuthenticated: true,
        user: 'test user'
    }
}

const mapDispatchToProps = dispatch => {
    return bindActionCreators({

    }, dispatch)
};
export default connect(mapStateToProps, mapDispatchToProps)(Decider);
