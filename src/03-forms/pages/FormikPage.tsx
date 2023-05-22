import { FormikErrors, useFormik } from "formik"

interface FormValues {
    firstName: string,
    lastName: string,
    email: string,
}
export const FormikPage = () => {
    const validate = ({ firstName, lastName, email }: FormValues) => {
        const errors: FormikErrors<FormValues> = {};
        if (!firstName) {
            errors.firstName = 'Required'
        } else if (firstName.length >= 15) {
            errors.firstName = 'Must be 15 characters or less';
        }
        if (!lastName) {
            errors.lastName = 'Required'
        } else if (lastName.length >= 15) {
            errors.lastName = 'Must be 15 characters or less';
        }
        if (!email) {
            errors.email = 'Required'
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) {
            errors.email = 'Invalid email address';
        }
        return errors
    }

    const { values, handleChange, handleSubmit, handleReset, handleBlur, errors, touched } = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            email: '',
        },
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2));
        },
        validate
    });

    return (
        <div className="text-xl mt-5">
            <h1>Formik Tutorial</h1>
            <form noValidate onSubmit={handleSubmit} className="flex flex-col mt-5 space-y-2 text-black">
                <label className="text-white" htmlFor="firstName">First Name</label>
                <input className={`pl-1 py-1 focus:outline-none rounded-md`}
                    type="text"
                    name="firstName"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.firstName}
                />
                {touched.firstName && errors.firstName && <span className="text-red-600 text-lg">{errors.firstName}</span>}
                <label className="text-white" htmlFor="lastName">Last Name</label>
                <input className={`pl-1 py-1 focus:outline-none rounded-md`}
                    type="text"
                    name="lastName"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.lastName}
                />
                {touched.lastName && errors.lastName && <span className="text-red-600 text-lg">{errors.lastName}</span>}
                <label className="text-white" htmlFor="email">Email</label>
                <input className={`pl-1 py-1 focus:outline-none rounded-md`}
                    type="email"
                    name="email"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.email}
                />
                {touched.email && errors.email && <span className="text-red-600 text-lg">{errors.email}</span>}
                {/* <label className="text-white" htmlFor="password">Contraseña</label>
                <input className={`pl-1 py-1 focus:outline-none rounded-md `}
                    type="password" placeholder="Password"
                    value="Password"
                    name="password"
                />
                <span className="text-red-600 text-lg">Este campo es necesario</span>
                <label className="text-white" htmlFor="password">Confirmar contraseña</label>
                <input className={`pl-1 py-1 focus:outline-none rounded-md`}
                    type="password" placeholder="Repeat Password"
                    value="Confirmar Contraseña"
                    name="confirmPassword"
                />
                <span className="text-red-600 text-lg">Este campo es necesario</span> */}

                <button type="submit" className="w-20 bg-gray-600 rounded-lg hover:bg-gray-800 hover:text-white">Create</button>
                <button type="button" onClick={handleReset} className="w-20 bg-gray-600 rounded-lg hover:bg-gray-800 hover:text-white">Reset</button>
            </form>

        </div>
    )
}
