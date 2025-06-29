import React, { useState } from 'react';

const DepositWithdraw = () => {
  const [message, setMessage] = useState('');
  const [messageType, setMessageType] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.target;
    const id = form.elements[0].value.trim();
    const amount = form.elements[1].value.trim();

    if (!id || !amount) {
      setMessage('All fields are required!');
      setMessageType('error');
    } else {
      setMessage('Transaction submitted successfully!');
      setMessageType('success');
      form.reset();
    }

    setTimeout(() => {
      setMessage('');
      setMessageType('');
    }, 3000);
  };

  return (
    <div className="bg-white p-4 ">
      <div className="max-w-md">
        {/* Toast Message */}
        {message && (
          <div
            className={`mb-4 px-4 py-2 rounded text-sm ${
              messageType === 'success'
                ? 'bg-green-100 text-green-700'
                : 'bg-red-100 text-red-700'
            }`}
          >
            {message}
          </div>
        )}

        {/*========== Deposit Form =============*/}
        <h2 className="font-dm md:font-[500] md:text-[20px] font-[500] text-[18px] mb-4">
          Deposit
        </h2>
        <form className="mb-[60px]" onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block font-dm md:font-[400] md:text-[16px] font-[400] text-[14px] mb-1">
              Enter Agent ID/User Number <span className="text-black">*</span>
            </label>
            <input
              type="text"
              className="w-full px-3 py-2 border border-gray-400 rounded bg-[#D9D9D9] focus:outline-blue-600"
            />
            <p className="font-dm md:font-[500] md:text-[10px] font-[500] text-[10px] mt-1">
              Name : Nancy Himel /
              <span className="text-red-600">Invalid ID</span>
            </p>
          </div>

          <div className="mb-4">
            <label className="block font-dm md:font-[400] md:text-[16px] font-[400] text-[14px] mb-1">
              Enter Amount <span className="text-black">*</span>
            </label>
            <input
              type="text"
              className="w-full px-3 py-2 border border-gray-400 rounded bg-[#D9D9D9] focus:outline-blue-600"
            />
          </div>

          <button
            type="submit"
            className="bg-black text-white px-6 py-2 rounded font-dm md:font-[500] md:text-[20px] font-[500] text-[16px]"
          >
            Submit
          </button>
        </form>

        {/*================== Withdraw Form ===========*/}
        <h2 className="font-dm md:font-[500] md:text-[20px] font-[500] text-[18px] mb-4">
          Withdraw
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block font-dm md:font-[400] md:text-[16px] font-[400] text-[14px] mb-1">
              Enter Agent ID/User Number <span className="text-black">*</span>
            </label>
            <input
              type="text"
              className="w-full px-3 py-2 border border-gray-400 rounded bg-[#D9D9D9] focus:outline-blue-600"
            />
            <p className="font-dm md:font-[500] md:text-[10px] font-[500] text-[10px] mt-1">
              Name : Nancy Himel /
              <span className="text-red-600">Invalid ID</span>
            </p>
          </div>

          <div className="mb-4">
            <label className="block font-dm md:font-[400] md:text-[16px] font-[400] text-[14px] mb-1">
              Enter Amount <span className="text-black">*</span>
            </label>
            <input
              type="text"
              className="w-full px-3 py-2 border border-gray-400 rounded bg-[#D9D9D9] focus:outline-blue-600"
            />
          </div>

          <button
            type="submit"
            className="bg-black text-white px-6 py-2 rounded font-dm md:font-[500] md:text-[20px] font-[500] text-[16px]"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default DepositWithdraw;
