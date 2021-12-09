import styled from "styled-components";

import ArticlesList from "../components/articles/ArticlesList";

const Articles = (props) => {
  const Articles = [
    {
      id: 1,
      title: "Some article",
    },
  ];

  return (
    <div>
      <p>Articles</p>
      <ArticlesList articles={Articles} />
    </div>
  );
};

export default Articles;
