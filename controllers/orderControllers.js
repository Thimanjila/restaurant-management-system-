const Order = require('../models/orderModel');
const orderService = require('../services/orderService');


exports.getAllOrders = async (req, res) => {
 try {
   const orders = await orderService.getAllOredrs();
   res.status(200).json(users);
 } catch (error) {
   res.status(500).json({ message: error.message });
 }
};


exports.createOrder = async (req, res) => {
 try {
   const newOrder = await orderService.createOrder(req.body);
   res.status(201).json(newOrder);
 } catch (error) {
   res.status(500).json({ message: error.message });
 }
};
