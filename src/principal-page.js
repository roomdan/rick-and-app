import { useEffect, useState } from "react"
import { accesAxiosData } from "./accesData"
import { ContentApp } from "./content-app"
import { FirstSection } from "./first-section-continer"
import { HeaderMenu } from "./pp-header-menu"

export const Apage = ()=>{

    const [data, setData] = useState('');
    const [filter, setFilter] = useState("Earth (C-137)");
    
    useEffect(
        ()=>{
            const get = async()=>{
                const a = await accesAxiosData();
                const loc = a.data.results.filter(e=>e.name === filter);
                setData(...loc);
            }
            get();
        },[filter]
    )
    return (
        <div className='principal-page'>
            <header className='pp-header-menu'>
                <HeaderMenu changeTheme={e=>console.log(e)}></HeaderMenu>
            </header>
            <div className='pp-title'>
                <FirstSection filter={e=>setFilter(e)}></FirstSection>
            </div>
            <div className='pp-app-content'>
                <ContentApp queryData={data.residents}></ContentApp>
            </div>
            <footer></footer>
        </div>
    )
}