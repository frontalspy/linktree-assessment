import React from "react";
import { useGetUserLinks, useGetUserPrefernces } from "../shared/api.hooks";
import { Link } from "../shared/links/links";
import { ProfileHeader } from "./header/header-profile";

export const Profile = () => {
  const userLinks = useGetUserLinks();
  const preferences = useGetUserPrefernces();

  return (
    <section className="profile">
      <ProfileHeader />
      {userLinks?.map((link) => (
        <Link link={link} preferences={preferences} />
      ))}
    </section>
  );
};
