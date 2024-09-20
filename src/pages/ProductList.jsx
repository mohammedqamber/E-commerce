import axios from "axios";
import React, { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import Skeleton from "../components/skeleton/skeletonProductCard";
import SkeletonList from "../components/skeleton/skeletonList";
function ProductList() {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);

  useEffect(() => {
    setLoading(true);
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => setData(res.data))
      .catch((e) => console.log(e))
      .finally(() => setLoading(false));
  }, []);
  
  return loading ? (
    <SkeletonList/>
  ) : (
    <div className="container mx-auto px-4 py-8 min-h-[100vh]">
      <h1 className="text-3xl font-bold text-gray-800 mb-8">
        Product Listings
      </h1>
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {data.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default ProductList;
