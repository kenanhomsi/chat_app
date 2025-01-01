import React, { createContext, useContext, useState } from "react";

interface AuthContextType {
    authUser: {
        id: string,
        fullname: string,
        username: string,
        profileImage: string,
    } | null;
    setAuthUser: React.Dispatch<React.SetStateAction<{
        id: string,
        fullname: string,
        username: string,
        profileImage: string,
    } | null>>;
}

const defaultAuthContextValue: AuthContextType = {
    authUser: {
        id: '',
        fullname: '',
        username: '',
        profileImage: '',
    },
    setAuthUser: () => { }
};

export const AuthContext = createContext<AuthContextType>(defaultAuthContextValue);

export const useAuthContext = () => {
    return useContext(AuthContext);
};

export const AuthContextProvider = ({ children }: { children: React.ReactNode }) => {
    const [authUser, setAuthUser] = useState(JSON.parse(localStorage.getItem('chat-user')!) || null);
    return (
        <AuthContext.Provider value={{ authUser, setAuthUser }}>
            {children}
        </AuthContext.Provider>
    );
};
