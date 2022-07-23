import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import {NavBar} from './Coponents/NavBar'
import {Banner} from './Coponents/Banner'
import {ProductsCarousel} from './Coponents/ProductsCarousel'
import {Footer} from './Coponents/Footer'

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <ProductsCarousel />
      <Footer />
    </div>
  );
}

export default App;
