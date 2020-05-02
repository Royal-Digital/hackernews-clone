import React from "react";
import styled from "styled-components";
import Logo from "../../../images/logo-hn-search.png";

const Wrapper = styled.header`
  height: 56px;
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
  flex: 1 0 180px;
  max-width: 180px;
  display: flex;
  align-items: center;
`;

const LogoLabel = styled.div`
  color: #000;
  font-size: 18px;
  line-height: 1;
`;
const LogoImage = styled.img`
  width: 48px;
  margin-right: 8px;
`;
export const Header = () => {
  return (
    <Wrapper>
      <LogoLink>
        <LogoImage src={Logo} alt="Hacker News"></LogoImage>
        <LogoLabel>
          Search
          <br />
          Hacker News
        </LogoLabel>
      </LogoLink>
    </Wrapper>
  );
};

export default Header;
