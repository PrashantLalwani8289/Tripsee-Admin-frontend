

const URL = "http://localhost:3002/api/v1"


export default {
    Auth:{
        SIGNUP:`${URL}/auth/signup`,
        LOGIN:`${URL}/auth/login`,
        GOOGLE_SIGN_IN:`${URL}/auth/google-signin`
    }
} as const;