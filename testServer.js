const express = require('express');
const app = express();
const port = 3000;

// Middleware to parse JSON requests
app.use(express.json());

// POST /items - Create a new item
app.post('/api/items', (req, res) => {
  res.status(201).json({
    id: "12345",
    name: req.body.name || "Sample Item",
    description: req.body.description || "A detailed description of the sample item",
  });
});

// PUT /items/:id - Update an item
app.put('/api/items/:id', (req, res) => {
  res.status(200).json({
    id: req.params.id,
    name: req.body.name || "Updated Item Name",
    description: req.body.description || "Updated description of the item",
  });
});

// DELETE /items/:id - Delete an item
app.delete('/api/items/:id', (req, res) => {
  res.status(204).send();
});

// Start the server
app.listen(port, () => {
  console.log(`Dummy server running at http://localhost:${port}/api`);
});
