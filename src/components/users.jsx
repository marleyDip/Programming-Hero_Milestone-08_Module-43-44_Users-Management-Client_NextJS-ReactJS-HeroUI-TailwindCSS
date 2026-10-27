import { use } from "react";

const Users = ({ userPromise }) => {
  const users = use(userPromise());

  return (
    <div>
      <h2>Users in the component: {users.length}</h2>

      {users.map((user) => (
        <li key={user.id}>
          {user.name}: {user.email}
        </li>
      ))}
    </div>
  );
};

export default Users;
