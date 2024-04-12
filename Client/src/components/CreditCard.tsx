import 'react-credit-cards-2/dist/es/styles-compiled.css';
import React, { ChangeEvent, FocusEvent } from 'react';
import Cards from 'react-credit-cards-2';
import { PaymentMethodData } from '../types';
interface Props {
    validation: boolean;
    paymentMethodData: PaymentMethodData;
    setPaymentMethodData: React.Dispatch<React.SetStateAction<PaymentMethodData>>;
}

const PaymentForm: React.FC<Props> = ({
    validation,
    paymentMethodData,
    setPaymentMethodData
}) => {
    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        if (name === 'number' && value.length > 16) return;
        if (name === 'expiry' && value.length > 4) return;
        if (name === 'cvc' && value.length > 3) return;
        setPaymentMethodData((prev) => ({ ...prev, [name]: value }));
    };

    const inputClass = 'border border-gray-300 p-2 rounded-md w-full';
    const validationClasses = 'border border-red-500 p-2 rounded-md w-full text-red-500';

    const getInputClass = (name: string) => {
        const value = paymentMethodData[name];
        return validation && value.trim().length === 0 ? validationClasses : inputClass;
    };

    const handleInputFocus = (e: FocusEvent<HTMLInputElement>) => {
        setPaymentMethodData((prev) => ({ ...prev, focus: e.target.name }));
    };

    return (
        <div>
            <Cards
                number={paymentMethodData.number}
                expiry={paymentMethodData.expiry}
                cvc={paymentMethodData.cvc}
                name={paymentMethodData.name}
                focused={paymentMethodData.focus}
            />
            <form className='flex flex-col gap-y-2.5 m-6'>
                <label htmlFor="number">Card Number <span className="text-red-500">*</span></label>
                <input
                    className={getInputClass('number')}
                    type="number"
                    name="number"
                    placeholder="1234 1234 1234 1234 *"
                    value={paymentMethodData.number}
                    onChange={handleInputChange}
                    onFocus={handleInputFocus}
                />
                <div className='secretData flex flex-row gap-x-2.5'>
                    <div>
                        <label htmlFor="expiry">Expiration Date <span className="text-red-500">*</span></label>
                        <input
                            className={getInputClass('expiry')}
                            type="number"
                            name="expiry"
                            placeholder="MM/YY"
                            value={paymentMethodData.expiry}
                            onChange={handleInputChange}
                            onFocus={handleInputFocus}
                        />
                    </div>
                    <div>
                        <label htmlFor="cvc">CVC <span className="text-red-500">*</span></label>
                        <input
                            className={getInputClass('cvc')}
                            type="number"
                            name="cvc"
                            placeholder="CVC"
                            value={paymentMethodData.cvc}
                            onChange={handleInputChange}
                            onFocus={handleInputFocus}
                        />
                    </div>
                </div>
                <label htmlFor="name">Card Holder Name <span className="text-red-500">*</span></label>
                <input
                    className={getInputClass('name')}
                    type="text"
                    name="name"
                    placeholder="Name"
                    value={paymentMethodData.name}
                    onChange={handleInputChange}
                    onFocus={handleInputFocus}
                />
            </form>
        </div>
    );
};

export default PaymentForm;
