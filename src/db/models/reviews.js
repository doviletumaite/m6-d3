import sequelize from "../index.js";
import s from "sequelize";
const { DataTypes } = s;

const review = sequelize.define("review", {
    id: {
      primaryKey: true,
      type: DataTypes.INTEGER,
      autoIncrement: true,
    },
    text: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
    }
  });
  
  export default review;






// {
//     "id": 1,
//     "text": TEXT,
//     "username:STRING,
//     "productId":FOREIGN KEY products
  
// }