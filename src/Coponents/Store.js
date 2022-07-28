import { Container, Row, Col} from "react-bootstrap";

import cafe1 from '../Assests/cafe4.jpg'
import cafe2 from '../Assests/cafe1.jpg'


export const Store = () => {
    return(
        <Container className="Store" fluid={true}>
            <Row className="align-items-center">
                    <Col style={{paddingTop: "150px"}}>
                        <Row className="Row1">
                            <Col xs="12" md="4" size={12}>
                            <img src={cafe2} style={{width:"100%"}} />
                            </Col>
                            <Col  xs="12" md="8" size={12} >
                                <div class="row contact-map aos-init aos-animate" data-aos="fade-up">
                                    <iframe 
                                    name="iframe1" id="iframe1"
                                    frameborder="0" border="0" cellspacing="0"
                                    scrolling="yes"
                                    src="https://www.google.com/maps/embed?pb=!1m26!1m12!1m3!1d30168.236185982925!2d72.99366712664093!3d19.062439524110754!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m11!3e6!4m3!3m2!1d19.039659!2d73.0051052!4m5!1s0x3be7c13af645de13%3A0x2135697f6f5e0f5e!2snavi%20mumbai%20cafe%20with%20multiple%20branches!3m2!1d19.084952299999998!2d73.0076461!5e0!3m2!1sen!2sin!4v1659018009072!5m2!1sen!2sin" width="600" height="450" style={{border:"0"}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade">
                                        
                                    </iframe>
                                </div>
                            </Col>
                        </Row>
                    </Col>             
            </Row>
            <br />
        </Container>
    );
}