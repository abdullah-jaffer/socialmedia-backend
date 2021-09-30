import { Post as PostAttributes} from "../interfaces";
import sequelize from "./db";
import { Model, DataTypes, Optional } from "sequelize";

interface PostCreationAttributes extends Optional<PostAttributes, "id"> {}

class Post extends Model<PostAttributes, PostCreationAttributes>
  implements PostAttributes {
    id!: number
    title!: string
    content!: string
    image!: string | null
    tags!: string | null
    ownerId!: number

  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

Post.init(
    {
      id: {
        type: DataTypes.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true,
      }, 
      ownerId: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull:false,
      },
      title: {
        type: new DataTypes.STRING(128),
        allowNull: false,
      },
      content: {
        type: new DataTypes.STRING(128),
        allowNull: false,
      },
      image: {
        type: new DataTypes.STRING(128),
        allowNull: true,
      },
      tags: {
        type: new DataTypes.STRING(128),
        allowNull: true,
      },
    },
    {
      sequelize,
      tableName: "posts",
    }
  );

export default Post;