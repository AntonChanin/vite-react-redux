import { Actions } from "./types";

const initialState = {
    likes: 0,
};


export const likesReducer = (state = initialState, action) => {
    console.log('likesReducer > ', action);

    switch (action.type) {
        case Actions.INCREMENT: 
            return {
                ...state,
                likes: state.likes + 1,
            };
        case Actions.DECREMENT: 
            return {
                ...state,
                likes: state.likes - 1,
            };
        default: return state;
    };
};