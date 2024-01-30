import { useUsuarios } from "../Hook/useUsuarios";
import { Usuario } from "../interfaces/reqRes";

export const Usuarios = () => {
    const {usuarios, paginaSiguiente, paginaAnterior} = useUsuarios();

    const renderItem = (usuario: Usuario) => {
        return(
            <tr key={usuario.id.toString()}>
                <td>
                    <img 
                        src={usuario.avatar} 
                        alt={usuario.first_name}
                        style={{
                            width: 50,
                            borderRadius: 100
                        }}
                    />
                </td>
                <td>{usuario.first_name} {usuario.last_name}</td>
                <td>{usuario.email}</td>
            </tr>
        );
    }
    return(
        <>
            <h3>Usuarios</h3>
            <table className="table">
                <thead>
                    <tr>
                        <th>Avatar</th>
                        <th>Nombre</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        usuarios.map((usuario)=>{
                            return renderItem(usuario);             
                        })
                    }
                </tbody>
            </table>
            <button
                onClick={paginaAnterior}
                className="btn btn-primary"
            >
                Anterior
            </button>
            <button
                onClick={paginaSiguiente}
                className="btn btn-primary"
            >
                Siguiente
            </button>
        </>
    );
}