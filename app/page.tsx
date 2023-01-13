import { getAuth0Client } from "./lib/auth0Sdk";

import UserListContainer from "../components/UserListContainer";

export default async function Home() {
  return (
    <main>
      <UserListContainer />
    </main>
  );
}
