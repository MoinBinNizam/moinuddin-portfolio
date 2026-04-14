import { Sequelize } from 'sequelize';
import sequelize from '../config/database.js';

const { Model, DataTypes } = Sequelize;

export class Skill extends Model {}

Skill.init(
  {
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
  },
  {
    sequelize,
    modelName: 'Skill',
    tableName: 'skills',
    timestamps: true,
  }
);

export default Skill;
