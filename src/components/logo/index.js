import Logo from '../../images/logo.svg'
import './style.css'

function logo() {
    return ( 
        <div className='App-header-logo'>
            <img src={Logo}></img>
            <p><strong>Nocti</strong>Reader</p>
        </div>)
}

export default logo 