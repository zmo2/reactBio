import React from "react"
import { BrowserRouter, Route } from "react-router-dom"
import Header from "./components/Header"
import Footer from "./components/Footer"
import Project from "./components/Project"
import AboutMe from "./components/AboutMe"
import Resume from "./components/Resume"

const App = () => {
    return (
        <div className="Container">

            <BrowserRouter>
                <Header />
                <img src="../Img/bkgroundIMG.jpg" alt="" id="bgroundImg"></img>
                <div className="fullWidth">
                    <Route path="/" exact component={AboutMe} />
                    <Route path="/portfolio" exact component={Project} />

                </div>
            </BrowserRouter>

        </div>
    )
}

export default App