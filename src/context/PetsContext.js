import React, { createContext, useState, useEffect, useContext } from "react";
import axios from 'axios';
import { UsersContextInstance } from '../context/UsersContext';

const PetsContextInstance = createContext({});


const PetsContext = ({ children }) => {
    
    const { headersConfig } = useContext(UsersContextInstance);

    const [petList, setPetList] = useState([]);
    const [filteredList, setFilteredList] = useState([]);
    const [selectedPet, setSelectedPet] = useState({});
    const [isLoading, setIsLoading] = useState(false);
    const [searchInputObject, setsearchInputObject] = useState({})

    const REACT_APP_SERVER_URL = 'http://localhost:8080';

    useEffect(() => {
        fetchPets();
    }, []);

    const fetchPets = async () => {
        try {
            const res = await axios.get(`${REACT_APP_SERVER_URL}/pets`)
            console.log('All Pets: ', res.data)
            setPetList(res.data);
        } catch (err) {
            console.log(err);
        }
    }

    const selectOnePet = async (petId) => {
        try {
            const res = await axios.get(`${REACT_APP_SERVER_URL}/pets/${petId}`)
            console.log("Single pet details", res.data)
            return res.data;
        } catch (err) {
            console.log(err)
        }
    }

    const searchPets = async (searchDetailsObj) => {
        try {
            if (Object.keys(searchDetailsObj).length) {
                // let queryParams = `?`;
                // for (let key in searchDetailsObj) {
                //     queryParams += `${key}=${searchDetailsObj[key]}&`
                // }
                // // // iterate method 2
                // // const searchDetailsArray = Object.entries(searchDetailsObj); // convert object to array of key/value arrays
                // // searchDetailsArray.forEach(([key, value]) => {
                // //     queryParams += `${key}=${value}&`;
                // // });
                // const finalQueryParams = queryParams.substring(0, queryParams.length - 1);
                // const res = await axios.get(`${REACT_APP_SERVER_URL}/pets/search${finalQueryParams}`)

                const res = await axios.get(`${REACT_APP_SERVER_URL}/pets/search`, { params: searchDetailsObj })
                console.log("Filtered pet list: ", res.data)
                return res.data
            } else {
                const res = await axios.get(`${REACT_APP_SERVER_URL}/pets`)
                console.log("Entire pet list: ", res.data)
                return res.data
            }
        } catch (err) {
            console.log(err)
        }
    }

    // const newPet = {
    //     type: 'Dog',
    //     name: 'Barry',
    //     adoptionStatus: 'Available',
    //     picture: '',
    //     height: 23,
    //     weight: 56,
    //     bio: 'friendly',
    //     breed: 'golden retriever',
    //     color: 'gold',
    //     dietary: 'dog food',
    //     hypoallergenic: false
    // }
    // TODO: make add pet form and get rid of snake
    const addPet = async (newPet) => {
        try {
            const res = await axios.post(`${REACT_APP_SERVER_URL}/pets`, newPet, headersConfig)
            console.log("res data", res.data)
            setPetList([...petList, res.data]);
        } catch (err) {
            console.log(err);
        }
    }

    const deletePet = async (petId) => {
        try {
            const res = await axios.delete(`${REACT_APP_SERVER_URL}/pets/${petId}`)
            console.log("res data", res.data)
            if (res.data.ok) {
                const newPetList = petList.filter((pet) => pet.id !== petId);
                setPetList(newPetList);
                console.log('deleted', petId)
            }
        } catch (err) {
            console.log(err);
        }
    }

    const editPet = async (updatedPet) => {
        try {
            const res = await axios.put(`${REACT_APP_SERVER_URL}/pets/${updatedPet.id}`, { ...updatedPet })
            if (res.data.ok) {
                const update = petList.filter((pet) => pet.id === res.data.updatedId)
                console.log('updated pet: ', update)
                setPetList([...petList, ...update])
            }
        } catch (err) {
            console.log(err);
        }
        setSelectedPet({});
    }

    return (
        <PetsContextInstance.Provider value={{ fetchPets, selectOnePet, selectedPet, setSelectedPet, petList, setPetList, filteredList, setFilteredList, isLoading, setIsLoading, searchInputObject, setsearchInputObject, searchPets, addPet, deletePet }}>
            {children}
        </PetsContextInstance.Provider>
    )
}

export { PetsContextInstance };
export default PetsContext;