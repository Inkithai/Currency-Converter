import React, { useState } from "react";
import axios from "../../api/axios";
import { Select, Input, Button, message, Modal } from "antd";
import TransferHistory from "../TransferHistory/TransferHistory";
import { useAuth } from "../../context/authContext";

const { Option } = Select;

const CurrencyConverter = () => {
  const { user } = useAuth();
  const [fromCountry, setFromCountry] = useState("USD");
  const [toCountry, setToCountry] = useState("LKR");
  const [amount, setAmount] = useState("");
  const [convertedAmount, setConvertedAmount] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);

  const handleConvert = async () => {
    if (!amount) {
      message.error("Please enter a valid amount.");
      return;
    }
    try {
      const response = await axios.get(`/rate`, {
        params: { from: fromCountry, to: toCountry, amount },
      });
      setConvertedAmount(response.data.convertedAmount);
    } catch (error) {
      console.error(error);
      message.error("Conversion failed. Please try again.");
    }
  };

  const handleTransfer = async () => {
    if (!convertedAmount) {
      message.error("Please perform a conversion first.");
      return;
    }
    try {
      await axios.post(`/transfer`, {
        fromCountry,
        toCountry,
        amount,
        convertedAmount,
        userId: user._id,
      });
      message.success("Transfer successful!");
    } catch (error) {
      console.error(error);
      message.error("Transfer failed. Please try again.");
    }
  };

  const handleOpenModal = () => {
    setModalVisible(true);
  };

  const handleCloseModal = () => {
    setModalVisible(false);
  };

  return (
    <div className="max-w-lg mx-auto bg-purple-100 rounded-3xl p-8 shadow-lg">
      <h2 className="text-center text-xl font-semibold text-purple-800 mb-6">
        Currency Converter
      </h2>
      <div className="mb-6">
        <label className="block text-sm font-medium text-purple-700 mb-2">
          From Country
        </label>
        <Select
          className="w-full"
          value={fromCountry}
          onChange={(value) => setFromCountry(value)}
        >
          <Option value="USD">USA (USD)</Option>
          <Option value="LKR">Sri Lanka (LKR)</Option>
          <Option value="AUD">Australia (AUD)</Option>
          <Option value="INR">India (INR)</Option>
        </Select>
      </div>
      <div className="mb-6">
        <label className="block text-sm font-medium text-purple-700 mb-2">
          To Country
        </label>
        <Select
          className="w-full"
          value={toCountry}
          onChange={(value) => setToCountry(value)}
        >
          <Option value="USD">USA (USD)</Option>
          <Option value="LKR">Sri Lanka (LKR)</Option>
          <Option value="AUD">Australia (AUD)</Option>
          <Option value="INR">India (INR)</Option>
        </Select>
      </div>
      <div className="mb-6">
        <label className="block text-sm font-medium text-purple-700 mb-2">
          Amount
        </label>
        <Input
          type="number"
          className="w-full border-purple-400"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
      </div>
      <div className="flex items-center space-x-4 mb-6">
        <Button className="bg-purple-600 text-white hover:bg-purple-700" onClick={handleConvert}>
          Convert
        </Button>
        {convertedAmount && (
          <div className="text-sm text-purple-800 font-semibold">
            Converted Amount: {convertedAmount}
          </div>
        )}
      </div>
      <div className="flex flex-col gap-3">
        {user ? (
          <>
            <Button className="bg-purple-700 text-white hover:bg-purple-800" block onClick={handleTransfer}>
              Transfer
            </Button>
            <Button className="bg-purple-500 text-white hover:bg-purple-600" block onClick={handleOpenModal}>
              View Transfer History
            </Button>
          </>
        ) : (
          <p className="text-sm text-purple-600 text-center">
            Feel free to convert amounts! However, you'll need to log in to transfer funds or view your transaction history.          </p>
        )}
      </div>

      {/* Modal for Transfer History */}
      {user && (
        <TransferHistory
          modalVisible={modalVisible}
          closeModal={handleCloseModal}
          userId={user._id}
        />
      )}
    </div>
  );
};

export default CurrencyConverter;