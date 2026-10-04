import dotenv from 'dotenv';
import mysql from 'mysql2/promise';

dotenv.config();

const con = await mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME

})

try {
  con.getConnection();
  console.log("Connected!")

} catch (error) {
  console.log(error)

}

export default con;