import { createSelector } from "reselect";

const getNewsState = (state) => state.news;

export const getNewsListSelector = createSelector([getNewsState], (news) => {
  return news.allIds.map((id) => {
    let newPatientObj = { ...news.byId[id] };
    return newPatientObj;
  });
});
