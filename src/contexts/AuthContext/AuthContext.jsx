import { createContext, useContext, useState } from "react"

const AuthContext = createContext({
  isLogged: undefined,
  setIsLogged: () => { }
})

export const useAuth = () => {
  return useContext(AuthContext)
}

// TODO: Implementar tipagem com proptypes
export const AuthProvider = ({ children }) => {
  const [isLogged, setIsLogged] = useState(false)

  return (
    <AuthContext.Provider value={{ isLogged, setIsLogged }}>
      {children}
    </AuthContext.Provider>
  )
}

