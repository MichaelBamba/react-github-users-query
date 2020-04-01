import React, { Component } from "react";
import "./usercard.css";

const UserCard = props => {
  const { user } = props;
  console.log(user.avatar_url);
  return (
    <p>
      <img src={user.avatar_url} alt={user} />
      <a href={user.html_url}> Visit </a>
    </p>
  );
};

export default UserCard;
