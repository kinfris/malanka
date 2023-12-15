import { useState } from "react";
import { FloatingLabel } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Row from "react-bootstrap/Row";
import styles from "./contactForm.module.css";

const defaultState = {
  name: "",
  email: "",
  company: "",
  description: "",
};

export const ContactForm = () => {
  const [validated, setValidated] = useState(false);
  const [values, setValue] = useState(defaultState);

  const onChangeHandler = (event: any) => {
    const { value, name } = event.target;
    setValue({ ...values, [name]: value });
  };

  const handleSubmit = (event: any) => {
    event.preventDefault();
    event.stopPropagation();
    const form = event.currentTarget;
    if (form.checkValidity() === true) {
      console.log("success");
    }
    setValidated(true);
  };
  return (
    <Form
      noValidate
      validated={validated}
      onSubmit={handleSubmit}
      data-bs-theme="dark"
      className={styles.form}
    >
      <Row>
        <Form.Group as={Col} controlId="validationCustomName">
          <Form.Label>Name</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Name"
            name="name"
            value={values.name}
            onChange={onChangeHandler}
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
      </Row>
      <Row>
        <Form.Group as={Col} controlId="validationCustomEmail">
          <Form.Label>Email</Form.Label>
          <InputGroup hasValidation>
            <Form.Control
              type="email"
              placeholder="Email"
              required
              name="email"
              value={values.email}
              onChange={onChangeHandler}
            />
            <Form.Control.Feedback type="invalid">
              Please choose a correct email.
            </Form.Control.Feedback>
          </InputGroup>
        </Form.Group>
      </Row>
      <Row>
        <Form.Group as={Col} controlId="validationCustomCompany">
          <Form.Label>Company</Form.Label>
          <Form.Control
            type="text"
            placeholder="Company"
            required
            name="company"
            value={values.company}
            onChange={onChangeHandler}
          />
          <Form.Control.Feedback type="invalid">
            Please provide a company.
          </Form.Control.Feedback>
        </Form.Group>
      </Row>
      <Row>
        <FloatingLabel
          controlId="floatingTextarea"
          label="How can we help you?"
        >
          <Form.Control
            as="textarea"
            placeholder="Tell us about your project..."
            required
            minLength={100}
            style={{ height: "150px" }}
            name="description"
            value={values.description}
            onChange={onChangeHandler}
          />
          <Form.Control.Feedback type="invalid">
            Please provide a description at least with 100 characters.
          </Form.Control.Feedback>
        </FloatingLabel>
      </Row>
      <Button type="submit">Submit form</Button>
    </Form>
  );
};
