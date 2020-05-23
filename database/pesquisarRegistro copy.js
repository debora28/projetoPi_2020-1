const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://pi2020:pi2020@cluster0-nqglk.mongodb.net/test?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
const bodyParser = require('body-parser');

async function ProcurarColecao(nome='horlando', client) {
    result = await client.db("bancoteste").collection("medicos").findOne({"nome": `${nome}`});

    if (result != undefined) {
        console.log(`Lista encontrada com o nome: '${nome}':`);
        console.log(result);
        console.log(result.nome);
    } else {
        console.log(`Nenhuma lista foi encontrada com o nome: '${nome}'`);
};
    
    try {
      await client.connect();
  
      await (ProcurarColecao(none, client));
  
    } catch (e) {
    console.error(e);
    }finally {
      await client.close();
    };
};

ProcurarColecao()

