import React from "react"


const Header = () => {
    return (
        <div className="header">
            <nav className="navbar navbar-light navbar-expand-md">
                <a class="navbar-brand" href="/">
                    Home
                </a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup"
                    aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <a className="nav-item nav-link" href="/portfolio">Portfolio</a>
                        <a className="nav-item nav-link" href="/resume">Resume</a>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Header