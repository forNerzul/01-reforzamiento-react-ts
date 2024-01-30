import { MouseEventHandler, useEffect, useReducer } from "react";
import { AuthState, authReducer } from "../Hook/authReducer";


const initialState: AuthState = {
    validando: true,
    token: null,
    username: '',
    nombre: ''
}


const ValidandoAlert = () => {
    return (
        <div className="alert alert-info">
            Validando...
        </div>   
    );
}

const AutenticadoAlert = ({state}:{state: AuthState}) => {
    const { token, username, nombre } = state;
    return(
        <div className="alert alert-success">
                Autenticado como:
                <code>
                    <pre>
                        {JSON.stringify({token, username, nombre}, null, 2)}
                    </pre>
                </code>
        </div>
    );
}

const NoAutenticado = () => {
    return (
        <div className="alert alert-danger">
            No autenticado
        </div>
    );
}

const LoginBtn = ({onClick}:{onClick: MouseEventHandler<HTMLButtonElement>}) => {
    return(
        <button
                onClick={onClick}
                className="btn btn-primary"
        >
                Login
        </button>
    );
}

const LogoutBtn = ({onClick}:{onClick: MouseEventHandler<HTMLButtonElement>}) => {
    return (
        <button
                onClick={onClick}
                className="btn btn-danger"
            >
                LogOut
        </button>
    );
}
export const Login = () => {
    
    const [state, dispatch] = useReducer(authReducer, initialState);
    const { validando, token } = state;

    useEffect(() => {
        
        setTimeout(()=>{
            dispatch({type: 'logout'});
        }, 1500)
    },[])

    const loginHandle = () => {
        dispatch({
            type: 'login',
            payload: {
                username: 'sergiochota',
                nombre: 'Sergio García'
            }
        });
    }

    const logoutHandle = () => {
        dispatch({type: 'logout'})
    }
    
    return(
        <>
            <h3>Login</h3>
            {
                (validando)
                ? 
                    <ValidandoAlert/>
                :
                    (token)
                    ?
                        <>
                            <AutenticadoAlert state={state} />
                            <LogoutBtn
                                onClick={logoutHandle}
                            />
                        </>
                    :
                        <>
                            <NoAutenticado />
                            <LoginBtn 
                                onClick={loginHandle}
                            />
                        </>
            }

            
            
        </>
    );
}