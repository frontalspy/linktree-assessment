import React from "react";
import { UserPreferences } from "../../../user/user";
import { ClassicLinkInterface } from "../links.types";
import { LinkItem } from "../item-link";

interface ClassicLinksProps {
  link: ClassicLinkInterface;
  preferences: UserPreferences;
}
export const ClassicLink: React.FC<ClassicLinksProps> = ({
  link,
  preferences,
}) => {
  return (
    <LinkItem to={link.link} text={link.linkText} preferences={preferences} />
  );
};
