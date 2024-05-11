/**
 * @jest-environment jsdom
 */
import { render } from "@testing-library/react";
import Home from "@/pages/home/index";

const { container } = render(<Home />);

it("renders homepage unchanged", () => {
  expect(container).toMatchSnapshot();
});