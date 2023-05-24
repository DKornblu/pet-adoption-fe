import React, { createContext, useState, useEffect } from "react";
import axios from 'axios';

const UsersContextInstance = createContext({});

const UsersContext = ({ children }) => {
    const [usersList, setUsersList] = useState([]);
    const [userDetails, setUserDetails] = useState({});
    const [token, setToken] = useState(localStorage.getItem("token") || ''); // initialize token to get from local storage otherwise empty
    const [headersConfig, setHeadersConfig] = useState({ headers: { Authorization: `Bearer ${token}` } } || {})
    const [currentUserName, setCurrentUserName] = useState(localStorage.getItem("currentName") || '');
    const [currentUserId, setCurrentUserId] = useState(localStorage.getItem("currentId") || '');
    const [isAdmin, setIsAdmin] = useState(localStorage.getItem("isAdmin") || 0);


    const REACT_APP_SERVER_URL = 'http://localhost:8080';

    useEffect(() => {
        fetchUsers();
        console.log("headers config", headersConfig);
    }, []);

    const fetchUsers = async () => {
        try {
            const res = await axios.get(`${REACT_APP_SERVER_URL}/users`)
            console.log("All users: ", res.data)
            setUsersList(res.data);
        } catch (err) {
            console.log(err);
        }
    }

    const loginUser = async (e) => {
        try {
            const res = await axios.post(`${REACT_APP_SERVER_URL}/users/login`, { email: userDetails.email, password: userDetails.password });
            console.log("UsersContext- userDetails: ", userDetails)
            return res;
        } catch (err) {
            return err
        }
    }

    const signupUser = async () => {
        try {
            const res = await axios.post(`${REACT_APP_SERVER_URL}/users/signup`, userDetails)
            setUsersList([...usersList, res.data]);
            return res
        } catch (err) {
            console.log(err);
        }
    }


    return (
        <UsersContextInstance.Provider value={{ token, usersList, setHeadersConfig, setToken, userDetails, setUserDetails, loginUser, signupUser, currentUserName, setCurrentUserName, currentUserId, setCurrentUserId, isAdmin, setIsAdmin }}>
            {children}
        </UsersContextInstance.Provider>
    )
}

export { UsersContextInstance };
export default UsersContext;