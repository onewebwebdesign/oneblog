import { Link } from "react-router-dom";

const UserItem = (props) => {
  return (
    <li>
      <Link to={`/${props.id}/articles`}>
        <h2>{props.name}</h2>
        <h2>{props.email}</h2>
        <h2>{props.position}</h2>
      </Link>
    </li>
  );
};

export default UserItem;
