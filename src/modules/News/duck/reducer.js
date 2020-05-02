import { uniq } from "lodash";
import {
  SEARCH_NEWS_SUCCESS,
  SEARCH_NEWS_REQUEST,
  SEARCH_NEWS_FAILURE,
} from "./types";

const initialState = {
  byId: {},
  allIds: [],
  searching: false,
};
const contactReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEARCH_NEWS_REQUEST:
      return {
        ...state,
        searching: true,
      };
    case SEARCH_NEWS_SUCCESS:
      return {
        ...state,
        byId: {
          ...(action.payload &&
            action.payload.entities &&
            action.payload.entities.news),
        },
        searching: false,
        allIds: uniq([
          ...(action.payload && action.payload.result),
          ...state.allIds,
        ]),
      };
    case SEARCH_NEWS_FAILURE:
      return {
        ...state,
        searching: false,
      };
    default:
      return state;
  }
};

export default contactReducer;
