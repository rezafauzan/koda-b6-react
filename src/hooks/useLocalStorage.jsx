import { useState } from "react"

function useLocalStorage(key) {
    const [localStorageValue, setLocalStorageValue] = useState(JSON.parse(window.localStorage.getItem(key)) || null)

    const setValue = (value) => {
        setLocalStorageValue(value)
        window.localStorage.setItem(key, JSON.stringify(value))
    }

    return [localStorageValue, setValue]
}

export default useLocalStorage