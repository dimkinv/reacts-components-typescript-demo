import * as React from "react";
import { render } from "enzyme";

import Button from "./Button";

describe("Button", () => {
    it("renders correctly ", () => {
      const button = render(<Button title="My Title" />);
      expect(button).toMatchSnapshot();
    });
});
