import { Model, DataTypes } from 'sequelize';
import sequelize from '../config/database.js';
export class Experience extends Model {
    id;
    companyName;
    role;
    startDate;
    endDate;
    contributions;
}
Experience.init({
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
    },
    companyName: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    role: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    startDate: {
        type: DataTypes.DATEONLY,
        allowNull: false,
    },
    endDate: {
        type: DataTypes.DATEONLY,
        allowNull: true,
    },
    contributions: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
}, {
    sequelize,
    modelName: 'Experience',
    tableName: 'experience',
    timestamps: true,
});
export default Experience;
//# sourceMappingURL=Experience.js.map