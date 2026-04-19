const db = require('./db');

async function setup() {
    await db.execute(`
        CREATE TABLE IF NOT EXISTS data (
            id INT AUTO_INCREMENT PRIMARY KEY,
            name VARCHAR(50),
            email VARCHAR(100) UNIQUE
            )
    `);
    console.log("Profile Table crated")
    process.exit();
}

setup();