//requisição na pasta express
const express = require('express')
const userService = require('../NodeBackEnd/services/users')
const app = express()
//salvando na port 3000
const port = 3000
app.use(express.json());




//uma consulta ou resposta retornada
//get users
app.get('/users', (req, res) => {
  res.json(userService.getUsers());
})

app.get ('/users/:id', (req,res) => {
//pegar id da requisção
  const idUser = req.params.id;
 //encontrar o usuario correspondente no banco

res.json(userService.getUsersById(idUser));

 //responder a requisição com as info do users

})


app.post("/users",(req, res) =>{

//pegar o id da requisição
const body = req.body;

// criar um novo objeto  a partir desse corpo


//responder a requisição com o banco completo
res.status(201).json(userService.createUser(body));


})

app.delete("/users/:id", (req,res)=>{
  //pegar o id da requisição
  const idUser = req.params.id;
  

  
  // deleta o condenado

  // responder com o meu banco atualizado
  res.json("Apagado com sucesso");

})

app.patch("/users/:id", (req, res) => {
//pegar o id da requisição
const idUser = req.params.id;

//pegar o corpo da requisição
const body = req.body;

//percorrer o banco

 //responder a requisição do banco
res.json(userService.updateUser(idUser, body));


}) 

//o servidor ficar rastreando a port pra retornar ao usuario
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)

})

