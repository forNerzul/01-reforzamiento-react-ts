import { useEffect, useRef, useState } from "react"
import { ReqResListado, Usuario } from "../interfaces/reqRes"
import { reqResApi } from "../api/reqRes";

export const useUsuarios = () => {
    const [usuarios, setUsuarios] = useState<Usuario []>([]);
    const paginaRef = useRef(1);

    useEffect(()=>{
        cargarUsuarios();
    },[]);

    const cargarUsuarios = async () =>{
        const response = await reqResApi.get<ReqResListado>('/users', { 
            params: {
                page: paginaRef.current
            }
        })

        if (response.data.data.length > 0 ) {
            setUsuarios(response.data.data);
        } else {
            paginaRef.current--
            alert('Ya no hay usuarios');
        }
    }

    const paginaSiguiente = async () => {
        paginaRef.current++
        await cargarUsuarios();
  
    }

    const paginaAnterior = async () => {
        if (paginaRef.current > 1){
            paginaRef.current--
            await cargarUsuarios();
        }
    }
    return {
        usuarios,
        paginaSiguiente,
        paginaAnterior
    }
}