import { ErrorMessage, useField } from "formik"

interface Props {
    label: string;
    name: string;
    [x: string]: any;
}

export const MyCheckBox = ({ label, ...props }: Props) => {
    const [field] = useField({ ...props, type: 'checkbox' });
    return (
        <>
            <label className="text-white">
                <input type="checkbox" className="mr-2" {...field} {...props} />
                {label}
            </label>
            <ErrorMessage name={props.name} component="span" className="text-red-600 text-lg" />
        </>
    )
}
