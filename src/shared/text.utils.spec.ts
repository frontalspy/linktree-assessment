import { expect } from "chai";
import { capitalise, removeSymbols } from "./text.utils";

describe("Test utils", () => {
  describe("on capitalise", () => {
    it("should return a lowercase string with the first character being capital", () => {
      const string = "linktree";
      expect(capitalise(string)).to.be.eq("Linktree");
    });
    it("should not transform a string that is already capitalised", () => {
      const string = "LINKTREE";
      expect(capitalise(string)).to.be.eq(string);
    });
  });
  describe("on removeSymbols", () => {
    it("should return a string with -_& symbols with spaces instead", () => {
      const string = "link-tre_e&";
      expect(removeSymbols(string)).to.be.eq("link tre e ");
    });
    it("should not transform a string that does not have -_& symbols", () => {
      const string = "LINK5R33$*#$@";
      expect(removeSymbols(string)).to.be.eq(string);
    });
  });
});
