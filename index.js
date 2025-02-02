import express from 'express';
import cors from 'cors';
import { v4 as uuidv4 } from 'uuid'; 

const app = express();

app.use(cors());

app.use(express.json());

let users = [
  { id: uuidv4(), name: 'Akratiya', email: 'Akratiya@example.com' },
  { id: uuidv4(), name: 'Lmaba', email: 'Lmba@example.com' },
];

// GET 
app.get('/users', (req, res) => {
  res.status(200).json(users);
});

// POST 
app.post('/users', (req, res) => {
  const { name, email } = req.body;
  if (!name || !email) {
    return res.status(400).json({ message: 'Name and email are required' });
  }
  
  
  const newUser = {
    id: uuidv4(),  
    name,
    email,
  };
  users.push(newUser);
  res.status(201).json(newUser);
});

// DELETE 
app.delete('/users/:id', (req, res) => {
  const { id } = req.params;
  users = users.filter((user) => user.id !== id);  // Compare ids as strings
  res.status(200).json({ message: `User with ID ${id} deleted` });
});

// Set server
app.listen(4000, () => {
  console.log('Server is running on http://localhost:4000');
});
