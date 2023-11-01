//requisição na pasta express
const express = require('express')
const userRepository = require('../NodeBackEnd/repositories/users');
const app = express()
//salvando na port 3000
const port = 3000
app.use(express.json());




//uma consulta ou resposta retornada
//get users
app.get('/users', (req, res) => {
  res.json(userRepository.getUsers());
})

app.get ('/users/:id', (req,res) => {
//pegar id da requisção
  const idUser = req.params.id;
 //encontrar o usuario correspondente no banco


res.json(userRepository.getUserById(idUser));

 //responder a requisição com as info do users

})


app.post("/users",(req, res) =>{

//pegar o id da requisição
const body = req.body;

// criar um novo objeto  a partir desse corpo


//responder a requisição com o banco completo
res.json(bd);

})

app.delete("/users/:id", (req,res)=>{
  //pegar o id da requisição
const idUser = req.params.id;
  // percorrer o banco e encontrar quem tem o id da requisição
bd = bd.filter((usuario) => usuario.id != idUser);
  // deleta o condenado

  // responder com o meu banco atualizado
res.json(bd);

})

app.patch("/users/:id", (req, res) => {
//pegar o id da requisição
const idUser = req.params.id;

//pegar o corpo da requisição
const body = req.body;

//percorrer o banco
bd = bd.map((usuario) => {
//ad
  if(usuario.id === idUser) {
    //atualizar as informaçoes
      usuario.name = body.name;
  }

  return usuario

 
 

})

 //responder a requisição do banco
res.json(bd);


}) 

//o servidor ficar rastreando a port pra retornar ao usuario
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)

})

