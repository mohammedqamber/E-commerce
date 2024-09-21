import axios from "axios";
import React, { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import SkeletonList from "../components/skeleton/SkeletonList";
import Filter from "../components/Filter";

function ProductList() {
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);

  const [selectedCategory, setSelectedCategory] = useState("All Categories");

  const categories = [
    "All Categories",
    ...new Set(products.map((product) => product.category)),
  ];

  const filteredProducts =
    selectedCategory === "All Categories"
      ? products
      : products.filter((product) => product.category === selectedCategory);

  useEffect(() => {
    setLoading(true);
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => setProducts(res.data))
      .catch((e) => console.log(e))
      .finally(() => setLoading(false));
  }, []);

  return loading ? (
    <SkeletonList />
  ) : (
    <div className="container mx-auto px-4 py-8 min-h-[100vh]">
      <div className="flex justify-between">
        <h1 className="text-3xl font-bold text-gray-800 mb-8">
          Products
        </h1>
        <Filter
          categories={categories}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default ProductList;
