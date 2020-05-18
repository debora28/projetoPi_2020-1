const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://pi2020:pi2020@cluster0-nqglk.mongodb.net/test?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

var modulos = require('./importacoes.js'); 

async function listarBases(){
  async function listDatabases(client){
    databasesList = await client.db().admin().listDatabases();
  
    console.log("Databases:");
    databasesList.databases.forEach(db => console.log(` - ${db.name}`));
  };
  try {
    await client.connect();

    await (listDatabases(client));

  } catch (e) {
  console.error(e);
  }finally {
    await client.close();
  };
};

console.log(listarBases())