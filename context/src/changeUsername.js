import React, { useState, useContext } from "react";
import "./ChangeName.css";
import { ProfileContext } from "./profileContext";

const ChangeUsername = () => {
  const { dispatch } = useContext(ProfileContext);
  const [Profile, setProfile] = useState();

  const handleUsernameData = e => {
    setProfile({
      ...Profile,
      [e.target.id]: e.target.value
    });
  };

  const addNewUsername = e => {
    e.preventDefault();
    dispatch({ type: "CHANGE_USERNAME", Profile });
  };

  return (
    <form onSubmit={addNewUsername} className="change-name">
      <input
        type="text"
        id="username"
        placeholder="Username"
        onChange={handleUsernameData}
      />
    
      <button>Change Username</button>
    </form>
  );
};
export default ChangeUsername;