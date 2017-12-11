import * as React from "react";
import { render } from "enzyme";
        
import MyHeader from "./MyHeader";
        
describe("MyHeader", () => {
    it("renders correctly ", () => {
        const instance = render(<MyHeader />);
        expect(instance).toMatchSnapshot();
    });
});
