import { render } from "@testing-library/react";
import Root from "./root.component";

describe("Root component", () => {
  it.skip("should be in the document", () => {
    const { getByText } = render(<Root name="Testapp" />);
    expect(getByText(/TELA DA CAMERA/i)).toBeInTheDocument();
  });
});
