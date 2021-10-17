import { expect } from "chai";
import { Link } from "./links";
import { ShallowWrapper, shallow } from "enzyme";
import { createSandbox, SinonSandbox } from "sinon";
import { MusicLink } from "./music/music-link";
import { ShowsLink } from "./shows/shows-link";
import { ClassicLink } from "./classic/classic-link";
import { MockUserPreference } from "../../user/user.mock";

describe("Links", () => {
  let sandbox: SinonSandbox;
  let loadLinks: (props?: any) => ShallowWrapper<typeof Link>;

  beforeEach(() => {
    sandbox = createSandbox();
    loadLinks = (props?: any) => shallow(<Link {...props} />);
  });

  afterEach(() => {
    sandbox.restore();
  });

  describe("when loading", () => {
    describe("on rendering", () => {
      it("should return MusicLink when link type is music", () => {
        const loadLink = loadLinks({
          link: {
            linkType: "music",
          },
        });
        expect(loadLink.find(MusicLink).exists()).to.be.true;
      });
      it("should return ShowsLink when link type is shows", () => {
        const loadLink = loadLinks({
          link: {
            linkType: "shows",
          },
        });
        expect(loadLink.find(ShowsLink).exists()).to.be.true;
      });
      it("should return ClassicLink when link type is classic", () => {
        const loadLink = loadLinks({
          link: {
            linkType: "classic",
          },
        });
        expect(loadLink.find(ClassicLink).exists()).to.be.true;
      });
      it("should return ClassicLink when link type is anything else", () => {
        const loadLink = loadLinks({
          link: {
            linkType: "linktree",
          },
        });
        expect(loadLink.find(ClassicLink).exists()).to.be.true;
      });
    });
    describe("on preferences", () => {
      it("should pass on custom preferences to child component", () => {
        const loadLink = loadLinks({
          link: {
            linkType: "music",
          },
          preferences: MockUserPreference,
        });
        expect(loadLink.find(ClassicLink).props().preferences).to.be.deep.eq(
          MockUserPreference
        );
      });
      it("should use default preferences if not defined child component", () => {
        const loadLink = loadLinks({
          link: {
            linkType: "music",
          },
        });
        expect(loadLink.find(ClassicLink).props().preferences).to.be.deep.eq({
          backgroundColor: "green",
          color: "black",
        });
      });
    });
  });
});
