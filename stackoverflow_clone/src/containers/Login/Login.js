import { Formik, Form } from "formik";
import { useHistory } from "react-router-dom";
import * as Yup from 'yup';
import TextField from "../../components/TextField/TextField";
import './Login.css';

const Login = () => {
    const validate = Yup.object({
        email: Yup.string().email('Invalid Email').required('Email is required'),
        password: Yup.string().min(6, 'Password must be at least 6 characters').required('Password is required')
    })
    const history = useHistory();
    return (
        <Formik
            initialValues={{ email: '', password: '' }}
            validationSchema={validate}
            onSubmit={values => {
                console.log(values)
                history.push('/featured-questions');
            }}
        >
            {formik => (
                <div className="form_container">
                    {/* {console.log(formik.values)} */}
                    <Form className="formContainer">
                        <h1 style={{textAlign: 'center', color: '#242729'}}>Login to continue</h1>
                        <TextField type="email" name="email" label="Email" />
                        <TextField type="password" name="password" label="Password" />
                        <button type="submit" className="loginButton">Login</button>
                    </Form>
                    <br/>
                    <div className="register_action_container">
                        <span className="register_action">Don't have an account? <a href="/">Sign up</a></span>
                    </div>
                </div>
            )}
        </Formik>
    )
}

export default Login;