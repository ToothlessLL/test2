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

await sql`insert into cluestats (easy, clue_date) values (402907, ${new Date(1742083200000)})`;
await sql`insert into cluestats (easy, clue_date) values (273772, ${new Date(1742083200000)})`;



// await sql`drop table cluestats;`;

// await sql`
//     CREATE TABLE clueStats (
//         id	serial primary key,
//         rsn	varchar(12),
//         easy	INTEGER,
//         medium	INTEGER,
//         hard	INTEGER,
//         elite	INTEGER,
//         master	INTEGER,
//         clue_date	date,
//         easyRank	INTEGER,
//         mediumRank	INTEGER,
//         hardRank	INTEGER,
//         eliteRank	INTEGER,
//         masterRank	INTEGER
//     );`;

// await sql`
//     CREATE TABLE manualDailyRSN (
// 	id serial primary key
// 	, rsn varchar(12)
// );`;

// await sql`INSERT INTO manualDailyRSN ("rsn") VALUES ('Icelandic');`; 
// await sql`INSERT INTO manualDailyRSN ("rsn") VALUES ('Dont Funk Up');`; 
// await sql`INSERT INTO manualDailyRSN ("rsn") VALUES ('Aphelian');`; 
// await sql`INSERT INTO manualDailyRSN ("rsn") VALUES ('Qerq');`; 
// await sql`INSERT INTO manualDailyRSN ("rsn") VALUES ('Arcanis25');`; 
// await sql`INSERT INTO manualDailyRSN ("rsn") VALUES ('DominusJuris');`; 
// await sql`INSERT INTO manualDailyRSN ("rsn") VALUES ('Aureys');`; 
// await sql`INSERT INTO manualDailyRSN ("rsn") VALUES ('Golden Globe');`; 
// await sql`INSERT INTO manualDailyRSN ("rsn") VALUES ('Zowkii');`; 
// await sql`INSERT INTO manualDailyRSN ("rsn") VALUES ('StarkDizzle');`; 
// await sql`INSERT INTO manualDailyRSN ("rsn") VALUES ('K ayla');`; 
// await sql`INSERT INTO manualDailyRSN ("rsn") VALUES ('Saltea');`; 
// await sql`INSERT INTO manualDailyRSN ("rsn") VALUES ('Chris D');`; 
// await sql`INSERT INTO manualDailyRSN ("rsn") VALUES ('10k im yours');`; 
// await sql`INSERT INTO manualDailyRSN ("rsn") VALUES ('Lano39');`; 
// await sql`INSERT INTO manualDailyRSN ("rsn") VALUES ('Sarah-Janey');`; 
// await sql`INSERT INTO manualDailyRSN ("rsn") VALUES ('Shquo');`; 
// await sql`INSERT INTO manualDailyRSN ("rsn") VALUES ('Walliebean96');`; 
// await sql`INSERT INTO manualDailyRSN ("rsn") VALUES ('Brono');`; 
// await sql`INSERT INTO manualDailyRSN ("rsn") VALUES ('Sully5');`; 
// await sql`INSERT INTO manualDailyRSN ("rsn") VALUES ('Californ1a');`; 
// await sql`INSERT INTO manualDailyRSN ("rsn") VALUES ('Road Apples');`; 
// await sql`INSERT INTO manualDailyRSN ("rsn") VALUES ('crazye97');`; 
// await sql`INSERT INTO manualDailyRSN ("rsn") VALUES ('LilMcGinley');`; 
// await sql`INSERT INTO manualDailyRSN ("rsn") VALUES ('G l i z z y');`; 
// await sql`INSERT INTO manualDailyRSN ("rsn") VALUES ('Im Wizzy');`; 
// await sql`INSERT INTO manualDailyRSN ("rsn") VALUES ('Laiskimus');`; 
// await sql`INSERT INTO manualDailyRSN ("rsn") VALUES ('mcnurgon');`; 
// await sql`INSERT INTO manualDailyRSN ("rsn") VALUES ('cheeselets');`; 
// await sql`INSERT INTO manualDailyRSN ("rsn") VALUES ('Joe M');`; 
// await sql`INSERT INTO manualDailyRSN ("rsn") VALUES ('wing wong');`; 
// await sql`INSERT INTO manualDailyRSN ("rsn") VALUES ('Mek');`; 
// await sql`INSERT INTO manualDailyRSN ("rsn") VALUES ('Campos RS');`; 
// await sql`INSERT INTO manualDailyRSN ("rsn") VALUES ('o Charlotte');`; 
// await sql`INSERT INTO manualDailyRSN ("rsn") VALUES ('PointedSword');`; 
// await sql`INSERT INTO manualDailyRSN ("rsn") VALUES ('Garage gym');`; 
// await sql`INSERT INTO manualDailyRSN ("rsn") VALUES ('Larazaholmes');`; 
// await sql`INSERT INTO manualDailyRSN ("rsn") VALUES ('Vixen02');`; 
// await sql`INSERT INTO manualDailyRSN ("rsn") VALUES ('Signature');`; 
// await sql`INSERT INTO manualDailyRSN ("rsn") VALUES ('KOLONY');`; 
// await sql`INSERT INTO manualDailyRSN ("rsn") VALUES ('DemonAnnie');`; 
// await sql`INSERT INTO manualDailyRSN ("rsn") VALUES ('Ratatosk');`; 
// await sql`INSERT INTO manualDailyRSN ("rsn") VALUES ('Camps');`; 
// await sql`INSERT INTO manualDailyRSN ("rsn") VALUES ('AndyB');`; 
// await sql`INSERT INTO manualDailyRSN ("rsn") VALUES ('MrTC');`; 
// await sql`INSERT INTO manualDailyRSN ("rsn") VALUES ('hida masaki');`; 
// await sql`INSERT INTO manualDailyRSN ("rsn") VALUES ('Uri');`; 
// await sql`INSERT INTO manualDailyRSN ("rsn") VALUES ('Clueski');`; 
// await sql`INSERT INTO manualDailyRSN ("rsn") VALUES ('Uther');`; 
// await sql`INSERT INTO manualDailyRSN ("rsn") VALUES ('Regicidal');`; 
// await sql`INSERT INTO manualDailyRSN ("rsn") VALUES ('Divine Days');`; 
// await sql`INSERT INTO manualDailyRSN ("rsn") VALUES ('Kolwezy');`; 
// await sql`INSERT INTO manualDailyRSN ("rsn") VALUES ('xGibb');`; 
// await sql`INSERT INTO manualDailyRSN ("rsn") VALUES ('JackofTrades');`; 
// await sql`INSERT INTO manualDailyRSN ("rsn") VALUES ('Beausz');`; 
// await sql`INSERT INTO manualDailyRSN ("rsn") VALUES ('TripleDylan');`; 
// await sql`INSERT INTO manualDailyRSN ("rsn") VALUES ('Quintis');`; 
// await sql`INSERT INTO manualDailyRSN ("rsn") VALUES ('Xindrjayzda');`; 
// await sql`INSERT INTO manualDailyRSN ("rsn") VALUES ('Emba');`; 
// await sql`INSERT INTO manualDailyRSN ("rsn") VALUES ('Y l a r i a');`; 
// await sql`INSERT INTO manualDailyRSN ("rsn") VALUES ('Fedal');`; 
// await sql`INSERT INTO manualDailyRSN ("rsn") VALUES ('Dudey xD');`; 
// await sql`INSERT INTO manualDailyRSN ("rsn") VALUES ('muuuuuuuuuuu');`; 
// await sql`INSERT INTO manualDailyRSN ("rsn") VALUES ('l33');`; 
// await sql`INSERT INTO manualDailyRSN ("rsn") VALUES ('The Chud');`; 
// await sql`INSERT INTO manualDailyRSN ("rsn") VALUES ('Base Man');`; 
// await sql`INSERT INTO manualDailyRSN ("rsn") VALUES ('Jeanine');`; 
// await sql`INSERT INTO manualDailyRSN ("rsn") VALUES ('Freshkimo');`; 
// await sql`INSERT INTO manualDailyRSN ("rsn") VALUES ('Theump');`; 
// await sql`INSERT INTO manualDailyRSN ("rsn") VALUES ('Raul');`; 
// await sql`INSERT INTO manualDailyRSN ("rsn") VALUES ('Dutchy1997');`; 
// await sql`INSERT INTO manualDailyRSN ("rsn") VALUES ('Uh Mazee');`; 
// await sql`INSERT INTO manualDailyRSN ("rsn") VALUES ('Clys');`; 
// await sql`INSERT INTO manualDailyRSN ("rsn") VALUES ('wiskiehotel');`; 
// await sql`INSERT INTO manualDailyRSN ("rsn") VALUES ('clue spoon');`; 
// await sql`INSERT INTO manualDailyRSN ("rsn") VALUES ('Sports Bra');`; 
// await sql`INSERT INTO manualDailyRSN ("rsn") VALUES ('Exodeus');`; 
// await sql`INSERT INTO manualDailyRSN ("rsn") VALUES ('LarsTarzan');`; 
// await sql`INSERT INTO manualDailyRSN ("rsn") VALUES ('Jamma300');`; 
// await sql`INSERT INTO manualDailyRSN ("rsn") VALUES ('Kunst');`; 
// await sql`INSERT INTO manualDailyRSN ("rsn") VALUES ('LovveL');`; 
// await sql`INSERT INTO manualDailyRSN ("rsn") VALUES ('Bjorns0n');`; 
// await sql`INSERT INTO manualDailyRSN ("rsn") VALUES ('snicket69');`; 
// await sql`INSERT INTO manualDailyRSN ("rsn") VALUES ('Finally');`; 
// await sql`INSERT INTO manualDailyRSN ("rsn") VALUES ('2ndAmendment');`; 
// await sql`INSERT INTO manualDailyRSN ("rsn") VALUES ('Briflex');`; 
// await sql`INSERT INTO manualDailyRSN ("rsn") VALUES ('dpvsss');`; 
// await sql`INSERT INTO manualDailyRSN ("rsn") VALUES ('Zesty Yeti');`; 
// await sql`INSERT INTO manualDailyRSN ("rsn") VALUES ('Yeps');`; 
// await sql`INSERT INTO manualDailyRSN ("rsn") VALUES ('Curtizio');`; 
// await sql`INSERT INTO manualDailyRSN ("rsn") VALUES ('Welshy');`; 
// await sql`INSERT INTO manualDailyRSN ("rsn") VALUES ('miracle666');`; 
// await sql`INSERT INTO manualDailyRSN ("rsn") VALUES ('Miss Dopey');`; 
// await sql`INSERT INTO manualDailyRSN ("rsn") VALUES ('civic_tuner1');`; 
// await sql`INSERT INTO manualDailyRSN ("rsn") VALUES ('Zoink');`; 
// await sql`INSERT INTO manualDailyRSN ("rsn") VALUES ('Zte');`; 
// await sql`INSERT INTO manualDailyRSN ("rsn") VALUES ('Dark Azonic');`; 
// await sql`INSERT INTO manualDailyRSN ("rsn") VALUES ('Clue Lover');`; 
// await sql`INSERT INTO manualDailyRSN ("rsn") VALUES ('MrInfi');`; 
// await sql`INSERT INTO manualDailyRSN ("rsn") VALUES ('Mr Cob');`; 
// await sql`INSERT INTO manualDailyRSN ("rsn") VALUES ('JabbaWut');`; 
// await sql`INSERT INTO manualDailyRSN ("rsn") VALUES ('Ecruteak');`; 
// await sql`INSERT INTO manualDailyRSN ("rsn") VALUES ('bojio');`; 
// await sql`INSERT INTO manualDailyRSN ("rsn") VALUES ('Phyzzix4PF');`; 
// await sql`INSERT INTO manualDailyRSN ("rsn") VALUES ('zodai');`; 
// await sql`INSERT INTO manualDailyRSN ("rsn") VALUES ('Play to Dye');`; 
// await sql`INSERT INTO manualDailyRSN ("rsn") VALUES ('Muzuzo');`; 
// await sql`INSERT INTO manualDailyRSN ("rsn") VALUES ('Flipp3456');`; 
// await sql`INSERT INTO manualDailyRSN ("rsn") VALUES ('Elba');`; 
// await sql`INSERT INTO manualDailyRSN ("rsn") VALUES ('Benji Hoagie');`; 
// await sql`INSERT INTO manualDailyRSN ("rsn") VALUES ('Pentzel');`; 
// await sql`INSERT INTO manualDailyRSN ("rsn") VALUES ('Iron Pentzel');`; 
// await sql`INSERT INTO manualDailyRSN ("rsn") VALUES ('Doom 4112');`; 
// await sql`INSERT INTO manualDailyRSN ("rsn") VALUES ('Firemakers');`; 
// await sql`INSERT INTO manualDailyRSN ("rsn") VALUES ('clues and dg');`; 
// await sql`INSERT INTO manualDailyRSN ("rsn") VALUES ('Finekraken');`; 
// await sql`INSERT INTO manualDailyRSN ("rsn") VALUES ('Yooper');`; 
// await sql`INSERT INTO manualDailyRSN ("rsn") VALUES ('McNee');`; 
// await sql`INSERT INTO manualDailyRSN ("rsn") VALUES ('SOPHLE DEE');`; 
// await sql`INSERT INTO manualDailyRSN ("rsn") VALUES ('Gdubs');`; 
// await sql`INSERT INTO manualDailyRSN ("rsn") VALUES ('Axy');`; 
// await sql`INSERT INTO manualDailyRSN ("rsn") VALUES ('lSeanl');`; 
// await sql`INSERT INTO manualDailyRSN ("rsn") VALUES ('Altezara');`; 
// await sql`INSERT INTO manualDailyRSN ("rsn") VALUES ('0rland0Smith');`; 
// await sql`INSERT INTO manualDailyRSN ("rsn") VALUES ('xaj');`; 
// await sql`INSERT INTO manualDailyRSN ("rsn") VALUES ('wtf alan');`; 
// await sql`INSERT INTO manualDailyRSN ("rsn") VALUES ('suky nuty');`; 
// await sql`INSERT INTO manualDailyRSN ("rsn") VALUES ('uneedme15');`; 
// await sql`INSERT INTO manualDailyRSN ("rsn") VALUES ('wardikov');`; 
// await sql`INSERT INTO manualDailyRSN ("rsn") VALUES ('canadian ken');`; 
// await sql`INSERT INTO manualDailyRSN ("rsn") VALUES ('Annapoly');`; 
// await sql`INSERT INTO manualDailyRSN ("rsn") VALUES ('birdie60');`; 
// await sql`INSERT INTO manualDailyRSN ("rsn") VALUES ('Mr and Mr');`; 
// await sql`INSERT INTO manualDailyRSN ("rsn") VALUES ('RakThalosh');`; 
// await sql`INSERT INTO manualDailyRSN ("rsn") VALUES ('DutchyTrails');`; 
// await sql`INSERT INTO manualDailyRSN ("rsn") VALUES ('Kyurem');`; 
// await sql`INSERT INTO manualDailyRSN ("rsn") VALUES ('tcf99');`; 
// await sql`INSERT INTO manualDailyRSN ("rsn") VALUES ('crime mob');`; 
// await sql`INSERT INTO manualDailyRSN ("rsn") VALUES ('Tomasz');`; 
// await sql`INSERT INTO manualDailyRSN ("rsn") VALUES ('binbroughton');`; 
// await sql`INSERT INTO manualDailyRSN ("rsn") VALUES ('Eastment');`; 
// await sql`INSERT INTO manualDailyRSN ("rsn") VALUES ('Oro Siempre');`; 
// await sql`INSERT INTO manualDailyRSN ("rsn") VALUES ('cuarteto');`;