const express = require('express');
const app = express();
let users = [
  { uid: 1, name: 'zss' },
  { uid: 2, name: 'mkt' },
];
app.get('/users', function getUsers(req, res) {
  return res.json(users);
});
app.get('/users/:id', function getUsers(req, res) {
  const id = req.params.id;
  const user = users.find((user) => user.uid.toString() === id);
  if (!user) return res.status(404).json('User not found');
  return res.json(user);
});
app.listen(5000, () => console.log('Server http://localhost:5000'));
