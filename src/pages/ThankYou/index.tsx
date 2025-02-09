import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
const Thankyou = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-br from-green-400 to-blue-500 text-white">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="bg-white text-center p-8 rounded-2xl shadow-lg max-w-md"
      >
        <h1 className="text-2xl font-bold text-green-600">Buyurtmangiz qabul qilindi! ✅</h1>
        <p className="mt-3 text-gray-700">Buyurtma uchun rahmat! Tez orada yetkazib beramiz.</p>
        <button className="mt-6 px-6 py-2 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-lg shadow-md"
          onClick={() => navigate("/")}
        >
          Asosiy sahifa
        </button>
      </motion.div>
    </div>
  );
};

export default Thankyou;
