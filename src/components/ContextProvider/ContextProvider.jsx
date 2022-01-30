import { createContext } from "react";

export const UserContext = createContext();
const ContextProvider = ({ children }) => {

    return (
        <UserContext.Provider
            value={
                {
                    user: 'prakash',
                    role: 'admin',
                }
            }
        >
            {children}
        </UserContext.Provider>
    );
}
export default ContextProvider;
