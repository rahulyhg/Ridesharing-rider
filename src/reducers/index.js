
// Start Redux Data managenets

import { combineReducers } from 'redux';
import * as asyncInitialState from 'redux-async-initial-state';

const reducers = {

};

export default asyncInitialState.outerReducer(
    combineReducers({
        ...reducers,
        asyncInitialState: asyncInitialState.innerReducer
    })
);
