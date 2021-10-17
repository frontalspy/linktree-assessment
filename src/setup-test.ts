/// <reference path="./types/react-env.d.ts" />
/// <reference path="./types/react-html.d.ts" />

import chai from "chai";
import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import sinonChai from "sinon-chai";

configure({ adapter: new Adapter() });
chai.use(sinonChai);

for (const ext of [".scss", ".svg", ".jpg", ".png", ".css"]) {
  require.extensions[ext] = () => {};
}
