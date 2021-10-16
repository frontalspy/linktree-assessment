import React from "react";
import { UserPreferences } from "../../user/user";
import { Links, LinkTypes } from "./links.types";
import { ClassicLink } from "./classic/classic-link";
import { MusicLink } from "./music/music-link";

interface LinksProps {
  link: Links;
  preferences?: UserPreferences;
  callback?: () => void;
}
export const Link: React.FC<LinksProps> = ({
  link,
  preferences = {
    backgroundColor: "green",
    color: "black",
  },
}) => {
  switch (link.linkType) {
    case LinkTypes.MUSIC:
      return <MusicLink link={link.link} preferences={preferences} />;
    case LinkTypes.SHOWS:
      return <></>;
    default:
      return <ClassicLink link={link.link} preferences={preferences} />;
  }
};
