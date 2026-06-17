const express = require('express');
const db = require('./db');
const app = express();

app.use(express.json());
app.use(express.static('public'));

app.get('/data', async(req, res) => {
    const [rows] = await db.execute('SELECT * FROM data');
    res.json(rows)
});

app.post('/data', async(req, res) => {
    const { name, email } = req.body;
    await db.execute('INSERT INTO data (name, email) VALUES (?, ?)', [ name, email ]);
    res.json({ success: true })
});

app.delete('/data', async(req, res) => {
    await db.execute('DELETE FROM data');
    res.json({ success: true })
});

app.listen(3000, () => console.log('Server running on http://localhost:3000'))