import * as React from "react";
import { render } from "enzyme";
        
import Card from "./Card";
        
describe("Card", () => {
    it("renders correctly ", () => {
        const instance = render(<Card />);
        expect(instance).toMatchSnapshot();
    });
});
