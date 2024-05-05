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
    const slideForward=()=>{
        console.log(slider.current.style.transform);
        if(tx>-50){
            tx-=25;
        }
        slider.current.style.transform=`translateX(${tx}%)`;
    }
    const slideBackward=()=>{
        console.log(slider.current);
        if(tx<0){
            tx+=25;
        }
        slider.current.style.transform=`translateX(${tx}%)`;
    }

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
                               <div className='user1'></div>
                                <div>
                                    <h3>Wiiliam Jacksom</h3>
                                    <span>Usa</span>
                                </div>
                            </div>
                            <p>My experience with Travel world Company was absolutely fantastic. I got to explore breathtaking landscapes, immerse myself in rich cultures, and create memories that will last a lifetime. I highly recommend  Travel world Company to anyone looking for an unforgettable travel experience.it was awesome connecting to everybody and meeting new people.</p>
                        </div>
                    </li>
                    <li>
                        <div className='slide slide2'>
                            <div className='user-info'>
                            <div className='user2'></div>
                                <div>
                                    <h3>Carlos Martinez</h3>
                                    <span>Canada</span>
                                </div>
                            </div>
                            <p>My voyage with Travel World Company was beyond compare. From the majestic mountains to the bustling city streets, every moment was filled with awe and inspiration. Immersing myself in different cultures, trying new cuisines, and forging connections with fellow travelers made this journey truly unforgettable.</p>
                        </div>
                    </li>
                    <li>
                        <div className='slide slide3'>
                            <div className='user-info'>
                            
                                <div>
                                    <h3>Emma Johnson
                                    </h3>
                                    <span>Spain</span>
                                </div>
                            </div>
               <p>My adventure with Travel World Company was nothing short of extraordinary. From the ancient ruins to the vibrant markets, each destination left a lasting impression on me. Discovering new cultures, tasting exotic flavors, and embarking on thrilling excursions made every moment memorable.</p>
                        </div>
                    </li>
                    <li>
                        <div className='slide slide4'>
                            <div className='user-info'>
                                <div>
                                    <h3>Lisa Wang</h3>
                                    <span>China</span>
                                </div>
                            </div>
         <p>My experience with Travel World Company was simply extraordinary. From the serene countryside to the bustling city streets, each destination offered a unique adventure. Exploring historical landmarks, indulging in local cuisine, and connecting with locals enriched my journey in ways I never imagined.</p>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    );
}
export default Slider;