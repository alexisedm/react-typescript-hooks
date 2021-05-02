import React from 'react'

export const ObjetosLiterales = () => {

    const persona = {
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
