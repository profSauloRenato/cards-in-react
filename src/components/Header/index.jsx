import Logo from '../../assets/logo.jpg';
import './Header.css'

const Header = () => {
    return(
        <div className="header">
            <div className="header-cont">
                <div className='logo'>
                    <img src={Logo} alt="Logo b8one" />
                </div>
                <p className='head'>Teste Dev Front-End</p>
            </div>
        </div>
    )
}

export default Header;