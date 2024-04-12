import React from "react";
import { CustomerData, PaymentMethodData } from "../types";
import CreditCard from "./CreditCard.tsx";

interface Props {
  orderStatus: string;
  validation: boolean;
  customerData: CustomerData;
  setCustomerData: React.Dispatch<React.SetStateAction<CustomerData>>;
  paymentMethodData: PaymentMethodData;
  setPaymentMethodData: React.Dispatch<React.SetStateAction<PaymentMethodData>>;
  handleCheckout: () => void;
}

const CheckoutForm: React.FC<Props> = ({
  orderStatus,
  validation,
  customerData,
  setCustomerData,
  paymentMethodData,
  setPaymentMethodData,
  handleCheckout,
}) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setCustomerData((prevData) => ({ ...prevData, [name]: value }));
  };

  const inputClass = "border border-gray-300 p-2 rounded-md w-full";
  const validationClasses = "border border-red-500 p-2 rounded-md w-full text-red-500";

  const getInputClass = (value: string) => {
    return validation && value.trim().length === 0 ? validationClasses : inputClass;
  };

  return (
    <div className="px-4">
      <h2 className="text-xl font-semibold mb-2">Customer Information</h2>
      <form className="space-y-4">
        <div>
          <label htmlFor="name">
            Name <span className="text-red-500">*</span>
          </label>
          <input
            className={getInputClass(customerData.name)}
            type="text"
            id="name"
            name="name"
            value={customerData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="email">
            Email <span className="text-red-500">*</span>
          </label>
          <input
            className={getInputClass(customerData.email)}
            type="email"
            id="email"
            name="email"
            value={customerData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="address">
            Address <span className="text-red-500">*</span>
          </label>
          <input
            className={getInputClass(customerData.address)}
            type="text"
            id="address"
            name="address"
            value={customerData.address}
            onChange={handleChange}
            required
          />
        </div>
        <CreditCard
          validation={validation}
          paymentMethodData={paymentMethodData}
          setPaymentMethodData={setPaymentMethodData}
        />
        <button
          type="button"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          onClick={handleCheckout}
        >
          {orderStatus === "Processing" ? "Processing..." : "Checkout"}
        </button>
      </form>
    </div>
  );
};

export default CheckoutForm;
