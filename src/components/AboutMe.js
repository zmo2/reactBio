import React from "react"

const AboutMe = () => {
    const myDesc = `I am a finance professional who is curious about technology.
       
    After graduated from the University of Illinois at Urbana-Champaign with degrees in accounting and finance, I
    began working in the mortgage industry in the Bay Area. With the huge tech exposure in Sillicon Valley, my
    interest and curiousity in technology grew. I began reading and learning more and more about new technologies
    and learning to code.

    With years of experience in the finance industry, I saw many inefficiencies. I began picking up classes in
    Python and data science, followed by a full stack web dev bootcamp. I believe finance and accounting can do
    better. I want to keep growing so that I can have an impact in solving these inefficiencies.`

    return (
        <div>
            <p className="description">
                {myDesc}
            </p>
        </div>
    )
}

export default AboutMe