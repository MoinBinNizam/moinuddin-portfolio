import { Sequelize } from 'sequelize';
import sequelize from '../config/database.js';

const { Model, DataTypes } = Sequelize;

export class Project extends Model {}

Project.init(
  {
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
      defaultValue: [],
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
  },
  {
    sequelize,
    modelName: 'Project',
    tableName: 'projects',
    timestamps: true,
  }
);

export default Project;
