const {Client} = require("pg");
const {argv} = require("node:process");


let SQL = [
    "CREATE TABLE IF NOT EXISTS messages (",
    "id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,",
    "username VARCHAR(100) NOT NULL,",
    "text VARCHAR(500) NOT NULL,",
    "date date NOT NULL,",
    "icon VARCHAR(1) NOT NULL",
    ");",
    "INSERT INTO messages (username, text, date, icon) ",
    "VALUES ",
    "('Amando', 'Hi there!', '2025-06-04', 'A'), ",
    "('Charles', 'Hello World!', '2025-06-04', 'C');"
];


SQL = SQL.join("");


async function main() {
    console.log("seeding...");
    const client = new Client({
        connectionString: `postgresql://${argv[4]}:${argv[5]}@${argv[2]}/${argv[3]}?sslmode=require`
    });
    await client.connect();
    await client.query(SQL);
    await client.end();
    console.log("done");
};

main();