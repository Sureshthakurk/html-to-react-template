import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons'
import OwlCarousel from 'react-owl-carousel'
import 'owl.carousel/dist/assets/owl.carousel.css'
import 'owl.carousel/dist/assets/owl.theme.default.css'
const Testimonial = ()=>{
    return(
        <>
              <section class="client_section ">
                    <div class="container">
                        <div class="heading_container heading_center">
                            <h2>
                            What Our Clients Say
                            </h2>
                    </div>
                        <div class="carousel-wrap layout_padding2-top ">
                            <OwlCarousel loop={true} margin={1} 
                                nav={true} items='2' className="owlTheme"
                                navClass="['owl-prev','owl-next']" class="owl-carousel" >
    
                                <div class="item">
                                    <div class="box">
                                    <div class="client_id">
                                        <div class="img-box">
                                        <img src="images/client-1.jpg" alt="" />
                                        </div>
                                        <div class="client_detail">
                                        <div class="client_info">
                                            <h6>
                                            Jorch morik
                                            </h6>
                                            <FontAwesomeIcon icon={faStar} style={{color: '#fbaf5d'}} />
                                            <FontAwesomeIcon icon={faStar} style={{color: '#fbaf5d'}} />
                                            <FontAwesomeIcon icon={faStar} style={{color: '#fbaf5d'}} />
                                            <FontAwesomeIcon icon={faStar} style={{color: '#fbaf5d'}} />
                                            <FontAwesomeIcon icon={faStar} style={{color: '#fbaf5d'}} /> 
                                        </div>
                                            <FontAwesomeIcon icon={faQuoteLeft} />
                                        </div>
                                    </div>
                                    <div class="client_text">
                                        <p>
                                        chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum
                                        </p>
                                    </div>
                                    </div>
                                </div>
                                <div class="item">
                                    <div class="box">
                                    <div class="client_id">
                                        <div class="img-box">
                                        <img src="images/client-2.jpg" alt="" />
                                        </div>
                                        <div class="client_detail">
                                        <div class="client_info">
                                            <h6>
                                            Jorch morik
                                            </h6>
                                            <FontAwesomeIcon icon={faStar} style={{color: '#fbaf5d'}} />
                                            <FontAwesomeIcon icon={faStar} style={{color: '#fbaf5d'}} />
                                            <FontAwesomeIcon icon={faStar} style={{color: '#fbaf5d'}} />
                                            <FontAwesomeIcon icon={faStar} style={{color: '#fbaf5d'}} />
                                            <FontAwesomeIcon icon={faStar} style={{color: '#fbaf5d'}} /> 
                                        </div>
                                            <FontAwesomeIcon icon={faQuoteLeft} />
                                        </div>
                                    </div>
                                    <div class="client_text">
                                        <p>
                                        chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum
                                        </p>
                                    </div>
                                    </div>
                                </div>
                                <div class="item">
                                    <div class="box">
                                    <div class="client_id">
                                        <div class="img-box">
                                        <img src="images/client-1.jpg" alt="" />
                                        </div>
                                        <div class="client_detail">
                                        <div class="client_info">
                                            <h6>
                                            Jorch morik
                                            </h6>
                                            <FontAwesomeIcon icon={faStar} style={{color: '#fbaf5d'}} />
                                            <FontAwesomeIcon icon={faStar} style={{color: '#fbaf5d'}} />
                                            <FontAwesomeIcon icon={faStar} style={{color: '#fbaf5d'}} />
                                            <FontAwesomeIcon icon={faStar} style={{color: '#fbaf5d'}} />
                                            <FontAwesomeIcon icon={faStar} style={{color: '#fbaf5d'}} /> 
                                        </div>
                                            <FontAwesomeIcon icon={faQuoteLeft} />
                                        </div>
                                    </div>
                                    <div class="client_text">
                                        <p>
                                        chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum
                                        </p>
                                    </div>
                                    </div>
                                </div>
                                <div class="item">
                                    <div class="box">
                                    <div class="client_id">
                                        <div class="img-box">
                                        <img src="images/client-2.jpg" alt="" />
                                        </div>
                                        <div class="client_detail">
                                        <div class="client_info">
                                            <h6>
                                            Jorch morik
                                            </h6>
                                            <FontAwesomeIcon icon={faStar} style={{color: '#fbaf5d'}} />
                                            <FontAwesomeIcon icon={faStar} style={{color: '#fbaf5d'}} />
                                            <FontAwesomeIcon icon={faStar} style={{color: '#fbaf5d'}} />
                                            <FontAwesomeIcon icon={faStar} style={{color: '#fbaf5d'}} />
                                            <FontAwesomeIcon icon={faStar} style={{color: '#fbaf5d'}} /> 
                                        </div>
                                            <FontAwesomeIcon icon={faQuoteLeft} />
                                        </div>
                                    </div>
                                    <div class="client_text">
                                        <p>
                                        chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum
                                        </p>
                                    </div>
                                    </div>
                                </div>
                            
                            </OwlCarousel>
                        </div>
                    </div>
                </section>
        </>
    )
}

export default Testimonial