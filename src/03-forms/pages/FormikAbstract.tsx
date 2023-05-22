import { Form, Formik } from "formik"
import * as Yup from "yup";
import { MyCheckBox, MySelect, MyTextInput } from '../components/';

export const FormikAbstract = () => {

    return (
        <div className="text-xl mt-5">
            <h1>Formik Abstract</h1>
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
                        <MyTextInput label='First Name' name="firstName" placeholder="John" />

                        <MyTextInput label='Last Name' name="lastName" placeholder="Doe" />

                        <MyTextInput label='Email' name="email" type="email" placeholder="johndoe@gmail.com" />

                        <MySelect label="Job Type" name="jobType" >
                            <option value="">Pick Something</option>
                            <option value="developer">Developer</option>
                            <option value="designer">Designer</option>
                            <option value="it-junior">It-Junior</option>
                            <option value="it-senior">It-Senior</option>
                        </MySelect>

                        <MyCheckBox label="Terms & conditions" name="terms" />

                        <button type="submit" className="w-20 bg-gray-600 rounded-lg hover:bg-gray-800 hover:text-white">Create</button>
                        {/* <button type="button" onClick={handleReset} className="w-20 bg-gray-600 rounded-lg hover:bg-gray-800 hover:text-white">Reset</button> */}
                    </Form>)
                }
            </Formik>
        </div>
    )
}
