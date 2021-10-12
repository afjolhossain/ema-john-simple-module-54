import React, { createContext } from 'react';
import useFirebase from '../useFirebase/useFirebase';

export const AuthContext = createContext();

const AuthProvider = ({childern}) => {
    const Allcontexts = useFirebase();
    return (
        <AuthContext.Provider value={Allcontexts}>
            {childern}
        </AuthContext.Provider>
    );
};

export default AuthProvider;