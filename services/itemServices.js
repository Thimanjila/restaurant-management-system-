const Item = require('../models/itemModel');

exports.getAllItems = async () => {
  return await Item.find();
};

exports.createItem = async (itemData) => {
  const item = new Item(itemData);
  return await item.save();
};