import React, { useState, useEffect, useContext } from 'react'
import PetCard from './PetCard'


const PetList = ({listOfPets}) => {

    return (
        <div className="PetList">
            {listOfPets.map((pet) => <PetCard key={pet.id} pet={pet} />)}
        </div>
    )
}

export default PetList