import type { GiphyRamdonResponse } from "../data/giphy-response";

const API_KEY = "egDpSsVYZS4htFgL1q6ggUY2FWNsOpEg";


const myRequest = fetch(`https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`);


const createImageOnDOM = ( (url: string) => {
    const imgElement = document.createElement('img');
        imgElement.src = url;

        document.body.append(imgElement);
} )

myRequest
    .then( (respose) => respose.json())
    .then( ({ data }: GiphyRamdonResponse) => {

        const imageUrl = data.images.original.url;
        createImageOnDOM(imageUrl);
    })
    .catch( (err) => {
    console.error(err);
} );
