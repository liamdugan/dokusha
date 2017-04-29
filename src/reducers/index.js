// Dokusha main reducers

import * as initialState from '../initialState.js';

const mainReducer = (state, action) => {
  switch (action.type) {
  case 'LOGIN': {
    return state;
  }

  default: {
    console.log("Hit the default");
    return state;
  }

  }
};

export { mainReducer }
