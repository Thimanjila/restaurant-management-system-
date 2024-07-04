const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const authMiddleware = require('../middleware/authMiddleware');


router.get('/', authMiddleware.verifyToken, userController.getAllUsers);
router.post('/', userController.createUser);


module.exports = router;


