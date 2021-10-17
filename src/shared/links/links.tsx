import React from "react";
import { UserPreferences } from "../../user/user";
import { LinksTypes, LinkTypes } from "./links.types";
import { ClassicLink } from "./classic/classic-link";
import { MusicLink } from "./music/music-link";
import { ShowsLink } from "./shows/shows-link";

interface LinksProps {
  link: LinksTypes;
  preferences?: UserPreferences;
}
export const Links: React.FC<LinksProps> = ({
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
      return <ShowsLink link={link.link} preferences={preferences} />;
    default:
      return <ClassicLink link={link.link} preferences={preferences} />;
  }
};
