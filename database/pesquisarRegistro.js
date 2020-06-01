const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://pi2020:pi2020@cluster0-nqglk.mongodb.net/test?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
const bodyParser = require('body-parser');


async function ProcurarColecao(nome, client) {
  async function procurar(var1 ){
    //const teste = {"nome":var1};
    //result = await client.db("bancoteste").collection("medicos").findOne({"nome":"horlando"});//findOne({"nome": `${nome}`});
    result = await client.db("bancoteste").collection("medicos").findOne({"nome":`${var1}`});
    //result = await client.db("bancoteste").collection("medicos").findOne(teste);

      if (result != undefined) {
        console.log(`Lista encontrada com o nome: '${nome}':`);
        console.log(result);
        console.log(result.nome);
      } else {
          console.log(`Nenhuma lista foi encontrada com o nome: '${nome}'`);
      };
      //return result.nome
  };

    try {
      await client.connect();
  
      await (procurar(var1 = nome, client.db));
  
    } catch (e) {
    console.error(e);
    }finally {
      await client.close();
    };
};

ProcurarColecao("aaa",client)
//ProcurarColecao('teste',client) nome da pessoa que se quer chamar e client obrigatoriamente

