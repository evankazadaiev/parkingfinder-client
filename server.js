import express from 'express';
import path from 'path';

const app = express();
// eslint-disable-next-line no-undef
const PORT = process.env.PORT || 5000;

// eslint-disable-next-line no-undef
app.use(express.static(path.join(__dirname, '..', 'dist')));

app.get('*', (req, res) => {
  // eslint-disable-next-line no-undef
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
