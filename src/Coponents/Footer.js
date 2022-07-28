import { Container, Row, Col } from "react-bootstrap";
import {Box, Column, FooterLink, Heading } from "./FooterStyles";
import logo from '../Assests/logo.png'
import { useHistory } from "react-router-dom";


export const Footer = () =>{
    const history = useHistory();

    const SwitchToStore = () => {
        history.push("/Store");
    }

    const SwitchToHome = () => {
        history.push("/");
    }
    return(
        <footer className="footer">
        <Container>
            <Row className="align-items-center">
            <Col size={12} sm={6}>
                <img src={logo} alt="Logo" />
            </Col>
            <Col size={12} xs={12} md={6} xl={1} sm={1} className="text-start text-sm-start">
                <Heading className="footer-heading">Links</Heading>
                <FooterLink href="" onClick={SwitchToHome}>Home</FooterLink>  <br />
                <FooterLink href="#">Menu</FooterLink><br />
                <FooterLink href="#">News</FooterLink> <br />
                <FooterLink href="#">FAQ</FooterLink> <br />
                <FooterLink href="#">Contact Us</FooterLink><br /> 
                {/* <a href="#"><img src={navIcon3} alt="Icon" />News</a> */}
            </Col>
            <Col size={12} xs={12} md={6} xl={1} sm={2} />
            <Col size={12} xs={12} md={6} xl={1} sm={3} className="text-start text-sm-start">
                <Heading className="footer-heading">Links</Heading>
                <FooterLink href="#">Home</FooterLink> <br /> 
                <FooterLink href="#">Menu</FooterLink> <br />
                <FooterLink href="#">News</FooterLink> <br />
                <FooterLink href="#">FAQ</FooterLink> <br />
                <FooterLink href="#">Contact Us</FooterLink> <br />
                {/* <a href="#"><img src={navIcon3} alt="Icon" />News</a> */}
            </Col>
            <p>Copyright 2022. All Rights Reserved</p>
            </Row>
        </Container>
    </footer>
    );
}