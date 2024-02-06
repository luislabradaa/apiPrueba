import mysql from "mysql2/promise";

const config = {
  host: "localhost",
  user: "admInven",
  port: 3306,
  password: "admInven24._",
  database: "bd_inventario",
};

const connection = await mysql.createConnection(config);

export class CategoriaModel {
    static async getAll ({}){
        const [categorias] = await connection.query('SELECT * FROM tbl_categoria;');
        return categorias
    }

    static async getById ({id}){
      const [categorias] = await connection.query(`SELECT * FROM tbl_categoria WHERE id_cat = ?;`, [id]);
      
      if(categorias.length == 0) return null
      
      return categorias[0]

    }

    static async create ({input}){
      const {
      nomCat,
      tipo,
      distancia} = input
      try{
        const result = await connection.query( `INSERT INTO tbl_categoria (nomCat, tipo, distancia) VALUES (?,?,?);`, [nomCat, tipo, distancia]);
        console.log("Categoría creada con éxito");
      }catch (error){
        console.log(`Ha occurrido un error: `,error);
      }
    }

    static async delete ({id}){
      const result = await connection.query( `DELETE FROM tbl_categoria WHERE id_cat = ?;`, [id]);
      if(result.affectedRows == 0) return false
      
    }
    static async update ({id, input}){

      const {
        nomCat,
        tipo,
        distancia} = input
      const updateFields = [];
      const params = [];
  
      if (input.nomCat !== undefined) {
          updateFields.push("nomCat = ?");
          params.push(nomCat);
      }
      if (input.tipo !== undefined) {
          updateFields.push("tipo = ?");
          params.push(tipo);
      }
      if (input.distancia !== undefined) {
          updateFields.push("distancia = ?");
          params.push(distancia);
      }
  
      params.push(id); // Agregar el ID como último parámetro
  
      try {
          const updateQuery = `UPDATE tbl_categoria SET ${updateFields.join(", ")} WHERE id_cat = ?;`;
          const result = await connection.query(updateQuery, params);
          console.log("Actualización realizada con éxito.");
      } catch (error) {
          console.log(`Ha ocurrido un error: `, error);
      }
    }
}

export class ProductoModel {
  static async getAll ({}){
    const [productos] = await connection.query('SELECT * FROM tbl_producto INNER JOIN tbl_categoria ON tbl_producto.id_cat  = tbl_categoria.id_cat;');
    return productos
}

static async getById ({id}){
  const [productos] = await connection.query(`SELECT * FROM tbl_producto INNER JOIN tbl_categoria ON tbl_producto.id_cat  = tbl_categoria.id_cat WHERE id_producto = ?;`, [id]);
  
  if(productos.length == 0) return null
  
  return productos[0]

}
// TODO
static async create ({input}){
  const {
  nomCat,
  tipo,
  distancia} = input
  try{
    const result = await connection.query( `INSERT INTO tbl_categoria (nomCat, tipo, distancia) VALUES (?,?,?);`, [nomCat, tipo, distancia]);
    console.log("Categoría creada con éxito");
  }catch (error){
    console.log(`Ha occurrido un error: `,error);
  }
}

static async delete ({id}){
  const result = await connection.query( `DELETE FROM tbl_categoria WHERE id_cat = ?;`, [id]);
  if(result.affectedRows == 0) return false
  
}
static async update ({id, input}){

  const {
    nomCat,
    tipo,
    distancia} = input
  const updateFields = [];
  const params = [];

  if (input.nomCat !== undefined) {
      updateFields.push("nomCat = ?");
      params.push(nomCat);
  }
  if (input.tipo !== undefined) {
      updateFields.push("tipo = ?");
      params.push(tipo);
  }
  if (input.distancia !== undefined) {
      updateFields.push("distancia = ?");
      params.push(distancia);
  }

  params.push(id); // Agregar el ID como último parámetro

  try {
      const updateQuery = `UPDATE tbl_categoria SET ${updateFields.join(", ")} WHERE id_cat = ?;`;
      const result = await connection.query(updateQuery, params);
      console.log("Actualización realizada con éxito.");
  } catch (error) {
      console.log(`Ha ocurrido un error: `, error);
  }
}
}