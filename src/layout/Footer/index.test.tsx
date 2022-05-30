import { render, screen } from "@testing-library/react";
import Footer from ".";

test("render of footer", () => {
  render(<Footer />);
  const copyright = screen.getByText(/Copyright/i);
  expect(copyright).toBeInTheDocument();
});
