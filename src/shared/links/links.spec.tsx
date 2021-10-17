import { expect } from "chai";
import { shallow, ShallowWrapper } from "enzyme";
import React from "react";
import { createSandbox, SinonSandbox } from "sinon";
import { MockUserPreference } from "../../user/user.mock";
import { ClassicLink } from "./classic/classic-link";
import { Links } from "./links";
import { LinkTypes } from "./links.types";
import { MusicLink } from "./music/music-link";
import { ShowsLink } from "./shows/shows-link";

describe("Links", () => {
  let sandbox: SinonSandbox;
  let loadLinks: (props?: any) => ShallowWrapper<typeof Links>;

  beforeEach(() => {
    sandbox = createSandbox();
    loadLinks = (props?: any) => shallow(<Links {...props} />);
  });

  afterEach(() => {
    sandbox.restore();
  });

  describe("when loading", () => {
    describe("on rendering", () => {
      it("should return MusicLink when link type is music", () => {
        const loadLink = loadLinks({
          link: {
            linkType: LinkTypes.MUSIC,
          },
        });
        expect(loadLink.find(MusicLink).exists()).to.be.true;
      });
      it("should return ShowsLink when link type is shows", () => {
        const loadLink = loadLinks({
          link: {
            linkType: LinkTypes.SHOWS,
          },
        });
        expect(loadLink.find(ShowsLink).exists()).to.be.true;
      });
      it("should return ClassicLink when link type is classic", () => {
        const loadLink = loadLinks({
          link: {
            linkType: LinkTypes.CLASSIC,
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
            linkType: LinkTypes.CLASSIC,
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
            linkType: LinkTypes.CLASSIC,
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
