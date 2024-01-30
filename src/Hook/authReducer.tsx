export interface AuthState {
    validando: boolean;
    token: string | null;
    username: string;
    nombre: string;
}


export type AuthAction = 
    | { type: 'logout' }
    | { type: 'login', payload: LoginPayload}

export type LoginPayload = {
    username: string;
    nombre: string
}

export const authReducer = (state: AuthState, action: AuthAction):AuthState => {
    switch(action.type){
        case 'logout':
            return {
                validando: false,
                token: null,
                username: '',
                nombre: ''
            }
        case 'login':
            const { username, nombre } = action.payload
            return {
                validando: false,
                token: 'ABC123',
                username,
                nombre
            }        
        default:
            return state;
    }
}