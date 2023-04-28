import { createContext, useContext, useState } from "react";

const UserContext = createContext({});

export function useUser() {
    return useContext(UserContext);
}

export function UserProvider({ children }) {
    const [user, setUser] = useState(null);

    function logInUser(newUser) {
        setUser(newUser);
    }

    function logOutUser() {
        setUser(null);
    }

    return (
        <UserContext.Provider value={{
            user,
            logInUser,
            logOutUser
        }}>
            {children}
        </UserContext.Provider>
    )
}