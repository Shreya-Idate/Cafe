import { useState, useEffect } from "react";
import { Navbar, Container, Nav} from "react-bootstrap"
import logo from '../Assests/logo.png';

export const NavBar = () => {
    const [activeLink, setActiveLink] = useState('home');
    const [scrolled, seScrolled] = useState(false);    

    useEffect( () => {
        const onScroll = () => {
            if (window.scrollY > 50) {
                seScrolled(true);
            } else {
                seScrolled(false);
            }
        }
        window.addEventListener("scroll", onScroll);

        return () => window.removeEventListener("scroll", onScroll);
    }, [])

    const onUpdateActiveLink = (value) =>{
        setActiveLink(value);
    }

    return (
        <Navbar bg="" expand="lg" className={scrolled ? "scrolled" : ""}>
            <Container className="NavBar">
                <Navbar.Brand href="#home">
                    <img className="logo" src={logo} alt="Logo" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" >
                    <span className="navbar-toggler-icon"></span>
                </Navbar.Toggle>
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ms-auto">
                    <Nav.Link href="#home" className={activeLink === 'home'?'active navbar-link':'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
                    <Nav.Link href="#stores" className={activeLink === 'stores'?'active navbar-link':'navbar-link'} onClick={() => onUpdateActiveLink('stores')}>Stores</Nav.Link>
                    <Nav.Link href="#contact" className={activeLink === 'contact'?'active navbar-link':'navbar-link'} onClick={() => onUpdateActiveLink('contact')}>FAQ/Contact</Nav.Link>
                    <Nav.Link href="#login" className={activeLink === 'login'?'active navbar-link':'navbar-link'} onClick={() => onUpdateActiveLink('login')}>Login/SignUp</Nav.Link>
                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}