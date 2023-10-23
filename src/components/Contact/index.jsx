import TopNav from "../Shared/Topnav"
import Navbar from "../Shared/Navbar"
import Info from "../Shared/Info"
import Footer from "../Shared/footer"
const Contact = ()=>{
    return(
      <>
        <TopNav />
        <Navbar />
        <section class="contact_section layout_padding">
          <div class="container">
            <div class="heading_container">
              <h2>
                Contact Us
              </h2>
            </div>
            <div class="row">
              <div class="col-md-6">
                <form action="">
                  <div>
                    <input type="text" placeholder="Name" />
                  </div>
                  <div>
                    <input type="text" placeholder="Phone Number" />
                  </div>
                  <div>
                    <input type="email" placeholder="Email" />
                  </div>
                  <div>
                    <input type="text" class="message-box" placeholder="Message" />
                  </div>
                  <div class="d-flex ">
                    <button>
                      SEND
                    </button>
                  </div>
                </form>
              </div>
              <div class="col-md-6">
                <div class="map_container">
                  <div class="map">
                  <div id='googleMap' style={{ height: '100vh', width: '100%' }}>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d6293460.562509214!2d-94.5570653!3d39.6276814!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1698087319539!5m2!1sen!2sin"
                     width="600" 
                     height="450"
                      style={{border:'0'}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <Info />
        <Footer />
        </>
    )
}

export default Contact