import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Loader2 } from "lucide-react";
import AddToCartBtn from "../components/AddToCartBtn";

const ProductPage = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(false);
  const [product, setProduct] = useState({});

  useEffect(() => {
    setLoading(true);
    axios
      .get(`https://fakestoreapi.com/products/${id}`)
      .then((res) => setProduct(res.data))
      .catch((e) => console.log(e))
      .finally(() => setLoading(false))
  }, []);

  return loading ? (
    <div className="min-h-[100vh] flex justify-center items-center ">
      <Loader2 className="animate-spin duration-300 text-gray-700"/>
    </div>
  ) : (
    <div className="min-h-[90vh] bg-[#f1eedc66] flex items-center justify-center p-6">
      <div className="max-w-5xl w-full bg-gray-50 rounded-lg shadow-xl overflow-hidden grid grid-cols-1 md:grid-cols-2">
        {/* Product Image */}
        <div className="bg-white p-6 flex items-center justify-center border-r border-gray-200">
          <img
            src={product.image}
            alt={product.title}
            className="rounded-lg shadow-lg max-h-96 transform transition duration-300 hover:scale-105"
          />
        </div>

        {/* Product Details */}
        <div className="p-6 flex flex-col justify-between">
          <div>
            <p className="text-sm text-gray-500 mb-2 uppercase tracking-wide">
              {product.category}
            </p>
            <h1 className="text-3xl font-semibold text-gray-800 mb-4">
              {product.title}
            </h1>
            <p className="text-xl text-gray-900 font-bold mb-4">
              ${product.price}
            </p>
            <p className="text-gray-700 leading-relaxed mb-6">
              {product.description}
            </p>
          </div>

          {/* Rating */}
          <div className="flex items-center mb-6">
            <div className="flex space-x-1">
              {[...Array(5)].map((star, index) => (
                <svg
                  key={index}
                  className={`w-6 h-6 ${
                    index < Math.round(product?.rating?.rate?? 0)
                      ? 'text-yellow-400'
                      : 'text-gray-300'
                  }`}
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927C9.349 2.003 10.652 2.003 10.951 2.927l1.268 3.905a1 1 0 00.95.69h4.1c1.05 0 1.48 1.344.64 1.912l-3.32 2.266a1 1 0 00-.36 1.118l1.27 3.903c.3.924-.755 1.688-1.54 1.118l-3.32-2.266a1 1 0 00-1.176 0l-3.32 2.266c-.784.57-1.84-.194-1.54-1.118l1.27-3.903a1 1 0 00-.36-1.118L2.692 9.435c-.84-.568-.41-1.912.64-1.912h4.1a1 1 0 00.95-.69l1.268-3.905z" />
                </svg>
              ))}
            </div>
            <span className="text-gray-600 ml-2">
              {product?.rating?.rate?? 0} ({product?.rating?.count?? 0} reviews)
            </span>
          </div>

         <AddToCartBtn product={product}/>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
