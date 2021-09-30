import sequelize from "./db";
import User from './User';
import  Post from './Post';

/*(async () => {
    await sequelize.sync({ force: true });
  })();*/

User.hasMany(Post, {
    sourceKey: "id",
    foreignKey: "ownerId",
    as: "projects", // this determines the name in `associations`!
});


export const db = {
    User,
    Post
}
