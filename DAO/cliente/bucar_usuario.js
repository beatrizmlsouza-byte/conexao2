import {conexao} from '../conexao.js'


async function buscarUsuario(){
  console.log('DAO de CLIENTE')
    const sql = `SELECT * FROM tbUsuario;`
    
    const conn = await conexao()
    try {
        // Executar a consulta
        const [rows, fields] = await conn.query(sql);
        await conn.end()
        return rows
      } catch (err) {
        return err.message
      }
}

async function buscarUsuarios(codigo){
    const sql = `SELECT * FROM tbUsuario WHERE codigo = ?`
    
    const conn = await conexao()
    
    try {
        // Executar a consulta
        const [rows, fields] = await conn.query(sql, [codigo]);
        await conn.end()
        return rows
      } catch (err) {
        return err.message
      }
}

export {buscarUsuario, buscarUsuarios}
