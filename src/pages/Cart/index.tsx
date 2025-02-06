import { useSelector, useDispatch } from 'react-redux';
import { CartItem } from '../../interfaces';
import { RootState } from '../../store/store';
import { removeFromCart } from '../../store/cartSlice';
import Navbar from '../../components/Navbar';


const Cart = () => {
  const cartItems = useSelector((state: RootState) => state.cart.items);
  const dispatch = useDispatch();

  return (
    <>
    <Navbar/>
    <div className="bg-gray-50 min-h-screen">
      <div className="container mx-auto max-w-[1120px] px-4 lg:px-8 py-10">
        <h1 className="text-3xl font-bold text-gray-800 mb-8 text-center">
          Sizning karzinkangiz
        </h1>
        {cartItems.length === 0 ? (
          <div className="flex flex-col items-center justify-center">
            <p className="text-gray-600 text-lg">Karzinka bosh.</p>
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
                    <span className="text-gray-700">Soni: {item.quantity}</span>
                    <button
                      className="px-4 py-2 text-sm bg-red-100 text-red-500 rounded-lg hover:bg-red-200 transition"
                      onClick={() => dispatch(removeFromCart(item.id))}
                    >
                      O'chrish
                    </button>
                  </div>
                </li>
              ))}
            </ul>
            <div className="mt-8 flex justify-end">
              <a
                href="/checkout"
                className="px-6 py-3 bg-green-600 text-white rounded-lg shadow-md hover:bg-green-700 transition"
              >
                Hammasini sotib olish
              </a>
            </div>
          </div>
        )}
      </div>
    </div>
    </>
  );
};

export default Cart;
