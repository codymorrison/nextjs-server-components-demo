import { getAuth0Client } from "./lib/auth0Sdk";

import UserList from "../components/UserList";

export default async function Home() {
  const auth0 = getAuth0Client();

  const users = await auth0.getUsers();

  console.log("users: ", users);

  return (
    <main>
      <UserList users={users} />
    </main>
  );
}
