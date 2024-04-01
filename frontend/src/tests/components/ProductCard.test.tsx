import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import { BrowserRouter } from "react-router-dom";

import * as productUtils from "utils/product";
import ProductCard from "components/ProductCard";
import { productMock } from "tests/factories/product";
import { Product } from "types/product";

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: jest.fn(),
}));

jest.mock("utils/product", () => ({
  getProductPrice: jest.fn(),
}));

const ProductCardWrapped = ({ product }: { product: Product }) => (
  <BrowserRouter>
    <ProductCard product={product} />
  </BrowserRouter>
);

describe("<ProductCard />", () => {
  beforeEach(() => {
    (
      productUtils.getProductPrice as jest.MockedFunction<
        typeof productUtils.getProductPrice
      >
    ).mockImplementation(() => "100.99");
  });

  it("navigates to the product detail page on click", () => {
    const useNavigate = require("react-router-dom").useNavigate;
    const navigateMock = jest.fn();

    useNavigate.mockImplementation(() => navigateMock);

    render(<ProductCardWrapped product={productMock} />);

    fireEvent.click(screen.getByAltText(productMock.title));
    expect(navigateMock).toHaveBeenCalledWith(`/items/${productMock.id}`);
  });

  it("displays the product information correctly", () => {
    render(<ProductCardWrapped product={productMock} />);

    expect(screen.getByText(productMock.title)).toBeInTheDocument();
    expect(screen.getByText("$ 100.99")).toBeInTheDocument();
    expect(screen.getByAltText(productMock.title)).toHaveAttribute(
      "src",
      productMock.picture,
    );
  });

  it("shows the free shipping icon for products with free shipping", () => {
    render(<ProductCardWrapped product={productMock} />);

    expect(screen.getByAltText("Free shipping")).toBeInTheDocument();
  });

  it("does not show the free shipping icon for products without free shipping", () => {
    const nonShippingProduct = { ...productMock, free_shipping: false };

    render(<ProductCardWrapped product={nonShippingProduct} />);

    expect(screen.queryByAltText("Free shipping")).not.toBeInTheDocument();
  });
});
