import { ErrorMessage, useField } from "formik"

interface Props {
    label: string;
    name: string;
    placeholder?: string;
    [x: string]: any;
}

export const MySelect = ({ label, ...props }: Props) => {
    const [field] = useField(props);
    return (
        <>
            <label htmlFor={props.id || props.name} className="text-white">{label}</label>
            <select {...field} {...props} />
            <ErrorMessage name={props.name} component="span" className="text-red-600 text-lg" />
        </>
    )
}
