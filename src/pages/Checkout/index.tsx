import { useState, useEffect } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import axios from 'axios';

const Checkout = () => {
  const cartItems = useSelector((state: RootState) => state.cart.items);
  const navigate = useNavigate();
  const [cartData, setCartData] = useState<any[]>(cartItems);
  console.log(cartData.length);
  

  useEffect(() => {
    if (cartItems.length === 0) {
      navigate('/cart');
    } else {
      setCartData(cartItems);
    }
  }, [cartItems, navigate]);

  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      country: '',
      city: '',
      apartment: '',
      state: '',
      zip: '',
      email: '',
      phoneNumber: '',
      notes: '',
    },
    validationSchema: Yup.object({
      firstName: Yup.string().required('First name is required'),
      lastName: Yup.string().required('Last name is required'),
      country: Yup.string().required('Country is required'),
      city: Yup.string().required('City is required'),
      apartment: Yup.string().required('Apartment is required'),
      state: Yup.string().required('State is required'),
      zip: Yup.string().required('ZIP code is required'),
      email: Yup.string().email('Invalid email address').required('Email is required'),
      phoneNumber: Yup.string().required('Phone number is required'),
      notes: Yup.string(),
    }),
    onSubmit: async (values) => {
      const orderData = {
        items: cartData.map((item) => ({
          productId: item.id,
          quantity: item.quantity,
        })),
        firstName: values.firstName,
        lastName: values.lastName,
        country: values.country,
        city: values.city,
        apartment: values.apartment,
        state: values.state,
        zip: values.zip,
        email: values.email,
        phoneNumber: values.phoneNumber,
        notes: values.notes,
      };
      console.log(orderData);
      
      

      try {
        const response = await axios.post('https://www.e-commerce-api-v3.nt.azimumarov.uz/api/v1/orders', orderData, {
          headers: {
            'accept': '*/*',
            'Content-Type': 'application/json',
          },
        });
        console.log(response.data);
        navigate('/thank-you');
      } catch (error: any) {
        console.error('Error placing order:', error);
        if (error.response) {
          console.error("Server error response:", error.response.data);
        }
      }
      
    },
  });

  const calculateSubtotal = (price: number, quantity: number) => price * quantity;

  return (
    <div className="container mx-auto w-full px-4 lg:px-8 py-10 flex items-center justify-between">
<form onSubmit={formik.handleSubmit} className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-lg">
  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
    <div className="mb-4">
      <label htmlFor="firstName" className="block text-sm font-semibold text-gray-700">First Name</label>
      <input
        id="firstName"
        name="firstName"
        type="text"
        className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.firstName}
      />
      {formik.touched.firstName && formik.errors.firstName && (
        <p className="text-sm text-red-500">{formik.errors.firstName}</p>
      )}
    </div>

    <div className="mb-4">
      <label htmlFor="lastName" className="block text-sm font-semibold text-gray-700">Last Name</label>
      <input
        id="lastName"
        name="lastName"
        type="text"
        className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.lastName}
      />
      {formik.touched.lastName && formik.errors.lastName && (
        <p className="text-sm text-red-500">{formik.errors.lastName}</p>
      )}
    </div>

    <div className="mb-4">
      <label htmlFor="country" className="block text-sm font-semibold text-gray-700">Country</label>
      <input
        id="country"
        name="country"
        type="text"
        className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.country}
      />
      {formik.touched.country && formik.errors.country && (
        <p className="text-sm text-red-500">{formik.errors.country}</p>
      )}
    </div>

    <div className="mb-4">
      <label htmlFor="city" className="block text-sm font-semibold text-gray-700">City</label>
      <input
        id="city"
        name="city"
        type="text"
        className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.city}
      />
      {formik.touched.city && formik.errors.city && (
        <p className="text-sm text-red-500">{formik.errors.city}</p>
      )}
    </div>

    <div className="mb-4">
      <label htmlFor="apartment" className="block text-sm font-semibold text-gray-700">Apartment</label>
      <input
        id="apartment"
        name="apartment"
        type="text"
        className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.apartment}
      />
      {formik.touched.apartment && formik.errors.apartment && (
        <p className="text-sm text-red-500">{formik.errors.apartment}</p>
      )}
    </div>

    <div className="mb-4">
      <label htmlFor="state" className="block text-sm font-semibold text-gray-700">State</label>
      <input
        id="state"
        name="state"
        type="text"
        className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.state}
      />
      {formik.touched.state && formik.errors.state && (
        <p className="text-sm text-red-500">{formik.errors.state}</p>
      )}
    </div>

    <div className="mb-4">
      <label htmlFor="zip" className="block text-sm font-semibold text-gray-700">ZIP Code</label>
      <input
        id="zip"
        name="zip"
        type="text"
        className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.zip}
      />
      {formik.touched.zip && formik.errors.zip && (
        <p className="text-sm text-red-500">{formik.errors.zip}</p>
      )}
    </div>

    <div className="mb-4">
      <label htmlFor="email" className="block text-sm font-semibold text-gray-700">Email</label>
      <input
        id="email"
        name="email"
        type="email"
        className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.email}
      />
      {formik.touched.email && formik.errors.email && (
        <p className="text-sm text-red-500">{formik.errors.email}</p>
      )}
    </div>

    <div className="mb-4">
      <label htmlFor="phoneNumber" className="block text-sm font-semibold text-gray-700">Phone Number</label>
      <input
        id="phoneNumber"
        name="phoneNumber"
        type="text"
        className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.phoneNumber}
      />
      {formik.touched.phoneNumber && formik.errors.phoneNumber && (
        <p className="text-sm text-red-500">{formik.errors.phoneNumber}</p>
      )}
    </div>

    <div className="mb-4">
      <label htmlFor="notes" className="block text-sm font-semibold text-gray-700">Notes</label>
      <textarea
        id="notes"
        name="notes"
        className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.notes}
      />
      {formik.touched.notes && formik.errors.notes && (
        <p className="text-sm text-red-500">{formik.errors.notes}</p>
      )}
    </div>
  </div>

  <button
    type="submit"
    className="w-full py-2 px-4 bg-blue-500 text-white font-semibold rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
  >
    Submit Order
  </button>
</form>


<div className="qism-2 mt-8 w-[405px] bg-white shadow-lg rounded-2xl p-6 border border-gray-200">
  <div className="flex items-center justify-between pb-4 border-b border-gray-300">
    <p className="font-semibold text-lg text-gray-700">Products</p>
    <p className="font-semibold text-lg text-gray-700">Subtotal</p>
  </div>

  <div className="mt-4 space-y-3">
    {cartItems.map((item) => (
      <div key={item.id} className="flex items-center justify-between">
        <p className="text-gray-600">
          {item.name} <span className="text-gray-500">(x{item.quantity})</span>
        </p>
        <p className="font-medium text-gray-700">${calculateSubtotal(item.price, item.quantity).toFixed(2)}</p>
      </div>
    ))}
  </div>

  <div className="flex items-center justify-between mt-6 pt-4 border-t border-gray-300">
    <p className="font-semibold text-lg text-gray-800">Total</p>
    <p className="font-semibold text-lg text-green-600">
      ${cartItems.reduce((total, item) => total + calculateSubtotal(item.price, item.quantity), 0).toFixed(2)}
    </p>
  </div>
</div>

    </div>
  );
};

export default Checkout;
