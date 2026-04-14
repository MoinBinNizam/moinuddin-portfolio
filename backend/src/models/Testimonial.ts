import { Sequelize } from 'sequelize';
import sequelize from '../config/database.js';

const { Model, DataTypes } = Sequelize;

export class Testimonial extends Model {}

Testimonial.init(
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    clientName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    clientCompany: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    rating: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        min: 1,
        max: 5,
      },
    },
    message: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    projectId: {
      type: DataTypes.UUID,
      allowNull: true,
      references: {
        model: 'projects',
        key: 'id',
      },
    },
  },
  {
    sequelize,
    modelName: 'Testimonial',
    tableName: 'testimonials',
    timestamps: true,
  }
);

export default Testimonial;
