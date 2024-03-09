import express from 'express'

// Create an instance of Express
const app = express();
const PORT = 3000; // Define the port for your server to listen on

// Define a route handler for the root URL
app.get('/', (req, res) => {
  res.send('Hello, World!'); // Send a response to the client
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});