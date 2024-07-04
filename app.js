const express = require('express');
const mongoose = require('mongoose');
const config = require('./config/config');
const userRoutes = require('./routes/userRoutes');
const itemRoutes = require('./routes/itemRoutes');
const orderRoutes = require('./routes/orderRoutes');

const app = express();


// Middleware
app.use(express.json());


// Routes
app.use('/api/users', userRoutes);
app.use('/api/items', itemRoutes);
app.use('/api/orders', orderRoutes);



// Connect to MongoDB
mongoose.connect(config.dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
 .then(() => console.log('MongoDB connected'))
 .catch(err => console.log(err));


// Start the server
const PORT = config.port;
app.listen(PORT, () => {
 console.log(`Server is running on port ${PORT}`);
});
