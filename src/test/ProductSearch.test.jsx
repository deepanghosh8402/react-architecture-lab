import { render, screen, fireEvent } from "@testing-library/react";
import { describe, test, expect } from "vitest";
import ProductList from '../components/ProductList'
import Products from "../pages/Products"; // adjust path if needed

const mockProducts = [
    { id: 1, name: "Laptop" },
    { id: 2, name: "Phone" },
    { id: 3, name: "Table" }
];
// console.log(typeof document);
describe("ProductSearch", () => {

    test("renders all products initially", () => {
        render(<ProductList products={mockProducts} />);

        expect(screen.getByText("Laptop")).toBeInTheDocument();
        expect(screen.getByText("Phone")).toBeInTheDocument();
        expect(screen.getByText("Table")).toBeInTheDocument();
    });

    test("filters products based on input", () => {
        render(<Products />);

        // get input (updated placeholder)
        const input = screen.getByPlaceholderText("Search product...");

        // type "lap"
        fireEvent.change(input, { target: { value: "lap" } });

        // Laptop should be visible
        expect(screen.getByText("Laptop")).toBeInTheDocument();

        // Phone should NOT be visible
        expect(screen.queryByText("Phone")).toBeNull();
    });

});