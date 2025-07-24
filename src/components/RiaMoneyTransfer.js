import React, { useState } from 'react';

// Helper components are now defined outside the main component
// This prevents them from being recreated on every render

const Header = ({ currentStep, handleBack }) => (
  <div className="bg-white border-b-2 border-orange-500 p-4 flex items-center">
    {currentStep > 1 && (
      <button onClick={handleBack} className="mr-4 text-gray-600">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
    )}
    <div className="flex-1 flex justify-center">
      <div className="text-orange-500 font-bold text-2xl">ria</div>
    </div>
  </div>
);

const PersonalInfoStep = ({ formData, updateFormData, errors, handleNext }) => (
  <div className="p-6 max-w-md mx-auto">
    <h1 className="text-2xl font-semibold text-gray-800 mb-6">Who are you?</h1>
    
    <div className="bg-blue-50 p-4 rounded-lg mb-6">
      <p className="text-sm text-gray-700">
        We need this information to verify your identity and meet regulatory standards.
        <span className="text-blue-600 ml-2 cursor-pointer">Learn more</span>
      </p>
    </div>

    <div className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">First name</label>
        <input
          type="text"
          value={formData.firstName}
          onChange={(e) => updateFormData('firstName', e.target.value)}
          className={`w-full p-3 border-2 rounded-lg focus:outline-none focus:border-orange-500 ${
            errors.firstName ? 'border-red-500' : 'border-orange-500'
          }`}
          placeholder=""
        />
        {errors.firstName && <p className="text-red-500 text-sm mt-1">{errors.firstName}</p>}
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">Last name</label>
        <input
          type="text"
          value={formData.lastName}
          onChange={(e) => updateFormData('lastName', e.target.value)}
          className={`w-full p-3 border rounded-lg focus:outline-none focus:border-orange-500 ${
            errors.lastName ? 'border-red-500' : 'border-gray-300'
          }`}
        />
        {errors.lastName && <p className="text-red-500 text-sm mt-1">{errors.lastName}</p>}
        <p className="text-sm text-gray-500 mt-1">Enter your full name as it appears on your valid ID</p>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">Email address</label>
        <input
          type="email"
          value={formData.email}
          onChange={(e) => updateFormData('email', e.target.value)}
          className={`w-full p-3 border rounded-lg focus:outline-none focus:border-orange-500 ${
            errors.email ? 'border-red-500' : 'border-gray-300'
          }`}
        />
        {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
        <p className="text-sm text-gray-500 mt-1">We will send receipts and other important information to this address</p>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">Date of birth</label>
        <div className="grid grid-cols-3 gap-3">
          <div>
            <label className="block text-xs text-gray-500 mb-1">Month</label>
            <input
              type="text"
              placeholder="MM"
              value={formData.birthMonth}
              onChange={(e) => updateFormData('birthMonth', e.target.value)}
              className={`w-full p-3 border rounded-lg focus:outline-none focus:border-orange-500 ${
                errors.birthMonth ? 'border-red-500' : 'border-gray-300'
              }`}
              maxLength="2"
            />
          </div>
          <div>
            <label className="block text-xs text-gray-500 mb-1">Day</label>
            <input
              type="text"
              placeholder="DD"
              value={formData.birthDay}
              onChange={(e) => updateFormData('birthDay', e.target.value)}
              className={`w-full p-3 border rounded-lg focus:outline-none focus:border-orange-500 ${
                errors.birthDay ? 'border-red-500' : 'border-gray-300'
              }`}
              maxLength="2"
            />
          </div>
          <div>
            <label className="block text-xs text-gray-500 mb-1">Year</label>
            <input
              type="text"
              placeholder="YYYY"
              value={formData.birthYear}
              onChange={(e) => updateFormData('birthYear', e.target.value)}
              className={`w-full p-3 border rounded-lg focus:outline-none focus:border-orange-500 ${
                errors.birthYear ? 'border-red-500' : 'border-gray-300'
              }`}
              maxLength="4"
            />
          </div>
        </div>
      </div>
    </div>

    <button
      onClick={handleNext}
      className="w-full bg-gray-300 text-gray-600 py-3 rounded-full mt-8 font-medium"
    >
      Continue
    </button>
  </div>
);

const AddressStep = ({ formData, updateFormData, errors, handleNext }) => (
  <div className="p-6 max-w-md mx-auto">
    <h1 className="text-2xl font-semibold text-gray-800 mb-6">Where do you live?</h1>
    
    <div className="bg-blue-50 p-4 rounded-lg mb-6">
      <p className="text-sm text-gray-700">
        We need this information to verify your identity and meet regulatory standards.
        <span className="text-blue-600 ml-2 cursor-pointer">Learn more</span>
      </p>
    </div>

    <div className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">Address</label>
        <input
          type="text"
          value={formData.address}
          onChange={(e) => updateFormData('address', e.target.value)}
          className={`w-full p-3 border rounded-lg focus:outline-none focus:border-orange-500 ${
            errors.address ? 'border-red-500' : 'border-gray-300'
          }`}
        />
        {errors.address && <p className="text-red-500 text-sm mt-1">{errors.address}</p>}
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">Apt/Unit/Suite (optional)</label>
        <input
          type="text"
          value={formData.aptUnit}
          onChange={(e) => updateFormData('aptUnit', e.target.value)}
          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-orange-500"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">City</label>
        <input
          type="text"
          value={formData.city}
          onChange={(e) => updateFormData('city', e.target.value)}
          className={`w-full p-3 border rounded-lg focus:outline-none focus:border-orange-500 ${
            errors.city ? 'border-red-500' : 'border-gray-300'
          }`}
        />
        {errors.city && <p className="text-red-500 text-sm mt-1">{errors.city}</p>}
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">Region/Province</label>
        <select
          value={formData.state}
          onChange={(e) => updateFormData('state', e.target.value)}
          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-orange-500"
        >
          <option>Colorado</option>
          <option>California</option>
          <option>New York</option>
          <option>Texas</option>
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">ZIP code</label>
        <input
          type="text"
          value={formData.zipCode}
          onChange={(e) => updateFormData('zipCode', e.target.value)}
          className={`w-full p-3 border rounded-lg focus:outline-none focus:border-orange-500 ${
            errors.zipCode ? 'border-red-500' : 'border-gray-300'
          }`}
        />
        {errors.zipCode && <p className="text-red-500 text-sm mt-1">{errors.zipCode}</p>}
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-500 mb-2">Country</label>
        <div className="flex items-center p-3 border border-gray-300 rounded-lg bg-gray-50">
          <span className="mr-2">🇺🇸</span>
          <span className="text-gray-500">United States</span>
        </div>
      </div>
    </div>

    <button
      onClick={handleNext}
      className="w-full bg-gray-300 text-gray-600 py-3 rounded-full mt-8 font-medium"
    >
      Continue
    </button>
  </div>
);

const ReviewStep = ({ formData, handleNext }) => (
  <div className="p-6 max-w-md mx-auto">
    <h1 className="text-2xl font-semibold text-gray-800 mb-6">Review details</h1>

    <div className="space-y-4">
      <div className="flex justify-between">
        <span className="text-gray-600">Recipient</span>
        <span className="text-gray-800">{formData.recipient}</span>
      </div>
      
      <div className="flex justify-between">
        <span className="text-gray-600">Destination</span>
        <span className="text-gray-800">{formData.destination}</span>
      </div>
      
      <div className="flex justify-between">
        <span className="text-gray-600">Delivery</span>
        <span className="text-gray-800">
          {formData.method === 'bank_deposit' 
            ? `Bank account •••• ${formData.bankAccount.slice(-4)}` 
            : `Cash pickup - ${formData.pickupCity}`}
        </span>
      </div>

      <div className="border-t pt-4">
        <div className="flex justify-between items-center">
          <span className="text-gray-800 font-medium">Sending amount</span>
          <div className="flex items-center">
            <span className="text-gray-800">{formData.sendingAmount} USD</span>
            <button className="text-orange-500 ml-2 text-sm">Edit ✏️</button>
          </div>
        </div>
      </div>

      <div className="flex justify-between">
        <span className="text-gray-600">Transfer Fees</span>
        <span className="text-gray-800">{formData.transferFees} USD</span>
      </div>
      
      <div className="flex justify-between">
        <span className="text-gray-600">Transfer taxes</span>
        <span className="text-gray-800">{formData.transferTaxes} USD</span>
      </div>
      
      <div className="flex justify-between font-medium">
        <span className="text-gray-800">Total to pay</span>
        <span className="text-gray-800">{formData.totalToPay} USD</span>
      </div>

      <div className="border-t pt-4">
        <div className="flex justify-between">
          <span className="text-gray-600">Exchange rate</span>
          <span className="text-gray-800">{formData.exchangeRate}</span>
        </div>
        
        <div className="flex justify-between mt-2">
          <span className="text-gray-600">Recipient receives*</span>
          <span className="text-gray-800">{formData.recipientReceives}</span>
        </div>
      </div>
    </div>

    <div className="mt-6 text-sm text-gray-500 space-y-3">
      <p>Any changes made to the selected payment method during the checkout process may result in adjustments to associated fees.</p>
      <p>*Please note: Recipient may receive less due to fees charged by the recipient's bank and foreign taxes.</p>
    </div>

    <div className="mt-6 text-sm">
      <p className="text-gray-800 mb-2">By pressing "Send" you:</p>
      <ul className="text-gray-600 space-y-1 text-sm">
        <li>• Agree to our <span className="text-orange-500">Terms and conditions</span> and <span className="text-orange-500">Privacy policy</span></li>
        <li>• Acknowledge having read our <span className="text-orange-500">Consumer fraud alert</span></li>
        <li>• Acknowledge you're not sending money on behalf of a third party</li>
        <li>• Acknowledge all information related to the transaction reflects accurately the information you have provided</li>
      </ul>
    </div>

    <p className="text-sm mt-4">See our <span className="text-orange-500">Processing times</span></p>

    <div className="mt-6 bg-yellow-50 p-4 rounded-lg">
      <h3 className="font-medium text-gray-800 mb-2">Consumer fraud alert</h3>
      <p className="text-sm text-gray-600 mb-2">Remember, don't send money:</p>
      <ul className="text-sm text-gray-600 space-y-1">
        <li>• To a stranger - only send money to person you know personally</li>
        <li>• To pay for an online purchase</li>
        <li>• To someone claiming to be a relative in a crisis for an emergency you have not confirmed</li>
        <li>• To pay for something in response to a telemarketing call. Telemarketers cannot sell you anything and take payment by money transfer from anyone in the US. This is illegal activity!</li>
      </ul>
      <p className="text-orange-500 text-sm mt-2 cursor-pointer">More info on fraud prevention</p>
    </div>

    <p className="text-sm text-gray-500 mt-4">Be advised that fraudulent transaction may result in the loss of your money with no recourse to get</p>

    <button
      onClick={handleNext}
      className="w-full bg-orange-500 text-white py-3 rounded-full mt-6 font-medium"
    >
      Continue to payment
    </button>
  </div>
);

const PaymentStep = ({ formData, updateFormData, errors, handleNext }) => (
  <div className="p-6 max-w-md mx-auto">
    <h1 className="text-2xl font-semibold text-gray-800 mb-6">Add your debit card</h1>

    <div className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">Card number</label>
        <input
          type="text"
          value={formData.cardNumber}
          onChange={(e) => updateFormData('cardNumber', e.target.value)}
          className={`w-full p-3 border-2 border-orange-500 rounded-lg focus:outline-none ${
            errors.cardNumber ? 'border-red-500' : 'border-orange-500'
          }`}
          placeholder="1234 5678 1234 5678"
        />
        {errors.cardNumber && <p className="text-red-500 text-sm mt-1">{errors.cardNumber}</p>}
        <div className="flex mt-2 space-x-2">
          <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCA0MCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjQwIiBoZWlnaHQ9IjI0IiByeD0iNCIgZmlsbD0iIzE0MzRCNyIvPgo8dGV4dCB4PSI4IiB5PSIxNiIgZmlsbD0id2hpdGUiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxMiI+VklTQTwvdGV4dD4KPC9zdmc+" alt="Visa" className="h-6" />
          <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCA0MCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjQwIiBoZWlnaHQ9IjI0IiByeD0iNCIgZmlsbD0iI0VCMDAxQiIvPgo8Y2lyY2xlIGN4PSIxNSIgY3k9IjEyIiByPSI3IiBmaWxsPSIjRkY1RjAwIiBmaWxsLW9wYWNpdHk9IjAuNzUiLz4KPGNpcmNsZSBjeD0iMjUiIGN5PSIxMiIgcj0iNyIgZmlsbD0iI0ZGNUYwMCIgZmlsbC1vcGFjaXR5PSIwLjc1Ii8+Cjwvc3ZnPg==" alt="Mastercard" className="h-6" />
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Expiration date</label>
          <input
            type="text"
            placeholder="MM/YY"
            value={formData.expirationDate}
            onChange={(e) => updateFormData('expirationDate', e.target.value)}
            className={`w-full p-3 border rounded-lg focus:outline-none focus:border-orange-500 ${
              errors.expirationDate ? 'border-red-500' : 'border-gray-300'
            }`}
          />
          {errors.expirationDate && <p className="text-red-500 text-sm mt-1">{errors.expirationDate}</p>}
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Security code</label>
          <div className="relative">
            <input
              type="text"
              placeholder="CVV"
              value={formData.securityCode}
              onChange={(e) => updateFormData('securityCode', e.target.value)}
              className={`w-full p-3 border rounded-lg focus:outline-none focus:border-orange-500 ${
                errors.securityCode ? 'border-red-500' : 'border-gray-300'
              }`}
            />
            <div className="absolute right-3 top-3 text-gray-400">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M4 4a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2H4zm12 2H4v8h12V6z"/>
                <path d="M6 8h8v4H6V8z"/>
              </svg>
            </div>
          </div>
          {errors.securityCode && <p className="text-red-500 text-sm mt-1">{errors.securityCode}</p>}
        </div>
      </div>

      <div>
        <div className="flex justify-between items-center mb-2">
          <label className="block text-sm font-medium text-gray-700">Billing address</label>
          <button className="text-gray-400">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
            </svg>
          </button>
        </div>
        <div className="p-3 bg-gray-50 rounded-lg text-gray-700 text-sm whitespace-pre-line">
          {formData.billingAddress}
        </div>
      </div>
    </div>

    <div className="mt-8 bg-gray-50 p-4 rounded-lg">
      <div className="flex justify-between items-center">
        <span className="text-lg font-medium">Total</span>
        <div className="flex items-center">
          <span className="text-lg font-medium">1002.00 USD</span>
          <svg className="w-4 h-4 ml-2" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        </div>
      </div>
    </div>

    <button
      onClick={handleNext}
      className="w-full bg-gray-300 text-gray-600 py-3 rounded-full mt-8 font-medium"
    >
      Pay
    </button>
  </div>
);

const ConfirmationStep = ({ formData }) => (
  <div className="p-6 max-w-md mx-auto">
    <div className="text-center mb-6">
      <h1 className="text-2xl font-semibold text-gray-800">Transfer Created</h1>
    </div>

    <div className="border-b flex">
      <button className="flex-1 py-3 text-center border-b-2 border-orange-500 text-orange-500 font-medium">
        Summary
      </button>
      <button className="flex-1 py-3 text-center text-gray-500">
        Timeline
      </button>
    </div>

    <div className="mt-6 space-y-4">
      <div className="flex justify-between">
        <span className="text-gray-600">PIN</span>
        <span className="text-gray-800">560974509764009</span>
      </div>
      
      <div className="flex justify-between">
        <span className="text-gray-600">Recipient</span>
        <span className="text-gray-800">{formData.recipient}</span>
      </div>
      
      <div className="flex justify-between">
        <span className="text-gray-600">Order number</span>
        <span className="text-gray-800">{formData.txid || 'MX1234567890'}</span>
      </div>
      
      <div className="flex justify-between">
        <span className="text-gray-600">Destination</span>
        <span className="text-gray-800">Mexico</span>
      </div>
      
      <div className="flex justify-between">
        <span className="text-gray-600">Recipient gets*</span>
        <span className="text-gray-800">{formData.recipientReceives.replace(',', ',')}</span>
      </div>
      
      <div className="flex justify-between">
        <span className="text-gray-600">Send to</span>
        <span className="text-gray-800">
          {formData.method === 'bank_deposit' 
            ? `${formData.bankName} •••• ${formData.bankAccount.slice(-4)}` 
            : `${formData.pickupNetwork} - ${formData.pickupCity}`}
        </span>
      </div>

      <div className="border-t pt-4">
        <div className="flex justify-between">
          <span className="text-gray-600">Sending</span>
          <span className="text-gray-800">100.00 USD</span>
        </div>
        
        <div className="flex justify-between">
          <span className="text-gray-600">Fees</span>
          <span className="text-gray-800">10.00 USD</span>
        </div>
        
        <div className="flex justify-between">
          <span className="text-gray-600">Taxes</span>
          <span className="text-gray-800">0.00 USD</span>
        </div>
        
        <div className="flex justify-between">
          <span className="text-gray-800">Total paid</span>
          <span className="text-gray-800">{parseFloat(formData.totalToPay) + 2.00} USD</span>
        </div>
        
        <div className="flex justify-between items-center mt-2">
          <span></span>
          <span className="text-orange-500 text-sm cursor-pointer">View receipt 🔗</span>
        </div>
      </div>

      <div className="flex justify-between mt-4">
        <span className="text-gray-600">Paid with</span>
        <span className="text-gray-800">Wells Fargo •••• 4325</span>
      </div>
    </div>

    <div className="mt-6 text-sm text-gray-500">
      <p>* Recipient may receive less due to fees charged by the recipient's bank and foreign taxes</p>
    </div>

    <div className="mt-8 space-y-3">
      <button className="w-full bg-green-500 text-white py-3 rounded-full font-medium">
        Return to WhatsApp
      </button>
      
      <button className="w-full text-gray-800 py-3 font-medium">
        Share order details
      </button>
    </div>
  </div>
);


const RiaMoneyTransfer = () => {
  // Parse URL parameters
  const getUrlParams = () => {
    // Check if window is defined (for server-side rendering or build environments)
    if (typeof window === 'undefined') {
        return {};
    }
    const urlParams = new URLSearchParams(window.location.search);
    return {
      txid: urlParams.get('txid') || '',
      token: urlParams.get('token') || '',
      sendAmount: urlParams.get('send_amount') || '100.00',
      totalToPayUsd: urlParams.get('total_to_pay_usd') || '110.00',
      feeUsd: urlParams.get('fee_usd') || '10.00',
      receiveAmountLocal: urlParams.get('receive_amount_local') || '1227.00',
      receiveCurrency: urlParams.get('receive_currency') || 'MXN',
      exchangeRate: urlParams.get('exchange_rate') || '12.27',
      recipientName: urlParams.get('recipient_name')?.replace(/\+/g, ' ') || 'Alfredo Perez',
      country: urlParams.get('country') || 'Mexico',
      method: urlParams.get('method') || 'bank_deposit',
      bankAccount: urlParams.get('bank_account') || '5678',
      bankName: urlParams.get('bank_name')?.replace(/\+/g, ' ') || 'BBVA',
      pickupCity: urlParams.get('pickup_city')?.replace(/\+/g, ' ') || '',
      pickupNetwork: urlParams.get('pickup_network')?.replace(/\+/g, ' ') || ''
    };
  };

  const [urlData] = useState(getUrlParams());
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    // Personal info
    firstName: '',
    lastName: '',
    email: '',
    birthMonth: '',
    birthDay: '',
    birthYear: '',
    
    // Address info
    address: '1 Main St',
    aptUnit: '',
    city: 'Los Angeles',
    state: 'California',
    zipCode: '96200',
    country: 'United States',
    
    // Transfer details (from URL)
    txid: urlData.txid,
    token: urlData.token,
    recipient: urlData.recipientName,
    destination: urlData.country,
    sendingAmount: urlData.sendAmount,
    transferFees: urlData.feeUsd,
    transferTaxes: '0.00',
    totalToPay: urlData.totalToPayUsd,
    exchangeRate: `1.00 USD = ${urlData.exchangeRate} ${urlData.receiveCurrency}`,
    recipientReceives: `${urlData.receiveAmountLocal} ${urlData.receiveCurrency}`,
    method: urlData.method,
    bankAccount: urlData.bankAccount,
    bankName: urlData.bankName,
    pickupCity: urlData.pickupCity,
    pickupNetwork: urlData.pickupNetwork,
    receiveCurrency: urlData.receiveCurrency,
    
    // Payment info
    cardNumber: '',
    expirationDate: '',
    securityCode: '',
    billingAddress: '1 Main St, Los Angeles, CA 96200'
  });

  const [errors, setErrors] = useState({});

  const validateStep = (step) => {
    const newErrors = {};
    
    if (step === 1) {
      if (!formData.firstName.trim()) newErrors.firstName = 'First name is required';
      if (!formData.lastName.trim()) newErrors.lastName = 'Last name is required';
      if (!formData.email.trim()) newErrors.email = 'Email is required';
      else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Invalid email format';
      if (!formData.birthMonth) newErrors.birthMonth = 'Month is required';
      if (!formData.birthDay) newErrors.birthDay = 'Day is required';
      if (!formData.birthYear) newErrors.birthYear = 'Year is required';
    } else if (step === 2) {
      if (!formData.address.trim()) newErrors.address = 'Address is required';
      if (!formData.city.trim()) newErrors.city = 'City is required';
      if (!formData.zipCode.trim()) newErrors.zipCode = 'ZIP code is required';
    } else if (step === 4) {
      if (!formData.cardNumber.trim()) newErrors.cardNumber = 'Card number is required';
      if (!formData.expirationDate.trim()) newErrors.expirationDate = 'Expiration date is required';
      if (!formData.securityCode.trim()) newErrors.securityCode = 'Security code is required';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (validateStep(currentStep)) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handleBack = () => {
    setCurrentStep(currentStep - 1);
  };

  const updateFormData = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }));
    }
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return <PersonalInfoStep formData={formData} updateFormData={updateFormData} errors={errors} handleNext={handleNext} />;
      case 2:
        return <AddressStep formData={formData} updateFormData={updateFormData} errors={errors} handleNext={handleNext} />;
      case 3:
        return <ReviewStep formData={formData} handleNext={handleNext} />;
      case 4:
        return <PaymentStep formData={formData} updateFormData={updateFormData} errors={errors} handleNext={handleNext} />;
      case 5:
        return <ConfirmationStep formData={formData} />;
      default:
        return <PersonalInfoStep formData={formData} updateFormData={updateFormData} errors={errors} handleNext={handleNext} />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header currentStep={currentStep} handleBack={handleBack} />
      <div className="pb-8">
        {renderStep()}
      </div>
    </div>
  );
};

export default RiaMoneyTransfer;