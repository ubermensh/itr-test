import React from "react";
import {
    Route,
    Redirect
} from "react-router-dom"

const PrivateRoute = ({
    children,
    ...rest
}) => {
    return ( <
        Route {...rest
        }
        render = {
            ({ location }) =>
                localStorage.getItem('jwtToken') !== null ? ( children) : 
            ( < Redirect to = { { pathname: "/login"} } />) } />
    );
};

export default PrivateRoute;
