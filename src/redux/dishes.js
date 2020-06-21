import * as ActionTypes from './ActionTypes';

export const Dishes= (state={
        isLoading: true,// true because dishes is empty array and once obtained the dish info can set it to false, we need to load the dishes info from somewhere before the details of the dishes become available within state.
        errMess: null,
        dishes: []
    }, action)=>{

    //Switch between the three different action types received
    //Responsibility of this dishes reducer to interpret what these actions mean

    switch(action.type){
        case ActionTypes.ADD_DISHES:
            return {...state, isLoading: false, errMess: null, dishes: action.payload}; // state remains unmutated

        case ActionTypes.DISHES_LOADING:
            return {...state, isLoading: true, errMess: null, dishes: [] }; // in case of page reload

        case ActionTypes.DISHES_FAILED:
            return {...state, isLoading: false, errMess: action.payload, dishes: [] };

        default:
            return state;
    }
};