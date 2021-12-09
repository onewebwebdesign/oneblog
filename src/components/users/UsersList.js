import UserItem from "./UserItem";

const UserList = (props) => {
  if (props.users.length === 0) {
    return <p>There is no users</p>;
  }

  return (
    <ul>
      {props.users.map((user) => (
        <UserItem
          key={user.id}
          id={user.id}
          name={user.name}
          email={user.email}
          position={user.position}
        />
      ))}
    </ul>
  );
};

export default UserList;
