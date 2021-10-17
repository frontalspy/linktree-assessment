import { expect } from "chai";
import { shallow, ShallowWrapper } from "enzyme";
import React from "react";
import { createSandbox, SinonSandbox } from "sinon";
import { LinkItem } from "../item-link";
import { MockMusicLink } from "../links.mock";
import { MusicLinkItem } from "./item-music-link";
import { MusicLink } from "./music-link";

describe("Music Links", () => {
  let sandbox: SinonSandbox;
  let loadLinks: (props?: any) => ShallowWrapper<typeof MusicLink>;

  beforeEach(() => {
    sandbox = createSandbox();
    loadLinks = (props?: any) => shallow(<MusicLink {...props} />);
  });

  afterEach(() => {
    sandbox.restore();
  });

  describe("when loading", () => {
    it("should render LinkItem only", () => {
      const links = loadLinks({
        link: MockMusicLink,
      });
      expect(links.find(LinkItem).exists()).to.be.true;
      expect(links.find(MusicLinkItem).exists()).to.be.false;
    });
  });
  describe("when interacting", () => {
    it("should render 4 MusicLinkItems when LinkItem callback is triggered", () => {
      const links = loadLinks({
        link: MockMusicLink,
      });
      links.find(LinkItem).props().callback?.call(this);
      expect(links.find(MusicLinkItem).exists()).to.be.true;
      expect(links.find(MusicLinkItem).length).to.be.eq(4);
    });
    it("should show audio player when MusicLinkItem callback is triggered", () => {
      const links = loadLinks({
        link: MockMusicLink,
      });
      links.find(LinkItem).props().callback?.call(this);
      links
        .find(MusicLinkItem)
        .at(0)
        .props()
        .callback?.call(this, {} as any);
      expect(links.find(".playing").exists()).to.be.true;
    });
  });
});
