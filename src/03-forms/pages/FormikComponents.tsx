import { ErrorMessage, Field, Form, Formik } from "formik"
import * as Yup from "yup";

export const FormikComponents = () => {

    return (
        <div className="text-xl mt-5">
            <h1>Formik Components</h1>
            <Formik initialValues={{
                firstName: '',
                lastName: '',
                email: '',
                terms: false,
                jobType: ''
            }}
                onSubmit={values => {
                    alert(JSON.stringify(values, null, 2));
                }}
                validationSchema={Yup.object({
                    firstName: Yup.string()
                        .max(15, 'Debe de tener 15 caracteres o menos')
                        .required('Requerido'),
                    lastName: Yup.string()
                        .max(15, 'Debe de tener 15 caracteres o menos')
                        .required('Requerido'),
                    email: Yup.string()
                        .email('Debe de ser un email válido')
                        .required('Requerido'),
                    terms: Yup.boolean()
                        .oneOf([true], 'Debe de aceptar las condiciones'),
                    jobType: Yup.string()
                        .notOneOf(['it-junior'], "Esta opcion no es permitida")
                        .required('Requerido')
                })}>
                {
                    formik => (<Form className="flex flex-col mt-5 space-y-2 text-black">
                        <label className="text-white" htmlFor="firstName">First Name</label>
                        <Field name="firstName" type="text" />
                        <ErrorMessage name="firstName" component="span" className="text-red-600 text-lg" />

                        <label className="text-white" htmlFor="lastName">Last Name</label>
                        <Field name="lastName" type="text" />
                        <ErrorMessage name="lastName" component="span" className="text-red-600 text-lg" />

                        <label className="text-white" htmlFor="email">Email</label>
                        <Field name="email" type="text" />
                        <ErrorMessage name="email" component="span" className="text-red-600 text-lg" />

                        <label className="text-white text-base" htmlFor="jobType">Job Type</label>
                        <Field name="jobType" as="select" >
                            <option value="">Pick Something</option>
                            <option value="developer">Developer</option>
                            <option value="designer">Designer</option>
                            <option value="it-junior">It-Junior</option>
                            <option value="it-senior">It-Senior</option>
                        </Field>
                        <ErrorMessage name="jobType" component="span" className="text-red-600 text-lg" />

                        <label className="text-white text-base" >
                            <Field name="terms" type="checkbox" className="mr-2" />
                            Terms and conditions</label>
                        <ErrorMessage name="terms" component="span" className="text-red-600 text-lg" />

                        <button type="submit" className="w-20 bg-gray-600 rounded-lg hover:bg-gray-800 hover:text-white">Create</button>
                        {/* <button type="button" onClick={handleReset} className="w-20 bg-gray-600 rounded-lg hover:bg-gray-800 hover:text-white">Reset</button> */}
                    </Form>)
                }
            </Formik>
        </div>
    )
}
