import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { useState, useEffect } from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
// import style from '../assets/style.module.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Spinner } from 'react-bootstrap';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { logIn } from '../state/userSlice1';
import { useDispatch } from 'react-redux';
import { motion } from 'framer-motion';

function LogIn_form({ updateUser }) {
  const dispatch = useDispatch();

  const [validated, setValidated] = useState(false);

  const navigate = useNavigate();
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  const [emailIn, setEmailIn] = useState('');
  const [passwordIn, setPasswordIn] = useState('');


  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await fetch(`/api/users`);
        const data = await res.json();
        setUsers(data);
      }
      catch (error) {
        console.log(error);
      }
      finally {
        setLoading(false);
      }
    }
    fetchUser();

  }, [])


  const isUser = (usersArr) => {
    let i = 0;
    let l = usersArr.length;
    while (i < l) {
      if (usersArr[i].emailI === emailIn) {
        if (usersArr[i].passwordI === passwordIn) {
          dispatch(logIn({
            name: usersArr[i].nameI, // Assuming user data has these fields
            lastName: usersArr[i].lnameI,
            email: usersArr[i].emailI
          }));
          return navigate(`/`);
        }
        else {
          toast.error('Wrong Password. Enter password again');
          return;
        }
      }
      i++;
    }
    toast.warning('User doesnt exist. Sign in instead.');
    return;
  }


  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    else {
      event.preventDefault();
      isUser(users);
    }
    setValidated(true);

  };




  return loading ? <Spinner /> : (
    <>
      <div className='text-eel text-6xl font-bold m-10 xl:mb-24 mb-8 text-center' >Log In</div>

      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <Row className="mb-3">
          <Form.Group as={Col}>
            <FloatingLabel
              controlId="floatingInput"
              label="Email address"
              className="mb-3"
            >
              <Form.Control type="email" placeholder="Email" required
                value={emailIn}
                onChange={(e) => setEmailIn(e.target.value)}
              />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              <Form.Control.Feedback type="invalid">
                Please provide a valid email.
              </Form.Control.Feedback>
            </FloatingLabel>
          </Form.Group>
        </Row>
        <Row className="mb-3">
          <Form.Group as={Col} >
            <FloatingLabel controlId="floatingPassword" label="Password">
              <Form.Control type="password" placeholder="Password will be encrypted" required
                value={passwordIn}
                onChange={(e) => setPasswordIn(e.target.value)}
              />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              <Form.Control.Feedback type="invalid">
                Please provide a valid password.
              </Form.Control.Feedback>
            </FloatingLabel>
          </Form.Group>
        </Row>
        <div className='flex justify-center'>
          <motion.button
            style={{
              fontSize: '1.25rem', // text-2xl equivalent
              color: 'white',
              backgroundColor: 'black',
              fontWeight: 'bold',
              padding: '0.5rem 1rem', // p-2 px-4 equivalent
              borderRadius: '0.5rem', // rounded-lg equivalent
              transition: 'all 0.1s ease-in-out',
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
            whileTap={{ scale: 0.8 }}
          >
            Log In
          </motion.button>        
          </div>
      </Form>
    </>
  );
}

export default LogIn_form;