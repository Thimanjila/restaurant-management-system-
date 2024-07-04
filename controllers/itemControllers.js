const itemService = require('../services/itemService');

exports.getAllItems = async (req, res) => {
  try {
    const items = await itemService.getAllItems();
    res.status(200).json(items);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.createItem = async (req, res) => {
  try {
    const newItem = await itemService.createItem(req.body);
    res.status(201).json(newItem);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};