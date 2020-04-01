import React from "react";
import UserCard from "./UserCard";

const UserCardList = props => {
  const { users } = props;
  console.log(props);
  return (
    <div className="userList">
      {users.map((user, id) => (
        <UserCard user="user" key={id} />
      ))}
    </div>
  );
};

export default UserCardList;
