import './App.css'
import {Header} from "./layout/header/Header.tsx";
import {Main} from "./layout/sections/main/Main.tsx";
import {Skills} from "./layout/sections/skills/Skills.tsx";
import {Contact} from "./layout/sections/contact/Contact.tsx";
import {ProjectsField} from "./layout/sections/projectsField/ProjectsField.tsx";
import {Footer} from "./layout/footer/Footer.tsx";

function App() {
    return (
        <div className="App">
            <Header />
            <Main />
            <Skills />
            <ProjectsField />
            <Contact />
            <Footer />
        </div>
    )
}

export default App


