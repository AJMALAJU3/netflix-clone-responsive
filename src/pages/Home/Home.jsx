import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import './Home.css'
import Banner from '../../pages/Banner/Banner'
import Rowpost from '../../pages/Rowpost/Rowpost';
import Footer from '../../components/Footer/Footer';
import { API_KEY } from '../../constants/constants';
function Home() {
    return (
        <div>
            <Navbar />
            <Banner />
            <Rowpost url={`trending/all/week?api_key=${API_KEY}&language=en-US`} isLarge title={'Trending Movies'} />
            <Rowpost url={`discover/movie?api_key=${API_KEY}&with_genres=28`} title={'Action Movies'} />
            <Rowpost url={`discover/movie?api_key=${API_KEY}&with_genres=27`} title={'Horror Movies'} />
            <Rowpost url={`discover/movie?api_key=${API_KEY}&with_genres=35`} title={'Comedy Movies'} />
            <Footer/>
        </div>
    )
}

export default Home
