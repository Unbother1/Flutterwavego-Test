// Importing required files 
const ErrorHandler = require('../utils/errorHandler');
const catchAsyncErrors = require('../middleware/catchAsyncErrors');

const Fees = require('../models/feeModel');

// @desc    Get all fees
// @route   GET /fees
// @access  Public
const getAllFees = (req, res) => {
  res.status(200).json({
    success: true,
    message: "This is to get all files",
  });
};

// @desc    Create new Fee
// @route   POST /fees
// @access  Public
const postFees = (req, res) => {
  res.status(200).json({
    success: true,
    message: "This is create fees",
  });
};

// @desc    Get the slit fees
// @route   GET /split-payments/compute
// @access  Public
const postFeeComputation = (req, res) => {
  res.status(200).json({
    success: true,
    message: "This is to perform computation",
  });
};


// @desc    Delete Fees
// @route   DELETE /fees
// @access  Public
const deleteFees = (req, res) => {
  res.status(200).json({
    success: true,
    message: "This is to delete fees",
  });
};

module.exports = {
  getAllFees,
  postFees,
  postFeeComputation,
  deleteFees,
};
