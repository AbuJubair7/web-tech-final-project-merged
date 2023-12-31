import { ReactNode, createContext, useContext, useState } from "react";

type authContextType = {  // making the data type for the context
    user: boolean;
    login: () => void;
    logout: () => void;
};

const authContextDefaultValues: authContextType = { // setting the default values for the context
    user: false,
    login: () => {},
    logout: () => {},
};

const AuthContext = createContext<authContextType>(authContextDefaultValues);

export function useAuth() {
    return useContext(AuthContext);
}

type Props = {
    children: ReactNode;
};

export function AuthProvider({ children }: Props) {
    const [user, setUser] = useState(false)

    const login = () => {
        setUser(true);
    };

    const logout = () => {
        setUser(false);
    };

    const value = {
        user,
        login,
        logout,
    };
    return (
        <>
            <AuthContext.Provider value={value}>
                {children}
            </AuthContext.Provider>
        </>
    );
}