// // server.js
// const express = require('express');
// const mongoose = require('mongoose');
// const bodyParser = require('body-parser');

// const app = express();
// const PORT = process.env.PORT || 5000;

// // Connect to MongoDB
// mongoose.connect('mongodb+srv://<username>:<password>@<cluster-url>/<dbname>?retryWrites=true&w=majority', {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });

// const User = mongoose.model('User', new mongoose.Schema({
//   username: String,
//   password: String,
// }));

// app.use(bodyParser.json());

// // Authentication endpoint
// app.post('/api/login', async (req, res) => {
//   const { username, password } = req.body;
//   try {
//     const user = await User.findOne({ username, password });
//     if (user) {
//       res.json({ success: true });
//     } else {
//       res.status(401).json({ success: false, message: 'Invalid username or password' });
//     }
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ success: false, message: 'Internal server error' });
//   }
// });

// app.listen(PORT, () => {
//   console.log(`Server is running on http://localhost:${PORT}`);
// });
