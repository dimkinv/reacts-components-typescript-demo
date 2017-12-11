import * as React from "react";
import { render } from "enzyme";
        
import Label from "./Label";
        
describe("Label", () => {
    it("renders correctly ", () => {
        const instance = render(<Label text="I'm Label" />);
        expect(instance).toMatchSnapshot();
    });
});
