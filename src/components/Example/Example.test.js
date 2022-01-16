import { configure, shallow } from "enzyme";
import Example from "./Example";

import Adapter from "@wojtekmaj/enzyme-adapter-react-17";

configure({adapter: new Adapter()});

describe("<Example/>", () => {
  test("renders correctly", () => {
      const wrapper = shallow(<Example/>);
      expect(wrapper).toBeDefined();
  });
  describe("test textfield", ()=>{
    test("textfield", ()=>{});
  })
});
