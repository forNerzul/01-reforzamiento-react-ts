import { useCounter } from "../Hook/useCounter";

export const ContadorConHook = (): JSX.Element => {
    const {valor, acumular} = useCounter(0)

    return(
        <>
            <h3>Contador: <small>{valor}</small> </h3>
            <button
                onClick={()=>{acumular(1)}} 
                className="btn btn-primary"
            >
                +1
            </button>
            &nbsp;
            <button
                onClick={()=>{acumular(-1)}}
                className="btn btn-primary"
            >
                -1
            </button>
        </>
    );
}