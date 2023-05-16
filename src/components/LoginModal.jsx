import React, { useState, useContext } from 'react';
import { Button, Modal, Form } from 'react-bootstrap';
import SignupModalBody from './SignupModalBody';
import LoginModalBody from './LoginModalBody';
import { UsersContextInstance } from '../context/UsersContext'

const LoginModal = () => {

  const { setToken, userDetails, setUserDetails, loginUser, signupUser, setCurrentUserName } = useContext(UsersContextInstance);

  const [show, setShow] = useState(false);
  const [isNewUser, setIsNewUser] = useState(false)
  const [isMatch, setIsMatch] = useState(false);


  const handleShow = () => setShow(true);

  const handleClose = () => {
    setShow(false)
    setIsNewUser(false)
    setIsMatch(false)
  };

  const handleUserDetails = (e) => {
    setUserDetails({
      ...userDetails,
      [e.target.name]: e.target.value
    })
    console.log(userDetails)
  }

  const handleLogIn = async () => {
    const res = await loginUser();
    console.log('axios login response: ', res)
    if (res.data && res.data.ok) {

      setToken(res.data.token)
      localStorage.setItem("token", res.data.token)

      setUserDetails(res.data.user);
      setCurrentUserName(res.data.user.first_name)
      localStorage.setItem("currentName", res.data.user.first_name)

      handleClose();
    } else {
      console.log("Error:", res.response.data);
      alert(`${res.response.data}, try again buckeroo`);
    }
  }

  // TODO: connect to BE, send userDetails to user list
  const handleSaveSignUp = async () => {
    if (!isMatch) {
      alert("password wasn't verified bub")
      return;
    }

    const res = await signupUser();
    console.log('axios signup response: ', res.data)
    console.log('New user saved!', userDetails);

    setUserDetails({})
    handleClose();
  }

  return (
    <>
      <Button style={{ backgroundColor: '#13678A', border: '1px solid #13678A' }} onClick={handleShow} className='ModalBtn'>
        Log In
      </Button>

      <Modal show={show} onHide={handleClose} backdrop="static">
        <Modal.Header closeButton>
          <Modal.Title>{!isNewUser ? 'Log In' : 'Sign Up'}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {!isNewUser ?
            <LoginModalBody {...{ Form, setIsNewUser, handleUserDetails, userDetails, setUserDetails }} />
            : <SignupModalBody {...{ Form, setIsNewUser, userDetails, handleUserDetails, isMatch, setIsMatch }} />
          }
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button style={{ backgroundColor: '#13678A', border: '1px solid #13678A' }} onClick={!isNewUser ? handleLogIn : handleSaveSignUp}>
            Submit
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default LoginModal
