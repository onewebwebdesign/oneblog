import UserList from "../components/users/UsersList";

const Users = (props) => {
  const users = [
    {
      id: 1,
      name: "Sławomir",
      email: "onewebdesignpl@gmail.com",
      position: "administrator",
    },
  ];

  return (
    <div>
      <UserList users={users} />
    </div>
  );
};

export default Users;
