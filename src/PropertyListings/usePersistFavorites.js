import { useState } from 'react'

function usePersistFavorites(key, initialValue) {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key)
      return item ? JSON.parse(item).value : initialValue
    } catch(e) {
      console.error(e)
      return initialValue
    }
  })

  const setValue = (isFavorited) => {
    try {
      setStoredValue(isFavorited)
      window.localStorage.setItem(key, JSON.stringify({id: key, value: isFavorited}))
    } catch(error) {
      console.log(error)
      return false
    }
  }

  return [storedValue, setValue]
}

export default usePersistFavorites