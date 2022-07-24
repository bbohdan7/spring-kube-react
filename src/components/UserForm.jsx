import React, { useState } from 'react'
import { Form, Button } from 'react-bootstrap'
import { v4 as uuid } from 'uuid'


const UserForm = props => {
    const [usr, setUsr] = useState({
        firstName: props.firstName ? props.user.firstName : '',
        lastName: props.lastName ? props.user.lastName : '',
        email: props.email ? props.user.email : ''
    })

    const [error, setError] = useState('')

    const { firstName, lastName, email } = usr

    const handleOnSubmit = event => {
        event.preventDefault()

        const values = [firstName, lastName, email]
        let error = ""

        const allFieldsFilled = values.every(field => {
            const value = field.trim()

            return value !== '' && value !== '0'
        })

        if (allFieldsFilled) {

            const usr = {
                firstName, lastName, email
            }

            props.handleOnSubmit(usr)
        } else {
            error = 'Please fill out all of the fields.'
        }

        setError(error)
    }

    const handleInputChange = event => {
        const { name, value } = event.target

        setUsr(prevState => ({
            ...prevState,
            [name]: value
        }))
    }

    return (
        <div className="row">
            <div className="col-md-4"></div>
            <div className="col-md-4">
                {error && <div className="alert alert-danger">{error}</div>}

                <Form onSubmit={handleOnSubmit}>
                    <Form.Group controlId='firstName'>
                        <Form.Label>First name</Form.Label>
                        <Form.Control className="input-control" type="text" name="firstName" value={firstName} placeholder="Enter first name" onChange={handleInputChange} />
                    </Form.Group>

                    <Form.Group controlId='lastName'>
                        <Form.Label>Second name</Form.Label>
                        <Form.Control className="input-control" type="text" name="lastName" value={lastName} placeholder="Enter second name" onChange={handleInputChange} />
                    </Form.Group>

                    <Form.Group controlId='email'>
                        <Form.Label>Email</Form.Label>
                        <Form.Control className="input-control" type="email" name="email" value={email} placeholder="Enter email" onChange={handleInputChange} />
                    </Form.Group>

                    <Form.Group>
                        <hr />
                        <Form.Control className="btn btn-success" type="submit" value="Save" />
                    </Form.Group>
                </Form>
            </div>
            <div className="col-md-4"></div>
        </div>
    )
}

export default UserForm