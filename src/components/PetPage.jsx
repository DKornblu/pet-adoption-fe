import React, { useState, useEffect, useContext } from 'react'
import { useParams } from 'react-router-dom';
import { PetsContextInstance } from '../context/PetsContext';

const PetPage = () => {
    // TODO: pet page= Should be able to see all the pets details of a specific pet
    // Pet details: Type (dog, cat), Name, Adoption Status, Picture, Height, Weight, Color, Bio, Hypoallergenic (yes/no), dietary restrictions, breed of animal (Poodle, Siamese) 

    const { selectOnePet } = useContext(PetsContextInstance)
    let { id } = useParams();

    const [currentPet, setCurrentPet] = useState({})

    const selectPet = async (petId) => {
        const petDetails = await selectOnePet(petId);
        console.log(`pet id ${petId} details`, petDetails);
        setCurrentPet(petDetails);
    }

    useEffect(() => {
        selectPet(id);
    }, [])

    return (
        <div className='PetPageContainer' style={{ width: '100%' }}>
            <h1>Pet Page</h1>
            <div className="petInfoContainer" >
                <div className="petImg" >
                    <img src={currentPet.picture || null} alt="petpic"/>
                </div>
                <div className="petInfo">
                    <p><b>Name:</b> {currentPet.name}</p>
                    <p><b>Type:</b> {currentPet.type}</p>
                    <p><b>Breed:</b> {currentPet.breed}</p>
                    <p><b>Height:</b> {currentPet.height}</p>
                    <p><b>Weight:</b> {currentPet.weight}</p>
                    <p><b>Color:</b> {currentPet.color}</p>
                    <p><b>Bio:</b> {currentPet.bio}</p>
                    <p><b>Hypoallergenic:</b> {currentPet.hypoallergenic}</p>
                    <p><b>Dietary restrictions: </b>{currentPet.dietary}</p>
                    <p><b>Adoption Status: </b>{currentPet.adoptionStatus}</p>
                </div>
            </div>
        </div>
    )
}

export default PetPage