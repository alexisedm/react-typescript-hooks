import React from 'react'

//se define el objeto de interface
interface Persona {
    nombre:string
    edad:number
    direccion:Direccion
}

//la interfaz no sirve para crear una instacia,
//solo sirven para poder reglas de validacion a un obj
// de lo contrario crear una clase
interface Direccion {
    pais:string;
    casaNo: number;
}


export const ObjetosLiterales = () => {

    const persona: Persona = {
        nombre: 'Jorge',
        edad: 23,
        direccion: {
            pais: 'Mexico',
            casaNo: 1769
        }
    }


    return (
        <div>
             <h3> Objetos literales </h3>
             <code>
                 <pre>
                    { JSON.stringify(persona) } 
                 </pre>
             </code>
        </div>
    )
}
