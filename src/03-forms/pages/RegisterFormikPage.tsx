import { Form, Formik } from "formik"
import * as Yup from "yup";
import { MyTextInput } from '../components/MyTextInput';

export const RegisterFormikPage = () => {

    return (
        <div className="text-xl mt-5">
            <h1>Register Formik Page</h1>
            <Formik initialValues={{
                name: '',
                email: '',
                password1: '',
                password2: ''
            }}
                onSubmit={values => {
                    alert(JSON.stringify(values, null, 2));
                }}
                validationSchema={Yup.object({
                    name: Yup.string()
                        .min(2, "El nombre debe ser de 3 caracteres o más")
                        .max(15, "El nombre debe tener menos de 15 caracteres")
                        .required("Requerido"),
                    email: Yup.string()
                        .email('Revise el formato del correo')
                        .required('Requerido'),
                    password1: Yup.string()
                        .min(6, "La contraseña debe tener minimo 6 caracteres")
                        .required('Requerido'),
                    password2: Yup.string()
                        .oneOf([Yup.ref('password1')], "Las contraseñas deben ser iguales")
                        .min(6, "La contraseña debe tener minimo 6 caracteres")
                        .required('Requerido')
                })}>
                {
                    ({ handleReset }) => (<Form className="flex flex-col mt-5 space-y-2 text-black">
                        <MyTextInput label="Nombre" name="name" placeholder="John" />

                        <MyTextInput label="Email" name="email" type="email" placeholder="johndoe@gmail.com" />

                        <MyTextInput label="Password" name="password1" type="password" placeholder="******" />

                        <button type="submit" className="w-20 bg-gray-600 rounded-lg hover:bg-gray-800 hover:text-white">Create</button>
                        <button type="button" onClick={handleReset} className="w-20 bg-gray-600 rounded-lg hover:bg-gray-800 hover:text-white">Reset</button>
                    </Form>)
                }
            </Formik>

        </div>
    )
}
