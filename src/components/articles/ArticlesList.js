import ArticleItem from "./ArticleItem";

const ArticlesList = (props) => {
  if (props.articles.length === 0) {
    return <p>No articles found.</p>;
  }

  return (
    <ul>
      {props.articles.map((article) => (
        <ArticleItem
          key={article.id}
          title={article.title}
          author_name={article.author_name}
          date={article.date}
          image={article.image}
        />
      ))}
    </ul>
  );
};

export default ArticlesList;
