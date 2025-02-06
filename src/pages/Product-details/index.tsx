import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { AiOutlineHeart } from "react-icons/ai";
import Navbar from "../../components/Navbar";

const apiClient = "https://www.e-commerce-api-v3.nt.azimumarov.uz/api/v1/products";

const Detail = () => {
  const { id } = useParams();
  
  const [product, setProduct] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [selectedSize, setSelectedSize] = useState<string>("S");
  const [quantity, setQuantity] = useState<number>(1);

  useEffect(() => {
    async function fetchApi() {
      try {
        const res = await axios.get(`${apiClient}/${id}`);
        setProduct(res.data);
        setSelectedImage(res.data.pictures?.[0] || null);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching product data:", error);
        setLoading(false);
      }
    }
    if (id) {
      fetchApi();
    }
  }, [id]);

  if (loading) {
    return <div className="text-center py-10">Loading...</div>;
  }

  if (!product) {
    return <div className="text-center py-10">Product not found.</div>;
  }

  return (
    <>
        <Navbar />
      <div className="container mx-auto p-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center mt-[40px]">
        <div className="flex gap-4">
          <div className="flex flex-col items-start gap-2">
            {product.images?.map((img: string, index: number) => (
              <img
                key={index}
                src={img}
                alt={`Thumbnail ${index + 1}`}
                className={`w-20 h-20 cursor-pointer border ${
                  selectedImage === img ? "border-green-500" : "border-gray-300"
                }`}
                onClick={() => setSelectedImage(img)}
              />
            ))}
          </div>
          <div className="flex-1 border">
            {selectedImage && (
              <img src={selectedImage} alt="Selected Product" className="w-full h-auto" />
            )}
          </div>
        </div>

        <div className="flex flex-col items-start w-[544px] ">
          <h2 className="text-3xl font-bold">{product.name}</h2>
          <div className="cent flex flex-row items-center justify-between w-full">
          <p className="text-green-600 text-2xl font-semibold">${product.price?.toFixed(2)}</p>
          <div className="flex items-center gap-2">
            <div className="flex items-center">⭐⭐⭐⭐☆</div>
            <span className="font-cera text-[15px] font-normal leading-[16px] text-left underline-offset-auto decoration-slice text-gray-600">19 Customer Review</span>
          </div>
          </div>
          <hr />


          <h4 className="font-semibold mt-4">Short Description:</h4>
          <p className="text-gray-600">{product.description}</p>

          <h4 className="font-semibold mt-4">Size:</h4>
          <div className="flex gap-3">
            {["S", "M", "L", "XL"].map((size) => (
              <button
                key={size}
                className={`border rounded-full px-3 py-1 ${
                  selectedSize === size ? "bg-green-500 text-white" : "border-gray-400"
                }`}
                onClick={() => setSelectedSize(size)}
              >
                {size}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-4 mt-6">
            <button
              className="border px-3 py-1 text-xl"
              onClick={() => setQuantity((q) => Math.max(1, q - 1))}
            >
              -
            </button>
            <span className="text-xl">{quantity}</span>
            <button
              className="border px-3 py-1 text-xl"
              onClick={() => setQuantity((q) => q + 1)}
            >
              +
            </button>

            <button className="bg-green-500 text-white px-6 py-2 rounded-md">BUY NOW</button>
            <button className="border px-6 py-2 rounded-md flex items-center gap-2">ADD TO CART</button>
            <AiOutlineHeart className="text-xl cursor-pointer" />
          </div>

          <p className="text-gray-600 mt-6">
            <strong>SKU:</strong> {product.sku || "N/A"}
          </p>
          <p className="text-gray-600">
            <strong>Categories:</strong> {product.category || "N/A"}
          </p>
          <p className="text-gray-600">
            <strong>Tags:</strong> {product.tags?.join(", ") || "N/A"}
          </p>

          <div className="flex gap-3 mt-4">
            <span className="text-gray-600">Share this product:</span>
            <FaFacebookF className="cursor-pointer text-gray-700" />
            <FaTwitter className="cursor-pointer text-gray-700" />
            <FaLinkedinIn className="cursor-pointer text-gray-700" />
            <MdEmail className="cursor-pointer text-gray-700" />
          </div>
        </div>
      </div>
    </div>
     </>
  );
};

export default Detail;
