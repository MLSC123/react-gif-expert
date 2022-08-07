// .js porque solo tiene codigo de javascript

import { useEffect, useState } from "react";
import {getGifs} from '../helpers/getGifs'


export const useFetchGifs = (category) => {

    const [newImages, setNewImages] = useState([]);
    const [isLoading, setIsLoading] = useState(true);


    const getImages = async() => {
        const Images = await getGifs(category);
        setNewImages(Images);
        setIsLoading(false);
        ///getGifs(category).then((img) => setNewImages(img));
        ///const data = resp.json();
        ///console.log(resp);

    }
    useEffect(() => {
        ///getGifs(category).then((img) => setNewImages(img));
        getImages();
    }, [])

    return {
        images: newImages,
        isLoading: isLoading,
    }
}
