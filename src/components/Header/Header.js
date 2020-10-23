import React from 'react';
import './Header.css';
import SearchIcon from '@material-ui/icons/Search';

function Header() {
    return (
        <div className = "header">
            <img className = "header__logo" src="https://i.ibb.co/fXF9Mtr/Logo.png" alt=""/>
            <div className="boxContainer">
                <table className="elementsContainer">
                    <tr>
                        <td>
                            <a href="#"><SearchIcon className="searchIcon"/></a>
                        </td>
                        <td>
                            <input className="search" type="text" placeholder="Search Your Destination"/>
                        </td>
                    </tr>
                </table>
            </div>
            <ul className="header_nav">
                <li className="header__option"><a  className="header__optionLine" href="#">News</a></li>
                <li className="header__option"><a  className="header__optionLine" href="#">Destination</a></li>
                <li className="header__option"><a  className="header__optionLine" href="#">Blog</a></li>
                <li className="header__option"><a  className="header__optionLine" href="#">Contact</a></li>
                <li className="header__option"><a  className="header__optionLine" href="#">News</a></li>
                <li className="header__option"><button>Login</button></li>
            </ul>
        </div>
    )
}

export default Header;
