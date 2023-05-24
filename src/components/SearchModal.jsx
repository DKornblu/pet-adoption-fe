import React, { useState, useContext, useEffect } from 'react';
import { Modal, Button, Dropdown, DropdownButton, Form } from 'react-bootstrap';
import PetList from './PetList';
import { PetsContextInstance } from '../context/PetsContext';


function SearchModal() {
    const { petList, searchInputObject, setsearchInputObject, searchPets } = useContext(PetsContextInstance)
    const [show, setShow] = useState(false);
    const [filteredList, setFilteredList] = useState([]);

    const handlesearchInput = (e) => {
        // console.log(e.target.type, e.target.name)
        setsearchInputObject({
            [e.target.type]: e.target.name
        })
    }

    const handleHideModal = () => {
        setShow(false)
        setsearchInputObject({})
        setFilteredList([])
    }

    const searchList = async () => {
        const searchPetList = await searchPets(searchInputObject);
        setFilteredList(searchPetList);
    };

    useEffect(() => {
        searchList();
    }, [searchInputObject])

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
                    <DropdownButton id="dropdown-basic-button" title={searchInputObject.type || 'Pet Type'} >
                        <Dropdown.Item href="#/action-1" type='type' name='Dog' onClick={handlesearchInput}>Dog</Dropdown.Item>
                        <Dropdown.Item href="#/action-2" type='type' name='Cat' onClick={handlesearchInput}>Cat</Dropdown.Item>
                        <Dropdown.Item href="#/action-3" type='type' name='Rabbit' onClick={handlesearchInput}>Rabbit</Dropdown.Item>
                        <Dropdown.Item href="#/action-4" type='type' name='Snake' onClick={handlesearchInput}>Snake</Dropdown.Item>
                    </DropdownButton>
                    {/* <Form.Group className="mb-3">
                        <Form.Select onChange={(event) => setsearchInputObject(event.target.value)}>
                            <option value="dog">Dog</option>
                            <option value="cat">Cat</option>
                            <option value="rabbit">Rabbit</option>
                            <option value="snake">Snake</option>
                        </Form.Select>
                    </Form.Group> */}
                    {/* <input className='SearchBar' type='search' name='search' placeholder="dog/cat/rabbit/snake" value={searchInputObject} onChange={handlesearchInput} /> */}
                    <PetList listOfPets={filteredList} />
                </Modal.Body>
            </Modal>
        </>
    );
}

export default SearchModal