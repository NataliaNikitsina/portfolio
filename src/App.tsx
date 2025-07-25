import './App.css'
import {Header} from "./layout/header/Header.tsx";
import {Main} from "./layout/sections/main/Main.tsx";
import {Skills} from "./layout/sections/skills/Skills.tsx";
import {Contact} from "./layout/sections/contact/Contact.tsx";
import {ProjectsField} from "./layout/sections/projectsField/ProjectsField.tsx";
import {Footer} from "./layout/footer/Footer.tsx";
// import {Particle} from "./components/particles/Particle.tsx";
import {GoTopBtn} from "./components/goTopBtn/goTopBtn.tsx";

function App() {
    return (
        <div className="App">
            {/*<Particle/>*/}
            <Header />
            <Main />
            <Skills />
            <ProjectsField />
            <Contact />
            <Footer />
            <GoTopBtn/>
        </div>
    )
}

export default App


