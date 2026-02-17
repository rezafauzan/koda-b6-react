import { useState } from "react"

function useLocalStorage(key) {
    const storage = window.localStorage.getItem(key) || null
    const [localStorageValue, setLocalStorageValue] = useState((storage != null ? JSON.parse(storage) : null))

    const setValue = (value) => {
        setLocalStorageValue(value)
        window.localStorage.setItem(key, JSON.stringify(value))
    }

    return [localStorageValue, setValue]
}

export default useLocalStorage