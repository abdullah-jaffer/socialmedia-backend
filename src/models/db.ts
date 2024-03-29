import { Sequelize }  from 'sequelize';

const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: 'path/to/database.sqlite',
    logging: (...msg) => console.log(msg)
  });

  export default sequelize;