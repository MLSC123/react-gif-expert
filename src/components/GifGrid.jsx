import React, { useEffect, useState } from 'react'
import {getGifs} from '../helpers/getGifs'
import { GifItem } from './GifItem';
import { useFetchGifs } from '../hooks/useFetchGifs'

export const GifGrid = ({category}) => {

    const { images, isLoading } = useFetchGifs(category);
    

    //el siguiente codigo sera reemplazado por el custom hook use fetch gifs
    //const [newImages, setNewImages] = useState([]);

    //const getImages = async() => {
        //const Images = await getGifs(category);
        //setNewImages(Images);
        ///getGifs(category).then((img) => setNewImages(img));
        ///const data = resp.json();
        ///console.log(resp);

    //}
    //useEffect(() => {
        ///getGifs(category).then((img) => setNewImages(img));
        //getImages();
    //}, [])
    
  return (
    <>
        <h1>{category}</h1>

        {
            isLoading && ( <h3>Loading...</h3> )
        }
        <div className='card-grid' >
            {
                images.map( (img) => {
                    return <GifItem key={img.id} {...img} /> 
                } )
            }
        </div >

    </>
  )
}
