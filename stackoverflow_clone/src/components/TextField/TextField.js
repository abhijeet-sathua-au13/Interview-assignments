import { useField,ErrorMessage } from "formik";
import './TextField.css';

const TextField = ({label, ...props}) => {
    const [field, meta] = useField(props);
    const inputGroup = {
        display: 'flex',
        width: '100%',
        padding: '0.5em',
        flexDirection: 'column',
        boxSizing: 'border-box'
    }
    
    return (
        <div style={inputGroup}>
            <label htmlFor={field.name} style={{fontSize: '1em', marginBottom: '0.6em'}}>{label}</label>
            <input autoComplete="off"
            className={`textbox ${meta.touched && meta.error && 'is-invalid'}`}
             {...field} {...props} 
            />
            <ErrorMessage component="div" name={field.name} className="error"/>
        </div>
    )
}

export default TextField;