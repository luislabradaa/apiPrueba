import mysql from "mysql2/promise";

const config = {
  host: "localhost",
  user: "admInven",
  port: 3306,
  password: "admInven24._",
  database: "bd_inventario",
};

const connection = await mysql.createConnection(config);

export class BDModel {
  static async getAll({}) {
    const result = await connection.query("SELECT * FROM tbl_categoria");
    console.log(result);
  }
}
export default connection;
