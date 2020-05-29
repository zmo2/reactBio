import React from "react"

const Project = () => {
    return (
        <div>
            <div className="center_section portfolioSec">
                <div>
                    <p className="body_header">Portfolio</p>
                </div>
                <div className="row ProjSec">
                    <button className="col-sm-5 btn projsBtn">
                        <a href="https://note-taker-0.herokuapp.com/notes" target="_blank">
                            <img className="projpic" src="assets/imgVids/NoteTaker.png" alt="NoteTaker landing page" style={{ width: '200px' }} />
                            <p className="projname">Note Taker</p>
                        </a>
                    </button>
                    <div className="spacer col-sm-1" />
                    <button className="col-sm-5 btn projsBtn">
                        <a href="https://guarded-everglades-88887.herokuapp.com/" target="_blank">
                            <img className="projpic" src="assets/imgVids/Quarantini.png" alt="Quarantini landing page" style={{ width: '200px' }} />
                            <p className="projname">Quarantini</p>
                        </a>
                    </button>
                </div>
                <div className="row ProjSec">
                    <button className="col-sm-5 btn projsBtn">
                        <a href="https://zmo2.github.io/weatherDashboard/" target="_blank">
                            <img className="projpic" src="assets/imgVids/weatherDash.png" alt="image of weather dashboard" style={{ width: '200px' }} />
                            <p className="projname">Weather Dashboard</p>
                        </a>
                    </button>
                    <div className="spacer col-sm-1" />
                    <button className="col-sm-5 btn projsBtn">
                        <a href="https://github.com/yechan96/bootcamp_project1" target="_blank">
                            <img className="projpic" src="assets/imgVids/bkSearch.png" alt="image of booksearch landing page" style={{ width: '200px' }} />
                            <p className="projname">Book Search</p>
                        </a>
                    </button>
                </div>
                <div className="row ProjSec">
                    <button className="col-sm-5 btn projsBtn">
                        <a href="https://zmo2.github.io/password-generator/" target="_blank">
                            <img className="projpic" src="assets/imgVids/ranPassGen.png" alt="image of random password generator page" style={{ width: '200px' }} />
                            <p className="projname">Random Password Generator</p>
                        </a>
                    </button>
                    <div className="col-sm-1" />
                    <button className="col-sm-5 btn projsBtn">
                        <a href="https://immense-plateau-51641.herokuapp.com/" target="_blank">
                            <img className="projpic" src="assets/imgVids/EatDaBurger.png" alt="Eat-Da-Burger page" style={{ width: '200px' }} />
                            <p className="projname">Eat-Da-Burger</p>
                        </a>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Project