const ArticleItem = (props) => {
  return (
    <li>
      <div>
        <img src={props.image} alt={props.title} />
      </div>
      <div>
        <h2>{props.title}</h2>
        <h3>{props.author_name}</h3>
        <h3>{props.date}</h3>
      </div>
    </li>
  );
};

export default ArticleItem;
