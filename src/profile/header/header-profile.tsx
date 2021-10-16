import React from "react";
import img from "../../../assets/profile-picture.png";
import style from "./header-profile.scss";

export const ProfileHeader = () => {
  // @TODO Hook into API
  const user = {
    username: "yourname",
  };
  return (
    <header>
      <style jsx>{style}</style>
      <div className="user-image">
        <figure>
          <img src={img} />
        </figure>
      </div>
      <div className="username">@{user.username}</div>
    </header>
  );
};
