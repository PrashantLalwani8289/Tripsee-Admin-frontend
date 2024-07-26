import * as yup from "yup"

export const loginSchema = () => 
    yup.object().shape({
        email: yup.string().email().required("Email is required"),
        password: yup.string().min(8, "Password must be at least 8 characters long").required("Password is required"),
    });

export const signupSchema = () => 
    yup.object().shape({
        full_name:yup.string().required("Full name must consist of atleast 4 letters"),
        email: yup.string().email().required("Email is required"),
        password: yup.string().min(8, "Password must be at least 8 characters long").required("Password is required"),
        confirm_password: yup.string().oneOf([yup.ref('password'), null], 'Passwords must match'),
    })