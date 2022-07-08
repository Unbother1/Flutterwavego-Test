const dataSch = require('../models/feeModel');
const Calculate = require('../controllers/paymentCompute');
const { Transaction } = require('mongodb');


const dataController = {};


dataController.Payment = async (req, res, next) => {
  
  let { ID, Amount, Currency, CustormerEmail, SplitInfo } = Calculate.Data(req.body); 
  
  if (!dataSch.findById(ID)){
    const Transaction = await dataSch.findById(req.params._id);
  } else{
    const Transaction = new dataSch({ Amount, Currency, CustormerEmail, SplitInfo });
    await Transaction.save();
  }
  
  const data = Transaction; 

  const { payload } = await dataController.validLoginResponse(req, data, next);
  
    return res.status(200).json({
    payload
  })
    
  }

  dataController.validLoginResponse = async (req, data, next) => {
    try {

      const payload = {
        ID: data._id,
        Balance: data.Balance, 
        SplitBreakdown: data.SplitBreakdown
      };
  
      
      return { payload };
    } catch (err) {
      next(err);
    }
  };
  

module.exports = dataController;