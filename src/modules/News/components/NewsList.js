import React, { Fragment } from "react";
import PropTypes from "prop-types";
import NewsItem from "./NewsItem";

const NewsList = ({ data, searching }) => {
  return (
    <Fragment>
      {searching && (
        <div style={{ textAlign: "center", marginBottom: 10 }}>loading...</div>
      )}
      {data &&
        data
          .filter((newsItem) => newsItem.title)
          .map((newsItem) => (
            <NewsItem key={newsItem.objectID} news={newsItem} />
          ))}
    </Fragment>
  );
};
NewsList.propTypes = {
  searching: PropTypes.bool.isRequired,
  data: PropTypes.array.isRequired,
};

export default NewsList;
