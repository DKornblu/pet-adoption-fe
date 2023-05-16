import React, { useContext } from 'react'
import { UsersContextInstance } from '../context/UsersContext'
import {Form} from 'react-bootstrap'

const ProfilePage = () => {
  const {userDetails, setUserDetails} = useContext(UsersContextInstance);

  const handleUpdateUser = (e) => {
    setUserDetails({
      ...userDetails,
      [e.target.name]: e.target.value
    })
    console.log(userDetails)
  }

  return (
    <div style={{border: "1px solid red", width: '75%'}}>
      <h1>ProfilePage</h1>
      <Form>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>First Name</Form.Label>
          <Form.Control
            type="first_name"
            placeholder="first"
            name='first'
            value={userDetails.first}
            onChange={handleUpdateUser}
            autoFocus
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
          <Form.Label>Last Name</Form.Label>
          <Form.Control
            type="last_name"
            name='last'
            placeholder="last"
            value={userDetails.last}
            onChange={handleUpdateUser}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput3">
          <Form.Label>Phone Number</Form.Label>
          <Form.Control
            type="phone"
            name='phone'
            placeholder="555-5555"
            value={userDetails.phone}
            onChange={handleUpdateUser}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput4">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            name='email'
            placeholder="doglover@woof.com"
            value={userDetails.email}
            onChange={handleUpdateUser}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput5">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            name='password'
            placeholder="think of something clever"
            value={userDetails.password}
            onChange={handleUpdateUser}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput6">
          <Form.Label>Bio</Form.Label>
          <Form.Control
            type="text"
            name='bio'
            placeholder="add a short bio!"
            onChange={handleUpdateUser}
          />
        </Form.Group>
      </Form>
    </div>
  )
}

export default ProfilePage