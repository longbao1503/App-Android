// Import thư viện express, sqlite3 và cors
const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const cors = require('cors');  // Thêm dòng này

// Khởi tạo ứng dụng Express
const app = express();
const PORT = 3000;

// Sử dụng CORS để cho phép tất cả các nguồn truy cập
app.use(cors());  // Thêm dòng này

// Kết nối với cơ sở dữ liệu SQLite
const db = new sqlite3.Database('./scores.db', (err) => {
    if (err) console.error(err.message);
    console.log('Connected to the scores database.');
});

// Tạo bảng lưu điểm nếu chưa tồn tại
db.run(`CREATE TABLE IF NOT EXISTS scores (id INTEGER PRIMARY KEY, playerName TEXT, score INTEGER)`);

// Sử dụng express để xử lý dữ liệu dạng JSON
app.use(express.json());

// API lưu điểm
app.post('/scores', (req, res) => {
    const { playerName, score } = req.body;
    const query = `INSERT INTO scores (playerName, score) VALUES (?, ?)`;
    db.run(query, [playerName, score], function (err) {
        if (err) return res.status(500).json({ error: err.message });
        res.json({ message: 'Score saved successfully', id: this.lastID });
    });
});

// API lấy lịch sử điểm
app.get('/scores', (req, res) => {
    const query = `SELECT * FROM scores ORDER BY id DESC LIMIT 10`;
    db.all(query, [], (err, rows) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json(rows);
    });
});

// Khởi động server và lắng nghe ở cổng 3000
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
