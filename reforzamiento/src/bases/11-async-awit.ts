import type { GiphyRamdonResponse } from "../data/giphy-response";

const API_KEY = "egDpSsVYZS4htFgL1q6ggUY2FWNsOpEg";

const createImageOnDOM = ( (url: string) => {
    const imgElement = document.createElement('img');
        imgElement.src = url;

        document.body.append(imgElement);
} );


const getRandomGifUrl = async (): Promise<string> => {

    const myRequest = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`);

    const { data }: GiphyRamdonResponse = await myRequest.json();


    return data.images.original.url;
}

getRandomGifUrl().then(createImageOnDOM);