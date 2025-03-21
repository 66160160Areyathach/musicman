const express = require('express');
const app = express();

app.use(express.static('public')); // ให้โหลดไฟล์จากโฟลเดอร์ public

app.listen(3000, '0.0.0.0', () => {
  console.log('Server running on http://0.0.0.0:3000');
});