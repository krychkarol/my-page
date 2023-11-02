import About from "./pages/about/about";
import Contact from "./pages/contact/contact";
import Footer from "./pages/footer/footer";
import Home from "./pages/home/home";
import Navbar from "./pages/navbar/navbar";
import Projects from "./pages/projects/projects";

function App() {
    return (
        <>
            <Navbar/>
            <Home/>
            <About/>
            <Projects />
            <Contact />
            <Footer />
        </>
    );
}

export default App;