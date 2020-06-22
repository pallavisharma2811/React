import {createStore, combineReducers, applyMiddleware} from 'redux';
import { createForms } from 'react-redux-form';
import { Dishes } from './dishes';
import { Comments } from './comments';
import { Promotions } from './promotions';
import { Leaders } from './leaders';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { InitialFeedback } from './forms';

export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            dishes: Dishes,
            comments: Comments,
            promotions: Promotions,
            leaders: Leaders,
            ...createForms({ // enables us to add in the necessary reducer functions and also the state information, form state into our store. 
                feedback: InitialFeedback // initialFeedback is supplied to reset form to its initial state after submitting the form. 
            })
        }),
        applyMiddleware(thunk, logger) // became available within our application
    );

    return store;
}