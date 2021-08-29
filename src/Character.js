import { useEffect, useState } from "react"
import { accesData } from "./accesData"

export const CharacterDesign = ({urlChar})=>{

    const [data, setData] = useState('')

useEffect(
    ()=>{
        const getResidents = async ()=>{
            const get = await accesData(urlChar);
            setData(get)
        };
        getResidents();
    },[urlChar]
)
    return (
        <div className='box-character'>
            <div className='image-box-character'>
                <img src={data?data.image:''} alt={data?data.name:''}/>
            </div>
            <div className='character-info'>
                <div className='name'>
                    <div className='status-ligth'></div>
                        {`${data?data.name:''}`}
                </div>
                <div className='status-character'>
                    <div className='status-text'>
                        {`${data?data.status:''} - ${data?data.species:''} - ${data?data.gender:''}`}
                    </div>
                </div>
                <div className='location-info-character'>
                        <div className='title-character'>
                            Last known location:
                        </div>
                        <div className='subtitle-character'>
                            {`${data?data.location.name:''}`}
                        </div>
                </div>
                <div className='btn-show-espisodes'>
                        <button className='episodes-btn'>View Episodes</button>
                </div>
            </div>
        </div>
    )
}