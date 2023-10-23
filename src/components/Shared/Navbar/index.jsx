import style from "../../../style/style.css"
import bootstrap from "../../../style/bootstrap.css"
import responsive from "../../../style/responsive.css"

const Navbar = ()=>{
    return(
                <div class="header_bottom" style={{background: '#D1E3FF'}}>
                    <div class="container-fluid">
                        <nav class="navbar navbar-expand-lg custom_nav-container ">
                            <a class="navbar-brand" href="index.html">
                            <span>
                                Inance
                            </span>
                            </a>
                          
                            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span class=""> </span>
                            </button>
                          
                                <ul class="navbar-nav ">
                                    <li class="nav-item active">
                                    <a class="nav-link" href="/">Home<span class="sr-only">(current)</span></a>
                                    
                                    </li>
                                    <li class="nav-item">
                                    <a class="nav-link" href="about">About</a>
                                    </li>
                                    <li class="nav-item">
                                    <a class="nav-link" href="services">Services</a>
                                    </li>
                                    <li class="nav-item">
                                    <a class="nav-link" href="contact">Contact Us</a>
                                    </li>
                                </ul>
                             
                        </nav>
                    </div>
                </div>
    )

}
export default Navbar