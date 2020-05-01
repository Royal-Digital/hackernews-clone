import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Story = styled.article`
  font-size: 14px;
  padding: 0 16px;
  min-height: 40px;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  display: flex;
  align-items: center;
  .Story_title {
    width: 100%;
    position: relative;
    margin-bottom: 4px;
    &:first-child {
      margin-right: 4px;
    }
  }
`;
const Header = styled.div`
  width: 100%;
  position: relative;
  margin-bottom: 4px;
`;
const Title = styled.a`
  text-decoration: none;
  color: #000;
  &:first-child {
    margin-right: 4px;
  }
`;
const Link = styled.a`
  text-decoration: none;
  color: #828282;
  font-size: 13px;
  word-break: break-all;
`;

const NewsItem = ({ news }) => {
  return (
    <Story>
      <Header>
        <Title
          target="_blank"
          href={`https://news.ycombinator.com/item?id=${news.objectID}`}
        >
          {news.title}
        </Title>
        {news.url && (
          <Link target="_blank" href={news.url}>
            ({news.url})
          </Link>
        )}
      </Header>
    </Story>
  );
};

NewsItem.propTypes = {
  news: PropTypes.object.isRequired,
};

export default NewsItem;
