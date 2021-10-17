import { expect } from "chai";
import { shallow, ShallowWrapper } from "enzyme";
import React from "react";
import { createSandbox, SinonSandbox, SinonStub } from "sinon";
import * as ApiHooks from "../shared/api.hooks";
import { Links } from "../shared/links/links";
import { MockLinks } from "../shared/links/links.mock";
import { MockUserPreference } from "../user/user.mock";
import { Profile } from "./profile";

describe("Shows Links", () => {
  let sandbox: SinonSandbox;
  let linksStub: SinonStub;
  let preferencesStub: SinonStub;
  let loadProfile: () => ShallowWrapper<typeof Profile>;

  beforeEach(() => {
    sandbox = createSandbox();
    linksStub = sandbox.stub(ApiHooks, "useGetUserLinks");
    preferencesStub = sandbox.stub(ApiHooks, "useGetUserPrefernces");
    loadProfile = () => shallow(<Profile />);
  });

  afterEach(() => {
    sandbox.restore();
  });

  describe("when loading", () => {
    it("should render with Link component when userlinks are loaded", () => {
      linksStub.returns(MockLinks);
      const profile = loadProfile();
      expect(profile.find(Links).exists()).to.be.true;
    });
    it("should render with Link component with userpreferences when userlinks and preferences are loaded", () => {
      linksStub.returns(MockLinks);
      preferencesStub.returns(MockUserPreference);
      const profile = loadProfile();
      expect(profile.find(Links).exists()).to.be.true;
      expect(profile.find(Links).at(0).props().preferences).to.be.deep.eq(
        MockUserPreference
      );
    });
    it("should not render Link component if userlinks are undefined", () => {
      linksStub.returns(undefined);
      const profile = loadProfile();
      expect(profile.find(Links).exists()).to.be.false;
    });
  });
});
