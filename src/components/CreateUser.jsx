import React, { useState } from 'react'
import UserForm from './UserForm'
import UserService from '../services/UserService'

const CreateUser = () => {
    const handleOnSubmit = usr => {
        UserService.create(usr).then(() => console.log("User has been successfully created!")).catch(err => console.log(err))
    }

    return (
        <React.Fragment>
            <h1>Creating a new User</h1>
            <hr />
            <UserForm handleOnSubmit={handleOnSubmit} />
        </React.Fragment>
    )
}

export default CreateUser;