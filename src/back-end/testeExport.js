import con from './connectionDB'

let querye = await con.query('SELECT * FROM jogadores;');

console.log(querye)