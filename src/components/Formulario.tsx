import { useForm } from "../Hook/useForm";

interface LoginForm {
    email: string;
    password: string;
}
export const Formulario = () => {
    const {formulario, onChange} = useForm<LoginForm>({
        email: '',
        password: ''
    });

    return (
        <>
            <h3 className="mb-4">Formulario</h3>
            <input
                onChange={({target})=>{ onChange(target.value, 'email')}} 
                type="text"
                className="form-control mb-4"
                value={formulario.email} 
            />
            <input
                onChange={({target})=>{ onChange(target.value,'password')}}
                type="text"
                className="form-control mb-4"
                value={formulario.password} 
            />

            <code>
                <pre>
                    {JSON.stringify(formulario, null, 2)}
                </pre>
            </code>
        </>
    );
}