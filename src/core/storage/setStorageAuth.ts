export const setStorageAuth = { 
    setUserId: (userId: string) => {
        localStorage.setItem('user-id', userId);
    },
    setUserEmail: (email: string) => { 
        localStorage.setItem('user-email', email);
    },
    setUserPassword: (password: string) => { 
        localStorage.setItem('user-password', password);
    },
    setUserToken: (token: string) => { 
        localStorage.setItem('user-token', token);
    }
}