import PropTypes from "prop-types";

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const NavHeader = ({title, icon}) => {
    return (
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container>
                <Navbar.Brand href="#home">{title}</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#tasks">Tasks</Nav.Link>
                        <Nav.Link href="#completed">Completed</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>

    )
}

NavHeader.propTypes = {
    title: PropTypes.string.isRequired,
    icon: PropTypes.string,
}

NavHeader.defaultProps = {
    'title': "To-Do List",
    'icon': null,
}


export default NavHeader;