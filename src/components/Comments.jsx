import { useSelector } from 'react-redux';
import { useState } from 'react';
import { Form, Button, Alert } from 'react-bootstrap';
import { motion } from 'framer-motion';
import noProfile from '../assets/images/noProfile.png'
const Comments = () => {
    const { name, lastName, isLoggedIn } = useSelector((state) => state.user);

    const [comment, setComment] = useState('');
    const [validated, setValidated] = useState(false);
    const [commentsList, setCommentsList] = useState([]);

    const handleChange = (e) => {
        setComment(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.currentTarget;

        if (form.checkValidity() === false) {
            e.stopPropagation();
            setValidated(true);
        } else {
            if (comment.trim()) {
                const newComment = {
                    name: `${name} ${lastName}`,
                    text: comment,
                };
                setCommentsList([...commentsList, newComment]);
                setComment('');
            }
        }
    };

    return (
        <section>
            {isLoggedIn ? (
                <>
                    <div className="comment-form m-4">
                        <h5><b>From:</b> {name} {lastName}</h5>
                        <Form noValidate validated={validated} onSubmit={handleSubmit}>
                            <div className='flex justify-between w-11/12 gap-4 '>
                                <Form.Group controlId="commentTextarea" className='flex-none w-4/5'>
                                    <Form.Label>Comment:</Form.Label>
                                    <Form.Control
                                        as="textarea"
                                        rows={3}
                                        placeholder="Write your comment here..."
                                        value={comment}
                                        onChange={handleChange}
                                        required
                                        isInvalid={!comment.trim() && validated}
                                    />
                                    <Form.Control.Feedback type="invalid">
                                        Please enter a valid comment.
                                    </Form.Control.Feedback>
                                </Form.Group>
                                <motion.button
                                    className='my-auto p-3'
                                    style={{
                                        fontSize: '1.25rem', // text-2xl equivalent
                                        color: 'white',
                                        backgroundColor: 'black',
                                        fontWeight: 'bold',
                                        padding: '0.5rem 1rem', // p-2 px-4 equivalent
                                        borderRadius: '0.5rem', // rounded-lg equivalent
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
                                    whileTap={{ scale: 0.8 }}
                                >
                                    Add Comment
                                </motion.button>
                            </div>
                        </Form>
                    </div>

                    <div className="comments-list mt-4">
                        <h3>Comments:</h3>
                        {commentsList.length > 0 ? (
                            commentsList.map((comment, index) => (
                                <div key={index} className="comment-item mb-3">
                                    <div className='flex '>
                                        <img src={noProfile} className='w-10 h-10'></img><p className='my-auto'><strong>{comment.name}</strong> : {comment.text}</p>
                                    </div>
                                </div>
                            ))
                        ) : (
                            <Alert variant="info">No comments yet.</Alert>
                        )}
                    </div>
                </>
            ) : (
                <div className="login-prompt">
                    <Alert variant="warning">
                        You must be logged in to leave a comment.
                    </Alert>
                </div>
            )}
        </section>
    );
};

export default Comments;
