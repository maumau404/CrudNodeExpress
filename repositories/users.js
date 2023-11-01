let {bd} = require('../databases/users')

const getUsers = () =>{
    return bd;

}

const getUserById = (idUser) => {

    return bd.filter((usuario) => usuario.id === idUser);

}

const createUser = (body) =>{

    const newUser = {
        id: (bd.length+1).toString(),
        name: body.name
    }
    
      //adicionar esse novo objeto no banco
    bd.push(newUser);

}

module.exports = {
    getUsers,
    getUserById
}


