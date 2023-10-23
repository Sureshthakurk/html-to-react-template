import TopNav from "../Shared/Topnav"
import Navbar from "../Shared/Navbar"
import Info from "../Shared/Info"
import Footer from "../Shared/footer"
import Hero from "../Home/Hero"
import Feature from "../Home/Features"
import About from "../Home/About"
import Professional from "./Professional"
import Service from "../Home/Services"
import Testimonial from "../Home/Testimonials"
import Contact from "../Home/Contact"
const Home = ()=>{
    return(
       <>
       <TopNav />
       <Navbar />
       <Hero />
       <Feature />
       <About />
       <Professional />
       <Service />
       <Testimonial />
       <Contact />
       <Info />
       <Footer />
       </>
    )
}

export default Home