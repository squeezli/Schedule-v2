import {createContext} from 'react'

function noop(){

}

export const AuthContext = createContext({
    token: null,
    userId:null,
    rules:null,
    login:noop,
    logout:noop,
    isAuthenticated:false,
    checkedTheme:false,
})