import React from "react";
import arrow from "../../../../assets/icons/arrow.svg";
import { musicIcons } from "../../icons.consts";
import { capitalise, removeSymbols } from "../../text.utils";
import { MusicLinkInterface } from "../links.types";
import style from "./item-music-link.scss";

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
          {capitalise(removeSymbols(platform))} <img src={arrow} />
        </button>
      </div>
    </div>
  );
};

const renderIcon = (platform: string) => {
  switch (platform) {
    case "spotify":
      return musicIcons.SPOTIFY;
    case "apple-music":
      return musicIcons.APPLEMUSIC;
    case "youtube-music":
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
