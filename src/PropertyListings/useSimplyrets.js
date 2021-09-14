import { useEffect, useReducer, useRef } from "react";

function useSimplyrets(endpoint, options) {
  const url = `https://api.simplyrets.com${endpoint}`
  const cancelRequest = useRef(false)

  const initialState = {
    status: 'pristine',
    error: null,
    data: null
  }

  const fetchReducer = (state, action) => {
    switch (action.type) {
      case 'loading':
        return { ...initialState }
      case 'fetched':
        return { ...initialState, data: action.payload }
      case 'error':
        return { ...initialState, error: action.payload }
      default:
        return state
    }
  }

  const [state, dispatch] = useReducer(fetchReducer, initialState)

  useEffect(() => {
    if (!url) return

    const fetchData = async () => {
      const cached = window.localStorage.getItem(url)
      if(cached) {
        console.log('reading listings from cached local storage')
        dispatch({ type: 'fetched', payload: JSON.parse(cached) })
        return
      }

      try {
        const username = process.env.REACT_APP_SIMPLYRETS_USERNAME
        const password = process.env.REACT_APP_SIMPLYRETS_PASSWORD
        const auth = btoa(`${username}:${password}`)
        const headers = new Headers()
        headers.append('Authorization', `Basic ${auth}`)

        const response = await fetch(url, { headers, ...options })
        if (!response.ok) {
          throw new Error(response.statusText)
        }

        const data = await response.json()
        if (cancelRequest.current) return

        window.localStorage.setItem(url, JSON.stringify(data))
        dispatch({ type: 'fetched', payload: data })
      } catch (error) {
        if (cancelRequest.current) return
        dispatch({ type: 'error', payload: error })
      }
    }

    fetchData()
    return () => {
      cancelRequest.current = true
    }
  }, [url, options])

  return state
}

export default useSimplyrets