import {React, useState} from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faUserCircle, faSun, faMoon} from '@fortawesome/free-solid-svg-icons'
import './Header.css'
import {Link} from 'react-router-dom'

function Header({title}) {
    const [isProfileMenuVisible, showProfileMenu] = useState(false);
    const [isDarkMode, switchMode] = useState(false);

    return (
        <>
            <header className="w-full pt-3 pb-4 px-5 bg-gray-800 flex flex-row justify-between">
                <div id="header-left" className="flex flex-col">
                    <p className="text-md text-left text-white font-semibold text-mono uppercase mb-3">task board</p>
                    <p className="text-2xl text-left text-gray-300 font-mono">
                        <Link to="/" className="transition-colors duration-200 hover:text-white">Home</Link> {(title !== undefined) && `/ ${title}`}
                    </p>
                </div>

                <div id="header-right" className="flex flex-row content-start">
                    <div className="toggle px-4 py-1 flex flex-row justify-center content-start">
                        <span className={`text-xl px-2 ${!isDarkMode && "text-yellow-400"} ${isDarkMode && "text-gray-300"}`}>
                            <FontAwesomeIcon icon={faSun}/>
                        </span>
                        <input type="checkbox" id="dark-mode-switch" onChange={() => {switchMode(!isDarkMode)}}/>
                        <label htmlFor="dark-mode-switch" className=""> </label>
                        <span className={`text-xl px-2 ${!isDarkMode && "text-gray-300"} ${isDarkMode && "text-purple-500"}`}>
                            <FontAwesomeIcon icon={faMoon}/>
                        </span>
                    </div>
                    <div className="text-3xl transition-colors duration-200 text-gray-300 hover:text-white cursor-pointer" onClick={() => {showProfileMenu(!isProfileMenuVisible)}}>
                        <FontAwesomeIcon icon={faUserCircle}/>
                    </div>
                </div>
            </header>

            <div id="user-menu" className={`bg-gray-50 text-black text-left py-4 w-1/3 md:w-1/6 absolute top-12 right-10 rounded-lg rounded-tr-none shadow-2xl transition-all duration-500 origin-top-right ${isProfileMenuVisible && "transform scale-100"} ${!isProfileMenuVisible && "hidden transform scale-0"}`}>
                <a href='#'><p className="p-2 px-6  transition-colors duration-300 hover:bg-gray-200">Profile</p></a>
                <div className="divider border border-gray-200"></div>
                <a href='#'><p className="p-2 px-6  transition-colors duration-300 hover:bg-gray-200">Help</p></a>
                <a href='#'><p className="p-2 px-6  transition-colors duration-300 hover:bg-gray-200">Sign Out</p></a>
            </div>
        </>
    )
}

export default Header
