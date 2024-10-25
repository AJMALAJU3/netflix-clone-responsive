import React, { useEffect, useState } from 'react'
import axios from '../../axios'
import { API_KEY,ImageURL } from '../../constants/constants'

function Banner() {
    const [movie,setMovie] = useState(null)
    useEffect(()=>{
        axios.get(`trending/all/week?api_key=${API_KEY}&language=en-US`).then(response=>{
            const randomNumber = Math.floor(Math.random() * 20);
            setMovie(response.data.results[randomNumber])
        })
    },[])
  return (
    <div 
         className='bg-cover h-[600px]'
         style={{ backgroundImage: `url(${movie?ImageURL+movie.backdrop_path:''})` }}>
            <div className='pt-[240px] h-[190px] pl-[15px]' >
                <h1 className='text-[3rem] font-extrabold pb-[0.3rem]'>{movie?movie.title:''}</h1>
                <div className='banner_buttons' >
                    <button className="outline-none border-none font-bold rounded-md px-8 py-2 bg-[rgba(51,51,51,0.5)] cursor-pointer mr-4 hover:bg-[#e6e6e6] hover:text-black" >Play</button>
                    <button className="outline-none border-none font-bold rounded-md px-8 py-2 bg-[rgba(51,51,51,0.5)] cursor-pointer mr-4 hover:bg-[#e6e6e6] hover:text-black" >My list</button>
                </div>
                <h1 className="w-[45rem] leading-[1.3] pt-4 text-base h-[80px] max-w-[360px]">{movie?movie.overview:''}</h1>
            </div>
            <div
  className="h-[26.12rem]"
  style={{
    background: "linear-gradient(180deg, transparent, rgba(37,37,37,0.61), black)",
  }}
></div>

        </div>
  )
}

export default Banner
