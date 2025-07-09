import postgres from 'postgres';
import fs from 'fs';

const path = `/data/output.txt`;
const sql = postgres(
    process.env.DATABASE_URL
    , {
        host: process.env.PGHOST
        , port: process.env.PGPORT
        , username: process.env.PGUSER
        , password: process.env.PGPASSWORD
    }
)

const data = await sql`select * from cluestats`;

// fs.writeFile(`${process.env.RAILWAY_VOLUME_MOUNT_PATH}/output.txt`, JSON.stringify(data), 'utf8', (err) => {
fs.writeFile(path, JSON.stringify(data), 'utf8', (err) => {
    if (err) {
        console.error('Error writing file: ', err);
        return;
    }
    console.log('File written succesfully');
});

// fs.readFile(path, 'utf8', (err, data) => {
//     if (err) {
//         console.error('Error reading file: ', err);
//         return;
//     }
//     console.log(data);
// });

console.log(data);