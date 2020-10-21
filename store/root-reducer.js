import { combineReducers } from 'redux';

// import healthInsuranceReducer from './public/health-insurance/reducer';
import displayContentReducer from './data/display/reducer';

const rootReducer = combineReducers({
    displayContentReducer
});

export default rootReducer;