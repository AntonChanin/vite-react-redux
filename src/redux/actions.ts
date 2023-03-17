import { Actions } from './types';

export const incrementLikes = () => {
  return {
    type: Actions.INCREMENT,
  };
};


export const decrementLikes = () => {
    return {
      type: Actions.DECREMENT,
    };
};