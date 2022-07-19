module.exports = (sequelize, Model, DataTypes) => {
  class Ticket extends Model {}
  Ticket.init(
    {
      ticketId: {
        type: DataTypes.STRING,
        Validite: { notEmpty: true },
      },
      subject: {
        type: DataTypes.STRING,
        allowNull: false,
        Validite: { notEmpty: true },
      },
      date: {
        type: DataTypes.STRING,
        Validite: { notEmpty: true },
      },
      from: {
        type: DataTypes.STRING,
        allowNull: false,
        Validite: { notEmpty: true },
      },
      status: {
        type: DataTypes.STRING,
        Validite: { notEmpty: true },
      },
      body: {
        type: DataTypes.STRING,
        Validite: { notEmpty: true },
      },
    },

    {
      timestamps: true,
      paranoid: true,
      sequelize,
      modelName: "Ticket",
    }
  );

  return Ticket;
};
