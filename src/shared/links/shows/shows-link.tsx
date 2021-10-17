import React from "react";
import { UserPreferences } from "../../../user/user";
import { LinkItem } from "../item-link";
import { ShowsLinkInterface } from "../links.types";
import style from "./shows-link.scss";

import { ShowLinkItem } from "./item-shows-link";
import songkick from "../../../../assets/icons/songkick.svg";

interface MusicLinkProps {
  link: ShowsLinkInterface[];
  preferences: UserPreferences;
}

export const ShowsLink: React.FC<MusicLinkProps> = ({ link, preferences }) => {
  const [open, isOpen] = React.useState(false);

  return (
    <div>
      <style jsx>{style}</style>
      <LinkItem
        callback={() => isOpen(!open)}
        text={"Shows"}
        preferences={preferences}
      />
      {open && (
        <div className="show-items">
          {link.map((linkItem) => (
            <ShowLinkItem link={linkItem} key={linkItem.timeDate} />
          ))}
          <div className="songkick">
            <img src={songkick} alt={"Songkick logo"} />
          </div>
        </div>
      )}
    </div>
  );
};
