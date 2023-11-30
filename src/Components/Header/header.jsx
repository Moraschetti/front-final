import './header.css';
import { Link } from 'react-router-dom';
import  Logo  from 'assets/logo.svg'
import { scrollToTop } from 'functions.mjs';

const Header = () => {
    return (
        <>
            <nav id="nav" className="main-nav">
            <div className='logo-div'>
                <Link to='/' className='logo-link'>
                    <img className='logo' src={Logo} alt="logo" onClick={scrollToTop}/>
                </Link>
                    </div> 
                <ul className="nav-links">
                    <li className="link-item">
                        <Link to='/adopciones/mascotas' onClick={scrollToTop}>Adoptar</Link>
                    </li>
                    <li className="link-item">
                        <Link to='/denuncias' onClick={scrollToTop} >Denunciar</Link>
                    </li>
                    <li className="link-item">
                        <Link to='/informacion' onClick={scrollToTop} >Información</Link>
                    </li>
                    <li className="link-item">
                        <Link to='/donaciones' onClick={scrollToTop} >Ayudar</Link>
                    </li>
                    <li className="link-item">
                        <Link to='/contacto' onClick={scrollToTop} >Contacto</Link>
                    </li>
                </ul>
            </nav>
            <button type="button" id="btn-burger" className="button-menu">
                <span className="lines"></span>
                <span className="lines"></span>
                <span className="lines"></span>
            </button>
            <header className="header" id="home">
        </header>
        </>
    );
}


export default Header;