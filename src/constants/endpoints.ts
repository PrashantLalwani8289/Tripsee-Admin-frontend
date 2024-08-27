


const URL = "http://localhost:3002/api/v1"


export default {
    Auth:{
        SIGNUP:`${URL}/auth/signup`,
        LOGIN:`${URL}/auth/login`,
        GOOGLE_SIGN_IN:`${URL}/auth/google-signin`
    },
    Dashboard:{
        MINI_CARD_DETAILS:`${URL}/admin-dashboard/mini-cards-details`
    }
} as const;