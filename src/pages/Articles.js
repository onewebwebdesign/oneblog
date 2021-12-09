// import styled from "styled-components";
import { Link } from "react-router-dom";

import ArticlesList from "../components/articles/ArticlesList";

const Articles = (props) => {
  const Articles = [
    {
      id: 1,
      title: "Some article",
      author: 1,
      author_name: "Sławomir",
    },
    {
      id: 2,
      title: "Another article",
      author: 2,
      author_name: "Spike",
    },
  ];

  return (
    <div>
      <h2>List of all your articles</h2>
      <Link to="/articles/new">Dodaj nowy artykuł</Link>
      <ArticlesList articles={Articles} />
    </div>
  );
};

export default Articles;
