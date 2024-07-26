import {ReactNode} from "react"


export interface initialState {
    isAuthenticated: boolean;
    user:userData|null;
}

export interface userData{
    id: string;
    name: string;
    email: string;
    token: string;

}

export interface ProtectedRoutesProps {
    isAuthenticated: boolean;
    requiredPermissions: string;
    children?:ReactNode
}

export interface ILoginSchema{
    email?: string;
    password?: string;
}

export interface ISignupSchema{
    full_name?:string;
    email?: string;
    password?: string;
    confirm_password?: string;
}

export interface Token{
    credentials?:string
}