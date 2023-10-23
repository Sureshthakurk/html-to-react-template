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
                    <div id="googleMap" style={{width:'100%',height:'100%'}}></div>
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