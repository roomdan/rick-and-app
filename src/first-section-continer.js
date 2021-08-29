import { useEffect, useState } from 'react';
import { accesAxiosData } from './accesData';
import startApp from './init.svg';

export const FirstSection = ({ filter })=>{

    const [value, setValue] = useState("Earth (C-137)");
    const [locations, setLocations] = useState('');

    useEffect(
        ()=>{
            const get = async()=>{
                const acces = await accesAxiosData();
                setLocations(acces.data.results);
            }
            get()
        },[]
    )
        const options = locations?locations.map(
            loc=>{
                return <option value={loc.name} key={loc.id}>{loc.name}</option>
            }
        ):'...loading...'

    const selectEjec = (e)=>{
        setValue(e.target.value);
        filter(e.target.value)
    }


    return (
        <div className='First-Section-Title'>
            <div className='filter-first-section-box'>
                <div className='title-first-section'>
                    <h1>WELCOME TO RICK AND MORTY APP</h1>
                </div>
                <div className='svg-first-section'>
                    <img src={startApp} alt='logo' className='button-start-app' onClick={()=>{console.log('on click');}} />
                </div>
                <div className='form-edit-and-consult'>
                    <select value={value} onChange={(e)=>{selectEjec(e)}}>
                        {options}
                    </select>
                </div>
            </div>
        </div>
    )
} 