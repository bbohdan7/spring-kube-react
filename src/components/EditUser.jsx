import React, { useEffect, useState } from 'react'
import { Alert, Button, Card, Form } from 'react-bootstrap'
import UserService from '../services/UserService'
import { useNavigate, useParams } from 'react-router-dom'

const EditUser = props => {

    const { id } = useParams()
    const navigate = useNavigate()

    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [email, setEmail] = useState("")

    const [ updated, setUpdated ] = useState(false)

    const onFirstNameChange = e => {
        setFirstName(e.target.value)
        console.log(`First name is ${firstName}`);
    }

    const onLastNameChange = e => {
        setLastName(e.target.value)
        console.log(`Last name is ${lastName}`);
    }

    const onEmailChange = e => {
        setEmail(e.target.value)
        console.log(`Email is ${email}`)
    }

    const handleOnSubmit = () => {
        let currentUser = {}
        UserService
            .find(id)
            .then(response => currentUser = response.data)
            .then(() => {
                currentUser.firstName = firstName
                currentUser.lastName = lastName
                currentUser.email = email

                UserService.update(id, currentUser)

                setUpdated(true)
            })
    }

    useEffect(() => {
        UserService.find(id)
            .then(response => {
                setFirstName(response.data.firstName)
                setLastName(response.data.lastName)
                setEmail(response.data.email)
            })
            .catch(err => console.log(err))
    }, [])

    return (
        <div className="jumbotron">
            <div className="row">
                <div className="col-md-2">
                    <Button className="btn btn-success" onClick={() => navigate(-1)}><i className="bi bi-arrow-return-left"></i> Back</Button>
                </div>
                <div className="col-md-6">
                    <Card style={{ padding: "2em", borderRadius: "25px" }}>
                        <Card.Title>Editing user <u>{firstName}  {lastName} </u></Card.Title>

                        <Card.Text>
                            <Form>
                                <Form.Group>
                                    <Form.Label>Edit first name</Form.Label>
                                    <Form.Control type="text" value={firstName} onChange={onFirstNameChange} />
                                </Form.Group>

                                <Form.Group>
                                    <Form.Label>Edit last name</Form.Label>
                                    <Form.Control type="text" value={lastName} onChange={onLastNameChange} />
                                </Form.Group>
                                <Form.Group>
                                    <Form.Label>Edit email</Form.Label>
                                    <Form.Control type="email" value={email} onChange={onEmailChange} />
                                </Form.Group>
                                <br />
                                <Form.Group>
                                    <Button onClick={handleOnSubmit}><i className="bi bi-wrench"></i> Update</Button>
                                </Form.Group>
                            </Form>
                        </Card.Text>
                    </Card>
                </div>
                <div className="col-md-2">
                    {updated ? <Alert variant='success' dismissible >
                        <Alert.Heading>You've updated user successfully!</Alert.Heading>
                        <p>
                            Now User has name<u>{firstName} {lastName}</u> with email <u>{email}</u>
                        </p>
                    </Alert> : "" }
                </div>
            </div>
        </div>
    )
}

export default EditUser