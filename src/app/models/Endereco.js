const Sequelize = require('sequelize')

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

module.exports = Endereco