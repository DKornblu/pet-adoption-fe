import React from 'react'
import { Button, Form } from 'react-bootstrap'

const SearchPage = () => {
    return (
        <div className="SearchPageContainer">
            <h1>Search Page</h1>

            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Disabled input</Form.Label>
                    <Form.Control placeholder="Disabled input" />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Disabled select menu</Form.Label>
                    <Form.Select>
                        <option>Disabled select</option>
                    </Form.Select>
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Check type="checkbox" label="Can't check this" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>

            {/* <PetList listOfPets={filteredList} */}
        </div>
    )
}

export default SearchPage