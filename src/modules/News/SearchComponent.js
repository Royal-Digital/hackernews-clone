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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Container>
      <Header />
      <NewsList searching={searchingNews} data={searchResults} />
    </Container>
  );
};

SearchComponent.propTypes = {
  searchNews: PropTypes.func.isRequired,
  searchingNews: PropTypes.bool.isRequired,
  searchResults: PropTypes.array.isRequired,
};

export default SearchComponent;
