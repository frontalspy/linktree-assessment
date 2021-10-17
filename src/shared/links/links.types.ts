export interface ClassicLinkInterface {
  link: string;
  linkText: string;
}

export interface ShowsLinkInterface {
  timeDate: string; // dd-mm-yyyy
  location: string;
  soldOut: boolean;
  link: string;
}
export interface MusicLinkInterface {
  platform: string;
  platformLink: string;
  music: string;
}

type ClassicLinkType = {
  linkType: LinkTypes.CLASSIC;
  link: ClassicLinkInterface;
};
type ShowsLinkType = {
  linkType: LinkTypes.SHOWS;
  link: ShowsLinkInterface[];
};
type MusicLinkType = {
  linkType: LinkTypes.MUSIC;
  link: MusicLinkInterface[];
};

export type LinksTypes = ClassicLinkType | ShowsLinkType | MusicLinkType;

export enum LinkTypes {
  CLASSIC = "classic",
  MUSIC = "music",
  SHOWS = "shows",
}
