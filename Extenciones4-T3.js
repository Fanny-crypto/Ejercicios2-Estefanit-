/* function Division(a,b){
    try{
        if (b === 0) {
            throw new Error ("Nose puede dividir entre ceroo baboosooo!!")
        }
        const resultado = a/b;
        console.log("El resultado es: ", resultado)
    }catch (error){
        console.error(`Error: ${error.massage}`);
    }finally{
        console.log("Termminar y cerrar cualquier proceso")
    }

}
//Division(10,2)
Division(10,0); */

/* function usuario(){
    try{
        //let usuario={nombre:"Estefanit"};
        let usuario=null;
        console.log("Accediendo al nombre...");

        if (!usuario){
                throw new Error ("!Nopodemos ingresar disculpa :(")
            }
            console.log(usuario.nombre);
    }catch(error){
        console.log(`Error: ${error.massage}`);
    }finally{
    console.log("Terminar y cerrar cualquier proceso");
    }
}
usuario(); */

class ValidacionErrores extends Error{
    constructor(message){
    super(message);
    this.nombre=ValidacionErrores;
    this.codigo=404
    }
}

//todas las polabras de "Error" se cambiaran por el nombre de la clase
class usuario{
    //validarUser="[?/,@*$]"
    constructor(nombre,edad,email,passsword){
        if(!nombre || nombre.length<3)
        {
            throw new ValidacionErrores ("El nombre debe de teneral menos 3 caracteres")
        }
        if(edad<18){
            throw new Error("Debe ser mayor de edad")
            //conosle.log("Debe ser mayior de edad");
        }
        if(!email.includes("@")){
            throw new Error ("El formato del correo no es valido")
        }
        if(!passsword.includes<6){
            throw new Error("La contraseña debe ser mayor a 6 caracteres")
        }
        this.nombre=nombre;
        this.edad=edad;
        this.email=email;
    }
    setModificarPassword(newPassword){
        const ValidarUser=/[?/*,$#]/;
        if(newPassword.length<6){
            throw new Error ("Debe de tener mas de 6 caracteres")
        }
        if(!ValidarUser.test(newPassword)){
            throw new Error ("El password debe incluir un caracter especial")
        }
        this.passsword=newPassword
    }
}
try{
    console.log("creando usuario...");
    const user=new usuario ("Fanny",20,"@tefa","2345*345");
    user.setModificarPassword("tefa*13")
    console.log("usuario:", user);
    console.log("usuario creado con exito");

}catch(error){
    console.error("No se cumple con el objetivo:" , error.message);
}
