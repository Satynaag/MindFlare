// Import required modules
import express from 'express';
import cors from 'cors';
import { v4 as uuidv4 } from 'uuid'; // Importing uuid for unique IDs

const app = express();

// Use CORS middleware for allowing cross-origin requests
app.use(cors());

// Middleware to parse JSON data from requests
app.use(express.json());

// Dummy array to store users
let users = [
  { id: uuidv4(), name: 'Akratiya', email: 'Akratiya@example.com' },
  { id: uuidv4(), name: 'Lmaba', email: 'Lmba@example.com' },
];

// GET /users: Returns the list of users
app.get('/users', (req, res) => {
  res.status(200).json(users);
});

// POST /users: Adds a new user
app.post('/users', (req, res) => {
  const { name, email } = req.body;
  if (!name || !email) {
    return res.status(400).json({ message: 'Name and email are required' });
  }
  
  // Generate a unique ID using uuid
  const newUser = {
    id: uuidv4(),  // Use uuid for unique ID
    name,
    email,
  };
  users.push(newUser);
  res.status(201).json(newUser);
});

// DELETE /users/:id: Deletes a user by ID
app.delete('/users/:id', (req, res) => {
  const { id } = req.params;
  users = users.filter((user) => user.id !== id);  // Compare ids as strings
  res.status(200).json({ message: `User with ID ${id} deleted` });
});

// Set the server to listen on port 4000
app.listen(4000, () => {
  console.log('Server is running on http://localhost:4000');
});
