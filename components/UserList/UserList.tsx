import { UserData } from "auth0";
import React from "react";

type UserListProps = {
  users: UserData[];
};

function UserList(props: UserListProps) {
  return (
    <div>
      {props.users.map((user) => (
        <div key={user.user_id}>{user.name}</div>
      ))}
    </div>
  );
}

export default UserList;
