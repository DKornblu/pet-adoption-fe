import React, { useContext } from 'react'
import PetCard from './PetCard'
import { PetsContextInstance } from '../context/PetsContext'


const PetList = () => {
    const { petList } = useContext(PetsContextInstance);

    return (
        <div>
            {petList.map(
                (pet) => <PetCard pet={pet} />)
            }
        </div>
    )
}

export default PetList