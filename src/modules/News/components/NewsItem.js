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
const Link = styled.a`
  text-decoration: none;
  color: #828282;
  font-size: 13px;
  word-break: break-all;
`;
const Links = styled.div`
  color: #696969;
  font-size: 10.6667px;
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
  console.log(news);

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
      <Links>
        {news.points && <span>{news.points} points, | </span>}
        {news.author && <span>{news.author} | </span>}
        {news.createdAt && (
          <span>
            {formatDistance(new Date(news.createdAt), new Date(), {
              addSuffix: true,
            })}{" "}
            |{" "}
          </span>
        )}
        {news.numComments && <span>{news.numComments} comments</span>}
      </Links>
      <Comment>{parse(news.storyText || "")}</Comment>
    </Story>
  );
};

NewsItem.propTypes = {
  news: PropTypes.object.isRequired,
};

export default NewsItem;
