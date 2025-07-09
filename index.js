import postgres from 'postgres';
import fs from 'fs';

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
fs.writeFile(`./data/output.txt`, JSON.stringify(data), 'utf8', (err) => {
    if (err) {
        console.error('Error writing file: ', err);
        return;
    }
    console.log('File written succesfully');
})

console.log(data);