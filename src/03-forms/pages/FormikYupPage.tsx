import { useFormik } from "formik"
import * as Yup from "yup";

export const FormikYupPage = () => {

    const { handleSubmit, handleReset, errors, touched, getFieldProps } = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            email: '',
        },
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2));
        },
        validationSchema: Yup.object({
            firstName: Yup.string()
                .max(15, 'Debe de tener 15 caracteres o menos')
                .required('Requerido'),
            lastName: Yup.string()
                .max(15, 'Debe de tener 15 caracteres o menos')
                .required('Requerido'),
            email: Yup.string()
                .email('Debe de ser un email válido')
                .required('Requerido')
        })
    });

    return (
        <div className="text-xl mt-5">
            <h1>Formik Yup Tutorial</h1>
            <form noValidate onSubmit={handleSubmit} className="flex flex-col mt-5 space-y-2 text-black">
                <label className="text-white" htmlFor="firstName">First Name</label>
                <input className={`pl-1 py-1 focus:outline-none rounded-md`} type="text" {...getFieldProps('firstName')} />
                {touched.firstName && errors.firstName && <span className="text-red-600 text-lg">{errors.firstName}</span>}
                <label className="text-white" htmlFor="lastName">Last Name</label>
                <input className={`pl-1 py-1 focus:outline-none rounded-md`} type="text" {...getFieldProps('lastName')} />
                {touched.lastName && errors.lastName && <span className="text-red-600 text-lg">{errors.lastName}</span>}
                <label className="text-white" htmlFor="email">Email</label>
                <input className={`pl-1 py-1 focus:outline-none rounded-md`} type="email" {...getFieldProps('email')} />
                {touched.email && errors.email && <span className="text-red-600 text-lg">{errors.email}</span>}
                <button type="submit" className="w-20 bg-gray-600 rounded-lg hover:bg-gray-800 hover:text-white">Create</button>
                <button type="button" onClick={handleReset} className="w-20 bg-gray-600 rounded-lg hover:bg-gray-800 hover:text-white">Reset</button>
            </form>

        </div>
    )
}
