import {
  ClassicLinkInterface,
  Links,
  LinkTypes,
  MusicLinkInterface,
  ShowsLinkInterface,
} from "./links.types";

export const MockClassicLink: ClassicLinkInterface[] = [
  {
    link: "https://linktr.ee/",
    linkText: "48H",
  },
  {
    link: "https://linktr.ee/",
    linkText: "48H",
  },
  {
    link: "https://linktr.ee/",
    linkText: "48H",
  },
  {
    link: "https://linktr.ee/",
    linkText: "48H",
  },
];
export const MockShowsLink: ShowsLinkInterface[] = [
  {
    soldOut: false,
    timeDate: "01-04-2019",
    location: "The forum, Melbourne",
    link: "https://premier.ticketek.com.au/",
  },
  {
    soldOut: true, // caps out at 10 people
    timeDate: "02-04-2021",
    location: "Venue name, Canberra",
    link: "https://premier.ticketek.com.au/",
  },
  {
    soldOut: false,
    timeDate: "03-04-2021",
    location: "Venue name, Sydney",
    link: "https://premier.ticketek.com.au/",
  },
  {
    soldOut: false,
    timeDate: "04-04-2021",
    location: "Venue name, Brisbane",
    link: "https://premier.ticketek.com.au/",
  },
];
export const MockMusicLink: MusicLinkInterface[] = [
  {
    platform: "spotify",
    platformLink: "https://www.spotify.com",
    music: "https://www.spotify.com/sample.mp4",
  },
  {
    platform: "Apple Music",
    platformLink: "https://www.apple.com/music",
    music: "https://www.apple.com/music/sample.mp4",
  },
  {
    platform: "Soundcloud",
    platformLink: "https://www.soundcloud.com",
    music: "https://www.soundcloud.com/sample.mp4",
  },
  {
    platform: "Youtube Music",
    platformLink: "https://www.youtube.com/music",
    music: "https://www.youtube.com/music.mp4",
  },
];

export const MockLinks: Links[] = [
  {
    linkType: LinkTypes.MUSIC,
    link: MockMusicLink,
  },
  {
    linkType: LinkTypes.SHOWS,
    link: MockShowsLink,
  },
  {
    linkType: LinkTypes.CLASSIC,
    link: MockClassicLink[0],
  },
  {
    linkType: LinkTypes.CLASSIC,
    link: MockClassicLink[1],
  },
  {
    linkType: LinkTypes.CLASSIC,
    link: MockClassicLink[2],
  },
];
