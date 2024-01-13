import React, {useState} from 'react';
import styles from './Contact.module.css';
import { Container, Form, Button } from 'react-bootstrap';
import SocialLink from '../general/SocialLink';

export default function Contact() {

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
      });
    
      const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
          ...formData,
          [name]: value,
        });
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
        setFormData({
          name: '',
          email: '',
          message: '',
        });
      };


  return (
    <>
      <div className={styles.contactContainer}>
        <div className={`${styles.map}`}>
            <iframe title='map' src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3651.499558765472!2d90.42257307448713!3d23.76521888820895!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjPCsDQ1JzU0LjgiTiA5MMKwMjUnMzAuNSJF!5e0!3m2!1sen!2snl!4v1705135940386!5m2!1sen!2snl" width="100%" height="100%"  style={{ border: '0', borderRadius: '10px'}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        </div>
        <div className={`${styles.email}`}>
            <Container id="contact" className="contact-section">
                <h3 className="text-center">Contact Me</h3>
                <p className="text-center">Feel free to reach out!</p>

                <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-2" controlId="formName">
                    <Form.Control
                        type="text"
                        name="name"
                        value={formData.name}
                        placeholder='Name*'
                        onChange={handleInputChange}
                        required
                    />
                    </Form.Group>

                    <Form.Group  className="mb-2" controlId="formEmail">
                    <Form.Control
                        type="email"
                        name="email"
                        placeholder='Email*'
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                    />
                    </Form.Group>

                    <Form.Group  className="mb-2" controlId="formMessage">
                    <Form.Control
                        as="textarea"
                        rows={3}
                        name="message"
                        placeholder='Message*'
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                    />
                    </Form.Group>

                    <Button className="w-100" variant="info" type="submit">
                        Submit
                    </Button>
                </Form>

                <div className="mt-4">
                    <h3 className="text-center mb-3">Get in Touch</h3>
                    <div className='text-center w-100 d-flex justify-content-center'>
                        <SocialLink />
                    </div> 
                    
                </div>
            </Container>
        </div>
      </div>
    </>
  )
}
