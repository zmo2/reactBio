import React from "react"

const AboutMe = () => {

    return (
        <div>

            <header className="MainHeader">
                <h1>Eric Mo </h1>
                <p> Financial Analyst & Full Stack Web Developer</p>
            </header>

            <div className="mainContents">
                <div className="center_section aboutMe">
                    <p className="body_header">About Me</p>
                    <p className="description">
                        I am a finance professional who is very curious about technology.
                        <br /><br />
                        After graduated from the University of Illinois at Urbana-Champaign with degrees in accounting and finance, I
                        began working in the mortgage industry in the Bay Area. With the huge tech exposure in Sillicon Valley, my
                        interest and curiousity in technology grew. I began reading and learning more and more about new technologies
                        and learning to code.
                        <br /><br />
                        With years of experience in the finance industry, I saw many inefficiencies. I began picking up classes in
                        Python and data science, followed by a full stack web dev bootcamp. I believe finance and accounting can do
                        better. After the bootcamp, I am even more hooked in tech. I will continue to learn and plan to be part of "the next".
                        <br /><br />
                        <a href="https://reactbio0001.herokuapp.com/" target="_blank">
                            Personal Website
                        </a>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default AboutMe