import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Navbar from "components/Navbar/index";

describe("navbar testing", () => {
  test("test initial render", () => {
    render(<Navbar />);
    const list = screen.getAllByRole("listitem");
    list.forEach((item) => {
      expect(item).toBeInTheDocument();
    });
  });
});
