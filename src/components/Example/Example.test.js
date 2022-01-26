import { configure, shallow } from "enzyme";
import Example from "./Example";
import sinon from "sinon";

import Adapter from "@wojtekmaj/enzyme-adapter-react-17";

configure({adapter: new Adapter()});

describe("<Example/>", () => {
    test("renders correctly", () => {
        const wrapper = shallow(<Example/>);
        expect(wrapper).toBeDefined();
    });
    describe("test textfield", ()=>{
        const onChangeMock=jest.fn();
        const event={
            preventDefault();
        }
    })
});
