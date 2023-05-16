import React, { useState, useContext, useEffect } from 'react';
import { Modal, Button, Dropdown, DropdownButton, Form } from 'react-bootstrap';
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
                    <DropdownButton id="dropdown-basic-button" title="Pet Type" >
                        <Dropdown.Item href="#/action-1" onClick={() => setSearchInput('dog')}>Dog</Dropdown.Item>
                        <Dropdown.Item href="#/action-2" onClick={() => setSearchInput('cat')}>Cat</Dropdown.Item>
                        <Dropdown.Item href="#/action-3" onClick={() => setSearchInput('rabbit')}>Rabbit</Dropdown.Item>
                        <Dropdown.Item href="#/action-4" onClick={() => setSearchInput('snake')}>Snake</Dropdown.Item>
                    </DropdownButton>
                    <Form.Group className="mb-3">
                        <Form.Select onChange={(event) => setSearchInput(event.target.value)}>
                            <option value="dog">Dog</option>
                            <option value="cat">Cat</option>
                            <option value="rabbit">Rabbit</option>
                            <option value="snake">Snake</option>
                        </Form.Select>
                    </Form.Group>
                    <input className='SearchBar' type='search' name='search' placeholder="dog/cat/rabbit/snake" value={searchInput} onChange={handleSearchInput} />
                    <PetList listOfPets={filteredList} />
                </Modal.Body>
            </Modal>
        </>
    );
}

export default SearchModal