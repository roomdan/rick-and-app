import logo2 from './logo2.svg';
import { useForm } from "react-hook-form"

export const HeaderMenu = ({changeTheme})=>{

    const {register, handleSubmit} = useForm();

    window.onscroll = function() {
        const a = window.scrollY;
        if(a > 350){
            document.getElementById('navigation-menu').style.position = 'fixed';
            document.getElementById('navigation-menu').style.backgroundColor = 'rgba(255, 255, 255, 0.777)';}
        else if (a < 5) {
            document.getElementById('navigation-menu').style.position = '';
            document.getElementById('navigation-menu').style.backgroundColor = 'white';
        }
    }



return(
    <div id='navigation-menu'>
        <div className='log-navigation-menu'>
                <img src={logo2} className="logo-rick" alt="logo"/>
        </div> 
            <nav className='nav-page'>
                <ul className='list-menu-options'>
                    <li>
                        <button className='pp-Help-btn'>Help</button>
                    </li>
                    <li>
                        <form onChange={handleSubmit(e=>changeTheme(e))}>
                            <select className='pp-Theme' {...register('theme')}>
                                <option value='ligth'>Ligth Mode</option>
                                <option value='dark'>Dark Mode</option>
                            </select>
                        </form>
                    </li>
                    <li className='pp-More'>
                          <a href='/#'>More</a>
                    </li>
                </ul>
            </nav>
    </div>
)

}