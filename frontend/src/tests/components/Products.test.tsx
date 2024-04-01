import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import Products from "components/Products";
import { productsMock } from "tests/factories/product";

jest.mock("components/ProductCard", () => () => <div>ProductCard</div>);
jest.mock("components/Breadcrumb", () => () => <div>Breadcrumb</div>);

const categoriesMock = ["Electronics", "Gadgets"];

describe("<Products />", () => {
  it("renders ProgramCard unchanged", () => {
    const { container } = render(
      <Products products={productsMock} categories={categoriesMock} />,
    );

    expect(container).toMatchSnapshot();
  });

  it("renders Breadcrumb component when categories are provided", () => {
    render(<Products products={[]} categories={categoriesMock} />);

    expect(screen.getByText("Breadcrumb")).toBeInTheDocument();
  });

  it("does not render Breadcrumb component when no categories are provided", () => {
    render(<Products products={[]} categories={[]} />);

    expect(screen.queryByText("Breadcrumb")).not.toBeInTheDocument();
  });

  it("renders the correct number of ProductCard components", () => {
    render(<Products products={productsMock} categories={categoriesMock} />);

    expect(screen.getAllByText("ProductCard")).toHaveLength(
      productsMock.length,
    );
  });
});
