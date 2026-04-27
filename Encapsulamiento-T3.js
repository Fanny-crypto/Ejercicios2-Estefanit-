//23/03/26
class Usuario{
    #nomuser;
    #password;
constructor(nomuser,password){
this.#nomuser=nomuser;
this.#password=password;
}

#validarPassword(contrasenia){
    return this.#password=contrasenia.length>=4;
}

#validarUser(usuario){
    return this.#nomuser=usuario.length>=4;
}

login(pass,usu){
    if(this.#validarPassword(pass) && this.#validarUser(usu)){
        console.log(`Bienvenido ${this.#nomuser},${this.#password}`);
    }else{
        console.log("No cumple con el long del usuario y password!!");
    }
}


}

const user1=new Usuario ("Estefanit");
user1.login("Fast");

//se le agrega # para poner la variable privada (encapsulamiento)


