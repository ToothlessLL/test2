import postgres from 'postgres';
import fs from 'fs';

// const path = `/data/output.txt`;
const sql = postgres(
    process.env.DATABASE_URL
    , {
        host: process.env.PGHOST
        , port: process.env.PGPORT
        , username: process.env.PGUSER
        , password: process.env.PGPASSWORD
    }
)

await sql`drop table cluestats;`;

await sql`
    CREATE TABLE clueStats (
        id	serial primary key,
        rsn	varchar(12),
        easy	INTEGER,
        medium	INTEGER,
        hard	INTEGER,
        elite	INTEGER,
        master	INTEGER,
        clue_date	date,
        easyRank	INTEGER,
        mediumRank	INTEGER,
        hardRank	INTEGER,
        eliteRank	INTEGER,
        masterRank	INTEGER
    );`;

await sql`
    CREATE TABLE manualDailyRSN (
	id serial primary key
	, rsn varchar(12)
);`;

await sql`
    INSERT INTO manualDailyRSN ("rsn") VALUES ('Icelandic');
    INSERT INTO manualDailyRSN ("rsn") VALUES ('Dont Funk Up');
    INSERT INTO manualDailyRSN ("rsn") VALUES ('Aphelian');
    INSERT INTO manualDailyRSN ("rsn") VALUES ('Qerq');
    INSERT INTO manualDailyRSN ("rsn") VALUES ('Arcanis25');
    INSERT INTO manualDailyRSN ("rsn") VALUES ('DominusJuris');
    INSERT INTO manualDailyRSN ("rsn") VALUES ('Aureys');
    INSERT INTO manualDailyRSN ("rsn") VALUES ('Golden Globe');
    INSERT INTO manualDailyRSN ("rsn") VALUES ('Zowkii');
    INSERT INTO manualDailyRSN ("rsn") VALUES ('StarkDizzle');
    INSERT INTO manualDailyRSN ("rsn") VALUES ('K ayla');
    INSERT INTO manualDailyRSN ("rsn") VALUES ('Saltea');
    INSERT INTO manualDailyRSN ("rsn") VALUES ('Chris D');
    INSERT INTO manualDailyRSN ("rsn") VALUES ('10k im yours');
    INSERT INTO manualDailyRSN ("rsn") VALUES ('Lano39');
    INSERT INTO manualDailyRSN ("rsn") VALUES ('Sarah-Janey');
    INSERT INTO manualDailyRSN ("rsn") VALUES ('Shquo');
    INSERT INTO manualDailyRSN ("rsn") VALUES ('Walliebean96');
    INSERT INTO manualDailyRSN ("rsn") VALUES ('Brono');
    INSERT INTO manualDailyRSN ("rsn") VALUES ('Sully5');
    INSERT INTO manualDailyRSN ("rsn") VALUES ('Californ1a');
    INSERT INTO manualDailyRSN ("rsn") VALUES ('Road Apples');
    INSERT INTO manualDailyRSN ("rsn") VALUES ('crazye97');
    INSERT INTO manualDailyRSN ("rsn") VALUES ('LilMcGinley');
    INSERT INTO manualDailyRSN ("rsn") VALUES ('G l i z z y');
    INSERT INTO manualDailyRSN ("rsn") VALUES ('Im Wizzy');
    INSERT INTO manualDailyRSN ("rsn") VALUES ('Laiskimus');
    INSERT INTO manualDailyRSN ("rsn") VALUES ('mcnurgon');
    INSERT INTO manualDailyRSN ("rsn") VALUES ('cheeselets');
    INSERT INTO manualDailyRSN ("rsn") VALUES ('Joe M');
    INSERT INTO manualDailyRSN ("rsn") VALUES ('wing wong');
    INSERT INTO manualDailyRSN ("rsn") VALUES ('Mek');
    INSERT INTO manualDailyRSN ("rsn") VALUES ('Campos RS');
    INSERT INTO manualDailyRSN ("rsn") VALUES ('o Charlotte');
    INSERT INTO manualDailyRSN ("rsn") VALUES ('PointedSword');
    INSERT INTO manualDailyRSN ("rsn") VALUES ('Garage gym');
    INSERT INTO manualDailyRSN ("rsn") VALUES ('Larazaholmes');
    INSERT INTO manualDailyRSN ("rsn") VALUES ('Vixen02');
    INSERT INTO manualDailyRSN ("rsn") VALUES ('Signature');
    INSERT INTO manualDailyRSN ("rsn") VALUES ('KOLONY');
    INSERT INTO manualDailyRSN ("rsn") VALUES ('DemonAnnie');
    INSERT INTO manualDailyRSN ("rsn") VALUES ('Ratatosk');
    INSERT INTO manualDailyRSN ("rsn") VALUES ('Camps');
    INSERT INTO manualDailyRSN ("rsn") VALUES ('AndyB');
    INSERT INTO manualDailyRSN ("rsn") VALUES ('MrTC');
    INSERT INTO manualDailyRSN ("rsn") VALUES ('hida masaki');
    INSERT INTO manualDailyRSN ("rsn") VALUES ('Uri');
    INSERT INTO manualDailyRSN ("rsn") VALUES ('Clueski');
    INSERT INTO manualDailyRSN ("rsn") VALUES ('Uther');
    INSERT INTO manualDailyRSN ("rsn") VALUES ('Regicidal');
    INSERT INTO manualDailyRSN ("rsn") VALUES ('Divine Days');
    INSERT INTO manualDailyRSN ("rsn") VALUES ('Kolwezy');
    INSERT INTO manualDailyRSN ("rsn") VALUES ('xGibb');
    INSERT INTO manualDailyRSN ("rsn") VALUES ('JackofTrades');
    INSERT INTO manualDailyRSN ("rsn") VALUES ('Beausz');
    INSERT INTO manualDailyRSN ("rsn") VALUES ('TripleDylan');
    INSERT INTO manualDailyRSN ("rsn") VALUES ('Quintis');
    INSERT INTO manualDailyRSN ("rsn") VALUES ('Xindrjayzda');
    INSERT INTO manualDailyRSN ("rsn") VALUES ('Emba');
    INSERT INTO manualDailyRSN ("rsn") VALUES ('Y l a r i a');
    INSERT INTO manualDailyRSN ("rsn") VALUES ('Fedal');
    INSERT INTO manualDailyRSN ("rsn") VALUES ('Dudey xD');
    INSERT INTO manualDailyRSN ("rsn") VALUES ('muuuuuuuuuuu');
    INSERT INTO manualDailyRSN ("rsn") VALUES ('l33');
    INSERT INTO manualDailyRSN ("rsn") VALUES ('The Chud');
    INSERT INTO manualDailyRSN ("rsn") VALUES ('Base Man');
    INSERT INTO manualDailyRSN ("rsn") VALUES ('Jeanine');
    INSERT INTO manualDailyRSN ("rsn") VALUES ('Freshkimo');
    INSERT INTO manualDailyRSN ("rsn") VALUES ('Theump');
    INSERT INTO manualDailyRSN ("rsn") VALUES ('Raul');
    INSERT INTO manualDailyRSN ("rsn") VALUES ('Dutchy1997');
    INSERT INTO manualDailyRSN ("rsn") VALUES ('Uh Mazee');
    INSERT INTO manualDailyRSN ("rsn") VALUES ('Clys');
    INSERT INTO manualDailyRSN ("rsn") VALUES ('wiskiehotel');
    INSERT INTO manualDailyRSN ("rsn") VALUES ('clue spoon');
    INSERT INTO manualDailyRSN ("rsn") VALUES ('Sports Bra');
    INSERT INTO manualDailyRSN ("rsn") VALUES ('Exodeus');
    INSERT INTO manualDailyRSN ("rsn") VALUES ('LarsTarzan');
    INSERT INTO manualDailyRSN ("rsn") VALUES ('Jamma300');
    INSERT INTO manualDailyRSN ("rsn") VALUES ('Kunst');
    INSERT INTO manualDailyRSN ("rsn") VALUES ('LovveL');
    INSERT INTO manualDailyRSN ("rsn") VALUES ('Bjorns0n');
    INSERT INTO manualDailyRSN ("rsn") VALUES ('snicket69');
    INSERT INTO manualDailyRSN ("rsn") VALUES ('Finally');
    INSERT INTO manualDailyRSN ("rsn") VALUES ('2ndAmendment');
    INSERT INTO manualDailyRSN ("rsn") VALUES ('Briflex');
    INSERT INTO manualDailyRSN ("rsn") VALUES ('dpvsss');
    INSERT INTO manualDailyRSN ("rsn") VALUES ('Zesty Yeti');
    INSERT INTO manualDailyRSN ("rsn") VALUES ('Yeps');
    INSERT INTO manualDailyRSN ("rsn") VALUES ('Curtizio');
    INSERT INTO manualDailyRSN ("rsn") VALUES ('Welshy');
    INSERT INTO manualDailyRSN ("rsn") VALUES ('miracle666');
    INSERT INTO manualDailyRSN ("rsn") VALUES ('Miss Dopey');
    INSERT INTO manualDailyRSN ("rsn") VALUES ('civic_tuner1');
    INSERT INTO manualDailyRSN ("rsn") VALUES ('Zoink');
    INSERT INTO manualDailyRSN ("rsn") VALUES ('Zte');
    INSERT INTO manualDailyRSN ("rsn") VALUES ('Dark Azonic');
    INSERT INTO manualDailyRSN ("rsn") VALUES ('Clue Lover');
    INSERT INTO manualDailyRSN ("rsn") VALUES ('MrInfi');
    INSERT INTO manualDailyRSN ("rsn") VALUES ('Mr Cob');
    INSERT INTO manualDailyRSN ("rsn") VALUES ('JabbaWut');
    INSERT INTO manualDailyRSN ("rsn") VALUES ('Ecruteak');
    INSERT INTO manualDailyRSN ("rsn") VALUES ('bojio');
    INSERT INTO manualDailyRSN ("rsn") VALUES ('Phyzzix4PF');
    INSERT INTO manualDailyRSN ("rsn") VALUES ('zodai');
    INSERT INTO manualDailyRSN ("rsn") VALUES ('Play to Dye');
    INSERT INTO manualDailyRSN ("rsn") VALUES ('Muzuzo');
    INSERT INTO manualDailyRSN ("rsn") VALUES ('Flipp3456');
    INSERT INTO manualDailyRSN ("rsn") VALUES ('Elba');
    INSERT INTO manualDailyRSN ("rsn") VALUES ('Benji Hoagie');
    INSERT INTO manualDailyRSN ("rsn") VALUES ('Pentzel');
    INSERT INTO manualDailyRSN ("rsn") VALUES ('Iron Pentzel');
    INSERT INTO manualDailyRSN ("rsn") VALUES ('Doom 4112');
    INSERT INTO manualDailyRSN ("rsn") VALUES ('Firemakers');
    INSERT INTO manualDailyRSN ("rsn") VALUES ('clues and dg');
    INSERT INTO manualDailyRSN ("rsn") VALUES ('Finekraken');
    INSERT INTO manualDailyRSN ("rsn") VALUES ('Yooper');
    INSERT INTO manualDailyRSN ("rsn") VALUES ('McNee');
    INSERT INTO manualDailyRSN ("rsn") VALUES ('SOPHLE DEE');
    INSERT INTO manualDailyRSN ("rsn") VALUES ('Gdubs');
    INSERT INTO manualDailyRSN ("rsn") VALUES ('Axy');
    INSERT INTO manualDailyRSN ("rsn") VALUES ('lSeanl');
    INSERT INTO manualDailyRSN ("rsn") VALUES ('Altezara');
    INSERT INTO manualDailyRSN ("rsn") VALUES ('0rland0Smith');
    INSERT INTO manualDailyRSN ("rsn") VALUES ('xaj');
    INSERT INTO manualDailyRSN ("rsn") VALUES ('wtf alan');
    INSERT INTO manualDailyRSN ("rsn") VALUES ('suky nuty');
    INSERT INTO manualDailyRSN ("rsn") VALUES ('uneedme15');
    INSERT INTO manualDailyRSN ("rsn") VALUES ('wardikov');
    INSERT INTO manualDailyRSN ("rsn") VALUES ('canadian ken');
    INSERT INTO manualDailyRSN ("rsn") VALUES ('Annapoly');
    INSERT INTO manualDailyRSN ("rsn") VALUES ('birdie60');
    INSERT INTO manualDailyRSN ("rsn") VALUES ('Mr and Mr');
    INSERT INTO manualDailyRSN ("rsn") VALUES ('RakThalosh');
    INSERT INTO manualDailyRSN ("rsn") VALUES ('DutchyTrails');
    INSERT INTO manualDailyRSN ("rsn") VALUES ('Kyurem');
    INSERT INTO manualDailyRSN ("rsn") VALUES ('tcf99');
    INSERT INTO manualDailyRSN ("rsn") VALUES ('crime mob');
    INSERT INTO manualDailyRSN ("rsn") VALUES ('Tomasz');
    INSERT INTO manualDailyRSN ("rsn") VALUES ('binbroughton');
    INSERT INTO manualDailyRSN ("rsn") VALUES ('Eastment');
    INSERT INTO manualDailyRSN ("rsn") VALUES ('Oro Siempre');
    INSERT INTO manualDailyRSN ("rsn") VALUES ('cuarteto');
`;

// const data = await sql`select * from cluestats`;

// // fs.writeFile(`${process.env.RAILWAY_VOLUME_MOUNT_PATH}/output.txt`, JSON.stringify(data), 'utf8', (err) => {
// // fs.writeFile(path, JSON.stringify(data), 'utf8', (err) => {
// //     if (err) {
// //         console.error('Error writing file: ', err);
// //         return;
// //     }
// //     console.log('File written succesfully');
// // });

// fs.readFile(path, 'utf8', (err, data) => {
//     if (err) {
//         console.error('Error reading file: ', err);
//         return;
//     }
//     console.log(data);
// });

// console.log(data);