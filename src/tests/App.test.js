import { render, screen } from "@testing-library/react";
import App from "../App";
import { formatTime } from "../util";

test("renders Synchronized Time", () => {
  render(<App />);
  const linkElement = screen.getByText(/Synchronized Time/i);
  expect(linkElement).toBeInTheDocument();
});

test("checking if the format add 0 is the time is less than 10", () => {
  expect(formatTime("5")).toBe("05");
});

test("checking if the format doesnt add 0 is the time is greater than 10", () => {
  expect(formatTime("10")).toBe("10");
});

test("renders Hour text", () => {
  render(<App />);
  const linkElement = screen.getByText(/Hour/i);
  expect(linkElement).toBeInTheDocument();
});

test("renders Min text", () => {
  render(<App />);
  const linkElement = screen.getByText(/Min/i);
  expect(linkElement).toBeInTheDocument();
});


//Set Time
test("renders placeholder text shows hour", () => {
  render(<App />);
  const linkElement = screen.getByPlaceholderText(/Hour/i);
  expect(linkElement).toBeInTheDocument();
});