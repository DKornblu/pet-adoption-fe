import React from 'react'

const LoginModalBody = ({ Form, setIsNewUser, userDetails, handleUserDetails }) => {
    return (
        <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Email</Form.Label>
                <Form.Control
                    type="email"
                    name="email"
                    placeholder="doglover@woof.com"
                    value={userDetails.email}
                    onChange={handleUserDetails}
                    autoFocus
                />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
                <Form.Label>Password</Form.Label>
                <Form.Control
                    type="password"
                    name="password"
                    placeholder="sorry, I<3Pets3000 is taken already"
                    value={userDetails.password}
                    onChange={handleUserDetails}
                />
            </Form.Group>
            <div>Don't have an account yet? <button onClick={() => { setIsNewUser(true) }}>Sign Up!</button></div>
        </Form>
    )
}

export default LoginModalBody