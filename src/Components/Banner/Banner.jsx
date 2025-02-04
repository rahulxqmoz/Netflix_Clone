import React, { useEffect, useState } from 'react'
import './Banner.css'
import axios from '../axios'
import { API_KEY,imageUrl } from '../../Constants/constants'


function Banner() {
  const[movie,setMovie]=useState()
  useEffect(()=>{
    axios.get(`trending/all/week?api_key=${API_KEY}&language=en-US`).then((response)=>{
      const results=response.data.results;
      const randomIndex=Math.floor(Math.random()*Math.min(20,results.length))
      setMovie(response.data.results[randomIndex])
      
    })
  },[])
  return (
  
    <div style={{backgroundImage:`url(${movie?imageUrl+movie.backdrop_path:""})`}} className='banner'>
        <div className='content'>
            <h1 className='title'>{movie ? movie.title:""}</h1>
            <div className='banner_buttons'>
                <button className='button'>Play</button>
                <button className='button'>My List</button>
            </div>
            <h1 className='decription'>{movie?movie.overview:""}</h1>

        </div>
      <div className="fade_bottom">

      </div>
    </div>
  )
}

export default Banner
