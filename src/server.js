const express = require('express');
const bodyParser = require('body-parser');
const app = express();

// Set up body-parser middleware
app.use(bodyParser.urlencoded({ extended: true }));

// Middleware to parse JSON body
app.use(express.json());

// Import Routers
const noteRouter = require('./routers/noteRouter'); 

// Use Routers
app.use('/notes', noteRouter );

// Import and sync the Sequelize models
const sequelize = require('./config/database');
const Memory = require('./models/noteModel');

sequelize.sync().then(() => {
    console.log('Database & tables created!');
}).catch((error) => {
    console.error('Unable to create database and tables:', error);
});

// Start the server
const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
