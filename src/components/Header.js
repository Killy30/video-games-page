import { NavLink, Link } from 'react-router-dom'
import '../style/header.css'

export default function Header(){
    return (
        <nav className="navbar navbar-expand-lg ps-5 pe-5  header_xbw">
            <div className="container-fluid">
                <a className="navbar-brand text-light" href="/">Home Games</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse d-flex justify-content-end" id="navbarText">
                    <ul className="navbar-nav mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a href="/" className='nav-link text-light active'>Home</a>
                        </li>
                        <li className="nav-item">
                            <a href="/about" className='nav-link text-light active'>About</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}