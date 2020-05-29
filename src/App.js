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
                <br />
                <br />
                <div className="container">
                    <Route path="/" exact component={AboutMe} />
                    <Route path="/portfolio" exact component={Project} />
                    <Route path="/resume" exact component={Resume} />
                </div>
                <Footer />
            </BrowserRouter>

        </div>
    )
}

export default App