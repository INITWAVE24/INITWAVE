
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';

import "../App.css";
import { useRef } from 'react'
function Slider(){
    
    const slider=useRef();
    let tx=0;
    const slideForward = () => {
        if (tx > -50) { 
            tx -= 15; 
            slider.current.style.transform = `translateX(${tx}%)`;
        }
    };
    
    const slideBackward = () => {
        if (tx < 0) {
            tx += 15; 
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
                                    <h3>Yogesh R Gowda</h3>
                                    <span>Founder</span>
                                </div>
                            </div>
                          <p>As the founder of Initwave IT, I envision a future where technology serves humanity. With a passion for innovation and a commitment to excellence, I lead our team in creating solutions that empower individuals and organizations worldwide. Join us in shaping the future of technology together</p>
                  </div>
                    </li>
                    <li>
                        <div className='slide slide1'>
                            <div className='user-info'>
                              
                                <div>
                                    <h3>Dr. N G GirishKumar</h3>
                                    <span>Communication director</span>
                                </div>
                            </div>
                           <p>Joining Initwave IT as a Communication Director has been exhilarating. Collaborating with a vibrant team, I shape our brand's narrative and drive our mission forward. it's a dynamic journey of innovation and impact Every day at Initwave IT is an opportunity to push boundaries and inspire positive change through the art of effective communication.</p>
                    </div>
                    </li>
                    <li>
                        <div className='slide slide1'>
                            <div className='user-info'>
                              
                                <div>
                                    <h3>Anitha M R</h3>
                                    <span>Staff director</span>
                                </div>
                            </div>
                          <p>In my role as Staff Director at Initwave IT, I cultivate a culture of collaboration, growth, and excellence among our talented staff members. With a focus on nurturing talent and fostering a supportive work environment, I ensure that every team member thrives and contributes to our collective success. Join our team and be a part of our journey towards excellence.</p>
                   </div>
                    </li>
                    <li>
                        <div className='slide slide2'>
                            <div className='user-info'>
                         
                                <div>
                                    <h3>Yeshwanth P Jadhav </h3>
                                    <span> Chief Technology Officer</span>
                                </div>
                            </div>
                       <p>
As the  Chief Technology Officer at Initwave IT, I orchestrate seamless operations, ensuring efficiency and excellence in every endeavor. With a focus on strategic planning and team empowerment, I navigate complexities and drive organizational success. Join us in our quest for operational excellence and transformative growth.</p>
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
At Initwave IT, as the Marketing Director, I lead a dynamic team in crafting compelling narratives, building brand resonance, and driving impactful campaigns. Together, we leverage innovation and creativity to connect with audiences and propel the company's growth trajectory. Join us in shaping the future of marketing excellence.
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
As the Project Head at Initwave IT, I spearhead cross-functional teams, ensuring seamless project execution and delivery. With a focus on strategy, collaboration, and innovation, I drive projects from inception to success. Join our team to lead transformative projects and make a tangible impact in the world of technology.</p>
         </div>
                    </li>
                </ul>
            </div>
        </div>
    );
}
export default Slider;