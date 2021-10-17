import React from "react";
import { expect } from "chai";
import { createSandbox, SinonSandbox, SinonStub } from "sinon";
import { useGetUserLinks, useGetUserPrefernces } from "./api.hooks";
import { MockUserPreference } from "../user/user.mock";

//@TODO need to mock useEffect
describe("API Hooks", () => {
  let sandbox: SinonSandbox;
  let stateStub: SinonStub;
  beforeEach(() => {
    sandbox = createSandbox();
    stateStub = sandbox.stub();
  });

  afterEach(() => {
    sandbox.restore();
  });

  describe("on useGetUserPrefernces", () => {
    //@TODO tests for when mockpreferences is not called
    it("should set state to MockUserPreferences when preferences is found", () => {
      sandbox.stub(React, "useState").returns([undefined, stateStub]);
      useGetUserPrefernces();
      expect(stateStub).to.be.calledWith(MockUserPreference);
    });
  });
  describe("on useGetUserLinks", () => {
    //@TODO tests for when useGetUserLinks is not called
    it("should set state to MockUserLinks when preferences is found", () => {
      sandbox.stub(React, "useState").returns([undefined, stateStub]);
      useGetUserLinks();
      expect(stateStub).to.be.calledWith(MockUserPreference);
    });
  });
});
