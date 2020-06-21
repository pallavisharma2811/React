import * as ActionTypes from './ActionTypes';
import { DISHES } from '../shared/dishes';
import { actionTypes } from 'react-redux-form';

//Action object addComment
export const addComment = (dishId, rating, author, comment) => ({
    type: ActionTypes.ADD_COMMENT,
    payload: {// def whatever data needs to be carried in the action to the reducer
        dishId: dishId,
        rating: rating,
        author: author,
        comment: comment
    }
});

// setting up four action creators which will impact dishes file

// returning a function/ thunk
export const fetchDishes = () => (dispatch) =>{

    dispatch(dishesLoading(true));
    setTimeout(() => {
        dispatch(addDishes(DISHES));
    }, 2000);// supply a function with a delay of 2k ms
}

// returning object
export const dishesLoading = () => ({
    type: ActionTypes.DISHES_LOADING

});

export const dishesFailed = (errmess) => ({
    type: ActionTypes.DISHES_FAILED,
    payload: errmess
});

export const addDishes = (dishes) => ({
    type: ActionTypes.ADD_DISHES,
    payload: dishes
});

