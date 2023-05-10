import React, { useState, useEffect, useContext } from 'react'
import PetCard from './PetCard'


const PetList = ({listOfPets}) => {

    return (
        <div className="PetList">
            {listOfPets.length ? listOfPets.map((pet) => <PetCard key={pet.id} pet={pet} />) : null}
        </div>
    )
}

export default PetList