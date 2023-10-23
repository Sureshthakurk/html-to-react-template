import Home from "./components/Home"
import About from "./components/About"
import Contact from "./components/Contact"
import Services from "./components/Services"
import { BrowserRouter,
  Routes,
  Route} from 'react-router-dom'

const App = ()=>{
    return(
      <BrowserRouter>
              <Routes>
                <Route index path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/services" element={<Services />} />
                <Route path="/contact" element={<Contact />} />

              </Routes>
           </BrowserRouter>
    )
}

export default App