import { createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';

import user from './reducers/userReducer';
import customer from './reducers/customerReducer';
import custBet from './reducers/custBetReducer';
import raceInfo from './reducers/raceInfoReducer';
import employee from './reducers/employeeReducer';
import horsesInfo from './reducers/horseReducer';

const initialState = {};

const middleware = [thunk];

const reducers = combineReducers({
    user: user,
    customer: customer,
    custBet: custBet,
    raceInfo: raceInfo,
    employee: employee,
    horsesInfo: horsesInfo
})

const store = createStore(reducers, initialState, applyMiddleware(...middleware));

export default store;
