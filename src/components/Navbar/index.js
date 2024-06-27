import './style.css';
import Logo from '../logo'
import {SideBarData} from './SideBarData'


function Navbar() {
    return (
        <div className="NavBar">
            <Logo></Logo>
            <ul className='NavBar-list'>
                    {SideBarData.map((value, key) => {
                        return( 
                            <li key={key} className='NavBar-list-itens'
                             onClick={ () => {window.location.pathname= value.link}}>
                                <div>{value.icon}</div>
                                <div> {value.title} </div>
                            </li>
                        )
                    })}
            </ul>
            
        </div>)
}

export default Navbar;