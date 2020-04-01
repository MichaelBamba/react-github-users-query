import React, { Component } from "react";

const RepoCard = props => {
  const { user } = props;
  console.log(user.repos_url);
  return (
    <p>
      <a href={user.repos_url}> Visit </a>
    </p>
  );
};

export default RepoCard;
