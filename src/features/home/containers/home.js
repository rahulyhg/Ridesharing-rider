import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Component from '../components/home';
import {  } from '../reducers';

const mapStateToProps = state => {
    return {

      }
}

const mapDispatchToProps = dispatch => {
    return bindActionCreators({
    
    }, dispatch)
};

export default connect(mapStateToProps, mapDispatchToProps)(Component);
