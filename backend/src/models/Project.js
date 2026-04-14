import { Model, DataTypes } from 'sequelize';
import sequelize from '../config/database.js';
export class Project extends Model {
    id;
    title;
    category;
    description;
    techStack;
    imageUrl;
    liveLink;
    githubLink;
}
Project.init({
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    category: {
        type: DataTypes.ENUM('ERP', 'POS', 'WordPress', 'React'),
        allowNull: false,
    },
    description: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
    techStack: {
        type: DataTypes.JSON,
        allowNull: false,
    },
    imageUrl: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    liveLink: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    githubLink: {
        type: DataTypes.STRING,
        allowNull: true,
    },
}, {
    sequelize,
    modelName: 'Project',
    tableName: 'projects',
    timestamps: true,
});
export default Project;
//# sourceMappingURL=Project.js.map