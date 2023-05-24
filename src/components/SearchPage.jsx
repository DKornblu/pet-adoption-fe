import React, { useState, useContext, useEffect } from 'react'
import { Button, Form, Dropdown, DropdownButton } from 'react-bootstrap'
import { PetsContextInstance } from '../context/PetsContext';
import PetList from './PetList';

const SearchPage = () => {
    const { searchInputObject, setsearchInputObject, searchPets, filteredList, setFilteredList } = useContext(PetsContextInstance)

    const searchList = async (e) => {
        e.preventDefault()
        const searchPetList = await searchPets(searchInputObject);
        console.log(searchPetList);
        setFilteredList(searchPetList);
    };

    useEffect(() => {
        console.log('searchInput', searchInputObject)
    }, [searchInputObject])


    return (
        <div className="SearchPageContainer">
            <h1>Search Page</h1>

            <Form className='searchForm'>

                {/* <DropdownButton
                    id="dropdown-basic-button" title={searchInputObject.type || 'Pet Type'}
                    onSelect={(eventKey) => setsearchInputObject({
                        ...searchInputObject,
                        'type': eventKey
                        // [e.target.type]: e.target.value
                    })} >
                    <Dropdown.Item type='type' eventKey='Dog'>Dog</Dropdown.Item>
                    <Dropdown.Item type='type' eventKey='Cat'>Cat</Dropdown.Item>
                    <Dropdown.Item type='type' eventKey='Rabbit'>Rabbit</Dropdown.Item>
                    <Dropdown.Item type='type' eventKey='Snake'>Snake</Dropdown.Item>
                </DropdownButton> */}
                <div className="searchFormInput">
                        <Form.Group className="mb-3" >
                            <Form.Label><h4>Type</h4></Form.Label>
                            <Form.Select defaultValue="default" onChange={
                                (e) => {
                                    if (e.target.value === "default") {
                                        const { type, ...updatedObject } = searchInputObject;
                                        setsearchInputObject(updatedObject)
                                    } else {
                                        setsearchInputObject({
                                            ...searchInputObject, 'type': e.target.value
                                        })
                                    }
                                }}>
                                <option value="default" >Select animal type</option>
                                <option value="Dog">Dog</option>
                                <option value="Cat">Cat</option>
                                <option value="Rabbit">Rabbit</option>
                                <option value="Snake">Snake</option>
                            </Form.Select>
                        </Form.Group>

                        <Form.Group className="mb-3" >
                            <Form.Label><h4>Adoption Status</h4></Form.Label>
                            <Form.Select onChange={
                                (e) => {
                                    if (e.target.value === "default") {
                                        const { adoptionStatus, ...updatedObject } = searchInputObject;
                                        setsearchInputObject(updatedObject)
                                    } else {
                                        setsearchInputObject({
                                            ...searchInputObject, 'adoptionStatus': e.target.value
                                        })
                                    }
                                }}>
                                <option value='default'>Select adoption status</option>
                                <option value="Available">Available</option>
                                <option value="Fostered">Fostered</option>
                                <option value="Adopted">Adopted</option>
                            </Form.Select>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label> <h4>Breed</h4></Form.Label>
                            <Form.Control
                                type="breed"
                                placeholder="Enter pet breed"
                                name='breed'
                                // value={searchInputObject.breed}
                                onChange={(e) => {
                                    if (e.target.value === "") {
                                        const { breed, ...updatedObject } = searchInputObject;
                                        setsearchInputObject(updatedObject)
                                    } else {
                                        setsearchInputObject({
                                            ...searchInputObject, 'breed': e.target.value
                                        })
                                    }
                                }}
                                autoFocus
                            />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label> <h4>Height</h4></Form.Label>
                            <Form.Control
                                type="minHeight"
                                placeholder="Enter minimum height"
                                name='minHeight'
                                // value={searchInputObject.breed}
                                onChange={
                                    (e) => {
                                        if (e.target.value === "") {
                                            const { minHeight, ...updatedObject } = searchInputObject;
                                            setsearchInputObject(updatedObject)
                                        } else {
                                            setsearchInputObject({
                                                ...searchInputObject, 'minHeight': e.target.value
                                            })
                                        }
                                    }
                                }
                                autoFocus
                            />
                            <Form.Control
                                type="maxHeight"
                                placeholder="Enter maximum height"
                                name='maxHeight'
                                // value={searchInputObject.breed}
                                onChange={(e) => {
                                    if (e.target.value === "") {
                                        const { maxHeight, ...updatedObject } = searchInputObject;
                                        setsearchInputObject(updatedObject)
                                    } else {
                                        setsearchInputObject({
                                            ...searchInputObject, 'maxHeight': e.target.value
                                        })
                                    }
                                }}
                                autoFocus
                            />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label> <h4>Weight</h4></Form.Label>
                            <Form.Control
                                type="minWeight"
                                placeholder="Enter minimum weight"
                                name='minWeight'
                                // value={searchInputObject.breed}
                                onChange={
                                    (e) => {
                                        if (e.target.value === "") {
                                            const { minWeight, ...updatedObject } = searchInputObject;
                                            setsearchInputObject(updatedObject)
                                        } else {
                                            setsearchInputObject({
                                                ...searchInputObject, 'minWeight': e.target.value
                                            })
                                        }
                                    }
                                }
                                autoFocus
                            />
                            <Form.Control
                                type="maxWeight"
                                placeholder="Enter maximum Weight"
                                name='maxWeight'
                                // value={searchInputObject.breed}
                                onChange={
                                    (e) => {
                                        if (e.target.value === "") {
                                            const { maxWeight, ...updatedObject } = searchInputObject;
                                            setsearchInputObject(updatedObject)
                                        } else {
                                            setsearchInputObject({
                                                ...searchInputObject, 'maxWeight': e.target.value
                                            })
                                        }
                                    }
                                }
                                autoFocus
                            />
                        </Form.Group>
                </div>

                <div className="searchButtonContainer">
                    <Button className="searchButton" variant="primary" type="submit" onClick={searchList}>
                        Search
                    </ Button>
                </div>
            </Form>

            <div className="petListContainer">
                {filteredList ? <PetList listOfPets={filteredList} /> : null}
            </div>

        </div>
    )
}

export default SearchPage