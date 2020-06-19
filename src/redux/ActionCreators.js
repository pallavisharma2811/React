import * as ActionTypes from './ActionTypes';

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
