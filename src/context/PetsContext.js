import React, { createContext, useState, useEffect } from "react";
import PetDb from "../PetDb.json";

const PetsContextInstance = createContext({});

const PetsContext = ({ children }) => {

    const [petList, setPetList] = useState(PetDb);
    const [isLoading, setIsLoading] = useState(false);

    const getPetList = () => {
        console.log(petList);
    }

    useEffect(() => {
        getPetList();
    }, []);

    return (
        <PetsContextInstance.Provider value={{ petList, setPetList, isLoading, setIsLoading }}>
            {children}
        </PetsContextInstance.Provider>
    )
}

export { PetsContextInstance };
export default PetsContext;