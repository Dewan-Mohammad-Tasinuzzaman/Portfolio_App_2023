const express = require('express');
const path = require('path');
const app = express();

// Serve static assets (e.g., bundled JS, CSS) from the build folder
app.use(express.static(path.join(__dirname, 'build')));

// Always serve the index.html for any route
app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
