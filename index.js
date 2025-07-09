import postgres from 'postgres';
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

console.log(data);