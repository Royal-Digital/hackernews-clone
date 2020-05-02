import React, { useEffect } from "react";
import PropTypes from "prop-types";
import NewsList from "./components/NewsList";
import Header from "./components/Header";
import styled from "styled-components";

export const Container = styled.div`
  min-height: 100vh;
  background-color: #f6f6ef;
`;

export const SearchComponent = ({
  searchNews,
  searchingNews,
  searchResults,
}) => {
  useEffect(() => {
    searchNews();
  }, [searchNews]);

  return (
    <Container>
      <Header searchNews={searchNews} />
      <div id="newsList" style={{ paddingTop: 60 }}>
        <NewsList searching={searchingNews} data={searchResults} />
      </div>
    </Container>
  );
};

SearchComponent.propTypes = {
  searchNews: PropTypes.func.isRequired,
  searchingNews: PropTypes.bool.isRequired,
  searchResults: PropTypes.array.isRequired,
};

export default SearchComponent;
