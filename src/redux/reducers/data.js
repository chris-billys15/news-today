import { SET_CONTENT_DATA, REMOVE_CONTENT_DATA } from "../actionTypes";

const INITIAL_STATE = {
  content: null,
};

const data = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_CONTENT_DATA: {
      return {
        ...state,
        content: action.payload.data,
      };
    }
    case REMOVE_CONTENT_DATA: {
      return { ...state, content: null };
    }
    default:
      return state;
  }
};

export default data;
