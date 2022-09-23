const Sequelize = require('sequelize')
const Usuario = require('./Usuario')
class Endereco extends Sequelize.Model{
    static init(sequelize){
        super.init(
            {
                rua:Sequelize.STRING,
                bairro:Sequelize.STRING,
                numero:Sequelize.STRING,
                cidade: Sequelize.STRING, 
                referencia:Sequelize.STRING

            },
            {
                sequelize
            }
        );

        return this
    }
}
Usuario.associate = (models) => {
    Usuario.belongsTo(models.Usuario, {
      foreignKey: "id",
      as: "usuario",
      targetKey: "id",
    });
  }

module.exports = Endereco