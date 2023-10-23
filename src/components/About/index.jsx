import TopNav from "../Shared/Topnav"
import Navbar from "../Shared/Navbar"
import Info from "../Shared/Info"
import Footer from "../Shared/footer"
const About = ()=>{
    return(
        <>
        <TopNav />
        <Navbar />
            <section class="about_section layout_padding-bottom" >
                <div class="container">
                <div class="row">
                    <div class="col-lg-5 col-md-6">
                    <div class="detail-box">
                        <h2>
                        About us
                        </h2>
                        <p>
                        There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomisedThere are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised
                        </p>
                        <a href="">
                        Read More
                        </a>
                    </div>
                    </div>
                    <div class="col-lg-7 col-md-6">
                    <div class="img-box">
                        <img src="images/about-img.jpg" alt="" />
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

export default About