import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone } from '@fortawesome/free-solid-svg-icons'
const TopNav = ()=>{
    return(
        <div class="hero_area">
            <header class="header_section">
            <div class="header_top">
                <div class="container-fluid">
                <div class="contact_nav">
                    <a href="">
                    <FontAwesomeIcon icon={faPhone} style={{color:'#FF8A1D'}} />
                    <span>
                        Call : +01 123455678990
                    </span>
                    </a>
                    <a href="">
                    <i class="fa fa-envelope" aria-hidden="true"></i>
                    <span>
                        Email : demo@gmail.com
                    </span>
                    </a>
                </div>
                </div>
            </div>
            </header>
  </div>
    )
}

export default TopNav