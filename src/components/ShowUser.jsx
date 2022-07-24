import React, { useEffect, useState } from 'react'
import { Card, ListGroup } from 'react-bootstrap'
import { useParams, NavLink } from 'react-router-dom'
import UserService from '../services/UserService'

const ShowUser = props => {

    const { id } = useParams()
    const [usr, setUsr] = useState({})

    useEffect(() => {
        UserService.find(id).then(response => {
            setUsr(response.data)
        }).catch(err => console.log(err))
    }, [])

    return (
        <div className="jumbotron">
            <div className="row">
                <div className="col-md-4"></div>
                <div className="col-md-4">
                    <Card>
                        <Card.Body>
                            <Card.Title>User {usr.id}</Card.Title>
                            <Card.Text>
                                <ListGroup>
                                    <ListGroup.Item><strong><u>Name:</u></strong> { usr.firstName + ' ' + usr.lastName }</ListGroup.Item>
                                    <ListGroup.Item><strong><u>Email:</u></strong> { usr.email }</ListGroup.Item>
                                    <ListGroup.Item>
                                        <NavLink className="btn btn-primary" to="/"><i className="bi bi-arrow-left"></i> Back</NavLink> { ' ' }
                                        <NavLink className="btn btn-warning" to={`/edit/${id}`} ><i className="bi bi-wrench"></i> Edit</NavLink>
                                    </ListGroup.Item>
                                </ListGroup>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
                <div className="col-md-4"></div>
            </div>
        </div>
    )
}

export default ShowUser