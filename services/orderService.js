const Order = require('../models/orderModel');

exports.getAllOrders = async () => {
  return await Order.find().populate('items');
};

exports.createOrder = async (orderData) => {
  const order = new Order(orderData);
  return await order.save();
};