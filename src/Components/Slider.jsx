import next_icon from '../Images/arrow2.png'
import back_icon from '../Images/arrow1.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';

{/* <FontAwesomeIcon icon="fa-solid fa-chevron-right" /> */}
import "../App.css";
import { useRef } from 'react'
function Slider(){
    
    const slider=useRef();
    let tx=0;
    const slideForward = () => {
        if (tx > -75) { // Adjust the condition based on the number of slides
            tx -= 25; // Adjust the value based on the width of your slides
            slider.current.style.transform = `translateX(${tx}%)`;
        }
    };
    
    const slideBackward = () => {
        if (tx < 0) {
            tx += 25; // Adjust the value based on the width of your slides
            slider.current.style.transform = `translateX(${tx}%)`;
        }
    };
    
  

    return(
        
        <div className="sliders">
             <div className="meet-people">
                <h2>Meet Our People</h2>
            </div>
            <FontAwesomeIcon icon={faChevronRight}  className="next-btn" onClick={slideForward} />
            <FontAwesomeIcon icon={faChevronLeft}  className="back-btn" onClick={slideBackward} />
          
            <div className='slider'>
                <ul ref={slider}>
                    <li>
                        <div className='slide slide1'>
                            <div className='user-info'>
                              
                                <div>
                                    <h3>Dr. N G GirishKumar</h3>
                                    <span>Communication director</span>
                                </div>
                            </div>
                            <p>
Joining Interact IT as a Communication Director has been exhilarating. Collaborating with a vibrant team, I shape our brand's narrative, foster meaningful connections, and drive our mission forward. It's not just a job; it's a dynamic journey of innovation and impact.</p>
                        </div>
                    </li>
                    <li>
                        <div className='slide slide2'>
                            <div className='user-info'>
                         
                                <div>
                                    <h3>Yashwanth</h3>
                                    <span>Chief Operating Director</span>
                                </div>
                            </div>
                       <p>
As the Chief Operating Director at Interact IT, I orchestrate seamless operations, ensuring efficiency and excellence in every endeavor. With a focus on strategic planning and team empowerment, I navigate complexities and drive organizational success. Join us in our quest for operational excellence and transformative growth.</p>
                       </div>
                    </li>
                    <li>
                        <div className='slide slide3'>
                            <div className='user-info'>
                            
                                <div>
                                    <h3>Pavan Kumar
                                    </h3>
                                    <span>Marketing Director</span>
                                </div>
                            </div>
              <p>
At Interact IT, as the Marketing Director, I lead a dynamic team in crafting compelling narratives, building brand resonance, and driving impactful campaigns. Together, we leverage innovation and creativity to connect with audiences and propel the company's growth trajectory. Join us in shaping the future of marketing excellence.
              </p>
              </div>
                    </li>
                    <li>
                        <div className='slide slide4'>
                            <div className='user-info'>
                                <div>
                                    <h3>Yashashwini S</h3>
                                    <span>Project Head</span>
                                </div>
                            </div>
         <p>
As the Project Head at Interact IT, I spearhead cross-functional teams, ensuring seamless project execution and delivery. With a focus on strategy, collaboration, and innovation, I drive projects from inception to success. Join our team to lead transformative projects and make a tangible impact in the world of technology.</p>
         </div>
                    </li>
                </ul>
            </div>
        </div>
    );
}
export default Slider;