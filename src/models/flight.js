'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Flight extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Flight.init({
    flightNumber: {
      type:DataTypes.STRING,
      allownull: false,
      unique:true
    },
    airplaneId: {
     type: DataTypes.INTEGER,
     allownull: false
    },
    departureAirportId: {
      type:DataTypes.INTEGER,
      allowNull: false
    },
    arrivalAirportId: {
      type:DataTypes.INTEGER,
      allownull: false
    },
    arrivalTime: {
      type:DataTypes.DATE,
      allownull: false
    },
    departureTime: {
      type:DataTypes.DATE,
      allownull: false
    },
    price: {
      type:DataTypes.INTEGER,
      allownull: false,
    },
    boardingGate: DataTypes.STRING,
    totalSeats: {
      type:DataTypes.INTEGER,
      allownull:false,
    },
  }, {
    sequelize,
    modelName: 'Flight',
  });
  return Flight;
};