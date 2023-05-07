import React, { createContext, useState, useEffect } from "react";

const UsersContextInstance = createContext({});

const UsersContext = ({ children }) => {

    const [isLoggedIn, setIsLoggedIn] = useState(false);

    // const getPetList = () => {
    //     console.log(petList);
    // }

    // useEffect(() => {
    //     getPetList();
    // }, []);

    return (
        <UsersContextInstance.Provider value={{ isLoggedIn, setIsLoggedIn }}>
            {children}
        </UsersContextInstance.Provider>
    )
}

export { UsersContextInstance };
export default UsersContext;