import styles from "./UserListContainer.module.css";
import React from "react";
import { getAuth0Client } from "../../app/lib/auth0Sdk";

type UserListContainerProps = {};

export default async function UserListContainer(props: UserListContainerProps) {
  const auth0 = getAuth0Client();

  const users = await auth0.getUsers();

  console.log("users: ", users);

  return (
    <div className={styles.listContainer}>
      {users.map((user) => (
        <div key={user.user_id} className={styles.listRow}>
          <div>{user.name}</div>
          <div>{user.email}</div>
        </div>
      ))}
    </div>
  );
}
