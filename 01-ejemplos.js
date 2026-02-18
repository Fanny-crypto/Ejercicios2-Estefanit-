function Datos(){
    let informacion = [
        {
            nombre : "Estefanit",
            edad : 20,
            curp : "GACE050430MTCRNSA4",
        },
         { nombre : "Jehu",
         edad : 19,
         curp : "CUCJ060730HTCRRHA4"
         },

         { nombre : "Emiliano",
            edad : 18,
            curp : "ROHE070608MTCDRMA9",
        },

        {
             nombre : "Karen",
            edad : 23,
            curp : "MECK021103MTCZHRA8",
        }
    ]
    informacion.map((info)=>{ 
        console.log(`El nombre es ${info.nombre} y tiene ${info.edad} años y su curp es ${info.curp}`)
})
}
Datos();

