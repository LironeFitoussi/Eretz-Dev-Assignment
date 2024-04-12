import React, { useEffect, useState } from "react";
import { OrderData, CustomerData, PaymentMethodData } from "../types";
import CheckoutForm from "../components/CheckoutForm";
import Modal from 'react-modal';

const initialOrderData: OrderData = {
  items: [
    {
      productId: "product_id_1",
      name: "Morocco Tour",
      quantity: 2,
      price: 399.99,
      image: 'https://miro.medium.com/v2/resize:fit:600/1*Ys7KwVoQgvDIz_6E7JUTZg.jpeg'
    },
    {
      productId: "product_id_2",
      name: "Skiing in the Alps",
      quantity: 1,
      price: 599.99,
      image: 'https://www.pbs.org/wnet/nature/files/2021/01/pexels-denis-linine-714258-610x343.png'
    },
  ],
  totalPrice: 0,
};

const initialCustomerData: CustomerData = {
  name: "",
  email: "",
  address: "",
};

const initialPaymentMethodData: PaymentMethodData = {
  number: '',
  expiry: '',
  cvc: '',
  name: '',
  focus: '',
};

const CheckoutPage: React.FC = () => {
  const [orderData, setOrderData] = useState<OrderData>(initialOrderData);
  const [validation, setValidation] = useState<boolean>(false);
  const [orderStatus, setOrderStatus] = useState<string>('waiting');
  const [modalIsOpen, setModalIsOpen] = useState<boolean>(false); // State for modal

  useEffect(() => {
    setOrderData((prev) => ({
      ...prev,
      totalPrice: orderData.items.reduce((acc, item) => acc + item.price * item.quantity, 0),
    }));
  }, []);

  const [customerData, setCustomerData] = useState<CustomerData>(
    initialCustomerData
  );

  const [paymentMethodData, setPaymentMethodData] = useState<PaymentMethodData>(
    initialPaymentMethodData
  );

  const handleCheckout = async () => {
    setOrderStatus('Processing');
    
    const data = {
      order: orderData,
      customer: customerData,
      paymentMethod: paymentMethodData,
    };

    const isDataEmpty = Object.values(data).some(
      (item) => Object.values(item).some((field) => field === '')
    );

    if (isDataEmpty) {
      console.error('Please fill in all fields before proceeding.');
      setValidation(true);
      setOrderStatus('Pay');
      return;
    }

    try {
      const response = await fetch('http://localhost:3000/checkout', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      });

      if (response.status === 201) {
        setOrderStatus('Success');
        setModalIsOpen(true); // Open modal on success
        setTimeout(() => {
          window.location.reload(); // Reload the page after 5 seconds
        }, 5000);
      } else {
        setOrderStatus('Error');
      }

      if (!response.ok) {
        throw new Error('Checkout request failed');
      }

      const result = await response.json();
      console.log(result);
    } catch (error) {
      console.error('Error:', error);
      setOrderStatus('Error');
    }
  };

  return (
    <>
      <div className="sticky top-0 w-full bg-white shadow-md">
        <h1 className="text-xl font-bold text-gray-800 py-2 text-center">Mazal Tours</h1>
      </div>
      <div className={`container mx-auto py-8 px-4 `}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <h1 className="text-xl font-semibold mb-2">Order Summary</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {orderData.items.map((item) => (
                <div key={item.productId} className="border shadow-md bg-white rounded-md p-4 flex flex-row items-center justify-between">
                  <div>
                    <p className="text-lg font-semibold">{item.name}</p>
                    <p className="text-gray-600">Quantity: {item.quantity}</p>
                    <p className="text-gray-600">${item.price}</p>
                  </div>
                  <img className='w-40 h-40 rounded-lg' src={item.image} alt="" />
                </div>
              ))}
            </div>
            <p className="text-xl font-semibold mt-4">Total: ${orderData.totalPrice}</p>
          </div>
          <CheckoutForm
            validation={validation}
            customerData={customerData}
            setCustomerData={setCustomerData}
            paymentMethodData={paymentMethodData}
            setPaymentMethodData={setPaymentMethodData}
            handleCheckout={handleCheckout}
          />
        </div>
      </div>
      <div className="text-center mt-4">
        <p className="text-lg font-semibold">
          Order Status: {orderStatus}
        </p>
      </div>
      {/* Modal */}
      <Modal style={{
          overlay: {
            backgroundColor: 'rgba(0, 0, 0, .5)',
            backdropFilter: 'blur(5px)',
            zIndex: '9999',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          },
          content: {
            position: 'relative',
            top: 'auto',
            left: 'auto',
            right: 'auto',
            bottom: 'auto',
            border: 'none',
            background: '#ffffff',
            borderRadius: '8px',
            padding: '20px',
            width: '80%',
            maxHeight: '90vh',
            overflow: 'auto',
            boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.1)',
          },
        }}
        isOpen={modalIsOpen} onRequestClose={() => setModalIsOpen(false)}>
        <h2>Thank you for your order!</h2>
        <p>Your order has been successfully processed.</p>
        <iframe src="https://lottie.host/embed/c5aceab3-6293-44de-9d1c-a4f542cd182b/ZiYoUCeHjR.json"></iframe>
      </Modal>
    </>
  );
};

export default CheckoutPage;
