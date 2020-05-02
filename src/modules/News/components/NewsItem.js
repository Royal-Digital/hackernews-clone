import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import parse from "html-react-parser";
import { formatDistance } from "date-fns";

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
const TitleLink = styled.a`
  text-decoration: none;
  color: #828282;
  font-size: 13px;
  word-break: break-all;
`;
const Links = styled.div`
  font-size: 10.6667px;
  color: #696969;
  & a {
    color: #696969;
  }
`;
const Link = styled.a`
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;
const Comment = styled.section`
  padding: 8px 0;
  color: #000;
  font-size: 12px;
  width: 100%;
  line-height: normal;
  font-style: normal;
  -webkit-font-feature-settings: normal;
  font-feature-settings: normal;
  font-variant-caps: normal;
  font-variant-east-asian: normal;
  -webkit-font-variant-ligatures: normal;
  font-variant-ligatures: normal;
  font-variant-numeric: normal;
  font-weight: 400;
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
          <TitleLink target="_blank" href={news.url}>
            ({news.url})
          </TitleLink>
        )}
      </Header>
      <Links>
        {news.points && (
          <span>
            <Link
              target="_blank"
              className="link"
              href={`https://news.ycombinator.com/item?id=${news.objectID}`}
            >
              {news.points} points
            </Link>
            , |{" "}
          </span>
        )}
        {news.author && (
          <span>
            <Link
              target="_blank"
              className="link"
              href={`https://news.ycombinator.com/user?id=${news.author}`}
            >
              {news.author}
            </Link>{" "}
            |{" "}
          </span>
        )}
        {news.createdAt && (
          <span>
            <Link
              target="_blank"
              className="link"
              href={`https://news.ycombinator.com/item?id=${news.objectID}`}
            >
              {formatDistance(new Date(news.createdAt), new Date(), {
                addSuffix: true,
              })}
            </Link>{" "}
            |{" "}
          </span>
        )}
        <span>
          <Link
            target="_blank"
            className="link"
            href={`https://news.ycombinator.com/item?id=${news.objectID}`}
          >
            {news.numComments} comments
          </Link>
        </span>
      </Links>
      <Comment>{parse(news.storyText || "")}</Comment>
    </Story>
  );
};

NewsItem.propTypes = {
  news: PropTypes.object.isRequired,
};

export default NewsItem;
