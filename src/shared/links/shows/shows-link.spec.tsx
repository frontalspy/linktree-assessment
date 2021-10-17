import { expect } from "chai";
import { shallow, ShallowWrapper } from "enzyme";
import React from "react";
import { createSandbox, SinonSandbox } from "sinon";
import { LinkItem } from "../item-link";
import { MockShowsLink } from "../links.mock";
import { ShowLinkItem } from "./item-shows-link";
import { ShowsLink } from "./shows-link";

describe("Shows Links", () => {
  let sandbox: SinonSandbox;
  let loadLinks: (props?: any) => ShallowWrapper<typeof ShowsLink>;

  beforeEach(() => {
    sandbox = createSandbox();
    loadLinks = (props?: any) => shallow(<ShowsLink {...props} />);
  });

  afterEach(() => {
    sandbox.restore();
  });

  describe("when loading", () => {
    it("should render LinkItem only", () => {
      const links = loadLinks({
        link: MockShowsLink,
      });
      expect(links.find(LinkItem).exists()).to.be.true;
      expect(links.find(ShowLinkItem).exists()).to.be.false;
    });
  });
  describe("when interacting", () => {
    it("should render 4 ShowLinkItems when LinkItem callback is triggered", () => {
      const links = loadLinks({
        link: MockShowsLink,
      });
      links.find(LinkItem).props().callback?.call(this);
      expect(links.find(ShowLinkItem).exists()).to.be.true;
      expect(links.find(ShowLinkItem).length).to.be.eq(4);
    });
  });
});
