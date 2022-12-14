import React from 'react'

export const GifItem = ({title, url}) => {
  return (
    <div className='card'>
        <img src={url} alt={title}/>
        <h2> {title} </h2>
    </div>
  )
}
