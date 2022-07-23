import { Container, Row, Col} from "react-bootstrap";
import BannerImg from '../Assests/banner.jpg'
import 'animate.css';
import TrackVisibility from 'react-on-screen';

// import headerImg from "../Assets/main-img.png";
// import collaborate from '../Assets/collaborate-logo.svg'
// import blog from '../Assets/blog-logo.svg'
// import contact from '../Assets/contact-logo.svg'

export const Banner = () => {
    
    return (
        <section className="banner" id="home">
            <Container>
                <Row className="align-items-center">
                    <Col className="" xs={12} md={6} xl={12} >
                        <h1>Welcome to Cafe Creme<span className="wrap"></span></h1>
                        <p>
                            If the delicious aroma of chocolate is enough to please you, the taste of our Kuka will definitely sweep you off your feet.
                            Welcome to chocolate heaven where Kuka reigns supreme.
                        </p>
                        <p>
                            From our humble beginnings to more than 100 outlets in more than 20 cities, Café Crème has grown quite rapidly in last few years and is gaining momentum with more than 1 outlet opening every month thanks to more than a million happy customers who have delighted in our products and continue their kind patronage. 
                            Our love for innovation has led to the creation of more than 60 different varieties of speciality drinks and yes, we are still innovating. 
                            So you can expect more delight and fun at Café Crème.
                        </p>
                    </Col>
                    <Col xs={12} md={6} xl={12}>
                        <TrackVisibility>
                            {({ isVisible }) =>
                                <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                                    <img src={BannerImg} alt="Header Img"/>
                                </div>}
                        </TrackVisibility>
                        
                    </Col>
                </Row>
            </Container>
            <Container>
                
            </Container>
        </section>
    );
}