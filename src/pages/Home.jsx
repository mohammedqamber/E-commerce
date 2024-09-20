import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ProductCard from "../components/ProductCard";
import axios from "axios";

const HomePage = () => {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products?limit=4")
      .then((res) => setProducts(res.data))
      .catch((e) => console.log(e));
  }, []);

  return (
    <div className="min-h-screen bg-gray-100">
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#e2d7b4] to-[#e9e7dc] text-gray-700 py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-semibold mb-4">Welcome to Q-Shop</h2>
          <p className="text-lg mb-6">
            Discover our exclusive collection of fashion, electronics, and more.
          </p>
          <button
            onClick={() => navigate("/products")}
            className="bg-[#B3C8CF] text-gray-800 px-6 py-3 rounded-md shadow-md hover:bg-gray-200 transition"
          >
            Shop Now
          </button>
        </div>
      </section>

      {/* Product Grid */}
      <section className="container mx-auto px-4 py-10">
        <h3 className="text-3xl font-semibold text-gray-800 text-center mb-8">
          Featured Products
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <ProductCard product={product} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default HomePage;
