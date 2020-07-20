import React,{useState,useEffect} from 'react'
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({category}) => {

    const [images, setimages] = useState([])

    useEffect( ()=>{
        getGifs();
    },[]);

    const getGifs = async() => {
        const url = 'https://api.giphy.com/v1/gifs/search?api_key=c1AR1jg6oM4HDe2HZAeUcs4IXrN31EST&q=transformers&limit=10';
        const resp = await fetch(url);
        const {data} = await resp.json();
        const gifs  = data.map(img => {
            return {
                id: img.id,
                title: img.title,
                url: img.images?.downsized_medium.url
            }
        })
        setimages(gifs);
    }

    return (
        <div>
            <ol>
                {
                    images.map( img => (
                    <GifGridItem key={img.id} img={img}></GifGridItem>
                    ))
                }
            </ol>
        </div>
    )
}
