import { useState } from "react";


export const useCounter = (inicial: number) => {
    const [valor, setValor] = useState<number>(inicial)

    const acumular = (numero: number) => {
        setValor(valor + numero);
    }

    return {
        valor,
        acumular
    }

}