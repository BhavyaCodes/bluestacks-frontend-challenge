import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Navbar from "components/Navbar/index";

describe("navbar testing", () => {
  test("test initial render", () => {
    render(<Navbar tab="upcoming" setTab={jest.fn()} />);
    const list = screen.getAllByRole("listitem");
    list.forEach((item) => {
      expect(item).toBeInTheDocument();
    });
    const upcomingTab = screen.getByText(/upcoming/i);
    const liveTab = screen.getByText(/live/i);
    const pastTab = screen.getByText(/past/i);

    expect(upcomingTab).toHaveAttribute("aria-selected", "true");
    expect(liveTab).toHaveAttribute("aria-selected", "false");
    expect(pastTab).toHaveAttribute("aria-selected", "false");
  });

  test("test live tab selected", async () => {
    render(<Navbar tab="live" setTab={jest.fn()} />);

    const upcomingTab = screen.getByTestId("upcoming-tab");
    const liveTab = screen.getByTestId("live-tab");
    const pastTab = screen.getByTestId("past-tab");

    expect(upcomingTab).toHaveAttribute("aria-selected", "false");
    expect(liveTab).toHaveAttribute("aria-selected", "true");
    expect(pastTab).toHaveAttribute("aria-selected", "false");
  });

  test("test past tab selected", async () => {
    render(<Navbar tab="past" setTab={jest.fn()} />);

    const upcomingTab = screen.getByTestId("upcoming-tab");
    const liveTab = screen.getByTestId("live-tab");
    const pastTab = screen.getByTestId("past-tab");

    expect(upcomingTab).toHaveAttribute("aria-selected", "false");
    expect(liveTab).toHaveAttribute("aria-selected", "false");
    expect(pastTab).toHaveAttribute("aria-selected", "true");
  });
});
