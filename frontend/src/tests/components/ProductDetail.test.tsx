import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import ProductDetail from "components/ProductDetail";
import { productMock } from "tests/factories/product";
import * as productUtils from "utils/product";

jest.mock("components/Breadcrumb", () => () => <div>Breadcrumb</div>);
jest.mock("utils/product", () => ({
  getProductPrice: jest.fn(),
}));

const categoriesMock = ["Electronics", "Gadgets"];

describe("<ProductDetail />", () => {
  beforeEach(() => {
    productUtils.getProductPrice.mockImplementation(() => "1,234.56");
  });

  it("renders ProgramCard unchanged", () => {
    const { container } = render(
      <ProductDetail product={productMock} categories={categoriesMock} />,
    );

    expect(container).toMatchSnapshot();
  });

  it("renders the Breadcrumb component with the correct categories", () => {
    render(<ProductDetail product={productMock} categories={categoriesMock} />);

    expect(screen.getByText("Breadcrumb")).toBeInTheDocument();
  });

  it("displays the product title, condition, sold quantity, and price correctly", () => {
    render(<ProductDetail product={productMock} categories={categoriesMock} />);

    expect(screen.getByText(productMock.title)).toBeInTheDocument();
    expect(
      screen.getByText(
        `${productMock.condition === "new" ? "Nuevo" : "Usado"} - ${productMock.sold_quantity} vendidos`,
      ),
    ).toBeInTheDocument();
    expect(screen.getByText(`$ 1,234.56`)).toBeInTheDocument();
  });

  it("displays the product description", () => {
    render(<ProductDetail product={productMock} categories={categoriesMock} />);

    expect(screen.getByText("Descripción del producto")).toBeInTheDocument();
    expect(screen.getByText(productMock.description)).toBeInTheDocument();
  });

  it("renders the product image with the correct src and alt attributes", () => {
    render(<ProductDetail product={productMock} categories={categoriesMock} />);

    const image = screen.getByRole("img");

    expect(image).toHaveAttribute("src", productMock.picture);
    expect(image).toHaveAttribute("alt", "Product cover");
  });
});
