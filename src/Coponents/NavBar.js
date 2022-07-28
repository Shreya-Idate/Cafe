import { useState, useEffect } from "react";
import { Navbar, Container, Nav} from "react-bootstrap"
import logo from '../Assests/logo.png';
import {Logout} from '../App'
import {Link} from "react-router-dom";
import { useHistory } from "react-router-dom";

export const NavBar = ({Logout,name}) => {
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
    const history = useHistory();

    const SwitchToStore = () => {
        history.push("/Store");
    }

    const SwitchToHome = () => {
        history.push("/");
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
                    <label className="NavLabel">Welcome, {name}</label>
                    <Nav.Link href="" className={activeLink === 'home'?'active navbar-link':'navbar-link'} onClick={SwitchToHome}>Home</Nav.Link>
                    <Nav.Link href="" className={activeLink === 'Store'?'active navbar-link':'navbar-link'} onClick={SwitchToStore}>Stores</Nav.Link>
                    <Nav.Link href="" className={activeLink === 'Orders'?'active navbar-link':'navbar-link'} onClick={() => onUpdateActiveLink('Orders')}>Orders</Nav.Link>
                    {/* <Nav.Link href="#login" className={activeLink === 'login'?'active navbar-link':'navbar-link'} onClick={() => onUpdateActiveLink('login')}>Login/SignUp</Nav.Link> */}
                    <button onClick={Logout} className="button">Logout</button>
                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}