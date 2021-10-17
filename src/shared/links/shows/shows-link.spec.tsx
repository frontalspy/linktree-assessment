import { shallow, ShallowWrapper } from "enzyme";
import { createSandbox, SinonSandbox } from "sinon";
import { ShowsLink } from "./shows-link";
import { MockMusicLink, MockShowsLink } from "../links.mock";
import { expect } from "chai";
import { LinkItem } from "../item-link";
import { ShowLinkItem } from "./item-shows-link";

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
        links: MockShowsLink,
      });
      expect(links.find(LinkItem).exists()).to.be.true;
      expect(links.find(ShowLinkItem).exists()).to.be.false;
    });
  });
  describe("when interacting", () => {
    it("should render 4 ShowLinkItems when LinkItem callback is triggered", () => {
      const links = loadLinks({
        links: MockShowsLink,
      });
      links.find(LinkItem).props().callback?.call(this);
      expect(links.find(ShowLinkItem).exists()).to.be.true;
      expect(links.find(ShowLinkItem).length).to.be.eq(4);
    });
  });
});
