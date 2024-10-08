export const getStorageAuth = () => ({
    userId: localStorage.getItem('user-id'),
    userEmail: localStorage.getItem('user-emai'),
    userPassword: localStorage.getItem('user-password'),
    userToken: localStorage.getItem('user-token') 
})