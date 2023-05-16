import React, { createContext, useState, useEffect } from "react";
import axios from 'axios';

const UsersContextInstance = createContext({});

const UsersContext = ({ children }) => {
    const [usersList, setUsersList] = useState([]);
    const [userDetails, setUserDetails] = useState({});
    const [token, setToken] = useState(localStorage.getItem("token") || ''); // initialize token to get from local storage otherwise empty
    const [currentUserName, setCurrentUserName] = useState(localStorage.getItem("currentName") || '');


    const REACT_APP_SERVER_URL = 'http://localhost:8080';

    useEffect(() => {
        fetchUsers();
    }, []);

    useEffect(() => {
        console.log("UsersContext- userDetails: ", userDetails)
    }, [userDetails]);

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
        <UsersContextInstance.Provider value={{ token, setToken, userDetails, setUserDetails, loginUser, signupUser, setCurrentUserName, currentUserName }}>
            {children}
        </UsersContextInstance.Provider>
    )
}

export { UsersContextInstance };
export default UsersContext;