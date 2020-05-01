import { normalize, schema } from "normalizr";

const news = new schema.Entity(
  "news",
  {},
  { idAttribute: (news) => news.objectID }
);
const newsList = new schema.Array(news);

export const normalizeNewsList = function (data) {
  return normalize(data, newsList);
};
