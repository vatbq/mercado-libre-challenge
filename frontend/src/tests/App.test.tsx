import { render } from "@testing-library/react";
import App from "../App";

it("renders ProgramCard unchanged", () => {
  const { container } = render(<App />);

  expect(container).toMatchSnapshot();
});
