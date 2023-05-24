import React, { useState, useContext } from 'react'
import { Form, Button } from 'react-bootstrap';
import { PetsContextInstance } from '../context/PetsContext';
import { useNavigate } from 'react-router-dom'

const AddPet = () => {
    const { addPet } = useContext(PetsContextInstance);

    const [petDetails, setPetDetails] = useState('')

    const navigate = useNavigate();

    const handlePetDetails = (e) => {
        setPetDetails({
            ...petDetails,
            [e.target.name]: e.target.value
        })
        console.log(petDetails)
    }

    const submitNewPet = (petDetails) => {
        addPet(petDetails)
        console.log("pet added!", petDetails)
        navigate("/admin")
    }

    return (
        <div className="addPetContainer">
            <h1>Add a Pet</h1>
            <Form>
                <div className="inner1">
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label><h4>Name</h4></Form.Label>
                        <Form.Control
                            placeholder="name"
                            name='name'
                            onChange={handlePetDetails}
                            autoFocus
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
                        <Form.Label><h4>Type</h4></Form.Label>
                        <Form.Control
                            name='type'
                            placeholder="type"
                            onChange={handlePetDetails}
                        />
                    </Form.Group>
                </div>
                <div className="inner1">
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
                        <Form.Label><h4>Breed</h4></Form.Label>
                        <Form.Control
                            name='breed'
                            placeholder="breed"
                            onChange={handlePetDetails}
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
                        <Form.Label><h4>Color</h4></Form.Label>
                        <Form.Control
                            name='color'
                            placeholder="color"
                            onChange={handlePetDetails}
                        />
                    </Form.Group>
                </div>
                <div className="inner1">
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
                        <Form.Label><h4>Height</h4></Form.Label>
                        <Form.Control
                            name='height'
                            placeholder="height"
                            onChange={handlePetDetails}
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
                        <Form.Label><h4>Weight</h4></Form.Label>
                        <Form.Control
                            name='weight'
                            placeholder="weight"
                            onChange={handlePetDetails}
                        />
                    </Form.Group>
                </div>
                <div className="inner2">
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
                        <Form.Label><h4>Bio</h4></Form.Label>
                        <Form.Control
                            name='bio'
                            placeholder="bio"
                            onChange={handlePetDetails}
                        />
                    </Form.Group>
                </div>
                <div className="inner1">
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
                        <Form.Label><h4>Hypoallergenic</h4></Form.Label>
                        <Form.Control
                            name='hypoallergenic'
                            placeholder="hypoallergenic"
                            onChange={handlePetDetails}
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
                        <Form.Label><h4>Dietary Restrictions</h4></Form.Label>
                        <Form.Control
                            name='dietary'
                            placeholder="dietary"
                            onChange={handlePetDetails}
                        />
                    </Form.Group>
                </div>
                <div className="inner1">
                    <Form.Group className="mb-3" >
                        <Form.Label><h4>Adoption Status</h4></Form.Label>
                        <Form.Select onChange={
                            (e) => {
                                setPetDetails({
                                    ...petDetails,
                                    'adoptionStatus': e.target.value
                                })
                                console.log(petDetails)
                            }}>
                            <option value='default'>Select adoption status</option>
                            <option value="Available">Available</option>
                            <option value="Fostered">Fostered</option>
                            <option value="Adopted">Adopted</option>
                        </Form.Select>
                    </Form.Group>
                </div>
            </Form>

            <Button className="addPetBtn"  onClick={() => submitNewPet(petDetails)}>
                Submit
            </Button>
        </div>
    )
}

export default AddPet