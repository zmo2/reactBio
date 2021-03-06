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
                        <a className="nav-item nav-link" href="https://drive.google.com/file/d/1x2BZJB3FIsg1hKv2CLKiD5xvHbhuW880/view?usp=sharing" target="_blank">Resume</a>
                        <a className="nav-item nav-link" href="https://www.linkedin.com/in/eric-mo/" target="_blank">LinkedIn</a>
                        <a className="nav-item nav-link" href="https://github.com/zmo2" target="_blank">GitHub</a>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Header