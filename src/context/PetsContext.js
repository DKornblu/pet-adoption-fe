import React, { createContext, useState, useEffect } from "react";
import axios from 'axios';
import PetDb from "../PetDb.json";

const PetsContextInstance = createContext({});

const PetsContext = ({ children }) => {

    const [petList, setPetList] = useState([]);
    const [selectedPet, setSelectedPet] = useState({});
    const [isLoading, setIsLoading] = useState(false);
    const [searchInput, setSearchInput] = useState("")

    const REACT_APP_SERVER_URL = 'http://localhost:8080';

    useEffect(() => {
        fetchPets();
    }, []);

    const fetchPets = async () => {
        try {
            const res = await axios.get(`${REACT_APP_SERVER_URL}/pets`)
            console.log('All Pets: ',res.data)
            setPetList(res.data);
        } catch (err) {
            console.log(err);
        }
    }

    const selectOnePet = async (petId) => {
        try {
            const res = await axios.get(`${REACT_APP_SERVER_URL}/pets/${petId}`)
            console.log("Should be pet details", res.data)
            setSelectedPet(res.data);
        } catch (err) {
            console.log(err)
        }
    }

    const newSnake = {
        type: 'Dog',
        name: 'Barry',
        adoptionStatus: 'Available',
        picture: '',
        height: 23,
        weight: 56,
        bio: 'friendly',
        breed: 'golden retriever',
        color: 'gold',
        dietary: 'dog food',
        hypoallergenic: false
    }
    // TODO: make add pet form and get rid of snake
    const addPet = async () => {
        try {
            const res = await axios.post(`${REACT_APP_SERVER_URL}/pets`, newSnake)
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
        <PetsContextInstance.Provider value={{ fetchPets, selectOnePet, petList, setPetList, isLoading, setIsLoading, searchInput, setSearchInput, addPet, deletePet }}>
            {children}
        </PetsContextInstance.Provider>
    )
}

export { PetsContextInstance };
export default PetsContext;