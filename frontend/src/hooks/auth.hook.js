import { useState, useCallback, useEffect } from 'react'

const storageName = 'userData'

export const useAuth = () => {
    const [token, setToken] = useState(null)
    const [userId, setUserId] = useState(null)
    const [rules, setRules] = useState(null)
    const [ready, setReady] = useState(false)
    
    const loginAuth = useCallback((jwtToken) => {
        
        setToken(jwtToken)
        // setUserId(id)
        // setRules(rules)
        
        localStorage.setItem(storageName, JSON.stringify({
             token:jwtToken
        }))
    }, [])

    const logout = useCallback(() => {
        setToken(null)
        setUserId(null)
        setRules(null)
        localStorage.removeItem(storageName)
    },[])

    
    useEffect(() => {
        const data = JSON.parse(localStorage.getItem(storageName))

        if (data && data.token) {
            loginAuth(data.token, data.userId, data.rules)
        }
        setReady(true)
    }, [loginAuth])
    return { loginAuth, logout, token, userId, ready, rules}
    
}