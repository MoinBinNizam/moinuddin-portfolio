import { Model, DataTypes } from 'sequelize';
import sequelize from '../config/database.js';
export class User extends Model {
    id;
    username;
    password;
}
User.init({
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
    },
    username: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
    },
}, {
    sequelize,
    modelName: 'User',
    tableName: 'users',
    timestamps: true,
});
export default User;
//# sourceMappingURL=User.js.map