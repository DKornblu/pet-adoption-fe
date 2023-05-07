import React, { useState, useContext } from 'react';
import { Button, Modal, Form } from 'react-bootstrap';
import SignupModalBody from './SignupModalBody';
import LoginModalBody from './LoginModalBody';
import { UsersContextInstance } from '../context/UsersContext'


const LoginModal = ({isLoggedIn, setIsLoggedIn}) => {

  const [show, setShow] = useState(false);
  const [isNewUser, setIsNewUser] = useState(false)
  const [userDetails, setUserDetails] = useState({})
  const [isMatch, setIsMatch] = useState(false);

  const handleShow = () => setShow(true);

  const handleClose = () => {
    setShow(false)
    setIsNewUser(false)
    setIsMatch(false)
    setUserDetails({})
  };

  const handleUserDetails = (e) => {
    setUserDetails({
      ...userDetails,
      [e.target.name]: e.target.value
    })
  }

  const handleLogIn = () => {
    console.log('Logged in!', userDetails);
    handleClose();
    setIsLoggedIn(true);
  }

  const handleSaveSignUp = () => {
    if (!isMatch) {
      alert("password wasn't verified bub")
      return;
    }
    console.log('New user saved!', userDetails);
    handleClose();
  }


  return (
    <>
      <Button style={{backgroundColor: '#13678A', border: '1px solid #13678A'}} onClick={handleShow} className='ModalBtn'>
        Log In
      </Button>

      <Modal show={show} onHide={handleClose} backdrop="static">
        <Modal.Header closeButton>
          <Modal.Title>{!isNewUser ? 'Log In' : 'Sign Up'}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {!isNewUser ?
            <LoginModalBody {...{ Form, setIsNewUser, userDetails, handleUserDetails }} />
            : <SignupModalBody {...{ Form, setIsNewUser, userDetails, handleUserDetails, isMatch, setIsMatch }} />
          }
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button style={{backgroundColor: '#13678A', border: '1px solid #13678A'}} onClick={!isNewUser ? handleLogIn : handleSaveSignUp}>
            Save
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default LoginModal
