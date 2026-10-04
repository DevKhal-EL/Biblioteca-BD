import con from './connectionDB.js'

export async function getNotes() {
    let [rows] = await con.query('SELECT * FROM jogadores');
    return rows;
}

/* async function getNote(id) {
    let [rows] = await con.query(`SELECT * FROM jogadores WHERE id = ${id}`);
    return rows; 

    Esse aqui está permitindo SQL injection

} */

export async function getNote(id) {
    let [rows] = await con.execute(`SELECT * FROM jogadores WHERE id = ?`, [id]);
    // Pode usar query ou execute, mas execute é mais seguro em consultas com parâmetros.
    // Execute serve para executar qualquer comando sql no servidor.
    return rows[0];

}

let notas = await getNotes();
let nota = await getNote(100);

export async function registers(i) {
    let register = await getNote(i)
    let valor = Object.values(register);

    return valor
}

let registros = await registers(8);

export async function Insert(title, content) {
    let [result] = await con.query(`

        INSERT INTO jogadores (nome, idade)
        VALUES (?, ?)
        `, [title, content]
    )
    const id = result.insertId
    return getNote(id)
    /* Se deixar apenas return result, o console.log(result) retorna: 
    um objeto de resultado com metadados como insertId e affectedRows.
    
    Usando a função .insertId, o console.log(result) retorna apenas o id do registro inserido.
    */
}

const result = await Insert('Benício Khalel', 19)
// Conferindo no mysql, vai ver que foi inserido um registro.

console.log(result)



