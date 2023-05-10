import React, { useState, useContext, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import PetList from './PetList';
import { PetsContextInstance } from '../context/PetsContext';


function SearchModal() {
    const { petList, searchInput, setSearchInput } = useContext(PetsContextInstance)
    const [show, setShow] = useState(false);
    const [filteredList, setFilteredList] = useState([]);

    const handleSearchInput = (e) => {
        setSearchInput(e.target.value)
    }

    const handleHideModal = () => {
        setShow(false)
        setSearchInput('')
        setFilteredList([])
    }

    const searchList = () => {
        const serachInputLowerCase = searchInput.toLowerCase()
        const searchPetList =
            searchInput ? petList.filter(
                pet => pet.type.toLowerCase().startsWith(serachInputLowerCase))
                : []
        setFilteredList(searchPetList);
    };

    useEffect(() => {
        searchList();
    }, [searchInput])

    return (
        <>
            <Button
                style={{ backgroundColor: 'transparent', border: '1px solid white' }}
                onMouseOver={(e) => e.target.style.backgroundColor = 'grey'}
                onMouseOut={(e) => e.target.style.backgroundColor = 'transparent'}
                onClick={() => setShow(true)}>
                Browse our Pets
            </Button>

            <Modal
                show={show}
                onHide={handleHideModal}
                dialogClassName="modal-90w"
                backdrop="static"
                style={{ maxHeight: "97vh" }}
            >
                <Modal.Header closeButton>
                    <Modal.Title id="example-custom-modal-styling-title">
                        Browse Pets by Type (dog, cat, etc...)
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body className="ModalSearchContainer">
                    <input className='SearchBar' type='search' name='search' placeholder="search" value={searchInput} onChange={handleSearchInput} />
                    <PetList listOfPets={filteredList} />
                </Modal.Body>
            </Modal>
        </>
    );
}

export default SearchModal