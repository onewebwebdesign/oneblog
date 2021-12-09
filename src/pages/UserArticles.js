// import styled from "styled-components";
import { useParams } from "react-router-dom";
import ArticlesList from "../components/articles/ArticlesList";

const UserArticles = (props) => {
  const articles = [
    {
      id: 1,
      title: "Some article",
      author: "1",
      author_name: "Sławomir",
    },
    {
      id: 2,
      title: "Another article",
      author: "2",
      author_name: "Spike",
    },
  ];

  const userId = useParams().userId;
  const userArticles = articles.filter((article) => article.author === userId);

  console.log(userArticles);

  return (
    <div>
      <p>User articles</p>
      <ArticlesList articles={userArticles} />
    </div>
  );
};

export default UserArticles;
