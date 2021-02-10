
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Link from 'next/link'

export default function FirstNavbar() {
    return (
        <Navbar bg="light" variant="light" expand="lg" fixed="top">
            <Link href="/">
                <Navbar.Brand>
                    <img
                        alt=""
                        src='/logo.png'
                        className="d-inline-block align-top"
                    />
                </Navbar.Brand>
            </Link>
            <Navbar.Toggle />
            <Navbar.Collapse className="justify-content-end">
                <Nav>
                    <Link href="/" passHref>
                        <Nav.Link className="h5 text-center">Главная</Nav.Link>
                    </Link>
                    <Link href="/document" passHref>
                        <Nav.Link className="h5 text-center">Документация</Nav.Link>
                    </Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};