import React from "react";
import { useNavigate } from "react-router-dom";
import { authService, dbService } from "fbase";

const Profile = () => {
  const navigate = useNavigate();
  const onLogOutClick = () => {
    authService.signOut();
    navigate("/");
  };
  return (
    <>
      <h1>프로필 페이지</h1>
      <button onClick={onLogOutClick}>Log out</button>
    </>
  );
};

export default Profile;
