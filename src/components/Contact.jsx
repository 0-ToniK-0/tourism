import { useSelector } from 'react-redux';
import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';
import {motion} from 'framer-motion'
import { toast } from 'react-toastify';
const Contact = () => {
  const { name, lastName, email, isLoggedIn } = useSelector((state) => state.user);

  const [formData, setFormData] = useState({
    name: isLoggedIn ? name : '',
    lastName: isLoggedIn ? lastName : '',
    email: isLoggedIn ? email : '',
    message: '',
  });

  const [validated, setValidated] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    if (form.checkValidity() === false) {
      e.stopPropagation();
    }
    setValidated(true);
  };

  return (
    <>
      <div className='text-center font-bold text-5xl mb-4'>Contact Us</div>
      <Form noValidate validated={validated} onSubmit={handleSubmit} className='m-20'>
        <Row className="mb-3">
          <Form.Group as={Col} controlId="formFirstName">
            <Form.Label>First Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter your first name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              isInvalid={validated && !formData.name}
            />
            <Form.Control.Feedback type="invalid">
              Please provide a valid first name.
            </Form.Control.Feedback>
          </Form.Group>
        </Row>

        <Row className="mb-3">
          <Form.Group as={Col} controlId="formLastName">
            <Form.Label>Last Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter your last name"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              required
              isInvalid={validated && !formData.lastName}
            />
            <Form.Control.Feedback type="invalid">
              Please provide a valid last name.
            </Form.Control.Feedback>
          </Form.Group>
        </Row>

        <Row className="mb-3">
          <Form.Group as={Col} controlId="formEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter your email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              isInvalid={validated && !formData.email}
            />
            <Form.Control.Feedback type="invalid">
              Please provide a valid email.
            </Form.Control.Feedback>
          </Form.Group>
        </Row>

        <Row className="mb-3">
          <Form.Group as={Col} controlId="formMessage">
            <Form.Label>Message</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              placeholder="Enter your message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              isInvalid={validated && !formData.message}
            />
            <Form.Control.Feedback type="invalid">
              Please enter a message.
            </Form.Control.Feedback>
          </Form.Group>
        </Row>

        <div className='text-center'>
        <motion.button
        onClick={() => toast.success('Message Sent. We will contact you soon')}
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
            Send
          </motion.button> 
        </div>
      </Form>
    </>
  );
};

export default Contact;
