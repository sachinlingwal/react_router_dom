import React from "react";
import { useParams } from "react-router-dom";

const UserDetails = () => {
  let params = useParams();
  let userId = params.userId;
  console.log(userId);
  return (
    <>
      <h1>UserDetails {userId}</h1>
      <h1>{userId}</h1>
    </>
  );
};

export default UserDetails;
