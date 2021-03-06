import React from 'react'
import { GifGridItem } from './GifGridItem';
import { useFetchGifs } from '../hooks/useFetchGifs';

export const GifGrid = ({category}) => {


    const {data} = useFetchGifs(category);
    

    return (
        <>
        <h3>{category}</h3>
        <div className="card-grid">
                {
                    data.map( img => (
                    <GifGridItem key={img.id} img={img}></GifGridItem>
                    ))
                }
        </div>
        </>
    )
}
