import { useState, useEffect } from "react";

export function useLocalStorage<T>(key: string, initialValue: T) {
    const [storedValue, setStoredValue] = useState<T>(initialValue);

    useEffect(() => {
        const itemExists = window.localStorage.getItem(key);
        if (itemExists) {
            setStoredValue(JSON.parse(itemExists) as T);
        } else {
            setStoredValue(initialValue);
        }
    }, [key]);

    useEffect(() => {
        window.localStorage.setItem(key, JSON.stringify(storedValue));
    }, [key, storedValue]);

    return [storedValue, setStoredValue] as const;
}
