"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Input } from "@/components/ui/input";

// Dummy product data
const initialProducts = [
  {
    id: 1,
    name: "Premium Leather Bag",
    category: "Accessories",
    price: 199.99,
    stock: 50,
  },
  {
    id: 2,
    name: "Wireless Earbuds",
    category: "Electronics",
    price: 89.99,
    stock: 100,
  },
  {
    id: 3,
    name: "Organic Cotton T-Shirt",
    category: "Clothing",
    price: 29.99,
    stock: 200,
  },
  {
    id: 4,
    name: "Smart Home Hub",
    category: "Electronics",
    price: 149.99,
    stock: 75,
  },
  {
    id: 5,
    name: "Stainless Steel Water Bottle",
    category: "Accessories",
    price: 24.99,
    stock: 150,
  },
  {
    id: 6,
    name: "Bluetooth Speaker",
    category: "Electronics",
    price: 59.99,
    stock: 30,
  },
  {
    id: 7,
    name: "Smart Watch",
    category: "Accessories",
    price: 129.99,
    stock: 80,
  },
];

export default function Dashboard() {
  const [products, setProducts] = useState(initialProducts);
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage] = useState(5);

  // Filter products based on search term
  const filteredProducts = products.filter(
    (product) =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Get current products for pagination
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredProducts.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  // Change page
  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  return (
    <div className="p-4">
      {/* Search Input */}
      <Input
        type="text"
        placeholder="Search products"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="mb-4"
      />

      {/* Products Table */}
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Category</TableHead>
            <TableHead>Price</TableHead>
            <TableHead>Stock</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {currentProducts.map((product) => (
            <TableRow key={product.id}>
              <TableCell>{product.name}</TableCell>
              <TableCell>{product.category}</TableCell>
              <TableCell>${product.price.toFixed(2)}</TableCell>
              <TableCell>{product.stock}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      {/* Pagination Controls */}
      <div className="mt-4">
        <Button
          onClick={() => paginate(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Prev
        </Button>
        <span className="mx-2">
          {currentPage} of {Math.ceil(filteredProducts.length / productsPerPage)}
        </span>
        <Button
          onClick={() => paginate(currentPage + 1)}
          disabled={currentPage === Math.ceil(filteredProducts.length / productsPerPage)}
        >
          Next
        </Button>
      </div>
    </div>
  );
}
