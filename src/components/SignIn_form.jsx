import { useState } from 'react';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import { InputGroup } from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
// import style from '../assets/style.module.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useDispatch } from 'react-redux';
import { setUserData } from '../state/userSlice1';
import { motion } from 'framer-motion';

function SignIn_form({addNewUser}) {
  const navigate = useNavigate();
  const dispatch = useDispatch(); // Import useDispatch to dispatch actions

  const [passStr,setPassSt] = useState('Enter strong password'); 

  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
 
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    else{
      const newUser = {
        nameI,
        lnameI,
        emailI,
        passwordI
      };
        dispatch(setUserData({ name: nameI, lastName: lnameI, email: emailI }));
        addNewUser(newUser);
        toast.success('You account has been created successfully. Log in again');
        return navigate('/logIn');
    }

    setValidated(true);

  };

  const [nameI,setNameI] = useState('');
  const [lnameI,setLNameI] = useState('');
  const [emailI,setEmailI] = useState('');
  const [passwordI,setPasswordI] = useState(''); 
 
  const capitalizeWord = (word) => {
    const firstLetter = word.charAt(0)
    const firstLetterCap = firstLetter.toUpperCase();
    const remainingLetters = word.slice(1).toLowerCase();
    const capitalizedWord = firstLetterCap + remainingLetters;
    return capitalizedWord;
  }
  const allLowerCase = (word) => {
    return word.toLowerCase();
  }
  const passStrength = (pass) => {
    if(pass.length <5)
    {
      setPassSt('Weak ');
    }
    else if(pass.length >= 5 && pass.length <8)
    {
      setPassSt('medium');
    }
    else if(pass.length >= 8 && pass.length <25)
    {
      let regex = /^[a-zA-Z]+$/;
      if(!regex.test(pass) && isNaN(pass))
      {
        setPassSt('strong');
      }
    }
    else if(pass.length >=25)
    {
      setPassSt('Password too long');
      setValidated(false);
    }
  }
  return (
    <>
    <div className='text-center font-bold text-eel text-5xl'>Sign In</div>
    <Form noValidate validated={validated} onSubmit={handleSubmit}>
      <Row className="mb-3">
        <Form.Group as={Col}  controlId="validationCustom01">
          <Form.Label>First name</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Enter your real first name" 
            value={nameI}
            onChange={(e) =>setNameI(capitalizeWord(e.target.value))}
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        <Form.Control.Feedback type="invalid" >
            Please provide a valid name.
        </Form.Control.Feedback>
        </Form.Group>
      </Row>
      <Row className="mb-3">
        <Form.Group as={Col}  controlId="validationCustom02">
          <Form.Label>Last name</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Last name"
            value={lnameI}
            onChange={(e) =>setLNameI(capitalizeWord(e.target.value))}
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          <Form.Control.Feedback type="invalid">
            Please provide a valid Last Name.
          </Form.Control.Feedback>
        </Form.Group>
      </Row>
      <Row className="mb-3">
        <Form.Group as={Col} controlId="validationCustom03">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="Email" required 
                      value={emailI}
                      onChange={(e) =>setEmailI(allLowerCase(e.target.value))}
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          <Form.Control.Feedback type="invalid">
            Please provide a valid email.
          </Form.Control.Feedback>
        </Form.Group>
      </Row>
      <Row className="mb-3">
        <Form.Group as={Col} controlId="validationCustom04">
          <Form.Label>Password</Form.Label>
          <InputGroup >
          <Form.Control type="password" placeholder="Password will be encrypted" required 
                      value={passwordI}
                      onChange={(e) =>{
                        setPasswordI(e.target.value) 
                        passStrength(e.target.value)
                      }}/>

          <InputGroup.Text id="basic-addon2">{passStr}</InputGroup.Text>
          </InputGroup>
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          <Form.Control.Feedback type="invalid">
            Please provide a valid password.
          </Form.Control.Feedback>
        </Form.Group>
      </Row>
      <Form.Group className="mb-3">
        <Form.Check
          required
          label="I agree to terms and conditions"
          feedback="You must agree before submitting."
          feedbackType="invalid"
        />
      </Form.Group>
      <div className='flex justify-center'>
      <motion.button
            style={{
              fontSize: '1.25rem', 
              color: 'white',
              backgroundColor: 'black',
              fontWeight: 'bold',
              padding: '0.5rem 1rem', 
              borderRadius: '0.5rem', 
              transition: 'all ease-in-out',
              border: 'none',
            }}
            onMouseEnter={(e) => {
              e.target.style.color = 'black';
              e.target.style.backgroundColor = 'white';
              e.target.style.border = '2px solid black';
            }}
            onMouseLeave={(e) => {
              e.target.style.color = 'white';
              e.target.style.backgroundColor = 'black';
              e.target.style.border = 'none';
            }}
            whileTap={{ scale: 0.9 }}
          >
            Sign In
          </motion.button>        
          </div>
    </Form>
    </>
  );
}

export default SignIn_form;