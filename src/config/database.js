const { Sequelize } = require('sequelize'); 

const sequelize = new Sequelize({
    host: 'localhost',
    dialect: 'sqlite',
    storage: './note.sqlite'
}); 

module.exports = sequelize; 