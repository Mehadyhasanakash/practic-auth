import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import auth from '../../Firabase/Firabase.init'

const RequireAuth = ({children}) => {
    const [user] = useAuthState(auth);
    let location = useLocation();
    
            if(user){
                return children;
            } else{
                 return <Navigate to="/login" state={{form:location}} replace></Navigate>
            }
        
   
};

export default RequireAuth;