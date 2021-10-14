import React, { createContext } from 'react';
import useFirebase from '../useFirebase/useFirebase';

export const AuthContext = createContext();

const AuthProvider = ({children}) => {
    const Allcontexts = useFirebase();
    return (
        <AuthContext.Provider value={Allcontexts}>
            {children}
        </AuthContext.Provider>
    );
};
    
export default AuthProvider;