import React, { useState } from 'react'
import UserForm from './UserForm'
import UserService from '../services/UserService'

const CreateUser = () => {

    const [ usr, setUsr ] = useState({})

    const handleOnSubmit = e => {
        
    }

    return (
        <React.Fragment>
            <h1>Creating a new User</h1>
            <hr />
            <UserForm handleOnSubmit={ handleOnSubmit } />
        </React.Fragment>
    )
}

export default CreateUser;