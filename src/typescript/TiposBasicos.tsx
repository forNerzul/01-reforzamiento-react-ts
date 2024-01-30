export const  TiposBasicos = () => {
    const nombre: string = 'Sergio García'
    const edad: number = 35;
    const estaActivo: boolean = true;
    const poderes: string[] = ['Velocidad', 'Volar', 'Respirar en el agua'];
    return (
        <>
            <h3>Tipos Básicos</h3>
            { nombre }, { edad }, {(estaActivo) ? 'activo' : 'no activo'}
            { poderes.join(', ') }
            
        </>
    );
}