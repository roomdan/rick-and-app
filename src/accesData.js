import axios from "axios";

const accesData = async (url)=>{
        const get = await fetch(url);
        const scn = await get.json();
        const act = await scn;
        return act
}


const accesAxiosData = async () =>{
        const acces = axios(
                {
                        method:'GET',
                        baseURL:'https://rickandmortyapi.com/api/location',
                        responseType:'json'
                }
        )

        const view = await acces;
        return view
}

export {accesData, accesAxiosData}