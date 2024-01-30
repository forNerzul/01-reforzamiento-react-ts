interface Persona {
    nombre: string;
    edad: number;
    direccion: Direccion;
}

interface Direccion {
    pais: string;
    casaNo: number;
}

export const ObjetosLiterales = () =>{
    const persona: Persona = {
        nombre: 'Sergio García',
        edad: 35,
        direccion: {
            pais: 'Paraguay',
            casaNo: 666
        }
    }
    return(
        <>
            <h3>Objetos Literales</h3>
            <code>
                <pre>
                    {JSON.stringify(persona, null, 2)}
                </pre>
            </code>
        </>
    );
}