import { Form, Formik } from "formik";
import formJson from "../data/custom-form.json";
import { MySelect, MyTextInput } from "../components";
import * as Yup from 'yup';

const initialValues: { [x: string]: any } = {};
const requiredFields: { [key: string]: any } = {};

for (const input of formJson) {
    initialValues[input.name] = input.value;

    if (!input.validations) continue;

    let schema = Yup.string();
    for (const rule of input.validations) {
        if (rule.type === "required") {
            schema = schema.required('Este campo es requerido')
        }
        if (rule.type === "minLength") {
            schema = schema.min((rule as any).value || 2, `Mínimo de ${(rule as any).value || 2} caracteres`)
        }
        if (rule.type === "email") {
            schema = schema.email("Debe ser un correo válido")
        }
    }

    requiredFields[input.name] = schema;
}

const validationSchema = Yup.object({ ...requiredFields })
export const DynamicForm = () => {
    return (
        <div className="text-xl mt-5">
            <h1>Dynamic Form</h1>
            <Formik
                initialValues={initialValues}
                onSubmit={(values) => console.log(values)}
                validationSchema={validationSchema}
            >
                {(formik) => (
                    <Form noValidate className="flex flex-col mt-5 space-y-2 text-black">
                        {formJson.map(({ label, name, placeholder, type, options }) => {
                            if (type === "input" || type === "password" || type === "email") {
                                return (
                                    <MyTextInput
                                        key={name}
                                        name={name}
                                        label={label}
                                        placeholder={placeholder}
                                        type={type as any}
                                    />
                                );
                            } else if (type === "select") {
                                return <MySelect
                                    key={name}
                                    label={label}
                                    name={name}
                                >
                                    <option value="">Select an option</option>
                                    {
                                        options?.map(({ id, label }) => (
                                            <option key={id} value={id}>{label}</option>
                                        ))
                                    }
                                </MySelect>
                            }
                            return
                        })}
                        <button
                            type="submit"
                            className="text-xl bg-blue-600 w-24 rounded-xl mt-3 hover:bg-green-500"
                        >
                            Submit
                        </button>
                    </Form>
                )}
            </Formik>
        </div>
    );
};
