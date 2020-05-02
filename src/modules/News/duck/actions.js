import {
  SEARCH_NEWS_SUCCESS,
  SEARCH_NEWS_REQUEST,
  SEARCH_NEWS_FAILURE,
} from "./types";
import { API_URL } from "../../../helpers/contants";
import { normalizeNewsList } from "./normalizer";
import axios from "axios";
import { camelizeKeys } from "humps";

export const searchNews = (query, page = 0) => {
  return async (dispatch) => {
    dispatch({ type: SEARCH_NEWS_REQUEST });

    try {
      const { data } = await axios.get(
        `${API_URL}/search?page=${page}&hitsPerPage=40${
          query ? `&query=${query}` : ""
        }`
      );

      dispatch({
        type: SEARCH_NEWS_SUCCESS,
        payload: normalizeNewsList(data && camelizeKeys(data.hits)),
      });
    } catch (error) {
      dispatch({
        type: SEARCH_NEWS_FAILURE,
        payload: error,
      });
    }
  };
};
