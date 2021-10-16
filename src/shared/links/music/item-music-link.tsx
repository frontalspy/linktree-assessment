import React from "react";
import { musicIcons } from "../../icons.consts";
import { capitalise } from "../../text.utils";
import { MusicLinkInterface } from "../links.types";
import style from "./item-music-link.scss";

import arrow from "../../../../assets/icons/arrow.svg";

interface MusicItemProps {
  song: MusicLinkInterface;
  callback: (mp3: string) => void;
}

export const MusicLinkItem: React.FC<MusicItemProps> = ({ song, callback }) => {
  const { platform, platformLink, music } = song;

  const setAudio = () => {
    callback(music);
  };

  return (
    <div className="grid">
      <style jsx>{style}</style>
      <div className={`icon ${platform}`}>
        <a href={platformLink} target="_blank" rel="noopener nofollow">
          {renderIcon(platform)}
        </a>
      </div>
      <div className="platform">
        <button onClick={setAudio}>
          {capitalise(platform)} <img src={arrow} />
        </button>
      </div>
    </div>
  );
};

const renderIcon = (platform: string) => {
  switch (platform) {
    case "spotify":
      return musicIcons.SPOTIFY;
    case "applemusic":
      return musicIcons.APPLEMUSIC;
    case "youtubemusic":
      return musicIcons.YOUTUBEMUSIC;
    case "soundcloud":
      return musicIcons.SOUNDCLOUD;
    case "deezer":
      return musicIcons.DEEZER;
    case "tidal":
      return musicIcons;
    default:
      return <img></img>;
  }
};
