import axios from "axios"

const baseUrl = process.env.BASE_URL

export const apiClient = axios.create({
    baseURL: baseUrL,
})
apiClient.interceptors.request.use((request) => {
    request.headers.Authorization = 'check'
    request.headers.AccessToken = 'aatoken'
})