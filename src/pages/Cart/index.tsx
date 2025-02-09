import { useSelector, useDispatch } from 'react-redux';
import { CartItem } from '../../interfaces';
import { RootState } from '../../store/store';
import { removeFromCart, increaseQuantity, decreaseQuantity } from '../../store/cartSlice';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { FaTrash } from 'react-icons/fa';

const Cart = () => {
  const cartItems = useSelector((state: RootState) => state.cart.items);
  const dispatch = useDispatch();
  // @ts-ignore
  const [searchParams, setSearchParams] = useSearchParams();
  const handleCheckout = () => {
    const cartData = cartItems.map(item => ({
      productId: item.id,
      quantity: item.quantity,
    }));
  
    localStorage.setItem('cartData', JSON.stringify(cartData));
  };
  

  useEffect(() => {
    const updatedParams: Record<string, string> = {};
    cartItems.forEach((item) => {
      updatedParams[`product_${item.id}`] = String(item.quantity);
    });
    setSearchParams(updatedParams);
  }, [cartItems, setSearchParams]);

  return (
    <>
      <Navbar />
      <div className="bg-gray-50 min-h-screen">
        <div className="container mx-auto max-w-[1120px] px-4 lg:px-8 py-10">
          <h1 className="text-3xl font-bold text-gray-800 mb-8 text-center">
            Sizning savatchangiz
          </h1>
          {cartItems.length === 0 ? (
            <div className="flex flex-col items-center justify-center">
              <p className="text-gray-600 text-lg">Savatchangiz bo‘sh.</p>
              <a
                href="/"
                className="mt-4 px-6 py-3 bg-green-600 text-white rounded-lg shadow-md hover:bg-green-700 transition"
              >
                Sotib olish
              </a>
            </div>
          ) : (
            <div className="bg-white shadow-md rounded-lg p-6">
              <ul className="space-y-6">
                {cartItems.map((item: CartItem) => (
                  <li
                    key={item.id}
                    className="flex justify-between items-center border-b border-gray-200 pb-4"
                  >
                    <div className='flex flex-col items-start'>
                      <p className="text-lg font-medium text-gray-800">{item.name}</p>
                      <p className="text-gray-500">${item.price.toFixed(2)}</p>
                    </div>
                    <div className="flex items-center space-x-4">
                      <button
                        className="px-3 py-1 bg-red-500 text-white rounded-lg hover:bg-red-600 transition"
                        onClick={() => dispatch(decreaseQuantity(item.id))}
                      >
                        -
                      </button>
                      <span className="text-gray-700">{item.quantity}</span>
                      <button
                        className="px-3 py-1 bg-green-500 text-white rounded-lg hover:bg-green-600 transition"
                        onClick={() => dispatch(increaseQuantity(item.id))}
                      >
                        +
                      </button>
                      <button
                        className="p-1 w-[32px] h-[32px] text-sm bg-red-600 text-white rounded-lg hover:bg-red-700 transition"
                        onClick={() => dispatch(removeFromCart(item.id))}
                      >
                              <FaTrash size={24} />
                      </button>
                    </div>
                  </li>
                ))}
              </ul>
              <div className="mt-8 flex justify-end">
              <a
  href="/checkout"
  onClick={handleCheckout}
  className="px-6 py-3 bg-green-600 text-white rounded-lg shadow-md hover:bg-green-700 transition"
>
  Hammasini sotib olish
</a>

              </div>
            </div>
          )}
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Cart;