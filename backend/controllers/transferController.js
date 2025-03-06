const axios = require("axios");
const Transfer = require("../models/Transfer");
const User = require("../models/userModel");

exports.getRate = async (req, res) => {
  const { from, to, amount } = req.query;

  if (!from || !to || !amount) {
    return res.status(400).send("Missing required parameters: from, to, amount");
  }

  try {
    const response = await axios.get(
      `https://v6.exchangerate-api.com/v6/${process.env.EXCHANGERATE_API_KEY}/latest/${from}`
    );

    if (!response.data.conversion_rates[to]) {
      return res.status(400).send("Invalid currency code");
    }

    const rate = response.data.conversion_rates[to];
    const convertedAmount = rate * amount;
    res.json({ convertedAmount });
  } catch (error) {
    console.error(error);
    res.status(500).send("Error fetching conversion rate");
  }
};

exports.createTransfer = async (req, res) => {
  const { fromCountry, toCountry, amount, convertedAmount } = req.body;
  const userId = req.user._id; 

  try {
    const transfer = new Transfer({
      fromCountry,
      toCountry,
      amount,
      convertedAmount,
      user: userId,
    });
    await transfer.save();
    res.status(201).send("Transfer recorded");
  } catch (error) {
    console.error(error);
    res.status(500).send("Error recording transfer");
  }
};

exports.getTransfersByUser = async (req, res) => {
  const userId = req.user._id; // Get userId from the authenticated user

  try {
    const transfers = await Transfer.find({ user: userId });
    res.json(transfers);
  } catch (error) {
    console.error(error);
    res.status(500).send("Error fetching transfers");
  }
};

exports.deleteTransfer = async (req, res) => {
  const transferId = req.params.id;
  const userId = req.user._id; 
  try {
    const transfer = await Transfer.findOneAndDelete({
      _id: transferId,
      user: userId,
    });

    if (!transfer) {
      return res.status(404).send("Transfer not found or not authorized");
    }

    res.send("Transfer deleted");
  } catch (error) {
    console.error(error);
    res.status(500).send("Error deleting transfer");
  }
};
