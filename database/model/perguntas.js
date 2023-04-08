//Model -> Representação de uma tabela
const sequelize = require("sequelize");
const connection = require("./database/database");

//Criando uma tabela e os fields com o sequelize
const pergunta = connection.define("pergunta", {
    titulo:{
        type: sequelize.STRING,
        allowNull: false //Não deixa receber valores nulos
    },
    descricao:{
        type: sequelize.TEXT,
        allowNull: false
    }
});

//Se no meu banco não existir uma tabela chamado pergunta, o sequelize vai criar sincronizando  
    // O force:false não vai forçar a criação da tabela
pergunta.sync({force:false}).then(() =>{}); 