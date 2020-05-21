const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://pi2020:pi2020@cluster0-nqglk.mongodb.net/test?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

async function ConectarBase(funcao, nomeFuncao){   
    funcao;
    try {
      await client.connect();
  
      await (funcao(client));
  
    } catch (e) {
    console.error(e);
    }finally {
      await client.close();
    };
};

/*toda funcao precisa ser assincrona e precisa ser */
exports.ConectarBase = ConectarBase;