import React, { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import { Button, Form, Modal, Table } from 'react-bootstrap'
import UserService from '../services/UserService'
import 'bootstrap-icons/font/bootstrap-icons.css';


const UserList = () => {

    const [all, setAll] = useState([])
    const [isShowInfo, setIsShowInfo] = useState(false)
    const [ selectedUser, setSelectedUser ] = useState({})

    const showInfo = usr => {
        setSelectedUser(usr)
        setIsShowInfo(true)
    }


    const hideInfo = () => setIsShowInfo(false)

    useEffect(() => {
        UserService.all().then(response => {
            setAll(response.data)
        })
            .catch(err => console.log(`some error while loading all of the users`))
    }, [])

    return (
        <div className="row">
            <div className="col-md-1"></div>
            <div className="col-md-10">
                <h1>Users List</h1>

                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>Select</th>
                            <th>ID</th>
                            <th>First name</th>
                            <th>Last name</th>
                            <th>Email</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {all.map(a => (
                            <tr key={a.id}>
                                <td onClick={() => showInfo(a)} style={{ cursor: "pointer" }}><i className="bi bi-hand-index"></i></td>
                                <td>{a.id}</td>
                                <td>{a.firstName}</td>
                                <td>{a.lastName}</td>
                                <td>{a.email}</td>
                                <td>
                                    <NavLink to={`/edit/${a.id}`} className="btn btn-warning"><i className="bi bi-wrench"></i></NavLink>{' '}
                                    <NavLink to={`/user/${a.id}`} className="btn btn-info"><i className="bi bi-eye"></i></NavLink>{' '}
                                    <Form>
                                        <Button variant='danger' onClick={() => console.log(`Clicked on delete button`)}>
                                            <i className="bi bi-trash"></i>
                                        </Button>
                                    </Form>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </div>
            <div className="col-md-1"></div>

            <Modal show={isShowInfo} onHide={hideInfo}>
                <Modal.Header closeButton>
                    <Modal.Title>User #{selectedUser.id} details</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <ul>
                        <li>First name: <u>{ selectedUser.firstName } { selectedUser.lastName }</u></li>
                        <li>Email: <u>{ selectedUser.email }</u></li>
                    </ul>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={ hideInfo }>Close</Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}

export default UserList;