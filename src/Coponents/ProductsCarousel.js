import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';


import BlackForest from '../Assests/Black-Forest-Kuka.jpg'
import KukaRoyale from '../Assests/Kuka-Royale.jpg'
import KukaThunder from '../Assests/Kuka-With-Thunder.jpg'
import StrawberryKuka from '../Assests/strawberry-kuka.jpg'
import MangoKuka from '../Assests/mango-kuka.jpg'
import Junket from '../Assests/Junket.jpg'

export const ProductsCarousel = () => {
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
    };

    return(
        <section className="kuka" id="kuka">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="kuka-bx wow zoomIn">
                            <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme kuka-slider">
                                <div className="item">
                                    <img src={BlackForest} alt="Image" />
                                    <h1>BLACK FOREST KUKA</h1>
                                    <h5>Your favorite cake flavor, now in a Kuka!</h5>
                                </div>
                                <div className="item">
                                    <img src={KukaRoyale} alt="Image" />
                                    <h1>KUKA ROYALÈ</h1>
                                    <h5>A true bliss of multi layers of chocolate topped with dry fruits, a cherry & chocolate sticks</h5>
                                </div>
                                <div className="item">
                                    <img src={KukaThunder} alt="Image" />
                                    <h1>KUKA WITH THUNDER</h1>
                                    <h5>Kuka with a scoop of delicious ice-cream on top!</h5>
                                </div>
                                <div className="item">
                                    <img src={StrawberryKuka} alt="Image" />
                                    <h1>STRAWBERRY KUKA</h1>
                                    <h5>Tangy & sweet Strawberries added to the thick & creamy shake!</h5>
                                </div>
                                <div className="item">
                                    <img src={MangoKuka} alt="Image" />
                                    <h1>MANGO KUKA</h1>
                                    <h5>Freshly made shake with real chunks of Mango!</h5>
                                </div>
                                <div className="item">
                                    <img src={Junket} alt="Image" />
                                    <h1>SPECIAL CAFÈ CRÈME</h1>
                                    <h5>Sundae with 5 scoops topped with dry fruits!</h5>
                                </div>
                            </Carousel>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}