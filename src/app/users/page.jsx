import Users from "@/components/users";
import { Suspense } from "react";

const userPromise = async () => {
  const data = await fetch("http://localhost:5000/users");
  return data.json();

  // return await data.json();
};

const UsersPage = async () => {
  // const data = await fetch("http://localhost:5000/users");
  // const users = await data.json();

  return (
    <div>
      {/* <h2>Users data coming soon: {users.length} </h2> */}

      <Suspense fallback={<h2>Loading...</h2>}>
        <Users userPromise={userPromise} />
      </Suspense>
    </div>
  );
};

export default UsersPage;
