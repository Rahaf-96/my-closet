import shopData from './shop.data';
import ShopActionTypes from './shop.types';

const INITIAL_STATE = {
  collections: shopData,
};

const shopReducer = (state = INITIAL_STATE, action) => {
  switch (action.payload) {
    case ShopActionTypes.UPDATE_COLLECTIONS:
      return {
        ...state,
        collections: action.payload,
      };
    default:
      return state;
  }
};

export default shopReducer;
