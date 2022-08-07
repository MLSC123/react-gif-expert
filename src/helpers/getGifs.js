//extension .js porque es solo codigo de javascript
//los helpers son funciones con codigo de js que nos ayudan a ciertas ejecuciones
//y es mejor tenerlas aparte para dejar limpios los componentes y para reutilizar en 
//otros contextos

export const getGifs = async(category) => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=F74Dk4QXp1m1pImd7bhfOMnfKnCLIfWo&q=${category}&limit=10`;
    const resp = await fetch(url);
    const {data} = await resp.json();

    const gifs = data.map( (imgs) => {
        return {
            title: imgs.title,
            id: imgs.id,
            url: imgs.images?.downsized_medium.url,
        }
    })
   
    //console.log(resp.json()); returns a promise
    return gifs;

}