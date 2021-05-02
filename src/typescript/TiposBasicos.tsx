import React from 'react'

export const TiposBasicos = () => {

    //El tipado nos proporciona mayor seguridad y validacion implicita de lo que se puede o no
    const nombre: string = 'Jorge'
    const edad: number = 35
    const estaActivo:boolean = false;
    const poderes: string[] = ['Velocidad', 'Volar', 'Respirar']


    // poderes.push(1);
    // poderes.push('Invisible')

    return (
        <>
            <h3> TS - React </h3>
            { nombre },     { edad },     { (estaActivo) ? 'Activo' : 'No activo' }
            <br/>

            { poderes.join(', ') } 
        </>
    )
}
