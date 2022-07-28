import {NavBar} from './NavBar'
import {Banner} from './Banner'
import {ProductsCarousel} from './ProductsCarousel'
import {Footer} from './Footer'
import {Link} from "react-router-dom";
import React from 'react'

export const Dashboard = () => {
    return(
        <div>
            {/* <Link to="/home"></Link>
            <NavBar /> */}
            <Banner />
            <ProductsCarousel />
        </div>
    );
}