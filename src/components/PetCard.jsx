import React from 'react'

const PetCard = ({ pet }) => {
  
  // TODO: card should display img, name, current status + see more button
    return (
    <div className='PetCard'>
        <img src="" alt="" />
        <div className="PetName">Name: {pet.Name}</div>
        <div className="PetStatus">Status: {pet.Status}</div>
        <button>See More</button>
    </div>
  )
}

export default PetCard