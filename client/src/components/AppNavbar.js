import React, { useState, useContext} from 'react';
import {
    Collapse, Navbar, NavbarToggler, NavbarBrand,
    Nav, NavItem, NavLink, Container
} from 'reactstrap';
import {ItemContext} from '../context/ItemContext'


function AppNavbar() {
    const {loading, items} = useContext(ItemContext)
    console.log(loading)
    const [isOpen, setIsOpen] = useState(false)                         //state isn't necessary anywhere else so im not going to create a context
    const toggle = () => {
        setIsOpen(!isOpen);
    }
    
    return (
        <div>
            <Navbar color="dark" dark expand="sm" className="mb-5">
                <Container>
                    <NavbarBrand href="/"> Item Menu </NavbarBrand>
                    <span className="text-white"> Number of Items: {loading ? "LOADING FROM API" : items.length}</span>
                    <NavbarToggler onClick={toggle} />
                    <Collapse isOpen={isOpen} navbar>
                        <Nav className="ml-auto" navbar>
                            <NavItem>
                                <NavLink href="https://github.com/xjkbro">
                                    Github
                            </NavLink>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Container>
            </Navbar>
        </div>
    )
};

export default AppNavbar;