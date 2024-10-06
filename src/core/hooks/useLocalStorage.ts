export const useLocalStorage = (key: string, defaultValue?: string) => { 
    const getItem = () => localStorage.getItem(key)
    
    const value = () => { 

        if (!getItem() && defaultValue) {
            window.localStorage.setItem(key, defaultValue)
        }

        return getItem()
    }

    const setValue = (value: string) => { 
        window.localStorage.setItem(key, value)
    }

    const remove = () => { 
        window.localStorage.removeItem(key);
    }


    return [
        value(),
        setValue,
        remove
    ]
};