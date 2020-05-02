import React from "react";
import styled from "styled-components";
import SearchIcon from "../../../images/SearchIcon.svg";
import PropTypes from "prop-types";
import { device } from "../../../helpers/contants";

export const ProductSearchInputWrapper = styled.div`
  padding: 2px 16px;
  box-shadow: 0 4px 8px 0 rgba(56, 107, 152, 0.03);
  align-items: center;
  width: 100%;
  height: 36px;
  border: 1px solid #e3e6e7;
  display: flex;
  background-color: #fff;

  &:focus-within {
    border: 1px solid #fdc300;
  }

  @media ${device.tablet} {
    margin-right: 10%;
  }
`;

export const InputWrapper = styled.div`
  flex: 1;
  color: #6d7278;
  font-size: 13px;
  font-family: Sofia Pro;
  color: rgba(0, 0, 0, 0.87);
  cursor: text;
  display: inline-flex;
  font-size: 1rem;
  font-family: Sofia Pro;
  line-height: 1.1875em;
  align-items: center;
`;

export const Input = styled.input`
  outline: none;
  border: none;
  width: 100%;
  color: currentColor;
  margin: 0;
  padding: 6px 0 7px;
  display: block;
  min-width: 0;
  box-sizing: content-box;
  background: none;
  text-overflow: ellipsis;
  &:-webkit-autofill,
  &:-webkit-autofill:hover,
  &:-webkit-autofill:focus {
    -webkit-box-shadow: none;
  }
  font: 400 16px system-ui;
`;

const SearchInputImage = styled.img`
  padding-right: 1rem;
`;

function SearchInput({ handleChange, value, ...props }) {
  return (
    <>
      <ProductSearchInputWrapper>
        <SearchInputImage src={SearchIcon} alt="Search" />
        <InputWrapper>
          <Input
            type="search"
            {...props}
            value={value}
            onChange={handleChange}
            onAbort={handleChange}
          />
        </InputWrapper>
      </ProductSearchInputWrapper>
    </>
  );
}

SearchInput.propTypes = {
  handleChange: PropTypes.func.isRequired,
  value: PropTypes.string,
};

export default SearchInput;
