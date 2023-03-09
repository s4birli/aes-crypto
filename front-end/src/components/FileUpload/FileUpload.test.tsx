import { render } from "@testing-library/react";

import FileUpload from "./FileUpload";

describe("FileUpload", () => {
  it("should render", () => {
    const { asFragment } = render(<FileUpload />);

    expect(asFragment()).toMatchSnapshot();
  });
});
