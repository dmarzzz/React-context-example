import React, { createContext, useReducer } from "react";
import { profileReducer } from "./profileReducer";
export const ProfileContext = createContext();

const ProfileProvider = ({ children }) => {
  const [profile, dispatch] = useReducer(profileReducer, 
    [{ username : "test" , token : "stuff_in_a_token"}] 
);

  return (
    <ProfileContext.Provider value={{ profile, dispatch }}>
      {children}
    </ProfileContext.Provider>
  );
};
export default ProfileProvider;