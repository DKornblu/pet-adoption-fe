import React, { createContext, useState, useEffect } from "react";

const UsersContextInstance = createContext({});

const UsersContext = ({ children }) => {

    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [userDetails, setUserDetails] = useState({})

    // const getPetList = () => {
    //     console.log(petList);
    // }

    // useEffect(() => {
    //     getPetList();
    // }, []);

    return (
        <UsersContextInstance.Provider value={{ isLoggedIn, setIsLoggedIn, userDetails, setUserDetails }}>
            {children}
        </UsersContextInstance.Provider>
    )
}

export { UsersContextInstance };
export default UsersContext;