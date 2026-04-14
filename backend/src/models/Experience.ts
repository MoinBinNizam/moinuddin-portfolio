import { Model, DataTypes } from 'sequelize';
import sequelize from '../config/database.js';

export class Experience extends Model {
  declare id: string;
  declare companyName: string;
  declare role: string;
  declare startDate: string;
  declare endDate?: string;
  declare contributions: string;
}

Experience.init(
  {
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
  },
  {
    sequelize,
    modelName: 'Experience',
    tableName: 'experience',
    timestamps: true,
  }
);

export default Experience;
