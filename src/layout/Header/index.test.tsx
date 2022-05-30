import { render, screen } from "@testing-library/react";
import Header from ".";

test("render of header", () => {
  render(<Header />);
  const title = screen.getByText("Status dashboard");
  expect(title).toBeInTheDocument();
});
