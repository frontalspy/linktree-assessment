import React from "react";
import { useGetUserLinks, useGetUserPrefernces } from "../shared/api.hooks";
import { Links } from "../shared/links/links";
import { ProfileHeader } from "./header/header-profile";

export const Profile = () => {
  const userLinks = useGetUserLinks();
  const preferences = useGetUserPrefernces();

  return (
    <section className="profile">
      <ProfileHeader />
      {userLinks?.map((link, index) => (
        <Links link={link} preferences={preferences} key={index} />
      ))}
    </section>
  );
};
