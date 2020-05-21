const conexaoBase = require("./conexaoBase")

nomeFuncao = 'listDatabases';
const funcao = async function listDatabases(client){
    databasesList = await client.db().admin().listDatabases();
  
    console.log("Databases:");
    databasesList.databases.forEach(db => console.log(` - ${db.name}`));
};

conexaoBase.ConectarBase(funcao, nomeFuncao)
