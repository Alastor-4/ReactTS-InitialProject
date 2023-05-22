import { FormEvent } from "react"
import { useForm } from "../hooks/useForm";

interface RegisterData {
    name: string;
    email: string;
    password: string;
    confirmPassword: string;
}
export const RegisterPage = () => {
    const { name, email, password, confirmPassword, onChange, reset, isValidEmail } = useForm<RegisterData>({
        name: '',
        email: '',
        password: '',
        confirmPassword: ''
    });
    const onSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
    }

    return (
        <div className="text-xl mt-5">
            <h1>RegisterPage</h1>

            <form action="" className="flex flex-col mt-5 space-y-3 text-black" onSubmit={onSubmit}>
                <input className={`pl-1 py-1 focus:outline-none rounded-md ${name.trim().length == 0 && "outline outline-2 outline-red-600 focus:outline-2 focus:outline-red-600"}`}
                    type="text" placeholder="Name"
                    value={name}
                    name="name"
                    onChange={onChange}
                />
                {name.trim().length == 0 && <span className="text-red-600 text-lg">Este campo es necesario</span>}
                <input className={`pl-1 py-1 focus:outline-none rounded-md ${!isValidEmail(email) && "outline outline-2 outline-red-600 focus:outline-2 focus:outline-red-600"}`}
                    type="email" placeholder="Email"
                    value={email}
                    name="email"
                    onChange={onChange}
                />
                {!isValidEmail(email) && <span className="text-red-600 text-lg">El email no es correcto</span>}
                <input className={`pl-1 py-1 focus:outline-none rounded-md ${password.trim().length == 0 && "outline outline-2 outline-red-600 focus:outline-2 focus:outline-red-600"}`}
                    type="password" placeholder="Password"
                    value={password}
                    name="password"
                    onChange={onChange}
                />
                {password.trim().length == 0 && <span className="text-red-600 text-lg">Este campo es necesario</span>}
                {password.trim().length < 6 && password.trim().length > 0 && <span className="text-red-600 text-lg">Debe ser mayor a 6 letras</span>}
                <input className={`pl-1 py-1 focus:outline-none rounded-md ${confirmPassword.trim().length == 0 && "outline outline-2 outline-red-600 focus:outline-2 focus:outline-red-600"}`}
                    type="password" placeholder="Repeat Password"
                    value={confirmPassword}
                    name="confirmPassword"
                    onChange={onChange}
                />
                {confirmPassword.trim().length == 0 && <span className="text-red-600 text-lg">Este campo es necesario</span>}
                {confirmPassword.trim().length > 0 && password !== confirmPassword && <span className="text-red-600 text-lg">Passwords deben ser iguales</span>}

                <button type="submit" className="w-20 bg-gray-600 rounded-lg hover:bg-gray-800 hover:text-white">Create</button>
                <button type="button" className="w-20 bg-gray-600 rounded-lg hover:bg-gray-800 hover:text-white" onClick={reset}>Reset</button>
            </form>

        </div>
    )
}
