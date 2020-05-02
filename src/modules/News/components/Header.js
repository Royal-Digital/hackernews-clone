import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Logo from "../../../images/logo-hn-search.png";
import SearchInput from "./SearchInput";
import { device } from "../../../helpers/contants";
import PropTypes from "prop-types";

const Wrapper = styled.header`
  height: 48px;
  display: flex;
  align-items: center;
  background: #ff742b;
  padding: 4px 16px;
  position: relative;
  justify-content: space-between;
  box-sizing: boder-box;
  margin-bottom: 10px;
`;
const LogoLink = styled.a`
  @media ${device.tablet} {
    flex: 1 0 180px;
    max-width: 180px;
  }
  display: flex;
  align-items: center;
  text-decoration: none;
`;

const LogoLabel = styled.div`
  color: #000;
  font-size: 18px;
  line-height: 1;
  display: none;
  @media ${device.tablet} {
    display: block;
  }
`;
const LogoImage = styled.img`
  width: 48px;
  margin-right: 8px;
`;
export const Header = ({ searchNews }) => {
  const [query, setQuery] = useState("");
  useEffect(() => {
    searchNews(query);
  }, [query, searchNews]);

  return (
    <Wrapper>
      <LogoLink href="/">
        <LogoImage src={Logo} alt="Hacker News"></LogoImage>
        <LogoLabel>
          Search
          <br />
          Hacker News
        </LogoLabel>
      </LogoLink>
      <SearchInput
        value={query}
        handleChange={(e) => setQuery(e.target.value)}
        placeholder="Search stories by title, url or author"
      />
    </Wrapper>
  );
};
Header.propTypes = {
  searchNews: PropTypes.func.isRequired,
};
export default Header;
