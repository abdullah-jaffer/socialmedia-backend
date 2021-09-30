import { Followers as FollowerAttributes} from "../interfaces";
import sequelize from "./db";
import { Model, DataTypes, Optional } from "sequelize";

interface FollowerCreationAttributes extends Optional<FollowerAttributes, "id"> {}

class Follower extends Model<FollowerAttributes, FollowerCreationAttributes >
  implements FollowerAttributes {
    id!: number
    follower_id!: number
    following_id!: number

  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

Follower.init(
    {
      id: {
        type: DataTypes.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true,
      }, 
      follower_id: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull:false,
      },
      following_id: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull:false,
      },
    },
    {
      sequelize,
      tableName: "followers",
    }
  );

export default Follower;