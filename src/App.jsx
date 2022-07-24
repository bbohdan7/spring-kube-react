import './App.css';
import UserList from './components/UserList'
import CreateUser from './components/CreateUser'
import ShowUser from './components/ShowUser'
import EditUser from './components/EditUser'
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom'
import { Container, Image, Navbar, Nav } from 'react-bootstrap';

const App = () => {
  return (
    <BrowserRouter>
      <Navbar bg='light' expand="lg">
        <Container fluid>
          <Navbar.Brand href="/">
            <Image src='logo192.png' width={"50px"} />
            Spring-4-kube
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: '100px' }} navbarScroll>
              <Nav.Item>
                <NavLink className="nav-link" to="/">Home</NavLink>
              </Nav.Item>

              <Nav.Item>
                <NavLink className="nav-link" to="/create">Add User</NavLink>
              </Nav.Item>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <div className="jumbotron text-center">
        <Routes>
          <Route element={<UserList />} path="/" exact={true} />
          <Route element={<CreateUser />} path="/create" exact={true} />
          <Route element={<ShowUser />} path="/user/:id"  />
          <Route element={<EditUser />} path="/edit/:id" />
        </Routes>
      </div>

    </BrowserRouter>
  )
}

export default App;
