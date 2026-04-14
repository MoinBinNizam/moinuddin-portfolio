import { Model, DataTypes } from 'sequelize';
import sequelize from '../config/database.js';
export class Skill extends Model {
    id;
    name;
    category;
    iconName;
}
Skill.init({
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    category: {
        type: DataTypes.ENUM('Frontend', 'Backend', 'Tools'),
        allowNull: false,
    },
    iconName: {
        type: DataTypes.STRING,
        allowNull: true,
    },
}, {
    sequelize,
    modelName: 'Skill',
    tableName: 'skills',
    timestamps: true,
});
export default Skill;
//# sourceMappingURL=Skill.js.map