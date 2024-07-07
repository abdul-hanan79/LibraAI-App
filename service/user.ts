import axios from './axios'


export const loginApi = async (data: any) => {
    return axios.post('/sign-in', data)
}
export const registerApi = async (data: any) => {
    return axios.post('/register', data)
}
export const uploadDocumentsApi = async (data: any) => {
    return axios.post('/upload-documents', data)
}

export const getUserApi = async () => {
    return axios.get("/get-user")
}

export const becomeASellerApi = async () => {
   
}

export const confirmOTPApi = async (data: any) => {
    return axios.post("/confirm-otp", data)
}