import React from "react";
import { UserPreferences } from "../../../user/user";
import { LinkItem } from "../item-link";
import { MusicLinkInterface } from "../links.types";
import { MusicLinkItem } from "./item-music-link";
import style from "./music-link.scss";
import play from "../../../../assets/icons/play.svg";

interface MusicLinkProps {
  link: MusicLinkInterface[];
  preferences: UserPreferences;
}

export const MusicLink: React.FC<MusicLinkProps> = ({ link, preferences }) => {
  const [open, isOpen] = React.useState(false);
  const [audio, setAudio] = React.useState<string | undefined>(undefined);

  return (
    <div>
      <style jsx>{style}</style>
      <LinkItem
        callback={() => isOpen(!open)}
        text={"Music"}
        preferences={preferences}
      />
      {open && (
        <div className="music-items">
          {audio && (
            <div className="playing">
              {/* @TODO prob use an iframe here? Or another API call to get song name artist name */}
              <div className="song-image"></div>
              <div className="song-play">
                <img src={play} alt="Play button" />
              </div>
              <div className="song-name">Song name - Artists name</div>
              <audio src={audio} />
            </div>
          )}
          {link.map((musicLink) => (
            <MusicLinkItem song={musicLink} callback={setAudio} />
          ))}
        </div>
      )}
    </div>
  );
};
