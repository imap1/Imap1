// Import required modules
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');


// Create an instance of the Express app
const app = express();

// Middleware
app.use(cors()); // Enable Cross-Origin Resource Sharing
app.use(bodyParser.json()); // Parse incoming JSON data

// Sample route to handle GET requests
app.get('/api/hello', (req, res) => {
  res.send('Hello, this is your backend server!');
});

// Sample route to handle POST requests
app.post('/api/data', (req, res) => {
  const data = req.body;
  // Here, you can process the data and perform any desired action
  console.log('Received data:', data);
  res.json({ message: 'Data received successfully.' });
});

// Start the server
const port = 3000; // You can choose any port number you prefer
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

const mongoDBUrl = 'mongodb://localhost:27017/your-database-name';

mongoose.connect(mongoDBUrl, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB database.');
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error);
  });

  // Import your models and other dependencies, if any
// const BusLocation = require('./models/BusLocation');

// Sample route to receive and store the live location of the school bus
app.post('/api/bus/location', (req, res) => {
    // Assuming you have a model called BusLocation
    const { latitude, longitude } = req.body;
    
    // Create a new BusLocation document and save it to the database
    const newBusLocation = new BusLocation({ latitude, longitude });
    newBusLocation.save()
      .then(() => {
        res.status(200).json({ message: 'Bus location updated successfully.' });
      })
      .catch((error) => {
        res.status(500).json({ message: 'Error saving bus location.', error });
      });
  });
  const port = process.env.PORT || 3000;

  app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
  });
    