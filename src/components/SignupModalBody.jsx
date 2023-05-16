import React from 'react'

const SignupModalBody = ({Form, setIsNewUser, userDetails, handleUserDetails, setIsMatch}) => {

    const handleVerifyPassword = (e) => {
        if(e.target.value === userDetails.password) {
            setIsMatch(true)
        }
    }

    return (
        <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>First Name</Form.Label>
                <Form.Control
                    type="first_name"
                    placeholder="first"
                    name='first_name'
                    value={userDetails.first_name}
                    onChange={handleUserDetails}
                    autoFocus
                />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
                <Form.Label>Last Name</Form.Label>
                <Form.Control
                    type="last_name"
                    name='last_name'
                    placeholder='last'
                    value={userDetails.last_name}
                    onChange={handleUserDetails}
                />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput3">
                <Form.Label>Phone Number</Form.Label>
                <Form.Control
                    type="phone"
                    name='phone'
                    placeholder="555-5555"
                    value={userDetails.phone}
                    onChange={handleUserDetails}
                />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput4">
                <Form.Label>Email</Form.Label>
                <Form.Control
                    type="email"
                    name='email'
                    placeholder="doglover@woof.com"
                    value={userDetails.email}
                    onChange={handleUserDetails}
                />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput5">
                <Form.Label>Password</Form.Label>
                <Form.Control
                    type="password"
                    name='password'
                    placeholder="think of something clever"
                    value={userDetails.password}
                    onChange={handleUserDetails}
                />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput6">
                <Form.Label>Verify Password</Form.Label>
                <Form.Control
                    type="password"
                    name='password2'
                    placeholder="don't mess up"
                    onChange={handleVerifyPassword}
                />
            </Form.Group>
            <div>Whoops, back to <button onClick={() => setIsNewUser(false)}>Login</button></div>
        </Form>
    )
}

export default SignupModalBody