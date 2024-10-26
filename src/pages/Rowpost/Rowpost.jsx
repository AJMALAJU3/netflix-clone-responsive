import React, { useEffect,useState } from 'react'
import axios from '../../axios'
import {ImageURL } from '../../constants/constants'
function Rowpost(props) {
    const [movies,setMovies] = useState(null)
    useEffect(()=>{
        axios.get(props.url).then(response=>{
            console.log(response.data.results);
            
            setMovies(response.data.results)
        })
        
    },[props.url])
  return (
    <div className='ml-[20px] mb-11'>
            <h2 className='font-semibold'>{props.title}</h2>
            <div className='flex p-[20px] overflow-x-scroll overflow-y-hidden'
            style={{scrollbarWidth:'none'}}>
            {movies && movies.map((element) => (
    <img
        key={element.id} // Always add a unique key when mapping in JSX
        className={`${props.isLarge?'max-h-[250px]':'max-h-[150px]'} mr-[10px]`}
        alt="poster"
        src={`${ImageURL}${element.backdrop_path}`}
    />
))}
     </div>
    </div>
  )
}

export default Rowpost
