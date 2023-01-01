import { render, screen } from "@testing-library/react";
import App from "./components/App";

test("renders sunset text", () => {
  render(<App />);
  const textElement = screen.getByText(/sunset/i);
  expect(textElement).toBeInTheDocument();
});
