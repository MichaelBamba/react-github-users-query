import React, { Component } from "react";

const UserCard = props => {
  const { user } = props;
  return (
    <div>
      <img src={user.avatar_url} alt={user} />
      <a href={user.url}> Visit </a>
    </div>
  );
};

export default UserCard;
