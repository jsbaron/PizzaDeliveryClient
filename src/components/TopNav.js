import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown"

export default class TopNav extends Component {
    render() {
        return (
            <Navbar bg="light" expand="lg" sticky="top">
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            <Nav.Link href="/">Home</Nav.Link>
                            <NavDropdown title="Menu" id="basic-nav-dropdown">
                                {this.props.stores.map(
                                    function(store) {
                                        return (<NavDropdown.Item store={store}>
                                            <Link to={{pathname: "/menus/"+store.id, state: {store: store}}}>
                                                {store.address.streetAddr}
                                            </Link>
                                        </NavDropdown.Item>);
                                    }
                                )}
                            </NavDropdown>
                            <Nav.Link>Order Now</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
        );
    }
}