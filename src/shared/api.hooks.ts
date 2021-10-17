import React from "react";
import { UserPreferences } from "../user/user";
import { MockUserPreference } from "../user/user.mock";
import { LinksTypes } from "./links/links.types";
import { MockLinks } from "./links/links.mock";

// If we have redux, we could use this as a useSelector
export const useGetUserPrefernces = () => {
  const [userPreferences, setUserPreferences] = React.useState<
    UserPreferences | undefined
  >(undefined);

  React.useEffect(() => {
    // @TODO Pretend we're doing our axios call here :)
    setUserPreferences(MockUserPreference);
  }, []);

  return userPreferences;
};
// If we have redux, we could use this as a useSelector and store the data into the redux state
export const useGetUserLinks = () => {
  const [userLinks, setUserLinks] = React.useState<LinksTypes[] | undefined>(
    undefined
  );

  React.useEffect(() => {
    // @TODO Pretend we're doing our axios call here :)
    setUserLinks(MockLinks);
  }, []);

  return userLinks;
};
