import React, { useContext } from "react";
import { ProfileContext } from "./profileContext";

const Profile = () => {
  const { profile } = useContext(ProfileContext);
  return (
    <div className="article">
        <h1>Username : {profile[0].username}</h1>
        <p>Token : {profile[0].token}</p>
  </div>
  );
};

export default Profile;