import { CharacterDesign } from "./Character"

export const ContentApp = ({ queryData })=>{


const charList = queryData?queryData.map(
    resident=>{
        return  <CharacterDesign urlChar={resident} key={resident}></CharacterDesign>
    }
):''

    return (
        <div className='content-info-app'>
            <div className='server-error'>Server errors</div>
            <div className='content-characters'>
                {charList}
            </div>
            <div className='number-pages'></div>
        </div>
    )
}