import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';
import path from 'path';
dotenv.config();
const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: process.env.DB_STORAGE || './src/database/portfolio.sqlite',
    logging: false,
});
export default sequelize;
//# sourceMappingURL=database.js.map